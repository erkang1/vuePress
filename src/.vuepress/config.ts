import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from "@vuepress/plugin-search";
import { componentsPlugin } from "vuepress-plugin-components"

export default defineUserConfig({
  lang: "zh-CN",
  base: '/vuePress/',
  dest: './dist',
  title: "erkang - Demo文档",
  description: "erkang - Demo文档",
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      }
    }),
    componentsPlugin({
      rootComponents: {
        notice: [
          {
            path: "/",
            title: "👻 公告通知",
            content: "<ul><li>🚩2023/02/11  &nbsp;&nbsp;&nbsp;&nbsp;<b>新增脚本配置文档</b></li> \r\n  <li>🚩2023/01/07 &nbsp;&nbsp;&nbsp;&nbsp;新增MagicChecker使用文档</li> \r\n  <li>🚩2023/01/06 &nbsp;&nbsp;&nbsp;&nbsp;站点上线</li></ul>",
            actions: [
              {
                text: "项目地址",
                link: "https://github.com/erkang1/vuePress/tree/vusthemehope",
                type: "primary",
              },
              { text: "我知道了" },
            ],
          },
        ],
      },
    }),
  ],
  head: [
    [
      // favicon.ico
      'link', { rel: 'icon', href: '/vuePress/assets/img/logo.jpg' },
    ]],

  theme: hopeTheme({
    logo: '/assets/img/logo.jpg',
    // iconAssets: "//at.alicdn.com/t/c/font_3854936_ujp6mtnx13c.css",
    // iconAssets: "fontawesome",
    iconAssets: "iconfont",
    navbar: [
      {
        text: "🎖️ 主页",
        link: "/",
        icon: "home"
      },
      {
        text: "🥇 软件使用指南",
        icon: "workingDirectory",
        children: ["/demo/代理软件操作.md", "/demo/MagicChecker操作.md","/demo/脚本.md"],
      },
    ],

    sidebar: [
      {
        text: "🏰 关于本站",
        link: "/about.md",
        icon: "people"
      },
      {
        text: "✈️ 主流代理软件配置指南",
        link: "/demo/代理软件操作.md",
        icon: "launch"
      },
      {
        text: "🪄 MagicChecker使用指南",
        link: "/demo/MagicChecker操作.md",
        icon: "linter"
      },
      {
        text: "🤳 Fb脚本配置指南",
        link: "/demo/脚本.md",
        icon: "interact"
      }
    ],
    plugins: {
      mdEnhance: {
        // 启用 figure
        figure: true,
        // 启用图片懒加载
        imgLazyload: true,
        // 启用图片标记
        imgMark: true,
        // 启用图片大小
        imgSize: true,
        //启用标记
        mark: true,
      },
      components: {
        // 你想使用的组件
        components: [
          "VideoPlayer",
        ],
      },
    },
    repo: "https://github.com/erkang1/vuePress/tree/vusthemehope",
    repoLabel: "GitHub",
    repoDisplay: true,
  }),
  shouldPrefetch: true,
});
