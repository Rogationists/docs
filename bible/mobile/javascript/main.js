(function(a,b){function c(a){return g.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}function d(a){if(!ia[a]){var b=u.body,c=g("<"+a+">").appendTo(b),d=c.css("display");c.remove();if("none"===d||""===d){N||(N=u.createElement("iframe"),N.frameBorder=N.width=N.height=0);b.appendChild(N);if(!W||!N.createElement)W=(N.contentWindow||N.contentDocument).document,W.write((g.support.boxModel?"<!doctype html>":"")+"<html><body>"),W.close();c=W.createElement(a);W.body.appendChild(c);d=g.css(c,
"display");b.removeChild(N)}ia[a]=d}return ia[a]}function e(a,b){var c={};g.each(ba.concat.apply([],ba.slice(0,b)),function(){c[this]=a});return c}function f(){ca=b}function h(){setTimeout(f,0);return ca=g.now()}function j(){try{return new a.XMLHttpRequest}catch(b){}}function k(a,b,c,d){if(g.isArray(b))g.each(b,function(b,G){c||Wa.test(a)?d(a,G):k(a+"["+("object"==typeof G?b:"")+"]",G,c,d)});else if(!c&&"object"===g.type(b))for(var e in b)k(a+"["+e+"]",b[e],c,d);else d(a,b)}function l(a,c){var d,
e,f=g.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&g.extend(!0,a,e)}function r(a,c,d,e,g,f){g=g||c.dataTypes[0];f=f||{};f[g]=!0;for(var g=a[g],h=0,j=g?g.length:0,o=a===ja,k;h<j&&(o||!k);h++)k=g[h](c,d,e),"string"==typeof k&&(!o||f[k]?k=b:(c.dataTypes.unshift(k),k=r(a,c,d,e,k,f)));(o||!k)&&!f["*"]&&(k=r(a,c,d,e,"*",f));return k}function m(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");if(g.isFunction(c))for(var d=b.toLowerCase().split(wa),e=0,f=d.length,
h,j;e<f;e++)h=d[e],(j=/^\+/.test(h))&&(h=h.substr(1)||"*"),h=a[h]=a[h]||[],h[j?"unshift":"push"](c)}}function p(a,b,c){var d="width"===b?a.offsetWidth:a.offsetHeight,e="width"===b?1:0;if(0<d){if("border"!==c)for(;4>e;e+=2)c||(d-=parseFloat(g.css(a,"padding"+T[e]))||0),"margin"===c?d+=parseFloat(g.css(a,c+T[e]))||0:d-=parseFloat(g.css(a,"border"+T[e]+"Width"))||0;return d+"px"}d=X(a,b);if(0>d||null==d)d=a.style[b];if(ka.test(d))return d;d=parseFloat(d)||0;if(c)for(;4>e;e+=2)d+=parseFloat(g.css(a,"padding"+
T[e]))||0,"padding"!==c&&(d+=parseFloat(g.css(a,"border"+T[e]+"Width"))||0),"margin"===c&&(d+=parseFloat(g.css(a,c+T[e]))||0);return d+"px"}function w(a){var b=(a.nodeName||"").toLowerCase();"input"===b?n(a):"script"!==b&&"undefined"!=typeof a.getElementsByTagName&&g.grep(a.getElementsByTagName("input"),n)}function n(a){if("checkbox"===a.type||"radio"===a.type)a.defaultChecked=a.checked}function z(a){return"undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName("*"):"undefined"!=typeof a.querySelectorAll?
a.querySelectorAll("*"):[]}function t(a,b){var c;1===b.nodeType&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),"object"===c?b.outerHTML=a.outerHTML:"input"!==c||"checkbox"!==a.type&&"radio"!==a.type?"option"===c?b.selected=a.defaultSelected:"input"===c||"textarea"===c?b.defaultValue=a.defaultValue:"script"===c&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(g.expando),
b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function J(a,b){if(1===b.nodeType&&g.hasData(a)){var c,d,e;d=g._data(a);var f=g._data(b,d),h=d.events;if(h)for(c in delete f.handle,f.events={},h){d=0;for(e=h[c].length;d<e;d++)g.event.add(b,c,h[c][d])}f.data&&(f.data=g.extend({},f.data))}}function v(a){var b=xa.split("|"),a=a.createDocumentFragment();if(a.createElement)for(;b.length;)a.createElement(b.pop());return a}function s(a,b,c){b=b||0;if(g.isFunction(b))return g.grep(a,
function(a,d){return!!b.call(a,d,a)===c});if(b.nodeType)return g.grep(a,function(a){return a===b===c});if("string"==typeof b){var d=g.grep(a,function(a){return 1===a.nodeType});if(Xa.test(b))return g.filter(b,d,!c);b=g.filter(b,d)}return g.grep(a,function(a){return 0<=g.inArray(a,b)===c})}function x(){return!0}function y(){return!1}function I(a,b,c){var d=b+"defer",e=b+"queue",f=b+"mark",h=g._data(a,d);h&&("queue"===c||!g._data(a,e))&&("mark"===c||!g._data(a,f))&&setTimeout(function(){!g._data(a,
e)&&!g._data(a,f)&&(g.removeData(a,d,!0),h.fire())},0)}function K(a){for(var b in a)if(!("data"===b&&g.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function L(a,c,d){if(d===b&&1===a.nodeType)if(d="data-"+c.replace(o,"-$1").toLowerCase(),d=a.getAttribute(d),"string"==typeof d){try{d="true"===d?!0:"false"===d?!1:"null"===d?null:g.isNumeric(d)?+d:A.test(d)?g.parseJSON(d):d}catch(e){}g.data(a,c,d)}else d=b;return d}function R(a){var b=P[a]={},c,d,a=a.split(/\s+/);c=0;for(d=a.length;c<d;c++)b[a[c]]=
!0;return b}var u=a.document,M=a.navigator,D=a.location,g=function(){function c(){if(!d.isReady){try{u.documentElement.doScroll("left")}catch(a){setTimeout(c,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,f)},e=a.jQuery,g=a.$,f,h=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,o=/^\s+/,k=/\s+$/,l=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,m=/^[\],:{}\s]*$/,n=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,r=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,p=/(?:^|:|,)(?:\s*\[)+/g,A=
/(webkit)[ \/]([\w.]+)/,C=/(opera)(?:.*version)?[ \/]([\w.]+)/,s=/(msie) ([\w.]+)/,w=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,x=/^-ms-/,t=function(a,b){return(b+"").toUpperCase()},y=M.userAgent,ea,Y,Ya=Object.prototype.toString,ma=Object.prototype.hasOwnProperty,na=Array.prototype.push,aa=Array.prototype.slice,ya=String.prototype.trim,za=Array.prototype.indexOf,z={};d.fn=d.prototype={constructor:d,init:function(a,c,q){var e,g;if(!a)return this;if(a.nodeType)return this.context=this[0]=
a,this.length=1,this;if("body"===a&&!c&&u.body)return this.context=u,this[0]=u.body,this.selector=a,this.length=1,this;if("string"==typeof a){"<"!==a.charAt(0)||">"!==a.charAt(a.length-1)||3>a.length?e=h.exec(a):e=[null,a,null];if(e&&(e[1]||!c)){if(e[1])return g=(c=c instanceof d?c[0]:c)?c.ownerDocument||c:u,(q=l.exec(a))?d.isPlainObject(c)?(a=[u.createElement(q[1])],d.fn.attr.call(a,c,!0)):a=[g.createElement(q[1])]:(q=d.buildFragment([e[1]],[g]),a=(q.cacheable?d.clone(q.fragment):q.fragment).childNodes),
d.merge(this,a);if((c=u.getElementById(e[2]))&&c.parentNode){if(c.id!==e[2])return q.find(a);this.length=1;this[0]=c}this.context=u;this.selector=a;return this}return!c||c.jquery?(c||q).find(a):this.constructor(c).find(a)}if(d.isFunction(a))return q.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return aa.call(this,0)},get:function(a){return null==a?this.toArray():
0>a?this[this.length+a]:this[a]},pushStack:function(a,b,c){var q=this.constructor();d.isArray(a)?na.apply(q,a):d.merge(q,a);q.prevObject=this;q.context=this.context;"find"===b?q.selector=this.selector+(this.selector?" ":"")+c:b&&(q.selector=this.selector+"."+b+"("+c+")");return q},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady();ea.add(a);return this},eq:function(a){a=+a;return-1===a?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},
slice:function(){return this.pushStack(aa.apply(this,arguments),"slice",aa.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:na,sort:[].sort,splice:[].splice};d.fn.init.prototype=d.fn;d.extend=d.fn.extend=function(){var a,c,q,e,g,f,h=arguments[0]||{},B=1,j=arguments.length,H=!1;"boolean"==typeof h&&(H=h,h=arguments[1]||{},B=2);"object"!=typeof h&&!d.isFunction(h)&&
(h={});for(j===B&&(h=this,--B);B<j;B++)if(null!=(a=arguments[B]))for(c in a)q=h[c],e=a[c],h!==e&&(H&&e&&(d.isPlainObject(e)||(g=d.isArray(e)))?(g?(g=!1,f=q&&d.isArray(q)?q:[]):f=q&&d.isPlainObject(q)?q:{},h[c]=d.extend(H,f,e)):e!==b&&(h[c]=e));return h};d.extend({noConflict:function(b){a.$===d&&(a.$=g);b&&a.jQuery===d&&(a.jQuery=e);return d},isReady:!1,readyWait:1,holdReady:function(a){a?d.readyWait++:d.ready(!0)},ready:function(a){if(!0===a&&!--d.readyWait||!0!==a&&!d.isReady){if(!u.body)return setTimeout(d.ready,
1);d.isReady=!0;!0!==a&&0<--d.readyWait||(ea.fireWith(u,[d]),d.fn.trigger&&d(u).trigger("ready").off("ready"))}},bindReady:function(){if(!ea){ea=d.Callbacks("once memory");if("complete"===u.readyState)return setTimeout(d.ready,1);if(u.addEventListener)u.addEventListener("DOMContentLoaded",Y,!1),a.addEventListener("load",d.ready,!1);else if(u.attachEvent){u.attachEvent("onreadystatechange",Y);a.attachEvent("onload",d.ready);var b=!1;try{b=null==a.frameElement}catch(e){}u.documentElement.doScroll&&
b&&c()}}},isFunction:function(a){return"function"===d.type(a)},isArray:Array.isArray||function(a){return"array"===d.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?""+a:z[Ya.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==d.type(a)||a.nodeType||d.isWindow(a))return!1;try{if(a.constructor&&!ma.call(a,"constructor")&&!ma.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var q in a);
return q===b||ma.call(a,q)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw Error(a);},parseJSON:function(b){if("string"!=typeof b||!b)return null;b=d.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(m.test(b.replace(n,"@").replace(r,"]").replace(p,"")))return(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(c){if("string"!=typeof c||!c)return null;var q,e;try{a.DOMParser?(e=new DOMParser,q=e.parseFromString(c,"text/xml")):(q=
new ActiveXObject("Microsoft.XMLDOM"),q.async="false",q.loadXML(c))}catch(g){q=b}(!q||!q.documentElement||q.getElementsByTagName("parsererror").length)&&d.error("Invalid XML: "+c);return q},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(v,t)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,q){var e,g=0,f=a.length,h=f===b||d.isFunction(a);
if(q)if(h)for(e in a){if(!1===c.apply(a[e],q))break}else for(;g<f&&!1!==c.apply(a[g++],q););else if(h)for(e in a){if(!1===c.call(a[e],e,a[e]))break}else for(;g<f&&!1!==c.call(a[g],g,a[g++]););return a},trim:ya?function(a){return null==a?"":ya.call(a)}:function(a){return null==a?"":(a+"").replace(o,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(null!=a){var q=d.type(a);null==a.length||"string"===q||"function"===q||"regexp"===q||d.isWindow(a)?na.call(c,a):d.merge(c,a)}return c},inArray:function(a,
b,c){var d;if(b){if(za)return za.call(b,a,c);d=b.length;for(c=c?0>c?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,q=0;if("number"==typeof c.length)for(var e=c.length;q<e;q++)a[d++]=c[q];else for(;c[q]!==b;)a[d++]=c[q++];a.length=d;return a},grep:function(a,b,c){for(var d=[],q,c=!!c,e=0,g=a.length;e<g;e++)q=!!b(a[e],e),c!==q&&d.push(a[e]);return d},map:function(a,c,q){var e,g,f=[],h=0,B=a.length;if(a instanceof d||B!==b&&"number"==typeof B&&(0<
B&&a[0]&&a[B-1]||0===B||d.isArray(a)))for(;h<B;h++)e=c(a[h],h,q),null!=e&&(f[f.length]=e);else for(g in a)e=c(a[g],g,q),null!=e&&(f[f.length]=e);return f.concat.apply([],f)},guid:1,proxy:function(a,c){if("string"==typeof c)var q=a[c],c=a,a=q;if(!d.isFunction(a))return b;var e=aa.call(arguments,2),q=function(){return a.apply(c,e.concat(aa.call(arguments)))};q.guid=a.guid=a.guid||q.guid||d.guid++;return q},access:function(a,c,q,e,g,f,h){var B,j=null==q,H=0,o=a.length;if(q&&"object"==typeof q){for(H in q)d.access(a,
c,H,q[H],1,f,e);g=1}else if(e!==b){B=h===b&&d.isFunction(e);j&&(B?(B=c,c=function(a,b,c){return B.call(d(a),c)}):(c.call(a,e),c=null));if(c)for(;H<o;H++)c(a[H],q,B?e.call(a[H],H,c(a[H],q)):e,h);g=1}return g?a:j?c.call(a):o?c(a[0],q):f},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();a=A.exec(a)||C.exec(a)||s.exec(a)||0>a.indexOf("compatible")&&w.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,
a,this);a.superclass=this;a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(c,q){q&&q instanceof d&&!(q instanceof a)&&(q=a(q));return d.fn.init.call(this,c,q,b)};a.fn.init.prototype=a.fn;var b=a(u);return a},browser:{}});d.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","),function(a,b){z["[object "+b+"]"]=b.toLowerCase()});y=d.uaMatch(y);y.browser&&(d.browser[y.browser]=!0,d.browser.version=y.version);d.browser.webkit&&(d.browser.safari=!0);j.test("\u00a0")&&
(o=/^[\s\xA0]+/,k=/[\s\xA0]+$/);f=d(u);u.addEventListener?Y=function(){u.removeEventListener("DOMContentLoaded",Y,!1);d.ready()}:u.attachEvent&&(Y=function(){"complete"===u.readyState&&(u.detachEvent("onreadystatechange",Y),d.ready())});return d}(),P={};g.Callbacks=function(a){var a=a?P[a]||R(a):{},c=[],d=[],e,f,h,j,o,k,l=function(b){var d,e,f,h;d=0;for(e=b.length;d<e;d++)f=b[d],h=g.type(f),"array"===h?l(f):"function"===h&&(!a.unique||!n.has(f))&&c.push(f)},m=function(b,g){g=g||[];e=!a.memory||[b,
g];h=f=!0;k=j||0;j=0;for(o=c.length;c&&k<o;k++)if(!1===c[k].apply(b,g)&&a.stopOnFalse){e=!0;break}h=!1;c&&(a.once?!0===e?n.disable():c=[]:d&&d.length&&(e=d.shift(),n.fireWith(e[0],e[1])))},n={add:function(){if(c){var a=c.length;l(arguments);h?o=c.length:e&&!0!==e&&(j=a,m(e[0],e[1]))}return this},remove:function(){if(c)for(var b=arguments,d=0,e=b.length;d<e;d++)for(var g=0;g<c.length&&!(b[d]===c[g]&&(h&&g<=o&&(o--,g<=k&&k--),c.splice(g--,1),a.unique));g++);return this},has:function(a){if(c)for(var b=
0,d=c.length;b<d;b++)if(a===c[b])return!0;return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b;(!e||!0===e)&&n.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(h?a.once||d.push([b,c]):(!a.once||!e)&&m(b,c));return this},fire:function(){n.fireWith(this,arguments);return this},fired:function(){return!!f}};return n};var O=[].slice;g.extend({Deferred:function(a){var b=g.Callbacks("once memory"),
c=g.Callbacks("once memory"),d=g.Callbacks("memory"),e="pending",f={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){j.done(a).fail(b).progress(c);return this},always:function(){j.done.apply(j,arguments).fail.apply(j,arguments);return this},pipe:function(a,b,c){return g.Deferred(function(d){g.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],q=b[1],e;g.isFunction(c)?
j[a](function(){(e=c.apply(this,arguments))&&g.isFunction(e.promise)?e.promise().then(d.resolve,d.reject,d.notify):d[q+"With"](this===j?d:this,[e])}):j[a](d[q])})}).promise()},promise:function(a){if(null==a)a=h;else for(var b in h)a[b]=h[b];return a}},j=h.promise({}),o;for(o in f)j[o]=f[o].fire,j[o+"With"]=f[o].fireWith;j.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock);a&&a.call(j,j);return j},when:function(a){function b(a){return function(b){h[a]=1<
arguments.length?O.call(arguments,0):b;o.notifyWith(k,h)}}function c(a){return function(b){d[a]=1<arguments.length?O.call(arguments,0):b;--j||o.resolveWith(o,d)}}var d=O.call(arguments,0),e=0,f=d.length,h=Array(f),j=f,o=1>=f&&a&&g.isFunction(a.promise)?a:g.Deferred(),k=o.promise();if(1<f){for(;e<f;e++)d[e]&&d[e].promise&&g.isFunction(d[e].promise)?d[e].promise().then(c(e),o.reject,b(e)):--j;j||o.resolveWith(o,d)}else o!==a&&o.resolveWith(o,f?[a]:[]);return k}});g.support=function(){var b,c,d,e,f,
h,j,o,k=u.createElement("div");k.setAttribute("className","t");k.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";c=k.getElementsByTagName("*");d=k.getElementsByTagName("a")[0];if(!c||!c.length||!d)return{};e=u.createElement("select");f=e.appendChild(u.createElement("option"));c=k.getElementsByTagName("input")[0];b={leadingWhitespace:3===k.firstChild.nodeType,tbody:!k.getElementsByTagName("tbody").length,htmlSerialize:!!k.getElementsByTagName("link").length,
style:/top/.test(d.getAttribute("style")),hrefNormalized:"/a"===d.getAttribute("href"),opacity:/^0.55/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:"on"===c.value,optSelected:f.selected,getSetAttribute:"t"!==k.className,enctype:!!u.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==u.createElement("nav").cloneNode(!0).outerHTML,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,
pixelMargin:!0};g.boxModel=b.boxModel="CSS1Compat"===u.compatMode;c.checked=!0;b.noCloneChecked=c.cloneNode(!0).checked;e.disabled=!0;b.optDisabled=!f.disabled;try{delete k.test}catch(l){b.deleteExpando=!1}!k.addEventListener&&k.attachEvent&&k.fireEvent&&(k.attachEvent("onclick",function(){b.noCloneEvent=!1}),k.cloneNode(!0).fireEvent("onclick"));c=u.createElement("input");c.value="t";c.setAttribute("type","radio");b.radioValue="t"===c.value;c.setAttribute("checked","checked");c.setAttribute("name",
"t");k.appendChild(c);d=u.createDocumentFragment();d.appendChild(k.lastChild);b.checkClone=d.cloneNode(!0).cloneNode(!0).lastChild.checked;b.appendChecked=c.checked;d.removeChild(c);d.appendChild(k);if(k.attachEvent)for(j in{submit:1,change:1,focusin:1})c="on"+j,(o=c in k)||(k.setAttribute(c,"return;"),o="function"==typeof k[c]),b[j+"Bubbles"]=o;d.removeChild(k);d=e=f=k=c=null;g(function(){var c,d,e,G,f,j,B=u.getElementsByTagName("body")[0];!B||(c=u.createElement("div"),c.style.cssText="padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px",
B.insertBefore(c,B.firstChild),k=u.createElement("div"),c.appendChild(k),k.innerHTML="<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>",h=k.getElementsByTagName("td"),o=0===h[0].offsetHeight,h[0].style.display="",h[1].style.display="none",b.reliableHiddenOffsets=o&&0===h[0].offsetHeight,a.getComputedStyle&&(k.innerHTML="",j=u.createElement("div"),j.style.width="0",j.style.marginRight="0",k.style.width="2px",k.appendChild(j),b.reliableMarginRight=0===(parseInt((a.getComputedStyle(j,
null)||{marginRight:0}).marginRight,10)||0)),"undefined"!=typeof k.style.zoom&&(k.innerHTML="",k.style.width=k.style.padding="1px",k.style.border=0,k.style.overflow="hidden",k.style.display="inline",k.style.zoom=1,b.inlineBlockNeedsLayout=3===k.offsetWidth,k.style.display="block",k.style.overflow="visible",k.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=3!==k.offsetWidth),k.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;",
k.innerHTML="<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",d=k.firstChild,e=d.firstChild,G=d.nextSibling.firstChild.firstChild,f={doesNotAddBorder:5!==e.offsetTop,doesAddBorderForTableAndCells:5===
G.offsetTop},e.style.position="fixed",e.style.top="20px",f.fixedPosition=20===e.offsetTop||15===e.offsetTop,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",f.subtractsBorderForOverflowNotVisible=-5===e.offsetTop,f.doesNotIncludeMarginInBodyOffset=1!==B.offsetTop,a.getComputedStyle&&(k.style.marginTop="1%",b.pixelMargin="1%"!==(a.getComputedStyle(k,null)||{marginTop:0}).marginTop),"undefined"!=typeof c.style.zoom&&(c.style.zoom=1),B.removeChild(c),k=null,g.extend(b,
f))});return b}();var A=/^(?:\{.*\}|\[.*\])$/,o=/([A-Z])/g;g.extend({cache:{},uuid:0,expando:"jQuery"+(g.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?g.cache[a[g.expando]]:a[g.expando];return!!a&&!K(a)},data:function(a,c,d,e){if(g.acceptData(a)){var f,h;f=g.expando;var j="string"==typeof c,o=a.nodeType,k=o?g.cache:a,l=o?a[f]:a[f]&&f,n="events"===c;if(l&&k[l]&&(n||e||k[l].data)||!(j&&d===
b)){l||(o?a[f]=l=++g.uuid:l=f);k[l]||(k[l]={},o||(k[l].toJSON=g.noop));if("object"==typeof c||"function"==typeof c)e?k[l]=g.extend(k[l],c):k[l].data=g.extend(k[l].data,c);a=f=k[l];e||(f.data||(f.data={}),f=f.data);d!==b&&(f[g.camelCase(c)]=d);if(n&&!f[c])return a.events;j?(h=f[c],null==h&&(h=f[g.camelCase(c)])):h=f;return h}}},removeData:function(a,b,c){if(g.acceptData(a)){var d,e,f,h=g.expando,j=a.nodeType,o=j?g.cache:a,k=j?a[h]:h;if(o[k]){if(b&&(d=c?o[k]:o[k].data)){g.isArray(b)||(b in d?b=[b]:
(b=g.camelCase(b),b in d?b=[b]:b=b.split(" ")));e=0;for(f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:g.isEmptyObject)(d))return}if(!c&&(delete o[k].data,!K(o[k])))return;g.support.deleteExpando||!o.setInterval?delete o[k]:o[k]=null;j&&(g.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}}},_data:function(a,b,c){return g.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=g.noData[a.nodeName.toLowerCase()];if(b)return!0!==b&&a.getAttribute("classid")===b}return!0}});
g.fn.extend({data:function(a,c){var d,e,f,h,j,o=this[0],k=0,l=null;if(a===b){if(this.length&&(l=g.data(o),1===o.nodeType&&!g._data(o,"parsedAttrs"))){f=o.attributes;for(j=f.length;k<j;k++)h=f[k].name,0===h.indexOf("data-")&&(h=g.camelCase(h.substring(5)),L(o,h,l[h]));g._data(o,"parsedAttrs",!0)}return l}if("object"==typeof a)return this.each(function(){g.data(this,a)});d=a.split(".",2);d[1]=d[1]?"."+d[1]:"";e=d[1]+"!";return g.access(this,function(c){if(c===b)return l=this.triggerHandler("getData"+
e,[d[0]]),l===b&&o&&(l=g.data(o,a),l=L(o,a,l)),l===b&&d[1]?this.data(d[0]):l;d[1]=c;this.each(function(){var b=g(this);b.triggerHandler("setData"+e,d);g.data(this,a,c);b.triggerHandler("changeData"+e,d)})},null,c,1<arguments.length,null,!1)},removeData:function(a){return this.each(function(){g.removeData(this,a)})}});g.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",g._data(a,b,(g._data(a,b)||0)+1))},_unmark:function(a,b,c){!0!==a&&(c=b,b=a,a=!1);if(b){var c=c||"fx",d=c+"mark";(a=a?0:(g._data(b,
d)||1)-1)?g._data(b,d,a):(g.removeData(b,d,!0),I(b,c,"mark"))}},queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=g._data(a,b),c&&(!d||g.isArray(c)?d=g._data(a,b,g.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){var b=b||"fx",c=g.queue(a,b),d=c.shift(),e={};"inprogress"===d&&(d=c.shift());d&&("fx"===b&&c.unshift("inprogress"),g._data(a,b+".run",e),d.call(a,function(){g.dequeue(a,b)},e));c.length||(g.removeData(a,b+"queue "+b+".run",!0),I(a,b,"queue"))}});g.fn.extend({queue:function(a,
c){var d=2;"string"!=typeof a&&(c=a,a="fx",d--);return arguments.length<d?g.queue(this[0],a):c===b?this:this.each(function(){var b=g.queue(this,a,c);"fx"===a&&"inprogress"!==b[0]&&g.dequeue(this,a)})},dequeue:function(a){return this.each(function(){g.dequeue(this,a)})},delay:function(a,b){a=g.fx?g.fx.speeds[a]||a:a;return this.queue(b||"fx",function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function d(){--j||
e.resolveWith(f,[f])}"string"!=typeof a&&(c=a,a=b);for(var a=a||"fx",e=g.Deferred(),f=this,h=f.length,j=1,o=a+"defer",k=a+"queue",l=a+"mark",n;h--;)if(n=g.data(f[h],o,b,!0)||(g.data(f[h],k,b,!0)||g.data(f[h],l,b,!0))&&g.data(f[h],o,g.Callbacks("once memory"),!0))j++,n.add(d);d();return e.promise(c)}});var C=/[\n\t\r]/g,fa=/\s+/,Za=/\r/g,E=/^(?:button|input)$/i,$a=/^(?:button|input|object|select|textarea)$/i,ab=/^a(?:rea)?$/i,Aa=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
Ba=g.support.getSetAttribute,Q,Ca,Da;g.fn.extend({attr:function(a,b){return g.access(this,g.attr,a,b,1<arguments.length)},removeAttr:function(a){return this.each(function(){g.removeAttr(this,a)})},prop:function(a,b){return g.access(this,g.prop,a,b,1<arguments.length)},removeProp:function(a){a=g.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,h,j;if(g.isFunction(a))return this.each(function(b){g(this).addClass(a.call(this,b,this.className))});
if(a&&"string"==typeof a){b=a.split(fa);c=0;for(d=this.length;c<d;c++)if(e=this[c],1===e.nodeType)if(!e.className&&1===b.length)e.className=a;else{f=" "+e.className+" ";h=0;for(j=b.length;h<j;h++)~f.indexOf(" "+b[h]+" ")||(f+=b[h]+" ");e.className=g.trim(f)}}return this},removeClass:function(a){var c,d,e,f,h,j,o;if(g.isFunction(a))return this.each(function(b){g(this).removeClass(a.call(this,b,this.className))});if(a&&"string"==typeof a||a===b){c=(a||"").split(fa);d=0;for(e=this.length;d<e;d++)if(f=
this[d],1===f.nodeType&&f.className)if(a){h=(" "+f.className+" ").replace(C," ");j=0;for(o=c.length;j<o;j++)h=h.replace(" "+c[j]+" "," ");f.className=g.trim(h)}else f.className=""}return this},toggleClass:function(a,b){var c=typeof a,d="boolean"==typeof b;return g.isFunction(a)?this.each(function(c){g(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c)for(var e,f=0,h=g(this),j=b,o=a.split(fa);e=o[f++];)j=d?j:!h.hasClass(e),h[j?"addClass":"removeClass"](e);
else if("undefined"===c||"boolean"===c)this.className&&g._data(this,"__className__",this.className),this.className=this.className||!1===a?"":g._data(this,"__className__")||""})},hasClass:function(a){for(var a=" "+a+" ",b=0,c=this.length;b<c;b++)if(1===this[b].nodeType&&-1<(" "+this[b].className+" ").replace(C," ").indexOf(a))return!0;return!1},val:function(a){var c,d,e,f=this[0];if(arguments.length)return e=g.isFunction(a),this.each(function(d){var f=g(this),h;if(1===this.nodeType&&(e?h=a.call(this,
d,f.val()):h=a,null==h?h="":"number"==typeof h?h+="":g.isArray(h)&&(h=g.map(h,function(a){return a==null?"":a+""})),c=g.valHooks[this.type]||g.valHooks[this.nodeName.toLowerCase()],!c||!("set"in c)||c.set(this,h,"value")===b))this.value=h});if(f){if((c=g.valHooks[f.type]||g.valHooks[f.nodeName.toLowerCase()])&&"get"in c&&(d=c.get(f,"value"))!==b)return d;d=f.value;return"string"==typeof d?d.replace(Za,""):null==d?"":d}}});g.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||
b.specified?a.value:a.text}},select:{get:function(a){var b,c,d=a.selectedIndex,e=[],f=a.options,h="select-one"===a.type;if(0>d)return null;a=h?d:0;for(c=h?d+1:f.length;a<c;a++)if(b=f[a],b.selected&&(g.support.optDisabled?!b.disabled:null===b.getAttribute("disabled"))&&(!b.parentNode.disabled||!g.nodeName(b.parentNode,"optgroup"))){b=g(b).val();if(h)return b;e.push(b)}return h&&!e.length&&f.length?g(f[d]).val():e},set:function(a,b){var c=g.makeArray(b);g(a).find("option").each(function(){this.selected=
0<=g.inArray(g(this).val(),c)});c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var f,h,j=a.nodeType;if(a&&3!==j&&8!==j&&2!==j){if(e&&c in g.attrFn)return g(a)[c](d);if("undefined"==typeof a.getAttribute)return g.prop(a,c,d);(e=1!==j||!g.isXMLDoc(a))&&(c=c.toLowerCase(),h=g.attrHooks[c]||(Aa.test(c)?Ca:Q));if(d!==b){if(null===d){g.removeAttr(a,c);return}if(h&&"set"in h&&e&&(f=h.set(a,d,c))!==b)return f;a.setAttribute(c,
""+d);return d}if(h&&"get"in h&&e&&null!==(f=h.get(a,c)))return f;f=a.getAttribute(c);return null===f?b:f}},removeAttr:function(a,b){var c,d,e,f,h,j=0;if(b&&1===a.nodeType){d=b.toLowerCase().split(fa);for(f=d.length;j<f;j++)(e=d[j])&&(c=g.propFix[e]||e,h=Aa.test(e),h||g.attr(a,e,""),a.removeAttribute(Ba?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(E.test(a.nodeName)&&a.parentNode)g.error("type property can't be changed");else if(!g.support.radioValue&&"radio"===b&&g.nodeName(a,
"input")){var c=a.value;a.setAttribute("type",b);c&&(a.value=c);return b}}},value:{get:function(a,b){return Q&&g.nodeName(a,"button")?Q.get(a,b):b in a?a.value:null},set:function(a,b,c){if(Q&&g.nodeName(a,"button"))return Q.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},
prop:function(a,c,d){var e,f,h;h=a.nodeType;if(a&&3!==h&&8!==h&&2!==h)return(h=1!==h||!g.isXMLDoc(a))&&(c=g.propFix[c]||c,f=g.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&null!==(e=f.get(a,c))?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):$a.test(a.nodeName)||ab.test(a.nodeName)&&a.href?0:b}}}});g.attrHooks.tabindex=g.propHooks.tabIndex;Ca={get:function(a,c){var d,e=g.prop(a,c);return!0===
e||"boolean"!=typeof e&&(d=a.getAttributeNode(c))&&!1!==d.nodeValue?c.toLowerCase():b},set:function(a,b,c){var d;!1===b?g.removeAttr(a,c):(d=g.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}};Ba||(Da={name:!0,id:!0,coords:!0},Q=g.valHooks.button={get:function(a,c){var d;return(d=a.getAttributeNode(c))&&(Da[c]?""!==d.nodeValue:d.specified)?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);d||(d=u.createAttribute(c),a.setAttributeNode(d));return d.nodeValue=
b+""}},g.attrHooks.tabindex.set=Q.set,g.each(["width","height"],function(a,b){g.attrHooks[b]=g.extend(g.attrHooks[b],{set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}})}),g.attrHooks.contenteditable={get:Q.get,set:function(a,b,c){""===b&&(b="false");Q.set(a,b,c)}});g.support.hrefNormalized||g.each(["href","src","width","height"],function(a,c){g.attrHooks[c]=g.extend(g.attrHooks[c],{get:function(a){a=a.getAttribute(c,2);return null===a?b:a}})});g.support.style||(g.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||
b},set:function(a,b){return a.style.cssText=""+b}});g.support.optSelected||(g.propHooks.selected=g.extend(g.propHooks.selected,{get:function(a){a=a.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex);return null}}));g.support.enctype||(g.propFix.enctype="encoding");g.support.checkOn||g.each(["radio","checkbox"],function(){g.valHooks[this]={get:function(a){return null===a.getAttribute("value")?"on":a.value}}});g.each(["radio","checkbox"],function(){g.valHooks[this]=g.extend(g.valHooks[this],
{set:function(a,b){if(g.isArray(b))return a.checked=0<=g.inArray(g(a).val(),b)}})});var oa=/^(?:textarea|input|select)$/i,Ea=/^([^\.]*)?(?:\.(.+))?$/,bb=/(?:^|\s)hover(\.\S+)?\b/,cb=/^key/,db=/^(?:mouse|contextmenu)|click/,Fa=/^(?:focusinfocus|focusoutblur)$/,eb=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,fb=function(a){(a=eb.exec(a))&&(a[1]=(a[1]||"").toLowerCase(),a[3]=a[3]&&RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)"));return a},Ga=function(a){return g.event.special.hover?a:a.replace(bb,"mouseenter$1 mouseleave$1")};
g.event={add:function(a,c,d,e,f){var h,j,o,k,l,n,m,r,p;if(!(3===a.nodeType||8===a.nodeType||!c||!d||!(h=g._data(a)))){d.handler&&(m=d,d=m.handler,f=m.selector);d.guid||(d.guid=g.guid++);(o=h.events)||(h.events=o={});(j=h.handle)||(h.handle=j=function(a){return"undefined"!=typeof g&&(!a||g.event.triggered!==a.type)?g.event.dispatch.apply(j.elem,arguments):b},j.elem=a);c=g.trim(Ga(c)).split(" ");for(h=0;h<c.length;h++){k=Ea.exec(c[h])||[];l=k[1];n=(k[2]||"").split(".").sort();p=g.event.special[l]||
{};l=(f?p.delegateType:p.bindType)||l;p=g.event.special[l]||{};k=g.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,quick:f&&fb(f),namespace:n.join(".")},m);r=o[l];if(!r&&(r=o[l]=[],r.delegateCount=0,!p.setup||!1===p.setup.call(a,e,n,j)))a.addEventListener?a.addEventListener(l,j,!1):a.attachEvent&&a.attachEvent("on"+l,j);p.add&&(p.add.call(a,k),k.handler.guid||(k.handler.guid=d.guid));f?r.splice(r.delegateCount++,0,k):r.push(k);g.event.global[l]=!0}a=null}},global:{},remove:function(a,
b,c,d,e){var f=g.hasData(a)&&g._data(a),h,j,o,k,l,n,m,r,p,A,C;if(f&&(m=f.events)){b=g.trim(Ga(b||"")).split(" ");for(h=0;h<b.length;h++)if(j=Ea.exec(b[h])||[],o=k=j[1],j=j[2],o){r=g.event.special[o]||{};o=(d?r.delegateType:r.bindType)||o;A=m[o]||[];l=A.length;j=j?RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<A.length;n++)C=A[n],(e||k===C.origType)&&(!c||c.guid===C.guid)&&(!j||j.test(C.namespace))&&(!d||d===C.selector||"**"===d&&C.selector)&&(A.splice(n--,1),
C.selector&&A.delegateCount--,r.remove&&r.remove.call(a,C));0===A.length&&l!==A.length&&((!r.teardown||!1===r.teardown.call(a,j))&&g.removeEvent(a,o,f.handle),delete m[o])}else for(o in m)g.event.remove(a,o+b[h],c,d,!0);g.isEmptyObject(m)&&(p=f.handle,p&&(p.elem=null),g.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,f){if(!e||3!==e.nodeType&&8!==e.nodeType){var h=c.type||c,j=[],o,k,l,n,m,r;if(!Fa.test(h+g.event.triggered)&&(0<=h.indexOf("!")&&
(h=h.slice(0,-1),o=!0),0<=h.indexOf(".")&&(j=h.split("."),h=j.shift(),j.sort()),e&&!g.event.customEvent[h]||g.event.global[h]))if(c="object"==typeof c?c[g.expando]?c:new g.Event(h,c):new g.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=o,c.namespace=j.join("."),c.namespace_re=c.namespace?RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=0>h.indexOf(":")?"on"+h:"",e){if(c.result=b,c.target||(c.target=e),d=null!=d?g.makeArray(d):[],d.unshift(c),n=g.event.special[h]||{},!(n.trigger&&!1===n.trigger.apply(e,
d))){r=[[e,n.bindType||h]];if(!f&&!n.noBubble&&!g.isWindow(e)){k=n.delegateType||h;j=Fa.test(k+h)?e:e.parentNode;for(l=null;j;j=j.parentNode)r.push([j,k]),l=j;l&&l===e.ownerDocument&&r.push([l.defaultView||l.parentWindow||a,k])}for(k=0;k<r.length&&!c.isPropagationStopped();k++)j=r[k][0],c.type=r[k][1],(m=(g._data(j,"events")||{})[c.type]&&g._data(j,"handle"))&&m.apply(j,d),(m=o&&j[o])&&g.acceptData(j)&&!1===m.apply(j,d)&&c.preventDefault();c.type=h;!f&&!c.isDefaultPrevented()&&(!n._default||!1===
n._default.apply(e.ownerDocument,d))&&("click"!==h||!g.nodeName(e,"a"))&&g.acceptData(e)&&o&&e[h]&&("focus"!==h&&"blur"!==h||0!==c.target.offsetWidth)&&!g.isWindow(e)&&(l=e[o],l&&(e[o]=null),g.event.triggered=h,e[h](),g.event.triggered=b,l&&(e[o]=l));return c.result}}else for(k in e=g.cache,e)e[k].events&&e[k].events[h]&&g.event.trigger(c,d,e[k].handle.elem,!0)}},dispatch:function(c){var c=g.event.fix(c||a.event),d=(g._data(this,"events")||{})[c.type]||[],e=d.delegateCount,f=[].slice.call(arguments,
0),h=!c.exclusive&&!c.namespace,j=g.event.special[c.type]||{},o=[],k,l,n,m,r,p,A;f[0]=c;c.delegateTarget=this;if(!j.preDispatch||!1!==j.preDispatch.call(this,c)){if(e&&(!c.button||"click"!==c.type)){n=g(this);n.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this)if(!0!==l.disabled){r={};p=[];n[0]=l;for(k=0;k<e;k++){m=d[k];A=m.selector;if(r[A]===b){var C=r,s=A,w;if(m.quick){w=m.quick;var u=l.attributes||{};w=(!w[1]||l.nodeName.toLowerCase()===w[1])&&(!w[2]||(u.id||{}).value===
w[2])&&(!w[3]||w[3].test((u["class"]||{}).value))}else w=n.is(A);C[s]=w}r[A]&&p.push(m)}p.length&&o.push({elem:l,matches:p})}}d.length>e&&o.push({elem:this,matches:d.slice(e)});for(k=0;k<o.length&&!c.isPropagationStopped();k++){e=o[k];c.currentTarget=e.elem;for(d=0;d<e.matches.length&&!c.isImmediatePropagationStopped();d++)if(m=e.matches[d],h||!c.namespace&&!m.namespace||c.namespace_re&&c.namespace_re.test(m.namespace))c.data=m.data,c.handleObj=m,m=((g.event.special[m.origType]||{}).handle||m.handler).apply(e.elem,
f),m!==b&&(c.result=m,!1===m&&(c.preventDefault(),c.stopPropagation()))}j.postDispatch&&j.postDispatch.call(this,c);return c.result}},props:"attrChange,attrName,relatedNode,srcElement,altKey,bubbles,cancelable,ctrlKey,currentTarget,eventPhase,metaKey,relatedTarget,shiftKey,target,timeStamp,view,which".split(","),fixHooks:{},keyHooks:{props:["char","charCode","key","keyCode"],filter:function(a,b){null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button,buttons,clientX,clientY,fromElement,offsetX,offsetY,pageX,pageY,screenX,screenY,toElement".split(","),
filter:function(a,c){var d,e,g,f=c.button,h=c.fromElement;null==a.pageX&&null!=c.clientX&&(d=a.target.ownerDocument||u,e=d.documentElement,g=d.body,a.pageX=c.clientX+(e&&e.scrollLeft||g&&g.scrollLeft||0)-(e&&e.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(e&&e.scrollTop||g&&g.scrollTop||0)-(e&&e.clientTop||g&&g.clientTop||0));!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?c.toElement:h);!a.which&&f!==b&&(a.which=f&1?1:f&2?3:f&4?2:0);return a}},fix:function(a){if(a[g.expando])return a;var c,
d,e=a,f=g.event.fixHooks[a.type]||{},h=f.props?this.props.concat(f.props):this.props,a=g.Event(e);for(c=h.length;c;)d=h[--c],a[d]=e[d];a.target||(a.target=e.srcElement||u);3===a.target.nodeType&&(a.target=a.target.parentNode);a.metaKey===b&&(a.metaKey=a.ctrlKey);return f.filter?f.filter(a,e):a},special:{ready:{setup:g.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){g.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,
b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){a=g.extend(new g.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?g.event.trigger(a,null,b):g.event.dispatch.call(b,a);a.isDefaultPrevented()&&c.preventDefault()}};g.event.handle=g.event.dispatch;g.removeEvent=u.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)};g.Event=function(a,b){if(!(this instanceof g.Event))return new g.Event(a,
b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||!1===a.returnValue||a.getPreventDefault&&a.getPreventDefault()?x:y):this.type=a;b&&g.extend(this,b);this.timeStamp=a&&a.timeStamp||g.now();this[g.expando]=!0};g.Event.prototype={preventDefault:function(){this.isDefaultPrevented=x;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=x;var a=this.originalEvent;!a||(a.stopPropagation&&
a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=x;this.stopPropagation()},isDefaultPrevented:y,isPropagationStopped:y,isImmediatePropagationStopped:y};g.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){g.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=a.relatedTarget,d=a.handleObj,e;if(!c||c!==this&&!g.contains(this,c))a.type=d.origType,e=d.handler.apply(this,arguments),a.type=b;return e}}});g.support.submitBubbles||
(g.event.special.submit={setup:function(){if(g.nodeName(this,"form"))return!1;g.event.add(this,"click._submit keypress._submit",function(a){a=a.target;(a=g.nodeName(a,"input")||g.nodeName(a,"button")?a.form:b)&&!a._submit_attached&&(g.event.add(a,"submit._submit",function(a){a._submit_bubble=!0}),a._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&g.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(g.nodeName(this,
"form"))return!1;g.event.remove(this,"._submit")}});g.support.changeBubbles||(g.event.special.change={setup:function(){if(oa.test(this.nodeName)){if("checkbox"===this.type||"radio"===this.type)g.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),g.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,g.event.simulate("change",this,a,!0))});return!1}g.event.add(this,"beforeactivate._change",
function(a){a=a.target;oa.test(a.nodeName)&&!a._change_attached&&(g.event.add(a,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&g.event.simulate("change",this.parentNode,a,!0)}),a._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,arguments)},teardown:function(){g.event.remove(this,"._change");return oa.test(this.nodeName)}});g.support.focusinBubbles||
g.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){g.event.simulate(b,a.target,g.event.fix(a),!0)};g.event.special[b]={setup:function(){0===c++&&u.addEventListener(a,d,!0)},teardown:function(){0===--c&&u.removeEventListener(a,d,!0)}}});g.fn.extend({on:function(a,c,d,e,f){var h,j;if("object"==typeof a){"string"!=typeof c&&(d=d||c,c=b);for(j in a)this.on(j,c,d,a[j],f);return this}null==d&&null==e?(e=c,d=c=b):null==e&&("string"==typeof c?(e=d,d=b):(e=d,d=c,c=b));if(!1===e)e=
y;else if(!e)return this;1===f&&(h=e,e=function(a){g().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=g.guid++));return this.each(function(){g.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;g(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if("object"==typeof a){for(e in a)this.off(e,c,a[e]);return this}if(!1===c||"function"==
typeof c)d=c,c=b;!1===d&&(d=y);return this.each(function(){g.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){g(this.context).on(a,this.selector,b,c);return this},die:function(a,b){g(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1==arguments.length?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){g.event.trigger(a,
b,this)})},triggerHandler:function(a,b){if(this[0])return g.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||g.guid++,d=0,e=function(c){var e=(g._data(this,"lastToggle"+a.guid)||0)%d;g._data(this,"lastToggle"+a.guid,e+1);c.preventDefault();return b[e].apply(this,arguments)||!1};for(e.guid=c;d<b.length;)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});g.each("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(","),
function(a,b){g.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)};g.attrFn&&(g.attrFn[b]=true);cb.test(b)&&(g.event.fixHooks[b]=g.event.keyHooks);db.test(b)&&(g.event.fixHooks[b]=g.event.mouseHooks)});(function(){function a(b,c,d,g,f,h){for(var f=0,j=g.length;f<j;f++){var q=g[f];if(q){for(var o=!1,q=q[b];q;){if(q[e]===d){o=g[q.sizset];break}if(1===q.nodeType)if(h||(q[e]=d,q.sizset=f),"string"!=typeof c){if(q===c){o=!0;break}}else if(0<m.filter(c,
[q]).length){o=q;break}q=q[b]}g[f]=o}}}function c(a,b,d,g,f,h){for(var f=0,j=g.length;f<j;f++){var q=g[f];if(q){for(var o=!1,q=q[a];q;){if(q[e]===d){o=g[q.sizset];break}1===q.nodeType&&!h&&(q[e]=d,q.sizset=f);if(q.nodeName.toLowerCase()===b){o=q;break}q=q[a]}g[f]=o}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e="sizcache"+(Math.random()+"").replace(".",""),f=0,h=Object.prototype.toString,j=!1,o=!0,k=/\\/g,
l=/\r\n/g,n=/\W/;[0,0].sort(function(){o=!1;return 0});var m=function(a,b,c,e){var c=c||[],g=b=b||u;if(1!==b.nodeType&&9!==b.nodeType)return[];if(!a||"string"!=typeof a)return c;var f,j,q,o,k,G,l=!0,H=m.isXML(b),n=[],va=a;do if(d.exec(""),f=d.exec(va))if(va=f[3],n.push(f[1]),f[2]){o=f[3];break}while(f);if(1<n.length&&A.exec(a))if(2===n.length&&p.relative[n[0]])j=y(n[0]+n[1],b,e);else for(j=p.relative[n[0]]?[b]:m(n.shift(),b);n.length;)a=n.shift(),p.relative[a]&&(a+=n.shift()),j=y(a,j,e);else if(!e&&
1<n.length&&9===b.nodeType&&!H&&p.match.ID.test(n[0])&&!p.match.ID.test(n[n.length-1])&&(k=m.find(n.shift(),b,H),b=k.expr?m.filter(k.expr,k.set)[0]:k.set[0]),b){k=e?{expr:n.pop(),set:w(e)}:m.find(n.pop(),1===n.length&&("~"===n[0]||"+"===n[0])&&b.parentNode?b.parentNode:b,H);j=k.expr?m.filter(k.expr,k.set):k.set;for(0<n.length?q=w(j):l=!1;n.length;)f=G=n.pop(),p.relative[G]?f=n.pop():G="",null==f&&(f=b),p.relative[G](q,f,H)}else q=[];q||(q=j);q||m.error(G||a);if("[object Array]"===h.call(q))if(l)if(b&&
1===b.nodeType)for(a=0;null!=q[a];a++)q[a]&&(!0===q[a]||1===q[a].nodeType&&m.contains(b,q[a]))&&c.push(j[a]);else for(a=0;null!=q[a];a++)q[a]&&1===q[a].nodeType&&c.push(j[a]);else c.push.apply(c,q);else w(q,c);o&&(m(o,g,c,e),m.uniqueSort(c));return c};m.uniqueSort=function(a){if(x&&(j=o,a.sort(x),j))for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1);return a};m.matches=function(a,b){return m(a,null,null,b)};m.matchesSelector=function(a,b){return 0<m(b,null,null,[a]).length};m.find=function(a,
b,c){var d,e,g,f,h,q;if(!a)return[];e=0;for(g=p.order.length;e<g;e++)if(h=p.order[e],f=p.leftMatch[h].exec(a))if(q=f[1],f.splice(1,1),"\\"!==q.substr(q.length-1)&&(f[1]=(f[1]||"").replace(k,""),d=p.find[h](f,b,c),null!=d)){a=a.replace(p.match[h],"");break}d||(d="undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName("*"):[]);return{set:d,expr:a}};m.filter=function(a,c,d,e){for(var g,f,h,q,j,o,k,G,H=a,l=[],B=c,n=c&&c[0]&&m.isXML(c[0]);a&&c.length;){for(h in p.filter)if(null!=(g=p.leftMatch[h].exec(a))&&
g[2])if(o=p.filter[h],j=g[1],f=!1,g.splice(1,1),"\\"!==j.substr(j.length-1)){B===l&&(l=[]);if(p.preFilter[h])if(g=p.preFilter[h](g,B,d,l,e,n)){if(!0===g)continue}else f=q=!0;if(g)for(k=0;null!=(j=B[k]);k++)j&&(q=o(j,g,k,B),G=e^q,d&&null!=q?G?f=!0:B[k]=!1:G&&(l.push(j),f=!0));if(q!==b){d||(B=l);a=a.replace(p.match[h],"");if(!f)return[];break}}if(a===H)if(null==f)m.error(a);else break;H=a}return B};m.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};var r=m.getText=function(a){var b,
c;b=a.nodeType;var d="";if(b)if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;if("string"==typeof a.innerText)return a.innerText.replace(l,"");for(a=a.firstChild;a;a=a.nextSibling)d+=r(a)}else{if(3===b||4===b)return a.nodeValue}else for(b=0;c=a[b];b++)8!==c.nodeType&&(d+=r(c));return d},p=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},
type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c="string"==typeof b,d=c&&!n.test(b),c=c&&!d;d&&(b=b.toLowerCase());for(var d=0,e=a.length,g;d<e;d++)if(g=a[d]){for(;(g=g.previousSibling)&&1!==g.nodeType;);a[d]=c||g&&g.nodeName.toLowerCase()===b?g||!1:g===b}c&&m.filter(b,a,!0)},">":function(a,b){var c,d="string"==typeof b,e=0,g=a.length;if(d&&!n.test(b))for(b=b.toLowerCase();e<g;e++){if(c=a[e])c=c.parentNode,a[e]=c.nodeName.toLowerCase()===b?c:!1}else{for(;e<g;e++)(c=
a[e])&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(b,d,e){var g,h=f++,j=a;"string"==typeof d&&!n.test(d)&&(d=d.toLowerCase(),g=d,j=c);j("parentNode",d,h,b,g,e)},"~":function(b,d,e){var g,h=f++,j=a;"string"==typeof d&&!n.test(d)&&(d=d.toLowerCase(),g=d,j=c);j("previousSibling",d,h,b,g,e)}},find:{ID:function(a,b,c){if("undefined"!=typeof b.getElementById&&!c)return(a=b.getElementById(a[1]))&&a.parentNode?[a]:[]},NAME:function(a,b){if("undefined"!=typeof b.getElementsByName){for(var c=
[],d=b.getElementsByName(a[1]),e=0,g=d.length;e<g;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return 0===c.length?null:c}},TAG:function(a,b){if("undefined"!=typeof b.getElementsByTagName)return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,g){a=" "+a[1].replace(k,"")+" ";if(g)return a;for(var g=0,f;null!=(f=b[g]);g++)f&&(e^(f.className&&0<=(" "+f.className+" ").replace(/[\t\n\r]/g," ").indexOf(a))?c||d.push(f):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(k,
"")},TAG:function(a){return a[1].replace(k,"").toLowerCase()},CHILD:function(a){if("nth"===a[1]){a[2]||m.error(a[0]);a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===a[2]&&"2n"||"odd"===a[2]&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=f++;return a},ATTR:function(a,b,c,d,e,g){b=a[1]=a[1].replace(k,"");!g&&p.attrMap[b]&&(a[1]=p.attrMap[b]);a[4]=(a[4]||a[5]||"").replace(k,"");"~="===a[2]&&(a[4]=" "+a[4]+
" ");return a},PSEUDO:function(a,b,c,e,g){if("not"===a[1])if(1<(d.exec(a[3])||"").length||/^\w/.test(a[3]))a[3]=m(a[3],null,null,b);else return a=m.filter(a[3],b,c,1^g),c||e.push.apply(e,a),!1;else if(p.match.POS.test(a[0])||p.match.CHILD.test(a[0]))return!0;return a},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return!1===a.disabled&&"hidden"!==a.type},disabled:function(a){return!0===a.disabled},checked:function(a){return!0===a.checked},selected:function(a){a.parentNode&&
a.parentNode.selectedIndex;return!0===a.selected},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return"input"===a.nodeName.toLowerCase()&&"text"===c&&(b===c||null===b)},radio:function(a){return"input"===a.nodeName.toLowerCase()&&"radio"===a.type},checkbox:function(a){return"input"===a.nodeName.toLowerCase()&&"checkbox"===
a.type},file:function(a){return"input"===a.nodeName.toLowerCase()&&"file"===a.type},password:function(a){return"input"===a.nodeName.toLowerCase()&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"submit"===a.type},image:function(a){return"input"===a.nodeName.toLowerCase()&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return 0===b},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return 0===b%2},odd:function(a,b){return 1===b%2},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,
b,c,d){var e=b[1],g=p.filters[e];if(g)return g(a,c,b,d);if("contains"===e)return 0<=(a.textContent||a.innerText||r([a])||"").indexOf(b[3]);if("not"===e){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,d,g,f,h,q;c=b[1];q=a;switch(c){case "only":case "first":for(;q=q.previousSibling;)if(1===q.nodeType)return!1;if("first"===c)return!0;q=a;case "last":for(;q=q.nextSibling;)if(1===q.nodeType)return!1;return!0;case "nth":c=b[2];d=b[3];if(1===c&&0===
d)return!0;g=b[0];if((f=a.parentNode)&&(f[e]!==g||!a.nodeIndex)){h=0;for(q=f.firstChild;q;q=q.nextSibling)1===q.nodeType&&(q.nodeIndex=++h);f[e]=g}q=a.nodeIndex-d;return 0===c?0===q:0===q%c&&0<=q/c}},ID:function(a,b){return 1===a.nodeType&&a.getAttribute("id")===b},TAG:function(a,b){return"*"===b&&1===a.nodeType||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return-1<(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)},ATTR:function(a,b){var c=b[1],c=m.attr?m.attr(a,c):p.attrHandle[c]?
p.attrHandle[c](a):null!=a[c]?a[c]:a.getAttribute(c),d=c+"",e=b[2],g=b[4];return null==c?"!="===e:!e&&m.attr?null!=c:"="===e?d===g:"*="===e?0<=d.indexOf(g):"~="===e?0<=(" "+d+" ").indexOf(g):g?"!="===e?d!==g:"^="===e?0===d.indexOf(g):"$="===e?d.substr(d.length-g.length)===g:"|="===e?d===g||d.substr(0,g.length+1)===g+"-":!1:d&&!1!==c},POS:function(a,b,c,d){var e=p.setFilters[b[2]];if(e)return e(a,c,b,d)}}},A=p.match.POS,C=function(a,b){return"\\"+(b-0+1)},s;for(s in p.match)p.match[s]=RegExp(p.match[s].source+
/(?![^\[]*\])(?![^\(]*\))/.source),p.leftMatch[s]=RegExp(/(^(?:.|\r|\n)*?)/.source+p.match[s].source.replace(/\\(\d+)/g,C));p.match.globalPOS=A;var w=function(a,b){a=Array.prototype.slice.call(a,0);return b?(b.push.apply(b,a),b):a};try{Array.prototype.slice.call(u.documentElement.childNodes,0)[0].nodeType}catch(v){w=function(a,b){var c=0,d=b||[];if("[object Array]"===h.call(a))Array.prototype.push.apply(d,a);else if("number"==typeof a.length)for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);
return d}}var x,t;u.documentElement.compareDocumentPosition?x=function(a,b){return a===b?(j=!0,0):!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(x=function(a,b){if(a===b)return j=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],g=[];c=a.parentNode;d=b.parentNode;var f=c;if(c===d)return t(a,b);if(!c)return-1;if(!d)return 1;for(;f;)e.unshift(f),f=f.parentNode;for(f=d;f;)g.unshift(f),f=f.parentNode;
c=e.length;d=g.length;for(f=0;f<c&&f<d;f++)if(e[f]!==g[f])return t(e[f],g[f]);return f===c?t(a,g[f],-1):t(e[f],b,1)},t=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1});(function(){var a=u.createElement("div"),c="script"+(new Date).getTime(),d=u.documentElement;a.innerHTML="<a name='"+c+"'/>";d.insertBefore(a,d.firstChild);u.getElementById(c)&&(p.find.ID=function(a,c,d){if("undefined"!=typeof c.getElementById&&!d)return(c=c.getElementById(a[1]))?
c.id===a[1]||"undefined"!=typeof c.getAttributeNode&&c.getAttributeNode("id").nodeValue===a[1]?[c]:b:[]},p.filter.ID=function(a,b){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return 1===a.nodeType&&c&&c.nodeValue===b});d.removeChild(a);d=a=null})();(function(){var a=u.createElement("div");a.appendChild(u.createComment(""));0<a.getElementsByTagName("*").length&&(p.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if("*"===a[1]){for(var d=[],e=0;c[e];e++)1===c[e].nodeType&&
d.push(c[e]);c=d}return c});a.innerHTML="<a href='#'></a>";a.firstChild&&"undefined"!=typeof a.firstChild.getAttribute&&"#"!==a.firstChild.getAttribute("href")&&(p.attrHandle.href=function(a){return a.getAttribute("href",2)});a=null})();u.querySelectorAll&&function(){var a=m,b=u.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||0!==b.querySelectorAll(".TEST").length){m=function(b,c,d,e){c=c||u;if(!e&&!m.isXML(c)){var g=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(g&&
(1===c.nodeType||9===c.nodeType)){if(g[1])return w(c.getElementsByTagName(b),d);if(g[2]&&p.find.CLASS&&c.getElementsByClassName)return w(c.getElementsByClassName(g[2]),d)}if(9===c.nodeType){if("body"===b&&c.body)return w([c.body],d);if(g&&g[3]){var f=c.getElementById(g[3]);if(!f||!f.parentNode)return w([],d);if(f.id===g[3])return w([f],d)}try{return w(c.querySelectorAll(b),d)}catch(h){}}else if(1===c.nodeType&&"object"!==c.nodeName.toLowerCase()){var g=c,q=(f=c.getAttribute("id"))||"__sizzle__",j=
c.parentNode,o=/^\s*[+~]/.test(b);f?q=q.replace(/'/g,"\\$&"):c.setAttribute("id",q);o&&j&&(c=c.parentNode);try{if(!o||j)return w(c.querySelectorAll("[id='"+q+"'] "+b),d)}catch(k){}finally{f||g.removeAttribute("id")}}}return a(b,c,d,e)};for(var c in a)m[c]=a[c];b=null}}();(function(){var a=u.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var c=!b.call(u.createElement("div"),"div"),d=!1;try{b.call(u.documentElement,"[test!='']:sizzle")}catch(e){d=
!0}m.matchesSelector=function(a,e){e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(d||!p.match.PSEUDO.test(e)&&!/!=/.test(e)){var g=b.call(a,e);if(g||!c||a.document&&11!==a.document.nodeType)return g}}catch(f){}return 0<m(e,null,null,[a]).length}}})();(function(){var a=u.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";a.getElementsByClassName&&0!==a.getElementsByClassName("e").length&&(a.lastChild.className="e",1!==a.getElementsByClassName("e").length&&
(p.order.splice(1,0,"CLASS"),p.find.CLASS=function(a,b,c){if("undefined"!=typeof b.getElementsByClassName&&!c)return b.getElementsByClassName(a[1])},a=null))})();u.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:u.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1};m.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?"HTML"!==a.nodeName:!1};var y=
function(a,b,c){for(var d,e=[],g="",b=b.nodeType?[b]:b;d=p.match.PSEUDO.exec(a);)g+=d[0],a=a.replace(p.match.PSEUDO,"");a=p.relative[a]?a+"*":a;d=0;for(var f=b.length;d<f;d++)m(a,b[d],e,c);return m.filter(g,e)};m.attr=g.attr;m.selectors.attrMap={};g.find=m;g.expr=m.selectors;g.expr[":"]=g.expr.filters;g.unique=m.uniqueSort;g.text=m.getText;g.isXMLDoc=m.isXML;g.contains=m.contains})();var gb=/Until$/,hb=/^(?:parents|prevUntil|prevAll)/,ib=/,/,Xa=/^.[^:#\[\.,]*$/,jb=Array.prototype.slice,Ha=g.expr.match.globalPOS,
kb={children:!0,contents:!0,next:!0,prev:!0};g.fn.extend({find:function(a){var b=this,c,d;if("string"!=typeof a)return g(a).filter(function(){c=0;for(d=b.length;c<d;c++)if(g.contains(b[c],this))return!0});var e=this.pushStack("","find",a),f,h,j;c=0;for(d=this.length;c<d;c++)if(f=e.length,g.find(a,this[c],e),0<c)for(h=f;h<e.length;h++)for(j=0;j<f;j++)if(e[j]===e[h]){e.splice(h--,1);break}return e},has:function(a){var b=g(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(g.contains(this,
b[a]))return!0})},not:function(a){return this.pushStack(s(this,a,!1),"not",a)},filter:function(a){return this.pushStack(s(this,a,!0),"filter",a)},is:function(a){return!!a&&("string"==typeof a?Ha.test(a)?0<=g(a,this.context).index(this[0]):0<g.filter(a,this).length:0<this.filter(a).length)},closest:function(a,b){var c=[],d,e,f=this[0];if(g.isArray(a)){for(e=1;f&&f.ownerDocument&&f!==b;){for(d=0;d<a.length;d++)g(f).is(a[d])&&c.push({selector:a[d],elem:f,level:e});f=f.parentNode;e++}return c}var h=Ha.test(a)||
"string"!=typeof a?g(a,b||this.context):0;d=0;for(e=this.length;d<e;d++)for(f=this[d];f;){if(h?-1<h.index(f):g.find.matchesSelector(f,a)){c.push(f);break}f=f.parentNode;if(!f||!f.ownerDocument||f===b||11===f.nodeType)break}c=1<c.length?g.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){return!a?this[0]&&this[0].parentNode?this.prevAll().length:-1:"string"==typeof a?g.inArray(this[0],g(a)):g.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c="string"==typeof a?g(a,b):g.makeArray(a&&
a.nodeType?[a]:a),d=g.merge(this.get(),c);return this.pushStack(!c[0]||!c[0].parentNode||11===c[0].parentNode.nodeType||!d[0]||!d[0].parentNode||11===d[0].parentNode.nodeType?d:g.unique(d))},andSelf:function(){return this.add(this.prevObject)}});g.each({parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},parents:function(a){return g.dir(a,"parentNode")},parentsUntil:function(a,b,c){return g.dir(a,"parentNode",c)},next:function(a){return g.nth(a,2,"nextSibling")},prev:function(a){return g.nth(a,
2,"previousSibling")},nextAll:function(a){return g.dir(a,"nextSibling")},prevAll:function(a){return g.dir(a,"previousSibling")},nextUntil:function(a,b,c){return g.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return g.dir(a,"previousSibling",c)},siblings:function(a){return g.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return g.sibling(a.firstChild)},contents:function(a){return g.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:g.makeArray(a.childNodes)}},function(a,
b){g.fn[a]=function(c,d){var e=g.map(this,b,c);gb.test(a)||(d=c);d&&"string"==typeof d&&(e=g.filter(d,e));e=1<this.length&&!kb[a]?g.unique(e):e;(1<this.length||ib.test(d))&&hb.test(a)&&(e=e.reverse());return this.pushStack(e,a,jb.call(arguments).join(","))}});g.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return 1===b.length?g.find.matchesSelector(b[0],a)?[b[0]]:[]:g.find.matches(a,b)},dir:function(a,c,d){for(var e=[],a=a[c];a&&9!==a.nodeType&&(d===b||1!==a.nodeType||!g(a).is(d));)1===a.nodeType&&
e.push(a),a=a[c];return e},nth:function(a,b,c){for(var b=b||1,d=0;a&&!(1===a.nodeType&&++d===b);a=a[c]);return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var xa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",lb=/ jQuery\d+="(?:\d+|null)"/g,pa=/^\s+/,Ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Ja=/<([\w:]+)/,
mb=/<tbody/i,nb=/<|&#?\w+;/,ob=/<(?:script|style)/i,pb=/<(?:script|object|embed|option|style)/i,Ka=RegExp("<(?:"+xa+")[\\s/>]","i"),La=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=/\/(java|ecma)script/i,qb=/^\s*<!(?:\[CDATA\[|\-\-)/,F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
area:[1,"<map>","</map>"],_default:[0,"",""]},qa=v(u);F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;g.support.htmlSerialize||(F._default=[1,"div<div>","</div>"]);g.fn.extend({text:function(a){return g.access(this,function(a){return a===b?g.text(this):this.empty().append((this[0]&&this[0].ownerDocument||u).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(g.isFunction(a))return this.each(function(b){g(this).wrapAll(a.call(this,b))});if(this[0]){var b=
g(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return g.isFunction(a)?this.each(function(b){g(this).wrapInner(a.call(this,b))}):this.each(function(){var b=g(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=g.isFunction(a);return this.each(function(c){g(this).wrapAll(b?a.call(this,c):
a)})},unwrap:function(){return this.parent().each(function(){g.nodeName(this,"body")||g(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=
g.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,g.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;null!=(d=this[c]);c++)if(!a||g.filter(a,[d]).length)!b&&1===d.nodeType&&(g.cleanData(d.getElementsByTagName("*")),
g.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;null!=(b=this[a]);a++)for(1===b.nodeType&&g.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);return this},clone:function(a,b){a=null==a?!1:a;b=null==b?a:b;return this.map(function(){return g.clone(this,a,b)})},html:function(a){return g.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return 1===c.nodeType?c.innerHTML.replace(lb,""):null;if("string"==
typeof a&&!ob.test(a)&&(g.support.leadingWhitespace||!pa.test(a))&&!F[(Ja.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ia,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},1===c.nodeType&&(g.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(g.isFunction(a))return this.each(function(b){var c=g(this),d=c.html();c.replaceWith(a.call(this,b,d))});"string"!=typeof a&&(a=g(a).detach());
return this.each(function(){var b=this.nextSibling,c=this.parentNode;g(this).remove();b?g(b).before(a):g(c).append(a)})}return this.length?this.pushStack(g(g.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,f,h,j=a[0],o=[];if(!g.support.checkClone&&3===arguments.length&&"string"==typeof j&&La.test(j))return this.each(function(){g(this).domManip(a,c,d,!0)});if(g.isFunction(j))return this.each(function(e){var f=g(this);a[0]=j.call(this,
e,c?f.html():b);f.domManip(a,c,d)});if(this[0]){h=j&&j.parentNode;g.support.parentNode&&h&&11===h.nodeType&&h.childNodes.length===this.length?e={fragment:h}:e=g.buildFragment(a,this,o);h=e.fragment;1===h.childNodes.length?f=h=h.firstChild:f=h.firstChild;if(f){c=c&&g.nodeName(f,"tr");f=0;for(var k=this.length,l=k-1;f<k;f++)d.call(c?g.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):this[f]:this[f],e.cacheable||1<k&&
f<l?g.clone(h,!0,!0):h)}o.length&&g.each(o,function(a,b){b.src?g.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):g.globalEval((b.text||b.textContent||b.innerHTML||"").replace(qb,"/*$0*/"));b.parentNode&&b.parentNode.removeChild(b)})}return this}});g.buildFragment=function(a,b,c){var d,e,f,h,j=a[0];b&&b[0]&&(h=b[0].ownerDocument||b[0]);h.createDocumentFragment||(h=u);1===a.length&&"string"==typeof j&&512>j.length&&h===u&&"<"===j.charAt(0)&&!pb.test(j)&&(g.support.checkClone||!La.test(j))&&
(g.support.html5Clone||!Ka.test(j))&&(e=!0,f=g.fragments[j],f&&1!==f&&(d=f));d||(d=h.createDocumentFragment(),g.clean(a,h,d,c));e&&(g.fragments[j]=f?d:1);return{fragment:d,cacheable:e}};g.fragments={};g.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){g.fn[a]=function(c){var d=[],c=g(c),e=1===this.length&&this[0].parentNode;if(e&&11===e.nodeType&&1===e.childNodes.length&&1===c.length)return c[b](this[0]),this;for(var e=0,
f=c.length;e<f;e++){var h=(0<e?this.clone(!0):this).get();g(c[e])[b](h);d=d.concat(h)}return this.pushStack(d,a,c.selector)}});g.extend({clone:function(a,b,c){var d,e,f;g.support.html5Clone||g.isXMLDoc(a)||!Ka.test("<"+a.nodeName+">")?d=a.cloneNode(!0):(d=u.createElement("div"),qa.appendChild(d),d.innerHTML=a.outerHTML,d=d.firstChild);var h=d;if((!g.support.noCloneEvent||!g.support.noCloneChecked)&&(1===a.nodeType||11===a.nodeType)&&!g.isXMLDoc(a)){t(a,h);d=z(a);e=z(h);for(f=0;d[f];++f)e[f]&&t(d[f],
e[f])}if(b&&(J(a,h),c)){d=z(a);e=z(h);for(f=0;d[f];++f)J(d[f],e[f])}return h},clean:function(a,b,c,d){var e,f=[],b=b||u;"undefined"==typeof b.createElement&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||u);for(var h=0,j;null!=(j=a[h]);h++)if("number"==typeof j&&(j+=""),j){if("string"==typeof j)if(nb.test(j)){j=j.replace(Ia,"<$1></$2>");e=(Ja.exec(j)||["",""])[1].toLowerCase();var o=F[e]||F._default,k=o[0],l=b.createElement("div"),m=qa.childNodes,n;b===u?qa.appendChild(l):v(b).appendChild(l);for(l.innerHTML=
o[1]+j+o[2];k--;)l=l.lastChild;if(!g.support.tbody){k=mb.test(j);o="table"===e&&!k?l.firstChild&&l.firstChild.childNodes:"<table>"===o[1]&&!k?l.childNodes:[];for(e=o.length-1;0<=e;--e)g.nodeName(o[e],"tbody")&&!o[e].childNodes.length&&o[e].parentNode.removeChild(o[e])}!g.support.leadingWhitespace&&pa.test(j)&&l.insertBefore(b.createTextNode(pa.exec(j)[0]),l.firstChild);j=l.childNodes;l&&(l.parentNode.removeChild(l),0<m.length&&(n=m[m.length-1],n&&n.parentNode&&n.parentNode.removeChild(n)))}else j=
b.createTextNode(j);var r;if(!g.support.appendChecked)if(j[0]&&"number"==typeof(r=j.length))for(e=0;e<r;e++)w(j[e]);else w(j);j.nodeType?f.push(j):f=g.merge(f,j)}if(c){a=function(a){return!a.type||Ma.test(a.type)};for(h=0;f[h];h++)b=f[h],d&&g.nodeName(b,"script")&&(!b.type||Ma.test(b.type))?d.push(b.parentNode?b.parentNode.removeChild(b):b):(1===b.nodeType&&(j=g.grep(b.getElementsByTagName("script"),a),f.splice.apply(f,[h+1,0].concat(j))),c.appendChild(b))}return f},cleanData:function(a){for(var b,
c,d=g.cache,e=g.event.special,f=g.support.deleteExpando,h=0,j;null!=(j=a[h]);h++)if(!j.nodeName||!g.noData[j.nodeName.toLowerCase()])if(c=j[g.expando]){if((b=d[c])&&b.events){for(var o in b.events)e[o]?g.event.remove(j,o):g.removeEvent(j,o,b.handle);b.handle&&(b.handle.elem=null)}f?delete j[g.expando]:j.removeAttribute&&j.removeAttribute(g.expando);delete d[c]}}});var ra=/alpha\([^)]*\)/i,rb=/opacity=([^)]*)/,sb=/([A-Z]|^ms)/g,tb=/^[\-+]?(?:\d*\.)?\d+$/i,ka=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,ub=/^([\-+])=([\-+.\de]+)/,
vb=/^margin/,wb={position:"absolute",visibility:"hidden",display:"block"},T=["Top","Right","Bottom","Left"],X,Na,Oa;g.fn.css=function(a,c){return g.access(this,function(a,c,d){return d!==b?g.style(a,c,d):g.css(a,c)},a,c,1<arguments.length)};g.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=X(a,"opacity");return""===c?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":g.support.cssFloat?
"cssFloat":"styleFloat"},style:function(a,c,d,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,h=g.camelCase(c),j=a.style,o=g.cssHooks[h],c=g.cssProps[h]||h;if(d===b)return o&&"get"in o&&(f=o.get(a,!1,e))!==b?f:j[c];e=typeof d;"string"===e&&(f=ub.exec(d))&&(d=+(f[1]+1)*+f[2]+parseFloat(g.css(a,c)),e="number");if(!(null==d||"number"===e&&isNaN(d)))if("number"===e&&!g.cssNumber[h]&&(d+="px"),!o||!("set"in o)||(d=o.set(a,d))!==b)try{j[c]=d}catch(k){}}},css:function(a,c,d){var e,f,c=g.camelCase(c);
f=g.cssHooks[c];c=g.cssProps[c]||c;"cssFloat"===c&&(c="float");if(f&&"get"in f&&(e=f.get(a,!0,d))!==b)return e;if(X)return X(a,c)},swap:function(a,b,c){var d={},e;for(e in b)d[e]=a.style[e],a.style[e]=b[e];c=c.call(a);for(e in b)a.style[e]=d[e];return c}});g.curCSS=g.css;u.defaultView&&u.defaultView.getComputedStyle&&(Na=function(a,b){var c,d,e,f,h=a.style,b=b.replace(sb,"-$1").toLowerCase();(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),""===c&&!g.contains(a.ownerDocument.documentElement,
a)&&(c=g.style(a,b)));!g.support.pixelMargin&&e&&vb.test(b)&&ka.test(c)&&(f=h.width,h.width=c,c=e.width,h.width=f);return c});u.documentElement.currentStyle&&(Oa=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;null==f&&g&&(e=g[b])&&(f=e);ka.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left="fontSize"===b?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return""===f?"auto":f});X=Na||Oa;g.each(["height",
"width"],function(a,b){g.cssHooks[b]={get:function(a,c,d){if(c)return 0!==a.offsetWidth?p(a,b,d):g.swap(a,wb,function(){return p(a,b,d)})},set:function(a,b){return tb.test(b)?b+"px":b}}});g.support.opacity||(g.cssHooks.opacity={get:function(a,b){return rb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=g.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(1<=
b&&""===g.trim(f.replace(ra,""))&&(c.removeAttribute("filter"),d&&!d.filter))return;c.filter=ra.test(f)?f.replace(ra,e):f+" "+e}});g(function(){g.support.reliableMarginRight||(g.cssHooks.marginRight={get:function(a,b){return g.swap(a,{display:"inline-block"},function(){return b?X(a,"margin-right"):a.style.marginRight})}})});g.expr&&g.expr.filters&&(g.expr.filters.hidden=function(a){var b=a.offsetHeight;return 0===a.offsetWidth&&0===b||!g.support.reliableHiddenOffsets&&"none"===(a.style&&a.style.display||
g.css(a,"display"))},g.expr.filters.visible=function(a){return!g.expr.filters.hidden(a)});g.each({margin:"",padding:"",border:"Width"},function(a,b){g.cssHooks[a+b]={expand:function(c){for(var d="string"==typeof c?c.split(" "):[c],e={},c=0;4>c;c++)e[a+T[c]+b]=d[c]||d[c-2]||d[0];return e}}});var xb=/%20/g,Wa=/\[\]$/,Pa=/\r?\n/g,yb=/#.*$/,zb=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Ab=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Bb=/^(?:GET|HEAD)$/,
Cb=/^\/\//,Qa=/\?/,Db=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Eb=/^(?:select|textarea)/i,wa=/\s+/,Fb=/([?&])_=[^&]*/,Ra=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Sa=g.fn.load,ja={},Ta={},U,V,Ua=["*/"]+["*"];try{U=D.href}catch(Lb){U=u.createElement("a"),U.href="",U=U.href}V=Ra.exec(U.toLowerCase())||[];g.fn.extend({load:function(a,c,d){if("string"!=typeof a&&Sa)return Sa.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(0<=e)var f=a.slice(e,a.length),a=
a.slice(0,e);e="GET";c&&(g.isFunction(c)?(d=c,c=b):"object"==typeof c&&(c=g.param(c,g.ajaxSettings.traditional),e="POST"));var h=this;g.ajax({url:a,type:e,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText;a.isResolved()&&(a.done(function(a){c=a}),h.html(f?g("<div>").append(c.replace(Db,"")).find(f):c));d&&h.each(d,[c,b,a])}});return this},serialize:function(){return g.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?g.makeArray(this.elements):
this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Eb.test(this.nodeName)||Ab.test(this.type))}).map(function(a,b){var c=g(this).val();return null==c?null:g.isArray(c)?g.map(c,function(a){return{name:b.name,value:a.replace(Pa,"\r\n")}}):{name:b.name,value:c.replace(Pa,"\r\n")}}).get()}});g.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(a,b){g.fn[b]=function(a){return this.on(b,a)}});g.each(["get","post"],function(a,c){g[c]=function(a,
d,e,f){g.isFunction(d)&&(f=f||e,e=d,d=b);return g.ajax({type:c,url:a,data:d,success:e,dataType:f})}});g.extend({getScript:function(a,c){return g.get(a,b,c,"script")},getJSON:function(a,b,c){return g.get(a,b,c,"json")},ajaxSetup:function(a,b){b?l(a,g.ajaxSettings):(b=a,a=g.ajaxSettings);l(a,b);return a},ajaxSettings:{url:U,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(V[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,
async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Ua},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":g.parseJSON,"text xml":g.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:m(ja),ajaxTransport:m(Ta),ajax:function(a,c){function d(a,c,q,m){if(2!==u){u=2;w&&clearTimeout(w);C=b;p=m||"";t.readyState=0<a?4:
0;var n,r,G,m=c;if(q){var A=e,B=t,s=A.contents,v=A.dataTypes,y=A.responseFields,z,D,S,la;for(D in y)D in q&&(B[y[D]]=q[D]);for(;"*"===v[0];)v.shift(),z===b&&(z=A.mimeType||B.getResponseHeader("content-type"));if(z)for(D in s)if(s[D]&&s[D].test(z)){v.unshift(D);break}if(v[0]in q)S=v[0];else{for(D in q){if(!v[0]||A.converters[D+" "+v[0]]){S=D;break}la||(la=D)}S=S||la}S?(S!==v[0]&&v.unshift(S),q=q[S]):q=void 0}else q=b;if(200<=a&&300>a||304===a){if(e.ifModified){if(z=t.getResponseHeader("Last-Modified"))g.lastModified[l]=
z;if(z=t.getResponseHeader("Etag"))g.etag[l]=z}if(304===a)m="notmodified",n=!0;else try{z=e;z.dataFilter&&(q=z.dataFilter(q,z.dataType));var P=z.dataTypes;D={};var O,E,J=P.length,da,F=P[0],K,N,I,L,M;for(O=1;O<J;O++){if(1===O)for(E in z.converters)"string"==typeof E&&(D[E.toLowerCase()]=z.converters[E]);K=F;F=P[O];if("*"===F)F=K;else if("*"!==K&&K!==F){N=K+" "+F;I=D[N]||D["* "+F];if(!I)for(L in M=b,D)if(da=L.split(" "),da[0]===K||"*"===da[0])if(M=D[da[1]+" "+F]){L=D[L];!0===L?I=M:!0===M&&(I=L);break}!I&&
!M&&g.error("No conversion from "+N.replace(" "," to "));!0!==I&&(q=I?I(q):M(L(q)))}}r=q;m="success";n=!0}catch(Q){m="parsererror",G=Q}}else if(G=m,!m||a)m="error",0>a&&(a=0);t.status=a;t.statusText=""+(c||m);n?j.resolveWith(f,[r,m,t]):j.rejectWith(f,[t,m,G]);t.statusCode(k);k=b;x&&h.trigger("ajax"+(n?"Success":"Error"),[t,e,n?r:G]);o.fireWith(f,[t,m]);x&&(h.trigger("ajaxComplete",[t,e]),--g.active||g.event.trigger("ajaxStop"))}}"object"==typeof a&&(c=a,a=b);var c=c||{},e=g.ajaxSetup({},c),f=e.context||
e,h=f!==e&&(f.nodeType||f instanceof g)?g(f):g.event,j=g.Deferred(),o=g.Callbacks("once memory"),k=e.statusCode||{},l,m={},n={},p,A,C,w,s,u=0,x,v,t={readyState:0,setRequestHeader:function(a,b){if(!u){var c=a.toLowerCase(),a=n[c]=n[c]||a;m[a]=b}return this},getAllResponseHeaders:function(){return 2===u?p:null},getResponseHeader:function(a){var c;if(2===u){if(!A)for(A={};c=zb.exec(p);)A[c[1].toLowerCase()]=c[2];c=A[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){u||(e.mimeType=a);
return this},abort:function(a){a=a||"abort";C&&C.abort(a);d(0,a);return this}};j.promise(t);t.success=t.done;t.error=t.fail;t.complete=o.add;t.statusCode=function(a){if(a){var b;if(2>u)for(b in a)k[b]=[k[b],a[b]];else b=a[t.status],t.then(b,b)}return this};e.url=((a||e.url)+"").replace(yb,"").replace(Cb,V[1]+"//");e.dataTypes=g.trim(e.dataType||"*").toLowerCase().split(wa);null==e.crossDomain&&(s=Ra.exec(e.url.toLowerCase()),e.crossDomain=!(!s||s[1]==V[1]&&s[2]==V[2]&&(s[3]||("http:"===s[1]?80:443))==
(V[3]||("http:"===V[1]?80:443))));e.data&&e.processData&&"string"!=typeof e.data&&(e.data=g.param(e.data,e.traditional));r(ja,e,c,t);if(2===u)return!1;x=e.global;e.type=e.type.toUpperCase();e.hasContent=!Bb.test(e.type);x&&0===g.active++&&g.event.trigger("ajaxStart");if(!e.hasContent&&(e.data&&(e.url+=(Qa.test(e.url)?"&":"?")+e.data,delete e.data),l=e.url,!1===e.cache)){s=g.now();var y=e.url.replace(Fb,"$1_="+s);e.url=y+(y===e.url?(Qa.test(e.url)?"&":"?")+"_="+s:"")}(e.data&&e.hasContent&&!1!==e.contentType||
c.contentType)&&t.setRequestHeader("Content-Type",e.contentType);e.ifModified&&(l=l||e.url,g.lastModified[l]&&t.setRequestHeader("If-Modified-Since",g.lastModified[l]),g.etag[l]&&t.setRequestHeader("If-None-Match",g.etag[l]));t.setRequestHeader("Accept",e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+("*"!==e.dataTypes[0]?", "+Ua+"; q=0.01":""):e.accepts["*"]);for(v in e.headers)t.setRequestHeader(v,e.headers[v]);if(e.beforeSend&&(!1===e.beforeSend.call(f,t,e)||2===u))return t.abort(),
!1;for(v in{success:1,error:1,complete:1})t[v](e[v]);if(C=r(Ta,e,c,t)){t.readyState=1;x&&h.trigger("ajaxSend",[t,e]);e.async&&0<e.timeout&&(w=setTimeout(function(){t.abort("timeout")},e.timeout));try{u=1,C.send(m,d)}catch(z){if(2>u)d(-1,z);else throw z;}}else d(-1,"No Transport");return t},param:function(a,c){var d=[],e=function(a,b){b=g.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=g.ajaxSettings.traditional);if(g.isArray(a)||a.jquery&&!g.isPlainObject(a))g.each(a,
function(){e(this.name,this.value)});else for(var f in a)k(f,a[f],c,e);return d.join("&").replace(xb,"+")}});g.extend({active:0,lastModified:{},etag:{}});var Gb=g.now(),ga=/(\=)\?(&|$)|\?\?/i;g.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return g.expando+"_"+Gb++}});g.ajaxPrefilter("json jsonp",function(b,c,d){c="string"==typeof b.data&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if("jsonp"===b.dataTypes[0]||!1!==b.jsonp&&(ga.test(b.url)||c&&ga.test(b.data))){var e,f=b.jsonpCallback=
g.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[f],j=b.url,o=b.data,k="$1"+f+"$2";!1!==b.jsonp&&(j=j.replace(ga,k),b.url===j&&(c&&(o=o.replace(ga,k)),b.data===o&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+f)));b.url=j;b.data=o;a[f]=function(a){e=[a]};d.always(function(){a[f]=h;e&&g.isFunction(h)&&a[f](e[0])});b.converters["script json"]=function(){e||g.error(f+" was not called");return e[0]};b.dataTypes[0]="json";return"script"}});g.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){g.globalEval(a);return a}}});g.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1);a.crossDomain&&(a.type="GET",a.global=!1)});g.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=u.head||u.getElementsByTagName("head")[0]||u.documentElement;return{send:function(e,f){c=u.createElement("script");c.async="async";a.scriptCharset&&(c.charset=a.scriptCharset);c.src=a.url;c.onload=c.onreadystatechange=function(a,
e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||f(200,"success")};d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var sa=a.ActiveXObject?function(){for(var a in Z)Z[a](0,1)}:!1,Hb=0,Z;g.ajaxSettings.xhr=a.ActiveXObject?function(){var b;if(!(b=!this.isLocal&&j()))a:{try{b=new a.ActiveXObject("Microsoft.XMLHTTP");break a}catch(c){}b=void 0}return b}:j;(function(a){g.extend(g.support,{ajax:!!a,
cors:!!a&&"withCredentials"in a})})(g.ajaxSettings.xhr());g.support.ajax&&g.ajaxTransport(function(c){if(!c.crossDomain||g.support.cors){var d;return{send:function(e,f){var h=c.xhr(),j,o;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(o in c.xhrFields)h[o]=c.xhrFields[o];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType);!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(o in e)h.setRequestHeader(o,
e[o])}catch(k){}h.send(c.hasContent&&c.data||null);d=function(a,e){var o,k,l,m,n;try{if(d&&(e||4===h.readyState))if(d=b,j&&(h.onreadystatechange=g.noop,sa&&delete Z[j]),e)4!==h.readyState&&h.abort();else{o=h.status;l=h.getAllResponseHeaders();m={};(n=h.responseXML)&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(r){}try{k=h.statusText}catch(p){k=""}!o&&c.isLocal&&!c.crossDomain?o=m.text?200:404:1223===o&&(o=204)}}catch(A){e||f(-1,A)}m&&f(o,k,m,l)};!c.async||4===h.readyState?d():(j=++Hb,
sa&&(Z||(Z={},g(a).unload(sa)),Z[j]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ia={},N,W,Ib=/^(?:toggle|show|hide)$/,Jb=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ha,ba=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],ca;g.fn.extend({show:function(a,b,c){var f;if(a||0===a)return this.animate(e("show",3),a,b,c);b=0;for(c=this.length;b<c;b++)a=this[b],a.style&&(f=a.style.display,!g._data(a,
"olddisplay")&&"none"===f&&(f=a.style.display=""),(""===f&&"none"===g.css(a,"display")||!g.contains(a.ownerDocument.documentElement,a))&&g._data(a,"olddisplay",d(a.nodeName)));for(b=0;b<c;b++)if(a=this[b],a.style&&(f=a.style.display,""===f||"none"===f))a.style.display=g._data(a,"olddisplay")||"";return this},hide:function(a,b,c){if(a||0===a)return this.animate(e("hide",3),a,b,c);for(var d,b=0,c=this.length;b<c;b++)a=this[b],a.style&&(d=g.css(a,"display"),"none"!==d&&!g._data(a,"olddisplay")&&g._data(a,
"olddisplay",d));for(b=0;b<c;b++)this[b].style&&(this[b].style.display="none");return this},_toggle:g.fn.toggle,toggle:function(a,b,c){var d="boolean"==typeof a;g.isFunction(a)&&g.isFunction(b)?this._toggle.apply(this,arguments):null==a||d?this.each(function(){var b=d?a:g(this).is(":hidden");g(this)[b?"show":"hide"]()}):this.animate(e("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,
b,c,e){function f(){!1===h.queue&&g._mark(this);var b=g.extend({},h),c=1===this.nodeType,e=c&&g(this).is(":hidden"),j,o,k,l,m,n,r,p,A;b.animatedProperties={};for(k in a)if(j=g.camelCase(k),k!==j&&(a[j]=a[k],delete a[k]),(o=g.cssHooks[j])&&"expand"in o)for(k in l=o.expand(a[j]),delete a[j],l)k in a||(a[k]=l[k]);for(j in a){o=a[j];g.isArray(o)?(b.animatedProperties[j]=o[1],o=a[j]=o[0]):b.animatedProperties[j]=b.specialEasing&&b.specialEasing[j]||b.easing||"swing";if("hide"===o&&e||"show"===o&&!e)return b.complete.call(this);
c&&("height"===j||"width"===j)&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===g.css(this,"display")&&"none"===g.css(this,"float")&&(!g.support.inlineBlockNeedsLayout||"inline"===d(this.nodeName)?this.style.display="inline-block":this.style.zoom=1))}null!=b.overflow&&(this.style.overflow="hidden");for(k in a)c=new g.fx(this,b,k),o=a[k],Ib.test(o)?(A=g._data(this,"toggle"+k)||("toggle"===o?e?"show":"hide":0),A?(g._data(this,"toggle"+k,"show"===A?"hide":"show"),
c[A]()):c[o]()):(m=Jb.exec(o),n=c.cur(),m?(r=parseFloat(m[2]),p=m[3]||(g.cssNumber[k]?"":"px"),"px"!==p&&(g.style(this,k,(r||1)+p),n*=(r||1)/c.cur(),g.style(this,k,n+p)),m[1]&&(r=("-="===m[1]?-1:1)*r+n),c.custom(n,r,p)):c.custom(n,o,""));return!0}var h=g.speed(b,c,e);if(g.isEmptyObject(a))return this.each(h.complete,[!1]);a=g.extend({},a);return!1===h.queue?this.each(f):this.queue(h.queue,f)},stop:function(a,c,d){"string"!=typeof a&&(d=c,c=a,a=b);c&&!1!==a&&this.queue(a||"fx",[]);return this.each(function(){var b,
c=!1,e=g.timers,f=g._data(this);d||g._unmark(!0,this);if(null==a)for(b in f){if(f[b]&&f[b].stop&&b.indexOf(".run")===b.length-4){var h=f[b];g.removeData(this,b,!0);h.stop(d)}}else if(f[b=a+".run"]&&f[b].stop)f=f[b],g.removeData(this,b,!0),f.stop(d);for(b=e.length;b--;)e[b].elem===this&&(null==a||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&g.dequeue(this,a)})}});g.each({slideDown:e("show",1),slideUp:e("hide",1),slideToggle:e("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}},function(a,b){g.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}});g.extend({speed:function(a,b,c){var d=a&&"object"==typeof a?g.extend({},a):{complete:c||!c&&b||g.isFunction(a)&&a,duration:a,easing:c&&b||b&&!g.isFunction(b)&&b};d.duration=g.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in g.fx.speeds?g.fx.speeds[d.duration]:g.fx.speeds._default;if(null==d.queue||!0===d.queue)d.queue="fx";d.old=d.complete;d.complete=function(a){g.isFunction(d.old)&&d.old.call(this);
d.queue?g.dequeue(this,d.queue):!1!==a&&g._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+0.5}},timers:[],fx:function(a,b,c){this.options=b;this.elem=a;this.prop=c;b.orig=b.orig||{}}});g.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(g.fx.step[this.prop]||g.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];
var a,b=g.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||"auto"===b?0:b:a},custom:function(a,c,d){function e(a){return f.step(a)}var f=this,j=g.fx;this.startTime=ca||h();this.end=c;this.now=this.start=a;this.pos=this.state=0;this.unit=d||this.unit||(g.cssNumber[this.prop]?"":"px");e.queue=this.options.queue;e.elem=this.elem;e.saveState=function(){g._data(f.elem,"fxshow"+f.prop)===b&&(f.options.hide?g._data(f.elem,"fxshow"+f.prop,f.start):f.options.show&&g._data(f.elem,"fxshow"+f.prop,
f.end))};e()&&g.timers.push(e)&&!ha&&(ha=setInterval(j.tick,j.interval))},show:function(){var a=g._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||g.style(this.elem,this.prop);this.options.show=!0;a!==b?this.custom(this.cur(),a):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur());g(this.elem).show()},hide:function(){this.options.orig[this.prop]=g._data(this.elem,"fxshow"+this.prop)||g.style(this.elem,this.prop);this.options.hide=!0;this.custom(this.cur(),0)},step:function(a){var b,
c,d=ca||h(),e=!0,f=this.elem,j=this.options;if(a||d>=j.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();j.animatedProperties[this.prop]=!0;for(b in j.animatedProperties)!0!==j.animatedProperties[b]&&(e=!1);if(e){null!=j.overflow&&!g.support.shrinkWrapBlocks&&g.each(["","X","Y"],function(a,b){f.style["overflow"+b]=j.overflow[a]});j.hide&&g(f).hide();if(j.hide||j.show)for(b in j.animatedProperties)g.style(f,b,j.orig[b]),g.removeData(f,"fxshow"+b,!0),g.removeData(f,"toggle"+
b,!0);(a=j.complete)&&(j.complete=!1,a.call(f))}return!1}Infinity==j.duration?this.now=d:(c=d-this.startTime,this.state=c/j.duration,this.pos=g.easing[j.animatedProperties[this.prop]](this.state,c,0,1,j.duration),this.now=this.start+(this.end-this.start)*this.pos);this.update();return!0}};g.extend(g.fx,{tick:function(){for(var a,b=g.timers,c=0;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||g.fx.stop()},interval:13,stop:function(){clearInterval(ha);ha=null},speeds:{slow:600,fast:200,
_default:400},step:{opacity:function(a){g.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&null!=a.elem.style[a.prop]?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}});g.each(ba.concat.apply([],ba),function(a,b){b.indexOf("margin")&&(g.fx.step[b]=function(a){g.style(a.elem,b,Math.max(0,a.now)+a.unit)})});g.expr&&g.expr.filters&&(g.expr.filters.animated=function(a){return g.grep(g.timers,function(b){return a===b.elem}).length});var ta,Kb=/^t(?:able|d|h)$/i,Va=/^(?:body|html)$/i;
"getBoundingClientRect"in u.documentElement?ta=function(a,b,d,e){try{e=a.getBoundingClientRect()}catch(f){}if(!e||!g.contains(d,a))return e?{top:e.top,left:e.left}:{top:0,left:0};a=b.body;b=c(b);return{top:e.top+(b.pageYOffset||g.support.boxModel&&d.scrollTop||a.scrollTop)-(d.clientTop||a.clientTop||0),left:e.left+(b.pageXOffset||g.support.boxModel&&d.scrollLeft||a.scrollLeft)-(d.clientLeft||a.clientLeft||0)}}:ta=function(a,b,c){var d,e=a.offsetParent,f=b.body;d=(b=b.defaultView)?b.getComputedStyle(a,
null):a.currentStyle;for(var h=a.offsetTop,j=a.offsetLeft;(a=a.parentNode)&&a!==f&&a!==c&&!(g.support.fixedPosition&&"fixed"===d.position);)d=b?b.getComputedStyle(a,null):a.currentStyle,h-=a.scrollTop,j-=a.scrollLeft,a===e&&(h+=a.offsetTop,j+=a.offsetLeft,g.support.doesNotAddBorder&&(!g.support.doesAddBorderForTableAndCells||!Kb.test(a.nodeName))&&(h+=parseFloat(d.borderTopWidth)||0,j+=parseFloat(d.borderLeftWidth)||0),e=a.offsetParent),g.support.subtractsBorderForOverflowNotVisible&&"visible"!==
d.overflow&&(h+=parseFloat(d.borderTopWidth)||0,j+=parseFloat(d.borderLeftWidth)||0);if("relative"===d.position||"static"===d.position)h+=f.offsetTop,j+=f.offsetLeft;g.support.fixedPosition&&"fixed"===d.position&&(h+=Math.max(c.scrollTop,f.scrollTop),j+=Math.max(c.scrollLeft,f.scrollLeft));return{top:h,left:j}};g.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){g.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;return!d?null:c===d.body?g.offset.bodyOffset(c):
ta(c,d,d.documentElement)};g.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;g.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(g.css(a,"marginTop"))||0,c+=parseFloat(g.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=g.css(a,"position");"static"===d&&(a.style.position="relative");var e=g(a),f=e.offset(),h=g.css(a,"top"),j=g.css(a,"left"),o={},k={},l,m;("absolute"===d||"fixed"===d)&&-1<g.inArray("auto",[h,j])?(k=e.position(),l=k.top,m=k.left):
(l=parseFloat(h)||0,m=parseFloat(j)||0);g.isFunction(b)&&(b=b.call(a,c,f));null!=b.top&&(o.top=b.top-f.top+l);null!=b.left&&(o.left=b.left-f.left+m);"using"in b?b.using.call(a,o):e.css(o)}};g.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=Va.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(g.css(a,"marginTop"))||0;c.left-=parseFloat(g.css(a,"marginLeft"))||0;d.top+=parseFloat(g.css(b[0],"borderTopWidth"))||0;d.left+=parseFloat(g.css(b[0],
"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||u.body;a&&!Va.test(a.nodeName)&&"static"===g.css(a,"position");)a=a.offsetParent;return a})}});g.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,d){var e=/Y/.test(d);g.fn[a]=function(f){return g.access(this,function(a,f,h){var j=c(a);if(h===b)return j?d in j?j[d]:g.support.boxModel&&j.document.documentElement[f]||j.document.body[f]:a[f];
j?j.scrollTo(e?g(j).scrollLeft():h,e?h:g(j).scrollTop()):a[f]=h},a,f,arguments.length,null)}});g.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,f="offset"+a;g.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(g.css(a,c,"padding")):this[c]():null};g.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(g.css(b,c,a?"margin":"border")):this[c]():null};g.fn[c]=function(a){return g.access(this,function(a,c,h){if(g.isWindow(a))return c=a.document,
a=c.documentElement[d],g.support.boxModel&&a||c.body&&c.body[d]||a;if(9===a.nodeType)return c=a.documentElement,c[d]>=c[e]?c[d]:Math.max(a.body[e],c[e],a.body[f],c[f]);if(h===b)return a=g.css(a,c),c=parseFloat(a),g.isNumeric(c)?c:a;g(a).css(c,h)},c,a,arguments.length,null)}});a.jQuery=a.$=g;"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return g})})(window);jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b+c:
d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/
e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:1>(b/=e/2)?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*
b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return 1>(b/=e/2)?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var a=1.70158,f=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;f||(f=0.3*e);h<Math.abs(d)?(h=d,a=f/4):a=f/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-a)*2*Math.PI/f))+c},easeOutElastic:function(a,b,c,d,e){var a=1.70158,f=0,h=d;if(0==b)return c;if(1==
(b/=e))return c+d;f||(f=0.3*e);h<Math.abs(d)?(h=d,a=f/4):a=f/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-a)*2*Math.PI/f)+d+c},easeInOutElastic:function(a,b,c,d,e){var a=1.70158,f=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;f||(f=e*0.3*1.5);h<Math.abs(d)?(h=d,a=f/4):a=f/(2*Math.PI)*Math.asin(d/h);return 1>b?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-a)*2*Math.PI/f)+c:0.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-a)*2*Math.PI/f)+d+c},easeInBack:function(a,b,c,d,e,f){void 0==
f&&(f=1.70158);return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){void 0==f&&(f=1.70158);return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){void 0==f&&(f=1.70158);return 1>(b/=e/2)?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+0.75)+c:b<2.5/2.75?
d*(7.5625*(b-=2.25/2.75)*b+0.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+0.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?0.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:0.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+0.5*d+c}});(function(a){var b=[],c=function(){},d=0,e=[],f=function(){d++;d>=b.length&&(c(e),c=function(){})},h=function(b){var c=new Image;a(c).load(function(){e.push({url:b,img:c});f()}).error(function(){e.push(c);f()}).attr("src",b)};a.fn.loader=function(d,e){d&&a.extend(b,d);"function"==typeof e&&(c=e);for(var f=0;f<b.length;f++)h(b[f])}})(jQuery);(function(a,b){function c(){if(!d.READY){d.event.determineEventTypes();for(var a in d.gestures)d.gestures.hasOwnProperty(a)&&d.detection.register(d.gestures[a]);d.event.onTouch(d.DOCUMENT,d.EVENT_MOVE,d.detection.detect);d.event.onTouch(d.DOCUMENT,d.EVENT_END,d.detection.detect);d.READY=!0}}var d=function(a,b){return new d.Instance(a,b||{})};d.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};
d.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled;d.HAS_TOUCHEVENTS="ontouchstart"in a;d.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i;d.NO_MOUSEEVENTS=d.HAS_TOUCHEVENTS&&navigator.userAgent.match(d.MOBILE_REGEX);d.EVENT_TYPES={};d.DIRECTION_DOWN="down";d.DIRECTION_LEFT="left";d.DIRECTION_UP="up";d.DIRECTION_RIGHT="right";d.POINTER_MOUSE="mouse";d.POINTER_TOUCH="touch";d.POINTER_PEN="pen";d.EVENT_START="start";d.EVENT_MOVE="move";d.EVENT_END="end";d.DOCUMENT=document;
d.plugins={};d.READY=!1;d.Instance=function(a,b){var e=this;return c(),this.element=a,this.enabled=!0,this.options=d.utils.extend(d.utils.extend({},d.defaults),b||{}),this.options.stop_browser_behavior&&d.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),d.event.onTouch(a,d.EVENT_START,function(a){e.enabled&&d.detection.startDetect(e,a)}),this};d.Instance.prototype={on:function(a,b){for(var c=a.split(" "),d=0;c.length>d;d++)this.element.addEventListener(c[d],b,!1);
return this},off:function(a,b){for(var c=a.split(" "),d=0;c.length>d;d++)this.element.removeEventListener(c[d],b,!1);return this},trigger:function(a,b){var c=d.DOCUMENT.createEvent("Event");c.initEvent(a,!0,!0);c.gesture=b;var e=this.element;return d.utils.hasParent(b.target,e)&&(e=b.target),e.dispatchEvent(c),this},enable:function(a){return this.enabled=a,this}};var e=null,f=!1,h=!1;d.event={bindDom:function(a,b,c){for(var b=b.split(" "),d=0;b.length>d;d++)a.addEventListener(b[d],c,!1)},onTouch:function(a,
b,c){var r=this;this.bindDom(a,d.EVENT_TYPES[b],function(m){var p=m.type.toLowerCase();if(!p.match(/mouse/)||!h){(p.match(/touch/)||p.match(/pointerdown/)||p.match(/mouse/)&&1===m.which)&&(f=!0);p.match(/touch|pointer/)&&(h=!0);var w=0;f&&(d.HAS_POINTEREVENTS&&b!=d.EVENT_END?w=d.PointerEvent.updatePointer(b,m):p.match(/touch/)?w=m.touches.length:h||(w=p.match(/up/)?0:1),0<w&&b==d.EVENT_END?b=d.EVENT_MOVE:w||(b=d.EVENT_END),w||null===e?e=m:m=e,c.call(d.detection,r.collectEventData(a,b,m)),d.HAS_POINTEREVENTS&&
b==d.EVENT_END&&(w=d.PointerEvent.updatePointer(b,m)));w||(e=null,f=!1,h=!1,d.PointerEvent.reset())}})},determineEventTypes:function(){var a;a=d.HAS_POINTEREVENTS?d.PointerEvent.getEvents():d.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"];d.EVENT_TYPES[d.EVENT_START]=a[0];d.EVENT_TYPES[d.EVENT_MOVE]=a[1];d.EVENT_TYPES[d.EVENT_END]=a[2]},getTouchList:function(a){return d.HAS_POINTEREVENTS?d.PointerEvent.getTouchList():
a.touches?a.touches:[{identifier:1,pageX:a.pageX,pageY:a.pageY,target:a.target}]},collectEventData:function(a,b,c){var a=this.getTouchList(c,b),e=d.POINTER_TOUCH;return(c.type.match(/mouse/)||d.PointerEvent.matchType(d.POINTER_MOUSE,c))&&(e=d.POINTER_MOUSE),{center:d.utils.getCenter(a),timeStamp:(new Date).getTime(),target:c.target,touches:a,eventType:b,pointerType:e,srcEvent:c,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation();this.srcEvent.preventDefault&&
this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return d.detection.stopDetect()}}}};d.PointerEvent={pointers:{},getTouchList:function(){var a=this,b=[];return Object.keys(a.pointers).sort().forEach(function(c){b.push(a.pointers[c])}),b},updatePointer:function(a,b){return a==d.EVENT_END?this.pointers={}:(b.identifier=b.pointerId,this.pointers[b.pointerId]=b),Object.keys(this.pointers).length},matchType:function(a,b){if(!b.pointerType)return!1;
var c={};return c[d.POINTER_MOUSE]=b.pointerType==b.MSPOINTER_TYPE_MOUSE||b.pointerType==d.POINTER_MOUSE,c[d.POINTER_TOUCH]=b.pointerType==b.MSPOINTER_TYPE_TOUCH||b.pointerType==d.POINTER_TOUCH,c[d.POINTER_PEN]=b.pointerType==b.MSPOINTER_TYPE_PEN||b.pointerType==d.POINTER_PEN,c[a]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}};d.utils={extend:function(a,c,d){for(var e in c)a[e]!==
b&&d||(a[e]=c[e]);return a},hasParent:function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},getCenter:function(a){for(var b=[],c=[],d=0,e=a.length;e>d;d++)b.push(a[d].pageX),c.push(a[d].pageY);return{pageX:(Math.min.apply(Math,b)+Math.max.apply(Math,b))/2,pageY:(Math.min.apply(Math,c)+Math.max.apply(Math,c))/2}},getVelocity:function(a,b,c){return{x:Math.abs(b/a)||0,y:Math.abs(c/a)||0}},getAngle:function(a,b){return 180*Math.atan2(b.pageY-a.pageY,b.pageX-a.pageX)/Math.PI},getDirection:function(a,
b){var c=Math.abs(a.pageX-b.pageX),e=Math.abs(a.pageY-b.pageY);return c>=e?0<a.pageX-b.pageX?d.DIRECTION_LEFT:d.DIRECTION_RIGHT:0<a.pageY-b.pageY?d.DIRECTION_UP:d.DIRECTION_DOWN},getDistance:function(a,b){var c=b.pageX-a.pageX,d=b.pageY-a.pageY;return Math.sqrt(c*c+d*d)},getScale:function(a,b){return 2<=a.length&&2<=b.length?this.getDistance(b[0],b[1])/this.getDistance(a[0],a[1]):1},getRotation:function(a,b){return 2<=a.length&&2<=b.length?this.getAngle(b[1],b[0])-this.getAngle(a[1],a[0]):0},isVertical:function(a){return a==
d.DIRECTION_UP||a==d.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(a,b){var c,d="webkit,khtml,moz,ms,o,".split(",");if(b&&a.style){for(var e=0;d.length>e;e++)for(var f in b)b.hasOwnProperty(f)&&(c=f,d[e]&&(c=d[e]+c.substring(0,1).toUpperCase()+c.substring(1)),a.style[c]=b[f]);"none"==b.userSelect&&(a.onselectstart=function(){return!1})}}};d.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(a,b){this.current||(this.stopped=!1,this.current={inst:a,startEvent:d.utils.extend({},
b),lastEvent:!1,name:""},this.detect(b))},detect:function(a){if(this.current&&!this.stopped){for(var a=this.extendEventData(a),b=this.current.inst.options,c=0,e=this.gestures.length;e>c;c++){var f=this.gestures[c];if(!this.stopped&&!1!==b[f.name]&&!1===f.handler.call(f,a,this.current.inst)){this.stopDetect();break}}return this.current&&(this.current.lastEvent=a),a.eventType==d.EVENT_END&&!a.touches.length-1&&this.stopDetect(),a}},stopDetect:function(){this.previous=d.utils.extend({},this.current);
this.current=null;this.stopped=!0},extendEventData:function(a){var b=this.current.startEvent;if(b&&(a.touches.length!=b.touches.length||a.touches===b.touches)){b.touches=[];for(var c=0,e=a.touches.length;e>c;c++)b.touches.push(d.utils.extend({},a.touches[c]))}var c=a.timeStamp-b.timeStamp,e=a.center.pageX-b.center.pageX,f=a.center.pageY-b.center.pageY,h=d.utils.getVelocity(c,e,f);return d.utils.extend(a,{deltaTime:c,deltaX:e,deltaY:f,velocityX:h.x,velocityY:h.y,distance:d.utils.getDistance(b.center,
a.center),angle:d.utils.getAngle(b.center,a.center),direction:d.utils.getDirection(b.center,a.center),scale:d.utils.getScale(b.touches,a.touches),rotation:d.utils.getRotation(b.touches,a.touches),startEvent:b}),a},register:function(a){var c=a.defaults||{};return c[a.name]===b&&(c[a.name]=!0),d.utils.extend(d.defaults,c,!0),a.index=a.index||1E3,this.gestures.push(a),this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0}),this.gestures}};d.gestures=d.gestures||{};d.gestures.Hold=
{name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(a,b){switch(a.eventType){case d.EVENT_START:clearTimeout(this.timer);d.detection.current.name=this.name;this.timer=setTimeout(function(){"hold"==d.detection.current.name&&b.trigger("hold",a)},b.options.hold_timeout);break;case d.EVENT_MOVE:a.distance>b.options.hold_threshold&&clearTimeout(this.timer);break;case d.EVENT_END:clearTimeout(this.timer)}}};d.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,
tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(a,b){if(a.eventType==d.EVENT_END){var c=d.detection.previous,e=!1;a.deltaTime>b.options.tap_max_touchtime||a.distance>b.options.tap_max_distance||(c&&"tap"==c.name&&a.timeStamp-c.lastEvent.timeStamp<b.options.doubletap_interval&&a.distance<b.options.doubletap_distance&&(b.trigger("doubletap",a),e=!0),(!e||b.options.tap_always)&&(d.detection.current.name="tap",b.trigger(d.detection.current.name,a)))}}};
d.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:0.7},handler:function(a,b){a.eventType==d.EVENT_END&&!(0<b.options.swipe_max_touches&&a.touches.length>b.options.swipe_max_touches)&&(a.velocityX>b.options.swipe_velocity||a.velocityY>b.options.swipe_velocity)&&(b.trigger(this.name,a),b.trigger(this.name+a.direction,a))}};d.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,
drag_lock_min_distance:25},triggered:!1,handler:function(a,c){if(d.detection.current.name!=this.name&&this.triggered)return c.trigger(this.name+"end",a),this.triggered=!1,b;if(!(0<c.options.drag_max_touches&&a.touches.length>c.options.drag_max_touches))switch(a.eventType){case d.EVENT_START:this.triggered=!1;break;case d.EVENT_MOVE:if(a.distance<c.options.drag_min_distance&&d.detection.current.name!=this.name)break;d.detection.current.name=this.name;(d.detection.current.lastEvent.drag_locked_to_axis||
c.options.drag_lock_to_axis&&c.options.drag_lock_min_distance<=a.distance)&&(a.drag_locked_to_axis=!0);var e=d.detection.current.lastEvent.direction;a.drag_locked_to_axis&&e!==a.direction&&(a.direction=d.utils.isVertical(e)?0>a.deltaY?d.DIRECTION_UP:d.DIRECTION_DOWN:0>a.deltaX?d.DIRECTION_LEFT:d.DIRECTION_RIGHT);this.triggered||(c.trigger(this.name+"start",a),this.triggered=!0);c.trigger(this.name,a);c.trigger(this.name+a.direction,a);(c.options.drag_block_vertical&&d.utils.isVertical(a.direction)||
c.options.drag_block_horizontal&&!d.utils.isVertical(a.direction))&&a.preventDefault();break;case d.EVENT_END:this.triggered&&c.trigger(this.name+"end",a),this.triggered=!1}}};d.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:0.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(a,c){if(d.detection.current.name!=this.name&&this.triggered)return c.trigger(this.name+"end",a),this.triggered=!1,b;if(!(2>a.touches.length))switch(c.options.transform_always_block&&
a.preventDefault(),a.eventType){case d.EVENT_START:this.triggered=!1;break;case d.EVENT_MOVE:var e=Math.abs(1-a.scale),f=Math.abs(a.rotation);if(c.options.transform_min_scale>e&&c.options.transform_min_rotation>f)break;d.detection.current.name=this.name;this.triggered||(c.trigger(this.name+"start",a),this.triggered=!0);c.trigger(this.name,a);f>c.options.transform_min_rotation&&c.trigger("rotate",a);e>c.options.transform_min_scale&&(c.trigger("pinch",a),c.trigger("pinch"+(1>a.scale?"in":"out"),a));
break;case d.EVENT_END:this.triggered&&c.trigger(this.name+"end",a),this.triggered=!1}}};d.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(a,c){return c.options.prevent_mouseevents&&a.pointerType==d.POINTER_MOUSE?(a.stopDetect(),b):(c.options.prevent_default&&a.preventDefault(),a.eventType==d.EVENT_START&&c.trigger(this.name,a),b)}};d.gestures.Release={name:"release",index:1/0,handler:function(a,b){a.eventType==d.EVENT_END&&b.trigger(this.name,
a)}};"object"==typeof module&&"object"==typeof module.exports?module.exports=d:(a.Hammer=d,"function"==typeof a.define&&a.define.amd&&a.define("hammer",[],function(){return d}))})(this);
(function(a,b){a!==b&&(Hammer.event.bindDom=function(c,d,e){a(c).on(d,function(a){var c=a.originalEvent||a;c.pageX===b&&(c.pageX=a.pageX,c.pageY=a.pageY);c.target||(c.target=a.target);c.which===b&&(c.which=c.button);c.preventDefault||(c.preventDefault=a.preventDefault);c.stopPropagation||(c.stopPropagation=a.stopPropagation);e.call(this,c)})},Hammer.Instance.prototype.on=function(b,d){return a(this.element).on(b,d)},Hammer.Instance.prototype.off=function(b,d){return a(this.element).off(b,d)},Hammer.Instance.prototype.trigger=
function(b,d){var e=a(this.element);return e.has(d.target).length&&(e=a(d.target)),e.trigger({type:b,gesture:d})},a.fn.hammer=function(b){return this.each(function(){var d=a(this),e=d.data("hammer");e?e&&b&&Hammer.utils.extend(e.options,b):d.data("hammer",new Hammer(this,b||{}))})})})(window.jQuery||window.Zepto);var VERSION_NAME="1.0.5",BUILD_DATE="20120711",isTouch=function(){return Hammer.HAS_TOUCHEVENTS&&navigator.userAgent.match(Hammer.MOBILE_REGEX)},BookType=function(){};BookType.normal_book=0;BookType.single_book=1;BookType.zoom_book=2;var normalBookStatu=function(){};normalBookStatu.book_statu_ready=0;normalBookStatu.book_statu_auto_flip=1;normalBookStatu.book_statu_mouse_flip=2;var singleBookStatu=function(){};singleBookStatu.book_statu_ready=0;singleBookStatu.book_statu_auto_flip=1;
singleBookStatu.book_statu_mouse_flip=2;var bookCorner=function(){};bookCorner.top_left=0;bookCorner.top_right=1;bookCorner.bottom_left=2;bookCorner.bottom_right=3;var PageEditor=function(){};PageEditor.AnnoType=function(){};PageEditor.AnnoType.ANNO_LINK="com.mobiano.flipbook.pageeditor.TAnnoLink";PageEditor.AnnoType.ANNO_YOUTUBE="com.mobiano.flipbook.pageeditor.TAnnoYouTube";PageEditor.AnnoType.ANNO_YOUTUBE1="com.mobiano.flipbook.pageeditor::TAnnoYoutubePlayer";
PageEditor.AnnoType.ANNO_YOUTUBE2="com.mobiano.flipbook.pageeditor.player::TAnnoYoutubePlayer03";PageEditor.AnnoType.ANNO_YOUTUBE3="com.mobiano.flipbook.pageeditor.player::TAnnoYoutubePlayer04";PageEditor.AnnoType.ANNO_VIDEO1="com.mobiano.flipbook.pageeditor::TAnnoVideoPlayer";PageEditor.AnnoType.ANNO_VIDEO2="com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer";PageEditor.AnnoType.ANNO_AUDIO1="com.mobiano.flipbook.pageeditor::TAnnoAdvancedSound";PageEditor.AnnoType.ANNO_AUDIO2="com.mobiano.flipbook.pageeditor::TAnnoWavemusicPlayer";
PageEditor.AnnoType.ANNO_AUDIO3="com.mobiano.flipbook.pageeditor::TAnnoPlugIn";PageEditor.AnnoType.ANNO_AUDIO4="";PageEditor.AnnoType.ANNO_AUDIO5="";PageEditor.AnnoType.ANNO_AUDIO6="";PageEditor.AnnoType.ANNO_AUDIO7="";PageEditor.AnnoType.ANNO_AUDIO8="";PageEditor.AnnoType.ANNO_AUDIO9="";PageEditor.AnnoType.ANNO_VIDEO="com.mobiano.flipbook.pageeditor.TAnnoMovie";PageEditor.AnnoType.ANNO_AUDIO="com.mobiano.flipbook.pageeditor.TAnnoSound";PageEditor.AnnoType.ANNO_IMAGE="com.mobiano.flipbook.pageeditor.TAnnoImage";
PageEditor.AnnoType.ANNO_BUTTON="com.mobiano.flipbook.pageeditor.TAnnoButton";PageEditor.AnnoType.ANNO_LINE="com.mobiano.flipbook.pageeditor.shapes::TAnnoLine";PageEditor.AnnoType.ANNO_ARROW="com.mobiano.flipbook.pageeditor.shapes::TAnnoArrow";PageEditor.AnnoType.ANNO_ROUND="com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse";PageEditor.AnnoType.ANNO_RECTANGLE="com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle";PageEditor.AnnoType.ANNO_TEXT="com.mobiano.flipbook.pageeditor::TAnnoText";
PageEditor.AnnoType.ANNO_AREA="com.mobiano.flipbook.pageeditor::TAnnoHighLightArea";PageEditor.AnnoType.ANNO_FLASHSHOW="com.mobiano.flipbook.pageeditor.TAnnoEmbeddedSlideshow";PageEditor.AnnoType.ANNO_ATEXT="com.mobiano.flipbook.pageeditor::TAnnoDynamicText";PageEditor.AnnoType.ANNO_STARTEXT="com.mobiano.flipbook.pageeditor::TAnnoStarwarsText";PageEditor.AnnoType.ANNO_TEXTANIM="com.mobiano.flipbook.pageeditor.textAnim::TAnnoTextAnim";PageEditor.AnnoType.ANNO_ATIMAGE="com.mobiano.flipbook.pageeditor.TAnnoClipart";
PageEditor.AnnoType.ANNO_EFFECTTEXT="com.mobiano.flipbook.pageeditor.TAnnoEffectText";PageEditor.AnnoType.ANNO_CALLOUT="com.mobiano.flipbook.pageeditor.shapes::TAnnoCallout";PageEditor.AnnoType.ANNO_ADVANCEDSOUND="com.mobiano.flipbook.pageeditor::TAnnoAdvancedSound";PageEditor.PlayEvt=function(){};PageEditor.PlayEvt.EVT_PLAY="EVT_PageViewed";PageEditor.PlayEvt.EVT_STOP="EVT_PageOffView";PageEditor.TriggerEventType=function(){};PageEditor.TriggerEventType.MouseDown="mouseDown";
PageEditor.TriggerEventType.MouseOver="mouseOver";PageEditor.TriggerEventType.MouseOut="mouseOut";PageEditor.ActionType=function(){};PageEditor.ActionType.GOTO_PAGE="com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage";PageEditor.ActionType.OPEN_URL="com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL";PageEditor.ActionType.OPEN_WINDOW="com.mobiano.flipbook.pageeditor.TAnnoActionOpenWindow";PageEditor.ActionType.SLIDE_SHOW="com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide";
PageEditor.ActionType.ACTION_JS="com.mobiano.flipbook.pageeditor.TAnnoActionJavascript";PageEditor.ActionType.PLAY_AUDIO="com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio";var _event;_event=isTouch()?{_down:"touchstart",_move:"touchmove",_end:"touchend"}:{_down:"mousedown",_move:"mousemove",_end:"mouseup"};var bookEvent=function(){};bookEvent.onCurrentPageIndexChanged="BE_PIC";bookEvent.onCurrentPageIndexWillChange="BE_PIWC";bookEvent.onNoNextPage="BE_NNP";bookEvent.onNoPreviousPage="BE_NPP";$.fn.zoom=function(a,b,c,d,e){try{if(null==this||void 0==this)return;var f=Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2)),h=Math.sqrt(Math.pow(d.x-c.x,2)+Math.pow(d.y-c.y,2)),j=e.width+2*(h-f);this.css({width:j+"px",height:j*e.height/e.width+"px"})}catch(k){return!1}return!0};(function(a){var b=function(b,d,e,f,h){h=a.extend({background:"green",cornersTop:!0,scale:"noresize"},h);b.prev();var j=0,k=!1,l=h.background,r=h.cornersTop,m=h.gradientColors||["#ddd","#eee","#fff"],p=h.scale,w=[],n=b.clone(),z=a.browser.msie?null:n[0].getContext("2d"),b=a.browser.msie?a(G_vmlCanvasManager.initElement(b[0])):b,t=b[0].getContext("2d"),J=0,f=f.each(function(b){if(!w[b]){var c=this;c.onload=function(){var h=1;if("noresize"!=p){var j=d/this.width,l=e/this.height;"fit"==p&&(h=1>j||1>
l?Math.min(j,l):1);"fill"==p&&(h=Math.min(j,l))}a(c).data("flip.scale",h);w[b]=t.createPattern(c,"no-repeat");J++;J==f.length&&!k&&(k=!0,M())};c.complete&&window.setTimeout(function(){c.onload()},10)}}).get(),v=d,s=e,x=a.browser.msie?b.offset():null,y,I,K,L;a.browser.msie&&function(){var f=a("<div>").width(d).height(e).css({position:"absolute",cursor:"default",zIndex:1}).appendTo(tmpContainer);7==parseInt(a.browser.version)&&f.css({opacity:1.0E-6,background:"#FFF"});var g=function(){x=b.offset();
return f.css({left:x.left+"px",top:x.top+"px"})};a(window).resize(g);return g()}();setInterval(function(){window.clearInterval(y);I=(new Date).getTime();K=v;L=s/50;y=window.setInterval(R,0);j+=1;0>j&&(j=f.length-1);j==f.length&&(j=0)},3E3);var R=function(){var a=(new Date).getTime()-I;700<=a?(window.clearInterval(y),f.push(f.shift()),w.push(w.shift()),v=d,s=e):(v=K-2*d*a/700,s=L+2*e*a/700/3);M()},u=function(b,c){var f=b*d+c,h=-c/b;a.browser.msie&&(f=Math.round(f),h=Math.round(h));t.beginPath();t.moveTo(d,
Math.min(f,e));t.lineTo(d,0);t.lineTo(Math.max(h,0),0);0>h?(t.lineTo(0,Math.min(c,e)),c<e&&t.lineTo((e-c)/b,e),t.lineTo(d,e)):f<e?t.lineTo(d,f):(t.lineTo((e-c)/b,e),t.lineTo(d,e))},M=function(){if(k){a.browser.msie&&t.clearRect(0,0,d,e);t.fillStyle=l;t.fillRect(0,0,d,e);var b=f[0],c=a(b).data("flip.scale");a.browser.msie?(t.fillStyle=w[0],t.fillStyle.width2=t.fillStyle.width*c,t.fillStyle.height2=t.fillStyle.height*c,t.fillRect(0,0,d,e)):t.drawImage(b,(d-b.width*c)/2,(e-b.height*c)/2,b.width*c,b.height*
c);if(s&&v!=d&&(b=(s-2*(v+d))/2,m2=s/(d-v),q2=v*m2,2!=m2)){var h=1,j=0;t.save();r||(j=e,h=-1);t.translate(0,j);t.scale(1,h);var p=(q2-b)/(2-m2),o=2*p+b,C=(2*o+p+4*v-2*s)/5,x=-C/2+o+p/2,c=Math.sqrt(Math.pow(p-C,2)+Math.pow(o-x,2)),y=Math.min(0.5*c,30),E;a.browser.mozilla&&1.9>parseFloat(a.browser.version)?(E=z,E.clearRect(0,0,d,e),E.save(),E.translate(1,0)):E=t;p=E.createLinearGradient(p,o,C,x);p.addColorStop(0,m[0]);p.addColorStop(y/c,m[1]);p.addColorStop(1,m[2]);E.fillStyle=p;E.beginPath();E.moveTo(-b/
2,0);E.quadraticCurveTo((-b/2+v)/2+0.02*v,s/2,v,s);E.quadraticCurveTo((d+v)/2,(2*d+b+s)/2-0.02*(e-s),d,2*d+b);a.browser.mozilla&&1.9>parseFloat(a.browser.version)?(E.save(),E.clip(),E.fillRect(0,0,d,e),E.restore(),t.drawImage(n[0],0,0),E.restore()):E.fill();t.fillStyle=l;u(2,b);t.fill();u(2,b);!a.browser.safari&&!a.browser.opera&&t.restore();b=f[1];c=a(b).data("flip.scale");if(a.browser.msie)t.fillStyle=w[1],t.fillStyle.width2=t.fillStyle.width*c,t.fillStyle.height2=t.fillStyle.height*c,t.fill();
else{t.save();t.clip();if(a.browser.safari||a.browser.opera)t.scale(1,1/h),t.translate(-0.0,-j);t.drawImage(b,(d-b.width*c)/2,(e-b.height*c)/2,b.width*c,b.height*c);t.restore();(a.browser.safari||a.browser.opera)&&t.restore()}}}}};a.fn.jFlip=function(c,d,e,f,h){return this.each(function(){a(this).wrap("<div class='bannerdiv' style='position: absolute;width:"+c+"px;height:"+d+"px;top:"+h+"px;left:"+f+"px'>");var j=a(this).find("img"),k=a(document.createElement("canvas")).attr({width:c,height:d}).css({margin:0,
width:c+"px",height:d+"px"});a(this).css({position:"absolute",left:"-9000px",top:"-9000px",display:"none"}).after(k);new b(a(this).next(),c||300,d||300,j,e)})}})(jQuery);colorTo0x=function(a){var b=a;"#"!=a.substr(0,1)&&"0x"!=a.substr(0,2)&&(b=parseInt(a).toString(16),b="#"+"000000".substr(0,6-b.length)+b);"0x"==a.substr(0,2)&&(b=a.replace("0x","#"));return b};var Point=function(a,b){return{x:a,y:b}};function debug(a){window.console&&window.console.log&&window.console.log(a)}function colorSplit(a){var b={r:0,g:0,b:0};b.r=parseInt(a.substr(1,2),16);b.g=parseInt(a.substr(3,2),16);b.b=parseInt(a.substr(5,2),16);return b}
function colorAdd(a,b){var c=colorSplit(a);c.r=Math.min(c.r+b,255).toString(16);c.g=Math.min(c.g+b,255).toString(16);c.b=Math.min(c.b+b,255).toString(16);c.r=1>=c.r.length?"0"+c.r:c.r;c.g=1>=c.g.length?"0"+c.g:c.g;c.b=1>=c.b.length?"0"+c.b:c.b;return"#"+c.r+c.g+c.b}
function colorDiv(a,b){var c=colorSplit(a);c.r=Math.max(c.r-b,0).toString(16);c.g=Math.max(c.g-b,0).toString(16);c.b=Math.max(c.b-b,0).toString(16);c.r=1>=c.r.length?"0"+c.r:c.r;c.g=1>=c.g.length?"0"+c.g:c.g;c.b=1>=c.b.length?"0"+c.b:c.b;return"#"+c.r+c.g+c.b}Array.indexOf||(Array.prototype.indexOf=function(a){for(var b=0;b<this.length;b++)if(this[b]==a)return b;return-1});function audioPlayer(a){this.audio=document.createElement("audio");tmpContainer.append(this.audio);this.audio.src=a;var b=this;this.audio.addEventListener("ended",function(){b.audio.currentTime=0},!1)}audioPlayer.prototype.play=function(){null!=this.audio&&this.audio.play()};audioPlayer.prototype.rePlay=function(){null!=this.audio&&(0!=this.audio.currentTime&&(this.audio.currentTime=this.audio.startTime),this.audio.play())};audioPlayer.prototype.preload=function(){this.audio.preload};
audioPlayer.prototype.loop=function(){this.audio.loop};audioPlayer.prototype.autoPlay=function(){this.audio.autoplay};audioPlayer.prototype.src=function(a){this.audio.src=a};audioPlayer.prototype.control=function(){this.audio.controls};function loadingBook(a,b){this.width=700;this.height=460;this.bg=$("<div></div>");this.loadingBox=$("<div></div>");this.firstImg=$("<img />");this.titleLabel=new label(window.document.title,this.loadingBox);this.loadingImage=$("<img src='"+uiBaseURL+"progress.gif' style='position:absolute;' />");this.bg.css({"background-color":"#474747",width:window.innerWidth+"px",height:window.innerHeight+"px"});isTouch&&(this.width=window.innerWidth,this.height=window.innerHeight);this.loadingImage.css({left:(this.width-
32)/2+"px",top:this.height-80+"px"});b||(b="#805080");this.loadingBox.css({width:this.width+"px",height:this.height+"px","-webkit-border-radius":"9px","-moz-border-radius":"9px","-ms-border-radius":"9px","-o-border-radius":"9px","border-radius":"9px","-webkit-box-shadow":"0 0 10px rgba(40, 0, 0, 0.8)","-moz-box-shadow":"0 0 10px rgba(40, 0, 0, 0.8)","-o-box-shadow":"0 0 10px rgba(40, 0, 0, 0.8)","box-shadow":"0 0 10px rgba(40, 0, 0, 0.8)",position:"absolute",left:(window.innerWidth-this.width)/2+
"px",top:(window.innerHeight-this.height)/2+"px","background-color":b});var c=150;300>window.innerWidth&&(c=(window.innerWidth-10)/2);this.firstImg.attr({src:getPageDir(1,"thumb")});this.firstImg.css({"-webkit-box-shadow":"0 0 5px rgba(40, 0, 0, 0.6)","-moz-box-shadow":"0 0 5px rgba(40, 0, 0, 0.6)","-o-box-shadow":"0 0 5px rgba(40, 0, 0, 0.6)","box-shadow":"0 0 5px rgba(40, 0, 0, 0.6)",position:"absolute",width:c+"px",top:this.height/2-100+"px",left:this.width/2-(c+5)+"px","backgroud-color":"#888888"});
this.titleLabel.setLabelPosition(this.width/2+10,this.height/2-80);this.titleLabel.setFont(18,"#FFFFFF","Tahoma");a.append(this.bg);this.bg.append(this.loadingBox);this.loadingBox.append(this.firstImg);this.loadingBox.append(this.titleLabel);this.loadingBox.append(this.loadingImage)}loadingBook.prototype.hide=function(){this.bg.remove()};function initAudio(a,b,c,d){this.config=$.extend({width:80,height:30,x:20,y:20,src:null,alpha:1},b);this.audio=null;null!=this.config.src&&(this.pw=c,this.ph=d,this.width=this.config.width*this.pw,this.height=this.config.height*this.ph,this.x=this.config.x*this.pw,this.y=this.config.y*this.ph,"./"==this.config.src.substr(0,2)&&(this.config.src="."+this.config.src),this.audio=$("<audio src='"+this.config.src+"' style='width: "+this.width+"px; height: "+this.height+"px; left: "+this.x+"px; top: "+this.y+
"px; position: absolute; opacity: "+this.config.alpha+"' controls ></audio>"),a.append(this.audio))}initAudio.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.audio.css({width:this.width+"px",height:this.height+"px"});this.setPosition()};initAudio.prototype.setPosition=function(){this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.audio.css({left:this.x+"px",top:this.y+"px"})};
initAudio.prototype.play=function(){null!=this.audio&&this.audio[0].play()};initAudio.prototype.pause=function(){null!=this.audio&&this.audio[0].pause()};initAudio.prototype.stop=function(){null!=this.audio&&this.audio[0].stop()};initAudio.prototype.getPlayEvt=function(){return this.config.soundPlayTriggerEvt};initAudio.prototype.getStopEvt=function(){return this.config.soundStopTriggerEvt};function initYoutube(a,b,c,d){this.config=$.extend({width:400,height:300,x:0.02,y:0.02,alpha:1,id:null},b);this.youtubeFrame=null;null!=this.config.id&&(this.pw=c,this.ph=d,this.width=this.config.width*this.pw,this.height=this.config.height*this.ph,this.x=this.config.x*this.pw,this.y=this.config.y*this.ph,this.youtubeFrame=$("<iframe class='youtube-player' type='text/html' width='"+this.width+"' height='"+this.height+"' src='http://www.youtube.com/embed/"+this.config.id+"' frameborder='0' style='position: absolute; opacity: "+
this.config.alpha+"; left:"+this.x+"px; top:"+this.y+"px;'></iframe>"),a.append(this.youtubeFrame))}initYoutube.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.youtubeFrame.css({width:this.pw*this.config.width+"px",height:this.ph*this.config.height+"px"});this.setPosition(this.config.x*this.pw,this.config.y*this.ph)};initYoutube.prototype.setPosition=function(a,b){this.youtubeFrame.css({top:b+"px",left:a+"px"})};initYoutube.prototype.getPlayEvt=function(){return this.config.moviePlayTriggerEvt};
initYoutube.prototype.getStopEvt=function(){return this.config.movieStopTriggerEvt};initYoutube.prototype.hide=function(){this.youtubeFrame.css({display:"none"})};initYoutube.prototype.show=function(){this.youtubeFrame.css({display:"block"})};function initVideo(a,b,c,d){this.config=$.extend({width:0.6,height:0.5,x:0.2,y:0.2,src:null,alpha:1},b);this.video=null;null==this.config.src&&".mp4"!=this.config.src.substr(this.config.src.length-4,4)||(this.pw=c,this.ph=d,this.width=this.config.width*this.pw,this.height=this.config.height*this.ph,this.x=this.config.x*this.pw,this.y=this.config.y*this.ph,isFlipPdf&&(this.config.src="../"+this.config.src),this.video=$("<video src='"+this.config.src+"' style='width: "+this.width+"px; height:"+this.height+
"px; left: "+this.x+"px; top: "+this.y+"px; position:absolute; opacity: "+this.config.alpha+";' controls='controls' loop='loop'></video>"),a.append(this.video))}initVideo.prototype.onResize=function(a,b){null!=this.video&&(this.pw=a,this.ph=b,this.width=this.config.width*this.pw,this.height=this.config.height*this.ph,this.video.css({width:this.width+"px",height:this.height+"px"}),this.setPosition())};
initVideo.prototype.setPosition=function(){null!=this.video&&(this.x=this.pw*this.config.x,this.y=this.ph*this.config.y,this.video.css({left:this.x+"px",top:this.y+"px"}))};initVideo.prototype.playVideo=function(){null!=this.video&&this.video[0].play()};initVideo.prototype.stopVideo=function(){null!=this.video&&this.video[0].stop()};initVideo.prototype.pauseVideo=function(){null!=this.video&&this.video[0].pause()};initVideo.prototype.getPlayEvt=function(){return this.config.moviePlayTriggerEvt};
initVideo.prototype.getStopEvt=function(){return this.config.soundStopTriggerEvt};function initButton(a,b,c,d){this.config=$.extend({width:0.2,height:0.2,x:0.2,y:0.2,alpha:1,src:null},b);this.pw=c;this.ph=d;this.width=c*this.config.width;this.height=d*this.config.height;this.button=null;var b=[],e=this,b="button_watermark01.swf,button_watermark02.swf,button_watermark03.swf,button_watermark04.swf,button_watermark05.swf,button_watermark06.swf,button_watermark07.swf,button_watermark08.swf,button_watermark09.swf,button_glossy01.swf,button_glossy02.swf,button_glossy03.swf,button_glossy04.swf,button_glossy05.swf,button_glossy06.swf,button_glossy07.swf,button_glossy08.swf,button_glossy09.swf,button_glossy10.swf,button_glossy11.swf,button_glossy12.swf,button_glossy13.swf,button_glossy14.swf,button_glossy15.swf,button_glossy16.swf,button_glossy17.swf,button_push01.swf,button_push02.swf,button_push03.swf,button_push04.swf,button_push05.swf,button_push06.swf,button_lineLight01.swf,button_lineLight02.swf,button_lineLight03.swf,button_lineLight04.swf,button_lineLight05.swf,button_star01.swf,button_star02.swf,button_star03.swf,button_star04.swf,button_star05.swf,button_glitter01.swf,button_glitter02.swf,button_glitter03.swf,button_glitter04.swf,button_glitter05.swf,button_glitter06.swf,button_shadow01.swf,button_shadow02.swf,button_shadow03.swf,button_shadow04.swf,button_shadow05.swf,button_shadow06.swf,button_bottomLight01.swf,button_bottomLight02.swf,button_bottomLight03.swf,button_bottomLight04.swf,button_bottomLight05.swf,button_bottomLight06.swf,button_bottomLight07.swf,button_bottomLight08.swf,button_bottomLight09.swf,button_bottomLight10.swf,button_other01.swf,button_other02.swf,button_other03.swf".split(",");
null==this.config.src||"null"==this.config.src?this.button=$("<button type = 'button'></button>"):(isFlipPdf&&(this.config.src="."+this.config.src),c=this.config.src.substring(this.config.src.lastIndexOf("/")+1,this.config.src.length),this.swfButton=0<=b.indexOf(c))?(this.config.Format.color=colorTo0x(this.config.Format.color),this.button=$("<div></div>"),this.buttonEvt=$("<div></div>"),this.buttonCaption=new label(this.config.buttonCaption,this.button),this.button.css({"-webkit-border-radius":"8px",
"-moz-border-radius":"5px","border-radius":"8px","background-image":getBrowserPre()+"linear-gradient(top,rgba(185,185,185,1) 0%, rgba(122,122,122,1) 45%, rgba(80, 80, 80, 1) 46%, rgba(53,53,53,1) 100%)","-webkit-box-shadow":"0 0 10px rgba(40, 0, 0, 0.7)","-moz-box-shadow":"0 0 10px rgba(40, 0, 0, 0.7)","box-shadow":"0 0 10px rgba(40, 0, 0, 0.7)"}),this.buttonEvt.css({"-webkit-border-radius":"8px","-moz-border-radius":"5px","border-radius":"8px","background-color":"#333333",opacity:0.2,display:"none",
width:this.width+"px",height:this.height+"px"}),this.buttonCaption.setFont(2*this.config.HRate*this.height/3,this.config.Format.color,this.config.Format.font),this.buttonCaption.setLabelPosition(this.buttonCaption.getWidth()>this.width?0:(this.width-this.buttonCaption.getWidth())/2,this.config.captionY*this.height/100),this.button.append(this.buttonEvt),this.button.bind(_event._down,function(){e.buttonEvt.css({display:"block"})}),this.button.bind(_event._end,function(){e.buttonEvt.css({display:"none"})}),
this.button.bind("mouseleave",function(){e.buttonEvt.css({display:"none"})})):".swf"==this.config.src.substr(this.config.src.length-4,4)?this.button=$("<div></div>"):(this.button=$("<img />"),this.button.attr({src:this.config.src}));this.button.css({position:"absolute",width:this.width+"px",height:this.height+"px",left:this.pw*this.config.x+"px",top:this.ph*this.config.y+"px",opacity:this.config.alpha});a.append(this.button);this.father=a;this.initEvt()}
initButton.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*a;this.height=this.config.height*b;this.button.css({width:this.width+"px",height:this.height+"px"});this.setPosition(this.config.x*a,this.config.y*b);if(null!=this.form)this.form.onResize(bookContainer.width(),bookContainer.height());if(null!=this.slide)this.slide.onResize(bookContainer.width(),bookContainer.height());this.swfButton&&(this.buttonCaption.setFont(2*this.config.HRate*this.height/3,this.config.Format.color,
this.config.Format.font),this.buttonCaption.setLabelPosition(this.buttonCaption.getWidth()>this.width?0:(this.width-this.buttonCaption.getWidth())/2,this.config.captionY*this.height/100),this.buttonEvt.css({width:this.width+"px",height:this.height+"px"}))};initButton.prototype.setPosition=function(a,b){this.button.css({left:a+"px",top:b+"px"})};
initButton.prototype.initEvt=function(){this.slide=this.form=null;if(void 0!=this.config.action){var a=this;this.flag=0;this.linkURL=null;try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}this.button.bind(_event._down,function(){c==PageEditor.TriggerEventType.MouseDown&&
actionEvent.call(a);browserType==3?event.cancelBubble=true:event.stopPropagation()});this.button.bind("mouseover",function(){c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a)});this.button.bind(isTouch?_event._end:"mouseout",function(){c==PageEditor.TriggerEventType.MouseOut&&actionEvent.call(a)})}};function initImage(a,b,c,d){this.config=$.extend({width:0.2,height:0.2,x:0.2,y:0.2,alpha:1,src:null},b);this.img=$("<img>");null!=this.config.src&&(this.pw=c,this.ph=d,this.width=this.config.width*c,this.height=this.config.height*d,isFlipPdf&&(this.config.src="."+this.config.src),this.img.attr({src:this.config.src}),this.img.css({position:"absolute",width:this.width+"px",height:this.height+"px",left:this.pw*this.config.x+"px",top:this.ph*this.config.y+"px",opacity:this.config.alpha}),a.append(this.img),
this.father=a,this.initEvt())}
initImage.prototype.initEvt=function(){this.slide=this.form=null;if(void 0!=this.config.action){var a=this;this.flag=0;this.linkURL=null;try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}this.img.bind(_event._down,function(){c==PageEditor.TriggerEventType.MouseDown&&
actionEvent.call(a);browserType==3?event.cancelBubble=true:event.stopPropagation()});this.img.bind("mouseover",function(){c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a)});this.img.bind(isTouch?_event._end:"mouseout",function(){c==PageEditor.TriggerEventType.MouseOut&&actionEvent.call(a)})}};
initImage.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=a*this.config.width;this.height=b*this.config.height;this.img.css({width:this.width+"px",height:this.height+"px"});this.setPosition(this.config.x*a,this.config.y*b);if(null!=this.form)this.form.onResize(bookContainer.width(),bookContainer.height());if(null!=this.slide)this.slide.onResize(bookContainer.width(),bookContainer.height())};initImage.prototype.setPosition=function(a,b){this.img.css({left:a+"px",top:b+"px"})};function initRe(a,b,c,d,e){this.config=$.extend({width:200,height:20,x:0,y:0,alpha:1,fillStyle:null,color:null,ColorA:null,ColorB:null,angle:90,spalpha:1,action:null,borderWidth:1,borderColor:null,borderAlpha:1,sh:"false",sx:4,sy:4,se:2,sr:null},b);this.pw=c;this.ph=d;this.father=a;this.color=colorTo0x(this.config.color);this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.id="re"+e;this.angle=360-parseInt(this.config.angle);
this.A=colorTo0x(this.config.ColorA);this.B=colorTo0x(this.config.ColorB);this.Re="false"!=this.config.sh?$("<div id="+this.id+" style='overflow: hidden;position:absolute;top:"+this.y+"px;left:"+this.x+"px;border:"+this.config.borderWidth+"px solid "+colorTo0x(this.config.borderColor)+";background:"+this.color+";height:"+this.height+"px;width:"+this.width+"px;box-shadow:"+this.config.sx+"px "+this.config.sy+"px "+this.config.se+"px "+colorTo0x(this.config.sr)+";opacity:"+this.config.spalpha+"'></div>"):
$("<div id="+this.id+" style='overflow: hidden;position:absolute;top:"+this.y+"px;left:"+this.x+"px;border:"+this.config.borderWidth+"px solid "+colorTo0x(this.config.borderColor)+";background:"+this.color+";height:"+this.height+"px;width:"+this.width+"px;opacity:"+this.config.spalpha+"'></div>");"gradient"==this.config.fillStyle&&this.Re.css({"background-image":"-webkit-linear-gradient("+this.angle+"deg, "+this.A+", "+this.B+")"});"none"==this.config.fillStyle&&this.Re.css({background:""});this.initEvent();
a.append(this.Re)}
initRe.prototype.initEvent=function(){var a=this;this.flag=0;this.linkURL=this.slide=this.form=null;if(null!=a.config.action){try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}this.Re.bind(_event._down,function(){c==PageEditor.TriggerEventType.MouseDown&&actionEvent.call(a);
browserType==3?event.cancelBubble=true:event.stopPropagation()});this.Re.bind("mouseover",function(){c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a)});this.Re.bind(isTouch?_event._end:"mouseout",function(){c==PageEditor.TriggerEventType.MouseOut&&actionEvent.call(a)})}};
initRe.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.Re.css({width:this.width+"px",height:this.height+"px"});this.setPosition();if(null!=this.form)this.form.onResize(bookContainer.width(),bookContainer.height());if(null!=this.slide)this.slide.onResize(bookContainer.width(),bookContainer.height())};
initRe.prototype.setPosition=function(){this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.Re.css({left:this.x+"px",top:this.y+"px"})};function initRound(a,b,c,d,e){this.config=$.extend({width:200,height:20,x:0,y:0,alpha:1,fillStyle:null,color:null,ColorA:null,ColorB:null,angle:"false",spalpha:1,action:null,borderWidth:1,borderColor:null,borderAlpha:1,sh:"false",sx:4,sy:4,se:2,sr:null},b);this.pw=c;this.ph=d;this.color=colorTo0x(this.config.color);this.father=a;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.id="round"+e;this.x1=this.x-10;
this.y1=this.y-10;0>this.x-10&&(this.x1=0);0>this.y-10&&(this.y1=0);this.rounds=$("<canvas id="+this.id+" width="+(this.width+20)+" height="+(this.height+20)+" style='position: absolute;top:"+this.y1+"px;left:"+this.x1+"px'></canvas>");this.father=a;this.initEvent();a.append(this.rounds);this.roundcan(this.x,this.y,this.width,this.height,this.color,this.config.fillStyle,this.config.ColorA,this.config.ColorB,this.config.alpha,this.config.borderWidth,this.config.spalpha,this.config.borderColor,this.config.borderAlpha,
this.config.sx,this.config.sy,this.config.se,this.config.sr,this.config.sh,360-parseInt(this.config.angle))}
initRound.prototype.initEvent=function(){var a=this;this.flag=0;this.slide=this.form=null;this.linkURL;if(null!=a.config.action){try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}this.rounds.bind(_event._down,function(){c==PageEditor.TriggerEventType.MouseDown&&
actionEvent.call(a);browserType==3?event.cancelBubble=true:event.stopPropagation()});this.rounds.bind("mouseover",function(){c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a)});this.rounds.bind(isTouch?_event._end:"mouseout",function(){c==PageEditor.TriggerEventType.MouseOut&&actionEvent.call(a)})}};
initRound.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.rounds.css({width:this.width+20+"px",height:this.height+20+"px"});this.setPosition();if(null!=this.form)this.form.onResize(bookContainer.width(),bookContainer.height());if(null!=this.slide)this.slide.onResize(bookContainer.width(),bookContainer.height())};
initRound.prototype.setPosition=function(){this.x=this.config.x*this.pw-10;this.y=this.config.y*this.ph-10;this.rounds.css({left:this.x+"px",top:this.y+"px"})};
initRound.prototype.roundcan=function(a,b,c,d,e,f,h,j,k,l,r,m,p,w,n,z,t,J,v){b=p=0;a=this.rounds[0].getContext("2d");k=[c/2+10,d/2+10];p=c/2;b=d/2;a.save();a.beginPath();a.strokeStyle=colorTo0x(m);a.lineWidth=l;a.globalAlpha=r;"false"!=J&&(a.shadowOffsetX=w,a.shadowOffsetY=n,a.shadowBlur=z,a.shadowColor=colorTo0x(t));a.closePath();a.stroke();a.restore();DrawEllipse(a,k,p,b);"gradient"==f&&(d=v*Math.PI/180,c=k[0]+p*Math.cos(d),d=k[1]+b*Math.sin(d),v=(v+180)*Math.PI/180,r=k[0]+p*Math.cos(v),v=k[1]+
b*Math.sin(v),v=a.createLinearGradient(c,d,r,v),v.addColorStop(0,colorTo0x(h)),v.addColorStop(1,colorTo0x(j)),a.fillStyle=v,a.fill());"none"==f&&(a.fillStyle=e,a.fill());0!=l&&a.stroke();a.closePath()};function DrawEllipse(a,b,c,d){var e=b[0]+c,f=b[1];a.moveTo(e,f);for(var h=0;360>=h;h++)f=h*Math.PI/180,e=b[0]+c*Math.cos(f),f=b[1]-d*Math.sin(f),a.lineTo(e,f)};function initText(a,b,c,d,e){this.config=$.extend({width:200,height:20,x:0,y:0,alpha:1,textStr:null,lineH:20,fontName:null,fontSize:12,color:null,tbold:"false",italic:"false",bgalpha:1,action:null,fillBg:"false",bgcolor:null,sh:"false",sx:4,sy:4,se:2,sr:null},b);this.pw=c;this.ph=d;this.color=colorTo0x(this.config.color);this.father=a;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.id="text"+e;this.text="false"!=
this.config.sh?$("<div id="+this.id+" style='overflow: hidden;position:absolute;background:"+colorTo0x(this.config.bgcolor)+";left:"+this.x+"px; top:"+this.y+"px;height:"+this.height+"px;width:"+this.width+"px;box-shadow:"+this.config.sx+"px "+this.config.sy+"px "+this.config.se+"px "+colorTo0x(this.config.sr)+";opacity:"+this.config.bgalpha+"'><div style='word-break: break-word;font-family:"+this.config.fontName+";font-size:"+this.config.fontSize+"px;color:"+this.color+";'>"+this.config.textStr+
"</div></div>"):$("<div id="+this.id+" style='overflow: hidden;position:absolute;background:"+colorTo0x(this.config.bgcolor)+";left:"+this.x+"px; top:"+this.y+"px;height:"+this.height+"px;width:"+this.width+"px;opacity:"+this.config.bgalpha+"'><div style='word-break: break-word;font-family:"+this.config.fontName+";font-size:"+this.config.fontSize+"px;color:"+this.color+";'>"+this.config.textStr+"</div></div>");"false"==this.config.fillBg&&this.text.css({background:""});"false"!=this.config.tbold&&
this.text.css({"font-weight":"bold"});"false"!=this.config.italic&&this.text.css({"font-style":"italic"});this.father=a;this.initEvent();a.append(this.text);this.fontSize=0.75*this.config.lineH*this.ph;this.text.find("div").css("font-size",this.fontSize+"px")}
initText.prototype.initEvent=function(){var a=this;this.flag=0;this.linkURL=this.slide=this.form=null;if(null!=a.config.action){try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}this.text.bind(_event._down,function(){c==PageEditor.TriggerEventType.MouseDown&&
actionEvent.call(a);browserType==3?event.cancelBubble=true:event.stopPropagation()});this.text.bind("mouseover",function(){c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a);browserType==3?event.cancelBubble=true:event.stopPropagation()});this.text.bind(isTouch?_event._end:"mouseout",function(){c==PageEditor.TriggerEventType.MouseOut&&actionEvent.call(a)})}};
initText.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.text.css({width:this.width+"px",height:this.height+"px"});this.setPosition();if(null!=this.form)this.form.onResize(bookContainer.width(),bookContainer.height());if(null!=this.slide)this.slide.onResize(bookContainer.width(),bookContainer.height());this.fontSize=0.75*this.config.lineH*this.ph;this.text.find("div").css("font-size",this.fontSize+"px")};
initText.prototype.setPosition=function(){this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.text.css({left:this.x+"px",top:this.y+"px"})};function initLine(a,b,c,d,e){this.config=$.extend({StartX:0,StartY:0,EndX:100,EndY:100,width:200,height:20,x:0,y:0,alpha:1,lineAlpha:1,lineWidth:1,lineType:null,dotWidth:3,color:null,sh:"false",sx:4,sy:4,se:2,sr:null},b);this.pw=c;this.ph=d;this.color=colorTo0x(this.config.color);this.bstyle="Solid line"==this.config.lineType?"solid":"dashed";this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.id="line"+e;this.x1=
this.x-10;this.y1=this.y-10;0>this.x-10&&(this.x1=0);0>this.y-10&&(this.y1=0);this.line=$("<canvas id="+this.id+" width="+(this.width+20)+" height="+(this.height+20)+" style='position: absolute;top:"+this.y1+"px;left:"+this.x1+"px'></canvas>");a.append(this.line);this.linecan(this.x,this.y,this.config.StartX,this.config.StartY,this.config.EndX,this.config.EndY,this.width,this.height,this.config.lineWidth,this.config.dotWidth,this.color,this.config.lineAlpha,this.bstyle,this.config.sx,this.config.sy,
this.config.se,this.config.sr,this.config.sh)}initLine.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.line.css({width:this.width+20+"px",height:this.height+20+"px"});this.setPosition()};initLine.prototype.setPosition=function(){this.x=this.config.x*this.pw-10;this.y=this.config.y*this.ph-10;this.line.css({left:this.x+"px",top:this.y+"px"})};
initLine.prototype.linecan=function(a,b,c,d,e,f,h,j,k,l,r,m,p,w,n,z,t,J){var v=b=a=0,s=0,x=this.line[0].getContext("2d"),l=parseFloat(l);0==c&&0==d?(s=v=10,a=h+10,b=j+10):0==c&&0!=d?(v=10,s=10+j,a=h+10,b=10):0!=c&&0==d?(v=10+h,a=s=10,b=j+10):(v=10+h,s=10+j,b=a=10);x.moveTo(v,s);x.lineWidth=k;x.globalAlpha=m;x.strokeStyle=r;"false"!=J&&(x.shadowOffsetX=w,x.shadowOffsetY=n,x.shadowBlur=z,x.shadowColor=colorTo0x(t));if("solid"==p)x.lineTo(a,b);else{h=0;r=l+2;j=v;k=s;num=0==f-d?e>c?(a-v)/r:(v-a)/r:0==
e-c?f>d?(b-s)/r:(s-b)/r:d<f&&c<e?a-v>b-s?(a-v)/r:(b-s)/r:d>f&&c<e?a-v>s-b?(a-v)/r:(s-b)/r:d<f&&c>e?v-a>b-s?(v-a)/r:(b-s)/r:v-a>s-b?(v-b)/r:(s-b)/r;r=num-1;for(i=0;i<r;i++)(x.moveTo(j,k),0==f-d?j=e>c?j+l:j-l:0==e-c?k=f>d?k+l:k-l:d<f&&c<e?a-v>b-s?(h=Math.abs((b-s)/(a-v)),j+=l,k+=l*h):(h=Math.abs((a-v)/(b-s)),j+=l*h,k+=l):d>f&&c<e?a-v>s-b?(h=Math.abs((b-s)/(a-v)),j+=l,k-=l*h):(h=Math.abs((a-v)/(b-s)),j+=l*h,k-=l):d<f&&c>e?v-a>b-s?(h=Math.abs((b-s)/(a-v)),j-=l,k+=l*h):(h=Math.abs((a-v)/(b-s)),j-=l*h,
k+=l):v-a>s-b?(h=Math.abs((b-s)/(a-v)),j-=l,k-=l*h):(h=Math.abs((a-v)/(b-s)),j-=l*h,k-=l),x.lineTo(j,k),0==f-d)?j=e>c?j+2:j-2:0==e-c?k=f>d?k+2:k-2:d<f&&c<e?a-v>b-s?(j+=2,k+=2*h):(j+=2*h,k+=2):d>f&&c<e?a-v>s-b?(j+=2,k-=2*h):(j+=2*h,k-=2):d<f&&c>e?v-a>b-s?(j-=2,k+=2*h):(j-=2*h,k+=2):v-a>s-b?(j-=2,k-=2*h):(j-=2*h,k-=2)}x.stroke()};function initArrow(a,b,c,d,e){this.config=$.extend({StartX:0,StartY:0,EndX:100,EndY:100,width:200,height:20,x:0,y:0,alpha:1,lineWidth:1,lineType:null,dotWidth:3,color:null,arrowType:null,sh:"false",sx:4,sy:4,se:2,sr:null},b);this.pw=c;this.ph=d;this.color=colorTo0x(this.config.color);this.bstyle="Solid line"==this.config.lineType?"solid":"dashed";this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.id="arrow"+e;
this.x1=this.x-10;this.y1=this.y-10;0>this.x-10&&(this.x1=0);0>this.y-10&&(this.y1=0);this.arrow=$("<canvas id="+this.id+" width="+(this.width+20)+" height="+(this.height+20)+" style='position: absolute;top:"+this.y1+"px;left:"+this.x1+"px'></canvas>");a.append(this.arrow);this.arrowcan(this.x,this.y,this.config.StartX,this.config.StartY,this.config.EndX,this.config.EndY,this.width,this.height,this.config.lineWidth,this.config.dotWidth,this.color,this.config.alpha,this.bstyle,this.config.sx,this.config.sy,
this.config.se,this.config.sr,this.config.sh)}initArrow.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.arrow.css({width:this.width+20+"px",height:this.height+20+"px"});this.setPosition()};initArrow.prototype.setPosition=function(){this.x=this.config.x*this.pw-10;this.y=this.config.y*this.ph-10;this.arrow.css({left:this.x+"px",top:this.y+"px"})};
initArrow.prototype.arrowcan=function(a,b,c,d,e,f,h,j,k,l,r,m,p,w,n,z,t,J){var v=b=a=0,s=0,x=0,y=this.arrow[0].getContext("2d"),l=parseFloat(l);y.clearRect(0,0,this.pw,this.ph);y.save();y.lineWidth=k;y.globalAlpha=m;y.strokeStyle=r;"false"!=J&&(y.shadowOffsetX=w,y.shadowOffsetY=n,y.shadowBlur=z,y.shadowColor=colorTo0x(t));0==c&&0==d?(x=s=10,a=h+10,b=j+10):0==c&&0!=d?(s=10,x=10+j,a=h+10,b=10):0!=c&&0==d?(s=10+h,a=x=10,b=j+10):(s=10+h,x=10+j,b=a=10);y.translate(0,0);y.beginPath();y.moveTo(s,x);"Double Arrow"==
this.config.arrowType&&(0==f-d?e>c?y.moveTo(s+5,x):y.moveTo(s-5,x):0==e-c&&(f>d?y.moveTo(s,x+5):y.moveTo(s,x-5)));if("solid"==p)0==f-d?e>c?y.lineTo(a-5,b):y.lineTo(a+5,b):0==e-c?f>d?y.lineTo(a,b-5):y.lineTo(a,b+5):y.lineTo(a,b);else{h=0;p=l+2;j=s;m=x;p=(0==f-d?e>c?(a-s)/p:(s-a)/p:0==e-c?f>d?(b-x)/p:(x-b)/p:d<f&&c<e?a-s>b-x?(a-s)/p:(b-x)/p:d>f&&c<e?a-s>x-b?(a-s)/p:(x-b)/p:d<f&&c>e?s-a>b-x?(s-a)/p:(b-x)/p:s-a>x-b?(s-b)/p:(x-b)/p)-1;for(i=0;i<p;i++)(y.moveTo(j,m),0==f-d?j=e>c?j+l:j-l:0==e-c?m=f>d?m+
l:m-l:d<f&&c<e?a-s>b-x?(h=Math.abs((b-x)/(a-s)),j+=l,m+=l*h):(h=Math.abs((a-s)/(b-x)),j+=l*h,m+=l):d>f&&c<e?a-s>x-b?(h=Math.abs((b-x)/(a-s)),j+=l,m-=l*h):(h=Math.abs((a-s)/(b-x)),j+=l*h,m-=l):d<f&&c>e?s-a>b-x?(h=Math.abs((b-x)/(a-s)),j-=l,m+=l*h):(h=Math.abs((a-s)/(b-x)),j-=l*h,m+=l):s-a>x-b?(h=Math.abs((b-x)/(a-s)),j-=l,m-=l*h):(h=Math.abs((a-s)/(b-x)),j-=l*h,m-=l),y.lineTo(j,m),0==f-d)?j=e>c?j+2:j-2:0==e-c?m=f>d?m+2:m-2:d<f&&c<e?a-s>b-x?(j+=2,m+=2*h):(j+=2*h,m+=2):d>f&&c<e?a-s>x-b?(j+=2,m-=2*h):
(j+=2*h,m-=2):d<f&&c>e?s-a>b-x?(j-=2,m+=2*h):(j-=2*h,m+=2):s-a>x-b?(j-=2,m-=2*h):(j-=2*h,m-=2)}y.fillStyle=r;y.stroke();y.save();v=2<1*k?15:10;"Double Arrow"==this.config.arrowType&&(y.moveTo(s,x),"Double Arrow"==this.config.arrowType&&(0==f-d?e>c?y.moveTo(s-1,x):y.moveTo(s+1,x):0==e-c&&(f>d?y.moveTo(s,x-1):y.moveTo(s,x+1))),y.translate(s,x),0<=b-x?y.rotate(4.7-Math.atan((a-s)/(b-x))):y.rotate(4.7-(Math.PI+Math.atan((a-s)/(b-x)))),y.lineTo(-v,v-5),y.lineTo(-(v-5),0),y.lineTo(-v,-(v-5)),y.lineTo(0,
0),y.fill(),y.restore());y.moveTo(a,b);y.translate(a,b);0<=b-x?y.rotate(1.5-Math.atan((a-s)/(b-x))):y.rotate(1.5-(Math.PI+Math.atan((a-s)/(b-x))));y.lineTo(-v,v-5);y.lineTo(-(v-5),0);y.lineTo(-v,-(v-5));y.lineTo(0,0);y.fill();y.restore()};function initAText(a,b,c,d,e){this.config=$.extend({width:200,height:20,x:0,y:0,alpha:1,textStr:null,fontName:null,fontSize:12,color:null,tbold:"false",italic:"false",align:"left",action:null,repeat:"false",moveSpeed:1,sh:"false",sx:4,sy:4,se:2,sr:null},b);this.pw=c;this.ph=d;this.color=colorTo0x(this.config.color);this.father=a;this.speed=12E3*(1/this.config.moveSpeed);this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;
this.id="text"+e;this.scrollid="scroll"+this.id;this.atext="false"!=this.config.sh?$("<div id="+this.id+" style='overflow: hidden;position:absolute;left:"+this.x+"px; top:"+this.y+"px;height:"+this.height+"px;width:"+this.width+"px;box-shadow:"+this.config.sx+"px "+this.config.sy+"px "+this.config.se+"px "+colorTo0x(this.config.sr)+";opacity:"+this.config.alpha+"'></div>"):$("<div id="+this.id+" style='overflow: hidden;position:absolute;left:"+this.x+"px; top:"+this.y+"px;height:"+this.height+"px;width:"+
this.width+"px;opacity:"+this.config.alpha+"'></div>");this.atext2=$("<div id="+this.scrollid+" style='word-break: break-word;font-family:"+this.config.fontName+";width:100%;font-size:"+this.config.fontSize+"px;color:"+this.color+";text-align:"+this.config.align+";'>"+this.config.textStr+"</div>");"false"!=this.config.tbold&&this.atext.css({"font-weight":"bold"});"false"!=this.config.italic&&this.atext.css({"font-style":"italic"});this.father=a;this.initEvent();a.append(this.atext);this.atext.append(this.atext2);
this.initScroll()}initAText.prototype.initScroll=function(){this._wrap=this.atext2;this.initScrollText()};initAText.prototype.initScrollText=function(){var a=this,b=a._wrap,c=b.height();b.animate({marginTop:-c+"px"},a.speed,function(){"true"==a.config.repeat?(b.css("marginTop",a.height),a.initScrollText()):b.css("marginTop",0)})};
initAText.prototype.initEvent=function(){var a=this;this.flag=0;this.linkURL;if(null!=a.config.action){try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}this.atext.bind(_event._down,function(){c==PageEditor.TriggerEventType.MouseDown&&actionEvent.call(a);
browserType==3?event.cancelBubble=true:event.stopPropagation()});this.atext.bind(_event._move,function(){c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a)});this.atext.bind(_event._end,function(){c==PageEditor.TriggerEventType.MouseOut&&actionEvent.call(a)})}};
initAText.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.atext.css({width:this.width+"px",height:this.height+"px"});this.setPosition();if(null!=this.form)this.form.onResize(bookContainer.width(),bookContainer.height());if(null!=this.slide)this.slide.onResize(bookContainer.width(),bookContainer.height());this.fontSize=0.75*this.config.lineH*this.ph;this.atext.css("font-size",this.fontSize+"px");this.atext2.css("font-size",
this.fontSize+"px")};initAText.prototype.setPosition=function(){this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.atext.css({left:this.x+"px",top:this.y+"px"})};function initArea(a,b,c,d,e){this.config=$.extend({width:200,height:20,x:0,y:0,alpha:1,color:null,rounds:"false",ellipseWidth:5,ellipseHeight:5,action:null,sh:"false",sx:4,sy:4,se:2,sr:null},b);this.pw=c;this.ph=d;this.father=a;this.color=colorTo0x(this.config.color);this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.id="Area"+e;this.Area="false"!=this.config.sh?$("<div id="+this.id+" style='overflow: hidden;position:absolute;top:"+
this.y+"px;left:"+this.x+"px;background:"+this.color+";height:"+this.height+"px;width:"+this.width+"px;box-shadow:"+this.config.sx+"px "+this.config.sy+"px "+this.config.se+"px "+colorTo0x(this.config.sr)+";opacity:"+this.config.alpha+"'></div>"):$("<div id="+this.id+" style='overflow: hidden;position:absolute;top:"+this.y+"px;left:"+this.x+"px;background:"+this.color+";height:"+this.height+"px;width:"+this.width+"px;opacity:"+this.config.alpha+"'></div>");"false"!=this.config.rounds&&this.Area.css({"border-radius":this.config.ellipseWidth+
"px "+this.config.ellipseHeight+"px"});this.father=a;this.initEvent();a.append(this.Area)}
initArea.prototype.initEvent=function(){var a=this;this.flag=0;this.slide=this.form=null;this.linkURL;if(null!=a.config.action){try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}this.Area.bind(_event._down,function(){c==PageEditor.TriggerEventType.MouseDown&&
actionEvent.call(a);browserType==3?event.cancelBubble=true:event.stopPropagation()});this.Area.bind("mouseover",function(){c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a)});this.Area.bind(isTouch?_event._end:"mouseout",function(){c==PageEditor.TriggerEventType.MouseOut&&actionEvent.call(a)})}};
initArea.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.Area.css({width:this.width+"px",height:this.height+"px"});this.setPosition();if(null!=this.form)this.form.onResize(bookContainer.width(),bookContainer.height());if(null!=this.slide)this.slide.onResize(bookContainer.width(),bookContainer.height())};
initArea.prototype.setPosition=function(){this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.Area.css({left:this.x+"px",top:this.y+"px"})};function initFlashShow(a,b,c,d){this.pw=c;this.ph=d;this.config=$.extend({width:0.2,height:0.2,x:0.2,y:0.2,photo:null,repeatPlay:!0,customSize:!1},b);null!=this.config.photo&&(this.showingA=!0,this.showingIndex=1,this.background=$("<div></div>"),this.totalImage=this.config.photo.photos.length,this.moveTo=1,this.width=this.pw*this.config.width,this.height=this.ph*this.config.height,this.background.css({width:this.width+"px",height:this.height+"px",left:this.config.x*this.pw+"px",top:this.config.y*
this.ph+"px",position:"absolute",overflow:"hidden"}),this.photoA=new animateImage(this.background,this.config.photo,this.width,this.height,this.config.repeatPlay,this.config.customSize,this.config.photo.width,this.config.photo.width),this.photoB=new animateImage(this.background,this.config.photo,this.width,this.height,this.config.repeatPlay,this.config.customSize,this.config.photo.width,this.config.photo.width),a.append(this.background),this.photoB.fillImage(2),this.photoA.fillImage(1),this.initChangeImageEvent(!0))}
initFlashShow.prototype={onResize:function(a,b){this.pw=a;this.ph=b;this.width=this.pw*this.config.width;this.height=this.ph*this.config.height;this.background.css({width:this.width+"px",height:this.height+"px"});this.photoA.onResize(a,b);this.photoB.onResize(a,b);this.setPosition()},setPosition:function(){this.background.css({left:this.pw*this.config.x+"px",top:this.ph*this.config.y+"px"})},initChangeImageEvent:function(a){var b=this,c=this.photoA.getImage(),d=this.photoB.getImage(),e,f;a||(c=this.photoB.getImage(),
d=this.photoA.getImage());switch(this.moveTo){case 1:e=f=1;break;case 2:e=f=-1;break;case 3:f=1;e=-1;break;case 4:f=-1,e=1}this.moveTo=4==this.moveTo?1:this.moveTo+1;var h=c.position().left+66*f,j=c.position().top+66*e,k=c.position().left+77*f,l=c.position().top+77*e;c.animate({left:h,top:j},{queue:!1,duration:3E3,complete:function(){b.showingIndex++;if(!(b.showingInde>b.totalImage)||b.config.repeatPlay){if(b.showingIndex>b.totalImage)b.showingIndex=0;c.animate({opacity:0,left:k,top:l},500,function(){a?
b.photoA.fillImage(b.showingIndex+1):b.photoB.fillImage(b.showingIndex+1);c.css({"z-index":0});d.css({"z-index":1})});b.initChangeImageEvent(!a)}}}).animate({opacity:1},500)}};function animateImage(a,b,c,d,e,f,h,j){this.img=$("<img />");this.imgIndex=-1;this.imageArr=b;this.bw=c;this.bh=d;this.repeat=e;a.append(this.img);this.img.css({position:"absolute"});f&&void 0!=h&&void 0!=j&&this.img.css({width:h+"px",height:j+"px"})}
animateImage.prototype.fillImage=function(a){if(this.imgIndex==a)this.img.css({left:(this.bw-this.img[0].width)/2+"px",top:(this.bh-this.img[0].height)/2+"px"});else if(!(a>this.imageArr.photos.length)||this.repeat){a>this.imageArr.photos.length&&(a=1);this.imgIndex==a;var b=this;this.img.attr("src",b.getImageDiv(a));this.img.load(function(){b.img.css({left:(b.bw-this.width)/2+"px",top:(b.bh-this.height)/2+"px"})})}};animateImage.prototype.getImageDiv=function(a){return this.imageArr.photos[a-1].photo};
animateImage.prototype.setZIndex=function(a){this.img.css("z-index",a)};animateImage.prototype.onResize=function(a,b){this.bw=a;this.bh=b;this.img.css({left:(this.bw-this.img[0].width)/2+"px",top:(this.bh-this.img[0].height)/2+"px"})};animateImage.prototype.setPosition=function(a,b){this.img.css({left:a+"px",top:b+"px"})};animateImage.prototype.animate=function(){};animateImage.prototype.getImage=function(){return this.img};function initCallout(a,b,c,d,e){this.config=$.extend({width:200,height:20,x:0,y:0,alpha:1,textStr:null,lineH:20,fontName:null,fontSize:12,color:null,tbold:"false",italic:"false",bgalpha:1,action:null,fillBg:"false",bgcolor:null,direct:"Down",cx1:0,cy1:0,cx2:0,cy2:0,pointx:0,pointy:0,cornerRadiut:5,borderWidth:3,borderColor:null,bordreAlpha:1,sh:"false",sx:4,sy:4,se:2,sr:null},b);this.pw=c;this.ph=d;this.father=a;this.color=colorTo0x(this.config.color);this.width=this.config.width*this.pw;this.height=
this.config.height*this.ph;this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.cx1=this.config.cx1*this.width;this.cy1=this.config.cy1*this.height;this.cx2=this.config.cx2*this.width;this.cy2=this.config.cy2*this.height;this.pointx=this.config.pointx*this.width;this.pointy=this.config.pointy*this.height;this.id="callout"+e;this.cl=this.ct=this.hl=this.wl=this.canl=this.cant=this.canh=this.canw=0;switch(this.config.direct){case "Down":if(0>this.pointx){this.canw=this.width-this.pointx+20;
this.canh=this.pointy+20;this.cant=this.y-10;this.canl=this.x-(this.canw-this.width-10);break}this.canw=this.pointx>this.width?this.pointx+20:this.width+20;this.canh=this.pointy+20;this.cant=this.y-10;this.canl=this.x-10;break;case "left":if(0>this.pointy){this.canw=this.width-this.pointx+20;this.canh=this.height-this.pointy+20;this.cant=this.y-(this.canh-this.height-10);this.canl=this.x-(this.canw-this.width-10);break}this.pointy>this.height?(this.canw=this.width-this.pointx+20,this.canh=this.pointy+
20):(this.canw=this.width-this.pointx+20,this.canh=this.height+20);this.cant=this.y-10;this.canl=this.x-(this.canw-this.width-10);break;case "Up":if(0>this.pointx){this.canw=this.width-this.pointx+20;this.canh=this.height-this.pointy+20;this.cant=this.y-(this.canh-this.height-10);this.canl=this.x-(this.canw-this.width-10);break}this.canw=this.pointx>this.width?this.pointx+20:this.width+20;this.canh=this.height-this.pointy+20;this.cant=this.y-(this.canh-this.height-10);this.canl=this.x-10;break;case "Right":if(0>
this.pointy){this.canw=this.pointx+20;this.canh=this.height-this.pointy+20;this.cant=this.y-(this.canh-this.height-10);this.canl=this.x-10;break}this.pointy>this.height?(this.canw=this.pointx+20,this.canh=this.pointy+20):(this.canw=this.pointx+20,this.canh=this.height+20);this.cant=this.y-10;this.canl=this.x-10}this.wl=this.canw/this.pw;this.hl=this.canh/this.ph;this.ct=this.cant/this.ph;this.cl=this.canl/this.pw;this.callout=$("<canvas id="+this.id+" width="+this.canw+" height="+this.canh+" style='position: absolute;top:"+
this.cant+"px;left:"+this.canl+"px'></canvas>");a.append(this.callout);this.calloutDown();this.father=a;this.initEvent()}
initCallout.prototype.calloutDown=function(){var a=[],b=[],c,d,e=this.callout[0].getContext("2d"),f,h,j,k,l,r,m,p,w,n,z,t;switch(this.config.direct){case "Down":if(0>this.pointx){f=this.canw-this.width-10;h=10;c=this.canw-10;d=10;j=this.canw-10;k=this.height+10;l=this.canw-(this.width-this.cx2)-10;r=this.height+10;m=10;p=this.pointy+10;w=this.canw-(this.width-this.cx1)-10;n=this.height+10;z=this.canw-(this.width+10);t=this.height+10;break}h=f=10;c=this.width+10;d=10;j=this.width+10;k=this.height+
10;l=this.cx2+10;r=this.height+10;m=this.pointx+10;p=this.pointy+10;w=this.cx1+10;n=this.height+10;z=10;t=10+this.height;break;case "left":if(0>this.pointy){f=this.canw-this.width-10;h=this.canh-this.height-10;c=this.canw-10;d=this.canh-this.height-10;j=this.canw-10;k=this.canh-10;l=this.canw-this.width-10;r=this.canh-10;m=this.canw-this.width-10;p=this.canh-(this.height-this.cy2+10);n=w=10;z=this.canw-this.width-10;t=this.canh-(this.height-this.cy1+10);break}this.pointy>this.height?(f=this.canw-
this.width-10,h=10,c=this.canw-10,d=10,j=this.canw-10,k=this.height+10,l=this.canw-this.width-10,r=this.height+10,m=this.canw-this.width-10,p=this.cy2+10,w=10,n=this.canh-10):(f=this.canw-this.width-10,h=10,c=this.canw-10,d=10,j=this.canw-10,k=this.height+10,l=this.canw-this.width-10,r=this.height+10,m=this.canw-this.width-10,p=this.cy2+10,w=10,n=this.pointy+10);z=this.canw-this.width-10;t=this.cy1+10;break;case "Up":if(0>this.pointx){f=this.canw-this.width-10;h=this.canh-this.height-10;c=this.canw-
(this.width-this.cx2)-10;d=this.canh-this.height-10;k=j=10;l=this.canw-(this.width-this.cx1)-10;r=this.canh-this.height-10;m=this.canw-10;p=this.canh-this.height-10;w=this.canw-10;n=this.canh-10;z=this.canw-this.width-10;t=this.canh-10;break}this.pointx>this.width?(f=10,h=this.canh-this.height-10,c=this.cx2+10,d=this.canh-this.height-10,j=this.canw-10):(f=10,h=this.canh-this.height-10,c=this.cx2+10,d=this.canh-this.height-10,j=this.pointx+10);k=10;l=this.cx1+10;r=this.canh-this.height-10;m=this.width+
10;p=this.canh-this.height-10;w=this.width+10;n=this.canh-10;z=10;t=this.canh-10;break;case "Right":if(0>this.pointy){f=10;h=this.canh-this.height-10;c=this.width+10;d=this.canh-this.height-10;j=this.width+10;k=this.canh-(this.height-this.cy2+10);l=this.canw-10;r=10;m=this.width+10;p=this.canh-(this.height-this.cy1+10);w=this.width+10;n=this.canh-10;z=10;t=this.canh-10;break}this.pointy>this.height?(h=f=10,c=this.width+10,d=10,j=this.width+10,k=this.cy2+10,l=this.canw-10,r=this.canh-10):(h=f=10,c=
this.width+10,d=10,j=this.width+10,k=this.cy2+10,l=this.canw-10,r=this.pointy+10);m=this.width+10;p=this.cy1+10;w=this.width+10;n=this.height+10;z=10;t=this.height+10}e.beginPath();e.lineWidth="1";e.globalAlpha=this.config.bgalpha;e.strokeStyle=this.color;e.fillStyle=colorTo0x(this.config.bgcolor);e.moveTo(f,h);e.lineTo(c,d);e.lineTo(j,k);e.lineTo(l,r);e.lineTo(m,p);e.lineTo(w,n);e.lineTo(z,t);e.closePath();e.fill();e.stroke();e.font=this.config.fontSize+"px "+this.config.fontName;a=this.config.textStr;
if(e.measureText(a).width<this.width)e.strokeText(a,f+10,h+1*this.config.fontSize+5);else{a=a.split(" ");d=a[0];for(j=0;j<a.length;j++)j==a.length-1?b.push(d):(c=d+" "+a[j+1],e.measureText(c).width<this.width?d=c:(b.push(d),d=a[j+1]));for(a=0;a<b.length;a++)e.strokeText(b[a],f+10,h+this.config.fontSize*a+15)}e.lineWidth=this.config.borderWidth;e.strokeStyle=colorTo0x(this.config.borderColor);e.stroke()};
initCallout.prototype.initEvent=function(){var a=this;this.flag=0;this.linkURL=this.form=this.form=null;if(null!=a.config.action){try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}this.callout.bind(_event._down,function(){c==PageEditor.TriggerEventType.MouseDown&&
actionEvent.call(a);browserType==3?event.cancelBubble=true:event.stopPropagation()});this.callout.bind("mouseover",function(){c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a)});this.callout.bind(isTouch?_event._end:"mouseout",function(){c==PageEditor.TriggerEventType.MouseOut&&actionEvent.call(a)})}};
initCallout.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.wl*this.pw;this.height=this.hl*this.ph;this.callout.css({width:this.width+"px",height:this.height+"px"});this.setPosition();if(null!=this.form)this.form.onResize(bookContainer.width(),bookContainer.height());if(null!=this.slide)this.slide.onResize(bookContainer.width(),bookContainer.height());this.fontSize=0.75*this.config.lineH*this.ph};
initCallout.prototype.setPosition=function(){this.x=this.cl*this.pw;this.y=this.ct*this.ph;this.callout.css({left:this.x+"px",top:this.y+"px"})};function initSlideShow(a,b,c,d){this.photos=$.extend([],b);if(!(1>this.photos.length)){this.father=a;this.sw=c-8;this.sh=d-8;this.imgIndex=-1;this.imgWidth=200;this.imgHeight=300;this.boxWidth=200;this.boxHeight=300;this.slideShowBG=new grayBackground(a,"#333333",0.3,c,d);this.photoBox=$("<div></div>");this.img=$("<img style='position : absolute;' />");a.append(this.photoBox);this.leftButton=new button(1,a,{iconURL:uiBaseURL+"previous_down.png"});this.rightButton=new button(1,a,{iconURL:uiBaseURL+
"next_down.png"});this.closeButton=new button(1,a,{iconURL:uiBaseURL+"close.png"},!0);this.loadTextField=new label("Loading...",this.photoBox);this.loadTextField.setCSS({"z-index":-1,left:"5px",top:"5px"});this.leftButton.setButtonPosition(5,(this.sh-78)/2);this.rightButton.setButtonPosition(this.sw-55,(this.sh-78)/2);this.closeButton.setButtonPosition(this.sw-45,5);this.closeButton.setCSS({"z-index":210});this.rightButton.setCSS({"z-index":202});this.leftButton.setCSS({"z-index":203});this.photoBox.css({width:this.boxWidth+
"px",height:this.boxHeight+"px",left:(this.sw-this.boxWidth)/2+"px",top:(this.sh-this.boxHeight)/2+"px",position:"absolute","background-color":"#eeeeee","z-index":201,"-webkit-box-shadow":"0 0 10px rgba(40, 0, 0, 0.7)","-moz-box-shadow":"0 0 10px rgba(40, 0, 0, 0.7)","box-shadow":"0 0 10px rgba(40, 0, 0, 0.7)"});this.changeImage(0);var e=this;this.photoBox.bind(_event._down,function(){e.nextPage()});this.closeButton.onMouseUp(this,this.hide);this.leftButton.onMouseDown(this,this.prePage);this.rightButton.onMouseDown(this,
this.nextPage)}}initSlideShow.prototype.nextPage=function(){var a=this.imgIndex+1;a>=this.photos.length&&(a=0);this.changeImage(a)};initSlideShow.prototype.prePage=function(){var a=this.imgIndex-1;0>a&&(a=this.photos.length-1);this.changeImage(a)};initSlideShow.prototype.onResize=function(a,b){this.sw=a-8;this.sh=b-8;this.slideShowBG.onResize(a,b);this.setPosition()};
initSlideShow.prototype.setPosition=function(){this.photoBox.css({left:(this.sw-this.boxWidth)/2+"px",top:(this.sh-this.boxHeight)/2+"px"});this.leftButton.setButtonPosition(5,(this.sh-78)/2);this.rightButton.setButtonPosition(this.sw-55,(this.sh-78)/2);this.closeButton.setButtonPosition(this.sw-45,5)};
initSlideShow.prototype.changeImage=function(a){this.imgIndex=a;this.img.remove();a=this.photos[a].url;isFlipPdf&&(a="."+a);var b=this;this.img.attr("src",a);this.img.load(function(){b.imgWidth=this.width;b.imgHeight=this.height;var a=b.imgWidth,d=b.imgHeight;if(b.imgWidth>b.sw||b.imgHeight>b.sh)a=b.imgWidth/b.imgHeight,a>b.sw/b.sh?(a=b.sw,d=b.sw*b.imgHeight/b.imgWidth):(d=b.sh,a*=b.sh);b.img.css({width:a+"px",height:d+"px"});b.boxWidth!=a||b.boxHeight!=d?b.photoBox.animate({width:a+8,height:d+8,
left:(b.sw-a)/2,top:(b.sh-d)/2},300,function(){b.photoBox.append(b.img)}):b.photoBox.append(b.img);b.boxWidth=a;b.boxHeight=d;b.img.css({left:"4px",top:"4px"})})};initSlideShow.prototype.setImagePosition=function(){};initSlideShow.prototype.show=function(){};initSlideShow.prototype.hide=function(){var a=this;this.photoBox.animate({width:20,height:20,top:this.sh/2-10,left:this.sw/2-10},200,function(){a.leftButton.remove();a.rightButton.remove();a.closeButton.remove();a.photoBox.remove();a.slideShowBG.hide()})};function initVideoForm(a,b,c,d){this.config=$.extend({width:400,height:300,src:null,alpha:0.3,caption:"",closeIconURL:uiBaseURL+"close.png"},b);this.father=a;null!=this.config.src&&(this.config.width=parseInt(this.config.width),this.config.height=parseInt(this.config.height),this.sw=c,this.sh=d,this.th=28,this.background=new grayBackground(a,"#333333",this.config.alpha,c,d),this.form=$("<div></div>"),this.titleBar=$("<div></div>"),isFlipPdf&&(this.config.src="../"+this.config.src),""!=this.config.closeIconURL&&
(this.closeButton=new button(1,this.titleBar,{iconURL:this.config.closeIconURL},!0),this.closeButton.setButtonPosition(this.config.width-28,0)),""!=this.config.caption&&(this.captionLabel=new label(this.config.caption,this.titleBar),this.captionLabel.setLabelPosition(5,3,["left","top"]),this.captionLabel.setFont(14,"#dddddd","Tahoma")),this.video=$("<video src='"+this.config.src+"' controls='controls'></video>"),this.form.css({width:this.config.width+4+"px",height:this.config.height+4+"px",left:(c-
this.config.width)/2+"px",top:(d-this.config.height)/2+"px","background-color":"#dddddd","-webkit-border-radius":"5px","-moz-border-radius":"5px","-ms-border-radius":"5px","border-radius":"5px",position:"absolute","z-index":201}),this.titleBar.css({width:this.config.width+"px",height:this.th+"px",left:"2px",top:"2px","border-top-left-radius":"5px","border-top-right-radius":"5px",position:"absolute","background-color":"#111111"}),this.video.css({width:this.config.width+"px",height:this.config.height-
this.th+"px",top:this.th+2+"px",left:"2px",position:"absolute"}),a.append(this.form),this.form.append(this.titleBar),this.form.append(this.video),this.initEvent())}initVideoForm.prototype.onResize=function(a,b){this.sw=a;this.sh=b;this.background.onResize(a,b);this.setPosition()};initVideoForm.prototype.setPosition=function(){this.form.css({left:(this.sw-this.config.width)/2+"px",top:(this.sh-this.config.height)/2+"px"})};
initVideoForm.prototype.initEvent=function(){var a=this;this.closeButton.onMouseUp(this,this.closeForm);var b=!1,c,d;this.titleBar.bind(_event._down,function(e){e=isTouch?e.originalEvent.touches:[e];b=!0;c=Point(e[0].pageX,e[0].pageY);d=Point(a.form.offset().left,a.form.offset().top);return!1});this.titleBar.bind(_event._move,function(e){e=isTouch?e.originalEvent.touches:[e];b&&a.form.css({top:d.y+(e[0].pageY-c.y)+"px",left:d.x+(e[0].pageX-c.x)+"px"});return!1});this.titleBar.bind(_event._end,function(){return b=
!1});this.titleBar.bind("mouseleave",function(){return b=!1})};initVideoForm.prototype.closeForm=function(){var a=this;this.form.animate({width:20,height:20,left:this.sw/2-10,top:this.sh/2-10},200,function(){a.background.hide();a.form.remove()})};function initBanner(a,b,c,d,e){this.config=$.extend({width:200,height:20,x:0,y:0,alpha:1,action:null,banners:null},b);this.pw=c;this.ph=d;this.father=a;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.a=this.config.banners.banner;this.id="banner"+e;this.image=null;if("string"==typeof this.a.imageUrl)this.image="<li><img src='"+this.a.imageUrl+"' /></li>";else for(b=0;b<this.a.length;b++)this.image=null!=this.image?
this.image+"<li><img src='"+this.a[b].imageUrl+"' /></li>":"<li><img src='"+this.a[b].imageUrl+"' /></li>";this.banner=$("<div style='left:"+this.x+"px;top:"+this.y+"px;'></div>");this.bannerul=$("<ul></ul>");this.bannerli=$(this.image);a.append(this.banner);this.banner.append(this.bannerul);this.bannerul.append(this.bannerli);this.imageamin();this.father=a;this.initEvent()}
initBanner.prototype.imageamin=function(){this.banner.jFlip(this.width,this.height,{background:"white",cornersTop:!1,scale:"fill"},this.x,this.y)};
initBanner.prototype.initEvent=function(){var a=this;this.flag=0;this.linkURL;if(null!=a.config.action){try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}this.banner.bind(_event._down,function(){c==PageEditor.TriggerEventType.MouseDown&&actionEvent.call(a);
browserType==3?event.cancelBubble=true:event.stopPropagation()});this.banner.bind(_event._move,function(){c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a)});this.banner.bind(_event._end,function(){c==PageEditor.TriggerEventType.MouseOut&&actionEvent.call(a)})}};initBanner.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;$(".bannerdiv canvas").css({width:this.width+"px",height:this.height+"px"});this.setPosition()};
initBanner.prototype.setPosition=function(){this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;$(".bannerdiv").css({left:this.x+"px",top:this.y+"px"})};function initStarText(a,b,c,d,e){this.config=$.extend({width:200,height:20,x:0,y:0,alpha:1,textStr:null,fontName:null,fontSize:12,color:null,tbold:"false",italic:"false",align:"left",action:null,repeat:"false",moveSpeed:1,sh:"false",sx:4,sy:4,se:2,sr:null},b);this.pw=c;this.ph=d;this.color=colorTo0x(this.config.color);this.father=a;this.speed=22E3*(1/this.config.moveSpeed);this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.x=this.config.x*this.pw;this.y=this.config.y*
this.ph;this.id="startext"+e;this.scrollid="starwars"+this.id;this.textli="";this.offset=0;this.stepping=0.2;this.text=this.config.textStr.split("<br/>");for(b=0;b<this.text.length;b++)this.textli=this.textli+"<li style='list-style-type:none;'>"+this.text[b]+"</li>";this.startext="false"!=this.config.sh?$("<div style='overflow: hidden;position:absolute;left:"+this.x+"px; top:"+this.y+"px;height:"+this.height+"px;width:"+this.width+"px;box-shadow:"+this.config.sx+"px "+this.config.sy+"px "+this.config.se+
"px "+colorTo0x(this.config.sr)+";opacity:"+this.config.alpha+"'></div>"):$("<div style='overflow: hidden;position:absolute;left:"+this.x+"px; top:"+this.y+"px;height:"+this.height+"px;width:"+this.width+"px;opacity:"+this.config.alpha+"'></div>");this.startext2=$("<div style='word-break: break-word;font-family:"+this.config.fontName+";width:100%;font-size:"+this.config.fontSize+"px;color:"+this.color+";text-align:"+this.config.align+";'></div>");"false"!=this.config.tbold&&this.startext.css({"font-weight":"bold"});
"false"!=this.config.italic&&this.startext.css({"font-style":"italic"});this.father=a;this.initEvent();a.append(this.startext);this.startext.append(this.startext2);this.startext2.append(this.textli);this.initScroll()}initStarText.prototype.initScroll=function(){this._wrap=this.startext2;var a=this.text.length;this._wrap.height();for(var b=a;0<=b;b--)$(a[b]).css("fontSize",this.config.fontSize-this.offset+"px"),this.offset+=this.stepping;this._wrap.css("marginTop",this.height);this.initScrollText()};
initStarText.prototype.initScrollText=function(){var a=this,b=a._wrap,c=a.tid,d=b.height();b.animate({marginTop:-d+"px"},a.speed,function(){if("true"==a.config.repeat){for(var d=c;0<=d;d--)$(c[d]).css("fontSize",a.config.fontSize-a.offset+"pt"),a.offset+=a.stepping;b.css("marginTop",a.height);a.offset=0;a.stepping=0.2;a.initScrollText()}else b.css("marginTop",0)})};
initStarText.prototype.initEvent=function(){var a=this;this.flag=0;this.linkURL=null;if(null!=a.config.action){try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}this.startext.bind(_event._down,function(){c==PageEditor.TriggerEventType.MouseDown&&actionEvent.call(a);
browserType==3?event.cancelBubble=true:event.stopPropagation()});this.startext.bind("mouseover",function(){c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a)});this.startext.bind(isTouch?_event._end:"mouseout",function(){c==PageEditor.TriggerEventType.MouseOut&&actionEvent.call(a)})}};
initStarText.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*this.pw;this.height=this.config.height*this.ph;this.startext.css({width:this.width+"px",height:this.height+"px"});this.setPosition();if(null!=this.form)this.form.onResize(bookContainer.width(),bookContainer.height());if(null!=this.slide)this.slide.onResize(bookContainer.width(),bookContainer.height());this.fontSize=0.75*this.config.lineH*this.ph;this.startext.css("font-size",this.fontSize+"px");this.startext2.css("font-size",
this.fontSize+"px")};initStarText.prototype.setPosition=function(){this.x=this.config.x*this.pw;this.y=this.config.y*this.ph;this.startext.css({left:this.x+"px",top:this.y+"px"})};function grayBackground(a,b,c,d,e){this.sw=d;this.sh=e;this.background=$("<div ></div>");this.background.css({width:d+"px",height:e+"px",background:b,opacity:c,"z-index":200,position:"absolute",left:"0px",top:"0px"});a.append(this.background)}grayBackground.prototype.onResize=function(a,b){this.sw=a;this.sh=b;this.background.css({width:a+"px",height:b+"px"})};grayBackground.prototype.setPosition=function(){};grayBackground.prototype.show=function(){this.father.append(this.background)};
grayBackground.prototype.hide=function(){this.background.remove()};(function(a){var b=function(a){var c=this;this.theButton=a;this.eventSource=a[0];this.isTouch()?(a.bind("touchstart",function(){b.prototype.mouseDown.apply(c,arguments)}),a.bind("touchend",function(){b.prototype.mouseUp.apply(c,arguments)})):(a.bind("mousedown",function(){b.prototype.mouseDown.apply(c,arguments)}),a.bind("mouseleave",function(){b.prototype.mouseUp.apply(c,arguments)}),a.bind("mouseup",function(){b.prototype.mouseUp.apply(c,arguments)}))};b.prototype.isTouch=function(){return"Touch"in
window};b.prototype.mouseDown=function(){this.setAlpha(70)};b.prototype.mouseUp=function(){var a=this;window.setTimeout(function(){b.prototype.setAlpha.apply(a,[100])},100)};b.prototype.setAlpha=function(a){0>a&&(a=0);100<=a&&(a=100);this.theButton.css("opacity",a/100)};a.fn.asButton=function(){new b(this);return this};var c=function(a){this.eventSource=a[0];this.origPicture=a[0].src;var b=this.origPicture.lastIndexOf("."),f=this.origPicture.substr(0,b),b=this.origPicture.substring(b);this.pictureDown=
f+"_down"+b;var h=this;this.isTouch()?(a.bind("touchstart",function(){c.prototype.mouseDown.apply(h,arguments)}),a.bind("touchend",function(){c.prototype.mouseUp.apply(h,arguments)})):(a.bind("mousedown",function(){c.prototype.mouseDown.apply(h,arguments)}),a.bind("mouseup",function(){c.prototype.mouseUp.apply(h,arguments)}),a.bind("mouseleave",function(){c.prototype.mouseUp.apply(h,arguments)}))};c.prototype.isTouch=function(){return"Touch"in window};c.prototype.mouseDown=function(){this.eventSource.src=
this.pictureDown};c.prototype.mouseUp=function(){var a=this;window.setTimeout(function(){a.eventSource.src=a.origPicture},100)};a.fn.asImageButton=function(){new c(this);return this}})(jQuery);function rimFlip(){}rimFlip.prototype.addRimFlip=function(){};rimFlip.prototype.clearTimer=function(){};rimFlip.prototype.removeRimFlip=function(){};rimFlip.prototype.setFlipBack=function(){};var textWidth=function(a,b){var c=$("<pre>"+a+"</pre>").css({display:"none","font-size":b.size,"font-family":b.fontName});$("body").append(c);var d=Point(c.width(),c.height());c.remove();return d};
function label(a,b){this.labelBox=$('<span style = "position : absolute;font-family:Tahoma,Georgia,Serif">'+a+"</span>");this.caption=a;this.fontSize="5px";this.fontColor="#ffffff";this.fontName="Tahoma";var c=textWidth(a,{size:this.fontSize,fontName:this.fontName});this.width=c.x;this.height=c.y;b.append(this.labelBox)}label.prototype.getWidth=function(){return this.width};label.prototype.getHeight=function(){return this.height};label.prototype.getCaption=function(){return this.caption};
label.prototype.setCaption=function(a){this.caption=a;this.labelBox[0].innerHTML=a;a=textWidth(a,{size:this.fontSize,fontName:this.fontName});this.width=a.x;this.height=a.y};label.prototype.setLabelPosition=function(a,b,c){void 0==c&&(c=["left","top"]);this.labelBox.css(c[0],a+"px");this.labelBox.css(c[1],b+"px")};label.prototype.onResize=function(a,b){this.width=a;this.height=b;this.labelBox.css({width:a+"px",height:b+"px"})};
label.prototype.setFont=function(a,b,c){null==a?a=this.fontSize:this.fontSize=a;null==b?b=this.fontColor:this.fontColor=b;null==c?c=this.fontName:this.fontName=c;this.labelBox.css({"font-size":a,color:b,"font-family":c});a=textWidth(this.caption,{size:a,fontName:c});this.width=a.x;this.height=a.y};label.prototype.riseAWord=function(a){newCaption=this.caption.replaceAll(a,"<font color=rgb(226,77,66)><strong>"+a+"</strong></font>");this.labelBox[0].innerHTML=newCaption};
label.prototype.shortWord=function(a){this.caption.length>a&&(this.caption=this.caption.substring(0,a)+"..",this.setCaption(this.caption))};label.prototype.setCSS=function(a){this.labelBox.css(a)};function tipsBox(a,b){this.visible=!1;this.caption=a;this.background=$("<div style = 'position : absolute;'></div>");this.contentBox=new label(a,this.background);this.contentBox.setFont("16px","#f0f0f0",null);this.width=this.contentBox.getWidth()+12;this.height=40;$(b).append(this.background);$(this.background).css({width:this.width+"px",height:this.height+"px","-webkit-border-radius":"10px","-moz-border-radius":"10px","-o-border-radius":"10px","border-radius":"10px","-webkit-box-shadow":"0 0 15px rgba(40, 40, 40, 0.6)",
"-moz-box-shadow":"0 0 15px rgba(40, 40, 40, 0.6)","-o-box-shadow":"0 0 15px rgba(40, 40, 40, 0.6)","box-shadow":"0 0 15px rgba(40, 40, 40, 0.6)","background-color":"#554433",display:"none","z-index":110});this.contentBox.setLabelPosition(4,(this.height-this.contentBox.getHeight())/2-3)}tipsBox.prototype.setTimer=function(){var a=this;this.timer=window.setInterval(function(){a.hideTipsBox.call(a);window.clearInterval(a.timer)},3500)};
tipsBox.prototype.resetTimer=function(){window.clearInterval(this.timer);this.setTimer()};tipsBox.prototype.setPosition=function(a,b,c){void 0==c&&(c=["left","top"]);$(this.background).css(c[0],a+"px");$(this.background).css(c[1],b+"px")};tipsBox.prototype.onResize=function(a,b){this.width=a;this.height=b;$(this.background).css({width:a+"px",height:b+"px"});this.contentBox.setLabelPosition(4,(b-this.contentBox.getHeight())/2)};tipsBox.prototype.getWidth=function(){return this.width};
tipsBox.prototype.getHeight=function(){return this.height};tipsBox.prototype.setCaption=function(a){this.contentBox.setCaption(a);this.caption=a;this.contentBox.setLabelPosition(4,(this.height-this.contentBox.getHeight())/2-3)};tipsBox.prototype.showTipsBox=function(){this.visible?this.resetTimer():(this.setTimer(),this.visible=!0,$(this.background).css({display:"block"}),$(this.background).animate({opacity:0.9},300))};
tipsBox.prototype.hideTipsBox=function(){this.visible&&(this.visible=!1,$(this.background).animate({opacity:0},300,function(){$(this.background).css({display:"none"})}))};var rotate=function(a){return" rotate("+a+"deg)"},translate=function(a,b){return 3!=browserType?" translate3d("+a+"px,"+b+"px,0px)":" translate("+a+"px,"+b+"px)"},isLeft=function(a){return 0==a||2==a},isRight=function(a){return 1==a||3==a},isTop=function(a){return 0==a||1==a},isBottom=function(a){return 2==a||3==a},nextPageFun=function(){bookType==BookType.normal_book?(flipBook.gotoPage(2*Math.floor(flipBook.getCurrentPageIndex()/2+1)),"undefined"!=typeof speakConfig&&"none"!=speakConfig.title&&0==
flagspeak&&($("#LectureText").stop(!0),$("#LectureText").css("marginTop",0),LectureAudio(Math.floor(flipBook.getCurrentPageIndex()/2+1)),LectureSoll(Math.floor(flipBook.getCurrentPageIndex()/2+1)))):bookType==BookType.single_book?$(singlePageBook).data().gotoPage($(singlePageBook).data().currentPageIndex+1):bookType==BookType.zoom_book&&zoomBook.gotoPage(parseInt(zoomBook.currentIndex)+1)},previousPageFun=function(){bookType==BookType.normal_book?(flipBook.gotoPage(2*Math.floor(flipBook.getCurrentPageIndex()/
2-1)+1),"undefined"!=typeof speakConfig&&"none"!=speakConfig.title&&0==flagspeak&&($("#LectureText").stop(!0),$("#LectureText").css("marginTop",0),LectureAudio(Math.floor(flipBook.getCurrentPageIndex()/2-1)),LectureSoll(Math.floor(flipBook.getCurrentPageIndex()/2-1)))):bookType==BookType.single_book?$(singlePageBook).data().gotoPage($(singlePageBook).data().currentPageIndex-1):bookType==BookType.zoom_book&&zoomBook.gotoPage(zoomBook.currentIndex-1)},firstPageFun=function(){bookType==BookType.normal_book?
flipBook.gotoPage(1):bookType==BookType.single_book?$(singlePageBook).data().gotoPage(1):bookType==BookType.zoom_book&&zoomBook.gotoPage(1)},lastPageFun=function(){bookType==BookType.normal_book?flipBook.gotoPage(totalPageCount):bookType==BookType.single_book?$(singlePageBook).data().gotoPage(originTotalPageCount):bookType==BookType.zoom_book&&zoomBook.gotoPage(originTotalPageCount)},gotoPageFun=function(a){bookType==BookType.normal_book?flipBook.gotoPage(a):bookType==BookType.single_book?$(singlePageBook).data().gotoPage(a):
bookType==BookType.zoom_book&&zoomBook.gotoPage(a)},getPageDir=function(a,b){var c;switch(b){case "normal":return c=getString("normalPath","files/page/")+a+".jpg";case "large":return c=getString("largePath","files/large/")+a+".jpg";case "thumb":return c=getString("thumbPath","files/thumbnail/")+a+".jpg"}},getPageWidthHeight=function(a,b,c,d){var e=Point(0,0);a/b>c/d?(e.x=c*b/d,e.y=b):(e.x=a,e.y=a*d/c);return e},pointToLineDistance=function(a,b,c,d,e,f){var h=f-d,j=c-e;return Math.abs(h*a+j*b+(e*d-
c*f))/Math.sqrt(h*h+j*j)},globalToBook=function(a,b,c,d){void 0==d&&(d=!1);return d?Point(b-_singleBook.offset().left,c-_singleBook.offset().top):Point(b-((a?0:flipBook.getPageWidth())+flipBook.getLeft()),c-flipBook.getTop())},changeShowBook=function(a){switch(a){case 0:singlePageBook.setSingleBookVisible(!1);zoomBook.hide();flipBook.setCSS({display:"block"});_rimFlip.isRimFlip&&($(singlePageBook).data().currentPage.resetPage(),$(singlePageBook).data().currentPage.setSideAUp(!0),_rimFlip.clearTimer(),
_rimFlip.addRimFlip());thumbnail.mergeAll();break;case 1:singlePageBook.setSingleBookVisible(!0);zoomBook.hide();flipBook.setCSS({display:"none"});_rimFlip.isRimFlip&&(currentPage2.resetPage(),_rimFlip.clearTimer(),_rimFlip.addRimFlip());thumbnail.fissionAll();break;case 2:singlePageBook.setSingleBookVisible(!1),zoomBook.show(),flipBook.setCSS({display:"none"}),_rimFlip.isRimFlip&&($(singlePageBook).data().currentPage.resetPage(),$(singlePageBook).data().currentPage.setSideAUp(!0),currentPage2.resetPage(),
currentPage2.setSideUp(!0),_rimFlip.clearTimer(),_rimFlip.setFlipBack(!1)),thumbnail.fissionAll()}},computeMousePoint=function(a,b,c,d,e,f){var h=function(){return 0<=a.indexOf("l")},j=function(){return 0<=a.indexOf("b")},k=Point(b,c),l,r,m;r=h()?d-b:b;m=j()?e-c:c;l=Math.sqrt(Math.pow(r,2)+Math.pow(m,2));r=Math.sqrt(Math.pow(r,2)+Math.pow(e-m,2));if(l>d&&r>f)l-d>r-f?(k=h()?d-(d-b)*d/l:b*d/l,l=j()?e-(e-c)*d/l:c*d/l):(k=h()?d-(d-b)*f/r:b*f/r,l=0<=a.indexOf("t")?e-(e-c)*f/r:c*f/r),k=Point(k,l),computeMousePoint(a,
k.x,k.y,d,e,f);else if(l>d&&(k=h()?d-(d-b)*d/l:b*d/l,l=j()?e-(e-c)*d/l:c*d/l,k=Point(k,l)),r>f)k=h()?d-(d-b)*f/r:b*f/r,l=0<=a.indexOf("t")?e-(e-c)*f/r:c*f/r,k=Point(k,l);0<=a.indexOf("t")&&0==k.y?k.y=0.0020*e:j()&&k.y==e&&(k.y=0.998*e);return k},computePoint=function(a,b,c,d,e,f,h,j){var k,l;k=Point(b,c);k=computeMousePoint(a,b,c,d,e,f);c=k.x;l=k.y;k=function(){return 0<=a.indexOf("l")};b=function(){return 0<=a.indexOf("t")};switch(a){case "tl":actualPoint=Point(c,l);middlePoint=Point(d-actualPoint.x/
2,l/2);endPoint=Point(2*d,0);break;case "tr":actualPoint=Point(d-c,l);middlePoint=Point(d-actualPoint.x/2,actualPoint.y/2);endPoint=Point(-d,0);break;case "bl":actualPoint=Point(c,e-l);middlePoint=Point(d-actualPoint.x/2,actualPoint.y/2);endPoint=Point(2*d,e);break;case "br":actualPoint=Point(d-c,e-l),middlePoint=Point(d-actualPoint.x/2,actualPoint.y/2),endPoint=Point(-d,e)}l=Point(0,0);var r=Math.PI/2,m=Math.atan2(actualPoint.y,actualPoint.x),p=r-m,c=180*p/Math.PI,w=p-Math.atan2(middlePoint.y,middlePoint.x);
distance=Math.max(0,Math.sin(w)*Math.sqrt(Math.pow(middlePoint.x,2)+Math.pow(middlePoint.y,2)));noMovePoint=Point(distance*Math.sin(p),distance*Math.cos(p));var n;if(p>r&&(noMovePoint.x+=Math.abs(noMovePoint.y*Math.tan(m)),noMovePoint.y=0,l=Math.PI-p,f=f-e/Math.sin(l)-(noMovePoint.x-e/Math.tan(l))*Math.cos(l),l=Point(Math.round(f*Math.cos(l)),Math.round(f*Math.sin(l))),k()&&(l.x=-l.x),b()))l.y=-l.y;r=Math.sqrt(Math.pow(endPoint.x-actualPoint.x,2)+Math.pow(endPoint.y-actualPoint.y,2));f=Math.round(noMovePoint.y/
Math.tan(p)+noMovePoint.x);k()&&(f=d-f);m=k()?f:d-f;w=m*Math.cos(2*p);n=m*Math.sin(2*p);f=Point(Math.round(f+(k()?-w:w)),Math.round(b()?n:e-n));n=m*Math.sin(p);m=Point(100*(actualPoint.x/2/d),100*(actualPoint.y/2/e));r=r<d?r/d:1;w=100<n?(n-100)/n:0;b()||(m.y=100-m.y);k()&&(m.x=100-m.x);d=Point(100*(n*Math.sin(p)/d),100*(n*Math.cos(p)/e));k()||(d.x=100-d.x);b()||(d.y=100-d.y);e=getBrowserPre();h.css({"background-image":e+"gradient(linear, "+(k()?100:0)+"% "+(b()?0:100)+"%, "+m.x+"% "+m.y+"%, color-stop("+
w+",rgba(0,0,0,0)), color-stop("+(0.8*(1-w)+w)+",rgba(0,0,0,"+0.2*r+")), to(rgba(255,255,255,"+0.2*r+")))"});j.css({"background-image":e+"gradient(linear, "+(k()?0:100)+"% "+(b()?0:100)+"%, "+d.x+"% "+d.y+"%,  color-stop(0.8,rgba(0,0,0,0)), color-stop(1, rgba(0,0,0,"+0.2*r+")), to(rgba(0,0,0,0)))"});return{Angle:c,Mv:l,Df:f,NomovePoint:noMovePoint}},setCurrentIndexTextField=function(a,b){if(1!=a&&a!=totalPageCount&&b)var c=2*Math.floor(a/2),a=rightToLeft?c+1+"-"+c:c+"-"+(c+1);c=totalPageCount;b||
(c=originTotalPageCount);$("#fbCurrentPageIndex").text(a);pageIndexTextField.val(rightToLeft?c+"/"+a:a+"/"+c)},getSpeedArray=function(a,b){for(var c=b/2,d=(a-a/4)/c,e=Array(b),f=0;f<b;f++)e[f]=f<c?a-(c-f)*d:a+(f-c+1)*d;return e.reverse()},getBrowserPre=function(){switch(browserType){case 3:return"-ms-";case 2:return"-moz-";case 1:return"-webkit-";case 4:return"-o-"}},getTransform=function(a){switch(browserType){case 3:(a=a.style["-ms-transform"])&&null!=a&&(a=a.match(/translate\((.*?)\)/));break;
case 2:(a=a.style["-moz-transform"])&&null!=a&&(a=a.match(/translate3d\((.*?)\)/));break;case 1:(a=a.style["-webkit-transform"])&&null!=a&&(a=a.match(/translate3d\((.*?)\)/));break;case 4:(a=a.style["-o-transform"])&&null!=a&&(a=a.match(/translate3d\((.*?)\)/));break;default:(a=a.style.transform)&&null!=a&&(a=a.match(/translate\((.*?)\)/))}if(null==a||""==a||2>a.length)return Point(0,0);a=a[1].split(", ");return Point(parseInt(a[0],10),parseInt(a[1],10))},actionEvent=function(){this.config.action.actionType==
PageEditor.ActionType.GOTO_PAGE?gotoPageFun(this.config.action.pageIndex):this.config.action.actionType==PageEditor.ActionType.OPEN_URL?(void 0==this.config.action.linkTarget&&(this.config.action.linkTarget="_blank"),window.open(this.linkURL,this.config.action.linkTarget)):this.config.action.actionType==PageEditor.ActionType.OPEN_WINDOW?this.form=new initVideoForm(tmpContainer,{width:this.config.action.windowWidth,height:this.config.action.windowHeight,src:this.config.action.resourceContent,caption:this.config.action.caption},
bookContainer.width(),bookContainer.height()):this.config.action.actionType==PageEditor.ActionType.SLIDE_SHOW?this.slide=new initSlideShow(tmpContainer,this.config.action.photos.photo,bookContainer.width(),bookContainer.height()):this.config.action.actionType==PageEditor.ActionType.PLAY_AUDIO?0==this.flag&&(this.audios=$("<audio src='"+this.config.action.audioURL+"' style='width: "+this.width+"px; height: "+this.height+"px;top:"+this.y+"px;left:"+this.x+"px;position:absolute;' controls ></audio>"),
this.config.action.autoPlay&&(this.audios[0].autoPlay=!0),this.father.append(this.audios),this.flag=1):this.config.action.actionType==PageEditor.ActionType.ACTION_JS&&null!=this.config.action.scriptFun&&eval(this.config.action.scriptFun)};function searchFromPages(a,b){for(var c=[],b=b.trim().toLowerCase(),d=null,d=-1==b.indexOf(" ")?[b]:b.split(" "),e=0,e=0;e<a.length;e++){var f=a[e].trim().toLowerCase(),h=f,j=-1,k=-1,l=-1,r=0,m=!0,p;for(p=0;p<d.length;p++){var h=new KMP(h,d[p]),w=d[p].length;if(h.match()){var n=r+h.getIndex();if(n>l)l=n,r=n+d[p].length,h=f.substring(r),0==p&&(j=n),p==d.length-1&&(k=n+w);else{m=!1;break}}else{m=!1;break}}m&&(l=[],l.search_page=e+1,l.search_title="page "+(e+1),j=f.substring(0,j).lastIndexOf("."),-1==
j?j=0:j++,r=f.substring(k),m=r.indexOf(".")+1,m=-1==m?r.length():k+m,f=f.substring(j,m),l.search_text=f,c.push(l))}return c};var KMP=function(a,b){this.__string=a;this.__pattern=b;this.__next=[];this.__times=0;this.__index=-1;for(var c=0,c=0;c<b.length;c++)this.__next[c]=1>=c?c-1:this.next(b.substring(0,c));this.__times=0;this.__index=-1};KMP.prototype.next=function(a){for(var b=Math.ceil(a.length/2);0<b&&0!=a.substring(0,b).compareTo(a.substring(a.length-b,a.length));)b--;return b};
KMP.prototype.match=function(){for(var a=0,b=0,c=-1;a<this.__string.length&&b<this.__pattern.length;){if(this.__string.charAt(a)==this.__pattern.charAt(b))0===b&&(c=a),a++,b++;else{for(var d=this.__next[b];-1!=d&&this.__pattern.charAt(d)==this.__pattern.charAt(b);)d=this.__next[d];b=d;-1==b?(a++,b=0):c=a-b}this.__times++}return b==this.__pattern.length?(this.__index=c,!0):!1};KMP.prototype.getTimes=function(){return this.__times};KMP.prototype.getIndex=function(){return this.__index};
String.prototype.compareTo=function(a){var b=this.length,c=a.length,d=Math.min(b,c),e=this.split(""),a=a.split(""),f=0,h=0;if(f==h){h=f;for(d+=f;h<d;){var j=e[h],k=a[h];if(j!=k)return j-k;h++}}else for(;0!=d--;)if(j=e[f++],k=a[h++],j!=k)return j-k;return b-c};String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")};
String.prototype.replaceAll=function(a,b){for(var c=this.indexOf(a),d=[],e=this;-1!=c;){var c=c+a.length,f=e.substring(0,c),e=e.substring(c),f=f.replace(a,b);d.push(f);c=e.indexOf(a)}""!==e&&d.push(e);return d.join("")};function normalSide(a,b){this.imageIndex=0;this.width=300;this.height=400;this.side=$("<div class='side'></div>");this.sideContent=$("<div class='sideContent'></div>");this.sideImg=$("<img />");this.grayColor=$("<div class='kong' style='background-color:#888888;opacity:0.1'></div>");(this.isLeft=b)?(this.midShadow=$("<div class='leftShadow'></div>"),this.midShadow.css({width:userConfig.leftShadowWidth+"px",opacity:userConfig.leftShadowAlpha})):(this.midShadow=$("<div class='rightShadow'></div>"),
this.midShadow.css({width:userConfig.rightShadowWidth+"px",opacity:userConfig.rightShadowAlpha}));this.side.css({"background-color":getColor("pageBackgroundColor","#f5f5f5")});this.MMBackground=$("<div style='position : absolute; z-index : 6;'></div>");this.loadingImg=$("<img src='"+uiBaseURL+"progress.gif' style='position: absolute;' />");this.loadingImg.css({left:(this.width-32)/2+"px",top:(this.height-32)/2+"px"});this.linkArray=[];this.youtubeArray=[];this.videoArray=[];this.audioArray=[];this.imageArray=
[];this.buttonArray=[];this.flashShowArray=[];this.lineArray=[];this.arrowArray=[];this.roundArray=[];this.reArray=[];this.textArray=[];this.areaArray=[];this.calloutArray=[];this.atextArray=[];this.startextArray=[];this.aminArray=[];this.atimageArray=[];this.efftextArray=[];this.soundArray=[];this.bannerArray=[];a.append(this.side);this.side.append(this.sideContent);this.side.append(this.midShadow);this.side.append(this.MMBackground);this.midShadow.css("z-index",5)}normalSide.prototype.getSide=function(){return this.side};
normalSide.prototype.fillContent=function(a){if(a!=this.imageIndex&&(this.imageIndex=a,this.sideContent.empty(),!(this.imageIndex>originTotalPageCount))){this.showLoading();var b=this;this.sideImg.attr("src",getPageDir(this.imageIndex,"normal"));this.imgLoaded=0;this.sideImg.load(function(){b.hideLoading();b.sideContent.append(b.sideImg);b.sideContent.append(b.grayColor);void 0!=pageEditor&&b.initMM()})}};
normalSide.prototype.imgFlipOver=function(a){a?(this.sideImg.css({"-webkit-transform":"scaleX(-1)","-moz-transform":"scaleX(-1)"}),this.MMBackground.css({"-webkit-transform":"scaleX(-1)","-moz-transform":"scaleX(-1)"}),this.midShadow.attr("class",this.isLeft?"rightShadow":"leftShadow"),this.midShadow.css({left:this.isLeft?"0px":"auto",right:this.isLeft?"auto":"0px"})):(this.sideImg.css({"-webkit-transform":"scaleX(1)","-moz-transform":"scaleX(1)"}),this.MMBackground.css({"-webkit-transform":"scaleX(1)",
"-moz-transform":"scaleX(1)"}),this.midShadow.attr("class",this.isLeft?"leftShadow":"rightShadow"),this.midShadow.css({left:this.isLeft?"auto":"0px",right:this.isLeft?"0px":"auto"}))};
normalSide.prototype.initMM=function(){this.MMBackground.empty();this.linkArray=[];this.youtubeArray=[];this.videoArray=[];this.audioArray=[];this.imageArray=[];this.buttonArray=[];this.flashShowArray=[];this.lineArray=[];this.arrowArray=[];this.roundArray=[];this.reArray=[];this.textArray=[];this.areaArray=[];this.calloutArray=[];this.atextArray=[];this.startextArray=[];this.aminArray=[];this.atimageArray=[];this.efftextArray=[];this.soundArray=[];this.bannerArray=[];if(!(0>=this.imageIndex||pageEditor.length<
this.imageIndex||null==pageEditor[this.imageIndex-1][0]))for(var a=0;a<pageEditor[this.imageIndex-1].length;a++){var b=pageEditor[this.imageIndex-1][a];if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_LINK){var c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,downColor:b.downColor,downAlpha:b.downAlpha,overColor:b.overColor,overAlpha:b.overAlpha,outColor:b.outColor,outAlpha:b.outAlpha,action:b.action};this.linkArray.push(new initLink(this.MMBackground,
c,this.width,this.height))}else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE||pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE1||pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE2||pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE3)c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,id:b.videoId,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt},
pageEditor[this.imageIndex-1][a].annotype!=PageEditor.AnnoType.ANNO_YOUTUBE&&(c.id=b.videoID),youtubeObj=new initYoutube(this.MMBackground,c,this.width,this.height),this.youtubeArray.push(youtubeObj);else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_VIDEO)c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt},b=new initVideo(this.MMBackground,
c,this.width,this.height),this.videoArray.push(b);else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO)b=pageEditor[this.imageIndex-1][a],c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.soundURL,soundPlayTriggerEvt:b.soundPlayTriggerEvt,soundStopTriggerEvt:b.soundStopTriggerEvt},b=new initAudio(this.MMBackground,c,this.width,this.height),this.audioArray.push(b);else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_IMAGE)b=
pageEditor[this.imageIndex-1][a],c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,action:b.action},imageObj=new initImage(this.MMBackground,c,this.width,this.height),this.imageArray.push(imageObj);else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_BUTTON)b=pageEditor[this.imageIndex-1][a],c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,action:b.action,buttonCaption:b.buttonCaption,
captionY:b.captionY,HRate:b.HRate,Format:b.Format},this.buttonArray.push(new initButton(this.MMBackground,c,this.width,this.height));else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_FLASHSHOW)b=pageEditor[this.imageIndex-1][a],c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,photo:b.Images,repeatPlay:b.isRepeat},this.flashShowArray.push(new initFlashShow(this.MMBackground,c,this.width,this.height));else if(pageEditor[this.imageIndex-
1][a].annotype==PageEditor.AnnoType.ANNO_LINE)b=pageEditor[this.imageIndex-1][a],c={StartX:b.lineStartPX,StartY:b.lineStartPY,EndX:b.lineEndPX,EndY:b.lineEndPY,x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,lineAlpha:b.lineAlpha,alpha:b.alpha,lineWidth:b.lineWidth,lineType:b.lineType,dotWidth:b.dotWidth,color:b.color,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.lineArray.push(new initLine(this.MMBackground,
c,this.width,this.height,this.imageIndex+a));else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ARROW)b=pageEditor[this.imageIndex-1][a],c={StartX:b.lineStartPX,StartY:b.lineStartPY,EndX:b.lineEndPX,EndY:b.lineEndPY,x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,lineWidth:b.lineWidth,lineType:b.lineType,dotWidth:b.dotWidth,color:b.color,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,
arrowType:b.arrowType,sr:b.shadow.shadowColor},this.arrowArray.push(new initArrow(this.MMBackground,c,this.width,this.height,this.imageIndex+a));else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ROUND)b=pageEditor[this.imageIndex-1][a],c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,fillStyle:b.fillStyle,color:b.color,ColorA:b.gradientColorA,ColorB:b.gradientColorB,angle:b.angle,spalpha:b.spalpha,borderWidth:b.borderWidth,borderColor:b.borderColor,
borderAlpha:b.borderAlpha,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action},this.roundArray.push(new initRound(this.MMBackground,c,this.width,this.height,this.imageIndex+a));else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_RECTANGLE)b=pageEditor[this.imageIndex-1][a],c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,fillStyle:b.fillStyle,
color:b.color,ColorA:b.gradientColorA,ColorB:b.gradientColorB,angle:b.angle,spalpha:b.spalpha,borderWidth:b.borderWidth,borderColor:b.borderColor,borderAlpha:b.borderAlpha,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action},this.reArray.push(new initRe(this.MMBackground,c,this.width,this.height,this.imageIndex+a));else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_TEXT)b=pageEditor[this.imageIndex-
1][a],c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.textStr,lineH:b.lineHeightRation,fontName:b.formats.defaultFormat.fontName,fontSize:b.formats.defaultFormat.fontSize,color:b.formats.defaultFormat.color,tbold:b.formats.defaultFormat.bold,italic:b.formats.defaultFormat.italic,bgalpha:b.background.alpha,fillBg:b.background.fillBg,bgcolor:b.background.color,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,
sr:b.shadow.shadowColor,action:b.action},this.textArray.push(new initText(this.MMBackground,c,this.width,this.height,this.imageIndex+a));else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AREA)b=pageEditor[this.imageIndex-1][a],c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,color:b.color,rounds:b.round,ellipseWidth:b.ellipseWidth,ellipseHeight:b.ellipseHeight,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,
se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action},this.areaArray.push(new initArea(this.MMBackground,c,this.width,this.height,this.imageIndex+a));else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_CALLOUT)b=pageEditor[this.imageIndex-1][a],c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.textStr,lineH:b.lineHeightRation,fontName:b.formats.defaultFormat.fontName,fontSize:b.formats.defaultFormat.fontSize,
color:b.formats.defaultFormat.color,tbold:b.formats.defaultFormat.bold,italic:b.formats.defaultFormat.italic,bgalpha:b.background.alpha,fillBg:b.background.fillBg,bgcolor:b.background.color,direct:b.hookDirect,cx1:b.hookContr1RatioX,cy1:b.hookContr1RatioY,cx2:b.hookContr2RatioX,cy2:b.hookContr2RatioY,pointx:b.hookContrPointRatioX,pointy:b.hookContrPointRatioY,cornerRadiut:b.cornerRadiut,borderWidth:b.borderWidth,borderColor:b.borderColor,bordreAlpha:b.bordreAlpha,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,
sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.calloutArray.push(new initCallout(this.MMBackground,c,this.width,this.height,this.imageIndex+a));else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ATEXT)b=pageEditor[this.imageIndex-1][a],c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.strText,fontName:b.format.font,fontSize:b.format.size,color:b.format.color,tbold:b.format.bold,italic:b.format.italic,
align:b.format.align,action:b.action,repeat:b.repeat,moveSpeed:b.moveSpeed,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.atextArray.push(new initAText(this.MMBackground,c,this.width,this.height,this.imageIndex+a));else if(pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_STARTEXT){var d=pageEditor[this.imageIndex-1][a],c={x:d.location.x,y:d.location.y,width:d.location.width,height:d.location.height,
alpha:d.alpha,textStr:d.strText,fontName:d.format.font,fontSize:d.format.size,color:d.format.color,tbold:d.format.bold,italic:d.format.italic,align:d.format.align,action:d.action,repeat:d.repeat,moveSpeed:d.moveSpeed,lineH:d.HRate,sh:d.shadow.hasDropShadow,sx:d.shadow.shadowBlurX,sy:d.shadow.shadowBlurY,se:d.shadow.shadowDistance,sr:d.shadow.shadowColor};this.startextArray.push(new initStarText(this.MMBackground,c,this.width,this.height,this.imageIndex+a))}else pageEditor[this.imageIndex-1][a].annotype==
PageEditor.AnnoType.ANNO_TEXTANIM?(b=pageEditor[this.imageIndex-1][a],c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,effectType:b.effectType,textStr:b.textStr,fontName:b.formats.defaultFormat.fontName,fontSize:b.formats.defaultFormat.fontSize,color:b.formats.defaultFormat.color,tbold:b.formats.defaultFormat.bold,italic:b.formats.defaultFormat.italic,action:b.action,lineH:d.HRate,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,
se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.aminArray.push(new initAminText(this.MMBackground,c,this.width,this.height,this.imageIndex+a))):pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ATIMAGE?(b=pageEditor[this.imageIndex-1][a],c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,action:b.action},atimageObj=new initPngImage(this.MMBackground,c,this.width,this.height),this.atimageArray.push(atimageObj)):pageEditor[this.imageIndex-
1][a].annotype==PageEditor.AnnoType.ANNO_EFFECTTEXT?(b=pageEditor[this.imageIndex-1][a],c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.text,fontName:b.format.font,fontSize:b.format.size,color:b.format.color,tbold:b.format.bold,italic:b.format.italic,moveSpeed:b.effectStyle,lineH:d.HRate,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.efftextArray.push(new initEffText(this.MMBackground,
c,this.width,this.height,this.imageIndex+a))):pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ADVANCEDSOUND?(b=pageEditor[this.imageIndex-1][a],c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.soundList.sound,skinType:b.skinType,soundPlay:b.soundPlayTriggerEvt},this.soundArray.push(new initSound(this.MMBackground,c,this.width,this.height,this.imageIndex+a))):pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_BANNER?
(b=pageEditor[this.imageIndex-1][a],c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,action:b.action,banners:b.banners},this.bannerArray.push(new initBanner(this.MMBackground,c,this.width,this.height,this.imageIndex+a))):pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_VIDEO1?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.videoURL,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt},
b=new initVideo(this.MMBackground,c,this.width,this.height),this.videoArray.push(b)):pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_VIDEO2?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.videoURL,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt},b=new initVideo(this.MMBackground,c,this.width,this.height),this.videoArray.push(b)):pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO1?
(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.soundList.sound.path,soundPlayTriggerEvt:b.soundPlayTriggerEvt,soundStopTriggerEvt:b.soundStopTriggerEvt},b=new initAudio(this.MMBackground,c,this.width,this.height),this.audioArray.push(b)):pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO2?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.data.item[0].fname,soundPlayTriggerEvt:b.soundPlayTriggerEvt,
soundStopTriggerEvt:b.soundStopTriggerEvt},b=new initAudio(this.MMBackground,c,this.width,this.height),this.audioArray.push(b)):pageEditor[this.imageIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO3&&(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.componentData.songs.song.url,soundPlayTriggerEvt:b.soundPlayTriggerEvt,soundStopTriggerEvt:b.soundStopTriggerEvt},b=new initAudio(this.MMBackground,c,this.width,this.height),this.audioArray.push(b))}};
normalSide.prototype.changeTo0x=function(a){var b=a;"#"!=a.substr(0,1)&&"0x"!=a.substr(0,2)&&(b="#"+parseInt(a).toString(16));"0x"==a.substr(0,2)&&(b=a.replace("0x","#"));return b};normalSide.prototype.showGray=function(){this.grayColor.css({display:"block"})};normalSide.prototype.hideGray=function(){this.grayColor.css({display:"none"})};
normalSide.prototype.onResize=function(a,b){this.side.css({width:a+"px",height:b+"px"});this.sideContent.css({width:a+"px",height:b+"px"});this.sideImg.css({width:a+"px",height:b+"px"});this.grayColor.css({width:a+"px",height:b+"px"});this.MMBackground.css({width:a+"px",height:b+"px"});this.midShadow.css({height:b+"px"});this.loadingImg.css({left:(a-32)/2+"px",top:(b-32)/2+"px"});for(var c=0;c<this.linkArray.length;c++)this.linkArray[c].onResize(a,b);for(c=0;c<this.youtubeArray.length;c++)this.youtubeArray[c].onResize(a,
b);for(c=0;c<this.videoArray.length;c++)this.videoArray[c].onResize(a,b);for(c=0;c<this.audioArray.length;c++)this.audioArray[c].onResize(a,b);for(c=0;c<this.imageArray.length;c++)this.imageArray[c].onResize(a,b);for(c=0;c<this.buttonArray.length;c++)this.buttonArray[c].onResize(a,b);for(c=0;c<this.flashShowArray.length;c++)this.flashShowArray[c].onResize(a,b);for(c=0;c<this.arrowArray.length;c++)this.arrowArray[c].onResize(a,b);for(c=0;c<this.lineArray.length;c++)this.lineArray[c].onResize(a,b);
for(c=0;c<this.reArray.length;c++)this.reArray[c].onResize(a,b);for(c=0;c<this.textArray.length;c++)this.textArray[c].onResize(a,b);for(c=0;c<this.roundArray.length;c++)this.roundArray[c].onResize(a,b);for(c=0;c<this.areaArray.length;c++)this.areaArray[c].onResize(a,b);for(c=0;c<this.calloutArray.length;c++)this.calloutArray[c].onResize(a,b);for(c=0;c<this.atextArray.length;c++)this.atextArray[c].onResize(a,b);for(c=0;c<this.startextArray.length;c++)this.startextArray[c].onResize(a,b);for(c=0;c<this.aminArray.length;c++)this.aminArray[c].onResize(a,
b);for(c=0;c<this.atimageArray.length;c++)this.atimageArray[c].onResize(a,b);for(c=0;c<this.efftextArray.length;c++)this.efftextArray[c].onResize(a,b);for(c=0;c<this.soundArray.length;c++)this.soundArray[c].onResize(a,b);for(c=0;c<this.bannerArray.length;c++)this.bannerArray[c].onResize(a,b);this.width=a;this.height=b};normalSide.prototype.sideAddChild=function(a){this.side.append(a)};
normalSide.prototype.enterSide=function(){for(var a=0;a<this.youtubeArray.length;a++)this.youtubeArray[a].getPlayEvt(),this.youtubeArray[a].getStopEvt();for(a=0;a<this.videoArray.length;a++)this.videoArray[a].getPlayEvt()==PageEditor.PlayEvt.EVT_PLAY&&this.videoArray[a].playVideo(),this.videoArray[a].getStopEvt()==PageEditor.PlayEvt.EVT_PLAY&&this.videoArray[a].pauseVideo();for(a=0;a<this.audioArray.length;a++)this.audioArray[a].getPlayEvt()==PageEditor.PlayEvt.EVT_PLAY&&this.audioArray[a].play(),
this.audioArray[a].getStopEvt()==PageEditor.PlayEvt.EVT_PLAY&&this.audioArray[a].pause()};
normalSide.prototype.leaveSide=function(){for(var a=0;a<this.youtubeArray.length;a++)this.youtubeArray[a].getPlayEvt(),this.youtubeArray[a].getStopEvt();for(a=0;a<this.videoArray.length;a++)this.videoArray[a].getPlayEvt()==PageEditor.PlayEvt.EVT_STOP&&this.videoArray[a].playVideo(),this.videoArray[a].getStopEvt()==PageEditor.PlayEvt.EVT_STOP&&this.videoArray[a].pauseVideo();for(a=0;a<this.audioArray.length;a++)this.audioArray[a].getPlayEvt()==PageEditor.PlayEvt.EVT_STOP&&this.audioArray[a].play(),
this.audioArray[a].getStopEvt()==PageEditor.PlayEvt.EVT_STOP&&this.audioArray[a].pause()};normalSide.prototype.hideYoutube=function(){for(var a=0;a<this.youtubeArray.length;a++)this.youtubeArray[a].hide()};normalSide.prototype.showYoutube=function(){for(var a=0;a<this.youtubeArray.length;a++)this.youtubeArray[a].show()};
normalSide.prototype.initZoom=function(){var a=!1;this.zw=this.width;this.zh=this.height;this.isZoom=!1;var b=Point(0,0),c=Point(0,0);this.side.bind(_event._down,function(d){d=d.originalEvent.touches;2==d.length&&(a=!0,b=Point(d[0].pageX,d[0].pageY),c=Point(d[1].pageX,d[1].pageY))});this.side.bind(_event._end,function(){});this.side.bind(_event._move,function(d){d=d.originalEvent.touches;a&&(100<=Math.pow(b.x-d[0].pageX,2)+Math.pow(b.y-d[0].pageY,2)||(Math.pow(c.x-d[1].pageX,2),Math.pow(c.y-d[1].pageY,
2)))})};normalSide.prototype.showLoading=function(){this.side.append(this.loadingImg)};normalSide.prototype.hideLoading=function(){this.loadingImg.remove()};function normalPage(){this.pageStatu=!1;this.corner="tr";this.pageIndex=1;this.isHardPage=!1;this.pageVisible=!0;this.width=300;this.height=400;this.maskWidth=500;this.isLastPageReset=!1}
normalPage.prototype.create=function(a){this.page=$("<div class='paper'></div>");this.mask=$("<div class='pageMask'></div>");this.sideAPosition=$("<div class='sidePosition'></div>");this.sideBPosition=$("<div class='sidePosition'></div>");this.flipBackShadow=$("<div class='backShadow'></div>");this.flipFrontShadow=$("<div class='frontShadow'></div>");this.sideA=new normalSide(this.sideAPosition,!1);this.sideB=new normalSide(this.sideBPosition,!0);this.page.append(this.flipBackShadow);a.append(this.page);
this.page.append(this.mask);this.mask.append(this.sideAPosition);this.mask.append(this.sideBPosition);this.sideAPosition.append(this.sideA.side);this.sideBPosition.append(this.sideB.side)};normalPage.prototype.getSideA=function(){return this.sideA};normalPage.prototype.getSideB=function(){return this.sideB};
normalPage.prototype.onResize=function(a,b,c,d){this.page.css({width:a+"px",height:b+"px",left:d+"px"});this.mask.css({width:a+"px",height:b+"px"});this.flipBackShadow.css({width:a+"px",height:b+"px"});this.flipFrontShadow.css({width:a+"px",height:b+"px"});this.sideAPosition.css({width:a+"px",height:b+"px"});this.sideBPosition.css({width:a+"px",height:b+"px"});this.sideA.onResize(a,b);this.sideB.onResize(a,b);this.width=a;this.height=b;this.maskWidth=c};
normalPage.prototype.fillSideA=function(a){this.sideA.fillContent(a);this.pageIndex=a;this.isHardPage=!1;1==a&&hardPageEnable&&3!=browserType&&(this.isHardPage=!0)};normalPage.prototype.fillSideB=function(a){this.sideB.fillContent(a);a==totalPageCount&&hardPageEnable&&3!=browserType&&(this.isHardPage=!0)};
normalPage.prototype.beginFlip=function(a){this.corner=a;this.isLeft()?(this.sideA.sideAddChild(this.flipFrontShadow),this.pageStatu=!0):(this.sideB.sideAddChild(this.flipFrontShadow),this.pageStatu=!1);3>=flipBook.gotoPageIndex&&flipBook.setLeftThicknessVisible(!1);flipBook.gotoPageIndex>=totalPageCount-2&&flipBook.setRightThicknessVisible(!1);this.mask.css({width:this.maskWidth+"px",height:this.maskWidth+"px"});flipBook.normalBookShadow.hideShadow()};
normalPage.prototype.flipToPoint=function(a,b,c){if(this.isHardPage)this.hardFlip(a,c);else if(this.isCorner(a,b))this.resetPage(this.isLeft());else{var d=computePoint(this.corner,a,b,this.width,this.height,this.maskWidth,this.flipFrontShadow,this.flipBackShadow),a=d.Angle,b=d.Df,e=d.NomovePoint,d=d.Mv,f=this.isLeft(),h=this.isBottom();c&&(this.showShadow(),this.page.css({left:f?"0px":this.width+"px"}),this.sideAPosition.css({right:f?"0px":"auto",left:f?"auto":"0px",top:h?"auto":"0px",bottom:h?"0px":
"auto"}),this.sideBPosition.css({right:f?"0px":"auto",left:f?"auto":"0px",top:h?"auto":"0px",bottom:h?"0px":"auto"}),this.setSideUp(f),f?this.sideA.hideGray():this.sideB.hideGray());switch(this.corner){case "tl":this.rotateElement(this.mask,"100% 0%",translate(-e.x+this.width-this.maskWidth+d.x,-e.y+d.y)+rotate(-a));this.rotateElement(this.sideBPosition,"100% 0%",rotate(a)+translate(e.x-d.x,e.y-d.y));this.rotateElement(this.sideAPosition,"100% 0%",rotate(a)+translate(e.x+b.x-d.x,e.y+b.y-d.y));this.rotateElement(this.sideA.side,
"100% 0%",translate(-this.width,0)+rotate(2*(90-a)));break;case "tr":this.rotateElement(this.mask,"0% 0%",translate(e.x+d.x,-e.y+d.y)+rotate(a));this.rotateElement(this.sideAPosition,"0% 0%",rotate(-a)+translate(-e.x-d.x,e.y-d.y));this.rotateElement(this.sideBPosition,"0% 0%",rotate(-a)+translate(-e.x-d.x+b.x,e.y+b.y-d.y));this.rotateElement(this.sideB.getSide(),"0% 0%",translate(0,0)+rotate(2*(a-90)));break;case "bl":this.rotateElement(this.mask,"100% 100%",translate(-e.x+this.width-this.maskWidth+
d.x,e.y+this.height-this.maskWidth+d.y)+rotate(a));this.rotateElement(this.sideBPosition,"100% 100%",rotate(-a)+translate(e.x-d.x,-e.y-d.y));this.rotateElement(this.sideAPosition,"100% 100%",rotate(-a)+translate(e.x+b.x-d.x,-e.y-d.y+b.y));this.rotateElement(this.sideA.getSide(),"100% 100%",translate(-this.width,-this.height)+rotate(2*(a-90)));break;case "br":this.rotateElement(this.mask,"0% 100%",translate(e.x+d.x,e.y+this.height-this.maskWidth+d.y)+rotate(-a)),this.rotateElement(this.sideAPosition,
"0% 100%",rotate(a)+translate(-e.x-d.x,-e.y-d.y)),this.rotateElement(this.sideBPosition,"0% 100%",rotate(a)+translate(-e.x+b.x-d.x,-e.y+b.y-d.y)),this.rotateElement(this.sideB.getSide(),"0% 100%",translate(0,-this.height)+rotate(2*(90-a)))}}};normalPage.prototype.flipToAnPoint=function(a,b,c){this.beginFlip(c);this.flipToPoint(a,b,!0);"tl"==c||"bl"==c?this.setSideUp(!0):this.setSideUp(!1)};
normalPage.prototype.endFlip=function(){this.hideShadow();this.pageStatu=this.isLeft()?!1:!0;this.sideA.showGray();this.sideB.showGray();flipBook.normalBookShadow.showShadow()};
normalPage.prototype.hardFlip=function(a,b){var c=!1;if("tl"==this.corner||"bl"==this.corner)c=!0;var d=c?a-this.width:a;d<-this.width&&(d=-this.width);d>=this.width&&(d=this.width);d=180*Math.acos(d/this.width)/Math.PI;c?(b&&(this.sideA.imgFlipOver(!0),this.page.css({"-webkit-perspective-origin":"right center","-webkit-transform-origin":"100% 50%","-webkit-transform-style":"preserve-3d","-moz-perspective-origin":"right center","-moz-transform-origin":"100% 50%","-moz-transform-style":"preserve-3d",
"z-index":20})),d=180-d,this.page.css({"-webkit-transform":"perspective(3000px) rotateY("+d+"deg) translate3d(0px,0px,-1px)","-moz-transform":"perspective(3000px) rotateY("+d+"deg)"}),90<=d?this.setSideUp(!0):this.setSideUp(!1)):(b&&(this.sideB.imgFlipOver(!0),this.page.css({"-webkit-perspective-origin":"left center","-webkit-transform-origin":"0% 50%","-webkit-transform-style":"preserve-3d","-moz-transform-style":"preserve-3d","-moz-perspective-origin":"left center","-moz-transform-origin":"0% 50%",
"z-index":20})),this.page.css({"-webkit-transform":"perspective(3000px) rotateY("+-d+"deg)","-moz-transform":"perspective(3000px) rotateY("+-d+"deg)"}),90<=d?this.setSideUp(!1):this.setSideUp(!0))};
normalPage.prototype.resetPage=function(a){this.isHardPage&&(this.sideA.imgFlipOver(!1),this.sideB.imgFlipOver(!1),!this.isLastPageReset&&this.pageIndex+1==totalPageCount?(this.isLastPageReset=!0,window.setTimeout(function(){this.page.css({"-webkit-transform-style":"flat","-moz-transform-style":"flat","-webkit-transform":"rotateY(0deg)","-moz-transform":"rotateY(0deg)","-o-transform":"rotateY(0deg)","-ms-transform":"rotateY(0deg)",transform:"rotateY(0deg)"})},10)):this.page.css({"-webkit-transform-style":"flat",
"-moz-transform-style":"flat","-webkit-transform":"rotateY(0deg)","-moz-transform":"rotateY(0deg)","-o-transform":"rotateY(0deg)","-ms-transform":"rotateY(0deg)",transform:"rotateY(0deg)"}));this.page.css({left:a?"0px":this.width+"px"});this.mask.css({top:"0px",left:"0px",bottom:"auto",right:"auto",width:this.width,height:this.height});this.rotateElement(this.mask,"0% 0%",translate(0,0)+rotate(0));this.sideAPosition.css({top:"0px",left:"0px",bottom:"auto",right:"auto"});this.sideBPosition.css({top:"0px",
left:"0px",bottom:"auto",right:"auto"});this.rotateElement(this.sideAPosition,"0% 0%",translate(0,0)+rotate(0));this.rotateElement(this.sideBPosition,"0% 0%",translate(0,0)+rotate(0));this.rotateElement(this.sideA.getSide(),"0% 0%",translate(0,0)+rotate(0));this.rotateElement(this.sideB.getSide(),"0% 0%",translate(0,0)+rotate(0))};normalPage.prototype.setSideUp=function(a){this.sideAPosition.css({"z-index":a?2:1});this.sideBPosition.css({"z-index":a?1:2})};
normalPage.prototype.rotateElement=function(a,b,c){a.css({"-webkit-transform-origin":b,"-moz-transform-origin":b,"-ms-transform-origin":b,"-o-transform-origin":b,"-webkit-transform":c,"-moz-transform":c,"-ms-transform":c,"-o-transform":c})};normalPage.prototype.translateElement=function(a,b,c){a.css({"-webkit-transform":"translate("+b+"px,"+c+"px)","-moz-transform":"translate("+b+"px,"+c+"px)","-o-transform":"translate("+b+"px,"+c+"px)","-ms-transform":"translate("+b+"px,"+c+"px)"})};
normalPage.prototype.isTop=function(){return 0<=this.corner.indexOf("t")};normalPage.prototype.isLeft=function(){return 0<=this.corner.indexOf("l")};normalPage.prototype.isBottom=function(){return 0<=this.corner.indexOf("b")};normalPage.prototype.isRight=function(){return 0<=this.corner.indexOf("r")};normalPage.prototype.isCorner=function(a,b){var c=0;this.isTop()&&0==b&&c++;this.isBottom()&&b==this.height&&c++;this.isLeft()&&0==a&&c++;this.isRight()&&a==this.width&&c++;return 2==c};
normalPage.prototype.setPageVisible=function(a){a?(this.page.css({display:"block"}),this.pageVisible=!0):(this.page.css({display:"none"}),this.pageVisible=!1)};normalPage.prototype.getPageStatu=function(){return this.pageStatu};normalPage.prototype.setPageStatu=function(a){this.pageStatu=a};normalPage.prototype.showShadow=function(){this.flipFrontShadow.css({display:"block"});this.flipBackShadow.css({display:"block"})};
normalPage.prototype.hideShadow=function(){this.flipFrontShadow.css({display:"none"});this.flipBackShadow.css({display:"none"})};normalPage.prototype.setCSS=function(a){this.page.css(a)};function rightToLeftNormalPage(){normalPage.call(this)}$.extend(rightToLeftNormalPage.prototype,normalPage.prototype);
rightToLeftNormalPage.prototype.create=function(a){this.page=$("<div class='paper'></div>");this.mask=$("<div class='pageMask'></div>");this.sideAPosition=$("<div class='sidePosition'></div>");this.sideBPosition=$("<div class='sidePosition'></div>");this.flipBackShadow=$("<div class='backShadow'></div>");this.flipFrontShadow=$("<div class='frontShadow'></div>");this.sideA=new normalSide(this.sideAPosition,!0);this.sideB=new normalSide(this.sideBPosition,!1);this.page.append(this.flipBackShadow);a.append(this.page);
this.page.append(this.mask);this.mask.append(this.sideAPosition);this.mask.append(this.sideBPosition);this.sideAPosition.append(this.sideA.side);this.sideBPosition.append(this.sideB.side)};
rightToLeftNormalPage.prototype.beginFlip=function(a){this.corner=a;this.isLeft()?(this.sideB.sideAddChild(this.flipFrontShadow),this.pageStatu=!0):(this.sideA.sideAddChild(this.flipFrontShadow),this.pageStatu=!1);3>=flipBook.gotoPageIndex&&flipBook.setLeftThicknessVisible(!1);flipBook.gotoPageIndex>=totalPageCount-2&&flipBook.setRightThicknessVisible(!1);this.mask.css({width:this.maskWidth+"px",height:this.maskWidth+"px"});flipBook.normalBookShadow.hideShadow()};
rightToLeftNormalPage.prototype.flipToPoint=function(a,b,c){if(this.isHardPage)this.hardFlip(a,c);else if(this.isCorner(a,b))this.resetPage(!this.isLeft());else{var d=computePoint(this.corner,a,b,this.width,this.height,this.maskWidth,this.flipFrontShadow,this.flipBackShadow),a=d.Angle,b=d.Df,e=d.NomovePoint,d=d.Mv,f=this.isLeft(),h=this.isBottom();c&&(this.showShadow(),this.page.css({left:f?"0px":this.width+"px"}),this.sideAPosition.css({right:f?"0px":"auto",left:f?"auto":"0px",top:h?"auto":"0px",
bottom:h?"0px":"auto"}),this.sideBPosition.css({right:f?"0px":"auto",left:f?"auto":"0px",top:h?"auto":"0px",bottom:h?"0px":"auto"}),this.setSideUp(!f),f?this.sideA.hideGray():this.sideB.hideGray());switch(this.corner){case "tl":this.rotateElement(this.mask,"100% 0%",translate(-e.x+this.width-this.maskWidth+d.x,-e.y+d.y)+rotate(-a));this.rotateElement(this.sideAPosition,"100% 0%",rotate(a)+translate(e.x-d.x,e.y-d.y));this.rotateElement(this.sideBPosition,"100% 0%",rotate(a)+translate(e.x+b.x-d.x,e.y+
b.y-d.y));this.rotateElement(this.sideB.side,"100% 0%",translate(-this.width,0)+rotate(2*(90-a)));break;case "tr":this.rotateElement(this.mask,"0% 0%",translate(e.x+d.x,-e.y+d.y)+rotate(a));this.rotateElement(this.sideBPosition,"0% 0%",rotate(-a)+translate(-e.x-d.x,e.y-d.y));this.rotateElement(this.sideAPosition,"0% 0%",rotate(-a)+translate(-e.x-d.x+b.x,e.y+b.y-d.y));this.rotateElement(this.sideA.getSide(),"0% 0%",translate(0,0)+rotate(2*(a-90)));break;case "bl":this.rotateElement(this.mask,"100% 100%",
translate(-e.x+this.width-this.maskWidth+d.x,e.y+this.height-this.maskWidth+d.y)+rotate(a));this.rotateElement(this.sideAPosition,"100% 100%",rotate(-a)+translate(e.x-d.x,-e.y-d.y));this.rotateElement(this.sideBPosition,"100% 100%",rotate(-a)+translate(e.x+b.x-d.x,-e.y-d.y+b.y));this.rotateElement(this.sideB.getSide(),"100% 100%",translate(-this.width,-this.height)+rotate(2*(a-90)));break;case "br":this.rotateElement(this.mask,"0% 100%",translate(e.x+d.x,e.y+this.height-this.maskWidth+d.y)+rotate(-a)),
this.rotateElement(this.sideBPosition,"0% 100%",rotate(a)+translate(-e.x-d.x,-e.y-d.y)),this.rotateElement(this.sideAPosition,"0% 100%",rotate(a)+translate(-e.x+b.x-d.x,-e.y+b.y-d.y)),this.rotateElement(this.sideA.getSide(),"0% 100%",translate(0,-this.height)+rotate(2*(90-a)))}}};
rightToLeftNormalPage.prototype.hardFlip=function(a,b){var c=!1;if("tl"==this.corner||"bl"==this.corner)c=!0;var d=c?a-this.width:a;d<-this.width&&(d=-this.width);d>=this.width&&(d=this.width);d=180*Math.acos(d/this.width)/Math.PI;c?(b&&(this.sideB.imgFlipOver(!0),this.page.css({"-webkit-perspective-origin":"right center","-webkit-transform-origin":"100% 50%","-webkit-transform-style":"preserve-3d","-moz-perspective-origin":"right center","-moz-transform-origin":"100% 50%","-moz-transform-style":"preserve-3d",
"z-index":20})),d=180-d,this.page.css({"-webkit-transform":"perspective(3000px) rotateY("+d+"deg) translate3d(0px,0px,-1px)","-moz-transform":"perspective(3000px) rotateY("+d+"deg)"}),90<=d?this.setSideUp(!1):this.setSideUp(!0)):(b&&(this.sideA.imgFlipOver(!0),this.page.css({"-webkit-perspective-origin":"left center","-webkit-transform-origin":"0% 50%","-webkit-transform-style":"preserve-3d","-moz-transform-style":"preserve-3d","-moz-perspective-origin":"left center","-moz-transform-origin":"0% 50%",
"z-index":20})),this.page.css({"-webkit-transform":"perspective(3000px) rotateY("+-d+"deg)","-moz-transform":"perspective(3000px) rotateY("+-d+"deg)"}),90<=d?this.setSideUp(!0):this.setSideUp(!1))};
rightToLeftNormalPage.prototype.resetPage=function(a){this.isHardPage&&(this.sideA.imgFlipOver(!1),this.sideB.imgFlipOver(!1),!this.isLastPageReset&&this.pageIndex+1==totalPageCount?(this.isLastPageReset=!0,window.setTimeout(function(){this.page.css({"-webkit-transform-style":"flat","-moz-transform-style":"flat","-webkit-transform":"rotateY(0deg)","-moz-transform":"rotateY(0deg)","-o-transform":"rotateY(0deg)","-ms-transform":"rotateY(0deg)",transform:"rotateY(0deg)"})},10)):this.page.css({"-webkit-transform-style":"flat",
"-moz-transform-style":"flat","-webkit-transform":"rotateY(0deg)","-moz-transform":"rotateY(0deg)","-o-transform":"rotateY(0deg)","-ms-transform":"rotateY(0deg)",transform:"rotateY(0deg)"}));this.page.css({left:!a?"0px":this.width+"px"});this.mask.css({top:"0px",left:"0px",bottom:"auto",right:"auto",width:this.width,height:this.height});this.rotateElement(this.mask,"0% 0%",translate(0,0)+rotate(0));this.sideAPosition.css({top:"0px",left:"0px",bottom:"auto",right:"auto"});this.sideBPosition.css({top:"0px",
left:"0px",bottom:"auto",right:"auto"});this.rotateElement(this.sideAPosition,"0% 0%",translate(0,0)+rotate(0));this.rotateElement(this.sideBPosition,"0% 0%",translate(0,0)+rotate(0));this.rotateElement(this.sideA.getSide(),"0% 0%",translate(0,0)+rotate(0));this.rotateElement(this.sideB.getSide(),"0% 0%",translate(0,0)+rotate(0))};function androidPage(){normalPage.call(this)}$.extend(androidPage.prototype,normalPage.prototype);
androidPage.prototype.flipToPoint=function(a,b,c){if(this.isHardPage)this.hardFlip(a,c);else if(this.isCorner(a,b))this.resetPage(this.isLeft());else{var d=computePoint(this.corner,a,this.isTop()?0:this.height,this.width,this.height,this.maskWidth,this.flipFrontShadow,this.flipBackShadow),a=d.Angle,b=d.Df,e=d.NomovePoint,d=d.Mv,f=this.isLeft(),h=this.isBottom();c&&(this.showShadow(),this.page.css({left:f?"0px":this.width+"px"}),this.sideAPosition.css({right:f?"0px":"auto",left:f?"auto":"0px",top:h?
"auto":"0px",bottom:h?"0px":"auto"}),this.sideBPosition.css({right:f?"0px":"auto",left:f?"auto":"0px",top:h?"auto":"0px",bottom:h?"0px":"auto"}),this.setSideUp(f),f?this.sideA.hideGray():this.sideB.hideGray());switch(this.corner){case "tl":this.rotateElement(this.mask,"100% 0%",translate(-e.x+this.width-this.maskWidth+d.x,-e.y+d.y)+rotate(-a));this.rotateElement(this.sideBPosition,"100% 0%",rotate(a)+translate(e.x-d.x,e.y-d.y));this.rotateElement(this.sideAPosition,"100% 0%",rotate(a)+translate(e.x+
b.x-d.x,e.y+b.y-d.y));this.rotateElement(this.sideA.side,"100% 0%",translate(-this.width,0)+rotate(2*(90-a)));break;case "tr":this.rotateElement(this.mask,"0% 0%",translate(e.x+d.x,-e.y+d.y)+rotate(a));this.rotateElement(this.sideAPosition,"0% 0%",rotate(-a)+translate(-e.x-d.x,e.y-d.y));this.rotateElement(this.sideBPosition,"0% 0%",rotate(-a)+translate(-e.x-d.x+b.x,e.y+b.y-d.y));this.rotateElement(this.sideB.getSide(),"0% 0%",translate(0,0)+rotate(2*(a-90)));break;case "bl":this.rotateElement(this.mask,
"100% 100%",translate(-e.x+this.width-this.maskWidth+d.x,e.y+this.height-this.maskWidth+d.y)+rotate(a));this.rotateElement(this.sideBPosition,"100% 100%",rotate(-a)+translate(e.x-d.x,-e.y-d.y));this.rotateElement(this.sideAPosition,"100% 100%",rotate(-a)+translate(e.x+b.x-d.x,-e.y-d.y+b.y));this.rotateElement(this.sideA.getSide(),"100% 100%",translate(-this.width,-this.height)+rotate(2*(a-90)));break;case "br":this.rotateElement(this.mask,"0% 100%",translate(e.x+d.x,e.y+this.height-this.maskWidth+
d.y)+rotate(-a)),this.rotateElement(this.sideAPosition,"0% 100%",rotate(a)+translate(-e.x-d.x,-e.y-d.y)),this.rotateElement(this.sideBPosition,"0% 100%",rotate(a)+translate(-e.x+b.x-d.x,-e.y+b.y-d.y)),this.rotateElement(this.sideB.getSide(),"0% 100%",translate(0,-this.height)+rotate(2*(90-a)))}}};function androidRightPage(){rightToLeftNormalPage.call(this)}$.extend(androidRightPage,rightToLeftNormalPage.prototype);
androidRightPage.prototype.flipToPoint=function(a,b,c){if(this.isHardPage)this.hardFlip(a,c);else if(this.isCorner(a,b))this.resetPage(!this.isLeft());else{var d=computePoint(this.corner,a,this.isTop()?0:this.height,this.width,this.height,this.maskWidth,this.flipFrontShadow,this.flipBackShadow),a=d.Angle,b=d.Df,e=d.NomovePoint,d=d.Mv,f=this.isLeft(),h=this.isBottom();c&&(this.showShadow(),this.page.css({left:f?"0px":this.width+"px"}),this.sideAPosition.css({right:f?"0px":"auto",left:f?"auto":"0px",
top:h?"auto":"0px",bottom:h?"0px":"auto"}),this.sideBPosition.css({right:f?"0px":"auto",left:f?"auto":"0px",top:h?"auto":"0px",bottom:h?"0px":"auto"}),this.setSideUp(!f),f?this.sideA.hideGray():this.sideB.hideGray());switch(this.corner){case "tl":this.rotateElement(this.mask,"100% 0%",translate(-e.x+this.width-this.maskWidth+d.x,-e.y+d.y)+rotate(-a));this.rotateElement(this.sideAPosition,"100% 0%",rotate(a)+translate(e.x-d.x,e.y-d.y));this.rotateElement(this.sideBPosition,"100% 0%",rotate(a)+translate(e.x+
b.x-d.x,e.y+b.y-d.y));this.rotateElement(this.sideB.side,"100% 0%",translate(-this.width,0)+rotate(2*(90-a)));break;case "tr":this.rotateElement(this.mask,"0% 0%",translate(e.x+d.x,-e.y+d.y)+rotate(a));this.rotateElement(this.sideBPosition,"0% 0%",rotate(-a)+translate(-e.x-d.x,e.y-d.y));this.rotateElement(this.sideAPosition,"0% 0%",rotate(-a)+translate(-e.x-d.x+b.x,e.y+b.y-d.y));this.rotateElement(this.sideA.getSide(),"0% 0%",translate(0,0)+rotate(2*(a-90)));break;case "bl":this.rotateElement(this.mask,
"100% 100%",translate(-e.x+this.width-this.maskWidth+d.x,e.y+this.height-this.maskWidth+d.y)+rotate(a));this.rotateElement(this.sideAPosition,"100% 100%",rotate(-a)+translate(e.x-d.x,-e.y-d.y));this.rotateElement(this.sideBPosition,"100% 100%",rotate(-a)+translate(e.x+b.x-d.x,-e.y-d.y+b.y));this.rotateElement(this.sideB.getSide(),"100% 100%",translate(-this.width,-this.height)+rotate(2*(a-90)));break;case "br":this.rotateElement(this.mask,"0% 100%",translate(e.x+d.x,e.y+this.height-this.maskWidth+
d.y)+rotate(-a)),this.rotateElement(this.sideBPosition,"0% 100%",rotate(a)+translate(-e.x-d.x,-e.y-d.y)),this.rotateElement(this.sideAPosition,"0% 100%",rotate(a)+translate(-e.x+b.x-d.x,-e.y+b.y-d.y)),this.rotateElement(this.sideA.getSide(),"0% 100%",translate(0,-this.height)+rotate(2*(90-a)))}}};var bookMouseDown=!1,nBookStatu=0;function normalBook(){this.pageWidth=300;this.pageHeight=400;this.width=600;this.height=400;this.maskWidth=500;this.gotoPageIndex=this.currentPageIndex=this.betweenPaperCount=1;this.intervalID=this.flipToPage=this.flippingPage=null;this.flipPoint=Point(0,0)}
normalBook.prototype.create=function(a){this.flipBook=$("<div class='flipBook' id='flipBook'></div>");"android"==device.name?(this.previousPage=new androidPage,this.currentPage=new androidPage,this.currentPage2=new androidPage,this.nextPage=new androidPage):(this.previousPage=new normalPage,this.currentPage=new normalPage,this.currentPage2=new normalPage,this.nextPage=new normalPage);this.previousPage.create(this.flipBook);this.currentPage.create(this.flipBook);this.currentPage2.create(this.flipBook);
this.nextPage.create(this.flipBook);this.leftThickness=thickness(!0);this.rightThickness=thickness(!1);this.normalBookShadow=new bookShadow(this.pageWidth,this.pageHeight,this.flipBook);a.append(this.flipBook);this.flipBook.append(this.leftThickness);this.flipBook.append(this.rightThickness);this.currentPageIndex=oriPageIndex;this.fillNearPage(this.currentPageIndex);setCurrentIndexTextField(this.currentPageIndex,!0);3>=this.currentPageIndex&&this.leftThickness.setVisible(!1);this.currentPageIndex>=
totalPageCount-2&&this.rightThickness.setVisible(!1);this.resetPageZIndex();this.initBookEvent()};
normalBook.prototype.onResize=function(a,b){this.width=2*a;this.height=b;this.pageWidth=a;this.pageHeight=b;this.maskWidth=Math.sqrt(a*a+b*b);this.flipBook.css({width:this.width+"px",height:this.height+"px"});this.previousPage.onResize(a,b,this.maskWidth,0);this.currentPage.onResize(a,b,this.maskWidth,0);this.currentPage2.onResize(a,b,this.maskWidth,a);this.nextPage.onResize(a,b,this.maskWidth,a);this.leftThickness.onResize(15,b);this.rightThickness.onResize(15,b);normalEventRadius=Math.pow(Math.ceil(a/
3),2);this.normalBookShadow.onResize(this.pageWidth,this.pageHeight,1!=this.currentPageIndex&&this.currentPageIndex!=totalPageCount);this.normalBookShadow.setPosition(1==this.currentPageIndex?a:0,0)};normalBook.prototype.getCurrentPageIndex=function(){return this.currentPageIndex};normalBook.prototype.getPageWidth=function(a){if(void 0==a)return this.pageWidth;this.pageWidth=a};normalBook.prototype.getPageHeight=function(a){if(void 0==a)return this.pageHeight;this.pageHeight=a};
normalBook.prototype.getWidth=function(){return this.width};normalBook.prototype.getHeight=function(){return this.height};normalBook.prototype.getLeft=function(){return this.flipBook.offset().left};normalBook.prototype.getTop=function(){return this.flipBook.offset().top};normalBook.prototype.setCSS=function(a){this.flipBook.css(a)};normalBook.prototype.setPosition=function(a,b,c){void 0==c&&(c=["left","top"]);this.flipBook.css(c[0],a+"px");this.flipBook.css(c[1],b+"px")};
normalBook.prototype.timer=function(a,b,c,d,e,f,h,j){void 0==h&&(h=!1);void 0==j&&(j=!1);var k=0<=a.indexOf("l"),l=0<=a.indexOf("t");h||(this.currentPage.setCSS({"z-index":k?7:6}),this.currentPage2.setCSS({"z-index":k?6:7}));flipping=!0;stopFlip=!1;var r=(d.y-e.y)/b,m=0,p=getSpeedArray((d.x-e.x)/b,b),w=getSpeedArray(r,b);Point(0,0);var n=this;this.intervalID=setInterval(function(){m++;n.flipPoint.x=e.x;n.flipPoint.y=e.y;for(var c=0;c<m;c++){n.flipPoint.x=n.flipPoint.x+p[c];n.flipPoint.y=n.flipPoint.y+
w[c]}if(f)n.flipPoint.y=0.2*Math.sqrt(Math.pow(n.pageWidth,2)-Math.pow(k?n.flipPoint.x-n.pageWidth:n.flipPoint.x,2));if(m==b)n.flipPoint=d;if(stopFlip){window.clearInterval(n.intervalID);n.betweenPaperCount=k?-1:1;n.gotoPageIndex=k?Math.floor(n.currentPageIndex/2-1)*2+1:Math.floor(n.currentPageIndex/2+1)*2;c=Point(k?2*n.pageWidth:-n.pageWidth,l?0:n.pageHeight);n.timer(a,6,30,c,n.flipPoint,false,true,true);auto_player.resetTimer()}else{n.flippingPage.flipToPoint(n.flipPoint.x,n.flipPoint.y,m==1);if(m>=
b){_rimFlip.isRimFlip||auto_player.resetTimer();window.clearInterval(n.intervalID);flipping=false;if(j||f){n.flippingPage.endFlip();n.afterGotoPage()}else if(h||!_rimFlip.isRimFlip)if(h){if(!f&&!j){nBookStatu=normalBookStatu.book_statu_ready;n.flippingPage.setSideUp(n.flippingPage.isLeft()?false:true);n.currentPageIndex>3&&!n.leftThickness.visible&&n.leftThickness.setVisible(true);n.currentPageIndex<totalPageCount-2&&!n.rightThickness.visible&&n.rightThickness.setVisible(true);if(n.currentPageIndex==
1){n.normalBookShadow.onResize(n.pageWidth,n.pageHeight,false);n.normalBookShadow.setPosition(n.pageWidth,0)}else{if(n.currentPageIndex==totalPageCount)n.normalBookShadow.onResize(n.pageWidth,n.pageHeight,false);else n.normalBookShadow.onResize(n.pageWidth,n.pageHeight,true);n.normalBookShadow.setPosition(0,0)}n.normalBookShadow.showShadow()}}else bookMouseDown=true}}},c)};
normalBook.prototype.gotoPage=function(a){if(1>a||a>totalPageCount)_tipsBox.setCaption(1>a?"This is the first page":"This is the last page"),_tipsBox.showTipsBox();else if(0==nBookStatu&&this.setGotoPage(a)){a==totalPageCount&&this.nextPage.setPageVisible(!1);1==a&&this.previousPage.setPageVisible(!1);_rimFlip.removeRimFlip();nBookStatu=normalBookStatu.book_statu_auto_flip;this.gotoPageIndex=a;if(0<this.betweenPaperCount)var a=Point(this.pageWidth,0),b=Point(-this.pageWidth,0),c="tr";else a=Point(0,
0),b=Point(2*this.pageWidth,0),c="tl";this.flippingPage.setCSS({"z-index":7});this.flippingPage.beginFlip(c);this.timer(c,20,30,b,a,!0)}};normalBook.prototype.stopTimer=function(){window.clearInterval(this.intervalID)};
normalBook.prototype.afterGotoPage=function(){this.currentPageIndex=this.gotoPageIndex;this.currentPage.getSideB().leaveSide();this.currentPage2.getSideA().leaveSide();this.changePage();if(1==this.currentPageIndex)this.normalBookShadow.onResize(this.pageWidth,this.pageHeight,!1),this.normalBookShadow.setPosition(this.pageWidth,0);else{if(this.currentPageIndex==totalPageCount)this.normalBookShadow.onResize(this.pageWidth,this.pageHeight,!1);else this.normalBookShadow.onResize(this.pageWidth,this.pageHeight,
!0);this.normalBookShadow.setPosition(0,0)}setCurrentIndexTextField(this.currentPageIndex,!0);var a=this;window.setTimeout(function(){nBookStatu=normalBookStatu.book_statu_ready;resizeBookAfterFlip&&onStageResize();3<a.currentPageIndex&&!a.leftThickness.visible&&a.leftThickness.setVisible(!0);a.currentPageIndex<totalPageCount-2&&!a.rightThickness.visible&&a.rightThickness.setVisible(!0);a.fillNearPage(a.currentPageIndex);a.resetPageZIndex();thumbnail.clearHighLight();thumbnail.setHighLight(a.currentPageIndex);
a.currentPage.getSideB().enterSide();a.currentPage2.getSideA().enterSide();window.location.hash="#p="+a.currentPageIndex},30)};
normalBook.prototype.changePage=function(){var a;1==this.betweenPaperCount?(a=this.nextPage,this.nextPage=this.previousPage,this.previousPage=this.currentPage,this.currentPage=this.currentPage2,this.currentPage2=a):-1==this.betweenPaperCount?(a=this.previousPage,this.previousPage=this.nextPage,this.nextPage=this.currentPage2,this.currentPage2=this.currentPage,this.currentPage=a):2==this.betweenPaperCount||-2==this.betweenPaperCount?(a=this.previousPage,this.previousPage=this.currentPage2,this.currentPage2=
a,a=this.currentPage,this.currentPage=this.nextPage,this.nextPage=a):-2>this.betweenPaperCount?(a=this.nextPage,this.nextPage=this.currentPage2,this.currentPage2=this.currentPage,this.currentPage=a):2<this.betweenPaperCount&&(a=this.currentPage,this.currentPage=this.currentPage2,this.currentPage2=this.previousPage,this.previousPage=a)};normalBook.prototype.setLeftThicknessVisible=function(a){this.leftThickness.setVisible(a)};normalBook.prototype.setRightThicknessVisible=function(a){this.rightThickness.setVisible(a)};
normalBook.prototype.setThicknessPosition=function(){this.leftThickness.setThicknessPosition(-14,0);this.rightThickness.setThicknessPosition(2*this.pageWidth-1,0)};normalBook.prototype.resetPageZIndex=function(){this.currentPage.setCSS({"z-index":4});this.currentPage2.setCSS({"z-index":5});this.nextPage.setCSS({"z-index":3});this.previousPage.setCSS({"z-index":2})};normalBook.prototype.fillAnPage=function(a,b){a.fillSideA(2*b-1);a.fillSideB(2*b)};
normalBook.prototype.fillNearPage=function(a){var b=Math.floor(a/2);3<a?(this.previousPage.setPageVisible(!0),this.previousPage.resetPage(!0),this.previousPage.setSideUp(!1),this.fillAnPage(this.previousPage,b-1)):this.previousPage.setPageVisible(!1);1<a?(this.currentPage.setPageVisible(!0),this.currentPage.resetPage(!0),this.currentPage.setSideUp(!1),this.fillAnPage(this.currentPage,b)):this.currentPage.setPageVisible(!1);2*Math.floor(a/2)+1<totalPageCount?(this.currentPage2.setPageVisible(!0),this.currentPage2.resetPage(!1),
this.currentPage2.setSideUp(!0),this.fillAnPage(this.currentPage2,b+1)):this.currentPage2.setPageVisible(!1);2*Math.floor(a/2)+3<totalPageCount?(this.nextPage.setPageVisible(!0),this.nextPage.resetPage(!1),this.nextPage.setSideUp(!0),this.fillAnPage(this.nextPage,b+2)):this.nextPage.setPageVisible(!1)};
normalBook.prototype.setGotoPage=function(a){var b,c;this.currentPageIndex>a?(b=Math.floor(a/2),c=Math.floor(this.currentPageIndex/2),this.flippingPage=this.currentPage,1<c-b?(this.flipToPage=this.nextPage,this.flipToPage.resetPage(!0),this.flipToPage.setSideUp(!1),this.flipToPage.setCSS({"z-index":6}),this.flippingPage.fillSideA(2*b+1),this.flipToPage.fillSideA(2*b-1),this.flipToPage.fillSideB(2*b)):this.flipToPage=this.previousPage,1!=a?this.flipToPage.setPageVisible(!0):this.flipToPage.setPageVisible(!1)):
(b=Math.floor(a/2)+1,c=Math.floor(this.currentPageIndex/2)+1,this.flippingPage=this.currentPage2,1<b-c?(this.flipToPage=this.previousPage,this.flipToPage.resetPage(!1),this.flipToPage.setSideUp(!0),this.flipToPage.setCSS({"z-index":6}),this.flippingPage.fillSideB(2*b-2),this.flipToPage.fillSideA(2*b-1),this.flipToPage.fillSideB(2*b)):this.flipToPage=this.nextPage,a!=totalPageCount?this.flipToPage.setPageVisible(!0):this.flipToPage.setPageVisible(!1));this.betweenPaperCount=b-c;return b!=c};
normalBook.prototype.pointInPage=function(a,b,c){return 0<=a.x&&a.x<=b&&0<=a.y&&a.y<=c?"left":a.x<=2*b&&a.x>=b&&0<=a.y&&a.y<=c?"right":!1};
normalBook.prototype.initBookEvent=function(){var a=this,b=-1,c=void 0,d,e;this.twoFingerDown=!1;this.flipBook.bind(_event._down,function(b){b=isTouch?b.originalEvent.touches:[b];if(2==b.length){if(nBookStatu==normalBookStatu.book_statu_mouse_flip){var c;"tl"==a.flippingPage.corner?c=Point(0,0):"tr"==a.flippingPage.corner?c=Point(a.pageWidth,0):"bl"==a.flippingPage.corner?c=Point(0,a.pageHeight):"br"==a.flippingPage.corner&&(c=Point(a.pageWidth,a.pageHeight));window.clearInterval(a.intervalID);a.timer(a.flippingPage.corner,
6,30,c,a.flipPoint,!1,!0)}d=globalToBook(!0,b[0].pageX,b[0].pageY);e=globalToBook(!0,b[1].pageX,b[1].pageY);b=a.pointInPage(d,a.pageWidth,a.pageHeight);c=a.pointInPage(e,a.pageWidth,a.pageHeight);b==c&&b&&(a.twoFingerDown=b);bookMouseDown=!1}else{if(nBookStatu==normalBookStatu.book_statu_ready){c=globalToBook(!0,b[0].pageX,b[0].pageY);if(0>c.x||c.x>a.width||0>c.y||c.y>a.height)return;var j,k;if(Math.pow(c.x,2)+Math.pow(c.y,2)<normalEventRadius){if(j="tl",k=Point(0,0),a.flippingPage=a.currentPage,
a.gotoPageIndex=2*Math.floor(a.currentPageIndex/2)-1,1==a.currentPageIndex)return}else if(Math.pow(2*a.pageWidth-c.x,2)+Math.pow(c.y,2)<normalEventRadius){if(j="tr",c.x-=a.pageWidth,k=Point(a.pageWidth,0),a.flippingPage=a.currentPage2,a.gotoPageIndex=2*Math.floor(a.currentPageIndex/2+1),a.currentPageIndex==totalPageCount)return}else if(Math.pow(c.x,2)+Math.pow(a.pageHeight-c.y,2)<normalEventRadius){if(j="bl",k=Point(0,a.pageHeight),a.flippingPage=a.currentPage,a.gotoPageIndex=2*Math.floor(a.currentPageIndex/
2)-1,1==a.currentPageIndex)return}else if(Math.pow(a.width-c.x,2)+Math.pow(a.height-c.y,2)<normalEventRadius){if(j="br",c.x-=a.pageWidth,k=Point(a.pageWidth,a.pageHeight),a.flippingPage=a.currentPage2,a.gotoPageIndex=2*Math.floor(a.currentPageIndex/2+1),a.currentPageIndex==totalPageCount)return}else return;_rimFlip.removeRimFlip();nBookStatu=normalBookStatu.book_statu_mouse_flip;a.flippingPage.beginFlip(j);a.timer(j,6,30,c,k,!1,!1)}b[0].preventDefault();return!1}});bookContainer.bind(_event._move,
function(f){f=isTouch?f.originalEvent.touches:[f];if(2==f.length&&a.twoFingerDown){var h=globalToBook(!0,f[0].pageX,f[0].pageY),f=globalToBook(!0,f[1].pageX,f[1].pageY);if(15<Math.abs(h.x-d.x)||15<Math.abs(h.y-d.y)||15<Math.abs(f.x-e.x)||15<Math.abs(f.y-e.y)){var j;"left"==a.twoFingerDown?j=2*Math.floor(a.currentPageIndex/2):"right"==a.twoFingerDown&&(j=2*Math.floor(a.currentPageIndex/2)+1);zoomBook.currentIndex=j;zoomBook.showPage.fillContent(zoomBook.currentIndex);changeShowBook(2);bookType=2;$("#zoomImg").attr("src",
uiBaseURL+"ZoomOut.png");$("#btnZoom").attr("title","Zoom Out");setCurrentIndexTextField(zoomBook.currentIndex,!1);thumbnail.clearHighLight();thumbnail.setHighLight(zoomBook.currentIndex)}return!1}bookMouseDown&&(h=globalToBook(a.flippingPage.isLeft(),f[0].pageX,f[0].pageY),a.flippingPage.flipToPoint(h.x,h.y,!1),-1!=b&&(c=h.x>b?!1:!0),b=h.x);f[0].preventDefault();return!1});bookContainer.bind(_event._end,function(b){b=isTouch?b.originalEvent.changedTouches:[b];if(bookMouseDown){a.twoFingerDown=!1;
var b=globalToBook(a.flippingPage.isLeft(),b[0].pageX,b[0].pageY),d,e,k=!0;if(a.flippingPage.isLeft()&&b.x>=a.pageWidth||!a.flippingPage.isLeft()&&0>=b.x)k=!1;void 0!=c&&(k=!(a.flippingPage.isLeft()^c));k||(a.gotoPageIndex=a.flippingPage.isLeft()?2*Math.floor(a.currentPageIndex/2-1)+1:2*Math.floor(a.currentPageIndex/2+1),a.betweenPaperCount=a.flippingPage.isLeft()?-1:1);d=Point(a.flippingPage.isLeft()?0:a.pageWidth,a.flippingPage.isTop()?0:a.pageHeight);e=Point(a.flippingPage.isLeft()?2*a.pageWidth:
-a.pageWidth,a.flippingPage.isTop()?0:a.pageHeight);a.timer(a.flippingPage.corner,6,30,k?d:e,b,!1,!0,!k);bookMouseDown=!1}else flipping&&2==nBookStatu&&(stopFlip=!0)})};function rightToLeftNormalBook(){normalBook.call(this)}$.extend(rightToLeftNormalBook.prototype,normalBook.prototype);
rightToLeftNormalBook.prototype.create=function(a){this.flipBook=$("<div class='flipBook' id='flipBook'></div>");"android"==device.name?(this.previousPage=new androidRightPage,this.currentPage=new androidRightPage,this.currentPage2=new androidRightPage,this.nextPage=new androidRightPage):(this.previousPage=new rightToLeftNormalPage,this.currentPage=new rightToLeftNormalPage,this.currentPage2=new rightToLeftNormalPage,this.nextPage=new rightToLeftNormalPage);this.previousPage.create(this.flipBook);
this.currentPage.create(this.flipBook);this.currentPage2.create(this.flipBook);this.nextPage.create(this.flipBook);this.leftThickness=thickness(!1);this.rightThickness=thickness(!0);this.normalBookShadow=new bookShadow(this.pageWidth,this.pageHeight,this.flipBook);a.append(this.flipBook);this.flipBook.append(this.leftThickness);this.flipBook.append(this.rightThickness);this.currentPageIndex=oriPageIndex;this.fillNearPage(this.currentPageIndex);setCurrentIndexTextField(this.currentPageIndex,!0);3>=
this.currentPageIndex&&this.leftThickness.setVisible(!1);this.currentPageIndex>=totalPageCount-2&&this.rightThickness.setVisible(!1);this.resetPageZIndex();this.initBookEvent()};
rightToLeftNormalBook.prototype.onResize=function(a,b){this.width=2*a;this.height=b;this.pageWidth=a;this.pageHeight=b;this.maskWidth=Math.sqrt(a*a+b*b);this.flipBook.css({width:this.width+"px",height:this.height+"px"});this.previousPage.onResize(a,b,this.maskWidth,0);this.currentPage.onResize(a,b,this.maskWidth,0);this.currentPage2.onResize(a,b,this.maskWidth,0);this.nextPage.onResize(a,b,this.maskWidth,0);this.leftThickness.onResize(15,b);this.rightThickness.onResize(15,b);normalEventRadius=Math.pow(Math.ceil(a/
3),2);this.normalBookShadow.onResize(this.pageWidth,this.pageHeight,1!=this.currentPageIndex&&this.currentPageIndex!=totalPageCount);this.normalBookShadow.setPosition(this.currentPageIndex==totalPageCount?a:0,0)};rightToLeftNormalBook.prototype.setThicknessPosition=function(){this.leftThickness.setThicknessPosition(2*this.pageWidth-1,0);this.rightThickness.setThicknessPosition(-14,0)};
rightToLeftNormalBook.prototype.gotoPage=function(a){if(1>a||a>totalPageCount)_tipsBox.setCaption(1>a?"This is the first page":"This is the last page"),_tipsBox.showTipsBox();else if(0==nBookStatu&&this.setGotoPage(a)){a==totalPageCount&&this.nextPage.setPageVisible(!1);1==a&&this.previousPage.setPageVisible(!1);_rimFlip.removeRimFlip();nBookStatu=normalBookStatu.book_statu_auto_flip;this.gotoPageIndex=a;if(0<this.betweenPaperCount)var a=Point(0,0),b=Point(2*this.pageWidth,0),c="tl";else a=Point(this.pageWidth,
0),b=Point(-this.pageWidth,0),c="tr";this.flippingPage.setCSS({"z-index":7});this.flippingPage.beginFlip(c);this.timer(c,20,30,b,a,!0)}};
rightToLeftNormalBook.prototype.timer=function(a,b,c,d,e,f,h,j){void 0==h&&(h=!1);void 0==j&&(j=!1);var k=0<=a.indexOf("l"),l=0<=a.indexOf("t");h||(this.currentPage.setCSS({"z-index":k?6:7}),this.currentPage2.setCSS({"z-index":k?7:6}));flipping=!0;stopFlip=!1;var r=(d.y-e.y)/b,m=0,p=getSpeedArray((d.x-e.x)/b,b),w=getSpeedArray(r,b);Point(0,0);var n=this;this.intervalID=setInterval(function(){m++;n.flipPoint.x=e.x;n.flipPoint.y=e.y;for(var c=0;c<m;c++){n.flipPoint.x=n.flipPoint.x+p[c];n.flipPoint.y=
n.flipPoint.y+w[c]}if(f)n.flipPoint.y=0.2*Math.sqrt(Math.pow(n.pageWidth,2)-Math.pow(k?n.flipPoint.x-n.pageWidth:n.flipPoint.x,2));if(m==b)n.flipPoint=d;if(stopFlip){window.clearInterval(n.intervalID);n.betweenPaperCount=k?1:-1;n.gotoPageIndex=k?Math.floor(n.currentPageIndex/2+1)*2:Math.floor(n.currentPageIndex/2-1)*2+1;c=Point(k?2*n.pageWidth:-n.pageWidth,l?0:n.pageHeight);n.timer(a,6,30,c,n.flipPoint,false,true,true);auto_player.resetTimer()}else{n.flippingPage.flipToPoint(n.flipPoint.x,n.flipPoint.y,
m==1);if(m>=b){_rimFlip.isRimFlip||auto_player.resetTimer();window.clearInterval(n.intervalID);flipping=false;if(j||f){n.flippingPage.endFlip();n.afterGotoPage()}else if(h||!_rimFlip.isRimFlip)if(h){if(!f&&!j){nBookStatu=normalBookStatu.book_statu_ready;n.flippingPage.setSideUp(n.flippingPage.isLeft()?true:false);n.currentPageIndex>3&&!n.leftThickness.visible&&n.leftThickness.setVisible(true);n.currentPageIndex<totalPageCount-2&&!n.rightThickness.visible&&n.rightThickness.setVisible(true);if(n.currentPageIndex==
1){n.normalBookShadow.onResize(n.pageWidth,n.pageHeight,false);n.normalBookShadow.setPosition(0,0)}else if(n.currentPageIndex==totalPageCount){n.normalBookShadow.onResize(n.pageWidth,n.pageHeight,false);n.normalBookShadow.setPosition(n.pageWidth,0)}else{n.normalBookShadow.onResize(n.pageWidth,n.pageHeight,true);n.normalBookShadow.setPosition(0,0)}n.normalBookShadow.showShadow()}}else bookMouseDown=true}}},c)};
rightToLeftNormalBook.prototype.afterGotoPage=function(){this.currentPageIndex=this.gotoPageIndex;this.currentPage.getSideB().leaveSide();this.currentPage2.getSideA().leaveSide();this.changePage();1==this.currentPageIndex?(this.normalBookShadow.onResize(this.pageWidth,this.pageHeight,!1),this.normalBookShadow.setPosition(0,0)):this.currentPageIndex==totalPageCount?(this.normalBookShadow.onResize(this.pageWidth,this.pageHeight,!1),this.normalBookShadow.setPosition(this.pageWidth,0)):(this.normalBookShadow.onResize(this.pageWidth,
this.pageHeight,!0),this.normalBookShadow.setPosition(0,0));setCurrentIndexTextField(this.currentPageIndex,!0);var a=this;window.setTimeout(function(){nBookStatu=normalBookStatu.book_statu_ready;resizeBookAfterFlip&&onStageResize();a.currentPageIndex>3&&!a.leftThickness.visible&&a.leftThickness.setVisible(true);a.currentPageIndex<totalPageCount-2&&!a.rightThickness.visible&&a.rightThickness.setVisible(true);a.fillNearPage(a.currentPageIndex);a.resetPageZIndex();thumbnail.clearHighLight();thumbnail.setHighLight(a.currentPageIndex);
a.currentPage.getSideB().enterSide();a.currentPage2.getSideA().enterSide();window.location.hash="#p="+a.currentPageIndex},30)};
rightToLeftNormalBook.prototype.initBookEvent=function(){var a=this,b=-1,c=void 0,d,e;this.twoFingerDown=!1;this.flipBook.bind(_event._down,function(b){b=isTouch?b.originalEvent.touches:[b];if(2==b.length){if(nBookStatu==normalBookStatu.book_statu_mouse_flip){var c;"tl"==a.flippingPage.corner?c=Point(0,0):"tr"==a.flippingPage.corner?c=Point(a.pageWidth,0):"bl"==a.flippingPage.corner?c=Point(0,a.pageHeight):"br"==a.flippingPage.corner&&(c=Point(a.pageWidth,a.pageHeight));window.clearInterval(a.intervalID);
a.timer(a.flippingPage.corner,6,30,c,a.flipPoint,!1,!0)}d=globalToBook(!0,b[0].pageX,b[0].pageY);e=globalToBook(!0,b[1].pageX,b[1].pageY);b=a.pointInPage(d,a.pageWidth,a.pageHeight);c=a.pointInPage(e,a.pageWidth,a.pageHeight);b==c&&b&&(a.twoFingerDown=b);bookMouseDown=!1}else{if(nBookStatu==normalBookStatu.book_statu_ready){b=globalToBook(!0,b[0].pageX,b[0].pageY);if(0>b.x||b.x>a.width||0>b.y||b.y>a.height)return;var j;if(Math.pow(b.x,2)+Math.pow(b.y,2)<normalEventRadius){if(c="tl",j=Point(0,0),a.flippingPage=
a.currentPage2,a.gotoPageIndex=2*Math.floor(a.currentPageIndex/2+1),a.currentPageIndex==totalPageCount)return}else if(Math.pow(2*a.pageWidth-b.x,2)+Math.pow(b.y,2)<normalEventRadius){if(c="tr",b.x-=a.pageWidth,j=Point(a.pageWidth,0),a.flippingPage=a.currentPage,a.gotoPageIndex=2*Math.floor(a.currentPageIndex/2)-1,1==a.currentPageIndex)return}else if(Math.pow(b.x,2)+Math.pow(a.pageHeight-b.y,2)<normalEventRadius){if(c="bl",j=Point(0,a.pageHeight),a.flippingPage=a.currentPage2,a.gotoPageIndex=2*Math.floor(a.currentPageIndex/
2+1),a.currentPageIndex==totalPageCount)return}else if(Math.pow(a.width-b.x,2)+Math.pow(a.height-b.y,2)<normalEventRadius){if(c="br",b.x-=a.pageWidth,j=Point(a.pageWidth,a.pageHeight),a.flippingPage=a.currentPage,a.gotoPageIndex=2*Math.floor(a.currentPageIndex/2)-1,1==a.currentPageIndex)return}else return;_rimFlip.removeRimFlip();nBookStatu=normalBookStatu.book_statu_mouse_flip;a.flippingPage.beginFlip(c);a.timer(c,6,30,b,j,!1,!1)}return!1}});bookContainer.bind(_event._move,function(f){f=isTouch?
f.originalEvent.touches:[f];if(2==f.length&&a.twoFingerDown){var h=globalToBook(!0,f[0].pageX,f[0].pageY),f=globalToBook(!0,f[1].pageX,f[1].pageY);if(15<Math.abs(h.x-d.x)||15<Math.abs(h.y-d.y)||15<Math.abs(f.x-e.x)||15<Math.abs(f.y-e.y)){var j;"left"==a.twoFingerDown?j=2*Math.floor(a.currentPageIndex/2)+1:"right"==a.twoFingerDown&&(j=2*Math.floor(a.currentPageIndex/2));zoomBook.currentIndex=j;zoomBook.showPage.fillContent(zoomBook.currentIndex);changeShowBook(2);bookType=2;$("#zoomImg").attr("src",
uiBaseURL+"ZoomOut.png");$("#btnZoom").attr("title","Zoom Out");setCurrentIndexTextField(zoomBook.currentIndex,!1);thumbnail.clearHighLight();thumbnail.setHighLight(zoomBook.currentIndex)}}else return bookMouseDown&&(h=globalToBook(a.flippingPage.isLeft(),f[0].pageX,f[0].pageY),a.flippingPage.flipToPoint(h.x,h.y,!1),-1!=b&&(c=h.x>b?!1:!0),b=h.x),!1});bookContainer.bind(_event._end,function(b){b=isTouch?b.originalEvent.changedTouches:[b];if(bookMouseDown){a.twoFingerDown=!1;var b=globalToBook(a.flippingPage.isLeft(),
b[0].pageX,b[0].pageY),d,e,k=!0;if(a.flippingPage.isLeft()&&b.x>=a.pageWidth||!a.flippingPage.isLeft()&&0>=b.x)k=!1;void 0!=c&&(k=!(a.flippingPage.isLeft()^c));k||(a.gotoPageIndex=a.flippingPage.isLeft()?2*Math.floor(a.currentPageIndex/2+1):2*Math.floor(a.currentPageIndex/2-1)+1,a.betweenPaperCount=a.flippingPage.isLeft()?1:-1);d=Point(a.flippingPage.isLeft()?0:a.pageWidth,a.flippingPage.isTop()?0:a.pageHeight);e=Point(a.flippingPage.isLeft()?2*a.pageWidth:-a.pageWidth,a.flippingPage.isTop()?0:a.pageHeight);
a.timer(a.flippingPage.corner,6,30,k?d:e,b,!1,!0,!k);bookMouseDown=!1}else flipping&&2==nBookStatu&&(stopFlip=!0)})};var _singleBook,singleBookShadow;
function singleBook(){var a=$(this).data(),b;a.previousPage=$("#singlePrePage");a.currentPage=$("#singleCurPage");a.nextPage=$("#singleNextPage");a.thickness=thickness(rightToLeft);a.flippingPage={};a.flipToPage={};a.currentPageIndex=1;a.pageWidth=768;a.pageHeight=1024;a.maskWidth=1280;a.bookStatu=0;a.differPageNum=0;a.gotoPageIndex=0;a.bookMouseDown=!1;a.isLeft=!1;a.isTop=!1;singleBookShadow=new bookShadow(a.pageWidth,a.pageHeight,_singleBook);a.cssObj={top:"0px",left:"0px",position:"absolute"};
a.gotoPage=function(b){if(1>b||b>originTotalPageCount)_tipsBox.setCaption(1>b?"This is the first page":"This is the last page"),_tipsBox.showTipsBox();else if(!(a.currentPageIndex==b||0!=a.bookStatu)){_rimFlip.removeRimFlip();a.setGotoPage(b);a.bookStatu=1;a.gotoPageIndex=b;var b=Point(0,0),d,e=Point(0,0);0<a.differPageNum?rightToLeft?(b.x=0,b.y=0,e.x=2*a.pageWidth,e.y=0,d="tl"):(b.x=a.pageWidth,b.y=0,e.x=-a.pageWidth,e.y=0,d="tr"):rightToLeft?(b.x=2*a.pageWidth,b.y=0,e.x=0,e.y=0,d="tr"):(b.x=-a.pageWidth,
b.y=0,e.x=a.pageWidth,e.y=0,d="tl");a.flippingPage.beginFlip(d);a.timer(d,20,30,e,b,!0)}};a.setVisible=function(a){$("#singleBookMask").css("display",a?"block":"none")};a.changePage=function(){var b;0<a.differPageNum?(b=a.previousPage,a.previousPage=a.currentPage,a.currentPage=a.nextPage,a.nextPage=b):(b=a.nextPage,a.nextPage=a.currentPage,a.currentPage=a.previousPage,a.previousPage=b)};a.inPointInPage=function(a,b,e){return 0<=a.x&&a.x<=b&&0<=a.y&&a.y<=e?!0:!1};a.timer=function(c,d,e,f,h,j,k,l){void 0==
k&&(k=!1);void 0==l&&(l=!1);flipping=!0;stopFlip=!1;a.flipPoint=Point(0,0);var r=(f.y-h.y)/d,m=0,p=getSpeedArray((f.x-h.x)/d,d),w=getSpeedArray(r,d);Point(0,0);b=setInterval(function(){m++;a.flipPoint.x=h.x;a.flipPoint.y=h.y;for(var e=0;e<m;e++)a.flipPoint.x+=p[e],a.flipPoint.y+=w[e];j&&(a.flipPoint.y=rightToLeft?0.2*Math.sqrt(Math.pow(a.pageWidth,2)-Math.pow(a.flipPoint.x-a.pageWidth,2)):0.2*Math.sqrt(Math.pow(a.pageWidth,2)-Math.pow(a.flipPoint.x,2)));m==d&&(a.flipPoint=f);if(stopFlip){auto_player.resetTimer();
window.clearInterval(b);var e=0<=c.indexOf("l"),r=0<=c.indexOf("t");rightToLeft?(a.differPageNum=e?1:-1,a.gotoPageIndex=e?a.currentPageIndex+1:a.currentPageIndex-1,e=Point(e?2*a.pageWidth:0,r?0:a.pageHeight)):(a.differPageNum=e?-1:1,a.gotoPageIndex=e?a.currentPageIndex-1:a.currentPageIndex+1,e=Point(e?a.pageWidth:-a.pageWidth,r?0:a.pageHeight));a.timer(c,6,30,e,a.flipPoint,!1,!0,!0)}else if(e=1,0>a.flipPoint.x&&!rightToLeft&&(e=Math.min((a.flipPoint.x+a.pageWidth)/a.pageWidth+0.1,1),a.flippingPage.sideB.css("opacity",
e)),a.flipPoint.x>a.pageWidth&&rightToLeft&&(e=Math.min(Math.abs(a.flipPoint.x-2*a.pageWidth)/a.pageWidth+0.1,1),a.flippingPage.sideB.css("opacity",e)),a.flippingPage.flipToPoint(a.flipPoint,1==m),m>=d)if(_rimFlip.isRimFlip||auto_player.resetTimer(),window.clearInterval(b),j||l)a.flippingPage.endFlip(),a.afterGotoPage();else if(k||!_rimFlip.isRimFlip)k?!j&&!l&&(a.bookStatu=0,a.flippingPage.setSideAUp(!0),a.reset_z_index(),a.currentPageIndex!=originTotalPageCount&&a.thickness.showThickness()):a.bookMouseDown=
!0},e)};a.stopTimer=function(){window.clearInterval(b)};a.afterGotoPage=function(){a.currentPageIndex=a.gotoPageIndex;a.changePage();setCurrentIndexTextField(a.currentPageIndex,!1);window.setTimeout(function(){a.bookStatu=0;resizeBookAfterFlip&&onStageResize();a.currentPageIndex!=originTotalPageCount&&a.thickness.showThickness();a.fillNearPage(a.currentPageIndex);a.reset_z_index();a.flippingPage.resetPage();thumbnail.clearHighLight();thumbnail.setHighLight(a.currentPageIndex);window.location.hash=
"#p="+a.currentPageIndex},30)};a.setGotoPage=function(b){a.differPageNum=b-a.currentPageIndex;a.currentPageIndex>b?(a.flippingPage=a.previousPage,a.flipToPage=a.previousPage,a.fillAnPage(a.flipToPage,b,a.currentPageIndex-1)):(a.flippingPage=a.currentPage,a.flipToPage=a.nextPage,a.fillAnPage(a.flipToPage,b,b),a.flipToPage.css({"z-index":4}),a.flippingPage.css({"z-index":5}))};a.fillAnPage=function(a,b,e){a.resetPage();a.sideA.fillImg(b,!1);a.sideB.fillImg(e,!0);a.isHardPage=1==b&&hardPageEnable&&3!=
browserType?!0:!1};a.fillNearPage=function(b){1<b&&a.fillAnPage(a.previousPage,b-1,b-1);a.fillAnPage(a.currentPage,b,b);b<originTotalPageCount&&a.fillAnPage(a.nextPage,b+1,b+1)};a.reset_z_index=function(){a.previousPage.css("z-index",1);a.currentPage.css("z-index",3);a.nextPage.css("z-index",2)};a.addSearch=function(){a.previousPage.addSearch();a.currentPage.addSearch();a.nextPage.addSearch()};a.clearSearch=function(){a.previousPage.clearSearch();a.currentPage.clearSearch();a.nextPage.clearSearch()}}
singleBook.prototype.setSingleBookVisible=function(a){$("#singleBookMask").css({display:a?"block":"none"})};singleBook.prototype.gotoAnPoint=function(a){$(this).data().gotoPage(a)};singleBook.prototype.Create=function(){var a=$(this).data();this.initPage(a.previousPage);this.initPage(a.currentPage);this.initPage(a.nextPage);a.fillNearPage(oriPageIndex);_singleBook.append(a.thickness);a.currentPageIndex=oriPageIndex;oriPageIndex>=originTotalPageCount-1&&a.thickness.setVisible(!1)};
singleBook.prototype.onResize=function(a,b){var c=$(this).data();c.maskWidth=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));_singleBook.css({width:a+"px",height:b+"px"});c.previousPage.onResize(a,b);c.currentPage.onResize(a,b);c.nextPage.onResize(a,b);c.pageWidth=a;c.pageHeight=b;$("#singleBookMask").css({width:windowWidth+"px",height:windowHeight+"px"});c.thickness.onResize(15,b);c.thickness.setThicknessPosition(rightToLeft?-14:a-1,0);singleEventRadius=Math.pow(Math.ceil(a/3),2);singleBookShadow.onResize(a,
b,!1)};singleBook.prototype.setBookPosition=function(a,b){$("#singleBookMask").css({left:a+"px"});_singleBook.css({left:"0px",top:b+"px"})};
singleBook.prototype.initPage=function(a){var b=$(this).data();a.mask=$("<div style='position:absolute;top:0px;left:0px;overflow:hidden;'></div>");a.sidePositionA=$("<div style='position:absolute;top:0px;left:0px;'></div>");a.sidePositionB=$("<div style='position:absolute;top:0px;left:0px;'></div>");a.sideA=this.initSide(a,!0);a.sideB=this.initSide(a,!1);a.shadowA=$("<div style='position:absolute;top:0px;left:0px;display: none;'></div>");a.shadowB=$("<div style='position:absolute;top:0px;left:0px; display: none;'></div>");
a.corner="tr";a.realCorner="tr";_singleBook.append(a);a.append(a.shadowA);a.append(a.mask);a.mask.append(a.sidePositionB);a.mask.append(a.sidePositionA);a.sidePositionB.append(a.sideB);a.sidePositionA.append(a.sideA);a.sideB.append(a.shadowB);a.onResize=function(c,d){a.css({width:c+"px",height:d+"px"});a.mask.css({width:b.maskWidth+"px",height:b.maskWidth+"px"});a.shadowA.css({width:c+"px",height:d+"px"});a.shadowB.css({width:c+"px",height:d+"px"});a.sidePositionA.css({width:c+"px",height:d+"px"});
a.sidePositionB.css({width:c+"px",height:d+"px"});a.sideA.onResize(c,d);a.sideB.onResize(c,d)};a.isHardPage=!1;a.beginFlip=function(c){a.realCorner=c;a.corner=0<=c.indexOf("t")?rightToLeft?"tl":"tr":rightToLeft?"bl":"br";b.gotoPageIndex==originTotalPageCount&&b.thickness.hideThickness()};a.flipToPoint=function(c,d){void 0==d&&(d=!1);"android"==device.name&&(c.y="tl"==a.corner||"tr"==a.corner?0:b.pageHeight);if(a.isHardPage)a.hardPageFlip(c.x,d);else if(a.isCorner(c.x,c.y))a.resetPage(),0<=a.realCorner.indexOf("l")&&
a.css("z-index",1);else{var e=computePoint(a.corner,c.x,c.y,b.pageWidth,b.pageHeight,b.maskWidth,a.shadowB,a.shadowA);angle=e.Angle;df=e.Df;noMovePoint=e.NomovePoint;mv=e.Mv;if(d){a.setSideAUp(!1);a.showShadow();b.flippingPage.css({"z-index":5});var e=0<=a.corner.indexOf("t"),f=0<=a.corner.indexOf("l");e?(a.sidePositionB.css({top:"0px",bottom:"auto",left:f?"auto":"0px",right:f?"0px":"auto"}),a.sidePositionA.css({top:"0px",bottom:"auto",left:f?"auto":"0px",right:f?"0px":"auto"})):(a.sidePositionB.css({top:"auto",
bottom:"0px",left:f?"auto":"0px",right:f?"0px":"auto"}),a.sidePositionA.css({top:"auto",bottom:"0px",left:f?"auto":"0px",right:f?"0px":"auto"}))}0<=a.corner.indexOf("t")?rightToLeft?(a.rotateElement(a.mask,"100% 0%",translate(-noMovePoint.x+b.pageWidth-b.maskWidth+mv.x,-noMovePoint.y+mv.y)+rotate(-angle)),a.rotateElement(a.sidePositionA,"100% 0%",rotate(angle)+translate(noMovePoint.x-mv.x,noMovePoint.y-mv.y)),a.rotateElement(a.sidePositionB,"100% 0%",rotate(angle)+translate(noMovePoint.x+df.x-mv.x,
noMovePoint.y+df.y-mv.y)),a.rotateElement(a.sideB,"100% 0%",translate(-b.pageWidth,0)+rotate(2*(90-angle)))):(a.rotateElement(a.mask,"0% 0%",translate(noMovePoint.x+mv.x,-noMovePoint.y+mv.y)+rotate(angle)),a.rotateElement(a.sidePositionA,"0% 0%",rotate(-angle)+translate(-noMovePoint.x-mv.x,noMovePoint.y-mv.y)),a.rotateElement(a.sidePositionB,"0% 0%",rotate(-angle)+translate(-noMovePoint.x-mv.x+df.x,noMovePoint.y+df.y-mv.y)),a.rotateElement(a.sideB,"0% 0%",translate(0,0)+rotate(2*(angle-90)))):rightToLeft?
(a.rotateElement(a.mask,"100% 100%",translate(-noMovePoint.x+b.pageWidth-b.maskWidth+mv.x,noMovePoint.y+b.pageHeight-b.maskWidth+mv.y)+rotate(angle)),a.rotateElement(a.sidePositionA,"100% 100%",rotate(-angle)+translate(noMovePoint.x-mv.x,-noMovePoint.y-mv.y)),a.rotateElement(a.sidePositionB,"100% 100%",rotate(-angle)+translate(noMovePoint.x+df.x-mv.x,-noMovePoint.y-mv.y+df.y)),a.rotateElement(a.sideB,"100% 100%",translate(-b.pageWidth,-b.pageHeight)+rotate(2*(angle-90)))):(a.rotateElement(a.mask,
"0% 100%",translate(noMovePoint.x+mv.x,noMovePoint.y+b.pageHeight-b.maskWidth+mv.y)+rotate(-angle)),a.rotateElement(a.sidePositionA,"0% 100%",rotate(angle)+translate(-noMovePoint.x-mv.x,-noMovePoint.y-mv.y)),a.rotateElement(a.sidePositionB,"0% 100%",rotate(angle)+translate(-noMovePoint.x+df.x-mv.x,-noMovePoint.y+df.y-mv.y)),a.rotateElement(a.sideB,"0% 100%",translate(0,-b.pageHeight)+rotate(2*(90-angle))))}};a.rotateElement=function(a,b,e){a.css({"-webkit-transform-origin":b,"-moz-transform-origin":b,
"-ms-transform-origin":b,"-o-transform-origin":b,"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,"-o-transform":e})};a.endFlip=function(){a.setSideAUp(!0);a.hideShadow()};a.hardPageFlip=function(c,d){var e=c;rightToLeft?(c>2*b.pageWidth&&(e=2*b.pageWidth),0>c&&(e=0),e=Math.acos((e-b.pageWidth)/b.pageWidth)):(c>b.pageWidth&&(e=b.pageWidth),c<-b.pageWidth&&(e=-b.pageWidth),e=Math.acos(e/b.pageWidth));e=180*e/Math.PI;rightToLeft&&(e-=180);d&&(a.sideB.imgFlipOver(!0),a.css({"-webkit-transform-style":"preserve-3d",
"-moz-transform-style":"preserve-3d","z-index":120}));var f=rightToLeft?"100% 50%":"0% 50%";a.css({"-moz-perspective-origin":"left center","-webkit-transform-origin":f,"-webkit-transform":"perspective(3000px) rotateY("+-e+"deg)","-moz-perspective-origin":"left center","-moz-transform-origin":f,"-moz-transform":"perspective(3000px) rotateY("+-e+"deg)"});rightToLeft?-90>=e?(a.setSideAUp(!1),a.css({opacity:Math.abs(e+180)/90})):(a.setSideAUp(!0),a.css({opacity:1})):90<=e?(a.setSideAUp(!1),a.css({opacity:Math.abs(e-
180)/90})):(a.setSideAUp(!0),a.css({opacity:1}))};a.setSideAUp=function(b){a.sidePositionA.css({"z-index":b?2:1});a.sidePositionB.css({"z-index":b?1:2})};a.showShadow=function(){a.shadowA.css({display:"block"});a.shadowB.css({display:"block"})};a.hideShadow=function(){a.shadowA.css({display:"none"});a.shadowB.css({display:"none"})};a.resetPage=function(){a.isHardPage&&(a.css({"-webkit-transform-style":"flat","-moz-transform-style":"flat","-webkit-transform":"rotateY(0deg)","-moz-transform":"rotateY(0deg)",
"-ms-transform":"rotateY(0deg)","-o-transform":"rotateY(0deg)",transform:"rotateY(0deg)",opacity:1}),a.sideA.imgFlipOver(!1),a.sideB.imgFlipOver(!1));a.rotateElement(a.mask,"0% 0%",translate(0,0)+rotate(0));a.rotateElement(a.sideA,"0% 0%",translate(0,0)+rotate(0));a.rotateElement(a.sideB,"0% 0%",translate(0,0)+rotate(0));a.rotateElement(a.sidePositionA,"0% 0%",translate(0,0)+rotate(0));a.rotateElement(a.sidePositionB,"0% 0%",translate(0,0)+rotate(0));a.sidePositionA.css({top:"0px",bottom:"auto",left:"0px",
right:"auto"});a.sidePositionB.css({top:"0px",bottom:"auto",left:"0px",right:"auto"});a.sideB.css({opacity:1});a.sideA.css({opacity:1})};a.isCorner=function(c,d){var e=0;0<=a.realCorner.indexOf("t")&&0==d&&e++;0<=a.realCorner.indexOf("b")&&d==b.pageHeight&&e++;0<=a.realCorner.indexOf("l")&&c==-b.pageWidth&&e++;0<=a.realCorner.indexOf("r")&&c==b.pageWidth&&e++;return 2<=e};a.addSearch=function(){a.sideA.initSearch();a.sideB.initSearch()};a.clearSearch=function(){a.sideA.clearSearch();a.sideB.clearSearch()}};
singleBook.prototype.initSide=function(a,b){var c=$(this).data(),d=$("<div style='position:absolute;top:0px;left:0px;-webkit-box-shadow: 0 0 10px rgba(40, 0, 0, 0.5)'></div>"),e=$("<div style='position:absolute;top:0px;left:0px;background-color:#f5f0f5'></div>"),f=$("<div style='position:absolute;top:0px;left:0px;'></div>"),h=$("<img />"),j;rightToLeft?(j=$("<div class='leftShadow'></div>"),j.css({width:userConfig.leftShadowWidth+"px",opacity:userConfig.leftShadowAlpha})):(j=$("<div class='rightShadow'></div>"),
j.css({width:userConfig.rightShadowWidth+"px",opacity:userConfig.rightShadowAlpha}));var k=$("<img src='"+uiBaseURL+"progress.gif' style='position: absolute;' />");k.css({left:(c.pageWidth-32)/2+"px",top:(c.pageHeight-32)/2+"px"});var l=$("<div style='position : absolute; '></div>"),r=[],m=[],p=[],w=[],n=[],z=[],t=[],J=[],v=[],s=[],x=[],y=[],I=[],K=[],L=[],R=[],u=[],M=[],D=[],g=[];bannerArray=[];var P=$("<div style='position : absolute; '></div>"),O=[];a.append(d);d.append(e);e.append(f);d.append(P);
d.append(l);b&&e.append(j);d.imgIndex=-1;d.onResize=function(a,b){d.css({width:a+"px",height:b+"px"});e.css({width:a+"px",height:b+"px"});f.css({width:a+"px",height:b+"px"});h.css({width:a+"px",height:b+"px"});j.css({height:b+"px"});k.css({left:(a-32)/2+"px",top:(b-32)/2+"px"});l.css({width:a,height:b});for(var c=0;c<r.length;c++)r[c].onResize(a,b);for(c=0;c<m.length;c++)m[c].onResize(a,b);for(c=0;c<w.length;c++)w[c].onResize(a,b);for(c=0;c<p.length;c++)p[c].onResize(a,b);for(c=0;c<n.length;c++)n[c].onResize(a,
b);for(c=0;c<z.length;c++)z[c].onResize(a,b);for(c=0;c<t.length;c++)t[c].onResize(a,b);for(c=0;c<J.length;c++)J[c].onResize(a,b);for(c=0;c<v.length;c++)v[c].onResize(a,b);for(c=0;c<s.length;c++)s[c].onResize(a,b);for(c=0;c<x.length;c++)x[c].onResize(a,b);for(c=0;c<y.length;c++)y[c].onResize(a,b);for(c=0;c<I.length;c++)I[c].onResize(a,b);for(c=0;c<K.length;c++)K[c].onResize(a,b);for(c=0;c<L.length;c++)L[c].onResize(a,b);for(c=0;c<R.length;c++)R[c].onResize(a,b);for(c=0;c<u.length;c++)u[c].onResize(a,
b);for(c=0;c<M.length;c++)M[c].onResize(a,b);for(c=0;c<D.length;c++)D[c].onResize(a,b);for(c=0;c<g.length;c++)g[c].onResize(a,b);for(c=0;c<bannerArray.length;c++)bannerArray[c].onResize(a,b)};d.fillImg=function(a,b){if(d.imgIndex!=a){d.imgIndex=a;f.empty();d.showLoading();h.load(getPageDir(d.imgIndex,"normal"),function(){h.attr("src",getPageDir(d.imgIndex,"normal"));b&&h.css({"-webkit-transform":"scaleX(-1)","-moz-transform":"scaleX(-1)","-o-transform":"scaleX(-1)","-ms-transform":"scaleX(-1)",opacity:0.2});
d.hideLoading();f.append(h);pageEditor!=void 0&&d.initMM()})}};d.imgFlipOver=function(a){if(a){h.css({"-webkit-transform":"scaleX(-1)","-moz-transform":"scaleX(-1)","-o-transform":"scaleX(-1)","-ms-transform":"scaleX(-1)",transform:"scaleX(-1)"});j.attr("class",rightToLeft?"rightShadow":"leftShadow")}else{h.css({"-webkit-transform":"scaleX(1)","-moz-transform":"scaleX(1)","-ms-transform":"scaleX(1)","-o-transform":"scaleX(1)",transform:"scaleX(1)"});j.attr("class",rightToLeft?"leftShadow":"rightShadow")}j.css({left:rightToLeft?
"auto":"0px",right:rightToLeft?"0px":"auto"})};d.showLoading=function(){d.append(k)};d.hideLoading=function(){k.remove()};d.clearSearch=function(){P.empty();O=[]};d.initSearch=function(){P.empty();O=[];if(!(searchWord==""||searchPageArr.indexOf(d.imgIndex)<0||d.imgIndex==-1))for(var a=0;a<positionForPages[d.imgIndex-1].length;a++)if(positionForPages[d.imgIndex-1][a].word.toLowerCase().indexOf(searchWord.toLowerCase())>=0){var b=searchElement(positionForPages[d.imgIndex-1][a],c.pageWidth,c.pageHeight);
O.push(b);P.append(b)}};d.initMM=function(){l.empty();r=[];m=[];w=[];p=[];n=[];z=[];t=[];J=[];v=[];s=[];x=[];y=[];I=[];K=[];L=[];R=[];u=[];M=[];D=[];g=[];bannerArray=[];if(!(d.imgIndex<0||pageEditor.length<d.imgIndex||pageEditor[d.imgIndex-1][0]==null))for(var a=0;a<pageEditor[d.imgIndex-1].length;a++){var b=pageEditor[d.imgIndex-1][a];if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_LINK){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,
downColor:b.downColor,downAlpha:b.downAlpha,overColor:b.overColor,overAlpha:b.overAlpha,outColor:b.outColor,outAlpha:b.outAlpha,action:b.action};b=new initLink(l,b,c.pageWidth,c.pageHeight);r.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE||pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE1||pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE2||pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE3){var e=
pageEditor[d.imgIndex-1][a],b={width:e.location.width,height:e.location.height,x:e.location.x,y:e.location.y,alpha:e.alpha,id:e.videoId,moviePlayTriggerEvt:e.moviePlayTriggerEvt,movieStopTriggerEvt:e.movieStopTriggerEvt};pageEditor[d.imgIndex-1][a].annotype!=PageEditor.AnnoType.ANNO_YOUTUBE&&(b.id=e.videoID);youtubeObj=new initYoutube(l,b,c.pageWidth,c.pageHeight);m.push(youtubeObj)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_VIDEO){b=pageEditor[d.imgIndex-1][a];b={width:b.location.width,
height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt};b=new initVideo(l,b,c.pageWidth,c.pageHeight);w.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO){b=pageEditor[d.imgIndex-1][a];b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.soundURL,soundPlayTriggerEvt:b.soundPlayTriggerEvt,soundStopTriggerEvt:b.soundStopTriggerEvt};
b=new initAudio(l,b,c.pageWidth,c.pageHeight);p.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_IMAGE){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,action:b.action};b=new initImage(l,b,c.pageWidth,c.pageHeight);n.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_BUTTON){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,action:b.action,
buttonCaption:b.buttonCaption,captionY:b.captionY,HRate:b.HRate,Format:b.Format};b=new initButton(l,b,c.pageWidth,c.pageHeight);z.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_FLASHSHOW){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,photo:b.Images,repeatPlay:b.isRepeat};b=new initFlashShow(l,b,c.pageWidth,c.pageHeight);t.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_LINE){b={StartX:b.lineStartPX,
StartY:b.lineStartPY,EndX:b.lineEndPX,EndY:b.lineEndPY,x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,lineAlpha:b.lineAlpha,alpha:b.alpha,lineWidth:b.lineWidth,lineType:b.lineType,dotWidth:b.dotWidth,color:b.color,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor};b=new initLine(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);J.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ARROW){b=
{StartX:b.lineStartPX,StartY:b.lineStartPY,EndX:b.lineEndPX,EndY:b.lineEndPY,x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,lineWidth:b.lineWidth,lineType:b.lineType,dotWidth:b.dotWidth,color:b.color,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,arrowType:b.arrowType,sr:b.shadow.shadowColor};b=new initArrow(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);v.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==
PageEditor.AnnoType.ANNO_ROUND){b={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,fillStyle:b.fillStyle,color:b.color,ColorA:b.gradientColorA,ColorB:b.gradientColorB,angle:b.angle,spalpha:b.spalpha,borderWidth:b.borderWidth,borderColor:b.borderColor,borderAlpha:b.borderAlpha,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action};b=new initRound(l,b,c.pageWidth,c.pageHeight,
d.imgIndex+a);s.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_RECTANGLE){b={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,fillStyle:b.fillStyle,color:b.color,ColorA:b.gradientColorA,ColorB:b.gradientColorB,angle:b.angle,spalpha:b.spalpha,borderWidth:b.borderWidth,borderColor:b.borderColor,borderAlpha:b.borderAlpha,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,
action:b.action};b=new initRe(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);x.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_TEXT){b={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.textStr,lineH:b.lineHeightRation,fontName:b.formats.defaultFormat.fontName,fontSize:b.formats.defaultFormat.fontSize,color:b.formats.defaultFormat.color,tbold:b.formats.defaultFormat.bold,italic:b.formats.defaultFormat.italic,bgalpha:b.background.alpha,
fillBg:b.background.fillBg,bgcolor:b.background.color,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action};b=new initText(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);y.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AREA){b={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,color:b.color,rounds:b.round,ellipseWidth:b.ellipseWidth,ellipseHeight:b.ellipseHeight,
sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action,action:b.action};b=new initArea(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);I.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_CALLOUT){b={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.textStr,lineH:b.lineHeightRation,fontName:b.formats.defaultFormat.fontName,fontSize:b.formats.defaultFormat.fontSize,
color:b.formats.defaultFormat.color,tbold:b.formats.defaultFormat.bold,italic:b.formats.defaultFormat.italic,bgalpha:b.background.alpha,fillBg:b.background.fillBg,bgcolor:b.background.color,direct:b.hookDirect,cx1:b.hookContr1RatioX,cy1:b.hookContr1RatioY,cx2:b.hookContr2RatioX,cy2:b.hookContr2RatioY,pointx:b.hookContrPointRatioX,pointy:b.hookContrPointRatioY,cornerRadiut:b.cornerRadiut,borderWidth:b.borderWidth,borderColor:b.borderColor,bordreAlpha:b.bordreAlpha,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,
sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action};b=new initCallout(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);K.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ATEXT){b={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.strText,fontName:b.format.font,fontSize:b.format.size,color:b.format.color,tbold:b.format.bold,italic:b.format.italic,align:b.format.align,action:b.action,
repeat:b.repeat,moveSpeed:b.moveSpeed,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action};b=new initAText(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);L.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_STARTEXT){b={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.strText,fontName:b.format.font,fontSize:b.format.size,color:b.format.color,
tbold:b.format.bold,italic:b.format.italic,align:b.format.align,action:b.action,repeat:b.repeat,moveSpeed:b.moveSpeed,lineH:b.HRate,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor};b=new initStarText(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);R.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_TEXTANIM){b={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,
effectType:b.effectType,textStr:b.textStr,fontName:b.formats.defaultFormat.fontName,fontSize:b.formats.defaultFormat.fontSize,color:b.formats.defaultFormat.color,tbold:b.formats.defaultFormat.bold,italic:b.formats.defaultFormat.italic,action:b.action,lineH:b.HRate,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor};b=new initAminText(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);u.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==
PageEditor.AnnoType.ANNO_ATIMAGE){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,action:b.action};atimageObj=new initPngImage(l,b,c.pageWidth,c.pageHeight);M.push(atimageObj)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_EFFECTTEXT){b={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.text,fontName:b.format.font,fontSize:b.format.size,color:b.format.color,tbold:b.format.bold,
italic:b.format.italic,action:b.action,lineH:b.HRate,moveSpeed:b.effectStyle,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor};b=new initEffText(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);D.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ADVANCEDSOUND){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.soundList.sound,skinType:b.skinType,soundPlay:b.soundPlayTriggerEvt};
b=new initSound(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);g.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_BANNER){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,action:b.action,banners:b.banners};b=new initBanner(l,b,c.pageWidth,c.pageHeight,d.imgIndex+a);bannerArray.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_VIDEO1){b={width:b.location.width,height:b.location.height,x:b.location.x,
y:b.location.y,alpha:b.alpha,src:b.videoURL,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt};b=new initVideo(l,b,c.pageWidth,c.pageHeight);w.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_VIDEO2){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.videoURL,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt};b=new initVideo(l,b,c.pageWidth,c.pageHeight);
w.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO1){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.soundList.sound.path,soundPlayTriggerEvt:b.soundPlayTriggerEvt,soundStopTriggerEvt:b.soundStopTriggerEvt};b=new initAudio(l,b,c.pageWidth,c.pageHeight);p.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO2){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,
alpha:b.alpha,src:b.data.item[0].fname,soundPlayTriggerEvt:b.soundPlayTriggerEvt,soundStopTriggerEvt:b.soundStopTriggerEvt};b=new initAudio(l,b,c.pageWidth,c.pageHeight);p.push(b)}else if(pageEditor[d.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO3){b={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.componentData.songs.song.url,soundPlayTriggerEvt:b.soundPlayTriggerEvt,soundStopTriggerEvt:b.soundStopTriggerEvt};b=new initAudio(l,b,c.pageWidth,
c.pageHeight);p.push(b)}}};d.changeTo0x=function(a){var b=a;a.substr(0,1)!="#"&&a.substr(0,2)!="0x"&&(b="#"+parseInt(a).toString(16));a.substr(0,2)=="0x"&&(b=a.replace("0x","#"));return b};return d};function zoomControlBar(a){this.dir=uiBaseURL;this.bar=$("<div></div>");this.btnZoomUp=new button(1,this.bar,{iconURL:this.dir+"ZoomUp.png"});this.btnZoomDown=new button(1,this.bar,{iconURL:this.dir+"ZoomDown.png"});this.btnZoomOut=new button(1,this.bar,{iconURL:this.dir+"ZoomOut.png"});this.btnPre=new button(1,this.bar,{iconURL:this.dir+"prev.png"});this.btnNext=new button(1,this.bar,{iconURL:this.dir+"next.png"});this.width=220;this.height=40;a.append(this.bar);this.bar.css({width:this.width+"px",
height:this.height+"px",position:"absolute","z-index":5,"-webkit-border-radius":"8px","-moz-border-radius":"8px","-ms-border-radius":"8px","-o-border-radius":"8px","border-radius":"8px","-webkit-box-shadow":"0px 0px 10px rgba(0, 0, 60, 0.8)","-moz-box-shadow":"0px 0px 10px rgba(0, 0, 60, 0.8)","-ms-box-shadow":"0px 0px 10px rgba(0, 0, 60, 0.8)","-o-box-shadow":"0px 0px 10px rgba(0, 0, 60, 0.8)","box-shadow":"0px 0px 10px rgba(0, 0, 60, 0.8)",display:"none","background-color":"#333333",opacity:0.7});
this.initEvt();this.setButtonsPos()}zoomControlBar.prototype.setPosition=function(a,b){this.bar.css({left:a+"px",top:b+"px"})};zoomControlBar.prototype.setVisible=function(a){this.bar.css({display:a?"block":"none"})};zoomControlBar.prototype.setChildIndex=function(a){this.bar.css({"z-index":a})};zoomControlBar.prototype.onResize=function(a,b){this.bar.css({width:a+"px",height:b+"px"})};
zoomControlBar.prototype.initEvt=function(){this.btnZoomUp.onMouseUp(this,this.zoomUp);this.btnZoomDown.onMouseUp(this,this.zoomDown);this.btnZoomOut.onMouseUp(this,this.zoomOut);this.btnPre.onMouseUp(this,previousPageFun);this.btnNext.onMouseUp(this,nextPageFun)};
zoomControlBar.prototype.setButtonsPos=function(){this.btnZoomUp.setButtonPosition(3,3);this.btnZoomDown.setButtonPosition(46,3);this.btnZoomOut.setButtonPosition(89,3);this.btnPre.setButtonPosition(132,3);this.btnNext.setButtonPosition(175,3)};zoomControlBar.prototype.zoomUp=function(){zoomBook.zoom(0.2)};zoomControlBar.prototype.zoomDown=function(){zoomBook.zoom(-0.2)};
zoomControlBar.prototype.zoomOut=function(){windowWidth<windowHeight?(changeShowBook(1),bookType=1,setCurrentIndexTextField($(singlePageBook).data().currentPageIndex),$(singlePageBook).data().gotoPage(zoomBook.currentIndex)):(changeShowBook(0),bookType=0,setCurrentIndexTextField(flipBook.currentPageIndex,!0),flipBook.gotoPage(zoomBook.currentIndex));thumbnail.clearHighLight();thumbnail.setHighLight(zoomBook.currentIndex);zoomBook.noZoom();$("#btnZoom").empty().append(getImage(toolBarIconsURL[5])).attr("title",
"Zoom In")};function zoomSide(a){this.side=$("<div></div>");this.sideContent=$("<div></div>");this.sideImg=$("<img style='position: absolute;' />");this.MMbg=$("<div style='position:absolute;z-index:3;'></div>");this.loadingImg=$("<img src='"+uiBaseURL+"progress.gif' style='position: absolute;'>");this.width=zoomPageWidth;this.height=zoomPageHeight;this.fitH=this.fitW=0;this.tmpImg=$("<img style='position: absolute;z-index:-1;' />");a.append(this.side);this.side.append(this.sideContent);this.side.append(this.loadingImg);
this.imgIndex=-1;this.toScale=1;this.origin="0% 0%";this.translateY=this.translateX=this.y=this.x=0;this.side.css({width:this.width+"px",height:this.height+"px",position:"absolute","-webkit-box-shadow":"10px 5px 15px rgba(40, 0, 0, 0.6)"});this.sideContent.css({width:this.width+"px",height:this.height+"px"});this.sideImg.css({width:this.width+"px",height:this.height+"px"});this.MMbg.css({width:this.width+"px",height:this.height+"px"});this.loadingImg.css({left:(this.width-32)/2+"px",top:(this.height-
32)/2+"px"});this.linkArray=[];this.youtubeArray=[];this.videoArray=[];this.audioArray=[];this.imageArray=[];this.buttonArray=[];this.flashShowArray=[];this.lineArray=[];this.arrowArray=[];this.roundArray=[];this.reArray=[];this.textArray=[];this.areaArray=[];this.calloutArray=[];this.atextArray=[];this.startextArray=[];this.aminArray=[];this.atimageArray=[];this.efftextArray=[];this.soundArray=[];this.bannerArray=[];this.initEvent();this.onWinResize(windowWidth-leftMargin-rightMargin,windowHeight-
topMargin-bottomMargin-40,!0);this.father=a}zoomSide.prototype.hideMM=function(){this.MMbg.css({display:"none"})};zoomSide.prototype.showMM=function(){this.MMbg.css({display:"block"})};zoomSide.prototype.setCSS=function(a){this.side.css(a)};zoomSide.prototype.onResize2=function(a){this.toScale=a/this.width;a=getTransform(this.side[0]);this.zoomObj(this.side,this.origin," scale("+this.toScale+")",a.x,a.y)};
zoomSide.prototype.onResize=function(a,b,c){a=getPageWidthHeight(a,b,zoomPageWidth,zoomPageHeight);this.width=a.x;this.height=a.y;this.side.css({width:this.width+"px",height:this.height+"px"});this.sideContent.css({width:this.width+"px",height:this.height+"px"});this.sideImg.css({width:this.width+"px",height:this.height+"px"});this.MMbg.css({width:this.width+"px",height:this.height+"px"});this.MMResize(this.width,this.height);c&&this.tmpImg.css({width:this.width+"px",height:this.height+"px"})};
zoomSide.prototype.getSide=function(){return this.side};zoomSide.prototype.fillContent=function(a){if(a!=this.imgIndex&&(this.imgIndex=a,this.sideContent.empty(),this.showLoading(),!(a>originTotalPageCount||0>a))){var b=this;b.sideImg.attr("src",getPageDir(a,"large"));this.sideImg.load(function(){b.hideLoading();b.tmpImg.attr("src",getPageDir(a,"large"));b.sideContent.append(b.sideImg);b.father.append(b.tmpImg);b.sideContent.append(b.MMbg);void 0!=pageEditor&&b.initMM()})}};
zoomSide.prototype.setPosition=function(a,b){this.side.css({left:a+"px",top:b+"px"})};zoomSide.prototype.setChildIndex=function(a){this.side.css({"z-index":a})};zoomSide.prototype.setVisible=function(a){this.side.css({display:a?"block":"none"})};
zoomSide.prototype.resetSize=function(){var a=this.width*this.toScale>=zoomPageWidth,b=a?zoomPageWidth:this.width*this.toScale,c=a?zoomPageHeight:this.height*this.toScale,d=getTransform(this.side[0]),e=this,f=this.width==zoomPageWidth&&b<zoomPageWidth||this.width!=zoomPageWidth;this.toScale=a?this.width*this.toScale/zoomPageWidth:1;if(f)this.onResize(b,c);this.zoomObj(this.side,"0% 0%","scale("+this.toScale+")",d.x,d.y);this.width=b;this.height=c;this.translateX=d.x;this.translateY=d.y;window.setTimeout(function(){f&&
e.tmpImg.css({width:e.width+"px",height:e.height+"px"});e.zoomObj(e.tmpImg,"0% 0%","scale("+e.toScale+")",d.x,d.y)},500)};zoomSide.prototype.zoom=function(a,b){b||(b="0% 0%");var c=getTransform(this.side[0]);this.toScale+=a;this.zoomObj(this.side,b,"scale("+this.toScale+")",c.x,c.y);this.zoomObj(this.tmpImg,b,"scale("+this.toScale+")",c.x,c.y);this.resetSize()};
zoomSide.prototype.noZoom=function(){this.toScale=this.fitW/this.width;this.zoomObj(this.side,"0% 0%","scale("+this.toScale+")",0,0);this.zoomObj(this.tmpImg,"0% 0%","scale("+this.toScale+")",0,0)};zoomSide.prototype.zoomObj=function(a,b,c,d,e){d||(d=0);e||(e=0);d=translate(d,e);a.css({"-webkit-transform-origin":b,"-moz-transform-origin":b,"-ms-transform-origin":b,"-o-transform-origin":b,"-webkit-transform":d+c,"-moz-transform":d+c,"-ms-transform":d+c,"-o-transform":d+c})};
zoomSide.prototype.setTranslate=function(a,b,c){b=translate(b,c);a.css({"-webkit-transform":b,"-moz-transform":b,"-o-transform":b,"-ms-transform":b})};zoomSide.prototype.setXY=function(a,b){this.x=a;this.y=b};var originPoint22,inteval;
zoomSide.prototype.animateTranslate=function(a,b,c){a||(a=0);b||(b=0);c||(c=25);var d=getTransform(this.side[0]),e=this;$(d).animate({x:a,y:b},{duration:c,easing:"easeOutSine",complete:function(){e.zoomObj(e.side,e.origin," scale("+e.toScale+")",d.x,d.y);e.zoomObj(e.tmpImg,e.origin," scale("+e.toScale+")",d.x,d.y)}})};
zoomSide.prototype.animateZoom=function(a,b,c,d){a||(a=this.toScale);b||(b=0);c||(c=0);d||(d=25);var e=getTransform(this.side[0]),f={scale:this.toScale,x:e.x,y:e.y},h=this;$(f).animate({scale:a,x:b,y:c},{duration:d,step:function(){h.zoomObj(h.side,h.origin," scale("+f.scale+")",f.x,f.y);h.zoomObj(h.tmpImg,h.origin," scale("+f.scale+")",f.x,f.y)},complete:function(){h.toScale=a;h.resetSize()}})};
zoomSide.prototype.onWinResize=function(a,b,c){var d=getPageWidthHeight(a,b,zoomPageWidth,zoomPageHeight);this.fitW=d.x;this.fitH=d.y;if(c)this.onResize(a,b,!0)};zoomSide.prototype.showLoading=function(){this.side.append(this.loadingImg)};zoomSide.prototype.hideLoading=function(){this.loadingImg.remove()};zoomSide.prototype.translate=function(a,b){this.zoomObj(this.side,this.origin," scale("+this.toScale+")",a,b);this.zoomObj(this.tmpImg,this.origin," scale("+this.toScale+")",a,b)};
zoomSide.prototype.isFit=function(){return this.toScale==this.fitW/this.width};zoomSide.prototype.animateBack=function(a){var b=getTransform(this.side[0]),c={x:b.x,y:b.y,scale:this.toScale},d=this.fitW/this.width,e=this;$(c).animate({x:0,y:0,scale:d},{duration:200,step:function(){e.zoomObj(e.side,e.origin," scale("+c.scale+")",c.x,c.y);e.zoomObj(e.tmpImg,e.origin," scale("+c.scale+")",c.x,c.y)},complete:function(){e.toScale=d;a()}})};zoomSide.prototype.showPage=function(){this.side.css({display:"block"})};
zoomSide.prototype.hidePage=function(){this.side.css({display:"none"})};zoomSide.prototype.getWidth=function(){return this.width*this.toScale};
zoomSide.prototype.initEvent=function(){var a=this,b=Point(0,0),c=Point(0,0),d=!1,e=!1,f=null,h=!1,j,k=0,l=0,r;this.side.bind(_event._down,function(k){j=a.toScale;var k=isTouch?k.originalEvent.touches:[k],l=getTransform(a.side[0]);a.translateX=l.x;a.translateY=l.y;1==k.length?(d=!0,e=!1,b=Point(k[0].pageX,k[0].pageY),f=Point(a.side.position().left,a.side.position().top)):2==k.length&&(d=!1,e=!0,b=Point(k[0].pageX,k[0].pageY),c=Point(k[1].pageX,k[1].pageY),f=Point(a.side.offset().left,a.side.offset().top));
h=!1;event.preventDefault()});this.side.bind(_event._move,function(m){m=isTouch?m.originalEvent.touches:[m];if(d){var p=m[0].pageX-b.x+a.translateX,m=m[0].pageY-b.y+a.translateY,w=(new Date).getTime(),n=Math.sqrt(Math.pow(p-k,2)+Math.pow(m-l,2)),z=0;100>w-r&&0<w-r&&(z=n/(w-r),Math.min(300*z,300),n=Math.asin((k-p)/n),Math.cos(n),Math.sin(n));a.animateTranslate(p,m,25);k=p;l=m;r=w}else e&&(p=Point(m[0].pageX,m[0].pageY),w=Point(m[1].pageX,m[1].pageY),m=Math.sqrt(Math.pow(b.x-c.x,2)+Math.pow(b.y-c.y,
2)),p=Math.sqrt(Math.pow(p.x-w.x,2)+Math.pow(p.y-w.y,2)),a.toScale=Math.max(p/m*j,0.5),p=b.y-f.y,m=a.toScale/j,a.translateX=b.x-(b.x-f.x)*m-a.x,a.translateY=b.y-p*m-a.y,a.zoomObj(a.side,a.origin," scale("+a.toScale+")",a.translateX,a.translateY),a.zoomObj(a.tmpImg,a.origin," scale("+a.toScale+")",a.translateX,a.translateY),h=!0);event.preventDefault()});this.side.bind(_event._end,function(){h&&a.resetSize();h=e=d=!1});isTouch&&(this.side.hammer().on("swipeleft",function(){2==bookType&&nextPageFun()}),
this.side.hammer().on("swiperight",function(){2==bookType&&previousPageFun()}));this.side.hammer().on("doubletap",function(b){var c=a.width*a.toScale,c=a.fitW/(c>zoomPageWidth?zoomPageWidth:c),d=b.gesture.center.pageX-a.side.offset().left,e=b.gesture.center.pageY-a.side.offset().top;if(c==1){var c=zoomPageWidth/a.fitW,f=c/a.toScale;a.animateZoom(c,b.gesture.center.pageX-f*d-a.x,b.gesture.center.pageY-f*e-a.y,200)}else a.animateZoom(c,0,0,200)})};
zoomSide.prototype.initMM=function(){this.MMbg.empty();this.linkArray=[];this.youtubeArray=[];this.videoArray=[];this.audioArray=[];this.imageArray=[];this.buttonArray=[];this.flashShowArray=[];this.lineArray=[];this.arrowArray=[];this.roundArray=[];this.reArray=[];this.textArray=[];this.areaArray=[];this.calloutArray=[];this.atextArray=[];this.startextArray=[];this.aminArray=[];this.atimageArray=[];this.efftextArray=[];this.soundArray=[];this.bannerArray=[];if(!(0>=this.imgIndex||pageEditor.length<
this.imgIndex||null==pageEditor[this.imgIndex-1][0]))for(var a=0;a<pageEditor[this.imgIndex-1].length;a++){var b=pageEditor[this.imgIndex-1][a];if(pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_LINK){var c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,downColor:b.downColor,downAlpha:b.downAlpha,overColor:b.overColor,overAlpha:b.overAlpha,outColor:b.outColor,outAlpha:b.outAlpha,action:b.action};this.linkArray.push(new initLink(this.MMbg,
c,this.width,this.height))}else pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE||pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE1||pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE2||pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_YOUTUBE3?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,id:b.videoId,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt},
pageEditor[this.imgIndex-1][a].annotype!=PageEditor.AnnoType.ANNO_YOUTUBE&&(c.id=b.videoID),youtubeObj=new initYoutube(this.MMbg,c,this.width,this.height),this.youtubeArray.push(youtubeObj)):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_VIDEO?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt},b=new initVideo(this.MMbg,c,this.width,this.height),
this.videoArray.push(b)):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.soundURL,soundPlayTriggerEvt:b.soundPlayTriggerEvt,soundStopTriggerEvt:b.soundStopTriggerEvt},b=new initAudio(this.MMbg,c,this.width,this.height),this.audioArray.push(b)):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_IMAGE?(c={width:b.location.width,height:b.location.height,x:b.location.x,
y:b.location.y,alpha:b.alpha,src:b.url,action:b.action},imageObj=new initImage(this.MMbg,c,this.width,this.height),this.imageArray.push(imageObj)):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_BUTTON?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,action:b.action,buttonCaption:b.buttonCaption,captionY:b.captionY,HRate:b.HRate,Format:b.Format},this.buttonArray.push(new initButton(this.MMbg,c,this.width,this.height))):pageEditor[this.imgIndex-
1][a].annotype==PageEditor.AnnoType.ANNO_FLASHSHOW?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,photo:b.Images,repeatPlay:b.isRepeat},this.flashShowArray.push(new initFlashShow(this.MMbg,c,this.width,this.height))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_LINE?(c={StartX:b.lineStartPX,StartY:b.lineStartPY,EndX:b.lineEndPX,EndY:b.lineEndPY,x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,lineAlpha:b.lineAlpha,
alpha:b.alpha,lineWidth:b.lineWidth,lineType:b.lineType,dotWidth:b.dotWidth,color:b.color,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.lineArray.push(new initLine(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ARROW?(c={StartX:b.lineStartPX,StartY:b.lineStartPY,EndX:b.lineEndPX,EndY:b.lineEndPY,x:b.location.x,y:b.location.y,width:b.location.width,
height:b.location.height,alpha:b.alpha,lineWidth:b.lineWidth,lineType:b.lineType,dotWidth:b.dotWidth,color:b.color,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,arrowType:b.arrowType,sr:b.shadow.shadowColor},this.arrowArray.push(new initArrow(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ROUND?(c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,
alpha:b.alpha,fillStyle:b.fillStyle,color:b.color,ColorA:b.gradientColorA,ColorB:b.gradientColorB,angle:b.angle,spalpha:b.spalpha,borderWidth:b.borderWidth,borderColor:b.borderColor,borderAlpha:b.borderAlpha,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action},this.roundArray.push(new initRound(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_RECTANGLE?
(c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,fillStyle:b.fillStyle,color:b.color,ColorA:b.gradientColorA,ColorB:b.gradientColorB,angle:b.angle,spalpha:b.spalpha,borderWidth:b.borderWidth,borderColor:b.borderColor,borderAlpha:b.borderAlpha,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action},this.reArray.push(new initRe(this.MMbg,c,this.width,this.height,this.imgIndex+
a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_TEXT?(c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.textStr,lineH:b.lineHeightRation,fontName:b.formats.defaultFormat.fontName,fontSize:b.formats.defaultFormat.fontSize,color:b.formats.defaultFormat.color,tbold:b.formats.defaultFormat.bold,italic:b.formats.defaultFormat.italic,bgalpha:b.background.alpha,fillBg:b.background.fillBg,bgcolor:b.background.color,sh:b.shadow.hasDropShadow,
sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action},this.textArray.push(new initText(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AREA?(c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,color:b.color,rounds:b.round,ellipseWidth:b.ellipseWidth,ellipseHeight:b.ellipseHeight,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,
sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor,action:b.action},this.areaArray.push(new initArea(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_CALLOUT?(c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.textStr,lineH:b.lineHeightRation,fontName:b.formats.defaultFormat.fontName,fontSize:b.formats.defaultFormat.fontSize,color:b.formats.defaultFormat.color,
tbold:b.formats.defaultFormat.bold,italic:b.formats.defaultFormat.italic,bgalpha:b.background.alpha,fillBg:b.background.fillBg,bgcolor:b.background.color,direct:b.hookDirect,cx1:b.hookContr1RatioX,cy1:b.hookContr1RatioY,cx2:b.hookContr2RatioX,cy2:b.hookContr2RatioY,pointx:b.hookContrPointRatioX,pointy:b.hookContrPointRatioY,cornerRadiut:b.cornerRadiut,borderWidth:b.borderWidth,borderColor:b.borderColor,bordreAlpha:b.bordreAlpha,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,
se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.calloutArray.push(new initCallout(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ATEXT?(c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.strText,fontName:b.format.font,fontSize:b.format.size,color:b.format.color,tbold:b.format.bold,italic:b.format.italic,align:b.format.align,action:b.action,repeat:b.repeat,moveSpeed:b.moveSpeed,
sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.atextArray.push(new initAText(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_STARTEXT?(c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.strText,fontName:b.format.font,fontSize:b.format.size,color:b.format.color,tbold:b.format.bold,italic:b.format.italic,
align:b.format.align,action:b.action,repeat:b.repeat,moveSpeed:b.moveSpeed,lineH:b.HRate,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.startextArray.push(new initStarText(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_TEXTANIM?(c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,effectType:b.effectType,
textStr:b.textStr,fontName:b.formats.defaultFormat.fontName,fontSize:b.formats.defaultFormat.fontSize,color:b.formats.defaultFormat.color,tbold:b.formats.defaultFormat.bold,italic:b.formats.defaultFormat.italic,action:b.action,lineH:b.HRate,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.aminArray.push(new initAminText(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ATIMAGE?
(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.url,action:b.action},atimageObj=new initPngImage(this.MMbg,c,this.width,this.height),this.atimageArray.push(atimageObj)):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_EFFECTTEXT?(c={x:b.location.x,y:b.location.y,width:b.location.width,height:b.location.height,alpha:b.alpha,textStr:b.text,fontName:b.format.font,fontSize:b.format.size,color:b.format.color,tbold:b.format.bold,italic:b.format.italic,
action:b.action,moveSpeed:b.effectStyle,lineH:b.HRate,sh:b.shadow.hasDropShadow,sx:b.shadow.shadowBlurX,sy:b.shadow.shadowBlurY,se:b.shadow.shadowDistance,sr:b.shadow.shadowColor},this.efftextArray.push(new initEffText(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_ADVANCEDSOUND?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.soundList.sound,skinType:b.skinType,soundPlay:b.soundPlayTriggerEvt},
this.soundArray.push(new initSound(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_BANNER?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,action:b.action,banners:b.banners},this.bannerArray.push(new initBanner(this.MMbg,c,this.width,this.height,this.imgIndex+a))):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_VIDEO1?(c={width:b.location.width,height:b.location.height,
x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.videoURL,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt},b=new initVideo(this.MMbg,c,this.width,this.height),this.videoArray.push(b)):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_VIDEO2?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.videoURL,moviePlayTriggerEvt:b.moviePlayTriggerEvt,movieStopTriggerEvt:b.movieStopTriggerEvt},b=new initVideo(this.MMbg,
c,this.width,this.height),this.videoArray.push(b)):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO1?(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.soundList.sound.path,soundPlayTriggerEvt:b.soundPlayTriggerEvt,soundStopTriggerEvt:b.soundStopTriggerEvt},b=new initAudio(this.MMbg,c,this.width,this.height),this.audioArray.push(b)):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO2?(c={width:b.location.width,
height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.data.item[0].fname,soundPlayTriggerEvt:b.soundPlayTriggerEvt,soundStopTriggerEvt:b.soundStopTriggerEvt},b=new initAudio(this.MMbg,c,this.width,this.height),this.audioArray.push(b)):pageEditor[this.imgIndex-1][a].annotype==PageEditor.AnnoType.ANNO_AUDIO3&&(c={width:b.location.width,height:b.location.height,x:b.location.x,y:b.location.y,alpha:b.alpha,src:b.componentData.songs.song.url,soundPlayTriggerEvt:b.soundPlayTriggerEvt,
soundStopTriggerEvt:b.soundStopTriggerEvt},b=new initAudio(this.MMbg,c,this.width,this.height),this.audioArray.push(b))}};
zoomSide.prototype.MMResize=function(a,b){for(var c=0;c<this.linkArray.length;c++)this.linkArray[c].onResize(a,b);for(c=0;c<this.youtubeArray.length;c++)this.youtubeArray[c].onResize(a,b);for(c=0;c<this.videoArray.length;c++)this.videoArray[c].onResize(a,b);for(c=0;c<this.audioArray.length;c++)this.audioArray[c].onResize(a,b);for(c=0;c<this.imageArray.length;c++)this.imageArray[c].onResize(a,b);for(c=0;c<this.buttonArray.length;c++)this.buttonArray[c].onResize(a,b);for(c=0;c<this.flashShowArray.length;c++)this.flashShowArray[c].onResize(a,
b);for(c=0;c<this.lineArray.length;c++)this.lineArray[c].onResize(a,b);for(c=0;c<this.arrowArray.length;c++)this.arrowArray[c].onResize(a,b);for(c=0;c<this.roundArray.length;c++)this.roundArray[c].onResize(a,b);for(c=0;c<this.reArray.length;c++)this.reArray[c].onResize(a,b);for(c=0;c<this.textArray.length;c++)this.textArray[c].onResize(a,b);for(c=0;c<this.areaArray.length;c++)this.areaArray[c].onResize(a,b);for(c=0;c<this.calloutArray.length;c++)this.calloutArray[c].onResize(a,b);for(c=0;c<this.atextArray.length;c++)this.atextArray[c].onResize(a,
b);for(c=0;c<this.startextArray.length;c++)this.startextArray[c].onResize(a,b);for(c=0;c<this.aminArray.length;c++)this.aminArray[c].onResize(a,b);for(c=0;c<this.atimageArray.length;c++)this.atimageArray[c].onResize(a,b);for(c=0;c<this.efftextArray.length;c++)this.efftextArray[c].onResize(a,b);for(c=0;c<this.soundArray.length;c++)this.soundArray[c].onResize(a,b);for(c=0;c<this.bannerArray.length;c++)this.bannerArray[c].onResize(a,b)};function initZoomBook(a){this.bookContainer=$("<div style='left:0px;right:0px;top:0px;bottom:0px;position:absolute;display:none;'></div>");this.book=$("<div></div>");this.prePage=new zoomSide(this.book);this.nextPage=new zoomSide(this.book);this.showPage=new zoomSide(this.book);this.width=zoomPageWidth;this.height=zoomPageHeight;this.prePage.setChildIndex(1);this.showPage.setChildIndex(3);this.nextPage.setChildIndex(2);this.diffPageCount=0;this.currentIndex=1;this.slidePageB=this.slidePageA=this.showingPage=
this.flipPage=null;this.isFlipping=!1;isTouch?this.initEvent():(this.controlBar=new zoomControlBar(this.bookContainer),this.controlBar.setPosition((windowWidth-this.controlBar.width)/2,20));a.append(this.bookContainer);this.bookContainer.append(this.book);this.book.css({width:this.width+"px",height:this.height+"px",position:"absolute"});this.fillNear(1)}
initZoomBook.prototype.onResize=function(a,b){var c=getPageWidthHeight(a,b,zoomPageWidth,zoomPageHeight);this.width=c.x;this.height=c.y;this.book.css({width:this.width+"px",height:this.height+"px",left:(a-this.width)/2+leftMargin+"px",top:(b-this.height)/2+topMargin+"px"});this.prePage.onWinResize(a,b,!0);this.showPage.onWinResize(a,b);this.nextPage.onWinResize(a,b,!0);this.controlBar&&this.controlBar.setPosition((windowWidth-this.controlBar.width)/2,20);this.prePage.setXY((a-this.width)/2,(b-this.height)/
2);this.showPage.setXY((a-this.width)/2,(b-this.height)/2);this.nextPage.setXY((a-this.width)/2,(b-this.height)/2);this.prePage.translate(-(a-this.width)/2-this.prePage.getWidth()-leftMargin-10,0);this.nextPage.translate((a-this.width)/2+this.width+rightMargin+10,0)};initZoomBook.prototype.setTranslate=function(a,b,c){b=translate(b,c);a.css({"-webkit-transform":b,"-moz-transform":b,"-o-transform":b,"-ms-transform":b})};
initZoomBook.prototype.gotoPage=function(a){if(this.currentIndex==a||1>a||a>originTotalPageCount||this.isFlipping){if(1>a||a>originTotalPageCount)_tipsBox.setCaption(1>a?"This is the first page":"This is the last page"),_tipsBox.showTipsBox()}else{this.isFlipping=!0;this.diffPageCount=a-this.currentIndex;var b=0,c=0,d=this,e=Point(0,(windowWidth-this.width)/2+10+this.width);this.currentIndex>a?(c=0,b=e.y,this.slidePageA=this.prePage,this.slidePageB=this.showPage,this.slidePageA.fillContent(a)):(c=
e.y,b=0,this.slidePageA=this.showPage,this.slidePageB=this.nextPage,this.slidePageB.fillContent(a));var f=function(){var f=getSpeedArray((b-c)/30,30),j=0,k=window.setInterval(function(){j++;e.x=c;for(var b=0;b<j;b++)e.x=e.x+f[b];d.slidePageA.translate(e.x-e.y,0);d.slidePageB.translate(e.x,0);if(j>=30){window.clearInterval(k);window.setTimeout(function(){d.showPage.noZoom();auto_player.resetTimer();d.changePage();d.endFlip(a);d.isFlipping=false},20)}},20)};this.showPage.isFit()?f():this.showPage.animateBack(f)}};
initZoomBook.prototype.changePage=function(){var a=null;0<this.diffPageCount?(a=this.showPage,this.showPage=this.nextPage,this.nextPage=this.prePage):(a=this.nextPage,this.nextPage=this.showPage,this.showPage=this.prePage);this.prePage=a};
initZoomBook.prototype.endFlip=function(a){this.currentIndex=a;this.fillNear(a);setCurrentIndexTextField(this.currentIndex,!1);window.location.hash="#p="+this.currentIndex;thumbnail.clearHighLight();thumbnail.setHighLight(this.currentIndex);this.prePage.translate(-(windowWidth-this.width)/2-this.width-10,0);this.nextPage.translate((windowWidth-this.width)/2+this.width+10,0)};initZoomBook.prototype.setVisible=function(a){this.bookContainer.css({display:a?"block":"none"});isTouch||this.controlBar.setVisible(a)};
initZoomBook.prototype.setPosition=function(a,b){this.book.css({left:a+"px",top:b+"px"})};initZoomBook.prototype.fillNear=function(a){1<a&&this.prePage.fillContent(a-1);this.showPage.fillContent(a);a<originTotalPageCount&&this.nextPage.fillContent(a+1)};initZoomBook.prototype.initEvent=function(){this.bookContainer.hammer().on("tap",function(){toolBar.visible?toolBar.hide():toolBar.show()})};
initZoomBook.prototype.initMouseEvt=function(){var a=this,b=Point(0,0),c=!1,d=null;this.book.bind(_event._down,function(e){c=!0;b.x=e.pageX;b.y=e.pageY;d={x:a.book.offset().left,y:a.book.offset().top};return!1});this.book.bind(_event._end,function(){c=!1});this.book.bind(_event._move,function(e){c&&bookType==BookType.zoom_book&&a.book.css({left:e.pageX-b.x+d.x+"px",top:e.pageY-b.y+d.y+"px"})});this.book.bind("mouseleave",function(){c=!1})};
initZoomBook.prototype.initTouchEvt=function(){var a=this,b=Point(0,0),c=Point(0,0),d=!1,e=!1,f=null,h;this.book.bind(_event._down,function(h){h=h.originalEvent.touches;1==h.length?(d=!0,e=!1,b.x=h[0].pageX,b.y=h[0].pageY,f={x:a.book.offset().left,y:a.book.offset().top}):2==h.length&&(a.showPage.hideMM(),e=!0,d=!1,b.x=h[0].pageX,b.y=h[0].pageY,c.x=h[1].pageX,c.y=h[1].pageY,f={x:h[0].pageX,y:h[0].pageY,left:0,top:0,width:a.book.width(),height:a.book.height()},a.prePage.setVisible(!1),a.nextPage.setVisible(!1))});
this.book.bind(_event._end,function(){e=d=!1;a.prePage.setVisible(!0);a.nextPage.setVisible(!0);a.showPage.showMM()});this.book.bind(_event._move,function(j){j=j.originalEvent.touches;if(d)a.book.css({left:j[0].pageX-b.x+f.x+"px",top:j[0].pageY-b.y+f.y+"px"});else if(e){var k=Point(j[0].pageX,j[0].pageY),l=Point(j[1].pageX,j[1].pageY),j=Math.sqrt(Math.pow(c.x-b.x,2)+Math.pow(c.y-b.y,2)),k=Math.sqrt(Math.pow(l.x-k.x,2)+Math.pow(l.y-k.y,2));h=Math.max((f.width+2*(k-j))/f.width,1);a.showPage.sideImg.css({"-webkit-transform-origin":b.x+
"px "+b.y+"px","-webkit-transform":"scale("+h+")"})}return!1})};initZoomBook.prototype.zoom=function(a){this.showPage.zoom(a)};initZoomBook.prototype.noZoom=function(){this.showPage.noZoom()};initZoomBook.prototype.getLeft=function(){return this.book.offset().left};initZoomBook.prototype.getTop=function(){return this.book.offset().top};
initZoomBook.prototype.show=function(){this.setVisible(!0);this.prePage.showPage();this.nextPage.showPage();this.showPage.hidePage();var a=this;window.setTimeout(function(){a.showPage.showPage()},500)};initZoomBook.prototype.hide=function(){this.setVisible(!1)};var setBackGround=function(){var a=gradientColorA,b=gradientColorB,c=gradientColorAngle,d=$("<img />"),e=backGroundImgURL,f="0% 0%,100% 0%";switch(c){case 45:f="0% 0%,100% 100%";break;case 90:f="0% 0%,0% 100%";break;case 135:f="100% 0%,0% 100%";break;case 180:f="100% 0%,0% 0%";case 0:f="0% 0%,100% 0%"}1==browserType?bookContainer.css("background-image","-webkit-gradient(linear,"+f+",from("+a+"),to("+b+"))"):2==browserType?bookContainer.css("background-image","-moz-linear-gradient(left "+c+"deg,"+
a+","+b+")"):3==browserType&&bookContainer.css("filter","progid:DXImageTransform.Microsoft.Gradient(GradientType=1, EndColorStr="+b+", StartColorStr="+a+");");if(""!=e&&"undefined"!=e){var h=new Image;h.src=e;h.onload=function(){h.complete&&(d.attr("src",e),bookContainer.append(d),d.css("z-index",0),d.width(windowWidth),d.height(windowHeight))}}$.fn.extend(bookContainer,{resizeBackGroundImg:function(){d.width(windowWidth);d.height(windowHeight)}})},initBackground=function(a,b,c,d,e,f,h){var j=$("<div></div>"),
k=$("<div></div>"),l=$("<img />"),r=e,m=f,p=function(a,b,c){var d=c*Math.PI/180,c=Math.abs(b*Math.sin(d))+Math.abs(a*Math.cos(d)),a=Math.abs(b*Math.cos(d))+Math.abs(a*Math.sin(d));return Point(c,a)},d=d%360;j.css({position:"absolute",left:"0px",top:"0px",width:r+"px",height:m+"px","z-index":-1});k.css({position:"absolute","z-index":0});1==browserType?k.css({"background-image":"-webkit-linear-gradient("+d+"deg, "+b+", "+c+")",width:r+"px",height:m+"px"}):2==browserType?k.css({"background-image":"-moz-linear-gradient("+
d+"deg, "+b+", "+c+")",width:r+"px",height:m+"px"}):4==browserType?k.css({"background-image":"-o-linear-gradient("+d+"deg, "+b+", "+c+")",width:r+"px",height:m+"px"}):3==browserType?(p(r,m,d),k.css({filter:"progid:DXImageTransform.Microsoft.Gradient(GradientType=1, EndColorStr="+c+", StartColorStr="+b+");",width:r+"px",height:m+"px"})):k.css({"background-image":"linear-gradient("+d+"deg, "+b+", "+c+")",width:r+"px",height:m+"px"});void 0!=h&&""!=h&&(l.attr({src:h}),l.load(function(){j.append(l);l.css({width:r+
"px",height:m+"px",position:"absolute","z-index":1})}));a.append(j);j.append(k);this.onResize=function(a,e){r=a;m=e;j.css({width:a+"px",height:e+"px"});l.css({width:a+"px",height:e+"px"});if(browserType==3){p(a,e,d);k.css({filter:"progid:DXImageTransform.Microsoft.Gradient(GradientType=1, EndColorStr="+c+", StartColorStr="+b+");",width:a+"px",height:e+"px"})}else k.css({width:a+"px",height:e+"px"})}};function autoFlip(){this.autoPlay=getBool("autoPlayAutoStart",!1)&&getBool("AutoPlayButtonVisible",!0);this.Duration=getInt("autoPlayDuration",3);this.loopCount=getInt("autoPlayLoopCount",1);this.loopNum=0;this.autoPlay?this.startTimer():this.timer=-1}autoFlip.prototype.startTimer=function(){var a=this;this.timer=window.setInterval(function(){a.onTimer()},1E3*this.Duration)};autoFlip.prototype.stopTimer=function(){-1!==this.timer&&(window.clearInterval(this.timer),this.timer=-1)};
autoFlip.prototype.resetTimer=function(){this.isPlaying()&&(this.stopTimer(),this.startTimer())};
autoFlip.prototype.onTimer=function(){0==bookType&&flipBook.currentPageIndex==totalPageCount||1==bookType&&$(singlePageBook).data().currentPageIndex==originTotalPageCount||2==bookType&&zoomBook.currentIndex==originTotalPageCount?(this.loopNum++,-1==this.loopCount||this.loopCount>this.loopNum?firstPageFun():(this.stop(),$("#autoPlayImg").attr("src",uiBaseURL+"autoPlay.png"),$("#autoPlay").attr("title","Stop Auto Play"))):nextPageFun()};autoFlip.prototype.start=function(){this.autoPlay=!0;this.startTimer()};
autoFlip.prototype.stop=function(){this.autoPlay=!1;this.stopTimer()};autoFlip.prototype.isPlaying=function(){return this.autoPlay};var buttonType=function(){};buttonType.caption_button=0;buttonType.icon_button=1;buttonType.double_button=2;var buttonAlign=function(){};buttonAlign.icon_left=0;buttonAlign.icon_top=1;buttonAlign.icon_right=2;buttonAlign.icon_bottom=3;
function button(a,b,c,d,e){this.background=$("<div></div>");this.caption="button1";this.iconURL="";this.mainColor="#888888";this.height=this.width=40;this.buttonType=a;this.config=c;this.iconBox=$("<img />");this.needResize=e;this.asImgButton=d;this.create();$(b).append(this.background);$(this.background).asButton()}
button.prototype.create=function(){var a=this;this.background.css({position:"absolute",width:this.width+"px",height:this.height+"px","-webkit-border-radius":"2px","-moz-border-radius":"2px","border-radius":"2px",cursor:"pointer"});void 0!=this.config.mainColor&&(this.mainColor=this.config.mainColor,this.background.css({"background-color":this.config.mainColor}));this.buttonType!=buttonType.icon_button&&(this.caption=this.config.caption,this.captionBox=new label(this.caption,this.background),this.setPosition());
if(this.buttonType!=buttonType.caption_button){this.iconURL=this.config.iconURL;var b=new Image;b.src=this.iconURL;b.onload=function(){if(b.complete==true){$(a.iconBox).attr("src",a.iconURL);a.background.append(a.iconBox);a.setPosition();a.asImgButton&&$(a.iconBox).asImageButton()}}}};
button.prototype.setPosition=function(){if(this.buttonType==buttonType.double_button){var a=this.captionBox.getWidth(),b=this.captionBox.getHeight(),c=this.iconBox.width(),d=this.iconBox.height();switch(this.config.align){case buttonAlign.icon_left:this.width=a+c+12;this.height=Math.max(d,b)+6;$(this.iconBox).css({top:(this.height-d)/2+"px",left:"4px"});$(this.captionBox).css({top:(this.height-b)/2+"px",right:"4px"});break;case buttonAlign.icon_top:this.width=Math.max(c,a)+6;this.height=b+d+8;$(this.iconBox).css({top:"2px",
left:(this.width-c)/2+"px"});$(this.captionBox).css({bottom:"2px",left:(this.width-a)/2+"px"});break;case buttonAlign.icon_right:this.width=a+c+12;this.height=Math.max(d,b)+6;$(this.iconBox).css({top:(this.height-d)/2+"px",right:"4px"});$(this.captionBox).css({top:(this.height-b)/2+"px",left:"4px"});break;case buttonAlign.icon_bottom:this.width=Math.max(c,a)+6,this.height=b+d+8,$(this.iconBox).css({bottom:"2px",left:(this.width-c)/2+"px"}),$(this.captionBox).css({top:"2px",left:(this.width-a)/2+"px"})}}else this.buttonType==
buttonType.caption_button?(this.width=this.captionBox.getWidth()+10,this.height=this.captionBox.getHeight()+10,this.captionBox.setLabelPosition(5,2)):this.buttonType==buttonType.icon_button&&(this.width=$(this.iconBox).width(),this.height=$(this.iconBox).height(),$(this.iconBox).css({top:"0px",left:"0px"}));if(this.needResize)this.onResize(40,50);else $(this.background).css({width:this.width+"px",height:this.height+"px"})};
button.prototype.onResize=function(a,b){$(this.background).css({width:a+"px",height:b+"px"});$(this.iconBox).css({position:"absolute",top:"10px",left:"3px"})};button.prototype.getWidth=function(){return this.width};button.prototype.getHeight=function(){return this.height};button.prototype.setCSS=function(a){$(this.background).css(a)};button.prototype.setButtonPosition=function(a,b,c){void 0==c&&(c=["left","top"]);this.background.css(c[0],a+"px");this.background.css(c[1],b+"px")};
button.prototype.setVisible=function(a){$(this.background).css({display:a?"block":"none"})};button.prototype.changeIcon=function(a){this.iconURL=a;var b=new Image,c=this;b.src=this.iconURL;b.onload=function(){!0==b.complete&&$(c.iconBox).attr("src",c.iconURL)};this.setPosition()};button.prototype.setColor=function(a){this.mainColor=a;$(this.background).css({"background-color":this.mainColor})};button.prototype.onMouseDown=function(a,b){this.background.bind(_event._down,function(c){b.call(a,c);return!1})};
button.prototype.onMouseUp=function(a,b){3==browserType?this.background.bind("click",function(c){b.call(a,c);return!1}):this.background.bind(_event._end,function(){b.call(a);return!1})};button.prototype.onMouseOver=function(a,b){this.background.bind(_event._move,function(){b.call(a);return!1})};button.prototype.onMouseOut=function(){};button.prototype.onMouseLeave=function(){};button.prototype.onMouseMove=function(){};button.prototype.remove=function(){this.background.remove()};var demoBar,initDemoBar=function(){var a=homePage;demoBar=$("<div></div>");demoBar.css({width:"305px",height:"70px",position:"absolute","background-color":"#cccccc",opacity:0.5,"z-index":10,"-moz-border-radius":"5px","-webkit-border-radius":"5px","border-radius":"5px"});var b=$("<img />");b.css({position:"absolute",top:"10px",left:"5px"});var c=$("<div></div>");c.css({position:"absolute",top:"13px",left:"65px"});var d=$("<span>"+productName+"</span>"),a=$("<a href='"+a+"' target='_blank'>"+a+"</a>");
a.css({position:"absolute",top:"25px",left:"0px"});d.css({"font-size":"15px",color:"#333333"});tmpContainer.append(demoBar);demoBar.append(c);c.append(d);c.append(a);$.fn.extend(demoBar,{setDemoPosition:function(){demoBar.css({top:(windowHeight-70)/2+"px",left:(windowWidth-305)/2+"px"})},loadImg:function(){b.load(function(){demoBar.append(b)});b.attr({src:uiBaseURL+"demo.png"})}});demoBar.loadImg();demoBar.setDemoPosition()};function initLeftOrRightButton(a,b){this.buttonBar=$("<div></div>");this.buttonIcon=$("<img />");this.buttonBackColor;this.height=this.width=0;this.buttonBar.css({position:"absolute",left:b?"0px":"auto",right:b?"auto":"0px"});a.append(this.buttonBar);this.buttonBar.append(this.buttonIcon);var c=this;this.buttonIcon.attr("src",b?uiBaseURL+"previous_normal.png":uiBaseURL+"next_normal.png");this.buttonIcon.load(function(){0==userConfig.shortcutButtonWidth&&0==userConfig.shortcutButtonHeight?(c.width=
this.width,c.height=this.height):0==userConfig.shortcutButtonWidth?(c.width=this.width*userConfig.shortcutButtonHeight/this.height,c.height=userConfig.shortcutButtonHeight):0==userConfig.shortcutButtonHeight?(c.width=userConfig.shortcutButtonWidth,c.height=this.height*userConfig.shortcutButtonWidth/this.width):(c.width=userConfig.shortcutButtonWidth,c.height=userConfig.shortcutButtonHeight);c.buttonBar.css({width:c.width+"px",height:c.height+"px",top:(windowHeight-c.height)/2+"px"});c.buttonIcon.css({width:c.width+
"px",height:c.height+"px"})});this.buttonIcon.asImageButton();this.buttonBar.bind(_event._end,function(){b?previousPageFun():nextPageFun()});this.buttonBar.bind(_event._down,function(){3==browserType?event.cancelBubble=!0:event.stopPropagation();event.preventDefault()})}initLeftOrRightButton.prototype.onResize=function(a,b){this.buttonBar.css({width:a+"px",height:b+"px"});this.buttonIcon.css({width:a+"px",height:b+"px"});this.width=a;this.height=b;this.setPosition()};
initLeftOrRightButton.prototype.setPosition=function(){this.buttonBar.css({top:(windowHeight-this.height)/2+"px"})};
function initLeftButton(a){this.buttonBar=$("<div></div>");this.buttonIcon=null;this.buttonBackColor;this.height=this.width=50;this.init();0==userConfig.shortcutButtonWidth&&0==userConfig.shortcutButtonHeight?(this.width=this.width,this.height=this.height):0==userConfig.shortcutButtonWidth?(this.width=this.width*userConfig.shortcutButtonHeight/this.height,this.height=userConfig.shortcutButtonHeight):0==userConfig.shortcutButtonHeight?(this.width=userConfig.shortcutButtonWidth,this.height=this.height*
userConfig.shortcutButtonWidth/this.width):(this.width=userConfig.shortcutButtonWidth,this.height=userConfig.shortcutButtonHeight);a.append(this.buttonBar);this.buttonBar.append(this.buttonIcon);this.buttonBar.css({width:this.width+"px",height:this.height+"px",top:(windowHeight-this.height)/2+"px"});this.buttonIcon.css({width:this.width+"px",height:this.height+"px"});this.buttonIcon.asImageButton();this.buttonBar.bind(_event._down,function(){browserType==3?event.cancelBubble=true:event.stopPropagation();
event.preventDefault()})}initLeftButton.prototype.init=function(){this.buttonIcon=$(getImage(toolBarIconsURL[17]));this.width=this.buttonIcon[0].width;this.height=this.buttonIcon[0].height;this.buttonBar.css({position:"absolute",left:-this.width-10+"px",right:"auto"});this.buttonBar.bind(_event._end,function(){rightToLeft?nextPageFun():previousPageFun()})};
initLeftButton.prototype.onResize=function(a,b){this.buttonBar.css({width:a+"px",height:b+"px"});this.buttonIcon.css({width:a+"px",height:b+"px"});this.width=a;this.height=b;this.setPosition()};initLeftButton.prototype.setPosition=function(){this.buttonBar.css({top:(windowHeight-this.height)/2+"px"})};initLeftButton.prototype.show=function(){this.buttonBar.animate({left:0},500)};function initRightButton(a){initLeftButton.call(this,a)}$.extend(initRightButton.prototype,initLeftButton.prototype);
initRightButton.prototype.init=function(){this.buttonIcon=$(getImage(toolBarIconsURL[19]));this.width=this.buttonIcon[0].width;this.height=this.buttonIcon[0].height;this.buttonBar.css({position:"absolute",right:-this.width-10+"px",left:"auto"});this.buttonBar.bind(_event._end,function(){rightToLeft?previousPageFun():nextPageFun()})};initRightButton.prototype.show=function(){this.buttonBar.animate({right:0},500)};function bookShadow(a,b,c){this.backgroun=$("<div></div>");this.width=a;this.height=b;$(this.backgroun).css({position:"absolute",width:this.width+"px",height:this.height+"px","-webkit-box-shadow":"0 0 15px rgba(40, 0, 0, 0.7)"});$(c).append(this.backgroun)}bookShadow.prototype.onResize=function(a,b,c){this.width=c?2*a:a;this.height=b;$(this.backgroun).css({width:this.width+"px",height:this.height+"px"})};bookShadow.prototype.setPosition=function(a,b){$(this.backgroun).css({top:b+"px",left:a+"px"})};
bookShadow.prototype.showShadow=function(){$(this.backgroun).css({"-webkit-box-shadow":"0 0 15px rgba(40, 0, 0, 0.7)"})};bookShadow.prototype.hideShadow=function(){$(this.backgroun).css({"-webkit-box-shadow":"0 0 15px rgba(40, 0, 0, 0)"})};function searchElement(a,b,c){var d=$("<div style='position: absolute'></div>"),e=getString("searchColor","#ffff00"),f=getInt("searchAlpha",0.3);d.css({top:a.top*c+"px",left:a.left*b+"px",width:b*a.width+"px",height:c*a.height+"px","background-color":e,opacity:f});$.fn.extend(d,{onResize:function(b,c){d.css({top:a.top*c+"px",left:a.left*b+"px",width:b*a.width+"px",height:c*a.height+"px"})}});return d};function searchItem(a,b,c,d){this.width=d;this.height=85;this.background=$("<div></div>");this.textField=new label(b,this.background);this.mainColor="#888888";this.pageIndex=a;$(this.background).css({"background-color":this.mainColor,width:this.width+"px",height:this.height+"px",position:"absolute",border:"1px solid #555555",overflow:"hidden",cursor:"pointer"});this.textField.onResize(this.Width-20,this.height-16);this.textField.setLabelPosition(10,8);this.isMouseMove=!1;this.downPoint=Point(0,0);
var e=this;$(c).append(this.background);$(this.background).bind(_event._end,function(){isSearchDrag||gotoPageFun(e.pageIndex)});this.textField.setCaption("P."+a+": "+this.cutText(b,searchWord));this.textField.riseAWord(searchWord);this.textField.setFont("13.5px","#111111",null)}searchItem.prototype.onResize=function(a,b){this.width=a;this.height=b;$(this.background).css({width:a+"px",height:b+"px"});this.textField.onResize(a-20,b-16)};
searchItem.prototype.setPosition=function(a,b){$(this.background).css({top:b+"px",left:a+"px"})};searchItem.prototype.getWidth=function(){return this.width};searchItem.prototype.getHeight=function(){return this.height};
searchItem.prototype.cutText=function(a,b){if(120>a.length||""==b)return a;var c=a.length,d=a.toLowerCase().indexOf(b.toLowerCase()),e;60<=d?(e=Math.max(60<=c-d?d-60:c-120,0),e=".."+a.substring(e,d)):e=a.substring(0,d);c=60<c-d?a.substring(d,60<=d?d+60:120)+"..":a.substring(d,c);return e+c};function form(a,b){this.height=this.width=300;this.mainColor="#888888";$(this).data();this.background=$('<div style="position:absolute; width:300px; height:300px;"></div>');this.formConfig=$.extend({width:this.width,height:this.height,mainColor:this.mainColor},a);this.create();$(b).append(this.background);this.visible=!1}
form.prototype.create=function(){$(this).data();var a=this,b=colorDiv(this.formConfig.mainColor,50);this.titleBox=$('<div style="position:absolute; width:300px; height:300px;"></div>');this.contentBox=$('<div style="position:absolute; width:300px; height:300px;"></div>');this.background.append(this.titleBox);this.background.append(this.contentBox);this.background.css({"background-color":this.formConfig.mainColor,"-webkit-border-radius":"5px","-moz-border-radius":"5px","border-radius":"5px",width:this.formConfig.width+
"px",height:this.formConfig.height+"px","-webkit-box-shadow":"0 0 5px rgba(40, 0, 0, 0.5)"});this.titleBox.css({"background-color":b,"-webkit-border-radius":"5px","-moz-border-radius":"5px","border-radius":"5px",width:this.formConfig.width+"px",height:"35px"});this.contentBox.css({top:"35px",left:"0px",width:this.formConfig.width+"px",height:this.formConfig.height-35+"px"});this.initTitleBox();this.drapable=!1;this.formPositionY=this.formPositionX=this.mouseDownPointY=this.mouseDownPointX=0;$(this.titleBox).bind(_event._down,
function(b){var d=a.titleBox[0];d.setCapture?d.setCapture():window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);b=isTouch?b.originalEvent.touches:[b];a.drapable=!0;a.mouseDownPointX=b[0].pageX;a.mouseDownPointY=b[0].pageY;a.formPositionX=$(a.titleBox).offset().left;a.formPositionY=$(a.titleBox).offset().top;return!1});$(this.titleBox).bind(_event._end,function(){var b=a.titleBox[0];b.releaseCapture?b.releaseCapture():window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);return a.drapable=!1});$(this.titleBox).bind(_event._move,
function(b){b=isTouch?b.originalEvent.touches:[b];if(a.drapable){var d=b[0].pageX-a.mouseDownPointX,b=b[0].pageY-a.mouseDownPointY;$(a.background).css({left:a.formPositionX+d+"px",top:a.formPositionY+b+"px"})}return!1});$(this.titleBox).bind("mouseleave",function(){return a.drapable=!1});$(this.background).bind(_event._down,function(){3==browserType?event.cancelBubble=!0:event.stopPropagation()});$(this.background).bind(_event._move,function(){});$(this.background).bind(_event._end,function(){})};
form.prototype.initTitleBox=function(){$(this).data();this.captionBox=new label(this.formConfig.caption,this.titleBox);this.closeButton=new button(1,this.titleBox,{iconURL:this.formConfig.closeIconURL},!0);this.captionBox.setLabelPosition(5,(30-this.captionBox.getHeight())/2);this.closeButton.setButtonPosition(35,3,["right","top"]);this.closeButton.onMouseUp(this,this.closeForm)};form.prototype.getWidth=function(){return this.width};
form.prototype.setWidth=function(a){$(this).data();this.width=a;100>a&&(this.width=100);this.background.css({width:this.width+"px"});this.contentBox.css({width:this.width+"px"});this.titleBox.css({width:this.width+"px"})};form.prototype.getHeight=function(){return this.height};form.prototype.setHeight=function(a){$(this).data();this.height=a;100>=a&&(this.height=100);this.background.css({height:this.height+"px"});this.contentBox.css({height:this.height-this.titleBox.height()+"px"})};
form.prototype.onResize=function(a,b){this.setWidth(a);this.setHeight(b)};form.prototype.setColor=function(){};form.prototype.closeForm=function(){$(this.background).css({display:"none"})};var searchWord="",searchPageArr=[],isSearchDrag=!1;
function searchForm(a,b){form.call(this,a,b);this.textField=$('<input id="search_text_textField" style="position : absolute" type="text" size="13">');this.searchButton=new button(1,this.contentBox,{iconURL:uiBaseURL+"searchButton.png"});this.textField.css({top:"9px",left:"5px",width:"160px"});this.searchButton.setButtonPosition(190,5);this.searchItemsBox=$("<div></div>");this.searchScrollBox=$("<div></div>");this.lblSearchTotalItem=new label(" ",this.contentBox);this.lblSearchTotalItem.setFont("14px",
"#000000",null);this.itemArr=[];this.contentBox.append(this.textField);this.contentBox.append(this.searchScrollBox);void 0==window.textForPages&&(window.textForPages=[]);this.searchScrollBox.css({position:"absolute",width:this.width-10+"px",height:this.height-95+"px","overflow-y":"auto",top:"55px",left:"5px"});this.lblSearchTotalItem.setLabelPosition(15,34);this.background.css({top:"0px",left:-(windowWidth/2+20)+"px","z-index":100,opacity:0.95});this.initEvent();this.captionBox.setFont("15px","#f0f0f0",
null);this.captionBox.setCaption("<strong>Search</strong>");this.mouseDownY=-1;this.scrollMouseDown=!1}$.extend(searchForm.prototype,form.prototype);
$.extend(searchForm.prototype,{initEvent:function(){this.titleBox.unbind(_event._down);this.titleBox.unbind(_event._move);this.titleBox.unbind(_event._end);var a=this;this.searchButton.onMouseUp(this,this.searchStart);this.textField.bind("keydown",function(b){13==b.keyCode&&a.searchStart()});this.contentBox.bind(_event._down,function(b){a.scrollMouseDown=!0;isSearchDrag=!1;b=isTouch?b.originalEvent.touches:[b];a.mouseDownY=b[0].pageY});this.contentBox.bind(_event._move,function(b){a.scrollMouseDown&&
(b=isTouch?b.originalEvent.touches:[b],20<Math.abs(a.mouseDownY-b[0].pageY)&&(isSearchDrag=!0))});this.contentBox.bind(_event._end,function(){a.scrollMouseDown=!1})},addItems:function(a){this.itemArr=[];searchPageArr=[];for(var b=0;b<a.length;b++){var c=a[b],d=new searchItem(c.search_page,c.search_text,this.searchScrollBox,this.width-40);this.itemArr.push(d);searchPageArr.push(c.search_page);d.setPosition(11,b*d.getHeight()+2)}},onScrollBoxResize:function(a,b){this.searchScrollBox.css({width:a+"px",
height:b+"px"})},clearItems:function(){this.searchScrollBox.empty();searchWord="";this.lblSearchTotalItem.setCaption("");this.textField.val("")},searchStart:function(){this.searchScrollBox.empty();var a=this.textField.val();searchWord=a;a=searchFromPages(textForPages,a);this.addItems(a);this.lblSearchTotalItem.setCaption("Searched "+a.length+" items")},closeForm:function(){if(this.isSearchShow){var a=this;this.background.animate({left:-windowWidth/2-20},400,function(){a.clearItems();a.itemArr=[];
a.isSearchShow=!1})}},showForm:function(){var a=this;this.background.animate({left:0},400,function(){a.textField.focus();a.isSearchShow=!0})},onResizeA:function(a,b){this.width=100>a?100:a;this.height=100>b?100:b;this.background.css({width:this.width+"px",height:this.height+"px"});this.titleBox.css({width:this.width+"px"});this.contentBox.css({width:this.width+"px",height:this.height-$(this.titleBox).height()+"px"});this.searchItemsBox.css({width:this.width-10+"px",height:this.height-95+"px"});this.searchScrollBox.css({width:this.width-
10+"px",height:this.height-95+"px"})},onResize:function(a,b){this.width=100>a?100:a;this.height=100>b?100:b;this.background.css({width:this.width+"px",height:this.height+"px",left:(this.isSearchShow?0:-this.width-20)+"px"});this.titleBox.css({width:this.width+"px"});this.contentBox.css({width:this.width+"px",height:this.height-$(this.titleBox).height()+"px"});this.searchItemsBox.css({width:this.width-10+"px",height:this.height-95+"px"});this.searchScrollBox.css({width:this.width-10+"px",height:this.height-
95+"px"});this.textField.css({width:this.width-90+"px"});this.searchButton.setButtonPosition(this.width-73,5);for(var c=0;c<this.itemArr.length;c++)this.itemArr[c].onResize(this.width-10,85)},correctPosition:function(a){this.background.offset().left+290>a&&this.background.css({left:a-320+"px"})},isSearchShow:!1});function shareButton(a,b){this.config=$.extend({iconURL:"",caption:"",link:""},b);this.bg=$("<div></div>");this.icon=$("<img />");this.caption=new label(this.config.caption,this.bg);this.width=200;this.height=40;this.bg.css({position:"absolute",width:this.width+"px",height:this.height+"px","-webkit-border-radius":"6px","-moz-border-radius":"6px","-o-border-radius":"6px","-ms-border-radius":"6px","border-radius":"6px","background-color":"#666666"});this.icon.attr({src:this.config.iconURL});this.icon.css({position:"absolute",
left:"5px",top:"-7px"});a.append(this.bg);this.bg.append(this.icon);this.caption.setLabelPosition(40,10);this.initEvent()}shareButton.prototype.onResize=function(a,b){this.bg.css({width:a+"px",height:b+"px"})};shareButton.prototype.initEvent=function(){this.bg.css({cursor:"pointer"});var a=this;this.bg.bind(_event._down,function(){window.open(a.config.link,"_blank")})};shareButton.prototype.setPosition=function(a,b){this.bg.css({left:a+"px",top:b+"px"})};function shareForm(a,b){form.call(this,a,b);this.visible=!1;this.addItem();this.setButtonPos();this.background.css({left:-windowWidth/2-20+"px",overflow:"hidden"})}$.extend(shareForm.prototype,form.prototype);
shareForm.prototype.addItem=function(){var a=window.location.href,b=window.document.title,c=window.location.pathname,c=c.substring(0,c.lastIndexOf("/"))+"/files/thumb/1.jpg",a="?&url="+a+"&title="+b+"&description="+bookDescription+"&screenshot="+c,b={iconURL:uiBaseURL+"facebook.png",caption:"Facebook",link:"http://api.addthis.com/oexchange/0.8/forward/facebook/offer"+a},c={iconURL:uiBaseURL+"google.png",caption:"Google+",link:"http://api.addthis.com/oexchange/0.8/forward/igoogle/offer"+a},d={iconURL:uiBaseURL+
"myspace.png",caption:"MySpace",link:"http://api.addthis.com/oexchange/0.8/forward/myspace/offer"+a},e={iconURL:uiBaseURL+"twitter.png",caption:"Twitter",link:"http://api.addthis.com/oexchange/0.8/forward/twitter/offer"+a},f={iconURL:uiBaseURL+"digg.png",caption:"Digg",link:"http://api.addthis.com/oexchange/0.8/forward/digg/offer"+a},h={iconURL:uiBaseURL+"more.png",caption:"More",link:"http://api.addthis.com/oexchange/0.8/offer"+a};this.emailButton=new shareButton(this.contentBox,{iconURL:uiBaseURL+
"email.png",caption:"Email",link:"http://api.addthis.com/oexchange/0.8/forward/email/offer"+a});this.fbButton=new shareButton(this.contentBox,b);this.ggButton=new shareButton(this.contentBox,c);this.msButton=new shareButton(this.contentBox,d);this.twButton=new shareButton(this.contentBox,e);this.diggButton=new shareButton(this.contentBox,f);this.moreButton=new shareButton(this.contentBox,h)};
shareForm.prototype.onResize=function(a,b){this.width=100>a?100:a;this.height=100>b?100:b;this.background.css({width:this.width+"px",height:this.height+"px",left:this.visible?"0px":-this.width-20+"px"});this.titleBox.css({width:this.width+"px"});this.contentBox.css({width:this.width+"px",height:this.height-this.titleBox.height()+"px"});this.emailButton.onResize(this.width/2-20,40);this.fbButton.onResize(this.width/2-20,40);this.ggButton.onResize(this.width/2-20,40);this.msButton.onResize(this.width/
2-20,40);this.twButton.onResize(this.width/2-20,40);this.diggButton.onResize(this.width/2-20,40);this.moreButton.onResize(this.width/2-20,40);this.setButtonPos()};shareForm.prototype.setButtonPos=function(){this.emailButton.setPosition(5,10);this.fbButton.setPosition(this.width/2,10);this.ggButton.setPosition(5,68);this.msButton.setPosition(this.width/2,68);this.twButton.setPosition(5,126);this.diggButton.setPosition(this.width/2,126);this.moreButton.setPosition(5,184)};
shareForm.prototype.show=function(){var a=this;this.background.animate({left:0},400,function(){a.visible=!0;window.setTimeout(function(){a.background.css({left:"0px"})},100)})};shareForm.prototype.hide=function(){var a=this;this.background.animate({left:-(this.width+20)},400,function(){a.visible=!1;window.setTimeout(function(){a.background.css({left:-(this.width+20)+"px"})},100)})};shareForm.prototype.closeForm=function(){this.hide()};function treeNode(a,b){this.config=$.extend({caption:"untitled",page:0,width:280,height:40,backColor:"#888888",level:0},a);var c=this;this.background=$('<div style="position:relative; overflow : hidden;"></div>');this.contentBox=$('<div style="position:absolute;"></div>');this.textField=new label(this.config.caption,this.contentBox);this.expandButton=new button(1,this.contentBox,{iconURL:uiBaseURL+"closed.png"},!1,!0);this.children=[];this.opened=this.hasChild=!1;this.totalHeight=0;this.textField.shortWord(25);
this.isDrag=!1;this.expandButton.setVisible(!1);$(b).append(this.background);$(this.background).append(this.contentBox);this.expandButton.setButtonPosition(0,0);this.textField.setLabelPosition(38,10);$(this.contentBox).css({width:this.config.width-(12*(this.config.level-1)+30)+"px",height:this.config.height+"px",left:12*(this.config.level-1)+5+"px",cursor:"pointer"});$(this.background).css({width:this.config.width-25+"px",height:this.config.height+"px",left:"16px",top:"10px","background-color":this.config.backColor,
"border-left":"1px solid #555555","border-right":"1px solid #555555","border-bottom":"1px solid #555555"});this.expandButton.onMouseUp(this,this.onExpand);$(this.contentBox).bind(_event._end,function(){isBookmarkDrag||gotoPageFun(c.config.page);$(c.background).css({"background-color":c.config.backColor})});$(this.contentBox).bind(_event._down,function(){var a=colorDiv(c.config.backColor,60);$(c.background).css({"background-color":a})});$(this.contentBox).bind("mouseleave",function(){$(c.background).css({"background-color":c.config.backColor})})}
treeNode.prototype.setBorderTop=function(){$(this.background).css("border-top","1px solid #555555")};treeNode.prototype.setButtonVisible=function(a){this.expandButton.setVisible(a)};treeNode.prototype.setHasChildren=function(a){this.hasChild=a};treeNode.prototype.setVisible=function(a){$(this.background).css({display:a?"block":"none"})};treeNode.prototype.getIsExpand=function(){return this.opened};treeNode.prototype.setIsExpand=function(a){this.opened=a};treeNode.prototype.getBackground=function(){return this.background};
treeNode.prototype.getWidth=function(){return this.config.width};treeNode.prototype.getHeight=function(){return this.config.height};treeNode.prototype.setCaption=function(a){this.config.caption=a};treeNode.prototype.setColor=function(){};treeNode.prototype.setPosition=function(a,b,c){void 0==c&&(c=["left","top"]);$(this.background).css(c[0],a+"px");$(this.background).css(c[1],b+"px")};
treeNode.prototype.onResize=function(a,b){this.config.width=a;b&&(this.config.height=b);this.background.css({width:this.config.width+"px",height:this.config.height+"px"})};treeNode.prototype.getTotalHeight=function(){return this.totalHeight};treeNode.prototype.expand=function(){if(this.hasChild){this.expandButton.changeIcon(uiBaseURL+"opened.png");for(var a=0;a<this.children.length;a++)this.children[a].setVisible(!0),this.children[a].getIsExpand()&&this.children[a].expand()}};
treeNode.prototype.collapse=function(){if(this.hasChild){this.expandButton.changeIcon(uiBaseURL+"closed.png");for(var a=0;a<this.children.length;a++)this.children[a].setVisible(!1),this.children[a].collapse()}};treeNode.prototype.onExpand=function(){this.opened?this.collapse():this.expand();this.opened=!this.opened;$(this.background).css({"background-color":this.config.backColor})};treeNode.prototype.addChildren=function(a){this.children.push(a)};
treeNode.prototype.addNode=function(a){this.children.push(new treeNode(a,this.background))};treeNode.prototype.deleteNode=function(){};treeNode.prototype.getPageIndex=function(){return this.config.page};var isBookmarkDrag=!1;
function tableContent(a,b){form.call(this,a,b);this.scrollMask=$('<div style = "position : absolute;"></div>');this.scrollBox=$('<div style = "position : absolute; width : 290px; height : 300px; overflow-y : auto;"></div>');this.scrollMouseDown=!1;this.mouseDownY=-1;this.showing=!1;this.itemArr=[];$(this.contentBox).append(this.scrollMask);$(this.scrollMask).append(this.scrollBox);this.closeForm();this.captionBox.setFont("15px","#f0f0f0",null);this.captionBox.setCaption("<strong>Table of Content</strong>");this.initScrollEvent();
try{this.addContent(ols,!1)}catch(c){$("#btnBookmark").css({display:"none"}),bookmarkButtonEnable=!1}this.background.css({opacity:0.95,"z-index":99,top:"0px",left:-(windowWidth/2+20)+"px"});this.titleBox.unbind(_event._down);this.titleBox.unbind(_event._move);this.titleBox.unbind(_event._end)}$.extend(tableContent.prototype,form.prototype);
tableContent.prototype.addContent=function(a,b,c){for(var d=0;d<a.length;d++){var e=new treeNode(a[d],this.scrollBox);this.itemArr.push(e);!b&&0==d&&e.setBorderTop();b&&(c.addChildren(e),e.setVisible(!1));1<=a[d].children.length&&(e.setButtonVisible(!0),e.setHasChildren(!0),this.addContent(a[d].children,!0,e))}};
tableContent.prototype.onResize=function(a,b){this.width=100>a?100:a;this.height=100>b?100:b;this.showing||this.background.css({left:-(this.width+20)+"px"});this.background.css({width:this.width+"px",height:this.height+"px"});this.contentBox.css({width:this.width+"px",height:this.height-this.titleBox.height()+"px"});this.titleBox.css({width:this.width+"px"});$(this.scrollMask).css({width:this.width+"px",height:this.height-this.titleBox.height()+"px"});$(this.scrollBox).css({width:this.width+"px",
height:this.height-this.titleBox.height()-15+"px"});for(var c=0;c<this.itemArr.length;c++)this.itemArr[c].onResize(this.width-30)};tableContent.prototype.showForm=function(){var a=this;this.background.animate({left:0},400,function(){a.showing=!0})};tableContent.prototype.closeForm=function(){var a=this;this.background.animate({left:-windowWidth/2-20},400,function(){a.showing=!1})};tableContent.prototype.getShowStatu=function(){return this.showing};
tableContent.prototype.setShowStatu=function(a){this.showing=a};tableContent.prototype.setPosition=function(a,b,c){void 0==c&&(c=["left","top"]);$(this.background).css(c[0],a+"px");$(this.background).css(c[1],b+"px")};
tableContent.prototype.initScrollEvent=function(){var a=this;$(this.scrollBox).bind(_event._down,function(b){a.scrollMouseDown=!0;isBookmarkDrag=!1;b=isTouch?b.originalEvent.touches:[b];a.mouseDownY=b[0].pageY;3==browserType?event.cancelBubble=!0:event.stopPropagation()});$(this.scrollBox).bind(_event._move,function(b){a.scrollMouseDown&&(b=isTouch?b.originalEvent.touches:[b],20<Math.abs(a.mouseDownY-b[0].pageY)&&(isBookmarkDrag=!0))});$(this.scrollBox).bind(_event._end,function(){a.scrollMouseDown=
!1})};function loadToolBar(a,b){this.visible=!1;this.icons=b;this.toolBG=$("<div class='fbToolBar' id='fbToolBar'></div>");this.logoBar=$("<div id='logoBar' style='position: absolute;z-index: 2;'></div>");this.buttonBar=$("<div class='bottom right' style='position: absolute;left: auto;right: 0px;z-index: 3;'></div>");this.btnLast=$("<div title='Last Page' id='btnLast' class='numbering'></div>");this.btnNext=$("<div title='Next Page' id='btnRight' class='numbering'></div>");this.btnPrevious=$("<div title='Previous Page'  id='btnLeft' class='numbering'></div>");
this.edtPageNumber=$("<div class='numbering' id='tfPageIndex'><input type='text' id='currentPageIndexTextField' size='13' value='' style='text-align: center' /></div>");this.btnFirst=$("<div title='First Page' id='btnFirst' class='numbering' ></div>");this.btnZoom=$("<div title='Zoom In' id='btnZoom' class='numbering'></div>");this.btnAutoPlay=$("<div title='Auto Play' id='btnAutoPlay' class='numbering' ></div>");this.btnThumb=$("<div title='Thumbnails'  id='btnThumb' class='numbering'></div>");this.btnShare=
$("<div title='Share'  id='btnShare' class='numbering'></div>");this.btnSearch=$("<div title='Search' id='btnSearch' class='numbering'></div>");this.btnBookMark=$("<div title='Bookmark' id='btnBookmark' class='numbering'></div>");this.btnDownload=$("<div title='Download' id='btnDownload' class='numbering'></div>");this.btnSound=$("<div title='Sound On' id='btnSound' class='numbering'></div>");this.btnHome=$("<div title='Home' id='btnHome' class='numbering'></div>");a.append(this.toolBG);this.toolBG.append(this.logoBar);
this.toolBG.append(this.buttonBar);this.buttonBar.append(this.btnLast);this.buttonBar.append(this.btnNext);this.buttonBar.append(this.edtPageNumber);this.buttonBar.append(this.btnPrevious);this.buttonBar.append(this.btnFirst);this.buttonBar.append(this.btnZoom);this.buttonBar.append(this.btnAutoPlay);this.buttonBar.append(this.btnThumb);this.buttonBar.append(this.btnShare);this.buttonBar.append(this.btnSearch);this.buttonBar.append(this.btnBookMark);this.buttonBar.append(this.btnDownload);this.buttonBar.append(this.btnSound);
this.buttonBar.append(this.btnHome);rightToLeft&&(this.btnFirst.attr({title:"Last Page"}),this.btnLast.attr({title:"First Page"}),this.btnNext.attr({title:"Previous Page"}),this.btnPrevious.attr({title:"Next Page"}));this.toolBG.append(getImage(toolBarIconsURL[0]));this.btnLast.append(getImage(toolBarIconsURL[1])).asButton();this.btnNext.append(getImage(toolBarIconsURL[2])).asButton();this.btnPrevious.append(getImage(toolBarIconsURL[3])).asButton();this.btnFirst.append(getImage(toolBarIconsURL[4])).asButton();
this.btnZoom.append(getImage(toolBarIconsURL[5])).asButton();this.btnAutoPlay.append(getImage(toolBarIconsURL[7])).asButton();this.btnThumb.append(getImage(toolBarIconsURL[9])).asButton();this.btnShare.append(getImage(toolBarIconsURL[10])).asButton();this.btnSearch.append(getImage(toolBarIconsURL[11])).asButton();this.btnBookMark.append(getImage(toolBarIconsURL[14])).asButton();this.btnDownload.append(getImage(toolBarIconsURL[12])).asButton();this.btnHome.append(getImage(toolBarIconsURL[13])).asButton();
getBool("autoPlayAutoStart",!1)&&(this.btnAutoPlay.empty().append(getImage(toolBarIconsURL[8])),this.btnAutoPlay.attr("title","Stop Auto Play"));thumbnail=new thumbnailBar(tmpContainer);initShareBar();initLogoBar();userConfig.autoPlayButtonVisible||this.btnAutoPlay.css("display","none");zoomButtonEnable||this.btnZoom.css("display","none");thumbButtonEnable||this.btnThumb.css("display","none");shareButtonEnable||this.btnShare.css("display","none");searchButtonEnable||this.btnSearch.css("display","none");
bookmarkButtonEnable||this.btnBookMark.css("display","none");userConfig.downloadButtonVisible||this.btnDownload.css({display:"none"});userConfig.homeButtonVisible||this.btnHome.css({display:"none"});this.initEvent()}
loadToolBar.prototype.setButtonPosition=function(){var a=3;$(getImage(toolBarIconsURL[0])).css({width:windowWidth+"px",height:"42px"});this.btnLast.css({right:a+"px"});a+=45;this.btnNext.css({right:a+"px"});a+=45;this.edtPageNumber.css({right:a});a=a+this.edtPageNumber.width()+3;this.btnPrevious.css({right:a+"px"});a+=45;this.btnFirst.css({right:a+"px"});a+=45;zoomButtonEnable&&(this.btnZoom.css({top:"2px",right:a+"px"}),a+=45);userConfig.autoPlayButtonVisible&&(this.btnAutoPlay.css({top:"2px",right:a+
"px"}),a+=45);thumbButtonEnable&&(this.btnThumb.css({top:"2px",right:a+"px"}),a+=45);shareButtonEnable&&(this.btnShare.css({top:"2px",right:a+"px"}),a+=45,shareBar.setSharePosition(a-95,38));searchButtonEnable&&(this.btnSearch.css({top:"2px",right:a+"px"}),a+=45);bookmarkButtonEnable&&(this.btnBookMark.css({top:"2px",right:a+"px"}),a+=45);userConfig.downloadButtonVisible&&(this.btnDownload.css({top:"2px",right:a+"px"}),a+=45);userConfig.homeButtonVisible&&this.btnHome.css({top:"2px",right:a+"px"})};
loadToolBar.prototype.show=function(){var a=this;this.toolBG.animate({bottom:0,opacity:0.95},500,function(){a.visible=!0})};loadToolBar.prototype.getHeight=function(){return this.toolBG.height()};loadToolBar.prototype.hide=function(){var a=this;this.toolBG.animate({bottom:-50,opacity:0},300,function(){a.visible=!1})};
loadToolBar.prototype.initEvent=function(){var a=this;this.btnLast.bind(_event._end,function(){a.lastPage()});this.btnNext.bind(_event._end,function(){a.nextPage()});this.btnPrevious.bind(_event._end,function(){a.prePage()});this.btnFirst.bind(_event._end,function(){a.firstPage()});this.btnZoom.bind(_event._end,function(){2==bookType?(windowWidth<windowHeight?(changeShowBook(1),bookType=1,setCurrentIndexTextField($(singlePageBook).data().currentPageIndex),$(singlePageBook).data().gotoPage(zoomBook.currentIndex)):
(changeShowBook(0),bookType=0,setCurrentIndexTextField(flipBook.currentPageIndex,!0),flipBook.gotoPage(zoomBook.currentIndex)),thumbnail.clearHighLight(),thumbnail.setHighLight(zoomBook.currentIndex),a.btnZoom.empty().append(getImage(toolBarIconsURL[5])).attr("title","Zoom In")):(zoomBook.currentIndex=flipBook.currentPageIndex,zoomBook.showPage.fillContent(zoomBook.currentIndex),changeShowBook(2),bookType=2,a.btnZoom.empty().append(getImage(toolBarIconsURL[6])).attr("title","Zoom Out"),setCurrentIndexTextField(zoomBook.currentIndex,
!1),thumbnail.clearHighLight(),thumbnail.setHighLight(zoomBook.currentIndex))});this.btnAutoPlay.bind(_event._end,function(){auto_player.isPlaying()?(auto_player.stop(),a.btnAutoPlay.empty().append(getImage(toolBarIconsURL[7])).attr("title","Stop Auto Play")):(auto_player.start(),a.btnAutoPlay.empty().append(getImage(toolBarIconsURL[8])).attr("title","Auto Play"))});this.btnThumb.bind(_event._end,function(){thumbnail.getShowStatu()?thumbnail.hideBox():thumbnail.showshow()});this.btnShare.bind(_event._end,
function(){isShareShow?shareBar.hideShareBar():shareBar.showShareBar();isShareShow=!isShareShow;return!1});this.btnShare.bind(_event._down,function(){return!1});this.btnSearch.bind(_event._end,function(){frmSearch.isSearchShow?frmSearch.closeForm():frmSearch.showForm()});this.btnBookMark.bind(_event._end,function(){frmBookmark.getShowStatu()?frmBookmark.closeForm():frmBookmark.showForm()});this.btnDownload.bind(_event._end,function(){""!=userConfig.downloadURL&&window.open(userConfig.downloadURL,
"_Blank")});this.btnSound.bind(_event._end,function(){});this.btnHome.bind(_event._end,function(){if(void 0!=userConfig.homeURL&&""!=userConfig.homeURL){var a=userConfig.homeURL;"http"!=a.substr(0,4)&&(a="http://"+a);window.open(a,"_Blank")}});this.toolBG.bind(_event._down,function(){isShareShow&&(shareBar.hideShareBar(),isShareShow=!1)})};loadToolBar.prototype.lastPage=function(){rightToLeft?firstPageFun():lastPageFun()};loadToolBar.prototype.nextPage=function(){rightToLeft?previousPageFun():nextPageFun()};
loadToolBar.prototype.prePage=function(){rightToLeft?nextPageFun():previousPageFun()};loadToolBar.prototype.firstPage=function(){rightToLeft?lastPageFun():firstPageFun()};function thumbnailCell(a){this.background=$("<div></div>");this.img=$("<img />");this.pageIndex=-1;this.width=130;this.height=170;this.pageTextField=new label(1,this.background);this.imgHeight=this.imgWidth=-1;$(a).append(this.background);$(this.background).css({position:"absolute",width:this.width+"px",height:this.height+"px"});$(this.img).css({position:"absolute"});this.pageTextField.setFont("12px","#f0f0f0",null);this.pageTextField.setLabelPosition((this.width-this.pageTextField.getWidth())/2,
0,["left","bottom"])}thumbnailCell.prototype.getPageIndex=function(){return this.pageIndex};thumbnailCell.prototype.getWidth=function(){return this.width};thumbnailCell.prototype.getHeight=function(){return this.height};thumbnailCell.prototype.setPosition=function(a,b,c){void 0==c&&(c=["left","top"]);$(this.background).css(c[0],a+"px");$(this.background).css(c[1],b+"px")};thumbnailCell.prototype.onResize=function(a,b){$(this.background).css({width:a+"px",height:b+"px"});this.onResizeImage(a,b)};
thumbnailCell.prototype.onResizeImage=function(){var a=getPageWidthHeight(this.width,this.height-20,zoomPageWidth,zoomPageHeight);this.imgWidth=a.x;this.imgHeight=a.y;$(this.img).css({width:a.x+"px",height:a.y+"px"});$(this.img).css({left:(this.width-a.x)/2+"px",top:(this.height-20-a.y)/2+4+"px"})};
thumbnailCell.prototype.setImgPosition=function(a){switch(a){case "l":$(this.img).css({left:"0px",right:"auto"});break;case "r":$(this.img).css({right:"0px",left:"auto"});break;case "c":$(this.img).css({left:(this.width-this.imgWidth)/2+"px",right:"auto"})}};thumbnailCell.prototype.setCaption=function(a){this.pageTextField.setCaption(a)};
thumbnailCell.prototype.fillImage=function(a){this.pageIndex=a;$(this.img).attr("src",getPageDir(a,"thumb"));$(this.background).append(this.img);this.onResizeImage(this.width,this.height);this.pageTextField.setCaption(a)};thumbnailCell.prototype.showBorder=function(){$(this.background).css({border:"1px solid #444444"})};thumbnailCell.prototype.hideBorder=function(){$(this.background)[0].style.border=""};thumbnailCell.prototype.getTextField=function(){return this.pageTextField};
thumbnailCell.prototype.hideTextField=function(){this.pageTextField.setCSS({display:"none"})};thumbnailCell.prototype.showTextField=function(){this.pageTextField.setCSS({display:"block"})};thumbnailCell.prototype.showCell=function(a){$(this.background).css({display:a?"block":"none"})};thumbnailCell.prototype.onMouseUp=function(a,b){var c=this;$(this.background).bind(_event._end,function(){b.call(a,c)})};thumbnailCell.prototype.highLight=function(a){$(this.background).css({"background-color":a})};
thumbnailCell.prototype.clearHighLight=function(){$(this.background).css({"background-color":""})};function thumbnailItem(a,b){this.background=$("<div></div>");this.itemB=new thumbnailCell(this.background);this.itemA=new thumbnailCell(this.background);this.width=260;this.height=170;this.isMerge=this.isDoublePage=!0;this.pageIndex=b;this.fillImage=!1;this.mainColor="#888888";this.textField=new label(b+"-"+(b+1),this.background);this.textField.setLabelPosition((this.width-this.textField.getWidth())/2,0,["left","bottom"]);this.textField.setFont("12px","#f0f0f0",null);$(a).append(this.background);
$(this.background).css({position:"absolute",border:"1px solid #555555",width:this.width+"px",height:this.height+"px"});1!=b&&b!=totalPageCount?(this.itemA.setPosition(0,0),this.itemB.setPosition(0,0,["right","top"]),this.itemB.onMouseUp(this,this.onItemMouseUp)):(this.itemA.setPosition(0,0),this.itemB.showCell(!1),this.textField.setCSS({display:"none"}),this.setBorder(!1));this.itemA.onMouseUp(this,this.onItemMouseUp)}thumbnailItem.prototype.getWidth=function(){return this.width};
thumbnailItem.prototype.addImage=function(){this.fillImage||(this.itemA.fillImage(this.pageIndex),1!=this.pageIndex&&this.pageIndex!=totalPageCount&&this.itemB.fillImage(this.pageIndex+1),this.fillImage=!0)};thumbnailItem.prototype.setPosition=function(a,b,c){void 0==c&&(c=["left","top"]);$(this.background).css(c[0],a+"px");$(this.background).css(c[1],b+"px")};thumbnailItem.prototype.onResize=function(a,b){this.width=a;this.height=b;$(this.background).css({width:a+"px",height:b+"px"})};
thumbnailItem.prototype.resetItem=function(){};thumbnailItem.prototype.fission=function(){1==this.pageIndex||this.pageIndex==totalPageCount||(this.setBorder(!1),this.itemA.setImgPosition("c"),this.itemB.setImgPosition("c"),this.showTextField(!1),this.isMerge=!1,this.onResize(this.width+10,170))};
thumbnailItem.prototype.merge=function(){1==this.pageIndex||this.pageIndex==totalPageCount||(this.setBorder(!0),this.itemA.setImgPosition("r"),this.itemB.setImgPosition("l"),this.showTextField(!0),this.isMerge=!0,this.onResize(this.width,170))};thumbnailItem.prototype.showBorder=function(){$(this.background).css({border:"1px solid #444444"})};thumbnailItem.prototype.hideBorder=function(){$(this.background)[0].style.border=""};
thumbnailItem.prototype.showTextField=function(a){var b=a?"none":"block";this.textField.setCSS({display:a?"block":"none"});this.itemA.getTextField().setCSS({display:b});this.itemB.getTextField().setCSS({display:b})};thumbnailItem.prototype.setBorder=function(a){a?($(this.background).css({border:"1px solid #444444"}),this.itemA.hideBorder(),this.itemB.hideBorder()):($(this.background)[0].style.border="",this.itemA.showBorder(),this.itemB.showBorder())};
thumbnailItem.prototype.onItemMouseUp=function(a){isThumbDrag||(a=a.getPageIndex(),gotoPageFun(a))};thumbnailItem.prototype.highLight=function(a){var b=colorDiv(this.mainColor,50);this.isMerge?1==a||a==totalPageCount?this.itemA.highLight(b):$(this.background).css({"background-color":b}):a==this.pageIndex?this.itemA.highLight(b):this.itemB.highLight(b)};thumbnailItem.prototype.clearHighLight=function(){$(this.background).css({"background-color":""});this.itemA.clearHighLight();this.itemB.clearHighLight()};var isThumbDrag=!1;
function thumbnailBar(a){this.background=$("<div class='thumbBar'></div>");this.contentBox=$("<div class='thumbBG'></div>");this.scrollBox=$("<div class='thumbBox'></div>");this.mouseDown=this.showing=!1;this.scrollBoxX=this.mouseDownX=-1;this.width=800;this.height=210;this.mainColor="#888888";this.thumbArray=[];this.lastMoveTime=this.lastMoveX=-1;this.mergeing=this.moveLeft=!1;$(this.contentBox).css({"-webkit-box-shadow":"0 0 5px rgba(40, 0, 0, 0.5)","-moz-box-shadow":"0 0 5px rgba(40, 0, 0, 0.5)","-o-box-shadow":"0 0 5px rgba(40, 0, 0, 0.5)",
"box-shadow":"0 0 5px rgba(40, 0, 0, 0.5)"});this.background.css({height:this.height+"px",bottom:-(this.height+10)+"px"});this.contentBox.css({height:this.height-10+"px"});this.scrollBox.css({height:this.height-26+"px"});$(a).append(this.background);$(this.background).append(this.contentBox);$(this.contentBox).append(this.scrollBox);this.closeButton=new button(1,this.background,{iconURL:uiBaseURL+"close.png"},!0);this.closeButton.setButtonPosition(5,0,["right","top"]);this.addItem();this.initEvent();
this.setHighLight(1);this.currentCellIndex=1;this.fillNearByImages(0)}thumbnailBar.prototype.onResize=function(){var a=$(this.background).width(),b=$(this.scrollBox).width();if(a>b)$(this.scrollBox).css({left:(a-b)/2+"px"});else{var c=$(this.scrollBox).offset().left;0<c&&(c=0);c<a-b&&(c=a-b);$(this.scrollBox).css({left:c+"px"})}};thumbnailBar.prototype.setPosition=function(a,b,c){void 0==c&&(c=["left","top"]);$(this.background).css(c[0],a+"px");$(this.background).css(c[1],b+"px")};
thumbnailBar.prototype.addItem=function(){for(var a=0;a<=originTotalPageCount;){var b=0==a?new thumbnailItem(this.scrollBox,1):new thumbnailItem(this.scrollBox,a);b.getWidth();b.setPosition(this.thumbArray.length*(b.getWidth()+5)+5,5);this.thumbArray.push(b);a+=2}$(this.scrollBox).css({width:this.thumbArray.length*(b.getWidth()+5)+10+"px"});this.mergeAll()};
thumbnailBar.prototype.resetItemPosition=function(){for(var a=0,b=0;b<this.thumbArray.length;b++){var c=this.thumbArray[b];0==b?(c.setPosition(5,5),a=140):(c.setPosition(a,5),a=a+c.getWidth()+5)}$(this.scrollBox).css({width:a+"px"})};thumbnailBar.prototype.mergeAll=function(){if(!this.mergeing){for(var a=0;a<this.thumbArray.length;a++)this.thumbArray[a].merge();this.resetItemPosition();this.mergeing=!0}};
thumbnailBar.prototype.fissionAll=function(){for(var a=0;a<this.thumbArray.length;a++)this.thumbArray[a].fission();this.resetItemPosition();this.mergeing=!1};thumbnailBar.prototype.getShowStatu=function(){return this.showing};thumbnailBar.prototype.setShowStatu=function(a){this.showing=a};thumbnailBar.prototype.showshow=function(){$(this.background).animate({bottom:0},300);this.showing=!0};thumbnailBar.prototype.hideBox=function(){$(this.background).animate({bottom:-220},300);this.showing=!1};
thumbnailBar.prototype.initEvent=function(){var a=this;this.background.bind(_event._down,function(){return!1});this.closeButton.onMouseUp(this,this.hideBox);$(this.contentBox).bind(_event._down,function(b){a.mouseDown=!0;isThumbDrag=!1;b=isTouch?b.originalEvent.touches:[b];a.mouseDownX=b[0].pageX;a.scrollBoxX=$(a.scrollBox).offset().left;return!1});$(this.contentBox).bind(_event._move,function(b){if(a.mouseDown){var b=isTouch?b.originalEvent.touches:[b],c=a.mouseDownX-b[0].pageX;20<Math.abs(c)&&(isThumbDrag=
!0);$(a.background).width()>$(a.scrollBox).width()||(c=a.scrollBoxX-c,0<c&&(c=0),c<$(a.background).width()-$(a.scrollBox).width()&&(c=$(a.background).width()-$(a.scrollBox).width()),$(a.scrollBox).css({left:c+"px"}),a.moveLeft=a.lastMoveX>b[0].pageX?!0:!1,a.lastMoveX=b[0].pageX,a.lastMoveTime=(new Date).getTime())}});$(this.contentBox).bind(_event._end,function(){a.mouseDown=!1;if(100>(new Date).getTime()-a.lastMoveTime&&-1!=a.lastMoveTime){var b=a.moveLeft?-30:30;a.tweener($(a.scrollBox).offset().left,
b,10)}});$(this.contentBox).bind("mouseleave",function(){a.mouseDown=!1})};
thumbnailBar.prototype.setHighLight=function(a){this.currentCellIndex=a;var b=Math.floor(a/2);if(!(a>originTotalPageCount))if(this.thumbArray[b].highLight(a),$(this.background).width()>$(this.scrollBox).width())$(this.scrollBox).css({left:($(this.background).width()-$(this.scrollBox).width())/2+"px"});else{var a=$(this.scrollBox).offset().left,c=$(this.background).width(),d=(b-1)*(this.thumbArray[b].getWidth()+5)+75,b=this.thumbArray[b].getWidth();this.tweener(a,-(d+a-(c-b)/2)/6,6)}};
thumbnailBar.prototype.clearHighLight=function(){for(var a=0;a<this.thumbArray.length;a++)this.thumbArray[a].clearHighLight()};
thumbnailBar.prototype.tweener=function(a,b,c){var d=function(a,b){for(var c=b/2,d=(a-a/4)/c,e=Array(b),f=0;f<b;f++)e[f]=f<c?a-(c-f)*d:a+(f-c+1)*d;return e.reverse()}(b,c),e=a,f=0,h=this,j=window.setInterval(function(){e+=d[f];f++;f==c&&(e=a+b*c);0<e&&(e=0);e<$(h.background).width()-$(h.scrollBox).width()&&(e=$(h.background).width()-$(h.scrollBox).width());$(h.scrollBox).css({left:e+"px"});f>=c&&(window.clearInterval(j),h.fillNearByImages(e))},30)};
thumbnailBar.prototype.fillNearByImages=function(a){var b=Math.ceil(this.background.width()/65)+2;this.background.width()>this.scrollBox.width()?(a=0,b=originTotalPageCount+1):a=0==a?0:a==this.background.width()-this.scrollBox.width()?originTotalPageCount-b:this.currentCellIndex-Math.ceil(b/2);for(var a=Math.ceil(a/2),c,d=0;d<Math.ceil(b/2);d++)c=a+d,this.thumbArray[c]&&this.thumbArray[c].addImage()};function link(a,b){var c=$("<div style='position: absolute;'></div>"),d=pageEditor[a-1][b].action;void 0!=d.length&&(d=d[0]);var e=d.url;null!=e&&"www."==e.substr(0,4).toLowerCase()&&(e="http://"+e);var f;try{f=d.triggerEventType}catch(h){f=null}c.bind(_event._down,function(){var h=colorTo0x(pageEditor[a-1][b].downColor);c.css({"background-color":h,opacity:pageEditor[a-1][b].downAlpha});f==PageEditor.TriggerEventType.MouseDown&&(d.actionType==PageEditor.ActionType.GOTO_PAGE?gotoPageFun(d.pageIndex):
d.actionType==PageEditor.ActionType.OPEN_URL&&window.open(e,d.linkTarget));3==browserType?event.cancelBubble=!0:event.stopPropagation()});c.bind("mouseover",function(){var h=colorTo0x(pageEditor[a-1][b].overColor);c.css({"background-color":h,opacity:pageEditor[a-1][b].overAlpha});f==PageEditor.TriggerEventType.MouseOver&&(d.actionType==PageEditor.ActionType.GOTO_PAGE?gotoPageFun(d.pageIndex):d.actionType==PageEditor.ActionType.OPEN_URL&&window.open(e,d.linkTarget))});c.bind(isTouch?_event._end:"mouseout",
function(){var h=colorTo0x(pageEditor[a-1][b].outColor);c.css({"background-color":h,opacity:pageEditor[a-1][b].outAlpha});f==PageEditor.TriggerEventType.MouseOut&&(d.actionType==PageEditor.ActionType.GOTO_PAGE?gotoPageFun(d.pageIndex):d.actionType==PageEditor.ActionType.OPEN_URL&&window.open(e,d.linkTarget))});$.fn.extend(c,{onResize:function(d,e){var f=pageEditor[a-1][b].location;c.css({top:f.y*e+"px",left:f.x*d+"px",width:f.width*d+"px",height:f.height*e+"px"})}});return c}
function initLink(a,b,c,d){this.link=$("<div style='position: absolute;'></div>");this.config=$.extend({width:0.2,height:0.2,x:0.2,y:0.2,action:null},b);this.pw=c;this.ph=d;this.width=this.pw*this.config.width;this.height=this.ph*this.config.height;a.append(this.link);void 0==this.config.downColor?(this.config.downColor=getColor("LinkDownColor","#808080"),this.config.downAlpha=getInt("LinkAlpha",0.6),this.config.overColor=this.config.downColor,this.config.outColor=this.config.downColor,this.config.overAlpha=
this.config.downAlpha/2,this.config.outAlpha=0):(this.config.downColor=colorTo0x(this.config.downColor),this.config.overColor=colorTo0x(this.config.overColor),this.config.outColor=colorTo0x(this.config.outColor));this.link.css({position:"absolute",top:this.config.y*this.ph+"px",left:this.config.x*this.pw+"px",width:this.width+"px",height:this.height+"px"});this.father=a;this.initEvt()}
initLink.prototype.onResize=function(a,b){this.pw=a;this.ph=b;this.width=this.config.width*a;this.height=this.config.height*b;var c=this.config.y*b,d=this.config.x*a;this.link.css({width:this.width+"px",height:this.height+"px"});this.setPosition(d,c);if(null!=this.form)this.form.onResize(bookContainer.width(),bookContainer.height());if(null!=this.slide)this.slide.onResize(bookContainer.width(),bookContainer.height())};initLink.prototype.setPosition=function(a,b){this.link.css({left:a+"px",top:b+"px"})};
initLink.prototype.initEvt=function(){var a=this;this.flag=0;this.slide=this.form=null;this.linkURL;if(null!=a.config.action){try{void 0!=this.config.action.length&&(this.config.action=this.config.action[0]),this.linkURL=this.config.action.url}catch(b){}var c;null!=this.linkURL&&"www"==this.linkURL.substr(0,3).toLowerCase()&&(this.linkURL="http://"+this.linkURL);try{c=this.config.action.triggerEventType}catch(d){c=null}}this.link.bind(_event._down,function(){a.link.css({"background-color":a.config.downColor,
opacity:a.config.downAlpha});c==PageEditor.TriggerEventType.MouseDown&&actionEvent.call(a);3==browserType?event.cancelBubble=!0:event.stopPropagation()});this.link.bind("mouseover",function(){a.link.css({"background-color":a.config.overColor,opacity:a.config.overAlpha});c==PageEditor.TriggerEventType.MouseOver&&actionEvent.call(a)});this.link.bind(isTouch?_event._end:"mouseout",function(){a.link.css({"background-color":a.config.outColor,opacity:a.config.outAlpha});c==PageEditor.TriggerEventType.MouseOut&&
actionEvent.call(a)})};function thickness(a){var b=$("<div></div>"),c=$("<img src='"+uiBaseURL+"thickness.png' style='position:absolute;' />");b.append(c);$.fn.extend(b,{visible:!0,onResize:function(a,e){b.css({width:a,height:e});c.css({width:a,height:e})},setThicknessPosition:function(c,e){b.css({left:c,top:e,position:"absolute","z-index":a?8:9})},hideThickness:function(){b.css("display","none")},showThickness:function(){b.css("display","block")},setVisible:function(a){b.css({display:a?"block":"none"});b.visible=a}});
a&&c.css({"-webkit-transform":"scaleX(-1)","-moz-transform":"scaleX(-1)","-o-transform":"scaleX(-1)"});return b};var gradientColorA,gradientColorB,gradientColorAngle,backGroundImgURL,zoomButtonEnable=!0,thumbButtonEnable=!0,shareButtonEnable=!0,searchButtonEnable=!0,bookmarkButtonEnable=!0,windowWidth=0,windowHeight=0,toolBarColor,buttonColor,originTotalPageCount,totalPageCount,leftShadowWidth=50,rightShadowWidth=50,zoomPageWidth,zoomPageHeight,flipTime=600,isRegister=!1,bookDescription,bookTitle,showFlipButton,normalEventRadius=1E4,singleEventRadius=1E4,stopFlip=!1,flipping=!1,isTouch=isTouch(),bookContainer,
tmpContainer,zoomBook,flipBook,toolBar,pageIndexTextField,topMargin,leftMargin,bottomMargin,rightMargin,bookType=BookType.normal_book,resizeBookAfterFlip=!1,frmSearch,frmShare,_rimFlip,flipAudio,backgroundAudio,auto_player,productName,homePage,_tipsBox,frmBookmark,thumbnail,oriPageIndex=1,googleID,hardPageEnable,uiBaseURL,browserType,rightToLeft=!1,isFlipPdf=!1,flaudio=0,flagspeak=0,bgSound,backgroundObj,iconArray,toolBarIconsURL,ua=navigator.userAgent.toLowerCase(),device={};
device.name=ua.match(/ipad/)?"ipad":ua.match(/ipod/)?"ipod":ua.match(/iphone/)?"iphone":ua.match(/android/)?"android":ua.match(/mac|win|linux/)?"pc":"other";
var userConfig={leftShadowWidth:30,leftShadowAlpha:1,rightShadowWidth:30,rightShadowAlpha:1,shortcutButtonHeight:370,shortcutButtonWidth:90,autoPlayButtonVisible:"true",downloadButtonVisible:"false",downloadURL:"",bgSoundButtonVisible:"yes",bgSoundAutoStart:"yes",bgSoundURL:"",homeButtonVisible:!0,homeURL:""},originWindow=Point(0,0),testLog=$("<div width='300px' height='300px' style='position:absolute;left:10px;top:10px;'></div>"),logStr=function(a){testLog[0].innerHTML=a},getAliasValue=function(a){a=
bookConfig[a]?bookConfig[a]:aliasConfig[a]?aliasConfig[a]:void 0;if(a instanceof Array){if(!(1>a.length))for(var b=0;b<a.length;b++){if(void 0!=bookConfig[a[b]])return bookConfig[a[b]];if(b==a.length-1)break}}else return a},getString=function(a,b){var c=getAliasValue(a);return void 0==c?b:c},getInt=function(a,b){var c=getAliasValue(a);try{return isNaN(c)||void 0==c?b:Number(c)}catch(d){return b}},getBool=function(a,b){var c=["true","yes","show","enable"],d=["false","no","hide","disable"],e=getAliasValue(a);
try{e=e.toLowerCase()}catch(f){return b}return 0>c.indexOf(e)&&0>d.indexOf(e)?b:0<=c.indexOf(e)},getColor=function(a,b){var c=getAliasValue(a);return void 0!=c?colorTo0x(c):b},getImage=function(a){if(0<iconArray.length)for(var b=0;b<iconArray.length;b++)if(iconArray[b].url==a)return iconArray[b].img;return new Image},singlePageBook,leftShortcutButton,rightShortcutButton,init=function(){if(compareov()){""==userConfig.bgSoundURL&&(userConfig.bgSoundButtonVisible=!1);_singleBook=$("#singleBook");pageIndexTextField=
$("#currentPageIndexTextField");flipBook=rightToLeft?new rightToLeftNormalBook:new normalBook;flipBook.create(bookContainer);zoomBook=new initZoomBook(bookContainer);backgroundObj=new initBackground(tmpContainer,gradientColorA,gradientColorB,gradientColorAngle,windowWidth,windowHeight,backGroundImgURL);var a=$("<div id='singleBookMask' style='display: none; position: absolute;'></div>");_singleBook=$("<div id='singleBook' class='singleBook' style='position: absolute;'></div>");var b=$("<div id='singlePrePage' style='position: absolute;z-index: 1;'></div>"),
c=$("<div id='singleCurPage' style='position: absolute;z-index: 3;'></div>"),d=$("<div id='singleNextPage' style='position: absolute;z-index: 2;'></div>");bookContainer.append(a);a.append(_singleBook);_singleBook.append(b);_singleBook.append(c);_singleBook.append(d);singlePageBook=new singleBook;singlePageBook.Create();showFlipButton&&(leftShortcutButton=new initLeftButton(tmpContainer),rightShortcutButton=new initRightButton(tmpContainer));frmBookmark=new tableContent({caption:"Table of Content",
closeIconURL:uiBaseURL+"close.png"},tmpContainer);frmSearch=new searchForm({caption:"Search",closeIconURL:uiBaseURL+"close.png"},tmpContainer);_rimFlip=new rimFlip;1!=oriPageIndex&&_rimFlip.removeRimFlip();onStageResize();_tipsBox=new tipsBox("This is the last page",bookContainer);_tipsBox.setPosition((windowWidth-_tipsBox.getWidth())/2,100);auto_player=new autoFlip;bookType=windowWidth>=windowHeight?BookType.normal_book:BookType.single_book;isTouch?window.onorientationchange=function(){window.setTimeout(function(){onStageResize()},
200)}:$(window).resize(function(){onStageResize()});var e=window.location.hash;""!=e&&3<e.length&&"#p="==e.substr(0,3)&&(isNaN(e.substr(3,e.length-3))||window.setTimeout(function(){var a=parseInt(e.substr(3,e.length-3));gotoPageFun(a)},1E3));initEvent();setPageIndexTextField();if("iphone"==device.name||"ipod"==device.name)zoomBook.currentIndex=oriPageIndex,zoomBook.showPage.fillContent(zoomBook.currentIndex),changeShowBook(2),bookType=2,$("#btnZoom").empty().append(getImage(toolBarIconsURL[6])).attr("title",
"Zoom Out"),setCurrentIndexTextField(zoomBook.currentIndex,!1),thumbnail.clearHighLight(),thumbnail.setHighLight(zoomBook.currentIndex)}else alert("Purchase from www.flippagemaker.com to preview the book.")},initBGSound=function(){if(!(void 0==userConfig.bgSoundURL||""==userConfig.bgSoundURL||!userConfig.bgSoundButtonVisible)){var a=$("<audio  loop autoplay><audio>"),b=userConfig.bgSoundButtonVisible,c=this;a.attr("src",userConfig.bgSoundURL);this.pause=function(){a[0].pause()};this.play=function(){a[0].play()};
tmpContainer.append(a);$("#btnSound").bind(_event._end,function(){b?(c.pause(),b=!1,$("#imgSoundOn").attr("src",uiBaseURL+"soundOff.png"),$("#btnSound").attr("title","Sound Off")):(c.play(),$("#imgSoundOn").attr("src",uiBaseURL+"soundOn.png"),$("#btnSound").attr("title","Sound On"),b=!0)})}};
function createAll(){tmpContainer=$("<div class='bookStage' id= 'tmpContainer'></div>");bookContainer=$("<div class='bookStage' id= 'bookContainer'></div>");$("body").append(tmpContainer);tmpContainer.append(bookContainer);bookContainer.css({"-webkit-transform":"perspective(1000px)","-moz-transform":"perspective(1000px)"});windowWidth=bookContainer.width();windowHeight=bookContainer.height();originWindow=Point(tmpContainer.width(),tmpContainer.height());var a=new loadingBook(tmpContainer);toolBarIconsURL=
[uiBaseURL+"BackGround.jpg",uiBaseURL+"Last.png",uiBaseURL+"next.png",uiBaseURL+"prev.png",uiBaseURL+"First.png",uiBaseURL+"ZoomIn.png",uiBaseURL+"ZoomOut.png",uiBaseURL+"autoPlay.png",uiBaseURL+"stopAutoPlay.png",uiBaseURL+"thumbnails.png",uiBaseURL+"sharethis.png",uiBaseURL+"search.png",uiBaseURL+"download.png",uiBaseURL+"home.png",uiBaseURL+"bookmark.png",uiBaseURL+"soundOn.png",uiBaseURL+"soundOff.png",uiBaseURL+"previous_normal.png",uiBaseURL+"previous_normal_down.png",uiBaseURL+"next_normal.png",
uiBaseURL+"next_normal_down.png"];$(window).loader(toolBarIconsURL,function(b){a.hide();iconArray=b;toolBar=new loadToolBar(tmpContainer,iconArray);init();bgSound=new initBGSound;window.setTimeout(function(){bookContainer.animate({opacity:1},1E3);toolBar.show();showFlipButton&&(leftShortcutButton.show(),rightShortcutButton.show())},200)});if("undefined"!=typeof speakConfig&&"none"!=speakConfig.title){var b=$("<div id='LectureBook' style='position:absolute;right:20px;bottom:40px; width:190px; height:330px;'></div>"),
c=$("<div id='LectureBox' style='position:absolute;z-index:70; width:190px; height:88px;top:0;opacity:0.6;background-image:url(style/icon/lecturetext.png)'></div>"),d=$("<div style='position:absolute;overflow: hidden; height:60px;top:5px;'><div id='LectureText' style='word-break: break-word;color:#fff;padding:5px 10px 5px 10px;text-shadow: 2px 2px 2px #000000;'></div></div>"),e=$("<div id='LecturePre' style='position:absolute; top:95px;left:25px;z-index:100;'></div>");LectureCon=$("<div id='LectureCon' style='position:absolute; display:none;z-index:101; width:105px; height:105px; top:150px;left:40px;background-image:url(style/icon/co_bg.png)'><div style='position:absolute; cursor: pointer;width:23px;height:23px;left:41px; top:15px'><img id='lstop' src='style/icon/Pause.png' title='Pause' /></div><div style='position:absolute; cursor: pointer;width:23px;height:23px;right:15px;top:41px;'><img id='lnext' src='style/icon/Nextpage.png' title='Next Page' /></div><div style='position:absolute; cursor: pointer;width:23px;height:23px;left:15px;top:41px;'><img id='lpre' src='style/icon/Pre.png' title='Previous Page' /></div><div style='position:absolute; cursor: pointer;width:23px;height:23px;left:41px;bottom:15px;'><img id='laudio' src='style/icon/Muteclose.png' title='Mute' /></div></div>");
LectureClose=$("<div id='LectureClose' style='position:absolute; right:60px; top:85px;display:none;z-index:200;cursor:pointer;'><img style='z-index:200;' src='style/icon/Closediv.png' title='Close' /></div>");LectureShow=$("<div id='LectureShow' style='position:absolute; right:0;bottom:35px;display:none;z-index:200;cursor:pointer;'><img  src='style/icon/LectureShow.png' /></div>");bookContainer.append(b);b.append(c);c.append(d);b.append(e);b.append(LectureCon);b.append(LectureClose);bookContainer.append(LectureShow)}}
function LectureAudio(a){var b=document.getElementById("LecturePre");b.innerHTML="<img id='LectureSpe' style='width:126px;' src='"+uiBaseURL+"speak.gif' />";var c=document.createElement("audio");c.setAttribute("id","LectureID");c.type="audio/mpeg";c.setAttribute("autoplay","autoplay");0==speakConfig.page[a].type?c.src=speakConfig.page[a].speakmp3:(c.src=speakConfig.page[a].importmp3,$("#LectureBox").css("display","none"));b.appendChild(c)}
function LectureSoll(a){var b=$("#LectureText");$("#LectureBox").css("display","block");b.html(speakConfig.page[a].speaktext);var c=b.height();40<c&&b.animate({marginTop:-c+40+"px"},90*c,function(){b.css("marginTop",0);$("#LectureBox").css("display","none");$("#LectureSpe").attr("src",uiBaseURL+"nospeak.gif");a+1<totalPageCount/2+1&&0==flaudio&&(nextPageFun(),LectureAudio(a+1),LectureSoll(a+1))})}
function initToolBar(){thumbnail=new thumbnailBar(tmpContainer);initLogoBar();setPageIndexTextField();$("#btnLast").asButton();$("#btnFirst").asButton();$("#btnRight").asButton();$("#btnLeft").asButton();$("#btnZoom").asButton();$("#btnThumb").asButton();$("#btnShare").asButton();$("#btnSearch").asButton();$("#btnAutoPlay").asButton();$("#btnDownload").asButton();$("#btnSound").asButton();$("#btnHome").asButton();getBool("autoPlayAutoStart",!1)&&($("#autoPlayImg").attr("src",uiBaseURL+"stopAutoPlay.png"),
$("#btnAutoPlay").attr("title","Stop Auto Play"))}
var setToolBarPosition=function(){var a=45;$("#toolBarBack").css({width:windowWidth+"px",height:"42px"});var a=45,b=$("#tfPageIndex").width();$("#btnLast").css({right:"3px"});$("#btnRight").css({right:a+3+"px"});$("#tfPageIndex").css({right:2*a+3+"px",top:"5px"});$("#btnLeft").css({right:2*a+b+3+"px"});$("#btnFirst").css({right:3*a+b+3+"px"});b=4*a+b+3;zoomButtonEnable&&($("#btnZoom").css({right:b+"px"}),b+=a);userConfig.autoPlayButtonVisible&&($("#btnAutoPlay").css({right:b+"px"}),b+=a);userConfig.bgSoundButtonVisible&&
($("#btnSound").css({right:b+"px"}),b+=a);thumbButtonEnable&&($("#btnThumb").css({right:b+"px"}),b+=a);shareButtonEnable&&($("#btnShare").css({right:b+"px"}),b+=a);searchButtonEnable&&($("#btnSearch").css({right:b+"px"}),b+=a);bookmarkButtonEnable&&($("#btnBookmark").css({right:b+"px"}),b+=a);userConfig.downloadButtonVisible&&($("#btnDownload").css({right:b+"px"}),b+=a);userConfig.homeButtonVisible&&$("#btnHome").css({right:b+"px"})},onStageResize=function(){resizeBookAfterFlip=!1;if(bookType==BookType.normal_book&&
nBookStatu==normalBookStatu.book_statu_auto_flip||bookType==BookType.single_book&&1==$(singlePageBook).data().bookStatu)resizeBookAfterFlip=!0;else{windowWidth=tmpContainer.width();windowHeight=tmpContainer.height();var a,b,c=windowWidth,d=windowHeight,e=bookConfig.largePageWidth;if("iphone"==device.name||"ipod"==device.name)d=window.innerWidth>window.innerHeight?320==window.innerHeight?271:window.innerHeight+60:window.innerHeight+60,c=window.innerWidth,tmpContainer.css({width:c+"px",height:d+"px"}),
window.setTimeout(function(){window.scrollTo(0,1)},30),windowWidth=tmpContainer.width(),windowHeight=tmpContainer.height();var f=bookConfig.largePageHeight,h=c-leftMargin-rightMargin,j=d-topMargin-bottomMargin-40;backgroundObj.onResize(c,d);a=2*e/f;h/j>a?(b=j,a*=b):(a=h,b=f*a/(2*e));flipBook.onResize(a/2,b);flipBook.setCSS({top:(j-b)/2+topMargin+"px",left:(h-a)/2+leftMargin+"px"});flipBook.fillNearPage(flipBook.getCurrentPageIndex());b=getPageWidthHeight(c,d-toolBar.getHeight(),e,f);singlePageBook.onResize(b.x,
b.y);singlePageBook.setBookPosition((c-b.x)/2,(d-toolBar.getHeight()-b.y)/2);e=b=0;zoomBook.width<h&&(b=(h-zoomBook.width)/2);zoomBook.height<j&&(e=(j-zoomBook.height)/2);zoomBook.setPosition(b,e);zoomBook.onResize(h,j);flipBook.setThicknessPosition();bookType==BookType.normal_book&&c<d&&(changeShowBook(1),bookType=BookType.single_book,$(singlePageBook).data().gotoPage(flipBook.currentPageIndex),setCurrentIndexTextField($(singlePageBook).data().currentPageIndex,!1),thumbnail.clearHighLight(),thumbnail.setHighLight(flipBook.currentPageIndex));
bookType==BookType.single_book&&c>=d&&(changeShowBook(0),bookType=BookType.normal_book,flipBook.gotoPage($(singlePageBook).data().currentPageIndex),setCurrentIndexTextField(flipBook.currentPageIndex,!0),thumbnail.clearHighLight(),thumbnail.setHighLight($(singlePageBook).data().currentPageIndex));thumbnail.onResize();toolBar.setButtonPosition();if(frmSearch)frmSearch.onResize(h/2,d);if(void 0!=frmBookmark)frmBookmark.onResize(h/2,d);void 0!=_tipsBox&&_tipsBox.setPosition((windowWidth-_tipsBox.getWidth())/
2,100);showFlipButton&&(leftShortcutButton.setPosition(),rightShortcutButton.setPosition())}};
function initEvent(){var a=-1,b=void 0,c,d,e=!1;bookContainer.bind(_event._move,function(f){f=isTouch?f.originalEvent.touches:[f];if(2==f.length&&e){var h=$(singlePageBook).data(),j=globalToBook(!0,f[0].pageX,f[0].pageY,!0),f=globalToBook(!0,f[1].pageX,f[1].pageY);if(15<Math.abs(j.x-c.x)||15<Math.abs(j.y-c.y)||15<Math.abs(f.x-d.x)||15<Math.abs(f.y-d.y))zoomBook.currentIndex=h.currentPageIndex,zoomBook.showPage.fillContent(zoomBook.currentIndex),changeShowBook(2),bookType=2,$("#zoomImg").attr("src",
uiBaseURL+"ZoomOut.png"),$("#btnZoom").attr("title","Zoom Out"),setCurrentIndexTextField(zoomBook.currentIndex,!1),thumbnail.clearHighLight(),thumbnail.setHighLight(zoomBook.currentIndex);return!1}1==bookType&&(logStr("mousemove!!"),$(singlePageBook).data().bookMouseDown&&(flipPoint=globalToBook(!0,f[0].pageX,f[0].pageY,!0),$(singlePageBook).data().flippingPage.flipToPoint(flipPoint),-1!=a&&(b=flipPoint.x>a?!1:!0),a=flipPoint.x));return!1});bookContainer.bind(_event._end,function(a){var c=$(singlePageBook).data(),
a=isTouch?a.originalEvent.changedTouches:[a];e=!1;if(bookType==BookType.single_book)if(c.bookMouseDown){var a=globalToBook(!0,a[0].pageX,a[0].pageY,!0),d=!0,k;if(c.isLeft&&a.x>=c.pageWidth/2||!c.isLeft&&a.x<c.pageWidth/2)d=!1;void 0!=b&&(d=!(c.isLeft^b));d||(rightToLeft?(c.gotoPageIndex=c.isLeft?c.currentPageIndex+1:c.currentPageIndex-1,c.differPageNum=c.isLeft?1:-1):(c.gotoPageIndex=c.isLeft?c.currentPageIndex-1:c.currentPageIndex+1,c.differPageNum=c.isLeft?-1:1));k=rightToLeft?d?Point(c.isLeft?
0:2,c.isTop?0:1):Point(c.isLeft?2:0,c.isTop?0:1):d?Point(c.isLeft?-1:1,c.isTop?0:1):Point(c.isLeft?1:-1,c.isTop?0:1);k=Point(k.x*c.pageWidth,k.y*c.pageHeight);c.timer("tr",6,30,k,a,!1,!0,!d);c.bookMouseDown=!1}else flipping&&2==c.bookStatu&&(stopFlip=!0)});bookContainer.bind(_event._down,function(f){document.getElementById("currentPageIndexTextField").blur();thumbnail.hideBox();a=-1;b=void 0;var h=$(singlePageBook).data(),f=isTouch?f.originalEvent.touches:[f];if(2==f.length){if(2==h.bookStatu){var j;
"tl"==h.flippingPage.realCorner?j=rightToLeft?Point(0,0):Point(-h.pageWidth,0):"tr"==h.flippingPage.realCorner?j=rightToLeft?Point(2*h.pageWidth,h.pageHeight):Point(h.pageWidth,0):"bl"==h.flippingPage.realCorner?j=rightToLeft?Point(0,h.pageHeight):Point(-h.pageWidth,h.pageHeight):"br"==h.flippingPage.realCorner&&(j=rightToLeft?Point(2*h.pageWidth,h.pageHeight):Point(h.pageWidth,h.pageHeight));h.stopTimer();h.timer(h.flippingPage.realCorner,6,30,j,h.flipPoint,!1,!0,!1)}c=globalToBook(!0,f[0].x,f[0].y,
!0);d=globalToBook(!0,f[1].x,f[1].y,!0);f=h.isPointInPage(c,h.pageWidth,h.pageHeight);j=h.isPointInPage(d,h.pageWidth,h.pageHeight);e=f&&j;return h.bookMouseDown=!1}if(bookType==BookType.single_book&&0==h.bookStatu){var f=globalToBook(!0,f[0].pageX,f[0].pageY,!0),k;if(0>f.x||f.x>h.pageWidth||0>f.y||f.y>h.pageHeight)return;if(Math.pow(f.x,2)+Math.pow(f.y,2)<singleEventRadius)if(k="tl",h.isLeft=!0,h.isTop=!0,j=Point(-h.pageWidth,0),rightToLeft){if(j=Point(0,0),h.flippingPage=h.currentPage,h.gotoPageIndex=
h.currentPageIndex+1,h.currentPageIndex==originTotalPageCount){_tipsBox.setCaption("This is the last page");_tipsBox.showTipsBox();return}}else{if(h.flippingPage=h.previousPage,h.gotoPageIndex=h.currentPageIndex-1,1==h.currentPageIndex){_tipsBox.setCaption("This is the first page");_tipsBox.showTipsBox();return}}else if(Math.pow(f.x,2)+Math.pow(h.pageHeight-f.y,2)<singleEventRadius)if(k="bl",h.isLeft=!0,h.isTop=!1,j=Point(-h.pageWidth,h.pageHeight),rightToLeft){if(j=Point(0,h.pageHeight),h.flippingPage=
h.currentPage,h.gotoPageIndex=h.currentPageIndex+1,h.currentPageIndex==originTotalPageCount){_tipsBox.setCaption("This is the last page");_tipsBox.showTipsBox();return}}else{if(h.flippingPage=h.previousPage,h.gotoPageIndex=h.currentPageIndex-1,1==h.currentPageIndex){_tipsBox.setCaption("This is the first page");_tipsBox.showTipsBox();return}}else if(Math.pow(h.pageWidth-f.x,2)+Math.pow(f.y,2)<singleEventRadius)if(k="tr",h.isLeft=!1,h.isTop=!0,j=Point(h.pageWidth,0),rightToLeft){if(j=Point(2*h.pageWidth,
0),h.flippingPage=h.previousPage,h.gotoPageIndex=h.currentPageIndex-1,1==h.currentPageIndex){_tipsBox.setCaption("This is the first page");_tipsBox.showTipsBox();return}}else{if(h.flippingPage=h.currentPage,h.gotoPageIndex=h.currentPageIndex+1,h.currentPageIndex==originTotalPageCount){_tipsBox.setCaption("This is the last page");_tipsBox.showTipsBox();return}}else if(Math.pow(h.pageWidth-f.x,2)+Math.pow(h.pageHeight-f.y,2)<singleEventRadius)if(k="br",h.isLeft=!1,h.isTop=!1,j=Point(h.pageWidth,h.pageHeight),
rightToLeft){if(h.gotoPageIndex=h.currentPageIndex-1,j=Point(2*h.pageWidth,h.pageHeight),h.flippingPage=h.previousPage,1==h.currentPageIndex){_tipsBox.setCaption("This is the first page");_tipsBox.showTipsBox();return}}else{if(h.flippingPage=h.currentPage,h.gotoPageIndex=h.currentPageIndex+1,h.currentPageIndex==originTotalPageCount){_tipsBox.setCaption("This is the last page");_tipsBox.showTipsBox();return}}else return;_rimFlip.removeRimFlip();h.bookStatu=2;h.flippingPage.beginFlip(k);h.timer(k,6,
30,f,j,!1,!1)}else if(2==bookType)return;return!1});bookContainer.bind(_event._down,function(){isShareShow&&(shareBar.hideShareBar(),isShareShow=!1)});"undefined"!=typeof speakConfig&&"none"!=speakConfig.title&&($("#LecturePre").bind(_event._down,function(){"none"===$("#LectureCon").css("display")?($("#LectureCon").css("display","block"),$("#LectureClose").css("display","block")):($("#LectureCon").css("display","none"),$("#LectureClose").css("display","none"));$("#lnext").asImageButton();$("#lpre").asImageButton()}),
$("#lstop").bind(_event._down,function(){var a=document.getElementById("LectureID"),b=document.getElementById("LectureSpe");0==flaudio?(a.pause(),$("#LectureText").stop(!0),b.src="style/icon/nospeak.gif",$("#lstop").attr("src",uiBaseURL+"Play.png"),$("#lstop").attr("title","Play"),$("#LectureBox").css("display","none"),flaudio=1):(flaudio=0,LectureSoll(Math.floor(flipBook.getCurrentPageIndex()/2)),a.play(),b.src="style/icon/speak.gif",$("#lstop").attr("src",uiBaseURL+"Pause.png"),$("#lstop").attr("title",
"Pause"))}),$("#lnext").bind(_event._down,function(){nextPageFun()}),$("#lnext").bind(_event._move,function(){$("#lnext").attr("src",uiBaseURL+"Nextpage_down.png")}),$("#lpre").bind(_event._down,function(){previousPageFun()}),$("#lpre").bind(_event._move,function(){$("#lpre").attr("src",uiBaseURL+"Pre_down.png")}),$("#laudio").bind(_event._down,function(){var a=document.getElementById("LectureID");!1==a.muted?(a.muted=!0,$("#laudio").attr("src",uiBaseURL+"Mute.png"),$("#laudio").attr("title","Play"),
$("#LectureSpe").attr("src",uiBaseURL+"nospeak.gif")):(a.muted=!1,$("#laudio").attr("src",uiBaseURL+"Muteclose.png"),$("#laudio").attr("title","Mute"),$("#LectureSpe").attr("src",uiBaseURL+"speak.gif"))}),$("#LectureClose").bind(_event._down,function(){document.getElementById("LectureID").pause();$("#LectureText").stop(!0);$("#LectureBook").css("display","none");$("#LectureShow").css("display","block");flagspeak=1}),$("#LectureShow").bind(_event._down,function(){$("#LectureBook").css("display","block");
$("#LectureShow").css("display","none");$("#LectureBox").css("display","none");$("#LectureSpe").attr("src",uiBaseURL+"nospeak.gif");$("#LectureCon").css("display","none");$("#LectureClose").css("display","none");flagspeak=0}))}
jQuery(document).ready(function(){$.browser.msie&&9>$.browser.version&&alert("Your browser version is too low, please use version 9.0 or above.");void 0==window.aliasConfig&&(window.aliasConfig={});uiBaseURL=getString("UIBaseURL","");"string"==typeof uiBaseURL&&"/"!=uiBaseURL.substr(uiBaseURL.length-1,1)&&""!=uiBaseURL&&(uiBaseURL+="/");uiBaseURL+="style/icon/";zoomButtonEnable=getBool("ZoomButtonVisible",!0);thumbButtonEnable=getBool("ThumbnailsButtonVisible",!0);shareButtonEnable=getBool("ShareButtonVisible",
!0);searchButtonEnable=getBool("SearchButtonVisible",!1);bookmarkButtonEnable=getBool("BookMarkButtonVisible",!1);originTotalPageCount=getInt("totalPageCount",2);totalPageCount=originTotalPageCount+(1==originTotalPageCount%2?1:0);zoomPageWidth=getInt("largePageWidth",640);zoomPageHeight=getInt("largePageHeight",920);gradientColorA=getColor("bgBeginColor","#a93268");gradientColorB=getColor("bgEndColor","#588643");gradientColorAngle=getInt("bgMRotation",0);backGroundImgURL=getString("backGroundImgURL",
"");bookDescription=getString("bookDescription","This is a jQuery book.");bookTitle=getString("bookTitle","flipBook");showFlipButton=getBool("flipshortcutbutton",!0);if("iphone"==device.name||"ipod"==device.name)showFlipButton=!1;productName=getString("productName","Demo created by Flip PDF for iPad");homePage=getString("homePage","http://www.flipbuilder.com/");leftMargin=getInt("leftMargin",10);topMargin=getInt("topMargin",10);rightMargin=getInt("rightMargin",10);bottomMargin=getInt("bottomMargin",
10);rightToLeft=getBool("RightToLeft",!1);isFlipPdf=getString("isFlipPdf",!1);try{_gaq[0]=["_setAccount",getString("googleAnalyticsID","")]}catch(a){}oriPageIndex=getInt("OriginPageIndex",1);hardPageEnable=getBool("HardPageEnable",!1);userConfig.leftShadowWidth=getInt("LeftShadowWidth",40);userConfig.leftShadowAlpha=getInt("LeftShadowAlpha",1);userConfig.rightShadowWidth=getInt("RightShadowWidth",40);userConfig.rightShadowAlpha=getInt("RightShadowAlpha",1);userConfig.shortcutButtonHeight=getInt("ShortcutButtonHeight",
0);userConfig.shortcutButtonWidth=getInt("ShortcutButtonWidth",0);userConfig.autoPlayButtonVisible=getBool("AutoPlayButtonVisible",!0);userConfig.downloadButtonVisible=getBool("DownloadButtonVisible",!1);userConfig.downloadURL=getString("DownloadURL","");userConfig.bgSoundButtonVisible=getBool("BackgroundSoundButtonVisible",!0);userConfig.bgSoundAutoStart=getBool("BackgroundSoundAutoStart",!0);userConfig.bgSoundURL=getString("BackgroundSoundURL","");userConfig.homeButtonVisible=getBool("HomeButtonVisible",
!1);userConfig.homeURL=getString("HomeURL","");if(void 0==window.bookConfig)alert("Miss book config.");else if(void 0==window.pageEditor&&(window.pageEditor=void 0),void 0==window.textForPages&&(window.textForPages=[],searchButtonEnable=!1),void 0==window.ols&&(window.ols={},bookmarkButtonEnable=!1),window.document.title=bookTitle,$.browser.msie?browserType=3:$.browser.mozilla?browserType=2:$.browser.safari?browserType=1:$.browser.opera&&(browserType=4),createAll(),"undefined"!=typeof speakConfig&&
"none"!=speakConfig.title)LectureAudio(0),LectureSoll(0)});var _thumbBar,isThumbShow=!1,thumbBar=function(){var a=$("<div class='thumbBG'></div>"),b=$("<img src='"+uiBaseURL+"close.png' style='top:0px;right:1px;position:absolute;'>"),c=$("<div class='thumbBox'></div>"),d=$("<div class='scrollButton' style='display:none; left:0px;'></div>"),e=$("<div class='scrollButton' style='display:none;right:0px;'></div>"),f=$("<img src='"+uiBaseURL+"previous_down.png' style='position:absolute;top:-5px;left:-5px;' />"),h=$("<img src='"+uiBaseURL+"next_down.png' style='position:absolute;top:-5px;left:-5px;' />");
b.asImageButton();d.asButton();e.asButton();_thumbBar=$("<div class='thumbBar' style='display:none;'></div>");_thumbBar.append(a);_thumbBar.append(b);a.append(c);a.append(d);a.append(e);bookContainer.append(_thumbBar);d.append(f);e.append(h);d.bind(_event._end,function(){if(!_thumbBar.thumbDrag){var a=parseInt(c.css("left").substring(0,c.css("left").length-2));_thumbBar.contentPos=-158>a?a+200:42;c.animate({left:_thumbBar.contentPos},100,"linear")}});e.bind(_event._end,function(){if(!_thumbBar.thumbDrag){var a=
parseInt(c.css("left").substring(0,c.css("left").length-2));_thumbBar.contentPos=a+c.width()>_thumbBar.width()+158?a-200:_thumbBar.width()-42-c.width();c.animate({left:_thumbBar.contentPos},100,"linear")}});$.fn.extend(_thumbBar,{thumbDown:Point(0,0),thumbMove:Point(0,0),thumbEnd:0,thumbStartTime:0,thumbMoveTime:0,thumbEndTime:0,contentPos:0,thumbMouseDown:!1,thumbDrag:!1,dragEnable:!1,showThumb:function(){_thumbBar.css("display","block");_thumbBar.animate({bottom:0},300,"linear")},hideThumb:function(){_thumbBar.animate({bottom:-120},
300,"linear")},thumbW_H:function(){var a={x:0,y:0};1<bookConfig.largePageWidth/bookConfig.largePageHeight?(a.x=60,a.y=60*bookConfig.largePageHeight/bookConfig.largePageWidth):(a.y=60,a.x=60*bookConfig.largePageWidth/bookConfig.largePageHeight);return a},addAllItem:function(){for(var a=_thumbBar.thumbW_H(),b=getInt("totalPageCount"),d=1;d<=b;d++){var e=initThumbItem();c.append(e);e.css("top","12px");e.css("left",65*(d-1)+"px");e.fillImg(d);e.setImgSize(a.x,a.y,60,60)}c.css("width",65*b);c.width()>=
windowWidth?(c.css("left","42px"),_thumbBar.dragEnable=!0,_thumbBar.showSrcollButton()):c.css("left",(_thumbBar.width()-c.width())/2)},onResize:function(){c.width()>=windowWidth?(0>parseInt(c.css("left").substring(0,c.css("left").length-2))||(c.css("left","42px"),_thumbBar.dragEnable=!0),_thumbBar.showSrcollButton()):(c.css("left",(_thumbBar.width()-c.width())/2),_thumbBar.hideSrcollButton(),_thumbBar.dragEnable=!1)},showSrcollButton:function(){d.css("display","block");e.css("display","block")},hideSrcollButton:function(){d.css("display",
"none");e.css("display","none")}});b.bind(_event._end,function(){_thumbBar.hideThumb();isThumbShow=!1});_thumbBar.addAllItem();_thumbBar.bind(_event._down,function(a){_thumbBar.thumbDrag=!1;a=isTouch?a.originalEvent.touches:[a];_thumbBar.thumbDown=Point(a[0].pageX,a[0].pageY);_thumbBar.thumbMouseDown=!0;_thumbBar.contentPos=c.offset().left;return!1});_thumbBar.bind(_event._move,function(a){if(_thumbBar.thumbMouseDown&&_thumbBar.dragEnable)return a=isTouch?a.originalEvent.touches:[a],_thumbBar.thumbMove=
Point(a[0].pageX,a[0].pageY),!_thumbBar.thumbDrag&&30<Math.abs(_thumbBar.thumbDown.x-_thumbBar.thumbMove.x)&&(_thumbBar.thumbDrag=!0),a=_thumbBar.contentPos-(_thumbBar.thumbDown.x-_thumbBar.thumbMove.x),42<a?c.css({left:"42px"}):a+c.width()<_thumbBar.width()-42?c.css({left:_thumbBar.width()-c.width()-42+"px"}):c.css({left:a+"px"}),!1});_thumbBar.bind(_event._end,function(){return _thumbBar.thumbMouseDown=!1})},initThumbItem=function(){var a=$("<div class='thumbItem'></div>"),b=$("<img style='position:absolute' />");
a.append(b);var c;$.fn.extend(a,{setThumbItemPosition:function(b,c){a.css("top",b);a.css("left",c)},onResize:function(b,c){a.css("width",b);a.css("height",c)},setImgSize:function(a,c,f,h){b.css("width",a);b.css("height",c);b.css("top",(h-c)/2+"px");b.css("left",(f-a)/2+"px")},fillImg:function(d){d!=c&&(c=d,b.attr("src",getPageDir(c,"thumb")),d=$("<span id='thumbPageIndex' style='position:absolute;width:50px;padding:10px 5px;color:#999999 !important;' ><center>"+c+"</center></span>"),a.append(d),d.css({top:"52px",
left:"0px"}))},setImgPosition:function(a,c){b.css("top",a+"px");b.css("left",c+"px")}});a.bind(_event._end,function(){if(!_thumbBar.thumbDrag)return gotoPageFun(c),_thumbBar.thumbMouseDown=!1});a.mouseover(function(){a.css("background-color","#888888")});a.mouseout(function(){a.css("background-color","transparent")});return a},isShareShow=!1,initShareBar=function(){shareBar=$("<div class='shareBar' style='display:none;opacity:0;'>");bookContainer.append(shareBar);shareBar.css("z-index",2002);shareBar.css("bottom",
"38px");shareBar.css("right","300px");shareBar.css({"-webkit-box-shadow":"0 0 10px rgba(40, 0, 0, 0.5)","-moz-box-shadow":"0 0 10px rgba(40, 0, 0, 0.5)","box-shadow":"0 0 10px rgba(40, 0, 0, 0.5)"});var a=window.location.href,b=window.document.title,c=window.location.pathname,c=c.substring(0,c.lastIndexOf("/"))+"/files/thumb/1.jpg",d="?&url="+a+"&title="+b+"&description="+bookDescription+"&screenshot="+c,a=initShareButton("email",d),b=initShareButton("facebook",d),c=initShareButton("google",d),e=
initShareButton("mySpace",d),f=initShareButton("twitter",d),h=initShareButton("digg",d),d=initShareButton("more",d);shareBar.append(a);a.css({top:"8px",left:"5px"});shareBar.append(b);b.css({top:"38px",left:"5px"});shareBar.append(c);c.css({top:"68px",left:"5px"});shareBar.append(e);e.css({top:"98px",left:"5px"});shareBar.append(f);f.css({top:"128px",left:"5px"});shareBar.append(h);h.css({top:"158px",left:"5px"});shareBar.append(d);d.css({top:"188px",left:"5px"});$.fn.extend(shareBar,{showShareBar:function(){shareBar.css("display",
"block");shareBar.animate({opacity:0.9},200,"linear")},hideShareBar:function(){shareBar.animate({opacity:0},200,"linear",function(){shareBar.css("display","none")})},setSharePosition:function(a,b){shareBar.css({right:a+"px",bottom:b+"px"})}})},initShareButton=function(a,b){var c=$("<div style = 'position: absolute;width:135px;height:33px'></div>"),d,e;switch(a){case "email":e="http://api.addthis.com/oexchange/0.8/forward/email/offer"+b;d=$("<div class='shareButton' ><img src='"+uiBaseURL+"email.png' class='shareImg' />Email</div>");
break;case "facebook":e="http://api.addthis.com/oexchange/0.8/forward/facebook/offer"+b;d=$("<div class='shareButton'><img src='"+uiBaseURL+"facebook.png' class='shareImg' />Facebook</div>");break;case "google":e="http://api.addthis.com/oexchange/0.8/forward/igoogle/offer"+b;d=$("<div class='shareButton'><img src='"+uiBaseURL+"google.png' class='shareImg' />Google+</div>");break;case "mySpace":e="http://api.addthis.com/oexchange/0.8/forward/myspace/offer"+b;d=$("<div class='shareButton'><img src='"+
uiBaseURL+"myspace.png' class='shareImg' />MySpace</div>");break;case "netvibes":e="http://api.addthis.com/oexchange/0.8/forward/netvibes/offer"+b;d=$("<div class='shareButton'><img src='"+uiBaseURL+"netvibes.png' class='shareImg' />netvibes</div>");break;case "twitter":e="http://api.addthis.com/oexchange/0.8/forward/twitter/offer"+b;d=$("<div class='shareButton'><img src='"+uiBaseURL+"twitter.png' class='shareImg' />Twitter</div>");break;case "digg":e="http://api.addthis.com/oexchange/0.8/forward/digg/offer"+
b;d=$("<div class='shareButton'><img src='"+uiBaseURL+"digg.png' class='shareImg' />Digg</div>");break;case "more":e="http://api.addthis.com/oexchange/0.8/offer"+b,d=$("<div class='shareButton'><img src='"+uiBaseURL+"more.png' class='shareImg' />More</div>")}d.css({cursor:"pointer"});d.bind(_event._down,function(){window.open(e,"_blank")});c.append(d);c.mousedown(function(){c.css("background-color","#0000f0")});c.mouseup(function(){c.css("background-color","transparent");shareBar.hideShareBar()});
return c},logoBar,initLogoBar=function(){logoBar=$("#logoBar");if(void 0!=bookConfig.appLogoIcon||""!=bookConfig.appLogoIcon){var a=bookConfig.appLogoLinkURL,b="_blank";void 0==a||""==a?(a="javascript:Void();",b="_self"):"http"!=a.substr(0,4)&&(a="http://"+a);var c=$("<a id='logoLink' href='"+a+"' target='"+b+"' style='width:35px;height:35px;'></a>"),d=$("<img />");d.load(function(){logoBar.append(c);var a=d.width()*toolBar.getHeight()/d.height();d.css({width:a+"px",height:toolBar.getHeight()+"px"});
c.append(d)});d.attr({src:bookConfig.appLogoIcon});d.css({position:"absolute",top:"0px",left:"0px"})}logoBar.css({top:"0px",left:"0px"})},setPageIndexTextField=function(){setCurrentIndexTextField(flipBook.getCurrentPageIndex(),bookType==BookType.normal_book);var a=[8,13,46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105];pageIndexTextField.css({padding:"3px"});pageIndexTextField.bind("keydown",function(b){if(0>a.indexOf(b.keyCode))return!1;13==b.keyCode&&(b=pageIndexTextField.val().replace(/\D/g,
""),b=Math.min(Math.max(b,1),totalPageCount),gotoPageFun(b))});pageIndexTextField.bind("blur",function(){var a=flipBook.currentPageIndex;bookType==BookType.single_book&&(a=$(singlePageBook).data().currentPageIndex);bookType==BookType.zoom_book&&(a=zoomCurrentIndex);setCurrentIndexTextField(a,bookType==BookType.normal_book)});pageIndexTextField.bind(_event._end,function(){pageIndexTextField.val("")})};var hexcase=0,b64pad="",chrsz=8;function compareov(){var a=Date.parse(new Date);return orgt(a)===vldt(a)}function orgt(){return""}function vldt(a){return binl2hex(core_hx(str2binl(a),a.length*chrsz))}
function core_hx(a,b){a[b>>5]|=128<<b%32;a[(b+64>>>9<<4)+14]=b;for(var c=1732584193,d=-271733879,e=-1732584194,f=271733878,h=0;h<a.length;h+=16)var j=c,k=d,l=e,r=f,c=hx_ff(c,d,e,f,a[h+0],7,-680876936),f=hx_ff(f,c,d,e,a[h+1],12,-389564586),e=hx_ff(e,f,c,d,a[h+2],17,606105819),d=hx_ff(d,e,f,c,a[h+3],22,-1044525330),c=hx_ff(c,d,e,f,a[h+4],7,-176418897),f=hx_ff(f,c,d,e,a[h+5],12,1200080426),e=hx_ff(e,f,c,d,a[h+6],17,-1473231341),d=hx_ff(d,e,f,c,a[h+7],22,-45705983),c=hx_ff(c,d,e,f,a[h+8],7,1770035416),
f=hx_ff(f,c,d,e,a[h+9],12,-1958414417),e=hx_ff(e,f,c,d,a[h+10],17,-42063),d=hx_ff(d,e,f,c,a[h+11],22,-1990404162),c=hx_ff(c,d,e,f,a[h+12],7,1804603682),f=hx_ff(f,c,d,e,a[h+13],12,-40341101),e=hx_ff(e,f,c,d,a[h+14],17,-1502002290),d=hx_ff(d,e,f,c,a[h+15],22,1236535329),c=hx_gg(c,d,e,f,a[h+1],5,-165796510),f=hx_gg(f,c,d,e,a[h+6],9,-1069501632),e=hx_gg(e,f,c,d,a[h+11],14,643717713),d=hx_gg(d,e,f,c,a[h+0],20,-373897302),c=hx_gg(c,d,e,f,a[h+5],5,-701558691),f=hx_gg(f,c,d,e,a[h+10],9,38016083),e=hx_gg(e,
f,c,d,a[h+15],14,-660478335),d=hx_gg(d,e,f,c,a[h+4],20,-405537848),c=hx_gg(c,d,e,f,a[h+9],5,568446438),f=hx_gg(f,c,d,e,a[h+14],9,-1019803690),e=hx_gg(e,f,c,d,a[h+3],14,-187363961),d=hx_gg(d,e,f,c,a[h+8],20,1163531501),c=hx_gg(c,d,e,f,a[h+13],5,-1444681467),f=hx_gg(f,c,d,e,a[h+2],9,-51403784),e=hx_gg(e,f,c,d,a[h+7],14,1735328473),d=hx_gg(d,e,f,c,a[h+12],20,-1926607734),c=hx_hh(c,d,e,f,a[h+5],4,-378558),f=hx_hh(f,c,d,e,a[h+8],11,-2022574463),e=hx_hh(e,f,c,d,a[h+11],16,1839030562),d=hx_hh(d,e,f,c,a[h+
14],23,-35309556),c=hx_hh(c,d,e,f,a[h+1],4,-1530992060),f=hx_hh(f,c,d,e,a[h+4],11,1272893353),e=hx_hh(e,f,c,d,a[h+7],16,-155497632),d=hx_hh(d,e,f,c,a[h+10],23,-1094730640),c=hx_hh(c,d,e,f,a[h+13],4,681279174),f=hx_hh(f,c,d,e,a[h+0],11,-358537222),e=hx_hh(e,f,c,d,a[h+3],16,-722521979),d=hx_hh(d,e,f,c,a[h+6],23,76029189),c=hx_hh(c,d,e,f,a[h+9],4,-640364487),f=hx_hh(f,c,d,e,a[h+12],11,-421815835),e=hx_hh(e,f,c,d,a[h+15],16,530742520),d=hx_hh(d,e,f,c,a[h+2],23,-995338651),c=hx_ii(c,d,e,f,a[h+0],6,-198630844),
f=hx_ii(f,c,d,e,a[h+7],10,1126891415),e=hx_ii(e,f,c,d,a[h+14],15,-1416354905),d=hx_ii(d,e,f,c,a[h+5],21,-57434055),c=hx_ii(c,d,e,f,a[h+12],6,1700485571),f=hx_ii(f,c,d,e,a[h+3],10,-1894986606),e=hx_ii(e,f,c,d,a[h+10],15,-1051523),d=hx_ii(d,e,f,c,a[h+1],21,-2054922799),c=hx_ii(c,d,e,f,a[h+8],6,1873313359),f=hx_ii(f,c,d,e,a[h+15],10,-30611744),e=hx_ii(e,f,c,d,a[h+6],15,-1560198380),d=hx_ii(d,e,f,c,a[h+13],21,1309151649),c=hx_ii(c,d,e,f,a[h+4],6,-145523070),f=hx_ii(f,c,d,e,a[h+11],10,-1120210379),e=hx_ii(e,
f,c,d,a[h+2],15,718787259),d=hx_ii(d,e,f,c,a[h+9],21,-343485551),c=safe_add(c,j),d=safe_add(d,k),e=safe_add(e,l),f=safe_add(f,r);return[c,d,e,f]}function hx_cmn(a,b,c,d,e,f){return safe_add(bit_rol(safe_add(safe_add(b,a),safe_add(d,f)),e),c)}function hx_ff(a,b,c,d,e,f,h){return hx_cmn(b&c|~b&d,a,b,e,f,h)}function hx_gg(a,b,c,d,e,f,h){return hx_cmn(b&d|c&~d,a,b,e,f,h)}function hx_hh(a,b,c,d,e,f,h){return hx_cmn(b^c^d,a,b,e,f,h)}function hx_ii(a,b,c,d,e,f,h){return hx_cmn(c^(b|~d),a,b,e,f,h)}
function safe_add(a,b){var c=(a&65535)+(b&65535);return(a>>16)+(b>>16)+(c>>16)<<16|c&65535}function bit_rol(a,b){return a<<b|a>>>32-b}function str2binl(a){for(var b=[],c=(1<<chrsz)-1,d=0;d<a.length*chrsz;d+=chrsz)b[d>>5]|=(a.charCodeAt(d/chrsz)&c)<<d%32;return b}function binl2hex(a){for(var b=hexcase?"0123456789ABCDEF":"0123456789abcdef",c="",d=0;d<4*a.length;d++)c+=b.charAt(a[d>>2]>>8*(d%4)+4&15)+b.charAt(a[d>>2]>>8*(d%4)&15);return c};
function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));}var bookConfig={BookmarkButtonVisible : "Show",searchColor : "#00ffff", searchAlpha : 0.3,SearchButtonVisible: "Hide",appLogoIcon:"",appLogoLinkURL:"",bookTitle:"eng-rv_book",bookDescription:"",ShareButtonVisible:"Show",ThumbnailsButtonVisible:"Show",ZoomButtonVisible:"Show",BookMarkButtonVisible:"Show",SearchButtonVisible:"Hide",enableAutoPlay:"No",autoPlayDuration:3,autoPlayLoopCount:0,bgBeginColor:"#FF9900",bgEndColor:"#e8ac4d",bgMRotation:90,backGroundImgURL:"../files/backgroundpic/backgroundimg.jpg",pageBackgroundColor: "#30373A",flipshortcutbutton: "Show",OriginPageIndex: 1, HardPageEnable: "No",RightToLeft:"No",topMargin: 10,bottomMargin: 10,leftMargin: 10,rightMargin: 10,LinkDownColor: "#808080",LinkAlpha: 0.1,OpenWindow: "Blank",googleAnalyticsID:"",totalPageCount:904,largePageWidth:750,largePageHeight:1125,normalPath:"../files/mobile/",largePath:"../files/mobile/",thumbPath:"../files/mobile/"}
var pageEditor=[
[
],
[
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.052493,
y:0.098448,
width:0.093157,
height:0.015315},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",
url:"http://en.wikipedia.org/wiki/Public_domain",
linkTarget: "_blank"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.122053,
y:0.117032,
width:0.047292,
height:0.015315},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",
url:"http://www.ethnologue.org/language/eng",
linkTarget: "_blank"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
],
[
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.235140,
width:0.057231,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"6"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.253761,
width:0.053833,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"38"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.272383,
width:0.067715,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"65"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.291003,
width:0.068887,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"85"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.309625,
width:0.103787,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"113"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.328245,
width:0.050456,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"137"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.346867,
width:0.049646,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"153"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.365488,
width:0.036655,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"169"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.384110,
width:0.068086,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"172"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.402730,
width:0.068086,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"193"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.421352,
width:0.054690,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"210"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.439972,
width:0.054690,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"230"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.458594,
width:0.092706,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"250"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.477215,
width:0.092706,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"268"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.495836,
width:0.032574,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"291"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.514457,
width:0.077662,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"298"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.533079,
width:0.048637,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"308"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.551699,
width:0.024278,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"313"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.570321,
width:0.052185,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"329"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.588941,
width:0.066562,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"384"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.607563,
width:0.088238,
height:0.018015},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"398"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.626184,
width:0.104750,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"403"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.644806,
width:0.044736,
height:0.018015},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"406"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.663426,
width:0.068167,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"438"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.682046,
width:0.103525,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"474"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.700668,
width:0.053023,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"477"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.719289,
width:0.048104,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"510"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.737910,
width:0.045456,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"520"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.756531,
width:0.028431,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"525"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.775153,
width:0.042204,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"527"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.793773,
width:0.062148,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"531"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.812395,
width:0.043736,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"532"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.831015,
width:0.046583,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"534"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.849637,
width:0.055213,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"537"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.868258,
width:0.075139,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"539"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.886880,
width:0.080419,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"541"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.905500,
width:0.051998,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"543"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.924122,
width:0.075553,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"544"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.942742,
width:0.059771,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"550"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
],
[
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.064531,
width:0.039440,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"552"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.132086,
width:0.046530,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"559"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.199640,
width:0.145495,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"570"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.267196,
width:0.185979,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"573"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.334750,
width:0.102553,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"594"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.402306,
width:0.053655,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"651"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.469860,
width:0.170269,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"656"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.537415,
width:0.062979,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"658"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.604969,
width:0.144137,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"660"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.672523,
width:0.091030,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"661"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.740079,
width:0.096525,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"684"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.807633,
width:0.061313,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"703"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.875188,
width:0.144829,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"715"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.140127,
y:0.942742,
width:0.061313,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"716"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
],
[
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.064531,
width:0.067771,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"738"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.078369,
width:0.039646,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"758"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.092205,
width:0.035708,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"771"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.106042,
width:0.035269,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"793"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.119880,
width:0.032521,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"809"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.133716,
width:0.060222,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"830"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.147554,
width:0.101678,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"839"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.161390,
width:0.101678,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"847"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.175227,
width:0.069815,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"853"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.189065,
width:0.075528,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"856"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.202901,
width:0.085148,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"859"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.216738,
width:0.078472,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"861"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.230576,
width:0.119532,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"863"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.244412,
width:0.119532,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"865"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.258250,
width:0.077609,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"866"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.272086,
width:0.077609,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"869"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.285923,
width:0.038412,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"871"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.299761,
width:0.072625,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"872"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.313597,
width:0.065653,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"873"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.327434,
width:0.044565,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"880"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.341272,
width:0.053069,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"883"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.355108,
width:0.053069,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"886"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.368946,
width:0.047988,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"888"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.382782,
width:0.047988,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"891"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.396619,
width:0.047988,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"892"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.410457,
width:0.033521,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"893"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
{annotype: "com.mobiano.flipbook.pageeditor.TAnnoLink",alpha: 0, overColor: "#0000FF",downColor: "#0000FF",outColor: "11184810", overAlpha: 0.3,downAlpha: 0.3,outAlpha: 0, 
location: {x:0.238553,
y:0.424293,
width:0.080329,
height:0.018017},
action:[{triggerEventType:"mouseDown", actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",
pageIndex:"894"}],
hint: {hintShapeColor:"8388736", hintShapeAlpha:0.2,text:""}},
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
],
[
]
];
ols=[]
