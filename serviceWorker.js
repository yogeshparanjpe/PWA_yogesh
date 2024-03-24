var staticCacheName = 'pwa';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
        return cache.addAll([
            "/",
        ]);
        }
    ));
}
);

self.addEventListener('fetch', function(event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
        }
    ));
    }   
);