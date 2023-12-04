!function(){function l(l){return l&&l.__esModule?l.default:l}var a,p,A={};function W(l){return l&&"undefined"!=typeof Symbol&&l.constructor===Symbol?"symbol":typeof l}a="undefined"!=typeof window?window:void 0,p=function(l,a){var p,A=[],t=Object.getPrototypeOf,F=A.slice,B=A.flat?function(l){return A.flat.call(l)}:function(l){return A.concat.apply([],l)},e=A.push,n=A.indexOf,i={},S=i.toString,r=i.hasOwnProperty,o=r.toString,L=o.call(Object),s={},c=function(l){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof l&&"number"!=typeof l.nodeType&&"function"!=typeof l.item},g=function(l){return null!=l&&l===l.window},u=l.document,d={type:!0,src:!0,nonce:!0,noModule:!0};function h(l,a,p){var A,W,t=(p=p||u).createElement("script");if(t.text=l,a)for(A in d)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(W=a[A]||a.getAttribute&&a.getAttribute(A))&&t.setAttribute(A,W);p.head.appendChild(t).parentNode.removeChild(t)}function f(l){return null==l?l+"":"object"==typeof l||"function"==typeof l?i[S.call(l)]||"object":void 0===l?"undefined":W(l)}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var C="3.7.1",I=/HTML$/i,E=function(l,a){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new E.fn.init(l,a)};function v(l){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var a=!!l&&"length"in l&&l.length,p=f(l);return!(c(l)||g(l))&&("array"===p||0===a||"number"==typeof a&&a>0&&a-1 in l)}function m(l,a){return l.nodeName&&l.nodeName.toLowerCase()===a.toLowerCase()}E.fn=E.prototype={// The current version of jQuery being used
jquery:C,constructor:E,// The default length of a jQuery object is 0
length:0,toArray:function(){return F.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(l){return(// Return all the elements in a clean array
null==l?F.call(this):l<0?this[l+this.length]:this[l])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(l){// Build a new jQuery matched element set
var a=E.merge(this.constructor(),l);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
a.prevObject=this,a)},// Execute a callback for every element in the matched set.
each:function(l){return E.each(this,l)},map:function(l){return this.pushStack(E.map(this,function(a,p){return l.call(a,p,a)}))},slice:function(){return this.pushStack(F.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(l,a){return(a+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(l,a){return a%2}))},eq:function(l){var a=this.length,p=+l+(l<0?a:0);return this.pushStack(p>=0&&p<a?[this[p]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:e,sort:A.sort,splice:A.splice},E.extend=E.fn.extend=function(){var l,a,p,A,W,t,F=arguments[0]||{},B=1,e=arguments.length,n=!1;for("boolean"==typeof F&&(n=F,// Skip the boolean and the target
F=arguments[B]||{},B++),"object"==typeof F||c(F)||(F={}),B===e&&(F=this,B--);B<e;B++)// Only deal with non-null/undefined values
if(null!=(l=arguments[B]))for(a in l)A=l[a],"__proto__"!==a&&F!==A&&(n&&A&&(E.isPlainObject(A)||(W=Array.isArray(A)))?(p=F[a],t=W&&!Array.isArray(p)?[]:W||E.isPlainObject(p)?p:{},W=!1,// Never move original objects, clone them
F[a]=E.extend(n,t,A)):void 0!==A&&(F[a]=A));// Return the modified object
return F},E.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(C+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(l){throw Error(l)},noop:function(){},isPlainObject:function(l){var a,p;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!l&&"[object Object]"===S.call(l)&&(!(a=t(l))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(p=r.call(a,"constructor")&&a.constructor)&&o.call(p)===L))},isEmptyObject:function(l){var a;for(a in l)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(l,a,p){h(l,{nonce:a&&a.nonce},p)},each:function(l,a){var p,A=0;if(v(l))for(p=l.length;A<p&&!1!==a.call(l[A],A,l[A]);A++);else for(A in l)if(!1===a.call(l[A],A,l[A]))break;return l},// Retrieve the text value of an array of DOM nodes
text:function(l){var a,p="",A=0,W=l.nodeType;if(!W)for(;a=l[A++];)p+=E.text(a);return 1===W||11===W?l.textContent:9===W?l.documentElement.textContent:3===W||4===W?l.nodeValue:p},// results is for internal usage only
makeArray:function(l,a){var p=a||[];return null!=l&&(v(Object(l))?E.merge(p,"string"==typeof l?[l]:l):e.call(p,l)),p},inArray:function(l,a,p){return null==a?-1:n.call(a,l,p)},isXMLDoc:function(l){var a=l&&l.namespaceURI,p=l&&(l.ownerDocument||l).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!I.test(a||p&&p.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(l,a){for(var p=+a.length,A=0,W=l.length;A<p;A++)l[W++]=a[A];return l.length=W,l},grep:function(l,a,p){// Go through the array, only saving the items
// that pass the validator function
for(var A=[],W=0,t=l.length,F=!p;W<t;W++)!a(l[W],W)!==F&&A.push(l[W]);return A},// arg is for internal usage only
map:function(l,a,p){var A,W,t=0,F=[];// Go through the array, translating each of the items to their new values
if(v(l))for(A=l.length;t<A;t++)null!=(W=a(l[t],t,p))&&F.push(W);else for(t in l)null!=(W=a(l[t],t,p))&&F.push(W);// Flatten any nested arrays
return B(F)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:s}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=A[Symbol.iterator]),// Populate the class2type map
E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(l,a){i["[object "+a+"]"]=a.toLowerCase()});var Q=A.pop,y=A.sort,w=A.splice,b="[\\x20\\t\\r\\n\\f]",k=RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");// Note: an element does not contain itself
E.contains=function(l,a){var p=a&&a.parentNode;return l===p||!!(p&&1===p.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(l.contains?l.contains(p):l.compareDocumentPosition&&16&l.compareDocumentPosition(p)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var K=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function U(l,a){return a?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===l?"�":l.slice(0,-1)+"\\"+l.charCodeAt(l.length-1).toString(16)+" ":"\\"+l}E.escapeSelector=function(l){return(l+"").replace(K,U)},function(){var a,p,W,t,B,i,S,o,L,c,g=e,d=E.expando,h=0,f=0,C=ll(),I=ll(),v=ll(),K=ll(),U=function(l,a){return l===a&&(B=!0),0},q="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
x="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",M="\\["+b+"*("+x+")(?:"+b+// Operator (capture 2)
"*([*^$|!~]?=)"+b+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+x+"))|)"+b+"*\\]",R=":("+x+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",D=RegExp(b+"+","g"),V=RegExp("^"+b+"*,"+b+"*"),T=RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),J=RegExp(b+"|>"),X=new RegExp(R),G=RegExp("^"+x+"$"),Y={ID:RegExp("^#("+x+")"),CLASS:RegExp("^\\.("+x+")"),TAG:RegExp("^("+x+"|[*])"),ATTR:RegExp("^"+M),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:RegExp("^(?:"+q+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},Z=/^(?:input|select|textarea|button)$/i,z=/^h\d$/i,P=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,N=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
O=RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),H=function(l,a){var p="0x"+l.slice(1)-65536;return a||(p<0?String.fromCharCode(p+65536):String.fromCharCode(p>>10|55296,1023&p|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
j=function(){lF()},_=li(function(l){return!0===l.disabled&&m(l,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{g.apply(A=F.call(u.childNodes),u.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
A[u.childNodes.length].nodeType}catch(l){g={apply:function(l,a){e.apply(l,F.call(a))},call:function(l){e.apply(l,F.call(arguments,1))}}}function $(l,a,p,A){var W,t,F,B,e,n,S,r=a&&a.ownerDocument,c=a?a.nodeType:9;// Return early from calls with invalid selector or context
if(p=p||[],"string"!=typeof l||!l||1!==c&&9!==c&&11!==c)return p;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!A&&(lF(a),a=a||i,o)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==c&&(e=P.exec(l))){// ID selector
if(W=e[1]){// Document context
if(9===c){if(!(F=a.getElementById(W)))return p;if(F.id===W)return g.call(p,F),p;// Element context
}else // getElementById can match elements by name instead of ID
if(r&&(F=r.getElementById(W))&&$.contains(a,F)&&F.id===W)return g.call(p,F),p}else if(e[2])return g.apply(p,a.getElementsByTagName(l)),p;else if((W=e[3])&&a.getElementsByClassName)return g.apply(p,a.getElementsByClassName(W)),p}// Take advantage of querySelectorAll
if(!K[l+" "]&&(!L||!L.test(l))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(S=l,r=a,1===c&&(J.test(l)||T.test(l))){for(// Expand context for sibling selectors
(r=N.test(l)&&lt(a.parentNode)||a)==a&&s.scope||((B=a.getAttribute("id"))?B=E.escapeSelector(B):a.setAttribute("id",B=d)),t=// Prefix every selector in the list
(n=le(l)).length;t--;)n[t]=(B?"#"+B:":scope")+" "+ln(n[t]);S=n.join(",")}try{return g.apply(p,r.querySelectorAll(S)),p}catch(a){K(l,!0)}finally{B===d&&a.removeAttribute("id")}}}// All others
return lL(l.replace(k,"$1"),a,p,A)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ll(){var l=[];function a(A,W){return l.push(A+" ")>p.cacheLength&&delete a[l.shift()],a[A+" "]=W}return a}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function la(l){return l[d]=!0,l}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function lp(l){var a=i.createElement("fieldset");try{return!!l(a)}catch(l){return!1}finally{a.parentNode&&a.parentNode.removeChild(a),// release memory in IE
a=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function lA(l){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(a){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in a)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
a.parentNode&&!1===a.disabled?// Option elements defer to a parent optgroup if present
"label"in a?"label"in a.parentNode?a.parentNode.disabled===l:a.disabled===l:a.isDisabled===l||// Where there is no isDisabled, check manually
!l!==a.isDisabled&&_(a)===l:a.disabled===l);return"label"in a&&a.disabled===l}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function lW(l){return la(function(a){return a=+a,la(function(p,A){// Match elements found at the specified indexes
for(var W,t=l([],p.length,a),F=t.length;F--;)p[W=t[F]]&&(p[W]=!(A[W]=p[W]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function lt(l){return l&&void 0!==l.getElementsByTagName&&l}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function lF(l){var a,A=l?l.ownerDocument||l:u;return A!=i&&9===A.nodeType&&A.documentElement&&(S=// Update global variables
(i=A).documentElement,o=!E.isXMLDoc(i),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
c=S.matches||S.webkitMatchesSelector||S.msMatchesSelector,S.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
u!=i&&(a=i.defaultView)&&a.top!==a&&a.addEventListener("unload",j),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
s.getById=lp(function(l){return S.appendChild(l).id=E.expando,!i.getElementsByName||!i.getElementsByName(E.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
s.disconnectedMatch=lp(function(l){return c.call(l,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
s.scope=lp(function(){return i.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
s.cssHas=lp(function(){try{return i.querySelector(":has(*,:jqfake)"),!1}catch(l){return!0}}),s.getById?(p.filter.ID=function(l){var a=l.replace(O,H);return function(l){return l.getAttribute("id")===a}},p.find.ID=function(l,a){if(void 0!==a.getElementById&&o){var p=a.getElementById(l);return p?[p]:[]}}):(p.filter.ID=function(l){var a=l.replace(O,H);return function(l){var p=void 0!==l.getAttributeNode&&l.getAttributeNode("id");return p&&p.value===a}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
p.find.ID=function(l,a){if(void 0!==a.getElementById&&o){var p,A,W,t=a.getElementById(l);if(t){if(// Verify the id attribute
(p=t.getAttributeNode("id"))&&p.value===l)return[t];for(// Fall back on getElementsByName
W=a.getElementsByName(l),A=0;t=W[A++];)if((p=t.getAttributeNode("id"))&&p.value===l)return[t]}return[]}}),// Tag
p.find.TAG=function(l,a){return void 0!==a.getElementsByTagName?a.getElementsByTagName(l):a.querySelectorAll(l)},// Class
p.find.CLASS=function(l,a){if(void 0!==a.getElementsByClassName&&o)return a.getElementsByClassName(l)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
L=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
lp(function(l){var a;S.appendChild(l).innerHTML="<a id='"+d+"' href='' disabled='disabled'></a><select id='"+d+"-\r\\' disabled='disabled'><option selected=''></option></select>",l.querySelectorAll("[selected]").length||L.push("\\["+b+"*(?:value|"+q+")"),l.querySelectorAll("[id~="+d+"-]").length||L.push("~="),l.querySelectorAll("a#"+d+"+*").length||L.push(".#.+[+~]"),l.querySelectorAll(":checked").length||L.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(a=i.createElement("input")).setAttribute("type","hidden"),l.appendChild(a).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
S.appendChild(l).disabled=!0,2!==l.querySelectorAll(":disabled").length&&L.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(a=i.createElement("input")).setAttribute("name",""),l.appendChild(a),l.querySelectorAll("[name='']").length||L.push("\\["+b+"*name"+b+"*="+b+"*(?:''|\"\")")}),s.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
L.push(":has"),L=L.length&&new RegExp(L.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
U=function(l,a){// Flag for duplicate removal
if(l===a)return B=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var p=!l.compareDocumentPosition-!a.compareDocumentPosition;return p||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(p=(l.ownerDocument||l)==(a.ownerDocument||a)?l.compareDocumentPosition(a):1)||!s.sortDetached&&a.compareDocumentPosition(l)===p?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
l===i||l.ownerDocument==u&&$.contains(u,l)?-1:a===i||a.ownerDocument==u&&$.contains(u,a)?1:t?n.call(t,l)-n.call(t,a):0:4&p?-1:1)}),i}// Add button/input type pseudos
for(a in $.matches=function(l,a){return $(l,null,null,a)},$.matchesSelector=function(l,a){if(lF(l),o&&!K[a+" "]&&(!L||!L.test(a)))try{var p=c.call(l,a);// IE 9's matchesSelector returns false on disconnected nodes
if(p||s.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
l.document&&11!==l.document.nodeType)return p}catch(l){K(a,!0)}return $(a,i,null,[l]).length>0},$.contains=function(l,a){return(l.ownerDocument||l)!=i&&lF(l),E.contains(l,a)},$.attr=function(l,a){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(l.ownerDocument||l)!=i&&lF(l);var A=p.attrHandle[a.toLowerCase()],W=A&&r.call(p.attrHandle,a.toLowerCase())?A(l,a,!o):void 0;return void 0!==W?W:l.getAttribute(a)},$.error=function(l){throw Error("Syntax error, unrecognized expression: "+l)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */E.uniqueSort=function(l){var a,p=[],A=0,W=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
B=!s.sortStable,t=!s.sortStable&&F.call(l,0),y.call(l,U),B){for(;a=l[W++];)a===l[W]&&(A=p.push(W));for(;A--;)w.call(l,p[A],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
t=null,l)},E.fn.uniqueSort=function(){return this.pushStack(E.uniqueSort(F.apply(this)))},(p=E.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:la,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(l){return l[1]=l[1].replace(O,H),// Move the given value to match[3] whether quoted or unquoted
l[3]=(l[3]||l[4]||l[5]||"").replace(O,H),"~="===l[2]&&(l[3]=" "+l[3]+" "),l.slice(0,4)},CHILD:function(l){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/l[1]=l[1].toLowerCase(),"nth"===l[1].slice(0,3)?(l[3]||$.error(l[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
l[4]=+(l[4]?l[5]+(l[6]||1):2*("even"===l[3]||"odd"===l[3])),l[5]=+(l[7]+l[8]||"odd"===l[3])):l[3]&&$.error(l[0]),l)},PSEUDO:function(l){var a,p=!l[6]&&l[2];return Y.CHILD.test(l[0])?null:(l[3]?l[2]=l[4]||l[5]||"":p&&X.test(p)&&// Get excess from tokenize (recursively)
(a=le(p,!0))&&// advance to the next closing parenthesis
(a=p.indexOf(")",p.length-a)-p.length)&&(// excess is a negative index
l[0]=l[0].slice(0,a),l[2]=p.slice(0,a)),l.slice(0,3))}},filter:{TAG:function(l){var a=l.replace(O,H).toLowerCase();return"*"===l?function(){return!0}:function(l){return m(l,a)}},CLASS:function(l){var a=C[l+" "];return a||(a=RegExp("(^|"+b+")"+l+"("+b+"|$)"),C(l,function(l){return a.test("string"==typeof l.className&&l.className||void 0!==l.getAttribute&&l.getAttribute("class")||"")}))},ATTR:function(l,a,p){return function(A){var W=$.attr(A,l);return null==W?"!="===a:!a||((W+="","="===a)?W===p:"!="===a?W!==p:"^="===a?p&&0===W.indexOf(p):"*="===a?p&&W.indexOf(p)>-1:"$="===a?p&&W.slice(-p.length)===p:"~="===a?(" "+W.replace(D," ")+" ").indexOf(p)>-1:"|="===a&&(W===p||W.slice(0,p.length+1)===p+"-"))}},CHILD:function(l,a,p,A,W){var t="nth"!==l.slice(0,3),F="last"!==l.slice(-4),B="of-type"===a;return 1===A&&0===W?function(l){return!!l.parentNode}:function(a,p,e){var n,i,S,r,o,L=t!==F?"nextSibling":"previousSibling",s=a.parentNode,c=B&&a.nodeName.toLowerCase(),g=!e&&!B,u=!1;if(s){// :(first|last|only)-(child|of-type)
if(t){for(;L;){for(S=a;S=S[L];)if(B?m(S,c):1===S.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
o=L="only"===l&&!o&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(o=[F?s.firstChild:s.lastChild],F&&g){for(u=(r=(n=// Seek `elem` from a previously-cached index
(i=s[d]||(s[d]={}))[l]||[])[0]===h&&n[1])&&n[2],S=r&&s.childNodes[r];S=++r&&S&&S[L]||// Fallback to seeking `elem` from the start
(u=r=0)||o.pop();)if(1===S.nodeType&&++u&&S===a){i[l]=[h,r,u];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(g&&(u=r=(n=(i=a[d]||(a[d]={}))[l]||[])[0]===h&&n[1]),!1===u)// Use the same loop as above to seek `elem` from the start
for(;(S=++r&&S&&S[L]||(u=r=0)||o.pop())&&(!((B?m(S,c):1===S.nodeType)&&++u)||(g&&((i=S[d]||(S[d]={}))[l]=[h,u]),S!==a)););return(// Incorporate the offset, then check against cycle size
(u-=W)===A||u%A==0&&u/A>=0)}}},PSEUDO:function(l,a){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var A,W=p.pseudos[l]||p.setFilters[l.toLowerCase()]||$.error("unsupported pseudo: "+l);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
W[d]?W(a):W.length>1?(A=[l,l,"",a],p.setFilters.hasOwnProperty(l.toLowerCase())?la(function(l,p){for(var A,t=W(l,a),F=t.length;F--;)A=n.call(l,t[F]),l[A]=!(p[A]=t[F])}):function(l){return W(l,0,A)}):W)}},pseudos:{// Potentially complex pseudos
not:la(function(l){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var a=[],p=[],A=lo(l.replace(k,"$1"));return A[d]?la(function(l,a,p,W){// Match elements unmatched by `matcher`
for(var t,F=A(l,null,W,[]),B=l.length;B--;)(t=F[B])&&(l[B]=!(a[B]=t))}):function(l,W,t){return a[0]=l,A(a,null,t,p),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
a[0]=null,!p.pop()}}),has:la(function(l){return function(a){return $(l,a).length>0}}),contains:la(function(l){return l=l.replace(O,H),function(a){return(a.textContent||E.text(a)).indexOf(l)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:la(function(l){return G.test(l||"")||$.error("unsupported lang: "+l),l=l.replace(O,H).toLowerCase(),function(a){var p;do if(p=o?a.lang:a.getAttribute("xml:lang")||a.getAttribute("lang"))return(p=p.toLowerCase())===l||0===p.indexOf(l+"-");while((a=a.parentNode)&&1===a.nodeType)return!1}}),// Miscellaneous
target:function(a){var p=l.location&&l.location.hash;return p&&p.slice(1)===a.id},root:function(l){return l===S},focus:function(l){return l===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return i.activeElement}catch(l){}}()&&i.hasFocus()&&!!(l.type||l.href||~l.tabIndex)},// Boolean properties
enabled:lA(!1),disabled:lA(!0),checked:function(l){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return m(l,"input")&&!!l.checked||m(l,"option")&&!!l.selected},selected:function(l){return l.parentNode&&l.parentNode.selectedIndex,!0===l.selected},// Contents
empty:function(l){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(l=l.firstChild;l;l=l.nextSibling)if(l.nodeType<6)return!1;return!0},parent:function(l){return!p.pseudos.empty(l)},// Element/input types
header:function(l){return z.test(l.nodeName)},input:function(l){return Z.test(l.nodeName)},button:function(l){return m(l,"input")&&"button"===l.type||m(l,"button")},text:function(l){var a;return m(l,"input")&&"text"===l.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(a=l.getAttribute("type"))||"text"===a.toLowerCase())},// Position-in-collection
first:lW(function(){return[0]}),last:lW(function(l,a){return[a-1]}),eq:lW(function(l,a,p){return[p<0?p+a:p]}),even:lW(function(l,a){for(var p=0;p<a;p+=2)l.push(p);return l}),odd:lW(function(l,a){for(var p=1;p<a;p+=2)l.push(p);return l}),lt:lW(function(l,a,p){var A;for(A=p<0?p+a:p>a?a:p;--A>=0;)l.push(A);return l}),gt:lW(function(l,a,p){for(var A=p<0?p+a:p;++A<a;)l.push(A);return l})}}).pseudos.nth=p.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})p.pseudos[a]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(l){return function(a){return m(a,"input")&&a.type===l}}(a);for(a in{submit:!0,reset:!0})p.pseudos[a]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(l){return function(a){return(m(a,"input")||m(a,"button"))&&a.type===l}}(a);// Easy API for creating new setFilters
function lB(){}function le(l,a){var A,W,t,F,B,e,n,i=I[l+" "];if(i)return a?0:i.slice(0);for(B=l,e=[],n=p.preFilter;B;){// Filters
for(F in(!A||(W=V.exec(B)))&&(W&&(B=B.slice(W[0].length)||B),e.push(t=[])),A=!1,(W=T.exec(B))&&(A=W.shift(),t.push({value:A,// Cast descendant combinators to space
type:W[0].replace(k," ")}),B=B.slice(A.length)),p.filter)(W=Y[F].exec(B))&&(!n[F]||(W=n[F](W)))&&(A=W.shift(),t.push({value:A,type:F,matches:W}),B=B.slice(A.length));if(!A)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
a?B.length:B?$.error(l):I(l,e).slice(0))}function ln(l){for(var a=0,p=l.length,A="";a<p;a++)A+=l[a].value;return A}function li(l,a,p){var A=a.dir,W=a.next,t=W||A,F=p&&"parentNode"===t,B=f++;return a.first?function(a,p,W){for(;a=a[A];)if(1===a.nodeType||F)return l(a,p,W);return!1}:function(a,p,e){var n,i,S=[h,B];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(e){for(;a=a[A];)if((1===a.nodeType||F)&&l(a,p,e))return!0}else for(;a=a[A];)if(1===a.nodeType||F){if(i=a[d]||(a[d]={}),W&&m(a,W))a=a[A]||a;else{if((n=i[t])&&n[0]===h&&n[1]===B)return S[2]=n[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
i[t]=S,S[2]=l(a,p,e))return!0}}return!1}}function lS(l){return l.length>1?function(a,p,A){for(var W=l.length;W--;)if(!l[W](a,p,A))return!1;return!0}:l[0]}function lr(l,a,p,A,W){for(var t,F=[],B=0,e=l.length,n=null!=a;B<e;B++)(t=l[B])&&(!p||p(t,A,W))&&(F.push(t),n&&a.push(B));return F}function lo(l,a/* Internal Use Only */){var A,t,F,B,e=[],S=[],r=v[l+" "];if(!r){for(a||(a=le(l)),B=a.length;B--;)(r=function l(a){for(var A,t,F,B=a.length,e=p.relative[a[0].type],i=e||p.relative[" "],S=e?1:0,r=li(function(l){return l===A},i,!0),o=li(function(l){return n.call(A,l)>-1},i,!0),L=[function(l,a,p){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var t=!e&&(p||a!=W)||((A=a).nodeType?r(l,a,p):o(l,a,p));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
A=null,t)}];S<B;S++)if(t=p.relative[a[S].type])L=[li(lS(L),t)];else{// Return special upon seeing a positional matcher
if((t=p.filter[a[S].type].apply(null,a[S].matches))[d]){for(// Find the next relative operator (if any) for proper handling
F=++S;F<B&&!p.relative[a[F].type];F++);return function l(a,p,A,W,t,F){return W&&!W[d]&&(W=l(W)),t&&!t[d]&&(t=l(t,F)),la(function(l,F,B,e){var i,S,r,o,L=[],s=[],c=F.length,u=l||function(l,a,p){for(var A=0,W=a.length;A<W;A++)$(l,a[A],p);return p}(p||"*",B.nodeType?[B]:B,[]),d=a&&(l||!p)?lr(u,L,a,B,e):u;// Apply postFilter
if(A?// Find primary matches
A(d,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
o=t||(l?a:c||W)?[]:F,B,e):o=d,W)for(i=lr(o,s),W(i,[],B,e),// Un-match failing elements by moving them back to matcherIn
S=i.length;S--;)(r=i[S])&&(o[s[S]]=!(d[s[S]]=r));if(l){if(t||a){if(t){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
i=[],S=o.length;S--;)(r=o[S])&&i.push(d[S]=r);t(null,o=[],i,e)}for(// Move matched elements from seed to results to keep them synchronized
S=o.length;S--;)(r=o[S])&&(i=t?n.call(l,r):L[S])>-1&&(l[i]=!(F[i]=r))}}else o=lr(o===F?o.splice(c,o.length):o),t?t(null,F,o,e):g.apply(F,o)})}(S>1&&lS(L),S>1&&ln(a.slice(0,S-1).concat({value:" "===a[S-2].type?"*":""})).replace(k,"$1"),t,S<F&&l(a.slice(S,F)),F<B&&l(a=a.slice(F)),F<B&&ln(a))}L.push(t)}return lS(L)}(a[B]))[d]?e.push(r):S.push(r);// Save selector and tokenization
// Cache the compiled function
(r=v(l,(A=e.length>0,t=S.length>0,F=function(l,a,F,B,n){var r,L,s,c=0,u="0",d=l&&[],f=[],C=W,I=l||t&&p.find.TAG("*",n),v=h+=null==C?1:Math.random()||.1,m=I.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(n&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(W=a==i||a||n);u!==m&&null!=(r=I[u]);u++){if(t&&r){for(L=0,a||r.ownerDocument==i||(lF(r),F=!o);s=S[L++];)if(s(r,a||i,F)){g.call(B,r);break}n&&(h=v)}// Track unmatched elements for set filters
A&&((r=!s&&r)&&c--,l&&d.push(r))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
c+=u,A&&u!==c){for(L=0;s=e[L++];)s(d,f,a,F);if(l){// Reintegrate element matches to eliminate the need for sorting
if(c>0)for(;u--;)d[u]||f[u]||(f[u]=Q.call(B));// Discard index placeholder values to get only actual matches
f=lr(f)}// Add matches to results
g.apply(B,f),n&&!l&&f.length>0&&c+e.length>1&&E.uniqueSort(B)}return n&&(h=v,W=C),d},A?la(F):F))).selector=l}return r}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function lL(l,a,A,W){var t,F,B,e,n,i="function"==typeof l&&l,S=!W&&le(l=i.selector||l);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(A=A||[],1===S.length){if(// Reduce context if the leading compound selector is an ID
(F=S[0]=S[0].slice(0)).length>2&&"ID"===(B=F[0]).type&&9===a.nodeType&&o&&p.relative[F[1].type]){if(!(a=(p.find.ID(B.matches[0].replace(O,H),a)||[])[0]))return A;i&&(a=a.parentNode),l=l.slice(F.shift().value.length)}for(// Fetch a seed set for right-to-left matching
t=Y.needsContext.test(l)?0:F.length;// Abort if we hit a combinator
t--&&(B=F[t],!p.relative[e=B.type]);)if((n=p.find[e])&&(W=n(B.matches[0].replace(O,H),N.test(F[0].type)&&lt(a.parentNode)||a))){if(// If seed is empty or no tokens remain, we can return early
F.splice(t,1),!(l=W.length&&ln(F)))return g.apply(A,W),A;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(i||lo(l,S))(W,a,!o,A,!a||N.test(l)&&lt(a.parentNode)||a),A)}lB.prototype=p.filters=p.pseudos,p.setFilters=new lB,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
s.sortStable=d.split("").sort(U).join("")===d,// Initialize against the default document
lF(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
s.sortDetached=lp(function(l){// Should return 1, but returns 4 (following)
return 1&l.compareDocumentPosition(i.createElement("fieldset"))}),E.find=$,// Deprecated
E.expr[":"]=E.expr.pseudos,E.unique=E.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
$.compile=lo,$.select=lL,$.setDocument=lF,$.tokenize=le,$.escape=E.escapeSelector,$.getText=E.text,$.isXML=E.isXMLDoc,$.selectors=E.expr,$.support=E.support,$.uniqueSort=E.uniqueSort;/* eslint-enable */}();var q=function(l,a,p){for(var A=[],W=void 0!==p;(l=l[a])&&9!==l.nodeType;)if(1===l.nodeType){if(W&&E(l).is(p))break;A.push(l)}return A},x=function(l,a){for(var p=[];l;l=l.nextSibling)1===l.nodeType&&l!==a&&p.push(l);return p},M=E.expr.match.needsContext,R=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function D(l,a,p){return c(a)?E.grep(l,function(l,A){return!!a.call(l,A,l)!==p}):a.nodeType?E.grep(l,function(l){return l===a!==p}):"string"!=typeof a?E.grep(l,function(l){return n.call(a,l)>-1!==p}):E.filter(a,l,p)}E.filter=function(l,a,p){var A=a[0];return(p&&(l=":not("+l+")"),1===a.length&&1===A.nodeType)?E.find.matchesSelector(A,l)?[A]:[]:E.find.matches(l,E.grep(a,function(l){return 1===l.nodeType}))},E.fn.extend({find:function(l){var a,p,A=this.length,W=this;if("string"!=typeof l)return this.pushStack(E(l).filter(function(){for(a=0;a<A;a++)if(E.contains(W[a],this))return!0}));for(a=0,p=this.pushStack([]);a<A;a++)E.find(l,W[a],p);return A>1?E.uniqueSort(p):p},filter:function(l){return this.pushStack(D(this,l||[],!1))},not:function(l){return this.pushStack(D(this,l||[],!0))},is:function(l){return!!D(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof l&&M.test(l)?E(l):l||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var V,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(E.fn.init=function(l,a,p){var A,W;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!l)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
p=p||V,"string"==typeof l){// Match html or make sure no context is specified for #id
if((A="<"===l[0]&&">"===l[l.length-1]&&l.length>=3?[null,l,null]:T.exec(l))&&(A[1]||!a)){// HANDLE: $(html) -> $(array)
if(!A[1])return(W=u.getElementById(A[2]))&&(// Inject the element directly into the jQuery object
this[0]=W,this.length=1),this;// HANDLE: $(html, props)
if(a=a instanceof E?a[0]:a,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
E.merge(this,E.parseHTML(A[1],a&&a.nodeType?a.ownerDocument||a:u,!0)),R.test(A[1])&&E.isPlainObject(a))for(A in a)c(this[A])?this[A](a[A]):this.attr(A,a[A]);return this}return!a||a.jquery?(a||p).find(l):this.constructor(a).find(l);// HANDLE: $(DOMElement)
}return l.nodeType?(this[0]=l,this.length=1,this):c(l)?void 0!==p.ready?p.ready(l):l(E):E.makeArray(l,this)}).prototype=E.fn,// Initialize central reference
V=E(u);var J=/^(?:parents|prev(?:Until|All))/,X={children:!0,contents:!0,next:!0,prev:!0};function G(l,a){for(;(l=l[a])&&1!==l.nodeType;);return l}E.fn.extend({has:function(l){var a=E(l,this),p=a.length;return this.filter(function(){for(var l=0;l<p;l++)if(E.contains(this,a[l]))return!0})},closest:function(l,a){var p,A=0,W=this.length,t=[],F="string"!=typeof l&&E(l);// Positional selectors never match, since there's no _selection_ context
if(!M.test(l)){for(;A<W;A++)for(p=this[A];p&&p!==a;p=p.parentNode)if(p.nodeType<11&&(F?F.index(p)>-1:1===p.nodeType&&E.find.matchesSelector(p,l))){t.push(p);break}}return this.pushStack(t.length>1?E.uniqueSort(t):t)},// Determine the position of an element within the set
index:function(l){return(// No argument, return index in parent
l?"string"==typeof l?n.call(E(l),this[0]):n.call(this,l.jquery?l[0]:l):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(l,a){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(l,a))))},addBack:function(l){return this.add(null==l?this.prevObject:this.prevObject.filter(l))}}),E.each({parent:function(l){var a=l.parentNode;return a&&11!==a.nodeType?a:null},parents:function(l){return q(l,"parentNode")},parentsUntil:function(l,a,p){return q(l,"parentNode",p)},next:function(l){return G(l,"nextSibling")},prev:function(l){return G(l,"previousSibling")},nextAll:function(l){return q(l,"nextSibling")},prevAll:function(l){return q(l,"previousSibling")},nextUntil:function(l,a,p){return q(l,"nextSibling",p)},prevUntil:function(l,a,p){return q(l,"previousSibling",p)},siblings:function(l){return x((l.parentNode||{}).firstChild,l)},children:function(l){return x(l.firstChild)},contents:function(l){return null!=l.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
t(l.contentDocument)?l.contentDocument:(m(l,"template")&&(l=l.content||l),E.merge([],l.childNodes))}},function(l,a){E.fn[l]=function(p,A){var W=E.map(this,a,p);return"Until"!==l.slice(-5)&&(A=p),A&&"string"==typeof A&&(W=E.filter(A,W)),this.length>1&&(X[l]||E.uniqueSort(W),J.test(l)&&W.reverse()),this.pushStack(W)}});var Y=/[^\x20\t\r\n\f]+/g;function Z(l){return l}function z(l){throw l}function P(l,a,p,A){var W;try{// Check for promise aspect first to privilege synchronous behavior
l&&c(W=l.promise)?W.call(l).done(a).fail(p):l&&c(W=l.then)?W.call(l,a,p):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
a.apply(void 0,[l].slice(A));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(l){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
p.apply(void 0,[l])}}/*
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
 */E.Callbacks=function(l){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
l="string"==typeof l?(a=l,p={},E.each(a.match(Y)||[],function(l,a){p[a]=!0}),p):E.extend({},l);var a,p,A,W,t,F,B=[],e=[],n=-1,i=function(){for(// Enforce single-firing
F=F||l.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
t=A=!0;e.length;n=-1)for(W=e.shift();++n<B.length;)!1===B[n].apply(W[0],W[1])&&l.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
n=B.length,W=!1);l.memory||(W=!1),A=!1,F&&(B=W?[]:"")},S={// Add a callback or a collection of callbacks to the list
add:function(){return B&&(W&&!A&&(n=B.length-1,e.push(W)),function a(p){E.each(p,function(p,A){c(A)?l.unique&&S.has(A)||B.push(A):A&&A.length&&"string"!==f(A)&&a(A)})}(arguments),W&&!A&&i()),this},// Remove a callback from the list
remove:function(){return E.each(arguments,function(l,a){for(var p;(p=E.inArray(a,B,p))>-1;)B.splice(p,1),p<=n&&n--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(l){return l?E.inArray(l,B)>-1:B.length>0},// Remove all callbacks from the list
empty:function(){return B&&(B=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return F=e=[],B=W="",this},disabled:function(){return!B},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return F=e=[],W||A||(B=W=""),this},locked:function(){return!!F},// Call all callbacks with the given context and arguments
fireWith:function(l,a){return F||(a=[l,(a=a||[]).slice?a.slice():a],e.push(a),A||i()),this},// Call all the callbacks with the given arguments
fire:function(){return S.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!t}};return S},E.extend({Deferred:function(a){var p=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],A="pending",W={state:function(){return A},always:function(){return t.done(arguments).fail(arguments),this},catch:function(l){return W.then(null,l)},// Keep pipe for back-compat
pipe:function(){var l=arguments;return E.Deferred(function(a){E.each(p,function(p,A){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var W=c(l[A[4]])&&l[A[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
t[A[1]](function(){var l=W&&W.apply(this,arguments);l&&c(l.promise)?l.promise().progress(a.notify).done(a.resolve).fail(a.reject):a[A[0]+"With"](this,W?[l]:arguments)})}),l=null}).promise()},then:function(a,A,W){var t=0;function F(a,p,A,W){return function(){var B=this,e=arguments,n=function(){var l,n;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(a<t)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((l=A.apply(B,e))===p.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
c(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
n=l&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof l||"function"==typeof l)&&l.then)?W?n.call(l,F(t,p,Z,W),F(t,p,z,W)):(// ...and disregard older resolution values
t++,n.call(l,F(t,p,Z,W),F(t,p,z,W),F(t,p,Z,p.notifyWith))):(A!==Z&&(B=void 0,e=[l]),// Process the value(s)
// Default process is resolve
(W||p.resolveWith)(B,e))}},i=W?n:function(){try{n()}catch(l){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(l,i.error),a+1>=t&&(A!==z&&(B=void 0,e=[l]),p.rejectWith(B,e))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
a?i():(E.Deferred.getErrorHook?i.error=E.Deferred.getErrorHook():E.Deferred.getStackHook&&(i.error=E.Deferred.getStackHook()),l.setTimeout(i))}}return E.Deferred(function(l){// progress_handlers.add( ... )
p[0][3].add(F(0,l,c(W)?W:Z,l.notifyWith)),// fulfilled_handlers.add( ... )
p[1][3].add(F(0,l,c(a)?a:Z)),// rejected_handlers.add( ... )
p[2][3].add(F(0,l,c(A)?A:z))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(l){return null!=l?E.extend(l,W):W}},t={};// All done!
return(// Add list-specific methods
E.each(p,function(l,a){var F=a[2],B=a[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
W[a[1]]=F.add,B&&F.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
A=B},// fulfilled_callbacks.disable
p[3-l][2].disable,// fulfilled_handlers.disable
p[3-l][3].disable,p[0][2].lock,p[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
F.add(a[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
t[a[0]]=function(){return t[a[0]+"With"](this===t?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
t[a[0]+"With"]=F.fireWith}),// Make the deferred a promise
W.promise(t),a&&a.call(t,t),t)},// Deferred helper
when:function(l){var a=arguments.length,p=a,A=Array(p),W=F.call(arguments),t=E.Deferred(),B=function(l){return function(p){A[l]=this,W[l]=arguments.length>1?F.call(arguments):p,--a||t.resolveWith(A,W)}};// Single- and empty arguments are adopted like Promise.resolve
if(a<=1&&(P(l,t.done(B(p)).resolve,t.reject,!a),"pending"===t.state()||c(W[p]&&W[p].then)))return t.then();// Multiple arguments are aggregated like Promise.all array elements
for(;p--;)P(W[p],B(p),t.reject);return t.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var N=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
E.Deferred.exceptionHook=function(a,p){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
l.console&&l.console.warn&&a&&N.test(a.name)&&l.console.warn("jQuery.Deferred exception: "+a.message,a.stack,p)},E.readyException=function(a){l.setTimeout(function(){throw a})};// The deferred used on DOM ready
var O=E.Deferred();// The ready event handler and self cleanup method
function H(){u.removeEventListener("DOMContentLoaded",H),l.removeEventListener("load",H),E.ready()}E.fn.ready=function(l){return O.then(l).catch(function(l){E.readyException(l)}),this},E.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(l){// Abort if there are pending holds or we're already ready
!(!0===l?--E.readyWait:E.isReady)&&(// Remember that the DOM is ready
E.isReady=!0,!0!==l&&--E.readyWait>0||// If there are functions bound, to execute
O.resolveWith(u,[E]))}}),E.ready.then=O.then,"complete"!==u.readyState&&("loading"===u.readyState||u.documentElement.doScroll)?(// Use the handy event callback
u.addEventListener("DOMContentLoaded",H),// A fallback to window.onload, that will always work
l.addEventListener("load",H)):l.setTimeout(E.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var j=function(l,a,p,A,W,t,F){var B=0,e=l.length,n=null==p;// Sets many values
if("object"===f(p))for(B in W=!0,p)j(l,a,B,p[B],!0,t,F);else if(void 0!==A&&(W=!0,c(A)||(F=!0),n&&(F?(a.call(l,A),a=null):(n=a,a=function(l,a,p){return n.call(E(l),p)})),a))for(;B<e;B++)a(l[B],p,F?A:A.call(l[B],B,a(l[B],p)));return W?l:n?a.call(l):e?a(l[0],p):t},_=/^-ms-/,$=/-([a-z])/g;// Used by camelCase as callback to replace()
function ll(l,a){return a.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function la(l){return l.replace(_,"ms-").replace($,ll)}var lp=function(l){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===l.nodeType||9===l.nodeType||!+l.nodeType};function lA(){this.expando=E.expando+lA.uid++}lA.uid=1,lA.prototype={cache:function(l){// Check if the owner object already has a cache
var a=l[this.expando];return!a&&(a={},lp(l)&&(l.nodeType?l[this.expando]=a:Object.defineProperty(l,this.expando,{value:a,configurable:!0}))),a},set:function(l,a,p){var A,W=this.cache(l);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof a)W[la(a)]=p;else for(A in a)W[la(A)]=a[A];return W},get:function(l,a){return void 0===a?this.cache(l):l[this.expando]&&l[this.expando][la(a)]},access:function(l,a,p){return(// In cases where either:
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
void 0===a||a&&"string"==typeof a&&void 0===p?this.get(l,a):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(l,a,p),void 0!==p?p:a))},remove:function(l,a){var p,A=l[this.expando];if(void 0!==A){if(void 0!==a)for(p=(// We always set camelCase keys, so remove that.
a=Array.isArray(a)?a.map(la):((a=la(a))in A)?[a]:a.match(Y)||[]).length;p--;)delete A[a[p]];// Remove the expando if there's no more data
(void 0===a||E.isEmptyObject(A))&&(l.nodeType?l[this.expando]=void 0:delete l[this.expando])}},hasData:function(l){var a=l[this.expando];return void 0!==a&&!E.isEmptyObject(a)}};var lW=new lA,lt=new lA,lF=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,lB=/[A-Z]/g;function le(l,a,p){var A,W;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===p&&1===l.nodeType){if(A="data-"+a.replace(lB,"-$&").toLowerCase(),"string"==typeof(p=l.getAttribute(A))){try{W=p,p="true"===W||"false"!==W&&("null"===W?null:W===+W+""?+W:lF.test(W)?JSON.parse(W):W)}catch(l){}// Make sure we set the data so it isn't changed later
lt.set(l,a,p)}else p=void 0}return p}E.extend({hasData:function(l){return lt.hasData(l)||lW.hasData(l)},data:function(l,a,p){return lt.access(l,a,p)},removeData:function(l,a){lt.remove(l,a)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(l,a,p){return lW.access(l,a,p)},_removeData:function(l,a){lW.remove(l,a)}}),E.fn.extend({data:function(l,a){var p,A,W,t=this[0],F=t&&t.attributes;// Gets all values
if(void 0===l){if(this.length&&(W=lt.get(t),1===t.nodeType&&!lW.get(t,"hasDataAttrs"))){for(p=F.length;p--;)// The attrs elements can be null (trac-14894)
F[p]&&0===(A=F[p].name).indexOf("data-")&&le(t,A=la(A.slice(5)),W[A]);lW.set(t,"hasDataAttrs",!0)}return W}return(// Sets multiple values
"object"==typeof l?this.each(function(){lt.set(this,l)}):j(this,function(a){var p;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(t&&void 0===a)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(p=lt.get(t,l))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(p=le(t,l))?p:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
lt.set(this,l,a)})},null,a,arguments.length>1,null,!0))},removeData:function(l){return this.each(function(){lt.remove(this,l)})}}),E.extend({queue:function(l,a,p){var A;if(l)return a=(a||"fx")+"queue",A=lW.get(l,a),p&&(!A||Array.isArray(p)?A=lW.access(l,a,E.makeArray(p)):A.push(p)),A||[]},dequeue:function(l,a){a=a||"fx";var p=E.queue(l,a),A=p.length,W=p.shift(),t=E._queueHooks(l,a);"inprogress"===W&&(W=p.shift(),A--),W&&("fx"===a&&p.unshift("inprogress"),// Clear up the last queue stop function
delete t.stop,W.call(l,function(){E.dequeue(l,a)},t)),!A&&t&&t.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(l,a){var p=a+"queueHooks";return lW.get(l,p)||lW.access(l,p,{empty:E.Callbacks("once memory").add(function(){lW.remove(l,[a+"queue",p])})})}}),E.fn.extend({queue:function(l,a){var p=2;return("string"!=typeof l&&(a=l,l="fx",p--),arguments.length<p)?E.queue(this[0],l):void 0===a?this:this.each(function(){var p=E.queue(this,l,a);// Ensure a hooks for this queue
E._queueHooks(this,l),"fx"===l&&"inprogress"!==p[0]&&E.dequeue(this,l)})},dequeue:function(l){return this.each(function(){E.dequeue(this,l)})},clearQueue:function(l){return this.queue(l||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(l,a){var p,A=1,W=E.Deferred(),t=this,F=this.length,B=function(){--A||W.resolveWith(t,[t])};for("string"!=typeof l&&(a=l,l=void 0),l=l||"fx";F--;)(p=lW.get(t[F],l+"queueHooks"))&&p.empty&&(A++,p.empty.add(B));return B(),W.promise(a)}});var ln=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,li=RegExp("^(?:([+-])=|)("+ln+")([a-z%]*)$","i"),lS=["Top","Right","Bottom","Left"],lr=u.documentElement,lo=function(l){return E.contains(l.ownerDocument,l)},lL={composed:!0};lr.getRootNode&&(lo=function(l){return E.contains(l.ownerDocument,l)||l.getRootNode(lL)===l.ownerDocument});var ls=function(l,a){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(l=a||l).style.display||""===l.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
lo(l)&&"none"===E.css(l,"display")};function lc(l,a,p,A){var W,t,F=20,B=A?function(){return A.cur()}:function(){return E.css(l,a,"")},e=B(),n=p&&p[3]||(E.cssNumber[a]?"":"px"),i=l.nodeType&&(E.cssNumber[a]||"px"!==n&&+e)&&li.exec(E.css(l,a));if(i&&i[3]!==n){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
e/=2,// Trust units reported by jQuery.css
n=n||i[3],// Iteratively approximate from a nonzero starting point
i=+e||1;F--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
E.style(l,a,i+n),(1-t)*(1-(t=B()/e||.5))<=0&&(F=0),i/=t;i*=2,E.style(l,a,i+n),// Make sure we update the tween properties later on
p=p||[]}return p&&(i=+i||+e||0,// Apply relative offset (+=/-=) if specified
W=p[1]?i+(p[1]+1)*p[2]:+p[2],A&&(A.unit=n,A.start=i,A.end=W)),W}var lg={};function lu(l,a){// Determine new display value for elements that need to change
for(var p,A,W=[],t=0,F=l.length;t<F;t++)(A=l[t]).style&&(p=A.style.display,a?("none"!==p||(W[t]=lW.get(A,"display")||null,W[t]||(A.style.display="")),""===A.style.display&&ls(A)&&(W[t]=function(l){var a,p=l.ownerDocument,A=l.nodeName,W=lg[A];return W||(a=p.body.appendChild(p.createElement(A)),W=E.css(a,"display"),a.parentNode.removeChild(a),"none"===W&&(W="block"),lg[A]=W),W}(A))):"none"!==p&&(W[t]="none",// Remember what we're overwriting
lW.set(A,"display",p)));// Set the display of the elements in a second loop to avoid constant reflow
for(t=0;t<F;t++)null!=W[t]&&(l[t].style.display=W[t]);return l}E.fn.extend({show:function(){return lu(this,!0)},hide:function(){return lu(this)},toggle:function(l){return"boolean"==typeof l?l?this.show():this.hide():this.each(function(){ls(this)?E(this).show():E(this).hide()})}});var ld=/^(?:checkbox|radio)$/i,lh=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,lf=/^$|^module$|\/(?:java|ecma)script/i;l5=u.createDocumentFragment().appendChild(u.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(l7=u.createElement("input")).setAttribute("type","radio"),l7.setAttribute("checked","checked"),l7.setAttribute("name","t"),l5.appendChild(l7),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
s.checkClone=l5.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
l5.innerHTML="<textarea>x</textarea>",s.noCloneChecked=!!l5.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
l5.innerHTML="<option></option>",s.option=!!l5.lastChild;// We have to close these tags to support XHTML (trac-13200)
var lC={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function lI(l,a){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var p;return(p=void 0!==l.getElementsByTagName?l.getElementsByTagName(a||"*"):void 0!==l.querySelectorAll?l.querySelectorAll(a||"*"):[],void 0===a||a&&m(l,a))?E.merge([l],p):p}// Mark scripts as having already been evaluated
function lE(l,a){for(var p=0,A=l.length;p<A;p++)lW.set(l[p],"globalEval",!a||lW.get(a[p],"globalEval"))}lC.tbody=lC.tfoot=lC.colgroup=lC.caption=lC.thead,lC.th=lC.td,s.option||(lC.optgroup=lC.option=[1,"<select multiple='multiple'>","</select>"]);var lv=/<|&#?\w+;/;function lm(l,a,p,A,W){for(var t,F,B,e,n,i=a.createDocumentFragment(),S=[],r=0,o=l.length;r<o;r++)if((t=l[r])||0===t){// Add nodes directly
if("object"===f(t))// push.apply(_, arraylike) throws on ancient WebKit
E.merge(S,t.nodeType?[t]:t);else if(lv.test(t)){for(F=F||i.appendChild(a.createElement("div")),B=lC[(lh.exec(t)||["",""])[1].toLowerCase()]||lC._default,F.innerHTML=B[1]+E.htmlPrefilter(t)+B[2],// Descend through wrappers to the right content
n=B[0];n--;)F=F.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
E.merge(S,F.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(F=i.firstChild).textContent=""}else S.push(a.createTextNode(t))}for(// Remove wrapper from fragment
i.textContent="",r=0;t=S[r++];){// Skip elements already in the context collection (trac-4087)
if(A&&E.inArray(t,A)>-1){W&&W.push(t);continue}// Capture executables
if(e=lo(t),// Append to fragment
F=lI(i.appendChild(t),"script"),e&&lE(F),p)for(n=0;t=F[n++];)lf.test(t.type||"")&&p.push(t)}return i}var lQ=/^([^.]*)(?:\.(.+)|)/;function ly(){return!0}function lw(){return!1}function lb(l,a,p,A,W,t){var F,B;// Types can be a map of types/handlers
if("object"==typeof a){for(B in"string"!=typeof p&&(// ( types-Object, data )
A=A||p,p=void 0),a)lb(l,B,p,A,a[B],t);return l}if(null==A&&null==W?(// ( types, fn )
W=p,A=p=void 0):null==W&&("string"==typeof p?(// ( types, selector, fn )
W=A,A=void 0):(// ( types, data, fn )
W=A,A=p,p=void 0)),!1===W)W=lw;else if(!W)return l;return 1===t&&(F=W,// Use same guid so caller can remove using origFn
(W=function(l){return(// Can use an empty set, since event contains the info
E().off(l),F.apply(this,arguments))}).guid=F.guid||(F.guid=E.guid++)),l.each(function(){E.event.add(this,a,W,A,p)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function lk(l,a,p){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!p){void 0===lW.get(l,a)&&E.event.add(l,a,ly);return}// Register the controller as a special universal handler for all event namespaces
lW.set(l,a,!1),E.event.add(l,a,{namespace:!1,handler:function(l){var p,A=lW.get(this,a);if(1&l.isTrigger&&this[a]){// Interrupt processing of the outer synthetic .trigger()ed event
if(A)(E.event.special[a]||{}).delegateType&&l.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
A=F.call(arguments),lW.set(this,a,A),// Trigger the native event and capture its result
this[a](),p=lW.get(this,a),lW.set(this,a,!1),A!==p)return(// Cancel the outer synthetic event
l.stopImmediatePropagation(),l.preventDefault(),p)}else A&&(// ...and capture the result
lW.set(this,a,E.event.trigger(A[0],A.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
l.stopPropagation(),l.isImmediatePropagationStopped=ly)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */E.event={global:{},add:function(l,a,p,A,W){var t,F,B,e,n,i,S,r,o,L,s,c=lW.get(l);// Only attach events to objects that accept data
if(lp(l))for(p.handler&&(p=(t=p).handler,W=t.selector),W&&E.find.matchesSelector(lr,W),p.guid||(p.guid=E.guid++),(e=c.events)||(e=c.events=Object.create(null)),(F=c.handle)||(F=c.handle=function(a){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return E.event.triggered!==a.type?E.event.dispatch.apply(l,arguments):void 0}),n=// Handle multiple events separated by a space
(a=(a||"").match(Y)||[""]).length;n--;)// There *must* be a type, no attaching namespace-only handlers
o=s=(B=lQ.exec(a[n])||[])[1],L=(B[2]||"").split(".").sort(),o&&(// If event changes its type, use the special event handlers for the changed type
S=E.event.special[o]||{},// If selector defined, determine special event api type, otherwise given type
o=(W?S.delegateType:S.bindType)||o,// Update special based on newly reset type
S=E.event.special[o]||{},// handleObj is passed to all event handlers
i=E.extend({type:o,origType:s,data:A,handler:p,guid:p.guid,selector:W,needsContext:W&&E.expr.match.needsContext.test(W),namespace:L.join(".")},t),(r=e[o])||((r=e[o]=[]).delegateCount=0,(!S.setup||!1===S.setup.call(l,A,L,F))&&l.addEventListener&&l.addEventListener(o,F)),S.add&&(S.add.call(l,i),i.handler.guid||(i.handler.guid=p.guid)),W?r.splice(r.delegateCount++,0,i):r.push(i),// Keep track of which events have ever been used, for event optimization
E.event.global[o]=!0)},// Detach an event or set of events from an element
remove:function(l,a,p,A,W){var t,F,B,e,n,i,S,r,o,L,s,c=lW.hasData(l)&&lW.get(l);if(c&&(e=c.events)){for(n=// Once for each type.namespace in types; type may be omitted
(a=(a||"").match(Y)||[""]).length;n--;){// Unbind all events (on this namespace, if provided) for the element
if(o=s=(B=lQ.exec(a[n])||[])[1],L=(B[2]||"").split(".").sort(),!o){for(o in e)E.event.remove(l,o+a[n],p,A,!0);continue}for(S=E.event.special[o]||{},r=e[o=(A?S.delegateType:S.bindType)||o]||[],B=B[2]&&RegExp("(^|\\.)"+L.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
F=t=r.length;t--;)i=r[t],(W||s===i.origType)&&(!p||p.guid===i.guid)&&(!B||B.test(i.namespace))&&(!A||A===i.selector||"**"===A&&i.selector)&&(r.splice(t,1),i.selector&&r.delegateCount--,S.remove&&S.remove.call(l,i));F&&!r.length&&(S.teardown&&!1!==S.teardown.call(l,L,c.handle)||E.removeEvent(l,o,c.handle),delete e[o])}E.isEmptyObject(e)&&lW.remove(l,"handle events")}},dispatch:function(l){var a,p,A,W,t,F,B=Array(arguments.length),e=E.event.fix(l),n=(lW.get(this,"events")||Object.create(null))[e.type]||[],i=E.event.special[e.type]||{};for(a=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
B[0]=e;a<arguments.length;a++)B[a]=arguments[a];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(e.delegateTarget=this,!i.preDispatch||!1!==i.preDispatch.call(this,e)){for(// Determine handlers
F=E.event.handlers.call(this,e,n),// Run delegates first; they may want to stop propagation beneath us
a=0;(W=F[a++])&&!e.isPropagationStopped();)for(e.currentTarget=W.elem,p=0;(t=W.handlers[p++])&&!e.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!e.rnamespace||!1===t.namespace||e.rnamespace.test(t.namespace))&&(e.handleObj=t,e.data=t.data,void 0!==(A=((E.event.special[t.origType]||{}).handle||t.handler).apply(W.elem,B))&&!1===(e.result=A)&&(e.preventDefault(),e.stopPropagation()));return i.postDispatch&&i.postDispatch.call(this,e),e.result}},handlers:function(l,a){var p,A,W,t,F,B=[],e=a.delegateCount,n=l.target;// Find delegate handlers
if(e&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
n.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===l.type&&l.button>=1)){for(;n!==this;n=n.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===n.nodeType&&!("click"===l.type&&!0===n.disabled)){for(p=0,t=[],F={};p<e;p++)void 0===F[// Don't conflict with Object.prototype properties (trac-13203)
W=(A=a[p]).selector+" "]&&(F[W]=A.needsContext?E(W,this).index(n)>-1:E.find(W,this,null,[n]).length),F[W]&&t.push(A);t.length&&B.push({elem:n,handlers:t})}}return(// Add the remaining (directly-bound) handlers
n=this,e<a.length&&B.push({elem:n,handlers:a.slice(e)}),B)},addProp:function(l,a){Object.defineProperty(E.Event.prototype,l,{enumerable:!0,configurable:!0,get:c(a)?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[l]},set:function(a){Object.defineProperty(this,l,{enumerable:!0,configurable:!0,writable:!0,value:a})}})},fix:function(l){return l[E.expando]?l:new E.Event(l)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(l){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var a=this||l;// Return false to allow normal processing in the caller
return ld.test(a.type)&&a.click&&m(a,"input")&&lk(a,"click",!0),!1},trigger:function(l){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var a=this||l;// Return non-false to allow normal event-path propagation
return ld.test(a.type)&&a.click&&m(a,"input")&&lk(a,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(l){var a=l.target;return ld.test(a.type)&&a.click&&m(a,"input")&&lW.get(a,"click")||m(a,"a")}},beforeunload:{postDispatch:function(l){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==l.result&&l.originalEvent&&(l.originalEvent.returnValue=l.result)}}}},E.removeEvent=function(l,a,p){// This "if" is needed for plain objects
l.removeEventListener&&l.removeEventListener(a,p)},E.Event=function(l,a){// Allow instantiation without the 'new' keyword
if(!(this instanceof E.Event))return new E.Event(l,a);l&&l.type?(this.originalEvent=l,this.type=l.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=l.defaultPrevented||void 0===l.defaultPrevented&&// Support: Android <=2.3 only
!1===l.returnValue?ly:lw,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=l.target&&3===l.target.nodeType?l.target.parentNode:l.target,this.currentTarget=l.currentTarget,this.relatedTarget=l.relatedTarget):this.type=l,a&&E.extend(this,a),// Create a timestamp if incoming event doesn't have one
this.timeStamp=l&&l.timeStamp||Date.now(),// Mark it as fixed
this[E.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
E.Event.prototype={constructor:E.Event,isDefaultPrevented:lw,isPropagationStopped:lw,isImmediatePropagationStopped:lw,isSimulated:!1,preventDefault:function(){var l=this.originalEvent;this.isDefaultPrevented=ly,l&&!this.isSimulated&&l.preventDefault()},stopPropagation:function(){var l=this.originalEvent;this.isPropagationStopped=ly,l&&!this.isSimulated&&l.stopPropagation()},stopImmediatePropagation:function(){var l=this.originalEvent;this.isImmediatePropagationStopped=ly,l&&!this.isSimulated&&l.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(l,a){function p(l){if(u.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var p=lW.get(this,"handle"),A=E.event.fix(l);A.type="focusin"===l.type?"focus":"blur",A.isSimulated=!0,// First, handle focusin/focusout
p(l),A.target===A.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
p(A)}else // while someone wants focusin/focusout.
E.event.simulate(a,l.target,E.event.fix(l))}E.event.special[l]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var A;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
lk(this,l,!0),!u.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(A=lW.get(this,a))||this.addEventListener(a,p),lW.set(this,a,(A||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
lk(this,l),!0)},teardown:function(){var l;if(!u.documentMode)return!1;(l=lW.get(this,a)-1)?lW.set(this,a,l):(this.removeEventListener(a,p),lW.remove(this,a))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(a){return lW.get(a.target,l)},delegateType:a},// Support: Firefox <=44
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
E.event.special[a]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var A=this.ownerDocument||this.document||this,W=u.documentMode?this:A,t=lW.get(W,a);t||(u.documentMode?this.addEventListener(a,p):A.addEventListener(l,p,!0)),lW.set(W,a,(t||0)+1)},teardown:function(){var A=this.ownerDocument||this.document||this,W=u.documentMode?this:A,t=lW.get(W,a)-1;t?lW.set(W,a,t):(u.documentMode?this.removeEventListener(a,p):A.removeEventListener(l,p,!0),lW.remove(W,a))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(l,a){E.event.special[l]={delegateType:a,bindType:a,handle:function(l){var p,A=l.relatedTarget,W=l.handleObj;return A&&(A===this||E.contains(this,A))||(l.type=W.origType,p=W.handler.apply(this,arguments),l.type=a),p}}}),E.fn.extend({on:function(l,a,p,A){return lb(this,l,a,p,A)},one:function(l,a,p,A){return lb(this,l,a,p,A,1)},off:function(l,a,p){var A,W;if(l&&l.preventDefault&&l.handleObj)return(// ( event )  dispatched jQuery.Event
A=l.handleObj,E(l.delegateTarget).off(A.namespace?A.origType+"."+A.namespace:A.origType,A.selector,A.handler),this);if("object"==typeof l){// ( types-object [, selector] )
for(W in l)this.off(W,a,l[W]);return this}return(!1===a||"function"==typeof a)&&(// ( types [, fn] )
p=a,a=void 0),!1===p&&(p=lw),this.each(function(){E.event.remove(this,l,p,a)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
lK=/<script|<style|<link/i,lU=/checked\s*(?:[^=]|=\s*.checked.)/i,lq=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function lx(l,a){return m(l,"table")&&m(11!==a.nodeType?a:a.firstChild,"tr")&&E(l).children("tbody")[0]||l}// Replace/restore the type attribute of script elements for safe DOM manipulation
function lM(l){return l.type=(null!==l.getAttribute("type"))+"/"+l.type,l}function lR(l){return"true/"===(l.type||"").slice(0,5)?l.type=l.type.slice(5):l.removeAttribute("type"),l}function lD(l,a){var p,A,W,t,F,B;if(1===a.nodeType){// 1. Copy private data: events, handlers, etc.
if(lW.hasData(l)&&(B=lW.get(l).events))for(W in lW.remove(a,"handle events"),B)for(p=0,A=B[W].length;p<A;p++)E.event.add(a,W,B[W][p]);// 2. Copy user data
lt.hasData(l)&&(t=lt.access(l),F=E.extend({},t),lt.set(a,F))}}function lV(l,a,p,A){// Flatten any nested arrays
a=B(a);var W,t,F,e,n,i,S=0,r=l.length,o=r-1,L=a[0],g=c(L);// We can't cloneNode fragments that contain checked, in WebKit
if(g||r>1&&"string"==typeof L&&!s.checkClone&&lU.test(L))return l.each(function(W){var t=l.eq(W);g&&(a[0]=L.call(this,W,t.html())),lV(t,a,p,A)});if(r&&(t=(W=lm(a,l[0].ownerDocument,!1,l,A)).firstChild,1===W.childNodes.length&&(W=t),t||A)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(e=(F=E.map(lI(W,"script"),lM)).length;S<r;S++)n=W,S!==o&&(n=E.clone(n,!0,!0),e&&// push.apply(_, arraylike) throws on ancient WebKit
E.merge(F,lI(n,"script"))),p.call(l[S],n,S);if(e)// Evaluate executable scripts on first document insertion
for(i=F[F.length-1].ownerDocument,// Re-enable scripts
E.map(F,lR),S=0;S<e;S++)n=F[S],lf.test(n.type||"")&&!lW.access(n,"globalEval")&&E.contains(i,n)&&(n.src&&"module"!==(n.type||"").toLowerCase()?E._evalUrl&&!n.noModule&&E._evalUrl(n.src,{nonce:n.nonce||n.getAttribute("nonce")},i):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
h(n.textContent.replace(lq,""),n,i))}return l}function lT(l,a,p){for(var A,W=a?E.filter(a,l):l,t=0;null!=(A=W[t]);t++)p||1!==A.nodeType||E.cleanData(lI(A)),A.parentNode&&(p&&lo(A)&&lE(lI(A,"script")),A.parentNode.removeChild(A));return l}E.extend({htmlPrefilter:function(l){return l},clone:function(l,a,p){var A,W,t,F,B=l.cloneNode(!0),e=lo(l);// Fix IE cloning issues
if(!s.noCloneChecked&&(1===l.nodeType||11===l.nodeType)&&!E.isXMLDoc(l))for(A=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
F=lI(B),W=(t=lI(l)).length;A<W;A++)!// Fix IE bugs, see support tests
function(l,a){var p=a.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===p&&ld.test(l.type)?a.checked=l.checked:("input"===p||"textarea"===p)&&(a.defaultValue=l.defaultValue)}(t[A],F[A]);// Copy the events from the original to the clone
if(a){if(p)for(A=0,t=t||lI(l),F=F||lI(B),W=t.length;A<W;A++)lD(t[A],F[A]);else lD(l,B)}// Return the cloned set
return(// Preserve script evaluation history
(F=lI(B,"script")).length>0&&lE(F,!e&&lI(l,"script")),B)},cleanData:function(l){for(var a,p,A,W=E.event.special,t=0;void 0!==(p=l[t]);t++)if(lp(p)){if(a=p[lW.expando]){if(a.events)for(A in a.events)W[A]?E.event.remove(p,A):E.removeEvent(p,A,a.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
p[lW.expando]=void 0}p[lt.expando]&&// Assign undefined instead of using delete, see Data#remove
(p[lt.expando]=void 0)}}}),E.fn.extend({detach:function(l){return lT(this,l,!0)},remove:function(l){return lT(this,l)},text:function(l){return j(this,function(l){return void 0===l?E.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=l)})},null,l,arguments.length)},append:function(){return lV(this,arguments,function(l){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&lx(this,l).appendChild(l)})},prepend:function(){return lV(this,arguments,function(l){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var a=lx(this,l);a.insertBefore(l,a.firstChild)}})},before:function(){return lV(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this)})},after:function(){return lV(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this.nextSibling)})},empty:function(){for(var l,a=0;null!=(l=this[a]);a++)1===l.nodeType&&(// Prevent memory leaks
E.cleanData(lI(l,!1)),// Remove any remaining nodes
l.textContent="");return this},clone:function(l,a){return l=null!=l&&l,a=null==a?l:a,this.map(function(){return E.clone(this,l,a)})},html:function(l){return j(this,function(l){var a=this[0]||{},p=0,A=this.length;if(void 0===l&&1===a.nodeType)return a.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof l&&!lK.test(l)&&!lC[(lh.exec(l)||["",""])[1].toLowerCase()]){l=E.htmlPrefilter(l);try{for(;p<A;p++)a=this[p]||{},1===a.nodeType&&(E.cleanData(lI(a,!1)),a.innerHTML=l);a=0;// If using innerHTML throws an exception, use the fallback method
}catch(l){}}a&&this.empty().append(l)},null,l,arguments.length)},replaceWith:function(){var l=[];// Make the changes, replacing each non-ignored context element with the new content
return lV(this,arguments,function(a){var p=this.parentNode;0>E.inArray(this,l)&&(E.cleanData(lI(this)),p&&p.replaceChild(a,this));// Force callback invocation
},l)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,a){E.fn[l]=function(l){for(var p,A=[],W=E(l),t=W.length-1,F=0;F<=t;F++)p=F===t?this:this.clone(!0),E(W[F])[a](p),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
e.apply(A,p.get());return this.pushStack(A)}});var lJ=RegExp("^("+ln+")(?!px)[a-z%]+$","i"),lX=/^--/,lG=function(a){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var p=a.ownerDocument.defaultView;return p&&p.opener||(p=l),p.getComputedStyle(a)},lY=function(l,a,p){var A,W,t={};// Remember the old values, and insert the new ones
for(W in a)t[W]=l.style[W],l.style[W]=a[W];// Revert the old values
for(W in A=p.call(l),a)l.style[W]=t[W];return A},lZ=RegExp(lS.join("|"),"i");function lz(l,a,p){var A,W,t,F,B=lX.test(a),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
e=l.style;return(p=p||lG(l))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
F=p.getPropertyValue(a)||p[a],B&&F&&// Spec requires trimming whitespace for custom properties (gh-4926).
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
(F=F.replace(k,"$1")||void 0),""!==F||lo(l)||(F=E.style(l,a)),!s.pixelBoxStyles()&&lJ.test(F)&&lZ.test(a)&&(// Remember the original values
A=e.width,W=e.minWidth,t=e.maxWidth,// Put in the new values to get a computed value out
e.minWidth=e.maxWidth=e.width=F,F=p.width,// Revert the changed values
e.width=A,e.minWidth=W,e.maxWidth=t)),void 0!==F?// IE returns zIndex value as an integer.
F+"":F}function lP(l,a){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(l()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=a).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function a(){// This is a singleton, we need to execute it only once
if(i){n.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",i.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",lr.appendChild(n).appendChild(i);var a=l.getComputedStyle(i);A="1%"!==a.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
e=12===p(a.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
i.style.right="60%",F=36===p(a.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
W=36===p(a.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
i.style.position="absolute",t=12===p(i.offsetWidth/3),lr.removeChild(n),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
i=null}}function p(l){return Math.round(parseFloat(l))}var A,W,t,F,B,e,n=u.createElement("div"),i=u.createElement("div");// Finish early in limited (non-browser) environments
i.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",s.clearCloneStyle="content-box"===i.style.backgroundClip,E.extend(s,{boxSizingReliable:function(){return a(),W},pixelBoxStyles:function(){return a(),F},pixelPosition:function(){return a(),A},reliableMarginLeft:function(){return a(),e},scrollboxSize:function(){return a(),t},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var a,p,A,W;return null==B&&(a=u.createElement("table"),p=u.createElement("tr"),A=u.createElement("div"),a.style.cssText="position:absolute;left:-11111px;border-collapse:separate",p.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
p.style.height="1px",A.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
A.style.display="block",lr.appendChild(a).appendChild(p).appendChild(A),B=parseInt((W=l.getComputedStyle(p)).height,10)+parseInt(W.borderTopWidth,10)+parseInt(W.borderBottomWidth,10)===p.offsetHeight,lr.removeChild(a)),B}}))}();var lN=["Webkit","Moz","ms"],lO=u.createElement("div").style,lH={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function lj(l){return E.cssProps[l]||lH[l]||(l in lO?l:lH[l]=// Return a vendor-prefixed property or undefined
function(l){for(// Check for vendor prefixed names
var a=l[0].toUpperCase()+l.slice(1),p=lN.length;p--;)if((l=lN[p]+a)in lO)return l}(l)||l)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
l_=/^(none|table(?!-c[ea]).+)/,l$={position:"absolute",visibility:"hidden",display:"block"},l2={letterSpacing:"0",fontWeight:"400"};function l0(l,a,p){// Any relative (+/-) values have already been
// normalized at this point
var A=li.exec(a);return A?Math.max(0,A[2]-(p||0))+(A[3]||"px"):a}function l3(l,a,p,A,W,t){var F="width"===a?1:0,B=0,e=0,n=0;// Adjustment may not be necessary
if(p===(A?"border":"content"))return 0;for(;F<4;F+=2)"margin"===p&&(n+=E.css(l,p+lS[F],!0,W)),A?("content"===p&&(e-=E.css(l,"padding"+lS[F],!0,W)),"margin"!==p&&(e-=E.css(l,"border"+lS[F]+"Width",!0,W))):(// Add padding
e+=E.css(l,"padding"+lS[F],!0,W),"padding"!==p?e+=E.css(l,"border"+lS[F]+"Width",!0,W):B+=E.css(l,"border"+lS[F]+"Width",!0,W));return!A&&t>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(e+=Math.max(0,Math.ceil(l["offset"+a[0].toUpperCase()+a.slice(1)]-t-e-B-.5))||0),e+n}function l1(l,a,p){// Start with computed style
var A=lG(l),W=(!s.boxSizingReliable()||p)&&"border-box"===E.css(l,"boxSizing",!1,A),t=W,F=lz(l,a,A),B="offset"+a[0].toUpperCase()+a.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(lJ.test(F)){if(!p)return F;F="auto"}// Adjust for the element's box model
return(!s.boxSizingReliable()&&W||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!s.reliableTrDimensions()&&m(l,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===F||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(F)&&"inline"===E.css(l,"display",!1,A))&&// Make sure the element is visible & connected
l.getClientRects().length&&(W="border-box"===E.css(l,"boxSizing",!1,A),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(t=B in l)&&(F=l[B])),// Normalize "" and auto
(F=parseFloat(F)||0)+l3(l,a,p||(W?"border":"content"),t,A,F)+"px"}function l9(l,a,p,A,W){return new l9.prototype.init(l,a,p,A,W)}E.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(l,a){if(a){// We should always get a number back from opacity
var p=lz(l,"opacity");return""===p?"1":p}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(l,a,p,A){// Don't set styles on text and comment nodes
if(l&&3!==l.nodeType&&8!==l.nodeType&&l.style){// Make sure that we're working with the right name
var t,F,B,e=la(a),n=lX.test(a),i=l.style;// Check if we're setting a value
if(n||(a=lj(e)),// Gets hook for the prefixed version, then unprefixed version
B=E.cssHooks[a]||E.cssHooks[e],void 0===p)return(// If a hook was provided get the non-computed value from there
B&&"get"in B&&void 0!==(t=B.get(l,!1,A))?t:i[a]);// Make sure that null and NaN values aren't set (trac-7116)
"string"===(F=void 0===p?"undefined":W(p))&&(t=li.exec(p))&&t[1]&&(p=lc(l,a,t),// Fixes bug trac-9237
F="number"),null!=p&&p==p&&("number"!==F||n||(p+=t&&t[3]||(E.cssNumber[e]?"":"px")),s.clearCloneStyle||""!==p||0!==a.indexOf("background")||(i[a]="inherit"),B&&"set"in B&&void 0===(p=B.set(l,p,A))||(n?i.setProperty(a,p):i[a]=p))}},css:function(l,a,p,A){var W,t,F,B=la(a);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(lX.test(a)||(a=lj(B)),// Try prefixed name followed by the unprefixed name
(F=E.cssHooks[a]||E.cssHooks[B])&&"get"in F&&(W=F.get(l,!0,p)),void 0===W&&(W=lz(l,a,A)),"normal"===W&&a in l2&&(W=l2[a]),""===p||p)?(t=parseFloat(W),!0===p||isFinite(t)?t||0:W):W)}}),E.each(["height","width"],function(l,a){E.cssHooks[a]={get:function(l,p,A){if(p)// but it must have a current display style that would benefit
return!l_.test(E.css(l,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
l.getClientRects().length&&l.getBoundingClientRect().width?l1(l,a,A):lY(l,l$,function(){return l1(l,a,A)})},set:function(l,p,A){var W,t=lG(l),// to avoid forcing a reflow.
F=!s.scrollboxSize()&&"absolute"===t.position,B=(F||A)&&"border-box"===E.css(l,"boxSizing",!1,t),e=A?l3(l,a,A,B,t):0;return B&&F&&(e-=Math.ceil(l["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(t[a])-l3(l,a,"border",!1,t)-.5)),e&&(W=li.exec(p))&&"px"!==(W[3]||"px")&&(l.style[a]=p,p=E.css(l,a)),l0(l,p,e)}}}),E.cssHooks.marginLeft=lP(s.reliableMarginLeft,function(l,a){if(a)return(parseFloat(lz(l,"marginLeft"))||l.getBoundingClientRect().left-lY(l,{marginLeft:0},function(){return l.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
E.each({margin:"",padding:"",border:"Width"},function(l,a){E.cssHooks[l+a]={expand:function(p){for(var A=0,W={},t="string"==typeof p?p.split(" "):[p];A<4;A++)W[l+lS[A]+a]=t[A]||t[A-2]||t[0];return W}},"margin"!==l&&(E.cssHooks[l+a].set=l0)}),E.fn.extend({css:function(l,a){return j(this,function(l,a,p){var A,W,t={},F=0;if(Array.isArray(a)){for(A=lG(l),W=a.length;F<W;F++)t[a[F]]=E.css(l,a[F],!1,A);return t}return void 0!==p?E.style(l,a,p):E.css(l,a)},l,a,arguments.length>1)}}),E.Tween=l9,l9.prototype={constructor:l9,init:function(l,a,p,A,W,t){this.elem=l,this.prop=p,this.easing=W||E.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=A,this.unit=t||(E.cssNumber[p]?"":"px")},cur:function(){var l=l9.propHooks[this.prop];return l&&l.get?l.get(this):l9.propHooks._default.get(this)},run:function(l){var a,p=l9.propHooks[this.prop];return this.options.duration?this.pos=a=E.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=a=l,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),p&&p.set?p.set(this):l9.propHooks._default.set(this),this}},l9.prototype.init.prototype=l9.prototype,l9.propHooks={_default:{get:function(l){var a;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==l.elem.nodeType||null!=l.elem[l.prop]&&null==l.elem.style[l.prop]?l.elem[l.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(a=E.css(l.elem,l.prop,""))&&"auto"!==a?a:0)},set:function(l){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
E.fx.step[l.prop]?E.fx.step[l.prop](l):1===l.elem.nodeType&&(E.cssHooks[l.prop]||null!=l.elem.style[lj(l.prop)])?E.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
l9.propHooks.scrollTop=l9.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},E.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},E.fx=l9.prototype.init,// Back compat <1.8 extension point
E.fx.step={};var l5,l7,l4,l6,l8=/^(?:toggle|show|hide)$/,al=/queueHooks$/;// Animations created synchronously will run synchronously
function aa(){return l.setTimeout(function(){l4=void 0}),l4=Date.now()}// Generate parameters to create a standard animation
function ap(l,a){var p,A=0,W={height:l};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
a=a?1:0;A<4;A+=2-a)W["margin"+(p=lS[A])]=W["padding"+p]=l;return a&&(W.opacity=W.width=l),W}function aA(l,a,p){for(var A,W=(aW.tweeners[a]||[]).concat(aW.tweeners["*"]),t=0,F=W.length;t<F;t++)if(A=W[t].call(p,a,l))return A}function aW(l,a,p){var A,W,t=0,F=aW.prefilters.length,B=E.Deferred().always(function(){// Don't match elem in the :animated selector
delete e.elem}),e=function(){if(W)return!1;for(var a=l4||aa(),p=Math.max(0,n.startTime+n.duration-a),A=1-(p/n.duration||0),t=0,F=n.tweens.length;t<F;t++)n.tweens[t].run(A);return(// If there's more to do, yield
(B.notifyWith(l,[n,A,p]),A<1&&F)?p:(F||B.notifyWith(l,[n,1,0]),// Resolve the animation and report its conclusion
B.resolveWith(l,[n]),!1))},n=B.promise({elem:l,props:E.extend({},a),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},p),originalProperties:a,originalOptions:p,startTime:l4||aa(),duration:p.duration,tweens:[],createTween:function(a,p){var A=E.Tween(l,n.opts,a,p,n.opts.specialEasing[a]||n.opts.easing);return n.tweens.push(A),A},stop:function(a){var p=0,// otherwise we skip this part
A=a?n.tweens.length:0;if(W)return this;for(W=!0;p<A;p++)n.tweens[p].run(1);return a?(B.notifyWith(l,[n,1,0]),B.resolveWith(l,[n,a])):B.rejectWith(l,[n,a]),this}}),i=n.props;for(function(l,a){var p,A,W,t,F;// camelCase, specialEasing and expand cssHook pass
for(p in l)if(W=a[A=la(p)],Array.isArray(t=l[p])&&(W=t[1],t=l[p]=t[0]),p!==A&&(l[A]=t,delete l[p]),(F=E.cssHooks[A])&&("expand"in F))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(p in t=F.expand(t),delete l[A],t)(p in l)||(l[p]=t[p],a[p]=W);else a[A]=W}(i,n.opts.specialEasing);t<F;t++)if(A=aW.prefilters[t].call(n,l,i,n.opts))return c(A.stop)&&(E._queueHooks(n.elem,n.opts.queue).stop=A.stop.bind(A)),A;return E.map(i,aA,n),c(n.opts.start)&&n.opts.start.call(l,n),// Attach callbacks from options
n.progress(n.opts.progress).done(n.opts.done,n.opts.complete).fail(n.opts.fail).always(n.opts.always),E.fx.timer(E.extend(e,{elem:l,anim:n,queue:n.opts.queue})),n}E.Animation=E.extend(aW,{tweeners:{"*":[function(l,a){var p=this.createTween(l,a);return lc(p.elem,l,li.exec(a),p),p}]},tweener:function(l,a){c(l)?(a=l,l=["*"]):l=l.match(Y);for(var p,A=0,W=l.length;A<W;A++)p=l[A],aW.tweeners[p]=aW.tweeners[p]||[],aW.tweeners[p].unshift(a)},prefilters:[function(l,a,p){var A,W,t,F,B,e,n,i,S="width"in a||"height"in a,r=this,o={},L=l.style,s=l.nodeType&&ls(l),c=lW.get(l,"fxshow");// Detect show/hide animations
for(A in p.queue||(null==(F=E._queueHooks(l,"fx")).unqueued&&(F.unqueued=0,B=F.empty.fire,F.empty.fire=function(){F.unqueued||B()}),F.unqueued++,r.always(function(){// Ensure the complete handler is called before this completes
r.always(function(){F.unqueued--,E.queue(l,"fx").length||F.empty.fire()})})),a)if(W=a[A],l8.test(W)){if(delete a[A],t=t||"toggle"===W,W===(s?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==W||!c||void 0===c[A])continue;s=!0}o[A]=c&&c[A]||E.style(l,A)}if(!(!// Bail out if this is a no-op like .hide().hide()
(e=!E.isEmptyObject(a))&&E.isEmptyObject(o)))for(A in S&&1===l.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
p.overflow=[L.overflow,L.overflowX,L.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(n=c&&c.display)&&(n=lW.get(l,"display")),"none"===(i=E.css(l,"display"))&&(n?i=n:(// Get nonempty value(s) by temporarily forcing visibility
lu([l],!0),n=l.style.display||n,i=E.css(l,"display"),lu([l]))),("inline"===i||"inline-block"===i&&null!=n)&&"none"===E.css(l,"float")&&(e||(r.done(function(){L.display=n}),null!=n||(n="none"===(i=L.display)?"":i)),L.display="inline-block")),p.overflow&&(L.overflow="hidden",r.always(function(){L.overflow=p.overflow[0],L.overflowX=p.overflow[1],L.overflowY=p.overflow[2]})),// Implement show/hide animations
e=!1,o)e||(c?"hidden"in c&&(s=c.hidden):c=lW.access(l,"fxshow",{display:n}),t&&(c.hidden=!s),s&&lu([l],!0),/* eslint-disable no-loop-func */r.done(function(){for(A in s||lu([l]),lW.remove(l,"fxshow"),o)E.style(l,A,o[A])})),// Per-property setup
e=aA(s?c[A]:0,A,r),A in c||(c[A]=e.start,s&&(e.end=e.start,e.start=0))}],prefilter:function(l,a){a?aW.prefilters.unshift(l):aW.prefilters.push(l)}}),E.speed=function(l,a,p){var A=l&&"object"==typeof l?E.extend({},l):{complete:p||!p&&a||c(l)&&l,duration:l,easing:p&&a||a&&!c(a)&&a};return E.fx.off?A.duration=0:"number"!=typeof A.duration&&(A.duration in E.fx.speeds?A.duration=E.fx.speeds[A.duration]:A.duration=E.fx.speeds._default),(null==A.queue||!0===A.queue)&&(A.queue="fx"),// Queueing
A.old=A.complete,A.complete=function(){c(A.old)&&A.old.call(this),A.queue&&E.dequeue(this,A.queue)},A},E.fn.extend({fadeTo:function(l,a,p,A){// Show any hidden elements after setting opacity to 0
return this.filter(ls).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:a},l,p,A)},animate:function(l,a,p,A){var W=E.isEmptyObject(l),t=E.speed(a,p,A),F=function(){// Operate on a copy of prop so per-property easing won't be lost
var a=aW(this,E.extend({},l),t);// Empty animations, or finishing resolves immediately
(W||lW.get(this,"finish"))&&a.stop(!0)};return F.finish=F,W||!1===t.queue?this.each(F):this.queue(t.queue,F)},stop:function(l,a,p){var A=function(l){var a=l.stop;delete l.stop,a(p)};return"string"!=typeof l&&(p=a,a=l,l=void 0),a&&this.queue(l||"fx",[]),this.each(function(){var a=!0,W=null!=l&&l+"queueHooks",t=E.timers,F=lW.get(this);if(W)F[W]&&F[W].stop&&A(F[W]);else for(W in F)F[W]&&F[W].stop&&al.test(W)&&A(F[W]);for(W=t.length;W--;)t[W].elem===this&&(null==l||t[W].queue===l)&&(t[W].anim.stop(p),a=!1,t.splice(W,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(a||!p)&&E.dequeue(this,l)})},finish:function(l){return!1!==l&&(l=l||"fx"),this.each(function(){var a,p=lW.get(this),A=p[l+"queue"],W=p[l+"queueHooks"],t=E.timers,F=A?A.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
p.finish=!0,// Empty the queue first
E.queue(this,l,[]),W&&W.stop&&W.stop.call(this,!0),a=t.length;a--;)t[a].elem===this&&t[a].queue===l&&(t[a].anim.stop(!0),t.splice(a,1));// Look for any animations in the old queue and finish them
for(a=0;a<F;a++)A[a]&&A[a].finish&&A[a].finish.call(this);// Turn off finishing flag
delete p.finish})}}),E.each(["toggle","show","hide"],function(l,a){var p=E.fn[a];E.fn[a]=function(l,A,W){return null==l||"boolean"==typeof l?p.apply(this,arguments):this.animate(ap(a,!0),l,A,W)}}),// Generate shortcuts for custom animations
E.each({slideDown:ap("show"),slideUp:ap("hide"),slideToggle:ap("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(l,a){E.fn[l]=function(l,p,A){return this.animate(a,l,p,A)}}),E.timers=[],E.fx.tick=function(){var l,a=0,p=E.timers;for(l4=Date.now();a<p.length;a++)// Run the timer and safely remove it when done (allowing for external removal)
(l=p[a])()||p[a]!==l||p.splice(a--,1);p.length||E.fx.stop(),l4=void 0},E.fx.timer=function(l){E.timers.push(l),E.fx.start()},E.fx.interval=13,E.fx.start=function(){l6||(l6=!0,function a(){l6&&(!1===u.hidden&&l.requestAnimationFrame?l.requestAnimationFrame(a):l.setTimeout(a,E.fx.interval),E.fx.tick())}())},E.fx.stop=function(){l6=null},E.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
E.fn.delay=function(a,p){return a=E.fx&&E.fx.speeds[a]||a,p=p||"fx",this.queue(p,function(p,A){var W=l.setTimeout(p,a);A.stop=function(){l.clearTimeout(W)}})},at=u.createElement("input"),aF=u.createElement("select").appendChild(u.createElement("option")),at.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
s.checkOn=""!==at.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
s.optSelected=aF.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(at=u.createElement("input")).value="t",at.type="radio",s.radioValue="t"===at.value;var at,aF,aB,ae=E.expr.attrHandle;E.fn.extend({attr:function(l,a){return j(this,E.attr,l,a,arguments.length>1)},removeAttr:function(l){return this.each(function(){E.removeAttr(this,l)})}}),E.extend({attr:function(l,a,p){var A,W,t=l.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==t&&8!==t&&2!==t){// Fallback to prop when attributes are not supported
if(void 0===l.getAttribute)return E.prop(l,a,p);if(1===t&&E.isXMLDoc(l)||(W=E.attrHooks[a.toLowerCase()]||(E.expr.match.bool.test(a)?aB:void 0)),void 0!==p){if(null===p){E.removeAttr(l,a);return}return W&&"set"in W&&void 0!==(A=W.set(l,p,a))?A:(l.setAttribute(a,p+""),p)}return W&&"get"in W&&null!==(A=W.get(l,a))?A:null==(A=E.find.attr(l,a))?void 0:A}},attrHooks:{type:{set:function(l,a){if(!s.radioValue&&"radio"===a&&m(l,"input")){var p=l.value;return l.setAttribute("type",a),p&&(l.value=p),a}}}},removeAttr:function(l,a){var p,A=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
W=a&&a.match(Y);if(W&&1===l.nodeType)for(;p=W[A++];)l.removeAttribute(p)}}),// Hooks for boolean attributes
aB={set:function(l,a,p){return!1===a?E.removeAttr(l,p):l.setAttribute(p,p),p}},E.each(E.expr.match.bool.source.match(/\w+/g),function(l,a){var p=ae[a]||E.find.attr;ae[a]=function(l,a,A){var W,t,F=a.toLowerCase();return A||(// Avoid an infinite loop by temporarily removing this function from the getter
t=ae[F],ae[F]=W,W=null!=p(l,a,A)?F:null,ae[F]=t),W}});var an=/^(?:input|select|textarea|button)$/i,ai=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function aS(l){return(l.match(Y)||[]).join(" ")}function ar(l){return l.getAttribute&&l.getAttribute("class")||""}function ao(l){return Array.isArray(l)?l:"string"==typeof l&&l.match(Y)||[]}E.fn.extend({prop:function(l,a){return j(this,E.prop,l,a,arguments.length>1)},removeProp:function(l){return this.each(function(){delete this[E.propFix[l]||l]})}}),E.extend({prop:function(l,a,p){var A,W,t=l.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==t&&8!==t&&2!==t)return(1===t&&E.isXMLDoc(l)||(// Fix name and attach hooks
a=E.propFix[a]||a,W=E.propHooks[a]),void 0!==p)?W&&"set"in W&&void 0!==(A=W.set(l,p,a))?A:l[a]=p:W&&"get"in W&&null!==(A=W.get(l,a))?A:l[a]},propHooks:{tabIndex:{get:function(l){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var a=E.find.attr(l,"tabindex");return a?parseInt(a,10):an.test(l.nodeName)||ai.test(l.nodeName)&&l.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),s.optSelected||(E.propHooks.selected={get:function(l){/* eslint no-unused-expressions: "off" */var a=l.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(l){/* eslint no-unused-expressions: "off" */var a=l.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(l){var a,p,A,W,t,F;return c(l)?this.each(function(a){E(this).addClass(l.call(this,a,ar(this)))}):(a=ao(l)).length?this.each(function(){if(A=ar(this),p=1===this.nodeType&&" "+aS(A)+" "){for(t=0;t<a.length;t++)W=a[t],0>p.indexOf(" "+W+" ")&&(p+=W+" ");A!==// Only assign if different to avoid unneeded rendering.
(F=aS(p))&&this.setAttribute("class",F)}}):this},removeClass:function(l){var a,p,A,W,t,F;return c(l)?this.each(function(a){E(this).removeClass(l.call(this,a,ar(this)))}):arguments.length?(a=ao(l)).length?this.each(function(){if(A=ar(this),// This expression is here for better compressibility (see addClass)
p=1===this.nodeType&&" "+aS(A)+" "){for(t=0;t<a.length;t++)// Remove *all* instances
for(W=a[t];p.indexOf(" "+W+" ")>-1;)p=p.replace(" "+W+" "," ");A!==// Only assign if different to avoid unneeded rendering.
(F=aS(p))&&this.setAttribute("class",F)}}):this:this.attr("class","")},toggleClass:function(l,a){var p,A,t,F,B=void 0===l?"undefined":W(l),e="string"===B||Array.isArray(l);return c(l)?this.each(function(p){E(this).toggleClass(l.call(this,p,ar(this),a),a)}):"boolean"==typeof a&&e?a?this.addClass(l):this.removeClass(l):(p=ao(l),this.each(function(){if(e)for(t=0,// Toggle individual class names
F=E(this);t<p.length;t++)A=p[t],F.hasClass(A)?F.removeClass(A):F.addClass(A);else(void 0===l||"boolean"===B)&&((A=ar(this))&&lW.set(this,"__className__",A),this.setAttribute&&this.setAttribute("class",A||!1===l?"":lW.get(this,"__className__")||""))}))},hasClass:function(l){var a,p,A=0;for(a=" "+l+" ";p=this[A++];)if(1===p.nodeType&&(" "+aS(ar(p))+" ").indexOf(a)>-1)return!0;return!1}});var aL=/\r/g;E.fn.extend({val:function(l){var a,p,A,W=this[0];return arguments.length?(A=c(l),this.each(function(p){var W;1!==this.nodeType||(null==(W=A?l.call(this,p,E(this).val()):l)?W="":"number"==typeof W?W+="":Array.isArray(W)&&(W=E.map(W,function(l){return null==l?"":l+""})),(a=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in a&&void 0!==a.set(this,W,"value")||(this.value=W))})):W?(a=E.valHooks[W.type]||E.valHooks[W.nodeName.toLowerCase()])&&"get"in a&&void 0!==(p=a.get(W,"value"))?p:"string"==typeof(p=W.value)?p.replace(aL,""):null==p?"":p:void 0}}),E.extend({valHooks:{option:{get:function(l){var a=E.find.attr(l,"value");return null!=a?a:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
aS(E.text(l))}},select:{get:function(l){var a,p,A,W=l.options,t=l.selectedIndex,F="select-one"===l.type,B=F?null:[],e=F?t+1:W.length;// Loop through all the selected options
for(A=t<0?e:F?t:0;A<e;A++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((p=W[A]).selected||A===t)&&// Don't return options that are disabled or in a disabled optgroup
!p.disabled&&(!p.parentNode.disabled||!m(p.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
a=E(p).val(),F)return a;// Multi-Selects return an array
B.push(a)}return B},set:function(l,a){for(var p,A,W=l.options,t=E.makeArray(a),F=W.length;F--;)/* eslint-disable no-cond-assign */((A=W[F]).selected=E.inArray(E.valHooks.option.get(A),t)>-1)&&(p=!0);return p||(l.selectedIndex=-1),t}}}}),// Radios and checkboxes getter/setter
E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(l,a){if(Array.isArray(a))return l.checked=E.inArray(E(l).val(),a)>-1}},s.checkOn||(E.valHooks[this].get=function(l){return null===l.getAttribute("value")?"on":l.value})});// Return jQuery for attributes-only inclusion
var as=l.location,ac={guid:Date.now()},ag=/\?/;// Cross-browser xml parsing
E.parseXML=function(a){var p,A;if(!a||"string"!=typeof a)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{p=new l.DOMParser().parseFromString(a,"text/xml")}catch(l){}return A=p&&p.getElementsByTagName("parsererror")[0],(!p||A)&&E.error("Invalid XML: "+(A?E.map(A.childNodes,function(l){return l.textContent}).join("\n"):a)),p};var au=/^(?:focusinfocus|focusoutblur)$/,ad=function(l){l.stopPropagation()};E.extend(E.event,{trigger:function(a,p,A,W){var t,F,B,e,n,i,S,o,L=[A||u],s=r.call(a,"type")?a.type:a,d=r.call(a,"namespace")?a.namespace.split("."):[];// Don't do events on text and comment nodes
if(F=o=B=A=A||u,!(3===A.nodeType||8===A.nodeType||au.test(s+E.event.triggered))&&(s.indexOf(".")>-1&&(s=// Namespaced trigger; create a regexp to match event type in handle()
(d=s.split(".")).shift(),d.sort()),n=0>s.indexOf(":")&&"on"+s,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(a=a[E.expando]?a:new E.Event(s,"object"==typeof a&&a)).isTrigger=W?2:3,a.namespace=d.join("."),a.rnamespace=a.namespace?RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
a.result=void 0,a.target||(a.target=A),// Clone any incoming data and prepend the event, creating the handler arg list
p=null==p?[a]:E.makeArray(p,[a]),// Allow special events to draw outside the lines
S=E.event.special[s]||{},W||!S.trigger||!1!==S.trigger.apply(A,p))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!W&&!S.noBubble&&!g(A)){for(e=S.delegateType||s,au.test(e+s)||(F=F.parentNode);F;F=F.parentNode)L.push(F),B=F;B===(A.ownerDocument||u)&&L.push(B.defaultView||B.parentWindow||l)}for(// Fire handlers on the event path
t=0;(F=L[t++])&&!a.isPropagationStopped();)o=F,a.type=t>1?e:S.bindType||s,// jQuery handler
(i=(lW.get(F,"events")||Object.create(null))[a.type]&&lW.get(F,"handle"))&&i.apply(F,p),// Native handler
(i=n&&F[n])&&i.apply&&lp(F)&&(a.result=i.apply(F,p),!1===a.result&&a.preventDefault());return a.type=s,!W&&!a.isDefaultPrevented()&&(!S._default||!1===S._default.apply(L.pop(),p))&&lp(A)&&n&&c(A[s])&&!g(A)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(B=A[n])&&(A[n]=null),// Prevent re-triggering of the same event, since we already bubbled it above
E.event.triggered=s,a.isPropagationStopped()&&o.addEventListener(s,ad),A[s](),a.isPropagationStopped()&&o.removeEventListener(s,ad),E.event.triggered=void 0,B&&(A[n]=B)),a.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(l,a,p){var A=E.extend(new E.Event,p,{type:l,isSimulated:!0});E.event.trigger(A,null,a)}}),E.fn.extend({trigger:function(l,a){return this.each(function(){E.event.trigger(l,a,this)})},triggerHandler:function(l,a){var p=this[0];if(p)return E.event.trigger(l,a,p,!0)}});var ah=/\[\]$/,af=/\r?\n/g,aC=/^(?:submit|button|image|reset|file)$/i,aI=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
E.param=function(l,a){var p,A=[],W=function(l,a){// If value is a function, invoke it and use its return value
var p=c(a)?a():a;A[A.length]=encodeURIComponent(l)+"="+encodeURIComponent(null==p?"":p)};if(null==l)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(l)||l.jquery&&!E.isPlainObject(l))E.each(l,function(){W(this.name,this.value)});else // did it), otherwise encode params recursively.
for(p in l)!function l(a,p,A,W){var t;if(Array.isArray(p))E.each(p,function(p,t){A||ah.test(a)?W(a,t):l(a+"["+("object"==typeof t&&null!=t?p:"")+"]",t,A,W)});else if(A||"object"!==f(p))W(a,p);else for(t in p)l(a+"["+t+"]",p[t],A,W)}(p,l[p],a,W);// Return the resulting serialization
return A.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var l=E.prop(this,"elements");return l?E.makeArray(l):this}).filter(function(){var l=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!E(this).is(":disabled")&&aI.test(this.nodeName)&&!aC.test(l)&&(this.checked||!ld.test(l))}).map(function(l,a){var p=E(this).val();return null==p?null:Array.isArray(p)?E.map(p,function(l){return{name:a.name,value:l.replace(af,"\r\n")}}):{name:a.name,value:p.replace(af,"\r\n")}}).get()}});var aE=/%20/g,av=/#.*$/,am=/([?&])_=[^&]*/,aQ=/^(.*?):[ \t]*([^\r\n]*)$/mg,ay=/^(?:GET|HEAD)$/,aw=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ab={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ak={},aK="*/".concat("*"),aU=u.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function aq(l){// dataTypeExpression is optional and defaults to "*"
return function(a,p){"string"!=typeof a&&(p=a,a="*");var A,W=0,t=a.toLowerCase().match(Y)||[];if(c(p))// For each dataType in the dataTypeExpression
for(;A=t[W++];)"+"===A[0]?(l[A=A.slice(1)||"*"]=l[A]||[]).unshift(p):(l[A]=l[A]||[]).push(p)}}// Base inspection function for prefilters and transports
function ax(l,a,p,A){var W={},t=l===ak;function F(B){var e;return W[B]=!0,E.each(l[B]||[],function(l,B){var n=B(a,p,A);return"string"!=typeof n||t||W[n]?t?!(e=n):void 0:(a.dataTypes.unshift(n),F(n),!1)}),e}return F(a.dataTypes[0])||!W["*"]&&F("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function aM(l,a){var p,A,W=E.ajaxSettings.flatOptions||{};for(p in a)void 0!==a[p]&&((W[p]?l:A||(A={}))[p]=a[p]);return A&&E.extend(!0,l,A),l}aU.href=as.href,E.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:as.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(as.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":aK,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
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
ajaxSetup:function(l,a){return a?aM(aM(l,E.ajaxSettings),a):aM(E.ajaxSettings,l)},ajaxPrefilter:aq(ab),ajaxTransport:aq(ak),// Main method
ajax:function(a,p){"object"==typeof a&&(p=a,a=void 0),// Force options to be an object
p=p||{};var A,W,t,F,B,e,n,i,S,r,o=E.ajaxSetup({},p),L=o.context||o,s=o.context&&(L.nodeType||L.jquery)?E(L):E.event,c=E.Deferred(),g=E.Callbacks("once memory"),d=o.statusCode||{},h={},f={},C="canceled",I={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(l){var a;if(n){if(!F)for(F={};a=aQ.exec(t);)F[a[1].toLowerCase()+" "]=(F[a[1].toLowerCase()+" "]||[]).concat(a[2]);a=F[l.toLowerCase()+" "]}return null==a?null:a.join(", ")},// Raw string
getAllResponseHeaders:function(){return n?t:null},// Caches the header
setRequestHeader:function(l,a){return null==n&&(h[l=f[l.toLowerCase()]=f[l.toLowerCase()]||l]=a),this},// Overrides response content-type header
overrideMimeType:function(l){return null==n&&(o.mimeType=l),this},// Status-dependent callbacks
statusCode:function(l){var a;if(l){if(n)I.always(l[I.status]);else for(a in l)d[a]=[d[a],l[a]]}return this},// Cancel the request
abort:function(l){var a=l||C;return A&&A.abort(a),v(0,a),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
c.promise(I),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
o.url=((a||o.url||as.href)+"").replace(aw,as.protocol+"//"),// Alias method option to type as per ticket trac-12004
o.type=p.method||p.type||o.method||o.type,// Extract dataTypes list
o.dataTypes=(o.dataType||"*").toLowerCase().match(Y)||[""],null==o.crossDomain){e=u.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{e.href=o.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
e.href=e.href,o.crossDomain=aU.protocol+"//"+aU.host!=e.protocol+"//"+e.host}catch(l){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
o.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=E.param(o.data,o.traditional)),// Apply prefilters
ax(ab,o,p,I),n)return I;// Check for headers option
for(S in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(i=E.event&&o.global)&&0==E.active++&&E.event.trigger("ajaxStart"),// Uppercase the type
o.type=o.type.toUpperCase(),// Determine if request has content
o.hasContent=!ay.test(o.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
W=o.url.replace(av,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(aE,"+")):(// Remember the hash so we can put it back
r=o.url.slice(W.length),o.data&&(o.processData||"string"==typeof o.data)&&(W+=(ag.test(W)?"&":"?")+o.data,// trac-9682: remove data so that it's not used in an eventual retry
delete o.data),!1===o.cache&&(W=W.replace(am,"$1"),r=(ag.test(W)?"&":"?")+"_="+ac.guid+++r),// Put hash and anti-cache on the URL that will be requested (gh-1732)
o.url=W+r),o.ifModified&&(E.lastModified[W]&&I.setRequestHeader("If-Modified-Since",E.lastModified[W]),E.etag[W]&&I.setRequestHeader("If-None-Match",E.etag[W])),(o.data&&o.hasContent&&!1!==o.contentType||p.contentType)&&I.setRequestHeader("Content-Type",o.contentType),// Set the Accepts header for the server, depending on the dataType
I.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+aK+"; q=0.01":""):o.accepts["*"]),o.headers)I.setRequestHeader(S,o.headers[S]);// Allow custom headers/mimetypes and early abort
if(o.beforeSend&&(!1===o.beforeSend.call(L,I,o)||n))return I.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
C="abort",// Install callbacks on deferreds
g.add(o.complete),I.done(o.success),I.fail(o.error),// Get transport
A=ax(ak,o,p,I)){// If request was aborted inside ajaxSend, stop there
if(I.readyState=1,i&&s.trigger("ajaxSend",[I,o]),n)return I;o.async&&o.timeout>0&&(B=l.setTimeout(function(){I.abort("timeout")},o.timeout));try{n=!1,A.send(h,v)}catch(l){// Rethrow post-completion exceptions
if(n)throw l;// Propagate others as results
v(-1,l)}}else v(-1,"No Transport");// Callback for when everything is done
function v(a,p,F,e){var S,r,u,h,f,C=p;// Ignore repeat invocations
n||(n=!0,B&&l.clearTimeout(B),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
A=void 0,// Cache response headers
t=e||"",// Set readyState
I.readyState=a>0?4:0,// Determine if successful
S=a>=200&&a<300||304===a,F&&(h=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(l,a,p){// Remove auto dataType and get content-type in the process
for(var A,W,t,F,B=l.contents,e=l.dataTypes;"*"===e[0];)e.shift(),void 0===A&&(A=l.mimeType||a.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(A){for(W in B)if(B[W]&&B[W].test(A)){e.unshift(W);break}}// Check to see if we have a response for the expected dataType
if(e[0]in p)t=e[0];else{// Try convertible dataTypes
for(W in p){if(!e[0]||l.converters[W+" "+e[0]]){t=W;break}F||(F=W)}// Or just use first one
t=t||F}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(t)return t!==e[0]&&e.unshift(t),p[t]}(o,I,F)),!S&&E.inArray("script",o.dataTypes)>-1&&0>E.inArray("json",o.dataTypes)&&(o.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
h=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(l,a,p,A){var W,t,F,B,e,n={},i=l.dataTypes.slice();// Create converters map with lowercased keys
if(i[1])for(F in l.converters)n[F.toLowerCase()]=l.converters[F];// Convert to each sequential dataType
for(t=i.shift();t;)if(l.responseFields[t]&&(p[l.responseFields[t]]=a),!e&&A&&l.dataFilter&&(a=l.dataFilter(a,l.dataType)),e=t,t=i.shift()){// There's only work to do if current dataType is non-auto
if("*"===t)t=e;else if("*"!==e&&e!==t){// If none found, seek a pair
if(!// Seek a direct converter
(F=n[e+" "+t]||n["* "+t])){for(W in n)if(// If conv2 outputs current
(B=W.split(" "))[1]===t&&// If prev can be converted to accepted input
(F=n[e+" "+B[0]]||n["* "+B[0]])){// Condense equivalence converters
!0===F?F=n[W]:!0!==n[W]&&(t=B[0],i.unshift(B[1]));break}}// Apply converter (if not an equivalence)
if(!0!==F){// Unless errors are allowed to bubble, catch and return them
if(F&&l.throws)a=F(a);else try{a=F(a)}catch(l){return{state:"parsererror",error:F?l:"No conversion from "+e+" to "+t}}}}}return{state:"success",data:a}}(o,h,I,S),S?(o.ifModified&&((f=I.getResponseHeader("Last-Modified"))&&(E.lastModified[W]=f),(f=I.getResponseHeader("etag"))&&(E.etag[W]=f)),204===a||"HEAD"===o.type?C="nocontent":304===a?C="notmodified":(C=h.state,r=h.data,S=!(u=h.error))):(// Extract error from statusText and normalize for non-aborts
u=C,(a||!C)&&(C="error",a<0&&(a=0))),// Set data for the fake xhr object
I.status=a,I.statusText=(p||C)+"",S?c.resolveWith(L,[r,C,I]):c.rejectWith(L,[I,C,u]),// Status-dependent callbacks
I.statusCode(d),d=void 0,i&&s.trigger(S?"ajaxSuccess":"ajaxError",[I,o,S?r:u]),// Complete
g.fireWith(L,[I,C]),!i||(s.trigger("ajaxComplete",[I,o]),--E.active||E.event.trigger("ajaxStop")))}return I},getJSON:function(l,a,p){return E.get(l,a,p,"json")},getScript:function(l,a){return E.get(l,void 0,a,"script")}}),E.each(["get","post"],function(l,a){E[a]=function(l,p,A,W){// The url can be an options object (which then must have .url)
return c(p)&&(W=W||A,A=p,p=void 0),E.ajax(E.extend({url:l,type:a,dataType:W,data:p,success:A},E.isPlainObject(l)&&l))}}),E.ajaxPrefilter(function(l){var a;for(a in l.headers)"content-type"===a.toLowerCase()&&(l.contentType=l.headers[a]||"")}),E._evalUrl=function(l,a,p){return E.ajax({url:l,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(l){E.globalEval(l,a,p)}})},E.fn.extend({wrapAll:function(l){var a;return this[0]&&(c(l)&&(l=l.call(this[0])),// The elements to wrap the target around
a=E(l,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var l=this;l.firstElementChild;)l=l.firstElementChild;return l}).append(this)),this},wrapInner:function(l){return c(l)?this.each(function(a){E(this).wrapInner(l.call(this,a))}):this.each(function(){var a=E(this),p=a.contents();p.length?p.wrapAll(l):a.append(l)})},wrap:function(l){var a=c(l);return this.each(function(p){E(this).wrapAll(a?l.call(this,p):l)})},unwrap:function(l){return this.parent(l).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(l){return!E.expr.pseudos.visible(l)},E.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new l.XMLHttpRequest}catch(l){}};var aR={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},aD=E.ajaxSettings.xhr();s.cors=!!aD&&"withCredentials"in aD,s.ajax=aD=!!aD,E.ajaxTransport(function(a){var p,A;// Cross domain only allowed if supported through XMLHttpRequest
if(s.cors||aD&&!a.crossDomain)return{send:function(W,t){var F,B=a.xhr();// Apply custom fields if provided
if(B.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(F in a.xhrFields)B[F]=a.xhrFields[F];// Set headers
for(F in a.mimeType&&B.overrideMimeType&&B.overrideMimeType(a.mimeType),a.crossDomain||W["X-Requested-With"]||(W["X-Requested-With"]="XMLHttpRequest"),W)B.setRequestHeader(F,W[F]);// Callback
p=function(l){return function(){p&&(p=A=B.onload=B.onerror=B.onabort=B.ontimeout=B.onreadystatechange=null,"abort"===l?B.abort():"error"===l?"number"!=typeof B.status?t(0,"error"):t(B.status,B.statusText):t(aR[B.status]||B.status,B.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(B.responseType||"text")||"string"!=typeof B.responseText?{binary:B.response}:{text:B.responseText},B.getAllResponseHeaders()))}},// Listen to events
B.onload=p(),A=B.onerror=B.ontimeout=p("error"),void 0!==B.onabort?B.onabort=A:B.onreadystatechange=function(){// Check readyState before timeout as it changes
4===B.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
l.setTimeout(function(){p&&A()})},// Create the abort callback
p=p("abort");try{// Do send the request (this may raise an exception)
B.send(a.hasContent&&a.data||null)}catch(l){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(p)throw l}},abort:function(){p&&p()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
E.ajaxPrefilter(function(l){l.crossDomain&&(l.contents.script=!1)}),// Install script dataType
E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(l){return E.globalEval(l),l}}}),// Handle cache's special case and crossDomain
E.ajaxPrefilter("script",function(l){void 0===l.cache&&(l.cache=!1),l.crossDomain&&(l.type="GET")}),// Bind script tag hack transport
E.ajaxTransport("script",function(l){// This transport only deals with cross domain or forced-by-attrs requests
if(l.crossDomain||l.scriptAttrs){var a,p;return{send:function(A,W){a=E("<script>").attr(l.scriptAttrs||{}).prop({charset:l.scriptCharset,src:l.url}).on("load error",p=function(l){a.remove(),p=null,l&&W("error"===l.type?404:200,l.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
u.head.appendChild(a[0])},abort:function(){p&&p()}}}});var aV=[],aT=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var l=aV.pop()||E.expando+"_"+ac.guid++;return this[l]=!0,l}}),// Detect, normalize options and install callbacks for jsonp requests
E.ajaxPrefilter("json jsonp",function(a,p,A){var W,t,F,B=!1!==a.jsonp&&(aT.test(a.url)?"url":"string"==typeof a.data&&0===(a.contentType||"").indexOf("application/x-www-form-urlencoded")&&aT.test(a.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(B||"jsonp"===a.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
W=a.jsonpCallback=c(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,B?a[B]=a[B].replace(aT,"$1"+W):!1!==a.jsonp&&(a.url+=(ag.test(a.url)?"&":"?")+a.jsonp+"="+W),// Use data converter to retrieve json after script execution
a.converters["script json"]=function(){return F||E.error(W+" was not called"),F[0]},// Force json dataType
a.dataTypes[0]="json",// Install callback
t=l[W],l[W]=function(){F=arguments},// Clean-up function (fires after converters)
A.always(function(){void 0===t?E(l).removeProp(W):l[W]=t,a[W]&&(// Make sure that re-using the options doesn't screw things around
a.jsonpCallback=p.jsonpCallback,// Save the callback name for future use
aV.push(W)),F&&c(t)&&t(F[0]),F=t=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
s.createHTMLDocument=((p=u.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===p.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
E.parseHTML=function(l,a,p){var A,W,t;return"string"!=typeof l?[]:("boolean"==typeof a&&(p=a,a=!1),a||(s.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(A=(a=u.implementation.createHTMLDocument("")).createElement("base")).href=u.location.href,a.head.appendChild(A)):a=u),W=R.exec(l),t=!p&&[],W)?[a.createElement(W[1])]:(W=lm([l],a,t),t&&t.length&&E(t).remove(),E.merge([],W.childNodes))},/**
 * Load a url into a page
 */E.fn.load=function(l,a,p){var A,W,t,F=this,B=l.indexOf(" ");return B>-1&&(A=aS(l.slice(B)),l=l.slice(0,B)),c(a)?(// We assume that it's the callback
p=a,a=void 0):a&&"object"==typeof a&&(W="POST"),F.length>0&&E.ajax({url:l,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:W||"GET",dataType:"html",data:a}).done(function(l){// Save response for use in complete callback
t=arguments,F.html(A?// Exclude scripts to avoid IE 'Permission Denied' errors
E("<div>").append(E.parseHTML(l)).find(A):l);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(p&&function(l,a){F.each(function(){p.apply(this,t||[l.responseText,a,l])})}),this},E.expr.pseudos.animated=function(l){return E.grep(E.timers,function(a){return l===a.elem}).length},E.offset={setOffset:function(l,a,p){var A,W,t,F,B,e,n=E.css(l,"position"),i=E(l),S={};"static"===n&&(l.style.position="relative"),B=i.offset(),t=E.css(l,"top"),e=E.css(l,"left"),("absolute"===n||"fixed"===n)&&(t+e).indexOf("auto")>-1?(F=(A=i.position()).top,W=A.left):(F=parseFloat(t)||0,W=parseFloat(e)||0),c(a)&&(a=a.call(l,p,E.extend({},B))),null!=a.top&&(S.top=a.top-B.top+F),null!=a.left&&(S.left=a.left-B.left+W),"using"in a?a.using.call(l,S):i.css(S)}},E.fn.extend({// offset() relates an element's border box to the document origin
offset:function(l){// Preserve chaining for setter
if(arguments.length)return void 0===l?this:this.each(function(a){E.offset.setOffset(this,l,a)});var a,p,A=this[0];if(A)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
A.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
a=A.getBoundingClientRect(),p=A.ownerDocument.defaultView,{top:a.top+p.pageYOffset,left:a.left+p.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var l,a,p,A=this[0],W={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===E.css(A,"position"))a=A.getBoundingClientRect();else{for(a=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
p=A.ownerDocument,l=A.offsetParent||p.documentElement;l&&(l===p.body||l===p.documentElement)&&"static"===E.css(l,"position");)l=l.parentNode;l&&l!==A&&1===l.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
W=E(l).offset(),W.top+=E.css(l,"borderTopWidth",!0),W.left+=E.css(l,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:a.top-W.top-E.css(A,"marginTop",!0),left:a.left-W.left-E.css(A,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var l=this.offsetParent;l&&"static"===E.css(l,"position");)l=l.offsetParent;return l||lr})}}),// Create scrollLeft and scrollTop methods
E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(l,a){var p="pageYOffset"===a;E.fn[l]=function(A){return j(this,function(l,A,W){// Coalesce documents and windows
var t;if(g(l)?t=l:9===l.nodeType&&(t=l.defaultView),void 0===W)return t?t[a]:l[A];t?t.scrollTo(p?t.pageXOffset:W,p?W:t.pageYOffset):l[A]=W},l,A,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
E.each(["top","left"],function(l,a){E.cssHooks[a]=lP(s.pixelPosition,function(l,p){if(p)// If curCSS returns percentage, fallback to offset
return p=lz(l,a),lJ.test(p)?E(l).position()[a]+"px":p})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
E.each({Height:"height",Width:"width"},function(l,a){E.each({padding:"inner"+l,content:a,"":"outer"+l},function(p,A){// Margin is only for outerHeight, outerWidth
E.fn[A]=function(W,t){var F=arguments.length&&(p||"boolean"!=typeof W),B=p||(!0===W||!0===t?"margin":"border");return j(this,function(a,p,W){var t;return g(a)?0===A.indexOf("outer")?a["inner"+l]:a.document.documentElement["client"+l]:9===a.nodeType?(t=a.documentElement,Math.max(a.body["scroll"+l],t["scroll"+l],a.body["offset"+l],t["offset"+l],t["client"+l])):void 0===W?E.css(a,p,B):E.style(a,p,W,B)},a,F?W:void 0,F)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,a){E.fn[a]=function(l){return this.on(a,l)}}),E.fn.extend({bind:function(l,a,p){return this.on(l,null,a,p)},unbind:function(l,a){return this.off(l,null,a)},delegate:function(l,a,p,A){return this.on(a,l,p,A)},undelegate:function(l,a,p){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(l,"**"):this.off(a,l||"**",p)},hover:function(l,a){return this.on("mouseenter",l).on("mouseleave",a||l)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,a){// Handle event binding
E.fn[a]=function(l,p){return arguments.length>0?this.on(a,null,l,p):this.trigger(a)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var aJ=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
E.proxy=function(l,a){var p,A,W;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof a&&(p=l[a],a=l,l=p),c(l))return(// Simulated bind
A=F.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(W=function(){return l.apply(a||this,A.concat(F.call(arguments)))}).guid=l.guid=l.guid||E.guid++,W)},E.holdReady=function(l){l?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=m,E.isFunction=c,E.isWindow=g,E.camelCase=la,E.type=f,E.now=Date.now,E.isNumeric=function(l){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var a=E.type(l);return("number"===a||"string"===a)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(l-parseFloat(l))},E.trim=function(l){return null==l?"":(l+"").replace(aJ,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var aX=l.jQuery,aG=l.$;return E.noConflict=function(a){return l.$===E&&(l.$=aG),a&&l.jQuery===E&&(l.jQuery=aX),E},void 0===a&&(l.jQuery=l.$=E),E},"object"==typeof A?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
A=a.document?p(a,!0):function(l){if(!l.document)throw Error("jQuery requires a window with a document");return p(l)}:p(a);// @ts-ignore
.on("click",function(){return c()}),o(),s())},s=function(){return /*@__PURE__*/l(A)("<div>",{class:"sidebar"}).append(/*@__PURE__*/l(A)("<div>",{class:"inner"}).append(/*@__PURE__*/l(A)("<div>",{class:"close"}).append(/*@__PURE__*/l(A)("<div>",{class:"img"})//
.on("click",function(){return c()})),/*@__PURE__*/l(A)("<ul>").append(r({text:"Upcoming",href:"/#upcoming"}),r({text:"Ten Years",href:"/#tenYears"}),r({text:"About Us",href:"/#about"}),r({text:"Archive",href:"/?archive"}),r({text:"Contact Us",href:"/#contact"}))))};function c(){/*@__PURE__*/l(A)("nav .mobile .sidebar").toggleClass("show")}var g=function(a){var p;return /*@__PURE__*/l(A)("<div>",{class:"concertCard"}).append(/*@__PURE__*/l(A)("<div>",{class:"media",css:{backgroundImage:"url('".concat(a.poster,"')")}}),/*@__PURE__*/l(A)("<div>",{class:"info"}).append(/*@__PURE__*/l(A)("<p>",{class:"when",text:(p=a.when,Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date(p)))}),/*@__PURE__*/l(A)("<h3>",{class:"title",text:a.title})))};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.0
 * @author George Michael Brower
 * @license MIT
 *//**
 * Base class for all controllers.
 */function u(l,a){if(!(l instanceof a))throw TypeError("Cannot call a class as a function")}function d(l,a){for(var p=0;p<a.length;p++){var A=a[p];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(l,A.key,A)}}function h(l,a,p){return a&&d(l.prototype,a),p&&d(l,p),l}function f(l,a){return(f=Object.setPrototypeOf||function(l,a){return l.__proto__=a,l})(l,a)}function C(l,a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");l.prototype=Object.create(a&&a.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),a&&f(l,a)}function I(l,a){(null==a||a>l.length)&&(a=l.length);for(var p=0,A=Array(a);p<a;p++)A[p]=l[p];return A}function E(l){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)})(l)}function v(l){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(l){return!1}}();return function(){var p,A,t=E(l);if(a){var F=E(this).constructor;A=Reflect.construct(t,arguments,F)}else A=t.apply(this,arguments);return(p=A)&&("object"===W(p)||"function"==typeof p)?p:function(l){if(void 0===l)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return l}(this)}}var m=/*#__PURE__*/function(){function l(a,p,A,W){var t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"div";u(this,l),/**
		 * The GUI that contains this controller.
		 * @type {GUI}
		 */this.parent=a,/**
		 * The object this controller will modify.
		 * @type {object}
		 */this.object=p,/**
		 * The name of the property to control.
		 * @type {string}
		 */this.property=A,/**
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
		 */this.domElement=document.createElement(t),this.domElement.classList.add("controller"),this.domElement.classList.add(W),/**
		 * The DOM element that contains the controller's name.
		 * @type {HTMLElement}
		 */this.$name=document.createElement("div"),this.$name.classList.add("name"),l.nextNameID=l.nextNameID||0,this.$name.id="lil-gui-name-".concat(++l.nextNameID),/**
		 * The DOM element that contains the controller's "widget" (which differs by controller type).
		 * @type {HTMLElement}
		 */this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),/**
		 * The DOM element that receives the disabled attribute when using disable().
		 * @type {HTMLElement}
		 */this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),// Don't fire global key events while typing in a controller
this.domElement.addEventListener("keydown",function(l){return l.stopPropagation()}),this.domElement.addEventListener("keyup",function(l){return l.stopPropagation()}),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(A)}return h(l,[{/**
	 * Sets the name of the controller and its label in the GUI.
	 * @param {string} name
	 * @returns {this}
	 */key:"name",value:function(l){return(/**
		 * The controller's name. Use `controller.name( 'Name' )` to modify this value.
		 * @type {string}
		 */this._name=l,this.$name.innerHTML=l,this)}},{/**
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
	 */key:"onChange",value:function(l){return(/**
		 * Used to access the function bound to `onChange` events. Don't modify this value directly.
		 * Use the `controller.onChange( callback )` method instead.
		 * @type {Function}
		 */this._onChange=l,this)}},{/**
	 * Calls the onChange methods of this controller and its parent GUI.
	 * @protected
	 */key:"_callOnChange",value:function(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0}},{/**
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
	 */key:"onFinishChange",value:function(l){return(/**
		 * Used to access the function bound to `onFinishChange` events. Don't modify this value
		 * directly. Use the `controller.onFinishChange( callback )` method instead.
		 * @type {Function}
		 */this._onFinishChange=l,this)}},{/**
	 * Should be called by Controller when its widgets lose focus.
	 * @protected
	 */key:"_callOnFinishChange",value:function(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}},{/**
	 * Sets the controller back to its initial value.
	 * @returns {this}
	 */key:"reset",value:function(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}},{/**
	 * Enables this controller.
	 * @param {boolean} enabled
	 * @returns {this}
	 * @example
	 * controller.enable();
	 * controller.enable( false ); // disable
	 * controller.enable( controller._disabled ); // toggle
	 */key:"enable",value:function(){var l=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return this.disable(!l)}},{/**
	 * Disables this controller.
	 * @param {boolean} disabled
	 * @returns {this}
	 * @example
	 * controller.disable();
	 * controller.disable( false ); // enable
	 * controller.disable( !controller._disabled ); // toggle
	 */key:"disable",value:function(){var l=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return l===this._disabled||(this._disabled=l,this.domElement.classList.toggle("disabled",l),this.$disable.toggleAttribute("disabled",l)),this}},{/**
	 * Shows the Controller after it's been hidden.
	 * @param {boolean} show
	 * @returns {this}
	 * @example
	 * controller.show();
	 * controller.show( false ); // hide
	 * controller.show( controller._hidden ); // toggle
	 */key:"show",value:function(){var l=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return this._hidden=!l,this.domElement.style.display=this._hidden?"none":"",this}},{/**
	 * Hides the Controller.
	 * @returns {this}
	 */key:"hide",value:function(){return this.show(!1)}},{/**
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
	 */key:"options",value:function(l){var a=this.parent.add(this.object,this.property,l);return a.name(this._name),this.destroy(),a}},{/**
	 * Sets the minimum value. Only works on number controllers.
	 * @param {number} min
	 * @returns {this}
	 */key:"min",value:function(l){return this}},{/**
	 * Sets the maximum value. Only works on number controllers.
	 * @param {number} max
	 * @returns {this}
	 */key:"max",value:function(l){return this}},{/**
	 * Values set by this controller will be rounded to multiples of `step`. Only works on number
	 * controllers.
	 * @param {number} step
	 * @returns {this}
	 */key:"step",value:function(l){return this}},{/**
	 * Rounds the displayed value to a fixed number of decimals, without affecting the actual value
	 * like `step()`. Only works on number controllers.
	 * @example
	 * gui.add( object, 'property' ).listen().decimals( 4 );
	 * @param {number} decimals
	 * @returns {this}
	 */key:"decimals",value:function(l){return this}},{/**
	 * Calls `updateDisplay()` every animation frame. Pass `false` to stop listening.
	 * @param {boolean} listen
	 * @returns {this}
	 */key:"listen",value:function(){var l=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return(/**
		 * Used to determine if the controller is currently listening. Don't modify this value
		 * directly. Use the `controller.listen( true|false )` method instead.
		 * @type {boolean}
		 */this._listening=l,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this)}},{key:"_listenCallback",value:function(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);// To prevent framerate loss, make sure the value has changed before updating the display.
// Note: save() is used here instead of getValue() only because of ColorController. The !== operator
// won't work for color objects or arrays, but ColorController.save() always returns a string.
var l=this.save();l!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=l}},{/**
	 * Returns `object[ property ]`.
	 * @returns {any}
	 */key:"getValue",value:function(){return this.object[this.property]}},{/**
	 * Sets the value of `object[ property ]`, invokes any `onChange` handlers and updates the display.
	 * @param {any} value
	 * @returns {this}
	 */key:"setValue",value:function(l){return this.object[this.property]=l,this._callOnChange(),this.updateDisplay(),this}},{/**
	 * Updates the display to keep it in sync with the current value. Useful for updating your
	 * controllers when their values have been modified outside of the GUI.
	 * @returns {this}
	 */key:"updateDisplay",value:function(){return this}},{key:"load",value:function(l){return this.setValue(l),this._callOnFinishChange(),this}},{key:"save",value:function(){return this.getValue()}},{/**
	 * Destroys this controller and removes it from the parent GUI.
	 */key:"destroy",value:function(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}]),l}(),Q=/*#__PURE__*/function(l){C(p,l);var a=v(p);function p(l,A,W){var t;return u(this,p),(t=a.call(this,l,A,W,"boolean","label")).$input=document.createElement("input"),t.$input.setAttribute("type","checkbox"),t.$input.setAttribute("aria-labelledby",t.$name.id),t.$widget.appendChild(t.$input),t.$input.addEventListener("change",function(){t.setValue(t.$input.checked),t._callOnFinishChange()}),t.$disable=t.$input,t.updateDisplay(),t}return h(p,[{key:"updateDisplay",value:function(){return this.$input.checked=this.getValue(),this}}]),p}(m);function y(l){var a,p;return(a=l.match(/(#|0x)?([a-f0-9]{6})/i))?p=a[2]:(a=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?p=parseInt(a[1]).toString(16).padStart(2,0)+parseInt(a[2]).toString(16).padStart(2,0)+parseInt(a[3]).toString(16).padStart(2,0):(a=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(p=a[1]+a[1]+a[2]+a[2]+a[3]+a[3]),!!p&&"#"+p}var w={isPrimitive:!0,match:function(l){return"number"==typeof l},fromHexString:function(l){return parseInt(l.substring(1),16)},toHexString:function(l){return"#"+l.toString(16).padStart(6,0)}},b=[{isPrimitive:!0,match:function(l){return"string"==typeof l},fromHexString:y,toHexString:y},w,{isPrimitive:!1,// The arrow function is here to appease tree shakers like esbuild or webpack.
// See https://esbuild.github.io/api/#tree-shaking
match:function(l){return Array.isArray(l)},fromHexString:function(l,a){var p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,A=w.fromHexString(l);a[0]=(A>>16&255)/255*p,a[1]=(A>>8&255)/255*p,a[2]=(255&A)/255*p},toHexString:function(l){var a=function(l){if(Array.isArray(l))return l}(l)||function(l,a){var p,A,W=null==l?null:"undefined"!=typeof Symbol&&l[Symbol.iterator]||l["@@iterator"];if(null!=W){var t=[],F=!0,B=!1;try{for(W=W.call(l);!(F=(p=W.next()).done)&&(t.push(p.value),!a||t.length!==a);F=!0);}catch(l){B=!0,A=l}finally{try{F||null==W.return||W.return()}finally{if(B)throw A}}return t}}(l,3)||function(l,a){if(l){if("string"==typeof l)return I(l,a);var p=Object.prototype.toString.call(l).slice(8,-1);if("Object"===p&&l.constructor&&(p=l.constructor.name),"Map"===p||"Set"===p)return Array.from(p);if("Arguments"===p||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return I(l,a)}}(l,3)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),p=a[0],A=a[1],W=a[2],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,F=p*(t=255/t)<<16^A*t<<8^W*t<<0;return w.toHexString(F)}},{isPrimitive:!1,match:function(l){return Object(l)===l},fromHexString:function(l,a){var p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,A=w.fromHexString(l);a.r=(A>>16&255)/255*p,a.g=(A>>8&255)/255*p,a.b=(255&A)/255*p},toHexString:function(l){var a=l.r,p=l.g,A=l.b,W=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=a*(W=255/W)<<16^p*W<<8^A*W<<0;return w.toHexString(t)}}],k=/*#__PURE__*/function(l){C(p,l);var a=v(p);function p(l,A,W,t){var F,B;return u(this,p),(F=a.call(this,l,A,W,"color")).$input=document.createElement("input"),F.$input.setAttribute("type","color"),F.$input.setAttribute("tabindex",-1),F.$input.setAttribute("aria-labelledby",F.$name.id),F.$text=document.createElement("input"),F.$text.setAttribute("type","text"),F.$text.setAttribute("spellcheck","false"),F.$text.setAttribute("aria-labelledby",F.$name.id),F.$display=document.createElement("div"),F.$display.classList.add("display"),F.$display.appendChild(F.$input),F.$widget.appendChild(F.$display),F.$widget.appendChild(F.$text),F._format=(B=F.initialValue,b.find(function(l){return l.match(B)})),F._rgbScale=t,F._initialValueHexString=F.save(),F._textFocused=!1,F.$input.addEventListener("input",function(){F._setValueFromHexString(F.$input.value)}),F.$input.addEventListener("blur",function(){F._callOnFinishChange()}),F.$text.addEventListener("input",function(){var l=y(F.$text.value);l&&F._setValueFromHexString(l)}),F.$text.addEventListener("focus",function(){F._textFocused=!0,F.$text.select()}),F.$text.addEventListener("blur",function(){F._textFocused=!1,F.updateDisplay(),F._callOnFinishChange()}),F.$disable=F.$text,F.updateDisplay(),F}return h(p,[{key:"reset",value:function(){return this._setValueFromHexString(this._initialValueHexString),this}},{key:"_setValueFromHexString",value:function(l){if(this._format.isPrimitive){var a=this._format.fromHexString(l);this.setValue(a)}else this._format.fromHexString(l,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}},{key:"save",value:function(){return this._format.toHexString(this.getValue(),this._rgbScale)}},{key:"load",value:function(l){return this._setValueFromHexString(l),this._callOnFinishChange(),this}},{key:"updateDisplay",value:function(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}]),p}(m),K=/*#__PURE__*/function(l){C(p,l);var a=v(p);function p(l,A,W){var t;return u(this,p),// Buttons are the only case where widget contains name
(t=a.call(this,l,A,W,"function")).$button=document.createElement("button"),t.$button.appendChild(t.$name),t.$widget.appendChild(t.$button),t.$button.addEventListener("click",function(l){l.preventDefault(),t.getValue().call(t.object),t._callOnChange()}),// enables :active pseudo class on mobile
t.$button.addEventListener("touchstart",function(){},{passive:!0}),t.$disable=t.$button,t}return p}(m),U=/*#__PURE__*/function(l){C(p,l);var a=v(p);function p(l,A,W,t,F,B){u(this,p),(e=a.call(this,l,A,W,"number"))._initInput(),e.min(t),e.max(F);var e,n=void 0!==B;return e.step(n?B:e._getImplicitStep(),n),e.updateDisplay(),e}return h(p,[{key:"decimals",value:function(l){return this._decimals=l,this.updateDisplay(),this}},{key:"min",value:function(l){return this._min=l,this._onUpdateMinMax(),this}},{key:"max",value:function(l){return this._max=l,this._onUpdateMinMax(),this}},{key:"step",value:function(l){var a=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return this._step=l,this._stepExplicit=a,this}},{key:"updateDisplay",value:function(){var l=this.getValue();if(this._hasSlider){var a=(l-this._min)/(this._max-this._min);a=Math.max(0,Math.min(a,1)),this.$fill.style.width=100*a+"%"}return this._inputFocused||(this.$input.value=void 0===this._decimals?l:l.toFixed(this._decimals)),this}},{key:"_initInput",value:function(){var l=this;this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;// Keys & mouse wheel
// ---------------------------------------------------------------------
var a,p,A,W,t,F=function(a){var p=parseFloat(l.$input.value);isNaN(p)||(l._snapClampSetValue(p+a),// Force the input to updateDisplay when it's focused
l.$input.value=l.getValue())},B=!1,e=function(F){if(B){var e=F.clientX-a;Math.abs(F.clientY-p)>5?(F.preventDefault(),l.$input.blur(),B=!1,l._setDraggingStyle(!0,"vertical")):Math.abs(e)>5&&n()}// This isn't an else so that the first move counts towards dragDelta
if(!B){var i=F.clientY-A;t-=i*l._step*l._arrowKeyMultiplier(F),W+t>l._max?t=l._max-W:W+t<l._min&&(t=l._min-W),l._snapClampSetValue(W+t)}A=F.clientY},n=function(){l._setDraggingStyle(!1,"vertical"),l._callOnFinishChange(),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)};this.$input.addEventListener("input",function(){var a=parseFloat(l.$input.value);isNaN(a)||(l._stepExplicit&&(a=l._snap(a)),l.setValue(l._clamp(a)))}),this.$input.addEventListener("keydown",function(a){"Enter"===a.key&&l.$input.blur(),"ArrowUp"===a.code&&(a.preventDefault(),F(l._step*l._arrowKeyMultiplier(a))),"ArrowDown"===a.code&&(a.preventDefault(),F(-(l._step*l._arrowKeyMultiplier(a)*1)))}),this.$input.addEventListener("wheel",function(a){l._inputFocused&&(a.preventDefault(),F(l._step*l._normalizeMouseWheel(a)))},{passive:!1}),this.$input.addEventListener("mousedown",function(F){a=F.clientX,p=A=F.clientY,B=!0,W=l.getValue(),t=0,window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}),this.$input.addEventListener("focus",function(){l._inputFocused=!0}),this.$input.addEventListener("blur",function(){l._inputFocused=!1,l.updateDisplay(),l._callOnFinishChange()})}},{key:"_initSlider",value:function(){var l,a=this;this._hasSlider=!0,// Build DOM
// ---------------------------------------------------------------------
this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");var p,A,W=function(l){var p,A,W,t=a.$slider.getBoundingClientRect(),F=(p=t.left,A=t.right,W=a._min,(l-p)/(A-p)*(a._max-W)+W);a._snapClampSetValue(F)},t=function(l){W(l.clientX)},F=function(){a._callOnFinishChange(),a._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",F)},B=!1,e=function(l){l.preventDefault(),a._setDraggingStyle(!0),W(l.touches[0].clientX),B=!1},n=function(l){B?Math.abs(l.touches[0].clientX-p)>Math.abs(l.touches[0].clientY-A)?e(l):(// This was, in fact, an attempt to scroll. Abort.
window.removeEventListener("touchmove",n),window.removeEventListener("touchend",i)):(l.preventDefault(),W(l.touches[0].clientX))},i=function(){a._callOnFinishChange(),a._setDraggingStyle(!1),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",i)},S=this._callOnFinishChange.bind(this);this.$slider.addEventListener("mousedown",function(l){a._setDraggingStyle(!0),W(l.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",F)}),this.$slider.addEventListener("touchstart",function(l){l.touches.length>1||(a._hasScrollBar?(p=l.touches[0].clientX,A=l.touches[0].clientY,B=!0):e(l),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",i))},{passive:!1}),this.$slider.addEventListener("wheel",function(p){if(!(Math.abs(p.deltaX)<Math.abs(p.deltaY))||!a._hasScrollBar){p.preventDefault();// set value
var A=a._normalizeMouseWheel(p)*a._step;a._snapClampSetValue(a.getValue()+A),// force the input to updateDisplay when it's focused
a.$input.value=a.getValue(),// debounce onFinishChange
clearTimeout(l),l=setTimeout(S,400)}},{passive:!1})}},{key:"_setDraggingStyle",value:function(l){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"horizontal";this.$slider&&this.$slider.classList.toggle("active",l),document.body.classList.toggle("lil-gui-dragging",l),document.body.classList.toggle("lil-gui-".concat(a),l)}},{key:"_getImplicitStep",value:function(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}},{key:"_onUpdateMinMax",value:function(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}},{key:"_normalizeMouseWheel",value:function(l){var a=l.deltaX,p=l.deltaY;return Math.floor(l.deltaY)!==l.deltaY&&l.wheelDelta&&(a=0,p=-l.wheelDelta/120*(this._stepExplicit?1:10)),a+-p}},{key:"_arrowKeyMultiplier",value:function(l){var a=this._stepExplicit?1:10;return l.shiftKey?a*=10:l.altKey&&(a/=10),a}},{key:"_snap",value:function(l){return parseFloat((Math.round(l/this._step)*this._step).toPrecision(15))}},{key:"_clamp",value:function(l){return l<this._min&&(l=this._min),l>this._max&&(l=this._max),l}},{key:"_snapClampSetValue",value:function(l){this.setValue(this._clamp(this._snap(l)))}},{key:"_hasScrollBar",get:function(){var l=this.parent.root.$children;return l.scrollHeight>l.clientHeight}},{key:"_hasMin",get:function(){return void 0!==this._min}},{key:"_hasMax",get:function(){return void 0!==this._max}}]),p}(m),q=/*#__PURE__*/function(l){C(p,l);var a=v(p);function p(l,A,W,t){var F;return u(this,p),(F=a.call(this,l,A,W,"option")).$select=document.createElement("select"),F.$select.setAttribute("aria-labelledby",F.$name.id),F.$display=document.createElement("div"),F.$display.classList.add("display"),F.$select.addEventListener("change",function(){F.setValue(F._values[F.$select.selectedIndex]),F._callOnFinishChange()}),F.$select.addEventListener("focus",function(){F.$display.classList.add("focus")}),F.$select.addEventListener("blur",function(){F.$display.classList.remove("focus")}),F.$widget.appendChild(F.$select),F.$widget.appendChild(F.$display),F.$disable=F.$select,F.options(t),F}return h(p,[{key:"options",value:function(l){var a=this;return this._values=Array.isArray(l)?l:Object.values(l),this._names=Array.isArray(l)?l:Object.keys(l),this.$select.replaceChildren(),this._names.forEach(function(l){var p=document.createElement("option");p.innerHTML=l,a.$select.appendChild(p)}),this.updateDisplay(),this}},{key:"updateDisplay",value:function(){var l=this.getValue(),a=this._values.indexOf(l);return this.$select.selectedIndex=a,this.$display.innerHTML=-1===a?l:this._names[a],this}}]),p}(m),x=/*#__PURE__*/function(l){C(p,l);var a=v(p);function p(l,A,W){var t;return u(this,p),(t=a.call(this,l,A,W,"string")).$input=document.createElement("input"),t.$input.setAttribute("type","text"),t.$input.setAttribute("aria-labelledby",t.$name.id),t.$input.addEventListener("input",function(){t.setValue(t.$input.value)}),t.$input.addEventListener("keydown",function(l){"Enter"===l.code&&t.$input.blur()}),t.$input.addEventListener("blur",function(){t._callOnFinishChange()}),t.$widget.appendChild(t.$input),t.$disable=t.$input,t.updateDisplay(),t}return h(p,[{key:"updateDisplay",value:function(){return this.$input.value=this.getValue(),this}}]),p}(m),M=!1,R=/*#__PURE__*/function(){function l(){var a,p,A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},W=A.parent,t=A.autoPlace,F=A.container,B=A.width,e=A.title,n=void 0===e?"Controls":e,i=A.closeFolders,S=A.injectStyles,r=A.touchStyles,o=this;if(u(this,l),/**
		 * The GUI containing this folder, or `undefined` if this is the root GUI.
		 * @type {GUI}
		 */this.parent=W,/**
		 * The top level GUI containing this folder, or `this` if this is the root GUI.
		 * @type {GUI}
		 */this.root=W?W.root:this,/**
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
		 */this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",function(){return o.openAnimated(o._closed)}),this.$title.addEventListener("keydown",function(l){("Enter"===l.code||"Space"===l.code)&&(l.preventDefault(),o.$title.click())}),// enables :active pseudo class on mobile
this.$title.addEventListener("touchstart",function(){},{passive:!0}),/**
		 * The DOM element that contains children.
		 * @type {HTMLElement}
		 */this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);// Stop the constructor early, everything onward only applies to root GUI's
return}this.domElement.classList.add("root"),(void 0===r||r)&&this.domElement.classList.add("allow-touch-styles"),!M&&(void 0===S||S)&&((a=document.createElement("style")).innerHTML='.lil-gui {\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: var(--text-color);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  --background-color: #1f1f1f;\n  --text-color: #ebebeb;\n  --title-background-color: #111111;\n  --title-text-color: #ebebeb;\n  --widget-color: #424242;\n  --hover-color: #4f4f4f;\n  --focus-color: #595959;\n  --number-color: #2cc9ff;\n  --string-color: #a2db3c;\n  --font-size: 11px;\n  --input-font-size: 11px;\n  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;\n  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;\n  --padding: 4px;\n  --spacing: 4px;\n  --widget-height: 20px;\n  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);\n  --name-width: 45%;\n  --slider-knob-width: 2px;\n  --slider-input-width: 27%;\n  --color-input-width: 27%;\n  --slider-input-min-width: 45px;\n  --color-input-min-width: 45px;\n  --folder-indent: 7px;\n  --widget-padding: 0 0 0 3px;\n  --widget-border-radius: 2px;\n  --checkbox-size: calc(0.75 * var(--widget-height));\n  --scrollbar-width: 5px;\n}\n.lil-gui, .lil-gui * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.lil-gui.root {\n  width: var(--width, 245px);\n  display: flex;\n  flex-direction: column;\n  background: var(--background-color);\n}\n.lil-gui.root > .title {\n  background: var(--title-background-color);\n  color: var(--title-text-color);\n}\n.lil-gui.root > .children {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.lil-gui.root > .children::-webkit-scrollbar {\n  width: var(--scrollbar-width);\n  height: var(--scrollbar-width);\n  background: var(--background-color);\n}\n.lil-gui.root > .children::-webkit-scrollbar-thumb {\n  border-radius: var(--scrollbar-width);\n  background: var(--focus-color);\n}\n@media (pointer: coarse) {\n  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {\n    --widget-height: 28px;\n    --padding: 6px;\n    --spacing: 6px;\n    --font-size: 13px;\n    --input-font-size: 16px;\n    --folder-indent: 10px;\n    --scrollbar-width: 7px;\n    --slider-input-min-width: 50px;\n    --color-input-min-width: 65px;\n  }\n}\n.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {\n  --widget-height: 28px;\n  --padding: 6px;\n  --spacing: 6px;\n  --font-size: 13px;\n  --input-font-size: 16px;\n  --folder-indent: 10px;\n  --scrollbar-width: 7px;\n  --slider-input-min-width: 50px;\n  --color-input-min-width: 65px;\n}\n.lil-gui.autoPlace {\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  right: 15px;\n  z-index: 1001;\n}\n\n.lil-gui .controller {\n  display: flex;\n  align-items: center;\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n}\n.lil-gui .controller.disabled {\n  opacity: 0.5;\n}\n.lil-gui .controller.disabled, .lil-gui .controller.disabled * {\n  pointer-events: none !important;\n}\n.lil-gui .controller > .name {\n  min-width: var(--name-width);\n  flex-shrink: 0;\n  white-space: pre;\n  padding-right: var(--spacing);\n  line-height: var(--widget-height);\n}\n.lil-gui .controller .widget {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: var(--widget-height);\n}\n.lil-gui .controller.string input {\n  color: var(--string-color);\n}\n.lil-gui .controller.boolean {\n  cursor: pointer;\n}\n.lil-gui .controller.color .display {\n  width: 100%;\n  height: var(--widget-height);\n  border-radius: var(--widget-border-radius);\n  position: relative;\n}\n@media (hover: hover) {\n  .lil-gui .controller.color .display:hover:before {\n    content: " ";\n    display: block;\n    position: absolute;\n    border-radius: var(--widget-border-radius);\n    border: 1px solid #fff9;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n}\n.lil-gui .controller.color input[type=color] {\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.lil-gui .controller.color input[type=text] {\n  margin-left: var(--spacing);\n  font-family: var(--font-family-mono);\n  min-width: var(--color-input-min-width);\n  width: var(--color-input-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.option select {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n}\n.lil-gui .controller.option .display {\n  position: relative;\n  pointer-events: none;\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  line-height: var(--widget-height);\n  max-width: 100%;\n  overflow: hidden;\n  word-break: break-all;\n  padding-left: 0.55em;\n  padding-right: 1.75em;\n  background: var(--widget-color);\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .display.focus {\n    background: var(--focus-color);\n  }\n}\n.lil-gui .controller.option .display.active {\n  background: var(--focus-color);\n}\n.lil-gui .controller.option .display:after {\n  font-family: "lil-gui";\n  content: "↕";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding-right: 0.375em;\n}\n.lil-gui .controller.option .widget,\n.lil-gui .controller.option select {\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .widget:hover .display {\n    background: var(--hover-color);\n  }\n}\n.lil-gui .controller.number input {\n  color: var(--number-color);\n}\n.lil-gui .controller.number.hasSlider input {\n  margin-left: var(--spacing);\n  width: var(--slider-input-width);\n  min-width: var(--slider-input-min-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.number .slider {\n  width: 100%;\n  height: var(--widget-height);\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  padding-right: var(--slider-knob-width);\n  overflow: hidden;\n  cursor: ew-resize;\n  touch-action: pan-y;\n}\n@media (hover: hover) {\n  .lil-gui .controller.number .slider:hover {\n    background: var(--hover-color);\n  }\n}\n.lil-gui .controller.number .slider.active {\n  background: var(--focus-color);\n}\n.lil-gui .controller.number .slider.active .fill {\n  opacity: 0.95;\n}\n.lil-gui .controller.number .fill {\n  height: 100%;\n  border-right: var(--slider-knob-width) solid var(--number-color);\n  box-sizing: content-box;\n}\n\n.lil-gui-dragging .lil-gui {\n  --hover-color: var(--widget-color);\n}\n.lil-gui-dragging * {\n  cursor: ew-resize !important;\n}\n\n.lil-gui-dragging.lil-gui-vertical * {\n  cursor: ns-resize !important;\n}\n\n.lil-gui .title {\n  height: var(--title-height);\n  line-height: calc(var(--title-height) - 4px);\n  font-weight: 600;\n  padding: 0 var(--padding);\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  outline: none;\n  text-decoration-skip: objects;\n}\n.lil-gui .title:before {\n  font-family: "lil-gui";\n  content: "▾";\n  padding-right: 2px;\n  display: inline-block;\n}\n.lil-gui .title:active {\n  background: var(--title-background-color);\n  opacity: 0.75;\n}\n@media (hover: hover) {\n  body:not(.lil-gui-dragging) .lil-gui .title:hover {\n    background: var(--title-background-color);\n    opacity: 0.85;\n  }\n  .lil-gui .title:focus {\n    text-decoration: underline var(--focus-color);\n  }\n}\n.lil-gui.root > .title:focus {\n  text-decoration: none !important;\n}\n.lil-gui.closed > .title:before {\n  content: "▸";\n}\n.lil-gui.closed > .children {\n  transform: translateY(-7px);\n  opacity: 0;\n}\n.lil-gui.closed:not(.transition) > .children {\n  display: none;\n}\n.lil-gui.transition > .children {\n  transition-duration: 300ms;\n  transition-property: height, opacity, transform;\n  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);\n  overflow: hidden;\n  pointer-events: none;\n}\n.lil-gui .children:empty:before {\n  content: "Empty";\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n  display: block;\n  height: var(--widget-height);\n  font-style: italic;\n  line-height: var(--widget-height);\n  opacity: 0.5;\n}\n.lil-gui.root > .children > .lil-gui > .title {\n  border: 0 solid var(--widget-color);\n  border-width: 1px 0;\n  transition: border-color 300ms;\n}\n.lil-gui.root > .children > .lil-gui.closed > .title {\n  border-bottom-color: transparent;\n}\n.lil-gui + .controller {\n  border-top: 1px solid var(--widget-color);\n  margin-top: 0;\n  padding-top: var(--spacing);\n}\n.lil-gui .lil-gui .lil-gui > .title {\n  border: none;\n}\n.lil-gui .lil-gui .lil-gui > .children {\n  border: none;\n  margin-left: var(--folder-indent);\n  border-left: 2px solid var(--widget-color);\n}\n.lil-gui .lil-gui .controller {\n  border: none;\n}\n\n.lil-gui label, .lil-gui input, .lil-gui button {\n  -webkit-tap-highlight-color: transparent;\n}\n.lil-gui input {\n  border: 0;\n  outline: none;\n  font-family: var(--font-family);\n  font-size: var(--input-font-size);\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  background: var(--widget-color);\n  color: var(--text-color);\n  width: 100%;\n}\n@media (hover: hover) {\n  .lil-gui input:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui input:active {\n    background: var(--focus-color);\n  }\n}\n.lil-gui input:disabled {\n  opacity: 1;\n}\n.lil-gui input[type=text],\n.lil-gui input[type=number] {\n  padding: var(--widget-padding);\n}\n.lil-gui input[type=text]:focus,\n.lil-gui input[type=number]:focus {\n  background: var(--focus-color);\n}\n.lil-gui input[type=checkbox] {\n  appearance: none;\n  width: var(--checkbox-size);\n  height: var(--checkbox-size);\n  border-radius: var(--widget-border-radius);\n  text-align: center;\n  cursor: pointer;\n}\n.lil-gui input[type=checkbox]:checked:before {\n  font-family: "lil-gui";\n  content: "✓";\n  font-size: var(--checkbox-size);\n  line-height: var(--checkbox-size);\n}\n@media (hover: hover) {\n  .lil-gui input[type=checkbox]:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui button {\n  outline: none;\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  color: var(--text-color);\n  width: 100%;\n  height: var(--widget-height);\n  text-transform: none;\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  border: none;\n}\n@media (hover: hover) {\n  .lil-gui button:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui button:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui button:active {\n  background: var(--focus-color);\n}\n\n@font-face {\n  font-family: "lil-gui";\n  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");\n}',(p=document.querySelector("head link[rel=stylesheet], head style"))?document.head.insertBefore(a,p):document.head.appendChild(a),M=!0),F?F.appendChild(this.domElement):(void 0===t?void 0===W:t)&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),B&&this.domElement.style.setProperty("--width",B+"px"),this._closeFolders=void 0!==i&&i}return h(l,[{/**
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
	 */key:"add",value:function(l,a,p,A,t){if(Object(p)===p)return new q(this,l,a,p);var F=l[a];switch(void 0===F?"undefined":W(F)){case"number":return new U(this,l,a,p,A,t);case"boolean":return new Q(this,l,a);case"string":return new x(this,l,a);case"function":return new K(this,l,a)}console.error("gui.add failed\n	property:",a,"\n	object:",l,"\n	value:",F)}},{/**
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
	 */key:"addColor",value:function(l,a){var p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return new k(this,l,a,p)}},{/**
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
	 */key:"addFolder",value:function(a){var p=new l({parent:this,title:a});return this.root._closeFolders&&p.close(),p}},{/**
	 * Recalls values that were saved with `gui.save()`.
	 * @param {object} obj
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {this}
	 */key:"load",value:function(l){var a=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return l.controllers&&this.controllers.forEach(function(a){!(a instanceof K)&&a._name in l.controllers&&a.load(l.controllers[a._name])}),a&&l.folders&&this.folders.forEach(function(a){a._title in l.folders&&a.load(l.folders[a._title])}),this}},{/**
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
	 */key:"save",value:function(){var l=!(arguments.length>0)||void 0===arguments[0]||arguments[0],a={controllers:{},folders:{}};return this.controllers.forEach(function(l){if(!(l instanceof K)){if(l._name in a.controllers)throw Error('Cannot save GUI with duplicate property "'.concat(l._name,'"'));a.controllers[l._name]=l.save()}}),l&&this.folders.forEach(function(l){if(l._title in a.folders)throw Error('Cannot save GUI with duplicate folder "'.concat(l._title,'"'));a.folders[l._title]=l.save()}),a}},{/**
	 * Opens a GUI or folder. GUI and folders are open by default.
	 * @param {boolean} open Pass false to close.
	 * @returns {this}
	 * @example
	 * gui.open(); // open
	 * gui.open( false ); // close
	 * gui.open( gui._closed ); // toggle
	 */key:"open",value:function(){var l=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return this._setClosed(!l),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}},{/**
	 * Closes the GUI.
	 * @returns {this}
	 */key:"close",value:function(){return this.open(!1)}},{key:"_setClosed",value:function(l){this._closed!==l&&(this._closed=l,this._callOnOpenClose(this))}},{/**
	 * Shows the GUI after it's been hidden.
	 * @param {boolean} show
	 * @returns {this}
	 * @example
	 * gui.show();
	 * gui.show( false ); // hide
	 * gui.show( gui._hidden ); // toggle
	 */key:"show",value:function(){var l=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return this._hidden=!l,this.domElement.style.display=this._hidden?"none":"",this}},{/**
	 * Hides the GUI.
	 * @returns {this}
	 */key:"hide",value:function(){return this.show(!1)}},{key:"openAnimated",value:function(){var l=!(arguments.length>0)||void 0===arguments[0]||arguments[0],a=this;return(// set state immediately
this._setClosed(!l),this.$title.setAttribute("aria-expanded",!this._closed),// wait for next frame to measure $children
requestAnimationFrame(function(){// explicitly set initial height for transition
var p=a.$children.clientHeight;a.$children.style.height=p+"px",a.domElement.classList.add("transition");var A=function(l){l.target===a.$children&&(a.$children.style.height="",a.domElement.classList.remove("transition"),a.$children.removeEventListener("transitionend",A))};a.$children.addEventListener("transitionend",A);// todo: this is wrong if children's scrollHeight makes for a gui taller than maxHeight
var W=l?a.$children.scrollHeight:0;a.domElement.classList.toggle("closed",!l),requestAnimationFrame(function(){a.$children.style.height=W+"px"})}),this)}},{/**
	 * Change the title of this GUI.
	 * @param {string} title
	 * @returns {this}
	 */key:"title",value:function(l){return(/**
		 * Current title of the GUI. Use `gui.title( 'Title' )` to modify this value.
		 * @type {string}
		 */this._title=l,this.$title.innerHTML=l,this)}},{/**
	 * Resets all controllers to their initial values.
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {this}
	 */key:"reset",value:function(){var l=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return(l?this.controllersRecursive():this.controllers).forEach(function(l){return l.reset()}),this}},{/**
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
	 */key:"onChange",value:function(l){return(/**
		 * Used to access the function bound to `onChange` events. Don't modify this value
		 * directly. Use the `gui.onChange( callback )` method instead.
		 * @type {Function}
		 */this._onChange=l,this)}},{key:"_callOnChange",value:function(l){this.parent&&this.parent._callOnChange(l),void 0!==this._onChange&&this._onChange.call(this,{object:l.object,property:l.property,value:l.getValue(),controller:l})}},{/**
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
	 */key:"onFinishChange",value:function(l){return(/**
		 * Used to access the function bound to `onFinishChange` events. Don't modify this value
		 * directly. Use the `gui.onFinishChange( callback )` method instead.
		 * @type {Function}
		 */this._onFinishChange=l,this)}},{key:"_callOnFinishChange",value:function(l){this.parent&&this.parent._callOnFinishChange(l),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:l.object,property:l.property,value:l.getValue(),controller:l})}},{/**
	 * Pass a function to be called when this GUI or its descendants are opened or closed.
	 * @param {function(GUI)} callback
	 * @returns {this}
	 * @example
	 * gui.onOpenClose( changedGUI => {
	 * 	console.log( changedGUI._closed );
	 * } );
	 */key:"onOpenClose",value:function(l){return this._onOpenClose=l,this}},{key:"_callOnOpenClose",value:function(l){this.parent&&this.parent._callOnOpenClose(l),void 0!==this._onOpenClose&&this._onOpenClose.call(this,l)}},{/**
	 * Destroys all DOM elements and event listeners associated with this GUI.
	 */key:"destroy",value:function(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(function(l){return l.destroy()})}},{/**
	 * Returns an array of controllers contained by this GUI and its descendents.
	 * @returns {Controller[]}
	 */key:"controllersRecursive",value:function(){var l=Array.from(this.controllers);return this.folders.forEach(function(a){l=l.concat(a.controllersRecursive())}),l}},{/**
	 * Returns an array of folders contained by this GUI and its descendents.
	 * @returns {GUI[]}
	 */key:"foldersRecursive",value:function(){var l=Array.from(this.folders);return this.folders.forEach(function(a){l=l.concat(a.foldersRecursive())}),l}}]),l}();/*@__PURE__*/l(A)(function(){return function(){if("?archive"===window.location.search){var a;/*@__PURE__*/l(A)("<div>",{id:"archivePage"})//
.append(i(),/*@__PURE__*/l(A)("<h1>",{text:"Concerts Archive"}),(a=n.concerts,/*@__PURE__*/l(A)("<div>",{class:"concertsGrid"}).append(a.sort(function(l,a){return a.when.localeCompare(l.when)}).map(function(l){return g(l)})))).appendTo(document.body),e().appendTo(document.body)}else document.body.innerHTML='\n  <div class="t t1" style="height: 60lvh">\n    <section>\n      <div class="upcomingCover"></div>\n      <div class="logoWrap">\n        <svg id="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n          <image x="0" y="0" width="100" height="100" xlink:href="'.concat(/*@__PURE__*/l(t),'" />\n          <g fill="#ffffff" fill-opacity="0" stroke="#ea230c">\n            <path class="mask1"\n              d="m38.65,20.61c8.05,-1.53 13.34,-5.87 12.75,-8.41c-0.59,-2.53 -5.47,-2.36 -7.47,5.56c-2,7.92 -4,27.64 -4.81,33.69c-0.82,6.04 -1.07,10.54 -3.58,27.41"\n              stroke-width="1.19" />\n            <path class="mask2" d="m42.69,16.28l4.34,10.76" />\n            <path class="mask3" d="m49.45,35.24c-9.17,-9.17 -20.62,-3.52 -22.14,6.76c-1.52,10.28 13.31,18.97 22.48,6.34"\n              stroke-width="1.5" />\n            <path class="mask4"\n              d="m16.34,73.66c1.24,-8.41 8.55,-18.48 20.48,-17.52c11.93,0.97 18.07,10.62 17.66,18.07c-0.41,7.45 -8.83,17.79 -18.62,17.72c-9.79,-0.07 -16.97,-4.21 -19.45,-17.72"\n              stroke-width="3" />\n          </g>\n          <g fill="#ea230c">\n            <rect class="mask5" height="4.55" rx="2" ry="2" width="17.03" x="46.07" y="19.52" />\n            <rect class="mask6" height="4.48" width="23.66" x="50.14" y="49.31" />\n            <rect class="mask7" height="4.83" width="29.59" x="54.48" y="78.69" />\n          </g>\n        </svg>\n        <div>\n        </div>\n        <!-- <p class="tagline">\n          Community Orchestra based in Roath, Cardiff.<br>\n          Rehearsals are every Wednesday 7-9pm at Urban Crofters.\n        </p> -->\n      </div>\n    </section>\n  </div>\n  <div class="t t2" style="height: 40lvh">\n    <div></div>\n  </div>\n  <div class="t t3">\n    <section>\n      <a id="upcoming" class="megaScrollAnchor"></a>\n      <div class="upcoming">\n        <h2>Upcoming Concert</h2>\n        <div class="row">\n          <div class="poster"></div>\n          <div class="info">\n            <!-- <p>Join Roath Chamber Orchestra for the first of many concerts to celebrate our 10th anniversary year.</p> -->\n            <p>Sunday, 17 December at 7 PM</p>\n            <a href="https://www.facebook.com/events/177429568773354" class="primary">View Event on Facebook</a>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class="t t3_5">\n    <section class="tenYears">\n      <a id="tenYears" class="megaScrollAnchor"></a>\n      <h2>Ten Year Anniversary</h2>\n      <video controls>\n        <source type="video/webm" src="/share/10%20Years%20of%20Roath%20Chamber%20Orchestra.webm">\n        <source type="video/mp4" src="/share/10%20Years%20of%20Roath%20Chamber%20Orchestra.mp4">\n        <source type="video/webm" src="').concat(/*@__PURE__*/l(F),'">\n      </video>\n    </section>\n  </div>\n  <div class="t t3_8">\n    <div class="musicsNote">\n      <div class="musicsNoteRoot">\n        <div class="musicNote1"></div>\n        <div class="musicNote2"></div>\n        <div class="musicNote3"></div>\n        <div class="musicNote4"></div>\n      </div>\n    </div>\n  </div>\n  <div class="t t4">\n    <section class="about">\n      <a id="about" class="megaScrollAnchor"></a>\n      <h2>About Us</h2>\n      <p>Roath Chamber Orchestra (formerly St Anne\'s Orchestra) was founded in September 2013 by a group of musical young professionals who regularly met on a Wednesday evening for few drinks. On realising there was at least 1/8 of an orchestra in the room the ensemble was formed and the first mission was to find additional keen music makers in the beautiful city of Cardiff!\n      <p>Since then the orchestra has grown in strength and ambition performing at least four public concerts a year including a Family Concert in the Summer Term. Our repertoire is mainly chamber orchestral works (symphonies and overtures) with members of the orchestra regularly volunteering to perform a concerto with the rest of the ensemble. We have performed works by composers such as Bach, Mozart, Beethoven, Schubert and Tchaikovsky.\n      <p>We are particularly looking for regular Viola and Brass players. However, if you would like to be added to our list of deps, please get in touch via email or drop us a Facebook message. @RoathChamber\n    </section>\n  </div>\n  <div class="t t5">\n    <section class="past">\n      <div class="postersScroll">\n        <div class="posters">\n          <i></i><i></i><i></i><i></i><i></i>\n          <i></i><i></i><i></i><i></i><i></i>\n          <i></i><i></i><i></i><i></i><i></i>\n          <i></i><i></i><i></i><i></i><i></i>\n        </div>\n        <div class="postersOverlay"></div>\n        <div class="details">\n          <h2>Past Events</h2>\n          <a href="/?archive" class="primary">Go To Concerts Archive</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class="t t7">\n    <section class="contact">\n      <a id="contact" class="megaScrollAnchor"></a>\n      ','\n      <h2>Contact Us</h2>\n      <p>\n        We are particularly looking for regular Viola and Brass players. However,\n        if you would like to be added to our list of deps, please get in touch\n        via email or drop us a Facebook message.\n      <p class="fb wide">\n        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRoathChamber&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>\n      <p class="fb narrow">\n        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRoathChamber&tabs&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="300" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>\n      <p>\n        Email:\n        <a href="mailto:roathchamber@gmail.com">roathchamber@gmail.com</a>\n    </section>\n  </div>'),i().prependTo(".t1"),e().appendTo(document.body),/** Prepare 10 year video autoplay on scroll in */function(){var l=document.querySelector(".tenYears video");if(!l)throw Error("Couldn't find ten year video");if(!(l instanceof HTMLVideoElement))throw Error("Invalid ten year element type");l.currentTime=2,// can only play pause without input event if muted
l.muted=!0,l.controls=!1,new IntersectionObserver(function(a){1!=a.length&&console.warn("Expected 1 entry, got ".concat(a.length)),a.forEach(function(a){a.isIntersecting?(l.play(),l.controls=!0):l.pause()})},{threshold:0,rootMargin:"-50% 0% -40%"}).observe(l)}(),B("#logo",{width:["100vmin","100px"]},{timeRange:"exit 0% 50%",fill:"both",easing:"linear"}),B(".logoWrap",{height:["80lvh","100px"]},{timeRange:"exit 10% 100%",fill:"both",easing:"linear"}),B(".upcomingCover",[{visibility:"visible",opacity:1},{visibility:"hidden",opacity:0}],{timeRange:"exit 40% 100%",fill:"both",easing:"linear"}),B("nav",[{visibility:"hidden",opacity:0},{visibility:"visible",opacity:1}],{timeRange:"exit 40% 100%",fill:"both",easing:"linear"}),B(".posters",// { marginTop: ["0%", "-120%"] },
{marginTop:["-25lvh","25lvh"]},{timeRange:"cover 0% 100%",fill:"both",easing:"linear"}),function(){var l=window.location.hash;if(""!=l){var a=document.querySelector(l);if(a){var p=a.getBoundingClientRect().top;window.scrollTo(0,p)}}}(),function(){if("localhost"==window.location.hostname){var l=new R,a={opacity:100};l.add(a,"opacity",0,100,1).onChange(function(){document.body.style.setProperty("--debug-opacity",a.opacity+"%")})}}()}()})}();