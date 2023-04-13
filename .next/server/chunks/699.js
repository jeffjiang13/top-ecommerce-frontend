exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9012);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);



function CardSkeleton() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "h-44 mb-2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "h-5 mb-2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "h-3 mb-2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "h-3 mb-2"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardSkeleton);


/***/ }),

/***/ 6048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/header.js + 1 modules
var header = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-loading-skeleton"
var external_react_loading_skeleton_ = __webpack_require__(9012);
var external_react_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_skeleton_);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(4508);
// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__(3559);
;// CONCATENATED MODULE: ./components/shopcarousel.js





function ShopCarousel() {
    const [loading, setLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>setLoading(false), 1000);
    }, []);
    if (loading) return /*#__PURE__*/ jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
        className: "h-24 md:h-64"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_responsive_carousel_.Carousel, {
            autoPlay: true,
            infiniteLoop: true,
            showStatus: false,
            showArrows: false,
            showThumbs: false,
            swipeable: true,
            transitionTime: 500,
            interval: 4000,
            className: "rounded-2xl overflow-hidden shop shadow-lg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: " bg-white h-24 object-cover md:h-64 w-full pointer-events-none",
                        loading: "lazy",
                        src: "https://i.ibb.co/TYNgNgp/Homepage-Banner-AF1-React-170120.jpg"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: " bg-white h-24 object-cover md:h-64 w-full",
                        loading: "lazy",
                        src: "https://i.ibb.co/kHhhbbG/adidas-banner-grpn-US.jpg"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: " bg-white h-24 object-cover md:h-64 w-full",
                        loading: "lazy",
                        src: "https://i.ibb.co/WvN6bC5/PLPBanner-Converse-1920x700.png"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const shopcarousel = (ShopCarousel);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./slices/categorySlice.js
var categorySlice = __webpack_require__(3811);
;// CONCATENATED MODULE: ./components/sidecategory.js




function SideCategory({ typesData  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const data = (0,external_react_redux_.useSelector)(categorySlice/* recentCategory */.vr);
    const [recent, setRecent] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>setRecent(data));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white rounded-3xl px-5 py-6 shadow-lg w-2/3 md:w-1/2 lg:w-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-semibold mb-3 text-lg text-cusblack",
                children: "Categories"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "leading-10 text-xs text-gray-400",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: `${recent == "" ? `font-semibold text-cusblack` : ``} cursor-pointer`,
                            onClick: ()=>dispatch((0,categorySlice/* selectCategory */.uY)("")),
                            children: "All products"
                        })
                    }),
                    typesData.map((type, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: `${recent == type.name ? `font-semibold text-cusblack` : ``} cursor-pointer`,
                                onClick: ()=>dispatch((0,categorySlice/* selectCategory */.uY)(type.name)),
                                children: type.name
                            })
                        }, type.slug))
                ]
            })
        ]
    });
}
/* harmony default export */ const sidecategory = (SideCategory);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var router = __webpack_require__(6885);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var external_next_router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/search.js




function Search() {
    const [input, setInput] = (0,external_react_.useState)("");
    const [data, setData] = (0,external_react_.useState)([]);
    const handleChange = async (e)=>{
        setInput(e.target.value);
        const res = await fetch(`${"http://localhost:1336"}/items?name_contains=${input}`);
        const data = await res.json();
        setData(data);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex relative group md:ml-auto justify-between pr-4 place-items-center flex-grow h-full rounded-3xl bg-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                onChange: handleChange,
                className: "text-xs group pl-4 rounded-3xl p-2.5 focus:outline-none w-full text-cusblack",
                type: "text",
                placeholder: "Search product"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-5 shadow-lg hidden duration-100 group-focus-within:inline group-active:inline top-11 bg-white absolute rounded-2xl w-full z-20",
                children: data.length ? data.filter((i, idx)=>idx < 4).map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>external_next_router_default().push("/product/" + item.slug),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "p-2 flex place-items-center cursor-pointer text-xs font-light text-cusblack hover:bg-gray-100 active:bg-gray-200",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: item.prop[0].image[0],
                                        className: "w-7 h-7 mr-1 rounded-lg",
                                        alt: ""
                                    })
                                }),
                                item.name
                            ]
                        }, idx)
                    })) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-xs text-cusblack font-light",
                    children: "No item found"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "w-4 h-4 text-gray-400",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                    clipRule: "evenodd"
                })
            })
        ]
    });
}
/* harmony default export */ const search = (Search);

;// CONCATENATED MODULE: ./components/topcategory.js





