import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的学习记录",
  description: "记录技术与知识沉淀",
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    // 👇 魔法核心：全自动生成侧边栏 👇
    sidebar: generateSidebar({
      documentRootPath: '/',        // 从根目录开始扫描你的所有 markdown 文件
      useTitleFromFileHeading: true // 自动把文章里的 # 一级标题作为侧边栏名字
    }),

    // 右上角的社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})