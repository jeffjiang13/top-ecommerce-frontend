"use strict";
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 1042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Er": () => (/* binding */ removeFromBasket),
/* harmony export */   "H": () => (/* binding */ addToBasket),
/* harmony export */   "WC": () => (/* binding */ deleteFromBasket),
/* harmony export */   "Xj": () => (/* binding */ plusItem),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a1": () => (/* binding */ selectItems),
/* harmony export */   "uz": () => (/* binding */ minusItem)
/* harmony export */ });
/* unused harmony exports addItemToCart, basketSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    items: []
};
const addItemToCart = (cartItems, cartItemToAdd)=>{
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem)=>cartItem.id === cartItemToAdd.id ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            } : cartItem);
    }
    return [
        ...cartItems,
        {
            ...cartItemToAdd,
            quantity: 1
        }
    ];
};
const basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "basket",
    initialState,
    hydrate: (state, action)=>{
        // do not do state = action.payload it will not update the store
        return action.payload;
    },
    reducers: {
        addToBasket: (state, action)=>{
            state.items = addItemToCart(state.items, action.payload);
        },
        removeFromBasket: (state, action)=>{
            state.items = state.items.filter((item)=>item.id !== action.payload.id);
        },
        plusItem: (state, action)=>{
            [
                ...state.items,
                state.items[action.payload].quantity += 1
            ];
        },
        minusItem: (state, action)=>{
            [
                ...state.items,
                state.items[action.payload].quantity -= 1
            ];
        },
        deleteFromBasket: (state, action)=>{
            state.items = [];
        }
    }
});
const { addToBasket , removeFromBasket , plusItem , minusItem , deleteFromBasket  } = basketSlice.actions;
// Selectors - This is how we pull information from the Global store slice
const selectItems = (state)=>state.basket.items;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);


/***/ }),

/***/ 1657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$f": () => (/* binding */ removeFromWishlist),
/* harmony export */   "Mp": () => (/* binding */ addToWishlist),
/* harmony export */   "XH": () => (/* binding */ selectWishItems),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export wishlistSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    wishItems: []
};
const wishlistSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action)=>{
            const added = state.wishItems.find((item)=>item.id === action.payload.id);
            if (added) state.wishItems = [
                ...state.wishItems
            ];
            else state.wishItems = [
                ...state.wishItems,
                action.payload
            ];
        },
        removeFromWishlist: (state, action)=>{
            state.wishItems = state.wishItems.filter((item)=>item.id !== action.payload.id);
        }
    }
});
const { addToWishlist , removeFromWishlist  } = wishlistSlice.actions;
// Selectors - This is how we pull information from the Global store slice
const selectWishItems = (state)=>state.wishlist.wishItems;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishlistSlice.reducer);


/***/ })

};
;