webpackJsonp([2],{604:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=(n.n(r),n(105)),o=n(36),i=n(607),u=n(608),l=n.n(u),s=n(32),f=n(193),c=n.n(f),p=n(613),d=n(199),h=n.n(d),m=n(190),g=n.n(m),v=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=this&&this.__assign||function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},b=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function S(e){var t=e.inputRef,n=e.onChange,a=b(e,["inputRef","onChange"]);return r.createElement(l.a,y({},a,{getInputRef:t,onValueChange:function(e){n({target:{value:e.value}})},allowNegative:!1,allowEmptyFormatting:!1}))}var x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChange=function(e){return function(n){var r;n.target.value.length>0&&t.props.actionsC.enemyInput(y({},t.props.enemyInput,((r={})[e]=+n.target.value,r)))}},t.handleSwitch=function(e){return function(n){var r;t.props.actionsC.enemyInput(y({},t.props.enemyInput,((r={})[e]=n.target.checked,r)))}},t.renderMenu=function(){return p.c.reduce(function(e,n,a){return e.push(r.createElement(c.a,{key:n.id+a.toString(),id:n.id,label:n.label,className:t.props.classes.formControl,value:t.props.enemyInput[n.value],onChange:t.handleChange(n.value),margin:"normal",InputProps:{inputComponent:S}})),e},[])},t.renderMenuSwitch=function(){return p.d.reduce(function(e,n,a){return e.push(r.createElement(h.a,{key:n.id+a.toString(),control:r.createElement(g.a,{checked:!!t.props.enemyInput[n.value],onChange:t.handleSwitch(n.value),value:n.value,color:"primary"}),label:n.label})),e},[])},t}return v(t,e),t.prototype.render=function(){return r.createElement("div",{className:this.props.classes.root},r.createElement("div",null,this.renderMenu()),r.createElement("div",null,this.renderMenuSwitch()))},t}(r.Component);t.default=Object(s.c)(function(e){return Object(s.b)({root:{},formControl:{margin:e.spacing.unit,width:160}})})(Object(a.c)(function(e){return{enemyInput:e.reducerCalc.enemyInput}},function(e){return{actionsC:Object(o.bindActionCreators)(i,e)}})(x))},607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"charInput",function(){return a}),n.d(t,"buffInput",function(){return o}),n.d(t,"enemyInput",function(){return i}),n.d(t,"refineChange",function(){return u}),n.d(t,"refineChangeMarco",function(){return l});var r=n(191),a=function(e){return{type:r.a.INPUT_CHAR_CHANGE,payload:e}},o=function(e){return{type:r.a.INPUT_BUFF_CHANGE,payload:e}},i=function(e){return{type:r.a.INPUT_ENEMY_CHANGE,payload:e}},u=function(e){return{type:r.a.REFINE_CHANGE,payload:e}},l=function(e){return{type:r.a.REFINE_CHANGE_MARCO,payload:e}}},608:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(609)),a=i(n(1)),o=n(612);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d={thousandSeparator:r.default.oneOfType([r.default.string,r.default.oneOf([!0])]),decimalSeparator:r.default.string,thousandsGroupStyle:r.default.oneOf(["thousand","lakh","wan"]),decimalScale:r.default.number,fixedDecimalScale:r.default.bool,displayType:r.default.oneOf(["input","text"]),prefix:r.default.string,suffix:r.default.string,format:r.default.oneOfType([r.default.string,r.default.func]),removeFormatting:r.default.func,mask:r.default.oneOfType([r.default.string,r.default.arrayOf(r.default.string)]),value:r.default.oneOfType([r.default.number,r.default.string]),defaultValue:r.default.oneOfType([r.default.number,r.default.string]),isNumericString:r.default.bool,customInput:r.default.func,allowNegative:r.default.bool,allowEmptyFormatting:r.default.bool,onValueChange:r.default.func,onKeyDown:r.default.func,onMouseUp:r.default.func,onChange:r.default.func,onFocus:r.default.func,onBlur:r.default.func,type:r.default.oneOf(["text","tel","password"]),isAllowed:r.default.func,renderText:r.default.func,getInputRef:r.default.func},h={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,isNumericString:!1,type:"text",onValueChange:o.noop,onChange:o.noop,onKeyDown:o.noop,onMouseUp:o.noop,onFocus:o.noop,onBlur:o.noop,isAllowed:o.returnTrue,getInputRef:o.noop},m=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?p(e):t}(this,f(t).call(this,e));var r=e.defaultValue;n.validateProps();var a=n.formatValueProp(r);return n.state={value:a,numAsString:n.removeFormatting(a)},n.selectionBeforeInput={selectionStart:0,selectionEnd:0},n.onChange=n.onChange.bind(p(p(n))),n.onKeyDown=n.onKeyDown.bind(p(p(n))),n.onMouseUp=n.onMouseUp.bind(p(p(n))),n.onFocus=n.onFocus.bind(p(p(n))),n.onBlur=n.onBlur.bind(p(p(n))),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,a.default.Component),function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(t,[{key:"componentDidUpdate",value:function(e){this.updateValueIfRequired(e)}},{key:"updateValueIfRequired",value:function(e){var t=this.props,n=this.state,r=this.focusedElm,a=n.value,o=n.numAsString,i=void 0===o?"":o;if(e!==t){this.validateProps();var u=this.formatNumString(i),l=void 0===t.value?u:this.formatValueProp(),s=this.removeFormatting(l),f=parseFloat(s),c=parseFloat(i);(isNaN(f)&&isNaN(c)||f===c)&&u===a&&(null!==r||l===a)||this.updateValue({formattedValue:l,numAsString:s,input:r})}}},{key:"getFloatString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.decimalScale,n=this.getSeparators().decimalSeparator,r=this.getNumberRegex(!0),a="-"===e[0];a&&(e=e.replace("-","")),n&&0===t&&(e=e.split(n)[0]);var i=(e=(e.match(r)||[]).join("").replace(n,".")).indexOf(".");return-1!==i&&(e="".concat(e.substring(0,i),".").concat(e.substring(i+1,e.length).replace(new RegExp((0,o.escapeRegExp)(n),"g"),""))),a&&(e="-"+e),e}},{key:"getNumberRegex",value:function(e,t){var n=this.props,r=n.format,a=n.decimalScale,i=this.getSeparators().decimalSeparator;return new RegExp("\\d"+(!i||0===a||t||r?"":"|"+(0,o.escapeRegExp)(i)),e?"g":void 0)}},{key:"getSeparators",value:function(){var e=this.props.decimalSeparator,t=this.props.thousandSeparator;return!0===t&&(t=","),{decimalSeparator:e,thousandSeparator:t}}},{key:"getMaskAtIndex",value:function(e){var t=this.props.mask,n=void 0===t?" ":t;return"string"===typeof n?n:n[e]||" "}},{key:"getValueObject",value:function(e,t){var n=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(n)?void 0:n}}},{key:"validateProps",value:function(){var e=this.props.mask,t=this.getSeparators(),n=t.decimalSeparator,r=t.thousandSeparator;if(n===r)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(r,' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ').concat(n," (default value for decimalSeparator is .)\n       "));if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("\n          Mask ".concat(e," should not contain numeric character;\n        "))}},{key:"setPatchedCaretPosition",value:function(e,t,n){(0,o.setCaretPosition)(e,t),setTimeout(function(){e.value===n&&(0,o.setCaretPosition)(e,t)},0)}},{key:"correctCaretPosition",value:function(e,t,n){var r=this.props,a=r.prefix,i=r.suffix,u=r.format;if(""===e)return 0;if(t=(0,o.clamp)(t,0,e.length),!u){var l="-"===e[0];return(0,o.clamp)(t,a.length+(l?1:0),e.length-i.length)}if("function"===typeof u)return t;if("#"===u[t]&&(0,o.charIsNumber)(e[t]))return t;if("#"===u[t-1]&&(0,o.charIsNumber)(e[t-1]))return t;var s=u.indexOf("#"),f=u.lastIndexOf("#");t=(0,o.clamp)(t,s,f+1);for(var c=u.substring(t,u.length).indexOf("#"),p=t,d=t+(-1===c?0:c);p>s&&("#"!==u[p]||!(0,o.charIsNumber)(e[p]));)p-=1;return!(0,o.charIsNumber)(e[d])||"left"===n&&t!==s||t-p<d-t?(0,o.charIsNumber)(e[p])?p+1:p:d}},{key:"getCaretPosition",value:function(e,t,n){var r,a,o=this.props.format,i=this.state.value,u=this.getNumberRegex(!0),l=(e.match(u)||[]).join(""),s=(t.match(u)||[]).join("");for(r=0,a=0;a<n;a++){var f=e[a]||"",c=t[r]||"";if((f.match(u)||f===c)&&("0"!==f||!c.match(u)||"0"===c||l.length===s.length)){for(;f!==t[r]&&r<t.length;)r++;r++}}return"string"!==typeof o||i||(r=t.length),r=this.correctCaretPosition(t,r)}},{key:"removePrefixAndSuffix",value:function(e){var t=this.props,n=t.format,r=t.prefix,a=t.suffix;if(!n&&e){var o="-"===e[0];o&&(e=e.substring(1,e.length));var i=(e=r&&0===e.indexOf(r)?e.substring(r.length,e.length):e).lastIndexOf(a);e=a&&-1!==i&&i===e.length-a.length?e.substring(0,i):e,o&&(e="-"+e)}return e}},{key:"removePatternFormatting",value:function(e){for(var t=this.props.format.split("#").filter(function(e){return""!==e}),n=0,r="",a=0,o=t.length;a<=o;a++){var i=t[a]||"",u=a===o?e.length:e.indexOf(i,n);if(-1===u){r=e;break}r+=e.substring(n,u),n=u+i.length}return(r.match(/\d/g)||[]).join("")}},{key:"removeFormatting",value:function(e){var t=this.props,n=t.format,r=t.removeFormatting;return e?(n?e="string"===typeof n?this.removePatternFormatting(e):"function"===typeof r?r(e):(e.match(/\d/g)||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e):e}},{key:"formatWithPattern",value:function(e){for(var t=this.props.format,n=0,r=t.split(""),a=0,o=t.length;a<o;a++)"#"===t[a]&&(r[a]=e[n]||this.getMaskAtIndex(n),n+=1);return r.join("")}},{key:"formatAsNumber",value:function(e){var t=this.props,n=t.decimalScale,r=t.fixedDecimalScale,a=t.prefix,i=t.suffix,u=t.allowNegative,l=t.thousandsGroupStyle,s=this.getSeparators(),f=s.thousandSeparator,c=s.decimalSeparator,p=-1!==e.indexOf(".")||n&&r,d=(0,o.splitDecimal)(e,u),h=d.beforeDecimal,m=d.afterDecimal,g=d.addNegation;if(void 0!==n&&(m=(0,o.limitToScale)(m,n,r)),f){var v=(0,o.getThousandsGroupRegex)(l);h=h.replace(v,"$1"+f)}return a&&(h=a+h),i&&(m+=i),g&&(h="-"+h),e=h+(p&&c||"")+m}},{key:"formatNumString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props,n=t.format,r=t.allowEmptyFormatting,a=e;return a=""!==e||r?"-"!==e||n?"string"===typeof n?this.formatWithPattern(a):"function"===typeof n?n(a):this.formatAsNumber(a):"-":""}},{key:"formatValueProp",value:function(e){var t=this.props,n=t.format,r=t.decimalScale,a=t.fixedDecimalScale,i=t.allowEmptyFormatting,u=this.props,l=u.value,s=void 0===l?e:l,f=u.isNumericString,c=!s&&0!==s;return c&&i&&(s=""),c&&!i?"":("number"===typeof s&&(s=s.toString(),f=!0),"Infinity"===s&&f&&(s=""),f&&!n&&"number"===typeof r&&(s=(0,o.roundToPrecision)(s,r,a)),f?this.formatNumString(s):this.formatInput(s))}},{key:"formatNegation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.allowNegative,n=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),a=n.test(e),o=r.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}},{key:"formatInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.props.format||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)}},{key:"isCharacterAFormat",value:function(e,t){var n=this.props,r=n.format,a=n.prefix,o=n.suffix,i=n.decimalScale,u=n.fixedDecimalScale,l=this.getSeparators().decimalSeparator;return"string"===typeof r&&"#"!==r[e]||!(r||!(e<a.length||e>=t.length-o.length||i&&u&&t[e]===l))}},{key:"checkIfFormatGotDeleted",value:function(e,t,n){for(var r=e;r<t;r++)if(this.isCharacterAFormat(r,n))return!0;return!1}},{key:"correctInputValue",value:function(e,t,n){var r=this.props,a=r.format,i=r.allowNegative,u=r.prefix,l=r.suffix,s=this.getSeparators().decimalSeparator,f=this.state.numAsString||"",c=this.selectionBeforeInput,p=c.selectionStart,d=c.selectionEnd,h=(0,o.findChangedIndex)(t,n),m=h.start,g=h.end;if(!a&&"."!==s&&m===g&&"."===n[p])return n.substr(0,p)+s+n.substr(p+1,n.length);var v=a?0:u.length,y=t.length-(a?0:l.length);if(n.length>t.length||!n.length||m===g||0===p&&d===t.length||p===v&&d===y)return n;if(this.checkIfFormatGotDeleted(m,g,t)&&(n=t),!a){var b=this.removeFormatting(n),S=(0,o.splitDecimal)(b,i),x=S.beforeDecimal,P=S.afterDecimal,O=S.addNegation,C=e<n.indexOf(s)+1;if(b.length<f.length&&C&&""===x&&!parseFloat(P))return O?"-":""}return n}},{key:"updateValue",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.noop,r=e.formattedValue,a=e.input,i=e.numAsString,u=e.caretPos,l=this.props.onValueChange,s=this.state.value;if(a){if(!u){var f=e.inputValue||a.value,c=(0,o.getCurrentCaretPosition)(a);u=this.getCaretPosition(f,r,c)}a.value=r,this.setPatchedCaretPosition(a,u,r)}void 0===i&&(i=this.removeFormatting(r)),r!==s?this.setState({value:r,numAsString:i},function(){l(t.getValueObject(r,i)),n()}):n()}},{key:"onChange",value:function(e){e.persist();var t=e.target,n=t.value,r=this.state,a=this.props,i=a.isAllowed,u=r.value||"",l=(0,o.getCurrentCaretPosition)(t);n=this.correctInputValue(l,u,n);var s=this.formatInput(n)||"",f=this.removeFormatting(s);i(this.getValueObject(s,f))||(s=u),this.updateValue({formattedValue:s,numAsString:f,inputValue:n,input:t},function(){a.onChange(e)})}},{key:"onBlur",value:function(e){var t=this.props,n=this.state,r=t.format,a=t.onBlur,i=n.numAsString,u=n.value;if(this.focusedElm=null,!r){i=(0,o.fixLeadingZero)(i);var l=this.formatNumString(i);if(l!==u)return e.persist(),void this.updateValue({formattedValue:l,numAsString:i},function(){a(e)})}a(e)}},{key:"onKeyDown",value:function(e){var t,n=e.target,r=e.key,a=n.selectionStart,o=n.selectionEnd,i=n.value,u=void 0===i?"":i,l=this.props,s=l.decimalScale,f=l.fixedDecimalScale,c=l.prefix,p=l.suffix,d=l.format,h=l.onKeyDown,m=(l.onValueChange,void 0!==s&&f),g=this.getNumberRegex(!1,m),v=new RegExp("-"),y="string"===typeof d;if(this.selectionBeforeInput={selectionStart:a,selectionEnd:o},"ArrowLeft"===r||"Backspace"===r?t=a-1:"ArrowRight"===r?t=a+1:"Delete"===r&&(t=a),void 0!==t&&a===o){var b=t,S=y?d.indexOf("#"):c.length,x=y?d.lastIndexOf("#")+1:u.length-p.length;if("ArrowLeft"===r||"ArrowRight"===r){var P="ArrowLeft"===r?"left":"right";b=this.correctCaretPosition(u,t,P)}else if("Delete"!==r||g.test(u[t])||v.test(u[t])){if("Backspace"===r&&!g.test(u[t]))if(a<=S+1&&"-"===u[0]&&"undefined"===typeof d){var O=u.substring(1);e.persist(),this.updateValue({formattedValue:O,caretPos:b,input:n})}else if(!v.test(u[t])){for(;!g.test(u[b-1])&&b>S;)b--;b=this.correctCaretPosition(u,b,"left")}}else for(;!g.test(u[b])&&b<x;)b++;(b!==t||t<S||t>x)&&(e.preventDefault(),this.setPatchedCaretPosition(n,b,u)),e.isUnitTestRun&&this.setPatchedCaretPosition(n,b,u),this.props.onKeyDown(e)}else h(e)}},{key:"onMouseUp",value:function(e){var t=e.target,n=t.selectionStart,r=t.selectionEnd,a=t.value,o=void 0===a?"":a;if(n===r){var i=this.correctCaretPosition(o,n);i!==n&&this.setPatchedCaretPosition(t,i,o)}this.props.onMouseUp(e)}},{key:"onFocus",value:function(e){var t=this;e.persist(),this.focusedElm=e.target,setTimeout(function(){var n=e.target,r=n.selectionStart,a=n.selectionEnd,o=n.value,i=void 0===o?"":o,u=t.correctCaretPosition(i,r);u===r||0===r&&a===i.length||t.setPatchedCaretPosition(n,u,i),t.props.onFocus(e)},0)}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.displayType,r=e.customInput,i=e.renderText,u=e.getInputRef,s=this.state.value,f=(0,o.omit)(this.props,d),c=l({},f,{type:t,value:s,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===n)return i?i(s)||null:a.default.createElement("span",l({},f,{ref:u}),s);if(r){var p=r;return a.default.createElement(p,c)}return a.default.createElement("input",l({},c,{ref:u}))}}]),t}();m.propTypes=d,m.defaultProps=h;var g=m;t.default=g,e.exports=t.default},609:function(e,t,n){e.exports=n(610)()},610:function(e,t,n){"use strict";var r=n(611);function a(){}e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=a,n.PropTypes=n,n}},611:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},612:function(e,t,n){"use strict";function r(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n="-"===e[0],r=n&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNagation:n,addNegation:r}}function a(e,t,n){for(var r="",a=n?"0":"",o=0;o<=t-1;o++)r+=e[o]||a;return r}Object.defineProperty(t,"__esModule",{value:!0}),t.noop=function(){},t.returnTrue=function(){return!0},t.charIsNumber=function(e){return!!(e||"").match(/\d/)},t.escapeRegExp=function(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")},t.getThousandsGroupRegex=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}},t.splitDecimal=r,t.fixLeadingZero=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var n=e.split("."),r=n[0].replace(/^0+/,"")||"0",a=n[1]||"";return"".concat(t?"-":"").concat(r).concat(a?".".concat(a):"")},t.limitToScale=a,t.roundToPrecision=function(e,t,n){if(-1!==["","-"].indexOf(e))return e;var o=-1!==e.indexOf(".")&&t,i=r(e),u=i.beforeDecimal,l=i.afterDecimal,s=i.hasNagation,f=parseFloat("0.".concat(l||"0")).toFixed(t).split("."),c=u.split("").reverse().reduce(function(e,t,n){return e.length>n?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e},f[0]),p=a(f[1]||"",Math.min(t,l.length),n),d=o?".":"";return"".concat(s?"-":"").concat(c).concat(d).concat(p)},t.omit=function(e,t){var n={};return Object.keys(e).forEach(function(r){t[r]||(n[r]=e[r])}),n},t.setCaretPosition=function(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}},t.findChangedIndex=function(e,t){var n=0,r=0,a=e.length,o=t.length;for(;e[n]===t[n]&&n<a;)n++;for(;e[a-1-r]===t[o-1-r]&&o-r>n&&a-r>n;)r++;return{start:n,end:a-r}},t.clamp=function(e,t,n){return Math.min(Math.max(e,t),n)},t.getCurrentCaretPosition=function(e){return Math.max(e.selectionStart,e.selectionEnd)}},613:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return u});var r=[{id:"select-buffAtkPercent",label:"\u653b\u64ca\u529b\u589e\u52a0(%)",value:"buffAtkPercent"},{id:"select-buffAtkNumber",label:"\u653b\u64ca\u529b\u589e\u52a0",value:"buffAtkNumber"},{id:"select-buffSpeedPre",label:"\u653b\u6483\u901f\u5ea6\u4e0a\u6607(%)",value:"buffSpeedPre"},{id:"select-buffSpeedPost",label:"\u653b\u6483\u5f8c\u306e\u9699\u77ed\u7e2e(%)",value:"buffSpeedPost"},{id:"select-buffDamageUp",label:"\u30c0\u30e1\u30fc\u30b8\u304c\u4e0a\u6607(%)",value:"buffDamageUp"},{id:"select-buffDirectUp",label:"\u76f4\u6483\u30dc\u30fc\u30ca\u30b9\u4e0a\u6607(%)",value:"buffDirectUp"},{id:"select-buffHitnumber",label:"\u653b\u6483\u5bfe\u8c61\u6570\u4e0a\u6607",value:"buffHitnumber"},{id:"select-buffIgoreDef",label:"\u9632\u5fa1\u3092\u7121\u8996\u3059\u308b(%)",value:"buffIgoreDef"}],a=[{id:"switch-buffTerrain",label:"\u5730\u5f62\u9069\u6027",value:"buffTerrain"}],o=[{id:"select-enemyNumber",label:"\u6578\u76ee",value:"enemyNumber"},{id:"select-enemyHitpoint",label:"\u8010\u4e45",value:"enemyHitpoint"},{id:"select-enemyDef",label:"\u9632\u79a6\u529b",value:"enemyDef"},{id:"select-enemyDefPercent",label:"\u9632\u79a6\u529b\u6e1b\u5c11%",value:"enemyDefPercent"},{id:"select-enemyDefNumber",label:"\u9632\u79a6\u529b\u6e1b\u5c11",value:"enemyDefNumber"},{id:"select-enemyDamageUp",label:"\u88ab\u30c0\u30e1\u30fc\u30b8\u304c\u4e0a\u6607(%)",value:"enemyDamageUp"}],i=[{id:"switch-enemyFly",label:"\u98db\u884c",value:"enemyFly"},{id:"switch-enemyMonster",label:"\u5996\u602a",value:"enemyMonster"}],u=[{id:"button-all-ref-0",label:"\u7121\u7cbe\u7149",value:"all-ref-0"},{id:"button-all-ref-10",label:"\u5168\u7cbe\u7149+10",value:"all-ref-10"},{id:"button-4-ref-10",label:"\u26054+10",value:"4-ref-10"},{id:"button-3-ref-10",label:"\u26053+10",value:"3-ref-10"},{id:"button-2-ref-10",label:"\u26052+10",value:"2-ref-10"},{id:"button-1-ref-10",label:"\u26051+10",value:"1-ref-10"}]}});
//# sourceMappingURL=2.b2884cef.chunk.js.map