(window["webpackJsonpreact-ecommerce"]=window["webpackJsonpreact-ecommerce"]||[]).push([[6],{129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n(2),i=n.n(o),l=n(38);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=n(22),p=n(13),m=n(46),f=(n(129),function(e){var t=e.handleChange,n=e.label,a=Object(m.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),b=n(47);n(130);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g=Object(s.b)(null,(function(e){return{googleSignInStart:function(){return e(Object(p.c)())},emailSignInStart:function(t,n){return e(Object(p.b)({email:t,password:n}))}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,o=u(Object(a.useState)({email:"",password:""}),2),s=o[0],p=o[1],m=s.email,g=s.password,y=function(){var e=Object(l.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(m,g);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=e.target,n=t.value,a=t.name;p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s,Object(c.a)({},a,n)))};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:y},r.a.createElement(f,{name:"email",type:"email",label:"email",value:m,handleChange:w,required:!0}),r.a.createElement(f,{name:"password",type:"password",label:"password",value:g,handleChange:w,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(b.a,{type:"submit"},"Sign In"),r.a.createElement(b.a,{type:"button",onClick:n,isGoogleSignIn:!0},"Google SignIn"))))}));n(131);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var w=Object(s.b)(null,(function(e){return{signUpStart:function(t){return e(Object(p.j)(t))}}}))((function(e){var t=e.signUpStart,n=u(Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),2),o=n[0],s=n[1],p=o.displayName,m=o.email,d=o.password,g=o.confirmPassword,w=function(){var e=Object(l.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),d===g){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:t({displayName:p,email:m,password:d});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.target,n=t.name,a=t.value;s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,Object(c.a)({},n,a)))};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:w},r.a.createElement(f,{type:"text",name:"displayName",value:p,onChange:O,label:"Display Name",required:!0}),r.a.createElement(f,{type:"email",name:"email",value:m,onChange:O,label:"Email",required:!0}),r.a.createElement(f,{type:"password",name:"password",value:d,onChange:O,label:"Password",required:!0}),r.a.createElement(f,{type:"password",name:"confirmPassword",value:g,onChange:O,label:"Confirm Password",required:!0}),r.a.createElement(b.a,{type:"submit"},"Sign Up")))}));n(132),t.default=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(g,null),r.a.createElement(w,null))}}}]);
//# sourceMappingURL=6.0b507608.chunk.js.map