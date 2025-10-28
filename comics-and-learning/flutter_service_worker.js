'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "51904436fd5dc9bf1a8009ace1679f8b",
"assets/AssetManifest.bin.json": "b158098b579180395524af4fdda03db8",
"assets/AssetManifest.json": "a7246a41700680c03132fd673747e8a3",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/courses/AN/Aguia.Negra.67-01.jpg": "34efe4a59b4503ecc4d2490a0383175a",
"assets/assets/images/courses/AN/Aguia.Negra.67-02.jpg": "dfe53228e852506b80c1c9f7259a48e4",
"assets/assets/images/courses/AN/Aguia.Negra.67-03.jpg": "19aabd13658382fee8b5644adf35a4f7",
"assets/assets/images/courses/AN/Aguia.Negra.67-04.jpg": "711b38a6b7251a40e5432915cda2b00b",
"assets/assets/images/courses/AN/Aguia.Negra.67-05.jpg": "0e60bb1e2063f0124314726b4bc635e1",
"assets/assets/images/courses/AN/Aguia.Negra.67-06.jpg": "34020f1ff5d0b70b1b411760fc7ad41e",
"assets/assets/images/courses/AN/Aguia.Negra.67-07.jpg": "912f7a9a3b4e3681ec71244c3f761459",
"assets/assets/images/courses/AN/Aguia.Negra.67-08.jpg": "33c54e5cc3c772c854a87a54684fc1ff",
"assets/assets/images/courses/AN/Aguia.Negra.67-09.jpg": "3e58d0c658921f6ca2f28ab2baff5f5b",
"assets/assets/images/courses/AN/Aguia.Negra.67-10.jpg": "f89276324a2c09bbe92987083c1360d2",
"assets/assets/images/courses/AN/Aguia.Negra.67-11.jpg": "bc5c45ab86d0399d86210088e96c5d28",
"assets/assets/images/courses/AN/Aguia.Negra.67-12.jpg": "62685a3b0a897c7a34a9c4b2ceb77dea",
"assets/assets/images/courses/AN/Aguia.Negra.67-13.jpg": "76643c11932bbc1265003d35036795cf",
"assets/assets/images/courses/AN/Aguia.Negra.67-14.jpg": "f837c0ea5d1ddd462fc713710b94941c",
"assets/assets/images/courses/AN/Aguia.Negra.67-15.jpg": "d24e83b50569211ba092633769ac3725",
"assets/assets/images/courses/AN/Aguia.Negra.67-16.jpg": "72b6b82c7de5b09b5a8d7de8506ccadb",
"assets/assets/images/courses/AN/Aguia.Negra.67-17.jpg": "620acd5a7142944b936f0c41e1e7691d",
"assets/assets/images/courses/AN/Aguia.Negra.67-18.jpg": "83bc59a9e9d8e7a6a95934e444c44fbc",
"assets/assets/images/courses/AN/Aguia.Negra.67-19.jpg": "ec38aef0c1e47fbf8a8a33235a44e40b",
"assets/assets/images/courses/AN/Aguia.Negra.67-20.jpg": "fd615645697075dc161393de38d4fc30",
"assets/assets/images/courses/AN/Aguia.Negra.67-21.jpg": "2a2ad869c0bc0389ea9005c82ced1eeb",
"assets/assets/images/courses/AN/Aguia.Negra.67-22.jpg": "ebcd5fa36cd1ebec95f7c86298f514aa",
"assets/assets/images/courses/AN/Aguia.Negra.67-23.jpg": "163a98e6726eb845999c473a8ba4bb23",
"assets/assets/images/courses/AN/Aguia.Negra.67-24.jpg": "26b7ff59b9e6f4028c987b39ba6711c6",
"assets/assets/images/courses/AN/Aguia.Negra.67-25.jpg": "004a02215233777b02021ebc83abcfd4",
"assets/assets/images/courses/AN/Aguia.Negra.67-26.jpg": "bdaddc048a3cd82ed00fe193ce1cb597",
"assets/assets/images/courses/AN/Aguia.Negra.67-27.jpg": "e00488d5ad5d7d3792de569354c8cfc8",
"assets/assets/images/courses/AN/Aguia.Negra.67-28.jpg": "4a54e320886f9ba7648a123a958542ce",
"assets/assets/images/courses/AN/Aguia.Negra.67-29.jpg": "1093a96a2434ddbc373e2b7d85cd3eb3",
"assets/assets/images/courses/AN/Aguia.Negra.67-30.jpg": "beb654f10987718519de8d6c3e043665",
"assets/assets/images/courses/AN/Aguia.Negra.67-31.jpg": "aaaf5813f8e2399d758160dd95791236",
"assets/assets/images/courses/AN/Aguia.Negra.67-32.jpg": "bc25092fd719f589502bdfe995e94403",
"assets/assets/images/courses/AN/Aguia.Negra.67-33.jpg": "bcc4579d93dd41ab34d108d2df938b09",
"assets/assets/images/courses/AN/Aguia.Negra.67-34.jpg": "04801b7ca22cff58b7bd000fb665444b",
"assets/assets/images/courses/AN/Aguia.Negra.67-35.jpg": "cbe7205011c8ad0d04acc02237616a0f",
"assets/assets/images/courses/AN/Aguia.Negra.67-36.jpg": "ac019fa8ef98d05c0dfde793c5964a6a",
"assets/assets/images/courses/dr.ross/image1.png": "05fd23da593b9c0a995339ba1050e0fa",
"assets/assets/images/courses/dr.ross/image10.png": "f91f5cd8b136f109bc03ebacda34821a",
"assets/assets/images/courses/dr.ross/image11.png": "f84716c72adc9d952859cca60e32c6d2",
"assets/assets/images/courses/dr.ross/image12.png": "1090f552479076335501f21701e7ce3c",
"assets/assets/images/courses/dr.ross/image13.png": "a9a9915f6571d0d5d794f9835d9dbf80",
"assets/assets/images/courses/dr.ross/image14.png": "167eac6a77930ba414d6dd00b71a07fe",
"assets/assets/images/courses/dr.ross/image15.png": "c5ef5d61e265f5acf7d6a8ad54ecb489",
"assets/assets/images/courses/dr.ross/image2.png": "3a07777be255185c8b850fffd0ac8080",
"assets/assets/images/courses/dr.ross/image3.png": "7f4e89c61618e858b858c1929efac90e",
"assets/assets/images/courses/dr.ross/image4.png": "2c0be3646eb84c8e05574343f1df15d8",
"assets/assets/images/courses/dr.ross/image5.png": "39af2a81ab35a451dc8f82785ba3c376",
"assets/assets/images/courses/dr.ross/image6.png": "f3bd48c1d3df0be6b05262b4af549e8e",
"assets/assets/images/courses/dr.ross/image7.png": "7dd2bb76a1a5b49aa4b9927bbe001f9b",
"assets/assets/images/courses/dr.ross/image8.png": "3a8a6583eeb8da2ed97a15806d09e988",
"assets/assets/images/courses/dr.ross/image9.png": "85e345a602f7544683b8a5bafbb34084",
"assets/assets/images/courses/html.png": "007c3d7419af9c93da544c6dca88437d",
"assets/assets/images/courses/java.png": "ac77da81e506a2e517658c345465951a",
"assets/assets/images/courses/javascript.png": "868285654dc66e504c2b7aae3ee4e020",
"assets/assets/images/courses/python.png": "a398ef5d784b343303fb0933cff1840b",
"assets/assets/images/courses/TM/TM-02-01.jpg": "4150148a4c086d8e5dc412950674650a",
"assets/assets/images/courses/TM/TM-02-02.jpg": "ad7d51fd8f5dc8321f9ddbe2523f54b7",
"assets/assets/images/courses/TM/TM-02-03.jpg": "c8e06f443e3d1c094aa64f96db4f3cbc",
"assets/assets/images/courses/TM/TM-02-04.jpg": "5caf003c2b78642739a5c97ce89de317",
"assets/assets/images/courses/TM/TM-02-05.jpg": "f72eb6d33da40b8c10b9e1489aa4068a",
"assets/assets/images/courses/TM/TM-02-06.jpg": "0633a34868f67196aca13c66ef43eaed",
"assets/assets/images/courses/TM/TM-02-07.jpg": "a33c15e47cec92513eb1b13b2825c15b",
"assets/assets/images/courses/TM/TM-02-08.jpg": "dee4ae6d2b1e2151a59075b11c94668f",
"assets/assets/images/courses/TM/TM-02-09.jpg": "71108eb76b6e3b2e790dd969b1d65c18",
"assets/assets/images/courses/TM/TM-02-10.jpg": "c2c1a582da4de06c9d82adaf96b9e5b8",
"assets/assets/images/courses/TM/TM-02-11.jpg": "7e54b0b18622390f25a817ffd60b1fb9",
"assets/assets/images/courses/TM/TM-02-12.jpg": "bb14e96feeeaffd8c81b207649f9cbca",
"assets/assets/images/courses/TM/TM-02-13.jpg": "68e2794adf1ad123452f0966c9b7472f",
"assets/assets/images/courses/TM/TM-02-14.jpg": "6ea5613f5c68e6965ef40ac967e868f7",
"assets/assets/images/courses/TM/TM-02-15.jpg": "b73dad745b5297007d3a92b566194921",
"assets/assets/images/courses/TM/TM-02-16.jpg": "76e827ec007ea3b7fe23806b5b36f003",
"assets/assets/images/courses/TM/TM-02-17.jpg": "00bce7b54e9c38a05e031bdf4d489163",
"assets/assets/images/courses/TM/TM-02-18.jpg": "ccfb9732b45d05edec5c7c324ee13b11",
"assets/assets/images/courses/TM/TM-02-19.jpg": "51e9e05087bdd8c4cc1c1ae98822ab63",
"assets/assets/images/courses/TM/TM-02-20.jpg": "b9a49e002f35d6f4e6da1926766e124b",
"assets/assets/images/courses/TM/TM-02-21.jpg": "ecafae1179cd1f663d46c944194dd094",
"assets/assets/images/courses/TM/TM-02-22.jpg": "a533924ab2f51dcbd59800b7af46c16d",
"assets/assets/images/courses/TM/TM-02-23.jpg": "24200189a59102bb777a891b3b2b9d4c",
"assets/assets/images/courses/TM/TM-02-24.jpg": "97f4e99c447463fcace07d272927394e",
"assets/assets/images/courses/TM/TM-02-25.jpg": "4b01ff3ac0b3fe273a797cc6a16a1da3",
"assets/assets/images/courses/TM/TM-02-26.jpg": "a1170e450636ff1a42d9537dc594a7e6",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/herolab_logo.png": "97af3b7304c0239791ad9e7fb7fd1704",
"assets/assets/images/profile.webp": "88a940b1d858f666ac07d2c5665e4fe4",
"assets/assets/styles/chibi.png": "1cd2727e5511ea8bd2e4716dd813fd26",
"assets/assets/styles/classic.png": "5f546fb011408a1fecfbae0cd27d9016",
"assets/assets/styles/cyberpunk.png": "3087dc1574911761a5ce35f1b5bfc9c3",
"assets/assets/styles/manga.png": "d94acf5263c85672979532cf7d7cdf72",
"assets/assets/styles/noir.png": "dd5e2e9f043df9d212a57d081ccd4284",
"assets/assets/styles/watercolor.png": "140352086e08a8547887d684da7eea07",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "ce682072e43a98f3148c3565d69b8a60",
"assets/NOTICES": "c6231e0d35a9f5b49cde8941790c83ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "97af3b7304c0239791ad9e7fb7fd1704",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "6e3049e1bd69781724b42421dad40814",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "491622aea9b4984d6c458bcb82b33d2b",
"/": "491622aea9b4984d6c458bcb82b33d2b",
"main.dart.js": "e99ac2984c3b72739d48e16aade2bf8a",
"manifest.json": "1c5fd603809cc1557a783b61ef51a666",
"version.json": "cddda436c1a0d124c1e6b5ee29f73385"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
