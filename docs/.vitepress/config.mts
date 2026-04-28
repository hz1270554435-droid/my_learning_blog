import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "我的学习记录",
  description: "记录技术与知识沉淀",
  cleanUrls: true, // 开启纯净链接，完美修复 404
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    // 👇 重点修改了这里：路径必须指向 docs 文件夹 👇
    sidebar: generateSidebar({
      documentRootPath: '/docs',    // 告诉插件去 docs 目录里找文章
      useTitleFromFileHeading: true 
    }),

    // 右上角的社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})