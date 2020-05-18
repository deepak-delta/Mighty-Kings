(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ca(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function ea(a,b){if(b){for(var c=da,e=a.split("."),d=0;d<e.length-1;d++){var f=e[d];f in c||(c[f]={});c=c[f]}e=e[e.length-1];d=c[e];f=b(d);f!=d&&null!=f&&aa(c,e,{configurable:!0,writable:!0,value:f})}}
var fa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var e=arguments[c];if(e)for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(a[d]=e[d])}return a};
ea("Object.assign",function(a){return a||fa});
var g=this||self,ha=/^[\w+/_-]+[=]{0,2}$/,h=null;function l(a){a=a.split(".");for(var b=g,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function n(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ia(a){Object.prototype.hasOwnProperty.call(a,q)&&a[q]||(a[q]=++ja)}
var q="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=ka:r=la;return r.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var e=c.slice();e.push.apply(e,arguments);return a.apply(this,e)}}
function t(a,b){var c=a.split("."),e=g;c[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?e[d]&&e[d]!==Object.prototype[d]?e=e[d]:e=e[d]={}:e[d]=b}
function na(a,b){function c(){}
c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},u=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,d="string"===typeof a?a.split(""):a,f=0;f<e;f++)f in d&&b.call(c,d[f],f,a)};function v(a,b){this.f=a;this.g=b;this.b=0;this.a=null}
v.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};var w;a:{var x=g.navigator;if(x){var y=x.userAgent;if(y){w=y;break a}}w=""};function z(a,b){this.f=a===A&&b||"";this.g=B}
z.prototype.b=!0;z.prototype.a=function(){return this.f};
var B={},A={},C=new z(A,"");function D(a,b){this.f=a===E&&b||"";this.g=F}
D.prototype.b=!0;D.prototype.a=function(){return this.f.toString()};
function G(a){return a instanceof D&&a.constructor===D&&a.g===F?a.f:"type_error:TrustedResourceUrl"}
var F={},E={};function H(a,b){this.f=a===I&&b||"";this.g=J}
H.prototype.b=!0;H.prototype.a=function(){return this.f.toString()};
var pa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,J={},I={};function K(){this.f="";this.g=L}
K.prototype.b=!0;K.prototype.a=function(){return this.f.toString()};
var L={};function M(a){var b=new K;b.f=a;return b}
M("<!DOCTYPE html>");var N=M("");M("<br>");function qa(a,b){a.src=G(b);if(null===h)b:{var c=g.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ha.test(c)){h=c;break b}h=""}c=h;c&&a.setAttribute("nonce",c)}
;function ra(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
;function sa(a){g.setTimeout(function(){throw a;},0)}
var O;
function ta(){var a=g.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==w.indexOf("Presto")&&(a=function(){var d=ra("IFRAME");d.style.display="none";d.src=G(new D(E,C instanceof z&&C.constructor===z&&C.g===B?C.f:"type_error:Const")).toString();document.documentElement.appendChild(d);var f=d.contentWindow;d=f.document;d.open();d.write(N instanceof K&&N.constructor===K&&N.g===L?N.f:"type_error:SafeHtml");d.close();var k="callImmediate"+Math.random(),
m="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;d=r(function(ba){if(("*"==m||ba.origin==m)&&ba.data==k)this.port1.onmessage()},this);
f.addEventListener("message",d,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,m)}}});
if("undefined"!==typeof a&&-1==w.indexOf("Trident")&&-1==w.indexOf("MSIE")){var b=new a,c={},e=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var d=c.m;c.m=null;d()}};
return function(d){e.next={m:d};e=e.next;b.port2.postMessage(0)}}return function(d){g.setTimeout(d,0)}}
;function P(){this.b=this.a=null}
var ua=new v(function(){return new Q},function(a){a.reset()});
P.prototype.add=function(a,b){var c=ua.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
P.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function Q(){this.next=this.b=this.a=null}
Q.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
Q.prototype.reset=function(){this.next=this.b=this.a=null};function va(a){R||wa();S||(R(),S=!0);xa.add(a,void 0)}
var R;function wa(){if(g.Promise&&g.Promise.resolve){var a=g.Promise.resolve(void 0);R=function(){a.then(ya)}}else R=function(){var b=ya,c;
!(c="function"!=p(g.setImmediate))&&(c=g.Window&&g.Window.prototype)&&(c=-1==w.indexOf("Edge")&&g.Window.prototype.setImmediate==g.setImmediate);c?(O||(O=ta()),O(b)):g.setImmediate(b)}}
var S=!1,xa=new P;function ya(){for(var a;a=xa.remove();){try{a.a.call(a.b)}catch(c){sa(c)}var b=ua;b.g(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}S=!1}
;function T(){this.f=this.f;this.g=this.g}
T.prototype.f=!1;T.prototype.dispose=function(){this.f||(this.f=!0,this.j())};
T.prototype.j=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function za(a){Aa();return new D(E,a)}
var Aa=n;function U(a){T.call(this);this.o=1;this.h=[];this.i=0;this.a=[];this.b={};this.s=!!a}
na(U,T);U.prototype.subscribe=function(a,b,c){var e=this.b[a];e||(e=this.b[a]=[]);var d=this.o;this.a[d]=a;this.a[d+1]=b;this.a[d+2]=c;this.o=d+3;e.push(d);return d};
U.prototype.l=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.i)this.h.push(a),this.a[a+1]=n;else{if(c){var e=oa(c,a);0<=e&&Array.prototype.splice.call(c,e,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
U.prototype.u=function(a,b){var c=this.b[a];if(c){for(var e=Array(arguments.length-1),d=1,f=arguments.length;d<f;d++)e[d-1]=arguments[d];if(this.s)for(d=0;d<c.length;d++){var k=c[d];Ba(this.a[k+1],this.a[k+2],e)}else{this.i++;try{for(d=0,f=c.length;d<f;d++)k=c[d],this.a[k+1].apply(this.a[k+2],e)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.l(c)}}return 0!=d}return!1};
function Ba(a,b,c){va(function(){a.apply(b,c)})}
U.prototype.clear=function(a){if(a){var b=this.b[a];b&&(u(b,this.l,this),delete this.b[a])}else this.a.length=0,this.b={}};
U.prototype.j=function(){U.v.j.call(this);this.clear();this.h.length=0};/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var V=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",V);function W(a){var b=arguments;1<b.length?V[b[0]]=b[1]:1===b.length&&Object.assign(V,b[0])}
function Ca(a,b){return a in V?V[a]:b}
;function Da(a){return a?a.dataset?a.dataset[Ea()]:a.getAttribute("data-loaded"):null}
var Fa={};function Ea(){return Fa.loaded||(Fa.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var Ga=[];function Ha(a){Ga.forEach(function(b){return b(a)})}
function Ia(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ja(b),Ha(b)}}:a}
function Ja(a){var b=l("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Ca("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),W("ERRORS",b))}
;function Ka(a){"function"==p(a)&&(a=Ia(a));window.setTimeout(a,0)}
;var La=l("ytPubsubPubsubInstance")||new U;U.prototype.subscribe=U.prototype.subscribe;U.prototype.unsubscribeByKey=U.prototype.l;U.prototype.publish=U.prototype.u;U.prototype.clear=U.prototype.clear;t("ytPubsubPubsubInstance",La);var X=l("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",X);var Y=l("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Y);var Ma=l("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Ma);
function Na(a,b){var c=Z();if(c){var e=c.subscribe(a,function(){var d=arguments;var f=function(){X[e]&&b.apply(window,d)};
try{Ma[a]?f():Ka(f)}catch(k){Ja(k)}},void 0);
X[e]=!0;Y[a]||(Y[a]=[]);Y[a].push(e)}}
function Oa(a,b){var c=Z();c&&c.publish.apply(c,arguments)}
function Pa(a){var b=Z();if(b)if(b.clear(a),a)Qa(a);else for(var c in Y)Qa(c)}
function Z(){return l("ytPubsubPubsubInstance")}
function Qa(a){Y[a]&&(a=Y[a],u(a,function(b){X[b]&&delete X[b]}),a.length=0)}
;var Ra=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Sa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ta(a,b){var c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var e=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),f=e+6;-1<e&&-1<d&&d>f&&(c=a.substring(f,d),c=c.replace(Ra,""),c=c.replace(Sa,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ua(a,b,c)}
function Ua(a,b,c){c=void 0===c?null:c;var e=Va(a),d=document.getElementById(e),f=d&&Da(d),k=d&&!f;f?b&&b():(b&&(Na(e,b),ia(b)),k||(d=Wa(a,e,function(){if(!Da(d)){var m=d;m&&(m.dataset?m.dataset[Ea()]="true":m.setAttribute("data-loaded","true"));Oa(e);Ka(ma(Pa,e))}},c)))}
function Wa(a,b,c,e){e=void 0===e?null:e;var d=ra("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
e&&d.setAttribute("nonce",e);qa(d,za(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Va(a){var b=document.createElement("a");a instanceof H||a instanceof H||(a="object"==typeof a&&a.b?a.a():String(a),pa.test(a)||(a="about:invalid#zClosurez"),a=new H(I,a));b.href=a instanceof H&&a.constructor===H&&a.g===J?a.f:"type_error:SafeUrl";b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");for(var c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"js-"+a}
;t("_gel",function(a){var b=document;return"string"===typeof a?b.getElementById(a):a});
t("yt.setConfig",W);t("yt.config.set",W);t("yt.www.notfound.init",function(){var a=Ca("SBOX_JS_URL",void 0);a&&Ta(a,function(){try{l("yt.www.masthead.searchbox.init")()}catch(b){throw b.message+=' SboxUrl: "'+a+'"',b;}})});}).call(this);
