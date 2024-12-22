// import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './style.scss'

async function enableMocking() {
  // if (import.meta.env.PROD) {
  //   return
  // }

  const { worker } = await import('./mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  // worker.events.on('request:match', () => {

  // })

  return worker.start({
    serviceWorker: {
      url: import.meta.env.DEV ? '/mockServiceWorker.js' : '/sw.js',
    },
  })
}
// registerSW({ immediate: true })

enableMocking().then(() => {
  // console.log(worker.listHandlers())
  createApp(App).use(router).mount('#app')
})
