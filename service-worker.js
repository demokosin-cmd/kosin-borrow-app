const CACHE_NAME = "kosin-github-frontend-v6";

const STATIC_ASSETS = [
  "./manifest.webmanifest",
  "./kosin-app-icon-180.png",
  "./kosin-app-icon-192.png",
  "./kosin-app-icon-512.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(keys) {
        return Promise.all(
          keys
            .filter(function(key) {
              return key !== CACHE_NAME;
            })
            .map(function(key) {
              return caches.delete(key);
            })
        );
      })
      .then(function() {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function(event) {
  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  // HTML/navigation always network-first
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .catch(function() {
          return caches.match("./");
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function(cached) {
        return cached || fetch(event.request);
      })
  );
});
