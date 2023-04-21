/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store.js":
/*!**********************!*\
  !*** ./app/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadState\": () => (/* binding */ loadState),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ \"./slices/basketSlice.js\");\n/* harmony import */ var _slices_categorySlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slices/categorySlice */ \"./slices/categorySlice.js\");\n/* harmony import */ var _slices_wishlistSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slices/wishlistSlice */ \"./slices/wishlistSlice.js\");\n\n\n\n\nconst loadState = ()=>{\n    try {\n        const serializedState = localStorage.getItem(\"state\");\n        if (serializedState === null) {\n            return undefined;\n        }\n        return JSON.parse(serializedState);\n    } catch (err) {\n        return undefined;\n    }\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        category: _slices_categorySlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        wishlist: _slices_wishlistSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    preloadedState: loadState()\n});\nstore.subscribe(()=>{\n    localStorage.setItem(\"state\", JSON.stringify(store.getState()));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNBO0FBQ0k7QUFDQTtBQUUvQyxNQUFNSSxZQUFZLElBQU07SUFDN0IsSUFBSTtRQUNGLE1BQU1DLGtCQUFrQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzdDLElBQUlGLG9CQUFvQixJQUFJLEVBQUU7WUFDNUIsT0FBT0c7UUFDVCxDQUFDO1FBQ0QsT0FBT0MsS0FBS0MsS0FBSyxDQUFDTDtJQUNwQixFQUFFLE9BQU9NLEtBQUs7UUFDWixPQUFPSDtJQUNUO0FBQ0YsRUFBRTtBQUVLLE1BQU1JLFFBQVFaLGdFQUFjQSxDQUFDO0lBQ2xDYSxTQUFTO1FBQ1BDLFFBQVFiLDJEQUFhQTtRQUNyQmMsVUFBVWIsNkRBQWVBO1FBQ3pCYyxVQUFVYiw2REFBZUE7SUFDM0I7SUFDQWMsZ0JBQWdCYjtBQUNsQixHQUFHO0FBRUhRLE1BQU1NLFNBQVMsQ0FBQyxJQUFNO0lBQ3BCWixhQUFhYSxPQUFPLENBQUMsU0FBU1YsS0FBS1csU0FBUyxDQUFDUixNQUFNUyxRQUFRO0FBQzdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3N0b3JlLmpzP2NhZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYmFza2V0UmVkdWNlciBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XHJcbmltcG9ydCBjYXRlZ29yeVJlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy9jYXRlZ29yeVNsaWNlXCI7XHJcbmltcG9ydCB3aXNobGlzdFJlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy93aXNobGlzdFNsaWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFN0YXRlID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXJpYWxpemVkU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlXCIpO1xyXG4gICAgaWYgKHNlcmlhbGl6ZWRTdGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsaXplZFN0YXRlKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGJhc2tldDogYmFza2V0UmVkdWNlcixcclxuICAgIGNhdGVnb3J5OiBjYXRlZ29yeVJlZHVjZXIsXHJcbiAgICB3aXNobGlzdDogd2lzaGxpc3RSZWR1Y2VyLFxyXG4gIH0sXHJcbiAgcHJlbG9hZGVkU3RhdGU6IGxvYWRTdGF0ZSgpLFxyXG59KTtcclxuXHJcbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZVwiLCBKU09OLnN0cmluZ2lmeShzdG9yZS5nZXRTdGF0ZSgpKSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJiYXNrZXRSZWR1Y2VyIiwiY2F0ZWdvcnlSZWR1Y2VyIiwid2lzaGxpc3RSZWR1Y2VyIiwibG9hZFN0YXRlIiwic2VyaWFsaXplZFN0YXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsIkpTT04iLCJwYXJzZSIsImVyciIsInN0b3JlIiwicmVkdWNlciIsImJhc2tldCIsImNhdGVnb3J5Iiwid2lzaGxpc3QiLCJwcmVsb2FkZWRTdGF0ZSIsInN1YnNjcmliZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJnZXRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_6___default().configure({\n    showSpinner: false\n});\nnext_router__WEBPACK_IMPORTED_MODULE_8___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().start());\nnext_router__WEBPACK_IMPORTED_MODULE_8___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().done());\nnext_router__WEBPACK_IMPORTED_MODULE_8___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().done());\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n            store: _app_store__WEBPACK_IMPORTED_MODULE_5__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\agnuz\\\\OneDrive\\\\Desktop\\\\ChiqueChick-store\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\agnuz\\\\OneDrive\\\\Desktop\\\\ChiqueChick-store\\\\pages\\\\_app.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\agnuz\\\\OneDrive\\\\Desktop\\\\ChiqueChick-store\\\\pages\\\\_app.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDSjtBQUNrQjtBQUNUO0FBQ0Y7QUFDSDtBQUNEO0FBQ0E7QUFDakNHLDBEQUFtQixDQUFDO0lBQUVHLGFBQWEsS0FBSztBQUFDO0FBQ3pDRiw0REFBZ0IsQ0FBQyxvQkFBb0IsSUFBTUQsc0RBQWU7QUFDMURDLDREQUFnQixDQUFDLHVCQUF1QixJQUFNRCxxREFBYztBQUM1REMsNERBQWdCLENBQUMsb0JBQW9CLElBQU1ELHFEQUFjO0FBRXpELFNBQVNRLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ2IsMERBQWVBO2tCQUNkLDRFQUFDQyxpREFBUUE7WUFBQ0MsT0FBT0EsNkNBQUtBO3NCQUNwQiw0RUFBQ1U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHAvc3RvcmVcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBcIm5wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbk5Qcm9ncmVzcy5jb25maWd1cmUoeyBzaG93U3Bpbm5lcjogZmFsc2UgfSk7XHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKTtcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiQW5pbWF0ZVByZXNlbmNlIiwiUHJvdmlkZXIiLCJzdG9yZSIsIk5Qcm9ncmVzcyIsIlJvdXRlciIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiZXZlbnRzIiwib24iLCJzdGFydCIsImRvbmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./slices/basketSlice.js":
