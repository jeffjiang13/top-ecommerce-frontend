"use strict";
(() => {
var exports = {};
exports.id = 984;
exports.ids = [984,197];
exports.modules = {

/***/ 7988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ orders),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
var external_nookies_default = /*#__PURE__*/__webpack_require__.n(external_nookies_);
;// CONCATENATED MODULE: external "firebase"
const external_firebase_namespaceObject = require("firebase");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_namespaceObject);
;// CONCATENATED MODULE: ./firebase/firebase.js

const firebaseConfig = {
    apiKey: "AIzaSyDaDtUw817eZrgiBbxlHe4MsQzi2WhVqnM",
    authDomain: "chiquechick-165de.firebaseapp.com",
    projectId: "chiquechick-165de",
    storageBucket: "chiquechick-165de.appspot.com",
    messagingSenderId: "846011570259",
    appId: "1:846011570259:web:2598e112bb3cc9fb400ea6",
    measurementId: "G-KZWHV36ECT"
};
const app = !(external_firebase_default()).apps.length ? external_firebase_default().initializeApp(firebaseConfig) : external_firebase_default().app();
const db = app.firestore();
/* harmony default export */ const firebase = (db);

;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/header.js + 1 modules
var header = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-number-format"
var external_react_number_format_ = __webpack_require__(3554);
var external_react_number_format_default = /*#__PURE__*/__webpack_require__.n(external_react_number_format_);
;// CONCATENATED MODULE: ./components/cardprofile.js



function CardProfile({ session , orders  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-2xl p-5 bg-white shadow-lg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col place-items-center pb-3 border-b border-gray-300",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-14 h-14 rounded-full bg-cusblack mb-2"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-1",
                                children: session.username
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xs text-gray-400 mb-1",
                                children: "Verified Account"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: session.email
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-3 flex flex-col place-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex place-items-center mb-2 font-semibold",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "w-4 h-4 text-cusblack mr-1",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xs text-cusblack",
                                children: "Member+"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center text-xs mb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-cusblack mb-1",
                                children: "Payment succeeded :"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-400",
                                children: [
                                    orders.length,
                                    " times"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center text-xs",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-cusblack mb-1",
                                children: "Money Spent :"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_number_format_default()), {
                                value: orders.reduce((val, order)=>val + order.items.reduce((v, i)=>v + i.amount_subtotal * 100, 0), 0),
                                className: "text-gray-400 text-xs",
                                displayType: "text",
                                thousandSeparator: true,
                                prefix: "Rp",
                                renderText: (value, props)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-400 text-xs",
                                        ...props,
                                        children: value
                                    })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const cardprofile = (CardProfile);

;// CONCATENATED MODULE: ./components/ordercard.js




function OrderCard({ order  }) {
    console.log(order);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "py-2 px-4 rounded-lg shadow-lg mb-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex place-items-center text-xs text-cusblack py-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "w-5 h-5 text-cusblack",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mx-2 font-semibold",
                        children: "Shop"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: external_moment_default().unix(order.timestamp).format("DD MMM YYYY")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-0.5 px-2 bg-cusblack text-white mx-3 flex text-[8px] place-items-center rounded-lg",
                        children: "processed"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col my-1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "md:flex mt-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "md:w-3/4 border-b md:border-b-0 md:border-r border-gray-300",
                            children: order.items.map((it, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "w-16 h-16 rounded-lg object-cover",
                                            src: order.images[idx],
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mx-3 text-xs text-cusblack",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-sm font-semibold",
                                                    children: it.description
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "text-cusblack mr-1",
                                                            children: [
                                                                it.quantity,
                                                                " x "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_number_format_default()), {
                                                            value: it.amount_subtotal / it.quantity * 100,
                                                            className: "text-gray-400 text-xs",
                                                            displayType: "text",
                                                            thousandSeparator: true,
                                                            prefix: "Rp",
                                                            renderText: (value, props)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-gray-400 text-xs",
                                                                    ...props,
                                                                    children: value
                                                                })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, idx))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "md:w-1/4 mt-2 md:mt-0 text-xs text-cusblack flex md:flex-col justify-center place-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-gray-400 md:mb-1",
                                    children: "Total Amount :"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_number_format_default()), {
                                    value: order.items.reduce((val, item)=>val + item.amount_subtotal * 100, 0),
                                    className: "font-semibold",
                                    displayType: "text",
                                    thousandSeparator: true,
                                    prefix: "Rp",
                                    renderText: (value, props)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-gray-400 text-xs",
                                            ...props,
                                            children: value
                                        })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const ordercard = (OrderCard);

;// CONCATENATED MODULE: ./pages/orders.js









async function getServerSideProps(ctx) {
    const stripe = __webpack_require__(8174)(process.env.STRIPE_SECRET_KEY);
    const cookie = external_nookies_default().get(ctx, "user").user;
    let session = null;
    if (cookie) {
        session = JSON.parse(cookie);
    }
    if (!cookie) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        };
    }
    const stripeOrders = await firebase.collection("users").doc(session.email).collection("orders").orderBy("timestamp", "desc").get();
    const orders = await Promise.all(stripeOrders.docs.map(async (order)=>({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: external_moment_default()(order.data().timestamp.toDate()).unix(),
            items: (await stripe.checkout.sessions.listLineItems(order.id, {
                limit: 100
            })).data
        })));
    return {
        props: {
            orders,
            session
        }
    };
}
function Order({ orders , session  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "ChiqueChick | Orders"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full min-h-screen relative bg-cusgray pb-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "max-w-6xl mx-auto pt-20 px-5 grid grid-cols-1 md:grid-cols-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-span-1 mb-7",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(cardprofile, {
                                    session: session,
                                    orders: orders
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-span-3 md:ml-10 rounded-2xl px-8 py-6 bg-white shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "mb-4",
                                        children: [
                                            "Your Orders (",
                                            orders.length,
                                            ")"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container",
                                        children: orders === null || orders === void 0 ? void 0 : orders.map((order, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(ordercard, {
                                                order: order
                                            }, idx))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const orders = (Order);


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

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,170,676,959,393,530], () => (__webpack_exec__(7988)));
module.exports = __webpack_exports__;

})();