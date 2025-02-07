import nav from './nav';
import sidebar from './sidebar';

export default {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/android-chrome-96x96.png',

    nav,

    sidebar,

    editLink: {
        pattern: 'https://github.com/johanazhu/fe/edit/master/docs/:path',
        text: '在 GitHub 上编辑此页',
    },

    socialLinks: [
        {
            icon: 'github',
            link: 'https://github.com/johanazhu/fe',
        },
    ],

    footer: {
        copyright: 'Copyright © 2021-present johan',
    },

    algolia: {
        appId: process.env.ALGOLIA_APPID ,
        apiKey: process.env.ALGOLIA_APIKEY,
        indexName: 'azhubaby',
        locales: {
            placeholder: '搜索文档',
        },
    },
    me: {
        wechat: "https://s2.loli.net/2022/03/25/VqfD2ScLuKzjbR8.jpg"
    },
};
