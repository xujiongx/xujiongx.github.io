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
    "revision": "ff107a3f2fe6c23b8c4388504c5c85d2"
  },
  {
    "url": "assets/css/0.styles.2ba66100.css",
    "revision": "eae3ab225f54363d74a4cd00238862a3"
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
    "url": "assets/js/1.1160752b.js",
    "revision": "ac5cf4fc3075684aacad1e6b85527269"
  },
  {
    "url": "assets/js/10.cfbb7b8d.js",
    "revision": "81510804cecaeca5d8dc0d3d151ddf08"
  },
  {
    "url": "assets/js/11.462f62d7.js",
    "revision": "a7d058e62344bd3dcacd337f5de46b7f"
  },
  {
    "url": "assets/js/12.b521e70b.js",
    "revision": "bd9b67e6e3e9b066c49ef95792b7c850"
  },
  {
    "url": "assets/js/13.55349625.js",
    "revision": "631294e7ff3f3bd462245e1f49bd663d"
  },
  {
    "url": "assets/js/14.9c152593.js",
    "revision": "485b6d31168e2010f55d968d5b24b6dd"
  },
  {
    "url": "assets/js/15.362527e0.js",
    "revision": "12bf5863a5f9af7790e632207f72e8ae"
  },
  {
    "url": "assets/js/16.604b73a9.js",
    "revision": "3c95739cc8aca8b30d9b88f8ca9df53a"
  },
  {
    "url": "assets/js/17.2b984a80.js",
    "revision": "54a1e8962f2ebfc9ea14dc0c12cee910"
  },
  {
    "url": "assets/js/18.b86c8fd8.js",
    "revision": "073b69ba8720ea195723de3223840767"
  },
  {
    "url": "assets/js/19.aedba16a.js",
    "revision": "2192732ba028abf46470bb81ff3953bc"
  },
  {
    "url": "assets/js/20.dcfc606e.js",
    "revision": "694a2837fd2eaff8037712211afface5"
  },
  {
    "url": "assets/js/21.5f341ebc.js",
    "revision": "5b1625b107ebcd5b4c43605deab38715"
  },
  {
    "url": "assets/js/22.4d495f81.js",
    "revision": "36b7d3ce6d9e8e60325fa42a8fdf6ab7"
  },
  {
    "url": "assets/js/23.9346de90.js",
    "revision": "7c6419b4f3aa709850eecb5e5c70843a"
  },
  {
    "url": "assets/js/24.9c4da909.js",
    "revision": "32c7951a91b32a44ba0762f59b2591c4"
  },
  {
    "url": "assets/js/25.300ca24b.js",
    "revision": "5ec61c70ecb3af73069da04513e79984"
  },
  {
    "url": "assets/js/3.e0163d49.js",
    "revision": "b842ad617a47386b6a0ce0dd2e2537f2"
  },
  {
    "url": "assets/js/4.9e10f53b.js",
    "revision": "21aa787836c51bad40acf70bce9dff6b"
  },
  {
    "url": "assets/js/5.5c6cb413.js",
    "revision": "5f84d063379f2885f6321abfc1981b54"
  },
  {
    "url": "assets/js/6.03871ede.js",
    "revision": "35dae2b32e8466832c94a6fab80eab12"
  },
  {
    "url": "assets/js/7.391aef44.js",
    "revision": "5c56e5bbe5c740377943111dc5dc3376"
  },
  {
    "url": "assets/js/8.9d15b0cb.js",
    "revision": "970e5794bc368a183d44866cc7dcec79"
  },
  {
    "url": "assets/js/9.a903399d.js",
    "revision": "3a62a82f319cf4738addc2ad84b2b831"
  },
  {
    "url": "assets/js/app.f2f54960.js",
    "revision": "72690a544d15474c8d7529bb103d98ed"
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
    "url": "blogs/面试/baidu.html",
    "revision": "d1b199434be1da6dcaa0aed748bc7172"
  },
  {
    "url": "blogs/面试/HTML/常见面试题.html",
    "revision": "9c0aa6ca1a5d23cd3bd91257a6fc181d"
  },
  {
    "url": "blogs/面试/HTML/H5新增标签.html",
    "revision": "d7c3bf16019de74414b2cf0d343affb7"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "2a9eb98a74ec4c66e5132508b77f9797"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "57d8ee7e89dd7be4aed2c092056aff6e"
  },
  {
    "url": "blogs/其他/游戏/xx142.html",
    "revision": "997e63687e3364cb48f2211029eaaa70"
  },
  {
    "url": "blogs/go/gobase.html",
    "revision": "607f1abdf4d9ac87c19d01ca2d2675d2"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "dbf2dd7a94905216786538a0c3ce90b1"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "69c52791ffaa7e45d78836a465d447bd"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "fdc607c1541196c76db67ac82c9e33c2"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "2cc7b48fffcaf03c8cd4729aab9c0ca0"
  },
  {
    "url": "categories/Go/index.html",
    "revision": "cd6931f8f66405d0c9361730d9138e45"
  },
  {
    "url": "categories/index.html",
    "revision": "468070c9bb00a16ec588f5071b73a6e6"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "ab1a7f6a1074b00cfc01c7972bb56ebb"
  },
  {
    "url": "categories/test/index.html",
    "revision": "e9b1bd827d08c05024b71362dd5af44e"
  },
  {
    "url": "index.html",
    "revision": "63bce4e134a57d2c1491bb25eccf17b6"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "8b02205230ccf310636f2c2efbbcaae1"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "237fe3bd23d562ad28caf071a923f65d"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "1b5b73252090648a5906df66b3fb3c9f"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "89e1bf13d0052bcb2ed0f19603cad18f"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "7669923a660ce3cbe95979bb4c25143a"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "4e15e6c85e5ada361c0af7b1d41319df"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "f70a528ca7fc99323cdc631a5906e4a8"
  },
  {
    "url": "tag/index.html",
    "revision": "86f00afcbf031b7e2efa5dafaae92566"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "ae0bcf49816d54c6444d2753072b4b12"
  },
  {
    "url": "tag/test/index.html",
    "revision": "dd3c8a7b72bcf68a4e84176bda52f0ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "b8e6303d62b551f545ae1baad182fb34"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "5b9422fa7ae755da8afd7883c94228a3"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "b69b48fc5530b96c6356ab9aeb9d500b"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "bd3a24f30ea405139c83d5fcaf9d50ca"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "cd088540a5967d484da04bd24070a3de"
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
