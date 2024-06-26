import { defineConfig } from 'vitepress'

export const enConfig = defineConfig({
  lang: 'en-US',
  description: 'The modern animation engine',

  themeConfig: {
    siteTitle: 'Newcar Official Docs',
    outline: {
      label: 'On this page',
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
    editLink: {
      text: 'Suggest to this page',
      pattern: 'https://github.com/Bug-Duck/newcar-docs/tree/main/docs/:path',
    },
    nav: [
      {
        text: 'Tutorials',
        link: '/getting-started',
      },
      {
        text: 'Members',
        link: '/members',
      },
      {
        text: 'API References',
        link: 'https://apis.newcarjs.org',
      },
      {
        text: 'Playground',
        link: 'https://playground.newcarjs.org',
      },
      {
        text: 'Sponsor',
        link: 'https://afdian.net/a/newcar',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Examples',
          link: '/examples',
        },
        {
          text: 'Basic',
          items: [
            {
              text: 'Getting Started',
              link: '/getting-started',
            },
            {
              text: 'Animation',
              link: '/basic/animation',
            },
            {
              text: 'Parents-Children Widget',
              link: '/basic/parents-children-widget',
            },
            {
              text: 'Color System',
              link: '/basic/color-system',
            },
            {
              text: 'Setup Syntax',
              link: '/basic/setup',
            },
            {
              text: 'Unit',
              link: '/basic/unit',
            },
            {
              text: 'Frame-by-Frame called',
              link: '/basic/update-function',
            },
            {
              text: 'Resource Preloading',
              link: '/basic/preload',
            },
            {
              text: 'Event System',
              link: '/basic/event-system',
            },
            {
              text: 'Recorder',
              link: '/basic/recorder',
            },
            {
              text: 'Local Mode',
              link: '/basic/local-mode',
            },
          ],
        },
        {
          text: 'Custom',
          items: [
            {
              text: 'Basic Widget',
              link: '/dev/basic-widget',
            },
            {
              text: 'Composite Widget',
              link: '/dev/composite-widget',
            },
            {
              text: 'Animation Defination',
              link: '/dev/animation-defination',
            },
          ],
        },
      ],
    },
  },
})
