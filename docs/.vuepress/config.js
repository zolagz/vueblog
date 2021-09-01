const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')

module.exports = {
    //theme: 'reco',
    title: "VuePress",
    description: 'Vue 驱动的静态网站生成器',
    themeConfig: {
        logo: '/Hfc.gif',//导航栏左侧可以显示logo,
        nav,//导航栏
        sidebar,//侧边栏
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        smoothScroll: true,
        sidebarDepth: 2,

        //暗色模式适配
        mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示



        // 备案
        record: 'ICP 备案文案',
        recordLink: 'ICP 备案指向链接',
        cyberSecurityRecord: '公安部备案文案',
        cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2021'
    }
}