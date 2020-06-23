const {
  nodeSideBar,
  reactSideBar,
  jsSideBar,
  ES6SideBar,
  BrowserSideBar,
  PerformanceSideBar,
  webpackSideBar,
  frontEndBasicSideBar,
  ArmorySideBar,
  bigFrondSideBar,
  designPatternSideBar,
  csBasicSideBar,
  aboutSideBar
} = require("./sideBar");

module.exports = {
  title: "五年前端三年面试",
  // 网页描述
  description: "我欲成仙，快乐齐天",
  head: [
    // icon
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "johan" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "javascript知识体系, React框架, javascript学习路线,js, webpack, 前端的一切, 前端面试, 知识体系, js技术栈, git, http, 算法, 数据结构"
      }
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: "最后更新时间",
    // 仓库链接label
    repoLabel: "Github",
    sidebarDepth: 0,
    // 导航
    nav: [
      { text: "导读", link: "/Introduction/" },
      {
        text: "JavaScript",
        items: [
          { text: "Js基础", link: "/JavaScript/Foreword.md" },
          { text: "ES6", link: "/ES6/Foreword.md" },
          { text: "Browser", link: "/Browser/browser.md" },
          { text: "性能优化", link: "/Performance/介绍.md" },
        ]
      },
      { text: "React", link: "/React/" },
      {
        text: "Node",
        items: [
          { text: "Node基本面", link: "/Node/Node基本面" },
          { text: "Express", link: "/Express/express-teach.md" },
          { text: "Koa2", link: "/Koa2/koa2-teach.md" },
          { text: "PM2", link: "/Node/PM2.md" },
          { text: "Mongoose", link: "/Mongoose/mongoose-teach.md" },
          { text: "Mysql", link: "/Mysql/mysql-teach.md" },
          { text: "Redis", link: "/Redis/redis-teach.md" }
        ]
      },
      { text: "webpack", link: "/webpack/" },
      {
        text: "大前端",
        items: [
          { text: "webApp", link: "/webApp/" },
          { text: "Flutter", link: "/Flutter/" },
          { text: "RN", link: "/RN/" },
          { text: "微信公众号", link: "/WeChat/" },
          { text: "微信小程序", link: "/WxApp/" }
        ]
      },
      {
        text: "Html&CSS",
        items: [
          { text: "HTML", link: "/HTML/" },
          { text: "CSS", link: "/CSS/" }
        ]
      },
      {
        text: "武器库",
        items: [
          { text: "算法", link: "/Algorithm/" },
          { text: "数据结构", link: "/DataStructure/" },
          { text: "HTTP", link: "/HTTP/" },
          { text: "Docker", link: "/Docker/" },
          { text: "Git", link: "/Git/" },
          { text: "Linux", link: "/Linux/" },
          { text: "设计模式", link: "/DesignPattern/单例模式.md" },
          { text: "CS基础", link: "/CSBasic/" }
        ]
      },
      {
        text: "关于",
        link: "/About/about.md"
      }
    ],
    sidebar: {
      "/JavaScript": jsSideBar(),
      "/ES6": ES6SideBar(),
      "/Browser": BrowserSideBar(),
      "/Performance": PerformanceSideBar(),
      "/React": reactSideBar(),
      "/Node": nodeSideBar(),
      "/Express": nodeSideBar(),
      "/Koa2": nodeSideBar(),
      "/Mongoose": nodeSideBar(),
      "/Mysql": nodeSideBar(),
      "/Redis": nodeSideBar(),
      "/webpack": webpackSideBar(),
      "/webApp": bigFrondSideBar(),
      "/Flutter": bigFrondSideBar(),
      "/RN": bigFrondSideBar(),
      "/WeChat": bigFrondSideBar(),
      "/WxApp": bigFrondSideBar(),
      "/HTML": frontEndBasicSideBar(),
      "/CSS": frontEndBasicSideBar(),
      "/Algorithm": ArmorySideBar(),
      "/DataStructure": ArmorySideBar(),
      "/HTTP": ArmorySideBar(),
      "/Docker": ArmorySideBar(),
      "/Git": ArmorySideBar(),
      "/Linux": ArmorySideBar(),
      "/DesignPattern": designPatternSideBar(),
      "/CSBasic": csBasicSideBar(),
      "/About": aboutSideBar()
    }
  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        // '@images': '../images/',
        // "@public": "./public",
      }
    }
  },
  smoothScroll: true
  // 插件
  // plugins: ['@vuepress/back-to-top']
};

// ['@vuepress/back-to-top'],
// [
//   'copyright',
//   {
//     noCopy: true, // 选中的文字将无法被复制
//     minLength: 100, // 如果长度超过 100 个字符
//   },
// ],
