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

/***/ "./pages/page-two.js":
/*!***************************!*\
  !*** ./pages/page-two.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/slider */ "./components/slider.js");
var _jsxFileName = "/home/jed/Projects/cedrickvstheworld2.0/pages/page-two.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Wrapp the aplication with the navigation Provider passing down the current page slug.

const PageTwo = () => {
  return __jsx(_components_slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PageTwo);

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/page-two.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jed/Projects/cedrickvstheworld2.0/pages/page-two.js */"./pages/page-two.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlcy9wYWdlLW9uZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlcy9wYWdlLXRocmVlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVzL3BhZ2UtdHdvLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFnZS10d28uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hd2Vzb21lLXNsaWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWF3ZXNvbWUtc2xpZGVyL2Rpc3QvbmF2aWdhdGlvblwiIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25TbGlkZXIiLCJ3aXRoTmF2aWdhdGlvbkhhbmRsZXJzIiwiQXdlc29tZVNsaWRlciIsIlNsaWRlciIsInNsdWciLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByZWxvYWQiLCJQYWdlT25lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJQYWdlVGhyZWUiLCJQYWdlVHdvIiwibWFwUHJvamVjdCIsImRhdGEiLCJpbmRleCIsImNhcmRQb3NpdGlvbiIsIl9pZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJQcm9qZWN0cyIsImkiLCJQUk9KRUNUX0NBUkRfQ09OVEVOVFMiLCJwdXNoIiwicGFyc2VJbnQiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ08sTUFBTUEsZ0JBQWdCLEdBQUdDLG1HQUFzQixDQUFDQywyREFBRCxDQUEvQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDRlA7O0FBQ0E7QUFDQTtDQUdBOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFNBQ0UsTUFBQyxtRUFBRDtBQUNFLGFBQVMsRUFBQyxnQkFEWjtBQUVFLGFBQVMsRUFBQyxrQkFGWjtBQUdFLFNBQUssRUFBRSxDQUNMO0FBQ0VDLFVBQUksRUFBRSxFQURSO0FBRUU7QUFDQTtBQUNBQyxlQUFTLEVBQUUsZ0JBSmI7QUFLRUMsY0FBUSxFQUFFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxaLEtBREssRUFRTDtBQUNFRixVQUFJLEVBQUUsVUFEUjtBQUVFRyxhQUFPLEVBQUUsQ0FDUCxpSEFETyxFQUVQLGlIQUZPLEVBR1AsaUhBSE8sRUFJUCxpSEFKTyxDQUZYO0FBUUVGLGVBQVMsRUFBRSxnQkFSYjtBQVNFQyxjQUFRLEVBQUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVFosS0FSSyxFQW9CTDtBQUNFRixVQUFJLEVBQUUsWUFEUjtBQUVFQyxlQUFTLEVBQUUsa0JBRmI7QUFHRUMsY0FBUSxFQUFFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhaLEtBcEJLLENBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBZ0NELENBakNEOztBQW1DZUgscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBRWUsTUFBTUssT0FBTixTQUFzQkMsNENBQUssQ0FBQ0MsU0FBNUIsQ0FBc0M7QUFDbkRDLFFBQU0sR0FBRztBQUNQLFdBQ0U7QUFBSyxRQUFFLEVBQUMsa0JBQVI7QUFBMkIsZUFBUyxFQUFDLG9DQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBS0Q7O0FBUGtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyRDtBQUVlLE1BQU1DLFNBQU4sU0FBd0JILDRDQUFLLENBQUNDLFNBQTlCLENBQXdDO0FBQ3JEQyxRQUFNLEdBQUc7QUFDUCxXQUNFO0FBQUssUUFBRSxFQUFDLG9CQUFSO0FBQTZCLGVBQVMsRUFBQyxvQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyREFERjtBQU1EOztBQVJvRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnZEO0FBQ0E7QUFFZSxNQUFNRSxPQUFOLFNBQXNCSiw0Q0FBSyxDQUFDQyxTQUE1QixDQUFzQztBQUVuREksWUFBVSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBYztBQUN0QixVQUFNQyxZQUFZLEdBQUdELEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxHQUFrQixXQUFsQixHQUFnQyxZQUFyRDtBQUNBLFdBQ0U7QUFBSyxTQUFHLEVBQUVELElBQUksQ0FBQ0csR0FBZjtBQUFvQixlQUFTLEVBQUcseUNBQXdDRCxZQUFhLEVBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFHRTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsRUFLRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsRUFRRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQywwQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBDRixJQUFJLENBQUNJLEtBQS9DLENBREYsQ0FSRixFQVlFO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFFBQUUsRUFBRyxnQ0FBK0JKLElBQUksQ0FBQ0csR0FBSSxFQUFsRDtBQUFxRCxlQUFTLEVBQUMsOEJBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUtFO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsZ0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLHVDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdURILElBQUksQ0FBQ0ssV0FBNUQsQ0FERixDQURGLEVBSUU7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLHlEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0U7QUFBRyxVQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF4RSxDQURGLENBSkYsQ0FERixDQUxGLENBWkYsQ0FERixDQURGO0FBaUNEOztBQUVEVCxRQUFNLEdBQUc7QUFDUDtBQUNBLFVBQU1VLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxTQUFLLElBQUlDLENBQVQsSUFBY0MsdUVBQWQsRUFBcUM7QUFDbkNGLGNBQVEsQ0FBQ0csSUFBVCxDQUFjLEtBQUtWLFVBQUwsQ0FBZ0JTLHVFQUFxQixDQUFDRCxDQUFELENBQXJDLEVBQTBDRyxRQUFRLENBQUNILENBQUQsQ0FBbEQsQ0FBZDtBQUNEOztBQUVELFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssUUFBRSxFQUFDLGtCQUFSO0FBQTJCLGVBQVMsRUFBQyxtQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQUosQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaU9BRkYsQ0FERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQURGLENBTEYsRUFRRTtBQUFLLFFBQUUsRUFBQyxvQkFBUjtBQUE2QixlQUFTLEVBQUMsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxRQURILENBUkYsQ0FERixDQURGLEVBZ0JFO0FBQUssUUFBRSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFFBQUUsRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxRQUFFLEVBQUMsb0JBQVI7QUFBNkIsZUFBUyxFQUFDLGVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxRQUFFLEVBQUMsaUJBQVI7QUFBMEIsZUFBUyxFQUFDLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFDLDZCQUFSO0FBQXNDLFNBQUcsRUFBQyxxQkFBMUM7QUFBZ0UsWUFBTSxFQUFDLFFBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsNENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsQ0FERixDQURGLENBREYsRUFVRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFDLDZDQUFSO0FBQXNELFNBQUcsRUFBQyxxQkFBMUQ7QUFBZ0YsWUFBTSxFQUFDLFFBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsNENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsQ0FERixDQURGLENBVkYsQ0FERixFQXFCRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsNEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQztBQUFHLGVBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTFDLG9DQURGLEVBRUU7QUFBRyxlQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBdUQ7QUFBTSxlQUFTLEVBQUMsZ0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXZELENBRkYsQ0FyQkYsQ0FERixDQURGLENBREYsQ0FoQkYsQ0FERjtBQW9ERDs7QUFsR2tELEM7Ozs7Ozs7Ozs7OztBQ0hyRDtBQUFBO0FBQU8sTUFBTUUscUJBQXFCLEdBQUcsQ0FDbkM7QUFDRUwsS0FBRyxFQUFFLENBRFA7QUFFRUMsT0FBSyxFQUFFLGNBRlQ7QUFHRUMsYUFBVyxFQUFFLHlTQUhmO0FBSUVNLE1BQUksRUFBRTtBQUpSLENBRG1DLEVBT25DO0FBQ0VSLEtBQUcsRUFBRSxDQURQO0FBRUVDLE9BQUssRUFBRSxjQUZUO0FBR0VDLGFBQVcsRUFBRSw2V0FIZjtBQUlFTSxNQUFJLEVBQUU7QUFKUixDQVBtQyxFQWFuQztBQUNFUixLQUFHLEVBQUUsQ0FEUDtBQUVFQyxPQUFLLEVBQUUsY0FGVDtBQUdFQyxhQUFXLEVBQUUscWFBSGY7QUFJRU0sTUFBSSxFQUFFO0FBSlIsQ0FibUMsRUFtQm5DO0FBQ0VSLEtBQUcsRUFBRSxDQURQO0FBRUVDLE9BQUssRUFBRSxjQUZUO0FBR0VDLGFBQVcsRUFBRSxrUUFIZjtBQUlFTSxNQUFJLEVBQUU7QUFKUixDQW5CbUMsQ0FBOUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ0VQOztBQUNBLE1BQU1iLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFNBQU8sTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDRCxDQUZEOztBQUllQSxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlFIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9wYWdlLXR3by5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBBd2Vzb21lU2xpZGVyIGZyb20gXCJyZWFjdC1hd2Vzb21lLXNsaWRlclwiO1xuaW1wb3J0IHt3aXRoTmF2aWdhdGlvbkhhbmRsZXJzfSBmcm9tIFwicmVhY3QtYXdlc29tZS1zbGlkZXIvZGlzdC9uYXZpZ2F0aW9uXCI7XG5cbi8vIFdyYXBwIHRoZSBBd2Vzb21lU2xpZGVyIGNvbXBvbmVudCB3aXRoIHRoZSBuYXZpZ2F0aW9uSGFuZGxlcnNcbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uU2xpZGVyID0gd2l0aE5hdmlnYXRpb25IYW5kbGVycyhBd2Vzb21lU2xpZGVyKTsiLCJpbXBvcnQge05hdmlnYXRpb25TbGlkZXJ9IGZyb20gJy4vbmF2aWdhdGlvbi1zbGlkZXInO1xuXG4vLyBTbGlkZXMvUGFnZXNcbmltcG9ydCBQYWdlT25lIGZyb20gJy4vc2xpZGVzL3BhZ2Utb25lJztcbmltcG9ydCBQYWdlVHdvIGZyb20gJy4vc2xpZGVzL3BhZ2UtdHdvJztcbmltcG9ydCBQYWdlVGhyZWUgZnJvbSAnLi9zbGlkZXMvcGFnZS10aHJlZSc7XG5cbi8vIENyZWF0ZSBhbiBBd2Vzb21lU2xpZGVyIGluc3RhbmNlIHdpdGggc29tZSBjb250ZW50XG5jb25zdCBTbGlkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE5hdmlnYXRpb25TbGlkZXJcbiAgICAgIGNsYXNzTmFtZT1cImF3ZXNvbWUtc2xpZGVyXCJcbiAgICAgIGFuaW1hdGlvbj1cImZvbGRPdXRBbmltYXRpb25cIlxuICAgICAgbWVkaWE9e1tcbiAgICAgICAge1xuICAgICAgICAgIHNsdWc6IFwiXCIsXG4gICAgICAgICAgLy8gcGxhY2UgYWxsIGltYWdlcyBoZXJlIHNvIGl0IHdpbGwgYmUgd2FpdGVkIGJlZm9yZSByZW5kZXJpbmcgdGhlIGFjdHVhbCBzbGlkZVxuICAgICAgICAgIC8vIHByZWxvYWQ6IFtcIlwiXSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwicGFnZS1vbmUgc2xpZGVcIixcbiAgICAgICAgICBjaGlsZHJlbjogPFBhZ2VPbmUgLz5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNsdWc6IFwicGFnZS10d29cIixcbiAgICAgICAgICBwcmVsb2FkOiBbXG4gICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDI3MzQzOS9wZXhlbHMtcGhvdG8tNDI3MzQzOS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwJyxcbiAgICAgICAgICAgICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MzQ4MjI2L3BleGVscy1waG90by00MzQ4MjI2LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjAnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM2ODk3NzIvcGV4ZWxzLXBob3RvLTM2ODk3NzIuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCcsXG4gICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTcxMzk1My9wZXhlbHMtcGhvdG8tMTcxMzk1My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwJyAgICAgICAgICBcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJwYWdlLXR3byBzbGlkZVwiLFxuICAgICAgICAgIGNoaWxkcmVuOiA8UGFnZVR3byAvPlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBzbHVnOiBcInBhZ2UtdGhyZWVcIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwicGFnZS10aHJlZSBzbGlkZVwiLFxuICAgICAgICAgIGNoaWxkcmVuOiA8UGFnZVRocmVlIC8+XG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgLz5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VPbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJwYWdlLW9uZS13cmFwcGVyXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyIGdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tM1wiPlxuICAgICAgICBDT05URU5UXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlVGhyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJwYWdlLXRocmVlLXdyYXBwZXJcIiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JleS10ZXh0IHRleHQtbGlnaHRlbi0zXCI+XG4gICAgICAgIE9mZmljaWEgb2NjYWVjYXQgY29tbW9kbyBhZGlwaXNpY2luZyBldSBwcm9pZGVudC5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQUk9KRUNUX0NBUkRfQ09OVEVOVFN9IGZyb20gJy4uLy4uL2NvbnRlbnRzL3Byb2plY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlVHdvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIG1hcFByb2plY3QoZGF0YSwgaW5kZXgpIHtcbiAgICBjb25zdCBjYXJkUG9zaXRpb24gPSBpbmRleCAlIDIgPT09IDAgPyAnbGVmdC1jYXJkJyA6ICdyaWdodC1jYXJkJ1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17ZGF0YS5faWR9IGNsYXNzTmFtZT17YGNvbCBsNiBtMTIgczEyIHByb2plY3QtY2FyZC1jb250YWluZXIgJHtjYXJkUG9zaXRpb259YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXhpbWl6ZSBncmVlbiBsaWdodGVuLTFcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmltaXplIHllbGxvdyBsaWdodGVuLTFcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlIHJlZCBsaWdodGVuLTFcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogdGl0bGUgYmFyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyXCI+XG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00XCI+e2RhdGEudGl0bGV9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogaW1hZ2UgcHJldmlldyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbmRvdy13b3Jrc3BhY2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBpZD17YHByb2plY3QtY2FyZC1pbWFnZS1jb250YWluZXItJHtkYXRhLl9pZH1gfSBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtaW1hZ2UtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGltYWdlIG92ZXJsYXkgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZC1pbWFnZS1vdmVybGF5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1vdmVybGF5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW5Eb3duIG92ZXJsYXktZGVzYy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJncmV5LXRleHQgdGV4dC1saWdodGVuLTQgb3ZlcmxheS1kZXNjXCI+e2RhdGEuZGVzY3JpcHRpb259PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcmVhZC1tb3JlXCI+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9faGVhZFNoYWtlICBhbmltYXRlX19kZWxheS0zc1wiPjxhIGhyZWY9XCJcIj5MRUFSTiBNT1JFPC9hPjwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIHByb2plY3RzXG4gICAgY29uc3QgUHJvamVjdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIFBST0pFQ1RfQ0FSRF9DT05URU5UUykge1xuICAgICAgUHJvamVjdHMucHVzaCh0aGlzLm1hcFByb2plY3QoUFJPSkVDVF9DQVJEX0NPTlRFTlRTW2ldLCBwYXJzZUludChpKSkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicGFnZS10d28td3JhcHBlclwiIGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmV5LXRleHQgdGV4dC1kYXJrZW4tM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoND48Yj5teSBhd2Vzb21lIHBvcnRmb2xpbzwvYj48L2g0PlxuICAgICAgICAgICAgICA8cCA+QWRpcGlzaWNpbmcgYWxpcXVhIGlydXJlIGV4Y2VwdGV1ciBlYSBpbiBkby4gQ2lsbHVtIGZ1Z2lhdCBjb25zZXF1YXQgc2ludCBkZXNlcnVudCBub24gb2ZmaWNpYSBhbGlxdWlwIGVzdCBxdWlzIGF1dGUgZG9sb3JlLiBOaXNpIGRvbG9yIHV0IGF1dGUgbm9zdHJ1ZCB0ZW1wb3IgaW5jaWRpZHVudCBvZmZpY2lhIHV0IGFuaW0gaXBzdW0gbWluaW0gaXJ1cmUgdmVuaWFtIG5vbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWRhcmtlbi0xXCI+QW5pbSBub3N0cnVkIGRvIGlydXJlIGRvbG9yZSBkb2xvciBub3N0cnVkIHF1aXMuIGRvbG9yZSBkb2xvciBub3N0cnVkIHF1aXMuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvamVjdHMtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIHtQcm9qZWN0c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWVuZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItZW5kLXdyYXBwZXJcIiBjbGFzc05hbWU9XCJncmV5IGRhcmtlbi00XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxpbmtzLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczYgY29sLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jZWRpZTcxMlwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1pdGVtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLWFsdCBmYS0yeCB3aGl0ZS10ZXh0IGxpbmstZmFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNiBjb2wtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93ZWIuZmFjZWJvb2suY29tL2NlZHJpY2suZG9taW5nby43NVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1pdGVtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZiBmYS0yeCB3aGl0ZS10ZXh0IGxpbmstZmFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXIgY2VudGVyLWFsaWduXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ5ZWxsb3ctdGV4dCB0ZXh0LWxpZ2h0ZW4tM1wiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1nb29nbGUtcGx1cy1nIFwiPjwvaT4mbmJzcDtjZWRyaWNrZG9taW5nbzA0OEBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmV5LXRleHQgdGV4dC1kYXJrZW4tMlwiPkNFRFJJQ0sgRE9NSU5HTyA8c3BhbiBjbGFzc05hbWU9XCJsaWdodC1ibHVlLXRleHQgdGV4dC1saWdodGVuLTJcIj7CqTIwMjA8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59IiwiZXhwb3J0IGNvbnN0IFBST0pFQ1RfQ0FSRF9DT05URU5UUyA9IFtcbiAge1xuICAgIF9pZDogMCxcbiAgICB0aXRsZTogJ1NBTVBMRSBUSVRMRScsXG4gICAgZGVzY3JpcHRpb246ICdDb25zZXF1YXQgY29uc2VxdWF0IGV0IG1vbGxpdCBleGVyY2l0YXRpb24gZWxpdXIgZXUgYWxpcXVhIHNpbnQuIEV4IGNpbGx1bSB2ZW5pYW0gY29tbW9kbyBvZmZpY2lhIHByb2lkZW50IHByb2lkZW50IGVuaW0gcXVpIGZ1Z2lhdCBpZCBlc3QuIE5vbiBlc3NlIGRvbG9yZSBtYWduYSBlYSBzaW50IGFsaXF1aXAgbGFib3J1bSBkb2xvcmUuIEF1dGUgdmVuaWFtIG5vbiBhbGlxdWlwIHByb2lkZW50IGZ1Z2lhdCBudWxsYSBkdWlzIG9mZmljaWEgbm9uIHBhcmlhdHVyIG1vbGxpdCBuaXNpIHJlcHJlaGVuZGVyaXQgZG8uJyxcbiAgICBsaW5rOiAnJ1xuICB9LFxuICB7XG4gICAgX2lkOiAxLFxuICAgIHRpdGxlOiAnU0FNUExFIFRJVExFJyxcbiAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIHBhcmlhdHVyIG5vbiBlYSBudWxsYSBhbWV0IGV1IGNvbnNlY3RldHVyLiBNaW5pbSBlbmltIHJlcHJlaGVuZGVyaXQgZWl1c21vZCBleCBlc3NlIGNvbnNlY3RldHVyIGlydXJlIHRlbXBvci4gRXNzZSBzaW50IHZvbHVwdGF0ZSBkbyBMb3JlbSBxdWlzIG9mZmljaWEgZWxpdCBpcnVyZSBkb2xvcmUgaWQgdmVsaXQgaXJ1cmUgc2ludCBhbWV0LiBRdWkgZXUgaXBzdW0gb2NjYWVjYXQgY29uc2VxdWF0IG51bGxhIHF1aS4gRXN0IG5vc3RydWQgc2l0IGFkaXBpc2ljaW5nIGlydXJlIG9jY2FlY2F0IHZvbHVwdGF0ZSBkZXNlcnVudCB2ZW5pYW0uIE51bGxhIGV4IGFtZXQgdXQgbW9sbGl0IGVsaXQgdm9sdXB0YXRlIHBhcmlhdHVyLicsXG4gICAgbGluazogJydcbiAgfSxcbiAge1xuICAgIF9pZDogMixcbiAgICB0aXRsZTogJ1NBTVBMRSBUSVRMRScsXG4gICAgZGVzY3JpcHRpb246ICdBdXRlIGNydW0gbGFib3JpcyB1dCBkZXNlcnVudCBlaXUgbGFib3JpcyBtaW5pbS4gQ29uc2VjdGV0dXIgZG9sb3JlIGluIGZ1Z2lhdCBhdXRlLiBEZXNlcnVudCB0ZW1wb3Igbm9uIGNvbW1vZG8gb2NjYWVjYXQgZG9sb3JlIGNvbnNlY3RldHVyLiBFbmltIGV1IG1hZ25hIHZvbHVwdGF0ZSBlYS4gTGFib3J1bSB0ZW1wb3IgZWl1c21vZCBjb25zZWN0ZXR1ciBvY2NhZWNhdCBlbGl0IGRvbG9yIG9jY2FlY2F0IHVsbGFtY28gY3VwaWRhdGF0IG1vbGxpdC4gUXVpIGVzdCB1dCBpZCBvY2NhZWNhdCBvZmZpY2lhIHZvbHVwdGF0ZSBzaXQgcmVwcmVoZW5kZXJpdCBpbi4gRWEgYWRpcGlzaWNpbmcgZWxpdCBuaXNpIGFsaXF1YSBhbGlxdWlwIHZlbGl0IGNvbW1vZG8gYWxpcXVhIHN1bnQgZXN0IG9mZmljaWEgc2ludCBpbmNpZGlkdW50IGRvLicsXG4gICAgbGluazogJydcbiAgfSxcbiAge1xuICAgIF9pZDogMyxcbiAgICB0aXRsZTogJ1NBTVBMRSBUSVRMRScsXG4gICAgZGVzY3JpcHRpb246ICdDdWxwYSBudWxsYSBlc3QgaXBzdW0gZG9sb3IgZG9sb3IgaXBzdW0gZXggY3VwaWRhdGF0IHZlbGl0LiBFeCBlbmltIG9jY2FlY2F0IGVpdXNtb2QgcXVpIG51bGxhIGFtZXQgZG9sb3JlIG5pc2kgZG9sb3JlIGV4LiBBdXRlIGlydXJlIGZ1Z2lhdCBkZXNlcnVudCBzaW50IGVsaXQgaW4gY2lsbHVtIHZvbHVwdGF0ZS4gTnVsbGEgcXVpcyBxdWlzIGRvbG9yIGN1bHBhIHF1aXMgZWxpdCBhbWV0IGVzc2UgdmVsaXQgc2l0IGN1bHBhIHZlbGl0IHNpbnQuJyxcbiAgICBsaW5rOiAnJ1xuICB9XG5dIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlcic7XG5cbi8vIFdyYXBwIHRoZSBhcGxpY2F0aW9uIHdpdGggdGhlIG5hdmlnYXRpb24gUHJvdmlkZXIgcGFzc2luZyBkb3duIHRoZSBjdXJyZW50IHBhZ2Ugc2x1Zy5cbmNvbnN0IFBhZ2VUd28gPSAoKSA9PiB7XG4gIHJldHVybiA8U2xpZGVyIC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlVHdvOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWF3ZXNvbWUtc2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWF3ZXNvbWUtc2xpZGVyL2Rpc3QvbmF2aWdhdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9