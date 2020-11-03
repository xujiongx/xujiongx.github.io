/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "06d8de3f6161c8f16da2d2f67ec96143"
  },
  {
    "url": "assets/css/0.styles.38df7b4f.css",
    "revision": "1e4140ae263a6905cc319ec8b38fc480"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.c0deb310.js",
    "revision": "5d2b5cf0ddefb99deb2b06615dd26aa6"
  },
  {
    "url": "assets/js/10.ce90306b.js",
    "revision": "b170d558d1ea65f9f3605d10c58e77d7"
  },
  {
    "url": "assets/js/11.f90d64c4.js",
    "revision": "e0a7a81723ce8de1804d9c378e1e324b"
  },
  {
    "url": "assets/js/12.a9b9bbf6.js",
    "revision": "931034c8f9b047413541e2694fe151be"
  },
  {
    "url": "assets/js/13.0d1df58a.js",
    "revision": "380fba2839e1427a0d11108e7b41c2db"
  },
  {
    "url": "assets/js/14.fc65196f.js",
    "revision": "0b5ab39b2b4c08771ff7c46a2ef1ce68"
  },
  {
    "url": "assets/js/15.898535f6.js",
    "revision": "29879f90e05735c38e48e7f1234177aa"
  },
  {
    "url": "assets/js/16.0bc08ca6.js",
    "revision": "d4472509423ff9cc1e720268ff3b0293"
  },
  {
    "url": "assets/js/17.3ead5070.js",
    "revision": "d63398126fc5ee2161b9e0e149aec8f6"
  },
  {
    "url": "assets/js/18.7aa42fae.js",
    "revision": "1f4f0028165099ef6a293ea720b502d1"
  },
  {
    "url": "assets/js/19.a570b45c.js",
    "revision": "3c27961e7310002820e10bac5f9237cd"
  },
  {
    "url": "assets/js/20.ae75f869.js",
    "revision": "9b9674d3c0a855da2c63d5311f5d3ede"
  },
  {
    "url": "assets/js/21.9e237581.js",
    "revision": "f17c1cfacc44fa82a89b6485aa29a157"
  },
  {
    "url": "assets/js/22.f935e372.js",
    "revision": "d87b8ae6abebf48a7db861c4dc0420f8"
  },
  {
    "url": "assets/js/23.f68a6a48.js",
    "revision": "9854cd6ed23a5b683c2d4eedc1612712"
  },
  {
    "url": "assets/js/24.9f65a3a3.js",
    "revision": "b9a35eb5ad261d920c3df1c34d9a3f3c"
  },
  {
    "url": "assets/js/25.91c49022.js",
    "revision": "979cb38701b912d1babc1b7726f0845f"
  },
  {
    "url": "assets/js/26.33c70a18.js",
    "revision": "2e6a258d0d53cba8108d1e4bfd63d850"
  },
  {
    "url": "assets/js/27.9327f4d1.js",
    "revision": "a5af1bd51f27bed8c45fea465418b2a3"
  },
  {
    "url": "assets/js/28.10a8bb8a.js",
    "revision": "0a784d6ad9b2da43dd252927938727b7"
  },
  {
    "url": "assets/js/29.078a5a5a.js",
    "revision": "29c886f16219f359e0da3f6a07603984"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.9f4a6506.js",
    "revision": "012dbada560b383f7a6ff56c1bf05348"
  },
  {
    "url": "assets/js/31.5b17ed3e.js",
    "revision": "13f18bda3906d782651e7f2d78b9875d"
  },
  {
    "url": "assets/js/32.618d7886.js",
    "revision": "48ab41a332f01e3c5a36ffff1d7fb77e"
  },
  {
    "url": "assets/js/33.e8a11a10.js",
    "revision": "d6574abff638711ec61371af50ad7027"
  },
  {
    "url": "assets/js/34.27cc9bf5.js",
    "revision": "65231078d66e5919ed26fd785b569f10"
  },
  {
    "url": "assets/js/35.db5182c4.js",
    "revision": "c576af87ecf00f0d80e515bd20256018"
  },
  {
    "url": "assets/js/36.21a5ca9b.js",
    "revision": "8745d127bfc8a25d4ca5abfbfc3481a9"
  },
  {
    "url": "assets/js/37.ae1ad3c8.js",
    "revision": "6b7b450bb2a9de0386ca9415bd7eec0e"
  },
  {
    "url": "assets/js/38.aaff21a3.js",
    "revision": "a716659a50aef0f6c5a285b6371600c2"
  },
  {
    "url": "assets/js/39.687a03db.js",
    "revision": "7aa9357a480b6cd5c9d487cdd1147a3e"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.71a36e51.js",
    "revision": "268cf42bebc432c50a6c16930bcecd9c"
  },
  {
    "url": "assets/js/41.cdc3b01c.js",
    "revision": "16fb2e6691b445440b19dd0bf2785d9c"
  },
  {
    "url": "assets/js/42.e7f140a5.js",
    "revision": "2068bfa8934228264c768e489b01587b"
  },
  {
    "url": "assets/js/43.57ed1e96.js",
    "revision": "91f16f9dd7c6a3ad1526216eae8bc152"
  },
  {
    "url": "assets/js/44.3089576d.js",
    "revision": "2abc6741d080398ad377d4d646fe3537"
  },
  {
    "url": "assets/js/45.929316a1.js",
    "revision": "997fc8e5d66cb9ad4a27c3c9eb57c40d"
  },
  {
    "url": "assets/js/46.2ecec399.js",
    "revision": "48c1da876f0a64d7d1ef335e5d999c87"
  },
  {
    "url": "assets/js/47.a26cb0b9.js",
    "revision": "21b242d172557071c3b1dcbfc4714c22"
  },
  {
    "url": "assets/js/48.5c9ae106.js",
    "revision": "0cc8df34fa3ec15822c3fb103edd54fa"
  },
  {
    "url": "assets/js/5.62b52fca.js",
    "revision": "3d48dda35e6fdf8a8e7c65369f2dd977"
  },
  {
    "url": "assets/js/6.79013821.js",
    "revision": "a1c515ad76a612567dbfe87e9348b403"
  },
  {
    "url": "assets/js/7.3b4b6f17.js",
    "revision": "e7bd756f240578660dd2af3c46610243"
  },
  {
    "url": "assets/js/8.addb16e3.js",
    "revision": "0516ca5716cfff77d9a69e3359fd6700"
  },
  {
    "url": "assets/js/9.2b6ed13e.js",
    "revision": "925c40b9ab5198f4308e93f4563e9c94"
  },
  {
    "url": "assets/js/app.0161fcd4.js",
    "revision": "343590f1641432eeb46287c029d548d8"
  },
  {
    "url": "avatar.jpg",
    "revision": "edb8f56835cfbad350c80f9972a34c84"
  },
  {
    "url": "bg.jpg",
    "revision": "1144c2104d012f85a9758dab2fbec6ed"
  },
  {
    "url": "blogs/面试/面经/baidu2020.html",
    "revision": "ba37508c9d816d5cb3b4c914f5b6c06a"
  },
  {
    "url": "blogs/面试/题目/20201103.html",
    "revision": "6b82df2584380328f5de1ec13afc8cfc"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "1a35be8df531185de59c8b066ddad60c"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "10bf90831aed0fa4a168485bf06c7950"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "ca93b8bd63436584d4d72201c3ea5e70"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "1b8856cb22c392c6873f05130ed902d9"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "1a4aac151c40f1021af4cbc3f8a8ae7a"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "50dfb706077ce59ba79f18b13540a5f8"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "b47bbe9cfc9218c41b5f2837b41344b4"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "16313ed9c65dc0bf877ef70355849043"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "a4c32c9e378720ce6b53dbc17ae362c1"
  },
  {
    "url": "blogs/学习/HTML/浏览器渲染.html",
    "revision": "e48124b70dc91f618951fd75de90dfb0"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "263e9650a36fbe77674e0911ce9d50ce"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "b9d49bca122864448917a210c760cf24"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "c64204a8a866ab0bd5f2fa59c7704493"
  },
  {
    "url": "blogs/学习/JS/数组扁平化.html",
    "revision": "24974ac2c160d154756a92469f9316c4"
  },
  {
    "url": "blogs/学习/JS/cookie.html",
    "revision": "919b1b9c3f939a251a2ae1c204331d43"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "005fd76c64af4d63033fe9147ceeba4f"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "7e12cd57cb5eeb6b0ecc37ebb3432e9d"
  },
  {
    "url": "blogs/学习/JS/Typescript.html",
    "revision": "7401562c31bb1ea6695837721bd176e8"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "9215736c479fcc836867613e2222fb09"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "382ef4f7d4a97095fa56609013e00db4"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "2fc630d5ccb0bc9b18de2528fad656a8"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "78b11f8784a9ce5a2f5fe7d081358dca"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "63e9e46ebc7e12dca3d8759ed04b23d3"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "1a5adc4f06ff760ebc058231dbf9f88e"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "0dd7afef720a4d3b72ba02e31b7c0c49"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "259ebc2df0f96c8e47b7ee2bc44bfe0a"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "f038518ddfb5eadfc3d50392804d7c37"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "da9bc6a3066d4c2564eacaed425081c4"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "e181546928143eb619a24a5704451dd2"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "1cc2250cfc5380ba80e21bedbc1a49fc"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "22437ff1c15538d3f111d3815d28a44b"
  },
  {
    "url": "categories/index.html",
    "revision": "6c263d1a592545673d10419bad056545"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "67b83e310ddf92e9b7e0ed9903b570c8"
  },
  {
    "url": "categories/test/index.html",
    "revision": "0bb8853ec17d6e1ee0a378090d3e3560"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "ce9a85de0adcc000f29d19298429fdf9"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "c871c41391472d1a6a50447a356b70a8"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "a639e6b68181b6cb12edc9ac8f8daace"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "1b6bb2683fa3dfdc3980a33a373d08bb"
  },
  {
    "url": "tag/数据储存/index.html",
    "revision": "4cc1cc436b97d933398b6ae9eff26df8"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "60f235dd20bcb584b3509408bb1b7192"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "a2c447a00b2602da36d6bf9d3009e8b4"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "7602e4d37275d6f627ca9f66f134baaf"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "dac56cbb72409d03bc4ed6aa077f6c99"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "bd32b65692e9269cdaa9f7ec80ab3305"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "481821a35ea9753a738a6bcf6fcdde7d"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "52c67224f1234f59ff4f7ca08180647c"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "38c2e33f9f1b66015b402e53d71a86f5"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "14f19ad963e8510b5d9d4a50a2a476d7"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "ddfb90739af8c45d1c0d157ce80eab59"
  },
  {
    "url": "tag/index.html",
    "revision": "bf4d2cf0d12061a590605289823a7ee7"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "3eacb56ff29742427ea94a2dd131848a"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "66576ff3c91e9039f8f246197bd99ac8"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "077621459dca5166bfe76b937db19c8b"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "0e886a275b05b0dc18a8e194dd079d06"
  },
  {
    "url": "tag/node/index.html",
    "revision": "2cf8e508bd8aa8bc79103812a1b0ff82"
  },
  {
    "url": "tag/py/index.html",
    "revision": "262c214a66e66bb2a4c2aad4a6bb5438"
  },
  {
    "url": "tag/test/index.html",
    "revision": "2ec8caf7b3a554cd4e86c23ab3ac2c50"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f696ae7e6df1cf47192528c3b845777e"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "6708839f389ddfc212b9b356464a6f8f"
  },
  {
    "url": "timeline/index.html",
    "revision": "2328456597d1e0a80dc0cb7903ab58c9"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "fe4d76266057ebb1df565349dfe21a08"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "ff16a8c702d2117424983ab22624d077"
  },
  {
    "url": "work/About/index.html",
    "revision": "8d166d86945eb42c1c0235970a2f420c"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "4291d72f65f78c346a449124bb89803e"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "4dbcc15296bcd37d668320df8458f3ec"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "374740d5ddf759b90d0ab5d1136c4e28"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "d929c590f391de3e437685fe96f857f3"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "e4dac28cbfc551d6024d2820d10741f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
