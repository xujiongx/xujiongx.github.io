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
    "revision": "cee757e07670840940482c7c59685876"
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
    "url": "assets/js/11.f56247b2.js",
    "revision": "e497f5d772e7a77638bd3e370f34c8d8"
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
    "url": "assets/js/15.0405ab0a.js",
    "revision": "e204aac3bd778a22fb0e159b89728586"
  },
  {
    "url": "assets/js/16.57d1124a.js",
    "revision": "ccb0dff798be1e12ead9527fa319e54f"
  },
  {
    "url": "assets/js/17.d1337f0c.js",
    "revision": "725eb8a13e56a5bc6575bf63d47bbfe7"
  },
  {
    "url": "assets/js/18.39107409.js",
    "revision": "5df523b1a156637148f2b77a0920924e"
  },
  {
    "url": "assets/js/19.44847175.js",
    "revision": "efb746393bb3eed75b6243942790b9b5"
  },
  {
    "url": "assets/js/20.5c9d1ee0.js",
    "revision": "258be11b965ff8fc75776f1f03ecf683"
  },
  {
    "url": "assets/js/21.26cde4e5.js",
    "revision": "074c30c5e37dcbaa82f591d53efcd1c9"
  },
  {
    "url": "assets/js/22.a26dcb54.js",
    "revision": "a2f92c7adae35c3ba7c95b61dd427e09"
  },
  {
    "url": "assets/js/23.4eb5f648.js",
    "revision": "16020e9fbee448058c3eb8b5e4fee68f"
  },
  {
    "url": "assets/js/24.22a3766f.js",
    "revision": "c1b9491f4e307c5e5982d712f231fd09"
  },
  {
    "url": "assets/js/25.cb4ceba9.js",
    "revision": "4a09bc86fb07b5a5930f8eda4ae1aa91"
  },
  {
    "url": "assets/js/26.5e5aa738.js",
    "revision": "7a1544d5b67c5057cbcd8c7a4f66e1d1"
  },
  {
    "url": "assets/js/27.254c8fbe.js",
    "revision": "4838112722bd4a2ffb8d7fdc36011291"
  },
  {
    "url": "assets/js/28.e68ef477.js",
    "revision": "406cf407cce63141c9ea5671da2c53ba"
  },
  {
    "url": "assets/js/29.574a262d.js",
    "revision": "b4f68db7077f4c35338c481c7bfcc660"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.30aa3aa2.js",
    "revision": "18b9233257956edad24617c0d8bd9c8c"
  },
  {
    "url": "assets/js/31.8d680a2a.js",
    "revision": "7a830622a90e322d5d8042507bd97a95"
  },
  {
    "url": "assets/js/32.4165aed8.js",
    "revision": "e3a0543c8d0f07e80c96dbab0b98edde"
  },
  {
    "url": "assets/js/33.5c088ca8.js",
    "revision": "7bf3aaf14e150a5f820dd9a67d6ec921"
  },
  {
    "url": "assets/js/34.0fba9952.js",
    "revision": "8e5cee8e2bfba5358ca89b7a96bbf6f4"
  },
  {
    "url": "assets/js/35.73835b34.js",
    "revision": "50c2bb79cfc20c775ed2ba8cc596e3dd"
  },
  {
    "url": "assets/js/36.a09e4aa1.js",
    "revision": "18eb7d8f5d522f588b5ae37bd8e30a85"
  },
  {
    "url": "assets/js/37.7926d266.js",
    "revision": "7a149323a78fac1d435b27bce8a885ec"
  },
  {
    "url": "assets/js/38.6097c630.js",
    "revision": "e95a09a2ccf49b292f46c624498af36d"
  },
  {
    "url": "assets/js/39.3d6b248a.js",
    "revision": "32045525bad8ee29d62d2c5c4e4a9b8f"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.c6711d98.js",
    "revision": "e22dd6dbd2d278ca78ac645dfa41b0c1"
  },
  {
    "url": "assets/js/41.a0a40313.js",
    "revision": "c4fa36db66b88c908e2808ff54b08ce0"
  },
  {
    "url": "assets/js/42.1d9bb7a7.js",
    "revision": "8c6cff60d1ed04e34f9ad53bbb018957"
  },
  {
    "url": "assets/js/43.2302d233.js",
    "revision": "5a96054786eb11c62af699e0a3b692ed"
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
    "url": "assets/js/app.4528cd6f.js",
    "revision": "e83ab11c36f23ec855367583fc31fa4d"
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
    "revision": "7dd0fba444c066d4a4fffa17b8d6ddae"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "62e4ef8387ce4baeedd349fda639e92d"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "be2200ecc576289d77f2a80a5db66695"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "2be9afbce4bc7ee2e9ed349159ebeea5"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "e3412715fe1e16bfe30d4296e93b0d1d"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "fa614436c918d0060ecd1eee8756a114"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "03da933eb33131d6643b4f2fcc465967"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "7bdcdfdd787824d774d8ee4a9e3b7a92"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "5026960c34d1aae86df849269dba2d85"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "58a10692d0a7cb16acdc0a1de4179a2d"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "36cffb7a1100cc815446c081bb14cbef"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "33dc96cf0b0e0538360d02219c5f721f"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "daacfe5101552a126b04a533c06e913a"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "a09011e98a2e01d7a59399908158b2aa"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "86631e758d6f3018fdfa2e547484a296"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "283540c4fa51d878e73c73b86df11e3c"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "c52a85b3de27edcfc322c1f81b6440d7"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "def2586ca761da78c2b9596c8936576d"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "ebfd7a7112ce1d8e909d229b9da59c89"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "68692f8f9e450f95d1e12338286cb0f7"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "2f09ed5b61340e8cc9995e76c3904a1e"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "ee1b9fbea8d865eb944acf02e2e6d3e6"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "b0cf6b38294f16d8af417cfe4ca4f7af"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "14f4ebfcc8624d2aa8b1f8f5239fa348"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "27da1d6680bdacd7e7ac2134052e8fa9"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "6cf09f275470204654ac1f070d4769b8"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "4d7721fa0cbd1a71635255a9d0c284f6"
  },
  {
    "url": "categories/index.html",
    "revision": "cc3900f07a95090060e6529c1fdce93a"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "6e405d17dfaaa9ace8c765c1a8f5bc00"
  },
  {
    "url": "categories/test/index.html",
    "revision": "97c7b7c8e62d023c35089b877d2790ed"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "dddb5030710937fe0e7ae1d3ee113bdb"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "3fc39893e898dba701cb9c0fc22e27a8"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "35e51088b8bd520beb4e9f92c0609b59"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "ac678c8c400d2f546ae667273f2410e7"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "e12ef2c41483fa69878f3e853d4c20e3"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "cc23112d2c18e6bea6891406fde6e692"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "f4d553506510eab18240fa513f8b83a7"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "6c2a4285edf2fa12c343fd762b60079a"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "7036c272a6c7a03485207545f550539e"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "3b28236a4ec7ef0157e84e655ac9cf9c"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "f94910f6e17c50239d31b596cddc2688"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "66798c38f345298a1756fdfb16ddeb09"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "b1d14ec4dcb90f7311928942237c1151"
  },
  {
    "url": "tag/index.html",
    "revision": "7394632a1e737526d4be79c7c7756e61"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "b4038f9d7506543d5bb3e43e64b2bf16"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "91380f8e79471755a1bfeb5dd88dbfaa"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "7a5f8b04b6e2644b2f6a38a9cd6ef201"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "105109a27736245552cce00396437338"
  },
  {
    "url": "tag/node/index.html",
    "revision": "8e181f0f3c78bc3175d681ba33e9d788"
  },
  {
    "url": "tag/py/index.html",
    "revision": "22ce296d56032dfde4645842497d4c12"
  },
  {
    "url": "tag/test/index.html",
    "revision": "92a8a805cf499dc1006144a711c4133a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "37ef9ef8dc37ec0b27b7c15b133ec365"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "beb444dae65c3098212c1d70e98b6fee"
  },
  {
    "url": "timeline/index.html",
    "revision": "82956f61563e59ab02aa5eca472a835e"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "812054d9360d1ce0681f18d8acb09edc"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "852c9b7cf4f82b7d80e2585ece1d5f0c"
  },
  {
    "url": "work/About/index.html",
    "revision": "ace60fa69cdc24a29f9accaa8b30db4b"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "d91009871da1298cb53ada532cac3c54"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "c5e8f2604d442adb92e1e30e4784fde9"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "3b17ba47e10b2b3864d8658f0a460c47"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "e0b67e659221539778400dbf29773355"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "1638c1a1ff189aea52e61cebeef03620"
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