/*!*******************************!*\
  !*** ./slices/basketSlice.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToBasket\": () => (/* binding */ addToBasket),\n/* harmony export */   \"basketSlice\": () => (/* binding */ basketSlice),\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"deleteFromBasket\": () => (/* binding */ deleteFromBasket),\n/* harmony export */   \"minusItem\": () => (/* binding */ minusItem),\n/* harmony export */   \"plusItem\": () => (/* binding */ plusItem),\n/* harmony export */   \"removeFromBasket\": () => (/* binding */ removeFromBasket),\n/* harmony export */   \"selectItems\": () => (/* binding */ selectItems)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: []\n};\nconst addItemToCart = (cartItems, cartItemToAdd)=>{\n    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToAdd.id && cartItem.selectedSizeProp && cartItemToAdd.selectedSizeProp && cartItem.selectedSizeProp.size === cartItemToAdd.selectedSizeProp.size);\n    if (existingCartItem) {\n        return cartItems.map((cartItem)=>cartItem.id === cartItemToAdd.id && cartItem.selectedSizeProp.size === cartItemToAdd.selectedSizeProp.size ? {\n                ...cartItem,\n                quantity: cartItem.quantity + 1\n            } : cartItem);\n    }\n    return [\n        ...cartItems,\n        {\n            ...cartItemToAdd,\n            quantity: 1,\n            selectedSizeProp: cartItemToAdd.selectedSizeProp || {}\n        }\n    ];\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"basket\",\n    initialState,\n    hydrate: (state, action)=>{\n        // do not do state = action.payload it will not update the store\n        return action.payload;\n    },\n    reducers: {\n        addToBasket: (state, action)=>{\n            state.items = addItemToCart(state.items, action.payload);\n        },\n        removeFromBasket: (state, action)=>{\n            state.items = state.items.filter((item)=>item.id !== action.payload.id || item.selectedSizeProp.size !== action.payload.selectedSizeProp.size);\n        },\n        plusItem: (state, action)=>{\n            [\n                ...state.items,\n                state.items[action.payload].quantity += 1\n            ];\n        },\n        minusItem: (state, action)=>{\n            [\n                ...state.items,\n                state.items[action.payload].quantity -= 1\n            ];\n        },\n        deleteFromBasket: (state, action)=>{\n            state.items = [];\n        },\n        clear: (state)=>{\n            return initialState;\n        }\n    }\n});\nconst { addToBasket , removeFromBasket , plusItem , minusItem , deleteFromBasket , clear  } = basketSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\nconst selectItems = (state)=>state.basket.items;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zbGljZXMvYmFza2V0U2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsZUFBZTtJQUNuQkMsT0FBTyxFQUFFO0FBQ1g7QUFDQSxNQUFNQyxnQkFBZ0IsQ0FBQ0MsV0FBV0MsZ0JBQWtCO0lBQ2xELE1BQU1DLG1CQUFtQkYsVUFBVUcsSUFBSSxDQUNyQyxDQUFDQyxXQUNDQSxTQUFTQyxFQUFFLEtBQUtKLGNBQWNJLEVBQUUsSUFDaENELFNBQVNFLGdCQUFnQixJQUN6QkwsY0FBY0ssZ0JBQWdCLElBQzlCRixTQUFTRSxnQkFBZ0IsQ0FBQ0MsSUFBSSxLQUFLTixjQUFjSyxnQkFBZ0IsQ0FBQ0MsSUFBSTtJQUcxRSxJQUFJTCxrQkFBa0I7UUFDcEIsT0FBT0YsVUFBVVEsR0FBRyxDQUFDLENBQUNKLFdBQ3BCQSxTQUFTQyxFQUFFLEtBQUtKLGNBQWNJLEVBQUUsSUFDaENELFNBQVNFLGdCQUFnQixDQUFDQyxJQUFJLEtBQUtOLGNBQWNLLGdCQUFnQixDQUFDQyxJQUFJLEdBQ2xFO2dCQUFFLEdBQUdILFFBQVE7Z0JBQUVLLFVBQVVMLFNBQVNLLFFBQVEsR0FBRztZQUFFLElBQy9DTCxRQUFRO0lBRWhCLENBQUM7SUFHRCxPQUFPO1dBQ0ZKO1FBQ0g7WUFDRSxHQUFHQyxhQUFhO1lBQ2hCUSxVQUFVO1lBQ1ZILGtCQUFrQkwsY0FBY0ssZ0JBQWdCLElBQUksQ0FBQztRQUN2RDtLQUNEO0FBQ0g7QUFHTyxNQUFNSSxjQUFjZCw2REFBV0EsQ0FBQztJQUNyQ2UsTUFBTTtJQUNOZDtJQUNBZSxTQUFTLENBQUNDLE9BQU9DLFNBQVc7UUFDMUIsZ0VBQWdFO1FBQ2hFLE9BQU9BLE9BQU9DLE9BQU87SUFDdkI7SUFDQUMsVUFBVTtRQUNSQyxhQUFhLENBQUNKLE9BQU9DLFNBQVc7WUFDOUJELE1BQU1mLEtBQUssR0FBR0MsY0FBY2MsTUFBTWYsS0FBSyxFQUFFZ0IsT0FBT0MsT0FBTztRQUN6RDtRQUNBRyxrQkFBa0IsQ0FBQ0wsT0FBT0MsU0FBVztZQUNuQ0QsTUFBTWYsS0FBSyxHQUFHZSxNQUFNZixLQUFLLENBQUNxQixNQUFNLENBQzlCLENBQUNDLE9BQ0NBLEtBQUtmLEVBQUUsS0FBS1MsT0FBT0MsT0FBTyxDQUFDVixFQUFFLElBQzdCZSxLQUFLZCxnQkFBZ0IsQ0FBQ0MsSUFBSSxLQUFLTyxPQUFPQyxPQUFPLENBQUNULGdCQUFnQixDQUFDQyxJQUFJO1FBRXpFO1FBQ0FjLFVBQVUsQ0FBQ1IsT0FBT0MsU0FBVztZQUMzQjttQkFBSUQsTUFBTWYsS0FBSztnQkFBR2UsTUFBTWYsS0FBSyxDQUFDZ0IsT0FBT0MsT0FBTyxDQUFDLENBQUNOLFFBQVEsSUFBSTthQUFHO1FBQy9EO1FBQ0FhLFdBQVcsQ0FBQ1QsT0FBT0MsU0FBVztZQUM1QjttQkFBSUQsTUFBTWYsS0FBSztnQkFBR2UsTUFBTWYsS0FBSyxDQUFDZ0IsT0FBT0MsT0FBTyxDQUFDLENBQUNOLFFBQVEsSUFBSTthQUFHO1FBQy9EO1FBQ0FjLGtCQUFrQixDQUFDVixPQUFPQyxTQUFXO1lBQ25DRCxNQUFNZixLQUFLLEdBQUcsRUFBRTtRQUNsQjtRQUNBMEIsT0FBTyxDQUFDWCxRQUFVO1lBQ2hCLE9BQU9oQjtRQUNUO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUNYb0IsWUFBVyxFQUNYQyxpQkFBZ0IsRUFDaEJHLFNBQVEsRUFDUkMsVUFBUyxFQUNUQyxpQkFBZ0IsRUFDaEJDLE1BQUssRUFDTixHQUFHZCxZQUFZZSxPQUFPLENBQUM7QUFFeEIsMEVBQTBFO0FBQ25FLE1BQU1DLGNBQWMsQ0FBQ2IsUUFBVUEsTUFBTWMsTUFBTSxDQUFDN0IsS0FBSyxDQUFDO0FBRXpELGlFQUFlWSxZQUFZa0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2xpY2VzL2Jhc2tldFNsaWNlLmpzPzEyNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGl0ZW1zOiBbXSxcclxufTtcclxuY29uc3QgYWRkSXRlbVRvQ2FydCA9IChjYXJ0SXRlbXMsIGNhcnRJdGVtVG9BZGQpID0+IHtcclxuICBjb25zdCBleGlzdGluZ0NhcnRJdGVtID0gY2FydEl0ZW1zLmZpbmQoXHJcbiAgICAoY2FydEl0ZW0pID0+XHJcbiAgICAgIGNhcnRJdGVtLmlkID09PSBjYXJ0SXRlbVRvQWRkLmlkICYmXHJcbiAgICAgIGNhcnRJdGVtLnNlbGVjdGVkU2l6ZVByb3AgJiZcclxuICAgICAgY2FydEl0ZW1Ub0FkZC5zZWxlY3RlZFNpemVQcm9wICYmXHJcbiAgICAgIGNhcnRJdGVtLnNlbGVjdGVkU2l6ZVByb3Auc2l6ZSA9PT0gY2FydEl0ZW1Ub0FkZC5zZWxlY3RlZFNpemVQcm9wLnNpemVcclxuICApO1xyXG5cclxuICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSkge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5tYXAoKGNhcnRJdGVtKSA9PlxyXG4gICAgICBjYXJ0SXRlbS5pZCA9PT0gY2FydEl0ZW1Ub0FkZC5pZCAmJlxyXG4gICAgICBjYXJ0SXRlbS5zZWxlY3RlZFNpemVQcm9wLnNpemUgPT09IGNhcnRJdGVtVG9BZGQuc2VsZWN0ZWRTaXplUHJvcC5zaXplXHJcbiAgICAgICAgPyB7IC4uLmNhcnRJdGVtLCBxdWFudGl0eTogY2FydEl0ZW0ucXVhbnRpdHkgKyAxIH1cclxuICAgICAgICA6IGNhcnRJdGVtXHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiBbXHJcbiAgICAuLi5jYXJ0SXRlbXMsXHJcbiAgICB7XHJcbiAgICAgIC4uLmNhcnRJdGVtVG9BZGQsXHJcbiAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICBzZWxlY3RlZFNpemVQcm9wOiBjYXJ0SXRlbVRvQWRkLnNlbGVjdGVkU2l6ZVByb3AgfHwge30sXHJcbiAgICB9LFxyXG4gIF07XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2tldFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiYmFza2V0XCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIGh5ZHJhdGU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAvLyBkbyBub3QgZG8gc3RhdGUgPSBhY3Rpb24ucGF5bG9hZCBpdCB3aWxsIG5vdCB1cGRhdGUgdGhlIHN0b3JlXHJcbiAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkVG9CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLml0ZW1zID0gYWRkSXRlbVRvQ2FydChzdGF0ZS5pdGVtcywgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLml0ZW1zID0gc3RhdGUuaXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PlxyXG4gICAgICAgICAgaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQgfHxcclxuICAgICAgICAgIGl0ZW0uc2VsZWN0ZWRTaXplUHJvcC5zaXplICE9PSBhY3Rpb24ucGF5bG9hZC5zZWxlY3RlZFNpemVQcm9wLnNpemVcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBwbHVzSXRlbTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgWy4uLnN0YXRlLml0ZW1zLCAoc3RhdGUuaXRlbXNbYWN0aW9uLnBheWxvYWRdLnF1YW50aXR5ICs9IDEpXTtcclxuICAgIH0sXHJcbiAgICBtaW51c0l0ZW06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIFsuLi5zdGF0ZS5pdGVtcywgKHN0YXRlLml0ZW1zW2FjdGlvbi5wYXlsb2FkXS5xdWFudGl0eSAtPSAxKV07XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlRnJvbUJhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXRlbXMgPSBbXTtcclxuICAgIH0sXHJcbiAgICBjbGVhcjogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICBhZGRUb0Jhc2tldCxcclxuICByZW1vdmVGcm9tQmFza2V0LFxyXG4gIHBsdXNJdGVtLFxyXG4gIG1pbnVzSXRlbSxcclxuICBkZWxldGVGcm9tQmFza2V0LFxyXG4gIGNsZWFyLFxyXG59ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcclxuXHJcbi8vIFNlbGVjdG9ycyAtIFRoaXMgaXMgaG93IHdlIHB1bGwgaW5mb3JtYXRpb24gZnJvbSB0aGUgR2xvYmFsIHN0b3JlIHNsaWNlXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFza2V0U2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJhZGRJdGVtVG9DYXJ0IiwiY2FydEl0ZW1zIiwiY2FydEl0ZW1Ub0FkZCIsImV4aXN0aW5nQ2FydEl0ZW0iLCJmaW5kIiwiY2FydEl0ZW0iLCJpZCIsInNlbGVjdGVkU2l6ZVByb3AiLCJzaXplIiwibWFwIiwicXVhbnRpdHkiLCJiYXNrZXRTbGljZSIsIm5hbWUiLCJoeWRyYXRlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInJlbW92ZUZyb21CYXNrZXQiLCJmaWx0ZXIiLCJpdGVtIiwicGx1c0l0ZW0iLCJtaW51c0l0ZW0iLCJkZWxldGVGcm9tQmFza2V0IiwiY2xlYXIiLCJhY3Rpb25zIiwic2VsZWN0SXRlbXMiLCJiYXNrZXQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./slices/basketSlice.js\n");

