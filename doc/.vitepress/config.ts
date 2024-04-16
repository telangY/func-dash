import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'dashx document',
  description: 'welcome to dashx',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Refenerce', link: '/start/refenerce' },
          { text: 'Install', link: '/start/install' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'Array',
        items: [
          { text: 'sort', link: '/array/sort' },
        ],
      },
      {
        text: 'Math',
        items: [
          { text: 'add', link: '/math/add' },
          { text: 'ceil', link: '/math/ceil' },
          { text: 'sum', link: '/math/sum' },
          { text: 'sumBy', link: '/math/sumBy' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
