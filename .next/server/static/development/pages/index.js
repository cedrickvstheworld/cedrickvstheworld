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

/***/ "./components/navigation-slider.js":
/*!*****************************************!*\
  !*** ./components/navigation-slider.js ***!
  \*****************************************/
/*! exports provided: NavigationSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSlider", function() { return NavigationSlider; });
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-awesome-slider */ "react-awesome-slider");
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-slider/dist/navigation */ "react-awesome-slider/dist/navigation");
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_1__);

 // Wrapp the AwesomeSlider component with the navigationHandlers

const NavigationSlider = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_1__["withNavigationHandlers"])(react_awesome_slider__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./components/slider.js":
/*!******************************!*\
  !*** ./components/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-slider */ "./components/navigation-slider.js");
/* harmony import */ var _slides_page_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slides/page-one */ "./components/slides/page-one.js");
/* harmony import */ var _slides_page_two__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides/page-two */ "./components/slides/page-two.js");
/* harmony import */ var _slides_page_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slides/page-three */ "./components/slides/page-three.js");
var _jsxFileName = "/home/jed/Projects/cedrickvstheworld2.0/components/slider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Slides/Pages



 // Create an AwesomeSlider instance with some content

const Slider = () => {
  return __jsx(_navigation_slider__WEBPACK_IMPORTED_MODULE_1__["NavigationSlider"], {
    className: "awesome-slider",
    animation: "foldOutAnimation",
    media: [{
      slug: "",
      // place all images here so it will be waited before rendering the actual slide
      // preload: [""],
      className: "page-one slide",
      children: __jsx(_slides_page_one__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }
      })
    }, {
      slug: "page-two",
      preload: ['https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/4348226/pexels-photo-4348226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/3689772/pexels-photo-3689772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/1713953/pexels-photo-1713953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
      className: "page-two slide",
      children: __jsx(_slides_page_two__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      })
    }, {
      slug: "page-three",
      className: "page-three slide",
      children: __jsx(_slides_page_three__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      })
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/slides/page-one.js":
/*!***************************************!*\
  !*** ./components/slides/page-one.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jed/Projects/cedrickvstheworld2.0/components/slides/page-one.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class PageOne extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      id: "page-one-wrapper",
      className: "container grey-text text-lighten-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, "CONTENT");
  }

}

/***/ }),

/***/ "./components/slides/page-three.js":
/*!*****************************************!*\
  !*** ./components/slides/page-three.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageThree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jed/Projects/cedrickvstheworld2.0/components/slides/page-three.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class PageThree extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      id: "page-three-wrapper",
      className: "container grey-text text-lighten-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, "Officia occaecat commodo adipisicing eu proident.");
  }

}

/***/ }),

/***/ "./components/slides/page-two.js":
/*!***************************************!*\
  !*** ./components/slides/page-two.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageTwo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contents_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contents/project */ "./contents/project.js");
