window["VueSwitch"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const {
  vSwitch,
  vCase,
  vDefault
} = __webpack_require__(1);

module.exports = {
  install(Vue, options) {
    Vue.directive('switch', vSwitch);
    Vue.directive('case', vCase);
    Vue.directive('default', vDefault);
  }

};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsDirective", function() { return containsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vSwitch", function() { return vSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vCase", function() { return vCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vDefault", function() { return vDefault; });
const _data = {};

function setValues(data, binding) {
  data[binding.expression] = binding.value;
}

function containsDirective(arr = [], directive) {
  for (let a in arr) {
    if (arr[a].name === directive) return arr[a];
  }

  return false;
}

const containsCase = (arr = []) => containsDirective(arr, "case");

const containsDefault = (arr = []) => containsDirective(arr, "default");

function toggleDefaultElement(binding, vnode, {
  show
}) {
  const children = vnode.children;

  for (let node of children) {
    if (node.data) {
      if (containsDefault(node.data.directives)) {
        const display = show ? node.elm.getAttribute("data-initial-display") : "none";
        node.elm.style.display = display;
      }
    }
  }
}

function revealElementWithInitialDisplay(element) {
  const initialDisplay = element.getAttribute("data-initial-display");
  element.style.display = initialDisplay !== "none" ? initialDisplay : "block";
}

function processSwitch(el, binding, vnode, data) {
  let matched = false;
  const children = vnode.children;

  for (let node of children) {
    if (node.data) {
      const caseDirective = containsCase(node.data.directives, "case");

      if (caseDirective) {
        if (caseDirective.value === data[binding.expression]) {
          revealElementWithInitialDisplay(node.elm);
          toggleDefaultElement(binding, vnode, {
            show: false
          });
          matched = true;
        } else {
          node.elm.style.display = "none";
        }
      }
    }
  }

  if (!matched) {
    toggleDefaultElement(binding, vnode, {
      show: true
    });
  }
}

function saveInitialDsplayToDataAttr(elements) {
  for (let child of elements) {
    child.setAttribute("data-initial-display", child.style.display);
  }
}

const vSwitch = {
  bind(el, binding) {
    setValues(_data, binding);
  },

  inserted(el, binding, vnode) {
    saveInitialDsplayToDataAttr(el.children);
    processSwitch(el, binding, vnode, _data);
  },

  update(el, binding) {
    setValues(_data, binding);
  },

  componentUpdated(el, binding, vnode) {
    processSwitch(el, binding, vnode, _data);
  }

};

const vCase = () => {};

const vDefault = () => {};


/* harmony default export */ __webpack_exports__["default"] = ({
  install(Vue, options) {
    Vue.directive('switch', vSwitch);
    Vue.directive('case', vCase);
    Vue.directive('default', vDefault);
  }

});

/***/ })
/******/ ]);