/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.0
 * @author George Michael Brower
 * @license MIT
 *//**
 * Base class for all controllers.
 */class e{constructor(t,i,n,r,a="div"){/**
		 * The GUI that contains this controller.
		 * @type {GUI}
		 */this.parent=t,/**
		 * The object this controller will modify.
		 * @type {object}
		 */this.object=i,/**
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
		 */this.domElement=document.createElement(a),this.domElement.classList.add("controller"),this.domElement.classList.add(r),/**
		 * The DOM element that contains the controller's name.
		 * @type {HTMLElement}
		 */this.$name=document.createElement("div"),this.$name.classList.add("name"),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,/**
		 * The DOM element that contains the controller's "widget" (which differs by controller type).
		 * @type {HTMLElement}
		 */this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),/**
		 * The DOM element that receives the disabled attribute when using disable().
		 * @type {HTMLElement}
		 */this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),// Don't fire global key events while typing in a controller
this.domElement.addEventListener("keydown",e=>e.stopPropagation()),this.domElement.addEventListener("keyup",e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}/**
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
	 */destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class t extends e{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function i(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!i&&"#"+i}const n={isPrimitive:!0,match:e=>"number"==typeof e,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},r=[{isPrimitive:!0,match:e=>"string"==typeof e,fromHexString:i,toHexString:i},n,{isPrimitive:!1,// The arrow function is here to appease tree shakers like esbuild or webpack.
// See https://esbuild.github.io/api/#tree-shaking
match:e=>Array.isArray(e),fromHexString(e,t,i=1){let r=n.fromHexString(e);t[0]=(r>>16&255)/255*i,t[1]=(r>>8&255)/255*i,t[2]=(255&r)/255*i},toHexString([e,t,i],r=1){r=255/r;let a=e*r<<16^t*r<<8^i*r<<0;return n.toHexString(a)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){let r=n.fromHexString(e);t.r=(r>>16&255)/255*i,t.g=(r>>8&255)/255*i,t.b=(255&r)/255*i},toHexString({r:e,g:t,b:i},r=1){r=255/r;let a=e*r<<16^t*r<<8^i*r<<0;return n.toHexString(a)}}];class a extends e{constructor(e,t,n,a){var l;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(l=this.initialValue,r.find(e=>e.match(l))),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let e=i(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class l extends e{constructor(e,t,i){super(e,t,i,"function"),// Buttons are the only case where widget contains name
this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),// enables :active pseudo class on mobile
this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class s extends e{constructor(e,t,i,n,r,a){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(r);let l=void 0!==a;this.step(l?a:this._getImplicitStep(),l),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=void 0===this._decimals?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id);// On touch devices only, use input[type=number] to force a numeric keyboard.
// Ideally we could use one input type everywhere, but [type=number] has quirks
// on desktop, and [inputmode=decimal] has quirks on iOS.
// See https://github.com/georgealways/lil-gui/pull/16
let e=window.matchMedia("(pointer: coarse)").matches;e&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;// Keys & mouse wheel
// ---------------------------------------------------------------------
let t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),// Force the input to updateDisplay when it's focused
this.$input.value=this.getValue())},i=!1,n,r,a,l,s,o=e=>{if(i){let t=e.clientX-n,a=e.clientY-r;Math.abs(a)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(t)>5&&c()}// This isn't an else so that the first move counts towards dragDelta
if(!i){let t=e.clientY-a;s-=t*this._step*this._arrowKeyMultiplier(e),l+s>this._max?s=this._max-l:l+s<this._min&&(s=this._min-l),this._snapClampSetValue(l+s)}a=e.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))}),this.$input.addEventListener("keydown",e=>{"Enter"===e.key&&this.$input.blur(),"ArrowUp"===e.code&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),"ArrowDown"===e.code&&(e.preventDefault(),t(-(this._step*this._arrowKeyMultiplier(e)*1)))}),this.$input.addEventListener("wheel",e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},{passive:!1}),this.$input.addEventListener("mousedown",e=>{n=e.clientX,r=a=e.clientY,i=!0,l=this.getValue(),s=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){let e;this._hasSlider=!0,// Build DOM
// ---------------------------------------------------------------------
this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");// Map clientX to value
// ---------------------------------------------------------------------
let t=(e,t,i,n,r)=>(e-t)/(i-t)*(r-n)+n,i=e=>{let i=this.$slider.getBoundingClientRect(),n=t(e,i.left,i.right,this._min,this._max);this._snapClampSetValue(n)},n=e=>{i(e.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)},a=!1,l,s,o=e=>{e.preventDefault(),this._setDraggingStyle(!0),i(e.touches[0].clientX),a=!1},c=e=>{if(a){let t=e.touches[0].clientX-l,i=e.touches[0].clientY-s;Math.abs(t)>Math.abs(i)?o(e):(// This was, in fact, an attempt to scroll. Abort.
window.removeEventListener("touchmove",c),window.removeEventListener("touchend",u))}else e.preventDefault(),i(e.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",u)},h=this._callOnFinishChange.bind(this);this.$slider.addEventListener("mousedown",e=>{this._setDraggingStyle(!0),i(e.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)}),this.$slider.addEventListener("touchstart",e=>{e.touches.length>1||(this._hasScrollBar?(l=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):o(e),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",u))},{passive:!1}),this.$slider.addEventListener("wheel",t=>{// ignore vertical wheels if there's a scrollbar
let i=Math.abs(t.deltaX)<Math.abs(t.deltaY);if(i&&this._hasScrollBar)return;t.preventDefault();// set value
let n=this._normalizeMouseWheel(t)*this._step;this._snapClampSetValue(this.getValue()+n),// force the input to updateDisplay when it's focused
this.$input.value=this.getValue(),// debounce onFinishChange
clearTimeout(e),e=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;// Safari and Chrome report weird non-integral values for a notched wheel,
// but still expose actual lines scrolled via wheelDelta. Notched wheels
// should behave the same way as arrow keys.
Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120*(this._stepExplicit?1:10));let n=t+-i;return n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){// This would be the logical way to do things, but floating point errors.
// return Math.round( value / this._step ) * this._step;
// Using inverse step solves a lot of them, but not all
// const inverseStep = 1 / this._step;
// return Math.round( value * inverseStep ) / inverseStep;
// Not happy about this, but haven't seen it break.
let t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}}class o extends e{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement("option");t.innerHTML=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=-1===t?e:this._names[t],this}}class c extends e{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",e=>{"Enter"===e.code&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const u=`.lil-gui {
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
}`;let h=!1;class d{/**
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
	 */constructor({parent:e,autoPlace:t=void 0===e,container:i,width:n,title:r="Controls",closeFolders:a=!1,injectStyles:l=!0,touchStyles:s=!0}={}){if(/**
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
return}this.domElement.classList.add("root"),s&&this.domElement.classList.add("allow-touch-styles"),!h&&l&&(function(e){let t=document.createElement("style");t.innerHTML=e;let i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}(u),h=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=a}/**
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
	 */add(e,i,n,r,a){if(Object(n)===n)return new o(this,e,i,n);let u=e[i];switch(typeof u){case"number":return new s(this,e,i,n,r,a);case"boolean":return new t(this,e,i);case"string":return new c(this,e,i);case"function":return new l(this,e,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,e,`
	value:`,u)}/**
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
	 */addColor(e,t,i=1){return new a(this,e,t,i)}/**
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
	 */addFolder(e){let t=new d({parent:this,title:e});return this.root._closeFolders&&t.close(),t}/**
	 * Recalls values that were saved with `gui.save()`.
	 * @param {object} obj
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {this}
	 */load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{!(t instanceof l)&&t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}/**
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
	 */save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof l)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}/**
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
let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");let i=e=>{e.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);// todo: this is wrong if children's scrollHeight makes for a gui taller than maxHeight
let n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this)}/**
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
	 */foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}// auto apply debug gui
if("localhost"==window.location.hostname){let e=new d,t={opacity:100};e.add(t,"opacity",0,100,1).onChange(()=>{document.body.style.setProperty("--debug-opacity",t.opacity+"%")})}function m(e,t,i){let n=document.querySelector(e);if(!n)throw Error(`Invalid element for selector: ${e}`);let r=/** general helper functions */function(e,t){let i=e;do i=i.parentElement;while(i&&!i?.matches(".t"))return i}(n,0);if(!r)throw Error(`Couldn't find track for selector ${e}`);let a=new ViewTimeline({subject:r});n.animate(t,{...i,timeline:a})}!function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function s(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return l(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(function(){var e,i=new WeakMap,r=function(){function e(e,t,n,r){i.set(this,{values:function(e){for(var t,i=[],n=0;n<e.length;n++)i[n]="number"==typeof(t=e[n])?new CSSUnitValue(t,"number"):t;return i}(e),operator:t,name:n||t,delimiter:r||", "})}return e.prototype.toString=function(){var e=i.get(this);return e.name+"("+e.values.join(e.delimiter)+")"},t(e,[{key:"operator",get:function(){return i.get(this).operator}},{key:"values",get:function(){return i.get(this).values}}]),e}(),a=((e={CSSUnitValue:function(){function e(e,t){i.set(this,{value:e,unit:t})}return e.prototype.toString=function(){var e=i.get(this);return""+e.value+function(e){switch(e){case"percent":return"%";case"number":return"";default:return e.toLowerCase()}}(e.unit)},t(e,[{key:"value",get:function(){return i.get(this).value},set:function(e){i.get(this).value=e}},{key:"unit",get:function(){return i.get(this).unit}}]),e}(),CSSKeywordValue:function(){function e(e){this.value=e}return e.prototype.toString=function(){return this.value.toString()},e}(),CSSMathSum:function(e){function t(t){return e.call(this,arguments,"sum","calc"," + ")||this}return n(t,e),t}(r),CSSMathProduct:function(e){function t(t){return e.call(this,arguments,"product","calc"," * ")||this}return n(t,e),t}(r),CSSMathNegate:function(e){function t(t){return e.call(this,[arguments[0]],"negate","-")||this}return n(t,e),t}(r)}).CSSMathNegate=function(e){function t(t){return e.call(this,[1,arguments[0]],"invert","calc"," / ")||this}return n(t,e),t}(r),e.CSSMathMax=function(e){function t(){return e.call(this,arguments,"max")||this}return n(t,e),t}(r),e.CSSMathMin=function(e){function t(){return e.call(this,arguments,"min")||this}return n(t,e),t}(r),e);if(!window.CSS&&!Reflect.defineProperty(window,"CSS",{value:{}}))throw Error("Error installing CSSOM support");for(var l in window.CSSUnitValue||["number","percent","em","ex","px","cm","mm","in","pt","pc","Q","vw","vh","vmin","vmax","rems","ch","deg","rad","grad","turn","ms","s","Hz","kHz","dppx","dpi","dpcm","fr"].forEach(function(e){if(!Reflect.defineProperty(CSS,e,{value:function(t){return new CSSUnitValue(t,e)}}))throw Error("Error installing CSS."+e)}),a)if(!(l in window)&&!Reflect.defineProperty(window,l,{value:a[l]}))throw Error("Error installing CSSOM support for "+l)})(),new CSSKeywordValue("auto");var o=new WeakMap;function c(e){return e===document.scrollingElement?document:e}function u(e){d(e);var t=o.get(e).animations;if(0!==t.length)for(var i=e.currentTime,n=0;n<t.length;n++)t[n].tickAnimation(i)}function h(e,t){if(!e)return null;var i="horizontal-tb"==getComputedStyle(e).writingMode,n=e.scrollTop;return("horizontal"==t||"inline"==t&&i||"block"==t&&!i)&&(n=Math.abs(e.scrollLeft)),n}function d(e){if(e instanceof _){var t,i=e.subject;i&&"none"!=getComputedStyle(i).display?m(e,T(i)):m(e,null)}else(t=o.get(e)).anonymousSource&&m(e,y(t.anonymousSource,t.anonymousTarget))}function m(e,t){var i=o.get(e),n=i.source,r=i.scrollListener;if(n!=t&&(n&&r&&c(n).removeEventListener("scroll",r),o.get(e).source=t,t)){var a=function(){u(e)};c(t).addEventListener("scroll",a),i.scrollListener=a}}function p(e,t){for(var i=o.get(e).animations,n=0;n<i.length;n++)i[n].animation==t&&i.splice(n,1)}function g(e,t,i){for(var n=o.get(e).animations,r=0;r<n.length;r++)if(n[r].animation==t)return;n.push({animation:t,tickAnimation:i}),u(e)}var f=function(){function e(e){o.set(this,{source:null,orientation:"block",anonymousSource:e?e.anonymousSource:null,anonymousTarget:e?e.anonymousTarget:null,subject:null,inset:e?e.inset:null,animations:[],scrollListener:null}),m(this,e&&void 0!==e.source?e.source:document.scrollingElement),this.orientation=e&&e.orientation||"block",u(this)}return t(e,[{key:"source",get:function(){return o.get(this).source},set:function(e){m(this,e),u(this)}},{key:"orientation",get:function(){return o.get(this).orientation},set:function(e){if(-1===["block","inline","horizontal","vertical"].indexOf(e))throw TypeError("Invalid orientation");o.get(this).orientation=e,u(this)}},{key:"duration",get:function(){return CSS.percent(100)}},{key:"phase",get:function(){var e=this.source;if(!e)return"inactive";var t=getComputedStyle(e);return"none"==t.display?"inactive":e==document.scrollingElement||"visible"!=t.overflow&&"clip"!=t.overflow?"active":"inactive"}},{key:"currentTime",get:function(){var e,t,i=this.source;if(!i||"inactive"==this.phase)return null;var n=this.orientation,r=h(i,n),a=(e=n,t="horizontal-tb"==getComputedStyle(i).writingMode,"block"===e?e=t?"vertical":"horizontal":"inline"===e&&(e=t?"horizontal":"vertical"),"vertical"===e?i.scrollHeight-i.clientHeight:"horizontal"===e?i.scrollWidth-i.clientWidth:void 0);return a>0?CSS.percent(100*r/a):CSS.percent(100)}},{key:"__polyfill",get:function(){return!0}}]),e}();function v(e,t){for(var i=e.parentElement;null!=i;){if(t(i))return i;i=i.parentElement}}function y(e,t){return"root"==e?document.scrollingElement:T(t)}function b(e){switch(getComputedStyle(e).display){case"block":case"inline-block":case"list-item":case"table":case"table-caption":case"flow-root":case"flex":case"grid":return!0}return!1}function w(e){var t=getComputedStyle(e);return"none"!=t.transform||"none"!=t.perspective||"transform"==t.willChange||"perspective"==t.willChange||"none"!=t.filter||"filter"==t.willChange||"none"!=t.backdropFilter}function A(e){return"static"!=getComputedStyle(e).position||w(e)}function T(e){if(e){for(;e=function(e){switch(getComputedStyle(e).position){case"static":case"relative":case"sticky":return v(e,b);case"absolute":return v(e,A);case"fixed":return v(e,w)}}(e);)switch(getComputedStyle(e)["overflow-x"]){case"auto":case"scroll":case"hidden":return e==document.body&&"visible"==getComputedStyle(document.scrollingElement).overflow?document.scrollingElement:e}return document.scrollingElement}}function S(e,t){var i=o.get(e);return"inactive"===e.phase?null:e instanceof _?x(t,e.source,e.subject,i.orientation,i.inset):null}function x(e,t,i,n,r){for(var a=0,l=0,s=i,o=t.offsetParent;s&&s!=o;)l+=s.offsetLeft,a+=s.offsetTop,s=s.offsetParent;l-=t.offsetLeft+t.clientLeft,a-=t.offsetTop+t.clientTop;var c=getComputedStyle(t),u="horizontal-tb"==c.writingMode,h=void 0,d=void 0,m=void 0;"horizontal"==n||"inline"==n&&u||"block"==n&&!u?(h=i.clientWidth,d=l,("rtl"==c.direction||"vertical-rl"==c.writingMode)&&(d+=t.scrollWidth-t.clientWidth),m=t.clientWidth):(h=i.clientHeight,d=a,m=t.clientHeight);var p=function(e,t){var i={start:0,end:0};if(!e)return i;var n=e.split(" "),r=[];if(n.forEach(function(e){e.endsWith("%")?r.push(t/100*parseFloat(e)):e.endsWith("px")?r.push(parseFloat(e)):"auto"===e&&r.push(0)}),r.length>2)throw TypeError("Invalid inset");return 1==r.length?(i.start=r[0],i.end=r[0]):2==r.length&&(i.start=r[0],i.end=r[1]),i}(r,m),g=d-m+p.end,f=d+h-p.start,v=g+h,y=f-h,b=Math.min(v,y),w=Math.max(v,y),A=void 0,T=void 0;switch(e){case"cover":A=g,T=f;break;case"contain":A=b,T=w;break;case"enter":A=g,T=b;break;case"exit":A=w,T=f}return{start:A,end:T}}function E(e,t,i){return k(S(e,t),i,S(e,"cover"))}function k(e,t,i){return e&&i?(t.value/100*(e.end-e.start)+e.start-i.start)/(i.end-i.start):0}var _=function(e){function i(t){var i;return t.axis&&(t.orientation=t.axis),i=e.call(this,t)||this,o.get(a(i)).subject=t&&t.subject?t.subject:void 0,d(a(i)),u(a(i)),i}return n(i,e),t(i,[{key:"source",get:function(){return d(this),o.get(this).source},set:function(e){throw Error("Cannot set the source of a view timeline")}},{key:"subject",get:function(){return o.get(this).subject}},{key:"axis",get:function(){return o.get(this).orientation}},{key:"currentTime",get:function(){var e=h(this.source,this.orientation);if(null==e)return null;var t=S(this,"cover");return t?CSS.percent((e-t.start)/(t.end-t.start)*100):null}}]),i}(f),C=window.Element.prototype.animate,I=window.Animation,M=["enter","exit","cover","contain"],$=function(){function e(){var e=this;this.state="pending",this.nativeResolve=this.nativeReject=null,this.promise=new Promise(function(t,i){e.nativeResolve=t,e.nativeReject=i})}var t=e.prototype;return t.resolve=function(e){this.state="resolved",this.nativeResolve(e)},t.reject=function(e){this.state="rejected",this.promise.catch(function(){}),this.nativeReject(e)},e}();function L(e){e.readyPromise=new $,requestAnimationFrame(function(){null!==e.timeline.currentTime&&K(e)})}function N(){return new DOMException("The user aborted a request","AbortError")}function O(e,t){if(null===t)return t;if("number"!=typeof t)throw new DOMException("Unexpected value: "+t+".  Cannot convert to CssNumberish","InvalidStateError");var i=z(e);return CSS.percent(i?100*t/i:0)}function P(e,t){if(e.timeline){if(null===t)return t;if("percent"===t.unit){var i=z(e);return t.value*i/100}throw new DOMException("CSSNumericValue must be a percentage for progress based animations.","NotSupportedError")}if(null==t||"number"==typeof t)return t;var n=t.to("ms");if(convertTime)return n.value;throw new DOMException("CSSNumericValue must be either a number or a time value for time based animations.","InvalidStateError")}function R(e){if(e.finishedPromise&&"pending"==e.finishedPromise.state&&"finished"==e.proxy.playState){e.finishedPromise.resolve(e.proxy),e.animation.pause();var t=new CustomEvent("finish",{detail:{currentTime:e.proxy.currentTime,timelineTime:e.proxy.timeline.currentTime}});Object.defineProperty(t,"currentTime",{get:function(){return this.detail.currentTime}}),Object.defineProperty(t,"timelineTime",{get:function(){return this.detail.timelineTime}}),requestAnimationFrame(function(){queueMicrotask(function(){e.animation.dispatchEvent(t)})})}}function D(e){return null!==e.pendingPlaybackRate?e.pendingPlaybackRate:e.animation.playbackRate}function V(e){null!==e.pendingPlaybackRate&&(e.animation.playbackRate=e.pendingPlaybackRate,e.pendingPlaybackRate=null)}function F(e){if(!e.timeline)return null;var t=P(e,e.timeline.currentTime);if(null===t||null===e.startTime)return null;var i=(t-e.startTime)*e.animation.playbackRate;return -0==i&&(i=0),i}function j(e,t){if(!e.timeline)return null;var i=P(e,e.timeline.currentTime);return null==i?null:i-t/e.animation.playbackRate}function W(e,t,i){if(e.timeline){var n=t?P(e,e.proxy.currentTime):F(e);if(n&&null!=e.startTime&&!e.proxy.pending){var r=D(e),a=z(e),l=e.previousCurrentTime;r>0&&n>=a?((null===l||l<a)&&(l=a),e.holdTime=t?n:l):r<0&&n<=0?((null==l||l>0)&&(l=0),e.holdTime=t?n:l):0!=r&&(t&&null!==e.holdTime&&(e.startTime=j(e,e.holdTime)),e.holdTime=null)}H(e),e.previousCurrentTime=P(e,e.proxy.currentTime),"finished"==e.proxy.playState?(e.finishedPromise||(e.finishedPromise=new $),"pending"==e.finishedPromise.state&&(i?R(e):Promise.resolve().then(function(){R(e)}))):(e.finishedPromise&&"resolved"==e.finishedPromise.state&&(e.finishedPromise=new $),"paused"!=e.animation.playState&&e.animation.pause())}}function z(e){var t,i=(t=e.proxy.effect.getTiming(),e.normalizedTiming||t);return Math.max(0,i.delay+i.endDelay+i.iterations*i.duration)}function H(e){if(e.timeline){if(null!==e.startTime){var t=e.timeline.currentTime;null!=t&&B(e,(P(e,t)-e.startTime)*e.animation.playbackRate)}else null!==e.holdTime&&B(e,e.holdTime)}}function B(e,t){var i=e.timeline,n=e.animation.playbackRate;e.animation.currentTime=t+(i.currentTime&&i.currentTime.value==(n<0?0:100)?n<0?.001:-.001:0)}function Y(e,t){if(e.timeline){var i="paused"==e.proxy.playState&&e.proxy.pending,n=!1,r=null,a=P(e,e.proxy.currentTime);e.resetCurrentTimeOnResume&&(a=null,e.resetCurrentTimeOnResume=!1);var l=D(e),s=z(e);if(l>0&&t&&(null==a||a<0||a>=s))r=0;else if(l<0&&t&&(null==a||a<=0||a>s)){if(1/0==s)return void e.animation.play();r=s}else 0==l&&null==a&&(r=0);null!=r&&(e.startTime=r,e.holdTime=null,V(e)),g(e.timeline,e.animation,G.bind(e.proxy)),e.holdTime&&(e.startTime=null),e.pendingTask&&(e.pendingTask=null,n=!0),(null!==e.holdTime||null!==r||i||null!==e.pendingPlaybackRate)&&(e.readyPromise&&!n&&(e.readyPromise=null),H(e),e.readyPromise||L(e),e.pendingTask="play",W(e,!1,!1))}}function G(e){var t=X.get(this);if(null!=e){t.pendingTask&&K(t);var i=this.playState;"running"!=i&&"finished"!=i||(B(t,(P(t,e)-P(t,this.startTime))*this.playbackRate),"finished"==i&&0!=D(t)&&(t.holdTime=null),W(t,!1,!1))}else"idle"!=t.animation.playState&&t.animation.cancel()}function K(e){var t;"pause"==e.pendingTask?(t=P(e,e.timeline.currentTime),null!=e.startTime&&null==e.holdTime&&(e.holdTime=(t-e.startTime)*e.animation.playbackRate),V(e),e.startTime=null,e.readyPromise.resolve(e.proxy),W(e,!1,!1),H(e),e.pendingTask=null):"play"==e.pendingTask&&function(e){var t=P(e,e.timeline.currentTime);if(null!=e.holdTime)V(e),0==e.animation.playbackRate?e.startTime=t:(e.startTime=t-e.holdTime/e.animation.playbackRate,e.holdTime=null);else if(null!==e.startTime&&null!==e.pendingPlaybackRate){var i=(t-e.startTime)*e.animation.playbackRate;V(e);var n=e.animation.playbackRate;0==n?(e.holdTime=null,e.startTime=t):e.startTime=t-i/n}e.readyPromise&&"pending"==e.readyPromise.state&&e.readyPromise.resolve(e.proxy),W(e,!1,!1),H(e),e.pendingTask=null}(e)}var X=new WeakMap,U=function(){function e(e,t,i){void 0===i&&(i={});var n,r,a=e instanceof I?e:new I(e,s),l=t instanceof f,s=l?void 0:t;X.set(this,{animation:a,timeline:l?t:void 0,playState:l?"idle":null,readyPromise:null,finishedPromise:null,startTime:null,holdTime:null,previousCurrentTime:null,resetCurrentTimeOnResume:!1,pendingPlaybackRate:null,pendingTask:null,specifiedTiming:null,normalizedTiming:null,effect:null,timeRange:t instanceof ViewTimeline?(r=Z((n=i)["animation-time-range"]),n["animation-delay"]&&(r.start=J(n["animation-delay"],Q().offset)),n["animation-end-delay"]&&(r.end=J(n["animation-end-delay"],q().offset)),r):null,proxy:this})}var i=e.prototype;return i.finish=function(){var e=X.get(this);if(e.timeline){var t=D(e),i=z(e);if(0==t)throw new DOMException("Cannot finish Animation with a playbackRate of 0.","InvalidStateError");if(t>0&&1/0==i)throw new DOMException("Cannot finish Animation with an infinite target effect end.","InvalidStateError");V(e);var n=t<0?0:i;this.currentTime=O(e,n);var r=P(e,e.timeline.currentTime);null===e.startTime&&null!==r&&(e.startTime=r-n/e.animation.playbackRate),"pause"==e.pendingTask&&null!==e.startTime&&(e.holdTime=null,e.pendingTask=null,e.readyPromise.resolve(this)),"play"==e.pendingTask&&null!==e.startTime&&(e.pendingTask=null,e.readyPromise.resolve(this)),W(e,!0,!0)}else e.animation.finish()},i.play=function(){var e=X.get(this);e.timeline?Y(e,!0):e.animation.play()},i.pause=function(){var e=X.get(this);if(e.timeline){if("paused"!=this.playState){var t=null,i=e.animation.playbackRate,n=z(e);if(null===e.animation.currentTime){if(i>=0)t=0;else{if(1/0==n)return void e.animation.pause();t=n}}null!==t&&(e.startTime=t),"play"==e.pendingTask?e.pendingTask=null:e.readyPromise=null,e.readyPromise||L(e),e.pendingTask="pause"}}else e.animation.pause()},i.reverse=function(){var e=X.get(this),t=D(e),i=e.resetCurrentTimeOnResume?null:P(e,this.currentTime),n=1/0==z(e),r=0!=t&&(t<0||i>0||!n);if(!e.timeline||!r)return r&&(e.pendingPlaybackRate=-D(e)),void e.animation.reverse();if("inactive"==e.timeline.phase)throw new DOMException("Cannot reverse an animation with no active timeline","InvalidStateError");this.updatePlaybackRate(-t),Y(e,!0)},i.updatePlaybackRate=function(e){var t=X.get(this);if(t.pendingPlaybackRate=e,t.timeline){if(!t.readyPromise||"pending"!=t.readyPromise.state)switch(this.playState){case"idle":case"paused":V(t);break;case"finished":var i=P(t,t.timeline.currentTime),n=null!==i?(i-t.startTime)*t.animation.playbackRate:null;t.startTime=0==e?i:null!=i&&null!=n?(i-n)/e:null,V(t),W(t,!1,!1),H(t);break;default:Y(t,!1)}}else t.animation.updatePlaybackRate(e)},i.persist=function(){X.get(this).animation.persist()},i.cancel=function(){var e=X.get(this);e.timeline?("idle"!=this.playState&&(e.pendingTask&&(e.pendingTask=null,V(e),e.readyPromise.reject(N()),L(e),e.readyPromise.resolve(e.proxy)),e.finishedPromise&&"pending"==e.finishedPromise.state&&e.finishedPromise.reject(N()),e.finishedPromise=new $,e.animation.cancel()),e.startTime=null,e.holdTime=null,p(e.timeline,e.animation)):e.animation.cancel()},i.addEventListener=function(e,t,i){X.get(this).animation.addEventListener(e,t,i)},i.removeEventListener=function(e,t,i){X.get(this).animation.removeEventListener(e,t,i)},i.dispatchEvent=function(e){X.get(this).animation.dispatchEvent(e)},t(e,[{key:"effect",get:function(){var e,t,i,n=X.get(this);return n.timeline?(n.effect||(n.effect=(t=(e=n.animation.effect).updateTiming,(i=new Proxy(e,{get:function(t,i){var n=t[i];return"function"==typeof n?n.bind(e):n},set:function(e,t,i){return e[t]=i,!0}})).getComputedTiming=new Proxy(e.getComputedTiming,{apply:function(t){e.getTiming();var i=t.apply(e);if(n.timeline){i.localTime=O(n,i.localTime),i.endTime=O(n,i.endTime),i.activeDuration=O(n,i.activeDuration);var r=z(n);i.duration=r?CSS.percent(100*(i.iterations?(r-i.delay-i.endDelay)/i.iterations:0)/r):CSS.percent(0),void 0===n.timeline.currentTime&&(i.localTime=null)}return i}}),i.getTiming=new Proxy(e.getTiming,{apply:function(i,r){if(n.specifiedTiming)return n.specifiedTiming;n.specifiedTiming=i.apply(e);var a,l,s=Object.assign({},n.specifiedTiming),o=!1;return n.timeline instanceof ViewTimeline&&(a=function(e){if(!(e.timeline instanceof ViewTimeline))return 0;var t=e.timeRange.start;return E(e.timeline,t.name,t.offset)}(n),l=function(e){if(!(e.timeline instanceof ViewTimeline))return 0;var t=e.timeRange.end;return 1-E(e.timeline,t.name,t.offset)}(n),o=!0),(null===s.duration||"auto"===s.duration||o)&&n.timeline&&(o?(s.delay=1e5*a,s.endDelay=1e5*l):(s.delay=0,s.endDelay=0),s.duration=s.iterations?((s.iterations?1e5:0)-s.delay-s.endDelay)/s.iterations:0,t.apply(e,[s])),n.normalizedTiming=s,n.specifiedTiming}}),i.updateTiming=new Proxy(e.updateTiming,{apply:function(t,i,r){if(n.timeline){var a=r[0];if(1/0===a.duration)throw TypeError("Effect duration cannot be Infinity when used with Scroll Timelines");if(1/0===a.iterations)throw TypeError("Effect iterations cannot be Infinity when used with Scroll Timelines")}n.specifiedTiming&&t.apply(e,[n.specifiedTiming]),t.apply(e,r),n.specifiedTiming=null}}),i)),n.effect):n.animation.effect},set:function(e){X.get(this).animation.effect=e,details.effect=null}},{key:"timeline",get:function(){var e=X.get(this);return e.timeline||e.animation.timeline},set:function(e){var t=this.timeline;if(t!=e){var i=this.playState,n=this.currentTime,r=X.get(this),a=z(r),l=a>0?P(r,n)/a:0,s=t instanceof f,o=e instanceof f;r.resetCurrentTimeOnResume=!1;var c=this.pending;if(s&&p(r.timeline,r.animation),o){r.timeline=e,V(r);var u=r.animation.playbackRate>=0?0:z(r);switch(i){case"running":case"finished":r.startTime=u,g(r.timeline,r.animation,G.bind(this));break;case"paused":r.resetCurrentTimeOnResume=!0,r.startTime=null,r.holdTime=P(r,CSS.percent(100*l));break;default:r.holdTime=null,r.startTime=null}return c&&(r.readyPromise&&"resolved"!=r.readyPromise.state||L(r),r.pendingTask="paused"==i?"pause":"play"),null!==r.startTime&&(r.holdTime=null),void W(r,!1,!1)}if(r.animation.timeline!=e)throw TypeError("Unsupported timeline: "+e);if(p(r.timeline,r.animation),r.timeline=null,s)switch(null!==n&&(r.animation.currentTime=l*z(r)),i){case"paused":r.animation.pause();break;case"running":case"finished":r.animation.play()}}}},{key:"startTime",get:function(){var e=X.get(this);return e.timeline?O(e,e.startTime):e.animation.startTime},set:function(e){var t=X.get(this);if(e=P(t,e),t.timeline){null==P(t,t.timeline.currentTime)&&null!=t.startTime&&(t.holdTime=null,H(t));var i=P(t,this.currentTime);V(t),t.startTime=e,t.resetCurrentTimeOnResume=!1,t.holdTime=null!==t.startTime&&0!=t.animation.playbackRate?null:i,t.pendingTask&&(t.pendingTask=null,t.readyPromise.resolve(this)),W(t,!0,!1),H(t)}else t.animation.startTime=e}},{key:"currentTime",get:function(){var e=X.get(this);return e.timeline?O(e,null!=e.holdTime?e.holdTime:F(e)):e.animation.currentTime},set:function(e){var t=X.get(this);if(e=P(t,e),t.timeline&&null!=e){var i=t.timeline.phase;null!==t.holdTime||null===t.startTime||"inactive"==i||0==t.animation.playbackRate?t.holdTime=e:t.startTime=j(t,e),t.resetCurrentTimeOnResume=!1,"inactive"==i&&(t.startTime=null),t.previousCurrentTime=null,"pause"==t.pendingTask&&(t.holdTime=e,V(t),t.startTime=null,t.pendingTask=null,t.readyPromise.resolve(this)),W(t,!0,!1)}else t.animation.currentTime=e}},{key:"playbackRate",get:function(){return X.get(this).animation.playbackRate},set:function(e){var t=X.get(this);if(t.timeline){t.pendingPlaybackRate=null;var i=this.currentTime;t.animation.playbackRate=e,null!==i&&(this.currentTime=i)}else t.animation.playbackRate=e}},{key:"playState",get:function(){var e=X.get(this);if(!e.timeline)return e.animation.playState;var t=P(e,this.currentTime);return null===t&&null===e.startTime&&null==e.pendingTask?"idle":"pause"==e.pendingTask||null===e.startTime&&"play"!=e.pendingTask?"paused":null!=t&&(e.animation.playbackRate>0&&t>=z(e)||e.animation.playbackRate<0&&t<=0)?"finished":"running"}},{key:"replaceState",get:function(){return X.get(this).animation.pending}},{key:"pending",get:function(){var e=X.get(this);return e.timeline?!!e.readyPromise&&"pending"==e.readyPromise.state:e.animation.pending}},{key:"id",get:function(){return X.get(this).animation.id}},{key:"onfinish",get:function(){return X.get(this).animation.onfinish},set:function(e){X.get(this).animation.onfinish=e}},{key:"oncancel",get:function(){return X.get(this).animation.oncancel},set:function(e){X.get(this).animation.oncancel=e}},{key:"onremove",get:function(){return X.get(this).animation.onremove},set:function(e){X.get(this).animation.onremove=e}},{key:"finished",get:function(){var e=X.get(this);return e.timeline?(e.finishedPromise||(e.finishedPromise=new $),e.finishedPromise.promise):e.animation.finished}},{key:"ready",get:function(){var e=X.get(this);return e.timeline?(e.readyPromise||(e.readyPromise=new $,e.readyPromise.resolve(this)),e.readyPromise.promise):e.animation.ready}}]),e}();function J(e,t){if(!e)return null;var i=e.split(" ");if(!M.includes(i[0])||2==i.length&&!i[1].endsWith("%"))throw TypeError("Invalid animation delay");var n=t;if(2==i.length){var r=parseFloat(i[1]);if(Number.isNaN(r))throw TypeError('"'+i[1]+'" is not a valid percentage for animation delay');n=CSS.percent(r)}return{name:i[0],offset:n}}function Q(){return{name:"cover",offset:CSS.percent(0)}}function q(){return{name:"cover",offset:CSS.percent(100)}}function Z(e){var t={start:Q(),end:q()};if(!e)return t;var i=e.split(" "),n=[],r=[];if(i.forEach(function(e){e.endsWith("%")?r.push(parseFloat(e)):n.push(e)}),n.length>2||r.length>2||1==r.length)throw TypeError("Invalid time range");return n.length&&(t.start.name=n[0],t.end.name=n.length>1?n[1]:n[0]),r.length>1&&(t.start.offset=CSS.percent(r[0]),t.end.offset=CSS.percent(r[1])),t}var ee={IDENTIFIER:/[\w\\\@_-]+/g,WHITE_SPACE:/\s*/g,TIME:/^[0-9]+(s|ms)/,SCROLL_TIMELINE:/scroll-timeline\s*:([^;}]+)/,SCROLL_TIMELINE_NAME:/scroll-timeline-name\s*:([^;}]+)/,SCROLL_TIMELINE_AXIS:/scroll-timeline-axis\s*:([^;}]+)/,VIEW_TIMELINE:/view-timeline\s*:([^;}]+)/,VIEW_TIMELINE_NAME:/view-timeline-name\s*:([^;}]+)/,VIEW_TIMELINE_AXIS:/view-timeline-axis\s*:([^;}]+)/,VIEW_TIMELINE_INSET:/view-timeline-inset\s*:([^;}]+)/,ANIMATION_TIMELINE:/animation-timeline\s*:([^;}]+)/,ANIMATION_DELAY:/animation-delay\s*:([^;}]+)/,ANIMATION_END_DELAY:/animation-end-delay\s*:([^;}]+)/,ANIMATION_TIME_RANGE:/animation-time-range\s*:([^;}]+)/,ANIMATION_NAME:/animation-name\s*:([^;}]+)/,ANIMATION:/animation\s*:([^;}]+)/,ANONYMOUS_SCROLL:/scroll\(([^)]*)\)/},et=["block","inline","vertical","horizontal"],ei=["nearest","root"],en=new(function(){function e(){this.cssRulesWithTimelineName=[],this.nextAnonymousTimelineNameIndex=0,this.anonymousScrollTimelineOptions=new Map,this.sourceSelectorToScrollTimeline=[],this.subjectSelectorToViewTimeline=[],this.keyframeNamesSelectors=new Map}var t=e.prototype;return t.transpileStyleSheet=function(e,t,i){for(var n={sheetSrc:e,index:0,name:i};n.index<n.sheetSrc.length&&(this.eatWhitespace(n),!(n.index>=n.sheetSrc.length));)if(this.lookAhead("/*",n))for(;this.lookAhead("/*",n);)this.eatComment(n),this.eatWhitespace(n);else{var r=this.parseQualifiedRule(n);r&&(t?this.parseKeyframesAndSaveNameMapping(r,n):this.handleScrollTimelineProps(r,n))}return n.sheetSrc},t.getAnimationTimelineOptions=function(e,t){for(var i=this.cssRulesWithTimelineName.length-1;i>=0;i--){var n=this.cssRulesWithTimelineName[i];if(t.matches(n.selector)&&(!n["animation-name"]||n["animation-name"]==e))return{"animation-timeline":n["animation-timeline"],"animation-delay":n["animation-delay"],"animation-end-delay":n["animation-end-delay"],"animation-time-range":n["animation-time-range"]}}return null},t.getAnonymousScrollTimelineOptions=function(e,t){var i=this.anonymousScrollTimelineOptions.get(e);return i?{anonymousSource:i.source,anonymousTarget:t,source:y(i.source,t),orientation:i.orientation?i.orientation:"block"}:null},t.getScrollTimelineOptions=function(e,t){var n=this.getAnonymousScrollTimelineOptions(e,t);if(n)return n;for(var r=this.sourceSelectorToScrollTimeline.length-1;r>=0;r--){var a=this.sourceSelectorToScrollTimeline[r];if(a.name==e){var l=this.findPreviousSiblingOrAncestorMatchingSelector(t,a.selector);if(l)return i({source:l},a.axis?{orientation:a.axis}:{})}}return null},t.findPreviousSiblingOrAncestorMatchingSelector=function(e,t){for(var i=e;i;){if(i.matches(t))return i;i=i.previousElementSibling||i.parentElement}return null},t.getViewTimelineOptions=function(e,t){for(var i=this.subjectSelectorToViewTimeline.length-1;i>=0;i--){var n=this.subjectSelectorToViewTimeline[i];if(n.name==e){var r=this.findPreviousSiblingOrAncestorMatchingSelector(t,n.selector);if(r)return{subject:r,axis:n.axis,inset:n.inset}}}return null},t.parseScrollTimeline=function(e){var t=e.index;this.assertString(e,"@scroll-timeline"),this.eatWhitespace(e);var i=this.parseIdentifier(e);this.eatWhitespace(e),this.assertString(e,"{"),this.eatWhitespace(e);for(var n={name:i,source:"auto",orientation:void 0};"}"!==this.peek(e);){var r=this.parseIdentifier(e);this.eatWhitespace(e),this.assertString(e,":"),this.eatWhitespace(e),n[r]=this.removeEnclosingDoubleQuotes(this.eatUntil(";",e)),this.assertString(e,";"),this.eatWhitespace(e)}this.assertString(e,"}");var a=e.index;return this.eatWhitespace(e),{scrollTimeline:n,startIndex:t,endIndex:a}},t.handleScrollTimelineProps=function(e,t){var i=this;if(!e.selector.includes("@keyframes")){var n=e.block.contents.includes("animation-name:"),r=e.block.contents.includes("animation-timeline:"),a=e.block.contents.includes("animation:");this.saveSourceSelectorToScrollTimeline(e),this.saveSubjectSelectorToViewTimeline(e);var l=[],s=[],o=!1;r&&(l=this.extractScrollTimelineNames(e.block.contents)),n&&(s=this.extractMatches(e.block.contents,ee.ANIMATION_NAME)),r&&n||(a&&this.extractMatches(e.block.contents,ee.ANIMATION).forEach(function(t){var n=i.extractTimelineName(t);n.timelineName&&l.push(n.timelineName);var a=i.extractAnimationName(t);a&&(n.timelineName||r)&&s.push(a),(n.timelineName||r)&&(i.hasDuration(t)||(e.block.contents=e.block.contents.replace(t," 1s "+t),o=!0)),n.toBeReplaced&&(e.block.contents=e.block.contents.replace(n.toBeReplaced," ".repeat(n.toBeReplaced.length)),o=!0)}),o&&this.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,t)),this.saveRelationInList(e,l,s)}},t.saveSourceSelectorToScrollTimeline=function(e){var t,i=e.block.contents.includes("scroll-timeline:"),n=e.block.contents.includes("scroll-timeline-name:"),r=e.block.contents.includes("scroll-timeline-axis:");if(i||n){var a=[];if(i)for(var l,o=s(this.extractMatches(e.block.contents,ee.SCROLL_TIMELINE));!(l=o()).done;){parts=this.split(l.value);var c={selector:e.selector,name:""};1==parts.length?c.name=parts[0]:2==parts.length&&(et.includes(parts[0])?(c.axis=parts[0],c.name=parts[1]):(c.axis=parts[1],c.name=parts[0])),a.push(c)}if(n)for(var u=this.extractMatches(e.block.contents,ee.SCROLL_TIMELINE_NAME),h=0;h<u.length;h++)h<a.length?a[h].name=u[h]:a.push({selector:e.selector,name:u[h]});var d=[];r&&(d=(d=this.extractMatches(e.block.contents,ee.SCROLL_TIMELINE_AXIS)).filter(function(e){return et.includes(e)}));for(var m=0;m<a.length;m++)d.length&&(a[m].axis=d[m%a.length]);(t=this.sourceSelectorToScrollTimeline).push.apply(t,a)}},t.saveSubjectSelectorToViewTimeline=function(e){var t,i=e.block.contents.includes("view-timeline:"),n=e.block.contents.includes("view-timeline-name:"),r=e.block.contents.includes("view-timeline-axis:"),a=e.block.contents.includes("view-timeline-inset:");if(i||n){var l=[];if(i)for(var o,c=s(this.extractMatches(e.block.contents,ee.VIEW_TIMELINE));!(o=c()).done;){parts=this.split(o.value);var u={selector:e.selector,name:"",inset:null};1==parts.length?u.name=parts[0]:2==parts.length&&(et.includes(parts[0])?(u.axis=parts[0],u.name=parts[1]):(u.axis=parts[1],u.name=parts[0])),l.push(u)}if(n)for(var h=this.extractMatches(e.block.contents,ee.VIEW_TIMELINE_NAME),d=0;d<h.length;d++)d<l.length?l[d].name=h[d]:l.push({selector:e.selector,name:h[d],inset:null});var m=[],p=[];a&&(m=this.extractMatches(e.block.contents,ee.VIEW_TIMELINE_INSET)),r&&(p=(p=this.extractMatches(e.block.contents,ee.VIEW_TIMELINE_AXIS)).filter(function(e){return et.includes(e)}));for(var g=0;g<l.length;g++)m.length&&(l[g].inset=m[g%l.length]),p.length&&(l[g].axis=p[g%l.length]);(t=this.subjectSelectorToViewTimeline).push.apply(t,l)}},t.hasDuration=function(e){return e.split(" ").filter(function(e){return ee.TIME.exec(e)}).length>=1},t.saveRelationInList=function(e,t,n){var r=e.block.contents.includes("animation-delay:"),a=e.block.contents.includes("animation-end-delay:"),l=e.block.contents.includes("animation-time-range:"),s=[],o=[],c=[];r&&(s=this.extractMatches(e.block.contents,ee.ANIMATION_DELAY)),a&&(o=this.extractMatches(e.block.contents,ee.ANIMATION_END_DELAY)),l&&(c=this.extractMatches(e.block.contents,ee.ANIMATION_TIME_RANGE));for(var u=Math.max(t.length,n.length,s.length,o.length,c.length),h=0;h<u;h++)this.cssRulesWithTimelineName.push(i({selector:e.selector,"animation-timeline":t[h%t.length]},n.length?{"animation-name":n[h%n.length]}:{},s.length?{"animation-delay":s[h%s.length]}:{},o.length?{"animation-end-delay":o[h%o.length]}:{},c.length?{"animation-time-range":c[h%c.length]}:{}))},t.extractScrollTimelineNames=function(e){var t=this,i=ee.ANIMATION_TIMELINE.exec(e)[1].trim(),n=[];return i.split(",").map(function(e){return e.trim()}).forEach(function(e){if(e.startsWith("scroll")&&e.includes("(")){var i=t.saveAnonymousTimelineName(e);n.push(i)}else n.push(e)}),n},t.saveAnonymousTimelineName=function(e){var t=":t"+this.nextAnonymousTimelineNameIndex++;return this.anonymousScrollTimelineOptions.set(t,this.parseAnonymousTimeline(e)),t},t.parseAnonymousTimeline=function(e){var t=ee.ANONYMOUS_SCROLL.exec(e);if(!t)return null;var i={};return t[1].split(" ").forEach(function(e){et.includes(e)?i.orientation=e:ei.includes(e)&&(i.source=e)}),i},t.extractAnimationName=function(e){return this.findMatchingEntryInContainer(e,this.keyframeNamesSelectors)},t.extractTimelineName=function(e){var t=null,i=null,n=ee.ANONYMOUS_SCROLL.exec(e);if(n){var r=n[0];t=this.saveAnonymousTimelineName(r),i=r}else i=t=this.findMatchingEntryInContainer(e,new Set(this.sourceSelectorToScrollTimeline.map(function(e){return e.name})))||this.findMatchingEntryInContainer(e,new Set(this.subjectSelectorToViewTimeline.map(function(e){return e.name})));return{timelineName:t,toBeReplaced:i}},t.findMatchingEntryInContainer=function(e,t){var i=e.split(" ").filter(function(e){return t.has(e)});return i?i[0]:null},t.parseIdentifier=function(e){ee.IDENTIFIER.lastIndex=e.index;var t=ee.IDENTIFIER.exec(e.sheetSrc);if(!t)throw this.parseError(e,"Expected an identifier");return e.index+=t[0].length,t[0]},t.parseKeyframesAndSaveNameMapping=function(e,t){var i=this;if(e.selector.startsWith("@keyframes")){var n=this.replaceKeyframesAndGetMapping(e,t);e.selector.split(" ").forEach(function(e,t){t>0&&i.keyframeNamesSelectors.set(e,n)})}},t.replaceKeyframesAndGetMapping=function(e,t){var i=e.block.contents,n=function(e){for(var t=0,i=-1,n=[],r=0;r<e.length;r++)"{"==e[r]?t++:"}"==e[r]&&t--,1==t&&"{"!=e[r]&&"}"!=e[r]&&-1==i&&(i=r),2==t&&"{"==e[r]&&(n.push({start:i,end:r}),i=-1);return n}(i);if(0==n.length)return new Map;var r=new Map,a=!1,l=[];l.push(i.substring(0,n[0].start));for(var s=0;s<n.length;s++)(function(e){var t=i.substring(n[e].start,n[e].end),s=[];t.split(",").forEach(function(e){var t=e.split(" ").map(function(e){return e.trim()}).filter(function(e){return""!=e}).join(" "),i=r.size;r.set(i,t),s.push(i+"%"),M.some(function(e){return t.startsWith(e)})&&(a=!0)}),l.push(s.join(",")),l.push(e==n.length-1?i.substring(n[e].end):i.substring(n[e].end,n[e+1].start))})(s);return a?(e.block.contents=l.join(""),this.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,t),r):new Map},t.parseQualifiedRule=function(e){var t=e.index,i=this.parseSelector(e).trim();if(i)return{selector:i,block:this.eatBlock(e),startIndex:t,endIndex:e.index}},t.removeEnclosingDoubleQuotes=function(e){return e.substring('"'==e[0]?1:0,'"'==e[e.length-1]?e.length-1:e.length)},t.assertString=function(e,t){if(e.sheetSrc.substr(e.index,t.length)!=t)throw this.parseError(e,"Did not find expected sequence "+t);e.index+=t.length},t.replacePart=function(e,t,i,n){n.sheetSrc=n.sheetSrc.slice(0,e)+i+n.sheetSrc.slice(t),n.index>=t&&(n.index=e+i.length+(n.index-t))},t.eatComment=function(e){this.assertString(e,"/*"),this.eatUntil("*/",e,!0),this.assertString(e,"*/")},t.eatBlock=function(e){var t=e.index;this.assertString(e,"{");for(var i=1;0!=i;)this.lookAhead("/*",e)?this.eatComment(e):("{"===e.sheetSrc[e.index]?i++:"}"===e.sheetSrc[e.index]&&i--,this.advance(e));var n=e.index;return{startIndex:t,endIndex:n,contents:e.sheetSrc.slice(t,n)}},t.advance=function(e){if(e.index++,e.index>e.sheetSrc.length)throw this.parseError(e,"Advanced beyond the end")},t.eatUntil=function(e,t,i){void 0===i&&(i=!1);for(var n=t.index;!this.lookAhead(e,t);)this.advance(t);return i&&(t.sheetSrc=t.sheetSrc.slice(0,n)+" ".repeat(t.index-n)+t.sheetSrc.slice(t.index)),t.sheetSrc.slice(n,t.index)},t.parseSelector=function(e){var t=e.index;if(this.eatUntil("{",e),t===e.index)throw Error("Empty selector");return e.sheetSrc.slice(t,e.index)},t.eatWhitespace=function(e){ee.WHITE_SPACE.lastIndex=e.index;var t=ee.WHITE_SPACE.exec(e.sheetSrc);t&&(e.index+=t[0].length)},t.lookAhead=function(e,t){return t.sheetSrc.substr(t.index,e.length)==e},t.peek=function(e){return e.sheetSrc[e.index]},t.extractMatches=function(e,t,i){return void 0===i&&(i=","),t.exec(e)[1].trim().split(i).map(function(e){return e.trim()})},t.split=function(e){return e.split(" ").map(function(e){return e.trim()}).filter(function(e){return""!=e})},e}());if(function(){if(!CSS.supports("animation-timeline: works")){!function(){function e(e){if(0!==e.innerHTML.trim().length){var t=en.transpileStyleSheet(e.innerHTML,!0);t=en.transpileStyleSheet(t,!1),e.innerHTML=t}}new MutationObserver(function(t){for(var i,n=s(t);!(i=n()).done;)for(var r,a=s(i.value.addedNodes);!(r=a()).done;){var l=r.value;l instanceof HTMLStyleElement&&e(l)}}).observe(document.documentElement,{childList:!0,subtree:!0}),document.querySelectorAll("style").forEach(function(t){return e(t)}),document.querySelectorAll("link").forEach(function(e){})}();var e=new WeakMap;window.addEventListener("animationstart",function(t){t.target.getAnimations().filter(function(e){return e.animationName===t.animationName}).forEach(function(i){e.has(t.target)||e.set(t.target,new Map);var n=e.get(t.target);if(!n.has(i.animationName)){var r=function(e,t,i){var n=en.getAnimationTimelineOptions(t,i);if(!n)return null;var r=n["animation-timeline"];if(!r)return null;var a=en.getScrollTimelineOptions(r,i)||en.getViewTimelineOptions(r,i);return a?(a.subject&&function(e,t){var i=T(t.subject),n=t.axis||t.orientation,r=en.keyframeNamesSelectors.get(e.animationName);if(r&&r.size){var a=[];e.effect.getKeyframes().forEach(function(e){var l=function(e,r){for(var a,l=null,o=s(e);!(a=o()).done;){var c=a.value,u=c[1];if(c[0]==100*r.offset){if("from"==u)l=0;else if("to"==u)l=100;else{var h,d,m,p,g=u.split(" ");l=1==g.length?parseFloat(g[0]):100*(h=g[0],d=t.subject,m=t.inset,p=CSS.percent(parseFloat(g[1])),k(x(h,i,d,n,m),p,x("cover",i,d,n,m)))}break}}return l}(r,e);null!==l&&l>=0&&l<=100&&(e.offset=l/100,a.push(e))});var l=a.sort(function(e,t){return e.offset<t.offset?-1:e.affset>t.offset?1:0});e.effect.setKeyframes(l)}}(e,a),{timeline:a.source?new f(a):new _(a),animOptions:n}):null}(i,i.animationName,t.target);n.set(i.animationName,r&&r.timeline&&i.timeline!=r.timeline?new U(i,r.timeline,r.animOptions):null)}var a=n.get(i.animationName);null!==a&&(i.pause(),a.play())})})}}(),[].concat(document.styleSheets).filter(function(e){return null!==e.href}).length&&console.warn("Non-Inline StyleSheets detected: ScrollTimeline polyfill currently only supports inline styles within style tags"),!Reflect.defineProperty(window,"ScrollTimeline",{value:f}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(window,"ViewTimeline",{value:_}))throw Error("Error installing ViewTimeline polyfill: could not attach ViewTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:function(e,t){var i=t.timeline;i instanceof f&&delete t.timeline;var n=function(e,t){if(t in e){var i=e[t];return"number"!=typeof i?(delete e[t],i):null}},r=function(e,t){t&&(t.phase&&(e.name=t.phase),t.percent&&(e.offset=t.percent))},a=n(t,"delay"),l=n(t,"endDelay"),s=C.apply(this,[e,t]),o=new U(s,i);if(i instanceof f){if(s.pause(),i instanceof ViewTimeline){var c=X.get(o);c.timeRange=Z(t.timeRange),r(c.timeRange.start,a),r(c.timeRange.end,l)}o.play()}return o}}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");if(!Reflect.defineProperty(window,"Animation",{value:U}))throw Error("Error installing Animation constructor.")}(),m(".tagline",{visibility:["hidden","visible","visible","visible","hidden"],opacity:[0,1,1,1,0]},{timeRange:"exit 0% 80%",fill:"both",easing:"ease-in"}),m("#logo",{width:["100vmin","100px"]},{timeRange:"exit 40% 80%",fill:"both",easing:"linear"}),m(".logoWrap",{height:["80lvh","100px"]},{timeRange:"exit 60% 100%",fill:"both",easing:"linear"}),m(".upcoming",[{visibility:"hidden",opacity:0,top:"23lvh"},{visibility:"visible",opacity:1,top:"16lvh",offset:.15},{visibility:"visible",opacity:1,top:"16lvh",offset:.8},{visibility:"hidden",opacity:0,top:"10lvh"}],{timeRange:"contain -30% 150%",fill:"both",easing:"linear"}),m(".warped1 .mask1",{"stroke-dashoffset":[0,200]},{timeRange:"contain 10% 30%",fill:"both",easing:"linear"});