"use strict";
(() => {
var exports = {};
exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 2028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const stripe = __webpack_require__(8174)(process.env.STRIPE_SECRET_KEY);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { items , email  } = req.body;
    const transformedItems = items.map((item)=>({
            description: `${item.name} - ${item.selectedSizeProp}`,
            quantity: item.quantity,
            price_data: {
                currency: "sgd",
                unit_amount: Math.round(item.price / 10000 * 100),
                product_data: {
                    name: item.name,
                    images: [
                        item.prop[0].image[0]
                    ]
                }
            }
        }));
    const session = await stripe.checkout.sessions.create({
        payment_method_types: [
            "card"
        ],
        shipping_rates: [
            "shr_1JUuWyLGtksRU8sW7GevYwRT"
        ],
        shipping_address_collection: {
            allowed_countries: [
                "SG",
                "MY"
            ]
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/basket`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item)=>item.prop[0].image[0]))
        }
    });
    res.status(200).json({
        id: session.id
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2028));
module.exports = __webpack_exports__;

})();