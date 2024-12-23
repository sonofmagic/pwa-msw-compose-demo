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
      workbox: {
        importScripts: ['/mockServiceWorker.js'],
        skipWaiting: true,
        globIgnores: ['**\/node_modules\/**\/*', 'mockServiceWorker.js'],
      },
      devOptions: {
        enabled: true,
      },
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
