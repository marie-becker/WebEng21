// followed this tutorial by Diogo Spínola
// https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/

const CACHE_NAME = 'sw-cache-example';
const toCache = [
  '/',
  '/index.html',
  '/js/pwa.webmanifest',
  '/js/pwa.js',
  '/js/status.js',
  '/images/512.png',
  '/images/192.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(toCache)
      })
      .then(self.skipWaiting())
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.open(CACHE_NAME)
          .then((cache) => {
            return cache.match(event.request)
          })
      })
  )
})

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key)
            return caches.delete(key)
          }
        }))
      })
      .then(() => self.clients.claim())
  )
})
