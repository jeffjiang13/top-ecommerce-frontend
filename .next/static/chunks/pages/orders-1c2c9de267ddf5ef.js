(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[660],{9501:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders",function(){return t(823)}])},7530:function(e,s,t){"use strict";t.d(s,{Z:function(){return p}});var l=t(5893),r=t(1664),a=t.n(r),n=t(7294),c=t(1043),i=t(1042),o=t(1657),d=t(7751),x=function(e){let{handleOpen:s,isOpen:t}=e;return t?(0,l.jsx)(d.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"".concat(t?"flex":"hidden"," w-full h-screen absolute top-0 bg-gray-700 bg-opacity-30"),children:(0,l.jsxs)("div",{className:"text-center relative leading-loose flex place-items-center text-md text-cusblack w-52 h-screen bg-white",children:[(0,l.jsx)("button",{onClick:s,className:" absolute top-0 right-0 m-5",children:(0,l.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),(0,l.jsxs)("ul",{className:"w-full",children:[(0,l.jsx)(a(),{href:"/",children:(0,l.jsx)("li",{className:"mb-2 hover:underline mx-4 rounded-xl cursor-pointer",children:"Home"})}),(0,l.jsx)(a(),{href:"/shop",children:(0,l.jsx)("li",{className:"mb-2 hover:underline mx-4 rounded-xl cursor-pointer",children:"Shop"})}),(0,l.jsx)(a(),{href:"/ourstore",children:(0,l.jsx)("li",{className:"mb-2 hover:underline mx-4 rounded-xl cursor-pointer",children:"About"})}),(0,l.jsx)(a(),{href:"/ourstore",children:(0,l.jsx)("li",{className:"mb-2 hover:underline mx-4 rounded-xl cursor-pointer",children:"Our Store"})})]})]})}):(0,l.jsx)("div",{})},h=t(2286),m=t.n(h),u=t(6885),p=function(){let e=(0,u.useRouter)(),s=(0,c.v9)(i.a1),[t,r]=(0,n.useState)([]),d=(0,c.v9)(o.XH),[p,j]=(0,n.useState)([]),[v,g]=(0,n.useState)(!1),[w,b]=(0,n.useState)({});(0,n.useEffect)(()=>{let e=m().get();try{r(s),j(d),b(JSON.parse(e.user))}catch(s){b(e.user)}},[s,d]);let[f,N]=(0,n.useState)(!1),k=()=>{N(!f)},y=()=>{(0,h.destroyCookie)(null,"token"),(0,h.destroyCookie)(null,"user"),e.replace("/login")};return(0,l.jsxs)("nav",{className:"w-full mx-auto fixed bg-cusgray z-30 py-2 md:px-0 duration-200",children:[(0,l.jsxs)("div",{className:"px-2 navtop relative max-w-6xl mx-auto flex justify-between place-items-center py-1.5",children:[(0,l.jsxs)("div",{className:"burger flex items-center",children:[(0,l.jsx)("button",{onClick:k,children:(0,l.jsx)("svg",{className:"w-7 h-7 text-cusblack",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,l.jsx)("h3",{className:"hidden md:inline text-md mr-2 font-semibold ml-3 text-cusblack",children:"ChiqueChick"})]}),(0,l.jsxs)("div",{className:"profile flex items-center place-items-center",children:[(0,l.jsx)(a(),{href:"/shop",children:(0,l.jsx)("div",{className:"w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",children:(0,l.jsx)("svg",{className:"w-6 h-6 text-cusblack m-auto",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})})}),(0,l.jsxs)("div",{onClick:()=>e.push("/basket"),className:"w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",children:[(0,l.jsx)("svg",{className:"w-6 h-6 text-cusblack m-auto",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})}),t.length>0?(0,l.jsx)("div",{className:"flex\n                } absolute text-xs font-light justify-center text-white text-center w-4 h-4 bg-cusblack rounded-full bottom-0 right-0",children:t.reduce((e,s)=>e+s.quantity,0)}):""]}),(0,l.jsx)(a(),{href:"/wishlist",children:(0,l.jsxs)("div",{className:"w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",children:[(0,l.jsx)("svg",{className:"w-6 m-auto h-6 text-cusblack",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),p.length>0?(0,l.jsx)("div",{className:"flex\n                absolute text-xs font-light justify-center text-white text-center w-4 h-4 bg-cusblack rounded-full bottom-0 right-0",children:p.length}):""]})}),w&&(0,l.jsx)("div",{onClick:()=>e.push("/orders"),className:"w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",children:(0,l.jsx)("svg",{className:"w-6 m-auto h-6 text-cusblack",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})})}),(0,l.jsxs)("button",{onClick:()=>g(!v),className:"w-8 relative flex items-center h-8 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",children:[(0,l.jsx)("svg",{className:"w-6 m-auto h-6 text-cusblack",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),v&&(0,l.jsxs)("div",{className:"p-3 bg-white absolute top-11 leading-relaxed right-0 rounded-lg shadow-lg text-xs text-cusblack",children:[w&&(0,l.jsx)("div",{className:"bg-cusblack text-white p-3 rounded-lg",children:(0,l.jsxs)("ul",{className:"text-left w-28",children:[(0,l.jsx)("li",{className:"line-clamp-1",children:w.username}),(0,l.jsx)("li",{className:"line-clamp-1",children:w.email})]})}),w&&(0,l.jsxs)("div",{onClick:y,className:"hover:underline mt-2 flex place-items-center justify-end",children:[(0,l.jsx)("span",{children:(0,l.jsx)("svg",{className:"w-6 h-6 text-cusblack",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),"Sign out"]}),!w&&(0,l.jsx)(a(),{href:"/login",children:(0,l.jsxs)("div",{className:"hover:underline flex place-items-center",children:[(0,l.jsx)("span",{children:(0,l.jsx)("svg",{className:"w-6 h-6 text-cusblack",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})})})," ","Sign In"]})})]})]})]})]}),(0,l.jsx)(x,{handleOpen:k,isOpen:f})]})}},823:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return h},default:function(){return m}});var l=t(5893);t(7294);var r=t(9008),a=t.n(r),n=t(7530),c=t(7333),i=function(e){let{session:s,orders:t}=e;return(0,l.jsxs)("div",{className:"rounded-2xl p-5 bg-white shadow-lg",children:[(0,l.jsxs)("div",{className:"flex flex-col place-items-center pb-3 border-b border-gray-300",children:[(0,l.jsx)("div",{className:"w-14 h-14 rounded-full bg-cusblack mb-2"}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"mb-1",children:s.username}),(0,l.jsx)("p",{className:"text-xs text-gray-400 mb-1",children:"Verified Account"}),(0,l.jsx)("p",{className:"text-xs text-gray-400",children:s.email})]})]}),(0,l.jsxs)("div",{className:"py-3 flex flex-col place-items-center",children:[(0,l.jsxs)("div",{className:"flex place-items-center mb-2 font-semibold",children:[(0,l.jsx)("svg",{className:"w-4 h-4 text-cusblack mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"})}),(0,l.jsx)("p",{className:"text-xs text-cusblack",children:"Member+"})]}),(0,l.jsxs)("div",{className:"text-center text-xs mb-2",children:[(0,l.jsx)("p",{className:"text-cusblack mb-1",children:"Payment succeeded :"}),(0,l.jsxs)("p",{className:"text-gray-400",children:[t.length," times"]})]}),(0,l.jsxs)("div",{className:"text-center text-xs",children:[(0,l.jsx)("p",{className:"text-cusblack mb-1",children:"Money Spent :"}),(0,l.jsx)(c.Z,{value:t.reduce((e,s)=>e+s.items.reduce((e,s)=>e+100*s.amount_subtotal,0),0),className:"text-gray-400 text-xs",displayType:"text",thousandSeparator:!0,prefix:"Rp",renderText:(e,s)=>(0,l.jsx)("p",{className:"text-gray-400 text-xs",...s,children:e})})]})]})]})},o=t(381),d=t.n(o),x=function(e){let{order:s}=e;return console.log(s),(0,l.jsxs)("div",{className:"py-2 px-4 rounded-lg shadow-lg mb-2",children:[(0,l.jsxs)("div",{className:"flex place-items-center text-xs text-cusblack py-1",children:[(0,l.jsx)("svg",{className:"w-5 h-5 text-cusblack",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",clipRule:"evenodd"})}),(0,l.jsx)("p",{className:"mx-2 font-semibold",children:"Shop"}),(0,l.jsx)("p",{children:d().unix(s.timestamp).format("DD MMM YYYY")}),(0,l.jsx)("div",{className:"py-0.5 px-2 bg-cusblack text-white mx-3 flex text-[8px] place-items-center rounded-lg",children:"processed"})]}),(0,l.jsx)("div",{className:"flex flex-col my-1",children:(0,l.jsxs)("div",{className:"md:flex mt-2",children:[(0,l.jsx)("div",{className:"md:w-3/4 border-b md:border-b-0 md:border-r border-gray-300",children:s.items.map((e,t)=>(0,l.jsxs)("div",{className:"flex mb-2",children:[(0,l.jsx)("img",{className:"w-16 h-16 rounded-lg object-cover",src:s.images[t],alt:""}),(0,l.jsxs)("div",{className:"mx-3 text-xs text-cusblack",children:[(0,l.jsx)("p",{className:"text-sm font-semibold",children:e.description}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsxs)("p",{className:"text-cusblack mr-1",children:[e.quantity," x "]}),(0,l.jsx)(c.Z,{value:e.amount_subtotal/e.quantity*100,className:"text-gray-400 text-xs",displayType:"text",thousandSeparator:!0,prefix:"Rp",renderText:(e,s)=>(0,l.jsx)("p",{className:"text-gray-400 text-xs",...s,children:e})})]})]})]},t))}),(0,l.jsxs)("div",{className:"md:w-1/4 mt-2 md:mt-0 text-xs text-cusblack flex md:flex-col justify-center place-items-center",children:[(0,l.jsx)("p",{className:"text-gray-400 md:mb-1",children:"Total Amount :"}),(0,l.jsx)(c.Z,{value:s.items.reduce((e,s)=>e+100*s.amount_subtotal,0),className:"font-semibold",displayType:"text",thousandSeparator:!0,prefix:"Rp",renderText:(e,s)=>(0,l.jsx)("p",{className:"text-gray-400 text-xs",...s,children:e})})]})]})})]})},h=!0,m=function(e){let{orders:s,session:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a(),{children:(0,l.jsx)("title",{children:"ChiqueChick | Orders"})}),(0,l.jsxs)("div",{className:"w-full min-h-screen relative bg-cusgray pb-10",children:[(0,l.jsx)(n.Z,{}),(0,l.jsxs)("div",{className:"max-w-6xl mx-auto pt-20 px-5 grid grid-cols-1 md:grid-cols-4",children:[(0,l.jsx)("div",{className:"col-span-1 mb-7",children:(0,l.jsx)(i,{session:t,orders:s})}),(0,l.jsxs)("div",{className:"col-span-3 md:ml-10 rounded-2xl px-8 py-6 bg-white shadow-lg",children:[(0,l.jsxs)("h1",{className:"mb-4",children:["Your Orders (",s.length,")"]}),(0,l.jsx)("div",{className:"container",children:null==s?void 0:s.map((e,s)=>(0,l.jsx)(x,{order:e},s))})]})]})]})]})}}},function(e){e.O(0,[885,242,482,774,888,179],function(){return e(e.s=9501)}),_N_E=e.O()}]);