(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{5511:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return s(4134)}])},4134:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return d}});var r=s(5893),a=s(7294),n=s(1664),l=s.n(n),i=s(7751),c=s(9008),o=s.n(c),d=!0;t.default=function(){let[e,t]=(0,a.useState)({}),[s,n]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!1),m=s=>{t({...e,[s.target.name]:s.target.value}),console.log(e)},u=async s=>{s.preventDefault(),n(!0);let r=await fetch("http://localhost:1336/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await r.json();console.log(a),a.jwt&&(d(!0),t({}),s.target.reset()),n(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"ChiqueChick | Register"})}),(0,r.jsxs)(i.E.div,{initial:{opacity:0},animate:{opacity:1},className:"w-full min-h-screen relative bg-cusgray pb-10 flex justify-center place-items-center",children:[s&&(0,r.jsx)("div",{className:"w-full h-screen flex justify-center place-items-center absolute top-0 right-0 bg-white backdrop-blur-sm bg-opacity-20",children:(0,r.jsx)("img",{src:"https://i.ibb.co/8jP3GyP/Dual-Ball-1-1s-200px.gif",className:"w-20",alt:""})}),(0,r.jsxs)("form",{onSubmit:u,className:"p-5 max-w-md mx-2 bg-white flex flex-col place-items-center shadow-lg rounded-xl",children:[(0,r.jsx)("h1",{className:"text-center text-xl font-bold text-cusblack leading-6 my-5",children:"BECOME A MEMBER"}),(0,r.jsx)("p",{className:"text-sm font-medium text-gray-400 mb-4 text-center px-6",children:"Create your Shop Member profile and get first access to the very best of products, inspiration and community."}),c&&(0,r.jsx)("div",{className:"text-xs text-center mb-2 font-light text-green-500",children:"Your account has been registered as a member"}),(0,r.jsx)("input",{onChange:m,required:!0,type:"text",placeholder:"Username",name:"username",className:"my-2 border rounded-sm border-gray-300 w-full px-4 py-3 text-sm"}),(0,r.jsx)("input",{onChange:m,required:!0,type:"text",placeholder:"Email address",name:"email",className:"my-2 border rounded-sm border-gray-300 w-full px-4 py-3 text-sm"}),(0,r.jsx)("input",{onChange:m,required:!0,type:"password",placeholder:"Password",name:"password",className:"my-2 border rounded-sm border-gray-300 w-full px-4 py-3 text-sm"}),(0,r.jsxs)("p",{className:"text-xs text-gray-400 my-2 text-center px-6",children:["By register, you agree to shop's"," ",(0,r.jsx)("span",{className:"underline",children:"Privacy Policy"})," and"," ",(0,r.jsx)("span",{className:"underline",children:"Terms of Use"}),"."]}),(0,r.jsx)("button",{type:"submit",className:"bg-cusblack rounded-sm w-full text-white py-2 mt-3",children:"JOIN US"}),(0,r.jsxs)("div",{className:"text-xs text-gray-400 mt-5",children:["Already have?"," ",(0,r.jsx)(l(),{href:"/login",children:(0,r.jsx)("a",{className:"underline",children:"Sign In"})})]})]})]})]})}}},function(e){e.O(0,[242,774,888,179],function(){return e(e.s=5511)}),_N_E=e.O()}]);