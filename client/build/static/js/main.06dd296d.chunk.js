(window["webpackJsonpreact-ecommerce"]=window["webpackJsonpreact-ecommerce"]||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"i",(function(){return b}));var r=n(8),a=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},c=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},o=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},i=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},u=function(){return{type:r.a.CHECK_USER_SESSION}},s=function(){return{type:r.a.SIGN_OUT_START}},l=function(){return{type:r.a.SIGN_OUT_SUCCESS}},p=function(e){return{type:r.a.SIGN_OUT_FAILURE,payload:e}},f=function(e){return{type:r.a.SIGN_UP_START,payload:e}},d=function(e){var t=e.user,n=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},b=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return O})),n.d(t,"f",(function(){return m}));var r=n(2),a=n.n(r),c=n(18),o=n(38),i=n(32),u=n.n(i);n(81),n(84);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,c,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=O.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,o=t.email,i=new Date,e.prev=9,e.next=12,r.set(l({displayName:c,email:o,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}();u.a.initializeApp({apiKey:"AIzaSyDVcT_xuLP5JFCOtKq7sRWirXKPMI9FN2o",authDomain:"react-ecommerce-backend.firebaseapp.com",databaseURL:"https://react-ecommerce-backend.firebaseio.com",projectId:"react-ecommerce-backend",storageBucket:"",messagingSenderId:"426770689394",appId:"1:426770689394:web:4b41cf1ea3c43265eac1eb"});var f=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},d=function(){return new Promise((function(e,t){var n=b.onAuthStateChanged((function(t){n(),e(t)}),t)}))},b=u.a.auth(),O=u.a.firestore(),m=new u.a.auth.GoogleAuthProvider;m.setCustomParameters({prompt:"select_account"});u.a},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"}},23:function(e,t,n){"use strict";t.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},29:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(19),a=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},c=function(e){return{type:r.a.ADD_ITEM,payload:e}},o=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},i=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}},u=function(){return{type:r.a.CLEAR_CART}}},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u}));var r=n(11),a=function(e){return e.cart},c=Object(r.a)([a],(function(e){return e.cartItems})),o=Object(r.a)([a],(function(e){return e.hidden})),i=Object(r.a)([c],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),u=Object(r.a)([c],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}))},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(23),a=(n(14),function(){return{type:r.a.FETCH_COLLECTIONS_START}}),c=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},o=function(e){return{type:r.a.FETCH_COLLECTIONS_FAILURE,payload:e}}},47:function(e,t,n){"use strict";var r=n(46),a=n(0),c=n.n(a),o=n(9),i=n(10);function u(){var e=Object(o.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n\n   ","\n"]);return u=function(){return e},e}function s(){var e=Object(o.a)(["\n    background-color: #4285f4;\n    color: white;\n    border: none;\n\n    &:hover {\n    background-color: #357ae8;\n    }\n"]);return s=function(){return e},e}function l(){var e=Object(o.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n      background-color: black;\n      color: white;\n      border: none;\n    }\n"]);return l=function(){return e},e}function p(){var e=Object(o.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n      }\n"]);return p=function(){return e},e}var f=Object(i.b)(p()),d=Object(i.b)(l()),b=Object(i.b)(s()),O=i.c.button(u(),(function(e){return e.isGoogleSignIn?b:e.inverted?d:f}));t.a=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return c.a.createElement(O,n,t)}},48:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(9),o=n(10);function i(){var e=Object(c.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return i=function(){return e},e}function u(){var e=Object(c.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return u=function(){return e},e}var s=o.c.div(u()),l=o.c.div(i());t.a=function(){return a.a.createElement(s,null,a.a.createElement(l,null))}},68:function(e,t,n){e.exports=n(91)},8:function(e,t,n){"use strict";t.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"}},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(34),o=n.n(c),i=n(26),u=n(22),s=n(58),l=n(15),p=n(36),f=(n(77),n(59)),d=n.n(f),b=n(18),O=n(8);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={currentUser:null,error:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a.SIGN_IN_SUCCESS:return h({},e,{currentUser:t.payload,error:null});case O.a.SIGN_OUT_SUCCESS:return h({},e,{currentUser:null,error:null});case O.a.SIGN_IN_FAILURE:case O.a.SIGN_OUT_FAILURE:case O.a.SIGN_UP_FAILURE:return h({},e,{error:t.payload});default:return e}},g=n(19),y=n(64);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?S({},e,{quantity:e.quantity+1}):e})):[].concat(Object(y.a)(e),[S({},t,{quantity:1})])},_=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?S({},e,{quantity:e.quantity-1}):e}))};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={hidden:!0,cartItems:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.a.TOGGLE_CART_HIDDEN:return I({},e,{hidden:!e.hidden});case g.a.ADD_ITEM:return I({},e,{cartItems:w(e.cartItems,t.payload)});case g.a.REMOVE_ITEM:return I({},e,{cartItems:_(e.cartItems,t.payload)});case g.a.CLEAR_ITEM_FROM_CART:return I({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case g.a.CLEAR_CART:return I({},e,{cartItems:[]});default:return e}},k={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U=n(23);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={collections:null,isFetching:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.a.FETCH_COLLECTIONS_START:return A({},e,{isFetching:!0,errorMessage:void 0});case U.a.FETCH_COLLECTIONS_SUCCESS:return A({},e,{isFetching:!1,collections:t.payload});case U.a.FETCH_COLLECTIONS_FAILURE:return A({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},G={key:"root",storage:d.a,whitelist:["cart"]},D=Object(l.c)({user:v,cart:T,directory:N,shop:L}),F=Object(p.a)(G,D),M=n(63),H=n(2),z=n.n(H),W=n(4),q=n(14),V=n(40),B=z.a.mark(Q),K=z.a.mark($),J=z.a.mark(X);function Q(){var e,t,n;return z.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=q.d.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(W.b)(q.b,t);case 7:return n=r.sent,r.next=10,Object(W.c)(Object(V.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(W.c)(Object(V.a)(r.t0.message));case 16:case"end":return r.stop()}}),B,null,[[0,12]])}function $(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(U.a.FETCH_COLLECTIONS_START,Q);case 2:case"end":return e.stop()}}),K)}function X(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)([Object(W.b)($)]);case 2:case"end":return e.stop()}}),J)}var Y=n(13),Z=z.a.mark(be),ee=z.a.mark(Oe),te=z.a.mark(me),ne=z.a.mark(he),re=z.a.mark(Ee),ae=z.a.mark(ve),ce=z.a.mark(ge),oe=z.a.mark(ye),ie=z.a.mark(je),ue=z.a.mark(Se),se=z.a.mark(we),le=z.a.mark(_e),pe=z.a.mark(xe);function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function be(e,t){var n,r;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(W.b)(q.c,e,t);case 3:return n=a.sent,a.next=6,n.get();case 6:return r=a.sent,a.next=9,Object(W.c)(Object(Y.e)(de({id:r.id},r.data)));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(W.c)(Object(Y.d)(a.t0));case 15:case"end":return a.stop()}}),Z,null,[[0,11]])}function Oe(){var e,t;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q.a.signInWithPopup(q.f);case 3:return e=n.sent,t=e.user,n.next=7,be(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(W.c)(Object(Y.d)(n.t0));case 13:case"end":return n.stop()}}),ee,null,[[0,9]])}function me(e){var t,n,r,a,c;return z.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,r=t.password,o.prev=1,o.next=4,q.a.signInWithEmailAndPassword(n,r);case 4:return a=o.sent,c=a.user,o.next=8,be(c);case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(W.c)(Object(Y.d)(o.t0));case 14:case"end":return o.stop()}}),te,null,[[1,10]])}function he(){var e;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(q.e)();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,be(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(W.c)(Object(Y.d)(t.t0));case 14:case"end":return t.stop()}}),ne,null,[[0,10]])}function Ee(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.signOut();case 3:return e.next=5,Object(W.c)(Object(Y.h)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(W.c)(Object(Y.f)(e.t0));case 11:case"end":return e.stop()}}),re,null,[[0,7]])}function ve(e){var t,n,r,a,c,o;return z.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,a=t.displayName,i.prev=1,i.next=4,q.a.createUserWithEmailAndPassword(n,r);case 4:return c=i.sent,o=c.user,i.next=8,Object(W.c)(Object(Y.k)({user:o,additionalData:{displayName:a}}));case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(W.c)(Object(Y.i)(i.t0));case 14:case"end":return i.stop()}}),ae,null,[[1,10]])}function ge(e){var t,n,r;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,a.next=3,be(n,r);case 3:case"end":return a.stop()}}),ce)}function ye(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(O.a.GOOGLE_SIGN_IN_START,Oe);case 2:case"end":return e.stop()}}),oe)}function je(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(O.a.EMAIL_SIGN_IN_START,me);case 2:case"end":return e.stop()}}),ie)}function Se(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(O.a.SIGN_OUT_START,Ee);case 2:case"end":return e.stop()}}),ue)}function we(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(O.a.SIGN_UP_START,ve);case 2:case"end":return e.stop()}}),se)}function _e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(O.a.SIGN_UP_SUCCESS,ge);case 2:case"end":return e.stop()}}),le)}function xe(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)([Object(W.b)(ye),Object(W.b)(je),Object(W.b)(he),Object(W.b)(Se),Object(W.b)(we),Object(W.b)(_e)]);case 2:case"end":return e.stop()}}),pe)}var Ie=n(29),Ce=z.a.mark(Ne),Te=z.a.mark(Ue),ke=z.a.mark(Re);function Ne(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)(Object(Ie.b)());case 2:case"end":return e.stop()}}),Ce)}function Ue(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(O.a.SIGN_OUT_SUCCESS,Ne);case 2:case"end":return e.stop()}}),Te)}function Re(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)([Object(W.b)(Ue)]);case 2:case"end":return e.stop()}}),ke)}var Ae=z.a.mark(Pe);function Pe(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)([Object(W.b)(X),Object(W.b)(xe),Object(W.b)(Re)]);case 2:case"end":return e.stop()}}),Ae)}var Le=Object(M.a)(),Ge=[Le];var De=Object(l.e)(F,l.a.apply(void 0,Ge));Le.run(Pe);var Fe=Object(p.b)(De),Me=(n(86),n(25)),He=n(11),ze=n(30),We=Object(He.a)([function(e){return e.user}],(function(e){return e.currentUser}));function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ve(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Be=a.a.createElement("g",null),Ke=a.a.createElement("g",null),Je=a.a.createElement("g",null),Qe=a.a.createElement("g",null),$e=a.a.createElement("g",null),Xe=a.a.createElement("g",null),Ye=a.a.createElement("g",null),Ze=a.a.createElement("g",null),et=a.a.createElement("g",null),tt=a.a.createElement("g",null),nt=a.a.createElement("g",null),rt=a.a.createElement("g",null),at=a.a.createElement("g",null),ct=a.a.createElement("g",null),ot=a.a.createElement("g",null),it=function(e){var t=e.svgRef,n=e.title,r=Ve(e,["svgRef","title"]);return a.a.createElement("svg",qe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},r),a.a.createElement("title",null,n),a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Be,Ke,Je,Qe,$e,Xe,Ye,Ze,et,tt,nt,rt,at,ct,ot)},ut=a.a.forwardRef((function(e,t){return a.a.createElement(it,qe({svgRef:t},e))})),st=(n.p,n(87),Object(He.b)({itemCount:ze.c})),lt=Object(u.b)(st,(function(e){return{toggleCartHidden:function(){return e(Object(Ie.e)())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:t},a.a.createElement(ut,{className:"shopping-icon"}),a.a.createElement("span",{className:"item-count"},n))})),pt=n(47),ft=(n(88),a.a.memo((function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,o=t.quantity;return a.a.createElement("div",{className:"cart-item"},a.a.createElement("img",{src:n,alt:"item ".concat(c)}),a.a.createElement("div",{className:"item-details"},a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},o," x $",r)))}))),dt=(n(89),Object(He.b)({cartItems:ze.b})),bt=Object(Me.g)(Object(u.b)(dt)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return a.a.createElement("div",{className:"cart-dropdown"},a.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return a.a.createElement(ft,{key:e.id,item:e})})):a.a.createElement("span",{className:"empty-message"},"Your cart is empty")),a.a.createElement(pt.a,{onClick:function(){n.push("/checkout"),r(Object(Ie.e)())}},"Go to checkout"))})));function Ot(){return(Ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function mt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ht=a.a.createElement("title",null,"Group"),Et=a.a.createElement("desc",null,"Created with Sketch."),vt=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),gt=function(e){var t=e.svgRef,n=e.title,r=mt(e,["svgRef","title"]);return a.a.createElement("svg",Ot({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},r),void 0===n?ht:a.a.createElement("title",null,n),Et,vt)},yt=a.a.forwardRef((function(e,t){return a.a.createElement(gt,Ot({svgRef:t},e))})),jt=(n.p,n(9)),St=n(10);function wt(){var e=Object(jt.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n    text-transform: uppercase;\n"]);return wt=function(){return e},e}function _t(){var e=Object(jt.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n\n    @media screen and (max-width: 800px) {\n        width: calc(100% - 50px);\n    }\n"]);return _t=function(){return e},e}function xt(){var e=Object(jt.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n\n    @media screen and (max-width: 800px) {\n        width: 50px;\n        padding: 0;\n    }\n"]);return xt=function(){return e},e}function It(){var e=Object(jt.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n\n    @media screen and (max-width: 800px) {\n        height: 60px;\n        padding: 10px;\n        margin-bottom: 20px;\n\n    }\n"]);return It=function(){return e},e}var Ct=St.c.div(It()),Tt=Object(St.c)(i.b)(xt()),kt=St.c.div(_t()),Nt=Object(St.c)(i.b)(wt()),Ut=Object(He.b)({currentUser:We,hidden:ze.a}),Rt=Object(u.b)(Ut,(function(e){return{signOutStart:function(){return e(Object(Y.g)())}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return a.a.createElement(Ct,null,a.a.createElement(Tt,{to:"/"},a.a.createElement(yt,{className:"logo"})),a.a.createElement(kt,null,a.a.createElement(Nt,{to:"/shop"},"Shop"),a.a.createElement(Nt,{to:"/contact"},"Contact"),t?a.a.createElement(Nt,{as:"div",onClick:r},"Sign Out"):a.a.createElement(Nt,{to:"/signin"},"Sign In"),a.a.createElement(lt,null)),n?null:a.a.createElement(bt,null))})),At=n(48),Pt=n(52),Lt=n(53),Gt=n(55),Dt=n(54),Ft=n(56);function Mt(){var e=Object(jt.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]);return Mt=function(){return e},e}function Ht(){var e=Object(jt.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"]);return Ht=function(){return e},e}function zt(){var e=Object(jt.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return zt=function(){return e},e}var Wt=St.c.div(zt()),qt=St.c.div(Ht(),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),Vt=St.c.h2(Mt()),Bt=function(e){function t(){var e;return Object(Pt.a)(this,t),(e=Object(Gt.a)(this,Object(Dt.a)(t).call(this))).state={hasErrored:!1},e}return Object(Ft.a)(t,e),Object(Lt.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasErrored?a.a.createElement(Wt,null,a.a.createElement(qt,{imageUrl:"https://i.imgur.com/O0DCcQy.png"}),a.a.createElement(Vt,null,"Sorry this page is broken")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),t}(a.a.Component);function Kt(){var e=Object(jt.a)(["\n    * {\n        box-sizing: border-box;\n    }\n    \n    body {\n        font-family: 'Open Sans Condensed';\n        padding: 20px 60px;\n\n        @media screen and (max-width: 800px) {\n            padding: 10px;\n\n        }\n    }\n    \n    a {\n        text-decoration: none;\n        color: black;\n        text-transform: uppercase;\n    }\n"]);return Kt=function(){return e},e}var Jt=Object(St.a)(Kt()),Qt=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,159))})),$t=Object(r.lazy)((function(){return n.e(11).then(n.bind(null,157))})),Xt=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(8)]).then(n.bind(null,160))})),Yt=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,158))})),Zt=Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(9)]).then(n.bind(null,161))})),en=Object(He.b)({currentUser:We}),tn=Object(u.b)(en,(function(e){return{checkUserSession:function(){return e(Object(Y.a)())}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement("div",{className:"App"},a.a.createElement(Jt,null),a.a.createElement(Rt,null),a.a.createElement(Me.d,null,a.a.createElement(Bt,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(At.a,null)},a.a.createElement(Me.b,{exact:!0,path:"/",component:Qt}),a.a.createElement(Me.b,{path:"/shop",component:$t}),a.a.createElement(Me.b,{exact:!0,path:"/checkout",component:Xt}),a.a.createElement(Me.b,{exact:!0,path:"/contact",component:Zt}),a.a.createElement(Me.b,{exact:!0,path:"/signin",render:function(){return n?a.a.createElement(Me.a,{to:"/"}):a.a.createElement(Yt,null)}})))))})),nn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function rn(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(a.a.createElement(u.a,{store:De},a.a.createElement(i.a,null,a.a.createElement(s.a,{persistor:Fe},a.a.createElement(tn,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");nn?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):rn(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):rn(t,e)}))}}()}},[[68,1,2]]]);
//# sourceMappingURL=main.06dd296d.chunk.js.map