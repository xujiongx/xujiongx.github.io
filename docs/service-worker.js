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
    "revision": "989471b9049645d078343f3da46242dd"
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
    "url": "assets/js/11.5101e855.js",
    "revision": "e2ca11fa607f1ce7a4ff4edc1c3bf443"
  },
  {
    "url": "assets/js/12.a9b9bbf6.js",
    "revision": "931034c8f9b047413541e2694fe151be"
  },
  {
    "url": "assets/js/13.3565b544.js",
    "revision": "7f4195b0ef0f453747ac66a3254ef84f"
  },
  {
    "url": "assets/js/14.f4b902bf.js",
    "revision": "04d2e60f7b2dce1d24c3202b8cc59aee"
  },
  {
    "url": "assets/js/15.362527e0.js",
    "revision": "12bf5863a5f9af7790e632207f72e8ae"
  },
  {
    "url": "assets/js/16.9d09e8ed.js",
    "revision": "2e3b9c298cceb245eedb374115c23ba0"
  },
  {
    "url": "assets/js/17.f9e845c3.js",
    "revision": "d24de4b226e8022d0adfd4b066833c9f"
  },
  {
    "url": "assets/js/18.43993e5d.js",
    "revision": "3e80cac60123efa0c6db00ae22f22f09"
  },
  {
    "url": "assets/js/19.1a92a240.js",
    "revision": "e2ea1345dd2c0aef389bedf270631c8f"
  },
  {
    "url": "assets/js/20.ea6b0c5a.js",
    "revision": "aa80fe369225f95fbf5f55dcf1280161"
  },
  {
    "url": "assets/js/21.9fc455fc.js",
    "revision": "9121cc3598545d81f44e6f151a552179"
  },
  {
    "url": "assets/js/22.b22ba4ac.js",
    "revision": "15404fe87b7699a5b471365647a16336"
  },
  {
    "url": "assets/js/23.dc6c5a81.js",
    "revision": "8d7999b29111fa14c9c2445a74c99f21"
  },
  {
    "url": "assets/js/24.2120439a.js",
    "revision": "88bfc960a1006701d6cd14d14be5ea86"
  },
  {
    "url": "assets/js/25.e7d224dd.js",
    "revision": "b44d603217c1f6da65d466e3bf834c95"
  },
  {
    "url": "assets/js/26.9715e5fb.js",
    "revision": "9cb26d6ac5fdbe0559e4556ffa03462d"
  },
  {
    "url": "assets/js/27.6c206306.js",
    "revision": "2b0ca24d27d9df5641a9de37d99e6b89"
  },
  {
    "url": "assets/js/28.7b1a9dd2.js",
    "revision": "354806d6018d1a8cf7eb6ddcbc981013"
  },
  {
    "url": "assets/js/29.0e5e6279.js",
    "revision": "3c079c4a268537740504f56f91ea06dc"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.4ddda526.js",
    "revision": "fb6e2e8eb7f1a4357ab0d14f7c3936b6"
  },
  {
    "url": "assets/js/31.f69b4802.js",
    "revision": "11b9e4552cbc9512888de2b0ef06a0ab"
  },
  {
    "url": "assets/js/32.88d3d421.js",
    "revision": "a1ddb78db693f08e9311dbef98124625"
  },
  {
    "url": "assets/js/33.559459f0.js",
    "revision": "1a4a0d788c17326403d6ca105b10cff5"
  },
  {
    "url": "assets/js/34.1b31c353.js",
    "revision": "222d92aba97350351453efe64d8a2d1e"
  },
  {
    "url": "assets/js/35.ff25c837.js",
    "revision": "56058f439e67763ca1959d98f7bbac14"
  },
  {
    "url": "assets/js/36.4edff835.js",
    "revision": "45a339822b1de8c20714807dedeb6980"
  },
  {
    "url": "assets/js/37.ced621bf.js",
    "revision": "8a409f14e945c519247e1d7937ed3a1f"
  },
  {
    "url": "assets/js/38.9f91b7b2.js",
    "revision": "b7fed4a4befc123f0523c399202c8a60"
  },
  {
    "url": "assets/js/39.f08c1732.js",
    "revision": "788113afc2029336019e002662cf28ca"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.d66250c7.js",
    "revision": "c513c1dc054f9bec61cf7ce2b53d50c3"
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
    "url": "assets/js/app.315938a0.js",
    "revision": "e515c2603db4c28c099af07db3d150c8"
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
    "revision": "c891e0bdb5bd1492aea1c685ddd71d8e"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "60100b7783717cb22e1934aae5b41a4e"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "520e3639f27e634c34a804907faf4647"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "bccfa0edd2be1bbac34a2ea2cf15c813"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "4d7605701a7aed52f96014be2565db06"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "b061b19839e14e7ed0fa9f629d252a45"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "65b2cee80edf91225861eaa29a17055a"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "6e337a8db2874d4dfbd3c98f624596e4"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "ff879ce4f2582b343cb49a59820e919b"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "9a37cadcf317e8a43143fccc55be0962"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "304957ca057d6cc46172902c507c6517"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "3a95b3df268de066b51d0f59f9869966"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "b8a54b65e1860a0e30c899d4bbe7cc46"
  },
  {
    "url": "blogs/学习/python/20201009.html",
    "revision": "ee197d347f2577e0084b2ebf755453f9"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "0565f2bb8e4b9c40b4acfb1b36cc2e68"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "5787270046e2363cdd58a8a3ef0978e7"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "7a8d893090dc1db343cd5c59279cfe75"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "a2009349a19649e2de67416884ed22ea"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "ae0c7f70a0a21b0362bae9ce270e57d1"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "ccac8625d632d9f1af1115f6fbb83e24"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "8ff0dc332efacc1710ca6f88d3b8feab"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "fea613eb20d3b6d1a3b2b953c3f4914e"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "31c5e84b4138fc262f525abad01fd159"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "f14897fec8ca488a1ab5700c199c7919"
  },
  {
    "url": "categories/index.html",
    "revision": "f8e8f518f1c903c59f21ba91158a2527"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "076104d5dbd7381b99f36ed1bf5b9c88"
  },
  {
    "url": "categories/test/index.html",
    "revision": "438044869d58b705ed7971fc87b15d43"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "3c8a344c72a8a8e1bd754e05cefa861e"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a537b67f687769523f028f763b3d5b68"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "70445f7fe19b51ceb969e7938e8dee38"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "4023c09b209e8529a56edb41ae754eb6"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "d36f5a49d1a34ecdd0248175a069a075"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "f67e3ed796ef2e33e813844023c11d21"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "839f2b302b3ce50b463a7285e2ca9fcc"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "7db7aec49287b1613981dcdaf0bec8c8"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "5bbb7f460130ebad9ff0450fe8346b4b"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "1658f56356b8a07c7c00b7254ea57955"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "707eeede9adaf394e74d86bb9d4cb995"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "17bb1ebd812e63dc68a72b1963405946"
  },
  {
    "url": "tag/index.html",
    "revision": "b3c8a9364d5cd1fb594ec935f738f920"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "ffd4bc4a3d4ed78a2faad5f2ae224b81"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "23e6e09b639af85ae20573fd33958838"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "139503158e8bc9760d6608711a158e45"
  },
  {
    "url": "tag/py/index.html",
    "revision": "d545a52d70b72a9fc66969ffbbbc9978"
  },
  {
    "url": "tag/test/index.html",
    "revision": "c5dfee285831a4c0e53fbc86cfd32eed"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "da2a5c72a86ab123001233ebd0baf9e7"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "42fb7aa7778f893f360fdbc64d101ff5"
  },
  {
    "url": "timeline/index.html",
    "revision": "13fc8ecc516fc869e5288310d77576bd"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "7e1c1120e849d552bd8a4fa4d31ac10f"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "f83ceadabab972d7f886ae87584b618b"
  },
  {
    "url": "work/About/index.html",
    "revision": "04eb77a76435ea39a3555227024d87ef"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "101f56c2a56ae6a23b34d7ec9a4965ae"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "38356fa10261154e68bbd6eaaed61497"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "950ebb2b7a8bfd7e8bea1b38f4a06fae"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "a5b0cc55dc29c03dc99f93aa696e7621"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "71cd52583dac005963c2c38273bb1d17"
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
