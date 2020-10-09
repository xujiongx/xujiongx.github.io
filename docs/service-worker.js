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
    "revision": "82624acd4a8dd917aaf265b3d3a999ed"
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
    "url": "assets/js/11.ff3561b5.js",
    "revision": "4c1016bc51173ae4034ac6856acbcb5e"
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
    "url": "assets/js/15.f61c32cc.js",
    "revision": "c5c48130ed59dd9963bb5756961bc19b"
  },
  {
    "url": "assets/js/16.8e893b7c.js",
    "revision": "76bc3ab7c2ce5be3c2d3c311a6032d78"
  },
  {
    "url": "assets/js/17.0bdea217.js",
    "revision": "d5162fcde204b1563b047d55701e4671"
  },
  {
    "url": "assets/js/18.9ec22bd7.js",
    "revision": "c4ce0cb938ce152c9b1b586cca6b89b5"
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
    "url": "assets/js/22.2fa542d7.js",
    "revision": "f3381ecc1274cc9d3be7b4d6564eedd3"
  },
  {
    "url": "assets/js/23.4bc61969.js",
    "revision": "692b5f3dcf72f693d7eeb9bb19e381a1"
  },
  {
    "url": "assets/js/24.0a592df5.js",
    "revision": "290012dec8595a97641e98ffcb13214b"
  },
  {
    "url": "assets/js/25.6edd04ab.js",
    "revision": "30cf0b1c76885b241fa1f680e1e7b1e2"
  },
  {
    "url": "assets/js/26.bff82112.js",
    "revision": "29c4483a523e6cbbd7457e1a6be9c20f"
  },
  {
    "url": "assets/js/27.01b100cf.js",
    "revision": "9f780119678c020c5cc4320c393df038"
  },
  {
    "url": "assets/js/28.e0e3b6ec.js",
    "revision": "f850a47fcb9ed0e05954ebac2283145d"
  },
  {
    "url": "assets/js/29.80dc8dad.js",
    "revision": "d0ab4984f0182bb47062bad651d0af4e"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.873af1ab.js",
    "revision": "b10a1bc23985128216c2efc7fbc83aee"
  },
  {
    "url": "assets/js/31.a4301139.js",
    "revision": "744974ed9c01bf9ddcec00a2b9f98d49"
  },
  {
    "url": "assets/js/32.2aa96c27.js",
    "revision": "6d5f9583db624d0959f924c878a7326f"
  },
  {
    "url": "assets/js/33.d9dc9f8d.js",
    "revision": "ef6ea825ce397d3c65068cf32053ebb0"
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
    "url": "assets/js/8.522fbfdb.js",
    "revision": "e2e7ed57333b09782b9ed24d10429590"
  },
  {
    "url": "assets/js/9.8d5c56c5.js",
    "revision": "09127a32417f1e3fdd0e310ffc0105b2"
  },
  {
    "url": "assets/js/app.cd967689.js",
    "revision": "1fe25dbceed470abcd93abfceccd92c0"
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
    "revision": "9962041bb03bdf76639c23684f3528ff"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "13a3d12b4665dae8503883bf63d0b88c"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "8ee0bf6fe2660f85a8a577d492f37f26"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "b37776271bb993209fed661c227fe61b"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "3b35888b02ce4fb62e17145f82b777bd"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "7c403b60220a2b0df7cb907c2487019e"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "3a8ba721f4a1ec8b9625d471af7c8482"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "b3b45e7c843da4600c3d1f687db11131"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "0112cd0527a0f66643cca1c8009d4ca7"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "6919b3fadfc69a5a5b3765316c49b52d"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "b65c71d5f9f9059eab4cbbb7a48dae87"
  },
  {
    "url": "blogs/学习/python/20201009.html",
    "revision": "e1155863c2a301e85c78b9ef87fecd3c"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "d30d6f55e1c6e1f76663cfdde628089a"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "daea9119269103e42bdd01a361481dc4"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "fe3bc760269c83a7492d90c4cb178fb5"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "cd37885eaf936e3d732ce05f335b5d3f"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "52c69c176320b3387b5c1eb3e65d287a"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "6fec14bb4a20d7b0e434531ab02a7706"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "f61e72d5e237ac2acedd6d2dc2a94d39"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "86060f21a2b0c8c080200f083bf3c603"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "5271b99ca151731660c3d869638fa81c"
  },
  {
    "url": "categories/index.html",
    "revision": "414073ddd8ed83b448b9dea2744fbd5f"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "b30bb2cea37892ede8450019446f78ce"
  },
  {
    "url": "categories/test/index.html",
    "revision": "f7b455f663c71c0b973ac7d6f1c6423f"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "646ef8402dfaecf1adcb7a65a4b3b77d"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "ef3aca251963c59b6b95ba1f1eca979c"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "84b5a032b76de81de904a300b5ea42a2"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "14891143f9c8b1576209cd5bde497f8f"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "d84057913fbcf590eb762f8af8df321b"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "6784a1f4b7cd50e8a724b59afd6e2491"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "58e87d515728acb0e8c4b65905f83d23"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "9964e295eda86af4e13688b7932cc1f9"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "2c20b09322c10ff5fe27b5a6d41ca0e5"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "13dd1a8f07eff04195f6497a7969a1cd"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "cfd6219069f4c82544fd81825a3f1509"
  },
  {
    "url": "tag/index.html",
    "revision": "20bd048315297bf020ef195d0c05abeb"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "343adf636b44f55d602da3ec0ff77fef"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "e6783607a6e991f9cff0b6687db8e008"
  },
  {
    "url": "tag/py/index.html",
    "revision": "2632a6d8c9302f77c7df40fc142af26c"
  },
  {
    "url": "tag/test/index.html",
    "revision": "43640e69414c4c6b5771f7189870246c"
  },
  {
    "url": "timeline/index.html",
    "revision": "f785d69f2e00988529010d6b4f9c1fb4"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "430c2233dd01c3c8f40eb670ccd54535"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "3f3030cfece986afab97dc4c51f7a0ab"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "6902531647cfef8d44904320f1b2aa4a"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "9bd62987e5624e0ff90cddb60405122d"
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
