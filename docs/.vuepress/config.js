const { description } = require('../../package')

module.exports = {
  title: 'Awesome Javascript',
  description: description,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: `https://user-images.githubusercontent.com/10558363/90632303-64853780-e24e-11ea-8ba3-a425efc0f6b6.png` }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }]
  ],
  base: '/',
  themeConfig: {
    activeHeaderLinks: true,
    repo: 'kungfu321/awesome-javascript',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last Updated',
    nav: [],
    sidebar: [
      {
        title: 'Resources',
        collapsable: false,
        children: [
          '/resources/package-managers',
          '/resources/loaders',
          '/resources/bundlers',
          '/resources/type-checkers',
          '/resources/testing-frameworks',
          '/resources/qa-tools',
          '/resources/mvc-frameworks-and-libraries',
          '/resources/templating-engines',
          '/resources/articles-and-posts',
          '/resources/data-visualization',
          '/resources/timeline',
          '/resources/spreadsheet',
          '/resources/editors',
          '/resources/documentation',
          '/resources/functional-programming',
          '/resources/reactive-programming',
          '/resources/data-structure',
          '/resources/date',
          '/resources/string',
          '/resources/number',
          '/resources/storage',
          '/resources/color',
          '/resources/i8n-and-l10n',
          '/resources/routing',
          '/resources/security',
          '/resources/log',
          '/resources/regexp',
          '/resources/voice-command',
          '/resources/api',
          '/resources/streaming',
          '/resources/vision-detection',
          '/resources/machine-learning',
          '/resources/browser-detection',
          '/resources/benchmark',
          '/resources/code-highlighting',
          '/resources/loading-status',
          '/resources/keyboard-wrappers',
          '/resources/tours-and-guides',
          '/resources/notifications',
          '/resources/sliders',
          '/resources/range-sliders',
          '/resources/form-widgets',
          '/resources/tips',
          '/resources/modals-and-popups',
          '/resources/scroll',
          '/resources/menu',
          '/resources/table-grid',
          '/resources/frameworks',
          '/resources/boilerplates',
          '/resources/gesture',
          '/resources/maps',
          '/resources/video-audio',
          '/resources/typography',
          '/resources/animations',
          '/resources/image-processing',
          '/resources/es6',
          '/resources/generators',
          '/resources/sdk',
          '/resources/misc',
          '/resources/podcasts',
          '/resources/worth-reading',
          '/resources/other-awesome-lists',
        ]
      }
    ],
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}
