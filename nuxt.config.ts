import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1',
          type: 'module',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      githubLink: '',
      sitUrl: ''
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('el-'),
    },
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },
    domains: [
      'amplifyapp.com',
    ],
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
            dark: 'github-dark',
          },
        },
      },
    },
  },
  nitro: {
    preset: 'static'
  },
  site: {
    url: '',
    name: ''
  }
})