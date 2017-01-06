const CACHE_NAME = 'startup-cache-v0.0.1';

/**
 * Initially adds the files used to the cache
 */
let handleInstall = function(event) {
    var urlsToCache = [
        'index.html',
        'dist/main.js',
        'assets/favicons/basic.ico',
        'assets/favicons/transparent.ico',
    ];

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    )

};

/**
 * Handles the request in the same way as stale-while-revalidate
 */
let handleFetch = function (event) {
    event.respondWith(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                var fetchPromise = fetch(event.request).then(function (networkResponse) {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
                return response || fetchPromise;
            });
        })
    );
};

self.addEventListener('install', handleInstall);
self.addEventListener('fetch', handleFetch);
