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
    "revision": "f2f77ad83730f8a12df2781a8ac4a10a"
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
    "url": "assets/js/11.0450b62f.js",
    "revision": "ba51ad12d0ade07afd0971ea36dffd91"
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
    "url": "assets/js/15.1a496fc3.js",
    "revision": "825ffa192efc96f3f4efcd6baf526858"
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
    "url": "assets/js/36.93caba6c.js",
    "revision": "26975802720d195ddf52b1d390d980d4"
  },
  {
    "url": "assets/js/37.32ba5bfb.js",
    "revision": "dae4d8883914f3f6ef307882f8284602"
  },
  {
    "url": "assets/js/38.183df9fb.js",
    "revision": "502f299e089b47ba380270f057434786"
  },
  {
    "url": "assets/js/39.57a1b142.js",
    "revision": "b97735f237b178bfb78624e3836d4cba"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.3af5d5ec.js",
    "revision": "f12c98d834b41c3ebf8bd5e2fe426112"
  },
  {
    "url": "assets/js/41.74862806.js",
    "revision": "a07a10676dcc28e284fca08b70e93674"
  },
  {
    "url": "assets/js/42.135bdf1c.js",
    "revision": "136abd0b53677c1290e171cb70cd283e"
  },
  {
    "url": "assets/js/43.5cdc87ea.js",
    "revision": "e3f90f313f210d06f3565d483757c9c4"
  },
  {
    "url": "assets/js/44.f40dbf9f.js",
    "revision": "2c6ada128910c5a89850fcd886f1602c"
  },
  {
    "url": "assets/js/45.14e16d31.js",
    "revision": "784bad3b23815818c11c1dbf668826b2"
  },
  {
    "url": "assets/js/46.29eb9b8b.js",
    "revision": "968336fd46de12d1ff95c624a50cc4c3"
  },
  {
    "url": "assets/js/47.cffaa8cd.js",
    "revision": "bde5445f8780a0202e941877d4e85488"
  },
  {
    "url": "assets/js/48.d4fc0ffe.js",
    "revision": "254123a03a80116b18e86000329e7cc9"
  },
  {
    "url": "assets/js/49.12b8127c.js",
    "revision": "0fb274ffad68090d6ac6bcf257a4d6da"
  },
  {
    "url": "assets/js/5.62b52fca.js",
    "revision": "3d48dda35e6fdf8a8e7c65369f2dd977"
  },
  {
    "url": "assets/js/50.c07ff2e7.js",
    "revision": "3a68b296427f57e1bb6e2db55162af31"
  },
  {
    "url": "assets/js/51.527e0c63.js",
    "revision": "f5389f7961ee342029e19a5582003e2b"
  },
  {
    "url": "assets/js/52.e2b25926.js",
    "revision": "9905057aace6c0103a74e9f0271ef821"
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
    "url": "assets/js/app.9d20ec94.js",
    "revision": "3ef4a8edab7124871a097cf1df3a6458"
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
    "revision": "ed7d0dbf1855e3f9e636c3b8701af41b"
  },
  {
    "url": "blogs/面试/题目/20201103.html",
    "revision": "2016a5c475b741fbde771db7601e8bf3"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "e8349843e0caf9db013f13466e81dce9"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "76db41083791330b025ba745ffe7afa5"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "389df2cde4dac872cd6adc13dfefebb1"
  },
  {
    "url": "blogs/其他/目标规划.html",
    "revision": "a5c8038eb8748794f72339a41b2cb38c"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "05c9f43bd5b82e96a47a8c1341cac992"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "bd607ad89d631f279058368a04988fd3"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "d8f79546296c4dea223dbad78dfb01ac"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "3ad570dee0b6cf16486ee48195185b3a"
  },
  {
    "url": "blogs/学习/数据结构/列表.html",
    "revision": "a8f5509a15e2c9e1e5e1371d14ca7a6b"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "aae9f11a3b4165f3c0e5a057a301d85c"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "29bf88b1fe0740227e27fd07963e66fb"
  },
  {
    "url": "blogs/学习/HTML/浏览器渲染.html",
    "revision": "b5894290cfdb356221e706cfdce70dad"
  },
  {
    "url": "blogs/学习/HTML/cookie.html",
    "revision": "09e7945e1aca918084391a26063aa8be"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "f39fce695352ff4ef01025b98a6fb1be"
  },
  {
    "url": "blogs/学习/HTML/localstorage.html",
    "revision": "441248102b08449d8085fbdb704383a8"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "6393d31ea003fb3a637405a81f76ca04"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "5f34b7b36e4e119914c2f0af784f3833"
  },
  {
    "url": "blogs/学习/JS/数组扁平化.html",
    "revision": "51d98dffceab41dcb9ed816cb132f6c4"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "269b369b5dc417299a110b9740599311"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "bcfd5e1806de160dcf9aec7938ccf350"
  },
  {
    "url": "blogs/学习/JS/Typescript.html",
    "revision": "fe8b449af87e5ef315f04f42a949fb8c"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "a13fab19e1c84737b414c9f3c533222b"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "4b6cebceb5822a8b8cf49ff9f6a52c62"
  },
  {
    "url": "blogs/学习/Vue/vue3入门.html",
    "revision": "235f9fb0af4274b9f0513eea4a954d5e"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "81f3dcb888528b4bf64c6cb91ee3a2e9"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "0b8f2a6d4ccbff9f6c5e39429c892132"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "24995f34faaf41860a5ce86f87db1126"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "6425072054e0fe1d8f2d5c46ed0754c8"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "05645cdaf75aafdc96cb0a7b55ddf180"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "c8cb7b0b05a0bdf790db4dd705b285ad"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "49fbc9179879b62b3f07b35319149249"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "f93990f0439287e795f0042d306aec90"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "eeaf783656a007e7398a4f9dbd89ca02"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "2f8b0112b9eb2fb5f92924d8f89d818b"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "92c33c0189cfb306f2008563d785737a"
  },
  {
    "url": "categories/index.html",
    "revision": "ea010a3a60e405cf678660ede80ae25a"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "72830c3f2e2dfab1db8b6d4b4ebb2296"
  },
  {
    "url": "categories/test/index.html",
    "revision": "6224cb9099f84886392aae36ea05e22d"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "4d3c71bd75e05c4a17907dbb1e26fa7a"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "62804e6d9c10214b5facd6d4a7dbebcf"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "eeaabd295c3547cbf9533c325c43eadd"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "3d6e88c3c345f124a6f4711c2fe37d94"
  },
  {
    "url": "tag/目标/index.html",
    "revision": "7a1fa789b80d3d1705b1ed347088e66d"
  },
  {
    "url": "tag/数据储存/index.html",
    "revision": "ad72bbe360eff70dfdde6c55d509bd52"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "6fbfd929f7c8166e9ae8887774545958"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "86fcedc4c5efa6896c7a682e005b835c"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "15b774a418bdf257c77dcf9220fb2445"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "85afe6553ebbe491286016b1c966c1b1"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "75548d17b48418140fff4a4975f80742"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "d0ba0a851532795fd86e20be229c9f89"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "13167190382ed4d0b9ba77a90cdef0ae"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "2530ea84da8346b7b52d396e55720504"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "ecebd395f0f2053b8192a219b2486d88"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "1d098a67d84db1f3a1e9512e40cc4175"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "eb72193f55b8bf615af2a99d2333d228"
  },
  {
    "url": "tag/index.html",
    "revision": "8a03b5bdffbb1d7054e75ad2655be9a0"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "662815f91828db7d08e0e23fdf6836dd"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "02dac6f73be10e41a9237ce32715fb82"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "0129133b2dfcbeb1a9f4e05f05457c72"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "b053ef72ba9c787d3dcb705fb722b844"
  },
  {
    "url": "tag/node/index.html",
    "revision": "7af90e77bc359d4c66e795fc05de192a"
  },
  {
    "url": "tag/py/index.html",
    "revision": "ea021ff7e792fc13c7c1aa55cddbbfd8"
  },
  {
    "url": "tag/test/index.html",
    "revision": "a888b891272e9cbf2d4e8858b3e625a6"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "48cdb9e8b01e41317b6e03520046ff1e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "3864a64f39db33799507e0fbf30dce1e"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "ec120f08e70d063cfdb6d56157d1d7d0"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "a42a9628abf3b292bf80734a541d4e38"
  },
  {
    "url": "timeline/index.html",
    "revision": "11a5fd5d0f733353313863f8d7aed984"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "48946d5904c06a741e7b1894fc3d38c3"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "6481d04ddac9dfdaa0e50d4fcc4ed311"
  },
  {
    "url": "work/About/index.html",
    "revision": "6ba1f2afd5def2754f1a7190b0bbd38f"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "9265d11b59d2dcea148eb155c5ce55d0"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "ddefeb008c6ee783d7529dfde5d08258"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "8a258762dd41c408c87e234220df29c0"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "d31dd11503a192205bea545bc97d60dd"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "92727ab7afa25be49a8835932f70ab41"
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
