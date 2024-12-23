import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    VitePWA({
      // strategies: 'injectManifest',
      // disable: true,
      registerType: 'autoUpdate',
      // selfDestroying: true,
      // workbox: {
      //   importScripts: ['/mockServiceWorker.js'],
      //   skipWaiting: true,
      //   globIgnores: ['**\/node_modules\/**\/*', 'mockServiceWorker.js'],

      // },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
      },
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
      // injectRegister: null,
    }),
    {
      name: 'test-plugin',
      enforce: 'post',
      generateBundle(_, bundles) {
        console.log(Object.keys(bundles))
      },
    },
  ],
  build: {
    minify: false,
  },
})
