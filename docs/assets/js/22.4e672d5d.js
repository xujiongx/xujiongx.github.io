(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{521:function(t,e,v){"use strict";v.r(e);var _=v(4),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"浏览器渲染流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染流程"}},[t._v("#")]),t._v(" 浏览器渲染流程")]),t._v(" "),v("ul",[v("li",[t._v("解析html")]),t._v(" "),v("li",[t._v("构建dom树（深度遍历）")]),t._v(" "),v("li",[t._v("构建render树（DOM+CSSOM）")]),t._v(" "),v("li",[t._v("布局render树(Layout)")]),t._v(" "),v("li",[t._v("绘制render树")])]),t._v(" "),v("blockquote",[v("p",[t._v("这个过程是逐步完成的，为了更好的用户体验，渲染引擎将会尽可能早的将内容呈现到屏幕上，并不会等到所有的html都解析完成之后再去构建和布局render树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。")])]),t._v(" "),v("blockquote",[v("p",[t._v("所以浏览器会解析html,css,js")]),t._v(" "),v("p",[t._v("html->dom树")]),t._v(" "),v("p",[t._v("css->cssom树")]),t._v(" "),v("p",[t._v("js->通过 DOM API 和 CSSOM API 来操作 DOM Tree 和 CSS Rule Tree")])]),t._v(" "),v("h2",{attrs:{id:"渲染过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程"}},[t._v("#")]),t._v(" 渲染过程")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("Reflow（回流）")]),t._v("：浏览器要花时间去渲染，当它发现了某个部分发生了变化影响了布局，就需要倒回去重新渲染。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Repaint（重绘）")]),t._v("：如果只是改变了某个元素的背景颜色，文字颜色等，不影响元素周围或内部布局的属性，将只会引起浏览器的repaint，重画某一部分。")])])]),t._v(" "),v("blockquote",[v("p",[t._v("Reflow要比Repaint更花费时间，也就更影响性能。要尽量避免过多的Reflow。")])]),t._v(" "),v("ul",[v("li",[t._v("reflow的原因：\n"),v("ul",[v("li",[t._v("页面初始化")]),t._v(" "),v("li",[t._v("操作DOM")]),t._v(" "),v("li",[t._v("元素尺寸发生变化")]),t._v(" "),v("li",[t._v("CSS布局发生变化")])])])]),t._v(" "),v("h3",{attrs:{id:"js加载和执行的特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js加载和执行的特点"}},[t._v("#")]),t._v(" JS加载和执行的特点")]),t._v(" "),v("ul",[v("li",[t._v("载入后马上执行")]),t._v(" "),v("li",[t._v("执行时会阻塞页面后续的内容（包括页面的渲染、其它资源的下载）。原因：因为浏览器需要一个稳定的DOM树结构，而JS中很有可能有 代码直接改变了DOM树结构，比如使用 document.write 或 appendChild,甚至是直接使用的location.href进行跳转，浏览器为了防止出现JS修 改DOM树，需要重新构建DOM树的情况，所以 就会阻塞其他的下载和呈现;")])])])}),[],!1,null,null,null);e.default=l.exports}}]);