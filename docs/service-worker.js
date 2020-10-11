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
    "revision": "174068e5eb23100745a385e7474111af"
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
    "url": "assets/js/11.3076cc4c.js",
    "revision": "e60ea40e65734344a73c31b9baedb8b3"
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
    "url": "assets/js/19.87af9461.js",
    "revision": "6659d64c273fb6b1c0946d4d63a1836e"
  },
  {
    "url": "assets/js/20.5a1a3034.js",
    "revision": "d2bdb5627df5d11b9739f674e18b527a"
  },
  {
    "url": "assets/js/21.9fc455fc.js",
    "revision": "9121cc3598545d81f44e6f151a552179"
  },
  {
    "url": "assets/js/22.315e4357.js",
    "revision": "01442531732609c982f9b2a75b759f7f"
  },
  {
    "url": "assets/js/23.1b39c6ad.js",
    "revision": "9ddb4c85fb0ba6d222407048910bf7fd"
  },
  {
    "url": "assets/js/24.bd1eea52.js",
    "revision": "ec05138731a61d31732978eb4854983f"
  },
  {
    "url": "assets/js/25.40e00d30.js",
    "revision": "ad1db0ec1df3ebede84788db2c9803d0"
  },
  {
    "url": "assets/js/26.a89aba4d.js",
    "revision": "60748f8d86dd6bc8936f9cfd4223d893"
  },
  {
    "url": "assets/js/27.9fc335ad.js",
    "revision": "a5697af013f623e1074d1b4a82d256e2"
  },
  {
    "url": "assets/js/28.3b33b7f2.js",
    "revision": "1ee8f5bb0056b19285a397e83a3e56ae"
  },
  {
    "url": "assets/js/29.e7019ab7.js",
    "revision": "97335a924a49b19e2a606b4b15e52876"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.6ba1bf94.js",
    "revision": "fb6838870e3871c76b20f937d91fc3d8"
  },
  {
    "url": "assets/js/31.8f6af91a.js",
    "revision": "29459e22057f03b3695956b7e7d9e55c"
  },
  {
    "url": "assets/js/32.13ce694e.js",
    "revision": "1f55b2d1e8a4c01510f44e44c43e4281"
  },
  {
    "url": "assets/js/33.232d202c.js",
    "revision": "7ce7115957b4e6ee92002f976b6da5a2"
  },
  {
    "url": "assets/js/34.d94fde19.js",
    "revision": "ed2ec6ba56b485278ed493cfc7b35cc0"
  },
  {
    "url": "assets/js/35.8e98cff4.js",
    "revision": "d8174b916dcaf9955d3abb045c00d2a3"
  },
  {
    "url": "assets/js/36.25c7651b.js",
    "revision": "33be61c7e7a6c5dfa9e4db93b57fca0f"
  },
  {
    "url": "assets/js/37.f3a908b1.js",
    "revision": "8a409f14e945c519247e1d7937ed3a1f"
  },
  {
    "url": "assets/js/38.1797f727.js",
    "revision": "b7fed4a4befc123f0523c399202c8a60"
  },
  {
    "url": "assets/js/39.56b7732e.js",
    "revision": "d660f2c18f88ad4f36b4263eb6b20ac0"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
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
    "url": "assets/js/app.ae0a331e.js",
    "revision": "6f3f508413187ddc24ef216d568b00a7"
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
    "revision": "d6b56a6e437df4a82058896221f899d6"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "6b208e0c3a603ca658cfc8a5598a89f9"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "90e2baa325f49d06ab9951759d270947"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "1542843ad29fb0a94bd65f89cc52a108"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "65a6906f657602ddd1f7fcb4988458d0"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "7ce37f38ab2725e9a92dd23806a5a27c"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "0bc72c5fae1c334952f127be6133210b"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "02017abd79fbf5cc960d440396eb533a"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "59e265a226986d9bcc2b6f432dae2edd"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "6139d1a134a7cf1aa0d1996e521c4629"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "50eb684791785e7d46087b9aea3499ba"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "65a19039d71b168e1ef15eb6ec3db56e"
  },
  {
    "url": "blogs/学习/python/20201009.html",
    "revision": "78a6dc7b54f77451320aee71f2fba095"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "636eb9b13507a521cbc628d8be068b9f"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "7281c7f1ac1fefa76f2109e2560c8f9e"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "1ab242f1da87c69235b16c0d4ace90d4"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "69315fa137782c5d8a15caa7c90ef602"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "5023788a607044f3b569b3bde2fe7166"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "2b5ab2c4d41d11faf30b15381bf7c865"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "a89b1b77e8b8c3ba86151bc98b0d395c"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "35fdf3b021226ddaa3e12bd95df63c59"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "ac8170f7b80f99f6331f11f3fb482aac"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "76afba80adee874d8e965c0e54482b84"
  },
  {
    "url": "categories/index.html",
    "revision": "b4cbaa5816ee26da5e24d5272d2188d2"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "439e543288c0d15b3367a04e6acaf3b2"
  },
  {
    "url": "categories/test/index.html",
    "revision": "f97502d02ffa051a17d92e7e805d50a5"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "dace072684770968687ff8b6bc562f91"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "2778c252aaf516d9bc9125d057584f24"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "55c0b390863abb35dbeb47c55b0c45d0"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "506ffe765e86f5a97cb704042fbf30ff"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "57906324f52a7d2ffa2d0a24c6296daf"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "33b85d42cf1b2313fee9407b41b6e20c"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "b2569f9d6175a25ed0ac55a7f9f9673b"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "98558dad1b16f1151260b8b667d1672e"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "b0fe569201640968a29144cad20e6d72"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "ae561b5bc7355b8cb0f0a677887c8e8b"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "2e19632654df5e06f9c363547f9f6838"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "3c9222b60ff075b04c667dc9f1e70219"
  },
  {
    "url": "tag/index.html",
    "revision": "e70be66613605dc24f71a5453b42730a"
  },
  {
    "url": "tag/JS Mixin/index.html",
    "revision": "0fbfc9d4ac56399e9c60d09f4aacb529"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "e33964b1af3699c85303442be0a431b2"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "004cd2f2145048d6a956266ca064a165"
  },
  {
    "url": "tag/py/index.html",
    "revision": "2adcba43889903410b1fa16e1b31711c"
  },
  {
    "url": "tag/test/index.html",
    "revision": "018e7a6fc9f05a9ff7de18051738d215"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "30b30caef11878e871be91a23837a83b"
  },
  {
    "url": "timeline/index.html",
    "revision": "90aa2069b0697171e8300f421c526d26"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "2cf1c309a2efbfe8d4ade13e3b19cbda"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "e372c7eeab1441d71ca3f3b63c65a993"
  },
  {
    "url": "work/About/index.html",
    "revision": "d0c7a5de2efd606451501748c76ab128"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "9f5c913c0eeb587386e5bc4d8c4b1fe0"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "4c9e71a2cbaf62abc5db845e4fd671f9"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "78748aebd633887fe1cb754672df1908"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "706cf2416ab86919aa00f7dd57c4e5b1"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "6c43637cd2343f7a07bb2391054ddd8f"
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
