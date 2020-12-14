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
    "revision": "452cfa80f615051d30cf918d61416c1c"
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
    "url": "assets/js/11.25db8ddb.js",
    "revision": "7686dc60d44a639687c99d9ae30b1e57"
  },
  {
    "url": "assets/js/12.3596a538.js",
    "revision": "020ece9bedc0379f1e3f3f5e5c344bdd"
  },
  {
    "url": "assets/js/13.77a7f9f6.js",
    "revision": "c1c495f3d211485efe3b6a1a5ed9fa3c"
  },
  {
    "url": "assets/js/14.7e1082bf.js",
    "revision": "3f6ee5acddc2c66cadbd5e57eadce042"
  },
  {
    "url": "assets/js/15.2d30cae0.js",
    "revision": "3057c09bcf17ab61779fea76003b9e35"
  },
  {
    "url": "assets/js/16.27d32575.js",
    "revision": "d3db7426f80e1060af9101a1fe7da475"
  },
  {
    "url": "assets/js/17.4debade7.js",
    "revision": "689cd8d2d7c0b3d8f5fc067c771c451a"
  },
  {
    "url": "assets/js/18.b4e7b60f.js",
    "revision": "5f2b83cc4c0b9471fe5d4dcc826c5e35"
  },
  {
    "url": "assets/js/19.f8d214a1.js",
    "revision": "7d8ac586e56060a855ebb0be2d53604a"
  },
  {
    "url": "assets/js/20.7eb947f4.js",
    "revision": "c28f4adc3f9ce56245816547b5eedb0a"
  },
  {
    "url": "assets/js/21.7c76a1b7.js",
    "revision": "fb61f0d8b794b8eed8f0769239679bb8"
  },
  {
    "url": "assets/js/22.806d09bb.js",
    "revision": "81e8faf16addf495c57b7d630fe0b7e1"
  },
  {
    "url": "assets/js/23.28a853eb.js",
    "revision": "eeed5e37a90af9aa305037bd3676ea77"
  },
  {
    "url": "assets/js/24.12b94d9f.js",
    "revision": "9466b774be462e4958cc83225c6073b5"
  },
  {
    "url": "assets/js/25.d8fad5e7.js",
    "revision": "011cefcf5df3f9c6e2290a2595bff7c5"
  },
  {
    "url": "assets/js/26.db69f811.js",
    "revision": "18224a7f88768ac0b3d72a66ff7a30f3"
  },
  {
    "url": "assets/js/27.d3daebd6.js",
    "revision": "4833b6da75a1c8e4f24d45f517013cba"
  },
  {
    "url": "assets/js/28.fc50fe43.js",
    "revision": "8d05c8003ca0b5bd82d389f7a80fc0ac"
  },
  {
    "url": "assets/js/29.23a2b357.js",
    "revision": "1cf8615c82639db510d97da223c4266e"
  },
  {
    "url": "assets/js/3.ffe6caed.js",
    "revision": "23727ed8782e348eee7660f75728bf89"
  },
  {
    "url": "assets/js/30.9897918f.js",
    "revision": "5d3a5384c8d81878cf9f66b88076dc81"
  },
  {
    "url": "assets/js/31.101ac967.js",
    "revision": "2f6dfc8bc9db2de56b6875d3f7725357"
  },
  {
    "url": "assets/js/32.36cb8791.js",
    "revision": "048fb933cf75fb5eed748e73369bbcb5"
  },
  {
    "url": "assets/js/33.3f0497c0.js",
    "revision": "deba9ae8ab50f18110c5abc5f8cc7728"
  },
  {
    "url": "assets/js/34.d3c303c6.js",
    "revision": "7324589e38b3181afb4823fee1d13a74"
  },
  {
    "url": "assets/js/35.07996a0c.js",
    "revision": "652560895fffca7e4a878939a057f74f"
  },
  {
    "url": "assets/js/36.c36aa22d.js",
    "revision": "aae5285ee1dbb5b1810585200f4a6249"
  },
  {
    "url": "assets/js/37.dd11f35c.js",
    "revision": "150ddc72320756a2b75db0a64c7b2d9d"
  },
  {
    "url": "assets/js/38.a9bdb023.js",
    "revision": "3d99bf6313b89a08c02735b967efb7b0"
  },
  {
    "url": "assets/js/39.7ad7a228.js",
    "revision": "fbb89a6e0ca034eb4ab2b74a82f5a5db"
  },
  {
    "url": "assets/js/4.5753ee5a.js",
    "revision": "e290d18304b299364a839780ec023e14"
  },
  {
    "url": "assets/js/40.925b146a.js",
    "revision": "1f8228ba2787e5ef780310a22e34a4b4"
  },
  {
    "url": "assets/js/41.9a3f6d64.js",
    "revision": "3f37526662216e31ae267c958409c5ad"
  },
  {
    "url": "assets/js/42.8c4e3f4e.js",
    "revision": "722f271e8188b6a7a7afa9027e4fe08d"
  },
  {
    "url": "assets/js/43.bfbb881f.js",
    "revision": "19d17b4964c682d3e249be0cc5081e58"
  },
  {
    "url": "assets/js/44.ff324839.js",
    "revision": "d7eeb24da3e2ba8643d138bc52571384"
  },
  {
    "url": "assets/js/45.b41191c4.js",
    "revision": "924d2774f69ebeded6d2b71fddb6cdb1"
  },
  {
    "url": "assets/js/46.1358819e.js",
    "revision": "2fef13d1c6684fc4569ba8abb1612870"
  },
  {
    "url": "assets/js/47.a9d224c4.js",
    "revision": "6c189d9367f86376c89d45c76ddd9d95"
  },
  {
    "url": "assets/js/48.10dc14cc.js",
    "revision": "b62fcc8b017e72f6e25e969da2eae7fd"
  },
  {
    "url": "assets/js/49.afdfa587.js",
    "revision": "980985e9194df0d004e178464cd31384"
  },
  {
    "url": "assets/js/5.71e05511.js",
    "revision": "9598978a7bbdfefd7d68fa961cd51880"
  },
  {
    "url": "assets/js/50.8b3ac1a1.js",
    "revision": "8c57f9f90514dd907893308da1ded099"
  },
  {
    "url": "assets/js/51.3c6577a5.js",
    "revision": "771239fb2b19f4646508d6b924d16812"
  },
  {
    "url": "assets/js/52.8933ce28.js",
    "revision": "cca30ea137b573013b1ce90f85fa9381"
  },
  {
    "url": "assets/js/53.c9528031.js",
    "revision": "407c4fe05f3ca2f63bd04651854f5a95"
  },
  {
    "url": "assets/js/54.c173e3a5.js",
    "revision": "c8f94b8530cb58877f3b734b87655c12"
  },
  {
    "url": "assets/js/55.22a95825.js",
    "revision": "50aaee19cb1a7050069ae6bf64f86a5c"
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
    "url": "assets/js/8.092e8a3e.js",
    "revision": "dac1e31cabd51665e7ae2045705b921e"
  },
  {
    "url": "assets/js/9.457a2070.js",
    "revision": "22247ac739ad88bdda0b594857bcab51"
  },
  {
    "url": "assets/js/app.9e1cc5f0.js",
    "revision": "30bad25cc529b64b8e38ab6ea56efb01"
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
    "revision": "79c5c66f9f217fe2c9efa6de77ab4bce"
  },
  {
    "url": "blogs/其他/100301.html",
    "revision": "f892b3d540377449d76178e9b653fdb6"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "f3560e5f0f95927045c865592c0444b0"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "1faf21279ff93a713ee0dbce9bdcef0f"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "b4aed6895cecb6cf01e4a92a39325290"
  },
  {
    "url": "blogs/其他/目标规划.html",
    "revision": "93b310a11d2dde839abc07d7ae754b4a"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "99a946fb946ef214e20703e9acb4d136"
  },
  {
    "url": "blogs/学习/HTML/cookie.html",
    "revision": "649931fd22a23e71515c56b0639ac09b"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "d63fddaa47dc4c34a89ee54c2bcdecf2"
  },
  {
    "url": "blogs/学习/HTML/localstorage.html",
    "revision": "eb9793977172b91950c3b29d93ef471c"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "d4a43b4c82e41d8e6d132147dd970e74"
  },
  {
    "url": "blogs/学习/HTML/浏览器渲染.html",
    "revision": "88327bd68f01138cb453afb166f09a18"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "d0f592b2645d1b0a4c5e277cc90df146"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "e7dd07125359411d121cc043ba055e9e"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "0ca72e9925c3a175bfdab314642f0994"
  },
  {
    "url": "blogs/学习/JS/Typescript.html",
    "revision": "882a3e568449fac0df7be84b4adfc2a8"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "49fe57f9af847b68c29b0edcfceec15d"
  },
  {
    "url": "blogs/学习/JS/数组扁平化.html",
    "revision": "d42cf83997506d188b2605c922f1bdff"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "047aa002523bf9ccd9fa402cf06e100a"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "205fd497136f65d6a07dd226c7265db6"
  },
  {
    "url": "blogs/学习/Vue/vue3入门.html",
    "revision": "d6f12c480cea33e09bf2ada292fc2529"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "ce654a86cd8fe590501804330890d934"
  },
  {
    "url": "blogs/学习/数据结构/01.列表.html",
    "revision": "ca247c7af4447dfbedca2b3dd24b8576"
  },
  {
    "url": "blogs/学习/数据结构/02.栈.html",
    "revision": "727e5707324d60ce2ed4d9bd611a75ec"
  },
  {
    "url": "blogs/学习/数据结构/03.队列.html",
    "revision": "3e84e6c46731605811b1628f87a24041"
  },
  {
    "url": "blogs/学习/数据结构/04.链表.html",
    "revision": "042e4a7af7f2297da1fd98fd9db50e38"
  },
  {
    "url": "blogs/学习/数据结构/05.字典.html",
    "revision": "f6709d853179c847e67b2c2c889a6e8c"
  },
  {
    "url": "blogs/学习/数据结构/06.散列表.html",
    "revision": "aeb5084d3e8b2419f9e93b74fb0e153d"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "af4a26ac81bce1cbdee2d824df07fea3"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "d20ebd7964f71a24b2943b3a2c851ead"
  },
  {
    "url": "blogs/日记/REAMDE.html",
    "revision": "5e84dc3ddacda5265ca061c7470c1dd2"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "a057f9fe1b5c8dc1a1dc839ce593c03d"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "2379655453b2c3c416da13408af25052"
  },
  {
    "url": "blogs/面试/面经/baidu2020.html",
    "revision": "886ff2cd38af3a82f7266cf7a71605fc"
  },
  {
    "url": "blogs/面试/题目/20201103.html",
    "revision": "2a200c173c33fa70a4709c2f6f7a7171"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "54d15335b8ee2cc2f45061187be61802"
  },
  {
    "url": "categories/index.html",
    "revision": "75858a9817107e9bf0ec44a2c82843f7"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "04333463a8c8cb027197824c9fbae49d"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "1275c0224a75034750455714fc4c4784"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "86ff2a601cd2804cce8395e44b55e586"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "22e2d6cfc5294437f16c3ea9405af0ca"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "7091fdef5ed577072434f12c2fc2d4cc"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "8a927df25142c0f37dce55d9e5ec67b6"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "bcddf318739feb0e2ac18d0b88a09f4c"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "8d0dbc00ce42e8bb673d6b34a0a79824"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "0a6e746164e896a1c7f6bf3dfc8a1284"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "ee46b26e412020b68c63e90564350869"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "41838f112b1b2aea876877c8b2ce4db1"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "d29441017d56abb4eb05708ac889e823"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "d904d0359ad09a25602fe670e01e4308"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "652f3455044fb6aa0c70c6f5b39fd9c1"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "2f15d064969a05e1c03a443e29c88188"
  },
  {
    "url": "tag/index.html",
    "revision": "d1ee42dba80b0f724f04072297224945"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "ee0139848626586d5e633e12c920fd0f"
  },
  {
    "url": "tag/JS/page/2/index.html",
    "revision": "4c3821daea6d42e39956b63e4b4694e4"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "a6d840b44d725fde40c2884d8d83a451"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "9315a9599a932e5b0f2875824c71ffc4"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "c741ceddcebc36a588f5f45fa7b9c3b9"
  },
  {
    "url": "tag/node/index.html",
    "revision": "212921c2f4765390b1fa8219f1cb9555"
  },
  {
    "url": "tag/py/index.html",
    "revision": "8c00fbdc4d3a957fa1233b366dc3d9ca"
  },
  {
    "url": "tag/test/index.html",
    "revision": "f1513103beebacab69a02deeab47659b"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "bfaf950a32c8ace28188101593e25caa"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "5154839d15fe2a73dffa6d374e82ed9f"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "6cadf41e2bf688cd277f0633f1846cdb"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "3731952e4fa20415fd012e6dcb47d336"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "bba39c6c6f91cdceabcb41083fc11fc5"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "b2889240da2b3a7c0ed3c0b3826457dc"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "d90dfb51495b5ee4574465ab2f227c74"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "fb815b250e69ad8b053b2ffdb194a489"
  },
  {
    "url": "tag/数据储存/index.html",
    "revision": "ef4bd66b1577804a0365820ef7c9aaaf"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "cf3725ebafdef7131630f116d913fd05"
  },
  {
    "url": "tag/日记/index.html",
    "revision": "ea6a4ff528461a9167dbc5ec79d9193a"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "09e9babdc094a9fa4721ac1fa975f025"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "184bee3e98bcc5cf93dd28ce8ce31b1f"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "6addb8891c4d7ed3e07d98cd3e08b722"
  },
  {
    "url": "tag/目标/index.html",
    "revision": "e20b83092b461068361630abdfa1835b"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "5c38aaddf0d2e4c13827739f998f213e"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "443a05abaa96ac372885633daa90d1ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "5f3cfdbe6009f1b32a87b08df34554c9"
  },
  {
    "url": "work/about/index.html",
    "revision": "80d78ac0c13a59698182e769e5999729"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "ca140aabfe70de28691598e1f560b3cf"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "0ea118d65bab170ffab350c4c7777be1"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "24637628e23926574492e790a38971c9"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "609aa01d3ab84c0a55045370ebc7526c"
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
