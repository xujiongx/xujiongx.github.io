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
    "revision": "9ecac58f2c63fef1b1dea3480f716f69"
  },
  {
    "url": "assets/css/0.styles.a4492f1b.css",
    "revision": "4fffeb3949fcbf7b405c0042e042ae01"
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
    "url": "assets/js/1.3a835e7d.js",
    "revision": "4b9b09ae50f2b23191d47d717a1b973f"
  },
  {
    "url": "assets/js/10.0c179aa1.js",
    "revision": "d7affe9108d33ac3eebc502899388a71"
  },
  {
    "url": "assets/js/11.a1ca6788.js",
    "revision": "db6c07483d15726d295e6eb713c106b0"
  },
  {
    "url": "assets/js/12.3596a538.js",
    "revision": "020ece9bedc0379f1e3f3f5e5c344bdd"
  },
  {
    "url": "assets/js/13.ec9012b9.js",
    "revision": "181554259e824b8cb48b12e1488bf24f"
  },
  {
    "url": "assets/js/14.06f37a3b.js",
    "revision": "d8bb79c069ae316823098fb60c2312e8"
  },
  {
    "url": "assets/js/15.cd3e4b19.js",
    "revision": "85e69b811993f2c1890aeaa5b63af1cc"
  },
  {
    "url": "assets/js/16.58be8487.js",
    "revision": "4cafca159ae8b1b3f5226984ac6bc600"
  },
  {
    "url": "assets/js/17.54eb278f.js",
    "revision": "3726cfa8a4cd20ac252517a8f0aafbde"
  },
  {
    "url": "assets/js/18.ef7ed996.js",
    "revision": "ae2bc788a14364c35483bf502b3153bd"
  },
  {
    "url": "assets/js/19.071521b2.js",
    "revision": "3be951a106a7692291fd8f8882819fa3"
  },
  {
    "url": "assets/js/20.bae5db7b.js",
    "revision": "040b87cd3abfabb46533cd7745b1af72"
  },
  {
    "url": "assets/js/21.72560e11.js",
    "revision": "cc7b25a7705de225bbdd0b0a2679d076"
  },
  {
    "url": "assets/js/22.6763020f.js",
    "revision": "fd7e9edb31d2d84ede0ccbbe3edb5273"
  },
  {
    "url": "assets/js/23.93a185f5.js",
    "revision": "6beaede2f5d048583b45be22a645606e"
  },
  {
    "url": "assets/js/24.50a1a6c7.js",
    "revision": "2fdccc6e9ececa8afca5f512acf57501"
  },
  {
    "url": "assets/js/25.cd8955ef.js",
    "revision": "3459c6f303502340e80691b5e09c91b6"
  },
  {
    "url": "assets/js/26.35fec9fc.js",
    "revision": "73b21d71162c37b06a5edd4ed7f4a078"
  },
  {
    "url": "assets/js/27.0494c600.js",
    "revision": "b0439a1c4dac5365376a1990dc7ef57d"
  },
  {
    "url": "assets/js/28.28d74d7a.js",
    "revision": "e5049088ea74ab1f7ec85e98eb623b94"
  },
  {
    "url": "assets/js/29.c603ffd7.js",
    "revision": "5032629e3d61149acbbb357a7e4f41a5"
  },
  {
    "url": "assets/js/3.ffe6caed.js",
    "revision": "23727ed8782e348eee7660f75728bf89"
  },
  {
    "url": "assets/js/30.7a7f2680.js",
    "revision": "06ee95e4223fc1f844a83589d69359c2"
  },
  {
    "url": "assets/js/31.59554439.js",
    "revision": "32456bb4491feb27eb68a63076df54e1"
  },
  {
    "url": "assets/js/32.2ddf4d8f.js",
    "revision": "8a7678f131a2da4026145420d79a131f"
  },
  {
    "url": "assets/js/33.2a01a55f.js",
    "revision": "1b1f77895e5eedff71069cf6514d802f"
  },
  {
    "url": "assets/js/34.8115ad6e.js",
    "revision": "c790378f5faa87e235b712654b6149d6"
  },
  {
    "url": "assets/js/35.3cc3e021.js",
    "revision": "46853c3b36dc3a36645f6480b2585ae8"
  },
  {
    "url": "assets/js/36.a0479071.js",
    "revision": "c27731087a87911d2d880c5db15db164"
  },
  {
    "url": "assets/js/37.db2c820a.js",
    "revision": "fe57f374f833a5a691bb8972fdf68021"
  },
  {
    "url": "assets/js/38.798bca9e.js",
    "revision": "69d1d988144676c942e216ce67d52fc7"
  },
  {
    "url": "assets/js/39.8191b7a9.js",
    "revision": "6a14c6fd0d2dc2e498844f47da9d43e2"
  },
  {
    "url": "assets/js/4.5753ee5a.js",
    "revision": "e290d18304b299364a839780ec023e14"
  },
  {
    "url": "assets/js/40.c9621ece.js",
    "revision": "9627263323ecf15ec6d966e49d52ec11"
  },
  {
    "url": "assets/js/41.691ce048.js",
    "revision": "4b3f0ad89c950852e390a5dcc39e9215"
  },
  {
    "url": "assets/js/42.c3e01b8d.js",
    "revision": "ee1bdf2358090aceebb692a341082f1a"
  },
  {
    "url": "assets/js/43.919eeacc.js",
    "revision": "95d183d3d670e983ee5961d733aa791a"
  },
  {
    "url": "assets/js/44.dfdcb10d.js",
    "revision": "fc432f336aa6463b1ff0f65aa6cc3860"
  },
  {
    "url": "assets/js/45.017983e3.js",
    "revision": "8fe588c621490b58c27f4055166ff7e4"
  },
  {
    "url": "assets/js/46.e5a49533.js",
    "revision": "a5b6a41814cb544ee6391be3bdd68580"
  },
  {
    "url": "assets/js/47.e66cb1d0.js",
    "revision": "b71758b7c6035cf849a75f8a504464e6"
  },
  {
    "url": "assets/js/48.4094151d.js",
    "revision": "76997e386e86e75e013918693edaf0fb"
  },
  {
    "url": "assets/js/49.65e898ca.js",
    "revision": "de0758f766b8718541494b5c96a0fc35"
  },
  {
    "url": "assets/js/5.71e05511.js",
    "revision": "9598978a7bbdfefd7d68fa961cd51880"
  },
  {
    "url": "assets/js/50.2c332211.js",
    "revision": "63cee97c1873cee8a8b7f1dcd0ef2e7b"
  },
  {
    "url": "assets/js/51.d5383542.js",
    "revision": "97985cc0b8e0bf0ea1f3ec97cb9dfc16"
  },
  {
    "url": "assets/js/52.b2230713.js",
    "revision": "ff7ebfe74f4fc7edf895c7aeb6655699"
  },
  {
    "url": "assets/js/53.9d9afc56.js",
    "revision": "d4fe5131fa26dfd43d26294ac792ff4a"
  },
  {
    "url": "assets/js/54.c173e3a5.js",
    "revision": "c8f94b8530cb58877f3b734b87655c12"
  },
  {
    "url": "assets/js/55.af681648.js",
    "revision": "6d385a5a7f3007d733eefc4136c0ae74"
  },
  {
    "url": "assets/js/56.288d7772.js",
    "revision": "0961cef33c4168bc3e5f754566c7dbb1"
  },
  {
    "url": "assets/js/57.560d38ce.js",
    "revision": "865b63a9ae0943a9fb2f9322a931a181"
  },
  {
    "url": "assets/js/58.b29b207a.js",
    "revision": "252a06f3390ce42c477e04316eb71fa8"
  },
  {
    "url": "assets/js/6.4d1225bf.js",
    "revision": "3056516c3fa2a435c35caa516d465f85"
  },
  {
    "url": "assets/js/7.0a261de5.js",
    "revision": "44193bad6e38b66521df2a36442ec71f"
  },
  {
    "url": "assets/js/8.c0f40d7f.js",
    "revision": "1298a67ed6d7217ed910474b9962a5e6"
  },
  {
    "url": "assets/js/9.11bc15cb.js",
    "revision": "e0f27cd6b673a58d9d0af140319eee83"
  },
  {
    "url": "assets/js/app.628c0e2f.js",
    "revision": "df7659d49158d0ec0ab0e6e8dfca9af1"
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
    "url": "blogs/leecode/001.html",
    "revision": "6114cf096508fd7a28fc7fbcbc15c383"
  },
  {
    "url": "blogs/其他/100301.html",
    "revision": "dc1f94cc9d415028bac29a44d881846f"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "339c988c923fb20f85c700caf2c5efb2"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "31bcabfc5a05b075e04bac1ce63feddd"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "91f01450852a4b382f6158d1beaf7662"
  },
  {
    "url": "blogs/其他/目标规划.html",
    "revision": "2c4d4db6014ad6da6eb6ff29c72dcd94"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "aee6e5cdc74ea44bb841348c3c0dd630"
  },
  {
    "url": "blogs/学习/HTML/cookie.html",
    "revision": "5c0d4a6c3b2b69a0a818f18114879b9b"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "c71d6ea89baad95cca63be6b48f1b77f"
  },
  {
    "url": "blogs/学习/HTML/localstorage.html",
    "revision": "973fd361fea528f92ab5e935256e0364"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "47e7e0e95414e07d6d4377ddb73892a4"
  },
  {
    "url": "blogs/学习/HTML/浏览器渲染.html",
    "revision": "7aaa8f2328457c636b2e0354506da836"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "b850eeb423b9341b7a2137da955e5b23"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "e73eafe5bb128e98dd7849b367896e66"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "704d086dbf1f20c81f79139294a2e5b0"
  },
  {
    "url": "blogs/学习/JS/Typescript.html",
    "revision": "6aa218f06c81dd162dcc59d81239508e"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "cd9e15691b306b8198b3eec6260cd3af"
  },
  {
    "url": "blogs/学习/JS/数组扁平化.html",
    "revision": "6efbcce04462341a0463074b3e832fd6"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "6fc9cab7b4c11a29b227498721ffafda"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "c45e2d4e27a9e25d28287e8cfe7525f5"
  },
  {
    "url": "blogs/学习/Vue/vue3入门.html",
    "revision": "bfa27c14ea627601bb6c2b862fdf5611"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "4a91a56bb43f540f433307612460c18e"
  },
  {
    "url": "blogs/学习/数据结构/01.列表.html",
    "revision": "ac63c33f23d18001b1c48303395e68c0"
  },
  {
    "url": "blogs/学习/数据结构/02.栈.html",
    "revision": "902f1ed3e2d520d6c8283432be4abe19"
  },
  {
    "url": "blogs/学习/数据结构/03.队列.html",
    "revision": "84946485659b9104c7e1fb0a84f83f21"
  },
  {
    "url": "blogs/学习/数据结构/04.链表.html",
    "revision": "e5bf21a9b41f657a5f29cef80300f466"
  },
  {
    "url": "blogs/学习/数据结构/05.字典.html",
    "revision": "054ccef2af925512dce2f91cb7b836ce"
  },
  {
    "url": "blogs/学习/数据结构/06.散列表.html",
    "revision": "7eac1b2b2d3e4a237110ab4012db08a0"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "908eb5c7e6ccaaa33ccadf274f68e87d"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "e470e243e17784eb432213167e7b57ac"
  },
  {
    "url": "blogs/日记/REAMDE.html",
    "revision": "f565471b07319b048c2f46025f0c649f"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "98a0cf09f26c67bac77fab7fcbfbec33"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "9a5eb4e7c29b94ea7ed8e869c2b4bbfe"
  },
  {
    "url": "blogs/面试/面经/baidu2020.html",
    "revision": "2e05f87bb3559f57bbbb42e11860e9bc"
  },
  {
    "url": "blogs/面试/题目/20201103.html",
    "revision": "f4396f34f25202ee8c07b6b17e178d06"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "46cd671087a506eb5a0a20ea2c6a760d"
  },
  {
    "url": "categories/index.html",
    "revision": "6a15b1c8fc7fb7cc3189fa7e41d9e6d6"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "48197031d68c2bf2c7f8cd997b20b41f"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "b8aeaaa12e31c27417883efe9d7af3a8"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "e5f20dd3cfdb0e20faa516515a7dbd27"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "e249ce3c32eadacd43f6c90d1bba09bd"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "64a2ac9f7ad051f77e334cda810e28e1"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "e69689d403586d0634e665becbdc9943"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "05ff3ec1200b38ca25c55d9636f77ed5"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "ae10cc94df676997d4321508fe2b2abd"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "e015c1bd320ffbca0233864f97728ec9"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "899cc42691bca76688b8af182840b86b"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "73d8742d124d0d766d0a396304336a43"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "00685b13de0390822e3c584329469c5b"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "64148b0e5a866d8a11fdfb27512d3f15"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "eb35e0c97d02ac323e1c4dadad1a0892"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "3288e773080296666d7da0f5e7ba4b40"
  },
  {
    "url": "tag/index.html",
    "revision": "f5e9ad26da13224f3aacddf4a60f5802"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "d4be8fc0860052c57133879d59681a31"
  },
  {
    "url": "tag/JS/page/2/index.html",
    "revision": "acc9948d364bca578f2d515030150ee4"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "9f34fc319f8075ff664bd7fbfe4addb0"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "8486b82219c33161ed842e4d35bc08fb"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "1950313e29cfcdb1668135d40cfcaa28"
  },
  {
    "url": "tag/node/index.html",
    "revision": "464d3cbb9437c2b727b9b0d9e9f52940"
  },
  {
    "url": "tag/py/index.html",
    "revision": "14a8c2edb8aa367f17034381c186d4d3"
  },
  {
    "url": "tag/test/index.html",
    "revision": "1e8ad4a85ffdce5aeb5457cc93d163e7"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "aa5de8641da5daa053fecff2ab942fc9"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "31364f2beb2315cc789299b7139486e3"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "3b6692b8502321e72f3916ab7c8f22cc"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "5ed265b6705b2d06a737b077dfb5d6ea"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "4df2ac8585b80d94226b5881a56bfd1e"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "eaa9d62fb7e0487881b0b719ac76969c"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "bde4eabf1f6629b2dc0852f69c6cb324"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "4d7bf52cc07d465fa1f041724bc02ed3"
  },
  {
    "url": "tag/数据储存/index.html",
    "revision": "777235f799291843e36406d472066fb1"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "f1ed104da39617acd6d37be4ba20694f"
  },
  {
    "url": "tag/日记/index.html",
    "revision": "14df3312fbce0da8fe4b4de7363ac274"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "5ceefba443c7efa5eb32f0f4ba19b792"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "494975ec1c500a68ff968f508ed9efc9"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "3298112d9d9afa9cdc0cf0e016fb35af"
  },
  {
    "url": "tag/目标/index.html",
    "revision": "6963bec235478cd5e71fbab854ef8116"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "d9c71f2c70471f57d514178d6e9ad5f6"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "c6e72356386efa703c84c081a965679c"
  },
  {
    "url": "timeline/index.html",
    "revision": "acfd20e489121c438af223c7eccd785a"
  },
  {
    "url": "work/About/index.html",
    "revision": "ec7e5eaadaf645c4b3da41f6dc3f0b73"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "1bfb2e5e0983f82d1e6c83857dbbb92d"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "5f95c6d77c9c6aed693fc0925024fa78"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "7a1a6a5d6e5986889664ef1f08abf585"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "10d04d90da3da2decac99c4d13afdcea"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "7186225192746979b9cf9a2016cede20"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "8afa1712a434db73e88e591f55cea32e"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "cffffc39cf03327b064affb16fd75876"
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
