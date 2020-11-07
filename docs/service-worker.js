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
    "revision": "ff823472d6b013c4afdd670f0454c40c"
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
    "url": "assets/js/11.16e94220.js",
    "revision": "6cd86ea6ab181f64a99baea763173c0a"
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
    "url": "assets/js/32.b210823f.js",
    "revision": "a146599f0997ca63d50066d04f831bbb"
  },
  {
    "url": "assets/js/33.63bfc28d.js",
    "revision": "f949c5f23b6638169246481eff59e912"
  },
  {
    "url": "assets/js/34.16c50571.js",
    "revision": "19c496eaa898d04979d59f4415886465"
  },
  {
    "url": "assets/js/35.53441f63.js",
    "revision": "b8bd59decb125e99cccf949d653614b9"
  },
  {
    "url": "assets/js/36.4f29ce0a.js",
    "revision": "d718557758e01a3bc1f4187131bc89d4"
  },
  {
    "url": "assets/js/37.5b7cc1db.js",
    "revision": "6f76f56f1b009895b3c81a6bce990267"
  },
  {
    "url": "assets/js/38.a54c065a.js",
    "revision": "ada956c7c6b0dffae7233a94d6827e62"
  },
  {
    "url": "assets/js/39.bf2129a7.js",
    "revision": "569f58d8eddb4505619c3a287f3869d6"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.ac95e373.js",
    "revision": "094f8a15b8ba0f446ed931eb47ef3ae9"
  },
  {
    "url": "assets/js/41.a84efab8.js",
    "revision": "96801e9974861be860f36a480104f02b"
  },
  {
    "url": "assets/js/42.bc31bfd3.js",
    "revision": "d3ab67acd4c3d971657a0f9bff6c4d5c"
  },
  {
    "url": "assets/js/43.ad622a31.js",
    "revision": "7b47a7a48260ee66749be6ae0cb900ec"
  },
  {
    "url": "assets/js/44.681a378f.js",
    "revision": "8dc264615c64d54871e1d7b5210d833e"
  },
  {
    "url": "assets/js/45.5bbd9015.js",
    "revision": "0d179e658618b53a1a6d45680dee121d"
  },
  {
    "url": "assets/js/46.a18998ec.js",
    "revision": "499d2a74671f83b536153aa6c340c78a"
  },
  {
    "url": "assets/js/47.dd8573c4.js",
    "revision": "f0a820d746d92800c0839fe063486da9"
  },
  {
    "url": "assets/js/48.0f845db3.js",
    "revision": "1a907f7137e92d87d907e735f0e34924"
  },
  {
    "url": "assets/js/49.66446fcf.js",
    "revision": "7701c8c60c341011566bab5a83ff92dd"
  },
  {
    "url": "assets/js/5.62b52fca.js",
    "revision": "3d48dda35e6fdf8a8e7c65369f2dd977"
  },
  {
    "url": "assets/js/50.24df6a71.js",
    "revision": "edb0219aec6232104229c61a853456eb"
  },
  {
    "url": "assets/js/51.2683a02d.js",
    "revision": "625ee880ce983b6121419efbda036299"
  },
  {
    "url": "assets/js/52.d4e48141.js",
    "revision": "499a931d88edc71bf0930f53c1a9f1bd"
  },
  {
    "url": "assets/js/53.5139dcdf.js",
    "revision": "9d98551aec48511069843c85740185b1"
  },
  {
    "url": "assets/js/54.4cb6cc72.js",
    "revision": "d588c8985504914e9c898955c0399b17"
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
    "url": "assets/js/app.dfa27cdf.js",
    "revision": "968afe11ffaf158bee7ad8c8a640bb2b"
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
    "revision": "92fb6ef5e7c48b73870c8e480d8bb47b"
  },
  {
    "url": "blogs/面试/题目/20201103.html",
    "revision": "7f685caff56a8a3332ea6509fbcb514e"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "0ed089c88e5835bded1f645de631cee4"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "249b7aee6f4f00f629350b72308668d5"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "0520a07703ca58fe4529fd964d4139eb"
  },
  {
    "url": "blogs/其他/目标规划.html",
    "revision": "962297725c04191ee5e1909296803593"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "7c666abe7fa750aa3b95ac5d6da28a0b"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "417983f3a948fb2c316edfea61fb5ce5"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "7532adcff1869271b8a642a4073d2a9a"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "859428b25422bce51db4d693a279ec49"
  },
  {
    "url": "blogs/学习/数据结构/01.列表.html",
    "revision": "a4c152b086cd3a587f7200f4ac04fa95"
  },
  {
    "url": "blogs/学习/数据结构/02.栈.html",
    "revision": "52ea2674704b83451e23d39bcbad86f4"
  },
  {
    "url": "blogs/学习/数据结构/03.队列.html",
    "revision": "b4c47cb469fdd17fda012693951415c5"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "f1666b2ee3af9273dc5563fab612313d"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "927c6c709ff933257fb60cc0a6340e58"
  },
  {
    "url": "blogs/学习/HTML/浏览器渲染.html",
    "revision": "5c02f0050f50cd8c2772f73ba2b89d78"
  },
  {
    "url": "blogs/学习/HTML/cookie.html",
    "revision": "fc8d2b6150d286023aa018aaf141c10a"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "ba023782a0c56ca3d695bb9a10e64d06"
  },
  {
    "url": "blogs/学习/HTML/localstorage.html",
    "revision": "217b0e044ea3bcf7b2f22341631aad07"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "64dd3b0793b4a4ecf4d34afa9a62448d"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "549cdf27209b85f8f10d05b8097d411e"
  },
  {
    "url": "blogs/学习/JS/数组扁平化.html",
    "revision": "08d54b363b1007c01921d357dbf075be"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "ff819b06e564d28809ff4974a1a08d9a"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "d1f5a9b1e67ff0ed44524a0116b464d8"
  },
  {
    "url": "blogs/学习/JS/Typescript.html",
    "revision": "3fc1b87449a867bf09bbd120ffbf5479"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "a49b5de302e13c2104a670d41a950ced"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "2f7226bda4c21f9185497ebe97f4a763"
  },
  {
    "url": "blogs/学习/Vue/vue3入门.html",
    "revision": "8a54193b00cab6ff7d2cb498d9454160"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "19f33c6bbf4cf455cdc40f45783f5239"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "47d0084af12c5eec50f96121fa40a574"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "26f970dd0148a478a8e9ab3abf7285d7"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "98a5401ae7b26270c2a95716f99ba735"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "ea118e0d294f820d6b5a31ce6f4a0761"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "a68116ea690855e24fb109095409feee"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "90ada979b4f9a2bde97e92743eeb8b5c"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "1cb3c8d2f4f42ae0b34f19ef2685c4b8"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "54a1f2453930841dea41ae8c1cc681c3"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "832612098f958af165d5d3edaa33cde7"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "d3df4da078d1977e08ec41b2721254b5"
  },
  {
    "url": "categories/index.html",
    "revision": "01bfc9ede503164cc2fc6276114653ef"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "8fbf4e6eae6537dcb9de8d458adf96c2"
  },
  {
    "url": "categories/test/index.html",
    "revision": "6cff00bdb8fba764624a1ac5830fb0f8"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "378ac9d85f4db568b04aaa9b94710c5e"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "3faa3e4f3c9afe8bb56e48c79cc02225"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "760648b5ac82105c09e5ce171b2295e5"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "4f23925439d71757580b428a7e89bf53"
  },
  {
    "url": "tag/目标/index.html",
    "revision": "4ffebdcd8f7eec5527ffb1f3dd3aa027"
  },
  {
    "url": "tag/数据储存/index.html",
    "revision": "8df9ff8227c036ebb7c1dd58991677de"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "ee5a1859952c292e5ce26965e2e39b35"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "d72f1ed0dda5ca15da9e9b6ba742c46e"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "ea959f910b678494a5bfac7dd11d4bad"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "56490f4e7358b10d643ffea12cf84d9e"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "5f2dca2fc7257ed6783cbb82abc6003e"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "6bcca8e891639702f66f2896a905ca4b"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "8510f75c879da8380116b36f0b50fd99"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "99f148e17744dfbd4a90e04652c6acec"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "c0bbd50dafe4fb25a62e2a2da4903cdb"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "f3aac4c7145e9f782acec59bafccec75"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "c8157b46223f5a22d54f2f96e1ea9c7a"
  },
  {
    "url": "tag/index.html",
    "revision": "9afade25f36a20152e26c752766970be"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "e426deb65ff53115e27378bd7b38afe1"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "b25d939c34ff31fdd020990b42d5d0be"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "7f11d2044cf01710dd47c005bdd638d1"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "7fd2034b9dba27d69e1571d55d7c12bb"
  },
  {
    "url": "tag/node/index.html",
    "revision": "812dcce0980022642df5ed62b5e5e207"
  },
  {
    "url": "tag/py/index.html",
    "revision": "b6a6a8cc306bb21247b81d87ca7d24a2"
  },
  {
    "url": "tag/test/index.html",
    "revision": "2a16fa14bad323f37c7ba4e8444dd6a8"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "3d1ba2b5dad4f39076de60bf9234548b"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "4ec10ecbc16eda760aa0e85ba994df24"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "9b0bdaa8b2035d502f2c4731ad4dff5f"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "4a25b6b67abac3dd4dfdb531a6d339b8"
  },
  {
    "url": "timeline/index.html",
    "revision": "0de9c23645e7de03142517c165dee2d0"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "6a5d57e92051ee9ae6e3926a70f6dca8"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "a2a185aaf8d537f2544913fc82efb78d"
  },
  {
    "url": "work/About/index.html",
    "revision": "a7db9d95ff2fdb48ef734d72dcd25748"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "09c42250bbe387278aac84e51d152289"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "6bb2f5af799c5aa2788d91ea1e933a63"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "3ae9f179f7cabcf777903827a18612e6"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "cd830343de3a8f5f00ae861cd45dad8e"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "5bd840e8909a84513e23020bb3853f33"
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
