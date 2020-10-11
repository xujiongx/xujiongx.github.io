---
title: Vue源码学习
date: 2020-10-12
categories:
  - 学习
tags:
  - Vue
  - 源码
---

## 准备

- Flow 做类型检查
- 源码目录设计
- Rollup 构建
- 找到 Vue 入口

## 数据驱动

### new Vue 发生了什么？

- 执行了\_init()方法，Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等等。
- 初始化最后检测是否有 el,有就调用 vm.\$mount 方法挂载 vm,挂载的目标就是把模板选染成最后的 DOM。

### Vue 实例挂载是怎么实现的？

- 原型上的\$mount 传入两个参数，第一个是需要挂载的元素，第二个是和服务器端渲染有关的。
- \$mount 方法实际上会去调用 mountComponent 方法
- mountComponent 方法先实例化了一个渲染 Watcher,Watcher 里面回调了一个 updateComponent 方法，此方法调用`vm._render`生成虚拟 DOM，最终调用`vm._update`更新 DOM。最后判断为根节点的时候设置 vm.\_isMounted 为 true,表示实例挂载成功，同时执行 mounted 钩子函数。
- Watcher 的作用是在初始化的时候执行回调函数，在数据更新的时候执行回调函数

### vm.\_render

- \_render 函数是实例的一个私有方法，关键是调用 render 函数，它用来把实例渲染成一个虚拟 Node

- 平时使用 render 函数比较少，一般使用的是 template 模板，在 mounted 函数的实现中有把 template 编译成 render 的实现

  - render 函数转换如下：

    ```vue
    <div id="app">
      {{ message }}
    </div>
    ```

    ```js
    render: function (createElement) { return createElement('div', { attrs: {
    id: 'app' }, }, this.message) }
    ```

- render 函数里面执行了 vm.\$createElement(vm.\_c 是模板编译成的 render 函数),调用了 createElement 方法，返回的是 vnode 的虚拟 Node

### 什么是虚拟 Dom?

- VNode 是对真实 DOM 的一种抽象描述，使用 javascript 对象对 DOM 的表示，核心就是几个关键属性，标签名、数据、子节点、键值等。
- Virtual DOM 除了定义了数据结构，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。create 是通过 createElement 方法实现的。

- createElement
  - createElement 方法实际上是对 `_createElement` 方法的封装，它允许传入的参数更加灵活，在处理这些参数后，调用真正创建 VNode 的函数 `_createElement`
  - \_createElement 有五个参数：
    - `context` 表示 VNode 的上下文环境它是 `Component` 类型
    - `tag`表示标签，它可以是一个字符串，也可以是一个 `Component`
    - `data` 表示 VNode 的数据，它是一个 `VNodeData` 类型
    - `children` 表示当前 VNode 的子节点，它是任意类型的，它接下来需要被规范为标准的 VNode 数组
    - `normalizationType` 表示子节点规范的类型，类型不同规范的方法也就不一样，它主要是参考 `render` 函数是编译生成的还是用户手写的。
  - `createElement` 函数的流程重点包括`children` 的规范化以及 VNode 的创建
    - 经过对 `children` 的规范化，`children` 变成了一个类型为 VNode 的 Array。
    - VNode 创建完后返回一个 VNode

### vm.\_update

- `_update` 方法的作用是把 VNode 渲染成真实的 DOM

- `_update` 的核心就是调用 `vm.__patch__` 方法

- \_patch 方法实际上是调用了 createPathFunction 方法的返回值，这个函数传入了一个对象，包含 nodeOps 参数和 modules 参数，`nodeOps` 封装了一系列 DOM 操作的方法，`modules` 定义了一些模块的钩子函数的实现

- `createPatchFunction` 内部定义了一系列的辅助方法，最终返回了一个 `patch` 方法，这个方法就赋值给了 `vm._update` 函数里调用的 `vm.__patch__`。

  :::tip

  小思考：我们可以思考一下为何 Vue.js 源码绕了这么一大圈，把相关代码分散到各个目录。因为，`patch` 是平台相关的，在 Web 和 Weex 环境，它们把虚拟 DOM 映射到 “平台 DOM” 的方法是不同的，并且对 “DOM” 包括的属性模块创建和更新也不尽相同。因此每个平台都有各自的 `nodeOps` 和 `modules`，它们的代码需要托管在 `src/platforms` 这个大目录下。

  而不同平台的 `patch` 的主要逻辑部分是相同的，所以这部分公共的部分托管在 `core` 这个大目录下。差异化部分只需要通过参数来区别，这里用到了一个**函数柯里化**的技巧，通过 `createPatchFunction` 把差异化参数提前固化，这样不用每次调用 `patch` 的时候都传递 `nodeOps` 和 `modules` 了，这种编程技巧也非常值得学习。

  :::

- patch 方法接受四个参数：

  - `oldVnode` 表示旧的 VNode 节点，它也可以不存在或者是一个 DOM 对象
  - `vnode` 表示执行 `_render` 后返回的 VNode 的节点
  - `hydrating` 表示是否是服务端渲染；
  - `removeOnly` 是给 `transition-group` 用的

- 案例演示：

  - 代码：

    ```vue
    var app = new Vue({ el: '#app', render: function (createElement) { return
    createElement('div', { attrs: { id: 'app' }, }, this.message) }, data: {
    message: 'Hello Vue!' } })
    ```

  - 在 vm.\_update 的方法是这样调用 patch 方法的`vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)`

  - 传入的 `oldVnode` 实际上是一个 DOM container,通过 `emptyNodeAt` 方法把 `oldVnode` 转换成 `VNode` 对象，然后再调用 `createElm` 方法

  - `createElm` 的作用是通过虚拟节点创建真实的 DOM 并插入到它的父节点中。

    - 先 createComponent 方法目的是尝试创建子组件，接下来判断 `vnode` 是否包含 tag，如果包含，先简单对 tag 的合法性在非生产环境下做校验，看是否是一个合法标签；然后再去调用平台 DOM 的操作去创建一个占位符元素。
    - 再执行`createChildren` ，逻辑很简单，实际上是遍历子虚拟节点，递归调用 `createElm`，这是一种常用的深度优先的遍历算法，这里要注意的一点是在遍历过程中会把 `vnode.elm` 作为父容器的 DOM 节点占位符传入。
    - 接着再调用 `invokeCreateHooks` 方法执行所有的 create 的钩子并把 `vnode` push 到 `insertedVnodeQueue` 中。
    - 最后调用 `insert` 方法把 `DOM` 插入到父节点中，因为是递归调用，子元素会优先调用 `insert`，所以整个 `vnode` 树节点的插入顺序是先子后父。
    - `insert` 逻辑很简单，调用一些 `nodeOps` 把子节点插入到父节点中

  - 实际上整个过程就是递归创建了一个完整的 DOM 树并插入到 Body 上，最后根据之前递归 `createElm` 生成的 `vnode` 插入顺序队列，执行相关的 `insert` 钩子函数

## 组件化
