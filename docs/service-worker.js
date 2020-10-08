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
    "revision": "415db9db0146fbf49747f0e7b5ef29d9"
  },
  {
    "url": "assets/css/0.styles.4d5feb60.css",
    "revision": "683fe71378c7aa9bbe5560e8f782e64d"
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
    "url": "assets/js/1.bfe9768d.js",
    "revision": "2ceb04a38ea4f454500a281155307999"
  },
  {
    "url": "assets/js/10.b95218a2.js",
    "revision": "a9aa907c2b4461fbeb245edf651fc0e6"
  },
  {
    "url": "assets/js/11.8d2017be.js",
    "revision": "a7ba9bb8b4c8e717a2367b16e7cb9d3b"
  },
  {
    "url": "assets/js/12.9008deef.js",
    "revision": "71897b842ae6526611f32f0037c48330"
  },
  {
    "url": "assets/js/13.385337a4.js",
    "revision": "97818e8efd0535485025aa5ac3ee082d"
  },
  {
    "url": "assets/js/14.71a4d92f.js",
    "revision": "374a60a2b76ed8a0ac5d70a6f4f4a9f6"
  },
  {
    "url": "assets/js/15.c7ee36e4.js",
    "revision": "3a5ce4a3a0c6fd142a406ec7fdc64b83"
  },
  {
    "url": "assets/js/16.8484a2a4.js",
    "revision": "7cf943988f3d01db7ac1181811cd5d7c"
  },
  {
    "url": "assets/js/17.67935168.js",
    "revision": "e1892694eab4874ee256e03b1abe8b9e"
  },
  {
    "url": "assets/js/18.9d92ff6a.js",
    "revision": "c0852b07d12c646c8d08a9e4b26ea5a7"
  },
  {
    "url": "assets/js/19.f2505da5.js",
    "revision": "19f11d6a1231c12daeec4a1de7bb5a59"
  },
  {
    "url": "assets/js/20.e671992c.js",
    "revision": "c2a6603f3f97234ff85e3978d9d53bbe"
  },
  {
    "url": "assets/js/21.7e74ce8b.js",
    "revision": "245cfecf8c919af9fa1c190c8bf6905b"
  },
  {
    "url": "assets/js/22.385c0d6e.js",
    "revision": "000b02feb35da25b45616f308c0d4693"
  },
  {
    "url": "assets/js/23.d4acc92b.js",
    "revision": "b8e5f4ee4fa15a1119778e0a3c74eaaf"
  },
  {
    "url": "assets/js/24.6904f5a4.js",
    "revision": "bc91285f9bb291bd11f879bce13f7864"
  },
  {
    "url": "assets/js/25.f6f576b7.js",
    "revision": "eacd2b8c3db4d0d22e678b4840e7c732"
  },
  {
    "url": "assets/js/26.e15b7d14.js",
    "revision": "bbc0c2df1fb2061a9a208f99feebf54e"
  },
  {
    "url": "assets/js/27.06845ddb.js",
    "revision": "7a63619f57c78b02650ffb4e71651416"
  },
  {
    "url": "assets/js/28.4c01a794.js",
    "revision": "056693dd6dd5f21f4aa26ef27442d45c"
  },
  {
    "url": "assets/js/3.eb4afbc0.js",
    "revision": "6f331ebc067e9a2a2381481bf3a3e23d"
  },
  {
    "url": "assets/js/4.f3d58387.js",
    "revision": "85600e3d6b0e7feee0c22ef98c008e43"
  },
  {
    "url": "assets/js/5.4266c706.js",
    "revision": "cd8f6daff4f04ffdf654b06f593c3f95"
  },
  {
    "url": "assets/js/6.fb15a358.js",
    "revision": "0c321258752857fc0e91639469c9befb"
  },
  {
    "url": "assets/js/7.4ab1abfe.js",
    "revision": "71725de3a806570d8fc8c57f99575d47"
  },
  {
    "url": "assets/js/8.756a9bcd.js",
    "revision": "38b82999ebec2db30a190fce3b603830"
  },
  {
    "url": "assets/js/9.b674c47e.js",
    "revision": "7aaf1473faafd7ea035541372742e713"
  },
  {
    "url": "assets/js/app.2b11e4db.js",
    "revision": "6a0feb2e760b17ef89a0f0edf5fe4206"
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
    "url": "blogs/面试/面经/题目整理.html",
    "revision": "8212aa7b51757e9eaacdde168375eb58"
  },
  {
    "url": "blogs/面试/面经/baidu.html",
    "revision": "b89722417f7dc49cd4f79f8420978985"
  },
  {
    "url": "blogs/面试/HTML/常见面试题.html",
    "revision": "2c4874244ee6a099c76cfe7cbd1617e6"
  },
  {
    "url": "blogs/面试/HTML/H5新增标签.html",
    "revision": "aad6b2427aba9ee0df08aaec77edf221"
  },
  {
    "url": "blogs/面试/JS/继承和函数进阶.html",
    "revision": "ccb15b09b7741a9f08780157e1aa5934"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "208924ee8c54acd578a659c060746c5b"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "35c9794c5d87530e14f4d5abc3a70898"
  },
  {
    "url": "blogs/其他/游戏/xx142.html",
    "revision": "cada3409f53f87d328727f01b81642e6"
  },
  {
    "url": "blogs/go/gobase.html",
    "revision": "36bbb3b093706e2d05155451e4b08f1d"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "ab36332a4781c4a06ef88564794d8484"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "9a54ac74f26719215f2ca53362e32d1d"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "977e821e63194aedb82da1c0643cc643"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "c3df9dfdc44c35bdd15280b1875db6fa"
  },
  {
    "url": "categories/Go/index.html",
    "revision": "795e3cd702dd0485c181c6ecf65dc71a"
  },
  {
    "url": "categories/index.html",
    "revision": "5c9403bc66dacc667f13a04becb22c9f"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "cef0fe58c61aa04ede8f45b8601123ce"
  },
  {
    "url": "categories/test/index.html",
    "revision": "2e2fdd52bdf67de801780f314bbab2f1"
  },
  {
    "url": "index.html",
    "revision": "d038b10cb708be1b56404dc365e8c4f2"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "c04134b0644c7ce141c447ff89f44526"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "61e22250d7c73a0d7f25673fa84dbeca"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "3a9c022cf62027b4b1f8d986c0a91df7"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "6e9b0b9b0454c32813b78c77fae70aba"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "afa4cecfcf41815df3118e9eac423642"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "3a17a3eeca6b8bb93c816d50ffb76b5c"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "fbeba324881e033305add2bbda0369de"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "34ecf58847b9dee5b0ef0b8d6f687bf9"
  },
  {
    "url": "tag/index.html",
    "revision": "79dec246aa08dc32738872976f8762fb"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "d002d36979674f862ec76ea7733c55f0"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "8e182c14a33df3f003333a2c9411e715"
  },
  {
    "url": "tag/test/index.html",
    "revision": "52dc6474198e126f552fecfe849600d5"
  },
  {
    "url": "timeline/index.html",
    "revision": "bc084cddd20e9cc299ba7c1376d4a2a0"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "c24ff721d77f8fa4bb7a6a76298a2c40"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "fe5f4ec59e8879a949237b89cffda7ab"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "0f54508dc8841f5cf9682c7b7f04beb6"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "d2f46b0af7a7f9e67724e6c55aada1a1"
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
