function l(l){return l&&l.__esModule?l.default:l}var a,p,A={};a="undefined"!=typeof window?window:A,p=function(l,a){var p,A=[],W=Object.getPrototypeOf,t=A.slice,F=A.flat?function(l){return A.flat.call(l)}:function(l){return A.concat.apply([],l)},B=A.push,e=A.indexOf,i={},n=i.toString,S=i.hasOwnProperty,r=S.toString,L=r.call(Object),o={},s=function(l){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof l&&"number"!=typeof l.nodeType&&"function"!=typeof l.item},g=function(l){return null!=l&&l===l.window},c=l.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function h(l,a,p){var A,W,t=(p=p||c).createElement("script");if(t.text=l,a)for(A in u)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(W=a[A]||a.getAttribute&&a.getAttribute(A))&&t.setAttribute(A,W);p.head.appendChild(t).parentNode.removeChild(t)}function d(l){return null==l?l+"":"object"==typeof l||"function"==typeof l?i[n.call(l)]||"object":typeof l}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var C="3.7.1",f=/HTML$/i,I=function(l,a){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new I.fn.init(l,a)};function E(l){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var a=!!l&&"length"in l&&l.length,p=d(l);return!(s(l)||g(l))&&("array"===p||0===a||"number"==typeof a&&a>0&&a-1 in l)}function v(l,a){return l.nodeName&&l.nodeName.toLowerCase()===a.toLowerCase()}I.fn=I.prototype={// The current version of jQuery being used
jquery:C,constructor:I,// The default length of a jQuery object is 0
length:0,toArray:function(){return t.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(l){return(// Return all the elements in a clean array
null==l?t.call(this):l<0?this[l+this.length]:this[l])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(l){// Build a new jQuery matched element set
var a=I.merge(this.constructor(),l);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
a.prevObject=this,a)},// Execute a callback for every element in the matched set.
each:function(l){return I.each(this,l)},map:function(l){return this.pushStack(I.map(this,function(a,p){return l.call(a,p,a)}))},slice:function(){return this.pushStack(t.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(I.grep(this,function(l,a){return(a+1)%2}))},odd:function(){return this.pushStack(I.grep(this,function(l,a){return a%2}))},eq:function(l){var a=this.length,p=+l+(l<0?a:0);return this.pushStack(p>=0&&p<a?[this[p]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:B,sort:A.sort,splice:A.splice},I.extend=I.fn.extend=function(){var l,a,p,A,W,t,F=arguments[0]||{},B=1,e=arguments.length,i=!1;for("boolean"==typeof F&&(i=F,// Skip the boolean and the target
F=arguments[B]||{},B++),"object"==typeof F||s(F)||(F={}),B===e&&(F=this,B--);B<e;B++)// Only deal with non-null/undefined values
if(null!=(l=arguments[B]))for(a in l)A=l[a],"__proto__"!==a&&F!==A&&(i&&A&&(I.isPlainObject(A)||(W=Array.isArray(A)))?(p=F[a],t=W&&!Array.isArray(p)?[]:W||I.isPlainObject(p)?p:{},W=!1,// Never move original objects, clone them
F[a]=I.extend(i,t,A)):void 0!==A&&(F[a]=A));// Return the modified object
return F},I.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(C+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(l){throw Error(l)},noop:function(){},isPlainObject:function(l){var a,p;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!l&&"[object Object]"===n.call(l)&&(!(a=W(l))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(p=S.call(a,"constructor")&&a.constructor)&&r.call(p)===L))},isEmptyObject:function(l){var a;for(a in l)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(l,a,p){h(l,{nonce:a&&a.nonce},p)},each:function(l,a){var p,A=0;if(E(l))for(p=l.length;A<p&&!1!==a.call(l[A],A,l[A]);A++);else for(A in l)if(!1===a.call(l[A],A,l[A]))break;return l},// Retrieve the text value of an array of DOM nodes
text:function(l){var a,p="",A=0,W=l.nodeType;if(!W)for(;a=l[A++];)p+=I.text(a);return 1===W||11===W?l.textContent:9===W?l.documentElement.textContent:3===W||4===W?l.nodeValue:p},// results is for internal usage only
makeArray:function(l,a){var p=a||[];return null!=l&&(E(Object(l))?I.merge(p,"string"==typeof l?[l]:l):B.call(p,l)),p},inArray:function(l,a,p){return null==a?-1:e.call(a,l,p)},isXMLDoc:function(l){var a=l&&l.namespaceURI,p=l&&(l.ownerDocument||l).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!f.test(a||p&&p.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(l,a){for(var p=+a.length,A=0,W=l.length;A<p;A++)l[W++]=a[A];return l.length=W,l},grep:function(l,a,p){// Go through the array, only saving the items
// that pass the validator function
for(var A=[],W=0,t=l.length,F=!p;W<t;W++)!a(l[W],W)!==F&&A.push(l[W]);return A},// arg is for internal usage only
map:function(l,a,p){var A,W,t=0,B=[];// Go through the array, translating each of the items to their new values
if(E(l))for(A=l.length;t<A;t++)null!=(W=a(l[t],t,p))&&B.push(W);else for(t in l)null!=(W=a(l[t],t,p))&&B.push(W);// Flatten any nested arrays
return F(B)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:o}),"function"==typeof Symbol&&(I.fn[Symbol.iterator]=A[Symbol.iterator]),// Populate the class2type map
I.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(l,a){i["[object "+a+"]"]=a.toLowerCase()});var m=A.pop,Q=A.sort,y=A.splice,w="[\\x20\\t\\r\\n\\f]",b=RegExp("^"+w+"+|((?:^|[^\\\\])(?:\\\\.)*)"+w+"+$","g");// Note: an element does not contain itself
I.contains=function(l,a){var p=a&&a.parentNode;return l===p||!!(p&&1===p.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(l.contains?l.contains(p):l.compareDocumentPosition&&16&l.compareDocumentPosition(p)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var k=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function K(l,a){return a?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===l?"�":l.slice(0,-1)+"\\"+l.charCodeAt(l.length-1).toString(16)+" ":"\\"+l}I.escapeSelector=function(l){return(l+"").replace(k,K)},function(){var a,p,W,F,i,n,r,L,s,g,u=B,h=I.expando,d=0,C=0,f=ll(),E=ll(),k=ll(),K=ll(),U=function(l,a){return l===a&&(i=!0),0},q="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
x="(?:\\\\[\\da-fA-F]{1,6}"+w+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",M="\\["+w+"*("+x+")(?:"+w+// Operator (capture 2)
"*([*^$|!~]?=)"+w+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+x+"))|)"+w+"*\\]",R=":("+x+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",D=RegExp(w+"+","g"),V=RegExp("^"+w+"*,"+w+"*"),T=RegExp("^"+w+"*([>+~]|"+w+")"+w+"*"),J=RegExp(w+"|>"),X=new RegExp(R),G=RegExp("^"+x+"$"),Y={ID:RegExp("^#("+x+")"),CLASS:RegExp("^\\.("+x+")"),TAG:RegExp("^("+x+"|[*])"),ATTR:RegExp("^"+M),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+w+"*(even|odd|(([+-]|)(\\d*)n|)"+w+"*(?:([+-]|)"+w+"*(\\d+)|))"+w+"*\\)|)","i"),bool:RegExp("^(?:"+q+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+w+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+w+"*((?:-\\d)?\\d*)"+w+"*\\)|)(?=[^-]|$)","i")},Z=/^(?:input|select|textarea|button)$/i,z=/^h\d$/i,P=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,N=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
H=RegExp("\\\\[\\da-fA-F]{1,6}"+w+"?|\\\\([^\\r\\n\\f])","g"),O=function(l,a){var p="0x"+l.slice(1)-65536;return a||(p<0?String.fromCharCode(p+65536):String.fromCharCode(p>>10|55296,1023&p|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
j=function(){lF()},_=ln(function(l){return!0===l.disabled&&v(l,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{u.apply(A=t.call(c.childNodes),c.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
A[c.childNodes.length].nodeType}catch(l){u={apply:function(l,a){B.apply(l,t.call(a))},call:function(l){B.apply(l,t.call(arguments,1))}}}function $(l,a,p,A){var W,t,F,B,e,i,S,r=a&&a.ownerDocument,g=a?a.nodeType:9;// Return early from calls with invalid selector or context
if(p=p||[],"string"!=typeof l||!l||1!==g&&9!==g&&11!==g)return p;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!A&&(lF(a),a=a||n,L)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==g&&(e=P.exec(l))){// ID selector
if(W=e[1]){// Document context
if(9===g){if(!(F=a.getElementById(W)))return p;if(F.id===W)return u.call(p,F),p;// Element context
}else // getElementById can match elements by name instead of ID
if(r&&(F=r.getElementById(W))&&$.contains(a,F)&&F.id===W)return u.call(p,F),p}else if(e[2])return u.apply(p,a.getElementsByTagName(l)),p;else if((W=e[3])&&a.getElementsByClassName)return u.apply(p,a.getElementsByClassName(W)),p}// Take advantage of querySelectorAll
if(!K[l+" "]&&(!s||!s.test(l))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(S=l,r=a,1===g&&(J.test(l)||T.test(l))){for(// Expand context for sibling selectors
(r=N.test(l)&&lt(a.parentNode)||a)==a&&o.scope||((B=a.getAttribute("id"))?B=I.escapeSelector(B):a.setAttribute("id",B=h)),t=// Prefix every selector in the list
(i=le(l)).length;t--;)i[t]=(B?"#"+B:":scope")+" "+li(i[t]);S=i.join(",")}try{return u.apply(p,r.querySelectorAll(S)),p}catch(a){K(l,!0)}finally{B===h&&a.removeAttribute("id")}}}// All others
return lo(l.replace(b,"$1"),a,p,A)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ll(){var l=[];function a(A,W){return l.push(A+" ")>p.cacheLength&&delete a[l.shift()],a[A+" "]=W}return a}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function la(l){return l[h]=!0,l}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function lp(l){var a=n.createElement("fieldset");try{return!!l(a)}catch(l){return!1}finally{a.parentNode&&a.parentNode.removeChild(a),// release memory in IE
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
 */function lF(l){var a,A=l?l.ownerDocument||l:c;return A!=n&&9===A.nodeType&&A.documentElement&&(r=// Update global variables
(n=A).documentElement,L=!I.isXMLDoc(n),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
g=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
c!=n&&(a=n.defaultView)&&a.top!==a&&a.addEventListener("unload",j),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
o.getById=lp(function(l){return r.appendChild(l).id=I.expando,!n.getElementsByName||!n.getElementsByName(I.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
o.disconnectedMatch=lp(function(l){return g.call(l,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
o.scope=lp(function(){return n.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
o.cssHas=lp(function(){try{return n.querySelector(":has(*,:jqfake)"),!1}catch(l){return!0}}),o.getById?(p.filter.ID=function(l){var a=l.replace(H,O);return function(l){return l.getAttribute("id")===a}},p.find.ID=function(l,a){if(void 0!==a.getElementById&&L){var p=a.getElementById(l);return p?[p]:[]}}):(p.filter.ID=function(l){var a=l.replace(H,O);return function(l){var p=void 0!==l.getAttributeNode&&l.getAttributeNode("id");return p&&p.value===a}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
p.find.ID=function(l,a){if(void 0!==a.getElementById&&L){var p,A,W,t=a.getElementById(l);if(t){if(// Verify the id attribute
(p=t.getAttributeNode("id"))&&p.value===l)return[t];for(// Fall back on getElementsByName
W=a.getElementsByName(l),A=0;t=W[A++];)if((p=t.getAttributeNode("id"))&&p.value===l)return[t]}return[]}}),// Tag
p.find.TAG=function(l,a){return void 0!==a.getElementsByTagName?a.getElementsByTagName(l):a.querySelectorAll(l)},// Class
p.find.CLASS=function(l,a){if(void 0!==a.getElementsByClassName&&L)return a.getElementsByClassName(l)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
s=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
lp(function(l){var a;r.appendChild(l).innerHTML="<a id='"+h+"' href='' disabled='disabled'></a><select id='"+h+"-\r\\' disabled='disabled'><option selected=''></option></select>",l.querySelectorAll("[selected]").length||s.push("\\["+w+"*(?:value|"+q+")"),l.querySelectorAll("[id~="+h+"-]").length||s.push("~="),l.querySelectorAll("a#"+h+"+*").length||s.push(".#.+[+~]"),l.querySelectorAll(":checked").length||s.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(a=n.createElement("input")).setAttribute("type","hidden"),l.appendChild(a).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
r.appendChild(l).disabled=!0,2!==l.querySelectorAll(":disabled").length&&s.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(a=n.createElement("input")).setAttribute("name",""),l.appendChild(a),l.querySelectorAll("[name='']").length||s.push("\\["+w+"*name"+w+"*="+w+"*(?:''|\"\")")}),o.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
s.push(":has"),s=s.length&&new RegExp(s.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
U=function(l,a){// Flag for duplicate removal
if(l===a)return i=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var p=!l.compareDocumentPosition-!a.compareDocumentPosition;return p||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(p=(l.ownerDocument||l)==(a.ownerDocument||a)?l.compareDocumentPosition(a):1)||!o.sortDetached&&a.compareDocumentPosition(l)===p?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
l===n||l.ownerDocument==c&&$.contains(c,l)?-1:a===n||a.ownerDocument==c&&$.contains(c,a)?1:F?e.call(F,l)-e.call(F,a):0:4&p?-1:1)}),n}// Add button/input type pseudos
for(a in $.matches=function(l,a){return $(l,null,null,a)},$.matchesSelector=function(l,a){if(lF(l),L&&!K[a+" "]&&(!s||!s.test(a)))try{var p=g.call(l,a);// IE 9's matchesSelector returns false on disconnected nodes
if(p||o.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
l.document&&11!==l.document.nodeType)return p}catch(l){K(a,!0)}return $(a,n,null,[l]).length>0},$.contains=function(l,a){return(l.ownerDocument||l)!=n&&lF(l),I.contains(l,a)},$.attr=function(l,a){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(l.ownerDocument||l)!=n&&lF(l);var A=p.attrHandle[a.toLowerCase()],W=A&&S.call(p.attrHandle,a.toLowerCase())?A(l,a,!L):void 0;return void 0!==W?W:l.getAttribute(a)},$.error=function(l){throw Error("Syntax error, unrecognized expression: "+l)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */I.uniqueSort=function(l){var a,p=[],A=0,W=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
i=!o.sortStable,F=!o.sortStable&&t.call(l,0),Q.call(l,U),i){for(;a=l[W++];)a===l[W]&&(A=p.push(W));for(;A--;)y.call(l,p[A],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
F=null,l)},I.fn.uniqueSort=function(){return this.pushStack(I.uniqueSort(t.apply(this)))},(p=I.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:la,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(l){return l[1]=l[1].replace(H,O),// Move the given value to match[3] whether quoted or unquoted
l[3]=(l[3]||l[4]||l[5]||"").replace(H,O),"~="===l[2]&&(l[3]=" "+l[3]+" "),l.slice(0,4)},CHILD:function(l){return(/* matches from matchExpr["CHILD"]
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
l[0]=l[0].slice(0,a),l[2]=p.slice(0,a)),l.slice(0,3))}},filter:{TAG:function(l){var a=l.replace(H,O).toLowerCase();return"*"===l?function(){return!0}:function(l){return v(l,a)}},CLASS:function(l){var a=f[l+" "];return a||(a=RegExp("(^|"+w+")"+l+"("+w+"|$)"),f(l,function(l){return a.test("string"==typeof l.className&&l.className||void 0!==l.getAttribute&&l.getAttribute("class")||"")}))},ATTR:function(l,a,p){return function(A){var W=$.attr(A,l);return null==W?"!="===a:!a||((W+="","="===a)?W===p:"!="===a?W!==p:"^="===a?p&&0===W.indexOf(p):"*="===a?p&&W.indexOf(p)>-1:"$="===a?p&&W.slice(-p.length)===p:"~="===a?(" "+W.replace(D," ")+" ").indexOf(p)>-1:"|="===a&&(W===p||W.slice(0,p.length+1)===p+"-"))}},CHILD:function(l,a,p,A,W){var t="nth"!==l.slice(0,3),F="last"!==l.slice(-4),B="of-type"===a;return 1===A&&0===W?function(l){return!!l.parentNode}:function(a,p,e){var i,n,S,r,L,o=t!==F?"nextSibling":"previousSibling",s=a.parentNode,g=B&&a.nodeName.toLowerCase(),c=!e&&!B,u=!1;if(s){// :(first|last|only)-(child|of-type)
if(t){for(;o;){for(S=a;S=S[o];)if(B?v(S,g):1===S.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
L=o="only"===l&&!L&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(L=[F?s.firstChild:s.lastChild],F&&c){for(u=(r=(i=// Seek `elem` from a previously-cached index
(n=s[h]||(s[h]={}))[l]||[])[0]===d&&i[1])&&i[2],S=r&&s.childNodes[r];S=++r&&S&&S[o]||// Fallback to seeking `elem` from the start
(u=r=0)||L.pop();)if(1===S.nodeType&&++u&&S===a){n[l]=[d,r,u];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(c&&(u=r=(i=(n=a[h]||(a[h]={}))[l]||[])[0]===d&&i[1]),!1===u)// Use the same loop as above to seek `elem` from the start
for(;(S=++r&&S&&S[o]||(u=r=0)||L.pop())&&(!((B?v(S,g):1===S.nodeType)&&++u)||(c&&((n=S[h]||(S[h]={}))[l]=[d,u]),S!==a)););return(// Incorporate the offset, then check against cycle size
(u-=W)===A||u%A==0&&u/A>=0)}}},PSEUDO:function(l,a){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var A,W=p.pseudos[l]||p.setFilters[l.toLowerCase()]||$.error("unsupported pseudo: "+l);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
W[h]?W(a):W.length>1?(A=[l,l,"",a],p.setFilters.hasOwnProperty(l.toLowerCase())?la(function(l,p){for(var A,t=W(l,a),F=t.length;F--;)A=e.call(l,t[F]),l[A]=!(p[A]=t[F])}):function(l){return W(l,0,A)}):W)}},pseudos:{// Potentially complex pseudos
not:la(function(l){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var a=[],p=[],A=lL(l.replace(b,"$1"));return A[h]?la(function(l,a,p,W){// Match elements unmatched by `matcher`
for(var t,F=A(l,null,W,[]),B=l.length;B--;)(t=F[B])&&(l[B]=!(a[B]=t))}):function(l,W,t){return a[0]=l,A(a,null,t,p),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
a[0]=null,!p.pop()}}),has:la(function(l){return function(a){return $(l,a).length>0}}),contains:la(function(l){return l=l.replace(H,O),function(a){return(a.textContent||I.text(a)).indexOf(l)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:la(function(l){return G.test(l||"")||$.error("unsupported lang: "+l),l=l.replace(H,O).toLowerCase(),function(a){var p;do if(p=L?a.lang:a.getAttribute("xml:lang")||a.getAttribute("lang"))return(p=p.toLowerCase())===l||0===p.indexOf(l+"-");while((a=a.parentNode)&&1===a.nodeType)return!1}}),// Miscellaneous
target:function(a){var p=l.location&&l.location.hash;return p&&p.slice(1)===a.id},root:function(l){return l===r},focus:function(l){return l===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return n.activeElement}catch(l){}}()&&n.hasFocus()&&!!(l.type||l.href||~l.tabIndex)},// Boolean properties
enabled:lA(!1),disabled:lA(!0),checked:function(l){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return v(l,"input")&&!!l.checked||v(l,"option")&&!!l.selected},selected:function(l){return l.parentNode&&l.parentNode.selectedIndex,!0===l.selected},// Contents
empty:function(l){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(l=l.firstChild;l;l=l.nextSibling)if(l.nodeType<6)return!1;return!0},parent:function(l){return!p.pseudos.empty(l)},// Element/input types
header:function(l){return z.test(l.nodeName)},input:function(l){return Z.test(l.nodeName)},button:function(l){return v(l,"input")&&"button"===l.type||v(l,"button")},text:function(l){var a;return v(l,"input")&&"text"===l.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(a=l.getAttribute("type"))||"text"===a.toLowerCase())},// Position-in-collection
first:lW(function(){return[0]}),last:lW(function(l,a){return[a-1]}),eq:lW(function(l,a,p){return[p<0?p+a:p]}),even:lW(function(l,a){for(var p=0;p<a;p+=2)l.push(p);return l}),odd:lW(function(l,a){for(var p=1;p<a;p+=2)l.push(p);return l}),lt:lW(function(l,a,p){var A;for(A=p<0?p+a:p>a?a:p;--A>=0;)l.push(A);return l}),gt:lW(function(l,a,p){for(var A=p<0?p+a:p;++A<a;)l.push(A);return l})}}).pseudos.nth=p.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})p.pseudos[a]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(l){return function(a){return v(a,"input")&&a.type===l}}(a);for(a in{submit:!0,reset:!0})p.pseudos[a]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(l){return function(a){return(v(a,"input")||v(a,"button"))&&a.type===l}}(a);// Easy API for creating new setFilters
function lB(){}function le(l,a){var A,W,t,F,B,e,i,n=E[l+" "];if(n)return a?0:n.slice(0);for(B=l,e=[],i=p.preFilter;B;){// Filters
for(F in(!A||(W=V.exec(B)))&&(W&&(B=B.slice(W[0].length)||B),e.push(t=[])),A=!1,(W=T.exec(B))&&(A=W.shift(),t.push({value:A,// Cast descendant combinators to space
type:W[0].replace(b," ")}),B=B.slice(A.length)),p.filter)(W=Y[F].exec(B))&&(!i[F]||(W=i[F](W)))&&(A=W.shift(),t.push({value:A,type:F,matches:W}),B=B.slice(A.length));if(!A)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
a?B.length:B?$.error(l):E(l,e).slice(0))}function li(l){for(var a=0,p=l.length,A="";a<p;a++)A+=l[a].value;return A}function ln(l,a,p){var A=a.dir,W=a.next,t=W||A,F=p&&"parentNode"===t,B=C++;return a.first?function(a,p,W){for(;a=a[A];)if(1===a.nodeType||F)return l(a,p,W);return!1}:function(a,p,e){var i,n,S=[d,B];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(e){for(;a=a[A];)if((1===a.nodeType||F)&&l(a,p,e))return!0}else for(;a=a[A];)if(1===a.nodeType||F){if(n=a[h]||(a[h]={}),W&&v(a,W))a=a[A]||a;else{if((i=n[t])&&i[0]===d&&i[1]===B)return S[2]=i[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
n[t]=S,S[2]=l(a,p,e))return!0}}return!1}}function lS(l){return l.length>1?function(a,p,A){for(var W=l.length;W--;)if(!l[W](a,p,A))return!1;return!0}:l[0]}function lr(l,a,p,A,W){for(var t,F=[],B=0,e=l.length,i=null!=a;B<e;B++)(t=l[B])&&(!p||p(t,A,W))&&(F.push(t),i&&a.push(B));return F}function lL(l,a/* Internal Use Only */){var A,t,F,B,i=[],S=[],r=k[l+" "];if(!r){for(a||(a=le(l)),B=a.length;B--;)(r=function l(a){for(var A,t,F,B=a.length,i=p.relative[a[0].type],n=i||p.relative[" "],S=i?1:0,r=ln(function(l){return l===A},n,!0),L=ln(function(l){return e.call(A,l)>-1},n,!0),o=[function(l,a,p){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var t=!i&&(p||a!=W)||((A=a).nodeType?r(l,a,p):L(l,a,p));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
A=null,t)}];S<B;S++)if(t=p.relative[a[S].type])o=[ln(lS(o),t)];else{// Return special upon seeing a positional matcher
if((t=p.filter[a[S].type].apply(null,a[S].matches))[h]){for(// Find the next relative operator (if any) for proper handling
F=++S;F<B&&!p.relative[a[F].type];F++);return function l(a,p,A,W,t,F){return W&&!W[h]&&(W=l(W)),t&&!t[h]&&(t=l(t,F)),la(function(l,F,B,i){var n,S,r,L,o=[],s=[],g=F.length,c=l||function(l,a,p){for(var A=0,W=a.length;A<W;A++)$(l,a[A],p);return p}(p||"*",B.nodeType?[B]:B,[]),h=a&&(l||!p)?lr(c,o,a,B,i):c;// Apply postFilter
if(A?// Find primary matches
A(h,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
L=t||(l?a:g||W)?[]:F,B,i):L=h,W)for(n=lr(L,s),W(n,[],B,i),// Un-match failing elements by moving them back to matcherIn
S=n.length;S--;)(r=n[S])&&(L[s[S]]=!(h[s[S]]=r));if(l){if(t||a){if(t){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
n=[],S=L.length;S--;)(r=L[S])&&n.push(h[S]=r);t(null,L=[],n,i)}for(// Move matched elements from seed to results to keep them synchronized
S=L.length;S--;)(r=L[S])&&(n=t?e.call(l,r):o[S])>-1&&(l[n]=!(F[n]=r))}}else L=lr(L===F?L.splice(g,L.length):L),t?t(null,F,L,i):u.apply(F,L)})}(S>1&&lS(o),S>1&&li(a.slice(0,S-1).concat({value:" "===a[S-2].type?"*":""})).replace(b,"$1"),t,S<F&&l(a.slice(S,F)),F<B&&l(a=a.slice(F)),F<B&&li(a))}o.push(t)}return lS(o)}(a[B]))[h]?i.push(r):S.push(r);// Save selector and tokenization
// Cache the compiled function
(r=k(l,(A=i.length>0,t=S.length>0,F=function(l,a,F,B,e){var r,o,s,g=0,c="0",h=l&&[],C=[],f=W,E=l||t&&p.find.TAG("*",e),v=d+=null==f?1:Math.random()||.1,Q=E.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(e&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(W=a==n||a||e);c!==Q&&null!=(r=E[c]);c++){if(t&&r){for(o=0,a||r.ownerDocument==n||(lF(r),F=!L);s=S[o++];)if(s(r,a||n,F)){u.call(B,r);break}e&&(d=v)}// Track unmatched elements for set filters
A&&((r=!s&&r)&&g--,l&&h.push(r))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
g+=c,A&&c!==g){for(o=0;s=i[o++];)s(h,C,a,F);if(l){// Reintegrate element matches to eliminate the need for sorting
if(g>0)for(;c--;)h[c]||C[c]||(C[c]=m.call(B));// Discard index placeholder values to get only actual matches
C=lr(C)}// Add matches to results
u.apply(B,C),e&&!l&&C.length>0&&g+i.length>1&&I.uniqueSort(B)}return e&&(d=v,W=f),h},A?la(F):F))).selector=l}return r}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function lo(l,a,A,W){var t,F,B,e,i,n="function"==typeof l&&l,S=!W&&le(l=n.selector||l);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(A=A||[],1===S.length){if(// Reduce context if the leading compound selector is an ID
(F=S[0]=S[0].slice(0)).length>2&&"ID"===(B=F[0]).type&&9===a.nodeType&&L&&p.relative[F[1].type]){if(!(a=(p.find.ID(B.matches[0].replace(H,O),a)||[])[0]))return A;n&&(a=a.parentNode),l=l.slice(F.shift().value.length)}for(// Fetch a seed set for right-to-left matching
t=Y.needsContext.test(l)?0:F.length;// Abort if we hit a combinator
t--&&(B=F[t],!p.relative[e=B.type]);)if((i=p.find[e])&&(W=i(B.matches[0].replace(H,O),N.test(F[0].type)&&lt(a.parentNode)||a))){if(// If seed is empty or no tokens remain, we can return early
F.splice(t,1),!(l=W.length&&li(F)))return u.apply(A,W),A;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(n||lL(l,S))(W,a,!L,A,!a||N.test(l)&&lt(a.parentNode)||a),A)}lB.prototype=p.filters=p.pseudos,p.setFilters=new lB,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
o.sortStable=h.split("").sort(U).join("")===h,// Initialize against the default document
lF(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
o.sortDetached=lp(function(l){// Should return 1, but returns 4 (following)
return 1&l.compareDocumentPosition(n.createElement("fieldset"))}),I.find=$,// Deprecated
I.expr[":"]=I.expr.pseudos,I.unique=I.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
$.compile=lL,$.select=lo,$.setDocument=lF,$.tokenize=le,$.escape=I.escapeSelector,$.getText=I.text,$.isXML=I.isXMLDoc,$.selectors=I.expr,$.support=I.support,$.uniqueSort=I.uniqueSort;/* eslint-enable */}();var U=function(l,a,p){for(var A=[],W=void 0!==p;(l=l[a])&&9!==l.nodeType;)if(1===l.nodeType){if(W&&I(l).is(p))break;A.push(l)}return A},q=function(l,a){for(var p=[];l;l=l.nextSibling)1===l.nodeType&&l!==a&&p.push(l);return p},x=I.expr.match.needsContext,M=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function R(l,a,p){return s(a)?I.grep(l,function(l,A){return!!a.call(l,A,l)!==p}):a.nodeType?I.grep(l,function(l){return l===a!==p}):"string"!=typeof a?I.grep(l,function(l){return e.call(a,l)>-1!==p}):I.filter(a,l,p)}I.filter=function(l,a,p){var A=a[0];return(p&&(l=":not("+l+")"),1===a.length&&1===A.nodeType)?I.find.matchesSelector(A,l)?[A]:[]:I.find.matches(l,I.grep(a,function(l){return 1===l.nodeType}))},I.fn.extend({find:function(l){var a,p,A=this.length,W=this;if("string"!=typeof l)return this.pushStack(I(l).filter(function(){for(a=0;a<A;a++)if(I.contains(W[a],this))return!0}));for(a=0,p=this.pushStack([]);a<A;a++)I.find(l,W[a],p);return A>1?I.uniqueSort(p):p},filter:function(l){return this.pushStack(R(this,l||[],!1))},not:function(l){return this.pushStack(R(this,l||[],!0))},is:function(l){return!!R(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof l&&x.test(l)?I(l):l||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var D,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
V=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(I.fn.init=function(l,a,p){var A,W;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!l)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
p=p||D,"string"==typeof l){// Match html or make sure no context is specified for #id
if((A="<"===l[0]&&">"===l[l.length-1]&&l.length>=3?[null,l,null]:V.exec(l))&&(A[1]||!a)){// HANDLE: $(html) -> $(array)
if(!A[1])return(W=c.getElementById(A[2]))&&(// Inject the element directly into the jQuery object
this[0]=W,this.length=1),this;// HANDLE: $(html, props)
if(a=a instanceof I?a[0]:a,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
I.merge(this,I.parseHTML(A[1],a&&a.nodeType?a.ownerDocument||a:c,!0)),M.test(A[1])&&I.isPlainObject(a))for(A in a)s(this[A])?this[A](a[A]):this.attr(A,a[A]);return this}return!a||a.jquery?(a||p).find(l):this.constructor(a).find(l);// HANDLE: $(DOMElement)
}return l.nodeType?(this[0]=l,this.length=1,this):s(l)?void 0!==p.ready?p.ready(l):l(I):I.makeArray(l,this)}).prototype=I.fn,// Initialize central reference
D=I(c);var T=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};function X(l,a){for(;(l=l[a])&&1!==l.nodeType;);return l}I.fn.extend({has:function(l){var a=I(l,this),p=a.length;return this.filter(function(){for(var l=0;l<p;l++)if(I.contains(this,a[l]))return!0})},closest:function(l,a){var p,A=0,W=this.length,t=[],F="string"!=typeof l&&I(l);// Positional selectors never match, since there's no _selection_ context
if(!x.test(l)){for(;A<W;A++)for(p=this[A];p&&p!==a;p=p.parentNode)if(p.nodeType<11&&(F?F.index(p)>-1:1===p.nodeType&&I.find.matchesSelector(p,l))){t.push(p);break}}return this.pushStack(t.length>1?I.uniqueSort(t):t)},// Determine the position of an element within the set
index:function(l){return(// No argument, return index in parent
l?"string"==typeof l?e.call(I(l),this[0]):e.call(this,l.jquery?l[0]:l):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(l,a){return this.pushStack(I.uniqueSort(I.merge(this.get(),I(l,a))))},addBack:function(l){return this.add(null==l?this.prevObject:this.prevObject.filter(l))}}),I.each({parent:function(l){var a=l.parentNode;return a&&11!==a.nodeType?a:null},parents:function(l){return U(l,"parentNode")},parentsUntil:function(l,a,p){return U(l,"parentNode",p)},next:function(l){return X(l,"nextSibling")},prev:function(l){return X(l,"previousSibling")},nextAll:function(l){return U(l,"nextSibling")},prevAll:function(l){return U(l,"previousSibling")},nextUntil:function(l,a,p){return U(l,"nextSibling",p)},prevUntil:function(l,a,p){return U(l,"previousSibling",p)},siblings:function(l){return q((l.parentNode||{}).firstChild,l)},children:function(l){return q(l.firstChild)},contents:function(l){return null!=l.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
W(l.contentDocument)?l.contentDocument:(v(l,"template")&&(l=l.content||l),I.merge([],l.childNodes))}},function(l,a){I.fn[l]=function(p,A){var W=I.map(this,a,p);return"Until"!==l.slice(-5)&&(A=p),A&&"string"==typeof A&&(W=I.filter(A,W)),this.length>1&&(J[l]||I.uniqueSort(W),T.test(l)&&W.reverse()),this.pushStack(W)}});var G=/[^\x20\t\r\n\f]+/g;function Y(l){return l}function Z(l){throw l}function z(l,a,p,A){var W;try{// Check for promise aspect first to privilege synchronous behavior
l&&s(W=l.promise)?W.call(l).done(a).fail(p):l&&s(W=l.then)?W.call(l,a,p):// * false: [ value ].slice( 0 ) => resolve( value )
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
 */I.Callbacks=function(l){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
l="string"==typeof l?(a=l,p={},I.each(a.match(G)||[],function(l,a){p[a]=!0}),p):I.extend({},l);var a,p,A,W,t,F,B=[],e=[],i=-1,n=function(){for(// Enforce single-firing
F=F||l.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
t=A=!0;e.length;i=-1)for(W=e.shift();++i<B.length;)!1===B[i].apply(W[0],W[1])&&l.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
i=B.length,W=!1);l.memory||(W=!1),A=!1,F&&(B=W?[]:"")},S={// Add a callback or a collection of callbacks to the list
add:function(){return B&&(W&&!A&&(i=B.length-1,e.push(W)),function a(p){I.each(p,function(p,A){s(A)?l.unique&&S.has(A)||B.push(A):A&&A.length&&"string"!==d(A)&&a(A)})}(arguments),W&&!A&&n()),this},// Remove a callback from the list
remove:function(){return I.each(arguments,function(l,a){for(var p;(p=I.inArray(a,B,p))>-1;)B.splice(p,1),p<=i&&i--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(l){return l?I.inArray(l,B)>-1:B.length>0},// Remove all callbacks from the list
empty:function(){return B&&(B=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return F=e=[],B=W="",this},disabled:function(){return!B},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return F=e=[],W||A||(B=W=""),this},locked:function(){return!!F},// Call all callbacks with the given context and arguments
fireWith:function(l,a){return F||(a=[l,(a=a||[]).slice?a.slice():a],e.push(a),A||n()),this},// Call all the callbacks with the given arguments
fire:function(){return S.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!t}};return S},I.extend({Deferred:function(a){var p=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",I.Callbacks("memory"),I.Callbacks("memory"),2],["resolve","done",I.Callbacks("once memory"),I.Callbacks("once memory"),0,"resolved"],["reject","fail",I.Callbacks("once memory"),I.Callbacks("once memory"),1,"rejected"]],A="pending",W={state:function(){return A},always:function(){return t.done(arguments).fail(arguments),this},catch:function(l){return W.then(null,l)},// Keep pipe for back-compat
pipe:function(){var l=arguments;return I.Deferred(function(a){I.each(p,function(p,A){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var W=s(l[A[4]])&&l[A[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
t[A[1]](function(){var l=W&&W.apply(this,arguments);l&&s(l.promise)?l.promise().progress(a.notify).done(a.resolve).fail(a.reject):a[A[0]+"With"](this,W?[l]:arguments)})}),l=null}).promise()},then:function(a,A,W){var t=0;function F(a,p,A,W){return function(){var B=this,e=arguments,i=function(){var l,i;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(a<t)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((l=A.apply(B,e))===p.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
s(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
i=l&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof l||"function"==typeof l)&&l.then)?W?i.call(l,F(t,p,Y,W),F(t,p,Z,W)):(// ...and disregard older resolution values
t++,i.call(l,F(t,p,Y,W),F(t,p,Z,W),F(t,p,Y,p.notifyWith))):(A!==Y&&(B=void 0,e=[l]),// Process the value(s)
// Default process is resolve
(W||p.resolveWith)(B,e))}},n=W?i:function(){try{i()}catch(l){I.Deferred.exceptionHook&&I.Deferred.exceptionHook(l,n.error),a+1>=t&&(A!==Z&&(B=void 0,e=[l]),p.rejectWith(B,e))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
a?n():(I.Deferred.getErrorHook?n.error=I.Deferred.getErrorHook():I.Deferred.getStackHook&&(n.error=I.Deferred.getStackHook()),l.setTimeout(n))}}return I.Deferred(function(l){// progress_handlers.add( ... )
p[0][3].add(F(0,l,s(W)?W:Y,l.notifyWith)),// fulfilled_handlers.add( ... )
p[1][3].add(F(0,l,s(a)?a:Y)),// rejected_handlers.add( ... )
p[2][3].add(F(0,l,s(A)?A:Z))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(l){return null!=l?I.extend(l,W):W}},t={};// All done!
return(// Add list-specific methods
I.each(p,function(l,a){var F=a[2],B=a[5];// promise.progress = list.add
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
when:function(l){var a=arguments.length,p=a,A=Array(p),W=t.call(arguments),F=I.Deferred(),B=function(l){return function(p){A[l]=this,W[l]=arguments.length>1?t.call(arguments):p,--a||F.resolveWith(A,W)}};// Single- and empty arguments are adopted like Promise.resolve
if(a<=1&&(z(l,F.done(B(p)).resolve,F.reject,!a),"pending"===F.state()||s(W[p]&&W[p].then)))return F.then();// Multiple arguments are aggregated like Promise.all array elements
for(;p--;)z(W[p],B(p),F.reject);return F.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
I.Deferred.exceptionHook=function(a,p){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
l.console&&l.console.warn&&a&&P.test(a.name)&&l.console.warn("jQuery.Deferred exception: "+a.message,a.stack,p)},I.readyException=function(a){l.setTimeout(function(){throw a})};// The deferred used on DOM ready
var N=I.Deferred();// The ready event handler and self cleanup method
function H(){c.removeEventListener("DOMContentLoaded",H),l.removeEventListener("load",H),I.ready()}I.fn.ready=function(l){return N.then(l)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(l){I.readyException(l)}),this},I.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(l){// Abort if there are pending holds or we're already ready
!(!0===l?--I.readyWait:I.isReady)&&(// Remember that the DOM is ready
I.isReady=!0,!0!==l&&--I.readyWait>0||// If there are functions bound, to execute
N.resolveWith(c,[I]))}}),I.ready.then=N.then,"complete"!==c.readyState&&("loading"===c.readyState||c.documentElement.doScroll)?(// Use the handy event callback
c.addEventListener("DOMContentLoaded",H),// A fallback to window.onload, that will always work
l.addEventListener("load",H)):l.setTimeout(I.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var O=function(l,a,p,A,W,t,F){var B=0,e=l.length,i=null==p;// Sets many values
if("object"===d(p))for(B in W=!0,p)O(l,a,B,p[B],!0,t,F);else if(void 0!==A&&(W=!0,s(A)||(F=!0),i&&(F?(a.call(l,A),a=null):(i=a,a=function(l,a,p){return i.call(I(l),p)})),a))for(;B<e;B++)a(l[B],p,F?A:A.call(l[B],B,a(l[B],p)));return W?l:i?a.call(l):e?a(l[0],p):t},j=/^-ms-/,_=/-([a-z])/g;// Used by camelCase as callback to replace()
function $(l,a){return a.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function ll(l){return l.replace(j,"ms-").replace(_,$)}var la=function(l){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===l.nodeType||9===l.nodeType||!+l.nodeType};function lp(){this.expando=I.expando+lp.uid++}lp.uid=1,lp.prototype={cache:function(l){// Check if the owner object already has a cache
var a=l[this.expando];return!a&&(a={},la(l)&&(l.nodeType?l[this.expando]=a:Object.defineProperty(l,this.expando,{value:a,configurable:!0}))),a},set:function(l,a,p){var A,W=this.cache(l);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof a)W[ll(a)]=p;else for(A in a)W[ll(A)]=a[A];return W},get:function(l,a){return void 0===a?this.cache(l):l[this.expando]&&l[this.expando][ll(a)]},access:function(l,a,p){return(// In cases where either:
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
a=Array.isArray(a)?a.map(ll):((a=ll(a))in A)?[a]:a.match(G)||[]).length;p--;)delete A[a[p]];// Remove the expando if there's no more data
(void 0===a||I.isEmptyObject(A))&&(l.nodeType?l[this.expando]=void 0:delete l[this.expando])}},hasData:function(l){var a=l[this.expando];return void 0!==a&&!I.isEmptyObject(a)}};var lA=new lp,lW=new lp,lt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,lF=/[A-Z]/g;function lB(l,a,p){var A,W;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===p&&1===l.nodeType){if(A="data-"+a.replace(lF,"-$&").toLowerCase(),"string"==typeof(p=l.getAttribute(A))){try{W=p,p="true"===W||"false"!==W&&("null"===W?null:W===+W+""?+W:lt.test(W)?JSON.parse(W):W)}catch(l){}// Make sure we set the data so it isn't changed later
lW.set(l,a,p)}else p=void 0}return p}I.extend({hasData:function(l){return lW.hasData(l)||lA.hasData(l)},data:function(l,a,p){return lW.access(l,a,p)},removeData:function(l,a){lW.remove(l,a)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(l,a,p){return lA.access(l,a,p)},_removeData:function(l,a){lA.remove(l,a)}}),I.fn.extend({data:function(l,a){var p,A,W,t=this[0],F=t&&t.attributes;// Gets all values
if(void 0===l){if(this.length&&(W=lW.get(t),1===t.nodeType&&!lA.get(t,"hasDataAttrs"))){for(p=F.length;p--;)// The attrs elements can be null (trac-14894)
F[p]&&0===(A=F[p].name).indexOf("data-")&&lB(t,A=ll(A.slice(5)),W[A]);lA.set(t,"hasDataAttrs",!0)}return W}return(// Sets multiple values
"object"==typeof l?this.each(function(){lW.set(this,l)}):O(this,function(a){var p;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(t&&void 0===a)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(p=lW.get(t,l))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(p=lB(t,l))?p:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
lW.set(this,l,a)})},null,a,arguments.length>1,null,!0))},removeData:function(l){return this.each(function(){lW.remove(this,l)})}}),I.extend({queue:function(l,a,p){var A;if(l)return a=(a||"fx")+"queue",A=lA.get(l,a),p&&(!A||Array.isArray(p)?A=lA.access(l,a,I.makeArray(p)):A.push(p)),A||[]},dequeue:function(l,a){a=a||"fx";var p=I.queue(l,a),A=p.length,W=p.shift(),t=I._queueHooks(l,a);"inprogress"===W&&(W=p.shift(),A--),W&&("fx"===a&&p.unshift("inprogress"),// Clear up the last queue stop function
delete t.stop,W.call(l,function(){I.dequeue(l,a)},t)),!A&&t&&t.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(l,a){var p=a+"queueHooks";return lA.get(l,p)||lA.access(l,p,{empty:I.Callbacks("once memory").add(function(){lA.remove(l,[a+"queue",p])})})}}),I.fn.extend({queue:function(l,a){var p=2;return("string"!=typeof l&&(a=l,l="fx",p--),arguments.length<p)?I.queue(this[0],l):void 0===a?this:this.each(function(){var p=I.queue(this,l,a);// Ensure a hooks for this queue
I._queueHooks(this,l),"fx"===l&&"inprogress"!==p[0]&&I.dequeue(this,l)})},dequeue:function(l){return this.each(function(){I.dequeue(this,l)})},clearQueue:function(l){return this.queue(l||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(l,a){var p,A=1,W=I.Deferred(),t=this,F=this.length,B=function(){--A||W.resolveWith(t,[t])};for("string"!=typeof l&&(a=l,l=void 0),l=l||"fx";F--;)(p=lA.get(t[F],l+"queueHooks"))&&p.empty&&(A++,p.empty.add(B));return B(),W.promise(a)}});var le=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,li=RegExp("^(?:([+-])=|)("+le+")([a-z%]*)$","i"),ln=["Top","Right","Bottom","Left"],lS=c.documentElement,lr=function(l){return I.contains(l.ownerDocument,l)},lL={composed:!0};lS.getRootNode&&(lr=function(l){return I.contains(l.ownerDocument,l)||l.getRootNode(lL)===l.ownerDocument});var lo=function(l,a){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(l=a||l).style.display||""===l.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
lr(l)&&"none"===I.css(l,"display")};function ls(l,a,p,A){var W,t,F=20,B=A?function(){return A.cur()}:function(){return I.css(l,a,"")},e=B(),i=p&&p[3]||(I.cssNumber[a]?"":"px"),n=l.nodeType&&(I.cssNumber[a]||"px"!==i&&+e)&&li.exec(I.css(l,a));if(n&&n[3]!==i){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
e/=2,// Trust units reported by jQuery.css
i=i||n[3],// Iteratively approximate from a nonzero starting point
n=+e||1;F--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
I.style(l,a,n+i),(1-t)*(1-(t=B()/e||.5))<=0&&(F=0),n/=t;n*=2,I.style(l,a,n+i),// Make sure we update the tween properties later on
p=p||[]}return p&&(n=+n||+e||0,// Apply relative offset (+=/-=) if specified
W=p[1]?n+(p[1]+1)*p[2]:+p[2],A&&(A.unit=i,A.start=n,A.end=W)),W}var lg={};function lc(l,a){// Determine new display value for elements that need to change
for(var p,A,W=[],t=0,F=l.length;t<F;t++)(A=l[t]).style&&(p=A.style.display,a?("none"!==p||(W[t]=lA.get(A,"display")||null,W[t]||(A.style.display="")),""===A.style.display&&lo(A)&&(W[t]=function(l){var a,p=l.ownerDocument,A=l.nodeName,W=lg[A];return W||(a=p.body.appendChild(p.createElement(A)),W=I.css(a,"display"),a.parentNode.removeChild(a),"none"===W&&(W="block"),lg[A]=W),W}(A))):"none"!==p&&(W[t]="none",// Remember what we're overwriting
lA.set(A,"display",p)));// Set the display of the elements in a second loop to avoid constant reflow
for(t=0;t<F;t++)null!=W[t]&&(l[t].style.display=W[t]);return l}I.fn.extend({show:function(){return lc(this,!0)},hide:function(){return lc(this)},toggle:function(l){return"boolean"==typeof l?l?this.show():this.hide():this.each(function(){lo(this)?I(this).show():I(this).hide()})}});var lu=/^(?:checkbox|radio)$/i,lh=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ld=/^$|^module$|\/(?:java|ecma)script/i;l9=c.createDocumentFragment().appendChild(c.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(l5=c.createElement("input")).setAttribute("type","radio"),l5.setAttribute("checked","checked"),l5.setAttribute("name","t"),l9.appendChild(l5),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
o.checkClone=l9.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
l9.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!l9.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
l9.innerHTML="<option></option>",o.option=!!l9.lastChild;// We have to close these tags to support XHTML (trac-13200)
var lC={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function lf(l,a){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var p;return(p=void 0!==l.getElementsByTagName?l.getElementsByTagName(a||"*"):void 0!==l.querySelectorAll?l.querySelectorAll(a||"*"):[],void 0===a||a&&v(l,a))?I.merge([l],p):p}// Mark scripts as having already been evaluated
function lI(l,a){for(var p=0,A=l.length;p<A;p++)lA.set(l[p],"globalEval",!a||lA.get(a[p],"globalEval"))}lC.tbody=lC.tfoot=lC.colgroup=lC.caption=lC.thead,lC.th=lC.td,o.option||(lC.optgroup=lC.option=[1,"<select multiple='multiple'>","</select>"]);var lE=/<|&#?\w+;/;function lv(l,a,p,A,W){for(var t,F,B,e,i,n=a.createDocumentFragment(),S=[],r=0,L=l.length;r<L;r++)if((t=l[r])||0===t){// Add nodes directly
if("object"===d(t))// push.apply(_, arraylike) throws on ancient WebKit
I.merge(S,t.nodeType?[t]:t);else if(lE.test(t)){for(F=F||n.appendChild(a.createElement("div")),B=lC[(lh.exec(t)||["",""])[1].toLowerCase()]||lC._default,F.innerHTML=B[1]+I.htmlPrefilter(t)+B[2],// Descend through wrappers to the right content
i=B[0];i--;)F=F.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
I.merge(S,F.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(F=n.firstChild).textContent=""}else S.push(a.createTextNode(t))}for(// Remove wrapper from fragment
n.textContent="",r=0;t=S[r++];){// Skip elements already in the context collection (trac-4087)
if(A&&I.inArray(t,A)>-1){W&&W.push(t);continue}// Capture executables
if(e=lr(t),// Append to fragment
F=lf(n.appendChild(t),"script"),e&&lI(F),p)for(i=0;t=F[i++];)ld.test(t.type||"")&&p.push(t)}return n}var lm=/^([^.]*)(?:\.(.+)|)/;function lQ(){return!0}function ly(){return!1}function lw(l,a,p,A,W,t){var F,B;// Types can be a map of types/handlers
if("object"==typeof a){for(B in"string"!=typeof p&&(// ( types-Object, data )
A=A||p,p=void 0),a)lw(l,B,p,A,a[B],t);return l}if(null==A&&null==W?(// ( types, fn )
W=p,A=p=void 0):null==W&&("string"==typeof p?(// ( types, selector, fn )
W=A,A=void 0):(// ( types, data, fn )
W=A,A=p,p=void 0)),!1===W)W=ly;else if(!W)return l;return 1===t&&(F=W,// Use same guid so caller can remove using origFn
(W=function(l){return(// Can use an empty set, since event contains the info
I().off(l),F.apply(this,arguments))}).guid=F.guid||(F.guid=I.guid++)),l.each(function(){I.event.add(this,a,W,A,p)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function lb(l,a,p){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!p){void 0===lA.get(l,a)&&I.event.add(l,a,lQ);return}// Register the controller as a special universal handler for all event namespaces
lA.set(l,a,!1),I.event.add(l,a,{namespace:!1,handler:function(l){var p,A=lA.get(this,a);if(1&l.isTrigger&&this[a]){// Interrupt processing of the outer synthetic .trigger()ed event
if(A)(I.event.special[a]||{}).delegateType&&l.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
A=t.call(arguments),lA.set(this,a,A),// Trigger the native event and capture its result
this[a](),p=lA.get(this,a),lA.set(this,a,!1),A!==p)return(// Cancel the outer synthetic event
l.stopImmediatePropagation(),l.preventDefault(),p)}else A&&(// ...and capture the result
lA.set(this,a,I.event.trigger(A[0],A.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
l.stopPropagation(),l.isImmediatePropagationStopped=lQ)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */I.event={global:{},add:function(l,a,p,A,W){var t,F,B,e,i,n,S,r,L,o,s,g=lA.get(l);// Only attach events to objects that accept data
if(la(l))for(p.handler&&(p=(t=p).handler,W=t.selector),W&&I.find.matchesSelector(lS,W),p.guid||(p.guid=I.guid++),(e=g.events)||(e=g.events=Object.create(null)),(F=g.handle)||(F=g.handle=function(a){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return I.event.triggered!==a.type?I.event.dispatch.apply(l,arguments):void 0}),i=// Handle multiple events separated by a space
(a=(a||"").match(G)||[""]).length;i--;)// There *must* be a type, no attaching namespace-only handlers
L=s=(B=lm.exec(a[i])||[])[1],o=(B[2]||"").split(".").sort(),L&&(// If event changes its type, use the special event handlers for the changed type
S=I.event.special[L]||{},// If selector defined, determine special event api type, otherwise given type
L=(W?S.delegateType:S.bindType)||L,// Update special based on newly reset type
S=I.event.special[L]||{},// handleObj is passed to all event handlers
n=I.extend({type:L,origType:s,data:A,handler:p,guid:p.guid,selector:W,needsContext:W&&I.expr.match.needsContext.test(W),namespace:o.join(".")},t),(r=e[L])||((r=e[L]=[]).delegateCount=0,(!S.setup||!1===S.setup.call(l,A,o,F))&&l.addEventListener&&l.addEventListener(L,F)),S.add&&(S.add.call(l,n),n.handler.guid||(n.handler.guid=p.guid)),W?r.splice(r.delegateCount++,0,n):r.push(n),// Keep track of which events have ever been used, for event optimization
I.event.global[L]=!0)},// Detach an event or set of events from an element
remove:function(l,a,p,A,W){var t,F,B,e,i,n,S,r,L,o,s,g=lA.hasData(l)&&lA.get(l);if(g&&(e=g.events)){for(i=// Once for each type.namespace in types; type may be omitted
(a=(a||"").match(G)||[""]).length;i--;){// Unbind all events (on this namespace, if provided) for the element
if(L=s=(B=lm.exec(a[i])||[])[1],o=(B[2]||"").split(".").sort(),!L){for(L in e)I.event.remove(l,L+a[i],p,A,!0);continue}for(S=I.event.special[L]||{},r=e[L=(A?S.delegateType:S.bindType)||L]||[],B=B[2]&&RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
F=t=r.length;t--;)n=r[t],(W||s===n.origType)&&(!p||p.guid===n.guid)&&(!B||B.test(n.namespace))&&(!A||A===n.selector||"**"===A&&n.selector)&&(r.splice(t,1),n.selector&&r.delegateCount--,S.remove&&S.remove.call(l,n));F&&!r.length&&(S.teardown&&!1!==S.teardown.call(l,o,g.handle)||I.removeEvent(l,L,g.handle),delete e[L])}I.isEmptyObject(e)&&lA.remove(l,"handle events")}},dispatch:function(l){var a,p,A,W,t,F,B=Array(arguments.length),e=I.event.fix(l),i=(lA.get(this,"events")||Object.create(null))[e.type]||[],n=I.event.special[e.type]||{};for(a=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
B[0]=e;a<arguments.length;a++)B[a]=arguments[a];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(e.delegateTarget=this,!n.preDispatch||!1!==n.preDispatch.call(this,e)){for(// Determine handlers
F=I.event.handlers.call(this,e,i),// Run delegates first; they may want to stop propagation beneath us
a=0;(W=F[a++])&&!e.isPropagationStopped();)for(e.currentTarget=W.elem,p=0;(t=W.handlers[p++])&&!e.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!e.rnamespace||!1===t.namespace||e.rnamespace.test(t.namespace))&&(e.handleObj=t,e.data=t.data,void 0!==(A=((I.event.special[t.origType]||{}).handle||t.handler).apply(W.elem,B))&&!1===(e.result=A)&&(e.preventDefault(),e.stopPropagation()));return n.postDispatch&&n.postDispatch.call(this,e),e.result}},handlers:function(l,a){var p,A,W,t,F,B=[],e=a.delegateCount,i=l.target;// Find delegate handlers
if(e&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
i.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===l.type&&l.button>=1)){for(;i!==this;i=i.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===i.nodeType&&!("click"===l.type&&!0===i.disabled)){for(p=0,t=[],F={};p<e;p++)void 0===F[// Don't conflict with Object.prototype properties (trac-13203)
W=(A=a[p]).selector+" "]&&(F[W]=A.needsContext?I(W,this).index(i)>-1:I.find(W,this,null,[i]).length),F[W]&&t.push(A);t.length&&B.push({elem:i,handlers:t})}}return(// Add the remaining (directly-bound) handlers
i=this,e<a.length&&B.push({elem:i,handlers:a.slice(e)}),B)},addProp:function(l,a){Object.defineProperty(I.Event.prototype,l,{enumerable:!0,configurable:!0,get:s(a)?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[l]},set:function(a){Object.defineProperty(this,l,{enumerable:!0,configurable:!0,writable:!0,value:a})}})},fix:function(l){return l[I.expando]?l:new I.Event(l)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(l){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var a=this||l;// Return false to allow normal processing in the caller
return lu.test(a.type)&&a.click&&v(a,"input")&&lb(a,"click",!0),!1},trigger:function(l){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var a=this||l;// Return non-false to allow normal event-path propagation
return lu.test(a.type)&&a.click&&v(a,"input")&&lb(a,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(l){var a=l.target;return lu.test(a.type)&&a.click&&v(a,"input")&&lA.get(a,"click")||v(a,"a")}},beforeunload:{postDispatch:function(l){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==l.result&&l.originalEvent&&(l.originalEvent.returnValue=l.result)}}}},I.removeEvent=function(l,a,p){// This "if" is needed for plain objects
l.removeEventListener&&l.removeEventListener(a,p)},I.Event=function(l,a){// Allow instantiation without the 'new' keyword
if(!(this instanceof I.Event))return new I.Event(l,a);l&&l.type?(this.originalEvent=l,this.type=l.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=l.defaultPrevented||void 0===l.defaultPrevented&&// Support: Android <=2.3 only
!1===l.returnValue?lQ:ly,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=l.target&&3===l.target.nodeType?l.target.parentNode:l.target,this.currentTarget=l.currentTarget,this.relatedTarget=l.relatedTarget):this.type=l,a&&I.extend(this,a),// Create a timestamp if incoming event doesn't have one
this.timeStamp=l&&l.timeStamp||Date.now(),// Mark it as fixed
this[I.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
I.Event.prototype={constructor:I.Event,isDefaultPrevented:ly,isPropagationStopped:ly,isImmediatePropagationStopped:ly,isSimulated:!1,preventDefault:function(){var l=this.originalEvent;this.isDefaultPrevented=lQ,l&&!this.isSimulated&&l.preventDefault()},stopPropagation:function(){var l=this.originalEvent;this.isPropagationStopped=lQ,l&&!this.isSimulated&&l.stopPropagation()},stopImmediatePropagation:function(){var l=this.originalEvent;this.isImmediatePropagationStopped=lQ,l&&!this.isSimulated&&l.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
I.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},I.event.addProp),I.each({focus:"focusin",blur:"focusout"},function(l,a){function p(l){if(c.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var p=lA.get(this,"handle"),A=I.event.fix(l);A.type="focusin"===l.type?"focus":"blur",A.isSimulated=!0,// First, handle focusin/focusout
p(l),A.target===A.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
p(A)}else // while someone wants focusin/focusout.
I.event.simulate(a,l.target,I.event.fix(l))}I.event.special[l]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var A;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
lb(this,l,!0),!c.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(A=lA.get(this,a))||this.addEventListener(a,p),lA.set(this,a,(A||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
lb(this,l),!0)},teardown:function(){var l;if(!c.documentMode)return!1;(l=lA.get(this,a)-1)?lA.set(this,a,l):(this.removeEventListener(a,p),lA.remove(this,a))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(a){return lA.get(a.target,l)},delegateType:a},// Support: Firefox <=44
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
I.event.special[a]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var A=this.ownerDocument||this.document||this,W=c.documentMode?this:A,t=lA.get(W,a);t||(c.documentMode?this.addEventListener(a,p):A.addEventListener(l,p,!0)),lA.set(W,a,(t||0)+1)},teardown:function(){var A=this.ownerDocument||this.document||this,W=c.documentMode?this:A,t=lA.get(W,a)-1;t?lA.set(W,a,t):(c.documentMode?this.removeEventListener(a,p):A.removeEventListener(l,p,!0),lA.remove(W,a))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
I.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(l,a){I.event.special[l]={delegateType:a,bindType:a,handle:function(l){var p,A=l.relatedTarget,W=l.handleObj;return A&&(A===this||I.contains(this,A))||(l.type=W.origType,p=W.handler.apply(this,arguments),l.type=a),p}}}),I.fn.extend({on:function(l,a,p,A){return lw(this,l,a,p,A)},one:function(l,a,p,A){return lw(this,l,a,p,A,1)},off:function(l,a,p){var A,W;if(l&&l.preventDefault&&l.handleObj)return(// ( event )  dispatched jQuery.Event
A=l.handleObj,I(l.delegateTarget).off(A.namespace?A.origType+"."+A.namespace:A.origType,A.selector,A.handler),this);if("object"==typeof l){// ( types-object [, selector] )
for(W in l)this.off(W,a,l[W]);return this}return(!1===a||"function"==typeof a)&&(// ( types [, fn] )
p=a,a=void 0),!1===p&&(p=ly),this.each(function(){I.event.remove(this,l,p,a)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
lk=/<script|<style|<link/i,lK=/checked\s*(?:[^=]|=\s*.checked.)/i,lU=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function lq(l,a){return v(l,"table")&&v(11!==a.nodeType?a:a.firstChild,"tr")&&I(l).children("tbody")[0]||l}// Replace/restore the type attribute of script elements for safe DOM manipulation
function lx(l){return l.type=(null!==l.getAttribute("type"))+"/"+l.type,l}function lM(l){return"true/"===(l.type||"").slice(0,5)?l.type=l.type.slice(5):l.removeAttribute("type"),l}function lR(l,a){var p,A,W,t,F,B;if(1===a.nodeType){// 1. Copy private data: events, handlers, etc.
if(lA.hasData(l)&&(B=lA.get(l).events))for(W in lA.remove(a,"handle events"),B)for(p=0,A=B[W].length;p<A;p++)I.event.add(a,W,B[W][p]);// 2. Copy user data
lW.hasData(l)&&(t=lW.access(l),F=I.extend({},t),lW.set(a,F))}}function lD(l,a,p,A){// Flatten any nested arrays
a=F(a);var W,t,B,e,i,n,S=0,r=l.length,L=r-1,g=a[0],c=s(g);// We can't cloneNode fragments that contain checked, in WebKit
if(c||r>1&&"string"==typeof g&&!o.checkClone&&lK.test(g))return l.each(function(W){var t=l.eq(W);c&&(a[0]=g.call(this,W,t.html())),lD(t,a,p,A)});if(r&&(t=(W=lv(a,l[0].ownerDocument,!1,l,A)).firstChild,1===W.childNodes.length&&(W=t),t||A)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(e=(B=I.map(lf(W,"script"),lx)).length;S<r;S++)i=W,S!==L&&(i=I.clone(i,!0,!0),e&&// push.apply(_, arraylike) throws on ancient WebKit
I.merge(B,lf(i,"script"))),p.call(l[S],i,S);if(e)// Evaluate executable scripts on first document insertion
for(n=B[B.length-1].ownerDocument,// Re-enable scripts
I.map(B,lM),S=0;S<e;S++)i=B[S],ld.test(i.type||"")&&!lA.access(i,"globalEval")&&I.contains(n,i)&&(i.src&&"module"!==(i.type||"").toLowerCase()?I._evalUrl&&!i.noModule&&I._evalUrl(i.src,{nonce:i.nonce||i.getAttribute("nonce")},n):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
h(i.textContent.replace(lU,""),i,n))}return l}function lV(l,a,p){for(var A,W=a?I.filter(a,l):l,t=0;null!=(A=W[t]);t++)p||1!==A.nodeType||I.cleanData(lf(A)),A.parentNode&&(p&&lr(A)&&lI(lf(A,"script")),A.parentNode.removeChild(A));return l}I.extend({htmlPrefilter:function(l){return l},clone:function(l,a,p){var A,W,t,F,B=l.cloneNode(!0),e=lr(l);// Fix IE cloning issues
if(!o.noCloneChecked&&(1===l.nodeType||11===l.nodeType)&&!I.isXMLDoc(l))for(A=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
F=lf(B),W=(t=lf(l)).length;A<W;A++)!// Fix IE bugs, see support tests
function(l,a){var p=a.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===p&&lu.test(l.type)?a.checked=l.checked:("input"===p||"textarea"===p)&&(a.defaultValue=l.defaultValue)}(t[A],F[A]);// Copy the events from the original to the clone
if(a){if(p)for(A=0,t=t||lf(l),F=F||lf(B),W=t.length;A<W;A++)lR(t[A],F[A]);else lR(l,B)}// Return the cloned set
return(// Preserve script evaluation history
(F=lf(B,"script")).length>0&&lI(F,!e&&lf(l,"script")),B)},cleanData:function(l){for(var a,p,A,W=I.event.special,t=0;void 0!==(p=l[t]);t++)if(la(p)){if(a=p[lA.expando]){if(a.events)for(A in a.events)W[A]?I.event.remove(p,A):I.removeEvent(p,A,a.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
p[lA.expando]=void 0}p[lW.expando]&&// Assign undefined instead of using delete, see Data#remove
(p[lW.expando]=void 0)}}}),I.fn.extend({detach:function(l){return lV(this,l,!0)},remove:function(l){return lV(this,l)},text:function(l){return O(this,function(l){return void 0===l?I.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=l)})},null,l,arguments.length)},append:function(){return lD(this,arguments,function(l){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&lq(this,l).appendChild(l)})},prepend:function(){return lD(this,arguments,function(l){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var a=lq(this,l);a.insertBefore(l,a.firstChild)}})},before:function(){return lD(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this)})},after:function(){return lD(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this.nextSibling)})},empty:function(){for(var l,a=0;null!=(l=this[a]);a++)1===l.nodeType&&(// Prevent memory leaks
I.cleanData(lf(l,!1)),// Remove any remaining nodes
l.textContent="");return this},clone:function(l,a){return l=null!=l&&l,a=null==a?l:a,this.map(function(){return I.clone(this,l,a)})},html:function(l){return O(this,function(l){var a=this[0]||{},p=0,A=this.length;if(void 0===l&&1===a.nodeType)return a.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof l&&!lk.test(l)&&!lC[(lh.exec(l)||["",""])[1].toLowerCase()]){l=I.htmlPrefilter(l);try{for(;p<A;p++)a=this[p]||{},1===a.nodeType&&(I.cleanData(lf(a,!1)),a.innerHTML=l);a=0;// If using innerHTML throws an exception, use the fallback method
}catch(l){}}a&&this.empty().append(l)},null,l,arguments.length)},replaceWith:function(){var l=[];// Make the changes, replacing each non-ignored context element with the new content
return lD(this,arguments,function(a){var p=this.parentNode;0>I.inArray(this,l)&&(I.cleanData(lf(this)),p&&p.replaceChild(a,this));// Force callback invocation
},l)}}),I.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,a){I.fn[l]=function(l){for(var p,A=[],W=I(l),t=W.length-1,F=0;F<=t;F++)p=F===t?this:this.clone(!0),I(W[F])[a](p),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
B.apply(A,p.get());return this.pushStack(A)}});var lT=RegExp("^("+le+")(?!px)[a-z%]+$","i"),lJ=/^--/,lX=function(a){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var p=a.ownerDocument.defaultView;return p&&p.opener||(p=l),p.getComputedStyle(a)},lG=function(l,a,p){var A,W,t={};// Remember the old values, and insert the new ones
for(W in a)t[W]=l.style[W],l.style[W]=a[W];// Revert the old values
for(W in A=p.call(l),a)l.style[W]=t[W];return A},lY=RegExp(ln.join("|"),"i");function lZ(l,a,p){var A,W,t,F,B=lJ.test(a),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
e=l.style;return(p=p||lX(l))&&(// Support: IE <=9 - 11+
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
(F=F.replace(b,"$1")||void 0),""!==F||lr(l)||(F=I.style(l,a)),!o.pixelBoxStyles()&&lT.test(F)&&lY.test(a)&&(// Remember the original values
A=e.width,W=e.minWidth,t=e.maxWidth,// Put in the new values to get a computed value out
e.minWidth=e.maxWidth=e.width=F,F=p.width,// Revert the changed values
e.width=A,e.minWidth=W,e.maxWidth=t)),void 0!==F?// IE returns zIndex value as an integer.
F+"":F}function lz(l,a){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(l()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=a).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function a(){// This is a singleton, we need to execute it only once
if(n){i.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",n.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",lS.appendChild(i).appendChild(n);var a=l.getComputedStyle(n);A="1%"!==a.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
e=12===p(a.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
n.style.right="60%",F=36===p(a.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
W=36===p(a.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
n.style.position="absolute",t=12===p(n.offsetWidth/3),lS.removeChild(i),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
n=null}}function p(l){return Math.round(parseFloat(l))}var A,W,t,F,B,e,i=c.createElement("div"),n=c.createElement("div");// Finish early in limited (non-browser) environments
n.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===n.style.backgroundClip,I.extend(o,{boxSizingReliable:function(){return a(),W},pixelBoxStyles:function(){return a(),F},pixelPosition:function(){return a(),A},reliableMarginLeft:function(){return a(),e},scrollboxSize:function(){return a(),t},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var a,p,A,W;return null==B&&(a=c.createElement("table"),p=c.createElement("tr"),A=c.createElement("div"),a.style.cssText="position:absolute;left:-11111px;border-collapse:separate",p.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
p.style.height="1px",A.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
A.style.display="block",lS.appendChild(a).appendChild(p).appendChild(A),B=parseInt((W=l.getComputedStyle(p)).height,10)+parseInt(W.borderTopWidth,10)+parseInt(W.borderBottomWidth,10)===p.offsetHeight,lS.removeChild(a)),B}}))}();var lP=["Webkit","Moz","ms"],lN=c.createElement("div").style,lH={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function lO(l){return I.cssProps[l]||lH[l]||(l in lN?l:lH[l]=// Return a vendor-prefixed property or undefined
function(l){for(// Check for vendor prefixed names
var a=l[0].toUpperCase()+l.slice(1),p=lP.length;p--;)if((l=lP[p]+a)in lN)return l}(l)||l)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
lj=/^(none|table(?!-c[ea]).+)/,l_={position:"absolute",visibility:"hidden",display:"block"},l$={letterSpacing:"0",fontWeight:"400"};function l2(l,a,p){// Any relative (+/-) values have already been
// normalized at this point
var A=li.exec(a);return A?Math.max(0,A[2]-(p||0))+(A[3]||"px"):a}function l0(l,a,p,A,W,t){var F="width"===a?1:0,B=0,e=0,i=0;// Adjustment may not be necessary
if(p===(A?"border":"content"))return 0;for(;F<4;F+=2)"margin"===p&&(i+=I.css(l,p+ln[F],!0,W)),A?("content"===p&&(e-=I.css(l,"padding"+ln[F],!0,W)),"margin"!==p&&(e-=I.css(l,"border"+ln[F]+"Width",!0,W))):(// Add padding
e+=I.css(l,"padding"+ln[F],!0,W),"padding"!==p?e+=I.css(l,"border"+ln[F]+"Width",!0,W):B+=I.css(l,"border"+ln[F]+"Width",!0,W));return!A&&t>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(e+=Math.max(0,Math.ceil(l["offset"+a[0].toUpperCase()+a.slice(1)]-t-e-B-.5))||0),e+i}function l3(l,a,p){// Start with computed style
var A=lX(l),W=(!o.boxSizingReliable()||p)&&"border-box"===I.css(l,"boxSizing",!1,A),t=W,F=lZ(l,a,A),B="offset"+a[0].toUpperCase()+a.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(lT.test(F)){if(!p)return F;F="auto"}// Adjust for the element's box model
return(!o.boxSizingReliable()&&W||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!o.reliableTrDimensions()&&v(l,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===F||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(F)&&"inline"===I.css(l,"display",!1,A))&&// Make sure the element is visible & connected
l.getClientRects().length&&(W="border-box"===I.css(l,"boxSizing",!1,A),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(t=B in l)&&(F=l[B])),// Normalize "" and auto
(F=parseFloat(F)||0)+l0(l,a,p||(W?"border":"content"),t,A,F)+"px"}function l1(l,a,p,A,W){return new l1.prototype.init(l,a,p,A,W)}I.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(l,a){if(a){// We should always get a number back from opacity
var p=lZ(l,"opacity");return""===p?"1":p}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(l,a,p,A){// Don't set styles on text and comment nodes
if(l&&3!==l.nodeType&&8!==l.nodeType&&l.style){// Make sure that we're working with the right name
var W,t,F,B=ll(a),e=lJ.test(a),i=l.style;// Check if we're setting a value
if(e||(a=lO(B)),// Gets hook for the prefixed version, then unprefixed version
F=I.cssHooks[a]||I.cssHooks[B],void 0===p)return(// If a hook was provided get the non-computed value from there
F&&"get"in F&&void 0!==(W=F.get(l,!1,A))?W:i[a]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(t=typeof p)&&(W=li.exec(p))&&W[1]&&(p=ls(l,a,W),// Fixes bug trac-9237
t="number"),null!=p&&p==p&&("number"!==t||e||(p+=W&&W[3]||(I.cssNumber[B]?"":"px")),o.clearCloneStyle||""!==p||0!==a.indexOf("background")||(i[a]="inherit"),F&&"set"in F&&void 0===(p=F.set(l,p,A))||(e?i.setProperty(a,p):i[a]=p))}},css:function(l,a,p,A){var W,t,F,B=ll(a);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(lJ.test(a)||(a=lO(B)),// Try prefixed name followed by the unprefixed name
(F=I.cssHooks[a]||I.cssHooks[B])&&"get"in F&&(W=F.get(l,!0,p)),void 0===W&&(W=lZ(l,a,A)),"normal"===W&&a in l$&&(W=l$[a]),""===p||p)?(t=parseFloat(W),!0===p||isFinite(t)?t||0:W):W)}}),I.each(["height","width"],function(l,a){I.cssHooks[a]={get:function(l,p,A){if(p)// but it must have a current display style that would benefit
return!lj.test(I.css(l,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
l.getClientRects().length&&l.getBoundingClientRect().width?l3(l,a,A):lG(l,l_,function(){return l3(l,a,A)})},set:function(l,p,A){var W,t=lX(l),// to avoid forcing a reflow.
F=!o.scrollboxSize()&&"absolute"===t.position,B=(F||A)&&"border-box"===I.css(l,"boxSizing",!1,t),e=A?l0(l,a,A,B,t):0;return B&&F&&(e-=Math.ceil(l["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(t[a])-l0(l,a,"border",!1,t)-.5)),e&&(W=li.exec(p))&&"px"!==(W[3]||"px")&&(l.style[a]=p,p=I.css(l,a)),l2(l,p,e)}}}),I.cssHooks.marginLeft=lz(o.reliableMarginLeft,function(l,a){if(a)return(parseFloat(lZ(l,"marginLeft"))||l.getBoundingClientRect().left-lG(l,{marginLeft:0},function(){return l.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
I.each({margin:"",padding:"",border:"Width"},function(l,a){I.cssHooks[l+a]={expand:function(p){for(var A=0,W={},t="string"==typeof p?p.split(" "):[p];A<4;A++)W[l+ln[A]+a]=t[A]||t[A-2]||t[0];return W}},"margin"!==l&&(I.cssHooks[l+a].set=l2)}),I.fn.extend({css:function(l,a){return O(this,function(l,a,p){var A,W,t={},F=0;if(Array.isArray(a)){for(A=lX(l),W=a.length;F<W;F++)t[a[F]]=I.css(l,a[F],!1,A);return t}return void 0!==p?I.style(l,a,p):I.css(l,a)},l,a,arguments.length>1)}}),I.Tween=l1,l1.prototype={constructor:l1,init:function(l,a,p,A,W,t){this.elem=l,this.prop=p,this.easing=W||I.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=A,this.unit=t||(I.cssNumber[p]?"":"px")},cur:function(){var l=l1.propHooks[this.prop];return l&&l.get?l.get(this):l1.propHooks._default.get(this)},run:function(l){var a,p=l1.propHooks[this.prop];return this.options.duration?this.pos=a=I.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=a=l,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),p&&p.set?p.set(this):l1.propHooks._default.set(this),this}},l1.prototype.init.prototype=l1.prototype,l1.propHooks={_default:{get:function(l){var a;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==l.elem.nodeType||null!=l.elem[l.prop]&&null==l.elem.style[l.prop]?l.elem[l.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(a=I.css(l.elem,l.prop,""))&&"auto"!==a?a:0)},set:function(l){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
I.fx.step[l.prop]?I.fx.step[l.prop](l):1===l.elem.nodeType&&(I.cssHooks[l.prop]||null!=l.elem.style[lO(l.prop)])?I.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
l1.propHooks.scrollTop=l1.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},I.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},I.fx=l1.prototype.init,// Back compat <1.8 extension point
I.fx.step={};var l9,l5,l7,l4,l6=/^(?:toggle|show|hide)$/,l8=/queueHooks$/;// Animations created synchronously will run synchronously
function al(){return l.setTimeout(function(){l7=void 0}),l7=Date.now()}// Generate parameters to create a standard animation
function aa(l,a){var p,A=0,W={height:l};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
a=a?1:0;A<4;A+=2-a)W["margin"+(p=ln[A])]=W["padding"+p]=l;return a&&(W.opacity=W.width=l),W}function ap(l,a,p){for(var A,W=(aA.tweeners[a]||[]).concat(aA.tweeners["*"]),t=0,F=W.length;t<F;t++)if(A=W[t].call(p,a,l))return A}function aA(l,a,p){var A,W,t=0,F=aA.prefilters.length,B=I.Deferred().always(function(){// Don't match elem in the :animated selector
delete e.elem}),e=function(){if(W)return!1;for(var a=l7||al(),p=Math.max(0,i.startTime+i.duration-a),A=1-(p/i.duration||0),t=0,F=i.tweens.length;t<F;t++)i.tweens[t].run(A);return(// If there's more to do, yield
(B.notifyWith(l,[i,A,p]),A<1&&F)?p:(F||B.notifyWith(l,[i,1,0]),// Resolve the animation and report its conclusion
B.resolveWith(l,[i]),!1))},i=B.promise({elem:l,props:I.extend({},a),opts:I.extend(!0,{specialEasing:{},easing:I.easing._default},p),originalProperties:a,originalOptions:p,startTime:l7||al(),duration:p.duration,tweens:[],createTween:function(a,p){var A=I.Tween(l,i.opts,a,p,i.opts.specialEasing[a]||i.opts.easing);return i.tweens.push(A),A},stop:function(a){var p=0,// otherwise we skip this part
A=a?i.tweens.length:0;if(W)return this;for(W=!0;p<A;p++)i.tweens[p].run(1);return a?(B.notifyWith(l,[i,1,0]),B.resolveWith(l,[i,a])):B.rejectWith(l,[i,a]),this}}),n=i.props;for(function(l,a){var p,A,W,t,F;// camelCase, specialEasing and expand cssHook pass
for(p in l)if(W=a[A=ll(p)],Array.isArray(t=l[p])&&(W=t[1],t=l[p]=t[0]),p!==A&&(l[A]=t,delete l[p]),(F=I.cssHooks[A])&&("expand"in F))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(p in t=F.expand(t),delete l[A],t)(p in l)||(l[p]=t[p],a[p]=W);else a[A]=W}(n,i.opts.specialEasing);t<F;t++)if(A=aA.prefilters[t].call(i,l,n,i.opts))return s(A.stop)&&(I._queueHooks(i.elem,i.opts.queue).stop=A.stop.bind(A)),A;return I.map(n,ap,i),s(i.opts.start)&&i.opts.start.call(l,i),// Attach callbacks from options
i.progress(i.opts.progress).done(i.opts.done,i.opts.complete).fail(i.opts.fail).always(i.opts.always),I.fx.timer(I.extend(e,{elem:l,anim:i,queue:i.opts.queue})),i}I.Animation=I.extend(aA,{tweeners:{"*":[function(l,a){var p=this.createTween(l,a);return ls(p.elem,l,li.exec(a),p),p}]},tweener:function(l,a){s(l)?(a=l,l=["*"]):l=l.match(G);for(var p,A=0,W=l.length;A<W;A++)p=l[A],aA.tweeners[p]=aA.tweeners[p]||[],aA.tweeners[p].unshift(a)},prefilters:[function(l,a,p){var A,W,t,F,B,e,i,n,S="width"in a||"height"in a,r=this,L={},o=l.style,s=l.nodeType&&lo(l),g=lA.get(l,"fxshow");// Detect show/hide animations
for(A in p.queue||(null==(F=I._queueHooks(l,"fx")).unqueued&&(F.unqueued=0,B=F.empty.fire,F.empty.fire=function(){F.unqueued||B()}),F.unqueued++,r.always(function(){// Ensure the complete handler is called before this completes
r.always(function(){F.unqueued--,I.queue(l,"fx").length||F.empty.fire()})})),a)if(W=a[A],l6.test(W)){if(delete a[A],t=t||"toggle"===W,W===(s?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==W||!g||void 0===g[A])continue;s=!0}L[A]=g&&g[A]||I.style(l,A)}if(!(!// Bail out if this is a no-op like .hide().hide()
(e=!I.isEmptyObject(a))&&I.isEmptyObject(L)))for(A in S&&1===l.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
p.overflow=[o.overflow,o.overflowX,o.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(i=g&&g.display)&&(i=lA.get(l,"display")),"none"===(n=I.css(l,"display"))&&(i?n=i:(// Get nonempty value(s) by temporarily forcing visibility
lc([l],!0),i=l.style.display||i,n=I.css(l,"display"),lc([l]))),("inline"===n||"inline-block"===n&&null!=i)&&"none"===I.css(l,"float")&&(e||(r.done(function(){o.display=i}),null!=i||(i="none"===(n=o.display)?"":n)),o.display="inline-block")),p.overflow&&(o.overflow="hidden",r.always(function(){o.overflow=p.overflow[0],o.overflowX=p.overflow[1],o.overflowY=p.overflow[2]})),// Implement show/hide animations
e=!1,L)e||(g?"hidden"in g&&(s=g.hidden):g=lA.access(l,"fxshow",{display:i}),t&&(g.hidden=!s),s&&lc([l],!0),/* eslint-disable no-loop-func */r.done(function(){for(A in s||lc([l]),lA.remove(l,"fxshow"),L)I.style(l,A,L[A])})),// Per-property setup
e=ap(s?g[A]:0,A,r),A in g||(g[A]=e.start,s&&(e.end=e.start,e.start=0))}],prefilter:function(l,a){a?aA.prefilters.unshift(l):aA.prefilters.push(l)}}),I.speed=function(l,a,p){var A=l&&"object"==typeof l?I.extend({},l):{complete:p||!p&&a||s(l)&&l,duration:l,easing:p&&a||a&&!s(a)&&a};return I.fx.off?A.duration=0:"number"!=typeof A.duration&&(A.duration in I.fx.speeds?A.duration=I.fx.speeds[A.duration]:A.duration=I.fx.speeds._default),(null==A.queue||!0===A.queue)&&(A.queue="fx"),// Queueing
A.old=A.complete,A.complete=function(){s(A.old)&&A.old.call(this),A.queue&&I.dequeue(this,A.queue)},A},I.fn.extend({fadeTo:function(l,a,p,A){// Show any hidden elements after setting opacity to 0
return this.filter(lo).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:a},l,p,A)},animate:function(l,a,p,A){var W=I.isEmptyObject(l),t=I.speed(a,p,A),F=function(){// Operate on a copy of prop so per-property easing won't be lost
var a=aA(this,I.extend({},l),t);// Empty animations, or finishing resolves immediately
(W||lA.get(this,"finish"))&&a.stop(!0)};return F.finish=F,W||!1===t.queue?this.each(F):this.queue(t.queue,F)},stop:function(l,a,p){var A=function(l){var a=l.stop;delete l.stop,a(p)};return"string"!=typeof l&&(p=a,a=l,l=void 0),a&&this.queue(l||"fx",[]),this.each(function(){var a=!0,W=null!=l&&l+"queueHooks",t=I.timers,F=lA.get(this);if(W)F[W]&&F[W].stop&&A(F[W]);else for(W in F)F[W]&&F[W].stop&&l8.test(W)&&A(F[W]);for(W=t.length;W--;)t[W].elem===this&&(null==l||t[W].queue===l)&&(t[W].anim.stop(p),a=!1,t.splice(W,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(a||!p)&&I.dequeue(this,l)})},finish:function(l){return!1!==l&&(l=l||"fx"),this.each(function(){var a,p=lA.get(this),A=p[l+"queue"],W=p[l+"queueHooks"],t=I.timers,F=A?A.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
p.finish=!0,// Empty the queue first
I.queue(this,l,[]),W&&W.stop&&W.stop.call(this,!0),a=t.length;a--;)t[a].elem===this&&t[a].queue===l&&(t[a].anim.stop(!0),t.splice(a,1));// Look for any animations in the old queue and finish them
for(a=0;a<F;a++)A[a]&&A[a].finish&&A[a].finish.call(this);// Turn off finishing flag
delete p.finish})}}),I.each(["toggle","show","hide"],function(l,a){var p=I.fn[a];I.fn[a]=function(l,A,W){return null==l||"boolean"==typeof l?p.apply(this,arguments):this.animate(aa(a,!0),l,A,W)}}),// Generate shortcuts for custom animations
I.each({slideDown:aa("show"),slideUp:aa("hide"),slideToggle:aa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(l,a){I.fn[l]=function(l,p,A){return this.animate(a,l,p,A)}}),I.timers=[],I.fx.tick=function(){var l,a=0,p=I.timers;for(l7=Date.now();a<p.length;a++)// Run the timer and safely remove it when done (allowing for external removal)
(l=p[a])()||p[a]!==l||p.splice(a--,1);p.length||I.fx.stop(),l7=void 0},I.fx.timer=function(l){I.timers.push(l),I.fx.start()},I.fx.interval=13,I.fx.start=function(){l4||(l4=!0,function a(){l4&&(!1===c.hidden&&l.requestAnimationFrame?l.requestAnimationFrame(a):l.setTimeout(a,I.fx.interval),I.fx.tick())}())},I.fx.stop=function(){l4=null},I.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
I.fn.delay=function(a,p){return a=I.fx&&I.fx.speeds[a]||a,p=p||"fx",this.queue(p,function(p,A){var W=l.setTimeout(p,a);A.stop=function(){l.clearTimeout(W)}})},aW=c.createElement("input"),at=c.createElement("select").appendChild(c.createElement("option")),aW.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
o.checkOn=""!==aW.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
o.optSelected=at.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(aW=c.createElement("input")).value="t",aW.type="radio",o.radioValue="t"===aW.value;var aW,at,aF,aB=I.expr.attrHandle;I.fn.extend({attr:function(l,a){return O(this,I.attr,l,a,arguments.length>1)},removeAttr:function(l){return this.each(function(){I.removeAttr(this,l)})}}),I.extend({attr:function(l,a,p){var A,W,t=l.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==t&&8!==t&&2!==t){// Fallback to prop when attributes are not supported
if(void 0===l.getAttribute)return I.prop(l,a,p);if(1===t&&I.isXMLDoc(l)||(W=I.attrHooks[a.toLowerCase()]||(I.expr.match.bool.test(a)?aF:void 0)),void 0!==p){if(null===p){I.removeAttr(l,a);return}return W&&"set"in W&&void 0!==(A=W.set(l,p,a))?A:(l.setAttribute(a,p+""),p)}return W&&"get"in W&&null!==(A=W.get(l,a))?A:null==(A=I.find.attr(l,a))?void 0:A}},attrHooks:{type:{set:function(l,a){if(!o.radioValue&&"radio"===a&&v(l,"input")){var p=l.value;return l.setAttribute("type",a),p&&(l.value=p),a}}}},removeAttr:function(l,a){var p,A=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
W=a&&a.match(G);if(W&&1===l.nodeType)for(;p=W[A++];)l.removeAttribute(p)}}),// Hooks for boolean attributes
aF={set:function(l,a,p){return!1===a?I.removeAttr(l,p):l.setAttribute(p,p),p}},I.each(I.expr.match.bool.source.match(/\w+/g),function(l,a){var p=aB[a]||I.find.attr;aB[a]=function(l,a,A){var W,t,F=a.toLowerCase();return A||(// Avoid an infinite loop by temporarily removing this function from the getter
t=aB[F],aB[F]=W,W=null!=p(l,a,A)?F:null,aB[F]=t),W}});var ae=/^(?:input|select|textarea|button)$/i,ai=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function an(l){return(l.match(G)||[]).join(" ")}function aS(l){return l.getAttribute&&l.getAttribute("class")||""}function ar(l){return Array.isArray(l)?l:"string"==typeof l&&l.match(G)||[]}I.fn.extend({prop:function(l,a){return O(this,I.prop,l,a,arguments.length>1)},removeProp:function(l){return this.each(function(){delete this[I.propFix[l]||l]})}}),I.extend({prop:function(l,a,p){var A,W,t=l.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==t&&8!==t&&2!==t)return(1===t&&I.isXMLDoc(l)||(// Fix name and attach hooks
a=I.propFix[a]||a,W=I.propHooks[a]),void 0!==p)?W&&"set"in W&&void 0!==(A=W.set(l,p,a))?A:l[a]=p:W&&"get"in W&&null!==(A=W.get(l,a))?A:l[a]},propHooks:{tabIndex:{get:function(l){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var a=I.find.attr(l,"tabindex");return a?parseInt(a,10):ae.test(l.nodeName)||ai.test(l.nodeName)&&l.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),o.optSelected||(I.propHooks.selected={get:function(l){/* eslint no-unused-expressions: "off" */var a=l.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(l){/* eslint no-unused-expressions: "off" */var a=l.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),I.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){I.propFix[this.toLowerCase()]=this}),I.fn.extend({addClass:function(l){var a,p,A,W,t,F;return s(l)?this.each(function(a){I(this).addClass(l.call(this,a,aS(this)))}):(a=ar(l)).length?this.each(function(){if(A=aS(this),p=1===this.nodeType&&" "+an(A)+" "){for(t=0;t<a.length;t++)W=a[t],0>p.indexOf(" "+W+" ")&&(p+=W+" ");A!==// Only assign if different to avoid unneeded rendering.
(F=an(p))&&this.setAttribute("class",F)}}):this},removeClass:function(l){var a,p,A,W,t,F;return s(l)?this.each(function(a){I(this).removeClass(l.call(this,a,aS(this)))}):arguments.length?(a=ar(l)).length?this.each(function(){if(A=aS(this),// This expression is here for better compressibility (see addClass)
p=1===this.nodeType&&" "+an(A)+" "){for(t=0;t<a.length;t++)// Remove *all* instances
for(W=a[t];p.indexOf(" "+W+" ")>-1;)p=p.replace(" "+W+" "," ");A!==// Only assign if different to avoid unneeded rendering.
(F=an(p))&&this.setAttribute("class",F)}}):this:this.attr("class","")},toggleClass:function(l,a){var p,A,W,t,F=typeof l,B="string"===F||Array.isArray(l);return s(l)?this.each(function(p){I(this).toggleClass(l.call(this,p,aS(this),a),a)}):"boolean"==typeof a&&B?a?this.addClass(l):this.removeClass(l):(p=ar(l),this.each(function(){if(B)for(W=0,// Toggle individual class names
t=I(this);W<p.length;W++)A=p[W],t.hasClass(A)?t.removeClass(A):t.addClass(A);else(void 0===l||"boolean"===F)&&((A=aS(this))&&lA.set(this,"__className__",A),this.setAttribute&&this.setAttribute("class",A||!1===l?"":lA.get(this,"__className__")||""))}))},hasClass:function(l){var a,p,A=0;for(a=" "+l+" ";p=this[A++];)if(1===p.nodeType&&(" "+an(aS(p))+" ").indexOf(a)>-1)return!0;return!1}});var aL=/\r/g;I.fn.extend({val:function(l){var a,p,A,W=this[0];return arguments.length?(A=s(l),this.each(function(p){var W;1!==this.nodeType||(null==(W=A?l.call(this,p,I(this).val()):l)?W="":"number"==typeof W?W+="":Array.isArray(W)&&(W=I.map(W,function(l){return null==l?"":l+""})),(a=I.valHooks[this.type]||I.valHooks[this.nodeName.toLowerCase()])&&"set"in a&&void 0!==a.set(this,W,"value")||(this.value=W))})):W?(a=I.valHooks[W.type]||I.valHooks[W.nodeName.toLowerCase()])&&"get"in a&&void 0!==(p=a.get(W,"value"))?p:"string"==typeof(p=W.value)?p.replace(aL,""):null==p?"":p:void 0}}),I.extend({valHooks:{option:{get:function(l){var a=I.find.attr(l,"value");return null!=a?a:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
an(I.text(l))}},select:{get:function(l){var a,p,A,W=l.options,t=l.selectedIndex,F="select-one"===l.type,B=F?null:[],e=F?t+1:W.length;// Loop through all the selected options
for(A=t<0?e:F?t:0;A<e;A++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((p=W[A]).selected||A===t)&&// Don't return options that are disabled or in a disabled optgroup
!p.disabled&&(!p.parentNode.disabled||!v(p.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
a=I(p).val(),F)return a;// Multi-Selects return an array
B.push(a)}return B},set:function(l,a){for(var p,A,W=l.options,t=I.makeArray(a),F=W.length;F--;)/* eslint-disable no-cond-assign */((A=W[F]).selected=I.inArray(I.valHooks.option.get(A),t)>-1)&&(p=!0);return p||(l.selectedIndex=-1),t}}}}),// Radios and checkboxes getter/setter
I.each(["radio","checkbox"],function(){I.valHooks[this]={set:function(l,a){if(Array.isArray(a))return l.checked=I.inArray(I(l).val(),a)>-1}},o.checkOn||(I.valHooks[this].get=function(l){return null===l.getAttribute("value")?"on":l.value})});// Return jQuery for attributes-only inclusion
var ao=l.location,as={guid:Date.now()},ag=/\?/;// Cross-browser xml parsing
I.parseXML=function(a){var p,A;if(!a||"string"!=typeof a)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{p=new l.DOMParser().parseFromString(a,"text/xml")}catch(l){}return A=p&&p.getElementsByTagName("parsererror")[0],(!p||A)&&I.error("Invalid XML: "+(A?I.map(A.childNodes,function(l){return l.textContent}).join("\n"):a)),p};var ac=/^(?:focusinfocus|focusoutblur)$/,au=function(l){l.stopPropagation()};I.extend(I.event,{trigger:function(a,p,A,W){var t,F,B,e,i,n,r,L,o=[A||c],u=S.call(a,"type")?a.type:a,h=S.call(a,"namespace")?a.namespace.split("."):[];// Don't do events on text and comment nodes
if(F=L=B=A=A||c,!(3===A.nodeType||8===A.nodeType||ac.test(u+I.event.triggered))&&(u.indexOf(".")>-1&&(u=// Namespaced trigger; create a regexp to match event type in handle()
(h=u.split(".")).shift(),h.sort()),i=0>u.indexOf(":")&&"on"+u,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(a=a[I.expando]?a:new I.Event(u,"object"==typeof a&&a)).isTrigger=W?2:3,a.namespace=h.join("."),a.rnamespace=a.namespace?RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
a.result=void 0,a.target||(a.target=A),// Clone any incoming data and prepend the event, creating the handler arg list
p=null==p?[a]:I.makeArray(p,[a]),// Allow special events to draw outside the lines
r=I.event.special[u]||{},W||!r.trigger||!1!==r.trigger.apply(A,p))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!W&&!r.noBubble&&!g(A)){for(e=r.delegateType||u,ac.test(e+u)||(F=F.parentNode);F;F=F.parentNode)o.push(F),B=F;B===(A.ownerDocument||c)&&o.push(B.defaultView||B.parentWindow||l)}for(// Fire handlers on the event path
t=0;(F=o[t++])&&!a.isPropagationStopped();)L=F,a.type=t>1?e:r.bindType||u,// jQuery handler
(n=(lA.get(F,"events")||Object.create(null))[a.type]&&lA.get(F,"handle"))&&n.apply(F,p),// Native handler
(n=i&&F[i])&&n.apply&&la(F)&&(a.result=n.apply(F,p),!1===a.result&&a.preventDefault());return a.type=u,!W&&!a.isDefaultPrevented()&&(!r._default||!1===r._default.apply(o.pop(),p))&&la(A)&&i&&s(A[u])&&!g(A)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(B=A[i])&&(A[i]=null),// Prevent re-triggering of the same event, since we already bubbled it above
I.event.triggered=u,a.isPropagationStopped()&&L.addEventListener(u,au),A[u](),a.isPropagationStopped()&&L.removeEventListener(u,au),I.event.triggered=void 0,B&&(A[i]=B)),a.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(l,a,p){var A=I.extend(new I.Event,p,{type:l,isSimulated:!0});I.event.trigger(A,null,a)}}),I.fn.extend({trigger:function(l,a){return this.each(function(){I.event.trigger(l,a,this)})},triggerHandler:function(l,a){var p=this[0];if(p)return I.event.trigger(l,a,p,!0)}});var ah=/\[\]$/,ad=/\r?\n/g,aC=/^(?:submit|button|image|reset|file)$/i,af=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
I.param=function(l,a){var p,A=[],W=function(l,a){// If value is a function, invoke it and use its return value
var p=s(a)?a():a;A[A.length]=encodeURIComponent(l)+"="+encodeURIComponent(null==p?"":p)};if(null==l)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(l)||l.jquery&&!I.isPlainObject(l))I.each(l,function(){W(this.name,this.value)});else // did it), otherwise encode params recursively.
for(p in l)!function l(a,p,A,W){var t;if(Array.isArray(p))I.each(p,function(p,t){A||ah.test(a)?W(a,t):l(a+"["+("object"==typeof t&&null!=t?p:"")+"]",t,A,W)});else if(A||"object"!==d(p))W(a,p);else for(t in p)l(a+"["+t+"]",p[t],A,W)}(p,l[p],a,W);// Return the resulting serialization
return A.join("&")},I.fn.extend({serialize:function(){return I.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var l=I.prop(this,"elements");return l?I.makeArray(l):this}).filter(function(){var l=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!I(this).is(":disabled")&&af.test(this.nodeName)&&!aC.test(l)&&(this.checked||!lu.test(l))}).map(function(l,a){var p=I(this).val();return null==p?null:Array.isArray(p)?I.map(p,function(l){return{name:a.name,value:l.replace(ad,"\r\n")}}):{name:a.name,value:p.replace(ad,"\r\n")}}).get()}});var aI=/%20/g,aE=/#.*$/,av=/([?&])_=[^&]*/,am=/^(.*?):[ \t]*([^\r\n]*)$/mg,aQ=/^(?:GET|HEAD)$/,ay=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */aw={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ab={},ak="*/".concat("*"),aK=c.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function aU(l){// dataTypeExpression is optional and defaults to "*"
return function(a,p){"string"!=typeof a&&(p=a,a="*");var A,W=0,t=a.toLowerCase().match(G)||[];if(s(p))// For each dataType in the dataTypeExpression
for(;A=t[W++];)"+"===A[0]?(l[A=A.slice(1)||"*"]=l[A]||[]).unshift(p):(l[A]=l[A]||[]).push(p)}}// Base inspection function for prefilters and transports
function aq(l,a,p,A){var W={},t=l===ab;function F(B){var e;return W[B]=!0,I.each(l[B]||[],function(l,B){var i=B(a,p,A);return"string"!=typeof i||t||W[i]?t?!(e=i):void 0:(a.dataTypes.unshift(i),F(i),!1)}),e}return F(a.dataTypes[0])||!W["*"]&&F("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ax(l,a){var p,A,W=I.ajaxSettings.flatOptions||{};for(p in a)void 0!==a[p]&&((W[p]?l:A||(A={}))[p]=a[p]);return A&&I.extend(!0,l,A),l}aK.href=ao.href,I.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:ao.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ao.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":ak,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":I.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(l,a){return a?ax(ax(l,I.ajaxSettings),a):ax(I.ajaxSettings,l)},ajaxPrefilter:aU(aw),ajaxTransport:aU(ab),// Main method
ajax:function(a,p){"object"==typeof a&&(p=a,a=void 0),// Force options to be an object
p=p||{};var A,W,t,F,B,e,i,n,S,r,L=I.ajaxSetup({},p),o=L.context||L,s=L.context&&(o.nodeType||o.jquery)?I(o):I.event,g=I.Deferred(),u=I.Callbacks("once memory"),h=L.statusCode||{},d={},C={},f="canceled",E={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(l){var a;if(i){if(!F)for(F={};a=am.exec(t);)F[a[1].toLowerCase()+" "]=(F[a[1].toLowerCase()+" "]||[]).concat(a[2]);a=F[l.toLowerCase()+" "]}return null==a?null:a.join(", ")},// Raw string
getAllResponseHeaders:function(){return i?t:null},// Caches the header
setRequestHeader:function(l,a){return null==i&&(d[l=C[l.toLowerCase()]=C[l.toLowerCase()]||l]=a),this},// Overrides response content-type header
overrideMimeType:function(l){return null==i&&(L.mimeType=l),this},// Status-dependent callbacks
statusCode:function(l){var a;if(l){if(i)E.always(l[E.status]);else for(a in l)h[a]=[h[a],l[a]]}return this},// Cancel the request
abort:function(l){var a=l||f;return A&&A.abort(a),v(0,a),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
g.promise(E),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
L.url=((a||L.url||ao.href)+"").replace(ay,ao.protocol+"//"),// Alias method option to type as per ticket trac-12004
L.type=p.method||p.type||L.method||L.type,// Extract dataTypes list
L.dataTypes=(L.dataType||"*").toLowerCase().match(G)||[""],null==L.crossDomain){e=c.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{e.href=L.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
e.href=e.href,L.crossDomain=aK.protocol+"//"+aK.host!=e.protocol+"//"+e.host}catch(l){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
L.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(L.data&&L.processData&&"string"!=typeof L.data&&(L.data=I.param(L.data,L.traditional)),// Apply prefilters
aq(aw,L,p,E),i)return E;// Check for headers option
for(S in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(n=I.event&&L.global)&&0==I.active++&&I.event.trigger("ajaxStart"),// Uppercase the type
L.type=L.type.toUpperCase(),// Determine if request has content
L.hasContent=!aQ.test(L.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
W=L.url.replace(aE,""),L.hasContent?L.data&&L.processData&&0===(L.contentType||"").indexOf("application/x-www-form-urlencoded")&&(L.data=L.data.replace(aI,"+")):(// Remember the hash so we can put it back
r=L.url.slice(W.length),L.data&&(L.processData||"string"==typeof L.data)&&(W+=(ag.test(W)?"&":"?")+L.data,// trac-9682: remove data so that it's not used in an eventual retry
delete L.data),!1===L.cache&&(W=W.replace(av,"$1"),r=(ag.test(W)?"&":"?")+"_="+as.guid+++r),// Put hash and anti-cache on the URL that will be requested (gh-1732)
L.url=W+r),L.ifModified&&(I.lastModified[W]&&E.setRequestHeader("If-Modified-Since",I.lastModified[W]),I.etag[W]&&E.setRequestHeader("If-None-Match",I.etag[W])),(L.data&&L.hasContent&&!1!==L.contentType||p.contentType)&&E.setRequestHeader("Content-Type",L.contentType),// Set the Accepts header for the server, depending on the dataType
E.setRequestHeader("Accept",L.dataTypes[0]&&L.accepts[L.dataTypes[0]]?L.accepts[L.dataTypes[0]]+("*"!==L.dataTypes[0]?", "+ak+"; q=0.01":""):L.accepts["*"]),L.headers)E.setRequestHeader(S,L.headers[S]);// Allow custom headers/mimetypes and early abort
if(L.beforeSend&&(!1===L.beforeSend.call(o,E,L)||i))return E.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
f="abort",// Install callbacks on deferreds
u.add(L.complete),E.done(L.success),E.fail(L.error),// Get transport
A=aq(ab,L,p,E)){// If request was aborted inside ajaxSend, stop there
if(E.readyState=1,n&&s.trigger("ajaxSend",[E,L]),i)return E;L.async&&L.timeout>0&&(B=l.setTimeout(function(){E.abort("timeout")},L.timeout));try{i=!1,A.send(d,v)}catch(l){// Rethrow post-completion exceptions
if(i)throw l;// Propagate others as results
v(-1,l)}}else v(-1,"No Transport");// Callback for when everything is done
function v(a,p,F,e){var S,r,c,d,C,f=p;// Ignore repeat invocations
i||(i=!0,B&&l.clearTimeout(B),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
A=void 0,// Cache response headers
t=e||"",// Set readyState
E.readyState=a>0?4:0,// Determine if successful
S=a>=200&&a<300||304===a,F&&(d=/* Handles responses to an ajax request:
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
if(t)return t!==e[0]&&e.unshift(t),p[t]}(L,E,F)),!S&&I.inArray("script",L.dataTypes)>-1&&0>I.inArray("json",L.dataTypes)&&(L.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
d=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(l,a,p,A){var W,t,F,B,e,i={},n=l.dataTypes.slice();// Create converters map with lowercased keys
if(n[1])for(F in l.converters)i[F.toLowerCase()]=l.converters[F];// Convert to each sequential dataType
for(t=n.shift();t;)if(l.responseFields[t]&&(p[l.responseFields[t]]=a),!e&&A&&l.dataFilter&&(a=l.dataFilter(a,l.dataType)),e=t,t=n.shift()){// There's only work to do if current dataType is non-auto
if("*"===t)t=e;else if("*"!==e&&e!==t){// If none found, seek a pair
if(!// Seek a direct converter
(F=i[e+" "+t]||i["* "+t])){for(W in i)if(// If conv2 outputs current
(B=W.split(" "))[1]===t&&// If prev can be converted to accepted input
(F=i[e+" "+B[0]]||i["* "+B[0]])){// Condense equivalence converters
!0===F?F=i[W]:!0!==i[W]&&(t=B[0],n.unshift(B[1]));break}}// Apply converter (if not an equivalence)
if(!0!==F){// Unless errors are allowed to bubble, catch and return them
if(F&&l.throws)a=F(a);else try{a=F(a)}catch(l){return{state:"parsererror",error:F?l:"No conversion from "+e+" to "+t}}}}}return{state:"success",data:a}}(L,d,E,S),S?(L.ifModified&&((C=E.getResponseHeader("Last-Modified"))&&(I.lastModified[W]=C),(C=E.getResponseHeader("etag"))&&(I.etag[W]=C)),204===a||"HEAD"===L.type?f="nocontent":304===a?f="notmodified":(f=d.state,r=d.data,S=!(c=d.error))):(// Extract error from statusText and normalize for non-aborts
c=f,(a||!f)&&(f="error",a<0&&(a=0))),// Set data for the fake xhr object
E.status=a,E.statusText=(p||f)+"",S?g.resolveWith(o,[r,f,E]):g.rejectWith(o,[E,f,c]),// Status-dependent callbacks
E.statusCode(h),h=void 0,n&&s.trigger(S?"ajaxSuccess":"ajaxError",[E,L,S?r:c]),// Complete
u.fireWith(o,[E,f]),!n||(s.trigger("ajaxComplete",[E,L]),--I.active||I.event.trigger("ajaxStop")))}return E},getJSON:function(l,a,p){return I.get(l,a,p,"json")},getScript:function(l,a){return I.get(l,void 0,a,"script")}}),I.each(["get","post"],function(l,a){I[a]=function(l,p,A,W){// The url can be an options object (which then must have .url)
return s(p)&&(W=W||A,A=p,p=void 0),I.ajax(I.extend({url:l,type:a,dataType:W,data:p,success:A},I.isPlainObject(l)&&l))}}),I.ajaxPrefilter(function(l){var a;for(a in l.headers)"content-type"===a.toLowerCase()&&(l.contentType=l.headers[a]||"")}),I._evalUrl=function(l,a,p){return I.ajax({url:l,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(l){I.globalEval(l,a,p)}})},I.fn.extend({wrapAll:function(l){var a;return this[0]&&(s(l)&&(l=l.call(this[0])),// The elements to wrap the target around
a=I(l,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var l=this;l.firstElementChild;)l=l.firstElementChild;return l}).append(this)),this},wrapInner:function(l){return s(l)?this.each(function(a){I(this).wrapInner(l.call(this,a))}):this.each(function(){var a=I(this),p=a.contents();p.length?p.wrapAll(l):a.append(l)})},wrap:function(l){var a=s(l);return this.each(function(p){I(this).wrapAll(a?l.call(this,p):l)})},unwrap:function(l){return this.parent(l).not("body").each(function(){I(this).replaceWith(this.childNodes)}),this}}),I.expr.pseudos.hidden=function(l){return!I.expr.pseudos.visible(l)},I.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)},I.ajaxSettings.xhr=function(){try{return new l.XMLHttpRequest}catch(l){}};var aM={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},aR=I.ajaxSettings.xhr();o.cors=!!aR&&"withCredentials"in aR,o.ajax=aR=!!aR,I.ajaxTransport(function(a){var p,A;// Cross domain only allowed if supported through XMLHttpRequest
if(o.cors||aR&&!a.crossDomain)return{send:function(W,t){var F,B=a.xhr();// Apply custom fields if provided
if(B.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(F in a.xhrFields)B[F]=a.xhrFields[F];// Set headers
for(F in a.mimeType&&B.overrideMimeType&&B.overrideMimeType(a.mimeType),a.crossDomain||W["X-Requested-With"]||(W["X-Requested-With"]="XMLHttpRequest"),W)B.setRequestHeader(F,W[F]);// Callback
p=function(l){return function(){p&&(p=A=B.onload=B.onerror=B.onabort=B.ontimeout=B.onreadystatechange=null,"abort"===l?B.abort():"error"===l?"number"!=typeof B.status?t(0,"error"):t(B.status,B.statusText):t(aM[B.status]||B.status,B.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
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
I.ajaxPrefilter(function(l){l.crossDomain&&(l.contents.script=!1)}),// Install script dataType
I.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(l){return I.globalEval(l),l}}}),// Handle cache's special case and crossDomain
I.ajaxPrefilter("script",function(l){void 0===l.cache&&(l.cache=!1),l.crossDomain&&(l.type="GET")}),// Bind script tag hack transport
I.ajaxTransport("script",function(l){// This transport only deals with cross domain or forced-by-attrs requests
if(l.crossDomain||l.scriptAttrs){var a,p;return{send:function(A,W){a=I("<script>").attr(l.scriptAttrs||{}).prop({charset:l.scriptCharset,src:l.url}).on("load error",p=function(l){a.remove(),p=null,l&&W("error"===l.type?404:200,l.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
c.head.appendChild(a[0])},abort:function(){p&&p()}}}});var aD=[],aV=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
I.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var l=aD.pop()||I.expando+"_"+as.guid++;return this[l]=!0,l}}),// Detect, normalize options and install callbacks for jsonp requests
I.ajaxPrefilter("json jsonp",function(a,p,A){var W,t,F,B=!1!==a.jsonp&&(aV.test(a.url)?"url":"string"==typeof a.data&&0===(a.contentType||"").indexOf("application/x-www-form-urlencoded")&&aV.test(a.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(B||"jsonp"===a.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
W=a.jsonpCallback=s(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,B?a[B]=a[B].replace(aV,"$1"+W):!1!==a.jsonp&&(a.url+=(ag.test(a.url)?"&":"?")+a.jsonp+"="+W),// Use data converter to retrieve json after script execution
a.converters["script json"]=function(){return F||I.error(W+" was not called"),F[0]},// Force json dataType
a.dataTypes[0]="json",// Install callback
t=l[W],l[W]=function(){F=arguments},// Clean-up function (fires after converters)
A.always(function(){void 0===t?I(l).removeProp(W):l[W]=t,a[W]&&(// Make sure that re-using the options doesn't screw things around
a.jsonpCallback=p.jsonpCallback,// Save the callback name for future use
aD.push(W)),F&&s(t)&&t(F[0]),F=t=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
o.createHTMLDocument=((p=c.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===p.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
I.parseHTML=function(l,a,p){var A,W,t;return"string"!=typeof l?[]:("boolean"==typeof a&&(p=a,a=!1),a||(o.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(A=(a=c.implementation.createHTMLDocument("")).createElement("base")).href=c.location.href,a.head.appendChild(A)):a=c),W=M.exec(l),t=!p&&[],W)?[a.createElement(W[1])]:(W=lv([l],a,t),t&&t.length&&I(t).remove(),I.merge([],W.childNodes))},/**
 * Load a url into a page
 */I.fn.load=function(l,a,p){var A,W,t,F=this,B=l.indexOf(" ");return B>-1&&(A=an(l.slice(B)),l=l.slice(0,B)),s(a)?(// We assume that it's the callback
p=a,a=void 0):a&&"object"==typeof a&&(W="POST"),F.length>0&&I.ajax({url:l,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:W||"GET",dataType:"html",data:a}).done(function(l){// Save response for use in complete callback
t=arguments,F.html(A?// Exclude scripts to avoid IE 'Permission Denied' errors
I("<div>").append(I.parseHTML(l)).find(A):l);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(p&&function(l,a){F.each(function(){p.apply(this,t||[l.responseText,a,l])})}),this},I.expr.pseudos.animated=function(l){return I.grep(I.timers,function(a){return l===a.elem}).length},I.offset={setOffset:function(l,a,p){var A,W,t,F,B,e,i=I.css(l,"position"),n=I(l),S={};"static"===i&&(l.style.position="relative"),B=n.offset(),t=I.css(l,"top"),e=I.css(l,"left"),("absolute"===i||"fixed"===i)&&(t+e).indexOf("auto")>-1?(F=(A=n.position()).top,W=A.left):(F=parseFloat(t)||0,W=parseFloat(e)||0),s(a)&&(a=a.call(l,p,I.extend({},B))),null!=a.top&&(S.top=a.top-B.top+F),null!=a.left&&(S.left=a.left-B.left+W),"using"in a?a.using.call(l,S):n.css(S)}},I.fn.extend({// offset() relates an element's border box to the document origin
offset:function(l){// Preserve chaining for setter
if(arguments.length)return void 0===l?this:this.each(function(a){I.offset.setOffset(this,l,a)});var a,p,A=this[0];if(A)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
A.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
a=A.getBoundingClientRect(),p=A.ownerDocument.defaultView,{top:a.top+p.pageYOffset,left:a.left+p.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var l,a,p,A=this[0],W={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===I.css(A,"position"))a=A.getBoundingClientRect();else{for(a=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
p=A.ownerDocument,l=A.offsetParent||p.documentElement;l&&(l===p.body||l===p.documentElement)&&"static"===I.css(l,"position");)l=l.parentNode;l&&l!==A&&1===l.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
W=I(l).offset(),W.top+=I.css(l,"borderTopWidth",!0),W.left+=I.css(l,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:a.top-W.top-I.css(A,"marginTop",!0),left:a.left-W.left-I.css(A,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var l=this.offsetParent;l&&"static"===I.css(l,"position");)l=l.offsetParent;return l||lS})}}),// Create scrollLeft and scrollTop methods
I.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(l,a){var p="pageYOffset"===a;I.fn[l]=function(A){return O(this,function(l,A,W){// Coalesce documents and windows
var t;if(g(l)?t=l:9===l.nodeType&&(t=l.defaultView),void 0===W)return t?t[a]:l[A];t?t.scrollTo(p?t.pageXOffset:W,p?W:t.pageYOffset):l[A]=W},l,A,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
I.each(["top","left"],function(l,a){I.cssHooks[a]=lz(o.pixelPosition,function(l,p){if(p)// If curCSS returns percentage, fallback to offset
return p=lZ(l,a),lT.test(p)?I(l).position()[a]+"px":p})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
I.each({Height:"height",Width:"width"},function(l,a){I.each({padding:"inner"+l,content:a,"":"outer"+l},function(p,A){// Margin is only for outerHeight, outerWidth
I.fn[A]=function(W,t){var F=arguments.length&&(p||"boolean"!=typeof W),B=p||(!0===W||!0===t?"margin":"border");return O(this,function(a,p,W){var t;return g(a)?0===A.indexOf("outer")?a["inner"+l]:a.document.documentElement["client"+l]:9===a.nodeType?(t=a.documentElement,Math.max(a.body["scroll"+l],t["scroll"+l],a.body["offset"+l],t["offset"+l],t["client"+l])):void 0===W?I.css(a,p,B):I.style(a,p,W,B)},a,F?W:void 0,F)}})}),I.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,a){I.fn[a]=function(l){return this.on(a,l)}}),I.fn.extend({bind:function(l,a,p){return this.on(l,null,a,p)},unbind:function(l,a){return this.off(l,null,a)},delegate:function(l,a,p,A){return this.on(a,l,p,A)},undelegate:function(l,a,p){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(l,"**"):this.off(a,l||"**",p)},hover:function(l,a){return this.on("mouseenter",l).on("mouseleave",a||l)}}),I.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,a){// Handle event binding
I.fn[a]=function(l,p){return arguments.length>0?this.on(a,null,l,p):this.trigger(a)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var aT=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
I.proxy=function(l,a){var p,A,W;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof a&&(p=l[a],a=l,l=p),s(l))return(// Simulated bind
A=t.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(W=function(){return l.apply(a||this,A.concat(t.call(arguments)))}).guid=l.guid=l.guid||I.guid++,W)},I.holdReady=function(l){l?I.readyWait++:I.ready(!0)},I.isArray=Array.isArray,I.parseJSON=JSON.parse,I.nodeName=v,I.isFunction=s,I.isWindow=g,I.camelCase=ll,I.type=d,I.now=Date.now,I.isNumeric=function(l){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var a=I.type(l);return("number"===a||"string"===a)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(l-parseFloat(l))},I.trim=function(l){return null==l?"":(l+"").replace(aT,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return I});var aJ=l.jQuery,aX=l.$;return I.noConflict=function(a){return l.$===I&&(l.$=aX),a&&l.jQuery===I&&(l.jQuery=aJ),I},void 0===a&&(l.jQuery=l.$=I),I},"object"==typeof A?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
A=a.document?p(a,!0):function(l){if(!l.document)throw Error("jQuery requires a window with a document");return p(l)}:p(a);// @ts-ignore
  <div class="t t1" style="height: 60lvh">
    <section>
      <div class="upcomingCover"></div>
      <div class="logoWrap">
        <svg id="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <image x="0" y="0" width="100" height="100" xlink:href="${/*@__PURE__*/l(W)}" />
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
  <div class="t t2" style="height: 40lvh">
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
            <p>Sunday, 17 December at 7 PM</p>
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
        <source type="video/webm" src="${/*@__PURE__*/l(t)}">
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
      <p>We are particularly looking for regular Viola and Brass players. However, if you would like to be added to our list of deps, please get in touch via email or drop us a Facebook message. @RoathChamber
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
          <a href="/?archive" class="primary">Go To Concerts Archive</a>
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
  </div>`;function B(l,a,p){var A,W;let t=document.querySelector(l);if(!t)throw Error(`Invalid element for selector: ${l}`);let F=/** general helper functions */function(l,a){let p=l;do p=p.parentElement;while(p&&!(null==p?void 0:p.matches(".t")))return p}(t,0);if(!F)throw Error(`Couldn't find track for selector ${l}`);let B=new ViewTimeline({subject:F});t.animate(a,(A=function(l){for(var a=1;a<arguments.length;a++){var p=null!=arguments[a]?arguments[a]:{},A=Object.keys(p);"function"==typeof Object.getOwnPropertySymbols&&(A=A.concat(Object.getOwnPropertySymbols(p).filter(function(l){return Object.getOwnPropertyDescriptor(p,l).enumerable}))),A.forEach(function(a){var A;A=p[a],a in l?Object.defineProperty(l,a,{value:A,enumerable:!0,configurable:!0,writable:!0}):l[a]=A})}return l}({},p),W=W={timeline:B},Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(W)):(function(l,a){var p=Object.keys(l);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(l);p.push.apply(p,A)}return p})(Object(W)).forEach(function(l){Object.defineProperty(A,l,Object.getOwnPropertyDescriptor(W,l))}),A))}!function(){function l(l,a){for(var p=0;p<a.length;p++){var A=a[p];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(l,A.key,A)}}function a(a,p,A){return p&&l(a.prototype,p),A&&l(a,A),a}function p(){return(p=Object.assign||function(l){for(var a=1;a<arguments.length;a++){var p=arguments[a];for(var A in p)Object.prototype.hasOwnProperty.call(p,A)&&(l[A]=p[A])}return l}).apply(this,arguments)}function A(l,a){l.prototype=Object.create(a.prototype),l.prototype.constructor=l,W(l,a)}function W(l,a){return(W=Object.setPrototypeOf||function(l,a){return l.__proto__=a,l})(l,a)}function t(l){if(void 0===l)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function F(l,a){(null==a||a>l.length)&&(a=l.length);for(var p=0,A=Array(a);p<a;p++)A[p]=l[p];return A}function B(l,a){var p="undefined"!=typeof Symbol&&l[Symbol.iterator]||l["@@iterator"];if(p)return(p=p.call(l)).next.bind(p);if(Array.isArray(l)||(p=function(l,a){if(l){if("string"==typeof l)return F(l,a);var p=Object.prototype.toString.call(l).slice(8,-1);return"Object"===p&&l.constructor&&(p=l.constructor.name),"Map"===p||"Set"===p?Array.from(l):"Arguments"===p||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?F(l,a):void 0}}(l))||a&&l&&"number"==typeof l.length){p&&(l=p);var A=0;return function(){return A>=l.length?{done:!0}:{done:!1,value:l[A++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}!function(){var l,p=new WeakMap,W=function(){function l(l,a,A,W){p.set(this,{values:function(l){for(var a,p=[],A=0;A<l.length;A++)p[A]="number"==typeof(a=l[A])?new CSSUnitValue(a,"number"):a;return p}(l),operator:a,name:A||a,delimiter:W||", "})}return l.prototype.toString=function(){var l=p.get(this);return l.name+"("+l.values.join(l.delimiter)+")"},a(l,[{key:"operator",get:function(){return p.get(this).operator}},{key:"values",get:function(){return p.get(this).values}}]),l}(),t=((l={CSSUnitValue:function(){function l(l,a){p.set(this,{value:l,unit:a})}return l.prototype.toString=function(){var l=p.get(this);return""+l.value+function(l){switch(l){case"percent":return"%";case"number":return"";default:return l.toLowerCase()}}(l.unit)},a(l,[{key:"value",get:function(){return p.get(this).value},set:function(l){p.get(this).value=l}},{key:"unit",get:function(){return p.get(this).unit}}]),l}(),CSSKeywordValue:function(){function l(l){this.value=l}return l.prototype.toString=function(){return this.value.toString()},l}(),CSSMathSum:function(l){function a(a){return l.call(this,arguments,"sum","calc"," + ")||this}return A(a,l),a}(W),CSSMathProduct:function(l){function a(a){return l.call(this,arguments,"product","calc"," * ")||this}return A(a,l),a}(W),CSSMathNegate:function(l){function a(a){return l.call(this,[arguments[0]],"negate","-")||this}return A(a,l),a}(W)}).CSSMathNegate=function(l){function a(a){return l.call(this,[1,arguments[0]],"invert","calc"," / ")||this}return A(a,l),a}(W),l.CSSMathMax=function(l){function a(){return l.call(this,arguments,"max")||this}return A(a,l),a}(W),l.CSSMathMin=function(l){function a(){return l.call(this,arguments,"min")||this}return A(a,l),a}(W),l);if(!window.CSS&&!Reflect.defineProperty(window,"CSS",{value:{}}))throw Error("Error installing CSSOM support");for(var F in window.CSSUnitValue||["number","percent","em","ex","px","cm","mm","in","pt","pc","Q","vw","vh","vmin","vmax","rems","ch","deg","rad","grad","turn","ms","s","Hz","kHz","dppx","dpi","dpcm","fr"].forEach(function(l){if(!Reflect.defineProperty(CSS,l,{value:function(a){return new CSSUnitValue(a,l)}}))throw Error("Error installing CSS."+l)}),t)if(!(F in window)&&!Reflect.defineProperty(window,F,{value:t[F]}))throw Error("Error installing CSSOM support for "+F)}(),new CSSKeywordValue("auto");var e=new WeakMap;function i(l){return l===document.scrollingElement?document:l}function n(l){r(l);var a=e.get(l).animations;if(0!==a.length)for(var p=l.currentTime,A=0;A<a.length;A++)a[A].tickAnimation(p)}function S(l,a){if(!l)return null;var p="horizontal-tb"==getComputedStyle(l).writingMode,A=l.scrollTop;return("horizontal"==a||"inline"==a&&p||"block"==a&&!p)&&(A=Math.abs(l.scrollLeft)),A}function r(l){if(l instanceof Q){var a,p=l.subject;p&&"none"!=getComputedStyle(p).display?L(l,f(p)):L(l,null)}else(a=e.get(l)).anonymousSource&&L(l,u(a.anonymousSource,a.anonymousTarget))}function L(l,a){var p=e.get(l),A=p.source,W=p.scrollListener;if(A!=a&&(A&&W&&i(A).removeEventListener("scroll",W),e.get(l).source=a,a)){var t=function(){n(l)};i(a).addEventListener("scroll",t),p.scrollListener=t}}function o(l,a){for(var p=e.get(l).animations,A=0;A<p.length;A++)p[A].animation==a&&p.splice(A,1)}function s(l,a,p){for(var A=e.get(l).animations,W=0;W<A.length;W++)if(A[W].animation==a)return;A.push({animation:a,tickAnimation:p}),n(l)}var g=function(){function l(l){e.set(this,{source:null,orientation:"block",anonymousSource:l?l.anonymousSource:null,anonymousTarget:l?l.anonymousTarget:null,subject:null,inset:l?l.inset:null,animations:[],scrollListener:null}),L(this,l&&void 0!==l.source?l.source:document.scrollingElement),this.orientation=l&&l.orientation||"block",n(this)}return a(l,[{key:"source",get:function(){return e.get(this).source},set:function(l){L(this,l),n(this)}},{key:"orientation",get:function(){return e.get(this).orientation},set:function(l){if(-1===["block","inline","horizontal","vertical"].indexOf(l))throw TypeError("Invalid orientation");e.get(this).orientation=l,n(this)}},{key:"duration",get:function(){return CSS.percent(100)}},{key:"phase",get:function(){var l=this.source;if(!l)return"inactive";var a=getComputedStyle(l);return"none"==a.display?"inactive":l==document.scrollingElement||"visible"!=a.overflow&&"clip"!=a.overflow?"active":"inactive"}},{key:"currentTime",get:function(){var l,a,p=this.source;if(!p||"inactive"==this.phase)return null;var A=this.orientation,W=S(p,A),t=(l=A,a="horizontal-tb"==getComputedStyle(p).writingMode,"block"===l?l=a?"vertical":"horizontal":"inline"===l&&(l=a?"horizontal":"vertical"),"vertical"===l?p.scrollHeight-p.clientHeight:"horizontal"===l?p.scrollWidth-p.clientWidth:void 0);return t>0?CSS.percent(100*W/t):CSS.percent(100)}},{key:"__polyfill",get:function(){return!0}}]),l}();function c(l,a){for(var p=l.parentElement;null!=p;){if(a(p))return p;p=p.parentElement}}function u(l,a){return"root"==l?document.scrollingElement:f(a)}function h(l){switch(getComputedStyle(l).display){case"block":case"inline-block":case"list-item":case"table":case"table-caption":case"flow-root":case"flex":case"grid":return!0}return!1}function d(l){var a=getComputedStyle(l);return"none"!=a.transform||"none"!=a.perspective||"transform"==a.willChange||"perspective"==a.willChange||"none"!=a.filter||"filter"==a.willChange||"none"!=a.backdropFilter}function C(l){return"static"!=getComputedStyle(l).position||d(l)}function f(l){if(l){for(;l=function(l){switch(getComputedStyle(l).position){case"static":case"relative":case"sticky":return c(l,h);case"absolute":return c(l,C);case"fixed":return c(l,d)}}(l);)switch(getComputedStyle(l)["overflow-x"]){case"auto":case"scroll":case"hidden":return l==document.body&&"visible"==getComputedStyle(document.scrollingElement).overflow?document.scrollingElement:l}return document.scrollingElement}}function I(l,a){var p=e.get(l);return"inactive"===l.phase?null:l instanceof Q?E(a,l.source,l.subject,p.orientation,p.inset):null}function E(l,a,p,A,W){for(var t=0,F=0,B=p,e=a.offsetParent;B&&B!=e;)F+=B.offsetLeft,t+=B.offsetTop,B=B.offsetParent;F-=a.offsetLeft+a.clientLeft,t-=a.offsetTop+a.clientTop;var i=getComputedStyle(a),n="horizontal-tb"==i.writingMode,S=void 0,r=void 0,L=void 0;"horizontal"==A||"inline"==A&&n||"block"==A&&!n?(S=p.clientWidth,r=F,("rtl"==i.direction||"vertical-rl"==i.writingMode)&&(r+=a.scrollWidth-a.clientWidth),L=a.clientWidth):(S=p.clientHeight,r=t,L=a.clientHeight);var o=function(l,a){var p={start:0,end:0};if(!l)return p;var A=l.split(" "),W=[];if(A.forEach(function(l){l.endsWith("%")?W.push(a/100*parseFloat(l)):l.endsWith("px")?W.push(parseFloat(l)):"auto"===l&&W.push(0)}),W.length>2)throw TypeError("Invalid inset");return 1==W.length?(p.start=W[0],p.end=W[0]):2==W.length&&(p.start=W[0],p.end=W[1]),p}(W,L),s=r-L+o.end,g=r+S-o.start,c=s+S,u=g-S,h=Math.min(c,u),d=Math.max(c,u),C=void 0,f=void 0;switch(l){case"cover":C=s,f=g;break;case"contain":C=h,f=d;break;case"enter":C=s,f=h;break;case"exit":C=d,f=g}return{start:C,end:f}}function v(l,a,p){return m(I(l,a),p,I(l,"cover"))}function m(l,a,p){return l&&p?(a.value/100*(l.end-l.start)+l.start-p.start)/(p.end-p.start):0}var Q=function(l){function p(a){var p;return a.axis&&(a.orientation=a.axis),p=l.call(this,a)||this,e.get(t(p)).subject=a&&a.subject?a.subject:void 0,r(t(p)),n(t(p)),p}return A(p,l),a(p,[{key:"source",get:function(){return r(this),e.get(this).source},set:function(l){throw Error("Cannot set the source of a view timeline")}},{key:"subject",get:function(){return e.get(this).subject}},{key:"axis",get:function(){return e.get(this).orientation}},{key:"currentTime",get:function(){var l=S(this.source,this.orientation);if(null==l)return null;var a=I(this,"cover");return a?CSS.percent((l-a.start)/(a.end-a.start)*100):null}}]),p}(g),y=window.Element.prototype.animate,w=window.Animation,b=["enter","exit","cover","contain"],k=function(){function l(){var l=this;this.state="pending",this.nativeResolve=this.nativeReject=null,this.promise=new Promise(function(a,p){l.nativeResolve=a,l.nativeReject=p})}var a=l.prototype;return a.resolve=function(l){this.state="resolved",this.nativeResolve(l)},a.reject=function(l){this.state="rejected",this.promise.catch(function(){}),this.nativeReject(l)},l}();function K(l){l.readyPromise=new k,requestAnimationFrame(function(){null!==l.timeline.currentTime&&P(l)})}function U(){return new DOMException("The user aborted a request","AbortError")}function q(l,a){if(null===a)return a;if("number"!=typeof a)throw new DOMException("Unexpected value: "+a+".  Cannot convert to CssNumberish","InvalidStateError");var p=X(l);return CSS.percent(p?100*a/p:0)}function x(l,a){if(l.timeline){if(null===a)return a;if("percent"===a.unit){var p=X(l);return a.value*p/100}throw new DOMException("CSSNumericValue must be a percentage for progress based animations.","NotSupportedError")}if(null==a||"number"==typeof a)return a;var A=a.to("ms");if(convertTime)return A.value;throw new DOMException("CSSNumericValue must be either a number or a time value for time based animations.","InvalidStateError")}function M(l){if(l.finishedPromise&&"pending"==l.finishedPromise.state&&"finished"==l.proxy.playState){l.finishedPromise.resolve(l.proxy),l.animation.pause();var a=new CustomEvent("finish",{detail:{currentTime:l.proxy.currentTime,timelineTime:l.proxy.timeline.currentTime}});Object.defineProperty(a,"currentTime",{get:function(){return this.detail.currentTime}}),Object.defineProperty(a,"timelineTime",{get:function(){return this.detail.timelineTime}}),requestAnimationFrame(function(){queueMicrotask(function(){l.animation.dispatchEvent(a)})})}}function R(l){return null!==l.pendingPlaybackRate?l.pendingPlaybackRate:l.animation.playbackRate}function D(l){null!==l.pendingPlaybackRate&&(l.animation.playbackRate=l.pendingPlaybackRate,l.pendingPlaybackRate=null)}function V(l){if(!l.timeline)return null;var a=x(l,l.timeline.currentTime);if(null===a||null===l.startTime)return null;var p=(a-l.startTime)*l.animation.playbackRate;return -0==p&&(p=0),p}function T(l,a){if(!l.timeline)return null;var p=x(l,l.timeline.currentTime);return null==p?null:p-a/l.animation.playbackRate}function J(l,a,p){if(l.timeline){var A=a?x(l,l.proxy.currentTime):V(l);if(A&&null!=l.startTime&&!l.proxy.pending){var W=R(l),t=X(l),F=l.previousCurrentTime;W>0&&A>=t?((null===F||F<t)&&(F=t),l.holdTime=a?A:F):W<0&&A<=0?((null==F||F>0)&&(F=0),l.holdTime=a?A:F):0!=W&&(a&&null!==l.holdTime&&(l.startTime=T(l,l.holdTime)),l.holdTime=null)}G(l),l.previousCurrentTime=x(l,l.proxy.currentTime),"finished"==l.proxy.playState?(l.finishedPromise||(l.finishedPromise=new k),"pending"==l.finishedPromise.state&&(p?M(l):Promise.resolve().then(function(){M(l)}))):(l.finishedPromise&&"resolved"==l.finishedPromise.state&&(l.finishedPromise=new k),"paused"!=l.animation.playState&&l.animation.pause())}}function X(l){var a,p=(a=l.proxy.effect.getTiming(),l.normalizedTiming||a);return Math.max(0,p.delay+p.endDelay+p.iterations*p.duration)}function G(l){if(l.timeline){if(null!==l.startTime){var a=l.timeline.currentTime;null!=a&&Y(l,(x(l,a)-l.startTime)*l.animation.playbackRate)}else null!==l.holdTime&&Y(l,l.holdTime)}}function Y(l,a){var p=l.timeline,A=l.animation.playbackRate;l.animation.currentTime=a+(p.currentTime&&p.currentTime.value==(A<0?0:100)?A<0?.001:-.001:0)}function Z(l,a){if(l.timeline){var p="paused"==l.proxy.playState&&l.proxy.pending,A=!1,W=null,t=x(l,l.proxy.currentTime);l.resetCurrentTimeOnResume&&(t=null,l.resetCurrentTimeOnResume=!1);var F=R(l),B=X(l);if(F>0&&a&&(null==t||t<0||t>=B))W=0;else if(F<0&&a&&(null==t||t<=0||t>B)){if(1/0==B)return void l.animation.play();W=B}else 0==F&&null==t&&(W=0);null!=W&&(l.startTime=W,l.holdTime=null,D(l)),s(l.timeline,l.animation,z.bind(l.proxy)),l.holdTime&&(l.startTime=null),l.pendingTask&&(l.pendingTask=null,A=!0),(null!==l.holdTime||null!==W||p||null!==l.pendingPlaybackRate)&&(l.readyPromise&&!A&&(l.readyPromise=null),G(l),l.readyPromise||K(l),l.pendingTask="play",J(l,!1,!1))}}function z(l){var a=N.get(this);if(null!=l){a.pendingTask&&P(a);var p=this.playState;"running"!=p&&"finished"!=p||(Y(a,(x(a,l)-x(a,this.startTime))*this.playbackRate),"finished"==p&&0!=R(a)&&(a.holdTime=null),J(a,!1,!1))}else"idle"!=a.animation.playState&&a.animation.cancel()}function P(l){var a;"pause"==l.pendingTask?(a=x(l,l.timeline.currentTime),null!=l.startTime&&null==l.holdTime&&(l.holdTime=(a-l.startTime)*l.animation.playbackRate),D(l),l.startTime=null,l.readyPromise.resolve(l.proxy),J(l,!1,!1),G(l),l.pendingTask=null):"play"==l.pendingTask&&function(l){var a=x(l,l.timeline.currentTime);if(null!=l.holdTime)D(l),0==l.animation.playbackRate?l.startTime=a:(l.startTime=a-l.holdTime/l.animation.playbackRate,l.holdTime=null);else if(null!==l.startTime&&null!==l.pendingPlaybackRate){var p=(a-l.startTime)*l.animation.playbackRate;D(l);var A=l.animation.playbackRate;0==A?(l.holdTime=null,l.startTime=a):l.startTime=a-p/A}l.readyPromise&&"pending"==l.readyPromise.state&&l.readyPromise.resolve(l.proxy),J(l,!1,!1),G(l),l.pendingTask=null}(l)}var N=new WeakMap,H=function(){function l(l,a,p){void 0===p&&(p={});var A,W,t=l instanceof w?l:new w(l,B),F=a instanceof g,B=F?void 0:a;N.set(this,{animation:t,timeline:F?a:void 0,playState:F?"idle":null,readyPromise:null,finishedPromise:null,startTime:null,holdTime:null,previousCurrentTime:null,resetCurrentTimeOnResume:!1,pendingPlaybackRate:null,pendingTask:null,specifiedTiming:null,normalizedTiming:null,effect:null,timeRange:a instanceof ViewTimeline?(W=$((A=p)["animation-time-range"]),A["animation-delay"]&&(W.start=O(A["animation-delay"],j().offset)),A["animation-end-delay"]&&(W.end=O(A["animation-end-delay"],_().offset)),W):null,proxy:this})}var p=l.prototype;return p.finish=function(){var l=N.get(this);if(l.timeline){var a=R(l),p=X(l);if(0==a)throw new DOMException("Cannot finish Animation with a playbackRate of 0.","InvalidStateError");if(a>0&&1/0==p)throw new DOMException("Cannot finish Animation with an infinite target effect end.","InvalidStateError");D(l);var A=a<0?0:p;this.currentTime=q(l,A);var W=x(l,l.timeline.currentTime);null===l.startTime&&null!==W&&(l.startTime=W-A/l.animation.playbackRate),"pause"==l.pendingTask&&null!==l.startTime&&(l.holdTime=null,l.pendingTask=null,l.readyPromise.resolve(this)),"play"==l.pendingTask&&null!==l.startTime&&(l.pendingTask=null,l.readyPromise.resolve(this)),J(l,!0,!0)}else l.animation.finish()},p.play=function(){var l=N.get(this);l.timeline?Z(l,!0):l.animation.play()},p.pause=function(){var l=N.get(this);if(l.timeline){if("paused"!=this.playState){var a=null,p=l.animation.playbackRate,A=X(l);if(null===l.animation.currentTime){if(p>=0)a=0;else{if(1/0==A)return void l.animation.pause();a=A}}null!==a&&(l.startTime=a),"play"==l.pendingTask?l.pendingTask=null:l.readyPromise=null,l.readyPromise||K(l),l.pendingTask="pause"}}else l.animation.pause()},p.reverse=function(){var l=N.get(this),a=R(l),p=l.resetCurrentTimeOnResume?null:x(l,this.currentTime),A=1/0==X(l),W=0!=a&&(a<0||p>0||!A);if(!l.timeline||!W)return W&&(l.pendingPlaybackRate=-R(l)),void l.animation.reverse();if("inactive"==l.timeline.phase)throw new DOMException("Cannot reverse an animation with no active timeline","InvalidStateError");this.updatePlaybackRate(-a),Z(l,!0)},p.updatePlaybackRate=function(l){var a=N.get(this);if(a.pendingPlaybackRate=l,a.timeline){if(!a.readyPromise||"pending"!=a.readyPromise.state)switch(this.playState){case"idle":case"paused":D(a);break;case"finished":var p=x(a,a.timeline.currentTime),A=null!==p?(p-a.startTime)*a.animation.playbackRate:null;a.startTime=0==l?p:null!=p&&null!=A?(p-A)/l:null,D(a),J(a,!1,!1),G(a);break;default:Z(a,!1)}}else a.animation.updatePlaybackRate(l)},p.persist=function(){N.get(this).animation.persist()},p.cancel=function(){var l=N.get(this);l.timeline?("idle"!=this.playState&&(l.pendingTask&&(l.pendingTask=null,D(l),l.readyPromise.reject(U()),K(l),l.readyPromise.resolve(l.proxy)),l.finishedPromise&&"pending"==l.finishedPromise.state&&l.finishedPromise.reject(U()),l.finishedPromise=new k,l.animation.cancel()),l.startTime=null,l.holdTime=null,o(l.timeline,l.animation)):l.animation.cancel()},p.addEventListener=function(l,a,p){N.get(this).animation.addEventListener(l,a,p)},p.removeEventListener=function(l,a,p){N.get(this).animation.removeEventListener(l,a,p)},p.dispatchEvent=function(l){N.get(this).animation.dispatchEvent(l)},a(l,[{key:"effect",get:function(){var l,a,p,A=N.get(this);return A.timeline?(A.effect||(A.effect=(a=(l=A.animation.effect).updateTiming,(p=new Proxy(l,{get:function(a,p){var A=a[p];return"function"==typeof A?A.bind(l):A},set:function(l,a,p){return l[a]=p,!0}})).getComputedTiming=new Proxy(l.getComputedTiming,{apply:function(a){l.getTiming();var p=a.apply(l);if(A.timeline){p.localTime=q(A,p.localTime),p.endTime=q(A,p.endTime),p.activeDuration=q(A,p.activeDuration);var W=X(A);p.duration=W?CSS.percent(100*(p.iterations?(W-p.delay-p.endDelay)/p.iterations:0)/W):CSS.percent(0),void 0===A.timeline.currentTime&&(p.localTime=null)}return p}}),p.getTiming=new Proxy(l.getTiming,{apply:function(p,W){if(A.specifiedTiming)return A.specifiedTiming;A.specifiedTiming=p.apply(l);var t,F,B=Object.assign({},A.specifiedTiming),e=!1;return A.timeline instanceof ViewTimeline&&(t=function(l){if(!(l.timeline instanceof ViewTimeline))return 0;var a=l.timeRange.start;return v(l.timeline,a.name,a.offset)}(A),F=function(l){if(!(l.timeline instanceof ViewTimeline))return 0;var a=l.timeRange.end;return 1-v(l.timeline,a.name,a.offset)}(A),e=!0),(null===B.duration||"auto"===B.duration||e)&&A.timeline&&(e?(B.delay=1e5*t,B.endDelay=1e5*F):(B.delay=0,B.endDelay=0),B.duration=B.iterations?((B.iterations?1e5:0)-B.delay-B.endDelay)/B.iterations:0,a.apply(l,[B])),A.normalizedTiming=B,A.specifiedTiming}}),p.updateTiming=new Proxy(l.updateTiming,{apply:function(a,p,W){if(A.timeline){var t=W[0];if(1/0===t.duration)throw TypeError("Effect duration cannot be Infinity when used with Scroll Timelines");if(1/0===t.iterations)throw TypeError("Effect iterations cannot be Infinity when used with Scroll Timelines")}A.specifiedTiming&&a.apply(l,[A.specifiedTiming]),a.apply(l,W),A.specifiedTiming=null}}),p)),A.effect):A.animation.effect},set:function(l){N.get(this).animation.effect=l,details.effect=null}},{key:"timeline",get:function(){var l=N.get(this);return l.timeline||l.animation.timeline},set:function(l){var a=this.timeline;if(a!=l){var p=this.playState,A=this.currentTime,W=N.get(this),t=X(W),F=t>0?x(W,A)/t:0,B=a instanceof g,e=l instanceof g;W.resetCurrentTimeOnResume=!1;var i=this.pending;if(B&&o(W.timeline,W.animation),e){W.timeline=l,D(W);var n=W.animation.playbackRate>=0?0:X(W);switch(p){case"running":case"finished":W.startTime=n,s(W.timeline,W.animation,z.bind(this));break;case"paused":W.resetCurrentTimeOnResume=!0,W.startTime=null,W.holdTime=x(W,CSS.percent(100*F));break;default:W.holdTime=null,W.startTime=null}return i&&(W.readyPromise&&"resolved"!=W.readyPromise.state||K(W),W.pendingTask="paused"==p?"pause":"play"),null!==W.startTime&&(W.holdTime=null),void J(W,!1,!1)}if(W.animation.timeline!=l)throw TypeError("Unsupported timeline: "+l);if(o(W.timeline,W.animation),W.timeline=null,B)switch(null!==A&&(W.animation.currentTime=F*X(W)),p){case"paused":W.animation.pause();break;case"running":case"finished":W.animation.play()}}}},{key:"startTime",get:function(){var l=N.get(this);return l.timeline?q(l,l.startTime):l.animation.startTime},set:function(l){var a=N.get(this);if(l=x(a,l),a.timeline){null==x(a,a.timeline.currentTime)&&null!=a.startTime&&(a.holdTime=null,G(a));var p=x(a,this.currentTime);D(a),a.startTime=l,a.resetCurrentTimeOnResume=!1,a.holdTime=null!==a.startTime&&0!=a.animation.playbackRate?null:p,a.pendingTask&&(a.pendingTask=null,a.readyPromise.resolve(this)),J(a,!0,!1),G(a)}else a.animation.startTime=l}},{key:"currentTime",get:function(){var l=N.get(this);return l.timeline?q(l,null!=l.holdTime?l.holdTime:V(l)):l.animation.currentTime},set:function(l){var a=N.get(this);if(l=x(a,l),a.timeline&&null!=l){var p=a.timeline.phase;null!==a.holdTime||null===a.startTime||"inactive"==p||0==a.animation.playbackRate?a.holdTime=l:a.startTime=T(a,l),a.resetCurrentTimeOnResume=!1,"inactive"==p&&(a.startTime=null),a.previousCurrentTime=null,"pause"==a.pendingTask&&(a.holdTime=l,D(a),a.startTime=null,a.pendingTask=null,a.readyPromise.resolve(this)),J(a,!0,!1)}else a.animation.currentTime=l}},{key:"playbackRate",get:function(){return N.get(this).animation.playbackRate},set:function(l){var a=N.get(this);if(a.timeline){a.pendingPlaybackRate=null;var p=this.currentTime;a.animation.playbackRate=l,null!==p&&(this.currentTime=p)}else a.animation.playbackRate=l}},{key:"playState",get:function(){var l=N.get(this);if(!l.timeline)return l.animation.playState;var a=x(l,this.currentTime);return null===a&&null===l.startTime&&null==l.pendingTask?"idle":"pause"==l.pendingTask||null===l.startTime&&"play"!=l.pendingTask?"paused":null!=a&&(l.animation.playbackRate>0&&a>=X(l)||l.animation.playbackRate<0&&a<=0)?"finished":"running"}},{key:"replaceState",get:function(){return N.get(this).animation.pending}},{key:"pending",get:function(){var l=N.get(this);return l.timeline?!!l.readyPromise&&"pending"==l.readyPromise.state:l.animation.pending}},{key:"id",get:function(){return N.get(this).animation.id}},{key:"onfinish",get:function(){return N.get(this).animation.onfinish},set:function(l){N.get(this).animation.onfinish=l}},{key:"oncancel",get:function(){return N.get(this).animation.oncancel},set:function(l){N.get(this).animation.oncancel=l}},{key:"onremove",get:function(){return N.get(this).animation.onremove},set:function(l){N.get(this).animation.onremove=l}},{key:"finished",get:function(){var l=N.get(this);return l.timeline?(l.finishedPromise||(l.finishedPromise=new k),l.finishedPromise.promise):l.animation.finished}},{key:"ready",get:function(){var l=N.get(this);return l.timeline?(l.readyPromise||(l.readyPromise=new k,l.readyPromise.resolve(this)),l.readyPromise.promise):l.animation.ready}}]),l}();function O(l,a){if(!l)return null;var p=l.split(" ");if(!b.includes(p[0])||2==p.length&&!p[1].endsWith("%"))throw TypeError("Invalid animation delay");var A=a;if(2==p.length){var W=parseFloat(p[1]);if(Number.isNaN(W))throw TypeError('"'+p[1]+'" is not a valid percentage for animation delay');A=CSS.percent(W)}return{name:p[0],offset:A}}function j(){return{name:"cover",offset:CSS.percent(0)}}function _(){return{name:"cover",offset:CSS.percent(100)}}function $(l){var a={start:j(),end:_()};if(!l)return a;var p=l.split(" "),A=[],W=[];if(p.forEach(function(l){l.endsWith("%")?W.push(parseFloat(l)):A.push(l)}),A.length>2||W.length>2||1==W.length)throw TypeError("Invalid time range");return A.length&&(a.start.name=A[0],a.end.name=A.length>1?A[1]:A[0]),W.length>1&&(a.start.offset=CSS.percent(W[0]),a.end.offset=CSS.percent(W[1])),a}var ll={IDENTIFIER:/[\w\\\@_-]+/g,WHITE_SPACE:/\s*/g,TIME:/^[0-9]+(s|ms)/,SCROLL_TIMELINE:/scroll-timeline\s*:([^;}]+)/,SCROLL_TIMELINE_NAME:/scroll-timeline-name\s*:([^;}]+)/,SCROLL_TIMELINE_AXIS:/scroll-timeline-axis\s*:([^;}]+)/,VIEW_TIMELINE:/view-timeline\s*:([^;}]+)/,VIEW_TIMELINE_NAME:/view-timeline-name\s*:([^;}]+)/,VIEW_TIMELINE_AXIS:/view-timeline-axis\s*:([^;}]+)/,VIEW_TIMELINE_INSET:/view-timeline-inset\s*:([^;}]+)/,ANIMATION_TIMELINE:/animation-timeline\s*:([^;}]+)/,ANIMATION_DELAY:/animation-delay\s*:([^;}]+)/,ANIMATION_END_DELAY:/animation-end-delay\s*:([^;}]+)/,ANIMATION_TIME_RANGE:/animation-time-range\s*:([^;}]+)/,ANIMATION_NAME:/animation-name\s*:([^;}]+)/,ANIMATION:/animation\s*:([^;}]+)/,ANONYMOUS_SCROLL:/scroll\(([^)]*)\)/},la=["block","inline","vertical","horizontal"],lp=["nearest","root"],lA=new(function(){function l(){this.cssRulesWithTimelineName=[],this.nextAnonymousTimelineNameIndex=0,this.anonymousScrollTimelineOptions=new Map,this.sourceSelectorToScrollTimeline=[],this.subjectSelectorToViewTimeline=[],this.keyframeNamesSelectors=new Map}var a=l.prototype;return a.transpileStyleSheet=function(l,a,p){for(var A={sheetSrc:l,index:0,name:p};A.index<A.sheetSrc.length&&(this.eatWhitespace(A),!(A.index>=A.sheetSrc.length));)if(this.lookAhead("/*",A))for(;this.lookAhead("/*",A);)this.eatComment(A),this.eatWhitespace(A);else{var W=this.parseQualifiedRule(A);W&&(a?this.parseKeyframesAndSaveNameMapping(W,A):this.handleScrollTimelineProps(W,A))}return A.sheetSrc},a.getAnimationTimelineOptions=function(l,a){for(var p=this.cssRulesWithTimelineName.length-1;p>=0;p--){var A=this.cssRulesWithTimelineName[p];if(a.matches(A.selector)&&(!A["animation-name"]||A["animation-name"]==l))return{"animation-timeline":A["animation-timeline"],"animation-delay":A["animation-delay"],"animation-end-delay":A["animation-end-delay"],"animation-time-range":A["animation-time-range"]}}return null},a.getAnonymousScrollTimelineOptions=function(l,a){var p=this.anonymousScrollTimelineOptions.get(l);return p?{anonymousSource:p.source,anonymousTarget:a,source:u(p.source,a),orientation:p.orientation?p.orientation:"block"}:null},a.getScrollTimelineOptions=function(l,a){var A=this.getAnonymousScrollTimelineOptions(l,a);if(A)return A;for(var W=this.sourceSelectorToScrollTimeline.length-1;W>=0;W--){var t=this.sourceSelectorToScrollTimeline[W];if(t.name==l){var F=this.findPreviousSiblingOrAncestorMatchingSelector(a,t.selector);if(F)return p({source:F},t.axis?{orientation:t.axis}:{})}}return null},a.findPreviousSiblingOrAncestorMatchingSelector=function(l,a){for(var p=l;p;){if(p.matches(a))return p;p=p.previousElementSibling||p.parentElement}return null},a.getViewTimelineOptions=function(l,a){for(var p=this.subjectSelectorToViewTimeline.length-1;p>=0;p--){var A=this.subjectSelectorToViewTimeline[p];if(A.name==l){var W=this.findPreviousSiblingOrAncestorMatchingSelector(a,A.selector);if(W)return{subject:W,axis:A.axis,inset:A.inset}}}return null},a.parseScrollTimeline=function(l){var a=l.index;this.assertString(l,"@scroll-timeline"),this.eatWhitespace(l);var p=this.parseIdentifier(l);this.eatWhitespace(l),this.assertString(l,"{"),this.eatWhitespace(l);for(var A={name:p,source:"auto",orientation:void 0};"}"!==this.peek(l);){var W=this.parseIdentifier(l);this.eatWhitespace(l),this.assertString(l,":"),this.eatWhitespace(l),A[W]=this.removeEnclosingDoubleQuotes(this.eatUntil(";",l)),this.assertString(l,";"),this.eatWhitespace(l)}this.assertString(l,"}");var t=l.index;return this.eatWhitespace(l),{scrollTimeline:A,startIndex:a,endIndex:t}},a.handleScrollTimelineProps=function(l,a){var p=this;if(!l.selector.includes("@keyframes")){var A=l.block.contents.includes("animation-name:"),W=l.block.contents.includes("animation-timeline:"),t=l.block.contents.includes("animation:");this.saveSourceSelectorToScrollTimeline(l),this.saveSubjectSelectorToViewTimeline(l);var F=[],B=[],e=!1;W&&(F=this.extractScrollTimelineNames(l.block.contents)),A&&(B=this.extractMatches(l.block.contents,ll.ANIMATION_NAME)),W&&A||(t&&this.extractMatches(l.block.contents,ll.ANIMATION).forEach(function(a){var A=p.extractTimelineName(a);A.timelineName&&F.push(A.timelineName);var t=p.extractAnimationName(a);t&&(A.timelineName||W)&&B.push(t),(A.timelineName||W)&&(p.hasDuration(a)||(l.block.contents=l.block.contents.replace(a," 1s "+a),e=!0)),A.toBeReplaced&&(l.block.contents=l.block.contents.replace(A.toBeReplaced," ".repeat(A.toBeReplaced.length)),e=!0)}),e&&this.replacePart(l.block.startIndex,l.block.endIndex,l.block.contents,a)),this.saveRelationInList(l,F,B)}},a.saveSourceSelectorToScrollTimeline=function(l){var a,p=l.block.contents.includes("scroll-timeline:"),A=l.block.contents.includes("scroll-timeline-name:"),W=l.block.contents.includes("scroll-timeline-axis:");if(p||A){var t=[];if(p)for(var F,e=B(this.extractMatches(l.block.contents,ll.SCROLL_TIMELINE));!(F=e()).done;){parts=this.split(F.value);var i={selector:l.selector,name:""};1==parts.length?i.name=parts[0]:2==parts.length&&(la.includes(parts[0])?(i.axis=parts[0],i.name=parts[1]):(i.axis=parts[1],i.name=parts[0])),t.push(i)}if(A)for(var n=this.extractMatches(l.block.contents,ll.SCROLL_TIMELINE_NAME),S=0;S<n.length;S++)S<t.length?t[S].name=n[S]:t.push({selector:l.selector,name:n[S]});var r=[];W&&(r=(r=this.extractMatches(l.block.contents,ll.SCROLL_TIMELINE_AXIS)).filter(function(l){return la.includes(l)}));for(var L=0;L<t.length;L++)r.length&&(t[L].axis=r[L%t.length]);(a=this.sourceSelectorToScrollTimeline).push.apply(a,t)}},a.saveSubjectSelectorToViewTimeline=function(l){var a,p=l.block.contents.includes("view-timeline:"),A=l.block.contents.includes("view-timeline-name:"),W=l.block.contents.includes("view-timeline-axis:"),t=l.block.contents.includes("view-timeline-inset:");if(p||A){var F=[];if(p)for(var e,i=B(this.extractMatches(l.block.contents,ll.VIEW_TIMELINE));!(e=i()).done;){parts=this.split(e.value);var n={selector:l.selector,name:"",inset:null};1==parts.length?n.name=parts[0]:2==parts.length&&(la.includes(parts[0])?(n.axis=parts[0],n.name=parts[1]):(n.axis=parts[1],n.name=parts[0])),F.push(n)}if(A)for(var S=this.extractMatches(l.block.contents,ll.VIEW_TIMELINE_NAME),r=0;r<S.length;r++)r<F.length?F[r].name=S[r]:F.push({selector:l.selector,name:S[r],inset:null});var L=[],o=[];t&&(L=this.extractMatches(l.block.contents,ll.VIEW_TIMELINE_INSET)),W&&(o=(o=this.extractMatches(l.block.contents,ll.VIEW_TIMELINE_AXIS)).filter(function(l){return la.includes(l)}));for(var s=0;s<F.length;s++)L.length&&(F[s].inset=L[s%F.length]),o.length&&(F[s].axis=o[s%F.length]);(a=this.subjectSelectorToViewTimeline).push.apply(a,F)}},a.hasDuration=function(l){return l.split(" ").filter(function(l){return ll.TIME.exec(l)}).length>=1},a.saveRelationInList=function(l,a,A){var W=l.block.contents.includes("animation-delay:"),t=l.block.contents.includes("animation-end-delay:"),F=l.block.contents.includes("animation-time-range:"),B=[],e=[],i=[];W&&(B=this.extractMatches(l.block.contents,ll.ANIMATION_DELAY)),t&&(e=this.extractMatches(l.block.contents,ll.ANIMATION_END_DELAY)),F&&(i=this.extractMatches(l.block.contents,ll.ANIMATION_TIME_RANGE));for(var n=Math.max(a.length,A.length,B.length,e.length,i.length),S=0;S<n;S++)this.cssRulesWithTimelineName.push(p({selector:l.selector,"animation-timeline":a[S%a.length]},A.length?{"animation-name":A[S%A.length]}:{},B.length?{"animation-delay":B[S%B.length]}:{},e.length?{"animation-end-delay":e[S%e.length]}:{},i.length?{"animation-time-range":i[S%i.length]}:{}))},a.extractScrollTimelineNames=function(l){var a=this,p=ll.ANIMATION_TIMELINE.exec(l)[1].trim(),A=[];return p.split(",").map(function(l){return l.trim()}).forEach(function(l){if(l.startsWith("scroll")&&l.includes("(")){var p=a.saveAnonymousTimelineName(l);A.push(p)}else A.push(l)}),A},a.saveAnonymousTimelineName=function(l){var a=":t"+this.nextAnonymousTimelineNameIndex++;return this.anonymousScrollTimelineOptions.set(a,this.parseAnonymousTimeline(l)),a},a.parseAnonymousTimeline=function(l){var a=ll.ANONYMOUS_SCROLL.exec(l);if(!a)return null;var p={};return a[1].split(" ").forEach(function(l){la.includes(l)?p.orientation=l:lp.includes(l)&&(p.source=l)}),p},a.extractAnimationName=function(l){return this.findMatchingEntryInContainer(l,this.keyframeNamesSelectors)},a.extractTimelineName=function(l){var a=null,p=null,A=ll.ANONYMOUS_SCROLL.exec(l);if(A){var W=A[0];a=this.saveAnonymousTimelineName(W),p=W}else p=a=this.findMatchingEntryInContainer(l,new Set(this.sourceSelectorToScrollTimeline.map(function(l){return l.name})))||this.findMatchingEntryInContainer(l,new Set(this.subjectSelectorToViewTimeline.map(function(l){return l.name})));return{timelineName:a,toBeReplaced:p}},a.findMatchingEntryInContainer=function(l,a){var p=l.split(" ").filter(function(l){return a.has(l)});return p?p[0]:null},a.parseIdentifier=function(l){ll.IDENTIFIER.lastIndex=l.index;var a=ll.IDENTIFIER.exec(l.sheetSrc);if(!a)throw this.parseError(l,"Expected an identifier");return l.index+=a[0].length,a[0]},a.parseKeyframesAndSaveNameMapping=function(l,a){var p=this;if(l.selector.startsWith("@keyframes")){var A=this.replaceKeyframesAndGetMapping(l,a);l.selector.split(" ").forEach(function(l,a){a>0&&p.keyframeNamesSelectors.set(l,A)})}},a.replaceKeyframesAndGetMapping=function(l,a){var p=l.block.contents,A=function(l){for(var a=0,p=-1,A=[],W=0;W<l.length;W++)"{"==l[W]?a++:"}"==l[W]&&a--,1==a&&"{"!=l[W]&&"}"!=l[W]&&-1==p&&(p=W),2==a&&"{"==l[W]&&(A.push({start:p,end:W}),p=-1);return A}(p);if(0==A.length)return new Map;var W=new Map,t=!1,F=[];F.push(p.substring(0,A[0].start));for(var B=0;B<A.length;B++)(function(l){var a=p.substring(A[l].start,A[l].end),B=[];a.split(",").forEach(function(l){var a=l.split(" ").map(function(l){return l.trim()}).filter(function(l){return""!=l}).join(" "),p=W.size;W.set(p,a),B.push(p+"%"),b.some(function(l){return a.startsWith(l)})&&(t=!0)}),F.push(B.join(",")),F.push(l==A.length-1?p.substring(A[l].end):p.substring(A[l].end,A[l+1].start))})(B);return t?(l.block.contents=F.join(""),this.replacePart(l.block.startIndex,l.block.endIndex,l.block.contents,a),W):new Map},a.parseQualifiedRule=function(l){var a=l.index,p=this.parseSelector(l).trim();if(p)return{selector:p,block:this.eatBlock(l),startIndex:a,endIndex:l.index}},a.removeEnclosingDoubleQuotes=function(l){return l.substring('"'==l[0]?1:0,'"'==l[l.length-1]?l.length-1:l.length)},a.assertString=function(l,a){if(l.sheetSrc.substr(l.index,a.length)!=a)throw this.parseError(l,"Did not find expected sequence "+a);l.index+=a.length},a.replacePart=function(l,a,p,A){A.sheetSrc=A.sheetSrc.slice(0,l)+p+A.sheetSrc.slice(a),A.index>=a&&(A.index=l+p.length+(A.index-a))},a.eatComment=function(l){this.assertString(l,"/*"),this.eatUntil("*/",l,!0),this.assertString(l,"*/")},a.eatBlock=function(l){var a=l.index;this.assertString(l,"{");for(var p=1;0!=p;)this.lookAhead("/*",l)?this.eatComment(l):("{"===l.sheetSrc[l.index]?p++:"}"===l.sheetSrc[l.index]&&p--,this.advance(l));var A=l.index;return{startIndex:a,endIndex:A,contents:l.sheetSrc.slice(a,A)}},a.advance=function(l){if(l.index++,l.index>l.sheetSrc.length)throw this.parseError(l,"Advanced beyond the end")},a.eatUntil=function(l,a,p){void 0===p&&(p=!1);for(var A=a.index;!this.lookAhead(l,a);)this.advance(a);return p&&(a.sheetSrc=a.sheetSrc.slice(0,A)+" ".repeat(a.index-A)+a.sheetSrc.slice(a.index)),a.sheetSrc.slice(A,a.index)},a.parseSelector=function(l){var a=l.index;if(this.eatUntil("{",l),a===l.index)throw Error("Empty selector");return l.sheetSrc.slice(a,l.index)},a.eatWhitespace=function(l){ll.WHITE_SPACE.lastIndex=l.index;var a=ll.WHITE_SPACE.exec(l.sheetSrc);a&&(l.index+=a[0].length)},a.lookAhead=function(l,a){return a.sheetSrc.substr(a.index,l.length)==l},a.peek=function(l){return l.sheetSrc[l.index]},a.extractMatches=function(l,a,p){return void 0===p&&(p=","),a.exec(l)[1].trim().split(p).map(function(l){return l.trim()})},a.split=function(l){return l.split(" ").map(function(l){return l.trim()}).filter(function(l){return""!=l})},l}());if(function(){if(!CSS.supports("animation-timeline: works")){!function(){function l(l){if(0!==l.innerHTML.trim().length){var a=lA.transpileStyleSheet(l.innerHTML,!0);a=lA.transpileStyleSheet(a,!1),l.innerHTML=a}}new MutationObserver(function(a){for(var p,A=B(a);!(p=A()).done;)for(var W,t=B(p.value.addedNodes);!(W=t()).done;){var F=W.value;F instanceof HTMLStyleElement&&l(F)}}).observe(document.documentElement,{childList:!0,subtree:!0}),document.querySelectorAll("style").forEach(function(a){return l(a)}),document.querySelectorAll("link").forEach(function(l){})}();var l=new WeakMap;window.addEventListener("animationstart",function(a){a.target.getAnimations().filter(function(l){return l.animationName===a.animationName}).forEach(function(p){l.has(a.target)||l.set(a.target,new Map);var A=l.get(a.target);if(!A.has(p.animationName)){var W=function(l,a,p){var A=lA.getAnimationTimelineOptions(a,p);if(!A)return null;var W=A["animation-timeline"];if(!W)return null;var t=lA.getScrollTimelineOptions(W,p)||lA.getViewTimelineOptions(W,p);return t?(t.subject&&function(l,a){var p=f(a.subject),A=a.axis||a.orientation,W=lA.keyframeNamesSelectors.get(l.animationName);if(W&&W.size){var t=[];l.effect.getKeyframes().forEach(function(l){var F=function(l,W){for(var t,F=null,e=B(l);!(t=e()).done;){var i=t.value,n=i[1];if(i[0]==100*W.offset){if("from"==n)F=0;else if("to"==n)F=100;else{var S,r,L,o,s=n.split(" ");F=1==s.length?parseFloat(s[0]):100*(S=s[0],r=a.subject,L=a.inset,o=CSS.percent(parseFloat(s[1])),m(E(S,p,r,A,L),o,E("cover",p,r,A,L)))}break}}return F}(W,l);null!==F&&F>=0&&F<=100&&(l.offset=F/100,t.push(l))});var F=t.sort(function(l,a){return l.offset<a.offset?-1:l.affset>a.offset?1:0});l.effect.setKeyframes(F)}}(l,t),{timeline:t.source?new g(t):new Q(t),animOptions:A}):null}(p,p.animationName,a.target);A.set(p.animationName,W&&W.timeline&&p.timeline!=W.timeline?new H(p,W.timeline,W.animOptions):null)}var t=A.get(p.animationName);null!==t&&(p.pause(),t.play())})})}}(),[].concat(document.styleSheets).filter(function(l){return null!==l.href}).length&&console.warn("Non-Inline StyleSheets detected: ScrollTimeline polyfill currently only supports inline styles within style tags"),!Reflect.defineProperty(window,"ScrollTimeline",{value:g}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(window,"ViewTimeline",{value:Q}))throw Error("Error installing ViewTimeline polyfill: could not attach ViewTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:function(l,a){var p=a.timeline;p instanceof g&&delete a.timeline;var A=function(l,a){if(a in l){var p=l[a];return"number"!=typeof p?(delete l[a],p):null}},W=function(l,a){a&&(a.phase&&(l.name=a.phase),a.percent&&(l.offset=a.percent))},t=A(a,"delay"),F=A(a,"endDelay"),B=y.apply(this,[l,a]),e=new H(B,p);if(p instanceof g){if(B.pause(),p instanceof ViewTimeline){var i=N.get(e);i.timeRange=$(a.timeRange),W(i.timeRange.start,t),W(i.timeRange.end,F)}e.play()}return e}}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");if(!Reflect.defineProperty(window,"Animation",{value:H}))throw Error("Error installing Animation constructor.")}();const e=()=>/*@__PURE__*/l(A)(`
  <footer>
    <div class="footerInner">
      <a href="https://davidkanekanian.co.uk">Website By David Kanekanian</a><br>
      &copy; Copyright 2023 Roath Chamber Orchestra<br>
      <!-- <a href="">Switch to admin mode</a> -->
    </div>
  </footer>`);var i={concerts:[{id:1,title:"A Spring Concert",when:"2014-04-26T19:30",poster:"/share/concerts/April 2014.jpeg"},{id:2,title:"Spring Concert",when:"2017-04-02T19:30",poster:"/share/concerts/April 2017.PNG"},{id:3,title:"Spring Concert",when:"2022-04-06T19:30",poster:"/share/concerts/April 2022.PNG"},{id:4,title:"A Christmas Concert",when:"2014-12-03T19:30",poster:"/share/concerts/Dec 2014.jpeg"},{id:5,title:"St Anne's Christmas Concert",when:"2015-12-10T19:00",poster:"/share/concerts/Dec 2015.jpeg"},{id:6,title:"Christmas Concert",when:"2016-12-07T19:00",poster:"/share/concerts/Dec 2016.PNG"},{id:7,title:"Season's Greetings",when:"2019-10-11T19:30",poster:"/share/concerts/Dec 2019.jpeg"},{id:8,title:"Christmas",when:"2022-12-18T17:00",poster:"/share/concerts/Dec 2022.JPG"},{id:9,title:"Christmas Festival",when:"2023-12-17T17:00",poster:"/share/concerts/Dec 2023.PNG"},{id:10,title:"A Summer Concert",when:"2014-07-13T19:30",poster:"/share/concerts/July 2014.jpeg"},{id:11,title:"A Short Ride",when:"2015-07-05T14:30",poster:"/share/concerts/July 2015.jpeg"},{id:12,title:"Seas & Storms",when:"2016-07-03T15:00",poster:"/share/concerts/July 2016.jpeg"},{id:13,title:"Musical Menagerie",when:"2017-07-02T15:00",poster:"/share/concerts/July 2017.jpeg"},{id:14,title:"When at night I go to sleep",when:"2018-07-01T15:30",poster:"/share/concerts/July 2018.jpeg"},{id:15,title:"Around the World in 60 Minutes",when:"2019-07-07T15:00",poster:"/share/concerts/July 2019.jpg"},{id:16,title:"The Orchestra's Day Out at the Zoo",when:"2023-07-02T15:00",poster:"/share/concerts/July 2023.PNG"},{id:17,title:"Toy Box",when:"2022-06-26T15:00",poster:"/share/concerts/June 2022.PNG"},{id:18,title:"A Mothering Sunday Concert",when:"2015-03-15T19:30",poster:"/share/concerts/March 2015.jpeg"},{id:19,title:"Mozart Requiem",when:"2016-03-13T19:30",poster:"/share/concerts/March 2016.jpeg"},{id:20,title:"Spring Concert",when:"2018-03-18T19:30",poster:"/share/concerts/March 2018.jpeg"},{id:21,title:"Small Forces",when:"2019-03-24T19:30",poster:"/share/concerts/March 2019.jpg"},{id:22,title:"Beyond Beethoven",when:"2020-03-29T19:30",poster:"/share/concerts/March 2020.jpeg"},{id:23,title:"Serenade to Springtime",when:"2023-03-26T19:30",poster:"/share/concerts/March 2023.PNG"},{id:24,title:"Bach Beethoven Rossini",when:"2019-05-12T19:30",poster:"/share/concerts/May 2019.jpeg"},{id:25,title:"A St Cecilia Concert",when:"2014-11-23T19:30",poster:"/share/concerts/Nov 2014.jpeg"},{id:26,title:"Concert",when:"2015-11-22T19:30",poster:"/share/concerts/Nov 2015.jpeg"},{id:27,title:"German Fursten",when:"2018-11-25T19:30",poster:"/share/concerts/Nov 2018.jpg"},{id:28,title:"Before Beethoven",when:"2019-11-17T19:30",poster:"/share/concerts/Nov 2019.jpg"},{id:29,title:"Brahms Dvorak",when:"2021-11-17T19:30",poster:"/share/concerts/Nov 2021.PNG"},{id:30,title:"Beethoven & Weber",when:"2022-11-27T19:00",poster:"/share/concerts/Nov 2022.JPG"},{id:31,title:"Roath Chamber Orchestra Revisited",when:"2023-11-26T19:00",poster:"/share/concerts/Nov 2023.PNG"},{id:32,title:"Concert",when:"2016-11-20T19:30",poster:"/share/concerts/November 2016.jpeg"},{id:33,title:"An Afternoon of Chamber Music",when:"2015-09-19T14:00",poster:"/share/concerts/Sept 2015.jpeg"}]};const n=()=>/*@__PURE__*/l(A)("<nav>").append(S(),o()),S=()=>/*@__PURE__*/l(A)("<ul>",{class:"desktop"}).append(r({text:"Upcoming",href:"/#upcoming"}),r({text:"Ten Years",href:"/#tenYears"}),r({text:"About Us",href:"/#about"}),L(),r({text:"Archive",href:"/?archive"}),r({text:"Contact Us",href:"/#contact"}),/*@__PURE__*/l(A)("<span>")),r=a=>/*@__PURE__*/l(A)("<li>",{class:"navItem"}).append(/*@__PURE__*/l(A)("<a>",{href:a.href,text:a.text})),L=()=>/*@__PURE__*/l(A)("<a>",{href:"/",class:"logo"}),o=()=>/*@__PURE__*/l(A)("<div>",{class:"mobile"}).append(/*@__PURE__*/l(A)("<div>",{class:"hamburger"})//
    .on("click",()=>g()),L(),s()),s=()=>/*@__PURE__*/l(A)("<div>",{class:"sidebar"}).append(/*@__PURE__*/l(A)("<div>",{class:"inner"}).append(/*@__PURE__*/l(A)("<div>",{class:"close"}).append(/*@__PURE__*/l(A)("<div>",{class:"img"})//
    .on("click",()=>g())),/*@__PURE__*/l(A)("<ul>").append(r({text:"Upcoming",href:"/#upcoming"}),r({text:"Ten Years",href:"/#tenYears"}),r({text:"About Us",href:"/#about"}),r({text:"Archive",href:"/?archive"}),r({text:"Contact Us",href:"/#contact"}))));function g(){/*@__PURE__*/l(A)("nav .mobile .sidebar").toggleClass("show")}const c=()=>/*@__PURE__*/l(A)("<div>",{id:"archivePage"})//
    .append(n(),/*@__PURE__*/l(A)("<h1>",{text:"Concerts Archive"}),u(i.concerts)),u=a=>/*@__PURE__*/l(A)("<div>",{class:"concertsGrid"}).append(a.sort((l,a)=>a.when.localeCompare(l.when)).map(l=>h(l))),h=a=>{var p;return /*@__PURE__*/l(A)("<div>",{class:"concertCard"}).append(/*@__PURE__*/l(A)("<div>",{class:"media",css:{backgroundImage:`url('${a.poster}')`}}),/*@__PURE__*/l(A)("<div>",{class:"info"}).append(/*@__PURE__*/l(A)("<p>",{class:"when",text:(p=a.when,Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date(p)))}),/*@__PURE__*/l(A)("<h3>",{class:"title",text:a.title})))};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.0
 * @author George Michael Brower
 * @license MIT
 *//**
 * Base class for all controllers.
 */class d{/**
	 * Sets the name of the controller and its label in the GUI.
	 * @param {string} name
	 * @returns {this}
	 */name(l){return(/**
		 * The controller's name. Use `controller.name( 'Name' )` to modify this value.
		 * @type {string}
		 */this._name=l,this.$name.innerHTML=l,this)}/**
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
	 */onChange(l){return(/**
		 * Used to access the function bound to `onChange` events. Don't modify this value directly.
		 * Use the `controller.onChange( callback )` method instead.
		 * @type {Function}
		 */this._onChange=l,this)}/**
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
	 */onFinishChange(l){return(/**
		 * Used to access the function bound to `onFinishChange` events. Don't modify this value
		 * directly. Use the `controller.onFinishChange( callback )` method instead.
		 * @type {Function}
		 */this._onFinishChange=l,this)}/**
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
	 */enable(l=!0){return this.disable(!l)}/**
	 * Disables this controller.
	 * @param {boolean} disabled
	 * @returns {this}
	 * @example
	 * controller.disable();
	 * controller.disable( false ); // enable
	 * controller.disable( !controller._disabled ); // toggle
	 */disable(l=!0){return l===this._disabled||(this._disabled=l,this.domElement.classList.toggle("disabled",l),this.$disable.toggleAttribute("disabled",l)),this}/**
	 * Shows the Controller after it's been hidden.
	 * @param {boolean} show
	 * @returns {this}
	 * @example
	 * controller.show();
	 * controller.show( false ); // hide
	 * controller.show( controller._hidden ); // toggle
	 */show(l=!0){return this._hidden=!l,this.domElement.style.display=this._hidden?"none":"",this}/**
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
	 */options(l){let a=this.parent.add(this.object,this.property,l);return a.name(this._name),this.destroy(),a}/**
	 * Sets the minimum value. Only works on number controllers.
	 * @param {number} min
	 * @returns {this}
	 */min(l){return this}/**
	 * Sets the maximum value. Only works on number controllers.
	 * @param {number} max
	 * @returns {this}
	 */max(l){return this}/**
	 * Values set by this controller will be rounded to multiples of `step`. Only works on number
	 * controllers.
	 * @param {number} step
	 * @returns {this}
	 */step(l){return this}/**
	 * Rounds the displayed value to a fixed number of decimals, without affecting the actual value
	 * like `step()`. Only works on number controllers.
	 * @example
	 * gui.add( object, 'property' ).listen().decimals( 4 );
	 * @param {number} decimals
	 * @returns {this}
	 */decimals(l){return this}/**
	 * Calls `updateDisplay()` every animation frame. Pass `false` to stop listening.
	 * @param {boolean} listen
	 * @returns {this}
	 */listen(l=!0){return(/**
		 * Used to determine if the controller is currently listening. Don't modify this value
		 * directly. Use the `controller.listen( true|false )` method instead.
		 * @type {boolean}
		 */this._listening=l,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this)}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);// To prevent framerate loss, make sure the value has changed before updating the display.
// Note: save() is used here instead of getValue() only because of ColorController. The !== operator
// won't work for color objects or arrays, but ColorController.save() always returns a string.
let l=this.save();l!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=l}/**
	 * Returns `object[ property ]`.
	 * @returns {any}
	 */getValue(){return this.object[this.property]}/**
	 * Sets the value of `object[ property ]`, invokes any `onChange` handlers and updates the display.
	 * @param {any} value
	 * @returns {this}
	 */setValue(l){return this.object[this.property]=l,this._callOnChange(),this.updateDisplay(),this}/**
	 * Updates the display to keep it in sync with the current value. Useful for updating your
	 * controllers when their values have been modified outside of the GUI.
	 * @returns {this}
	 */updateDisplay(){return this}load(l){return this.setValue(l),this._callOnFinishChange(),this}save(){return this.getValue()}/**
	 * Destroys this controller and removes it from the parent GUI.
	 */destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}constructor(l,a,p,A,W="div"){/**
		 * The GUI that contains this controller.
		 * @type {GUI}
		 */this.parent=l,/**
		 * The object this controller will modify.
		 * @type {object}
		 */this.object=a,/**
		 * The name of the property to control.
		 * @type {string}
		 */this.property=p,/**
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
		 */this.domElement=document.createElement(W),this.domElement.classList.add("controller"),this.domElement.classList.add(A),/**
		 * The DOM element that contains the controller's name.
		 * @type {HTMLElement}
		 */this.$name=document.createElement("div"),this.$name.classList.add("name"),d.nextNameID=d.nextNameID||0,this.$name.id=`lil-gui-name-${++d.nextNameID}`,/**
		 * The DOM element that contains the controller's "widget" (which differs by controller type).
		 * @type {HTMLElement}
		 */this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),/**
		 * The DOM element that receives the disabled attribute when using disable().
		 * @type {HTMLElement}
		 */this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),// Don't fire global key events while typing in a controller
this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(p)}}class C extends d{updateDisplay(){return this.$input.checked=this.getValue(),this}constructor(l,a,p){super(l,a,p,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}}function f(l){let a,p;return(a=l.match(/(#|0x)?([a-f0-9]{6})/i))?p=a[2]:(a=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?p=parseInt(a[1]).toString(16).padStart(2,0)+parseInt(a[2]).toString(16).padStart(2,0)+parseInt(a[3]).toString(16).padStart(2,0):(a=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(p=a[1]+a[1]+a[2]+a[2]+a[3]+a[3]),!!p&&"#"+p}const I={isPrimitive:!0,match:l=>"number"==typeof l,fromHexString:l=>parseInt(l.substring(1),16),toHexString:l=>"#"+l.toString(16).padStart(6,0)},E=[{isPrimitive:!0,match:l=>"string"==typeof l,fromHexString:f,toHexString:f},I,{isPrimitive:!1,// The arrow function is here to appease tree shakers like esbuild or webpack.
// See https://esbuild.github.io/api/#tree-shaking
match:l=>Array.isArray(l),fromHexString(l,a,p=1){let A=I.fromHexString(l);a[0]=(A>>16&255)/255*p,a[1]=(A>>8&255)/255*p,a[2]=(255&A)/255*p},toHexString([l,a,p],A=1){A=255/A;let W=l*A<<16^a*A<<8^p*A<<0;return I.toHexString(W)}},{isPrimitive:!1,match:l=>Object(l)===l,fromHexString(l,a,p=1){let A=I.fromHexString(l);a.r=(A>>16&255)/255*p,a.g=(A>>8&255)/255*p,a.b=(255&A)/255*p},toHexString({r:l,g:a,b:p},A=1){A=255/A;let W=l*A<<16^a*A<<8^p*A<<0;return I.toHexString(W)}}];class v extends d{reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(l){if(this._format.isPrimitive){let a=this._format.fromHexString(l);this.setValue(a)}else this._format.fromHexString(l,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(l){return this._setValueFromHexString(l),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}constructor(l,a,p,A){var W;super(l,a,p,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(W=this.initialValue,E.find(l=>l.match(W))),this._rgbScale=A,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let l=f(this.$text.value);l&&this._setValueFromHexString(l)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}}class m extends d{constructor(l,a,p){super(l,a,p,"function"),// Buttons are the only case where widget contains name
this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",l=>{l.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),// enables :active pseudo class on mobile
this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Q extends d{decimals(l){return this._decimals=l,this.updateDisplay(),this}min(l){return this._min=l,this._onUpdateMinMax(),this}max(l){return this._max=l,this._onUpdateMinMax(),this}step(l,a=!0){return this._step=l,this._stepExplicit=a,this}updateDisplay(){let l=this.getValue();if(this._hasSlider){let a=(l-this._min)/(this._max-this._min);a=Math.max(0,Math.min(a,1)),this.$fill.style.width=100*a+"%"}return this._inputFocused||(this.$input.value=void 0===this._decimals?l:l.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id);// On touch devices only, use input[type=number] to force a numeric keyboard.
// Ideally we could use one input type everywhere, but [type=number] has quirks
// on desktop, and [inputmode=decimal] has quirks on iOS.
// See https://github.com/georgealways/lil-gui/pull/16
let l=window.matchMedia("(pointer: coarse)").matches;l&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;// Keys & mouse wheel
// ---------------------------------------------------------------------
let a=l=>{let a=parseFloat(this.$input.value);isNaN(a)||(this._snapClampSetValue(a+l),// Force the input to updateDisplay when it's focused
this.$input.value=this.getValue())},p=!1,A,W,t,F,B,e=l=>{if(p){let a=l.clientX-A,t=l.clientY-W;Math.abs(t)>5?(l.preventDefault(),this.$input.blur(),p=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(a)>5&&i()}// This isn't an else so that the first move counts towards dragDelta
if(!p){let a=l.clientY-t;B-=a*this._step*this._arrowKeyMultiplier(l),F+B>this._max?B=this._max-F:F+B<this._min&&(B=this._min-F),this._snapClampSetValue(F+B)}t=l.clientY},i=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",i)};this.$input.addEventListener("input",()=>{let l=parseFloat(this.$input.value);isNaN(l)||(this._stepExplicit&&(l=this._snap(l)),this.setValue(this._clamp(l)))}),this.$input.addEventListener("keydown",l=>{"Enter"===l.key&&this.$input.blur(),"ArrowUp"===l.code&&(l.preventDefault(),a(this._step*this._arrowKeyMultiplier(l))),"ArrowDown"===l.code&&(l.preventDefault(),a(-(this._step*this._arrowKeyMultiplier(l)*1)))}),this.$input.addEventListener("wheel",l=>{this._inputFocused&&(l.preventDefault(),a(this._step*this._normalizeMouseWheel(l)))},{passive:!1}),this.$input.addEventListener("mousedown",l=>{A=l.clientX,W=t=l.clientY,p=!0,F=this.getValue(),B=0,window.addEventListener("mousemove",e),window.addEventListener("mouseup",i)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){let l;this._hasSlider=!0,// Build DOM
// ---------------------------------------------------------------------
this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");// Map clientX to value
// ---------------------------------------------------------------------
let a=(l,a,p,A,W)=>(l-a)/(p-a)*(W-A)+A,p=l=>{let p=this.$slider.getBoundingClientRect(),A=a(l,p.left,p.right,this._min,this._max);this._snapClampSetValue(A)},A=l=>{p(l.clientX)},W=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",W)},t=!1,F,B,e=l=>{l.preventDefault(),this._setDraggingStyle(!0),p(l.touches[0].clientX),t=!1},i=l=>{if(t){let a=l.touches[0].clientX-F,p=l.touches[0].clientY-B;Math.abs(a)>Math.abs(p)?e(l):(// This was, in fact, an attempt to scroll. Abort.
window.removeEventListener("touchmove",i),window.removeEventListener("touchend",n))}else l.preventDefault(),p(l.touches[0].clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",i),window.removeEventListener("touchend",n)},S=this._callOnFinishChange.bind(this);this.$slider.addEventListener("mousedown",l=>{this._setDraggingStyle(!0),p(l.clientX),window.addEventListener("mousemove",A),window.addEventListener("mouseup",W)}),this.$slider.addEventListener("touchstart",l=>{l.touches.length>1||(this._hasScrollBar?(F=l.touches[0].clientX,B=l.touches[0].clientY,t=!0):e(l),window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("touchend",n))},{passive:!1}),this.$slider.addEventListener("wheel",a=>{// ignore vertical wheels if there's a scrollbar
let p=Math.abs(a.deltaX)<Math.abs(a.deltaY);if(p&&this._hasScrollBar)return;a.preventDefault();// set value
let A=this._normalizeMouseWheel(a)*this._step;this._snapClampSetValue(this.getValue()+A),// force the input to updateDisplay when it's focused
this.$input.value=this.getValue(),// debounce onFinishChange
clearTimeout(l),l=setTimeout(S,400)},{passive:!1})}_setDraggingStyle(l,a="horizontal"){this.$slider&&this.$slider.classList.toggle("active",l),document.body.classList.toggle("lil-gui-dragging",l),document.body.classList.toggle(`lil-gui-${a}`,l)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(l){let{deltaX:a,deltaY:p}=l;// Safari and Chrome report weird non-integral values for a notched wheel,
// but still expose actual lines scrolled via wheelDelta. Notched wheels
// should behave the same way as arrow keys.
Math.floor(l.deltaY)!==l.deltaY&&l.wheelDelta&&(a=0,p=-l.wheelDelta/120*(this._stepExplicit?1:10));let A=a+-p;return A}_arrowKeyMultiplier(l){let a=this._stepExplicit?1:10;return l.shiftKey?a*=10:l.altKey&&(a/=10),a}_snap(l){// This would be the logical way to do things, but floating point errors.
// return Math.round( value / this._step ) * this._step;
// Using inverse step solves a lot of them, but not all
// const inverseStep = 1 / this._step;
// return Math.round( value * inverseStep ) / inverseStep;
// Not happy about this, but haven't seen it break.
let a=Math.round(l/this._step)*this._step;return parseFloat(a.toPrecision(15))}_clamp(l){return l<this._min&&(l=this._min),l>this._max&&(l=this._max),l}_snapClampSetValue(l){this.setValue(this._clamp(this._snap(l)))}get _hasScrollBar(){let l=this.parent.root.$children;return l.scrollHeight>l.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}constructor(l,a,p,A,W,t){super(l,a,p,"number"),this._initInput(),this.min(A),this.max(W);let F=void 0!==t;this.step(F?t:this._getImplicitStep(),F),this.updateDisplay()}}class y extends d{options(l){return this._values=Array.isArray(l)?l:Object.values(l),this._names=Array.isArray(l)?l:Object.keys(l),this.$select.replaceChildren(),this._names.forEach(l=>{let a=document.createElement("option");a.innerHTML=l,this.$select.appendChild(a)}),this.updateDisplay(),this}updateDisplay(){let l=this.getValue(),a=this._values.indexOf(l);return this.$select.selectedIndex=a,this.$display.innerHTML=-1===a?l:this._names[a],this}constructor(l,a,p,A){super(l,a,p,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(A)}}class w extends d{updateDisplay(){return this.$input.value=this.getValue(),this}constructor(l,a,p){super(l,a,p,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",l=>{"Enter"===l.code&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}}const b=`.lil-gui {
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
}`;let k=!1;class K{/**
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
	 */add(l,a,p,A,W){if(Object(p)===p)return new y(this,l,a,p);let t=l[a];switch(typeof t){case"number":return new Q(this,l,a,p,A,W);case"boolean":return new C(this,l,a);case"string":return new w(this,l,a);case"function":return new m(this,l,a)}console.error(`gui.add failed
	property:`,a,`
	object:`,l,`
	value:`,t)}/**
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
	 */addColor(l,a,p=1){return new v(this,l,a,p)}/**
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
	 */addFolder(l){let a=new K({parent:this,title:l});return this.root._closeFolders&&a.close(),a}/**
	 * Recalls values that were saved with `gui.save()`.
	 * @param {object} obj
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {this}
	 */load(l,a=!0){return l.controllers&&this.controllers.forEach(a=>{!(a instanceof m)&&a._name in l.controllers&&a.load(l.controllers[a._name])}),a&&l.folders&&this.folders.forEach(a=>{a._title in l.folders&&a.load(l.folders[a._title])}),this}/**
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
	 */save(l=!0){let a={controllers:{},folders:{}};return this.controllers.forEach(l=>{if(!(l instanceof m)){if(l._name in a.controllers)throw Error(`Cannot save GUI with duplicate property "${l._name}"`);a.controllers[l._name]=l.save()}}),l&&this.folders.forEach(l=>{if(l._title in a.folders)throw Error(`Cannot save GUI with duplicate folder "${l._title}"`);a.folders[l._title]=l.save()}),a}/**
	 * Opens a GUI or folder. GUI and folders are open by default.
	 * @param {boolean} open Pass false to close.
	 * @returns {this}
	 * @example
	 * gui.open(); // open
	 * gui.open( false ); // close
	 * gui.open( gui._closed ); // toggle
	 */open(l=!0){return this._setClosed(!l),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}/**
	 * Closes the GUI.
	 * @returns {this}
	 */close(){return this.open(!1)}_setClosed(l){this._closed!==l&&(this._closed=l,this._callOnOpenClose(this))}/**
	 * Shows the GUI after it's been hidden.
	 * @param {boolean} show
	 * @returns {this}
	 * @example
	 * gui.show();
	 * gui.show( false ); // hide
	 * gui.show( gui._hidden ); // toggle
	 */show(l=!0){return this._hidden=!l,this.domElement.style.display=this._hidden?"none":"",this}/**
	 * Hides the GUI.
	 * @returns {this}
	 */hide(){return this.show(!1)}openAnimated(l=!0){return(// set state immediately
this._setClosed(!l),this.$title.setAttribute("aria-expanded",!this._closed),// wait for next frame to measure $children
requestAnimationFrame(()=>{// explicitly set initial height for transition
let a=this.$children.clientHeight;this.$children.style.height=a+"px",this.domElement.classList.add("transition");let p=l=>{l.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",p))};this.$children.addEventListener("transitionend",p);// todo: this is wrong if children's scrollHeight makes for a gui taller than maxHeight
let A=l?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!l),requestAnimationFrame(()=>{this.$children.style.height=A+"px"})}),this)}/**
	 * Change the title of this GUI.
	 * @param {string} title
	 * @returns {this}
	 */title(l){return(/**
		 * Current title of the GUI. Use `gui.title( 'Title' )` to modify this value.
		 * @type {string}
		 */this._title=l,this.$title.innerHTML=l,this)}/**
	 * Resets all controllers to their initial values.
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {this}
	 */reset(l=!0){let a=l?this.controllersRecursive():this.controllers;return a.forEach(l=>l.reset()),this}/**
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
	 */onChange(l){return(/**
		 * Used to access the function bound to `onChange` events. Don't modify this value
		 * directly. Use the `gui.onChange( callback )` method instead.
		 * @type {Function}
		 */this._onChange=l,this)}_callOnChange(l){this.parent&&this.parent._callOnChange(l),void 0!==this._onChange&&this._onChange.call(this,{object:l.object,property:l.property,value:l.getValue(),controller:l})}/**
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
	 */onFinishChange(l){return(/**
		 * Used to access the function bound to `onFinishChange` events. Don't modify this value
		 * directly. Use the `gui.onFinishChange( callback )` method instead.
		 * @type {Function}
		 */this._onFinishChange=l,this)}_callOnFinishChange(l){this.parent&&this.parent._callOnFinishChange(l),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:l.object,property:l.property,value:l.getValue(),controller:l})}/**
	 * Pass a function to be called when this GUI or its descendants are opened or closed.
	 * @param {function(GUI)} callback
	 * @returns {this}
	 * @example
	 * gui.onOpenClose( changedGUI => {
	 * 	console.log( changedGUI._closed );
	 * } );
	 */onOpenClose(l){return this._onOpenClose=l,this}_callOnOpenClose(l){this.parent&&this.parent._callOnOpenClose(l),void 0!==this._onOpenClose&&this._onOpenClose.call(this,l)}/**
	 * Destroys all DOM elements and event listeners associated with this GUI.
	 */destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(l=>l.destroy())}/**
	 * Returns an array of controllers contained by this GUI and its descendents.
	 * @returns {Controller[]}
	 */controllersRecursive(){let l=Array.from(this.controllers);return this.folders.forEach(a=>{l=l.concat(a.controllersRecursive())}),l}/**
	 * Returns an array of folders contained by this GUI and its descendents.
	 * @returns {GUI[]}
	 */foldersRecursive(){let l=Array.from(this.folders);return this.folders.forEach(a=>{l=l.concat(a.foldersRecursive())}),l}/**
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
	 */constructor({parent:l,autoPlace:a=void 0===l,container:p,width:A,title:W="Controls",closeFolders:t=!1,injectStyles:F=!0,touchStyles:B=!0}={}){if(/**
		 * The GUI containing this folder, or `undefined` if this is the root GUI.
		 * @type {GUI}
		 */this.parent=l,/**
		 * The top level GUI containing this folder, or `this` if this is the root GUI.
		 * @type {GUI}
		 */this.root=l?l.root:this,/**
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
		 */this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{("Enter"===l.code||"Space"===l.code)&&(l.preventDefault(),this.$title.click())}),// enables :active pseudo class on mobile
this.$title.addEventListener("touchstart",()=>{},{passive:!0}),/**
		 * The DOM element that contains children.
		 * @type {HTMLElement}
		 */this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(W),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);// Stop the constructor early, everything onward only applies to root GUI's
return}this.domElement.classList.add("root"),B&&this.domElement.classList.add("allow-touch-styles"),!k&&F&&(function(l){let a=document.createElement("style");a.innerHTML=l;let p=document.querySelector("head link[rel=stylesheet], head style");p?document.head.insertBefore(a,p):document.head.appendChild(a)}(b),k=!0),p?p.appendChild(this.domElement):a&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),A&&this.domElement.style.setProperty("--width",A+"px"),this._closeFolders=t}}/*@__PURE__*/l(A)(()=>void("?archive"===window.location.search?(c().appendTo(document.body),e().appendTo(document.body)):(document.body.innerHTML=F(),n().prependTo(".t1"),e().appendTo(document.body),/** Prepare 10 year video autoplay on scroll in */function(){let l=document.querySelector(".tenYears video");if(!l)throw Error("Couldn't find ten year video");if(!(l instanceof HTMLVideoElement))throw Error("Invalid ten year element type");l.currentTime=2,// can only play pause without input event if muted
    l.muted=!0,l.controls=!1,new IntersectionObserver(a=>{1!=a.length&&console.warn(`Expected 1 entry, got ${a.length}`),a.forEach(a=>{a.isIntersecting?(l.play(),l.controls=!0):l.pause()})},{threshold:0,rootMargin:"-50% 0% -40%"}).observe(l)}(),B("#logo",{width:["100vmin","100px"]},{timeRange:"exit 0% 50%",fill:"both",easing:"linear"}),B(".logoWrap",{height:["80lvh","100px"]},{timeRange:"exit 10% 100%",fill:"both",easing:"linear"}),B(".upcomingCover",[{visibility:"visible",opacity:1},{visibility:"hidden",opacity:0}],{timeRange:"exit 40% 100%",fill:"both",easing:"linear"}),B("nav",[{visibility:"hidden",opacity:0},{visibility:"visible",opacity:1}],{timeRange:"exit 40% 100%",fill:"both",easing:"linear"}),B(".posters",// { marginTop: ["0%", "-120%"] },
    {marginTop:["-25lvh","25lvh"]},{timeRange:"cover 0% 100%",fill:"both",easing:"linear"}),function(){let l=window.location.hash;if(""!=l){let a=document.querySelector(l);if(a){let l=a.getBoundingClientRect().top;window.scrollTo(0,l)}}}(),function(){if("localhost"==window.location.hostname){let l=new K,a={opacity:100};l.add(a,"opacity",0,100,1).onChange(()=>{document.body.style.setProperty("--debug-opacity",a.opacity+"%")})}}())));