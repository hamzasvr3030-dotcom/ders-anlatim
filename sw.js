/* Çevrimdışı çalışma: uygulama kabuğu önbellekte, ders içerikleri ilk açılışta saklanır. */
const SURUM = 'dersler-v2';
const KABUK = ['./', 'index.html', 'assets/style.css', 'assets/app.js', 'assets/araclar.js', 'manifest.webmanifest',
  'assets/simge/simge-192.png', 'dersler/dersler.json',
  'https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js',
  'https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SURUM).then(c => Promise.all(KABUK.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== SURUM).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const url = new URL(r.url);
  const pdf = url.pathname.endsWith('.pdf');
  // Kod ve veri: önce ağ (güncel kalsın), ağ yoksa önbellek
  e.respondWith(fetch(r).then(yanit => {
    if (yanit.ok && (!pdf || url.pathname.includes('/ozet/'))) {
      const kopya = yanit.clone();
      caches.open(SURUM).then(c => c.put(r, kopya));
    }
    return yanit;
  }).catch(() => caches.match(r).then(m => m || (r.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
