!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PrimaryNavigation",[],t):"object"==typeof exports?exports.PrimaryNavigation=t():e.PrimaryNavigation=t()}(self,(function(){return function(){var e,t={231:function(e,t,n){"use strict";n.d(t,{default:function(){return u}}),n(251),n(793);class o{constructor(e){return"object"==typeof o._instance?o._instance:(this.delay=e||66,this._window=window,this._timer=null,this._callbacks=[],this._isRunning=!1,this.method=this.resize.bind(this),this._window.addEventListener("resize",this.method),o._instance=this,this)}resize(){return!this._isRunning&&(this._timer&&clearTimeout(this._timer),this._isRunning=!0,this._timer=setTimeout(function(){this._window.requestAnimationFrame?this._window.requestAnimationFrame(this.run.bind(this)):setTimeout(this.run.bind(this),66)}.bind(this),this.delay),!0)}run(){this._callbacks.forEach((function(e){this.isFunction(e)&&e()}),this),this._isRunning=!1}isFunction(e){return e&&"[object Function]"==={}.toString.call(e)}add(e){if(!this.isFunction(e))return!1;let t=this,n=this._callbacks.push(e)-1;return function(){t.remove(n)}}remove(e){return!!this._callbacks[e]&&(this._callbacks.splice(e,1),!0)}destroy(){this._window.removeEventListener("resize",this.method)}}var i={type:function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()},isFunction:function(e){return"function"===i.type(e)}},r=i,s={breakpointClose:756,stateControlSelector:".navigation__state-control",panelSelector:".navigation__panel",buttonSelector:".navigation__button.navigation__button--burger",focus:!0,init:!1,open:!1,close:!1};function c(e,t){var n=null,i=e.querySelector(t.stateControlSelector),s=e.querySelector(t.buttonSelector),c=e.querySelectorAll('label[for="'+i.id+'"]'),u=e.querySelector(t.panelSelector);function a(){return i.checked}function l(){i.checked=!0,i.dispatchEvent(new CustomEvent("change"))}function f(){i.checked=!1,i.dispatchEvent(new CustomEvent("change"))}function d(e){e.stopPropagation(),32===e.keyCode||13===e.keyCode?(e.preventDefault(),a()?f():l()):27===e.keyCode&&(e.preventDefault(),f())}function h(e){e.stopPropagation(),27===e.keyCode&&(e.preventDefault(),f())}function p(t){t.stopPropagation(),a()&&(t.target.closest("#"+e.id)||f())}function v(e){if(e.target.checked){for(var n=0,o=c.length;n<o;++n)c[n].setAttribute("aria-expanded","true");u.setAttribute("data-visible","true"),t.focus&&setTimeout((function(){u.querySelector("a").focus()}),400),r.isFunction(t.open)&&t.open()}else{for(var i=0,a=c.length;i<a;++i)c[i].setAttribute("aria-expanded","false");u.setAttribute("data-visible","false"),t.focus&&s.focus(),r.isFunction(t.close)&&t.close()}}return f(),function(){!1!==t.breakpointClose&&(n=(new o).add((function(){document.body.clientWidth>=t.breakpointClose&&f()}))),e.addEventListener("keydown",h),i.addEventListener("change",v);for(var r=0,s=c.length;r<s;++r)c[r].addEventListener("keydown",d);document.addEventListener("click",p)}(),r.isFunction(t.init)&&t.init(),{get options(){return t},isOpen:a,open:function(){l()},close:function(){f()},destroy:function(){!function(){n(),e.removeEventListener("keydown",h),i.removeEventListener("change",v);for(var t=0,o=c.length;t<o;++t)c[t].removeEventListener("keydown",d);document.removeEventListener("click",p)}()}}}function u(e,t){var n=[],o=[];return function(){if(e&&e instanceof HTMLElement)n.push(e);else if(e&&"string"==typeof e)for(var i=document.querySelectorAll(e),r=0,u=i.length;r<u;++r)i[r]instanceof HTMLElement&&n.push(i[r]);else if(e&&e.length)for(var a=0,l=e.length;a<l;++a)e[a]instanceof HTMLElement&&n.push(e[a]);for(var f=0,d=n.length;f<d;++f)o.push(c(n[f],Object.assign({},s,t,{name:"ToggleButton"})));return o}()}},793:function(){Element.prototype.closest||(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(this))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null})},251:function(){!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,o;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}()}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=function(t,n,i,r){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],r=e[l][2];for(var c=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[u])}))?n.splice(u--,1):(c=!1,r<s&&(s=r));if(c){e.splice(l--,1);var a=i();void 0!==a&&(t=a)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,i,r]},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={361:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,s=n[0],c=n[1],u=n[2],a=0;if(s.some((function(t){return 0!==e[t]}))){for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(u)var l=u(o)}for(t&&t(n);a<s.length;a++)r=s[a],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(l)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=o(231);return(i=o.O(i)).default}()}));