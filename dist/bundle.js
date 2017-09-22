/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(6);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)(undefined);
	// imports


	// module
	exports.push([module.id, "\tbody,\r\n\thtml {\r\n\t    height: 100%;\r\n\t    overflow: hidden;\r\n\t}\r\n\t\r\n\tbody {\r\n\t    padding: 100px 0;\r\n\t}\r\n\t\r\n\t.hand {\r\n\t    position: relative;\r\n\t    top: 30%;\r\n\t    left: 50%;\r\n\t    background: #f3c5ad;\r\n\t    width: 300px;\r\n\t    height: 230px;\r\n\t    border-radius: 30px;\r\n\t    border: 1px solid #8c3e15;\r\n\t    cursor: pointer;\r\n\t    -webkit-transform: rotate(90deg);\r\n\t}\r\n\t\r\n\t.hand .finger {\r\n\t    position: absolute;\r\n\t    bottom: 80%;\r\n\t    right: 0;\r\n\t    width: 75px;\r\n\t    height: 75px;\r\n\t    /*border: 1px solid red;*/\r\n\t    border-top-left-radius: 75px;\r\n\t    border-top-right-radius: 75px;\r\n\t    background-color: #f3c5ad;\r\n\t    border-top: 1px solid #b9511b;\r\n\t    border-right: 1px solid #b9511b;\r\n\t    border-left: 1px solid #b9511b;\r\n\t}\r\n\t\r\n\t.hand .finger:nth-of-type(1) {\r\n\t    right: -1px;\r\n\t}\r\n\t\r\n\t.hand .finger:nth-of-type(2) {\r\n\t    right: 74px;\r\n\t}\r\n\t\r\n\t.hand .finger:nth-of-type(3) {\r\n\t    right: 149px;\r\n\t}\r\n\t\r\n\t.hand .finger:nth-of-type(4) {\r\n\t    right: 224px;\r\n\t}\r\n\t\r\n\t.hand .finger:nth-of-type(5) {\r\n\t    right: 282px;\r\n\t    top: 92px;\r\n\t    background-color: #f3c5ad;\r\n\t    height: 120px;\r\n\t    -webkit-transform: rotate(-53deg);\r\n\t    border-left: 1px solid #b9511b;\r\n\t    border-top: none;\r\n\t    border-right: none;\r\n\t}\r\n\t\r\n\t.hand .finger:before {\r\n\t    content: \"\";\r\n\t    width: 75px;\r\n\t    height: 75px;\r\n\t    background: linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%);\r\n\t    position: absolute;\r\n\t    right: 0;\r\n\t    top: 4px;\r\n\t    border-top-left-radius: 75px;\r\n\t    border-top-right-radius: 75px;\r\n\t}\r\n\t\r\n\t.arm {\r\n\t    width: 200px;\r\n\t    height: 200px;\r\n\t    position: absolute;\r\n\t    background-color: #f3c5ad;\r\n\t    right: 14%;\r\n\t    top: 88%;\r\n\t    border-left: 1px solid #b9511b;\r\n\t}\r\n\t\r\n\t.num {\r\n\t    display: block !important;\r\n\t    -webkit-animation: neon2 1.5s ease-in-out alternate;\r\n\t    animation: neon2 1.5s ease-in-out alternate;\r\n\t    -webkit-animation-iteration-count: 1;\r\n\t    /* Safari 和 Chrome */\r\n\t    font-size: 40px;\r\n\t    color: #FF1177;\r\n\t    position: absolute;\r\n\t    right: 10%;\r\n\t    top: 10%;\r\n\t}\r\n\t\r\n\t.hide {\r\n\t    display: none;\r\n\t}\r\n\t\r\n\t@-webkit-keyframes neon2 {\r\n\t    from {\r\n\t        opacity: 0;\r\n\t        -webkit-transform: translateY(-20px);\r\n\t        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;\r\n\t    }\r\n\t    to {\r\n\t        opacity: 1;\r\n\t        -webkit-transform: translateY(0);\r\n\t        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;\r\n\t    }\r\n\t}\r\n\t\r\n\tbody {\r\n\t    background: radial-gradient(ellipse at top left, #94D28A 0%, #D0D8CB 57%);\r\n\t}", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function(useSourceMap) {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if(item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}

		if (useSourceMap && typeof btoa === 'function') {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
			});

			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}

		return [content].join('\n');
	}

	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

		return '/*# ' + data + ' */';
	}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/

	var stylesInDom = {};

	var	memoize = function (fn) {
		var memo;

		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	};

	var isOldIE = memoize(function () {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	});

	var getElement = (function (fn) {
		var memo = {};

		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}

			return memo[selector]
		};
	})(function (target) {
		return document.querySelector(target)
	});

	var singleton = null;
	var	singletonCounter = 0;
	var	stylesInsertedAtTop = [];

	var	fixUrls = __webpack_require__(5);

	module.exports = function(list, options) {
		if (false) {
			if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};

		options.attrs = typeof options.attrs === "object" ? options.attrs : {};

		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (!options.singleton) options.singleton = isOldIE();

		// By default, add <style> tags to the <head> element
		if (!options.insertInto) options.insertInto = "head";

		// By default, add <style> tags to the bottom of the target
		if (!options.insertAt) options.insertAt = "bottom";

		var styles = listToStyles(list, options);

		addStylesToDom(styles, options);

		return function update (newList) {
			var mayRemove = [];

			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];

				domStyle.refs--;
				mayRemove.push(domStyle);
			}

			if(newList) {
				var newStyles = listToStyles(newList, options);
				addStylesToDom(newStyles, options);
			}

			for (var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];

				if(domStyle.refs === 0) {
					for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

					delete stylesInDom[domStyle.id];
				}
			}
		};
	};

	function addStylesToDom (styles, options) {
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			if(domStyle) {
				domStyle.refs++;

				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}

				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];

				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}

				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles (list, options) {
		var styles = [];
		var newStyles = {};

		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = options.base ? item[0] + options.base : item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};

			if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
			else newStyles[id].parts.push(part);
		}

		return styles;
	}

	function insertStyleElement (options, style) {
		var target = getElement(options.insertInto)

		if (!target) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}

		var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

		if (options.insertAt === "top") {
			if (!lastStyleElementInsertedAtTop) {
				target.insertBefore(style, target.firstChild);
			} else if (lastStyleElementInsertedAtTop.nextSibling) {
				target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				target.appendChild(style);
			}
			stylesInsertedAtTop.push(style);
		} else if (options.insertAt === "bottom") {
			target.appendChild(style);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement (style) {
		if (style.parentNode === null) return false;
		style.parentNode.removeChild(style);

		var idx = stylesInsertedAtTop.indexOf(style);
		if(idx >= 0) {
			stylesInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement (options) {
		var style = document.createElement("style");

		options.attrs.type = "text/css";

		addAttrs(style, options.attrs);
		insertStyleElement(options, style);

		return style;
	}

	function createLinkElement (options) {
		var link = document.createElement("link");

		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";

		addAttrs(link, options.attrs);
		insertStyleElement(options, link);

		return link;
	}

	function addAttrs (el, attrs) {
		Object.keys(attrs).forEach(function (key) {
			el.setAttribute(key, attrs[key]);
		});
	}

	function addStyle (obj, options) {
		var style, update, remove, result;

		// If a transform function was defined, run it on the css
		if (options.transform && obj.css) {
		    result = options.transform(obj.css);

		    if (result) {
		    	// If transform returns a value, use that instead of the original css.
		    	// This allows running runtime transformations on the css.
		    	obj.css = result;
		    } else {
		    	// If the transform function returns a falsy value, don't add this css.
		    	// This allows conditional loading of css
		    	return function() {
		    		// noop
		    	};
		    }
		}

		if (options.singleton) {
			var styleIndex = singletonCounter++;

			style = singleton || (singleton = createStyleElement(options));

			update = applyToSingletonTag.bind(null, style, styleIndex, false);
			remove = applyToSingletonTag.bind(null, style, styleIndex, true);

		} else if (
			obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function"
		) {
			style = createLinkElement(options);
			update = updateLink.bind(null, style, options);
			remove = function () {
				removeStyleElement(style);

				if(style.href) URL.revokeObjectURL(style.href);
			};
		} else {
			style = createStyleElement(options);
			update = applyToTag.bind(null, style);
			remove = function () {
				removeStyleElement(style);
			};
		}

		update(obj);

		return function updateStyle (newObj) {
			if (newObj) {
				if (
					newObj.css === obj.css &&
					newObj.media === obj.media &&
					newObj.sourceMap === obj.sourceMap
				) {
					return;
				}

				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;

			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag (style, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (style.styleSheet) {
			style.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = style.childNodes;

			if (childNodes[index]) style.removeChild(childNodes[index]);

			if (childNodes.length) {
				style.insertBefore(cssNode, childNodes[index]);
			} else {
				style.appendChild(cssNode);
			}
		}
	}

	function applyToTag (style, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			style.setAttribute("media", media)
		}

		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			while(style.firstChild) {
				style.removeChild(style.firstChild);
			}

			style.appendChild(document.createTextNode(css));
		}
	}

	function updateLink (link, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		/*
			If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
			and there is no publicPath defined then lets turn convertToAbsoluteUrls
			on by default.  Otherwise default to the convertToAbsoluteUrls option
			directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

		if (options.convertToAbsoluteUrls || autoFixUrls) {
			css = fixUrls(css);
		}

		if (sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = link.href;

		link.href = URL.createObjectURL(blob);

		if(oldSrc) URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	
	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */

	module.exports = function (css) {
	  // get current location
	  var location = typeof window !== "undefined" && window.location;

	  if (!location) {
	    throw new Error("fixUrls requires window.location");
	  }

		// blank or null?
		if (!css || typeof css !== "string") {
		  return css;
	  }

	  var baseUrl = location.protocol + "//" + location.host;
	  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

		// convert each url(...)
		/*
		This regular expression is just a way to recursively match brackets within
		a string.

		 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
		   (  = Start a capturing group
		     (?:  = Start a non-capturing group
		         [^)(]  = Match anything that isn't a parentheses
		         |  = OR
		         \(  = Match a start parentheses
		             (?:  = Start another non-capturing groups
		                 [^)(]+  = Match anything that isn't a parentheses
		                 |  = OR
		                 \(  = Match a start parentheses
		                     [^)(]*  = Match anything that isn't a parentheses
		                 \)  = Match a end parentheses
		             )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
		 \)  = Match a close parens

		 /gi  = Get all matches, not the first.  Be case insensitive.
		 */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl
				.trim()
				.replace(/^"(.*)"$/, function(o, $1){ return $1; })
				.replace(/^'(.*)'$/, function(o, $1){ return $1; });

			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			  return fullMatch;
			}

			// convert the url to a full url
			var newUrl;

			if (unquotedOrigUrl.indexOf("//") === 0) {
			  	//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}

			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});

		// send back the fixed css
		return fixedCss;
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _xTag = __webpack_require__(7);

	var _xTag2 = _interopRequireDefault(_xTag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_xTag2.default.register('x-clock', {
	    lifecycle: {
	        created: function created() {
	            this.start();
	        }
	    },
	    methods: {
	        start: function start() {
	            this.update();
	            this.xtag.interval = setInterval(this.update.bind(this), 1000);
	        },
	        stop: function stop() {
	            this.xtag.interval = clearInterval(this.xtag.interval);
	        },
	        update: function update() {
	            this.textContent = new Date().toLocaleTimeString();
	        }
	    },
	    events: {
	        tap: function tap() {
	            if (this.xtag.interval) this.stop();else this.start();
	        }
	    }
	});

	_xTag2.default.register('x-praise', {
	    content: '<div class="hand" id="thumb">\n                    <div class="finger"></div>\n                    <div class="finger"></div>\n                    <div class="finger"></div>\n                    <div class="finger"></div>\n                    <div class="finger thumb"></div>\n                    <div class="arm"></div>\n                </div>\n                <span class="hide" id="animation">+1</span>',
	    lifecycle: {
	        created: function created() {}
	    },
	    methods: {}
	});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function () {

	/*** Variables ***/

	  var win = window,
	    doc = document,
	    attrProto = {
	      setAttribute: Element.prototype.setAttribute,
	      removeAttribute: Element.prototype.removeAttribute
	    },
	    hasShadow = Element.prototype.createShadowRoot,
	    container = doc.createElement('div'),
	    noop = function(){},
	    trueop = function(){ return true; },
	    regexReplaceCommas = /,/g,
	    regexCamelToDash = /([a-z])([A-Z])/g,
	    regexPseudoParens = /\(|\)/g,
	    regexPseudoCapture = /:(\w+)\u276A(.+?(?=\u276B))|:(\w+)/g,
	    regexDigits = /(\d+)/g,
	    keypseudo = {
	      action: function (pseudo, event) {
	        return pseudo.value.match(regexDigits).indexOf(String(event.keyCode)) > -1 == (pseudo.name == 'keypass') || null;
	      }
	    },
	    /*
	      - The prefix object generated here is added to the xtag object as xtag.prefix later in the code
	      - Prefix provides a variety of prefix variations for the browser in which your code is running
	      - The 4 variations of prefix are as follows:
	        * prefix.dom: the correct prefix case and form when used on DOM elements/style properties
	        * prefix.lowercase: a lowercase version of the prefix for use in various user-code situations
	        * prefix.css: the lowercase, dashed version of the prefix
	        * prefix.js: addresses prefixed APIs present in global and non-Element contexts
	    */
	    prefix = (function () {
	      var keys = Object.keys(window).join();
	      var pre = ((keys.match(/,(ms)/) || keys.match(/,(moz)/) || keys.match(/,(O)/)) || [null, 'webkit'])[1].toLowerCase();
	      return {
	        dom: pre == 'ms' ? 'MS' : pre,
	        lowercase: pre,
	        css: '-' + pre + '-',
	        js: pre == 'ms' ? pre : pre.charAt(0).toUpperCase() + pre.substring(1)
	      };
	    })(),
	    matchSelector = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype[prefix.lowercase + 'MatchesSelector'];

	/*** Functions ***/

	// Utilities

	  /*
	    This is an enhanced typeof check for all types of objects. Where typeof would normaly return
	    'object' for many common DOM objects (like NodeLists and HTMLCollections).
	    - For example: typeOf(document.children) will correctly return 'htmlcollection'
	  */
	  var typeCache = {},
	      typeString = typeCache.toString,
	      typeRegexp = /\s([a-zA-Z]+)/;
	  function typeOf(obj) {
	    var type = typeString.call(obj);
	    return typeCache[type] || (typeCache[type] = type.match(typeRegexp)[1].toLowerCase());
	  }

	  function clone(item, type){
	    var fn = clone[type || typeOf(item)];
	    return fn ? fn(item) : item;
	  }
	    clone.object = function(src){
	      var obj = {};
	      for (var key in src) obj[key] = clone(src[key]);
	      return obj;
	    };
	    clone.array = function(src){
	      var i = src.length, array = new Array(i);
	      while (i--) array[i] = clone(src[i]);
	      return array;
	    };

	  /*
	    The toArray() method allows for conversion of any object to a true array. For types that
	    cannot be converted to an array, the method returns a 1 item array containing the passed-in object.
	  */
	  var unsliceable = { 'undefined': 1, 'null': 1, 'number': 1, 'boolean': 1, 'string': 1, 'function': 1 };
	  function toArray(obj){
	    return unsliceable[typeOf(obj)] ? [obj] : Array.prototype.slice.call(obj, 0);
	  }

	// DOM

	  var str = '';
	  function query(element, selector){
	    return (selector || str).length ? toArray(element.querySelectorAll(selector)) : [];
	  }

	// Pseudos

	  function parsePseudo(fn){fn();}

	// Mixins

	  function mergeOne(source, key, current){
	    var type = typeOf(current);
	    if (type == 'object' && typeOf(source[key]) == 'object') xtag.merge(source[key], current);
	    else source[key] = clone(current, type);
	    return source;
	  }

	  function mergeMixin(tag, original, mixin, name) {
	    var key, keys = {};
	    for (var z in original) keys[z.split(':')[0]] = z;
	    for (z in mixin) {
	      key = keys[z.split(':')[0]];
	      if (typeof original[key] == 'function') {
	        if (!key.match(':mixins')) {
	          original[key + ':mixins'] = original[key];
	          delete original[key];
	          key = key + ':mixins';
	        }
	        original[key].__mixin__ = xtag.applyPseudos(z + (z.match(':mixins') ? '' : ':mixins'), mixin[z], tag.pseudos, original[key].__mixin__);
	      }
	      else {
	        original[z] = mixin[z];
	        delete original[key];
	      }
	    }
	  }

	  var uniqueMixinCount = 0;
	  function addMixin(tag, original, mixin){
	    for (var z in mixin){
	      original[z + ':__mixin__(' + (uniqueMixinCount++) + ')'] = xtag.applyPseudos(z, mixin[z], tag.pseudos);
	    }
	  }

	  function resolveMixins(mixins, output){
	    var index = mixins.length;
	    while (index--){
	      output.unshift(mixins[index]);
	      if (xtag.mixins[mixins[index]].mixins) resolveMixins(xtag.mixins[mixins[index]].mixins, output);
	    }
	    return output;
	  }

	  function applyMixins(tag) {
	    resolveMixins(tag.mixins, []).forEach(function(name){
	      var mixin = xtag.mixins[name];
	      for (var type in mixin) {
	        var item = mixin[type],
	            original = tag[type];
	        if (!original) tag[type] = item;
	        else {
	          switch (type){
	            case 'mixins': break;
	            case 'events': addMixin(tag, original, item); break;
	            case 'accessors':
	            case 'prototype':
	              for (var z in item) {
	                if (!original[z]) original[z] = item[z];
	                else mergeMixin(tag, original[z], item[z], name);
	              }
	              break;
	            default: mergeMixin(tag, original, item, name);
	          }
	        }
	      }
	    });
	    return tag;
	  }

	// Events

	  function delegateAction(pseudo, event) {
	    var match,
	        target = event.target,
	        root = event.currentTarget;
	    while (!match && target && target != root) {
	      if (target.tagName && matchSelector.call(target, pseudo.value)) match = target;
	      target = target.parentNode;
	    }
	    if (!match && root.tagName && matchSelector.call(root, pseudo.value)) match = root;
	    return match ? pseudo.listener = pseudo.listener.bind(match) : null;
	  }

	  function touchFilter(event){
	    return event.button === 0;
	  }

	  function writeProperty(key, event, base, desc){
	    if (desc) event[key] = base[key];
	    else Object.defineProperty(event, key, {
	      writable: true,
	      enumerable: true,
	      value: base[key]
	    });
	  }

	  var skipProps = {};
	  for (var z in doc.createEvent('CustomEvent')) skipProps[z] = 1;
	  function inheritEvent(event, base){
	    var desc = Object.getOwnPropertyDescriptor(event, 'target');
	    for (var z in base) {
	      if (!skipProps[z]) writeProperty(z, event, base, desc);
	    }
	    event.baseEvent = base;
	  }

	// Accessors

	  function modAttr(element, attr, name, value, method){
	    attrProto[method].call(element, name, attr && attr.boolean ? '' : value);
	  }

	  function syncAttr(element, attr, name, value, method){
	    if (attr && (attr.property || attr.selector)) {
	      var nodes = attr.property ? [element.xtag[attr.property]] : attr.selector ? xtag.query(element, attr.selector) : [],
	          index = nodes.length;
	      while (index--) nodes[index][method](name, value);
	    }
	  }

	  function attachProperties(tag, prop, z, accessor, attr, name){
	    var key = z.split(':'), type = key[0];
	    if (type == 'get') {
	      key[0] = prop;
	      tag.prototype[prop].get = xtag.applyPseudos(key.join(':'), accessor[z], tag.pseudos, accessor[z]);
	    }
	    else if (type == 'set') {
	      key[0] = prop;
	      var setter = tag.prototype[prop].set = xtag.applyPseudos(key.join(':'), attr ? function(value){
	        var old, method = 'setAttribute';
	        if (attr.boolean){
	          value = !!value;
	          old = this.hasAttribute(name);
	          if (!value) method = 'removeAttribute';
	        }
	        else {
	          value = attr.validate ? attr.validate.call(this, value) : value;
	          old = this.getAttribute(name);
	        }
	        modAttr(this, attr, name, value, method);
	        accessor[z].call(this, value, old);
	        syncAttr(this, attr, name, value, method);
	      } : accessor[z] ? function(value){
	        accessor[z].call(this, value);
	      } : null, tag.pseudos, accessor[z]);

	      if (attr) attr.setter = accessor[z];
	    }
	    else tag.prototype[prop][z] = accessor[z];
	  }

	  function parseAccessor(tag, prop){
	    tag.prototype[prop] = {};
	    var accessor = tag.accessors[prop],
	        attr = accessor.attribute,
	        name;

	    if (attr) {
	      name = attr.name = (attr ? (attr.name || prop.replace(regexCamelToDash, '$1-$2')) : prop).toLowerCase();
	      attr.key = prop;
	      tag.attributes[name] = attr;
	    }

	    for (var z in accessor) attachProperties(tag, prop, z, accessor, attr, name);

	    if (attr) {
	      if (!tag.prototype[prop].get) {
	        var method = (attr.boolean ? 'has' : 'get') + 'Attribute';
	        tag.prototype[prop].get = function(){
	          return this[method](name);
	        };
	      }
	      if (!tag.prototype[prop].set) tag.prototype[prop].set = function(value){
	        value = attr.boolean ? !!value : attr.validate ? attr.validate.call(this, value) : value;
	        var method = attr.boolean ? (value ? 'setAttribute' : 'removeAttribute') : 'setAttribute';
	        modAttr(this, attr, name, value, method);
	        syncAttr(this, attr, name, value, method);
	      };
	    }
	  }

	  var unwrapComment = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//;
	  function parseMultiline(fn){
	    return typeof fn == 'function' ? unwrapComment.exec(fn.toString())[1] : fn;
	  }

	/*** X-Tag Object Definition ***/

	  var xtag = {
	    tags: {},
	    defaultOptions: {
	      pseudos: [],
	      mixins: [],
	      events: {},
	      methods: {},
	      accessors: {},
	      lifecycle: {},
	      attributes: {},
	      'prototype': {
	        xtag: {
	          get: function(){
	            return this.__xtag__ ? this.__xtag__ : (this.__xtag__ = { data: {} });
	          }
	        }
	      }
	    },
	    register: function (name, options) {
	      var _name;
	      if (typeof name == 'string') _name = name.toLowerCase();
	      else throw 'First argument must be a Custom Element string name';
	      xtag.tags[_name] = options || {};

	      var basePrototype = options.prototype;
	      delete options.prototype;
	      var tag = xtag.tags[_name].compiled = applyMixins(xtag.merge({}, xtag.defaultOptions, options));
	      var proto = tag.prototype;
	      var lifecycle = tag.lifecycle;

	      for (var z in tag.events) tag.events[z] = xtag.parseEvent(z, tag.events[z]);
	      for (z in lifecycle) lifecycle[z.split(':')[0]] = xtag.applyPseudos(z, lifecycle[z], tag.pseudos, lifecycle[z]);
	      for (z in tag.methods) proto[z.split(':')[0]] = { value: xtag.applyPseudos(z, tag.methods[z], tag.pseudos, tag.methods[z]), enumerable: true };
	      for (z in tag.accessors) parseAccessor(tag, z);

	      if (tag.shadow) tag.shadow = tag.shadow.nodeName ? tag.shadow : xtag.createFragment(tag.shadow);
	      if (tag.content) tag.content = tag.content.nodeName ? tag.content.innerHTML : parseMultiline(tag.content);
	      var created = lifecycle.created;
	      var finalized = lifecycle.finalized;
	      proto.createdCallback = {
	        enumerable: true,
	        value: function(){
	          var element = this;
	          if (tag.shadow && hasShadow) this.createShadowRoot().appendChild(tag.shadow.cloneNode(true));
	          if (tag.content) this.appendChild(document.createElement('div')).outerHTML = tag.content;
	          var output = created ? created.apply(this, arguments) : null;
	          xtag.addEvents(this, tag.events);
	          for (var name in tag.attributes) {
	            var attr = tag.attributes[name],
	                hasAttr = this.hasAttribute(name),
	                hasDefault = attr.def !== undefined;
	            if (hasAttr || attr.boolean || hasDefault) {
	              this[attr.key] = attr.boolean ? hasAttr : !hasAttr && hasDefault ? attr.def : this.getAttribute(name);
	            }
	          }
	          tag.pseudos.forEach(function(obj){
	            obj.onAdd.call(element, obj);
	          });
	          this.xtagComponentReady = true;
	          if (finalized) finalized.apply(this, arguments);
	          return output;
	        }
	      };

	      var inserted = lifecycle.inserted;
	      var removed = lifecycle.removed;
	      if (inserted || removed) {
	        proto.attachedCallback = { value: function(){
	          if (removed) this.xtag.__parentNode__ = this.parentNode;
	          if (inserted) return inserted.apply(this, arguments);
	        }, enumerable: true };
	      }
	      if (removed) {
	        proto.detachedCallback = { value: function(){
	          var args = toArray(arguments);
	          args.unshift(this.xtag.__parentNode__);
	          var output = removed.apply(this, args);
	          delete this.xtag.__parentNode__;
	          return output;
	        }, enumerable: true };
	      }
	      if (lifecycle.attributeChanged) proto.attributeChangedCallback = { value: lifecycle.attributeChanged, enumerable: true };

	      proto.setAttribute = {
	        writable: true,
	        enumerable: true,
	        value: function (name, value){
	          var old;
	          var _name = name.toLowerCase();
	          var attr = tag.attributes[_name];
	          if (attr) {
	            old = this.getAttribute(_name);
	            value = attr.boolean ? '' : attr.validate ? attr.validate.call(this, value) : value;
	          }
	          modAttr(this, attr, _name, value, 'setAttribute');
	          if (attr) {
	            if (attr.setter) attr.setter.call(this, attr.boolean ? true : value, old);
	            syncAttr(this, attr, _name, value, 'setAttribute');
	          }
	        }
	      };

	      proto.removeAttribute = {
	        writable: true,
	        enumerable: true,
	        value: function (name){
	          var _name = name.toLowerCase();
	          var attr = tag.attributes[_name];
	          var old = this.hasAttribute(_name);
	          modAttr(this, attr, _name, '', 'removeAttribute');
	          if (attr) {
	            if (attr.setter) attr.setter.call(this, attr.boolean ? false : undefined, old);
	            syncAttr(this, attr, _name, '', 'removeAttribute');
	          }
	        }
	      };

	      var definition = {};
	      var instance = basePrototype instanceof win.HTMLElement;
	      var extended = tag['extends'] && (definition['extends'] = tag['extends']);

	      if (basePrototype) Object.getOwnPropertyNames(basePrototype).forEach(function(z){
	        var prop = proto[z];
	        var desc = instance ? Object.getOwnPropertyDescriptor(basePrototype, z) : basePrototype[z];
	        if (prop) {
	          for (var y in desc) {
	            if (typeof desc[y] == 'function' && prop[y]) prop[y] = xtag.wrap(desc[y], prop[y]);
	            else prop[y] = desc[y];
	          }
	        }
	        proto[z] = prop || desc;
	      });

	      definition['prototype'] = Object.create(
	        extended ? Object.create(doc.createElement(extended).constructor).prototype : win.HTMLElement.prototype,
	        proto
	      );

	      return doc.registerElement(_name, definition);
	    },

	    /* Exposed Variables */

	    mixins: {},
	    prefix: prefix,
	    captureEvents: { focus: 1, blur: 1, scroll: 1, DOMMouseScroll: 1 },
	    customEvents: {
	      animationstart: {
	        attach: [prefix.dom + 'AnimationStart']
	      },
	      animationend: {
	        attach: [prefix.dom + 'AnimationEnd']
	      },
	      transitionend: {
	        attach: [prefix.dom + 'TransitionEnd']
	      },
	      move: {
	        attach: ['pointermove']
	      },
	      enter: {
	        attach: ['pointerenter']
	      },
	      leave: {
	        attach: ['pointerleave']
	      },
	      scrollwheel: {
	        attach: ['DOMMouseScroll', 'mousewheel'],
	        condition: function(event){
	          event.delta = event.wheelDelta ? event.wheelDelta / 40 : Math.round(event.detail / 3.5 * -1);
	          return true;
	        }
	      },
	      tap: {
	        attach: ['pointerdown', 'pointerup'],
	        condition: function(event, custom){
	          if (event.type == 'pointerdown') {
	            custom.startX = event.clientX;
	            custom.startY = event.clientY;
	          }
	          else if (event.button === 0 &&
	                   Math.abs(custom.startX - event.clientX) < 10 &&
	                   Math.abs(custom.startY - event.clientY) < 10) return true;
	        }
	      },
	      tapstart: {
	        attach: ['pointerdown'],
	        condition: touchFilter
	      },
	      tapend: {
	        attach: ['pointerup'],
	        condition: touchFilter
	      },
	      tapmove: {
	        attach: ['pointerdown'],
	        condition: function(event, custom){
	          if (event.type == 'pointerdown') {
	            var listener = custom.listener.bind(this);
	            if (!custom.tapmoveListeners) custom.tapmoveListeners = xtag.addEvents(document, {
	              pointermove: listener,
	              pointerup: listener,
	              pointercancel: listener
	            });
	          }
	          else if (event.type == 'pointerup' || event.type == 'pointercancel') {
	            xtag.removeEvents(document, custom.tapmoveListeners);
	            custom.tapmoveListeners = null;
	          }
	          return true;
	        }
	      },
	      taphold: {
	        attach: ['pointerdown', 'pointerup'],
	        condition: function(event, custom){
	          if (event.type == 'pointerdown') {
	            (custom.pointers = custom.pointers || {})[event.pointerId] = setTimeout(
	              xtag.fireEvent.bind(null, this, 'taphold'),
	              custom.duration || 1000
	            );
	          }
	          else if (event.type == 'pointerup') {
	            if (custom.pointers) {
	              clearTimeout(custom.pointers[event.pointerId]);
	              delete custom.pointers[event.pointerId];
	            }
	          }
	          else return true;
	        }
	      }
	    },
	    pseudos: {
	      __mixin__: {},
	      mixins: {
	        onCompiled: function(fn, pseudo){
	          var mixin = pseudo.source && pseudo.source.__mixin__ || pseudo.source;
	          if (mixin) switch (pseudo.value) {
	            case null: case '': case 'before': return function(){
	              mixin.apply(this, arguments);
	              return fn.apply(this, arguments);
	            };
	            case 'after': return function(){
	              var returns = fn.apply(this, arguments);
	              mixin.apply(this, arguments);
	              return returns;
	            };
	            case 'none': return fn;
	          }
	          else return fn;
	        }
	      },
	      keypass: keypseudo,
	      keyfail: keypseudo,
	      delegate: {
	        action: delegateAction
	      },
	      preventable: {
	        action: function (pseudo, event) {
	          return !event.defaultPrevented;
	        }
	      },
	      duration: {
	        onAdd: function(pseudo){
	          pseudo.source.duration = Number(pseudo.value);
	        }
	      },
	      capture: {
	        onCompiled: function(fn, pseudo){
	          if (pseudo.source) pseudo.source.capture = true;
	        }
	      }
	    },

	    /* UTILITIES */

	    clone: clone,
	    typeOf: typeOf,
	    toArray: toArray,

	    wrap: function (original, fn) {
	      return function(){
	        var output = original.apply(this, arguments);
	        fn.apply(this, arguments);
	        return output;
	      };
	    },
	    /*
	      Recursively merges one object with another. The first argument is the destination object,
	      all other objects passed in as arguments are merged from right to left, conflicts are overwritten
	    */
	    merge: function(source, k, v){
	      if (typeOf(k) == 'string') return mergeOne(source, k, v);
	      for (var i = 1, l = arguments.length; i < l; i++){
	        var object = arguments[i];
	        for (var key in object) mergeOne(source, key, object[key]);
	      }
	      return source;
	    },

	    /*
	      ----- This should be simplified! -----
	      Generates a random ID string
	    */
	    uid: function(){
	      return Math.random().toString(36).substr(2,10);
	    },

	    /* DOM */

	    query: query,

	    skipTransition: function(element, fn, bind){
	      var prop = prefix.js + 'TransitionProperty';
	      element.style[prop] = element.style.transitionProperty = 'none';
	      var callback = fn ? fn.call(bind || element) : null;
	      return xtag.skipFrame(function(){
	        element.style[prop] = element.style.transitionProperty = '';
	        if (callback) callback.call(bind || element);
	      });
	    },

	    requestFrame: (function(){
	      var raf = win.requestAnimationFrame ||
	                win[prefix.lowercase + 'RequestAnimationFrame'] ||
	                function(fn){ return win.setTimeout(fn, 20); };
	      return function(fn){ return raf(fn); };
	    })(),

	    cancelFrame: (function(){
	      var cancel = win.cancelAnimationFrame ||
	                   win[prefix.lowercase + 'CancelAnimationFrame'] ||
	                   win.clearTimeout;
	      return function(id){ return cancel(id); };
	    })(),

	    skipFrame: function(fn){
	      var id = xtag.requestFrame(function(){ id = xtag.requestFrame(fn); });
	      return id;
	    },

	    matchSelector: function (element, selector) {
	      return matchSelector.call(element, selector);
	    },

	    set: function (element, method, value) {
	      element[method] = value;
	      if (window.CustomElements) CustomElements.upgradeAll(element);
	    },

	    innerHTML: function(el, html){
	      xtag.set(el, 'innerHTML', html);
	    },

	    hasClass: function (element, klass) {
	      return element.className.split(' ').indexOf(klass.trim())>-1;
	    },

	    addClass: function (element, klass) {
	      var list = element.className.trim().split(' ');
	      klass.trim().split(' ').forEach(function (name) {
	        if (!~list.indexOf(name)) list.push(name);
	      });
	      element.className = list.join(' ').trim();
	      return element;
	    },

	    removeClass: function (element, klass) {
	      var classes = klass.trim().split(' ');
	      element.className = element.className.trim().split(' ').filter(function (name) {
	        return name && !~classes.indexOf(name);
	      }).join(' ');
	      return element;
	    },

	    toggleClass: function (element, klass) {
	      return xtag[xtag.hasClass(element, klass) ? 'removeClass' : 'addClass'].call(null, element, klass);
	    },

	    /*
	      Runs a query on only the children of an element
	    */
	    queryChildren: function (element, selector) {
	      var id = element.id,
	          attr = '#' + (element.id = id || 'x_' + xtag.uid()) + ' > ',
	          parent = element.parentNode || !container.appendChild(element);
	      selector = attr + (selector + '').replace(regexReplaceCommas, ',' + attr);
	      var result = element.parentNode.querySelectorAll(selector);
	      if (!id) element.removeAttribute('id');
	      if (!parent) container.removeChild(element);
	      return toArray(result);
	    },

	    /*
	      Creates a document fragment with the content passed in - content can be
	      a string of HTML, an element, or an array/collection of elements
	    */
	    createFragment: function(content) {
	      var template = document.createElement('template');
	      if (content) {
	        if (content.nodeName) toArray(arguments).forEach(function(e){
	          template.content.appendChild(e);
	        });
	        else template.innerHTML = parseMultiline(content);
	      }
	      return document.importNode(template.content, true);
	    },

	    /*
	      Removes an element from the DOM for more performant node manipulation. The element
	      is placed back into the DOM at the place it was taken from.
	    */
	    manipulate: function(element, fn){
	      var next = element.nextSibling,
	          parent = element.parentNode,
	          returned = fn.call(element) || element;
	      if (next) parent.insertBefore(returned, next);
	      else parent.appendChild(returned);
	    },

	    /* PSEUDOS */

	    applyPseudos: function(key, fn, target, source) {
	      var listener = fn,
	          pseudos = {};
	      if (key.match(':')) {
	        var matches = [],
	            valueFlag = 0;
	        key.replace(regexPseudoParens, function(match){
	          if (match == '(') return ++valueFlag == 1 ? '\u276A' : '(';
	          return !--valueFlag ? '\u276B' : ')';
	        }).replace(regexPseudoCapture, function(z, name, value, solo){
	          matches.push([name || solo, value]);
	        });
	        var i = matches.length;
	        while (i--) parsePseudo(function(){
	          var name = matches[i][0],
	              value = matches[i][1];
	          if (!xtag.pseudos[name]) throw "pseudo not found: " + name + " " + value;
	          value = (value === '' || typeof value == 'undefined') ? null : value;
	          var pseudo = pseudos[i] = Object.create(xtag.pseudos[name]);
	          pseudo.key = key;
	          pseudo.name = name;
	          pseudo.value = value;
	          pseudo['arguments'] = (value || '').split(',');
	          pseudo.action = pseudo.action || trueop;
	          pseudo.source = source;
	          pseudo.onAdd = pseudo.onAdd || noop;
	          pseudo.onRemove = pseudo.onRemove || noop;
	          var original = pseudo.listener = listener;
	          listener = function(){
	            var output = pseudo.action.apply(this, [pseudo].concat(toArray(arguments)));
	            if (output === null || output === false) return output;
	            output = pseudo.listener.apply(this, arguments);
	            pseudo.listener = original;
	            return output;
	          };
	          if (!target) pseudo.onAdd.call(fn, pseudo);
	          else target.push(pseudo);
	        });
	      }
	      for (var z in pseudos) {
	        if (pseudos[z].onCompiled) listener = pseudos[z].onCompiled(listener, pseudos[z]) || listener;
	      }
	      return listener;
	    },

	    removePseudos: function(target, pseudos){
	      pseudos.forEach(function(obj){
	        obj.onRemove.call(target, obj);
	      });
	    },

	  /*** Events ***/

	    parseEvent: function(type, fn) {
	      var pseudos = type.split(':'),
	          key = pseudos.shift(),
	          custom = xtag.customEvents[key],
	          event = xtag.merge({
	            type: key,
	            stack: noop,
	            condition: trueop,
	            capture: xtag.captureEvents[key],
	            attach: [],
	            _attach: [],
	            pseudos: '',
	            _pseudos: [],
	            onAdd: noop,
	            onRemove: noop
	          }, custom || {});
	      event.attach = toArray(event.base || event.attach);
	      event.chain = key + (event.pseudos.length ? ':' + event.pseudos : '') + (pseudos.length ? ':' + pseudos.join(':') : '');
	      var stack = xtag.applyPseudos(event.chain, fn, event._pseudos, event);
	      event.stack = function(e){
	        e.currentTarget = e.currentTarget || this;
	        var detail = e.detail || {};
	        if (!detail.__stack__) return stack.apply(this, arguments);
	        else if (detail.__stack__ == stack) {
	          e.stopPropagation();
	          e.cancelBubble = true;
	          return stack.apply(this, arguments);
	        }
	      };
	      event.listener = function(e){
	        var args = toArray(arguments),
	            output = event.condition.apply(this, args.concat([event]));
	        if (!output) return output;
	        // The second condition in this IF is to address the following Blink regression: https://code.google.com/p/chromium/issues/detail?id=367537
	        // Remove this when affected browser builds with this regression fall below 5% marketshare
	        if (e.type != key && (e.baseEvent && e.type != e.baseEvent.type)) {
	          xtag.fireEvent(e.target, key, {
	            baseEvent: e,
	            detail: output !== true && (output.__stack__ = stack) ? output : { __stack__: stack }
	          });
	        }
	        else return event.stack.apply(this, args);
	      };
	      event.attach.forEach(function(name) {
	        event._attach.push(xtag.parseEvent(name, event.listener));
	      });
	      return event;
	    },

	    addEvent: function (element, type, fn, capture) {
	      var event = typeof fn == 'function' ? xtag.parseEvent(type, fn) : fn;
	      event._pseudos.forEach(function(obj){
	        obj.onAdd.call(element, obj);
	      });
	      event._attach.forEach(function(obj) {
	        xtag.addEvent(element, obj.type, obj);
	      });
	      event.onAdd.call(element, event, event.listener);
	      element.addEventListener(event.type, event.stack, capture || event.capture);
	      return event;
	    },

	    addEvents: function (element, obj) {
	      var events = {};
	      for (var z in obj) {
	        events[z] = xtag.addEvent(element, z, obj[z]);
	      }
	      return events;
	    },

	    removeEvent: function (element, type, event) {
	      event = event || type;
	      event.onRemove.call(element, event, event.listener);
	      xtag.removePseudos(element, event._pseudos);
	      event._attach.forEach(function(obj) {
	        xtag.removeEvent(element, obj);
	      });
	      element.removeEventListener(event.type, event.stack);
	    },

	    removeEvents: function(element, obj){
	      for (var z in obj) xtag.removeEvent(element, obj[z]);
	    },

	    fireEvent: function(element, type, options){
	      var event = doc.createEvent('CustomEvent');
	      options = options || {};
	      event.initCustomEvent(type,
	        options.bubbles !== false,
	        options.cancelable !== false,
	        options.detail
	      );
	      if (options.baseEvent) inheritEvent(event, options.baseEvent);
	      element.dispatchEvent(event);
	    }

	  };

	  if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (xtag), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  else if (typeof module !== 'undefined' && module.exports) module.exports = xtag;
	  else win.xtag = xtag;

	  doc.addEventListener('WebComponentsReady', function(){
	    xtag.fireEvent(doc.body, 'DOMComponentsLoaded');
	  });

	})();


/***/ })
/******/ ]);