import { defineConfig } from 'vitepress'

function createCommonSidebar(base) {
  return [
    {
      items: [
        { text: 'Introduction', link: `${base}/` },
        { text: 'Overview', link: `${base}/overview` },
        { text: 'Steps', link: `${base}/steps` },
        { text: 'Usage', link: `${base}/usage`},
        { text: 'Downloads', link: `${base}/downloads`}
      ]
    }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-plugin-docs/",
  title: "IBM DevOps Deploy Plugins",
  description: "Documentation for XYZ Plugins",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: {
      '/zos-dataset-writer/' : createCommonSidebar('/zos-dataset-writer'),
      '/zos-rexx/' : createCommonSidebar('/zos-rexx')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shabaz213/vitepress-plugin-docs' }
    ]
  }
})
