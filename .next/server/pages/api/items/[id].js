"use strict";
(() => {
var exports = {};
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 8571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5132);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { id  } = req.query;
    const item = _app_data_json__WEBPACK_IMPORTED_MODULE_0__.find((item)=>item.slug === id);
    res.status(200).json(JSON.stringify(item));
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [132], () => (__webpack_exec__(8571)));
module.exports = __webpack_exports__;

})();