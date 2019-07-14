const CACHE_NAME = 'WNDW-1';
const URLS_CACHE_ONLY = [
    "/fonts/montserrat-v13-cyrillic_latin-500.woff2",
    "/fonts/montserrat-v13-cyrillic_latin-700.woff2",
    "/fonts/montserrat-v13-cyrillic_latin-900.woff2",
    "/fonts/montserrat-v13-cyrillic_latin-regular.woff2",
    "/img/favicons/favicon.jpg",
    "/img/favicons/webclip.jpg",
];
const URLS_OVER_NETWORK_WITH_CACHE_FALLBACK = [
    "/index.html",
    "/css/main.min.css",
    "/js/main.min.js",
    "/img/banner.jpg",
    "/img/company.png",
    "/img/net.png",
    "/img/sprite.svg",
    "/img/first.jpg",
    "/img/w/w1.jpg",
    "/img/w/w2.jpg",
    "/img/w/w3.jpg",
    "/img/w/w4.jpg",
    "/img/w/w5.jpg",
    "/img/w/w6.jpg",
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(URLS_CACHE_ONLY.concat(URLS_OVER_NETWORK_WITH_CACHE_FALLBACK));
        }).catch((err) => {
            console.error(err);
            return new Promise((resolve, reject) => {
                reject('ERROR: ' + err);
            });
        })
    );
});

self.addEventListener("fetch", function (event) {
    const requestURL = new URL(event.request.url);
    if (requestURL.pathname === '/') {
      event.respondWith(getByNetworkFallingBackByCache("/index.html"));
    } else if (URLS_OVER_NETWORK_WITH_CACHE_FALLBACK.includes(requestURL.href) || URLS_OVER_NETWORK_WITH_CACHE_FALLBACK.includes(requestURL.pathname)) {
        event.respondWith(getByNetworkFallingBackByCache(event.request));
    } else if (URLS_CACHE_ONLY.includes(requestURL.href) || URLS_CACHE_ONLY.includes(requestURL.pathname)) {
        event.respondWith(getByCacheOnly(event.request));
    }
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (CACHE_NAME !== cacheName && cacheName.startsWith("WNDW")) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

/**
 * 1. We fetch the request over the network
 * 2. If successful we add the new response to the cache
 * 3. If failed we return the result from the cache
 *
 * @param request
 * @returns Promise
 */
const getByNetworkFallingBackByCache = (request) => {
    return caches.open(CACHE_NAME).then((cache) => {
        return fetch(request).then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
        }).catch(() => {
            console.log('You are in offline mode. The data may be outdated.')
            return caches.match(request);
        });
    });
};

/**
 * Get from cache
 *
 * @param request
 * @returns Promise
 */
const getByCacheOnly = (request) => {
    return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
            return response;
        });
    });
};