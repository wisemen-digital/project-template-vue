/* eslint-disable node/prefer-global/process */
import ImportMetaEnvPlugin from '@import-meta-env/unplugin'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        silenceDeprecations: [
          'legacy-js-api',
        ],
      },
    },
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
    BUILD_COMMIT: JSON.stringify(process.env.BUILD_COMMIT ?? 'undefined'),
    BUILD_NUMBER: JSON.stringify(process.env.BUILD_NUMBER ?? '0'),
    BUILD_TIMESTAMP: JSON.stringify(process.env.BUILD_TIMESTAMP ?? 'undefined'),
  },
  plugins: [
    ImportMetaEnvPlugin.vite({
      env: '.env',
      example: '.env.example',
    }),
    viteCompression(),
    VitePWA({
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
      ],
      injectRegister: 'auto',
      manifest: {
        name: 'Project template',
        background_color: '#ffffff',
        display: 'fullscreen',
        icons: [
          {
            sizes: '512x512',
            src: 'favicon_512x512.png',
            type: 'image/png',
          },
          {
            sizes: '192x192',
            src: 'favicon_192x192.png',
            type: 'image/png',
          },
        ],
        short_name: 'Project template',
        theme_color: 'rgb(23, 23, 23)',
      },
      registerType: 'prompt',
      strategies: 'generateSW',
      workbox: {
        navigateFallbackDenylist: [
          /api/,
        ],
      },
    }),
    vue({
      script: {
        defineModel: true,
      },
    }),
    sentryVitePlugin({
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
      disable: process.env.VITE_SENTRY_AUTH_TOKEN === undefined,
      errorHandler(error) {
        console.error('SentryVitePlugin error:', error)
      },
      org: process.env.VITE_SENTRY_ORG,
      project: process.env.VITE_SENTRY_PROJECT,
      url: process.env.VITE_SENTRY_URL,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
})
