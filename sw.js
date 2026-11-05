const CACHE_NAME = 'naija-billings-v1';
const urlsToCache = [
  './index.html',
  './html2pdf.bundle.min.js',
  './icon-512.png'
];
// ... rest of the code

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});