---
title: Web Components
date: 2020-10-13
categories:
  - 学习
tags:
  - JS
  - WebComponents
---

## 如何划分一个组件？

- 使用场景：通常情况下，如果一个独立可视化实体，我们可以描述其可以做什么和如何在页面上交互，那么就可以将其划分为一个组件
- 组件组成：
  - 自己的 JavaScript 类。
  - DOM 结构，并且只由自己的类管理，无法被外部代码操作。（「封装」原则）。
  - CSS 样式，作用在这个组件上。
  - API：事件，类方法等等，让组件可以与其他组件交互。
- 浏览器原生支持（Web Components）：
  - Custom elements —— 用于自定义 HTML 元素.
  - Shadow DOM —— 为组件创建内部 DOM，它对外部是不可见的。
  - CSS Scoping —— 申明仅应用于组件的 Shadow DOM 内的样式。
  - Event retargeting 以及更多的小东西，让自定义组件更适用于开发工作。

## Custom elements

- 分类

  1. **Autonomous custom elements （自主自定义标签）** —— “全新的” 元素, 继承自 `HTMLElement` 抽象类.
  2. **Customized built-in elements （自定义内置元素）** —— 继承内置的 HTML 元素，比如自定义 `HTMLButtonElement` 等。

- 如何使用？

  - custom
    1. 申明元素：`class MyElement extends HTMLElement{}`;
    2. 注册元素：`customElements.define("my-element", MyElement);`
    3. html页面中使用：` <my-element></my-element>`
  - built-in
    1. 声明元素：`class HelloButton extends HTMLButtonElement { /* custom element 方法 */ }`
    2. 注册元素：`customElements.define('hello-button', HelloButton, {extends: 'button'});`
    3. 页面中使用：`<button is="hello-button">...</button>`

- 监听属性：可以在 `observedAttributes()` static getter 中提供属性列表。当这些属性发生变化的时候，`attributeChangedCallback` 会被调用。

- 案例：

  ```js
  //custom.js
  //自主自定义标签
  
  //声明元素
  class MyElement extends HTMLElement {
    constructor() {
      super();
      // 元素在这里创建
    }
  
    connectedCallback() {
      // 在元素被添加到文档之后，浏览器会调用这个方法
      //（如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用）
        console.log('创建成功')
    }
  
    disconnectedCallback() {
      // 在元素从文档移除到时候，浏览器会调用这个方法
      // （如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用）
    }
  
    static get observedAttributes() {
      return [/* 属性数组，这些属性的变化会被被监视 */];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      // 当上面数组里面的属性变化的时候，这个方法会被调用
    }
  
    adoptedCallback() {
      // 在元素被移动到新的文档的时候，这个方法会被调用
      // （document.adoptNode 会用到, 非常少见）
    }
  
    // 还可以添加更多的元素方法和属性
  }
  
  
  //connectedCallback里面渲染组件
  class TimeFormatted extends HTMLElement {
    render() {
      let date = new Date(this.getAttribute("datetime") || Date.now());
      this.innerHTML = new Intl.DateTimeFormat("default", {
        year: this.getAttribute("year") || undefined,
        month: this.getAttribute("month") || undefined,
        day: this.getAttribute("day") || undefined,
        hour: this.getAttribute("hour") || undefined,
        minute: this.getAttribute("minute") || undefined,
        second: this.getAttribute("second") || undefined,
        timeZoneName: this.getAttribute("time-zone-name") || undefined,
      }).format(date);
    }
    connectedCallback() {
        if(!this.rendered){
            this.render()
            this.rendered=true
        }
    }
  
    static get observedAttributes(){
        return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name']
    }
  
    attributeChangedCallback(name, oldValue, newValue){
        this.render()
    }
  }
  
  //注册元素
  // 让浏览器知道我们新定义的类是为 <my-element> 服务的
  customElements.define("my-element", MyElement);
  customElements.define("time-formatted", TimeFormatted);
  
  ```

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <script src="./custom.js"></script>
      <script src="./built-in.js"></script>
      <script src="./shadow.js"></script>
    </head>
    <body>
      <my-element></my-element>
      <time-formatted 
      year="numeric" month="long" day="numeric"
      hour="numeric" minute="numeric" second="numeric"
      id="timeDemo"></time-formatted>
      <button is="hello-button">Hello</button>
      <shadow-hello name="琉璃"></shadow-hello>
      <script>
        setInterval(() => timeDemo.setAttribute("datetime", new Date()), 1000);
      </script>
    </body>
  </html>
  
  ```

  

## 影子DOM

- 什么是shadow DOM?

  - 比如 `<input type="range">`：<input type="range">

    ![range](https://zh.javascript.info/article/shadow-dom/shadow-dom-range@2x.png)

- 为什么我的浏览器里面看不到？
  - 这个 DOM 结构一般来说对我们是隐藏的，我们可以在开发者工具里面看见它。比如，在 Chrome 里，我们需要打开设置里面的「Show user agent shadow DOM」选项。
- 注意：
  - 一个 DOM 元素可以有以下两类 DOM 子树：
    1. Light tree（光明树） —— 一个常规 DOM 子树，由 HTML 子元素组成。我们在之前章节看到的所有子树都是「光明的」。
    2. Shadow tree（影子树） —— 一个隐藏的 DOM 子树，不在 HTML 中反映，无法被察觉。
  - 如果一个元素同时有以上两种子树，那么浏览器只渲染 shadow tree。但是我们同样可以设置两种树的组合。 Shadow DOM 插槽，组成中会有更多细节。
- 哪些元素有shadow?
  -  

## Template元素



## slot插槽



## 给shadow设置样式



## 给shadow设置事件

 