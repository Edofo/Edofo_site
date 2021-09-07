const BASE = location.protocol + "//" + location.host;
const PREFIX = 'V1'
const CACHED_FILES = [
    `${BASE}/assets/style.css`,
]

self.addEventListener('install', (event) => {
    self.skipWaiting()
    event.waitUntil(
        (async () => {
            const cache = await caches.open(PREFIX);
            await cache.addAll([...CACHED_FILES, "/offline.html"])
        })()
    );
    console.log(`${PREFIX} Install`)
})

self.addEventListener('activate', (event) => {
    clients.claim();
    event.waitUntil(
        (async () => {
            const keys = await caches.keys()
            await Promise.all(
                keys.map((key) => {
                    if (!key.includes(PREFIX)) {
                        caches.delete(key)
                    }
                    console.log(key)
                })
            )
        })()
    )
    console.log(`${PREFIX} Active`)
})

self.addEventListener('fetch', (event) => {
    // console.log(`${PREFIX} Fetching : ${event.request.url}`, `Mode : ${event.request.mode}`)
    if (event.request.mode === "navigate") {
        event.respondWith(
            (async () => {
                try {
                    const preloadResponse = await event.preloadResponse
                    if (preloadResponse) {
                        // cache.put(event.request, preloadResponse.clone())
                        return preloadResponse
                    }

                    // const networkResponse = await fetch(event.request)
                    // cache.put(event.request, networkResponse.clone())
                    return await fetch(event.request)
                } catch (e) {
                    const cache = await caches.open(PREFIX);
                    return await cache.match('/offline.html')
                }
            })()
        )
    } else if (CACHED_FILES.includes(event.request.url)) {
        event.respondWith(caches.match(event.request))
    }
})