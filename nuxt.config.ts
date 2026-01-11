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
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('el-'),
    },
  },
  image: {
    provider: 'awsAmplify',
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },
    domains: [
      'raw.githubusercontent.com',
      'github.com',
      'user-images.githubusercontent.com',
    ],
    awsAmplify: {
      formats: ['image/webp', 'image/avif', 'image/png', 'image/jpeg'],
    },
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
})
