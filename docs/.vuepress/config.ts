import { defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default {
    title:'Erkang - Demo文档',
    base:'/vuePress/', //需要设置部署文档的文件名，1.0版本 base字段一定是需要打包的时候才开启，不需要的时候要注释掉，不然你npm跑项目就会运行不起来
    dest: './dist', 
    markdown: {lineNumbers: true},        
    head: [
      [
          // favicon.ico
          'link', {rel: 'icon', href: '/vuePress/assets/img/logo.jpg'}
      ]],
    plugins: [
      ["vuepress-plugin-auto-sidebar", {}],  backToTopPlugin(),],     
    theme: defaultTheme({
          logo: '/assets/img/logo.jpg',
          sidebarDepth:2,
          contributors:false,
          navbar: [
            { text: '主页', link: '/' },
            { text: 'MagicChecker使用指南', link: '/MagicChecker操作/MagicChecker操作.md' },
          ],
          // 你也可以直接将它设置为一个 URL
          repo: 'https://github.com/erkang1/vuePress', 
          sidebar:[
           '/MagicChecker操作/MagicChecker操作.md'
          ]
        }), 
  }