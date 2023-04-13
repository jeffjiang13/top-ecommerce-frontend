"use strict";
exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 7530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./slices/basketSlice.js
var basketSlice = __webpack_require__(1042);
// EXTERNAL MODULE: ./slices/wishlistSlice.js
var wishlistSlice = __webpack_require__(1657);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/menunav.js




function MenuNav({ handleOpen , isOpen  }) {
    if (!isOpen) return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    return /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.2
        },
        className: `${!isOpen ? `hidden` : `flex`} w-full h-screen absolute top-0 bg-gray-700 bg-opacity-30`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "text-center relative leading-loose flex place-items-center text-md text-cusblack w-52 h-screen bg-white",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: handleOpen,
                    className: " absolute top-0 right-0 m-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mb-2 hover:underline mx-4 rounded-xl cursor-pointer",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/shop",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mb-2 hover:underline mx-4 rounded-xl cursor-pointer",
                                children: "Shop"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/ourstore",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mb-2 hover:underline mx-4 rounded-xl cursor-pointer",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/ourstore",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mb-2 hover:underline mx-4 rounded-xl cursor-pointer",
                                children: "Our Store"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const menunav = (MenuNav);

// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
var external_nookies_default = /*#__PURE__*/__webpack_require__.n(external_nookies_);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(6885);
;// CONCATENATED MODULE: ./components/header.js










function Header() {
    const router = (0,client_router.useRouter)();
    const data = (0,external_react_redux_.useSelector)(basketSlice/* selectItems */.a1);
    const [items, setItems] = (0,external_react_.useState)([]);
    const dataWish = (0,external_react_redux_.useSelector)(wishlistSlice/* selectWishItems */.XH);
    const [wish, setWish] = (0,external_react_.useState)([]);
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [cookie, setCookie] = (0,external_react_.useState)({});
    (0,external_react_.useEffect)(()=>{
        const dataCookie = external_nookies_default().get();
        try {
            setItems(data);
            setWish(dataWish);
            setCookie(JSON.parse(dataCookie.user));
        } catch (err) {
            setCookie(dataCookie.user);
        }
    }, [
        data,
        dataWish
    ]);
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const handleOpen = ()=>{
        setIsOpen(!isOpen);
    };
    const signOut = ()=>{
        (0,external_nookies_.destroyCookie)(null, "token");
        (0,external_nookies_.destroyCookie)(null, "user");
        router.replace("/login");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "w-full mx-auto fixed bg-cusgray z-30 py-2 md:px-0 duration-200",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-2 navtop relative max-w-6xl mx-auto flex justify-between place-items-center py-1.5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "burger flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: handleOpen,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-7 h-7 text-cusblack",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
                                        clipRule: "evenodd"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "hidden md:inline text-md mr-2 font-semibold ml-3 text-cusblack",
                                children: "ChiqueChick"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "profile flex items-center place-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/shop",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "w-6 h-6 text-cusblack m-auto",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                onClick: ()=>router.push("/basket"),
                                className: "w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "w-6 h-6 text-cusblack m-auto",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        })
                                    }),
                                    items.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `flex
                } absolute text-xs font-light justify-center text-white text-center w-4 h-4 bg-cusblack rounded-full bottom-0 right-0`,
                                        children: items.reduce((a, item)=>a + item.quantity, 0)
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/wishlist",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "w-6 m-auto h-6 text-cusblack",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            })
                                        }),
                                        wish.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `flex
                absolute text-xs font-light justify-center text-white text-center w-4 h-4 bg-cusblack rounded-full bottom-0 right-0`,
                                            children: wish.length
                                        }) : ""
                                    ]
                                })
                            }),
                            cookie && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>router.push("/orders"),
                                className: "w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-6 m-auto h-6 text-cusblack",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: ()=>setOpen(!open),
                                className: "w-8 relative flex items-center h-8 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "w-6 m-auto h-6 text-cusblack",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        })
                                    }),
                                    open && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-3 bg-white absolute top-11 leading-relaxed right-0 rounded-lg shadow-lg text-xs text-cusblack",
                                        children: [
                                            cookie && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "bg-cusblack text-white p-3 rounded-lg",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "text-left w-28",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "line-clamp-1",
                                                            children: cookie.username
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "line-clamp-1",
                                                            children: cookie.email
                                                        })
                                                    ]
                                                })
                                            }),
                                            cookie && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                onClick: signOut,
                                                className: "hover:underline mt-2 flex place-items-center justify-end",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            className: "w-6 h-6 text-cusblack",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                            })
                                                        })
                                                    }),
                                                    "Sign out"
                                                ]
                                            }),
                                            !cookie && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/login",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "hover:underline flex place-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                className: "w-6 h-6 text-cusblack",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                                                })
                                                            })
                                                        }),
                                                        " ",
                                                        "Sign In"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(menunav, {
                handleOpen: handleOpen,
                isOpen: isOpen
            })
        ]
    });
}
/* harmony default export */ const header = (Header);


/***/ })

};
;