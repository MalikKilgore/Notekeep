!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=c(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:m(p,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var a=h++;n=b||(b=s(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=s(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"body {\n    background-color: #2b2c30;\n    overflow: hidden;\n}\n\n/*CSS Grid to autoflow. Min-1 Max-5. Auto resizes to fit viewport. */\n#projectContainer {\n    display: grid;\n    border: 3px solid rgb(255, 255, 255);\n    border-radius: 2px;\n    background-color: #919191;\n    width: auto;\n    height: auto;\n    grid-auto-flow: row;\n    \n}\n\n.projectDivs {\n    border: 3px solid black;\n    border-radius: 2px;\n    background-color: #3e4046;\n    width: 450px;\n    height: 500px;\n}\n\n.todoList {\n    border: 1px solid black;\n    width: 450px;\n    height: 125px;\n}\n\n/*Have color change if unreadable in certain backgrounds*/\n.projectTitles {\n    background: transparent;\n    color: white;\n    resize: none;\n    border: 0 none;\n    outline: none;\n    font-size: 18px;\n}\n\n.listTitles {\n    background: transparent;\n    color: black;\n    resize: none;\n    border: 0 none;\n    outline: none;\n    font-size: 16px;\n}\n\n.listDescs {\n    background: transparent;\n    color: black;\n    resize: none;\n    border: 0 none;\n    outline: none;\n    font-size: 12px;\n}\n\n.priority {\n    border: 1px solid black;\n    position: relative;\n}",""]),t.default=o},function(e,t,n){"use strict";n.r(t);const r={create:e=>{let t=document.createElement("div");t.className="todoList",t.style.backgroundColor="green",e.appendChild(t);let n=document.createElement("button");n.innerHTML="Change Priority",n.className="priority",n.addEventListener("click",(function(e){let t=this.parentNode;r.setPriority(t)}));let o=document.createElement("button");o.className="dltTask",o.innerHTML="Delete Task",o.addEventListener("click",(function(e){let t=this.parentNode;r.deleteTask(t)}));let a=document.createElement("textarea");a.className="listTitles",a.maxLength="25",a.rows="1",a.cols="25",a.placeholder=" Task Title... ";let i=document.createElement("br"),c=document.createElement("br"),l=document.createElement("textarea");l.className="listDescs",l.maxLength="240",l.rows="5",l.cols="55",l.placeholder=" Task description... ";let s=document.createElement("input");s.type="checkbox",s.className="checkbox",s.addEventListener("change",(function(e){let t=this.parentNode;this.checked?t.style.webkitFilter="brightness(50%)":t.style.webkitFilter="brightness(100%)"})),t.appendChild(a),t.appendChild(s),t.appendChild(i),t.appendChild(l),t.appendChild(c),t.appendChild(n),t.appendChild(o)},setPriority:e=>{switch(e.style.webkitFilter){case"brightness(50%)":break;case"brightness(100%)":switch(e.style.backgroundColor){case"red":e.style.backgroundColor="green";break;case"green":e.style.backgroundColor="yellow";break;case"yellow":e.style.backgroundColor="red"}break;default:switch(e.style.backgroundColor){case"red":e.style.backgroundColor="green";break;case"green":e.style.backgroundColor="yellow";break;case"yellow":e.style.backgroundColor="red"}}},deleteTask:e=>{e.remove()}},o=(()=>{let e=document.getElementById("projectContainer");return{create:()=>{let t=document.createElement("div");t.className="projectDivs";let n=document.createElement("button");n.className="newTask",n.innerHTML="New Task",n.addEventListener("click",(function(e){let t=this.parentNode;r.create(t)}));let a=document.createElement("textarea");a.className="projectTitles",a.maxLength="25",a.rows="1",a.cols="25",a.placeholder=" Project Title... ";let i=document.createElement("button");i.className="dltProj",i.innerHTML="Delete Project",i.addEventListener("click",(function(e){let t=this.parentNode;o.deleteProj(t)}));let c=document.createElement("br");t.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(n),e.appendChild(t)},deleteProj:e=>{e.remove()}}})();n(1);document.getElementById("newProject").addEventListener("click",(function(e){o.create()}));document.getElementById("defaultTask").addEventListener("click",(function(e){let t=this.parentNode;r.create(t)}));document.getElementById("defaultDlt").addEventListener("click",(function(e){let t=this.parentNode;o.deleteProj(t)}))}]);