'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/config": "8894cfc8c81a12694d3385e17d6cd9d9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "26c9cae0a2468c8d35d1c8851aa858e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "76f1f1efb918fa024d442be0bc6b46de",
".git/logs/refs/heads/master": "76f1f1efb918fa024d442be0bc6b46de",
".git/logs/refs/remotes/origin/master": "ef37dad3e5cba268181c565e6e2c3fc6",
".git/objects/1e/9e1525e89a8df5b8fe2ec5066f21f3fcea5a30": "4f261a3a30ff5f004758b251102e7276",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/1d7aee88f7d54d3c3f80c6ec5d00679d60355b": "66b3c99e55e039d2a41672e0c415ab76",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ca/35ffdf5c609994e6e3cbf853412c2f991f1ff9": "a09a55bbefa5d294dabb552f9a12fede",
".git/objects/ea/50c892aa2c0d43a16532e3540c2a7bbd9c2ae1": "292f89e4f02ae3df404134f631dc2a5b",
".git/refs/heads/master": "3dd4e236077a8bdce8b09df880645bb8",
".git/refs/remotes/origin/master": "3dd4e236077a8bdce8b09df880645bb8",
"assets/AssetManifest.json": "f42e7494c2c2c1bf07190a44a66481a6",
"assets/assets/audios/1.mp3": "d00d9436c4d90b029a9ba0c402715e44",
"assets/assets/audios/2.mp3": "7f0b068c00530265e587a58f16c17d16",
"assets/assets/audios/3.mp3": "8f2c4a61be89ecea8e37edc34924939d",
"assets/assets/audios/4.mp3": "c144abe6c888c69307276a63710a842b",
"assets/assets/audios/5.mp3": "d00d9436c4d90b029a9ba0c402715e44",
"assets/assets/audios/6.mp3": "c5853d7cfec2617f0db91bab5fe76b9d",
"assets/assets/audios/7.mp3": "a53f42d768cec18b3b86f7b8110d7ed4",
"assets/assets/audios/8.mp3": "60280a7c67839adb4759152d54167370",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/LICENSE": "562437a6fa3761437ede456facd713fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b6bee417bfea6091185d3271a09801e5",
"/": "b6bee417bfea6091185d3271a09801e5",
"main.dart.js": "ad718fbf0acf276d99cd7f4d74a6cd6b",
"manifest.json": "ace198a6be68aa627c73be710632571e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
