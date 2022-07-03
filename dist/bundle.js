/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar b = __webpack_require__(/*! ./base/b */ \"./src/base/b.js\");\n\nmodule.exports = 'a' + b;\n\n//# sourceURL=webpack://webpack-dev/./src/a.js?");

/***/ }),

/***/ "./src/base/b.js":
/*!***********************!*\
  !*** ./src/base/b.js ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = 'b';\n\n//# sourceURL=webpack://webpack-dev/./src/base/b.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! ./index.less */ \"./src/index.less\");\n\nvar str = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\n\nconsole.log(str);\n\nvar arrowFn = function arrowFn() {\n  console.log('我箭头函数');\n};\n\narrowFn();\n\n//# sourceURL=webpack://webpack-dev/./src/index.js?");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/***/ (() => {

eval("\n    let style = document.createElement('style')\n    style.innerHTML = \"body {\\\\n  background: red;\\\\n}\\\\n\" \n    document.head.appendChild(style)\n  \n\n//# sourceURL=webpack://webpack-dev/./src/index.less?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;