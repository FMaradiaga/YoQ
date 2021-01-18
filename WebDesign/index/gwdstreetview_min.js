(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var d="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},e=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},f=e(this),g;
if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var h;a:{var k={s:!0},l={};try{l.__proto__=k;h=l.s;break a}catch(a){}h=!1}g=h?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=g;var n=function(a,b,c){a=parseInt(a.getAttribute(b),10);isNaN(a)&&(a=c);return a},p=function(a,b){a=parseFloat(a.getAttribute(b));isFinite(a)||(a=NaN);return a};var q=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},r=function(a){if(q(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&q(a))return a;return null};var t=function(a){var b=void 0===b?null:b;var c=document.createEvent("CustomEvent");c.initCustomEvent("ready",!0,!0,b);a.dispatchEvent(c)},u=function(a,b){var c=function(B){a.removeEventListener("load",c);b(B)};a.addEventListener("load",c)};var v=function(){this.C="https://www.google.com/jsapi";for(var a=["google","load"],b=window,c=0;b&&c<a.length;c++)b=b[a[c]];this.g=b?0:2;this.h=[]};v.prototype.v=function(){for(var a=this.g=0;a<this.h.length;a++)this.h[a]();this.h=[]};
v.prototype.load=function(a){a&&(0==this.g?a():this.h.push(a));if(2==this.g){this.g=1;a=document.createElement("script");u(a,this.v.bind(this));a.setAttribute("type","text/javascript");a.setAttribute("async",!0);a.setAttribute("src",this.C);var b=document.getElementsByTagName("script")[0];b?b.parentNode.insertBefore(a,b):document.getElementsByTagName("head")[0].appendChild(a)}};var w=null,x=function(a){w||(w=new v);w.load(function(){google.load("maps","3.28",a)})};var y="heading interaction key latitude longitude pitch zoom".split(" "),z=function(){var a=HTMLElement.call(this)||this;a.a=0;a.u=a.A.bind(a);a.i=null;a.D=a.B.bind(a);return a},A=HTMLElement;z.prototype=d(A.prototype);z.prototype.constructor=z;if(m)m(z,A);else for(var C in A)if("prototype"!=C)if(Object.defineProperties){var D=Object.getOwnPropertyDescriptor(A,C);D&&Object.defineProperty(z,C,D)}else z[C]=A[C];
z.prototype.connectedCallback=function(){this.m=this.hasAttribute("interaction");this.b=p(this,"latitude");this.c=p(this,"longitude");this.j=n(this,"heading",0);this.l=n(this,"pitch",0);this.o=n(this,"zoom",2);this.f=this.hasAttribute("key")?this.getAttribute("key"):"";if(!this.gwdIsLoaded()){var a=r(this);a?a.gwdIsLoaded()&&this.gwdLoad():this.gwdLoad()}};z.prototype.gwdIsLoaded=function(){return 2==this.a||3==this.a};z.prototype.gwdLoad=function(){1!=this.a&&E(this)};
z.prototype.attributeChangedCallback=function(a){switch(a){case "interaction":this.m=this.hasAttribute("interaction");break;case "latitude":this.b=p(this,"latitude");break;case "longitude":this.c=p(this,"longitude");break;case "heading":this.j=n(this,"heading",0);break;case "pitch":this.l=n(this,"pitch",0);break;case "zoom":this.o=n(this,"zoom",2);break;case "key":this.f=this.hasAttribute("key")?this.getAttribute("key"):""}0!=this.a&&E(this)};
var E=function(a){if(isNaN(a.b)||isNaN(a.c))console.error("Missing latitude or longitude:","["+a.b+", "+a.c+"]","in",a),a.a=3,t(a);else{for(a.a=1;a.firstChild;)a.removeChild(a.firstChild);if(a.m){var b=a.f,c="";b&&(c="&key="+b);x({callback:a.u,other_params:"sensor=true"+c})}else b=document.createElement("gwd-image"),c="https://maps.googleapis.com/maps/api/streetview?size="+(a.clientWidth||256)+"x"+(a.clientHeight||256)+"&location="+a.b+","+a.c+"&heading="+a.j+"&pitch="+a.l,a.f&&(c+="&key="+a.f),b.setAttribute("source",
c),b.addEventListener("ready",a.D,!1),a.appendChild(b),a.F=b,a.F.gwdLoad()}};z.prototype.B=function(){this.a=2;t(this)};z.prototype.A=function(){if(1==this.a){this.i=document.createElement("div");this.appendChild(this.i);var a={position:new google.maps.LatLng(this.b,this.c),pov:{heading:this.j,pitch:this.l},zoom:this.o,zoomControl:!0,scrollwheel:!0,scaleControl:!0,disableDoubleClickZoom:!0,disableDefaultUI:!0};new google.maps.StreetViewPanorama(this.i,a);this.a=2;t(this)}};
f.Object.defineProperties(z,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return y}}});customElements.define("gwd-streetview",z);}).call(this);
