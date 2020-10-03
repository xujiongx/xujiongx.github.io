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
    "revision": "063d293365491ad74d7eff6eb6e88c75"
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
    "url": "assets/js/16.08b47b03.js",
    "revision": "21a1707e4f7c50db3e273d94d7d4d795"
  },
  {
    "url": "assets/js/17.aa56c9d5.js",
    "revision": "cc898a235dc1bb149ea2536574fb4f0c"
  },
  {
    "url": "assets/js/18.0b8ccc49.js",
    "revision": "a7ec5a9790f4b98b8730c17111524352"
  },
  {
    "url": "assets/js/19.a55a6dc9.js",
    "revision": "95adce6be008fbdf915ff2482964222a"
  },
  {
    "url": "assets/js/20.4632bed2.js",
    "revision": "602e56d7a988faef2e8c18612f8b70c1"
  },
  {
    "url": "assets/js/21.ad1e0811.js",
    "revision": "23f43240116111cf0bef269fb302371d"
  },
  {
    "url": "assets/js/22.d8d600f4.js",
    "revision": "d4ff93d0d2e96f30ef41829791e11bac"
  },
  {
    "url": "assets/js/23.88eed66a.js",
    "revision": "77c2c5939aa6b3d97e6c8932983059c8"
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
    "url": "assets/js/9.581f4a1f.js",
    "revision": "89f982ec211aaf073d965d8c69f9a2e8"
  },
  {
    "url": "assets/js/app.25aca750.js",
    "revision": "b734f7db881f149d5f316005fb8d5a12"
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
    "revision": "44963df35c0bf0897308e1b23f370aed"
  },
  {
    "url": "blogs/面试/HTML/H5新增标签.html",
    "revision": "998bdacc41ba63da59f533581cd01355"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "5da44e72d1125ccc2baa305f5b721c76"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "2776df3f8433f5c31cd0428b3ad8ed9f"
  },
  {
    "url": "blogs/go/gobase.html",
    "revision": "2ddf77ae9a0b3f2010c8735d45531910"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "c4c3ad512281d3f0ef82aec42ad11778"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "93000268f41a5edb04e187b67117e566"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "dc789cf988585a4261f823e323698c6c"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "2e66cd43b87d2974cba807bedbe57aaa"
  },
  {
    "url": "categories/Go/index.html",
    "revision": "7af7694d47626c072f3aeb889eb40e02"
  },
  {
    "url": "categories/index.html",
    "revision": "65752a93041120951a6b117fd5056689"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "e990dd44e4afb214ee89a111182ab14b"
  },
  {
    "url": "categories/test/index.html",
    "revision": "eaeceb74e2f0142e1535b686f8b66295"
  },
  {
    "url": "index.html",
    "revision": "a0b78ae59053355bbcf900fd158937d9"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "9e65a7bf13bae3fed5f1bb277aa14c78"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "6ae7fecf65053b07e039acd7d84fd955"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "bde06ff88bd499781b6f4cf40dedf662"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "d694f3febe95253eb44d1b9add33da1b"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "36b54124487f4f45354cc1524beeee49"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "8e72cbceaf49c8920d8c214d988eb60a"
  },
  {
    "url": "tag/index.html",
    "revision": "f7efd1d0dd5b74b02450af1635f47b69"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "54012c9e2c6630764b52c370e22e3457"
  },
  {
    "url": "tag/test/index.html",
    "revision": "4a7a160ebad32e17bcb68f7c0c0e1f18"
  },
  {
    "url": "timeline/index.html",
    "revision": "67387549294aa0e8b615b4c2fb1d8a78"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "8192f3fec077b39f7c2712620326310f"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "a5e2aa88ccc038516546ad8c39f19f30"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "c3216106b69a8b201a17bcf6b058881e"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "54af25e95059a6523359379d23ba456e"
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
