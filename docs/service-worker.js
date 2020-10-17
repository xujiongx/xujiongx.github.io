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
    "revision": "a6855a0021783ae9cd4d7b69f5c13bf7"
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
    "url": "assets/js/11.9428025a.js",
    "revision": "93c5c9413beaf553946d6efd5c88b70c"
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
    "url": "assets/js/16.fb655a50.js",
    "revision": "49f8210885e7f3d2b834b1360282790c"
  },
  {
    "url": "assets/js/17.b609caa7.js",
    "revision": "42fe4600d19974d1d0f1109e7ddff6a3"
  },
  {
    "url": "assets/js/18.3417f593.js",
    "revision": "e5834d198293d31ba81c1432cf4cb798"
  },
  {
    "url": "assets/js/19.0399a075.js",
    "revision": "de4c066b3819ec32208836ef48e0c14e"
  },
  {
    "url": "assets/js/20.3f8e1eb1.js",
    "revision": "e59168ec80af9cc9b3ab141139cb21a2"
  },
  {
    "url": "assets/js/21.adfc79d6.js",
    "revision": "544c1e3096f39b9379231a2c5f00b7ae"
  },
  {
    "url": "assets/js/22.46d9e2bc.js",
    "revision": "463ce058e6e6ede876b674524817fc96"
  },
  {
    "url": "assets/js/23.db69c9a8.js",
    "revision": "8e4cd195da1886b314fdfc7f23c3af39"
  },
  {
    "url": "assets/js/24.86685a9f.js",
    "revision": "b3b0ea370f83372165e335c213b7c06d"
  },
  {
    "url": "assets/js/25.604b821a.js",
    "revision": "5886f22f4363116c745725085232bf66"
  },
  {
    "url": "assets/js/26.6cc80fba.js",
    "revision": "65a08f72475f6288ac498e2ab34f3ffa"
  },
  {
    "url": "assets/js/27.3f3fc78f.js",
    "revision": "a85299087f19346d1a5c78e73c3f9e4d"
  },
  {
    "url": "assets/js/28.2fd61145.js",
    "revision": "2890e75f22634d5c69836f34d0f89f1a"
  },
  {
    "url": "assets/js/29.eceded22.js",
    "revision": "f88d01eb1ffddfe806d1557f95b1bc82"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.bcdce9a7.js",
    "revision": "587182abe2b160bf4f414fafead69e57"
  },
  {
    "url": "assets/js/31.ed567bb8.js",
    "revision": "dd5f7d3fd4dd78ce981d9075cf0499a9"
  },
  {
    "url": "assets/js/32.fac8e73a.js",
    "revision": "b63775ac601bc007f50f3f1a4d9b634a"
  },
  {
    "url": "assets/js/33.b9e4a5d8.js",
    "revision": "4bf812e9cce835e267645911ef2f8eba"
  },
  {
    "url": "assets/js/34.ba129f68.js",
    "revision": "115b96f27bfe683d403e234f153cce44"
  },
  {
    "url": "assets/js/35.782e4616.js",
    "revision": "a67d80abee00a08621225ec10fa8f83d"
  },
  {
    "url": "assets/js/36.d98a824c.js",
    "revision": "6efe13bcec819377e9c685cc5f83ed25"
  },
  {
    "url": "assets/js/37.96f6032e.js",
    "revision": "1b78af8082a7dfc01367fbfdaf7d55fc"
  },
  {
    "url": "assets/js/38.7eee488e.js",
    "revision": "1f2d7636584df672514c5059bfe6ec9f"
  },
  {
    "url": "assets/js/39.7437b3f6.js",
    "revision": "29aa06da01effa9361b441bfb2760d11"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.4cfdf31d.js",
    "revision": "8c070d91452b3fe0ff8f80c72dc52ca5"
  },
  {
    "url": "assets/js/41.d9c1cf28.js",
    "revision": "afe4a6fd438b4d1255711eb3b5985ac6"
  },
  {
    "url": "assets/js/42.ac495ed3.js",
    "revision": "8c6cff60d1ed04e34f9ad53bbb018957"
  },
  {
    "url": "assets/js/43.c35240d4.js",
    "revision": "32b7905ce4e8c61d1e08e487ac0e6298"
  },
  {
    "url": "assets/js/44.9d31f3de.js",
    "revision": "fae6decf8b9a0658e4087b8e9715949d"
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
    "url": "assets/js/app.2aa9bda7.js",
    "revision": "3db52da73aa9ad10dbe0a70bee1dfd85"
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
    "revision": "a87e39ce07083d50e5bbc54a660ae9b6"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "a31118c5e8aee408d9f45a9ee75a53eb"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "0ef4845fe3dce772c46d0b7ab51da0ac"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "2b35da0cc9f333a036a0c0fef953d2bb"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "8bf6a29935824b16160f4e12621a1cf2"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "a6afd1093fdb6068afb135c18a28ea0a"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "966c01a6825c778990bd007f8c36d468"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "abe13f9c6125fba5faa5048c57e33ba5"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "f718cb9170f476bfdc7d2343dc845b9e"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "1f240bfbc3708063f77a3320ac5fd706"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "ff9a29a66ab4c1940de032d3af422b55"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "08859b9ac2f57fe09b9b07ba3962409b"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "fb60a779decece941a2d6d1491b8fb60"
  },
  {
    "url": "blogs/学习/JS/cookie.html",
    "revision": "c89a9583dc7ca80cefd01f32a54cc7a6"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "6066ce1a2897bd7d03a55afcf7ebda6b"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "d29064b5bbed9a9ed77e263224ebf4f9"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "189db4ea226ff8c9b551bf4496613530"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "ccb27d280e721b2379731f824828a086"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "14086a8f96b0262e92275eed79e48a4c"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "613056910ebcbb071b7ae84fbac7e9c8"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "317871c817b6b7aca389402d9b2d9ccf"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "86d29ace8eeb8d9550719dddd8b0299c"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "6305b78eacdc168e48dda076ce9b60cd"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "ec2d74591e5c94d976629d6970c6163a"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "ff18eff804265c0d7347e0deb76d54af"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "7ef8135e09d98376384180e6fb6df402"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "ed1d4dc0dc10e5401b5850e34e0c915d"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "84ecf6fabe187fc2b90cc1438224b6df"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "d29664162bd9503665495864a4b6e667"
  },
  {
    "url": "categories/index.html",
    "revision": "8d1e2f39cbcf6b794748507775fbe9a6"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "487963821f262f0220a4aa650dccdc03"
  },
  {
    "url": "categories/test/index.html",
    "revision": "8e66fc12fe5d92c7001e2bb24d46072b"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "0313d35db6d4d6155b999a2fcca4a6aa"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "1eef4a1ac198fc7ecb0bcdebf03570b6"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "0460b5ab8877edaec574e69e9db1e5c9"
  },
  {
    "url": "tag/数据储存/index.html",
    "revision": "61c5d57a72781a00e065da248ad87753"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "569b913dd6e3893cf96e7b1b07a828fd"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "13ddf92394d386a1f68bebcca50dbaaa"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "9dba03cc5e14e06562c47f04d0eed093"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "ecabf84967076ef150f9f9eb9e2bf124"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "a06c1cb48fc8071fc51cbcc2204707b9"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "5a747fa028caa09ec2e8e0688a2780fe"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "66493f09b84540e600d389dd490c7a51"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "7d6cf11441a5cb2ca007c558bef4bad8"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "21dbda7f8fed42c4c329a296bff95407"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "02176769cbc6b54b75bf826e595ae58c"
  },
  {
    "url": "tag/index.html",
    "revision": "9d2ec86bd5a843592f9a3c3eb4d728e0"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "e8a0ae24e7b589cf98b15c5620d042c9"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "0938a8473acf3383aaddf90683603dff"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "c525754a1c09b08e5a791580b17904e7"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "5fcfb0bb51baf11ce89babe9df388eb0"
  },
  {
    "url": "tag/node/index.html",
    "revision": "2b329edf92c164479af81eabfe14d3e5"
  },
  {
    "url": "tag/py/index.html",
    "revision": "ebdfbe7d1101b5cbb1f765cc4a49ff4f"
  },
  {
    "url": "tag/test/index.html",
    "revision": "bd826bd25d3aa06a414676bf5755fcd6"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "fcf9168a25b6da4d405bba5c42ab7106"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "855f7e7433084e682aedb0ee1c5dc9aa"
  },
  {
    "url": "timeline/index.html",
    "revision": "79fdf082f3276396c6538c929f46a837"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "be9cf24fff48f511a74a8f59897bad64"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "c37f89f80fad1761f5211d4b1e7dddda"
  },
  {
    "url": "work/About/index.html",
    "revision": "5f2df828731951ff2dc6e49afda022ca"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "4b036903d229130fe30ea2d1e52f28cc"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "14c43ed98be5ba703a42503926f30a6a"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "c686ad6fac4250e05beb8dd06e7d562b"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "c64f6651239daf1c66ab62868d889e5e"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "8b64c30943379e0d66d228a23fe1dfcf"
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
