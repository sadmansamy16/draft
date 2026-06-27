const CACHE_NAME = 'samy-search-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/icon.png',
  '/manifest.json',
  '/weblist.json',
  '/weblogo.json'
];

// Install event
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// Fetch event
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
