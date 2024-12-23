import { registerSW } from 'virtual:pwa-register'
// import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import App from './App.vue'
import { registerPWA, router } from './router'
import './style.scss'

const intervalMS = 60 * 60 * 1000

const updateSW = registerSW(
  {
    immediate: true,
    onRegistered(r) {
      r && setInterval(() => {
        r.update()
      }, intervalMS)
    },
  },
)

// const intervalMS = 60 * 60 * 1000

// const updateSW = registerSW({
//   onRegistered(r) {
//     r && setInterval(() => {
//       r.update()
//     }, intervalMS)
//   },
// })
// registerPWA()
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
      url: import.meta.env.DEV ? '/dev-sw.js?dev-sw' : '/sw.js',
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

// render()
const mocking = enableMocking()
console.log(mocking)
mocking.then(() => {
  console.log('mocking finished!')
  render()
}).catch((err) => {
  console.error(err)
})