/***/ }),

/***/ "./slices/categorySlice.js":
/*!*********************************!*\
  !*** ./slices/categorySlice.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categorySlice\": () => (/* binding */ categorySlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"recentCategory\": () => (/* binding */ recentCategory),\n/* harmony export */   \"selectCategory\": () => (/* binding */ selectCategory)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    item: \"\"\n};\nconst categorySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"category\",\n    initialState,\n    reducers: {\n        selectCategory: (state, action)=>{\n            state.item = action.payload;\n        }\n    }\n});\nconst { selectCategory  } = categorySlice.actions;\nconst recentCategory = (state)=>state.category.item;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zbGljZXMvY2F0ZWdvcnlTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsZUFBZTtJQUNuQkMsTUFBTTtBQUNSO0FBRU8sTUFBTUMsZ0JBQWdCSCw2REFBV0EsQ0FBQztJQUN2Q0ksTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLGdCQUFnQixDQUFDQyxPQUFPQyxTQUFXO1lBQ2pDRCxNQUFNTCxJQUFJLEdBQUdNLE9BQU9DLE9BQU87UUFDN0I7SUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQUVILGVBQWMsRUFBRSxHQUFHSCxjQUFjTyxPQUFPLENBQUM7QUFFakQsTUFBTUMsaUJBQWlCLENBQUNKLFFBQVVBLE1BQU1LLFFBQVEsQ0FBQ1YsSUFBSSxDQUFDO0FBRTdELGlFQUFlQyxjQUFjVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zbGljZXMvY2F0ZWdvcnlTbGljZS5qcz8xNjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpdGVtOiBcIlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJjYXRlZ29yeVwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2VsZWN0Q2F0ZWdvcnk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLml0ZW0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZWxlY3RDYXRlZ29yeSB9ID0gY2F0ZWdvcnlTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlY2VudENhdGVnb3J5ID0gKHN0YXRlKSA9PiBzdGF0ZS5jYXRlZ29yeS5pdGVtO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcnlTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpdGVtIiwiY2F0ZWdvcnlTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNlbGVjdENhdGVnb3J5Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlY2VudENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./slices/categorySlice.js\n");

