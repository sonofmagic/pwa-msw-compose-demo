// import type { Router } from 'vue-router'
import AboutView from '@/pages/about.vue'

import HomeView from '@/pages/index.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// export function registerPWA(router: Router) {
//   router.isReady().then(async () => {
//     const { registerSW } = await import('virtual:pwa-register')
//     registerSW({ immediate: true })
//   })
// }
