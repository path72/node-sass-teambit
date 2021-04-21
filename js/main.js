/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

// ###################################################### 
// # Vue.js - MAIN INSTANCE                             # 
// ###################################################### 
var app = new Vue({
  el: '#app',
  data: {
    "switch": 0,
    logo: ['img/logo.svg', 'img/TB_logo.png'],
    navEntries: [{
      text: 'Solutions',
      iconSrc: '',
      "class": '',
      href: '#',
      fas: 'fas fa-caret-down'
    }, {
      text: 'Pricing',
      iconSrc: '',
      "class": '',
      href: '#',
      fas: ''
    }, {
      text: 'Blog',
      iconSrc: '',
      "class": '',
      href: '#',
      fas: ''
    }, {
      text: 'Sign in',
      iconSrc: '',
      "class": '',
      href: '#',
      fas: ''
    }, {
      text: 'Signup',
      iconSrc: 'img/google-logo.svg',
      "class": 'btn btn_empty nav',
      href: '#',
      fas: ''
    }],
    footerMenus: [{
      title: 'Product',
      links: [{
        text: 'Feedback',
        href: '#',
        target: ''
      }, {
        text: 'Surveys',
        href: '#',
        target: ''
      }, {
        text: 'Reviews',
        href: '#',
        target: ''
      }, {
        text: 'Praise',
        href: '#',
        target: ''
      }, {
        text: 'Slack Integration',
        href: '#',
        target: ''
      }, {
        text: 'Schedule a demo',
        href: '#',
        target: ''
      }, {
        text: 'Pricing',
        href: '#',
        target: ''
      }]
    }, {
      title: 'About',
      links: [{
        text: 'About',
        href: '#',
        target: ''
      }, {
        text: 'Terms and privacy',
        href: '#',
        target: ''
      }, {
        text: 'Help Center',
        href: '#',
        target: ''
      }, {
        text: 'Blog',
        href: '#',
        target: ''
      }, {
        text: 'Digest',
        href: '#',
        target: ''
      }]
    }, {
      title: 'Connect',
      links: [{
        text: 'Contact us',
        href: '#',
        target: ''
      }, {
        text: 'Twitter',
        href: '#',
        target: ''
      }, {
        text: 'Facebook',
        href: '#',
        target: ''
      }, {
        text: 'Linkedin',
        href: '#',
        target: ''
      }]
    }, {
      title: 'Labs',
      links: [{
        text: 'Manager checklist',
        href: '#',
        target: ''
      }, {
        text: 'Manager assessment',
        href: '#',
        target: ''
      }, {
        text: 'Manager handbook',
        href: '#',
        target: ''
      }]
    }, {
      title: 'From the blog',
      links: [{
        text: 'How to change your company culture: a four-step framework',
        href: '#',
        target: ''
      }, {
        text: 'How teams can be more productive by killing 8-hour workday',
        href: '#',
        target: ''
      }, {
        text: 'How to build high performing teams inspired by nature',
        href: '#',
        target: ''
      }, {
        text: 'View all',
        href: '#',
        target: ''
      }]
    }],
    testimonialEntry: "\n\t\t\t\tWe are experiencing what Gallup calls 'an employee engagement crisis'. Just one-third of people at work are engaged.\n\t\t\t\t<br><br>\n\t\t\t\tTo improve performance and engagement companies rely on the same principles as industrial-age factories. But all those annual performance reviews and hundred-question surveys don't work anymore. People want regular feedback. Leaders who don't embrace this change end up with misaligned, disengaged and dwindling team.\n\t\t\t\t<br><br>\n\t\t\t\tWe designed Teambit to change that. It empowers teams to make feedback a daily habit. Everybody knows what they are doing well and what they need to improve, leading to better performing, engaged and happier teams.\n\t\t\t\t<br><br>\n\t\t\t\tWe are on a mission to make worklife exciting. Come join us.\n\t\t\t"
  },
  methods: {},
  computed: {},
  created: function created() {},
  mounted: function mounted() {
    var i = 0;
    if (this["switch"] == 1) i = 1;
    document.getElementById('logo').src = this.logo[i];
  },
  updated: function updated() {}
}); // Vue.config.devtools = true;

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkscss"] = self["webpackChunkscss"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;