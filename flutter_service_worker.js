'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "48f9158213a6e035eda136f1f056ba44",
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
".git/index": "a118b43a0d5af9ee9617c6cf02e2bb23",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a15b1bdc4496b05295018d8f677d9e09",
".git/logs/refs/heads/main": "a15b1bdc4496b05295018d8f677d9e09",
".git/logs/refs/remotes/origin/main": "df083f1e865cbab1806f17571f6a8225",
".git/objects/08/13eba7d61a1854a510b270730f5e46c55a0a61": "6e8f0c03fdf09ccdf30e1448b3dd14b4",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/9006269224c3eaf4564a67cb84122ce69dfa26": "e6d6d41a3c65d369d2d87c73f24770e7",
".git/objects/0b/692cc0e9dfc34762e4e91f7c499c2bbcfe501b": "0525475fc5d6a10b9590f977dc9438d1",
".git/objects/0b/89c1bc53681cd9a6ad49239d31b7e819ef479d": "a8b5aab1fcdca9f2482c6e2390273585",
".git/objects/0d/85e64ff930fa01403922b6a02cf7c14cdda0d3": "2ae6b987350037350320ac3c7f050ea5",
".git/objects/0f/ca8001eb5e99a10cd43f3d48e7c145a4ef8489": "a8a25da985330dd88f6170e4175395ef",
".git/objects/19/6d96684e77e61d8fe37289dc65c6733391a424": "023e83a6bf419528f1367b4d0a19f3ad",
".git/objects/1d/9a25bb82e2e08a8760c6ed434a9989c6ea8231": "9f7f5d9adcddfa2278d4b9aae6ab7ace",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/2b/37972ae1bcfd90c74581b3ed2c343f3054f7e5": "f345ee2e9193467e59bf76e616729e4b",
".git/objects/31/c948b6e08b96b5ea55437e70992cbba1e32d01": "0c11a4220726b4f33ec311fb856df2dd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/7822f45c3a58c3699e3227ebcd0e5bf038d53e": "9a7f10f8cefc6d2017406893da87d356",
".git/objects/38/01b704cc8b83ee419b44b160b4d2105f4e52f8": "9dd065640b543a25dcc407e7421b650d",
".git/objects/3a/370c6ea02d2750980a8b0cea780e72482d1930": "5dce851a9b7e184cd4fcb251a73d1b6d",
".git/objects/3d/4faabe85940367f9849517bf6a2fb10f328823": "c8eb72a60406c5c4998eabc0d39b9576",
".git/objects/42/e0156e8d723a3bd87758a7b5d7c51a44c86a97": "95c4f869b44ef4de4daafe956889d0bd",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/6f9f690aba0574305ca6d99e4ef0ddf069e95c": "482da1f33151214e79d27474c9c26ad7",
".git/objects/52/598f25061ac189386fe16c7dc3b29e623bb315": "980241e01edd3ee48c55ddfeb326e9f0",
".git/objects/52/fbcdc88eb418d87b43cf6c3b1d6f52dc80c927": "8636f39d0ee1b0bfa000ff5382e25433",
".git/objects/54/346f8d7fab358b5af8841711e428a42c2bc318": "653ce79927d9ec02f7fd34da2bf7ee72",
".git/objects/5b/a760159a5d225f6e5dcd0aab95547ecb34c817": "b59efe910b8e41b2176afb43bdbbde0e",
".git/objects/5b/beb49b65e4cc08ae0363957a4ee43ee7795e71": "e2db050375cc029e308880d3ae5f1853",
".git/objects/5d/117b487962df7351bfd8ee8f7ca12534848a56": "94e788bbff7e15b995eca2394b5bf320",
".git/objects/62/0312d552b264525d57271d1998c507a9c5d5da": "a01a846df517a86f7b4e676da2258ce6",
".git/objects/63/84d7ce84534d70411ba1b5207bae12619477b8": "ca05a6d17303ee09b00e1766b4387209",
".git/objects/69/7adb6d9c20eb6639960c34bc20d4a9d0699f2c": "a74295860f9dddd67767855df8e1c0eb",
".git/objects/6b/2c179222c2e639855f2b1fa9a8310987da9a2c": "009bcd550b518441401ac06160991693",
".git/objects/6f/0781bfbae1d79e3c05e961bace9cee51344a27": "747383e2bbb7250b471d927490b3a5fc",
".git/objects/76/bade5b5c169ef9e43c595aed5cda87531a7589": "2e32d6608c3377d9efe452619431d4e1",
".git/objects/77/6cf88dcd89af6bef8bb6105aec79327ece1c4f": "c19a0ef3b889e72d19f41d511e9483df",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/ccbc29794dfc85d7fad2941b8b9bbff81ed44d": "1993ae6017211b0f68d2c4de8e5f22d6",
".git/objects/7c/cafa227a4cef5b45034212948cb572970239fd": "66770f6673d64e784c8251f0962e8ade",
".git/objects/7f/d113b1b8a88741e61c3d68fbfb196b2914e01c": "6fe408cf3f29d592cfd210b3f3ffaa1d",
".git/objects/80/c19d8a7317479a1267b10a0701c6282a076fd4": "a50176c737044c8ff66e5a63f32b1fa1",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/88/1f0d961df5922a236a5f5e5ab0583f765be129": "02074fa243b2a14ce9d267fbc556e3ae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d280c30997f69b70a48c51a3d38469ee63d639": "4cc6cdeb55009982f0706e05a3cc62d0",
".git/objects/8f/44fbbd3eaa833d0835ccd25b70befe40eaf5b9": "2c1f103e2870c4b485ffdd1bfd1846e5",
".git/objects/90/b199d296b86810988447a766262383ce413695": "391c22ef6df21604a9429bd35b602190",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/94/a771c88351d0ddbb2f79532ef8efe4ef1fd032": "0e102f352e8729898fbd51af988b5f27",
".git/objects/95/b21b4dd2e5f9d80dd48dd12eb026aa3b5efbf7": "c48816c3960c886b11cebe61b1cc192b",
".git/objects/96/df2ca4c272155f1e8dafb39cdc3abb47fef7d6": "24d4ce12312c457376990759bcf4c140",
".git/objects/9b/70800e060f1194d3f9dba1c5742d4d6d58d61b": "0087f73d40f104c085ca2f070fac4c41",
".git/objects/9c/d05e98353d7725e2d620725af7241c4ad09423": "5b91406851fa0eeda96cab07b6d91e6d",
".git/objects/9f/bb1046c377199a24aa6f3b8fd88b59b6cdbae9": "1bf2cb0c48f3bf12062bf8461fccfecb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/01f14853ce3f9bb24348ee10285f2c21cccbb1": "69db28ae3b915389972a068674311335",
".git/objects/a2/34058cc53115344f7eeba2b2c8baf6ac46e9dd": "4072cfa022a309e098a80f0969a884f4",
".git/objects/a6/f0887682a50e0572e9cc8394e34f1bf438ce4a": "54debf5262de86da17dffd998f2ae129",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/0ebf839710e1c126fa1e513513851e44e2e5bf": "f057090c9e57d7c84a6295c19c94016b",
".git/objects/b3/0ed4946b4080c12cc3ce06d38d4e1bc770854b": "decb0e889f5d56011e482742f0f00ee4",
".git/objects/b5/fa290a7336db4c587a0aad58d1b4092c4dd4aa": "c42a24887b8ed7a5d3a0ee25f545de34",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b8/e7e52f9b2c941b36fd21426ee245e6fe4909c8": "554698b2cfa93f587270b467ef6a586c",
".git/objects/c0/b7d2f591d415be39718c6d5997d950632cc883": "263af4994271f96e36f6d86246077e10",
".git/objects/c2/8687cc3fdcda6d346552032314ba10bc126fc4": "336d03bc96c12fe1b91fbf666a945aaf",
".git/objects/c3/e2cc3043e9bf0ae4b2616cc436df916a422948": "db872ceefcb5389c7bca0e2a9cf91b31",
".git/objects/c9/d40853d177e6f8af079c1c0a52ba2b66856b5a": "8890689cfe6f1d0aa0a9cdb200ecb339",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/d1/9e571a3d5f4fa5993a71d1b82d78cf6a3daf24": "d1cb64666296a951e3611d009795f64d",
".git/objects/d3/9a008236ecea1fe0eecf7d2c775bc2088da1c4": "7ead306b4aefd687c30b61790accd4be",
".git/objects/da/62ee25836839dead9524c584f0804fc78e1823": "237e6ade1f4574d7a94207293b19ac81",
".git/objects/df/b0eb2689d42330ace13a29fd5620b22d66908c": "e23d8b42ddef8fc10fcb31266036fa5f",
".git/objects/e0/2f6b03931db05cddab500b98fedb57b48ee8eb": "07e2842bca9d292ca70361810d3e3981",
".git/objects/e0/96849249a067777b45a48d9913d54a4891bf0a": "5f45d786f570aa2bf595ea9715d83909",
".git/objects/e1/175318ad7a89e1091d0de04a25385fc5cfa7ce": "a6269ac32590fd8b94057d515e4c08e4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/cc43c1ba727eea627e4651fcd4323db6bd6b8f": "7d6bee731c7ea909af56b330d4be7f50",
".git/objects/f0/065420596906b7aa8b5b1a75bc921be0f06c4a": "2f41f985e5f7d9edb1f666556014fa47",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f6/d275122dc8c7c8813fcd2bb2c1231ecb9a7b5f": "ff44833bc59f3c6350cc915a6b28e5df",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/refs/heads/main": "77cabf2ab449119e028655df5b3e4342",
".git/refs/remotes/origin/main": "77cabf2ab449119e028655df5b3e4342",
"assets/AssetManifest.json": "efb29ae04e9263f2418aa2a2ba3ee008",
"assets/assets/animations/alien_badge.json": "c17ecc1b748ffa9a08e3bf462a69e2b8",
"assets/assets/animations/planet.json": "bf587c8fe1085882bd633c3d250635d0",
"assets/assets/animations/space_astronout.json": "f3f3685bccd001f6d76d2f84bddc7da0",
"assets/assets/animations/space_astronout_2.json": "b0d8d98afce23ea0291990ac0f2ca5aa",
"assets/assets/fonts/CalibreRegular.otf": "93957dd48040dc5deb1cd40b4385de45",
"assets/assets/fonts/CalibreSemibold.otf": "85d899ede90fe5568dad1b0438022ab3",
"assets/assets/fonts/SFMonoRegular.otf": "41b67f4d3dcf092055b37014cbe5cd05",
"assets/assets/fonts/SFMonoSemibold.otf": "ae31eb443da4810ba47c860df97548ad",
"assets/assets/images/folks_1.jpg": "e6943cfbc87ace21e345ba7a9a71b139",
"assets/assets/images/folks_2.jpg": "367aea18c446a15050963f7dc633f120",
"assets/assets/images/folks_3.jpg": "ebdbca1a68a6cdeca287fa342950ce8f",
"assets/assets/images/me.png": "0a5139fb6921e20d3c0ee8c2939f7c91",
"assets/assets/images/phone_template.png": "4ad4faf6682a4af5b7eda159a0e0b4d1",
"assets/assets/images/rectangle_corner.png": "cf3187996d7cac85151b43bc36054b94",
"assets/assets/images/sappira_1.jpg": "1fd2a3756f6a449448e02ff3a86f8fcb",
"assets/assets/images/sappira_2.jpg": "303fdd11ca1d2753ca5bc0a7f2edaf4a",
"assets/assets/images/sappira_3.jpg": "430dc5bf79c54d576ff01da1a1af67d6",
"assets/FontManifest.json": "8e57414b6d411f3ee1f16c839d50c1aa",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1e1c1ae2e6f59582da662019fd5e7049",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5b31267e2b6a9069db5ae9a9f9efa8d1",
"/": "5b31267e2b6a9069db5ae9a9f9efa8d1",
"main.dart.js": "f61dc3829e177e55f0d7fde6f579477b",
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
