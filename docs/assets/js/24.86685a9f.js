(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{519:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"什么是cookies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是cookies"}},[t._v("#")]),t._v(" 什么是cookies?")]),t._v(" "),a("ul",[a("li",[t._v("Cookie 是直接存储在浏览器中的一小串数据。它们是 HTTP 协议的一部分，由 "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 6265"),a("OutboundLink")],1),t._v(" 规范定义。")]),t._v(" "),a("li",[t._v("Cookie 通常是由 Web 服务器使用响应 "),a("code",[t._v("Set-Cookie")]),t._v(" HTTP-header 设置的。然后浏览器使用 "),a("code",[t._v("Cookie")]),t._v(" HTTP-header 将它们自动添加到（几乎）每个对相同域的请求中。")])]),t._v(" "),a("h2",{attrs:{id:"cookies怎么使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookies怎么使用"}},[t._v("#")]),t._v(" cookies怎么使用？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("读取cookie:"),a("code",[t._v("document.cookie")])])]),t._v(" "),a("li",[a("p",[t._v("写入cookie:"),a("code",[t._v("document.cookie='user=bob'")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("这不是一个数据属性，它是一个访问器（getter/setter）。对其的赋值操作会被特殊处理。对 "),a("code",[t._v("document.cookie")]),t._v(" 的写入操作只会更新其中提到的 cookie，而不会涉及其他 cookie。")])])]),t._v(" "),a("li",[a("p",[t._v("从技术上讲，cookie 的名称和值可以是任何字符，为了保持有效的格式，它们应该使用内建的 "),a("code",[t._v("encodeURIComponent")]),t._v(" 函数对其进行转义：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 特殊字符（空格），需要编码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Smith"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 cookie 编码为 my%20name=John%20Smith")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'='")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...; my%20name=John%20Smith")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("cookie存在一些限制：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("encodeURIComponent")]),t._v(" 编码后的 "),a("code",[t._v("name=value")]),t._v(" 对，大小不能超过 4kb。因此，我们不能在一个 cookie 中保存大的东西。")]),t._v(" "),a("li",[t._v("每个域的 cookie 总数不得超过 20+ 左右，具体限制取决于浏览器。")])])])])]),t._v(" "),a("h2",{attrs:{id:"cookie选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie选项"}},[t._v("#")]),t._v(" cookie选项")]),t._v(" "),a("h3",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" path")]),t._v(" "),a("ul",[a("li",[t._v("url 路径前缀，该路径下的页面可以访问该 cookie。必须是绝对路径。默认为当前路径。")]),t._v(" "),a("li",[t._v("如果一个 cookie 带有 "),a("code",[t._v("path=/admin")]),t._v(" 设置，那么该 cookie 在 "),a("code",[t._v("/admin")]),t._v(" 和 "),a("code",[t._v("/admin/something")]),t._v(" 下都是可见的，但是在 "),a("code",[t._v("/home")]),t._v(" 或 "),a("code",[t._v("/adminpage")]),t._v(" 下不可见。")]),t._v(" "),a("li",[t._v("通常，我们应该将 "),a("code",[t._v("path")]),t._v(" 设置为根目录："),a("code",[t._v("path=/")]),t._v("，以使 cookie 对此网站的所有页面可见。")])]),t._v(" "),a("h3",{attrs:{id:"domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[t._v("#")]),t._v(" domain")]),t._v(" "),a("ul",[a("li",[t._v("设置可访问cookie域名")]),t._v(" "),a("li",[t._v("默认只能在顶级域名访问cookie；如果设置"),a("code",[t._v("domain=site.com")]),t._v(",那么就可以在子域名也可以访问cookies了；如果设置"),a("code",[t._v("domain=.site.com")]),t._v(",也可以达到同样的效果，也可以兼容低版本的浏览器")])]),t._v(" "),a("h3",{attrs:{id:"expires-max-age"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires-max-age"}},[t._v("#")]),t._v(" expires,max-age")]),t._v(" "),a("ul",[a("li",[a("p",[t._v('默认情况下，如果一个 cookie 没有设置这两个参数中的任何一个，那么在关闭浏览器之后，它就会消失。此类 cookie 被称为 "session cookie”。')])]),t._v(" "),a("li",[a("p",[t._v("为了让 cookie 在浏览器关闭后仍然存在，我们可以设置 "),a("code",[t._v("expires")]),t._v(" 或 "),a("code",[t._v("max-age")]),t._v(" 选项中的一个。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("expires是设置过期时间的日期，日期必须完全采用 GMT 时区的这种格式。")]),t._v(" "),a("p",[a("code",[t._v("expires=Tue, 19 Jan 2038 03:14:07 GMT")])])]),t._v(" "),a("li",[a("p",[t._v("max-age是设置多少秒后过期：")]),t._v(" "),a("p",[a("code",[t._v("max-age=3600")])])])])])]),t._v(" "),a("h3",{attrs:{id:"secure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secure"}},[t._v("#")]),t._v(" secure")]),t._v(" "),a("ul",[a("li",[t._v("cookie只能被https传输。")])]),t._v(" "),a("h3",{attrs:{id:"samesite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[t._v("#")]),t._v(" samesite")]),t._v(" "),a("ul",[a("li",[t._v("这是另外一个关于安全的特性。它旨在防止 XSRF（跨网站请求伪造）攻击。")])]),t._v(" "),a("h3",{attrs:{id:"httponly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[t._v("#")]),t._v(" httpOnly")]),t._v(" "),a("ul",[a("li",[t._v("如果 cookie 设置了 "),a("code",[t._v("httpOnly")]),t._v("，那么 "),a("code",[t._v("document.cookie")]),t._v(" 则看不到 cookie，所以它受到了保护。")])]),t._v(" "),a("h2",{attrs:{id:"cookie函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie函数"}},[t._v("#")]),t._v(" cookie函数")]),t._v(" "),a("h3",{attrs:{id:"getcookie-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getcookie-name"}},[t._v("#")]),t._v(" getCookie(name)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回具有给定 name 的 cookie，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果没找到，则返回 undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" matches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(?:^|; )"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\$1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"=([^;]*)"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" matches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"setcookie-name-value-option"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setcookie-name-value-option"}},[t._v("#")]),t._v(" setCookie(name.value,option)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果需要，可以在这里添加其他默认值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("options\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expires "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expires "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expires"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUTCString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" updatedCookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" optionKey "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    updatedCookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" optionKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" optionValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("optionKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("optionValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      updatedCookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" optionValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" updatedCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用范例：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("secure"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'max-age'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"deletecookie-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deletecookie-name"}},[t._v("#")]),t._v(" deleteCookie(name)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("要删除一个 cookie，我们可以给它设置一个负的过期时间来调用它：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'max-age'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"第三方cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方cookie"}},[t._v("#")]),t._v(" 第三方cookie")]),t._v(" "),a("ul",[a("li",[t._v("如果 cookie 是由用户所访问的页面的域以外的域放置的，则称其为第三方 cookie。")])]),t._v(" "),a("h2",{attrs:{id:"gdpr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gdpr"}},[t._v("#")]),t._v(" GDPR")]),t._v(" "),a("ul",[a("li",[t._v("在为欧盟公民设置跟踪 cookie 时，GDPR 要求必须得到用户明确许可。")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("document.cookie")]),t._v(" 提供了对 cookie 的访问\n"),a("ul",[a("li",[t._v("写入操作只会修改其中提到的 cookie。")]),t._v(" "),a("li",[t._v("name/value 必须被编码。")]),t._v(" "),a("li",[t._v("一个 cookie 最大为 4kb，每个网站最多有 20+ 个左右的 cookie（具体取决于浏览器）。")])])]),t._v(" "),a("li",[t._v("Cookie 选项：\n"),a("ul",[a("li",[a("code",[t._v("path=/")]),t._v("，默认为当前路径，使 cookie 仅在该路径下可见。")]),t._v(" "),a("li",[a("code",[t._v("domain=site.com")]),t._v("，默认 cookie 仅在当前域下可见，如果显式设置了域，可以使 cookie 在子域下也可见。")]),t._v(" "),a("li",[a("code",[t._v("expires")]),t._v(" 或 "),a("code",[t._v("max-age")]),t._v(" 设置 cookie 过期时间，如果没有设置，则当浏览器关闭时 cookie 就失效了。")]),t._v(" "),a("li",[a("code",[t._v("secure")]),t._v(" 使 cookie 仅在 HTTPS 下有效。")]),t._v(" "),a("li",[a("code",[t._v("samesite")]),t._v("，如果请求来自外部网站，禁止浏览器发送 cookie，这有助于防止 XSRF 攻击。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);