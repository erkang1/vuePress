import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: "zh-CN",
  base: '/vuePress/',
  dest: './dist',
  title: "erkang - Demo文档",
  description: "erkang - Demo文档",
  head: [
    [
      // favicon.ico
      'link', { rel: 'icon', href: '/vuePress/assets/img/logo.jpg' },
    ]],

  theme: hopeTheme({
    logo: '/assets/img/logo.jpg',
    // iconAssets: "//at.alicdn.com/t/c/font_3854936_ujp6mtnx13c.css",
    iconAssets:"fontawesome",
    navbar: [
      {
        text: "主页",
        link: "/",
        icon: "home"
      },
      {
        text: "软件使用指南",
        icon: "paperclip",
        children: ["/demo/代理软件操作.md", "/demo/MagicChecker操作.md"],
      },
    ],

    sidebar: [
      {
        text: "关于本站",
        link: "/about.md",
        icon: "user"
      },
      {
        text: "主流代理软件配置指南",
        link: "/demo/代理软件操作.md",
        icon: "rocket"
      },
      {
        text: "MagicChecker使用指南",
        link: "/demo/MagicChecker操作.md",
        icon: "wand-magic-sparkles"
      },
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
      },
      
    },
  repo: "https://github.com/erkang1/vuePress/tree/vusthemehope",
  repoLabel: "GitHub",
  repoDisplay: true,
  }),
  shouldPrefetch: true,
});
