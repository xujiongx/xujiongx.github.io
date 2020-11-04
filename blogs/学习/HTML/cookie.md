---
title: Cookies
date: 2020-10-17
categories:
  - 学习
tags:
  - JS
  - 数据储存
---

## 什么是cookies?

- Cookie 是直接存储在浏览器中的一小串数据。它们是 HTTP 协议的一部分，由 [RFC 6265](https://tools.ietf.org/html/rfc6265) 规范定义。
- Cookie 通常是由 Web 服务器使用响应 `Set-Cookie` HTTP-header 设置的。然后浏览器使用 `Cookie` HTTP-header 将它们自动添加到（几乎）每个对相同域的请求中。

## cookies怎么使用？

- 读取cookie:`document.cookie`

- 写入cookie:`document.cookie='user=bob'`

  :::tip

  这不是一个数据属性，它是一个访问器（getter/setter）。对其的赋值操作会被特殊处理。对 `document.cookie` 的写入操作只会更新其中提到的 cookie，而不会涉及其他 cookie。

  :::

- 从技术上讲，cookie 的名称和值可以是任何字符，为了保持有效的格式，它们应该使用内建的 `encodeURIComponent` 函数对其进行转义：

  ```js
  // 特殊字符（空格），需要编码
  let name = "my name";
  let value = "John Smith"
  
  // 将 cookie 编码为 my%20name=John%20Smith
  document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
  
  alert(document.cookie); // ...; my%20name=John%20Smith
  ```

  :::tip

  cookie存在一些限制：

  - `encodeURIComponent` 编码后的 `name=value` 对，大小不能超过 4kb。因此，我们不能在一个 cookie 中保存大的东西。
  - 每个域的 cookie 总数不得超过 20+ 左右，具体限制取决于浏览器。

  :::

## cookie选项

### path

- url 路径前缀，该路径下的页面可以访问该 cookie。必须是绝对路径。默认为当前路径。
- 如果一个 cookie 带有 `path=/admin` 设置，那么该 cookie 在 `/admin` 和 `/admin/something` 下都是可见的，但是在 `/home` 或 `/adminpage` 下不可见。
- 通常，我们应该将 `path` 设置为根目录：`path=/`，以使 cookie 对此网站的所有页面可见。

### domain

- 设置可访问cookie域名
- 默认只能在顶级域名访问cookie；如果设置`domain=site.com`,那么就可以在子域名也可以访问cookies了；如果设置`domain=.site.com`,也可以达到同样的效果，也可以兼容低版本的浏览器

### expires,max-age

- 默认情况下，如果一个 cookie 没有设置这两个参数中的任何一个，那么在关闭浏览器之后，它就会消失。此类 cookie 被称为 "session cookie”。

- 为了让 cookie 在浏览器关闭后仍然存在，我们可以设置 `expires` 或 `max-age` 选项中的一个。

  - expires是设置过期时间的日期，日期必须完全采用 GMT 时区的这种格式。

    `expires=Tue, 19 Jan 2038 03:14:07 GMT`

  - max-age是设置多少秒后过期：

    `max-age=3600`


### secure

- cookie只能被https传输。

### samesite

- 这是另外一个关于安全的特性。它旨在防止 XSRF（跨网站请求伪造）攻击。

### httpOnly

- 如果 cookie 设置了 `httpOnly`，那么 `document.cookie` 则看不到 cookie，所以它受到了保护。

## cookie函数

### getCookie(name)

- 代码：

  ```js
  // 返回具有给定 name 的 cookie，
  // 如果没找到，则返回 undefined
  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  ```

###  setCookie(name.value,option)

- 代码：

  ```js
  function setCookie(name, value, options = {}) {
  
    options = {
      path: '/',
      // 如果需要，可以在这里添加其他默认值
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  
  // 使用范例：
  setCookie('user', 'John', {secure: true, 'max-age': 3600});
  ```

### deleteCookie(name)

- 要删除一个 cookie，我们可以给它设置一个负的过期时间来调用它：

  ```js
  function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }
  ```

## 第三方cookie

- 如果 cookie 是由用户所访问的页面的域以外的域放置的，则称其为第三方 cookie。

## GDPR

- 在为欧盟公民设置跟踪 cookie 时，GDPR 要求必须得到用户明确许可。

## 总结

- `document.cookie` 提供了对 cookie 的访问
  - 写入操作只会修改其中提到的 cookie。
  - name/value 必须被编码。
  - 一个 cookie 最大为 4kb，每个网站最多有 20+ 个左右的 cookie（具体取决于浏览器）。
- Cookie 选项：
  - `path=/`，默认为当前路径，使 cookie 仅在该路径下可见。
  - `domain=site.com`，默认 cookie 仅在当前域下可见，如果显式设置了域，可以使 cookie 在子域下也可见。
  - `expires` 或 `max-age` 设置 cookie 过期时间，如果没有设置，则当浏览器关闭时 cookie 就失效了。
  - `secure` 使 cookie 仅在 HTTPS 下有效。
  - `samesite`，如果请求来自外部网站，禁止浏览器发送 cookie，这有助于防止 XSRF 攻击。