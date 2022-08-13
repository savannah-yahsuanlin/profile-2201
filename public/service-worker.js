const CACHE_NAME = "sw-cache-example";
const toCache = [
  "/",
  "/index.html",
  "/js/status.js",
  "/style.css",
  "/bundle.js",
  "/df.webp",
  "/hp.jpeg",
  "/mask.jpeg",
  "/stat.jpeg",
  "/strategis.jpeg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(toCache);
      })
      .then(self.skipWaiting())
  );
});

self.addEventListener("fetch", function (event) {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        }
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(function (response) {
          if (
           response
          ) {
            return response;
          }
          var responseToCache = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            if (!event.request.url.startsWith("http")) {
              cache.put(event.request, responseToCache);
            }
          });
          return response;
        });
      })
    );
  }
});

//self.addEventListener('fetch', function(event) {
//    console.log('Fetch event for ', event.request.url);
//    event.respondWith(
//      caches.match(event.request).then(function(response) {
//        if (response) {
//          console.log('Found ', event.request.url, ' in cache');
//          return response;
//        }
//        console.log('Network request for ', event.request.url);
//        return fetch(event.request).then(function(response) {
//          if (response.status === 404) {
//            return caches.match('/index.html');
//          }
//          return caches.open(CACHE_NAME).then(function(cache) {
//           cache.put(event.request.url, response.clone());
//            return response;
//          });
//        });
//      }).catch(function(error) {
//        console.log('Error, ', error);
//        return caches.match('offline.html');
//      })
//    );
//  });


const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};


self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});
