//侧边栏
module.exports = {
    '/theme/': [
        '',
        {
            title: '主题',
            collapsable: false,//是否展开
            children: [
                'default/configuration',
                'default/page',
                'default/myConfiguration',
            ]
        },

    ],
    '/views/': [
        {
            title: '基础',
            collapsable: false,
            children: [
                'guide/installation',
                'guide/introduction',
            ]
        },{
            title: '实例方法',
            collapsable: false,
            children: [
                'guide/watch',
            ]
        },
       /* {
            title: '深入组件',
            collapsable: false,
            children: [
                '/guide/component-registration',
                '/guide/component-props',
                '/guide/component-attrs',
                '/guide/component-custom-events',
                '/guide/component-slots',
                '/guide/component-provide-inject',
                '/guide/component-dynamic-async',
                '/guide/component-template-refs',
                '/guide/component-edge-cases'
            ]
        },*/
    ],
    '/github/': [
        {
            title: 'Git操作命令表',
            collapsable: false,//是否展开
            children: [
                'git/Git',
                'git/gitbranch',
                'git/03git',
            ]
        },

    ],
}
