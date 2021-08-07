'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1245c6589db50c4b38ca9a5bd0dcf902",
".git/config": "85a4680b6e08e555f750797198426d1e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9b55e198443c5d263a786711602d037b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "57f8da36f9cc98ad32e52991fe9dbaff",
".git/logs/refs/heads/main": "57f8da36f9cc98ad32e52991fe9dbaff",
".git/logs/refs/remotes/origin/main": "4baf1dbc7fc247f07c0007fabaa85feb",
".git/objects/08/9006269224c3eaf4564a67cb84122ce69dfa26": "e6d6d41a3c65d369d2d87c73f24770e7",
".git/objects/0f/ca8001eb5e99a10cd43f3d48e7c145a4ef8489": "a8a25da985330dd88f6170e4175395ef",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/2b/37972ae1bcfd90c74581b3ed2c343f3054f7e5": "f345ee2e9193467e59bf76e616729e4b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/01b704cc8b83ee419b44b160b4d2105f4e52f8": "9dd065640b543a25dcc407e7421b650d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/54/346f8d7fab358b5af8841711e428a42c2bc318": "653ce79927d9ec02f7fd34da2bf7ee72",
".git/objects/5b/a760159a5d225f6e5dcd0aab95547ecb34c817": "b59efe910b8e41b2176afb43bdbbde0e",
".git/objects/5d/117b487962df7351bfd8ee8f7ca12534848a56": "94e788bbff7e15b995eca2394b5bf320",
".git/objects/6b/2c179222c2e639855f2b1fa9a8310987da9a2c": "009bcd550b518441401ac06160991693",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/ccbc29794dfc85d7fad2941b8b9bbff81ed44d": "1993ae6017211b0f68d2c4de8e5f22d6",
".git/objects/80/c19d8a7317479a1267b10a0701c6282a076fd4": "a50176c737044c8ff66e5a63f32b1fa1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/b199d296b86810988447a766262383ce413695": "391c22ef6df21604a9429bd35b602190",
".git/objects/9b/70800e060f1194d3f9dba1c5742d4d6d58d61b": "0087f73d40f104c085ca2f070fac4c41",
".git/objects/9c/d05e98353d7725e2d620725af7241c4ad09423": "5b91406851fa0eeda96cab07b6d91e6d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/0ed4946b4080c12cc3ce06d38d4e1bc770854b": "decb0e889f5d56011e482742f0f00ee4",
".git/objects/b5/fa290a7336db4c587a0aad58d1b4092c4dd4aa": "c42a24887b8ed7a5d3a0ee25f545de34",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c2/8687cc3fdcda6d346552032314ba10bc126fc4": "336d03bc96c12fe1b91fbf666a945aaf",
".git/objects/c3/e2cc3043e9bf0ae4b2616cc436df916a422948": "db872ceefcb5389c7bca0e2a9cf91b31",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/cc43c1ba727eea627e4651fcd4323db6bd6b8f": "7d6bee731c7ea909af56b330d4be7f50",
".git/refs/heads/main": "296b7fdb6dfcd88d3cca6940f29ae15f",
".git/refs/remotes/origin/main": "296b7fdb6dfcd88d3cca6940f29ae15f",
"assets/AssetManifest.json": "f3193d6bacccc03d6e0f677c8bf71dc8",
"assets/assets/animations/alien_badge.json": "c17ecc1b748ffa9a08e3bf462a69e2b8",
"assets/assets/animations/planet.json": "bf587c8fe1085882bd633c3d250635d0",
"assets/assets/animations/space_astronout.json": "f3f3685bccd001f6d76d2f84bddc7da0",
"assets/assets/animations/space_astronout_2.json": "b0d8d98afce23ea0291990ac0f2ca5aa",
"assets/assets/fonts/CalibreRegular.otf": "93957dd48040dc5deb1cd40b4385de45",
"assets/assets/fonts/CalibreSemibold.otf": "85d899ede90fe5568dad1b0438022ab3",
"assets/assets/fonts/SFMonoRegular.otf": "41b67f4d3dcf092055b37014cbe5cd05",
"assets/assets/fonts/SFMonoSemibold.otf": "ae31eb443da4810ba47c860df97548ad",
"assets/assets/images/me.png": "0a5139fb6921e20d3c0ee8c2939f7c91",
"assets/assets/images/rectangle_corner.png": "cf3187996d7cac85151b43bc36054b94",
"assets/FontManifest.json": "8e57414b6d411f3ee1f16c839d50c1aa",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f463c7ce10289d5e0be76a6d878a3321",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "59e2dd75daa0a416d2b4cdc2a85dee30",
"/": "59e2dd75daa0a416d2b4cdc2a85dee30",
"main.dart.js": "8e053243f5fd837297a2555b60439ba4",
"manifest.json": "b82a9600c61015ecfa8b2ae50166d36a",
"version.json": "66504febfb8baf00c82e6d2c503d4262"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
