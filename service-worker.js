self.addEventListener("install", async function (e) {
  e.waitUntil(self.skipWaiting());
  console.log("[Service Worker] Installed successfully.");
});

self.addEventListener("activate", async function (e) {
  e.waitUntil(self.clients.claim());
  console.log("[Service Worker] Activated.");
});

self.addEventListener("fetch", async function (e) {
  console.log("[Service Worker] Received fetch request.");
  e.respondWith(fetch(e.request));
});
