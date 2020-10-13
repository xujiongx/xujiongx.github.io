(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{523:function(e,t,a){"use strict";a.r(t);var v=a(4),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[e._v("#")]),e._v(" 准备")]),e._v(" "),a("ul",[a("li",[e._v("Flow 做类型检查")]),e._v(" "),a("li",[e._v("源码目录设计")]),e._v(" "),a("li",[e._v("Rollup 构建")]),e._v(" "),a("li",[e._v("找到 Vue 入口")])]),e._v(" "),a("h2",{attrs:{id:"数据驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动"}},[e._v("#")]),e._v(" 数据驱动")]),e._v(" "),a("h3",{attrs:{id:"new-vue-发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-vue-发生了什么"}},[e._v("#")]),e._v(" new Vue 发生了什么？")]),e._v(" "),a("ul",[a("li",[e._v("执行了_init()方法，Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等等。")]),e._v(" "),a("li",[e._v("初始化最后检测是否有 el,有就调用 vm.$mount 方法挂载 vm,挂载的目标就是把模板选染成最后的 DOM。")])]),e._v(" "),a("h3",{attrs:{id:"vue-实例挂载是怎么实现的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-实例挂载是怎么实现的"}},[e._v("#")]),e._v(" Vue 实例挂载是怎么实现的？")]),e._v(" "),a("ul",[a("li",[e._v("原型上的$mount 传入两个参数，第一个是需要挂载的元素，第二个是和服务器端渲染有关的。")]),e._v(" "),a("li",[e._v("$mount 方法实际上会去调用 mountComponent 方法")]),e._v(" "),a("li",[e._v("mountComponent 方法先实例化了一个渲染 Watcher,Watcher 里面回调了一个 updateComponent 方法，此方法调用"),a("code",[e._v("vm._render")]),e._v("生成虚拟 DOM，最终调用"),a("code",[e._v("vm._update")]),e._v("更新 DOM。最后判断为根节点的时候设置 vm._isMounted 为 true,表示实例挂载成功，同时执行 mounted 钩子函数。")]),e._v(" "),a("li",[e._v("Watcher 的作用是在初始化的时候执行回调函数，在数据更新的时候执行回调函数")])]),e._v(" "),a("h3",{attrs:{id:"vm-render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-render"}},[e._v("#")]),e._v(" vm._render")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("_render 函数是实例的一个私有方法，关键是调用 render 函数，它用来把实例渲染成一个虚拟 Node")])]),e._v(" "),a("li",[a("p",[e._v("平时使用 render 函数比较少，一般使用的是 template 模板，在 mounted 函数的实现中有把 template 编译成 render 的实现")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("render 函数转换如下：")]),e._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("div")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n  {{ message }}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("render")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" attrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\nid"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'app'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])])])]),e._v(" "),a("li",[a("p",[e._v("render 函数里面执行了 vm.$createElement(vm._c 是模板编译成的 render 函数),调用了 createElement 方法，返回的是 vnode 的虚拟 Node")])])]),e._v(" "),a("h3",{attrs:{id:"什么是虚拟-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟-dom"}},[e._v("#")]),e._v(" 什么是虚拟 Dom?")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("VNode 是对真实 DOM 的一种抽象描述，使用 javascript 对象对 DOM 的表示，核心就是几个关键属性，标签名、数据、子节点、键值等。")])]),e._v(" "),a("li",[a("p",[e._v("Virtual DOM 除了定义了数据结构，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。create 是通过 createElement 方法实现的。")])]),e._v(" "),a("li",[a("p",[e._v("createElement")]),e._v(" "),a("ul",[a("li",[e._v("createElement 方法实际上是对 "),a("code",[e._v("_createElement")]),e._v(" 方法的封装，它允许传入的参数更加灵活，在处理这些参数后，调用真正创建 VNode 的函数 "),a("code",[e._v("_createElement")])]),e._v(" "),a("li",[e._v("_createElement 有五个参数：\n"),a("ul",[a("li",[a("code",[e._v("context")]),e._v(" 表示 VNode 的上下文环境它是 "),a("code",[e._v("Component")]),e._v(" 类型")]),e._v(" "),a("li",[a("code",[e._v("tag")]),e._v("表示标签，它可以是一个字符串，也可以是一个 "),a("code",[e._v("Component")])]),e._v(" "),a("li",[a("code",[e._v("data")]),e._v(" 表示 VNode 的数据，它是一个 "),a("code",[e._v("VNodeData")]),e._v(" 类型")]),e._v(" "),a("li",[a("code",[e._v("children")]),e._v(" 表示当前 VNode 的子节点，它是任意类型的，它接下来需要被规范为标准的 VNode 数组")]),e._v(" "),a("li",[a("code",[e._v("normalizationType")]),e._v(" 表示子节点规范的类型，类型不同规范的方法也就不一样，它主要是参考 "),a("code",[e._v("render")]),e._v(" 函数是编译生成的还是用户手写的。")])])]),e._v(" "),a("li",[a("code",[e._v("createElement")]),e._v(" 函数的流程重点包括"),a("code",[e._v("children")]),e._v(" 的规范化以及 VNode 的创建\n"),a("ul",[a("li",[e._v("经过对 "),a("code",[e._v("children")]),e._v(" 的规范化，"),a("code",[e._v("children")]),e._v(" 变成了一个类型为 VNode 的 Array。")]),e._v(" "),a("li",[e._v("VNode 创建完后返回一个 VNode")])])])])])]),e._v(" "),a("h3",{attrs:{id:"vm-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-update"}},[e._v("#")]),e._v(" vm._update")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("_update")]),e._v(" 方法的作用是把 VNode 渲染成真实的 DOM")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("_update")]),e._v(" 的核心就是调用 "),a("code",[e._v("vm.__patch__")]),e._v(" 方法")])]),e._v(" "),a("li",[a("p",[e._v("_patch 方法实际上是调用了 createPathFunction 方法的返回值，这个函数传入了一个对象，包含 nodeOps 参数和 modules 参数，"),a("code",[e._v("nodeOps")]),e._v(" 封装了一系列 DOM 操作的方法，"),a("code",[e._v("modules")]),e._v(" 定义了一些模块的钩子函数的实现")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("createPatchFunction")]),e._v(" 内部定义了一系列的辅助方法，最终返回了一个 "),a("code",[e._v("patch")]),e._v(" 方法，这个方法就赋值给了 "),a("code",[e._v("vm._update")]),e._v(" 函数里调用的 "),a("code",[e._v("vm.__patch__")]),e._v("。")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("小思考：我们可以思考一下为何 Vue.js 源码绕了这么一大圈，把相关代码分散到各个目录。因为，"),a("code",[e._v("patch")]),e._v(" 是平台相关的，在 Web 和 Weex 环境，它们把虚拟 DOM 映射到 “平台 DOM” 的方法是不同的，并且对 “DOM” 包括的属性模块创建和更新也不尽相同。因此每个平台都有各自的 "),a("code",[e._v("nodeOps")]),e._v(" 和 "),a("code",[e._v("modules")]),e._v("，它们的代码需要托管在 "),a("code",[e._v("src/platforms")]),e._v(" 这个大目录下。")]),e._v(" "),a("p",[e._v("而不同平台的 "),a("code",[e._v("patch")]),e._v(" 的主要逻辑部分是相同的，所以这部分公共的部分托管在 "),a("code",[e._v("core")]),e._v(" 这个大目录下。差异化部分只需要通过参数来区别，这里用到了一个"),a("strong",[e._v("函数柯里化")]),e._v("的技巧，通过 "),a("code",[e._v("createPatchFunction")]),e._v(" 把差异化参数提前固化，这样不用每次调用 "),a("code",[e._v("patch")]),e._v(" 的时候都传递 "),a("code",[e._v("nodeOps")]),e._v(" 和 "),a("code",[e._v("modules")]),e._v(" 了，这种编程技巧也非常值得学习。")])])]),e._v(" "),a("li",[a("p",[e._v("patch 方法接受四个参数：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("oldVnode")]),e._v(" 表示旧的 VNode 节点，它也可以不存在或者是一个 DOM 对象")]),e._v(" "),a("li",[a("code",[e._v("vnode")]),e._v(" 表示执行 "),a("code",[e._v("_render")]),e._v(" 后返回的 VNode 的节点")]),e._v(" "),a("li",[a("code",[e._v("hydrating")]),e._v(" 表示是否是服务端渲染；")]),e._v(" "),a("li",[a("code",[e._v("removeOnly")]),e._v(" 是给 "),a("code",[e._v("transition-group")]),e._v(" 用的")])])]),e._v(" "),a("li",[a("p",[e._v("案例演示：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("代码：")]),e._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[e._v("var app = new Vue({ el: '#app', render: function (createElement) { return\ncreateElement('div', { attrs: { id: 'app' }, }, this.message) }, data: {\nmessage: 'Hello Vue!' } })\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("在 vm._update 的方法是这样调用 patch 方法的"),a("code",[e._v("vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)")])])]),e._v(" "),a("li",[a("p",[e._v("传入的 "),a("code",[e._v("oldVnode")]),e._v(" 实际上是一个 DOM container,通过 "),a("code",[e._v("emptyNodeAt")]),e._v(" 方法把 "),a("code",[e._v("oldVnode")]),e._v(" 转换成 "),a("code",[e._v("VNode")]),e._v(" 对象，然后再调用 "),a("code",[e._v("createElm")]),e._v(" 方法")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("createElm")]),e._v(" 的作用是通过虚拟节点创建真实的 DOM 并插入到它的父节点中。")]),e._v(" "),a("ul",[a("li",[e._v("先 createComponent 方法目的是尝试创建子组件，接下来判断 "),a("code",[e._v("vnode")]),e._v(" 是否包含 tag，如果包含，先简单对 tag 的合法性在非生产环境下做校验，看是否是一个合法标签；然后再去调用平台 DOM 的操作去创建一个占位符元素。")]),e._v(" "),a("li",[e._v("再执行"),a("code",[e._v("createChildren")]),e._v(" ，逻辑很简单，实际上是遍历子虚拟节点，递归调用 "),a("code",[e._v("createElm")]),e._v("，这是一种常用的深度优先的遍历算法，这里要注意的一点是在遍历过程中会把 "),a("code",[e._v("vnode.elm")]),e._v(" 作为父容器的 DOM 节点占位符传入。")]),e._v(" "),a("li",[e._v("接着再调用 "),a("code",[e._v("invokeCreateHooks")]),e._v(" 方法执行所有的 create 的钩子并把 "),a("code",[e._v("vnode")]),e._v(" push 到 "),a("code",[e._v("insertedVnodeQueue")]),e._v(" 中。")]),e._v(" "),a("li",[e._v("最后调用 "),a("code",[e._v("insert")]),e._v(" 方法把 "),a("code",[e._v("DOM")]),e._v(" 插入到父节点中，因为是递归调用，子元素会优先调用 "),a("code",[e._v("insert")]),e._v("，所以整个 "),a("code",[e._v("vnode")]),e._v(" 树节点的插入顺序是先子后父。")]),e._v(" "),a("li",[a("code",[e._v("insert")]),e._v(" 逻辑很简单，调用一些 "),a("code",[e._v("nodeOps")]),e._v(" 把子节点插入到父节点中")])])]),e._v(" "),a("li",[a("p",[e._v("实际上整个过程就是递归创建了一个完整的 DOM 树并插入到 Body 上，最后根据之前递归 "),a("code",[e._v("createElm")]),e._v(" 生成的 "),a("code",[e._v("vnode")]),e._v(" 插入顺序队列，执行相关的 "),a("code",[e._v("insert")]),e._v(" 钩子函数")])])])])]),e._v(" "),a("h2",{attrs:{id:"组件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[e._v("#")]),e._v(" 组件化")])])}),[],!1,null,null,null);t.default=_.exports}}]);