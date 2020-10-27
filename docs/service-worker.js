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
    "revision": "6bb88bc9175298c11d1ed9a917d91af0"
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
    "url": "assets/js/11.b283c57d.js",
    "revision": "2ce0759449b3f9068ccb1c2f05415f67"
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
    "url": "assets/js/15.898535f6.js",
    "revision": "29879f90e05735c38e48e7f1234177aa"
  },
  {
    "url": "assets/js/16.eb192b86.js",
    "revision": "bdf3116302848891e14168d7ea4b42d3"
  },
  {
    "url": "assets/js/17.aa01143c.js",
    "revision": "1d4cbbb5471e9263cd447ca027651838"
  },
  {
    "url": "assets/js/18.efa3ed9e.js",
    "revision": "78fb457e42f23e687bcb31f3f46763dd"
  },
  {
    "url": "assets/js/19.ef77c7fa.js",
    "revision": "a22594ae53094818b3145a946678b11e"
  },
  {
    "url": "assets/js/20.29c5edfd.js",
    "revision": "b402571023a8db51d3e2277bc78c41de"
  },
  {
    "url": "assets/js/21.adfc79d6.js",
    "revision": "544c1e3096f39b9379231a2c5f00b7ae"
  },
  {
    "url": "assets/js/22.4e672d5d.js",
    "revision": "ddf7b96fb902315c2c9d6ed9e80ec2c8"
  },
  {
    "url": "assets/js/23.0098f4d9.js",
    "revision": "66ccf61171fcbc65aff4803b24c1e528"
  },
  {
    "url": "assets/js/24.37c74a92.js",
    "revision": "e136d878db94067848332223d8ee269a"
  },
  {
    "url": "assets/js/25.d1ea0b5d.js",
    "revision": "1f75d4f7cfdfccb079667cd5fe235a66"
  },
  {
    "url": "assets/js/26.90f6ff5a.js",
    "revision": "9556d9d3b952d1a0dcb40f2bf9323ed3"
  },
  {
    "url": "assets/js/27.7d3381e9.js",
    "revision": "9c603c7f609e8d76659a2a16d645ffa0"
  },
  {
    "url": "assets/js/28.fa5c2c6d.js",
    "revision": "f684ae66a83f7907796d491f95986606"
  },
  {
    "url": "assets/js/29.90a6b539.js",
    "revision": "e68a272e1c1fcb5c1f475fd77e38f4e9"
  },
  {
    "url": "assets/js/3.98fc6929.js",
    "revision": "a6c05b55f2f0fe75086152588d93fcfa"
  },
  {
    "url": "assets/js/30.327233a5.js",
    "revision": "6763596adb20078f3d1060f7afc6bd39"
  },
  {
    "url": "assets/js/31.ae876b39.js",
    "revision": "c0002884201ad5e96e07edc93688121a"
  },
  {
    "url": "assets/js/32.27dc5750.js",
    "revision": "a48b4c65c5429a4404f8fbe60e1763c2"
  },
  {
    "url": "assets/js/33.5b560818.js",
    "revision": "9bf4f0af0922f84eb6b6fb43d25de85b"
  },
  {
    "url": "assets/js/34.58f04a4e.js",
    "revision": "a3fd60586cc53c354f61e50dd6ec2d08"
  },
  {
    "url": "assets/js/35.124677f9.js",
    "revision": "6697cbff83465d032e9e90254a70f7ff"
  },
  {
    "url": "assets/js/36.9c7228f5.js",
    "revision": "15ffa9063abecc775c4a9280b42845a3"
  },
  {
    "url": "assets/js/37.d485ad1b.js",
    "revision": "d0a4e57f8a05c082b6950b0181b15295"
  },
  {
    "url": "assets/js/38.942e13d7.js",
    "revision": "2f30f1dd3cfcc3713fd7ef8232063766"
  },
  {
    "url": "assets/js/39.8b2fb925.js",
    "revision": "a0f33d2ca8c43d64c9f264ce8e3d3a85"
  },
  {
    "url": "assets/js/4.31a4ed1b.js",
    "revision": "59846df74499d4c9f7c542e4eb2dea01"
  },
  {
    "url": "assets/js/40.07e5e2f4.js",
    "revision": "94c7abbe42e37ede65c8dfe664e30b81"
  },
  {
    "url": "assets/js/41.9ba723f7.js",
    "revision": "e61abd9cdf478c50f4ee19434ce466a6"
  },
  {
    "url": "assets/js/42.2ff838a1.js",
    "revision": "e0c9766495834f16452f350f3c44c008"
  },
  {
    "url": "assets/js/43.259a8b45.js",
    "revision": "c7082c65ee489e910895eba34bac727b"
  },
  {
    "url": "assets/js/44.39df4fac.js",
    "revision": "830916089bc0ed34c7b383f5f709d1e4"
  },
  {
    "url": "assets/js/45.8b9b44f6.js",
    "revision": "997fc8e5d66cb9ad4a27c3c9eb57c40d"
  },
  {
    "url": "assets/js/46.79109090.js",
    "revision": "f74472e2784d5ece232bc9f348fa8413"
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
    "url": "assets/js/app.55fe57ed.js",
    "revision": "7d01e21107f6191c1348c4f5ba4026f3"
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
    "revision": "991f3424c78938ed7c423dde9d3aad57"
  },
  {
    "url": "blogs/面试/题目/题目整理.html",
    "revision": "1b710e21d79e200e329944e09515551b"
  },
  {
    "url": "blogs/其他/20191204.html",
    "revision": "74b0ffed13b8e8f57a90168e3ae27f18"
  },
  {
    "url": "blogs/其他/工具.html",
    "revision": "bd10dc689ef9388506e2cbd076a99a6f"
  },
  {
    "url": "blogs/其他/推荐网站.html",
    "revision": "fdd6e123a0c65aba6f861f7ce621ba02"
  },
  {
    "url": "blogs/诗和远方/伤感/2019062901.html",
    "revision": "06af83b6c0a875a5dd80336f69285610"
  },
  {
    "url": "blogs/小案例/打字效果.html",
    "revision": "aeb8055c058109d261692f2cbffa8ebf"
  },
  {
    "url": "blogs/小案例/跳动的爱心.html",
    "revision": "a36a12b81ddd307205a7342328ad9d7c"
  },
  {
    "url": "blogs/学习/GO/gobase.html",
    "revision": "c3c7f83fab4b43363942f515e0b6e0cf"
  },
  {
    "url": "blogs/学习/HTML/常见面试题.html",
    "revision": "57ffc7899e9d3205d1a5280a0b6c8922"
  },
  {
    "url": "blogs/学习/HTML/浏览器渲染.html",
    "revision": "7ae6b15f405b829b319c691147554cc2"
  },
  {
    "url": "blogs/学习/HTML/H5新增标签.html",
    "revision": "64e8817ee703c0d92c3276bbc643eeb2"
  },
  {
    "url": "blogs/学习/JS/20201011-mixin.html",
    "revision": "f36c86fdb741d12451a79776eb2724e5"
  },
  {
    "url": "blogs/学习/JS/继承和函数进阶.html",
    "revision": "ba9299b8c1ca67648de5143989f1e0f1"
  },
  {
    "url": "blogs/学习/JS/数组扁平化.html",
    "revision": "11d6a237de66a28ded68fdba8e07ff16"
  },
  {
    "url": "blogs/学习/JS/cookie.html",
    "revision": "63adfab016d18121cd649082752daa2f"
  },
  {
    "url": "blogs/学习/JS/generators.html",
    "revision": "89d049a8618d08dc3669121d5ecebff7"
  },
  {
    "url": "blogs/学习/JS/js异步.html",
    "revision": "d704f2bcd95dac0cfda0d386d874f6b5"
  },
  {
    "url": "blogs/学习/JS/WebComponents.html",
    "revision": "db9fcf3ae2abe9b509dccf08de879c76"
  },
  {
    "url": "blogs/学习/python/20201009-Django.html",
    "revision": "4c2269d0740917d822f358dac221e6e8"
  },
  {
    "url": "blogs/学习/Vue/Vue源码法分析.html",
    "revision": "415b77104ce5b63f2f156e848e49028e"
  },
  {
    "url": "blogs/游戏/xx142.html",
    "revision": "fdeb477eba749686ed69f31defc76b38"
  },
  {
    "url": "blogs/leecode/001.html",
    "revision": "61944ae1f0ae0b2e988e92e70fd1befc"
  },
  {
    "url": "blogs/Test/100301.html",
    "revision": "3ba4c5f3dd28c43a92dfd0f1d7d707d6"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "e6cd0f59ac7af9274f5a88d331073ac0"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "dc9c3a4c0f7421f0a7dfdbe44e136f5c"
  },
  {
    "url": "categories/诗和远方/index.html",
    "revision": "342532e8d5a1b9dc777c3dec1dd6e054"
  },
  {
    "url": "categories/小案例/index.html",
    "revision": "3342b6687f66d3b8207b1f3e339d73a5"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "7c1ccbc364b11efa349d7259c7f18488"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "0ba24f04c96b2daa4f96651ebb967809"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "576b8c21d9e3eba3f06fd4b831b79aa4"
  },
  {
    "url": "categories/index.html",
    "revision": "cc6083db95c56e55657b05cd57812e56"
  },
  {
    "url": "categories/leecode/index.html",
    "revision": "634af4124007d9ae6353ccd3de86f365"
  },
  {
    "url": "categories/test/index.html",
    "revision": "556ec152721a6abb081e4f657899db1f"
  },
  {
    "url": "images/2019062901.jpeg",
    "revision": "d6bf676f0a78ea14af89e29efcf50842"
  },
  {
    "url": "index.html",
    "revision": "9de6cf8f716a5f6fe11dfc0b8ef885bd"
  },
  {
    "url": "logo.png",
    "revision": "cf8bd4089f92820e6c7e2b884ed65265"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "03b8e8394de5f154a11bc1fb46775893"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "49db5a970b46985968249041b9517541"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "6d917d43d24117ffe6ae8225c19736a7"
  },
  {
    "url": "tag/数据储存/index.html",
    "revision": "1459ab98825b03888fdc730140f833c2"
  },
  {
    "url": "tag/刷题/index.html",
    "revision": "8dc93eac94a5182a02c91b2cb20e2f00"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "7a0dbc92901c94e143a3c0d0fdfdcf0e"
  },
  {
    "url": "tag/心情/index.html",
    "revision": "ec2a2f330c8b97ce62de4f05a5c7d874"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "f9ffb5940ce161f437750e188515ecc1"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "e5c68a670d65bf0b1e906e57c4134ac2"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "c518bc48f037f72cbe3bca6512a0981f"
  },
  {
    "url": "tag/Base/index.html",
    "revision": "d68a32333321256a948fb67b24cbf48d"
  },
  {
    "url": "tag/funny/index.html",
    "revision": "24b27e9186cfa0ef5319c36bf182a4de"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "8cc816f09399abebd8c31afd5d2ef7e6"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "897c6eae9732e898c1cea7494e3d10b9"
  },
  {
    "url": "tag/index.html",
    "revision": "f824d76307cfcd87af91eb3421ee88fd"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "aff09983c7341e1dc1ddaa7f83f0e0b0"
  },
  {
    "url": "tag/leecode/index.html",
    "revision": "e8abf851546479383a4e68a483f1db8b"
  },
  {
    "url": "tag/Mixin/index.html",
    "revision": "debac5a80f4176451c862ce5d2590922"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "e6721e546815d65f42667170c8a04c77"
  },
  {
    "url": "tag/node/index.html",
    "revision": "0ed3a325521b766a0e41b1987031c05e"
  },
  {
    "url": "tag/py/index.html",
    "revision": "a07b0f4a095e7887416ee57d8cf418a9"
  },
  {
    "url": "tag/test/index.html",
    "revision": "054f42ea42abd2aacf339b0657d52c2c"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9d0ff30467dbac8d9a8369ed3b8d8fff"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "44dc5b595517aa62f71b06878514386d"
  },
  {
    "url": "timeline/index.html",
    "revision": "7c0d402fcd296851cc71f39336f26f1b"
  },
  {
    "url": "work/红蓝PK/index.html",
    "revision": "4151465093e3953b6cb93093ce02d7c9"
  },
  {
    "url": "work/江农客栈/index.html",
    "revision": "5b19ea6164d6e523640f66032a1a2969"
  },
  {
    "url": "work/About/index.html",
    "revision": "c800640efc716e875429b47ddcf430b6"
  },
  {
    "url": "work/theme-reco/api.html",
    "revision": "78b4edf97b57c3ea6b6e9600f692d944"
  },
  {
    "url": "work/theme-reco/index.html",
    "revision": "c669dc501c7085ed41f5977cd0540cfa"
  },
  {
    "url": "work/theme-reco/plugin.html",
    "revision": "1da50679f1d3964c3c3232ff9ae459ed"
  },
  {
    "url": "work/theme-reco/theme.html",
    "revision": "e52e5655c9330fae8c82eac2d6832610"
  },
  {
    "url": "work/vue全栈商城/index.html",
    "revision": "bd5b0652d8171ee3227223229b1ca96b"
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
