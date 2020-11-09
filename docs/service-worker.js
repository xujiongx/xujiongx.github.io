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
    "revision": "7a1ee9e4628d323010bc27b8855ce40a"
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
    "url": "assets/js/11.fe029889.js",
    "revision": "1e1c7c94787ee2c9d715726bdd63785d"
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
    "url": "assets/js/14.b9780b88.js",
    "revision": "171cf37833b8e6c341e8dec218141283"
  },
  {
    "url": "assets/js/15.8e974a61.js",
    "revision": "f27ac263412eab2dbf8bc8d498f57003"
  },
  {
    "url": "assets/js/16.0bc08ca6.js",
    "revision": "d4472509423ff9cc1e720268ff3b0293"
  },
  {
    "url": "assets/js/17.b609caa7.js",
    "revision": "42fe4600d19974d1d0f1109e7ddff6a3"
  },
  {
    "url": "assets/js/18.6654bb97.js",
    "revision": "e79158f0700db5785b286bfa6fbd830e"
  },
  {
    "url": "assets/js/19.dbe01d0a.js",
    "revision": "c26e824addb493d4680bfe47f954c0da"
  },
  {
    "url": "assets/js/20.e0fc762f.js",
    "revision": "38539c0e5125e73d136793ea191f1c54"
  },
  {
    "url": "assets/js/21.c65abf22.js",
    "revision": "84e8346ef33611fb77ce1a0908cc4e90"
  },
  {
    "url": "assets/js/22.9880a25d.js",
    "revision": "4e9ef7ca520e0b5089dcc1ed6c64a641"
  },
  {
    "url": "assets/js/23.40a8cabf.js",
    "revision": "840e3d97887edf2fba0b0192fc271859"
  },
  {
    "url": "assets/js/24.605a54e8.js",
    "revision": "5b1a0f37c296def8e8df4124b0d86ce9"
  },
  {
    "url": "assets/js/25.3507fd0a.js",
    "revision": "65068eeecde2430216b60e9356619f00"
  },
  {
    "url": "assets/js/26.dddbaaa5.js",
    "revision": "cf40cdf5fcfb76ee0f399ae95b65f61b"
  },
  {
    "url": "assets/js/27.f6f16a86.js",
    "revision": "87b89ff07f040ab26c72f56df22c2d3d"
  },
  {
    "url": "assets/js/28.862d3dc5.js",
    "revision": "96bad2c977bd844b58a47e2d166e651b"
  },
  {
    "url": "assets/js/29.3d9207a8.js",
    "revision": "a77f3ca1a8ab35c1601a1de7975d5008"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.183cee1f.js",
    "revision": "a27a6fbe21c20b92ebb99bbcb852c29a"
  },
  {
    "url": "assets/js/31.4fd3d0bf.js",
    "revision": "f159dad2aeb94c2bc799e666b94681a5"
  },
  {
    "url": "assets/js/32.cc118f96.js",
    "revision": "ec58bd4eb2116092e8cee6319ab70a2f"
  },
  {
    "url": "assets/js/33.23766ea8.js",
    "revision": "574c5ae1e44124fb987d8e8429c246ed"
  },
  {
    "url": "assets/js/34.1db8107a.js",
    "revision": "2db5e95ce58c03dda04551ee1d317249"
  },
  {
    "url": "assets/js/35.0c3a2f5e.js",
    "revision": "16681fe23ec0d635c7f14b281ebfcf12"
  },
  {
    "url": "assets/js/36.63220c98.js",
    "revision": "65c4f63b4f2713fe7141589ea7d0623d"
  },
  {
    "url": "assets/js/37.5839621c.js",
    "revision": "ad3768948f89677b8d42251df32ecd8a"
  },
  {
    "url": "assets/js/38.fc5fd3fb.js",
    "revision": "bcd8693ac17f25c1cdc72a934b307802"
  },
  {
    "url": "assets/js/39.e32e221a.js",
    "revision": "8ce67e918bbdd1b0b6292aa42f4ff93a"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.bedace7b.js",
    "revision": "8883feda6a125a90fb51466679fe64aa"
  },
  {
    "url": "assets/js/41.44a4c41e.js",
    "revision": "19e8e6e0c08c911f1acf2352891703d2"
  },
  {
    "url": "assets/js/42.b6acf314.js",
    "revision": "1b7f947f2817d2d5d1dc951ad857b5ef"
  },
  {
    "url": "assets/js/43.bf1e6a94.js",
    "revision": "f7468d27c1c71fe5b15d54138c1221eb"
  },
  {
    "url": "assets/js/44.501d83de.js",
    "revision": "4c25b641b05e48763f24fb3e4021893c"
  },
  {
    "url": "assets/js/45.baebe0ab.js",
    "revision": "ffcb86a5baa5e8280be0d217ca46e036"
  },
  {
    "url": "assets/js/46.b5b7252d.js",
    "revision": "bb0ad3dfeeb2fef1a284c617fbf96716"
  },
  {
    "url": "assets/js/47.b13807a8.js",
    "revision": "3154164c404abda69ac66ee93ef46f2a"
  },
  {
    "url": "assets/js/48.4979047e.js",
    "revision": "f51b03150572613e358f1a8de741c040"
  },
  {
    "url": "assets/js/49.73f09656.js",
    "revision": "74c307cadd162819e925ef6eb0289d8f"
  },
  {
    "url": "assets/js/5.62b52fca.js",
    "revision": "3d48dda35e6fdf8a8e7c65369f2dd977"
  },
  {
    "url": "assets/js/50.9330bf90.js",
    "revision": "b1ea005bad8babc434c2a4f30bb7996d"
  },
  {
    "url": "assets/js/51.858fded9.js",
    "revision": "101c5815c273228d14ae0541cebfa45f"
  },
  {
    "url": "assets/js/52.ca4fafef.js",
    "revision": "499a931d88edc71bf0930f53c1a9f1bd"
  },
  {
    "url": "assets/js/53.579e19a5.js",
    "revision": "9d98551aec48511069843c85740185b1"
  },
  {
    "url": "assets/js/54.3758bb30.js",
    "revision": "91e8fe344b7e1e0f2fded037cbf771b5"
  },
  {
    "url": "assets/js/55.6be452d2.js",
    "revision": "846d685c96377abea883b5d8a360d4fe"
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
    "url": "assets/js/app.8099a79d.js",
    "revision": "3e40a4ba61d33161a7facce146af81ae"
  },
  {
    "url": "avatar.jpg",
    "revision": "edb8f56835cfbad350c80f9972a34c84"
  },
  {
    "url": "bg.jpg",
    "revision": "bb419f4dbed6edebe212d7310e9aaaea"
  },
  {
    "url": "blogs/面试/面经/baidu2020.html",
    "revision": "e593888735268ff51b3d4e74c09d5cb7"
  },
  {
    "url": "blogs/面试/题目/20201103.html",
    "revision": "7b753c2aa10463e985b052f84e9a7a35"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "3f3ef862a08b1c402e3210577b821da8"
  },
  {
    "url": "blogs/其他/100301.html",
    "revision": "84aaf3a07603074e73a143094884870d"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "91709de7284541a445e8f538c4575397"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "277ae72fda1c7b01a92da83c533080f4"
  },
  {
    "url": "blogs/其他/目标规划.html",
    "revision": "04b6f14cf3fabc0110bc0c075b9f9561"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "55c495bb94abbf1148fdcc91de3c23ae"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "4d90971894915b47476ef66d0dcda0f8"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "e1fbb0becc11385d45de595756ce75f6"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "87f3e1348637fdbf7b933a58fca9f233"
  },
  {
    "url": "blogs/学习/数据结构/01.列表.html",
    "revision": "164d0a17faf0ca06bfe71398cafccc5a"
  },
  {
    "url": "blogs/学习/数据结构/02.栈.html",
    "revision": "ea2591542afc5d6dbbc14e11408519aa"
  },
  {
    "url": "blogs/学习/数据结构/03.队列.html",
    "revision": "f7cff12ed621e100fbfa7ebf5ec5b1d2"
  },
  {
    "url": "blogs/学习/数据结构/04.链表.html",
    "revision": "f23c29698fb796fe9b0a3cb09e670956"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "fc4aa39efea899fd44601e4c08caeaaf"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "a35cd56fdfa8a7995c83c7a02e9cbe9f"
  },
  {
    "url": "blogs/学习/HTML/浏览器渲染.html",
    "revision": "6e6cd8d29969f02adb4cd842486e5c84"
  },
  {
    "url": "blogs/学习/HTML/cookie.html",
    "revision": "dfd7580a1a729ed91c49dd6b2a66c773"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "7e2227c40b78df022ec5a757348eaef8"
  },
  {
    "url": "blogs/学习/HTML/localstorage.html",
    "revision": "c24c758d1042b74e0a664bb63604f0ad"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "cd36a94b91ed7764de44c3daff3deda9"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "dbea999584e0f007044b6646565d7f1a"
  },
  {
    "url": "blogs/学习/JS/数组扁平化.html",
    "revision": "0805dc5c2d36d89092d7e32369cd55cf"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "6150b20613b0a837c755cdcb532ce454"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "7a71a93993cc1de5688a589e2c82ccba"
  },
  {
    "url": "blogs/学习/JS/Typescript.html",
    "revision": "99c8ca29663a681025bc06a16eca73d2"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "b8c4b13ba130193b8e0a59186166999c"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "4461e844c85fc8d2757924528bba61ea"
  },
  {
    "url": "blogs/学习/Vue/vue3入门.html",
    "revision": "e67e5c7788428d3a85717acef8795302"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "d7769bd655a211778f337f37ac07e7dd"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "68e66c453028426deff549f3984b6264"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "3d47dc79015e06589a5bd91d005b0a69"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "55c274fc96baa290c57dc547fb43b26d"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "c321a523073bf0b62a34b841227d4639"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "0444a37a96372cc9fb5d98541a96589b"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "6d239be0586c36e91db1f8ef02da6d87"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "79bb84f385c29d964ef3413451a77539"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "096ef39b24dee8ed9f3de37b6e881b55"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "5133774606a8cbb227ff041a85404c6f"
  },
  {
    "url": "categories/index.html",
    "revision": "3d16865c076a41c02fe9604dede31fb3"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "72da2d3674e7c40dd62fb68f8ca47453"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "0a7181d424eb44aa1764faca62216231"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "137e944fbf03c71aaaea76576f679c94"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "81f789125ae3c5aa01da4f2fcab57b09"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "9da5f3fe417bc8b056c84aafe8ea3806"
  },
  {
    "url": "tag/目标/index.html",
    "revision": "8d2e5635f8a9c7569eaae993c9985029"
  },
  {
    "url": "tag/数据储存/index.html",
    "revision": "8fdc8609aab3d4efa499f13c554bb450"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "5434dcaedba689ee66e7d684c73e1139"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "8a3b97104a2e573b56f59ccf7212ece2"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "7e415038ef2e4d262121983e82d5c998"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "b4a71d917d9a7d4ec665314140ee4499"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "39029cf4a75da359d1ab0605d7846617"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "ce2f585a030824ccba5f8860f5ee782e"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "8091c62e9dfb740d746593206e46d726"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "32f5be439ead7561554e6713e9cce27e"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "e36d1bfc7771322b160642718afb34ab"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "6a4507344756a473f180e82e0399c4a8"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "7eff3f71356b2f2902c5d89f81454533"
  },
  {
    "url": "tag/index.html",
    "revision": "e59c31981c8a0fb2d636cf8c21680508"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "fe453176bd4876dbe02bff385d64239f"
  },
  {
    "url": "tag/JS/page/2/index.html",
    "revision": "0528b7b1e7707f8c528551efad8c06a5"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "2ec7ee6620162da3555cc6803bf11485"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "9f583f145facfdc67939c83db1bf4d31"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "2c6fdb879f6161e9086ab64dc0bbde0f"
  },
  {
    "url": "tag/node/index.html",
    "revision": "ab8429bd3b6471deb85b894cf38c8544"
  },
  {
    "url": "tag/py/index.html",
    "revision": "ed23d70ccf6f8d3b523087f4f868af29"
  },
  {
    "url": "tag/test/index.html",
    "revision": "0671fe13e1efe59b6b848bf1d84643a0"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4ed4c81fabcd88cad558f8eb46dbbef8"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7aed1b80fc89a99f72d21418534f2a81"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "bde729fcdd9c879ecfa755ab9e65b121"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "1e52ca7edbf68db66f710269e7fbc500"
  },
  {
    "url": "timeline/index.html",
    "revision": "980714074432f11374768271908e9aac"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "486610d8cb8f1b30a9f11f7ac207aa0d"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "77f6d11bb7fe3f03b06eccfc7140b5f8"
  },
  {
    "url": "work/About/index.html",
    "revision": "015e1359d2111181c04f35da125d5e24"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "95870de73b0fddc1f0cdc8f679eb3284"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "fde819cf81a712a3597a4f259ebcbb76"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "fdc483d82ee69115f515b1b82f33cd3f"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "3c74ed88f6386f187169fc4376ee315c"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "e84f2373866ed64ac191ec783840572f"
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