function TopCategory({ categories  }) {
    const { asPath  } = (0,router.useRouter)();
    (0,external_react_.useEffect)(()=>{
        setIsActive(asPath);
    }, [
        asPath
    ]);
    const [isActive, setIsActive] = (0,external_react_.useState)("/shop");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "navbot bg-cusgray z-30 w-full px-1 md:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " mx-auto md:flex place-items-center max-w-6xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "category overflow-x-auto flex flex-wrap place-items-center py-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/shop`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: `${isActive == `/shop` ? `bg-cusblack text-white shadow-lg ` : `bg-white text-cusblack`} py-2.5 px-6 rounded-3xl text-xs mr-3 mb-2 md:mb-0`,
                                children: "All items"
                            })
                        }, "all"),
                        categories.map((cat, idx)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/shop/${cat.slug}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: `${isActive == `/shop/${cat.slug}` ? `bg-cusblack text-white shadow-lg ` : `bg-white text-cusblack`} py-2.5 px-6 rounded-3xl text-xs mr-3 mb-2 md:mb-0`,
                                    children: cat.name
                                })
                            }, cat.slug))
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(search, {})
            ]
        })
    });
}
/* harmony default export */ const topcategory = (TopCategory);

;// CONCATENATED MODULE: ./components/layout.js






function Layout({ children , categories , types , setSort  }) {
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [grid, setGrid] = (0,external_react_.useState)(4);
    const [sortOpen, setSortOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full min-h-screen bg-cusgray pb-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>setOpen(!open),
                className: "w-12 h-12 rounded-full bg-white fixed z-30 drop-shadow-2xl lg:hidden flex justify-center place-items-center bottom-0 left-0 m-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "w-6 text-cusblack h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-6xl mx-auto pt-14 md:px-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(topcategory, {
                        categories: categories
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-4 gap-x-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>setOpen(!open),
                                className: `${open ? `fixed` : `hidden`} lg:static lg:inline bg-gray-400 lg:bg-cusgray h-screen bg-opacity-30 z-20 flex w-full justify-center place-items-center top-0 lg:p-4`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(sidecategory, {
                                    typesData: types
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-span-4 md:col-span-4 lg:col-span-3 flex flex-col py-4 mx-2 md:mx-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(shopcarousel, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "rounded-2xl overflow-hidden shadow-lg w-full bg-white mt-6 px-5 py-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mb-3",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex justify-between place-items-center text-gray-600 text-sm relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    onClick: ()=>setGrid(4),
                                                                    className: "p-1 relative flex justify-center items-center rounded-full hover:bg-gray-100 active:bg-gray-200 cursor-pointer duration-200",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        className: "w-5 h-5 ",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    onClick: ()=>setGrid(2),
                                                                    className: "p-1 relative flex justify-center items-center rounded-full hover:bg-gray-100 active:bg-gray-200 cursor-pointer duration-200",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        className: "w-5 h-5",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            onClick: ()=>setSortOpen(!sortOpen),
                                                            className: "flex place-items-center hover:bg-gray-100 py-1 px-2 rounded-md active:bg-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    className: "w-5 h-5 mr-1",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                                                                    })
                                                                }),
                                                                "Sort",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    className: "w-4 h-4 ml-1",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M19 9l-7 7-7-7"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `${sortOpen ? "absolute" : "hidden"} top-7 shadow-lg rounded-md text-sm right-0 bg-white text-gray-500 z-20 px-2 py-2`,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "py-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                            className: "w-full",
                                                                            onClick: ()=>{
                                                                                setSort(0);
                                                                                setSortOpen(false);
                                                                            },
                                                                            children: "Newest"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "py-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                            className: "w-full",
                                                                            onClick: ()=>{
                                                                                setSort(1);
                                                                                setSortOpen(false);
                                                                            },
                                                                            children: "Price low to high"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "py-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                            className: "w-full",
                                                                            onClick: ()=>{
                                                                                setSort(2);
                                                                                setSortOpen(false);
                                                                            },
                                                                            children: "Price high to low"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `grid grid-cols-2 md:grid-cols-${grid} lg:grid-cols-${grid} gap-x-4 gap-y-6`,
                                                children: children
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
    });
}
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 3811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "uY": () => (/* binding */ selectCategory),
/* harmony export */   "vr": () => (/* binding */ recentCategory)
/* harmony export */ });
/* unused harmony export categorySlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    item: ""
};
const categorySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "category",
    initialState,
    reducers: {
        selectCategory: (state, action)=>{
            state.item = action.payload;
        }
    }
});
const { selectCategory  } = categorySlice.actions;
const recentCategory = (state)=>state.category.item;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);


/***/ }),

/***/ 3559:
/***/ (() => {



/***/ })

};
;