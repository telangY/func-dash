import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'func-dash',
  description: 'welcome to func-dash',
  lastUpdated: true,
  themeConfig: {
    // carbonAds: {
    //   code: 'cek1',
    //   placement: 'auto',
    // },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'github', link: 'https://github.com/wealth-light/func-dash' },
    ],
    search: {
      provider: 'local',
    },

    sidebar: [
      {
        text: 'Getting Started',
        link: '/start',
        items: [
          // { text: 'Getting Started', link: '/markdown-examples' },
          { text: 'Refenerce', link: '/start/refenerce' },
          { text: 'Install', link: '/start/install' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'Array',
        link: '/array/',
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
      {
        text: 'String',
        items: [
          { text: 'camelCase', link: '/string/camelCase' },
          { text: 'capitalize', link: '/string/capitalize' },
          { text: 'lowerCase', link: '/string/lowerCase' },
          { text: 'repeat', link: '/string/repeat' },
          { text: 'replace', link: '/string/replace' },
          { text: 'trim', link: '/string/trim' },
          { text: 'title', link: '/string/title' },
          { text: 'upperCase', link: '/string/upperCase' },

        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
