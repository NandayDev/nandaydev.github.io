'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"README.md": "e0437ab0c30dbc4417c0e71c9e412ba6",
"icons/logo.png": "508623330cb0250a035dd873fcc2ab9b",
"youtube/serie-etf/index.html": "cc4586a3257bfc4dfa7d37dc8609bd0f",
"/": "6f28e4ff53fa8ae4143937321ee3b7e2",
"youtube/index.html": "8d1bd5a8a1b7d4a00e3c0f7bbc960d49",
"version.json": "729886d14921718e2a1ee3b8f3eecbf5",
"donazioni/index.html": "c38d2ddbe378d724775d4e9f325fcac5",
"manifest.json": "9bb5f82ac7a1d2b222ccbf568068dbc7",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"sitemap.xml": "156e6507bd1a9b22fc81ebeb8a061c2e",
"index.html": "3c47fcf268919d12a0d615fd853b1f37",
"google615e9b1214afaf63.html": "18ec3a67e322b0338e5e05c2d8739783",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"main.dart.js": "54b38f1e986d96d5e250b4333f9c24cc",
"CNAME": "17067924b1f9c16b1871cdf8e4a9cec5",
"live/index.html": "a2f23cb7fbf294ac5e3229ca24539ff9",
"redirect/company-of-one/index.html": "1ac47a2b5b5cf273f59870d7945701ce",
"redirect/youtube/index.html": "47c9b1a47fb0fa8fac467aee35e2f0ee",
"zohoverify/verifyforzoho.html": "101591f54e04add8d1b545af17018a29",
"blog/README.md": "8962f55ddc2f942a80d4ab9e0044d191",
"blog/thoughts/2023/01/26/planning-life-finances-worth-it.html": "6bd4a93f3c08a39a17ada7a0777325a8",
"blog/thoughts/2023/01/05/about-growing-up.html": "73fe4130499bece37d3a2f5cb49e9de2",
"blog/thoughts/2023/01/09/i-dont-like-travelling.html": "044b4cc9933943170df9b2dfcaaa83b6",
"blog/about/index.html": "e948376368f6287c779f6003e1c2a22d",
"blog/feed.xml": "22be3ef05bad7db5c5afee890b7e57ad",
"blog/index.html": "6f28e4ff53fa8ae4143937321ee3b7e2",
"blog/personal%20finance/2023/03/18/my-experience-with-trading.html": "95575c6be1f76ec31644b6b94204b8df",
"blog/personal%20finance/2023/01/03/about-fire.html": "bb6e6a8ed64c3c623ab1b1c2b3687fce",
"blog/personal%20finance/2023/05/19/why-personal-finance-shouldnt-be-boring.html": "082e22c7c216f2484702b64e35027158",
"blog/assets/minima-social-icons.svg": "3a70b871c930a7ed8af27caa162af123",
"blog/assets/main.css": "cdad61cffb215362616ac5937b6c4728",
"blog/404.html": "ec084f3eb6216b63b6adea66b494437a",
"blog/career/2023/01/04/being-freelancer-work-from-home-era.html": "569c1aa9d81d5990d3eb5eb1cc83fe63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c3b067bcd4dea4ce8811cf929e8e3df1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "755c72a0211aa1e10865a9d288b169ea",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5682b0f8ac62170896e25f8adcf2a5c6",
"assets/AssetManifest.bin": "bbbc8cd1c0a49638a6acf956c07df6a9",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.json": "341a0e44678194559b7b02e7e10b7b4d",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/fonts/MaterialIcons-Regular.otf": "3dd0eae089e42784828b4431cf103de4",
"assets/AssetManifest.bin.json": "721c24340cae5ac98d4134ff4552f444",
"assets/NOTICES": "4ab3c683a00084b614a7eba50c396e7d",
"assets/assets/images/mir.png": "ce97143e0b39efecb705476522429e3b",
"assets/assets/images/guido_swe.png": "9b3d43376466953bccf864d7af650328",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"assets/assets/images/portfolio_02.jpg": "9beba509a25cfb96362aeb7e98335e58",
"assets/assets/images/blog_02.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/dev_aboutme.png": "21ea8f79cfc69b619c767fa9573b5295",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blog_01.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/ghana_flag.png": "b0afee866ab3333560a0072c5d53bce2",
"assets/assets/images/portfolio_01.jpg": "43e7af9f9e24c8c4db73ee7d493c04f4",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/commenter.jpg": "0ad74a9a137f730411a2b4b3512d170a",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/portfolio_03.jpg": "45d7db96b72f25b4c76740e5dec2208e",
"assets/assets/images/logo_light.png": "35cf418d32fe6d98a347ae9bf80f29b3",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/logo_dark.png": "11909a589cd318632480fee567ffe70b",
"assets/assets/images/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/images/dev_award.png": "9330277f7c4279bb73c0f637f6871af1",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/portfolio_05.jpg": "9e5fedca2725d59b2692670505c8e7e5",
"assets/assets/images/portfolio_04.jpg": "ff07b0c6397e19d0cf30b03df9f196d2",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/portfolio_06.jpg": "015d9a88eeaa1a0f5e39b81d32e1bf87",
"assets/assets/images/guido_cc.png": "730a9a524a47208517e245fc4279aa7e",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/dev_header.png": "b3844a10b4965bbd8b87ac6023f2eac0",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/blog/0002_my-personal-story-part-1.json": "2ff622703542b4df0f4460f399fd2300",
"assets/assets/blog/0001_welcome.json": "c8b290887c918c0d00ab79f04504f1d1",
"assets/assets/blog/0003_my-experience-indie-videogame-developer-june-2022.json": "eb2e5c90ab7c8a738409c92b71640e5a",
"assets/assets/blog/0004_my-favourite-movies-big-short.json": "f6412b1b9b7dcea211c4fc3bc22d7276",
"files/CV-GuidoCardinali.pdf": "bf7f82977adc7b37c3dcc6c0da9ed7ad",
"robots.txt": "376f85e94ee8db023428e7ad0f3b7f08"};
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
