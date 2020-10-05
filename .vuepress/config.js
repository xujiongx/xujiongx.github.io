module.exports = {
  title: "断舍离",
  description: "热爱生命，简约生活",
  dest: "docs",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "我的作品",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "联系我",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/xujiongx",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/work/theme-reco/": ["", "theme", "plugin", "api"],
    },
    subSidebar: "auto",
    valineConfig: {
      appId: 'dlIt7xiOoRxm2x2b119OvevE-gzGzoHsz',// your appId
      appKey: 'sYzRMRdAPeiSQcnWY0ahBkrL', // your appKey
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "None",
        desc: "虚位以待",
        email: "none",
        link: "/",
      },
    ],
    noFoundPageByTencent: false,
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "XuJiong",
    authorAvatar: "/avatar.jpg",
    record: "鄂ICP备19012356号",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
  }],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        clean: false,
        messages: {
          welcome: "欢迎来到断舍离的博客",
          home: "心里的花，我想要带你回家。",
          theme: "好吧，希望你能喜欢我的其他小伙伴。",
          close: "再见哦",
        },
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "강남역 4번 출구",
            artist: "Plastic / Fallin` Dild",
            url: "https://assets.smallsunnyfox.com/music/2.mp3",
            cover: "https://assets.smallsunnyfox.com/music/2.jpg",
          },
          {
            name: "用胳膊当枕头",
            artist: "최낙타",
            url: "https://assets.smallsunnyfox.com/music/3.mp3",
            cover: "https://assets.smallsunnyfox.com/music/3.jpg",
          },
        ],
        autoShrink: true,
      },
    ],
    //回引起板娘大小发生变化
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //   width: '300px', // 默认 260px
    //   title: '消息提示',
    //   body: [
    //     {
    //       type: 'title',
    //       content: '欢迎加入QQ交流群 🎉🎉🎉',
    //       style: 'text-aligin: center;'
    //     },
    //     {
    //       type: 'image',
    //       src: '/avatar.jpg'
    //     }
    //   ],
    //   footer: [
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/donate'
    //     },
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/donate'
    //     }
    //   ]
    // }]
  ],
};
