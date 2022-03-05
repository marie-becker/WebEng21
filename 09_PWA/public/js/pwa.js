document.addEventListener('DOMContentLoaded', init, false);

// followed this tutorial by Diogo Spínola
// https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/

function init() {
  if ('serviceWorker' in navigator && navigator.onLine) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((reg) => {
        console.log('Service worker registered -->', reg);
      }, (err) => {
        console.error('Service worker not registered -->', err);
      });
  }
}