if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UyRRPqtS_MNd9pSSg_-uz/_buildManifest.js",revision:"a7d141066192f3e47e7e695681500a92"},{url:"/_next/static/UyRRPqtS_MNd9pSSg_-uz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/424-067502bc99de7af3.js",revision:"067502bc99de7af3"},{url:"/_next/static/chunks/492-44ff1866ce92b89f.js",revision:"44ff1866ce92b89f"},{url:"/_next/static/chunks/5b182311-a7779b538779f2ed.js",revision:"a7779b538779f2ed"},{url:"/_next/static/chunks/7616def2-b407375cdfed011e.js",revision:"b407375cdfed011e"},{url:"/_next/static/chunks/765-7cfdd8a37f8260c6.js",revision:"7cfdd8a37f8260c6"},{url:"/_next/static/chunks/84625206-2887a7aedd415b0c.js",revision:"2887a7aedd415b0c"},{url:"/_next/static/chunks/c03e3c83-dd64453eb3a687d5.js",revision:"dd64453eb3a687d5"},{url:"/_next/static/chunks/db989501-cdb1d9acee34b34f.js",revision:"cdb1d9acee34b34f"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-e4de5d1a4535be6d.js",revision:"e4de5d1a4535be6d"},{url:"/_next/static/chunks/pages/_app-cbd2d7f69ab8599f.js",revision:"cbd2d7f69ab8599f"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/course-b1c5d024fef450bd.js",revision:"b1c5d024fef450bd"},{url:"/_next/static/chunks/pages/dashboard-7e8d680062166ade.js",revision:"7e8d680062166ade"},{url:"/_next/static/chunks/pages/index-1bf48280fc67771d.js",revision:"1bf48280fc67771d"},{url:"/_next/static/chunks/pages/search-7f40eb9c2340cd4d.js",revision:"7f40eb9c2340cd4d"},{url:"/_next/static/chunks/pages/student-cd69c7fc7e5829f1.js",revision:"cd69c7fc7e5829f1"},{url:"/_next/static/chunks/pages/teacher-4f9f976846a7e21b.js",revision:"4f9f976846a7e21b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"d7b038a63b619762"},{url:"/_next/static/css/bb4b246627b831ab.css",revision:"bb4b246627b831ab"},{url:"/bg-h-1.jpg",revision:"2d8011d97352c4187627505ef02ff821"},{url:"/bg-h-2.jpg",revision:"6b41744268563bd9830cb98de7ecb533"},{url:"/bg-h-3.jpg",revision:"14fbee9c97f042abf5978aede1b961b7"},{url:"/bg-h-4.jpg",revision:"5c92bb96a425b91dd0dbe8d06eb59c42"},{url:"/bg-h-5.jpg",revision:"0b67e4ebee70f07e89395b01796bad9d"},{url:"/bg-h-6.jpg",revision:"1f44a8aff8533727cd49b0ec2951e6aa"},{url:"/bg-h-7.jpg",revision:"d7e696881934fb29b53187c2e9894870"},{url:"/bg-v-1.jpg",revision:"1eac8cf0cb40ed72fe109f97952592cd"},{url:"/bg-v-2.jpg",revision:"5e74a43c1ccf0c9e31ba132b62249380"},{url:"/bg-v-3.jpg",revision:"4714c06662a5a7e846da910d69adc120"},{url:"/bg-v-4.jpg",revision:"8a93940e89a43cbd484a796bb915a952"},{url:"/bg-v-5.jpg",revision:"9d8ea96b8987393bb0c9ec5e9a0e2e3b"},{url:"/bg-v-6.jpg",revision:"d9b50ed1edd53b52c04623a0d1e17ce8"},{url:"/bg-v-7.jpg",revision:"1599495b8b159fd4d6fec8c4399587b5"},{url:"/college-1200.png",revision:"758331625e488987ee4bce5641b6b9d4"},{url:"/college-50.png",revision:"9cfa3629fd5cf2541218ca4aa5295c21"},{url:"/college-500.png",revision:"1ff1b330cd4dbdeba16b251f89a098bc"},{url:"/college-transparent-1200.png",revision:"43e21afe5557b18846abd0506a24b2d0"},{url:"/college-transparent-50.png",revision:"26f36a70f0c644c0d11c1d097cca72ef"},{url:"/college-transparent-500.png",revision:"0b82a19aad4c986a943211d19a50b714"},{url:"/college.ico",revision:"67db7c42dce90901952fe289e817c0b0"},{url:"/manifest.json",revision:"4627b4394c8bb3fa1864dfc013df4c67"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
