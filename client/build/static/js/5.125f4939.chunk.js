(window["webpackJsonpreact-ecommerce"]=window["webpackJsonpreact-ecommerce"]||[]).push([[5],{152:function(e,t,n){},153:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var c=n(22),a=n(11),r=n(15),i=n(93),u=n(96),o=n(46),l=n(0),s=n.n(l),m=n(97),f=(n(152),function(e){var t=e.title,n=e.items,c=e.id;return s.a.createElement("div",{className:"collection-preview",key:c},s.a.createElement("h1",{className:"title"},t," "),s.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return s.a.createElement(m.a,{key:e.id,item:e})}))))}),d=(n(153),Object(a.b)({collections:i.b})),b=Object(c.b)(d)((function(e){var t=e.collections;return s.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(o.a)(e,["id"]);return s.a.createElement(f,Object.assign({key:t},n))})))})),v=Object(a.b)({isLoading:i.c}),j=Object(r.d)(Object(c.b)(v),u.a)(b);t.default=j},93:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l}));var c=n(11),a=function(e){return e.shop},r=Object(c.a)([a],(function(e){return e.collections})),i=Object(c.a)([r],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),u=function(e){return Object(c.a)([r],(function(t){return t?t[e]:null}))},o=Object(c.a)([a],(function(e){return e.isFetching})),l=Object(c.a)([a],(function(e){return!!e.collections}))},96:function(e,t,n){"use strict";var c=n(46),a=n(0),r=n.n(a),i=n(48);t.a=function(e){return function(t){var n=t.isLoading,a=Object(c.a)(t,["isLoading"]);return n?r.a.createElement(i.a,null):r.a.createElement(e,a)}}},97:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(22),i=n(29),u=n(47);n(98);t.a=Object(r.b)(null,(function(e){return{addItem:function(t){return e(Object(i.a)(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,r=t.price,i=t.imageUrl;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),a.a.createElement("div",{className:"collection-footer"},a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},r)),a.a.createElement(u.a,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))}))},98:function(e,t,n){}}]);
//# sourceMappingURL=5.125f4939.chunk.js.map