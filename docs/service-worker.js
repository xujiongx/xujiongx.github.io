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
    "revision": "d90ec9287c10c5defb78cedd6bf7fb90"
  },
  {
    "url": "assets/css/0.styles.070b9d71.css",
    "revision": "612060c80a2526baeb0d24d8b046df0b"
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
    "url": "assets/js/1.fedeb4a6.js",
    "revision": "720c26f923fb4ca1b35e482e35d725f5"
  },
  {
    "url": "assets/js/10.074bfb79.js",
    "revision": "1c264e8088d26c20ca68ff963c6e5f86"
  },
  {
    "url": "assets/js/11.505850a4.js",
    "revision": "ffc5781a696e215395bfed40348229b6"
  },
  {
    "url": "assets/js/12.d099351f.js",
    "revision": "304c8da3d8b463b76223f111e7ef3773"
  },
  {
    "url": "assets/js/13.a1a18a72.js",
    "revision": "85a2d6050b5bb9f3e0bbc8720a59037b"
  },
  {
    "url": "assets/js/14.4c2eb275.js",
    "revision": "4959bd867dd0cd6f63bc77c030ecb3b5"
  },
  {
    "url": "assets/js/15.ea42e5d5.js",
    "revision": "b7ea718c7da2186c70541fc1d5f25e45"
  },
  {
    "url": "assets/js/16.b3100d01.js",
    "revision": "a26b1f0c78954c21475d20a317c903cc"
  },
  {
    "url": "assets/js/17.8d43e1b0.js",
    "revision": "0263af1287c054324d6c3ec6e978ca4e"
  },
  {
    "url": "assets/js/18.ff3aa972.js",
    "revision": "79743b4f4e5e0c4624c5ebf68e5e7e40"
  },
  {
    "url": "assets/js/19.66fa517c.js",
    "revision": "c630d78f3b2152c9bc13574817e24bb2"
  },
  {
    "url": "assets/js/20.ed86796a.js",
    "revision": "cf32c8c57b14cf4d220b065aa698d1df"
  },
  {
    "url": "assets/js/21.439600ec.js",
    "revision": "726b9b1ccea6e0584d6acea1e71d66b7"
  },
  {
    "url": "assets/js/22.383dce04.js",
    "revision": "7bfa88cf842657a35221acda6be30bbb"
  },
  {
    "url": "assets/js/3.b6a7b316.js",
    "revision": "90fb08815a0aafc7732d79f3c863e3af"
  },
  {
    "url": "assets/js/4.44e80eba.js",
    "revision": "810c8aa7de105ca71f3f148b5fa3b30c"
  },
  {
    "url": "assets/js/5.221de04c.js",
    "revision": "ae1b04468617c73414e73bcf015d456d"
  },
  {
    "url": "assets/js/6.c2d4ce80.js",
    "revision": "31a087ff5fd46329c40974a04fcb5d1a"
  },
  {
    "url": "assets/js/7.7462f39c.js",
    "revision": "8f607f11aaf4ac1369b3c93653d54c47"
  },
  {
    "url": "assets/js/8.45c740fe.js",
    "revision": "2320e1eef6350f58681a92884ec5c5b4"
  },
  {
    "url": "assets/js/9.7e9aaaef.js",
    "revision": "afcf0c28e52391a3db2184a33c3da214"
  },
  {
    "url": "assets/js/app.408a9b03.js",
    "revision": "124e53a1c78b53322cad9c214eb2359c"
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
    "url": "blogs/面试/baidu.html",
    "revision": "14086898491314b5f1c2b6d8d46e0e62"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "4a1333094639af5fc227fd7f694f8db8"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "5b9b47cb73b9032728cba2ef1b508600"
  },
  {
    "url": "blogs/go/gobase.html",
    "revision": "cdead0d1a5ec9d94371ebcd8e0222783"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "548b1a43620e059fa62011d7ed95a682"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "9b9b8853ce9b60ed0142f11e139565ed"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "490114ae80237e53e2c5a4782f97f007"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "43f929f9bb0fe5e3403e8be31f79e4f9"
  },
  {
    "url": "categories/Go/index.html",
    "revision": "6bfa6d3d44116a593ad61dd356ac5a53"
  },
  {
    "url": "categories/index.html",
    "revision": "7aa0f56c15afdff65732feed49cf9a21"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "a1660710a8a1e50cd8c847f7f703b962"
  },
  {
    "url": "categories/test/index.html",
    "revision": "2d08b1196b950b2aa24847eac19ea58f"
  },
  {
    "url": "index.html",
    "revision": "3725f7ae68530c5264106f5e79589624"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "b546ceda028dd70177d70de535becf00"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "0a264d51706f364c2821c2084c1801da"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "ade156140049f1ecf9e9ecb963552c13"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "bb8d82b1bd13b4f5ce4e4424fb40e735"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "72a78b6e07e29e21a88d93b17d9ef2ed"
  },
  {
    "url": "tag/index.html",
    "revision": "8a98b63f871d26f1b320ecb5b865b915"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "c309878b76c188d786f3ce5240e2d5c8"
  },
  {
    "url": "tag/test/index.html",
    "revision": "c044668fa430817953aff38e20463e0f"
  },
  {
    "url": "timeline/index.html",
    "revision": "0fb61e56deae3ddacbcebaef4cd80210"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "111e15d8b5efa2f59d14b4f2482bfc7c"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "4cefe2ab9cd18b64f2787356d16eb810"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "1f2ee89cc2bb597e20f1da65d999d25d"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "53ebe2dd2a3e4bf3e7f62a53486c1165"
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
