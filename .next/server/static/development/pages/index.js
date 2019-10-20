module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Marketing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lil_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lil-grid */ "lil-grid");
/* harmony import */ var lil_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lil_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/colors */ "./utils/colors.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "pages__Container",
  componentId: "sc-15xhd6f-0"
})(["max-width:84rem;margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem;"]);
const StyledMarketing = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "pages__StyledMarketing",
  componentId: "sc-15xhd6f-1"
})([".hero{overflow:hidden;background:", ";color:", ";.hero__grid{min-height:calc(100vh - 5rem);padding-top:2rem;padding-bottom:2rem;align-items:center;}h1{color:", ";font-size:10rem;font-weight:800;line-height:1;margin-bottom:2rem;}.hero__package-container{position:relative;img{display:block;position:absolute;right:-15rem;transform:translateY(-50%);width:50vw;min-width:60rem;filter:drop-shadow(0 4rem 2rem rgba(0,0,0,0.5));}}.hero__input{display:flex;margin-top:2rem;border-radius:4px;background:", ";margin-right:4rem;padding:1rem;input,button{all:unset;position:relative;}input{cursor:text;margin:0 1rem;flex:1;color:", ";}button{cursor:pointer;background:", ";color:", ";padding:1rem 2rem;border-radius:4px;overflow:hidden;transition:200ms;span{position:relative;z-index:2;}&:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:", ";transform:translateX(100%);transition:200ms;}&:hover{color:", ";&::after{transform:translateX(0);}}}}}.pitch-cards{margin-top:10rem;margin-bottom:10rem;grid-row-gap:5rem;}.hero__disclosure{margin-top:2rem;color:", ";}"], _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].ui_900, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].ui_300, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].purple_500, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].ui_100, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].ui_900, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].green_500, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].ui_900, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].green_700, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].ui_100, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].ui_500);
function Marketing() {
  return __jsx(StyledMarketing, null, __jsx("section", {
    className: "hero"
  }, __jsx(Container, null, __jsx(lil_grid__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: "hero__grid"
  }, __jsx(lil_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: [8]
  }, __jsx("h2", null, "Highway"), __jsx("h1", null, "Get It Your Way"), __jsx("p", null, "Flowers & vapor delivered to your door, on your schedule."), __jsx("form", {
    className: "hero__input"
  }, __jsx("input", {
    type: "email",
    placeholder: "name@email.com"
  }), __jsx("button", {
    type: "submit"
  }, __jsx("span", null, "Join the waitlist."))), __jsx("p", {
    className: "hero__disclosure"
  }, "Deliveries start January 2020")), __jsx(lil_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: [4],
    className: "hero__package-container"
  }, __jsx("img", {
    src: "/package.png",
    alt: "subscription package"
  }))))), __jsx(Container, {
    as: lil_grid__WEBPACK_IMPORTED_MODULE_2__["Grid"],
    className: "pitch-cards"
  }, __jsx(lil_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: [12, 5]
  }, __jsx("h3", null, "Flowers & Vapor"), __jsx("p", {
    className: "small"
  }, "Choose from flowers or vapor and always be able to change your order up to delivery. Switch it up whenever you want.")), __jsx(lil_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: [0, 2]
  }), __jsx(lil_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: [12, 5]
  }, __jsx("h3", null, "Flexible Delivery"), __jsx("p", {
    className: "small"
  }, "Choose a time that works for you and we'll deliver it straight into your hands You'll need an illinois license to accept delivery.")), __jsx(lil_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: [12, 5]
  }, __jsx("h3", null, "Extras Included"), __jsx("p", {
    className: "small"
  }, "Curated goodies from the best chefs and botanists in the city. Choose from your favorites or let us suggest a treat.")), __jsx(lil_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: [0, 2]
  }), __jsx(lil_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: [12, 5]
  }, __jsx("h3", null, "15% Off"), __jsx("p", {
    className: "small"
  }, "Subscription equal discounts, you'll get an average 15% off products you order through Highway and they'll be delivered to you for free."))));
}

/***/ }),

/***/ "./utils/colors.js":
/*!*************************!*\
  !*** ./utils/colors.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ui_100: "#F7F9F9",
  ui_300: "#DFE6E9",
  ui_500: "#81969C",
  ui_700: "#576569",
  ui_900: "#2D3436",
  green_100: "#F6FFFD",
  green_300: "#BFEDE4",
  green_500: "#55EFC4",
  green_700: "#00B894",
  green_900: "#003E32",
  purple_100: "#F5F6FF",
  purple_300: "#D6D8F9",
  purple_500: "#A29BFE",
  purple_700: "#5C64E7",
  purple_900: "#2E3274"
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/patrick/Development/highway/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "lil-grid":
/*!***************************!*\
  !*** external "lil-grid" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lil-grid");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map