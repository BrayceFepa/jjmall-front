if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const t=e=>a(e,i),d={module:{uri:i},exports:r,require:t};s[i]=Promise.all(c.map((e=>d[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts("fallback-TqltELJDCEHv9vayjKPTs.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"d38ac435783a21f1956e5ca6c207228d"},{url:"/_next/static/TqltELJDCEHv9vayjKPTs/_buildManifest.js",revision:"1431a4b425bd197824001789782f0615"},{url:"/_next/static/TqltELJDCEHv9vayjKPTs/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/204-790800c21f29545c.js",revision:"790800c21f29545c"},{url:"/_next/static/chunks/228771e0-6168b942055b9409.js",revision:"6168b942055b9409"},{url:"/_next/static/chunks/275-814a18581fa54429.js",revision:"814a18581fa54429"},{url:"/_next/static/chunks/31664189-1bd78146b243b1a7.js",revision:"1bd78146b243b1a7"},{url:"/_next/static/chunks/421-234f141b8ea7262e.js",revision:"234f141b8ea7262e"},{url:"/_next/static/chunks/61-566f9560eeea5fc6.js",revision:"566f9560eeea5fc6"},{url:"/_next/static/chunks/645-0e24e0aa2bde0e56.js",revision:"0e24e0aa2bde0e56"},{url:"/_next/static/chunks/65291039-decce275a80b8d8d.js",revision:"decce275a80b8d8d"},{url:"/_next/static/chunks/682-4e697163a06421a3.js",revision:"4e697163a06421a3"},{url:"/_next/static/chunks/737-9c843141e8be1842.js",revision:"9c843141e8be1842"},{url:"/_next/static/chunks/742-aaf45b2e44468a01.js",revision:"aaf45b2e44468a01"},{url:"/_next/static/chunks/74fdba35-330bc1a2b6dda60a.js",revision:"330bc1a2b6dda60a"},{url:"/_next/static/chunks/779-b97621d73eae1945.js",revision:"b97621d73eae1945"},{url:"/_next/static/chunks/827-eb5e118aa8ac35f2.js",revision:"eb5e118aa8ac35f2"},{url:"/_next/static/chunks/84-7b493a37b39c8de0.js",revision:"7b493a37b39c8de0"},{url:"/_next/static/chunks/91eb3b05-3d4be5afb904e3b1.js",revision:"3d4be5afb904e3b1"},{url:"/_next/static/chunks/963-089f382b13928f1f.js",revision:"089f382b13928f1f"},{url:"/_next/static/chunks/97-89fa037d0ae13f60.js",revision:"89fa037d0ae13f60"},{url:"/_next/static/chunks/a1b9b43f-4b13c87a44e6ddd6.js",revision:"4b13c87a44e6ddd6"},{url:"/_next/static/chunks/ae51ba48-8f1aca792dbbf3ba.js",revision:"8f1aca792dbbf3ba"},{url:"/_next/static/chunks/c9184924-a3918f6be04c4b14.js",revision:"a3918f6be04c4b14"},{url:"/_next/static/chunks/d64684d8-bca2504790d31676.js",revision:"bca2504790d31676"},{url:"/_next/static/chunks/framework-89d26d6c86bdc815.js",revision:"89d26d6c86bdc815"},{url:"/_next/static/chunks/main-64ac2d79a8630b07.js",revision:"64ac2d79a8630b07"},{url:"/_next/static/chunks/pages/404-4ed1124b43d8fbbe.js",revision:"4ed1124b43d8fbbe"},{url:"/_next/static/chunks/pages/_app-fb314d787db181a7.js",revision:"fb314d787db181a7"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/_offline-c799ff522fa5a1d7.js",revision:"c799ff522fa5a1d7"},{url:"/_next/static/chunks/pages/about-us-83701b422b684e23.js",revision:"83701b422b684e23"},{url:"/_next/static/chunks/pages/checkout-cb876eaee4afa237.js",revision:"cb876eaee4afa237"},{url:"/_next/static/chunks/pages/contact-us-b247b0ed2e5d8c14.js",revision:"b247b0ed2e5d8c14"},{url:"/_next/static/chunks/pages/faq-29a1d7b2763dc529.js",revision:"29a1d7b2763dc529"},{url:"/_next/static/chunks/pages/index-9fc24051add2a1d9.js",revision:"9fc24051add2a1d9"},{url:"/_next/static/chunks/pages/offer-19b1047d78c52ab1.js",revision:"19b1047d78c52ab1"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-1c0f6f7be39a0599.js",revision:"1c0f6f7be39a0599"},{url:"/_next/static/chunks/pages/privacy-policy-1c6c2a4013359ca3.js",revision:"1c6c2a4013359ca3"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-636297e8a1255140.js",revision:"636297e8a1255140"},{url:"/_next/static/chunks/pages/search-9f2ac237a61cfb07.js",revision:"9f2ac237a61cfb07"},{url:"/_next/static/chunks/pages/terms-and-conditions-2a4433b72a7e02b2.js",revision:"2a4433b72a7e02b2"},{url:"/_next/static/chunks/pages/user/change-password-262382d499bc21a9.js",revision:"262382d499bc21a9"},{url:"/_next/static/chunks/pages/user/dashboard-128d95fbc0f79a61.js",revision:"128d95fbc0f79a61"},{url:"/_next/static/chunks/pages/user/email-verification/%5Btoken%5D-8a726cebe7fbd5fa.js",revision:"8a726cebe7fbd5fa"},{url:"/_next/static/chunks/pages/user/forget-password/%5Btoken%5D-652c68d24df4da4f.js",revision:"652c68d24df4da4f"},{url:"/_next/static/chunks/pages/user/my-orders-05ff8fe2a7c8c538.js",revision:"05ff8fe2a7c8c538"},{url:"/_next/static/chunks/pages/user/recent-order-23d4b4070a609380.js",revision:"23d4b4070a609380"},{url:"/_next/static/chunks/pages/user/update-profile-27ba999ad45e6b8e.js",revision:"27ba999ad45e6b8e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-df4cf1c8d23aa877.js",revision:"df4cf1c8d23aa877"},{url:"/_next/static/css/5c305e8718d6a1ae.css",revision:"5c305e8718d6a1ae"},{url:"/_next/static/css/6c7987e2821e600c.css",revision:"6c7987e2821e600c"},{url:"/_next/static/css/f1d5a30b5a4d1378.css",revision:"f1d5a30b5a4d1378"},{url:"/_next/static/css/f2b66a02c2cd9c3c.css",revision:"f2b66a02c2cd9c3c"},{url:"/_next/static/media/logo-color.76d1040e.png",revision:"fa727b7deb210008783eb70fb800c07a"},{url:"/_offline",revision:"TqltELJDCEHv9vayjKPTs"},{url:"/about-banner.jpg",revision:"79bcd14e1663eeb10fd2078a1b40a68a"},{url:"/about-us.jpg",revision:"a69c8f7c944c6dd9673e4e8407684ae9"},{url:"/app-download-img-left.png",revision:"72d8da82c11b9694f687e2b24711a82a"},{url:"/app-download-img.png",revision:"22ab424e74d09df11be0f6943a264856"},{url:"/app/app-store.svg",revision:"a717e97b14d37aa12c48a288bddf4bae"},{url:"/app/mastercard-icon.svg",revision:"2f3b7f6dc10d68bf74366ce0e4b39217"},{url:"/app/paypal-icon.svg",revision:"99025da84086629516e323641cdfd73b"},{url:"/app/play-store.svg",revision:"a2b0ad8b1000e23bf80ca9ef30b14b97"},{url:"/app/skrill-icon.svg",revision:"01cb261e1e28b74c3f51a379a63216d3"},{url:"/app/visa-icon.svg",revision:"58cb00fe42ab95ae26c5e7e429f04545"},{url:"/banner-1.jpg",revision:"96eaf5765f56f7574dc21db0424668f3"},{url:"/banner-2.jpg",revision:"d08fc088d9d75823e8259261e9208cf2"},{url:"/contact-us.png",revision:"1f0a34dcebe83884f7d986c29069cff0"},{url:"/cta-bg.png",revision:"0dd94ded00743cc74d0da8027b579b73"},{url:"/cta/cta-bg-1.jpg",revision:"45b3e432be8fc7f3eb09f2568a61d8c2"},{url:"/cta/cta-bg-2.jpg",revision:"83ca16fa37654fd7de5518d0f347a29c"},{url:"/cta/cta-bg-3.jpg",revision:"42c150e775ca1b35399b3428d5ee2e00"},{url:"/cta/delivery-boy.png",revision:"9914b651b1428467046e8b886166dac9"},{url:"/facebook-page.png",revision:"0a668853fee7423c27bb93b947a6fc1c"},{url:"/faq.svg",revision:"2979a7b97c0c5d96960e9558a389bbd4"},{url:"/favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"/icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"/icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"/icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"/icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"/kachabazar-store-min.png",revision:"6bf12cd3f0a8d7ccf8285ea0672bf182"},{url:"/logo/bag-shoping.svg",revision:"54014870b794b613e62017decbe943d0"},{url:"/logo/logo-color.png",revision:"fa727b7deb210008783eb70fb800c07a"},{url:"/logo/logo-color.svg",revision:"9cdfd2a1723ebe5d6fbfeb2a3a07765d"},{url:"/logo/logo-dark-2.svg",revision:"990e13afb1b79734e26b71f2fcc062d9"},{url:"/logo/logo-dark.svg",revision:"3d5619a9dd2312d20ee908259e95a635"},{url:"/logo/logo-light-2.svg",revision:"8e9e97fd3acd9a7aa3525e2c5eb93811"},{url:"/logo/logo-light.svg",revision:"a295f016c697789c084b023006b33ac5"},{url:"/manifest.json",revision:"1bdc898597594f46bcd9b0ae76e7c991"},{url:"/no-result.svg",revision:"508b2439b4b83ce579e826c9c625b675"},{url:"/page-header-bg.jpg",revision:"c7cf9224e6c1ae3add73d30c2ae7a8f8"},{url:"/payment-method/payment-logo.png",revision:"469911779f6463e5751cf5b7046384d2"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/slider/slider-1.jpg",revision:"9611448d0a85493ee21c5317323cb601"},{url:"/slider/slider-2.jpg",revision:"fe98a6e4032332b05d52aa1254f085a7"},{url:"/slider/slider-3.jpg",revision:"06cef52491c3b8682d15596e784362bb"},{url:"/spinner.gif",revision:"9317b1364997865cda53478fb9302977"},{url:"/sw.js",revision:"3babca1d969f2ec8e3f712ae338713de"},{url:"/team/team-1.jpg",revision:"e318a12728d39d01c926be7fbbcd6876"},{url:"/team/team-2.jpg",revision:"ba945720d060272d028634a8729b7d2b"},{url:"/team/team-3.jpg",revision:"dfa429c7e964aa5a8ea01c3959710529"},{url:"/team/team-4.jpg",revision:"490ae645f676543ef728fc2548a6bd3f"},{url:"/team/team-5.jpg",revision:"a345363d59da88084c7fd6de76cc978c"},{url:"/team/team-6.jpg",revision:"39e8a23ea2ae4bc88316d1ddad73132c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));