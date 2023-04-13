"use strict";
(() => {
var exports = {};
exports.id = 149;
exports.ids = [149,197];
exports.modules = {

/***/ 2410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ basket)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-number-format"
var external_react_number_format_ = __webpack_require__(3554);
var external_react_number_format_default = /*#__PURE__*/__webpack_require__.n(external_react_number_format_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./slices/basketSlice.js
var basketSlice = __webpack_require__(1042);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/basketproduct.js







function BasketProduct({ item , idx  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "product md:flex justify-between mb-6",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/product/" + item.slug,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "image md:flex cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.div, {
                            initial: {
                                scale: 1.5,
                                x: 50,
                                y: -50,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                x: 0,
                                y: 0,
                                opacity: 1
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "w-full md:w-32 h-32 object-cover rounded-xl",
                                src: item.prop[0].image[0],
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "ml-3 flex flex-col text-cusblack justify-between py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-medium",
                                    children: item.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "text-xs md:text-sm leading-relaxed text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                "Color: ",
                                                item.color
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                "Design ID: ",
                                                item.category.slug
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                "Quantity: ",
                                                item.quantity
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                "Size: ",
                                                item.selectedSizeProp
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-between py-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_number_format_default()), {
                        value: item.price,
                        className: "font-semibold text-cusblack text-right",
                        displayType: "text",
                        thousandSeparator: true,
                        prefix: "Rp",
                        renderText: (value, props)=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "font-semibold text-cusblack text-right",
                                ...props,
                                children: value
                            })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex ml-auto text-cusblack mt-1 md:mt-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>{
                                    if (item.quantity > 1) dispatch((0,basketSlice/* minusItem */.uz)(idx));
                                },
                                className: "border border-cusblack active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M20 12H4"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>dispatch((0,basketSlice/* plusItem */.Xj)(idx)),
                                className: "border border-cusblack active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100 mx-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>dispatch((0,basketSlice/* removeFromBasket */.Er)(item)),
                                className: "border border-cusblack active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100 text-xs px-2 font-medium",
                                children: "REMOVE"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const basketproduct = (BasketProduct);

// EXTERNAL MODULE: ./components/header.js + 1 modules
var header = __webpack_require__(7530);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
var external_nookies_default = /*#__PURE__*/__webpack_require__.n(external_nookies_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(6885);
;// CONCATENATED MODULE: ./pages/basket.js













const stripePromise = (0,stripe_js_namespaceObject.loadStripe)(process.env.publishableKey);
function Basket() {
    const router = (0,client_router.useRouter)();
    const items = (0,external_react_redux_.useSelector)(basketSlice/* selectItems */.a1);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [cookie, setCookie] = (0,external_react_.useState)({});
    (0,external_react_.useEffect)(()=>{
        const dataCookie = external_nookies_default().get();
        try {
            setCookie(JSON.parse(dataCookie.user));
        } catch (err) {
            setCookie(dataCookie.user);
        }
        setTimeout(()=>setLoading(false), 500);
    }, []);
    const createCheckoutSession = async ()=>{
        setLoading(true);
        if (!cookie) {
            router.push("/login");
            return;
        }
        const stripe = await stripePromise;
        const checkoutSession = await external_axios_default().post("/api/checkoutsession", {
            items: items,
            email: cookie.email
        });
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });
        setLoading(false);
        if (result.error) alert(result.error.message);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "ChiqueChick | Basket"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full min-h-screen relative bg-cusgray pb-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "max-w-6xl mx-auto pt-20 px-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full grid grid-cols-1 md:grid-cols-3 gap-x-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md:col-span-2 md:mr-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "shadow-lg rounded-xl bg-cusblack text-white px-5 py-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "font-semibold text-lg md:text-xl mb-1",
                                                        children: "GET FREE SHIPPING WITH MEMBER+ ON EVERY ORDER"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-xs mb-1 text-gray-100",
                                                        children: "Non member receive free-shipping for purchases Rp 1,500,000 or more"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rounded-xl bg-white px-5 pt-5 mt-5 shadow-lg overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "Your Basket (",
                                                            items.length,
                                                            ")"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "pt-5 pb-2",
                                                        children: [
                                                            items.length > 0 && items.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(basketproduct, {
                                                                    idx: idx,
                                                                    item: item
                                                                }, item.slug)),
                                                            items.length === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "text-gray-400 text-sm mb-10 mx-auto",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "md:w-1/3 object-cover w-full",
                                                                        src: "https://i.ibb.co/hWZhd6F/empty-cart-4a7779da-Convert-Image.png",
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: "text-center",
                                                                        children: [
                                                                            "Your basket is empty,",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            "to start shopping click",
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "underline",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/shop",
                                                                                    children: "here"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-10 md:mt-0 col-span-1",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "rounded-xl bg-white shadow-lg py-6 px-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "text-cusblack font-bold text-md",
                                                children: "SUMMARY"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "px-4 py-3 text-xs font-medium flex place-items-center text-gray-400 border border-gray-200 rounded-md my-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        className: "w-5 h-5 mr-3",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                                                        })
                                                    }),
                                                    "DO YOU HAVE PROMO CODE?"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "text-sm pt-1 font-semibold pb-2 border-b border-cusblack flex justify-between place-items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "",
                                                        children: "SUBTOTAL"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_number_format_default()), {
                                                        value: items.reduce((val, item)=>val + item.price * item.quantity, 0),
                                                        displayType: "text",
                                                        thousandSeparator: true,
                                                        prefix: "Rp",
                                                        renderText: (value, props)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                ...props,
                                                                children: value
                                                            })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "my-3 border-b border-cusblack pb-2",
                                                children: [
                                                    items.map((item, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex justify-between place-items-center text-sm mb-1",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "pr-3",
                                                                    children: item.name
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_number_format_default()), {
                                                                    value: item.price * item.quantity,
                                                                    displayType: "text",
                                                                    thousandSeparator: true,
                                                                    prefix: "Rp",
                                                                    renderText: (value, props)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            ...props,
                                                                            children: value
                                                                        })
                                                                })
                                                            ]
                                                        }, idx)),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-between place-items-center text-sm mb-1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "TAX"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "FREE"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-between place-items-center font-semibold",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "TOTAL"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_number_format_default()), {
                                                        value: items.reduce((val, item)=>val + item.price * item.quantity, 0),
                                                        displayType: "text",
                                                        thousandSeparator: true,
                                                        prefix: "Rp",
                                                        renderText: (value, props)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                ...props,
                                                                children: value
                                                            })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                disabled: !items.length,
                                                onClick: createCheckoutSession,
                                                className: "py-2 px-3 disabled:cursor-not-allowed text-white w-full mt-6 rounded-lg bg-cusblack ",
                                                children: !loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "flex justify-center place-items-center",
                                                    children: [
                                                        "CHECKOUT",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            className: "ml-2 w-4 h-4 text-white",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                            })
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "w-6 h-6 mx-auto",
                                                    src: "https://i.ibb.co/pL1TJSg/Rolling-1s-200px-2.gif",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const basket = (Basket);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1668:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll.js");

/***/ }),

/***/ 3773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/interpolate-as.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 4639:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/omit.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,170,676,959,393,530], () => (__webpack_exec__(2410)));
module.exports = __webpack_exports__;

})();