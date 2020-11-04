---
title: Vue3入门
date: 2020-11-05
categories:
  - 学习
tags:
  - Vue3
---

## 介绍

- 兼容vue2大部分特性

- 性能提升
    - 打包减少41%
    - 初次渲染快55%，更新快133%
    - 内存使用减少54%（重写vdom）

- composition API
    - ref和reactive
    - computed和watch
    - 新的生命周期函数
    - 自定义函数-Hooks函数

- 新特性
    - Teleport- 瞬移组件的位置
    - Suspense- 异步加载组件的新福音
    - 全局api的修改和优化
    - 更多实验特性

- typescript支持



## 为什么要有Vue3？

vue2遇到的难题

- 随着功能的增长，复杂组件的代码变得难以维护

- Minxin的缺点
  - 命名冲突
  - 不清楚暴露出来的变量的作用
  - 重用到其他components经常会遇到问题

- typescript的支持非常有限

## vue-cli

安装：

- npm i -g @vue/cli  
-  如果已经安装过旧版本，则需要更新npm updata -g @vue/cli

使用：

- vue --version查看版本号
- vue create project-name创建新项目

vscode推荐插件

- eslint
- vetur

## ref

- setup()方法
- ref()传入的是原始类型
- computed()计算属性
- reactive()传入的是对象
- toRefs()将原始属性变成ref响应式数据



## 生命周期

- beforeCreate->use setup()
- cerated->use setup()
- beforeMount->onBeforeMount
- mounted->onMounted
- beforeUpdate->onUpdate
- updated->OnUpdated
- beforeDestory->onUnmount
- destory->onUnmounted
- activated->onActivated
- deactivated->onDeactivated
- errorCaptyred->onErrorCaptured

新增

- onRenderTracked
- onRenderTriggered



## watch

### 为什么要有watch?

- 不仅仅只有数据和界面，还有网络请求和特殊dom操作，订阅数据来源

- 比如监视页面标题变化，setup只在created的时候触发，数据更新的时候不会触发，需要watch来监听数据变化执行dom操作
- 监听响应数据的变化，并且执行一些副作用的逻辑





## vue3模块化

- 模块化，重用
- 场景：跟踪鼠标位置
  - 新建hooks文件夹，把重用逻辑写入一个ts文件

## defineComponent

## Teleport

组件瞬移

## emits

## suspense

- 异步请求困境

- 特殊组件

- 需要返回一个Promise

- 定义一个异步组件

  ```vue
  <template>
  <h1>{{result}}</h1>
  </template>
  
  <script>
  import {
      defineComponent
  } from 'vue'
  export default defineComponent({
      setup() {
          return new Promise((resolve) => {
              setTimeout(() => {
                  return resolve({
                      result: 42
                  })
              }, 3000)
          })
      }
  })
  </script>
  ```

  

- 使用(#default和#fallback)

  ```vue
  <Suspense>
      <template #default>
          <AsyncShow />
      </template>
      <template #fallback>
          <h1>Loading...</h1>
      </template>
  </Suspense>
  ```

  

## 全局api的修改

- vue3

```js
import {createApp} from 'vue'
import App from './App.vue'

const app=createApp(App)

app.config.isCustomElement=tag=>tag.startsWith('app-') 

app.use()

app.mixin()

app.component()

app.directive()

 app.mount('#app')
```

- vue2全局api遇到的问题
  - 在单元测试中，全局配容易污染全局环境
  - 在不同的app中，共享一份有不同配置的vue对象，也变得非常困难

- 全局配置：Vue.config->app.config
  - config.productionTip被删除
  - config.ignoredElements改名为config.isCUstomElement
  - config.keyCodes被删除
- 全局注册类API
  - Vue.component->app.component
  - Vue.directive->app.directive
- 行为扩展类
  - Vue.mixin->app.mixin
  - Vue.use->app.use

- Treeshaking

  具名导出，减少模块大小

  ```js
  //vue2
  import Vue from 'vue'
  Vue.nextTick(()=>{})
  const obj=Vue.observable({})
  
  //vue3
  import Vue,{nextTick,observable} from 'vue'
  Vue.nextTick
  nextTick(()=>{})
  const obj=observable({})
  ```

  