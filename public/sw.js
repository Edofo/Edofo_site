const BASE = location.protocol + "//" + location.host;
const PREFIX = 'V1'
const CACHED_FILES = [
    `https://pro.fontawesome.com/releases/v5.10.0/css/all.css`,

    `${BASE}/static/js/4.bca55502.chunk.js`,
    `${BASE}/static/js/0.20f95d9b.chunk.js`,
    `${BASE}/static/js/1.980ae739.chunk.js`,
    `${BASE}/static/js/5.8d023228.chunk.js`,
    `${BASE}/static/js/8.e96b15c9.chunk.js`,
    `${BASE}/static/js/7.42c6fd29.chunk.js`,
    `${BASE}/static/js/6.f4c8bab6.chunk.js`,
    `${BASE}/static/js/9.cb2685b2.chunk.js`,
    `${BASE}/static/js/runtime-main.9bbf17ba.js`,
    `${BASE}/static/css/main.e3aff902.chunk.js`,

    `${BASE}/static/css/5.5f8512bf.chunk.css`,
    `${BASE}/static/css/7.47b04a08.chunk.css`,
    `${BASE}/static/css/8.a253df3b.chunk.css`,
    `${BASE}/static/css/6.ed177ed2.chunk.css`,
    `${BASE}/static/css/main.9f11f392.chunk.css`,

    `${BASE}/static/media/edofo.620db3bd.png`,

]

self.addEventListener('install', (event) => {
    self.skipWaiting()
    event.waitUntil(
        (async () => {
            const cache = await caches.open(PREFIX);
            await cache.addAll([...CACHED_FILES, "offline.html"])
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
    console.log(`${PREFIX} Fetching : ${event.request.url}`, `Mode : ${event.request.mode}`)
    if (event.request.mode === "navigate") {
        event.respondWith(
            (async () => {
                try {
                    const preloadResponse = await event.preloadResponse
                    if (preloadResponse) {
                        return preloadResponse
                    }

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