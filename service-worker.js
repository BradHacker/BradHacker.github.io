"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","7c3fef0dcf603c6d3516064245bcedcf"],["/static/css/main.4fdb02f7.css","687930bc8a66921fb132e528b5bf1037"],["/static/js/main.44bb684a.js","c2dbfb67217588f4568a032f838842b0"],["/static/media/adobe-illustrator-cc.93ceeb6a.svg","93ceeb6a04bd609e7ff6ea2a3a5d2e73"],["/static/media/affinity-designer.621340e5.png","621340e5d5e1bf1ddf1acf00f8f876c0"],["/static/media/bradhackerSite.3f748a4c.png","3f748a4c3b202c6e1294b579874a4a04"],["/static/media/cbcLogo.28d8e5d9.png","28d8e5d96f7e15e18371aa2bc7d6a332"],["/static/media/meteor.b857ec7b.svg","b857ec7b2aff274413143f28ac2d17fe"],["/static/media/photo1.2e024fe9.jpeg","2e024fe93ba2bf7082a1ba8d8efe611b"],["/static/media/photo19.86880400.jpeg","868804006c8bcbd80b14697d4379556d"],["/static/media/photo20.76e0579c.jpeg","76e0579c928fc07dff3959148d89146d"],["/static/media/photo3.2ff5ca67.jpeg","2ff5ca6783e0ea109a5f1846da3dff0d"],["/static/media/photo5.fb6ab074.jpeg","fb6ab0749975046bdd3c4353422068fe"],["/static/media/react.876a8325.svg","876a8325687358ce46ec26be29118535"],["/static/media/webDesign_hero1.c5241d54.png","c5241d5456b68a4418c6b17ce287d9cf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});