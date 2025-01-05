'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"live/index.html": "a2f23cb7fbf294ac5e3229ca24539ff9",
"/": "409665f67560127a2f5150df7db626c1",
"files/CV-GuidoCardinali.pdf": "bf7f82977adc7b37c3dcc6c0da9ed7ad",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"CNAME": "17067924b1f9c16b1871cdf8e4a9cec5",
"robots.txt": "376f85e94ee8db023428e7ad0f3b7f08",
"main.dart.js": "54b38f1e986d96d5e250b4333f9c24cc",
"youtube/index.html": "8d1bd5a8a1b7d4a00e3c0f7bbc960d49",
"youtube/serie-etf/index.html": "cc4586a3257bfc4dfa7d37dc8609bd0f",
"blog/feed.xml": "32c580b58e903f8adaf60cbf00637be5",
"blog/about/index.html": "c8366a2622dea58255077feb14ed8691",
"blog/tabletop%20role-playing%20games/2024/12/20/obsidian-how-technology-helps-my-games.html": "9741f10e3b76d3ad3110763dfd1ac97f",
"blog/tabletop%20role-playing%20games/2024/12/04/players-using-ai-to-write-their-characters-story.html": "411236aa4d3b04941c47bb7d03aea462",
"blog/tabletop%20role-playing%20games/2024/12/13/tips-for-finding-a-date-for-your-sessions.html": "9382d5122fc5ea57dd63efc1318ef8cf",
"blog/tabletop%20role-playing%20games/2024/11/07/taking-premade-adventures-and-making-them-your-own.html": "5494f8cf75ba549939e7c97e6845353c",
"blog/tabletop%20role-playing%20games/2024/10/28/i-wrote-a-dnd-combat-management-app.html": "53bccf7efea9eddca2ca41bc4ca2547d",
"blog/tabletop%20role-playing%20games/2024/10/26/my-history-with-ttrpgs.html": "f308598180185f3734efe67aac009af0",
"blog/career/2023/01/04/being-freelancer-work-from-home-era.html": "713074c4659f1852249b7f392b95b4d8",
"blog/assets/images/dnd-combat-management-app-preview.webp": "bd0dee107135dd9c45553b64f809ebd4",
"blog/assets/images/dnd-combat-management-app-preview-7.webp": "98df8f8e757a07854111f416542e89e0",
"blog/assets/images/dnd-combat-management-app-preview-2.webp": "bc692a885501fbe840e8da581093a65d",
"blog/assets/images/dnd-combat-management-app-preview-4.webp": "0cb421ba0e9ec0d20b814e46ee5dd167",
"blog/assets/images/dnd-combat-management-app-preview-5.webp": "52290a0b4ba488c0c2c2d422a21f307a",
"blog/assets/images/dnd-combat-management-app-preview-3.webp": "84e9a84e11208c7e2824739c33b1e77a",
"blog/assets/images/dnd-combat-management-app-preview-6.webp": "2f66241f7ebf3faff8e539363a032abc",
"blog/assets/images/dnd-combat-management-app-preview-8.webp": "351c34a1f9685c0967a31b078297d516",
"blog/assets/main.css": "cdad61cffb215362616ac5937b6c4728",
"blog/assets/minima-social-icons.svg": "3a70b871c930a7ed8af27caa162af123",
"blog/index.html": "adc9871a8dc618ab5a6f5c0fd15304f1",
"blog/thoughts/2023/01/09/i-dont-like-travelling.html": "0e327765a0cc2b5a29f2d9a677a7ac55",
"blog/thoughts/2023/01/05/about-growing-up.html": "ca3af4f93b08d6406db530290df0fd53",
"blog/thoughts/2023/01/26/planning-life-finances-worth-it.html": "3890b80cb22a2f7c48d674d6e45463ad",
"blog/thoughts/2025/01/05/i-dont-like-travelling-part-2.html": "9f1780f09e0ceee3597f5800fae7bc66",
"blog/README.md": "8962f55ddc2f942a80d4ab9e0044d191",
"blog/personal%20finance/2023/03/18/my-experience-with-trading.html": "ff4672b504b9c3426d77a9f948066cda",
"blog/personal%20finance/2023/05/19/why-personal-finance-shouldnt-be-boring.html": "f420ac86f81dce5dae631c6b51869598",
"blog/personal%20finance/2023/01/03/about-fire.html": "aff954ea5d095e1489803875a5344077",
"blog/404.html": "a889110c19568060519d66963687dbef",
"zohoverify/verifyforzoho.html": "101591f54e04add8d1b545af17018a29",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/AssetManifest.bin": "bbbc8cd1c0a49638a6acf956c07df6a9",
"assets/fonts/MaterialIcons-Regular.otf": "3dd0eae089e42784828b4431cf103de4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "755c72a0211aa1e10865a9d288b169ea",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5682b0f8ac62170896e25f8adcf2a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c3b067bcd4dea4ce8811cf929e8e3df1",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/assets/blog/0002_my-personal-story-part-1.json": "2ff622703542b4df0f4460f399fd2300",
"assets/assets/blog/0001_welcome.json": "c8b290887c918c0d00ab79f04504f1d1",
"assets/assets/blog/0004_my-favourite-movies-big-short.json": "f6412b1b9b7dcea211c4fc3bc22d7276",
"assets/assets/blog/0003_my-experience-indie-videogame-developer-june-2022.json": "eb2e5c90ab7c8a738409c92b71640e5a",
"assets/assets/images/logo_dark.png": "11909a589cd318632480fee567ffe70b",
"assets/assets/images/portfolio_05.jpg": "9e5fedca2725d59b2692670505c8e7e5",
"assets/assets/images/portfolio_02.jpg": "9beba509a25cfb96362aeb7e98335e58",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/portfolio_06.jpg": "015d9a88eeaa1a0f5e39b81d32e1bf87",
"assets/assets/images/dev_aboutme.png": "21ea8f79cfc69b619c767fa9573b5295",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/portfolio_01.jpg": "43e7af9f9e24c8c4db73ee7d493c04f4",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/portfolio_03.jpg": "45d7db96b72f25b4c76740e5dec2208e",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/guido_cc.png": "730a9a524a47208517e245fc4279aa7e",
"assets/assets/images/dev_header.png": "b3844a10b4965bbd8b87ac6023f2eac0",
"assets/assets/images/commenter.jpg": "0ad74a9a137f730411a2b4b3512d170a",
"assets/assets/images/mir.png": "ce97143e0b39efecb705476522429e3b",
"assets/assets/images/portfolio_04.jpg": "ff07b0c6397e19d0cf30b03df9f196d2",
"assets/assets/images/guido_swe.png": "9b3d43376466953bccf864d7af650328",
"assets/assets/images/blog_02.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blog_01.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/ghana_flag.png": "b0afee866ab3333560a0072c5d53bce2",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"assets/assets/images/dev_award.png": "9330277f7c4279bb73c0f637f6871af1",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/logo_light.png": "35cf418d32fe6d98a347ae9bf80f29b3",
"assets/assets/images/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/NOTICES": "4ab3c683a00084b614a7eba50c396e7d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.json": "341a0e44678194559b7b02e7e10b7b4d",
"assets/AssetManifest.bin.json": "721c24340cae5ac98d4134ff4552f444",
"index.html": "f1ca260216d8d0c198debfde8dc45de7",
"manifest.json": "9bb5f82ac7a1d2b222ccbf568068dbc7",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"sitemap.xml": "156e6507bd1a9b22fc81ebeb8a061c2e",
"README.md": "e0437ab0c30dbc4417c0e71c9e412ba6",
"redirect/youtube/index.html": "47c9b1a47fb0fa8fac467aee35e2f0ee",
"redirect/company-of-one/index.html": "1ac47a2b5b5cf273f59870d7945701ce",
"google615e9b1214afaf63.html": "18ec3a67e322b0338e5e05c2d8739783",
"icons/logo.png": "508623330cb0250a035dd873fcc2ab9b",
"donazioni/index.html": "c38d2ddbe378d724775d4e9f325fcac5",
"fanta-etf/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"fanta-etf/main.dart.js": "39cd3c583946b468e6e09fcfe7a9b29a",
"fanta-etf/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"fanta-etf/assets/AssetManifest.bin": "7fc08696d60a6c41fbce0b54d82e6136",
"fanta-etf/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"fanta-etf/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"fanta-etf/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"fanta-etf/assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"fanta-etf/assets/assets/etf.json": "ea58915debd702b3b926c109fdeb6a0f",
"fanta-etf/assets/NOTICES": "fd74f1dec27889c088996c5c909c5772",
"fanta-etf/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"fanta-etf/assets/AssetManifest.json": "8fbecfddc7d72d0830f90c3f7b8994b5",
"fanta-etf/assets/AssetManifest.bin.json": "d3c6cb4472aace3ffc169625b9c55d7b",
"fanta-etf/index.html": "409665f67560127a2f5150df7db626c1",
"fanta-etf/manifest.json": "da682ced6c43613eee054f661ac89400",
"fanta-etf/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"fanta-etf/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"fanta-etf/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"fanta-etf/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"fanta-etf/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"fanta-etf/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"fanta-etf/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"fanta-etf/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"fanta-etf/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"fanta-etf/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"fanta-etf/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"fanta-etf/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"fanta-etf/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"fanta-etf/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"fanta-etf/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fanta-etf/version.json": "d7e4ce4dff777b0425651efa91ce8bd5",
"fanta-etf/flutter_bootstrap.js": "4d12729e5010247a40c2b5d08fbce5a8",
"version.json": "729886d14921718e2a1ee3b8f3eecbf5"};
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