var _jsxFileName = "/home/jed/Projects/cedrickvstheworld2.0/components/slides/page-two.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class PageTwo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  mapProject(data, index) {
    const cardPosition = index % 2 === 0 ? 'left-card' : 'right-card';
    return __jsx("div", {
      key: data._id,
      className: `col l6 m12 s12 project-card-container ${cardPosition}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "project-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "maximize green lighten-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "minimize yellow lighten-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "close red lighten-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "title-bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx("h6", {
      className: "grey-text text-lighten-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, data.title)), __jsx("div", {
      className: "window-workspace-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx("div", {
      id: `project-card-image-container-${data._id}`,
      className: "project-card-image-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "project-card-image-overlay",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "project-overlay-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "animate__animated animate__bounceInDown overlay-desc-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("h6", {
      className: "grey-text text-lighten-4 overlay-desc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 19
      }
    }, data.description)), __jsx("div", {
      className: "project-read-more",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx("h6", {
      className: "animate__animated animate__headShake  animate__delay-3s",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 91
      }
    }, "LEARN MORE"))))))));
  }

  render() {
    // projects
    const Projects = [];

    for (let i in _contents_project__WEBPACK_IMPORTED_MODULE_1__["PROJECT_CARD_CONTENTS"]) {
      Projects.push(this.mapProject(_contents_project__WEBPACK_IMPORTED_MODULE_1__["PROJECT_CARD_CONTENTS"][i], parseInt(i)));
    }

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }, __jsx("div", {
      id: "page-two-wrapper",
      className: "container grey-text text-darken-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "slide-content-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, "my awesome portfolio")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, "Adipisicing aliqua irure excepteur ea in do. Cillum fugiat consequat sint deserunt non officia aliquip est quis aute dolore. Nisi dolor ut aute nostrud tempor incididunt officia ut anim ipsum minim irure veniam non.")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "grey-text text-darken-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, "Anim nostrud do irure dolore dolor nostrud quis. dolore dolor nostrud quis.")), __jsx("div", {
      id: "projects-container",
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, Projects))), __jsx("div", {
      id: "footer-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "footer-end-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, __jsx("div", {
      id: "footer-end-wrapper",
      className: "grey darken-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "links-container",
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col s6 col-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "link-item-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://github.com/cedie712",
      rel: "noopener noreferrer",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "link-item-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fab fa-github-alt fa-2x white-text link-fa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 27
      }
    }))))), __jsx("div", {
      className: "col s6 col-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "link-item-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://web.facebook.com/cedrick.domingo.75",
      rel: "noopener noreferrer",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "link-item-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fab fa-facebook-f fa-2x white-text link-fa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 27
      }
    })))))), __jsx("div", {
      className: "center center-align",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "yellow-text text-lighten-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fab fa-google-plus-g ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 61
      }
    }), "\xA0cedrickdomingo048@gmail.com"), __jsx("p", {
      className: "grey-text text-darken-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 19
      }
    }, "CEDRICK DOMINGO ", __jsx("span", {
      className: "light-blue-text text-lighten-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 74
      }
    }, "\xA92020"))))))));
  }

}

/***/ }),

/***/ "./contents/project.js":
/*!*****************************!*\
  !*** ./contents/project.js ***!
  \*****************************/
/*! exports provided: PROJECT_CARD_CONTENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_CARD_CONTENTS", function() { return PROJECT_CARD_CONTENTS; });
const PROJECT_CARD_CONTENTS = [{
  _id: 0,
  title: 'SAMPLE TITLE',
  description: 'Consequat consequat et mollit exercitation eliur eu aliqua sint. Ex cillum veniam commodo officia proident proident enim qui fugiat id est. Non esse dolore magna ea sint aliquip laborum dolore. Aute veniam non aliquip proident fugiat nulla duis officia non pariatur mollit nisi reprehenderit do.',
  link: ''
}, {
  _id: 1,
  title: 'SAMPLE TITLE',
  description: 'Lorem pariatur non ea nulla amet eu consectetur. Minim enim reprehenderit eiusmod ex esse consectetur irure tempor. Esse sint voluptate do Lorem quis officia elit irure dolore id velit irure sint amet. Qui eu ipsum occaecat consequat nulla qui. Est nostrud sit adipisicing irure occaecat voluptate deserunt veniam. Nulla ex amet ut mollit elit voluptate pariatur.',
  link: ''
}, {
  _id: 2,
  title: 'SAMPLE TITLE',
  description: 'Aute crum laboris ut deserunt eiu laboris minim. Consectetur dolore in fugiat aute. Deserunt tempor non commodo occaecat dolore consectetur. Enim eu magna voluptate ea. Laborum tempor eiusmod consectetur occaecat elit dolor occaecat ullamco cupidatat mollit. Qui est ut id occaecat officia voluptate sit reprehenderit in. Ea adipisicing elit nisi aliqua aliquip velit commodo aliqua sunt est officia sint incididunt do.',
  link: ''
}, {
  _id: 3,
  title: 'SAMPLE TITLE',
  description: 'Culpa nulla est ipsum dolor dolor ipsum ex cupidatat velit. Ex enim occaecat eiusmod qui nulla amet dolore nisi dolore ex. Aute irure fugiat deserunt sint elit in cillum voluptate. Nulla quis quis dolor culpa quis elit amet esse velit sit culpa velit sint.',
  link: ''
}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/slider */ "./components/slider.js");
var _jsxFileName = "/home/jed/Projects/cedrickvstheworld2.0/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Wrapp the aplication with the navigation Provider passing down the current page slug.

const Home = () => {
  return __jsx(_components_slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jed/Projects/cedrickvstheworld2.0/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-awesome-slider":
/*!***************************************!*\
  !*** external "react-awesome-slider" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider");

/***/ }),

/***/ "react-awesome-slider/dist/navigation":
/*!*******************************************************!*\
  !*** external "react-awesome-slider/dist/navigation" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider/dist/navigation");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlcy9wYWdlLW9uZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlcy9wYWdlLXRocmVlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVzL3BhZ2UtdHdvLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hd2Vzb21lLXNsaWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWF3ZXNvbWUtc2xpZGVyL2Rpc3QvbmF2aWdhdGlvblwiIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25TbGlkZXIiLCJ3aXRoTmF2aWdhdGlvbkhhbmRsZXJzIiwiQXdlc29tZVNsaWRlciIsIlNsaWRlciIsInNsdWciLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByZWxvYWQiLCJQYWdlT25lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJQYWdlVGhyZWUiLCJQYWdlVHdvIiwibWFwUHJvamVjdCIsImRhdGEiLCJpbmRleCIsImNhcmRQb3NpdGlvbiIsIl9pZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJQcm9qZWN0cyIsImkiLCJQUk9KRUNUX0NBUkRfQ09OVEVOVFMiLCJwdXNoIiwicGFyc2VJbnQiLCJsaW5rIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNPLE1BQU1BLGdCQUFnQixHQUFHQyxtR0FBc0IsQ0FBQ0MsMkRBQUQsQ0FBL0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ0ZQOztBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUNuQixTQUNFLE1BQUMsbUVBQUQ7QUFDRSxhQUFTLEVBQUMsZ0JBRFo7QUFFRSxhQUFTLEVBQUMsa0JBRlo7QUFHRSxTQUFLLEVBQUUsQ0FDTDtBQUNFQyxVQUFJLEVBQUUsRUFEUjtBQUVFO0FBQ0E7QUFDQUMsZUFBUyxFQUFFLGdCQUpiO0FBS0VDLGNBQVEsRUFBRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMWixLQURLLEVBUUw7QUFDRUYsVUFBSSxFQUFFLFVBRFI7QUFFRUcsYUFBTyxFQUFFLENBQ1AsaUhBRE8sRUFFUCxpSEFGTyxFQUdQLGlIQUhPLEVBSVAsaUhBSk8sQ0FGWDtBQVFFRixlQUFTLEVBQUUsZ0JBUmI7QUFTRUMsY0FBUSxFQUFFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRaLEtBUkssRUFvQkw7QUFDRUYsVUFBSSxFQUFFLFlBRFI7QUFFRUMsZUFBUyxFQUFFLGtCQUZiO0FBR0VDLGNBQVEsRUFBRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIWixLQXBCSyxDQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQWdDRCxDQWpDRDs7QUFtQ2VILHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUVlLE1BQU1LLE9BQU4sU0FBc0JDLDRDQUFLLENBQUNDLFNBQTVCLENBQXNDO0FBQ25EQyxRQUFNLEdBQUc7QUFDUCxXQUNFO0FBQUssUUFBRSxFQUFDLGtCQUFSO0FBQTJCLGVBQVMsRUFBQyxvQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtEOztBQVBrRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckQ7QUFFZSxNQUFNQyxTQUFOLFNBQXdCSCw0Q0FBSyxDQUFDQyxTQUE5QixDQUF3QztBQUNyREMsUUFBTSxHQUFHO0FBQ1AsV0FDRTtBQUFLLFFBQUUsRUFBQyxvQkFBUjtBQUE2QixlQUFTLEVBQUMsb0NBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkRBREY7QUFNRDs7QUFSb0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z2RDtBQUNBO0FBRWUsTUFBTUUsT0FBTixTQUFzQkosNENBQUssQ0FBQ0MsU0FBNUIsQ0FBc0M7QUFFbkRJLFlBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWM7QUFDdEIsVUFBTUMsWUFBWSxHQUFHRCxLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWQsR0FBa0IsV0FBbEIsR0FBZ0MsWUFBckQ7QUFDQSxXQUNFO0FBQUssU0FBRyxFQUFFRCxJQUFJLENBQUNHLEdBQWY7QUFBb0IsZUFBUyxFQUFHLHlDQUF3Q0QsWUFBYSxFQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBR0U7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBS0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLEVBUUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsMEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQ0YsSUFBSSxDQUFDSSxLQUEvQyxDQURGLENBUkYsRUFZRTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxRQUFFLEVBQUcsZ0NBQStCSixJQUFJLENBQUNHLEdBQUksRUFBbEQ7QUFBcUQsZUFBUyxFQUFDLDhCQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFLRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGdFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyx1Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVESCxJQUFJLENBQUNLLFdBQTVELENBREYsQ0FERixFQUlFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyx5REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdFO0FBQUcsVUFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBeEUsQ0FERixDQUpGLENBREYsQ0FMRixDQVpGLENBREYsQ0FERjtBQWlDRDs7QUFFRFQsUUFBTSxHQUFHO0FBQ1A7QUFDQSxVQUFNVSxRQUFRLEdBQUcsRUFBakI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFULElBQWNDLHVFQUFkLEVBQXFDO0FBQ25DRixjQUFRLENBQUNHLElBQVQsQ0FBYyxLQUFLVixVQUFMLENBQWdCUyx1RUFBcUIsQ0FBQ0QsQ0FBRCxDQUFyQyxFQUEwQ0csUUFBUSxDQUFDSCxDQUFELENBQWxELENBQWQ7QUFDRDs7QUFFRCxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFFBQUUsRUFBQyxrQkFBUjtBQUEyQixlQUFTLEVBQUMsbUNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFKLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlPQUZGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFERixDQUxGLEVBUUU7QUFBSyxRQUFFLEVBQUMsb0JBQVI7QUFBNkIsZUFBUyxFQUFDLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsUUFESCxDQVJGLENBREYsQ0FERixFQWdCRTtBQUFLLFFBQUUsRUFBQyxnQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxRQUFFLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssUUFBRSxFQUFDLG9CQUFSO0FBQTZCLGVBQVMsRUFBQyxlQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssUUFBRSxFQUFDLGlCQUFSO0FBQTBCLGVBQVMsRUFBQyxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyw2QkFBUjtBQUFzQyxTQUFHLEVBQUMscUJBQTFDO0FBQWdFLFlBQU0sRUFBQyxRQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLDRDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBREYsQ0FERixDQURGLEVBVUU7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyw2Q0FBUjtBQUFzRCxTQUFHLEVBQUMscUJBQTFEO0FBQWdGLFlBQU0sRUFBQyxRQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLDRDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBREYsQ0FERixDQVZGLENBREYsRUFxQkU7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEM7QUFBRyxlQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUExQyxvQ0FERixFQUVFO0FBQUcsZUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQXVEO0FBQU0sZUFBUyxFQUFDLGdDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF2RCxDQUZGLENBckJGLENBREYsQ0FERixDQURGLENBaEJGLENBREY7QUFvREQ7O0FBbEdrRCxDOzs7Ozs7Ozs7Ozs7QUNIckQ7QUFBQTtBQUFPLE1BQU1FLHFCQUFxQixHQUFHLENBQ25DO0FBQ0VMLEtBQUcsRUFBRSxDQURQO0FBRUVDLE9BQUssRUFBRSxjQUZUO0FBR0VDLGFBQVcsRUFBRSx5U0FIZjtBQUlFTSxNQUFJLEVBQUU7QUFKUixDQURtQyxFQU9uQztBQUNFUixLQUFHLEVBQUUsQ0FEUDtBQUVFQyxPQUFLLEVBQUUsY0FGVDtBQUdFQyxhQUFXLEVBQUUsNldBSGY7QUFJRU0sTUFBSSxFQUFFO0FBSlIsQ0FQbUMsRUFhbkM7QUFDRVIsS0FBRyxFQUFFLENBRFA7QUFFRUMsT0FBSyxFQUFFLGNBRlQ7QUFHRUMsYUFBVyxFQUFFLHFhQUhmO0FBSUVNLE1BQUksRUFBRTtBQUpSLENBYm1DLEVBbUJuQztBQUNFUixLQUFHLEVBQUUsQ0FEUDtBQUVFQyxPQUFLLEVBQUUsY0FGVDtBQUdFQyxhQUFXLEVBQUUsa1FBSGY7QUFJRU0sTUFBSSxFQUFFO0FBSlIsQ0FuQm1DLENBQTlCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NFUDs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNqQixTQUFPLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FGRDs7QUFJZUEsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRSIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgQXdlc29tZVNsaWRlciBmcm9tIFwicmVhY3QtYXdlc29tZS1zbGlkZXJcIjtcbmltcG9ydCB7d2l0aE5hdmlnYXRpb25IYW5kbGVyc30gZnJvbSBcInJlYWN0LWF3ZXNvbWUtc2xpZGVyL2Rpc3QvbmF2aWdhdGlvblwiO1xuXG4vLyBXcmFwcCB0aGUgQXdlc29tZVNsaWRlciBjb21wb25lbnQgd2l0aCB0aGUgbmF2aWdhdGlvbkhhbmRsZXJzXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvblNsaWRlciA9IHdpdGhOYXZpZ2F0aW9uSGFuZGxlcnMoQXdlc29tZVNsaWRlcik7IiwiaW1wb3J0IHtOYXZpZ2F0aW9uU2xpZGVyfSBmcm9tICcuL25hdmlnYXRpb24tc2xpZGVyJztcblxuLy8gU2xpZGVzL1BhZ2VzXG5pbXBvcnQgUGFnZU9uZSBmcm9tICcuL3NsaWRlcy9wYWdlLW9uZSc7XG5pbXBvcnQgUGFnZVR3byBmcm9tICcuL3NsaWRlcy9wYWdlLXR3byc7XG5pbXBvcnQgUGFnZVRocmVlIGZyb20gJy4vc2xpZGVzL3BhZ2UtdGhyZWUnO1xuXG4vLyBDcmVhdGUgYW4gQXdlc29tZVNsaWRlciBpbnN0YW5jZSB3aXRoIHNvbWUgY29udGVudFxuY29uc3QgU2xpZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxOYXZpZ2F0aW9uU2xpZGVyXG4gICAgICBjbGFzc05hbWU9XCJhd2Vzb21lLXNsaWRlclwiXG4gICAgICBhbmltYXRpb249XCJmb2xkT3V0QW5pbWF0aW9uXCJcbiAgICAgIG1lZGlhPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBzbHVnOiBcIlwiLFxuICAgICAgICAgIC8vIHBsYWNlIGFsbCBpbWFnZXMgaGVyZSBzbyBpdCB3aWxsIGJlIHdhaXRlZCBiZWZvcmUgcmVuZGVyaW5nIHRoZSBhY3R1YWwgc2xpZGVcbiAgICAgICAgICAvLyBwcmVsb2FkOiBbXCJcIl0sXG4gICAgICAgICAgY2xhc3NOYW1lOiBcInBhZ2Utb25lIHNsaWRlXCIsXG4gICAgICAgICAgY2hpbGRyZW46IDxQYWdlT25lIC8+XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzbHVnOiBcInBhZ2UtdHdvXCIsXG4gICAgICAgICAgcHJlbG9hZDogW1xuICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQyNzM0MzkvcGV4ZWxzLXBob3RvLTQyNzM0MzkuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCcsXG4gICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDM0ODIyNi9wZXhlbHMtcGhvdG8tNDM0ODIyNi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwJyxcbiAgICAgICAgICAgICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zNjg5NzcyL3BleGVscy1waG90by0zNjg5NzcyLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjAnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE3MTM5NTMvcGV4ZWxzLXBob3RvLTE3MTM5NTMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCcgICAgICAgICAgXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwicGFnZS10d28gc2xpZGVcIixcbiAgICAgICAgICBjaGlsZHJlbjogPFBhZ2VUd28gLz5cbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgc2x1ZzogXCJwYWdlLXRocmVlXCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcInBhZ2UtdGhyZWUgc2xpZGVcIixcbiAgICAgICAgICBjaGlsZHJlbjogPFBhZ2VUaHJlZSAvPlxuICAgICAgICB9XG4gICAgICBdfVxuICAgIC8+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlT25lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicGFnZS1vbmUtd3JhcHBlclwiIGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmV5LXRleHQgdGV4dC1saWdodGVuLTNcIj5cbiAgICAgICAgQ09OVEVOVFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZVRocmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicGFnZS10aHJlZS13cmFwcGVyXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyIGdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tM1wiPlxuICAgICAgICBPZmZpY2lhIG9jY2FlY2F0IGNvbW1vZG8gYWRpcGlzaWNpbmcgZXUgcHJvaWRlbnQuXG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UFJPSkVDVF9DQVJEX0NPTlRFTlRTfSBmcm9tICcuLi8uLi9jb250ZW50cy9wcm9qZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZVR3byBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBtYXBQcm9qZWN0KGRhdGEsIGluZGV4KSB7XG4gICAgY29uc3QgY2FyZFBvc2l0aW9uID0gaW5kZXggJSAyID09PSAwID8gJ2xlZnQtY2FyZCcgOiAncmlnaHQtY2FyZCdcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2RhdGEuX2lkfSBjbGFzc05hbWU9e2Bjb2wgbDYgbTEyIHMxMiBwcm9qZWN0LWNhcmQtY29udGFpbmVyICR7Y2FyZFBvc2l0aW9ufWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4aW1pemUgZ3JlZW4gbGlnaHRlbi0xXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5pbWl6ZSB5ZWxsb3cgbGlnaHRlbi0xXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZSByZWQgbGlnaHRlbi0xXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIHRpdGxlIGJhciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJhclwiPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNFwiPntkYXRhLnRpdGxlfTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIGltYWdlIHByZXZpZXcgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5kb3ctd29ya3NwYWNlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9e2Bwcm9qZWN0LWNhcmQtaW1hZ2UtY29udGFpbmVyLSR7ZGF0YS5faWR9YH0gY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLWltYWdlLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBpbWFnZSBvdmVybGF5ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtaW1hZ2Utb3ZlcmxheVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qtb3ZlcmxheS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluRG93biBvdmVybGF5LWRlc2MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00IG92ZXJsYXktZGVzY1wiPntkYXRhLmRlc2NyaXB0aW9ufTwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXJlYWQtbW9yZVwiPlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2hlYWRTaGFrZSAgYW5pbWF0ZV9fZGVsYXktM3NcIj48YSBocmVmPVwiXCI+TEVBUk4gTU9SRTwvYT48L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBwcm9qZWN0c1xuICAgIGNvbnN0IFByb2plY3RzID0gW107XG4gICAgZm9yIChsZXQgaSBpbiBQUk9KRUNUX0NBUkRfQ09OVEVOVFMpIHtcbiAgICAgIFByb2plY3RzLnB1c2godGhpcy5tYXBQcm9qZWN0KFBST0pFQ1RfQ0FSRF9DT05URU5UU1tpXSwgcGFyc2VJbnQoaSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD1cInBhZ2UtdHdvLXdyYXBwZXJcIiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JleS10ZXh0IHRleHQtZGFya2VuLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDQ+PGI+bXkgYXdlc29tZSBwb3J0Zm9saW88L2I+PC9oND5cbiAgICAgICAgICAgICAgPHAgPkFkaXBpc2ljaW5nIGFsaXF1YSBpcnVyZSBleGNlcHRldXIgZWEgaW4gZG8uIENpbGx1bSBmdWdpYXQgY29uc2VxdWF0IHNpbnQgZGVzZXJ1bnQgbm9uIG9mZmljaWEgYWxpcXVpcCBlc3QgcXVpcyBhdXRlIGRvbG9yZS4gTmlzaSBkb2xvciB1dCBhdXRlIG5vc3RydWQgdGVtcG9yIGluY2lkaWR1bnQgb2ZmaWNpYSB1dCBhbmltIGlwc3VtIG1pbmltIGlydXJlIHZlbmlhbSBub24uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmV5LXRleHQgdGV4dC1kYXJrZW4tMVwiPkFuaW0gbm9zdHJ1ZCBkbyBpcnVyZSBkb2xvcmUgZG9sb3Igbm9zdHJ1ZCBxdWlzLiBkb2xvcmUgZG9sb3Igbm9zdHJ1ZCBxdWlzLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RzLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICB7UHJvamVjdHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cImZvb3Rlci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1lbmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWVuZC13cmFwcGVyXCIgY2xhc3NOYW1lPVwiZ3JleSBkYXJrZW4tNFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsaW5rcy1jb250YWluZXJcIiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2IGNvbC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1pdGVtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2VkaWU3MTJcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1Yi1hbHQgZmEtMnggd2hpdGUtdGV4dCBsaW5rLWZhXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczYgY29sLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2ViLmZhY2Vib29rLmNvbS9jZWRyaWNrLmRvbWluZ28uNzVcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWYgZmEtMnggd2hpdGUtdGV4dCBsaW5rLWZhXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyIGNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieWVsbG93LXRleHQgdGV4dC1saWdodGVuLTNcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ29vZ2xlLXBsdXMtZyBcIj48L2k+Jm5ic3A7Y2Vkcmlja2RvbWluZ28wNDhAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtZGFya2VuLTJcIj5DRURSSUNLIERPTUlOR08gPHNwYW4gY2xhc3NOYW1lPVwibGlnaHQtYmx1ZS10ZXh0IHRleHQtbGlnaHRlbi0yXCI+wqkyMDIwPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSIsImV4cG9ydCBjb25zdCBQUk9KRUNUX0NBUkRfQ09OVEVOVFMgPSBbXG4gIHtcbiAgICBfaWQ6IDAsXG4gICAgdGl0bGU6ICdTQU1QTEUgVElUTEUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29uc2VxdWF0IGNvbnNlcXVhdCBldCBtb2xsaXQgZXhlcmNpdGF0aW9uIGVsaXVyIGV1IGFsaXF1YSBzaW50LiBFeCBjaWxsdW0gdmVuaWFtIGNvbW1vZG8gb2ZmaWNpYSBwcm9pZGVudCBwcm9pZGVudCBlbmltIHF1aSBmdWdpYXQgaWQgZXN0LiBOb24gZXNzZSBkb2xvcmUgbWFnbmEgZWEgc2ludCBhbGlxdWlwIGxhYm9ydW0gZG9sb3JlLiBBdXRlIHZlbmlhbSBub24gYWxpcXVpcCBwcm9pZGVudCBmdWdpYXQgbnVsbGEgZHVpcyBvZmZpY2lhIG5vbiBwYXJpYXR1ciBtb2xsaXQgbmlzaSByZXByZWhlbmRlcml0IGRvLicsXG4gICAgbGluazogJydcbiAgfSxcbiAge1xuICAgIF9pZDogMSxcbiAgICB0aXRsZTogJ1NBTVBMRSBUSVRMRScsXG4gICAgZGVzY3JpcHRpb246ICdMb3JlbSBwYXJpYXR1ciBub24gZWEgbnVsbGEgYW1ldCBldSBjb25zZWN0ZXR1ci4gTWluaW0gZW5pbSByZXByZWhlbmRlcml0IGVpdXNtb2QgZXggZXNzZSBjb25zZWN0ZXR1ciBpcnVyZSB0ZW1wb3IuIEVzc2Ugc2ludCB2b2x1cHRhdGUgZG8gTG9yZW0gcXVpcyBvZmZpY2lhIGVsaXQgaXJ1cmUgZG9sb3JlIGlkIHZlbGl0IGlydXJlIHNpbnQgYW1ldC4gUXVpIGV1IGlwc3VtIG9jY2FlY2F0IGNvbnNlcXVhdCBudWxsYSBxdWkuIEVzdCBub3N0cnVkIHNpdCBhZGlwaXNpY2luZyBpcnVyZSBvY2NhZWNhdCB2b2x1cHRhdGUgZGVzZXJ1bnQgdmVuaWFtLiBOdWxsYSBleCBhbWV0IHV0IG1vbGxpdCBlbGl0IHZvbHVwdGF0ZSBwYXJpYXR1ci4nLFxuICAgIGxpbms6ICcnXG4gIH0sXG4gIHtcbiAgICBfaWQ6IDIsXG4gICAgdGl0bGU6ICdTQU1QTEUgVElUTEUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQXV0ZSBjcnVtIGxhYm9yaXMgdXQgZGVzZXJ1bnQgZWl1IGxhYm9yaXMgbWluaW0uIENvbnNlY3RldHVyIGRvbG9yZSBpbiBmdWdpYXQgYXV0ZS4gRGVzZXJ1bnQgdGVtcG9yIG5vbiBjb21tb2RvIG9jY2FlY2F0IGRvbG9yZSBjb25zZWN0ZXR1ci4gRW5pbSBldSBtYWduYSB2b2x1cHRhdGUgZWEuIExhYm9ydW0gdGVtcG9yIGVpdXNtb2QgY29uc2VjdGV0dXIgb2NjYWVjYXQgZWxpdCBkb2xvciBvY2NhZWNhdCB1bGxhbWNvIGN1cGlkYXRhdCBtb2xsaXQuIFF1aSBlc3QgdXQgaWQgb2NjYWVjYXQgb2ZmaWNpYSB2b2x1cHRhdGUgc2l0IHJlcHJlaGVuZGVyaXQgaW4uIEVhIGFkaXBpc2ljaW5nIGVsaXQgbmlzaSBhbGlxdWEgYWxpcXVpcCB2ZWxpdCBjb21tb2RvIGFsaXF1YSBzdW50IGVzdCBvZmZpY2lhIHNpbnQgaW5jaWRpZHVudCBkby4nLFxuICAgIGxpbms6ICcnXG4gIH0sXG4gIHtcbiAgICBfaWQ6IDMsXG4gICAgdGl0bGU6ICdTQU1QTEUgVElUTEUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ3VscGEgbnVsbGEgZXN0IGlwc3VtIGRvbG9yIGRvbG9yIGlwc3VtIGV4IGN1cGlkYXRhdCB2ZWxpdC4gRXggZW5pbSBvY2NhZWNhdCBlaXVzbW9kIHF1aSBudWxsYSBhbWV0IGRvbG9yZSBuaXNpIGRvbG9yZSBleC4gQXV0ZSBpcnVyZSBmdWdpYXQgZGVzZXJ1bnQgc2ludCBlbGl0IGluIGNpbGx1bSB2b2x1cHRhdGUuIE51bGxhIHF1aXMgcXVpcyBkb2xvciBjdWxwYSBxdWlzIGVsaXQgYW1ldCBlc3NlIHZlbGl0IHNpdCBjdWxwYSB2ZWxpdCBzaW50LicsXG4gICAgbGluazogJydcbiAgfVxuXSIsImltcG9ydCBTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZXInO1xuXG4vLyBXcmFwcCB0aGUgYXBsaWNhdGlvbiB3aXRoIHRoZSBuYXZpZ2F0aW9uIFByb3ZpZGVyIHBhc3NpbmcgZG93biB0aGUgY3VycmVudCBwYWdlIHNsdWcuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gPFNsaWRlciAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hd2Vzb21lLXNsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hd2Vzb21lLXNsaWRlci9kaXN0L25hdmlnYXRpb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==