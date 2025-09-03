(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const P of w.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&d(P)}).observe(document,{childList:!0,subtree:!0});function c(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function d(m){if(m.ep)return;m.ep=!0;const w=c(m);fetch(m.href,w)}})();function Dh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var vi={exports:{}},Wr={},ji={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function Mh(){if(Mu)return te;Mu=1;var i=Symbol.for("react.element"),a=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),P=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),Q=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),L=Symbol.iterator;function $(x){return x===null||typeof x!="object"?null:(x=L&&x[L]||x["@@iterator"],typeof x=="function"?x:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,W={};function J(x,k,q){this.props=x,this.context=k,this.refs=W,this.updater=q||G}J.prototype.isReactComponent={},J.prototype.setState=function(x,k){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,k,"setState")},J.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function he(){}he.prototype=J.prototype;function ie(x,k,q){this.props=x,this.context=k,this.refs=W,this.updater=q||G}var le=ie.prototype=new he;le.constructor=ie,se(le,J.prototype),le.isPureReactComponent=!0;var Z=Array.isArray,de=Object.prototype.hasOwnProperty,K={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function Ne(x,k,q){var Y,re={},ne=null,fe=null;if(k!=null)for(Y in k.ref!==void 0&&(fe=k.ref),k.key!==void 0&&(ne=""+k.key),k)de.call(k,Y)&&!B.hasOwnProperty(Y)&&(re[Y]=k[Y]);var oe=arguments.length-2;if(oe===1)re.children=q;else if(1<oe){for(var ce=Array(oe),Me=0;Me<oe;Me++)ce[Me]=arguments[Me+2];re.children=ce}if(x&&x.defaultProps)for(Y in oe=x.defaultProps,oe)re[Y]===void 0&&(re[Y]=oe[Y]);return{$$typeof:i,type:x,key:ne,ref:fe,props:re,_owner:K.current}}function en(x,k){return{$$typeof:i,type:x.type,key:k,ref:x.ref,props:x.props,_owner:x._owner}}function xn(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function In(x){var k={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(q){return k[q]})}var an=/\/+/g;function Ve(x,k){return typeof x=="object"&&x!==null&&x.key!=null?In(""+x.key):k.toString(36)}function nn(x,k,q,Y,re){var ne=typeof x;(ne==="undefined"||ne==="boolean")&&(x=null);var fe=!1;if(x===null)fe=!0;else switch(ne){case"string":case"number":fe=!0;break;case"object":switch(x.$$typeof){case i:case a:fe=!0}}if(fe)return fe=x,re=re(fe),x=Y===""?"."+Ve(fe,0):Y,Z(re)?(q="",x!=null&&(q=x.replace(an,"$&/")+"/"),nn(re,k,q,"",function(Me){return Me})):re!=null&&(xn(re)&&(re=en(re,q+(!re.key||fe&&fe.key===re.key?"":(""+re.key).replace(an,"$&/")+"/")+x)),k.push(re)),1;if(fe=0,Y=Y===""?".":Y+":",Z(x))for(var oe=0;oe<x.length;oe++){ne=x[oe];var ce=Y+Ve(ne,oe);fe+=nn(ne,k,q,ce,re)}else if(ce=$(x),typeof ce=="function")for(x=ce.call(x),oe=0;!(ne=x.next()).done;)ne=ne.value,ce=Y+Ve(ne,oe++),fe+=nn(ne,k,q,ce,re);else if(ne==="object")throw k=String(x),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return fe}function cn(x,k,q){if(x==null)return x;var Y=[],re=0;return nn(x,Y,"","",function(ne){return k.call(q,ne,re++)}),Y}function $e(x){if(x._status===-1){var k=x._result;k=k(),k.then(function(q){(x._status===0||x._status===-1)&&(x._status=1,x._result=q)},function(q){(x._status===0||x._status===-1)&&(x._status=2,x._result=q)}),x._status===-1&&(x._status=0,x._result=k)}if(x._status===1)return x._result.default;throw x._result}var ge={current:null},N={transition:null},z={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:N,ReactCurrentOwner:K};function O(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:cn,forEach:function(x,k,q){cn(x,function(){k.apply(this,arguments)},q)},count:function(x){var k=0;return cn(x,function(){k++}),k},toArray:function(x){return cn(x,function(k){return k})||[]},only:function(x){if(!xn(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},te.Component=J,te.Fragment=c,te.Profiler=m,te.PureComponent=ie,te.StrictMode=d,te.Suspense=T,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,te.act=O,te.cloneElement=function(x,k,q){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Y=se({},x.props),re=x.key,ne=x.ref,fe=x._owner;if(k!=null){if(k.ref!==void 0&&(ne=k.ref,fe=K.current),k.key!==void 0&&(re=""+k.key),x.type&&x.type.defaultProps)var oe=x.type.defaultProps;for(ce in k)de.call(k,ce)&&!B.hasOwnProperty(ce)&&(Y[ce]=k[ce]===void 0&&oe!==void 0?oe[ce]:k[ce])}var ce=arguments.length-2;if(ce===1)Y.children=q;else if(1<ce){oe=Array(ce);for(var Me=0;Me<ce;Me++)oe[Me]=arguments[Me+2];Y.children=oe}return{$$typeof:i,type:x.type,key:re,ref:ne,props:Y,_owner:fe}},te.createContext=function(x){return x={$$typeof:P,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:w,_context:x},x.Consumer=x},te.createElement=Ne,te.createFactory=function(x){var k=Ne.bind(null,x);return k.type=x,k},te.createRef=function(){return{current:null}},te.forwardRef=function(x){return{$$typeof:I,render:x}},te.isValidElement=xn,te.lazy=function(x){return{$$typeof:V,_payload:{_status:-1,_result:x},_init:$e}},te.memo=function(x,k){return{$$typeof:Q,type:x,compare:k===void 0?null:k}},te.startTransition=function(x){var k=N.transition;N.transition={};try{x()}finally{N.transition=k}},te.unstable_act=O,te.useCallback=function(x,k){return ge.current.useCallback(x,k)},te.useContext=function(x){return ge.current.useContext(x)},te.useDebugValue=function(){},te.useDeferredValue=function(x){return ge.current.useDeferredValue(x)},te.useEffect=function(x,k){return ge.current.useEffect(x,k)},te.useId=function(){return ge.current.useId()},te.useImperativeHandle=function(x,k,q){return ge.current.useImperativeHandle(x,k,q)},te.useInsertionEffect=function(x,k){return ge.current.useInsertionEffect(x,k)},te.useLayoutEffect=function(x,k){return ge.current.useLayoutEffect(x,k)},te.useMemo=function(x,k){return ge.current.useMemo(x,k)},te.useReducer=function(x,k,q){return ge.current.useReducer(x,k,q)},te.useRef=function(x){return ge.current.useRef(x)},te.useState=function(x){return ge.current.useState(x)},te.useSyncExternalStore=function(x,k,q){return ge.current.useSyncExternalStore(x,k,q)},te.useTransition=function(){return ge.current.useTransition()},te.version="18.3.1",te}var zu;function Mi(){return zu||(zu=1,ji.exports=Mh()),ji.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function zh(){if(Lu)return Wr;Lu=1;var i=Mi(),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function P(I,T,Q){var V,L={},$=null,G=null;Q!==void 0&&($=""+Q),T.key!==void 0&&($=""+T.key),T.ref!==void 0&&(G=T.ref);for(V in T)d.call(T,V)&&!w.hasOwnProperty(V)&&(L[V]=T[V]);if(I&&I.defaultProps)for(V in T=I.defaultProps,T)L[V]===void 0&&(L[V]=T[V]);return{$$typeof:a,type:I,key:$,ref:G,props:L,_owner:m.current}}return Wr.Fragment=c,Wr.jsx=P,Wr.jsxs=P,Wr}var $u;function Lh(){return $u||($u=1,vi.exports=zh()),vi.exports}var t=Lh(),zi=Mi();const ee=Dh(zi);var ol={},wi={exports:{}},Xe={},ki={exports:{}},Si={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function $h(){return Fu||(Fu=1,function(i){function a(N,z){var O=N.length;N.push(z);e:for(;0<O;){var x=O-1>>>1,k=N[x];if(0<m(k,z))N[x]=z,N[O]=k,O=x;else break e}}function c(N){return N.length===0?null:N[0]}function d(N){if(N.length===0)return null;var z=N[0],O=N.pop();if(O!==z){N[0]=O;e:for(var x=0,k=N.length,q=k>>>1;x<q;){var Y=2*(x+1)-1,re=N[Y],ne=Y+1,fe=N[ne];if(0>m(re,O))ne<k&&0>m(fe,re)?(N[x]=fe,N[ne]=O,x=ne):(N[x]=re,N[Y]=O,x=Y);else if(ne<k&&0>m(fe,O))N[x]=fe,N[ne]=O,x=ne;else break e}}return z}function m(N,z){var O=N.sortIndex-z.sortIndex;return O!==0?O:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;i.unstable_now=function(){return w.now()}}else{var P=Date,I=P.now();i.unstable_now=function(){return P.now()-I}}var T=[],Q=[],V=1,L=null,$=3,G=!1,se=!1,W=!1,J=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function le(N){for(var z=c(Q);z!==null;){if(z.callback===null)d(Q);else if(z.startTime<=N)d(Q),z.sortIndex=z.expirationTime,a(T,z);else break;z=c(Q)}}function Z(N){if(W=!1,le(N),!se)if(c(T)!==null)se=!0,$e(de);else{var z=c(Q);z!==null&&ge(Z,z.startTime-N)}}function de(N,z){se=!1,W&&(W=!1,he(Ne),Ne=-1),G=!0;var O=$;try{for(le(z),L=c(T);L!==null&&(!(L.expirationTime>z)||N&&!In());){var x=L.callback;if(typeof x=="function"){L.callback=null,$=L.priorityLevel;var k=x(L.expirationTime<=z);z=i.unstable_now(),typeof k=="function"?L.callback=k:L===c(T)&&d(T),le(z)}else d(T);L=c(T)}if(L!==null)var q=!0;else{var Y=c(Q);Y!==null&&ge(Z,Y.startTime-z),q=!1}return q}finally{L=null,$=O,G=!1}}var K=!1,B=null,Ne=-1,en=5,xn=-1;function In(){return!(i.unstable_now()-xn<en)}function an(){if(B!==null){var N=i.unstable_now();xn=N;var z=!0;try{z=B(!0,N)}finally{z?Ve():(K=!1,B=null)}}else K=!1}var Ve;if(typeof ie=="function")Ve=function(){ie(an)};else if(typeof MessageChannel<"u"){var nn=new MessageChannel,cn=nn.port2;nn.port1.onmessage=an,Ve=function(){cn.postMessage(null)}}else Ve=function(){J(an,0)};function $e(N){B=N,K||(K=!0,Ve())}function ge(N,z){Ne=J(function(){N(i.unstable_now())},z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_continueExecution=function(){se||G||(se=!0,$e(de))},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):en=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return $},i.unstable_getFirstCallbackNode=function(){return c(T)},i.unstable_next=function(N){switch($){case 1:case 2:case 3:var z=3;break;default:z=$}var O=$;$=z;try{return N()}finally{$=O}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=$;$=N;try{return z()}finally{$=O}},i.unstable_scheduleCallback=function(N,z,O){var x=i.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?x+O:x):O=x,N){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=O+k,N={id:V++,callback:z,priorityLevel:N,startTime:O,expirationTime:k,sortIndex:-1},O>x?(N.sortIndex=O,a(Q,N),c(T)===null&&N===c(Q)&&(W?(he(Ne),Ne=-1):W=!0,ge(Z,O-x))):(N.sortIndex=k,a(T,N),se||G||(se=!0,$e(de))),N},i.unstable_shouldYield=In,i.unstable_wrapCallback=function(N){var z=$;return function(){var O=$;$=z;try{return N.apply(this,arguments)}finally{$=O}}}}(Si)),Si}var Uu;function Fh(){return Uu||(Uu=1,ki.exports=$h()),ki.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function Uh(){if(Bu)return Xe;Bu=1;var i=Mi(),a=Fh();function c(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,m={};function w(e,n){P(e,n),P(e+"Capture",n)}function P(e,n){for(m[e]=n,e=0;e<n.length;e++)d.add(n[e])}var I=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),T=Object.prototype.hasOwnProperty,Q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},L={};function $(e){return T.call(L,e)?!0:T.call(V,e)?!1:Q.test(e)?L[e]=!0:(V[e]=!0,!1)}function G(e,n,r,s){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function se(e,n,r,s){if(n===null||typeof n>"u"||G(e,n,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function W(e,n,r,s,l,o,u){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=u}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];J[n]=new W(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ie(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(he,ie);J[n]=new W(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(he,ie);J[n]=new W(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(he,ie);J[n]=new W(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function le(e,n,r,s){var l=J.hasOwnProperty(n)?J[n]:null;(l!==null?l.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(se(n,r,l,s)&&(r=null),s||l===null?$(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(n=l.attributeName,s=l.attributeNamespace,r===null?e.removeAttribute(n):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,s?e.setAttributeNS(s,n,r):e.setAttribute(n,r))))}var Z=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),K=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),en=Symbol.for("react.profiler"),xn=Symbol.for("react.provider"),In=Symbol.for("react.context"),an=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),nn=Symbol.for("react.suspense_list"),cn=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),N=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,x;function k(e){if(x===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);x=n&&n[1]||""}return`
`+x+e}var q=!1;function Y(e,n){if(!e||q)return"";q=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(j){var s=j}Reflect.construct(e,[],n)}else{try{n.call()}catch(j){s=j}e.call(n.prototype)}else{try{throw Error()}catch(j){s=j}e()}}catch(j){if(j&&s&&typeof j.stack=="string"){for(var l=j.stack.split(`
`),o=s.stack.split(`
`),u=l.length-1,h=o.length-1;1<=u&&0<=h&&l[u]!==o[h];)h--;for(;1<=u&&0<=h;u--,h--)if(l[u]!==o[h]){if(u!==1||h!==1)do if(u--,h--,0>h||l[u]!==o[h]){var p=`
`+l[u].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=u&&0<=h);break}}}finally{q=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?k(e):""}function re(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function ne(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case K:return"Portal";case en:return"Profiler";case Ne:return"StrictMode";case Ve:return"Suspense";case nn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case In:return(e.displayName||"Context")+".Consumer";case xn:return(e._context.displayName||"Context")+".Provider";case an:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cn:return n=e.displayName||null,n!==null?n:ne(e.type)||"Memo";case $e:n=e._payload,e=e._init;try{return ne(e(n))}catch{}}return null}function fe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(n);case 8:return n===Ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Me(e){var n=ce(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(u){s=""+u,o.call(this,u)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(u){s=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Dn(e){e._valueTracker||(e._valueTracker=Me(e))}function yn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),s="";return e&&(s=ce(e)?e.checked?"true":"false":e.value),e=s,e!==r?(n.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function El(e,n){var r=n.checked;return O({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Hi(e,n){var r=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;r=oe(n.value!=null?n.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Vi(e,n){n=n.checked,n!=null&&le(e,"checked",n,!1)}function Pl(e,n){Vi(e,n);var r=oe(n.value),s=n.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?bl(e,n.type,r):n.hasOwnProperty("defaultValue")&&bl(e,n.type,oe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wi(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function bl(e,n,r){(n!=="number"||Yr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var or=Array.isArray;function bt(e,n,r,s){if(e=e.options,n){n={};for(var l=0;l<r.length;l++)n["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=n.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&s&&(e[r].defaultSelected=!0)}else{for(r=""+oe(r),n=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Tl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(c(91));return O({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qi(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(c(92));if(or(r)){if(1<r.length)throw Error(c(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:oe(r)}}function Gi(e,n){var r=oe(n.value),s=oe(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Ki(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function qi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?qi(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,Ji=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,s,l){MSApp.execUnsafeLocalFunction(function(){return e(n,r,s,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ir(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ld=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){Ld.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ar[n]=ar[e]})});function Yi(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||ar.hasOwnProperty(e)&&ar[e]?(""+n).trim():n+"px"}function Xi(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var s=r.indexOf("--")===0,l=Yi(r,n[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,l):e[r]=l}}var $d=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,n){if(n){if($d[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(c(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(c(61))}if(n.style!=null&&typeof n.style!="object")throw Error(c(62))}}function Rl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _l=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,Tt=null,Nt=null;function Zi(e){if(e=Or(e)){if(typeof Il!="function")throw Error(c(280));var n=e.stateNode;n&&(n=ws(n),Il(e.stateNode,e.type,n))}}function ea(e){Tt?Nt?Nt.push(e):Nt=[e]:Tt=e}function na(){if(Tt){var e=Tt,n=Nt;if(Nt=Tt=null,Zi(e),n)for(e=0;e<n.length;e++)Zi(n[e])}}function ta(e,n){return e(n)}function ra(){}var Dl=!1;function sa(e,n,r){if(Dl)return e(n,r);Dl=!0;try{return ta(e,n,r)}finally{Dl=!1,(Tt!==null||Nt!==null)&&(ra(),na())}}function cr(e,n){var r=e.stateNode;if(r===null)return null;var s=ws(r);if(s===null)return null;r=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,n,typeof r));return r}var Ml=!1;if(I)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Ml=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Ml=!1}function Fd(e,n,r,s,l,o,u,h,p){var j=Array.prototype.slice.call(arguments,3);try{n.apply(r,j)}catch(C){this.onError(C)}}var dr=!1,Zr=null,es=!1,zl=null,Ud={onError:function(e){dr=!0,Zr=e}};function Bd(e,n,r,s,l,o,u,h,p){dr=!1,Zr=null,Fd.apply(Ud,arguments)}function Hd(e,n,r,s,l,o,u,h,p){if(Bd.apply(this,arguments),dr){if(dr){var j=Zr;dr=!1,Zr=null}else throw Error(c(198));es||(es=!0,zl=j)}}function dt(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function la(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function oa(e){if(dt(e)!==e)throw Error(c(188))}function Vd(e){var n=e.alternate;if(!n){if(n=dt(e),n===null)throw Error(c(188));return n!==e?null:e}for(var r=e,s=n;;){var l=r.return;if(l===null)break;var o=l.alternate;if(o===null){if(s=l.return,s!==null){r=s;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===r)return oa(l),e;if(o===s)return oa(l),n;o=o.sibling}throw Error(c(188))}if(r.return!==s.return)r=l,s=o;else{for(var u=!1,h=l.child;h;){if(h===r){u=!0,r=l,s=o;break}if(h===s){u=!0,s=l,r=o;break}h=h.sibling}if(!u){for(h=o.child;h;){if(h===r){u=!0,r=o,s=l;break}if(h===s){u=!0,s=o,r=l;break}h=h.sibling}if(!u)throw Error(c(189))}}if(r.alternate!==s)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:n}function ia(e){return e=Vd(e),e!==null?aa(e):null}function aa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=aa(e);if(n!==null)return n;e=e.sibling}return null}var ca=a.unstable_scheduleCallback,ua=a.unstable_cancelCallback,Wd=a.unstable_shouldYield,Qd=a.unstable_requestPaint,Ee=a.unstable_now,Gd=a.unstable_getCurrentPriorityLevel,Ll=a.unstable_ImmediatePriority,da=a.unstable_UserBlockingPriority,ns=a.unstable_NormalPriority,Kd=a.unstable_LowPriority,fa=a.unstable_IdlePriority,ts=null,Tn=null;function qd(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:Xd,Jd=Math.log,Yd=Math.LN2;function Xd(e){return e>>>=0,e===0?32:31-(Jd(e)/Yd|0)|0}var rs=64,ss=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ls(e,n){var r=e.pendingLanes;if(r===0)return 0;var s=0,l=e.suspendedLanes,o=e.pingedLanes,u=r&268435455;if(u!==0){var h=u&~l;h!==0?s=fr(h):(o&=u,o!==0&&(s=fr(o)))}else u=r&~l,u!==0?s=fr(u):o!==0&&(s=fr(o));if(s===0)return 0;if(n!==0&&n!==s&&(n&l)===0&&(l=s&-s,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if((s&4)!==0&&(s|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)r=31-vn(n),l=1<<r,s|=e[r],n&=~l;return s}function Zd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(e,n){for(var r=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var u=31-vn(o),h=1<<u,p=l[u];p===-1?((h&r)===0||(h&s)!==0)&&(l[u]=Zd(h,n)):p<=n&&(e.expiredLanes|=h),o&=~h}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ha(){var e=rs;return rs<<=1,(rs&4194240)===0&&(rs=64),e}function Fl(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function hr(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-vn(n),e[n]=r}function nf(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-vn(r),o=1<<l;n[l]=0,s[l]=-1,e[l]=-1,r&=~o}}function Ul(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var s=31-vn(r),l=1<<s;l&n|e[s]&n&&(e[s]|=n),r&=~l}}var me=0;function pa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ma,Bl,ga,xa,ya,Hl=!1,os=[],Wn=null,Qn=null,Gn=null,pr=new Map,mr=new Map,Kn=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(e,n){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":pr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(n.pointerId)}}function gr(e,n,r,s,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[l]},n!==null&&(n=Or(n),n!==null&&Bl(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function rf(e,n,r,s,l){switch(n){case"focusin":return Wn=gr(Wn,e,n,r,s,l),!0;case"dragenter":return Qn=gr(Qn,e,n,r,s,l),!0;case"mouseover":return Gn=gr(Gn,e,n,r,s,l),!0;case"pointerover":var o=l.pointerId;return pr.set(o,gr(pr.get(o)||null,e,n,r,s,l)),!0;case"gotpointercapture":return o=l.pointerId,mr.set(o,gr(mr.get(o)||null,e,n,r,s,l)),!0}return!1}function ja(e){var n=ft(e.target);if(n!==null){var r=dt(n);if(r!==null){if(n=r.tag,n===13){if(n=la(r),n!==null){e.blockedOn=n,ya(e.priority,function(){ga(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function is(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Wl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);_l=s,r.target.dispatchEvent(s),_l=null}else return n=Or(r),n!==null&&Bl(n),e.blockedOn=r,!1;n.shift()}return!0}function wa(e,n,r){is(e)&&r.delete(n)}function sf(){Hl=!1,Wn!==null&&is(Wn)&&(Wn=null),Qn!==null&&is(Qn)&&(Qn=null),Gn!==null&&is(Gn)&&(Gn=null),pr.forEach(wa),mr.forEach(wa)}function xr(e,n){e.blockedOn===n&&(e.blockedOn=null,Hl||(Hl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,sf)))}function yr(e){function n(l){return xr(l,e)}if(0<os.length){xr(os[0],e);for(var r=1;r<os.length;r++){var s=os[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Wn!==null&&xr(Wn,e),Qn!==null&&xr(Qn,e),Gn!==null&&xr(Gn,e),pr.forEach(n),mr.forEach(n),r=0;r<Kn.length;r++)s=Kn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Kn.length&&(r=Kn[0],r.blockedOn===null);)ja(r),r.blockedOn===null&&Kn.shift()}var Ot=Z.ReactCurrentBatchConfig,as=!0;function lf(e,n,r,s){var l=me,o=Ot.transition;Ot.transition=null;try{me=1,Vl(e,n,r,s)}finally{me=l,Ot.transition=o}}function of(e,n,r,s){var l=me,o=Ot.transition;Ot.transition=null;try{me=4,Vl(e,n,r,s)}finally{me=l,Ot.transition=o}}function Vl(e,n,r,s){if(as){var l=Wl(e,n,r,s);if(l===null)ao(e,n,s,cs,r),va(e,s);else if(rf(l,e,n,r,s))s.stopPropagation();else if(va(e,s),n&4&&-1<tf.indexOf(e)){for(;l!==null;){var o=Or(l);if(o!==null&&ma(o),o=Wl(e,n,r,s),o===null&&ao(e,n,s,cs,r),o===l)break;l=o}l!==null&&s.stopPropagation()}else ao(e,n,s,null,r)}}var cs=null;function Wl(e,n,r,s){if(cs=null,e=Al(s),e=ft(e),e!==null)if(n=dt(e),n===null)e=null;else if(r=n.tag,r===13){if(e=la(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return cs=e,null}function ka(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gd()){case Ll:return 1;case da:return 4;case ns:case Kd:return 16;case fa:return 536870912;default:return 16}default:return 16}}var qn=null,Ql=null,us=null;function Sa(){if(us)return us;var e,n=Ql,r=n.length,s,l="value"in qn?qn.value:qn.textContent,o=l.length;for(e=0;e<r&&n[e]===l[e];e++);var u=r-e;for(s=1;s<=u&&n[r-s]===l[o-s];s++);return us=l.slice(e,1<s?1-s:void 0)}function ds(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fs(){return!0}function Ca(){return!1}function tn(e){function n(r,s,l,o,u){this._reactName=r,this._targetInst=l,this.type=s,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(r=e[h],this[h]=r?r(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fs:Ca,this.isPropagationStopped=Ca,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=fs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=fs)},persist:function(){},isPersistent:fs}),n}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=tn(Rt),vr=O({},Rt,{view:0,detail:0}),af=tn(vr),Kl,ql,jr,hs=O({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Kl=e.screenX-jr.screenX,ql=e.screenY-jr.screenY):ql=Kl=0,jr=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),Ea=tn(hs),cf=O({},hs,{dataTransfer:0}),uf=tn(cf),df=O({},vr,{relatedTarget:0}),Jl=tn(df),ff=O({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),hf=tn(ff),pf=O({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mf=tn(pf),gf=O({},Rt,{data:0}),Pa=tn(gf),xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vf[e])?!!n[e]:!1}function Yl(){return jf}var wf=O({},vr,{key:function(e){if(e.key){var n=xf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ds(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(e){return e.type==="keypress"?ds(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ds(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kf=tn(wf),Sf=O({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ba=tn(Sf),Cf=O({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),Ef=tn(Cf),Pf=O({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),bf=tn(Pf),Tf=O({},hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nf=tn(Tf),Of=[9,13,27,32],Xl=I&&"CompositionEvent"in window,wr=null;I&&"documentMode"in document&&(wr=document.documentMode);var Rf=I&&"TextEvent"in window&&!wr,Ta=I&&(!Xl||wr&&8<wr&&11>=wr),Na=" ",Oa=!1;function Ra(e,n){switch(e){case"keyup":return Of.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _a(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _t=!1;function _f(e,n){switch(e){case"compositionend":return _a(n);case"keypress":return n.which!==32?null:(Oa=!0,Na);case"textInput":return e=n.data,e===Na&&Oa?null:e;default:return null}}function Af(e,n){if(_t)return e==="compositionend"||!Xl&&Ra(e,n)?(e=Sa(),us=Ql=qn=null,_t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ta&&n.locale!=="ko"?null:n.data;default:return null}}var If={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!If[e.type]:n==="textarea"}function Ia(e,n,r,s){ea(s),n=ys(n,"onChange"),0<n.length&&(r=new Gl("onChange","change",null,r,s),e.push({event:r,listeners:n}))}var kr=null,Sr=null;function Df(e){Xa(e,0)}function ps(e){var n=zt(e);if(yn(n))return e}function Mf(e,n){if(e==="change")return n}var Da=!1;if(I){var Zl;if(I){var eo="oninput"in document;if(!eo){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),eo=typeof Ma.oninput=="function"}Zl=eo}else Zl=!1;Da=Zl&&(!document.documentMode||9<document.documentMode)}function za(){kr&&(kr.detachEvent("onpropertychange",La),Sr=kr=null)}function La(e){if(e.propertyName==="value"&&ps(Sr)){var n=[];Ia(n,Sr,e,Al(e)),sa(Df,n)}}function zf(e,n,r){e==="focusin"?(za(),kr=n,Sr=r,kr.attachEvent("onpropertychange",La)):e==="focusout"&&za()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(Sr)}function $f(e,n){if(e==="click")return ps(n)}function Ff(e,n){if(e==="input"||e==="change")return ps(n)}function Uf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:Uf;function Cr(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),s=Object.keys(n);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var l=r[s];if(!T.call(n,l)||!jn(e[l],n[l]))return!1}return!0}function $a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fa(e,n){var r=$a(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=n&&s>=n)return{node:r,offset:n-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$a(r)}}function Ua(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ua(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ba(){for(var e=window,n=Yr();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Yr(e.document)}return n}function no(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bf(e){var n=Ba(),r=e.focusedElem,s=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&Ua(r.ownerDocument.documentElement,r)){if(s!==null&&no(r)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,o=Math.min(s.start,l);s=s.end===void 0?o:Math.min(s.end,l),!e.extend&&o>s&&(l=s,s=o,o=l),l=Fa(r,o);var u=Fa(r,s);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>s?(e.addRange(n),e.extend(u.node,u.offset)):(n.setEnd(u.node,u.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hf=I&&"documentMode"in document&&11>=document.documentMode,At=null,to=null,Er=null,ro=!1;function Ha(e,n,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ro||At==null||At!==Yr(s)||(s=At,"selectionStart"in s&&no(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Er&&Cr(Er,s)||(Er=s,s=ys(to,"onSelect"),0<s.length&&(n=new Gl("onSelect","select",null,n,r),e.push({event:n,listeners:s}),n.target=At)))}function ms(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var It={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionend:ms("Transition","TransitionEnd")},so={},Va={};I&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete It.animationend.animation,delete It.animationiteration.animation,delete It.animationstart.animation),"TransitionEvent"in window||delete It.transitionend.transition);function gs(e){if(so[e])return so[e];if(!It[e])return e;var n=It[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Va)return so[e]=n[r];return e}var Wa=gs("animationend"),Qa=gs("animationiteration"),Ga=gs("animationstart"),Ka=gs("transitionend"),qa=new Map,Ja="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,n){qa.set(e,n),w(n,[e])}for(var lo=0;lo<Ja.length;lo++){var oo=Ja[lo],Vf=oo.toLowerCase(),Wf=oo[0].toUpperCase()+oo.slice(1);Jn(Vf,"on"+Wf)}Jn(Wa,"onAnimationEnd"),Jn(Qa,"onAnimationIteration"),Jn(Ga,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(Ka,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Ya(e,n,r){var s=e.type||"unknown-event";e.currentTarget=r,Hd(s,n,void 0,e),e.currentTarget=null}function Xa(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],l=s.event;s=s.listeners;e:{var o=void 0;if(n)for(var u=s.length-1;0<=u;u--){var h=s[u],p=h.instance,j=h.currentTarget;if(h=h.listener,p!==o&&l.isPropagationStopped())break e;Ya(l,h,j),o=p}else for(u=0;u<s.length;u++){if(h=s[u],p=h.instance,j=h.currentTarget,h=h.listener,p!==o&&l.isPropagationStopped())break e;Ya(l,h,j),o=p}}}if(es)throw e=zl,es=!1,zl=null,e}function ye(e,n){var r=n[mo];r===void 0&&(r=n[mo]=new Set);var s=e+"__bubble";r.has(s)||(Za(n,e,2,!1),r.add(s))}function io(e,n,r){var s=0;n&&(s|=4),Za(r,e,s,n)}var xs="_reactListening"+Math.random().toString(36).slice(2);function br(e){if(!e[xs]){e[xs]=!0,d.forEach(function(r){r!=="selectionchange"&&(Qf.has(r)||io(r,!1,e),io(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xs]||(n[xs]=!0,io("selectionchange",!1,n))}}function Za(e,n,r,s){switch(ka(n)){case 1:var l=lf;break;case 4:l=of;break;default:l=Vl}r=l.bind(null,n,r,e),l=void 0,!Ml||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(n,r,{capture:!0,passive:l}):e.addEventListener(n,r,!0):l!==void 0?e.addEventListener(n,r,{passive:l}):e.addEventListener(n,r,!1)}function ao(e,n,r,s,l){var o=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var u=s.tag;if(u===3||u===4){var h=s.stateNode.containerInfo;if(h===l||h.nodeType===8&&h.parentNode===l)break;if(u===4)for(u=s.return;u!==null;){var p=u.tag;if((p===3||p===4)&&(p=u.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;u=u.return}for(;h!==null;){if(u=ft(h),u===null)return;if(p=u.tag,p===5||p===6){s=o=u;continue e}h=h.parentNode}}s=s.return}sa(function(){var j=o,C=Al(r),E=[];e:{var S=qa.get(e);if(S!==void 0){var R=Gl,A=e;switch(e){case"keypress":if(ds(r)===0)break e;case"keydown":case"keyup":R=kf;break;case"focusin":A="focus",R=Jl;break;case"focusout":A="blur",R=Jl;break;case"beforeblur":case"afterblur":R=Jl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Ef;break;case Wa:case Qa:case Ga:R=hf;break;case Ka:R=bf;break;case"scroll":R=af;break;case"wheel":R=Nf;break;case"copy":case"cut":case"paste":R=mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=ba}var D=(n&4)!==0,Pe=!D&&e==="scroll",y=D?S!==null?S+"Capture":null:S;D=[];for(var g=j,v;g!==null;){v=g;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,y!==null&&(b=cr(g,y),b!=null&&D.push(Tr(g,b,v)))),Pe)break;g=g.return}0<D.length&&(S=new R(S,A,null,r,C),E.push({event:S,listeners:D}))}}if((n&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",S&&r!==_l&&(A=r.relatedTarget||r.fromElement)&&(ft(A)||A[Mn]))break e;if((R||S)&&(S=C.window===C?C:(S=C.ownerDocument)?S.defaultView||S.parentWindow:window,R?(A=r.relatedTarget||r.toElement,R=j,A=A?ft(A):null,A!==null&&(Pe=dt(A),A!==Pe||A.tag!==5&&A.tag!==6)&&(A=null)):(R=null,A=j),R!==A)){if(D=Ea,b="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(D=ba,b="onPointerLeave",y="onPointerEnter",g="pointer"),Pe=R==null?S:zt(R),v=A==null?S:zt(A),S=new D(b,g+"leave",R,r,C),S.target=Pe,S.relatedTarget=v,b=null,ft(C)===j&&(D=new D(y,g+"enter",A,r,C),D.target=v,D.relatedTarget=Pe,b=D),Pe=b,R&&A)n:{for(D=R,y=A,g=0,v=D;v;v=Dt(v))g++;for(v=0,b=y;b;b=Dt(b))v++;for(;0<g-v;)D=Dt(D),g--;for(;0<v-g;)y=Dt(y),v--;for(;g--;){if(D===y||y!==null&&D===y.alternate)break n;D=Dt(D),y=Dt(y)}D=null}else D=null;R!==null&&ec(E,S,R,D,!1),A!==null&&Pe!==null&&ec(E,Pe,A,D,!0)}}e:{if(S=j?zt(j):window,R=S.nodeName&&S.nodeName.toLowerCase(),R==="select"||R==="input"&&S.type==="file")var M=Mf;else if(Aa(S))if(Da)M=Ff;else{M=Lf;var F=zf}else(R=S.nodeName)&&R.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(M=$f);if(M&&(M=M(e,j))){Ia(E,M,r,C);break e}F&&F(e,S,j),e==="focusout"&&(F=S._wrapperState)&&F.controlled&&S.type==="number"&&bl(S,"number",S.value)}switch(F=j?zt(j):window,e){case"focusin":(Aa(F)||F.contentEditable==="true")&&(At=F,to=j,Er=null);break;case"focusout":Er=to=At=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,Ha(E,r,C);break;case"selectionchange":if(Hf)break;case"keydown":case"keyup":Ha(E,r,C)}var U;if(Xl)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else _t?Ra(e,r)&&(H="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(H="onCompositionStart");H&&(Ta&&r.locale!=="ko"&&(_t||H!=="onCompositionStart"?H==="onCompositionEnd"&&_t&&(U=Sa()):(qn=C,Ql="value"in qn?qn.value:qn.textContent,_t=!0)),F=ys(j,H),0<F.length&&(H=new Pa(H,e,null,r,C),E.push({event:H,listeners:F}),U?H.data=U:(U=_a(r),U!==null&&(H.data=U)))),(U=Rf?_f(e,r):Af(e,r))&&(j=ys(j,"onBeforeInput"),0<j.length&&(C=new Pa("onBeforeInput","beforeinput",null,r,C),E.push({event:C,listeners:j}),C.data=U))}Xa(E,n)})}function Tr(e,n,r){return{instance:e,listener:n,currentTarget:r}}function ys(e,n){for(var r=n+"Capture",s=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=cr(e,r),o!=null&&s.unshift(Tr(e,o,l)),o=cr(e,n),o!=null&&s.push(Tr(e,o,l))),e=e.return}return s}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ec(e,n,r,s,l){for(var o=n._reactName,u=[];r!==null&&r!==s;){var h=r,p=h.alternate,j=h.stateNode;if(p!==null&&p===s)break;h.tag===5&&j!==null&&(h=j,l?(p=cr(r,o),p!=null&&u.unshift(Tr(r,p,h))):l||(p=cr(r,o),p!=null&&u.push(Tr(r,p,h)))),r=r.return}u.length!==0&&e.push({event:n,listeners:u})}var Gf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(Gf,`
`).replace(Kf,"")}function vs(e,n,r){if(n=nc(n),nc(e)!==n&&r)throw Error(c(425))}function js(){}var co=null,uo=null;function fo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ho=typeof setTimeout=="function"?setTimeout:void 0,qf=typeof clearTimeout=="function"?clearTimeout:void 0,tc=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof tc<"u"?function(e){return tc.resolve(null).then(e).catch(Yf)}:ho;function Yf(e){setTimeout(function(){throw e})}function po(e,n){var r=n,s=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(s===0){e.removeChild(l),yr(n);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=l}while(r);yr(n)}function Yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function rc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var Mt=Math.random().toString(36).slice(2),Nn="__reactFiber$"+Mt,Nr="__reactProps$"+Mt,Mn="__reactContainer$"+Mt,mo="__reactEvents$"+Mt,Xf="__reactListeners$"+Mt,Zf="__reactHandles$"+Mt;function ft(e){var n=e[Nn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Mn]||r[Nn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=rc(e);e!==null;){if(r=e[Nn])return r;e=rc(e)}return n}e=r,r=e.parentNode}return null}function Or(e){return e=e[Nn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function ws(e){return e[Nr]||null}var go=[],Lt=-1;function Xn(e){return{current:e}}function ve(e){0>Lt||(e.current=go[Lt],go[Lt]=null,Lt--)}function xe(e,n){Lt++,go[Lt]=e.current,e.current=n}var Zn={},Fe=Xn(Zn),Ge=Xn(!1),ht=Zn;function $t(e,n){var r=e.type.contextTypes;if(!r)return Zn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in r)l[o]=n[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ke(e){return e=e.childContextTypes,e!=null}function ks(){ve(Ge),ve(Fe)}function sc(e,n,r){if(Fe.current!==Zn)throw Error(c(168));xe(Fe,n),xe(Ge,r)}function lc(e,n,r){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var l in s)if(!(l in n))throw Error(c(108,fe(e)||"Unknown",l));return O({},r,s)}function Ss(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,ht=Fe.current,xe(Fe,e),xe(Ge,Ge.current),!0}function oc(e,n,r){var s=e.stateNode;if(!s)throw Error(c(169));r?(e=lc(e,n,ht),s.__reactInternalMemoizedMergedChildContext=e,ve(Ge),ve(Fe),xe(Fe,e)):ve(Ge),xe(Ge,r)}var zn=null,Cs=!1,xo=!1;function ic(e){zn===null?zn=[e]:zn.push(e)}function eh(e){Cs=!0,ic(e)}function et(){if(!xo&&zn!==null){xo=!0;var e=0,n=me;try{var r=zn;for(me=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}zn=null,Cs=!1}catch(l){throw zn!==null&&(zn=zn.slice(e+1)),ca(Ll,et),l}finally{me=n,xo=!1}}return null}var Ft=[],Ut=0,Es=null,Ps=0,un=[],dn=0,pt=null,Ln=1,$n="";function mt(e,n){Ft[Ut++]=Ps,Ft[Ut++]=Es,Es=e,Ps=n}function ac(e,n,r){un[dn++]=Ln,un[dn++]=$n,un[dn++]=pt,pt=e;var s=Ln;e=$n;var l=32-vn(s)-1;s&=~(1<<l),r+=1;var o=32-vn(n)+l;if(30<o){var u=l-l%5;o=(s&(1<<u)-1).toString(32),s>>=u,l-=u,Ln=1<<32-vn(n)+l|r<<l|s,$n=o+e}else Ln=1<<o|r<<l|s,$n=e}function yo(e){e.return!==null&&(mt(e,1),ac(e,1,0))}function vo(e){for(;e===Es;)Es=Ft[--Ut],Ft[Ut]=null,Ps=Ft[--Ut],Ft[Ut]=null;for(;e===pt;)pt=un[--dn],un[dn]=null,$n=un[--dn],un[dn]=null,Ln=un[--dn],un[dn]=null}var rn=null,sn=null,we=!1,wn=null;function cc(e,n){var r=mn(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function uc(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rn=e,sn=Yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rn=e,sn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=pt!==null?{id:Ln,overflow:$n}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=mn(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,rn=e,sn=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wo(e){if(we){var n=sn;if(n){var r=n;if(!uc(e,n)){if(jo(e))throw Error(c(418));n=Yn(r.nextSibling);var s=rn;n&&uc(e,n)?cc(s,r):(e.flags=e.flags&-4097|2,we=!1,rn=e)}}else{if(jo(e))throw Error(c(418));e.flags=e.flags&-4097|2,we=!1,rn=e}}}function dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function bs(e){if(e!==rn)return!1;if(!we)return dc(e),we=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!fo(e.type,e.memoizedProps)),n&&(n=sn)){if(jo(e))throw fc(),Error(c(418));for(;n;)cc(e,n),n=Yn(n.nextSibling)}if(dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){sn=Yn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}sn=null}}else sn=rn?Yn(e.stateNode.nextSibling):null;return!0}function fc(){for(var e=sn;e;)e=Yn(e.nextSibling)}function Bt(){sn=rn=null,we=!1}function ko(e){wn===null?wn=[e]:wn.push(e)}var nh=Z.ReactCurrentBatchConfig;function Rr(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var s=r.stateNode}if(!s)throw Error(c(147,e));var l=s,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(u){var h=l.refs;u===null?delete h[o]:h[o]=u},n._stringRef=o,n)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Ts(e,n){throw e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function hc(e){var n=e._init;return n(e._payload)}function pc(e){function n(y,g){if(e){var v=y.deletions;v===null?(y.deletions=[g],y.flags|=16):v.push(g)}}function r(y,g){if(!e)return null;for(;g!==null;)n(y,g),g=g.sibling;return null}function s(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function l(y,g){return y=at(y,g),y.index=0,y.sibling=null,y}function o(y,g,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<g?(y.flags|=2,g):v):(y.flags|=2,g)):(y.flags|=1048576,g)}function u(y){return e&&y.alternate===null&&(y.flags|=2),y}function h(y,g,v,b){return g===null||g.tag!==6?(g=hi(v,y.mode,b),g.return=y,g):(g=l(g,v),g.return=y,g)}function p(y,g,v,b){var M=v.type;return M===B?C(y,g,v.props.children,b,v.key):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$e&&hc(M)===g.type)?(b=l(g,v.props),b.ref=Rr(y,g,v),b.return=y,b):(b=Xs(v.type,v.key,v.props,null,y.mode,b),b.ref=Rr(y,g,v),b.return=y,b)}function j(y,g,v,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=pi(v,y.mode,b),g.return=y,g):(g=l(g,v.children||[]),g.return=y,g)}function C(y,g,v,b,M){return g===null||g.tag!==7?(g=St(v,y.mode,b,M),g.return=y,g):(g=l(g,v),g.return=y,g)}function E(y,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=hi(""+g,y.mode,v),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case de:return v=Xs(g.type,g.key,g.props,null,y.mode,v),v.ref=Rr(y,null,g),v.return=y,v;case K:return g=pi(g,y.mode,v),g.return=y,g;case $e:var b=g._init;return E(y,b(g._payload),v)}if(or(g)||z(g))return g=St(g,y.mode,v,null),g.return=y,g;Ts(y,g)}return null}function S(y,g,v,b){var M=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:h(y,g,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case de:return v.key===M?p(y,g,v,b):null;case K:return v.key===M?j(y,g,v,b):null;case $e:return M=v._init,S(y,g,M(v._payload),b)}if(or(v)||z(v))return M!==null?null:C(y,g,v,b,null);Ts(y,v)}return null}function R(y,g,v,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return y=y.get(v)||null,h(g,y,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case de:return y=y.get(b.key===null?v:b.key)||null,p(g,y,b,M);case K:return y=y.get(b.key===null?v:b.key)||null,j(g,y,b,M);case $e:var F=b._init;return R(y,g,v,F(b._payload),M)}if(or(b)||z(b))return y=y.get(v)||null,C(g,y,b,M,null);Ts(g,b)}return null}function A(y,g,v,b){for(var M=null,F=null,U=g,H=g=0,Ie=null;U!==null&&H<v.length;H++){U.index>H?(Ie=U,U=null):Ie=U.sibling;var ue=S(y,U,v[H],b);if(ue===null){U===null&&(U=Ie);break}e&&U&&ue.alternate===null&&n(y,U),g=o(ue,g,H),F===null?M=ue:F.sibling=ue,F=ue,U=Ie}if(H===v.length)return r(y,U),we&&mt(y,H),M;if(U===null){for(;H<v.length;H++)U=E(y,v[H],b),U!==null&&(g=o(U,g,H),F===null?M=U:F.sibling=U,F=U);return we&&mt(y,H),M}for(U=s(y,U);H<v.length;H++)Ie=R(U,y,H,v[H],b),Ie!==null&&(e&&Ie.alternate!==null&&U.delete(Ie.key===null?H:Ie.key),g=o(Ie,g,H),F===null?M=Ie:F.sibling=Ie,F=Ie);return e&&U.forEach(function(ct){return n(y,ct)}),we&&mt(y,H),M}function D(y,g,v,b){var M=z(v);if(typeof M!="function")throw Error(c(150));if(v=M.call(v),v==null)throw Error(c(151));for(var F=M=null,U=g,H=g=0,Ie=null,ue=v.next();U!==null&&!ue.done;H++,ue=v.next()){U.index>H?(Ie=U,U=null):Ie=U.sibling;var ct=S(y,U,ue.value,b);if(ct===null){U===null&&(U=Ie);break}e&&U&&ct.alternate===null&&n(y,U),g=o(ct,g,H),F===null?M=ct:F.sibling=ct,F=ct,U=Ie}if(ue.done)return r(y,U),we&&mt(y,H),M;if(U===null){for(;!ue.done;H++,ue=v.next())ue=E(y,ue.value,b),ue!==null&&(g=o(ue,g,H),F===null?M=ue:F.sibling=ue,F=ue);return we&&mt(y,H),M}for(U=s(y,U);!ue.done;H++,ue=v.next())ue=R(U,y,H,ue.value,b),ue!==null&&(e&&ue.alternate!==null&&U.delete(ue.key===null?H:ue.key),g=o(ue,g,H),F===null?M=ue:F.sibling=ue,F=ue);return e&&U.forEach(function(Ih){return n(y,Ih)}),we&&mt(y,H),M}function Pe(y,g,v,b){if(typeof v=="object"&&v!==null&&v.type===B&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case de:e:{for(var M=v.key,F=g;F!==null;){if(F.key===M){if(M=v.type,M===B){if(F.tag===7){r(y,F.sibling),g=l(F,v.props.children),g.return=y,y=g;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$e&&hc(M)===F.type){r(y,F.sibling),g=l(F,v.props),g.ref=Rr(y,F,v),g.return=y,y=g;break e}r(y,F);break}else n(y,F);F=F.sibling}v.type===B?(g=St(v.props.children,y.mode,b,v.key),g.return=y,y=g):(b=Xs(v.type,v.key,v.props,null,y.mode,b),b.ref=Rr(y,g,v),b.return=y,y=b)}return u(y);case K:e:{for(F=v.key;g!==null;){if(g.key===F)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){r(y,g.sibling),g=l(g,v.children||[]),g.return=y,y=g;break e}else{r(y,g);break}else n(y,g);g=g.sibling}g=pi(v,y.mode,b),g.return=y,y=g}return u(y);case $e:return F=v._init,Pe(y,g,F(v._payload),b)}if(or(v))return A(y,g,v,b);if(z(v))return D(y,g,v,b);Ts(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(r(y,g.sibling),g=l(g,v),g.return=y,y=g):(r(y,g),g=hi(v,y.mode,b),g.return=y,y=g),u(y)):r(y,g)}return Pe}var Ht=pc(!0),mc=pc(!1),Ns=Xn(null),Os=null,Vt=null,So=null;function Co(){So=Vt=Os=null}function Eo(e){var n=Ns.current;ve(Ns),e._currentValue=n}function Po(e,n,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===r)break;e=e.return}}function Wt(e,n){Os=e,So=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(qe=!0),e.firstContext=null)}function fn(e){var n=e._currentValue;if(So!==e)if(e={context:e,memoizedValue:n,next:null},Vt===null){if(Os===null)throw Error(c(308));Vt=e,Os.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return n}var gt=null;function bo(e){gt===null?gt=[e]:gt.push(e)}function gc(e,n,r,s){var l=n.interleaved;return l===null?(r.next=r,bo(n)):(r.next=l.next,l.next=r),n.interleaved=r,Fn(e,s)}function Fn(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var nt=!1;function To(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function tt(e,n,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ae&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,Fn(e,r)}return l=s.interleaved,l===null?(n.next=n,bo(s)):(n.next=l.next,l.next=n),s.interleaved=n,Fn(e,r)}function Rs(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,r|=s,n.lanes=r,Ul(e,r)}}function yc(e,n){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var l=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?l=o=u:o=o.next=u,r=r.next}while(r!==null);o===null?l=o=n:o=o.next=n}else l=o=n;r={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function _s(e,n,r,s){var l=e.updateQueue;nt=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var p=h,j=p.next;p.next=null,u===null?o=j:u.next=j,u=p;var C=e.alternate;C!==null&&(C=C.updateQueue,h=C.lastBaseUpdate,h!==u&&(h===null?C.firstBaseUpdate=j:h.next=j,C.lastBaseUpdate=p))}if(o!==null){var E=l.baseState;u=0,C=j=p=null,h=o;do{var S=h.lane,R=h.eventTime;if((s&S)===S){C!==null&&(C=C.next={eventTime:R,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var A=e,D=h;switch(S=n,R=r,D.tag){case 1:if(A=D.payload,typeof A=="function"){E=A.call(R,E,S);break e}E=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=D.payload,S=typeof A=="function"?A.call(R,E,S):A,S==null)break e;E=O({},E,S);break e;case 2:nt=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,S=l.effects,S===null?l.effects=[h]:S.push(h))}else R={eventTime:R,lane:S,tag:h.tag,payload:h.payload,callback:h.callback,next:null},C===null?(j=C=R,p=E):C=C.next=R,u|=S;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;S=h,h=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(!0);if(C===null&&(p=E),l.baseState=p,l.firstBaseUpdate=j,l.lastBaseUpdate=C,n=l.shared.interleaved,n!==null){l=n;do u|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);vt|=u,e.lanes=u,e.memoizedState=E}}function vc(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],l=s.callback;if(l!==null){if(s.callback=null,s=r,typeof l!="function")throw Error(c(191,l));l.call(s)}}}var _r={},On=Xn(_r),Ar=Xn(_r),Ir=Xn(_r);function xt(e){if(e===_r)throw Error(c(174));return e}function No(e,n){switch(xe(Ir,n),xe(Ar,e),xe(On,_r),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Nl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Nl(n,e)}ve(On),xe(On,n)}function Qt(){ve(On),ve(Ar),ve(Ir)}function jc(e){xt(Ir.current);var n=xt(On.current),r=Nl(n,e.type);n!==r&&(xe(Ar,e),xe(On,r))}function Oo(e){Ar.current===e&&(ve(On),ve(Ar))}var ke=Xn(0);function As(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ro=[];function _o(){for(var e=0;e<Ro.length;e++)Ro[e]._workInProgressVersionPrimary=null;Ro.length=0}var Is=Z.ReactCurrentDispatcher,Ao=Z.ReactCurrentBatchConfig,yt=0,Se=null,Oe=null,_e=null,Ds=!1,Dr=!1,Mr=0,th=0;function Ue(){throw Error(c(321))}function Io(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!jn(e[r],n[r]))return!1;return!0}function Do(e,n,r,s,l,o){if(yt=o,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Is.current=e===null||e.memoizedState===null?oh:ih,e=r(s,l),Dr){o=0;do{if(Dr=!1,Mr=0,25<=o)throw Error(c(301));o+=1,_e=Oe=null,n.updateQueue=null,Is.current=ah,e=r(s,l)}while(Dr)}if(Is.current=Ls,n=Oe!==null&&Oe.next!==null,yt=0,_e=Oe=Se=null,Ds=!1,n)throw Error(c(300));return e}function Mo(){var e=Mr!==0;return Mr=0,e}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Se.memoizedState=_e=e:_e=_e.next=e,_e}function hn(){if(Oe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=_e===null?Se.memoizedState:_e.next;if(n!==null)_e=n,Oe=e;else{if(e===null)throw Error(c(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},_e===null?Se.memoizedState=_e=e:_e=_e.next=e}return _e}function zr(e,n){return typeof n=="function"?n(e):n}function zo(e){var n=hn(),r=n.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var s=Oe,l=s.baseQueue,o=r.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}s.baseQueue=l=o,r.pending=null}if(l!==null){o=l.next,s=s.baseState;var h=u=null,p=null,j=o;do{var C=j.lane;if((yt&C)===C)p!==null&&(p=p.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),s=j.hasEagerState?j.eagerState:e(s,j.action);else{var E={lane:C,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};p===null?(h=p=E,u=s):p=p.next=E,Se.lanes|=C,vt|=C}j=j.next}while(j!==null&&j!==o);p===null?u=s:p.next=h,jn(s,n.memoizedState)||(qe=!0),n.memoizedState=s,n.baseState=u,n.baseQueue=p,r.lastRenderedState=s}if(e=r.interleaved,e!==null){l=e;do o=l.lane,Se.lanes|=o,vt|=o,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Lo(e){var n=hn(),r=n.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var s=r.dispatch,l=r.pending,o=n.memoizedState;if(l!==null){r.pending=null;var u=l=l.next;do o=e(o,u.action),u=u.next;while(u!==l);jn(o,n.memoizedState)||(qe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),r.lastRenderedState=o}return[o,s]}function wc(){}function kc(e,n){var r=Se,s=hn(),l=n(),o=!jn(s.memoizedState,l);if(o&&(s.memoizedState=l,qe=!0),s=s.queue,$o(Ec.bind(null,r,s,e),[e]),s.getSnapshot!==n||o||_e!==null&&_e.memoizedState.tag&1){if(r.flags|=2048,Lr(9,Cc.bind(null,r,s,l,n),void 0,null),Ae===null)throw Error(c(349));(yt&30)!==0||Sc(r,n,l)}return l}function Sc(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Se.updateQueue,n===null?(n={lastEffect:null,stores:null},Se.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Cc(e,n,r,s){n.value=r,n.getSnapshot=s,Pc(n)&&bc(e)}function Ec(e,n,r){return r(function(){Pc(n)&&bc(e)})}function Pc(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!jn(e,r)}catch{return!0}}function bc(e){var n=Fn(e,1);n!==null&&En(n,e,1,-1)}function Tc(e){var n=Rn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},n.queue=e,e=e.dispatch=lh.bind(null,Se,e),[n.memoizedState,e]}function Lr(e,n,r,s){return e={tag:e,create:n,destroy:r,deps:s,next:null},n=Se.updateQueue,n===null?(n={lastEffect:null,stores:null},Se.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,n.lastEffect=e)),e}function Nc(){return hn().memoizedState}function Ms(e,n,r,s){var l=Rn();Se.flags|=e,l.memoizedState=Lr(1|n,r,void 0,s===void 0?null:s)}function zs(e,n,r,s){var l=hn();s=s===void 0?null:s;var o=void 0;if(Oe!==null){var u=Oe.memoizedState;if(o=u.destroy,s!==null&&Io(s,u.deps)){l.memoizedState=Lr(n,r,o,s);return}}Se.flags|=e,l.memoizedState=Lr(1|n,r,o,s)}function Oc(e,n){return Ms(8390656,8,e,n)}function $o(e,n){return zs(2048,8,e,n)}function Rc(e,n){return zs(4,2,e,n)}function _c(e,n){return zs(4,4,e,n)}function Ac(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ic(e,n,r){return r=r!=null?r.concat([e]):null,zs(4,4,Ac.bind(null,n,e),r)}function Fo(){}function Dc(e,n){var r=hn();n=n===void 0?null:n;var s=r.memoizedState;return s!==null&&n!==null&&Io(n,s[1])?s[0]:(r.memoizedState=[e,n],e)}function Mc(e,n){var r=hn();n=n===void 0?null:n;var s=r.memoizedState;return s!==null&&n!==null&&Io(n,s[1])?s[0]:(e=e(),r.memoizedState=[e,n],e)}function zc(e,n,r){return(yt&21)===0?(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=r):(jn(r,n)||(r=ha(),Se.lanes|=r,vt|=r,e.baseState=!0),n)}function rh(e,n){var r=me;me=r!==0&&4>r?r:4,e(!0);var s=Ao.transition;Ao.transition={};try{e(!1),n()}finally{me=r,Ao.transition=s}}function Lc(){return hn().memoizedState}function sh(e,n,r){var s=ot(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},$c(e))Fc(n,r);else if(r=gc(e,n,r,s),r!==null){var l=Qe();En(r,e,s,l),Uc(r,n,s)}}function lh(e,n,r){var s=ot(e),l={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if($c(e))Fc(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var u=n.lastRenderedState,h=o(u,r);if(l.hasEagerState=!0,l.eagerState=h,jn(h,u)){var p=n.interleaved;p===null?(l.next=l,bo(n)):(l.next=p.next,p.next=l),n.interleaved=l;return}}catch{}finally{}r=gc(e,n,l,s),r!==null&&(l=Qe(),En(r,e,s,l),Uc(r,n,s))}}function $c(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Fc(e,n){Dr=Ds=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Uc(e,n,r){if((r&4194240)!==0){var s=n.lanes;s&=e.pendingLanes,r|=s,n.lanes=r,Ul(e,r)}}var Ls={readContext:fn,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},oh={readContext:fn,useCallback:function(e,n){return Rn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:Oc,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Ms(4194308,4,Ac.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Ms(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ms(4,2,e,n)},useMemo:function(e,n){var r=Rn();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var s=Rn();return n=r!==void 0?r(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=sh.bind(null,Se,e),[s.memoizedState,e]},useRef:function(e){var n=Rn();return e={current:e},n.memoizedState=e},useState:Tc,useDebugValue:Fo,useDeferredValue:function(e){return Rn().memoizedState=e},useTransition:function(){var e=Tc(!1),n=e[0];return e=rh.bind(null,e[1]),Rn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var s=Se,l=Rn();if(we){if(r===void 0)throw Error(c(407));r=r()}else{if(r=n(),Ae===null)throw Error(c(349));(yt&30)!==0||Sc(s,n,r)}l.memoizedState=r;var o={value:r,getSnapshot:n};return l.queue=o,Oc(Ec.bind(null,s,o,e),[e]),s.flags|=2048,Lr(9,Cc.bind(null,s,o,r,n),void 0,null),r},useId:function(){var e=Rn(),n=Ae.identifierPrefix;if(we){var r=$n,s=Ln;r=(s&~(1<<32-vn(s)-1)).toString(32)+r,n=":"+n+"R"+r,r=Mr++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=th++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ih={readContext:fn,useCallback:Dc,useContext:fn,useEffect:$o,useImperativeHandle:Ic,useInsertionEffect:Rc,useLayoutEffect:_c,useMemo:Mc,useReducer:zo,useRef:Nc,useState:function(){return zo(zr)},useDebugValue:Fo,useDeferredValue:function(e){var n=hn();return zc(n,Oe.memoizedState,e)},useTransition:function(){var e=zo(zr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:wc,useSyncExternalStore:kc,useId:Lc,unstable_isNewReconciler:!1},ah={readContext:fn,useCallback:Dc,useContext:fn,useEffect:$o,useImperativeHandle:Ic,useInsertionEffect:Rc,useLayoutEffect:_c,useMemo:Mc,useReducer:Lo,useRef:Nc,useState:function(){return Lo(zr)},useDebugValue:Fo,useDeferredValue:function(e){var n=hn();return Oe===null?n.memoizedState=e:zc(n,Oe.memoizedState,e)},useTransition:function(){var e=Lo(zr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:wc,useSyncExternalStore:kc,useId:Lc,unstable_isNewReconciler:!1};function kn(e,n){if(e&&e.defaultProps){n=O({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function Uo(e,n,r,s){n=e.memoizedState,r=r(s,n),r=r==null?n:O({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var $s={isMounted:function(e){return(e=e._reactInternals)?dt(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var s=Qe(),l=ot(e),o=Un(s,l);o.payload=n,r!=null&&(o.callback=r),n=tt(e,o,l),n!==null&&(En(n,e,l,s),Rs(n,e,l))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var s=Qe(),l=ot(e),o=Un(s,l);o.tag=1,o.payload=n,r!=null&&(o.callback=r),n=tt(e,o,l),n!==null&&(En(n,e,l,s),Rs(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Qe(),s=ot(e),l=Un(r,s);l.tag=2,n!=null&&(l.callback=n),n=tt(e,l,s),n!==null&&(En(n,e,s,r),Rs(n,e,s))}};function Bc(e,n,r,s,l,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,u):n.prototype&&n.prototype.isPureReactComponent?!Cr(r,s)||!Cr(l,o):!0}function Hc(e,n,r){var s=!1,l=Zn,o=n.contextType;return typeof o=="object"&&o!==null?o=fn(o):(l=Ke(n)?ht:Fe.current,s=n.contextTypes,o=(s=s!=null)?$t(e,l):Zn),n=new n(r,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=$s,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Vc(e,n,r,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,s),n.state!==e&&$s.enqueueReplaceState(n,n.state,null)}function Bo(e,n,r,s){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},To(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=fn(o):(o=Ke(n)?ht:Fe.current,l.context=$t(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Uo(e,n,o,r),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&$s.enqueueReplaceState(l,l.state,null),_s(e,r,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Gt(e,n){try{var r="",s=n;do r+=re(s),s=s.return;while(s);var l=r}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Ho(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function Vo(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var ch=typeof WeakMap=="function"?WeakMap:Map;function Wc(e,n,r){r=Un(-1,r),r.tag=3,r.payload={element:null};var s=n.value;return r.callback=function(){Qs||(Qs=!0,li=s),Vo(e,n)},r}function Qc(e,n,r){r=Un(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=n.value;r.payload=function(){return s(l)},r.callback=function(){Vo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Vo(e,n),typeof s!="function"&&(st===null?st=new Set([this]):st.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})}),r}function Gc(e,n,r){var s=e.pingCache;if(s===null){s=e.pingCache=new ch;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(r)||(l.add(r),e=Sh.bind(null,e,n,r),n.then(e,e))}function Kc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qc(e,n,r,s,l){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=Un(-1,1),n.tag=2,tt(r,n,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var uh=Z.ReactCurrentOwner,qe=!1;function We(e,n,r,s){n.child=e===null?mc(n,null,r,s):Ht(n,e.child,r,s)}function Jc(e,n,r,s,l){r=r.render;var o=n.ref;return Wt(n,l),s=Do(e,n,r,s,o,l),r=Mo(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Bn(e,n,l)):(we&&r&&yo(n),n.flags|=1,We(e,n,s,l),n.child)}function Yc(e,n,r,s,l){if(e===null){var o=r.type;return typeof o=="function"&&!fi(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=o,Xc(e,n,o,s,l)):(e=Xs(r.type,null,s,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&l)===0){var u=o.memoizedProps;if(r=r.compare,r=r!==null?r:Cr,r(u,s)&&e.ref===n.ref)return Bn(e,n,l)}return n.flags|=1,e=at(o,s),e.ref=n.ref,e.return=n,n.child=e}function Xc(e,n,r,s,l){if(e!==null){var o=e.memoizedProps;if(Cr(o,s)&&e.ref===n.ref)if(qe=!1,n.pendingProps=s=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(qe=!0);else return n.lanes=e.lanes,Bn(e,n,l)}return Wo(e,n,r,s,l)}function Zc(e,n,r){var s=n.pendingProps,l=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(qt,ln),ln|=r;else{if((r&1073741824)===0)return e=o!==null?o.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,xe(qt,ln),ln|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,xe(qt,ln),ln|=s}else o!==null?(s=o.baseLanes|r,n.memoizedState=null):s=r,xe(qt,ln),ln|=s;return We(e,n,l,r),n.child}function eu(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Wo(e,n,r,s,l){var o=Ke(r)?ht:Fe.current;return o=$t(n,o),Wt(n,l),r=Do(e,n,r,s,o,l),s=Mo(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Bn(e,n,l)):(we&&s&&yo(n),n.flags|=1,We(e,n,r,l),n.child)}function nu(e,n,r,s,l){if(Ke(r)){var o=!0;Ss(n)}else o=!1;if(Wt(n,l),n.stateNode===null)Us(e,n),Hc(n,r,s),Bo(n,r,s,l),s=!0;else if(e===null){var u=n.stateNode,h=n.memoizedProps;u.props=h;var p=u.context,j=r.contextType;typeof j=="object"&&j!==null?j=fn(j):(j=Ke(r)?ht:Fe.current,j=$t(n,j));var C=r.getDerivedStateFromProps,E=typeof C=="function"||typeof u.getSnapshotBeforeUpdate=="function";E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==s||p!==j)&&Vc(n,u,s,j),nt=!1;var S=n.memoizedState;u.state=S,_s(n,s,u,l),p=n.memoizedState,h!==s||S!==p||Ge.current||nt?(typeof C=="function"&&(Uo(n,r,C,s),p=n.memoizedState),(h=nt||Bc(n,r,h,s,S,p,j))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=p),u.props=s,u.state=p,u.context=j,s=h):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,xc(e,n),h=n.memoizedProps,j=n.type===n.elementType?h:kn(n.type,h),u.props=j,E=n.pendingProps,S=u.context,p=r.contextType,typeof p=="object"&&p!==null?p=fn(p):(p=Ke(r)?ht:Fe.current,p=$t(n,p));var R=r.getDerivedStateFromProps;(C=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==E||S!==p)&&Vc(n,u,s,p),nt=!1,S=n.memoizedState,u.state=S,_s(n,s,u,l);var A=n.memoizedState;h!==E||S!==A||Ge.current||nt?(typeof R=="function"&&(Uo(n,r,R,s),A=n.memoizedState),(j=nt||Bc(n,r,j,s,S,A,p)||!1)?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,A,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,A,p)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&S===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&S===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=A),u.props=s,u.state=A,u.context=p,s=j):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&S===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&S===e.memoizedState||(n.flags|=1024),s=!1)}return Qo(e,n,r,s,o,l)}function Qo(e,n,r,s,l,o){eu(e,n);var u=(n.flags&128)!==0;if(!s&&!u)return l&&oc(n,r,!1),Bn(e,n,o);s=n.stateNode,uh.current=n;var h=u&&typeof r.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&u?(n.child=Ht(n,e.child,null,o),n.child=Ht(n,null,h,o)):We(e,n,h,o),n.memoizedState=s.state,l&&oc(n,r,!0),n.child}function tu(e){var n=e.stateNode;n.pendingContext?sc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&sc(e,n.context,!1),No(e,n.containerInfo)}function ru(e,n,r,s,l){return Bt(),ko(l),n.flags|=256,We(e,n,r,s),n.child}var Go={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function su(e,n,r){var s=n.pendingProps,l=ke.current,o=!1,u=(n.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(l&2)!==0),h?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),xe(ke,l&1),e===null)return wo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(u=s.children,e=s.fallback,o?(s=n.mode,o=n.child,u={mode:"hidden",children:u},(s&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=u):o=Zs(u,s,0,null),e=St(e,s,r,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Ko(r),n.memoizedState=Go,e):qo(n,u));if(l=e.memoizedState,l!==null&&(h=l.dehydrated,h!==null))return dh(e,n,u,s,h,l,r);if(o){o=s.fallback,u=n.mode,l=e.child,h=l.sibling;var p={mode:"hidden",children:s.children};return(u&1)===0&&n.child!==l?(s=n.child,s.childLanes=0,s.pendingProps=p,n.deletions=null):(s=at(l,p),s.subtreeFlags=l.subtreeFlags&14680064),h!==null?o=at(h,o):(o=St(o,u,r,null),o.flags|=2),o.return=n,s.return=n,s.sibling=o,n.child=s,s=o,o=n.child,u=e.child.memoizedState,u=u===null?Ko(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=e.childLanes&~r,n.memoizedState=Go,s}return o=e.child,e=o.sibling,s=at(o,{mode:"visible",children:s.children}),(n.mode&1)===0&&(s.lanes=r),s.return=n,s.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=s,n.memoizedState=null,s}function qo(e,n){return n=Zs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Fs(e,n,r,s){return s!==null&&ko(s),Ht(n,e.child,null,r),e=qo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dh(e,n,r,s,l,o,u){if(r)return n.flags&256?(n.flags&=-257,s=Ho(Error(c(422))),Fs(e,n,u,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=s.fallback,l=n.mode,s=Zs({mode:"visible",children:s.children},l,0,null),o=St(o,l,u,null),o.flags|=2,s.return=n,o.return=n,s.sibling=o,n.child=s,(n.mode&1)!==0&&Ht(n,e.child,null,u),n.child.memoizedState=Ko(u),n.memoizedState=Go,o);if((n.mode&1)===0)return Fs(e,n,u,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var h=s.dgst;return s=h,o=Error(c(419)),s=Ho(o,s,void 0),Fs(e,n,u,s)}if(h=(u&e.childLanes)!==0,qe||h){if(s=Ae,s!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(s.suspendedLanes|u))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Fn(e,l),En(s,e,l,-1))}return di(),s=Ho(Error(c(421))),Fs(e,n,u,s)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Ch.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,sn=Yn(l.nextSibling),rn=n,we=!0,wn=null,e!==null&&(un[dn++]=Ln,un[dn++]=$n,un[dn++]=pt,Ln=e.id,$n=e.overflow,pt=n),n=qo(n,s.children),n.flags|=4096,n)}function lu(e,n,r){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Po(e.return,n,r)}function Jo(e,n,r,s,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=l)}function ou(e,n,r){var s=n.pendingProps,l=s.revealOrder,o=s.tail;if(We(e,n,s.children,r),s=ke.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lu(e,r,n);else if(e.tag===19)lu(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(xe(ke,s),(n.mode&1)===0)n.memoizedState=null;else switch(l){case"forwards":for(r=n.child,l=null;r!==null;)e=r.alternate,e!==null&&As(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=n.child,n.child=null):(l=r.sibling,r.sibling=null),Jo(n,!1,l,r,o);break;case"backwards":for(r=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&As(e)===null){n.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Jo(n,!0,r,null,o);break;case"together":Jo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Us(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Bn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,(r&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,r=at(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=at(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function fh(e,n,r){switch(n.tag){case 3:tu(n),Bt();break;case 5:jc(n);break;case 1:Ke(n.type)&&Ss(n);break;case 4:No(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,l=n.memoizedProps.value;xe(Ns,s._currentValue),s._currentValue=l;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(xe(ke,ke.current&1),n.flags|=128,null):(r&n.child.childLanes)!==0?su(e,n,r):(xe(ke,ke.current&1),e=Bn(e,n,r),e!==null?e.sibling:null);xe(ke,ke.current&1);break;case 19:if(s=(r&n.childLanes)!==0,(e.flags&128)!==0){if(s)return ou(e,n,r);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),xe(ke,ke.current),s)break;return null;case 22:case 23:return n.lanes=0,Zc(e,n,r)}return Bn(e,n,r)}var iu,Yo,au,cu;iu=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Yo=function(){},au=function(e,n,r,s){var l=e.memoizedProps;if(l!==s){e=n.stateNode,xt(On.current);var o=null;switch(r){case"input":l=El(e,l),s=El(e,s),o=[];break;case"select":l=O({},l,{value:void 0}),s=O({},s,{value:void 0}),o=[];break;case"textarea":l=Tl(e,l),s=Tl(e,s),o=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=js)}Ol(r,s);var u;r=null;for(j in l)if(!s.hasOwnProperty(j)&&l.hasOwnProperty(j)&&l[j]!=null)if(j==="style"){var h=l[j];for(u in h)h.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(m.hasOwnProperty(j)?o||(o=[]):(o=o||[]).push(j,null));for(j in s){var p=s[j];if(h=l!=null?l[j]:void 0,s.hasOwnProperty(j)&&p!==h&&(p!=null||h!=null))if(j==="style")if(h){for(u in h)!h.hasOwnProperty(u)||p&&p.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in p)p.hasOwnProperty(u)&&h[u]!==p[u]&&(r||(r={}),r[u]=p[u])}else r||(o||(o=[]),o.push(j,r)),r=p;else j==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,h=h?h.__html:void 0,p!=null&&h!==p&&(o=o||[]).push(j,p)):j==="children"?typeof p!="string"&&typeof p!="number"||(o=o||[]).push(j,""+p):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(m.hasOwnProperty(j)?(p!=null&&j==="onScroll"&&ye("scroll",e),o||h===p||(o=[])):(o=o||[]).push(j,p))}r&&(o=o||[]).push("style",r);var j=o;(n.updateQueue=j)&&(n.flags|=4)}},cu=function(e,n,r,s){r!==s&&(n.flags|=4)};function $r(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Be(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(n)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=r,n}function hh(e,n,r){var s=n.pendingProps;switch(vo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(n),null;case 1:return Ke(n.type)&&ks(),Be(n),null;case 3:return s=n.stateNode,Qt(),ve(Ge),ve(Fe),_o(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(bs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wn!==null&&(ai(wn),wn=null))),Yo(e,n),Be(n),null;case 5:Oo(n);var l=xt(Ir.current);if(r=n.type,e!==null&&n.stateNode!=null)au(e,n,r,s,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(c(166));return Be(n),null}if(e=xt(On.current),bs(n)){s=n.stateNode,r=n.type;var o=n.memoizedProps;switch(s[Nn]=n,s[Nr]=o,e=(n.mode&1)!==0,r){case"dialog":ye("cancel",s),ye("close",s);break;case"iframe":case"object":case"embed":ye("load",s);break;case"video":case"audio":for(l=0;l<Pr.length;l++)ye(Pr[l],s);break;case"source":ye("error",s);break;case"img":case"image":case"link":ye("error",s),ye("load",s);break;case"details":ye("toggle",s);break;case"input":Hi(s,o),ye("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},ye("invalid",s);break;case"textarea":Qi(s,o),ye("invalid",s)}Ol(r,o),l=null;for(var u in o)if(o.hasOwnProperty(u)){var h=o[u];u==="children"?typeof h=="string"?s.textContent!==h&&(o.suppressHydrationWarning!==!0&&vs(s.textContent,h,e),l=["children",h]):typeof h=="number"&&s.textContent!==""+h&&(o.suppressHydrationWarning!==!0&&vs(s.textContent,h,e),l=["children",""+h]):m.hasOwnProperty(u)&&h!=null&&u==="onScroll"&&ye("scroll",s)}switch(r){case"input":Dn(s),Wi(s,o,!0);break;case"textarea":Dn(s),Ki(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=js)}s=l,n.updateQueue=s,s!==null&&(n.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qi(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=u.createElement(r,{is:s.is}):(e=u.createElement(r),r==="select"&&(u=e,s.multiple?u.multiple=!0:s.size&&(u.size=s.size))):e=u.createElementNS(e,r),e[Nn]=n,e[Nr]=s,iu(e,n,!1,!1),n.stateNode=e;e:{switch(u=Rl(r,s),r){case"dialog":ye("cancel",e),ye("close",e),l=s;break;case"iframe":case"object":case"embed":ye("load",e),l=s;break;case"video":case"audio":for(l=0;l<Pr.length;l++)ye(Pr[l],e);l=s;break;case"source":ye("error",e),l=s;break;case"img":case"image":case"link":ye("error",e),ye("load",e),l=s;break;case"details":ye("toggle",e),l=s;break;case"input":Hi(e,s),l=El(e,s),ye("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=O({},s,{value:void 0}),ye("invalid",e);break;case"textarea":Qi(e,s),l=Tl(e,s),ye("invalid",e);break;default:l=s}Ol(r,l),h=l;for(o in h)if(h.hasOwnProperty(o)){var p=h[o];o==="style"?Xi(e,p):o==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Ji(e,p)):o==="children"?typeof p=="string"?(r!=="textarea"||p!=="")&&ir(e,p):typeof p=="number"&&ir(e,""+p):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(m.hasOwnProperty(o)?p!=null&&o==="onScroll"&&ye("scroll",e):p!=null&&le(e,o,p,u))}switch(r){case"input":Dn(e),Wi(e,s,!1);break;case"textarea":Dn(e),Ki(e);break;case"option":s.value!=null&&e.setAttribute("value",""+oe(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?bt(e,!!s.multiple,o,!1):s.defaultValue!=null&&bt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=js)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Be(n),null;case 6:if(e&&n.stateNode!=null)cu(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(c(166));if(r=xt(Ir.current),xt(On.current),bs(n)){if(s=n.stateNode,r=n.memoizedProps,s[Nn]=n,(o=s.nodeValue!==r)&&(e=rn,e!==null))switch(e.tag){case 3:vs(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vs(s.nodeValue,r,(e.mode&1)!==0)}o&&(n.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Nn]=n,n.stateNode=s}return Be(n),null;case 13:if(ve(ke),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&sn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)fc(),Bt(),n.flags|=98560,o=!1;else if(o=bs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[Nn]=n}else Bt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Be(n),o=!1}else wn!==null&&(ai(wn),wn=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=r,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ke.current&1)!==0?Re===0&&(Re=3):di())),n.updateQueue!==null&&(n.flags|=4),Be(n),null);case 4:return Qt(),Yo(e,n),e===null&&br(n.stateNode.containerInfo),Be(n),null;case 10:return Eo(n.type._context),Be(n),null;case 17:return Ke(n.type)&&ks(),Be(n),null;case 19:if(ve(ke),o=n.memoizedState,o===null)return Be(n),null;if(s=(n.flags&128)!==0,u=o.rendering,u===null)if(s)$r(o,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=As(e),u!==null){for(n.flags|=128,$r(o,!1),s=u.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=r,r=n.child;r!==null;)o=r,e=s,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,e=u.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return xe(ke,ke.current&1|2),n.child}e=e.sibling}o.tail!==null&&Ee()>Jt&&(n.flags|=128,s=!0,$r(o,!1),n.lanes=4194304)}else{if(!s)if(e=As(u),e!==null){if(n.flags|=128,s=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!we)return Be(n),null}else 2*Ee()-o.renderingStartTime>Jt&&r!==1073741824&&(n.flags|=128,s=!0,$r(o,!1),n.lanes=4194304);o.isBackwards?(u.sibling=n.child,n.child=u):(r=o.last,r!==null?r.sibling=u:n.child=u,o.last=u)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Ee(),n.sibling=null,r=ke.current,xe(ke,s?r&1|2:r&1),n):(Be(n),null);case 22:case 23:return ui(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&(n.mode&1)!==0?(ln&1073741824)!==0&&(Be(n),n.subtreeFlags&6&&(n.flags|=8192)):Be(n),null;case 24:return null;case 25:return null}throw Error(c(156,n.tag))}function ph(e,n){switch(vo(n),n.tag){case 1:return Ke(n.type)&&ks(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qt(),ve(Ge),ve(Fe),_o(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Oo(n),null;case 13:if(ve(ke),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ve(ke),null;case 4:return Qt(),null;case 10:return Eo(n.type._context),null;case 22:case 23:return ui(),null;case 24:return null;default:return null}}var Bs=!1,He=!1,mh=typeof WeakSet=="function"?WeakSet:Set,_=null;function Kt(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ce(e,n,s)}else r.current=null}function Xo(e,n,r){try{r()}catch(s){Ce(e,n,s)}}var uu=!1;function gh(e,n){if(co=as,e=Ba(),no(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var l=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var u=0,h=-1,p=-1,j=0,C=0,E=e,S=null;n:for(;;){for(var R;E!==r||l!==0&&E.nodeType!==3||(h=u+l),E!==o||s!==0&&E.nodeType!==3||(p=u+s),E.nodeType===3&&(u+=E.nodeValue.length),(R=E.firstChild)!==null;)S=E,E=R;for(;;){if(E===e)break n;if(S===r&&++j===l&&(h=u),S===o&&++C===s&&(p=u),(R=E.nextSibling)!==null)break;E=S,S=E.parentNode}E=R}r=h===-1||p===-1?null:{start:h,end:p}}else r=null}r=r||{start:0,end:0}}else r=null;for(uo={focusedElem:e,selectionRange:r},as=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var A=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var D=A.memoizedProps,Pe=A.memoizedState,y=n.stateNode,g=y.getSnapshotBeforeUpdate(n.elementType===n.type?D:kn(n.type,D),Pe);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(b){Ce(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return A=uu,uu=!1,A}function Fr(e,n,r){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Xo(n,r,o)}l=l.next}while(l!==s)}}function Hs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==n)}}function Zo(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function du(e){var n=e.alternate;n!==null&&(e.alternate=null,du(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Nn],delete n[Nr],delete n[mo],delete n[Xf],delete n[Zf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fu(e){return e.tag===5||e.tag===3||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ei(e,n,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=js));else if(s!==4&&(e=e.child,e!==null))for(ei(e,n,r),e=e.sibling;e!==null;)ei(e,n,r),e=e.sibling}function ni(e,n,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(ni(e,n,r),e=e.sibling;e!==null;)ni(e,n,r),e=e.sibling}var ze=null,Sn=!1;function rt(e,n,r){for(r=r.child;r!==null;)pu(e,n,r),r=r.sibling}function pu(e,n,r){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(ts,r)}catch{}switch(r.tag){case 5:He||Kt(r,n);case 6:var s=ze,l=Sn;ze=null,rt(e,n,r),ze=s,Sn=l,ze!==null&&(Sn?(e=ze,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ze.removeChild(r.stateNode));break;case 18:ze!==null&&(Sn?(e=ze,r=r.stateNode,e.nodeType===8?po(e.parentNode,r):e.nodeType===1&&po(e,r),yr(e)):po(ze,r.stateNode));break;case 4:s=ze,l=Sn,ze=r.stateNode.containerInfo,Sn=!0,rt(e,n,r),ze=s,Sn=l;break;case 0:case 11:case 14:case 15:if(!He&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var o=l,u=o.destroy;o=o.tag,u!==void 0&&((o&2)!==0||(o&4)!==0)&&Xo(r,n,u),l=l.next}while(l!==s)}rt(e,n,r);break;case 1:if(!He&&(Kt(r,n),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(h){Ce(r,n,h)}rt(e,n,r);break;case 21:rt(e,n,r);break;case 22:r.mode&1?(He=(s=He)||r.memoizedState!==null,rt(e,n,r),He=s):rt(e,n,r);break;default:rt(e,n,r)}}function mu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new mh),n.forEach(function(s){var l=Eh.bind(null,e,s);r.has(s)||(r.add(s),s.then(l,l))})}}function Cn(e,n){var r=n.deletions;if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];try{var o=e,u=n,h=u;e:for(;h!==null;){switch(h.tag){case 5:ze=h.stateNode,Sn=!1;break e;case 3:ze=h.stateNode.containerInfo,Sn=!0;break e;case 4:ze=h.stateNode.containerInfo,Sn=!0;break e}h=h.return}if(ze===null)throw Error(c(160));pu(o,u,l),ze=null,Sn=!1;var p=l.alternate;p!==null&&(p.return=null),l.return=null}catch(j){Ce(l,n,j)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)gu(n,e),n=n.sibling}function gu(e,n){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Cn(n,e),_n(e),s&4){try{Fr(3,e,e.return),Hs(3,e)}catch(D){Ce(e,e.return,D)}try{Fr(5,e,e.return)}catch(D){Ce(e,e.return,D)}}break;case 1:Cn(n,e),_n(e),s&512&&r!==null&&Kt(r,r.return);break;case 5:if(Cn(n,e),_n(e),s&512&&r!==null&&Kt(r,r.return),e.flags&32){var l=e.stateNode;try{ir(l,"")}catch(D){Ce(e,e.return,D)}}if(s&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,u=r!==null?r.memoizedProps:o,h=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{h==="input"&&o.type==="radio"&&o.name!=null&&Vi(l,o),Rl(h,u);var j=Rl(h,o);for(u=0;u<p.length;u+=2){var C=p[u],E=p[u+1];C==="style"?Xi(l,E):C==="dangerouslySetInnerHTML"?Ji(l,E):C==="children"?ir(l,E):le(l,C,E,j)}switch(h){case"input":Pl(l,o);break;case"textarea":Gi(l,o);break;case"select":var S=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var R=o.value;R!=null?bt(l,!!o.multiple,R,!1):S!==!!o.multiple&&(o.defaultValue!=null?bt(l,!!o.multiple,o.defaultValue,!0):bt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Nr]=o}catch(D){Ce(e,e.return,D)}}break;case 6:if(Cn(n,e),_n(e),s&4){if(e.stateNode===null)throw Error(c(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(D){Ce(e,e.return,D)}}break;case 3:if(Cn(n,e),_n(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(D){Ce(e,e.return,D)}break;case 4:Cn(n,e),_n(e);break;case 13:Cn(n,e),_n(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(si=Ee())),s&4&&mu(e);break;case 22:if(C=r!==null&&r.memoizedState!==null,e.mode&1?(He=(j=He)||C,Cn(n,e),He=j):Cn(n,e),_n(e),s&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!C&&(e.mode&1)!==0)for(_=e,C=e.child;C!==null;){for(E=_=C;_!==null;){switch(S=_,R=S.child,S.tag){case 0:case 11:case 14:case 15:Fr(4,S,S.return);break;case 1:Kt(S,S.return);var A=S.stateNode;if(typeof A.componentWillUnmount=="function"){s=S,r=S.return;try{n=s,A.props=n.memoizedProps,A.state=n.memoizedState,A.componentWillUnmount()}catch(D){Ce(s,r,D)}}break;case 5:Kt(S,S.return);break;case 22:if(S.memoizedState!==null){vu(E);continue}}R!==null?(R.return=S,_=R):vu(E)}C=C.sibling}e:for(C=null,E=e;;){if(E.tag===5){if(C===null){C=E;try{l=E.stateNode,j?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(h=E.stateNode,p=E.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null,h.style.display=Yi("display",u))}catch(D){Ce(e,e.return,D)}}}else if(E.tag===6){if(C===null)try{E.stateNode.nodeValue=j?"":E.memoizedProps}catch(D){Ce(e,e.return,D)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;C===E&&(C=null),E=E.return}C===E&&(C=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:Cn(n,e),_n(e),s&4&&mu(e);break;case 21:break;default:Cn(n,e),_n(e)}}function _n(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(fu(r)){var s=r;break e}r=r.return}throw Error(c(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(ir(l,""),s.flags&=-33);var o=hu(e);ni(e,o,l);break;case 3:case 4:var u=s.stateNode.containerInfo,h=hu(e);ei(e,h,u);break;default:throw Error(c(161))}}catch(p){Ce(e,e.return,p)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xh(e,n,r){_=e,xu(e)}function xu(e,n,r){for(var s=(e.mode&1)!==0;_!==null;){var l=_,o=l.child;if(l.tag===22&&s){var u=l.memoizedState!==null||Bs;if(!u){var h=l.alternate,p=h!==null&&h.memoizedState!==null||He;h=Bs;var j=He;if(Bs=u,(He=p)&&!j)for(_=l;_!==null;)u=_,p=u.child,u.tag===22&&u.memoizedState!==null?ju(l):p!==null?(p.return=u,_=p):ju(l);for(;o!==null;)_=o,xu(o),o=o.sibling;_=l,Bs=h,He=j}yu(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,_=o):yu(e)}}function yu(e){for(;_!==null;){var n=_;if((n.flags&8772)!==0){var r=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:He||Hs(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!He)if(r===null)s.componentDidMount();else{var l=n.elementType===n.type?r.memoizedProps:kn(n.type,r.memoizedProps);s.componentDidUpdate(l,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&vc(n,o,s);break;case 3:var u=n.updateQueue;if(u!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}vc(n,u,r)}break;case 5:var h=n.stateNode;if(r===null&&n.flags&4){r=h;var p=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&r.focus();break;case"img":p.src&&(r.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var j=n.alternate;if(j!==null){var C=j.memoizedState;if(C!==null){var E=C.dehydrated;E!==null&&yr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}He||n.flags&512&&Zo(n)}catch(S){Ce(n,n.return,S)}}if(n===e){_=null;break}if(r=n.sibling,r!==null){r.return=n.return,_=r;break}_=n.return}}function vu(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var r=n.sibling;if(r!==null){r.return=n.return,_=r;break}_=n.return}}function ju(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{Hs(4,n)}catch(p){Ce(n,r,p)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var l=n.return;try{s.componentDidMount()}catch(p){Ce(n,l,p)}}var o=n.return;try{Zo(n)}catch(p){Ce(n,o,p)}break;case 5:var u=n.return;try{Zo(n)}catch(p){Ce(n,u,p)}}}catch(p){Ce(n,n.return,p)}if(n===e){_=null;break}var h=n.sibling;if(h!==null){h.return=n.return,_=h;break}_=n.return}}var yh=Math.ceil,Vs=Z.ReactCurrentDispatcher,ti=Z.ReactCurrentOwner,pn=Z.ReactCurrentBatchConfig,ae=0,Ae=null,be=null,Le=0,ln=0,qt=Xn(0),Re=0,Ur=null,vt=0,Ws=0,ri=0,Br=null,Je=null,si=0,Jt=1/0,Hn=null,Qs=!1,li=null,st=null,Gs=!1,lt=null,Ks=0,Hr=0,oi=null,qs=-1,Js=0;function Qe(){return(ae&6)!==0?Ee():qs!==-1?qs:qs=Ee()}function ot(e){return(e.mode&1)===0?1:(ae&2)!==0&&Le!==0?Le&-Le:nh.transition!==null?(Js===0&&(Js=ha()),Js):(e=me,e!==0||(e=window.event,e=e===void 0?16:ka(e.type)),e)}function En(e,n,r,s){if(50<Hr)throw Hr=0,oi=null,Error(c(185));hr(e,r,s),((ae&2)===0||e!==Ae)&&(e===Ae&&((ae&2)===0&&(Ws|=r),Re===4&&it(e,Le)),Ye(e,s),r===1&&ae===0&&(n.mode&1)===0&&(Jt=Ee()+500,Cs&&et()))}function Ye(e,n){var r=e.callbackNode;ef(e,n);var s=ls(e,e===Ae?Le:0);if(s===0)r!==null&&ua(r),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(r!=null&&ua(r),n===1)e.tag===0?eh(ku.bind(null,e)):ic(ku.bind(null,e)),Jf(function(){(ae&6)===0&&et()}),r=null;else{switch(pa(s)){case 1:r=Ll;break;case 4:r=da;break;case 16:r=ns;break;case 536870912:r=fa;break;default:r=ns}r=Ou(r,wu.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function wu(e,n){if(qs=-1,Js=0,(ae&6)!==0)throw Error(c(327));var r=e.callbackNode;if(Yt()&&e.callbackNode!==r)return null;var s=ls(e,e===Ae?Le:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||n)n=Ys(e,s);else{n=s;var l=ae;ae|=2;var o=Cu();(Ae!==e||Le!==n)&&(Hn=null,Jt=Ee()+500,wt(e,n));do try{wh();break}catch(h){Su(e,h)}while(!0);Co(),Vs.current=o,ae=l,be!==null?n=0:(Ae=null,Le=0,n=Re)}if(n!==0){if(n===2&&(l=$l(e),l!==0&&(s=l,n=ii(e,l))),n===1)throw r=Ur,wt(e,0),it(e,s),Ye(e,Ee()),r;if(n===6)it(e,s);else{if(l=e.current.alternate,(s&30)===0&&!vh(l)&&(n=Ys(e,s),n===2&&(o=$l(e),o!==0&&(s=o,n=ii(e,o))),n===1))throw r=Ur,wt(e,0),it(e,s),Ye(e,Ee()),r;switch(e.finishedWork=l,e.finishedLanes=s,n){case 0:case 1:throw Error(c(345));case 2:kt(e,Je,Hn);break;case 3:if(it(e,s),(s&130023424)===s&&(n=si+500-Ee(),10<n)){if(ls(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){Qe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ho(kt.bind(null,e,Je,Hn),n);break}kt(e,Je,Hn);break;case 4:if(it(e,s),(s&4194240)===s)break;for(n=e.eventTimes,l=-1;0<s;){var u=31-vn(s);o=1<<u,u=n[u],u>l&&(l=u),s&=~o}if(s=l,s=Ee()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*yh(s/1960))-s,10<s){e.timeoutHandle=ho(kt.bind(null,e,Je,Hn),s);break}kt(e,Je,Hn);break;case 5:kt(e,Je,Hn);break;default:throw Error(c(329))}}}return Ye(e,Ee()),e.callbackNode===r?wu.bind(null,e):null}function ii(e,n){var r=Br;return e.current.memoizedState.isDehydrated&&(wt(e,n).flags|=256),e=Ys(e,n),e!==2&&(n=Je,Je=r,n!==null&&ai(n)),e}function ai(e){Je===null?Je=e:Je.push.apply(Je,e)}function vh(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var l=r[s],o=l.getSnapshot;l=l.value;try{if(!jn(o(),l))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function it(e,n){for(n&=~ri,n&=~Ws,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-vn(n),s=1<<r;e[r]=-1,n&=~s}}function ku(e){if((ae&6)!==0)throw Error(c(327));Yt();var n=ls(e,0);if((n&1)===0)return Ye(e,Ee()),null;var r=Ys(e,n);if(e.tag!==0&&r===2){var s=$l(e);s!==0&&(n=s,r=ii(e,s))}if(r===1)throw r=Ur,wt(e,0),it(e,n),Ye(e,Ee()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kt(e,Je,Hn),Ye(e,Ee()),null}function ci(e,n){var r=ae;ae|=1;try{return e(n)}finally{ae=r,ae===0&&(Jt=Ee()+500,Cs&&et())}}function jt(e){lt!==null&&lt.tag===0&&(ae&6)===0&&Yt();var n=ae;ae|=1;var r=pn.transition,s=me;try{if(pn.transition=null,me=1,e)return e()}finally{me=s,pn.transition=r,ae=n,(ae&6)===0&&et()}}function ui(){ln=qt.current,ve(qt)}function wt(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,qf(r)),be!==null)for(r=be.return;r!==null;){var s=r;switch(vo(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ks();break;case 3:Qt(),ve(Ge),ve(Fe),_o();break;case 5:Oo(s);break;case 4:Qt();break;case 13:ve(ke);break;case 19:ve(ke);break;case 10:Eo(s.type._context);break;case 22:case 23:ui()}r=r.return}if(Ae=e,be=e=at(e.current,null),Le=ln=n,Re=0,Ur=null,ri=Ws=vt=0,Je=Br=null,gt!==null){for(n=0;n<gt.length;n++)if(r=gt[n],s=r.interleaved,s!==null){r.interleaved=null;var l=s.next,o=r.pending;if(o!==null){var u=o.next;o.next=l,s.next=u}r.pending=s}gt=null}return e}function Su(e,n){do{var r=be;try{if(Co(),Is.current=Ls,Ds){for(var s=Se.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}Ds=!1}if(yt=0,_e=Oe=Se=null,Dr=!1,Mr=0,ti.current=null,r===null||r.return===null){Re=1,Ur=n,be=null;break}e:{var o=e,u=r.return,h=r,p=n;if(n=Le,h.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var j=p,C=h,E=C.tag;if((C.mode&1)===0&&(E===0||E===11||E===15)){var S=C.alternate;S?(C.updateQueue=S.updateQueue,C.memoizedState=S.memoizedState,C.lanes=S.lanes):(C.updateQueue=null,C.memoizedState=null)}var R=Kc(u);if(R!==null){R.flags&=-257,qc(R,u,h,o,n),R.mode&1&&Gc(o,j,n),n=R,p=j;var A=n.updateQueue;if(A===null){var D=new Set;D.add(p),n.updateQueue=D}else A.add(p);break e}else{if((n&1)===0){Gc(o,j,n),di();break e}p=Error(c(426))}}else if(we&&h.mode&1){var Pe=Kc(u);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),qc(Pe,u,h,o,n),ko(Gt(p,h));break e}}o=p=Gt(p,h),Re!==4&&(Re=2),Br===null?Br=[o]:Br.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var y=Wc(o,p,n);yc(o,y);break e;case 1:h=p;var g=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(st===null||!st.has(v)))){o.flags|=65536,n&=-n,o.lanes|=n;var b=Qc(o,h,n);yc(o,b);break e}}o=o.return}while(o!==null)}Pu(r)}catch(M){n=M,be===r&&r!==null&&(be=r=r.return);continue}break}while(!0)}function Cu(){var e=Vs.current;return Vs.current=Ls,e===null?Ls:e}function di(){(Re===0||Re===3||Re===2)&&(Re=4),Ae===null||(vt&268435455)===0&&(Ws&268435455)===0||it(Ae,Le)}function Ys(e,n){var r=ae;ae|=2;var s=Cu();(Ae!==e||Le!==n)&&(Hn=null,wt(e,n));do try{jh();break}catch(l){Su(e,l)}while(!0);if(Co(),ae=r,Vs.current=s,be!==null)throw Error(c(261));return Ae=null,Le=0,Re}function jh(){for(;be!==null;)Eu(be)}function wh(){for(;be!==null&&!Wd();)Eu(be)}function Eu(e){var n=Nu(e.alternate,e,ln);e.memoizedProps=e.pendingProps,n===null?Pu(e):be=n,ti.current=null}function Pu(e){var n=e;do{var r=n.alternate;if(e=n.return,(n.flags&32768)===0){if(r=hh(r,n,ln),r!==null){be=r;return}}else{if(r=ph(r,n),r!==null){r.flags&=32767,be=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,be=null;return}}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);Re===0&&(Re=5)}function kt(e,n,r){var s=me,l=pn.transition;try{pn.transition=null,me=1,kh(e,n,r,s)}finally{pn.transition=l,me=s}return null}function kh(e,n,r,s){do Yt();while(lt!==null);if((ae&6)!==0)throw Error(c(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(nf(e,o),e===Ae&&(be=Ae=null,Le=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Gs||(Gs=!0,Ou(ns,function(){return Yt(),null})),o=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||o){o=pn.transition,pn.transition=null;var u=me;me=1;var h=ae;ae|=4,ti.current=null,gh(e,r),gu(r,e),Bf(uo),as=!!co,uo=co=null,e.current=r,xh(r),Qd(),ae=h,me=u,pn.transition=o}else e.current=r;if(Gs&&(Gs=!1,lt=e,Ks=l),o=e.pendingLanes,o===0&&(st=null),qd(r.stateNode),Ye(e,Ee()),n!==null)for(s=e.onRecoverableError,r=0;r<n.length;r++)l=n[r],s(l.value,{componentStack:l.stack,digest:l.digest});if(Qs)throw Qs=!1,e=li,li=null,e;return(Ks&1)!==0&&e.tag!==0&&Yt(),o=e.pendingLanes,(o&1)!==0?e===oi?Hr++:(Hr=0,oi=e):Hr=0,et(),null}function Yt(){if(lt!==null){var e=pa(Ks),n=pn.transition,r=me;try{if(pn.transition=null,me=16>e?16:e,lt===null)var s=!1;else{if(e=lt,lt=null,Ks=0,(ae&6)!==0)throw Error(c(331));var l=ae;for(ae|=4,_=e.current;_!==null;){var o=_,u=o.child;if((_.flags&16)!==0){var h=o.deletions;if(h!==null){for(var p=0;p<h.length;p++){var j=h[p];for(_=j;_!==null;){var C=_;switch(C.tag){case 0:case 11:case 15:Fr(8,C,o)}var E=C.child;if(E!==null)E.return=C,_=E;else for(;_!==null;){C=_;var S=C.sibling,R=C.return;if(du(C),C===j){_=null;break}if(S!==null){S.return=R,_=S;break}_=R}}}var A=o.alternate;if(A!==null){var D=A.child;if(D!==null){A.child=null;do{var Pe=D.sibling;D.sibling=null,D=Pe}while(D!==null)}}_=o}}if((o.subtreeFlags&2064)!==0&&u!==null)u.return=o,_=u;else e:for(;_!==null;){if(o=_,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Fr(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,_=y;break e}_=o.return}}var g=e.current;for(_=g;_!==null;){u=_;var v=u.child;if((u.subtreeFlags&2064)!==0&&v!==null)v.return=u,_=v;else e:for(u=g;_!==null;){if(h=_,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:Hs(9,h)}}catch(M){Ce(h,h.return,M)}if(h===u){_=null;break e}var b=h.sibling;if(b!==null){b.return=h.return,_=b;break e}_=h.return}}if(ae=l,et(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(ts,e)}catch{}s=!0}return s}finally{me=r,pn.transition=n}}return!1}function bu(e,n,r){n=Gt(r,n),n=Wc(e,n,1),e=tt(e,n,1),n=Qe(),e!==null&&(hr(e,1,n),Ye(e,n))}function Ce(e,n,r){if(e.tag===3)bu(e,e,r);else for(;n!==null;){if(n.tag===3){bu(n,e,r);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(st===null||!st.has(s))){e=Gt(r,e),e=Qc(n,e,1),n=tt(n,e,1),e=Qe(),n!==null&&(hr(n,1,e),Ye(n,e));break}}n=n.return}}function Sh(e,n,r){var s=e.pingCache;s!==null&&s.delete(n),n=Qe(),e.pingedLanes|=e.suspendedLanes&r,Ae===e&&(Le&r)===r&&(Re===4||Re===3&&(Le&130023424)===Le&&500>Ee()-si?wt(e,0):ri|=r),Ye(e,n)}function Tu(e,n){n===0&&((e.mode&1)===0?n=1:(n=ss,ss<<=1,(ss&130023424)===0&&(ss=4194304)));var r=Qe();e=Fn(e,n),e!==null&&(hr(e,n,r),Ye(e,r))}function Ch(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Tu(e,r)}function Eh(e,n){var r=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(c(314))}s!==null&&s.delete(n),Tu(e,r)}var Nu;Nu=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ge.current)qe=!0;else{if((e.lanes&r)===0&&(n.flags&128)===0)return qe=!1,fh(e,n,r);qe=(e.flags&131072)!==0}else qe=!1,we&&(n.flags&1048576)!==0&&ac(n,Ps,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Us(e,n),e=n.pendingProps;var l=$t(n,Fe.current);Wt(n,r),l=Do(null,n,s,e,l,r);var o=Mo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ke(s)?(o=!0,Ss(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,To(n),l.updater=$s,n.stateNode=l,l._reactInternals=n,Bo(n,s,e,r),n=Qo(null,n,s,!0,o,r)):(n.tag=0,we&&o&&yo(n),We(null,n,l,r),n=n.child),n;case 16:s=n.elementType;e:{switch(Us(e,n),e=n.pendingProps,l=s._init,s=l(s._payload),n.type=s,l=n.tag=bh(s),e=kn(s,e),l){case 0:n=Wo(null,n,s,e,r);break e;case 1:n=nu(null,n,s,e,r);break e;case 11:n=Jc(null,n,s,e,r);break e;case 14:n=Yc(null,n,s,kn(s.type,e),r);break e}throw Error(c(306,s,""))}return n;case 0:return s=n.type,l=n.pendingProps,l=n.elementType===s?l:kn(s,l),Wo(e,n,s,l,r);case 1:return s=n.type,l=n.pendingProps,l=n.elementType===s?l:kn(s,l),nu(e,n,s,l,r);case 3:e:{if(tu(n),e===null)throw Error(c(387));s=n.pendingProps,o=n.memoizedState,l=o.element,xc(e,n),_s(n,s,null,r);var u=n.memoizedState;if(s=u.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=Gt(Error(c(423)),n),n=ru(e,n,s,r,l);break e}else if(s!==l){l=Gt(Error(c(424)),n),n=ru(e,n,s,r,l);break e}else for(sn=Yn(n.stateNode.containerInfo.firstChild),rn=n,we=!0,wn=null,r=mc(n,null,s,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bt(),s===l){n=Bn(e,n,r);break e}We(e,n,s,r)}n=n.child}return n;case 5:return jc(n),e===null&&wo(n),s=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,u=l.children,fo(s,l)?u=null:o!==null&&fo(s,o)&&(n.flags|=32),eu(e,n),We(e,n,u,r),n.child;case 6:return e===null&&wo(n),null;case 13:return su(e,n,r);case 4:return No(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ht(n,null,s,r):We(e,n,s,r),n.child;case 11:return s=n.type,l=n.pendingProps,l=n.elementType===s?l:kn(s,l),Jc(e,n,s,l,r);case 7:return We(e,n,n.pendingProps,r),n.child;case 8:return We(e,n,n.pendingProps.children,r),n.child;case 12:return We(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(s=n.type._context,l=n.pendingProps,o=n.memoizedProps,u=l.value,xe(Ns,s._currentValue),s._currentValue=u,o!==null)if(jn(o.value,u)){if(o.children===l.children&&!Ge.current){n=Bn(e,n,r);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var h=o.dependencies;if(h!==null){u=o.child;for(var p=h.firstContext;p!==null;){if(p.context===s){if(o.tag===1){p=Un(-1,r&-r),p.tag=2;var j=o.updateQueue;if(j!==null){j=j.shared;var C=j.pending;C===null?p.next=p:(p.next=C.next,C.next=p),j.pending=p}}o.lanes|=r,p=o.alternate,p!==null&&(p.lanes|=r),Po(o.return,r,n),h.lanes|=r;break}p=p.next}}else if(o.tag===10)u=o.type===n.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(c(341));u.lanes|=r,h=u.alternate,h!==null&&(h.lanes|=r),Po(u,r,n),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===n){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}We(e,n,l.children,r),n=n.child}return n;case 9:return l=n.type,s=n.pendingProps.children,Wt(n,r),l=fn(l),s=s(l),n.flags|=1,We(e,n,s,r),n.child;case 14:return s=n.type,l=kn(s,n.pendingProps),l=kn(s.type,l),Yc(e,n,s,l,r);case 15:return Xc(e,n,n.type,n.pendingProps,r);case 17:return s=n.type,l=n.pendingProps,l=n.elementType===s?l:kn(s,l),Us(e,n),n.tag=1,Ke(s)?(e=!0,Ss(n)):e=!1,Wt(n,r),Hc(n,s,l),Bo(n,s,l,r),Qo(null,n,s,!0,e,r);case 19:return ou(e,n,r);case 22:return Zc(e,n,r)}throw Error(c(156,n.tag))};function Ou(e,n){return ca(e,n)}function Ph(e,n,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(e,n,r,s){return new Ph(e,n,r,s)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bh(e){if(typeof e=="function")return fi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===an)return 11;if(e===cn)return 14}return 2}function at(e,n){var r=e.alternate;return r===null?(r=mn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Xs(e,n,r,s,l,o){var u=2;if(s=e,typeof e=="function")fi(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case B:return St(r.children,l,o,n);case Ne:u=8,l|=8;break;case en:return e=mn(12,r,n,l|2),e.elementType=en,e.lanes=o,e;case Ve:return e=mn(13,r,n,l),e.elementType=Ve,e.lanes=o,e;case nn:return e=mn(19,r,n,l),e.elementType=nn,e.lanes=o,e;case ge:return Zs(r,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xn:u=10;break e;case In:u=9;break e;case an:u=11;break e;case cn:u=14;break e;case $e:u=16,s=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return n=mn(u,r,n,l),n.elementType=e,n.type=s,n.lanes=o,n}function St(e,n,r,s){return e=mn(7,e,s,n),e.lanes=r,e}function Zs(e,n,r,s){return e=mn(22,e,s,n),e.elementType=ge,e.lanes=r,e.stateNode={isHidden:!1},e}function hi(e,n,r){return e=mn(6,e,null,n),e.lanes=r,e}function pi(e,n,r){return n=mn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Th(e,n,r,s,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function mi(e,n,r,s,l,o,u,h,p){return e=new Th(e,n,r,h,p),n===1?(n=1,o===!0&&(n|=8)):n=0,o=mn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},To(o),e}function Nh(e,n,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:s==null?null:""+s,children:e,containerInfo:n,implementation:r}}function Ru(e){if(!e)return Zn;e=e._reactInternals;e:{if(dt(e)!==e||e.tag!==1)throw Error(c(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(Ke(r))return lc(e,r,n)}return n}function _u(e,n,r,s,l,o,u,h,p){return e=mi(r,s,!0,e,l,o,u,h,p),e.context=Ru(null),r=e.current,s=Qe(),l=ot(r),o=Un(s,l),o.callback=n??null,tt(r,o,l),e.current.lanes=l,hr(e,l,s),Ye(e,s),e}function el(e,n,r,s){var l=n.current,o=Qe(),u=ot(l);return r=Ru(r),n.context===null?n.context=r:n.pendingContext=r,n=Un(o,u),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=tt(l,n,u),e!==null&&(En(e,l,u,o),Rs(e,l,u)),u}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Au(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function gi(e,n){Au(e,n),(e=e.alternate)&&Au(e,n)}function Oh(){return null}var Iu=typeof reportError=="function"?reportError:function(e){console.error(e)};function xi(e){this._internalRoot=e}tl.prototype.render=xi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));el(e,n,null,null)},tl.prototype.unmount=xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jt(function(){el(null,e,null,null)}),n[Mn]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var n=xa();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Kn.length&&n!==0&&n<Kn[r].priority;r++);Kn.splice(r,0,e),r===0&&ja(e)}};function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function Rh(e,n,r,s,l){if(l){if(typeof s=="function"){var o=s;s=function(){var j=nl(u);o.call(j)}}var u=_u(n,s,e,0,null,!1,!1,"",Du);return e._reactRootContainer=u,e[Mn]=u.current,br(e.nodeType===8?e.parentNode:e),jt(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var h=s;s=function(){var j=nl(p);h.call(j)}}var p=mi(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=p,e[Mn]=p.current,br(e.nodeType===8?e.parentNode:e),jt(function(){el(n,p,r,s)}),p}function sl(e,n,r,s,l){var o=r._reactRootContainer;if(o){var u=o;if(typeof l=="function"){var h=l;l=function(){var p=nl(u);h.call(p)}}el(n,u,e,l)}else u=Rh(r,n,e,l,s);return nl(u)}ma=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=fr(n.pendingLanes);r!==0&&(Ul(n,r|1),Ye(n,Ee()),(ae&6)===0&&(Jt=Ee()+500,et()))}break;case 13:jt(function(){var s=Fn(e,1);if(s!==null){var l=Qe();En(s,e,1,l)}}),gi(e,1)}},Bl=function(e){if(e.tag===13){var n=Fn(e,134217728);if(n!==null){var r=Qe();En(n,e,134217728,r)}gi(e,134217728)}},ga=function(e){if(e.tag===13){var n=ot(e),r=Fn(e,n);if(r!==null){var s=Qe();En(r,e,n,s)}gi(e,n)}},xa=function(){return me},ya=function(e,n){var r=me;try{return me=e,n()}finally{me=r}},Il=function(e,n,r){switch(n){case"input":if(Pl(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var s=r[n];if(s!==e&&s.form===e.form){var l=ws(s);if(!l)throw Error(c(90));yn(s),Pl(s,l)}}}break;case"textarea":Gi(e,r);break;case"select":n=r.value,n!=null&&bt(e,!!r.multiple,n,!1)}},ta=ci,ra=jt;var _h={usingClientEntryPoint:!1,Events:[Or,zt,ws,ea,na,ci]},Vr={findFiberByHostInstance:ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ah={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ia(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||Oh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{ts=ll.inject(Ah),Tn=ll}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_h,Xe.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yi(n))throw Error(c(200));return Nh(e,n,null,r)},Xe.createRoot=function(e,n){if(!yi(e))throw Error(c(299));var r=!1,s="",l=Iu;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=mi(e,1,!1,null,null,r,!1,s,l),e[Mn]=n.current,br(e.nodeType===8?e.parentNode:e),new xi(n)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ia(n),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return jt(e)},Xe.hydrate=function(e,n,r){if(!rl(n))throw Error(c(200));return sl(null,e,n,!0,r)},Xe.hydrateRoot=function(e,n,r){if(!yi(e))throw Error(c(405));var s=r!=null&&r.hydratedSources||null,l=!1,o="",u=Iu;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),n=_u(n,null,e,1,r??null,l,!1,o,u),e[Mn]=n.current,br(e),s)for(e=0;e<s.length;e++)r=s[e],l=r._getVersion,l=l(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,l]:n.mutableSourceEagerHydrationData.push(r,l);return new tl(n)},Xe.render=function(e,n,r){if(!rl(n))throw Error(c(200));return sl(null,e,n,!1,r)},Xe.unmountComponentAtNode=function(e){if(!rl(e))throw Error(c(40));return e._reactRootContainer?(jt(function(){sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1},Xe.unstable_batchedUpdates=ci,Xe.unstable_renderSubtreeIntoContainer=function(e,n,r,s){if(!rl(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return sl(e,n,r,!1,s)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var Hu;function Bh(){if(Hu)return wi.exports;Hu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),wi.exports=Uh(),wi.exports}var Vu;function Hh(){if(Vu)return ol;Vu=1;var i=Bh();return ol.createRoot=i.createRoot,ol.hydrateRoot=i.hydrateRoot,ol}var Vh=Hh(),Ze=function(){return Ze=Object.assign||function(a){for(var c,d=1,m=arguments.length;d<m;d++){c=arguments[d];for(var w in c)Object.prototype.hasOwnProperty.call(c,w)&&(a[w]=c[w])}return a},Ze.apply(this,arguments)};function Kr(i,a,c){if(c||arguments.length===2)for(var d=0,m=a.length,w;d<m;d++)(w||!(d in a))&&(w||(w=Array.prototype.slice.call(a,0,d)),w[d]=a[d]);return i.concat(w||Array.prototype.slice.call(a))}var je="-ms-",Gr="-moz-",pe="-webkit-",cd="comm",vl="rule",Li="decl",Wh="@import",ud="@keyframes",Qh="@layer",dd=Math.abs,$i=String.fromCharCode,Ti=Object.assign;function Gh(i,a){return De(i,0)^45?(((a<<2^De(i,0))<<2^De(i,1))<<2^De(i,2))<<2^De(i,3):0}function fd(i){return i.trim()}function Vn(i,a){return(i=a.exec(i))?i[0]:i}function X(i,a,c){return i.replace(a,c)}function cl(i,a,c){return i.indexOf(a,c)}function De(i,a){return i.charCodeAt(a)|0}function er(i,a,c){return i.slice(a,c)}function An(i){return i.length}function hd(i){return i.length}function Qr(i,a){return a.push(i),i}function Kh(i,a){return i.map(a).join("")}function Wu(i,a){return i.filter(function(c){return!Vn(c,a)})}var jl=1,nr=1,pd=0,gn=0,Te=0,lr="";function wl(i,a,c,d,m,w,P,I){return{value:i,root:a,parent:c,type:d,props:m,children:w,line:jl,column:nr,length:P,return:"",siblings:I}}function ut(i,a){return Ti(wl("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},a)}function Xt(i){for(;i.root;)i=ut(i.root,{children:[i]});Qr(i,i.siblings)}function qh(){return Te}function Jh(){return Te=gn>0?De(lr,--gn):0,nr--,Te===10&&(nr=1,jl--),Te}function bn(){return Te=gn<pd?De(lr,gn++):0,nr++,Te===10&&(nr=1,jl++),Te}function Et(){return De(lr,gn)}function ul(){return gn}function kl(i,a){return er(lr,i,a)}function Ni(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yh(i){return jl=nr=1,pd=An(lr=i),gn=0,[]}function Xh(i){return lr="",i}function Ci(i){return fd(kl(gn-1,Oi(i===91?i+2:i===40?i+1:i)))}function Zh(i){for(;(Te=Et())&&Te<33;)bn();return Ni(i)>2||Ni(Te)>3?"":" "}function ep(i,a){for(;--a&&bn()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return kl(i,ul()+(a<6&&Et()==32&&bn()==32))}function Oi(i){for(;bn();)switch(Te){case i:return gn;case 34:case 39:i!==34&&i!==39&&Oi(Te);break;case 40:i===41&&Oi(i);break;case 92:bn();break}return gn}function np(i,a){for(;bn()&&i+Te!==57;)if(i+Te===84&&Et()===47)break;return"/*"+kl(a,gn-1)+"*"+$i(i===47?i:bn())}function tp(i){for(;!Ni(Et());)bn();return kl(i,gn)}function rp(i){return Xh(dl("",null,null,null,[""],i=Yh(i),0,[0],i))}function dl(i,a,c,d,m,w,P,I,T){for(var Q=0,V=0,L=P,$=0,G=0,se=0,W=1,J=1,he=1,ie=0,le="",Z=m,de=w,K=d,B=le;J;)switch(se=ie,ie=bn()){case 40:if(se!=108&&De(B,L-1)==58){cl(B+=X(Ci(ie),"&","&\f"),"&\f",dd(Q?I[Q-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:B+=Ci(ie);break;case 9:case 10:case 13:case 32:B+=Zh(se);break;case 92:B+=ep(ul()-1,7);continue;case 47:switch(Et()){case 42:case 47:Qr(sp(np(bn(),ul()),a,c,T),T);break;default:B+="/"}break;case 123*W:I[Q++]=An(B)*he;case 125*W:case 59:case 0:switch(ie){case 0:case 125:J=0;case 59+V:he==-1&&(B=X(B,/\f/g,"")),G>0&&An(B)-L&&Qr(G>32?Gu(B+";",d,c,L-1,T):Gu(X(B," ","")+";",d,c,L-2,T),T);break;case 59:B+=";";default:if(Qr(K=Qu(B,a,c,Q,V,m,I,le,Z=[],de=[],L,w),w),ie===123)if(V===0)dl(B,a,K,K,Z,w,L,I,de);else switch($===99&&De(B,3)===110?100:$){case 100:case 108:case 109:case 115:dl(i,K,K,d&&Qr(Qu(i,K,K,0,0,m,I,le,m,Z=[],L,de),de),m,de,L,I,d?Z:de);break;default:dl(B,K,K,K,[""],de,0,I,de)}}Q=V=G=0,W=he=1,le=B="",L=P;break;case 58:L=1+An(B),G=se;default:if(W<1){if(ie==123)--W;else if(ie==125&&W++==0&&Jh()==125)continue}switch(B+=$i(ie),ie*W){case 38:he=V>0?1:(B+="\f",-1);break;case 44:I[Q++]=(An(B)-1)*he,he=1;break;case 64:Et()===45&&(B+=Ci(bn())),$=Et(),V=L=An(le=B+=tp(ul())),ie++;break;case 45:se===45&&An(B)==2&&(W=0)}}return w}function Qu(i,a,c,d,m,w,P,I,T,Q,V,L){for(var $=m-1,G=m===0?w:[""],se=hd(G),W=0,J=0,he=0;W<d;++W)for(var ie=0,le=er(i,$+1,$=dd(J=P[W])),Z=i;ie<se;++ie)(Z=fd(J>0?G[ie]+" "+le:X(le,/&\f/g,G[ie])))&&(T[he++]=Z);return wl(i,a,c,m===0?vl:I,T,Q,V,L)}function sp(i,a,c,d){return wl(i,a,c,cd,$i(qh()),er(i,2,-2),0,d)}function Gu(i,a,c,d,m){return wl(i,a,c,Li,er(i,0,d),er(i,d+1,-1),d,m)}function md(i,a,c){switch(Gh(i,a)){case 5103:return pe+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+i+i;case 4789:return Gr+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+i+Gr+i+je+i+i;case 5936:switch(De(i,a+11)){case 114:return pe+i+je+X(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return pe+i+je+X(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return pe+i+je+X(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return pe+i+je+i+i;case 6165:return pe+i+je+"flex-"+i+i;case 5187:return pe+i+X(i,/(\w+).+(:[^]+)/,pe+"box-$1$2"+je+"flex-$1$2")+i;case 5443:return pe+i+je+"flex-item-"+X(i,/flex-|-self/g,"")+(Vn(i,/flex-|baseline/)?"":je+"grid-row-"+X(i,/flex-|-self/g,""))+i;case 4675:return pe+i+je+"flex-line-pack"+X(i,/align-content|flex-|-self/g,"")+i;case 5548:return pe+i+je+X(i,"shrink","negative")+i;case 5292:return pe+i+je+X(i,"basis","preferred-size")+i;case 6060:return pe+"box-"+X(i,"-grow","")+pe+i+je+X(i,"grow","positive")+i;case 4554:return pe+X(i,/([^-])(transform)/g,"$1"+pe+"$2")+i;case 6187:return X(X(X(i,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),i,"")+i;case 5495:case 3959:return X(i,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return X(X(i,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+i+i;case 4200:if(!Vn(i,/flex-|baseline/))return je+"grid-column-align"+er(i,a)+i;break;case 2592:case 3360:return je+X(i,"template-","")+i;case 4384:case 3616:return c&&c.some(function(d,m){return a=m,Vn(d.props,/grid-\w+-end/)})?~cl(i+(c=c[a].value),"span",0)?i:je+X(i,"-start","")+i+je+"grid-row-span:"+(~cl(c,"span",0)?Vn(c,/\d+/):+Vn(c,/\d+/)-+Vn(i,/\d+/))+";":je+X(i,"-start","")+i;case 4896:case 4128:return c&&c.some(function(d){return Vn(d.props,/grid-\w+-start/)})?i:je+X(X(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return X(i,/(.+)-inline(.+)/,pe+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(i)-1-a>6)switch(De(i,a+1)){case 109:if(De(i,a+4)!==45)break;case 102:return X(i,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Gr+(De(i,a+3)==108?"$3":"$2-$3"))+i;case 115:return~cl(i,"stretch",0)?md(X(i,"stretch","fill-available"),a,c)+i:i}break;case 5152:case 5920:return X(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,m,w,P,I,T,Q){return je+m+":"+w+Q+(P?je+m+"-span:"+(I?T:+T-+w)+Q:"")+i});case 4949:if(De(i,a+6)===121)return X(i,":",":"+pe)+i;break;case 6444:switch(De(i,De(i,14)===45?18:11)){case 120:return X(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(De(i,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+je+"$2box$3")+i;case 100:return X(i,":",":"+je)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return X(i,"scroll-","scroll-snap-")+i}return i}function pl(i,a){for(var c="",d=0;d<i.length;d++)c+=a(i[d],d,i,a)||"";return c}function lp(i,a,c,d){switch(i.type){case Qh:if(i.children.length)break;case Wh:case Li:return i.return=i.return||i.value;case cd:return"";case ud:return i.return=i.value+"{"+pl(i.children,d)+"}";case vl:if(!An(i.value=i.props.join(",")))return""}return An(c=pl(i.children,d))?i.return=i.value+"{"+c+"}":""}function op(i){var a=hd(i);return function(c,d,m,w){for(var P="",I=0;I<a;I++)P+=i[I](c,d,m,w)||"";return P}}function ip(i){return function(a){a.root||(a=a.return)&&i(a)}}function ap(i,a,c,d){if(i.length>-1&&!i.return)switch(i.type){case Li:i.return=md(i.value,i.length,c);return;case ud:return pl([ut(i,{value:X(i.value,"@","@"+pe)})],d);case vl:if(i.length)return Kh(c=i.props,function(m){switch(Vn(m,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xt(ut(i,{props:[X(m,/:(read-\w+)/,":"+Gr+"$1")]})),Xt(ut(i,{props:[m]})),Ti(i,{props:Wu(c,d)});break;case"::placeholder":Xt(ut(i,{props:[X(m,/:(plac\w+)/,":"+pe+"input-$1")]})),Xt(ut(i,{props:[X(m,/:(plac\w+)/,":"+Gr+"$1")]})),Xt(ut(i,{props:[X(m,/:(plac\w+)/,je+"input-$1")]})),Xt(ut(i,{props:[m]})),Ti(i,{props:Wu(c,d)});break}return""})}}var cp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},on={},tr=typeof process<"u"&&on!==void 0&&(on.REACT_APP_SC_ATTR||on.SC_ATTR)||"data-styled",gd="active",xd="data-styled-version",Sl="6.1.19",Fi=`/*!sc*/
`,ml=typeof window<"u"&&typeof document<"u",up=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==""?on.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&on.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.SC_DISABLE_SPEEDY!==void 0&&on.SC_DISABLE_SPEEDY!==""&&on.SC_DISABLE_SPEEDY!=="false"&&on.SC_DISABLE_SPEEDY),Cl=Object.freeze([]),rr=Object.freeze({});function dp(i,a,c){return c===void 0&&(c=rr),i.theme!==c.theme&&i.theme||a||c.theme}var yd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fp=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hp=/(^-|-$)/g;function Ku(i){return i.replace(fp,"-").replace(hp,"")}var pp=/(a)(d)/gi,il=52,qu=function(i){return String.fromCharCode(i+(i>25?39:97))};function Ri(i){var a,c="";for(a=Math.abs(i);a>il;a=a/il|0)c=qu(a%il)+c;return(qu(a%il)+c).replace(pp,"$1-$2")}var Ei,vd=5381,Zt=function(i,a){for(var c=a.length;c;)i=33*i^a.charCodeAt(--c);return i},jd=function(i){return Zt(vd,i)};function wd(i){return Ri(jd(i)>>>0)}function mp(i){return i.displayName||i.name||"Component"}function Pi(i){return typeof i=="string"&&!0}var kd=typeof Symbol=="function"&&Symbol.for,Sd=kd?Symbol.for("react.memo"):60115,gp=kd?Symbol.for("react.forward_ref"):60112,xp={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yp={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vp=((Ei={})[gp]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ei[Sd]=Cd,Ei);function Ju(i){return("type"in(a=i)&&a.type.$$typeof)===Sd?Cd:"$$typeof"in i?vp[i.$$typeof]:xp;var a}var jp=Object.defineProperty,wp=Object.getOwnPropertyNames,Yu=Object.getOwnPropertySymbols,kp=Object.getOwnPropertyDescriptor,Sp=Object.getPrototypeOf,Xu=Object.prototype;function Ed(i,a,c){if(typeof a!="string"){if(Xu){var d=Sp(a);d&&d!==Xu&&Ed(i,d,c)}var m=wp(a);Yu&&(m=m.concat(Yu(a)));for(var w=Ju(i),P=Ju(a),I=0;I<m.length;++I){var T=m[I];if(!(T in yp||c&&c[T]||P&&T in P||w&&T in w)){var Q=kp(a,T);try{jp(i,T,Q)}catch{}}}}return i}function sr(i){return typeof i=="function"}function Ui(i){return typeof i=="object"&&"styledComponentId"in i}function Ct(i,a){return i&&a?"".concat(i," ").concat(a):i||a||""}function _i(i,a){if(i.length===0)return"";for(var c=i[0],d=1;d<i.length;d++)c+=i[d];return c}function qr(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ai(i,a,c){if(c===void 0&&(c=!1),!c&&!qr(i)&&!Array.isArray(i))return a;if(Array.isArray(a))for(var d=0;d<a.length;d++)i[d]=Ai(i[d],a[d]);else if(qr(a))for(var d in a)i[d]=Ai(i[d],a[d]);return i}function Bi(i,a){Object.defineProperty(i,"toString",{value:a})}function Jr(i){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Cp=function(){function i(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return i.prototype.indexOfGroup=function(a){for(var c=0,d=0;d<a;d++)c+=this.groupSizes[d];return c},i.prototype.insertRules=function(a,c){if(a>=this.groupSizes.length){for(var d=this.groupSizes,m=d.length,w=m;a>=w;)if((w<<=1)<0)throw Jr(16,"".concat(a));this.groupSizes=new Uint32Array(w),this.groupSizes.set(d),this.length=w;for(var P=m;P<w;P++)this.groupSizes[P]=0}for(var I=this.indexOfGroup(a+1),T=(P=0,c.length);P<T;P++)this.tag.insertRule(I,c[P])&&(this.groupSizes[a]++,I++)},i.prototype.clearGroup=function(a){if(a<this.length){var c=this.groupSizes[a],d=this.indexOfGroup(a),m=d+c;this.groupSizes[a]=0;for(var w=d;w<m;w++)this.tag.deleteRule(d)}},i.prototype.getGroup=function(a){var c="";if(a>=this.length||this.groupSizes[a]===0)return c;for(var d=this.groupSizes[a],m=this.indexOfGroup(a),w=m+d,P=m;P<w;P++)c+="".concat(this.tag.getRule(P)).concat(Fi);return c},i}(),fl=new Map,gl=new Map,hl=1,al=function(i){if(fl.has(i))return fl.get(i);for(;gl.has(hl);)hl++;var a=hl++;return fl.set(i,a),gl.set(a,i),a},Ep=function(i,a){hl=a+1,fl.set(i,a),gl.set(a,i)},Pp="style[".concat(tr,"][").concat(xd,'="').concat(Sl,'"]'),bp=new RegExp("^".concat(tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Tp=function(i,a,c){for(var d,m=c.split(","),w=0,P=m.length;w<P;w++)(d=m[w])&&i.registerName(a,d)},Np=function(i,a){for(var c,d=((c=a.textContent)!==null&&c!==void 0?c:"").split(Fi),m=[],w=0,P=d.length;w<P;w++){var I=d[w].trim();if(I){var T=I.match(bp);if(T){var Q=0|parseInt(T[1],10),V=T[2];Q!==0&&(Ep(V,Q),Tp(i,V,T[3]),i.getTag().insertRules(Q,m)),m.length=0}else m.push(I)}}},Zu=function(i){for(var a=document.querySelectorAll(Pp),c=0,d=a.length;c<d;c++){var m=a[c];m&&m.getAttribute(tr)!==gd&&(Np(i,m),m.parentNode&&m.parentNode.removeChild(m))}};function Op(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Pd=function(i){var a=document.head,c=i||a,d=document.createElement("style"),m=function(I){var T=Array.from(I.querySelectorAll("style[".concat(tr,"]")));return T[T.length-1]}(c),w=m!==void 0?m.nextSibling:null;d.setAttribute(tr,gd),d.setAttribute(xd,Sl);var P=Op();return P&&d.setAttribute("nonce",P),c.insertBefore(d,w),d},Rp=function(){function i(a){this.element=Pd(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var d=document.styleSheets,m=0,w=d.length;m<w;m++){var P=d[m];if(P.ownerNode===c)return P}throw Jr(17)}(this.element),this.length=0}return i.prototype.insertRule=function(a,c){try{return this.sheet.insertRule(c,a),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},i.prototype.getRule=function(a){var c=this.sheet.cssRules[a];return c&&c.cssText?c.cssText:""},i}(),_p=function(){function i(a){this.element=Pd(a),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(a,c){if(a<=this.length&&a>=0){var d=document.createTextNode(c);return this.element.insertBefore(d,this.nodes[a]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},i.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},i}(),Ap=function(){function i(a){this.rules=[],this.length=0}return i.prototype.insertRule=function(a,c){return a<=this.length&&(this.rules.splice(a,0,c),this.length++,!0)},i.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},i.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},i}(),ed=ml,Ip={isServer:!ml,useCSSOMInjection:!up},bd=function(){function i(a,c,d){a===void 0&&(a=rr),c===void 0&&(c={});var m=this;this.options=Ze(Ze({},Ip),a),this.gs=c,this.names=new Map(d),this.server=!!a.isServer,!this.server&&ml&&ed&&(ed=!1,Zu(this)),Bi(this,function(){return function(w){for(var P=w.getTag(),I=P.length,T="",Q=function(L){var $=function(he){return gl.get(he)}(L);if($===void 0)return"continue";var G=w.names.get($),se=P.getGroup(L);if(G===void 0||!G.size||se.length===0)return"continue";var W="".concat(tr,".g").concat(L,'[id="').concat($,'"]'),J="";G!==void 0&&G.forEach(function(he){he.length>0&&(J+="".concat(he,","))}),T+="".concat(se).concat(W,'{content:"').concat(J,'"}').concat(Fi)},V=0;V<I;V++)Q(V);return T}(m)})}return i.registerId=function(a){return al(a)},i.prototype.rehydrate=function(){!this.server&&ml&&Zu(this)},i.prototype.reconstructWithOptions=function(a,c){return c===void 0&&(c=!0),new i(Ze(Ze({},this.options),a),this.gs,c&&this.names||void 0)},i.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(a=function(c){var d=c.useCSSOMInjection,m=c.target;return c.isServer?new Ap(m):d?new Rp(m):new _p(m)}(this.options),new Cp(a)));var a},i.prototype.hasNameForId=function(a,c){return this.names.has(a)&&this.names.get(a).has(c)},i.prototype.registerName=function(a,c){if(al(a),this.names.has(a))this.names.get(a).add(c);else{var d=new Set;d.add(c),this.names.set(a,d)}},i.prototype.insertRules=function(a,c,d){this.registerName(a,c),this.getTag().insertRules(al(a),d)},i.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},i.prototype.clearRules=function(a){this.getTag().clearGroup(al(a)),this.clearNames(a)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Dp=/&/g,Mp=/^\s*\/\/.*$/gm;function Td(i,a){return i.map(function(c){return c.type==="rule"&&(c.value="".concat(a," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(a," ")),c.props=c.props.map(function(d){return"".concat(a," ").concat(d)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Td(c.children,a)),c})}function zp(i){var a,c,d,m=rr,w=m.options,P=w===void 0?rr:w,I=m.plugins,T=I===void 0?Cl:I,Q=function($,G,se){return se.startsWith(c)&&se.endsWith(c)&&se.replaceAll(c,"").length>0?".".concat(a):$},V=T.slice();V.push(function($){$.type===vl&&$.value.includes("&")&&($.props[0]=$.props[0].replace(Dp,c).replace(d,Q))}),P.prefix&&V.push(ap),V.push(lp);var L=function($,G,se,W){G===void 0&&(G=""),se===void 0&&(se=""),W===void 0&&(W="&"),a=W,c=G,d=new RegExp("\\".concat(c,"\\b"),"g");var J=$.replace(Mp,""),he=rp(se||G?"".concat(se," ").concat(G," { ").concat(J," }"):J);P.namespace&&(he=Td(he,P.namespace));var ie=[];return pl(he,op(V.concat(ip(function(le){return ie.push(le)})))),ie};return L.hash=T.length?T.reduce(function($,G){return G.name||Jr(15),Zt($,G.name)},vd).toString():"",L}var Lp=new bd,Ii=zp(),Nd=ee.createContext({shouldForwardProp:void 0,styleSheet:Lp,stylis:Ii});Nd.Consumer;ee.createContext(void 0);function nd(){return zi.useContext(Nd)}var Od=function(){function i(a,c){var d=this;this.inject=function(m,w){w===void 0&&(w=Ii);var P=d.name+w.hash;m.hasNameForId(d.id,P)||m.insertRules(d.id,P,w(d.rules,P,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=c,Bi(this,function(){throw Jr(12,String(d.name))})}return i.prototype.getName=function(a){return a===void 0&&(a=Ii),this.name+a.hash},i}(),$p=function(i){return i>="A"&&i<="Z"};function td(i){for(var a="",c=0;c<i.length;c++){var d=i[c];if(c===1&&d==="-"&&i[0]==="-")return i;$p(d)?a+="-"+d.toLowerCase():a+=d}return a.startsWith("ms-")?"-"+a:a}var Rd=function(i){return i==null||i===!1||i===""},_d=function(i){var a,c,d=[];for(var m in i){var w=i[m];i.hasOwnProperty(m)&&!Rd(w)&&(Array.isArray(w)&&w.isCss||sr(w)?d.push("".concat(td(m),":"),w,";"):qr(w)?d.push.apply(d,Kr(Kr(["".concat(m," {")],_d(w),!1),["}"],!1)):d.push("".concat(td(m),": ").concat((a=m,(c=w)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||a in cp||a.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return d};function Pt(i,a,c,d){if(Rd(i))return[];if(Ui(i))return[".".concat(i.styledComponentId)];if(sr(i)){if(!sr(w=i)||w.prototype&&w.prototype.isReactComponent||!a)return[i];var m=i(a);return Pt(m,a,c,d)}var w;return i instanceof Od?c?(i.inject(c,d),[i.getName(d)]):[i]:qr(i)?_d(i):Array.isArray(i)?Array.prototype.concat.apply(Cl,i.map(function(P){return Pt(P,a,c,d)})):[i.toString()]}function Fp(i){for(var a=0;a<i.length;a+=1){var c=i[a];if(sr(c)&&!Ui(c))return!1}return!0}var Up=jd(Sl),Bp=function(){function i(a,c,d){this.rules=a,this.staticRulesId="",this.isStatic=(d===void 0||d.isStatic)&&Fp(a),this.componentId=c,this.baseHash=Zt(Up,c),this.baseStyle=d,bd.registerId(c)}return i.prototype.generateAndInjectStyles=function(a,c,d){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,c,d):"";if(this.isStatic&&!d.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))m=Ct(m,this.staticRulesId);else{var w=_i(Pt(this.rules,a,c,d)),P=Ri(Zt(this.baseHash,w)>>>0);if(!c.hasNameForId(this.componentId,P)){var I=d(w,".".concat(P),void 0,this.componentId);c.insertRules(this.componentId,P,I)}m=Ct(m,P),this.staticRulesId=P}else{for(var T=Zt(this.baseHash,d.hash),Q="",V=0;V<this.rules.length;V++){var L=this.rules[V];if(typeof L=="string")Q+=L;else if(L){var $=_i(Pt(L,a,c,d));T=Zt(T,$+V),Q+=$}}if(Q){var G=Ri(T>>>0);c.hasNameForId(this.componentId,G)||c.insertRules(this.componentId,G,d(Q,".".concat(G),void 0,this.componentId)),m=Ct(m,G)}}return m},i}(),Ad=ee.createContext(void 0);Ad.Consumer;var bi={};function Hp(i,a,c){var d=Ui(i),m=i,w=!Pi(i),P=a.attrs,I=P===void 0?Cl:P,T=a.componentId,Q=T===void 0?function(Z,de){var K=typeof Z!="string"?"sc":Ku(Z);bi[K]=(bi[K]||0)+1;var B="".concat(K,"-").concat(wd(Sl+K+bi[K]));return de?"".concat(de,"-").concat(B):B}(a.displayName,a.parentComponentId):T,V=a.displayName,L=V===void 0?function(Z){return Pi(Z)?"styled.".concat(Z):"Styled(".concat(mp(Z),")")}(i):V,$=a.displayName&&a.componentId?"".concat(Ku(a.displayName),"-").concat(a.componentId):a.componentId||Q,G=d&&m.attrs?m.attrs.concat(I).filter(Boolean):I,se=a.shouldForwardProp;if(d&&m.shouldForwardProp){var W=m.shouldForwardProp;if(a.shouldForwardProp){var J=a.shouldForwardProp;se=function(Z,de){return W(Z,de)&&J(Z,de)}}else se=W}var he=new Bp(c,$,d?m.componentStyle:void 0);function ie(Z,de){return function(K,B,Ne){var en=K.attrs,xn=K.componentStyle,In=K.defaultProps,an=K.foldedComponentIds,Ve=K.styledComponentId,nn=K.target,cn=ee.useContext(Ad),$e=nd(),ge=K.shouldForwardProp||$e.shouldForwardProp,N=dp(B,cn,In)||rr,z=function(re,ne,fe){for(var oe,ce=Ze(Ze({},ne),{className:void 0,theme:fe}),Me=0;Me<re.length;Me+=1){var Dn=sr(oe=re[Me])?oe(ce):oe;for(var yn in Dn)ce[yn]=yn==="className"?Ct(ce[yn],Dn[yn]):yn==="style"?Ze(Ze({},ce[yn]),Dn[yn]):Dn[yn]}return ne.className&&(ce.className=Ct(ce.className,ne.className)),ce}(en,B,N),O=z.as||nn,x={};for(var k in z)z[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&z.theme===N||(k==="forwardedAs"?x.as=z.forwardedAs:ge&&!ge(k,O)||(x[k]=z[k]));var q=function(re,ne){var fe=nd(),oe=re.generateAndInjectStyles(ne,fe.styleSheet,fe.stylis);return oe}(xn,z),Y=Ct(an,Ve);return q&&(Y+=" "+q),z.className&&(Y+=" "+z.className),x[Pi(O)&&!yd.has(O)?"class":"className"]=Y,Ne&&(x.ref=Ne),zi.createElement(O,x)}(le,Z,de)}ie.displayName=L;var le=ee.forwardRef(ie);return le.attrs=G,le.componentStyle=he,le.displayName=L,le.shouldForwardProp=se,le.foldedComponentIds=d?Ct(m.foldedComponentIds,m.styledComponentId):"",le.styledComponentId=$,le.target=d?m.target:i,Object.defineProperty(le,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=d?function(de){for(var K=[],B=1;B<arguments.length;B++)K[B-1]=arguments[B];for(var Ne=0,en=K;Ne<en.length;Ne++)Ai(de,en[Ne],!0);return de}({},m.defaultProps,Z):Z}}),Bi(le,function(){return".".concat(le.styledComponentId)}),w&&Ed(le,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),le}function rd(i,a){for(var c=[i[0]],d=0,m=a.length;d<m;d+=1)c.push(a[d],i[d+1]);return c}var sd=function(i){return Object.assign(i,{isCss:!0})};function Id(i){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];if(sr(i)||qr(i))return sd(Pt(rd(Cl,Kr([i],a,!0))));var d=i;return a.length===0&&d.length===1&&typeof d[0]=="string"?Pt(d):sd(Pt(rd(d,a)))}function Di(i,a,c){if(c===void 0&&(c=rr),!a)throw Jr(1,a);var d=function(m){for(var w=[],P=1;P<arguments.length;P++)w[P-1]=arguments[P];return i(a,c,Id.apply(void 0,Kr([m],w,!1)))};return d.attrs=function(m){return Di(i,a,Ze(Ze({},c),{attrs:Array.prototype.concat(c.attrs,m).filter(Boolean)}))},d.withConfig=function(m){return Di(i,a,Ze(Ze({},c),m))},d}var Dd=function(i){return Di(Hp,i)},Pn=Dd;yd.forEach(function(i){Pn[i]=Dd(i)});function Vp(i){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];var d=_i(Id.apply(void 0,Kr([i],a,!1))),m=wd(d);return new Od(m,d)}const Wp=Vp`
  from { box-shadow: 0 0 0 0 rgba(99,102,241,0.3); }
  to   { box-shadow: 0 0 0 8px rgba(99,102,241,0.0); }
`,f={Topic:Pn.section`
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
            animation: ${Wp} 2s ease-out 1;
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
    `};function Qp({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="react-definition";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"React: definition & inspiration"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(Gp,{})})})]})}function Gp(){return t.jsxs(f.Content,{children:[t.jsx("h3",{children:"What is React (how I define it)"}),t.jsxs("p",{children:["React is a ",t.jsx("strong",{children:"JavaScript library for building user interfaces"}),". I use it to describe UI as a pure function of state: ",t.jsx("em",{children:"UI = f(state)"}),". Instead of manually manipulating the DOM step-by-step, I declare how the UI should look for a given state and React takes care of updating the browser efficiently."]}),t.jsxs("p",{children:["It’s ",t.jsx("strong",{children:"component-based"})," (I build small, reusable components),"," ",t.jsx("strong",{children:"declarative"})," (I say “what”, not “how”), and it prefers"," ",t.jsx("strong",{children:"one-way data flow"})," (data goes down from parent to child)."]}),t.jsx("h3",{children:"Why React was created (the inspiration I keep in mind)"}),t.jsxs("p",{children:["React originated to tame complex, interactive UIs where frequent state changes made imperative DOM code fragile. The big idea was: treat the DOM as a ",t.jsx("em",{children:"result"})," of state, reconcile differences between the previous and next “virtual tree”, and update only what changed. This approach simplified mental load and reduced UI bugs caused by manual DOM ops."]}),t.jsx("p",{children:"Composition over inheritance, predictable data flow, and a fast diffing strategy (keys + identity) are the core inspirations that shaped how I write React apps today."}),t.jsx("h3",{children:"Mini example (UI = f(state))"}),t.jsx(f.Code,{"aria-label":"UI = f(state)",children:String.raw`function Hello() {
  const [name, setName] = React.useState("Ash");

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
// I declare what the UI should be for the current 'name'.
// React handles the DOM updates when 'name' changes.`}),t.jsx("h3",{children:"Where I reach for React (and where I don't)"}),t.jsx("p",{children:"I reach for React when I’m building interactive dashboards, forms, and views with lots of dynamic state. If a page is mostly static content, plain HTML/CSS (or a lightweight templating setup) can be enough; I don’t force React where it doesn’t add value."}),t.jsxs("p",{children:["That’s my short, practical mental picture: ",t.jsx("strong",{children:"components + state → declarative UI"}),", with React efficiently reconciling changes under the hood."]})]})}function Kp({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="vite-install";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Vite install (create app, run dev)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(qp,{})})})]})}function qp(){return t.jsxs(f.Content,{children:[t.jsx("h3",{children:"Prereq (1-time)"}),t.jsx("p",{children:"I generally work on node version 18."}),t.jsx(f.Code,{"aria-label":"check node",children:String.raw`node -v   # v18.20.4`}),t.jsx("h3",{children:"Create a new React app (interactive)"}),t.jsx("p",{children:"I usually run the interactive creator and pick React."}),t.jsx(f.Code,{"aria-label":"create vite app",children:String.raw`npm create vite@latest

# Prompts I pick:
# ✔ Project name: » reactjs-handbook
# ✔ Select a framework: » React
# ✔ Select a variant: » JavaScript
`}),t.jsx("h4",{children:"One-liner (skip prompts)"}),t.jsx(f.Code,{"aria-label":"one-liner create",children:String.raw`npm create vite@latest reactjs-handbook -- --template react`}),t.jsx("h3",{children:"Install & run locally"}),t.jsx(f.Code,{"aria-label":"install + dev",children:String.raw`cd reactjs-handbook
npm i
npm run dev   # opens http://localhost:5173`}),t.jsx("h3",{children:"Handy flags I use while coding"}),t.jsx(f.Code,{"aria-label":"dev flags",children:String.raw`# choose a different port if 5173 is busy
npm run dev -- --port 5174`}),t.jsx("h3",{children:"Quick notes I keep in mind"}),t.jsx("ul",{children:t.jsxs("li",{children:["After first run, I commit my own structure and add ",t.jsx("code",{children:"styled-components"})," when I start UI."]})}),t.jsx(f.Divider,{}),t.jsxs("p",{children:["That's it: create → install → ",t.jsx("strong",{children:"npm run dev"})," at ",t.jsx("code",{children:"http://localhost:5173"}),"."]})]})}var ld=Object.freeze,Jp=Object.defineProperty,Yp=(i,a)=>ld(Jp(i,"raw",{value:ld(i.slice())})),od;function Xp({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="project-tree";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Project tree (what each file does)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(Zp,{})})})]})}function Zp(){return t.jsxs(f.Content,{children:[t.jsx("h3",{children:"My project tree (Vite + React)"}),t.jsx(f.Code,{"aria-label":"folder tree",children:String.raw`.
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
`}),t.jsx("h3",{children:"What each file does (short)"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"index.html"})," - Minimal HTML with a ",t.jsx("code",{children:'<div id="root">'}),". Vite injects the built JS here."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"src/main.jsx"})," - Boot file; creates the root and renders ",t.jsx("code",{children:"<App />"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"src/App.jsx"})," - App shell; I mount ",t.jsx("code",{children:"<ReactTutorial />"})," here."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"src/ReactTutorial.jsx"})," - Lists all topic components (each one collapsible)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"src/topics/"})," - Every note lives in its own file (e.g. ",t.jsx("code",{children:"ViteInstall.jsx"}),")."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"src/styled.js"})," - Shared Styled object with primitives:",t.jsx("code",{children:"Topic"}),", ",t.jsx("code",{children:"Title"}),", ",t.jsx("code",{children:"Arrow"}),", ",t.jsx("code",{children:"Panel"}),", ",t.jsx("code",{children:"Content"}),", ",t.jsx("code",{children:"Code"}),", ",t.jsx("code",{children:"Divider"}),", etc."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"public/"})," - Files served as-is (no bundling)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"vite.config.js"})," - Aliases and build dev settings."]})]}),t.jsx("h3",{children:"index.html (tiny and clean)"}),t.jsx(f.Code,{"aria-label":"index.html",children:String.raw(od||(od=Yp([`<!doctype html>
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
</html>`])))}),t.jsx("h3",{children:"main.jsx (entry)"}),t.jsx(f.Code,{"aria-label":"main.jsx",children:String.raw`import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // if I keep global styles

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}),t.jsx("h3",{children:"App.jsx (shell)"}),t.jsx(f.Code,{"aria-label":"App.jsx",children:String.raw`import React from "react";
import ReactTutorial from "./ReactTutorial";

export default function App() {
  return <ReactTutorial />;
}`}),t.jsx("h3",{children:"Tip I follow"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Keep ",t.jsx("strong",{children:"topics"})," small and focused-one concept per file."]}),t.jsxs("li",{children:["Assets go in ",t.jsx("code",{children:"src/assets"}),"; import them directly in components."]}),t.jsxs("li",{children:["Shared UI in ",t.jsx("code",{children:"components/"})," if I reuse it across topics."]})]}),t.jsx(f.Divider,{})]})}function em({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="editor-setup";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Editor setup (VS Code, extensions)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(nm,{})})})]})}function nm(){return t.jsxs(f.Content,{children:[t.jsx("h3",{children:"Extensions I install"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"ESLint"})," - dbaeumer.vscode-eslint"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Prettier - Code formatter"})," - esbenp.prettier-vscode"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Error Lens"})," - usernamehw.errorlens"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"vscode-styled-components"})," - styled-components.vscode-styled-components"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Auto Rename Tag"})," - formulahendry.auto-rename-tag"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Auto Close Tag"})," - formulahendry.auto-close-tag"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Path Intellisense"})," - christian-kohler.path-intellisense"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"ES7+ React/Redux snippets"})," - dsznajder.es7-react-js-snippets"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Git Graph"})," - mhutchie.git-graph (nice to have)"]})]}),t.jsx("h3",{children:"Workspace recommendations"}),t.jsx("p",{children:"I add this file so VS Code suggests the right extensions to anyone opening the repo."}),t.jsx(f.Code,{"aria-label":".vscode/extensions.json",children:String.raw`{
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
}`}),t.jsx("h3",{children:"My VS Code settings"}),t.jsx("p",{children:"Format on save + ESLint fixes; tidy imports; good highlighting for styled-components."}),t.jsx(f.Code,{"aria-label":".vscode/settings.json",children:String.raw`{
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
}`}),t.jsx("h3",{children:"Command palette shortcuts"}),t.jsx(f.Code,{"aria-label":"commands",children:String.raw`Ctrl/Cmd + Shift + P →
> Format Document
> Restart ESLint Server
> Developer: Reload Window`}),t.jsx("h3",{children:"Notes"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Prettier handles formatting; ESLint handles code quality/fixes. I run both on save."}),t.jsx("li",{children:"The styled-components extension improves syntax highlighting inside template literals."}),t.jsx("li",{children:"VS Code auto-updates imports when files move (with the settings above)."})]}),t.jsx(f.Divider,{}),t.jsxs("p",{children:[t.jsx("em",{children:"PS:"})," My laptop is older, so I keep VS Code light - I install only essential extensions and prefer a minimal UI to save memory/CPU."]})]})}function tm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="env-files";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:".env / .env.development / .env.production"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(rm,{})})})]})}function rm(){return t.jsxs(f.Content,{children:[t.jsx("h3",{children:"What I use these files for"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:".env"})," - default values for all modes (non-secret)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:".env.development"})," - overrides when I run ",t.jsx("code",{children:"npm run dev"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:".env.production"})," - overrides when I build/serve prod."]}),t.jsxs("li",{children:[t.jsx("strong",{children:".env.local"})," - machine-specific values I don't commit (gitignored)."]})]}),t.jsx("h3",{children:"Important rule (Vite)"}),t.jsxs("p",{children:[t.jsxs("strong",{children:["Only variables prefixed with ",t.jsx("code",{children:"VITE_"})," are exposed to the browser."]})," Everything else is ignored in client code. Also, I access them via ",t.jsx("code",{children:"import.meta.env"})," (not ",t.jsx("code",{children:"process.env"}),")."]}),t.jsx("h3",{children:"Examples I actually use"}),t.jsx(f.Code,{"aria-label":".env files",children:String.raw`# .env
VITE_APP_NAME=ReactJS Handbook

# .env.development
VITE_API_BASE=http://localhost:3000
VITE_DEBUG=true

# .env.production
VITE_API_BASE=https://api.example.com
VITE_DEBUG=false

# .env.local (gitignored; for my machine)
VITE_EXPERIMENT=true`}),t.jsx("p",{children:"Read them in code like this:"}),t.jsx(f.Code,{"aria-label":"usage in code",children:String.raw`// inside React code
const name = import.meta.env.VITE_APP_NAME;
const api  = import.meta.env.VITE_API_BASE;

// Vite's built-ins:
if (import.meta.env.DEV)   console.log("dev mode");
if (import.meta.env.PROD)  console.log("prod mode");
console.log(import.meta.env.MODE);      // "development" | "production" | "staging"...
console.log(import.meta.env.BASE_URL);  // base path`}),t.jsx("h3",{children:"Load order & precedence"}),t.jsx("p",{children:"Later files override earlier ones (more specific wins):"}),t.jsxs("ol",{children:[t.jsx("li",{children:".env"}),t.jsx("li",{children:".env.local"}),t.jsxs("li",{children:[".env.",t.jsx("em",{children:"mode"})]}),t.jsxs("li",{children:[t.jsxs("strong",{children:[".env.",t.jsx("em",{children:"mode"}),".local"]})," (highest priority)"]})]}),t.jsx("h3",{children:"Switching modes (optional)"}),t.jsxs("p",{children:["Dev uses ",t.jsx("code",{children:"development"})," mode by default; build uses ",t.jsx("code",{children:"production"}),". I can opt into a custom mode:"]}),t.jsx(f.Code,{"aria-label":"custom mode",children:String.raw`vite build --mode staging   # will load .env.staging (and .env.staging.local if present)`}),t.jsx("h3",{children:"Git ignore (what I don't commit)"}),t.jsx(f.Code,{"aria-label":".gitignore",children:String.raw`.env.local
.env.*.local`}),t.jsx("h3",{children:"Quick checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Expose only public values with the ",t.jsx("code",{children:"VITE_*"})," prefix."]}),t.jsx("li",{children:"Never store secrets in frontend env files (anyone can view them in the browser)."}),t.jsxs("li",{children:["Use ",t.jsx("code",{children:".env.development"}),"/",t.jsx("code",{children:".env.production"})," for mode-specific overrides."]}),t.jsxs("li",{children:[t.jsx("code",{children:".env.local"})," stays uncommitted for machine-specific tweaks."]})]}),t.jsx(f.Divider,{})]})}function sm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="import-export-basics";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Import/export basics (named vs default)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(lm,{})})})]})}function lm(){return t.jsxs(f.Content,{children:[t.jsx("h3",{children:"How I decide"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Default export"}),": file exposes one primary thing. Import name is my choice."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Named exports"}),": file exposes multiple things. Names are explicit; great for autocomplete and refactors."]})]}),t.jsx("h3",{children:"Default export"}),t.jsx(f.Code,{"aria-label":"default export",children:String.raw`// math.js
export default function add(a, b) { return a + b; }

// usage
import add from "./math.js";      // I can name it anything
console.log(add(2, 3));`}),t.jsx("h3",{children:"Named exports"}),t.jsx(f.Code,{"aria-label":"named exports",children:String.raw`// math2.js
export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;
export function sub(a, b) { return a - b; }

// usage
import { add, mul, sub } from "./math2.js";
import { add as plus } from "./math2.js";  // rename with 'as'`}),t.jsx("h3",{children:"Mixing default + named (allowed)"}),t.jsx(f.Code,{"aria-label":"mixed exports",children:String.raw`// math3.js
export default function add(a, b) { return a + b; }
export const mul = (a, b) => a * b;

// usage
import add, { mul } from "./math3.js";`}),t.jsx("h3",{children:"Namespace import (group everything)"}),t.jsx(f.Code,{"aria-label":"namespace import",children:String.raw`import * as math from "./math2.js";
console.log(math.add(1, 2), math.mul(2, 3));`}),t.jsx("h3",{children:"Re-exports & barrels"}),t.jsx(f.Code,{"aria-label":"re-exports",children:String.raw`// utils/index.js (barrel)
export * from "./math2.js";           // re-export named
export { default as add } from "./math3.js"; // re-export default with a name

// usage
import { add, mul } from "./utils/index.js";`}),t.jsx("h3",{children:"Dynamic import (on demand)"}),t.jsx(f.Code,{"aria-label":"dynamic import",children:String.raw`const mod = await import("./math2.js");
const { add } = mod;          // named
// const addDefault = mod.default;   // default (if any)`}),t.jsx("h3",{children:"Common mistakes I avoid"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Importing a named symbol from a file that only exports ",t.jsx("em",{children:"default"})," (and vice-versa)."]}),t.jsx("li",{children:"Creating circular imports with large barrel files."}),t.jsxs("li",{children:["Mixing CommonJS (",t.jsx("code",{children:"module.exports"}),") with ESM in the frontend-Vite expects ESM."]})]}),t.jsx(f.Divider,{}),t.jsxs("p",{children:["Rule of thumb I follow: **one main thing → default**, **multiple things → named**. Rename with ",t.jsx("code",{children:"as"})," when needed."]})]})}function om({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="let-vs-const";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"let vs const (avoid var)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(im,{})})})]})}function im(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:["Practical rule: ",t.jsxs("strong",{children:["use ",t.jsx("code",{children:"const"})," by default"]}),". Switch to"," ",t.jsx("code",{children:"let"})," only when you truly need to ",t.jsx("em",{children:"reassign"}),". Prefer block scope and avoid ",t.jsx("code",{children:"var"}),"."]}),t.jsx("h3",{children:"Definitions"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("code",{children:"let"}),": ",t.jsx("strong",{children:"block-scoped"})," variable; ",t.jsx("em",{children:"reassignable"}),"; not redeclarable in the same scope."]}),t.jsxs("li",{children:[t.jsx("code",{children:"const"}),": ",t.jsx("strong",{children:"block-scoped binding"}),"; ",t.jsx("em",{children:"not reassignable"}),". For objects/arrays, the reference is fixed but contents can still mutate."]})]}),t.jsx("h3",{children:"Key points"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Scope:"})," ",t.jsx("code",{children:"let"}),"/",t.jsx("code",{children:"const"})," → block; ",t.jsx("code",{children:"var"})," → function."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Redeclare:"})," ",t.jsx("code",{children:"let"}),"/",t.jsx("code",{children:"const"})," ❌ (same scope), ",t.jsx("code",{children:"var"})," ✅."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Reassign:"})," ",t.jsx("code",{children:"let"})," ✅; ",t.jsx("code",{children:"const"})," ❌ (but object/array contents may mutate)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Readability:"})," ",t.jsx("code",{children:"const"})," signals “this shouldn’t change”, which prevents bugs."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Loops:"})," ",t.jsx("code",{children:"let"})," makes a new binding per iteration (great with async callbacks)."]})]}),t.jsx(f.Divider,{}),t.jsx("h3",{children:"A) Block scope & redeclare vs reassign"}),t.jsx(f.Code,{children:`{
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
console.log(y);        // { n: 2 }`}),t.jsxs("h3",{children:["B) Loops & closures (why ",t.jsx("code",{children:"let"})," shines)"]}),t.jsx(f.Code,{children:`// VAR: one binding shared → all log 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
}

// LET: new binding per iteration → 0,1,2
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);
}`}),t.jsx("h3",{children:"C) const with arrays/objects (mutate vs reassign)"}),t.jsx(f.Code,{children:`const arr = [1, 2, 3];
arr.push(4);           // ✅ mutate contents
// arr = [];           // ❌ reassign binding
console.log(arr);      // [1,2,3,4]

const user = Object.freeze({ id: 1, name: "Ash" });
// user.name = "New";  // ❌ blocked when frozen (strict mode errors)
console.log(user);`}),t.jsx("h3",{children:"D) Shadowing & blocks"}),t.jsx(f.Code,{children:`let value = "outer";
{
  const value = "inner"; // shadowed in block scope
  console.log(value);    // "inner"
}
console.log(value);      // "outer"`}),t.jsx("h3",{children:"When I use which"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"const"})," for imports, config values, functions/components, derived values."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"let"})," for counters, accumulators, and anything that must change over time."]}),t.jsxs("li",{children:["Avoid ",t.jsx("strong",{children:"var"})," (function scope + redeclare allow many footguns)."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Default to ",t.jsx("strong",{children:"const"}),"."]}),t.jsxs("li",{children:["Need to change the value? → switch to ",t.jsx("strong",{children:"let"}),"."]}),t.jsx("li",{children:"Declare before use for clarity."}),t.jsxs("li",{children:["Prefer block scope; avoid ",t.jsx("code",{children:"var"}),"."]})]}),t.jsx(f.Divider,{})]})}function am({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="arrow-functions";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Arrow functions (implicit return, this)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(cm,{})})})]})}function cm(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:["Arrow functions are concise function expressions with a"," ",t.jsxs("strong",{children:["lexical ",t.jsx("code",{children:"this"})]})," and optional"," ",t.jsx("strong",{children:"implicit return"}),". Great for callbacks and short utilities. Not good as object methods or constructors."]}),t.jsx("h3",{children:"Quick definitions"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Implicit return:"})," single-expression body (no braces) returns that value."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["Lexical ",t.jsx("code",{children:"this"}),":"]})," arrows capture the surrounding ",t.jsx("code",{children:"this"}),"."]}),t.jsxs("li",{children:["Arrows don’t have their own ",t.jsx("code",{children:"arguments"}),"/",t.jsx("code",{children:"prototype"})," and can’t be used with ",t.jsx("code",{children:"new"}),"."]})]}),t.jsx(f.Divider,{}),t.jsx("h3",{children:"A) Syntax & implicit return"}),t.jsx(f.Code,{children:`// 1 param (parens optional)
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
(() => console.log("IIFE arrow"))();       // "IIFE arrow"`}),t.jsxs("h3",{children:["B) ",t.jsx("code",{children:"this"}),": lexical vs normal functions"]}),t.jsxs("p",{children:["Normal functions have a dynamic ",t.jsx("code",{children:"this"})," (depends on how they’re called). Arrow functions ",t.jsx("em",{children:"capture"})," the surrounding ",t.jsx("code",{children:"this"}),"."]}),t.jsx(f.Code,{children:`const counter = {
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
setTimeout(() => console.log("ticks ~", t.ticks), 3100); // "ticks ~" 3 (approx)`}),t.jsxs("h3",{children:["C) ",t.jsx("code",{children:"arguments"}),", ",t.jsx("code",{children:"call/apply/bind"}),", and constructors"]}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Arrows don’t have their own ",t.jsx("code",{children:"arguments"}),"; use rest ",t.jsx("code",{children:"...args"}),"."]}),t.jsxs("li",{children:[t.jsx("code",{children:"call"}),"/",t.jsx("code",{children:"apply"}),"/",t.jsx("code",{children:"bind"})," don’t change ",t.jsx("code",{children:"this"})," for arrows."]}),t.jsxs("li",{children:["Arrows cannot be used with ",t.jsx("code",{children:"new"})," and have no ",t.jsx("code",{children:"prototype"}),"."]})]}),t.jsx(f.Code,{children:`// No 'arguments' in arrows:
const listArgs = (...args) => args;
console.log(listArgs(1, "a", true));       // [1, "a", true]

// call/apply/bind don't affect 'this' on arrows:
const obj = { id: 42 };
const getId = () => this?.id;              // 'this' from outer scope
console.log(getId.call(obj));              // undefined

// ❌ Arrow as constructor → TypeError
const Person = (name) => { this.name = name; };
// new Person("Ash"); // TypeError: Person is not a constructor`}),t.jsx("h3",{children:"D) Common use-cases"}),t.jsx(f.Code,{children:`// Array utilities
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
console.log(clamp(3, 0, 5));               // 3`}),t.jsx("h3",{children:"E) Pitfalls (and fixes)"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Object methods:"})," avoid arrows when a method needs ",t.jsx("code",{children:"this"}),". Use method syntax."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Returning object literal:"})," wrap in ",t.jsx("code",{children:"(...)"})," or you’ll return ",t.jsx("code",{children:"undefined"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Multiline:"})," with braces, add an explicit ",t.jsx("code",{children:"return"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Constructors:"})," never use arrows with ",t.jsx("code",{children:"new"}),"."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:[t.jsx("code",{children:"arguments"}),":"]})," use rest params ",t.jsx("code",{children:"(...args)"})," instead."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Use arrows for small functions and callbacks."}),t.jsxs("li",{children:["Use normal functions for object/class methods that need ",t.jsx("code",{children:"this"}),"."]}),t.jsxs("li",{children:["Implicit return? → no braces. Returning object? → wrap in ",t.jsx("code",{children:"( )"}),"."]}),t.jsxs("li",{children:["Need parameters list? Use defaults, destructuring, or ",t.jsx("code",{children:"...rest"}),"."]})]}),t.jsx(f.Divider,{})]})}function um({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="destructuring";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Destructuring (objects, arrays, parameters)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(dm,{})})})]})}function dm(){return t.jsxs(f.Content,{children:[t.jsx("p",{children:"Destructuring pulls values out of objects/arrays into variables. It's great for clean code, default values, renaming, and concise function parameters."}),t.jsx("h3",{children:"Core patterns"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Objects:"})," match by ",t.jsx("em",{children:"key name"}),", can rename and set defaults."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Arrays:"})," match by ",t.jsx("em",{children:"position"}),", can skip items and use rest."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Parameters:"})," destructure right in the function signature."]})]}),t.jsx(f.Divider,{}),t.jsx("h3",{children:"A) Object destructuring - basics, renaming, defaults"}),t.jsx(f.Code,{children:`const user = { id: 1, name: "Ash", role: "dev" };

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
console.log(publicUser);                      // { id: 1, name: "Ash" }`}),t.jsx("h3",{children:"B) Array destructuring - positions, skipping, defaults, rest"}),t.jsx(f.Code,{children:`const nums = [10, 20, 30, 40];

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
console.log(p, q);                            // 2 1`}),t.jsx("h3",{children:"C) Function parameters - object/array + defaults"}),t.jsx(f.Code,{children:`// Object param with defaults + renaming
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
// { id: 1, rest: { name: "Ash", role: "dev" } }`}),t.jsx("h3",{children:"D) Practical React patterns"}),t.jsx(f.Code,{children:`// 1) Props destructuring in function signature
function Button({ label = "Click", onClick, disabled = false }) {
  // ...
}

// 2) useState returns an array → array destructuring
const [count, setCount] = React.useState(0);
// count: 0 ; setCount: function

// 3) Destructure API response (object)
const resp = { data: { items: [1,2,3] }, status: 200 };
const { data: { items } = { items: [] }, status } = resp;
console.log(items, status);                   // [1,2,3] 200`}),t.jsx("h3",{children:"E) Destructuring with loops & utilities"}),t.jsx(f.Code,{children:`const scores = { alice: 8, bob: 6, charlie: 9 };

for (const [name, score] of Object.entries(scores)) {
  if (score >= 8) console.log(name, "⭐");   // "alice ⭐", "charlie ⭐"
}

// Map of pairs to objects
const pairs = [["id", 1], ["name", "Ash"]];
const obj = Object.fromEntries(pairs);
console.log(obj);                             // { id: 1, name: "Ash" }`}),t.jsx("h3",{children:"F) Spread vs Rest (quick contrast)"}),t.jsx(f.Code,{children:`// Rest (collect) in binding/params:
const { password, ...safe } = { user: "a2rp", password: "secret" };
console.log(safe);                            // { user: "a2rp" }

// Spread (expand) in literals:
const base = { id: 1, name: "Ash" };
const clone = { ...base, role: "admin" };
console.log(clone);                           // { id: 1, name: "Ash", role: "admin" }`}),t.jsx("h3",{children:"G) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Object vs Array:"})," objects match by key; arrays by position."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["Defaults run on ",t.jsx("code",{children:"undefined"})]})," (not on ",t.jsx("code",{children:"null"}),")."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Safe nested:"})," give a default to the parent (",t.jsx("code",{children:"{ meta: {} }"}),") to avoid errors."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Rename to avoid conflicts:"})," ",t.jsx("code",{children:"const { id: userId } = user"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Keep it readable:"})," deep/nested destructuring is powerful-don't overdo it."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Use object destructuring for clarity and defaults."}),t.jsx("li",{children:"Use array destructuring for positions and quick swaps."}),t.jsx("li",{children:"Destructure props & hook returns right at the top."}),t.jsxs("li",{children:["Use rest (",t.jsx("code",{children:"...rest"}),") to exclude or gather extras; spread to clone/extend."]})]}),t.jsx(f.Divider,{})]})}function fm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="rest-and-spread";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Rest & spread (arrays, objects, params)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(hm,{})})})]})}function hm(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:["**Spread** ",t.jsx("code",{children:"..."})," copies/expands values into a new literal.",t.jsx("br",{}),"**Rest** ",t.jsx("code",{children:"..."})," gathers the remaining values into a single variable (in bindings or parameter lists)."]}),t.jsx("h3",{children:"A) Spread - Arrays"}),t.jsx(f.Code,{children:`const a = [1, 2];
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
console.log([..."hey"]);               // ["h", "e", "y"]`}),t.jsx("h3",{children:"B) Rest - Arrays & bindings"}),t.jsx(f.Code,{children:`const nums = [10, 20, 30, 40];

const [head, ...tail] = nums;
console.log(head);                     // 10
console.log(tail);                     // [20, 30, 40]

// skip with commas + rest
const [, second, ...rest] = nums;
console.log(second);                   // 20
console.log(rest);                     // [30, 40]`}),t.jsx("h3",{children:"C) Spread - Objects"}),t.jsx(f.Code,{children:`const base = { id: 1, name: "Ash" };

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
console.log(user.info.score);          // 9  (same inner object reference)`}),t.jsx("h3",{children:"D) Rest - Object properties"}),t.jsx(f.Code,{children:`const user = { id: 1, name: "Ash", password: "secret", role: "dev" };

// pick some, gather the rest
const { password, ...publicUser } = user;
console.log(publicUser);               // { id: 1, name: "Ash", role: "dev" }

// rename + rest
const { id: userId, ...rest } = user;
console.log(userId);                   // 1
console.log(rest.role);                // "dev"`}),t.jsx("h3",{children:"E) Parameters: defaults, rest & spread"}),t.jsx(f.Code,{children:`// rest in params (collects arguments)
const sum = (...nums) => nums.reduce((a, n) => a + n, 0);
console.log(sum(1, 2, 3));             // 6

// default params + rest
const makeUrl = (base = "/", ...parts) => base + parts.join("/");
console.log(makeUrl("/api", "v1", "users")); // "/api/v1/users"

// spread when calling
const pair = [4, 6];
console.log(sum(...pair));             // 10

// NOTE: rest must be last
// const bad = (a, ...rest, b) => {}   // ❌ SyntaxError`}),t.jsx("h3",{children:"F) Practical React patterns"}),t.jsx(f.Code,{children:`// 1) Update array state immutably
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
console.log(finalProps.disabled);      // true`}),t.jsx("h3",{children:"G) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Shallow copies only:"})," spread does not deep-clone nested objects/arrays."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Order matters:"})," in object spreads, later keys overwrite earlier keys."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Performance:"})," for very large arrays/objects, repeated spreads can be costly-batch updates when possible."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Rest vs spread:"})," rest collects in bindings/params; spread expands in literals/calls."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Use spread to clone/merge immutably."}),t.jsx("li",{children:"Use rest in destructuring and function params to gather extras."}),t.jsx("li",{children:"Remember: shallow copy-be careful with nested structures."}),t.jsx("li",{children:"In objects, put overrides last so they win."})]}),t.jsx(f.Divider,{})]})}function pm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="template-literals";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Template literals (interpolation, multiline, tags)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(mm,{})})})]})}function mm(){return t.jsxs(f.Content,{children:["Template literals use backticks ",t.jsx("code",{children:"`"})," to make strings easier:",t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:" interpolation "})," with ",t.jsxs("code",{children:["$","{ ... }"]}),","]}),t.jsxs("li",{children:[t.jsx("strong",{children:" multiline "})," strings, and ",t.jsx("strong",{children:" tagged templates"}),"."]})]}),t.jsx("h3",{children:"A) Basics - interpolation & multiline"}),t.jsx(f.Code,{children:`const name = "Ash";
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
console.log(\`Total: \${taxed(100)}\`);       // "Total: 118"`}),t.jsxs("h3",{children:["B) Expressions inside ",t.jsxs("code",{children:["$","{ ... }"]})]}),t.jsx(f.Code,{children:`const a = 3, b = 5;
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
// 'user={"id":1,"name":"Ash"}'`}),t.jsxs("h3",{children:["C) Escaping backticks & ",t.jsxs("code",{children:["$","{ ... }"]})]}),t.jsx(f.Code,{children:'// Escape a backtick inside a template with \\`\nconst s = `Use a backtick like: \\`this\\``;\nconsole.log(s);                              // "Use a backtick like: `this`"\n\n// To show ${...} literally, escape the \'$\' or wrap in a normal string\nconsole.log(`Show \\${x} literally`);      // "Show ${x} literally"'}),t.jsx("h3",{children:"D) Tagged templates (advanced but useful)"}),t.jsxs("p",{children:["A ",t.jsx("em",{children:"tag"})," is a function that receives the string parts and the evaluated values. You can format, sanitize, or highlight values."]}),t.jsx(f.Code,{children:`// Simple highlight tag: wrap values in [brackets]
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
showRaw\`line1\\nline2\`;                      // prints "line1\\nline2"`}),t.jsxs("h3",{children:["E) ",t.jsx("code",{children:"String.raw"})," (keep backslashes)"]}),t.jsx(f.Code,{children:`// Useful for regex, paths, or copy-paste snippets
const raw = String.raw\`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(raw);                              // "C:\\Users\\Ash\\nNewLine"

// Compare with normal template:
const normal = \`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(normal);
// "C:\\Users\\Ash
// NewLine"`}),t.jsx("h3",{children:"F) Practical patterns"}),t.jsx(f.Code,{children:`// 1) Build URLs safely with encodeURIComponent
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
console.log(label(3));                         // "3 items"`}),t.jsx("h3",{children:"G) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Don't over-nest logic"})," inside ",t.jsxs("code",{children:["$","{ ... }"]}),"; extract helpers for readability."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Escape backticks"})," with ",t.jsx("code",{children:"\\\\`"})," when you must include them literally."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["Use ",t.jsx("code",{children:"JSON.stringify"})]})," to embed objects safely."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Beware of whitespace"}),": multiline templates keep your indentation/spaces."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"For raw backslashes"}),", prefer ",t.jsx("code",{children:"String.raw"})," or a tag."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Use backticks for interpolation and multiline strings."}),t.jsx("li",{children:"Keep complex logic out of templates-call helpers instead."}),t.jsxs("li",{children:["Escape backticks and ",t.jsx("code",{children:"$"})," when showing them literally."]}),t.jsxs("li",{children:["Use ",t.jsx("code",{children:"String.raw"})," or tagged templates for special formatting."]})]}),t.jsx(f.Divider,{})]})}function gm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="default-parameters";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Default parameters (practical patterns & pitfalls)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(xm,{})})})]})}function xm(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:["Default parameters set a value when an argument is ",t.jsxs("strong",{children:["explicitly ",t.jsx("code",{children:"undefined"})]}),". They do ",t.jsx("em",{children:"not"})," trigger for ",t.jsx("code",{children:"null"}),", ",t.jsx("code",{children:"0"}),", ",t.jsx("code",{children:"false"}),", or ",t.jsx("code",{children:'""'}),"."]}),t.jsxs("h3",{children:["A) Basics - only when arg is ",t.jsx("code",{children:"undefined"})]}),t.jsx(f.Code,{children:`function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet("Ash"));        // "Hello, Ash"
console.log(greet());             // "Hello, Guest"  (no arg → undefined)
console.log(greet(undefined));    // "Hello, Guest"
console.log(greet(null));         // "Hello, null"   (null ≠ undefined)`}),t.jsx("h3",{children:"B) Defaults with expressions (evaluated only when used)"}),t.jsx(f.Code,{children:`let calls = 0;
function expensive() { calls++; return 99; }

function demo(a = expensive()) {
  return a;
}

console.log(demo(5));             // 5        (expensive() NOT called)
console.log(demo());              // 99       (expensive() called)
console.log(calls);               // 1`}),t.jsx("h3",{children:"C) Using earlier params in later defaults (allowed)"}),t.jsx(f.Code,{children:`function area(w = 1, h = w) {
  return w * h;
}
console.log(area(3));             // 9  (h defaults to w)
console.log(area(3, 4));          // 12

// The reverse is NOT allowed (can't use a later param in an earlier default):
// function bad(a = b, b = 1) {}   // ❌ ReferenceError at call time`}),t.jsx("h3",{children:"D) Destructuring + defaults (object & array)"}),t.jsx(f.Code,{children:`// Object param with its own default AND property defaults
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
console.log(sumPair());            // 0`}),t.jsx("h3",{children:"E) Defaults vs logical OR (don't break on falsey values)"}),t.jsx(f.Code,{children:`// Using defaults keeps 0 / false / "" intact:
function padLeft(str, n = 0) { return " ".repeat(n) + str; }
console.log(padLeft("X", 0));      // "X"  (0 kept)

// naive || fallback would override 0:
function padLeftBad(str, n) { n = n || 2; return " ".repeat(n) + str; }
console.log(padLeftBad("X", 0));   // "  X"  (oops)`}),t.jsx("h3",{children:"F) With rest & spread (what's valid)"}),t.jsx(f.Code,{children:`const sum = (...nums) => nums.reduce((a,n) => a + n, 0);
console.log(sum(1,2,3));           // 6

// Rest must come last and cannot have a default:
// const bad = (...nums = []) => 0  // ❌ SyntaxError

// Spreading into a call works as usual
console.log(sum(...[4,6]));        // 10`}),t.jsx("h3",{children:"G) Practical React patterns"}),t.jsx(f.Code,{children:`// 1) Default simple props in the signature
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
console.log(Price({ amount: 100, tax: 5 })); // 105`}),t.jsx("h3",{children:"H) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Only undefined triggers"})," the default (not ",t.jsx("code",{children:"null"})," or other falsey values)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Order matters:"})," you can use previous params in later defaults, not the other way around."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Evaluate-on-demand:"})," expensive defaults run only when the arg is missing."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Destructuring + defaults:"})," give the whole param a default object/array to avoid errors."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"React:"})," prefer prop defaults in the function signature; keep objects stable to avoid re-renders."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Use defaults instead of ",t.jsx("code",{children:"||"}),' when 0/""/false are valid inputs.']}),t.jsx("li",{children:"Put cheaper params first; compute later defaults from earlier ones if needed."}),t.jsxs("li",{children:["For params that are objects/arrays, default the whole param too (",t.jsx("code",{children:"{}"})," or ",t.jsx("code",{children:"[]"}),")."]})]}),t.jsx(f.Divider,{})]})}function ym({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="optional-chaining";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsxs("span",{children:["Optional chaining ",t.jsx("code",{children:"?."})," (safer nested access & calls)"]})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(vm,{})})})]})}function vm(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Optional chaining"})," returns ",t.jsx("code",{children:"undefined"})," instead of throwing if the part on the ",t.jsx("em",{children:"left"})," of ",t.jsx("code",{children:"?."})," is ",t.jsx("code",{children:"null"})," or ",t.jsx("code",{children:"undefined"}),". It ",t.jsx("em",{children:"does not"})," short-circuit for other falsey values like ",t.jsx("code",{children:"0"}),", ",t.jsx("code",{children:"false"}),", or ",t.jsx("code",{children:'""'}),"."]}),t.jsx("h3",{children:"A) Property & element access"}),t.jsx(f.Code,{children:`const user = { id: 1, profile: { email: "a@b.com" } };

console.log(user?.profile?.email);        // "a@b.com"
console.log(user?.settings?.theme);       // undefined (no throw)

// element access with []
const prefKey = "theme";
console.log(user?.prefs?.[prefKey]);      // undefined

// arrays
const arr = [10, 20, 30];
console.log(arr?.[0]);                    // 10
const maybe = null;
console.log(maybe?.[0]);                  // undefined (safe)`}),t.jsx("h3",{children:"B) Optional call (functions & methods)"}),t.jsx(f.Code,{children:`const maybeCb = undefined;
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
console.log(nothing?.inc?.());            // undefined`}),t.jsx("h3",{children:"C) Combine with a default (preview for next topic)"}),t.jsx(f.Code,{children:`const api = { data: { items: [1,2,3] } };
const first = api?.data?.items?.[0] ?? null;
console.log(first);                        // 1

const missing = {};
console.log(missing?.data?.items?.[0] ?? "none"); // "none"`}),t.jsxs("h3",{children:["D) vs ",t.jsx("code",{children:"&&"})," (truthy check)"]}),t.jsx(f.Code,{children:`const n = 0;
console.log(n && n.toString());           // 0   (short-circuits on falsy 0)
console.log(n?.toString());               // "0" (0 is not null/undefined, so it proceeds)`}),t.jsx("h3",{children:"E) Practical React / DOM patterns"}),t.jsx(f.Code,{children:`// React props / API responses
const title = props?.post?.title ?? "Untitled";
const firstItem = resp?.data?.items?.[0] ?? null;

// Safe event access
const handle = (e) => {
  const id = e?.currentTarget?.dataset?.id ?? "unknown";
  // ...
};

// DOM query
document.querySelector("#title")?.scrollIntoView({ behavior: "smooth" });`}),t.jsx("h3",{children:"F) Pitfalls & rules"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsxs("strong",{children:["Only guard what's left of ",t.jsx("code",{children:"?."}),":"]})," write each uncertain hop as ",t.jsx("code",{children:"?."})," (",t.jsx("code",{children:"a?.b?.c"}),"), not ",t.jsx("code",{children:"a?.b.c"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Not an lvalue:"})," you can't assign to it — ",t.jsx("code",{children:"obj?.prop = 1"})," ❌ (SyntaxError)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Doesn't mask real errors:"})," if a function exists but throws, ",t.jsx("code",{children:"?."})," won't catch that."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Don't overuse:"})," if something should exist by contract, validate up-front instead of chaining everywhere."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Use ",t.jsx("code",{children:"?."})," for uncertain hops; chain it per level."]}),t.jsxs("li",{children:["It short-circuits only on ",t.jsx("code",{children:"null"}),"/",t.jsx("code",{children:"undefined"}),"."]}),t.jsxs("li",{children:["Pair with ",t.jsx("code",{children:"??"})," (next topic) to provide clean defaults."]}),t.jsxs("li",{children:["For methods, prefer ",t.jsx("code",{children:"obj?.method?.()"})," to preserve ",t.jsx("code",{children:"this"}),"."]})]}),t.jsx(f.Divider,{})]})}function jm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="nullish-coalescing";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsxs("span",{children:["Nullish coalescing ",t.jsx("code",{children:"??"})," (clean fallbacks)"]})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(wm,{})})})]})}function wm(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:[t.jsx("strong",{children:t.jsx("code",{children:"??"})})," returns the right-hand value ",t.jsx("em",{children:"only if"})," the left-hand side is ",t.jsx("code",{children:"null"})," or ",t.jsx("code",{children:"undefined"}),' (aka "nullish"). It keeps valid falsey values like ',t.jsx("code",{children:"0"}),", ",t.jsx("code",{children:"false"}),", and ",t.jsx("code",{children:'""'}),"."]}),t.jsx("h3",{children:"A) Basics — only null/undefined trigger the fallback"}),t.jsx(f.Code,{children:`console.log(null ?? "fallback");         // "fallback"
console.log(undefined ?? "fallback");    // "fallback"

// falsey but NOT nullish → left value is kept
console.log(0 ?? 100);                   // 0
console.log(false ?? true);              // false
console.log("" ?? "N/A");                // ""`}),t.jsxs("h3",{children:["B) vs ",t.jsx("code",{children:"||"})," (truthy check)"]}),t.jsx(f.Code,{children:`// || uses truthiness → will replace 0/""/false
console.log(0 || 100);                   // 100   (oops)
console.log(0 ?? 100);                   // 0     (correct when 0 is valid)

console.log("" || "N/A");                // "N/A" (oops)
console.log("" ?? "N/A");                // ""    (keep empty string)`}),t.jsx("h3",{children:"C) With optional chaining (common pattern)"}),t.jsx(f.Code,{children:`const resp = { data: { items: [1,2,3] } };

const first = resp?.data?.items?.[0] ?? null;
console.log(first);                       // 1

const missing = {};
const list = missing?.data?.items ?? [];
console.log(Array.isArray(list), list.length); // true 0`}),t.jsxs("h3",{children:["D) Precedence & mixing with ",t.jsx("code",{children:"&&"}),"/",t.jsx("code",{children:"||"})]}),t.jsx(f.Code,{children:`// You cannot mix ?? with &&/|| without parentheses:
// const bad = null ?? 0 || 5;           // ❌ SyntaxError

const v1 = (null ?? 0) || 5;
console.log(v1);                          // 5   (0 || 5 → 5)

const v2 = null ?? (0 || 5);
console.log(v2);                          // 5   (0 || 5 → 5)

const v3 = (undefined ?? 7) && "ok";
console.log(v3);                          // "ok"`}),t.jsxs("h3",{children:["E) Nullish coalescing assignment ",t.jsx("code",{children:"??="})]}),t.jsx(f.Code,{children:`let a = null;
a ??= 10;
console.log(a);                           // 10

let b = 0;
b ??= 5;                                  // left is NOT null/undefined
console.log(b);                           // 0 (kept)

const cfg = { retries: undefined };
cfg.retries ??= 3;
console.log(cfg.retries);                 // 3`}),t.jsx("h3",{children:"F) Edge cases (NaN, empty arrays/objects)"}),t.jsx(f.Code,{children:`const n = NaN;
console.log(n ?? 0);                      // NaN (not nullish)
console.log(Number.isNaN(n) ? 0 : n);     // 0   (explicit fallback for NaN)

const arr = [];
console.log((arr ?? ["x"]).length);       // 0 (arr is not nullish)

const obj = {};
console.log((obj ?? { a: 1 }));           // {} (obj is not nullish)`}),t.jsx("h3",{children:"G) Practical React patterns"}),t.jsx(f.Code,{children:`// 1) Safe prop fallbacks (keep 0/false/"")
const label = props?.label ?? "—";
const disabled = props?.disabled ?? false;

// 2) Controlled inputs: avoid undefined
const value = form?.name ?? "";

// 3) API defaults
const items = resp?.data?.items ?? [];
const total = resp?.data?.total ?? 0;

// 4) Optional callback call
props?.onSelect?.(id ?? 0);               // combine ?. and ??`}),t.jsx("h3",{children:"H) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsxs("strong",{children:["Use ",t.jsx("code",{children:"??"}),' when 0/""/false are valid']})," and should not trigger a fallback."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["Prefer ",t.jsx("code",{children:"a?.b ?? default"})]})," for uncertain chains with defaults."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Add parentheses"})," when mixing with ",t.jsx("code",{children:"&&"})," or ",t.jsx("code",{children:"||"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"NaN is not nullish"}),": coalesce explicitly if you need a number fallback."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Left side null/undefined? → returns right side; otherwise returns left."}),t.jsxs("li",{children:["Don't replace valid falsey values—use ",t.jsx("code",{children:"??"}),", not ",t.jsx("code",{children:"||"}),"."]}),t.jsxs("li",{children:["Pair with ",t.jsx("code",{children:"?."}),' to avoid "cannot read property" errors.']}),t.jsxs("li",{children:["Consider ",t.jsx("code",{children:"??="}),' for concise "set if missing".']})]}),t.jsx(f.Divider,{})]})}function km({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="map-filter-reduce";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Map / Filter / Reduce (transform, select, aggregate)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(Sm,{})})})]})}function Sm(){return t.jsxs(f.Content,{children:[t.jsxs("div",{style:{marginBottom:"30px"},children:["Three array workhorses:",t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"map"})," transforms each item,"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"filter"})," keeps matching items, and "]}),t.jsxs("li",{children:[t.jsx("strong",{children:"reduce"})," folds many values into one (sum, object, etc.)."]})]}),"All return ",t.jsx("em",{children:" new arrays/values"})," and do not mutate the original."]}),t.jsx("h3",{children:"A) map - transform each item"}),t.jsx(f.Code,{children:`const nums = [1, 2, 3];
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
console.log(["10","11","12"].map(Number));    // [10, 11, 12]`}),t.jsx("h3",{children:"B) filter - keep items that pass the test"}),t.jsx(f.Code,{children:`const arr = [1, 2, 3, 4, 5, 6];
const evens = arr.filter(n => n % 2 === 0);
console.log(evens);                           // [2, 4, 6]

// Remove null/undefined quickly
const messy = [0, null, "hi", undefined, false];
console.log(messy.filter(Boolean));           // ["hi"] (drops 0/false too!)
console.log(messy.filter(v => v != null));    // [0, "hi", false] (keeps 0/false)

// Unique with filter + indexOf
const dups = [2,2,3,3,3,1];
const unique = dups.filter((n, i, a) => a.indexOf(n) === i);
console.log(unique);                          // [2, 3, 1]`}),t.jsx("h3",{children:"C) reduce - fold into a single value"}),t.jsx(f.Code,{children:`const nums = [5, 2, 7];

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
console.log(Object.keys(groups));             // ["A", "B"]`}),t.jsx("h3",{children:"D) Chain them - readable pipelines"}),t.jsx(f.Code,{children:`const nums = [1,2,3,4,5,6];
const result = nums
  .filter(n => n % 2 === 0)   // keep evens → [2,4,6]
  .map(n => n * n)            // square     → [4,16,36]
  .reduce((a, n) => a + n, 0);// sum        → 56
console.log(result);                          // 56`}),t.jsx("h3",{children:"E) Immutability & side-effects"}),t.jsx(f.Code,{children:`const a = [1,2,3];

// Do NOT mutate the same array while mapping/filtering
// Bad:
const bad = a.map(n => { a.push(99); return n; });
console.log(a.length, bad.length);            // 6 3 (weird bugs)

// Good: treat callbacks as pure functions
const good = a.map(n => n * 10);
console.log(good);                            // [10, 20, 30]`}),t.jsx("h3",{children:"F) Practical React patterns"}),t.jsx(f.Code,{children:`// 1) Render lists
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
// <li key={todo.id}>...</li>`}),t.jsx("h3",{children:"G) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"map"})," must return a value each time; forgetting a return gives an array of undefined."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"filter"})," expects a boolean; return the condition directly."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"reduce"}),": always provide an initial value (especially for empty arrays)."]}),t.jsxs("li",{children:["For deep transforms, consider ",t.jsx("code",{children:"flatMap"})," or a single well-named ",t.jsx("code",{children:"reduce"})," for clarity."]}),t.jsx("li",{children:"Don't mutate items inside callbacks; return new objects/arrays."})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Transform → ",t.jsx("strong",{children:"map"}),"; select → ",t.jsx("strong",{children:"filter"}),"; aggregate → ",t.jsx("strong",{children:"reduce"}),"."]}),t.jsx("li",{children:"Keep callbacks pure; no side-effects."}),t.jsxs("li",{children:["Give ",t.jsx("code",{children:"reduce"})," an initial accumulator."]}),t.jsx("li",{children:"Prefer pipeline readability over micro-optimizing chains."})]}),t.jsx(f.Divider,{})]})}function Cm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="find-some-every";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Find / Some / Every (search, any, all)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(Em,{})})})]})}function Em(){return t.jsxs(f.Content,{children:[t.jsxs("div",{style:{marginBottom:"30px"},children:["Three quick checks:",t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"find"})," returns the first matching item,"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"some"})," tells if ",t.jsx("em",{children:"any"})," matches, and"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"every"})," checks if ",t.jsx("em",{children:" all"})," match."]})]}),"They do not mutate the array and they short-circuit."]}),t.jsxs("h3",{children:["A) ",t.jsx("code",{children:"find"})," - get the first matching element"]}),t.jsx(f.Code,{children:`const users = [
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
console.log(users.find(u => u.name === "Foo")?.id ?? "NA"); // "NA"`}),t.jsxs("h3",{children:["B) ",t.jsx("code",{children:"some"})," - does any element pass?"]}),t.jsx(f.Code,{children:`const nums = [1, 3, 5, 8];

console.log(nums.some(n => n % 2 === 0));      // true  (8 is even)
console.log(nums.some(n => n > 10));           // false

// Practical: any item out of stock?
const cart = [{ id: 1, qty: 2 }, { id: 2, qty: 0 }];
console.log(cart.some(item => item.qty === 0)); // true`}),t.jsxs("h3",{children:["C) ",t.jsx("code",{children:"every"})," - do all elements pass?"]}),t.jsx(f.Code,{children:`const scores = [7, 8, 9];

console.log(scores.every(s => s >= 7));         // true
console.log(scores.every(s => s >= 9));         // false

// NOTE: empty arrays
console.log([].every(x => x > 0));              // true  (vacuously true)
console.log([].some(x => x > 0));               // false`}),t.jsx("h3",{children:"D) Objects & deep checks"}),t.jsx(f.Code,{children:`const people = [
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
console.log(people.every(p => p.tags.includes("dev")));   // false`}),t.jsxs("h3",{children:["E) Compare with ",t.jsx("code",{children:"includes"})," (value vs predicate)"]}),t.jsx(f.Code,{children:`// includes checks values (strict equality), not conditions:
console.log([1,2,3].includes(2));              // true
// find/some let you write a predicate:
console.log([1,2,3].some(n => n > 2));         // true`}),t.jsx("h3",{children:"F) Performance & short-circuiting"}),t.jsx(f.Code,{children:`// these stop early:
// - find: after first match
// - some: after first true
// - every: after first false

let steps = 0;
[1,2,3,4].some(n => (steps++, n > 2));
console.log(steps);                             // 3 (stopped at 3)`}),t.jsx("h3",{children:"G) Practical React patterns"}),t.jsx(f.Code,{children:`// 1) Validation: all fields valid?
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
// if (!todo) return null;`}),t.jsx("h3",{children:"H) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"find"})," can return ",t.jsx("code",{children:"undefined"})," - guard with ",t.jsx("code",{children:"?."})," or a default."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"every"})," on an empty array returns ",t.jsx("code",{children:"true"}),"; ",t.jsx("strong",{children:"some"})," returns ",t.jsx("code",{children:"false"}),"."]}),t.jsxs("li",{children:["Predicates should be ",t.jsx("strong",{children:"pure"})," (no side-effects) for predictable behavior."]}),t.jsx("li",{children:"For large lists, these short-circuit - keep the cheap checks first in your predicate."})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Need the item itself? → ",t.jsx("strong",{children:"find"}),"."]}),t.jsxs("li",{children:["Need a yes/no if ",t.jsx("em",{children:"any"}),"? → ",t.jsx("strong",{children:"some"}),"."]}),t.jsxs("li",{children:["Need a yes/no if ",t.jsx("em",{children:"all"}),"? → ",t.jsx("strong",{children:"every"}),"."]}),t.jsxs("li",{children:["Remember undefined from ",t.jsx("code",{children:"find"}),"; handle it safely."]})]}),t.jsx(f.Divider,{})]})}function Pm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="sort-without-mutating";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsxs("span",{children:["Sort (without mutating) - ",t.jsx("code",{children:"toSorted"}),", copy+sort"]})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(bm,{})})})]})}function bm(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:[t.jsx("code",{children:"Array.prototype.sort()"})," sorts ",t.jsx("em",{children:"in place"})," (it ",t.jsx("strong",{children:"mutates"})," the array). For immutable code, use ",t.jsx("code",{children:"toSorted()"})," (best) or clone first and then ",t.jsx("code",{children:"sort()"}),"."]}),t.jsx("h3",{children:"A) The mutation gotcha"}),t.jsx(f.Code,{children:`const a = [3, 1, 2];
const b = a.sort();                 // MUTATES 'a'
console.log(a);                     // [1, 2, 3]
console.log(b);                     // [1, 2, 3] (same reference)
`}),t.jsx("h3",{children:"B) Safe patterns (no mutation)"}),t.jsx(f.Code,{children:`// 1) Modern: toSorted (returns a new array)
const nums = [3, 10, 2];
const asc = nums.toSorted((x, y) => x - y);
console.log(nums);                  // [3, 10, 2]  (unchanged)
console.log(asc);                   // [2, 3, 10]

// 2) Classic: copy then sort
const copyAsc = [...nums].sort((x, y) => x - y);
console.log(copyAsc);               // [2, 3, 10]
`}),t.jsx("h3",{children:"C) Numbers - ascending/descending"}),t.jsx(f.Code,{children:`const n = [10, 2, 5, 1];

// Default sort is lexicographic (strings) - wrong for numbers:
console.log([...n].sort());         // [1, 10, 2, 5]  (not numeric)

// Correct numeric comparators:
const asc = n.toSorted((a, b) => a - b);
console.log(asc);                   // [1, 2, 5, 10]

const desc = n.toSorted((a, b) => b - a);
console.log(desc);                  // [10, 5, 2, 1]
`}),t.jsx("h3",{children:"D) Strings - locale & case"}),t.jsx(f.Code,{children:`const cities = ["mumbai", "Delhi", "bengaluru"];

// ASCII compare (case-sensitive)
console.log([...cities].sort());    
// ["Delhi", "bengaluru", "mumbai"]

// Locale/case-insensitive + numeric aware
const nice = cities.toSorted((a, b) => 
  a.localeCompare(b, "en-IN", { sensitivity: "base", numeric: true })
);
console.log(nice);
// ["bengaluru", "Delhi", "mumbai"]
`}),t.jsx("h3",{children:"E) Dates - by timestamp"}),t.jsx(f.Code,{children:`const dates = [new Date("2025-01-01"), new Date("2024-12-31")];
const byTime = dates.toSorted((a, b) => a - b);
console.log(byTime.map(d => d.toISOString().slice(0,10)));
// ["2024-12-31", "2025-01-01"]
`}),t.jsx("h3",{children:"F) Objects - by field, with nulls-last"}),t.jsx(f.Code,{children:`const people = [
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
`}),t.jsx("h3",{children:"G) Multi-key sort (tie-breakers)"}),t.jsx(f.Code,{children:`const rows = [
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
`}),t.jsx("h3",{children:"H) React-friendly patterns"}),t.jsx(f.Code,{children:`// 1) Never mutate props/state directly
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
`}),t.jsx("h3",{children:"I) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Default sort is string-based."})," Always pass a comparator for numbers/dates."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:[t.jsx("code",{children:"sort()"})," mutates."]})," Prefer ",t.jsx("code",{children:"toSorted()"})," or clone before sorting."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Locale/case rules:"})," use ",t.jsx("code",{children:"localeCompare"})," with options for user-facing text."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Nulls/undefined:"})," coerce to sentinel values (e.g., ",t.jsx("code",{children:"Infinity"}),") or handle explicitly."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Multi-key:"})," chain with ",t.jsx("code",{children:"||"})," returning the first non-zero comparison."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Immutable? → ",t.jsx("code",{children:"toSorted"})," (best) or ",t.jsx("code",{children:"[...arr].sort(cmp)"}),"."]}),t.jsxs("li",{children:["Numbers/dates → numeric comparator (",t.jsx("code",{children:"a-b"}),")."]}),t.jsxs("li",{children:["Strings for UI → ",t.jsx("code",{children:"localeCompare"})," with options."]}),t.jsx("li",{children:"Define small, pure comparators; reuse them."})]}),t.jsx(f.Divider,{})]})}function Tm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="flat-and-flatmap";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Flat / FlatMap (flatten arrays & map+flatten)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(Nm,{})})})]})}function Nm(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:[t.jsx("code",{children:"flat"})," removes one or more levels of nesting and returns a ",t.jsx("strong",{children:"new array"}),".",t.jsx("code",{children:" flatMap"})," = ",t.jsx("code",{children:"map"})," then ",t.jsx("code",{children:"flat(1)"})," in a single pass."]}),t.jsxs("h3",{children:["A) ",t.jsx("code",{children:"flat"})," - basics & depth"]}),t.jsx(f.Code,{children:`const a = [1, [2, 3], [4, [5]]];

console.log(a.flat());                 // [1, 2, 3, 4, [5]]       (default depth = 1)
console.log(a.flat(2));                // [1, 2, 3, 4, 5]
console.log(a.flat(Infinity));         // [1, 2, 3, 4, 5]         (flatten all levels)

// Original is unchanged:
console.log(a);                        // [1, [2,3], [4, [5]]]`}),t.jsx("h3",{children:"B) Holes (sparse arrays) are removed"}),t.jsx(f.Code,{children:`const sparse = [1, , 3, [ , 4 ]];
// flat removes empty slots
console.log(sparse.flat());            // [1, 3, 4]`}),t.jsxs("h3",{children:["C) ",t.jsx("code",{children:"flatMap"})," - map then flatten once"]}),t.jsx(f.Code,{children:`const sentences = ["hi there", "good day"];
// split words from each sentence and flatten
const words = sentences.flatMap(s => s.split(" "));
console.log(words);                    // ["hi", "there", "good", "day"]

// Equivalent two-step:
console.log(sentences.map(s => s.split(" ")).flat());
// [["hi","there"],["good","day"]] → ["hi","there","good","day"]

// Remove nulls while mapping:
const items = [1, null, 2, null];
const cleaned = items.flatMap(x => (x == null ? [] : [x]));
console.log(cleaned);                  // [1, 2]`}),t.jsx("h3",{children:"D) API pagination → flatten pages"}),t.jsx(f.Code,{children:`const pages = [
  { items: [1, 2] },
  { items: [3] },
  { items: [] },
];
const all = pages.flatMap(p => p.items);
console.log(all);                      // [1, 2, 3]`}),t.jsx("h3",{children:"E) Nested mapping patterns"}),t.jsx(f.Code,{children:`// turn groups -> list of user ids
const groups = [
  { team: "A", users: [{id:1},{id:2}] },
  { team: "B", users: [{id:3}] },
];
const userIds = groups.flatMap(g => g.users.map(u => u.id));
console.log(userIds);                  // [1, 2, 3]

// one level only! deeper arrays need an extra flat:
const deep = [ [ [1] ], [ [2, 3] ] ];
console.log(deep.flatMap(x => x).flat()); // [[1], [2, 3]] → [1, 2, 3]`}),t.jsx("h3",{children:"F) React-friendly patterns"}),t.jsx(f.Code,{children:`// 1) Flatten sectioned menu items before rendering
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
console.log(propsObj);                 // { a:1, b:2, c:3 }`}),t.jsx("h3",{children:"G) Performance tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"flat"})," returns a copy; heavy flattening (",t.jsx("code",{children:"Infinity"}),") can allocate big arrays."]}),t.jsxs("li",{children:["Prefer ",t.jsx("code",{children:"flatMap"})," over ",t.jsx("code",{children:"map().flat()"})," for one-level cases (fewer passes)."]}),t.jsx("li",{children:"Keep mapping callbacks pure; avoid pushing into outer arrays inside the callback."})]}),t.jsx("h3",{children:"H) Pitfalls & gotchas"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Depth:"})," default is 1. If your output is still nested, pass a deeper depth or add another ",t.jsx("code",{children:"flat"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Not deep merge:"})," flattening arrays of objects doesn't merge objects-just removes array nesting."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Sparse arrays:"})," empty slots are removed by ",t.jsx("code",{children:"flat"}),"; don't rely on their indexes later."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Legacy runtimes:"})," very old environments may lack ",t.jsx("code",{children:"flat/flatMap"}),"; consider a polyfill if needed."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Need to remove one nesting level? → ",t.jsx("strong",{children:"flat()"})," (or set ",t.jsx("em",{children:"depth"}),")."]}),t.jsxs("li",{children:["Need map + flatten(1) in one go? → ",t.jsx("strong",{children:"flatMap(fn)"}),"."]}),t.jsx("li",{children:"Watch out for sparse arrays-they collapse."}),t.jsxs("li",{children:["Avoid ",t.jsx("code",{children:"Infinity"})," unless you really need full flattening."]})]}),t.jsx(f.Divider,{})]})}function Om({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="object-utilities";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsxs("span",{children:["Object utilities: ",t.jsx("code",{children:"keys"}),", ",t.jsx("code",{children:"values"}),", ",t.jsx("code",{children:"entries"}),", ",t.jsx("code",{children:"assign"})]})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(Rm,{})})})]})}function Rm(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:["Everyday helpers for working with plain objects: get keys/values/pairs, transform with",t.jsx("code",{children:" entries"})," ⟷ ",t.jsx("code",{children:"fromEntries"}),", and merge/clone with ",t.jsx("code",{children:"assign"}),". These work on an object's ",t.jsx("em",{children:"own enumerable string-keyed"})," properties (symbols are ignored)."]}),t.jsxs("h3",{children:["A) ",t.jsx("code",{children:"Object.keys"})," - list own keys (strings)"]}),t.jsx(f.Code,{children:`const user = { id: 1, name: "Ash" };
console.log(Object.keys(user));                    // ["id", "name"]

// Integer-like keys are ordered numerically first, then the rest by insertion:
const order = { "2": "two", "1": "one", a: "A" };
console.log(Object.keys(order));                   // ["1", "2", "a"]`}),t.jsxs("h3",{children:["B) ",t.jsx("code",{children:"Object.values"})," - list own values"]}),t.jsx(f.Code,{children:`const point = { x: 10, y: 20 };
console.log(Object.values(point));                 // [10, 20]`}),t.jsxs("h3",{children:["C) ",t.jsx("code",{children:"Object.entries"})," ⟷ ",t.jsx("code",{children:"Object.fromEntries"})]}),t.jsx(f.Code,{children:`const stats = { a: 1, b: 2 };
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
console.log(publicUser);                            // { id: 1, name: "Ash" }`}),t.jsxs("h3",{children:["D) ",t.jsx("code",{children:"Object.assign"})," - merge/clone (shallow) ⚠️ mutates target"]}),t.jsx(f.Code,{children:`const target = { a: 1 };
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
console.log(original.nested.x);                      // 2  (same inner object)`}),t.jsx("h3",{children:"E) Symbols & non-enumerables (FYI)"}),t.jsx(f.Code,{children:`const s = Symbol("s");
const obj = { a: 1, [s]: 2 };
console.log(Object.keys(obj));                       // ["a"] (symbols ignored)
console.log(Object.getOwnPropertySymbols(obj));      // [Symbol(s)]
// Non-enumerable props are also skipped by keys/values/entries`}),t.jsxs("h3",{children:["F) Practical transforms with ",t.jsx("code",{children:"entries"})]}),t.jsx(f.Code,{children:`// 1) Rename keys
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
console.log(invert({ a:1, b:2 }));                  // { "1":"a", "2":"b" }`}),t.jsx("h3",{children:"G) React-friendly patterns"}),t.jsx(f.Code,{children:`// 1) Render object as a list
const features = { darkMode: true, beta: false };
// Object.entries(features).map(([k, v]) => <li key={k}>{k}: {String(v)}</li>)

// 2) Merge default props/options (spread is equivalent to assign into {})
const defaults = { size: "md", disabled: false };
const final = { ...defaults, ...{ disabled: true } };  // or Object.assign({}, defaults, { disabled: true })
console.log(final);                                    // { size: "md", disabled: true }

// 3) Build object from pairs for quick lookup
const list = [{ id:1, name:"Ash" }, { id:2, name:"Riya" }];
const byId = Object.fromEntries(list.map(u => [u.id, u]));
console.log(byId[2].name);                              // "Riya"`}),t.jsx("h3",{children:"H) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsxs("strong",{children:[t.jsx("code",{children:"assign"})," mutates its first arg"]}),"; use ",t.jsx("code",{children:"Object.assign({}, a, b)"})," or spread for a new object."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Shallow only:"})," both ",t.jsx("code",{children:"assign"})," and spread copy references for nested objects."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"keys/values/entries"})," ignore symbols & non-enumerables; use ",t.jsx("code",{children:"Object.getOwnPropertySymbols"})," / descriptors if needed."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Key order:"})," integer-like keys come first in ascending order, then others by insertion."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Transform/filter objects via ",t.jsx("code",{children:"entries → map/filter → fromEntries"}),"."]}),t.jsxs("li",{children:["Merge immutably with ",t.jsx("code",{children:"Object.assign({}, ...)"})," or spread."]}),t.jsx("li",{children:"Remember it's all shallow copies - be careful with nested state."}),t.jsxs("li",{children:["Need symbols? Grab them with ",t.jsx("code",{children:"Object.getOwnPropertySymbols"}),"."]})]}),t.jsx(f.Divider,{})]})}function _m({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="sets-and-maps";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Sets & Maps (when they help)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(Am,{})})})]})}function Am(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:["Use a ",t.jsx("strong",{children:"Set"})," for unique values + fast ",t.jsx("code",{children:"has"})," checks. Use a ",t.jsx("strong",{children:"Map"})," for key→value where keys can be ",t.jsx("em",{children:"any type"})," (objects, arrays, functions), with stable iteration order."]}),t.jsx("h3",{children:"A) Set - unique values & fast membership"}),t.jsx(f.Code,{children:`const s = new Set([1, 2, 2, 3]);
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
console.log(unique([2,2,3,1,3]));          // [2, 3, 1]`}),t.jsx("h3",{children:"B) Set operations - union, intersection, difference"}),t.jsx(f.Code,{children:`const A = new Set([1,2,3]);
const B = new Set([3,4]);

const union = new Set([...A, ...B]);
console.log([...union]);                   // [1,2,3,4]

const intersection = new Set([...A].filter(x => B.has(x)));
console.log([...intersection]);            // [3]

const difference = new Set([...A].filter(x => !B.has(x)));
console.log([...difference]);              // [1,2]`}),t.jsx("h3",{children:"C) Map - key→value with any key type"}),t.jsx(f.Code,{children:`const m = new Map([["id", 1], ["name", "Ash"]]);
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
console.log(objFromMap);                          // { a: 1, b: 2 }`}),t.jsx("h3",{children:"D) When Sets/Maps help vs Arrays/Objects"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Set"}),": quick dedupe; O(1) membership checks (e.g., selected IDs, visited nodes)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Map"}),": non-string keys; predictable insertion order; avoids prototype pitfalls of objects."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Object"}),": best for JSON, simple string-keyed records, and ergonomic literals."]})]}),t.jsx("h3",{children:"E) WeakSet / WeakMap (lifetime tied to object keys)"}),t.jsx(f.Code,{children:`// WeakMap keys must be objects; entries are GC'd when keys are unreachable
const wm = new WeakMap();
let k = {};
wm.set(k, { meta: "cached" });
console.log(wm.has(k));                           // true
k = null; // after GC, entry may disappear (can't reliably log timing)`}),t.jsx("h3",{children:"F) Practical React patterns"}),t.jsx(f.Code,{children:`// 1) Selected IDs as a Set (immutable updates)
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
console.log(getSum(2,3), getSum(2,3));            // 5 5 (second from cache)`}),t.jsx("h3",{children:"G) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Not JSON-serializable:"})," ",t.jsx("code",{children:"Set"}),"/",t.jsx("code",{children:"Map"})," need conversion (e.g., ",t.jsx("code",{children:"[...set]"}),", ",t.jsx("code",{children:"Object.fromEntries(map)"}),")."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Reference identity:"})," Map keys compare by reference; use the same object instance or a stable string key."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Iteration order:"})," Set/Map iterate in insertion order; use this for deterministic UI."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Shallow semantics:"})," Sets don't deep-compare objects; two equal-shaped objects are different keys."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Need uniqueness or fast membership? → ",t.jsx("strong",{children:"Set"}),"."]}),t.jsxs("li",{children:["Need keys that aren't strings? → ",t.jsx("strong",{children:"Map"}),"."]}),t.jsx("li",{children:"Convert before JSON/storage; prefer objects for raw API payloads."}),t.jsx("li",{children:"For React state, clone Sets/Maps to new instances to trigger updates."})]}),t.jsx(f.Divider,{})]})}function Im({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="promises-async-await";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Promises & async/await (patterns, errors, concurrency)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(Dm,{})})})]})}function Dm(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:["A ",t.jsx("strong",{children:"Promise"})," represents a value that will resolve later.",t.jsx("strong",{children:"async/await"})," makes promise code read like sync code. Use ",t.jsx("code",{children:"try/catch"})," for errors, and prefer ",t.jsx("strong",{children:"concurrency"})," helpers (",t.jsx("code",{children:"Promise.all"}),", etc.) for speed."]}),t.jsx("h3",{children:"A) Make a Promise & basic handlers"}),t.jsx(f.Code,{children:`// Create a promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("OK"), 100);
});

p.then(v => console.log("then:", v))     // "then: OK"
 .catch(e => console.log("error:", e))
 .finally(() => console.log("done"));    // "done" (always runs)

// Shortcut: Promise.resolve / Promise.reject
Promise.resolve(42).then(x => console.log(x)); // 42`}),t.jsx("h3",{children:"B) Chain & propagate errors"}),t.jsx(f.Code,{children:`Promise.resolve(2)
  .then(x => x * 3)                        // 6
  .then(x => { throw new Error("boom"); })
  .then(() => "never")
  .catch(err => "handled: " + err.message)  // "handled: boom"
  .then(msg => console.log(msg));           // "handled: boom"`}),t.jsx("h3",{children:"C) async/await - sugar over promises"}),t.jsx(f.Code,{children:`async function work() {
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
console.log(work() instanceof Promise);    // true`}),t.jsx("h3",{children:"D) Concurrent vs sequential (speed matters)"}),t.jsx(f.Code,{children:`// Slow (sequential): waits one by one
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
fast().then(x => console.log("fast:", x)); // "fast: 2"`}),t.jsx("h3",{children:"E) Promise helpers - all / allSettled / race / any"}),t.jsx(f.Code,{children:`const ok = (v, ms=50) => new Promise(r => setTimeout(() => r(v), ms));
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
// Promise.any([fail("X",30), ok("Y",40)]).then(v => console.log(v));        // "Y"`}),t.jsx("h3",{children:"F) Fetch JSON helper + timeout (AbortController)"}),t.jsx(f.Code,{children:`// NOTE: Full "Fetch basics + JSON" is its own topic.
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
// fetchJSON("/api/users").then(data => console.log(Array.isArray(data))); // true/false`}),t.jsx("h3",{children:"G) Loops: forEach pitfall, use for...of or Promise.all"}),t.jsx(f.Code,{children:`const delay = ms => new Promise(r => setTimeout(r, ms));

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
conc([1,2]);   // fast`}),t.jsx("h3",{children:"H) Microtasks vs macrotasks (timing)"}),t.jsx(f.Code,{children:`console.log("A");
Promise.resolve().then(() => console.log("B (microtask)"));
setTimeout(() => console.log("C (macrotask)"), 0);
console.log("D");
// Order: A, D, B (microtask), C (macrotask)`}),t.jsx("h3",{children:"I) Tiny promisify utility"}),t.jsx(f.Code,{children:`// Convert a callback API into a promise-based one
const promisify = (fn) => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

// Example (simulated):
function legacySum(a, b, cb) { setTimeout(() => cb(null, a + b), 20); }
const sumP = promisify(legacySum);
sumP(2,3).then(v => console.log(v));           // 5`}),t.jsx("h3",{children:"J) Practical React pattern (fetch in effect + abort)"}),t.jsx(f.Code,{children:`// inside a component:
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
// }, []);`}),t.jsx("h3",{children:"K) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Always return/await"})," promises you start; avoid unhandled rejections."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Don't mix styles"})," unnecessarily: pick ",t.jsx("em",{children:"either"})," ",t.jsx("code",{children:"then/catch"})," or ",t.jsx("code",{children:"async/await"})," in a block."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Concurrency"}),": start promises first, then ",t.jsx("code",{children:"await Promise.all"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"forEach + async"})," is a trap - use ",t.jsx("code",{children:"for...of"})," or ",t.jsx("code",{children:"Promise.all(map())"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Timeouts & cancel"}),": use ",t.jsx("code",{children:"AbortController"})," or a ",t.jsx("code",{children:"race"})," with a timeout promise."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"async functions return Promises"}),"; throw to reject, return to resolve."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Use ",t.jsx("strong",{children:"async/await"})," + ",t.jsx("code",{children:"try/catch"})," for readable async code."]}),t.jsxs("li",{children:["Batch work with ",t.jsx("code",{children:"Promise.all"})," for speed; handle partials with ",t.jsx("code",{children:"allSettled"}),"."]}),t.jsxs("li",{children:["Guard fetches with ",t.jsx("code",{children:"AbortController"})," (cleanup on unmount)."]}),t.jsx("li",{children:"Know the event loop: microtasks (promise callbacks) run before timeouts."})]}),t.jsx(f.Divider,{})]})}function Mm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="fetch-basics-json";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Fetch basics + JSON (GET/POST, errors, timeout, retry)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(zm,{})})})]})}function zm(){return t.jsxs(f.Content,{children:[t.jsx("div",{children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("code",{children:"fetch()"})," returns a ",t.jsx("strong",{children:"Promise<Response>"}),"."]}),t.jsxs("li",{children:["Always check ",t.jsx("code",{children:"res.ok"})," / ",t.jsx("code",{children:"res.status"}),", then parse with ",t.jsx("code",{children:"res.json()"})," (or ",t.jsx("code",{children:"res.text()"}),")."]}),t.jsxs("li",{children:["Use ",t.jsx("code",{children:"AbortController"})," for timeouts/cancel and wrap with small helpers."]})]})}),t.jsx("h3",{children:"A) GET JSON - with query params"}),t.jsx(f.Code,{children:`// Build URL with search params
const params = new URLSearchParams({ page: "1", q: "react" });
const url = \`/api/posts?\${params}\`;

async function getJSON(u) {
  const res = await fetch(u, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}

// Example shape:
getJSON(url).then(data => {
  // data => { items: [...], total: 42 }
  console.log(Array.isArray(data.items), data.total); // true 42
});`}),t.jsx("h3",{children:"B) POST JSON - send body & read JSON"}),t.jsx(f.Code,{children:`async function postJSON(u, body) {
  const res = await fetch(u, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}

// Usage:
postJSON("/api/todos", { title: "Write handbook" })
  .then(todo => console.log(todo.id > 0))     // true
  .catch(e => console.error("create failed:", e.message));`}),t.jsx("h3",{children:"C) Errors: network vs HTTP vs invalid JSON"}),t.jsx(f.Code,{children:`async function safeJSON(u) {
  try {
    const res = await fetch(u);
    if (!res.ok) {
      // 4xx/5xx
      const msg = await res.text().catch(() => "");
      throw new Error(\`HTTP \${res.status} \${msg}\`.trim());
    }
    try {
      return await res.json();
    } catch (e) {
      // e.name === "SyntaxError" for bad JSON
      throw new Error("Invalid JSON");
    }
  } catch (e) {
    // e.name === "TypeError" often indicates a network error in browsers
    console.error("Request failed:", e.message);
    throw e;
  }
}`}),t.jsxs("h3",{children:["D) Timeout / cancel with ",t.jsx("code",{children:"AbortController"})]}),t.jsx(f.Code,{children:`async function getJSONWithTimeout(u, { timeout = 8000, ...opts } = {}) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(u, { ...opts, signal: ctrl.signal });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (e) {
    if (e.name === "AbortError") console.warn("Request aborted/timeout");
    throw e;
  } finally {
    clearTimeout(id);
  }
}

// getJSONWithTimeout("/api/slow", { timeout: 1500 }).catch(e => console.log(e.name));
// "AbortError"`}),t.jsx("h3",{children:"E) Simple retry with exponential backoff"}),t.jsx(f.Code,{children:`async function retry(fn, { tries = 3, baseMs = 300 } = {}) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try { return await fn(); }
    catch (e) {
      lastErr = e;
      await new Promise(r => setTimeout(r, baseMs * 2 ** i));
    }
  }
  throw lastErr;
}

// Usage: retry a fetch
retry(() => getJSON("/api/flaky"), { tries: 3 })
  .then(() => console.log("ok"))
  .catch(e => console.log("failed:", e.message));`}),t.jsx("h3",{children:"F) Non-JSON responses (204, text, blobs)"}),t.jsx(f.Code,{children:`// 204 No Content: don't call res.json()
async function del(u) {
  const res = await fetch(u, { method: "DELETE" });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return; // nothing
}

// text()
fetch("/robots.txt")
  .then(r => r.text())
  .then(t => console.log(t.includes("User-agent"))); // true

// blob() (e.g., download)
fetch("/logo.png")
  .then(r => r.blob())
  .then(b => console.log(b.type.startsWith("image/"))); // true`}),t.jsx("h3",{children:"G) Credentials, headers, and base URL"}),t.jsx(f.Code,{children:`// Send cookies to same-site/another origin (if server allows it)
fetch("/api/me", { credentials: "include" });

// Common headers helper
const jsonHeaders = { "Content-Type": "application/json", Accept: "application/json" };

// Build base URL once
const API = (path) => \`\${import.meta.env.VITE_API_BASE}\${path}\`;
console.log(API("/health")); // e.g., "https://api.example.com/health"`}),t.jsx("h3",{children:"H) React pattern - effect with abort & state"}),t.jsx(f.Code,{children:`// Inside a component:
// const [data, setData] = React.useState(null);
// const [error, setError] = React.useState(null);
// const [loading, setLoading] = React.useState(false);

// React.useEffect(() => {
//   const ctrl = new AbortController();
//   setLoading(true);
//   (async () => {
//     try {
//       const res = await fetch(API("/posts"), { signal: ctrl.signal });
//       if (!res.ok) throw new Error("HTTP " + res.status);
//       setData(await res.json());
//     } catch (e) {
//       if (e.name !== "AbortError") setError(e);
//     } finally {
//       setLoading(false);
//     }
//   })();
//   return () => ctrl.abort();
// }, []);`}),t.jsx("h3",{children:"I) Node vs Browser (tiny note)"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Browsers: ",t.jsx("code",{children:"fetch"})," is built-in. CORS must be allowed by the server."]}),t.jsxs("li",{children:["Node: built-in from Node ",t.jsx("strong",{children:"18+"}),". Older Node needs a polyfill (e.g., ",t.jsx("code",{children:"node-fetch"}),")."]})]}),t.jsx("h3",{children:"J) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsxs("strong",{children:["Always check ",t.jsx("code",{children:"res.ok"})]})," before parsing JSON."]}),t.jsxs("li",{children:[t.jsxs("strong",{children:["Don't ",t.jsx("code",{children:"await res.json()"})," twice"]})," - the body stream is one-time."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"POST JSON:"})," remember ",t.jsx("code",{children:"JSON.stringify"})," and the ",t.jsx("code",{children:"Content-Type"})," header."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Timeouts:"})," use ",t.jsx("code",{children:"AbortController"})," or a ",t.jsx("code",{children:"Promise.race"})," pattern."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Retries:"})," only retry idempotent calls or ensure your API is retry-safe."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["GET/POST helpers that check ",t.jsx("code",{children:"ok"})," and parse once."]}),t.jsx("li",{children:"Abort on unmount; surface errors to UI."}),t.jsx("li",{children:"Backoff retries for flaky networks."}),t.jsx("li",{children:"Handle 204/text/blob paths, not just JSON."})]}),t.jsx(f.Divider,{})]})}function Lm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="timers";return t.jsxs(f.Topic,{children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"Timers (setTimeout, setInterval)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx($m,{})})})]})}function $m(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:[t.jsx("code",{children:"setTimeout"})," runs a callback once after a delay; ",t.jsx("code",{children:"setInterval"})," runs repeatedly. Always keep the returned ",t.jsx("em",{children:"id"})," and clear with ",t.jsx("code",{children:"clearTimeout"})," /"," ",t.jsx("code",{children:"clearInterval"}),". In React, start timers in effects and clean them up on unmount."]}),t.jsxs("h3",{children:["A) ",t.jsx("code",{children:"setTimeout"})," basics (one-shot)"]}),t.jsx(f.Code,{children:`console.log("sync 1");
const id = setTimeout(() => console.log("timeout fired"), 0);
console.log("sync 2");
// Output order:
// "sync 1"
// "sync 2"
// "timeout fired"   (timers are macrotasks, run after sync & microtasks)

// Passing arguments
setTimeout((a, b) => console.log(a + b), 10, 2, 3); // 5

// Cancel before it fires
const t = setTimeout(() => console.log("WON'T RUN"), 50);
clearTimeout(t);`}),t.jsxs("h3",{children:["B) ",t.jsx("code",{children:"setInterval"})," (repeating) + clear"]}),t.jsx(f.Code,{children:`let count = 0;
const iv = setInterval(() => {
  count++;
  console.log("tick", count);
  // "tick 1", "tick 2", "tick 3"
  if (count === 3) clearInterval(iv); // stops after 3
}, 100);`}),t.jsxs("h3",{children:["C) Drift & accuracy: ",t.jsx("em",{children:"recursive"})," timeout over interval"]}),t.jsxs("p",{children:["Long callbacks cause ",t.jsx("code",{children:"setInterval"})," to drift. Prefer scheduling the next run yourself (recursive ",t.jsx("code",{children:"setTimeout"}),") and adjust with timestamps."]}),t.jsx(f.Code,{children:`const stepMs = 100;
let expected = Date.now() + stepMs;
function tick() {
  const drift = Date.now() - expected; // +ve = we're late
  console.log("drift(ms)~", drift >= 0 ? Math.round(drift) : 0);
  expected += stepMs;
  setTimeout(tick, Math.max(0, stepMs - drift)); // adjust next delay
}
setTimeout(tick, stepMs);
// logs small drift values, auto-correcting each step`}),t.jsx("h3",{children:"D) Debounce (wait for quiet period) & Throttle (limit rate)"}),t.jsx(f.Code,{children:`// Debounce: call after N ms of inactivity
function debounce(fn, ms = 200) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), ms);
  };
}

// Throttle: call at most once per window
function throttle(fn, ms = 200) {
  let ready = true, lastArgs;
  return (...args) => {
    if (!ready) { lastArgs = args; return; }
    ready = false;
    fn(...args);
    setTimeout(() => {
      ready = true;
      if (lastArgs) { fn(...lastArgs); lastArgs = null; }
    }, ms);
  };
}

const log = debounce(v => console.log("debounced", v), 100);
log(1); log(2); log(3); // "debounced 3" (only last call runs)`}),t.jsxs("h3",{children:["E) Promise-based sleep + ",t.jsx("code",{children:"async/await"})]}),t.jsx(f.Code,{children:`const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const t0 = Date.now();
  await sleep(50);
  await sleep(50);
  console.log("elapsed~", Date.now() - t0 >= 100); // true (≈100ms)
})();`}),t.jsx("h3",{children:"F) Next tick & animation"}),t.jsx(f.Code,{children:`// Next microtask (before timeouts)
Promise.resolve().then(() => console.log("microtask"));
// Next animation frame (~60fps)
requestAnimationFrame(() => console.log("raf"));`}),t.jsx("h3",{children:"G) React patterns — effects + cleanup"}),t.jsx(f.Code,{children:`// 1) One-shot timeout on mount with cleanup
// React.useEffect(() => {
//   const id = setTimeout(() => {
//     // setState("ready")
//   }, 300);
//   return () => clearTimeout(id);
// }, []);

// 2) Interval with cleanup
// React.useEffect(() => {
//   const id = setInterval(() => {
//     // setCount(c => c + 1)
//   }, 1000);
//   return () => clearInterval(id);
// }, []);

// 3) Store ids in refs (if you need to clear from handlers)
// const timeoutRef = React.useRef(null);
// function onCancel() {
//   if (timeoutRef.current) clearTimeout(timeoutRef.current);
// }`}),t.jsx("h3",{children:"H) Node vs Browser (notes)"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Browsers may ",t.jsx("strong",{children:"throttle"})," timers in background tabs (e.g., clamped to ~1000ms)."]}),t.jsxs("li",{children:["Node also has ",t.jsx("code",{children:"setImmediate"})," and ",t.jsx("code",{children:"process.nextTick"})," (microtask); timers API is otherwise similar."]})]}),t.jsx("h3",{children:"I) Pitfalls & tips"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Always clear"})," timeouts/intervals you create (especially in React effects)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Don't rely on exact ms."})," Timers run “as soon as possible” after the delay."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Avoid piling work in intervals."})," If work may take longer than the interval, prefer recursive timeouts with drift correction."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Debounce for bursts"})," (search input), ",t.jsx("strong",{children:"throttle for steady rate"})," (scroll/resize)."]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Use ",t.jsx("code",{children:"setTimeout"})," for one-shot; ",t.jsx("code",{children:"setInterval"})," for repeats (but watch drift)."]}),t.jsx("li",{children:"Keep ids; clear them on unmount or when no longer needed."}),t.jsxs("li",{children:["Use ",t.jsx("code",{children:"sleep()"})," for readable async flows; pair timers with ",t.jsx("code",{children:"Promise"}),"s."]}),t.jsx("li",{children:"Prefer debounce/throttle for high-frequency events."})]}),t.jsx(f.Divider,{})]})}function Fm({defaultOpen:i=!1}){const[a,c]=ee.useState(!!i),d="jsx-syntax-rules";return t.jsxs(f.Topic,{id:d,children:[t.jsxs(f.Title,{onClick:()=>c(m=>!m),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[t.jsx(f.Arrow,{"data-open":a,children:"▸"}),t.jsx("span",{children:"JSX syntax rules (one root, expressions)"})]}),t.jsx(f.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:t.jsx("div",{children:t.jsx(Um,{})})})]})}function Um(){return t.jsxs(f.Content,{children:[t.jsxs("p",{children:["JSX is syntax sugar for ",t.jsx("code",{children:"React.createElement"}),". It has two core rules:",t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:" (1) one root element"})," per JSX return, and"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"(2) curly braces hold expressions"})," (not statements)."]})]})]}),t.jsx("h3",{children:"A) One root element"}),t.jsxs("p",{children:["Each component’s ",t.jsx("code",{children:"return"})," must produce a single parent node. Use a wrapper element or a Fragment."]}),t.jsx(f.Code,{children:`// ❌ Not allowed: two siblings at top level
function Bad() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

// ✅ Wrap with a div
function GoodDiv() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// ✅ Or prefer Fragment when you don't need an extra DOM element
function GoodFragment() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}`}),t.jsx("h3",{children:"B) Fragments (short & long form + keys)"}),t.jsxs("p",{children:["Shorthand ",t.jsx("code",{children:"<>...</>"})," is great for grouping. Use"," ",t.jsx("code",{children:"<React.Fragment>"})," if you need a ",t.jsx("code",{children:"key"}),"."]}),t.jsx(f.Code,{children:`const rows = [
  { id: 1, label: "A" },
  { id: 2, label: "B" },
];

function KeyedFragments() {
  return (
    <ul>
      {rows.map(row => (
        <React.Fragment key={row.id}>
          <li>{row.label}</li>
          <li className="divider" aria-hidden="true">—</li>
        </React.Fragment>
      ))}
    </ul>
  );
}`}),t.jsxs("h3",{children:["C) Curly braces are for ",t.jsx("em",{children:"expressions"})]}),t.jsxs("p",{children:["Inside JSX, ",t.jsx("code",{children:"{ ... }"})," must contain an expression (something that evaluates to a value): variables, function calls, math, array literals, ",t.jsx("em",{children:"ternary"})," conditionals, etc. Statements like ",t.jsx("code",{children:"if"}),"/",t.jsx("code",{children:"for"}),"/",t.jsx("code",{children:"while"})," are not allowed directly in braces."]}),t.jsx(f.Code,{children:`// ✅ Valid (expressions)
const user = { first: "Ashish", last: "Ranjan" };
const n = 7;
function Demo() {
  return (
    <div>
      <p>Hello, {user.first + " " + user.last}!</p>
      <p>2 + 5 = {2 + 5}</p>
      <p>Lucky? {n > 5 ? "Yes" : "No"}</p>
      <ul>{["JSX","Rules","FTW"].map((w, i) => <li key={i}>{w}</li>)}</ul>
    </div>
  );
}

// ❌ Invalid (statements in braces)
// <div>{ if (ok) { "Yes" } else { "No" } }</div>

// ✅ Convert to expression using a ternary
// <div>{ ok ? "Yes" : "No" }</div>

// ✅ Or precompute above return
// let msg = "No";
// if (ok) msg = "Yes";
// return <div>{msg}</div>;`}),t.jsx("h3",{children:"D) Attributes: literal vs expression"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Quotes for string literals: ",t.jsx("code",{children:'<img alt="logo" />'})]}),t.jsxs("li",{children:["Braces for non-strings/variables: ",t.jsx("code",{children:"<img width={64} />"})]}),t.jsxs("li",{children:["Booleans: ",t.jsx("code",{children:"<Button primary />"})," ≡ ",t.jsx("code",{children:"<Button primary={true} />"})]}),t.jsxs("li",{children:["Objects/arrays need braces: ",t.jsx("code",{children:"<Box style={{ marginTop: 8 }} />"})]})]}),t.jsx(f.Code,{children:`function Attrs() {
  const size = 64;
  const styles = { marginTop: 8, borderRadius: 8 };

  return (
    <img
      alt="Logo"              // string literal -> quotes
      src="/logo.png"
      width={size}            // number -> braces
      height={size}
      style={styles}          // object -> braces
      draggable={false}       // boolean -> braces
    />
  );
}`}),t.jsx("h3",{children:"E) What renders vs what doesn't"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("code",{children:"null"}),", ",t.jsx("code",{children:"undefined"}),", and ",t.jsx("code",{children:"false"})," render nothing."]}),t.jsxs("li",{children:[t.jsx("code",{children:"0"})," ",t.jsx("em",{children:"does"})," render (common gotcha)."]}),t.jsxs("li",{children:["Arrays of nodes are fine: ",t.jsx("code",{children:'{[<li key="1">A</li>, <li key="2">B</li>]}'})]})]}),t.jsx(f.Code,{children:`function Visibility({ count }) {
  // || treats 0 as falsy -> will fall back; often not desired.
  // Prefer ?? so 0 stays 0.
  return <p>Count: {count ?? 0}</p>;
}`}),t.jsx("h3",{children:"Mini-exercises"}),t.jsxs("ol",{children:[t.jsxs("li",{children:["Fix this return to have a single root (no extra DOM wrapper in the output):",t.jsx(f.Code,{children:`function X() {
  return (
    <h2>Hi</h2>
    <p>There</p>
  );
}`}),t.jsx("em",{children:"Hint:"})," Use a Fragment."]}),t.jsxs("li",{children:["Convert this statement into an expression:",t.jsx(f.Code,{children:`// Want: "Even" if n%2===0, else "Odd"
// <div>{ if (n % 2 === 0) { "Even" } else { "Odd" } }</div>`})]}),t.jsxs("li",{children:["Make this map render correctly with keys:",t.jsx(f.Code,{children:`<ul>
  {items.map(item => <li>{item.label}</li>)}
</ul>`})]})]}),t.jsx("h3",{children:"Mini-checklist"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Return exactly one root element (Fragment if no wrapper DOM is needed)."}),t.jsxs("li",{children:["Use ",t.jsx("code",{children:"{ ... }"})," only for expressions. Convert statements to a ternary or compute earlier."]}),t.jsx("li",{children:"Quotes for string literals, braces for variables/non-strings."}),t.jsxs("li",{children:["Remember: ",t.jsx("code",{children:"null/undefined/false"})," render nothing; ",t.jsx("code",{children:"0"})," renders."]})]}),t.jsx(f.Divider,{})]})}function Bm(){return t.jsxs(Hm.Wrapper,{children:[t.jsx("h1",{children:"ReactJS Handbook"}),t.jsxs("fieldset",{style:{padding:"0 15px 15px 30px",marginBottom:15},children:[t.jsx("legend",{style:{padding:15},children:"From Wikipedia - last updated: Sep 02, 2025"}),t.jsx("p",{children:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.'}),t.jsx("br",{}),t.jsx("p",{children:"React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements."})]}),t.jsx("h1",{style:{marginTop:"30px"},children:"My Notes"}),t.jsx("h3",{children:"last updated: Sep 02, 2025"}),t.jsx("div",{className:"divider"}),t.jsx("h3",{children:"0. Setup & Local Dev"}),t.jsxs(t.Fragment,{children:[t.jsx(Qp,{}),t.jsx(Kp,{}),t.jsx(Xp,{}),t.jsx(em,{}),t.jsx(tm,{}),t.jsx(sm,{})]}),t.jsx("h3",{style:{marginTop:50},children:"1. ES6+ I actually use daily"}),t.jsxs(t.Fragment,{children:[t.jsx(om,{}),t.jsx(am,{}),t.jsx(um,{}),t.jsx(fm,{}),t.jsx(pm,{}),t.jsx(gm,{}),t.jsx(ym,{}),t.jsx(jm,{}),t.jsx(km,{}),t.jsx(Cm,{}),t.jsx(Pm,{}),t.jsx(Tm,{}),t.jsx(Om,{}),t.jsx(_m,{}),t.jsx(Im,{}),t.jsx(Mm,{}),t.jsx(Lm,{})]}),t.jsx("h3",{style:{marginTop:50},children:"2. JSX: Rules and Patterns"}),t.jsx(t.Fragment,{children:t.jsx(Fm,{})})]})}const Hm={Wrapper:Pn.div`
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
  `};var Md={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},id=ee.createContext&&ee.createContext(Md),Vm=["attr","size","title"];function Wm(i,a){if(i==null)return{};var c=Qm(i,a),d,m;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(i);for(m=0;m<w.length;m++)d=w[m],!(a.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(i,d)&&(c[d]=i[d])}return c}function Qm(i,a){if(i==null)return{};var c={};for(var d in i)if(Object.prototype.hasOwnProperty.call(i,d)){if(a.indexOf(d)>=0)continue;c[d]=i[d]}return c}function xl(){return xl=Object.assign?Object.assign.bind():function(i){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(i[d]=c[d])}return i},xl.apply(this,arguments)}function ad(i,a){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);a&&(d=d.filter(function(m){return Object.getOwnPropertyDescriptor(i,m).enumerable})),c.push.apply(c,d)}return c}function yl(i){for(var a=1;a<arguments.length;a++){var c=arguments[a]!=null?arguments[a]:{};a%2?ad(Object(c),!0).forEach(function(d){Gm(i,d,c[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):ad(Object(c)).forEach(function(d){Object.defineProperty(i,d,Object.getOwnPropertyDescriptor(c,d))})}return i}function Gm(i,a,c){return a=Km(a),a in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,i}function Km(i){var a=qm(i,"string");return typeof a=="symbol"?a:a+""}function qm(i,a){if(typeof i!="object"||!i)return i;var c=i[Symbol.toPrimitive];if(c!==void 0){var d=c.call(i,a);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(i)}function zd(i){return i&&i.map((a,c)=>ee.createElement(a.tag,yl({key:c},a.attr),zd(a.child)))}function Jm(i){return a=>ee.createElement(Ym,xl({attr:yl({},i.attr)},a),zd(i.child))}function Ym(i){var a=c=>{var{attr:d,size:m,title:w}=i,P=Wm(i,Vm),I=m||c.size||"1em",T;return c.className&&(T=c.className),i.className&&(T=(T?T+" ":"")+i.className),ee.createElement("svg",xl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,d,P,{className:T,style:yl(yl({color:i.color||c.color},c.style),i.style),height:I,width:I,xmlns:"http://www.w3.org/2000/svg"}),w&&ee.createElement("title",null,w),i.children)};return id!==void 0?ee.createElement(id.Consumer,null,c=>a(c)):a(Md)}function Xm(i){return Jm({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"},child:[]}]})(i)}function Zm({threshold:i=50}){const[a,c]=ee.useState(!1),d=ee.useMemo(()=>{var w,P;return(P=(w=window.matchMedia)==null?void 0:w.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:P.matches},[]);ee.useEffect(()=>{let w=!1;const P=()=>{w||(window.requestAnimationFrame(()=>{c(window.scrollY>i),w=!1}),w=!0)};return P(),window.addEventListener("scroll",P,{passive:!0}),()=>window.removeEventListener("scroll",P)},[i]);const m=()=>{window.scrollTo({top:0,behavior:d?"auto":"smooth"})};return t.jsx(eg,{type:"button","aria-label":"Scroll to top",onClick:m,"data-visible":a,title:"Back to top",children:t.jsx(Xm,{})})}const eg=Pn.button`
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
`,ng=()=>t.jsxs(t.Fragment,{children:[t.jsx(Bm,{}),t.jsx(Zm,{})]});Vh.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(ng,{})}));
