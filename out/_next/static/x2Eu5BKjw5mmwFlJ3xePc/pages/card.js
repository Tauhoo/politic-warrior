(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{237:function(t,n,e){__NEXT_REGISTER_PAGE("/card",function(){return t.exports=e(238),{page:t.exports.default}})},238:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return O});var r=e(0),o=e.n(r),i=e(1);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function p(){var t=v(["\n  border: 0px;\n  border-radius: 5px;\n  padding: 0.25em 0.5em;\n  background-color: #2d3436;\n  position: absolute;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n  top: 75vw;\n  color: white;\n  margin-bottom: 1vw;\n  @media (max-width: 650px) {\n    top: 150vw;\n  }\n"]);return p=function(){return t},t}function w(){var t=v(["\n  position: absolute;\n  width: 50vw;\n  transform: translateX(-50%);\n  left: 50vw;\n  @media (max-width: 650px) {\n    width: 100vw;\n    top: ;\n  }\n"]);return w=function(){return t},t}function b(){var t=v(["\n  position: absolute;\n  width: 40vw;\n  font-size: ","vw;\n  top: 57vw;\n  left: 30vw;\n  @media (max-width: 650px) {\n    font-size: ","vw;\n    width: 80vw;\n    left: 10vw;\n    top: 114vw;\n  }\n"]);return b=function(){return t},t}function m(){var t=v(["\n  position: absolute;\n  top: 3vw;\n  transform: translateX(-50%);\n  left: 50vw;\n  font-size: 3vw;\n  @media (max-width: 650px) {\n    top: 7vw;\n    font-size: 5vw;\n  }\n"]);return m=function(){return t},t}function v(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var d=i.a.span(m()),h=i.a.span(b(),function(t){return 1.5*t.size},function(t){return 3*t.size}),y=i.a.img(w()),g=i.a.button(p()),O=function(t){function n(){var t,e,r,o;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var i=arguments.length,u=new Array(i),f=0;f<i;f++)u[f]=arguments[f];return r=this,e=!(o=(t=c(n)).call.apply(t,[this].concat(u)))||"object"!==a(o)&&"function"!=typeof o?s(r):o,l(s(s(e)),"state",{picture:"",effect:"",name:"",stringSize:""}),l(s(s(e)),"print",function(){window.print()}),e}var e,i,p;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(n,r["Component"]),e=n,(i=[{key:"componentDidMount",value:function(){var t=new URLSearchParams(window.location.search);this.setState({picture:t.get("picture"),effect:t.get("effect"),name:t.get("name"),stringSize:t.get("effect").length>160?.6:1}),console.log(t.get("picture"),t.get("effect"),t.get("name")),console.log(t.get("effect").length)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{src:this.state.picture}),o.a.createElement(d,null,this.state.name),o.a.createElement(h,{size:this.state.stringSize},this.state.effect),o.a.createElement(g,{onClick:this.print},"Print"))}}])&&u(e.prototype,i),p&&u(e,p),n}()}},[[237,1,0]]]);