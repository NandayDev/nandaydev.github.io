'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/images/logo_dark.png": "11909a589cd318632480fee567ffe70b",
"assets/assets/images/dev_aboutme.png": "21ea8f79cfc69b619c767fa9573b5295",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/portfolio_04.jpg": "ff07b0c6397e19d0cf30b03df9f196d2",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/ghana_flag.png": "b0afee866ab3333560a0072c5d53bce2",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/portfolio_01.jpg": "43e7af9f9e24c8c4db73ee7d493c04f4",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/logo_light.png": "35cf418d32fe6d98a347ae9bf80f29b3",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/blog_01.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/blog_02.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/images/dev_header.png": "b3844a10b4965bbd8b87ac6023f2eac0",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"assets/assets/images/portfolio_02.jpg": "9beba509a25cfb96362aeb7e98335e58",
"assets/assets/images/dev_award.png": "9330277f7c4279bb73c0f637f6871af1",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/portfolio_05.jpg": "9e5fedca2725d59b2692670505c8e7e5",
"assets/assets/images/mir.png": "ce97143e0b39efecb705476522429e3b",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/commenter.jpg": "0ad74a9a137f730411a2b4b3512d170a",
"assets/assets/images/portfolio_06.jpg": "015d9a88eeaa1a0f5e39b81d32e1bf87",
"assets/assets/images/portfolio_03.jpg": "45d7db96b72f25b4c76740e5dec2208e",
"assets/assets/blog/0004_my-favourite-movies-big-short.json": "f6412b1b9b7dcea211c4fc3bc22d7276",
"assets/assets/blog/0002_my-personal-story-part-1.json": "2ff622703542b4df0f4460f399fd2300",
"assets/assets/blog/0003_my-experience-indie-videogame-developer-june-2022.json": "eb2e5c90ab7c8a738409c92b71640e5a",
"assets/assets/blog/0001_welcome.json": "c8b290887c918c0d00ab79f04504f1d1",
"assets/fonts/MaterialIcons-Regular.otf": "afce6d1dd84a7dcc16d2361e34f03262",
"assets/AssetManifest.json": "c204a64fe5ed58a4f222bd317646d2b1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/feather_icons/fonts/feather.ttf": "b5f4566bdaa6dfa10fad3bedb22f7ecf",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d5ffc39e7670362c47e0e2afbf5aebec",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/NOTICES": "7d8d346a91185645e7132326127781bb",
"robots.txt": "376f85e94ee8db023428e7ad0f3b7f08",
"README.md": "e0437ab0c30dbc4417c0e71c9e412ba6",
"isda/assets/assets/data.json": "2dc832c6e011d9f92c01cb92e1436bbf",
"isda/assets/assets/rip.png": "579c24065201c65ff1501fa5a2e556f5",
"isda/assets/assets/guido.png": "22484e1d0007606ebf5e7d3f16aafc89",
"isda/assets/assets/pietro_michelangeli.png": "a80db2116e50b59ce0548f2cce5d225e",
"isda/assets/assets/paolo_coletti.png": "fffcd303dfc4b532aca88207f57a3486",
"isda/assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"isda/assets/AssetManifest.json": "63ba0825ebdf01d7e28b16815d9fe839",
"isda/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"isda/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"isda/assets/AssetManifest.bin": "b957d85ecc1ea5d8b628bbe6c09cc9e3",
"isda/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"isda/assets/NOTICES": "65927a9256022709295bd07d61a17fc5",
"isda/version.json": "f1f1ed932ad6f76fd8b726858981824b",
"isda/manifest.json": "3f39f2912a3339a330b60d31a44f7813",
"isda/index.html": "71ddc12d4bbea535a9115e458db6a883",
"/": "9cb4fd466d5af1e12918e7afe1ebdfa3",
"isda/favicon.png": "280fff4714b5f4f89b00b1f357d26b25",
"isda/flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"isda/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"isda/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"isda/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"isda/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"isda/main.dart.js": "5382715b2fdaf43bb822e3b45adbd02c",
"isda/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"isda/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"isda/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"isda/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"isda/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"isda/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"isda/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"version.json": "729886d14921718e2a1ee3b8f3eecbf5",
"redirect/company-of-one/index.html": "1ac47a2b5b5cf273f59870d7945701ce",
"redirect/youtube/index.html": "47c9b1a47fb0fa8fac467aee35e2f0ee",
"manifest.json": "9bb5f82ac7a1d2b222ccbf568068dbc7",
"index.html": "846c0f054e67fb825f5513096eade67f",
"blog/assets/minima-social-icons.svg": "3a70b871c930a7ed8af27caa162af123",
"blog/assets/main.css": "cdad61cffb215362616ac5937b6c4728",
"blog/feed.xml": "8e7a610b30254dcd5aafc88860081ab6",
"blog/career/2023/01/04/being-freelancer-work-from-home-era.html": "b4e0f8b7046a0489f5e31ed6ef3d1e96",
"blog/README.md": "8962f55ddc2f942a80d4ab9e0044d191",
"blog/index.html": "c458334d537e4f9c7ee0e732a989026f",
"blog/personal%20finance/2023/05/19/why-personal-finance-shouldnt-be-boring.html": "ab146b510e040846962f6e19d93f48b6",
"blog/personal%20finance/2023/03/18/my-experience-with-trading.html": "bf3e20584230fcb9f32a2876a8264a92",
"blog/personal%20finance/2023/01/03/about-fire.html": "3168d4d1cfe70755fe3e8c126b8174db",
"blog/about/index.html": "37a87397b730428fa1cff09593d6d2b7",
"blog/404.html": "2bc149be43637a3f1d123b8e8cbf392a",
"blog/thoughts/2023/01/05/about-growing-up.html": "1ee3677b22a6d7aa272e789e57f0b0db",
"blog/thoughts/2023/01/09/i-dont-like-travelling.html": "aab3455e92db2f62aeea826c1b3c1900",
"blog/thoughts/2023/01/26/planning-life-finances-worth-it.html": "b7703ddd99e9dacfee16c408c66e0641",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"youtube/serie-etf/index.html": "9cb4fd466d5af1e12918e7afe1ebdfa3",
"CNAME": "17067924b1f9c16b1871cdf8e4a9cec5",
"sitemap.xml": "156e6507bd1a9b22fc81ebeb8a061c2e",
"zohoverify/verifyforzoho.html": "101591f54e04add8d1b545af17018a29",
"icons/logo.png": "508623330cb0250a035dd873fcc2ab9b",
"files/CV-GuidoCardinali.pdf": "bf7f82977adc7b37c3dcc6c0da9ed7ad",
"google615e9b1214afaf63.html": "18ec3a67e322b0338e5e05c2d8739783",
"main.dart.js": "980b1980ecc1f02bc170a15aeb925350",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
