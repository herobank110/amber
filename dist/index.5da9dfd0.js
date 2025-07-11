function e(e){return e&&e.__esModule?e.default:e}var t,n,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},s=i.parcelRequire4688;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},i.parcelRequire4688=s),s.register;var a={};t="undefined"!=typeof window?window:a,n=function(e,t){var n,i=[],r=Object.getPrototypeOf,o=i.slice,s=i.flat?function(e){return i.flat.call(e)}:function(e){return i.concat.apply([],e)},a=i.push,l=i.indexOf,c={},u=c.toString,B=c.hasOwnProperty,d=B.toString,F=d.call(Object),h={},f=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},p=function(e){return null!=e&&e===e.window},A=e.document,g={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var i,r,o=(n=n||A).createElement("script");if(o.text=e,t)for(i in g)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(r=t[i]||t.getAttribute&&t.getAttribute(i))&&o.setAttribute(i,r);n.head.appendChild(o).parentNode.removeChild(o)}function v(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[u.call(e)]||"object":typeof e}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var y="3.7.1",b=/HTML$/i,E=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new E.fn.init(e,t)};function C(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=v(e);return!(f(e)||p(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function w(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}E.fn=E.prototype={// The current version of jQuery being used
jquery:y,constructor:E,// The default length of a jQuery object is 0
length:0,toArray:function(){return o.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?o.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=E.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return E.each(this,e)},map:function(e){return this.pushStack(E.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:a,sort:i.sort,splice:i.splice},E.extend=E.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,// Skip the boolean and the target
s=arguments[a]||{},a++),"object"==typeof s||f(s)||(s={}),a===l&&(s=this,a--);a<l;a++)// Only deal with non-null/undefined values
if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&s!==i&&(c&&i&&(E.isPlainObject(i)||(r=Array.isArray(i)))?(n=s[t],o=r&&!Array.isArray(n)?[]:r||E.isPlainObject(n)?n:{},r=!1,// Never move original objects, clone them
s[t]=E.extend(c,o,i)):void 0!==i&&(s[t]=i));// Return the modified object
return s},E.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(y+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===u.call(e)&&(!(t=r(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=B.call(t,"constructor")&&t.constructor)&&d.call(n)===F))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(C(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},// Retrieve the text value of an array of DOM nodes
text:function(e){var t,n="",i=0,r=e.nodeType;if(!r)for(;t=e[i++];)n+=E.text(t);return 1===r||11===r?e.textContent:9===r?e.documentElement.textContent:3===r||4===r?e.nodeValue:n},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?E.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:l.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!b.test(t||n&&n.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var i=[],r=0,o=e.length,s=!n;r<o;r++)!t(e[r],r)!==s&&i.push(e[r]);return i},// arg is for internal usage only
map:function(e,t,n){var i,r,o=0,a=[];// Go through the array, translating each of the items to their new values
if(C(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&a.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r);// Flatten any nested arrays
return s(a)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:h}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=i[Symbol.iterator]),// Populate the class2type map
E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});var I=i.pop,x=i.sort,S=i.splice,k="[\\x20\\t\\r\\n\\f]",T=RegExp("^"+k+"+|((?:^|[^\\\\])(?:\\\\.)*)"+k+"+$","g");// Note: an element does not contain itself
E.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var Q=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function q(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}E.escapeSelector=function(e){return(e+"").replace(Q,q)},function(){var t,n,r,s,c,u,d,F,f,p,g=a,m=E.expando,v=0,y=0,b=ee(),C=ee(),Q=ee(),q=ee(),R=function(e,t){return e===t&&(c=!0),0},U="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
V="(?:\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",L="\\["+k+"*("+V+")(?:"+k+// Operator (capture 2)
"*([*^$|!~]?=)"+k+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+V+"))|)"+k+"*\\]",P=":("+V+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+L+")*)|.*)\\)|)",M=RegExp(k+"+","g"),z=RegExp("^"+k+"*,"+k+"*"),K=RegExp("^"+k+"*([>+~]|"+k+")"+k+"*"),D=RegExp(k+"|>"),Z=new RegExp(P),W=RegExp("^"+V+"$"),N={ID:RegExp("^#("+V+")"),CLASS:RegExp("^\\.("+V+")"),TAG:RegExp("^("+V+"|[*])"),ATTR:RegExp("^"+L),PSEUDO:RegExp("^"+P),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+k+"*(even|odd|(([+-]|)(\\d*)n|)"+k+"*(?:([+-]|)"+k+"*(\\d+)|))"+k+"*\\)|)","i"),bool:RegExp("^(?:"+U+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+k+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+k+"*((?:-\\d)?\\d*)"+k+"*\\)|)(?=[^-]|$)","i")},O=/^(?:input|select|textarea|button)$/i,j=/^h\d$/i,H=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
X=RegExp("\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\([^\\r\\n\\f])","g"),J=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
Y=function(){es()},_=eu(function(e){return!0===e.disabled&&w(e,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{g.apply(i=o.call(A.childNodes),A.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
i[A.childNodes.length].nodeType}catch(e){g={apply:function(e,t){a.apply(e,o.call(t))},call:function(e){a.apply(e,o.call(arguments,1))}}}function $(e,t,n,i){var r,o,s,a,l,c,B,d=t&&t.ownerDocument,p=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&(es(t),t=t||u,F)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==p&&(l=H.exec(e))){// ID selector
if(r=l[1]){// Document context
if(9===p){if(!(s=t.getElementById(r)))return n;if(s.id===r)return g.call(n,s),n;// Element context
}else // getElementById can match elements by name instead of ID
if(d&&(s=d.getElementById(r))&&$.contains(t,s)&&s.id===r)return g.call(n,s),n}else if(l[2])return g.apply(n,t.getElementsByTagName(e)),n;else if((r=l[3])&&t.getElementsByClassName)return g.apply(n,t.getElementsByClassName(r)),n}// Take advantage of querySelectorAll
if(!q[e+" "]&&(!f||!f.test(e))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(B=e,d=t,1===p&&(D.test(e)||K.test(e))){for(// Expand context for sibling selectors
(d=G.test(e)&&eo(t.parentNode)||t)==t&&h.scope||((a=t.getAttribute("id"))?a=E.escapeSelector(a):t.setAttribute("id",a=m)),o=// Prefix every selector in the list
(c=el(e)).length;o--;)c[o]=(a?"#"+a:":scope")+" "+ec(c[o]);B=c.join(",")}try{return g.apply(n,d.querySelectorAll(B)),n}catch(t){q(e,!0)}finally{a===m&&t.removeAttribute("id")}}}// All others
return eh(e.replace(T,"$1"),t,n,i)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ee(){var e=[];function t(i,r){return e.push(i+" ")>n.cacheLength&&delete t[e.shift()],t[i+" "]=r}return t}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function et(e){return e[m]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function en(e){var t=u.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function ei(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in t)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||// Where there is no isDisabled, check manually
!e!==t.isDisabled&&_(t)===e:t.disabled===e);return"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function er(e){return et(function(t){return t=+t,et(function(n,i){// Match elements found at the specified indexes
for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function eo(e){return e&&void 0!==e.getElementsByTagName&&e}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function es(e){var t,i=e?e.ownerDocument||e:A;return i!=u&&9===i.nodeType&&i.documentElement&&(d=// Update global variables
(u=i).documentElement,F=!E.isXMLDoc(u),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
p=d.matches||d.webkitMatchesSelector||d.msMatchesSelector,d.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
A!=u&&(t=u.defaultView)&&t.top!==t&&t.addEventListener("unload",Y),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
h.getById=en(function(e){return d.appendChild(e).id=E.expando,!u.getElementsByName||!u.getElementsByName(E.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
h.disconnectedMatch=en(function(e){return p.call(e,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
h.scope=en(function(){return u.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
h.cssHas=en(function(){try{return u.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),h.getById?(n.filter.ID=function(e){var t=e.replace(X,J);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&F){var n=t.getElementById(e);return n?[n]:[]}}):(n.filter.ID=function(e){var t=e.replace(X,J);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
n.find.ID=function(e,t){if(void 0!==t.getElementById&&F){var n,i,r,o=t.getElementById(e);if(o){if(// Verify the id attribute
(n=o.getAttributeNode("id"))&&n.value===e)return[o];for(// Fall back on getElementsByName
r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),// Tag
n.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},// Class
n.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&F)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
f=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
en(function(e){var t;d.appendChild(e).innerHTML="<a id='"+m+"' href='' disabled='disabled'></a><select id='"+m+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||f.push("\\["+k+"*(?:value|"+U+")"),e.querySelectorAll("[id~="+m+"-]").length||f.push("~="),e.querySelectorAll("a#"+m+"+*").length||f.push(".#.+[+~]"),e.querySelectorAll(":checked").length||f.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(t=u.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
d.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&f.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(t=u.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||f.push("\\["+k+"*name"+k+"*="+k+"*(?:''|\"\")")}),h.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
f.push(":has"),f=f.length&&new RegExp(f.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
R=function(e,t){// Flag for duplicate removal
if(e===t)return c=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!h.sortDetached&&t.compareDocumentPosition(e)===n?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
e===u||e.ownerDocument==A&&$.contains(A,e)?-1:t===u||t.ownerDocument==A&&$.contains(A,t)?1:s?l.call(s,e)-l.call(s,t):0:4&n?-1:1)}),u}// Add button/input type pseudos
for(t in $.matches=function(e,t){return $(e,null,null,t)},$.matchesSelector=function(e,t){if(es(e),F&&!q[t+" "]&&(!f||!f.test(t)))try{var n=p.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||h.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){q(t,!0)}return $(t,u,null,[e]).length>0},$.contains=function(e,t){return(e.ownerDocument||e)!=u&&es(e),E.contains(e,t)},$.attr=function(e,t){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(e.ownerDocument||e)!=u&&es(e);var i=n.attrHandle[t.toLowerCase()],r=i&&B.call(n.attrHandle,t.toLowerCase())?i(e,t,!F):void 0;return void 0!==r?r:e.getAttribute(t)},$.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */E.uniqueSort=function(e){var t,n=[],i=0,r=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
c=!h.sortStable,s=!h.sortStable&&o.call(e,0),x.call(e,R),c){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)S.call(e,n[i],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
s=null,e)},E.fn.uniqueSort=function(){return this.pushStack(E.uniqueSort(o.apply(this)))},(n=E.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:et,match:N,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(X,J),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(X,J),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||$.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&$.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return N.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Z.test(n)&&// Get excess from tokenize (recursively)
(t=el(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(X,J).toLowerCase();return"*"===e?function(){return!0}:function(e){return w(e,t)}},CLASS:function(e){var t=b[e+" "];return t||(t=RegExp("(^|"+k+")"+e+"("+k+"|$)"),b(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(i){var r=$.attr(i,e);return null==r?"!="===t:!t||((r+="","="===t)?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(M," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var c,u,B,d,F,h=o!==s?"nextSibling":"previousSibling",f=t.parentNode,p=a&&t.nodeName.toLowerCase(),A=!l&&!a,g=!1;if(f){// :(first|last|only)-(child|of-type)
if(o){for(;h;){for(B=t;B=B[h];)if(a?w(B,p):1===B.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
F=h="only"===e&&!F&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(F=[s?f.firstChild:f.lastChild],s&&A){for(g=(d=(c=// Seek `elem` from a previously-cached index
(u=f[m]||(f[m]={}))[e]||[])[0]===v&&c[1])&&c[2],B=d&&f.childNodes[d];B=++d&&B&&B[h]||// Fallback to seeking `elem` from the start
(g=d=0)||F.pop();)if(1===B.nodeType&&++g&&B===t){u[e]=[v,d,g];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(A&&(g=d=(c=(u=t[m]||(t[m]={}))[e]||[])[0]===v&&c[1]),!1===g)// Use the same loop as above to seek `elem` from the start
for(;(B=++d&&B&&B[h]||(g=d=0)||F.pop())&&(!((a?w(B,p):1===B.nodeType)&&++g)||(A&&((u=B[m]||(B[m]={}))[e]=[v,g]),B!==t)););return(// Incorporate the offset, then check against cycle size
(g-=r)===i||g%i==0&&g/i>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,r=n.pseudos[e]||n.setFilters[e.toLowerCase()]||$.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
r[m]?r(t):r.length>1?(i=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?et(function(e,n){for(var i,o=r(e,t),s=o.length;s--;)i=l.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,i)}):r)}},pseudos:{// Potentially complex pseudos
not:et(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=eF(e.replace(T,"$1"));return i[m]?et(function(e,t,n,r){// Match elements unmatched by `matcher`
for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
t[0]=null,!n.pop()}}),has:et(function(e){return function(t){return $(e,t).length>0}}),contains:et(function(e){return e=e.replace(X,J),function(t){return(t.textContent||E.text(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:et(function(e){return W.test(e||"")||$.error("unsupported lang: "+e),e=e.replace(X,J).toLowerCase(),function(t){var n;do if(n=F?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return u.activeElement}catch(e){}}()&&u.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:ei(!1),disabled:ei(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return w(e,"input")&&!!e.checked||w(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},// Element/input types
header:function(e){return j.test(e.nodeName)},input:function(e){return O.test(e.nodeName)},button:function(e){return w(e,"input")&&"button"===e.type||w(e,"button")},text:function(e){var t;return w(e,"input")&&"text"===e.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:er(function(){return[0]}),last:er(function(e,t){return[t-1]}),eq:er(function(e,t,n){return[n<0?n+t:n]}),even:er(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:er(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:er(function(e,t,n){var i;for(i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e}),gt:er(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(e){return function(t){return w(t,"input")&&t.type===e}}(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(e){return function(t){return(w(t,"input")||w(t,"button"))&&t.type===e}}(t);// Easy API for creating new setFilters
function ea(){}function el(e,t){var i,r,o,s,a,l,c,u=C[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=n.preFilter;a;){// Filters
for(s in(!i||(r=z.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),l.push(o=[])),i=!1,(r=K.exec(a))&&(i=r.shift(),o.push({value:i,// Cast descendant combinators to space
type:r[0].replace(T," ")}),a=a.slice(i.length)),n.filter)(r=N[s].exec(a))&&(!c[s]||(r=c[s](r)))&&(i=r.shift(),o.push({value:i,type:s,matches:r}),a=a.slice(i.length));if(!i)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
t?a.length:a?$.error(e):C(e,l).slice(0))}function ec(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function eu(e,t,n){var i=t.dir,r=t.next,o=r||i,s=n&&"parentNode"===o,a=y++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,r);return!1}:function(t,n,l){var c,u,B=[v,a];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||s){if(u=t[m]||(t[m]={}),r&&w(t,r))t=t[i]||t;else{if((c=u[o])&&c[0]===v&&c[1]===a)return B[2]=c[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
u[o]=B,B[2]=e(t,n,l))return!0}}return!1}}function eB(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function ed(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(o=e[a])&&(!n||n(o,i,r))&&(s.push(o),c&&t.push(a));return s}function eF(e,t/* Internal Use Only */){var i,o,s,a,c=[],B=[],d=Q[e+" "];if(!d){for(t||(t=el(e)),a=t.length;a--;)(d=function e(t){for(var i,o,s,a=t.length,c=n.relative[t[0].type],u=c||n.relative[" "],B=c?1:0,d=eu(function(e){return e===i},u,!0),F=eu(function(e){return l.call(i,e)>-1},u,!0),h=[function(e,t,n){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var o=!c&&(n||t!=r)||((i=t).nodeType?d(e,t,n):F(e,t,n));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
i=null,o)}];B<a;B++)if(o=n.relative[t[B].type])h=[eu(eB(h),o)];else{// Return special upon seeing a positional matcher
if((o=n.filter[t[B].type].apply(null,t[B].matches))[m]){for(// Find the next relative operator (if any) for proper handling
s=++B;s<a&&!n.relative[t[s].type];s++);return function e(t,n,i,r,o,s){return r&&!r[m]&&(r=e(r)),o&&!o[m]&&(o=e(o,s)),et(function(e,s,a,c){var u,B,d,F,h=[],f=[],p=s.length,A=e||function(e,t,n){for(var i=0,r=t.length;i<r;i++)$(e,t[i],n);return n}(n||"*",a.nodeType?[a]:a,[]),m=t&&(e||!n)?ed(A,h,t,a,c):A;// Apply postFilter
if(i?// Find primary matches
i(m,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
F=o||(e?t:p||r)?[]:s,a,c):F=m,r)for(u=ed(F,f),r(u,[],a,c),// Un-match failing elements by moving them back to matcherIn
B=u.length;B--;)(d=u[B])&&(F[f[B]]=!(m[f[B]]=d));if(e){if(o||t){if(o){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
u=[],B=F.length;B--;)(d=F[B])&&u.push(m[B]=d);o(null,F=[],u,c)}for(// Move matched elements from seed to results to keep them synchronized
B=F.length;B--;)(d=F[B])&&(u=o?l.call(e,d):h[B])>-1&&(e[u]=!(s[u]=d))}}else F=ed(F===s?F.splice(p,F.length):F),o?o(null,s,F,c):g.apply(s,F)})}(B>1&&eB(h),B>1&&ec(t.slice(0,B-1).concat({value:" "===t[B-2].type?"*":""})).replace(T,"$1"),o,B<s&&e(t.slice(B,s)),s<a&&e(t=t.slice(s)),s<a&&ec(t))}h.push(o)}return eB(h)}(t[a]))[m]?c.push(d):B.push(d);// Save selector and tokenization
// Cache the compiled function
(d=Q(e,(i=c.length>0,o=B.length>0,s=function(e,t,s,a,l){var d,h,f,p=0,A="0",m=e&&[],y=[],b=r,C=e||o&&n.find.TAG("*",l),w=v+=null==b?1:Math.random()||.1,x=C.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(l&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(r=t==u||t||l);A!==x&&null!=(d=C[A]);A++){if(o&&d){for(h=0,t||d.ownerDocument==u||(es(d),s=!F);f=B[h++];)if(f(d,t||u,s)){g.call(a,d);break}l&&(v=w)}// Track unmatched elements for set filters
i&&((d=!f&&d)&&p--,e&&m.push(d))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
p+=A,i&&A!==p){for(h=0;f=c[h++];)f(m,y,t,s);if(e){// Reintegrate element matches to eliminate the need for sorting
if(p>0)for(;A--;)m[A]||y[A]||(y[A]=I.call(a));// Discard index placeholder values to get only actual matches
y=ed(y)}// Add matches to results
g.apply(a,y),l&&!e&&y.length>0&&p+c.length>1&&E.uniqueSort(a)}return l&&(v=w,r=b),m},i?et(s):s))).selector=e}return d}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function eh(e,t,i,r){var o,s,a,l,c,u="function"==typeof e&&e,B=!r&&el(e=u.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(i=i||[],1===B.length){if(// Reduce context if the leading compound selector is an ID
(s=B[0]=B[0].slice(0)).length>2&&"ID"===(a=s[0]).type&&9===t.nodeType&&F&&n.relative[s[1].type]){if(!(t=(n.find.ID(a.matches[0].replace(X,J),t)||[])[0]))return i;u&&(t=t.parentNode),e=e.slice(s.shift().value.length)}for(// Fetch a seed set for right-to-left matching
o=N.needsContext.test(e)?0:s.length;// Abort if we hit a combinator
o--&&(a=s[o],!n.relative[l=a.type]);)if((c=n.find[l])&&(r=c(a.matches[0].replace(X,J),G.test(s[0].type)&&eo(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
s.splice(o,1),!(e=r.length&&ec(s)))return g.apply(i,r),i;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(u||eF(e,B))(r,t,!F,i,!t||G.test(e)&&eo(t.parentNode)||t),i)}ea.prototype=n.filters=n.pseudos,n.setFilters=new ea,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
h.sortStable=m.split("").sort(R).join("")===m,// Initialize against the default document
es(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
h.sortDetached=en(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(u.createElement("fieldset"))}),E.find=$,// Deprecated
E.expr[":"]=E.expr.pseudos,E.unique=E.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
$.compile=eF,$.select=eh,$.setDocument=es,$.tokenize=el,$.escape=E.escapeSelector,$.getText=E.text,$.isXML=E.isXMLDoc,$.selectors=E.expr,$.support=E.support,$.uniqueSort=E.uniqueSort;/* eslint-enable */}();var R=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&E(e).is(n))break;i.push(e)}return i},U=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},V=E.expr.match.needsContext,L=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function P(e,t,n){return f(t)?E.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?E.grep(e,function(e){return e===t!==n}):"string"!=typeof t?E.grep(e,function(e){return l.call(t,e)>-1!==n}):E.filter(t,e,n)}E.filter=function(e,t,n){var i=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType)?E.find.matchesSelector(i,e)?[i]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<i;t++)if(E.contains(r[t],this))return!0}));for(t=0,n=this.pushStack([]);t<i;t++)E.find(e,r[t],n);return i>1?E.uniqueSort(n):n},filter:function(e){return this.pushStack(P(this,e||[],!1))},not:function(e){return this.pushStack(P(this,e||[],!0))},is:function(e){return!!P(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&V.test(e)?E(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var M,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(E.fn.init=function(e,t,n){var i,r;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||M,"string"==typeof e){// Match html or make sure no context is specified for #id
if((i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:z.exec(e))&&(i[1]||!t)){// HANDLE: $(html) -> $(array)
if(!i[1])return(r=A.getElementById(i[2]))&&(// Inject the element directly into the jQuery object
this[0]=r,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof E?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
E.merge(this,E.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:A,!0)),L.test(i[1])&&E.isPlainObject(t))for(i in t)f(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):f(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,// Initialize central reference
M=E(A);var K=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};function Z(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&E(e);// Positional selectors never match, since there's no _selection_ context
if(!V.test(e)){for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}}return this.pushStack(o.length>1?E.uniqueSort(o):o)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?l.call(E(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return R(e,"parentNode")},parentsUntil:function(e,t,n){return R(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return R(e,"nextSibling")},prevAll:function(e){return R(e,"previousSibling")},nextUntil:function(e,t,n){return R(e,"nextSibling",n)},prevUntil:function(e,t,n){return R(e,"previousSibling",n)},siblings:function(e){return U((e.parentNode||{}).firstChild,e)},children:function(e){return U(e.firstChild)},contents:function(e){return null!=e.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
r(e.contentDocument)?e.contentDocument:(w(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(e,t){E.fn[e]=function(n,i){var r=E.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=E.filter(i,r)),this.length>1&&(D[e]||E.uniqueSort(r),K.test(e)&&r.reverse()),this.pushStack(r)}});var W=/[^\x20\t\r\n\f]+/g;function N(e){return e}function O(e){throw e}function j(e,t,n,i){var r;try{// Check for promise aspect first to privilege synchronous behavior
e&&f(r=e.promise)?r.call(e).done(t).fail(n):e&&f(r=e.then)?r.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(i));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */E.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?(t=e,n={},E.each(t.match(W)||[],function(e,t){n[t]=!0}),n):E.extend({},e);var t,n,i,r,o,s,a=[],l=[],c=-1,u=function(){for(// Enforce single-firing
s=s||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
o=i=!0;l.length;c=-1)for(r=l.shift();++c<a.length;)!1===a[c].apply(r[0],r[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
c=a.length,r=!1);e.memory||(r=!1),i=!1,s&&(a=r?[]:"")},B={// Add a callback or a collection of callbacks to the list
add:function(){return a&&(r&&!i&&(c=a.length-1,l.push(r)),function t(n){E.each(n,function(n,i){f(i)?e.unique&&B.has(i)||a.push(i):i&&i.length&&"string"!==v(i)&&t(i)})}(arguments),r&&!i&&u()),this},// Remove a callback from the list
remove:function(){return E.each(arguments,function(e,t){for(var n;(n=E.inArray(t,a,n))>-1;)a.splice(n,1),n<=c&&c--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?E.inArray(e,a)>-1:a.length>0},// Remove all callbacks from the list
empty:function(){return a&&(a=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return s=l=[],a=r="",this},disabled:function(){return!a},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return s=l=[],r||i||(a=r=""),this},locked:function(){return!!s},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),i||u()),this},// Call all the callbacks with the given arguments
fire:function(){return B.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return B},E.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return E.Deferred(function(t){E.each(n,function(n,i){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var r=f(e[i[4]])&&e[i[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[i[1]](function(){var e=r&&r.apply(this,arguments);e&&f(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,r?[e]:arguments)})}),e=null}).promise()},then:function(t,i,r){var o=0;function s(t,n,i,r){return function(){var a=this,l=arguments,c=function(){var e,c;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<o)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=i.apply(a,l))===n.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
f(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
c=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then)?r?c.call(e,s(o,n,N,r),s(o,n,O,r)):(// ...and disregard older resolution values
o++,c.call(e,s(o,n,N,r),s(o,n,O,r),s(o,n,N,n.notifyWith))):(i!==N&&(a=void 0,l=[e]),// Process the value(s)
// Default process is resolve
(r||n.resolveWith)(a,l))}},u=r?c:function(){try{c()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,u.error),t+1>=o&&(i!==O&&(a=void 0,l=[e]),n.rejectWith(a,l))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?u():(E.Deferred.getErrorHook?u.error=E.Deferred.getErrorHook():E.Deferred.getStackHook&&(u.error=E.Deferred.getStackHook()),e.setTimeout(u))}}return E.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(s(0,e,f(r)?r:N,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(s(0,e,f(t)?t:N)),// rejected_handlers.add( ... )
n[2][3].add(s(0,e,f(i)?i:O))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?E.extend(e,r):r}},o={};// All done!
return(// Add list-specific methods
E.each(n,function(e,t){var s=t[2],a=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
r[t[1]]=s.add,a&&s.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
i=a},// fulfilled_callbacks.disable
n[3-e][2].disable,// fulfilled_handlers.disable
n[3-e][3].disable,n[0][2].lock,n[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
s.add(t[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[t[0]+"With"]=s.fireWith}),// Make the deferred a promise
r.promise(o),t&&t.call(o,o),o)},// Deferred helper
when:function(e){var t=arguments.length,n=t,i=Array(n),r=o.call(arguments),s=E.Deferred(),a=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?o.call(arguments):n,--t||s.resolveWith(i,r)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(j(e,s.done(a(n)).resolve,s.reject,!t),"pending"===s.state()||f(r[n]&&r[n].then)))return s.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)j(r[n],a(n),s.reject);return s.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
E.Deferred.exceptionHook=function(t,n){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
e.console&&e.console.warn&&t&&H.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},E.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var G=E.Deferred();// The ready event handler and self cleanup method
function X(){A.removeEventListener("DOMContentLoaded",X),e.removeEventListener("load",X),E.ready()}E.fn.ready=function(e){return G.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){E.readyException(e)}),this},E.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
!(!0===e?--E.readyWait:E.isReady)&&(// Remember that the DOM is ready
E.isReady=!0,!0!==e&&--E.readyWait>0||// If there are functions bound, to execute
G.resolveWith(A,[E]))}}),E.ready.then=G.then,"complete"!==A.readyState&&("loading"===A.readyState||A.documentElement.doScroll)?(// Use the handy event callback
A.addEventListener("DOMContentLoaded",X),// A fallback to window.onload, that will always work
e.addEventListener("load",X)):e.setTimeout(E.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var J=function(e,t,n,i,r,o,s){var a=0,l=e.length,c=null==n;// Sets many values
if("object"===v(n))for(a in r=!0,n)J(e,t,a,n[a],!0,o,s);else if(void 0!==i&&(r=!0,f(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(E(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:c?t.call(e):l?t(e[0],n):o},Y=/^-ms-/,_=/-([a-z])/g;// Used by camelCase as callback to replace()
function $(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function ee(e){return e.replace(Y,"ms-").replace(_,$)}var et=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function en(){this.expando=E.expando+en.uid++}en.uid=1,en.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},et(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)r[ee(t)]=n;else for(i in t)r[ee(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ee(t)]},access:function(e,t,n){return(// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t))},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t)for(n=(// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(ee):((t=ee(t))in i)?[t]:t.match(W)||[]).length;n--;)delete i[t[n]];// Remove the expando if there's no more data
(void 0===t||E.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var ei=new en,er=new en,eo=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,es=/[A-Z]/g;function ea(e,t,n){var i,r;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(i="data-"+t.replace(es,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{r=n,n="true"===r||"false"!==r&&("null"===r?null:r===+r+""?+r:eo.test(r)?JSON.parse(r):r)}catch(e){}// Make sure we set the data so it isn't changed later
er.set(e,t,n)}else n=void 0}return n}E.extend({hasData:function(e){return er.hasData(e)||ei.hasData(e)},data:function(e,t,n){return er.access(e,t,n)},removeData:function(e,t){er.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return ei.access(e,t,n)},_removeData:function(e,t){ei.remove(e,t)}}),E.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;// Gets all values
if(void 0===e){if(this.length&&(r=er.get(o),1===o.nodeType&&!ei.get(o,"hasDataAttrs"))){for(n=s.length;n--;)// The attrs elements can be null (trac-14894)
s[n]&&0===(i=s[n].name).indexOf("data-")&&ea(o,i=ee(i.slice(5)),r[i]);ei.set(o,"hasDataAttrs",!0)}return r}return(// Sets multiple values
"object"==typeof e?this.each(function(){er.set(this,e)}):J(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=er.get(o,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=ea(o,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
er.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){er.remove(this,e)})}}),E.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=ei.get(e,t),n&&(!i||Array.isArray(n)?i=ei.access(e,t,E.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),i=n.length,r=n.shift(),o=E._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete o.stop,r.call(e,function(){E.dequeue(e,t)},o)),!i&&o&&o.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return ei.get(e,n)||ei.access(e,n,{empty:E.Callbacks("once memory").add(function(){ei.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?E.queue(this[0],e):void 0===t?this:this.each(function(){var n=E.queue(this,e,t);// Ensure a hooks for this queue
E._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&E.dequeue(this,e)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,i=1,r=E.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=ei.get(o[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var el=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ec=RegExp("^(?:([+-])=|)("+el+")([a-z%]*)$","i"),eu=["Top","Right","Bottom","Left"],eB=A.documentElement,ed=function(e){return E.contains(e.ownerDocument,e)},eF={composed:!0};eB.getRootNode&&(ed=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(eF)===e.ownerDocument});var eh=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
ed(e)&&"none"===E.css(e,"display")};function ef(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return E.css(e,t,"")},l=a(),c=n&&n[3]||(E.cssNumber[t]?"":"px"),u=e.nodeType&&(E.cssNumber[t]||"px"!==c&&+l)&&ec.exec(E.css(e,t));if(u&&u[3]!==c){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
c=c||u[3],// Iteratively approximate from a nonzero starting point
u=+l||1;s--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
E.style(e,t,u+c),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),u/=o;u*=2,E.style(e,t,u+c),// Make sure we update the tween properties later on
n=n||[]}return n&&(u=+u||+l||0,// Apply relative offset (+=/-=) if specified
r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}var ep={};function eA(e,t){// Determine new display value for elements that need to change
for(var n,i,r=[],o=0,s=e.length;o<s;o++)(i=e[o]).style&&(n=i.style.display,t?("none"!==n||(r[o]=ei.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&eh(i)&&(r[o]=function(e){var t,n=e.ownerDocument,i=e.nodeName,r=ep[i];return r||(t=n.body.appendChild(n.createElement(i)),r=E.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),ep[i]=r),r}(i))):"none"!==n&&(r[o]="none",// Remember what we're overwriting
ei.set(i,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<s;o++)null!=r[o]&&(e[o].style.display=r[o]);return e}E.fn.extend({show:function(){return eA(this,!0)},hide:function(){return eA(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){eh(this)?E(this).show():E(this).hide()})}});var eg=/^(?:checkbox|radio)$/i,em=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ev=/^$|^module$|\/(?:java|ecma)script/i;e9=A.createDocumentFragment().appendChild(A.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(e7=A.createElement("input")).setAttribute("type","radio"),e7.setAttribute("checked","checked"),e7.setAttribute("name","t"),e9.appendChild(e7),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
h.checkClone=e9.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
e9.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e9.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
e9.innerHTML="<option></option>",h.option=!!e9.lastChild;// We have to close these tags to support XHTML (trac-13200)
var ey={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function eb(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&w(e,t))?E.merge([e],n):n}// Mark scripts as having already been evaluated
function eE(e,t){for(var n=0,i=e.length;n<i;n++)ei.set(e[n],"globalEval",!t||ei.get(t[n],"globalEval"))}ey.tbody=ey.tfoot=ey.colgroup=ey.caption=ey.thead,ey.th=ey.td,h.option||(ey.optgroup=ey.option=[1,"<select multiple='multiple'>","</select>"]);var eC=/<|&#?\w+;/;function ew(e,t,n,i,r){for(var o,s,a,l,c,u=t.createDocumentFragment(),B=[],d=0,F=e.length;d<F;d++)if((o=e[d])||0===o){// Add nodes directly
if("object"===v(o))// push.apply(_, arraylike) throws on ancient WebKit
E.merge(B,o.nodeType?[o]:o);else if(eC.test(o)){for(s=s||u.appendChild(t.createElement("div")),a=ey[(em.exec(o)||["",""])[1].toLowerCase()]||ey._default,s.innerHTML=a[1]+E.htmlPrefilter(o)+a[2],// Descend through wrappers to the right content
c=a[0];c--;)s=s.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
E.merge(B,s.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(s=u.firstChild).textContent=""}else B.push(t.createTextNode(o))}for(// Remove wrapper from fragment
u.textContent="",d=0;o=B[d++];){// Skip elements already in the context collection (trac-4087)
if(i&&E.inArray(o,i)>-1){r&&r.push(o);continue}// Capture executables
if(l=ed(o),// Append to fragment
s=eb(u.appendChild(o),"script"),l&&eE(s),n)for(c=0;o=s[c++];)ev.test(o.type||"")&&n.push(o)}return u}var eI=/^([^.]*)(?:\.(.+)|)/;function ex(){return!0}function eS(){return!1}function ek(e,t,n,i,r,o){var s,a;// Types can be a map of types/handlers
if("object"==typeof t){for(a in"string"!=typeof n&&(// ( types-Object, data )
i=i||n,n=void 0),t)ek(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(// ( types, fn )
r=n,i=n=void 0):null==r&&("string"==typeof n?(// ( types, selector, fn )
r=i,i=void 0):(// ( types, data, fn )
r=i,i=n,n=void 0)),!1===r)r=eS;else if(!r)return e;return 1===o&&(s=r,// Use same guid so caller can remove using origFn
(r=function(e){return(// Can use an empty set, since event contains the info
E().off(e),s.apply(this,arguments))}).guid=s.guid||(s.guid=E.guid++)),e.each(function(){E.event.add(this,t,r,i,n)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function eT(e,t,n){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!n){void 0===ei.get(e,t)&&E.event.add(e,t,ex);return}// Register the controller as a special universal handler for all event namespaces
ei.set(e,t,!1),E.event.add(e,t,{namespace:!1,handler:function(e){var n,i=ei.get(this,t);if(1&e.isTrigger&&this[t]){// Interrupt processing of the outer synthetic .trigger()ed event
if(i)(E.event.special[t]||{}).delegateType&&e.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
i=o.call(arguments),ei.set(this,t,i),// Trigger the native event and capture its result
this[t](),n=ei.get(this,t),ei.set(this,t,!1),i!==n)return(// Cancel the outer synthetic event
e.stopImmediatePropagation(),e.preventDefault(),n)}else i&&(// ...and capture the result
ei.set(this,t,E.event.trigger(i[0],i.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
e.stopPropagation(),e.isImmediatePropagationStopped=ex)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */E.event={global:{},add:function(e,t,n,i,r){var o,s,a,l,c,u,B,d,F,h,f,p=ei.get(e);// Only attach events to objects that accept data
if(et(e))for(n.handler&&(n=(o=n).handler,r=o.selector),r&&E.find.matchesSelector(eB,r),n.guid||(n.guid=E.guid++),(l=p.events)||(l=p.events=Object.create(null)),(s=p.handle)||(s=p.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return E.event.triggered!==t.type?E.event.dispatch.apply(e,arguments):void 0}),c=// Handle multiple events separated by a space
(t=(t||"").match(W)||[""]).length;c--;)// There *must* be a type, no attaching namespace-only handlers
F=f=(a=eI.exec(t[c])||[])[1],h=(a[2]||"").split(".").sort(),F&&(// If event changes its type, use the special event handlers for the changed type
B=E.event.special[F]||{},// If selector defined, determine special event api type, otherwise given type
F=(r?B.delegateType:B.bindType)||F,// Update special based on newly reset type
B=E.event.special[F]||{},// handleObj is passed to all event handlers
u=E.extend({type:F,origType:f,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&E.expr.match.needsContext.test(r),namespace:h.join(".")},o),(d=l[F])||((d=l[F]=[]).delegateCount=0,(!B.setup||!1===B.setup.call(e,i,h,s))&&e.addEventListener&&e.addEventListener(F,s)),B.add&&(B.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,u):d.push(u),// Keep track of which events have ever been used, for event optimization
E.event.global[F]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,i,r){var o,s,a,l,c,u,B,d,F,h,f,p=ei.hasData(e)&&ei.get(e);if(p&&(l=p.events)){for(c=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(W)||[""]).length;c--;){// Unbind all events (on this namespace, if provided) for the element
if(F=f=(a=eI.exec(t[c])||[])[1],h=(a[2]||"").split(".").sort(),!F){for(F in l)E.event.remove(e,F+t[c],n,i,!0);continue}for(B=E.event.special[F]||{},d=l[F=(i?B.delegateType:B.bindType)||F]||[],a=a[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
s=o=d.length;o--;)u=d[o],(r||f===u.origType)&&(!n||n.guid===u.guid)&&(!a||a.test(u.namespace))&&(!i||i===u.selector||"**"===i&&u.selector)&&(d.splice(o,1),u.selector&&d.delegateCount--,B.remove&&B.remove.call(e,u));s&&!d.length&&(B.teardown&&!1!==B.teardown.call(e,h,p.handle)||E.removeEvent(e,F,p.handle),delete l[F])}E.isEmptyObject(l)&&ei.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,s,a=Array(arguments.length),l=E.event.fix(e),c=(ei.get(this,"events")||Object.create(null))[l.type]||[],u=E.event.special[l.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
a[0]=l;t<arguments.length;t++)a[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(// Determine handlers
s=E.event.handlers.call(this,l,c),// Run delegates first; they may want to stop propagation beneath us
t=0;(r=s[t++])&&!l.isPropagationStopped();)for(l.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!l.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!l.rnamespace||!1===o.namespace||l.rnamespace.test(o.namespace))&&(l.handleObj=o,l.data=o.data,void 0!==(i=((E.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,i,r,o,s,a=[],l=t.delegateCount,c=e.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;c!==this;c=c.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===c.nodeType&&!("click"===e.type&&!0===c.disabled)){for(n=0,o=[],s={};n<l;n++)void 0===s[// Don't conflict with Object.prototype properties (trac-13203)
r=(i=t[n]).selector+" "]&&(s[r]=i.needsContext?E(r,this).index(c)>-1:E.find(r,this,null,[c]).length),s[r]&&o.push(i);o.length&&a.push({elem:c,handlers:o})}}return(// Add the remaining (directly-bound) handlers
c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a)},addProp:function(e,t){Object.defineProperty(E.Event.prototype,e,{enumerable:!0,configurable:!0,get:f(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return false to allow normal processing in the caller
return eg.test(t.type)&&t.click&&w(t,"input")&&eT(t,"click",!0),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return non-false to allow normal event-path propagation
return eg.test(t.type)&&t.click&&w(t,"input")&&eT(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return eg.test(t.type)&&t.click&&w(t,"input")&&ei.get(t,"click")||w(t,"a")}},beforeunload:{postDispatch:function(e){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?ex:eS,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[E.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
E.Event.prototype={constructor:E.Event,isDefaultPrevented:eS,isPropagationStopped:eS,isImmediatePropagationStopped:eS,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ex,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ex,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ex,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){if(A.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var n=ei.get(this,"handle"),i=E.event.fix(e);i.type="focusin"===e.type?"focus":"blur",i.isSimulated=!0,// First, handle focusin/focusout
n(e),i.target===i.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
n(i)}else // while someone wants focusin/focusout.
E.event.simulate(t,e.target,E.event.fix(e))}E.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var i;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
eT(this,e,!0),!A.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(i=ei.get(this,t))||this.addEventListener(t,n),ei.set(this,t,(i||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
eT(this,e),!0)},teardown:function(){var e;if(!A.documentMode)return!1;(e=ei.get(this,t)-1)?ei.set(this,t,e):(this.removeEventListener(t,n),ei.remove(this,t))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(t){return ei.get(t.target,e)},delegateType:t},// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
//
// Support: IE 9 - 11+
// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
// attach a single handler for both events in IE.
E.event.special[t]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var i=this.ownerDocument||this.document||this,r=A.documentMode?this:i,o=ei.get(r,t);o||(A.documentMode?this.addEventListener(t,n):i.addEventListener(e,n,!0)),ei.set(r,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=A.documentMode?this:i,o=ei.get(r,t)-1;o?ei.set(r,t,o):(A.documentMode?this.removeEventListener(t,n):i.removeEventListener(e,n,!0),ei.remove(r,t))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){E.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,r=e.handleObj;return i&&(i===this||E.contains(this,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),E.fn.extend({on:function(e,t,n,i){return ek(this,e,t,n,i)},one:function(e,t,n,i){return ek(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
i=e.handleObj,E(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(r in e)this.off(r,t,e[r]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=eS),this.each(function(){E.event.remove(this,e,n,t)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
eQ=/<script|<style|<link/i,eq=/checked\s*(?:[^=]|=\s*.checked.)/i,eR=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function eU(e,t){return w(e,"table")&&w(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function eV(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function eL(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function eP(e,t){var n,i,r,o,s,a;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(ei.hasData(e)&&(a=ei.get(e).events))for(r in ei.remove(t,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)E.event.add(t,r,a[r][n]);// 2. Copy user data
er.hasData(e)&&(o=er.access(e),s=E.extend({},o),er.set(t,s))}}function eM(e,t,n,i){// Flatten any nested arrays
t=s(t);var r,o,a,l,c,u,B=0,d=e.length,F=d-1,p=t[0],A=f(p);// We can't cloneNode fragments that contain checked, in WebKit
if(A||d>1&&"string"==typeof p&&!h.checkClone&&eq.test(p))return e.each(function(r){var o=e.eq(r);A&&(t[0]=p.call(this,r,o.html())),eM(o,t,n,i)});if(d&&(o=(r=ew(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=o),o||i)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(l=(a=E.map(eb(r,"script"),eV)).length;B<d;B++)c=r,B!==F&&(c=E.clone(c,!0,!0),l&&// push.apply(_, arraylike) throws on ancient WebKit
E.merge(a,eb(c,"script"))),n.call(e[B],c,B);if(l)// Evaluate executable scripts on first document insertion
for(u=a[a.length-1].ownerDocument,// Re-enable scripts
E.map(a,eL),B=0;B<l;B++)c=a[B],ev.test(c.type||"")&&!ei.access(c,"globalEval")&&E.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?E._evalUrl&&!c.noModule&&E._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
m(c.textContent.replace(eR,""),c,u))}return e}function ez(e,t,n){for(var i,r=t?E.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||E.cleanData(eb(i)),i.parentNode&&(n&&ed(i)&&eE(eb(i,"script")),i.parentNode.removeChild(i));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),l=ed(e);// Fix IE cloning issues
if(!h.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!E.isXMLDoc(e))for(i=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
s=eb(a),r=(o=eb(e)).length;i<r;i++)!// Fix IE bugs, see support tests
function(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&eg.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}(o[i],s[i]);// Copy the events from the original to the clone
if(t){if(n)for(i=0,o=o||eb(e),s=s||eb(a),r=o.length;i<r;i++)eP(o[i],s[i]);else eP(e,a)}// Return the cloned set
return(// Preserve script evaluation history
(s=eb(a,"script")).length>0&&eE(s,!l&&eb(e,"script")),a)},cleanData:function(e){for(var t,n,i,r=E.event.special,o=0;void 0!==(n=e[o]);o++)if(et(n)){if(t=n[ei.expando]){if(t.events)for(i in t.events)r[i]?E.event.remove(n,i):E.removeEvent(n,i,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[ei.expando]=void 0}n[er.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[er.expando]=void 0)}}}),E.fn.extend({detach:function(e){return ez(this,e,!0)},remove:function(e){return ez(this,e)},text:function(e){return J(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eM(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&eU(this,e).appendChild(e)})},prepend:function(){return eM(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=eU(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eM(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eM(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
E.cleanData(eb(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return J(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!eQ.test(e)&&!ey[(em.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(E.cleanData(eb(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return eM(this,arguments,function(t){var n=this.parentNode;0>E.inArray(this,e)&&(E.cleanData(eb(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){E.fn[e]=function(e){for(var n,i=[],r=E(e),o=r.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),E(r[s])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
a.apply(i,n.get());return this.pushStack(i)}});var eK=RegExp("^("+el+")(?!px)[a-z%]+$","i"),eD=/^--/,eZ=function(t){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},eW=function(e,t,n){var i,r,o={};// Remember the old values, and insert the new ones
for(r in t)o[r]=e.style[r],e.style[r]=t[r];// Revert the old values
for(r in i=n.call(e),t)e.style[r]=o[r];return i},eN=RegExp(eu.join("|"),"i");function eO(e,t,n){var i,r,o,s,a=eD.test(t),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
l=e.style;return(n=n||eZ(e))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
s=n.getPropertyValue(t)||n[t],a&&s&&// Spec requires trimming whitespace for custom properties (gh-4926).
// Firefox only trims leading whitespace. Chrome just collapses
// both leading & trailing whitespace to a single space.
//
// Fall back to `undefined` if empty string returned.
// This collapses a missing definition with property defined
// and set to an empty string but there's no standard API
// allowing us to differentiate them without a performance penalty
// and returning `undefined` aligns with older jQuery.
//
// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
// as whitespace while CSS does not, but this is not a problem
// because CSS preprocessing replaces them with U+000A LINE FEED
// (which *is* CSS whitespace)
// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
(s=s.replace(T,"$1")||void 0),""!==s||ed(e)||(s=E.style(e,t)),!h.pixelBoxStyles()&&eK.test(s)&&eN.test(t)&&(// Remember the original values
i=l.width,r=l.minWidth,o=l.maxWidth,// Put in the new values to get a computed value out
l.minWidth=l.maxWidth=l.width=s,s=n.width,// Revert the changed values
l.width=i,l.minWidth=r,l.maxWidth=o)),void 0!==s?// IE returns zIndex value as an integer.
s+"":s}function ej(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(e()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",eB.appendChild(c).appendChild(u);var t=e.getComputedStyle(u);i="1%"!==t.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
l=12===n(t.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
u.style.right="60%",s=36===n(t.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
r=36===n(t.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
u.style.position="absolute",o=12===n(u.offsetWidth/3),eB.removeChild(c),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
u=null}}function n(e){return Math.round(parseFloat(e))}var i,r,o,s,a,l,c=A.createElement("div"),u=A.createElement("div");// Finish early in limited (non-browser) environments
u.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===u.style.backgroundClip,E.extend(h,{boxSizingReliable:function(){return t(),r},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),o},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var t,n,i,r;return null==a&&(t=A.createElement("table"),n=A.createElement("tr"),i=A.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
n.style.height="1px",i.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
i.style.display="block",eB.appendChild(t).appendChild(n).appendChild(i),a=parseInt((r=e.getComputedStyle(n)).height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===n.offsetHeight,eB.removeChild(t)),a}}))}();var eH=["Webkit","Moz","ms"],eG=A.createElement("div").style,eX={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function eJ(e){return E.cssProps[e]||eX[e]||(e in eG?e:eX[e]=// Return a vendor-prefixed property or undefined
function(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=eH.length;n--;)if((e=eH[n]+t)in eG)return e}(e)||e)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
eY=/^(none|table(?!-c[ea]).+)/,e_={position:"absolute",visibility:"hidden",display:"block"},e$={letterSpacing:"0",fontWeight:"400"};function e2(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var i=ec.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function e0(e,t,n,i,r,o){var s="width"===t?1:0,a=0,l=0,c=0;// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(c+=E.css(e,n+eu[s],!0,r)),i?("content"===n&&(l-=E.css(e,"padding"+eu[s],!0,r)),"margin"!==n&&(l-=E.css(e,"border"+eu[s]+"Width",!0,r))):(// Add padding
l+=E.css(e,"padding"+eu[s],!0,r),"padding"!==n?l+=E.css(e,"border"+eu[s]+"Width",!0,r):a+=E.css(e,"border"+eu[s]+"Width",!0,r));return!i&&o>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))||0),l+c}function e1(e,t,n){// Start with computed style
var i=eZ(e),r=(!h.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,i),o=r,s=eO(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(eK.test(s)){if(!n)return s;s="auto"}// Adjust for the element's box model
return(!h.boxSizingReliable()&&r||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!h.reliableTrDimensions()&&w(e,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===s||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(s)&&"inline"===E.css(e,"display",!1,i))&&// Make sure the element is visible & connected
e.getClientRects().length&&(r="border-box"===E.css(e,"boxSizing",!1,i),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(o=a in e)&&(s=e[a])),// Normalize "" and auto
(s=parseFloat(s)||0)+e0(e,t,n||(r?"border":"content"),o,i,s)+"px"}function e3(e,t,n,i,r){return new e3.prototype.init(e,t,n,i,r)}E.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=eO(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,i){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var r,o,s,a=ee(t),l=eD.test(t),c=e.style;// Check if we're setting a value
if(l||(t=eJ(a)),// Gets hook for the prefixed version, then unprefixed version
s=E.cssHooks[t]||E.cssHooks[a],void 0===n)return(// If a hook was provided get the non-computed value from there
s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:c[t]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(o=typeof n)&&(r=ec.exec(n))&&r[1]&&(n=ef(e,t,r),// Fixes bug trac-9237
o="number"),null!=n&&n==n&&("number"!==o||l||(n+=r&&r[3]||(E.cssNumber[a]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var r,o,s,a=ee(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(eD.test(t)||(t=eJ(a)),// Try prefixed name followed by the unprefixed name
(s=E.cssHooks[t]||E.cssHooks[a])&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=eO(e,t,i)),"normal"===r&&t in e$&&(r=e$[t]),""===n||n)?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r)}}),E.each(["height","width"],function(e,t){E.cssHooks[t]={get:function(e,n,i){if(n)// but it must have a current display style that would benefit
return!eY.test(E.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?e1(e,t,i):eW(e,e_,function(){return e1(e,t,i)})},set:function(e,n,i){var r,o=eZ(e),// to avoid forcing a reflow.
s=!h.scrollboxSize()&&"absolute"===o.position,a=(s||i)&&"border-box"===E.css(e,"boxSizing",!1,o),l=i?e0(e,t,i,a,o):0;return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-e0(e,t,"border",!1,o)-.5)),l&&(r=ec.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=E.css(e,t)),e2(e,n,l)}}}),E.cssHooks.marginLeft=ej(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(eO(e,"marginLeft"))||e.getBoundingClientRect().left-eW(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
E.each({margin:"",padding:"",border:"Width"},function(e,t){E.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+eu[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(E.cssHooks[e+t].set=e2)}),E.fn.extend({css:function(e,t){return J(this,function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=eZ(e),r=t.length;s<r;s++)o[t[s]]=E.css(e,t[s],!1,i);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,arguments.length>1)}}),E.Tween=e3,e3.prototype={constructor:e3,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=e3.propHooks[this.prop];return e&&e.get?e.get(this):e3.propHooks._default.get(this)},run:function(e){var t,n=e3.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):e3.propHooks._default.set(this),this}},e3.prototype.init.prototype=e3.prototype,e3.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
E.fx.step[e.prop]?E.fx.step[e.prop](e):1===e.elem.nodeType&&(E.cssHooks[e.prop]||null!=e.elem.style[eJ(e.prop)])?E.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
e3.propHooks.scrollTop=e3.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=e3.prototype.init,// Back compat <1.8 extension point
E.fx.step={};var e9,e7,e5,e6,e8=/^(?:toggle|show|hide)$/,e4=/queueHooks$/;// Animations created synchronously will run synchronously
function te(){return e.setTimeout(function(){e5=void 0}),e5=Date.now()}// Generate parameters to create a standard animation
function tt(e,t){var n,i=0,r={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;i<4;i+=2-t)r["margin"+(n=eu[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tn(e,t,n){for(var i,r=(ti.tweeners[t]||[]).concat(ti.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))return i}function ti(e,t,n){var i,r,o=0,s=ti.prefilters.length,a=E.Deferred().always(function(){// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(r)return!1;for(var t=e5||te(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),o=0,s=c.tweens.length;o<s;o++)c.tweens[o].run(i);return(// If there's more to do, yield
(a.notifyWith(e,[c,i,n]),i<1&&s)?n:(s||a.notifyWith(e,[c,1,0]),// Resolve the animation and report its conclusion
a.resolveWith(e,[c]),!1))},c=a.promise({elem:e,props:E.extend({},t),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},n),originalProperties:t,originalOptions:n,startTime:e5||te(),duration:n.duration,tweens:[],createTween:function(t,n){var i=E.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,// otherwise we skip this part
i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),u=c.props;for(function(e,t){var n,i,r,o,s;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=t[i=ee(n)],Array.isArray(o=e[n])&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(s=E.cssHooks[i])&&("expand"in s))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o=s.expand(o),delete e[i],o)(n in e)||(e[n]=o[n],t[n]=r);else t[i]=r}(u,c.opts.specialEasing);o<s;o++)if(i=ti.prefilters[o].call(c,e,u,c.opts))return f(i.stop)&&(E._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return E.map(u,tn,c),f(c.opts.start)&&c.opts.start.call(e,c),// Attach callbacks from options
c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),E.fx.timer(E.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}E.Animation=E.extend(ti,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ef(n.elem,e,ec.exec(t),n),n}]},tweener:function(e,t){f(e)?(t=e,e=["*"]):e=e.match(W);for(var n,i=0,r=e.length;i<r;i++)n=e[i],ti.tweeners[n]=ti.tweeners[n]||[],ti.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,s,a,l,c,u,B="width"in t||"height"in t,d=this,F={},h=e.style,f=e.nodeType&&eh(e),p=ei.get(e,"fxshow");// Detect show/hide animations
for(i in n.queue||(null==(s=E._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always(function(){// Ensure the complete handler is called before this completes
d.always(function(){s.unqueued--,E.queue(e,"fx").length||s.empty.fire()})})),t)if(r=t[i],e8.test(r)){if(delete t[i],o=o||"toggle"===r,r===(f?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==r||!p||void 0===p[i])continue;f=!0}F[i]=p&&p[i]||E.style(e,i)}if(!(!// Bail out if this is a no-op like .hide().hide()
(l=!E.isEmptyObject(t))&&E.isEmptyObject(F)))for(i in B&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(c=p&&p.display)&&(c=ei.get(e,"display")),"none"===(u=E.css(e,"display"))&&(c?u=c:(// Get nonempty value(s) by temporarily forcing visibility
eA([e],!0),c=e.style.display||c,u=E.css(e,"display"),eA([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===E.css(e,"float")&&(l||(d.done(function(){h.display=c}),null!=c||(c="none"===(u=h.display)?"":u)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
l=!1,F)l||(p?"hidden"in p&&(f=p.hidden):p=ei.access(e,"fxshow",{display:c}),o&&(p.hidden=!f),f&&eA([e],!0),/* eslint-disable no-loop-func */d.done(function(){for(i in f||eA([e]),ei.remove(e,"fxshow"),F)E.style(e,i,F[i])})),// Per-property setup
l=tn(f?p[i]:0,i,d),i in p||(p[i]=l.start,f&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ti.prefilters.unshift(e):ti.prefilters.push(e)}}),E.speed=function(e,t,n){var i=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||f(e)&&e,duration:e,easing:n&&t||t&&!f(t)&&t};return E.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in E.fx.speeds?i.duration=E.fx.speeds[i.duration]:i.duration=E.fx.speeds._default),(null==i.queue||!0===i.queue)&&(i.queue="fx"),// Queueing
i.old=i.complete,i.complete=function(){f(i.old)&&i.old.call(this),i.queue&&E.dequeue(this,i.queue)},i},E.fn.extend({fadeTo:function(e,t,n,i){// Show any hidden elements after setting opacity to 0
return this.filter(eh).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=E.isEmptyObject(e),o=E.speed(t,n,i),s=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=ti(this,E.extend({},e),o);// Empty animations, or finishing resolves immediately
(r||ei.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=E.timers,s=ei.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&e4.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem===this&&(null==e||o[r].queue===e)&&(o[r].anim.stop(n),t=!1,o.splice(r,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&E.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=ei.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=E.timers,s=i?i.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
E.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),E.each(["toggle","show","hide"],function(e,t){var n=E.fn[t];E.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tt(t,!0),e,i,r)}}),// Generate shortcuts for custom animations
E.each({slideDown:tt("show"),slideUp:tt("hide"),slideToggle:tt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){E.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(e5=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),e5=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){e6||(e6=!0,function t(){e6&&(!1===A.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,E.fx.interval),E.fx.tick())}())},E.fx.stop=function(){e6=null},E.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
E.fn.delay=function(t,n){return t=E.fx&&E.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}})},tr=A.createElement("input"),to=A.createElement("select").appendChild(A.createElement("option")),tr.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
h.checkOn=""!==tr.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
h.optSelected=to.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(tr=A.createElement("input")).value="t",tr.type="radio",h.radioValue="t"===tr.value;var tr,to,ts,ta=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return J(this,E.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var i,r,o=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return E.prop(e,t,n);if(1===o&&E.isXMLDoc(e)||(r=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?ts:void 0)),void 0!==n){if(null===n){E.removeAttr(e,t);return}return r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n)}return r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=E.find.attr(e,t))?void 0:i}},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&w(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
r=t&&t.match(W);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ts={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ta[t]||E.find.attr;ta[t]=function(e,t,i){var r,o,s=t.toLowerCase();return i||(// Avoid an infinite loop by temporarily removing this function from the getter
o=ta[s],ta[s]=r,r=null!=n(e,t,i)?s:null,ta[s]=o),r}});var tl=/^(?:input|select|textarea|button)$/i,tc=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function tu(e){return(e.match(W)||[]).join(" ")}function tB(e){return e.getAttribute&&e.getAttribute("class")||""}function td(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(W)||[]}E.fn.extend({prop:function(e,t){return J(this,E.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var i,r,o=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return(1===o&&E.isXMLDoc(e)||(// Fix name and attach hooks
t=E.propFix[t]||t,r=E.propHooks[t]),void 0!==n)?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):tl.test(e.nodeName)||tc.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(E.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(e){var t,n,i,r,o,s;return f(e)?this.each(function(t){E(this).addClass(e.call(this,t,tB(this)))}):(t=td(e)).length?this.each(function(){if(i=tB(this),n=1===this.nodeType&&" "+tu(i)+" "){for(o=0;o<t.length;o++)r=t[o],0>n.indexOf(" "+r+" ")&&(n+=r+" ");i!==// Only assign if different to avoid unneeded rendering.
(s=tu(n))&&this.setAttribute("class",s)}}):this},removeClass:function(e){var t,n,i,r,o,s;return f(e)?this.each(function(t){E(this).removeClass(e.call(this,t,tB(this)))}):arguments.length?(t=td(e)).length?this.each(function(){if(i=tB(this),// This expression is here for better compressibility (see addClass)
n=1===this.nodeType&&" "+tu(i)+" "){for(o=0;o<t.length;o++)// Remove *all* instances
for(r=t[o];n.indexOf(" "+r+" ")>-1;)n=n.replace(" "+r+" "," ");i!==// Only assign if different to avoid unneeded rendering.
(s=tu(n))&&this.setAttribute("class",s)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,i,r,o,s=typeof e,a="string"===s||Array.isArray(e);return f(e)?this.each(function(n){E(this).toggleClass(e.call(this,n,tB(this),t),t)}):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=td(e),this.each(function(){if(a)for(r=0,// Toggle individual class names
o=E(this);r<n.length;r++)i=n[r],o.hasClass(i)?o.removeClass(i):o.addClass(i);else(void 0===e||"boolean"===s)&&((i=tB(this))&&ei.set(this,"__className__",i),this.setAttribute&&this.setAttribute("class",i||!1===e?"":ei.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+tu(tB(n))+" ").indexOf(t)>-1)return!0;return!1}});var tF=/\r/g;E.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=f(e),this.each(function(n){var r;1!==this.nodeType||(null==(r=i?e.call(this,n,E(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=E.map(r,function(e){return null==e?"":e+""})),(t=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))})):r?(t=E.valHooks[r.type]||E.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(tF,""):null==n?"":n:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
tu(E.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?o+1:r.length;// Loop through all the selected options
for(i=o<0?l:s?o:0;i<l;i++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((n=r[i]).selected||i===o)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!w(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=E(n).val(),s)return t;// Multi-Selects return an array
a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,o=E.makeArray(t),s=r.length;s--;)/* eslint-disable no-cond-assign */((i=r[s]).selected=E.inArray(E.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=E.inArray(E(e).val(),t)>-1}},h.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var th=e.location,tf={guid:Date.now()},tp=/\?/;// Cross-browser xml parsing
E.parseXML=function(t){var n,i;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return i=n&&n.getElementsByTagName("parsererror")[0],(!n||i)&&E.error("Invalid XML: "+(i?E.map(i.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var tA=/^(?:focusinfocus|focusoutblur)$/,tg=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(t,n,i,r){var o,s,a,l,c,u,d,F,h=[i||A],g=B.call(t,"type")?t.type:t,m=B.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(s=F=a=i=i||A,!(3===i.nodeType||8===i.nodeType||tA.test(g+E.event.triggered))&&(g.indexOf(".")>-1&&(g=// Namespaced trigger; create a regexp to match event type in handle()
(m=g.split(".")).shift(),m.sort()),c=0>g.indexOf(":")&&"on"+g,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[E.expando]?t:new E.Event(g,"object"==typeof t&&t)).isTrigger=r?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=i),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:E.makeArray(n,[t]),// Allow special events to draw outside the lines
d=E.event.special[g]||{},r||!d.trigger||!1!==d.trigger.apply(i,n))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!r&&!d.noBubble&&!p(i)){for(l=d.delegateType||g,tA.test(l+g)||(s=s.parentNode);s;s=s.parentNode)h.push(s),a=s;a===(i.ownerDocument||A)&&h.push(a.defaultView||a.parentWindow||e)}for(// Fire handlers on the event path
o=0;(s=h[o++])&&!t.isPropagationStopped();)F=s,t.type=o>1?l:d.bindType||g,// jQuery handler
(u=(ei.get(s,"events")||Object.create(null))[t.type]&&ei.get(s,"handle"))&&u.apply(s,n),// Native handler
(u=c&&s[c])&&u.apply&&et(s)&&(t.result=u.apply(s,n),!1===t.result&&t.preventDefault());return t.type=g,!r&&!t.isDefaultPrevented()&&(!d._default||!1===d._default.apply(h.pop(),n))&&et(i)&&c&&f(i[g])&&!p(i)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(a=i[c])&&(i[c]=null),// Prevent re-triggering of the same event, since we already bubbled it above
E.event.triggered=g,t.isPropagationStopped()&&F.addEventListener(g,tg),i[g](),t.isPropagationStopped()&&F.removeEventListener(g,tg),E.event.triggered=void 0,a&&(i[c]=a)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var i=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(i,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}});var tm=/\[\]$/,tv=/\r?\n/g,ty=/^(?:submit|button|image|reset|file)$/i,tb=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
E.param=function(e,t){var n,i=[],r=function(e,t){// If value is a function, invoke it and use its return value
var n=f(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){r(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,i,r){var o;if(Array.isArray(n))E.each(n,function(n,o){i||tm.test(t)?r(t,o):e(t+"["+("object"==typeof o&&null!=o?n:"")+"]",o,i,r)});else if(i||"object"!==v(n))r(t,n);else for(o in n)e(t+"["+o+"]",n[o],i,r)}(n,e[n],t,r);// Return the resulting serialization
return i.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!E(this).is(":disabled")&&tb.test(this.nodeName)&&!ty.test(e)&&(this.checked||!eg.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(tv,"\r\n")}}):{name:t.name,value:n.replace(tv,"\r\n")}}).get()}});var tE=/%20/g,tC=/#.*$/,tw=/([?&])_=[^&]*/,tI=/^(.*?):[ \t]*([^\r\n]*)$/mg,tx=/^(?:GET|HEAD)$/,tS=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */tk={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tT={},tQ="*/".concat("*"),tq=A.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tR(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(W)||[];if(f(n))// For each dataType in the dataTypeExpression
for(;i=o[r++];)"+"===i[0]?(e[i=i.slice(1)||"*"]=e[i]||[]).unshift(n):(e[i]=e[i]||[]).push(n)}}// Base inspection function for prefilters and transports
function tU(e,t,n,i){var r={},o=e===tT;function s(a){var l;return r[a]=!0,E.each(e[a]||[],function(e,a){var c=a(t,n,i);return"string"!=typeof c||o||r[c]?o?!(l=c):void 0:(t.dataTypes.unshift(c),s(c),!1)}),l}return s(t.dataTypes[0])||!r["*"]&&s("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function tV(e,t){var n,i,r=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&E.extend(!0,e,i),e}tq.href=th.href,E.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:th.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(th.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":tQ,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":E.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?tV(tV(e,E.ajaxSettings),t):tV(E.ajaxSettings,e)},ajaxPrefilter:tR(tk),ajaxTransport:tR(tT),// Main method
ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var i,r,o,s,a,l,c,u,B,d,F=E.ajaxSetup({},n),h=F.context||F,f=F.context&&(h.nodeType||h.jquery)?E(h):E.event,p=E.Deferred(),g=E.Callbacks("once memory"),m=F.statusCode||{},v={},y={},b="canceled",C={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=tI.exec(o);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return c?o:null},// Caches the header
setRequestHeader:function(e,t){return null==c&&(v[e=y[e.toLowerCase()]=y[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==c&&(F.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(c)C.always(e[C.status]);else for(t in e)m[t]=[m[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||b;return i&&i.abort(t),w(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
p.promise(C),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
F.url=((t||F.url||th.href)+"").replace(tS,th.protocol+"//"),// Alias method option to type as per ticket trac-12004
F.type=n.method||n.type||F.method||F.type,// Extract dataTypes list
F.dataTypes=(F.dataType||"*").toLowerCase().match(W)||[""],null==F.crossDomain){l=A.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=F.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,F.crossDomain=tq.protocol+"//"+tq.host!=l.protocol+"//"+l.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
F.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(F.data&&F.processData&&"string"!=typeof F.data&&(F.data=E.param(F.data,F.traditional)),// Apply prefilters
tU(tk,F,n,C),c)return C;// Check for headers option
for(B in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(u=E.event&&F.global)&&0==E.active++&&E.event.trigger("ajaxStart"),// Uppercase the type
F.type=F.type.toUpperCase(),// Determine if request has content
F.hasContent=!tx.test(F.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
r=F.url.replace(tC,""),F.hasContent?F.data&&F.processData&&0===(F.contentType||"").indexOf("application/x-www-form-urlencoded")&&(F.data=F.data.replace(tE,"+")):(// Remember the hash so we can put it back
d=F.url.slice(r.length),F.data&&(F.processData||"string"==typeof F.data)&&(r+=(tp.test(r)?"&":"?")+F.data,// trac-9682: remove data so that it's not used in an eventual retry
delete F.data),!1===F.cache&&(r=r.replace(tw,"$1"),d=(tp.test(r)?"&":"?")+"_="+tf.guid+++d),// Put hash and anti-cache on the URL that will be requested (gh-1732)
F.url=r+d),F.ifModified&&(E.lastModified[r]&&C.setRequestHeader("If-Modified-Since",E.lastModified[r]),E.etag[r]&&C.setRequestHeader("If-None-Match",E.etag[r])),(F.data&&F.hasContent&&!1!==F.contentType||n.contentType)&&C.setRequestHeader("Content-Type",F.contentType),// Set the Accepts header for the server, depending on the dataType
C.setRequestHeader("Accept",F.dataTypes[0]&&F.accepts[F.dataTypes[0]]?F.accepts[F.dataTypes[0]]+("*"!==F.dataTypes[0]?", "+tQ+"; q=0.01":""):F.accepts["*"]),F.headers)C.setRequestHeader(B,F.headers[B]);// Allow custom headers/mimetypes and early abort
if(F.beforeSend&&(!1===F.beforeSend.call(h,C,F)||c))return C.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
b="abort",// Install callbacks on deferreds
g.add(F.complete),C.done(F.success),C.fail(F.error),// Get transport
i=tU(tT,F,n,C)){// If request was aborted inside ajaxSend, stop there
if(C.readyState=1,u&&f.trigger("ajaxSend",[C,F]),c)return C;F.async&&F.timeout>0&&(a=e.setTimeout(function(){C.abort("timeout")},F.timeout));try{c=!1,i.send(v,w)}catch(e){// Rethrow post-completion exceptions
if(c)throw e;// Propagate others as results
w(-1,e)}}else w(-1,"No Transport");// Callback for when everything is done
function w(t,n,s,l){var B,d,A,v,y,b=n;// Ignore repeat invocations
c||(c=!0,a&&e.clearTimeout(a),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
i=void 0,// Cache response headers
o=l||"",// Set readyState
C.readyState=t>0?4:0,// Determine if successful
B=t>=200&&t<300||304===t,s&&(v=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(e,t,n){// Remove auto dataType and get content-type in the process
for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(i){for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}}// Check to see if we have a response for the expected dataType
if(l[0]in n)o=l[0];else{// Try convertible dataTypes
for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s||(s=r)}// Or just use first one
o=o||s}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==l[0]&&l.unshift(o),n[o]}(F,C,s)),!B&&E.inArray("script",F.dataTypes)>-1&&0>E.inArray("json",F.dataTypes)&&(F.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
v=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(e,t,n,i){var r,o,s,a,l,c={},u=e.dataTypes.slice();// Create converters map with lowercased keys
if(u[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];// Convert to each sequential dataType
for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift()){// There's only work to do if current dataType is non-auto
if("*"===o)o=l;else if("*"!==l&&l!==o){// If none found, seek a pair
if(!// Seek a direct converter
(s=c[l+" "+o]||c["* "+o])){for(r in c)if(// If conv2 outputs current
(a=r.split(" "))[1]===o&&// If prev can be converted to accepted input
(s=c[l+" "+a[0]]||c["* "+a[0]])){// Condense equivalence converters
!0===s?s=c[r]:!0!==c[r]&&(o=a[0],u.unshift(a[1]));break}}// Apply converter (if not an equivalence)
if(!0!==s){// Unless errors are allowed to bubble, catch and return them
if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}}}return{state:"success",data:t}}(F,v,C,B),B?(F.ifModified&&((y=C.getResponseHeader("Last-Modified"))&&(E.lastModified[r]=y),(y=C.getResponseHeader("etag"))&&(E.etag[r]=y)),204===t||"HEAD"===F.type?b="nocontent":304===t?b="notmodified":(b=v.state,d=v.data,B=!(A=v.error))):(// Extract error from statusText and normalize for non-aborts
A=b,(t||!b)&&(b="error",t<0&&(t=0))),// Set data for the fake xhr object
C.status=t,C.statusText=(n||b)+"",B?p.resolveWith(h,[d,b,C]):p.rejectWith(h,[C,b,A]),// Status-dependent callbacks
C.statusCode(m),m=void 0,u&&f.trigger(B?"ajaxSuccess":"ajaxError",[C,F,B?d:A]),// Complete
g.fireWith(h,[C,b]),!u||(f.trigger("ajaxComplete",[C,F]),--E.active||E.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,t){E[t]=function(e,n,i,r){// The url can be an options object (which then must have .url)
return f(n)&&(r=r||i,i=n,n=void 0),E.ajax(E.extend({url:e,type:t,dataType:r,data:n,success:i},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(f(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return f(e)?this.each(function(t){E(this).wrapInner(e.call(this,t))}):this.each(function(){var t=E(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=f(e);return this.each(function(n){E(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var tL={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},tP=E.ajaxSettings.xhr();h.cors=!!tP&&"withCredentials"in tP,h.ajax=tP=!!tP,E.ajaxTransport(function(t){var n,i;// Cross domain only allowed if supported through XMLHttpRequest
if(h.cors||tP&&!t.crossDomain)return{send:function(r,o){var s,a=t.xhr();// Apply custom fields if provided
if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];// Set headers
for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(s,r[s]);// Callback
n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(tL[a.status]||a.status,a.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},// Listen to events
a.onload=n(),i=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){// Check readyState before timeout as it changes
4===a.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
e.setTimeout(function(){n&&i()})},// Create the abort callback
n=n("abort");try{// Do send the request (this may raise an exception)
a.send(t.hasContent&&t.data||null)}catch(e){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(n)throw e}},abort:function(){n&&n()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),// Handle cache's special case and crossDomain
E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
E.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(i,r){t=E("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
A.head.appendChild(t[0])},abort:function(){n&&n()}}}});var tM=[],tz=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tM.pop()||E.expando+"_"+tf.guid++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
E.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,s,a=!1!==t.jsonp&&(tz.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tz.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
r=t.jsonpCallback=f(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(tz,"$1"+r):!1!==t.jsonp&&(t.url+=(tp.test(t.url)?"&":"?")+t.jsonp+"="+r),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return s||E.error(r+" was not called"),s[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
o=e[r],e[r]=function(){s=arguments},// Clean-up function (fires after converters)
i.always(function(){void 0===o?E(e).removeProp(r):e[r]=o,t[r]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
tM.push(r)),s&&f(o)&&o(s[0]),s=o=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
h.createHTMLDocument=((n=A.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
E.parseHTML=function(e,t,n){var i,r,o;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(h.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(i=(t=A.implementation.createHTMLDocument("")).createElement("base")).href=A.location.href,t.head.appendChild(i)):t=A),r=L.exec(e),o=!n&&[],r)?[t.createElement(r[1])]:(r=ew([e],t,o),o&&o.length&&E(o).remove(),E.merge([],r.childNodes))},/**
 * Load a url into a page
 */E.fn.load=function(e,t,n){var i,r,o,s=this,a=e.indexOf(" ");return a>-1&&(i=tu(e.slice(a)),e=e.slice(0,a)),f(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&E.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:r||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
o=arguments,s.html(i?// Exclude scripts to avoid IE 'Permission Denied' errors
E("<div>").append(E.parseHTML(e)).find(i):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(e){return E.grep(E.timers,function(t){return e===t.elem}).length},E.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,c=E.css(e,"position"),u=E(e),B={};"static"===c&&(e.style.position="relative"),a=u.offset(),o=E.css(e,"top"),l=E.css(e,"left"),("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(s=(i=u.position()).top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),f(t)&&(t=t.call(e,n,E.extend({},a))),null!=t.top&&(B.top=t.top-a.top+s),null!=t.left&&(B.left=t.left-a.left+r),"using"in t?t.using.call(e,B):u.css(B)}},E.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){E.offset.setOffset(this,e,t)});var t,n,i=this[0];if(i)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
i.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===E.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
r=E(e).offset(),r.top+=E.css(e,"borderTopWidth",!0),r.left+=E.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-r.top-E.css(i,"marginTop",!0),left:t.left-r.left-E.css(i,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent;return e||eB})}}),// Create scrollLeft and scrollTop methods
E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;E.fn[e]=function(i){return J(this,function(e,i,r){// Coalesce documents and windows
var o;if(p(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r},e,i,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
E.each(["top","left"],function(e,t){E.cssHooks[t]=ej(h.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=eO(e,t),eK.test(n)?E(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
E.each({Height:"height",Width:"width"},function(e,t){E.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){// Margin is only for outerHeight, outerWidth
E.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===o?"margin":"border");return J(this,function(t,n,r){var o;return p(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?E.css(t,n,a):E.style(t,n,r,a)},t,s?r:void 0,s)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
E.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var tK=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
E.proxy=function(e,t){var n,i,r;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),f(e))return(// Simulated bind
i=o.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(r=function(){return e.apply(t||this,i.concat(o.call(arguments)))}).guid=e.guid=e.guid||E.guid++,r)},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=w,E.isFunction=f,E.isWindow=p,E.camelCase=ee,E.type=v,E.now=Date.now,E.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=E.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(tK,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var tD=e.jQuery,tZ=e.$;return E.noConflict=function(t){return e.$===E&&(e.$=tZ),t&&e.jQuery===E&&(e.jQuery=tD),E},void 0===t&&(e.jQuery=e.$=E),E},"object"==typeof a?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
a=t.document?n(t,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return n(e)}:n(t);var l={};l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAAQ4CAIAAABjcvvYAAAACXBIWXMAAAsTAAALEwEAmpwYAAJ88UlEQVR42uzXMQ2AAAAEMWBFBv6NoQITN5BP66Ln%2B9wHAADAn1wHAABARFQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQAAmCUqAABARlQAAIBZogIAAGREBQD42K%2B7EymCAIyiX3X3TO%2BsyqyCAQhqDEZuAJuCGfgiirKgzDp%2FXSVoAD7YD1Kcw03iAnTLqAAAAKsxKgAAQLeMCgAAsBqjAgAAdMuoAAAAqzEqAABAt4wKAACwGqMCAAB0y6gAAACrMSoAAEC3jAoAALAaowIAAHTLqAAAAKsxKgAAQLeMCgAAsBqjAgAAdMuoAAAAqzEqAABAt4wKAACwGqMCAAB0y6gAAAD%2FnSkA8De1TOdhOpXpnOGU8dhyTTmVoSWbobTWtvUy1zZlmVudU%2BdSt%2B0SADAqAKyrluFSxvNSyiXb6%2Bb9py8%2Fkz89JktyTpI8JkOyS%2Fa%2Fe7GZ9re7Jzfbu2d5mrqv2aZNpQYAjAoA%2F6JmfMzu2%2B3zDzfl%2FuvH%2B4fD50Ne7TdZyqkux0s7Li1JS0syT%2BNSa2qGUqZkrPV6ODx8%2F%2FGmja%2Fn3du7l%2B9%2BsXdnT5JmZ3nAn%2Fec831f7pVZa9fS6%2FQyLc0%2BozHSCCEJMBaEzeYIrDAQNv8A4fAtRDjCN%2FaFMdiBHYQJGxvsIOwAD0gCj5BtCWaEpBlm1yy9d1d37ZWVlfv3nc1M9wwIB0JbT09l6%2FnVknlRUZF3VU8%2B531PVKfH%2B1MhV4wrRET0TZOte6ogIiJ6izgxQUq9jfzPentfAdaV7ClcDBhWY7eHAET8TbSC1jBGEtEzuV8RqftwUnAmkYcatYWKyowHIoiIiBhUiIjoG3IwA5gLVj3j3Bc7e69FKFHtEMYAIiSHUvCJBvB2WAlKAhIIgIAAwAEQQAUIoPCWoOEgsMeVzAqOGDw2P%2FuDBouSG%2FEgIiLi0S8iIvp6AnQeklGurrR7z47Hl7WykIGPvSxAAwnggBwhADFC5O1PKIk3IeImgUQl0AJESAQArVUEgu2EGIB5yMXr2zHiEycXZ%2F0gVcwqRETERoWIiP46uZQul2aeiuGP1i5sDdUNE2wKeIHLYCO8AhQUkAiMEdcpWXiPJMIAGZAACnBAfGe23gFOwSoAmHUzAWHHFEgLGA8JqcOjuZytlv7B%2FMJ9oWPAtWBERMRGhYiI3hFF2Wj6vvL85viPR%2BdeApxW15PgAORAjPAOYpBlCEBwiBHWRg8NzJVlTiNTSAAR%2FHQpS4BEYoz416MCAaOAcUDbIUcOACHgHYXHFReXBuM%2FO39larZ1uK4NexUiImJQISKiKKqvslWnXu%2BMfukDM%2BMjtrFpsNVb3x%2BpMQx0Ui6N3AgIcONGMW4Bi4LDQR0Wc69HPaKS6kZarRiTKq19OFQd4R2nVK3TH7WHw%2F2IIfAC%2BsNEXnbxyhDFNACFDOsp%2FrAbRkY6Hfz96tRh2VecVyEiIgYVIqLvZk6ZHZVd6PsrN7auadl99pX%2BXKs0NTuTNbPy3vmt%2FaGz4%2FEYmUaMSoW5KCs6mS21jk3PnTLV0%2B5KU4WqDiVEA69gESO%2BxtFyfqRiioXWOKpuSHXRennUXe6vd13YQIRSgMCHROSqi4d159z1OLVSapoBiIiIOKNCRPTdaZiUX6%2FOPrm%2B9fJGewhZDdECI8ClZmrl0OzhharLd9bX3ZXdFVFHgaMh3JfieLWyWE7LJZWoqKPTMeCbJUVUO%2FDP9wdf2cFVJc%2B5uK0SGAMBnDsS3YkQ%2F8587R%2FWTcZhFSIiYlAhIvpu40Xvq%2FRSeeqNoXvm0uorPoyAAQAkXVingFRhunaiXn2%2F1p0sS9a2zxj9gXLlYe2b0ZWjVcHh2xIhe6b0v3Tps1dubBR4PhgohRgATHv7iJZHVfzk0fmlyFKFiIgYVIiIvnuIGkm6GUtPtweXtd7S%2BNzu3q5SaFRgLcYjsWhC17w%2FqVUlhA9J84njR5pqv4l%2BFq2OHreBjGDe2FWf7xSvJ%2FYLNuxVDERgRvDxByx%2B4ljlR51JwEkVIiL6KxSIiOhuFEQPQmql%2BeKFG9fanTDq960b2QAAMUIplEoASjEcMaZpph9dOH3qxJE5tb0QO5Uw1tHj9ohl2DNz5v6z9yfJUlUBIm%2B%2FBgfn1YVLw4HnXfVERMRGhYjou4BV6U628Eex8ZuvvbHTQpyd3YJ2u3vV3T0PP06gqnhiH0eNgg33VfDASuNoktUKWw4W745%2BNC9uFU%2BNx7%2BmI4JCTBpJ2Y07i1X83vyRedkFERERGxUiortY0MmuLX314s7lc69lUtxIS8NGU0QwGHj4SppCYzaXacFiFj50uvkDR2fvEz1bjMvB4l1TldCql41XELwlBGuti2hY6XXywL9HRETE9cRERHcxr8yVWPkDKZ4J7S%2FaYKA%2BXF8crHVfGq0hjMYZfCg%2B6dSSC%2FfPVx%2BYKs%2BJz4oR3n2CsFzGqanGUde5mgdEZUPhFbrAi729lVYlQwAREREbFSKiu49X5sbQv3x%2B7cZq%2B1IeACRJUq1WB4NB6A%2BhUEpxrKSaSfUjZ%2B79YLO8EkaZK3CnVFWYmpqqpKKNAhARtcYgYNsWFhpERERsVIiI7j4Oyat65X%2Fmqy8Y%2BRICNEyGxvLs6%2B1zhWtPW7wvquVx%2BGgrfWyhvuQ2EljcWSb6lVBMS6z7OAIKIJawYeNLFj%2BOrIYxiIiI2KgQEd1NItTGsP7KxRudTnfVRdxUr9fn5ua63W4xDAtaVbJw3%2FHZJw41D6OfwOKOE4RUK5vgFq00IgAEIA9844yIiBhUiIjuLhFywetfbld%2BV%2FzvOrkBhQhTTUr18mC0s2z8Ca0%2F4cO%2FqC%2F8XMChYqCix3ukGX3dRwSkQJSAAGiMRbZjCURERAwqRER3jShqtcAb6522v3Cu6JdMCTc1Go1KpVKsb%2B4XYe546UfuPzFXtYkZAQHvHW0MgAgoKLzj5xYqj%2BobICIiYlAhIro7RFFvlhr%2FSY9%2BXcuns6ntqVk43YCuwUyruNTZkn37i4vLv%2Byq9w%2B3M%2BR4r1nrmqU0U3Bw3nvc9O82B8%2FlcyAiImJQISK6O2zE7EtbO931cHEYASDGiHhrOuVopazmZk6daj3h85YaAAHvtQiVJMn%2Bjs0DABhjkGko6IhKiUe%2FiIiIQYWI6K7Qk%2BqnR%2Fhc1%2F5mErfKQD5CkXf10Kb2kZY8HNU%2Fbtt%2F01PzcYiDIQJt0f0SLOChFTQGHhazwLTKQURExKBCRDTpLLJzG%2B76%2Bs5qHnBLkuCmo%2FVKtrR4pF7%2FaJI3DlIAiJBut1t4ARAR%2FxxuSmGUZ1AhIiLeo0JENOG8Mp9D6TPF2hsil0NETBHc8bwbAVGyVLc%2Fau339vcqvsBB4qFu6OxyjqEAUZXFKFXMaHkMPvFjXvlIRERsVIiIJlgUdQnly2vrIy%2FdEAFAKQARyARLdUwtHjpejKtujAPGKe29Pz2bVWsVAIUrigJ1LTMzMxlTChERMagQEU20VZP%2Bht34nMJnQ7yiMEYivVItb%2B4Bi1r9ZKz980051d%2BXGHDA7Hl9sdfX04fmT55sLR7KktIxpQsXzphSCg8iIiIGFSKiCTXU2Z8Od3euy5u9qDXKFcFNmWT3lFQsh%2FuWZ6eTvo4OB4wTc2W7uzkePLe9rZRaXFw8fezY4pSanUWpojQCiIiIOKNCRDSJoqgXXfl3NvG8it1KBpHDfVdCdr2Zp%2BP9XxjHY2WZD3vGWRw8fYdPN%2B1TThVRX7x4YWZcf7S1OD83M9dyjY09YVAhIiI2KkREE2o36qtr6ybIwAMhwHsAY4zNaCzT6WIDjblGeiBTihfT2e2vr%2FvtEFAUEBmPx1c2rr%2B%2Bs2Wt1UpARETEoEJENIkKSZ8c5J8N8fMuKgHGHmO%2FbtyOch%2Fz8otozSw0KnJA%2F%2BPfSdJfqfou1HIOdJwZY5DsryVbj%2B6En10TIxFEREQMKkREEycos7sXrmyMVm0EoJQyxgAIAcerMtecO7m0UNb6YB76iqJfsIP2FnZdELxFRAA0E3V4amqmYiTy3BcRETGoEBFNHFF7sfrZ3eHzibwucFkphwFcFeGYkqNT8Z8hOd1fy2yBA6nvyr9UhNcgu8hypLPRtobdaRtmG%2BEfoVaBAxEREYMKEdHEyZGsrfV2jLthY5IAIgjBuVBTkpTiysqCzBgVLA6kIHr3qu%2Bv550QSyhFxAxZAJaNas2loa5U5GJiIiJiUCEimjRB1FbX%2FHvf%2B3Uf15UZxhpyJS5JgRMV%2BdkUP79bKHQyf0CDymuS%2FsvSEL7aRfNaVtpR9R7ye7Q87sI%2F6YVQ7nHfFxERMagQEU2egco6Wz0XxEUgTWEtQjDKHMlUmNJnThyvZ8nBHE0B0Nfm%2F6zvFG48CqmGhrUQ8YAAy4s4UZ0uczqFiIh4jwoR0cTxknxx5H9H509mEUmCIkJ0JuGs6i%2B4%2BDNm%2FoOdfhKHOJCcmP8Wuv8xwW4%2FGCRVmP3UAr3jIo%2FX4k%2Bn5Vqe89wXERGxUSEimjwDq7Z29gpEBMB7AIhRogtRFhZah%2Bup0gd2El0uO7e%2BHSu5AFBQAOBcGoMpxWYzTdPMhAP74omI6DvDRoWI6C4WxLy8oX9lGtf2IiyAAJ1rF84k6hEb%2FmmetdxIuwO66WtTV39tf%2FOclcvjCCCqkQ224QaPiHy4kn08STKOphARERsVIqJJ1AvZer5d7woU3qIgWjeVWB0WF2cqMyqxB%2FTQV1%2ByF7f2Bx11cRgBaCU%2BeAB1pTz08p8zqQ489EVERGxUiIgmTYD%2BtK0%2FqXa%2B6gKMIEadoyL2rFFPJPETWSjJCAfSwJT%2Ba3f83Kj4vRigUA%2FIIDl6Cvh%2BpR4v6e8b9Gu8O4WIiNioEBFNop6PF1av9BABwMVbj3WRng3Ly4fmKolxBQ6eQidPDeLq%2BuBGEQBAYER5BABHM6k3qyvLS2U47VmnEBERgwoR0aTx0Ds7%2FV%2BthecTvZibxdxAw2c4lsj3N%2FBD49AIFgePU%2Bb3vXym3f6SlhcF0A2krT2dALhHySM6fqie3Rv7VZ%2BDiIiIQYWIaOJ0bNjtxwUHlEopUgUFYw5pGVbC4cMrWRqMLXDABNGvx9K1rb3OWHZ9zDK8JUZ4rwUVLXNz08cqWZWHvoiIiDMqRESTyEr6r%2BZmnr1xKRnPzY5xtbEL7TDA41F%2BbIQPz4xS5XHARFFfUQu%2Ftdf%2FnFbtNEABEVBdeByOeMKojzSyjzeaddtJDuqaMiIiup3YqBAR3X26Lu10OpmKBgYAlILBjBKr4vy80RKMtzhYZK9feeXa9rCz0R4GRCACAigAWDGyuNQ4urKc2m5ieeiLiIjYqBARTSAH86WA1d2dSxYJXA85fARwzOH9LZycmknjGAfMVyq133Jhx%2FUvuXgMCsCVRoDGyh4eM%2BqwhE%2FMLJ8q2lV7QNeUERHRwcRGhYjoABlIurnb1kMFwMEJBCGkFj6JCwvNkgpZcDgwoqhVqfyPnY3%2B2vYl5wQooaShEQFg0chcOZ49e%2BqQ2y8d1CtfiIjowGKjQkR0UAToV8vZl8VeChhChuhnWckM%2FGkjH6nHD7os8zkOEHkhqf9npV7dUa94QJWkVJqyTtnhfA9ntXzMx49XmsuuV3Ej7TlDT0REbFSIiCZTEdV6pyMj8RFKKQAxRgDlBEtLSy2JOlgcDFH0DV%2F6k43NzqUbrw8CbopFMbIjAHUlZVM5c3x%2Bulmq%2BDFTChERsVEhIppg3ZB%2B3ndfBfYAJB7BFyFfETwo%2BADSphvhYHA6%2BUJa%2B%2B%2BD0fkor45EoQIJKDmIzRUOO%2FlxUT8gySkTslhob0FERMRGhYhoQjnocSH7%2B2HbRwAhwJQ1gHmt5ufnp6NNQoEDwCpzxWVf3dnp3Wif6zgAAQEAlIKglchcIy7OH1k%2BMpOKT5hSiIiIjQoR0USzSr8UcS3Kno4wAh%2FDyNcdTkn4Hp3O2BEOAC%2FmU1Nz%2F2HtypWuH6S1qAzGYyQWiasM8D4lfwv43oo%2BMdtvWJtaphQiImJQISKacO2Rv7C%2BGbRSKiJNwzg3BkeUNMtpK1WJdXiveUk22vqFrQvayW4R4QeIGbSGiXCuquRQhpPT9Xta1UU3ZkohIiIGFSKiiedEr1WnXjPdAggRGHuotDIuVhAfmyot5wMtFu8pp5LPofkpP2oP5bKLQBkJoB0qvtQuHtfq8Rh%2BGDhRSzM31pbXzxMREWdUiIgm31hn42pzaqpRmUmyegkAQpjXulTCUq1cUhbvqbHKXrb68%2Bev5P2tTRfxFkGWIUkwLmaN1CTcu1BbPjJfgmNKISKi20K27qmCiIjeU5el%2Fqv94YU8D4vHbGP28s72cK99dHfnk038zMxsHSO8d3bS6qes%2B%2Fxe%2B%2BmR9Hw8macC2YEPCECoKvm7Mf5YDe9bnClFK8GDiIiIjQoR0V3ASnJpf7y60d3pFWtra51Op1wun5qfPTqNexdmS%2BLxHgmi15LG7%2B12X7%2B0d7WNHiIAB6ehAwKAppLji3L2%2BNyR5XmmFCIi%2BktsVIiI7gI9lD%2B9NvgvSf5GNwCwSOLC%2FL31ysfC2s%2BZypIf4r0QRL8mpT%2Fo77%2B8Y79sw34GGCACChBM9%2FC4kY%2F59KGZ1uKcn%2FZ56plSiIjoHWxUiIgmXRQ1Dml7NNodxFThFtvtttc3kiQpB4f3gpPkWpE%2Bc37r6k5xxQatkFUBB5i348qykcXakfuO37%2B8UJn2limFiIj%2Bf9z6RUQ00VzMPrNQfnpVpS5oYFACTIahc5L%2BfK%2BnSxUI7ixZTxq%2FgdKT%2FevDhmz6iAQYKtNGtRbiECsODyfyiMS%2FPe1apdXMjrV3ICIi%2BlpsVIiIJp0PSafTGYUYgABAAOcAmGbLKaMl4g6Kotuq9Znr%2B%2BsXL3e3is08QgAtSmujzHiMLOJkSY4fqpw%2BfaSR5GU7ZEohIqK%2FDhsVIqJJFkXWk%2ByZYuNqiBYwgHbwbvywVj9kVawnChF3ilXJM6r820XvzTC8YKMG6jlKuYnQO%2BLGMT4CPCjqbKv8wbnlw8O9csglBBAREf012KgQEU0yKzovPHYR8TYRAeCCzM3NJUrjjoiihig9uzr6%2FTfXt1b3L4wiAAWUlAFgYRHjIS0rTZw8PvXg4qHl4W7FDplSiIjo62KjQkQ00YYKT9cGL%2B9hr2pagwxAZgctUR8L%2FqP5apJGvPucmDfT2qe6na%2FY4qqSdROdAQS5qGLspoBZ4CGjTrjqT1ZwD8xUf9d4CyIior8JGxUioskxRGnbZp2gAwQ3DWLY73T2bIQIAAUVIpoJ5su1inFaPN5lXpKLw%2Fi%2FX7txbWO45mMfMUZAAA8UwQcAOGzMwvyxh%2B576Hit1JKcKYWIiL4xNipERJOi6%2BX3hzPnt9rN6cEn5qr3Og%2FgfGq3OxECSM3BaOiIXqyFj8aiIgrvKlFt1P%2BoqD%2B1e%2F5NLedLEUbgNHKX5igDCXBcyQkV72uUPlDWZ4o3y2GkIo97ERHRN8SgQkQ0ISyU9fkzW%2BdSLaN9vDDTvUdaWuIojGyOt4SAm%2Ba0xEqcSpopxnh3BKgiatOrPrV140UlHWA7RBigiAgOxigfEMKsVlOV9MTKoSeMusfule0IRERE3xwGFSKiyeAitq4XX5Qk91KWYnWEv1ctwxe9cuvioA0R%2BJjqsvWDYzO1xrLE3aEOEbdbhOqq8vnG9Lle%2B4tu7U9q5fWREw8Fhb4geiiLxFUCPm7UE0n6vaXWXL5fsl4i73MkIqJvAYMKEdGEEBiDVpR1F4uI2lC8GqJc7nZ3CgAiAMZ%2BXBWgVm21Mr25C4XbTHTfZy%2FtdF%2B7urUV1KsurutcStWSxbgYw0NVy0E08vFDi1Ozkp1Mk3k9LKFABBER0beCQYWIaEJooJxg08c9AQSvWvzJSN9zaPlPr%2B22A8oujcgdRvNZrZ6FD%2Flahj3A4zaJogqVXi83P5PbPxxsd6O6YEKsAb4SEUcaWmIjupm%2BPWvUspcPp9Uz2i2rvom8zJGIiL4t3PpFRDQRtCCp6N2AW9aGcbPTGeX5xkaRxxgQAoKBWZ6f895XAzIR3CZW0m1beikvvTK03W53WqsNH2IAHN7mvYgo4JBRU7XmQw8%2B8GDmj6gRUwoREX372KgQEU0EHUNaMuV9W9ggQACeUxgM4%2FVMbaqYjgoBplpZedYdOtc%2Bo%2BuZONwG0tOVl0qzv7u38%2FxoB3ksGjNu6dCsmGRju7u62US%2FCkRgWskDSn20VX%2BiUq72VlMU4HkvIiL6tjGoEBFNEJ0krVZNdtttFYPFDetn1m8MY8Q7ms2mC15rDWfxHbNIe958cTN%2FcXxhI9ocuKii5Nvlcd5otObm5pYrTb12vTYaDWNsTen3Lx37QCym8n3FIoWIiL5TDCpERJMjUfKBWuVSu%2B0sLHADpe2%2B329m8F4Qploma4SdzvqPq%2Fq8DdD4thViNrR5UhdP7%2B%2B97gGonUz82KTIsCduL%2B9gwzRnlltTK0vlyvXBqTG%2Bv9aaH%2B8ZFOA1KUREdNtwRoWIaBIYyOlGbdvFshIACZIRRsgyAFrr6elpY8xuJ%2F75E63w7Qmih9G8MRw%2BeXn3mdd6g03pjdDRwfuAGAtbGGM0tILSg%2B6bV6%2BHxPzgqaM%2Fec%2FsUjI0ccyUQkREtw0bFSKiSZHA%2F9So88fAVgPtIdpR4LOkraxV%2FcP56MFK8tmL3zfAD5eKnUqBb5GPppDSl9Whp3r9c5tXbKJeQRzoFGW8JXqUpVzYxrA9D5wxqmHDIwl%2BZNhIZWjAO1KIiOh2Y1AhIpog9WgrgHOABhwAiAiA6srK5ubmdK6mszBQUSuHiG%2BSU0kezP7uaHt%2F63ewOdCiFLatiggIAcqgUoHNMeyPRlhScsLIyen6kYWFJ8bdzA002KIQEdEBJVv3VEFERO%2B%2BQpInL3T%2BrcINoB%2FKSmkjKoRw9hP3vvLCcx%2FcVj%2B1pH5CT5fUAN8Er5I9XX42yb7Q33uusz%2FIVVvpvbHFLQESkAINoArMAie1OubDo%2FNTZxuVphRpyLnai4iIDjLOqBAR3SEa4cTh5UHALUop550xpt%2Fv14bSd6HRaChx%2BAbEixmH8nbffPna1tOvXNlY7Q725Woe9iL%2BkoLWooEEmNeynKgzy3Pfd%2FbYw1PJHHppGDOlEBHRAcejX0REd4iO%2FozYo0Ae0dcjJxGQEGPnlasLA3kI8eRAjLL4uqRAsi7lP1bJn407z3f3g5dzZWiR4EJ0QBKRGIiUx7Y2wjziaYWzoh6Yrp4sl6fTUCnaihMpREQ0IRhUiIjuHNFhqYqtsWwjwnvAhBA6ndFcoubm0rrC1wkS4mBGI3Vpc%2F9lv%2FesoKOl7dBBRAovAREQIElgLXI7HmNKsKLVfCqLtamTM5Ul2zfRgoiIaHIwqBAR3TlK5aePmK9e8jCAi%2FBwMVYClj1OSKsJj78qQvVVumpKTyv1ct5bTcNmITd8LJykacVLRDGGAiRAydHtUQuoKjmu5ZQJ75tpnKhkc7Bpsa84NE9ERJOGQYWI6M4xkPn5eXt5A0n8i8VfJWM8gjEmVQ4Bt3iokSRDl1zo9V7Y2z0f5VrEqo8DoJIlRe7zIocAIkgTRAfnykodFiwsLT50aPbBYrA02i%2F7EbcPExHRhGJQISK6czTi0thM5UEJQgB0Ep2LPlQMdkV1dWUmjIMk2zr900Z8akev9nq%2BO7risCsROpGkLCJ6VFSgUuTliCRCj7wHFrX6ZAiHBcfUeHbvWilajssTEdFEY1AhIrpzNEIYDNMyMo9RCPAWgEPYixJjbNfnh%2B1wfWfn%2BU7nWUFfyzUXtUbQQAC8jy6PgAAKqiKVGIclJXMaU8uLZ04efuzctUUzrkoukRGFiIgmHoMKEdEdleyEB1AduuHrXuUSAHiFcz4%2Bs7%2F2Bb%2BzszfuF6iV1Ys2xDRBEmEBhwzRwAAuwClBiKiKPKTUwzO175maW3Q2u3i%2BnDgu9SIiorsGgwoR0Z3jVLY%2FHE9NNc32UCDQWpQKRQ7g3CDUh%2BNCZIzYzoNO4NIURQFEpXUtKQEYjPcjMK1kuYHWTPO%2B6UNP5PbEcC9VYxAREd1deDM9EdEd4kVvlKef3Cy2q83%2Fe%2BXahWhtpgHADxGhNLIMIwsEQDIAD%2BS5BnpAF7BASXBEqWYI95Xx2FT1%2FuZMww6zmAs3ehER0d2IjQoR0bsrQpyooegtr9ZUPUm6sb83jiEgwAOAytIwLoLHaAhovEXfTC157gELaMGxVMbT%2BsihuYfSykeG%2BdF8kNqOijzo9d1Lbn3Fd75zeQIR3XUYVIiI3i0Buge9FXBjPOo7%2F9uzxvvdpen0mYvty1rDaGggxmALCBABDdG1aEtqWKkPk8vYu1fJBzM5W60%2FPjX9flWS9q5RO1o50ISQv5IfBALEiO%2BICOLbj4i3fl8U3CTgHgUiuovw6BcR0e0UIC5KDt0P2B3l673R%2BhBtIDfylbKqGo3ZmWfOr%2FeQoWKQaliLNCC3yAMASAZXBmqnjarObx2vN97XWvhbuTvW77T8OBUuHZ5Q8jWRJQok4paIb42I4CaJomL8i3QSACBCAAGAyIKFiO4CbFSIiG7L4S49kGRNpefS8qsuXhqOrnbao9w6pzZ0GAMwEVP1h1cO115YXwB6zRyJx3YwOnODBEg0vFE%2BL%2BdQ%2BS%2F07QPOnwixORqV7VUjURAgoIki%2BFoREiPirWcQUUCMECB%2BSynl1geAd54JYhAIgBADEPHODwizChFNOAaV%2F8fencdYlt2Hff%2F%2Bzjn33vdevdq7urt6mxnOwmXERZRIiqJCMY4Uy1oRWRIkQ4gSKAsQBIYRAU4cIMgCWzASxAacKLItSEIcKF4EOaE22JJoidpMUqIpzpCzz%2FRe3V1VXcurt9zlnN8v48w0OORMD7t6MTw954OLh9cF9MPtfxr1fef%2BzsmyLLtNKj6a1NFGnW1M6xcO9p9JnIcU3BW1LbVY0hQ0HRg41o4de3rn%2BqPNHkAEiyI%2BpuikBMS0KIrGtQTm%2B3OPHD%2B6Klf6lrfzeisSAcxu%2FMFh5tQgYeDETACTwz0HJhgmYBjOYZZQA1BEAEFVRBDMyFmbZdl9IIdKlmXZrTJxSXzn%2FFTKHVf99jCca6ebW9fPjxqi2%2FHuileAUulAKaxys24BSlhoFlZ7S5%2F74rPPQ%2BmF1jDmXWhS6iyqqA78ODXM8ImnFtI3ry6e3LlA9hYkmJiIGRjmi0DAiZhiZiI4RaKImhog3AoBEAGHiJh3DkxEUMMjDsN5E1UUtVwqWZbdF3KoZFmW3VTCR0WkaFvGMR7UutO0ezHud%2B0WfFpwQfYSO8oEnTgIAIRAF4GUkgNguVx%2B4IEHLo5G6OsHDm68OmdtQgD2x7sXt3YfC6HK%2B3q91YiZIA4VUxBcEAnifOGdmsVkGJAcSUmHekBLQAwRBFGTIN4F8VKAmFlSM1PTaGaggOVWybLsLS6HSpZl2Ve0ElpcK25UFFtV%2F%2BmFuY2y%2FPL581ume20zE12uSGI7SUZqTa8A8JBAHQlaBHxrRpFIUoWGpjGrjurH5w6eferCgjIaUGPU9I1kMRD7Nkukg9JIOmhYVJ7A6oPtx466RxoB4x5T8Z24iS%2FHzrfOa1klKDstYzcXm9JSaVpIEssHtrw5wYwb6x7JQodvrVAKUVe6UtDOXha9SDD1eEjcEgFDBESRLknEJRNn3klwrlBLbcKsK50UZs4AyzMqWZa91eVQybLs7a4zaYxW%2FbT1o47tZrLRNZc7LiQuQhtcC7tqW2oJdgXvMAWgLFGli3yFlKFAo75MNLUt3tb6xcf6vZ8%2B2DhfuidSMQodETzeXIyxxCeSIExrwHsnqiO17Z2traXeg5SByD0hSVwy30mYaHGlqy%2FOxhdn03HNKBFgFY5XcrLXPzGYO1YtjEOTQl2pFmbBEv8G1eJ2m67ybsk5J8YdiEjCjKBJxZwXZ6qYgYGZEEUTJCfg5loBDHAoZoIKKhgACGLiDEEAwQohOHWIALhG%2FZaYqhXT6eeV0peCe89Cr57amS3q1X7pp4WYoWDcIpFaZRJt1LRFGB5JC3%2FQboqEhH2ommti7EQH3heCFyWHZZZlb3E5VLIse%2FuqcZej%2Fek0PdOw3Qu%2FPN4JxlFzYm7qtQUSGjUAOHCGj9CoN2eYze%2B3gHNlCEF919kMtV6sB%2FCIc8ccy7Acefdk8PBkeHl4zOtTB5WHBFp0dGKN0Pr0ocgp3%2FuVbgZ0Sa9DhEXHZw9m75rvLRt3Xe3KF6T3p3NL5yfTS1evXTyoo3eKTfCNqyIpGkOJg6Rzk5mfzBrdQvn4Nz90XNIHGnlHO1uMTbDIvRcJT%2FWqXzt7sDzHD51YPdHV3K4N8T97ffaru50v2OkQ5spyrm7rHuZJQg0aPZ2n8QBqDkgOAKe8wnBGkSijlEphUgK4HvywxB97YHhEXuZwxVXv%2F9uDq1%2B%2BTuc5UYRghcDn22txakvKX2blJ0W8iCgIX4%2BBIKLInufXppOfmcXrs3HSq%2B%2BSAoiOs3J9vuBHKn58eekMAYuQQyXLsre2HCpZlr1Ntci5Nn3y4vRZmMJs0pwo3aWol1S9UghOEQAiCGo4QE0Nee2xe402TdsEicveDUtpTYaWji6vPjy%2FsE7xIHY6aOWC1r5pQ3QtKGCQzBBUOenK08dPv7M5%2B%2Bxu5x1J6VW93a69es1GA1123EXJhT3Xe3Zqz88Ofvf5K%2BZlM9oEJlEPYAqRzodKTQ9S7GEV9KCAB4I8%2BYVzzyWb9WhWlt5dlUMnJUlQ7qVGiqfa2fnE%2FohLZ9zRNgSJHF5Czq8s%2FMnW6HghnYGnJ7G0pgnxxr%2FCkkkHTaI2FKJZNMMRDRyAFzDEKFRKIwg9sR4ESXNCiKS5nk5bJ06RqaPrEOiUy120FIHYAvS96JGVuHcdnKBmhvB1mAlmIjN0O0ZtsYQKz0hnDu%2FpGmLHqKFeUSxgggmSH%2F7KsuwtLIdKlmVvU5PQ%2F6Xd6c43vEvm55%2B4ci2ORnt7MxTnRS1FM08MvMrAUGidI0mUkhBYP%2BCh4OaQZbO1xDuSnCp6R32xsBR6lZCuB0lOcJ0mX0Wbnqf1rYVWkhDFEOixbPLDcuzkYOULl587EDZKyrlevUet1TOu%2FhPsuITKInfDtOh%2FZrD0yQvnz%2B7EvYJn5gADXMK3%2BESPJJDiVJEo6cBzEKCAwFnM73JS2I7y%2B1f3H1scfsuDp94fD07WB0Ej94bht6rV%2F%2F3Lz64GuQp%2Fr5n%2Bdd9f18jhGa6bX149uHxebQ82HVQeL3SCK2hqSebBgXeoo%2BnAHD7goeswKOiACI6ZGIoo3vAGSAE%2FANW4MNeZI4oN09zeiBGMPBpZpFIUBe3GLVtNMMPEbmWe3gABUJGBDubr8V6bZg50SIIEySGj%2FcCwZk1WxCZ5QCXLsvtADpUsy96m9l1xYWcyGT134czpydLy0oMPDS9v7V3ZHI%2F3BapQzffnrW0mzTSAOKLQGYtOKocZu409crR3xlWry4sP94YPte3RdjrUuiQ6GkERvkJTXdeCMwyE15jzHFk5Usr4kfWlva39Daw9qJG%2BonOOcxuj62dWT1i8G5Uy%2BKPrk995ZnvTy3W1rQYKEOjQiCierzBMDQL0oQIHCaAz2Yk2g8WD8W9%2F4elmrfdtJ4%2BtTEdVarkHOornL26vetmIJsCVyfkj1VHvPYnDcjRNoyJgAQC6DhWAqhKhl1pvKbbJjBgBEAFIiVdEXmWvXvbKBWAGHnzwAuZEAQjghNcTAAwDDDNukYghAAg3JSIOMMupkmXZW10OlSzL3qZmg8WOjSuq5y9fstl01ky%2Ft6zqEwvjsUzHe7vTWTeZzgnHvauEOdWVxBk4gT0Q%2FOJwfp2wKpoqk3bsu1GwjptT08kEE%2BtwA4KaTnoRwStL0d7pD5zu%2FafD4aUre18sIVFQeLovJ9uIvCsMV7tUWcftMnFXq4VPTurf3amfhk1Mh9ARxn3Ai7PgktNaYy0K4BxRwVPja%2BcBcFDRn8IV11G0T7luoZJnmuYzOzs%2FOFz6oI372nK3XZPer4wun%2B3JtoGjF%2BXX6%2FbhxeFaPOCQnNmxunFJB6B9UAgdRUfpmEwsMYsABBAooApzu0WM0VBAE0BySIF6EPAgJEcSEFo4P2JWylwnCCaAdj3ahBJguEBfUT9qO%2FZPiD2wH6UwDsUQIYlbmPUd49CV88wBgEtuh6lInIPoPDGZWO6ULMve6nKoZFn2NrU%2FmbWw4MQ5lyYTxuOXkj%2B%2BtlScPF3WS7pxsRvXYcEfX155dH3tWGMPNNNjTVrpukWNFVrSObRAAYw3l%2BDgAPUADqcoACyKLC2BjEubHfes91hHrmAi4nAz47EgL25ufcvK%2FG2Hiom%2F7of%2F4qXLT3ZuO6mDwYAxAJWvVLWzNnYRQKAofAipaXAOM4d484U4wBkFRUcH4D1zxShOn9%2FlyHT8mXRw8sza6UK9Re6ezpVPb0w0yE5nAI5N48LV8bn%2BcNV5R%2BIwnGmIGsEJsxkUABh0ioMSV6MRCogAxGgWDAO84Dwp8aoEAoCAgYAAdB1JFczEDHUi3qMdOL6GEwDMsJucd3KzFRhTJwoEbs4UEqjlY1SyLHuLy6GSZdnb1PJ051FIyrvadNClqfJR1TPnx0fG9bEqVOVCb3nY8xSt%2BksbXtRZ4nY1vnzBUMXjoriJCQUIj8%2F4zqbywxkwSPV%2FMghf2k%2Fi2OnqWJRT5bPOyuvTD68%2FuFzXt5MB4i5Uy393c%2Fvp6P7YlAqqHlMj6lx%2FZZICAC2uefWCFMEDYLiEEJx5R1FQdIwtBIKhiVnEldO5%2BJmJpiDj65MfPHP03e1usMjdEF34E%2B9%2Fsdl%2BwUTTAgidjES2w94%2F2t4%2B%2BcDRE7N9DqlsTy6zP%2FQHTSytq1IXOtTh5lFBWizht7tBR0ko6fxUPJagqyz2YyxoS2tcEz0GREjQ4hKhQdZ9Utlt4j4I6pxQyCwGph4KxWlqVNGSTtCAiBuJAWbcKsMMFVKhnVQSrQvaAAYOZz5aQdUCHWZ5NSXLsvtADpUsy96mVh0fnys2h8WkP%2FCrR0II3zxuVprpnLVD6pKO1zLuRKM2ggM1QEQwXmHGscUFzwzAbH113o92lwvZ6ei6Ds%2FMI0EubF1%2F33w1R%2BSQ9mXwhd366s70bDICAG0LBTCZTWARbnDuSFkMJXoDAwHDhJHSKA4nSCQ687xWCI72SrSj9eyJ81eOnTyymg48iTt2UJRf2NgyZD8ZgPeoVr3elZkNDuJL3i%2FghiiHYdOtSNyOtuatLyYiyRSsR0omKg5kMyoY3hPBFAQAEmlZ%2Bsc9hhmthygoNIZJnJlsJr%2BwgFcV50wTzmM3zQUvACKAgYFwi8zeZEXlNZM1mgdUsiy7D%2BRQybLsbeqIT995rDLvLTVuf0MMQR3GPXBF5p9l5xg8D%2BOeAHgQThrfkMQVCgBzlv7iSv%2FXd%2BuLpLqAXkEIl5v6S9eufbQ82a%2F8oVZ1aj%2F4zd34u7u7%2F1wtLkLl0IqpL9zwBFHR6cL1uqvPNPIOJyda%2FWDL%2B%2BBoj%2FWjR5qmuaDdi9o9m%2BIL03RN2%2BeUrYGhHTUDZUjfUYxoZlQv%2BPispnOxvUj6sTB3Jo3FlDsQffEvyr3fMF7ss4fjYK6fCsN6UzeGaZBPXrx4ZH35XU2HGbfsTLH135xO1yKz0LahLcvSDtqBULZMJrhlzncc33H%2FKuplB0AfPNWM5cQj3r1%2FhfVShwecmKPfEZRXmU8C0Kv8ohOHqamplFYXBgX0lK7ZaZyibX%2BCMlQ5vzxh34Ehh6gUhEKTlyb0hcK2xmMAAefoQ48woUiRLMuy%2B0IOlSzL3r6CGBoRMO6d1heT1loBA0AE4xWTZFXhucFZ%2Bta1lZ%2FdvLzqwoiIc8Q4U9tx7O3HE0cPMZgRfblbDze3zl4SQiB6CIFOgK6tHWVJuX2wc6Rwi4u8%2B8jRj%2FcGj8Zm0LVO056oej8nxaO93trC8Eiv%2BNK1K7t7e82YsWMXq1yhqh0NUPnKKj9rpudaO%2FXCtQuPnjwmVc9m3D6Zimxc7cJYdnuGmeAUBRKphCvRlvZk5x0SGx%2BI3LJK0yNlONXrRZEOBGzQ8%2BL8AFmm7fUo%2FMHm5UpwAW0BRHjFak%2FWH1z%2ByGDlxM64bFun6lRNBDBcFPFmwboBCcBMMBQzghD5Wg4AQYRDMMAQByDclOTRlCzL7hc5VLIsy%2B4tZ%2B630tan593zpkisRhOgCQVNdxz63vEaDzbTn6f4K0VDYXQFuEtDjtbxH3fXfsqtraSWW2Difvcdx%2F7m568t%2BJPX0oxuh32oIyYQGMqo23xXy485976ojx6bX7Suqq97jQACgKMHS02zvrX%2FmPjvMmeDuSf2Dv5pI59GNq1r6XcowwZtSKDFwNYuy%2BwfvJjmPnDmA3svOovcls6FfzaY%2Bye7%2B2eTHp8Ej7%2B8sNXEtpzSwsGCo1Ufw%2F9xfv3dyxeX06Ers6eR17IEAINJ903iPwcD8Xo9CFJiDjcrZlc912s708w%2Fuj8apAO4wd7kyUAzN7dR7Pd3kXFVUo7YA%2BYSZiwpJ3c%2FgPsih2fCpUWWxkw6EgNliBWm5g%2Bm8WD7WmCCW8rPfWVZdl9wZFmWZfeSmu%2B6DuWrmBVQgpPEaxTE5eWl3TkjQghAM%2Bs2ou3PuN4qtyaJ%2B1S%2FW2hm15LCDa2iiggpxci6cx8c6MMPDVY0DGLtNXIT3lKfLiAnjw3f90D%2F6JINRRQFSFCAB7NEGqsE9s5t73ZqiHBbJrirV6%2FOJgY4HID3QK8SAxrFuBjZvn7hyrVRK467ybgJMYBbrC8DMRMBKAQgkQDAOWIELMYoIndyhxESia%2BRZ1OyLLuP5FDJsiy7t9oYNlOMtTGFmRhqKDHOixzD9azjNcR0dVl%2BwHi0E6SipUrM4AUvv96OWwvcggZ54qULW10zoq2hA%2B9Aoeuq1PZm44%2BI%2B9iD4d0PrB331S2e1ViS1oP%2F9%2FtzP7Fw5qPmHqJZoCGAUia3AA3NAeWn4%2Bz%2F6s5vVq7FcXgq%2Fk8L9%2BndeHVigOI7YNKQmAVagZbSSsNtS%2Fv3Z%2ByGgrvIBGjMeB3nABThEEwFhQQtKXk6R%2Fz%2FXxPUQZwFDs8bLgE0MGUydeMxe5OXrzBqHeoJmmdUsiy7T%2BRQybIsu7fahvGY7WiAiAAOhzLwLJQLQZSvVvpuff24BGhbej3AQYQnNpq9JHw9Jq7r6rNnu8u1GcZX67rutC8WVv17l44ttNGnllsWLK607YeG7vF3vv9E4QCWSoyuUwAQBKg3bWdnr0M4JEPG%2BKeubnedAEFcIhl2485NBKAsy7nB3OXEQZQXD3YaAneNcRMeALNDfZQAka%2FwHjNeURQFZhyeICLoVz7Tc0ORp1OyLLu%2F5FDJsiy7t65iVxIVHEkstLRCV0Ck8jzc63sSX81p9%2F1d%2FH4JDzTT41GAHeFL3n6v4v%2BNFqXgTSXcU103jDJxjIgTTEEjcwUD5SGL34z98MraI%2BPap5ZDChZPNft%2FqZt%2BsLP3e6FuMRaUAf0J8QrT7VX%2F3Dy%2FCrOqxyFFV%2F6OX%2FiVhieSqZfk%2BzvIAbLQ6kIDihUMjDSeTVKXivDlgl%2FcsS03NBx3h3ydghHHLTMRgwBCmXBJiI5asECDrwvflfE27rzzZddfpKQtsYKu3KO3TzVKVUsAQVCyLMvuCzlUsizL7iETP552PiIACAJ47wHnWFhYcLyeLUo6c%2BbM0EuMEVCjqjjq5KVr%2B1PX401FZGMjeV4lCACIABz17tSpU48VxSBOuS1e28r2HnngkTmEGVRwQyIRwgG2f106I4njMCaUly5dGjQClGWpqtzQcwKQAAxDFbiG7TZyadS2UnGPGa%2Bw21%2BfEVBIABNkPB5XTA%2BwWqVWZsbEmMAExtgYO8AOzMbY2GwCU2Qq%2FX0bXrNBSqlzEABIxg3RAIy8sJJl2X0i7%2FqVZVl2DyVxX%2B75diKiJoQ5ir1i1vYiiTbakQpBeZ1K43fq9Imu%2F6Q%2F%2BGyAQAz%2BbExdwb%2FnB9%2BRpkLiJqbmfs8YCQQaS40ZVgxIqdZ5eG%2FS7%2FHxWD3hDszJ7Nuq3nNB%2F7SRWbQaaupEkTBig%2BMq%2FEn032V4blWU8jfS%2FKfi3r9KtQm%2BDckiRUoSv7XlsWL5k%2B3OjmGO2hQfCGGSJmcLfmlvf2Hu2LukdSTulAEzg5tvKMwhBZGZKTgKhyoOHONGL%2B9u%2FDVZ5TBOTavppE0L7fk6Pq9GgBY6EFC83AiV%2FBVklmX3ixwqWZZl91DEpZTUxGHKDSJgUfC%2Bk6S8jpgOXPfY6ce%2BtPF5AAdtAlY6eXJj8xPL%2FcJPuYla3B6MMAwAUyCE0HbtES9HlhdWK0Jbcwc8cV6a1dXVY5OdZ0cMQtFEylAmkil4OtjZ2dHFklslUysvblxpYgM471OMCHg%2FTzrhw6OPvfPdO1%2F%2Bo8sjMxAhJVLCcVFtJ3UXxvHB%2Bd6ACfeMcqecc6oKIBj23Hj3%2BKwBDAM8iGAIAHgxbjBDBAwTOuiu83Q0BpAAELihAIC8opJl2f0ih0qWZdk9VPtwNsS5I%2F2NaxNPoZSEhkpXp%2FJ4aSHV3ESP5s%2BX1%2F4s2QsD2e4saK8Q93ya%2FpyN%2F9L8o0enLziUN%2FLiJO1DqyAQGkKPabCu8LSV8G1LvcU05Y71dfbt88t%2FdHXnnDESo6CU2tqWA3BcVM63C1iLJG5B7cpnbfAP22sH1i8tpuS1MFLyZVyK8h%2BV64%2B5uSu1doX88ZwxMYkGWFEReFbbX9i%2Fcmz5gQ%2FEqWDcAeHrMePWCQLCq7Qz%2BoIZkQLdxl5IQw4jMQI8CBBAqWKYo0g0Djer43xBU4PvkUZkWZa99eVQybIsu4c696%2BdXDoShmcuvnjNMIAxfZEjR%2BZc1yG8ITFdlOkDa6cXu0vbHSLSxhZ4R5KzF66tHPElyhvZ77RyADhIoAoYBkyTFUURYssdc5YCqBqAc6iaGTc00LatcEtM3G7yZ8%2BfXfGy36kgyRLiEUkz9o9ypCis%2BdJHTx39o3MvpRl4rDMwAO83kr0TeW734N3Doictd8C4mwQAD4IYhiqd4XiFx3s8hxGqqmkaIAQfg9BGIJG%2B5v4ln6SSZdn9IodKlmXZPXRe%2Bdz%2Bdh%2Bmg8Xj73pst54UUbrxzmrNh%2FwwtA3CzfRov3ut93vnzUVakxl%2Bc7662M1%2Bpt746TMnz0z3eJ3kwkUtOid0RgUWMSmZBwFmA06mqbfEHXOma6k55VlVJkVBjNK2PcwpRQSxy6mCjlswDr3PTOXXkS%2BnCrHF0NNullKDs3ck%2BdG5lWO257v6IxK%2Ft8d0KpfNWqY1VdsGQi%2BW0ycC%2FfHOexZPPp6iE%2BV2CXeTGM4ACjzQRMEZHgIFQ0Vbt8uheBiQGhKJVCFhgPcA3uFmRAzLMypZlt1H8n9nWZZl94qKP990WxOeu7p99uzZpmlEZG1tjcBEtdfrBUlfJwZI6%2BvDY14SCSClkVmHXEgkHK%2BTRMZtcoCAA8DM4QwDigLvgljibnCOwaD36jswM0AEgdpou1bM%2BHrU%2BbNucPHi5oGBc0CMEUjJUmJlyLuWlrw1QNE1p06ckB4x4hCPB4gR4ZpZ08hT1%2FebVHBvOG6DAR0oymsJiibS7d%2BEgAiSZ1GyLLvP5RWVLMuye8XwXxz4xSBb0TeOZ86%2FCAzHrrzOSePx2rwYb2q%2BG%2F%2BVWfi%2Fo0VJZ61P3RIGz7vp%2F9lee58sLFjDVzNoXdkIcx1dQatgsaJStIFJSakdd4vYqCxEGtpAq5U1CpMeGAtTN6Ayqfl6Dsrh76v%2FPeeeTrqs6QCdFB0DYcxjJv%2B5739k6zrOADH9%2BMHsahl%2BM8TPRisLUhdTG1PPYfplwabjIyvrnyB6S9wrwi1zJl7x0CBgYs6SAihgHle4PodxdDzzIKCJi7Ma80qR8A0u4pJDCzQiJLIsy%2B4LOVSyLMvulahud3e391WbNzHe2ZsTlo2F0rtGeVOF2tF%2BsU7vcrBznQCI7GDnzsWDUzr03pF4DUPCy8BAFQBBUUGArkNTp%2BKdJe6Yqk2n0wioAgIABgZQUkLD1yEboX%2F57KUdswIajNdY7%2FPAAw%2BE%2FUvcUBJf%2Fon%2B2YtA13XgAMyo2GzsvchzV65%2B%2BMTqvM242xKHZhhfI4CAApSUQ52UIkACoDXrjEJ4rdrghp6TUkjGgRoJLDkqT9nQAkAHgEl%2BViLLsvtEDpUsy7J7JUV%2FdtRdUEl4cMzPU9e0PCzyODY%2FrbkFi9b%2BZHHsU924ZTzQMG1s2mdSyafGez%2ByuNIj8VXMyjIYA%2Bg68CAIPhBaIGLtOFaLJXdBq%2BlJSTOTQWuKOEdSmAPoZmHZD00OeFONK%2F9wa%2F%2FKtH3KGY7T0RZx54cdwupA3nV88P4rB3FOuSGYfuNo%2Bom5wWWbvjTpehY8UjdGou3xKbNJywfUfxjvSRye3dXxFQFndFBSdHQeVYJqRKnpfWKw%2Buh0%2F1A3cdUQT4JJcL8aFZgRCx8aiQSHYBXWEDSSZVl2X8jfu2RZlt0rgR4wVRME55hMAKAvJJDYcAs8UU6m%2BcH8iUDf9QGU68bFbVTNEF5DIITgAFAFwAEIAgySdB0qjjumrrCUXE00FAVE4AaHK8sS4c3t%2BMG5je1rSqhAAQKBuQFQDXjooYfawdgJ3CAwZPqehx4Yz3sAKF0JmOIcrVGZvLi9m9qS2yJft2HEDvt5BRQUACAiALDSL6uVE5%2F48Dv%2Fwnsf%2BIH3nPy%2Bl6%2FHX3498T2Pn3z5%2Bu5vOPXd7z31F953%2BpXr5fcv%2F%2BR7vuHUj3%2FjQz%2F44W%2F46Ee%2F8fja2ukFARRtUsMN%2BRiVLMvuM3lFJcuy7J5Q8RtWf6FHV7FwvTdMfhaom2mYZ0v5xuhKSdwaHw7%2BB1n4%2B9r%2BnG4zFHrsmv1hLe85uv5d1y73feQGMzv2aC1XGUBl0C4kuDrYo9ejJio%2FT%2F8nXa%2BnLXemc70%2FnoUzbvdZb6wJdV0XQ6ap3JqtwjGpF5Z3Gpnv2XVuIrqqe3HwqUpewigGWHexgGHJxu5HRL5jpfddF7eD6%2FhqhXXfWl%2F96bb%2FW2H8%2BS6eVyxUlJV6h%2BezcfSZ%2FfaH5tYT5zzKnWnBAQYQoEg4DsNNukCCEZMOjaXSqWM5xG7Ntt4T2ke3tSd4Irdohh74x3x5Pm4zcR1BxSCRwIzkBnUofWs%2Br6hkWXafyCsqWZZl94RB23ZLCMYrzAyIkWj0ej2HcWucxfllXdL%2BshNCQAF2kz377LOt9HgND865gcdAAHA4gBgRrpttbs52m2h47oS4JvY2Nzf3DcpAXQO0LTF6AVj2fmVlBafc3F5TnuvOXVcA2pZXzGZAr7D19fUjN6mpfmrOLM1ZZ7zOyHgoyNmNs9PO3d1Hv8y4m8QAAU%2FkMJylKiUgSD4sJcuy%2B18OlSzLsnsiiVyNcUEhYaBY1ATRN9CwMD%2FnhFs3rKbfw2ClwtUd%2B7DH1oBfG%2Bl%2BuQLCDcHsXXtxdc2ueK4JuzRjbDBlMIr4Qev4vHe%2FQdNKxR1opfqnRfq1Qfxc36j6izvl%2Bs5Sb9fKWef7bHoeFj4cfGUdN9H5%2Fj9upn8nxJXO1po%2B0RPd2n73%2Fp36E8iH5%2FuP9EMU4Y2oLxYGxceWimuCJ87HZn46Qzu0q2bUyf4q4y%2F2%2Bskcd4%2Fekyl84%2FA8Cnlr4izL3hZyqGRZlt0T0Tg4ODAD5RVq6sQBI2%2Fzw6GYcssKuqMn5rfmrYq8IkYGjivXtlv13CCWFpvu2IkTC06%2Bdu8pM%2BB6skuXRjtjlyi4LSbeusFzz108qI0e1DVgGOCRGDnqXW9xqSdNoOMNicxm5eVro1FSAeccNxgIJiJT1fMhnFcbe399Vm%2BO6s2m2ej0hSjPSW8c49xg0Bmv1xrDIM9vbc1iMIS7RLmrjNuV9x7OsuxtJM%2BoZFmW3RONyVNGk6AjERUxIsHmOt7TMucQlFsm2GCw919s8i9FPhelRmfK015%2BYW%2Frf1pbO6aRG07N2n%2FXDZ%2BG3wlMQ4PqYlN6%2FPSgA7a8fbaQvzXr%2FvLS8uluC4xD2g%2FDfybhj0Se8UZ5gum4hyhtSep5s5Z1Zz9gHBlvBW14I43v%2F%2BHO7DeX3cZYz3RUqkSH%2BS2GW4B2z%2B%2Bkvzu%2BMoo1KSHgIOE8xFgaCzJZKoqrbdsUAL0OSIwV6OF20X%2Bp9nyRTsnct7tpqQ23TOTun10fzXgdNQAzQzgsEwE8WZZl97%2B8opJlWXZPdMZBR8NXMdWesLiIwzikivTO42ujzgQBAN8ftF4utKYKNxSiVVUtrJdVBcLXKApeqG37YOfPdm3qe4ddS5m44fN7sy88%2F9IMAPb3cS4QuGHeyfIRW1mZr6zljcl%2BU16Y7G7MlACgKK9yvqhw%2FlJkVDcSgq8cDhRAE2Z0xp7auaatjZuRwGBfNjY2ptYz5K4sdAgAZsLdIYDc%2Fl8lT6hkWfZ2kEMly7LsntgqyudhEg1F0UjEJ4gPiXuvFV4bDslb%2Bnhs%2FwYs9NVCWdnC4KB80vhfwv7EAjd408evXf8v3YkfaoQSfLc%2FmOz0ZouwRK%2Bqi8rCZ8ryv9L9X9sNe9Y3hFugUpwNc79Yhr8x2f1tJ9eThbYfJhWz8vK8bs6l0UAt8TGRn9LqKJPyJqESpfo79d6vDBwGlJelvAxgSDzO%2FnrcOyp1jymq1qVkHhxVSa%2BkFCtESvFBSqHnRTow9vthv1%2Bs49fx%2B6F6%2BZr0%2FDNqPzvUf9J3XSruRqegZnfx8S69Z%2FsI54jJsux%2BkkMly7Ls7ov4qfgOZsZXiAADR7%2Ff9xo5vJ5jvTzuAKikisSJ2sWL3dSXhuNV5srmyNpKl6xfwg0lpcMZ5vH7Lqzu7%2F3p1tU%2FuDzadPOdFNxcIowZbLrlP6tnTzx9eX8iMzUPgng8KZISgOdocIXqyWNrBR030%2FbPXZ2cqxUgRsDhMEOkpZ3atElN4QoRQZWUAGIkRpKR7GUpWTS6ZNxMTMDigVy5ciW11SHXKijk7jz6JdyUk9vvFLGvjZF8jkqWZferPKOSZVl295n4P9zd33FCNBISpIsdQUj0lU8srLt0jcMrLB5fs7U9K7Ub2axB9guWgnzah%2B9OYUgLAM7icOfc%2F3z0kZXtF3852pUV0G676xZSmMNDGBX%2Bpf5yO9n9ZN2%2BZ3fv21eO%2FXnP6W42sNqhggLJQnR%2Bszf84sLCZw72ntrdmF1tn1MOvIWK0ARPqhkz12OoNJMz%2B7zf9KeOrC10M6cdb6Rz1S%2Ftzl48IvsC28F7nxYC0ymmRel3ZgCYohEcKZACILxCIZJSgoQCx8P8JNajOagGk1kHSBSTgqQsyjOz9smUPlp2f858kHTrSxGdca9LRbDbTgrNHZJl2dtGDpUsy7K7L%2BFjjPOe16uTgnoxjNtgRXfmzOqVF3ZGisMhbCnnz1%2FZP702Z51gAFBIO6vahfneB6S%2BooZiyitKSizSttd6stRYu1%2F%2F%2FvVzl40PwjfgVvuDI6srMcYtSy%2Bl%2BHS88uT4wpa5q2b7agAQO3oER1ETqWuKiHHcu3efWKpKKbXlJnanfuNgaz8IapilGFFHUdA2XZdEuEEwgVcugngAUcAh3Hg%2FjVNwAE0DrqQc9suDZgJQtzPjYZVLl65PTywuFHdYFgQRDsmMmxERQAyEm8grJlmWZTlUsizL7oGUwtODYnbQ%2BZYE0WkSQ2Lh%2BcaOlaYui8htER%2F%2FWrP0v3XXn2DsHYOOQuxTIscWVn5sdKWwBABi2gt7%2F2EYfEuqGO%2F%2FSbSR0EgsLXbAuAB66mr0S50pnO%2FJ7weZCNtpbNfGIdFzHFM3EFqTVrWELUeoivnWWo3jssbXlBA5ucdHgvuL0X247A8ZiylvxFzxvxJ%2Fu5DtzggVPaWx4mA6hAKAzT6YJ2lIrjRKKIge1DogGgkiliAC8BDJkfb22aPbh8a7h2ZzM9rzS30aR2pGY34xsVS0329FkHQnu345kcPPfwgQ36RhxLgdkmdUsix7m8ihkmVZdvfF6Gaz2STxCjMDMJt3soCVIXK7POlo0T545MRDe1fORhMIBTGxsbHRDl3BVzjScNEd98sr%2Fb1Tu3K2tsaoCDUAYTh0oxacQ8VxNVlSM17lHMCWagUlFKCAQ%2F41viICHC%2Fc8V54z%2FHjQw6cxpseZr%2Ffu7x5VQqh8BiIgBkolMLpgdvsFEskkiYn9IUCPBSEAlSsMRkbDQTMoAInzIvrC0l1nHTGzFFgBiCM1R4O8uzGbLZWzReJO6Bm%2F5asfBgAkZuzXCpZlt0ncqhkWZbdfV3tnw3amgTEY1E6fEIYiLyf%2BYrEHZhL0x%2FtLf1yshVQcC1PYtvR%2F3hg0Ilg3BCsO522%2F7vBkX%2B%2Bs%2F3HIs%2Bb7RJTwXzHwWhzf86RDBzc4BwhEGNr0ooQDEsAIoirZkWKaeSjzLn5UsIkLc54b3AfiPp9pxfWGTntuImx7%2F%2BD8ejJgbsSlV0HSpXo25Ep6%2FAhz8eOLP5MkUICUweBVBheFWjbGkjOJXxyKEGFJH5%2F7QQW%2BpHJuP7l2eVntmUzxgmOUQV9uh6Wnk3jfWMF9xOh6sXmtk919E4ARDikznB8rXQHKx8OzTvhZFn2NpFDJcuy7C4zcXFqs0Bt5iVEi2aGgAEsymKQGXfAW5rr2%2BIybk%2F21DooChns7V8zO7K00CPxGmK6YrOPnTm%2B13Z7F3b21aZdVAQgRoCiwDlUiRFV2hYRkgIYoLzCUsIBgEU9qFlQHizcySX56JET66l2qeMmoi9eOuDydDruSdEvzULsOgARsNPera8vfHBQrbTTwiUA6AggYEBRVbxKTMAAFI4e7KmJOb%2FfHxyZOzK7ugU4HIBzWBSkNjxy4cLO9uPHT6TOmXJzDuMmPADG3eG4AyI5VLIse5vIoZJlWXaXqbk0cbYgE2fzyStqZggIJpwIfS8TjDvhZfyji9XvH7RfUDahLRcua%2FpH0%2FFfXfW9lHid03HyE2HhncPVf7i%2F%2FVKQJ31HYq5DEG1jMjEcVIYPVB0dABocPoiIItHMQiwKiu2jHe34%2Ffv%2BQUs%2F1fXPrKy5tF%2BllptI4qez%2Fk%2BtXbl2XahtoeagLL33pCZ1LXCi0O%2FT4mg7FowbChRuMN7sfWJo3X%2Bcwhz8rb7stvV8PXD093FTkZ7Fq2n2VOl%2BTuv%2F2mzAmwlm3ETi0KXiscAbKzBuV0KAzvKwfZZl97%2F8pUyWZdldlnCKLiUAEYEbjBbKsnQYd6an8X3LR%2FY6CwCQ0gyZtEIhUT2vI2hfR9%2B0Xnz7xz7UP3XkVOmWS4lKp6amggCAYTcqBYeLGuu2njWzWd3UTevxSDrVNFXJ0vrCd7%2Fv8dOPLZVpr5dabi6K73an5TXZieagpW3bJqWYUgJOBjl5cm154AXjdonGuUIePLO2tiSAIIoCmALAdqcvvrjnmXELCuFrzIvsdQkQlFtnFrkpDw7j8BQBAm9g1QOI5hmVLMvuE3lFJcuy7C4be%2Fc3%2B5d6CMqIVoogXexrIHZrPd0%2FIwM17ow3fc9o8h8M%2BX8auZgMG%2BPkRbVfeHrhJx6Px6e7vI6gi93ox649%2B0Ou26v0iZqfdxI9U%2BW6xuvGjC4GIFCWqBIjMZbQg6GTY8K%2Fw0GZ9PQOD6%2FKiXm%2F2mz0U8vXs236i3F%2FsCW9AfvLUIOf4WCLb0nyTWJ%2FzusgNgh3wml3ej587wV9BnmR67ugMCmoPXWgF9xvmf7Brn3HMm%2Fi%2BaVj38ZL6u1cbMbCxOhXrHZyzGQOoxulICRu0TOD3sfOHWwHOZ8OTGQaZaw2KHYXg7xQ2s7aXLWzy%2BF1ZtSsGTtVvDZvAA48x3fkHbErE9Rt%2FhIyy7L7Qw6VLMuyu6w2USXyBroCI4FxxwrS8eUFf%2B2AV4jMzFoZXbPeMUSwm823ePHLiwsPL4RvX3%2FH%2Bcns0rXL%2B5t7JOYdRRFC0StS9M4oXItzRqum%2BEnSD60VK0VxdFCtOPrWhRS5BSGlOfOXUxo1rNfuR1w4JfLfx6Z2zDpbX3ZHNXlJ3Jmg8XRy7zzWv3BxViQKKAKuQD0ELnkFVgm8qWp8MIBz0SJEA5g1jLACe8i7h8yGTc0tOzJrTxT%2B6VlS6Aobt4hAxcbEKuUDuyNuS2V2ZhCm47itvEoBtrATiQ8fqeZFybIsuy%2FI5sNzZFmWZXfPc37w189tfdnLxdow50NIse3jC9I3rfK3lx8%2BYVe5Gy75%2Ft%2Fb2v7jkTwpJs4NWz4R%2Bt96zP%2FowM1px5syJIqLKq1JHXWnbrb2m82WMexBgDlYhdWStfm5hbl%2BUXrvtGeppw2H1KjXVPVZnHNLE%2F80oM2pVibm6yJ0wSJ3SUsxa83Th%2BAMRJ3iTMDMpRTGA8%2BbaMTvIZP%2BwqwUSW4Yi17SFGsf66GkgXQcUmuhMZ80eO81qRjBe%2Buik64s1EvktrQWutZ5G5RhYKKJiJnSmbSFi0EiWZZl94UcKlmWZXfZ56z3t89e%2F2Ip261hznmvqevjF1366EPuf%2BTUca5zN8x89Qu%2B%2FORz1%2F5MDGMh%2BUfEvtX0P3vv2vHplMNIhCQScREx7xXBzJk6s4AGtLD862%2BWZVl26%2FKjX1mWZf%2BWUfGXY9oxdqKJ4cArHXQ%2BLePeF%2BartsNxV%2FRT%2B50UX%2F7%2F2Lt3Hsuysw7j%2F3etvffZ59TtVFdXddf09MxoLtgyGpCNJSTkMZIFsSUkIAQ5ICGCBD4COYKUiIQIkSAhQjI0XG1sJObS0%2Ffqmrqf615rvcg9dmvcTiz1qTp1pOcXlFRJVba2Hr3rkt2C%2FU%2Fxs2rwb6W8Hsf%2Fu7a5PZ71lPULi0rR1eg5kgQA8Mq49QsArpei8PlstlaZu15Sm4bDYa2khfFbSndubOxGvXBYdP%2F%2B%2FTNx9RMAYLURKgCwSBOrnsknkrtcqqTK5aYStCO9G5tKSYuzUebf3Rjc6vy2pIFpu%2F1h8X990n22dmvuUQAArCxCBQAWaW4hpTT3n3tERUqu1mIVihYneNlv1ZP2K5OkqpJ0ZiqlTLIAAFhdhAoALNJRrP7rLI2i5HK3RiHKZSqmd1U2Hj2tlLRQm2n2e%2FvDXZfCXOOjY%2Bmz5H%2F7%2FY9Ph7edV8oBACuLUAGAhXGFkdt8rtPO9ZzJ9AVT2yqaadFqdcNeHGTfzlkhSJpJbWWfnYw6sfsLALCqCBUAWJhidq%2BOB43GLqkyxVpWSTJtx%2FA1aau4LsFezL87qPdnaXA6axUeKvyn6x8OLg77GwIAYDURKgCwMEU2mUw2Za6Xz6jEoq2tqgqmS9Aqv76%2Fd75pL%2F7859mPZmdPe4MZQxUAwGoiVABgYTqFJ7PZvNE8SqpkVZCiioLaqF%2ByXq2iSxBUXvfx96z%2BRrRGjRQ%2FV%2B%2F%2FQvXPJ8dH%2FYEAAFhBhAoALEySXVxc6Etcrue8Utu2QZelsvzm3t5JkclMJule0r17z57168xQBQCwgggVAFiYqYXTaRlJRZLMi4IUJFXqGu24glyXIyh%2FfT76Vr96O05n1j%2BveqOqf6jwH8eHp8bdXwCA1UOoAMDCTCzMZrrIL49TQtNM26aYmVyXZsfL22%2B%2FHb50NuZpLg8fTlIl7ikGAKwcQgUAFuZpufG4aNy4otTLMh2oOdXg3bP5H51OrcyDZV2a1rvf6R5uZ%2F%2BaRu%2BmtdfTzg8G%2BvuejZo4d0IFALBiCBUAWIys%2BiJXLqUkSXKXJJnL2xAGg5BlumR10hu317aCouJUU0WdSB9%2FfHRBqAAAVg2hAgCLkWUHnTxoniWTikmlaSpT2TDb29zQFYSK6w%2FbnddKuteMDnWyd962J%2F6X2f7ldpMLrQIAWCWECgAsRvYwGo3aYHIpSO6SqqqSFE1bW1tBly7Id9uyYzvrpZM097mk3OkH54ezjgUfALBK%2BG4BwGLMS3g2nUxMcqlIKvJiSqa0VrRnMbrr8m2ls99fr25Vo526a1W7ev8e%2FW9GShoU7ikGAKwOQgUAFhUqNpqMikuSir7QdZ2kknNTvIlJly96ubnbH2%2F5Rq%2BRZLJ5pZ1nNj45nztrPgBgZfDRAoDFOFPvkcoTl0ySzKPJcze5EfVm0PbFRFfC5G08%2FvPY%2B%2BZs8iT0HseeZhs%2BCX8RRg%2BqLAAAVgShAgALkCx2XiWlSXEF6UuPmWzWVb%2BvXnFdlV4p7%2B3vP%2Bh8u60kKaXHWQcXupdGnbP7CwCwGggVAFiAInuQ509Cd%2BRSklyeu1qqVLyb%2Fdad3TYXXZWq5LfOT%2F9s%2B8aNcqwqbyne1M6TYH9dl2NeqQcArAhCBQAWIMlSSm3QS1xyycyiFV2hvpeN9fbJ5kaTOkljjR8lf%2FJE9y8ukjFUAQCsAEIFABYguz3zfBKr2U%2FrJEi1LEjF9eZoWrnrCsWS9nuTP03pWzbvaTrW%2BCKqTO3vZvmk7gsAgGuPUAGABejcxuOxSpYk089YN4sxWNHVGiq%2Fv397nn7yr2PUp8mfnehTeVIlAACuN0IFABZg7uFgPj2IpirIJFeUKlljurE52MopeNLVqj1%2Fc378x0pfid6rNMn9rP4nlf3j5%2BPC4g8AuPb4VgHAAqTi4650pchMkpm%2B0D5%2Fkz7HqGXoe7772mvZ9RMhPMr%2B%2BOCiJBcAANcboQIACzAvOpPOLCgGmcxlUpStW%2Bhv9Cq5liF6vtM7%2B%2FW%2B7%2BSi3qYG28feH4c6pSQAAK43QgUAXlW2UIqZ6YUXv0RT0zQKQUtSxfjOO2%2FdrkwxKoSb0be2tooXAQBwvREqAPCqumDf7w3H0dZmSaFT1cu9GzPtbmj4nvQHFweKpiWp3b8%2BD78d6g%2FGj79x%2FNm3w%2By7d9Tv1wIA4HojVADgVblZzrky%2Fbyc3czMi5YkKK%2Bl0c7OzkC6WVlb%2B34JlbIAALjeuKESABYQKkdeTqUgKUtWVIqUx%2FKh%2B%2B5IQUXLs%2BPTX%2Buv%2FTD7femD19dfm3cmDtMDAK47JioA8KqKfDabuWSSXC8Mgw9bNW5RWctTe7pl89%2B8u70fw1f6g4Fzkh4AsAKYqADAK8v6uPLDoiipk6LknSx3Vn41ar24lm3TJ99p9J23%2BpqPBADAKmCiAgCvyt1ns1l%2BaUk1M9Nw2Nbiii0AAJioAMCVs%2Byf9Kq55FFtVkpFmliMIy9f9V7jHAgBAICJCgBcOS%2Bec65NZibJZHruvJSq6QUmKgAAMFEBgKsX235obw7VPDg4dOWeJXcp55trg81YAofXAQBgogIAV28yndV1vX%2Fnzvvvv%2F%2FW3TfqupIUTf1%2B341lFgAAQgUAluG40uMfPfz0k4dHk27j1p4q9aU9s1%2F20hlPKwIAQKgAwDJcjMeTNDk8O%2F3oo48%2B%2FPDDlFKR1s3W19eNg%2FQAABAqAHD1koXDG%2Bu3tXGU2iTzaOdJLq2bvlqCc5IeAABCBQCWwKzqt8WmSUlV1Q6Heu44lfX19UYAAIBQAYArl6UHpyd7oRqolcr0%2FERBJt2S3gmllgkAABAqAHDF3KxtW7c011ylKEaZhsFq6Yal2jlMDwAAoQIAV84UN%2F97%2FqPmfFTPYhfiuNGOxkN9T9qdnggAABAqAHD13CUpmPRCVpTWpMC2LwAAeJkeAJaiSBcmuWRmKpI0lWTbcRC48gsAACYqALAURcqezSXJZJKUNJWGw2FwXlEBAICJCgAsQ3Y7joruslLJi0qYqKyVdr1iogIAAKECAMuRXaWUJEkymckq02BTbjImKgAAsPULAJaiM3vaL2NJVrLlVnnP7FeyZj6plAQAAAgVALh6xeXuU3fZj0lqg7VtFPu%2BAABg6xcALMu81zyalNRKuUumVrqp8EGzXWdCBQAAJioAsCTFzaXO9UKRqqpqWF8BACBUAGBZRnU4r%2FSFIPWk7VLu5tBYFgAAIFQAYCnmoXLXC5VJRZtVjM7WLwAACBUAWJKZ%2FKiRJJkkrZu9Ie12nXGYHgAAQgUAlsVLrl0v9INu9JuGSgEAgFABgCX6jdHRnwx7es4kk7052Oo5B1QAACBUAGBJisV%2F2tr9q7O5fipLa2tr0ZioAABAqADAsrjFuDvupDhQqe9mvSf%2FdtiMTFQAACBUAGBZXKHrOkl6%2FjNItUuSCfh%2F9u4EyK7rvA%2F8%2Fzvn3OWt%2FXpfsW%2Fc900kpaFEa7EiyTWKFY0XVZxlJhOrYsvy2E4cj2IrFY9jpSaeqrhKmRk5GcexFcuRZGckWZspiaRIUaS4gSIJgNgajd77vX7b3c453xgNYiTSIMUNJND4fnXqArhVeEB3V73u%2F%2F2fRQghhAQVIYR4w7g1e6gAUClQK7pA5rgTdhQYQgghhHgVDIQQYrPwpJiJGadHoQIwGBt3AJy5HwQGIGwgIhA2eO0cg8GeiJXyCqyIiT1eGIO63a4DAYBCQChreJcq2fVLCCGEkKAihLioMBQTHFRBKiWVKeqGphvolqElQ6tke674axnR3KoCgZkZ%2FP8D0FlrPhtRANqADa0Z%2FddqQTSiyyNhNKkruzI3ldiRtFuzReidZqfYETzOSE2w6ExbO2iAYLQKJ0KtMskpQgghhAQVIcQm50k5kCMkhbZQTCqHX0%2F7S0my1EezwCyjj1OjUHBElqCAHEgBDzCDAQd4nOIZ9mxvggSs9Apm9LnX8ZgFnmR8zfEQsAcYByaALahO1Gq1SqAiRlg4YgtKU7vy7EuDgfHx8Vq7BSGEEEJIUBFCbDKedEE6UUGLolUVrVE99UhJ%2FWnvcC8rut2uthwoMFPKSAg9cJfhAOfBYABQGgCI8cOYcRrRWe%2BPpwxgFVg6E2w8oBTuURQqhAE09fq6t2gZAAr8ZLR1oDz0bfK5a9EqV6D26eLmZFrxOoQQQgghQUUIsTnkpFNSqTIdFTZ9sNxLF5rNxV53lWC1csCy53Vmx%2FAAHDzAgAcKQAFM8EwgMDOYAYA9zoroB%2FmEGWcwnoMABXjCumfHZ245oAAMBhUdWpitqOUnkYMMwAEFhgqtdc81ImoHVCgwZFW9EEII8YrQ0q4KhBDiDcJQOemuClphaS4sHe2lx%2FrJ%2FbNLTquMsOx5iQk6QmBgDDodjR%2BmCQBMBA1ogPn0dWPglB7ORkMzGBsYjDPXVIU%2F1LH4javDKR4AwT%2F3RVAGANNDoBECLgZqSLcZHym%2Fc7I6MVXZ6YM93WI6zyveyvJ6IYQQQhoVIcT5biOfqI5XbRUkRTbbXD3Y9oeB3KguoyC0nU%2BAIooDpQrW8B55rkgRn8kVz8Vgwkvl4HBW3uMHGD9KhCiDO%2F2CBqRAIcLMpi0gOd49Ntd%2FlLFV%2BWtHqlvNyLjLhkxqjNPEJKFFCCGEkEZFCHFeyUmvmfBgrXxoqPSlh3yn39NZO0PaZtf1cIAHcrADTg0CE3BmjBWgM00KhSCjobTX1OpkTsExHIHxQzReKiIASEMwQAADAP3gNbx%2B7uud%2BXcs45RAgQmpQ06ABkobVwJSmAS7TTDBFe%2BHBrcfHhkdeIsZvKqTjaRJ6C3JxDAhhBBCGhUhxBvLqqBt4kPGPLS2sP%2BplTWjHOrLtufgHODBBoFF4fB8ZGBCaK0nddU5lztbFEViXZa5HM4BpMAM5jPZggHCiyE6y%2B%2BJoBQYIJAHAA0CoBkOHmfDZ1KTUs%2F%2Bv5WCrpiCbZCjAOARBVGr0IxC0yJm1cJs%2B1G7fgVw%2B7bK1dXBWpaWbR4ZJpaORQghhJBGRQjxOvJQPR0dptKX28lTK6uLlgulTjrfAZKwAgBawQNFDu8IvgQmcATUjW6U4lKgDJN3hff%2BPpUB%2BMECdT4zHBRDO2gPAtTGANDF2Sl11rX04OBvzvkiAODTV%2FX8%2B%2BMFAGRAF%2BUck8CNwyM3jEwtHDi%2BzuvLYKtpTeGJgtsV4Iw4xGiHakzO%2BRtGh2%2BY3jaddPf47iAnMRfSsQghhBDSqAghzi1Hus3BPJuvHFhcApqKMkKb0XFeAURAGIIZtoD1AEBUq9RmSsHWei2zrpvnttdttTqpB2PDMMCA2xgM%2BI3BAJ9JHXhJvMfZ8Znr828RzsqdSUUbLBAVeVLw9ddfP8T9xBX3r3fuXT4WunSnoTbQGeBiHXkPa5YteARYXVv7dmutXvAcBZdNj02aoq6ymJzEFSGEEEIaFSHEa4xBlvRqVLq7Enx1dvbueYwP0UKOtYzBIGtCRBq6AuxVnSGjZiJd1xQajTjOwrCrzIH5xbnCH8%2BdBSzgYEwcGB01egrPhhSlwIC2GqyplbcZgLIgQPHG1QMIU48XRacHgQgAqgAzPIMBeyYKWfzgvEiGAp35m6wneQuANookSDxaUHbSqWnr%2F%2BGu8Tvha5wzc8FkNZ%2Fg9hOr%2BGYbHKiux2FnVqGb5H3oGUCEkdzWc4yV%2Bdapym3l2o4kGyuskTX3QgghLmLSqAghXjMM5Vh7rw%2B01%2B9aW3%2BQkBg1EPCTbWbCKYGOdRzk4Zh2NYWyV3FMZmbyl7MVAP9HJzu42n48c23POaAADWKlvCebZZatwSCDGVzAO1iHInfeO5xVnVDXpAFDYJAFNMMDGYMJRPy%2FDkahoohARL%2FWU44otgkA53kjYMD%2FNUCzSq3H31BTNElq3noL661FpMG25%2F1EpO9%2FZvGy0epAnUHQAEC71cDoBO%2FafvWTtnJgaW59db5ius6jo4ij2CftFUIBVHr09DP9Zdu7bgw3Dw%2BMp4gVaTgIIYQQFx9pVIQQrwEmlXvzVG335xPz5KGne6q14PkYM0oKZEBAEAzZbEviB4FJ569gjAxh5frbjyw1Txw7%2BiZy9yf2QOHmPWVKOw%2Bwebbp8ExgDSiovOHBOXIHCzCMRQSUgAiIgSFFg4RYIWTKvdcedwJlIAaqBgMxqjEqURQqU4oCYigUOCNn48FArhmAgocHEZQneFKF5px95p21ucvgc%2FKJ97n%2Fjinf5dOHnGdgBmgQcq0Anrc8E9OfTZfxPKQcggJB39HxdP2JVnrY0WHmY5bbQMLoATnACGZMtMDB26v6ztHabaGdyDsxFxBCCCEuJhJUhBCvChOlUNZS2Gt8bNku6%2FUu%2BsecbwItAsoaQTxk85joZJLvjfDWLWPX1Utj7cV2O%2F3DBbKK%2BszzjjMgBTIghwJpUAilAJDzxGxACiot9UAeDvCIgRGmOkEzKe3LCsNlNVGtjQ0MjNQqoyaY6fdGWyshSDM0gZiJQQQFEFgBih1eqYKCnlf3prX%2Fd2n2u%2BxThysU7ZjagcEgKNtuvlxtdz%2BOEl5ArsKuCRcCfVBlJ5ifPNlc7tP%2Bvk8AqxHoepLBwd2h%2B%2BPAsOPbpxrXDAQDRW7YyVH3QgghLhISVIQQrxyTbmPg7mj693C8d3SeHZYz9gwAJUQV8DZdxKBh53cMRLv37axWq%2FsT9%2BDsymMrScl2Mp81PXtoIuONssQ5HJyD8iCc4n%2BwoL2s8BOOKkQAtPPDwJZSPDU0MlwpNUKtXa5sargI2Bnyir2Cw7mUqfhDOyYP3fP9E%2FCw%2BBmv%2Fn7j6h2DPcU963IHO6jyH%2FnZ89BsVZiEc%2B3s%2FnTtEaMe9fyY414drIF1DJpy2SYNAhz%2FxM7t7yhHW5KVKnI5MlIIIcSmJ0FFCPFKMCmLkBaj%2BzqtL1D%2FK5oWHJcAImiF3GLaGOfokvLYpWON23aOtjtrJ%2BaPH59tPQx4o5Y4WnFao4tTAgvO4R0ADWgNFFA4xQEMMKZDlcD%2F%2FTQcrpRGRka21KJRZI28G7pCs1PwCh6vrxTR%2B4bLy4%2FPzTkuEd6R4de37NkeLRHbV5D3ckTNqPFoqXRPb%2FWJ9eXDRXEyYaQqsp6AEaBO2Kdpp%2BV3T03viFxJJ5othBBCiM1LgooQ4mXLdPSUHvtcFn%2BnubLUXTlRuDqKmMxiaGPCnkI1vL8lwlUj2NoYiYP6PQeb%2B7v0GDI2%2BpArdUuhpx7yHIUiKDYeVMAUIAsAEdDBqMUUYZdW485fydg7Mrh1oGqCHM4adgG8Zoc3VJfDd9fGF7%2F%2FdCfgcUvvy%2Fkj2yYHTRuvHOXK9IPyeq5PzM7OWfoiYdayM3rWuo5CdWCkUVid9vY1pm6qV98R93cUrcjnEEIIITYj2fVLCPEyeK0Kh4Um7l4%2BeCjgIwWa0FEQoShSttOlcDEu1eL8pqHKzTUzlNLi4fljyyuPAJlSI6r6mA1SWN%2B3CHIEARWslHIKIIXTNGqgEQMT8hVTjRtHJy5DMNVulfK0zG0qvILH%2BcFo9Pv9pucACAhlAhHhVeHQF2G2XiFT2z6xMxzpxaXvHDtydHVV45Ruq9VljJXqc2vHj67ja47eNFTZWTV1zbIzmBBCiM1HGhUhxEtD1EH8LR74ngq%2BcvyZeWXaSsH7wSSZBC7TtMXzLsbltX2lK2YWVPaF5sK3Fg49nWKXppOKEwAWKGBsFPuaQhVAOz4KQGeYZGwnXKrViPVbgPftvj7IOxmtK50Zcgoe5xkm6iF8%2FzPhSe4wetOG3u%2F4b%2B8cGkWG1wZZ6IzQDf18K7l3wR7StN%2FyM4xuDBgFoJT7G8PS1YNbbisPX1GcHMUakSxcEUIIsXlIoyKE%2BNGcNj1nTi4mj3dXntT0jGNrgDAA0ZhRDc%2FjMd8wsv2W2tZ%2Bkjz0zPF7l449hDwwqhbwM8wggHGKh%2FOOwQZGQUEDHjMhjXmaiGq7G8M3VuLtfp3cYQQ2Po%2FXi3uokEC6A4vTn4lGKVYgvGbYwBpGVOi43oi2DdULrB2ZTdezJeImAKUS9k92E90%2FGOBApXZJbXAyxKLWsnBFCCHEJiGNihDiRRGtBgP3D%2B75%2FLH5%2FYuHZpXKgxC%2BV8lwqSLt%2BJYa3jS9fVdQCsl9PQzvPTa3f6k5ZOigMynHCSwAhVSBNU7xgFLwhArofUS7rN9dV5cMTw1oRJQYn%2BJCkCtzqLn%2Bc62hExa10vpU4f%2FNnqlLsl6FCpwDnihjbX1wpJM8tt57hOko44jjNlBAE%2BI9pdJyUP3NfeHtzeYgZ0pmggkhhLjwSaMihHghZHVEGLz70OyX3MnDwEkKc%2FawdoyppKgyqm6enrjJqR3O9%2Fq9Bw4d%2FzLgDJUUzVlWCBRUHMTGmF6SaEI5QlEgcxhUNNKgYnDgNo29LhpTvu67xlvwBXNCiGPKczyL2YIUUQDGuaGYS7BO847B2NfKHFWypeW8nfScT9kB9kBSTBbr9z%2FUogiXTE7MICtRIVsYCyGEuKBJoyKEOAsm1Qyrn5y65MEHDgT99klr27AAZpTVhEnH%2F%2F328IbKCJjXg9Jn1rr%2Fvrk0zdVmalcchSpRGrmFU4ABVAiuoChil96g%2FVbn36Jx3Tgmo4omo8lfiD9Pr6vorpNrv542Vh0qpdZARn%2Byb2xPlmhyOMcY5EgnGR9cbN%2BVY7%2Bhg8CBmEEAYdrTeMTv2brlvTltTZsX4udWCCGEkEZFCHF2uQoWfHCyZ7%2F09bsGKJ73DsCQGgipveD4lktGf3qkvr3Z0YR2r%2F%2B5o%2FNPKJqM6WC%2FT4gBdh4MKAWHDdbWUAyGql4Z3z3QeGvd3t5bqbqc4IELdUFFAe70kCoC2DnEFdZMihjnHoEN22qkrtg2WNbheq%2FzVKu%2Fi%2BgZzwgw1%2Bdqnw53Tzw40giC8jglWsk0MCGEEBckaVSEEM%2BxEg98uTb%2B0MGnj68nj3juMIISqpa2W3qz8j8%2FuRuqE8Zhr%2BB%2FdeTE1xnlETqaMpIqgghuFaepWNsocna36u8i2un8jSVcP44oGAj8ZthLd1bF%2F%2FfB1T%2BjcsJcouTSUfy7xtCEy%2FD6YlBfmTlffOdY7wGH7yoqAi48khx7DF0y1XjX8Pib2ss1XBgrf4QQQogfpiCEEBuY9LGg%2FsW13kPfeXi2mRy3nHmM1cNxr%2FIK33jLnp%2B4%2BpIw6oWROX5w5S8Pn%2BgrighHE4aHqdeRZWEEbQACrK1zsdPogdr0jqmt775%2B780zQzVdi73dBCkFgGduA31mAipE9Ro04%2FVH4IovdpN6546Ba3chbNAEKMkBYM7y6snWPd9%2F6p6uWked5d1eCCHEhUamfgkhTskpeEwPfm1pdX%2B78wiwFDBK0S3tfGu3uMTwm3dPTCUdXdh7o%2BJPVtvf8G46rh9JIw9fTYPUrdv8JGLKe1UA26h3Jflp37%2BhguuG%2FLiOTCtXm2uxRFvpVUKPCwWMEwbDqJQz3iCK%2FRjz30X9feHUf11d%2Fius9jV9Z5DnEx729D2%2F8pQd%2BwkubTeJkoNWhBBCXDgkqAghKKXo6XV%2F%2F%2FKRBUMnLOcACFvzPFN89e7S7bWRkSRvFr1HlttfW%2BOuobqio2niEUQqsi7HaQWPx4H3PlLlqamhd9Sjq3qtqs00b7Z5R1bpFLqiCA4EBIQwDFUBMN44rOFGyid%2Bem%2B9hqs%2FdeyJ3Zk7pHkVXCxjm1l6xGJsYiQq5YG6UNcFCSGEuNjIZAAhLmpMajkq%2Ffng4L%2FI1j8Vxn%2Bsq7Mm2qLwoYL%2BacKf2zbys1yd6Lmng%2BrvJPjVNj80EHyzPjpfm8ypXkUx7JtbsDqDZIvDtaBfS5qfytY%2FM%2BF%2BQ3du7ywOuERvykf4bD7pek8pQEUcVa8EPsw1Yos3Htfc%2Bgf9kT8Zq%2F3jjvkf%2BjTZRwp81uhPhPh7Sf%2FT5eE2RRBCCCEuBNKoCHHx8ipo9%2Bz%2BpeW7k5WOw1wQwNoxlQ%2BE5Wu2x7fpKPDOs3vk5OJnW65pKNGYNQGyHNYBiBEbMBFPaFoNubGtelu%2FP6TLVSLtCmxezMbaxANn0Hn11EezGwv9u3YPt5LGgdZyu7%2BaF%2FYZxmC3%2F8AThy%2B7fOayxJZoM6wUEkIIsblJUBHiIpWo6NF425%2B33AP9x%2Fcbw3DbbPdywpURv2e8vIUDbd0cos8stO5ed4mmxxyzA9ZSIDXV2Nr%2BImMHqYrFLZZ%2FEoNjqaoGyvBFMLOIdS%2FLUw94D%2B8VQAzFBMJ5g0e58z%2FH2TuU%2FwbjXkV3K36wwk87euzQ3E9vnflZn1fQAy6YEzaFEEJchGTqlxAXIUpVONuyX3%2F84dnm48csc1HsDIN4lLftCz64dXSPthGy9V7pL56enet2SVHXc7VK2BDEMTPXiLZq6lb8VbuH%2Fs6%2BiZ3buKGyiyKlAFyg33d9xmmBZ3ZMYJxnAuR7x%2F07L982M1PbFih4dMq8lvN3nznxxFGf5YMAQQghhDhfSVAR4uLCpI5G1d8r0k%2FkvU8b%2BipTW6vbFb3dZn%2BgSv8ii2eyvgPd3Yl%2F9cTynwTBp035%2ByjPsel3GABKvvD93Ul6h%2BVfL4Vfq47%2BS8c7bc%2BguHgez7etaqboMxOKOudlz8pZQx7nH2K%2FLV39aISfH%2Fbv6dK2BSjCfcwfQ%2FdjtH2hiCGEEEKcrySoCHERsSo4Ho48tNrqLeTvjc265%2BlKCWG478orfmbH%2BO6yUewyHd57rPnVkycTlRymwDuX%2BQxnhBbbNQXDvG%2F32A1To2OlIlabbevhF%2BeUtn2b5CgYAELiagl0Hmc0Ao8U%2Fs0DY1fcNDJahgGBserUkbkHHjm%2BslJoOWJFCCHE%2BUm%2BPwlxsXAcPt7Y81uL7Yf69tqBMAE%2BUDa3tnufG8w%2F3pm9pOgS0Na1316u%2F9OC%2FqiOuyaHuVpDEKblIB0Lo4a6QdEHPH20z1%2FUO34xt1vytubNvGj%2BrBzoyZIPNCkggm2wb0Sh9uf5nDee6PU%2FvOi%2BMLDv5zxfZuhYo%2FeNcvaJKv1m2n6CYw8NIYQQ4rUjQUUI8VI5hLXu%2BJ8%2F%2BN09Wfu6WJ%2FM3SdX82cm4n9w5eAt1VrgCwALPfrTAwtz7eN95iRQaLWQJFAKxoz0k%2FGEdcCXbJ2%2B6dLdVO5EJqdNccb8y2UB51yVQDhFA0EQnP%2FvpASOkLny0tsu37dtbGqXJigcTnl9jb5xeLlZxCxZRQghxGtLdv0SQvxIHV05XB381OGnpurB9lCdKPz%2BVvHPhxq3elXuZwC8Mt8o%2BJPL6VETHI1LCENwC9pCteMOLjM05PhOE71neusQOipf1jjPC4RzqDD6m%2B01UGBRxEAJdvvwVGjbuBAYzi%2FN5j%2FSKN84z3f16b8p%2FjI4M5R2%2Fd8eGt3OS3QxzeITQghxnjv%2FnwMKIV4N6ge1E2H9sw8%2FfUMjujRWR3L%2FzZTv2HXJbUMo0%2BmUop6a73zjaNtxcdQCUYQ8h7UIUXO0zVBP8dU7tt60a7pu1gLqXMwpBUChqCjQ9owNBCilLqCNBBS7qbx3%2FdjQ9r3Y2iAQuo6ztHXfoWNtDMscMCGEEK8RaVSEEC%2BMQatx9YtV%2Buyjz7x9PNRMj%2FbscNf%2Bzgx26IXQFQDauvybq0OfTxJl%2Bm2dIuqqznLVAh57DE04voVxc6OxyyflIr%2FII8ppzVAfJ5x0BAQKhWKUyOsLJqecotjvtvkvF9Wbazt%2Bd%2BmxjqbJWN%2Fl7VeTlY%2BPbJnpzV2ck%2FqEEEK8tqRREUKcHZPqBeX9eXr3dxfujA07%2FHGRL8K%2BY9%2F0nlI9dAWIOir8T4e7i60DAffbOkSpBMB7MGNHSE3Lewdx6%2B7xfeNB1WSSUk7rKTgPAJo0gMyz%2BWsXTqNyBgfkb1bzP%2F7W29aYl61%2Fa1VX15K%2FeuJwn%2BuyD5gQQohXTxoVIcTZU8pCXPtWrO5%2FYuXHhoK%2Bx7fW7a6Z%2BOPONGwLGx4ql%2F%2F32dVDOjiiJ1CqIknC1vIOYBjYbohyvmWk%2FpOlCJxqKxHlWV6peXIdTc6GRIY4L7MvaVIXXlA5pez7%2F3j2%2Bzdcvf13Hj56Wz24thw80CvWu733D1RmfAdCCCHEqyCNihDi%2BRiqpcsHvH%2FwsZPXlYOC8d2u3XLN9Ifqg43AY8MRzZ%2Ffv1R0%2FBGvYQysxYaCMBZQZPnKnSNvnhigUIqU52BQO%2B0TAYD33hBCIGC%2BcN9JA85v6jZ%2F6s2X%2FGG76LG%2Fs2YWW%2BtPrrabLpBz64UQQrwK0qgIIZ6PloLyl2bqf%2Fmtw%2B8bCHqO93eK9zemb5%2FVUWUdzEzqHlX%2B42PuiPKHrBlt%2BOb6LAwMY0LRpMKoCt%2B1%2FdIbsBYmLSVrFZ7LMy%2F6LGcA5MEBfFkh8tAX8ifKePvB%2Bbm9l%2B7%2B7ScP3TQc7B4I%2FoPL7ioXv1TUR30KIYQQ4pWQRkUI8VwpRUvVgf9216E7qnrd8p9yfsXebTcPpnF5mdhZrR9XyZcPLPbd6rw1AQXNVh9AqYRRRYHC5M7RO6%2B94tpoPlbNC%2FqH73OEmfLcZwyQAhASaQ3FF%2FyWvor9NXb5%2Fbde%2B0eVIiC8V5n2kl0kX%2FgYQgghxCshjYoQ4of0dPUvaeg%2Ff%2B%2BpdzVM06G7nv%2FbPfv2JIsRFQBSo%2F%2BjetMfHHnU6rUTRmGU0G8ix2iBa%2Fu02%2FF7apW9OeKVQyHLdK8XzIHfXMd6DGRtADWmy4coSjbD8fza2w8uHxn0wZfWiisGg0so%2BGcHmr99zZ2XtvYb3YUQQgjx8kijIoQ4I1OlJzvme4eeens9TBnfLseXX3b5Ln42pbBSD%2Fbbdz35UN2nK47gHHo9VEIEGCMqa97RqI4NVyOTS0p5EQUC55A7xoaYYIxRvEmqJ%2BOLWyr1bZcPfqKRFQ5%2Fqx587ZGvD7YmvJdHWkIIIV4eCSpCiB%2BklK9Q%2Fd%2F3Tm4bCEG81Cp%2Bl2o%2FmZ8scQHAKf0Z5t%2Fv4ohZfyzvppQFoY0SPzKfvy2hqwr%2BqS1bfnywPKXTiDdDOXDu5FBJgXYOMAAKgEoQhJslqAAYsuk%2FStX%2FudY4tJrPez5ZNh%2BsPPq94QHZsFgIIcTLIkFFCHGKpTD39YNHjt2sA038h1l%2B9e6ZveW24RxAocxXu%2F7uQ92kTQtssCEIggGiSUM24FtvumpvYId1ZqRL%2BVGc5zwHM04hAlAqlTRtnqACoGb7bxnGuy%2Fb9aWunTFUXdVfbs0necxyaL0QQoiXTIKKEAJOBfeHwW91j9YHdaxpf7v43wYm3u87xB6A0%2Fp3KvrfdtKndWO%2FG0xLCcZtFGBLu7je4z2G%2F9nE9DtX5yaKnvaSUn60HlOXwQC8gTcRYzAMzYW%2FmP55jCvemTZ%2FYevQ1xJbq%2Bm%2FWvJfGYrXVFWyihBCiJdKgooQFzlPepXU8eWV3bmBx2ddMb19y%2FW1QsNiwz1J94Hvr7nErbgAADxQoOGpqlAP%2BYZrrtpZRoUKvYkmL51LlBUucHgWs99oVGgzHjdiKHt7LSpv52OFf0%2Bon35ibs2HXTIyB0wIIcRLIUFFiIuaJ3U8Hv5ss9umoKTo4Y79kCv%2FoktqLgUAok%2FX3a9Yf0LTYz5soR5gtN7HrnW6Gnhnmf7H6enrV%2BYGk1YgKeWl8aAVzyVDTABpeGjPI6Q3wfbEZzWedn6fJ%2Fa1bKXgtKJ%2FpX4yBdIL%2BHBLIYQQFxj5liPEBYlBPdJHlpuNAuOgb%2FXtzJ6RH5uIAuoDANEBQ%2F%2F1WEqrdFIxBQGDPfyIJmUwNFq6eu%2BebaYoy3F%2BL4cDOecCQCmAqEQoGIbUZixUTuMhSt52%2BZYvrRfHvD%2F2ROG9TzZnKBNCCPEak6AixMWrbcxXS8VdaU%2BFajn3b0vd%2F7Ke1lyKDfcGwYfzzuGMjoBLvTDK0wLHA3VkD%2FM%2F8fwLA6M3rq8M5D2Il8OSmuu2csB5wFFMehwIm%2BsKm3Z5j%2FL2xrTzf0XDS8qZnO873MqzDEIIIcSPIkFFiItUTsFBlxw6nuyL1YL1T%2BX5zZfMBKHDhi7Mn801%2BSTNeoZCoAIANYWSCvcOl%2FZsmRxHvypdysvnQNZah2cpIFAgxuZmUNSm%2FY%2FPNHZMwsVGb%2FaPVwghxGtITqYX4uLioU%2Fq0peTdh2mmfMjVP7YwNbpYhkbUqX%2BeXP9WEJHCiZUIhMlfm1M0XbCmyr9D9UmB00eFZJSXomCVNNxLyAGAB0RD2rUcovNO%2FfrtIjy%2Fyk1P2OG%2FFA6VNrsH60QQojXhAQVIS5CuTNHlpfgVRzgC%2B3iLW%2B%2Baurk%2FsBZAFab%2F7K%2BPr9Gq8wBgnJUTrJkSFFdYXA6vHF0rN7pR1ZSyivkSPUt1jXjFDLElcrFsl9vANsILTZ9JhNCCPGakalfQlxkUgruZf5axmOBWsjcv4z0Pzr2cOgyALnSv6TcJ1bwNNDkSh31gaw7Sd19it5a4l8x7uZOtywp5VXISTWBRAGnhomgRiKEm3TLLyGEEOLVkUZFiIuJhzrhg8Pzq0OROpm7%2FuDQloqpuDYAEP1h3j846zQo86zBffQNFeNGDY9GN%2ByYmGq2SlkO8Sp4UAJAAQARGXC5HF0kjYoQQgjx8kijIsTFg6EOBubT6erjhhY9Wmb4g8HQgOsAYKK%2FcPoLx%2BwCMF%2BbXKsOLdfD1oDeod3bnPo32cDbVzt1SSmvmlOqA4CwcdEeqmFCDWlUhBBCiOeToCLERSRB8GTeW1lDVeEg3L6dO67UCwQG8Iwr7j%2ByXtKUeo00BUDAFgVTauzZs6c04sMigXjVHGlDZ4IKkQcZY2TRhhBCCHEWMvVLiItEgXApHfrXReuOil7sub8zHHxg%2FQlDDOC4afzH2fwxs%2FKA1ogBs0YRrl6jO4h%2Faahm3KKhAuJVc1CPRzRLFHeogPJYW1e4M4sLedwjhBBCnIU0KkJcBDx0kZW%2BtXT4vazXAqQj5bfFZUMMIFGlPz2SrRcri5YBwBgqBQOWaiVMTgSuFijlyMvcpNcmqPRAsQIAAgEoSNanCCGEEGcnQUWIzY%2BhfDH2qw17X6jrOe1YKn5tOB5HAcCT%2Fi%2FB%2BP1%2B9S8LPqEAstRPdy4V%2F10bf68x%2FO5osKS8dpv20PTXGTN1baEBB1LgADbQ8LJfrxBCCHE2ElSE2PQod3F3Ie8fXd0eq%2B%2F17NZt5cv7BTa00sq3v%2F%2FEgmMA3sOEoWI0NG2bHNs1MjAYOO1k0tdrhoE0TQEwWCkFoFwuWyZNDkIIIYR4LgkqQmxyDuae%2BJJfrfRuiszhzL277N%2BnSHsLoIP6b53IHo3oQB3rDXAZqpO%2Fk%2Bh9lj5C9T29VpjLkSmvJWa1Zr0FGJ40ImC70k4KFSGEEOJsJKgIsZl5qCjB3OLK1dQrGPeFdNkWUwEB8KS%2BfWy4Z5rHiJECDgTsCKhSrV135TW63DFOUsprjtI09ThFKaUJlUpFVv8IIYQQZyVBRYjNrKvVZ0J7X3iipIG%2B%2FyO%2FdXcaEzhX6vOj%2BKR75lEX%2B0YNASjFrQVd5%2FkDA%2FWrivnIy2bE54JeJsr42aAyTLTbZiyNihBCCHE2ElSE2LQKpRPtTi71rrbZocIGbmrXSCcEM%2BjJMPn2%2FR0iZAx0OgRs0dQlvvLyvZfVOHJ9JQvozwnlnMtxChEFBGMMS04RQgghzkaCihCblvO1nxukY7GJPA%2B27EfqYYV7AFpB%2FOFB%2B%2BUK3euTJpLBDJcmdH3OHx3Z8oGiP5z3JKWcI57NXMK5ggc6%2Fd4EsAU5SVIRQgghzkaCihCbk0Xg1uiJA51RhScSv3t8W6%2B%2BDICJ7juykh2gRcMAIqMyi0GN6frIdE1XfF9b2ebrXFEbjUrhQAQADArDkMAQQgghxN8kQUWIzYehmqWpX2%2Bd%2BDFvDhZ8e8W9K2xqVQB41Ix%2FrECvA6iIq%2BiU%2FY8F9N6Cfqpe2cddU2QQ54ymeAV6nVlrABgAppRSUqgIIYQQZyVBRYjNp%2FB6rajrQI8Tvmjs9onxUugBFC78xjNLg5pWPKOXUYApT4HlmbHp4aozkNM8zjGmPC8KBhEBYEa5XJacIoQQQpyVBBUhNh9aKA199OSD0yVVTfjT9UsvTRKAPdR3C%2F2fS%2FZRVZnKxyey6vZ1bE%2FxD4eq18dJzXa0yyHOpaJQCZMFmMCEiP2E80qmfgkhhBBnI0FFiM0mV%2BFsq1vLuON4vu%2F26mZEDsCSCh6dWzmWFWDOOFNQo5om9vDM9Gg15kAW0J9jTKpIbJkBwDkGEDOYXSBFlhBCCHE2ElSE2FSY1EONoT9oLl0XqYf77heGp8e4C6Ag8%2BGJtU%2BVCVkdebQOvz0w11n65WJqKO9EVs52POcYlHSysgKM8oxRTYOAsdJiCSGEEGcnQUWITSVl9WCvO8Sm5TAxUpupZwADSGyx%2F2EsgwEEUVxXvObs5Zde1gickRlfrwsGZUUWEHQQACgTwpDgpU4RQgghziEDIcR5wJEyPPH%2FeFxq1t7SzX9xJCgrB6BpKj8%2FiwZXjhSmhuZgtrYvoL81wx9MF6zKieVn5deDA31nUKk0cIVXlcAU9mdyU7KJPOoRQgghXoA0KkJsFgWr9cV1ffLEkcLtAhpG4xT6iyKGXztiA2jt4MYDikd5aKBcKGskpbxeGCpJktwDgLfWA%2BVy2cjmxEIIIcQLkKAixAWETo%2Bz3SWGni9X%2F1W0sDdNKXeT2xsRMYCmD%2F%2B1m%2F0eeIA70669RdkRxt8tlW5NSwHL2Y6vHwtaSnsFAwxkzA7VWqhlyy8hhBDiBUhQEeJCQqfH8%2F9ITLAuXEwz21YA79w5NRNoEHIKZ4%2BsDayg6ZnBHn5UY2i6PFWtl6VLeX15qB4KBkAEIA84jGNiCSpCCCHE2UlQEeICQQAYGxjEBBAIUM%2FeUXFv8HejhAIVF%2F6fcL%2FqC4D2o%2FK7wLIFStzW3RHTu8PyR%2FJwJkmNlTrldZUpswJkrOBV6DHs4bQ1JF8FIYQQ4uwkqAhxAWAC%2F6BDIZACCAAxb9xQHnpwOTUnki7z%2BBi2akXwPZRmW11lqM0MyyGBNG0fn6jXw0ge5L%2FuMk8W6EGBGUC5DCtfBSGEEOLFya5fQpy3CKcw4ImJiBj0bFiBOv0LkSfqIPoPerme0Zzyv%2BExws4q86gd%2BH3MPmU5Ahi4PKDLR%2F07kWvviT3E62ueuEPIrQdjUNFeH3hkEEIIIcQLkKAixPmPAAaRBxRAADE0q9MhxZEuoDMfnnBp6lW%2FjsbAsOKiaypzs4tJkREQaFOHO2n5HRMT1C6Mt7KE%2B3XmSHdyGymCYwCNMIiiiCFbfgkhhBAvTKZ%2BCXEeIwIB2LgSE3kAzIpZETRAIEeU5%2Fo3tva%2FVEUr979VvaZaMCv9uZL%2Bd3nnuAoKAM5Oafyn8cmfbaUGBQBIUnl9MamjileJCIhMWCmKq%2BrDVo6lF0IIIV6YBBUhzl8EBkAMBSgGMTN5hmP2BjDKMAU5G5%2BFc3Mra12MVGiK2tpQYdWTR2YVwTmngIqicLQUx3FNk5J1EW8EB0rTVBMD8N6HREEQaJI3TyGEEOKFydQvIc5zRETMDDgCwGpjGBhSoVNoJ8h16cEmUMNHyzNT3GOtT65kf3bqDtnUaYNbGf9AVbaoZswMCSpvhILUUZesemiAvR0mjOlAy2mPQgghxIuQRkWI8xPhNCZmBSIikAITmBV7Rey17nFAHK2srCBFWMfIQFgyKnXqWHN9wpB1noBJRVVgeKgRBEqxl3lfbwhH1G67vmcCAQBTqVSSZzxCCCHEi5NGRYjzEZ%2F5xQMEUp6UYlZKkSUQ2GfEHTZPTdY%2FO3vsjgx3DNKwT0yonuL494BFRp4iJgxF%2BDhVqL0UGMYpLDnl9ZcTHfHoMQy0hx9gM1o4JV8JIYQQ4sVIoyLEeYjACp4AEIPBIJD2WrNW0ETGkel5RaisrKysAgq4pj5SNWHu6YmlVqypCAMCpiPCsB6cGlOKwQxmmfn1hiiANAefiYkBl423ihyEEEII8QIkqAjx%2F7F3Pz12ZGcdx7%2B%2Fc6rq3r7ttt223LZnRhlmkkAYFEjEAiQWiVhFESs2rGDFigVIiHfAm2CLEC8hIkJBQhEJEgghBZSghAkTzXg8M7bH%2Ff%2F%2BqTrnxyR2eyq22%2B62Z6ZHmuejo75Vp6pa8l3510%2Bd53wKCWNTRVW1bEmkXGlJiUzKq6o9N6j7u9WNH1f%2BEr6yn5Lq3br89vbev9a0anI3m7y6Sn9WL97p3m8w%2FjkgmuJ%2B8hZJO9CD8YWULjSTab8ghBBCCMeLoBLCp5OEZFuqmVViQMK5qHG2uyXt4aDFYnHnbXp4sducTbu5y63378xT36zNkuuVtm3z5JWLG11FwjagWKLyiavKSzFL3DNVats2l%2BhNHEIIITxJBJUQPoUMTq4ZV6VBaUiUBJSG2lRQOiQdXvTf3%2F0hUOHy9S1lvdc1f71f%2FmfWzDn40sHyG%2FsHfzFtf3WYt7Gz4Jmqyj97%2Ffxh1%2B01bX9%2B6Xb%2FryZpbXVACCGEEI4XQSWETyMLDE5DysvcrFSG1FuWahKgRTOsyuLggIOB117ZGHLplX48X%2Bwu2K4VmCVddnP%2B%2FCx7SIAdWeWsWOr7HgBstwlAUdgKIYQQniyCSgifSgYsLGFlK1fLllzFMtXJcvWPm80PKi%2FAnzbXSlPmJX1re%2FvdhBZ10tfriS9fv7I5pXURBlDUVc7GivxuWS2KMU3vtRU0NSmCSgghhPAkEVRC%2BLSRBQhhUq65rXla3NaaLDsV8txM6mr7A5ULsDVpmpzm2%2F2tW8uVSWJiXUjpyqXNTkXGtYqoqJyZVdUBB7sWUCtpjfQBVUIIIYRwvAgqIZwhHT%2BvCjK5qCtK1amSwFLNqda0uX%2F9u3vL1xN%2Fzsb1frlI%2Fu7eW%2F%2Byzt2GK5Wvmt%2B9tLG12mvcywXH%2F4nP0n5tf8Jhj8Hdimv20JboaRBCCCE8WQSVEM6KeCwDGCWccFtKW6oqAIjU9rTU3Owf3rjRA1dfeqmbTBbqbux7WFIKCTbg2tZWV%2FvGuBJ7p5ytZU1LDQBgOH%2B%2BG5ITsYlKCCGE8BSxM30IZ8I8hhCyABnZuCZcREWCkto5%2BX3ln9T%2B3CGvXW4vp8KQXp%2F6HxKLJgleXfmbG7w8zNc9ZGyqcWyeclaq8huT6X4SVMQrSa%2F1Te2iN3EIIYTwVFFRCeGTpqOfY3owIywAnIrVm5KUhaQ0KO9Rh9WwM%2By08OUrWwezYXXY396%2BWyoVUtskeOmF69NaJkI2gCKlnJmitHBqBRIwlbquU6ykDyGEEJ4qgkoInzgf%2FTxiCcTRtAHqvZFcUiGVLIm0Eovif%2F%2B1l%2F6G%2Fd%2BEP1ycm2StnP729ntvNbCos2X9GmwdHKzXIUdC4ewtyT%2FYvnsTKEPT5avwlY1NMRBCCCGEp4lXv0I4Q5IBbBCCev%2FTFjWDAWdqkxuTVkbyzs7OAl6Fcy2pNmvLulyyHEhC%2FbB1NbVN11SLWm1k4t2vszMoz%2BfzO8UI29ulNtQmKiohhBDCU0VFJYQzY2EMBoEMRkiARVJFNakCYNWa1dd%2BQ7N%2F7m%2F%2BCP6YyWX6Xcq3N4c3CgVenfDr8FsXL54jdca1gkGxg8oZKnn9P5vhlgEuUD4PV5eLVlFRCSGEEJ4igkoIZ8Fg8TjCGABnkWRsJTulXFGpw9S%2BeXMbuLS5lXK7GLhx48ZiACgDL06nXbfeSqkMtRaDow%2Fu2bFEmuzuzgFgzd6ASZRTQgghhBOIoBLCJ08gMEfEiHU0kVTbSmOU5JTtrIW7N1ZavcNWols%2FpC7euDz9zu5qBhdprha%2BcTWvL8s0J%2FnnqqlEUjlDOizddqNlAmjNb8A0GhOHEEIIJxBBJYSPiR49FRISgEEcMQ9IAhlZBlHVWNkJp1SUK%2BnWrVtLeO2FVHLrWg%2BGfl8AmbwhXbtydSpaUbGpjj%2Fen6mCdnZ21rkvmw2mOYJjCCGEcBIRVEL4eBjGLDS6IMCAPjy%2Bx78AJCPnhJKzUBErfJhmP9zffRm%2BPp0cdmvzZu87y7dWZpNz6zS%2Fd8Wbq9W6csZWrTI4VqecoYrubu%2FRwAQyk8qLaZYjPYYQQggnFV2%2FQvi4CAwIMTaekkFgDAIlMGCcXJqaVElNqqRFzSjvAvDS7PxstVhpuHnzwNDQwOLVV15M26WtNkOVLQvhWEl%2FZqrTwfxgMYMEYmW6rktaRE0lhBBCeLoIKiF8fB5KKQbARjqm%2FGKDJQxOFmQbl2xX0Sf%2BbbL1T%2Fzom%2FCFed9MN86x%2Fv6dc3fwavru2jp%2F9O6dN8s6TRpUwEKAMKcSrYw%2FOkPXfp9laa%2Bxv%2BjK9ouZl68uFDElhBBCOJF49SuEj5MQIwLJYAD8aKYBGVkIW4VUlQq4VB8O7PUVuAhdngzUnZ0dMFArl7e4TZfbzrUUF%2BGExDMQAAbj6Bn2XAY0wDsD99TqCim%2B0hBCCOEkIqiE8PEZ11JGBwk0KlyIe4QBGaowAMYFA5RaN5btu4d3lvCFc2mau6Xrf%2B0vbrOYUbdWfGN2fq42504urhUkEM%2FE3CcguoY9uzntbaBfgVvYhCKSo%2BtXCCGE8HQRVEL4uAjxCAEY%2FHAseDiyyGCElZQTeSiopnfu3AXOX8g5afBw%2B32KEcrSC1vXlCYTJdsCPWfCsLBAEFnlGRWlg%2BXQZjEM5HwpaXMTK16rCyGEEE4kgkoIHy0BIKEn1SqedFUCEGTIidQoU1Uqh9bbhzcbuJDWqjho8%2FfFIQcH7Py2%2FfUbpVObh8o4aZye7w2BIp88l4J%2B2nuVwAWXa4lXN7omckoIIYRwMhFUQvhoGRBPZGNznx%2FZ6NEgARgjSClbuS9aHS73e65d6G4uckm5p%2BwbEJQX1zsNnkpp6MVzEShW038UBrGzs1MMgJ3g4sWLTfQmDiGEEE4ogkoIHy0hjidAII0zy0MMFiAALMnSqpT%2F1VDgc5eaSZaKX6f5kRB9YviTbuvifFhLKVP1C0iALE7DYEYsAKRILqc3l35c8psVuWeYb5gXpzRRpAohhBBOJoJKCM9JjAid7KUqAxgJCbAYBxkLkiwbQKngQrdcLA1XZrO1rrXr3uFBNYIBrl271uWuNaoVqgCMQJyKjACZe%2BTHpSkBUXR5qhVeLBZ71Skl4NBea7po%2BRVCCCGcUASVEJ6TT3vFiHv00LnBAGhUepGzirTIk%2F%2FYu3sJrk%2BH6SQPff1eP2mUtlq%2BdJm8%2FeZEufZDdRXJIIQ5XaLwuKBzj0AS6NH7iDLLk%2FWTS98v3oF1%2BZz6lyqX3z9IRMuvEEII4UQiqITw0RASYkw8ROMuxA9O5QeH43tUSTbCSj1pRVOghWlx1yaK5%2FN5oVLSxYuTeU45p0qtrgYJIxCnJU7OOLLKcSwdrnpUDbbXpbWW1vF1hRBCCCcVQSWE56TnKL5YAHrcb5QEqkkqiRX5vbS2T%2FNF2Opr05jqt%2FdUlVr0%2B1PXjrU21zIYpZRA6BmihzDopP9koairHKcqvX3Y3k5ru6zV6iuJL0w5P1RCCCGEcDIRVEJ4TgaEeJa8khgRSEIYoIJEloSZF%2B2VZslwYYOZUkrOte4e7NpO0pUrV5rcJhfkmqofs4pEPIlARj46BjDH84MPR4OwYwxob29vKgGF0sLmJi0hhBBCOLEIKiE8Hwk96yqWCoDBRx8GISxbVYkM1cwHv1Mmt9Ar61wYSm6SS17QkPI1%2BYvLVc1kMOXeU7LgwUDHZxVb3GPGRwgbMI%2Bh8aeB2MTwEYX03uHQT9aHPOvJF%2BDzEzJRUQkhhBBOLoJKCM9BT50zOva60IMpIQFgAGEQaiwXz6v2V8OAL1ygaZqhFJYrALtMuhv%2F50QaVAZVywZARvC0rCIJwAbhe2P06IesXy6liIdIHImeYEBR2l7tHFoAIDObfea%2FlBBCCOE0IqiEcCri6fzoEzo69Pim8Zks%2B8HdEsbghGXmtdyteU76XEoTdUNmdximmiTaP8jLa5v7CYpLkZ1AEtLjo4nG45e3qPR4GINHwckAYvwgRkYGI0APLsWW9gzkW7BXMk1XSDX7kpX9Wf9aQgghhJOLoBLCqZgRiUfoCTMGMabxTwPCwlBRhWplkmvdbA76CpCbNGnbYeg%2F0KFkvbS53q9oJORKtcA2GMlP2WveyDzgo1GhAlh2shNA5bHG%2B8Io8slI77QPPfetrXUqXbz6FUIIIZxcBJUQTkuMU4pA42nzMGOP56sfyj1GgNG4iGEoiSoq%2BLy77%2Fm%2F81Z3%2FfZmzmnJ%2BrfW66H3lqy%2BdsDL%2FfkuS7aUbCMBYrwDikBCQiCso5kHKg8xaFRdST42hhhXBAbFYhUABqVvX7n009x2y93Z8vCrWv7OtJszI4QQQggnFkElhNMyHxLmPh9%2Fp%2FAox%2BjoIcuAhbk3VJElOxmZmkioKUqZ2vf9LKU3Z8Yeal2tVqCUas6Z1HRJXVYpBVGxBeOFKhjMEYlRIsI2I6PshV3B40D1KIH04UVJsVJlQLvzeacBANZTWl9fn5QoN4UQQginEEElhNN7aLd2cww9FGh0fzyWxn2%2FAFWSodqV7OJ9X1DXmWRKqYeHq4ynU1KbPtDaaahNagwSAgNUxP2JEQMIMDIGQFgAPhqAJQnAHE%2FmMbd8xleqFPOzg509kFix3IBfmZybDZ%2FRbyOEEEJ4NhFUQjg1STyZQDxayvD4XDAmW1iyakm1qsrY4FSq0tDPC%2BvTaQaLnXL40yElmJxvm6bJOTEMqsZOEgZAgDBgA2g8DIxmMTw4s7jP8Ng4Jj5kEBr9EscWkFR89%2B7d3UrTNMbFns1mXaykDyGEEE4lgkoIHwWND8dxxIxrDol7xPgR84ANphrjhBucKmmfYQJb7RrZlfoBpA6uTma7rZqUXIe%2BX%2BUswDKAMQDHZSaLh9kIZB7d%2BXH8JJUR%2FT9799obWXaeZ%2Fh%2B1q4i2ezuOXhGkoVYEBJHOX9IvgbIvw6QH5AfEAQxDMMw5CCWrEi21NPThyFZtdedxMMuLtaJZM8gCTnvhY2afVjctXdjQPTT7zpoZFTL1a89%2FeXKv%2Bs6rTurL7p%2F8uZtBZVSSinlQSqolPK9lFNkNw3EMbmEQOeGfBCCgSBAkyaGnsg0wzwDPH%2F%2B3EydRqaJhJyfn6%2BYWiaVuccWg8hIEEYSABUgkN0eaoLsEQmjALWGyg3T%2Btr37wHmef685Y9OT6f5sqWm%2FCqllFIeoIJKKd%2BrBIAQMEMiCQgoG95sCkgiJBJjy9y8wiv76yWfwI%2FaCYlpn52e%2F2S1PoMvs1jDFMDZGXrsIAICoAAZv1ByE7oMBiF7AtTtnQjggf5s43f%2BoIsqkt%2FMz95PWYV5ffFZ898%2Be%2FF8vqSUUkopD1FBpZQHSIIMwjYBENkIAYjEHBqBH0EEiYkxWTev4ppZAZ7FqbXeA2kgTNMETAGJAmkNCN7%2BEtGdkf3joHow2X4nGXc0sD9nYVVSNjq5urp61gMoE7x8%2BXJR5ZRSSinlgSqolHJE2EsAhC6Eg0RBYWu8OqM2fFWSTaNkbq5bn1v%2F1Xt%2BBKffXExToE%2BLXMFz%2FMXLL9auQw8a7bN2UMDONRnIWGkRhCDEm3eWPRIROHBdEGukCium%2F0LPifPE%2BZLn%2Bk9PTqbUAJVSSinlYSqolHJfIbg7tZcckbCPfBAQgA5AFw0NEGm5atpUAk0XrYWmBDosunNOJqNChpihBAG3lpHcvEXYEIJtc0C4LZAxeIRdwaqpAKyZ3r59%2B80KQPl6drlYVFAppZRSHqyCSimH%2BcCLsrsWyZ4V6cOGINsUE%2Bj0OV41L8OXcL6yKdhdn8Cn8OnVahmbPSDd2CC4N0ZFABQcHjOQ4fnCt3TPui8eLTMFqOm%2F%2BMPpsz%2B%2F9KsrW%2BfTmX8B575vrCmllFLKg1RQKeWAcIRhj4Bk9yaSkHBNjhJAMNiROM8soOGkrf8fgQVMsDRNoZsZvPuRE2DcCQEgjDvJGKTCQTruWrOAvVueft0vL2SaeJ58%2FuKMvqKUUkopD1VBpZQDhPBBtmJGBA%2FOULyRccD6vsY5PHGYRMF14yJ8BqfrOfZIn9cNPoPna1uEudNn1j3ddAEEjcN3SQRBAgQ6kSjum4eMa4E4%2Fnn4wEpTfkihpbfpL599%2FtXUTuVs5svkn509W%2FQrSimllPJAFVRKOcJ9hwFQIATkhmwLJABCdib8BbdaZlysJKaZSO8sSOyBELsNFjBNU%2Fz2%2Bkxm6CaSbL5XoAHQkGsCSiDYduspY1zCQISAkqElAiTckLs88aEapv3%2BzbuTBjB3FuGLL76YnCmllFLKA1VQKeVuSdDduCLuyR4ZNiQBQsKNsEuuGQBat2kzPWHmjGmSAInOCziHk%2BFuMYCBbNWEDIAhMZihviLpIihKAGU0VoMS8NhrJIHsXgv5gVRU1uS%2FXr39pnsKSziXn708m6i5iUsppZQHq6BSyj3IIPsuCLJHoAPgVosEEkKSofCSEMEAoQcaBmg0wARQAw2SMEQPDDZA3H18iQGEQAQIDhUc5w%2F7AiEh0pJsD0eRXQHwB1I5OWQ2r%2F%2B3bgB4M%2FeXybLVGJVSSinlwSqolHIvggDCKCB3iwAEaCEwrJbCEFM2rcarz6%2FapyvecLV6toLQ8on5Ej6FxfqtLRIMBhJEAFBuixASIIwfImgADNdEcLghAeUQ90QURQEMAZ780pB9mn7%2F2xd%2F7Yuv%2Foj20%2Fzrxj%2F6u99QSimllI9QQaWUO4lsbO%2BHuxny7UYnBgJh5BCIIgCNBJpcU0mSRrIAQOyN3iKBhi0CIiYAASFAGF9FgwAdCARiAhEwQLJVLLo%2Bab%2BdSwTG3DPK%2FvLK011ypXfXrAHk9JJPPqnfj6WUUsrHqqBSyv15rPcXOF7N3oUhEwhbhuRyvZcgfDiVRQBIi0wQOAMgHZIQSCQQEkMChCAEBAQC5PZzZPvJYzZnxkcCSYA0xmJScnheLwVQRI1PfFS9rb3uq9dcTcglpyt%2B9uWnzSf4pqWUUspjUUGlPHVu7cpeAQA5JHjk59I2cUVCMBCA1gDovWmzN3IOgvZE6dCNIBK%2BpWFreL1hFPeFiwAkOzWSNJStQo0AAptdBRCE7I90eaK9vzp58%2FXr59Pq%2BgB%2B%2FOMft1qTvpRSSvk4FVRKuS13nhPFzQG4b%2FCFbAmHJYTuVtwRCKQvwwSt9%2Bii90leniKAcWuoexizQ%2FZ9ez58tkAg7KUQhDDcTb6VHFvdMZJwgE%2B0orJO%2B28r3md9Sn9%2BQd7xo7OzRWrKr1JKKeVjVFApZYvsl8On28717O7H8K0kcLMlYcwLmjENAGkNIPamkzTa%2BTkd6BJBI3Gn9BMgspGdvSTsIzFD1AkIglxTAnKYgD%2BkxVTmtFevABoNWD13sZ6nqqiUUkop%2F%2B8sKOXpEyF7J%2FvqbByfwlgStimJAkDGXlWJxODUCGS9bstF0wWcn9AgvUMHEQwJKEDI7bADwe2HVwMhRMhWvjAEgL69GCR6bEj8Tt2FrVpP%2BCBPKbW8m6Y%2Fh3eu%2B7T8Y%2FMf8NmrrxdZU0oppZSPUBWVUm7LPa54V2Ggs0cIAMoWCdcUEwAEMTEJQLO33pt9gjZFwDn2OI6Pz4HRJ%2B7sQAiJKCD99mL6AYNjggmCjrFDQQaCY1JKSAiQJ15b%2Baa1C7jQ1tpJ%2BPTTT04vryillFLKx6mgUsptcrdAOCZu3yogcsBu2SGb%2BYaDn72cVrAgdJs28vLZyQRLol1UIYAgYABw91t16y0lJITQdlJZ%2BsFVZLYKNnLDgGzJE1%2Baft0Wf3Wy%2BEt4l%2FX76ernyb8%2F%2F%2FHZXOWUUkop5WNVUCnl43hsRXrDFg%2FnoAjhRiAmGA2s0jptCvSeEFjALECw0UJaAoG2FSpEYGshlAAhoOEABaBvp5qdFiIA2cpZ9wglTyu5dNrb9fqzRa4EUFpry5qbuJRSSvloFVRKeYhAuFt4AMMHQUBAIwFs8stvzv702cn07k0kEPqvvl7%2B6WfPePuG3huQjJuBwCaSXG8CELnWAsCeVJEEhAQgYVcA2ebwGrue8sj6qyz%2Bar3%2BOrCgT6ufys%2Fez6dP5e1KKaWUR6qCSnmqcr9rAQQIBoA86J6iAKCgSANBwUVy0nPS%2B9RpXewTOZ04xUVPOsxihB47XURxb9UnQSDgdr1Fbnh7RwRy78E8krFNnmYN5bYrplevXs0C0D3pfWp9ouYmLqWUUj5WBZVSPo5AtntBiY6FhT1kR8j2NbsJjYQWl91FJ4mBmPRF%2BknSNDOA0Thjj1vpQIKAZHxUMqYsj1SPZNwBIgjuvpHQZSAgPp26yWGXnPzZVf%2FbCRYw8e84eeE8ZaaUUkopH6WCSinHBYB82EbBsC3sjQN4rJzg5msyfJOJCSELWIgqaof1SfO0OZFGIiFEM5OZkK2nDBshYcwyAgmjg68pAA7PyHgbAgkQDD1Pvooymnu%2B%2Boqvu8BL8ymfTq1SSimllPLxKqiUspGdZDKeF0S5gwA0AQLevi0gggcnPhZAowGSnsgiNOwwd%2Be1mXlmnrW2UO29z92OYhfE8eENckMERO5LEPed%2FJZ9PBegC5JjESVPri%2FYRZa%2FmnGCiU8aP52enWZFKaWUUj5WBZVSNtz5HGW7i5YoCG79xR3pgPeppdxuIwgi0mzpjRhsoU0xWc2ue29yPrXz5rJ1%2BrrPK%2BzBYAiOAYlIAIJjDguA4Ti5FnJoUoEE4WDNJoJylI89q5i2yvJF41un4fT0dEoNUCmllFK%2Bm1qZvpR7UkAADAkYgKCQMQgoicg4GzDA1niUEDEGAMabBhpro4spU0uX1dzn3lrnvGWePGl25q5t7pnSnDAhxKAAAga4OYKAECLboj3hMDk2wfLWWwooyROf%2B6tn%2Bk9%2F%2FxteNFZ98Z6fN85%2Ffjr1%2FsjzVymllPLoVUWlPCWBkVxTZSMYjSDowbJMAIjozh0JRBLYOtVkiomAobeJaTHNtqvOPKeRZ8nzsLDjLKZlYppcTC4QQLjJSO6t68g2YUgpMr6NbD8nemQatAAGkgD4VNdP%2BRBULi8vJyEAfQJITflVSimlfAcVVErZIvuFbeLmWiAcHMfheDng2KArAyFu9pUGy0UWi%2FSw1rk7ySk8C4vJTJ1IAGgSAhASkNBxZyi8DHLnS%2BfmyTLeK23fTQICIU8pihx3men3F99cXEnnZOb5wqlftOr6VUoppXwnFVRKuU8mQTYMAJ30o1EnIIra8fZlN9v4I9GhVUfpLZ5MbbloaZl1nntkQTvNYmkmpgA9env0iLIVHjbbbQJhj7BD2ZIPG2Q8gwg4XBB8oovTXzp9PfONAIvw%2BeeLxlWoWb9KKaWUj1dBpZQjBNTb%2FZkgApDdwSsyko2I48nxIJDN6QCCKALaYDl5Min23oHABFOcYOqEQJJAgqSDYXzGPh5A9oSmB0UIw8FpmztA3PvzYZSnMUAF%2BPs2%2FRYuu8z8KPmXZ89PuaSUUkop30kFlVK2ySAB0J2eUDuNArnvjTP8x9vLxAskGqWjC3KWnMKCptpVGploketWCQSagEMEMQEIcKCo4tG04P4TOTLaJWMLAVSAgD6dAfQbpn217glXDTovGp9%2F%2Fvmi%2Bn2VUkop31UFlVLu4aZcERgDBddiYLMxEiDsk327CUCHbg9O4ST9bJoaURRI0kTt2hWgJ713VAUBIHS4OcStPJWQHElY7o0oOykld8xEkABAcrsSE%2FIEen%2FNmf4i82qRs3bGzE%2FIz5cni%2Br3VUoppXwPanriUvZw58jN6UgSAJO7lgMJAYggjnEnYEAIkS4JIIqxR3qb6Ce2EzMl9HlWkg4d5maY5zSIYoJrojRw94l2R4sIgYDsEAAJEAxAjq%2FWKATcupQgQMSAZHgyH311ZW1brVeRaZqAlf%2BwiEpN%2BVVKKaV8ZxVUSrmHAOMaJJujO40%2FBkEBIUE%2BkA5EoYEJgiaQZBlOWlrDjtBNmyLMiDTsIS3poABIhNw8uzGyIxwWsrmBckTYcrDYEiCPvIKy7fL02X%2F8m1%2F%2Frufy3eUpp%2F%2BYy5d%2F%2Bz%2FzmKNXKaWU8mRU16%2Fy1HVw%2Fwh5EOTeIoFIBByCBBlKDKINMNDIMiySk7RAt8%2FMHWj0Rm%2BZlQgtCYEoKuPtiUA4KDvbVsLIhx3ulK2l%2FAU4%2FP155L2%2FVm1arXjdBc7bvFgy0SbWlFJKKeU7qKBSygGC95mvOJDtSCO3BYjBMDIIBg0DiUFEASC2OMFEC9oFQouNDiZOIYEkkWCGCITQCUAyPvrxCQIYhexbuzGQu7JHrrfD8qh7f%2F3udPqLZ7yDU579UZa%2FCJ%2BsKqWUUkop31UFlVIOCOTIyBOHFoOwh4JgkGtt6zKgBkASSSSKUaOLcDJl0dAuHedoMxEUezQYQwKQloyD%2BQOCO8FBAMIdRNRstZXbAnJD7sU82nrKnPbVvD5bNWBqU%2BDlSxY%2FoLUuSymllP%2BvVVApT50Adr6lnTvJjeye6wAIggEwN60NHQIRldimtEVj0Ujs9q7IZGu2GAyIighC70NGAgQiN9xXzfBIaSkEjwWzfNiQD%2BLxPmNJHnExBUx%2BefH%2B5JSrUy6ndk77RVueWFN%2BlVJKKd%2BDGkxfygEySgCQpIHcyb3TDudY%2FcUEBCQQEwM0bMlyap20HkDnFhbmuo3QJT2ggkkwYICAEUAAAxDQBAybduEwkYBs2Zw0RAzZuRiOSXis66t08oc%2F%2FEECzPO8Ts7Pz2vKr1JKKeX7UBWVUoB79%2B0iAAcvjAI51Ma9kSjIOAo9k6AowdZctGlqzWzOirOoAkhoEBIRegDAm3QSE0gIJA0kGna4r1aS7dqLW02FxjV3%2FyAayeE8FHxcKQVYk9%2B%2B8ZtJTlj3%2BZSTH6W1x%2FYWpZRSylNVFZXy5AiAuzUDCAfIaLexkQQBgjECAaQF2ZwwQgAVQpcGTBOGxZwpLdEQ4nKiS%2BukB1uaRGhEoYkQEUykJ2Z4I4ICkINJzJtTZmi2RcxumSTjsQB5SqPqV%2BSbb3h1Ig1g1ZdpM726fpVSSinfWQWVUu7xF2b3VETykAVUshUBZJDNYaIkBIEQhEQwNvtyQTONiOlkYgJjmNMD2AgJCERwTBqYBDc3FhAkjAQgm7MRIQGgQT%2FagUsDkENlo711JgEhjyulAL9%2B%2Ful%2F9hVvAV7y9t88Pz%2BbL1uq61cppZTyXVVQKeUAj2aPPPQ%2BcbteEdDNCQOJBFCATkKg02MaWdLtpjVMegOm3hsSJCFpTeiJGAHCRuuQRCWoRiGQZCsxZCyQGIIhCAwvf2Bp%2B4wXNk9h2CNEvGn8CLPKq0ynYWO5XK64WFJKKaWU767GqJRyhzDKx85zHMYiRQSIgAjby5sQDDECQiTQIAS66cSJTGmNtIDaHWskISGYmJhGQhotAiDBMUyJwmYLAEQYn899byd7xDsyHyIA5LGOpG%2B%2FXs1nUwOQJXy5XFi%2FEksppZTvRQWVUu6KJ7KPcpeQ3B7m4RBcvAkuEQkEUUhAUEUNSDqKgGDHBJJGYtM2p61JR%2FQmBXUCQAg2bQIm3h0mZNy8R1YLgGOCuY8APqp8sjGn%2FeH165NIAF62PH%2F%2B3DzKdymllFKepAoq5QmKHCRA7jnjbiAkfjgYyQ1FgQS6mEg6xAiRBAAVIDEQgUzNsOp9rd1IksQEAExsQiAZPgExyD3JNe9zXvTeI4EeaVa5dPofb6%2FedCLAT5I%2FOZ3zWNeuLKWUUp6gCirlCTIcFO6QIGRsHiAKIKMIJEm2ZgEWDEBCCOQmZ4QodhHM1NPW5LKzmpW0TC0tJmxu2yAYaRkC1APLS4ocIreFw0JAdjyuFeqvMr169e59NwE4hRcvXrTH9AallFLKE1dBpfxQyX6dMaVIwHiTWa4ZBBKBbC4IYXc9d8WEjiYS00WBpNMuen%2B%2Fni9672kSDSQmRm5E0QhC5H5k%2FPSO%2FOYDM8ejXe3xq%2BnZf4fX0mSCL8IfT3MtolJKKaV8LyqolHIvyh45NngeCQBRhEAEELpIMGx4%2B64Nstm0i0gXW0wka%2BlIi2iykoveL9d9tmlrQJcu2kAQpIM33yIHeeRERJGHjOKRPR51RcW0i8XZcgofvF73RWuTFVTKjif3%2F38ppTwWFVTKExYASLgh%2ByTjVSHcCIOQHAg3GY4bCUB6msSQlhYidFAgJLRmy9yygitcq2qXniiiBkHSiUQQ5A6HWgkBHI62CWQrfW0JARB8lBWVmfZn7y%2B%2BStZwFs46%2Fxxe%2FPbXC2q1x3KMPpGKYimlPAoVVMoTFcA7ZygOBFBAyc0ZIGyT9J2ChjebCIq02fREmwJIQksm07rMpqMhSRrTRAu9s1r3eVYBUFQRiDJLR9ny4BVjhrtHAO83LmUgPup%2FTr6ivXnz5l0X6J1PkvPznNSvw3KXBEZm2DaHlVlKKYUKKqUcFAHC8LnZxvPDTgsbEZQxiXQwCAQgW7dvjFfsLQEMIHSAJK1BIGIHEfoUTtq0XEw9uVitr9bzvDYJaaSB9P6huQiIHBPI%2FesuEhCQDR3eHEGU2%2BQ2H1FWeT8t%2F%2FrtN3%2FTF1fTs9XMi%2BRfNc5ZU8pRCkaD0QCycftQqiNhKaVUUCllD8O3gvunFvZoMSCwp424290r45fEACSBmCYxGhQSaR%2FaS1fpNnLW2tliQdrF2neX6xWZM0lIgwYdZyCYEO4nEO7FfYcyHoubHREg4GPt%2BnIxnby%2BuACmaRLyD1N%2BLR%2FP85f%2Fe9zeF4dPAIcNFAQg4YA8olRfSikfqYJKKUfk6JCNsE8ggrebe%2FMZsAtDmw4QEYBIQKPZBAxDGhj4sLXYMGKzn6adtUZy2X2%2F7hedq3nuLUzaDLLZlO%2BbkXAjjCWjY%2BulBOAxrj3y1eL83dSYTi6n5QzPwj%2FJemGnlC0BQBCyOSWEAxISCAdV57BSSrmfBaU8Pe6JKQkjQx6wlogYIlx%2FCkEAAmIbqzAJSHMcKmIA3fQBM9rA9aSmTXFqWYc3c1%2Bu%2B7ItTqcIuJI5iISMUyCLfF%2FceuOAsHUYkC3Bx9bBpad9fblKII3VqjUu5ezsrFFBpewVIgAkgIAKAUBIIt96xD0iSynle1YVlVL2ydEzEsidP6WMZ%2BPQooMyNpMIws2hUQAMotpRBUhLmglCn1tfTfbTxaI3Xzu%2Fcr4MZCLqjMMt0ACIfH%2BMMBKBnZO7JI%2BtH8sq0%2B%2FevL8AliekteWJvX%2FWmGqMStnPA2UTExMSa8riUkrZo4JKKYcYIBzi%2F2LvPoAkOdMzv%2F%2Bf98ss12Z6LDAYAAu3huvodo9evCO1EnUnUXfyPiSFvFdIIR9SSCEb8jakkPcnnRxJGR4piuZI7tKud1h4YIDx07Zc5vc%2BImamZwbAwO3OkjvL%2Bm1uVlZVV2VWTXUjn3o%2F8w47eZjX083lMEFgHXY6v3GZphqn3Bf1wsKkXAM3UHCRiw0iM5xtMBmoaWOfvLzs9vuuS0iHkUIELlCSkpJ1uM%2B7Roib3nLQAd3rA7MuKQcHB9Vc1zSNDaVlZWVlZWVl5S5ZBZWVlbfyxqbkb32%2BbbAxNxZ0YzNf31XFd25lboORzfUFkYEFSIjrdwcKuYhIlLbTdmQ28rho3Ea22pW3s05rkiqOQoMjMuQCkbc1%2BpK5S4xf%2F2a8fvtwfa9%2FWzyarf03x8uvOukul8Hu2sH04zBbrILKyr1IoFURZ2Vl5dvVqo%2FKyrcxv7FzxY1tg%2B70o%2BINJPyaLibGsqw7tp4y5rbJWKQwDYeFF2GyFm623%2FL1BzgIaOxxUwZte3VZt2s9UdmQWhdoqvuaKoqwcJeBjbibLOuNPXsS9DZFFN9T5RSgqYPZbNYZRCbAeEiszu5W7km%2Bp8ubKysrK6ugsvKHnOANA1jpzsWX2%2Fm25mP265%2FPMtfIusPuXjc2csFWYGUWEZZlGyPbKEzKbpxrTXN0ODjwcrevV5b9FgxKiJBRRCJVJGzF4TF%2F0wj7DkMe6d4%2BEUrFwOt50HGNe46HTq43Eas56Ve%2Bndzjv6grKysrq6ZfK3%2F4GMQ7J6y3bExhLFt%2Bs50Zi1TmYXEmri3IIAEOVdFbNS17XMrJ8fhIW2b2hVm3Pe8XFQPIQQo5qQm%2BFaXMXaI3qZi8drRi3%2BsNTILO7ZwbkrF09OjRotWQXyv3KK1SysrKyrerVVBZ%2BfajOw5m9WYD7Pr68o19a2nZd%2B7hIYwsGxsZMo2TNEmECBQValapDko9MtDWoCyrLy67S12%2Fb3WWQmos1WuLndhg7ir7jilEHPK3QQOTRE%2FFInlVGMyWuH%2ByFqwqKiv3GL%2FuEt3bv5wrKysrq6Cy8oeA3zLAxDudhE3vMhYJ67W32oCREWBs8vYe%2FmkqqqgzveSk9LkRcawdDkvZy%2B7lZX8l6SKaZlCsUJoqHAjQbR377xrfvLjXB%2Fe6s57Y3t7ueVUmCGBtbY17bTaYlRV9%2B%2F1%2BrqysrKyCysofGuIG37Ykt%2FHrflx8g3wrrggJ39iLjAwWWEgEElJvuqSz%2BpRNyVwLHR0ON6P5jeBXT9SLJ5iVZokiUO3tNBLgu36Kops1qG%2FjSSGW1m9od8qrlDRinJyqCq8qKisrKysrK3fNKqisrLyFN7aI0O9blcA6jEeSSZymXltn4ooJIoKIKma1Tmvfhbtaw27scejUsP3u72g%2BcwHWYqf0c4veTQLYJhWSjA73djcYv6Pgd08XWzrHdDntChJABPuZhdWoXysrKysrK3fXKqisrLwd63XTgOj17bzEm%2FI3mFXisE5jlJYtGwyZtmTUZy76uui9SKowIj1Unhq2H86tHyj875%2B%2B9MxR7S57KA0RLjKy5EBg47uXVfTWecW3b%2Fn6%2F%2B61vvXLjfXfgKud21HBbHR8l1i7uttoNS39ysrKysrK3bMKKisr7z5g%2BC1%2FwJi7RgasdNiylRbXNwhhI5B6cl7rvM8aUYM%2B%2B6jLY4OylnroIXbghZ3zjQY9EaWNKJiah33B9bqZGL%2F5jG1sjO%2BhSsqhWcrQGdvAUGrboly1%2B1pZWVlZWbmrVkFlZeXO9NoxccTr6c1mXdfda8tkg2Xkw%2Fxz%2FYpSpMEUqRQ5qZUuNTedqK6qdbMtj3r4%2FTrewKefym403Ou8zBAlHIobRy4j3%2F1yht9iVAEdVomke6iQcl2n9ulGlwOgdwBr4vEcjbxkZWVlZWVl5W5aBZWVlbegN7tyyG%2BccsB3v%2BuFpVRkKAWlEjZgOxFtxKQdDJq2772XmkKXKeeo8ZFB9Oj9j3Merpx7ZVranXRGG2oCkelM%2BVY7rG8awxvrNr7nailAovM7e2shIDOBVqyvr7ersYlXVlZWVlbuslVQWVl5Zyzf4dRbt3ezN5bf2Alf3AUy%2BMaFZUXiStp9gc310Xg46Mm9Zb%2B7dE0CFHWt6e9X%2Bb5y%2BlH4j6ezLxzTpeFwHuGQAjuxbWRh7npsMAbSmGuLbdnYAhl0L%2FWgP5Runpzt7goUpCSK9HhZb1jN9vj1WKhcboYvj9YuarCfDSsrKysrK7esgsrKylsSyO%2BgiZONgBQY3%2FWRrGwZgaGiFNhpO2vXFE8Gw8mgtdld1J2FeyOEVTLHo77U%2FI4Hyja8sHdxdxAzE82giQhDEqnDapEEMneTCSHAvn4V67CUYnyvNfwCW1evzhd5eEV0frWiEqug8u7tRflst%2Fxzl3Z%2B%2Fezlnzu7%2B9Wrs%2F3%2BHvs8rKysrKx8i1sFlZVvZzbWm%2FdhsW%2BdcFvXb5aEuMXguxOYLINx2inb1Fp7bNGPBhRy1nu316KzgXRkroUeTH30yEMvHeF%2FuLLk3MV5iVQTauREpAiD0V0NV7q9iZf9JrPXg3yPDU%2Bc5aXKy9UQEBEhc2IwKronjv5byFzllxfz%2F%2F7c8jNLfbXG%2F937%2F5vVaTNgZWVlZWXlulVQWVl5591U3thPXm%2FsES5h7sDf%2BBC8vragw6ezkcistXYN%2FahEq9ifd9vL5QJ31X3XD6QjG02DP%2FrRtYvbnN1ZLmp%2FkJJLGwNosZwEgYXv2kDBBiTLvIHu2bkgUzHIZtEd%2FkNfs5fpUnVvxKxvFZbOW1%2B53C2l35zVry2r0g89%2FsR6u%2FoPyrcZge7J3%2FaVlZVvF6tWxSvfzt6yI4VB2Ej49qzCG9xsEWZ043Hvkl%2F7XEJhg5zGfYpcHzRrna%2F2%2FZWejZ5jyshuMI7NEQ%2FV%2BvddfaDja%2F8a%2FAVHyl9%2F0AwX84lKUdS6EHJIsgUcrnS3Ep797XJSktILJb821rQr1LWRc53dH9nSbHF2GKumX%2B%2FCnOa%2F3rnvZ4fNuR6XK0c7fsL%2BCw9eHrbi98U3qYuUQa%2BrFAoDfAsf9F05JAvhw6PT694OBJZf9yAd%2FvS9Uk5dWVm5J62Cysq3s9dlCguZQ0LGwrxd%2FPDrn%2BLrZ0uYBKEg7HB14COj0dx1undwqY9YEsojCmqWZb85aV85WH7ne449%2BfyV3%2FjSy5%2B4%2F%2FTR2m%2BMB9FlUlLYdqYCJNsgYXMXGYRuJTV0752cJFosFlvBjsShtm29avf1Lr04L09dfnG6MZxTWnxx6Y9819baoinLGd9kAh%2FGB9%2BKEnrdEBj%2BhtK5QQIkg7Dv0pHr9SMM%2FoHRa45Ar72aGCGBbQwyHEYZ3fZSbn%2FUqii5srJyB6ugsrLydsxbENwxpbxFbjHfEN28kOQEp%2BQS0QzKkb5utvHsUvP9fi3LeByTlPpuED45aP7K5bHn2ivPdvzy9NzaxomNnoKaUBeZ1GJnygUQ3LUkYXTr7TE%2B3LZB91heqXB%2BMS%2FmVa7gzeBUactqbOJ3Y7c0%2F%2FXlgyvN4lwXpvuxXt%2Ff%2BMHdvi2Vbybd9onU9S0fbgCSjPWNf51g2zIgSYAN8l18EXHbOB7mD4Cur2%2BFvuvr61u%2BviHp8L1NJQQ3kxvXH2OQDh8gc519lxqf6g6Dngihe6pP3MrKyiqorKy8Awa9SUVEh%2BvXOWwUBtc3Xv9s3ygJY1JAmiiqudFwfDJ4vuuvdv3L%2B%2F1mO5q0DKvqoj8yGpwbLt773qMHX7r6pSt%2BbLx%2Fstk6jsfR4k6ucnVGKpCQwHcr3xnf%2FqIF91oP%2BhvS3t7e91BIXDNSvDrkV%2FasvDN903zu%2BZ3n51yJ4sngeLc46Pyh73xsbXpZ3%2By30QgQihAIQ8iCtC3J3Bqx2yB4tyfNMtdJSssOsPA3ngrSGCGCEgFpk%2BA%2FiKB%2F%2B7cPuvHqnICMAikQEUUlZJMGhKQbL4R0IoVACXZatp2kfdhMVuJd0m1RRAjfrPXIwvYd%2F%2Fb6nvoTtLKysgoqKytv3%2FPTAr994JBubdxlui00yUDNpO%2FbwpFJu7VgZ9ZdqD6%2B9EYjFzv7SdT7j7Q%2FvtN%2BRPz95mA2e%2Fj0%2Bwf7FweRUbPNDikRthWWAVnCfMOEbpZSxD1WRbndAn2lMjNYkKAtcWY4itkuK%2B%2FMk4Mj%2F1ndebLR%2BbYpO1dON%2Fr7GfzAbDZw5Q1qNGEg5bwrfbqNTFSKBSG5NIRsp6UUCT3Uw6aPAr3bvxCSUHSVHs37WkIjUYS%2BsSqQYZlORQlaopEFIhPf%2FAHx%2B0OGBJkACJEgbIEIq2SUTo1LwXJYlkKvMiZrTdslApBwpki7khXl7dHO7%2FKokHhVGK4tAkkYGdtGCOs1bc0Mvue%2BNFlZWVkFlZWVu%2B5mF427UVTxzZ4eQrZrOlvHpAzuH%2BvKotvu8uyyTqKeGsYkpHm%2FNi5HRqO9o8Pjs8WFKzw5f%2FH08eNr2hlbDSXlsJUQzsNDlfnG%2Bcbz6LYb8D3YwX6ZuQ076ZvRM3h1EpUy32HlUCqWLrYb%2BXUT9i%2Bj%2BZWnXhhYL5o6WzzaarF54rHRUeqFwNymp31W2h2ufeL5QW2bnUG%2FbHuXSi6jdE1Uke%2B%2BuWT0MLUuu6odr2vy8sHO1nCNILWI7LYyhioDqWA733XPdSMjcMQytI92ptO10VBRRllL%2BOuPBSjTFV5ZLNvx5GQZleV80JRGGVntPm%2FvB%2FZNJfXEQrE3W2yNBiOnAAtbryopzSiz6kWfA0bZaVA1UNv3cyDDiarahdSVtitku62GrZnDkktRtI0GVDn1jkd276p6l6wD0cqBLVMyw35%2BNLOUGKN0kY%2BVbGvZWLZVORsGJbo6d%2FYTRduaN1cp%2BwwWMVqmnFq3Bl1t4zKSEQ6DFX2QkmXscLbpEmqCWI0ZsLLy9VgFlZWVr89bnWu%2FSQ6x0e2P9Td6ALe3bbCd6WCATw7ivkHsJZc7r7lvNGxHzah6UOuJtt3fGv114%2F6Xz9Y%2FO708v%2F%2FMX1S3z7gMSluzD9VAacv4Lhzkmzz83kwpwG7Tfg1mFRrQslrDmmfoy2q2x0Opcqls%2FPpe99T25R964OT3cDB0co2lT863%2Fp3sa9vXvgPfb%2F7GaB9sdhs6XmvRD%2F%2FL58%2F%2FWa4ONjXttTPLY60eCj3axfcM9CNHmveUEvjdBfvQTPH5ven%2Ft1%2FP1YOFfaQ0r%2FTbRUzQieCHhvrY1sbxZtC4Qp%2B2Zd4RYbABEUQ7j%2FYZ9V%2Fe6U929UMnj9%2FXLSdUSPOuCYESda0%2Btb9YzHc%2BfHR4jNHJ6DdRE47eGEv%2BJldVrFhGOZu%2BOp2%2FclC%2Fd2Pj%2FuX8ZkSTRKhGcy7jv37pys91dbrG5SmCPsgNrpMYLpDpA8NwxEbLdy55fNmcztHm5sbR9a0z0Z2c7W3lPKhg3tKlKD%2BzN%2F2pi%2F027DbMg2UABDTwY9N1o0rfpzWoI%2FR%2FuFv0ZXTQA%2FNx0Ehd3YI%2FtXH8HyzldEzvuMeDLD9zcfbf7O%2Fuwl4Q5ijMTUIHVcwL04auQQMENjHkyKB5vEzeMxp%2BYLz5sfRj8%2BlWP2296tK2svIurILKyso3gW4VPaQ79baX71JYupWLDNVSV49YD06GO5F%2F5tze%2B0%2Fobxud3M%2B9kdVWt313fDR6dH39d8%2BevQiff%2Bb5H3hCky5CjUTJzJAMdhr0Dfao8RuHOvM9O4FCRlmAX3ejGWY2q870tyoKw7Pd2lcvPvWc3V%2Fa%2F8AJDbnhwjKeevHl%2Bxo%2FRZD5aKv18Ykzx4%2BoO8cbhEYVNoq%2BWk3nFmbJftAUbJaDpk8G9rv6JKa0lA663KvspufJldovoIE9nObKnKWVtFI4EyrvlA0BYUWUhZpFNNuL6fOVgwM%2FeopaGjvDwra%2Bzm9Fmqa8cuBtU%2FfPf%2FexE8ePjPYOputqxu6DTGOwb59r6S6SpaXK9jLPHyzO9b7Y%2B%2F1RuCFvjo5RI5bN4NyypugrNtG%2BuiyW3PxDmAuAFIZFZW5eWlDpL8a0mU0n517ZhB%2F%2F2Efm21dP1mmr5Vu%2BFF1s%2FNsX%2B0mji70POpbciEABhv8lDTYd9OYaQ98HkSR90jOGLaIOhtvrx09NXyh3SkezwdrT%2B7snW13u3ScJU0joubZHM%2B9ZJk7EDdkz36mXuj1pbzsvfd68R%2FyJD598%2BGC54VyNwLGy8s6sgsrKyt0vGBzeJ6Rv%2BvxmPmyFbatP425InBg0p60f22p%2B61L%2FqRO7H1gwaUvbu2S3RXzY7RPrD%2F9F%2By88y04%2F5ieHx39gt9mIKJnFfThV1Yd89zqT6Nal79FySkq%2FdbA7aIQHuNC46RePms2DfVauSZUvjtf%2B3dx7KtiSPrmz%2FzdubR4tNxp9%2FffN4OeGe18eTBiNHr585YMdf%2Fvpre%2BqVwtL3mB9MfqZo7F9NccHjUkJyTRcxV0TfScXQb675odS1wwuDf3kvs%2B2zOU%2BQcX2sOT%2BXB8ZebE2zGWgBIN5N2QHQTTzMngu%2FX%2Be33sl2UD14uWfPHn%2FsOtH2Bi%2Fu57iQiJS3m8nXxvtXNjnc%2FavX7r40dHxHzm29dD%2B%2Fn3ZjuWg2k7ZkIcdwsxdoarYawfPd%2FWp%2FcXXurxa3VZnO%2FJiKlu8Ztjh48uti5y9DJd7UEyWw1wmw%2BJa050q95GCStMwfHFS55mfmfvLqK0SOmgXG%2BK%2F%2B%2FQXv%2FP%2B9i%2FfOvnDfbPVz%2BUE8waGthxrvbdTuWB2G9Q03Chx9lSGc41wQ0DsLBLIxGZEAl0HUMDk6Ut799%2F%2FXk9fvOMXKudGky%2FBJ3vvr8MAmnJ5WknIIc2E2ZK%2BrGkSS3LZDWg7OqFK9zL9Bfqiui7ORv5fn7%2F4vffzx06e%2BMS0X8slKysr78BqZvqVla%2BX3qzRl9E7ebDuygEYLCyq5Vob9xN8uon3nDr5oTV%2B6SuXzs263apZpa91IG1F8MDwRz%2F%2BEeDTn%2BczunJx1EzLsLSTQpTqYoqJRAjdjSlorHu5zderUjGb9Y2uX0lgKLWgXLU7v07LbJ558cUnz547X33RVpCZQEa5tF8%2F%2B8zFSx00zWA%2B3yycWD%2By0fQNC%2B7EkS23GBI6e5qe2kuUEu%2FI7Z2nZUVv5snMnsPczOwOlqYzBiyFJCMbv9t6Ukg1moPk4uVL23N1MLfP73l32S3c2PH1%2Fc5LKAqlLEWHp%2Baq%2BfyLl3%2Flc0%2Fvqb%2BcMcvWdVBoiiOMfLcmURSKGjFvynOXd5%2B6evDcMnfSl6r30l0pqUAByLeCCviNO3eEm4a2HQ6GLa2IoBjc984UAjrqkr5W71QfRF54ZfkrX3jpM1e29zW0AsQbiXACve3Dz0lyS6UmeX2plVqxeSNBrd3e3p5BEm9gCejNHfT9YVeZrqMDlnSJKxmUhkGhlWM%2FeaHPpX3lkn7%2BC5f%2Bnyvblzzy6gxqZeXtrCoqKyt3lW4b50t%2By8qLQXdnj8YEWFQFVRmux4L3OzfuO%2FFbz1w6P%2Bs2Bv1gVKItrbLN%2BdG10V9Zp1eO8StX%2Bekdf3iL8XQ0iBj6IGrShtMS1RjQ19mB3iAb3XwPZN2rzb96xbMzzgE0JKgOgyeSQe1YQXtl8mcUf1acG7IcmV09tKCpwzqqL%2FTr%2F%2Bvl808e1ws2Ze%2BhPX%2Bs998zHp3O7ZYld2I8i%2BxHsd%2BMUTYN9vJScc7z0eRqE714Z25OlqJAJTVYlgGd5yw0MRhFelSmIzzuo02LtHz9Ye%2BCIJ3BFD3Z569cXXw2SRiYq%2Fjh6WJ9a2M4X4xCwgl%2B53HflgD1c13uOBtxkGWZbumelb701OW%2F4tEzHxmM7jvYmyRtYAg7sfWNfOsiSylNVc65f%2F7KwVOdv5K%2Biq8Gu%2BFHejIiiThs%2BSUUEgpLL07Yq5DA%2BASTJF%2BZudLT5Fz9y3TAYrSARTkYFiZqmqUja8%2Brqum3Y%2FnbXr4kPT1bfuLB6V%2FVTY5NZ0LCfs3RapAySLJFjlkWrhlkQl2OZ3tmNMfglhtEl9jUARQOYKNjMVoeDHdyJpDgdR1%2BNhb1OByFcwd4ETTDZlqBfnNBs6DAAgfqqEnRYd%2BVOAxvvnFZWs5HHqva39MzufPX3nfqTLcfq2ZgKytvblVRWVn5xuiO234H80eLu0VIFpYiraljWb3m3FTXT2d%2FwVh73fLs3uzyvJ9T5sZebpZ8zHz0Qw%2Bsb3L5JT77%2BZdLendJLcPStFQrJVuJDPjrrqiIALAOX%2B89mVKAntiecZAgcc1A2pwMwn%2Foe9JLyzJ87sLyq0%2Bd%2F9JOXdoFriYtDIfDXa%2F%2F%2BjMvXc7%2BaUxhsMgIHnng5JGjoxLJm0jMbQwVqlmag%2FRM4p05rC1YNsi6UTzpTcLNwBDQoiKERdoVmXdMEJZK6aLsKs5eunghSejtzp6apy7vXerqwbWdFPRuExCSiUT71bMu5%2Bm%2BFIK5vZ3%2BpWfOfvLZ51%2BKwTbtvAwz2sOigG8td2bB4WKMEAqiuJQlZdoMzy%2FnX7u8eHrhlztfKuVC5ytL78uzdC8lRW5KhjLCKhEqkRZQeIMIBgMigCBogqI22hIFkERpiMN5nPr%2BWpjxwYG%2B8pWDFzaY3XjnJKPDlyUTmW%2Fxjemb9cZf9nSVV5ns6Dqq87ByEm8cUr64AkNxBz0kcO1J8s0%2BHxgMaeoGdeCzvc9P89devnCuDnJ1HrWy8qZWFZWVlW%2BE4XV95cU1estyyqG7OKnI4d4SdaI4J9mtNz4z0rI2z%2BzmTtdfmHfDIWWtTCJLXR7L%2BMmXr%2FZnHvzlnZc%2BBZv1wkdOnf7I1e44GV62ZI%2BMBNWkvs6IYfLG5T0dU2CWehZeqqZpcKKlCk8MBs0f%2BqAybcY%2FPzj5f3cv%2F5LYBy7xuPQw%2Fkvvn7y8sfm5F%2FZ%2Fpuhr1bQT5vMPT%2F2J1n9XLmq3bNzzJuZtnRywnOfDkLAPiCPyJLwxYHOaGsVhnyejO3%2B05JttsiwhU3q1HWGEXYeGAXVd83GyVhhW2vTX9yFVyMS8NE%2BnPzXtvmT22nG1IQ%2BIUucP7B8cOXVi%2FWB7jSw2ynwHexIWBG7k%2B3J4P7xCcQxrslfYrxwcGT%2B9O%2FudRf%2F5g70%2F9uAD75vtn%2By1RkR2UBNb2H7NXxodroywuHm7IJA6lYOmfVH5%2FN7eV3bq%2Bep9%2B3w22%2FPBAcO5F3WxXBhr6YySRS52BiqEaEb9Yjqk73hVXXhWTFYqbcKCwgAgD%2Bse%2B2Z%2Fb3T9hgFaOzlTjxrWklkzjC%2Fn8shCz1zx43VCTOU0Bt9Ws64Veqgk6qEnKWadDrhSjhPRdZ3t6%2BEHFZrRglooNBVPI2b9gJ3Ro9PB6X56GUnIrx30cFj7EaxLa%2Bn9ZbbJFhWGu7tHgDFdwyyYFwgIcwAddDVKu2Gt1b5Z1DCkpr64c1l5sOazB%2FUc%2BbW9K3%2Fz%2Ffedme%2FHavDAlZU7WAWVlZVvhF63IQx6433m94GEQcZA1uxZcrwdLieDaXJhunx5NoumTsYbbciLRVPZ1OiRza2nBi%2BdW%2BozLxysLZ7fXD8afRwrbZPZK2WTUoB45ywMEuS93jPlltmy67nVQQW7F5ubm8Ef4s700rwMP3%2B1%2F82LXz4ndm3DY42eX%2Fov%2FfCJx2LtyUs7n9t%2BRVJnmE5PSGXoR99zpu865Yw3J%2BsNDaDooTNdemnysLmVAGO9ZvxvHT5Kvn55WFQR9fDZfFs5pYgCIW5653lFGEOULO2u9dLFi1eTCrWU2vWS%2BqY96OdPXd67emxrnzIhg7STt521%2FjBgCKeU6YxQaZy3qk5Xdmb3K%2BbOL17aics7wyfOMBjSaa1pSp3LWV11c6J2yfjm%2ByNZ6UBpQ6Bw0ywoO4qX593Xru4%2B3XEuvWOmxOXqg9CslKVLXbozKZKGsCMzq6VQSA0EkAJzi0QmAcGkIUQXWK9uz3tuyKQuewow1PDABzv7PbCTfuGFS8vjD3SjdkiHLSxAGFUE9DZ3ZA%2F6TtnrZq7JSr8ENYpeOF1hN5nP5%2F3Vl%2BV0hGyu02suC6%2FX0wOV%2BkgTrSRTIaCKA3O2etbNK4IhjAtNPfxYzro%2BzEsdD%2B%2FrV89d%2BPOPHjvhmVYTraysvN4qqKys3DU3U8q77ZCiw7v9jfZUEVhhIS%2BdJfth05xaa2byvPfFeXd%2BztY0y1CTWps%2Bj5XRj%2B8vNh788H926Quf3dWTe92H3r%2F%2FN1888l2zvmVRssq1L0WHL%2B1dEPbtU0baEkb35hTQqdieLmciAxxEYPYij7btH%2BZGGwuVnx3u%2FU%2Fd8guNLi0nYvyBpvvu5c5HhnysNi%2FvXvkfzu29UvQ1jWi0vte9twz%2BuvvHP9LNlF1L8ub2xv13Ps8vw1fapKQGKderjQdzTiQvrfFdNzLHYRo2lniVbiw22D4MEgQqfbBfvAf7rbIoRN%2BxV%2BugYWlqQw1T4%2BZ36rwTRoDKUs0rs8WXD%2BpZc7WoeuQGkxmcDz9t%2Fe65c6eOH13vPYlorCpX2xJv6jBdRMkom3vLtWkOvEyXUho39KYbr70E4YPnwk92%2BsJTZ%2F%2F80%2Fz5W2ceWnqjGambF9vkzVSmCF3fzhSUENBoWKWlytTlUoknF7PfvrD3TOXl4uWRWOzHfDlY5qRjkstMLye8KtWniyLTJlAooqAyrvsR0IKg9sz2IR8YjPcW3cmOH9qc%2FKl2w5r382XTstbPKvx8x2%2BILy%2F7pE%2BaoH0pknbI%2BowBnznPA1PWJqf7wSstVU5bIYwcynAHS5gWGC8ATK1c6Tna868Or36o88kNIrjemb5AKLLGcDh8ZnNRaz8JNjveP780z1GJUIIlcXtRpS%2B5A9uwP4KGrq0X9ynd4uTg4EzDx09tPb6%2BdWy33D%2BfHql1NmO7Y0c8Ezzj5blYfqH3Ngyb9dJtDThzOfaj7k3Hs2daX15ycY%2F1Y%2F2P0068GgdsZeX1VkFlZeWu0M0Tljvfq9c1FLvDw%2B%2FKIQSWSLOMUshJ7ScR97Warw8W5EHtXjqYuY%2BT4Q2zUXIQy%2Fdvjd%2Bzdvqlz7%2ByP9WzT09fGeUDud5GGdS%2BkSrYkgKD8h2etuFbx3R4y82r19xTmaUnDg4OtkqcL9l1IGFmRkVR%2F5B2hF2oHWX%2F6c8vD0IXsdGjTfdSP%2For1ybf9%2FjalW7%2F0y%2FsDRtdsBGDrI9vbox09IPv2Vi79EKbyVuS840NG9P0eJruRCUACaxb1RGLW%2BNO6TCwyLoupGKodlrihjjchW8bQc%2B8IzKBUGS0XY3t3d3LZmlSCBzhzL6vDIcH08Vzu918KxddDIfRKqU0ToNkEOZ2PryUrq9iMOxwhw0RkRKYtnXXJXjBQfqq9dmXGZw7%2BxOPnqiL2Biste5wX%2Bvy8GUJkM21xQqVNstgUZpZT5d%2B%2BtyF317yrH0%2B2W2ZTuvCUZu2Ztv1yzQFNSa5RsU2SLZsqFJN7mC6mAGCUydOPDS6n5gWLyRGmc74ng1d2L3yytnLV%2FYNDBhQl5w6ijvaHpiK4XC4l2XSNPQpEoOEoip4EwFnTpajuT4erAVQq7MqI5ApDt0%2F6IsZRB3Uuu1mnP0gMzDCcNgATIbgzqZLBlXLEo%2BOJk%2F0ORmN2lpzs9aIZdt%2Bx3j8O%2B34Ny5efuXidsz7K%2F1inViydNYcNh4NXJezzn3o0vb2lbUjoxKrBmArK6%2BzCiorK3eFb9vQW95rEDYS%2BK63ELNkBCVB1Mxa6nLTzUNrbY9e2luc35vloimjwXDSprJZTh%2F04u9YrB1rT%2F%2BZ%2FsJXz9afYv7AHzlTr1x5j0aDXIgadvIqGYt3ybe9MvN6uieyyrIMfnaujGbWJeWAUpT99wxZP0hG%2FOGj3cHkZ9L%2F69ntL6xNdpCXBz%2Bkg43ef8vRg4%2Bc2Lq8U%2F%2FZs%2BfmQz1Vhtjr2X1%2F1tM7i3%2FwI%2FcfvfzcpO94O8M6fardWnbb9Ae0A%2BZLIAuTJevBuDYOjLDx4QmljV835pyBFLKNkGYDZk1uwqnO52uHc0wO1c7bekk4GdaQQrzTiopACtNM1Xy29y%2FO%2BKo9NdGnxzuOwXB7AbTiebgofWV88J9Pj7fD%2BaQ0ob66x%2BIam%2BBw%2B%2FrKSAgkF7zo8pkJs1njzEU%2FL%2BlhMt7eNT6A2jAb8RX8NPq1Zfy5Z6Z%2F9QNP%2FECz3GoXQy8bCl4g964CmRIqpSHajnaaZTvHv1O7%2F%2BfSy59beqe4apjLtj%2FIZJp0Xe4k8xqR0OVsF%2B4DM0G904XAN0f88tmTV%2BJrsJzAGrDN1YTKOIgH6N47Gxzh3NZkuN4sF%2F0y2qaWwQ9P6ycOjvzbR%2Fb%2F%2Fdl8drzfqfMTl8fDV%2BrZpmXY%2Bwy%2Fua8vzb70wNoaNFJVpsK2TJQEeLFAwnQMHMke6k6b%2B0Puu9pvPDB%2BsBlG7ftFLSVUkWstucSnVMgkJZeIxNjVFrfGKtT1jTY1hN0CHcxjVOhqD%2BwOOVf4R8%2FWj%2Bnq2PPXZN9ueao7eEzxx0tc3eh%2BdZ8%2FF%2F3%2FFi%2FgYTNa76c9nbJMFp5%2BJj3d0drD4z91ZRaxCiorK7dZBZWVlW8qG4nXzvFuMNIbuv%2Bab5wO5%2BCGQEnpejd9HYrjo2E%2FKl2XX5vPLs3rhLIxHqxDLJfDyonCH%2FnIE%2F%2Fzkwfd%2Fi7wK7%2F59I%2B%2FV2s6eiwGrXulsdMmbksedybdfNl%2BXcs2Wb5x9d6ppVy3iHZR6wEQDSQ20Lb32Ku4O6TdmPzmNL%2F6wqVpaHsstrbOXJ6%2BsPRf%2BxDvPXLi0tX5b559dqPRV5pCmvF4bXvnYvqv%2F57vGx28MM7k3TqsWSlYVJbBsq%2BMBtSbxROHb3bBkCLw9f%2BlDcowJcjAUppqenBWSUBCQG8qt%2FKB3lGGtiBUFmoOaF65cv5C1cLusYjse9tBJNk7LfadFy%2FOFlcOpqPBZnGrIvchm3Ba1hvDu4xIoXB2dpo3Y8jDMai27aue%2FdrZz9%2BnE489tDWZaK1tWhX3C1WTVddSigejrhnu9%2FJueerls1%2FN%2BUtwQSwDQUV9IjkhkaEawNxa176PEk4gTKTtN8l3QkkuWXRdR7scdF27nEGl97hdU7t%2BdXN0NI62l1%2BZrQtvcrlLkusqiZumqekIIRnpRiCIVADJHQSUwgSO5LLrlkmvmmEJpT0QOKG%2F0b8m6V2rU8gg2ZZko5ujx9U3H%2Fm0uHInxblJlvWtR05sP7NtrslMwEAptaPac%2BnC5St9t9b%2BYfziY2XlLayCysrKXfaaOklcvzQWhzfG68svd7UplG6sZIypSM5WHtb%2BWDTLSbs377c7X6313LQbrTfj7EvfH11vPpov%2FGfNqV9k99%2BA%2Fwee240%2F%2BeD6h3amJ3qPosd9b9tNIgN6u8qSrZsv0NLt9%2BseKaPcZj%2FiCuxlLaWtNpmn0InijFr4Q8TSvsb%2F48z%2Fz4W9z2t9r7Ix2%2F%2FoYjbq%2FP1r4z966olnZ%2FkPl6%2B1rUa9HznoXxzU2Fk8Cn%2F1g8M%2Fuv%2F0wF2TlXdA8nzQjbu2ccOCDpJuvYuW5RBK35AG6fCzTloKKRw6zMoGCDJpQiWUoTajXbZBNbgkpbjDUE0vKhihCCnfwW%2BlQAiVZbTPuf%2B1afdrjfcrp7vSmoPGVPeUClWOUsa16pL%2FhRNX%2F%2Fat96zv72820SQOaqZ5lQ5fDbLz1mQeunGfbx9sOEWBDQwcAOVGVnGNgN%2BhPmt%2Bnot%2F3nL%2Bl26e%2BLCGRx3jSth2pMKD0UEZ7tbhV8Uv6tJPa36pMMcyMWNIFXORM7DhtpG2DOaGQNx2Ih9ByA9cbj68P5jTXriRMvqE%2BWTOsr%2FQc360M0PZ2czTHTgdciO398%2FL6Tm7z5u6u8Uw6Pb6aGrDtN8oemh9feFagko4ccgKq1TiLf5uDnZanShZl9C79pAmLKqrU1hAkkqnHVFUZJy1hm8fuZGU8o57SQiVJDBvbi27Dx4%2FPj0%2B%2BPwz5z7VL7p%2BgVrcyEHGXPlC9a%2FuLf96bQ7HTbhnZWXlhlVQWVm5y3zbWte3pOsXvPlAvb6rk0BKoqB0plRL6VDTd%2BOGky3d5vDFab206F%2BaVmdzZq05Wtws6yktF%2FdPfkIf%2F%2Fev%2FtYCnjpfP7%2F3wvves7bLMLIZ1D6SDluHxRK9kxnzZV3fOKR7rZhyzbT6AGZGEk1L101C6%2BuTXPwhCiq1xAF6%2BsmLXxQ70p4HlHhYOtflnzy99ec%2F8ugL24tPfflLGups%2BnG30NH7aKP3nV7%2F%2BAP3lwvnWyrvjHi9QrHTgCltC72koEgZh93DwjcemYEySgDOQlEpTVubNkqDbn0iXUp2mZCwtJcmEVIoQjhB%2BPa4IgHYh7UUlWiWTZkt6pPnLm5bc3swaXKnN6JtaZp60BdKpaYt6OGVS35p7ep31NGwzY2mxYY%2BM0GoQRiZ2wYsk64vr5tU%2FU3nbLIT2RDNNPsvvLK7dm7vyBP3Nc0kYjBpW8Lz0uzLswP76sHnt8%2F%2BZtUOnhZcICg9y8PCQoLfouYbkaS4fYToAPEGUUrSA03TROBIKO46K5bJQa1a1GVdNtxw%2FU0zBqoZjjwYDDrNsu9xEuCUsIolIN90vvnaVXk46rsZJUEJ1VkRJhS%2BtqTpakqlZmdZ0IaEZSFZsgUU8UZ5s6HeW9rM%2Ftj6keV4QndQK9g4s9aAhA5v76gOuzwacc%2F9fVxZ%2Bda2CiorK2%2Fm9pFA8ZtGGt3tCet9uLOSUdIp6u9pkxHcP2iqYr%2FmzsL9TM1gtD5qh9mX6d6pYTd98PK%2FMj%2Fx388u%2FVrLb5fBJdb%2B4hPjBy9uP6impQvbIJQo8dtlFR1u4HulM8qd9NG8mHkVKpHZowI5Tt7LCP1h%2Be6zK4NPx8Y%2FO7i8XNMLU7eph%2BLgmPzh3n%2FVmfaR45tPXeQ%2FePprfTtcLDbnzL64uWCt%2BUsv1r9w6R%2FdWNu8dG5I8o4ZNhf5IsFkSN9TBOxlf2TRLWBZJovWuaxJRpSaznACKi5h2SKCcjjbaFVEGfSlqZq0zVbDTAAz1wKkMVToTSJbCh3mBYEsC14%2F7rgdCpd2T%2BXJNn628%2B%2BGuzHLEgvbeO1qP89FT1vahg5qtIrL7l9p%2BZfKznez1XTTjWHbRnV2qayIw70aEELgFCmk16eFNlnCi41vDaQxpTUDUrDXDC8Mg0Fc6pdPH%2FjXv3buLzl94i%2FePPpolHbYXqz1%2BdL8zqT%2F6Ve%2B9DuFvrXBTbN1UJTZXzvcvREJWrxV5baCg8QKI1m2PB2svcLoculoKzAFEmJBQ9uzQTspzT5dWAxalzKL5lwzfrb1r17c3QnaFkc517mjzlhK%2FRHzYbh0VJNM1T6zHo5cppRSvFnTrwQfz1l02x41ZWLN7T6hRxVZlsIqJixXOZ3RWPRNWNBYMiIMPTJ0mNfpSdFWzNso2T843fvja4PhwfQXMe6x6JaFUmn3NxZLxXNVH6FtWI39tbJy0yqorKzcNXrjN4%2FGrztf%2F33oRK7bLh2kS5e1VaW6JOtNnBo0u4Nmulxe7upwketRNNCkr2tRT6t9%2FJGTH7609ds7Ty3my099%2BcJ7jrD1ntHVncGJMlCtjcmAm61QxHV62xqT79XJHtPamc62GtGTmTgAibW1Nfpv%2F0lULPUe7F7y7159YbYez80cZhJeF7ue%2FOSj%2FfvWj7zY6Zee%2BvSk0VPdZqVyzcPz3FT5rg%2B9d9yfH2byjZBuDC4LBzX39vcP1u7bXswmdYlN4upa1Em7ozRukmI1psmQJUrvZtbrclBrLaYBg2q1lSLNAjrbyEJcW2xkK27%2FpRaSjZCkpukG7fY8z166PL%2F%2BDL3rcsGr1GXlGttck862cCAuvsROe%2FXI1mjZahgUlZIdCgtL%2BDDY3%2BzTrTAC%2FE5%2B58EQEdl10GvMcsrcfO6VS5svX8r7zmweOzZz%2BdzTX%2F2lfnnWLIa4QRUyuzRUrkmggQV3dHQwvPLMrtdH1bUENglpahI2b9TdOLz5fD6uzSXqtC2k5tFMy2B3f%2B%2BLz1160pqbbgnukyYIwKaBkyfXF9lvCbJ39iAV2Tbymzf96gXQ1P2zWNVNWHb2KZAkSFJ0KQvZTlhUDaJM7FIILCSF5VQA%2FZvPdmPE2xlnnj59euPiNn7Ng41lJGbzWXrAysrKbVZBZWXl7nj97PSHjCXh19UWfIe44tu74N%2BF4wgpQUiUiJppmch6ZBBn1tsFnu7nhYN52xXWmjPD4bDWI30%2BERf%2BgY2j6xcf%2Bb85%2B5tb%2Ftxw9Pf0m39y7JjPN4oG7uQETKRkQIfHfOe58g8J7qEBiW%2BzoLzcLaYQNLin63BOHA95wLf7tPRWXCjrP98%2F8H9emV0qG1%2FdwxHHBs%2FT8tce%2BGMPLs%2BsHf%2FKgn%2FtpeeXjS70x2bkFRZBfGRaT%2FT5V3%2FPIyf3z02y510SJAU6un2i0A5wj7wzaH5n0Y89%2FcL03Ga3GOZCsCzRN%2BWgHQBou5gggtIkkU1bi92QZW82zfV8sp1%2FMcg1KFhzXx0n9BirgsFJKELSjQO5fmlsWcLiuuhjOO3aT%2BbBf5PdV4YswrFPY%2FaPYfuPX%2BXh5tj%2F3V%2B53HcDYg47QygtdF3PP9%2Fu%2FkPDjbXp8sQkIiklnMo0siUQhw5%2Fx0KINxoCrB1w7Nqm4SIcQNWM2jAdckA%2FbJ8PP5UHPyP%2BgfNnPzjY%2FHNr3f%2FaLaabuAwoW2xPh72BjiXUvB5FljTJJUFyB5KFM6MJOyVkybK9Pm9OMj9e80I1MAkymQ%2Bg5as9P7XoL3SzWuvu1vps1s3P72fl2ZYX0V5rEpommuHefMpwyKw%2FAR82P7Q2HHb7QxpcM2tbGmG98e%2FM7URv%2FpXcOtJv0uOuH7WDMP1i3iokAymAGnnzeb7%2F0oUfPH10kYMJiBoChSN6FcDckCJ5lRw1o8139NXTyPnh5NegCAm7ihHIoMGyG3L2oH536h79Qmdl5VvWKqisrNzkO7Z1si3p5m2H%2FPqNw3v1jTcAEzLYDVFRqNhtpcopZ1PzZNOwMVqy%2FK8vztfn%2FC3HJuMmjmRZc3%2Fc43Mx%2FfCZ9%2F3Gy4tWlxZ995tfevnjWzy%2BMdmN9qiaQoddSTlA7yw13aspBegyuq4DmtJQezIRM2fbtuhefEHvVF%2BaPZrfOLv3qYPfWZSt5%2Bo4iYdj8YL9wMN8bFbu3zzyTO%2BfefI8jS5V9%2FQdFTjd1PN9%2FtU%2F%2BJEHdi5MXMPJu2ReK4LrJMyTF3evXNw7ETSmNwt7IQ7AKHGBQsp9gWDRGiDEDHTh8ku2BRUKSAab61mlt4xQkSIIIaObXysYQo5EJkrpSztTU3fy4nL3wi7LkTMKrga3ZbCoRyP%2ByMe%2F7xc%2F%2Ff9Nlotp0pa20lErLb04f5XdjeVyUaYTrytKGaSy1ooRcXPEDfnWSMXlLXuNSxLYfs072DStymIxg6ohMWrPzbsXXvzK5%2FECvDFiDgcHmEI5LOAQohQGkvSmO8zMtAFnClwtEDZq7lg0jmuLefHq3gYYdrevdjCGJVxdssQa4h66PrsZut6thclQW42Pj7aOVg%2B6xfW3KMmCiGKLa5I7e%2Bri9ujSNiAoNyeYtywwCYiKbw5E%2BAD8kX4p1mUHxlVIETZA9ZuO%2BmXztgJHBNc0Df1SRSWdAqFl6yU17VVQWVm53SqorKy8wd0vrdi2JF5zh%2FwOnubrZiwk3IAdlWJZwrhkHcin2qZba%2F%2FWPPPfXX76n3pu%2Bqc%2Bdt8ndutDuFnunwr96NrnH9ss%2F%2BbV9jNMfwv%2Bvj3%2BoWPH%2Ftho4OnVYyHVZdiH50VhjF57uPd4OLldP1r%2F%2F65e3C5a1FqIdBreZ47NFvq2DSrqYvTLJx%2F691945vnFwZ7avbpYo%2F%2FhZjHou3%2BK0Y%2F4%2BCsn6n9fLv%2BvX8xBo2d6qzRd7gAfLVrr%2FdP3v3%2F%2F3Muj0pWsfF32B81G3w87gr4u6hLNMBDELjnDLyYJFRYEMVQ7BCbzA2ABFdwcnmgnZBZo6Atl4MqUfspodD3YRO1gxHTPpR242gIiEMgg6XAoXMsZqJRB14y2Fzro239vr07DOY%2Fsm%2FsoC5YXXI%2Bgv2Ny5oHLV145fup%2FffnFr5BzL9RuejaL8WYutp8t%2FFvTi59YPr43ORiUGLRN9UJOXCni8Lhv9fWSE3ObKhoYHLAG74Efe%2B8Hp3vnvvbK5R6ysL8J%2Bz21X3btkHEFL2hz9Kc3LntRAaLlQlHHAFrafc0oC1qAMzM%2B0PPX0D78xBN%2F4pkvV8wb7Pbdqfdu6eUDY5wRQFppcm%2Byd4mu4oZXbSQJ82iYtZTyitnPfWBvY52IIzsLYGeUAEuorPUAA0ru7k7ghxv%2Bjo9%2B%2BP79uimLRa2SQirYAknGwZswz7COAQpCkhPqbVPVJCa5sd3CJ%2Bg2Njdn%2BwV6GZGBhfzaiWotfJgPjSTxDgja0vQg44qQ7TissWupBqRgZWXlrlr9Uq2svJHBr2s97lfdut9Y3E7cPT7cp2xhlCksHEroa0%2Fft11%2Fquj4ZPnDp584gD%2Fz2%2Bevqm4nHWqXy%2FtC950a%2FOAHv99gaCaTX37u7AtnX56pveLSN6MSg4bSWiUzbs69f%2B%2FHkjfqXRJ208ZcsxFqYFC7Rt%2BG09JnxCzG%2By%2BXX%2F70Z%2Bv53Zer96y2tGfa%2BlLf%2FfCpx3%2F0O07L%2FaeunPvUb3TDWV4sLdDXvh0MzhRdkT%2FxXe%2FbH%2B%2BOmv7rTimvPS2kp7%2FZ9SWIggrcXFSKS8lra%2BM8XK7j2tI2rVAQJUqj4Jq%2Br4brSx6esCYyIYWJBA6DSuIQYYqRyqIMQoPPXXy2jLKHamrmkm7AgBnbDzBaG2Zz6b1b42OTZl0o8HyOlPv7RPSwf5WD3Yv9nGkWYhjRQkiEkQ0VLN%2FsTu%2B3GGxPaHNj84Mf%2BMAPfvQDZ04wFBxAA%2BMhUKkNTRDzbu55BWgLEn3PNR0dwHCIGJpjm%2FzgRx57%2F%2FvfX2ezIt6MRGIkFNUkGKzkjjK5Too33tg0DIevLm0rBCxZ9tePrXLx4sWum%2B7Xfk7jZqDSWE4nWIeJQbw1J1ldjW%2BOKnZr0bUliqP0YFsojGwrkzSk9I3%2Fjfa1Ljp5x%2B5FpTSptcFarMopKytvsKqorKzcdW%2BY6%2FDwmm%2B203hjnw6%2FeVHFoK9n3xbgkBJsyZES2VVSfT8qPLY5tw%2F%2BqssnfnF56V%2F46vRPfOD9f2k9t0U37ub3NflXzz%2FzV7L5d2j36YP5l8rw79%2FLf6bb%2BfCJ4w81nMjp0H3JFIkiCX87%2Fie2qlys8UrLQU9PCsKMzBk4ulx%2B%2BzXSWJTB04NjPzNtf316YREbX6ti7eB0dKdn3eOd%2F8UJo83Lz7bH%2F5%2Ftjf%2F%2BhUUtfmUggLVBs9g%2F7e7YwP9hHT56sKNmVmrlG9BUOsiGRVITSIiWKNCqSc%2B5phCjOqh1sFwOgAHHgZ6a4EjUI6O%2B63quKZlDGPIq9SxhweEMJMbIUkSkrkEgZFlIZEYoaPsyms306wP%2FG2Y7MM2WJ33fzaijUf%2Bhff72xebW2s6RZvjd5ic3xl%2Bd7d0f1OVyyOaLk8p4zP7ObNH9I%2Bz%2BrZsnvntxsC41UCKcicAI3faVh4xe158%2BjEFR5uaK63Lv4nfUyQ%2BP1350%2FfS5S6%2F8H5Unze%2B2Cxp6ur7vH3cDPD1oGY1G25XaFfqGbmcDlknDYMaHrR8I%2FwUnTz%2Fej4Zeri1nvC0LSxZGxvCFBxZPXep2Dwq1AO4xMC1oEh6Max6hA%2FYWIzL3mmFmBx25IE0yU7SUzl2Bffhy75975Xx94OgHNB5lbrRtqRSn04ANesthBso%2Bt89QyasU9Hl96%2FWJoUtgEEgRWS2nJBwygG%2BfrVYBWFkLXWIQeutximvE58jLxiahEqG%2BuLYoZzlUPNYOi%2FLb8MuelZVvxKqisrLyTWNjvX5UHgHG77bby7tlsG42r8%2FibJDA2dhNT7Hd4E3HI53%2ByCNHv%2F%2F%2BD15h8dNf%2BdLVBTuDcmCPleujke878kOPfUSOrP2A%2BpuzxTMvvfxKpwvNeK4mSpSisHFi33tzzr%2BdqtjZ2duySuGmgbQ2HjR8W%2FWkt2KvnTxTx5%2F88jNfe%2BGru9q%2BWAW8h3ylcT%2Fw3%2FfRrfHDxwcqv%2FnFp598%2Benj0bxSRdMA9P2JosXAH%2Fjw8QcevT89L1m5S2yuC4VxT9%2B5400keX0xSd62RHCNkN7Q38PXl8PdIEJFtqhE2iZTtrIqTQymUrNsPv3FZztTD6iHjw3iYJ4juP%2F4iUHDAI9Uz5w8PjxGt7xxeNcukloNF%2BGV8xfcDw%2F6DJViFcnOwxaVgHV9Ld9x7sk4fF2z2Uyzg1Ouj5w6%2FsRH3%2Fd9D23dN6LhmnLjhU%2BYMB5jd7W7frSDdnA9Bcoc3dQTD4y%2B90NPPLi2uWU5s2kabN5cIiMhSCEsMnhLlVqpxkjcSTrTWaJcv3tnydN7fPWrV7u9C2WoZdO4tCBJ2NcX8%2BbisO4WIBCloW3f6nulEONWjsNB2AgUbzEzfXf7Hz0j3tSB2suXLx%2F48FN9%2B9dQic1kMgn%2BsIx4vrLyzq0qKisr3yQCG7%2FuljcpoNz9IYsNEraFgQAc1ZJaq09HddViesT%2BMOc3J%2Fe1Ww%2F%2B4vZL%2F%2FjLF%2F7y733gL7rSDchRLrvN%2Fq%2Bcz%2F4KHfvjXBhE%2Ba0sX3a%2B7%2Bqlv%2BQD7%2F%2Fgwc4js90hnaiBsSwd1owSuFcHJL5N73h5upgPmAZ1Xw0CGvM%2BRi3fPu2%2BlqX9fDv61dL8%2BlcuHDS82NtoV9vvKXrswP90lD%2F60GY7z89sxX%2F6pYvb0kuMnvWIphzZuzpgvw0fn%2FCvDvjA1b7lysDJN2zUMweaIBIaSqmo9j3KhQ5rIgFKOHh1uWa%2By6tEBFlundq3AS097CkJiAYJx2iHBpbg2%2BY7ShAmbGxboJolBKDG7WCb8tve%2F%2B%2BCXCP3Gjy8ghvK8cjj2f8rbk5dvDAYNLKK84na%2Fb0N%2F1twPjnHAh9hvx%2F24xiXL8x2%2F412%2F7GN0%2B9bLtabjBKl9r2VjigFV8jD82Sl%2FIaB0dhrOhomc44faUbdUrOrJxutNcNjo60f2vTHd3d%2Bas4LHS2LJd0O%2BxuX1q4%2FdtLGoix2F%2F1mxzH0A%2Fgv2Rj8QHtfbh9sUCbtaEn36Y1XfP5tO8IZJSSuyqLMj73Ih6%2FoKeIKwU3FsJN9BqyRQNNdxNxvgPk%2BXWE6oJosLA2K2Fxf5P4evFj59IxP9s3fffrhJ55%2FLuQmDEgZ6kXLmyv9ICIk19%2FjBGqflNKUeGMn%2FICg1lmVlFgR4VAQQVTKzUQr8ubAbA0Z7ow5ZHSnEQ6t8spo%2FMs700%2BnE0wDckSbyxG5OdNQ%2BfCoajUt%2FcrKG6wqKisr3yTmkNBtHen1zqbk1o3FX%2F907r7tKS1ZigiVsJo%2BylJ0%2Fbztu2PEie7Sh%2B878v61rTn89O%2B87IPp%2Bb3FvNaj5oFJNA%2BMP%2F6jH9zvq%2B0Fen5%2F8Uu%2F9bkv7c3ONoN9CtE0agoKW741Z4ru%2FaRSrd293RAR4pBgbW2tfFv0pLdip137pTr5s8%2Bd%2B8qXzi5Kd743sFl8vGjvaPP97zn1Iw9sDSKer%2FW%2F%2BM2L%2FULbvff6mTY3qRWYhM9s8NB3H3vg%2FvsGoUEm3yjdoW%2FDa0pa0N15eTPd8tXFHfTXl55SaBpuYwjRZd%2FjitIyISvsBsK1RMRgMG3bmcrvPv9yNszmqGkOH01EDOCJR58IaOVczl2XTcSZM2faZMQ1w%2BHhCyoJOxd5%2BezZ3WXuLyqOgdriIkVePwCDhLCSO0b%2FVlzTNA0lss5isb9%2BsLfVluMnjn%2Fo8Uc%2B%2FNiR4%2Bt0MCO5zbxbTOcIjoz14feWH%2FjYmfvvO%2BOGNTzq59RpDy%2FtH3tfxFv%2BabMDYxuMM%2Bzgjg7%2F%2BRqaEQzF2oDNEQMokNBVuiVZb71I29c3GFLh2fPzZ555Rt2sE0hI4Hi7PzLprLV338vZ3PzJWmvX%2Fd7Sd%2FXmkl1VVycwXy5rv0g6yyissJWIN9HfHk9u1ZbNbQdmxRU1z%2B%2Ft587VBInrdLh1tMT9x8mhm1VFZWXl9VYVlZWVbz5j3gm97gdvm3ZFd2HIZGSRBplMVSl7d1lb92cGZaRXjj6yPH6w%2BYvP7f7dF7qf%2FN7v%2BbFzz7SjboyPTg7%2BmWfOXYA%2Ffkz3L%2FS1WZ43F168kO8984Hh5oOL6XpkZEfWwwYhyEIAupfH%2FqqUbfoqdW1jKKiHRpzSIJhzj%2BvUvKjRLx4sfuPKhfNz%2FY69PHmK5fL9Bzvjpf9m%2BGMb7fG2t%2BN%2Fmp746ecvX20GX0qxPmM0Y%2FaljSH3Vz1Q%2FY946wcuTGZ1e%2BD8xgNKCkMtXalt9YAqks3loGUxZnkC3qfxqM6HvSewBgMYXVsDTx62dRpcW7fQHJ5NWlxBz9ovwSVi52AQEbeHm%2Flo%2FLs7%2B39kY5xkGClkSwqr8aukyGawvaj%2Fy%2Bji%2FwDLljplEOMllTV6GB%2Fs%2F2WbR8b9Qq3lftkvpMFokB%2Fa6%2F9JBn%2Ft0eXu1bqxPa8wLXF2NmfEwvx3y%2Bl6Ozo2K2uTtjiLCGdPk0QhLYXCMtfotaN%2BHV0O2sXiIWiv7ixHjUPZ9eq7ceZwtPZ9ZfD%2B7v7PHdn66f0X%2FqwcgizG%2B3SIU%2Bjj9p8cD%2F%2FCen9eLa7TBje5sGvS1FIdruKtCcniZtXWMWvKvrgapS8F2K7k4RT3pys%2FPPYfT2plDwYtUde6rtvx8pL0bPVF2IY9qDDbK9vjo4Qo7K4fTPfrLz23%2FIsf7Dtx2ChLFkjckaHwD6pu2AMQLKEejlO89J07Az42Ut%2BuZ%2B6TVsjIjowSbzJVC4Ejq0FRLAsjkCVzQ6%2ByG%2FHVq1c%2BsxM%2Fr2INQ%2B31LIzoyYFYhx%2FZXG%2F6VUpZWXmDVVBZWfnWIvDN7qG6%2FVT%2FG5gM8mYLdwvLBgslLY2XtXN2a8TpwXB%2F4UdHw%2Fmjp3752af%2B9O986gdOPnxxHEdqtxlqBkeHT%2ByfPPnQuZdeGs33irksfvZrZ6fS2qMn%2B1rXo7RFpCFvjl0ssATo3swqlXYJ%2B0a6FSJ7aJom5HvyJV1jxdzNlVn57MXzX6u6bL2cbgaU2fQBeWfdnzg%2B%2FslmuGV20l89P%2Fulna9EaZ%2FpN2lEBEsD91vnOv%2FF3%2Fuxxxbb08XlofMbytIG0OtKcRFUA8ZJAkdisnbk6A98%2BL2b893Jcjrs3KQHXSk1jB89IkqGs0kVsqmUNJRaWg82z837wcvn9i%2Bcu0xfqTVryy2WLCynffhLEmEpHSYiMpr9CHXNZ756MJqwXKBg2S9F4xKl9kt43%2BOPzHYuTIZtnU%2FtFHXYNFPifQ%2B%2Fb7n3hZCqa6GUybBOd2nxkktzdqZ7dbk1GzKOQaOOWk2mnBCBlBGqEm9wsFgcRyNcSnE6VJzOumyLm6U32pEHgwdHR3%2FwoQef2%2FnKU1%2B%2BUqlBhGJt5PecGH3fiQcf7crBfr9Wl8PIWrveS0RTMpXgkcybM0Jx61sQnBi96b%2FxKHjPgw9%2BcL0sloCjifmyLe0gxqOF%2BPx8%2BzPnLn7x%2FOVdE0SSOEiz6BgMBqVeqTuRQ9UeZHDaJCRvosD3P3jfeDwejoah6LMjE1Apbm7FPkkKAZmOywdrobVeA0sYrq%2F9Vl3kbzxTtBokWVXTGBL1EXNwE9nNLl%2BNp%2Ft0JAwlcUhwsmgWeebIFtsH9%2B6flJWVb1mroLKycrfJWLrDtChfX0q58dBXyTYIoZCMMH0I3HkZnc5IP%2B7ZI5NcPsGvPcXfc%2FGFv%2BihEz8xGz%2BxmI6iu9%2BjT768%2FRuXpn%2B650vikxv8Vsef7fx9Zy%2F8Y4%2BdPj3ttlo36gtQMzMJIIQtAboHZ1Z5dnziVzm72zmzE25hAqeTJ8q49z30Ol6ji%2Baro%2FGf0f6f3b6q1PPVPetw6ljffXz%2FpT9u%2F%2FCDJ07K9Lpax%2F%2FeLv%2FX7ovLo7oUHf1llhzZ5QE402rc%2BdceW9vf%2Bdo4KNnfjYmHJJsIoFPbctAuug7QYM9zDXW1z%2BOefcdw%2FUeef2HUuGRmt5SzOKQMNe%2B5oizOQhAhXVsC9ZK7%2FurJ2p%2Fffuk%2FLXVx2Khs4gwCwIzms%2B%2FbeLzJXSvBoAKRNdSjVDvIweRis%2FafLJpzsDNtGB%2BzTVnY8%2Ft2F4%2BKP7HG%2B%2Fsrw3UNM%2FoS9E1RGQvGa8vp%2FJ%2FLrf%2FK25%2Ff2CZGk8XatMLeUE3zJAf%2F7v5w6%2BR3fLx%2F9mhZtqUJuoyamdLN0mREMurAgQqQsBA0zTQzqpcuJ2fyRDisWGRHoq470YyHfZ68fPYvP7iqU%2F7HLkynYg3%2BvOKPrI%2FHu4szOV6vqX6RUQ9IFA6jjAhFKeKt2cICgUWiipY1XBlAC4fNoJaQtMlD3WLjcj2zdvxYsTOnZZ4xXS7V1TzddT8yHHzqzOZ%2Fd3bvWfcL9jVvzTVi2vpTDf%2FU7uIfPXpqaz4t7pGhBlngVOVcgbYHdjpUS%2BnyWKfR9NzDk%2BOb%2B8OGklkLaRJFH3IISXJFNZQR7j0sGtZFa7eyskbY1KBvsgxAIJHKYpxtgVIXxwfsbx3vpdQCarrvXBdWx5G94w9%2FVoufPnjp%2FLmrX%2BpzBozAi9oBQ5UG09Adp%2Ftbjm997OpO%2BTbq9raycresgsrKyrckmet8p1vEu2UdXtwc0lMpKYOkteosu3bejZrRA81gsajfc%2BL%2BZmv7V397%2Fn%2F87qXHHj66WdaPdwdHmxiN9F1nTp9bjJ568anhkkVDD1fn%2FMKXX%2FmJtbY5cd%2BgXa6X2kTHcmkwtgXcWBmE7pEZ3avK1T4qLA32zfmt%2B8yeqnuwomJF1w9ny7Wfe%2Fb5r6CDymLso%2BvrF7d5rJ2fG536%2BGMv%2FeD0yMkw0nMXh792%2BcXnQkiXOJwpYxzM8lQrR%2FsXfudHZtOnJ8qo9V2PYGcJfH2RbQqHQ2lLyrf5AjvlYWnW6qzWGtmHUrIUJo2NShYJpUoUqIphHY52HUDhzoyKZFoLRFCDWkjXHkVXysFw9Pyet7e356%2FrPwOGY%2BbM%2FacmMRhkbyplZGqNojJoB8PueHNqHA%2BU5efrlGvzaXCN7YTp%2Fv4Li3MfODbZK8th20SUACQ5laliyLDePuSXxl30iYpcl2RturpZalOGV8Yn62L3xz60ubOzM3H%2FyNFT42xP9WUzZ0HXsaykioWDaEopoYgGAipvwnIGkpASWb55gHrzpn3OHKuO%2Bw7VJrowSVvbmA7HF9fLieX4xEu7z9354ZpOvURLl0Y2KSz05rszMKrtgxTZlV5yyEk6SAIgbVGzJOGIWvsbP%2BCa7qIU40oPI95MYTabZXP0vJbtsHXTdH2%2Fe27%2FYHH%2BM8889%2Fni36g5g0Ew2dLZpam33gzBseJl5dh4uMH0nvt7srJyT1gFlZWVu%2BeNOUR3Yaji21kC26JItpClhF4iXWot6h8uw7Wrft9844Pj%2BWdn%2FNILV3eP7H7PiZPvr8uJ%2FJD8k2vThx5d%2F%2F%2Be3f8N8bSPfWZj4zPLl%2F%2FNo90%2FODr7F8WRR%2FqYqAyGA2rNtO00Bh027DHoXpi63opXpkuFkAEHTho4HszLcs332Nefs2b4xfHGf7uz97lXnp9746UqRWhRTy33P1L4y7v9j5%2B6cN%2Fi2DDq%2BSb%2BdeUvcPZoo4t9ETpy1VPUTbpR5mNNfKDmPxGbg9mLjasy33HytkH49pQCmMMLKQyUJMHcSXLjiexUraVfkD2Fnl5NuCaJe1crsGr0cmDFvPa1RstrdRBARUkDlhHFUhJpqEESZCldO9p1%2FNTe1z6LLsBUPVwC6DlReQB99LhPb4xmmZe73mp6pym2SqrNlLqT6%2FHhg%2FjieeZ1HtDC%2BUAw3uTsjJ%2Fqnjy1dWat64%2FTDKPU3%2BMaaWUUZ7h2Te0aSpfYAA2I2ykEJFIUZwq7SdOFtZYDtcO9OPpxJov1SWQ3WTCeLyaOvnYZfR9Z7bRDEsIqLrKweEuyhGzp8PrRaZys9RW4UgGGkDA9DJlVkeqX%2FSzrorLo1KlX0zZNbdabodaOvE%2FDH2qbnb4%2Fa55rOwgCQIt8CAGdbAWKUEgRoeSQb6x9uLtmSUnafq6aQY9MSUKuDmSSTKRQSQWUPknhcHWV6G0RVnSFBVgYbv%2BALpp4sc9%2FY%2FHKv8vLFxdcHdOfgBlHjmjc69Iy%2B%2B4wGQsOvKGYzbPfWjDJ8bnue9CP2z82OPFw7Zq4x%2F6erKzcK1ZBZWXlrhJvSt%2FoYMaHDxLCGEmugWySNsnOarp%2B2DSn2mZZkofv36jLn3%2F6yq%2FtVMelevzkI938eKszjKKd7D1x4qtPnWvJvdmMjXG52n3yJT%2Bxtv3EerM7nKyNB636oj6cwmGsMLp5GMKGb%2BXuKxV2d3dHhRsCJxJra0o67h0Zbd%2Fpcxev%2FMLulVeKLlQKkwG18%2Byk%2Bpz4408c%2F8TCa33KuV%2FLn7568VMXWGv1TO9jtB1dSxvkCRQNm4%2B0P771wGB3v%2BRczrcN3UYYwMK8Jp1IJLKBFBKEZEWQbzetivuQce8Eo0xZIiUhhK2Qww5JzsPxI%2FwWwVg4oSRyYHCGM8iIph9O9kq72J%2BdPcc2fsMDmeD19bXlcrp75fKiqtiZtA0M6PbVv9g0zfryvvUoZTxmuQ9QbiUuDAfwtZfOfsf9G2O3J2Iw6qaL2skUNVBQAfHWwiajkI5Qa%2FeCpJequ%2BWg5BaDtb6rmdiRtbBM9wvRFxxSCoVIsEAhiSreig0WWO9i0JDA8%2BVynh3K2oRELpdNXZYxTVebaIfDofrKG54r8RwqtcoIZIRChvrmfy%2F7mou%2BFlzdE850pSSW%2B2JkcKYySqSrQrVmZ6kpJRqnpPathhYbjVhM99LDPYBB0eiAGd6pry50kBDcVGuKa6bdiZCr36%2FTZ94zGdZLrKys3MkqqKys3KP8DQYhIWxLICmcUUk7K9nWDuWpYLJcbnbt%2BqMbP%2FPs3n%2B83b%2BvOf93nDrzodl8q3Yn7B%2FLfPDx%2FD8vbP%2FZfXaunrjM8T83mP5mzt6zVn%2Fy5OhPXR2e7GebjUZRS%2B0zXZ1EJIDwa6KT9K1YWqmOs4uDKYezxTV0PWPpgRhkuTfG57HiwJP%2FbbzxC7l73oPno9%2Bp7WQwWSzPP1z0cPWPVv7Uxtbxvdpk15Xm%2F270Uy9d3p1rID%2FXeT6Ml8fJcML%2B8rtmy48t%2BJPT4Uc3tpq97aYu38kH1H79LdyWVg3GBlnCxZKE5Lf%2F3EuhlFyUyfVtKRJLStmKcuPn7JSi5LAly%2Bs%2BZovrs91Xhh3dYPzJne3vWx8qq7JSHUIRGU0%2FGr2Y%2Brl69Uvisulolh7Rb5AJXCSusvf0CxS257aH3k1qoPXiqxU8OFiKK%2BvznC6Y5TEogkKpOTfd3t6ioT6F%2F%2BcDHjzeD3c4kjSWK9nYrlZJtD%2Bqy4LcDykVEvzGfmyRJrEITGuyI50WPdUNtLWXU1Iql%2BprUxd2No3lUBRF6ZLAAvy9dfuzXf8OvvqwMeIad6Ge6EnCAHlYgkiGMO5Z60oW0yhDtNTsG1mSiIrrog8k%2B3BKzqTC4dhuQxjWwyhpW64hcxiAMwCc4lX1RkPNbp45KNcPxYhUgktICTUdlqjRK5ua1SFnQJiCBtCmmbcsuMY0iSKgh0b7AevnmKOeQGkvYAGjNbo8uog1aMggnhmaSBbzh0cby4O9k44zff4Na%2FzQ8TndwaqcsrJyZ6ugsrJyz7obXdOl6xdGFNXEyMhZ1fWFcqQUua%2FN6Ps%2F1Lx88epTF%2FL%2FvvRi3Lf1vjXWem01gw%2BX%2B6483Dx5fvn5SzOhjJjDc8%2F715%2B58NHCqVOnpk3pW0ZNX%2FquZHWmTEpGKA7rO3xr9vYw7M525wUKGCIgx6G1tbXyLT3dgcBWzILFfPTMC7uf1PmXQl%2BrTgIY99O1ouNPPPgnjt33l15%2BbqPOSOaK39zZ%2Bx%2FO56DR1eoKTbmZIH2s74436995%2FPQjw0Uz2G36JW9Pt1%2F4%2Buo6CyxhC4FvBRqhlPJtg4osoYICoWvrBjWyQAiHE0f1YTYKirB4c8cW0%2B%2FdfLR0exGO7HAi1Az7wXivGV7a3Xvmmfny8CBDUSUkbMiBBp3nc3rAlZoQeFl1bUM3PksHlSE0w%2FFaP5tVKocGg8Ew03139tzsQmlPMz6iFrW9O5JMaki8KUmAnDbpauMko6TDFCslB8g1XCONAhyhXiiUkVUKIZtIBBinwbwN21yTGGH7bT8QS8VaE1GrsldvZx9EaUcL2gOCVN%2F3vIkREBhQvVEAyxRvSRAohCXVMJGJANk4ahAEQiaL0KvIWsMuZZQgQtzZZDiptV5%2FT3s6V5iD4eCAbMSopWlxknRzVIGr873TTcyb%2FPiJ9gObR6LvGq1SysrKm1gFlZWVP%2BwENmCSUAVbxrKNo9aJ4qFctnOdOXnkl7vdX73q585v%2FyUPnfreyeBk129Qf3ix%2BI7Nvf93Of%2FVXb%2B0OD73sT12v0j%2Ft48O3vfwlX%2F95fs2IzZLc1QeySX7QqYjoyQ2SgnSIL7ldNJX6C9bXKOmmDwKp4YjtOAPjLjhsHu1brtRGC00%2FGI5%2BlvN5v959nPtRE9NmVYDA%2BXHm%2BUTvf%2Faozyc%2B2uX9kp2VrwYa3%2F63NrP7T19eayXx%2BO2ieX2Pj0b87o2r9%2FdLB%2Fr%2FSdPrn94bWb2mtrxlgw6vND1W%2Fy6mIGMHUj24bfuVogA8fZue806LMoJF5C5Lg8%2F3hkCbIHeOF84HYQZ9QyhUktfi1wSsFQow2W79mwX%2F8fy8s8GF64fnzrcoV0iSFPt4eBg0VUD3NhRQidjNSzG0FH6bkBtmbaz%2Ff3oqysNBCTT0k%2FXuNLxZw4YbE4f7NY2R8Ooc6mSctrEdFBrUMDUBmZ3SgsYEtsWeW2BxrIwktNJ4ki7j9rbLo0jHbKwIpMMOwEHNJW3Jlu3GoAFlsQrGzo7ZB8oCSwWZGJhEabpx%2BCGUopDrRtESqW2o5mGFxf6wih%2FLha%2FBR3QN8CABJbkk%2BLHzEa1AjJki%2BiUFQRKrFsN0BJ66FvcdmgYJYQhbtwdgeUSJq1QkKYnMy0ctvoMS9E1WVrHsskFNxQoBlzJg2ZKA%2B7o6pmOFqIHmmdoYdgRM%2BhIMGsNTZke5Eez%2F4k%2B%2F6L1o6fXsunnzb0xsMjKyj1sFVRWVv7A3KUuHuI108mFnSgqGMvZmvsUsdAPP3qsX4%2FPvnTpF1%2B8EEP9keOjfjiauH1AR%2F7800cPNvuLLw2uak%2BOAaPt%2FuALn%2Bt%2FZX72u1uaRx%2FuNTyCjgRDMu1qemeVfLjXb7WsUlUKnsHUft000qPRqCzn%2FL4T4ibz%2BoAiJdQoO3Xtq3vtr51%2F9tnWF%2FvcNRWKeGQQi6PN6VNrf0mM3zedDeoS1Jf2c7Pyv7547nKR4Wzbsj9dAiYK6%2BjhwkYpf%2BH3fvzRnWei35bz7T6H4pAMft342IASFRKMJckoBGkiDktXb8NAprCcDiCtIA1y5M32P3IKY4ewbcRbsglMZgABEX1TrirOzhZnz%2BY8Id4wlb0Az%2BfLAiGAZX%2FYVrAa4RnXlVBkQHZ0mUZgKIcDay3JCTsXuUy%2FN2725AlNCQlwCcL4rSsqlmRhbFu1luKAFFLaTno7UtS0hMPF6eZwzo8kLb8KwsbJW%2FHh2sb4Zo2Ltye7i6aPKEFtWIhe0Q8G2%2FN%2BMZtfOZi9MjV3UtAEG4URRlJg622OsTCnjSaKVKnVrg4Lu1TZmTRFUqJl3yuyOEtdtiJIqUe9VN50L03z6mLhRek64SAGjKCCWtoWbk0vWevWaPTY6e%2F5iUF7%2F%2FSrI6bo1uRYKysrd7QKKisr95bXzfNuvnEyoMNNAQqwccXCSjfK%2BxTrl%2Fv3Ns2LG%2FwrB%2FqPlvzU%2FvonTj74x%2FYvnOy7h7L5Wwb6Ew9f%2FR9fOPg18bRbD%2B7P6fRfbnZPLfjzzp3%2FU49%2F8Dvmy5xe3YpF61R2QXUmwgp0eCIuzLcES595%2BcqumAmaActlLruANv1YO4nuCuYPinwrtEQEKKUOXY7xF7bO%2FL8vX%2FiNS8%2BdbdvLFJQ0zY95en%2F1D0b%2B0aO5tfSg2wWDXmg3%2F72z%2Ff%2Bzd2GrGT3Tl8qQvRagOaDZf2Kh7xR%2Fyv7xM0fqlS81Wd%2BiI%2Frta2FM3CqkxOGntlgcnlODr1%2Fz9VsO%2F6%2BMisxbEkiQliTs61eRJVmmSlw%2FhkC6GcZtbkncELIdLbVjBF23xJJkKUrpy2An2udm%2BtTO7BdTy6HpAwRJb8SorS4sEge9gcCFRJVBBTBdhRoAy3SlF6%2Fqy%2BF7OQdBA2sDDpbnJvyZy%2Fzg4xsby9kD7WgUvbKXJFScxRRIXpUBeeNlByyXyzKahBQUcEb0JVFgbLi2pCXbSBIKhKPUMCrhlLAyVaxQSBHDytvxzYgqyRGWhj2DGiivH2mKFG7BXF7whSEf3DwSva9mlcqe8qBVo7ZTc4H55%2Ff3fmHn4pOFbgRljQzmfe27hn4AA%2FPjH17TtG%2BaBiwpVFJU8PW4l8E1ohoWYjYcbOdk2Q5GKDJStdo17SZSkaRLCRNWsaDZ3tos89nJfm8zEte2JJE1ate2CfTINDSNqZEo6czBsoETPQ%2FACM6TZ7XPI7BcXFnGlXnZ2mubaJh3VA%2BZ5cakTHcH9CIg0wZWUWVl5Y5WQWVl5Z7juz%2Bo7%2BtbxOjwim610bGLva5oHPed2Pyjjx%2F%2F%2FLNXntq59N9%2F9uJDg8GR01vdYjpohsdHJz7xwZM7l%2Fa%2FfOFSmR7UwdA9UXh6e%2FF%2F%2F86nJ5Ot7zx24rI0avtREwNq1L467cPdC5tvkazSO7qOrdAFGxu4vp6lizMwv%2F%2Fs11RQIrBqlA4WjgWDr5zb%2BYWnXv6SeTl9eTAcRJxazudtc2Rt8uefnvxQt9zqUu6ATuXJS7P%2Fcfvl7UZFvNCrUNQO%2Bz5pW8xpaf2Iv%2Bv0%2FR%2FsnTlrsvKm9Lqaiq24fnEYOHxjQ7YtJNmARQrkwzgBxmnJvDULZ4KxpVvdnGQLOwDr%2BlVdv%2FZOx%2FaOoJKNlNHO2%2FZgGrP58qVXLnUDSK6TpHCa%2BRw4TBpubgaVptIkQE9%2Fexs1GWGgtFGXCbSjpqs9wPU6ltlo%2BNzTX%2Frgwx%2FZy%2BWwbYrnTlRtv90ENQoTToGSzFBC2IAxRgiCoJdrqX24yiAby9UYSarIN6eGfUtCdvowmyZ06SLzRsMB8yVwZXv73EEXEYvwcq3dHzbz6Xxwbu%2FKle4l6QVzAaegaeh6MogoKnYfUIaGMiilSePMKNUy4k0knNvu2sXl5WhcuozFMiIkZWa2VJFKoJjiG%2B3cPrt9ORR%2FrA72toZBDiRDUs2AO%2Bp7YDIZHNtfNolgHJLNApwQQEfXZUeYwWDe9Z%2F87U9%2BbXzyxJnRGjMM2KTMKqqsrNzJKqisrKzcThhzSMZg6fptgSfqm4y%2F6crurPDLwa9Y%2F3KX988mf939x96zf%2Bk%2B1yey%2FK3Hm%2B9v2s%2B%2BPP%2BtuvepES%2Bbc8HTlV%2BYbn98OP3E%2B7%2Fj4Z39x3Jxim4UpfRLsjozISMQWPoWyCrL0AtQW1hCL2pEZoGHYWO5bN3z%2B0I3Lw22rl9RlCiUZomuMnqyOfHrg9HPvviFVw4OrraeFHTAR7r9h82frH7PZn%2F%2FqRMnZ4vDyeN1ScN%2FfP%2FyJzvWJnoer2vcH0SdJOyN%2B3iku%2FiBwndNyyfGx%2B6r%2FZoX4eSdsMDgAIywTFWAXlu4y8Mfv9mNxeiwEZgKKpbA7yCxW8JYQigF2IEQhEhBIJHXb5J0x4ifYi6qUfayJZJw0%2B7o95bJry4v%2FiZ4CIuW%2BvAIjdmfMB%2BwnVChQRdmntGbIaSghTEdsGAAtLUHZqqI67bmCU1Ndf1wPtiYLZNFFJo6fPHpI%2Fz8Zb7Tkw%2B1sxODqm4hkFhbatKxDxUtAb2%2BvOqIG7cm4QKBFT5MOEHFDmeqylVZZWM7iEgl0diQpLFKUhpX3ppRuiiqJQIp0el9Hur7HYYXedU6JOyVlibPuv8z2xc%2FjVK8CIjHTIXLZg7VrmAYeDCbj1BH2zNql3uLU3M%2BgH60xJF5OyptU5ekLVmlRqmHXUeqb%2FuVCar4Bzo3fY4Opq5WRVQJYBHXgwpAk4RdrGFyjPwwfqTp339k4tKoRNakaZURMEyCthCFQgvKyZwH4c9bxodHR%2B%2Bf7rbRfjXnX1jn%2F7qiHRn1qG9gTGz1Membq8yH0f%2FTsxf%2B6OTUP9RNTnbzsGUkr1qArazcySqorKysvDkLWUAK4bQj6xAa1ViLj28%2BXGbtKxdfef7i8z914bm%2F5P7jJ4%2BVbhqnBhvD45NBs3bulRd%2Fq98eTJjt0yXjAU9fXe5%2F6rN%2FyYkjp06dzGk90jRrES3LyJquAvswHkn8gVqYgyV1eGsOcpsixqal8vtCrxmOFxGKEiGXwaLRog6yW3%2F64vL%2F3f7ib8fisrlYiCVj6fQGx09vvbed%2FEjVpqfN%2FAAM9Gq%2Bcvng56%2FubxeNC88X03PQzWCMGqQt5ciT%2BwZbP%2FDo%2BsO6OOjn77gpooRlUGILYR32UonD4kpF1uGUKVhIedgdvkBAEKEi3l4g3ToE2Qj75gEZmXAGCmNblm3eTmQGssq8NDs1ust7z169kkBwbdW0RKV2dC0Ukeax4tPEDurl5zNKXh9IN4CeKohr6%2Ba2aYOOxkbQXMx9oFsuoQkopVTo9xF85sXPPPKBx2d12oYCNYRVX9fG7vDJbt5oS5kWKevaQpOSbVFxLdGDi22HEjmQoUeggHCGazmc2kZv3gFOurmhW7OpGEsN5o0Wi5v5cokxncDMDFAhDmsghiTpe4bBcEj2VAo8cGLrg2fuWzu4Ok6XJDCWDPYbu0kF5OG6yss0lRaqb7zUPkFYADWxkb2EGdqBZd9boVA4Q9EjGR0e5PUN3VZLO3ny1AfWNx7rN9SU%2B8n21ODnv%2Fq1jT32DDCggQSmTIG91NHQb3zuwm8%2FcfxHymBTUu2CtKttJFZpZWXldqugsrKy8hZ825mo5QRRgxzhk333x5r6wVH51fnaf5kHXz63%2Fcjw6Efv3%2FwL95YnOn1ssvehM8MfvLr1v%2B9sX4K9IU8HjHh6xGcu7fz5y%2FjBjePfOxwfr7ubwSSqsqtOk7xK%2FEG7Kl6AOQUl1SUJ2Aw9bg%2Fd8VbudkRBMiKapnE0VbFD88IyPj%2FVFw%2B2P7%2B385QWuwlwJnkYPpj%2BsSPlO102u1mbHRhItV%2BIB%2F%2FNK%2FGz%2By%2FeX5bb9cCVplCFW8TskQM%2BUvR4%2BkfXy3c8MNnMl5usvC0jrrOMsG3hm6ewknyz7kGitA%2FP%2BfHtZ9pSBoTdpqeHVby401Bfh%2BSENMIkCKWRJTuk1GHnDGFBkMKvO8UPk6YGOaBbUKobSwo3ZU%2Fl8trgp3nuU%2BacYH%2BdqDn52t4oj1zhNPzEFp84PTwuvnBp2JNLp0p8x4j1vh%2F1daPrgb3NdeCB%2FQqc3eyvjtgfhGgGL%2B6NBsd%2F%2BWr3fy36X2v3ixH0hQIklxn8nBZHvDxqJmoHhYBRp80lF6GncRDqEBYycfirmthK7DBhK13SYCyHu5JdkBgzTGSMrEhCpqRLZqTDblxb1V9bP%2FGde4vPzLo3HyQ6kCBFlTLIRuw2OuBVLa8aX6%2Bo9EPallGzoL%2B03C5iflI4Lu5Naq27ZUnfY0iGboXa2sU0PF208Bh8P%2Fzlqg%2FNdtf6bJqezFAgF1chH45KYEWaRslhv6Bxf7SVC1xb0sKg1ICapjcSDQ4YijSXdDBtmpebwQfKsHqukpHZRrS1bcUYRAE1RDRJMG94sWow6h7h4MGBU91mv1x%2FZXcr%2BM0pvwsvm6tNP28mpATHc7nbd%2BdGbAT%2F8ouX%2F55H3veTxcO6N4ouvCQT8LfmGIgrK%2FesVVBZWflDQPj6hYxJO8RYbqI9dXL0ve19X2Tx2ae%2B9uTzly48f%2BnRTYbH7l9v2rXR5In7t37yiff83Nc%2B9%2BldlzEVZvtMxFO7V4e7VycMPrp1LI8Nl21dKyWyU1acAMbiD9DcdR%2Bmef1gzOHJ0IQmnHzTCHHrzRYQUUJRVWZNzIm9vl7d3%2F%2Fsy%2FufhJfgHPSw0agkx44Nf%2BCxhz5hP76%2Fv1GXymqwtds3T78w%2BG%2F97LTp3bdX1tY5OAAiGE1YdDQdjzRxvJz%2B0cfqd3qxXqdg3obAQjeO2Q6MU3H4SGNZRsJIsl0Jk2ELUtKtrCJf38zAcsiNaISgmNCtw4lrCyLlw91YaQJIAS42llBys8FcMUWg68%2FQCN%2BsDPhWZkLGuDQz%2BWUvZrPly1d7YDJu5rPDlxYIWml93Y3W1w6aPzoMq1b6jMhB5MBKFn2PBUURlzcliMjNLjdcakTz4MmM0YOTOPr0xVYIstAkgNuoy2UrPv3kUz%2F4kceOZ9AUR2Mtr78ncXOAgmuLxeGs9bZIpVSD0iQ2kWkZpDSFGlQZq80ahByR0agItzc6reTN4RrsvtrcmW%2F%2BYyQOSSD0Vl8yZJI9XVehGuaGejA%2FAHByXcTQw1LKrF9U9wEDOD3k%2FQ8cXW%2FWRloOvcxetdamxcIhQkU0h7nIOpz0SAAbZSDXsAsKaqqKKDQ3ii1gaPH1HSHmUcAl1Iia1TJhZwWaa0sc%2Fh1oDutNTTprjUFt1JvcUA2V7znx4JXJzrlnDs6TVKKBtqXr5n1XQC0HlSNLfvvJJ79v8sDpM%2BtiOrDkpUhYDVi8snLTKqisrKy8SwZEXlu1YqPMH8%2Fn%2FoG%2B%2F%2BqZ8ktX9bmD%2Bh%2FscmL%2F0iceOvWR8fg9vR%2FY2f7Y8fd8qe7%2BwsGV58TLbl5p%2B8sTfgf%2Bx275WDn3Jzj5o568b6FxwyQi3OOK%2FyAbgB1Euyd2xK4TtbIbEDmWTtA2mG8Cwc1QJPSqiCCIklEO7J2D6S%2Be%2BfD%2Fde7JL7y83zS8MMKFYws%2BtOAjvf%2BGkw89dmR9eXlvMnSxU%2Bqkl5ut%2F13rv%2FD0l7uiClf69lgzvHLQc%2BQx%2Bp7Z%2FubOlR9p4vE%2BP3bcf%2BTUbKvrGuc7PtqQD8%2BQhQ261RXFwmAMvjU48OHF9ZUJkbq%2BLaUCqYMWJvJIN1t1Hc66JxojkJAtBS5QS8pBkqGo128ncEWySAuangIqYnAzXYl0pFwaZLSkpItKF812dheY%2FfL53S%2FBCy2ld8NAPbUpmnuNg%2B9q%2FKNbDz100D1INErTm5rKPtUrkB1JBk4wESHJypTTKqUOyr71AY5892Dvk3VRTVvbavoiGBzEfAd9ke53pjtHo324rPcoat1MjRVLwoFVrDSENIACYSNbIOQs1c4qsPDhG16qCYMLIWPUELKEmv7mgGylqnRRFuSe884joPv6yg5JImWiRtur%2FewDfuoCV%2FapFTgMUQtBFGKL8TEOgMXeeL45Xq4tgGbqDavQV%2BrVmFJpwoPqDwc%2FaH7syNFH3Y49n0AT7muKrLY16FBKTWhs6uG%2BDAEpIbrhRVeTFJGJTApEBHnYfqtLMpklQIwHyrrfDqW2ghUVL0sTWUbSuhoclsOMGiGy44GOM9PqgZelDsiSdZ3Bgx1%2Febf5gXHz%2Fyx2frbm%2BYXqYGQP5u3BaNCMd1rgahn8dC4%2B3Z3729cf%2F%2FOmcaLPIWosZFZFlZWV61ZBZWVl5V0Sh01qBHKWZE1lUEYxWruydaSe2%2F7ypUsXa%2F%2Bp516%2BBH%2Ftex5c2k07%2FI7HHhp0j%2FzMs889u7gyhAVQ1FW%2FfJlPXr4Y4gyTtYeP77d7I6LBUgrMH4ylomY%2FCYHRrQMpoqHR15vu4LYSwh0iyvVtIUklmpIqMzQ3y27Z7G%2BXmf%2BP5z91QWyIRdGg2qn7Hmj%2B2APf8X2LsrGzo2Z%2BhEL2y8x570vb%2B%2F%2FSle0XxVqj7d6GOctpP43hsVwsgPuK19HJyZGffPTEE4ura8u5MO%2BIDtv4F2GEnMhGlu04rKgc9p53IhnLkglkG12%2Fy4EgrL4WWVT3Y3IibwSdKShEZ1n00lgqWNQgKEKWFbYT5FQGjSULRWNj0tiOzpIp0lqoAwM%2BHOBXak0Try4RWmY9cJ8xf%2BmKGrE%2B8nKajdTbEjgn4v5TR8fjcUxnauWu69WJzLQRCtkYO7ABUinJIapTQS%2FV4aCuT4aPPfjAwzvPXd2ldVrRN%2BG%2Ba0Jj6nH01AtXf%2BC9R2fu%2Byhtn5tFWyDoxWGfCTmY2K0MSSXDCgfZ9L3h1kSIdltpKqgiIm%2FcZacUSlqVdIpAUQu16Lvi%2FPk%2Bb5abgje2y%2BwhkALJgaOoSStBvEYzGvXzHm6Nlty7p1ZKwU53FUQ2KHRtqf1a4ZGNo9%2F10AMP1MXaYn%2FU16bvyQhCqkHNhCTSQzGGFD2valFIXRCCEHZBWVSs2ieiFDosgTAoyMPXSChSrRzKQoZll%2Bxd5HFhzYqgM42YixTZ0CwZtQ2KBbQp0oV%2BvZS60T68%2FsB7zo1PbJ%2FfNn3t07DeLPf7odqGwUFdJlou8xc%2F%2FbUf%2B8iDi%2BVSWSIkJLGqq6ysXLcKKisrK%2B%2BWrq9sA7jKHpCnl92fyPzYln5jym9PuWh%2BCf6r5196%2F3vbv3z9sY%2FU5vsKH3%2F0kc8%2B3%2F%2F0bPelHV7Ce3AgfgN%2BR%2FwXbS6v7v6nRx99OC7fF9N1ukIKmz8AA7f%2Fla%2B8JJ3qB9vk8kgunHTsJSePnhr0B4QOT7ruUPaxEDLosAGbD1eSwJJuK56AEQpJh%2B3%2BK2Xq2HGcW1t7am3tt6%2FuffLKznKf0qqrTPADC%2F9NQ37skebkYH20Mz3ajEeT0XIx3euWrxC%2FGRt%2F%2BsrF39nOY%2BXUS7XQL2k7BoI9utlwefaI%2BZ4m3p%2F5550cf%2BdarB%2BcD9d3PZmPlFiWDjv7Yxms63f69viFbr5q3bjFOFKHba4cSqh4IT03GPwV9fKXi35tQBbc9dGzlmwQp4rX1jxt6%2FG0i7MQPTrcpUDyzZ1LSqRQD73rlWA6yh%2Bd6goso2677kzK7zmyp9MQEaaEmNe6q7Xf%2Beor%2B4U2OTnTDtRmt5qPzvMkem%2BjP3rfhg4OhhG1dp2XFkZV6mqaGpKNSRmqbRSSeskJfU112BaL943rPzjVbzXq7G3q82HJI3kD1q0Qz11e3H9y7mg%2BfzTef1Ujs8d8B%2B84mtHaqYPpqWCMTrYHs3YwqRhLAodtZIBECBsFjkxfv58IYSynDFhERFjUtNUdybYbLYfQk%2B5nSjY71sRRWIMr88v3j0r2XREowtSuRqnTy9%2F1Ezuf%2Bir9JbgIl2MQMWnmswkMQXCRYQcmOdhrN9VnpaDKGI6JD6Tugz92gsdGo1MTrR2cmyRr4YZa7cQlSoBsu9LV9Oyo9P7CVTNjNi24UBoiJOBAUEK4JwBFgioJNhJpBD6MBaN%2BeazSb%2B5cLqOHu0qqpCPVrM02h7qv73eizyC9uL9XLGjhRPDKZHFpMDgy7atCfYpsIjbFrF7%2BkePLY%2BPmV85NX%2FT0LFwQ2lBfZ4t%2BVnvGHXP0Iv73v3b2Jx7c%2BO7qIcSqlrKyctMqqKysrHz9pJsteUQ2aL32ofKDjz50ZMDvfvXFywe0wVe%2B1v2ffPUc%2FHD5vbYyD73v%2Fe%2F%2Fqyb605%2F5zV2xnOnABnqx0%2FVHav9z%2B599n%2F3h%2Bx58z8b6Ru6N6AuV33em6XsabuPbZwEXSMbcRm%2FsCS%2BDwNc3ff0O3%2BwuKwmjG1slI1B0aO5aSy3k%2Fnz22RfP%2Fbm5zoklpH3Qa7K1%2FgOPn%2FmuUTw6nZ%2Biua%2BMJ2n6btrPLy%2Bmz8%2B7X9ve%2B9S074oKuhIbqKdfksmyEok4M9R66wePD%2F%2F45MgHF9Mhc8y7YSFBYmSury1jI0gTyBhLsm8GFBByhkFyOawzWYcNydJkzWH26uabbdxvHmmdLR0MCpOgWbJlHZ3Ojg2tor7vkV2chIVFhqqwHLacFqCKK46%2BWwuODprTi9rAuDT7cFY1yc1GZ%2BBDk43jqjJ9V%2BfzmUIbYNGKEiyatta8j9yyJ0PyYLHReaTsuyXhdFarN2mEbBxkhBD0lgkDoWJBRaqh5VjNJHNN8UDxDE1E0zZkTrKOkrHYhPVaPZ%2B5adaqTg3UJXO4ZB0PuV%2BcaOMYDMz6knEsSyhkSQhzbREpSfZhd500dogmD3%2BDi1MobSEIFHIOa07VDgcCWiPxPW6ecTeujOGRCUdqs3GwiEYKY2U41beu4353pLalGzmGeO6qfrERwyYZwJm2Pt21RRDZlcjpooim4fiEh9baJ9bXHx6PzlinFsuT1laf67U2tS%2BN09XRQpCWqHa1i%2FsTNB84UbrtHIlFsNmEJQeDIMxgEgEFXkjqbQM4JK%2BqYAOciTCcy6TpjhZO9GVrPh%2B6uldCoW%2B3Z0cVp4q3xux1VBg2UGnMFkxmi3E20Wcvyz2iVArdZhm6ncw2jrzES9352sFHo%2F3VsuxCvcjwCIa9R9KsiqvLstauxvxaWbnrdOHxNVZWVv6wks01QiJM9BHTaF%2BuPH0w%2Fa1z%2B5fg%2F4Pt4yw3KGP%2BxubYnzz%2B4e%2FaXXvh%2BfO%2FfvnpT2n3a%2BJsahmj2qiMD451Gi053vrH33fkB46cePjK3pH5YkSGk98vF%2BPU37b%2F7N4FXaiTObk77skOeETxXx1%2F6JHxfOKZbJw%2B7DABGHOLdNvUIr6tC8r12yVCRVEUJFGJpcp%2BX65ofOnkw%2F%2Fny1%2F97Hxv5%2FJUSRMMk43MD9p%2F52hd62sc2zy%2BdWRrEFG7xWKxt1g8l%2F5UdH96ev7Tryy3pGWyWLig6cAEW6PBxv5y0PNw6BHxQPXvhcn3x8EGS2HeNekwu1mKm7cYW8iGmyNNy7ZuphRM3hrl1b7VgsmWMBh1xKI0U9fe2piXpm0qmXZcK19IHrSluG9wwVTrZleYuB5UJBR2kMW8SpmUqjJTmSZzQzvamU0ND47W2r53dmS2pYxkZXYwL0xzsaAflmFDM8hB05Vln68ca%2Fplvwkb1lbtR9mrLqrS2KZHmbIiFAluSqZRVVYCSxESCF%2Ffqio9MZdmpotomjKY96U6wi3KvsNZiiLCgFT7WtNlMKyKvpqmmQ2UWZs%2BR3jU1xaUnaAoQImAVB6%2B8wLkNAUHh%2F%2F2kRLgQI7INFG0dDNFXkwGXSOc8mfH%2Bx%2FqxqmsqrPl4sj6YFSXI5JcFhERRFloOBXT2bTPxfCB9qBX0rTtOHYXo462%2Bhen7fevzfvQtFRLJ5YPkk7S2KqUa6kAt7UfqQZV7l37hBS1FBHqHQVwhkwsFMuuWo0cJeOlWAiBJeK2qTaPq%2BdVemMzTOAVDxCnWSwZ2bmGhiVbZyghKjGXutRcEdF0XQYxZJB97dpas05KjLIbO4WhRymFiiql0u5b0869mrYZv9TtfHCxnqjHlqqwMunxom3quLgRYORVw6%2BVlVetgsrKyspdYG4fAEqKVCwpV0eT7fbUbz337L9frzxTGDUMep2%2B6u%2BFTzB6z5H3tQ8%2F%2BOlu%2F2df%2FPJl7352mn3b9pqWEfeLE3t6KBj0%2FsQWP%2Fre07q6N0Yj%2BH2IK1Z5JY%2F%2FzVeevbzDwmtzcnfUkT3isWH8N0cffbDdW%2FMistppIOJm466bdQUBNy4NJi1JJaQiJMlRKqpqloVZulImniwudb9y8YVfhhea2DZTODAj5%2B%2FN6P%2Bdjz7x52nt4fkr48Jm0w7EMr29OLiwMz%2B7c%2FBzu9ufh2dC58JdC4XxPgmLIYCWnIbHG51IPv7QQz8%2B9IP9Xkv3jQ1Nhm9sCSNsdHiTucb45lw8lgDfCre3d%2FN%2BlQ6fxlIiG0k24vBtFL6xA2Rza1uIPKzOJDqc7d4ywocxSKlIXl2uX0cIhSwkp9JyxTaqil5RkZEiLAI5HWQjydlC09cgnbV3ClmqUmJHmHKYu5wyskBGkkhwcE0ERIaMMg%2Fj3eGlQLawMGBkCXTbeGu%2BvbCnzDB2SghZMgib62wE6LbnDvnGFYACFmkh12tXmz7aVHv92SVZVmMq0buJqmWHO2MVyyrI0aSbmaOzulKWmSbVtOpdMsOuVhsu9iCQ1ZRSoshyqYigRlp9VWL3GaSq04Y0KoUE2bcPbQ0oqgRhW9wsUtrm9g5m0s2A7MP3T5Z98500YV9%2FokLiTCWSkAmrpGV0W%2FcrCcsK3DhdKwVIK4VshxQuNYpdKtGVwI4bWd02WRNJynAWVeFb3XhWlZWVFWAVVFZWVu4mo1uNo6hm5nahYbsYTV%2Fe%2BQVf%2BT%2FhC8MYjqUJ8%2BIHu%2FIDk0fePzyhvSc%2Fc37wu90rn%2BZVCQhgFDwk1fR3PTZ5fDD62HDywcXyeDcvWfmmqWr%2BXHnob7%2FwhZ0dJrmVZF%2BWvedj%2BOBY%2F8V9D25ysE6NWuWaCiQBcVtQgcPYhhQ31kESipKKHnUqfcaVeuLCYOPL9L9x5ez%2Fu%2FdizjUKNNDRjvVFPg4%2FBN%2F9yANHx6O2HRydbAydqnVvvjzXz3%2BH%2FueWs%2F93tjO7XJd9LLJ5mDJkaPrK4tlxh%2BvDydqSB1ud6PxDW80fOX7f%2FZ4NtRTmGyIBwhw284LDlQBe0%2FLfgtsSR4L0ttNF%2BDC83GpNZwleu7tb9%2Br2226bb%2FK2ZwDp%2BnKHkayct7XKC8X1h4QlveYkF1cpZGw7bWc6UVhK6GUiZBkXC2WGEqSb08JYvhXxuLm%2Bzr55yHrNBKg3f0p6Q2cho8NHYltCyNxgcXv94GY2MRL5mndQh%2FvOjEDZBFHUxOHQAyqybHAv05E2mREGhdtqIacshQcQmb1QDUB2JYEsuHGKLNEGAiGlKnFzBsZMU0VCKoUSS3Er5gpuGx1LhDjs9HU7cYNBvvPNHDpMCTfZtmwhBJJ1%2B4fYtxUSQzJpY9ncFqElWUhhYRyBMzCEjTAWUqVev9%2B3PhyrrvQrKzet%2BqisrKzcLcI32wSZAuvqJlH7ca9HJj86PNUeqVd49nPn%2B0dn5YFFHJ9yZvmSdfaZ3Y210ebHTz3w5NUv9X2%2FrB0igkxe6r0JLzw7C81ycGV6pH2iHd9XhpNwQy%2BSu60Si8Vibald%2BfazxwiyddM0UUU1NXEqjGREGqVKRDREBGGFwURKGU0NlkmXzj61zOF8fnTe%2FfZOfJonf4vZldAY1SH7wfYyj2%2BU7374zB89evLRrl9fdKPCuDTz%2BWy7m%2B%2FP985f3f38ldmfgyfhcqGa4WRDi6xdN2WadNDTgThi3TfyYw9Nvu%2FUQ9%2B7s39qvlfouXt0%2B2ygGCT8xn49xrdFWfnwLr%2FNU9uvfSbf%2FiDdcVy123eF9Yafsg26mW38mic0NyQJcPMZUujmDejwYQpcRYQVier%2Fz959AFmW3fd9%2F%2F7POfe%2B3DlM3tnZvAssFlgsEgGImZANyAwmbdmUVRRdpm2VRWeX7XKQYzmXbLNsOdCqki1REmmRlFkyI0CBAEgibMAuNoeZnZme6ZmOL957zzl%2F09rt6fR6wmIW2Jk5n3rb0%2F36vtv39fROn9%2F7n%2F85ohEQNahRtagCalREEUHHLfmmKKAHfFsBVbbt%2FlD31DTRrYiGwvgsqLxFr9wUUQSiQVRVRJGoKhAiQdSriqhGogbFCGbrBx5FBDFR1IgEiQZVIiAqoE5RlAAiEBUBbxSVABqIXgQkCmpQAFFFBTUSMagiJiqKVZQrWQFBUEAUgKj7fiRkd5I9mArbLVQKILsDniiAKiqCKjtT7laoEGQrwgEYQRXdjjKioMQARBSiojsrglEU0LTUV5LslyoqSZLcdKKAgvz%2FEBUTYBQNhe308%2Bky%2F53BG78LX3HG5PZQrr%2Frg%2BurszB3%2F2Z%2FtNnrRhUQxDbyWm7caLhWp5iS6qgNhddTEzP3nLr7w7XwvuUzHRsdQTRyk4yk9qvF7F9ZeuW0qA%2FzxCCm34hFS%2Fhgk%2F%2F5yMnMd1uh1Kq0qFgrxqrYaFEUY8Q4rBOMN1Kp%2BiBVlEpcz7q1en2p6V4Iw6c2Lj51eb23Ji2cUW2oTqouanwcPtYw72t3mJzxxmS1mnWurPyq31zLqnNz9lfPnH%2B2x5lNbCkhqlMO0cio9wnrVJt5hfEYxHK3l6Mj%2FWnHqWlzZGp6IoQcLyg3h2x34VxppUe4QkVFd3yACmBABVXec4SD6ZgjBVBQBANENCpRRAURRLGojapIFAlmezk04btI9j4dUZS9BFG2JzgpgqBxe16aAIgCImLUmIgRoolRNCpRVYyKAlFVQf6hKBgVsKBvx%2FqgSJSomB3XJ4iogBpBQRABYM9Iftd%2BI6q7V%2F8WrhBumHIARdhtKxzC3gwtupWpdkSq3dH4SmRmZ9BKKxMnyW4pqCRJclONH9KJKBLFRHUhmOCaL0%2B0f2Oi%2F4XN5RcuDmY2pDZgFPUiLSUTY2I025PvISc0KNvEnFENFq3UBO%2F1L8KRdmtyfqJmQk6ZyU1ILD0avzac%2BIXl189YKavZK0FlyvJok%2F%2F%2B8Mm6H7TLkQmVMRhXw2XB2sqYUmMhJmqMIFGdx3lq0bRi7exo%2BMKo%2F%2BSw9yy8LtKFvpEAIVIhRyebH52d%2B9B05%2F4g08PeRFl5m7diGVU95Wrovbjaf7bLU3ABzkAvw4ADqZjDCa5ASrKVKfJyc0Fkyen33Hv3j04vfubcq1Nl4QjcbAJsBxVE91Q6RAEUdgwhkdtgGCYKsD2C336eUQFEjAFMxKJh6%2FXyrVLBe4GMHZDrjp4P2TXw39E6IQBmu3AjgkVEjVEUgsaIRlABEPRKe4sgICIIKohGjVE0okoEERVBBJBdjSUge8pPt8KyWAKAjg05KlsxZs%2F0szTjK0nGSEElSZJ3lSLb74kgiCgoBDGl2hjzkW0831%2F72tL603Damo2o61ErqCwBAYfWMA4gxExDhs8JDt8QOlYCIjkPzi7eP7%2FwiJX7B2tzftCKpdOAKjeua1r%2F27nqt8v1bwSN2SwhuNBr4VvC951s%2FKXakSMaJnyhVeEDIbPe1QbW%2BGiDNysNWW9Zb7mchfMUr3TXX1jtXlhnOJAcGkHq0ICGUFc9qvpnpzhMNlNvxEardFkU25WwYsP5yexJKf9gY%2BXsuWJ1nZysQa7U1kSwtuNRRn0z0JpnGgxYWOUjA3k46Ged%2FeD8Mdca1XRk8Lw7BJAdrynrzvZmoyg7yfZEGL0NBmOKIOMmZKlgRAQVAVBVUUFFVRSU94aDs8rb5KCDFdmutwgIWFFBAFWJSkTjdpONYlQkblVWDQqAikZlx1wpRBEE2KqiKCi6oxvqVoq4AnrNGCOk%2BkmSXIcUVJIk%2Bc6QXe8IoELElCbbrLXONvIX2vzeoL%2B8XhXLq8OuXoysqlJrWdcO%2FSFAjJYrQSUC9YxRhYNTVlqCeL0Hjol86NSpmTDq2KolPpPoiKIqGrkmkcvZzP%2F0%2FNLvW%2F%2FNoGb6ROj16n7Q0NGU4Xvvm%2Fz5xrFaqOpFVfmhlh7sZtNZzSe64r1%2FJqy%2BEXsXN3jdmAsimzBU9SCZKJpFWqqHGnrf7MxdR0880Jg9ce5bE14cJsRYjAbDjc2XR%2FFFw%2B%2BXnIELhpGigqHRiZmSr4gCNQ1QFBQ0InM0La1Sykn9yeb8nylbDw96HUohgvKukSt1MgTdOTST3eu%2FqoIot0k9ZZzttakFUQGR3X0Oiqrccs9bQEHYTVBUARVAUCMICii78th2h4dRETWgKqiEKOxozxAwsGc1BL1Nf1J2EQC5HXJ7kry3paCSJMmNkf3DPCFiQxSi1As%2F0xudL6onPU9HXnTmTViO8byhl6GGIGiEAAq1GoB1BGU0IsRJ5aQVQbyPixnHJ%2BzCdPtwu7OQudkYT62Uzka16ohOo9UIqKoaQERM5RoX%2FOKvvfTMH0lY1vwZo8BkrHJo1HjkoWM%2FOXmXhMGS9Lpa5Ruj7ubwmzJcXyvLDSqRZVu3IKpHc2s09quyodqByRiPWI4dmTq8MNnu1MTEKoy89%2BcaeqYanF3pvr7C6U2GfTKM0rDUcxAARlQjYnQFUPNHBRllPWzXxdHDXt6n%2BqDy45bOXNs2XWaiIQKgyk02PqiooDurK6I7OsZ1R0O43L5jT9lOaQLs6D1Q4BZMKYDsiRyguz%2BhICA7nr6q7JvNpNvJVUUVVVFRAQFBts6AoiCqqcyQJMm2FFSSJHmPUUxUG7GDrLbabrw%2B1X6zbr%2F02kuvlcWZjcr2TMMwUF1FazUK0wYoK3wkBELMI9NgoAUzwryRpkEjg6B1%2BGcgh34ta7fbh2xzxtRaEo3V1QkpY6hKIq3zq8UXe6f%2F0MdL2OesRXU%2BqsVXsNCWj%2FZ1oDwHwAwonAWFOgCv1qc%2BUA0zay%2Bpa1mz0Gqcmpk52m4cnmy18YZRKLub3ZXLKyuXV%2BmP%2BBasQglD2HBEBWqGdhZcDgKCjKgG4qu8IMZadQQwbtPZXtbh4zMTP5U3P1z5qWqYmWBUFf0OpBSQnX%2FK9iydGBEwsGPTDoDbPKjsytxXCKB3zKB7d6rZ84Giu7Kr7N8%2FlNtjWmCSJDdVCipJkryXSRAbsJVaL6409U3jXl%2FfeP7C8mnoGblg6CkXggaojKmsG8YKo5jd7fwKQi0wg%2BRC1REjMIIREwpoP8NavBUf6Vds%2BMgUZJbNYAbMKhE2AFgEgaU6EfIRQNECAYOo%2FdEyXtLWpHUff%2BAuZ1xZxKIMZZQXXn2jR1ij6BJKbIUTCOBtzSsaTSTz2K3rJlLAINDHoA4sWHLlEwMeFx6NtY90FuZaUjSHmVRGoqiy3fL8btu39waIqooIURHUIIDyFr1TgkqSJElyE6WgkiTJrWQgjU2yNVtfa7Sis9169mtL%2FfObm2Htojfx%2BTJWEJzBCRIABCIAAQQCtQhQdAAocSWdCLCWkzcISigggsIUAH1kyBQAXbCW4wGBlycAWj1iZDgBmUjenDD5R85vGGOzWrs7WAsA21fhhSGU6grsEBOghBFvsVBTcrA5eWazfliP9AJ9DOJo15iYRjv8C41HPrhq5rU7T78hpRMVUBRUUUB5t43fsUJABVEFo8DOrVUgzedJkiRJblgKKkmSvBcErEKEYLKoRFAkikSRylgFb%2BzImL6rref1DZsPlRESY8xjiDEOvT%2B8ufINtX80KM9udC%2BWXsWiNQCcgIUcAxhWo2HQqREyhjmBaSKwRoEEI15irIPFbjbqaKA9IjK5SoQugJnEOuorjQi0hgB9ItDCZibbiGuZESt4qzu3Z49WolciKEapW%2BfEGKXybYs1GbEehq5bVRUeDK7iaMVxkXuFB6J%2BiKn3NQ%2FFGRllZxvW5ajRiCqogooKKN8VggCgO3f3NoIioGlKT%2FJdJxxIeQdu54UhkuQ2lHamT5LkegW1AfEi3kkQiaIi5KKZD2Y0Kovq63GqKIrRYDisqKCCIZSwDiMYwgj6UEIFQAYNI0bMibp7qqjO%2BDiEzNUqYzU6VFFrIwa1WCBAiBAC6gBAEEHq9cZo1FW0UavnRSwpKUsMDAAiANZKCAAeDwYwGAAiEAhEajVThFhGiGAht6gSIwhGiWCwmBCCV2%2FAIYEwqoqyKsg8QiMT64iii1M8Mt95onn4vqFZGPRDXMudb%2BCEKxFFI%2FrdLlUoCsh2h7WAKqC6fa8gt9Tyssl7nYCOX235wPWWRdlDRXYfp7DdR7P%2FaLbsf08ZS7kVtn1JkttbqqgkSTJexEUxEUrsyJhNm6%2FU66v12mZunz5%2F7jJhuaouFqOVIlQVtWByRRQBgyoSVYFKjVcU8eCjDBXUZALgAKVSILJN2RbZrUEESihBDRiHBbUAOAIE66ABDoAuA8CCBYiAJwYIFgADAhEXMZEMcowgFVrBiIiDmsFaygqbIzmVtR4bxOByxJpL9UhHWETmhQeivs9yf1Punp0p8N6ICA5xqNHIji0U9T1UppCxC0VtS63SyU38OdMdqXj7XtnX1a8QAVHRsevVbT1cAbYztuw4CAFVENn7lZT9G80LkDZHSZKbLVVUkiS5WYJYryZgNVgg06xfVt3Krw3Wzw78WTgDm9YMBBUuR91QLqNdg7d0bUTA7xvWqu4dHkClABU45btDQLdvqlyhqCBGRIiq4CM%2BAsZ7F1WCc2pyMVYExOYcmuS%2B%2BblHO1N32dqR3mByMJwIfijRGdME0SgaUSBGVHkPUt4m6cXk5KaT%2FftSquz7lG6lircIKiCI6o7PIqCKgKKCogKiu0ouu3b9URUEdiekrZMhKDI2hgvCFhU9%2BH%2BKtMZEklxDqqgkSfLORWzEhGgLTNdlF5u113J5KfaeG6y%2B3vXnClyPNsYKXulH7QaDGgnWIBk2w2Q4CznWYQW5xBJbdEdNRA%2B4JwjbhL2EvRwAEQISycFu3RGhNGDBbddQ6GUEEEURAJSIgFWAqCg1pQ5NjBFzrukddCo6XiahA5PKLCowrUzAAszA%2FKSZnJ6eaLYOrzMysciD2mgkOoKL0aCiKgCqV96%2BR1PKWAYUkFRRSb4NouwmV5%2F6pSiI7IwtEgFA9%2BcBQRXZmytEEQXZEUwEBSLRXCnGaFTZeuiBBFS245QoY6QKTJJcS6qoJElyg4JkXo31tj6ysQwjr6e7l16FF%2BBloWvNqtJ34ps6VLoad8QLRVXRmqs7bwxqMFd6POTWegleFRBDJqZu85bNOtZMHiltzTWybA4zE3Q%2BypzKfJDjE5MTI5%2F5Ki%2B9iVUesURX9EYNjMSmiKASAUX%2FIVR3vHqst9A3RrYjlULaIiN5B0SvsVWL7ihrgLKn6ioKgqAYAR07IVERgb29U7prU%2F0dUWM7pKAIB%2B2gL%2BO%2BEILu%2Fr8hdeUnyXVKFZUkSa6TBLKea63m9dM2f2E0eKW3%2BtrmZrcyXWUgrMc4UgCrZB6rAH0MVxgwghWMEJT988tF7MgCkbdEQAkA4gGEPW9z79hyPX0qmluAEAk4NMdnYHlbBSUUZkdFJWRcIYrZut%2BCKl6ocNFOa1az2UPCR9v5bN6YmZ5cbNU6RvOil1XdRigyCTnRqRpVURUURQHdv3qvKArArTt3SthBUkq55X1HWi90zEJy21TGVOjkoD03FUFVEEB3h2a9ese7AiqyHToUla36jO6IRrKntCNcIVuxZty8yO1TaAoqSXIdUkUlSZKDRazHhspWo2gu%2B78Vz56DLvSdWVXOB9aJ%2FQzaeA8FKCFgFQsWarVajDHE%2Fx8oqkRFAcMtTQRVAAgxjAilH50VOpuxDvnFeBSO5vnxmYnDk7m4zIZowagKKlsZRdjuid%2FObZIGLcl30q5YLChjKOMI6E3ptNC9DSmCgmxnEQHYeZ8oul1Y2e6NV9l6AyK6dSwIbD1CZPt69558X2ZBAUEjAipsnWJ%2FStn6UrLzUhHGucVfiEiSW0qqqCTJbSjg%2BtQumOwPa9lzlN8crb%2B4PrB903Ks%2BDiKABgQIc%2BxdXp9ggVTs02rImVUPDBwm7t%2BJxvE4BRjkYgqJhIjEkABRjIFQASQQAQieFCLByzsTDkjx7br6FeRIgMUEDCK7DgyWiKib%2FfMWAC69SFAoS1lgjgBDSLgkQrXR0fYIXGECxig3WjUK5%2FrIBMflDzGQ53smHPf%2B%2BD99%2Fc2j5WDdiiz6AW93V9FlTQR%2FxYhwPi5UYoIqhhhdwe5jim17OsbEdAxM56uXUSQA5YI1t1famyl5doJQRXhKhRQBNmR3XbMEtvbDbMv3uyuFOv%2BiqKC3FotZ0lya0sVlSS5TSgmqPXqNNZWNsvn%2B70ny8E3YWhlA7oWTFwvAXBgDES8UhRowFoCxFj4kUCOdYjFcoWCQkSFKoIgCmAVESwIN8wJDQHIRIAK9QpQ8a5TVFGDcbgc1GXeGKA%2F7I9AoI4K2hEGfb8i4de%2F8vRJ5YmMD8zNz9fqjkrEWxOEyO1Jd4wgNS1t9K65dqeDsouMnfcksv8RIgAi6M7PKyJycDDVfWdhm1zzkmXfAQIKoigiSgRlZxgRBUBAQBFAED0gsigCjMlju8iVe3V3U8wWQURBxtaTdrfOqAK7jk0RJUluSKqoJMmdTTGl1Dayxqutzler7tcvn%2F9mN1SlscKlGCsFj4s4aGCa1IDy7ZuUaAAE8owY8YiqhRwcAAU2EpVgQfAWHGIJghqiguFtArNG5gVVrEgdMqMZoBhoRoxqpjQhhwwEHBwSABEAH4lQQYQhRCigEj42X%2F%2F9y0VAEC5AJRrBw0DpwVAphZ6yFlUzKk9tYqbYKMEByCZK3dlcbFGNFAK4dlb4CgMC0QBEiwghq1cZ4NEAaiImQkACMB38oqGmtPLW%2FQtHjx4%2B9Ilq897%2Bm%2B3onQaJt2tiSd5tAoCKiKIgqiq7E4PI3jlaslUoUJADo4OC7A8Q%2B485KIaqKje2Gq%2BAgIoKu6mojktesqdOo7LzOW09RQMKAvHACs%2Fe%2B2Rn2laQnW9lfMIRAMZXeBRNszqT5MalikqS3KGi2EKNpaPrvLi2%2FEy8%2FBKsWLOsuhHp5hFA2KNBo6Iq8QDgxEWLolQVgBqLrVlXV5OpiEgRR4Io20TipIk5ZGJEEYhEn%2F8Jlxt7%2F3Q7ty7PXatWb9bytqvVnDSwVMN25V30NcVpNDFajTbGfFQYwIggUQSRKKKoyXJVqcQE5MHumxOLD3pEVb8hGz0YlsPNolorB5QxejxUfWYatMWdDr4YDMBhLap5vVEOhpWvjGi9lpVlFZRiUNGyEIhsE8GYHfUWUCVGREGNc%2F2qOhdpQXPYy958afXsK8%2BH7CePyaypT9brsy42Y%2BViIElunCAKIKoI6O4hvI4pIOiVvoq9EQZAxxUHkAMqNLpjg5Fd9jWVCyh7390e8Ov%2BtBBBrtL%2BrnsygrDj%2BO3zbt22Qho6ZuLa7mvV7bgC%2B1IKiIhuf0IYQwVUNfWjJMk7lioqSXLHkcJmF%2FP8pWb%2Basf8r8srsjnUDb3UiyGQKQ4cRAACJmA9JuAUCUA2AggxN1lLyLyKlgoGBIqtVbMqAw5gYsSCkbowAzURF2JT6cBjc%2B3JYKesnbeNdp51bGZcFEIVlw3GiBhEBAOydbMaeKe8cVFQUAVFQSMKqHhkZLPlyl9utl8Y9b96du25Kp6HogmBViEBBYAIQQgOmuBBwIABDyVUALQAUPCgEECxagBVjSjClWdVF%2B6J0oJji7OfmD%2F%2Bvqx5bHNpwq%2FXKCVNlEqui%2BwYpKM6ZlEpBTmwg0MAdveE7AsqBlTYbffWh0Ykjg0wGkVEdVc3ie5fzmt8WWK7Ex5EBUXHtN5vM6CMzzSqIFwvVUQEEVT3Z659BHQruKiwTXdmstSjlSTvSKqoJMmdQsUWprbu8te0fPrSxdcuct6ZpXqsAkREqRlMQCFysFaLqmI4qnw1JAbIwWwHGyKoMm2l42QA9U5sGe1MmiPt6cOdiYeoHfV%2B2ofGoN%2FUWCM6BgY1RKMBQAT0pv9ad9Gzh2y%2FndSy02hP1rKl2mR4c63cMey5klJO1q23XK6CGNMOiKGPrqAoAA6rBggS0e10JWARq66sSsBai7PRiqIQRqprNo6GlEsrXFx5xuvHsB%2BbPnlkMgazYaW6fTtYkptGdlYBtofKun3f2J%2F6MR3gsm8%2FVWTrjGMqLdsNIcRxzeJbWQXZ%2BiCqGjmgFIRRAN1d3VD2NqPrmGlaez7adbAoKiqIsuOZKFclAKDI7mgnbFN2zJ4DYXxKucW2ak2S21CqqCTJe5qKGZj8cmv2Gak%2FdeH8cxcvF2JeC7FUCkOsOe81VmHni6yKBgwCYjBwpbQBnVEFlBAEn4PBgIVZw8JQZg0dZTLow5bji5376p1TpltEo0YEDGpQo4F3WTRWEUQUUQAUiSIRg4iAImxtaRKRKCYYu5K3vzasfvP10y%2F7eBmCsGEIFiILns8uHv%2Be4%2Fff7TP%2Fxpvn189vsjky8YIx59DLkXMae8oAVjMAFBv%2F4Q0cCFQ7azKCAhagWQEoCBjhVE1Kq5OBj5y6%2B9NW3uf7U9XQapoPllyrnAIoKoqACuwbN4Owh%2BzpDAEQRRVREJQtsr%2FJHVUEMAd07CugqoIoV96iYw7bLoZE3X5KoiLbbSCqwvgelfEbrWynlP0z0AQQDqIKIAgC46%2F2wAgo2ydJK90lyU2SKipJcpuSSuyG5Cvky9584cmXNoSeMRuBLhFQ8JFi6AHD2wyItSISfOAABqwBg1emVToGEUxb5%2Bb0wZm5ByZmT3lzaKPXHI3aOvQquXiUmyWKVUSRiHgEa6MQVINGHzUGDplyqTSDqtBoK41%2FoowaYwwaUTsYlFbJFKfUQAQ1Jojr17Nuy68UIw8OgKjECA7AgIk%2BhNBoTEyfOLGwsCBWhlV5RgevFL3Tg9V%2FOh99axT%2BYFB%2B1YYY0cBbFAIAVoiKgip6QP9uUF4baR2mrLz04hurQc%2B1ax%2BamT3ufJ3Sik%2BDnuTAlCJX7lAEQHZXMwSusvzWrq0MhSvd%2BQB64LYr22nm4JMriMiV9n1VRHbkiLdoRAQwAttPQFUB3RcVdGcsiVsnFFEQ2P32bbqryiQHL%2Fm1fXn784luHy%2Fstfs8IqmMkiQ3RaqoJMntyJt8xTS%2FavnK%2BvIfr1SXxKy248hDBWooLb5WxwHQByJGjakkoBEbATSiEHGKgxxk6%2B1hIxPCvMh8iA%2B7%2BmOLhx5sTbXw%2FbJbhYEab0104t95DhETMBHxYrwYb2xp7abJ1ky2LObNyOWy7JZ%2BVJUFcr4aBC%2BjqvwTQ181vPz5qfyvb1YCUVVFChUVvAIUarRRNyjqo5aoGgXBRAJ4o33QEkyNAKZGjGJ6NuBgTjjsrI3QCgudvCjLTr0%2BMzk135qZNfWfXn4R%2BG2d%2FdLFtZcHrGu5RlgnbCKlGCxYQRWNRCTEGjTBIIOsWVq8REJFFgFMxECgU8hdCqqPHWq8b%2B7QE766r%2BjWNaS4cseTvX%2FoznYPQfUGN2MUUESIys4%2B%2BygqyMHtHwqCGfeFZMcBu1LDdl1F98Qsxu7GuJ1lAEGvUlHZvzEkKHuJcN3kwO%2FVvusXUXbTlFSS5GZIFZUkuX2omKCOQb50ef0Pq7WnrXlVdSOyPhlHI7Y5Z6Mz0USixQKB6KNHFCM4h7WMhuwwbaRtxEdas%2FZ4u3NybvH%2BxsSJKhza3GwVg3655KXKTJEbrpOKjYgiQSUqMSCKVTlDvRfCYNBf7Q9WqrgKG9CDdRjAEDDUjRihVAbKhagj3e6Q6aP%2F9WqhECCAomACCBIBJJYVAAFRjHJFBMXl1hM6ExPd9S4hABp5S6mcr4KDVg%2F6vi6m0PLy0vJrLOfIuYYzShkv%2BObhyZpIOfJVUcay0FiKIhGN7LB1hVpURfDgBGexgio2YsBTZno5MFly8WJx6fzrrzf58NzsD0q0xmSiNrWv3HEEEHZTEEUAdO%2BkrO0ShIAeFFf21EdURZDds5%2Bumnnivnyya%2BKZjps3BlxlNxdVla1zqAAIijKOst1uv2df%2B28vpSgI4%2Bi4ooqiaV2vJHmPShWVJHkvkE1bf2G2859vFJdWRm51%2FYyPXq0xbR9NSQABxQSkwHqEt3SKOUVHVIGgrsKUgATmHDMlx43MItMhfgDeN2GPzk8Gt0lsWDUOceC0us46ScAUxoyMHbh8s1Y%2FLfZV45aGwwujamU0WinLtWEvG9GKDQciMSilRoWBhqH6SgF0Z7evAIQmbwsA6I5bBMUqIjhQg424DGAoqKKAoRGZqZhUMvjGQhMzIRfKRtYYZOcQCFO0WvWVczNgIYPNOpuWMkAEn21vV9kqAVan2GIIghgCECkBQQGDBwBByKZV1ccqxohUWMGABGLYNSyMLFgplQ%2BE%2BqcmTnz4aOO%2BcHnKd7NUYLnNCfuI7NnCJCoIjNk%2BHUFFRBnXIHLAela6N1%2FovsvYn140IGZ3r77u2%2FhTUQA9cBXjA2dliaoiiLKnnKERMQd8p8YGle0TX4OKMvYwOXCXSkkVlSS56VJFJUlucYodSHa%2B8E%2B%2BefnLXA6TcrmnRSCAojFG3b%2BPm4IBA0pGVlDwFhHJbObDcSeDSh0cOaSPz8w9ovli4dsxZhJM7LhYQuQAAReQAKomolLLCtXhaLTcWz%2B3ybmSi7AKFwBjRkIPVmNcUyoA%2BlhFga2WXo2MIYIYgBCZNuIgM4JghB%2FK7QQyb6UuUhNqQg4Gfn5jpJFaHXbMjlGhqeQj8hELzlCWxAG4EAIZ5DAEEaBmUMXAcESZgeVtqkRFIADUXE31rZaYoKiiEAHZvmQMqlu3sioAiLuGUTEg7LEcFWXE6HTvpaXn9IOm88ShuUONytF3UqXdrm87goAeXApQUQH0yqGy52G7OuJFlF2jfNU9m6ejwvYJd9U5GM%2Fs6PowIPt2bRFQQQ4KWrork%2BwtZOyMXSr7m1Vgx5LAgoBeuySiIIiw375rOegwHRtWUkUlSd6zUkUlSb47VMzFvPZrtdqT53svrwyHqudDHrABAoVKQQYOhLcJzuVmmIciz2haWhnZ%2BsyzGKiY2eABY44b7vHxMexH774HHVpTWvGGYKg4QCW1gCnFjZzr1Wrnmo1nm9np%2FubS5uXLRfHiGyONxMisMZkQYKC6EdVA5G0CucuczY0xl10X2VEPCeSRhscok8KUyKShIeTQ9yrKn4McHDSFej1r1Rt3zQTG6WrLKHl0EYLYKBrEIBEzAhNCpt2Zf6k4f3azzIl16q%2BzUkFBlkl2XAefmZyo9TdjpKuMhMsiuaGmomgZGan2lA34Rm3XS9TbN4UAkS0GIuqmQxMIqop6vEcrInurRwACgLExRpqGQ4jW9dEZPjg%2F%2B2mf3TUctaJPu6%2FcLoQtIgcXVHbMcxq3OO%2FO%2B2Ts0lZKkK0jkN0hSbeigu78aVb2E0H3bVcyfgcRZQflIHK1o%2FZVjYR9Dm7zH9u%2BI%2Bwne8ISIOOyiY7rGUoVlSS5SVJQSZJbUBTTFX2mN%2FyDpfCSYUPk5aAleUWtQhSjpoq2CMYjYAFwUECAKutkiw2dKLx4fH%2FmxUURN5JmFj86M%2FHE5OIHynikHDZj4SQYrRgnSC2oqaIUpRTRDMQ9c%2F7sWXgVzsAGZM4EZWhY9nGkCFs3AQNKFQGcGGutqpbBA0DRAUCpR6YQF0QiG1U8OU9H3GQtn693piea0432YbhrMLx7c7OmISMYoqCCgnLjgqkNw90%2F9eYLMVYh5Dn5G6x6GOKAT7r4px959F56i%2BWwEu06s5l3ejEfDuv9fr%2FXW%2B8PNlZDd9XyBcO0iIFCWY86jOxiMXldRTQI5YhgWt5dqRpFYgCM%2FRNlVYwNKkh0jnYLHSEjHrIyp9wb9ZOH5f6sOZ3ZjJgmg93yRIBrdXYocGBEQUAV2dOuoYAoKAoY8Ijs62ERQUBhfEQ5eOivHHjNAhHddR49YOmtcU9nfA4Zmzhk64gDEpvouKlm%2B65l640e3LC%2F89Rp6leSvFeloJIk3zmV5K9o8%2FNa%2B8rFCyuE08PykrVYwdYQR4ydQSEiYIKGQAAg5liIOSrEABYstA2HrPmzVTwGx4936o2WxKqN5njRsP%2FrBjEjMct24rK4894%2FOyje6K2f7fcuVQyFtjG5MMD0ya0XhzVUir3U6KCKRkJJDEQPlcXXBRQLFlrChJGOAeF4pU5pwwIstjjcnpxr1KbEtm3MNFqNBqxEQ5CbPSJ%2FpZr89Nnzx42c887hBtNDLLLCXcoDwr%2F0gUce6y3lWrBNFAEJYiKmMERMXiLDsDIcnO0VZyJn4KIwclLAUuRc1ItQZvDWzSIDNELY3RoQHaoWKxiLFbA4A0BX1qmBgxwcKFQcHsqRwL1N%2FeTiwqfFLISBJW29cusSABARUJAxEWT7HWXb2FG67KtBKNsHRQEQZNeZBOFqMWlsnUEU3b5%2FOxG8RVAdX1QZv%2BG9gbgrB40z%2FumjAoBuT2bb9Z0UDrQ3mAkgqCBjt%2FnfRVJQSZKbL%2FWoJMmtQSrNet49vz78o81zL1vZUF6NWuSWLCdUhIAqzlVUKGDYYjAWW1JV0HS2GcK0lW7UEycXTxxZ%2FMHlZYm%2BTsziyGrFFo%2FzYitjhyIb3i%2Bvri2t6iZ8lUubEMA5MwLURIkjRRvWV1qWMWpZQxRXRxwZZQmAohFjxGZNZMramq%2B8EpVCo7HUpmRibm56ovVTZZyuQkt9K8amxjx6pyOrAQVAePfktVqeUwWbSRY1AgREsKBKoyoyrdhFBQWcBiAPAGqNtmWx05hebN9nXDerrTWblyYnv37%2BjKuqqrdedH0WBGEz0kW1AsBijKiqeoiKKgdodjqDqotChAgZGFYKpWC2L197ednBo4enDtfzhqksnuTWJALozjQiiO6acaQ6Zh6ScoUKKOjecLG9H4jK3oOF6zA2paC6q1YhV5nBtTd%2Fbdt%2BbNyxxNb%2Bx%2B5eVnnPImMIKCC7MprI1ueuZjvbsD2rjp0pZTxJaxMnyXtVqqgkybtIkaHNzk9NfMFXv%2FbS%2BbMjs2LtSBZxHXp9COBNXkktBL%2FB9kDGoJZoiGJinFM%2FQbzHmgXhIR8%2FPcHD81NDMQY1GgUPAIqtoi3EbeaNl4vwTNV%2Fen39hT7noGow2zRiKWLWjbHykTIQILCzsGGctbVcrfPR40tUJ4vYBifMG9MCYsyUCXgUTtQ5NdM%2B3plwolJVosFKNKJGA99xKvaFjfxPX7rcETfSDNiYGTICZXLEh5V%2F99GT7%2Btf4sapGEU8NmLRehbqshFW1tYus74J%2F5UzoJuRXlQPFZRQwQgqCALGIBZxiAEIJYFa3sjIvfdVrAIRsHUTfL8deNTKFPrE3Oz75%2BY%2FMrxYp%2BT2JKDj7rn5xjQ1vHsEFBEZX0HZ8Yfun9%2BEoLr7cWMeAXrNlvNrVVRAQPcHEd1%2FtfsO2fVlle8IAWUMvUq5SPZ8X0UAEZQtevCqX6oKkiZhJslNkIJKkrxnBfKRkW%2Bur%2F6DS7xqzTMhnqszkjrlJNIEMSFGLWETW5BVGDAQDAqSIRmBRV9ME45PH%2FrwVOfDC1MPdJc7o25NK6MeACJZUBuiqyqzvLr5wrD%2FIpyHwppVWFZ9s6arGQACAYAIARQCYJyYPxH%2BRAwIiMEw7aRpbGfkY4ytFkcmWkenp%2B6amDqe25Obg4l%2Btx1CpsGhVqIh8F0VxL2wmv3ja5exDe8BNg55NiuEiQEfV%2F6tD5x8X%2B8SN4GJ2KA2xtxWrb%2F%2B4fnVje65C0tvnl%2BJA%2BkpF6IO9eCgIpEqErE4AAhEAKnI%2FYQyWXLKyGGR4yF%2Banrygx3nbGXNbTYTbN%2BMIJU9U6Fk78HjywE33bi%2BkRsiImMTgQoGIghvU931HbiuwKZ7Gy2UA8j1fY8ExuUfObiz5GrXdm2KggjfEYJsT2Pb07Uz%2FgmLoqIpnyTJTZOCSpK8JwVxq7G%2BrrM%2Ff%2FbSKB%2B9MuqOLNR5m0eGtJUaOFxl6iNr%2ByYQgpXhREUGp4zMGzni42PTPDLZWGxM1EKsqbfq0QjG4%2FpkT01MfCUzT69ePnt5dbVPXU0ULoVYRYAaWQ3nkAzjMAD4IcWQUIJ3IOCwjglo95gTOSwyCUdDXBTuMa3vW6wBQ6teUKNGcBKtBN5jKsmfezX%2BK3ZzyddnmCooNhh0GamlXuMHBvx7H37w1Nqb3GwqxmNLdYXk3WhP97uvrq2fqThjpCtciCxF7Rt8BhYADz5z0TRwbXJLHsk8ukFVEHAlUkBJYELERf3c0dbHJ6Y%2BHfyMH5rbsnFFZWcrhrJNGE85mHCtE%2BiYXTmux%2FjBrV41puxpHxHZPfWLK5QbtH0aPfBa9y9oNXY%2F%2BYOuQ8Ztmx85gF67FnLjR8jBX0b3PqdxdvTvCLJrd0kBVcZuNJOCSpLcZKlHJUneQ4K4oW1t%2BNqTr73%2BkrlUIa%2F2YwFYcGAgQqRWoxmyvGKEH8XRKFqcodkM3eGclSrq1IR538LsD%2BfZ0apsRe%2BqoWhQsV6ykbi1Kr50%2FvL5kv%2FTLnsVK9JXRpFNone4DOsBMcEIYjAWaxBgwKgiAs4ykUsjkiu9isrp7CwPzU4%2FMjl%2FV14%2FsTFolv3JqhxIZYkOde%2FtX95RJWgwMqZPt6HiUGLgXSAaM2JG1dLRhLFTk%2FnR2aNv1pqXpidf6fWevXBueKk75UUMq4bNmlLljCxlBBT1%2BAABHK406I5Z%2Bd2obeXChcEfnO0PptwPHDo6V%2FUzhtzuBJSDKciNFG120fGN13K1QbLqnuPHX6yIcCDZ3USi3%2BYUNN1u37jqpiAyvhJzwJbseq0AogdkJZBxRShFZN93UtgrbodUkX398LJ9zA7XTiljPq2yK%2BioIJF9UkpJkpssVVSS5L2j79p%2FWJ%2F%2Bfy%2B8%2BdSlwTpy2kSkDRCVAHhLgAjRGKKSKQ2YhBbUjFk0POLjB%2BChe7LpbLYZKxtLNIIJknXJn%2FXml7vdb1S9F6JO10xDWVo1AEiWZWJNCMFXHsCAgAAgBsDIjDWPFaMc1kKchCPwoOHBhcW7Ws26ljVKK8ERrUSjt9giuau2%2FnfPDf6qHb1RtfATVBWTm2hBj4%2BJfDiYv%2FjAsVl%2Fme8IFRMwpdiRqQ1sc6U3eO380huedSOXDWffKrPA2oT11uEDagmOAD4SgQiQgUSkQnigMov1%2BEN3n%2FpcCIvFhpWKW56AsuVKRFOBrf8OOl4POokA166oHPi6%2Bw1EIQF9BwcIAujelg%2FZPSNKr%2F86DgpTwrdHARDZe1cE4SDvsBp27V1RxpdTrv0NF0RF2VlREUG3A4nsvtpb65%2B8JLljpKCSJN8%2B8SZfi%2FWvrwy%2BvL7%2BhpVvBu1Bv4FnihjxYU9QAayjYWhUHLPig5463nhkZvEfdb3ZHs0Ys1CoZBEpgxn09CuXVl%2BB56FnZVl4yelwBmzNvBkV1T1bvotgQCNoBjPWGFhSEPnebHR3vf3A%2FNwHnT0SRm1f5rGyGs0tvn3Hsmv87Zcv%2F0JLVkKbokUIdNYxFV0%2BIfJJ1%2F7ZuyamwzrfcRFbYnpqVzVbNvXPL2%2B84ovLxbAr8oJEcqg3cHW6JQF8RAVRABMgYINtMd3lviitqJ90fN%2FxoyelrDMSIrcNBRFRVQQUQfTgV8a5Kjmoq1wZT8b1c7x7ZaE9aeTbO6WC6Pj4dWMnusFNVhTkHZ5Zx3%2BFsSllT6XlBmtuisjW4WLQuHt9AlXhCkkzvpLkvSoFlST5tkRx57K5r1WNJ5cvvzxYftrHzUzKqRZa4j3d2Ag4cJBRczhBckQYTRrfMTLp42OLvH%2Bx%2FYDPJ4PkGkXVi9mw2dOu9ttD%2F%2BSF9Rd7o1nbiOiFoBmmSVmjygFYhQJRS7SqAoBC5K4oxy2TStvrI%2FAR8lNzhydbxsuGmGgkmNtpmAvLWeOvvXD5r7SptJH164p6t46hVvJBa%2F6xzsw%2FPm8nY4%2Fvqqi2lPollWe7a1%2Fvls8WbFjznEaUPAelFjDBRpWAVBCgykylBQ2HEwbVCUyzqT98%2BOSPirlvtFq7bdcEAxAdN6np6iNvuUYwGE8Fo4KMLd0IYy7jGnOuGLt1ysH02p0w258an1QUYSfhptIDn%2BaebIDcWFC5MYqAXneuEEDgSkVFd307kyS5JaQelSR5x2Rk62%2F03TfPrny13FgVzgcFqkrp9ahbnINSIUKEiioSgQVHILRrnfffe%2Fh76tw96M6URStGRfsxbvrque7gGys8CeJMULW4C1GCRoFIDARBLKoAiIiiAJYZK9OWodJuy0I%2B8djk3CdwR0f9iapnWRVixu1JkSFUe2aZCwIKzWbTMuS7zUio0z8uMjfZvudwc2G%2B9o3u6ubyWmNFzg%2FoBlUwBACM4AwCoFB6SqhzwcdDG%2FKtzTcatXyz1Xm002rJ8LYqreygKHu3Dx9L974rN9jUInpQaLhqPtFrXMc25SB6Q301yhi6P1ptJxjhnVCQq1%2BkKiLo3jliwhhjIw2I7A44B%2B%2FGKIiiu4%2FUMTvij53%2FpgCiALJ3%2FliqoSTJLSBVVJLknShs%2Fkqt9vmq%2BPLS2tmeeYEIBmOJNQKWWo5GYmEjgAzA54H3iZwSmQvxpx9anBpoO6Nmgg2jvm2te3kq2P92cHx5bSWPKyLlUvBZU6pYVF4xvM0aNMM7ggAz2jtpzJShpXRCfD882p68r91pND1SWIIl3gm%2Fjt9o1v7n51Z%2FsQXY6a4DIoWDnnDImn%2Fxgbt%2B0m%2B0fcF7iAQ10RspYlnlv7F6%2BYyRl4WvB70EAwc1sK18k7qt53m%2BOdwMxIAXo4o%2FbGVhUt93uPUTtJ7oFzW53beGVAABvfEuelVErtWRLyLvfGaXKMruNm3Y%2B8q%2FcBMywzgCkXEVBuHqxkei8V9dxxwpCnIlEQkoN0QOvOvA8LJ9n%2Bysjyhcd39SKqckyS0mBZUkuWGly1%2F1wy%2BcG73k5Wtel2DTgHVkOSGnDKitAVC0cqpqgu6cCatWn5jOv%2BfQwg8FmeuPWhoNBJX1Ur%2BxtP5SFV6Al9zsSjRrMUYKTxGosODAggdAQS221RY7aTQO1%2B9r1%2B85fOSRzuwHy80jxWYrjGoEuS2Xsr2qX9%2Fw%2F2xR7A8qi9b8%2FCP3%2FMTwcjOUvPcoplQ3bE2%2BkLf%2Fwcbal1dXNoblUtBVq5j6ZNEe%2BiHgcNHoKA4h1JoxjJiIPGjlLvRzR%2BwTeWdCo8gd8JeuYzPDtUe8Y6liBAVBEPi2soTq9gQj9s2FEkG%2FvZV7BfSADKM3mnCEq1J0fEVlT%2FwbnyeunbiEna5v3pjuOI%2FZqujEg7KKsJemcJIkt6YUVJLkBiima91fbzV%2F8eJ6v1db1Vl6uVM%2FxWXYvNysaBp8pKrRn1igtmDO3WWk6eMT8H1Hp%2BfbeY43GkvMmpo%2FjPq3V3t%2FvDYaufaRWut0beKB1U3wPeIGo55UZB4HGXjanqmCo0aOW%2BYDx6M%2B3Kp9dDEbYjIjjmhVb%2BmG%2BHcsiPufHzjyd3%2FzxdM%2BStZYrzzGIEosjXDCmF8%2Bcc9hu5zF93TZIYgdit0Qu1yNXrzYO1%2FK2cj%2F2VQiDKlrrUkGtQo3BC%2BezKP9Yxpyr0%2FMZz947Pg%2F2l1zejt3reyl19pTY1wh5eB1o2R3V7coCshVWsx1357u40fzBlTGD82vPUXqWiFE31l9RthpTOTQsUutHZxYrnHZwm4G4vVFJx13%2FbL7k6rsIimZJMntIvWoJMn18lobrmw8sxmekfU1tNeqEyPGuOAsNgAVDCM5GNMQXbAD4%2FXYQv3PLB59oOrVfWlCEZCRytdOr33dx6%2FB0MoxJ883Gqddh6oqKMCXaCTyFguGjsohZabOkZY%2BOjP74XrnUKjmqqHEqk24I%2BPJLqMYM1FAVdk9dAmoiLz3By1WQ1tDDdtweTw8ma9uZH2OiVmROHLOVc5gFDEYh%2FF4QiCzl9TPey6t%2Br%2B%2F%2BlrZMD82vWCzodz2M8F2byd%2B4JyeMbUNBcM4UTG6swNFka3uiD0hRwG9rqV3BRBUkV2t%2Bdfet0TGbn4y9g657orK9j2iB55V9n2oyngKIogeGDdEiIphXMtLBOH67F7Ga%2B%2BZVJQr0kLDSXLbSRWVJLkesmJrv%2Bv0F3p1u3zx%2FCg0IAOFAfRh4By1Wu7UDAZ3ex6w5j4fP5Dbx%2B6%2FL6u6TQqroWvzZ7L6X7%2B0%2FOTSsBCmrDkX4lBQ6zQaogBMFBjw1EdMVMwL91gzGXkgxoenpu9bnGvoMA%2BDmlSit2cL9TtQkf%2BXd0198YtvvFKpukbXe4xBA%2BpzYQ5%2B894H5nXJ6C0zMyqKGRh3mWztjD89Wv19J98M%2BkwOcyCOIYwc%2FTCPNrGBIsBQWGiauePxM4uH%2Fvz50IgD7kzKgeTan5CxVYTxrd4CCooKctWooILIlRRthOuligDCddF30BsiGCUevIjWuFB2%2FR0pAgjfHh1TrZIURpLkzmFIkuSqSpO%2Fmbf%2F%2BMLKUy%2BuXTq79MooCNShBgYAAep1iqLsDY6oTNa4e27iH7v%2F8MdPLXb8et3opml8YSD%2F4fMX%2F%2BtnTl9eHs1YqZQzPpZCjKj3xIi1WaNBHQDPrJo5Y07M1B574O7PPf7Yjzx44ok5WfAXJsJanSKllJ0UBoOBAKCqexqkg0HMLdY9azS2Q3ksju45Xv%2FQsYcfmlucyJg3Qh9GnkaDZhMACooMZyAoq4PYf01%2B5RsX%2Fu8Ll9bKVtDbdY23q5Lt29ge8KsPeXX7oF2lD0UA3bqBgqoqbKcU1bEd24IAcfwsJQWUsVT3HqCg7Hl%2Fmx6cxhR0zDME0f2N%2BHrtjvdrr2MmBzxarzdqKfrWbdzD7tA5rklyZ0oVlSS5mp5rP2k6%2F8%2F5V58s%2BWapIWRQM7hIhIBTaY3URIY86GUy6OM5nzvUeDifqFNG3Mt59ivlhRdfiafBGfOGq3c1wzuyGiHgh45hw1S5Uik5HDVyzHC4pR%2Bcnri%2FPnU0hIk4zPB3YHP89RtR%2F9cm%2FIvf3HzVq0o%2BUMUYYmVNrEdOGv7ve%2B%2BdDkvcmqK4guw1X%2F3exsaTXXk%2BclrUNyBAgFjD5EiTKIRA%2FVID5ry5dzr%2BzPSpT%2FtBU3t37qhOx3TVHzwpSkFUke1jBJRtOn6TwgOMOXiLHDi%2B305H%2B1oyBPR610q%2BrmsaX5pQReT6GlQU5Dom5nGtXWJ2UzRVTJIkSRWVJLkWMX3TWbrsn33xlbNdXhuqtWCMWBeJbNFhnC7laN1Mn9I%2F87HGz927%2BGi9meEHw2zjteHffO78q6%2FGaKRULoToAWsRIYS3TqVoFbFwIpPZOh%2F98PQHH5%2F%2F6EPHPtpoPOA35%2BJGTpFSytUpMhgMPABR456KSp4bcyv%2FO2fUN3R4n5PP3H3sw5%2B6%2B8gJPWINFQTIDUCMVBWqGIMyzLkQ49pl%2BZ0XXnv5tc1q2LlDSyv7B8Zy9aVrBRBR0K17Iih65Z59PSqqsPeVf2XbQSlCFRTVrTgU95SAdM%2BJrt3Tgtzwdo3bhJ0XL9sXfXDdBrjhlCKooAJXbimlJEmSKipJ8k5E457LJ3%2B5pn909tw3ehHoDFullkW9woLLMIZS5%2Fr6%2FdafCvrT853aRN60RPSSy34rs3%2Fw8ubTw14%2BIa%2BqSo9OJMMq%2BSoZDloBKaj8kaE8buQjPv4srcmj8yt23dXEqSdN7rpuPW39DJfPn9Y3g3qsx2AMsaobajF%2BNOd%2Fu%2Fueur%2FALU%2FK4Hobo1da%2BS8v9b6p%2BrRRb8EaYhPfQhxmQNFtIZkJ%2FVpcsEZm%2BXPH7vlnLqxPS3ELdem8xwjoruWqFGTr%2Ft3bLLJrXxEZX9hB2U3Y%2BRDd%2BxDkqtUbfUdLEpvdOUp0TMgSUG7M%2BEAo449TTRElSZJUUUmSGxJN3q8mvvbamZefOfvMSsSAUGoJECCCKnA4RoNZnDzyUw890OrUWpZK5Ouj%2Fn%2F3rYt%2F%2B%2BnzRdmvlFdVAZHtrluLxTngiDXTU80TDy1%2Bz2MPfvbBE5ys9euX61nlYplSyg1RjPexBEDZ26NiDHqb7N2uua2mZut3ddqf%2FMjJuUUOGwNQr%2BMcMVKVlCUgSBljBeckZhf0b37p5S9dGl7czCpqaa%2B7d0THbXsuW%2B8LW2RXA7kZcxK9Ss%2F63gP2lTaEAwn76fWkFEAU9CoVG2W%2FG71fQRG2qKDodsBKKSVJklRRSZLr0Xe13zt57K%2F%2B%2FjPLlZxW1UZmzEQcgM0xplFdaIdQh48582A9%2FsBM455622kcaf35fvuvLVVf5Gwj19cypeHJ6CxNAN2sREYYEDpDPmrNvSF%2BCp6YnKnNWSel03An7B%2F%2FLtkwkz984XxRycWRBhzWGWMIpYt%2BVvgnFyb%2FUqPZspvcRiryrtZf7I3%2Bwcr6V6K%2Brlx0EKjptKKjSUWEKlBWeVV2rHaMDOfjT84f%2FwtlPFL2DHfG%2BsU3n1yzT%2BPgRKEaEbnGqXdVVIQtsn3iMQ0lyh5ynVcvHBRRlBumIOPrKHLwHvdpQeEkSVJFJUmu1yhrfCWM%2FsFvf7MoZd1onkNRxcEAQIQYqxAOOTNZ48Sp%2FHPHp%2B%2FPay5Ww2h%2F%2F5Xl3196o7AXnMgbrkazSYARgaAoWYYxwIm6OXbEHj3U%2FqFH7v7ovQsT86HBIFOfUsq3Q9WGwFD1yse69X5dxFqrcntUVLZllFOmf%2Fd0%2FZEH77l%2FvnPMiSqAwQCoYi2AaiT20QsuujX5o6ff%2FKXnz11ctYU2NW2i9U4oALp9Ew6kuqdeInK1JKCAAIrsn%2BolV9nQfe99wnWQA3tqFPRmdAQhY79rWxQ0RZQkSdKGj0lyvS60p37J%2BV%2B9MPpWTRGA%2BQE5Rigselp6dY0%2F6cxnfXysbhtlrW69inxL3X94YfmZhvQqW8UWWDMQO5DgDPhBy1Bs3jPkMWMeCXxm5B6SqcF0yEaXuU3mI333ebHDyCAQMCCgigoYmBQWVOztuBqB0XDIb%2F5IHD0%2B3f7qqPsDffkK%2BvtmxdnayU1TMFzBlLWmbzZ8VcnQ9yheAevM50erH%2FELP1Y79FC8lFGQ3Bgdv5%2F7fiK8TVCV65urJYKCyLW3n7%2BBfR4PPE51zzMYv9f%2F%2Fnuufe7ruWBN5ZQkSVJQSZJrE9nImn%2B0tvLy%2BeJbVskA8AB16p4qEI4aGc4deqh17oPMTsZK8CAD7%2F7%2B%2BVUbZS1XjCFu7wCACNZRDI9kbsY0H5ia%2Bf6JxglZrXSQpRaUmyp49Z4QeJvqlaJKjjQaDWHIbSqL5SLxo8cO1wb9pdXNVypZKmNBBVYQEVGNAGCxTSdL3s%2BpvHzu8hfDqs7PnGybtpRWbsMg9x0zblrTwXOxlKvTG9p%2BXrY3gFeiiBkfEsaHDtWDzi1sk327%2B8t1ddKPC3ICmmJJkiSpRyVJboTIcxMzf7lcOX1%2B8PpImwNpITUANlx0OdmAx5z5lI%2Fff2xxodWd9AIAldZ%2B443G3zLnv%2Bx1OJ0xqjpDpmAKDJyBOSs%2FGvWDhgdP3T1ti7ofWK1IbrYzYeYzb765oqga1CIgIlo1VT%2FmzM%2Fce%2BJ7q42ckttaMJmW5nfXwxf7m98Iel6phL4SMLV8erMqEZmIPqfM8EDWMitZ%2FAszk582tfdbnfYjSSW%2Bd40qIjeWeoQ95Gq5Rnc1%2Bt9YpUW5JkVAAeFqVNiWdpJPkuQtqaKSJO%2BYitns1X999cygL69niqAoSEYWCKWPpedDHXPvXPsj%2BeFD%2FlK7EoS3jGKzF7sDcA4GFYIBoISGkQfbnTg7%2Fz117ouDad1wVZpj866IYstRaImsqLKDqgJBqdfrVOvc7mysNLOPLnaWdXb94uv9PueDAg43KAdg0RgIgICBN8u46OXlNzZt1IsnZz%2BVN%2BdikaUg%2Fe4QueF2fb3alinKmESiYx4sXI1yPXTfoSpcj9QonyQJpIpKkrxTKubXFuZ%2B6ZXL9dXestdA6wJ2yWYAExmjyx8s4yMx%2FpnZ%2FPGFibwqazGww9dq9m8sb%2F76ZTYbYOYRoZLjRfG423zIxz%2Fd4vDxLA%2F1uiJprte7JmCfW6v9XP%2Fya15VcwBVAK1a8Alr%2FuUPPfzYytlM7pQh%2BMjVTpP%2FyosXnrfmxTwu5RSbDq0BIABZAQGj5NLsxgesaWXxsUn7vc3JD4p25DYvPd3OVBHZm1w0LUmdJMktLK36ldyhophh4P965XX7D1MKUFLyFufo9Q6LzE1OfvSxBx%2Ben2uWe1MK4JzrdgFoCo0Gqodicdy0Hjp28kcePXXXkcmJqt6IMaWUd1UUE0KoCSJgDCKIsEXBuTurblz3xSkt%2FpEn7j91z%2BxEZYo%2BtlZDBABFBGMQQZUy1mosh9gr5fTl%2BI3Tqy%2BMqrWYR02%2FF25NIuM6WNhFU4EjSZJbyZ31KzxJ3uKN%2FVK79j88d8nHiW96u46PuceVsGmH3F3wYWc%2BPYg%2FNNnINy%2FVKYXIPlPDxiNGnhadWdHAmUNWfsDpD8zl9%2BPz%2FsimrSq%2BIxTz3HBQtIieo10BOWc8JiD0DZ8IHN5YC9Zkd1JazEL5gbWlu6h%2FdrL9pfXul0f9s7AEfQfkRENsNILkREc%2FwrdM%2FWlfPePC%2F9Qd%2FWC7%2FpON%2Bof7g7aGNKS9DaXqSpIkt5T0yllyxwnGPqXxV5%2B8NBHlnDeCiAgxoopgLfPOHG%2FVT5w4nrdDg0KIjFOXYK1dtBLgoRk5fN%2FMfffde7KjDTdIKeU7JmDCn1DGEgW4A7epEY3TOrxrun5iYebRyY4VBBCIkRBEhC0eKl8BZ7zaflh5beWXnl76fG%2FjkvWVWJIkSZLkHUoVlSS5QYV1v9xu%2FfZL54dOXvF63lYheLQSYm3IovCoNe%2BvmR9cXLiXQS0OQTnAVCiecHrO60PwicMLnU7nw6ubk2GYXof%2BTvJqVrQaqRAJ7KY0NApR9M78G9EF7f9wp3nfzInmKy%2B8GuIzla7gh4Z%2BrIbWDGsOAXB9n4ODIurvCYu5PL9pHrCTPzEx%2F6nqYlPTj3SSJEnyTqSKSpLcgMLYL1v9vW%2BcHxWy4RUQEecyY61GOkYWrTl8bOaTD913j%2FTqoS8aOVid8t7J1g8dbz1%2B79Sx9sT71zcmwiAN6b7DPDKKFMpYdYUY8zt4Mat2GJzylz72yINH5hePOwP4iGQZeY4IjiusmHqWZ41s2XB6EFYvLn%2Fl%2BWdfX5UyNjX9pkiSJEneibTqV5Jcn8q4X6lP%2Fh8vnukir5QOGq5W93HZtJnqcijwkDE%2FcGTqY9NTi6P1LBRcn0pNFGPQ7Hbc%2Fvy976xM%2FGevLP1yCzwzRQtYNR5TEJkV%2BW%2BCfuT%2BxbnQ484WxK3Z9tfWi%2F%2F38spTQS9nLE9AD3QRVeprSMWAuicHQ2fddQhhWkbvl%2FBDs1P%2FyEJ2eLTqNE1oTJIkSa5fqqgkyfXx2K8X%2BrVnzxDkTKkA4IsCQxzgA%2FdN2UcfPnnv%2FMxssXH9KQXIJNbwKaV8t3hlyHh1odGAO3Te1y5W%2FZzf%2BOB0%2FqH777l7wtggDMCA98RInpNZtiiKKtZ2o5wLg1dWz%2F3Ws68%2FW3VLk6YKJ0mSJDcg9agkybX1jPs70%2FO%2F9I1XRya7GCagApi2lGtHC45G7jXmM4sLj%2Bd2ortSC2lnxlvJcs10BSoIboTs3Ad7CpnMNU8Z8m26WG38WF2OHz7UevH8xVLOqL4eJ4GFFWuwq%2FXNYKmgEXrv94OSeN7VXp1ovOr7i0bu3qz%2FCw%2B8%2F1MXn2mbmOY3JkmSJNclVVSS5OoGIi%2FOd77wx6%2B4yHqgoGi6JtYyGuFMG3NywT7xkQeP5a7dW00p5dYSxZWYzAjjOHAOkyoqO7SLzQdN%2FFMffeTQgtRFsBmYiqqgKEuqirKk8Cy2F2eYjjHS71PjYlMHG8O%2F%2B8d%2FMBoMNyrRtMZtkiRJcm2popIkVzWy%2Bd%2Bqt%2F7Ok2dftc210EKamRjnzx6mygrmKvNTbZ5g8sj6xmQcOp9Syi1GkRdDb1WQCtQWGEEwHudq%2BLpyeKJpYkzj6itE4%2BGq99m16oNm6qlm%2FxcHL11CCwhwJDYr4iqjvuV3qqVPfWDuz623XlvqvnYp5PBMs%2FFMCGsr5fd0Zr%2F%2FSPPB0fmcO3eJgiRJkuTaUkUlSa6iEPvkoP%2F882f7haypsfUG6qtYtkxLoWPMifvyQ4cOLUzWpuIgpZRbUUS895mwl6oqAUTEpnlKe6g2wuhEUw8vLhy5e37eCdCkXlJ6fKPeQMCy9uramsijjz3wQLs%2B4YSqIsYlr693T%2F%2FGc6%2B%2BYA6PpJ62D0ySJEkOlIJKkhxkPav9janpX%2Bjql4KciZP1%2FFAYVdC3djmP65925mca8T8oa98bivk4sL4kuQVpNC%2FWg1faisMGrDcGETRKoKbaELWSgsoYeSw%2FRvffl9XPTuvDmawx2sSsMdEbTdn8XqT1LOHlpY3eyuaPH7rn%2B3z%2BYxru99VL09N%2Fs976u7b8D9948Zdor5pGmgaWJEmSjJWCSpKMN7Tui0X%2FqadOL3d9L6ogRVEAIE1rFqw5upB96KEjk9Y2tDIxLbp6q1KVwWAQADAYAFVEUFVQVWNM%2BjfuIFarw9r81N357L16NBcjBgDCaESMtPLVSl984%2Fzq6urjjz%2F%2BwMLhidzdFUpqtfNB%2B0FfeP3Ms91iQ%2FKoKaskSZIkY6QelSTZqxL3q63JX3t146koa9Flrg20%2FbkFosIHovm%2BBfPJ6ZlDa0MXUyHl1qYqr1g8GOjgCmtQRTIUAxNgo0qa%2BnWwTMMjq%2Fl%2FRONFM%2FgvTfFlHTExwSg8MLR2mK%2BZ%2FGX6%2F%2BbG0sdb7q%2FOnvz0wP6lzTPvl%2BFFYdnp3y955XL3AW389OEj9%2FeWrabV1ZIkSZJdUkUlSXaJYr%2Fm5clnznT7shkV8N6HEIAC7s7NXYvZ%2FUeOzscypZTbgCrDIREAQVAFEAGAZrMRMEIkOZhRndF479GZo6em7puwFAXgcIFQxGI16mErzz755nPPPXdoYfLHP%2F2RbK7ZMRIqIpz1urIy%2FJ1vvfKadioykiRJkmRbqqgkyQ6K%2FE6j9XdOr20gS0FzZgbWa15gi8zyaN%2F88Fz87OREfXMzTynltqDBrHlqggULGACMEBHouJqqTz0U1yTEORn8p9S%2BXoXfKuOTsXhqHoqcokZRe6RqEZZ%2FLq5%2FfLr1v1%2FIfjar%2F%2B%2Bm9xuBpY685vW1oH8U5fSK%2FWzn5Cdqb%2BY6IkmSJEkASBWVJLlCBmp%2B%2FZtL1aBYCQooighQN%2BRDc%2Brh2vvuOuxiSCnltmGieE%2BhAIryFhGgYyTLsjTr6zoZjZNaPHZs9oFDeW4lryBGIGs0VnRlJeg9mXzta%2BcuvnauXjP%2F1P1HHj3ZXkXnRXCs5vbNzTdfeXNpc32%2BiDlJkiRJcpPI8j0tkuTWd9a1%2FsqLm6ez%2BS9WPkifhicMsNxVcr%2Ban3%2F%2F4Xu7xYQNLqSUcvtYjqfet%2FLNHGqbAH1biwFsRggfsKM%2Fe6z1T4ht2bRYwvWTy56nMn7ljf7veV1rgUAJfqIVJx52w67Xf%2BXxe3%2Bk%2B3qM4eub3b%2BxXH0jk4uVzTh0l%2FUPh9qPnpr%2BRPZm06e6SpIkSQKpopIkwEas%2F%2BaLy5oVL1a%2BYRsAZUlOW2jm5uOPTnd8bLuYUsrtJIr1lQVKxqiLWGvTvK8bpLOOY7Z26Lje3RDeYi1QUb3p82nX%2Fztf%2F%2BNL6nL0ExPNP%2FdIo%2BzohKFN%2B2Jwq%2Bb8V1976oVgR5K%2B70mSJEkKKkkCS432f%2BJ7v%2B3ktytdsus9udBwo0Pef6gvPzLkL85N%2FbhO3FOO8rSl421ntSqaCpEIEYwCoAFiA2kamwbMN0rQ%2B335F%2FL5H0H%2F8VLu7TEzDMRe6XoX3OZXfbHq5J9fWvpq3rbw8bL%2B99zUfx79g%2B6l1cbZ35mo%2FtqU%2FOtvLP89M1NKmgOWJEmSpKCS3Nn6rv43zl1cWio3gwLSaKBaVVXbikMfPHX0iYXZmeFGnmoptx1Fer1eS4TxNM9zSUnlxhni0VD84F2H5qabd2UCiDE4BwAbRmsj%2BVvfenMt1FA9OikfPDRV%2BXhIDB2zlqtG%2BepLZy6XHS9pHbAkSZIkBZXkTuVN7QsXZv%2FXLr%2Fl9GuzLHVQXaU5PIY%2BLvJvTC3%2BLNldm5fqqZZyOwqYM9VwIhiC8eDBIhDAI6GlOm%2FTP3DvkNHwSDX4i67xg5V%2BfyaL0ZNt0OjnsFTy9VrnD1z236w1zueTRv2Rdvwr9zb%2F1Cjef0mnNjgrE79paj%2B7Ef5m7e5KayRJkiRJCirJnSZKduZM4%2BsbL7koWBiBAlBy3Jn7FxdOHJmpuZ4JFcntyKvpll0OUAVt2KxG%2Btt%2FhwxhtlF%2B6OSJuYnOISsADd6iqmdVLnTPfPGVpZEXo%2FEY9mcfbZfzuhjFWrsRWe%2Be%2F9Lzr3TX5qJakiRJkiQFleTOEcT9Sjz2U2b46yabiK37%2Bh06hklmRvxoMP%2FofP5jC5OHi%2BWsGpLcpkqxpylitHhbCB6E6IiYCuunYLFMqxN%2FWxzhYdv9sbmJx61%2BZCALG4wsIWuagUyGyd%2BN%2Bb%2Fjy%2F%2F43qlL1orG9%2FXk75upf6PS79c1oXi14742Wf7LtnoyTkWxICiioOwgpOUOkiRJkhRUktuJin3dzH3xtWfr5cZmNJFYUmJM3bAg5qF7OvfdfbI5WKnHtEbq7SyKrWCo7JeBgCUFlW9XjfLBOPjA3Qtk6ioxhrIqLdbjY1ZrGvnd3z3zx80qYEXjTBb%2B1D3HMtwRZ6jVzoj019%2F4vTc2V0atiBURAYNuxRUBAElZJUmSJElBJbltfKPW%2BqcvvfqHmbwUG%2Bt58zS6RnX4vH%2F0vPmvjtR%2FvODxy8szPtVSbnP9Rv1VGFSCNziCpW6tJWKpW%2FmQw5VpBYWboBGLHwujf2%2FC%2FdNgQK1vsNZiozD2spkoa%2B1%2F7pvuC%2FkJL5lonGT9L9%2FT%2Foks%2FuBaf2E0%2BmJT%2F3Zr479eXV62rYATxEQxilFQFABNVZUkSZIkBZXktiArpvZbLy9N9OVNVYCqqrlaQ5i19v57j083m4s12wype%2F72V2IUNiNXqCoA5IJzkv51u1lqGh7otB6YsYebDgAUparw%2FlwR7sv4o1feXBnVQUCnqvJzd82221IbCZHTUYdFfPnCxkBNxKAYFRAAUEUAFUnVryRJkiQFleTWpWIuxcm%2FrOE3RZ42GupS115TezasT%2Bb8BZ%2F9F1V%2BT%2FRpja87QRB71pnSUFOHOgxYTAwWEFpGTnoyTYPfm2YK%2F5lW%2B%2Bf67c8gRriUK66HWPTk0ujE52P%2BP%2FbqF10NEOTeqvzLk%2B3PRZ0qJYPfjvofbfa%2FZOpDzTBOVIyqqIpiAOUtKaskSZIkKagktyaRru288PrS0unN17wCVJpZ44QFazonOx974BR21aY1vu4MUdgcDttW2CHEAADR0Gw2JfWo3FS583%2F6ZHv%2B2OyJTAAEGg3BBUJXeXn9jS%2BtrZQYwMCCMz9y%2F4KZ0pZlpFgjL545f6nKC8lVrIlig5oYJaqoooBAqqskSZIkKagkt6DCt%2F7SdP0%2FbWZ%2FWDkbGsdGtfmCro3Tk%2BZf8PGvDbOTXMhS9%2FwdIyAXi0EPmggYAEGJAghq9S6R1Ex%2Fs%2BlRXf93tfxUQz8ZxVbUR8sNe6HPuSUtzjj7fyzzZdOsMKAZ8cNU%2F0tz8nt7zBs5H%2FXzQX6hy%2FnscGGswdioWQiZImoUQQEU0l9akiRJkoJKcivxZPqGvP71118YFJ16x%2BMjEZg24ufixx%2B%2Bb7JlXZrxdSeJ0O%2F3g%2B69c1dFJU39uvl0KtPvOTrNoh6xUnktQmGxxpg3vTadfP61i2eDDRiUPOijzdbHHjnSmFKEpaCnN5aeffHChm1LVrPYLBpRQEQNCIoAKaskSZIkKagkt4qA%2BcUZ%2F%2BfbFxrBtZi97OYKWThv0Br%2FZKF%2Fdd0dtht5SGt83Vm8cDkWfUUwFouAYMACwprolM1MGvC%2BCwzxI4X%2BF71jnyvlY1ZCY7OcWet31ot2%2FDz2%2F9Haf9nvnDEdj7EwF%2BOfDfZnmF2A053Jz9vsv2D5K2VtIzo1uUEkGg0xKmAFUYWUVZIkSZIUVJJbgmJqWjz%2Fam84FI0tQej33eRkXZhrmkdOHT155HBelCYEkjtJEKqKYVTGGQnBGpM6Ht4ddapjc8X9J%2B73QRsCASI4yHNPeOnSma%2BtFT6aoNRC6Nj4iaNTH37%2FY7VBP0JLWr97%2BiU%2FNAPryOoBNMaoUVVQFZSUVZIkSZIUVJJbwrPm6M%2BF%2B9%2FoyjNBn5laX25ezuXc3Rvf%2BjEJ%2F7Y0P5Nn06N%2Bnhro7zxtOr9Y8Ebe6oElIuDogcOcHJqfWDlysbFq8STvjgaDH5c3%2F3zGZ0qZ3MAVsJ7lZbZGc9PK%2F7Z6%2BRc7C%2BvWRQ0N8feb3r80vPS%2Fyqk%2FFaqvZv2%2Ft9j6V3vn3qi3hq6BZIaIQQlGVTCiiCIApMl7SZIkd7gUVJL3roLsq4OZtXPfeqPSmiMMINBpMGvl%2FhPTdx%2Baq2svS1um3JmiAqrKFQogSF0kJ0fTLoLvrrrjoyemGnN6LJMQAEpf%2BugvBc1Enjx77jRugIZQNcvySD3OHq69r33SwMZaf6PHF0%2B%2FfjqTKm80slYGRn2MEQRxKkYRQUFFNRXGkiRJ7lgpqCT%2FH3t34qNZdp6H%2FXnec%2B%2F99qrqqq6e3qZnI2eGMyQVh6SszQokRYqWSLIkGIKtJULgxEusAEmcyA4QKEFkSJAcIxbs2EYCI7KzCLIFS7YlK3JkK9RCkaJJijs5nH2mt%2Bqu5auqb7n3nPeJMc1pDaUhKc70zHRVvz80uv6Aurh1nnve5Ta1tPpftfz7Ox%2F6zezXgFnGaot7WnzV0r5hoG9fW7%2FfD5ouWlPuUIfZRoC8OIqjgAAggtCAOlkZPYLKa%2B4c%2FS9w%2FZs6PSii16G%2FzP3FALZV9PTu%2Fs9N24vkzNkAqzm%2F7cTun1%2B3H2zxcItfH%2BIvDzA9XJ9av9RNDaTSUg4BoERAUfsVQgghgkq4HWWrnuzyx5%2FdmS%2Fnw6ZpKtxwOrE%2F8a98y8Ob851IKXcs0RaH81Uj3HEDAQGAwQBMJpMKEVRec6Zy91CPPvim3aKVpsKLGmAufOzK9tPTnanM0VRdPl18ssJ3veX8mChE0%2BIDz3x4Nk%2F7lszq2pPBrJDuplj%2BGEIIAQAqhHCbKazeX5%2F52UtPfTDx2ZGAtiE29%2FBIZY9m%2F67z9967d22QI6XcuQQ%2B1aWBAC%2BOThAccAAosKH8zNgrR3gdDNF%2Bc96%2BvNr%2F1wfLX0uC45ph5kiCG%2F%2FmdPTDa2tD7Z%2Bk1V7O9fzr0T6a8KeX6DL%2BOvAh9v%2Fbdmh4bmy1gUUdVcEACYIIxNrOEEK4g8WNSrjtTOsTH%2F3Mk7vL5bUiNAagneFUzUb%2B8MPnT5VFpJQ7nJOHh4cVAcBoL%2B1RMbOp%2B2QySXGj8npp2H7L3ac0wv2JaAChAASKp93FwW9%2B6rHFYbWsakCVt6etv%2FGm8xfu7wMowCee%2FVi%2B3M7Y88GQVZWcJjfJHKQIEygyrlhCCOHOFEEl3F6u2%2FgfTfHrXn5Zo63eKvYdjreLm51%2B4P5zX4e81s0Q7mwF9mQiCwhHapU6CHAAUMUTwL2%2BE2vpX0c6t9j9id7qN831tUtigGUP0179mWHvk8IvAf96dnhZLAmwbsT21Lj6u9urPwW7cgK%2FOy5%2FpXr8g73%2BJaWu6VmVEpBKMRc9AZQMomJecQgh3JEiqITbSJt6jx%2FWn7ny9NM5IyUAqHC6cFn0zgfP3dtgrGXyWJlyp8uwruvmwh82NgAY0GvEc%2FL6MZXzq3zbA%2BfnLgAY9iFhuUypaYgPXt%2B52C2uI5XKKuQNlJP3TB4Yvin16MAz%2B8tPfPrx3BvuCWj6iZaKKEAGTxQhRv1XCCHcmSKohNuFM%2F3Wxpm%2FtfXcPyv61HAMGlL16Azf2OL7evV3kvfkWZ1bhDteV%2Fc%2FnruuQ9NYpsOAJfpVH0DXLR8Cxt0hwuurUvsd2v%2FRwcZ3dmx2FlgpOFG8tI8LP9Pgh4Y7F9v6UIlU6manq3LhwuynDvXVB%2FzQGP%2FjCn65mWxVpw9SzdRUgokmgomiARShm3cqUdUXQgh3iggq4XaxN1z%2Frd%2F92L6zVwPLJSQAq8lOVemd9549zXmKlBJesGRVUA4kSfhcjbEGkkcr%2FRugYTl3Emuj4d0VISElAJVhH7h8GTtXdrc7ZSblruqWG%2BP00H3nN9ZFoAU%2B8MEPzQ%2FrPfcFjampWRFIMKOZYAIhApAoQZFVQgjhjhBBJdwW9qvh%2Fznrfpv8beliA1g39L13tDvfnf1Pra28HbNBt0AIL7huky0kCpKQAAPVU64B60xvBmpEpn0DEDpdd395sPKNWSdbYp5nA0x7wABY4qf2Fp%2BaTq53UEooiyGWb%2B3539jFn8y4sINfBX5ssrw0Tnu0UveUqgQQhZA5KJhu3qVEw0oIIdwpIqiEN162%2BsPL9LGnLj7Xqd8HWsAwLGh98Ojd5%2B46UTXRQB9eVGjbuW7MAbjjplIKgAJM2KviGPsGSSgnRsu3nD01G6gu4BAQ0Me8jx0uP%2FbU1Vk7alMfoufFiZTw6MlHHx3WhIDnHvv09e0re4bDus7JIDfP5iXBKadAQVH6FUIId5LYoxLecHzP4NRPP%2FnpjxRs94EWJ4SNggcqfu%2F53lsGbb%2FE1%2FHw%2BwrwbDc8MPQdUwcIAIYaIlJ1YO39jSVE6dcbptHyO%2Fu5XMWvLvkrLmRbuTowsw9i%2F6PjnTdtT%2Bqe3QXQ2FO7Maz%2F9P7qKc3%2BF0PbLn7xGr7rwcSuPicOVOhLU4GZJRbcQICKW5UQQrgzxI1KeINtqfnoxSsSmYAMNGwLTlZ86N67zm%2BerD1byQjhRSJuLFExGF5kMEEg94HJZBJDot5YQ5Y%2Ffnqjls6AaJpW7aIs6sEozfCRa89cWWJPVbZGuR217eqoeeTBN6VhD%2BQTh7h0%2BdL1CnuWVPUNliRSIF5AygQTobhVCSGEO0AElfBGyqh%2FYbe8Z3f67l66XhkMY%2B9%2FWeKXZ%2F3gPacv7G3FmK%2FwB3TA1aIsGCwBMMBgqIkKMBAbTWwzf%2BPd7%2FnvVKdOz0%2FdvZh0aBZocq%2Feq%2FB3iV9cXp511cIrb3NadhuwM6vpv%2FH1rwAOYL%2B0o0%2FM9i9VnFsCKzrMKQGEQIoUYv9jCCHcISKohDeMs1ruDra39y464A4AVdV0iyH0lV%2Fxx3jl0jCOm%2BEPkSHn3AoE8SKCAECCSHVVMW7h3mCJmed47%2Ba9fVsCqHv9xXQKINX48NOFWzv7i4U7Xazmi3sS3vzg2XNCBb%2B8wOXL223NXfeiVFlNJoIOGmgUKUavSggh3BkiqIQ3CPmU3fefXc8%2FPxp%2BeLwKcuJ%2BYZ7%2FQ%2FB%2FWElftXvxbLfolw4hfK5Bt%2Fq3Vj%2F2xBoW8FVYWiS0WPRKrvxknn1fh7HFEpXbQs2Dn1z95Dfk6Tv7s7Xl9XPlzGa7%2BbSt%2FX%2Brw%2F8KeM6GM1kxs2426uYXcP0vbowv97BN%2FvMpHtu%2F%2B3A5KU3NqiIrOCCAJADGeOIQQrhTRFAJb4w9G33qmQOr9p5CQs6oa%2B9wOtl9Z23t1EaDLuVIKeFlpEw4DiWH43Mlsq7RxSH2trEi%2F643rz6x0GZdtWgrVADmXbe9PXtq9%2BAAVeeQWiwP1qh8Zv3tbz9PoiM%2F%2BPgHB1rZabuiCkwSvSQ4XQ4VAyhQ0U4fQgjHXEz9Cm%2BAzurfKYOf6D3%2BzEJnc5pjXoC7KvuB7H9ifP6EDlK3RAgvx3MB0BZkiADkICCHfAJsVMjwBuG2QPgjqH4E%2BH9L%2BfjoGgqZhulQjxE%2Ft7Pz1sE9o3TYc6ibJfLkZPWvLut%2F6PpXxK%2Fi4AK2vqa1Ez02kLmY4FBDuSgCAkgQirASQgjHV9yohNebaBcX6dOPP7U4wE2nKtZn7ZEL961gWUVKCZ%2BPWZ61yLiBoDtggARgQIzHoygLuq30vPv6B8%2B1rrubBimpbRPSHLh4iKtXdhesijWdnKUdIJ8dVI%2B85aEiGPCB5546TP3dklura6t7QHIvggQTCEARUkII4ZiLoBJeb5fSyt8r7S9UfLLR4QSX0nzT%2BJVFf3tx5oHhYtweIITPQ%2BBzc19fEhkFcBA3KAPlJHimN4iz621GZ8r%2BT66ffHa5PDnsoLbtd1PDJeM%2FnB5udZN9Np0lR%2Bd5sVr5t9r820%2FVK8CHwL99wpaHw0OAdVNXTMgEaElySgQZLfUhhHCsRVAJr6tsvd87tN2rB89l3TxjrBseWF3dWK96WiCEz8%2BZDpYHAwEGAARxgwSAxGQysTi43mYSyua6PfxIMz6k1Vguva7rmXQV%2BfKV5cz7Xo2KrCzbajqbjKo%2F9uY3OQDoEx99urefF1ktksEqOQiRhBOiGFsfQwjheIugEl5XH7Zz%2F%2Fu16a%2F1sTMEhP4%2Bvszs3xnrzzWTDe2n2JoSvqCl2Qdr9AuAugAyA0EH0AHd0P1u1RFUbkN9zf6vg9EDM53dIPqYlcFCg09a%2FdOHvjVtFhx2XY2lmtlig%2Fr35u2Poz9bx0HNv7I6%2B8BwMoV1DhNNSQ6ABiNIMX7bIYRwjEVQCa%2BfOQcfusaSpztFGAHC2cTFwO%2B%2F%2F4KvlzrPEcIX1Ild1y0AkABIApBwQ%2Bto4BViicpth9CpXL7h7aPpVDaBdx2AqXNbl3avXD%2FMVqznnercNrlbqfmmB9%2FiJycUHtve3zk4PFhikVFbr0YyF51CIgQKsaQ%2BhBCOrwgq4XVSWP1WO%2Fyx7cfeW8bDbMMt3N3xrj7%2FRld%2F9zKbIqWEL26%2FGbwbmrUV2iqj6qhejeQAMpM%2FCpxoC8JtqVH5wT1%2BxxruvU5bqQ%2FN9prVT2L449j9tHNOI1lJyMu%2BFpVt%2Feh8dRN8vsZ%2FYc9nnjz0mqlvnuoiKgEEIqWEEMIxF0ElvD542ZvHnnlmxZCV284BTBquntfZ83f1fBlbU8IXJUsL0IEdx00SAEBYIRoYEUHl9lVXvH%2Bl1zspn81Q1znnVmyMT1y6elCyUuWmZZmndjFZ4cbqaH29AjDcwRPPPH7YYdq5Wa%2F2SjIJghMCBIDRqRJCCMdRBJXwerhcj%2F%2FpwfK3Kl5MKJWvAF9d27fJf6SsnbRZr40e%2BvDFOfmJujqsiFKlLmUws8BBAcIG9TYM6hJ1X7cvwn%2FooPefprX76tLvtSt%2BMET3Qeknm8NnOJlbWhCdXN6OS%2FdOzP7O1Up9pDl%2FGgefGp%2Fe96ZlLVhiUsmUG4wgFSOpQwjheIqgEl5zi7r%2FO3N9bGv6XBbc0eutJ3adP%2FTQPed7TZNja0r4I3HadDpNBABJACS54wYzrgxXTBFUbmujpIdPrOxtWO0FAMEDwbf5%2BHOX9ltbwIjKXLZcrA5Sc%2FbUyv0jEHvA5a3t3HGnZNS9ypJBcpdEQIAUNWAhhHAMRVAJry3RPj46%2BavT6W%2BTFxNGeblyOH0z%2BT0nR9%2B6v5x0cZcS%2FqiK8FHNdoUeanoFVNlAwQACoB5Kk6Qo%2FbqtEf5l872f4Ma7Fu0I3S5nhz1cbfR%2Fz7tP9C4sMHLVqcg9jyuv1uc%2FuVc9nLVr%2FPuHl%2F7luLfT7y%2BrypIlFYhy3EAyNqqEEMLxE0ElvLYOqv77n3l%2Bsb%2FYdkkAcL7m5PTKIw89qGppOb5%2Fhz8ql%2Fb3Z50AQNDNexUSAJa0lZUVyhFubxXzOyeVjXB3Il7QCjJ%2F6sph2w2LmztbJGZf7fdXV1cfmIwg7Xu5dOlSGgwORCDVShBcUhFBKlaqhBDCMVQhhNdMser3uvp9W1vvA2ZrNbruviXv7fSn6tX7r1%2BuPbamhC%2BBpOczdl0VLOOzCCRDBRwk9GpfRlf1UXCu3f8prH%2FrfdfLc%2BgtUAEfQf%2FKfO%2FC2uYf9%2F3GgSp5WY6b3r37%2FuMH57%2BNT%2B9a%2Byt5ubdx%2BJ9v%2B5I%2BQt3BijrAIIKAxJgCFkIIx0vcqITXDvdL%2FeTTF1MiAHTdhJwWvePffdubR2rKDCF8KSi1Leb6gwvpAZiBpFc5IcbHHQGUnzxlg9XePQ3xgpp9La9d2esO53RWySrlnErX9FM6uzpZO2muXffHH3%2FS5rNZJ0u9JvXMKXcDCRIW1V8hhHDMRFAJr5XOmn88qP5X2D9Z09UJVnzyFQv758L3XXv8dLdXexR9hS%2BBaJet%2Bphjr0GNvRVkcACsL3uDWQ9flvHfIV1fPodwRPQ0%2F6fbw%2B%2Bd6l3EGLg%2B2r%2B4gp%2B6%2FtHPnFibM0lil9V1J3rc71%2F5a6ewTuwM8Rvb%2BM0HH9n1GtW%2F1VSCAQIEFEgAQEZaCSGE4yKCSniNcK9rfu9jl1UJLQCczLO6nFk5VY2HvWhNCV8q0dq2HZF4OT1yMBjUKU6oR4c0sXL3%2BmSzYgegrufuA%2BMHtnbmpbhAV9d2TSkra7Wa%2BstOyQr6xve85z2tjaZdKUiGioTLMyhABgAQIquEEMLxEEElvCba1Pu5xfwDFS9V4gybC57P5T86sz5emzRdtKaEL1lmerab9wEIDnMI5pDDHY6hYWMwrCwaVI4MAn3qnZvjTegUUbcLzNqr0rsv7T8zabqczK0UV7dcsXxXre%2FePDFcYGWGfyn%2FF%2Bd72%2B18ISWyohmKUJwQGMVfIYRwnERQCa8Bcsv7j1%2Fe2xNmM6yuYmx4ZP30%2FWtdDzGUKbwSHbC7W2q8PAnj8ThFJ%2F2RYtIZtffcc%2B5EYrcQiFaYc355fvUgy4upAKUwtyeapqmH9z9cl6wEvf%2Fxz6DSvgrrQc3GZFZKcjcRAsCY%2FxVCCMdDBJVw682qyc91%2BUO1XR0r9%2FHQPv%2FEUv%2FlyuB0vmyxODy8Igvax1osHRAykAHc%2BOmlWmIorFiyiMFHCoGht1%2Ff5HeN63c5zndYYvx42vjftvVsr5nlJFbyXNr5kPmeVn8Vp88B2yP8%2FHJ2ce1NB6qXVWUVTSW5TKSTYMTVEEI4NiKohFusWLU%2Frz799JWd7Ohwclw90%2Bntj9zXNPNeiaKv8Aq1wG7GTHhZlQslx4f0o0YENlXuvffe2ogX5NR7bgtX6m4fDW1QMrplmxbtWq%2Bpkt2%2FZsjYyHjiiSdq9g4KCqtUmEhCJkVKCSGE4ySCSrilyC1L%2F6C9%2Frs9PldhNMdbDyZ%2FFvjObtn3mEccXqGS6ucG9ZPATicUFKAggwUs8HyeuKeP0ezQEGvpjxABIHzi3Tva6beb3gzMeqPLefks%2BIu7swMNWut7BrJSu1gz3V3jB0d39Ylex7%2B3PHj%2F5P5ZKW12g5mSiRZFXyGEcLxEUAm3Uk7VVtdevbLYcjXCvb3m0rz7%2Brc%2BOuTcPA6R4RUqtDbZOBEvZ0gbjQb02KBy5AhQItaRH3zwnBlQ1wDQ6PGnpz23Q3cpqYhty9JOKuuvDDcfGAPYo1%2B%2BcsVynncwVRVSEiFGK30IIRwnEVTCrbRV1z%2FftO%2Bm5gnrNdcX7V9ff9uDy%2Bt1FH2FV2Gh9L7t7W1DRVCWwQwHM2qMDRvEo5MTjaL96SgRIAKAuTZUzhxMv7dCml9H1c5a2wJ%2B7WC6n1FY0QylQzsbsT1TlR%2FbHb6J3Ab%2B%2B51P7m6uzRxymleVKoqKsV8hhHCMRFAJt0xOzfP18okn2qtFAEbEffVdZ0%2FsVIiir%2FCqZFbz%2BVyCO34fCckdS1dVVSlqfo4UggAgwEvPfX3QW19f6Tc1ck5MLXBl72pXkMUq1S55Xlq76FWlNx6%2B2UzQGLpy8flD93k2WU0lihQBIVpVQgjhWIigEm6ZnWbwm13v02bLCvd25Ez%2F8fpdZ3CdUfQVXp22GryvxnWhcRgAMJMgoGUjDF3nxCaWqBwpAiAAgDxJJ8we6vW%2BbnV%2BrszvUn0A%2FALwkdX%2BDInWuLT0rK5dpS7U3Y9gIIm%2B%2FNnt%2BZV%2Bf89TtkYwExnjiUMI4RiJoBJuEdrz4NNPbm3JmwYj4oHNlVOr84Qo%2BgqvVrZ6OsXUBYAgbjCDZEQfqKtUxUf0o0agBAjmpZdzv1dduHBhSLRYAlgAz1y%2BeEC0SlTKbnL1u%2BWo3%2BtvnGg2T%2BSCSwVzy9uTepYqRzKRitKvEEI4PiKohFtjmXq%2FUcaPLewEsbHg%2FVl%2FaWNjNV9jdA6EV20%2Fp8eFHQOAHixDoGACsQpsApNSGsaTdvSIcNLllfIE3ffv7X4zIBRn9RjwP%2BeDx%2Fq2UCU2Qi2HdctVddPh9g%2F3T91DbJP%2FxJY76%2BsHhmxGwuiQEE31IYRwLERQCa8WAYDTZnzt2rWZBOBEwvnV3vlhbYyir%2FBqFWt2pothJl5gMNxAAmiISR%2BKwcRHFQU4BJWe8gTVvfeu1kD1bxnmu9g63N7NzGoMjRwlZ1u2w2Z89q7NE4BDzz83neflIbxjgpkJBKC4XgshhOMggkp45QgQBNlZev%2By%2F7u73Z6rv8Dpou8bnj5xcD3F8TG8aoJdmc4GNVDDgIoVABA3rNHWB706ZhMfTYJEClaApLzu3bf58t7xxvW0WJzAYozfOVhsw5bsVWxSkZdiZXmyX79leukv6dw%2B8PgSv3dla1n1FxCSGcgo%2FgohhOMigkp41UEFXFSDT3%2F60%2FL9Bhwbz52%2B9%2BTmOMbFhlvCYbPZrCFuIIkbJAA9oNfrUY5wJBGCg0VwaVSlqj85c%2BZ0I7Cg9HBtG637obOy2hytYMVH1DCVC3dfyIKA57f2hv1%2BEd1pMAMBKBrqQwjh6IugEl4hghRJE9Kl4cavwp%2Fo43JPD5H%2F9Xg52n8uqcRKg%2FDq7Q56P9Of6hBcYkbMmtxg0i%2BrkGGCe4BvXDNZzGw4kogbVOSSKvnA%2FEerrR%2FqYLNNXN%2F4dY5%2BZjScDpadVQ4AlAul3ajz8tT7%2FlwPm%2BSvkH%2Fz1GDZZlkiEkECjBHFIYRw9EVQCa%2BIQIE0MXVKn7q680Av%2Ffmm%2FvebarPn2UsyUJFSwi2wWzXu2HPcIAk3CVkgmeJZO8r04v8qZUgAeEQDejGzTnryqafmZbpfSPbNjSooywFd3ejUqfWaAPXspUvDprcsAkgZREWbSgghHH0RVMIrOVMQIkBaZ%2FU0Nf9g52Jl2Mn%2B5Dx%2Fz4m7%2B54TXhDVF%2BFVu0hmx2ERBBBFbnCiwB0FI3lyVvGkHXECQAJew%2FvMjz58%2Bi7fXc%2B7I3QfWiw%2BzPl%2ByUCvYoXicK%2FUrdn40ZXNtwgQnnnqmd21NCuZIpEYc79CCOFYiKASvlQiYKCRMFsC3WJ%2B6QBz4WKr0%2BfOrq4OBimZAEWVeHi13JpnZ4txIV7k7ripYCwYWCvGNhxpBOlAcaf7GPWgV61PNoFSp4rC1hYWvixWwyoni3co3XrVawbV%2FWvrBOYHunTp4gJ5IQg0kIqoEkIIR14ElfBHJwgACCSospRh2%2FXwH5e6qXkZUtafLWtri8MekMDoZg2vXoE9NtszIuGz3EsFJTjcVzLP1qijyOc4oANZkvuQGC6u%2FYVTzb30GdoF8VtLPDnQQXFUfbfUQpSGniel%2FdbJXWsJI%2BBn9xdbk%2BrQIZqJ8bcthBCOgXiZhz8yEQABkyqjWWpZzwsvXtx6KutTxVeA9XGTVGoQkiBAIgBEV314ZYS0t3ew1Odu7QEFAZgQKyvjKj6dH30CJApwKZW8Ajt36uSALF6MtjfDznxn4V2uGk%2BWmRyo2%2BUqrR7310%2BbgIstDqvlIpVMELS4UQkhhKMvgkr4EhCgRCHBnKnN%2FKXB%2BnvJgbAKfM%2Fo1Pn96zU8CQBFOQUAjGaV8ArNU%2FOkY9thgAE3ftTwCoVdThlner1B3KgcfQRAiZALKmPwwu7F7xQawOWPAb%2Bh8dy9q2qxLkg5i8t2xXNa7n5%2F2rgbeEr6P%2FrTYvUSEkAoxn6FEMJRF0ElfBECbqYNCiYmgUwZKRft7O0tHQBQY%2BPUyRredzEXqRSTG0FBgBiXKuEVyGzaFruuP3CjghdksGma6KQ%2FHggAcrjce1Ttfs8951caEijA4eGhKc%2FkQDLApa7zusujGqfWN2qgJp56DrWhBcBEWLxxQgjhqIugEr4QveQAQYAgCQByzF152Pyj7ecPq3Q3qx%2FujS60hz3zVLK8FINbJUsxpDi8YqI9L3xyCRkKUg8VCBhq5Bp5LDXm53q9FNsejxXKkdzX6vRwt%2FNwjTNAId5zrds7cX5%2FsYSq2vrqSlGhdycaXJjN%2F5O1dLWPj8xwtdSdmmKJNAqMutMQQjjKIqiEL4R4kQCRNEMCUlaadb44PFgul23RGGU0GhUrdRLci7II0CijkwKgqP4KXyonZ9lPVwTwsrvG2xoCGKVfx4iDggDvgRz0T58aZtKAAjz%2F%2FPPz3KXUJCR3zxS8DEyDJg0GgzzGoGBnd0%2Bq5g4HATDGFIcQwlEWQSV8UaJAwQQKBrCqFtB%2BzX8z2z5clBn1PdK7steVNwZXdkoCZCn6WcOr4LBPY24NpjUMtaEGAaJCqVAGwMkeBm1nMZv42CCdyPSikpSHlb5jiAsAgeLp57fnV%2BrxEslU0%2BFEQQEWQ2vf6njLKsZz%2FPr84LCezKUMAqTiSiWEEI6wCCrhC5JMAGQAAcoJeKoPUbXJnt0ShTn8%2FOmzvdF4RKvcnSwQhKrQHAQAxkkhvAIdbHd3twgQ%2FrAesbIyQnRMHyeCgEJ2Li%2B5MqxN1jYbEAB1GbO2qvbdHWZMAKCi0vZU2vH47NnTrXRJUEfCi0iQYDwgIYRwdEVQCV%2BAwJutKgQK3CFmcbeqnq3xfuBe4W0VvhxpCG9KMcINhQSRikwAAMY3zfBKLMhnD5f7CahAGEAQMCR4DR%2BRZ4aTWhnh%2BCBAAQJVVBOnD%2BbfvIZVcgR%2FGnjf2gPbxXMyYyLMvSB3Q1ep%2FQe3N98JPA38i2F3WHsBITORAKJTLoQQjqYIKuELESASNBIGECCtQzWDXdu9PgcInDt3rqvrmk0qxbsOCZ4AmAkmAQRiPHF4JTpxd46phJfTkCsrK2bxaB0bxA2CJHhJ7pZx9rRNAAEgrl7daqEljUzmpAvFk3KS9Wo7PZhAeP7yZaHkIooxbTCEEI60CCrhi0z8EgkQIAWSYlrCrjfV%2BxZtC14AvmZykmoHBpMLEuVJMgEe%2BSS8GguzbaA1gAAMMLwoAQ2xNhgkxMivY0O%2Fn1Mgd0%2FFx5bevORbhw3J6xj9xrXdqoxnbSZSRYMLgtwb8O5p9%2F3ze54B3nu4e3mlbZHdQRDRTx9CCEdWBJXw8ggCIECIgCij0Swb9szbGru7AFkDp%2FoDr6pKDpSCDAORBIISpMgq4ZVqYZXhZREUUNc1GUHlOBEkCAIIEt4421Jvrq8TIHB991Lj7LyAyViZsci9lB6dVV5bO9FUOCgQSuu5iAKj8jSEEI6uCCrhZRCAQNFEOqECLyQspQJJNZ%2FhL2S83%2FTXKrzruU8NKSvZlWEuIAEGRcVXeDXcqnen3hUjHVhgxvYQGfNB1a08ndon%2B%2BXtxf%2FMM1uMZ%2Bz4IQA6AFelUpX%2BnyH%2BA2I6PtxbO3j%2B6XzYNa27pRq0QsvyvnyQpmnw3m%2Fq6RHg3Z%2FAldWzHQiLv3EhhHCExUs8vByBoIEmJoAQ5YTDrAMLuL%2B%2FPyLR02iEKjU1QJXsKgQhc9ElykEBcakSXoGsen%2FZ1YT0Obd8km5eqbjcovTr%2BBEgApCcnhsaU9ogarAA%2B5g6qwVZqlSSLc0KWLsPsuXeeDLuUTjIPgOyUbS4TwkhhKMrgkr4w8Sb85UACnTRZYKDHdNW335D186J7%2BqtNSvDXurVpYOKkkQJMMAQ%2BwvCq5JpV5ezVkAGZADMDHD3DGFDXAWqUmKJyvFzs1jLBcgb0io9gkG1BOb4Z7yyrOsDZk8VUGVYdqQuD0vX9Mfv4Oom8Ix0yXK25DQA0VIfQghHVASV8AcRAChAgOCATDQ3cwDWspq13bUOkk6fPq3esG9VpazSASQrwCiAACVKscUgvCKd297eXifAcQNJ0iQHsEJOerC4rDueCECESy71qIrc2FgfNIDjupxFC6KDkQnFzKmSG2ncNCsrkzWiA7bmMzcWRE4JIYQjLIJK%2BBy6mVJIUS5JTlgCKyU4usxfPrHzcfJu8nsO%2BsWqvnkFFc9FLkIARAhi9KiEV26f1bMLTV1wwCEBcKMAJ5CAu0bD2qPu6zgTAFfyMkB3n1VvsXQ%2B4xPAL0xmlVInQ2GjBPeCnJL60CnX16i%2FKzw1u7aAdYJi6lcIIRxZEVTCy9eHO%2BUQCMhMqFNiSp0sO7a29gnc5RiNhgT7FaEsFRB4yd6C6HIOr8bCbdphLpA3V2vIzACQEDCZTOJG5fgiBAAOp5fG0TXc3Nw0gsSVS5caYllkSJVI90IXvIJDvrG2UQHbuyhd17ocIC1uVUII4SiKoBI%2BBwGQggS5nKKJhIxWwDl9Tnyg4NkafxIr980OaqsrFZpkEgiBAChAcYQMr5gzPTns7RIZaBwEABQvJBK62uEFG3W%2FigaVY4oQAAGS5KWHXNni2%2FJ4jbxU4%2F8pywarbXbBKktGOVEoettfzN%2FOZriC650uctk6JCPIyCkhhHAERVAJn4OAABkFJ0SAoBFMValSSxh0cIAWWltb89T1S8eSM1wGMEYSh1ujwLJro6IRZriJJAASU%2Fe6rmPk1zF2s1kOUi1Pla9MRjU5qHG4B5XSta1gVWWkssHlljtCpd%2F0R5gJi7YtRQUGWgSVEEI4iiKohN9HAAAFCgQompOCGWjIpsOi9y62%2FBBn1vFVzWDg856X4m22UkwwUQ5AMe8rvDqd2e88%2B0Se4NDgGQPUAFJVdXmZAHPc1ce53pBxb3c86aUXKwLMVat7oD386sRhxx7xETIzqa4AA1loHWDFm8amef9r7t9YBz613%2B03TRFJY7TUhxDCERRBJXwOCiZUDiskILjgAGSWaYU8OOjcsbKCqalXW1285K4AShApAEDUfYVXqUWaz10FNwgC4O54QZ%2Boa5TcppgpdwcQIZVGgtr1tTUaCOzu7Li0FMEksIhyEBiZtZWlKjXCfgcnMigR0VIfQghHUASV8FICRQgCQIKiBDczp2XY5UHz4QUenONrDYuqa%2BgNIMkhGEEg1qeEW2FZVc9k7BdgjAQYBEDu8EKgJtYqNO0yISMcY7rZ8aZaGmHxdTgxbrHS4b2L6aXB8NBVHKkYBQlJ3jOpKe%2FY6h4yPCU8Pak7QUDMIAwhhKMogkr4LBFOOuigEw44JTgpQQWYF81dOx16wJnNu5TKwAzuUgEEAZCoOA6EV2%2FOdAAsAdQVXkCzm1crA3I06sE7hGNLuJkvBJebysB9MOqlHkjutKWq64UvWwGwSpUJRZ2hIBlVbd6FDjrolqYkEdFPH0IIR1AElXATcbNAQiQIEBRJE7N0mP13hu1TwJcD33K1gXkNdxQ3f8nKFCrGEodXbUe8DkyTkCwBCSCJFyRgRG4M%2B3WJoHLcESBFSDL5AGXYHb6jxVniGfJ3z0xaHS5UyJSUAM%2FIUh4gry38Wxajp4VP5FnHynEDo1QwhBCOlggq4bMoGEjRRJMBBoIESdKKoyr9K7vbBpxZhcH6KiYVyumAIABxnRJuAUe6NG8rogWQMwCC7g4SL5AwGo0YI7%2BOO%2BKzBAGeXKZ28%2BRJCR0wnU6pxcIFWiIp7%2BAZXR%2BeUI3H475waeuAqDoHxOinDyGEIyeCSngJyRwQIEGCKACAhAxI6QNL3x3hO3xjPC8DeVJxukhRgKI9JdwSgj27Px0mIgHFCRgIKaWEFxgwrvsWn8fvDCJkcIFSre6rbX0N2AE%2FfLBbW9shM6VkBqgDspc%2BypjcXFp9Dp%2BZgk2%2FLXCPt1MIIRw9EVTCDRQAulvn7MBOzKCbEpEy08ItKe3vo9fD2tpaAmupdJ0gEIAhvlaGW8Rls9l8aABvTmcggJtBBURd11TcqNwBSBAiClHgKS3XxlWPALSzvT223HlGSjRzqFAur%2BA9s6nZYDJqoaZqiluhIa5UQgjhqImgEl5AgBAhSpQIUIDMSFrnnCtdXgV38eYJpsv9ninJS8kuACQMsrhQCbeG6v9pA0%2BMgKlhZktgidxLXdceqO7NeoOvBX7gYCmLkV%2FHHwGAThZAUM%2B4Mb%2F%2BNuDyBO%2BdLz5w5p3FK1VJZoC5E2BS7jPvVYu%2F2Ky%2BU%2FhNv36pxywoXk8hhHDURFAJnxNVRM%2F0YpDB4UbSUkdrpYPpFMDaGtTUjdEMxTMA0OIEEG4h5jpnHBbcQBCAhJtUHEBCuAOIAAU65Sy1lVT5mL2uqOdYLpcuFSZVlYMqNCflDcRUywFh7%2BCgreuWULylQgjhqImgEgDiJkECBFCkaDQRLdVa%2Bvj166eBh4fratgYjYJBAERGRUW4dbInX2LaCTLIDIlwCTJADvlQ8K6zmNxwZ9CL%2FyBV0CD55vqKd2Tm7uHcwWwAkxVWxawQRKKU0uQwbwDP7kzzaJAhxVsqhBCOmggqARAgyQHRPJlIQAJEumRsQZhdnmNErA8nh%2B0i0fGSlSkSFKfGcKvMhRZw3EBQkIQbTlATQMXrmPp1RxABCgIEGVgbV1cnBOjY290l0JEACVmRucGRhD4hYQ3Y6qC66twhMSYUhxDCkRJBJbzIQNGQoAQ3ySEnIaIjrw1xBXg7cWGKhk4UqID4rNj6HG4RR3pcXZ0BB0SIBhqYEwCglJ77SViVC8Kdg6BAgUCvwkrCWcNqq%2Bs7%2B4t62LlEGUhAcFCC1yijRX5bf3BNmtbI0s3L48gqIYRwVERQCS8gTICMSiZCoMNAAC5m2bLrCnDqFKqinkEqToiOF8Ta53CrFNl0d3%2FV%2BLnliMKLKnA8GNPjsHlnIADw90MGDFZR6yeVgO2DZSKXxV10qrDIvEjuquGANjY2OmFvNutcEI0WL6oQQjhCIqiEG27WcRmQCCNgAmUdNPdysewvgUfHJ07vl76ZvHSeAYIggBj4FW6RJfje4aIBAYAJMAMMhAEJgA%2B9nOj1UtR93UkEQQDhJA2Nt28f9U4IW%2BDOcL3kzguNFVJVCBcgJaFH3sehAZene50IkGDc%2FoYQwhESQSW8QBDkgADCACbIJAGdsCg6mM8MWF1drYme0VWKF1CQBClqv8It0rotFpkGGEDiJgIGAAWo6zopnrc7AkUQAAUIdFA0Q1ldWQHQElWqOuVMsKqUqIQCyb1CqXtN21gl7B0e3lWbw8gEMF5WIYRwVERQCS9BwigaSEAAIHphC2zv62SDU%2FvouyoT6a4iCCQBxqkx3CL7495vF6Ql0BqKQVWCJTgICBUwAk6PBxaP3J1CEACABpoDLlUlv61Kp4hd8MO1t%2FQOgCVLtWAuqKgShpX5YnluFamUedd2oIMAoIgqIYRwNERQCRAgwCFRgkCAIgGgAAVoicMZVkdcZq%2FJxswgQJLAKPsKt9IhTUCB8HlIAMA4ad4BKLwERRPg7oaSCoYAoMViQeaFO1NVW0WHA66SoJ5UkibD3t5BqYyty0kAgBivrBBCOAoiqISXrHs0dyuCQyCghBa%2BgK8Mbd7q3IQHy%2BUwpRogAKNMQKxRC7dMh%2Fr3hnwOWBZACZ7gqYJVMBiQQGANPpRiicqdhZRRgOAG9ah7pt15YVv4TCkrbZ1J0GoxFUmUkKRGflh3f6xtHi3pw4vUQlkOkAKFWP4UQgi3vwgqAQDxAoEuuRdKNJPZQjiE3MtCWB%2BvjowNPAnmL21MUSxRCbdEBi%2FN9oeGAxc%2BHzczizfXHUAAABIkQAh0uiovfWMSN1YgaGd3t4aALMokursgkJ4reJ%2FsEaB1QuueXQAZQ9VDCOGIiD%2F34Wa%2FqkEUADnhCaSxg%2BaOqzjYBNbR9A21YC5KZgQAAvFpMtwiQvo3nKZkBlSoAAOMMMJAgKiAU1Xd8xKlX8eeQNwkQKBEyNz78lGXHxzgOvBYOzux7LMUoUCg4KATgCoguScKxg5YSlkCRZAQAcSs4hBCuL1FUAmAIBFIYlVgokuFMLPakdri0712s0JF1gmCS4IoJ0AIim%2BT4RZx2nTqScLnURHD4dAZ9YbHnPAHkBAhwKEuSQlYW5sI2N%2FfF0kX3SUXILAwFdDhhpIA0rK8LZ4FgIQAQKAUH1pCCOF2FkHlDkcAAAlQL2YWuSQjjeZgKf7cAc7cZcNlScqJEOAUDQJAvICKT9zhFrDnCvYNDlQwwAAzwPACogLGdaKUEJvpjzO%2B%2BIMAQQIACQooXgzqAZtVs6xxLXfJq1aFXggCBiSHubFQgNdkrzI4it%2BcwA4TDABAxR6oEP5%2F9u6u17IrO%2B%2F7%2Fxlz7XNOFVkkm2p2U63YchQLMAwFTgTDAWIgN8ml7%2FMJcpEPkw%2BST5EbI8gbFCOAEkeBHL1Z6k53k80qVtU5Z681%2FmmgSHZ1U%2B2kWeeiqD1%2BVai9DlCXG3OdZ44x5xjj7TVB5cIJgDSAaYBAMDnIjrv9nXXdt4%2Fq%2Fryljz7u7SN0YO78Gg8qWff3fC6%2Fzk2ybZuZaY9%2F9wUQEYEkkTQ5NHiqrWurqvMOgYamwVVHZU%2FO4RzkOJ1ytWVVN2ikQsWggDMBcowx3mITVC6afKlAIotaoQjN0d7jwfFo1XuneoQb3fv9uc%2BNEHSmWYwHVD99%2FOODTx55uyEv3%2BfZz%2F%2F%2BkPsfJtxuvOQ%2Fkn%2F%2B6P6nNxNULoEgAA0tGAiEFVb1%2B89f%2FuMP%2BzvwN9c3bbdSMelwxAPaXp5vVl8v1qaLozBJCkRCAplFbIwx3lYTVC5aAEgCEJItJEkqFk3vQPLOlvdX3VRtIbZ2IwmEADDdE%2BON7Wy5Df9OK6mq1dP39XeefI3QpCnhlDS5uQG4v7s7N0eVlT19Xr2nz9qw8KpydUotGju8ElOQEAKZ9WuMMd5OE1QGKBiso5ckodJytNoneKfy7spVOt3Y3a2288vieEiSH51v3%2B%2FQIL8QQWy6nsB1ctWzB34RBJAogqDQYChEPnr0ziP40ctnB5oyEcCmm45s4aa8CVukurGJpFIYXnFyyhhjvKUmqIxXRMteUhTkgF3tY8NH5U04AXbvBwidxIDATCUYDyJPz0%2Ffaf4drsL2c%2FNNuyARIK8%2FCylMPnz0bsFnT58enYM0TSRgs%2FdqTqwrtuuqU4wHtEgQIRggIYCTVcYY42FNUBkPI0hi0bFDoI5mPzrN1jxKrpMtiYhMW%2Ffg4TX5X3l23XAAHFRD85WGfl%2FeSU7OGZW%2F88JXEiIAhIhNh35q%2FT2uvw9%2F7nlv9oaQAoQu2VyLnJJrPXkUrTYKJHwpAEWAuax4jDHeLhtjIBFRCwRAlS77ZF%2FJFcfX2rlDeF3IjKgf39jBespRhF%2BvdNu2Ot8yLoMA8qVW0O4sryuPUxu8gLved07iqio7WrJQa8G1faUBaFgkgAEMBQ1GZjrPGGM8sKmojIcQJBBEA6AVZDPXqeuwhQBAQgIF4LR%2BjQdzV%2BtfwbHDAdZBDjh4ZUcewwftk3Zavy5FILwuCQaozhX5%2Fh2%2FA5%2Fq9t67%2B3GQ2rJWswkEiKnDE5xgs7BQiAQIvzD1lDHGeGhTURlvzoCmmiwaCCDBTa7DVXJVOWkFApWAQb4iJBNTxpvZ63QPz%2Fi13kuVbfcV94y%2F%2BwLytzIruaksKDjAcGhCkZN0E7DbJOkT3lQFioOWigQCIBAUgFnGxhjjwUxQGQ9CghRABBAwnY2IhGUXbQeUhEREwpecd%2Fx4Q39R%2FSdwjpxhnczqo0U4Uyx5Ev7Dd4oXzzkxLkNe%2BxdAIACRpd9%2F2X%2Bw%2BKODT6%2F7%2B7eEWslm7QWd5jDRXvEKMCWEllIQSb76cFawMcZ4WNP6Nd5YEERDE4NapmTDm6prc7Nq0VUBIJJQIWH6vsbDONg%2BPQReNACK8hXppuDq6mplVq0LJK8T2iuzYNsQjtCQTplFlWk44LCDV%2BGm6rrqBAn51bkpQWcNG2OMBzdBZbwxAwlGwUYKYCVFtmTb8upZm0AkABKnijIeSFP%2F3bvnqjy%2BI4KFfYAUEShYyQ%2BqbuYMwSWKASAQJJAtPD78vXP9DJ5eIaEtk5Ckyz02DS64rrpKrRBRfqWADJlJKmOM8bAmqIyHEANFQmDBIqFoSFVLkgQgBCABCCBxXu3jQexdT58%2BvVkoAAoARZEAwIGPHz9eNavWRRMA2xUSHj9%2BLOz0IV8QwXBEJbBkyRVsJhBAI4AIAQGc4vAYYzygCSrjzQiIyBcSEhJK2PGcY8cjEJCkkpBMu9d4WH3Uv8rd56A8ZsMNt530khIIVPthzbTHCxUhAUgalNJTH%2F8gN5%2FB03U%2BME0BYDzSHSOrsyVXyQoFhSBIAgRAXsmsaWOM8WAmqIw3FUISAoFKV1mLTWs393vfHvudx6GQwkVCIQJEAkzLxHhzvdfTp3wuQghVfEWBbeO4Zq1VM2z0sgRCIIBAQCUEz%2Bs4PX4k9N25RYKBGDooBSUbtbGWVUkkElBRiM7GyxhjvKUmqFysQIAAhAAmJlaSqkNuz3179nyogUDQAAmJMRNRxgPJUT8685PlgkVYRRDahUW4Wjx%2BdOXRGzOW%2FqIIYAAkQDAYFpzs6zq9hDv70KMPgkS1OxopKpKkQkkICAFIpGcRG2OMt9YElYslr9NEcpgjIak76vPD57t3egSLhjbaKm1SIEhmI3K8EbO2cz05hwCEkPDLPtzW1dXVnV2cGZdFAIFgYgFNG1dy3jgFjj66m5g0qAWxIRDR1kYQpIgE%2BOpfZxEbY4yHNkFlfHMBEoBgSBEikARytLdH3x0clmsjRSINHRqMTkAZD6LJf5v63ZcAT9%2FlZ0%2Fu3r%2F%2F2Tu%2BvOERnetjfXDw8eE%2Fe%2FT8rm4Zl0gC4QsBBLet%2Fw%2Be%2FlePr%2F7en9wrxlYwUs2CEKJI6LSBICoiBAEUAJz%2BrzHGeDgTVMY3FF4RgARoBCIxpnZyv3t0AyEJgrTdIVQhAQXn7T7e1Pl83gLySgMgAoDgzqNHjxgXSxAgRCIxBq4Wp0pcsg49yiPpJHRoEPqQ8%2B7eHtpgoBA6mkiRTHF4jDEe2ASV8U3J1yaeYSJAgnDIri2Bggi0NggiqTlHPx7GnvrpfgcgAE0DtAhc5arhgN%2B9eW%2B%2BbeMVkSS4YEunInQUwMQFSViYtB4cbQsSABIABNIgwFy3PsYYD2mCynhDQgAgBCQGIxwgVFFQgqokIhjAeaePh3Gmnr14hiCEV4oCgG3bgLO89957NV%2B6gSARO7DCKSRCI3Zrx5gyq6kOHZujbVUUDRIMBEGAqaiMMcZDmqAyHoCvPyUEECGYjWwkGokGAsAMch4P6C7rJ%2Bx3ggCIIFV00dZxBx%2B0v91OUBkCASJUsuBUWSVpFCmDiVVUKqYknRgIJEkgBJBXMv2rY4zx0CaojIchrwtfSLKlVqoo1GAUIEEgZF7u4829zPoc7uT1NanpEGDfd%2BCk2%2F1xlZ1xWcLXCRooWHoiBQAKgsFQUBJDVzU0JQlB0AgQG8HZeBljjIc2QWU8GAGgAAKgBFZYRQBRkS8k81IfD%2BXZtn4Md0oDIA0Ni2p4fty%2B9zj%2F%2FsZHn82VXxdIvp5YgmqDVlyhkgqqGk1TIQhIBBMSAwgJEKGJRMgcuRtjjAc2QWU8hBAIgBzgK61CJQWFKEEgAKCZXcjxMO5SwC5fKQBCAODdjUePqD4Yl0te%2F0CwoMhW2arYRSNoIE0MKkggJlBgQEBBaABmOP0YYzy0CSrjoShADJAIDb%2BY5VwAoASRvBZYZk7aeGN%2FdvfiaVhcp%2BEMUBRwsG9g0ef8F%2B999%2BqYoHLJ8osPQSFgwqoskpBCO0WRSATQBikSQIg2AhD5BZ2NlzHGeDgTVMbDCYDRqA0WLLKSrUr5gkZRBFGZFrDxZo5az47jcYVf7whVFZpxocKXBKIIhCw4pU6pLUFSBRgDKAIgmEAQhQACgAoAs5aNMcbDmqAy3lwACBEADIla9pZUAlZ4JZDp5B4P6jB%2FXPeEnXXFRhcHTaSCcrC4P%2FGPn%2FVpyneX65cPvPuLpxU2coIFKYSQABDERoBImUh4xQDGLMYYY7ytJqhcOgECRKCNArLpVVwx2Ark9ZASwTmAOt5ckxcvXhQ0zZfk9a8c55u%2BurqqTFC5NOFrAlJQIriaE9nCUlqxg0DspAkQLA2GV5rANK%2BOMcZbb4LKpQug6ms%2FoWzkqlIpfuU%2FGDAaRCATVMabMPXnbYXGRbCwdgJdGJqN%2FR1%2Bu4%2FltH5dGv%2FWxBKACGjozeMqFoYggIEACmoEiCaCBEEQCV8Izln6McZ4SBNUxhsTDEEQiFFDb8X1llMR1IO0ICGAQZHAjFIZb6bJ8%2BdERAAFRCAJQHF9ze3VmorKBRMC0AAqgI0u%2BlRehS3CIYoJFlYsCMEFCYEkQACca77GGOMtN0HlYvmrB%2BkxgEFKtuRmrS2FgNoEYwejCOi0fo03pfnJwQvZyYniS0UlAZ6srBteLOPc%2BnWxAgIUkBBQQrPkKnWz6hTERoIgNIptK2likIggkISQQCawjDHG22ljXC4hCABpEheW7UquNo49GymPdBvRBEAiMNvb4yFI9p2fKb%2FGFtbK%2FeoT42IJCV8IgNgJG3VVccupWAl2gNAYu6BATAVMkvAFkZpVbIwx3mZTUbloAiXRCAKACBSsohJAENFICCraYmZG2nhDfdz%2FP%2FLD1BUbNKeDU%2B%2B8e8e7P%2Bv7m%2Bv8k%2Bf8N%2Ft3Du4Zlyvg1%2B7%2FEq32qnJVrAAtEgWMCBVTCQCiKpQqUxAeY4y33VRULloAv3owSFpUrIREadDEcCRLI5g2IcAcUxlvJEcDgBiCvFKpln3fhaqq7IzLJQRAQACQoBVpQqosBSTSwaKEjkEgUlBEGpx9ujHGePvNSn3R5CuGEE0TTLC7lQAEAtBqJCAqZo6jjjed9rjf09B1gBRf6LUFej%2F2K%2FKotpqN70snAEkiCCIFstJVFqQKaBQFJWTVVqlVVSmCNAqAzpdqjDHebhNULp0gtJgAgLHpo%2FvoY9euUEgERFQJADHTPjHezMuXd%2B9XSJoOAQhAVVUKWLJlZc5EXbYkBIIkCUCqgTRAH7R2AyIgEUhBVm2pSiUA8kpgbiQeY4y327R%2BDQASRUIQoPY%2BdjlJqjorAC0IhgZBwis6UWV8Aw1%2FAY%2Btz8wZFwUQwHX0SU%2Fwvv3%2BvYtp%2FbpoQogALSRRJKBABbpMApRYklSAJBD5BTspkS%2BZWb%2FGGOPhTUVlPJwiGEgi2VPndtcDyJJoQjAhElIz1Hm8oZaXL3kUkgAhfGnfd2CF9x5RPd%2B0CxS%2BlCQAhgYjGARoOPpQxSYmKYiGNt14QNMiX0hqisBjjPGtMEFlYDARAQVicSRncn9wmCZJJaVAtKAgYfYhxxsx%2BdMrNtZVnw6qWQAhQe4X%2B29Xfm9b77%2BccsoF8m%2F9WSASSAHSppvuwkgCSQqKpPGwj267gZAQgrRAAGYZG2OMt9a0fl00IRAhAtKhUOGAs4onI4FAQpBUpMQQp8N7vIGG4%2BDgl4UkiPhOcnNzs7pnB%2FzCiQBYfEVEWxoWgYQQgErVQbrbZu%2FOCiEhQUgCQQyvZArEY4zx0KaiMh6AAIEAYEKlWHVUznrkFylFBFQQIHMUdbyRfdX%2F9ZwbToLU8xWAHfr%2Biv37T97b5Z%2FefOeKcbkSABCwNEAAglFKN1hhW6lKCAmpFGk9PA67VSAk4ZXwC5NSxhjj4U1FZbwhIV99GM0rJon0IQc2BREAMQkKAchMURnf3JkILb9CBO7v73989PZzU065aIJBSDoCJtBooyVikUqIQJOUURFNtyCBSkdAEBIQ4ixiY4zxdpqKykVLUCAqQogGjdKmDuxWAEPSlsQQkjmPOt7U54sfFeUWTmeWCwJhYWHfP9%2Fg79%2By0YyLlPClAEBIECwJhABUIKQIIgghoVEEYlUIIQIQwFnExhjjrTZB5YKJCoBAQMGkqVRlpapTLd0H3fSRBBISMzuQ4829sPfmVr6uqBUWHKds3DMulK%2BllAY0sKRMmQICegRBMYCCKEEUICQxAMykxzHG%2BHaYoDK%2BICKRRUriosrQCRK7pEw66Ax5HA%2Fib1Y%2Fg8N1xSYFEAiwbxzX5LuL6%2BNgXKREXhMKSAxdxAAtinCAEAEwqpJOOhhJEALOoNoxxvjWmKByufzlh0BIYrQgAAtXd5RASAgULljzkh9v6Mj6m9ztcGf4ZSFiyHe%2F%2B92evq%2FLE76SECBEgIICiAUgdAKRaEwKQiJIIJoGgSQQDGAQIMAcUBljjLfVBJXLlQABMBiBCBJjl02z7x57djFFShAERAyzLzm%2BuU7%2BYu0fbClqsaCIry1MfRW%2B91vf1amoXKy8%2FhEAASIoLQGAsGIiSBII4dD9OI5uKRIAApEABHAuWB9jjLfZBJWLlggQoaHlgIYGbffD271vm93qnDrVSaeNM%2BtxvLkmx3FU%2BLoQ4BqePHliJqhcooSvCyECxEqvdJUVE0C7AaikDtjhrvvcLaSSFQPAbLGMMca3xASVi6YACAkkrKSSiB3P9u3h7e6ZrbNRq4M5OoeAAcA5mjq%2BmT3b%2F%2FmX15%2Bftn%2B7fvyz9ck1rDv4%2FJ3T7bv3q3%2By8fvwX9595pqx9JcpQPgVhiZKI4GCYDjkIIC1kkRy6NHuh0KlKoW2zvSUMcb4tpg5KhctIECwAFGChDK9czxnl3WbqyPrBO39wbEIEQQwsys5vhmz7u%2Fvn%2B7hl6ndsFCA1Pw2eVnCK%2FK3S%2BwkQmBVwFCAfVCllSzJ%2BTjf70eLCklCEIwQEQI4s6DGGONtNRWVyyUQAEgivN7DrdZubuGFfU6sLbUCAUQCAHNL8fjG7qp%2BevYnexMIvTxo6MN9wXsHj7qvX75cmcP0l0UgAOFvIwAaqGSrqlSokAI8Agku9%2BPnNClSmOS1VY7ZYhljjLffBJVBEAMEA9AgYHIOt3q0SCCIRNA5hjrehCnl9p69f%2FVEgt3Ah5X3H3PT58q0fl2Q%2FH9UUyAIFCQhVbXWtlKoHthRwOYw%2BwGdVVWoCE7X1xhjfHtMULlsvv4kJiAAIantqHVO7dIKxEAgcU6jjjfS5K%2FTdyt3AQDPtZMmOzlfy99PfvfJ48c9KeUi%2FforFkAKRG0wECiigZgIars3B1Rtp%2B20atGggCIBIVMWHmOMt9kElfFKAsEoEFiVqvq073%2F89MXNO6c2kIJlYmDKKeONNHn27NlN%2BILSzSsBuG8%2F%2FPDDK%2BbKr4sTAPJrSikgTZuWhsM0NIHEBAoidI4deq11ul7XWzb6QJFgEAAhs90yxhhvrQkqlyt8RdPSaKMtUqlH716%2FV%2F4EPn1U%2B3GoMeUKAYyEmVE%2Fvpkz%2Bd99uW9QALRwz9rZjlP4EH6r%2Fb06bTPt8TLJ1xOLgIGCgjR0c8ihQCoVitD0kaM5juhadTqtddoKkQIgzM1fY4zxbTBB5dIFgECAAFKkslaSrMU99Mqux2GgUohIEJi5zuMbOVO3t94LBeEXkoR3Kwve81hM69flyeuTGSMERaIlmIDu5r6P2%2FP56MOESlEhUPuR81H3Rx2dYls5lUuUJvKlWcDGGOMtN0FlwNdmNQMVHu1%2B%2F45%2FAz%2FMfn8chiJFARSQeb2Pb%2Bz28c3%2F9FNeniBw5p1Hj6iGnT6y8zvJv%2FiHH39wd8u4NBFIBINgQCBKR4gVU7R9fxz39hm6rJWUCeIOLz1eps9lF6JtDPKlQOac3RhjvOVmjsoQIKJWtTRNXAiuVaFf9n7b7u11EkIiEbBnQP34Zl4mwj1fuL%2B%2FR0lqC7uE0%2Bm03b9kXJAAGIA0AIRABdEgSkmiHNZOnRW8ShNc0Rzk9vBz%2BkW5te3hcVSFX%2BXUU8YY4y03FZVBIIpIBAWzJVddf%2B%2F%2B%2BmfwV%2Bv2ndp2JUkIAZ2tyPFNHbX92eZfLZ4i8BhO5ztsFjfLE3y89%2B%2Fde3JO0l8mEVBaG1oMFRMSq9jMaurcOTeHBlZSKy724r78%2FLy%2FOPqQo48EaJDwilNKGWOMb4MJKuOVChVK6O7gqUhyc3Oz4CcvPg85CImQAAbDNICNb%2BKg%2Fvr5sw8Sdnhdsu%2B8V%2Fn4t64fb7XlnnFBVKCJBAiEAAagpaJxaXVOu3W3exykWVBJUmQdcjZ3h4fUStF6dDeAvMYpp4wxxltugsoAQCAaUS3Z8BS%2BW4%2BfXfHnL6G2I0hWKoAGIGGav8ZvbM%2F6k7tnzzdoII%2FhMSDc733Hd5Lff%2F87H%2B5zjP7iJACIIorSppsdRWgQzGHOem6hFquoJIGEo3N75v5YuLbUEmw9iGS6vcYY49tkgsplCwCEIEVoWhuPSrLWzc3NWnz2GSvZm3RWVhCUAAJOUhm%2FmSPrZz9jPwBQoKi1CgGeb%2F3BBx%2BsTN%2FXRQlANLwiNn1wnOlOju720FaaOpO7w52kapFVKQDsdRx1Pri7s6ir1FZIH2lg5tSOMca3ywSVQQASEY2qkqTiu%2Bvq7oof38LaYmVtIemAzCS%2B8U3tnP6seRpokBNckYWR74QffFwfw2kuJr4shgQAAxgIIWlolitNW32kb7tfdt82O9SqtSUAIdnlbj9e3vfetdXVzc%2F%2FbEs8VMzcRzzGGN8qE1RGAIQEcpAjHkiSSq2VcH%2FPoypd9oLVIjEFEOeUyvhNdZ3u7njWshYJEAIAHz2q733vex%2Bc707O3cSXInzJwFd%2FwaQrljH2qkAdqef4HF7Se0xl21YwWFY3t0ee3x33u6d1enx9utpWorZRACTM%2Bboxxvg2mKAyNBJAQBCl5TjW%2Flf3n%2F6jd67fa%2F744IXRglVUzGxKjm%2FG1B892v71Pfc737%2B7%2Beh88zfX9ZeP9vvHnorvvej%2Fen%2Fy4cvnjIshrwjGQMVACKSKRYsWVG17eLb3p%2Ff7y24qlWyrVLvj6l63e57fH93rdLVdbz8XaBHJNH6NMca3ygSVQSAQEhOqi6MkVGBb19fXwmeffWbW2ZgC0hQAOG0U4zdzUJ%2Bc9w8rQNN85eDjrb5TPD76xJlxMQIBJCRUGSJKExOzIFpJre1gvUh9bp9xq3VKikSCZJ1dL6nPrTMuttO2TltBa%2FOKOEdVxhjjW2KCysXL64HDgBWE7nDcPap%2FsB7%2FFvxvn%2F309ub6vmkr1maVAEnmdT9%2BI3vq6acv3wXhKdef8pi9aB5%2Fzj86%2BOcfvfPR3YvlXEx8eV5fixRIAkTLFAlJVtfVi%2BbFvR51Xdu1rLZAu6vukn%2Fv3Zt%2FeXr5b77%2FfNtY6SX4eiSaMypjjPGtMUFlAIgiWLIswKNP2quePHkC%2FAjctpeHux0okskn4xu57%2Frkk08KCoBVCyBs4cXRP%2FjBDx71lFMujWAERREoSEggafpYpizZ7uXFwcu9U3WT7Zrauld3WLt5GU%2F4V7f94UfvlucTpg9sEUAEmDP1Y4zx7TBBZYBAQDBQVpl0n%2FZ%2BXvf%2F8e2j78Gfwp8%2BWS%2B6dzWhAgA6R1LHb%2BYFp79%2Bsd%2FJ8%2B3J3el09%2FiKPn3vln%2B66p%2FJP3lxdzVB5RKFSCQCSaBCQgAwncXW1H2f%2FjDv%2FMtPXz59sq4rN7DOneMAjriv%2FpPt84%2FhH9bNqRIO3cGAAcjklDHG%2BPaYoDIwgERCIFBCH6ubfT%2BdtkcA%2FPTuxUuOPRpIRIBMp%2Ff4zTw%2F6in9TOgG2Heg4QY%2B%2BvDRlec1FxNfnECIxkABFpTB8EoAcmZdUS8%2B%2BbTl5vr6OnWFOc5RrN0c%2BDd%2F%2FfQ9uNmurkvc7QadE3VjjPEtNEFlfEFQSEipx9HZ9%2Bv7%2Bw%2Fubv8A%2Fgz%2Bl7x4p%2Bquu5NOSGZjcvymOusvt%2Bs%2Fgx9dfcTNNY%2FldH%2Fl8R9Ufm%2Fv%2F%2BzR%2B%2B8cd4zLEr4gBEQBTLowQEzIEV7q7dX645cvPob3WFeLrcyxBw7ycu8fXuePXvAH4Qef9006KgIE0YDEWbXGGOPbYWMMMAAgBNIhWOGdcOd%2BBYGnn3%2B%2B5b0zRxcJgIDOYPrx%2F98965OjnqywFu4kQKUeVd6t7cPH29bPGJciQQgAgYWAIEIACiBQtdZd8rm9bfUMbmBVnVats5Uq1nHUi%2B7z4%2F4MPniX7r7eLA89iLwiAASdSvAYY7z9pqIyfsHQoZMjHKGSm8V69tkf8p1PNv6HH7588s6HHTpSGGFe9uM38%2Fz06H%2F8t3%2FRecRqanH8jOOTj7x9%2F%2Bj%2F%2FHd%2B58kMebwkAYAIABqjSEwMBkIKg4a74lnvnzzhf4bffYf37zwVFRYmp3OXbv%2F67md%2FCf%2Fpxx9f9%2FF4S3loCxBAAGRKKmOM8e0wQWV8QRAgJkdolT6Fq%2BUjHuUgOzkfxi563vLjG%2Fn86J%2Fenz%2Ftl3QDXF9z8Ntb%2Ff53fuvdK5ZzjP6CiBIEQEJDR43ECih2TKWOlftKb%2BvHP%2F5Rw7vvXl%2FpSUpJyXbrRrYffXK8G4DAqQzarQnBJZHMCJUxxvi2mKAyvhAIgA2CiRq82Y6Pbp683Hi%2F8n%2Bf97vt1PQcSh3fzNH7Bh8Fbn96dXX%2B4NPP%2F5Nz%2FvDof%2FGDjz7u53OM%2FqKEBAkhCUYI1UQRJKgVa9V98jJVTx799z98%2FmP4%2BObJO%2FfH1SGkU8f6f9m7D6BLsvTM6%2F%2FnPZl57%2F1c%2Ba421d3T4zWSRm4ltJJASOwCywLLAguL994FEIELCFzgAyIwgQl8YBe7KxAsVsBKQhJaaYw0fqZtdfmqz16Tec77sNDd1dWjaTNaNax27i%2By85ovv3vTVHydT755zolVlHE2e%2BE2lw%2FoMjs73ETaYGMQABjw9u%2FX1tbW1m8G2zYqW48yCDBKSBxkHxr29s6f6Omi%2B%2Ffv7%2B3MwQZr245%2B65vWO%2BewEMA4jleshq9evXCJzZztII%2FfQoQAIQMiUUaPUVpI2ABGCnCUUbFsuTMfXjlhF2bDYlgvI8HNEVPp1hTG8VB88vFYjQQmbYMNYONAgA1oW1LZ2tra%2Bk1gW1HZ%2BjoWrzM2GbS2N9tb8FiJXxgPNy7GxtuLklu%2FDpc9%2FY55%2BUj1n5T8%2BGr9J6f%2FYvFnz%2FLS6sG2nPItyOI1AllCkoQABDhwiSDKaGXq7ub0JSiPsT8yKwpnktmVpWKj4VfODgOuXLh41qUkspm0MLZsvE0pW1tbW7%2B5bIPK1jcgQNjYDnJi4%2FPzK0XHJcbWEm1LKVu%2FPgvlb3li98eePXjiUrlw4O95In7oQ5ce69SxbZ3yrcaPRpRIdY0ujZVSk1IIworoHP1IV6K88sr1gCeudq3VPiIC0GitomTjlVvHF2FvsSPoZWxDFrWIVLEweJtStra2tn7z2AaVra%2Bn12cyJBY%2B0dm5S1fmwWYWZxWjbRuVrV%2B3S9F%2BuI9%2F5GDvn7h0%2FvfMdz%2FY1rNtSvkWI%2FSWB7AQBiMynCGEJKFQ5zJzjXnpvniDBucuXtjU1VBCIUfZlFifTRvpi%2FDMeeaTUPQybmCFQMhgtv19bW1tbf2msm2jsvUNiDcYMHm2u7uHdLlnmqY6U6%2Ft%2F%2Bu3fv0GT5cAby%2BVfCsTb8hQAiSkyYCUDZhQsfpRXfO013WvQg%2FnNJvHVApQjFcoNw3lRly%2BuDOb2iLoMuVMES7ItoQBf8t3%2BSUE%2BH0crlff9Ce%2FL18sANgOTLy19ZvaNqhsvRMDUIa7f8%2BN679cS3bDP%2Bqnf9%2F4KvPtJfCtra1fD73lAcvGAlkAIUNIzhR0iiizif7iWfl7c%2Foi%2FLay95EX2O26TgCUfrmOGx%2F74F%2F92Z%2FtL%2FEPjejeybzvA9sJkhzGILBAvMlvPgjxkP64PbcVX0cCkyB%2BA%2Bj9jCsGAXqX5GGhXzuwpxAGYcxvHIEfrts7M8C2a%2BytrW1Q2fqNN3MsdhaH0%2BZyz927d%2BPJAc7Y2tra%2BqM%2BnRWEE0KQKmDJstIprFBTTLVdbOXw8HAFFy9enBUvSgmMork0lZPVetxw%2BTE6uixDcSpTFlaAhQWSAWSMkX5NZgK%2F5WTYMn5kEfP%2FGwHgNx4F5pthI4QEYNsSGARGgGzEHx1hDOLr%2BJuOT2%2BuFwb85vRm7niHJGQhwEZYAMhvm5%2FMN0UI2Y%2FsVTDIfD29dYUNYLCRsNGj6%2FJwhQHQH4cheWtrG1S23i8z69LUs1lph03ceXHn2odbRCRbW1tb3zQjAUivP3dCmg4TEgm4pIQd2tinns72%2FODFw4BnL17cz8O5SsHNOcLpYvard154dsn3xc6o%2BRy6tAxYEDgjEBKYxAJ93YnuG68MBoEBC2wM2LxOMv8f0TccdgaweYMl3pXRw7kQCMsGsIyMsZBtoV%2F%2FegYgsCUMjwYEv%2F1vCRAywgaMhKQ3c6Mxb82LEmAwFvgbxSLLAEZvPMhgSYHg0ehj%2B5vZUtm8SRLo19bh3voeGIEf%2BYl4tJglbEnIhje3zgDb7mu2vqVtg8rWuyt4SM53Xrb8WM%2Brt%2B8%2Fd3HbuGBra%2BuPkiWljVIQNjYtQJJNlKIWWinteuf2%2FRPYhZ3FvDuti4IK4%2BhTlN3w8kv3Ay5dusRxBqlpQyIUICFhIYUEWCATCoPANnr9G40x%2BP%2BFscAGhMFvLOw%2Fyuxh0MPX4g3%2BxoUICYRkY8sJGAOWZCy989msQH40linUF0lGcqKWmRgbsEG8V0YgACSFFCKQiHQmNqTz194c9WhZRBBCQhaAAIXCCGHbsm1jEUgYY15nYz3yEhBYFuCH22698bkgo3zLAf0mOlkQlsBWhCkWKUIhsgCItCAAkLANgIWMhBLA2EiAJQzIQArZYJy2bWEEaJtVtr5lbYPK1nuy0%2FL7Fxf%2FYDt%2Bqve%2Flw%2B%2Bu1w4vx2eb2tr69dBAhBAOnnIALakQCkUoSm03Gy%2B8tj8J1882YOPnt%2FZ3Zz2dT0MM%2FBojaP%2Fryc3X2n8kPhT7w99P%2FateWoipIJoiirVCCSjtIwkkDAGJHAJYYHlJjlogYVDETKAbTJNc74ZH94zATZIAiGEhDAypF2jbFRWEVWRXW%2B7NJfmWat9Zk8L6FBHEQmZ2NgPP%2FsdUgoCbDVilKoj1PWpXkVyM6nJboUqzDsyAHoYB4RQWmlSkUmUEpSCjFsmkREONzm%2FvnoFSaQiASkUhZDUMoEgGmFhSCdpiwBFAJnpbCKLMoyweJ1en2RQWrKMgq506SBisqb0mhiRS0nFBHZ2WTvn3G3hxtsyvP6RjW4kNiVqlIZ7NKQEChccEUIYcGLZIARg40wE0qOlJwkbyZkOpWgyIQPehpStb2HboLL1nvT2xYsXH9w%2BeqbTrx5y9Djnt385t7a2vlkCgTEIAUZSw0LCYAikUgoUJpXa2snm9NUVAzz99NPejLMiBKU7o3aNG7dvreDJHUXRrCvduI5mIglqxFo6pb8ROfX58cPxD8dQKTbfq5ZBgxTqu0ycjcQiULEgxo65YpYa5N4ZrqLJiTEASLwrmzeERAhkokmNaNbGOstya715ebV8ebU6XXOa9HAleHzePTVfPLmzs9ftUFrGNIeZVZjCGVQbG%2Bttbq8ygoBUrBvNelXT2LST5ULs7x9mDY4vatr4YOXYGTrVXsZp3koGmYfEQ9JkrZpPp9aVxcXc%2F7npjgjjTwx7dVwOwU5XekkYpwzCRENTMk0uWT7fjd%2B%2F2l8VrUsse9nsTHSOX4lVE%2Bn83phmzQYUv9wNyuyd397l2MZQ6UIFAoSwhWTZKSeZEnbJMmwoZ%2FjM5QjdXY3Hp8vrD5aGBgH7e1y6vP%2F4hfMXYXF2tpNtcOUNArBMgKSmsqx5WseTQbuL2USu4NJ6%2Bpk6x9mhCAkZ7LQlIABkEpOSLEnoE101IOy4vJzJ%2FapEpc5iLLOpjwzhzDSjY9PKjmdYsKLzFA0bJATCwshEBBhIEhxyEQEief8tS3d3tVmELnZdYXuL%2BNY2qGz9f6KQHxrjbsmPl27el9%2B%2Fk3%2FrUSldY2tra%2BubYhACW8hgW4AhCDlAwl10Di2tbLOf0J1PwQ%2FA90d%2F0I5nCgSKiVjvzP7wyavX4Xd1l9ebdddZrcmWhaKW7v7on7714A%2BM7fPmxi7fz4jc0M9FNQAyNLrGkMzMDuwE805z4hMff%2BxxtQ%2B1%2FrnJT9Q8Zw1NxZYTSAwyIL4h%2BS13aUkRpXN0k%2BKBy0uOX53vfmW1efnmza%2BcbFpRFWuXKYZGAgvV%2BSYXm7Ph%2BKyl9%2BFP%2Bi1PP5v64BiPrTcX6rQTEa5SS%2FvNYCIeFUiEYliVeMGn%2F%2By4%2BtKRT%2BtZ192dnSK4K7zkafTXLeZ%2FXswKLjbYWHqzlgQGWTwkWyqO%2FjD8B9cn%2F96q3VydtbzzNF0Awatx8tjAXzDT7zo4eEK9WsUpYylLd93tvz87%2B5mVH0y%2Bgl6czpZiElUYnhsJ6OZdNYO5NbaBrqgb6T8w34zUGTnX9KFe37NfPt4Pl7KFDQZhCRXbCUREN8bsNIab3ewF6XMPzn715r0HY3sgnUbc6ewOglmIB2cn904%2BuOTP%2FfCz320%2B6vWBNgMTCBCEKCiJscx%2BZdX%2B6%2BvHvwC3hrOTAUtR%2FVGvi4ygqNitOWwAqaECNjIhZBVc4MtTygiACn1H17hgfvdMP%2F70pQ9GX4JkerFt%2Fp7lyWdu4gXHSc4AnjsG2IhVYd2xKlAAGCHZnXN11l3dHa7tHly8cO47avzg3btP5DhQed8sPfuZi%2F1PfeboXPCXP331ifGUra1tUNni%2FSe8jM2Ng4NutfyhvfKHTo%2F%2B5nphG1S2tra%2BKUK8RoIEGxUHKSQhSYYiRfRjKat1HlDu3t30qMddaCfYKYX0aNXmrvjBAzq4ePHCq3naNas1sGRDKxq77mxsE4ywGfnpqF%2FfB7FBTJVIZAISNiNr8g%2F90o0FfER83y7fe%2F7gWj%2Fbi2EeZeEWrmk3jMCy%2BDoysgUCRUQUd8MU3am6exkvnay%2Bslr%2BD%2Feuj6G1XeGs%2BRTOcKN23Uz2OtserUp7JqDB%2F%2FqHX%2Flg5vrybDh%2FqadvjRkebEhIMAosC4GMQGmJiJIx77vx7M7y9IxxYBzpQLBaU5IWHF%2B5MN1buRS1JP11fVYhjN9412AJCUcsafdqPRtZTrTgS1Gr6YMcKSN3Js7OEWUW1ZkVwJqiHPbcOsyXVz6uvIKbvYEKCcAJAJ9bT8C%2B2YUZo5xrfHNFhUXkUyXDemKqTy8WF8lQKGvDQJjOAV2UYaPuWOVGba8s73%2Fq5eNfahyZhLTv4vuJBR2EEWXJHH3mqy9F9fnz5w8u7Ky16WMqTklCgUyZVNz3FdZwODIKYyqfUiNAMANgAgOAwSRASQQlCehAUB7ZzSSbpBNHGx930SjuSton%2FTgd8WSnV9NdxwjskSdUM5qxMiY8DCo9JOs1t47reLfWWF3XrV%2Bsvn9x9l397gf3Z5dy06vyG05at%2B7l5fHRGPdqvtRxed31Udna2gaVLd5%2FYvk7SzfB44N%2B5hT6y813irYDqmxtbb03AoxAAQZAAWCFQFZBTQCRJTaKB5O%2BuJj%2F0peJ4u89r0uH9%2FdmmpXI1k5G38n%2BV31075Tv%2BBDjcjn0o6ohFRI45BIjs%2Bfhf58xbdB0PogkTfK65A0jNJigQIeCOGEN7XnXXzrl4Oz4O3p%2B%2FNpT37c3PLZZ7ucUdTSZaQsh69ekFCMcjih9xrCO2aul%2F2xf%2FuCLL3z27nS%2F49U9KAbKRGwojQUpUF03ZSNPOjY9Rz0UJtHu5yvm5%2B5uHr%2F76g%2BcX%2FxJzz717LS6uFkuWi1YTmHLsgChSCspSknD0B3k4%2FXwcG3ODBXokkzZ%2BM6Zl8fnk5UVsgy2FRavPweMAAtJ%2Fn8JE9ppi8Xy%2BNa6nQXkHgkwOaTje4VY%2BUAHJoUwxilqkHFw68GDW8GRTFDdU7AgjPTSWQMyEnByCidI6JiinujaWtmaz09wVvd2I6MP7DpBE0CH6Mqs9YtjdS8eLP6bF77ys7enm3APzqBpjssMlUqtRV3nnJBUymfa2fNsrhf9yunRd%2BAf%2BtCT18bTvdXxjHyYOotibzhfeaWHgb3NZge6BTFAoUI93mwASKAhwLwmKqBokFBAMFACVep6cUqtaszMjO7KycLnmiKs%2BKHjS4%2FdO3vBGuvOOMHOGYdcZ6chAxQSsmNS18%2Fqei2AOtHuOo9adkQh%2F93DcSfGa0v%2Fac8%2B9WeM46W25DfUqNmpLv0rX769aTwZ%2BldfuvUvXX72HHfZ2toGlS14%2F0Xd2dn7T2%2Fc%2B1zxs3MtD0%2FmT3XboLK1tfVeCGEQMgYgwCAwOJRSEF2bhKIoo6zK%2F%2BOll17aEeuOc%2BfO9RF7fenU1pNOa92bn7v90osdXLjAWVM3dIxrk4QRBARu8pvfGIAxrxOlKKKUEs20VGbgAIHxYljUtqG1CY%2Fmxsgffv76mfRbr116fOh3RXgKmsE8woCFixQUossyX5bZfcrnXr3xU3dXX0NrOKsANKi0CkmBjhhiscmxo%2Bu6lkOWQnS0DouhH%2Foxm%2BsZfP5oNXz2q%2B3avncWF6PspbqsYEPaIGFsbKEOdS5pm2%2FAkJAInAiwnTIIYcsgbIAwaZRkkKILih0J5usZDGksKGEMRlYEXamKdbKRq8kGRYTAYOygFEp6DSSvsXFimSwFcZb1JF1LxGxuKlmDzJwUBE0axojjEs%2BPm1%2F4%2FAvPn7ACQ0CJon6oE84G4iG7jpsOCjpufhX2To73PnM0e%2BZKpxhImxQKqSNrmx5ZN7CxwW88B8TbcCYEHSTQaMkbpNmsK5s2Zz5fzMJn2BIbOY1AvCkilIVQqJ%2FIrEIBDN2soKJW3FynxrKSSVsWH00cLPWLn3t12POPXbl0hVEkv0FWzG%2FdurVXY%2Bk8tp9b6fBe3bk069mwtbUNKlvvt4j6%2FW361caneqbKf8zh7y2XZ16xtbW19Y4EYCQAJNuyASQgnGqpAkYWlBLj0B%2Bf1S%2Bfv%2FKffekrB3Btnx%2F1%2FjxyET1wGvV%2Bmz59Ze%2BXvqDvlH%2BkHGQ3LhJawyBCwsJk1ENonUCL9alxowlBEyQ0mEYI6B%2B5ESdAPHH07Jr1IYuzqAz1S6x%2Fpua15l9drf703csfn3yptc4twFjIvMYyQhFdRF9jeKDhq2X4meN7P3l39TLcDHsBleF0t6iUPlrH6Gmdda0UYwTF7tzP1x6gE2nCzHz%2BmOl%2BTNfn9XO5%2Bpnij5yc%2FM6d4YdVvq3r99LFqdbeMtpKOkJBCDUPzQBq4Vws6JPkpE5eP01eOxy8axOyEcZgLFOMH75pMMbGkkKKGuVgtcCn3TTsswsA0eI%2BS1R3YBODmQg5EQBhhjbbw5cnejozX%2BWwUseQlDW0%2BzMxFFgDxw0AQVRm1QVMwsbc3ejVbA9iPdciJKe6lNz60mXpjkt5qcx%2Fbmw%2FccKX4UHHOHQYPCc6Wh27DclQ%2B%2FM1RB%2FEinLIdHO%2BvDmf2NQvb%2FjMxOrenb%2Fw4sVHbn7D1t1L925%2BmVtwMj%2BlPyX79bqoYQy4q8BeFZAwQqU2QYHX5jOyD4CadQLQHK2gY9OmV%2BCr5fQoxktk2OF2ONMtMLNgvp%2FsnEYy3mFNVACBYAGiAkBCgiEoMCtBKbe7ZMbPjf78yO2lPnP73u%2B5euWTbMKNP2pTDC9O537f%2Bs4X%2BmTOffGg8uGzk7%2F88qWrvqttq%2FqtbVDZer8Vtb2QBg%2Fi5cl3p7XLwvVYbFuqbG1tvRMjJGMJsLABxOvPZBNKeepAQHTrKOup3b5991Sy%2FcSTlzzNhlL7KGSetZwP5ZXr14%2Fho%2Ftc6Peqap%2BmpgIMMjiMbEBgSBIQAoAGrdGSYU4VWcAQYABMpfKQbTFBNZ%2B7e7Z3b3numUvzfn5AKa60hy3akRCEiko%2FdvPDFvfSn%2F3yl%2F%2FPNSsAdnY4A6CopHMcNw0AulJms77rppOT114N0tDcm%2Bi73ehP15NAmdkPzjXpGw%2F8fx7e2%2B25%2FNTlMszmqgXZTQaMEQaDRdq8C9tuzS1bVYCUGBIwtslwkmEnNgB6T2NB2koHksDCYUOmeciYfPip0BqrkQGAh0HFrz%2FXgCtpJrvM1HexIWqlkyIpiujK2PcPPJxOvPjS9TUUkKBWSoeNDTCf0zzLnsS40UYar6lVcCm4DB85WMxoAux0lYvb2JUoECBBw9loNBAGsrV3OcWqUBMgEACaABSoi37Moe%2F6rkRWUmSzM8QAMm8RQR9kxRBQwKBHmvtAJmNm1KQD6HbZFS9vfGGl%2F%2B0rdy596LGnWAXJHw3FkvLqqzeONPGaxlHzoU7uHZ47v9%2FPY1tU2doGla3335XN8k9Z6vfP5%2BNUP1%2Fq%2F3WgH78f%2FTaobG1tvTPht%2FbxiiSwhbBCpjSLVnBXehOrplnO%2F432yimcg79gfGp3dbh3rpATmcs23Xns8v%2F2y1%2B%2BA3%2FbfOdD9zwvjtoyE4REopQaHZOB1jHtLmMGYIpbxzinDdTiplUFGiSMMEIFoONVoRlaR08B9%2FT58lzXz8Y79ur47M%2B89uTHptUlNriRgEGYUInS1zLcZ%2FjybP5fvvriT498oUCB2YwV1NyZX1i6B2AkNpSRWLXqrMQMgKyeCHWDipo2UwMvqS7p9aiiJt%2Fp%2BJXq05Hl0frHn7z8jKc9LwtVbfKbvZoZyaYzYQAD1AmSbKW2mkLEia3Abg1DkpGW5ZCQQQgLLMkCIyBR7XPKnlqnLjeAIQiXOvXMJjJaGiQLGWylWl9HWINJ0wZardQKw4jblQqQ9RzQkYXXrZeDoGHBvlZPsupXT59Oz0T7WoVeKkSRUnGUut7Nf%2Bbu%2FZ%2BGF%2BBogA7ckdDq3maT5JKkcDLnpEKDBBhmfa6nDxZdgh8s%2FrOfvPjhLgeaAGPhbFgfuHnxo7q5hi%2BvuR%2FYKdxgDBDsABydPA6AoULiRqu40XIu3FY9zCGgg17cmBONeebl0JWx7S6PGZqR7JJ1PeMOm7XCcBIrj6npWl%2FDdRmsC5syTh0YzEMzM5%2FoRrpmFpu6nk5rn68uBvqzL638w52%2B%2FMrtv%2BGZa9%2FpQ9n8ek1RHiz9b5ajT43eyWEpU8Kd%2Fte6qfXu37y4%2FIHNNqhsbYPK1vtvUF6%2BePlgWh9P9Si5fv36NO97sbW1tfUNCUCYwIjIEEIZr70ijAArI1s4kVFk6dZjbSfj4f3lIM3s%2FYMDr%2B7vREfNdfNY29Hh4b2Nz4lLly8rpxkiGxhhkQgsW7yV9OhAkzNme6U7bfeBACOhJCsADYOEur6vPYwjQGulZzPyhQer56bnH3%2F2mWGqu1GUDRBERFFp0Z9puLuq1zf3P3d3eQQUAMYRBmC5XqJLOAEkJEEHA5BE0pv%2BzVvShLRms6BfzqBtDAYK08QZfPb%2ByTVP5594oro7KN0AbpNsg8EY2X6X44QwDZqxo2tC6uQCEg0kBCkileI1CXrXgXOa0zLIhAHAj36z3nxtUzSfPCvlJNMm8MPFjYGOAp55PkMQ683pAWMT6VQREdkNxy2W0%2Fj8rbv5aJ3LUApjSxI4QFrYld2NjpvPNmAkPdNrCj%2FzxMXfsbvz3LiaZZPBtmwgHarK5bnQOXMJ1niCkAU2hkwmkXxjykxykGby3MxEIOBcz9w6X1waO6nCJOME29BJzYRo5jVCSYKFZprtiZ4qkWZjn5jGlESiwiyIcVrymtUKMZvx0tKX0afvHD5xvr9SRn69TumuX7%2BbnYC%2B76kjQNcdjuuzk%2FWNk%2BW1oXTba5pb26Cy9X7ryR%2Fpz1%2FKk%2BvNL5Tpv7l%2F9hc9sc82qGxtbb0TBwpLRgYZSFJIEiaQHWGHLTIjzprW69ULN2%2FUvcjC9y%2BeuvpgM5ToiOa8P9bNkJ959fYKPfvBa993d3h1vw5BQJOJkk6DbdOGzB52VjunpbJ3SIGJxRkXzePSd%2BzyifN7jy2u7KxT0zSO42q1Xq44gRPxb%2BxxvMxZy9nqZG%2BjzH5FJzQbyv043aRnp3mljt9Vhq61eShchZCylJW6OxO%2FeLb8iTv3flGM%2BzAPcsaydLn7FC3Jw9nLm5pXK9dSn2z%2BfvjugccWw%2F7OYr1ev0J9yfki9cVNu5XTC%2Bn7Ox49nnMMSxdkypoc8ZfhS%2FDF1fp3s%2F7xfvERtxlIxg1sh4iU9tu03zDQJ2XzIDcknIfG1864ee6YjQICpUg5RSAIUiYt2QISbGxAwl1m0YYFpO%2BcngIIIligGf2SRZsIY1kWGFKs%2B3p70O3ebUznmihkzmvrJ56Z%2BP7Z%2Bd%2Byu3ewc2N3aoKhMWuURMZoszYwH6Dq4Nz1vXKn1RlOy5aIrirOunL99OTL8ACOCsw6MOFYbs6ZGfxJZfefOz7bPe0%2FtV8%2Bp%2FqLO%2FXuqPvQTdNHq3%2Fw4uN%2F4izOT8vOLRA4jTECsqTO6%2BRPPzd8skzr5vm%2BEi6fcW7tecVmMqvCnzp7ZQIMjc7sJjvmHDwh%2FdAzO0%2FPdmdHJ4%2F1s3NTm9bjXtflmew43l%2Fkbvtg5G5YmRbA0U6%2BepHFsZfjmc0TKxocXnhleeJnKz92sfvkzs4TJ%2B3qkbuOMmOz4YvJF%2BXnY%2FNV1r%2FSHdL42HRRDC9OrIYNu22jzcslH5y4OzlbdFf%2B7PMePPHNa6W%2FebT%2BYsTPzJN%2BdmW5OMfsyILufrf8PzpffXDvI1f2LwdbW9ugsvX%2BEq77epC7cAoMVTvh5ght28ltbW39GgIjCFPscJhEYTuQZWVTKc4UyBal6%2Fs6zJeGk6OvCTlb6Nq1p3RyetADTM2nbb2z0KvHFHz50qX7Z4eU8FSVVpHDklomsjEyjwoe2oUnHj%2F3wSee7Y9OdgZ6oVJQgBs5ZvtJvXrr%2BmZ1lwZjOkgTSa7GseAdOIHPfunGcx967FKZzYlSsa3SjdEvm7qNbt%2B5d9uogw5KIQHqtBH9jNlqnYtez1zufuji5R9Y7D8z5W6tq3GayJwvFkVPdd3OrJxTe%2Fn0vjbt3nJsG69XmXI4DMYChOFwzee%2BcONP%2BOi1VgIKLrYTS9FCRPDuRBapt2zJVCtxg3CAhETIyBmWkVSCFGC%2BniBAEoCNUwBvHpIQ4g2lDF1HXQEdPPnY1Y88%2BcR8VfaqSk7RXIyEEbKiS0VEMo7h0re2x9QlEFZmiVExKTabTcIAGGoFA5kAz54%2F%2F70f%2Ba7upc%2BtLsw%2FVvKySrc%2F%2F%2BW7J%2FXV29h%2Fysc%2F%2Ft31%2BFxbdunAMmkMBgF2Bwvz3Pmdx4du3XUrWsJixmykODTMaq9LrPnqTQFg0BtTiCouHew%2Fff7ixZ160KZus%2BkPWmd0uWuNiwXVutM2nRtOh0DCAyRswOI1y6UB4ODy5Q88%2FvhzDw4PNmvZtTVCF%2Fd2ntnf%2Fb9gdf%2FunXu3l%2Fc1Z75m3Uh2d5mPbDYk8znHE4d%2FxN6lK6WJ5JthxbFmx4eH9xOArpuYoAC0Rhe3XO8tdX91dnFnd3uqsLUNKlvvu%2Ft57x%2Fb3fmX7pz%2B6oXypbP818bTv6o7N9v%2B9dna2vq1DCCjR1vTpx1K2UKAU0ZSgqBE18psWTc%2F2z78%2B%2FTZ%2BZgq%2FIWbVeNot5%2BRLJObi%2BVPjD%2FwGX72L6H9Wbc%2BdXjpiYNaaNXNkgwGRTiEOBnOnXBsjmS8hhUH07lGe7VsrpfpbzjRh7s759QPbs3TZtIqNYcam3T9b9cfzOPjv3t%2B%2FfPBS0v25v1ivdfR3bh6XNf11ry7s6njkT96NL%2B8f7IzzHrVCFWVNfy3n7z8n%2F7UCys%2Fecra9T6nUBsZuGdP4%2FrOtcqfL31%2F%2BpnHdubqZsuzvYwdZ0dOnkzLSW0cr5342%2Fsyatf95n%2Ff1%2F94vLmFb2p2l2ceeDLpEvP2wpPwYem7Zt6vZ9ZBZiYWYTkiVCR5YPnFC%2FCAC%2Bsd4yUrYHHGasVlfH78Tvx%2FiQ7kbIoSJoywSfv1ORgAp50hKabIl%2FbZO2IBlbnZx31k5Mnh4uzwOqy6cj4bGGQMtrkwxdMjn910h4PYnejWY4MgV9C4Vl84f%2F%2FuM93ejt01WqaNwmlbJJmUSIKQEtspQARBRjc6pp3d%2F%2BPeyz9%2FGU5gM5uxs5mO6FOFg8o%2Fvdh%2F4sVPt%2FOz8yVLq7u5fuzW8Z%2BZNa%2FsECqrG7NQyZSdtWUE2CAJWwAueJdcTBNTNqeNLZK%2BdENXlsN8dXIyG2kRLqHCbKTBXdXDwjz1ZLfz8Zvr%2Fb3FbFq5btSqJXtq0KaGjRxOhEDw2Mns6VPdHstZ7Zq5V1ZTQ21wZqf6gcr3PH9rsaidG2nLts%2BdjldPj76jlN8r7h7z1dH%2F8OzGvY0XHOw%2FmO4tligXG44b%2F1PnLy3qtbv1x652M0a%2BGWPMde%2Fy397der5BB8uzWSym9JVu58F0WndnjPVnrNsr%2FukLl54d74LZ2toGla33z1xtPp9f7rTZtDvJq6%2ByfjpmbG1tbX1jQgIAGXCoRlog4xZICIUAF5dYwmp98sKt0yAfmI994GByXtgZiIDugc9id7z3tbsT%2BWQPs0WH5sJTphIZkSEIS9jibfUABG0v2qLR2rhJLywIRRlRXZy1a%2FufON8%2FOJ5e%2Fgon69UOewCtvTZP2Jijk9O2s1m2bhEh1KJMm%2FVX10fr1Wpkbt4wJpFItFYrl6Tfuu9LV3b2y4XHaunaqtWT4hZEtGa1gK4xczj71s1OutmH9g%2B%2B7%2BPxxZdPTk7Wtxln9Bua2xji6g7f8%2FTud%2B%2BeuzTFMLVxnJQpjBThZFKZidc1mhBvNU2ThogI7M4ma2CKAyMcAMZIxmkXEZIlXvslSACCSAAEAUUISBtsAxhjAUJGADghAEqhNLquG6LMc5o5S900I8k1JSzSqkRRdKK2KpGitSaM1GCS0rZhAuDhVwugh1IK%2Bzvnevqc3MZZukjZ9UYItUZt4HQijAEkhAwABolWLJRhY9tAlla6WkoJOQPE6wIQBQZpCDqnyKhL5aq1lbCJbFIosDHYIIRBoBygF0UUIxCv6yXAbsostjONJQzGpba5Ynbt0oWzB13L87d1nCTJW4328enx2eVzszLynlmxnGbP3%2F3awa7AGGCTmySmaQ2QCbzsfPZEnz9ePzkftmOqbG2Dytb7a1C7WvwkzE%2FoCl8jXhy6T9YJbS%2BTbG1tPUrItiwAUNpAKi1bNggZJJssRVI3dd39nI5vLv9VtXPnuXbI31Qu9auz%2FVlPiZZ5Fr6zWXztwRc2%2BMNP0ZWdIa02mWyybRM2CQASRIMKFo9K6AAwVUpZ1E00d5ZC4egCdbHcGf4cPfmBfPGu%2BKq5U0xuZncnwzgzhc%2FD%2F6qT39n62qDvRWxQy%2Fbp51%2B%2BO9XKCDQgIKFNpRtnq83HpR9%2Frn9m7%2FxOmx8sxy4nTZNzMzkn4wCDJOywIqzVwt2HpnJNm69cWh6cbjpeWtsCxG%2Ff4XvP6dv6%2BUEti%2BaO2rLaNoRoZKqZMRyIhEYAWWhJwBRU65Ra2rx07jtKSkHDClFkycK2DSTQcB8xhFrSZemMpLU9cVq6rtZEET7ue6j0WRFvEkKyCwyIUQYCojC2fiKgMUXr0ZTZlC1tsAFZoZrN6qoiwUAmIcIYhy2pBFkHwxlK5vT9qJGeDHu1Krqp%2FfPDqmijTBmcYT1MItlac1YnogECCQmwAEAC82b4QqQTnJmljZup9M5eFJFgQAQUqYgZdLacdlbXlAHLiMQAAuCRUGQ8F4PoYBQC8TpjwAmG2oTBCL02AWLXVfsX%2F4qjuz%2Fd84c3q7tAE9k5KwBxo%2FU%2FG5vvLP15lXDjvall9t%2Fs%2BQ%2BUzemZd2E6YoTDkjjmNs5y7DSLGbfMT9y6%2BdGPPv3cZtS2qLK1DSpb7x85L3q1f%2BH8pfuHZ52j%2BTMP7nxs7%2BJM28skW1tbv4YMSgQmME7Z2BgJ2yAgs5RBs%2FkyWG7qS4e1QN2wj65cucLL1xdljn1mUtOtm8slenLYuXBROiu9RyY3HKFUccg4bAAbydCLDV%2FPr89d1VqoUZ3IpRhTwR5zFn0XcfHC%2BWv3Dl85YT2f53Jp3EcZaQjg%2FnJc79S%2B300VRbdpm348%2B%2BrtXE0MfL02TXP6py7l01eu7Y86N405LZfedAoXZRIYgM5IgZVWy0xyGjbEfLg4n33k2skXXjm7L83tj3z02vdf3vtw1eNNcbqMzWkyQUqAUSJlNmcDCcTrSomWWSsAppRiu0TM%2Bn6qiqBzKsLgCMspaITCdqISXRe9uwHnI7uTiIDUoxUV2wYMen0uXiPeIMgEGgCtNSQrElNKywZFskKZzdElUCIjLFqtCgoRtTkdfXbCztkAiYRQa40CEjCmb9269eSwe2%2Bn7AfzTq3VcBYnadKYTKMEgjBGsswj%2FGufh2wDSTPt53P2XYN%2BpiJhAxQwDDCTOlvYOMkMBIDFmyxkAGQkPJMCOlGMQQIQpAFkpmyDLVsChOy0AmcqNGv1%2By5f%2FXmOdm41ErqOcZTAAGQuI5arddtVmPfCUaacXb9%2B%2FcTaAJCmG0oFKn3fd%2B6W0xqYJl5KPxP63Ony6X5bVNnaBpWt99mFuvzE%2Fs7nHhy%2BsOH54N9a8uOXzz853t7ee7q1tfUWRpIhg8QpYwNgTBCohYmwW9rUGO6aL6we%2F7d0YzGjt%2F6cAz5849beYFQVHG%2FqT59%2F4ue%2FeO9A%2FOBz53JcLlp2tbXMjMgujCWwEWCsBg1WBn3joJLyFNm6YmGFkRWNZtltirqclf67x%2FLbL1z42vGDB1rSbXanHLI7GynZVdUvms91fGdXWhRUzlIvpY42rMXMtaNrgpHZjLrmmuuPRPw5lx77yGk%2B1nXhadnWLdREKBR2JggFBLYxMnZEuLZ%2B3a4Gf%2BJsuPrE8qVXffGCPnZQzh2fXi0Hs81yc3a0WS%2Fpi2SVgnmdLbuKEggSQDVwRxV0tLrYDF3TaqXzhSFLMWRkCkUkcjhtiZADG0Il6Saz0nw97E%2FDyWgwY3dfgkCJi4pVSGQ%2FklPAGfQwwJ5Zj7gwtR478AbG4anVrJxOsRuQY%2B1sKW2DilI0mqNTlHS6Kx2tY%2BojF5Zwkftar%2B30Vw8noLFJ5meekQNlulOm%2F3pa3rvRfc9Ts8ejPxd9H%2B4Y52rFjVppJmQkkIwwgHk7AoMCIHAJdcUCd0EzAAGCInoxQGBh3AxINki%2F9jMfMszFXCpQoD1cRtgARpQSapqErSJDYsCkiOL8xNj%2BkhN%2FtlSlF9OwqVBmyQT7ND6Tx7885HdZvDdjN%2FvSnc1%2FsaOXd3zxtJ9BYcrRp5EIxtMZpdAgjkrW8%2FHisf%2Bzk3sfufbMR5fbosrWNqhsvZ9mWa8c7E%2FNFZo9rHS9DY8x61iztbW1BYAemSdYbkJBJGEJycZIFkT0Wfoj6fbGL7348tLc2ePKig888yxn0%2FlZQV6OdaybGzdObqHL8PgTj083n5%2BVos26tUYXLQJcMA4EABZ%2B5zUEsgh1lK41Q2SoIWMymdZzoJ9f2tkbX3zAZkMEUKm8IeH4JH2gJlWYmm%2FcaNkhgRECAAlgkK5du3Z5f7Fz%2BsB1M04rC8lIUrFl0gKBDYKCqyTSeCpjDpTdoXxg57ErH8lOZW9Zd5ct8%2B5qXFWPLi1wRBEQAgsZZIN6FDKOStrmNSLh7OzsYO%2F07sSDxNmQ31gNATQjlCCEsJ2NtrtpnJX2RyjA0KBiEQBIPNwUCwEIgyUQiNfZvGYRiz7%2FH2Ntp2M9VUs102okYAlHUDrL46oQXbGncUKed%2Ft0CylcIlX0%2F9TiFoevriFJYxC1UoS569PnV6f5ZT4Ij1%2B8%2FNTeQc9s7cmW0Gwxj8guNGRGm5wbk4lAb5tTJBlem4HIobCIpgYQQiAR0EkdLjYYW9iAxDuQwL0I0YkQaQBBQgJgSaUEQWREmECElVikbEHJvHjxYrl3k4nMBEopU5uIoLUNPj091cEC8a4cZeXuhbs3VufFDE4R6ilnNGC2s8iT1USK6OlhMwzDS3V96UifO3%2FyrLq5Jra2tkFl630i58fGkx8N%2Fmfr%2Fxz8IfHf37j1wav7l7wNKltbW28SkrGcYJEBVoAAZBwGHAp1fR1mh82f3cQ%2FPGubtvvRe2d%2FYuFj683B0A%2FDAO1ujtTx9x%2BPJ%2Bgfu7z43hsvD%2BpmAlfjhpABLGEQIDAYUiC%2BTiIAJBfR4aJCSxxRyUjJotEPZWrTB%2BblGXNjqqacFLXmoSycnrlehk%2F1fMd8yFSFkzL8H7AJmpiyEZB9V1pb5Z75E%2FGf2rdnT053Ws06pVMlJCScFhACkI0l2SkDIVtOu%2FXqNDF3ZKiEo42Mm2yteWphQOGUQ0gYWdgCmehNgYogEhGmgNhs1l88ufn3d5f4Zlxbenm2bAfDZ9d5HFBgCQmAkCjQCRPQQDxCRlCIDs0dq4ToyDid7Xxhdfapo1e%2FtJmJx1qQscmoY2ktmApAaFBzmfKgxq6ncnx25dzeD%2B7tzts6RWkRKjv4Y%2Bf3PiG%2BZir1iCQLs2Rnl%2By%2FNI5f8TQOlFB%2FdK%2B7f%2FciXJvx3IWDZ3YWT826J4nHO12Y6o7d5RSkjOW3zyo2AoSAEEKCXqqQ5q11FQmEMUagd4vSGAoqUAAISRgA0gAJUhERIacJpUHCYCmIUId%2F2%2Bkyz%2BE1s7bq6Qf6FUI7UI%2Fj5Bd3J429ZyHMO9Ho4Sfb8r%2FaibstmXQ%2FdkmGxXG34kfQx3YufGk93p7aK%2BTRzgixWZk51yf%2B67sPPvjkE5%2BcqrbtWre2QWXr%2FbPXNhcuzPaORpI7g54%2FeXB69eoFjoPtZZKtrS0AQRgAJAkSwjKWTWCZMEq6oSuLvdNuMS43R0er6ewshiGrnnka1u38wQ7RT%2BnlauPl2fHhiLh27anV0a2D%2BazU1oxEKdFkjEBCMmATmHckwM6WlhKyU3ZKl64S2eQo2a2HYTYMF2Aes9PcRERrrZQyTRPQUzabhnDEmNnwfciABkA2oOu6WsceHrtybmfWLXI1w%2BnWaCUUBIDSshKJxAKwgkAkCJBK2HQkrUYDMOlsppVQRiehsCIgjAGQEARYIEAPfwIBCXDv5MHhyYkAMMDDRQELCfMo80CMwFo3bO%2BAIRC4AQgKCAQyGIyxsWQwr3u0TTq11g5eOmr1eGVeaGBoMKIGE68LGOAA5rBjTlen33Hlwhh9KkmrTYuu313sDKIzFYR4TQSzBQ9GQzUVdz1dMpnbG5Y3j1%2Fm5Lz87dL3PTEMewc2u9ENJG7YiLcjGQOGtB0QSPDoFFAgQJiH07sxAnoREKC3WcZpScIZbspEUuDEEggJeRi6IVBLACKChzqPI03ZKUDYvE7CAAgwmtTttt1Xbr744gr2wabrGGtr2cFjw%2F7l5z76%2BVs3z4deTTOZnYFpoi%2B31u0DS3215cdaN%2B%2B2Zwtb26Cy9b5ZtPEHD%2FY%2Fde8ui93jsa668afH9e%2FqZ3vboLK1tQWCgLAQKYdJK1KWhbClwIksJHct5icZn5vv%2FMd3Xsqd3W539uP3%2BDPquYv2XCjrynztvP7z%2B5vz4pkrT37v3Xt3%2BzLLSpoAySAjGyPARgjCDejFyDdmWzWFlTaRyBFO47AtQkYZbVOPoC8lEtcWMG7W%2B7v709lG4IYUTaVan713fAhuYOg29HNWnTZ9MPbww%2BfnVzZns84iU4kwSNi2DCAQQgAYsEGAkCwIuTWcAoFbpluJoCgjUIRTyGAQgkCBCqRBAARBCUqSIHryVcZjzvEo884%2BzbHtggF60Twbux06MxZiUh2CgEYPDQwIJFAiJ5isyKFK0gvFGB53dr5wfNrsMw4AM0FttAoUUIFgNova5pvVOfIAbsFvPffsc%2FdeMuv0GF7ve3b%2BAX%2F%2Bx67%2BN5%2B%2F9SIkp0s4jQWeWLX1gVl33diXqZyVPItG3%2BiawpKL%2BZ83vnZr%2FLHp3p905erHs7%2BUdci1spn3wJbzu7X%2BQk0IIMSj9b2ArA0AY96VAAgIAQS0b1BzMQREg5SNVIrAVqSREgElTZpEAORUE2iJ2ZuXLlrfz%2FxoWzIEwggARTS07nb%2BwPH9%2F3IvXmq5e4KZLXdGOpr4QOov4%2BCj6%2Frc%2FPz%2FVh%2F8%2FB40aEEWmM0Kd3T2B27d%2BfiT176tPhDbEdi2tkFl6%2F0RbvvyueBS1nvSneabN2%2Burl3aE1tbW1vYOISEjIXDKBtYCoUESEJBl6U%2FM8vV2ZdeebViRfRnpx%2BFUrrz6tWpwf31%2BtgP7h6pgytXLp8tb%2FWDoq6yJQpJQtgyAjACg8C8HWNAVjgCbMsOKUWRlFZLIjKztKmRgkRAGoGh1gpU2rlzqESiKZmmagEQkJAJ2Abo6P%2BIsUa25ppKsBF%2BJFZgALAEABK2kAzIGAXCTsgkKJYCIJwGjG1CwgBYSARkgnlDawACEBJhzDejlNJaK6LruqUeRhHlI2FVoIebL2xsBBjxupqNAIkIgHGsBigUwCQYkUEWUKGZacragDkKXICIKaIpnNDWs%2BRcLs73iw8%2Bff72y4cFEpgmevGGji4iIHlNBINxemQSq%2BSr93356NbFS%2FPZ7v5elp4Ufi%2BhQrZBCBAYAEM8XADwe04pBii8TnwDBlm2XEqKlCWFIRtCSAorpnEc9Wva6pdCpkfvP77jjRI68WhPbTLCIVmR6tYb37lz8sKct%2Bg6JmbnfFAOFtPL335t72e%2Bcv986rCYZoBxnJqu42eXfOrugw%2Bcm%2B1oxdbWNqhsvU8uqP7Qhfhfj9hM3IBfqJsP9PzuVsKNra2tb3GSINKAbGSsYltggWVJlOhRt%2Bm7223zisd%2Fd9lW4umz4%2FPSj1472FO313caZkfj5kbX%2FcslXwz92cnfcESbU6AkmZaIkGVAALZ4nUEqMJgxoXzjNgBFERk2pVVUmIQTN0xKlM7ouvQS3FsU3F2um464RV1PywjuJT9OdzBWD6XmdC%2BGI%2BgqbY6ppAr7RkDd5fE86xiczfiNBALYAAaQwI%2BsnzBICAAjWSBQYEFiGSxUJIcA25KdNsYhAssuzTb07iuN0QzQgQiGgNYd800ZAMaJMZJJuN9hmNFP0BGNKoOAwAhhBAIlWbyBiTahBhToGuqwEacFiY0fAJhiACUU0MQCGgTLiSmIiSqN3IYQvXMdjULbp34wGc7t7D84%2FOwpu3B3rGeNbq%2Bc1rae2HBGlgVFUFqvtZIJSqfWkWvxklmbe6eb775w8btUrq1bwTh5exZIACAIIV6nN98UmHf15lJ%2B%2BCoEEAAIEszrQiWImqbItZWQahOZAEKlRflDu53un3ZJ1WLyFJFDW220QNP%2Bmh%2FNg7GMXYhsiIfJX3aRpagqk2f%2Fwdy%2FfyeoCZrRmbb0hmnz2JrfdXX%2BkXY4a9OzffzoLp9KjhvpNXGRmkCUfIn6%2B05OPv705U8ej522Jwxb7yLY2vp16Z1PXnnsbpsbAzW4fv36ytvou7X1rc6SERAQSdeIFDYIECmnMtUoMcTO3iH90Wp8%2Fvlbm4Yg4PHdxWxvf3%2FoGALayTSuN%2BtXXwZ47urFbq935FxBa3ZaWJYMSLyFeAeyAUwQGOFeOUvP0jG1TlG6zqVblyJ8%2F%2F79gqgVAIIAWrauK8D58%2BfD2dGcrdbqR8oD2EEYB%2FQ9Uh%2BZAgFIEl%2FPACAMgJElg4VDFggwGCFFKDpFR5SIXlEcJRVGNthyAgZDggGUmNcITKNVKsk3Nz1kE4EETEwA4DfP1C09sl0GZAEkAKVAQK3Uik3EMDCf87ZmBQAkWgOw3ZU%2FIiUiQ46ontfNxean2uwHPv7t3%2FWJZ56cU9DYODpqtTKf03d9UWm0JJNsNBEdXa9hgsQdNPPq6K%2FdvHnDTIQJEG9PAH70BMtvTIAeOaiAeG8kIISggAAIMG9lk1mc3VTnJaJOxam000hNMUZ3dHQ0TQARwRslQWolwuLg4CANBCgtCEw4C9mhUvopik%2FjxRdfvX6WAKUYC1EKrT19VVevXmVI4Y585smL6%2FPuEwAbACTdbC5Nf%2BTW8bMsbG1tKypb7xORT9bN78krf4Cv3Ov4%2BfRqw28v8W3b6yNbW9%2FyLGEwkIE7C1DILoFkClKUKMO6LO525Sur4%2F96w5p50n4L9W%2B63M42q%2Bdmg%2FqC6yvoJ8bV%2FD7ne%2F9ezsb6ch%2BU2gwWSBKAALAQbwpTwEbGfMMY42yNRri2aeoKOO1EUWbzOp%2BvS3mh3%2Fz09ZM7mGXA%2FJTVELiA6LI9Bx%2FdtE3fCs05bcqwMvtm3VgaqD2zJCuse%2FZyUhQ733JTkHgXtgCBkQAQWBAokjBORESLMCki3CTCEkrsyDBuyIjsQMYCoFEQUJjxzXhqs6HRAPJ6pDQzORIjkUQE6wFXhav%2FXwIMAqiwhBUpKEE3UqNBA1PKhZGEo90FEFOdV7pMYNO60SXPCrUi7LbMcYCuU68L5JHcyR3ZhRKP82yPKw7O8or8vc899aWb9z%2F1YPUqeOQB%2FNzTGxImaLAhNnQTM7rIwepG57h78aguN209rczh6hOLKdT1Ru9YAzFINhSht%2FyEZn4N8478MPJBgEECP%2FIzHvlnbLvW6Ow6hVyiRBSs1g01ypdn%2Bk%2FPdd1ZNeVkMCOlbQTkMfDhzG8%2FnVwipGxOKaRIF0npKMrS3Xf%2F8wd7f%2FCUE9G1A00%2BZj2nXjqr5%2FHfkbPvvntIFAyZH4j8azf8j00%2FhbNOsLuG3bpJeAn%2BxZOTH9u%2FsFtKx%2FakYWtbUdl6fyycTz%2F99BNdn0nXMbc%2Bf3Kc3l4j2dr6FiYskI2aaOFUiBKKQhTRoWLjLKXzbPc%2B%2FYOWN27cPwVQgfPi%2FPnL59AwDxgfTOub6%2FHFF48j4kMfOtg72He2vk3RRgHCIpFBGKxf0wjlXcZRsXoiSLIJt1aVzSRdt4puFcNy2ty4eefWzfUEYEoBbANANh6f9VP3R6gIRXRdJzBkAiCSFEqYJtTGlmmnbQMC8e4eLibM61OT1lEOS3ev72%2BW4VY3uzvs3O%2B7W9SbZTrsY6Q3vV3Alh%2F%2BbpLw9ZflZ8yAXnTvtgoPrRoTJCQw4cxCAQwGvWUnm9cZHM6HiwHThM3rJDITBP00lWmKacqcTEua2%2F%2FzsqtTj3vcZ%2Fag1zpVOznss0qAEqWpOWVb9%2B30XG6eznw6uk888%2FRv%2B%2BS3%2FfDjl56BfeiDDiQATDYSkhwZZYly5%2FTBg83qNP2g%2BeWjk5OTsTpTQu8woApgzKMbqEeeJzQbQDLmnQkAGyMUYAgA%2FNYjYhE91iRVciLTTkuOzsN8Hf1R5mfv3Ty%2Be7o2QVArYF53MXi6H%2Byk64WE7bAjTEBXSka3VPfqsr3yyisP1pTh%2F2EbSAz05qmnnjIRVquTay0ujz%2B%2BX%2BxBACBQkjNY9r641KuvPjjL7Vno1raisvW%2B6d1%2BcDj5%2BbbzC8MRA1894398MP72bn9%2F2F4g2dr6VmUCgJSbRARIVjgKSgjbWCgVY9fdgl85uvNTZ7qHd9XP6b7%2FudOd9ckTe%2Bekto68%2FSD%2F%2FX75JcV3ib9u8%2FH7s8%2BE96K1lpZQhAHQO67PTKzA37AzpYghSl9bqnfg6Jq6KH3O5lNblOPZf3f%2B%2Bh9c8YUk4AlKNF3f0zoaCT0feaDftfuky%2BkMOugKbTZ0MINphEIEhdLRrQqbiTaeTaWbYYs%2FGolO6b86xs%2BfTkcX9o9yyK6bMeyenC7O4rF%2B9vF5fEAng5psLFuylAQRdI1WoBk3MGOZ%2F9b%2B%2FLdtXs7kvTuEFmzMLXS%2FmjotCdFtuhpdlMADJJ0bbxAygFowBpkIOughGpUqcpf%2BI4M%2BPHOe1l2zgDksAJjIiVxNU4VFYHMJLsLjU3vm9is7uwNtStJR0rbSprUWGgu6QtnZLJ90%2F70Hl%2Bqlx1Znm72Xju%2Fl0eeYPgdfguvwCjy40NfcqJ8rs0utN2WqqnA5%2FerKe3u1j74YYfP29JbemQHzOj8ylwDx3uJKAUH3DaKrAErpKEM%2FQ03kBC6y%2Bkn9pnR3N%2Bvp8Oa%2FE9zeAIuLlFta0teukVC6XDf%2BrItP7W42MQcyQYiWMrKi6zfdYrkq%2F%2FKlk0%2FfOd2diNg%2FqYFndHWV05P277188dtvrDYzd6VlHaUyBN%2B37Ha7%2FZfq6ReAviNz3mYdm5u7bBpfOOTy2Xqx2w%2Bx7f5raxtUtt4Hwo%2BX2%2FuL809z%2FHL1afpww9Exi4uzLjZsbW19yxEgC5sgo6FiuUsrsax0yFLRrFvPh7vpk9zcuHHvgekhQMyefXZ16fbeTlcQd9ZTdxq3x5MgHstu%2F9zcq9l%2BUWyaJUUIkHnbrOJ3rajYsWl9UZddTupa10%2FRr%2BSR6eDs%2FOWpvzONN%2B7SYK4OkyQSCcCsg3r16lW31cLZtVag67oAIAGIABAC%2BknT5OiDtEjA%2FHpYWql7dZ2%2FcP3%2BL8Hh8fExjEb4AM7DVYD%2B6Q8%2B5gRXkrAqGIBCaTTACQbY29nZ2bv625%2Fd01RLaylZAgxv9jImgUEGEHC%2F79g7d7rafPar1z9zfPPolEYT%2BgatwUEIQIAMCUCCQdAXRFebgXkMz31g%2FgNPPzPfTDtTnU1t1phP2K7qqrSezcY6dn3JcX2%2BbvZam6%2FO9oZup7YQGbXJLaUuspkg3aLVrnEuy06nZTsd2xBDdM9cfKxe3h36Dy8Wn16d%2FNTNl28sT%2BvphoOOWoEsJZUbe5M0LV7N1Ydqa7O%2BBxD229ad7LeWU97CgAALAeZdyFguohdFCAIAw5uPVhczKazWlJumqZQJTvC6jT68ees290SD8uaxUClWsjfrjpb1scevdKtXSr7RCVtTNEe2UnqG%2BVk3zG5Nh5zcXwFkJhjo%2Bt6bdTUf%2FsCzq9s3FkPfbdYJZHatDFGefvrxu1%2F5%2FG7fnQE2UIGRk4VPOx0erY93FpcZ2draBpWt98M5P%2FjbF2c%2Ff8IwdmvOv1jGf6%2B2v67fv9pG2I47u7X1LUk4aEIKnBLYIWwHdtioRLfphuOz9rmh%2F8%2FOeIG9In6E49%2FLzie%2F0p2%2FIAk7b65nXzzcuTfe7uS%2F4NI0n%2F7wrMz7msaAscC8k2Y3GCANIeA0jy43nml8wtosZ7uXnjpc3Tvq1UHG4iSG09lwWPoXzu%2F8ZHnpszduvfoqtQN2j7yDBwTTBXRInZ45q79tn6ubXx00GxI1d6mPPr38iZdYQw8X2x6N%2B90D5nOWnF%2F5P96Z%2FZ5Y7PssJGy%2BWUbIETUXv7gZ%2F4N9fWlp9uasVgpoyBxUviP0Yx%2F5GL4OPWlI2e6Opp41uWEzkXWARnC%2Bq9N%2Bvf3Jy%2BsP3CnzMhRaOm1ZvCYjWlEKjCJsJFV4bhzi5OyI6fnp5uaUiZICqlLatL7Mh7Ht7WfNcU4g9HCTJTdK43H2XqZVVmcF9hutseQD4%2BYvuLX39PTKvFJjCE8ImcgUDilDLjgAnO5Di9kwuPVuVja3FK2AA%2BMp7BZ1FK1r3aL3ImYXujZW6qx4JxZdt%2BPD%2FR1%2F%2FCMXfuyl9X%2F%2BoP7SvToBUci4rAgxlnyB6b%2FB03znd3ieLAvmnWjVKQAwb2ogSGMwwoB5dwYLBAWKSOhhUEw57sPJRrfP788aa0pSp6m2VkYW93Z2P1%2F000f3fq7u3uNs77yWD7xi2fQY5Sqr1REn57n3baf1915i%2F%2BwLO8N%2B39ropKjUhhtplWHsd760yV9%2BbP%2FWl2j0Hs4vc8X%2BRLepKz6a%2FCPiO45v7xzMF3XjvpsmR4m%2BlOzmU7Z%2Faufc718f%2FWwePjjPjQT36Dx3l%2F9qv%2Fzndvn9vrrvWzNts8rWNqhsvQ8ic%2B9glmXFbSLiazWWPrq33rvcl0Jla2vrW46NEk0lMizXksqOYvcptyxS6YdNV%2B5P42LV%2F%2BwXvjIzAkrXN5599ln71UVfyHZ%2Fk%2Bs898LmaxKXr1w6v7%2FuXOYktVoJATZ6t%2Bbo5qFmIJPXJD4%2BOV7d2vm22WJcj3ViWq1fLqfPT5sb0%2FilGZ85y3sFB6%2FrOjQg6EwFuHiBZ564uEfXj011kpnHbEgfzLi94TVBQKNWxJjcvrs52xlbUSC%2BWUaA5ChFO6en9%2B%2BuHXNytSLCJCI6XOmg63tXsJFtsEGA3n4vRZRFRNcygbBNyALLiTFhuSFDyHKxs5uvagH0jXZ6gr%2B%2B9Qagh8%2F99pWuLrrLg4SVaRygsMhikFKRIOGObFksomVrLrLSESAyJJFSgi2DiMyO6nGaRyTKKqY4T1ztF3vdcPzEk5%2Fs73369tkImQ2yUWSqVKWNWU0T3Y55x1u2JAklDwkENgmTnZIR2EK8FwYKdEK8MYnWqiBgmqbqiXEznKz7KOVktVrqV6i%2FzOaXqb%2BCXsXA%2BoEFHd3aE6sVACrwRM%2BFg3kXfT%2FVIBuECFeyWZq68iBj6rpP%2F8oXejBejSs6kEh667Erfnz3mXOLvZlbKza0KKlQmQ%2F9ztDi4Ny5fnkEsIIZAK0BD9Iftr7y4kvPPbs367ZBZWsbVLbeH7td%2F2f2%2BkP96vPTYSF%2FyvTT8d877O74mK2trW8tRoBRmEg5oAlQ2hJB2r2GxbrvP5ftf985%2Bay9hgWnQ%2BNPhMf2N%2Fve77rZyWa8f7T6V57Z%2FdmvTd8Ff2272A1Hs1bl6kxAIYN4F6kAEjA06AZ2yu3wbdafF%2F%2Fd7nJn%2F9Wj4%2FUwMZvoTF2pVUa5LdmFobFbyrK1M21YHBNHGsf5SX0OvlP6C5a73zmd67rlQG2tdkQvnjitH32MT90mG6Vudpifq1Dr2c78zrT%2Bn6ouls3fGDs9awwGfTO7FkUpUzf%2Fn%2Bfdf73b7vfQ7z59v%2B6w84DjibZacNzxwcaHpqmoCFsGRyZvzwZIZ0C0StbEIJQWxgByJoEyk7CU6hZdT7F4K399z7zyWzdBklA8uvWGBg0S4Gw2QQ5qnlI5GkshSTiUABnCYIdQVKfTFsYNQQgFIrETW%2B4D5DTtj7DcueAEp1sfw07HQNF8d%2F%2FSzs%2Fd%2BeKv4jogT7fSs64sdrI6x4ZPRi7I0tvX8wSAZAHidQkJhoQGBkBGCBvxDoSA8tokAnqY0GpHlf4zdfrC8u6%2Ff%2FPehNcjVHLG%2BhxOasMJaaAkswqwPLfGI35AN3zwwfKD8Hv39j%2FW5l3pinKsNcOkpRpRqrqN%2Bq%2By%2Fr%2B0%2FnmocIG8iLvalfts4JL4Ue91BwfLdW1au9WRtCWs5qBW9R98Yv972vDSnTE3LBMxnZvuG06T9Un511heGM7%2FttYVbS9ubm2Dytb7oLe%2F%2B9Kl%2F%2FbVlyt10HCW9fatk%2FbUudapxPbur62tbxUGgSFwmCGzITkcYAA7kVJl7GYno6YdPvdLdwc4gaHru6zf9uFvm%2Fv08ryTdDzWg%2FX4mU9%2FpUOP46tXr6gdzVRyXCGkkGQBgHk3elgSKYVHbJZsTteI9URrlAQ7Cgp6mDWcrFszECGJaRQYLsB3XbryxMXzlNVuWq1NrtbU0RaKJ68%2BNrt9e2UAYwFgG1jhV145uXVlPp%2BrIGG%2F14gCIEVVtzyLz37ti4eT2IHNBkqjGZeIzSaH0LWnnmxRh5RcIaFBE%2BZtNAAy29SSOlVXy0aBsVKpwE45MDY4C9Woiy4dvJXADycDyGBeJyQsAL99Caw5l3XqmsPNtpUZxXLYOEWTCZG4FohOlBQJaRVHsaKlcDqtjNKXsEhEy0Zzqro1N3dduE7t7GTohsf3D667DXbXswEDdkLa2BWmERuHMOB37lHYIN5gJAQJAgMgyZj3JkSRCsSj%2F54lYhobR0sraEmtrA0BAQUCKjRaY3fO2RqAUqhmHHf74ZPnDi5f3N9j3Gm1qo5ZM0Iti9R1Zex37rlqd%2FjUz90xrHidUE%2BflH3y%2FPnzu91s9%2F79%2BfgqcDgDMIFnjaKcH%2B11KEJghoE6YSgA3K316aIv3rz5oxcvlW4bVLa2QWXrfSDnb10vf3fP75Nva31%2FzWeD%2F3Cc%2FyUaDrZN6re2vjWYR1nO0ooyXYoTbLdMZ98N2S8Oa9w%2FHP6dcvZzZvc8h4c81qYf6fVtuy9eaudKGTLz7nr4ytHey2XFOf8dx%2BcONi9Nap2dmRYllMJg8V5MhaFybqxQGtHoGueSso6abBgmnJOYCjSoUegLrPphamsxAXttzONxFy7DdwV%2FWsfv6IZ1ngwlZ67pTCudxeNTtfy2OvzcyKeCs%2Fl0kp6PfaG0MRE3e37K7B5Nf%2BvO%2FuM%2BFg3betvYJwBjQoGilf66Fv%2FBtPzPR90M40uMbUOsyEbMsj4FHzB%2F%2BmyxPx33WOkEbGXD5m1KOAlAJq1ThxJsIaVBWDIgGSQ5jSJTgkSOeNtkCIltY731H4plAhoJKXg4nkk0GtybzzfOaocgjQ2yE5GyAgGJwcWO5mIlRo7i13vFTiWlmFmmUV%2Bskg0Xdc42jVXVNfsowpZdICLX096GK7AQZwUyhU2yTIf2UD8gmngHBsB9Zjz6lvBb74gT4Hfv8gEMRu5QQJGELTo4OMpmRmIkjwMKFBCxuJBVrJNaC61QO6aA0zWG2ECZFkueQX%2F2Xv091%2FZ3j9d7nfrgLFsq1SQDoWFR54ubsfrJeve%2F7am7TEtwoQxMFVdS1%2B1fevX6Pzy%2FPiVACDYAZJZptYvgrBzO1%2FPFYRGlkDtMrdDtseg5hrMXPf7bfX6P84cpsR1TZWsbVLbeD7tZn3rq0uLe%2FbZi6OJ6zet3nr%2F%2F%2BMWDbkTbosrW1rcIGckICwHCzpJKkmyGVmazNttdLkPH42deegF4cMi8Z175xCc%2BsV69eP6gA%2B6uplzPPj%2FdXkTEeT%2B9f%2B0eD%2FZEqa1ZDlsCWeZdCAxMvE4IAIyFIiITAL0xoU59n0OHVtOqQBCzvmymCejE1Tnfvjd7cvfCsmtD37ppbCIhFYKS06yPAT37uL5y6KUxb9H1nC15ZTr83OH%2BwYVhkaPUZFsAMgaw%2FHClBEGI6CZ1h93Or9y6%2B%2BX7y2ObgM2GfjFMZc0aqDCTnrzgfmc%2BX591DbsJTOIqDBRIvl4aABxRQiEKGAkZIYwAWTIWAYkkFJJs3spvTGkAJKeRwbyVeFsKOtPZAQDOvggpgzQ0sFEq6SWlwqSoSZrSHJk4M5v6cOnW6lo%2FTHLfayc6dZvS1nJmnQqoRPR9KzrLJmuCmrwm7chEAAl9hwU2b8eAZdsY8tE76yDB5uEOtZP3yA4QCEJggBmzREiT148mzjw9xR2tAEChzItKKSfjCsgJJZcO%2BO7H%2B4%2FtPZbLsccx1YxMW9ClIylDX0s3rqfusj71C6e1MI3QwWjGEYNzPptHPUV2R2tkBUAAmGJ6DNS2Wp9N9D2PSBIA1oMvHOsL9%2B997wcv7GobVLa2QWXrfdC5%2Fske%2F9XHvPc1Mvcb48%2Brncwu%2F7PTzdmwLapsbX0LMYFthGRLKYGc4FC3yXK2br8yP%2Fj3ZrdfNfNhtq6bfsafKn5HPbo0v9BFnGY7eXDw950vn78e3zvyF54tzi7c7kzfqp1ChsQhv9t9X7IAAXuNk%2BDOfgF3SzF5hxBZasKsrYcxalNmphzQCTW6ykEtHbPNksODiU%2BGflj%2BEelDO3uzvs2UQ2vK2gDJ0KySOcMfPq1%2F33R1WN%2F8rwaOZ3W9X5WdThXTUGqb8C8rvrg6%2Fgc0%2F5H92TltQk0GjC0QxgKCCIVKqSpn0X%2BBxf80jf%2FlsHwez%2BCgHhQW%2FdS%2FcqXSKut6bcnvsX8Xe7ubwx1ZzjQI2zgDAw30dgUxhZCgKBqNwEjYknjjObIQYIIQwOsz%2BeuzSkKC39qkHGw7TA%2BNhAQwVGj0psH92WLVZVe7XkStlpAkQdiknCEUppVSgiaCBDvk2mqXUmZiDYPmi1XEydhdnw2n2kTWx8vwxM7uXltBKRp74TIw3z2J%2Ftayfab5NtQKBqJvuiAOIq8Fj%2Fc6P1CUWJLM27M72xBgADASCQkCQCSABXqvt369maYpMOO4wrGZBAO4I2d4Qe1nMIcg1pyuWK66CSAWB5nf0zY%2F2PQ79oaPlL3NyVGOQ0GV5poZ6lV6G6kSa8XRaf7EcPQLYtqHNUNdjJXX7BL7m1YIyOtrgL3WA7UkgBo9owHGSpk1SmaTchUGvKQsOQ%2Fnuum49%2BY%2FnPGU65%2BWUcp2TJWtbVDZeh%2Fsl%2F7ixVV5SS%2BO00D3attcuHFj2pn3fYttC7mtrT%2F%2BCYxkZwoDBJSCItWHol946E%2FLPB%2B0w%2BHoizdfKVGmaZJoGz74wed6pqv9bpHvrzfl5fhC98UChfzwhz%2B0uXdjV11MzYlCCCQjAfidxkgh3pJm1o1iexAAhQKq1P9nymocpRR3JbtCQEEC2GwI5jM%2B9tTF77%2F8%2BHOr9eVaO1auY3OzEGEEMmTLrtayM5svdnfu3dzpOQGDQcMQtdm1UDYqs9XxHzo70vHwvc9euZTrmWpkhgxIQIBMjMSo7tgx6uArN179haPT54t3d6mnCM2Zr1kzVfpCUKTHpf0nry6mVV8rToSFBby5v%2FQOtadMAWkVGQsAvbmEBJBgISCxAYi3aalhI%2FAjXyGQBHrne6dUCi5ko5ulmiMs2TZkKkufxkJRCi2Q3IKWWeUWNrYkd2XdL1Y1d5ndOTn89JduJXzPM7sXzj%2Ft%2BXz%2FXB9ZpaDEYXaHp1Muxxdu3qhgAIhQMxBWB5i%2BxyCwzdt4%2BBM9MueRiJLGAMb5XltYCSBEgMEADMwqG0EU5dAzQUIECJzka5OQAwSbXLD4%2BJXLf9Izj10dl6fHd%2Bb0M7Wpto1QqMsyQ32OdGWMsqr1Wtn%2FzK%2B%2BErswQWE828BcCmDmvrEsANCLyZMnoNZf04Fbx2Y0YYwhKEEkAH3pp1Yf4GeqfunGyW9%2F7FIpa7a2tkFl6zfcQv57V%2F0%2FN043Wa5YWAfX6%2BY%2FWez9uZ5d2gaVra0%2F%2FhmEjWRsECblTGyhbpiP3eJobDdni3%2Fkzhdvg9OBrprfvccP1c0TQ9dDTe6e%2Bicurc9OpvHy3r96b8cv3tBe6xO3BiGFsPG7N6OXkBLBw%2F%2BgZWNNcKrerfWhli0FUAql1DJuDEnADJ0D4QCioamxWs6aF2SQo7PaIgwgGUM6S60786m1039i76nd5fXf13j5WbyuqFL2rx73a%2BqdiHvD%2BTvTg%2F9yM37i7t3fefGxHy1c03qHVhCS0brFsute3T%2F36fO7%2F%2FtLX%2Fzyl2%2BcNs6MdzhNDtgzHPMAYJ6000tn%2BpPt33PhSdf1ghbORkqSDICFgAL%2BxgcPWbIAwgjE6%2FT6zAKDJEuEFKHA8HVRxFZEa7VEt5lalEJrIJAkI0SxC2xoplUxdGQrtQYQ3bnnh%2FLh%2FZ1zD9Y76khVcjIJiUgnylYsAW4KVFCXsd%2Foi4fOnY2ddGO%2Fc8TsdLb3P9155d%2B5e2spdfh%2FPDz7XT754ctXnpznXijM0vnqrPva3t5PffFLf2i9OYGOxawbNpt1VR7SQhyLb5M%2F0M8im2zejpCALHaCeJ0hILFQL5AExgLEexEgEBTokiW8xEaFaOxU5%2FEITP045Rl7u5vGBug62ob1uFjRdxx35bY3ezr33HBu%2F87ZbtmPPFlmXWVt3dBHmU3uSnaCKKtSTmbn%2FuWvvfBpOEtogWcdpadflSXF92Nkw24CQQ0o0AEdCbXipkoHUAUdpdKSEuoX3akrNTFTaXt5YN%2B%2Fbv4r8R2b5e8cht7bc4atbVDZ%2Bo0Wzg%2FU%2BQeuTif39ZVJo6fnq67feOX4qcsXh6JtC7mtrT9%2BGQAE4CCxSBlJQnLQlTrMTkvHevnlr71yXB4uzoWBK1cu7YTP9Z083VnWMpbP3vtKv%2Bin3Z2ny7WXZi8vskWr6XSEJBmwZd6OkQBZYQEkAPRoVnzUKCVrCnb6Xq01ASyTaQJTYGAwPdlQMJ%2BRZ%2BsNL14%2FenV59tz5Sztd7AorwgYAY5BsG1rrxs2sj6ODcnV3%2F%2FLxycsVdXjNdHa2oczZo0vGkfOz2dHm8HD8yfsvvwDfC98R84O9xf7ebrZ2j%2FxKO%2FuVV6%2F%2F6hlfSp1BAsAAOSRpgACoVWIx%2BONPXJ3U7XYZy1qzWgkCwODAQIN4%2B7bvwmQiYVsW%2BkZHGksAkhWSgG84Gr0NRpIR2AAg0pIQb8rkoWVd37x5%2BKXTuHRmAyDek4PaLc%2FN2hBdOB2HtVtXdSt%2F%2BYVffZ7V0jTc4PYJnz6%2BXl%2B%2B%2Fsld9i5cnO3urjbjp%2B%2Ff%2BtQxX4MGHazJzWYNpCl9p6wFrhSGfhZNMrYR7yyhQsLDjQ1kCAEIY5t357fODQFACIRhZ0ZfWK7oO500Za2oo%2B%2BZJloFDK1B2MPw5dsv%2FeztG3%2F6tadbF536kq2TbSsrTtcWXT8GK%2Br9eyenbTUBhggaQsYAEgYoaCiLs92OyaoJgEACJGSADiqtAbTm1WpDgdKRorXR4xwdpT9Wdef%2B6nh3fklsbW2DytZvvMcq%2F2A7%2Fye0w8LyAr3Q%2FyZeuTr%2FV%2B92Q9mOqbK19cc5gyVjh9JJZtjQoZL9cJYxHfHvz%2FVfd7muADPyCvxVVT%2B6KY%2FtKkp33Nq9o8O%2FZTi9KT27qX%2Btr96cHfYl%2B5pKUDiw%2FA7tsA0CQJYkVNIC1sHQ0CmLZctkj7YLl%2BCTEU8uzi1yPQzD%2FXH5K8ftC3AX7uysi9acHWB2q3rPG%2Btfsc829W63%2BfFu7wOTdtUhgx%2BGJmODbTKHNk4Hiz%2FzcPbcLP%2BhG2c3ZhwXXLK2FOuhDVPNvNuWcIwbfHbgvypMWm%2Bm9XT7wU7HfqCVmhEMeI%2F%2By10VPYem1dNuBCh0A1fu8p3SX9H1f0K%2FmHXTvNVGQylhjGSDwbwr2VKIivxr97KEDcg2kpI0fpuzaj98bmMQgMAgqUtLVOdEElToUh19pb8Nn7tXXzzVP1kxFugbHGUlFkoQLmjC%2F%2FLe9H17Bxcz3Wtsuj8sfjH0P776hV%2BwXumcHQgA85L4A2a%2B0rnl%2FXPdfTfdSA4DFwgdTPtjbgAK2s8sbTPpZNJ3XezOZ4Qsv9PeNMgUDOgtQ9EDCAIEYJx8kx5NbvUqU%2BXyHf70Mvw54%2B7Kq34zy%2BA%2FmY5%2B1ZuvVEiALrkKYZ7vJyL%2FN%2FlFj0c8%2BFO785fHEi47vceWzlbIrnT0fXZd2XT%2F7f37PxecJUwD3R7QUxuncrWgg57jatoZp9BYz%2FaAqAmRakRHVwE2HhoXAWhEgwcN5gszstmMyj72o53dqu0%2F3OfVPf39Z%2F3AxNbWNqhs%2FcYqmfPz82f2mK7r3sTAcKeNl156pTu7llcjtG0ht7X1xyeBJUBO7GIlKJusrrhfzDbDYpy6i6%2BcfHq6eQpdUBPg3MFw7dzVyzt5eeikcu%2FspBwdfeWIfeJgpicfvzrd%2BtxuFDVnmi4IjEFI4LfrIlkQOAhUQEAzrxmTDgyGGVx9%2FPFPXDx3fnPCMJzO%2B%2FnxnZPnX713BpUWUDpaXU%2FrxqaDBveXfP4rhx%2B%2Bsrq0ezCUviMLaWwMKQAl1NYsFvPZdHHvsbb%2FofkLp2deT2RhT6UhWp11fakTUMCwbJw1CIBhoDVORnq7QAeGU6bZbD6NfrMRQARkHdmRvv3S%2FnOPPd6xHuqUWZsTPTwsgAT5XhpCSJDmG4dB8yYlKiLTCMBvWUBvTIAAWxgeBg8LBwjgjR%2FYhWgAbGCz8UbvscwAOGC5RIGzp%2BtPaS%2Fdvv9%2F3Tx%2BAdY4E%2FoOgEYEtKmy6D1uOJoAJwwDG8HkTW4AQH0vT4zMig7Ocf7c%2BW50lxX8jnndYCPeuooBFYMEgEhjvedRgPTINqcBDIICT129%2Btz86mo8m%2B92qfkP58nNr37hKxPA3l43nVYaAKXQ2gQBn33l%2FofPnV44f1XR9wraUtTBVikVbRyL0%2FbKankEADYS0GiATR9ixlRNRfDdpVMweWrw1ZYG1DCSBTEb%2BuU4Qwt2kKraqTfjes1sBwBaa8Ir8%2BRSv%2Fri%2Feng8W5owfacYWsbVLZ%2Bo83Y%2FG27i3%2B5rgamw8jTbm%2B4P%2F7Le%2BWv1M45TgXAtrvira0%2FLsmABELFgVN2pEoMp3T3yqV%2FfTj9H3tax5Bx%2BTQfhz9%2FM%2F0W5RMz6DXl9LnY%2Fw%2FObuxIp%2Fa%2FsHtNL%2F8ye%2FRpaKmwsGRZGPxOTehxoIBCGIDd5LSDfsZsxur0uOa5xnk42Nz8%2BJqnuwiPZ2enH57a3mOL8cXV7Q4q8nGI4kziDNowO22rO9bpyeZkv%2F%2BtXblSWbhCtRuAhEiTNq2WNu4UPTnmP7R36Wfv3fs%2FGnfMmfKwWy0qkzxenLuFp3SmDBJd764bl0uAgHmwM6MUppHNhjN1aLdbdNrUlq55AT4q%2FU75t%2B%2FtnGfZe1QbqxsC8TqD3r0vZ78%2BcxoECMw3JGRLhhSJBVhg9NYjEUJCb66MBeAgi1sRNZoNApAjGRrzRr4Sh0Oy4wPeGwGw%2FMDxMtfnfQEtzqbTr9w8fh5O4fYACuqCWnEBmJuO473%2BOOLc%2FfpHnNkk9LAz2xxngb64Gzex4aL4rTP%2Fjt35Y%2BscsLIZ846EDc1YAH5kbyaINxjzHjnBkJAmgkyYy5NHaYhN7wdP73Z7s3pvevDneHxsEVdW%2Bcvm3rJuCi%2BqA7pxUyttr%2FtV6Utn9dOj%2FtKdnR%2FL%2BZN1OfStSwK7dFNwQvz8nZM%2F1Ou2bSCDOlHzMc6ehd9dhg%2FuxqWLA7WMU5233RcijTNw8rvPTgOmEmcDt3YBINp62K%2FRzGnknb3%2B0w9W%2F%2F2d%2FMXl0dgV%2BrJudWizEX6lrcoZ%2F8vVnT%2B5jQdsuwzd2gaVrd9oxe07hv2D3ZVWutta1%2FfXl9O9k%2BuH5x%2Ffg64ILGwD4jXbu1G3tn5zk7FACADJAVZYDmblrNPhyNe%2B%2BtWvLm%2B3HUimKYGL6PGrV8tcs52O5hfPTr748umNJis%2B8rFu2OxE1J3cRGaTUonCAAK%2F%2B40xdgCS0cP3KQWJNyTUWjNycNuxD7Lu9%2FFg9%2Brn9x78yu2jwwdkZun6mbuxjUBrLcSYfnWtz7xw49qF3f1z%2ByF6gHz45QaMjMexizxwpLrv%2FODj4%2FGD%2F%2FPOppo%2B2QvWodxsGrRumKKPljnVHEfG0bwhk7MzAPGQ7XWtQIGr%2B%2Fr2uT5x5Zld5VxVY21ZFZaE9fXFh3cUACSZSmMjxDck%2F7%2FAYYdwfIP9DwLBJsqLD6aPLsIgXie72DOpg4IdYMC8rnQdXVJq4e0J9OhzISilK%2B5DMZT%2BO%2Ff2vrA5fWEiIDPJytfZbIDVBoDg0TpVUTG1JjOxP%2BjatQsf3NmbnZ31JNnAvB1hjC3bkMYiwGAI1AkBGAx%2Bb61TjEgjAAzNCEiL17euy7pPG8Z8HN3syjNPP%2FN9V5cvPH%2F71hoCSpDZGqXQagWm4Gi1%2BaXPf%2FHDj128cm5H0jCbhzyhM8rd0%2BlXOclUFJoFYIOBhXTlwoWLF%2BZPq1vgLNPU53OlV0QVyjiaz9KZypR3bJyg6DQrAez1pZ%2FFyxdX87sVXEppUWgJBDGZi6GXX375xsWd3Xkp29atW9ugsvUb7qnT8W85x98%2FsFmxOJsfMPxvHF1fnP4rx1lKFwCYBAAhjLdZZWvrNzdhsEEA2Lgvna2xDA829cu1%2FAPD0VdqR79HreaUTn99nX%2B74mAR2Pey3V7e%2FceHYbaOD6f%2Fvr1nfXxrvph3rTZnC7UAWSAAv%2FPQ%2BAYkBzWiKYCTwlAjT3eDGEtjOD1qvAQ3L4%2F3h7PjM81F1M1eGb49%2Br%2F19MKfddf%2FhY%2F%2Fo5LJ5mxWmPqY%2BlYZNATxMst72b6cZ3%2F6%2BeHHV%2BXKSgOlAAIDRmDcmmrtVC6EF2324fnlP6E%2F%2Bolc%2FmH71h47Ik9o6U2OzVGJ9FAJ0dsBqtEmxpYT0RjU9f1s3Se5jCUdHxz1J9t%2F2Xhw%2BbGdnRz35M61qSmQAluy%2FdaiCn6Xm4vSQiKggd9mMYNAiTNKi641A%2Blv0FIoQCYwIAAsBLYKuQjmsEoopGHqk4CCVDtasBwfAPo1fWcBEoAevgTBh17U5ecmwmHv4Y8%2B9%2FRfWjV%2B4XOXJ74KR46gzMugNs1P6elf2h1o7VnGIJbJUeq4TEyTFuFxE81XxCeDP7%2F0f9atfnVhNUST0jYCvUttKmAeZALkIyv58LfFN0HgR%2BY16BpPvzS7YPbZXBpZD2O2Qq4jdGnY%2Bah1wbtPzC7%2Fd6u7n2ndi21H6CoPIrlZZ63M2Fu8Mk1%2FYLz%2F8ur%2BX3Mw%2FljMFiqEJ%2FvF2fDP5vVfKbrTWUA1nhgaJdvI08Xfs8Pl2ezKOtXWUxtVFARNidSyhSdlOg1YTuO0rUBILvO1fkQXXz136wsPuDeNSI35OCyAy2NqXP3Bvn7h%2FOqfOdvZKdugsrUNKlu%2F0YZsH7ny2Iu3bu%2BnxlUODLdaXXz5QXcQ49DNSwnSZDrDAUbCeFtf2dr6zUlYBmQJZBOmKPrSMd85ycyz%2BuKrN0%2FWlb6jViICDi50T86u7Z%2Fb7JVyUrl5fO%2FezVZY1dTHn7rEcr2zN9udGmPNIhdZlpD9rmdyAiGHkphIxKOCAOgC0klrbHJcTqVG9GNFuWdf2N1dPffEt42XLtx%2B%2FmjCtWX07ntPkw1EdPOzdnr9AZ%2FRg09cmp2LIaqKAqdBQhbYNiKdkeOiY9N1Tz65%2FycvLvXrk8%2BeHi7XrIMK6y5adqvG2kxWmo1qmprNZNf3WUrWdZ3anJlxB7HXffLC1R%2FYO39xudrVereOEdmyZSQBNgIjDIAMtjsMzMVovk4RYQeQSQAg9I73%2BGElqiLDgMC%2Fpk1FEXvktXNdbBo2ANjOzA72is6ZEVbJGJZkUwCbhhoh%2BEaNXgKFAAQ9hCgQsNuzWS3LzphT26XluNzvFr%2Fje37L%2BmsvPDherqCRrU1QGy1JNkYKwnhkHCvRUITGqvRcXOj54DMXP7y4uDxd9mXSVFMmQLwzQ0c%2BXNCPboIIeO%2F3QfuNh8RChuR1AlAvWmtTamqUWq0qtQv93mo2fPjDz33Xvce%2F8vzzwM5sp2weNCiUtrvLtAHGwtGpPnVy%2BkPPeMPQoZX1%2FPLo6Aa3m%2Blx8joJuDTTxXOLftb3dTXmVL1saiVFc1hgUA03KUnJpKQgsW0QqJauxG70166df%2BLk6Pbkhpl1KMgE5hScx8fj6J2dwtbWNqhs%2FQYr5JPH65%2B4v%2FdftbN%2Fr9y6WQCK9NfNH%2F979h7%2F%2BOr5GS42RoIEZAE2CBu0TStbW7856NEh%2FIxkg7uIIUoX%2FVL97dPh3%2B%2Fv%2Fb5Wby1YHLTx5vIxeA7%2Brie%2FbX%2B89djOviduLNf%2FeXzol9ef%2FgH4rfgHDvqn6rTjsXdUOXGqIAFgDHqHhgECEAkpm7rSyZMdP1y5QX7u0r3akhX7J1yE5%2BDCyazr91WP3XU2NacYfamEZ9Of3452dj%2F8fxx%2B7U71odenZfMSXg5IyMzmjBu%2BdN8%2FeboZH9v5Lk%2BzTuINejgjZdyijYNqp%2Fie1fo725gtzpL%2FpOdO%2BjT9QNP98H2zjLL2RkVEKGsZazcxTASchz%2BL46vig5M%2F0M3nnhbr2zuFWWZQ3WwZgwFk8yYbcP7c3u4PPX98I%2FRKO1nCeiRhMRw6OJ7x8pUD3ziO0iy%2F014GZBlCTpq1rLDmWfhc3%2FIcAEEUunt6LtsiY7Me9xVgMGCs1kz%2FTNEPVp5PbqRvWZs4oZwgBEUiKTWAAoYixOtTEQEBIXoIMZcWgHKp2X6uc6RkXuz6c6HHVquPP9bd2tenbi5%2FOXk5fQ9OzbojyiT42pwiSmN%2FYm%2FJgTiHrknfdY5vu3juagxX2nIYNmWqki3elQ14HeXWzFfgxdpUWXWcb1xB34ZK2tODpq6Y98Scdu3ayFm2J1yPiu%2Bb9bmuHm5C7ELM6UybptayUqUsKhd71c2tH7yYEf6Zrx0%2BvzmcYIQ5yzxetgAxa6zl%2Fwluv3z2zzyjRD9%2F%2Bbn%2F%2FmtfHUYuwHJe2DQKl8acr%2FJa6BO7%2FuGPXGt3D6NSc5poFqmUHU1grGa3kEE2sgzCMiEBNKd34M84bf%2FxB2cfen7z8uQ2ndQ4CbGeM40azZ2X%2BV%2BfOPtzGdj6lrcNKlu%2F8Xq1p5%2FYX7y0ebKrr2J67o5e3771q%2FXch%2FY8j67LKrAhwxLFYAmMALytrGxt%2FTFPgEGIkEHpIOXaqev7uYf5%2FXHWLfe%2FdOsLG8HA6oHnZSht%2BvaLH6hnx5cX8yH6W8puyi9%2B9fPH0hP2hXPM3F%2BOnDXVthmphJCEACTwu6wTsrHA2bfWb2prFOjg21f6YtD8%2BsuFWKT31%2BuFqFlT2ZQwlc1yp8yym33i8Z1b5dp4%2F%2BWj1Nj84ZCt7EqZ%2FKWpHqUXcL9qWq606JFtwIBl%2FJah4JMkM6SZoitl2l%2Fsz6cfO3f1ZvWN45OXjk9ebV7YRxFnpVtP45htbK2aQVoI8Mz82H5%2FYWexc7BzUGKHnFGjVWemExmQeWMuMA8ZiXNnK5ujtGEY2DQ6oYHlxGXrI%2FdOFyG7pW3xDgwWsjKh5oBmvQa5wNObCLSf%2FtxudoUd6%2FyO5oqCIQ0AJsh5TrudLpkH5sm%2BnMhVCCIE0eNeGRlGiTo5TCoEnSjQyx3qpRCfr%2Fnam%2Bd2637p%2BqzZmmSm1te8gAaVbve8PnrunKcvnp58%2Fmhz%2FUR3MvcWcrWTSO0k%2B4ULZg8%2B%2Bbiemc8%2FNuw%2Bm91%2By8W0CddUWiDeAws1lB2vOvdC%2F%2FzBbEf8PXc3feOs%2BaO7elzD0CrvlYfMS0Msz1o1LYlCv6qGyUxwsFwdDIOG0miVVDo3y1LbxeyXGp64cOkjHxy5X8tZvxtu8Aut1aIuvFPZqRR7KQXGXj54cPPu2V14eghGE%2Fptff9%2FZm0tSZ%2Bb65m7Dy5Ok4NKc0gYws4WQkCkSAmBkbEAIQHmNS5ZJ5VhGFbzddc4P%2BckGStKjm3MU6ErNdjaAt3%2B0C5bW7%2FRxuh%2F8kj%2F4b3DzzTXOes1l8V3lYO%2F7zv4tgfdOdfExplkRCvOSDAYg7QNKltbf8yTAYRkEbZM5xa0ofTR757Odn%2BuLn7i9PR%2Fff7F2zAOGkdfhI%2FBP%2F6hj16N42f3drr54tOnJ7%2BwWv3rX7lr6a8a8hOXD57e3b9GDnW9qXXy6CIiUAgEYN6NkGQ5rDiK7gFx2HXMd85u3ftkXHU01Tq1FUz9TEPXdjILhppOS5IySkY%2FqttUas2hnw87O%2F%2F9nZvVKnZk%2FAkXd2fOutlEtkbZ69pMhjSgd85RgCwlauAUVk0fj%2FVwubk7%2BTg5Scss7H1xflcXdxcX9nZbP1uNbSHtus6wnKjZmdg2ABbgt9lFUmVYjRprn9nN57u1Tm5t1pVps1Zp3XzcxQVb1dgS35CNsQ0JHV1%2FqOKVtS4HcfAHu7thzTv9iflEYzlqWbo2lOzdRBojQIYmjdaESlm8Mi6nNFJYkmQCSwaJNwiQjAUQECAscSUmIJFa9FFmZMFghQxBoNLULaUzdOw4tO6Oy%2FXah3fPTJ2gEztwaRgu7u%2BcH4YhckfaieyUxYnSZGK%2BmeEnJ4c3O%2FNxN6Ae3ALG1fkWzVFbrnZmUUi%2BGdWxaUHZaTFsKjFfUDSNk%2Bpyh81OTnMUmhoNIIII1I%2FqVlmWU7a178%2FGLi083zvfugYM2fY36PRUitnCIWqWll5Si3yx%2B0Qdxza8oOmxkbVj6kvr1YqNLWwhgzEPKaWUwOHG6wQ2SDxkommW66FWop%2Btg0mNIil7pab1QVmztbUNKlvvG30x9v6xG3deWOXzaYm95DtDf801f7%2FPP5P9ELI3I5lyFmXY2CRgtL3%2Fa2vrj3GWTaSQhCluPZoRXVeiH85ifnPj3%2F%2Fq6X9%2BcvjAvg%2FLjlq5DL%2FzYx%2F9q0PftWiDdau1z29u%2FWdfPPsFSiP%2F4Q9fvkZ%2FrdVzmR3Tmtr0enJAAoR5D4SEhcKkSqq0FlK4JWFJgMLCkVlIMh1gWzYYC0lhhWOolNG0KBOp6GmNtDIVUYr6bIOr2ig5nZYQ74WQJSOjRlSiopGogq5LgsxwFmcvhlCPOrdIK5udlgFjZIzfPcUJMHptEkAYKWQoQpnKhPQ7xy0DpFO2QETtuok%2Bu6E5IiS7EyVQKdFaN054ylatBCwAgRGSkVWQsXidhAHA%2BBuOeP9wYw0CbEAgE5i0BJAYIVMUoZIRKY3WGWUZZa0umQGZGW6dpwW5oM3szjVE2HbaiWxA%2FDFAD%2BdGIEBITmUGCFtpA1JIYAXqKjRkwAlUIrFBosORLmpg8SYjCEAkAiQAZLDBIIQePU4CZOxH3hZsBybY2gaVrT8WraL%2F74%2FiD9y5%2F2VzG47nlOSTe%2Fydl6%2F9KYf1ymwoudxoM1LpOkvGJo0tvA0qW1t%2FDDMgp5QghZxdapDnpe%2BHYVOG61N84d74F7ebp%2Fc5aMPAcDtO%2B%2BBvrPx1H3r24m55cnd%2BtFp%2BYXn2j%2B7e%2B%2FyndT79W3Yu%2Fw1PxYHjfFv3UwtlDWdpRlIA30RQeWMeJqRAJYOUSMsoLMBpI9JObGEA%2FMZMIBTqhEIRConXf9nYVlG106mszZmkhQHx3gnxOhlhLAkhBPB%2Fs3ffwZZd153fv2vtE256sXNCzokgRZCSKImUKIq2JMpjS7bHVo2zPQ5VTmNbTmWXs8u5bI80%2FmNslz0KY3tGGgVL4sxwRA1zAhFJoAF0QMeXw03nnL3XcqkAshsgJQsSQ6N7f%2BrVefcPVHfXa9zb53d%2Be6%2FtgojwOjcMxx1%2F82%2F0x%2B6aQAABeXN37a8Bd%2BEP5XDdH8EdVQ1alVWtIqUo7o4HkegkSynG5DG5Oe7yjX9H8gcAdxAXAcQdcLmWSq5dX%2FfmVy5cn27e7NpvJI4ALmK4oYjj4C64vvmu2h1wd%2BHGIQAi1x2PI%2FC1qOo4OP71%2F8gdEREFHAEEd3DeXL35H2NFJSAAOI4LgvA6hz8kKztITilZ3qOS3Yh6Fh9aXf7Ext56SJejE0KKaXubl%2Fs779KVKuqylxIaURNzE8EDoq4JHMDzFLAsu0EJuIuAiIkRnIAL6qFoyt5m0kvre0%2Bvbc0rpMCSAQI4j952R6hYCuop7li8enn9lU7UAbv7nnvK%2BOrQ0daSd%2BAiIg6AvLXbHed1JoDj7pgIuDn4tfEdApjg1%2B3CB%2Fy6rTDmSR1HzF0FTNzNcRwPwVWN1%2FoNcXDhrXIcEK6lA3GRN979Gf6G%2BAXOn5DjggMOmCBvDiB%2FtOvbEBfAcAfBUpzPqkKiuYpEtyiCaBRPuLk77nzTG1i%2FLgi4O9cPeX4L58A4ztcI35RzLSsJBES%2F%2FufH3UFw9zdXAMINxUFw542JAX%2F9m4BwbUGWIIJj%2BDf8KAX8jxv9HcC5nnw9GAkOAvINUSV3KRmQG5XsxiTgSCPVs9vFX95c%2BwKcPQgtzPXe3uF%2FfdT%2FAHZSu5Jp9MZUHTUJqJokE3PccclBJctuUOI44G4BUShDIaL0h1vS%2B2Irv3%2F6pY92PN%2BH3grjOVFu99mf6fu%2FcmKlPzowUN1r558u9edfPHt%2BQjmSnynDR47cfkzakTvTXfMkAoKr27WzzV1466tkXMAB3L%2FpvewfccKI%2BPVXF3cc3FDcAXFVF8BdBBH%2B1K5rEd6YYxyEb5u3%2BOs71xodc0QAN1fFcXARBEXEVd3db5ynTo4AcnM%2B8xcArv9pyzdGHL7F5OvVTk4m2TeVG5XshiVQeTy5MljZlKUA5qgCO3trl2eD9tChHbPDdVVZbMzcXdxdUFHwhAsuSP7Ay7IbkyDi4FK4FEGqskjVYDeUZybpyy%2BdO59IADCd0h%2BWe7NqoO999IGyjQtlvTebyXj%2Fuf2d3ak4SOmP3v%2FgcGe%2F7tqQzB0AuTY5ywFceGscABcEcQcF3toEdBfEX78aogiAqPub73kFnG8BBwCBb3jx7fWWI6AIwNdmReEm4mCgjrqAigoGciP1EoIDwM34zP8bKyDnOsK3gwPgN8mPMPuWy0Elu1E5CK74qk1%2B%2BuSRCxeuPDcnBqdbXYdf6TYH%2FaUPuSxIWKAI1rmY4aKYKCpigADiIPkjMMtuKCKAI46CGAFVL9tQXSp6%2F8%2FehV9LfqEGgdmBntaxWT9ed3%2BzONbtbB9cPmCia3G8zegvbm33RH%2FU7V9ceV%2FYfv6A90I7S4i4edBv3Q2u%2B3XRRORP%2BsQYXL7emwi4fy3E%2BC3Z%2FToCiAjguBXu7uoipqpBXHHAnYTkifNZluWgkt1oHBErJB6p6%2BPLo8VustU6QFV1LU%2B%2FfPF9pxZ3Q9WXQkhChyfchcLdxUEAPJ%2BqkmU3HgcRBFdEFYqiCeXl1p6%2Bunb58l7hoBCp%2B8NmNunD3XefamblUr9IXdzwdmu88fSFboCM3R85%2BOik2biz7C26R0stKagIwZHrt4wLfxrOn4bgDnIt9rg44CI4IPjN9Fwe4C0VTgABRZKImxgqiILguOVePMuyHFSyG5ELAkE4pM1PHRhsnx9%2FtmOdru50vZDfMF%2Bc7P%2B547cP9idDrQrvDE8eRRBXRADHBTynlCy74VybixWqMkq1KcWnO3754sZTztUFqArMvFl%2FWOYfcv%2FHxmV%2FRcpSNmezZ8ur%2F%2BGx7uUr%2Bkjn72f1H6Tf6Pqg6RBxARcXEXEUXOC7XFc4wPUpBXAQx3FAbtG24Ot%2FUy4IggiGAy6YmII7Tt5omGXZn074N1crsuzbRiGIlFV9ut%2Be2UszH7W0VZnmZoMpt4fZqpW9oujjqBvJ3RFE9PqnqJL%2FpcuyG4k4AkGkqGp6g92i9%2BIsfvqV888b2zAVKKDfZ3t6yssfO3nP%2FSNW6zoZW9OtF%2Bb7f22dYioHzH%2Fm9veuDDdXKyum0%2BSGuguoIuK4Azfq4dQCwi19Hy6IACAg7oIFt%2BApuKmbkBAXcfD8IZ5lWW5UshuRg%2BPidjBO%2F2wq%2Btb%2Blm6eNnYFRnx6n9l6U951%2FD3NbFTUteAxtu5ijgrgQsJAcHK1kmU3FMFVAoSZhCeL6pd3Ln02cgnmCo3SlGyn74U%2Ft9J9uJguVUOf26UQX%2BoWPn9uK9QyGfq%2FuMtDxfmVvi201nhqQABRyKPJ3wZcXL5eebkDioO7uKuAuJgTckTJsiwHlezG5bh4Kp2DdX33bbVd2B70ytY7INTszXnp0sV7DxxadR1iQSpJnSjiAmqYiILl8x%2Bz7MYhIIKIelHMy%2BJM1E%2Be%2FuqFKXMAHERE0MrTfYe589CR0quyCFfnzVblV65evaCaBD1kDy%2Fci82qxojuISCtiIqJh1twv8fbmrgA6sK1DTwOIq9dxeXmmP%2BbZdl32A1cq2c3CwcH3BfUf0SLh4ZhmY4IiUmv%2BMqAvz1uP7832ZnZ1IO7qgRMxMGRN5zCm6NKlt0QHEBcilbLs1F%2Fa3%2Fvt2d8oeByj3lN0LDs5XEvP8Sx%2F0D1nkRd6l7yqybPXAz%2FrSw%2FQ%2F0vzOpfuLyyf3S7ZylN22lsU5AQKgQRAyN7O3BxBwdHQIzCCFC4BAvBtEALUNBciGdZlhuV7MYkjot74anuld%2F38EO%2F%2B5lnqpK2CLTRYQ%2Be2975mUPHd9v2QNnTMnqMGIIAGtTBxG6uefdZ9nYlIKKi2oVy36sXNna%2BsrE%2Fg7JingCqqrJoIO%2B457FYp8OD4bRNOz6bTrun1i%2B21Eh5hAOn7hoebDeHLtZ087IraimDYrg4iIuTe9S3BcEBxF1xgYArIIpLAsABl%2FwBnmVZDirZjcpxMetJ85Htc8MF%2FqcZr%2Bwm41RXVV8aTZ9Pu%2Be3Lv3cvbf3LfakKG1u0cEdXBBVAcfBJOeVLPvuERBERC0U26H83cn8r7T7p2EmSKxo29Kp69mhin%2B2632E08u9A1VIa106H47%2FZ5MzG8gp0qo1%2F9CJQ7tpYzmUZUitmARB3QUE3EHyDpW3FXcQAcBBHBA3F3dHcBfA88d2lmU5qGQ3JnFccDVb1OLBU73lvfnwIvuOx4jGucp24oWz544cWvYwHIVR0qb11hFHEXFxSLjj5OesWfbdJOIiE4ore9NXXt3ZFl4T27bX63kTU5uWj5b3DU71dSKdbFvsGn3yzJP7xIpii%2B5HHnpwO84W677OZi1NqjpIYgUojgsg5OEZbxsOCPAN05rFHSQ%2FWcqyLO9Ryd4OHHEv3U%2F54N%2BeL%2F99ThxdpH9pcb53cBqfh%2F%2B44%2BN9WYfGFVVxc9xIRgJTd8UFgBxWsuw7TwBRF51I%2BWmv%2F6OQflMEr48yqr1Eddafx8X4Iff%2FsqkfL6aDXjXuuktt%2B%2B8vnfllnUfvCuJ%2F7Mv%2F6IxBYaM2aRtdxAqREMBJUdxzQHl7cnDBAXAHh5xSsizLjUr2diEuOGBplPTUgeEjsjiaXdiHxXJx3u05xMSnXtx%2B5J5yw3Q11IUks64wM3ETAwMcAXBB8r%2BCWfadJYJqp8Xlafvkq%2BsXRVr3Gjo6IWivpJ12C7z76OHby9Gi9hrVOJtP59tnxtGTmLCkfv9dD5Zc7TUzklnqrBYpA0lIDWJIAeJ5NvHbk0NenJtl2TU5qGRvLw64B4uHdfpDS%2F2fWrdPqa2V61PQgh3n%2F0lcCO2%2FFw54Oz5clhoNd%2FHomIsDCOB5AFiWfYcJAtIRnknFX0qzZ4JcSatCpVrNrbVyPaX4xJy%2Fv%2BbPaHWsVFXf2dv58uKR%2F%2BbquR1jXsk7Wv8X7zmyNHu1ql2atrUUSUmCiAiIKO5ATilZlmVZXvqVfRc4gItbZWlJ46MP3Tas6RoELOFGUr7yws7pl1%2Fpyt6%2Blya9kjIgwRF3Ablu06bkZ3ZZ9h0hgIhJ2J34k6evrl2Z7SUPqOOddRpKN6tc7rs9PHHbkUUJqmzMJ0f31j7%2FpS92%2B9J27FT2zsdXDgwXi6WyaJvYNY3NKaJKp%2BIKCkhe9pVlWZblRiX7LhIcxG1I92dSetecfyXIK3iU0immC6PZePzfd7NZXbxv0p0KZU8hJbNkIu4iItevfRY8p5Us%2B7YTMeR0V%2F0f052ngjzpLvRXpTfz%2Baw%2F9np8oJWfEf9P9ob7w6KoqqtN90Kafmyo%2F2egrvzBOf9w4gfaStN4VFaR1GJSqgdKxDyBAojmA%2BmzLMuy3Khk3zWOOA5euw2RA4cPHD%2FOUCSIBBWZzWR5uYFPPPOVVoudziO1eBW8lCRiKqbqIu6C50UiWfYdIYa%2B2hYvXd66st9dNgcUjR4FdQgtg2V%2Fz2N37t9xpD8czJouxbSxvfHCmXkITFvuXdK77jkRI8uU2swtRQkQxFUQl4iYI4JrXtWZZVmW5aCSfTc54oCnnsXVJfv3mt5HnF7ZFf3esCl6G7OXFsKv1vwH5186vdjbSKRQqRfBCzUVFzUXHAw8z%2BbPsm%2B3qMWT%2FdWfj3v%2FXUq%2FucSlBU44d5D2%2Bpcnw6srYfzOCb%2FS7%2F%2FQmIOjvmuV2t7TvvrnU%2FH5Gon8GAv%2FaXP33TMdSRHizNpGA1IEtEAKUhAXR%2FCQHztkWZZlbxL%2BzdWKLPuOE1wgiFrdn1S959tZjFqkYJB8lpTbGgaTzTv6y8FDrYiLCOLgjrioIw6A5FHFWfZtYqF6WRf%2B%2BvPnz878bPRJifR6y9MUiXsjQqKu%2BLPvOPxYWx0f1qC727OV%2FfBL5557sTMBqcMTqyceGRXlovfaxro5qXMVgqKFoMFwVxCEvO4ry7Isy3tUshuCgWLBbSWknxj05hvyaWafl2moNDRE5%2B%2FW%2FB4cbdt39qpSqloIyd07xMX%2FAAIAAp5vcLLsWy6F6ulu6a9tXP1ykM9XTom2fW8Z4z04tsOxBX72KO8fy5Fi4C5b%2B5PNcuk%2Fb17%2BmChRGpFfkJN3py4c1FEQm3WdpEhUUZGAqLi5gwDigLgguSPNsizL8tKv7LvPcDz1zHqaHrv92AkNB1QGISxURRDMqFq%2BePnS2v7emvnU1TWIimDgec1Xln1bpdBbn4w%2Beebs%2Bmx%2BJbnXAD4aAS0EKCoef6T6wYV7TupiT8q9adfb968%2B%2B9yLO1NHomh94tSxk8erxbK0ubRzTxFJKFKIB3EAF%2Fz1b5JP38iyLMtyUMluDI64427qaUD7iDf%2FbF0%2BWnOqjcdiukOQQdks9H8N%2FvLW1u8P9HJdxqrQUkURRFwEEVQAJPcpWfYttF2NflmX%2F8Ptyx8N8rHo5wXmgXppdWPv1FyWIDj%2F4xL%2F2ubq%2FVaNiqKNnPXRL7f1X5J0zr0q7QdS95fETti5SudMp20zczEVEXVzd3BH3R3AwRDPjx%2ByLMuyHFSyG4iDmwWLA%2FHlAwv3negvKqUwpAy9XoixVi4bn%2F3q2ctBN1JopRKpVApB8QJXEHBwybc4WfatMC4Gnxin57768rhNl5MXgEBKzOeR1NIWyhOPDY4uHjpUFWWMLbKBnL%2B09sXLp1tVUXY6%2F6F3PHhgVBcLw5GSmqbtGhOCgCgiDmKG%2BdffvOKWHzdkWZZleY9KdkOQr10cd7zAqzL9dBO%2BR%2BW%2Fc17UVE4WfF6dPzA9N56dnVHvXPiJhSMPt7JMFTBJnQYxHBzBAfLy9iz705pK79en8iuvrl8ayfngJDAlLA%2F3U4%2FodIvq%2F%2FjBQz%2FW9o9Uoqp72M6k%2BX%2F7S%2F9V%2B4pVVKPeg9vTn3F%2BSrYmMx8Ohq5ilYD8ASeoJEQMwRBzHBFw8l76LMuyLDcq2Y3GBXfHUx8fVfV9x04dW5C%2Be9E2CuzNvEeEpy%2B1X117dUN838uOnoaeEAAH8uELWfYtIB39Z14dP%2FnqGkEuTh0BBVWaJpEc%2Bsrjjz727hNHTlb1YtGfJ93Zng0vx9%2F98pdCGylkczZ78MDyux66Z3u7rV3jdBLbmQohgBsi179hHQFxHJCcUrIsy7I8nji7MQmmeBBraI%2F3S9ttsVnnMymZt4z7XKh4dkJYPnay6vfcexrA3A0MQQABJN%2FuZNmfzJnB4Odk43%2BfpBeibFtV%2BoLNl1OziEV0Eor2hHX%2F8gn%2F2W5y92C0WNathXHL6ZXFP3%2FmhSdHANWcf6I4%2BC8fOjTSpqeE1KVuRnARV0FFcEAARPBrb9ucU7Isy7LcqGQ3KMcdx1PttuzpqBZ3nSwOFBTQztEABRTME0%2B%2B8tIL51%2BdhHLspUqvkIAjqKDiIpCPq8%2Byt05epforV9Y3zkk7l5l5R9ej5zgk6hpnCXnnE8fvPzA4vLA0Ujpkdzo9cG77c194ymHQkIQjRw7ed8epWKV%2BXQ1ELDVg4ikggrpjiAm4iLsISH6zZlmWZXmPSnajE3AcwfsaTrr8YLG03N%2B05H8nSBC9fdfdGaNfIL4i07%2F3WPxHr8g9qeilIB4gIgIugIC75zFgWfbH46KvxOr%2FvLr5eyYvibclFP0Ts15i2kmq6raYdHcE%2BQ%2BTPrEuZbW81O%2Bb68V2%2FoVjw7%2BWNr70CkG5K%2FHOjh9f1JPsLgbvWYrEUCFGQAEFB8NB8l6yLMuyLDcq2duJg4O7iPsIjrmcOrTy0GEZCMFdeZ3DeManPnt2Pe3uNNOo%2FSL0Skp1xN1zoZJlb0VL9dR%2B%2BNTZzb1OznbeOgBmFRXgbprico%2B7Hl554ME769KXyr4G3e6arXnzpRefP%2F%2FKrgrAkvHYiZMrq0sjt6JpunbWxQZBQ1AVQRx3N0DABUHymL4sy7IsNyrZ24U4GC6Oui9Juj%2FZcrk0iTtfcN%2FHN6k3C5zgIW17%2FJ9nzUd6xYfMj5S9fnTBI%2F4HRDwPAMuy%2F3%2BySfF%2F9LZ%2Fd8xOLedbP%2BCDQTNs0DlypjdmOHtsOz3Q8e92srAnS4tpEHpO2G7s%2Bd7gV7rt32xjWUPiHYl%2FA%2B4qO3EvosVubiE6KWjAwRDczUFEcMhHO2ZZlmW5UcneZhxxSLiRCrclKZaK4ol7H1qhNBERFxBQkQivXJ68eGbtyt72ThMbaqEMHsQRRJA86TTL%2FggmxXrLp87uvPA8sw05nzwEgEQCSkqgmKeR8MSB4ejE6kItg%2BRaltvmstY99fxXnv%2FKxXIKgpc8fPfxE%2FfcY6NRv%2B4rsY1N8oi7iogA7u6AIHlAX5ZlWZYbleztx0HAEfBEAg1qK8L7bf9QGf5i7D5nrdRI7Pm8VqrzNL%2Bo8SVN%2F0Ct7%2B%2F0sFSFJ8XdSAoIr8nPbrPsjabS%2B3hZ%2Fa9y%2BcyqXDbv3Nmn7oYNy4btM5N65xjNqTl%2F4SDvGfarKvRD4SFswiup%2Bjtx%2FAsxFlC3rAj%2FqIWPpF4YxF7QylOssCSoiCXFBRzAARfPVWeWZVmWg0r2tuT4dcHC1ONAC6c9dcexd8rk9Nm1cfIuJScELTUw6%2BK5zdkr3aX7Fg8WEla1X2lM1rqZKYKDgLuI53ujLAMXjd3g7Dx9eu3yXpDztdODEiqsM6CkRNtB7GLNe773%2BGM71kvURY8QdqKfT%2Fvnz8Vn5msFoBiyfKj3jqMPdvPdOnaSUhM70agK6uLgfwAHxPH81CDLsizL56hkb2sCDog7uCIlITC%2F29P9e%2FO2kdbStIpN9GjBqLYK%2FbJ1n0nTQyurJ1JRqQbDMccEVAQEIA8By255JsVXe4d%2Bvm3%2B1%2B2N33M5F5xULM767GuSfgw693HlW%2B%2BS%2BbvN%2F813L%2F3kZndAyrqoTKqx6Pm5%2F948%2FIWNi5ugsCzyZ81%2FbnV0zNMgzSuipy6mBnUVCiEISHB38XxKSpZlWZb3qGQ3AwcAA8eTRWw%2B9DRInDy6ev%2FBsqeSopeh6Be1gKc0jcTWn7r06vrWbC8VXahFykJCQNRFTfA8Xii71XXeu7RVfey5l69eXD879X1zBKqqTS2v6fWAZZWlYfXD773nkZ1wgBCQKLrZteO9%2Bdba1hfOnSmragMQbjvGww8dtoXlalj3qyAxunUqqHgQURFB3a%2B1KJLfg1mWZVluVLKbgwCAuOAqUoQwgkeSnpy0U9j3bneQvK7FFKuKTne77mXqpcMHe3HeUw24mKmDuAsuuVPJblUiF6qFnx8O%2Fpt24%2FNunxGf1T1Svdj161YnlFYPpU40Oz%2Fl%2Fo%2BY%2F2flwp06W3TqUJlWe8ZOGPzVne1%2Ftdt%2BtqLRVEd%2ByvkLy4fuq8MglItE9YhHCRoggCLi4AKICwIuuVHJsizL8h6V7CbhgjiOJ0yMCq1CX4b9B28bPbS9%2BeJuoymamlUVs7alncLlbuuzL%2BwcPHUgaLUiVU9FPOJJBHE8nzKX3Xo6KV%2BZy5e79pkXr%2B47r%2FadAlCu4%2B40zalKjxYL3390dR53ajxQuBT7yWapvXh185m9cTPEK8oZx%2B889M7FxTCPam2fxtrOcRVRFUcCycBMcAPnNeL5vZdlWZblRiW7qQiAAyClayWhtu4uYzRrX4huXSNtHIVqwWLCnit4JkA5rXp1r6iHULiJmGOA5we62S1FdKtY%2BZ1y5S%2Ftbf%2Fa7v7Tfd%2BrA6liKotNqj0JyUntcIpM%2F3z0f6fr%2FfThwQH2S0UJoDPTTRv%2BzdZ%2Fbm3jy8LCUh130keEf2nBfkBHC7EdSCQ2lloTF0FFVFRwt2B5DHGWZVmWG5XsJiYCLqDmuFukDWIjDdNB%2F%2FGHDt4923julb0OgmpJkYgemIg%2Fty5HNjbqU4fKUB2mqsSViBuOCY7k0UPZTa%2FTan9SPn356vParTsXS6cHZY9okICCwvCOjo6Tq%2FpwOnLnQqqYqSAoInNT9uTltZe%2BqD4DYLzTjFbr9z5w%2BNAe%2FSSjKvhsnjyaJwngImDuIbnjuCAibp4Pd8yyLMtyUMluXgLuWKQzTyrVUl3e183%2Fy%2FbA36L5VWle6HZeWYWIdIyEZ9wnyMXt9fnKgXdofViL0iIguLgg7ghvkQCQz4DIbnwuOrbRR4P9dtr4TN%2FWOsdVypWVzVQBRMdnpKaIU8HhvzV93%2F7SkZM6jPsiIoghnehXqvpXD4T%2FbWydM1pZOHx5%2F%2B%2Fr%2BNe6h%2Ftrp01GS5WGGCPJBBOHmCBaFBcjAAI4jkBe9JVlWZblqV%2FZTcfB5bWrIJhYIiZrCmuX1BcXi8fve%2FC23koJJLxXmDGeoQUT9zP7nLm6eTnOd5O0FEihqMAf8%2FGugFz30hEHAUDyqNXsRtWFMsnK%2Biu7z55eO301reHah7L02cywRDIMSNBFVgs5clR%2B%2BMRjh4%2FVw7SLAJjITMJVeHbt6vMvnmuhrdhf2%2B9V1Ydv%2B0EOmsjSMBQ2m3Rtk5IrohoQN0nRYyS5pK%2B9ax3B89sly7Isy3tUspuWgCAiALjggpdIRVpk%2FHjF6t60a5CJ7S7gSlsd2CFcCPbF5OvT2aGDh1fQKqA4bogLgOCIIH9URAFwEASQ61MLguTEkt1QZFsX1vSun5rEv5qmfzOmjWBUwaPTJUKc97uptBONht%2FhfLjQf66t%2FuvVU7VeGEoLIEDYLwefXzn2X59Z%2F829bqdYGMy5vY0%2Fafy7h1YeHOzW7c6CmhJT6hIuEFRVEZVk5qpKCEmEfHZRlmVZloNKdssQAEEEXNzFY4GDN1qEg4t7TF%2BZ%2BZ6gNcwDqmjqLK1Eabd3Ds67wcKgwApxBXcAQUEQ3kQAB0AQEETxr4ckEUUEEL8uqOTJq9l3Vaf1FRafeenqF3cu%2Fu292Rp4AI%2BY46AQhOQATki8t5Tvu%2FO29xy%2FvR%2FX%2BprAAZfQhN5z4%2FmvP39uM8YL1p%2Bk2R1FOtY%2F9ZP333nHsFw2G3q0tk0ezRxBREXERdxBS%2FVKPQRcABxwyftTsizLsrxHJbtlOII4mFozKmuppJK6d%2Fikbp1%2FZs7VGecLvCiGUxF4WvyMyZfS%2FM%2BJf8D7K0oZWzHAEcAdEL5OQPy6KgVwF3cABcRFBYEkDu4IDnguVrLvEpG1YvT%2FavHxrUvPLNv5zkktRXF8rIIqFgiv1mWat71%2B1c6bJ5B3q%2F%2FA6sK9sn%2Bo2etJCwAm5aV65aOR31xfO1vIJtZnfL%2FIB6L%2F9EkO2X6duj4xWeskR0VQEdzcSclRERcxRA3HwXHyQPAsy7IsB5XsVuAg146Nc3PAyhgHohLirKifeOze7sLLW1sGmDuog8NcfNzIp1%2B%2B%2BsjKqgxkqSgr9YD9AUDAcRD5hvYG1B0DEoibmIACLi6AII6Rd9hn3yVJy%2B3Y%2F8zVjacn8TKcr50hjMGsoeuBohVVShGYz5o7B3r7wpF3nzj4xPjqKDXqEQCMcl9Gp7cnX7m8NhVZcx8UnOjJw7cd%2BcGVo4s7uwsWa7V2NuusUxcVHHUBwd0QEXMEMDEHXDzP1suyLMsgB5XsluEgAIILiLsnd4lp6PF2ZMln9%2FaXHwhbf9HG8xkjKqG%2BSrML42UudHxivvXnh4d%2BSvqLdH2NKlEwczccwBERQERUEEdBwEmIqGNYctzcCC4qooY5IDguAORiJfvOMAkXQv%2FXSb%2FVXN5EzvYco25YmoUVQkNzNsAAakizYptH4fsL%2FQcnx981PDzeOlNoy9dEqp3q9v9m%2B%2FLH19Yno4Ur48kd7u81%2FXsWqkdCs7R7fqHRulQNrpK0LBQUccHdHUMQBxxH8ujvLMuy7E3yHpXsFiIuICKCgLgrTkipcu%2BBl3V1%2FOC5lZM7G5stUWCMd4KXRNCpFPvT2%2FbGy9XAylAWISC4gYs7Io64iIsYigZBVV7jIuBR3QUXgOACCmImLoKLiDgAknfYZ99WU6qNsfz%2Bxc2vbs1eHMsZdxRKQoPgJQnYUeiBA9SJ9w9Xf%2FTY4w8tKfXFQpvrA8%2FZWD330v7vTzc2kIttt6LyUNF7%2BNjR9xwYHRVfTNSeLHbmyTy6ICKi6jg4AiYIXN9JSk4qWZZl2Wtyo5LdcsQBAQPc3ZJT4JUUR0vttdP%2FqpUvSv9%2FkPHTkqwHWta7itgM%2F7ikr%2BA%2FYuOfLFbuM1vEVUzdHRySk9w7SKgELST0oFAnSaArULMkqoATHXHxJCYuxuvkun5FJD9Zzr7F5tTPF9Uv2t6n%2BtM4kHOdhxmLrdZtgHqPYgIT9pIYfYj0ZvyA6wf69uFKTnAulGPxyOukpdwk%2FYXZxMrmIwvlc%2FvNu00fSvYvHbzniOwWzbgMXjguSYIjaFARENzMxQBcXDwP%2BMqyLMv%2BMLlRyW4pgiDXbSoRR8BB3YF%2BKLuC4ZHjl49Xp7f2WoFkIYZa644oSuHYLJbb45WaoizUKBFVxTH3Jvkk%2BqSqxkXREhov5iGYBNVCTVREEEERF3cwRfzaLFYREBeAPJ41%2B5Yyitj1Lu7Zx9Y2vrodn95lK4CjkQopCUrZoAbQFJUnoXTuG%2BqDp4oPHjlxZ2E1Y8EAIFKOpT6%2Fs%2Fm5i83n5mkP%2F9CgqFw2ov%2FYXe98tLc3CrslSd3Nkrk5JiIuiIi7uwBgiCBckxd%2BZVmWZW%2BQg0p2KxIEQVwQAcBxExP3EvpaVr77yLR9Ait30zgSSY6DNi7jlXB1JM8le0q6Q%2BXRFS%2BCpKCquJt1yWeJz27Nvro1XutPt5frWX%2FQdOoeClF1QlDEERd3RURUHOXa5mLhdXnTSvYtIhMd%2FtbSgf8ubv3F%2Ff2PRs51HNBqpfGl2IOelytbvd7ELCpWVeh42PHDpj8b%2Fd9aqj5U9G7v5pU3fM089M%2F0Dv3aTvcL6%2BNPBn3mEBPzu5OeGnf%2FxWjl4dH%2BkP3gSXBwx13FBUEQ7LrReyLXjfLOESXLsiz79pC1u4dk2duMC%2BAI4OAuiKoEpJDKCtn0cLasPuH8jVcuvDinhV5Y2E9zFlJRWqlydJsPqvzj%2FWOnDsws2bAuNHads9fZpVHx1Nru5%2Fa8Mb%2Fb%2BaE7lo8ND47adlHboYK1Kc0xBAfMcRdDTMX9zSOPPQeV7E8hWjFuek9e2v%2B%2FmV4o5DOV1yX1FOlYRHss7cA2KQal38ed6RzZ%2Bd6RfO%2FqwQ%2F1y4fbaZ8kGK%2BTmdbrYfF3vnrmqaDbZs87l4ac7OsHY%2F1nB8uPDtrKG0BwHATARAQUNwcRcfwbMrjnlJJlWZZ9oxxUslucOAIOYiAe3AqnCEUs%2B%2FtKs89kvfv5tPN%2FRTZHSIHsUxsrSCHBRA70hu8%2FsfdjS0fu2rND5rUQ8Z0mBapzaefTF%2BefcxzeKbzvrpNHgx3thdJa71osKSaWPDkmydSCGJjgAuI5qGR%2FGlGLS1S%2FN0%2F%2FRm%2Fr9l3ZWffOCVDKcKsvkFAAGl9KMrBZhAYOqPyzzruq5dtO9FdkGuj4GkevSPHZIwf%2FxlOnL8707EB3ugj8ZNQPx%2BL77zt21Melzb%2FpKasOuPPN8kmezZ1lWZb9ofLSr%2BxWJyDXXqo4mCQPMNSyGAy6xcHk%2BPIrw%2FnGPKYOT5ROcGoGVvV2m3HasW57srpc9qRXi5ah0KKYpxiWVu56x%2B2HD3i7NtlIsDcejqpSVVRdAkFFBAczNwPHFQRwwQXwvE8l461LUmyF%2BpMT%2F9S5rRcn8%2FNRrkQfKJXQJRLeqVAVCLjTph6qHg8EGQyKY%2Fcc%2F9nVEw8szhcZK3b9r3mO%2BELP%2F%2BoXr%2Bwn2XRfa6xYqHvYjx2%2F54MH%2BifZL63hja7N83IRBAAEz0cHZVmWZX9ceepXdotzAETAxV2SASbW1VGHSUrVD%2B913z8f%2Fno9%2F793uQwVOMy93fFa6sFT9f4r4k%2Btj39iZeH74QTdQP1Q30dds%2Ffi5cf65YOP3nZ2%2Feqlq3Ec09XWx54WqqJ2eqJFUBJIFHcVBATADXdxENxzVsn%2B2GSv6H%2BsXPrtq1fPbI63Vc6bu4CzLeAKZYCyIXQ%2Br%2Bf0Ej12rftAlO%2FB%2Fykd1ZPZsNwPHrnOXEeni8N%2FfX%2Ftb51dv7Qs%2BziR28e8Z7%2F71%2B969LbmUqGNmPEN%2FNo3d4RrPMeULMuy7P9fDipZBiAA4I6gIeIKTewKTz3Rw1JSh%2FuWT73v1Oz3vrKxOQUwrG0aHVWOp5FcuhQ%2FvvPq8cXllcXFFOarRXGgqJZHMrW0s9fcJsMDh20c7RLjXgijpIOqGCRb0DCoQhHbwgwzTe7uIogbCK9xnBxXsj%2BKo42UZ6P%2Bztn1L6T1VMgV8wZGC%2BV%2B7HBwABUNLoZ11uFOwzGRZsWPD%2Bsf660sNbG0ubhxjU6tf%2F7C7EvNM2cLXUu2Dwwot1hWPvjIO1amV8tijjvfnHON54iSZVmWvXV5j0qWASDugLg4iLi4YVahGqquqDY9ufQ%2FP9v%2FlVf3PymMA41p8MExjiaaQuY9dkqJjx%2FkJ08df3iruaOoBhWqeLLG2G%2FTlblf1uYXXt2%2FfZHH7zpy58JKb2%2ByMmuXlTqlEDtiZ5ZSwBUXB8UFFc%2FjirM%2FhKETwgtF9ds7O8%2FutNtRv5KsqSuGy0TD7O7xFrBPf1yX08LoOiz1YnwAHinkHdE%2FfPjI8rLV1ognrpOkPBcWfr0pP7q%2Bfnpqu%2FRxuxe5W7fvN%2Ftn7rlzKezXcZ7P%2B8myLMtuZLlRyW4O7gLgADjiggY6cdUYoi%2BEMLHZ8eXlDxw%2F%2BdK50%2FOrsS2CU867NlDMiEli3zm9zkc3LvXuLtWGy60c6PV6Rdl36XuylCa9apH9V%2FY499Tag371%2B0%2FVCweO7nSxSgxKLUXUomKAeTIAxxHJh3Vnb2Zo48WV6J%2B8uPPFxCTIxGXNLAjEyHRKUaE6YjRn3tDMmogrRYHrSU9D446Fwz9ysDzokyK1vIFMpdzo%2BOTZV0%2B7nE8eWUYIVT1IWwf14A8%2FdGyhudCLTd5qkmVZlt3gcqOS3VSuP9jB3RQHgoOJVPVYyy0JW2Knr65%2FeYsL8BsHj8t0Wky7QUWrc4tpqBJW%2BYnjB9%2Bv%2FcfbeJvrkolGG8%2B69b3Z8%2Bnhn9%2F%2F7IuwCVZw6u7lv1cWfnRh9dTmxqhMA7UytWLmqUtmLiDigiOO5PNVMiARdkPvS2Hw19fXn9qYSKFXCt1zJyWMYAyFnlAaEa7WI1QXG1uy8QocEe4Pejzaj991bFHbEQ3uXCdJvScHfr1e%2BKWzz66F7qI5BGbp8ciPBv375dCJ46Eq9wuMLMuyLLvh5aCS3WQE%2FGtX1M1xSSk4lQYr6iZUl7V8Jc7Pr2%2B9ss%2F%2FXC1F1f6cZPtRYtUjQWnc1%2FLuET98aOnhYnAQOZywxq5Ev9h%2F7BfPfeV304V1mAsCP%2Bg8Bv%2F8gcNUJj0pAwOV2jtSEjHzZOYGLjiCaB5bfMuKHvalerHTL15ee7ZjL8g551XzqUAAEaBMXhol1ACsDZZwr2ezg3T3BjmZ%2FPtPHnvfQnEwTr5xTlenxc7%2BwS9d2f0VNk6rvLjoILS%2BHOVH6%2BMfKHofXhovhqnklJJlWZa9TeSgkt1kBByupRVxF1IwChVE0XpG2Cp0w2US%2FGPPrz0JvxeIRlGKRTlhqLCHKRwd8UO3H%2F%2Bw9h%2Fcmx%2FT0KX0Klya%2Bn%2B7ful5uHQYjwAiDHfke5fDj5489T1Fb3U2P2DdSFLPkqQ2xc5U3N1wF3Hw3KvcYjoJ2168Olz4L5ora1ea4USvJGudgO6gcymplAqCAXiDGQrOyoxRB%2FA9hf7IwfqDq0eW2knFHDeuJ7Kpg9%2Bvlv6Xy1dld%2FxKsuTUsADvKvTOaH%2FfvXeesv0%2BM7Isy7Ls7SMHlezm5bxGcRx1RFyjmLhrNalHG73eFVv%2BjfOX%2FvLssnR0iiVuQwcMLjJW6MMp%2BPGaHz157KBWK6ZzD2ed%2F%2BXSSx9v5eJRp4ESYLTDsYaT8G5432r9wOohREbBR0JhnQpuMVlKnpK74zmr3BqkIUzL%2Fpr5Uy9e%2FTx8uZCL0QsQEEjILmEuJcMa6QgGUBie6CINg4b39vXAvcceW1360MbeqWZSWcsbtdpbj4PPnXn1Eyp%2FF58aprRGBe8a6cNHV%2F%2BeevRws1t5S5ZlWZa9reSgkt28HBBAEAdxFwdLYlZKpXW%2FKwebwoZP189vPzPpfgdeRc6NVnwOUZakZz4xdmo4cZQfPHLqR5I8EnWeZs9ubPzSdjoDe4PDFy25giRqrdK82p0ui%2BD%2B2KPDd99524%2B%2F3ByOcUFSJY5HTzF5dHfHPW9lvpnJTKsz%2FYWPte0nzl7e6nTDfaZeRgLlnsq%2BQBAoMEHLfhsX0AHJiS3NHJ%2FC0UL%2FaeFdfXvgyBGVOLRW3LiehKth8f%2Bg%2F9kre814%2FGxqJwcLZrOVCY%2BofC%2F%2BoUPF3QvDkVte7pVlWZa9HeWpX9nNSwBAHAFxcDdBQRxCjGU3kRAsUN9%2B2%2BgqL%2B%2BvbXSNN41QF6GapbnQ1dDBpSt86cqr%2FQG3HdCit%2FLgQw8%2F8ORXz07b%2Fem%2B9waEgBtt286mJRS4ljz%2FzORLz3xlNXCq1AMHDx4a1AsqvSIUBEnJ%2FbWvfDDFzcYkzKjWLHx5beuzu1sbQaYum2bjQIr0IWGtJaQgBAARUjLMoKV1YsIPB%2BndfvLoqUM%2FoOnIpStV19QSBec6iWp%2FXH5ma%2Bv5ON1Gtq0YlaPJZBvlVKUPnlh679FDt29tD%2BM8p5Qsy7LsbSo3KtlNT0C%2BvjtEHDFXERUqd4OuCJOynhXV5kT%2BzqUrn2zb06F4aVCmaVckWaSsRWY%2B2R1QKXet8MQBvu%2F4e6Zb5Wc%2F88IFZpfoVfXBi806MGQmtB1pDtMBCKMJx0VOHakeWzn8cD26v2mOpmbBm8KTkNzNcfKY2Lc%2FI0y0vKD1p0N1Ufx3njtXBX1ZbV5DWaJK25CU2SJOhZWkIUFIDfNEAhQW4QHVh4V3Jfm%2BI3cNF018M3gEf1MWOjtc%2BF9ne194cb9fyHZ0of%2FcwEjpx5K9I9o7jx55%2FOBwud0tUp5BnGVZlr2N5UYlu%2Bk5uCCIACCiipPcO0sqVlgcJqoQZLH%2FvYcemu0358%2BdrWezedGrtei6NnkEUNqSq5d48lXaFz%2F33sd%2F8K477lo792LpxUazAQRCQRFpeE0BfZizn%2FzlK83%2BlQtX8Z1eeNfR48erYZWmQ5WgJhjuuOW48jZlUsy92k3l6b3xl9Y3XwiyAQ4Xk0UDoOsIIKCKSHANCKSODmIiFRBhWfV4yb0HFn7gyKlHm8mw3QzWCfbmOERxxYu%2F%2FNWLW6YurEU3SMxWvdgaDO5bGH1waem%2BuD2ar%2BVz5LMsy7K3u9yoZLcMRxBcxEVdcBcSmASsUJFeknKstmOxlOq3Xr7yVOJLxhWYQKJv9B2k3HI42clBRveevD%2FG9smts2fbPUqAYUcBAaDeogR6zCFGABx6BcsVC8rf%2B95Hvmd78th8fiC2pXfijuddK28nRmgoX1pY%2FNtlee7Cqy%2BuzxJ6OtpY8ACqeI0rFjBRKHmNOd6WDdpRQIG0nJzxPYW%2Bb9E%2BdMexA1Mv0jxYx5vpRAcvLp%2F6pfH6x14458gFnAEIYcYT6PtF%2F8zBYyfqvSqY5rVeWZZl2U0hNyrZLcJBwK%2FfZm8iiCLJPBZxosiyF1Wot4RH7jvede3G5ub2ls8cA0EUtQItsc732P%2Fqpa8UWrTuKysr2%2BNtvhlBBFXMAJgb%2B5Ge87c%2F9txp95dX5fHlA3cxWCKWxCARcrNyYxPtKGZWTFuZdfK%2FvXxmHGQC24kxJlCWdFXlbUQEUVDsujlveEHR9oQUcS%2BNew7oicLef%2Fed77k6Wd5rKu8E442iVEGXT6%2Ft%2FZXTXzgTVCs25l5UxMhhlWbkd9xx6Efb4R3tZvBIlmVZlt0scqOS3UocARBxAUxwcSfhpm5iXnghoUzam5U6N7uQuk9u7f3Gnm0lhlCx8CSmaIUJUhXlVKYTbaigACCBQQKrkSHQn3eCNGJJHY1IgkiASK%2FjmHBSZCX4A0srdxw7%2FL5udiCOS49CIruhiCQpZqF3brj6ibr%2B1PqlL56%2FWrtuYDMHBwNHpFYvIbiLYYJBcgySKqrmlaWOEx13CQ8GfTzaO46uHFruDaytvtl%2BklbKi6OV3zhQ%2FsbTL463dA9rtZh3MUFP%2BEDQdxX6072lhQMMaHORkmVZlt1kcqOS3UoEB9xdAHcRBwEQRxAxJ3jqWVelsi6rthw8dMfBC8Rz5yY721szb%2FvFwizOAMfb2IVeIPBHMEwQdwcQ4TUGisDYueo%2BM%2Frbu1c2ti%2FBjx9fXgi9fs2ArsgHX3z3aZJgXqKjC2P75KVzn%2BLKVpBNaBLjkc0SgDgYYmLREgkAFSQQRMVI9geSmQHLQW4fykNLy%2B9ZPfg91qzGSR0n4ok3MikMf8n1o18984lOxy5XzBBiisA9A90d9m5bPvyRmiPzHfWOLMuyLLvp5EYlu0X5m2sWx0UA8YDiQbTotJgarv16wi%2Ftnv3tGc8ZVwsocAUBV7woooSuARwAA4GSEpiWCcAUk%2BBagfIaAwRJpTUeTUBZDbI0l4PBHrjtyLtXjzwxnx5t9gc2V095Pdh3mEmYhvpc6P1e0LOp%2B9SLl7zUzvxccgKIQIF73UTAARQCFAIBhFjiFbEAAQPgkOpPCndhd9558HhZj9K8%2FuZTuXS76H9c%2FJl594VX91r3TfNd2K4oao423JPkHy7DDy8eXBi2pbb5%2F40sy7LsZpUblewWJTivEQHBFRHHwRMYsYixIKy4tIG9qnzgtpPtYrnzypmmYVcQ8Iir0qbYeeANnG%2FgDgiiiGEFheMtbdeZCRSgbFUuMy86zp1dv%2FrK1c877ya89%2BSdd4x67Xy9CF2QpHkTwreNSUheJAuTqJfm9vJs8ux4%2FTmhDeImF2bWCQRwMIfEN1NQVARHjHkHBgoP9cUPVCsL4QP1iaPNZCU1Vbf%2FjS2KS2ilvpiKT756%2BUtTrqjumO2BQS1owdGoq8f44N2PvPfy1lI7DuQiJcuyLLuZ5UYlywBxRAAHAMNd3EUoLaiWMRT7EghWRf%2F9K%2BsfnfAZl5dxp%2B7Lwc7nigN7zCCiHbBqANsFbgA4CCqlu7opgCpBccc6ADGAQghGcDyROCxaQdvYB9955FT0%2B0zua%2F14SkNPIa%2F2%2BVYwNIm2IhO3iTS%2FWNx7bm%2F3wpULUWTmfi55E5B%2B4clIQhJSqKCirBHHYdIF6YrQoA64EwT1Yt6uJFbhsUKPR3vXQrj%2F6LFDhfXirLT2m2akHa0%2FpfXf3Zs%2Ftb7VuL8UQ1OPCMpotLS2%2Frg278D%2FXL3y0LHFHdkpiblIybIsy256uVHJMsAFf%2FNOFsGFTjwQNdpI6saKaahPnux9X79s9yZXzq7NE43PCxQSbyTgUJW03bWs4lx3GL0ZOF8nQgikFk8YGMAapsIh4akvrW2qbCXb6%2FPwqL6nGNbFQEJbaJJ8w%2FoWuaiJJtFOFWU827twtXt1yhp8pXh%2B1307%2BQyfgwKOzyMKBERCKCrXwoITHY94mzy6uQRUAZKR0sDljpJjq0uPHlx9d6l3tdNRnJZdJ268kUkxC%2BUmfOrS%2Bqf22S50O9oGXz%2BApT4x2bOyeu%2B9D%2F%2FE4vDgxgv7vlXmWQtZlmXZrSE3Kln2ZuI4r3FxHIIjLhp6EnpNESYd46655JPP74x%2Ff09ewicVmxABA6uxGmoA3RKSGgEKEEjQCB5AAHDFAlZUBKBj7AoCCvK1L8AhgXPIZVGkS73jx4%2Fftnr455orA5vUpEpi6TGHlj9ClDALYa%2BqLw4HTw8Xz0%2FaM2vbpze2imk3cd8yN68jhSCCKS5YACUpakTAMAMgyevXZPeBw17N1oDuGNwWdAnes2SPrnBbbzRsiwoTS3yDKNVWGH1WjjzZyMfPPF2GdDbFDgw0YMZykH89%2Bd3OXbfrQr3YsxQ8z%2FXKsizLbiG5UcmyN3PhawRAPJmDFWlWEEceqlAFYSqLtx3vPXxgV7ruixfF1ClBC6wgBjUVxEJAvEgUWOGYEfkTEai01mo2i9MU%2B0y3r5zh6sVfTLMVuA1uX11ZXV6q6QraGivE87BawCQkIYp1te5o%2B5Xt%2BVNnOd2wK3jQLfNNc4MWEkCCwvGAlqjiiisqiBBUNUk3S20CcwANJEPrQRWM6faRQqtkDzwwev9th2%2B%2FsntgmnpNJ97xRo5GCXtUL%2B7pk%2Bubz%2FqrO4U22F6qB6JjbxOIcf8B8UPygVYXdTR0ipRX%2BmVZlmW3nNyoZNkf56BIB1dcoHRVUbSYq%2B5psZPCHuFLL194wXhW2HI2YRyY9iCxOC%2BAPYFK6BnuuJFgzsDoAZCgg6kADBwgfe3LBYTXCaWGArEuCgQAJqdYaWTQ0bRMkj%2B4zCMHD91TL7xjYfnw1t7SfNxLXeWpENNbY71Q1DKiDeWcXqMLLyyeeGl%2F8urFC6%2Fsr2%2FKZFSUM683yv6l2U4UUAA0IYInIHQASSBAENx5jSiAK6IkwyEUgt7eTo8LJ4I%2BEO2HTx16aLjYdfultmrdN01N%2B1KeLnqfjvHLO5sv7sU5cq5ygBImrDSchHcW%2Bni09x4%2BdWQpDn2az3DMsizLblm5UcmyP5IAIIJjAGak4KlIVlk4qAxUK5F3PvLAoJnGS1eeG3db7jFBB8417rgDqFKUzBveEgGn65JBAQVaEACablt8O0CgF9lZk5fWN674xmfM74IH4ZGVlZPLq3g0i84sFDFAuFnKliQhItGldaJWHgad93bGzaWru5fT1U14Vp7VoAmiemPsdN2ENItNv%2BpP1ZInzCABqCJS4TFaAgxwBASAXo%2F5HMAMoChK54jFAws8fnjpXafuemw8OTje8bRV02K8iWkxod6P%2FY9dPvdyw0VhS2QzsVE6AgU0APcu6j2LS08sH3x%2Fmh2M48LyQTpZlmXZLS03Kln2VrgBCGqCS0FA1LSaaTUPYVf1XLP%2FySsbX5jINv4qbB0SPDD1%2FlRHOARHHd0hJk0UhhgOkaEBQAE4AHbdtdfvt207Tw2AIIqriIhbDYBh4IYnxQvx1YVRv52UUdzZNBuNwsFDqwsLC%2F9kOVmIDJOtdraSrO9W4Opvj7IlSdmptiKN6FzDOIStUGxVxbioXriydnnWnN0cX2xZKNTwxhhXg72eAXTQQLRFGECNlLjRTvEZzKAtYACB0XYJTIlWKz0oHDGAOaHjpLDScETlMHJc6vetnvjQgVfWu2Gh4ZsuzXIJnVZr5fBvmv7axTNP7bHa14n7dnKEQqkjRWQFHi30ziV%2F4vCxB0M41Iz7OaJkWZZlWW5UsuytEQXATXBJpFQ4VerKEEdS1zKIg6V3PbIcmq3TF7d2J2y1jkc6Eh4oHU1gGG%2FRZDZ5c1xydxzldaqIqkGK5mzvjfcAPAAwH6fpbKNh4zeTB2cEh%2BHwKkcW60O9%2FqIUfbRKXngK7sFdcQUFxfjOMi0cMcQdc3XUXQQNFmornp1d2vVuOmFtxlW4CpMgSZgJO4ldB9iI1oJBO5%2FRq1GlKhAt553GZMQEkMABQACBBAnHgRCCqZA6EigIlBztZKFjdYHvvePBx5aPr%2BxdPTFe2%2B1GPU8k4zomRaJsZuHqVvvZ2cbn2DgndEEHfbuQjNcYMbEcuG9V%2BlX1nkcefnRn56Hx3vJ8jueJCFmWZVmWG5Use8vEARwcTM2DIC5KkFC6Vo0Xu0EnweaT7fNbs7%2Bxx3lkHx%2FDBGbQEBJqaAIwB0KHQgnAvMABcEACCAo4BiQSQDAcFITj3bFEamgSbliCiCegUMfRBI4kBAREqmnbExZEllQEOvOZeQVHCMOgK%2F3ewdHS6uLCweFif9Q%2F1ozv3L8czAQPZoEUcHF%2F7So4IAAIKIk%2FXCI4YiLm7iIOJkSXpuol0UZ0LoxVd0OxH9grq61uNk2%2BFSfb09n2ZLI1ZTZjYnjQoZDEZ8Kee6eCeAG9qpBkRKPDIhjOtUlrc5gpXkCA6tpSK4yQqn7rlVtBAjbpK9rDesxqWIQjwl1BV8we7fOuE4eXEU9tJa7e8WbSable9r68uPw39tc%2Fu7exv8uK62UzSwznONRVaNu0BHcqD6k%2BGPV7lg%2FdtqBFMQ0a5WZZkpdlWZZl5EYly77jHEBwEBcXieIKiS5Y0tT0raykWpSwXR0Id4YPDBafXt958eyrs8hrAsER460ptBARVY0xuvM6ZcYMcFwQRUEcB2LsEMAQEF7nruDOjvvEPEAFJQg0aiW234yns8n5NQ%2FQuAfnQ1BBAUPoCcOasqQOury8ENAyeCmqKi4CAQPDHQMQFwdMESHG6Ck2Fruua1rvOtqEGc8qM6dp2DP2YQ%2F2wFVMRIS5ewsTl7H73GlhV23DwfkaB6IznkWc4ARHILxxsHMQVEkA4JAAMIikru2cACUCBIKquqUFlcPKIPn9xw4%2FuLL44LB3eG9zMTYVUUg414h0UrRJ9jt7em37Ew1PcbktdKay3%2FP90phDxEGh7dKhQuvo964efc%2FRE%2B%2B27QPddmkNWZZlWZblRiXLviUcrvUJ7uKOmLgFC8FDoEpFMQvl1BVn5vEzmxt%2Fazc%2BC5dhPzATMBAFSAgoAGlR6BIOpmjACzrDwQHAIIEhvCZ4wdcIrwsAFq69RnndbnUIQAwDSRgQMSDh4BGAFECgLyBlAaVa4QRxBSW5o5hChOQY3oAIGOLquOMOCa6%2F9gUV%2BiIiFCDgYBURojN15uadgYABiOFCMIRrDrFiWIcn6LAELe5EStCEO5JQrpnVXE%2BE8HpyAkABRAFCWKqKe5vto8JC4tG%2BPrF89MFqMfg%2B5Vy9FU%2B8UQzFWBbONMNf3d3%2F3P7aVyUe7st2YFecCHMqYzFSgEAtHAz6s9Hu0v6JE0eW67bv05I8dDjLsizLcqOSZd9S8vULArg4LiBJcaJH0xgWUtcPRVOWHcV9t53SYX9psvvJixen25R9ujmv0RB6ZRWbNnnCjDJgTgspYRDKuu414wnfcTMnOgAODrgAeICAKwDFdd1FAaWYg0MJCRoAkgPMHHP2cbsu6aXAW2KY43yNIIq4BrMOjKKgEDSRnAQQQgEAZuZuuJMSIHUNuAsxHlUfCPvi68bdjx%2B63coHtPfoPB7uZoVdVuswvs6k6FQnwc%2Fa5PT65KWt3QlcDTp3nzlnzQngABSERIocL3Q32cmTvTtOHXv3JT0a9kdshbfJAIMsy7Is%2BxPLjUqWfRcJAIID4I44mJMCok4pQVxECsqqDWGsYd6wOelemTa%2FurO7KWwq686OAQj8f%2Bzd2Y9kyVXH8e%2FvRNxcqjJr630Yz%2BLx2DN4wZYNAj%2FyjsSL3%2FgL%2BQsQSMiIzQhb2JY9aMbNALP0dE93dXWtmXlvxDmAu6pSNWqEAA90W%2FFR6FTUraOrKtXT0e9G3pF0kINLBi5CRAIIiCAQJUFiLQCoUAUCrtaANQPAuSTWxGfrsAPrPOe8BggCcANwIcNZ35%2B4OpAEwSVx6YuxYp0TWQ%2FlvKqHwFg%2FyGUAsQAwEAgwyERicDwTAi6OoqQOqyyh9MSQasmBILBg1vN20i3jWomvBF%2BX%2Feb2TdsZeTqcmKUohLOmqnSWxx920z8tw18%2F%2FOQXJ1FX5ImddbsHDqtgKBnfwTt8zLCk3jTbEzerf3ti39nde3Vim6lPUaCdlW%2Bapmmalqg0zecreEoQYASECERQ5TVCEbmW7HVqeZJHfU6T3bF2Zt9745W%2FefLkLz%2F6sKzIIFGCPoIMDg7xtAaInCnP6Vv%2F4nJ%2BwrkqQIjPlTtR8dB0k2LRV7wCQKVCNQAcdw%2BC3aw9cRzM5rGV4rWN6e%2BM5m%2BH9tzH9ElnisrV%2FGRB2k%2Bjv%2F%2Fo%2Ft1T3oHHArOJcZjiQTgOrA0MaLiV7GFhPs9v%2FcatPzC92Z9t%2B1IRbUJpmqZpmpaoNM3%2FMQHBRVEQAWFBRFhgKEuJbHTR5V75RDasiKL3z46%2Fv%2F%2FkB%2FAuVJiDoBPLxH7hFFbAdMJQeMohioIOgH7KWsC6BwIcOR0YGACFNWcttL4SYq27cuf13tZZCcGanp054TzbKF%2F5beLqcuFcEowZAId1fCQuKRgnOiGnVnKwm5iFtsSesVF51eMr27w%2B0Y2N2QY2TuqE%2BcAFV3ZssHSUu38ZpT%2FvT%2F7q3pOfH7Kza7nng%2BKEoQk%2BoS8JNjkSAFO4ZXrZdKP4G%2FDdG7uvTLXR1Y7aIpSmaZqmaYlK0%2Fx%2FCc5JCAcFASERQVQ8QiWKeUklTyyNu0kZ5eOx3Z7v%2Fv6XXrm5YX%2F25MMPP9xPj3RGnASLQoJJl1dDoe%2BR0YBB8AzjzXEppS7qMLBpmolpojp9xHw7Xrs9%2BerezVemkzcene2dLWbuHa4oBASh7LKC3MuTo3L34ek7wXvwAAYzl4HfO3EEE8M2OFpRDWzaTctwdMO0m7Ace5vjL%2B%2Fs%2Fd7mxjcXR3NfpXhOQ7CmaZqmeVG0RKVpfmUCCQgQBAqFgiAERISnCMM6mawzJXIqsmNYrUrybjvt%2FcmEH9279%2FODx4%2Blo%2BCEOIXHGNm4FIWAYBSM6YDKegWBOCcHCNbVnEth64oAYYBhAOd1wXoP6851fxBcKKwJXTnHc5UAqAyA4VwQa8Zn9fYS7lChZsomw67qnspYMUczsVX9peC1KTdupFuj2csbN%2BNs6T5k1SRPVMUQyh62Uj5Oowfd5Kc5%2Fd3i9J8effyvpzzMO3e8pFr2qxaRElIdjLg2nZ8sDgUJIBLMjG2lL%2FjqzeCL23z5xux26uY1plFTex1K0zRN00BLVJrmOSICQFfHlkRAKAi5KwLHw1cpQpFG5J0ksobUndYnr9Zx9%2BbrX9%2F4xntPDn%2F4%2FvvvHR9GYCn5c%2Fz4kBAXxOcri7ExxhORoItOlp386p3rd0a8PJ%2B%2BNk23hmFrtezqMK01LQ66WKJwGwcqkYc6rks7OlndXZ28MyzehQfGMmnptnKnrj4BlAin1godGll3uDjssDGjbaPTckUU5tMbN7%2F30tnbp8udWmdRUhn0HP%2BbmqZpmuaF0xKVpvl8BYQAAfIQAsIdKiJjyZQjYRmlXnYWWkTfm%2BcRj1eruw%2BW7x7xY3RMHMARnMIxeSmIMWwA4IbGpIyCvtIHIapJ1Rh8qASJlFKkHgCSI0gOkAIq5gAGAca5AzouWSBhF3tADlxcEUAvHOTrGihIkECQLpYBsD8WQAQOQa4k6CDDCBJMxQgyJCkHv0VcC7bh5RG3Z7w03ZyP55bGEWCBhYjsCwsvGgEFW5CeKL%2Bfxj9w3j08%2FMfHn37U%2B%2B2RJhqdmB75CBeVVCMI75ZkR04EAoFxrbK11OuJHedmja%2FCt6a8fP16HkeKvuUnTdM0TfNMLVFpmudaAGCBIAIEoACZABFQXDWC0udQVmzJNi33VQu6jTx%2B5ZX5TPbmZHb3ydlPHzx673hYgIeDAV03qbWGD4JKDQIKxIgRlBLDUIvjAB6k5D0AAsgJMyTLaDHUBOIKIeu6%2BCUikBNBAJASERBE4M76Tx0964g94xHmhCMngYGJDnYgCEMIIBsiDAmyx2zEjdn2tZ357nx7czadpdHv2t35IiW3SUmjYqmqj1STRkMxQhDhC58Ow7BaLhZD%2FdvHpx%2FDPjwylmaPI9wjZe5bwo3iRMVFBSwpORBBl0mBl72qXWe5Ymsvboz5xs61387TL6yGWem7WFm0EaVpmqZp%2FjMtUWmaF5IAAkAEIQgiDCASSJLMcy6mpeWedOxxGmmJfTrUT09OP9g%2F%2BsR1P%2Fgh4eBQoYgwPANEubz%2FSIFCQIKMAeCGASaTkDTdHAFKSLKEmYUhaXLvUy4E5ItawThnAAg66YmCkESCGnQiRRiSEKQgg2AkADy%2BBlMYww7Mp%2ByMbWuUp8q3d3a6yjh8EjZIkBAld%2FfTJJREeFCDlTGIw1G6P6w%2BqKv3z57cPTn4eBH7BTK3ZXmIQ%2Bc4AoGBQ4HAoLvMahxAAEwSOfQbpo1gXP1r8M28%2BfZsb3NeLPWdlU6uFqE0TdM0zX%2BlDSpN8%2BLSRQ0iIEAECgxkEsIQCiPMitki0pnl4zQ%2BTONPI%2B0fH91fDn989rAWX%2FY6LbESg%2BMCmMzGZYjSF4oBiQQkGNMBQQUqFQgcCAoQsCaA727bU8hySlkpmTK6t1%2BSwsDC9%2BbJq8tReCqpU3qwOR6nbF0apdwZGVl4Z2mUmXaj0SiPU9eNcoe9dXZ%2F5MJi7MrSJCxH7dzoh%2ByMaskFec01shfgZ4Mtiy8Wp0d9%2FxgewRPYh0M4ESfoVKzEWcdRjgJUqBAQ66RHgJMgc1472DPtGgdO38XXrm1%2FY%2FfWt9CX%2B%2BPtupiqtOGkaZqmaf5b2qDSNC86QXApJBAABkGIgBAiFAglTxosD0EvW3mZ5NnZ4eKdhw9%2FPHBX%2Boh4GOyPOYj1sJGdUbFRRDCqbAIVD8KpFZwaFLJhYBUDK0goAI46AZBRUhordbKMii8mShO6OxOfWupkyTQxy9LY7PbGrMv%2FzsYpd6aMtufzFEhxXhG4pCNmA3Xoh7M6nPWr09qf%2BmopPymLBfW0Lo%2BG5Wm%2FOutZDfTOYaILmROBB9WjgjvqjMihRGQM3AgRsVuXQayolejlCEtYZivTnZErryXNxDzINe7AH97cmqVuMmbTfKzSzp80TdM0zf9MG1Sa5teKEEBwLgKCcIUUoZDJTEaSSDXZgC0snWGLbny4Nb434SdHB%2F%2Fw8MG7J9w%2FlhODwDFnVOkAustBBYBwFHK34l4wUMHA1kMOi04ApPN6viaMjMiQFKboBDAyu0nNZnVYcdFvkCBHEBFgABjnTqFCQIUKBXooaBADFFgFhbj86Wl39fxLgDChnGsfYETGIBKW6bqtxYFQgZAW1kcAzJNuwQzyJL6wxWu7269tbn2B9KXjs51VP6Jam0%2Bapmma5n%2BnDSpN8%2BtHEAQAAQRAIFAgJAAMRaBkkZJbGlIejKEEhbHnqTYenpy%2Btzj9yfHhz6T34ZOIMziZsMoQAPjFJjBHw%2FpRKLuowKP5unn9DJVDoOApi%2FVcUzZZ98d5mwIScoAMkkQkEdAXJAUR4AbgAqACINbLBGycJaBAhYqTRBbJ8AKQM12HV%2FoedwI6xgPXit0U18Wt4E71V%2BGN8dbtnHbm07zhWEmUFG0%2BaZqmaZpfmTaoNM2vswguCREBECicQIQwCZORhGW35FJR6p0F3ZHS4cbmo%2B3tf9bq52cHv3h476Pj5f4ShxrUy8MbDk7yzw4qCYCHIwCCdQUcQAEgkViHJKvuamdcVAO%2FnGrW%2FcVZE1frVQLYLZsR0eMDPqhikIVAARBPq4%2FEDM2kSnyqeH1n463Z3hvd%2FNWU3xzKy8PxVvTj6I1qasNJ0zRN0zyn2qDSNM8%2FAQQABBEEAqGIMCRhEmAIk5Q8JTdbSavCUESJsWs79GhkHx4fffzo%2BH14APvSIRxHHMPR05VZpfWkMj0GCBFBFQUQGAB2JetAAKxGfJYDBKwFl1LHU3G5%2FHyzfu%2BKjHOLUUEFx5wUbDoT2ILrMJXmYh6xGbwK1%2BEl%2BM7eHTM7G7t3jpUs7ygtOWmapmmaF0J7j0rTPP8CQBdbCREhAiBEQLgDQVgIqioZZdlmKGSeNVg%2BRC67dm1n%2B8a1L%2Ba8SPnTOny8OPmkr3%2FxwaMxTKUVQaw%2FPcyvZjtmuIFB5QozTAApPSMPAoI1sZbSeXN1eLYgggvuEuYkJwUdZHAAbhBv7W59Zff6nS7Pa686TEp%2FFn0y78yzCk3TNE3TvFBaotI0L5oQAAgIIEBEBCFAEAFhgSELJUlPt5bD5KYBK4oB9aGV%2B7KQN%2BYl8umiHBytHh2dPC4np5QFfB8CQrgoQQkGWEFFPXkgKsmhgp%2BvFRB8lvNs17hCF2u4%2Bq1BgiS%2BHYxgBtfh%2Bsb05vZ8d3M8TzE1JrVMwjcsRuGGK5xwIgAImqZpmqZ50bRBpWleXCLW4cX6KygQiLCQkEDCZBIRBCEUEiGXqqxaHmS98orc0%2FVYUR7Sxo9muyfenSzODk%2BOD45PnpweHy2XJ%2FQHHFdyQCgJqyGwSBrs1CMc4j%2FggQcBzpqEBJDE9Qqsj%2BgLYH3FYLqRZ780mYy6rvsj7Y68ZO9nDBPvN%2F3f2LuXHjeKMIzC5y3bQ0ICYcn%2F%2F2%2Bs2HKZzLi%2Fw8L2WMEIcQlI47zPovpS1fb6qFXq7e08v9O3zCHBbblx%2BdtxAFspVVVVr1NDpeoeCMiLiLAucwHC2QguvCZDFlnJMoswWehGnpMtbHD0%2Bv17w8g65Dg%2BPT3%2B8vH5p18%2F%2FvzI4yNPww98Eh7CdhkD3myYf4Y9fA0f9nx4w7cPfHPgPXz%2F3XrzjJOHyccclmuytt3ueHi32%2BWw5ys9OGvbMscYxpkZZxjBIBqqqqrq9WqoVN2loAFOw%2FWeQcziPJdcpxNCzkckexeSAViCLIk4ZMMn3eAIW7LBU3ZP%2B%2FcmqrAl4pYdKDmNSVwBIszsHn4M7Ib9lp3ujxzMgbWcPXnIYq0d7nbZO2tmIQBEM7MYh8HRcVQRYgLQUKmqqnrNGipV90vgygDEmxUSzpKAIQgJFyEhlyURAF9%2Bkwxry34IQSKKyqjBAAEMYUkWLIwm6Okc3BYrTDCwMDEKguLpKIhAOB%2FOt0%2FSRqmqqroHDZWqL4J8IiC8DEnwz54LycuNhGsPJBAikCXhJNfFvlyHq4Qz8TQOisDNJngHmCQkEkAIRoihO%2BarqqruT0Olqv6oTXJzLWfh6nehEELOF%2BG2SzyfKJgAwRARCQLiZcmV50eT29dENFSqqqruUEOlqv4dOQvI3xBugiTcCkj3nFRVVX1pGipV9d%2BQv6wdUlVVVf0yfVX9Qw2Pqqqq%2Bv8sqqqqqqqqPpOGSlVVVVVV3a2GSlVVVVVVfTYNlaqqqqqqulsNlaqqqqqq39qvYxoAAACGQf5dz8SuBlzAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkCUqAADAjagAAABZogIAANyICgAAkDU4Wu%2F2AqOP2AAAAABJRU5ErkJggg%3D%3D";var c={};c=s("4dA5s").getBundleURL("gb8Cc")+"IMG_0392.40ea563c.jpeg";var u={};u=s("4dA5s").getBundleURL("gb8Cc")+"IMG_1592.e380f5ca.jpg";var B={};B=s("4dA5s").getBundleURL("gb8Cc")+"IMG_3432.edaba5d1.jpg";var d={};d=s("4dA5s").getBundleURL("gb8Cc")+"IMG_5986.4f2cb38d.jpeg";var F={};F=s("4dA5s").getBundleURL("gb8Cc")+"IMG_5997.84dbadd0.jpeg";var h={};h=s("4dA5s").getBundleURL("gb8Cc")+"IMG_9111.7da4fc05.jpg";var f={};function p(){return"localhost"===window.location.hostname}function A(e){return Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).format(new Date(e))}function g(e,t,n){if(!e||t<0||n<0)throw Error(`invalid argument(s): ${e}, ${t}, ${n}`);if(p()&&!new URL(e).hostname.includes("roathchamber"))return"https://roathchamber.org/share/resize/00316-335561172.6e7667.300x200.png";let i=new URLSearchParams;// returns a full url string, for easier parsing and validation later.
return i.set("src",e),i.set("x",t.toString()),i.set("y",n.toString()),"https://roathchamber.org/php/resize.php?"+i.toString()}function m(e){history.pushState({},"",e),window.dispatchEvent(new Event("popstate"))}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){var i;i=n[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}function y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n.push.apply(n,i)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}async function b(){if(console.debug("initPageAdminModeCheck()"),p())return;let{isLoggedIn:e}=await fetch("/php/adminIsLoggedIn.php").then(e=>e.json()),t=E();console.debug(`initPageAdminModeCheck: serverAdminMode: ${e}, cachedAdminMode: ${t}`),t!=e&&(localStorage.setItem("admin",e.toString()),// force reload the page to update the admin mode
window.location.reload());// Otherwise, the admin local state is correct and continue the
// page load as usual.
}function E(){return"true"==localStorage.getItem("admin")}function C(){localStorage.setItem("adminLoginRedirectTo",window.location.href),m("/admin")}f=s("4dA5s").getBundleURL("gb8Cc")+"IMG_9908.2e02af33.jpg";const w=()=>/*@__PURE__*/e(a)("<footer>").append(/*@__PURE__*/e(a)("<div>",{class:"footerInner"}).append(/*@__PURE__*/e(a)("<a>",{href:"https://davidkanekanian.co.uk",text:"Website By David Kanekanian"}),/*@__PURE__*/e(a)("<br>"),/*@__PURE__*/e(a)("<span>",{html:"&copy; 2023-24 Roath Chamber Orchestra"}),/*@__PURE__*/e(a)("<br>"),/*@__PURE__*/e(a)("<a>",{text:"Switch to admin mode",href:""})//
    .on("click",()=>C()))),I=()=>/*@__PURE__*/e(a)('<svg viewBox="0 0 36 36" fill="#0866ff" height="40" width="40"><path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path><path fill="#fff" d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"></path></svg>'),x=t=>/*@__PURE__*/e(a)("<a>",{class:"fbLink",href:t}).append(I(),/*@__PURE__*/e(a)("<span>",{text:"View on Facebook"})),S=t=>/*@__PURE__*/e(a)("<span>",{class:"material-symbols-outlined",text:t.icon}),k=t=>/*@__PURE__*/e(a)("<button>",{class:"iconButton"}).append(S({icon:t.icon})),T=t=>{let n=[],i=/*@__PURE__*/e(a)("<a>",t).on("click",e=>{for(let t of(e.preventDefault(),n))if(t(e),e.isPropagationStopped())return;m(t.href)}),r=i.on;return(// @ts-ignore
i.on=function(){return"click"==arguments[0]?(n.push(arguments[1]),this):r.apply(this,arguments)},i)},Q=()=>`
  <div class="t t1" style="height: 30lvh">
    <section>
      <div class="upcomingCover"></div>
      <div class="logoWrap">
        <svg id="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <image x="0" y="0" width="100" height="100" xlink:href="${/*@__PURE__*/e(l)}" />
          <g fill="#ffffff" fill-opacity="0" stroke="#ea230c">
            <path class="mask1"
              d="m38.65,20.61c8.05,-1.53 13.34,-5.87 12.75,-8.41c-0.59,-2.53 -5.47,-2.36 -7.47,5.56c-2,7.92 -4,27.64 -4.81,33.69c-0.82,6.04 -1.07,10.54 -3.58,27.41"
              stroke-width="1.19" />
            <path class="mask2" d="m42.69,16.28l4.34,10.76" />
            <path class="mask3" d="m49.45,35.24c-9.17,-9.17 -20.62,-3.52 -22.14,6.76c-1.52,10.28 13.31,18.97 22.48,6.34"
              stroke-width="1.5" />
            <path class="mask4"
              d="m16.34,73.66c1.24,-8.41 8.55,-18.48 20.48,-17.52c11.93,0.97 18.07,10.62 17.66,18.07c-0.41,7.45 -8.83,17.79 -18.62,17.72c-9.79,-0.07 -16.97,-4.21 -19.45,-17.72"
              stroke-width="3" />
          </g>
          <g fill="#ea230c">
            <rect class="mask5" height="4.55" rx="2" ry="2" width="17.03" x="46.07" y="19.52" />
            <rect class="mask6" height="4.48" width="23.66" x="50.14" y="49.31" />
            <rect class="mask7" height="4.83" width="29.59" x="54.48" y="78.69" />
          </g>
        </svg>
        <div>
        </div>
        <!-- <p class="tagline">
          Community Orchestra based in Roath, Cardiff.<br>
          Rehearsals are every Wednesday 7-9pm at Urban Crofters.
        </p> -->
      </div>
    </section>
  </div>
  <div class="t t2" style="height: 25lvh">
    <div></div>
  </div>
  <div class="t t3">
    <section>
      <a id="upcoming" class="megaScrollAnchor"></a>
      <div class="upcoming">
        <h2>Upcoming Concert</h2>
        <div class="row">
          <div class="poster"></div>
          <div class="info">
            <!-- <p>Join Roath Chamber Orchestra for the first of many concerts to celebrate our 10th anniversary year.</p> -->
            <p>Sunday, 17 December at 5 PM</p>
            <a href="https://www.facebook.com/events/177429568773354" class="primary">View Event on Facebook</a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="t t3_5">
    <section class="tenYears">
      <a id="tenYears" class="megaScrollAnchor"></a>
      <h2>Ten Year Anniversary</h2>
      <video controls>
        <source type="video/webm" src="/share/10%20Years%20of%20Roath%20Chamber%20Orchestra.webm">
        <source type="video/mp4" src="/share/10%20Years%20of%20Roath%20Chamber%20Orchestra.mp4">
        <source type="video/webm" src="https://roathchamber.org/share/10%20Years%20of%20Roath%20Chamber%20Orchestra.webm">
      </video>
    </section>
  </div>
  <div class="t t3_8">
    <div class="musicsNote">
      <div class="musicsNoteRoot">
        <div class="musicNote1"></div>
        <div class="musicNote2"></div>
        <div class="musicNote3"></div>
        <div class="musicNote4"></div>
      </div>
    </div>
  </div>
  <div class="t t4">
    <section class="about">
      <a id="about" class="megaScrollAnchor"></a>
      <h2>About Us</h2>
      <p>Roath Chamber Orchestra (formerly St Anne's Orchestra) was founded in September 2013 by a group of musical young professionals who regularly met on a Wednesday evening for few drinks. On realising there was at least 1/8 of an orchestra in the room the ensemble was formed and the first mission was to find additional keen music makers in the beautiful city of Cardiff!
      <p>Since then the orchestra has grown in strength and ambition performing at least four public concerts a year including a Family Concert in the Summer Term. Our repertoire is mainly chamber orchestral works (symphonies and overtures) with members of the orchestra regularly volunteering to perform a concerto with the rest of the ensemble. We have performed works by composers such as Bach, Mozart, Beethoven, Schubert and Tchaikovsky.
      <div class="gallery"> </div>
    </section>
  </div>
  <div class="t t5">
    <section class="past">
      <div class="postersScroll">
        <div class="posters">
          <i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="postersOverlay"></div>
        <div class="details">
          <h2>Past Events</h2>
          <a href="/concerts" class="primary">Go To Concerts Archive</a>
        </div>
      </div>
    </section>
  </div>
  <div class="t t7">
    <section class="contact">
      <a id="contact" class="megaScrollAnchor"></a>
      
      <h2>Contact Us</h2>
      <p>
        We are particularly looking for regular Viola and Brass players. However,
        if you would like to be added to our list of deps, please get in touch
        via email or drop us a Facebook message.
      <p class="fb wide">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRoathChamber&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      <p class="fb narrow">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRoathChamber&tabs&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="300" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      <p>
        Email:
        <a href="mailto:roathchamber@gmail.com">roathchamber@gmail.com</a>
    </section>
  </div>`,q=t=>/*@__PURE__*/e(a)("<div>",{class:"upcoming"}).append(/*@__PURE__*/e(a)("<h2>",{text:"Upcoming Concert"}),/*@__PURE__*/e(a)("<div>",{class:"row"}).append(/*@__PURE__*/e(a)("<div>",{class:"poster",css:{backgroundImage:`url('${g(t.concert.poster,600,400)}')`}}),/*@__PURE__*/e(a)("<div>",{class:"info"}).append(/*@__PURE__*/e(a)("<h3>",{text:t.concert.title}),/*@__PURE__*/e(a)("<span>",{text:A(t.concert.when)}),t.concert.facebook?x(t.concert.facebook):[]))),R=()=>/*@__PURE__*/e(a)("<div>",{class:"upcoming"}).append(/*@__PURE__*/e(a)("<h2>",{text:"Upcoming Concert"}),/*@__PURE__*/e(a)("<p>",{text:"Check back soon for details of our next concert."})),U=[/*@__PURE__*/e(c),/*@__PURE__*/e(u),/*@__PURE__*/e(B),/*@__PURE__*/e(d),/*@__PURE__*/e(F),/*@__PURE__*/e(h),/*@__PURE__*/e(f)];// HAHAHA no structure for me!
let V=0;const L=()=>M(-1),P=()=>M(1);function M(e){console.debug(`galleryMove(delta=${e})`);let t=(V+e+U.length)%U.length;z(t)}function z(t){V=t;let n=/*@__PURE__*/e(a)(".gallery");// global!
n.find("img").attr("src",U[t]),n.find(".dot").removeClass("big").eq(t).addClass("big")}const K=()=>{let t=/*@__PURE__*/e(a)("<div>",{class:"gallery"}).append(/*@__PURE__*/e(a)("<div>",{class:"leftRight"}).append(/*@__PURE__*/e(a)("<div>").append(S({icon:"chevron_left"})).on("click",L),/*@__PURE__*/e(a)("<div>").append(S({icon:"chevron_right"})).on("click",P)),/*@__PURE__*/e(a)("<img>"),/*@__PURE__*/e(a)("<div>",{class:"dots"}).append(U.map((t,n)=>/*@__PURE__*/e(a)("<span>",{class:"dot"})//
    .on("click",()=>z(n)))));return(// initialize after adding to the DOM
// stupid global state HAHAHA
setTimeout(()=>M(0),0),t)};function D(e,t,n){let i=document.querySelector(e);if(!i)throw Error(`Invalid element for selector: ${e}`);let r=/** general helper functions */function(e,t){let n=e;do n=n.parentElement;while(n&&!(null==n?void 0:n.matches(".t")))return n}(i,0);if(!r)throw Error(`Couldn't find track for selector ${e}`);let o=new ViewTimeline({subject:r});// if (!re.test(options.timeRange || ""))
//   throw new Error(`Invalid timeRange: ${options.timeRange}`);
// timeline.
i.animate(t,y(v({},n),{timeline:o}))}async function Z(){/** Prepare 10 year video autoplay on scroll in */(function(){let e=document.querySelector(".tenYears video");if(!e)throw Error("Couldn't find ten year video");if(!(e instanceof HTMLVideoElement))throw Error("Invalid ten year element type");e.currentTime=2,// can only play pause without input event if muted
e.muted=!0,e.controls=!1,new IntersectionObserver(t=>{1!=t.length&&console.warn(`Expected 1 entry, got ${t.length}`),t.forEach(t=>{t.isIntersecting?(e.play(),e.controls=!0):e.pause()})},{threshold:0,rootMargin:"-50% 0% -40%"}).observe(e)})(),D("#logo",{width:["40lvh","100px"]},{timeRange:"exit 0% 50%",fill:"both",easing:"linear"}),D(".logoWrap",{height:["40lvh","100px"]},{timeRange:"exit 10% 100%",fill:"both",easing:"linear"}),D(".upcomingCover",[{visibility:"visible",opacity:1},{visibility:"hidden",opacity:0}],{timeRange:"exit 40% 100%",fill:"both",easing:"linear"}),D("nav",[{visibility:"hidden",opacity:0},{visibility:"visible",opacity:1}],{timeRange:"exit 40% 100%",fill:"both",easing:"linear"});// [1, 3].forEach((n) => {
//   animate(
//     `.posters>:nth-child(${n})`,
//     // { marginTop: ["0%", "-120%"] },
//     { marginTop: ["-50lvh", "0lvh"] },
//     { timeRange: "cover 0% 100%", fill: "both", easing: "linear" }
//   );
// });
// [2, 4].forEach((n) => {
//   animate(
//     `.posters>:nth-child(${n})`,
//     // { marginTop: ["-120%", "0%"] },
//     // { marginTop: ["0%", "-120%"] },
//     { marginTop: ["-50lvh", "0lvh"] },
//     { timeRange: "cover 0% 100%", fill: "both", easing: "linear" }
//   );
// });
// !!! removing posters animation - too laggy !!!
// animate(
//   ".posters",
//   // { marginTop: ["-120%", "0%"] },
//   // { marginTop: ["0%", "-120%"] },
//   { marginTop: ["-25lvh", "25lvh"] },
//   { timeRange: "cover 0% 100%", fill: "both", easing: "linear" }
// );
// animate(
//   ".upcoming",
//   { marginTop: ["20lvh", "-10lvh"]},
//   { timeRange: "contain -120% 20%", fill: "both", easing: "ease-out" }
// )
// animate(
//   ".splash",
//   { position: ["fixed", "relative"], translate: ["", "0 24lvh"] },
//   { timeRange: "exit 0% 30%", fill: "both", easing: "steps(1)" }
// );
// animate(
//   ".splash",
//   { translate: ["0 24lvh", "0 -20lvh"] },
//   {
//     timeRange: "exit 30% 100%",
//     fill: "forwards",
//     easing: "cubic-bezier(0.3, 0.3, 0.1, 1)",
//   }
// );
// animate(
//   ".upcoming",
//   [
//     { visibility: "hidden", opacity: 0, top: "23lvh" },
//     { visibility: "visible", opacity: 1, top: "16lvh", offset: 0.15 },
//     // { visibility: "visible", opacity: 1, top: "16lvh", offset: 0.6 },
//     // { visibility: "hidden", opacity: 0, top: "-50lvh" },
//     { visibility: "visible", opacity: 1, top: "16lvh" },
//   ],
//   {
//     timeRange: "contain -65% 250%",
//     fill: "both",
//     easing: "linear",
//   }
// );
// // animate(
// //   ".warped1 .mask1",
// //   { "stroke-dashoffset": [0, 200] },
// //   // { "opacity": [0, 1] },
// //   { timeRange: "contain 10% 30%", fill: "both", easing: "linear" }
// // );
// // fade out upcoming header and text
// [".upcoming>h2", ".upcoming .info"].forEach((selector) =>
//   animate(
//     selector,
//     [
//       { visibility: "visible", opacity: 1 },
//       { visibility: "hidden", opacity: 0 },
//     ],
//     { timeRange: "contain 40% 100%", fill: "both", easing: "linear" }
//   )
// );
// // fade out poster slightly later, 'crossfade' to past posters
// animate(".upcoming .poster",
//     [
//       { visibility: "visible", opacity: 1 },
//       { visibility: "hidden", opacity: 0 },
//     ],
//     { timeRange: "contain 120% 160%", fill: "both", easing: "linear" }
// )
// // crossfade in past poster grid
// animate(".past",
//     [
//       { visibility: "hidden", opacity: 0 },
//       { visibility: "visible", opacity: 1 },
//     ],
//     { timeRange: "enter 80% 130%", fill: "both", easing: "linear" }
// )
// // window.addEventListener("load", () => {
// //   const pastEl = document.querySelector(".past")
// //   if (!pastEl) throw new Error("couldn't find pastEl");
// //   pastEl.innerHTML =
// // })
}!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}!function(){var e,n=new WeakMap,r=function(){function e(e,t,i,r){n.set(this,{values:function(e){for(var t,n=[],i=0;i<e.length;i++)n[i]="number"==typeof(t=e[i])?new CSSUnitValue(t,"number"):t;return n}(e),operator:t,name:i||t,delimiter:r||", "})}return e.prototype.toString=function(){var e=n.get(this);return e.name+"("+e.values.join(e.delimiter)+")"},t(e,[{key:"operator",get:function(){return n.get(this).operator}},{key:"values",get:function(){return n.get(this).values}}]),e}(),o=((e={CSSUnitValue:function(){function e(e,t){n.set(this,{value:e,unit:t})}return e.prototype.toString=function(){var e=n.get(this);return""+e.value+function(e){switch(e){case"percent":return"%";case"number":return"";default:return e.toLowerCase()}}(e.unit)},t(e,[{key:"value",get:function(){return n.get(this).value},set:function(e){n.get(this).value=e}},{key:"unit",get:function(){return n.get(this).unit}}]),e}(),CSSKeywordValue:function(){function e(e){this.value=e}return e.prototype.toString=function(){return this.value.toString()},e}(),CSSMathSum:function(e){function t(t){return e.call(this,arguments,"sum","calc"," + ")||this}return i(t,e),t}(r),CSSMathProduct:function(e){function t(t){return e.call(this,arguments,"product","calc"," * ")||this}return i(t,e),t}(r),CSSMathNegate:function(e){function t(t){return e.call(this,[arguments[0]],"negate","-")||this}return i(t,e),t}(r)}).CSSMathNegate=function(e){function t(t){return e.call(this,[1,arguments[0]],"invert","calc"," / ")||this}return i(t,e),t}(r),e.CSSMathMax=function(e){function t(){return e.call(this,arguments,"max")||this}return i(t,e),t}(r),e.CSSMathMin=function(e){function t(){return e.call(this,arguments,"min")||this}return i(t,e),t}(r),e);if(!window.CSS&&!Reflect.defineProperty(window,"CSS",{value:{}}))throw Error("Error installing CSSOM support");for(var s in window.CSSUnitValue||["number","percent","em","ex","px","cm","mm","in","pt","pc","Q","vw","vh","vmin","vmax","rems","ch","deg","rad","grad","turn","ms","s","Hz","kHz","dppx","dpi","dpcm","fr"].forEach(function(e){if(!Reflect.defineProperty(CSS,e,{value:function(t){return new CSSUnitValue(t,e)}}))throw Error("Error installing CSS."+e)}),o)if(!(s in window)&&!Reflect.defineProperty(window,s,{value:o[s]}))throw Error("Error installing CSSOM support for "+s)}(),new CSSKeywordValue("auto");var l=new WeakMap;function c(e){return e===document.scrollingElement?document:e}function u(e){d(e);var t=l.get(e).animations;if(0!==t.length)for(var n=e.currentTime,i=0;i<t.length;i++)t[i].tickAnimation(n)}function B(e,t){if(!e)return null;var n="horizontal-tb"==getComputedStyle(e).writingMode,i=e.scrollTop;return("horizontal"==t||"inline"==t&&n||"block"==t&&!n)&&(i=Math.abs(e.scrollLeft)),i}function d(e){if(e instanceof x){var t,n=e.subject;n&&"none"!=getComputedStyle(n).display?F(e,b(n)):F(e,null)}else(t=l.get(e)).anonymousSource&&F(e,g(t.anonymousSource,t.anonymousTarget))}function F(e,t){var n=l.get(e),i=n.source,r=n.scrollListener;if(i!=t&&(i&&r&&c(i).removeEventListener("scroll",r),l.get(e).source=t,t)){var o=function(){u(e)};c(t).addEventListener("scroll",o),n.scrollListener=o}}function h(e,t){for(var n=l.get(e).animations,i=0;i<n.length;i++)n[i].animation==t&&n.splice(i,1)}function f(e,t,n){for(var i=l.get(e).animations,r=0;r<i.length;r++)if(i[r].animation==t)return;i.push({animation:t,tickAnimation:n}),u(e)}var p=function(){function e(e){l.set(this,{source:null,orientation:"block",anonymousSource:e?e.anonymousSource:null,anonymousTarget:e?e.anonymousTarget:null,subject:null,inset:e?e.inset:null,animations:[],scrollListener:null}),F(this,e&&void 0!==e.source?e.source:document.scrollingElement),this.orientation=e&&e.orientation||"block",u(this)}return t(e,[{key:"source",get:function(){return l.get(this).source},set:function(e){F(this,e),u(this)}},{key:"orientation",get:function(){return l.get(this).orientation},set:function(e){if(-1===["block","inline","horizontal","vertical"].indexOf(e))throw TypeError("Invalid orientation");l.get(this).orientation=e,u(this)}},{key:"duration",get:function(){return CSS.percent(100)}},{key:"phase",get:function(){var e=this.source;if(!e)return"inactive";var t=getComputedStyle(e);return"none"==t.display?"inactive":e==document.scrollingElement||"visible"!=t.overflow&&"clip"!=t.overflow?"active":"inactive"}},{key:"currentTime",get:function(){var e,t,n=this.source;if(!n||"inactive"==this.phase)return null;var i=this.orientation,r=B(n,i),o=(e=i,t="horizontal-tb"==getComputedStyle(n).writingMode,"block"===e?e=t?"vertical":"horizontal":"inline"===e&&(e=t?"horizontal":"vertical"),"vertical"===e?n.scrollHeight-n.clientHeight:"horizontal"===e?n.scrollWidth-n.clientWidth:void 0);return o>0?CSS.percent(100*r/o):CSS.percent(100)}},{key:"__polyfill",get:function(){return!0}}]),e}();function A(e,t){for(var n=e.parentElement;null!=n;){if(t(n))return n;n=n.parentElement}}function g(e,t){return"root"==e?document.scrollingElement:b(t)}function m(e){switch(getComputedStyle(e).display){case"block":case"inline-block":case"list-item":case"table":case"table-caption":case"flow-root":case"flex":case"grid":return!0}return!1}function v(e){var t=getComputedStyle(e);return"none"!=t.transform||"none"!=t.perspective||"transform"==t.willChange||"perspective"==t.willChange||"none"!=t.filter||"filter"==t.willChange||"none"!=t.backdropFilter}function y(e){return"static"!=getComputedStyle(e).position||v(e)}function b(e){if(e){for(;e=function(e){switch(getComputedStyle(e).position){case"static":case"relative":case"sticky":return A(e,m);case"absolute":return A(e,y);case"fixed":return A(e,v)}}(e);)switch(getComputedStyle(e)["overflow-x"]){case"auto":case"scroll":case"hidden":return e==document.body&&"visible"==getComputedStyle(document.scrollingElement).overflow?document.scrollingElement:e}return document.scrollingElement}}function E(e,t){var n=l.get(e);return"inactive"===e.phase?null:e instanceof x?C(t,e.source,e.subject,n.orientation,n.inset):null}function C(e,t,n,i,r){for(var o=0,s=0,a=n,l=t.offsetParent;a&&a!=l;)s+=a.offsetLeft,o+=a.offsetTop,a=a.offsetParent;s-=t.offsetLeft+t.clientLeft,o-=t.offsetTop+t.clientTop;var c=getComputedStyle(t),u="horizontal-tb"==c.writingMode,B=void 0,d=void 0,F=void 0;"horizontal"==i||"inline"==i&&u||"block"==i&&!u?(B=n.clientWidth,d=s,("rtl"==c.direction||"vertical-rl"==c.writingMode)&&(d+=t.scrollWidth-t.clientWidth),F=t.clientWidth):(B=n.clientHeight,d=o,F=t.clientHeight);var h=function(e,t){var n={start:0,end:0};if(!e)return n;var i=e.split(" "),r=[];if(i.forEach(function(e){e.endsWith("%")?r.push(t/100*parseFloat(e)):e.endsWith("px")?r.push(parseFloat(e)):"auto"===e&&r.push(0)}),r.length>2)throw TypeError("Invalid inset");return 1==r.length?(n.start=r[0],n.end=r[0]):2==r.length&&(n.start=r[0],n.end=r[1]),n}(r,F),f=d-F+h.end,p=d+B-h.start,A=f+B,g=p-B,m=Math.min(A,g),v=Math.max(A,g),y=void 0,b=void 0;switch(e){case"cover":y=f,b=p;break;case"contain":y=m,b=v;break;case"enter":y=f,b=m;break;case"exit":y=v,b=p}return{start:y,end:b}}function w(e,t,n){return I(E(e,t),n,E(e,"cover"))}function I(e,t,n){return e&&n?(t.value/100*(e.end-e.start)+e.start-n.start)/(n.end-n.start):0}var x=function(e){function n(t){var n;return t.axis&&(t.orientation=t.axis),n=e.call(this,t)||this,l.get(o(n)).subject=t&&t.subject?t.subject:void 0,d(o(n)),u(o(n)),n}return i(n,e),t(n,[{key:"source",get:function(){return d(this),l.get(this).source},set:function(e){throw Error("Cannot set the source of a view timeline")}},{key:"subject",get:function(){return l.get(this).subject}},{key:"axis",get:function(){return l.get(this).orientation}},{key:"currentTime",get:function(){var e=B(this.source,this.orientation);if(null==e)return null;var t=E(this,"cover");return t?CSS.percent((e-t.start)/(t.end-t.start)*100):null}}]),n}(p),S=window.Element.prototype.animate,k=window.Animation,T=["enter","exit","cover","contain"],Q=function(){function e(){var e=this;this.state="pending",this.nativeResolve=this.nativeReject=null,this.promise=new Promise(function(t,n){e.nativeResolve=t,e.nativeReject=n})}var t=e.prototype;return t.resolve=function(e){this.state="resolved",this.nativeResolve(e)},t.reject=function(e){this.state="rejected",this.promise.catch(function(){}),this.nativeReject(e)},e}();function q(e){e.readyPromise=new Q,requestAnimationFrame(function(){null!==e.timeline.currentTime&&H(e)})}function R(){return new DOMException("The user aborted a request","AbortError")}function U(e,t){if(null===t)return t;if("number"!=typeof t)throw new DOMException("Unexpected value: "+t+".  Cannot convert to CssNumberish","InvalidStateError");var n=Z(e);return CSS.percent(n?100*t/n:0)}function V(e,t){if(e.timeline){if(null===t)return t;if("percent"===t.unit){var n=Z(e);return t.value*n/100}throw new DOMException("CSSNumericValue must be a percentage for progress based animations.","NotSupportedError")}if(null==t||"number"==typeof t)return t;var i=t.to("ms");if(convertTime)return i.value;throw new DOMException("CSSNumericValue must be either a number or a time value for time based animations.","InvalidStateError")}function L(e){if(e.finishedPromise&&"pending"==e.finishedPromise.state&&"finished"==e.proxy.playState){e.finishedPromise.resolve(e.proxy),e.animation.pause();var t=new CustomEvent("finish",{detail:{currentTime:e.proxy.currentTime,timelineTime:e.proxy.timeline.currentTime}});Object.defineProperty(t,"currentTime",{get:function(){return this.detail.currentTime}}),Object.defineProperty(t,"timelineTime",{get:function(){return this.detail.timelineTime}}),requestAnimationFrame(function(){queueMicrotask(function(){e.animation.dispatchEvent(t)})})}}function P(e){return null!==e.pendingPlaybackRate?e.pendingPlaybackRate:e.animation.playbackRate}function M(e){null!==e.pendingPlaybackRate&&(e.animation.playbackRate=e.pendingPlaybackRate,e.pendingPlaybackRate=null)}function z(e){if(!e.timeline)return null;var t=V(e,e.timeline.currentTime);if(null===t||null===e.startTime)return null;var n=(t-e.startTime)*e.animation.playbackRate;return -0==n&&(n=0),n}function K(e,t){if(!e.timeline)return null;var n=V(e,e.timeline.currentTime);return null==n?null:n-t/e.animation.playbackRate}function D(e,t,n){if(e.timeline){var i=t?V(e,e.proxy.currentTime):z(e);if(i&&null!=e.startTime&&!e.proxy.pending){var r=P(e),o=Z(e),s=e.previousCurrentTime;r>0&&i>=o?((null===s||s<o)&&(s=o),e.holdTime=t?i:s):r<0&&i<=0?((null==s||s>0)&&(s=0),e.holdTime=t?i:s):0!=r&&(t&&null!==e.holdTime&&(e.startTime=K(e,e.holdTime)),e.holdTime=null)}W(e),e.previousCurrentTime=V(e,e.proxy.currentTime),"finished"==e.proxy.playState?(e.finishedPromise||(e.finishedPromise=new Q),"pending"==e.finishedPromise.state&&(n?L(e):Promise.resolve().then(function(){L(e)}))):(e.finishedPromise&&"resolved"==e.finishedPromise.state&&(e.finishedPromise=new Q),"paused"!=e.animation.playState&&e.animation.pause())}}function Z(e){var t,n=(t=e.proxy.effect.getTiming(),e.normalizedTiming||t);return Math.max(0,n.delay+n.endDelay+n.iterations*n.duration)}function W(e){if(e.timeline){if(null!==e.startTime){var t=e.timeline.currentTime;null!=t&&N(e,(V(e,t)-e.startTime)*e.animation.playbackRate)}else null!==e.holdTime&&N(e,e.holdTime)}}function N(e,t){var n=e.timeline,i=e.animation.playbackRate;e.animation.currentTime=t+(n.currentTime&&n.currentTime.value==(i<0?0:100)?i<0?.001:-.001:0)}function O(e,t){if(e.timeline){var n="paused"==e.proxy.playState&&e.proxy.pending,i=!1,r=null,o=V(e,e.proxy.currentTime);e.resetCurrentTimeOnResume&&(o=null,e.resetCurrentTimeOnResume=!1);var s=P(e),a=Z(e);if(s>0&&t&&(null==o||o<0||o>=a))r=0;else if(s<0&&t&&(null==o||o<=0||o>a)){if(1/0==a)return void e.animation.play();r=a}else 0==s&&null==o&&(r=0);null!=r&&(e.startTime=r,e.holdTime=null,M(e)),f(e.timeline,e.animation,j.bind(e.proxy)),e.holdTime&&(e.startTime=null),e.pendingTask&&(e.pendingTask=null,i=!0),(null!==e.holdTime||null!==r||n||null!==e.pendingPlaybackRate)&&(e.readyPromise&&!i&&(e.readyPromise=null),W(e),e.readyPromise||q(e),e.pendingTask="play",D(e,!1,!1))}}function j(e){var t=G.get(this);if(null!=e){t.pendingTask&&H(t);var n=this.playState;"running"!=n&&"finished"!=n||(N(t,(V(t,e)-V(t,this.startTime))*this.playbackRate),"finished"==n&&0!=P(t)&&(t.holdTime=null),D(t,!1,!1))}else"idle"!=t.animation.playState&&t.animation.cancel()}function H(e){var t;"pause"==e.pendingTask?(t=V(e,e.timeline.currentTime),null!=e.startTime&&null==e.holdTime&&(e.holdTime=(t-e.startTime)*e.animation.playbackRate),M(e),e.startTime=null,e.readyPromise.resolve(e.proxy),D(e,!1,!1),W(e),e.pendingTask=null):"play"==e.pendingTask&&function(e){var t=V(e,e.timeline.currentTime);if(null!=e.holdTime)M(e),0==e.animation.playbackRate?e.startTime=t:(e.startTime=t-e.holdTime/e.animation.playbackRate,e.holdTime=null);else if(null!==e.startTime&&null!==e.pendingPlaybackRate){var n=(t-e.startTime)*e.animation.playbackRate;M(e);var i=e.animation.playbackRate;0==i?(e.holdTime=null,e.startTime=t):e.startTime=t-n/i}e.readyPromise&&"pending"==e.readyPromise.state&&e.readyPromise.resolve(e.proxy),D(e,!1,!1),W(e),e.pendingTask=null}(e)}var G=new WeakMap,X=function(){function e(e,t,n){void 0===n&&(n={});var i,r,o=e instanceof k?e:new k(e,a),s=t instanceof p,a=s?void 0:t;G.set(this,{animation:o,timeline:s?t:void 0,playState:s?"idle":null,readyPromise:null,finishedPromise:null,startTime:null,holdTime:null,previousCurrentTime:null,resetCurrentTimeOnResume:!1,pendingPlaybackRate:null,pendingTask:null,specifiedTiming:null,normalizedTiming:null,effect:null,timeRange:t instanceof ViewTimeline?(r=$((i=n)["animation-time-range"]),i["animation-delay"]&&(r.start=J(i["animation-delay"],Y().offset)),i["animation-end-delay"]&&(r.end=J(i["animation-end-delay"],_().offset)),r):null,proxy:this})}var n=e.prototype;return n.finish=function(){var e=G.get(this);if(e.timeline){var t=P(e),n=Z(e);if(0==t)throw new DOMException("Cannot finish Animation with a playbackRate of 0.","InvalidStateError");if(t>0&&1/0==n)throw new DOMException("Cannot finish Animation with an infinite target effect end.","InvalidStateError");M(e);var i=t<0?0:n;this.currentTime=U(e,i);var r=V(e,e.timeline.currentTime);null===e.startTime&&null!==r&&(e.startTime=r-i/e.animation.playbackRate),"pause"==e.pendingTask&&null!==e.startTime&&(e.holdTime=null,e.pendingTask=null,e.readyPromise.resolve(this)),"play"==e.pendingTask&&null!==e.startTime&&(e.pendingTask=null,e.readyPromise.resolve(this)),D(e,!0,!0)}else e.animation.finish()},n.play=function(){var e=G.get(this);e.timeline?O(e,!0):e.animation.play()},n.pause=function(){var e=G.get(this);if(e.timeline){if("paused"!=this.playState){var t=null,n=e.animation.playbackRate,i=Z(e);if(null===e.animation.currentTime){if(n>=0)t=0;else{if(1/0==i)return void e.animation.pause();t=i}}null!==t&&(e.startTime=t),"play"==e.pendingTask?e.pendingTask=null:e.readyPromise=null,e.readyPromise||q(e),e.pendingTask="pause"}}else e.animation.pause()},n.reverse=function(){var e=G.get(this),t=P(e),n=e.resetCurrentTimeOnResume?null:V(e,this.currentTime),i=1/0==Z(e),r=0!=t&&(t<0||n>0||!i);if(!e.timeline||!r)return r&&(e.pendingPlaybackRate=-P(e)),void e.animation.reverse();if("inactive"==e.timeline.phase)throw new DOMException("Cannot reverse an animation with no active timeline","InvalidStateError");this.updatePlaybackRate(-t),O(e,!0)},n.updatePlaybackRate=function(e){var t=G.get(this);if(t.pendingPlaybackRate=e,t.timeline){if(!t.readyPromise||"pending"!=t.readyPromise.state)switch(this.playState){case"idle":case"paused":M(t);break;case"finished":var n=V(t,t.timeline.currentTime),i=null!==n?(n-t.startTime)*t.animation.playbackRate:null;t.startTime=0==e?n:null!=n&&null!=i?(n-i)/e:null,M(t),D(t,!1,!1),W(t);break;default:O(t,!1)}}else t.animation.updatePlaybackRate(e)},n.persist=function(){G.get(this).animation.persist()},n.cancel=function(){var e=G.get(this);e.timeline?("idle"!=this.playState&&(e.pendingTask&&(e.pendingTask=null,M(e),e.readyPromise.reject(R()),q(e),e.readyPromise.resolve(e.proxy)),e.finishedPromise&&"pending"==e.finishedPromise.state&&e.finishedPromise.reject(R()),e.finishedPromise=new Q,e.animation.cancel()),e.startTime=null,e.holdTime=null,h(e.timeline,e.animation)):e.animation.cancel()},n.addEventListener=function(e,t,n){G.get(this).animation.addEventListener(e,t,n)},n.removeEventListener=function(e,t,n){G.get(this).animation.removeEventListener(e,t,n)},n.dispatchEvent=function(e){G.get(this).animation.dispatchEvent(e)},t(e,[{key:"effect",get:function(){var e,t,n,i=G.get(this);return i.timeline?(i.effect||(i.effect=(t=(e=i.animation.effect).updateTiming,(n=new Proxy(e,{get:function(t,n){var i=t[n];return"function"==typeof i?i.bind(e):i},set:function(e,t,n){return e[t]=n,!0}})).getComputedTiming=new Proxy(e.getComputedTiming,{apply:function(t){e.getTiming();var n=t.apply(e);if(i.timeline){n.localTime=U(i,n.localTime),n.endTime=U(i,n.endTime),n.activeDuration=U(i,n.activeDuration);var r=Z(i);n.duration=r?CSS.percent(100*(n.iterations?(r-n.delay-n.endDelay)/n.iterations:0)/r):CSS.percent(0),void 0===i.timeline.currentTime&&(n.localTime=null)}return n}}),n.getTiming=new Proxy(e.getTiming,{apply:function(n,r){if(i.specifiedTiming)return i.specifiedTiming;i.specifiedTiming=n.apply(e);var o,s,a=Object.assign({},i.specifiedTiming),l=!1;return i.timeline instanceof ViewTimeline&&(o=function(e){if(!(e.timeline instanceof ViewTimeline))return 0;var t=e.timeRange.start;return w(e.timeline,t.name,t.offset)}(i),s=function(e){if(!(e.timeline instanceof ViewTimeline))return 0;var t=e.timeRange.end;return 1-w(e.timeline,t.name,t.offset)}(i),l=!0),(null===a.duration||"auto"===a.duration||l)&&i.timeline&&(l?(a.delay=1e5*o,a.endDelay=1e5*s):(a.delay=0,a.endDelay=0),a.duration=a.iterations?((a.iterations?1e5:0)-a.delay-a.endDelay)/a.iterations:0,t.apply(e,[a])),i.normalizedTiming=a,i.specifiedTiming}}),n.updateTiming=new Proxy(e.updateTiming,{apply:function(t,n,r){if(i.timeline){var o=r[0];if(1/0===o.duration)throw TypeError("Effect duration cannot be Infinity when used with Scroll Timelines");if(1/0===o.iterations)throw TypeError("Effect iterations cannot be Infinity when used with Scroll Timelines")}i.specifiedTiming&&t.apply(e,[i.specifiedTiming]),t.apply(e,r),i.specifiedTiming=null}}),n)),i.effect):i.animation.effect},set:function(e){G.get(this).animation.effect=e,details.effect=null}},{key:"timeline",get:function(){var e=G.get(this);return e.timeline||e.animation.timeline},set:function(e){var t=this.timeline;if(t!=e){var n=this.playState,i=this.currentTime,r=G.get(this),o=Z(r),s=o>0?V(r,i)/o:0,a=t instanceof p,l=e instanceof p;r.resetCurrentTimeOnResume=!1;var c=this.pending;if(a&&h(r.timeline,r.animation),l){r.timeline=e,M(r);var u=r.animation.playbackRate>=0?0:Z(r);switch(n){case"running":case"finished":r.startTime=u,f(r.timeline,r.animation,j.bind(this));break;case"paused":r.resetCurrentTimeOnResume=!0,r.startTime=null,r.holdTime=V(r,CSS.percent(100*s));break;default:r.holdTime=null,r.startTime=null}return c&&(r.readyPromise&&"resolved"!=r.readyPromise.state||q(r),r.pendingTask="paused"==n?"pause":"play"),null!==r.startTime&&(r.holdTime=null),void D(r,!1,!1)}if(r.animation.timeline!=e)throw TypeError("Unsupported timeline: "+e);if(h(r.timeline,r.animation),r.timeline=null,a)switch(null!==i&&(r.animation.currentTime=s*Z(r)),n){case"paused":r.animation.pause();break;case"running":case"finished":r.animation.play()}}}},{key:"startTime",get:function(){var e=G.get(this);return e.timeline?U(e,e.startTime):e.animation.startTime},set:function(e){var t=G.get(this);if(e=V(t,e),t.timeline){null==V(t,t.timeline.currentTime)&&null!=t.startTime&&(t.holdTime=null,W(t));var n=V(t,this.currentTime);M(t),t.startTime=e,t.resetCurrentTimeOnResume=!1,t.holdTime=null!==t.startTime&&0!=t.animation.playbackRate?null:n,t.pendingTask&&(t.pendingTask=null,t.readyPromise.resolve(this)),D(t,!0,!1),W(t)}else t.animation.startTime=e}},{key:"currentTime",get:function(){var e=G.get(this);return e.timeline?U(e,null!=e.holdTime?e.holdTime:z(e)):e.animation.currentTime},set:function(e){var t=G.get(this);if(e=V(t,e),t.timeline&&null!=e){var n=t.timeline.phase;null!==t.holdTime||null===t.startTime||"inactive"==n||0==t.animation.playbackRate?t.holdTime=e:t.startTime=K(t,e),t.resetCurrentTimeOnResume=!1,"inactive"==n&&(t.startTime=null),t.previousCurrentTime=null,"pause"==t.pendingTask&&(t.holdTime=e,M(t),t.startTime=null,t.pendingTask=null,t.readyPromise.resolve(this)),D(t,!0,!1)}else t.animation.currentTime=e}},{key:"playbackRate",get:function(){return G.get(this).animation.playbackRate},set:function(e){var t=G.get(this);if(t.timeline){t.pendingPlaybackRate=null;var n=this.currentTime;t.animation.playbackRate=e,null!==n&&(this.currentTime=n)}else t.animation.playbackRate=e}},{key:"playState",get:function(){var e=G.get(this);if(!e.timeline)return e.animation.playState;var t=V(e,this.currentTime);return null===t&&null===e.startTime&&null==e.pendingTask?"idle":"pause"==e.pendingTask||null===e.startTime&&"play"!=e.pendingTask?"paused":null!=t&&(e.animation.playbackRate>0&&t>=Z(e)||e.animation.playbackRate<0&&t<=0)?"finished":"running"}},{key:"replaceState",get:function(){return G.get(this).animation.pending}},{key:"pending",get:function(){var e=G.get(this);return e.timeline?!!e.readyPromise&&"pending"==e.readyPromise.state:e.animation.pending}},{key:"id",get:function(){return G.get(this).animation.id}},{key:"onfinish",get:function(){return G.get(this).animation.onfinish},set:function(e){G.get(this).animation.onfinish=e}},{key:"oncancel",get:function(){return G.get(this).animation.oncancel},set:function(e){G.get(this).animation.oncancel=e}},{key:"onremove",get:function(){return G.get(this).animation.onremove},set:function(e){G.get(this).animation.onremove=e}},{key:"finished",get:function(){var e=G.get(this);return e.timeline?(e.finishedPromise||(e.finishedPromise=new Q),e.finishedPromise.promise):e.animation.finished}},{key:"ready",get:function(){var e=G.get(this);return e.timeline?(e.readyPromise||(e.readyPromise=new Q,e.readyPromise.resolve(this)),e.readyPromise.promise):e.animation.ready}}]),e}();function J(e,t){if(!e)return null;var n=e.split(" ");if(!T.includes(n[0])||2==n.length&&!n[1].endsWith("%"))throw TypeError("Invalid animation delay");var i=t;if(2==n.length){var r=parseFloat(n[1]);if(Number.isNaN(r))throw TypeError('"'+n[1]+'" is not a valid percentage for animation delay');i=CSS.percent(r)}return{name:n[0],offset:i}}function Y(){return{name:"cover",offset:CSS.percent(0)}}function _(){return{name:"cover",offset:CSS.percent(100)}}function $(e){var t={start:Y(),end:_()};if(!e)return t;var n=e.split(" "),i=[],r=[];if(n.forEach(function(e){e.endsWith("%")?r.push(parseFloat(e)):i.push(e)}),i.length>2||r.length>2||1==r.length)throw TypeError("Invalid time range");return i.length&&(t.start.name=i[0],t.end.name=i.length>1?i[1]:i[0]),r.length>1&&(t.start.offset=CSS.percent(r[0]),t.end.offset=CSS.percent(r[1])),t}var ee={IDENTIFIER:/[\w\\\@_-]+/g,WHITE_SPACE:/\s*/g,TIME:/^[0-9]+(s|ms)/,SCROLL_TIMELINE:/scroll-timeline\s*:([^;}]+)/,SCROLL_TIMELINE_NAME:/scroll-timeline-name\s*:([^;}]+)/,SCROLL_TIMELINE_AXIS:/scroll-timeline-axis\s*:([^;}]+)/,VIEW_TIMELINE:/view-timeline\s*:([^;}]+)/,VIEW_TIMELINE_NAME:/view-timeline-name\s*:([^;}]+)/,VIEW_TIMELINE_AXIS:/view-timeline-axis\s*:([^;}]+)/,VIEW_TIMELINE_INSET:/view-timeline-inset\s*:([^;}]+)/,ANIMATION_TIMELINE:/animation-timeline\s*:([^;}]+)/,ANIMATION_DELAY:/animation-delay\s*:([^;}]+)/,ANIMATION_END_DELAY:/animation-end-delay\s*:([^;}]+)/,ANIMATION_TIME_RANGE:/animation-time-range\s*:([^;}]+)/,ANIMATION_NAME:/animation-name\s*:([^;}]+)/,ANIMATION:/animation\s*:([^;}]+)/,ANONYMOUS_SCROLL:/scroll\(([^)]*)\)/},et=["block","inline","vertical","horizontal"],en=["nearest","root"],ei=new(function(){function e(){this.cssRulesWithTimelineName=[],this.nextAnonymousTimelineNameIndex=0,this.anonymousScrollTimelineOptions=new Map,this.sourceSelectorToScrollTimeline=[],this.subjectSelectorToViewTimeline=[],this.keyframeNamesSelectors=new Map}var t=e.prototype;return t.transpileStyleSheet=function(e,t,n){for(var i={sheetSrc:e,index:0,name:n};i.index<i.sheetSrc.length&&(this.eatWhitespace(i),!(i.index>=i.sheetSrc.length));)if(this.lookAhead("/*",i))for(;this.lookAhead("/*",i);)this.eatComment(i),this.eatWhitespace(i);else{var r=this.parseQualifiedRule(i);r&&(t?this.parseKeyframesAndSaveNameMapping(r,i):this.handleScrollTimelineProps(r,i))}return i.sheetSrc},t.getAnimationTimelineOptions=function(e,t){for(var n=this.cssRulesWithTimelineName.length-1;n>=0;n--){var i=this.cssRulesWithTimelineName[n];if(t.matches(i.selector)&&(!i["animation-name"]||i["animation-name"]==e))return{"animation-timeline":i["animation-timeline"],"animation-delay":i["animation-delay"],"animation-end-delay":i["animation-end-delay"],"animation-time-range":i["animation-time-range"]}}return null},t.getAnonymousScrollTimelineOptions=function(e,t){var n=this.anonymousScrollTimelineOptions.get(e);return n?{anonymousSource:n.source,anonymousTarget:t,source:g(n.source,t),orientation:n.orientation?n.orientation:"block"}:null},t.getScrollTimelineOptions=function(e,t){var i=this.getAnonymousScrollTimelineOptions(e,t);if(i)return i;for(var r=this.sourceSelectorToScrollTimeline.length-1;r>=0;r--){var o=this.sourceSelectorToScrollTimeline[r];if(o.name==e){var s=this.findPreviousSiblingOrAncestorMatchingSelector(t,o.selector);if(s)return n({source:s},o.axis?{orientation:o.axis}:{})}}return null},t.findPreviousSiblingOrAncestorMatchingSelector=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.previousElementSibling||n.parentElement}return null},t.getViewTimelineOptions=function(e,t){for(var n=this.subjectSelectorToViewTimeline.length-1;n>=0;n--){var i=this.subjectSelectorToViewTimeline[n];if(i.name==e){var r=this.findPreviousSiblingOrAncestorMatchingSelector(t,i.selector);if(r)return{subject:r,axis:i.axis,inset:i.inset}}}return null},t.parseScrollTimeline=function(e){var t=e.index;this.assertString(e,"@scroll-timeline"),this.eatWhitespace(e);var n=this.parseIdentifier(e);this.eatWhitespace(e),this.assertString(e,"{"),this.eatWhitespace(e);for(var i={name:n,source:"auto",orientation:void 0};"}"!==this.peek(e);){var r=this.parseIdentifier(e);this.eatWhitespace(e),this.assertString(e,":"),this.eatWhitespace(e),i[r]=this.removeEnclosingDoubleQuotes(this.eatUntil(";",e)),this.assertString(e,";"),this.eatWhitespace(e)}this.assertString(e,"}");var o=e.index;return this.eatWhitespace(e),{scrollTimeline:i,startIndex:t,endIndex:o}},t.handleScrollTimelineProps=function(e,t){var n=this;if(!e.selector.includes("@keyframes")){var i=e.block.contents.includes("animation-name:"),r=e.block.contents.includes("animation-timeline:"),o=e.block.contents.includes("animation:");this.saveSourceSelectorToScrollTimeline(e),this.saveSubjectSelectorToViewTimeline(e);var s=[],a=[],l=!1;r&&(s=this.extractScrollTimelineNames(e.block.contents)),i&&(a=this.extractMatches(e.block.contents,ee.ANIMATION_NAME)),r&&i||(o&&this.extractMatches(e.block.contents,ee.ANIMATION).forEach(function(t){var i=n.extractTimelineName(t);i.timelineName&&s.push(i.timelineName);var o=n.extractAnimationName(t);o&&(i.timelineName||r)&&a.push(o),(i.timelineName||r)&&(n.hasDuration(t)||(e.block.contents=e.block.contents.replace(t," 1s "+t),l=!0)),i.toBeReplaced&&(e.block.contents=e.block.contents.replace(i.toBeReplaced," ".repeat(i.toBeReplaced.length)),l=!0)}),l&&this.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,t)),this.saveRelationInList(e,s,a)}},t.saveSourceSelectorToScrollTimeline=function(e){var t,n=e.block.contents.includes("scroll-timeline:"),i=e.block.contents.includes("scroll-timeline-name:"),r=e.block.contents.includes("scroll-timeline-axis:");if(n||i){var o=[];if(n)for(var s,l=a(this.extractMatches(e.block.contents,ee.SCROLL_TIMELINE));!(s=l()).done;){parts=this.split(s.value);var c={selector:e.selector,name:""};1==parts.length?c.name=parts[0]:2==parts.length&&(et.includes(parts[0])?(c.axis=parts[0],c.name=parts[1]):(c.axis=parts[1],c.name=parts[0])),o.push(c)}if(i)for(var u=this.extractMatches(e.block.contents,ee.SCROLL_TIMELINE_NAME),B=0;B<u.length;B++)B<o.length?o[B].name=u[B]:o.push({selector:e.selector,name:u[B]});var d=[];r&&(d=(d=this.extractMatches(e.block.contents,ee.SCROLL_TIMELINE_AXIS)).filter(function(e){return et.includes(e)}));for(var F=0;F<o.length;F++)d.length&&(o[F].axis=d[F%o.length]);(t=this.sourceSelectorToScrollTimeline).push.apply(t,o)}},t.saveSubjectSelectorToViewTimeline=function(e){var t,n=e.block.contents.includes("view-timeline:"),i=e.block.contents.includes("view-timeline-name:"),r=e.block.contents.includes("view-timeline-axis:"),o=e.block.contents.includes("view-timeline-inset:");if(n||i){var s=[];if(n)for(var l,c=a(this.extractMatches(e.block.contents,ee.VIEW_TIMELINE));!(l=c()).done;){parts=this.split(l.value);var u={selector:e.selector,name:"",inset:null};1==parts.length?u.name=parts[0]:2==parts.length&&(et.includes(parts[0])?(u.axis=parts[0],u.name=parts[1]):(u.axis=parts[1],u.name=parts[0])),s.push(u)}if(i)for(var B=this.extractMatches(e.block.contents,ee.VIEW_TIMELINE_NAME),d=0;d<B.length;d++)d<s.length?s[d].name=B[d]:s.push({selector:e.selector,name:B[d],inset:null});var F=[],h=[];o&&(F=this.extractMatches(e.block.contents,ee.VIEW_TIMELINE_INSET)),r&&(h=(h=this.extractMatches(e.block.contents,ee.VIEW_TIMELINE_AXIS)).filter(function(e){return et.includes(e)}));for(var f=0;f<s.length;f++)F.length&&(s[f].inset=F[f%s.length]),h.length&&(s[f].axis=h[f%s.length]);(t=this.subjectSelectorToViewTimeline).push.apply(t,s)}},t.hasDuration=function(e){return e.split(" ").filter(function(e){return ee.TIME.exec(e)}).length>=1},t.saveRelationInList=function(e,t,i){var r=e.block.contents.includes("animation-delay:"),o=e.block.contents.includes("animation-end-delay:"),s=e.block.contents.includes("animation-time-range:"),a=[],l=[],c=[];r&&(a=this.extractMatches(e.block.contents,ee.ANIMATION_DELAY)),o&&(l=this.extractMatches(e.block.contents,ee.ANIMATION_END_DELAY)),s&&(c=this.extractMatches(e.block.contents,ee.ANIMATION_TIME_RANGE));for(var u=Math.max(t.length,i.length,a.length,l.length,c.length),B=0;B<u;B++)this.cssRulesWithTimelineName.push(n({selector:e.selector,"animation-timeline":t[B%t.length]},i.length?{"animation-name":i[B%i.length]}:{},a.length?{"animation-delay":a[B%a.length]}:{},l.length?{"animation-end-delay":l[B%l.length]}:{},c.length?{"animation-time-range":c[B%c.length]}:{}))},t.extractScrollTimelineNames=function(e){var t=this,n=ee.ANIMATION_TIMELINE.exec(e)[1].trim(),i=[];return n.split(",").map(function(e){return e.trim()}).forEach(function(e){if(e.startsWith("scroll")&&e.includes("(")){var n=t.saveAnonymousTimelineName(e);i.push(n)}else i.push(e)}),i},t.saveAnonymousTimelineName=function(e){var t=":t"+this.nextAnonymousTimelineNameIndex++;return this.anonymousScrollTimelineOptions.set(t,this.parseAnonymousTimeline(e)),t},t.parseAnonymousTimeline=function(e){var t=ee.ANONYMOUS_SCROLL.exec(e);if(!t)return null;var n={};return t[1].split(" ").forEach(function(e){et.includes(e)?n.orientation=e:en.includes(e)&&(n.source=e)}),n},t.extractAnimationName=function(e){return this.findMatchingEntryInContainer(e,this.keyframeNamesSelectors)},t.extractTimelineName=function(e){var t=null,n=null,i=ee.ANONYMOUS_SCROLL.exec(e);if(i){var r=i[0];t=this.saveAnonymousTimelineName(r),n=r}else n=t=this.findMatchingEntryInContainer(e,new Set(this.sourceSelectorToScrollTimeline.map(function(e){return e.name})))||this.findMatchingEntryInContainer(e,new Set(this.subjectSelectorToViewTimeline.map(function(e){return e.name})));return{timelineName:t,toBeReplaced:n}},t.findMatchingEntryInContainer=function(e,t){var n=e.split(" ").filter(function(e){return t.has(e)});return n?n[0]:null},t.parseIdentifier=function(e){ee.IDENTIFIER.lastIndex=e.index;var t=ee.IDENTIFIER.exec(e.sheetSrc);if(!t)throw this.parseError(e,"Expected an identifier");return e.index+=t[0].length,t[0]},t.parseKeyframesAndSaveNameMapping=function(e,t){var n=this;if(e.selector.startsWith("@keyframes")){var i=this.replaceKeyframesAndGetMapping(e,t);e.selector.split(" ").forEach(function(e,t){t>0&&n.keyframeNamesSelectors.set(e,i)})}},t.replaceKeyframesAndGetMapping=function(e,t){var n=e.block.contents,i=function(e){for(var t=0,n=-1,i=[],r=0;r<e.length;r++)"{"==e[r]?t++:"}"==e[r]&&t--,1==t&&"{"!=e[r]&&"}"!=e[r]&&-1==n&&(n=r),2==t&&"{"==e[r]&&(i.push({start:n,end:r}),n=-1);return i}(n);if(0==i.length)return new Map;var r=new Map,o=!1,s=[];s.push(n.substring(0,i[0].start));for(var a=0;a<i.length;a++)(function(e){var t=n.substring(i[e].start,i[e].end),a=[];t.split(",").forEach(function(e){var t=e.split(" ").map(function(e){return e.trim()}).filter(function(e){return""!=e}).join(" "),n=r.size;r.set(n,t),a.push(n+"%"),T.some(function(e){return t.startsWith(e)})&&(o=!0)}),s.push(a.join(",")),s.push(e==i.length-1?n.substring(i[e].end):n.substring(i[e].end,i[e+1].start))})(a);return o?(e.block.contents=s.join(""),this.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,t),r):new Map},t.parseQualifiedRule=function(e){var t=e.index,n=this.parseSelector(e).trim();if(n)return{selector:n,block:this.eatBlock(e),startIndex:t,endIndex:e.index}},t.removeEnclosingDoubleQuotes=function(e){return e.substring('"'==e[0]?1:0,'"'==e[e.length-1]?e.length-1:e.length)},t.assertString=function(e,t){if(e.sheetSrc.substr(e.index,t.length)!=t)throw this.parseError(e,"Did not find expected sequence "+t);e.index+=t.length},t.replacePart=function(e,t,n,i){i.sheetSrc=i.sheetSrc.slice(0,e)+n+i.sheetSrc.slice(t),i.index>=t&&(i.index=e+n.length+(i.index-t))},t.eatComment=function(e){this.assertString(e,"/*"),this.eatUntil("*/",e,!0),this.assertString(e,"*/")},t.eatBlock=function(e){var t=e.index;this.assertString(e,"{");for(var n=1;0!=n;)this.lookAhead("/*",e)?this.eatComment(e):("{"===e.sheetSrc[e.index]?n++:"}"===e.sheetSrc[e.index]&&n--,this.advance(e));var i=e.index;return{startIndex:t,endIndex:i,contents:e.sheetSrc.slice(t,i)}},t.advance=function(e){if(e.index++,e.index>e.sheetSrc.length)throw this.parseError(e,"Advanced beyond the end")},t.eatUntil=function(e,t,n){void 0===n&&(n=!1);for(var i=t.index;!this.lookAhead(e,t);)this.advance(t);return n&&(t.sheetSrc=t.sheetSrc.slice(0,i)+" ".repeat(t.index-i)+t.sheetSrc.slice(t.index)),t.sheetSrc.slice(i,t.index)},t.parseSelector=function(e){var t=e.index;if(this.eatUntil("{",e),t===e.index)throw Error("Empty selector");return e.sheetSrc.slice(t,e.index)},t.eatWhitespace=function(e){ee.WHITE_SPACE.lastIndex=e.index;var t=ee.WHITE_SPACE.exec(e.sheetSrc);t&&(e.index+=t[0].length)},t.lookAhead=function(e,t){return t.sheetSrc.substr(t.index,e.length)==e},t.peek=function(e){return e.sheetSrc[e.index]},t.extractMatches=function(e,t,n){return void 0===n&&(n=","),t.exec(e)[1].trim().split(n).map(function(e){return e.trim()})},t.split=function(e){return e.split(" ").map(function(e){return e.trim()}).filter(function(e){return""!=e})},e}());if(function(){if(!CSS.supports("animation-timeline: works")){!function(){function e(e){if(0!==e.innerHTML.trim().length){var t=ei.transpileStyleSheet(e.innerHTML,!0);t=ei.transpileStyleSheet(t,!1),e.innerHTML=t}}new MutationObserver(function(t){for(var n,i=a(t);!(n=i()).done;)for(var r,o=a(n.value.addedNodes);!(r=o()).done;){var s=r.value;s instanceof HTMLStyleElement&&e(s)}}).observe(document.documentElement,{childList:!0,subtree:!0}),document.querySelectorAll("style").forEach(function(t){return e(t)}),document.querySelectorAll("link").forEach(function(e){})}();var e=new WeakMap;window.addEventListener("animationstart",function(t){t.target.getAnimations().filter(function(e){return e.animationName===t.animationName}).forEach(function(n){e.has(t.target)||e.set(t.target,new Map);var i=e.get(t.target);if(!i.has(n.animationName)){var r=function(e,t,n){var i=ei.getAnimationTimelineOptions(t,n);if(!i)return null;var r=i["animation-timeline"];if(!r)return null;var o=ei.getScrollTimelineOptions(r,n)||ei.getViewTimelineOptions(r,n);return o?(o.subject&&function(e,t){var n=b(t.subject),i=t.axis||t.orientation,r=ei.keyframeNamesSelectors.get(e.animationName);if(r&&r.size){var o=[];e.effect.getKeyframes().forEach(function(e){var s=function(e,r){for(var o,s=null,l=a(e);!(o=l()).done;){var c=o.value,u=c[1];if(c[0]==100*r.offset){if("from"==u)s=0;else if("to"==u)s=100;else{var B,d,F,h,f=u.split(" ");s=1==f.length?parseFloat(f[0]):100*(B=f[0],d=t.subject,F=t.inset,h=CSS.percent(parseFloat(f[1])),I(C(B,n,d,i,F),h,C("cover",n,d,i,F)))}break}}return s}(r,e);null!==s&&s>=0&&s<=100&&(e.offset=s/100,o.push(e))});var s=o.sort(function(e,t){return e.offset<t.offset?-1:e.affset>t.offset?1:0});e.effect.setKeyframes(s)}}(e,o),{timeline:o.source?new p(o):new x(o),animOptions:i}):null}(n,n.animationName,t.target);i.set(n.animationName,r&&r.timeline&&n.timeline!=r.timeline?new X(n,r.timeline,r.animOptions):null)}var o=i.get(n.animationName);null!==o&&(n.pause(),o.play())})})}}(),[].concat(document.styleSheets).filter(function(e){return null!==e.href}).length&&console.warn("Non-Inline StyleSheets detected: ScrollTimeline polyfill currently only supports inline styles within style tags"),!Reflect.defineProperty(window,"ScrollTimeline",{value:p}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(window,"ViewTimeline",{value:x}))throw Error("Error installing ViewTimeline polyfill: could not attach ViewTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:function(e,t){var n=t.timeline;n instanceof p&&delete t.timeline;var i=function(e,t){if(t in e){var n=e[t];return"number"!=typeof n?(delete e[t],n):null}},r=function(e,t){t&&(t.phase&&(e.name=t.phase),t.percent&&(e.offset=t.percent))},o=i(t,"delay"),s=i(t,"endDelay"),a=S.apply(this,[e,t]),l=new X(a,n);if(n instanceof p){if(a.pause(),n instanceof ViewTimeline){var c=G.get(l);c.timeRange=$(t.timeRange),r(c.timeRange.start,o),r(c.timeRange.end,s)}l.play()}return l}}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");if(!Reflect.defineProperty(window,"Animation",{value:X}))throw Error("Error installing Animation constructor.")}();const W={concerts:[{id:1,title:"A Spring Concert",when:"2014-04-26T19:30",thumb:"/share/concerts/April 2014_thumb.jpeg",poster:"/share/concerts/April 2014.jpeg",programme:[{composer:"Beethoven",title:"Overture to The Creatures of Prometheus, Op. 43"},{composer:"Mozart",title:"Concerto for Flute and Harp in C major, K. 299/297c",performanceNotes:"Solos: Nicole Esposito, flute; and Rita Costanzi, harp"},{composer:"Schubert",title:"Symphony No. 8 in B minor, D. 759, 'Unfinished'"}]},{id:2,title:"Spring Concert loremipsumdolorsitametconsecteturadipiscingelit",when:"2017-04-02T19:30",thumb:"/share/concerts/April 2017_thumb.PNG",poster:"/share/concerts/April 2017.PNG",facebook:"https://www.facebook.com/events/395345450829467/"},{id:3,title:"Spring Concert",when:"2022-04-06T19:30",thumb:"/share/concerts/April 2022_thumb.PNG",poster:"/share/concerts/April 2022.PNG",facebook:"https://www.facebook.com/events/1080501699194922/",programme:[{composer:"Beethoven",title:"Symphony No. 6 in F major, Op. 68, 'Pastoral'"},{composer:"Mozart",title:"Piano Concerto No. 21 in C major, K. 467",performanceNotes:"Solo: Ingrid Fliter, piano"}]},{id:4,title:"A Christmas Concert",when:"2014-12-03T19:30",thumb:"/share/concerts/Dec 2014_thumb.jpeg",poster:"/share/concerts/Dec 2014.jpeg"},{id:5,title:"St Anne's Christmas Concert",when:"2015-12-10T19:00",thumb:"/share/concerts/Dec 2015_thumb.jpeg",poster:"/share/concerts/Dec 2015.jpeg",facebook:"https://www.facebook.com/events/1725314061021207/"},{id:6,title:"Christmas Concert",when:"2016-12-07T19:00",thumb:"/share/concerts/Dec 2016_thumb.PNG",poster:"/share/concerts/Dec 2016.PNG",facebook:"https://www.facebook.com/events/543646365837590/"},{id:7,title:"Season's Greetings",when:"2177-10-11T19:30",thumb:"/share/concerts/Dec 2019_thumb.jpeg",poster:"/share/concerts/Dec 2019.jpeg",facebook:"https://www.facebook.com/events/2967555769925243/"},{id:8,title:"Celebrate! 10 Years of Roath Chamber Orchestra",when:"2077-12-18T17:00",thumb:"/share/concerts/Dec 2022_thumb.JPG",poster:"https://roathchamber.org/share/upload/Dec%202022.a041bd.jpg",facebook:"https://www.facebook.com/events/695774711855625/"},{id:9,title:"Christmas Festival",when:"2023-12-17T17:00",thumb:"/share/concerts/Dec 2023_thumb.PNG",poster:"/share/concerts/Dec 2023.PNG",facebook:"https://www.facebook.com/events/177429568773354/"},{id:10,title:"A Summer Concert",when:"2014-07-13T19:30",thumb:"/share/concerts/July 2014_thumb.jpeg",poster:"/share/concerts/July 2014.jpeg"},{id:11,title:"A Short Ride",when:"2015-07-05T14:30",thumb:"/share/concerts/July 2015_thumb.jpeg",poster:"/share/concerts/July 2015.jpeg",facebook:"https://www.facebook.com/events/438551302993260/"},{id:12,title:"Seas & Storms",when:"1716-07-03T15:00",thumb:"/share/concerts/July 2016_thumb.jpeg",poster:"/share/concerts/July 2016.jpeg",facebook:"https://www.facebook.com/events/602111969965403/",programme:[{composer:"Beethoven",title:"Overture to The Creatures of Prometheus, Op. 43"}]},{id:13,title:"Musical Menagerie",when:"2017-07-02T15:00",thumb:"/share/concerts/July 2017_thumb.jpeg",poster:"/share/concerts/July 2017.jpeg",facebook:"https://www.facebook.com/events/133041403927056/"},{id:14,title:"When at night I go to sleep",when:"2018-07-01T15:30",thumb:"/share/concerts/July 2018_thumb.jpeg",poster:"/share/concerts/July 2018.jpeg",facebook:"https://www.facebook.com/events/2144715355543863/"},{id:15,title:"Around the World in 60 Minutes",when:"2019-07-07T15:00",thumb:"/share/concerts/July 2019_thumb.jpg",poster:"/share/concerts/July 2019.jpg",facebook:"https://www.facebook.com/events/2189435221152196/"},{id:16,title:"The Orchestra's Day Out at the Zoo",when:"2023-07-02T15:00",thumb:"/share/concerts/July 2023_thumb.PNG",poster:"/share/concerts/July 2023.PNG",facebook:"https://www.facebook.com/events/209130961985710/"},{id:17,title:"Toy Box",when:"2022-06-26T15:00",thumb:"/share/concerts/June 2022_thumb.PNG",poster:"/share/concerts/June 2022.PNG",facebook:"https://www.facebook.com/events/1106400593274570/"},{id:18,title:"A Mothering Sunday Concert",when:"2015-03-15T19:30",thumb:"/share/concerts/March 2015_thumb.jpeg",poster:"/share/concerts/March 2015.jpeg",facebook:"https://www.facebook.com/events/850189531708468/"},{id:19,title:"Mozart Requiem",when:"2016-03-13T19:30",thumb:"/share/concerts/March 2016_thumb.jpeg",poster:"/share/concerts/March 2016.jpeg",facebook:"https://www.facebook.com/events/1128656563824991/"},{id:20,title:"Spring Concert",when:"2018-03-18T19:30",thumb:"/share/concerts/March 2018_thumb.jpeg",poster:"/share/concerts/March 2018.jpeg",facebook:"https://www.facebook.com/events/1980078358926583/"},{id:21,title:"Small Forces",when:"2019-03-24T19:30",thumb:"/share/concerts/March 2019_thumb.jpg",poster:"/share/concerts/March 2019.jpg",facebook:"https://www.facebook.com/events/639158556540232/"},{id:22,title:"Beyond Beethoven",when:"2020-03-29T19:30",thumb:"/share/concerts/March 2020_thumb.jpeg",poster:"/share/concerts/March 2020.jpeg",facebook:"https://www.facebook.com/events/634668877299718/"},{id:23,title:"Serenade to Springtime",when:"2023-03-26T19:30",thumb:"/share/concerts/March 2023_thumb.PNG",poster:"/share/concerts/March 2023.PNG",facebook:"https://www.facebook.com/events/565159338915094/"},{id:24,title:"Bach Beethoven Rossini",when:"2019-05-12T19:30",thumb:"/share/concerts/May 2019_thumb.jpeg",poster:"/share/concerts/May 2019.jpeg",facebook:"https://www.facebook.com/events/313855729290379/"},{id:25,title:"A St Cecilia Concert",when:"2014-11-23T19:30",thumb:"/share/concerts/Nov 2014_thumb.jpeg",poster:"/share/concerts/Nov 2014.jpeg"},{id:26,title:"St Cecilia Concert",when:"2015-11-22T19:30",thumb:"/share/concerts/Nov 2015_thumb.jpeg",poster:"/share/concerts/Nov 2015.jpeg",facebook:"https://www.facebook.com/events/597328333738505/"},{id:27,title:"German F\xfcrsten",when:"2018-11-25T19:30",thumb:"/share/concerts/Nov 2018_thumb.jpg",poster:"/share/concerts/Nov 2018.jpg",facebook:"https://www.facebook.com/events/632878467114063/"},{id:28,title:"Before Beethoven",when:"2019-11-17T19:30",thumb:"/share/concerts/Nov 2019_thumb.jpg",poster:"/share/concerts/Nov 2019.jpg",facebook:"https://www.facebook.com/events/385593555716964/"},{id:29,title:"Brahms Dvorak",when:"2021-11-17T19:30",thumb:"/share/concerts/Nov 2021_thumb.PNG",poster:"/share/concerts/Nov 2021.PNG"},{id:30,title:"Beethoven & Weber",when:"2022-11-27T19:00",thumb:"/share/concerts/Nov 2022_thumb.JPG",poster:"/share/concerts/Nov 2022.JPG",facebook:"https://www.facebook.com/events/428135782788892/"},{id:31,title:"Roath Chamber Orchestra Revisited",when:"2023-11-26T19:00",thumb:"/share/concerts/Nov 2023_thumb.PNG",poster:"/share/concerts/Nov 2023.PNG",facebook:"https://www.facebook.com/events/637520735235668/"},{id:32,title:"St Cecilia Concert",when:"2016-11-20T19:30",thumb:"/share/concerts/November 2016_thumb.jpeg",poster:"/share/concerts/November 2016.jpeg",facebook:"https://www.facebook.com/events/179852505753174/"},{id:33,title:"An Afternoon of Chamber Music",when:"2015-09-19T14:00",thumb:"/share/concerts/Sept 2015_thumb.jpeg",poster:"/share/concerts/Sept 2015.jpeg",facebook:"https://www.facebook.com/events/1666181833604660/"}]},N="amberDb.concerts";async function O(e=!0){if(console.debug(`getConcerts(cached=${e})`),!e||null===sessionStorage.getItem(N)){let e;console.debug("getConcerts: fetching data"),p()?(console.log("getConcerts: (dev mode) auto resolve"),e=W.concerts):e=await fetch("/php/concerts.php").then(e=>e.json()),sessionStorage.setItem(N,JSON.stringify(e))}return JSON.parse(sessionStorage.getItem(N))}const j="/php/concertEdit.php";async function H(e){console.debug(`deleteConcert(id=${e})`);let t=X({id:e,op:"delete"});if(p())return console.log("deleteConcert: (dev mode) auto resolve"),!0;try{await fetch(j,{method:"POST",body:t})}catch(e){return console.error("Failed to delete concert",e),!1}return!0}async function G(){console.debug("getCatalogue()");let e={composers:[]},t=await O();for(let n of t)if(n.programme)for(let t of n.programme){let i=t.composer,r=t.title,o=t.performanceNotes||"",s=e.composers.find(e=>e.name==i)||{//
name:i,works:[]},a=s.works.find(e=>e.title==r);a||(a={title:r,performances:[]},s.works.push(a)),a.performances.push({notes:o,concert:n}),e.composers.includes(s)||e.composers.push(s)}return(// Sort all the levels of the catalogue
e.composers.sort((e,t)=>e.name.localeCompare(t.name)),e.composers.forEach(e=>{e.works.sort((e,t)=>e.title.localeCompare(t.title)),e.works.forEach(e=>{e.performances.sort((e,t)=>e.concert.when.localeCompare(t.concert.when))})}),e)}function X(e){let t=new FormData;for(let[n,i]of Object.entries(e)){if(void 0===i)continue;let e="object"==typeof i?JSON.stringify(i):i.toString();t.append(n,e)}return t}/*@__PURE__*/e(a)("<div>",{id:"archivePage"});const J=()=>T({text:"Add Concert",class:"adminBigButton",href:"/concert/new"}),Y=t=>/*@__PURE__*/e(a)("<div>",{class:"concertsGrid"}).append(t.sort((e,t)=>t.when.localeCompare(e.when)).map(e=>_(e))),_=t=>{var n;return T({href:`/concert/${t.id}`,class:"concertCard"}).append(/*@__PURE__*/e(a)("<div>",{class:"media",css:{backgroundImage:`url('${t.thumb}')`}}),/*@__PURE__*/e(a)("<div>",{class:"info"}).append(/*@__PURE__*/e(a)("<p>",{class:"when",text:(n=t.when,Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"numeric"}).format(new Date(n)))}),/*@__PURE__*/e(a)("<h3>",{class:"title",text:t.title})))},$=()=>/*@__PURE__*/e(a)("<nav>").append(ee(),ei()),ee=()=>/*@__PURE__*/e(a)("<ul>",{class:"desktop"}).append(et({text:"Upcoming",href:"/#upcoming"}),et({text:"Ten Years",href:"/#tenYears"}),et({text:"About Us",href:"/#about"}),en(),et({text:"Concerts",href:"/concerts"}),et({text:"Catalogue",href:"/catalogue"}),et({text:"Contact Us",href:"/#contact"}),/*@__PURE__*/e(a)("<span>")),et=t=>/*@__PURE__*/e(a)("<li>",{class:"navItem"}).append(T({href:t.href,text:t.text})),en=()=>T({href:"/",class:"logo"}),ei=()=>/*@__PURE__*/e(a)("<div>",{class:"mobile"}).append(/*@__PURE__*/e(a)("<div>",{class:"hamburger"}).append(S({icon:"menu"}))//
    .on("click",()=>eo()),en(),er()),er=()=>/*@__PURE__*/e(a)("<div>",{class:"sidebar"}).append(/*@__PURE__*/e(a)("<div>",{class:"inner"}).append(/*@__PURE__*/e(a)("<div>",{class:"close"}).append(/*@__PURE__*/e(a)("<div>",{class:"img"}).append(S({icon:"close"}))//
    .on("click",()=>eo())),/*@__PURE__*/e(a)("<ul>").append(et({text:"Upcoming",href:"/#upcoming"}),et({text:"Ten Years",href:"/#tenYears"}),et({text:"About Us",href:"/#about"}),et({text:"Concerts",href:"/concerts"}),et({text:"Catalogue",href:"/catalogue"}),et({text:"Contact Us",href:"/#contact"}))));function eo(){/*@__PURE__*/e(a)("nav .mobile .sidebar").toggleClass("show")}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.0
 * @author George Michael Brower
 * @license MIT
 *//**
 * Base class for all controllers.
 */class es{/**
	 * Sets the name of the controller and its label in the GUI.
	 * @param {string} name
	 * @returns {this}
	 */name(e){return(/**
		 * The controller's name. Use `controller.name( 'Name' )` to modify this value.
		 * @type {string}
		 */this._name=e,this.$name.innerHTML=e,this)}/**
	 * Pass a function to be called whenever the value is modified by this controller.
	 * The function receives the new value as its first parameter. The value of `this` will be the
	 * controller.
	 *
	 * For function controllers, the `onChange` callback will be fired on click, after the function
	 * executes.
	 * @param {Function} callback
	 * @returns {this}
	 * @example
	 * const controller = gui.add( object, 'property' );
	 *
	 * controller.onChange( function( v ) {
	 * 	console.log( 'The value is now ' + v );
	 * 	console.assert( this === controller );
	 * } );
	 */onChange(e){return(/**
		 * Used to access the function bound to `onChange` events. Don't modify this value directly.
		 * Use the `controller.onChange( callback )` method instead.
		 * @type {Function}
		 */this._onChange=e,this)}/**
	 * Calls the onChange methods of this controller and its parent GUI.
	 * @protected
	 */_callOnChange(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0}/**
	 * Pass a function to be called after this controller has been modified and loses focus.
	 * @param {Function} callback
	 * @returns {this}
	 * @example
	 * const controller = gui.add( object, 'property' );
	 *
	 * controller.onFinishChange( function( v ) {
	 * 	console.log( 'Changes complete: ' + v );
	 * 	console.assert( this === controller );
	 * } );
	 */onFinishChange(e){return(/**
		 * Used to access the function bound to `onFinishChange` events. Don't modify this value
		 * directly. Use the `controller.onFinishChange( callback )` method instead.
		 * @type {Function}
		 */this._onFinishChange=e,this)}/**
	 * Should be called by Controller when its widgets lose focus.
	 * @protected
	 */_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}/**
	 * Sets the controller back to its initial value.
	 * @returns {this}
	 */reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}/**
	 * Enables this controller.
	 * @param {boolean} enabled
	 * @returns {this}
	 * @example
	 * controller.enable();
	 * controller.enable( false ); // disable
	 * controller.enable( controller._disabled ); // toggle
	 */enable(e=!0){return this.disable(!e)}/**
	 * Disables this controller.
	 * @param {boolean} disabled
	 * @returns {this}
	 * @example
	 * controller.disable();
	 * controller.disable( false ); // enable
	 * controller.disable( !controller._disabled ); // toggle
	 */disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}/**
	 * Shows the Controller after it's been hidden.
	 * @param {boolean} show
	 * @returns {this}
	 * @example
	 * controller.show();
	 * controller.show( false ); // hide
	 * controller.show( controller._hidden ); // toggle
	 */show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}/**
	 * Hides the Controller.
	 * @returns {this}
	 */hide(){return this.show(!1)}/**
	 * Changes this controller into a dropdown of options.
	 *
	 * Calling this method on an option controller will simply update the options. However, if this
	 * controller was not already an option controller, old references to this controller are
	 * destroyed, and a new controller is added to the end of the GUI.
	 * @example
	 * // safe usage
	 *
	 * gui.add( obj, 'prop1' ).options( [ 'a', 'b', 'c' ] );
	 * gui.add( obj, 'prop2' ).options( { Big: 10, Small: 1 } );
	 * gui.add( obj, 'prop3' );
	 *
	 * // danger
	 *
	 * const ctrl1 = gui.add( obj, 'prop1' );
	 * gui.add( obj, 'prop2' );
	 *
	 * // calling options out of order adds a new controller to the end...
	 * const ctrl2 = ctrl1.options( [ 'a', 'b', 'c' ] );
	 *
	 * // ...and ctrl1 now references a controller that doesn't exist
	 * assert( ctrl2 !== ctrl1 )
	 * @param {object|Array} options
	 * @returns {Controller}
	 */options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}/**
	 * Sets the minimum value. Only works on number controllers.
	 * @param {number} min
	 * @returns {this}
	 */min(e){return this}/**
	 * Sets the maximum value. Only works on number controllers.
	 * @param {number} max
	 * @returns {this}
	 */max(e){return this}/**
	 * Values set by this controller will be rounded to multiples of `step`. Only works on number
	 * controllers.
	 * @param {number} step
	 * @returns {this}
	 */step(e){return this}/**
	 * Rounds the displayed value to a fixed number of decimals, without affecting the actual value
	 * like `step()`. Only works on number controllers.
	 * @example
	 * gui.add( object, 'property' ).listen().decimals( 4 );
	 * @param {number} decimals
	 * @returns {this}
	 */decimals(e){return this}/**
	 * Calls `updateDisplay()` every animation frame. Pass `false` to stop listening.
	 * @param {boolean} listen
	 * @returns {this}
	 */listen(e=!0){return(/**
		 * Used to determine if the controller is currently listening. Don't modify this value
		 * directly. Use the `controller.listen( true|false )` method instead.
		 * @type {boolean}
		 */this._listening=e,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this)}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);// To prevent framerate loss, make sure the value has changed before updating the display.
// Note: save() is used here instead of getValue() only because of ColorController. The !== operator
// won't work for color objects or arrays, but ColorController.save() always returns a string.
let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}/**
	 * Returns `object[ property ]`.
	 * @returns {any}
	 */getValue(){return this.object[this.property]}/**
	 * Sets the value of `object[ property ]`, invokes any `onChange` handlers and updates the display.
	 * @param {any} value
	 * @returns {this}
	 */setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}/**
	 * Updates the display to keep it in sync with the current value. Useful for updating your
	 * controllers when their values have been modified outside of the GUI.
	 * @returns {this}
	 */updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}/**
	 * Destroys this controller and removes it from the parent GUI.
	 */destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}constructor(e,t,n,i,r="div"){/**
		 * The GUI that contains this controller.
		 * @type {GUI}
		 */this.parent=e,/**
		 * The object this controller will modify.
		 * @type {object}
		 */this.object=t,/**
		 * The name of the property to control.
		 * @type {string}
		 */this.property=n,/**
		 * Used to determine if the controller is disabled.
		 * Use `controller.disable( true|false )` to modify this value.
		 * @type {boolean}
		 */this._disabled=!1,/**
		 * Used to determine if the Controller is hidden.
		 * Use `controller.show()` or `controller.hide()` to change this.
		 * @type {boolean}
		 */this._hidden=!1,/**
		 * The value of `object[ property ]` when the controller was created.
		 * @type {any}
		 */this.initialValue=this.getValue(),/**
		 * The outermost container DOM element for this controller.
		 * @type {HTMLElement}
		 */this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),/**
		 * The DOM element that contains the controller's name.
		 * @type {HTMLElement}
		 */this.$name=document.createElement("div"),this.$name.classList.add("name"),es.nextNameID=es.nextNameID||0,this.$name.id=`lil-gui-name-${++es.nextNameID}`,/**
		 * The DOM element that contains the controller's "widget" (which differs by controller type).
		 * @type {HTMLElement}
		 */this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),/**
		 * The DOM element that receives the disabled attribute when using disable().
		 * @type {HTMLElement}
		 */this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),// Don't fire global key events while typing in a controller
this.domElement.addEventListener("keydown",e=>e.stopPropagation()),this.domElement.addEventListener("keyup",e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}}class ea extends es{updateDisplay(){return this.$input.checked=this.getValue(),this}constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}}function el(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!n&&"#"+n}const ec={isPrimitive:!0,match:e=>"number"==typeof e,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},eu=[{isPrimitive:!0,match:e=>"string"==typeof e,fromHexString:el,toHexString:el},ec,{isPrimitive:!1,// The arrow function is here to appease tree shakers like esbuild or webpack.
// See https://esbuild.github.io/api/#tree-shaking
match:e=>Array.isArray(e),fromHexString(e,t,n=1){let i=ec.fromHexString(e);t[0]=(i>>16&255)/255*n,t[1]=(i>>8&255)/255*n,t[2]=(255&i)/255*n},toHexString([e,t,n],i=1){i=255/i;let r=e*i<<16^t*i<<8^n*i<<0;return ec.toHexString(r)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let i=ec.fromHexString(e);t.r=(i>>16&255)/255*n,t.g=(i>>8&255)/255*n,t.b=(255&i)/255*n},toHexString({r:e,g:t,b:n},i=1){i=255/i;let r=e*i<<16^t*i<<8^n*i<<0;return ec.toHexString(r)}}];class eB extends es{reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}constructor(e,t,n,i){var r;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,eu.find(e=>e.match(r))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let e=el(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}}class ed extends es{constructor(e,t,n){super(e,t,n,"function"),// Buttons are the only case where widget contains name
this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),// enables :active pseudo class on mobile
this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class eF extends es{decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=void 0===this._decimals?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id);// On touch devices only, use input[type=number] to force a numeric keyboard.
// Ideally we could use one input type everywhere, but [type=number] has quirks
// on desktop, and [inputmode=decimal] has quirks on iOS.
// See https://github.com/georgealways/lil-gui/pull/16
let e=window.matchMedia("(pointer: coarse)").matches;e&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;// Keys & mouse wheel
// ---------------------------------------------------------------------
let t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),// Force the input to updateDisplay when it's focused
this.$input.value=this.getValue())},n=!1,i,r,o,s,a,l=e=>{if(n){let t=e.clientX-i,o=e.clientY-r;Math.abs(o)>5?(e.preventDefault(),this.$input.blur(),n=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(t)>5&&c()}// This isn't an else so that the first move counts towards dragDelta
if(!n){let t=e.clientY-o;a-=t*this._step*this._arrowKeyMultiplier(e),s+a>this._max?a=this._max-s:s+a<this._min&&(a=this._min-s),this._snapClampSetValue(s+a)}o=e.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))}),this.$input.addEventListener("keydown",e=>{"Enter"===e.key&&this.$input.blur(),"ArrowUp"===e.code&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),"ArrowDown"===e.code&&(e.preventDefault(),t(-(this._step*this._arrowKeyMultiplier(e)*1)))}),this.$input.addEventListener("wheel",e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},{passive:!1}),this.$input.addEventListener("mousedown",e=>{i=e.clientX,r=o=e.clientY,n=!0,s=this.getValue(),a=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){let e;this._hasSlider=!0,// Build DOM
// ---------------------------------------------------------------------
this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");// Map clientX to value
// ---------------------------------------------------------------------
let t=(e,t,n,i,r)=>(e-t)/(n-t)*(r-i)+i,n=e=>{let n=this.$slider.getBoundingClientRect(),i=t(e,n.left,n.right,this._min,this._max);this._snapClampSetValue(i)},i=e=>{n(e.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)},o=!1,s,a,l=e=>{e.preventDefault(),this._setDraggingStyle(!0),n(e.touches[0].clientX),o=!1},c=e=>{if(o){let t=e.touches[0].clientX-s,n=e.touches[0].clientY-a;Math.abs(t)>Math.abs(n)?l(e):(// This was, in fact, an attempt to scroll. Abort.
window.removeEventListener("touchmove",c),window.removeEventListener("touchend",u))}else e.preventDefault(),n(e.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",u)},B=this._callOnFinishChange.bind(this);this.$slider.addEventListener("mousedown",e=>{this._setDraggingStyle(!0),n(e.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)}),this.$slider.addEventListener("touchstart",e=>{e.touches.length>1||(this._hasScrollBar?(s=e.touches[0].clientX,a=e.touches[0].clientY,o=!0):l(e),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",u))},{passive:!1}),this.$slider.addEventListener("wheel",t=>{// ignore vertical wheels if there's a scrollbar
let n=Math.abs(t.deltaX)<Math.abs(t.deltaY);if(n&&this._hasScrollBar)return;t.preventDefault();// set value
let i=this._normalizeMouseWheel(t)*this._step;this._snapClampSetValue(this.getValue()+i),// force the input to updateDisplay when it's focused
this.$input.value=this.getValue(),// debounce onFinishChange
clearTimeout(e),e=setTimeout(B,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;// Safari and Chrome report weird non-integral values for a notched wheel,
// but still expose actual lines scrolled via wheelDelta. Notched wheels
// should behave the same way as arrow keys.
Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120*(this._stepExplicit?1:10));let i=t+-n;return i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){// This would be the logical way to do things, but floating point errors.
// return Math.round( value / this._step ) * this._step;
// Using inverse step solves a lot of them, but not all
// const inverseStep = 1 / this._step;
// return Math.round( value * inverseStep ) / inverseStep;
// Not happy about this, but haven't seen it break.
let t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);let s=void 0!==o;this.step(s?o:this._getImplicitStep(),s),this.updateDisplay()}}class eh extends es{options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement("option");t.innerHTML=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=-1===t?e:this._names[t],this}constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}}class ef extends es{updateDisplay(){return this.$input.value=this.getValue(),this}constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",e=>{"Enter"===e.code&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}}const ep=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u{2195}";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u{25BE}";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u{25B8}";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u{2713}";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;let eA=!1;class eg{/**
	 * Adds a controller to the GUI, inferring controller type using the `typeof` operator.
	 * @example
	 * gui.add( object, 'property' );
	 * gui.add( object, 'number', 0, 100, 1 );
	 * gui.add( object, 'options', [ 1, 2, 3 ] );
	 *
	 * @param {object} object The object the controller will modify.
	 * @param {string} property Name of the property to control.
	 * @param {number|object|Array} [$1] Minimum value for number controllers, or the set of
	 * selectable values for a dropdown.
	 * @param {number} [max] Maximum value for number controllers.
	 * @param {number} [step] Step value for number controllers.
	 * @returns {Controller}
	 */add(e,t,n,i,r){if(Object(n)===n)return new eh(this,e,t,n);let o=e[t];switch(typeof o){case"number":return new eF(this,e,t,n,i,r);case"boolean":return new ea(this,e,t);case"string":return new ef(this,e,t);case"function":return new ed(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}/**
	 * Adds a color controller to the GUI.
	 * @example
	 * params = {
	 * 	cssColor: '#ff00ff',
	 * 	rgbColor: { r: 0, g: 0.2, b: 0.4 },
	 * 	customRange: [ 0, 127, 255 ],
	 * };
	 *
	 * gui.addColor( params, 'cssColor' );
	 * gui.addColor( params, 'rgbColor' );
	 * gui.addColor( params, 'customRange', 255 );
	 *
	 * @param {object} object The object the controller will modify.
	 * @param {string} property Name of the property to control.
	 * @param {number} rgbScale Maximum value for a color channel when using an RGB color. You may
	 * need to set this to 255 if your colors are too bright.
	 * @returns {Controller}
	 */addColor(e,t,n=1){return new eB(this,e,t,n)}/**
	 * Adds a folder to the GUI, which is just another GUI. This method returns
	 * the nested GUI so you can add controllers to it.
	 * @example
	 * const folder = gui.addFolder( 'Position' );
	 * folder.add( position, 'x' );
	 * folder.add( position, 'y' );
	 * folder.add( position, 'z' );
	 *
	 * @param {string} title Name to display in the folder's title bar.
	 * @returns {GUI}
	 */addFolder(e){let t=new eg({parent:this,title:e});return this.root._closeFolders&&t.close(),t}/**
	 * Recalls values that were saved with `gui.save()`.
	 * @param {object} obj
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {this}
	 */load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{!(t instanceof ed)&&t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}/**
	 * Returns an object mapping controller names to values. The object can be passed to `gui.load()` to
	 * recall these values.
	 * @example
	 * {
	 * 	controllers: {
	 * 		prop1: 1,
	 * 		prop2: 'value',
	 * 		...
	 * 	},
	 * 	folders: {
	 * 		folderName1: { controllers, folders },
	 * 		folderName2: { controllers, folders }
	 * 		...
	 * 	}
	 * }
	 *
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {object}
	 */save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof ed)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}/**
	 * Opens a GUI or folder. GUI and folders are open by default.
	 * @param {boolean} open Pass false to close.
	 * @returns {this}
	 * @example
	 * gui.open(); // open
	 * gui.open( false ); // close
	 * gui.open( gui._closed ); // toggle
	 */open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}/**
	 * Closes the GUI.
	 * @returns {this}
	 */close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}/**
	 * Shows the GUI after it's been hidden.
	 * @param {boolean} show
	 * @returns {this}
	 * @example
	 * gui.show();
	 * gui.show( false ); // hide
	 * gui.show( gui._hidden ); // toggle
	 */show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}/**
	 * Hides the GUI.
	 * @returns {this}
	 */hide(){return this.show(!1)}openAnimated(e=!0){return(// set state immediately
this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),// wait for next frame to measure $children
requestAnimationFrame(()=>{// explicitly set initial height for transition
let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");let n=e=>{e.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);// todo: this is wrong if children's scrollHeight makes for a gui taller than maxHeight
let i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this)}/**
	 * Change the title of this GUI.
	 * @param {string} title
	 * @returns {this}
	 */title(e){return(/**
		 * Current title of the GUI. Use `gui.title( 'Title' )` to modify this value.
		 * @type {string}
		 */this._title=e,this.$title.innerHTML=e,this)}/**
	 * Resets all controllers to their initial values.
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {this}
	 */reset(e=!0){let t=e?this.controllersRecursive():this.controllers;return t.forEach(e=>e.reset()),this}/**
	 * Pass a function to be called whenever a controller in this GUI changes.
	 * @param {function({object:object, property:string, value:any, controller:Controller})} callback
	 * @returns {this}
	 * @example
	 * gui.onChange( event => {
	 * 	event.object     // object that was modified
	 * 	event.property   // string, name of property
	 * 	event.value      // new value of controller
	 * 	event.controller // controller that was modified
	 * } );
	 */onChange(e){return(/**
		 * Used to access the function bound to `onChange` events. Don't modify this value
		 * directly. Use the `gui.onChange( callback )` method instead.
		 * @type {Function}
		 */this._onChange=e,this)}_callOnChange(e){this.parent&&this.parent._callOnChange(e),void 0!==this._onChange&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}/**
	 * Pass a function to be called whenever a controller in this GUI has finished changing.
	 * @param {function({object:object, property:string, value:any, controller:Controller})} callback
	 * @returns {this}
	 * @example
	 * gui.onFinishChange( event => {
	 * 	event.object     // object that was modified
	 * 	event.property   // string, name of property
	 * 	event.value      // new value of controller
	 * 	event.controller // controller that was modified
	 * } );
	 */onFinishChange(e){return(/**
		 * Used to access the function bound to `onFinishChange` events. Don't modify this value
		 * directly. Use the `gui.onFinishChange( callback )` method instead.
		 * @type {Function}
		 */this._onFinishChange=e,this)}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}/**
	 * Pass a function to be called when this GUI or its descendants are opened or closed.
	 * @param {function(GUI)} callback
	 * @returns {this}
	 * @example
	 * gui.onOpenClose( changedGUI => {
	 * 	console.log( changedGUI._closed );
	 * } );
	 */onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),void 0!==this._onOpenClose&&this._onOpenClose.call(this,e)}/**
	 * Destroys all DOM elements and event listeners associated with this GUI.
	 */destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}/**
	 * Returns an array of controllers contained by this GUI and its descendents.
	 * @returns {Controller[]}
	 */controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}/**
	 * Returns an array of folders contained by this GUI and its descendents.
	 * @returns {GUI[]}
	 */foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}/**
	 * Creates a panel that holds controllers.
	 * @example
	 * new GUI();
	 * new GUI( { container: document.getElementById( 'custom' ) } );
	 *
	 * @param {object} [options]
	 * @param {boolean} [options.autoPlace=true]
	 * Adds the GUI to `document.body` and fixes it to the top right of the page.
	 *
	 * @param {HTMLElement} [options.container]
	 * Adds the GUI to this DOM element. Overrides `autoPlace`.
	 *
	 * @param {number} [options.width=245]
	 * Width of the GUI in pixels, usually set when name labels become too long. Note that you can make
	 * name labels wider in CSS with `.lil‑gui { ‑‑name‑width: 55% }`.
	 *
	 * @param {string} [options.title=Controls]
	 * Name to display in the title bar.
	 *
	 * @param {boolean} [options.closeFolders=false]
	 * Pass `true` to close all folders in this GUI by default.
	 *
	 * @param {boolean} [options.injectStyles=true]
	 * Injects the default stylesheet into the page if this is the first GUI.
	 * Pass `false` to use your own stylesheet.
	 *
	 * @param {number} [options.touchStyles=true]
	 * Makes controllers larger on touch devices. Pass `false` to disable touch styles.
	 *
	 * @param {GUI} [options.parent]
	 * Adds this GUI as a child in another GUI. Usually this is done for you by `addFolder()`.
	 *
	 */constructor({parent:e,autoPlace:t=void 0===e,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:s=!0,touchStyles:a=!0}={}){if(/**
		 * The GUI containing this folder, or `undefined` if this is the root GUI.
		 * @type {GUI}
		 */this.parent=e,/**
		 * The top level GUI containing this folder, or `this` if this is the root GUI.
		 * @type {GUI}
		 */this.root=e?e.root:this,/**
		 * The list of controllers and folders contained by this GUI.
		 * @type {Array<GUI|Controller>}
		 */this.children=[],/**
		 * The list of controllers contained by this GUI.
		 * @type {Array<Controller>}
		 */this.controllers=[],/**
		 * The list of folders contained by this GUI.
		 * @type {Array<GUI>}
		 */this.folders=[],/**
		 * Used to determine if the GUI is closed. Use `gui.open()` or `gui.close()` to change this.
		 * @type {boolean}
		 */this._closed=!1,/**
		 * Used to determine if the GUI is hidden. Use `gui.show()` or `gui.hide()` to change this.
		 * @type {boolean}
		 */this._hidden=!1,/**
		 * The outermost container element.
		 * @type {HTMLElement}
		 */this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),/**
		 * The DOM element that contains the title.
		 * @type {HTMLElement}
		 */this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",e=>{("Enter"===e.code||"Space"===e.code)&&(e.preventDefault(),this.$title.click())}),// enables :active pseudo class on mobile
this.$title.addEventListener("touchstart",()=>{},{passive:!0}),/**
		 * The DOM element that contains children.
		 * @type {HTMLElement}
		 */this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);// Stop the constructor early, everything onward only applies to root GUI's
return}this.domElement.classList.add("root"),a&&this.domElement.classList.add("allow-touch-styles"),!eA&&s&&(function(e){let t=document.createElement("style");t.innerHTML=e;let n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(t,n):document.head.appendChild(t)}(ep),eA=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}}function em(){return localStorage.getItem("adminLoginRedirectTo")||"/"}var ev={};ev=/******/function(e){/******/// The module cache
/******/var t={};/******//******/// The require function
/******/function n(i){/******//******/// Check if module is in cache
/******/if(t[i])/******/return t[i].exports;/******/// Create a new module (and put it into the cache)
/******/var r=t[i]={/******/i:i,/******/l:!1,/******/exports:{}};/******//******/// Return the exports of the module
/******/return(/******//******/// Execute the module function
/******/e[i].call(r.exports,r,r.exports,n),/******//******/// Flag the module as loaded
/******/r.l=!0,r.exports);/******/}/******//******/// Load entry module and return exports
/******/return(/******//******//******/// expose the modules object (__webpack_modules__)
/******/n.m=e,/******//******/// expose the module cache
/******/n.c=t,/******//******/// identity function for calling harmony imports with the correct context
/******/n.i=function(e){return e},/******//******/// define getter function for harmony exports
/******/n.d=function(e,t,i){/******/n.o(e,t)||/******/Object.defineProperty(e,t,{/******/configurable:!1,/******/enumerable:!0,/******/get:i});/******/},/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/n.n=function(e){/******/var t=e&&e.__esModule?/******/function(){return e.default}:/******/function(){return e};/******/return /******/n.d(t,"a",t),t;/******/},/******//******/// Object.prototype.hasOwnProperty.call
/******/n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},/******//******/// __webpack_public_path__
/******/n.p="",n(n.s=6));/******/}([/* 0 *//***/function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.css=t.deepExtend=t.animationEndEvents=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.inArray=function(e,t,n){var i=void 0;if(n){for(i in t)if(t.hasOwnProperty(i)&&t[i]===e)return!0}else for(i in t)if(t.hasOwnProperty(i)&&t[i]===e)return!0;return!1},t.stopPropagation=function(e){void 0!==(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0},t.generateID=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"noty_"+e+"_"+"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},t.outerHeight=function(e){var t=e.offsetHeight,n=window.getComputedStyle(e);return t+(parseInt(n.marginTop)+parseInt(n.marginBottom))},t.addListener=o,t.hasClass=s,t.addClass=function(e,t){var n=l(e),i=n+t;s(n,t)||// Trim the opening space.
(e.className=i.substring(1))},t.removeClass=function(e,t){var n=l(e),i=void 0;s(e,t)&&(// Replace the class name.
i=n.replace(" "+t+" "," "),// Trim the opening and closing spaces.
e.className=i.substring(1,i.length-1))},t.remove=a,t.classList=l,t.visibilityChangeFlow=function(){var e=void 0,t=void 0;function n(){r.PageHidden?setTimeout(function(){Object.keys(r.Store).forEach(function(e){r.Store.hasOwnProperty(e)&&r.Store[e].options.visibilityControl&&r.Store[e].stop()})},100):setTimeout(function(){Object.keys(r.Store).forEach(function(e){r.Store.hasOwnProperty(e)&&r.Store[e].options.visibilityControl&&r.Store[e].resume()}),r.queueRenderAll()},100)}void 0!==document.hidden?(// Opera 12.10 and Firefox 18 and later support
e="hidden",t="visibilitychange"):void 0!==document.msHidden?(e="msHidden",t="msvisibilitychange"):void 0!==document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),t&&o(document,t,function(){r.PageHidden=document[e],n()}),o(window,"blur",function(){r.PageHidden=!0,n()}),o(window,"focus",function(){r.PageHidden=!1,n()})},t.createAudioElements=function(e){if(e.hasSound){var t=document.createElement("audio");e.options.sounds.sources.forEach(function(e){var n=document.createElement("source");n.src=e,n.type="audio/"+e.match(/\.([^.]+)$/)[1],t.appendChild(n)}),e.barDom?e.barDom.appendChild(t):document.querySelector("body").appendChild(t),t.volume=e.options.sounds.volume,e.soundPlayed||(t.play(),e.soundPlayed=!0),t.onended=function(){a(t)}}};var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1));function o(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t=t.split(" ");for(var r=0;r<t.length;r++)document.addEventListener?e.addEventListener(t[r],n,i):document.attachEvent&&e.attachEvent("on"+t[r],n)}function s(e,t){return("string"==typeof e?e:l(e)).indexOf(" "+t+" ")>=0}function a(e){e.parentNode&&e.parentNode.removeChild(e)}function l(e){return(" "+(e&&e.className||"")+" ").replace(/\s+/gi," ")}t.animationEndEvents="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",t.deepExtend=function e(t){t=t||{};for(var n=1;n<arguments.length;n++){var r=arguments[n];if(r)for(var o in r)r.hasOwnProperty(o)&&(Array.isArray(r[o])?t[o]=r[o]:"object"===i(r[o])&&null!==r[o]?t[o]=e(t[o],r[o]):t[o]=r[o])}return t},t.css=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,i,r){var o;i=t[o=(o=i).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[o]=function(t){var n=document.body.style;if(t in n)return t;for(var i=e.length,r=t.charAt(0).toUpperCase()+t.slice(1),o=void 0;i--;)if((o=e[i]+r)in n)return o;return t}(o)),n.style[i]=r}return function(e,t){var i=arguments,r=void 0,o=void 0;if(2===i.length)for(r in t)t.hasOwnProperty(r)&&void 0!==(o=t[r])&&t.hasOwnProperty(r)&&n(e,r,o);else n(e,i[1],i[2])}}();/***/},/* 1 *//***/function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Defaults=t.Store=t.Queues=t.DefaultMaxVisible=t.docTitle=t.DocModalCount=t.PageHidden=void 0,t.getQueueCounts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global",t=0,n=a;return l.hasOwnProperty(e)&&(n=l[e].maxVisible,Object.keys(c).forEach(function(n){c[n].options.queue===e&&!c[n].closed&&t++})),{current:t,maxVisible:n}},t.addToQueue=/**
 * @param {Noty} ref
 * @return {void}
 */function(e){l.hasOwnProperty(e.options.queue)||(l[e.options.queue]={maxVisible:a,queue:[]}),l[e.options.queue].queue.push(e)},t.removeFromQueue=/**
 * @param {Noty} ref
 * @return {void}
 */function(e){if(l.hasOwnProperty(e.options.queue)){var t=[];Object.keys(l[e.options.queue].queue).forEach(function(n){l[e.options.queue].queue[n].id!==e.id&&t.push(l[e.options.queue].queue[n])}),l[e.options.queue].queue=t}},t.queueRender=u,t.queueRenderAll=/**
 * @return {void}
 */function(){Object.keys(l).forEach(function(e){u(e)})},t.ghostFix=/**
 * @param {Noty} ref
 * @return {void}
 */function(e){var t=i.generateID("ghost"),n=document.createElement("div");n.setAttribute("id",t),i.css(n,{height:i.outerHeight(e.barDom)+"px"}),e.barDom.insertAdjacentHTML("afterend",n.outerHTML),i.remove(e.barDom),n=document.getElementById(t),i.addClass(n,"noty_fix_effects_height"),i.addListener(n,i.animationEndEvents,function(){i.remove(n)})},t.build=/**
 * @param {Noty} ref
 * @return {void}
 */function(e){/**
 * @param {Noty} ref
 * @return {void}
 */(function(e){if(e.options.container){e.layoutDom=document.querySelector(e.options.container);return}var t="noty_layout__"+e.options.layout;e.layoutDom=document.querySelector("div#"+t),e.layoutDom||(e.layoutDom=document.createElement("div"),e.layoutDom.setAttribute("id",t),e.layoutDom.setAttribute("role","alert"),e.layoutDom.setAttribute("aria-live","polite"),i.addClass(e.layoutDom,"noty_layout"),document.querySelector("body").appendChild(e.layoutDom))})(e);var t='<div class="noty_body">'+e.options.text+"</div>"+/**
 * @param {Noty} ref
 * @return {string}
 */function(e){if(B(e)){var t=document.createElement("div");return i.addClass(t,"noty_buttons"),Object.keys(e.options.buttons).forEach(function(n){t.appendChild(e.options.buttons[n].dom)}),e.options.buttons.forEach(function(e){t.appendChild(e.dom)}),t.outerHTML}return""}(e)+'<div class="noty_progressbar"></div>';e.barDom=document.createElement("div"),e.barDom.setAttribute("id",e.id),i.addClass(e.barDom,"noty_bar noty_type__"+e.options.type+" noty_theme__"+e.options.theme),e.barDom.innerHTML=t,h(e,"onTemplate")},t.hasButtons=B,t.handleModal=/**
 * @param {Noty} ref
 * @return {void}
 */function(e){var n,o;e.options.modal&&(0===r&&(n=document.querySelector("body"),o=document.createElement("div"),i.addClass(o,"noty_modal"),n.insertBefore(o,n.firstChild),i.addClass(o,"noty_modal_open"),i.addListener(o,i.animationEndEvents,function(){i.removeClass(o,"noty_modal_open")})),t.DocModalCount=r+=1)},t.handleModalClose=/**
 * @param {Noty} ref
 * @return {void}
 */function(e){if(e.options.modal&&r>0&&(t.DocModalCount=r-=1,r<=0)){var n=document.querySelector(".noty_modal");n&&(i.removeClass(n,"noty_modal_open"),i.addClass(n,"noty_modal_close"),i.addListener(n,i.animationEndEvents,function(){i.remove(n)}))}},t.queueClose=d,t.dequeueClose=F,t.fire=h,t.openFlow=/**
 * @param {Noty} ref
 * @return {void}
 */function(e){h(e,"afterShow"),d(e),i.addListener(e.barDom,"mouseenter",function(){F(e)}),i.addListener(e.barDom,"mouseleave",function(){d(e)})},t.closeFlow=/**
 * @param {Noty} ref
 * @return {void}
 */function(e){delete c[e.id],e.closing=!1,h(e,"afterClose"),i.remove(e.barDom),0!==e.layoutDom.querySelectorAll(".noty_bar").length||e.options.container||i.remove(e.layoutDom),(i.inArray("docVisible",e.options.titleCount.conditions)||i.inArray("docHidden",e.options.titleCount.conditions))&&s.decrement(),u(e.options.queue)};var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));t.PageHidden=!1;var r=t.DocModalCount=0,o={originalTitle:null,count:0,changed:!1},s=t.docTitle={increment:function(){o.count++,s._update()},decrement:function(){if(o.count--,o.count<=0){s._clear();return}s._update()},_update:function(){var e=document.title;o.changed?document.title="("+o.count+") "+o.originalTitle:(o.originalTitle=e,document.title="("+o.count+") "+e,o.changed=!0)},_clear:function(){o.changed&&(o.count=0,document.title=o.originalTitle,o.changed=!1)}},a=t.DefaultMaxVisible=5,l=t.Queues={global:{maxVisible:a,queue:[]}},c=t.Store={};/**
 * @param {string} queueName
 * @return {void}
 */function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";if(l.hasOwnProperty(e)){var t=l[e].queue.shift();t&&t.show()}}/**
 * @param {Noty} ref
 * @return {boolean}
 */function B(e){return!!(e.options.buttons&&Object.keys(e.options.buttons).length)}/**
 * @param {Noty} ref
 * @return {void}
 */function d(e){e.options.timeout&&(e.options.progressBar&&e.progressDom&&i.css(e.progressDom,{transition:"width "+e.options.timeout+"ms linear",width:"0%"}),clearTimeout(e.closeTimer),e.closeTimer=setTimeout(function(){e.close()},e.options.timeout))}/**
 * @param {Noty} ref
 * @return {void}
 */function F(e){e.options.timeout&&e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=-1,e.options.progressBar&&e.progressDom&&i.css(e.progressDom,{transition:"width 0ms linear",width:"100%"}))}/**
 * @param {Noty} ref
 * @param {string} eventName
 * @return {void}
 */function h(e,t){e.listeners.hasOwnProperty(t)&&e.listeners[t].forEach(function(t){"function"==typeof t&&t.apply(e)})}t.Defaults={type:"alert",layout:"topRight",theme:"mint",text:"",timeout:!1,progressBar:!0,closeWith:["click"],animation:{open:"noty_effects_open",close:"noty_effects_close"},id:!1,force:!1,killer:!1,queue:"global",container:!1,buttons:[],callbacks:{beforeShow:null,onShow:null,afterShow:null,onClose:null,afterClose:null,onClick:null,onHover:null,onTemplate:null},sounds:{sources:[],volume:1,conditions:[]},titleCount:{conditions:[]},modal:!1,visibilityControl:!1};/***/},/* 2 *//***/function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.NotyButton=void 0;var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));t.NotyButton=function e(t,n,r){var o=this,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),this.dom=document.createElement("button"),this.dom.innerHTML=t,this.id=s.id=s.id||i.generateID("button"),this.cb=r,Object.keys(s).forEach(function(e){o.dom.setAttribute(e,s[e])}),i.addClass(this.dom,n||"noty_btn"),this};/***/},/* 3 *//***/function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.Push=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/service-worker.js";return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),this.subData={},this.workerPath=t,this.listeners={onPermissionGranted:[],onPermissionDenied:[],onSubscriptionSuccess:[],onSubscriptionCancel:[],onWorkerError:[],onWorkerSuccess:[],onWorkerNotSupported:[]},this}return(/**
   * @param {string} eventName
   * @param {function} cb
   * @return {Push}
   */i(e,[{key:"on",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return"function"==typeof t&&this.listeners.hasOwnProperty(e)&&this.listeners[e].push(t),this}},{key:"fire",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.listeners.hasOwnProperty(e)&&this.listeners[e].forEach(function(e){"function"==typeof e&&e.apply(t,n)})}},{key:"create",value:function(){console.log("NOT IMPLEMENTED YET")}},{key:"isSupported",value:function(){var e=!1;try{e=window.Notification||window.webkitNotifications||navigator.mozNotification||window.external&&void 0!==window.external.msIsSiteMode()}catch(e){}return e}},{key:"getPermissionStatus",value:function(){var e="default";if(window.Notification&&window.Notification.permissionLevel)e=window.Notification.permissionLevel;else if(window.webkitNotifications&&window.webkitNotifications.checkPermission)switch(window.webkitNotifications.checkPermission()){case 1:e="default";break;case 0:e="granted";break;default:e="denied"}else window.Notification&&window.Notification.permission?e=window.Notification.permission:navigator.mozNotification?e="granted":window.external&&void 0!==window.external.msIsSiteMode()&&(e=window.external.msIsSiteMode()?"granted":"default");return e.toString().toLowerCase()}},{key:"getEndpoint",value:function(e){var t=e.endpoint,n=e.subscriptionId;return n&&-1===t.indexOf(n)&&(t+="/"+n),t}},{key:"isSWRegistered",value:function(){try{return"activated"===navigator.serviceWorker.controller.state}catch(e){return!1}}},{key:"unregisterWorker",value:function(){var e=this;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(function(t){var n=!0,i=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)o.value.unregister(),e.fire("onSubscriptionCancel")}catch(e){i=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw r}}})}},{key:"requestSubscription",value:function(){var e=this,t=!(arguments.length>0)||void 0===arguments[0]||arguments[0],n=this,i=this.getPermissionStatus(),r=function(i){"granted"===i?(e.fire("onPermissionGranted"),"serviceWorker"in navigator?navigator.serviceWorker.register(e.workerPath).then(function(){navigator.serviceWorker.ready.then(function(e){n.fire("onWorkerSuccess"),e.pushManager.subscribe({userVisibleOnly:t}).then(function(e){var t=e.getKey("p256dh"),i=e.getKey("auth");n.subData={endpoint:n.getEndpoint(e),p256dh:t?window.btoa(String.fromCharCode.apply(null,new Uint8Array(t))):null,auth:i?window.btoa(String.fromCharCode.apply(null,new Uint8Array(i))):null},n.fire("onSubscriptionSuccess",[n.subData])}).catch(function(e){n.fire("onWorkerError",[e])})})}):n.fire("onWorkerNotSupported")):"denied"===i&&(e.fire("onPermissionDenied"),e.unregisterWorker())};"default"===i?window.Notification&&window.Notification.requestPermission?window.Notification.requestPermission(r):window.webkitNotifications&&window.webkitNotifications.checkPermission&&window.webkitNotifications.requestPermission(r):r(i)}}]),e)}();/***/},/* 4 *//***/function(e,t,n){/* WEBPACK VAR INJECTION */(function(t,i){e.exports=function(){function e(e){return"function"==typeof e}var r,o,s,a,l=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},c=0,u=void 0,B=void 0,d=function(e,t){m[c]=e,m[c+1]=t,2===(c+=2)&&(B?B(v):y())},F="undefined"!=typeof window?window:void 0,h=F||{},f=h.MutationObserver||h.WebKitMutationObserver,p="undefined"==typeof self&&void 0!==t&&"[object process]"===({}).toString.call(t),A="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function g(){// Store setTimeout reference so es6-promise will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var e=setTimeout;return function(){return e(v,1)}}var m=Array(1e3);function v(){for(var e=0;e<c;e+=2)(0,m[e])(m[e+1]),m[e]=void 0,m[e+1]=void 0;c=0}var y=void 0;function b(e,t){var n,i=arguments,r=this,o=new this.constructor(w);void 0===o[C]&&K(o);var s=r._state;return s?(n=i[s-1],d(function(){return M(s,o,n,r._result)})):U(r,o,e,t),o}/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/function E(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(w);return T(t,e),t}p?y=function(){return t.nextTick(v)}:f?(r=0,o=new f(v),s=document.createTextNode(""),o.observe(s,{characterData:!0}),y=function(){s.data=r=++r%2}):A?((a=new MessageChannel).port1.onmessage=v,y=function(){return a.port2.postMessage(0)}):y=void 0===F?function(){try{var e=n(9);return u=e.runOnLoop||e.runOnContext,void 0!==u?function(){u(v)}:g()}catch(e){return g()}}():g();var C=Math.random().toString(36).substring(16);function w(){}var I=void 0,x=new L;function S(e){try{return e.then}catch(e){return x.error=e,x}}function k(t,n,i){n.constructor===t.constructor&&i===b&&n.constructor.resolve===E?1===n._state?q(t,n._result):2===n._state?R(t,n._result):U(n,void 0,function(e){return T(t,e)},function(e){return R(t,e)}):i===x?(R(t,x.error),x.error=null):void 0===i?q(t,n):e(i)?d(function(e){var t=!1,r=function(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}(i,n,function(i){t||(t=!0,n!==i?T(e,i):q(e,i))},function(n){t||(t=!0,R(e,n))},"Settle: "+(e._label||" unknown promise"));!t&&r&&(t=!0,R(e,r))},t):q(t,n)}function T(e,t){if(e===t)R(e,TypeError("You cannot resolve a promise with itself"));else{var n;(n=typeof t,null!==t&&("object"===n||"function"===n))?k(e,t,S(t)):q(e,t)}}function Q(e){e._onerror&&e._onerror(e._result),V(e)}function q(e,t){e._state===I&&(e._result=t,e._state=1,0!==e._subscribers.length&&d(V,e))}function R(e,t){e._state===I&&(e._state=2,e._result=t,d(Q,e))}function U(e,t,n,i){var r=e._subscribers,o=r.length;e._onerror=null,r[o]=t,r[o+1]=n,r[o+2]=i,0===o&&e._state&&d(V,e)}function V(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,o=e._result,s=0;s<t.length;s+=3)i=t[s],r=t[s+n],i?M(n,i,r,o):r(o);e._subscribers.length=0}}function L(){this.error=null}var P=new L;function M(t,n,i,r){var o=e(i),s=void 0,a=void 0,l=void 0,c=void 0;if(o){if((s=function(e,t){try{return e(t)}catch(e){return P.error=e,P}}(i,r))===P?(c=!0,a=s.error,s.error=null):l=!0,n===s){R(n,TypeError("A promises callback cannot return that same promise."));return}}else s=r,l=!0;n._state!==I||(o&&l?T(n,s):c?R(n,a):1===t?q(n,s):2===t&&R(n,s))}var z=0;function K(e){e[C]=z++,e._state=void 0,e._result=void 0,e._subscribers=[]}function D(e,t){this._instanceConstructor=e,this.promise=new e(w),this.promise[C]||K(this.promise),l(t)?(this.length=t.length,this._remaining=t.length,this._result=Array(this.length),0===this.length?q(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&q(this.promise,this._result))):R(this.promise,Error("Array Methods must be provided an Array"))}/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/function Z(e){this[C]=z++,this._result=this._state=void 0,this._subscribers=[],w!==e&&("function"!=typeof e&&function(){throw TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof Z?function(e,t){try{t(function(t){T(e,t)},function(t){R(e,t)})}catch(t){R(e,t)}}(this,e):function(){throw TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return D.prototype._enumerate=function(e){for(var t=0;this._state===I&&t<e.length;t++)this._eachEntry(e[t],t)},D.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===E){var r=S(e);if(r===b&&e._state!==I)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===Z){var o=new n(w);k(o,e,r),this._willSettleAt(o,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},D.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===I&&(this._remaining--,2===e?R(i,n):this._result[t]=n),0===this._remaining&&q(i,this._result)},D.prototype._willSettleAt=function(e,t){var n=this;U(e,void 0,function(e){return n._settledAt(1,t,e)},function(e){return n._settledAt(2,t,e)})},Z.all=/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/function(e){return new D(this,e).promise},Z.race=/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/function(e){/*jshint validthis:true */var t=this;return new t(l(e)?function(n,i){for(var r=e.length,o=0;o<r;o++)t.resolve(e[o]).then(n,i)}:function(e,t){return t(TypeError("You must pass an array to race."))})},Z.resolve=E,Z.reject=/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/function(e){var t=new this(w);return R(t,e),t},Z._setScheduler=function(e){B=e},Z._setAsap=function(e){d=e},Z._asap=d,Z.prototype={constructor:Z,/**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */then:b,/**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */catch:function(e){return this.then(null,e)}},// Strange compat..
Z.polyfill=/*global self*/function(){var e=void 0;if(void 0!==i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){// silently ignored
}if("[object Promise]"===n&&!t.cast)return}e.Promise=Z},Z.Promise=Z,Z}();//# sourceMappingURL=es6-promise.map
/* WEBPACK VAR INJECTION */}).call(t,n(7),n(8));/***/},/* 5 *//***/function(e,t){// removed by extract-text-webpack-plugin
/***/},/* 6 *//***/function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();/* global VERSION */n(5);var o=(i=n(4))&&i.__esModule?i:{default:i},s=u(n(0)),a=u(n(1)),l=n(2),c=n(3);function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var B=function(){/**
   * @param {object} options
   * @return {Noty}
   */function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),this.options=s.deepExtend({},a.Defaults,t),a.Store[this.options.id])?a.Store[this.options.id]:(this.id=this.options.id||s.generateID("bar"),this.closeTimer=-1,this.barDom=null,this.layoutDom=null,this.progressDom=null,this.showing=!1,this.shown=!1,this.closed=!1,this.closing=!1,this.killable=this.options.timeout||this.options.closeWith.length>0,this.hasSound=this.options.sounds.sources.length>0,this.soundPlayed=!1,this.listeners={beforeShow:[],onShow:[],afterShow:[],onClose:[],afterClose:[],onClick:[],onHover:[],onTemplate:[]},this.promises={show:null,close:null},this.on("beforeShow",this.options.callbacks.beforeShow),this.on("onShow",this.options.callbacks.onShow),this.on("afterShow",this.options.callbacks.afterShow),this.on("onClose",this.options.callbacks.onClose),this.on("afterClose",this.options.callbacks.afterClose),this.on("onClick",this.options.callbacks.onClick),this.on("onHover",this.options.callbacks.onHover),this.on("onTemplate",this.options.callbacks.onTemplate),this)}return(/**
   * @param {string} eventName
   * @param {function} cb
   * @return {Noty}
   */r(e,[{key:"on",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return"function"==typeof t&&this.listeners.hasOwnProperty(e)&&this.listeners[e].push(t),this}},{key:"show",value:function(){var t=this;if(this.showing||this.shown)return this;// preventing multiple show
!0===this.options.killer?e.closeAll():"string"==typeof this.options.killer&&e.closeAll(this.options.killer);var n=a.getQueueCounts(this.options.queue);if(n.current>=n.maxVisible||a.PageHidden&&this.options.visibilityControl)return a.addToQueue(this),a.PageHidden&&this.hasSound&&s.inArray("docHidden",this.options.sounds.conditions)&&s.createAudioElements(this),a.PageHidden&&s.inArray("docHidden",this.options.titleCount.conditions)&&a.docTitle.increment(),this;if(a.Store[this.id]=this,a.fire(this,"beforeShow"),this.showing=!0,this.closing)return this.showing=!1,this;if(a.build(this),a.handleModal(this),this.options.force?this.layoutDom.insertBefore(this.barDom,this.layoutDom.firstChild):this.layoutDom.appendChild(this.barDom),this.hasSound&&!this.soundPlayed&&s.inArray("docVisible",this.options.sounds.conditions)&&s.createAudioElements(this),s.inArray("docVisible",this.options.titleCount.conditions)&&a.docTitle.increment(),this.shown=!0,this.closed=!1,a.hasButtons(this)&&Object.keys(this.options.buttons).forEach(function(e){var n=t.barDom.querySelector("#"+t.options.buttons[e].id);s.addListener(n,"click",function(n){s.stopPropagation(n),t.options.buttons[e].cb(t)})}),this.progressDom=this.barDom.querySelector(".noty_progressbar"),s.inArray("click",this.options.closeWith)&&(s.addClass(this.barDom,"noty_close_with_click"),s.addListener(this.barDom,"click",function(e){s.stopPropagation(e),a.fire(t,"onClick"),t.close()},!1)),s.addListener(this.barDom,"mouseenter",function(){a.fire(t,"onHover")},!1),this.options.timeout&&s.addClass(this.barDom,"noty_has_timeout"),this.options.progressBar&&s.addClass(this.barDom,"noty_has_progressbar"),s.inArray("button",this.options.closeWith)){s.addClass(this.barDom,"noty_close_with_button");var i=document.createElement("div");s.addClass(i,"noty_close_button"),i.innerHTML="\xd7",this.barDom.appendChild(i),s.addListener(i,"click",function(e){s.stopPropagation(e),t.close()},!1)}return a.fire(this,"onShow"),null===this.options.animation.open?this.promises.show=new o.default(function(e){e()}):"function"==typeof this.options.animation.open?this.promises.show=new o.default(this.options.animation.open.bind(this)):(s.addClass(this.barDom,this.options.animation.open),this.promises.show=new o.default(function(e){s.addListener(t.barDom,s.animationEndEvents,function(){s.removeClass(t.barDom,t.options.animation.open),e()})})),this.promises.show.then(function(){setTimeout(function(){a.openFlow(t)},100)}),this}},{key:"stop",value:function(){return a.dequeueClose(this),this}},{key:"resume",value:function(){return a.queueClose(this),this}},{key:"setTimeout",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){if(this.stop(),this.options.timeout=e,this.barDom){this.options.timeout?s.addClass(this.barDom,"noty_has_timeout"):s.removeClass(this.barDom,"noty_has_timeout");var t=this;setTimeout(function(){// ugly fix for progressbar display bug
t.resume()},100)}return this})},{key:"setText",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.barDom&&(this.barDom.querySelector(".noty_body").innerHTML=e),t&&(this.options.text=e),this}},{key:"setType",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.barDom&&(s.classList(this.barDom).split(" ").forEach(function(e){"noty_type__"===e.substring(0,11)&&s.removeClass(t.barDom,e)}),s.addClass(this.barDom,"noty_type__"+e)),n&&(this.options.type=e),this}},{key:"setTheme",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.barDom&&(s.classList(this.barDom).split(" ").forEach(function(e){"noty_theme__"===e.substring(0,12)&&s.removeClass(t.barDom,e)}),s.addClass(this.barDom,"noty_theme__"+e)),n&&(this.options.theme=e),this}},{key:"close",value:function(){var e=this;return this.closed||(this.shown?(a.fire(this,"onClose"),this.closing=!0,null===this.options.animation.close||!1===this.options.animation.close?this.promises.close=new o.default(function(e){e()}):"function"==typeof this.options.animation.close?this.promises.close=new o.default(this.options.animation.close.bind(this)):(s.addClass(this.barDom,this.options.animation.close),this.promises.close=new o.default(function(t){s.addListener(e.barDom,s.animationEndEvents,function(){e.options.force?s.remove(e.barDom):a.ghostFix(e),t()})})),this.promises.close.then(function(){a.closeFlow(e),a.handleModalClose(e)}),this.closed=!0):// it's in the queue
a.removeFromQueue(this)),this}}],[{key:"closeAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object.keys(a.Store).forEach(function(t){e?a.Store[t].options.queue===e&&a.Store[t].killable&&a.Store[t].close():a.Store[t].killable&&a.Store[t].close()}),this}},{key:"clearQueue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";return a.Queues.hasOwnProperty(e)&&(a.Queues[e].queue=[]),this}},{key:"overrideDefaults",/**
     * @param {Object} obj
     * @return {Noty}
     */value:function(e){return a.Defaults=s.deepExtend({},a.Defaults,e),this}},{key:"setMaxVisible",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.DefaultMaxVisible,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return a.Queues.hasOwnProperty(t)||(a.Queues[t]={maxVisible:e,queue:[]}),a.Queues[t].maxVisible=e,this}},{key:"button",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new l.NotyButton(e,t,n,i)}},{key:"version",value:function(){return"3.2.0-beta"}},{key:"Push",value:function(e){return new c.Push(e)}},{key:"Queues",get:function(){return a.Queues}},{key:"PageHidden",get:function(){return a.PageHidden}}]),e)}();// Document visibility change controller
t.default=B,"undefined"!=typeof window&&s.visibilityChangeFlow(),e.exports=t.default;/***/},/* 7 *//***/function(e,t){// shim for using process in browser
var n,i,r,o=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return n(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return n.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c=[],u=!1,B=-1;function d(){u&&r&&(u=!1,r.length?c=r.concat(c):B=-1,c.length&&F())}function F(){if(!u){var e=l(d);u=!0;for(var t=c.length;t;){for(r=c,c=[];++B<t;)r&&r[B].run();B=-1,t=c.length}r=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
i(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return i.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return i.call(this,e)}}}(e)}}// v8 likes predictible objects
function h(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||l(F)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0};/***/},/* 8 *//***/function(e,t){var n;// This works in non-strict mode
n=function(){return this}();try{// This works if eval is allowed (see CSP)
n=n||Function("return this")()||(0,eval)("this")}catch(e){// This works if the window reference is available
"object"==typeof window&&(n=window)}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=n;/***/},/* 9 *//***/function(e,t){/* (ignored) *//***/}]);// @ts-ignore
var ey={};async function eb(){if("/concert/new"===location.pathname)return function(){let t=new Date().toISOString().replace(/:\d{2}\.\d{3}Z$/,"");return console.log("defaultPoster: now",t),{id:-1,title:"",when:t,poster:/*@__PURE__*/e(ey),thumb:""}}();let t=/\/concert\/(\d+)/.exec(location.pathname);if(!t)throw Error("Invalid URL for concert viewer page");let n=+t[1],i=await O();return i.find(e=>e.id==n)}function eE(t=()=>{}){return eb().then(n=>{if(!n){new/*@__PURE__*/(e(ev))({text:"Requested concert not found",type:"error",timeout:3e3,layout:"center"}).show(),m("/concerts");return}console.debug("concertViewerPage: Concert:",n),/*@__PURE__*/e(a)(".concertDetails").replaceWith(eI(n)),t()}),/*@__PURE__*/e(a)("<main>",{id:"concertDetailsPage"}).append(/*@__PURE__*/e(a)("<div>",{class:"concertDetails",text:"Loading..."}))}ey=s("4dA5s").getBundleURL("gb8Cc")+"placeholderConcert.b9be78f3.png";const eC=t=>/*@__PURE__*/e(a)("<div>",{class:"adminControls"}).append(T({text:"Edit",class:"adminButton",href:`/concert/${t.id}/edit`}),/*@__PURE__*/e(a)("<a>",{text:"Delete",class:"adminButton outlined"}).on("click",()=>eT(t.id))),ew=p()?3:37,eI=t=>/*@__PURE__*/e(a)("<div>",{class:"concertDetails"}).append(T({href:"/concerts",class:"backButton"}).append(S({icon:"arrow_back"}),/*@__PURE__*/e(a)("<span>",{text:"Back to All Concerts"})),E()?eC({id:t.id}):/*@__PURE__*/e(a)(),/*@__PURE__*/e(a)("<div>",{class:"posterWrap"}).append(/*@__PURE__*/e(a)("<img>",{class:"poster",src:t.poster})),/*@__PURE__*/e(a)("<div>").append(/*@__PURE__*/e(a)("<h2>",{text:t.title,class:"title"}),/*@__PURE__*/e(a)("<span>",{text:A(t.when),class:"when"})),ex({items:t.programme}),t.id==ew?ek():/*@__PURE__*/e(a)(),t.facebook?x(t.facebook):/*@__PURE__*/e(a)(),eS({id:t.id})),ex=t=>{var n;return /*@__PURE__*/e(a)("<div>",{class:"programme"}).toggleClass("empty",!t.items).append(/*@__PURE__*/e(a)("<h3>",{text:"Programme"}),/*@__PURE__*/e(a)("<ol>",{class:"programmeItems"}).append((null!==(n=t.items)&&void 0!==n?n:[]).map(t=>/*@__PURE__*/e(a)("<li>").append(/*@__PURE__*/e(a)("<strong>",{text:t.composer}).append(/*@__PURE__*/e(a)("<span>",{html:":&nbsp;"})),/*@__PURE__*/e(a)("<span>",{text:t.title}),t.performanceNotes?[/*@__PURE__*/e(a)("<br>"),/*@__PURE__*/e(a)("<em>",{text:t.performanceNotes})]:/*@__PURE__*/e(a)()))))},eS=t=>(O().then(n=>{n.sort((e,t)=>e.when.localeCompare(t.when));let i=new Date(n.find(e=>e.id===t.id).when),r=n.find(e=>new Date(e.when)>i),o=n.reverse().find(e=>new Date(e.when)<i);/*@__PURE__*/e(a)(".prevNextConcerts").append(o?T({href:`/concert/${o.id}`}).append(S({icon:"arrow_back"}),/*@__PURE__*/e(a)("<span>",{text:"Previous Concert"})):[],r?T({href:`/concert/${r.id}`}).addClass("nextConcert").append(/*@__PURE__*/e(a)("<span>",{text:"Next Concert"}),S({icon:"arrow_forward"})):[])}),/*@__PURE__*/e(a)("<div>",{class:"prevNextConcerts"})),ek=()=>/*@__PURE__*/e(a)("<div>",{class:"mediaSection"}).append(/*@__PURE__*/e(a)("<h3>",{text:"Videos"}),/*@__PURE__*/e(a)("<div>",{class:"playerRoot"}).append(/*@__PURE__*/e(a)("<div>",{class:"player"}).append(/*@__PURE__*/e(a)("<video>",{src:"https://roathchamber.s3.eu-west-2.amazonaws.com/concert/37/David.mp4",controls:!0}))));async function eT(t){if(confirm("Are you sure you want to delete this concert?")){let n=new/*@__PURE__*/(e(ev))({text:"Processing request...",type:"info",layout:"center"});n.show();let i=await H(t);n.close(),i&&(console.debug("adminControls: reloading concerts cache"),await O(!1)),new/*@__PURE__*/(e(ev))({text:i?"Concert deleted successfully":"Failed to delete concert",type:i?"success":"error",timeout:3e3,layout:"center"}).show(),m("/concerts")}}const eQ={success:!0,url:"https://wales-armenia.87.org.uk/share/homePage/splash01A.jpg"};async function eq(t){let n;console.debug(`uploadFile(${t.name})`);let i=new/*@__PURE__*/(e(ev))({text:"Uploading, please wait...",type:"info",layout:"center"});if(i.show(),p())await new Promise(e=>setTimeout(e,1e3)),n=eQ;else{let e=new FormData;e.append("file",t),n=await fetch("/php/upload.php",{method:"POST",body:e}).then(e=>e.json())}if(i.close(),!n.success){new/*@__PURE__*/(e(ev))({text:"Failed to upload file: "+n.error,type:"error",layout:"center",timeout:3e3}).show();return}return new/*@__PURE__*/(e(ev))({text:"File uploaded successfully",type:"success",layout:"center",timeout:3e3}).show(),n.url}function eR(){console.debug("concertEditorPage()"),setTimeout(()=>void(console.debug("requireAdminMode()"),E()||C()));// Start with the viewer page and modify it to the things we want.
let t=eE(async()=>{var n;let i=await eb();if(!i)throw Error("Concert not found");console.debug(`concertEditorPage: ConcertID: ${i.id}`),t.append(/*@__PURE__*/e(a)("<input>",{type:"hidden",class:"idInput",value:i.id})),t.addClass("concertEditorPage"),t.find(".backButton").remove(),t.find(".adminControls").replaceWith(eV({id:i.id})),t.find(".posterWrap").append(eL()),t.find(".title").replaceWith(eU({val:i.title})),t.find(".when").replaceWith(eP(i.when)),t.find(".fbLink").remove(),t.find(".programme").removeClass("empty"),t.find(".programmeItems").replaceWith(eM({items:null!==(n=i.programme)&&void 0!==n?n:[]})),t.find(".programme").after(eK({val:i.facebook})),t.find(".concertDetails").append(eV({id:i.id}))});return t}const eU=t=>{function n(e){e.siblings(".placeholder").toggleClass("hidden",""!=e.text())}let i=/*@__PURE__*/e(a)("<div>",{class:"title"}).append(/*@__PURE__*/e(a)("<span>",{text:"Concert Title",class:"placeholder"}),/*@__PURE__*/e(a)("<h2>",{contenteditable:!0,text:t.val,class:"titleH"})//
.on("input",t=>{let i=/*@__PURE__*/e(a)(t.target),r=i.html().replace(/&nbsp;/g,"\xa0"),o=i.text();r!=o&&(console.debug(`titleInput: mismatching html detected: '${r}' != '${o}'`),i.html(i.text())),n(i)}).on("blur",t=>{// Get rid of the non-breaking spaces - sometimes they may be
// inserted by mobile browsers if you press space twice.
console.debug("titleInput: onblur()");let n=/*@__PURE__*/e(a)(t.target);n.html(n.text().replace(/\u00a0/g," "))}));return(// initialize state.
n(i.find(".titleH")),i)},eV=t=>/*@__PURE__*/e(a)("<div>",{class:"adminControls"}).append(T({text:"Save",class:"adminButton",href:""}).on("click",t=>{(function(){console.log("fileControls: Save clicked");let t=/** @returns current gui values to send to server for saving */function(){let t=+/*@__PURE__*/e(a)(".idInput").val(),n=/*@__PURE__*/e(a)(".titleH").text(),i=/*@__PURE__*/e(a)(".when").val(),r=/*@__PURE__*/e(a)("#fbInput").val(),o=/*@__PURE__*/e(a)(".poster")[0].src,s=g(o,160,120),l=eZ(),c={id:t,title:n,when:i,poster:o,thumb:s,programme:l};return r&&(c.facebook=r),c}(),n=new/*@__PURE__*/(e(ev))({text:"Saving...",type:"info",layout:"center"});n.show(),(function(e){console.debug(`saveConcert(${JSON.stringify(e)})`);let t=X(y(v({},e),{// Set the operation explicitly.
    op:-1==e.id?"insert":"update"}));return new Promise(p()?(e,t)=>{console.log("saveConcert: (dev mode) auto resolve"),setTimeout(()=>e(1),1e3)}:(n,i)=>{fetch(j,{method:"POST",body:t}).then(e=>e.json()).then(t=>{console.log("saveConcert: resolved",t),// Get the inserted ID if it was an insert, otherwise just
    // return the same ID to simplify app logic.
    n(-1==e.id?t.id:e.id)})// Reject so we can show an error message to the user.
    .catch(i)})})(t).then(async t=>{console.debug(`fileControls: Save complete : ${t}`),n.close(),console.debug("fileControls: reloading concerts cache"),await O(!1),new/*@__PURE__*/(e(ev))({text:"Saved successfully",type:"success",layout:"center",timeout:3e3}).show(),m(`/concert/${t}`)}).catch(t=>{console.error("Failed to save",t),new/*@__PURE__*/(e(ev))({text:"Failed to save, please try again later",type:"error",layout:"center",timeout:3e3}).show()}).finally(()=>{console.log("fileControls: Save finally complete"),n.close()})})(),t.stopPropagation()}),T({text:"Cancel",class:"adminButton outlined",href:-1==t.id?"/concerts":`/concert/${t.id}`}).on("click",e=>{confirm("Are you sure you want to discard changes?")||e.stopPropagation()})),eL=()=>/*@__PURE__*/e(a)("<div>",{class:"posterControlsWrap"}).append(/*@__PURE__*/e(a)("<label>",{for:"posterInput"}).on("drop",e=>{var t,n,i,r;console.log("posterControls: Poster drop event"),e.preventDefault();let o=null!==(r=null===(i=e.originalEvent)||void 0===i?void 0:null===(n=i.dataTransfer)||void 0===n?void 0:null===(t=n.files)||void 0===t?void 0:t.item(0))&&void 0!==r?r:void 0;eD(o)}).on("dragover",e=>e.preventDefault()).append(/*@__PURE__*/e(a)("<span>",{text:"Click or Drop File"})),/*@__PURE__*/e(a)("<input>",{id:"posterInput",type:"file",accept:"image/png,image/jpeg"}).on("change",e=>{var t;console.log("posterControls: File input changed");let n=null===(t=e.target.files)||void 0===t?void 0:t[0];eD(n)})),eP=t=>/*@__PURE__*/e(a)("<input>",{type:"datetime-local",value:t,class:"when"}),eM=t=>/*@__PURE__*/e(a)("<ol>",{class:"programmeItems"}).append(t.items.map((e,n)=>ez({item:e,index:n,total:t.items.length})),ez({item:{composer:"",title:""},index:t.items.length,total:t.items.length})),ez=t=>/*@__PURE__*/e(a)("<li>").append(/*@__PURE__*/e(a)("<div>",{class:"actions"}).append(k({icon:"remove"}).on("click",eW({index:t.index,op:"remove"})).prop("disabled",t.index==t.total),k({icon:"move_up"}).on("click",eW({index:t.index,op:"up"})).prop("disabled",t.index<1||t.index==t.total),k({icon:"move_down"}).on("click",eW({index:t.index,op:"down"})).prop("disabled",t.index>=t.total-1)),/*@__PURE__*/e(a)("<div>",{class:"inputs"}).append(/*@__PURE__*/e(a)("<input>",{placeholder:"Composer",value:t.item.composer})//
    .on("blur",eW({index:t.index,op:"blur"})),/*@__PURE__*/e(a)("<input>",{placeholder:"Title",value:t.item.title})//
    .on("blur",eW({index:t.index,op:"blur"})),/*@__PURE__*/e(a)("<input>",{placeholder:"Performance Notes (optional)",value:t.item.performanceNotes})//
    .on("blur",eW({index:t.index,op:"blur"})))),eK=t=>/*@__PURE__*/e(a)("<div>",{class:"fbLink"}).append(I(),/*@__PURE__*/e(a)("<input>",{id:"fbInput",type:"text",value:t.val,placeholder:"Event Link (optional)"}));function eD(t){console.debug(`onFileChanged(file=${t})`),t&&eq(t).then(t=>{t&&(console.log("posterControls: File uploaded: ",t),/*@__PURE__*/e(a)(".poster").attr("src",t));// Noty displayed already
})}/**
 * @returns undefined if empty list, array always has at least
 * 1 item. may contain incomplete fields.
 */function eZ(){let t=/*@__PURE__*/e(a)(".programmeItems li").toArray().map(t=>{let n=/*@__PURE__*/e(a)(t).find("input"),i={composer:n[0].value,title:n[1].value};if(n[2].value&&(i.performanceNotes=n[2].value),Object.values(i).some(e=>e))return i}).filter(e=>!!e);return t.length?t:void 0}/**
 * helper function for modifications to programme items rows
 * higher order function to simplify binding to event handlers.
 */function eW(t){return()=>{console.debug(`modifyProgramme(${JSON.stringify(t)})`);let n=eZ();if(n){if("remove"==t.op)n.splice(t.index,1);else if("up"==t.op){let e=n[t.index];n[t.index]=n[t.index-1],n[t.index-1]=e}else if("down"==t.op){let e=n[t.index];n[t.index]=n[t.index+1],n[t.index+1]=e}else if("blur"==t.op){let i=/*@__PURE__*/e(a)(".programmeItems li").length;if(console.debug(`modifyProgramme: index: ${t.index}, # of items: ${n.length}, # of <li>: ${i}`),t.index!=i-1||i!=n.length)return;console.debug("modifyProgramme: adding new empty item to bottom"),// This timeout is for the tabindex to change to the next element 
// after the blur event, if it is going to be set to anything!
setTimeout(()=>{let i;let r=document.activeElement;r instanceof HTMLElement&&(i=-1==(i=/*@__PURE__*/e(a)(r).parent().find("input").index(r))?void 0:i),/*@__PURE__*/e(a)(".programmeItems").replaceWith(eM({items:n})),void 0!=i&&/*@__PURE__*/e(a)(".programmeItems li").eq(t.index).find("input").eq(i).trigger("focus")},0);return}/*@__PURE__*/e(a)(".programmeItems").replaceWith(eM({items:n}))}}}const eN=[{id:1,name:"Symphony No. 5 in C minor, Op. 67",composer:"Beethoven, Ludwig van",concerts:[{id:1,title:"Spring 2044"}]},{id:2,name:"Egmont Overture, Op. 84",composer:"Beethoven, Ludwig van",concerts:[{id:3,title:"Spring 2077"},{id:5,title:"Christmas 1653"}]},{id:3,name:"Flute Concerto No. 2 in D major, K. 314/285d",composer:"Mozart, Wolfgang Amadeus",concerts:[{id:8,title:"The Orchestra's Day Out at the Zoo"}]}],eO=t=>/*@__PURE__*/e(a)("<div>",{class:"catalogueList"}).append(/*@__PURE__*/e(a)("<ul>").append(...t.composers.map(t=>/*@__PURE__*/e(a)("<li>",{text:t.name}).append(/*@__PURE__*/e(a)("<ul>").append(...t.works.map(t=>/*@__PURE__*/e(a)("<li>",{text:t.title}).append(/*@__PURE__*/e(a)("<ul>").append(...t.performances.map(t=>{var n;return /*@__PURE__*/e(a)("<li>").append(T({href:`/concert/${t.concert.id}`,text:`${t.concert.title} - ${(n=t.concert.when,Intl.DateTimeFormat("en-GB",{year:"numeric"}).format(new Date(n)))}`}),t.notes?[/*@__PURE__*/e(a)("<span>",{html:"&nbsp;"}),/*@__PURE__*/e(a)("<em>",{text:t.notes})]:[])})))))))));/*@__PURE__*/e(a)(()=>void(eH(),b(),window.addEventListener("popstate",eH),window.addEventListener("unload",()=>{// If we leave the page, clear the session storage
    // Ie .if we manually refresh the page, reload the db.
    sessionStorage.clear()})));const ej={"/admin":eX(()=>/*@__PURE__*/e(a)("<div>",{class:"adminLoginPage"}).append(/*@__PURE__*/e(a)("<h2>",{text:"Admin Section"}),/*@__PURE__*/e(a)("<form>",{action:"/php/adminLogin.php",method:"post"}).append("1"==new URLSearchParams(location.search).get("e")?/*@__PURE__*/e(a)("<span>",{text:"Sorry, invalid credentials. Please try again",class:"errorMsg"}):/*@__PURE__*/e(a)(),/*@__PURE__*/e(a)("<input>",{type:"text",name:"username",placeholder:"Username",autocomplete:"username"}),/*@__PURE__*/e(a)("<input>",{type:"password",name:"password",placeholder:"Password",autocomplete:"current-password"}),/*@__PURE__*/e(a)("<input>",{type:"hidden",name:"redirectTo",value:em()}),/*@__PURE__*/e(a)("<button>",{type:"submit",text:"Login"})//
    .on("click",()=>{// preempt the admin login passing and just set true in case it worked.
    localStorage.setItem("admin","true")}),p()?/*@__PURE__*/e(a)("<button>",{text:"Bypass Login [DEV]",class:"devMode"}).on("click",e=>{e.preventDefault(),localStorage.setItem("admin","true"),window.location.href=em()}):/*@__PURE__*/e(a)())),{navAndFooter:!1}),"/catalogue":eX(function(){return G().then(t=>{console.debug("cataloguePage(): displaying results:",t),/*@__PURE__*/e(a)("#cataloguePage .catalogueList").replaceWith(eO(t))}),eN.sort((e,t)=>{let n=e.composer.localeCompare(t.composer);return 0==n&&(n=e.name.localeCompare(t.name)),n}),/*@__PURE__*/e(a)("<main>",{id:"cataloguePage"}).append(/*@__PURE__*/e(a)("<div>",{class:"headingWithLink"}).append(/*@__PURE__*/e(a)("<h1>",{text:"Catalogue"}),T({href:"/concerts",text:"View Concerts"})),eO({composers:[]}))}),"/concerts":eX(()=>(O().then(t=>{/*@__PURE__*/e(a)(".concertsGrid").replaceWith(Y(t))}),/*@__PURE__*/e(a)("<div>",{id:"archivePage"}).append(/*@__PURE__*/e(a)("<main>").append(/*@__PURE__*/e(a)("<div>",{class:"headingWithLink"}).append(/*@__PURE__*/e(a)("<h1>",{text:"Concerts"}),T({href:"/catalogue",text:"View Catalogue"})),E()?J():/*@__PURE__*/e(a)(),Y([]))))),"/concert/new":eX(eR),"/concert/:id":eX(eE),"/concert/:id/edit":eX(eR)};function eH(){// find handler
for(let[t,n]of(// reset state if re-using SPA
window.scrollTo(0,0),/*@__PURE__*/e(a)("body>:not(.noty_layout)").remove(),Object.entries(ej))){let e=RegExp("^"+t.replace(/:\w+/,"\\w+")+"$");if(e.test(location.pathname)){console.debug(`renderRoute: Found match: '${t}' for '${location.pathname}'`),n();return}}// default handler
console.log(`Using default home route for ${location.pathname}`),document.body.innerHTML=Q(),$().prependTo(".t1"),w().appendTo(document.body),/*@__PURE__*/e(a)(":contains('Go To Concerts Archive')").filter(".primary").replaceWith(T({href:"/concerts",text:"Go To Concerts Archive"}).addClass("primary")),/*@__PURE__*/e(a)(".gallery").replaceWith(K()),eG().then(t=>{console.debug("showHome: upcomingConcert:",t),/*@__PURE__*/e(a)(".upcoming").replaceWith(t?q({concert:t}):R())}),Z(),function(){let e=window.location.hash;if(""!=e){let t=document.querySelector(e);if(t){let e=t.getBoundingClientRect().top;window.scrollTo(0,e)}}}(),function(){if("localhost"==window.location.hostname){let e=new eg,t={opacity:100};e.add(t,"opacity",0,100,1).onChange(()=>{document.body.style.setProperty("--debug-opacity",t.opacity+"%")})}}()}async function eG(){return(await O()).sort((e,t)=>e.when.localeCompare(t.when)).find(e=>new Date(e.when)>new Date)}function eX(e,t={navAndFooter:!0}){return()=>{t.navAndFooter&&$().appendTo(document.body),e().appendTo(document.body),t.navAndFooter&&w().appendTo(document.body)}}