import { defineConfig } from 'vitepress'

const guides = [
  { text: 'Quick Start', link: '/guide/index' },
  { text: 'Installation', link: '/guide/install' },
  { text: 'Overview', link: '/guide/overview' },
  { text: 'i18n', link: '/guide/i18n' },
  { text: 'Theming', link: '/guide/theme' },
  { text: 'Dark Mode', link: '/guide/dark' },
  { text: 'Changelog', link: '/guide/changelog' },
]

const sidebar = {
  '/guide': [
    {
      text: 'Development Guide',
      items: guides,
    },
  ],
}
export default defineConfig({
  title: 'monorepo-starter',
  description: 'monorepo-starter for web glassmorphism components generate by UnoCSS',
  head: [
    ['meta', { property: 'og:title', content: 'repo' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'monorepo-starter for web glassmorphism components generate by UnoCSS',
      },
    ],
    [
      'meta',
      { property: 'og:url', content: 'https://github.com/priority3/monorepo-starter' },
    ],
    ['link', { rel: 'icon', href: '/vite.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400;600&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
  themeConfig: {
    logo: '/vite.png',
    editLink: {
      pattern: 'https://github.com/priority3/monorepo-starter/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/priority3/monorepo-starter' }],
    algolia: {
      appId: '',
      apiKey: '',
      indexName: '',
    },
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2022-present Priority & repo Contributors',
    },
  },
})
