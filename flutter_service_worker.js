'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "934e1d64acf947a2fd9334f10595ed58",
"assets/AssetManifest.bin.json": "2a181571cd03f6a431e46520399e92f4",
"assets/AssetManifest.json": "5c57464b1c9d5947a91ff3226bd07bad",
"assets/assets/animations/astronout-background.json": "f3f3685bccd001f6d76d2f84bddc7da0",
"assets/assets/animations/astronout-person.json": "1a3931450ee9a8dc07e84e536dd6aeef",
"assets/assets/animations/astronout-reading.json": "b0d8d98afce23ea0291990ac0f2ca5aa",
"assets/assets/animations/astronout-working.json": "056f203c1fc9b2061d57663a31ab7644",
"assets/assets/animations/blinking-stars.json": "50970f6fef3088aa13dc2e73a71be174",
"assets/assets/animations/planet.json": "bf587c8fe1085882bd633c3d250635d0",
"assets/assets/animations/waving-hand.json": "63eb44d90025a8cf55fc625f73108e52",
"assets/assets/fonts/futura/Futura-Bold-Italic.ttf": "6e08944ccb269cdd3fccf899df49102c",
"assets/assets/fonts/futura/Futura-Bold.ttf": "4c62644b159530ff6214336f8cfb1d32",
"assets/assets/fonts/futura/Futura-Italic.ttf": "95d5a4388d9996dcf2bcebf31c5ceea1",
"assets/assets/fonts/futura/Futura-Light-Italic.ttf": "8b35dec4a805fe9294ad31bd421f8e7b",
"assets/assets/fonts/futura/Futura-Light.ttf": "e1da9c1e1974d9f2a9095ce4ae7af771",
"assets/assets/fonts/futura/Futura.ttf": "9a1626276b430d216809407c3fbcda75",
"assets/assets/fonts/strenuous/Strenuous-Bold.otf": "52ad64c0759bc867c32ad9a46c648cab",
"assets/assets/fonts/strenuous/Strenuous.otf": "794d9ce07831b05a744e7099d61e80eb",
"assets/assets/images/about-background-deco.png": "a0933896f88e7799b0319eed786ea3d2",
"assets/assets/images/bg_sec04.png": "ce6645c9816ef067783d1c0bc91dc20b",
"assets/assets/images/circle-deco.svg": "3c4de053071401789b9edd80ddf5767e",
"assets/assets/images/clouds1.png": "7209f1c5118077356b5c3326e12c8c1d",
"assets/assets/images/clouds2.png": "75fee3b1d1a7407a4a341783f21a5cc1",
"assets/assets/images/clouds3.png": "c1c2d836591d59b5079c25868f386273",
"assets/assets/images/cv-button.png": "1d3b1df004218589a56ea8305fcc19a2",
"assets/assets/images/deco_title_u.svg": "dfaa98a7a769688050eb9e593f098f4a",
"assets/assets/images/folks_1.jpg": "e6943cfbc87ace21e345ba7a9a71b139",
"assets/assets/images/folks_2.jpg": "367aea18c446a15050963f7dc633f120",
"assets/assets/images/folks_3.jpg": "ebdbca1a68a6cdeca287fa342950ce8f",
"assets/assets/images/fou-fgo.gif": "9eda3528ec2f106888199c792bddc17f",
"assets/assets/images/green-wave-background.webp": "82a2f4a4499622e541914edea9452464",
"assets/assets/images/line-horizontal-deco.webp": "44231d8c663c49d8277582661d91deb2",
"assets/assets/images/line-sizzle-background.svg": "4506bacd158d4d313a9a47bdd161731a",
"assets/assets/images/line-vertical-deco.png": "ffb90e2bec497a3e27642fd2c2778bbc",
"assets/assets/images/line-wave-background.svg": "db2db2f18587a4ab59dbf7b0a6fe118a",
"assets/assets/images/logo-mekari-flex.webp": "da65f1c8610d77a66d7679d3e0f7175e",
"assets/assets/images/magic-pattern.png": "dc256ae67953bde20923e58ccf21e94a",
"assets/assets/images/mask_bottom.png": "ebf74fc44c5cfc30eefcd103a131808e",
"assets/assets/images/mask_top.png": "8ef791b8e9627bffe5ae3df72b38d8e8",
"assets/assets/images/mekari-fam.png": "9815ec90b90a55a5d4e3c1b83d040346",
"assets/assets/images/menu-button.png": "10a0702f481b102f23b763af9078cdc5",
"assets/assets/images/name.png": "ffeb26da88021b9cfb593361e6f7f928",
"assets/assets/images/noise.webp": "4c499fe2176aa3abefe5dc58ad850d92",
"assets/assets/images/page1.png": "5ef05f73f5329b25746ad817d422ee67",
"assets/assets/images/page2.png": "9d0743784c6ca9b3b6ba86716d03b633",
"assets/assets/images/page3.png": "e62403ea88116718943ef49f90d826a1",
"assets/assets/images/phone_template.png": "4ad4faf6682a4af5b7eda159a0e0b4d1",
"assets/assets/images/plus-repeat-background.png": "80d0dc199f8bfda9ad5f19c0b2d29aed",
"assets/assets/images/sappira_1.jpg": "1fd2a3756f6a449448e02ff3a86f8fcb",
"assets/assets/images/sappira_2.jpg": "303fdd11ca1d2753ca5bc0a7f2edaf4a",
"assets/assets/images/sappira_3.jpg": "430dc5bf79c54d576ff01da1a1af67d6",
"assets/assets/images/scroll-down.gif": "3a0a6b41ce56a2e101e48d32d3dd9ecb",
"assets/assets/images/square-deco.svg": "766ca6332b070af6c012bde2283e475a",
"assets/assets/images/star.png": "9b57ebd146f50f1ded5d10330c31dd7b",
"assets/FontManifest.json": "864198fff0daf346bcd99d26d6e628be",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "4e80044b22b613d3021721e328297173",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "89f6a129fe93cb09016de010c86c0682",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "931cac629e8f56ce3f4548b0d79e83a8",
"/": "931cac629e8f56ce3f4548b0d79e83a8",
"main.dart.js": "89b151792710593ed73945e137100b28",
"main.dart.mjs": "042f8b5cbe330650253f88b775ae6fce",
"main.dart.wasm": "806edfaf49b71b2b2e532cecf8d6ddec",
"manifest.json": "88771d48d988ad2a9537fa710c1dc0bb",
"version.json": "12a92ef79835b40a6093bcc932b54998"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
