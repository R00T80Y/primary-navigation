!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("PrimaryNavigation",[],n):"object"==typeof exports?exports.PrimaryNavigation=n():t.PrimaryNavigation=n()}(self,(function(){return function(){var t={7754:function(){Element.prototype.closest||(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(t){var n=this;if(!document.documentElement.contains(this))return null;do{if(n.matches(t))return n;n=n.parentElement}while(null!==n);return null})},5089:function(t,n,e){var r=e(2086),o=e(930),i=e(9268),u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},9966:function(t,n,e){"use strict";var r=e(3448).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},6112:function(t,n,e){var r=e(2086),o=e(8759),i=r.String,u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},6198:function(t,n,e){var r=e(4088),o=e(7740),i=e(2871),u=function(t){return function(n,e,u){var c,a=r(n),f=i(a),s=o(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},2306:function(t,n,e){var r=e(8240),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},375:function(t,n,e){var r=e(2086),o=e(2371),i=e(930),u=e(2306),c=e(211)("toStringTag"),a=r.Object,f="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=a(t),c))?e:f?u(n):"Object"==(r=u(n))&&i(n.callee)?"Arguments":r}},8474:function(t,n,e){var r=e(9606),o=e(6095),i=e(4399),u=e(7826);t.exports=function(t,n,e){for(var c=o(n),a=u.f,f=i.f,s=0;s<c.length;s++){var l=c[s];r(t,l)||e&&r(e,l)||a(t,l,f(n,l))}}},2585:function(t,n,e){var r=e(5283),o=e(7826),i=e(5736);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},5736:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},5283:function(t,n,e){var r=e(3677);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},821:function(t,n,e){var r=e(2086),o=e(8759),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},4999:function(t,n,e){var r=e(563);t.exports=r("navigator","userAgent")||""},1448:function(t,n,e){var r,o,i=e(2086),u=e(4999),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},8684:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1695:function(t,n,e){var r=e(2086),o=e(4399).f,i=e(2585),u=e(1007),c=e(3648),a=e(8474),f=e(7189);t.exports=function(t,n){var e,s,l,p,v,d=t.target,h=t.global,g=t.stat;if(e=h?r:g?r[d]||c(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:d+(g?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},3677:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},2331:function(t,n,e){"use strict";e(2077);var r=e(8240),o=e(1007),i=e(4861),u=e(3677),c=e(211),a=e(2585),f=c("species"),s=RegExp.prototype;t.exports=function(t,n,e,l){var p=c(t),v=!u((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),d=v&&!u((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[f]=function(){return e},e.flags="",e[p]=/./[p]),e.exec=function(){return n=!0,null},e[p](""),!n}));if(!v||!d||e){var h=r(/./[p]),g=n(p,""[t],(function(t,n,e,o,u){var c=r(t),a=n.exec;return a===i||a===s.exec?v&&!u?{done:!0,value:h(n,e,o)}:{done:!0,value:c(e,n,o)}:{done:!1}}));o(String.prototype,t,g[0]),o(s,p,g[1])}l&&a(s[p],"sham",!0)}},7258:function(t,n,e){var r=e(6059),o=Function.prototype,i=o.apply,u=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?u.bind(i):function(){return u.apply(i,arguments)})},6059:function(t,n,e){var r=e(3677);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9413:function(t,n,e){var r=e(6059),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},4398:function(t,n,e){var r=e(5283),o=e(9606),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},8240:function(t,n,e){var r=e(6059),o=Function.prototype,i=o.bind,u=o.call,c=r&&i.bind(u,u);t.exports=r?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},563:function(t,n,e){var r=e(2086),o=e(930),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},2964:function(t,n,e){var r=e(5089);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},8509:function(t,n,e){var r=e(8240),o=e(3060),i=Math.floor,u=r("".charAt),c=r("".replace),a=r("".slice),f=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,n,e,r,l,p){var v=e+t.length,d=r.length,h=s;return void 0!==l&&(l=o(l),h=f),c(p,h,(function(o,c){var f;switch(u(c,0)){case"$":return"$";case"&":return t;case"`":return a(n,0,e);case"'":return a(n,v);case"<":f=l[a(c,1,-1)];break;default:var s=+c;if(0===s)return o;if(s>d){var p=i(s/10);return 0===p?o:p<=d?void 0===r[p-1]?u(c,1):r[p-1]+u(c,1):o}f=r[s-1]}return void 0===f?"":f}))}},2086:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},9606:function(t,n,e){var r=e(8240),o=e(3060),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},7153:function(t){t.exports={}},5963:function(t,n,e){var r=e(563);t.exports=r("document","documentElement")},6761:function(t,n,e){var r=e(5283),o=e(3677),i=e(821);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5974:function(t,n,e){var r=e(2086),o=e(8240),i=e(3677),u=e(2306),c=r.Object,a=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?a(t,""):c(t)}:c},9277:function(t,n,e){var r=e(8240),o=e(930),i=e(4489),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},3278:function(t,n,e){var r,o,i,u=e(9316),c=e(2086),a=e(8240),f=e(8759),s=e(2585),l=e(9606),p=e(4489),v=e(8944),d=e(7153),h="Object already initialized",g=c.TypeError,b=c.WeakMap;if(u||p.state){var y=p.state||(p.state=new b),m=a(y.get),x=a(y.has),w=a(y.set);r=function(t,n){if(x(y,t))throw new g(h);return n.facade=t,w(y,t,n),n},o=function(t){return m(y,t)||{}},i=function(t){return x(y,t)}}else{var E=v("state");d[E]=!0,r=function(t,n){if(l(t,E))throw new g(h);return n.facade=t,s(t,E,n),n},o=function(t){return l(t,E)?t[E]:{}},i=function(t){return l(t,E)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw g("Incompatible receiver, "+t+" required");return e}}}},930:function(t){t.exports=function(t){return"function"==typeof t}},7189:function(t,n,e){var r=e(3677),o=e(930),i=/#|\.prototype\./,u=function(t,n){var e=a[c(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},8759:function(t,n,e){var r=e(930);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3296:function(t){t.exports=!1},2071:function(t,n,e){var r=e(2086),o=e(563),i=e(930),u=e(5516),c=e(1876),a=r.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,a(t))}},2871:function(t,n,e){var r=e(4005);t.exports=function(t){return r(t.length)}},3193:function(t,n,e){var r=e(1448),o=e(3677);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},9316:function(t,n,e){var r=e(2086),o=e(930),i=e(9277),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},8675:function(t,n,e){"use strict";var r=e(5283),o=e(8240),i=e(9413),u=e(3677),c=e(8779),a=e(6952),f=e(7446),s=e(3060),l=e(5974),p=Object.assign,v=Object.defineProperty,d=o([].concat);t.exports=!p||u((function(){if(r&&1!==p({b:1},p(v({},"a",{enumerable:!0,get:function(){v(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach((function(t){n[t]=t})),7!=p({},t)[e]||c(p({},n)).join("")!=o}))?function(t,n){for(var e=s(t),o=arguments.length,u=1,p=a.f,v=f.f;o>u;)for(var h,g=l(arguments[u++]),b=p?d(c(g),p(g)):c(g),y=b.length,m=0;y>m;)h=b[m++],r&&!i(v,g,h)||(e[h]=g[h]);return e}:p},4710:function(t,n,e){var r,o=e(6112),i=e(7711),u=e(8684),c=e(7153),a=e(5963),f=e(821),s=e(8944)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(p("")),t.close();var n=t.parentWindow.Object;return t=null,n},d=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,n;d="undefined"!=typeof document?document.domain&&r?v(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):v(r);for(var e=u.length;e--;)delete d.prototype[u[e]];return d()};c[s]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[s]=t):e=d(),void 0===n?e:i.f(e,n)}},7711:function(t,n,e){var r=e(5283),o=e(8202),i=e(7826),u=e(6112),c=e(4088),a=e(8779);n.f=r&&!o?Object.defineProperties:function(t,n){u(t);for(var e,r=c(n),o=a(n),f=o.length,s=0;f>s;)i.f(t,e=o[s++],r[e]);return t}},7826:function(t,n,e){var r=e(2086),o=e(5283),i=e(6761),u=e(8202),c=e(6112),a=e(2258),f=r.TypeError,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor;n.f=o?u?function(t,n,e){if(c(t),n=a(n),c(e),"function"==typeof t&&"prototype"===n&&"value"in e&&"writable"in e&&!e.writable){var r=l(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:"configurable"in e?e.configurable:r.configurable,enumerable:"enumerable"in e?e.enumerable:r.enumerable,writable:!1})}return s(t,n,e)}:s:function(t,n,e){if(c(t),n=a(n),c(e),i)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw f("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},4399:function(t,n,e){var r=e(5283),o=e(9413),i=e(7446),u=e(5736),c=e(4088),a=e(2258),f=e(9606),s=e(6761),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=c(t),n=a(n),s)try{return l(t,n)}catch(t){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},62:function(t,n,e){var r=e(1352),o=e(8684).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},6952:function(t,n){n.f=Object.getOwnPropertySymbols},5516:function(t,n,e){var r=e(8240);t.exports=r({}.isPrototypeOf)},1352:function(t,n,e){var r=e(8240),o=e(9606),i=e(4088),u=e(6198).indexOf,c=e(7153),a=r([].push);t.exports=function(t,n){var e,r=i(t),f=0,s=[];for(e in r)!o(c,e)&&o(r,e)&&a(s,e);for(;n.length>f;)o(r,e=n[f++])&&(~u(s,e)||a(s,e));return s}},8779:function(t,n,e){var r=e(1352),o=e(8684);t.exports=Object.keys||function(t){return r(t,o)}},7446:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},999:function(t,n,e){"use strict";var r=e(2371),o=e(375);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},7999:function(t,n,e){var r=e(2086),o=e(9413),i=e(930),u=e(8759),c=r.TypeError;t.exports=function(t,n){var e,r;if("string"===n&&i(e=t.toString)&&!u(r=o(e,t)))return r;if(i(e=t.valueOf)&&!u(r=o(e,t)))return r;if("string"!==n&&i(e=t.toString)&&!u(r=o(e,t)))return r;throw c("Can't convert object to primitive value")}},6095:function(t,n,e){var r=e(563),o=e(8240),i=e(62),u=e(6952),c=e(6112),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(c(t)),e=u.f;return e?a(n,e(t)):n}},1007:function(t,n,e){var r=e(2086),o=e(930),i=e(9606),u=e(2585),c=e(3648),a=e(9277),f=e(3278),s=e(4398).CONFIGURABLE,l=f.get,p=f.enforce,v=String(String).split("String");(t.exports=function(t,n,e,a){var f,l=!!a&&!!a.unsafe,d=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet,g=a&&void 0!==a.name?a.name:n;o(e)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||s&&e.name!==g)&&u(e,"name",g),(f=p(e)).source||(f.source=v.join("string"==typeof g?g:""))),t!==r?(l?!h&&t[n]&&(d=!0):delete t[n],d?t[n]=e:u(t,n,e)):d?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||a(this)}))},1189:function(t,n,e){var r=e(2086),o=e(9413),i=e(6112),u=e(930),c=e(2306),a=e(4861),f=r.TypeError;t.exports=function(t,n){var e=t.exec;if(u(e)){var r=o(e,t,n);return null!==r&&i(r),r}if("RegExp"===c(t))return o(a,t,n);throw f("RegExp#exec called on incompatible receiver")}},4861:function(t,n,e){"use strict";var r,o,i=e(9413),u=e(8240),c=e(4059),a=e(4276),f=e(4930),s=e(9197),l=e(4710),p=e(3278).get,v=e(2582),d=e(2910),h=s("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,b=g,y=u("".charAt),m=u("".indexOf),x=u("".replace),w=u("".slice),E=(o=/b*/g,i(g,r=/a/,"a"),i(g,o,"a"),0!==r.lastIndex||0!==o.lastIndex),S=f.BROKEN_CARET,O=void 0!==/()??/.exec("")[1];(E||O||S||v||d)&&(b=function(t){var n,e,r,o,u,f,s,v=this,d=p(v),j=c(t),P=d.raw;if(P)return P.lastIndex=v.lastIndex,n=i(b,P,j),v.lastIndex=P.lastIndex,n;var _=d.groups,k=S&&v.sticky,C=i(a,v),I=v.source,T=0,A=j;if(k&&(C=x(C,"y",""),-1===m(C,"g")&&(C+="g"),A=w(j,v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==y(j,v.lastIndex-1))&&(I="(?: "+I+")",A=" "+A,T++),e=new RegExp("^(?:"+I+")",C)),O&&(e=new RegExp("^"+I+"$(?!\\s)",C)),E&&(r=v.lastIndex),o=i(g,k?e:v,A),k?o?(o.input=w(o.input,T),o[0]=w(o[0],T),o.index=v.lastIndex,v.lastIndex+=o[0].length):v.lastIndex=0:E&&o&&(v.lastIndex=v.global?o.index+o[0].length:r),O&&o&&o.length>1&&i(h,o[0],e,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&_)for(o.groups=f=l(null),u=0;u<_.length;u++)f[(s=_[u])[0]]=o[s[1]];return o}),t.exports=b},4276:function(t,n,e){"use strict";var r=e(6112);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},4930:function(t,n,e){var r=e(3677),o=e(2086).RegExp,i=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),u=i||r((function(){return!o("a","y").sticky})),c=i||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:u,UNSUPPORTED_Y:i}},2582:function(t,n,e){var r=e(3677),o=e(2086).RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},2910:function(t,n,e){var r=e(3677),o=e(2086).RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},9586:function(t,n,e){var r=e(2086).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3648:function(t,n,e){var r=e(2086),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},8944:function(t,n,e){var r=e(9197),o=e(5422),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4489:function(t,n,e){var r=e(2086),o=e(3648),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},9197:function(t,n,e){var r=e(3296),o=e(4489);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.21.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",source:"https://github.com/zloirock/core-js"})},3448:function(t,n,e){var r=e(8240),o=e(9502),i=e(4059),u=e(9586),c=r("".charAt),a=r("".charCodeAt),f=r("".slice),s=function(t){return function(n,e){var r,s,l=i(u(n)),p=o(e),v=l.length;return p<0||p>=v?t?"":void 0:(r=a(l,p))<55296||r>56319||p+1===v||(s=a(l,p+1))<56320||s>57343?t?c(l,p):r:t?f(l,p,p+2):s-56320+(r-55296<<10)+65536}};t.exports={codeAt:s(!1),charAt:s(!0)}},7740:function(t,n,e){var r=e(9502),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},4088:function(t,n,e){var r=e(5974),o=e(9586);t.exports=function(t){return r(o(t))}},9502:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?e:n)(r)}},4005:function(t,n,e){var r=e(9502),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},3060:function(t,n,e){var r=e(2086),o=e(9586),i=r.Object;t.exports=function(t){return i(o(t))}},1288:function(t,n,e){var r=e(2086),o=e(9413),i=e(8759),u=e(2071),c=e(2964),a=e(7999),f=e(211),s=r.TypeError,l=f("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var e,r=c(t,l);if(r){if(void 0===n&&(n="default"),e=o(r,t,n),!i(e)||u(e))return e;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),a(t,n)}},2258:function(t,n,e){var r=e(1288),o=e(2071);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},2371:function(t,n,e){var r={};r[e(211)("toStringTag")]="z",t.exports="[object z]"===String(r)},4059:function(t,n,e){var r=e(2086),o=e(375),i=r.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},9268:function(t,n,e){var r=e(2086).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},5422:function(t,n,e){var r=e(8240),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},1876:function(t,n,e){var r=e(3193);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8202:function(t,n,e){var r=e(5283),o=e(3677);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},211:function(t,n,e){var r=e(2086),o=e(9197),i=e(9606),u=e(5422),c=e(3193),a=e(1876),f=o("wks"),s=r.Symbol,l=s&&s.for,p=a?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var n="Symbol."+t;c&&i(s,t)?f[t]=s[t]:f[t]=a&&l?l(n):p(n)}return f[t]}},8410:function(t,n,e){var r=e(1695),o=e(8675);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},3238:function(t,n,e){var r=e(2371),o=e(1007),i=e(999);r||o(Object.prototype,"toString",i,{unsafe:!0})},2077:function(t,n,e){"use strict";var r=e(1695),o=e(4861);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},911:function(t,n,e){"use strict";var r=e(7258),o=e(9413),i=e(8240),u=e(2331),c=e(3677),a=e(6112),f=e(930),s=e(9502),l=e(4005),p=e(4059),v=e(9586),d=e(9966),h=e(2964),g=e(8509),b=e(1189),y=e(211)("replace"),m=Math.max,x=Math.min,w=i([].concat),E=i([].push),S=i("".indexOf),O=i("".slice),j="$0"==="a".replace(/./,"$0"),P=!!/./[y]&&""===/./[y]("a","$0");u("replace",(function(t,n,e){var i=P?"$":"$0";return[function(t,e){var r=v(this),i=null==t?void 0:h(t,y);return i?o(i,t,r,e):o(n,p(r),t,e)},function(t,o){var u=a(this),c=p(t);if("string"==typeof o&&-1===S(o,i)&&-1===S(o,"$<")){var v=e(n,u,c,o);if(v.done)return v.value}var h=f(o);h||(o=p(o));var y=u.global;if(y){var j=u.unicode;u.lastIndex=0}for(var P=[];;){var _=b(u,c);if(null===_)break;if(E(P,_),!y)break;""===p(_[0])&&(u.lastIndex=d(c,l(u.lastIndex),j))}for(var k,C="",I=0,T=0;T<P.length;T++){for(var A=p((_=P[T])[0]),R=m(x(s(_.index),c.length),0),F=[],L=1;L<_.length;L++)E(F,void 0===(k=_[L])?k:String(k));var M=_.groups;if(h){var $=w([A],F,R,c);void 0!==M&&E($,M);var D=p(r(o,void 0,$))}else D=g(A,c,R,F,M,o);R>=I&&(C+=O(c,I,R)+D,I=R+A.length)}return C+O(c,I)}]}),!!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!j||P)},5251:function(){!function(){if("undefined"!=typeof window)try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var n=function(t,n){var e,r;return(n=n||{}).bubbles=!!n.bubbles,n.cancelable=!!n.cancelable,(e=document.createEvent("CustomEvent")).initCustomEvent(t,n.bubbles,n.cancelable,n.detail),r=e.preventDefault,e.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},e};n.prototype=window.Event.prototype,window.CustomEvent=n}}()}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)};var r={};return function(){"use strict";e.d(r,{default:function(){return c}}),e(8410),e(5251),e(7754);class t{constructor(n){return"object"==typeof t._instance?t._instance:(this.delay=n||66,this._window=window,this._timer=null,this._callbacks=[],this._isRunning=!1,this.method=this.resize.bind(this),this._window.addEventListener("resize",this.method),t._instance=this,this)}resize(){return!this._isRunning&&(this._timer&&clearTimeout(this._timer),this._isRunning=!0,this._timer=setTimeout(function(){this._window.requestAnimationFrame?this._window.requestAnimationFrame(this.run.bind(this)):setTimeout(this.run.bind(this),66)}.bind(this),this.delay),!0)}run(){this._callbacks.forEach((function(t){this.isFunction(t)&&t()}),this),this._isRunning=!1}isFunction(t){return t&&"[object Function]"==={}.toString.call(t)}add(t){if(!this.isFunction(t))return!1;let n=this,e=this._callbacks.push(t)-1;return function(){n.remove(e)}}remove(t){return!!this._callbacks[t]&&(this._callbacks.splice(t,1),!0)}destroy(){this._window.removeEventListener("resize",this.method)}}e(2077),e(911),e(3238);var n={type:function(t){return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase()},isFunction:function(t){return"function"===n.type(t)}},o=n,i={breakpointClose:756,stateControlSelector:".navigation__state-control",panelSelector:".navigation__panel",buttonSelector:".navigation__button.navigation__button--burger",focus:!0,init:!1,open:!1,close:!1};function u(n,e){var r=null,i=n.querySelector(e.stateControlSelector),u=n.querySelector(e.buttonSelector),c=n.querySelectorAll('label[for="'+i.id+'"]'),a=n.querySelector(e.panelSelector);function f(){return i.checked}function s(){i.checked=!0,i.dispatchEvent(new CustomEvent("change"))}function l(){i.checked=!1,i.dispatchEvent(new CustomEvent("change"))}function p(t){t.stopPropagation(),32===t.keyCode||13===t.keyCode?(t.preventDefault(),f()?l():s()):27===t.keyCode&&(t.preventDefault(),l())}function v(t){t.stopPropagation(),27===t.keyCode&&(t.preventDefault(),l())}function d(t){t.stopPropagation(),f()&&(t.target.closest("#"+n.id)||l())}function h(t){if(t.target.checked){for(var n=0,r=c.length;n<r;++n)c[n].setAttribute("aria-expanded","true");a.setAttribute("data-visible","true"),e.focus&&setTimeout((function(){a.querySelector("a").focus()}),400),o.isFunction(e.open)&&e.open()}else{for(var i=0,f=c.length;i<f;++i)c[i].setAttribute("aria-expanded","false");a.setAttribute("data-visible","false"),e.focus&&u.focus(),o.isFunction(e.close)&&e.close()}}return l(),function(){!1!==e.breakpointClose&&(r=(new t).add((function(){document.body.clientWidth>=e.breakpointClose&&l()}))),n.addEventListener("keydown",v),i.addEventListener("change",h);for(var o=0,u=c.length;o<u;++o)c[o].addEventListener("keydown",p);document.addEventListener("click",d)}(),o.isFunction(e.init)&&e.init(),{get options(){return e},isOpen:f,open:function(){s()},close:function(){l()},destroy:function(){!function(){r(),n.removeEventListener("keydown",v),i.removeEventListener("change",h);for(var t=0,e=c.length;t<e;++t)c[t].removeEventListener("keydown",p);document.removeEventListener("click",d)}()}}}function c(t,n){var e=[],r=[];return function(){if(t&&t instanceof HTMLElement)e.push(t);else if(t&&"string"==typeof t)for(var o=document.querySelectorAll(t),c=0,a=o.length;c<a;++c)o[c]instanceof HTMLElement&&e.push(o[c]);else if(t&&t.length)for(var f=0,s=t.length;f<s;++f)t[f]instanceof HTMLElement&&e.push(t[f]);for(var l=0,p=e.length;l<p;++l)r.push(u(e[l],Object.assign({},i,n,{name:"ToggleButton"})));return r}()}}(),r.default}()}));