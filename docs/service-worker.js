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
    "revision": "e8e1fcca02869395e5c21bf5fa741512"
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
    "url": "assets/js/11.45da01ed.js",
    "revision": "c43838e5eb16e92cc651c82e76f5b16f"
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
    "url": "assets/js/14.d4ee2fa3.js",
    "revision": "632300805b0e3323af1b432d4a93cbe8"
  },
  {
    "url": "assets/js/15.1903d4bc.js",
    "revision": "16fcbb7145fb13af32f796868d1a9af5"
  },
  {
    "url": "assets/js/16.0bc08ca6.js",
    "revision": "d4472509423ff9cc1e720268ff3b0293"
  },
  {
    "url": "assets/js/17.e379e85b.js",
    "revision": "e7c2cae4997018d1ecff4e3ac2956079"
  },
  {
    "url": "assets/js/18.b9a7ff02.js",
    "revision": "81f9a6371fa47cd02b331a394232669c"
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
    "url": "assets/js/29.d70bdfd6.js",
    "revision": "6917a12b10b014ca7293289e3d3bfb22"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.aa99b518.js",
    "revision": "bcbc42bf4e6f04360850b8a06b2e1382"
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
    "url": "assets/js/40.c42b4b23.js",
    "revision": "7b2c80fd5c35a65884462ee800a91bc2"
  },
  {
    "url": "assets/js/41.9e7349e0.js",
    "revision": "9acb8334c8c7c6608085e953f435044e"
  },
  {
    "url": "assets/js/42.2bb8e0f8.js",
    "revision": "6e39d853eb08db4733238fa3d905fb9b"
  },
  {
    "url": "assets/js/43.632db9a3.js",
    "revision": "161af39dc5d6558b28e78947cfefc06c"
  },
  {
    "url": "assets/js/44.5be1636a.js",
    "revision": "057e6b39ee76280f193b08c240f0ade7"
  },
  {
    "url": "assets/js/45.5f08904d.js",
    "revision": "8c7c76823e8c57c24e6344f525a4631b"
  },
  {
    "url": "assets/js/46.a5051d88.js",
    "revision": "15d6de702826f138137e5dd9d619f694"
  },
  {
    "url": "assets/js/47.15c97426.js",
    "revision": "e1a98c7988c0025b3c18f6c60d7fa8f9"
  },
  {
    "url": "assets/js/48.257f6d36.js",
    "revision": "1baf4216d1a3cb855d1b11309c88b377"
  },
  {
    "url": "assets/js/49.33497b78.js",
    "revision": "bffe9a29a4c811daa293f354cf193f71"
  },
  {
    "url": "assets/js/5.62b52fca.js",
    "revision": "3d48dda35e6fdf8a8e7c65369f2dd977"
  },
  {
    "url": "assets/js/50.6f806cee.js",
    "revision": "3251aca2d4c7969cbc979e5decf4981b"
  },
  {
    "url": "assets/js/51.6ff1df44.js",
    "revision": "681be84faabed16bfd3d35f43498ca0e"
  },
  {
    "url": "assets/js/52.f12901b8.js",
    "revision": "7d37ea4e79aa7a3f4a328a8adbf7fb71"
  },
  {
    "url": "assets/js/53.77ec1804.js",
    "revision": "c9dd528c26b779b60506a3da1943e5c9"
  },
  {
    "url": "assets/js/54.5b722f6e.js",
    "revision": "91e8fe344b7e1e0f2fded037cbf771b5"
  },
  {
    "url": "assets/js/55.4cbd2c28.js",
    "revision": "26e02bdbe1df06fdb3d4f5b20cc86675"
  },
  {
    "url": "assets/js/56.501c4a55.js",
    "revision": "bf0ec7adad39a256fc5df8a5f5fb48d6"
  },
  {
    "url": "assets/js/57.0fd5b722.js",
    "revision": "175906d7d80d3432f73c2807fb68b7da"
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
    "url": "assets/js/app.adee33ba.js",
    "revision": "e052854f76324b6aa6dc57bb635430f7"
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
    "revision": "929b4723f12a58a70a17ab93e7e35f49"
  },
  {
    "url": "blogs/面试/题目/20201103.html",
    "revision": "f851215d42a7fd337f51e9bd8fe4495d"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "7d5926fad32cd5fc0638f1066327f66f"
  },
  {
    "url": "blogs/其他/100301.html",
    "revision": "f465d3deff4af4424cc089f4a91cf085"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "be9831934c958e95774821c11bf189ef"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "a79908fb0039724be5cd462e7c024925"
  },
  {
    "url": "blogs/其他/目标规划.html",
    "revision": "eb0790212fb4bfc93f38f4df6d84163a"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "7f85d8134b8032aada381b58a9ce4687"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "be6191a6043bb6f48ae336f41bd4ac88"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "32978c98edb355aeb96a6e2f40d30119"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "1300afeca047c0ece9a3381227c28f1b"
  },
  {
    "url": "blogs/学习/数据结构/01.列表.html",
    "revision": "e21d8f30d646622e045ca62407d9a630"
  },
  {
    "url": "blogs/学习/数据结构/02.栈.html",
    "revision": "746fb5f9d70ef7571f8b67786ab16496"
  },
  {
    "url": "blogs/学习/数据结构/03.队列.html",
    "revision": "4acd2ae7f482c85cb0f93c3258de6248"
  },
  {
    "url": "blogs/学习/数据结构/04.链表.html",
    "revision": "30a4ad283c88085587ceb3b8c3faf267"
  },
  {
    "url": "blogs/学习/数据结构/05.字典.html",
    "revision": "4c8fabfac6a63fc1ba1fa01be7228a0b"
  },
  {
    "url": "blogs/学习/数据结构/06.散列表.html",
    "revision": "a6a7ce3478ba62900ba3771221311182"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "0370d18da889c14df708ec8da5d3cf6e"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "59b165730a3125ea26ff54243d7b1a61"
  },
  {
    "url": "blogs/学习/HTML/浏览器渲染.html",
    "revision": "da73e1d93aef3775fae153c321b5e369"
  },
  {
    "url": "blogs/学习/HTML/cookie.html",
    "revision": "203cfffde18eac2f7da41907535aba2e"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "bdd84dfd544714bbcef553c8dabaa086"
  },
  {
    "url": "blogs/学习/HTML/localstorage.html",
    "revision": "e8588441a2bbd93487647ee8ecab39a1"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "e480a5b7f431b85b2f321e83cacd6c90"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "54e561c89c8fb89f5d8b72d6bef59999"
  },
  {
    "url": "blogs/学习/JS/数组扁平化.html",
    "revision": "fa4ac36d5d7e2c57b540c70d82aa6967"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "a5ee974bd55a3c2cd04d480b509af882"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "132d5d8a226f0ad9fd1c7aad8371a0f3"
  },
  {
    "url": "blogs/学习/JS/Typescript.html",
    "revision": "61142a8d65e7f805481e41ea88e4f15a"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "71561a86413dbd1e05e0199508c26236"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "b61f0c8bb92759ad0c0e93f5b28a6e6c"
  },
  {
    "url": "blogs/学习/Vue/vue3入门.html",
    "revision": "0986f6b9b3adae204f21a236f48a87c5"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "634396ceca9e53b33f890a9d08336915"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "997db9a032cfcef5b9f4badf23f96c08"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "d58898322ff4e294d1bbd1d0a3e11a34"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "565611c0d1a2f5525ebe7e8f58724a60"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "cc7a7edd26b87235bedf02453015c8ab"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "774b1a8f10a9f68eef32d2223b32e36f"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "11f6b1e9a9b590410ff4f6e7e63b5435"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "a76461ce12dafd57390b448ab81ebbbe"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "47011512e46572d9636051e136cc4f5e"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "e28cefcf7574731583ffc497d855dc11"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "0b692135c59fffa7cef3f6c226a88272"
  },
  {
    "url": "categories/index.html",
    "revision": "9c834ad4093005ad698ef21c1c3ff78b"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "65365939d4977917d694e5cd5e1b94e3"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "3fdb2177253689cabf464f34742f81f5"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "8fb8493201c5a7fcaaeea9598a9a86ab"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "9075568b648e96d660c259c25922518d"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "e8b7530341f1625daba10d001118d62a"
  },
  {
    "url": "tag/目标/index.html",
    "revision": "91827c7f206f11b99de65d7d646c5028"
  },
  {
    "url": "tag/数据储存/index.html",
    "revision": "473f1d3eab0a19f4c9492e4b218460b1"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "1efb8fdf7fae23b41a8a359f2f05edcf"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "a25406a607a3e5ff08a50211fcbad6df"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "b2498def3c44f40a8dcac9db812cd8c7"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "da8896786e8356888e98e4d40bd9bbfe"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "5b089f266e6f943ace63d0b2cb29a3a8"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "ad0c0311f715f06623ae4692276414dc"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "f999bae814a0cdb505bc9df55e9150d9"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "43ead189dba887724d4d7072e2652a76"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "f1e08273b27831e4de37bf2d504b6cf0"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "4a97a27cb90fd28b8ef499721b23dcbb"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "df829bf5ea9cfe8d2f3ee8c62f0fcbcb"
  },
  {
    "url": "tag/index.html",
    "revision": "b0823872267d41c158b3c2e9e42ed446"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "8174f36e4e04f27cfa90799e6d2ae27c"
  },
  {
    "url": "tag/JS/page/2/index.html",
    "revision": "4aabb26ba5f30ed1643d02286206b6c2"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "973af57fd003f8283c9861087a0cbcc6"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "b115104ca1c076aea8a365fcfa70d5c3"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "3d6d3033577e36bfaf87ee6ab41e2e93"
  },
  {
    "url": "tag/node/index.html",
    "revision": "abf285f601115beca19902f19fb446b5"
  },
  {
    "url": "tag/py/index.html",
    "revision": "25e4cb9de267a28455d63361bb3d562d"
  },
  {
    "url": "tag/test/index.html",
    "revision": "d7f187bcf00129ab1c6f74e1415a4bd9"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "66b919f09e0179bf0b8ab0504d768b62"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "0f124281bae44208e509b8ffe26232d7"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "062603bf8d85c43286139f4dcda8e76c"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "9302ccc998843af1262c758efe5a2e06"
  },
  {
    "url": "timeline/index.html",
    "revision": "6904dae3244904ba1648e90c37e97781"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "d8d05ec1db3af21dc4ad5ebe99619167"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "0333245b5244539be55f0d312afc8c37"
  },
  {
    "url": "work/About/index.html",
    "revision": "b64b52943ae696adfc425c59ef980809"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "5f09cb82523666a8717de870d6598125"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "53fad234fd5b4d9f1864545a5e646acd"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "333439d630d03ae9ec44e26986349ce3"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "ad11ba2be1216772ebb461ac18f26e86"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "b4d94ab97d863ef2822f81e42839d810"
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
