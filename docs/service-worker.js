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
    "revision": "2399a4fe555145cde58d55336e5c694a"
  },
  {
    "url": "assets/css/0.styles.19cebffd.css",
    "revision": "0a4d4586692abcf6bd7303ccb7729dfc"
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
    "url": "assets/js/11.56d88150.js",
    "revision": "b0aa3f4da0ebd5158addf6e72d5485b8"
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
    "url": "assets/js/23.72bcffea.js",
    "revision": "a5ebcef441c0d75224dd52f8342776fd"
  },
  {
    "url": "assets/js/24.bb7e2234.js",
    "revision": "aa70a7e70c5831eada74ac0ad7bfad49"
  },
  {
    "url": "assets/js/25.1fae84aa.js",
    "revision": "50b1e65eac72c79626009afab5af4898"
  },
  {
    "url": "assets/js/26.3205d957.js",
    "revision": "a12dd9707b75000f86bf3ab422011c34"
  },
  {
    "url": "assets/js/27.9ecca68d.js",
    "revision": "011b3a78d7d37bb5aa635b9d374a40bf"
  },
  {
    "url": "assets/js/28.0b46888b.js",
    "revision": "bc0595c39b29d12428bfc6e15499fd74"
  },
  {
    "url": "assets/js/29.321a6fe9.js",
    "revision": "fab909816ea7909d2ef36c75b2fd8edf"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.e52cffe4.js",
    "revision": "40bc68bb941584f919200d7b5313843c"
  },
  {
    "url": "assets/js/31.986021df.js",
    "revision": "63606df695e98ee8741052e5ae3aaef2"
  },
  {
    "url": "assets/js/32.a8c0db9a.js",
    "revision": "d86f0871dfaa81ce6f4ea0ccf5dbacaa"
  },
  {
    "url": "assets/js/33.bce20ba2.js",
    "revision": "c3235b6bfd1275faa339d11fff4e75a2"
  },
  {
    "url": "assets/js/34.c7e1c871.js",
    "revision": "6d3cdb3164529f5d16f4a2dd141858eb"
  },
  {
    "url": "assets/js/35.41c4bb79.js",
    "revision": "b09bf84d5c9bb5910ee138ec5f5537a9"
  },
  {
    "url": "assets/js/36.84f1b415.js",
    "revision": "b4337efc4f758ce5c69d8894e12937bc"
  },
  {
    "url": "assets/js/37.edda63cc.js",
    "revision": "6b4f8b2becfd235113717c97732634b1"
  },
  {
    "url": "assets/js/38.aa1e2ef6.js",
    "revision": "b7fed4a4befc123f0523c399202c8a60"
  },
  {
    "url": "assets/js/39.9ad23158.js",
    "revision": "788113afc2029336019e002662cf28ca"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.0f31c821.js",
    "revision": "41e043bef7fda634751e41a7317d55b3"
  },
  {
    "url": "assets/js/41.d217546f.js",
    "revision": "2fcc7dc0a2004533b63e5143801f2565"
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
    "url": "assets/js/8.522fbfdb.js",
    "revision": "e2e7ed57333b09782b9ed24d10429590"
  },
  {
    "url": "assets/js/9.8d5c56c5.js",
    "revision": "09127a32417f1e3fdd0e310ffc0105b2"
  },
  {
    "url": "assets/js/app.962fd0a5.js",
    "revision": "81025ab75d384d9801ecf014b0b391aa"
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
    "revision": "ca8935dc20706d12afbf1d39bac61f56"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "a8fbf05d8b3232bffb5b8ef0b9fbab13"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "a618910491e06f3cacd945a7938ac672"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "d972991308205c20500c2ae31a37f7de"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "6554495508101a164081baa3285cf842"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "f96aa3307318f553a7f726c08fc4f92c"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "be62e1900c3b6f6883878c83d2c76af8"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "32fcea5653ba652c2bc090d7845b2357"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "ac225ca95241f459b44bfeb475932517"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "1637ac9e22715246b29ca441dca5d3fd"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "07cd7595519b3a382dfb72e02d6c45b5"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "9b22168de486f77ad83addfd1cf97837"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "fd257d10ef97dd0f41cca005f858222c"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "71b799b3b2c6e8c01513c2a1a48e77bf"
  },
  {
    "url": "blogs/学习/python/20201009.html",
    "revision": "6db572bc3b322a7e2a4232097b7f7016"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "c7ca4796ff4e8623002e2ab527887a6c"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "64621b5fbe79420db0732b9fd70496f2"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "993ae7432143f6704fca6e0f7bf9dac4"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "41540e7117a0809f7f360d1c3281c91c"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "5fba0f21aa63e42f684eb3fb64942afe"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "b0cf8fbfb0a353d3e6416ed43e918653"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "0500e1a2c486e0816c7e71337b2e6ec3"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "03b091c6fb7cc751c41cc4487e0210a6"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "b09f46abebbc3867acfe8b6ed0f92224"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "66e6a6f3b6b956aaa646ab359a70902d"
  },
  {
    "url": "categories/index.html",
    "revision": "e3d4b87507c65a72cc7e858c1a78530c"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "6307f100bc93cae9cd42e39999b071d3"
  },
  {
    "url": "categories/test/index.html",
    "revision": "c49deca05ffa81ffd741910fce93f4cf"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "8d428f4a9bff2b414088b98d70bbd628"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "880f27ad09001fe5decbf8b97439ec89"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "257c54a4b6d0d360cc5c58e8d749092c"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "d161f82333f00634146afd20ff055e84"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "ca295352aa4188225c266e6ca03dfd8a"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "998655c2196bb3d30a085c8c6a3fbcac"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "5d99aa45123d64aec550e7a8ce1ac1f3"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "d1d7f61e06e792a4db6ec80fac42b958"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "a58d7018f4619b167b6f89487c1da4aa"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "f4b2ccec3c30ef5576c87cf56df91d36"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "06aab42c3775a0130e9604b449b2368d"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "210a886bfc82eab3ba4ad0d59b032e03"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "1d52a66525c8ef089aa65b79d2772f49"
  },
  {
    "url": "tag/index.html",
    "revision": "18d92b38e453427cd88d0cd98071193d"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "c0bda005bc32423bb66156b85e829bc8"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "61a8292b7af27fee0ca3e7cf028deb4d"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "dd0fae6b3441cff23af9dbd2f46d2fe6"
  },
  {
    "url": "tag/py/index.html",
    "revision": "fff97e40161ea56600d4d15ae7578f50"
  },
  {
    "url": "tag/test/index.html",
    "revision": "0e08aa42c4df3f4c93a556b1bec0ac65"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a58e5ef8ae2306744e4b88ef05ffa5a0"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "902b4f62f66e5e95f1240c02c3358cee"
  },
  {
    "url": "timeline/index.html",
    "revision": "70fc1e094da800e64e5ad1ccd28e699b"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "5c8aac28dd6393dce6b5afded9183f4f"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "6ca1b0edd8982211d36c41969278be03"
  },
  {
    "url": "work/About/index.html",
    "revision": "08626a337a10d62968e0d9ec1394bc01"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "a824cf6b7159360f2ff640f676eaf2f3"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "9e8616137d9646f35a17784b3500e87d"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "d40e65c0dccb361d14c94c082837ad65"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "667f76529099123e07df8bb66ee21b96"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "4d33636a0a6153c014f74526492a7264"
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
