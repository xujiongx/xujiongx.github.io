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
    "revision": "9f3c7534891a2cf920556084e951c6c8"
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
    "url": "assets/js/11.472a9be3.js",
    "revision": "51f19668613d8b323516f29e8ad06f7c"
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
    "url": "assets/js/14.04afdb57.js",
    "revision": "20d189a1ddcd625f985fe7c6b7be5ed2"
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
    "url": "assets/js/21.39e2e94d.js",
    "revision": "468b8ebcba2f5794d2a96f655969f48a"
  },
  {
    "url": "assets/js/22.5464a90b.js",
    "revision": "584c13b1d53ca959ee91588bd6a60d11"
  },
  {
    "url": "assets/js/23.adb7c4a2.js",
    "revision": "c0725a3c66b7c2e396bf9898af671d74"
  },
  {
    "url": "assets/js/24.f34aca85.js",
    "revision": "eb370853cc901b411f0499ec96284b80"
  },
  {
    "url": "assets/js/25.74295aa8.js",
    "revision": "5bc0f0359a619868d4ab2c96f9198ef5"
  },
  {
    "url": "assets/js/26.36e4b4b4.js",
    "revision": "040adb523489229950c702cbf461ee0f"
  },
  {
    "url": "assets/js/27.3fee69f3.js",
    "revision": "90be104265284f4558db659da81147f7"
  },
  {
    "url": "assets/js/28.58582d26.js",
    "revision": "39c7bc8111b62531571134087bdad3c9"
  },
  {
    "url": "assets/js/29.cc25ebc3.js",
    "revision": "fb317150d3754a2115622d9d29c00130"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.ef3ec729.js",
    "revision": "ce0fc39a6307518e7980f6e2c844eb26"
  },
  {
    "url": "assets/js/31.e7f06490.js",
    "revision": "e793b6f45eca49d374b7bba06d3d597c"
  },
  {
    "url": "assets/js/32.ddbe4ccd.js",
    "revision": "f867df440972c9f34e55355782401900"
  },
  {
    "url": "assets/js/33.253129ab.js",
    "revision": "b1da7c311bffbfa69128f19b06ac35a4"
  },
  {
    "url": "assets/js/34.c4ad8ea3.js",
    "revision": "deea7b37a19b9a29ada0479968827128"
  },
  {
    "url": "assets/js/35.c1f02eb0.js",
    "revision": "0bd25e652042e6e256f5bf0346228ba2"
  },
  {
    "url": "assets/js/36.d84b869c.js",
    "revision": "33be61c7e7a6c5dfa9e4db93b57fca0f"
  },
  {
    "url": "assets/js/37.f3bfff50.js",
    "revision": "9db45e26d95646c6572eeec67c8fe769"
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
    "url": "assets/js/app.968ada1e.js",
    "revision": "5564ae0b37182e34c43ff82a900998ea"
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
    "revision": "d415b9ab13e7a847138d4c93bdf7a612"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "c37ea3f9adc8131997c5a999c173a927"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "38da548ae3249b5e46540d2ae86449dd"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "6adcc838bfd1f91bf46837bed9e51926"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "e37fb4a07fcc2f58ee86682f27593835"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "398339519f5f1a4ae42bcc43660e6622"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "ee9832eb92dffb777696d8c668e2befe"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "e1488be528322d9317168685c643ba3a"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "6c0141c63bf0824dc04653c8a3b54439"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "2aa4977eceecad8d6a3868f49e4362a4"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "3f07683861f7d42f8ea638742885a0fa"
  },
  {
    "url": "blogs/学习/python/20201009.html",
    "revision": "68115b773a7a3e09137126c7685fe6e2"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "38611f1af92957e9d0137f839f989358"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "ca45313f0884871edceb6355c8ac8add"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "bfe7a4c8dabd8f6c227955dcadae283e"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "d5a7b139e5834d0e96ca6b8ad663f0bc"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "57f42be069ed7bc74c779dc3fd771be5"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "bd0efa3897b6ab4cbae5ef8588084dfe"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "590d797a5ec9b585a99f96a2fcd61a78"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "ebe721a314f7dc7a27b3cf265274ae81"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "ce6edc94f046eeb1a7a4cc93650d8281"
  },
  {
    "url": "categories/index.html",
    "revision": "150cd5518ec2155bc0a4224c3105ee51"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "c32fa32886c4f170e893e55fe9f4bd5c"
  },
  {
    "url": "categories/test/index.html",
    "revision": "3339cb1b5ba38b0800174cb563fb5f9c"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "bd80ea34938ab4b099fc529608eb22bb"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "8384f013052015afdd1eaf58f75f18da"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "865c7a96aef5760d195737def6d065c7"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "d22a7a6949ac172a7e6d4ff62a81c986"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "cf3c845bee26fe9e7631086c0f0830ff"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "4acabe7cd2be06a45dd85807e7b876d8"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "d94de391fa808b11b633bbc98b00c247"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "9e7c6023da53cb49a94a862030068108"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "d65931116ac36b03d62de0e8b879f689"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "60101f0335bc853c9ca52f52d84d65e6"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "f2566c9f84225ae2ab018a4c62e8b7f0"
  },
  {
    "url": "tag/index.html",
    "revision": "4e03775dee64a333e32964f4f5413616"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "375883e271d8a7fcf18a75b90ea18a41"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "46300e1e8d3a6f50dac9d5dfcf930c7b"
  },
  {
    "url": "tag/py/index.html",
    "revision": "5283e53560877b5dd2861427276e714b"
  },
  {
    "url": "tag/test/index.html",
    "revision": "027ee6268c67791367186b8dcfe9fa7c"
  },
  {
    "url": "timeline/index.html",
    "revision": "a7b9e291107b255b881bd3b9ae18a1c9"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "e005ebd1e736715218d1da26327f8e70"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "c3f47d79a833443936f666424ad9b1c6"
  },
  {
    "url": "work/About/index.html",
    "revision": "b04441c97b1319aee000527bf6970036"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "774297cc4db41a7dea905ec6f834693e"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "accff047d18a9b8d3f20aeaca6837943"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "a70fc606ccc5144c5d3d2add558675fd"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "371a859b508d5551bb40f494a038d736"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "e0895edb14f9cb30ea55cc6eea61835b"
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
