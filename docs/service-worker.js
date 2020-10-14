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
    "revision": "e743b34b3f747f89177ce61c48da89e9"
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
    "url": "assets/js/11.8b471897.js",
    "revision": "2b711a1a1d444ec515e05cc27df56f7d"
  },
  {
    "url": "assets/js/12.a9b9bbf6.js",
    "revision": "931034c8f9b047413541e2694fe151be"
  },
  {
    "url": "assets/js/13.d3209df9.js",
    "revision": "bc623619ff33fce8936a1576f81ae2e9"
  },
  {
    "url": "assets/js/14.fc65196f.js",
    "revision": "0b5ab39b2b4c08771ff7c46a2ef1ce68"
  },
  {
    "url": "assets/js/15.d1e4334e.js",
    "revision": "34f16cd1afe1dd922c616c0d0c9cf725"
  },
  {
    "url": "assets/js/16.9c0acc5e.js",
    "revision": "3fd42e6e17c0f99bf007bf59c740ddd2"
  },
  {
    "url": "assets/js/17.c2356dc8.js",
    "revision": "20a00bbc20b64b745d31687f9012f830"
  },
  {
    "url": "assets/js/18.be470a1e.js",
    "revision": "2aa528aa54e3ed3040ffac7b07c29075"
  },
  {
    "url": "assets/js/19.6c83ca50.js",
    "revision": "e9c81a789668b10c12344df4b193ef96"
  },
  {
    "url": "assets/js/20.a6ed2260.js",
    "revision": "9a1353d532ae8357374e691d7b724658"
  },
  {
    "url": "assets/js/21.7d7fe4ec.js",
    "revision": "174eaa9cb97786b6fd3a73cdd66641be"
  },
  {
    "url": "assets/js/22.d3d9ac53.js",
    "revision": "f19da4c22fd8f9b0034e3ea2ed1f19c7"
  },
  {
    "url": "assets/js/23.ba338470.js",
    "revision": "87305d4fc2c4522956e327823f2c8ca4"
  },
  {
    "url": "assets/js/24.8f0b4dfe.js",
    "revision": "e882ce035f2818cb4f745729234ec2f5"
  },
  {
    "url": "assets/js/25.0b2a766e.js",
    "revision": "dc2cb778cf17a34f275bfdbb519a49cd"
  },
  {
    "url": "assets/js/26.3e82fa9d.js",
    "revision": "42f87bd0a96cc19c821dd909392b269e"
  },
  {
    "url": "assets/js/27.00dbb744.js",
    "revision": "d76e91aab088ad8e8d5eb644f4a858e9"
  },
  {
    "url": "assets/js/28.c7c18d77.js",
    "revision": "5b9385af5b6920f48f13e20a0e5b8b85"
  },
  {
    "url": "assets/js/29.d6c0677e.js",
    "revision": "6fb1eb199eb8d96ece29753467191ff1"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.18d78a89.js",
    "revision": "d83e6ee9e77130b07d1245ca22de5253"
  },
  {
    "url": "assets/js/31.51a888e3.js",
    "revision": "4c37a0f5742ca89b65ed3ecea48dd487"
  },
  {
    "url": "assets/js/32.cacfabe0.js",
    "revision": "8c23e0d5d59117399da5e46569b43b9d"
  },
  {
    "url": "assets/js/33.dca7e272.js",
    "revision": "b0ab27353b6580f7b8c7e9e49326e4c8"
  },
  {
    "url": "assets/js/34.47ba19f3.js",
    "revision": "059dd894384b81269724f4bc74e7ecef"
  },
  {
    "url": "assets/js/35.385090e2.js",
    "revision": "a205998fce5caa88abf60f982d8122b1"
  },
  {
    "url": "assets/js/36.47447686.js",
    "revision": "5d2a3ec1724ceb1e61c6751500a8b3cc"
  },
  {
    "url": "assets/js/37.ca79c663.js",
    "revision": "e5c1d05d61cbd391c1e6774b4a4cd0eb"
  },
  {
    "url": "assets/js/38.fca7eb23.js",
    "revision": "ba79c69ea2024af458d37d83644ca8d2"
  },
  {
    "url": "assets/js/39.e69d3249.js",
    "revision": "788113afc2029336019e002662cf28ca"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.355649a5.js",
    "revision": "41e043bef7fda634751e41a7317d55b3"
  },
  {
    "url": "assets/js/41.547e6b20.js",
    "revision": "c247cc3bbc93358715335dedbf698f31"
  },
  {
    "url": "assets/js/42.da31a8a0.js",
    "revision": "e11466693ef3b4cfc735ed7e732f9385"
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
    "url": "assets/js/app.638eb114.js",
    "revision": "9543d744a42a9f306bd5ebd7282535c3"
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
    "revision": "0f544864ddf2a9d12f1c263086be7e5d"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "1419eba36fb1fe0bd71579300498431c"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "4ef3675b958f27d7ee2de91e59dce531"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "8e2dc4fc2dc7eecc1473f58ab3854d39"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "7096b84e2ee099e0682607a87a81ce55"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "3c42551164735e9324a9c057a1409ebf"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "6ce63ec55855fe13e6e1b435c94e05d5"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "29e17f59e1767b2b274a8cf07aa40f1d"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "36e72a1b0b4376605390cd9667568db7"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "c21228443bcffec737a1e59adf1806b4"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "5c4cbe57be7e3f710d58632c62cd97fa"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "1dbaae142ff53ba7b9b111de29ad1a3e"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "71591e2194f900cd22cc082693b9ce98"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "e983202fe7ef56e14511bff9f740cbb2"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "e0f3bea6bd47568de2c927ebfea618cc"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "3f68d2742e2a0c6ab657c60c8aee6d74"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "086b96b0fae6378189d4188acf7661dd"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "c1a9a38b9cd8c54845966d448c44e3fb"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "1a01077ba851e97587bc1aafe3484ff8"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "a8608ce98033a55f3a0ef466b9925c0f"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "bf624b5e6076deac0722f7ff029da34a"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "4e84a5643b63fcf3ea64eeb4d3ddf665"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "7c036a80b78a0060348807114f2540f0"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "69b9373d7160d1dbcdf139e96bf04536"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "da82d96f17a1b0349428b1994a0e5030"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "0ccdef8c7e25d51aeaa02565379b1c5b"
  },
  {
    "url": "categories/index.html",
    "revision": "6d2bfdfe3618c13c132a7fba246cf0e7"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "938d9be81df561fc4a5ed9c1b13803fa"
  },
  {
    "url": "categories/test/index.html",
    "revision": "82c1e0ff6e5146839d1b3710ba1b5fb0"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "1389ceb7edf32b12cef15c0d0c2a62ee"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "b56ce8e5c34852ee3d05952982de0587"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "12c746087a39c3ddd88065e820281f20"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "14bad9c99aa5594e2cfc85e63979a49d"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "fff72c9cae58d225654cac1f066d1390"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "c96f116e39a0b34a5d61074db7d8c36d"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "ede98ca98a69d7d65b13de62c0f6819d"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "96d610dd4d64c605cdc7dccb189739eb"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "94b582e8ae288eda489c01acf3420e0e"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "615dae0e021aaf2a8612ad8096c0abe1"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "bd44f6f8fab98bf628224daf77aeb8de"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "f54188fd523a082a503dcee341fb225f"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "0debaaab7bf3529e70af108e2cbfb879"
  },
  {
    "url": "tag/index.html",
    "revision": "f8bc00dc06b1bd38c4f2d66e4ed13541"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "78fd2f4711df3fab73c818ab82b8dc3c"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "06b7ff6226e3b25a3287cfc378798132"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "e2783ee67a694625dfc1a35d857c2dbe"
  },
  {
    "url": "tag/py/index.html",
    "revision": "69f6ddeabbb5d4f14f2effd8264438d4"
  },
  {
    "url": "tag/test/index.html",
    "revision": "eb8d326483ec86012d91067e6ac47a92"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "19e96df9748ff1acb20c9a3c66949a69"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "175c467ecc71e7b1bd1d80b45cecf916"
  },
  {
    "url": "timeline/index.html",
    "revision": "b10bd192137b150e97f9e463c646bf1b"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "3260d1b7debc105278518eaf21c1a167"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "40cd5e434a42403ef2e0c8633345ce50"
  },
  {
    "url": "work/About/index.html",
    "revision": "a5476e922ad1703360f9859558629ca5"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "be24d461b584f1c6b2e74716eb87774d"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "2a83107ac6eb6c3134d99f06f900986e"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "ba1a713ebdf5b8e9575f3c31fabcca69"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "6894e6652893ca0003b57502b1e6d338"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "d5cc27fdf000d1394d733bd97122d046"
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