/***/ }),

/***/ "./slices/wishlistSlice.js":
/*!*********************************!*\
  !*** ./slices/wishlistSlice.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToWishlist\": () => (/* binding */ addToWishlist),\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeFromWishlist\": () => (/* binding */ removeFromWishlist),\n/* harmony export */   \"selectWishItems\": () => (/* binding */ selectWishItems),\n/* harmony export */   \"wishlistSlice\": () => (/* binding */ wishlistSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    wishItems: []\n};\nconst wishlistSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"wishlist\",\n    initialState,\n    reducers: {\n        clear: (state)=>{\n            return initialState;\n        },\n        addToWishlist: (state, action)=>{\n            const added = state.wishItems.find((item)=>item.id === action.payload.id);\n            if (added) state.wishItems = [\n                ...state.wishItems\n            ];\n            else state.wishItems = [\n                ...state.wishItems,\n                action.payload\n            ];\n        },\n        removeFromWishlist: (state, action)=>{\n            state.wishItems = state.wishItems.filter((item)=>item.id !== action.payload.id);\n        }\n    }\n});\nconst { addToWishlist , removeFromWishlist , clear  } = wishlistSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\nconst selectWishItems = (state)=>state.wishlist.wishItems;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishlistSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zbGljZXMvd2lzaGxpc3RTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxlQUFlO0lBQ25CQyxXQUFXLEVBQUU7QUFDZjtBQUVPLE1BQU1DLGdCQUFnQkgsNkRBQVdBLENBQUM7SUFDdkNJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxPQUFPLENBQUNDLFFBQVU7WUFDaEIsT0FBT047UUFDVDtRQUNBTyxlQUFlLENBQUNELE9BQU9FLFNBQVc7WUFDaEMsTUFBTUMsUUFBUUgsTUFBTUwsU0FBUyxDQUFDUyxJQUFJLENBQ2hDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0osT0FBT0ssT0FBTyxDQUFDRCxFQUFFO1lBRXpDLElBQUlILE9BQU9ILE1BQU1MLFNBQVMsR0FBRzttQkFBSUssTUFBTUwsU0FBUzthQUFDO2lCQUM1Q0ssTUFBTUwsU0FBUyxHQUFHO21CQUFJSyxNQUFNTCxTQUFTO2dCQUFFTyxPQUFPSyxPQUFPO2FBQUM7UUFDN0Q7UUFDQUMsb0JBQW9CLENBQUNSLE9BQU9FLFNBQVc7WUFDckNGLE1BQU1MLFNBQVMsR0FBR0ssTUFBTUwsU0FBUyxDQUFDYyxNQUFNLENBQ3RDLENBQUNKLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0osT0FBT0ssT0FBTyxDQUFDRCxFQUFFO1FBRTNDO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFTCxjQUFhLEVBQUVPLG1CQUFrQixFQUFFVCxNQUFLLEVBQUUsR0FBR0gsY0FBY2MsT0FBTyxDQUFDO0FBRWxGLDBFQUEwRTtBQUNuRSxNQUFNQyxrQkFBa0IsQ0FBQ1gsUUFBVUEsTUFBTVksUUFBUSxDQUFDakIsU0FBUyxDQUFDO0FBRW5FLGlFQUFlQyxjQUFjaUIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2xpY2VzL3dpc2hsaXN0U2xpY2UuanM/MWIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgd2lzaEl0ZW1zOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXNobGlzdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwid2lzaGxpc3RcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGNsZWFyOiAoc3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICAgIH0sXHJcbiAgICBhZGRUb1dpc2hsaXN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBhZGRlZCA9IHN0YXRlLndpc2hJdGVtcy5maW5kKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoYWRkZWQpIHN0YXRlLndpc2hJdGVtcyA9IFsuLi5zdGF0ZS53aXNoSXRlbXNdO1xyXG4gICAgICBlbHNlIHN0YXRlLndpc2hJdGVtcyA9IFsuLi5zdGF0ZS53aXNoSXRlbXMsIGFjdGlvbi5wYXlsb2FkXTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVGcm9tV2lzaGxpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLndpc2hJdGVtcyA9IHN0YXRlLndpc2hJdGVtcy5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWRkVG9XaXNobGlzdCwgcmVtb3ZlRnJvbVdpc2hsaXN0LCBjbGVhciB9ID0gd2lzaGxpc3RTbGljZS5hY3Rpb25zO1xyXG5cclxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFdpc2hJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUud2lzaGxpc3Qud2lzaEl0ZW1zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2lzaGxpc3RTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ3aXNoSXRlbXMiLCJ3aXNobGlzdFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY2xlYXIiLCJzdGF0ZSIsImFkZFRvV2lzaGxpc3QiLCJhY3Rpb24iLCJhZGRlZCIsImZpbmQiLCJpdGVtIiwiaWQiLCJwYXlsb2FkIiwicmVtb3ZlRnJvbVdpc2hsaXN0IiwiZmlsdGVyIiwiYWN0aW9ucyIsInNlbGVjdFdpc2hJdGVtcyIsIndpc2hsaXN0IiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./slices/wishlistSlice.js\n");

/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();