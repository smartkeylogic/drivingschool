'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a544e4b2f80f969863121f4486c40291",
".git/config": "6e0514c39b1361584899be7d011eb213",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "18d803030e71a5a67e3e7f6beb50e345",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cf137af828108ab0207851cee2b54bd2",
".git/logs/refs/heads/main": "8dd5f4dc4acf20c52657833f0b417be4",
".git/logs/refs/remotes/origin/main": "605a1d0e873dadaa5cf2781be616c0a1",
".git/objects/07/ad3b81462d7bb9a03291aa537c5f76cdea0d60": "344a940f91626093e879ea6cd8072836",
".git/objects/0a/0229fdf2f9f02d4ccff8f4feda39e41fac28f1": "0805b196625dae337aef5530e9c0878d",
".git/objects/0e/e8a76bc8933fd0d677e8d096b9fceb28a48a42": "158bd6bcd8f6e88bfa5c6b8ff6c21f9c",
".git/objects/0f/a0bbe39aba12fde9338b968009856a6dba8ffa": "81eb4920f5f0d98d8426af574a541d7e",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/2f/6771cd0c907a6ed59e9441680d4dd34d764b34": "d6e8e149a406b8421c943d1a9a34cce2",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/985129d9e8927296a3bbb8b9a4ade2e26aaeca": "ee1131a41505b673452abcd24e365047",
".git/objects/3d/dc391a1a51dd744d23d9c53c744c78f2d2c2a2": "96546083d4e14491b24ac31cde3b374f",
".git/objects/3f/3ba07712f697d21490eeaddd45f15a1ecfe209": "4f8b42199af05635c3b381e6bcdacdc5",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/f299b7efeb79e649e2759f0fae586b7880d103": "127fe0bea3b4995f2b550272a9799d8b",
".git/objects/43/5c9e726ad93d1a51bbc9f8d69c1d45ad2f520b": "a7567d4af87f9f8520b0367245d841fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/bbe19fa326ae9275b29462f655012bca895dbd": "46e85feeeac8ee13f9179a87ab1f6802",
".git/objects/4e/23fe9f6673f3101c93afd1140e9976cb512d05": "bcf96d9955ce0f5a8ee1f8542ec80973",
".git/objects/4f/4da6881c6ab7e2fee11b37096d29e4c8d4c81b": "203e9edea00ab645c3859069b226e935",
".git/objects/52/f30896ec66928c697f532065e6f9f00edb5f30": "29c19acb000ae0f67956eec830edb6e6",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/54/7c36662170b5ac9aa7208b02774d6afa1918c8": "933a0cfb8be8a4e90598dab9488ae4ee",
".git/objects/55/63c4904a03023ba457b56246bde5d941e5b46b": "937b9a1acddece65fa4b087c5da51403",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/97dcdf5240901bd68d8e18bc6a69d426794a61": "55533699b835d56d8a62dbd1c9547b0b",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/e14d5a15d02dbdeacee880b1ccd77519c918c3": "8f140de7316ada1323ecc7c5cdebcc68",
".git/objects/61/70bc1458fe75a2184bf0658b4963106333615f": "ef4f3d5b764a6400bf8b7a58d5fe10c5",
".git/objects/63/c9d849108d37fd54325e1256f9052f04de490b": "6642f6cb62474088651b4f5c2cdfe354",
".git/objects/67/6d356a7dc7c0cf5ec10bc68fad6101fbf44405": "9cb1243b4c37ffa2580e842666ae7e99",
".git/objects/67/b75f324132983f727598fa6758a7ad8d6e6567": "bc2f00068d1eddac77305e08e0d6725a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/73/537221c9fc95072bdbe4e574f834fa61666d7c": "87e585b0613897dab29011513c28c2c5",
".git/objects/7c/e8a91f75a69107d16a9f7c479f053f0a548661": "0b2aa519a8d930a12e3892bbe190a419",
".git/objects/7e/f0c42afd080e1a2b0b4641823a7aa0ca13e8b7": "86273ed3119b89fc47a628dd34dd861a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/16a046e46d3be4fe7f4221a5dbd74968e6bd02": "e8ae28155e466879c77912456b6dc00b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/0f0f44bc01963228edd45a8cd396d5e0913c21": "9a8343e6fd4e584c367ae4555a27ba72",
".git/objects/9d/b6e1f68fa3979a50e123c91254afbd06a2b03c": "0487fe6293a55cc06df6bf89ee85528d",
".git/objects/a1/ab5d3444bb494b31b3a5333ac444e482e901f7": "0bcc48fbc943057f85d1aadacf5f675d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/e3d545af8fa9e2dec55552c9bb486d37e46925": "abbc148df8b456073f19dbc6a5a4ce31",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/a05036300f1e7bd9500ea5871f321db89140a5": "157f8659545c726ebc0ab66f8921e72d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/83fdc7a64037f9c60c9c0e2fdfce177562178e": "83723b2eb4179e045ed20291fe58a102",
".git/objects/c6/87fbbccb39b5e6e02a57502b08bdaaf76c7468": "37477bb83c18e342ee08747fefd7f622",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/63832fc8f47601fc9d404e6b156578d7b88e31": "9c9df13eca427d107d30c5072f8a813d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e6/3506ccdb705fd501e6b7e9e1f3bb5e235fddc7": "b38549564f7f16f31d807926ba7721d5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4ab8166f19bab3bc29a47d38e15b79bbcee3d4": "538478aadf50f7050cad2424108b4e60",
".git/objects/ec/ead98c0308f45870ba4e326b0b8a301e7be6a3": "b6fbd1bb609b162546e3988e2dbb71e1",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/c7f443e2153a899b5d0c0c428d5e05a9120bc1": "d886c057f28ded607fad25759e3fdd01",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/6192ad5d5b26fda3c9b4f50403408828d6f466": "d0cca3f566676ad18f5ccb340f66622c",
".git/objects/fb/94644fa62aaf1e6cb32db71ff397cc4aa2014f": "9e2bff66bc15c7d8c3ce621ac69e72b3",
".git/objects/fc/a8e2dbad7ff69857cbb8ab4dc96201e104c940": "f63c53442e74aca8d005bf99e470268e",
".git/refs/heads/main": "5e0f3dc736dcf770ea80939eefb0665d",
".git/refs/remotes/origin/main": "5e0f3dc736dcf770ea80939eefb0665d",
"assets/AssetManifest.bin": "164a4ce3ba5f3b49f9848187a4fe0b03",
"assets/AssetManifest.bin.json": "34dd748765e51bc970ca1a5f7cb5af0a",
"assets/AssetManifest.json": "d7a810890898ee6ee58610ca4931f404",
"assets/assets/logo.jpg": "16312f683d4ce138f02f7a249ecd959e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "806ee23900843bb9407a85a827624f63",
"assets/NOTICES": "94243eb8cb93be5cd5a5e8bb6eee5bae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "720f6137ac7c87e7d3757fd7d570606b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c7f63d56f005a79039e7486413b279d8",
"/": "c7f63d56f005a79039e7486413b279d8",
"main.dart.js": "a040b46b5cab603ba1c8a6ab035c4cde",
"manifest.json": "97cc3d46b59ff71900070932662c6f56",
"version.json": "29e4e57e37e2159fba82511a6d75fb82"};
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
