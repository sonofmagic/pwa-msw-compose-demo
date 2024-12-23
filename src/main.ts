import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './style.scss'

registerSW({ immediate: true })
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
      url: '/mockServiceWorker.js', // import.meta.env.DEV ? '/mockServiceWorker.js' : '/sw.js',
    },
  })
}
// registerSW({ immediate: true })

let hasRendered = false
function render() {
  if (!hasRendered) {
    createApp(App).use(router).mount('#app')
    hasRendered = true
  }
}

const mocking = enableMocking()

mocking.then(() => {
  console.log('mocking finished!')
  render()
}).catch((err) => {
  console.error(err)
})
