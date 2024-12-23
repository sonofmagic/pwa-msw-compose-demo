import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/index.vue') },
  { path: '/about', component: () => import('@/pages/about.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export function registerPWA() {
  router.isReady().then(async () => {
    const { registerSW } = await import('virtual:pwa-register')
    registerSW({ immediate: true })
  })
}
