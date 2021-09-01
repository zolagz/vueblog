//导航栏
module.exports = [
    {text: '主题', link: '/theme/', icon: 'reco-date'},
    {
        text: '文档', icon: 'reco-home',
        items: [
            {
                text: '教程',
                items: [
                    {
                        text: 'vue2',
                        link: '/views/guide/introduction',
                    },
                    {
                        text: 'vue3',
                        link: '/views/guide/introduction',
                    }
                ],

            },
        ]
    },

    {
        text: '其它', icon: 'reco-document',
        items: [
            {
                text: 'Projects🎈',
                items: [{
                    text: 'My Project',
                    link: '/other/project',
                }]
            }, {
                text: 'Common sites🎈',
                items: [{
                    text: 'Java SE API Documentation',
                    link: 'https://docs.oracle.com/javase/8/docs/api/index.html',
                }, {
                    text: 'Program Creek',
                    link: 'https://www.programcreek.com/',
                }, {
                    text: 'Spring',
                    link: 'https://spring.io/',
                }, {
                    text: 'Stackoverflow',
                    link: 'https://stackoverflow.com/',
                }, {
                    text: 'LeetCode',
                    link: 'https://leetcode-cn.com/',
                }, {
                    text: 'Vue.js',
                    link: 'https://cn.vuejs.org/v2/guide/',
                }, {
                    text: 'BootCDN',
                    link: 'https://www.bootcdn.cn/',
                }, {
                    text: 'Linux命令大全',
                    link: 'https://www.linuxcool.com/',
                }, {
                    text: '编程语言排行榜',
                    link: 'https://www.tiobe.com/tiobe-index/',
                }]
            },]
    },
    {text: '时间线', link: '/timeLine/', icon: 'reco-date'},

]
