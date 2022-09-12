"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["xhhLib"] = factory(require("lodash"));
	else
		root["xhhLib"] = factory(root["_"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_lodash__) => {
return (self["webpackChunkxhhLib"] = self["webpackChunkxhhLib"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numToWord": () => (/* binding */ numToWord),
/* harmony export */   "wordToNum": () => (/* binding */ wordToNum)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ref_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ref.json */ "./src/ref.json");



function numToWord(num) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default().reduce(
    _ref_json__WEBPACK_IMPORTED_MODULE_1__,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

function wordToNum(word) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default().reduce(
    _ref_json__WEBPACK_IMPORTED_MODULE_1__,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "./src/ref.json":
/*!**********************!*\
  !*** ./src/ref.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('[{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgzMWE1N2JlZmM2MjgxMjk3OTgyNi5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdUI7QUFDUzs7QUFFekI7QUFDUCxTQUFTLG9EQUFRO0FBQ2pCLElBQUksc0NBQU07QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFNBQVMsb0RBQVE7QUFDakIsSUFBSSxzQ0FBTTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veGhoTGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly94aGhMaWIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGhoTGliL2V4dGVybmFsIHVtZCB7XCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIixcInJvb3RcIjpcIl9cIn0iXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ4aGhMaWJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInhoaExpYlwiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbG9kYXNoX18pID0+IHtcbnJldHVybiAiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG51bVJlZiBmcm9tICcuL3JlZi5qc29uJztcblxuZXhwb3J0IGZ1bmN0aW9uIG51bVRvV29yZChudW0pIHtcbiAgcmV0dXJuIF8ucmVkdWNlKFxuICAgIG51bVJlZixcbiAgICAoYWNjdW0sIHJlZikgPT4ge1xuICAgICAgcmV0dXJuIHJlZi5udW0gPT09IG51bSA/IHJlZi53b3JkIDogYWNjdW07XG4gICAgfSxcbiAgICAnJ1xuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29yZFRvTnVtKHdvcmQpIHtcbiAgcmV0dXJuIF8ucmVkdWNlKFxuICAgIG51bVJlZixcbiAgICAoYWNjdW0sIHJlZikgPT4ge1xuICAgICAgcmV0dXJuIHJlZi53b3JkID09PSB3b3JkICYmIHdvcmQudG9Mb3dlckNhc2UoKSA/IHJlZi5udW0gOiBhY2N1bTtcbiAgICB9LFxuICAgIC0xXG4gICk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xvZGFzaF9fOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==