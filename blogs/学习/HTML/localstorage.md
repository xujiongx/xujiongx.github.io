---
title: Web Storage
date: 2020-02-02
categories: 
    - 学习
tags: 
    - HTML
    - 浏览器
    - 数据储存
---


## LocalStorage和sessionStorage

### 有什么用？

- Web 存储对象 `localStorage` 和 `sessionStorage` 允许我们在浏览器上保存键/值对。

- 在页面刷新后（对于 `sessionStorage`）甚至浏览器完全重启（对于 `localStorage`）后，数据仍然保留在浏览器中。

### 和cookie有什么区别？

- 不会随每个请求被发送到服务器，可以保存更多数据（2M）

- 服务器无法通过 HTTP header 操纵存储对象。一切都是在 JavaScript 中完成的。

- 不支持跨域

### 相同的方法和属性

- `setItem(key, value)` —— 存储键/值对。
- `getItem(key)` —— 按照键获取值。
- `removeItem(key)` —— 删除键及其对应的值。
- `clear()` —— 删除所有数据。
- `key(index)` —— 获取该索引下的键名。
- `length` —— 存储的内容的长度。

### 两者的区别

- `sessionStorage` 对象的使用频率比 `localStorage` 对象低得多。

  属性和方法是相同的，但是它有更多的限制：

  - sessionStorage的数据只存在于当前浏览器标签页。
  - 具有相同页面的另一个标签页中将会有不同的存储。
  - 但是，它在同一标签页下的 iframe 之间是共享的（假如它们来自相同的源）。
  - 数据在页面刷新后仍然保留，但在关闭/重新打开浏览器标签页后不会被保留。

### stroage事件

当 `localStorage` 或 `sessionStorage` 中的数据更新后，[storage](https://www.w3.org/TR/webstorage/#the-storage-event) 事件就会触发，它具有以下属性：

- `key` —— 发生更改的数据的 `key`（如果调用的是 `.clear()` 方法，则为 `null`）。
- `oldValue` —— 旧值（如果是新增数据，则为 `null`）。
- `newValue` —— 新值（如果是删除数据，则为 `null`）。
- `url` —— 发生数据更新的文档的 url。
- `storageArea` —— 发生数据更新的 `localStorage` 或 `sessionStorage` 对象。

重要的是：该事件会在所有可访问到存储对象的 `window` 对象上触发，导致当前数据改变的 `window` 对象除外，因此可以用来同源不同窗口交换消息。



### 总结

- 差别是一个浏览器刷新后保存，一个即使浏览器关闭也可以保存。

- 键名和键值都是字符串，可以使用json改造

- 增删改查api,Object.keys获取所有的键。

- storage事件可以用来同源不同窗口信息交换。

  