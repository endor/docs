/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "363322f59ba9371342d4f2d468df6a85"
  },
  {
    "url": "annotations.html",
    "revision": "c7559bd39dead51189eef780b1832369"
  },
  {
    "url": "assets/css/0.styles.a325861f.css",
    "revision": "b039d31404100ac11700bdd8f352875b"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.efc41859.js",
    "revision": "1025e0f24772d0f0a275e25914f49bf9"
  },
  {
    "url": "assets/js/11.122cf887.js",
    "revision": "0a740083b4e526a2152435da4c72634d"
  },
  {
    "url": "assets/js/12.b7f71486.js",
    "revision": "a1002e5ce52b73c10db3696ac3b68552"
  },
  {
    "url": "assets/js/13.8be139b4.js",
    "revision": "0dbd3f6863f2025a71c0f844d308af5a"
  },
  {
    "url": "assets/js/14.d6672a08.js",
    "revision": "cd91d28d83b8374fb54976652783624f"
  },
  {
    "url": "assets/js/15.502dc0ed.js",
    "revision": "2b35a77d7b9e41c624a54ea0926f2f1a"
  },
  {
    "url": "assets/js/16.e6f71bec.js",
    "revision": "45d7f6d435b9963fbf273532cd5519a7"
  },
  {
    "url": "assets/js/17.e5301d8e.js",
    "revision": "b63830666c5b56f84013afd963ff0167"
  },
  {
    "url": "assets/js/18.34cb7ccb.js",
    "revision": "f889011efe56fdbc29418e91835c3ccd"
  },
  {
    "url": "assets/js/19.d1da5c58.js",
    "revision": "c73190e0b5bd02438084051ac246f483"
  },
  {
    "url": "assets/js/2.4a7f1085.js",
    "revision": "fc4faad8bbfd16f7c4d07b7295718640"
  },
  {
    "url": "assets/js/20.71ddaf2a.js",
    "revision": "ace70d2ec765dfa7d80969b9024f4e72"
  },
  {
    "url": "assets/js/21.afed0d8f.js",
    "revision": "5d341906280251310caaabe6d6abff3f"
  },
  {
    "url": "assets/js/22.d8736a8f.js",
    "revision": "95e2204560263cab13d90b8b22bec6bf"
  },
  {
    "url": "assets/js/23.f19318f1.js",
    "revision": "d87b5def87a4a51f499f850fdef500fa"
  },
  {
    "url": "assets/js/24.83cf2032.js",
    "revision": "0a32512f8212e8b5592548a85f7e9219"
  },
  {
    "url": "assets/js/25.ca2126eb.js",
    "revision": "f4cd49e65fb20fb5c71825c526c4b58b"
  },
  {
    "url": "assets/js/3.895a7bcc.js",
    "revision": "0dc81230b4413c5d5b7b89579f9677b8"
  },
  {
    "url": "assets/js/4.aabeda1c.js",
    "revision": "8133ae75e86b29fd1a50aee70853d441"
  },
  {
    "url": "assets/js/5.f574af08.js",
    "revision": "22a2ac135087ca9fd1e689a0306f5340"
  },
  {
    "url": "assets/js/6.027b84f5.js",
    "revision": "d4b24a595c4c30ac49ed3525c9727a20"
  },
  {
    "url": "assets/js/7.96523402.js",
    "revision": "c838adbf1c2d55e5aad16c52e24b97d4"
  },
  {
    "url": "assets/js/8.2e2c1755.js",
    "revision": "daf0ca9bb8261e5452431e5431700a6c"
  },
  {
    "url": "assets/js/9.71e5089d.js",
    "revision": "68b88be9f2a1d604fe20058aa34ea141"
  },
  {
    "url": "assets/js/app.6ea22ef9.js",
    "revision": "d852ad4f97b3e7e479afa764d3eac2b7"
  },
  {
    "url": "authentication.html",
    "revision": "27cc517e5ab6dd9e5bab8675f4c8c155"
  },
  {
    "url": "decorators.html",
    "revision": "0504af53592f1d5a2926e4833e0775a5"
  },
  {
    "url": "descriptions.html",
    "revision": "2dae367b95349a9c678e8ecd2b0ceb89"
  },
  {
    "url": "di.html",
    "revision": "005b85fb29e6e09f980cb947d866ee72"
  },
  {
    "url": "error-handling.html",
    "revision": "06579c48a67ecd3ab058e6d46cc13c86"
  },
  {
    "url": "examples.html",
    "revision": "3b7432e5fb273e268b679afe82a2329c"
  },
  {
    "url": "faq.html",
    "revision": "25e4500af20309e77875efd05e656ced"
  },
  {
    "url": "file-upload.html",
    "revision": "529e24f71b5d1c04c74565b2339578f3"
  },
  {
    "url": "generating.html",
    "revision": "4dd1d5b85cf14174e3184ba678381342"
  },
  {
    "url": "getting-started.html",
    "revision": "11ffd687fde7e8633d3c9311af081045"
  },
  {
    "url": "index.html",
    "revision": "35d3f2550c6605a727e8303e4b356b9d"
  },
  {
    "url": "introduction.html",
    "revision": "aed406a85917f578a32fa71f97ec0117"
  },
  {
    "url": "live-reloading.html",
    "revision": "d74f9a7318bc9a70767bfbbb19de5660"
  },
  {
    "url": "path-mapping.html",
    "revision": "fc23dfad047004be49758a2f91274f05"
  },
  {
    "url": "routes.html",
    "revision": "3258bae6c6c7375efbd79633cffa32d0"
  },
  {
    "url": "templates.html",
    "revision": "61788c0f4b4e0be67af97447e3cd990c"
  },
  {
    "url": "upgrading.html",
    "revision": "0eb352853f0714bda049585ee3b872e8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
