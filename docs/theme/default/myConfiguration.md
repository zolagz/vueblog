---
title: myConfiguration
date: 2021-09-01
sidebar: true
sidebarDepth: 5
tags:
- "myConfiguration"
- vue
---
# myConfiguration

## 配置文件
首先在你的文档目录下创建一个 `.vuepress` 目录，所有 VuePress 相关的文件都将会被放在这里。

项目结构：

```
├─ docs
│  ├─ .vuepress
│  │   ├─ config  
│  │      ├─ nav        --导航栏配置
│  │      ├─ sidebar    --侧边栏配置
│  │   ├─ public        --静态资源
│  │      ├─ img
│  │  └─ config.js
│  ├─ views         --文章存放地址
│  └─ README.md
├─ .gitignore
└─ package.json
```
## 首页

默认的主题提供了一个首页（Homepage）的布局。想要使用它，需要在你的根级 `README.md` 的  指定 `home: true`。以下是一个如何使用的例子：

``` yaml
---
home: true
heroImage: 'https://q1.qlogo.cn/g?b=qq&nk=2877406366&s=640'
heroText: VuePress
tagline: Vue 驱动的静态网站生成器
actionText: 快速上手 →
actionLink: /theme/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
  footer: MIT Licensed | Copyright © 2018-present Evan You
---
```
你可以将相应的内容设置为 `null` 来禁用标题和副标题。

## 导航栏

### 导航栏 Logo

你可以通过 `themeConfig.logo` 增加导航栏 Logo 
``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
  }
}
```
### 导航栏链接

你可以通过 `themeConfig.nav` 增加一些导航栏链接:

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
```
你可以通过 js 增加一些导航栏链接:
```js
const nav = require('./config/nav/')
module.exports = {

    themeConfig: {

        nav,//导航栏

    }
}
```
```js
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
    {text: '时间线', link: '/timeLine/', icon: 'reco-date'},

]

```
## 侧边栏

想要使 侧边栏（Sidebar）生效，需要配置 `themeConfig.sidebar`，基本的配置，需要一个包含了多个链接的数组：

``` js
// .vuepress/config.js
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
        },
      
    ],


}

```
你可以省略 `.md` 拓展名，同时以 `/` 结尾的路径将会被视为 `*/README.md`，这个链接的文字将会被自动获取到（无论你是声明为页面的第一个 header，还是明确地在 `YAML front matter` 中指定页面的标题）。如果你想要显示地指定链接的文字，使用一个格式为 `[link, text]` 的数组。