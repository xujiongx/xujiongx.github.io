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
    "revision": "a4650fb716c74b99d3e1a9f6a04e1025"
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
    "url": "assets/js/11.e65019d5.js",
    "revision": "832b8bfc64793382a36cddfee644a192"
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
    "url": "assets/js/19.e67b90d3.js",
    "revision": "a1a22a527140af83fa80622021d228f4"
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
    "url": "assets/js/36.5004f35e.js",
    "revision": "d9a0e318514b9669a8962086f0b4871e"
  },
  {
    "url": "assets/js/37.d4a04f4d.js",
    "revision": "493df3d6ae8fd6ed2a662d1d05aa26d9"
  },
  {
    "url": "assets/js/38.3043f4de.js",
    "revision": "5b046c4627d56febc0a2b45793f45014"
  },
  {
    "url": "assets/js/39.753707fd.js",
    "revision": "ee1c81d272aff1906d795f114352310d"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.8c5cb79a.js",
    "revision": "e4afe0ee802b5b31bb4b35260eed8ac1"
  },
  {
    "url": "assets/js/41.39ddfc2d.js",
    "revision": "527b5e9d4555ea0489415dc66ed46582"
  },
  {
    "url": "assets/js/42.33f1daa0.js",
    "revision": "91da81b181318b9f643cdb59224a56e3"
  },
  {
    "url": "assets/js/43.571b24bd.js",
    "revision": "be8c27adf3461a44c34fc78f21a1527a"
  },
  {
    "url": "assets/js/44.12e67a23.js",
    "revision": "2f9c88e9b74a56d7be6fc109e9dcf77d"
  },
  {
    "url": "assets/js/45.acf56ab2.js",
    "revision": "dc7b94957e95705d986e40c90367eea6"
  },
  {
    "url": "assets/js/46.35272c1e.js",
    "revision": "be11b2b46b0e1aedacb69fcff2ad299a"
  },
  {
    "url": "assets/js/47.aec69299.js",
    "revision": "7bc7e8d9aa0e4f450bfa0b5ca0835bc2"
  },
  {
    "url": "assets/js/48.41a34034.js",
    "revision": "97eda3dbc516a3503489f544012b0867"
  },
  {
    "url": "assets/js/49.6c03701f.js",
    "revision": "1ee864ea0ef1f6e355c2da6949f3dfb8"
  },
  {
    "url": "assets/js/5.62b52fca.js",
    "revision": "3d48dda35e6fdf8a8e7c65369f2dd977"
  },
  {
    "url": "assets/js/50.3fd346b1.js",
    "revision": "8cb79c346daaa084876fd33a3e3a3485"
  },
  {
    "url": "assets/js/51.4f9aa65b.js",
    "revision": "79fae346512034c5634a933a7ac29827"
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
    "url": "assets/js/app.e317cc52.js",
    "revision": "71fbb7dbc6235b8d6d31a5420e4dd5b8"
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
    "revision": "7a9c6fbbbe83010aeecf02ad3323f341"
  },
  {
    "url": "blogs/面试/题目/20201103.html",
    "revision": "3c11703386eef6357c1cda1cefb6a322"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "fc0e6dd2007df2ce97965034dd0e5693"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "75c3513dd3159de4166988a4be651128"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "61f4f2cbdb1b87f48bb07aebb812923f"
  },
  {
    "url": "blogs/其他/目标规划.html",
    "revision": "b47dd40c4261f9f7d0a02451cddcaaf8"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "308f86e68128e1ce29e927c3af000713"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "3c8f1b2592cebcde75191aa6c7cc58a2"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "d89969acce2cc2297e8fc92d12d2f94c"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "66acc6dbc1fc197357132d9ecf739f75"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "64a54827bb65c22c84f02509b5bb4339"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "5f4f0fb1497cd58af78e61c251368b66"
  },
  {
    "url": "blogs/学习/HTML/浏览器渲染.html",
    "revision": "29edd6740cdabbed28fb1893e3ea4cd4"
  },
  {
    "url": "blogs/学习/HTML/cookie.html",
    "revision": "6304537305d55ec9af46c92160f9af48"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "bd5abfea83447e36fd454f1df11a28d1"
  },
  {
    "url": "blogs/学习/HTML/localstorage.html",
    "revision": "a5aa59f00703c947bfe630f2f176259c"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "4876d62ac988e1c3b908ee9f79a681ea"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "a099a5174c4f3727cc047ed3cb89bde5"
  },
  {
    "url": "blogs/学习/JS/数组扁平化.html",
    "revision": "24f2f164b138becc4948f063bf007823"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "265e2394ddcdbae7a9d506687d05019b"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "7a071646ed9070ad2be39f102242bad5"
  },
  {
    "url": "blogs/学习/JS/Typescript.html",
    "revision": "28dc3ba3495b451d2748cb94881a1118"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "f23815ed24c4782cf87f471dc05b671e"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "403f1db75df074a5d4baf520722161f0"
  },
  {
    "url": "blogs/学习/Vue/vue3入门.html",
    "revision": "23c758a407b1818e4e78023a6ebc0b59"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "d534e56706d8eaf816eacb6c9b2efecf"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "0ea95189fb847585e36aa51141f67803"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "6b9b2e056ee119bfc977f07459ddc47c"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "3fd28fda14f957bf1aac3596ae79bcbc"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "9b64888bb224222cc3067fafa8310ad5"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "c79a0eef6c6466868ab162290aa5d73c"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "c05265a7228c392733460263d083133a"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "a6838758fb953ec6a23409d205709dcd"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "970d2adbca9cf9993eb46d03c4c3e16e"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "eff733154077bfcfafc27b7970f2fe17"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "84871038eda11b0fe8ac89b40514663e"
  },
  {
    "url": "categories/index.html",
    "revision": "a7c580bb03969fe1d7fef5934cee7a2b"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "6b271c23bdd9dcbef4967a0d0e74c8f1"
  },
  {
    "url": "categories/test/index.html",
    "revision": "91dfe036dfdfddd0860d80426d9e09be"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "cfcd81ada601f949cb463d835065dee8"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a74b4ec62b21461f54cd4cd1fb94796e"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "fb871e4de28be8f61e34c9cab01d1bbd"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "81b7d1d63b85fe7a15d7359614243b2e"
  },
  {
    "url": "tag/目标/index.html",
    "revision": "c433a122786c2aa382e2d5297e426fe2"
  },
  {
    "url": "tag/数据储存/index.html",
    "revision": "86e2670d9b20d3b3b97a9f98ac3bcd9f"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "3a7a0057162e809bc45ba6929eafb46d"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "769df49e5ba5a84ed822b448f6f80c5e"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "cc7c0950b03b33b915150bb303a01e67"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "4d6f384a187413b82069eea3aae93e46"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "08d8a308901cfc1d2dbd33c08ba4ad13"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "57f834fdb9f9dcbcc103cab26cf6211f"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "6469e5cd97a5fd0599b3c79f74d4645f"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "523bfd0eddf4c31c70af15a8988ec0cd"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "23d5774a44a819c33302639e28e1535c"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "147c32eb4f045b9ff95d7e36c1d21c77"
  },
  {
    "url": "tag/index.html",
    "revision": "462bab0369d499a7ae9cf6612e80d636"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "1275d5d32a69926931b444d211a929ee"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "d8f6ec208fb66d88c84118bcf9bfa0aa"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "86a74ba473f6124ae2c3a12dc6acde2f"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "e6403633339718a33de034c0415f52ea"
  },
  {
    "url": "tag/node/index.html",
    "revision": "b2ad856a7f67d35e286fef6a36bccd08"
  },
  {
    "url": "tag/py/index.html",
    "revision": "81aa65cc83cf052134e3e496889e9984"
  },
  {
    "url": "tag/test/index.html",
    "revision": "f34fdb923ac091cf37f02cc2af418b61"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "43eac5ef47153f4fe8c3ee35dc630c9a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "fb0cc8d368cfc45b0a98c24fbefa0937"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "0e88aa7250ff5de3dc2f1f8d966eeae2"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "31d890dd8cde5ef7f633cf79c23a9e30"
  },
  {
    "url": "timeline/index.html",
    "revision": "b6f48487dac47eb390aa3eff8fc5ff35"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "26ee943ebf14a78f06e1ef6607439a81"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "8464d67d780fae28d919a6fd3f0da640"
  },
  {
    "url": "work/About/index.html",
    "revision": "7dc9e2f652e541f1ed32a9abb310c6e3"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "0f0f5790deb404e51065ba36b8e68717"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "5e2d5ab5f03127c3f8a0fe2bf9995f89"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "39a01d812438d33eec8bc54b172ce486"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "c5bf8950819811399bc266d14136415e"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "cb596b79dc5453a40f716ee3e53bb69b"
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
