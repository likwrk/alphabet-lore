const contentToCache = [
  'images/mytopkid.com-cliparts-alphabet-lore-a.png',
  'images/mytopkid.com-cliparts-alphabet-lore-b.png',
  'images/mytopkid.com-cliparts-alphabet-lore-c.png',
  'images/mytopkid.com-cliparts-alphabet-lore-d.png',
  'images/mytopkid.com-cliparts-alphabet-lore-e.png',
  'images/mytopkid.com-cliparts-alphabet-lore-f.png',
  'images/mytopkid.com-cliparts-alphabet-lore-g.png',
  'images/mytopkid.com-cliparts-alphabet-lore-h.png',
  'images/mytopkid.com-cliparts-alphabet-lore-i.png',
  'images/mytopkid.com-cliparts-alphabet-lore-j.png',
  'images/mytopkid.com-cliparts-alphabet-lore-k.png',
  'images/mytopkid.com-cliparts-alphabet-lore-l.png',
  'images/mytopkid.com-cliparts-alphabet-lore-m.png',
  'images/mytopkid.com-cliparts-alphabet-lore-n.png',
  'images/mytopkid.com-cliparts-alphabet-lore-o.png',
  'images/mytopkid.com-cliparts-alphabet-lore-p.png',
  'images/mytopkid.com-cliparts-alphabet-lore-q.png',
  'images/mytopkid.com-cliparts-alphabet-lore-r.png',
  'images/mytopkid.com-cliparts-alphabet-lore-s.png',
  'images/mytopkid.com-cliparts-alphabet-lore-t.png',
  'images/mytopkid.com-cliparts-alphabet-lore-u.png',
  'images/mytopkid.com-cliparts-alphabet-lore-v.png',
  'images/mytopkid.com-cliparts-alphabet-lore-w.png',
  'images/mytopkid.com-cliparts-alphabet-lore-x.png',
  'images/mytopkid.com-cliparts-alphabet-lore-y.png',
  'images/mytopkid.com-cliparts-alphabet-lore-z.png',
  'images/u.jpg',
  'aac/a.aac',
  'aac/b.aac',
  'aac/c.aac',
  'aac/d.aac',
  'aac/e.aac',
  'aac/f.aac',
  'aac/g.aac',
  'aac/h.aac',
  'aac/i.aac',
  'aac/j.aac',
  'aac/k.aac',
  'aac/l.aac',
  'aac/m.aac',
  'aac/n.aac',
  'aac/o.aac',
  'aac/p.aac',
  'aac/q.aac',
  'aac/r.aac',
  'aac/s.aac',
  'aac/t.aac',
  'aac/u.aac',
  'aac/v.aac',
  'aac/w.aac',
  'aac/x.aac',
  'aac/y.aac',
  'aac/z.aac',
  'icons/icon36.png',
  'icons/icon48.png',
  'icons/icon72.png',
  'icons/icon96.png',
  'icons/icon44.png',
  'icons/icon92.png',
  'icons/icon512',
];

const cacheName = '6f98d43d-a3e8-4a2f-a7db-77e45c402f7b-v1';

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache).catch(console.info);
    })()
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    (async () => {
      const cache = await caches.open(cacheName);
      const r = await cache.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});
