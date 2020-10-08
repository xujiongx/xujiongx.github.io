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
    "revision": "5b0772dfe89f7244a401f8323125df3e"
  },
  {
    "url": "assets/css/0.styles.6d9d6137.css",
    "revision": "f9395975764f3a1393879ef00de4dee0"
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
    "url": "assets/js/11.24ea7ced.js",
    "revision": "39b2abaaecc6e4925f70eb458c7cb837"
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
    "url": "assets/js/16.8e893b7c.js",
    "revision": "76bc3ab7c2ce5be3c2d3c311a6032d78"
  },
  {
    "url": "assets/js/17.77a8e79e.js",
    "revision": "67b7b0137ef4d30a67ec037a0bbd371a"
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
    "url": "assets/js/21.661b637f.js",
    "revision": "2518b1ce703d5dacb9eb478fe8e8c7c1"
  },
  {
    "url": "assets/js/22.c2e7bdf2.js",
    "revision": "25a2444b386d131b1c071548cbf583d3"
  },
  {
    "url": "assets/js/23.9012fc42.js",
    "revision": "d3678cf41c488e150011b56fee5bc35c"
  },
  {
    "url": "assets/js/24.e90c43d2.js",
    "revision": "407e54da7409482cb8aaa451102b5ddc"
  },
  {
    "url": "assets/js/25.238f7514.js",
    "revision": "8d5abe7d857f7efc21d52432e06a9b83"
  },
  {
    "url": "assets/js/26.b3433307.js",
    "revision": "8e75efa10000c89440bd3f3d68c3d789"
  },
  {
    "url": "assets/js/27.d6cb42be.js",
    "revision": "3006369a9305ea2647f75b7b76e68f29"
  },
  {
    "url": "assets/js/28.d18ab34a.js",
    "revision": "dd4bad69454d64f0d13b0abd0f23abce"
  },
  {
    "url": "assets/js/29.f9d85c22.js",
    "revision": "833fdfd8ce4a85b78ca3dbd27d5c54ee"
  },
  {
    "url": "assets/js/3.cd2d6d7f.js",
    "revision": "257c0dd702f9f20b1f3e8e465cc1f9ca"
  },
  {
    "url": "assets/js/30.608450fe.js",
    "revision": "81af0f09c7ac6ea2685dea37cfbb8287"
  },
  {
    "url": "assets/js/31.6f2d2aec.js",
    "revision": "74c3c16de37d886a8bd14acce599cb7d"
  },
  {
    "url": "assets/js/32.b0532f38.js",
    "revision": "7d4c3facf9f6898f900c96bee774bba1"
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
    "url": "assets/js/app.f8e08ec0.js",
    "revision": "1a5c829251a491ca6072615d2c8d0662"
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
    "revision": "aeefdf7c5d2f6411abc52d5a0bb97e86"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "ae14564a6440454225d269efa1dbc30e"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "87bce43e298e22193162164167f94341"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "f25d9e719d2487d24cd6e4696ecb23ea"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "9cc70092a60c817e7086046b541f305b"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "a216298c12ba988cc9aac88f096a2933"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "55d899d5078839c2f289762a4ea00cde"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "1e84b29f214f738c72593ff2640a7f49"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "2269388d79704a5730e3590fd3d3838e"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "aa8b586d1d69f2707b7642ab3a4187cc"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "93b07b55face7afdf504fcedbe192646"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "562ef897e548b8cea7d81dabfb211225"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "a5a1dbb979b5913235abfe465354f2ac"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "49dc717b683f73dfafad83ed131c9ab5"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "c415620ace1a43ebe2eb27a8dca92362"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "14d5730987f0c26b71d1ee33c08707b9"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "a98f181964bf8bf4222e44fcf3e42385"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "f9b126ef385398710ef6e213042fcec0"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "cb1b2de640cd3398f96cb524f6933cd6"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "468a9dc3fa4b0291a3646f87842b5f83"
  },
  {
    "url": "categories/index.html",
    "revision": "208472f767d7aaa58ecaae9be7f88eb3"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "d6a8ef4a009d5f90ac265565b968d697"
  },
  {
    "url": "categories/test/index.html",
    "revision": "79d7418d70ff60ddc35f4f545c8980f2"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "c4a490c182ffb1b0b343627f9d1850f2"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "9d9032b57bf8bacdc322def9e119bd9d"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "5be320968c115ebcde09e3e3ba5b965d"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "c1707627e93830be1a5ab6daf6f9bdb2"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "a6a270baf661a3929d05e18a54ef45b2"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "3a23b1b7b177133bc9a481e50e3e8949"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "5410291327dc201912b4286132789cd0"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "0f0b44bb65331d6dbe9ba08d6cf411c1"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "ee65d4eae7dd11d725e7d3eeda375eeb"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "ab503a565e9b0015645bacdcd6c74abb"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "b1c868e187203de531e1b38dfec56f65"
  },
  {
    "url": "tag/index.html",
    "revision": "588c675d0a34caca88c10965a42b9bd4"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "aa6fe105f009c55e02e33cb65efee266"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "ee99f249fbb9454a83d9a251f88991ff"
  },
  {
    "url": "tag/test/index.html",
    "revision": "bb6b934f90553400f0aacacd72233a1e"
  },
  {
    "url": "timeline/index.html",
    "revision": "c35783841d1b378e3c134a0427d7ded3"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "3b50a96057e1627cf84b605f5f7314af"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "0eff5a77e177adaa711059daea9ecc58"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "42c50f230b006779cc824b0a259b0ca9"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "f77b4f53e92d428bcf2c0b74b2a2eb1b"
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
