(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const P of w.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&d(P)}).observe(document,{childList:!0,subtree:!0});function c(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function d(m){if(m.ep)return;m.ep=!0;const w=c(m);fetch(m.href,w)}})();function Dp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var vi={exports:{}},Wr={},ji={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function zp(){if(zu)return ne;zu=1;var i=Symbol.for("react.element"),a=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),P=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),Q=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),L=Symbol.iterator;function $(x){return x===null||typeof x!="object"?null:(x=L&&x[L]||x["@@iterator"],typeof x=="function"?x:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},re=Object.assign,W={};function Y(x,k,q){this.props=x,this.context=k,this.refs=W,this.updater=q||G}Y.prototype.isReactComponent={},Y.prototype.setState=function(x,k){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,k,"setState")},Y.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function pe(){}pe.prototype=Y.prototype;function ie(x,k,q){this.props=x,this.context=k,this.refs=W,this.updater=q||G}var le=ie.prototype=new pe;le.constructor=ie,re(le,Y.prototype),le.isPureReactComponent=!0;var Z=Array.isArray,de=Object.prototype.hasOwnProperty,K={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function be(x,k,q){var J,te={},ee=null,fe=null;if(k!=null)for(J in k.ref!==void 0&&(fe=k.ref),k.key!==void 0&&(ee=""+k.key),k)de.call(k,J)&&!B.hasOwnProperty(J)&&(te[J]=k[J]);var oe=arguments.length-2;if(oe===1)te.children=q;else if(1<oe){for(var ce=Array(oe),ze=0;ze<oe;ze++)ce[ze]=arguments[ze+2];te.children=ce}if(x&&x.defaultProps)for(J in oe=x.defaultProps,oe)te[J]===void 0&&(te[J]=oe[J]);return{$$typeof:i,type:x,key:ee,ref:fe,props:te,_owner:K.current}}function en(x,k){return{$$typeof:i,type:x.type,key:k,ref:x.ref,props:x.props,_owner:x._owner}}function xn(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function An(x){var k={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(q){return k[q]})}var an=/\/+/g;function He(x,k){return typeof x=="object"&&x!==null&&x.key!=null?An(""+x.key):k.toString(36)}function nn(x,k,q,J,te){var ee=typeof x;(ee==="undefined"||ee==="boolean")&&(x=null);var fe=!1;if(x===null)fe=!0;else switch(ee){case"string":case"number":fe=!0;break;case"object":switch(x.$$typeof){case i:case a:fe=!0}}if(fe)return fe=x,te=te(fe),x=J===""?"."+He(fe,0):J,Z(te)?(q="",x!=null&&(q=x.replace(an,"$&/")+"/"),nn(te,k,q,"",function(ze){return ze})):te!=null&&(xn(te)&&(te=en(te,q+(!te.key||fe&&fe.key===te.key?"":(""+te.key).replace(an,"$&/")+"/")+x)),k.push(te)),1;if(fe=0,J=J===""?".":J+":",Z(x))for(var oe=0;oe<x.length;oe++){ee=x[oe];var ce=J+He(ee,oe);fe+=nn(ee,k,q,ce,te)}else if(ce=$(x),typeof ce=="function")for(x=ce.call(x),oe=0;!(ee=x.next()).done;)ee=ee.value,ce=J+He(ee,oe++),fe+=nn(ee,k,q,ce,te);else if(ee==="object")throw k=String(x),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return fe}function cn(x,k,q){if(x==null)return x;var J=[],te=0;return nn(x,J,"","",function(ee){return k.call(q,ee,te++)}),J}function $e(x){if(x._status===-1){var k=x._result;k=k(),k.then(function(q){(x._status===0||x._status===-1)&&(x._status=1,x._result=q)},function(q){(x._status===0||x._status===-1)&&(x._status=2,x._result=q)}),x._status===-1&&(x._status=0,x._result=k)}if(x._status===1)return x._result.default;throw x._result}var ge={current:null},b={transition:null},M={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:b,ReactCurrentOwner:K};function R(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:cn,forEach:function(x,k,q){cn(x,function(){k.apply(this,arguments)},q)},count:function(x){var k=0;return cn(x,function(){k++}),k},toArray:function(x){return cn(x,function(k){return k})||[]},only:function(x){if(!xn(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ne.Component=Y,ne.Fragment=c,ne.Profiler=m,ne.PureComponent=ie,ne.StrictMode=d,ne.Suspense=N,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,ne.act=R,ne.cloneElement=function(x,k,q){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var J=re({},x.props),te=x.key,ee=x.ref,fe=x._owner;if(k!=null){if(k.ref!==void 0&&(ee=k.ref,fe=K.current),k.key!==void 0&&(te=""+k.key),x.type&&x.type.defaultProps)var oe=x.type.defaultProps;for(ce in k)de.call(k,ce)&&!B.hasOwnProperty(ce)&&(J[ce]=k[ce]===void 0&&oe!==void 0?oe[ce]:k[ce])}var ce=arguments.length-2;if(ce===1)J.children=q;else if(1<ce){oe=Array(ce);for(var ze=0;ze<ce;ze++)oe[ze]=arguments[ze+2];J.children=oe}return{$$typeof:i,type:x.type,key:te,ref:ee,props:J,_owner:fe}},ne.createContext=function(x){return x={$$typeof:P,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:w,_context:x},x.Consumer=x},ne.createElement=be,ne.createFactory=function(x){var k=be.bind(null,x);return k.type=x,k},ne.createRef=function(){return{current:null}},ne.forwardRef=function(x){return{$$typeof:A,render:x}},ne.isValidElement=xn,ne.lazy=function(x){return{$$typeof:H,_payload:{_status:-1,_result:x},_init:$e}},ne.memo=function(x,k){return{$$typeof:Q,type:x,compare:k===void 0?null:k}},ne.startTransition=function(x){var k=b.transition;b.transition={};try{x()}finally{b.transition=k}},ne.unstable_act=R,ne.useCallback=function(x,k){return ge.current.useCallback(x,k)},ne.useContext=function(x){return ge.current.useContext(x)},ne.useDebugValue=function(){},ne.useDeferredValue=function(x){return ge.current.useDeferredValue(x)},ne.useEffect=function(x,k){return ge.current.useEffect(x,k)},ne.useId=function(){return ge.current.useId()},ne.useImperativeHandle=function(x,k,q){return ge.current.useImperativeHandle(x,k,q)},ne.useInsertionEffect=function(x,k){return ge.current.useInsertionEffect(x,k)},ne.useLayoutEffect=function(x,k){return ge.current.useLayoutEffect(x,k)},ne.useMemo=function(x,k){return ge.current.useMemo(x,k)},ne.useReducer=function(x,k,q){return ge.current.useReducer(x,k,q)},ne.useRef=function(x){return ge.current.useRef(x)},ne.useState=function(x){return ge.current.useState(x)},ne.useSyncExternalStore=function(x,k,q){return ge.current.useSyncExternalStore(x,k,q)},ne.useTransition=function(){return ge.current.useTransition()},ne.version="18.3.1",ne}var Mu;function zi(){return Mu||(Mu=1,ji.exports=zp()),ji.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Mp(){if(Lu)return Wr;Lu=1;var i=zi(),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function P(A,N,Q){var H,L={},$=null,G=null;Q!==void 0&&($=""+Q),N.key!==void 0&&($=""+N.key),N.ref!==void 0&&(G=N.ref);for(H in N)d.call(N,H)&&!w.hasOwnProperty(H)&&(L[H]=N[H]);if(A&&A.defaultProps)for(H in N=A.defaultProps,N)L[H]===void 0&&(L[H]=N[H]);return{$$typeof:a,type:A,key:$,ref:G,props:L,_owner:m.current}}return Wr.Fragment=c,Wr.jsx=P,Wr.jsxs=P,Wr}var $u;function Lp(){return $u||($u=1,vi.exports=Mp()),vi.exports}var r=Lp(),Mi=zi();const se=Dp(Mi);var os={},wi={exports:{}},Xe={},ki={exports:{}},Si={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function $p(){return Fu||(Fu=1,function(i){function a(b,M){var R=b.length;b.push(M);e:for(;0<R;){var x=R-1>>>1,k=b[x];if(0<m(k,M))b[x]=M,b[R]=k,R=x;else break e}}function c(b){return b.length===0?null:b[0]}function d(b){if(b.length===0)return null;var M=b[0],R=b.pop();if(R!==M){b[0]=R;e:for(var x=0,k=b.length,q=k>>>1;x<q;){var J=2*(x+1)-1,te=b[J],ee=J+1,fe=b[ee];if(0>m(te,R))ee<k&&0>m(fe,te)?(b[x]=fe,b[ee]=R,x=ee):(b[x]=te,b[J]=R,x=J);else if(ee<k&&0>m(fe,R))b[x]=fe,b[ee]=R,x=ee;else break e}}return M}function m(b,M){var R=b.sortIndex-M.sortIndex;return R!==0?R:b.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;i.unstable_now=function(){return w.now()}}else{var P=Date,A=P.now();i.unstable_now=function(){return P.now()-A}}var N=[],Q=[],H=1,L=null,$=3,G=!1,re=!1,W=!1,Y=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function le(b){for(var M=c(Q);M!==null;){if(M.callback===null)d(Q);else if(M.startTime<=b)d(Q),M.sortIndex=M.expirationTime,a(N,M);else break;M=c(Q)}}function Z(b){if(W=!1,le(b),!re)if(c(N)!==null)re=!0,$e(de);else{var M=c(Q);M!==null&&ge(Z,M.startTime-b)}}function de(b,M){re=!1,W&&(W=!1,pe(be),be=-1),G=!0;var R=$;try{for(le(M),L=c(N);L!==null&&(!(L.expirationTime>M)||b&&!An());){var x=L.callback;if(typeof x=="function"){L.callback=null,$=L.priorityLevel;var k=x(L.expirationTime<=M);M=i.unstable_now(),typeof k=="function"?L.callback=k:L===c(N)&&d(N),le(M)}else d(N);L=c(N)}if(L!==null)var q=!0;else{var J=c(Q);J!==null&&ge(Z,J.startTime-M),q=!1}return q}finally{L=null,$=R,G=!1}}var K=!1,B=null,be=-1,en=5,xn=-1;function An(){return!(i.unstable_now()-xn<en)}function an(){if(B!==null){var b=i.unstable_now();xn=b;var M=!0;try{M=B(!0,b)}finally{M?He():(K=!1,B=null)}}else K=!1}var He;if(typeof ie=="function")He=function(){ie(an)};else if(typeof MessageChannel<"u"){var nn=new MessageChannel,cn=nn.port2;nn.port1.onmessage=an,He=function(){cn.postMessage(null)}}else He=function(){Y(an,0)};function $e(b){B=b,K||(K=!0,He())}function ge(b,M){be=Y(function(){b(i.unstable_now())},M)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(b){b.callback=null},i.unstable_continueExecution=function(){re||G||(re=!0,$e(de))},i.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):en=0<b?Math.floor(1e3/b):5},i.unstable_getCurrentPriorityLevel=function(){return $},i.unstable_getFirstCallbackNode=function(){return c(N)},i.unstable_next=function(b){switch($){case 1:case 2:case 3:var M=3;break;default:M=$}var R=$;$=M;try{return b()}finally{$=R}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(b,M){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var R=$;$=b;try{return M()}finally{$=R}},i.unstable_scheduleCallback=function(b,M,R){var x=i.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?x+R:x):R=x,b){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=R+k,b={id:H++,callback:M,priorityLevel:b,startTime:R,expirationTime:k,sortIndex:-1},R>x?(b.sortIndex=R,a(Q,b),c(N)===null&&b===c(Q)&&(W?(pe(be),be=-1):W=!0,ge(Z,R-x))):(b.sortIndex=k,a(N,b),re||G||(re=!0,$e(de))),b},i.unstable_shouldYield=An,i.unstable_wrapCallback=function(b){var M=$;return function(){var R=$;$=M;try{return b.apply(this,arguments)}finally{$=R}}}}(Si)),Si}var Uu;function Fp(){return Uu||(Uu=1,ki.exports=$p()),ki.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function Up(){if(Bu)return Xe;Bu=1;var i=zi(),a=Fp();function c(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,m={};function w(e,n){P(e,n),P(e+"Capture",n)}function P(e,n){for(m[e]=n,e=0;e<n.length;e++)d.add(n[e])}var A=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,Q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H={},L={};function $(e){return N.call(L,e)?!0:N.call(H,e)?!1:Q.test(e)?L[e]=!0:(H[e]=!0,!1)}function G(e,n,t,l){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function re(e,n,t,l){if(n===null||typeof n>"u"||G(e,n,t,l))return!0;if(l)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function W(e,n,t,l,s,o,u){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=u}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Y[n]=new W(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function ie(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(pe,ie);Y[n]=new W(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(pe,ie);Y[n]=new W(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(pe,ie);Y[n]=new W(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function le(e,n,t,l){var s=Y.hasOwnProperty(n)?Y[n]:null;(s!==null?s.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(re(n,t,s,l)&&(t=null),l||s===null?$(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,l=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,l?e.setAttributeNS(l,n,t):e.setAttribute(n,t))))}var Z=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),K=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),en=Symbol.for("react.profiler"),xn=Symbol.for("react.provider"),An=Symbol.for("react.context"),an=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),nn=Symbol.for("react.suspense_list"),cn=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),b=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=b&&e[b]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,x;function k(e){if(x===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);x=n&&n[1]||""}return`
`+x+e}var q=!1;function J(e,n){if(!e||q)return"";q=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(j){var l=j}Reflect.construct(e,[],n)}else{try{n.call()}catch(j){l=j}e.call(n.prototype)}else{try{throw Error()}catch(j){l=j}e()}}catch(j){if(j&&l&&typeof j.stack=="string"){for(var s=j.stack.split(`
`),o=l.stack.split(`
`),u=s.length-1,f=o.length-1;1<=u&&0<=f&&s[u]!==o[f];)f--;for(;1<=u&&0<=f;u--,f--)if(s[u]!==o[f]){if(u!==1||f!==1)do if(u--,f--,0>f||s[u]!==o[f]){var h=`
`+s[u].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=u&&0<=f);break}}}finally{q=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function te(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case K:return"Portal";case en:return"Profiler";case be:return"StrictMode";case He:return"Suspense";case nn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case An:return(e.displayName||"Context")+".Consumer";case xn:return(e._context.displayName||"Context")+".Provider";case an:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cn:return n=e.displayName||null,n!==null?n:ee(e.type)||"Memo";case $e:n=e._payload,e=e._init;try{return ee(e(n))}catch{}}return null}function fe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(n);case 8:return n===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ze(e){var n=ce(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(u){l=""+u,o.call(this,u)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Dn(e){e._valueTracker||(e._valueTracker=ze(e))}function yn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=ce(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Es(e,n){var t=n.checked;return R({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Vi(e,n){var t=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;t=oe(n.value!=null?n.value:t),e._wrapperState={initialChecked:l,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Hi(e,n){n=n.checked,n!=null&&le(e,"checked",n,!1)}function Ps(e,n){Hi(e,n);var t=oe(n.value),l=n.type;if(t!=null)l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?_s(e,n.type,t):n.hasOwnProperty("defaultValue")&&_s(e,n.type,oe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function _s(e,n,t){(n!=="number"||Jr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var or=Array.isArray;function _t(e,n,t,l){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&l&&(e[t].defaultSelected=!0)}else{for(t=""+oe(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Ns(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(c(91));return R({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qi(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(c(92));if(or(t)){if(1<t.length)throw Error(c(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:oe(t)}}function Gi(e,n){var t=oe(n.value),l=oe(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),l!=null&&(e.defaultValue=""+l)}function Ki(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function qi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?qi(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,Yi=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,l,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,l,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ir(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ld=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){Ld.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ar[n]=ar[e]})});function Ji(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ar.hasOwnProperty(e)&&ar[e]?(""+n).trim():n+"px"}function Xi(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var l=t.indexOf("--")===0,s=Ji(t,n[t],l);t==="float"&&(t="cssFloat"),l?e.setProperty(t,s):e[t]=s}}var $d=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rs(e,n){if(n){if($d[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(c(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(c(61))}if(n.style!=null&&typeof n.style!="object")throw Error(c(62))}}function Os(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ts=null;function Is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Nt=null,bt=null;function Zi(e){if(e=Rr(e)){if(typeof As!="function")throw Error(c(280));var n=e.stateNode;n&&(n=wl(n),As(e.stateNode,e.type,n))}}function ea(e){Nt?bt?bt.push(e):bt=[e]:Nt=e}function na(){if(Nt){var e=Nt,n=bt;if(bt=Nt=null,Zi(e),n)for(e=0;e<n.length;e++)Zi(n[e])}}function ta(e,n){return e(n)}function ra(){}var Ds=!1;function la(e,n,t){if(Ds)return e(n,t);Ds=!0;try{return ta(e,n,t)}finally{Ds=!1,(Nt!==null||bt!==null)&&(ra(),na())}}function cr(e,n){var t=e.stateNode;if(t===null)return null;var l=wl(t);if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var zs=!1;if(A)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){zs=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{zs=!1}function Fd(e,n,t,l,s,o,u,f,h){var j=Array.prototype.slice.call(arguments,3);try{n.apply(t,j)}catch(C){this.onError(C)}}var dr=!1,Zr=null,el=!1,Ms=null,Ud={onError:function(e){dr=!0,Zr=e}};function Bd(e,n,t,l,s,o,u,f,h){dr=!1,Zr=null,Fd.apply(Ud,arguments)}function Vd(e,n,t,l,s,o,u,f,h){if(Bd.apply(this,arguments),dr){if(dr){var j=Zr;dr=!1,Zr=null}else throw Error(c(198));el||(el=!0,Ms=j)}}function dt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function sa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function oa(e){if(dt(e)!==e)throw Error(c(188))}function Hd(e){var n=e.alternate;if(!n){if(n=dt(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,l=n;;){var s=t.return;if(s===null)break;var o=s.alternate;if(o===null){if(l=s.return,l!==null){t=l;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===t)return oa(s),e;if(o===l)return oa(s),n;o=o.sibling}throw Error(c(188))}if(t.return!==l.return)t=s,l=o;else{for(var u=!1,f=s.child;f;){if(f===t){u=!0,t=s,l=o;break}if(f===l){u=!0,l=s,t=o;break}f=f.sibling}if(!u){for(f=o.child;f;){if(f===t){u=!0,t=o,l=s;break}if(f===l){u=!0,l=o,t=s;break}f=f.sibling}if(!u)throw Error(c(189))}}if(t.alternate!==l)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function ia(e){return e=Hd(e),e!==null?aa(e):null}function aa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=aa(e);if(n!==null)return n;e=e.sibling}return null}var ca=a.unstable_scheduleCallback,ua=a.unstable_cancelCallback,Wd=a.unstable_shouldYield,Qd=a.unstable_requestPaint,Ee=a.unstable_now,Gd=a.unstable_getCurrentPriorityLevel,Ls=a.unstable_ImmediatePriority,da=a.unstable_UserBlockingPriority,nl=a.unstable_NormalPriority,Kd=a.unstable_LowPriority,fa=a.unstable_IdlePriority,tl=null,Nn=null;function qd(e){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:Xd,Yd=Math.log,Jd=Math.LN2;function Xd(e){return e>>>=0,e===0?32:31-(Yd(e)/Jd|0)|0}var rl=64,ll=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sl(e,n){var t=e.pendingLanes;if(t===0)return 0;var l=0,s=e.suspendedLanes,o=e.pingedLanes,u=t&268435455;if(u!==0){var f=u&~s;f!==0?l=fr(f):(o&=u,o!==0&&(l=fr(o)))}else u=t&~s,u!==0?l=fr(u):o!==0&&(l=fr(o));if(l===0)return 0;if(n!==0&&n!==l&&(n&s)===0&&(s=l&-l,o=n&-n,s>=o||s===16&&(o&4194240)!==0))return n;if((l&4)!==0&&(l|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)t=31-vn(n),s=1<<t,l|=e[t],n&=~s;return l}function Zd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var u=31-vn(o),f=1<<u,h=s[u];h===-1?((f&t)===0||(f&l)!==0)&&(s[u]=Zd(f,n)):h<=n&&(e.expiredLanes|=f),o&=~f}}function $s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pa(){var e=rl;return rl<<=1,(rl&4194240)===0&&(rl=64),e}function Fs(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function pr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-vn(n),e[n]=t}function nf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-vn(t),o=1<<s;n[s]=0,l[s]=-1,e[s]=-1,t&=~o}}function Us(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-vn(t),s=1<<l;s&n|e[l]&n&&(e[l]|=n),t&=~s}}var me=0;function ha(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ma,Bs,ga,xa,ya,Vs=!1,ol=[],Wn=null,Qn=null,Gn=null,hr=new Map,mr=new Map,Kn=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(e,n){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(n.pointerId)}}function gr(e,n,t,l,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:o,targetContainers:[s]},n!==null&&(n=Rr(n),n!==null&&Bs(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function rf(e,n,t,l,s){switch(n){case"focusin":return Wn=gr(Wn,e,n,t,l,s),!0;case"dragenter":return Qn=gr(Qn,e,n,t,l,s),!0;case"mouseover":return Gn=gr(Gn,e,n,t,l,s),!0;case"pointerover":var o=s.pointerId;return hr.set(o,gr(hr.get(o)||null,e,n,t,l,s)),!0;case"gotpointercapture":return o=s.pointerId,mr.set(o,gr(mr.get(o)||null,e,n,t,l,s)),!0}return!1}function ja(e){var n=ft(e.target);if(n!==null){var t=dt(n);if(t!==null){if(n=t.tag,n===13){if(n=sa(t),n!==null){e.blockedOn=n,ya(e.priority,function(){ga(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function il(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ws(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Ts=l,t.target.dispatchEvent(l),Ts=null}else return n=Rr(t),n!==null&&Bs(n),e.blockedOn=t,!1;n.shift()}return!0}function wa(e,n,t){il(e)&&t.delete(n)}function lf(){Vs=!1,Wn!==null&&il(Wn)&&(Wn=null),Qn!==null&&il(Qn)&&(Qn=null),Gn!==null&&il(Gn)&&(Gn=null),hr.forEach(wa),mr.forEach(wa)}function xr(e,n){e.blockedOn===n&&(e.blockedOn=null,Vs||(Vs=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,lf)))}function yr(e){function n(s){return xr(s,e)}if(0<ol.length){xr(ol[0],e);for(var t=1;t<ol.length;t++){var l=ol[t];l.blockedOn===e&&(l.blockedOn=null)}}for(Wn!==null&&xr(Wn,e),Qn!==null&&xr(Qn,e),Gn!==null&&xr(Gn,e),hr.forEach(n),mr.forEach(n),t=0;t<Kn.length;t++)l=Kn[t],l.blockedOn===e&&(l.blockedOn=null);for(;0<Kn.length&&(t=Kn[0],t.blockedOn===null);)ja(t),t.blockedOn===null&&Kn.shift()}var Rt=Z.ReactCurrentBatchConfig,al=!0;function sf(e,n,t,l){var s=me,o=Rt.transition;Rt.transition=null;try{me=1,Hs(e,n,t,l)}finally{me=s,Rt.transition=o}}function of(e,n,t,l){var s=me,o=Rt.transition;Rt.transition=null;try{me=4,Hs(e,n,t,l)}finally{me=s,Rt.transition=o}}function Hs(e,n,t,l){if(al){var s=Ws(e,n,t,l);if(s===null)ao(e,n,l,cl,t),va(e,l);else if(rf(s,e,n,t,l))l.stopPropagation();else if(va(e,l),n&4&&-1<tf.indexOf(e)){for(;s!==null;){var o=Rr(s);if(o!==null&&ma(o),o=Ws(e,n,t,l),o===null&&ao(e,n,l,cl,t),o===s)break;s=o}s!==null&&l.stopPropagation()}else ao(e,n,l,null,t)}}var cl=null;function Ws(e,n,t,l){if(cl=null,e=Is(l),e=ft(e),e!==null)if(n=dt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=sa(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return cl=e,null}function ka(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gd()){case Ls:return 1;case da:return 4;case nl:case Kd:return 16;case fa:return 536870912;default:return 16}default:return 16}}var qn=null,Qs=null,ul=null;function Sa(){if(ul)return ul;var e,n=Qs,t=n.length,l,s="value"in qn?qn.value:qn.textContent,o=s.length;for(e=0;e<t&&n[e]===s[e];e++);var u=t-e;for(l=1;l<=u&&n[t-l]===s[o-l];l++);return ul=s.slice(e,1<l?1-l:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function Ca(){return!1}function tn(e){function n(t,l,s,o,u){this._reactName=t,this._targetInst=s,this.type=l,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fl:Ca,this.isPropagationStopped=Ca,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var Ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=tn(Ot),vr=R({},Ot,{view:0,detail:0}),af=tn(vr),Ks,qs,jr,pl=R({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Ks=e.screenX-jr.screenX,qs=e.screenY-jr.screenY):qs=Ks=0,jr=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:qs}}),Ea=tn(pl),cf=R({},pl,{dataTransfer:0}),uf=tn(cf),df=R({},vr,{relatedTarget:0}),Ys=tn(df),ff=R({},Ot,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=tn(ff),hf=R({},Ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mf=tn(hf),gf=R({},Ot,{data:0}),Pa=tn(gf),xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vf[e])?!!n[e]:!1}function Js(){return jf}var wf=R({},vr,{key:function(e){if(e.key){var n=xf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kf=tn(wf),Sf=R({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_a=tn(Sf),Cf=R({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js}),Ef=tn(Cf),Pf=R({},Ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=tn(Pf),Nf=R({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bf=tn(Nf),Rf=[9,13,27,32],Xs=A&&"CompositionEvent"in window,wr=null;A&&"documentMode"in document&&(wr=document.documentMode);var Of=A&&"TextEvent"in window&&!wr,Na=A&&(!Xs||wr&&8<wr&&11>=wr),ba=" ",Ra=!1;function Oa(e,n){switch(e){case"keyup":return Rf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ta(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function Tf(e,n){switch(e){case"compositionend":return Ta(n);case"keypress":return n.which!==32?null:(Ra=!0,ba);case"textInput":return e=n.data,e===ba&&Ra?null:e;default:return null}}function If(e,n){if(Tt)return e==="compositionend"||!Xs&&Oa(e,n)?(e=Sa(),ul=Qs=qn=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Na&&n.locale!=="ko"?null:n.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Af[e.type]:n==="textarea"}function Aa(e,n,t,l){ea(l),n=yl(n,"onChange"),0<n.length&&(t=new Gs("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var kr=null,Sr=null;function Df(e){Xa(e,0)}function hl(e){var n=Mt(e);if(yn(n))return e}function zf(e,n){if(e==="change")return n}var Da=!1;if(A){var Zs;if(A){var eo="oninput"in document;if(!eo){var za=document.createElement("div");za.setAttribute("oninput","return;"),eo=typeof za.oninput=="function"}Zs=eo}else Zs=!1;Da=Zs&&(!document.documentMode||9<document.documentMode)}function Ma(){kr&&(kr.detachEvent("onpropertychange",La),Sr=kr=null)}function La(e){if(e.propertyName==="value"&&hl(Sr)){var n=[];Aa(n,Sr,e,Is(e)),la(Df,n)}}function Mf(e,n,t){e==="focusin"?(Ma(),kr=n,Sr=t,kr.attachEvent("onpropertychange",La)):e==="focusout"&&Ma()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Sr)}function $f(e,n){if(e==="click")return hl(n)}function Ff(e,n){if(e==="input"||e==="change")return hl(n)}function Uf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:Uf;function Cr(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var s=t[l];if(!N.call(n,s)||!jn(e[s],n[s]))return!1}return!0}function $a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fa(e,n){var t=$a(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$a(t)}}function Ua(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ua(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ba(){for(var e=window,n=Jr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Jr(e.document)}return n}function no(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bf(e){var n=Ba(),t=e.focusedElem,l=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ua(t.ownerDocument.documentElement,t)){if(l!==null&&no(t)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,o=Math.min(l.start,s);l=l.end===void 0?o:Math.min(l.end,s),!e.extend&&o>l&&(s=l,l=o,o=s),s=Fa(t,o);var u=Fa(t,l);s&&u&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),o>l?(e.addRange(n),e.extend(u.node,u.offset)):(n.setEnd(u.node,u.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vf=A&&"documentMode"in document&&11>=document.documentMode,It=null,to=null,Er=null,ro=!1;function Va(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ro||It==null||It!==Jr(l)||(l=It,"selectionStart"in l&&no(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Er&&Cr(Er,l)||(Er=l,l=yl(to,"onSelect"),0<l.length&&(n=new Gs("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=It)))}function ml(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var At={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},lo={},Ha={};A&&(Ha=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function gl(e){if(lo[e])return lo[e];if(!At[e])return e;var n=At[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ha)return lo[e]=n[t];return e}var Wa=gl("animationend"),Qa=gl("animationiteration"),Ga=gl("animationstart"),Ka=gl("transitionend"),qa=new Map,Ya="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,n){qa.set(e,n),w(n,[e])}for(var so=0;so<Ya.length;so++){var oo=Ya[so],Hf=oo.toLowerCase(),Wf=oo[0].toUpperCase()+oo.slice(1);Yn(Hf,"on"+Wf)}Yn(Wa,"onAnimationEnd"),Yn(Qa,"onAnimationIteration"),Yn(Ga,"onAnimationStart"),Yn("dblclick","onDoubleClick"),Yn("focusin","onFocus"),Yn("focusout","onBlur"),Yn(Ka,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Ja(e,n,t){var l=e.type||"unknown-event";e.currentTarget=t,Vd(l,n,void 0,e),e.currentTarget=null}function Xa(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],s=l.event;l=l.listeners;e:{var o=void 0;if(n)for(var u=l.length-1;0<=u;u--){var f=l[u],h=f.instance,j=f.currentTarget;if(f=f.listener,h!==o&&s.isPropagationStopped())break e;Ja(s,f,j),o=h}else for(u=0;u<l.length;u++){if(f=l[u],h=f.instance,j=f.currentTarget,f=f.listener,h!==o&&s.isPropagationStopped())break e;Ja(s,f,j),o=h}}}if(el)throw e=Ms,el=!1,Ms=null,e}function ye(e,n){var t=n[mo];t===void 0&&(t=n[mo]=new Set);var l=e+"__bubble";t.has(l)||(Za(n,e,2,!1),t.add(l))}function io(e,n,t){var l=0;n&&(l|=4),Za(t,e,l,n)}var xl="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[xl]){e[xl]=!0,d.forEach(function(t){t!=="selectionchange"&&(Qf.has(t)||io(t,!1,e),io(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xl]||(n[xl]=!0,io("selectionchange",!1,n))}}function Za(e,n,t,l){switch(ka(n)){case 1:var s=sf;break;case 4:s=of;break;default:s=Hs}t=s.bind(null,n,t,e),s=void 0,!zs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function ao(e,n,t,l,s){var o=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var f=l.stateNode.containerInfo;if(f===s||f.nodeType===8&&f.parentNode===s)break;if(u===4)for(u=l.return;u!==null;){var h=u.tag;if((h===3||h===4)&&(h=u.stateNode.containerInfo,h===s||h.nodeType===8&&h.parentNode===s))return;u=u.return}for(;f!==null;){if(u=ft(f),u===null)return;if(h=u.tag,h===5||h===6){l=o=u;continue e}f=f.parentNode}}l=l.return}la(function(){var j=o,C=Is(t),E=[];e:{var S=qa.get(e);if(S!==void 0){var O=Gs,I=e;switch(e){case"keypress":if(dl(t)===0)break e;case"keydown":case"keyup":O=kf;break;case"focusin":I="focus",O=Ys;break;case"focusout":I="blur",O=Ys;break;case"beforeblur":case"afterblur":O=Ys;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Ef;break;case Wa:case Qa:case Ga:O=pf;break;case Ka:O=_f;break;case"scroll":O=af;break;case"wheel":O=bf;break;case"copy":case"cut":case"paste":O=mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=_a}var D=(n&4)!==0,Pe=!D&&e==="scroll",y=D?S!==null?S+"Capture":null:S;D=[];for(var g=j,v;g!==null;){v=g;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,y!==null&&(_=cr(g,y),_!=null&&D.push(Nr(g,_,v)))),Pe)break;g=g.return}0<D.length&&(S=new O(S,I,null,t,C),E.push({event:S,listeners:D}))}}if((n&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",S&&t!==Ts&&(I=t.relatedTarget||t.fromElement)&&(ft(I)||I[zn]))break e;if((O||S)&&(S=C.window===C?C:(S=C.ownerDocument)?S.defaultView||S.parentWindow:window,O?(I=t.relatedTarget||t.toElement,O=j,I=I?ft(I):null,I!==null&&(Pe=dt(I),I!==Pe||I.tag!==5&&I.tag!==6)&&(I=null)):(O=null,I=j),O!==I)){if(D=Ea,_="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(D=_a,_="onPointerLeave",y="onPointerEnter",g="pointer"),Pe=O==null?S:Mt(O),v=I==null?S:Mt(I),S=new D(_,g+"leave",O,t,C),S.target=Pe,S.relatedTarget=v,_=null,ft(C)===j&&(D=new D(y,g+"enter",I,t,C),D.target=v,D.relatedTarget=Pe,_=D),Pe=_,O&&I)n:{for(D=O,y=I,g=0,v=D;v;v=Dt(v))g++;for(v=0,_=y;_;_=Dt(_))v++;for(;0<g-v;)D=Dt(D),g--;for(;0<v-g;)y=Dt(y),v--;for(;g--;){if(D===y||y!==null&&D===y.alternate)break n;D=Dt(D),y=Dt(y)}D=null}else D=null;O!==null&&ec(E,S,O,D,!1),I!==null&&Pe!==null&&ec(E,Pe,I,D,!0)}}e:{if(S=j?Mt(j):window,O=S.nodeName&&S.nodeName.toLowerCase(),O==="select"||O==="input"&&S.type==="file")var z=zf;else if(Ia(S))if(Da)z=Ff;else{z=Lf;var F=Mf}else(O=S.nodeName)&&O.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(z=$f);if(z&&(z=z(e,j))){Aa(E,z,t,C);break e}F&&F(e,S,j),e==="focusout"&&(F=S._wrapperState)&&F.controlled&&S.type==="number"&&_s(S,"number",S.value)}switch(F=j?Mt(j):window,e){case"focusin":(Ia(F)||F.contentEditable==="true")&&(It=F,to=j,Er=null);break;case"focusout":Er=to=It=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,Va(E,t,C);break;case"selectionchange":if(Vf)break;case"keydown":case"keyup":Va(E,t,C)}var U;if(Xs)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Tt?Oa(e,t)&&(V="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(Na&&t.locale!=="ko"&&(Tt||V!=="onCompositionStart"?V==="onCompositionEnd"&&Tt&&(U=Sa()):(qn=C,Qs="value"in qn?qn.value:qn.textContent,Tt=!0)),F=yl(j,V),0<F.length&&(V=new Pa(V,e,null,t,C),E.push({event:V,listeners:F}),U?V.data=U:(U=Ta(t),U!==null&&(V.data=U)))),(U=Of?Tf(e,t):If(e,t))&&(j=yl(j,"onBeforeInput"),0<j.length&&(C=new Pa("onBeforeInput","beforeinput",null,t,C),E.push({event:C,listeners:j}),C.data=U))}Xa(E,n)})}function Nr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function yl(e,n){for(var t=n+"Capture",l=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=cr(e,t),o!=null&&l.unshift(Nr(e,o,s)),o=cr(e,n),o!=null&&l.push(Nr(e,o,s))),e=e.return}return l}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ec(e,n,t,l,s){for(var o=n._reactName,u=[];t!==null&&t!==l;){var f=t,h=f.alternate,j=f.stateNode;if(h!==null&&h===l)break;f.tag===5&&j!==null&&(f=j,s?(h=cr(t,o),h!=null&&u.unshift(Nr(t,h,f))):s||(h=cr(t,o),h!=null&&u.push(Nr(t,h,f)))),t=t.return}u.length!==0&&e.push({event:n,listeners:u})}var Gf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(Gf,`
`).replace(Kf,"")}function vl(e,n,t){if(n=nc(n),nc(e)!==n&&t)throw Error(c(425))}function jl(){}var co=null,uo=null;function fo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var po=typeof setTimeout=="function"?setTimeout:void 0,qf=typeof clearTimeout=="function"?clearTimeout:void 0,tc=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof tc<"u"?function(e){return tc.resolve(null).then(e).catch(Jf)}:po;function Jf(e){setTimeout(function(){throw e})}function ho(e,n){var t=n,l=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(l===0){e.removeChild(s),yr(n);return}l--}else t!=="$"&&t!=="$?"&&t!=="$!"||l++;t=s}while(t);yr(n)}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function rc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var zt=Math.random().toString(36).slice(2),bn="__reactFiber$"+zt,br="__reactProps$"+zt,zn="__reactContainer$"+zt,mo="__reactEvents$"+zt,Xf="__reactListeners$"+zt,Zf="__reactHandles$"+zt;function ft(e){var n=e[bn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[zn]||t[bn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=rc(e);e!==null;){if(t=e[bn])return t;e=rc(e)}return n}e=t,t=e.parentNode}return null}function Rr(e){return e=e[bn]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function wl(e){return e[br]||null}var go=[],Lt=-1;function Xn(e){return{current:e}}function ve(e){0>Lt||(e.current=go[Lt],go[Lt]=null,Lt--)}function xe(e,n){Lt++,go[Lt]=e.current,e.current=n}var Zn={},Fe=Xn(Zn),Ge=Xn(!1),pt=Zn;function $t(e,n){var t=e.type.contextTypes;if(!t)return Zn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in t)s[o]=n[o];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ke(e){return e=e.childContextTypes,e!=null}function kl(){ve(Ge),ve(Fe)}function lc(e,n,t){if(Fe.current!==Zn)throw Error(c(168));xe(Fe,n),xe(Ge,t)}function sc(e,n,t){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return t;l=l.getChildContext();for(var s in l)if(!(s in n))throw Error(c(108,fe(e)||"Unknown",s));return R({},t,l)}function Sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,pt=Fe.current,xe(Fe,e),xe(Ge,Ge.current),!0}function oc(e,n,t){var l=e.stateNode;if(!l)throw Error(c(169));t?(e=sc(e,n,pt),l.__reactInternalMemoizedMergedChildContext=e,ve(Ge),ve(Fe),xe(Fe,e)):ve(Ge),xe(Ge,t)}var Mn=null,Cl=!1,xo=!1;function ic(e){Mn===null?Mn=[e]:Mn.push(e)}function ep(e){Cl=!0,ic(e)}function et(){if(!xo&&Mn!==null){xo=!0;var e=0,n=me;try{var t=Mn;for(me=1;e<t.length;e++){var l=t[e];do l=l(!0);while(l!==null)}Mn=null,Cl=!1}catch(s){throw Mn!==null&&(Mn=Mn.slice(e+1)),ca(Ls,et),s}finally{me=n,xo=!1}}return null}var Ft=[],Ut=0,El=null,Pl=0,un=[],dn=0,ht=null,Ln=1,$n="";function mt(e,n){Ft[Ut++]=Pl,Ft[Ut++]=El,El=e,Pl=n}function ac(e,n,t){un[dn++]=Ln,un[dn++]=$n,un[dn++]=ht,ht=e;var l=Ln;e=$n;var s=32-vn(l)-1;l&=~(1<<s),t+=1;var o=32-vn(n)+s;if(30<o){var u=s-s%5;o=(l&(1<<u)-1).toString(32),l>>=u,s-=u,Ln=1<<32-vn(n)+s|t<<s|l,$n=o+e}else Ln=1<<o|t<<s|l,$n=e}function yo(e){e.return!==null&&(mt(e,1),ac(e,1,0))}function vo(e){for(;e===El;)El=Ft[--Ut],Ft[Ut]=null,Pl=Ft[--Ut],Ft[Ut]=null;for(;e===ht;)ht=un[--dn],un[dn]=null,$n=un[--dn],un[dn]=null,Ln=un[--dn],un[dn]=null}var rn=null,ln=null,we=!1,wn=null;function cc(e,n){var t=mn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function uc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rn=e,ln=Jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rn=e,ln=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ht!==null?{id:Ln,overflow:$n}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=mn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,rn=e,ln=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wo(e){if(we){var n=ln;if(n){var t=n;if(!uc(e,n)){if(jo(e))throw Error(c(418));n=Jn(t.nextSibling);var l=rn;n&&uc(e,n)?cc(l,t):(e.flags=e.flags&-4097|2,we=!1,rn=e)}}else{if(jo(e))throw Error(c(418));e.flags=e.flags&-4097|2,we=!1,rn=e}}}function dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function _l(e){if(e!==rn)return!1;if(!we)return dc(e),we=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!fo(e.type,e.memoizedProps)),n&&(n=ln)){if(jo(e))throw fc(),Error(c(418));for(;n;)cc(e,n),n=Jn(n.nextSibling)}if(dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ln=Jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ln=null}}else ln=rn?Jn(e.stateNode.nextSibling):null;return!0}function fc(){for(var e=ln;e;)e=Jn(e.nextSibling)}function Bt(){ln=rn=null,we=!1}function ko(e){wn===null?wn=[e]:wn.push(e)}var np=Z.ReactCurrentBatchConfig;function Or(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var l=t.stateNode}if(!l)throw Error(c(147,e));var s=l,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(u){var f=s.refs;u===null?delete f[o]:f[o]=u},n._stringRef=o,n)}if(typeof e!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,e))}return e}function Nl(e,n){throw e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function pc(e){var n=e._init;return n(e._payload)}function hc(e){function n(y,g){if(e){var v=y.deletions;v===null?(y.deletions=[g],y.flags|=16):v.push(g)}}function t(y,g){if(!e)return null;for(;g!==null;)n(y,g),g=g.sibling;return null}function l(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function s(y,g){return y=at(y,g),y.index=0,y.sibling=null,y}function o(y,g,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<g?(y.flags|=2,g):v):(y.flags|=2,g)):(y.flags|=1048576,g)}function u(y){return e&&y.alternate===null&&(y.flags|=2),y}function f(y,g,v,_){return g===null||g.tag!==6?(g=pi(v,y.mode,_),g.return=y,g):(g=s(g,v),g.return=y,g)}function h(y,g,v,_){var z=v.type;return z===B?C(y,g,v.props.children,_,v.key):g!==null&&(g.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===$e&&pc(z)===g.type)?(_=s(g,v.props),_.ref=Or(y,g,v),_.return=y,_):(_=Xl(v.type,v.key,v.props,null,y.mode,_),_.ref=Or(y,g,v),_.return=y,_)}function j(y,g,v,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=hi(v,y.mode,_),g.return=y,g):(g=s(g,v.children||[]),g.return=y,g)}function C(y,g,v,_,z){return g===null||g.tag!==7?(g=St(v,y.mode,_,z),g.return=y,g):(g=s(g,v),g.return=y,g)}function E(y,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=pi(""+g,y.mode,v),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case de:return v=Xl(g.type,g.key,g.props,null,y.mode,v),v.ref=Or(y,null,g),v.return=y,v;case K:return g=hi(g,y.mode,v),g.return=y,g;case $e:var _=g._init;return E(y,_(g._payload),v)}if(or(g)||M(g))return g=St(g,y.mode,v,null),g.return=y,g;Nl(y,g)}return null}function S(y,g,v,_){var z=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return z!==null?null:f(y,g,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case de:return v.key===z?h(y,g,v,_):null;case K:return v.key===z?j(y,g,v,_):null;case $e:return z=v._init,S(y,g,z(v._payload),_)}if(or(v)||M(v))return z!==null?null:C(y,g,v,_,null);Nl(y,v)}return null}function O(y,g,v,_,z){if(typeof _=="string"&&_!==""||typeof _=="number")return y=y.get(v)||null,f(g,y,""+_,z);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case de:return y=y.get(_.key===null?v:_.key)||null,h(g,y,_,z);case K:return y=y.get(_.key===null?v:_.key)||null,j(g,y,_,z);case $e:var F=_._init;return O(y,g,v,F(_._payload),z)}if(or(_)||M(_))return y=y.get(v)||null,C(g,y,_,z,null);Nl(g,_)}return null}function I(y,g,v,_){for(var z=null,F=null,U=g,V=g=0,Ae=null;U!==null&&V<v.length;V++){U.index>V?(Ae=U,U=null):Ae=U.sibling;var ue=S(y,U,v[V],_);if(ue===null){U===null&&(U=Ae);break}e&&U&&ue.alternate===null&&n(y,U),g=o(ue,g,V),F===null?z=ue:F.sibling=ue,F=ue,U=Ae}if(V===v.length)return t(y,U),we&&mt(y,V),z;if(U===null){for(;V<v.length;V++)U=E(y,v[V],_),U!==null&&(g=o(U,g,V),F===null?z=U:F.sibling=U,F=U);return we&&mt(y,V),z}for(U=l(y,U);V<v.length;V++)Ae=O(U,y,V,v[V],_),Ae!==null&&(e&&Ae.alternate!==null&&U.delete(Ae.key===null?V:Ae.key),g=o(Ae,g,V),F===null?z=Ae:F.sibling=Ae,F=Ae);return e&&U.forEach(function(ct){return n(y,ct)}),we&&mt(y,V),z}function D(y,g,v,_){var z=M(v);if(typeof z!="function")throw Error(c(150));if(v=z.call(v),v==null)throw Error(c(151));for(var F=z=null,U=g,V=g=0,Ae=null,ue=v.next();U!==null&&!ue.done;V++,ue=v.next()){U.index>V?(Ae=U,U=null):Ae=U.sibling;var ct=S(y,U,ue.value,_);if(ct===null){U===null&&(U=Ae);break}e&&U&&ct.alternate===null&&n(y,U),g=o(ct,g,V),F===null?z=ct:F.sibling=ct,F=ct,U=Ae}if(ue.done)return t(y,U),we&&mt(y,V),z;if(U===null){for(;!ue.done;V++,ue=v.next())ue=E(y,ue.value,_),ue!==null&&(g=o(ue,g,V),F===null?z=ue:F.sibling=ue,F=ue);return we&&mt(y,V),z}for(U=l(y,U);!ue.done;V++,ue=v.next())ue=O(U,y,V,ue.value,_),ue!==null&&(e&&ue.alternate!==null&&U.delete(ue.key===null?V:ue.key),g=o(ue,g,V),F===null?z=ue:F.sibling=ue,F=ue);return e&&U.forEach(function(Ap){return n(y,Ap)}),we&&mt(y,V),z}function Pe(y,g,v,_){if(typeof v=="object"&&v!==null&&v.type===B&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case de:e:{for(var z=v.key,F=g;F!==null;){if(F.key===z){if(z=v.type,z===B){if(F.tag===7){t(y,F.sibling),g=s(F,v.props.children),g.return=y,y=g;break e}}else if(F.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===$e&&pc(z)===F.type){t(y,F.sibling),g=s(F,v.props),g.ref=Or(y,F,v),g.return=y,y=g;break e}t(y,F);break}else n(y,F);F=F.sibling}v.type===B?(g=St(v.props.children,y.mode,_,v.key),g.return=y,y=g):(_=Xl(v.type,v.key,v.props,null,y.mode,_),_.ref=Or(y,g,v),_.return=y,y=_)}return u(y);case K:e:{for(F=v.key;g!==null;){if(g.key===F)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(y,g.sibling),g=s(g,v.children||[]),g.return=y,y=g;break e}else{t(y,g);break}else n(y,g);g=g.sibling}g=hi(v,y.mode,_),g.return=y,y=g}return u(y);case $e:return F=v._init,Pe(y,g,F(v._payload),_)}if(or(v))return I(y,g,v,_);if(M(v))return D(y,g,v,_);Nl(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(y,g.sibling),g=s(g,v),g.return=y,y=g):(t(y,g),g=pi(v,y.mode,_),g.return=y,y=g),u(y)):t(y,g)}return Pe}var Vt=hc(!0),mc=hc(!1),bl=Xn(null),Rl=null,Ht=null,So=null;function Co(){So=Ht=Rl=null}function Eo(e){var n=bl.current;ve(bl),e._currentValue=n}function Po(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function Wt(e,n){Rl=e,So=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(qe=!0),e.firstContext=null)}function fn(e){var n=e._currentValue;if(So!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(Rl===null)throw Error(c(308));Ht=e,Rl.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var gt=null;function _o(e){gt===null?gt=[e]:gt.push(e)}function gc(e,n,t,l){var s=n.interleaved;return s===null?(t.next=t,_o(n)):(t.next=s.next,s.next=t),n.interleaved=t,Fn(e,l)}function Fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nt=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function tt(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ae&2)!==0){var s=l.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n,Fn(e,t)}return s=l.interleaved,s===null?(n.next=n,_o(l)):(n.next=s.next,s.next=n),l.interleaved=n,Fn(e,t)}function Ol(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Us(e,t)}}function yc(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var s=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var u={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?s=o=u:o=o.next=u,t=t.next}while(t!==null);o===null?s=o=n:o=o.next=n}else s=o=n;t={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:l.shared,effects:l.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Tl(e,n,t,l){var s=e.updateQueue;nt=!1;var o=s.firstBaseUpdate,u=s.lastBaseUpdate,f=s.shared.pending;if(f!==null){s.shared.pending=null;var h=f,j=h.next;h.next=null,u===null?o=j:u.next=j,u=h;var C=e.alternate;C!==null&&(C=C.updateQueue,f=C.lastBaseUpdate,f!==u&&(f===null?C.firstBaseUpdate=j:f.next=j,C.lastBaseUpdate=h))}if(o!==null){var E=s.baseState;u=0,C=j=h=null,f=o;do{var S=f.lane,O=f.eventTime;if((l&S)===S){C!==null&&(C=C.next={eventTime:O,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var I=e,D=f;switch(S=n,O=t,D.tag){case 1:if(I=D.payload,typeof I=="function"){E=I.call(O,E,S);break e}E=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=D.payload,S=typeof I=="function"?I.call(O,E,S):I,S==null)break e;E=R({},E,S);break e;case 2:nt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,S=s.effects,S===null?s.effects=[f]:S.push(f))}else O={eventTime:O,lane:S,tag:f.tag,payload:f.payload,callback:f.callback,next:null},C===null?(j=C=O,h=E):C=C.next=O,u|=S;if(f=f.next,f===null){if(f=s.shared.pending,f===null)break;S=f,f=S.next,S.next=null,s.lastBaseUpdate=S,s.shared.pending=null}}while(!0);if(C===null&&(h=E),s.baseState=h,s.firstBaseUpdate=j,s.lastBaseUpdate=C,n=s.shared.interleaved,n!==null){s=n;do u|=s.lane,s=s.next;while(s!==n)}else o===null&&(s.shared.lanes=0);vt|=u,e.lanes=u,e.memoizedState=E}}function vc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],s=l.callback;if(s!==null){if(l.callback=null,l=t,typeof s!="function")throw Error(c(191,s));s.call(l)}}}var Tr={},Rn=Xn(Tr),Ir=Xn(Tr),Ar=Xn(Tr);function xt(e){if(e===Tr)throw Error(c(174));return e}function bo(e,n){switch(xe(Ar,n),xe(Ir,e),xe(Rn,Tr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:bs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=bs(n,e)}ve(Rn),xe(Rn,n)}function Qt(){ve(Rn),ve(Ir),ve(Ar)}function jc(e){xt(Ar.current);var n=xt(Rn.current),t=bs(n,e.type);n!==t&&(xe(Ir,e),xe(Rn,t))}function Ro(e){Ir.current===e&&(ve(Rn),ve(Ir))}var ke=Xn(0);function Il(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oo=[];function To(){for(var e=0;e<Oo.length;e++)Oo[e]._workInProgressVersionPrimary=null;Oo.length=0}var Al=Z.ReactCurrentDispatcher,Io=Z.ReactCurrentBatchConfig,yt=0,Se=null,Re=null,Te=null,Dl=!1,Dr=!1,zr=0,tp=0;function Ue(){throw Error(c(321))}function Ao(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!jn(e[t],n[t]))return!1;return!0}function Do(e,n,t,l,s,o){if(yt=o,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Al.current=e===null||e.memoizedState===null?op:ip,e=t(l,s),Dr){o=0;do{if(Dr=!1,zr=0,25<=o)throw Error(c(301));o+=1,Te=Re=null,n.updateQueue=null,Al.current=ap,e=t(l,s)}while(Dr)}if(Al.current=Ll,n=Re!==null&&Re.next!==null,yt=0,Te=Re=Se=null,Dl=!1,n)throw Error(c(300));return e}function zo(){var e=zr!==0;return zr=0,e}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?Se.memoizedState=Te=e:Te=Te.next=e,Te}function pn(){if(Re===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var n=Te===null?Se.memoizedState:Te.next;if(n!==null)Te=n,Re=e;else{if(e===null)throw Error(c(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Te===null?Se.memoizedState=Te=e:Te=Te.next=e}return Te}function Mr(e,n){return typeof n=="function"?n(e):n}function Mo(e){var n=pn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var l=Re,s=l.baseQueue,o=t.pending;if(o!==null){if(s!==null){var u=s.next;s.next=o.next,o.next=u}l.baseQueue=s=o,t.pending=null}if(s!==null){o=s.next,l=l.baseState;var f=u=null,h=null,j=o;do{var C=j.lane;if((yt&C)===C)h!==null&&(h=h.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),l=j.hasEagerState?j.eagerState:e(l,j.action);else{var E={lane:C,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};h===null?(f=h=E,u=l):h=h.next=E,Se.lanes|=C,vt|=C}j=j.next}while(j!==null&&j!==o);h===null?u=l:h.next=f,jn(l,n.memoizedState)||(qe=!0),n.memoizedState=l,n.baseState=u,n.baseQueue=h,t.lastRenderedState=l}if(e=t.interleaved,e!==null){s=e;do o=s.lane,Se.lanes|=o,vt|=o,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Lo(e){var n=pn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var l=t.dispatch,s=t.pending,o=n.memoizedState;if(s!==null){t.pending=null;var u=s=s.next;do o=e(o,u.action),u=u.next;while(u!==s);jn(o,n.memoizedState)||(qe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,l]}function wc(){}function kc(e,n){var t=Se,l=pn(),s=n(),o=!jn(l.memoizedState,s);if(o&&(l.memoizedState=s,qe=!0),l=l.queue,$o(Ec.bind(null,t,l,e),[e]),l.getSnapshot!==n||o||Te!==null&&Te.memoizedState.tag&1){if(t.flags|=2048,Lr(9,Cc.bind(null,t,l,s,n),void 0,null),Ie===null)throw Error(c(349));(yt&30)!==0||Sc(t,n,s)}return s}function Sc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Se.updateQueue,n===null?(n={lastEffect:null,stores:null},Se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Cc(e,n,t,l){n.value=t,n.getSnapshot=l,Pc(n)&&_c(e)}function Ec(e,n,t){return t(function(){Pc(n)&&_c(e)})}function Pc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!jn(e,t)}catch{return!0}}function _c(e){var n=Fn(e,1);n!==null&&En(n,e,1,-1)}function Nc(e){var n=On();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},n.queue=e,e=e.dispatch=sp.bind(null,Se,e),[n.memoizedState,e]}function Lr(e,n,t,l){return e={tag:e,create:n,destroy:t,deps:l,next:null},n=Se.updateQueue,n===null?(n={lastEffect:null,stores:null},Se.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e)),e}function bc(){return pn().memoizedState}function zl(e,n,t,l){var s=On();Se.flags|=e,s.memoizedState=Lr(1|n,t,void 0,l===void 0?null:l)}function Ml(e,n,t,l){var s=pn();l=l===void 0?null:l;var o=void 0;if(Re!==null){var u=Re.memoizedState;if(o=u.destroy,l!==null&&Ao(l,u.deps)){s.memoizedState=Lr(n,t,o,l);return}}Se.flags|=e,s.memoizedState=Lr(1|n,t,o,l)}function Rc(e,n){return zl(8390656,8,e,n)}function $o(e,n){return Ml(2048,8,e,n)}function Oc(e,n){return Ml(4,2,e,n)}function Tc(e,n){return Ml(4,4,e,n)}function Ic(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ac(e,n,t){return t=t!=null?t.concat([e]):null,Ml(4,4,Ic.bind(null,n,e),t)}function Fo(){}function Dc(e,n){var t=pn();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&Ao(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function zc(e,n){var t=pn();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&Ao(n,l[1])?l[0]:(e=e(),t.memoizedState=[e,n],e)}function Mc(e,n,t){return(yt&21)===0?(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=t):(jn(t,n)||(t=pa(),Se.lanes|=t,vt|=t,e.baseState=!0),n)}function rp(e,n){var t=me;me=t!==0&&4>t?t:4,e(!0);var l=Io.transition;Io.transition={};try{e(!1),n()}finally{me=t,Io.transition=l}}function Lc(){return pn().memoizedState}function lp(e,n,t){var l=ot(e);if(t={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null},$c(e))Fc(n,t);else if(t=gc(e,n,t,l),t!==null){var s=Qe();En(t,e,l,s),Uc(t,n,l)}}function sp(e,n,t){var l=ot(e),s={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null};if($c(e))Fc(n,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var u=n.lastRenderedState,f=o(u,t);if(s.hasEagerState=!0,s.eagerState=f,jn(f,u)){var h=n.interleaved;h===null?(s.next=s,_o(n)):(s.next=h.next,h.next=s),n.interleaved=s;return}}catch{}finally{}t=gc(e,n,s,l),t!==null&&(s=Qe(),En(t,e,l,s),Uc(t,n,l))}}function $c(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Fc(e,n){Dr=Dl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Uc(e,n,t){if((t&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Us(e,t)}}var Ll={readContext:fn,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},op={readContext:fn,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:Rc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,zl(4194308,4,Ic.bind(null,n,e),t)},useLayoutEffect:function(e,n){return zl(4194308,4,e,n)},useInsertionEffect:function(e,n){return zl(4,2,e,n)},useMemo:function(e,n){var t=On();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var l=On();return n=t!==void 0?t(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=lp.bind(null,Se,e),[l.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:Nc,useDebugValue:Fo,useDeferredValue:function(e){return On().memoizedState=e},useTransition:function(){var e=Nc(!1),n=e[0];return e=rp.bind(null,e[1]),On().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var l=Se,s=On();if(we){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Ie===null)throw Error(c(349));(yt&30)!==0||Sc(l,n,t)}s.memoizedState=t;var o={value:t,getSnapshot:n};return s.queue=o,Rc(Ec.bind(null,l,o,e),[e]),l.flags|=2048,Lr(9,Cc.bind(null,l,o,t,n),void 0,null),t},useId:function(){var e=On(),n=Ie.identifierPrefix;if(we){var t=$n,l=Ln;t=(l&~(1<<32-vn(l)-1)).toString(32)+t,n=":"+n+"R"+t,t=zr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=tp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ip={readContext:fn,useCallback:Dc,useContext:fn,useEffect:$o,useImperativeHandle:Ac,useInsertionEffect:Oc,useLayoutEffect:Tc,useMemo:zc,useReducer:Mo,useRef:bc,useState:function(){return Mo(Mr)},useDebugValue:Fo,useDeferredValue:function(e){var n=pn();return Mc(n,Re.memoizedState,e)},useTransition:function(){var e=Mo(Mr)[0],n=pn().memoizedState;return[e,n]},useMutableSource:wc,useSyncExternalStore:kc,useId:Lc,unstable_isNewReconciler:!1},ap={readContext:fn,useCallback:Dc,useContext:fn,useEffect:$o,useImperativeHandle:Ac,useInsertionEffect:Oc,useLayoutEffect:Tc,useMemo:zc,useReducer:Lo,useRef:bc,useState:function(){return Lo(Mr)},useDebugValue:Fo,useDeferredValue:function(e){var n=pn();return Re===null?n.memoizedState=e:Mc(n,Re.memoizedState,e)},useTransition:function(){var e=Lo(Mr)[0],n=pn().memoizedState;return[e,n]},useMutableSource:wc,useSyncExternalStore:kc,useId:Lc,unstable_isNewReconciler:!1};function kn(e,n){if(e&&e.defaultProps){n=R({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Uo(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:R({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var $l={isMounted:function(e){return(e=e._reactInternals)?dt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var l=Qe(),s=ot(e),o=Un(l,s);o.payload=n,t!=null&&(o.callback=t),n=tt(e,o,s),n!==null&&(En(n,e,s,l),Ol(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=Qe(),s=ot(e),o=Un(l,s);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=tt(e,o,s),n!==null&&(En(n,e,s,l),Ol(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Qe(),l=ot(e),s=Un(t,l);s.tag=2,n!=null&&(s.callback=n),n=tt(e,s,l),n!==null&&(En(n,e,l,t),Ol(n,e,l))}};function Bc(e,n,t,l,s,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,o,u):n.prototype&&n.prototype.isPureReactComponent?!Cr(t,l)||!Cr(s,o):!0}function Vc(e,n,t){var l=!1,s=Zn,o=n.contextType;return typeof o=="object"&&o!==null?o=fn(o):(s=Ke(n)?pt:Fe.current,l=n.contextTypes,o=(l=l!=null)?$t(e,s):Zn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=$l,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),n}function Hc(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&$l.enqueueReplaceState(n,n.state,null)}function Bo(e,n,t,l){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},No(e);var o=n.contextType;typeof o=="object"&&o!==null?s.context=fn(o):(o=Ke(n)?pt:Fe.current,s.context=$t(e,o)),s.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Uo(e,n,o,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&$l.enqueueReplaceState(s,s.state,null),Tl(e,t,s,l),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Gt(e,n){try{var t="",l=n;do t+=te(l),l=l.return;while(l);var s=t}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:s,digest:null}}function Vo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ho(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var cp=typeof WeakMap=="function"?WeakMap:Map;function Wc(e,n,t){t=Un(-1,t),t.tag=3,t.payload={element:null};var l=n.value;return t.callback=function(){Ql||(Ql=!0,si=l),Ho(e,n)},t}function Qc(e,n,t){t=Un(-1,t),t.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var s=n.value;t.payload=function(){return l(s)},t.callback=function(){Ho(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Ho(e,n),typeof l!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})}),t}function Gc(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new cp;var s=new Set;l.set(n,s)}else s=l.get(n),s===void 0&&(s=new Set,l.set(n,s));s.has(t)||(s.add(t),e=Sp.bind(null,e,n,t),n.then(e,e))}function Kc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qc(e,n,t,l,s){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Un(-1,1),n.tag=2,tt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var up=Z.ReactCurrentOwner,qe=!1;function We(e,n,t,l){n.child=e===null?mc(n,null,t,l):Vt(n,e.child,t,l)}function Yc(e,n,t,l,s){t=t.render;var o=n.ref;return Wt(n,s),l=Do(e,n,t,l,o,s),t=zo(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Bn(e,n,s)):(we&&t&&yo(n),n.flags|=1,We(e,n,l,s),n.child)}function Jc(e,n,t,l,s){if(e===null){var o=t.type;return typeof o=="function"&&!fi(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Xc(e,n,o,l,s)):(e=Xl(t.type,null,l,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&s)===0){var u=o.memoizedProps;if(t=t.compare,t=t!==null?t:Cr,t(u,l)&&e.ref===n.ref)return Bn(e,n,s)}return n.flags|=1,e=at(o,l),e.ref=n.ref,e.return=n,n.child=e}function Xc(e,n,t,l,s){if(e!==null){var o=e.memoizedProps;if(Cr(o,l)&&e.ref===n.ref)if(qe=!1,n.pendingProps=l=o,(e.lanes&s)!==0)(e.flags&131072)!==0&&(qe=!0);else return n.lanes=e.lanes,Bn(e,n,s)}return Wo(e,n,t,l,s)}function Zc(e,n,t){var l=n.pendingProps,s=l.children,o=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(qt,sn),sn|=t;else{if((t&1073741824)===0)return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,xe(qt,sn),sn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=o!==null?o.baseLanes:t,xe(qt,sn),sn|=l}else o!==null?(l=o.baseLanes|t,n.memoizedState=null):l=t,xe(qt,sn),sn|=l;return We(e,n,s,t),n.child}function eu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Wo(e,n,t,l,s){var o=Ke(t)?pt:Fe.current;return o=$t(n,o),Wt(n,s),t=Do(e,n,t,l,o,s),l=zo(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Bn(e,n,s)):(we&&l&&yo(n),n.flags|=1,We(e,n,t,s),n.child)}function nu(e,n,t,l,s){if(Ke(t)){var o=!0;Sl(n)}else o=!1;if(Wt(n,s),n.stateNode===null)Ul(e,n),Vc(n,t,l),Bo(n,t,l,s),l=!0;else if(e===null){var u=n.stateNode,f=n.memoizedProps;u.props=f;var h=u.context,j=t.contextType;typeof j=="object"&&j!==null?j=fn(j):(j=Ke(t)?pt:Fe.current,j=$t(n,j));var C=t.getDerivedStateFromProps,E=typeof C=="function"||typeof u.getSnapshotBeforeUpdate=="function";E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==l||h!==j)&&Hc(n,u,l,j),nt=!1;var S=n.memoizedState;u.state=S,Tl(n,l,u,s),h=n.memoizedState,f!==l||S!==h||Ge.current||nt?(typeof C=="function"&&(Uo(n,t,C,l),h=n.memoizedState),(f=nt||Bc(n,t,f,l,S,h,j))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=h),u.props=l,u.state=h,u.context=j,l=f):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{u=n.stateNode,xc(e,n),f=n.memoizedProps,j=n.type===n.elementType?f:kn(n.type,f),u.props=j,E=n.pendingProps,S=u.context,h=t.contextType,typeof h=="object"&&h!==null?h=fn(h):(h=Ke(t)?pt:Fe.current,h=$t(n,h));var O=t.getDerivedStateFromProps;(C=typeof O=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==E||S!==h)&&Hc(n,u,l,h),nt=!1,S=n.memoizedState,u.state=S,Tl(n,l,u,s);var I=n.memoizedState;f!==E||S!==I||Ge.current||nt?(typeof O=="function"&&(Uo(n,t,O,l),I=n.memoizedState),(j=nt||Bc(n,t,j,l,S,I,h)||!1)?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,I,h),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,I,h)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=I),u.props=l,u.state=I,u.context=h,l=j):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(n.flags|=1024),l=!1)}return Qo(e,n,t,l,o,s)}function Qo(e,n,t,l,s,o){eu(e,n);var u=(n.flags&128)!==0;if(!l&&!u)return s&&oc(n,t,!1),Bn(e,n,o);l=n.stateNode,up.current=n;var f=u&&typeof t.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&u?(n.child=Vt(n,e.child,null,o),n.child=Vt(n,null,f,o)):We(e,n,f,o),n.memoizedState=l.state,s&&oc(n,t,!0),n.child}function tu(e){var n=e.stateNode;n.pendingContext?lc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&lc(e,n.context,!1),bo(e,n.containerInfo)}function ru(e,n,t,l,s){return Bt(),ko(s),n.flags|=256,We(e,n,t,l),n.child}var Go={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function lu(e,n,t){var l=n.pendingProps,s=ke.current,o=!1,u=(n.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(s&2)!==0),f?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),xe(ke,s&1),e===null)return wo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(u=l.children,e=l.fallback,o?(l=n.mode,o=n.child,u={mode:"hidden",children:u},(l&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=u):o=Zl(u,l,0,null),e=St(e,l,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Ko(t),n.memoizedState=Go,e):qo(n,u));if(s=e.memoizedState,s!==null&&(f=s.dehydrated,f!==null))return dp(e,n,u,l,f,s,t);if(o){o=l.fallback,u=n.mode,s=e.child,f=s.sibling;var h={mode:"hidden",children:l.children};return(u&1)===0&&n.child!==s?(l=n.child,l.childLanes=0,l.pendingProps=h,n.deletions=null):(l=at(s,h),l.subtreeFlags=s.subtreeFlags&14680064),f!==null?o=at(f,o):(o=St(o,u,t,null),o.flags|=2),o.return=n,l.return=n,l.sibling=o,n.child=l,l=o,o=n.child,u=e.child.memoizedState,u=u===null?Ko(t):{baseLanes:u.baseLanes|t,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=e.childLanes&~t,n.memoizedState=Go,l}return o=e.child,e=o.sibling,l=at(o,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=t),l.return=n,l.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=l,n.memoizedState=null,l}function qo(e,n){return n=Zl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Fl(e,n,t,l){return l!==null&&ko(l),Vt(n,e.child,null,t),e=qo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dp(e,n,t,l,s,o,u){if(t)return n.flags&256?(n.flags&=-257,l=Vo(Error(c(422))),Fl(e,n,u,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=l.fallback,s=n.mode,l=Zl({mode:"visible",children:l.children},s,0,null),o=St(o,s,u,null),o.flags|=2,l.return=n,o.return=n,l.sibling=o,n.child=l,(n.mode&1)!==0&&Vt(n,e.child,null,u),n.child.memoizedState=Ko(u),n.memoizedState=Go,o);if((n.mode&1)===0)return Fl(e,n,u,null);if(s.data==="$!"){if(l=s.nextSibling&&s.nextSibling.dataset,l)var f=l.dgst;return l=f,o=Error(c(419)),l=Vo(o,l,void 0),Fl(e,n,u,l)}if(f=(u&e.childLanes)!==0,qe||f){if(l=Ie,l!==null){switch(u&-u){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(l.suspendedLanes|u))!==0?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Fn(e,s),En(l,e,s,-1))}return di(),l=Vo(Error(c(421))),Fl(e,n,u,l)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=Cp.bind(null,e),s._reactRetry=n,null):(e=o.treeContext,ln=Jn(s.nextSibling),rn=n,we=!0,wn=null,e!==null&&(un[dn++]=Ln,un[dn++]=$n,un[dn++]=ht,Ln=e.id,$n=e.overflow,ht=n),n=qo(n,l.children),n.flags|=4096,n)}function su(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Po(e.return,n,t)}function Yo(e,n,t,l,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:s}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=t,o.tailMode=s)}function ou(e,n,t){var l=n.pendingProps,s=l.revealOrder,o=l.tail;if(We(e,n,l.children,t),l=ke.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&su(e,t,n);else if(e.tag===19)su(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(xe(ke,l),(n.mode&1)===0)n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&Il(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),Yo(n,!1,s,t,o);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&Il(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}Yo(n,!0,t,null,o);break;case"together":Yo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ul(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Bn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=at(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=at(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function fp(e,n,t){switch(n.tag){case 3:tu(n),Bt();break;case 5:jc(n);break;case 1:Ke(n.type)&&Sl(n);break;case 4:bo(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,s=n.memoizedProps.value;xe(bl,l._currentValue),l._currentValue=s;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(xe(ke,ke.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?lu(e,n,t):(xe(ke,ke.current&1),e=Bn(e,n,t),e!==null?e.sibling:null);xe(ke,ke.current&1);break;case 19:if(l=(t&n.childLanes)!==0,(e.flags&128)!==0){if(l)return ou(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xe(ke,ke.current),l)break;return null;case 22:case 23:return n.lanes=0,Zc(e,n,t)}return Bn(e,n,t)}var iu,Jo,au,cu;iu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Jo=function(){},au=function(e,n,t,l){var s=e.memoizedProps;if(s!==l){e=n.stateNode,xt(Rn.current);var o=null;switch(t){case"input":s=Es(e,s),l=Es(e,l),o=[];break;case"select":s=R({},s,{value:void 0}),l=R({},l,{value:void 0}),o=[];break;case"textarea":s=Ns(e,s),l=Ns(e,l),o=[];break;default:typeof s.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=jl)}Rs(t,l);var u;t=null;for(j in s)if(!l.hasOwnProperty(j)&&s.hasOwnProperty(j)&&s[j]!=null)if(j==="style"){var f=s[j];for(u in f)f.hasOwnProperty(u)&&(t||(t={}),t[u]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(m.hasOwnProperty(j)?o||(o=[]):(o=o||[]).push(j,null));for(j in l){var h=l[j];if(f=s!=null?s[j]:void 0,l.hasOwnProperty(j)&&h!==f&&(h!=null||f!=null))if(j==="style")if(f){for(u in f)!f.hasOwnProperty(u)||h&&h.hasOwnProperty(u)||(t||(t={}),t[u]="");for(u in h)h.hasOwnProperty(u)&&f[u]!==h[u]&&(t||(t={}),t[u]=h[u])}else t||(o||(o=[]),o.push(j,t)),t=h;else j==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(o=o||[]).push(j,h)):j==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(j,""+h):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(m.hasOwnProperty(j)?(h!=null&&j==="onScroll"&&ye("scroll",e),o||f===h||(o=[])):(o=o||[]).push(j,h))}t&&(o=o||[]).push("style",t);var j=o;(n.updateQueue=j)&&(n.flags|=4)}},cu=function(e,n,t,l){t!==l&&(n.flags|=4)};function $r(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Be(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,l|=s.subtreeFlags&14680064,l|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function pp(e,n,t){var l=n.pendingProps;switch(vo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(n),null;case 1:return Ke(n.type)&&kl(),Be(n),null;case 3:return l=n.stateNode,Qt(),ve(Ge),ve(Fe),To(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(_l(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wn!==null&&(ai(wn),wn=null))),Jo(e,n),Be(n),null;case 5:Ro(n);var s=xt(Ar.current);if(t=n.type,e!==null&&n.stateNode!=null)au(e,n,t,l,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(c(166));return Be(n),null}if(e=xt(Rn.current),_l(n)){l=n.stateNode,t=n.type;var o=n.memoizedProps;switch(l[bn]=n,l[br]=o,e=(n.mode&1)!==0,t){case"dialog":ye("cancel",l),ye("close",l);break;case"iframe":case"object":case"embed":ye("load",l);break;case"video":case"audio":for(s=0;s<Pr.length;s++)ye(Pr[s],l);break;case"source":ye("error",l);break;case"img":case"image":case"link":ye("error",l),ye("load",l);break;case"details":ye("toggle",l);break;case"input":Vi(l,o),ye("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!o.multiple},ye("invalid",l);break;case"textarea":Qi(l,o),ye("invalid",l)}Rs(t,o),s=null;for(var u in o)if(o.hasOwnProperty(u)){var f=o[u];u==="children"?typeof f=="string"?l.textContent!==f&&(o.suppressHydrationWarning!==!0&&vl(l.textContent,f,e),s=["children",f]):typeof f=="number"&&l.textContent!==""+f&&(o.suppressHydrationWarning!==!0&&vl(l.textContent,f,e),s=["children",""+f]):m.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&ye("scroll",l)}switch(t){case"input":Dn(l),Wi(l,o,!0);break;case"textarea":Dn(l),Ki(l);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(l.onclick=jl)}l=s,n.updateQueue=l,l!==null&&(n.flags|=4)}else{u=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qi(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=u.createElement(t,{is:l.is}):(e=u.createElement(t),t==="select"&&(u=e,l.multiple?u.multiple=!0:l.size&&(u.size=l.size))):e=u.createElementNS(e,t),e[bn]=n,e[br]=l,iu(e,n,!1,!1),n.stateNode=e;e:{switch(u=Os(t,l),t){case"dialog":ye("cancel",e),ye("close",e),s=l;break;case"iframe":case"object":case"embed":ye("load",e),s=l;break;case"video":case"audio":for(s=0;s<Pr.length;s++)ye(Pr[s],e);s=l;break;case"source":ye("error",e),s=l;break;case"img":case"image":case"link":ye("error",e),ye("load",e),s=l;break;case"details":ye("toggle",e),s=l;break;case"input":Vi(e,l),s=Es(e,l),ye("invalid",e);break;case"option":s=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},s=R({},l,{value:void 0}),ye("invalid",e);break;case"textarea":Qi(e,l),s=Ns(e,l),ye("invalid",e);break;default:s=l}Rs(t,s),f=s;for(o in f)if(f.hasOwnProperty(o)){var h=f[o];o==="style"?Xi(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Yi(e,h)):o==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&ir(e,h):typeof h=="number"&&ir(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(m.hasOwnProperty(o)?h!=null&&o==="onScroll"&&ye("scroll",e):h!=null&&le(e,o,h,u))}switch(t){case"input":Dn(e),Wi(e,l,!1);break;case"textarea":Dn(e),Ki(e);break;case"option":l.value!=null&&e.setAttribute("value",""+oe(l.value));break;case"select":e.multiple=!!l.multiple,o=l.value,o!=null?_t(e,!!l.multiple,o,!1):l.defaultValue!=null&&_t(e,!!l.multiple,l.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=jl)}switch(t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Be(n),null;case 6:if(e&&n.stateNode!=null)cu(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(c(166));if(t=xt(Ar.current),xt(Rn.current),_l(n)){if(l=n.stateNode,t=n.memoizedProps,l[bn]=n,(o=l.nodeValue!==t)&&(e=rn,e!==null))switch(e.tag){case 3:vl(l.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vl(l.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else l=(t.nodeType===9?t:t.ownerDocument).createTextNode(l),l[bn]=n,n.stateNode=l}return Be(n),null;case 13:if(ve(ke),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&ln!==null&&(n.mode&1)!==0&&(n.flags&128)===0)fc(),Bt(),n.flags|=98560,o=!1;else if(o=_l(n),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[bn]=n}else Bt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Be(n),o=!1}else wn!==null&&(ai(wn),wn=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ke.current&1)!==0?Oe===0&&(Oe=3):di())),n.updateQueue!==null&&(n.flags|=4),Be(n),null);case 4:return Qt(),Jo(e,n),e===null&&_r(n.stateNode.containerInfo),Be(n),null;case 10:return Eo(n.type._context),Be(n),null;case 17:return Ke(n.type)&&kl(),Be(n),null;case 19:if(ve(ke),o=n.memoizedState,o===null)return Be(n),null;if(l=(n.flags&128)!==0,u=o.rendering,u===null)if(l)$r(o,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=Il(e),u!==null){for(n.flags|=128,$r(o,!1),l=u.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=t,t=n.child;t!==null;)o=t,e=l,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,e=u.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return xe(ke,ke.current&1|2),n.child}e=e.sibling}o.tail!==null&&Ee()>Yt&&(n.flags|=128,l=!0,$r(o,!1),n.lanes=4194304)}else{if(!l)if(e=Il(u),e!==null){if(n.flags|=128,l=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!we)return Be(n),null}else 2*Ee()-o.renderingStartTime>Yt&&t!==1073741824&&(n.flags|=128,l=!0,$r(o,!1),n.lanes=4194304);o.isBackwards?(u.sibling=n.child,n.child=u):(t=o.last,t!==null?t.sibling=u:n.child=u,o.last=u)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Ee(),n.sibling=null,t=ke.current,xe(ke,l?t&1|2:t&1),n):(Be(n),null);case 22:case 23:return ui(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(sn&1073741824)!==0&&(Be(n),n.subtreeFlags&6&&(n.flags|=8192)):Be(n),null;case 24:return null;case 25:return null}throw Error(c(156,n.tag))}function hp(e,n){switch(vo(n),n.tag){case 1:return Ke(n.type)&&kl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qt(),ve(Ge),ve(Fe),To(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Ro(n),null;case 13:if(ve(ke),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ve(ke),null;case 4:return Qt(),null;case 10:return Eo(n.type._context),null;case 22:case 23:return ui(),null;case 24:return null;default:return null}}var Bl=!1,Ve=!1,mp=typeof WeakSet=="function"?WeakSet:Set,T=null;function Kt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(l){Ce(e,n,l)}else t.current=null}function Xo(e,n,t){try{t()}catch(l){Ce(e,n,l)}}var uu=!1;function gp(e,n){if(co=al,e=Ba(),no(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var s=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var u=0,f=-1,h=-1,j=0,C=0,E=e,S=null;n:for(;;){for(var O;E!==t||s!==0&&E.nodeType!==3||(f=u+s),E!==o||l!==0&&E.nodeType!==3||(h=u+l),E.nodeType===3&&(u+=E.nodeValue.length),(O=E.firstChild)!==null;)S=E,E=O;for(;;){if(E===e)break n;if(S===t&&++j===s&&(f=u),S===o&&++C===l&&(h=u),(O=E.nextSibling)!==null)break;E=S,S=E.parentNode}E=O}t=f===-1||h===-1?null:{start:f,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(uo={focusedElem:e,selectionRange:t},al=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var I=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var D=I.memoizedProps,Pe=I.memoizedState,y=n.stateNode,g=y.getSnapshotBeforeUpdate(n.elementType===n.type?D:kn(n.type,D),Pe);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(_){Ce(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return I=uu,uu=!1,I}function Fr(e,n,t){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var s=l=l.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Xo(n,t,o)}s=s.next}while(s!==l)}}function Vl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var l=t.create;t.destroy=l()}t=t.next}while(t!==n)}}function Zo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function du(e){var n=e.alternate;n!==null&&(e.alternate=null,du(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[bn],delete n[br],delete n[mo],delete n[Xf],delete n[Zf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fu(e){return e.tag===5||e.tag===3||e.tag===4}function pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ei(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=jl));else if(l!==4&&(e=e.child,e!==null))for(ei(e,n,t),e=e.sibling;e!==null;)ei(e,n,t),e=e.sibling}function ni(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(ni(e,n,t),e=e.sibling;e!==null;)ni(e,n,t),e=e.sibling}var Me=null,Sn=!1;function rt(e,n,t){for(t=t.child;t!==null;)hu(e,n,t),t=t.sibling}function hu(e,n,t){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(tl,t)}catch{}switch(t.tag){case 5:Ve||Kt(t,n);case 6:var l=Me,s=Sn;Me=null,rt(e,n,t),Me=l,Sn=s,Me!==null&&(Sn?(e=Me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Me.removeChild(t.stateNode));break;case 18:Me!==null&&(Sn?(e=Me,t=t.stateNode,e.nodeType===8?ho(e.parentNode,t):e.nodeType===1&&ho(e,t),yr(e)):ho(Me,t.stateNode));break;case 4:l=Me,s=Sn,Me=t.stateNode.containerInfo,Sn=!0,rt(e,n,t),Me=l,Sn=s;break;case 0:case 11:case 14:case 15:if(!Ve&&(l=t.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){s=l=l.next;do{var o=s,u=o.destroy;o=o.tag,u!==void 0&&((o&2)!==0||(o&4)!==0)&&Xo(t,n,u),s=s.next}while(s!==l)}rt(e,n,t);break;case 1:if(!Ve&&(Kt(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=t.memoizedProps,l.state=t.memoizedState,l.componentWillUnmount()}catch(f){Ce(t,n,f)}rt(e,n,t);break;case 21:rt(e,n,t);break;case 22:t.mode&1?(Ve=(l=Ve)||t.memoizedState!==null,rt(e,n,t),Ve=l):rt(e,n,t);break;default:rt(e,n,t)}}function mu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new mp),n.forEach(function(l){var s=Ep.bind(null,e,l);t.has(l)||(t.add(l),l.then(s,s))})}}function Cn(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var s=t[l];try{var o=e,u=n,f=u;e:for(;f!==null;){switch(f.tag){case 5:Me=f.stateNode,Sn=!1;break e;case 3:Me=f.stateNode.containerInfo,Sn=!0;break e;case 4:Me=f.stateNode.containerInfo,Sn=!0;break e}f=f.return}if(Me===null)throw Error(c(160));hu(o,u,s),Me=null,Sn=!1;var h=s.alternate;h!==null&&(h.return=null),s.return=null}catch(j){Ce(s,n,j)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)gu(n,e),n=n.sibling}function gu(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Cn(n,e),Tn(e),l&4){try{Fr(3,e,e.return),Vl(3,e)}catch(D){Ce(e,e.return,D)}try{Fr(5,e,e.return)}catch(D){Ce(e,e.return,D)}}break;case 1:Cn(n,e),Tn(e),l&512&&t!==null&&Kt(t,t.return);break;case 5:if(Cn(n,e),Tn(e),l&512&&t!==null&&Kt(t,t.return),e.flags&32){var s=e.stateNode;try{ir(s,"")}catch(D){Ce(e,e.return,D)}}if(l&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,u=t!==null?t.memoizedProps:o,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&o.type==="radio"&&o.name!=null&&Hi(s,o),Os(f,u);var j=Os(f,o);for(u=0;u<h.length;u+=2){var C=h[u],E=h[u+1];C==="style"?Xi(s,E):C==="dangerouslySetInnerHTML"?Yi(s,E):C==="children"?ir(s,E):le(s,C,E,j)}switch(f){case"input":Ps(s,o);break;case"textarea":Gi(s,o);break;case"select":var S=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var O=o.value;O!=null?_t(s,!!o.multiple,O,!1):S!==!!o.multiple&&(o.defaultValue!=null?_t(s,!!o.multiple,o.defaultValue,!0):_t(s,!!o.multiple,o.multiple?[]:"",!1))}s[br]=o}catch(D){Ce(e,e.return,D)}}break;case 6:if(Cn(n,e),Tn(e),l&4){if(e.stateNode===null)throw Error(c(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(D){Ce(e,e.return,D)}}break;case 3:if(Cn(n,e),Tn(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(D){Ce(e,e.return,D)}break;case 4:Cn(n,e),Tn(e);break;case 13:Cn(n,e),Tn(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(li=Ee())),l&4&&mu(e);break;case 22:if(C=t!==null&&t.memoizedState!==null,e.mode&1?(Ve=(j=Ve)||C,Cn(n,e),Ve=j):Cn(n,e),Tn(e),l&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!C&&(e.mode&1)!==0)for(T=e,C=e.child;C!==null;){for(E=T=C;T!==null;){switch(S=T,O=S.child,S.tag){case 0:case 11:case 14:case 15:Fr(4,S,S.return);break;case 1:Kt(S,S.return);var I=S.stateNode;if(typeof I.componentWillUnmount=="function"){l=S,t=S.return;try{n=l,I.props=n.memoizedProps,I.state=n.memoizedState,I.componentWillUnmount()}catch(D){Ce(l,t,D)}}break;case 5:Kt(S,S.return);break;case 22:if(S.memoizedState!==null){vu(E);continue}}O!==null?(O.return=S,T=O):vu(E)}C=C.sibling}e:for(C=null,E=e;;){if(E.tag===5){if(C===null){C=E;try{s=E.stateNode,j?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(f=E.stateNode,h=E.memoizedProps.style,u=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=Ji("display",u))}catch(D){Ce(e,e.return,D)}}}else if(E.tag===6){if(C===null)try{E.stateNode.nodeValue=j?"":E.memoizedProps}catch(D){Ce(e,e.return,D)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;C===E&&(C=null),E=E.return}C===E&&(C=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:Cn(n,e),Tn(e),l&4&&mu(e);break;case 21:break;default:Cn(n,e),Tn(e)}}function Tn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(fu(t)){var l=t;break e}t=t.return}throw Error(c(160))}switch(l.tag){case 5:var s=l.stateNode;l.flags&32&&(ir(s,""),l.flags&=-33);var o=pu(e);ni(e,o,s);break;case 3:case 4:var u=l.stateNode.containerInfo,f=pu(e);ei(e,f,u);break;default:throw Error(c(161))}}catch(h){Ce(e,e.return,h)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xp(e,n,t){T=e,xu(e)}function xu(e,n,t){for(var l=(e.mode&1)!==0;T!==null;){var s=T,o=s.child;if(s.tag===22&&l){var u=s.memoizedState!==null||Bl;if(!u){var f=s.alternate,h=f!==null&&f.memoizedState!==null||Ve;f=Bl;var j=Ve;if(Bl=u,(Ve=h)&&!j)for(T=s;T!==null;)u=T,h=u.child,u.tag===22&&u.memoizedState!==null?ju(s):h!==null?(h.return=u,T=h):ju(s);for(;o!==null;)T=o,xu(o),o=o.sibling;T=s,Bl=f,Ve=j}yu(e)}else(s.subtreeFlags&8772)!==0&&o!==null?(o.return=s,T=o):yu(e)}}function yu(e){for(;T!==null;){var n=T;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ve||Vl(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Ve)if(t===null)l.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:kn(n.type,t.memoizedProps);l.componentDidUpdate(s,t.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&vc(n,o,l);break;case 3:var u=n.updateQueue;if(u!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}vc(n,u,t)}break;case 5:var f=n.stateNode;if(t===null&&n.flags&4){t=f;var h=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var j=n.alternate;if(j!==null){var C=j.memoizedState;if(C!==null){var E=C.dehydrated;E!==null&&yr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ve||n.flags&512&&Zo(n)}catch(S){Ce(n,n.return,S)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function vu(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function ju(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Vl(4,n)}catch(h){Ce(n,t,h)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var s=n.return;try{l.componentDidMount()}catch(h){Ce(n,s,h)}}var o=n.return;try{Zo(n)}catch(h){Ce(n,o,h)}break;case 5:var u=n.return;try{Zo(n)}catch(h){Ce(n,u,h)}}}catch(h){Ce(n,n.return,h)}if(n===e){T=null;break}var f=n.sibling;if(f!==null){f.return=n.return,T=f;break}T=n.return}}var yp=Math.ceil,Hl=Z.ReactCurrentDispatcher,ti=Z.ReactCurrentOwner,hn=Z.ReactCurrentBatchConfig,ae=0,Ie=null,_e=null,Le=0,sn=0,qt=Xn(0),Oe=0,Ur=null,vt=0,Wl=0,ri=0,Br=null,Ye=null,li=0,Yt=1/0,Vn=null,Ql=!1,si=null,lt=null,Gl=!1,st=null,Kl=0,Vr=0,oi=null,ql=-1,Yl=0;function Qe(){return(ae&6)!==0?Ee():ql!==-1?ql:ql=Ee()}function ot(e){return(e.mode&1)===0?1:(ae&2)!==0&&Le!==0?Le&-Le:np.transition!==null?(Yl===0&&(Yl=pa()),Yl):(e=me,e!==0||(e=window.event,e=e===void 0?16:ka(e.type)),e)}function En(e,n,t,l){if(50<Vr)throw Vr=0,oi=null,Error(c(185));pr(e,t,l),((ae&2)===0||e!==Ie)&&(e===Ie&&((ae&2)===0&&(Wl|=t),Oe===4&&it(e,Le)),Je(e,l),t===1&&ae===0&&(n.mode&1)===0&&(Yt=Ee()+500,Cl&&et()))}function Je(e,n){var t=e.callbackNode;ef(e,n);var l=sl(e,e===Ie?Le:0);if(l===0)t!==null&&ua(t),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(t!=null&&ua(t),n===1)e.tag===0?ep(ku.bind(null,e)):ic(ku.bind(null,e)),Yf(function(){(ae&6)===0&&et()}),t=null;else{switch(ha(l)){case 1:t=Ls;break;case 4:t=da;break;case 16:t=nl;break;case 536870912:t=fa;break;default:t=nl}t=Ru(t,wu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function wu(e,n){if(ql=-1,Yl=0,(ae&6)!==0)throw Error(c(327));var t=e.callbackNode;if(Jt()&&e.callbackNode!==t)return null;var l=sl(e,e===Ie?Le:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=Jl(e,l);else{n=l;var s=ae;ae|=2;var o=Cu();(Ie!==e||Le!==n)&&(Vn=null,Yt=Ee()+500,wt(e,n));do try{wp();break}catch(f){Su(e,f)}while(!0);Co(),Hl.current=o,ae=s,_e!==null?n=0:(Ie=null,Le=0,n=Oe)}if(n!==0){if(n===2&&(s=$s(e),s!==0&&(l=s,n=ii(e,s))),n===1)throw t=Ur,wt(e,0),it(e,l),Je(e,Ee()),t;if(n===6)it(e,l);else{if(s=e.current.alternate,(l&30)===0&&!vp(s)&&(n=Jl(e,l),n===2&&(o=$s(e),o!==0&&(l=o,n=ii(e,o))),n===1))throw t=Ur,wt(e,0),it(e,l),Je(e,Ee()),t;switch(e.finishedWork=s,e.finishedLanes=l,n){case 0:case 1:throw Error(c(345));case 2:kt(e,Ye,Vn);break;case 3:if(it(e,l),(l&130023424)===l&&(n=li+500-Ee(),10<n)){if(sl(e,0)!==0)break;if(s=e.suspendedLanes,(s&l)!==l){Qe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=po(kt.bind(null,e,Ye,Vn),n);break}kt(e,Ye,Vn);break;case 4:if(it(e,l),(l&4194240)===l)break;for(n=e.eventTimes,s=-1;0<l;){var u=31-vn(l);o=1<<u,u=n[u],u>s&&(s=u),l&=~o}if(l=s,l=Ee()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*yp(l/1960))-l,10<l){e.timeoutHandle=po(kt.bind(null,e,Ye,Vn),l);break}kt(e,Ye,Vn);break;case 5:kt(e,Ye,Vn);break;default:throw Error(c(329))}}}return Je(e,Ee()),e.callbackNode===t?wu.bind(null,e):null}function ii(e,n){var t=Br;return e.current.memoizedState.isDehydrated&&(wt(e,n).flags|=256),e=Jl(e,n),e!==2&&(n=Ye,Ye=t,n!==null&&ai(n)),e}function ai(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function vp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var l=0;l<t.length;l++){var s=t[l],o=s.getSnapshot;s=s.value;try{if(!jn(o(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function it(e,n){for(n&=~ri,n&=~Wl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-vn(n),l=1<<t;e[t]=-1,n&=~l}}function ku(e){if((ae&6)!==0)throw Error(c(327));Jt();var n=sl(e,0);if((n&1)===0)return Je(e,Ee()),null;var t=Jl(e,n);if(e.tag!==0&&t===2){var l=$s(e);l!==0&&(n=l,t=ii(e,l))}if(t===1)throw t=Ur,wt(e,0),it(e,n),Je(e,Ee()),t;if(t===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kt(e,Ye,Vn),Je(e,Ee()),null}function ci(e,n){var t=ae;ae|=1;try{return e(n)}finally{ae=t,ae===0&&(Yt=Ee()+500,Cl&&et())}}function jt(e){st!==null&&st.tag===0&&(ae&6)===0&&Jt();var n=ae;ae|=1;var t=hn.transition,l=me;try{if(hn.transition=null,me=1,e)return e()}finally{me=l,hn.transition=t,ae=n,(ae&6)===0&&et()}}function ui(){sn=qt.current,ve(qt)}function wt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,qf(t)),_e!==null)for(t=_e.return;t!==null;){var l=t;switch(vo(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&kl();break;case 3:Qt(),ve(Ge),ve(Fe),To();break;case 5:Ro(l);break;case 4:Qt();break;case 13:ve(ke);break;case 19:ve(ke);break;case 10:Eo(l.type._context);break;case 22:case 23:ui()}t=t.return}if(Ie=e,_e=e=at(e.current,null),Le=sn=n,Oe=0,Ur=null,ri=Wl=vt=0,Ye=Br=null,gt!==null){for(n=0;n<gt.length;n++)if(t=gt[n],l=t.interleaved,l!==null){t.interleaved=null;var s=l.next,o=t.pending;if(o!==null){var u=o.next;o.next=s,l.next=u}t.pending=l}gt=null}return e}function Su(e,n){do{var t=_e;try{if(Co(),Al.current=Ll,Dl){for(var l=Se.memoizedState;l!==null;){var s=l.queue;s!==null&&(s.pending=null),l=l.next}Dl=!1}if(yt=0,Te=Re=Se=null,Dr=!1,zr=0,ti.current=null,t===null||t.return===null){Oe=1,Ur=n,_e=null;break}e:{var o=e,u=t.return,f=t,h=n;if(n=Le,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var j=h,C=f,E=C.tag;if((C.mode&1)===0&&(E===0||E===11||E===15)){var S=C.alternate;S?(C.updateQueue=S.updateQueue,C.memoizedState=S.memoizedState,C.lanes=S.lanes):(C.updateQueue=null,C.memoizedState=null)}var O=Kc(u);if(O!==null){O.flags&=-257,qc(O,u,f,o,n),O.mode&1&&Gc(o,j,n),n=O,h=j;var I=n.updateQueue;if(I===null){var D=new Set;D.add(h),n.updateQueue=D}else I.add(h);break e}else{if((n&1)===0){Gc(o,j,n),di();break e}h=Error(c(426))}}else if(we&&f.mode&1){var Pe=Kc(u);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),qc(Pe,u,f,o,n),ko(Gt(h,f));break e}}o=h=Gt(h,f),Oe!==4&&(Oe=2),Br===null?Br=[o]:Br.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var y=Wc(o,h,n);yc(o,y);break e;case 1:f=h;var g=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lt===null||!lt.has(v)))){o.flags|=65536,n&=-n,o.lanes|=n;var _=Qc(o,f,n);yc(o,_);break e}}o=o.return}while(o!==null)}Pu(t)}catch(z){n=z,_e===t&&t!==null&&(_e=t=t.return);continue}break}while(!0)}function Cu(){var e=Hl.current;return Hl.current=Ll,e===null?Ll:e}function di(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ie===null||(vt&268435455)===0&&(Wl&268435455)===0||it(Ie,Le)}function Jl(e,n){var t=ae;ae|=2;var l=Cu();(Ie!==e||Le!==n)&&(Vn=null,wt(e,n));do try{jp();break}catch(s){Su(e,s)}while(!0);if(Co(),ae=t,Hl.current=l,_e!==null)throw Error(c(261));return Ie=null,Le=0,Oe}function jp(){for(;_e!==null;)Eu(_e)}function wp(){for(;_e!==null&&!Wd();)Eu(_e)}function Eu(e){var n=bu(e.alternate,e,sn);e.memoizedProps=e.pendingProps,n===null?Pu(e):_e=n,ti.current=null}function Pu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=pp(t,n,sn),t!==null){_e=t;return}}else{if(t=hp(t,n),t!==null){t.flags&=32767,_e=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,_e=null;return}}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);Oe===0&&(Oe=5)}function kt(e,n,t){var l=me,s=hn.transition;try{hn.transition=null,me=1,kp(e,n,t,l)}finally{hn.transition=s,me=l}return null}function kp(e,n,t,l){do Jt();while(st!==null);if((ae&6)!==0)throw Error(c(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(nf(e,o),e===Ie&&(_e=Ie=null,Le=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Gl||(Gl=!0,Ru(nl,function(){return Jt(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=hn.transition,hn.transition=null;var u=me;me=1;var f=ae;ae|=4,ti.current=null,gp(e,t),gu(t,e),Bf(uo),al=!!co,uo=co=null,e.current=t,xp(t),Qd(),ae=f,me=u,hn.transition=o}else e.current=t;if(Gl&&(Gl=!1,st=e,Kl=s),o=e.pendingLanes,o===0&&(lt=null),qd(t.stateNode),Je(e,Ee()),n!==null)for(l=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],l(s.value,{componentStack:s.stack,digest:s.digest});if(Ql)throw Ql=!1,e=si,si=null,e;return(Kl&1)!==0&&e.tag!==0&&Jt(),o=e.pendingLanes,(o&1)!==0?e===oi?Vr++:(Vr=0,oi=e):Vr=0,et(),null}function Jt(){if(st!==null){var e=ha(Kl),n=hn.transition,t=me;try{if(hn.transition=null,me=16>e?16:e,st===null)var l=!1;else{if(e=st,st=null,Kl=0,(ae&6)!==0)throw Error(c(331));var s=ae;for(ae|=4,T=e.current;T!==null;){var o=T,u=o.child;if((T.flags&16)!==0){var f=o.deletions;if(f!==null){for(var h=0;h<f.length;h++){var j=f[h];for(T=j;T!==null;){var C=T;switch(C.tag){case 0:case 11:case 15:Fr(8,C,o)}var E=C.child;if(E!==null)E.return=C,T=E;else for(;T!==null;){C=T;var S=C.sibling,O=C.return;if(du(C),C===j){T=null;break}if(S!==null){S.return=O,T=S;break}T=O}}}var I=o.alternate;if(I!==null){var D=I.child;if(D!==null){I.child=null;do{var Pe=D.sibling;D.sibling=null,D=Pe}while(D!==null)}}T=o}}if((o.subtreeFlags&2064)!==0&&u!==null)u.return=o,T=u;else e:for(;T!==null;){if(o=T,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Fr(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,T=y;break e}T=o.return}}var g=e.current;for(T=g;T!==null;){u=T;var v=u.child;if((u.subtreeFlags&2064)!==0&&v!==null)v.return=u,T=v;else e:for(u=g;T!==null;){if(f=T,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Vl(9,f)}}catch(z){Ce(f,f.return,z)}if(f===u){T=null;break e}var _=f.sibling;if(_!==null){_.return=f.return,T=_;break e}T=f.return}}if(ae=s,et(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(tl,e)}catch{}l=!0}return l}finally{me=t,hn.transition=n}}return!1}function _u(e,n,t){n=Gt(t,n),n=Wc(e,n,1),e=tt(e,n,1),n=Qe(),e!==null&&(pr(e,1,n),Je(e,n))}function Ce(e,n,t){if(e.tag===3)_u(e,e,t);else for(;n!==null;){if(n.tag===3){_u(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(lt===null||!lt.has(l))){e=Gt(t,e),e=Qc(n,e,1),n=tt(n,e,1),e=Qe(),n!==null&&(pr(n,1,e),Je(n,e));break}}n=n.return}}function Sp(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),n=Qe(),e.pingedLanes|=e.suspendedLanes&t,Ie===e&&(Le&t)===t&&(Oe===4||Oe===3&&(Le&130023424)===Le&&500>Ee()-li?wt(e,0):ri|=t),Je(e,n)}function Nu(e,n){n===0&&((e.mode&1)===0?n=1:(n=ll,ll<<=1,(ll&130023424)===0&&(ll=4194304)));var t=Qe();e=Fn(e,n),e!==null&&(pr(e,n,t),Je(e,t))}function Cp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Nu(e,t)}function Ep(e,n){var t=0;switch(e.tag){case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(c(314))}l!==null&&l.delete(n),Nu(e,t)}var bu;bu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ge.current)qe=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return qe=!1,fp(e,n,t);qe=(e.flags&131072)!==0}else qe=!1,we&&(n.flags&1048576)!==0&&ac(n,Pl,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Ul(e,n),e=n.pendingProps;var s=$t(n,Fe.current);Wt(n,t),s=Do(null,n,l,e,s,t);var o=zo();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ke(l)?(o=!0,Sl(n)):o=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,No(n),s.updater=$l,n.stateNode=s,s._reactInternals=n,Bo(n,l,e,t),n=Qo(null,n,l,!0,o,t)):(n.tag=0,we&&o&&yo(n),We(null,n,s,t),n=n.child),n;case 16:l=n.elementType;e:{switch(Ul(e,n),e=n.pendingProps,s=l._init,l=s(l._payload),n.type=l,s=n.tag=_p(l),e=kn(l,e),s){case 0:n=Wo(null,n,l,e,t);break e;case 1:n=nu(null,n,l,e,t);break e;case 11:n=Yc(null,n,l,e,t);break e;case 14:n=Jc(null,n,l,kn(l.type,e),t);break e}throw Error(c(306,l,""))}return n;case 0:return l=n.type,s=n.pendingProps,s=n.elementType===l?s:kn(l,s),Wo(e,n,l,s,t);case 1:return l=n.type,s=n.pendingProps,s=n.elementType===l?s:kn(l,s),nu(e,n,l,s,t);case 3:e:{if(tu(n),e===null)throw Error(c(387));l=n.pendingProps,o=n.memoizedState,s=o.element,xc(e,n),Tl(n,l,null,t);var u=n.memoizedState;if(l=u.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){s=Gt(Error(c(423)),n),n=ru(e,n,l,t,s);break e}else if(l!==s){s=Gt(Error(c(424)),n),n=ru(e,n,l,t,s);break e}else for(ln=Jn(n.stateNode.containerInfo.firstChild),rn=n,we=!0,wn=null,t=mc(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Bt(),l===s){n=Bn(e,n,t);break e}We(e,n,l,t)}n=n.child}return n;case 5:return jc(n),e===null&&wo(n),l=n.type,s=n.pendingProps,o=e!==null?e.memoizedProps:null,u=s.children,fo(l,s)?u=null:o!==null&&fo(l,o)&&(n.flags|=32),eu(e,n),We(e,n,u,t),n.child;case 6:return e===null&&wo(n),null;case 13:return lu(e,n,t);case 4:return bo(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Vt(n,null,l,t):We(e,n,l,t),n.child;case 11:return l=n.type,s=n.pendingProps,s=n.elementType===l?s:kn(l,s),Yc(e,n,l,s,t);case 7:return We(e,n,n.pendingProps,t),n.child;case 8:return We(e,n,n.pendingProps.children,t),n.child;case 12:return We(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(l=n.type._context,s=n.pendingProps,o=n.memoizedProps,u=s.value,xe(bl,l._currentValue),l._currentValue=u,o!==null)if(jn(o.value,u)){if(o.children===s.children&&!Ge.current){n=Bn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var f=o.dependencies;if(f!==null){u=o.child;for(var h=f.firstContext;h!==null;){if(h.context===l){if(o.tag===1){h=Un(-1,t&-t),h.tag=2;var j=o.updateQueue;if(j!==null){j=j.shared;var C=j.pending;C===null?h.next=h:(h.next=C.next,C.next=h),j.pending=h}}o.lanes|=t,h=o.alternate,h!==null&&(h.lanes|=t),Po(o.return,t,n),f.lanes|=t;break}h=h.next}}else if(o.tag===10)u=o.type===n.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(c(341));u.lanes|=t,f=u.alternate,f!==null&&(f.lanes|=t),Po(u,t,n),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===n){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}We(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,l=n.pendingProps.children,Wt(n,t),s=fn(s),l=l(s),n.flags|=1,We(e,n,l,t),n.child;case 14:return l=n.type,s=kn(l,n.pendingProps),s=kn(l.type,s),Jc(e,n,l,s,t);case 15:return Xc(e,n,n.type,n.pendingProps,t);case 17:return l=n.type,s=n.pendingProps,s=n.elementType===l?s:kn(l,s),Ul(e,n),n.tag=1,Ke(l)?(e=!0,Sl(n)):e=!1,Wt(n,t),Vc(n,l,s),Bo(n,l,s,t),Qo(null,n,l,!0,e,t);case 19:return ou(e,n,t);case 22:return Zc(e,n,t)}throw Error(c(156,n.tag))};function Ru(e,n){return ca(e,n)}function Pp(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(e,n,t,l){return new Pp(e,n,t,l)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _p(e){if(typeof e=="function")return fi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===an)return 11;if(e===cn)return 14}return 2}function at(e,n){var t=e.alternate;return t===null?(t=mn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Xl(e,n,t,l,s,o){var u=2;if(l=e,typeof e=="function")fi(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case B:return St(t.children,s,o,n);case be:u=8,s|=8;break;case en:return e=mn(12,t,n,s|2),e.elementType=en,e.lanes=o,e;case He:return e=mn(13,t,n,s),e.elementType=He,e.lanes=o,e;case nn:return e=mn(19,t,n,s),e.elementType=nn,e.lanes=o,e;case ge:return Zl(t,s,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xn:u=10;break e;case An:u=9;break e;case an:u=11;break e;case cn:u=14;break e;case $e:u=16,l=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return n=mn(u,t,n,s),n.elementType=e,n.type=l,n.lanes=o,n}function St(e,n,t,l){return e=mn(7,e,l,n),e.lanes=t,e}function Zl(e,n,t,l){return e=mn(22,e,l,n),e.elementType=ge,e.lanes=t,e.stateNode={isHidden:!1},e}function pi(e,n,t){return e=mn(6,e,null,n),e.lanes=t,e}function hi(e,n,t){return n=mn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Np(e,n,t,l,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=l,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function mi(e,n,t,l,s,o,u,f,h){return e=new Np(e,n,t,f,h),n===1?(n=1,o===!0&&(n|=8)):n=0,o=mn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:l,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(o),e}function bp(e,n,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:l==null?null:""+l,children:e,containerInfo:n,implementation:t}}function Ou(e){if(!e)return Zn;e=e._reactInternals;e:{if(dt(e)!==e||e.tag!==1)throw Error(c(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(c(171))}if(e.tag===1){var t=e.type;if(Ke(t))return sc(e,t,n)}return n}function Tu(e,n,t,l,s,o,u,f,h){return e=mi(t,l,!0,e,s,o,u,f,h),e.context=Ou(null),t=e.current,l=Qe(),s=ot(t),o=Un(l,s),o.callback=n??null,tt(t,o,s),e.current.lanes=s,pr(e,s,l),Je(e,l),e}function es(e,n,t,l){var s=n.current,o=Qe(),u=ot(s);return t=Ou(t),n.context===null?n.context=t:n.pendingContext=t,n=Un(o,u),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=tt(s,n,u),e!==null&&(En(e,s,u,o),Ol(e,s,u)),u}function ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Iu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function gi(e,n){Iu(e,n),(e=e.alternate)&&Iu(e,n)}function Rp(){return null}var Au=typeof reportError=="function"?reportError:function(e){console.error(e)};function xi(e){this._internalRoot=e}ts.prototype.render=xi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));es(e,n,null,null)},ts.prototype.unmount=xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jt(function(){es(null,e,null,null)}),n[zn]=null}};function ts(e){this._internalRoot=e}ts.prototype.unstable_scheduleHydration=function(e){if(e){var n=xa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Kn.length&&n!==0&&n<Kn[t].priority;t++);Kn.splice(t,0,e),t===0&&ja(e)}};function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function Op(e,n,t,l,s){if(s){if(typeof l=="function"){var o=l;l=function(){var j=ns(u);o.call(j)}}var u=Tu(n,l,e,0,null,!1,!1,"",Du);return e._reactRootContainer=u,e[zn]=u.current,_r(e.nodeType===8?e.parentNode:e),jt(),u}for(;s=e.lastChild;)e.removeChild(s);if(typeof l=="function"){var f=l;l=function(){var j=ns(h);f.call(j)}}var h=mi(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=h,e[zn]=h.current,_r(e.nodeType===8?e.parentNode:e),jt(function(){es(n,h,t,l)}),h}function ls(e,n,t,l,s){var o=t._reactRootContainer;if(o){var u=o;if(typeof s=="function"){var f=s;s=function(){var h=ns(u);f.call(h)}}es(n,u,e,s)}else u=Op(t,n,e,s,l);return ns(u)}ma=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=fr(n.pendingLanes);t!==0&&(Us(n,t|1),Je(n,Ee()),(ae&6)===0&&(Yt=Ee()+500,et()))}break;case 13:jt(function(){var l=Fn(e,1);if(l!==null){var s=Qe();En(l,e,1,s)}}),gi(e,1)}},Bs=function(e){if(e.tag===13){var n=Fn(e,134217728);if(n!==null){var t=Qe();En(n,e,134217728,t)}gi(e,134217728)}},ga=function(e){if(e.tag===13){var n=ot(e),t=Fn(e,n);if(t!==null){var l=Qe();En(t,e,n,l)}gi(e,n)}},xa=function(){return me},ya=function(e,n){var t=me;try{return me=e,n()}finally{me=t}},As=function(e,n,t){switch(n){case"input":if(Ps(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var s=wl(l);if(!s)throw Error(c(90));yn(l),Ps(l,s)}}}break;case"textarea":Gi(e,t);break;case"select":n=t.value,n!=null&&_t(e,!!t.multiple,n,!1)}},ta=ci,ra=jt;var Tp={usingClientEntryPoint:!1,Events:[Rr,Mt,wl,ea,na,ci]},Hr={findFiberByHostInstance:ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ia(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{tl=ss.inject(Ip),Nn=ss}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp,Xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yi(n))throw Error(c(200));return bp(e,n,null,t)},Xe.createRoot=function(e,n){if(!yi(e))throw Error(c(299));var t=!1,l="",s=Au;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=mi(e,1,!1,null,null,t,!1,l,s),e[zn]=n.current,_r(e.nodeType===8?e.parentNode:e),new xi(n)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ia(n),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return jt(e)},Xe.hydrate=function(e,n,t){if(!rs(n))throw Error(c(200));return ls(null,e,n,!0,t)},Xe.hydrateRoot=function(e,n,t){if(!yi(e))throw Error(c(405));var l=t!=null&&t.hydratedSources||null,s=!1,o="",u=Au;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),n=Tu(n,null,e,1,t??null,s,!1,o,u),e[zn]=n.current,_r(e),l)for(e=0;e<l.length;e++)t=l[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new ts(n)},Xe.render=function(e,n,t){if(!rs(n))throw Error(c(200));return ls(null,e,n,!1,t)},Xe.unmountComponentAtNode=function(e){if(!rs(e))throw Error(c(40));return e._reactRootContainer?(jt(function(){ls(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1},Xe.unstable_batchedUpdates=ci,Xe.unstable_renderSubtreeIntoContainer=function(e,n,t,l){if(!rs(t))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return ls(e,n,t,!1,l)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var Vu;function Bp(){if(Vu)return wi.exports;Vu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),wi.exports=Up(),wi.exports}var Hu;function Vp(){if(Hu)return os;Hu=1;var i=Bp();return os.createRoot=i.createRoot,os.hydrateRoot=i.hydrateRoot,os}var Hp=Vp(),Ze=function(){return Ze=Object.assign||function(a){for(var c,d=1,m=arguments.length;d<m;d++){c=arguments[d];for(var w in c)Object.prototype.hasOwnProperty.call(c,w)&&(a[w]=c[w])}return a},Ze.apply(this,arguments)};function Kr(i,a,c){if(c||arguments.length===2)for(var d=0,m=a.length,w;d<m;d++)(w||!(d in a))&&(w||(w=Array.prototype.slice.call(a,0,d)),w[d]=a[d]);return i.concat(w||Array.prototype.slice.call(a))}var je="-ms-",Gr="-moz-",he="-webkit-",cd="comm",vs="rule",Li="decl",Wp="@import",ud="@keyframes",Qp="@layer",dd=Math.abs,$i=String.fromCharCode,Ni=Object.assign;function Gp(i,a){return De(i,0)^45?(((a<<2^De(i,0))<<2^De(i,1))<<2^De(i,2))<<2^De(i,3):0}function fd(i){return i.trim()}function Hn(i,a){return(i=a.exec(i))?i[0]:i}function X(i,a,c){return i.replace(a,c)}function cs(i,a,c){return i.indexOf(a,c)}function De(i,a){return i.charCodeAt(a)|0}function er(i,a,c){return i.slice(a,c)}function In(i){return i.length}function pd(i){return i.length}function Qr(i,a){return a.push(i),i}function Kp(i,a){return i.map(a).join("")}function Wu(i,a){return i.filter(function(c){return!Hn(c,a)})}var js=1,nr=1,hd=0,gn=0,Ne=0,sr="";function ws(i,a,c,d,m,w,P,A){return{value:i,root:a,parent:c,type:d,props:m,children:w,line:js,column:nr,length:P,return:"",siblings:A}}function ut(i,a){return Ni(ws("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},a)}function Xt(i){for(;i.root;)i=ut(i.root,{children:[i]});Qr(i,i.siblings)}function qp(){return Ne}function Yp(){return Ne=gn>0?De(sr,--gn):0,nr--,Ne===10&&(nr=1,js--),Ne}function _n(){return Ne=gn<hd?De(sr,gn++):0,nr++,Ne===10&&(nr=1,js++),Ne}function Et(){return De(sr,gn)}function us(){return gn}function ks(i,a){return er(sr,i,a)}function bi(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jp(i){return js=nr=1,hd=In(sr=i),gn=0,[]}function Xp(i){return sr="",i}function Ci(i){return fd(ks(gn-1,Ri(i===91?i+2:i===40?i+1:i)))}function Zp(i){for(;(Ne=Et())&&Ne<33;)_n();return bi(i)>2||bi(Ne)>3?"":" "}function eh(i,a){for(;--a&&_n()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return ks(i,us()+(a<6&&Et()==32&&_n()==32))}function Ri(i){for(;_n();)switch(Ne){case i:return gn;case 34:case 39:i!==34&&i!==39&&Ri(Ne);break;case 40:i===41&&Ri(i);break;case 92:_n();break}return gn}function nh(i,a){for(;_n()&&i+Ne!==57;)if(i+Ne===84&&Et()===47)break;return"/*"+ks(a,gn-1)+"*"+$i(i===47?i:_n())}function th(i){for(;!bi(Et());)_n();return ks(i,gn)}function rh(i){return Xp(ds("",null,null,null,[""],i=Jp(i),0,[0],i))}function ds(i,a,c,d,m,w,P,A,N){for(var Q=0,H=0,L=P,$=0,G=0,re=0,W=1,Y=1,pe=1,ie=0,le="",Z=m,de=w,K=d,B=le;Y;)switch(re=ie,ie=_n()){case 40:if(re!=108&&De(B,L-1)==58){cs(B+=X(Ci(ie),"&","&\f"),"&\f",dd(Q?A[Q-1]:0))!=-1&&(pe=-1);break}case 34:case 39:case 91:B+=Ci(ie);break;case 9:case 10:case 13:case 32:B+=Zp(re);break;case 92:B+=eh(us()-1,7);continue;case 47:switch(Et()){case 42:case 47:Qr(lh(nh(_n(),us()),a,c,N),N);break;default:B+="/"}break;case 123*W:A[Q++]=In(B)*pe;case 125*W:case 59:case 0:switch(ie){case 0:case 125:Y=0;case 59+H:pe==-1&&(B=X(B,/\f/g,"")),G>0&&In(B)-L&&Qr(G>32?Gu(B+";",d,c,L-1,N):Gu(X(B," ","")+";",d,c,L-2,N),N);break;case 59:B+=";";default:if(Qr(K=Qu(B,a,c,Q,H,m,A,le,Z=[],de=[],L,w),w),ie===123)if(H===0)ds(B,a,K,K,Z,w,L,A,de);else switch($===99&&De(B,3)===110?100:$){case 100:case 108:case 109:case 115:ds(i,K,K,d&&Qr(Qu(i,K,K,0,0,m,A,le,m,Z=[],L,de),de),m,de,L,A,d?Z:de);break;default:ds(B,K,K,K,[""],de,0,A,de)}}Q=H=G=0,W=pe=1,le=B="",L=P;break;case 58:L=1+In(B),G=re;default:if(W<1){if(ie==123)--W;else if(ie==125&&W++==0&&Yp()==125)continue}switch(B+=$i(ie),ie*W){case 38:pe=H>0?1:(B+="\f",-1);break;case 44:A[Q++]=(In(B)-1)*pe,pe=1;break;case 64:Et()===45&&(B+=Ci(_n())),$=Et(),H=L=In(le=B+=th(us())),ie++;break;case 45:re===45&&In(B)==2&&(W=0)}}return w}function Qu(i,a,c,d,m,w,P,A,N,Q,H,L){for(var $=m-1,G=m===0?w:[""],re=pd(G),W=0,Y=0,pe=0;W<d;++W)for(var ie=0,le=er(i,$+1,$=dd(Y=P[W])),Z=i;ie<re;++ie)(Z=fd(Y>0?G[ie]+" "+le:X(le,/&\f/g,G[ie])))&&(N[pe++]=Z);return ws(i,a,c,m===0?vs:A,N,Q,H,L)}function lh(i,a,c,d){return ws(i,a,c,cd,$i(qp()),er(i,2,-2),0,d)}function Gu(i,a,c,d,m){return ws(i,a,c,Li,er(i,0,d),er(i,d+1,-1),d,m)}function md(i,a,c){switch(Gp(i,a)){case 5103:return he+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+i+i;case 4789:return Gr+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return he+i+Gr+i+je+i+i;case 5936:switch(De(i,a+11)){case 114:return he+i+je+X(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return he+i+je+X(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return he+i+je+X(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return he+i+je+i+i;case 6165:return he+i+je+"flex-"+i+i;case 5187:return he+i+X(i,/(\w+).+(:[^]+)/,he+"box-$1$2"+je+"flex-$1$2")+i;case 5443:return he+i+je+"flex-item-"+X(i,/flex-|-self/g,"")+(Hn(i,/flex-|baseline/)?"":je+"grid-row-"+X(i,/flex-|-self/g,""))+i;case 4675:return he+i+je+"flex-line-pack"+X(i,/align-content|flex-|-self/g,"")+i;case 5548:return he+i+je+X(i,"shrink","negative")+i;case 5292:return he+i+je+X(i,"basis","preferred-size")+i;case 6060:return he+"box-"+X(i,"-grow","")+he+i+je+X(i,"grow","positive")+i;case 4554:return he+X(i,/([^-])(transform)/g,"$1"+he+"$2")+i;case 6187:return X(X(X(i,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),i,"")+i;case 5495:case 3959:return X(i,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return X(X(i,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+i+i;case 4200:if(!Hn(i,/flex-|baseline/))return je+"grid-column-align"+er(i,a)+i;break;case 2592:case 3360:return je+X(i,"template-","")+i;case 4384:case 3616:return c&&c.some(function(d,m){return a=m,Hn(d.props,/grid-\w+-end/)})?~cs(i+(c=c[a].value),"span",0)?i:je+X(i,"-start","")+i+je+"grid-row-span:"+(~cs(c,"span",0)?Hn(c,/\d+/):+Hn(c,/\d+/)-+Hn(i,/\d+/))+";":je+X(i,"-start","")+i;case 4896:case 4128:return c&&c.some(function(d){return Hn(d.props,/grid-\w+-start/)})?i:je+X(X(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return X(i,/(.+)-inline(.+)/,he+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(In(i)-1-a>6)switch(De(i,a+1)){case 109:if(De(i,a+4)!==45)break;case 102:return X(i,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+Gr+(De(i,a+3)==108?"$3":"$2-$3"))+i;case 115:return~cs(i,"stretch",0)?md(X(i,"stretch","fill-available"),a,c)+i:i}break;case 5152:case 5920:return X(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,m,w,P,A,N,Q){return je+m+":"+w+Q+(P?je+m+"-span:"+(A?N:+N-+w)+Q:"")+i});case 4949:if(De(i,a+6)===121)return X(i,":",":"+he)+i;break;case 6444:switch(De(i,De(i,14)===45?18:11)){case 120:return X(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(De(i,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+je+"$2box$3")+i;case 100:return X(i,":",":"+je)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return X(i,"scroll-","scroll-snap-")+i}return i}function hs(i,a){for(var c="",d=0;d<i.length;d++)c+=a(i[d],d,i,a)||"";return c}function sh(i,a,c,d){switch(i.type){case Qp:if(i.children.length)break;case Wp:case Li:return i.return=i.return||i.value;case cd:return"";case ud:return i.return=i.value+"{"+hs(i.children,d)+"}";case vs:if(!In(i.value=i.props.join(",")))return""}return In(c=hs(i.children,d))?i.return=i.value+"{"+c+"}":""}function oh(i){var a=pd(i);return function(c,d,m,w){for(var P="",A=0;A<a;A++)P+=i[A](c,d,m,w)||"";return P}}function ih(i){return function(a){a.root||(a=a.return)&&i(a)}}function ah(i,a,c,d){if(i.length>-1&&!i.return)switch(i.type){case Li:i.return=md(i.value,i.length,c);return;case ud:return hs([ut(i,{value:X(i.value,"@","@"+he)})],d);case vs:if(i.length)return Kp(c=i.props,function(m){switch(Hn(m,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xt(ut(i,{props:[X(m,/:(read-\w+)/,":"+Gr+"$1")]})),Xt(ut(i,{props:[m]})),Ni(i,{props:Wu(c,d)});break;case"::placeholder":Xt(ut(i,{props:[X(m,/:(plac\w+)/,":"+he+"input-$1")]})),Xt(ut(i,{props:[X(m,/:(plac\w+)/,":"+Gr+"$1")]})),Xt(ut(i,{props:[X(m,/:(plac\w+)/,je+"input-$1")]})),Xt(ut(i,{props:[m]})),Ni(i,{props:Wu(c,d)});break}return""})}}var ch={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},on={},tr=typeof process<"u"&&on!==void 0&&(on.REACT_APP_SC_ATTR||on.SC_ATTR)||"data-styled",gd="active",xd="data-styled-version",Ss="6.1.19",Fi=`/*!sc*/
`,ms=typeof window<"u"&&typeof document<"u",uh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==""?on.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&on.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.SC_DISABLE_SPEEDY!==void 0&&on.SC_DISABLE_SPEEDY!==""&&on.SC_DISABLE_SPEEDY!=="false"&&on.SC_DISABLE_SPEEDY),Cs=Object.freeze([]),rr=Object.freeze({});function dh(i,a,c){return c===void 0&&(c=rr),i.theme!==c.theme&&i.theme||a||c.theme}var yd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ph=/(^-|-$)/g;function Ku(i){return i.replace(fh,"-").replace(ph,"")}var hh=/(a)(d)/gi,is=52,qu=function(i){return String.fromCharCode(i+(i>25?39:97))};function Oi(i){var a,c="";for(a=Math.abs(i);a>is;a=a/is|0)c=qu(a%is)+c;return(qu(a%is)+c).replace(hh,"$1-$2")}var Ei,vd=5381,Zt=function(i,a){for(var c=a.length;c;)i=33*i^a.charCodeAt(--c);return i},jd=function(i){return Zt(vd,i)};function wd(i){return Oi(jd(i)>>>0)}function mh(i){return i.displayName||i.name||"Component"}function Pi(i){return typeof i=="string"&&!0}var kd=typeof Symbol=="function"&&Symbol.for,Sd=kd?Symbol.for("react.memo"):60115,gh=kd?Symbol.for("react.forward_ref"):60112,xh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vh=((Ei={})[gh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ei[Sd]=Cd,Ei);function Yu(i){return("type"in(a=i)&&a.type.$$typeof)===Sd?Cd:"$$typeof"in i?vh[i.$$typeof]:xh;var a}var jh=Object.defineProperty,wh=Object.getOwnPropertyNames,Ju=Object.getOwnPropertySymbols,kh=Object.getOwnPropertyDescriptor,Sh=Object.getPrototypeOf,Xu=Object.prototype;function Ed(i,a,c){if(typeof a!="string"){if(Xu){var d=Sh(a);d&&d!==Xu&&Ed(i,d,c)}var m=wh(a);Ju&&(m=m.concat(Ju(a)));for(var w=Yu(i),P=Yu(a),A=0;A<m.length;++A){var N=m[A];if(!(N in yh||c&&c[N]||P&&N in P||w&&N in w)){var Q=kh(a,N);try{jh(i,N,Q)}catch{}}}}return i}function lr(i){return typeof i=="function"}function Ui(i){return typeof i=="object"&&"styledComponentId"in i}function Ct(i,a){return i&&a?"".concat(i," ").concat(a):i||a||""}function Ti(i,a){if(i.length===0)return"";for(var c=i[0],d=1;d<i.length;d++)c+=i[d];return c}function qr(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ii(i,a,c){if(c===void 0&&(c=!1),!c&&!qr(i)&&!Array.isArray(i))return a;if(Array.isArray(a))for(var d=0;d<a.length;d++)i[d]=Ii(i[d],a[d]);else if(qr(a))for(var d in a)i[d]=Ii(i[d],a[d]);return i}function Bi(i,a){Object.defineProperty(i,"toString",{value:a})}function Yr(i){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Ch=function(){function i(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return i.prototype.indexOfGroup=function(a){for(var c=0,d=0;d<a;d++)c+=this.groupSizes[d];return c},i.prototype.insertRules=function(a,c){if(a>=this.groupSizes.length){for(var d=this.groupSizes,m=d.length,w=m;a>=w;)if((w<<=1)<0)throw Yr(16,"".concat(a));this.groupSizes=new Uint32Array(w),this.groupSizes.set(d),this.length=w;for(var P=m;P<w;P++)this.groupSizes[P]=0}for(var A=this.indexOfGroup(a+1),N=(P=0,c.length);P<N;P++)this.tag.insertRule(A,c[P])&&(this.groupSizes[a]++,A++)},i.prototype.clearGroup=function(a){if(a<this.length){var c=this.groupSizes[a],d=this.indexOfGroup(a),m=d+c;this.groupSizes[a]=0;for(var w=d;w<m;w++)this.tag.deleteRule(d)}},i.prototype.getGroup=function(a){var c="";if(a>=this.length||this.groupSizes[a]===0)return c;for(var d=this.groupSizes[a],m=this.indexOfGroup(a),w=m+d,P=m;P<w;P++)c+="".concat(this.tag.getRule(P)).concat(Fi);return c},i}(),fs=new Map,gs=new Map,ps=1,as=function(i){if(fs.has(i))return fs.get(i);for(;gs.has(ps);)ps++;var a=ps++;return fs.set(i,a),gs.set(a,i),a},Eh=function(i,a){ps=a+1,fs.set(i,a),gs.set(a,i)},Ph="style[".concat(tr,"][").concat(xd,'="').concat(Ss,'"]'),_h=new RegExp("^".concat(tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Nh=function(i,a,c){for(var d,m=c.split(","),w=0,P=m.length;w<P;w++)(d=m[w])&&i.registerName(a,d)},bh=function(i,a){for(var c,d=((c=a.textContent)!==null&&c!==void 0?c:"").split(Fi),m=[],w=0,P=d.length;w<P;w++){var A=d[w].trim();if(A){var N=A.match(_h);if(N){var Q=0|parseInt(N[1],10),H=N[2];Q!==0&&(Eh(H,Q),Nh(i,H,N[3]),i.getTag().insertRules(Q,m)),m.length=0}else m.push(A)}}},Zu=function(i){for(var a=document.querySelectorAll(Ph),c=0,d=a.length;c<d;c++){var m=a[c];m&&m.getAttribute(tr)!==gd&&(bh(i,m),m.parentNode&&m.parentNode.removeChild(m))}};function Rh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Pd=function(i){var a=document.head,c=i||a,d=document.createElement("style"),m=function(A){var N=Array.from(A.querySelectorAll("style[".concat(tr,"]")));return N[N.length-1]}(c),w=m!==void 0?m.nextSibling:null;d.setAttribute(tr,gd),d.setAttribute(xd,Ss);var P=Rh();return P&&d.setAttribute("nonce",P),c.insertBefore(d,w),d},Oh=function(){function i(a){this.element=Pd(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var d=document.styleSheets,m=0,w=d.length;m<w;m++){var P=d[m];if(P.ownerNode===c)return P}throw Yr(17)}(this.element),this.length=0}return i.prototype.insertRule=function(a,c){try{return this.sheet.insertRule(c,a),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},i.prototype.getRule=function(a){var c=this.sheet.cssRules[a];return c&&c.cssText?c.cssText:""},i}(),Th=function(){function i(a){this.element=Pd(a),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(a,c){if(a<=this.length&&a>=0){var d=document.createTextNode(c);return this.element.insertBefore(d,this.nodes[a]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},i.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},i}(),Ih=function(){function i(a){this.rules=[],this.length=0}return i.prototype.insertRule=function(a,c){return a<=this.length&&(this.rules.splice(a,0,c),this.length++,!0)},i.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},i.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},i}(),ed=ms,Ah={isServer:!ms,useCSSOMInjection:!uh},_d=function(){function i(a,c,d){a===void 0&&(a=rr),c===void 0&&(c={});var m=this;this.options=Ze(Ze({},Ah),a),this.gs=c,this.names=new Map(d),this.server=!!a.isServer,!this.server&&ms&&ed&&(ed=!1,Zu(this)),Bi(this,function(){return function(w){for(var P=w.getTag(),A=P.length,N="",Q=function(L){var $=function(pe){return gs.get(pe)}(L);if($===void 0)return"continue";var G=w.names.get($),re=P.getGroup(L);if(G===void 0||!G.size||re.length===0)return"continue";var W="".concat(tr,".g").concat(L,'[id="').concat($,'"]'),Y="";G!==void 0&&G.forEach(function(pe){pe.length>0&&(Y+="".concat(pe,","))}),N+="".concat(re).concat(W,'{content:"').concat(Y,'"}').concat(Fi)},H=0;H<A;H++)Q(H);return N}(m)})}return i.registerId=function(a){return as(a)},i.prototype.rehydrate=function(){!this.server&&ms&&Zu(this)},i.prototype.reconstructWithOptions=function(a,c){return c===void 0&&(c=!0),new i(Ze(Ze({},this.options),a),this.gs,c&&this.names||void 0)},i.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(a=function(c){var d=c.useCSSOMInjection,m=c.target;return c.isServer?new Ih(m):d?new Oh(m):new Th(m)}(this.options),new Ch(a)));var a},i.prototype.hasNameForId=function(a,c){return this.names.has(a)&&this.names.get(a).has(c)},i.prototype.registerName=function(a,c){if(as(a),this.names.has(a))this.names.get(a).add(c);else{var d=new Set;d.add(c),this.names.set(a,d)}},i.prototype.insertRules=function(a,c,d){this.registerName(a,c),this.getTag().insertRules(as(a),d)},i.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},i.prototype.clearRules=function(a){this.getTag().clearGroup(as(a)),this.clearNames(a)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Dh=/&/g,zh=/^\s*\/\/.*$/gm;function Nd(i,a){return i.map(function(c){return c.type==="rule"&&(c.value="".concat(a," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(a," ")),c.props=c.props.map(function(d){return"".concat(a," ").concat(d)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Nd(c.children,a)),c})}function Mh(i){var a,c,d,m=rr,w=m.options,P=w===void 0?rr:w,A=m.plugins,N=A===void 0?Cs:A,Q=function($,G,re){return re.startsWith(c)&&re.endsWith(c)&&re.replaceAll(c,"").length>0?".".concat(a):$},H=N.slice();H.push(function($){$.type===vs&&$.value.includes("&")&&($.props[0]=$.props[0].replace(Dh,c).replace(d,Q))}),P.prefix&&H.push(ah),H.push(sh);var L=function($,G,re,W){G===void 0&&(G=""),re===void 0&&(re=""),W===void 0&&(W="&"),a=W,c=G,d=new RegExp("\\".concat(c,"\\b"),"g");var Y=$.replace(zh,""),pe=rh(re||G?"".concat(re," ").concat(G," { ").concat(Y," }"):Y);P.namespace&&(pe=Nd(pe,P.namespace));var ie=[];return hs(pe,oh(H.concat(ih(function(le){return ie.push(le)})))),ie};return L.hash=N.length?N.reduce(function($,G){return G.name||Yr(15),Zt($,G.name)},vd).toString():"",L}var Lh=new _d,Ai=Mh(),bd=se.createContext({shouldForwardProp:void 0,styleSheet:Lh,stylis:Ai});bd.Consumer;se.createContext(void 0);function nd(){return Mi.useContext(bd)}var Rd=function(){function i(a,c){var d=this;this.inject=function(m,w){w===void 0&&(w=Ai);var P=d.name+w.hash;m.hasNameForId(d.id,P)||m.insertRules(d.id,P,w(d.rules,P,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=c,Bi(this,function(){throw Yr(12,String(d.name))})}return i.prototype.getName=function(a){return a===void 0&&(a=Ai),this.name+a.hash},i}(),$h=function(i){return i>="A"&&i<="Z"};function td(i){for(var a="",c=0;c<i.length;c++){var d=i[c];if(c===1&&d==="-"&&i[0]==="-")return i;$h(d)?a+="-"+d.toLowerCase():a+=d}return a.startsWith("ms-")?"-"+a:a}var Od=function(i){return i==null||i===!1||i===""},Td=function(i){var a,c,d=[];for(var m in i){var w=i[m];i.hasOwnProperty(m)&&!Od(w)&&(Array.isArray(w)&&w.isCss||lr(w)?d.push("".concat(td(m),":"),w,";"):qr(w)?d.push.apply(d,Kr(Kr(["".concat(m," {")],Td(w),!1),["}"],!1)):d.push("".concat(td(m),": ").concat((a=m,(c=w)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||a in ch||a.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return d};function Pt(i,a,c,d){if(Od(i))return[];if(Ui(i))return[".".concat(i.styledComponentId)];if(lr(i)){if(!lr(w=i)||w.prototype&&w.prototype.isReactComponent||!a)return[i];var m=i(a);return Pt(m,a,c,d)}var w;return i instanceof Rd?c?(i.inject(c,d),[i.getName(d)]):[i]:qr(i)?Td(i):Array.isArray(i)?Array.prototype.concat.apply(Cs,i.map(function(P){return Pt(P,a,c,d)})):[i.toString()]}function Fh(i){for(var a=0;a<i.length;a+=1){var c=i[a];if(lr(c)&&!Ui(c))return!1}return!0}var Uh=jd(Ss),Bh=function(){function i(a,c,d){this.rules=a,this.staticRulesId="",this.isStatic=(d===void 0||d.isStatic)&&Fh(a),this.componentId=c,this.baseHash=Zt(Uh,c),this.baseStyle=d,_d.registerId(c)}return i.prototype.generateAndInjectStyles=function(a,c,d){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,c,d):"";if(this.isStatic&&!d.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))m=Ct(m,this.staticRulesId);else{var w=Ti(Pt(this.rules,a,c,d)),P=Oi(Zt(this.baseHash,w)>>>0);if(!c.hasNameForId(this.componentId,P)){var A=d(w,".".concat(P),void 0,this.componentId);c.insertRules(this.componentId,P,A)}m=Ct(m,P),this.staticRulesId=P}else{for(var N=Zt(this.baseHash,d.hash),Q="",H=0;H<this.rules.length;H++){var L=this.rules[H];if(typeof L=="string")Q+=L;else if(L){var $=Ti(Pt(L,a,c,d));N=Zt(N,$+H),Q+=$}}if(Q){var G=Oi(N>>>0);c.hasNameForId(this.componentId,G)||c.insertRules(this.componentId,G,d(Q,".".concat(G),void 0,this.componentId)),m=Ct(m,G)}}return m},i}(),Id=se.createContext(void 0);Id.Consumer;var _i={};function Vh(i,a,c){var d=Ui(i),m=i,w=!Pi(i),P=a.attrs,A=P===void 0?Cs:P,N=a.componentId,Q=N===void 0?function(Z,de){var K=typeof Z!="string"?"sc":Ku(Z);_i[K]=(_i[K]||0)+1;var B="".concat(K,"-").concat(wd(Ss+K+_i[K]));return de?"".concat(de,"-").concat(B):B}(a.displayName,a.parentComponentId):N,H=a.displayName,L=H===void 0?function(Z){return Pi(Z)?"styled.".concat(Z):"Styled(".concat(mh(Z),")")}(i):H,$=a.displayName&&a.componentId?"".concat(Ku(a.displayName),"-").concat(a.componentId):a.componentId||Q,G=d&&m.attrs?m.attrs.concat(A).filter(Boolean):A,re=a.shouldForwardProp;if(d&&m.shouldForwardProp){var W=m.shouldForwardProp;if(a.shouldForwardProp){var Y=a.shouldForwardProp;re=function(Z,de){return W(Z,de)&&Y(Z,de)}}else re=W}var pe=new Bh(c,$,d?m.componentStyle:void 0);function ie(Z,de){return function(K,B,be){var en=K.attrs,xn=K.componentStyle,An=K.defaultProps,an=K.foldedComponentIds,He=K.styledComponentId,nn=K.target,cn=se.useContext(Id),$e=nd(),ge=K.shouldForwardProp||$e.shouldForwardProp,b=dh(B,cn,An)||rr,M=function(te,ee,fe){for(var oe,ce=Ze(Ze({},ee),{className:void 0,theme:fe}),ze=0;ze<te.length;ze+=1){var Dn=lr(oe=te[ze])?oe(ce):oe;for(var yn in Dn)ce[yn]=yn==="className"?Ct(ce[yn],Dn[yn]):yn==="style"?Ze(Ze({},ce[yn]),Dn[yn]):Dn[yn]}return ee.className&&(ce.className=Ct(ce.className,ee.className)),ce}(en,B,b),R=M.as||nn,x={};for(var k in M)M[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&M.theme===b||(k==="forwardedAs"?x.as=M.forwardedAs:ge&&!ge(k,R)||(x[k]=M[k]));var q=function(te,ee){var fe=nd(),oe=te.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return oe}(xn,M),J=Ct(an,He);return q&&(J+=" "+q),M.className&&(J+=" "+M.className),x[Pi(R)&&!yd.has(R)?"class":"className"]=J,be&&(x.ref=be),Mi.createElement(R,x)}(le,Z,de)}ie.displayName=L;var le=se.forwardRef(ie);return le.attrs=G,le.componentStyle=pe,le.displayName=L,le.shouldForwardProp=re,le.foldedComponentIds=d?Ct(m.foldedComponentIds,m.styledComponentId):"",le.styledComponentId=$,le.target=d?m.target:i,Object.defineProperty(le,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=d?function(de){for(var K=[],B=1;B<arguments.length;B++)K[B-1]=arguments[B];for(var be=0,en=K;be<en.length;be++)Ii(de,en[be],!0);return de}({},m.defaultProps,Z):Z}}),Bi(le,function(){return".".concat(le.styledComponentId)}),w&&Ed(le,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),le}function rd(i,a){for(var c=[i[0]],d=0,m=a.length;d<m;d+=1)c.push(a[d],i[d+1]);return c}var ld=function(i){return Object.assign(i,{isCss:!0})};function Ad(i){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];if(lr(i)||qr(i))return ld(Pt(rd(Cs,Kr([i],a,!0))));var d=i;return a.length===0&&d.length===1&&typeof d[0]=="string"?Pt(d):ld(Pt(rd(d,a)))}function Di(i,a,c){if(c===void 0&&(c=rr),!a)throw Yr(1,a);var d=function(m){for(var w=[],P=1;P<arguments.length;P++)w[P-1]=arguments[P];return i(a,c,Ad.apply(void 0,Kr([m],w,!1)))};return d.attrs=function(m){return Di(i,a,Ze(Ze({},c),{attrs:Array.prototype.concat(c.attrs,m).filter(Boolean)}))},d.withConfig=function(m){return Di(i,a,Ze(Ze({},c),m))},d}var Dd=function(i){return Di(Vh,i)},Pn=Dd;yd.forEach(function(i){Pn[i]=Dd(i)});function Hh(i){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];var d=Ti(Ad.apply(void 0,Kr([i],a,!1))),m=wd(d);return new Rd(m,d)}const Wh=Hh`
  from { box-shadow: 0 0 0 0 rgba(99,102,241,0.3); }
  to   { box-shadow: 0 0 0 8px rgba(99,102,241,0.0); }
`,p={Topic:Pn.section`
        --card: #121622;
        --muted: #9aa3b2;
        --accent: #6366f1;
        --expose: #0f0;
        background: var(--card);
        border: 1px solid #1c2333;
        border-radius: 14px;
        margin: 10px 0 16px;
        overflow: hidden;
    `,Title:Pn.button`
        all: unset;
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 14px 16px;
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.2px;
        background: linear-gradient(
            180deg,
            rgba(99, 102, 241, 0.08),
            transparent
        );
        border-bottom: 1px solid #1a2130;
        &:hover {
            background: rgba(99, 102, 241, 0.1);
        }
        &:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: -2px;
        }
    `,Arrow:Pn.span`
        display: inline-block;
        width: 16px;
        text-align: center;
        color: var(--accent);
        transition: transform 180ms ease;
        transform: rotate(0deg);
        &[data-open="true"] {
            transform: rotate(90deg);
        }
    `,Panel:Pn.div`
        /* Animated collapse using grid-row trick */
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 220ms ease;
        &[data-open="true"] {
            grid-template-rows: 1fr;
        }
        > div {
            overflow: hidden;
        }
    `,Content:Pn.div`
        padding: 16px;
        font-size: 15px;
        h3 {
            /* margin: 15px 0 8px; */
            font-size: 16px;
            color: #c7d2fe;
        }
        p,
        li {
            color: #e5e7eb;
        }
        p {
            margin-bottom: 30px;
        }
        ul {
            margin: 8px 0 14px 18px;
        }
        em {
            color: #cbd5e1;
        }
    `,Code:Pn.pre`
        margin: 10px 0 16px;
        padding: 15px 16px;
        background: #0b0f19;
        border: 1px solid #1c2333;
        border-radius: 12px;
        overflow: auto;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: 13px;
        line-height: 1.5;
        position: relative;

        &:before {
            content: "example";
            position: absolute;
            top: -0px;
            right: 10px;
            font-size: 11px;
            /* color: var(--muted); */
            color: var(--expose);
            background: #0d0f14;
            padding: 2px 6px;
            border-radius: 6px;
            border: 1px solid #1c2333;
            animation: ${Wh} 2s ease-out 1;
        }
    `,Kbd:Pn.code`
        padding: 1px 6px;
        border-radius: 6px;
        background: #0b0f19;
        border: 1px solid #1c2333;
        font-size: 0.9em;
    `,Divider:Pn.hr`
        border: none;
        border-top: 1px dashed #263049;
        margin: 16px 0;
    `};function Qh({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="react-definition";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"React: definition & inspiration"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(Gh,{})})})]})}function Gh(){return r.jsxs(p.Content,{children:[r.jsx("h3",{children:"What is React (how I define it)"}),r.jsxs("p",{children:["React is a ",r.jsx("strong",{children:"JavaScript library for building user interfaces"}),". I use it to describe UI as a pure function of state: ",r.jsx("em",{children:"UI = f(state)"}),". Instead of manually manipulating the DOM step-by-step, I declare how the UI should look for a given state and React takes care of updating the browser efficiently."]}),r.jsxs("p",{children:["It’s ",r.jsx("strong",{children:"component-based"})," (I build small, reusable components),"," ",r.jsx("strong",{children:"declarative"})," (I say “what”, not “how”), and it prefers"," ",r.jsx("strong",{children:"one-way data flow"})," (data goes down from parent to child)."]}),r.jsx("h3",{children:"Why React was created (the inspiration I keep in mind)"}),r.jsxs("p",{children:["React originated to tame complex, interactive UIs where frequent state changes made imperative DOM code fragile. The big idea was: treat the DOM as a ",r.jsx("em",{children:"result"})," of state, reconcile differences between the previous and next “virtual tree”, and update only what changed. This approach simplified mental load and reduced UI bugs caused by manual DOM ops."]}),r.jsx("p",{children:"Composition over inheritance, predictable data flow, and a fast diffing strategy (keys + identity) are the core inspirations that shaped how I write React apps today."}),r.jsx("h3",{children:"Mini example (UI = f(state))"}),r.jsx(p.Code,{"aria-label":"UI = f(state)",children:String.raw`function Hello() {
  const [name, setName] = React.useState("Ash");

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
// I declare what the UI should be for the current 'name'.
// React handles the DOM updates when 'name' changes.`}),r.jsx("h3",{children:"Where I reach for React (and where I don't)"}),r.jsx("p",{children:"I reach for React when I’m building interactive dashboards, forms, and views with lots of dynamic state. If a page is mostly static content, plain HTML/CSS (or a lightweight templating setup) can be enough; I don’t force React where it doesn’t add value."}),r.jsxs("p",{children:["That’s my short, practical mental picture: ",r.jsx("strong",{children:"components + state → declarative UI"}),", with React efficiently reconciling changes under the hood."]})]})}function Kh({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="vite-install";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Vite install (create app, run dev)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(qh,{})})})]})}function qh(){return r.jsxs(p.Content,{children:[r.jsx("h3",{children:"Prereq (1-time)"}),r.jsx("p",{children:"I generally work on node version 18."}),r.jsx(p.Code,{"aria-label":"check node",children:String.raw`node -v   # v18.20.4`}),r.jsx("h3",{children:"Create a new React app (interactive)"}),r.jsx("p",{children:"I usually run the interactive creator and pick React."}),r.jsx(p.Code,{"aria-label":"create vite app",children:String.raw`npm create vite@latest

# Prompts I pick:
# ✔ Project name: » reactjs-handbook
# ✔ Select a framework: » React
# ✔ Select a variant: » JavaScript
`}),r.jsx("h4",{children:"One-liner (skip prompts)"}),r.jsx(p.Code,{"aria-label":"one-liner create",children:String.raw`npm create vite@latest reactjs-handbook -- --template react`}),r.jsx("h3",{children:"Install & run locally"}),r.jsx(p.Code,{"aria-label":"install + dev",children:String.raw`cd reactjs-handbook
npm i
npm run dev   # opens http://localhost:5173`}),r.jsx("h3",{children:"Handy flags I use while coding"}),r.jsx(p.Code,{"aria-label":"dev flags",children:String.raw`# choose a different port if 5173 is busy
npm run dev -- --port 5174`}),r.jsx("h3",{children:"Quick notes I keep in mind"}),r.jsx("ul",{children:r.jsxs("li",{children:["After first run, I commit my own structure and add ",r.jsx("code",{children:"styled-components"})," when I start UI."]})}),r.jsx(p.Divider,{}),r.jsxs("p",{children:["That's it: create → install → ",r.jsx("strong",{children:"npm run dev"})," at ",r.jsx("code",{children:"http://localhost:5173"}),"."]})]})}var sd=Object.freeze,Yh=Object.defineProperty,Jh=(i,a)=>sd(Yh(i,"raw",{value:sd(i.slice())})),od;function Xh({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="project-tree";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Project tree (what each file does)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(Zh,{})})})]})}function Zh(){return r.jsxs(p.Content,{children:[r.jsx("h3",{children:"My project tree (Vite + React)"}),r.jsx(p.Code,{"aria-label":"folder tree",children:String.raw`.
reactjs-handbook/
├─ public/                 # static files served as-is
│  └─ 404.html             # (only for GitHub Pages SPA refresh)
├─ src/
│  ├─ assets/              # images, svg, fonts
│  ├─ components/          # reusable UI bits (optional)
│  ├─ topics/              # each tutorial as a toggle component
│  ├─ ReactTutorial.jsx    # renders the list of topics
│  ├─ ProjectTree.jsx      # ← this topic (same folder as styled.js)
│  ├─ styled.js            # shared Styled object
│  ├─ App.jsx              # app shell
│  └─ main.jsx             # React entry
├─ index.html              # single HTML file (Vite injects scripts)
├─ package.json            # scripts & deps
├─ vite.config.js          # dev/build config, aliases
├─ .env*                   # public config (VITE_* only)
└─ README.md
`}),r.jsx("h3",{children:"What each file does (short)"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"index.html"})," - Minimal HTML with a ",r.jsx("code",{children:'<div id="root">'}),". Vite injects the built JS here."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"src/main.jsx"})," - Boot file; creates the root and renders ",r.jsx("code",{children:"<App />"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"src/App.jsx"})," - App shell; I mount ",r.jsx("code",{children:"<ReactTutorial />"})," here."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"src/ReactTutorial.jsx"})," - Lists all topic components (each one collapsible)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"src/topics/"})," - Every note lives in its own file (e.g. ",r.jsx("code",{children:"ViteInstall.jsx"}),")."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"src/styled.js"})," - Shared Styled object with primitives:",r.jsx("code",{children:"Topic"}),", ",r.jsx("code",{children:"Title"}),", ",r.jsx("code",{children:"Arrow"}),", ",r.jsx("code",{children:"Panel"}),", ",r.jsx("code",{children:"Content"}),", ",r.jsx("code",{children:"Code"}),", ",r.jsx("code",{children:"Divider"}),", etc."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"public/"})," - Files served as-is (no bundling)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"vite.config.js"})," - Aliases and build dev settings."]})]}),r.jsx("h3",{children:"index.html (tiny and clean)"}),r.jsx(p.Code,{"aria-label":"index.html",children:String.raw(od||(od=Jh([`<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS Handbook</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"><\/script>
  </body>
</html>`])))}),r.jsx("h3",{children:"main.jsx (entry)"}),r.jsx(p.Code,{"aria-label":"main.jsx",children:String.raw`import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // if I keep global styles

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}),r.jsx("h3",{children:"App.jsx (shell)"}),r.jsx(p.Code,{"aria-label":"App.jsx",children:String.raw`import React from "react";
import ReactTutorial from "./ReactTutorial";

export default function App() {
  return <ReactTutorial />;
}`}),r.jsx("h3",{children:"Tip I follow"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Keep ",r.jsx("strong",{children:"topics"})," small and focused-one concept per file."]}),r.jsxs("li",{children:["Assets go in ",r.jsx("code",{children:"src/assets"}),"; import them directly in components."]}),r.jsxs("li",{children:["Shared UI in ",r.jsx("code",{children:"components/"})," if I reuse it across topics."]})]}),r.jsx(p.Divider,{})]})}function em({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="editor-setup";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Editor setup (VS Code, extensions)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(nm,{})})})]})}function nm(){return r.jsxs(p.Content,{children:[r.jsx("h3",{children:"Extensions I install"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"ESLint"})," - dbaeumer.vscode-eslint"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Prettier - Code formatter"})," - esbenp.prettier-vscode"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Error Lens"})," - usernamehw.errorlens"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"vscode-styled-components"})," - styled-components.vscode-styled-components"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Auto Rename Tag"})," - formulahendry.auto-rename-tag"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Auto Close Tag"})," - formulahendry.auto-close-tag"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Path Intellisense"})," - christian-kohler.path-intellisense"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"ES7+ React/Redux snippets"})," - dsznajder.es7-react-js-snippets"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Git Graph"})," - mhutchie.git-graph (nice to have)"]})]}),r.jsx("h3",{children:"Workspace recommendations"}),r.jsx("p",{children:"I add this file so VS Code suggests the right extensions to anyone opening the repo."}),r.jsx(p.Code,{"aria-label":".vscode/extensions.json",children:String.raw`{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "usernamehw.errorlens",
    "styled-components.vscode-styled-components",
    "formulahendry.auto-rename-tag",
    "formulahendry.auto-close-tag",
    "christian-kohler.path-intellisense",
    "dsznajder.es7-react-js-snippets",
    "mhutchie.git-graph"
  ]
}`}),r.jsx("h3",{children:"My VS Code settings"}),r.jsx("p",{children:"Format on save + ESLint fixes; tidy imports; good highlighting for styled-components."}),r.jsx(p.Code,{"aria-label":".vscode/settings.json",children:String.raw`{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "prettier.trailingComma": "all",
  "prettier.printWidth": 100,

  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",

  "files.associations": {
    "*.js": "javascript",
    "*.jsx": "javascriptreact"
  }
}`}),r.jsx("h3",{children:"Command palette shortcuts"}),r.jsx(p.Code,{"aria-label":"commands",children:String.raw`Ctrl/Cmd + Shift + P →
> Format Document
> Restart ESLint Server
> Developer: Reload Window`}),r.jsx("h3",{children:"Notes"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Prettier handles formatting; ESLint handles code quality/fixes. I run both on save."}),r.jsx("li",{children:"The styled-components extension improves syntax highlighting inside template literals."}),r.jsx("li",{children:"VS Code auto-updates imports when files move (with the settings above)."})]}),r.jsx(p.Divider,{}),r.jsxs("p",{children:[r.jsx("em",{children:"PS:"})," My laptop is older, so I keep VS Code light - I install only essential extensions and prefer a minimal UI to save memory/CPU."]})]})}function tm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="env-files";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:".env / .env.development / .env.production"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(rm,{})})})]})}function rm(){return r.jsxs(p.Content,{children:[r.jsx("h3",{children:"What I use these files for"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:".env"})," - default values for all modes (non-secret)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:".env.development"})," - overrides when I run ",r.jsx("code",{children:"npm run dev"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:".env.production"})," - overrides when I build/serve prod."]}),r.jsxs("li",{children:[r.jsx("strong",{children:".env.local"})," - machine-specific values I don't commit (gitignored)."]})]}),r.jsx("h3",{children:"Important rule (Vite)"}),r.jsxs("p",{children:[r.jsxs("strong",{children:["Only variables prefixed with ",r.jsx("code",{children:"VITE_"})," are exposed to the browser."]})," Everything else is ignored in client code. Also, I access them via ",r.jsx("code",{children:"import.meta.env"})," (not ",r.jsx("code",{children:"process.env"}),")."]}),r.jsx("h3",{children:"Examples I actually use"}),r.jsx(p.Code,{"aria-label":".env files",children:String.raw`# .env
VITE_APP_NAME=ReactJS Handbook

# .env.development
VITE_API_BASE=http://localhost:3000
VITE_DEBUG=true

# .env.production
VITE_API_BASE=https://api.example.com
VITE_DEBUG=false

# .env.local (gitignored; for my machine)
VITE_EXPERIMENT=true`}),r.jsx("p",{children:"Read them in code like this:"}),r.jsx(p.Code,{"aria-label":"usage in code",children:String.raw`// inside React code
const name = import.meta.env.VITE_APP_NAME;
const api  = import.meta.env.VITE_API_BASE;

// Vite's built-ins:
if (import.meta.env.DEV)   console.log("dev mode");
if (import.meta.env.PROD)  console.log("prod mode");
console.log(import.meta.env.MODE);      // "development" | "production" | "staging"...
console.log(import.meta.env.BASE_URL);  // base path`}),r.jsx("h3",{children:"Load order & precedence"}),r.jsx("p",{children:"Later files override earlier ones (more specific wins):"}),r.jsxs("ol",{children:[r.jsx("li",{children:".env"}),r.jsx("li",{children:".env.local"}),r.jsxs("li",{children:[".env.",r.jsx("em",{children:"mode"})]}),r.jsxs("li",{children:[r.jsxs("strong",{children:[".env.",r.jsx("em",{children:"mode"}),".local"]})," (highest priority)"]})]}),r.jsx("h3",{children:"Switching modes (optional)"}),r.jsxs("p",{children:["Dev uses ",r.jsx("code",{children:"development"})," mode by default; build uses ",r.jsx("code",{children:"production"}),". I can opt into a custom mode:"]}),r.jsx(p.Code,{"aria-label":"custom mode",children:String.raw`vite build --mode staging   # will load .env.staging (and .env.staging.local if present)`}),r.jsx("h3",{children:"Git ignore (what I don't commit)"}),r.jsx(p.Code,{"aria-label":".gitignore",children:String.raw`.env.local
.env.*.local`}),r.jsx("h3",{children:"Quick checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Expose only public values with the ",r.jsx("code",{children:"VITE_*"})," prefix."]}),r.jsx("li",{children:"Never store secrets in frontend env files (anyone can view them in the browser)."}),r.jsxs("li",{children:["Use ",r.jsx("code",{children:".env.development"}),"/",r.jsx("code",{children:".env.production"})," for mode-specific overrides."]}),r.jsxs("li",{children:[r.jsx("code",{children:".env.local"})," stays uncommitted for machine-specific tweaks."]})]}),r.jsx(p.Divider,{})]})}function lm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="import-export-basics";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Import/export basics (named vs default)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(sm,{})})})]})}function sm(){return r.jsxs(p.Content,{children:[r.jsx("h3",{children:"How I decide"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Default export"}),": file exposes one primary thing. Import name is my choice."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Named exports"}),": file exposes multiple things. Names are explicit; great for autocomplete and refactors."]})]}),r.jsx("h3",{children:"Default export"}),r.jsx(p.Code,{"aria-label":"default export",children:String.raw`// math.js
export default function add(a, b) { return a + b; }

// usage
import add from "./math.js";      // I can name it anything
console.log(add(2, 3));`}),r.jsx("h3",{children:"Named exports"}),r.jsx(p.Code,{"aria-label":"named exports",children:String.raw`// math2.js
export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;
export function sub(a, b) { return a - b; }

// usage
import { add, mul, sub } from "./math2.js";
import { add as plus } from "./math2.js";  // rename with 'as'`}),r.jsx("h3",{children:"Mixing default + named (allowed)"}),r.jsx(p.Code,{"aria-label":"mixed exports",children:String.raw`// math3.js
export default function add(a, b) { return a + b; }
export const mul = (a, b) => a * b;

// usage
import add, { mul } from "./math3.js";`}),r.jsx("h3",{children:"Namespace import (group everything)"}),r.jsx(p.Code,{"aria-label":"namespace import",children:String.raw`import * as math from "./math2.js";
console.log(math.add(1, 2), math.mul(2, 3));`}),r.jsx("h3",{children:"Re-exports & barrels"}),r.jsx(p.Code,{"aria-label":"re-exports",children:String.raw`// utils/index.js (barrel)
export * from "./math2.js";           // re-export named
export { default as add } from "./math3.js"; // re-export default with a name

// usage
import { add, mul } from "./utils/index.js";`}),r.jsx("h3",{children:"Dynamic import (on demand)"}),r.jsx(p.Code,{"aria-label":"dynamic import",children:String.raw`const mod = await import("./math2.js");
const { add } = mod;          // named
// const addDefault = mod.default;   // default (if any)`}),r.jsx("h3",{children:"Common mistakes I avoid"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Importing a named symbol from a file that only exports ",r.jsx("em",{children:"default"})," (and vice-versa)."]}),r.jsx("li",{children:"Creating circular imports with large barrel files."}),r.jsxs("li",{children:["Mixing CommonJS (",r.jsx("code",{children:"module.exports"}),") with ESM in the frontend-Vite expects ESM."]})]}),r.jsx(p.Divider,{}),r.jsxs("p",{children:["Rule of thumb I follow: **one main thing → default**, **multiple things → named**. Rename with ",r.jsx("code",{children:"as"})," when needed."]})]})}function om({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="let-vs-const";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"let vs const (avoid var)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(im,{})})})]})}function im(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:["Practical rule: ",r.jsxs("strong",{children:["use ",r.jsx("code",{children:"const"})," by default"]}),". Switch to"," ",r.jsx("code",{children:"let"})," only when you truly need to ",r.jsx("em",{children:"reassign"}),". Prefer block scope and avoid ",r.jsx("code",{children:"var"}),"."]}),r.jsx("h3",{children:"Definitions"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("code",{children:"let"}),": ",r.jsx("strong",{children:"block-scoped"})," variable; ",r.jsx("em",{children:"reassignable"}),"; not redeclarable in the same scope."]}),r.jsxs("li",{children:[r.jsx("code",{children:"const"}),": ",r.jsx("strong",{children:"block-scoped binding"}),"; ",r.jsx("em",{children:"not reassignable"}),". For objects/arrays, the reference is fixed but contents can still mutate."]})]}),r.jsx("h3",{children:"Key points"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Scope:"})," ",r.jsx("code",{children:"let"}),"/",r.jsx("code",{children:"const"})," → block; ",r.jsx("code",{children:"var"})," → function."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Redeclare:"})," ",r.jsx("code",{children:"let"}),"/",r.jsx("code",{children:"const"})," ❌ (same scope), ",r.jsx("code",{children:"var"})," ✅."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Reassign:"})," ",r.jsx("code",{children:"let"})," ✅; ",r.jsx("code",{children:"const"})," ❌ (but object/array contents may mutate)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Readability:"})," ",r.jsx("code",{children:"const"})," signals “this shouldn’t change”, which prevents bugs."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Loops:"})," ",r.jsx("code",{children:"let"})," makes a new binding per iteration (great with async callbacks)."]})]}),r.jsx(p.Divider,{}),r.jsx("h3",{children:"A) Block scope & redeclare vs reassign"}),r.jsx(p.Code,{children:`{
  let a = 1;
  a = 2;               // ✅ reassign allowed
  // let a = 3;        // ❌ SyntaxError: already declared in this scope

  const b = 10;
  // b = 11;           // ❌ TypeError: cannot reassign a const binding

  console.log(a, b);   // 2 10
}
// console.log(a, b);  // ❌ ReferenceError: not visible outside the block

let x = 5;
x = 6;                 // ✅ reassign ok
// let x = 7;          // ❌ cannot redeclare in the same scope

const y = { n: 1 };
// y = { n: 2 };       // ❌ cannot reassign binding
y.n = 2;               // ✅ mutate property
console.log(y);        // { n: 2 }`}),r.jsxs("h3",{children:["B) Loops & closures (why ",r.jsx("code",{children:"let"})," shines)"]}),r.jsx(p.Code,{children:`// VAR: one binding shared → all log 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
}

// LET: new binding per iteration → 0,1,2
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);
}`}),r.jsx("h3",{children:"C) const with arrays/objects (mutate vs reassign)"}),r.jsx(p.Code,{children:`const arr = [1, 2, 3];
arr.push(4);           // ✅ mutate contents
// arr = [];           // ❌ reassign binding
console.log(arr);      // [1,2,3,4]

const user = Object.freeze({ id: 1, name: "Ash" });
// user.name = "New";  // ❌ blocked when frozen (strict mode errors)
console.log(user);`}),r.jsx("h3",{children:"D) Shadowing & blocks"}),r.jsx(p.Code,{children:`let value = "outer";
{
  const value = "inner"; // shadowed in block scope
  console.log(value);    // "inner"
}
console.log(value);      // "outer"`}),r.jsx("h3",{children:"When I use which"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"const"})," for imports, config values, functions/components, derived values."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"let"})," for counters, accumulators, and anything that must change over time."]}),r.jsxs("li",{children:["Avoid ",r.jsx("strong",{children:"var"})," (function scope + redeclare allow many footguns)."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Default to ",r.jsx("strong",{children:"const"}),"."]}),r.jsxs("li",{children:["Need to change the value? → switch to ",r.jsx("strong",{children:"let"}),"."]}),r.jsx("li",{children:"Declare before use for clarity."}),r.jsxs("li",{children:["Prefer block scope; avoid ",r.jsx("code",{children:"var"}),"."]})]}),r.jsx(p.Divider,{})]})}function am({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="arrow-functions";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Arrow functions (implicit return, this)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(cm,{})})})]})}function cm(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:["Arrow functions are concise function expressions with a"," ",r.jsxs("strong",{children:["lexical ",r.jsx("code",{children:"this"})]})," and optional"," ",r.jsx("strong",{children:"implicit return"}),". Great for callbacks and short utilities. Not good as object methods or constructors."]}),r.jsx("h3",{children:"Quick definitions"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Implicit return:"})," single-expression body (no braces) returns that value."]}),r.jsxs("li",{children:[r.jsxs("strong",{children:["Lexical ",r.jsx("code",{children:"this"}),":"]})," arrows capture the surrounding ",r.jsx("code",{children:"this"}),"."]}),r.jsxs("li",{children:["Arrows don’t have their own ",r.jsx("code",{children:"arguments"}),"/",r.jsx("code",{children:"prototype"})," and can’t be used with ",r.jsx("code",{children:"new"}),"."]})]}),r.jsx(p.Divider,{}),r.jsx("h3",{children:"A) Syntax & implicit return"}),r.jsx(p.Code,{children:`// 1 param (parens optional)
const double = x => x * 2;                 // implicit return
console.log(double(4));                    // 8

// 0 or 2+ params → parentheses required
const greet = () => "Hello";               // implicit return
console.log(greet());                      // "Hello"

const add = (a, b) => a + b;
console.log(add(2, 3));                    // 5

// Multi-line body → use braces + 'return'
const sum = (a, b) => {
  const r = a + b;
  return r;                                // explicit return
};
console.log(sum(7, 8));                    // 15

// Returning an object literal → wrap in ()
const makeUser = (id, name) => ({ id, name });
console.log(makeUser(7, "Ash"));           // { id: 7, name: "Ash" }

// Default params, destructuring, rest
const price = (amt = 0, tax = 0.18) => amt * (1 + tax);
console.log(price(100, 0.1));              // 110
console.log(price(100));                   // 118

const printUser = ({ id, name }) => \`\${id}: \${name}\`;
console.log(printUser({ id: 3, name: "Eva" })); // "3: Eva"

const avg = (...nums) => nums.reduce((a, n) => a + n, 0) / nums.length;
console.log(avg(3, 5, 7));                 // 5

// Async arrow (example call would resolve to JSON)
const fetchJSON = async (url) => (await fetch(url)).json();
// fetchJSON("/api").then(data => console.log(data)); // → Promise -> parsed JSON

// IIFE arrow (immediately invoked)
(() => console.log("IIFE arrow"))();       // "IIFE arrow"`}),r.jsxs("h3",{children:["B) ",r.jsx("code",{children:"this"}),": lexical vs normal functions"]}),r.jsxs("p",{children:["Normal functions have a dynamic ",r.jsx("code",{children:"this"})," (depends on how they’re called). Arrow functions ",r.jsx("em",{children:"capture"})," the surrounding ",r.jsx("code",{children:"this"}),"."]}),r.jsx(p.Code,{children:`const counter = {
  n: 0,
  // ❌ Arrow as a method captures outer 'this', not the object
  badInc: () => { /* this is not 'counter' here */ },
  // ✅ Use a normal method when you need 'this'
  inc() { this.n++; },
};

counter.inc();
console.log(counter.n);                    // 1
// counter.badInc();                       // ❌ TypeError in strict mode (this is undefined)

// Preserving 'this' inside callbacks: arrow shines
class Timer {
  constructor() {
    this.ticks = 0;
  }
  start() {
    setInterval(() => {  // arrow captures 'this' from start()
      this.ticks++;
    }, 1000);
  }
}

const t = new Timer();
t.start();
setTimeout(() => console.log("ticks ~", t.ticks), 3100); // "ticks ~" 3 (approx)`}),r.jsxs("h3",{children:["C) ",r.jsx("code",{children:"arguments"}),", ",r.jsx("code",{children:"call/apply/bind"}),", and constructors"]}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Arrows don’t have their own ",r.jsx("code",{children:"arguments"}),"; use rest ",r.jsx("code",{children:"...args"}),"."]}),r.jsxs("li",{children:[r.jsx("code",{children:"call"}),"/",r.jsx("code",{children:"apply"}),"/",r.jsx("code",{children:"bind"})," don’t change ",r.jsx("code",{children:"this"})," for arrows."]}),r.jsxs("li",{children:["Arrows cannot be used with ",r.jsx("code",{children:"new"})," and have no ",r.jsx("code",{children:"prototype"}),"."]})]}),r.jsx(p.Code,{children:`// No 'arguments' in arrows:
const listArgs = (...args) => args;
console.log(listArgs(1, "a", true));       // [1, "a", true]

// call/apply/bind don't affect 'this' on arrows:
const obj = { id: 42 };
const getId = () => this?.id;              // 'this' from outer scope
console.log(getId.call(obj));              // undefined

// ❌ Arrow as constructor → TypeError
const Person = (name) => { this.name = name; };
// new Person("Ash"); // TypeError: Person is not a constructor`}),r.jsx("h3",{children:"D) Common use-cases"}),r.jsx(p.Code,{children:`// Array utilities
const nums = [1, 2, 3];
const squares = nums.map(n => n ** 2);
console.log(squares);                      // [1, 4, 9]
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);                        // [2]
const total = nums.reduce((a, n) => a + n, 0);
console.log(total);                        // 6

// Event handlers (React/DOM) that don't need their own 'this'
const onClick = (e) => console.log("clicked", e.currentTarget.tagName);
// clicking a <button> → "clicked" "BUTTON"

// Small utilities
const clamp = (x, min, max) => Math.min(max, Math.max(min, x));
console.log(clamp(10, 0, 5));              // 5
console.log(clamp(-2, 0, 5));              // 0
console.log(clamp(3, 0, 5));               // 3`}),r.jsx("h3",{children:"E) Pitfalls (and fixes)"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Object methods:"})," avoid arrows when a method needs ",r.jsx("code",{children:"this"}),". Use method syntax."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Returning object literal:"})," wrap in ",r.jsx("code",{children:"(...)"})," or you’ll return ",r.jsx("code",{children:"undefined"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Multiline:"})," with braces, add an explicit ",r.jsx("code",{children:"return"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Constructors:"})," never use arrows with ",r.jsx("code",{children:"new"}),"."]}),r.jsxs("li",{children:[r.jsxs("strong",{children:[r.jsx("code",{children:"arguments"}),":"]})," use rest params ",r.jsx("code",{children:"(...args)"})," instead."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Use arrows for small functions and callbacks."}),r.jsxs("li",{children:["Use normal functions for object/class methods that need ",r.jsx("code",{children:"this"}),"."]}),r.jsxs("li",{children:["Implicit return? → no braces. Returning object? → wrap in ",r.jsx("code",{children:"( )"}),"."]}),r.jsxs("li",{children:["Need parameters list? Use defaults, destructuring, or ",r.jsx("code",{children:"...rest"}),"."]})]}),r.jsx(p.Divider,{})]})}function um({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="destructuring";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Destructuring (objects, arrays, parameters)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(dm,{})})})]})}function dm(){return r.jsxs(p.Content,{children:[r.jsx("p",{children:"Destructuring pulls values out of objects/arrays into variables. It's great for clean code, default values, renaming, and concise function parameters."}),r.jsx("h3",{children:"Core patterns"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Objects:"})," match by ",r.jsx("em",{children:"key name"}),", can rename and set defaults."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Arrays:"})," match by ",r.jsx("em",{children:"position"}),", can skip items and use rest."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Parameters:"})," destructure right in the function signature."]})]}),r.jsx(p.Divider,{}),r.jsx("h3",{children:"A) Object destructuring - basics, renaming, defaults"}),r.jsx(p.Code,{children:`const user = { id: 1, name: "Ash", role: "dev" };

const { name, id } = user;
console.log(name, id);                       // "Ash" 1

// Rename and provide defaults
const { name: fullName, city = "Bengaluru" } = user;
console.log(fullName, city);                 // "Ash" "Bengaluru"

// Nested properties (safe default for the parent)
const profile = { meta: { active: true } };
const { meta: { active } = {} } = profile;
console.log(active);                          // true

// Rest properties: everything except 'role'
const { role, ...publicUser } = user;
console.log(role);                            // "dev"
console.log(publicUser);                      // { id: 1, name: "Ash" }`}),r.jsx("h3",{children:"B) Array destructuring - positions, skipping, defaults, rest"}),r.jsx(p.Code,{children:`const nums = [10, 20, 30, 40];

const [a, b] = nums;
console.log(a, b);                            // 10 20

// Skip with commas
const [first, , third] = nums;
console.log(first, third);                    // 10 30

// Defaults kick in only when value is 'undefined'
const [x = 1, y = 2, z = 3] = [5];
console.log(x, y, z);                         // 5 2 3

// Rest collects the remaining items
const [head, ...tail] = nums;
console.log(head);                            // 10
console.log(tail);                            // [20, 30, 40]

// Swap variables quickly
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q);                            // 2 1`}),r.jsx("h3",{children:"C) Function parameters - object/array + defaults"}),r.jsx(p.Code,{children:`// Object param with defaults + renaming
function greet({ id, name = "Guest" }) {
  return \`\${id}: \${name}\`;
}
console.log(greet({ id: 7, name: "Riya" }));  // "7: Riya"
console.log(greet({ id: 9 }));                // "9: Guest"

// Array param with a default whole-parameter value
const sumPair = ([a, b] = [0, 0]) => a + b;
console.log(sumPair([4, 6]));                 // 10
console.log(sumPair());                       // 0

// Destructure + rest in params
const logUser = ({ id, ...rest }) => ({ id, rest });
console.log(logUser({ id: 1, name: "Ash", role: "dev"}));
// { id: 1, rest: { name: "Ash", role: "dev" } }`}),r.jsx("h3",{children:"D) Practical React patterns"}),r.jsx(p.Code,{children:`// 1) Props destructuring in function signature
function Button({ label = "Click", onClick, disabled = false }) {
  // ...
}

// 2) useState returns an array → array destructuring
const [count, setCount] = React.useState(0);
// count: 0 ; setCount: function

// 3) Destructure API response (object)
const resp = { data: { items: [1,2,3] }, status: 200 };
const { data: { items } = { items: [] }, status } = resp;
console.log(items, status);                   // [1,2,3] 200`}),r.jsx("h3",{children:"E) Destructuring with loops & utilities"}),r.jsx(p.Code,{children:`const scores = { alice: 8, bob: 6, charlie: 9 };

for (const [name, score] of Object.entries(scores)) {
  if (score >= 8) console.log(name, "⭐");   // "alice ⭐", "charlie ⭐"
}

// Map of pairs to objects
const pairs = [["id", 1], ["name", "Ash"]];
const obj = Object.fromEntries(pairs);
console.log(obj);                             // { id: 1, name: "Ash" }`}),r.jsx("h3",{children:"F) Spread vs Rest (quick contrast)"}),r.jsx(p.Code,{children:`// Rest (collect) in binding/params:
const { password, ...safe } = { user: "a2rp", password: "secret" };
console.log(safe);                            // { user: "a2rp" }

// Spread (expand) in literals:
const base = { id: 1, name: "Ash" };
const clone = { ...base, role: "admin" };
console.log(clone);                           // { id: 1, name: "Ash", role: "admin" }`}),r.jsx("h3",{children:"G) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Object vs Array:"})," objects match by key; arrays by position."]}),r.jsxs("li",{children:[r.jsxs("strong",{children:["Defaults run on ",r.jsx("code",{children:"undefined"})]})," (not on ",r.jsx("code",{children:"null"}),")."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Safe nested:"})," give a default to the parent (",r.jsx("code",{children:"{ meta: {} }"}),") to avoid errors."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Rename to avoid conflicts:"})," ",r.jsx("code",{children:"const { id: userId } = user"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Keep it readable:"})," deep/nested destructuring is powerful-don't overdo it."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Use object destructuring for clarity and defaults."}),r.jsx("li",{children:"Use array destructuring for positions and quick swaps."}),r.jsx("li",{children:"Destructure props & hook returns right at the top."}),r.jsxs("li",{children:["Use rest (",r.jsx("code",{children:"...rest"}),") to exclude or gather extras; spread to clone/extend."]})]}),r.jsx(p.Divider,{})]})}function fm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="rest-and-spread";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Rest & spread (arrays, objects, params)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(pm,{})})})]})}function pm(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:["**Spread** ",r.jsx("code",{children:"..."})," copies/expands values into a new literal.",r.jsx("br",{}),"**Rest** ",r.jsx("code",{children:"..."})," gathers the remaining values into a single variable (in bindings or parameter lists)."]}),r.jsx("h3",{children:"A) Spread - Arrays"}),r.jsx(p.Code,{children:`const a = [1, 2];
const b = [3, 4];

// clone
const copy = [...a];
console.log(copy);                     // [1, 2]

// merge
const merged = [...a, ...b];
console.log(merged);                   // [1, 2, 3, 4]

// add at ends
const withEnds = [0, ...a, 5];
console.log(withEnds);                 // [0, 1, 2, 5]

// expand into calls
console.log(Math.max(...merged));      // 4

// from string/iterables
console.log([..."hey"]);               // ["h", "e", "y"]`}),r.jsx("h3",{children:"B) Rest - Arrays & bindings"}),r.jsx(p.Code,{children:`const nums = [10, 20, 30, 40];

const [head, ...tail] = nums;
console.log(head);                     // 10
console.log(tail);                     // [20, 30, 40]

// skip with commas + rest
const [, second, ...rest] = nums;
console.log(second);                   // 20
console.log(rest);                     // [30, 40]`}),r.jsx("h3",{children:"C) Spread - Objects"}),r.jsx(p.Code,{children:`const base = { id: 1, name: "Ash" };

// shallow clone
const clone = { ...base };
console.log(clone);                    // { id: 1, name: "Ash" }

// merge (later wins on key conflicts)
const a = { role: "dev", city: "BLR" };
const b = { role: "admin" };
const merged = { ...a, ...b };
console.log(merged);                   // { role: "admin", city: "BLR" }

// nested is shallow!
const user = { info: { score: 7 } };
const user2 = { ...user };
user2.info.score = 9;
console.log(user.info.score);          // 9  (same inner object reference)`}),r.jsx("h3",{children:"D) Rest - Object properties"}),r.jsx(p.Code,{children:`const user = { id: 1, name: "Ash", password: "secret", role: "dev" };

// pick some, gather the rest
const { password, ...publicUser } = user;
console.log(publicUser);               // { id: 1, name: "Ash", role: "dev" }

// rename + rest
const { id: userId, ...rest } = user;
console.log(userId);                   // 1
console.log(rest.role);                // "dev"`}),r.jsx("h3",{children:"E) Parameters: defaults, rest & spread"}),r.jsx(p.Code,{children:`// rest in params (collects arguments)
const sum = (...nums) => nums.reduce((a, n) => a + n, 0);
console.log(sum(1, 2, 3));             // 6

// default params + rest
const makeUrl = (base = "/", ...parts) => base + parts.join("/");
console.log(makeUrl("/api", "v1", "users")); // "/api/v1/users"

// spread when calling
const pair = [4, 6];
console.log(sum(...pair));             // 10

// NOTE: rest must be last
// const bad = (a, ...rest, b) => {}   // ❌ SyntaxError`}),r.jsx("h3",{children:"F) Practical React patterns"}),r.jsx(p.Code,{children:`// 1) Update array state immutably
const addTodo = (todos, t) => [...todos, t];
console.log(addTodo(["a"], "b"));      // ["a", "b"]

// 2) Update object state immutably
const setName = (user, name) => ({ ...user, name });
console.log(setName({ id: 1 }, "Ash")); // { id: 1, name: "Ash" }

// 3) Component props: pick props + pass through the rest
function Button({ variant = "primary", ...props }) {
  // return <button data-variant={variant} {...props} />
}
console.log(Button.length);            // 1 (only counts named params)

// 4) Avoid accidental overrides (order matters)
const baseProps = { type: "button", disabled: false };
const override = { disabled: true };
const finalProps = { ...baseProps, ...override };
console.log(finalProps.disabled);      // true`}),r.jsx("h3",{children:"G) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Shallow copies only:"})," spread does not deep-clone nested objects/arrays."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Order matters:"})," in object spreads, later keys overwrite earlier keys."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Performance:"})," for very large arrays/objects, repeated spreads can be costly-batch updates when possible."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Rest vs spread:"})," rest collects in bindings/params; spread expands in literals/calls."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Use spread to clone/merge immutably."}),r.jsx("li",{children:"Use rest in destructuring and function params to gather extras."}),r.jsx("li",{children:"Remember: shallow copy-be careful with nested structures."}),r.jsx("li",{children:"In objects, put overrides last so they win."})]}),r.jsx(p.Divider,{})]})}function hm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="template-literals";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Template literals (interpolation, multiline, tags)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(mm,{})})})]})}function mm(){return r.jsxs(p.Content,{children:["Template literals use backticks ",r.jsx("code",{children:"`"})," to make strings easier:",r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:" interpolation "})," with ",r.jsxs("code",{children:["$","{ ... }"]}),","]}),r.jsxs("li",{children:[r.jsx("strong",{children:" multiline "})," strings, and ",r.jsx("strong",{children:" tagged templates"}),"."]})]}),r.jsx("h3",{children:"A) Basics - interpolation & multiline"}),r.jsx(p.Code,{children:`const name = "Ash";
const score = 42;

const msg = \`Hello, \${name}! Your score is \${score}.\`;
console.log(msg);                            // "Hello, Ash! Your score is 42."

// Multiline without \\n escapes:
const lines = \`
First line
Second line
Third line
\`;
console.log(lines.trim());
// First line
// Second line
// Third line

// Expressions allowed inside \${...}
const taxed = (amt) => amt * 1.18;
console.log(\`Total: \${taxed(100)}\`);       // "Total: 118"`}),r.jsxs("h3",{children:["B) Expressions inside ",r.jsxs("code",{children:["$","{ ... }"]})]}),r.jsx(p.Code,{children:`const a = 3, b = 5;
console.log(\`\${a} + \${b} = \${a + b}\`);   // "3 + 5 = 8"

const ok = true;
console.log(\`Status: \${ok ? "OK" : "FAIL"}\`); // "Status: OK"

// Formatting inside template
const price = 12345.678;
console.log(\`₹\${price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}\`);
// "₹12,345.68"

// Safely stringify objects
const user = { id: 1, name: "Ash" };
console.log(\`user=\${JSON.stringify(user)}\`);
// 'user={"id":1,"name":"Ash"}'`}),r.jsxs("h3",{children:["C) Escaping backticks & ",r.jsxs("code",{children:["$","{ ... }"]})]}),r.jsx(p.Code,{children:'// Escape a backtick inside a template with \\`\nconst s = `Use a backtick like: \\`this\\``;\nconsole.log(s);                              // "Use a backtick like: `this`"\n\n// To show ${...} literally, escape the \'$\' or wrap in a normal string\nconsole.log(`Show \\${x} literally`);      // "Show ${x} literally"'}),r.jsx("h3",{children:"D) Tagged templates (advanced but useful)"}),r.jsxs("p",{children:["A ",r.jsx("em",{children:"tag"})," is a function that receives the string parts and the evaluated values. You can format, sanitize, or highlight values."]}),r.jsx(p.Code,{children:`// Simple highlight tag: wrap values in [brackets]
function highlight(strings, ...values) {
  return strings.reduce((out, str, i) => out + str + (i < values.length ? \`[\${values[i]}]\` : ""), "");
}
const lang = "JS", topic = "templates";
console.log(highlight\`Learning \${lang} \${topic}!\`);
// "Learning [JS] [templates]!"

// Inspect raw strings (preserves escapes)
function showRaw(strings) {
  console.log(strings.raw[0]); // first raw chunk
}
showRaw\`line1\\nline2\`;                      // prints "line1\\nline2"`}),r.jsxs("h3",{children:["E) ",r.jsx("code",{children:"String.raw"})," (keep backslashes)"]}),r.jsx(p.Code,{children:`// Useful for regex, paths, or copy-paste snippets
const raw = String.raw\`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(raw);                              // "C:\\Users\\Ash\\nNewLine"

// Compare with normal template:
const normal = \`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(normal);
// "C:\\Users\\Ash
// NewLine"`}),r.jsx("h3",{children:"F) Practical patterns"}),r.jsx(p.Code,{children:`// 1) Build URLs safely with encodeURIComponent
const params = { q: "react hooks", page: 2 };
const url = \`/search?q=\${encodeURIComponent(params.q)}&page=\${params.page}\`;
console.log(url);                              // "/search?q=react%20hooks&page=2"

// 2) Generate small blocks of text (emails/logs)
const to = "recruiter@company.com";
const body = \`Hi,
I'm sharing my ReactJS handbook link.
Thanks,
Ash\`;
console.log(body.split("\\n").length);         // 4

// 3) Inline templates for labels
const label = (n) => \`\${n} \${n === 1 ? "item" : "items"}\`;
console.log(label(1));                         // "1 item"
console.log(label(3));                         // "3 items"`}),r.jsx("h3",{children:"G) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Don't over-nest logic"})," inside ",r.jsxs("code",{children:["$","{ ... }"]}),"; extract helpers for readability."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Escape backticks"})," with ",r.jsx("code",{children:"\\\\`"})," when you must include them literally."]}),r.jsxs("li",{children:[r.jsxs("strong",{children:["Use ",r.jsx("code",{children:"JSON.stringify"})]})," to embed objects safely."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Beware of whitespace"}),": multiline templates keep your indentation/spaces."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"For raw backslashes"}),", prefer ",r.jsx("code",{children:"String.raw"})," or a tag."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Use backticks for interpolation and multiline strings."}),r.jsx("li",{children:"Keep complex logic out of templates-call helpers instead."}),r.jsxs("li",{children:["Escape backticks and ",r.jsx("code",{children:"$"})," when showing them literally."]}),r.jsxs("li",{children:["Use ",r.jsx("code",{children:"String.raw"})," or tagged templates for special formatting."]})]}),r.jsx(p.Divider,{})]})}function gm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="default-parameters";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Default parameters (practical patterns & pitfalls)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(xm,{})})})]})}function xm(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:["Default parameters set a value when an argument is ",r.jsxs("strong",{children:["explicitly ",r.jsx("code",{children:"undefined"})]}),". They do ",r.jsx("em",{children:"not"})," trigger for ",r.jsx("code",{children:"null"}),", ",r.jsx("code",{children:"0"}),", ",r.jsx("code",{children:"false"}),", or ",r.jsx("code",{children:'""'}),"."]}),r.jsxs("h3",{children:["A) Basics - only when arg is ",r.jsx("code",{children:"undefined"})]}),r.jsx(p.Code,{children:`function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet("Ash"));        // "Hello, Ash"
console.log(greet());             // "Hello, Guest"  (no arg → undefined)
console.log(greet(undefined));    // "Hello, Guest"
console.log(greet(null));         // "Hello, null"   (null ≠ undefined)`}),r.jsx("h3",{children:"B) Defaults with expressions (evaluated only when used)"}),r.jsx(p.Code,{children:`let calls = 0;
function expensive() { calls++; return 99; }

function demo(a = expensive()) {
  return a;
}

console.log(demo(5));             // 5        (expensive() NOT called)
console.log(demo());              // 99       (expensive() called)
console.log(calls);               // 1`}),r.jsx("h3",{children:"C) Using earlier params in later defaults (allowed)"}),r.jsx(p.Code,{children:`function area(w = 1, h = w) {
  return w * h;
}
console.log(area(3));             // 9  (h defaults to w)
console.log(area(3, 4));          // 12

// The reverse is NOT allowed (can't use a later param in an earlier default):
// function bad(a = b, b = 1) {}   // ❌ ReferenceError at call time`}),r.jsx("h3",{children:"D) Destructuring + defaults (object & array)"}),r.jsx(p.Code,{children:`// Object param with its own default AND property defaults
function createUser({ id = 0, name = "Guest", role = "user" } = {}) {
  return { id, name, role };
}
console.log(createUser({ id: 7, name: "Ash" }));
// { id: 7, name: "Ash", role: "user" }
console.log(createUser());
// { id: 0, name: "Guest", role: "user" }

// Array param with default whole-parameter value
const sumPair = ([a = 0, b = 0] = []) => a + b;
console.log(sumPair([4]));         // 4
console.log(sumPair());            // 0`}),r.jsx("h3",{children:"E) Defaults vs logical OR (don't break on falsey values)"}),r.jsx(p.Code,{children:`// Using defaults keeps 0 / false / "" intact:
function padLeft(str, n = 0) { return " ".repeat(n) + str; }
console.log(padLeft("X", 0));      // "X"  (0 kept)

// naive || fallback would override 0:
function padLeftBad(str, n) { n = n || 2; return " ".repeat(n) + str; }
console.log(padLeftBad("X", 0));   // "  X"  (oops)`}),r.jsx("h3",{children:"F) With rest & spread (what's valid)"}),r.jsx(p.Code,{children:`const sum = (...nums) => nums.reduce((a,n) => a + n, 0);
console.log(sum(1,2,3));           // 6

// Rest must come last and cannot have a default:
// const bad = (...nums = []) => 0  // ❌ SyntaxError

// Spreading into a call works as usual
console.log(sum(...[4,6]));        // 10`}),r.jsx("h3",{children:"G) Practical React patterns"}),r.jsx(p.Code,{children:`// 1) Default simple props in the signature
function Button({ label = "Click", disabled = false, onClick } = {}) {
  // return <button disabled={disabled} onClick={onClick}>{label}</button>
}

// 2) Default event handlers (no-op)
const noop = () => {};
function Field({ onChange = noop, value = "" } = {}) {
  // ...
}

// 3) Derive fallbacks from other props
function Price({ amount, tax = amount * 0.18 } = {}) {
  return amount + tax;
}
console.log(Price({ amount: 100 }));  // 118
console.log(Price({ amount: 100, tax: 5 })); // 105`}),r.jsx("h3",{children:"H) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Only undefined triggers"})," the default (not ",r.jsx("code",{children:"null"})," or other falsey values)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Order matters:"})," you can use previous params in later defaults, not the other way around."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Evaluate-on-demand:"})," expensive defaults run only when the arg is missing."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Destructuring + defaults:"})," give the whole param a default object/array to avoid errors."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"React:"})," prefer prop defaults in the function signature; keep objects stable to avoid re-renders."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Use defaults instead of ",r.jsx("code",{children:"||"}),' when 0/""/false are valid inputs.']}),r.jsx("li",{children:"Put cheaper params first; compute later defaults from earlier ones if needed."}),r.jsxs("li",{children:["For params that are objects/arrays, default the whole param too (",r.jsx("code",{children:"{}"})," or ",r.jsx("code",{children:"[]"}),")."]})]}),r.jsx(p.Divider,{})]})}function ym({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="optional-chaining";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsxs("span",{children:["Optional chaining ",r.jsx("code",{children:"?."})," (safer nested access & calls)"]})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(vm,{})})})]})}function vm(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Optional chaining"})," returns ",r.jsx("code",{children:"undefined"})," instead of throwing if the part on the ",r.jsx("em",{children:"left"})," of ",r.jsx("code",{children:"?."})," is ",r.jsx("code",{children:"null"})," or ",r.jsx("code",{children:"undefined"}),". It ",r.jsx("em",{children:"does not"})," short-circuit for other falsey values like ",r.jsx("code",{children:"0"}),", ",r.jsx("code",{children:"false"}),", or ",r.jsx("code",{children:'""'}),"."]}),r.jsx("h3",{children:"A) Property & element access"}),r.jsx(p.Code,{children:`const user = { id: 1, profile: { email: "a@b.com" } };

console.log(user?.profile?.email);        // "a@b.com"
console.log(user?.settings?.theme);       // undefined (no throw)

// element access with []
const prefKey = "theme";
console.log(user?.prefs?.[prefKey]);      // undefined

// arrays
const arr = [10, 20, 30];
console.log(arr?.[0]);                    // 10
const maybe = null;
console.log(maybe?.[0]);                  // undefined (safe)`}),r.jsx("h3",{children:"B) Optional call (functions & methods)"}),r.jsx(p.Code,{children:`const maybeCb = undefined;
console.log(maybeCb?.(1, 2));             // undefined (safe, no call)

const counter = {
  n: 0,
  inc() { this.n++; }
};

// preserves 'this' when method exists
counter?.inc?.();
console.log(counter.n);                    // 1

// if object or method is missing → whole call expr is undefined
const nothing = null;
console.log(nothing?.inc?.());            // undefined`}),r.jsx("h3",{children:"C) Combine with a default (preview for next topic)"}),r.jsx(p.Code,{children:`const api = { data: { items: [1,2,3] } };
const first = api?.data?.items?.[0] ?? null;
console.log(first);                        // 1

const missing = {};
console.log(missing?.data?.items?.[0] ?? "none"); // "none"`}),r.jsxs("h3",{children:["D) vs ",r.jsx("code",{children:"&&"})," (truthy check)"]}),r.jsx(p.Code,{children:`const n = 0;
console.log(n && n.toString());           // 0   (short-circuits on falsy 0)
console.log(n?.toString());               // "0" (0 is not null/undefined, so it proceeds)`}),r.jsx("h3",{children:"E) Practical React / DOM patterns"}),r.jsx(p.Code,{children:`// React props / API responses
const title = props?.post?.title ?? "Untitled";
const firstItem = resp?.data?.items?.[0] ?? null;

// Safe event access
const handle = (e) => {
  const id = e?.currentTarget?.dataset?.id ?? "unknown";
  // ...
};

// DOM query
document.querySelector("#title")?.scrollIntoView({ behavior: "smooth" });`}),r.jsx("h3",{children:"F) Pitfalls & rules"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsxs("strong",{children:["Only guard what's left of ",r.jsx("code",{children:"?."}),":"]})," write each uncertain hop as ",r.jsx("code",{children:"?."})," (",r.jsx("code",{children:"a?.b?.c"}),"), not ",r.jsx("code",{children:"a?.b.c"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Not an lvalue:"})," you can't assign to it — ",r.jsx("code",{children:"obj?.prop = 1"})," ❌ (SyntaxError)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Doesn't mask real errors:"})," if a function exists but throws, ",r.jsx("code",{children:"?."})," won't catch that."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Don't overuse:"})," if something should exist by contract, validate up-front instead of chaining everywhere."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Use ",r.jsx("code",{children:"?."})," for uncertain hops; chain it per level."]}),r.jsxs("li",{children:["It short-circuits only on ",r.jsx("code",{children:"null"}),"/",r.jsx("code",{children:"undefined"}),"."]}),r.jsxs("li",{children:["Pair with ",r.jsx("code",{children:"??"})," (next topic) to provide clean defaults."]}),r.jsxs("li",{children:["For methods, prefer ",r.jsx("code",{children:"obj?.method?.()"})," to preserve ",r.jsx("code",{children:"this"}),"."]})]}),r.jsx(p.Divider,{})]})}function jm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="nullish-coalescing";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsxs("span",{children:["Nullish coalescing ",r.jsx("code",{children:"??"})," (clean fallbacks)"]})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(wm,{})})})]})}function wm(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:[r.jsx("strong",{children:r.jsx("code",{children:"??"})})," returns the right-hand value ",r.jsx("em",{children:"only if"})," the left-hand side is ",r.jsx("code",{children:"null"})," or ",r.jsx("code",{children:"undefined"}),' (aka "nullish"). It keeps valid falsey values like ',r.jsx("code",{children:"0"}),", ",r.jsx("code",{children:"false"}),", and ",r.jsx("code",{children:'""'}),"."]}),r.jsx("h3",{children:"A) Basics — only null/undefined trigger the fallback"}),r.jsx(p.Code,{children:`console.log(null ?? "fallback");         // "fallback"
console.log(undefined ?? "fallback");    // "fallback"

// falsey but NOT nullish → left value is kept
console.log(0 ?? 100);                   // 0
console.log(false ?? true);              // false
console.log("" ?? "N/A");                // ""`}),r.jsxs("h3",{children:["B) vs ",r.jsx("code",{children:"||"})," (truthy check)"]}),r.jsx(p.Code,{children:`// || uses truthiness → will replace 0/""/false
console.log(0 || 100);                   // 100   (oops)
console.log(0 ?? 100);                   // 0     (correct when 0 is valid)

console.log("" || "N/A");                // "N/A" (oops)
console.log("" ?? "N/A");                // ""    (keep empty string)`}),r.jsx("h3",{children:"C) With optional chaining (common pattern)"}),r.jsx(p.Code,{children:`const resp = { data: { items: [1,2,3] } };

const first = resp?.data?.items?.[0] ?? null;
console.log(first);                       // 1

const missing = {};
const list = missing?.data?.items ?? [];
console.log(Array.isArray(list), list.length); // true 0`}),r.jsxs("h3",{children:["D) Precedence & mixing with ",r.jsx("code",{children:"&&"}),"/",r.jsx("code",{children:"||"})]}),r.jsx(p.Code,{children:`// You cannot mix ?? with &&/|| without parentheses:
// const bad = null ?? 0 || 5;           // ❌ SyntaxError

const v1 = (null ?? 0) || 5;
console.log(v1);                          // 5   (0 || 5 → 5)

const v2 = null ?? (0 || 5);
console.log(v2);                          // 5   (0 || 5 → 5)

const v3 = (undefined ?? 7) && "ok";
console.log(v3);                          // "ok"`}),r.jsxs("h3",{children:["E) Nullish coalescing assignment ",r.jsx("code",{children:"??="})]}),r.jsx(p.Code,{children:`let a = null;
a ??= 10;
console.log(a);                           // 10

let b = 0;
b ??= 5;                                  // left is NOT null/undefined
console.log(b);                           // 0 (kept)

const cfg = { retries: undefined };
cfg.retries ??= 3;
console.log(cfg.retries);                 // 3`}),r.jsx("h3",{children:"F) Edge cases (NaN, empty arrays/objects)"}),r.jsx(p.Code,{children:`const n = NaN;
console.log(n ?? 0);                      // NaN (not nullish)
console.log(Number.isNaN(n) ? 0 : n);     // 0   (explicit fallback for NaN)

const arr = [];
console.log((arr ?? ["x"]).length);       // 0 (arr is not nullish)

const obj = {};
console.log((obj ?? { a: 1 }));           // {} (obj is not nullish)`}),r.jsx("h3",{children:"G) Practical React patterns"}),r.jsx(p.Code,{children:`// 1) Safe prop fallbacks (keep 0/false/"")
const label = props?.label ?? "—";
const disabled = props?.disabled ?? false;

// 2) Controlled inputs: avoid undefined
const value = form?.name ?? "";

// 3) API defaults
const items = resp?.data?.items ?? [];
const total = resp?.data?.total ?? 0;

// 4) Optional callback call
props?.onSelect?.(id ?? 0);               // combine ?. and ??`}),r.jsx("h3",{children:"H) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsxs("strong",{children:["Use ",r.jsx("code",{children:"??"}),' when 0/""/false are valid']})," and should not trigger a fallback."]}),r.jsxs("li",{children:[r.jsxs("strong",{children:["Prefer ",r.jsx("code",{children:"a?.b ?? default"})]})," for uncertain chains with defaults."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Add parentheses"})," when mixing with ",r.jsx("code",{children:"&&"})," or ",r.jsx("code",{children:"||"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"NaN is not nullish"}),": coalesce explicitly if you need a number fallback."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Left side null/undefined? → returns right side; otherwise returns left."}),r.jsxs("li",{children:["Don't replace valid falsey values—use ",r.jsx("code",{children:"??"}),", not ",r.jsx("code",{children:"||"}),"."]}),r.jsxs("li",{children:["Pair with ",r.jsx("code",{children:"?."}),' to avoid "cannot read property" errors.']}),r.jsxs("li",{children:["Consider ",r.jsx("code",{children:"??="}),' for concise "set if missing".']})]}),r.jsx(p.Divider,{})]})}function km({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="map-filter-reduce";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Map / Filter / Reduce (transform, select, aggregate)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(Sm,{})})})]})}function Sm(){return r.jsxs(p.Content,{children:[r.jsxs("div",{style:{marginBottom:"30px"},children:["Three array workhorses:",r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"map"})," transforms each item,"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"filter"})," keeps matching items, and "]}),r.jsxs("li",{children:[r.jsx("strong",{children:"reduce"})," folds many values into one (sum, object, etc.)."]})]}),"All return ",r.jsx("em",{children:" new arrays/values"})," and do not mutate the original."]}),r.jsx("h3",{children:"A) map - transform each item"}),r.jsx(p.Code,{children:`const nums = [1, 2, 3];
const squares = nums.map(n => n * 2);
console.log(squares);                         // [2, 4, 6]
console.log(nums);                            // [1, 2, 3] (unchanged)

// index & array are available
const withIndex = nums.map((n, i) => n + i);
console.log(withIndex);                       // [1, 3, 5]

// Map objects
const users = [{ id: 1, name: "Ash" }, { id: 2, name: "Riya" }];
const names = users.map(u => u.name);
console.log(names);                           // ["Ash", "Riya"]

// parseInt pitfall: map passes (value, index) → index becomes radix!
console.log(["10","11","12"].map(parseInt));  // [10, NaN, 1]  (wrong)
console.log(["10","11","12"].map(x => parseInt(x, 10))); // [10, 11, 12]
console.log(["10","11","12"].map(Number));    // [10, 11, 12]`}),r.jsx("h3",{children:"B) filter - keep items that pass the test"}),r.jsx(p.Code,{children:`const arr = [1, 2, 3, 4, 5, 6];
const evens = arr.filter(n => n % 2 === 0);
console.log(evens);                           // [2, 4, 6]

// Remove null/undefined quickly
const messy = [0, null, "hi", undefined, false];
console.log(messy.filter(Boolean));           // ["hi"] (drops 0/false too!)
console.log(messy.filter(v => v != null));    // [0, "hi", false] (keeps 0/false)

// Unique with filter + indexOf
const dups = [2,2,3,3,3,1];
const unique = dups.filter((n, i, a) => a.indexOf(n) === i);
console.log(unique);                          // [2, 3, 1]`}),r.jsx("h3",{children:"C) reduce - fold into a single value"}),r.jsx(p.Code,{children:`const nums = [5, 2, 7];

// sum
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);                             // 14

// max
const max = nums.reduce((m, n) => n > m ? n : m, -Infinity);
console.log(max);                             // 7

// build an object (index by id)
const list = [{id: 1, name: "Ash"}, {id: 2, name: "Riya"}];
const byId = list.reduce((acc, u) => { acc[u.id] = u; return acc; }, {});
console.log(byId);                            // { '1': {...}, '2': {...} }

// count occurrences (frequency map)
const letters = ["a","b","a","c","b","a"];
const freq = letters.reduce((acc, ch) => (acc[ch] = (acc[ch]||0)+1, acc), {});
console.log(freq);                            // { a: 3, b: 2, c: 1 }

// groupBy
const people = [
  { team: "A", name: "Ash" },
  { team: "B", name: "Riya" },
  { team: "A", name: "Dev" },
];
const groups = people.reduce((acc, p) => {
  (acc[p.team] ||= []).push(p);
  return acc;
}, {});
console.log(Object.keys(groups));             // ["A", "B"]`}),r.jsx("h3",{children:"D) Chain them - readable pipelines"}),r.jsx(p.Code,{children:`const nums = [1,2,3,4,5,6];
const result = nums
  .filter(n => n % 2 === 0)   // keep evens → [2,4,6]
  .map(n => n * n)            // square     → [4,16,36]
  .reduce((a, n) => a + n, 0);// sum        → 56
console.log(result);                          // 56`}),r.jsx("h3",{children:"E) Immutability & side-effects"}),r.jsx(p.Code,{children:`const a = [1,2,3];

// Do NOT mutate the same array while mapping/filtering
// Bad:
const bad = a.map(n => { a.push(99); return n; });
console.log(a.length, bad.length);            // 6 3 (weird bugs)

// Good: treat callbacks as pure functions
const good = a.map(n => n * 10);
console.log(good);                            // [10, 20, 30]`}),r.jsx("h3",{children:"F) Practical React patterns"}),r.jsx(p.Code,{children:`// 1) Render lists
const items = ["Home","Docs","Blog"];
// items.map((t) => <li key={t}>{t}</li>)

// 2) Derive totals
const cart = [{price: 100, qty: 2}, {price: 50, qty: 1}];
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(total);                           // 250

// 3) Update state immutably (map to replace one item)
const toggle = (todos, id) =>
  todos.map(t => t.id === id ? { ...t, done: !t.done } : t);

// 4) Keys: prefer stable ids over array index
// <li key={todo.id}>...</li>`}),r.jsx("h3",{children:"G) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"map"})," must return a value each time; forgetting a return gives an array of undefined."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"filter"})," expects a boolean; return the condition directly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"reduce"}),": always provide an initial value (especially for empty arrays)."]}),r.jsxs("li",{children:["For deep transforms, consider ",r.jsx("code",{children:"flatMap"})," or a single well-named ",r.jsx("code",{children:"reduce"})," for clarity."]}),r.jsx("li",{children:"Don't mutate items inside callbacks; return new objects/arrays."})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Transform → ",r.jsx("strong",{children:"map"}),"; select → ",r.jsx("strong",{children:"filter"}),"; aggregate → ",r.jsx("strong",{children:"reduce"}),"."]}),r.jsx("li",{children:"Keep callbacks pure; no side-effects."}),r.jsxs("li",{children:["Give ",r.jsx("code",{children:"reduce"})," an initial accumulator."]}),r.jsx("li",{children:"Prefer pipeline readability over micro-optimizing chains."})]}),r.jsx(p.Divider,{})]})}function Cm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="find-some-every";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Find / Some / Every (search, any, all)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(Em,{})})})]})}function Em(){return r.jsxs(p.Content,{children:[r.jsxs("div",{style:{marginBottom:"30px"},children:["Three quick checks:",r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"find"})," returns the first matching item,"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"some"})," tells if ",r.jsx("em",{children:"any"})," matches, and"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"every"})," checks if ",r.jsx("em",{children:" all"})," match."]})]}),"They do not mutate the array and they short-circuit."]}),r.jsxs("h3",{children:["A) ",r.jsx("code",{children:"find"})," - get the first matching element"]}),r.jsx(p.Code,{children:`const users = [
  { id: 1, name: "Ash" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Dev" },
];

const r = users.find(u => u.id > 1);
console.log(r);                                // { id: 2, name: "Riya" }

const none = users.find(u => u.id === 99);
console.log(none);                             // undefined  (not found)

// Safe property access
console.log((users.find(u => u.name === "Dev") || {}).id); // 3
// or with optional chaining + default:
console.log(users.find(u => u.name === "Foo")?.id ?? "NA"); // "NA"`}),r.jsxs("h3",{children:["B) ",r.jsx("code",{children:"some"})," - does any element pass?"]}),r.jsx(p.Code,{children:`const nums = [1, 3, 5, 8];

console.log(nums.some(n => n % 2 === 0));      // true  (8 is even)
console.log(nums.some(n => n > 10));           // false

// Practical: any item out of stock?
const cart = [{ id: 1, qty: 2 }, { id: 2, qty: 0 }];
console.log(cart.some(item => item.qty === 0)); // true`}),r.jsxs("h3",{children:["C) ",r.jsx("code",{children:"every"})," - do all elements pass?"]}),r.jsx(p.Code,{children:`const scores = [7, 8, 9];

console.log(scores.every(s => s >= 7));         // true
console.log(scores.every(s => s >= 9));         // false

// NOTE: empty arrays
console.log([].every(x => x > 0));              // true  (vacuously true)
console.log([].some(x => x > 0));               // false`}),r.jsx("h3",{children:"D) Objects & deep checks"}),r.jsx(p.Code,{children:`const people = [
  { id: 1, tags: ["dev","js"] },
  { id: 2, tags: ["design"] },
  { id: 3, tags: ["dev","react"] },
];

// find first person with "react"
const reactDev = people.find(p => p.tags.includes("react"));
console.log(reactDev?.id ?? null);              // 3

// some: does anyone have "design"?
console.log(people.some(p => p.tags.includes("design"))); // true

// every: does everyone have "dev"?
console.log(people.every(p => p.tags.includes("dev")));   // false`}),r.jsxs("h3",{children:["E) Compare with ",r.jsx("code",{children:"includes"})," (value vs predicate)"]}),r.jsx(p.Code,{children:`// includes checks values (strict equality), not conditions:
console.log([1,2,3].includes(2));              // true
// find/some let you write a predicate:
console.log([1,2,3].some(n => n > 2));         // true`}),r.jsx("h3",{children:"F) Performance & short-circuiting"}),r.jsx(p.Code,{children:`// these stop early:
// - find: after first match
// - some: after first true
// - every: after first false

let steps = 0;
[1,2,3,4].some(n => (steps++, n > 2));
console.log(steps);                             // 3 (stopped at 3)`}),r.jsx("h3",{children:"G) Practical React patterns"}),r.jsx(p.Code,{children:`// 1) Validation: all fields valid?
const fields = [{ok:true},{ok:true},{ok:false}];
const allValid = fields.every(f => f.ok);
console.log(allValid);                          // false

// 2) Feature flags / roles: any role matches?
const roles = ["viewer","editor"];
const canEdit = roles.some(r => ["admin","editor"].includes(r));
console.log(canEdit);                           // true

// 3) Safe pick: find an item to show details
const todo = [{id:1,t:"A"},{id:2,t:"B"}].find(t => t.id === 2);
// render guard:
// if (!todo) return null;`}),r.jsx("h3",{children:"H) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"find"})," can return ",r.jsx("code",{children:"undefined"})," - guard with ",r.jsx("code",{children:"?."})," or a default."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"every"})," on an empty array returns ",r.jsx("code",{children:"true"}),"; ",r.jsx("strong",{children:"some"})," returns ",r.jsx("code",{children:"false"}),"."]}),r.jsxs("li",{children:["Predicates should be ",r.jsx("strong",{children:"pure"})," (no side-effects) for predictable behavior."]}),r.jsx("li",{children:"For large lists, these short-circuit - keep the cheap checks first in your predicate."})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Need the item itself? → ",r.jsx("strong",{children:"find"}),"."]}),r.jsxs("li",{children:["Need a yes/no if ",r.jsx("em",{children:"any"}),"? → ",r.jsx("strong",{children:"some"}),"."]}),r.jsxs("li",{children:["Need a yes/no if ",r.jsx("em",{children:"all"}),"? → ",r.jsx("strong",{children:"every"}),"."]}),r.jsxs("li",{children:["Remember undefined from ",r.jsx("code",{children:"find"}),"; handle it safely."]})]}),r.jsx(p.Divider,{})]})}function Pm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="sort-without-mutating";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsxs("span",{children:["Sort (without mutating) - ",r.jsx("code",{children:"toSorted"}),", copy+sort"]})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(_m,{})})})]})}function _m(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:[r.jsx("code",{children:"Array.prototype.sort()"})," sorts ",r.jsx("em",{children:"in place"})," (it ",r.jsx("strong",{children:"mutates"})," the array). For immutable code, use ",r.jsx("code",{children:"toSorted()"})," (best) or clone first and then ",r.jsx("code",{children:"sort()"}),"."]}),r.jsx("h3",{children:"A) The mutation gotcha"}),r.jsx(p.Code,{children:`const a = [3, 1, 2];
const b = a.sort();                 // MUTATES 'a'
console.log(a);                     // [1, 2, 3]
console.log(b);                     // [1, 2, 3] (same reference)
`}),r.jsx("h3",{children:"B) Safe patterns (no mutation)"}),r.jsx(p.Code,{children:`// 1) Modern: toSorted (returns a new array)
const nums = [3, 10, 2];
const asc = nums.toSorted((x, y) => x - y);
console.log(nums);                  // [3, 10, 2]  (unchanged)
console.log(asc);                   // [2, 3, 10]

// 2) Classic: copy then sort
const copyAsc = [...nums].sort((x, y) => x - y);
console.log(copyAsc);               // [2, 3, 10]
`}),r.jsx("h3",{children:"C) Numbers - ascending/descending"}),r.jsx(p.Code,{children:`const n = [10, 2, 5, 1];

// Default sort is lexicographic (strings) - wrong for numbers:
console.log([...n].sort());         // [1, 10, 2, 5]  (not numeric)

// Correct numeric comparators:
const asc = n.toSorted((a, b) => a - b);
console.log(asc);                   // [1, 2, 5, 10]

const desc = n.toSorted((a, b) => b - a);
console.log(desc);                  // [10, 5, 2, 1]
`}),r.jsx("h3",{children:"D) Strings - locale & case"}),r.jsx(p.Code,{children:`const cities = ["mumbai", "Delhi", "bengaluru"];

// ASCII compare (case-sensitive)
console.log([...cities].sort());    
// ["Delhi", "bengaluru", "mumbai"]

// Locale/case-insensitive + numeric aware
const nice = cities.toSorted((a, b) => 
  a.localeCompare(b, "en-IN", { sensitivity: "base", numeric: true })
);
console.log(nice);
// ["bengaluru", "Delhi", "mumbai"]
`}),r.jsx("h3",{children:"E) Dates - by timestamp"}),r.jsx(p.Code,{children:`const dates = [new Date("2025-01-01"), new Date("2024-12-31")];
const byTime = dates.toSorted((a, b) => a - b);
console.log(byTime.map(d => d.toISOString().slice(0,10)));
// ["2024-12-31", "2025-01-01"]
`}),r.jsx("h3",{children:"F) Objects - by field, with nulls-last"}),r.jsx(p.Code,{children:`const people = [
  { name: "Ash",  score: 7 },
  { name: "Riya", score: null },
  { name: "Dev",  score: 9 },
];

// Sort by score asc; put null/undefined at the end:
const nullsLast = (v) => (v == null ? Infinity : v);
const byScore = people.toSorted((a, b) => nullsLast(a.score) - nullsLast(b.score));
console.log(byScore.map(p => p.name));        // ["Ash", "Dev", "Riya"]

// Sort by name (case-insensitive)
const byName = people.toSorted((a, b) =>
  a.name.localeCompare(b.name, "en-IN", { sensitivity: "base" })
);
console.log(byName.map(p => p.name));         // ["Ash", "Dev", "Riya"]
`}),r.jsx("h3",{children:"G) Multi-key sort (tie-breakers)"}),r.jsx(p.Code,{children:`const rows = [
  { team: "A", points: 10, name: "Ash" },
  { team: "A", points: 10, name: "Dev" },
  { team: "B", points: 12, name: "Riya" },
];

// Primary: team asc; Secondary: points desc; Tertiary: name asc
const cmp = (a, b) =>
  a.team.localeCompare(b.team) ||
  (b.points - a.points) ||
  a.name.localeCompare(b.name);

const sorted = rows.toSorted(cmp);
console.log(sorted.map(r => \`\${r.team}-\${r.points}-\${r.name}\`));
// ["A-10-Ash", "A-10-Dev", "B-12-Riya"]
`}),r.jsx("h3",{children:"H) React-friendly patterns"}),r.jsx(p.Code,{children:`// 1) Never mutate props/state directly
// BAD: props.items.sort(...)
function SortedList({ items }) {
  const sorted = React.useMemo(
    () => items.toSorted((a, b) => a.label.localeCompare(b.label)),
    [items]
  );
  // return sorted.map(...)
}

// 2) Keep comparators pure and cheap; memoize heavy ones
const byLabel = (a, b) => a.label.localeCompare(b.label);
const sortedOnce = React.useMemo(() => data.toSorted(byLabel), [data]);

// 3) Avoid resorting on every render by precomputing in selectors/hooks
`}),r.jsx("h3",{children:"I) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Default sort is string-based."})," Always pass a comparator for numbers/dates."]}),r.jsxs("li",{children:[r.jsxs("strong",{children:[r.jsx("code",{children:"sort()"})," mutates."]})," Prefer ",r.jsx("code",{children:"toSorted()"})," or clone before sorting."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Locale/case rules:"})," use ",r.jsx("code",{children:"localeCompare"})," with options for user-facing text."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Nulls/undefined:"})," coerce to sentinel values (e.g., ",r.jsx("code",{children:"Infinity"}),") or handle explicitly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Multi-key:"})," chain with ",r.jsx("code",{children:"||"})," returning the first non-zero comparison."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Immutable? → ",r.jsx("code",{children:"toSorted"})," (best) or ",r.jsx("code",{children:"[...arr].sort(cmp)"}),"."]}),r.jsxs("li",{children:["Numbers/dates → numeric comparator (",r.jsx("code",{children:"a-b"}),")."]}),r.jsxs("li",{children:["Strings for UI → ",r.jsx("code",{children:"localeCompare"})," with options."]}),r.jsx("li",{children:"Define small, pure comparators; reuse them."})]}),r.jsx(p.Divider,{})]})}function Nm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="flat-and-flatmap";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Flat / FlatMap (flatten arrays & map+flatten)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(bm,{})})})]})}function bm(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:[r.jsx("code",{children:"flat"})," removes one or more levels of nesting and returns a ",r.jsx("strong",{children:"new array"}),".",r.jsx("code",{children:" flatMap"})," = ",r.jsx("code",{children:"map"})," then ",r.jsx("code",{children:"flat(1)"})," in a single pass."]}),r.jsxs("h3",{children:["A) ",r.jsx("code",{children:"flat"})," - basics & depth"]}),r.jsx(p.Code,{children:`const a = [1, [2, 3], [4, [5]]];

console.log(a.flat());                 // [1, 2, 3, 4, [5]]       (default depth = 1)
console.log(a.flat(2));                // [1, 2, 3, 4, 5]
console.log(a.flat(Infinity));         // [1, 2, 3, 4, 5]         (flatten all levels)

// Original is unchanged:
console.log(a);                        // [1, [2,3], [4, [5]]]`}),r.jsx("h3",{children:"B) Holes (sparse arrays) are removed"}),r.jsx(p.Code,{children:`const sparse = [1, , 3, [ , 4 ]];
// flat removes empty slots
console.log(sparse.flat());            // [1, 3, 4]`}),r.jsxs("h3",{children:["C) ",r.jsx("code",{children:"flatMap"})," - map then flatten once"]}),r.jsx(p.Code,{children:`const sentences = ["hi there", "good day"];
// split words from each sentence and flatten
const words = sentences.flatMap(s => s.split(" "));
console.log(words);                    // ["hi", "there", "good", "day"]

// Equivalent two-step:
console.log(sentences.map(s => s.split(" ")).flat());
// [["hi","there"],["good","day"]] → ["hi","there","good","day"]

// Remove nulls while mapping:
const items = [1, null, 2, null];
const cleaned = items.flatMap(x => (x == null ? [] : [x]));
console.log(cleaned);                  // [1, 2]`}),r.jsx("h3",{children:"D) API pagination → flatten pages"}),r.jsx(p.Code,{children:`const pages = [
  { items: [1, 2] },
  { items: [3] },
  { items: [] },
];
const all = pages.flatMap(p => p.items);
console.log(all);                      // [1, 2, 3]`}),r.jsx("h3",{children:"E) Nested mapping patterns"}),r.jsx(p.Code,{children:`// turn groups -> list of user ids
const groups = [
  { team: "A", users: [{id:1},{id:2}] },
  { team: "B", users: [{id:3}] },
];
const userIds = groups.flatMap(g => g.users.map(u => u.id));
console.log(userIds);                  // [1, 2, 3]

// one level only! deeper arrays need an extra flat:
const deep = [ [ [1] ], [ [2, 3] ] ];
console.log(deep.flatMap(x => x).flat()); // [[1], [2, 3]] → [1, 2, 3]`}),r.jsx("h3",{children:"F) React-friendly patterns"}),r.jsx(p.Code,{children:`// 1) Flatten sectioned menu items before rendering
const sections = [
  { title: "A", items: ["Home", "Docs"] },
  { title: "B", items: ["Blog"] },
];
const flatItems = sections.flatMap(s => s.items);
console.log(flatItems);                // ["Home","Docs","Blog"]
// flatItems.map(label => <li key={label}>{label}</li>)

// 2) Build props from nested sources
const sources = [{ props: [{k:"a",v:1},{k:"b",v:2}] }, { props: [{k:"c",v:3}] }];
const propsObj = Object.fromEntries(
  sources.flatMap(s => s.props.map(p => [p.k, p.v]))
);
console.log(propsObj);                 // { a:1, b:2, c:3 }`}),r.jsx("h3",{children:"G) Performance tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"flat"})," returns a copy; heavy flattening (",r.jsx("code",{children:"Infinity"}),") can allocate big arrays."]}),r.jsxs("li",{children:["Prefer ",r.jsx("code",{children:"flatMap"})," over ",r.jsx("code",{children:"map().flat()"})," for one-level cases (fewer passes)."]}),r.jsx("li",{children:"Keep mapping callbacks pure; avoid pushing into outer arrays inside the callback."})]}),r.jsx("h3",{children:"H) Pitfalls & gotchas"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Depth:"})," default is 1. If your output is still nested, pass a deeper depth or add another ",r.jsx("code",{children:"flat"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Not deep merge:"})," flattening arrays of objects doesn't merge objects-just removes array nesting."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Sparse arrays:"})," empty slots are removed by ",r.jsx("code",{children:"flat"}),"; don't rely on their indexes later."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Legacy runtimes:"})," very old environments may lack ",r.jsx("code",{children:"flat/flatMap"}),"; consider a polyfill if needed."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Need to remove one nesting level? → ",r.jsx("strong",{children:"flat()"})," (or set ",r.jsx("em",{children:"depth"}),")."]}),r.jsxs("li",{children:["Need map + flatten(1) in one go? → ",r.jsx("strong",{children:"flatMap(fn)"}),"."]}),r.jsx("li",{children:"Watch out for sparse arrays-they collapse."}),r.jsxs("li",{children:["Avoid ",r.jsx("code",{children:"Infinity"})," unless you really need full flattening."]})]}),r.jsx(p.Divider,{})]})}function Rm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="object-utilities";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsxs("span",{children:["Object utilities: ",r.jsx("code",{children:"keys"}),", ",r.jsx("code",{children:"values"}),", ",r.jsx("code",{children:"entries"}),", ",r.jsx("code",{children:"assign"})]})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(Om,{})})})]})}function Om(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:["Everyday helpers for working with plain objects: get keys/values/pairs, transform with",r.jsx("code",{children:" entries"})," ⟷ ",r.jsx("code",{children:"fromEntries"}),", and merge/clone with ",r.jsx("code",{children:"assign"}),". These work on an object's ",r.jsx("em",{children:"own enumerable string-keyed"})," properties (symbols are ignored)."]}),r.jsxs("h3",{children:["A) ",r.jsx("code",{children:"Object.keys"})," - list own keys (strings)"]}),r.jsx(p.Code,{children:`const user = { id: 1, name: "Ash" };
console.log(Object.keys(user));                    // ["id", "name"]

// Integer-like keys are ordered numerically first, then the rest by insertion:
const order = { "2": "two", "1": "one", a: "A" };
console.log(Object.keys(order));                   // ["1", "2", "a"]`}),r.jsxs("h3",{children:["B) ",r.jsx("code",{children:"Object.values"})," - list own values"]}),r.jsx(p.Code,{children:`const point = { x: 10, y: 20 };
console.log(Object.values(point));                 // [10, 20]`}),r.jsxs("h3",{children:["C) ",r.jsx("code",{children:"Object.entries"})," ⟷ ",r.jsx("code",{children:"Object.fromEntries"})]}),r.jsx(p.Code,{children:`const stats = { a: 1, b: 2 };
console.log(Object.entries(stats));                // [["a",1], ["b",2]]
console.log(Object.fromEntries([["x",10],["y",20]])); // { x: 10, y: 20 }

// Map an object (transform values)
const prices = { apple: 100, mango: 80 };
const withTax = Object.fromEntries(
  Object.entries(prices).map(([k, v]) => [k, Math.round(v * 1.18)])
);
console.log(withTax);                               // { apple: 118, mango: 94 }

// Filter an object (remove fields)
const user = { id: 1, name: "Ash", password: "secret" };
const publicUser = Object.fromEntries(
  Object.entries(user).filter(([k]) => k !== "password")
);
console.log(publicUser);                            // { id: 1, name: "Ash" }`}),r.jsxs("h3",{children:["D) ",r.jsx("code",{children:"Object.assign"})," - merge/clone (shallow) ⚠️ mutates target"]}),r.jsx(p.Code,{children:`const target = { a: 1 };
const src = { b: 2 };
Object.assign(target, src);
console.log(target);                                // { a: 1, b: 2 } (target mutated)

// Make a NEW merged object (safe)
const a = { id: 1 };
const b = { name: "Ash" };
const merged = Object.assign({}, a, b);
console.log(merged);                                 // { id: 1, name: "Ash" }

// Rightmost wins on conflicts
console.log(Object.assign({}, { role: "dev" }, { role: "admin" }));
// { role: "admin" }

// SHALLOW copy:
const original = { nested: { x: 1 } };
const clone = Object.assign({}, original);
clone.nested.x = 2;
console.log(original.nested.x);                      // 2  (same inner object)`}),r.jsx("h3",{children:"E) Symbols & non-enumerables (FYI)"}),r.jsx(p.Code,{children:`const s = Symbol("s");
const obj = { a: 1, [s]: 2 };
console.log(Object.keys(obj));                       // ["a"] (symbols ignored)
console.log(Object.getOwnPropertySymbols(obj));      // [Symbol(s)]
// Non-enumerable props are also skipped by keys/values/entries`}),r.jsxs("h3",{children:["F) Practical transforms with ",r.jsx("code",{children:"entries"})]}),r.jsx(p.Code,{children:`// 1) Rename keys
const user = { first_name: "Ash", last_name: "R" };
const renamed = Object.fromEntries(
  Object.entries(user).map(([k, v]) => [k.replace("_", ""), v])
);
console.log(renamed);                                // { firstname: "Ash", lastname: "R" }

// 2) Pick only certain keys
const pick = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => keys.includes(k)));
console.log(pick({ id:1, name:"Ash", age:20 }, ["id","name"]));
// { id: 1, name: "Ash" }

// 3) Invert (values → keys) - caution with duplicates
const invert = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [String(v), k]));
console.log(invert({ a:1, b:2 }));                  // { "1":"a", "2":"b" }`}),r.jsx("h3",{children:"G) React-friendly patterns"}),r.jsx(p.Code,{children:`// 1) Render object as a list
const features = { darkMode: true, beta: false };
// Object.entries(features).map(([k, v]) => <li key={k}>{k}: {String(v)}</li>)

// 2) Merge default props/options (spread is equivalent to assign into {})
const defaults = { size: "md", disabled: false };
const final = { ...defaults, ...{ disabled: true } };  // or Object.assign({}, defaults, { disabled: true })
console.log(final);                                    // { size: "md", disabled: true }

// 3) Build object from pairs for quick lookup
const list = [{ id:1, name:"Ash" }, { id:2, name:"Riya" }];
const byId = Object.fromEntries(list.map(u => [u.id, u]));
console.log(byId[2].name);                              // "Riya"`}),r.jsx("h3",{children:"H) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsxs("strong",{children:[r.jsx("code",{children:"assign"})," mutates its first arg"]}),"; use ",r.jsx("code",{children:"Object.assign({}, a, b)"})," or spread for a new object."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Shallow only:"})," both ",r.jsx("code",{children:"assign"})," and spread copy references for nested objects."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"keys/values/entries"})," ignore symbols & non-enumerables; use ",r.jsx("code",{children:"Object.getOwnPropertySymbols"})," / descriptors if needed."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Key order:"})," integer-like keys come first in ascending order, then others by insertion."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Transform/filter objects via ",r.jsx("code",{children:"entries → map/filter → fromEntries"}),"."]}),r.jsxs("li",{children:["Merge immutably with ",r.jsx("code",{children:"Object.assign({}, ...)"})," or spread."]}),r.jsx("li",{children:"Remember it's all shallow copies - be careful with nested state."}),r.jsxs("li",{children:["Need symbols? Grab them with ",r.jsx("code",{children:"Object.getOwnPropertySymbols"}),"."]})]}),r.jsx(p.Divider,{})]})}function Tm({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="sets-and-maps";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Sets & Maps (when they help)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(Im,{})})})]})}function Im(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:["Use a ",r.jsx("strong",{children:"Set"})," for unique values + fast ",r.jsx("code",{children:"has"})," checks. Use a ",r.jsx("strong",{children:"Map"})," for key→value where keys can be ",r.jsx("em",{children:"any type"})," (objects, arrays, functions), with stable iteration order."]}),r.jsx("h3",{children:"A) Set - unique values & fast membership"}),r.jsx(p.Code,{children:`const s = new Set([1, 2, 2, 3]);
console.log([...s]);                       // [1, 2, 3] (deduped)
s.add(4).add(4);
console.log(s.has(2), s.size);             // true 3
s.delete(1);
console.log([...s]);                       // [2, 3, 4]

// SameValueZero equality → NaN equals NaN in Set
const z = new Set([NaN, NaN]);
console.log(z.size);                       // 1

// Convert array -> unique array
const unique = arr => [...new Set(arr)];
console.log(unique([2,2,3,1,3]));          // [2, 3, 1]`}),r.jsx("h3",{children:"B) Set operations - union, intersection, difference"}),r.jsx(p.Code,{children:`const A = new Set([1,2,3]);
const B = new Set([3,4]);

const union = new Set([...A, ...B]);
console.log([...union]);                   // [1,2,3,4]

const intersection = new Set([...A].filter(x => B.has(x)));
console.log([...intersection]);            // [3]

const difference = new Set([...A].filter(x => !B.has(x)));
console.log([...difference]);              // [1,2]`}),r.jsx("h3",{children:"C) Map - key→value with any key type"}),r.jsx(p.Code,{children:`const m = new Map([["id", 1], ["name", "Ash"]]);
console.log(m.get("id"), m.has("name"), m.size);  // 1 true 2
m.set("role", "dev").set("city", "BLR");
console.log([...m.keys()]);                        // ["id","name","role","city"]

// Object keys as keys (identity-based)
const objKey = { k: 1 };
m.set(objKey, "value for obj");
console.log(m.get(objKey));                       // "value for obj"
console.log(m.get({ k: 1 }));                     // undefined (different reference)

// Convert object ↔ Map
const o = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(o));
console.log(mapFromObj.get("a"));                 // 1
const objFromMap = Object.fromEntries(mapFromObj);
console.log(objFromMap);                          // { a: 1, b: 2 }`}),r.jsx("h3",{children:"D) When Sets/Maps help vs Arrays/Objects"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Set"}),": quick dedupe; O(1) membership checks (e.g., selected IDs, visited nodes)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Map"}),": non-string keys; predictable insertion order; avoids prototype pitfalls of objects."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Object"}),": best for JSON, simple string-keyed records, and ergonomic literals."]})]}),r.jsx("h3",{children:"E) WeakSet / WeakMap (lifetime tied to object keys)"}),r.jsx(p.Code,{children:`// WeakMap keys must be objects; entries are GC'd when keys are unreachable
const wm = new WeakMap();
let k = {};
wm.set(k, { meta: "cached" });
console.log(wm.has(k));                           // true
k = null; // after GC, entry may disappear (can't reliably log timing)`}),r.jsx("h3",{children:"F) Practical React patterns"}),r.jsx(p.Code,{children:`// 1) Selected IDs as a Set (immutable updates)
const toggle = (selected, id) => {
  const next = new Set(selected);
  next.has(id) ? next.delete(id) : next.add(id);
  return next;
};
console.log([...toggle(new Set([1]), 1)]);        // [] (removed)
console.log([...toggle(new Set([1]), 2)]);        // [1,2]

// 2) Fast lookup with Map (id → item)
const list = [{id:1,n:"A"},{id:2,n:"B"}];
const byId = new Map(list.map(x => [x.id, x]));
console.log(byId.get(2).n);                       // "B"

// 3) Memoized cache keyed by complex keys (Map)
const cache = new Map();
const getSum = (a, b) => {
  const key = JSON.stringify([a, b]); // or array as key if stable reference
  if (cache.has(key)) return cache.get(key);
  const val = a + b;
  cache.set(key, val);
  return val;
};
console.log(getSum(2,3), getSum(2,3));            // 5 5 (second from cache)`}),r.jsx("h3",{children:"G) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Not JSON-serializable:"})," ",r.jsx("code",{children:"Set"}),"/",r.jsx("code",{children:"Map"})," need conversion (e.g., ",r.jsx("code",{children:"[...set]"}),", ",r.jsx("code",{children:"Object.fromEntries(map)"}),")."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Reference identity:"})," Map keys compare by reference; use the same object instance or a stable string key."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Iteration order:"})," Set/Map iterate in insertion order; use this for deterministic UI."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Shallow semantics:"})," Sets don't deep-compare objects; two equal-shaped objects are different keys."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Need uniqueness or fast membership? → ",r.jsx("strong",{children:"Set"}),"."]}),r.jsxs("li",{children:["Need keys that aren't strings? → ",r.jsx("strong",{children:"Map"}),"."]}),r.jsx("li",{children:"Convert before JSON/storage; prefer objects for raw API payloads."}),r.jsx("li",{children:"For React state, clone Sets/Maps to new instances to trigger updates."})]}),r.jsx(p.Divider,{})]})}function Am({defaultOpen:i=!1}){const[a,c]=se.useState(!!i),d="promises-async-await";return r.jsxs(p.Topic,{children:[r.jsxs(p.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[r.jsx(p.Arrow,{"data-open":a,children:"▸"}),r.jsx("span",{children:"Promises & async/await (patterns, errors, concurrency)"})]}),r.jsx(p.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:r.jsx("div",{children:r.jsx(Dm,{})})})]})}function Dm(){return r.jsxs(p.Content,{children:[r.jsxs("p",{children:["A ",r.jsx("strong",{children:"Promise"})," represents a value that will resolve later.",r.jsx("strong",{children:"async/await"})," makes promise code read like sync code. Use ",r.jsx("code",{children:"try/catch"})," for errors, and prefer ",r.jsx("strong",{children:"concurrency"})," helpers (",r.jsx("code",{children:"Promise.all"}),", etc.) for speed."]}),r.jsx("h3",{children:"A) Make a Promise & basic handlers"}),r.jsx(p.Code,{children:`// Create a promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("OK"), 100);
});

p.then(v => console.log("then:", v))     // "then: OK"
 .catch(e => console.log("error:", e))
 .finally(() => console.log("done"));    // "done" (always runs)

// Shortcut: Promise.resolve / Promise.reject
Promise.resolve(42).then(x => console.log(x)); // 42`}),r.jsx("h3",{children:"B) Chain & propagate errors"}),r.jsx(p.Code,{children:`Promise.resolve(2)
  .then(x => x * 3)                        // 6
  .then(x => { throw new Error("boom"); })
  .then(() => "never")
  .catch(err => "handled: " + err.message)  // "handled: boom"
  .then(msg => console.log(msg));           // "handled: boom"`}),r.jsx("h3",{children:"C) async/await - sugar over promises"}),r.jsx(p.Code,{children:`async function work() {
  try {
    const a = await Promise.resolve(10);
    const b = await Promise.resolve(5);
    return a + b;
  } catch (e) {
    return -1; // or: throw e;
  } finally {
    // cleanup
  }
}

work().then(x => console.log(x));          // 15

// async functions always return a Promise
console.log(work() instanceof Promise);    // true`}),r.jsx("h3",{children:"D) Concurrent vs sequential (speed matters)"}),r.jsx(p.Code,{children:`// Slow (sequential): waits one by one
const t = () => new Promise(r => setTimeout(() => r(1), 100));
async function slow() {
  const a = await t();                     // ~100ms
  const b = await t();                     // ~200ms total
  return a + b;
}

// Fast (concurrent): start together, then await
async function fast() {
  const pa = t();                          // start
  const pb = t();                          // start
  const [a, b] = await Promise.all([pa, pb]); // ~100ms total
  return a + b;
}

slow().then(x => console.log("slow:", x)); // "slow: 2"
fast().then(x => console.log("fast:", x)); // "fast: 2"`}),r.jsx("h3",{children:"E) Promise helpers - all / allSettled / race / any"}),r.jsx(p.Code,{children:`const ok = (v, ms=50) => new Promise(r => setTimeout(() => r(v), ms));
const fail = (e, ms=50) => new Promise((_, rej) => setTimeout(() => rej(new Error(e)), ms));

// 1) all: fail-fast if any rejects
Promise.all([ok(1), ok(2)]).then(v => console.log(v));         // [1, 2]
// Promise.all([ok(1), fail("x")]).catch(e => console.log(e.message)); // "x"

// 2) allSettled: never rejects; gives statuses
Promise.allSettled([ok("A"), fail("B")]).then(r => console.log(r.map(x => x.status)));
// ["fulfilled", "rejected"]

// 3) race: first settled (resolve OR reject) wins
Promise.race([ok("first", 30), ok("second", 60)]).then(v => console.log(v)); // "first"

// 4) any: first fulfilled wins (ignores rejections until all reject)
// Promise.any([fail("X",30), ok("Y",40)]).then(v => console.log(v));        // "Y"`}),r.jsx("h3",{children:"F) Fetch JSON helper + timeout (AbortController)"}),r.jsx(p.Code,{children:`// NOTE: Full "Fetch basics + JSON" is its own topic.
// Minimal helper with timeout/abort:
async function fetchJSON(url, { timeout = 8000, ...opts } = {}) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url, { ...opts, signal: ctrl.signal });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } finally {
    clearTimeout(id);
  }
}

// Example usage (won't run here):
// fetchJSON("/api/users").then(data => console.log(Array.isArray(data))); // true/false`}),r.jsx("h3",{children:"G) Loops: forEach pitfall, use for...of or Promise.all"}),r.jsx(p.Code,{children:`const delay = ms => new Promise(r => setTimeout(r, ms));

// ❌ forEach ignores async/await
async function bad(list) {
  list.forEach(async x => {
    await delay(50);
    console.log("done", x);   // runs later, bad control flow
  });
  console.log("returned");     // returns before items finish
}

// ✅ sequential
async function seq(list) {
  for (const x of list) {
    await delay(50);
    console.log("seq", x);    // "seq 1", "seq 2", ...
  }
}

// ✅ concurrent (start all then wait)
async function conc(list) {
  await Promise.all(list.map(async x => {
    await delay(50);
    return x * 2;
  }));
  console.log("all done");    // after ~50ms
}

bad([1,2]);    // "returned" (then logs later)
seq([1,2]);    // orderly
conc([1,2]);   // fast`}),r.jsx("h3",{children:"H) Microtasks vs macrotasks (timing)"}),r.jsx(p.Code,{children:`console.log("A");
Promise.resolve().then(() => console.log("B (microtask)"));
setTimeout(() => console.log("C (macrotask)"), 0);
console.log("D");
// Order: A, D, B (microtask), C (macrotask)`}),r.jsx("h3",{children:"I) Tiny promisify utility"}),r.jsx(p.Code,{children:`// Convert a callback API into a promise-based one
const promisify = (fn) => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

// Example (simulated):
function legacySum(a, b, cb) { setTimeout(() => cb(null, a + b), 20); }
const sumP = promisify(legacySum);
sumP(2,3).then(v => console.log(v));           // 5`}),r.jsx("h3",{children:"J) Practical React pattern (fetch in effect + abort)"}),r.jsx(p.Code,{children:`// inside a component:
// React.useEffect(() => {
//   const ctrl = new AbortController();
//   (async () => {
//     try {
//       const res = await fetch("/api/items", { signal: ctrl.signal });
//       if (!res.ok) throw new Error("HTTP " + res.status);
//       const data = await res.json();
//       // setState(data)
//     } catch (e) {
//       if (e.name !== "AbortError") {
//         // show error toast
//       }
//     }
//   })();
//   return () => ctrl.abort(); // cancel on unmount
// }, []);`}),r.jsx("h3",{children:"K) Pitfalls & tips"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Always return/await"})," promises you start; avoid unhandled rejections."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Don't mix styles"})," unnecessarily: pick ",r.jsx("em",{children:"either"})," ",r.jsx("code",{children:"then/catch"})," or ",r.jsx("code",{children:"async/await"})," in a block."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Concurrency"}),": start promises first, then ",r.jsx("code",{children:"await Promise.all"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"forEach + async"})," is a trap - use ",r.jsx("code",{children:"for...of"})," or ",r.jsx("code",{children:"Promise.all(map())"}),"."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Timeouts & cancel"}),": use ",r.jsx("code",{children:"AbortController"})," or a ",r.jsx("code",{children:"race"})," with a timeout promise."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"async functions return Promises"}),"; throw to reject, return to resolve."]})]}),r.jsx("h3",{children:"Mini-checklist"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Use ",r.jsx("strong",{children:"async/await"})," + ",r.jsx("code",{children:"try/catch"})," for readable async code."]}),r.jsxs("li",{children:["Batch work with ",r.jsx("code",{children:"Promise.all"})," for speed; handle partials with ",r.jsx("code",{children:"allSettled"}),"."]}),r.jsxs("li",{children:["Guard fetches with ",r.jsx("code",{children:"AbortController"})," (cleanup on unmount)."]}),r.jsx("li",{children:"Know the event loop: microtasks (promise callbacks) run before timeouts."})]}),r.jsx(p.Divider,{})]})}function zm(){return r.jsxs(Mm.Wrapper,{children:[r.jsx("h1",{children:"ReactJS Handbook"}),r.jsxs("fieldset",{style:{padding:"0 15px 15px 30px",marginBottom:15},children:[r.jsx("legend",{style:{padding:15},children:"From Wikipedia - last updated: Sep 02, 2025"}),r.jsx("p",{children:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.'}),r.jsx("br",{}),r.jsx("p",{children:"React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements."})]}),r.jsx("h1",{style:{marginTop:"30px"},children:"My Notes"}),r.jsx("h3",{children:"last updated: Sep 02, 2025"}),r.jsx("div",{className:"divider"}),r.jsx("h3",{children:"0. Setup & Local Dev"}),r.jsxs(r.Fragment,{children:[r.jsx(Qh,{}),r.jsx(Kh,{}),r.jsx(Xh,{}),r.jsx(em,{}),r.jsx(tm,{}),r.jsx(lm,{})]}),r.jsx("h3",{style:{marginTop:50},children:"1. ES6+ I actually use daily"}),r.jsxs(r.Fragment,{children:[r.jsx(om,{}),r.jsx(am,{}),r.jsx(um,{}),r.jsx(fm,{}),r.jsx(hm,{}),r.jsx(gm,{}),r.jsx(ym,{}),r.jsx(jm,{}),r.jsx(km,{}),r.jsx(Cm,{}),r.jsx(Pm,{}),r.jsx(Nm,{}),r.jsx(Rm,{}),r.jsx(Tm,{}),r.jsx(Am,{})]})]})}const Mm={Wrapper:Pn.div`
    --bg: #0d0f14;
    --text: #e5e7eb;
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    padding: 10px;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
      "Segoe UI Emoji";
    line-height: 1.55;
    max-width: 900px;
    margin: auto;

    .divider {
        margin: 30px 15px;
        height: 1px;
        background-color: #333;
    }
  `};var zd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},id=se.createContext&&se.createContext(zd),Lm=["attr","size","title"];function $m(i,a){if(i==null)return{};var c=Fm(i,a),d,m;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(i);for(m=0;m<w.length;m++)d=w[m],!(a.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(i,d)&&(c[d]=i[d])}return c}function Fm(i,a){if(i==null)return{};var c={};for(var d in i)if(Object.prototype.hasOwnProperty.call(i,d)){if(a.indexOf(d)>=0)continue;c[d]=i[d]}return c}function xs(){return xs=Object.assign?Object.assign.bind():function(i){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(i[d]=c[d])}return i},xs.apply(this,arguments)}function ad(i,a){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);a&&(d=d.filter(function(m){return Object.getOwnPropertyDescriptor(i,m).enumerable})),c.push.apply(c,d)}return c}function ys(i){for(var a=1;a<arguments.length;a++){var c=arguments[a]!=null?arguments[a]:{};a%2?ad(Object(c),!0).forEach(function(d){Um(i,d,c[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):ad(Object(c)).forEach(function(d){Object.defineProperty(i,d,Object.getOwnPropertyDescriptor(c,d))})}return i}function Um(i,a,c){return a=Bm(a),a in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,i}function Bm(i){var a=Vm(i,"string");return typeof a=="symbol"?a:a+""}function Vm(i,a){if(typeof i!="object"||!i)return i;var c=i[Symbol.toPrimitive];if(c!==void 0){var d=c.call(i,a);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(i)}function Md(i){return i&&i.map((a,c)=>se.createElement(a.tag,ys({key:c},a.attr),Md(a.child)))}function Hm(i){return a=>se.createElement(Wm,xs({attr:ys({},i.attr)},a),Md(i.child))}function Wm(i){var a=c=>{var{attr:d,size:m,title:w}=i,P=$m(i,Lm),A=m||c.size||"1em",N;return c.className&&(N=c.className),i.className&&(N=(N?N+" ":"")+i.className),se.createElement("svg",xs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,d,P,{className:N,style:ys(ys({color:i.color||c.color},c.style),i.style),height:A,width:A,xmlns:"http://www.w3.org/2000/svg"}),w&&se.createElement("title",null,w),i.children)};return id!==void 0?se.createElement(id.Consumer,null,c=>a(c)):a(zd)}function Qm(i){return Hm({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"},child:[]}]})(i)}function Gm({threshold:i=50}){const[a,c]=se.useState(!1),d=se.useMemo(()=>{var w,P;return(P=(w=window.matchMedia)==null?void 0:w.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:P.matches},[]);se.useEffect(()=>{let w=!1;const P=()=>{w||(window.requestAnimationFrame(()=>{c(window.scrollY>i),w=!1}),w=!0)};return P(),window.addEventListener("scroll",P,{passive:!0}),()=>window.removeEventListener("scroll",P)},[i]);const m=()=>{window.scrollTo({top:0,behavior:d?"auto":"smooth"})};return r.jsx(Km,{type:"button","aria-label":"Scroll to top",onClick:m,"data-visible":a,title:"Back to top",children:r.jsx(Qm,{})})}const Km=Pn.button`
    position: fixed;
    right: 18px;
    bottom: 18px;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid #1c2333;
    background: radial-gradient(120% 120% at 30% 20%, #1b2235 0%, #0f1524 100%);
    color: #c7d2fe;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
    cursor: pointer;

    display: grid;
    place-items: center;
    font-size: 16px;
    line-height: 1;

    opacity: 0;
    transform: translateY(10px) scale(0.96);
    pointer-events: none;
    transition: opacity 160ms ease, transform 160ms ease, box-shadow 160ms ease;

    &[data-visible="true"] {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
    }

    &:hover {
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
    }
    &:focus-visible {
        outline: 2px solid #6366f1;
        outline-offset: 2px;
    }

    @media (max-width: 480px) {
        right: 12px;
        bottom: 12px;
        width: 40px;
        height: 40px;
    }
`,qm=()=>r.jsxs(r.Fragment,{children:[r.jsx(zm,{}),r.jsx(Gm,{})]});Hp.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx(qm,{})}));
