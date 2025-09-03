(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const w of f)if(w.type==="childList")for(const E of w.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&u(E)}).observe(document,{childList:!0,subtree:!0});function d(f){const w={};return f.integrity&&(w.integrity=f.integrity),f.referrerPolicy&&(w.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?w.credentials="include":f.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function u(f){if(f.ep)return;f.ep=!0;const w=d(f);fetch(f.href,w)}})();function _p(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var yo={exports:{}},Vr={},vo={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function Mp(){if(Dd)return te;Dd=1;var l=Symbol.for("react.element"),a=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),E=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),$=Symbol.iterator;function F(g){return g===null||typeof g!="object"?null:(g=$&&g[$]||g["@@iterator"],typeof g=="function"?g:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,J={};function Q(g,k,K){this.props=g,this.context=k,this.refs=J,this.updater=K||X}Q.prototype.isReactComponent={},Q.prototype.setState=function(g,k){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,k,"setState")},Q.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function pe(){}pe.prototype=Q.prototype;function oe(g,k,K){this.props=g,this.context=k,this.refs=J,this.updater=K||X}var ie=oe.prototype=new pe;ie.constructor=oe,se(ie,Q.prototype),ie.isPureReactComponent=!0;var ee=Array.isArray,ue=Object.prototype.hasOwnProperty,q={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function Re(g,k,K){var Y,re={},ne=null,he=null;if(k!=null)for(Y in k.ref!==void 0&&(he=k.ref),k.key!==void 0&&(ne=""+k.key),k)ue.call(k,Y)&&!B.hasOwnProperty(Y)&&(re[Y]=k[Y]);var le=arguments.length-2;if(le===1)re.children=K;else if(1<le){for(var ce=Array(le),De=0;De<le;De++)ce[De]=arguments[De+2];re.children=ce}if(g&&g.defaultProps)for(Y in le=g.defaultProps,le)re[Y]===void 0&&(re[Y]=le[Y]);return{$$typeof:l,type:g,key:ne,ref:he,props:re,_owner:q.current}}function en(g,k){return{$$typeof:l,type:g.type,key:k,ref:g.ref,props:g.props,_owner:g._owner}}function gn(g){return typeof g=="object"&&g!==null&&g.$$typeof===l}function _n(g){var k={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(K){return k[K]})}var an=/\/+/g;function We(g,k){return typeof g=="object"&&g!==null&&g.key!=null?_n(""+g.key):k.toString(36)}function nn(g,k,K,Y,re){var ne=typeof g;(ne==="undefined"||ne==="boolean")&&(g=null);var he=!1;if(g===null)he=!0;else switch(ne){case"string":case"number":he=!0;break;case"object":switch(g.$$typeof){case l:case a:he=!0}}if(he)return he=g,re=re(he),g=Y===""?"."+We(he,0):Y,ee(re)?(K="",g!=null&&(K=g.replace(an,"$&/")+"/"),nn(re,k,K,"",function(De){return De})):re!=null&&(gn(re)&&(re=en(re,K+(!re.key||he&&he.key===re.key?"":(""+re.key).replace(an,"$&/")+"/")+g)),k.push(re)),1;if(he=0,Y=Y===""?".":Y+":",ee(g))for(var le=0;le<g.length;le++){ne=g[le];var ce=Y+We(ne,le);he+=nn(ne,k,K,ce,re)}else if(ce=F(g),typeof ce=="function")for(g=ce.call(g),le=0;!(ne=g.next()).done;)ne=ne.value,ce=Y+We(ne,le++),he+=nn(ne,k,K,ce,re);else if(ne==="object")throw k=String(g),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return he}function cn(g,k,K){if(g==null)return g;var Y=[],re=0;return nn(g,Y,"","",function(ne){return k.call(K,ne,re++)}),Y}function Fe(g){if(g._status===-1){var k=g._result;k=k(),k.then(function(K){(g._status===0||g._status===-1)&&(g._status=1,g._result=K)},function(K){(g._status===0||g._status===-1)&&(g._status=2,g._result=K)}),g._status===-1&&(g._status=0,g._result=k)}if(g._status===1)return g._result.default;throw g._result}var xe={current:null},R={transition:null},L={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:R,ReactCurrentOwner:q};function N(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:cn,forEach:function(g,k,K){cn(g,function(){k.apply(this,arguments)},K)},count:function(g){var k=0;return cn(g,function(){k++}),k},toArray:function(g){return cn(g,function(k){return k})||[]},only:function(g){if(!gn(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},te.Component=Q,te.Fragment=d,te.Profiler=f,te.PureComponent=oe,te.StrictMode=u,te.Suspense=T,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,te.act=N,te.cloneElement=function(g,k,K){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var Y=se({},g.props),re=g.key,ne=g.ref,he=g._owner;if(k!=null){if(k.ref!==void 0&&(ne=k.ref,he=q.current),k.key!==void 0&&(re=""+k.key),g.type&&g.type.defaultProps)var le=g.type.defaultProps;for(ce in k)ue.call(k,ce)&&!B.hasOwnProperty(ce)&&(Y[ce]=k[ce]===void 0&&le!==void 0?le[ce]:k[ce])}var ce=arguments.length-2;if(ce===1)Y.children=K;else if(1<ce){le=Array(ce);for(var De=0;De<ce;De++)le[De]=arguments[De+2];Y.children=le}return{$$typeof:l,type:g.type,key:re,ref:ne,props:Y,_owner:he}},te.createContext=function(g){return g={$$typeof:E,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},te.createElement=Re,te.createFactory=function(g){var k=Re.bind(null,g);return k.type=g,k},te.createRef=function(){return{current:null}},te.forwardRef=function(g){return{$$typeof:_,render:g}},te.isValidElement=gn,te.lazy=function(g){return{$$typeof:V,_payload:{_status:-1,_result:g},_init:Fe}},te.memo=function(g,k){return{$$typeof:G,type:g,compare:k===void 0?null:k}},te.startTransition=function(g){var k=R.transition;R.transition={};try{g()}finally{R.transition=k}},te.unstable_act=N,te.useCallback=function(g,k){return xe.current.useCallback(g,k)},te.useContext=function(g){return xe.current.useContext(g)},te.useDebugValue=function(){},te.useDeferredValue=function(g){return xe.current.useDeferredValue(g)},te.useEffect=function(g,k){return xe.current.useEffect(g,k)},te.useId=function(){return xe.current.useId()},te.useImperativeHandle=function(g,k,K){return xe.current.useImperativeHandle(g,k,K)},te.useInsertionEffect=function(g,k){return xe.current.useInsertionEffect(g,k)},te.useLayoutEffect=function(g,k){return xe.current.useLayoutEffect(g,k)},te.useMemo=function(g,k){return xe.current.useMemo(g,k)},te.useReducer=function(g,k,K){return xe.current.useReducer(g,k,K)},te.useRef=function(g){return xe.current.useRef(g)},te.useState=function(g){return xe.current.useState(g)},te.useSyncExternalStore=function(g,k,K){return xe.current.useSyncExternalStore(g,k,K)},te.useTransition=function(){return xe.current.useTransition()},te.version="18.3.1",te}var Ld;function Do(){return Ld||(Ld=1,vo.exports=Mp()),vo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function Dp(){if($d)return Vr;$d=1;var l=Do(),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,f=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function E(_,T,G){var V,$={},F=null,X=null;G!==void 0&&(F=""+G),T.key!==void 0&&(F=""+T.key),T.ref!==void 0&&(X=T.ref);for(V in T)u.call(T,V)&&!w.hasOwnProperty(V)&&($[V]=T[V]);if(_&&_.defaultProps)for(V in T=_.defaultProps,T)$[V]===void 0&&($[V]=T[V]);return{$$typeof:a,type:_,key:F,ref:X,props:$,_owner:f.current}}return Vr.Fragment=d,Vr.jsx=E,Vr.jsxs=E,Vr}var Fd;function Lp(){return Fd||(Fd=1,yo.exports=Dp()),yo.exports}var n=Lp(),Lo=Do();const H=_p(Lo);var li={},wo={exports:{}},Ye={},ko={exports:{}},So={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function $p(){return zd||(zd=1,function(l){function a(R,L){var N=R.length;R.push(L);e:for(;0<N;){var g=N-1>>>1,k=R[g];if(0<f(k,L))R[g]=L,R[N]=k,N=g;else break e}}function d(R){return R.length===0?null:R[0]}function u(R){if(R.length===0)return null;var L=R[0],N=R.pop();if(N!==L){R[0]=N;e:for(var g=0,k=R.length,K=k>>>1;g<K;){var Y=2*(g+1)-1,re=R[Y],ne=Y+1,he=R[ne];if(0>f(re,N))ne<k&&0>f(he,re)?(R[g]=he,R[ne]=N,g=ne):(R[g]=re,R[Y]=N,g=Y);else if(ne<k&&0>f(he,N))R[g]=he,R[ne]=N,g=ne;else break e}}return L}function f(R,L){var N=R.sortIndex-L.sortIndex;return N!==0?N:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;l.unstable_now=function(){return w.now()}}else{var E=Date,_=E.now();l.unstable_now=function(){return E.now()-_}}var T=[],G=[],V=1,$=null,F=3,X=!1,se=!1,J=!1,Q=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(R){for(var L=d(G);L!==null;){if(L.callback===null)u(G);else if(L.startTime<=R)u(G),L.sortIndex=L.expirationTime,a(T,L);else break;L=d(G)}}function ee(R){if(J=!1,ie(R),!se)if(d(T)!==null)se=!0,Fe(ue);else{var L=d(G);L!==null&&xe(ee,L.startTime-R)}}function ue(R,L){se=!1,J&&(J=!1,pe(Re),Re=-1),X=!0;var N=F;try{for(ie(L),$=d(T);$!==null&&(!($.expirationTime>L)||R&&!_n());){var g=$.callback;if(typeof g=="function"){$.callback=null,F=$.priorityLevel;var k=g($.expirationTime<=L);L=l.unstable_now(),typeof k=="function"?$.callback=k:$===d(T)&&u(T),ie(L)}else u(T);$=d(T)}if($!==null)var K=!0;else{var Y=d(G);Y!==null&&xe(ee,Y.startTime-L),K=!1}return K}finally{$=null,F=N,X=!1}}var q=!1,B=null,Re=-1,en=5,gn=-1;function _n(){return!(l.unstable_now()-gn<en)}function an(){if(B!==null){var R=l.unstable_now();gn=R;var L=!0;try{L=B(!0,R)}finally{L?We():(q=!1,B=null)}}else q=!1}var We;if(typeof oe=="function")We=function(){oe(an)};else if(typeof MessageChannel<"u"){var nn=new MessageChannel,cn=nn.port2;nn.port1.onmessage=an,We=function(){cn.postMessage(null)}}else We=function(){Q(an,0)};function Fe(R){B=R,q||(q=!0,We())}function xe(R,L){Re=Q(function(){R(l.unstable_now())},L)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_continueExecution=function(){se||X||(se=!0,Fe(ue))},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):en=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return F},l.unstable_getFirstCallbackNode=function(){return d(T)},l.unstable_next=function(R){switch(F){case 1:case 2:case 3:var L=3;break;default:L=F}var N=F;F=L;try{return R()}finally{F=N}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var N=F;F=R;try{return L()}finally{F=N}},l.unstable_scheduleCallback=function(R,L,N){var g=l.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?g+N:g):N=g,R){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=N+k,R={id:V++,callback:L,priorityLevel:R,startTime:N,expirationTime:k,sortIndex:-1},N>g?(R.sortIndex=N,a(G,R),d(T)===null&&R===d(G)&&(J?(pe(Re),Re=-1):J=!0,xe(ee,N-g))):(R.sortIndex=k,a(T,R),se||X||(se=!0,Fe(ue))),R},l.unstable_shouldYield=_n,l.unstable_wrapCallback=function(R){var L=F;return function(){var N=F;F=L;try{return R.apply(this,arguments)}finally{F=N}}}}(So)),So}var Ud;function Fp(){return Ud||(Ud=1,ko.exports=$p()),ko.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function zp(){if(Bd)return Ye;Bd=1;var l=Do(),a=Fp();function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,f={};function w(e,t){E(e,t),E(e+"Capture",t)}function E(e,t){for(f[e]=t,e=0;e<t.length;e++)u.add(t[e])}var _=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),T=Object.prototype.hasOwnProperty,G=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},$={};function F(e){return T.call($,e)?!0:T.call(V,e)?!1:G.test(e)?$[e]=!0:(V[e]=!0,!1)}function X(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function se(e,t,r,s){if(t===null||typeof t>"u"||X(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function J(e,t,r,s,i,o,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=h}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new J(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new J(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new J(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new J(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new J(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new J(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new J(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new J(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new J(e,5,!1,e.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function oe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pe,oe);Q[t]=new J(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pe,oe);Q[t]=new J(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pe,oe);Q[t]=new J(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new J(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new J(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,t,r,s){var i=Q.hasOwnProperty(t)?Q[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(se(t,r,i,s)&&(r=null),s||i===null?F(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var ee=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),q=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Re=Symbol.for("react.strict_mode"),en=Symbol.for("react.profiler"),gn=Symbol.for("react.provider"),_n=Symbol.for("react.context"),an=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),nn=Symbol.for("react.suspense_list"),cn=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),R=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var N=Object.assign,g;function k(e){if(g===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var K=!1;function Y(e,t){if(!e||K)return"";K=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var s=v}Reflect.construct(e,[],t)}else{try{t.call()}catch(v){s=v}e.call(t.prototype)}else{try{throw Error()}catch(v){s=v}e()}}catch(v){if(v&&s&&typeof v.stack=="string"){for(var i=v.stack.split(`
`),o=s.stack.split(`
`),h=i.length-1,p=o.length-1;1<=h&&0<=p&&i[h]!==o[p];)p--;for(;1<=h&&0<=p;h--,p--)if(i[h]!==o[p]){if(h!==1||p!==1)do if(h--,p--,0>p||i[h]!==o[p]){var m=`
`+i[h].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=h&&0<=p);break}}}finally{K=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?k(e):""}function re(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function ne(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case q:return"Portal";case en:return"Profiler";case Re:return"StrictMode";case We:return"Suspense";case nn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _n:return(e.displayName||"Context")+".Consumer";case gn:return(e._context.displayName||"Context")+".Provider";case an:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cn:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(t);case 8:return t===Re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=ce(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(h){s=""+h,o.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(h){s=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mn(e){e._valueTracker||(e._valueTracker=De(e))}function jn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=ce(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bi(e,t){var r=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ho(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=le(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wo(e,t){t=t.checked,t!=null&&ie(e,"checked",t,!1)}function Ei(e,t){Wo(e,t);var r=le(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pi(e,t.type,r):t.hasOwnProperty("defaultValue")&&Pi(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Pi(e,t,r){(t!=="number"||Qr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var lr=Array.isArray;function Pt(e,t,r,s){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&s&&(e[r].defaultSelected=!0)}else{for(r=""+le(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(d(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(d(92));if(lr(r)){if(1<r.length)throw Error(d(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:le(r)}}function Go(e,t){var r=le(t.value),s=le(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Xo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,Ko=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function or(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$u=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){$u.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function Qo(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function Yo(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=Qo(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,i):e[r]=i}}var Fu=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ni(e,t){if(t){if(Fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(d(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(t.style!=null&&typeof t.style!="object")throw Error(d(62))}}function Ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,Tt=null,Rt=null;function Zo(e){if(e=Nr(e)){if(typeof _i!="function")throw Error(d(280));var t=e.stateNode;t&&(t=ws(t),_i(e.stateNode,e.type,t))}}function ea(e){Tt?Rt?Rt.push(e):Rt=[e]:Tt=e}function na(){if(Tt){var e=Tt,t=Rt;if(Rt=Tt=null,Zo(e),t)for(e=0;e<t.length;e++)Zo(t[e])}}function ta(e,t){return e(t)}function ra(){}var Mi=!1;function sa(e,t,r){if(Mi)return e(t,r);Mi=!0;try{return ta(e,t,r)}finally{Mi=!1,(Tt!==null||Rt!==null)&&(ra(),na())}}function cr(e,t){var r=e.stateNode;if(r===null)return null;var s=ws(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(d(231,t,typeof r));return r}var Di=!1;if(_)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Di=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Di=!1}function zu(e,t,r,s,i,o,h,p,m){var v=Array.prototype.slice.call(arguments,3);try{t.apply(r,v)}catch(C){this.onError(C)}}var ur=!1,Zr=null,es=!1,Li=null,Uu={onError:function(e){ur=!0,Zr=e}};function Bu(e,t,r,s,i,o,h,p,m){ur=!1,Zr=null,zu.apply(Uu,arguments)}function Hu(e,t,r,s,i,o,h,p,m){if(Bu.apply(this,arguments),ur){if(ur){var v=Zr;ur=!1,Zr=null}else throw Error(d(198));es||(es=!0,Li=v)}}function ut(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ia(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function la(e){if(ut(e)!==e)throw Error(d(188))}function Wu(e){var t=e.alternate;if(!t){if(t=ut(e),t===null)throw Error(d(188));return t!==e?null:e}for(var r=e,s=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return la(i),e;if(o===s)return la(i),t;o=o.sibling}throw Error(d(188))}if(r.return!==s.return)r=i,s=o;else{for(var h=!1,p=i.child;p;){if(p===r){h=!0,r=i,s=o;break}if(p===s){h=!0,s=i,r=o;break}p=p.sibling}if(!h){for(p=o.child;p;){if(p===r){h=!0,r=o,s=i;break}if(p===s){h=!0,s=o,r=i;break}p=p.sibling}if(!h)throw Error(d(189))}}if(r.alternate!==s)throw Error(d(190))}if(r.tag!==3)throw Error(d(188));return r.stateNode.current===r?e:t}function oa(e){return e=Wu(e),e!==null?aa(e):null}function aa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=aa(e);if(t!==null)return t;e=e.sibling}return null}var ca=a.unstable_scheduleCallback,da=a.unstable_cancelCallback,Vu=a.unstable_shouldYield,Ju=a.unstable_requestPaint,be=a.unstable_now,Gu=a.unstable_getCurrentPriorityLevel,$i=a.unstable_ImmediatePriority,ua=a.unstable_UserBlockingPriority,ns=a.unstable_NormalPriority,Xu=a.unstable_LowPriority,ha=a.unstable_IdlePriority,ts=null,Tn=null;function qu(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Yu,Ku=Math.log,Qu=Math.LN2;function Yu(e){return e>>>=0,e===0?32:31-(Ku(e)/Qu|0)|0}var rs=64,ss=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function is(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,i=e.suspendedLanes,o=e.pingedLanes,h=r&268435455;if(h!==0){var p=h&~i;p!==0?s=hr(p):(o&=h,o!==0&&(s=hr(o)))}else h=r&~i,h!==0?s=hr(h):o!==0&&(s=hr(o));if(s===0)return 0;if(t!==0&&t!==s&&(t&i)===0&&(i=s&-s,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((s&4)!==0&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-yn(t),i=1<<r,s|=e[r],t&=~i;return s}function Zu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eh(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var h=31-yn(o),p=1<<h,m=i[h];m===-1?((p&r)===0||(p&s)!==0)&&(i[h]=Zu(p,t)):m<=t&&(e.expiredLanes|=p),o&=~p}}function Fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pa(){var e=rs;return rs<<=1,(rs&4194240)===0&&(rs=64),e}function zi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function pr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yn(t),e[t]=r}function nh(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-yn(r),o=1<<i;t[i]=0,s[i]=-1,e[i]=-1,r&=~o}}function Ui(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-yn(r),i=1<<s;i&t|e[s]&t&&(e[s]|=t),r&=~i}}var me=0;function fa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ma,Bi,xa,ga,ja,Hi=!1,ls=[],Vn=null,Jn=null,Gn=null,fr=new Map,mr=new Map,Xn=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ya(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(t.pointerId)}}function xr(e,t,r,s,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Nr(t),t!==null&&Bi(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rh(e,t,r,s,i){switch(t){case"focusin":return Vn=xr(Vn,e,t,r,s,i),!0;case"dragenter":return Jn=xr(Jn,e,t,r,s,i),!0;case"mouseover":return Gn=xr(Gn,e,t,r,s,i),!0;case"pointerover":var o=i.pointerId;return fr.set(o,xr(fr.get(o)||null,e,t,r,s,i)),!0;case"gotpointercapture":return o=i.pointerId,mr.set(o,xr(mr.get(o)||null,e,t,r,s,i)),!0}return!1}function va(e){var t=ht(e.target);if(t!==null){var r=ut(t);if(r!==null){if(t=r.tag,t===13){if(t=ia(r),t!==null){e.blockedOn=t,ja(e.priority,function(){xa(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Oi=s,r.target.dispatchEvent(s),Oi=null}else return t=Nr(r),t!==null&&Bi(t),e.blockedOn=r,!1;t.shift()}return!0}function wa(e,t,r){os(e)&&r.delete(t)}function sh(){Hi=!1,Vn!==null&&os(Vn)&&(Vn=null),Jn!==null&&os(Jn)&&(Jn=null),Gn!==null&&os(Gn)&&(Gn=null),fr.forEach(wa),mr.forEach(wa)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Hi||(Hi=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,sh)))}function jr(e){function t(i){return gr(i,e)}if(0<ls.length){gr(ls[0],e);for(var r=1;r<ls.length;r++){var s=ls[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Vn!==null&&gr(Vn,e),Jn!==null&&gr(Jn,e),Gn!==null&&gr(Gn,e),fr.forEach(t),mr.forEach(t),r=0;r<Xn.length;r++)s=Xn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Xn.length&&(r=Xn[0],r.blockedOn===null);)va(r),r.blockedOn===null&&Xn.shift()}var Nt=ee.ReactCurrentBatchConfig,as=!0;function ih(e,t,r,s){var i=me,o=Nt.transition;Nt.transition=null;try{me=1,Wi(e,t,r,s)}finally{me=i,Nt.transition=o}}function lh(e,t,r,s){var i=me,o=Nt.transition;Nt.transition=null;try{me=4,Wi(e,t,r,s)}finally{me=i,Nt.transition=o}}function Wi(e,t,r,s){if(as){var i=Vi(e,t,r,s);if(i===null)al(e,t,s,cs,r),ya(e,s);else if(rh(i,e,t,r,s))s.stopPropagation();else if(ya(e,s),t&4&&-1<th.indexOf(e)){for(;i!==null;){var o=Nr(i);if(o!==null&&ma(o),o=Vi(e,t,r,s),o===null&&al(e,t,s,cs,r),o===i)break;i=o}i!==null&&s.stopPropagation()}else al(e,t,s,null,r)}}var cs=null;function Vi(e,t,r,s){if(cs=null,e=Ai(s),e=ht(e),e!==null)if(t=ut(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ia(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cs=e,null}function ka(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gu()){case $i:return 1;case ua:return 4;case ns:case Xu:return 16;case ha:return 536870912;default:return 16}default:return 16}}var qn=null,Ji=null,ds=null;function Sa(){if(ds)return ds;var e,t=Ji,r=t.length,s,i="value"in qn?qn.value:qn.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var h=r-e;for(s=1;s<=h&&t[r-s]===i[o-s];s++);return ds=i.slice(e,1<s?1-s:void 0)}function us(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hs(){return!0}function Ca(){return!1}function tn(e){function t(r,s,i,o,h){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=o,this.target=h,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hs:Ca,this.isPropagationStopped=Ca,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),t}var It={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=tn(It),yr=N({},It,{view:0,detail:0}),oh=tn(yr),Xi,qi,vr,ps=N({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Xi=e.screenX-vr.screenX,qi=e.screenY-vr.screenY):qi=Xi=0,vr=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),ba=tn(ps),ah=N({},ps,{dataTransfer:0}),ch=tn(ah),dh=N({},yr,{relatedTarget:0}),Ki=tn(dh),uh=N({},It,{animationName:0,elapsedTime:0,pseudoElement:0}),hh=tn(uh),ph=N({},It,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fh=tn(ph),mh=N({},It,{data:0}),Ea=tn(mh),xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jh[e])?!!t[e]:!1}function Qi(){return yh}var vh=N({},yr,{key:function(e){if(e.key){var t=xh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qi,charCode:function(e){return e.type==="keypress"?us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wh=tn(vh),kh=N({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pa=tn(kh),Sh=N({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qi}),Ch=tn(Sh),bh=N({},It,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eh=tn(bh),Ph=N({},ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Th=tn(Ph),Rh=[9,13,27,32],Yi=_&&"CompositionEvent"in window,wr=null;_&&"documentMode"in document&&(wr=document.documentMode);var Nh=_&&"TextEvent"in window&&!wr,Ta=_&&(!Yi||wr&&8<wr&&11>=wr),Ra=" ",Na=!1;function Ia(e,t){switch(e){case"keyup":return Rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Ih(e,t){switch(e){case"compositionend":return Oa(t);case"keypress":return t.which!==32?null:(Na=!0,Ra);case"textInput":return e=t.data,e===Ra&&Na?null:e;default:return null}}function Oh(e,t){if(Ot)return e==="compositionend"||!Yi&&Ia(e,t)?(e=Sa(),ds=Ji=qn=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ta&&t.locale!=="ko"?null:t.data;default:return null}}var Ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ah[e.type]:t==="textarea"}function _a(e,t,r,s){ea(s),t=js(t,"onChange"),0<t.length&&(r=new Gi("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var kr=null,Sr=null;function _h(e){Ya(e,0)}function fs(e){var t=Lt(e);if(jn(t))return e}function Mh(e,t){if(e==="change")return t}var Ma=!1;if(_){var Zi;if(_){var el="oninput"in document;if(!el){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),el=typeof Da.oninput=="function"}Zi=el}else Zi=!1;Ma=Zi&&(!document.documentMode||9<document.documentMode)}function La(){kr&&(kr.detachEvent("onpropertychange",$a),Sr=kr=null)}function $a(e){if(e.propertyName==="value"&&fs(Sr)){var t=[];_a(t,Sr,e,Ai(e)),sa(_h,t)}}function Dh(e,t,r){e==="focusin"?(La(),kr=t,Sr=r,kr.attachEvent("onpropertychange",$a)):e==="focusout"&&La()}function Lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fs(Sr)}function $h(e,t){if(e==="click")return fs(t)}function Fh(e,t){if(e==="input"||e==="change")return fs(t)}function zh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vn=typeof Object.is=="function"?Object.is:zh;function Cr(e,t){if(vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!T.call(t,i)||!vn(e[i],t[i]))return!1}return!0}function Fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var r=Fa(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Fa(r)}}function Ua(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ua(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ba(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Qr(e.document)}return t}function nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uh(e){var t=Ba(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ua(r.ownerDocument.documentElement,r)){if(s!==null&&nl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(s.start,i);s=s.end===void 0?o:Math.min(s.end,i),!e.extend&&o>s&&(i=s,s=o,o=i),i=za(r,o);var h=za(r,s);i&&h&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bh=_&&"documentMode"in document&&11>=document.documentMode,At=null,tl=null,br=null,rl=!1;function Ha(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;rl||At==null||At!==Qr(s)||(s=At,"selectionStart"in s&&nl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),br&&Cr(br,s)||(br=s,s=js(tl,"onSelect"),0<s.length&&(t=new Gi("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=At)))}function ms(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var _t={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionend:ms("Transition","TransitionEnd")},sl={},Wa={};_&&(Wa=document.createElement("div").style,"AnimationEvent"in window||(delete _t.animationend.animation,delete _t.animationiteration.animation,delete _t.animationstart.animation),"TransitionEvent"in window||delete _t.transitionend.transition);function xs(e){if(sl[e])return sl[e];if(!_t[e])return e;var t=_t[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Wa)return sl[e]=t[r];return e}var Va=xs("animationend"),Ja=xs("animationiteration"),Ga=xs("animationstart"),Xa=xs("transitionend"),qa=new Map,Ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){qa.set(e,t),w(t,[e])}for(var il=0;il<Ka.length;il++){var ll=Ka[il],Hh=ll.toLowerCase(),Wh=ll[0].toUpperCase()+ll.slice(1);Kn(Hh,"on"+Wh)}Kn(Va,"onAnimationEnd"),Kn(Ja,"onAnimationIteration"),Kn(Ga,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(Xa,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function Qa(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Hu(s,t,void 0,e),e.currentTarget=null}function Ya(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],i=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var h=s.length-1;0<=h;h--){var p=s[h],m=p.instance,v=p.currentTarget;if(p=p.listener,m!==o&&i.isPropagationStopped())break e;Qa(i,p,v),o=m}else for(h=0;h<s.length;h++){if(p=s[h],m=p.instance,v=p.currentTarget,p=p.listener,m!==o&&i.isPropagationStopped())break e;Qa(i,p,v),o=m}}}if(es)throw e=Li,es=!1,Li=null,e}function je(e,t){var r=t[fl];r===void 0&&(r=t[fl]=new Set);var s=e+"__bubble";r.has(s)||(Za(t,e,2,!1),r.add(s))}function ol(e,t,r){var s=0;t&&(s|=4),Za(r,e,s,t)}var gs="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[gs]){e[gs]=!0,u.forEach(function(r){r!=="selectionchange"&&(Vh.has(r)||ol(r,!1,e),ol(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gs]||(t[gs]=!0,ol("selectionchange",!1,t))}}function Za(e,t,r,s){switch(ka(t)){case 1:var i=ih;break;case 4:i=lh;break;default:i=Wi}r=i.bind(null,t,r,e),i=void 0,!Di||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function al(e,t,r,s,i){var o=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var h=s.tag;if(h===3||h===4){var p=s.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(h===4)for(h=s.return;h!==null;){var m=h.tag;if((m===3||m===4)&&(m=h.stateNode.containerInfo,m===i||m.nodeType===8&&m.parentNode===i))return;h=h.return}for(;p!==null;){if(h=ht(p),h===null)return;if(m=h.tag,m===5||m===6){s=o=h;continue e}p=p.parentNode}}s=s.return}sa(function(){var v=o,C=Ai(r),b=[];e:{var S=qa.get(e);if(S!==void 0){var I=Gi,A=e;switch(e){case"keypress":if(us(r)===0)break e;case"keydown":case"keyup":I=wh;break;case"focusin":A="focus",I=Ki;break;case"focusout":A="blur",I=Ki;break;case"beforeblur":case"afterblur":I=Ki;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Ch;break;case Va:case Ja:case Ga:I=hh;break;case Xa:I=Eh;break;case"scroll":I=oh;break;case"wheel":I=Th;break;case"copy":case"cut":case"paste":I=fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Pa}var M=(t&4)!==0,Ee=!M&&e==="scroll",j=M?S!==null?S+"Capture":null:S;M=[];for(var x=v,y;x!==null;){y=x;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,j!==null&&(P=cr(x,j),P!=null&&M.push(Tr(x,P,y)))),Ee)break;x=x.return}0<M.length&&(S=new I(S,A,null,r,C),b.push({event:S,listeners:M}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",S&&r!==Oi&&(A=r.relatedTarget||r.fromElement)&&(ht(A)||A[Dn]))break e;if((I||S)&&(S=C.window===C?C:(S=C.ownerDocument)?S.defaultView||S.parentWindow:window,I?(A=r.relatedTarget||r.toElement,I=v,A=A?ht(A):null,A!==null&&(Ee=ut(A),A!==Ee||A.tag!==5&&A.tag!==6)&&(A=null)):(I=null,A=v),I!==A)){if(M=ba,P="onMouseLeave",j="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(M=Pa,P="onPointerLeave",j="onPointerEnter",x="pointer"),Ee=I==null?S:Lt(I),y=A==null?S:Lt(A),S=new M(P,x+"leave",I,r,C),S.target=Ee,S.relatedTarget=y,P=null,ht(C)===v&&(M=new M(j,x+"enter",A,r,C),M.target=y,M.relatedTarget=Ee,P=M),Ee=P,I&&A)n:{for(M=I,j=A,x=0,y=M;y;y=Mt(y))x++;for(y=0,P=j;P;P=Mt(P))y++;for(;0<x-y;)M=Mt(M),x--;for(;0<y-x;)j=Mt(j),y--;for(;x--;){if(M===j||j!==null&&M===j.alternate)break n;M=Mt(M),j=Mt(j)}M=null}else M=null;I!==null&&ec(b,S,I,M,!1),A!==null&&Ee!==null&&ec(b,Ee,A,M,!0)}}e:{if(S=v?Lt(v):window,I=S.nodeName&&S.nodeName.toLowerCase(),I==="select"||I==="input"&&S.type==="file")var D=Mh;else if(Aa(S))if(Ma)D=Fh;else{D=Lh;var z=Dh}else(I=S.nodeName)&&I.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(D=$h);if(D&&(D=D(e,v))){_a(b,D,r,C);break e}z&&z(e,S,v),e==="focusout"&&(z=S._wrapperState)&&z.controlled&&S.type==="number"&&Pi(S,"number",S.value)}switch(z=v?Lt(v):window,e){case"focusin":(Aa(z)||z.contentEditable==="true")&&(At=z,tl=v,br=null);break;case"focusout":br=tl=At=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,Ha(b,r,C);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":Ha(b,r,C)}var U;if(Yi)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Ot?Ia(e,r)&&(W="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(W="onCompositionStart");W&&(Ta&&r.locale!=="ko"&&(Ot||W!=="onCompositionStart"?W==="onCompositionEnd"&&Ot&&(U=Sa()):(qn=C,Ji="value"in qn?qn.value:qn.textContent,Ot=!0)),z=js(v,W),0<z.length&&(W=new Ea(W,e,null,r,C),b.push({event:W,listeners:z}),U?W.data=U:(U=Oa(r),U!==null&&(W.data=U)))),(U=Nh?Ih(e,r):Oh(e,r))&&(v=js(v,"onBeforeInput"),0<v.length&&(C=new Ea("onBeforeInput","beforeinput",null,r,C),b.push({event:C,listeners:v}),C.data=U))}Ya(b,t)})}function Tr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function js(e,t){for(var r=t+"Capture",s=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=cr(e,r),o!=null&&s.unshift(Tr(e,o,i)),o=cr(e,t),o!=null&&s.push(Tr(e,o,i))),e=e.return}return s}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ec(e,t,r,s,i){for(var o=t._reactName,h=[];r!==null&&r!==s;){var p=r,m=p.alternate,v=p.stateNode;if(m!==null&&m===s)break;p.tag===5&&v!==null&&(p=v,i?(m=cr(r,o),m!=null&&h.unshift(Tr(r,m,p))):i||(m=cr(r,o),m!=null&&h.push(Tr(r,m,p)))),r=r.return}h.length!==0&&e.push({event:t,listeners:h})}var Jh=/\r\n?/g,Gh=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(Jh,`
`).replace(Gh,"")}function ys(e,t,r){if(t=nc(t),nc(e)!==t&&r)throw Error(d(425))}function vs(){}var cl=null,dl=null;function ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,Xh=typeof clearTimeout=="function"?clearTimeout:void 0,tc=typeof Promise=="function"?Promise:void 0,qh=typeof queueMicrotask=="function"?queueMicrotask:typeof tc<"u"?function(e){return tc.resolve(null).then(e).catch(Kh)}:hl;function Kh(e){setTimeout(function(){throw e})}function pl(e,t){var r=t,s=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){e.removeChild(i),jr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);jr(t)}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Dt=Math.random().toString(36).slice(2),Rn="__reactFiber$"+Dt,Rr="__reactProps$"+Dt,Dn="__reactContainer$"+Dt,fl="__reactEvents$"+Dt,Qh="__reactListeners$"+Dt,Yh="__reactHandles$"+Dt;function ht(e){var t=e[Rn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Dn]||r[Rn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=rc(e);e!==null;){if(r=e[Rn])return r;e=rc(e)}return t}e=r,r=e.parentNode}return null}function Nr(e){return e=e[Rn]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function ws(e){return e[Rr]||null}var ml=[],$t=-1;function Yn(e){return{current:e}}function ye(e){0>$t||(e.current=ml[$t],ml[$t]=null,$t--)}function ge(e,t){$t++,ml[$t]=e.current,e.current=t}var Zn={},ze=Yn(Zn),Ge=Yn(!1),pt=Zn;function Ft(e,t){var r=e.type.contextTypes;if(!r)return Zn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function ks(){ye(Ge),ye(ze)}function sc(e,t,r){if(ze.current!==Zn)throw Error(d(168));ge(ze,t),ge(Ge,r)}function ic(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(d(108,he(e)||"Unknown",i));return N({},r,s)}function Ss(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,pt=ze.current,ge(ze,e),ge(Ge,Ge.current),!0}function lc(e,t,r){var s=e.stateNode;if(!s)throw Error(d(169));r?(e=ic(e,t,pt),s.__reactInternalMemoizedMergedChildContext=e,ye(Ge),ye(ze),ge(ze,e)):ye(Ge),ge(Ge,r)}var Ln=null,Cs=!1,xl=!1;function oc(e){Ln===null?Ln=[e]:Ln.push(e)}function Zh(e){Cs=!0,oc(e)}function et(){if(!xl&&Ln!==null){xl=!0;var e=0,t=me;try{var r=Ln;for(me=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Ln=null,Cs=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(e+1)),ca($i,et),i}finally{me=t,xl=!1}}return null}var zt=[],Ut=0,bs=null,Es=0,dn=[],un=0,ft=null,$n=1,Fn="";function mt(e,t){zt[Ut++]=Es,zt[Ut++]=bs,bs=e,Es=t}function ac(e,t,r){dn[un++]=$n,dn[un++]=Fn,dn[un++]=ft,ft=e;var s=$n;e=Fn;var i=32-yn(s)-1;s&=~(1<<i),r+=1;var o=32-yn(t)+i;if(30<o){var h=i-i%5;o=(s&(1<<h)-1).toString(32),s>>=h,i-=h,$n=1<<32-yn(t)+i|r<<i|s,Fn=o+e}else $n=1<<o|r<<i|s,Fn=e}function gl(e){e.return!==null&&(mt(e,1),ac(e,1,0))}function jl(e){for(;e===bs;)bs=zt[--Ut],zt[Ut]=null,Es=zt[--Ut],zt[Ut]=null;for(;e===ft;)ft=dn[--un],dn[un]=null,Fn=dn[--un],dn[un]=null,$n=dn[--un],dn[un]=null}var rn=null,sn=null,we=!1,wn=null;function cc(e,t){var r=mn(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function dc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rn=e,sn=Qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rn=e,sn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ft!==null?{id:$n,overflow:Fn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=mn(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,rn=e,sn=null,!0):!1;default:return!1}}function yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vl(e){if(we){var t=sn;if(t){var r=t;if(!dc(e,t)){if(yl(e))throw Error(d(418));t=Qn(r.nextSibling);var s=rn;t&&dc(e,t)?cc(s,r):(e.flags=e.flags&-4097|2,we=!1,rn=e)}}else{if(yl(e))throw Error(d(418));e.flags=e.flags&-4097|2,we=!1,rn=e}}}function uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function Ps(e){if(e!==rn)return!1;if(!we)return uc(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ul(e.type,e.memoizedProps)),t&&(t=sn)){if(yl(e))throw hc(),Error(d(418));for(;t;)cc(e,t),t=Qn(t.nextSibling)}if(uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){sn=Qn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}sn=null}}else sn=rn?Qn(e.stateNode.nextSibling):null;return!0}function hc(){for(var e=sn;e;)e=Qn(e.nextSibling)}function Bt(){sn=rn=null,we=!1}function wl(e){wn===null?wn=[e]:wn.push(e)}var ep=ee.ReactCurrentBatchConfig;function Ir(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(d(309));var s=r.stateNode}if(!s)throw Error(d(147,e));var i=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(h){var p=i.refs;h===null?delete p[o]:p[o]=h},t._stringRef=o,t)}if(typeof e!="string")throw Error(d(284));if(!r._owner)throw Error(d(290,e))}return e}function Ts(e,t){throw e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pc(e){var t=e._init;return t(e._payload)}function fc(e){function t(j,x){if(e){var y=j.deletions;y===null?(j.deletions=[x],j.flags|=16):y.push(x)}}function r(j,x){if(!e)return null;for(;x!==null;)t(j,x),x=x.sibling;return null}function s(j,x){for(j=new Map;x!==null;)x.key!==null?j.set(x.key,x):j.set(x.index,x),x=x.sibling;return j}function i(j,x){return j=at(j,x),j.index=0,j.sibling=null,j}function o(j,x,y){return j.index=y,e?(y=j.alternate,y!==null?(y=y.index,y<x?(j.flags|=2,x):y):(j.flags|=2,x)):(j.flags|=1048576,x)}function h(j){return e&&j.alternate===null&&(j.flags|=2),j}function p(j,x,y,P){return x===null||x.tag!==6?(x=po(y,j.mode,P),x.return=j,x):(x=i(x,y),x.return=j,x)}function m(j,x,y,P){var D=y.type;return D===B?C(j,x,y.props.children,P,y.key):x!==null&&(x.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Fe&&pc(D)===x.type)?(P=i(x,y.props),P.ref=Ir(j,x,y),P.return=j,P):(P=Ys(y.type,y.key,y.props,null,j.mode,P),P.ref=Ir(j,x,y),P.return=j,P)}function v(j,x,y,P){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=fo(y,j.mode,P),x.return=j,x):(x=i(x,y.children||[]),x.return=j,x)}function C(j,x,y,P,D){return x===null||x.tag!==7?(x=St(y,j.mode,P,D),x.return=j,x):(x=i(x,y),x.return=j,x)}function b(j,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=po(""+x,j.mode,y),x.return=j,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ue:return y=Ys(x.type,x.key,x.props,null,j.mode,y),y.ref=Ir(j,null,x),y.return=j,y;case q:return x=fo(x,j.mode,y),x.return=j,x;case Fe:var P=x._init;return b(j,P(x._payload),y)}if(lr(x)||L(x))return x=St(x,j.mode,y,null),x.return=j,x;Ts(j,x)}return null}function S(j,x,y,P){var D=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return D!==null?null:p(j,x,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ue:return y.key===D?m(j,x,y,P):null;case q:return y.key===D?v(j,x,y,P):null;case Fe:return D=y._init,S(j,x,D(y._payload),P)}if(lr(y)||L(y))return D!==null?null:C(j,x,y,P,null);Ts(j,y)}return null}function I(j,x,y,P,D){if(typeof P=="string"&&P!==""||typeof P=="number")return j=j.get(y)||null,p(x,j,""+P,D);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ue:return j=j.get(P.key===null?y:P.key)||null,m(x,j,P,D);case q:return j=j.get(P.key===null?y:P.key)||null,v(x,j,P,D);case Fe:var z=P._init;return I(j,x,y,z(P._payload),D)}if(lr(P)||L(P))return j=j.get(y)||null,C(x,j,P,D,null);Ts(x,P)}return null}function A(j,x,y,P){for(var D=null,z=null,U=x,W=x=0,_e=null;U!==null&&W<y.length;W++){U.index>W?(_e=U,U=null):_e=U.sibling;var de=S(j,U,y[W],P);if(de===null){U===null&&(U=_e);break}e&&U&&de.alternate===null&&t(j,U),x=o(de,x,W),z===null?D=de:z.sibling=de,z=de,U=_e}if(W===y.length)return r(j,U),we&&mt(j,W),D;if(U===null){for(;W<y.length;W++)U=b(j,y[W],P),U!==null&&(x=o(U,x,W),z===null?D=U:z.sibling=U,z=U);return we&&mt(j,W),D}for(U=s(j,U);W<y.length;W++)_e=I(U,j,W,y[W],P),_e!==null&&(e&&_e.alternate!==null&&U.delete(_e.key===null?W:_e.key),x=o(_e,x,W),z===null?D=_e:z.sibling=_e,z=_e);return e&&U.forEach(function(ct){return t(j,ct)}),we&&mt(j,W),D}function M(j,x,y,P){var D=L(y);if(typeof D!="function")throw Error(d(150));if(y=D.call(y),y==null)throw Error(d(151));for(var z=D=null,U=x,W=x=0,_e=null,de=y.next();U!==null&&!de.done;W++,de=y.next()){U.index>W?(_e=U,U=null):_e=U.sibling;var ct=S(j,U,de.value,P);if(ct===null){U===null&&(U=_e);break}e&&U&&ct.alternate===null&&t(j,U),x=o(ct,x,W),z===null?D=ct:z.sibling=ct,z=ct,U=_e}if(de.done)return r(j,U),we&&mt(j,W),D;if(U===null){for(;!de.done;W++,de=y.next())de=b(j,de.value,P),de!==null&&(x=o(de,x,W),z===null?D=de:z.sibling=de,z=de);return we&&mt(j,W),D}for(U=s(j,U);!de.done;W++,de=y.next())de=I(U,j,W,de.value,P),de!==null&&(e&&de.alternate!==null&&U.delete(de.key===null?W:de.key),x=o(de,x,W),z===null?D=de:z.sibling=de,z=de);return e&&U.forEach(function(Ap){return t(j,Ap)}),we&&mt(j,W),D}function Ee(j,x,y,P){if(typeof y=="object"&&y!==null&&y.type===B&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ue:e:{for(var D=y.key,z=x;z!==null;){if(z.key===D){if(D=y.type,D===B){if(z.tag===7){r(j,z.sibling),x=i(z,y.props.children),x.return=j,j=x;break e}}else if(z.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Fe&&pc(D)===z.type){r(j,z.sibling),x=i(z,y.props),x.ref=Ir(j,z,y),x.return=j,j=x;break e}r(j,z);break}else t(j,z);z=z.sibling}y.type===B?(x=St(y.props.children,j.mode,P,y.key),x.return=j,j=x):(P=Ys(y.type,y.key,y.props,null,j.mode,P),P.ref=Ir(j,x,y),P.return=j,j=P)}return h(j);case q:e:{for(z=y.key;x!==null;){if(x.key===z)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){r(j,x.sibling),x=i(x,y.children||[]),x.return=j,j=x;break e}else{r(j,x);break}else t(j,x);x=x.sibling}x=fo(y,j.mode,P),x.return=j,j=x}return h(j);case Fe:return z=y._init,Ee(j,x,z(y._payload),P)}if(lr(y))return A(j,x,y,P);if(L(y))return M(j,x,y,P);Ts(j,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(r(j,x.sibling),x=i(x,y),x.return=j,j=x):(r(j,x),x=po(y,j.mode,P),x.return=j,j=x),h(j)):r(j,x)}return Ee}var Ht=fc(!0),mc=fc(!1),Rs=Yn(null),Ns=null,Wt=null,kl=null;function Sl(){kl=Wt=Ns=null}function Cl(e){var t=Rs.current;ye(Rs),e._currentValue=t}function bl(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Vt(e,t){Ns=e,kl=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(qe=!0),e.firstContext=null)}function hn(e){var t=e._currentValue;if(kl!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Ns===null)throw Error(d(308));Wt=e,Ns.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var xt=null;function El(e){xt===null?xt=[e]:xt.push(e)}function xc(e,t,r,s){var i=t.interleaved;return i===null?(r.next=r,El(t)):(r.next=i.next,i.next=r),t.interleaved=r,zn(e,s)}function zn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var nt=!1;function Pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tt(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ae&2)!==0){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,zn(e,r)}return i=s.interleaved,i===null?(t.next=t,El(s)):(t.next=i.next,i.next=t),s.interleaved=t,zn(e,r)}function Is(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Ui(e,r)}}function jc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=h:o=o.next=h,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Os(e,t,r,s){var i=e.updateQueue;nt=!1;var o=i.firstBaseUpdate,h=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var m=p,v=m.next;m.next=null,h===null?o=v:h.next=v,h=m;var C=e.alternate;C!==null&&(C=C.updateQueue,p=C.lastBaseUpdate,p!==h&&(p===null?C.firstBaseUpdate=v:p.next=v,C.lastBaseUpdate=m))}if(o!==null){var b=i.baseState;h=0,C=v=m=null,p=o;do{var S=p.lane,I=p.eventTime;if((s&S)===S){C!==null&&(C=C.next={eventTime:I,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var A=e,M=p;switch(S=t,I=r,M.tag){case 1:if(A=M.payload,typeof A=="function"){b=A.call(I,b,S);break e}b=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=M.payload,S=typeof A=="function"?A.call(I,b,S):A,S==null)break e;b=N({},b,S);break e;case 2:nt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,S=i.effects,S===null?i.effects=[p]:S.push(p))}else I={eventTime:I,lane:S,tag:p.tag,payload:p.payload,callback:p.callback,next:null},C===null?(v=C=I,m=b):C=C.next=I,h|=S;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;S=p,p=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(C===null&&(m=b),i.baseState=m,i.firstBaseUpdate=v,i.lastBaseUpdate=C,t=i.shared.interleaved,t!==null){i=t;do h|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yt|=h,e.lanes=h,e.memoizedState=b}}function yc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(d(191,i));i.call(s)}}}var Or={},Nn=Yn(Or),Ar=Yn(Or),_r=Yn(Or);function gt(e){if(e===Or)throw Error(d(174));return e}function Tl(e,t){switch(ge(_r,t),ge(Ar,e),ge(Nn,Or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ri(t,e)}ye(Nn),ge(Nn,t)}function Jt(){ye(Nn),ye(Ar),ye(_r)}function vc(e){gt(_r.current);var t=gt(Nn.current),r=Ri(t,e.type);t!==r&&(ge(Ar,e),ge(Nn,r))}function Rl(e){Ar.current===e&&(ye(Nn),ye(Ar))}var ke=Yn(0);function As(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function Il(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var _s=ee.ReactCurrentDispatcher,Ol=ee.ReactCurrentBatchConfig,jt=0,Se=null,Ne=null,Oe=null,Ms=!1,Mr=!1,Dr=0,np=0;function Ue(){throw Error(d(321))}function Al(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!vn(e[r],t[r]))return!1;return!0}function _l(e,t,r,s,i,o){if(jt=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_s.current=e===null||e.memoizedState===null?ip:lp,e=r(s,i),Mr){o=0;do{if(Mr=!1,Dr=0,25<=o)throw Error(d(301));o+=1,Oe=Ne=null,t.updateQueue=null,_s.current=op,e=r(s,i)}while(Mr)}if(_s.current=$s,t=Ne!==null&&Ne.next!==null,jt=0,Oe=Ne=Se=null,Ms=!1,t)throw Error(d(300));return e}function Ml(){var e=Dr!==0;return Dr=0,e}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Se.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function pn(){if(Ne===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Oe===null?Se.memoizedState:Oe.next;if(t!==null)Oe=t,Ne=e;else{if(e===null)throw Error(d(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Oe===null?Se.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Lr(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=pn(),r=t.queue;if(r===null)throw Error(d(311));r.lastRenderedReducer=e;var s=Ne,i=s.baseQueue,o=r.pending;if(o!==null){if(i!==null){var h=i.next;i.next=o.next,o.next=h}s.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,s=s.baseState;var p=h=null,m=null,v=o;do{var C=v.lane;if((jt&C)===C)m!==null&&(m=m.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),s=v.hasEagerState?v.eagerState:e(s,v.action);else{var b={lane:C,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};m===null?(p=m=b,h=s):m=m.next=b,Se.lanes|=C,yt|=C}v=v.next}while(v!==null&&v!==o);m===null?h=s:m.next=p,vn(s,t.memoizedState)||(qe=!0),t.memoizedState=s,t.baseState=h,t.baseQueue=m,r.lastRenderedState=s}if(e=r.interleaved,e!==null){i=e;do o=i.lane,Se.lanes|=o,yt|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ll(e){var t=pn(),r=t.queue;if(r===null)throw Error(d(311));r.lastRenderedReducer=e;var s=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var h=i=i.next;do o=e(o,h.action),h=h.next;while(h!==i);vn(o,t.memoizedState)||(qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,s]}function wc(){}function kc(e,t){var r=Se,s=pn(),i=t(),o=!vn(s.memoizedState,i);if(o&&(s.memoizedState=i,qe=!0),s=s.queue,$l(bc.bind(null,r,s,e),[e]),s.getSnapshot!==t||o||Oe!==null&&Oe.memoizedState.tag&1){if(r.flags|=2048,$r(9,Cc.bind(null,r,s,i,t),void 0,null),Ae===null)throw Error(d(349));(jt&30)!==0||Sc(r,t,i)}return i}function Sc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Cc(e,t,r,s){t.value=r,t.getSnapshot=s,Ec(t)&&Pc(e)}function bc(e,t,r){return r(function(){Ec(t)&&Pc(e)})}function Ec(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!vn(e,r)}catch{return!0}}function Pc(e){var t=zn(e,1);t!==null&&bn(t,e,1,-1)}function Tc(e){var t=In();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=sp.bind(null,Se,e),[t.memoizedState,e]}function $r(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Rc(){return pn().memoizedState}function Ds(e,t,r,s){var i=In();Se.flags|=e,i.memoizedState=$r(1|t,r,void 0,s===void 0?null:s)}function Ls(e,t,r,s){var i=pn();s=s===void 0?null:s;var o=void 0;if(Ne!==null){var h=Ne.memoizedState;if(o=h.destroy,s!==null&&Al(s,h.deps)){i.memoizedState=$r(t,r,o,s);return}}Se.flags|=e,i.memoizedState=$r(1|t,r,o,s)}function Nc(e,t){return Ds(8390656,8,e,t)}function $l(e,t){return Ls(2048,8,e,t)}function Ic(e,t){return Ls(4,2,e,t)}function Oc(e,t){return Ls(4,4,e,t)}function Ac(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _c(e,t,r){return r=r!=null?r.concat([e]):null,Ls(4,4,Ac.bind(null,t,e),r)}function Fl(){}function Mc(e,t){var r=pn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Al(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Dc(e,t){var r=pn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Al(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Lc(e,t,r){return(jt&21)===0?(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=r):(vn(r,t)||(r=pa(),Se.lanes|=r,yt|=r,e.baseState=!0),t)}function tp(e,t){var r=me;me=r!==0&&4>r?r:4,e(!0);var s=Ol.transition;Ol.transition={};try{e(!1),t()}finally{me=r,Ol.transition=s}}function $c(){return pn().memoizedState}function rp(e,t,r){var s=lt(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Fc(e))zc(t,r);else if(r=xc(e,t,r,s),r!==null){var i=Je();bn(r,e,s,i),Uc(r,t,s)}}function sp(e,t,r){var s=lt(e),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))zc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var h=t.lastRenderedState,p=o(h,r);if(i.hasEagerState=!0,i.eagerState=p,vn(p,h)){var m=t.interleaved;m===null?(i.next=i,El(t)):(i.next=m.next,m.next=i),t.interleaved=i;return}}catch{}finally{}r=xc(e,t,i,s),r!==null&&(i=Je(),bn(r,e,s,i),Uc(r,t,s))}}function Fc(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function zc(e,t){Mr=Ms=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Uc(e,t,r){if((r&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Ui(e,r)}}var $s={readContext:hn,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},ip={readContext:hn,useCallback:function(e,t){return In().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:Nc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ds(4194308,4,Ac.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ds(4,2,e,t)},useMemo:function(e,t){var r=In();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=In();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=rp.bind(null,Se,e),[s.memoizedState,e]},useRef:function(e){var t=In();return e={current:e},t.memoizedState=e},useState:Tc,useDebugValue:Fl,useDeferredValue:function(e){return In().memoizedState=e},useTransition:function(){var e=Tc(!1),t=e[0];return e=tp.bind(null,e[1]),In().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Se,i=In();if(we){if(r===void 0)throw Error(d(407));r=r()}else{if(r=t(),Ae===null)throw Error(d(349));(jt&30)!==0||Sc(s,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Nc(bc.bind(null,s,o,e),[e]),s.flags|=2048,$r(9,Cc.bind(null,s,o,r,t),void 0,null),r},useId:function(){var e=In(),t=Ae.identifierPrefix;if(we){var r=Fn,s=$n;r=(s&~(1<<32-yn(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Dr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=np++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lp={readContext:hn,useCallback:Mc,useContext:hn,useEffect:$l,useImperativeHandle:_c,useInsertionEffect:Ic,useLayoutEffect:Oc,useMemo:Dc,useReducer:Dl,useRef:Rc,useState:function(){return Dl(Lr)},useDebugValue:Fl,useDeferredValue:function(e){var t=pn();return Lc(t,Ne.memoizedState,e)},useTransition:function(){var e=Dl(Lr)[0],t=pn().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:kc,useId:$c,unstable_isNewReconciler:!1},op={readContext:hn,useCallback:Mc,useContext:hn,useEffect:$l,useImperativeHandle:_c,useInsertionEffect:Ic,useLayoutEffect:Oc,useMemo:Dc,useReducer:Ll,useRef:Rc,useState:function(){return Ll(Lr)},useDebugValue:Fl,useDeferredValue:function(e){var t=pn();return Ne===null?t.memoizedState=e:Lc(t,Ne.memoizedState,e)},useTransition:function(){var e=Ll(Lr)[0],t=pn().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:kc,useId:$c,unstable_isNewReconciler:!1};function kn(e,t){if(e&&e.defaultProps){t=N({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function zl(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:N({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Fs={isMounted:function(e){return(e=e._reactInternals)?ut(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Je(),i=lt(e),o=Un(s,i);o.payload=t,r!=null&&(o.callback=r),t=tt(e,o,i),t!==null&&(bn(t,e,i,s),Is(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Je(),i=lt(e),o=Un(s,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=tt(e,o,i),t!==null&&(bn(t,e,i,s),Is(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Je(),s=lt(e),i=Un(r,s);i.tag=2,t!=null&&(i.callback=t),t=tt(e,i,s),t!==null&&(bn(t,e,s,r),Is(t,e,s))}};function Bc(e,t,r,s,i,o,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,h):t.prototype&&t.prototype.isPureReactComponent?!Cr(r,s)||!Cr(i,o):!0}function Hc(e,t,r){var s=!1,i=Zn,o=t.contextType;return typeof o=="object"&&o!==null?o=hn(o):(i=Xe(t)?pt:ze.current,s=t.contextTypes,o=(s=s!=null)?Ft(e,i):Zn),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fs,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Fs.enqueueReplaceState(t,t.state,null)}function Ul(e,t,r,s){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Pl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=hn(o):(o=Xe(t)?pt:ze.current,i.context=Ft(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zl(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fs.enqueueReplaceState(i,i.state,null),Os(e,r,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gt(e,t){try{var r="",s=t;do r+=re(s),s=s.return;while(s);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var ap=typeof WeakMap=="function"?WeakMap:Map;function Vc(e,t,r){r=Un(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Js||(Js=!0,so=s),Hl(e,t)},r}function Jc(e,t,r){r=Un(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){Hl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Hl(e,t),typeof s!="function"&&(st===null?st=new Set([this]):st.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function Gc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new ap;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),e=kp.bind(null,e,t,r),t.then(e,e))}function Xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qc(e,t,r,s,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Un(-1,1),t.tag=2,tt(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var cp=ee.ReactCurrentOwner,qe=!1;function Ve(e,t,r,s){t.child=e===null?mc(t,null,r,s):Ht(t,e.child,r,s)}function Kc(e,t,r,s,i){r=r.render;var o=t.ref;return Vt(t,i),s=_l(e,t,r,s,o,i),r=Ml(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bn(e,t,i)):(we&&r&&gl(t),t.flags|=1,Ve(e,t,s,i),t.child)}function Qc(e,t,r,s,i){if(e===null){var o=r.type;return typeof o=="function"&&!ho(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Yc(e,t,o,s,i)):(e=Ys(r.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var h=o.memoizedProps;if(r=r.compare,r=r!==null?r:Cr,r(h,s)&&e.ref===t.ref)return Bn(e,t,i)}return t.flags|=1,e=at(o,s),e.ref=t.ref,e.return=t,t.child=e}function Yc(e,t,r,s,i){if(e!==null){var o=e.memoizedProps;if(Cr(o,s)&&e.ref===t.ref)if(qe=!1,t.pendingProps=s=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Bn(e,t,i)}return Wl(e,t,r,s,i)}function Zc(e,t,r){var s=t.pendingProps,i=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(qt,ln),ln|=r;else{if((r&1073741824)===0)return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(qt,ln),ln|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,ge(qt,ln),ln|=s}else o!==null?(s=o.baseLanes|r,t.memoizedState=null):s=r,ge(qt,ln),ln|=s;return Ve(e,t,i,r),t.child}function ed(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,r,s,i){var o=Xe(r)?pt:ze.current;return o=Ft(t,o),Vt(t,i),r=_l(e,t,r,s,o,i),s=Ml(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bn(e,t,i)):(we&&s&&gl(t),t.flags|=1,Ve(e,t,r,i),t.child)}function nd(e,t,r,s,i){if(Xe(r)){var o=!0;Ss(t)}else o=!1;if(Vt(t,i),t.stateNode===null)Us(e,t),Hc(t,r,s),Ul(t,r,s,i),s=!0;else if(e===null){var h=t.stateNode,p=t.memoizedProps;h.props=p;var m=h.context,v=r.contextType;typeof v=="object"&&v!==null?v=hn(v):(v=Xe(r)?pt:ze.current,v=Ft(t,v));var C=r.getDerivedStateFromProps,b=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function";b||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(p!==s||m!==v)&&Wc(t,h,s,v),nt=!1;var S=t.memoizedState;h.state=S,Os(t,s,h,i),m=t.memoizedState,p!==s||S!==m||Ge.current||nt?(typeof C=="function"&&(zl(t,r,C,s),m=t.memoizedState),(p=nt||Bc(t,r,p,s,S,m,v))?(b||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=m),h.props=s,h.state=m,h.context=v,s=p):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{h=t.stateNode,gc(e,t),p=t.memoizedProps,v=t.type===t.elementType?p:kn(t.type,p),h.props=v,b=t.pendingProps,S=h.context,m=r.contextType,typeof m=="object"&&m!==null?m=hn(m):(m=Xe(r)?pt:ze.current,m=Ft(t,m));var I=r.getDerivedStateFromProps;(C=typeof I=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(p!==b||S!==m)&&Wc(t,h,s,m),nt=!1,S=t.memoizedState,h.state=S,Os(t,s,h,i);var A=t.memoizedState;p!==b||S!==A||Ge.current||nt?(typeof I=="function"&&(zl(t,r,I,s),A=t.memoizedState),(v=nt||Bc(t,r,v,s,S,A,m)||!1)?(C||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,A,m),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,A,m)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||p===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=A),h.props=s,h.state=A,h.context=m,s=v):(typeof h.componentDidUpdate!="function"||p===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),s=!1)}return Vl(e,t,r,s,o,i)}function Vl(e,t,r,s,i,o){ed(e,t);var h=(t.flags&128)!==0;if(!s&&!h)return i&&lc(t,r,!1),Bn(e,t,o);s=t.stateNode,cp.current=t;var p=h&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&h?(t.child=Ht(t,e.child,null,o),t.child=Ht(t,null,p,o)):Ve(e,t,p,o),t.memoizedState=s.state,i&&lc(t,r,!0),t.child}function td(e){var t=e.stateNode;t.pendingContext?sc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sc(e,t.context,!1),Tl(e,t.containerInfo)}function rd(e,t,r,s,i){return Bt(),wl(i),t.flags|=256,Ve(e,t,r,s),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function sd(e,t,r){var s=t.pendingProps,i=ke.current,o=!1,h=(t.flags&128)!==0,p;if((p=h)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(ke,i&1),e===null)return vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=s.children,e=s.fallback,o?(s=t.mode,o=t.child,h={mode:"hidden",children:h},(s&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=h):o=Zs(h,s,0,null),e=St(e,s,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Gl(r),t.memoizedState=Jl,e):Xl(t,h));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return dp(e,t,h,s,p,i,r);if(o){o=s.fallback,h=t.mode,i=e.child,p=i.sibling;var m={mode:"hidden",children:s.children};return(h&1)===0&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=m,t.deletions=null):(s=at(i,m),s.subtreeFlags=i.subtreeFlags&14680064),p!==null?o=at(p,o):(o=St(o,h,r,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,h=e.child.memoizedState,h=h===null?Gl(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},o.memoizedState=h,o.childLanes=e.childLanes&~r,t.memoizedState=Jl,s}return o=e.child,e=o.sibling,s=at(o,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Xl(e,t){return t=Zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zs(e,t,r,s){return s!==null&&wl(s),Ht(t,e.child,null,r),e=Xl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dp(e,t,r,s,i,o,h){if(r)return t.flags&256?(t.flags&=-257,s=Bl(Error(d(422))),zs(e,t,h,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,i=t.mode,s=Zs({mode:"visible",children:s.children},i,0,null),o=St(o,i,h,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,(t.mode&1)!==0&&Ht(t,e.child,null,h),t.child.memoizedState=Gl(h),t.memoizedState=Jl,o);if((t.mode&1)===0)return zs(e,t,h,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var p=s.dgst;return s=p,o=Error(d(419)),s=Bl(o,s,void 0),zs(e,t,h,s)}if(p=(h&e.childLanes)!==0,qe||p){if(s=Ae,s!==null){switch(h&-h){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(s.suspendedLanes|h))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,zn(e,i),bn(s,e,i,-1))}return uo(),s=Bl(Error(d(421))),zs(e,t,h,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,sn=Qn(i.nextSibling),rn=t,we=!0,wn=null,e!==null&&(dn[un++]=$n,dn[un++]=Fn,dn[un++]=ft,$n=e.id,Fn=e.overflow,ft=t),t=Xl(t,s.children),t.flags|=4096,t)}function id(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),bl(e.return,t,r)}function ql(e,t,r,s,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=i)}function ld(e,t,r){var s=t.pendingProps,i=s.revealOrder,o=s.tail;if(Ve(e,t,s.children,r),s=ke.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,r,t);else if(e.tag===19)id(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(ge(ke,s),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&As(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ql(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&As(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ql(t,!0,r,null,o);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),yt|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,r=at(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=at(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function up(e,t,r){switch(t.tag){case 3:td(t),Bt();break;case 5:vc(t);break;case 1:Xe(t.type)&&Ss(t);break;case 4:Tl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;ge(Rs,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(ge(ke,ke.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?sd(e,t,r):(ge(ke,ke.current&1),e=Bn(e,t,r),e!==null?e.sibling:null);ge(ke,ke.current&1);break;case 19:if(s=(r&t.childLanes)!==0,(e.flags&128)!==0){if(s)return ld(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),s)break;return null;case 22:case 23:return t.lanes=0,Zc(e,t,r)}return Bn(e,t,r)}var od,Kl,ad,cd;od=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Kl=function(){},ad=function(e,t,r,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,gt(Nn.current);var o=null;switch(r){case"input":i=bi(e,i),s=bi(e,s),o=[];break;case"select":i=N({},i,{value:void 0}),s=N({},s,{value:void 0}),o=[];break;case"textarea":i=Ti(e,i),s=Ti(e,s),o=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=vs)}Ni(r,s);var h;r=null;for(v in i)if(!s.hasOwnProperty(v)&&i.hasOwnProperty(v)&&i[v]!=null)if(v==="style"){var p=i[v];for(h in p)p.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(f.hasOwnProperty(v)?o||(o=[]):(o=o||[]).push(v,null));for(v in s){var m=s[v];if(p=i!=null?i[v]:void 0,s.hasOwnProperty(v)&&m!==p&&(m!=null||p!=null))if(v==="style")if(p){for(h in p)!p.hasOwnProperty(h)||m&&m.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in m)m.hasOwnProperty(h)&&p[h]!==m[h]&&(r||(r={}),r[h]=m[h])}else r||(o||(o=[]),o.push(v,r)),r=m;else v==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,p=p?p.__html:void 0,m!=null&&p!==m&&(o=o||[]).push(v,m)):v==="children"?typeof m!="string"&&typeof m!="number"||(o=o||[]).push(v,""+m):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(f.hasOwnProperty(v)?(m!=null&&v==="onScroll"&&je("scroll",e),o||p===m||(o=[])):(o=o||[]).push(v,m))}r&&(o=o||[]).push("style",r);var v=o;(t.updateQueue=v)&&(t.flags|=4)}},cd=function(e,t,r,s){r!==s&&(t.flags|=4)};function Fr(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function hp(e,t,r){var s=t.pendingProps;switch(jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Xe(t.type)&&ks(),Be(t),null;case 3:return s=t.stateNode,Jt(),ye(Ge),ye(ze),Il(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wn!==null&&(oo(wn),wn=null))),Kl(e,t),Be(t),null;case 5:Rl(t);var i=gt(_r.current);if(r=t.type,e!==null&&t.stateNode!=null)ad(e,t,r,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(d(166));return Be(t),null}if(e=gt(Nn.current),Ps(t)){s=t.stateNode,r=t.type;var o=t.memoizedProps;switch(s[Rn]=t,s[Rr]=o,e=(t.mode&1)!==0,r){case"dialog":je("cancel",s),je("close",s);break;case"iframe":case"object":case"embed":je("load",s);break;case"video":case"audio":for(i=0;i<Er.length;i++)je(Er[i],s);break;case"source":je("error",s);break;case"img":case"image":case"link":je("error",s),je("load",s);break;case"details":je("toggle",s);break;case"input":Ho(s,o),je("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},je("invalid",s);break;case"textarea":Jo(s,o),je("invalid",s)}Ni(r,o),i=null;for(var h in o)if(o.hasOwnProperty(h)){var p=o[h];h==="children"?typeof p=="string"?s.textContent!==p&&(o.suppressHydrationWarning!==!0&&ys(s.textContent,p,e),i=["children",p]):typeof p=="number"&&s.textContent!==""+p&&(o.suppressHydrationWarning!==!0&&ys(s.textContent,p,e),i=["children",""+p]):f.hasOwnProperty(h)&&p!=null&&h==="onScroll"&&je("scroll",s)}switch(r){case"input":Mn(s),Vo(s,o,!0);break;case"textarea":Mn(s),Xo(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=vs)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{h=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qo(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=h.createElement(r,{is:s.is}):(e=h.createElement(r),r==="select"&&(h=e,s.multiple?h.multiple=!0:s.size&&(h.size=s.size))):e=h.createElementNS(e,r),e[Rn]=t,e[Rr]=s,od(e,t,!1,!1),t.stateNode=e;e:{switch(h=Ii(r,s),r){case"dialog":je("cancel",e),je("close",e),i=s;break;case"iframe":case"object":case"embed":je("load",e),i=s;break;case"video":case"audio":for(i=0;i<Er.length;i++)je(Er[i],e);i=s;break;case"source":je("error",e),i=s;break;case"img":case"image":case"link":je("error",e),je("load",e),i=s;break;case"details":je("toggle",e),i=s;break;case"input":Ho(e,s),i=bi(e,s),je("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=N({},s,{value:void 0}),je("invalid",e);break;case"textarea":Jo(e,s),i=Ti(e,s),je("invalid",e);break;default:i=s}Ni(r,i),p=i;for(o in p)if(p.hasOwnProperty(o)){var m=p[o];o==="style"?Yo(e,m):o==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Ko(e,m)):o==="children"?typeof m=="string"?(r!=="textarea"||m!=="")&&or(e,m):typeof m=="number"&&or(e,""+m):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(f.hasOwnProperty(o)?m!=null&&o==="onScroll"&&je("scroll",e):m!=null&&ie(e,o,m,h))}switch(r){case"input":Mn(e),Vo(e,s,!1);break;case"textarea":Mn(e),Xo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+le(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?Pt(e,!!s.multiple,o,!1):s.defaultValue!=null&&Pt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vs)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)cd(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(d(166));if(r=gt(_r.current),gt(Nn.current),Ps(t)){if(s=t.stateNode,r=t.memoizedProps,s[Rn]=t,(o=s.nodeValue!==r)&&(e=rn,e!==null))switch(e.tag){case 3:ys(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ys(s.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Rn]=t,t.stateNode=s}return Be(t),null;case 13:if(ye(ke),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&sn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)hc(),Bt(),t.flags|=98560,o=!1;else if(o=Ps(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[Rn]=t}else Bt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),o=!1}else wn!==null&&(oo(wn),wn=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?Ie===0&&(Ie=3):uo())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Jt(),Kl(e,t),e===null&&Pr(t.stateNode.containerInfo),Be(t),null;case 10:return Cl(t.type._context),Be(t),null;case 17:return Xe(t.type)&&ks(),Be(t),null;case 19:if(ye(ke),o=t.memoizedState,o===null)return Be(t),null;if(s=(t.flags&128)!==0,h=o.rendering,h===null)if(s)Fr(o,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=As(e),h!==null){for(t.flags|=128,Fr(o,!1),s=h.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)o=r,e=s,o.flags&=14680066,h=o.alternate,h===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=h.childLanes,o.lanes=h.lanes,o.child=h.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=h.memoizedProps,o.memoizedState=h.memoizedState,o.updateQueue=h.updateQueue,o.type=h.type,e=h.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ge(ke,ke.current&1|2),t.child}e=e.sibling}o.tail!==null&&be()>Kt&&(t.flags|=128,s=!0,Fr(o,!1),t.lanes=4194304)}else{if(!s)if(e=As(h),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!we)return Be(t),null}else 2*be()-o.renderingStartTime>Kt&&r!==1073741824&&(t.flags|=128,s=!0,Fr(o,!1),t.lanes=4194304);o.isBackwards?(h.sibling=t.child,t.child=h):(r=o.last,r!==null?r.sibling=h:t.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=be(),t.sibling=null,r=ke.current,ge(ke,s?r&1|2:r&1),t):(Be(t),null);case 22:case 23:return co(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(ln&1073741824)!==0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(d(156,t.tag))}function pp(e,t){switch(jl(t),t.tag){case 1:return Xe(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jt(),ye(Ge),ye(ze),Il(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Rl(t),null;case 13:if(ye(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Bt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(ke),null;case 4:return Jt(),null;case 10:return Cl(t.type._context),null;case 22:case 23:return co(),null;case 24:return null;default:return null}}var Bs=!1,He=!1,fp=typeof WeakSet=="function"?WeakSet:Set,O=null;function Xt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ce(e,t,s)}else r.current=null}function Ql(e,t,r){try{r()}catch(s){Ce(e,t,s)}}var dd=!1;function mp(e,t){if(cl=as,e=Ba(),nl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var h=0,p=-1,m=-1,v=0,C=0,b=e,S=null;n:for(;;){for(var I;b!==r||i!==0&&b.nodeType!==3||(p=h+i),b!==o||s!==0&&b.nodeType!==3||(m=h+s),b.nodeType===3&&(h+=b.nodeValue.length),(I=b.firstChild)!==null;)S=b,b=I;for(;;){if(b===e)break n;if(S===r&&++v===i&&(p=h),S===o&&++C===s&&(m=h),(I=b.nextSibling)!==null)break;b=S,S=b.parentNode}b=I}r=p===-1||m===-1?null:{start:p,end:m}}else r=null}r=r||{start:0,end:0}}else r=null;for(dl={focusedElem:e,selectionRange:r},as=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var A=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var M=A.memoizedProps,Ee=A.memoizedState,j=t.stateNode,x=j.getSnapshotBeforeUpdate(t.elementType===t.type?M:kn(t.type,M),Ee);j.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(P){Ce(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return A=dd,dd=!1,A}function zr(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ql(t,r,o)}i=i.next}while(i!==s)}}function Hs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Yl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ud(e){var t=e.alternate;t!==null&&(e.alternate=null,ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rn],delete t[Rr],delete t[fl],delete t[Qh],delete t[Yh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hd(e){return e.tag===5||e.tag===3||e.tag===4}function pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=vs));else if(s!==4&&(e=e.child,e!==null))for(Zl(e,t,r),e=e.sibling;e!==null;)Zl(e,t,r),e=e.sibling}function eo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(eo(e,t,r),e=e.sibling;e!==null;)eo(e,t,r),e=e.sibling}var Le=null,Sn=!1;function rt(e,t,r){for(r=r.child;r!==null;)fd(e,t,r),r=r.sibling}function fd(e,t,r){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(ts,r)}catch{}switch(r.tag){case 5:He||Xt(r,t);case 6:var s=Le,i=Sn;Le=null,rt(e,t,r),Le=s,Sn=i,Le!==null&&(Sn?(e=Le,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Le.removeChild(r.stateNode));break;case 18:Le!==null&&(Sn?(e=Le,r=r.stateNode,e.nodeType===8?pl(e.parentNode,r):e.nodeType===1&&pl(e,r),jr(e)):pl(Le,r.stateNode));break;case 4:s=Le,i=Sn,Le=r.stateNode.containerInfo,Sn=!0,rt(e,t,r),Le=s,Sn=i;break;case 0:case 11:case 14:case 15:if(!He&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var o=i,h=o.destroy;o=o.tag,h!==void 0&&((o&2)!==0||(o&4)!==0)&&Ql(r,t,h),i=i.next}while(i!==s)}rt(e,t,r);break;case 1:if(!He&&(Xt(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(p){Ce(r,t,p)}rt(e,t,r);break;case 21:rt(e,t,r);break;case 22:r.mode&1?(He=(s=He)||r.memoizedState!==null,rt(e,t,r),He=s):rt(e,t,r);break;default:rt(e,t,r)}}function md(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new fp),t.forEach(function(s){var i=Cp.bind(null,e,s);r.has(s)||(r.add(s),s.then(i,i))})}}function Cn(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var o=e,h=t,p=h;e:for(;p!==null;){switch(p.tag){case 5:Le=p.stateNode,Sn=!1;break e;case 3:Le=p.stateNode.containerInfo,Sn=!0;break e;case 4:Le=p.stateNode.containerInfo,Sn=!0;break e}p=p.return}if(Le===null)throw Error(d(160));fd(o,h,i),Le=null,Sn=!1;var m=i.alternate;m!==null&&(m.return=null),i.return=null}catch(v){Ce(i,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xd(t,e),t=t.sibling}function xd(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Cn(t,e),On(e),s&4){try{zr(3,e,e.return),Hs(3,e)}catch(M){Ce(e,e.return,M)}try{zr(5,e,e.return)}catch(M){Ce(e,e.return,M)}}break;case 1:Cn(t,e),On(e),s&512&&r!==null&&Xt(r,r.return);break;case 5:if(Cn(t,e),On(e),s&512&&r!==null&&Xt(r,r.return),e.flags&32){var i=e.stateNode;try{or(i,"")}catch(M){Ce(e,e.return,M)}}if(s&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,h=r!==null?r.memoizedProps:o,p=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{p==="input"&&o.type==="radio"&&o.name!=null&&Wo(i,o),Ii(p,h);var v=Ii(p,o);for(h=0;h<m.length;h+=2){var C=m[h],b=m[h+1];C==="style"?Yo(i,b):C==="dangerouslySetInnerHTML"?Ko(i,b):C==="children"?or(i,b):ie(i,C,b,v)}switch(p){case"input":Ei(i,o);break;case"textarea":Go(i,o);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var I=o.value;I!=null?Pt(i,!!o.multiple,I,!1):S!==!!o.multiple&&(o.defaultValue!=null?Pt(i,!!o.multiple,o.defaultValue,!0):Pt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Rr]=o}catch(M){Ce(e,e.return,M)}}break;case 6:if(Cn(t,e),On(e),s&4){if(e.stateNode===null)throw Error(d(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(M){Ce(e,e.return,M)}}break;case 3:if(Cn(t,e),On(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(M){Ce(e,e.return,M)}break;case 4:Cn(t,e),On(e);break;case 13:Cn(t,e),On(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ro=be())),s&4&&md(e);break;case 22:if(C=r!==null&&r.memoizedState!==null,e.mode&1?(He=(v=He)||C,Cn(t,e),He=v):Cn(t,e),On(e),s&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!C&&(e.mode&1)!==0)for(O=e,C=e.child;C!==null;){for(b=O=C;O!==null;){switch(S=O,I=S.child,S.tag){case 0:case 11:case 14:case 15:zr(4,S,S.return);break;case 1:Xt(S,S.return);var A=S.stateNode;if(typeof A.componentWillUnmount=="function"){s=S,r=S.return;try{t=s,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(M){Ce(s,r,M)}}break;case 5:Xt(S,S.return);break;case 22:if(S.memoizedState!==null){yd(b);continue}}I!==null?(I.return=S,O=I):yd(b)}C=C.sibling}e:for(C=null,b=e;;){if(b.tag===5){if(C===null){C=b;try{i=b.stateNode,v?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(p=b.stateNode,m=b.memoizedProps.style,h=m!=null&&m.hasOwnProperty("display")?m.display:null,p.style.display=Qo("display",h))}catch(M){Ce(e,e.return,M)}}}else if(b.tag===6){if(C===null)try{b.stateNode.nodeValue=v?"":b.memoizedProps}catch(M){Ce(e,e.return,M)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;C===b&&(C=null),b=b.return}C===b&&(C=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Cn(t,e),On(e),s&4&&md(e);break;case 21:break;default:Cn(t,e),On(e)}}function On(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(hd(r)){var s=r;break e}r=r.return}throw Error(d(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(or(i,""),s.flags&=-33);var o=pd(e);eo(e,o,i);break;case 3:case 4:var h=s.stateNode.containerInfo,p=pd(e);Zl(e,p,h);break;default:throw Error(d(161))}}catch(m){Ce(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,r){O=e,gd(e)}function gd(e,t,r){for(var s=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&s){var h=i.memoizedState!==null||Bs;if(!h){var p=i.alternate,m=p!==null&&p.memoizedState!==null||He;p=Bs;var v=He;if(Bs=h,(He=m)&&!v)for(O=i;O!==null;)h=O,m=h.child,h.tag===22&&h.memoizedState!==null?vd(i):m!==null?(m.return=h,O=m):vd(i);for(;o!==null;)O=o,gd(o),o=o.sibling;O=i,Bs=p,He=v}jd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,O=o):jd(e)}}function jd(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:He||Hs(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!He)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:kn(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&yc(t,o,s);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}yc(t,h,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&r.focus();break;case"img":m.src&&(r.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var C=v.memoizedState;if(C!==null){var b=C.dehydrated;b!==null&&jr(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}He||t.flags&512&&Yl(t)}catch(S){Ce(t,t.return,S)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function yd(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function vd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Hs(4,t)}catch(m){Ce(t,r,m)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(m){Ce(t,i,m)}}var o=t.return;try{Yl(t)}catch(m){Ce(t,o,m)}break;case 5:var h=t.return;try{Yl(t)}catch(m){Ce(t,h,m)}}}catch(m){Ce(t,t.return,m)}if(t===e){O=null;break}var p=t.sibling;if(p!==null){p.return=t.return,O=p;break}O=t.return}}var gp=Math.ceil,Ws=ee.ReactCurrentDispatcher,no=ee.ReactCurrentOwner,fn=ee.ReactCurrentBatchConfig,ae=0,Ae=null,Pe=null,$e=0,ln=0,qt=Yn(0),Ie=0,Ur=null,yt=0,Vs=0,to=0,Br=null,Ke=null,ro=0,Kt=1/0,Hn=null,Js=!1,so=null,st=null,Gs=!1,it=null,Xs=0,Hr=0,io=null,qs=-1,Ks=0;function Je(){return(ae&6)!==0?be():qs!==-1?qs:qs=be()}function lt(e){return(e.mode&1)===0?1:(ae&2)!==0&&$e!==0?$e&-$e:ep.transition!==null?(Ks===0&&(Ks=pa()),Ks):(e=me,e!==0||(e=window.event,e=e===void 0?16:ka(e.type)),e)}function bn(e,t,r,s){if(50<Hr)throw Hr=0,io=null,Error(d(185));pr(e,r,s),((ae&2)===0||e!==Ae)&&(e===Ae&&((ae&2)===0&&(Vs|=r),Ie===4&&ot(e,$e)),Qe(e,s),r===1&&ae===0&&(t.mode&1)===0&&(Kt=be()+500,Cs&&et()))}function Qe(e,t){var r=e.callbackNode;eh(e,t);var s=is(e,e===Ae?$e:0);if(s===0)r!==null&&da(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&da(r),t===1)e.tag===0?Zh(kd.bind(null,e)):oc(kd.bind(null,e)),qh(function(){(ae&6)===0&&et()}),r=null;else{switch(fa(s)){case 1:r=$i;break;case 4:r=ua;break;case 16:r=ns;break;case 536870912:r=ha;break;default:r=ns}r=Nd(r,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function wd(e,t){if(qs=-1,Ks=0,(ae&6)!==0)throw Error(d(327));var r=e.callbackNode;if(Qt()&&e.callbackNode!==r)return null;var s=is(e,e===Ae?$e:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Qs(e,s);else{t=s;var i=ae;ae|=2;var o=Cd();(Ae!==e||$e!==t)&&(Hn=null,Kt=be()+500,wt(e,t));do try{vp();break}catch(p){Sd(e,p)}while(!0);Sl(),Ws.current=o,ae=i,Pe!==null?t=0:(Ae=null,$e=0,t=Ie)}if(t!==0){if(t===2&&(i=Fi(e),i!==0&&(s=i,t=lo(e,i))),t===1)throw r=Ur,wt(e,0),ot(e,s),Qe(e,be()),r;if(t===6)ot(e,s);else{if(i=e.current.alternate,(s&30)===0&&!jp(i)&&(t=Qs(e,s),t===2&&(o=Fi(e),o!==0&&(s=o,t=lo(e,o))),t===1))throw r=Ur,wt(e,0),ot(e,s),Qe(e,be()),r;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(d(345));case 2:kt(e,Ke,Hn);break;case 3:if(ot(e,s),(s&130023424)===s&&(t=ro+500-be(),10<t)){if(is(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hl(kt.bind(null,e,Ke,Hn),t);break}kt(e,Ke,Hn);break;case 4:if(ot(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var h=31-yn(s);o=1<<h,h=t[h],h>i&&(i=h),s&=~o}if(s=i,s=be()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*gp(s/1960))-s,10<s){e.timeoutHandle=hl(kt.bind(null,e,Ke,Hn),s);break}kt(e,Ke,Hn);break;case 5:kt(e,Ke,Hn);break;default:throw Error(d(329))}}}return Qe(e,be()),e.callbackNode===r?wd.bind(null,e):null}function lo(e,t){var r=Br;return e.current.memoizedState.isDehydrated&&(wt(e,t).flags|=256),e=Qs(e,t),e!==2&&(t=Ke,Ke=r,t!==null&&oo(t)),e}function oo(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function jp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],o=i.getSnapshot;i=i.value;try{if(!vn(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~to,t&=~Vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-yn(t),s=1<<r;e[r]=-1,t&=~s}}function kd(e){if((ae&6)!==0)throw Error(d(327));Qt();var t=is(e,0);if((t&1)===0)return Qe(e,be()),null;var r=Qs(e,t);if(e.tag!==0&&r===2){var s=Fi(e);s!==0&&(t=s,r=lo(e,s))}if(r===1)throw r=Ur,wt(e,0),ot(e,t),Qe(e,be()),r;if(r===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,Ke,Hn),Qe(e,be()),null}function ao(e,t){var r=ae;ae|=1;try{return e(t)}finally{ae=r,ae===0&&(Kt=be()+500,Cs&&et())}}function vt(e){it!==null&&it.tag===0&&(ae&6)===0&&Qt();var t=ae;ae|=1;var r=fn.transition,s=me;try{if(fn.transition=null,me=1,e)return e()}finally{me=s,fn.transition=r,ae=t,(ae&6)===0&&et()}}function co(){ln=qt.current,ye(qt)}function wt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Xh(r)),Pe!==null)for(r=Pe.return;r!==null;){var s=r;switch(jl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ks();break;case 3:Jt(),ye(Ge),ye(ze),Il();break;case 5:Rl(s);break;case 4:Jt();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:Cl(s.type._context);break;case 22:case 23:co()}r=r.return}if(Ae=e,Pe=e=at(e.current,null),$e=ln=t,Ie=0,Ur=null,to=Vs=yt=0,Ke=Br=null,xt!==null){for(t=0;t<xt.length;t++)if(r=xt[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,o=r.pending;if(o!==null){var h=o.next;o.next=i,s.next=h}r.pending=s}xt=null}return e}function Sd(e,t){do{var r=Pe;try{if(Sl(),_s.current=$s,Ms){for(var s=Se.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}Ms=!1}if(jt=0,Oe=Ne=Se=null,Mr=!1,Dr=0,no.current=null,r===null||r.return===null){Ie=1,Ur=t,Pe=null;break}e:{var o=e,h=r.return,p=r,m=t;if(t=$e,p.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var v=m,C=p,b=C.tag;if((C.mode&1)===0&&(b===0||b===11||b===15)){var S=C.alternate;S?(C.updateQueue=S.updateQueue,C.memoizedState=S.memoizedState,C.lanes=S.lanes):(C.updateQueue=null,C.memoizedState=null)}var I=Xc(h);if(I!==null){I.flags&=-257,qc(I,h,p,o,t),I.mode&1&&Gc(o,v,t),t=I,m=v;var A=t.updateQueue;if(A===null){var M=new Set;M.add(m),t.updateQueue=M}else A.add(m);break e}else{if((t&1)===0){Gc(o,v,t),uo();break e}m=Error(d(426))}}else if(we&&p.mode&1){var Ee=Xc(h);if(Ee!==null){(Ee.flags&65536)===0&&(Ee.flags|=256),qc(Ee,h,p,o,t),wl(Gt(m,p));break e}}o=m=Gt(m,p),Ie!==4&&(Ie=2),Br===null?Br=[o]:Br.push(o),o=h;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var j=Vc(o,m,t);jc(o,j);break e;case 1:p=m;var x=o.type,y=o.stateNode;if((o.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(st===null||!st.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=Jc(o,p,t);jc(o,P);break e}}o=o.return}while(o!==null)}Ed(r)}catch(D){t=D,Pe===r&&r!==null&&(Pe=r=r.return);continue}break}while(!0)}function Cd(){var e=Ws.current;return Ws.current=$s,e===null?$s:e}function uo(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ae===null||(yt&268435455)===0&&(Vs&268435455)===0||ot(Ae,$e)}function Qs(e,t){var r=ae;ae|=2;var s=Cd();(Ae!==e||$e!==t)&&(Hn=null,wt(e,t));do try{yp();break}catch(i){Sd(e,i)}while(!0);if(Sl(),ae=r,Ws.current=s,Pe!==null)throw Error(d(261));return Ae=null,$e=0,Ie}function yp(){for(;Pe!==null;)bd(Pe)}function vp(){for(;Pe!==null&&!Vu();)bd(Pe)}function bd(e){var t=Rd(e.alternate,e,ln);e.memoizedProps=e.pendingProps,t===null?Ed(e):Pe=t,no.current=null}function Ed(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=hp(r,t,ln),r!==null){Pe=r;return}}else{if(r=pp(r,t),r!==null){r.flags&=32767,Pe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Pe=null;return}}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Ie===0&&(Ie=5)}function kt(e,t,r){var s=me,i=fn.transition;try{fn.transition=null,me=1,wp(e,t,r,s)}finally{fn.transition=i,me=s}return null}function wp(e,t,r,s){do Qt();while(it!==null);if((ae&6)!==0)throw Error(d(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(nh(e,o),e===Ae&&(Pe=Ae=null,$e=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Gs||(Gs=!0,Nd(ns,function(){return Qt(),null})),o=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||o){o=fn.transition,fn.transition=null;var h=me;me=1;var p=ae;ae|=4,no.current=null,mp(e,r),xd(r,e),Uh(dl),as=!!cl,dl=cl=null,e.current=r,xp(r),Ju(),ae=p,me=h,fn.transition=o}else e.current=r;if(Gs&&(Gs=!1,it=e,Xs=i),o=e.pendingLanes,o===0&&(st=null),qu(r.stateNode),Qe(e,be()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(Js)throw Js=!1,e=so,so=null,e;return(Xs&1)!==0&&e.tag!==0&&Qt(),o=e.pendingLanes,(o&1)!==0?e===io?Hr++:(Hr=0,io=e):Hr=0,et(),null}function Qt(){if(it!==null){var e=fa(Xs),t=fn.transition,r=me;try{if(fn.transition=null,me=16>e?16:e,it===null)var s=!1;else{if(e=it,it=null,Xs=0,(ae&6)!==0)throw Error(d(331));var i=ae;for(ae|=4,O=e.current;O!==null;){var o=O,h=o.child;if((O.flags&16)!==0){var p=o.deletions;if(p!==null){for(var m=0;m<p.length;m++){var v=p[m];for(O=v;O!==null;){var C=O;switch(C.tag){case 0:case 11:case 15:zr(8,C,o)}var b=C.child;if(b!==null)b.return=C,O=b;else for(;O!==null;){C=O;var S=C.sibling,I=C.return;if(ud(C),C===v){O=null;break}if(S!==null){S.return=I,O=S;break}O=I}}}var A=o.alternate;if(A!==null){var M=A.child;if(M!==null){A.child=null;do{var Ee=M.sibling;M.sibling=null,M=Ee}while(M!==null)}}O=o}}if((o.subtreeFlags&2064)!==0&&h!==null)h.return=o,O=h;else e:for(;O!==null;){if(o=O,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:zr(9,o,o.return)}var j=o.sibling;if(j!==null){j.return=o.return,O=j;break e}O=o.return}}var x=e.current;for(O=x;O!==null;){h=O;var y=h.child;if((h.subtreeFlags&2064)!==0&&y!==null)y.return=h,O=y;else e:for(h=x;O!==null;){if(p=O,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Hs(9,p)}}catch(D){Ce(p,p.return,D)}if(p===h){O=null;break e}var P=p.sibling;if(P!==null){P.return=p.return,O=P;break e}O=p.return}}if(ae=i,et(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(ts,e)}catch{}s=!0}return s}finally{me=r,fn.transition=t}}return!1}function Pd(e,t,r){t=Gt(r,t),t=Vc(e,t,1),e=tt(e,t,1),t=Je(),e!==null&&(pr(e,1,t),Qe(e,t))}function Ce(e,t,r){if(e.tag===3)Pd(e,e,r);else for(;t!==null;){if(t.tag===3){Pd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(st===null||!st.has(s))){e=Gt(r,e),e=Jc(t,e,1),t=tt(t,e,1),e=Je(),t!==null&&(pr(t,1,e),Qe(t,e));break}}t=t.return}}function kp(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&r,Ae===e&&($e&r)===r&&(Ie===4||Ie===3&&($e&130023424)===$e&&500>be()-ro?wt(e,0):to|=r),Qe(e,t)}function Td(e,t){t===0&&((e.mode&1)===0?t=1:(t=ss,ss<<=1,(ss&130023424)===0&&(ss=4194304)));var r=Je();e=zn(e,t),e!==null&&(pr(e,t,r),Qe(e,r))}function Sp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Td(e,r)}function Cp(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(d(314))}s!==null&&s.delete(t),Td(e,r)}var Rd;Rd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)qe=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return qe=!1,up(e,t,r);qe=(e.flags&131072)!==0}else qe=!1,we&&(t.flags&1048576)!==0&&ac(t,Es,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Us(e,t),e=t.pendingProps;var i=Ft(t,ze.current);Vt(t,r),i=_l(null,t,s,e,i,r);var o=Ml();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(s)?(o=!0,Ss(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pl(t),i.updater=Fs,t.stateNode=i,i._reactInternals=t,Ul(t,s,e,r),t=Vl(null,t,s,!0,o,r)):(t.tag=0,we&&o&&gl(t),Ve(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=Ep(s),e=kn(s,e),i){case 0:t=Wl(null,t,s,e,r);break e;case 1:t=nd(null,t,s,e,r);break e;case 11:t=Kc(null,t,s,e,r);break e;case 14:t=Qc(null,t,s,kn(s.type,e),r);break e}throw Error(d(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:kn(s,i),Wl(e,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:kn(s,i),nd(e,t,s,i,r);case 3:e:{if(td(t),e===null)throw Error(d(387));s=t.pendingProps,o=t.memoizedState,i=o.element,gc(e,t),Os(t,s,null,r);var h=t.memoizedState;if(s=h.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Gt(Error(d(423)),t),t=rd(e,t,s,r,i);break e}else if(s!==i){i=Gt(Error(d(424)),t),t=rd(e,t,s,r,i);break e}else for(sn=Qn(t.stateNode.containerInfo.firstChild),rn=t,we=!0,wn=null,r=mc(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bt(),s===i){t=Bn(e,t,r);break e}Ve(e,t,s,r)}t=t.child}return t;case 5:return vc(t),e===null&&vl(t),s=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,h=i.children,ul(s,i)?h=null:o!==null&&ul(s,o)&&(t.flags|=32),ed(e,t),Ve(e,t,h,r),t.child;case 6:return e===null&&vl(t),null;case 13:return sd(e,t,r);case 4:return Tl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ht(t,null,s,r):Ve(e,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:kn(s,i),Kc(e,t,s,i,r);case 7:return Ve(e,t,t.pendingProps,r),t.child;case 8:return Ve(e,t,t.pendingProps.children,r),t.child;case 12:return Ve(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,o=t.memoizedProps,h=i.value,ge(Rs,s._currentValue),s._currentValue=h,o!==null)if(vn(o.value,h)){if(o.children===i.children&&!Ge.current){t=Bn(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var p=o.dependencies;if(p!==null){h=o.child;for(var m=p.firstContext;m!==null;){if(m.context===s){if(o.tag===1){m=Un(-1,r&-r),m.tag=2;var v=o.updateQueue;if(v!==null){v=v.shared;var C=v.pending;C===null?m.next=m:(m.next=C.next,C.next=m),v.pending=m}}o.lanes|=r,m=o.alternate,m!==null&&(m.lanes|=r),bl(o.return,r,t),p.lanes|=r;break}m=m.next}}else if(o.tag===10)h=o.type===t.type?null:o.child;else if(o.tag===18){if(h=o.return,h===null)throw Error(d(341));h.lanes|=r,p=h.alternate,p!==null&&(p.lanes|=r),bl(h,r,t),h=o.sibling}else h=o.child;if(h!==null)h.return=o;else for(h=o;h!==null;){if(h===t){h=null;break}if(o=h.sibling,o!==null){o.return=h.return,h=o;break}h=h.return}o=h}Ve(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,Vt(t,r),i=hn(i),s=s(i),t.flags|=1,Ve(e,t,s,r),t.child;case 14:return s=t.type,i=kn(s,t.pendingProps),i=kn(s.type,i),Qc(e,t,s,i,r);case 15:return Yc(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:kn(s,i),Us(e,t),t.tag=1,Xe(s)?(e=!0,Ss(t)):e=!1,Vt(t,r),Hc(t,s,i),Ul(t,s,i,r),Vl(null,t,s,!0,e,r);case 19:return ld(e,t,r);case 22:return Zc(e,t,r)}throw Error(d(156,t.tag))};function Nd(e,t){return ca(e,t)}function bp(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(e,t,r,s){return new bp(e,t,r,s)}function ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ep(e){if(typeof e=="function")return ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===an)return 11;if(e===cn)return 14}return 2}function at(e,t){var r=e.alternate;return r===null?(r=mn(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ys(e,t,r,s,i,o){var h=2;if(s=e,typeof e=="function")ho(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case B:return St(r.children,i,o,t);case Re:h=8,i|=8;break;case en:return e=mn(12,r,t,i|2),e.elementType=en,e.lanes=o,e;case We:return e=mn(13,r,t,i),e.elementType=We,e.lanes=o,e;case nn:return e=mn(19,r,t,i),e.elementType=nn,e.lanes=o,e;case xe:return Zs(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gn:h=10;break e;case _n:h=9;break e;case an:h=11;break e;case cn:h=14;break e;case Fe:h=16,s=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return t=mn(h,r,t,i),t.elementType=e,t.type=s,t.lanes=o,t}function St(e,t,r,s){return e=mn(7,e,s,t),e.lanes=r,e}function Zs(e,t,r,s){return e=mn(22,e,s,t),e.elementType=xe,e.lanes=r,e.stateNode={isHidden:!1},e}function po(e,t,r){return e=mn(6,e,null,t),e.lanes=r,e}function fo(e,t,r){return t=mn(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pp(e,t,r,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mo(e,t,r,s,i,o,h,p,m){return e=new Pp(e,t,r,p,m),t===1?(t=1,o===!0&&(t|=8)):t=0,o=mn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pl(o),e}function Tp(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function Id(e){if(!e)return Zn;e=e._reactInternals;e:{if(ut(e)!==e||e.tag!==1)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(d(171))}if(e.tag===1){var r=e.type;if(Xe(r))return ic(e,r,t)}return t}function Od(e,t,r,s,i,o,h,p,m){return e=mo(r,s,!0,e,i,o,h,p,m),e.context=Id(null),r=e.current,s=Je(),i=lt(r),o=Un(s,i),o.callback=t??null,tt(r,o,i),e.current.lanes=i,pr(e,i,s),Qe(e,s),e}function ei(e,t,r,s){var i=t.current,o=Je(),h=lt(i);return r=Id(r),t.context===null?t.context=r:t.pendingContext=r,t=Un(o,h),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=tt(i,t,h),e!==null&&(bn(e,i,h,o),Is(e,i,h)),h}function ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function xo(e,t){Ad(e,t),(e=e.alternate)&&Ad(e,t)}function Rp(){return null}var _d=typeof reportError=="function"?reportError:function(e){console.error(e)};function go(e){this._internalRoot=e}ti.prototype.render=go.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));ei(e,t,null,null)},ti.prototype.unmount=go.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vt(function(){ei(null,e,null,null)}),t[Dn]=null}};function ti(e){this._internalRoot=e}ti.prototype.unstable_scheduleHydration=function(e){if(e){var t=ga();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Xn.length&&t!==0&&t<Xn[r].priority;r++);Xn.splice(r,0,e),r===0&&va(e)}};function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function Np(e,t,r,s,i){if(i){if(typeof s=="function"){var o=s;s=function(){var v=ni(h);o.call(v)}}var h=Od(t,s,e,0,null,!1,!1,"",Md);return e._reactRootContainer=h,e[Dn]=h.current,Pr(e.nodeType===8?e.parentNode:e),vt(),h}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var p=s;s=function(){var v=ni(m);p.call(v)}}var m=mo(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=m,e[Dn]=m.current,Pr(e.nodeType===8?e.parentNode:e),vt(function(){ei(t,m,r,s)}),m}function si(e,t,r,s,i){var o=r._reactRootContainer;if(o){var h=o;if(typeof i=="function"){var p=i;i=function(){var m=ni(h);p.call(m)}}ei(t,h,e,i)}else h=Np(r,t,e,i,s);return ni(h)}ma=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=hr(t.pendingLanes);r!==0&&(Ui(t,r|1),Qe(t,be()),(ae&6)===0&&(Kt=be()+500,et()))}break;case 13:vt(function(){var s=zn(e,1);if(s!==null){var i=Je();bn(s,e,1,i)}}),xo(e,1)}},Bi=function(e){if(e.tag===13){var t=zn(e,134217728);if(t!==null){var r=Je();bn(t,e,134217728,r)}xo(e,134217728)}},xa=function(e){if(e.tag===13){var t=lt(e),r=zn(e,t);if(r!==null){var s=Je();bn(r,e,t,s)}xo(e,t)}},ga=function(){return me},ja=function(e,t){var r=me;try{return me=e,t()}finally{me=r}},_i=function(e,t,r){switch(t){case"input":if(Ei(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var i=ws(s);if(!i)throw Error(d(90));jn(s),Ei(s,i)}}}break;case"textarea":Go(e,r);break;case"select":t=r.value,t!=null&&Pt(e,!!r.multiple,t,!1)}},ta=ao,ra=vt;var Ip={usingClientEntryPoint:!1,Events:[Nr,Lt,ws,ea,na,ao]},Wr={findFiberByHostInstance:ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Op={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oa(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{ts=ii.inject(Op),Tn=ii}catch{}}return Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip,Ye.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jo(t))throw Error(d(200));return Tp(e,t,null,r)},Ye.createRoot=function(e,t){if(!jo(e))throw Error(d(299));var r=!1,s="",i=_d;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=mo(e,1,!1,null,null,r,!1,s,i),e[Dn]=t.current,Pr(e.nodeType===8?e.parentNode:e),new go(t)},Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=oa(t),e=e===null?null:e.stateNode,e},Ye.flushSync=function(e){return vt(e)},Ye.hydrate=function(e,t,r){if(!ri(t))throw Error(d(200));return si(null,e,t,!0,r)},Ye.hydrateRoot=function(e,t,r){if(!jo(e))throw Error(d(405));var s=r!=null&&r.hydratedSources||null,i=!1,o="",h=_d;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=Od(t,null,e,1,r??null,i,!1,o,h),e[Dn]=t.current,Pr(e),s)for(e=0;e<s.length;e++)r=s[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new ti(t)},Ye.render=function(e,t,r){if(!ri(t))throw Error(d(200));return si(null,e,t,!1,r)},Ye.unmountComponentAtNode=function(e){if(!ri(e))throw Error(d(40));return e._reactRootContainer?(vt(function(){si(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1},Ye.unstable_batchedUpdates=ao,Ye.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!ri(r))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return si(e,t,r,!1,s)},Ye.version="18.3.1-next-f1338f8080-20240426",Ye}var Hd;function Up(){if(Hd)return wo.exports;Hd=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),wo.exports=zp(),wo.exports}var Wd;function Bp(){if(Wd)return li;Wd=1;var l=Up();return li.createRoot=l.createRoot,li.hydrateRoot=l.hydrateRoot,li}var Hp=Bp(),Ze=function(){return Ze=Object.assign||function(a){for(var d,u=1,f=arguments.length;u<f;u++){d=arguments[u];for(var w in d)Object.prototype.hasOwnProperty.call(d,w)&&(a[w]=d[w])}return a},Ze.apply(this,arguments)};function Xr(l,a,d){if(d||arguments.length===2)for(var u=0,f=a.length,w;u<f;u++)(w||!(u in a))&&(w||(w=Array.prototype.slice.call(a,0,u)),w[u]=a[u]);return l.concat(w||Array.prototype.slice.call(a))}var ve="-ms-",Gr="-moz-",fe="-webkit-",cu="comm",yi="rule",$o="decl",Wp="@import",du="@keyframes",Vp="@layer",uu=Math.abs,Fo=String.fromCharCode,To=Object.assign;function Jp(l,a){return Me(l,0)^45?(((a<<2^Me(l,0))<<2^Me(l,1))<<2^Me(l,2))<<2^Me(l,3):0}function hu(l){return l.trim()}function Wn(l,a){return(l=a.exec(l))?l[0]:l}function Z(l,a,d){return l.replace(a,d)}function ci(l,a,d){return l.indexOf(a,d)}function Me(l,a){return l.charCodeAt(a)|0}function er(l,a,d){return l.slice(a,d)}function An(l){return l.length}function pu(l){return l.length}function Jr(l,a){return a.push(l),l}function Gp(l,a){return l.map(a).join("")}function Vd(l,a){return l.filter(function(d){return!Wn(d,a)})}var vi=1,nr=1,fu=0,xn=0,Te=0,ir="";function wi(l,a,d,u,f,w,E,_){return{value:l,root:a,parent:d,type:u,props:f,children:w,line:vi,column:nr,length:E,return:"",siblings:_}}function dt(l,a){return To(wi("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},a)}function Yt(l){for(;l.root;)l=dt(l.root,{children:[l]});Jr(l,l.siblings)}function Xp(){return Te}function qp(){return Te=xn>0?Me(ir,--xn):0,nr--,Te===10&&(nr=1,vi--),Te}function Pn(){return Te=xn<fu?Me(ir,xn++):0,nr++,Te===10&&(nr=1,vi++),Te}function bt(){return Me(ir,xn)}function di(){return xn}function ki(l,a){return er(ir,l,a)}function Ro(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kp(l){return vi=nr=1,fu=An(ir=l),xn=0,[]}function Qp(l){return ir="",l}function Co(l){return hu(ki(xn-1,No(l===91?l+2:l===40?l+1:l)))}function Yp(l){for(;(Te=bt())&&Te<33;)Pn();return Ro(l)>2||Ro(Te)>3?"":" "}function Zp(l,a){for(;--a&&Pn()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return ki(l,di()+(a<6&&bt()==32&&Pn()==32))}function No(l){for(;Pn();)switch(Te){case l:return xn;case 34:case 39:l!==34&&l!==39&&No(Te);break;case 40:l===41&&No(l);break;case 92:Pn();break}return xn}function ef(l,a){for(;Pn()&&l+Te!==57;)if(l+Te===84&&bt()===47)break;return"/*"+ki(a,xn-1)+"*"+Fo(l===47?l:Pn())}function nf(l){for(;!Ro(bt());)Pn();return ki(l,xn)}function tf(l){return Qp(ui("",null,null,null,[""],l=Kp(l),0,[0],l))}function ui(l,a,d,u,f,w,E,_,T){for(var G=0,V=0,$=E,F=0,X=0,se=0,J=1,Q=1,pe=1,oe=0,ie="",ee=f,ue=w,q=u,B=ie;Q;)switch(se=oe,oe=Pn()){case 40:if(se!=108&&Me(B,$-1)==58){ci(B+=Z(Co(oe),"&","&\f"),"&\f",uu(G?_[G-1]:0))!=-1&&(pe=-1);break}case 34:case 39:case 91:B+=Co(oe);break;case 9:case 10:case 13:case 32:B+=Yp(se);break;case 92:B+=Zp(di()-1,7);continue;case 47:switch(bt()){case 42:case 47:Jr(rf(ef(Pn(),di()),a,d,T),T);break;default:B+="/"}break;case 123*J:_[G++]=An(B)*pe;case 125*J:case 59:case 0:switch(oe){case 0:case 125:Q=0;case 59+V:pe==-1&&(B=Z(B,/\f/g,"")),X>0&&An(B)-$&&Jr(X>32?Gd(B+";",u,d,$-1,T):Gd(Z(B," ","")+";",u,d,$-2,T),T);break;case 59:B+=";";default:if(Jr(q=Jd(B,a,d,G,V,f,_,ie,ee=[],ue=[],$,w),w),oe===123)if(V===0)ui(B,a,q,q,ee,w,$,_,ue);else switch(F===99&&Me(B,3)===110?100:F){case 100:case 108:case 109:case 115:ui(l,q,q,u&&Jr(Jd(l,q,q,0,0,f,_,ie,f,ee=[],$,ue),ue),f,ue,$,_,u?ee:ue);break;default:ui(B,q,q,q,[""],ue,0,_,ue)}}G=V=X=0,J=pe=1,ie=B="",$=E;break;case 58:$=1+An(B),X=se;default:if(J<1){if(oe==123)--J;else if(oe==125&&J++==0&&qp()==125)continue}switch(B+=Fo(oe),oe*J){case 38:pe=V>0?1:(B+="\f",-1);break;case 44:_[G++]=(An(B)-1)*pe,pe=1;break;case 64:bt()===45&&(B+=Co(Pn())),F=bt(),V=$=An(ie=B+=nf(di())),oe++;break;case 45:se===45&&An(B)==2&&(J=0)}}return w}function Jd(l,a,d,u,f,w,E,_,T,G,V,$){for(var F=f-1,X=f===0?w:[""],se=pu(X),J=0,Q=0,pe=0;J<u;++J)for(var oe=0,ie=er(l,F+1,F=uu(Q=E[J])),ee=l;oe<se;++oe)(ee=hu(Q>0?X[oe]+" "+ie:Z(ie,/&\f/g,X[oe])))&&(T[pe++]=ee);return wi(l,a,d,f===0?yi:_,T,G,V,$)}function rf(l,a,d,u){return wi(l,a,d,cu,Fo(Xp()),er(l,2,-2),0,u)}function Gd(l,a,d,u,f){return wi(l,a,d,$o,er(l,0,u),er(l,u+1,-1),u,f)}function mu(l,a,d){switch(Jp(l,a)){case 5103:return fe+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return fe+l+l;case 4789:return Gr+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+l+Gr+l+ve+l+l;case 5936:switch(Me(l,a+11)){case 114:return fe+l+ve+Z(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return fe+l+ve+Z(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return fe+l+ve+Z(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return fe+l+ve+l+l;case 6165:return fe+l+ve+"flex-"+l+l;case 5187:return fe+l+Z(l,/(\w+).+(:[^]+)/,fe+"box-$1$2"+ve+"flex-$1$2")+l;case 5443:return fe+l+ve+"flex-item-"+Z(l,/flex-|-self/g,"")+(Wn(l,/flex-|baseline/)?"":ve+"grid-row-"+Z(l,/flex-|-self/g,""))+l;case 4675:return fe+l+ve+"flex-line-pack"+Z(l,/align-content|flex-|-self/g,"")+l;case 5548:return fe+l+ve+Z(l,"shrink","negative")+l;case 5292:return fe+l+ve+Z(l,"basis","preferred-size")+l;case 6060:return fe+"box-"+Z(l,"-grow","")+fe+l+ve+Z(l,"grow","positive")+l;case 4554:return fe+Z(l,/([^-])(transform)/g,"$1"+fe+"$2")+l;case 6187:return Z(Z(Z(l,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),l,"")+l;case 5495:case 3959:return Z(l,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return Z(Z(l,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+fe+l+l;case 4200:if(!Wn(l,/flex-|baseline/))return ve+"grid-column-align"+er(l,a)+l;break;case 2592:case 3360:return ve+Z(l,"template-","")+l;case 4384:case 3616:return d&&d.some(function(u,f){return a=f,Wn(u.props,/grid-\w+-end/)})?~ci(l+(d=d[a].value),"span",0)?l:ve+Z(l,"-start","")+l+ve+"grid-row-span:"+(~ci(d,"span",0)?Wn(d,/\d+/):+Wn(d,/\d+/)-+Wn(l,/\d+/))+";":ve+Z(l,"-start","")+l;case 4896:case 4128:return d&&d.some(function(u){return Wn(u.props,/grid-\w+-start/)})?l:ve+Z(Z(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return Z(l,/(.+)-inline(.+)/,fe+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(l)-1-a>6)switch(Me(l,a+1)){case 109:if(Me(l,a+4)!==45)break;case 102:return Z(l,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+Gr+(Me(l,a+3)==108?"$3":"$2-$3"))+l;case 115:return~ci(l,"stretch",0)?mu(Z(l,"stretch","fill-available"),a,d)+l:l}break;case 5152:case 5920:return Z(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,f,w,E,_,T,G){return ve+f+":"+w+G+(E?ve+f+"-span:"+(_?T:+T-+w)+G:"")+l});case 4949:if(Me(l,a+6)===121)return Z(l,":",":"+fe)+l;break;case 6444:switch(Me(l,Me(l,14)===45?18:11)){case 120:return Z(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Me(l,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+ve+"$2box$3")+l;case 100:return Z(l,":",":"+ve)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(l,"scroll-","scroll-snap-")+l}return l}function fi(l,a){for(var d="",u=0;u<l.length;u++)d+=a(l[u],u,l,a)||"";return d}function sf(l,a,d,u){switch(l.type){case Vp:if(l.children.length)break;case Wp:case $o:return l.return=l.return||l.value;case cu:return"";case du:return l.return=l.value+"{"+fi(l.children,u)+"}";case yi:if(!An(l.value=l.props.join(",")))return""}return An(d=fi(l.children,u))?l.return=l.value+"{"+d+"}":""}function lf(l){var a=pu(l);return function(d,u,f,w){for(var E="",_=0;_<a;_++)E+=l[_](d,u,f,w)||"";return E}}function of(l){return function(a){a.root||(a=a.return)&&l(a)}}function af(l,a,d,u){if(l.length>-1&&!l.return)switch(l.type){case $o:l.return=mu(l.value,l.length,d);return;case du:return fi([dt(l,{value:Z(l.value,"@","@"+fe)})],u);case yi:if(l.length)return Gp(d=l.props,function(f){switch(Wn(f,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yt(dt(l,{props:[Z(f,/:(read-\w+)/,":"+Gr+"$1")]})),Yt(dt(l,{props:[f]})),To(l,{props:Vd(d,u)});break;case"::placeholder":Yt(dt(l,{props:[Z(f,/:(plac\w+)/,":"+fe+"input-$1")]})),Yt(dt(l,{props:[Z(f,/:(plac\w+)/,":"+Gr+"$1")]})),Yt(dt(l,{props:[Z(f,/:(plac\w+)/,ve+"input-$1")]})),Yt(dt(l,{props:[f]})),To(l,{props:Vd(d,u)});break}return""})}}var cf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},on={},tr=typeof process<"u"&&on!==void 0&&(on.REACT_APP_SC_ATTR||on.SC_ATTR)||"data-styled",xu="active",gu="data-styled-version",Si="6.1.19",zo=`/*!sc*/
`,mi=typeof window<"u"&&typeof document<"u",df=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==""?on.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&on.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.SC_DISABLE_SPEEDY!==void 0&&on.SC_DISABLE_SPEEDY!==""&&on.SC_DISABLE_SPEEDY!=="false"&&on.SC_DISABLE_SPEEDY),Ci=Object.freeze([]),rr=Object.freeze({});function uf(l,a,d){return d===void 0&&(d=rr),l.theme!==d.theme&&l.theme||a||d.theme}var ju=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pf=/(^-|-$)/g;function Xd(l){return l.replace(hf,"-").replace(pf,"")}var ff=/(a)(d)/gi,oi=52,qd=function(l){return String.fromCharCode(l+(l>25?39:97))};function Io(l){var a,d="";for(a=Math.abs(l);a>oi;a=a/oi|0)d=qd(a%oi)+d;return(qd(a%oi)+d).replace(ff,"$1-$2")}var bo,yu=5381,Zt=function(l,a){for(var d=a.length;d;)l=33*l^a.charCodeAt(--d);return l},vu=function(l){return Zt(yu,l)};function wu(l){return Io(vu(l)>>>0)}function mf(l){return l.displayName||l.name||"Component"}function Eo(l){return typeof l=="string"&&!0}var ku=typeof Symbol=="function"&&Symbol.for,Su=ku?Symbol.for("react.memo"):60115,xf=ku?Symbol.for("react.forward_ref"):60112,gf={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jf={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yf=((bo={})[xf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bo[Su]=Cu,bo);function Kd(l){return("type"in(a=l)&&a.type.$$typeof)===Su?Cu:"$$typeof"in l?yf[l.$$typeof]:gf;var a}var vf=Object.defineProperty,wf=Object.getOwnPropertyNames,Qd=Object.getOwnPropertySymbols,kf=Object.getOwnPropertyDescriptor,Sf=Object.getPrototypeOf,Yd=Object.prototype;function bu(l,a,d){if(typeof a!="string"){if(Yd){var u=Sf(a);u&&u!==Yd&&bu(l,u,d)}var f=wf(a);Qd&&(f=f.concat(Qd(a)));for(var w=Kd(l),E=Kd(a),_=0;_<f.length;++_){var T=f[_];if(!(T in jf||d&&d[T]||E&&T in E||w&&T in w)){var G=kf(a,T);try{vf(l,T,G)}catch{}}}}return l}function sr(l){return typeof l=="function"}function Uo(l){return typeof l=="object"&&"styledComponentId"in l}function Ct(l,a){return l&&a?"".concat(l," ").concat(a):l||a||""}function Oo(l,a){if(l.length===0)return"";for(var d=l[0],u=1;u<l.length;u++)d+=l[u];return d}function qr(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Ao(l,a,d){if(d===void 0&&(d=!1),!d&&!qr(l)&&!Array.isArray(l))return a;if(Array.isArray(a))for(var u=0;u<a.length;u++)l[u]=Ao(l[u],a[u]);else if(qr(a))for(var u in a)l[u]=Ao(l[u],a[u]);return l}function Bo(l,a){Object.defineProperty(l,"toString",{value:a})}function Kr(l){for(var a=[],d=1;d<arguments.length;d++)a[d-1]=arguments[d];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Cf=function(){function l(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return l.prototype.indexOfGroup=function(a){for(var d=0,u=0;u<a;u++)d+=this.groupSizes[u];return d},l.prototype.insertRules=function(a,d){if(a>=this.groupSizes.length){for(var u=this.groupSizes,f=u.length,w=f;a>=w;)if((w<<=1)<0)throw Kr(16,"".concat(a));this.groupSizes=new Uint32Array(w),this.groupSizes.set(u),this.length=w;for(var E=f;E<w;E++)this.groupSizes[E]=0}for(var _=this.indexOfGroup(a+1),T=(E=0,d.length);E<T;E++)this.tag.insertRule(_,d[E])&&(this.groupSizes[a]++,_++)},l.prototype.clearGroup=function(a){if(a<this.length){var d=this.groupSizes[a],u=this.indexOfGroup(a),f=u+d;this.groupSizes[a]=0;for(var w=u;w<f;w++)this.tag.deleteRule(u)}},l.prototype.getGroup=function(a){var d="";if(a>=this.length||this.groupSizes[a]===0)return d;for(var u=this.groupSizes[a],f=this.indexOfGroup(a),w=f+u,E=f;E<w;E++)d+="".concat(this.tag.getRule(E)).concat(zo);return d},l}(),hi=new Map,xi=new Map,pi=1,ai=function(l){if(hi.has(l))return hi.get(l);for(;xi.has(pi);)pi++;var a=pi++;return hi.set(l,a),xi.set(a,l),a},bf=function(l,a){pi=a+1,hi.set(l,a),xi.set(a,l)},Ef="style[".concat(tr,"][").concat(gu,'="').concat(Si,'"]'),Pf=new RegExp("^".concat(tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Tf=function(l,a,d){for(var u,f=d.split(","),w=0,E=f.length;w<E;w++)(u=f[w])&&l.registerName(a,u)},Rf=function(l,a){for(var d,u=((d=a.textContent)!==null&&d!==void 0?d:"").split(zo),f=[],w=0,E=u.length;w<E;w++){var _=u[w].trim();if(_){var T=_.match(Pf);if(T){var G=0|parseInt(T[1],10),V=T[2];G!==0&&(bf(V,G),Tf(l,V,T[3]),l.getTag().insertRules(G,f)),f.length=0}else f.push(_)}}},Zd=function(l){for(var a=document.querySelectorAll(Ef),d=0,u=a.length;d<u;d++){var f=a[d];f&&f.getAttribute(tr)!==xu&&(Rf(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function Nf(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Eu=function(l){var a=document.head,d=l||a,u=document.createElement("style"),f=function(_){var T=Array.from(_.querySelectorAll("style[".concat(tr,"]")));return T[T.length-1]}(d),w=f!==void 0?f.nextSibling:null;u.setAttribute(tr,xu),u.setAttribute(gu,Si);var E=Nf();return E&&u.setAttribute("nonce",E),d.insertBefore(u,w),u},If=function(){function l(a){this.element=Eu(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(d){if(d.sheet)return d.sheet;for(var u=document.styleSheets,f=0,w=u.length;f<w;f++){var E=u[f];if(E.ownerNode===d)return E}throw Kr(17)}(this.element),this.length=0}return l.prototype.insertRule=function(a,d){try{return this.sheet.insertRule(d,a),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},l.prototype.getRule=function(a){var d=this.sheet.cssRules[a];return d&&d.cssText?d.cssText:""},l}(),Of=function(){function l(a){this.element=Eu(a),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(a,d){if(a<=this.length&&a>=0){var u=document.createTextNode(d);return this.element.insertBefore(u,this.nodes[a]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},l.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},l}(),Af=function(){function l(a){this.rules=[],this.length=0}return l.prototype.insertRule=function(a,d){return a<=this.length&&(this.rules.splice(a,0,d),this.length++,!0)},l.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},l.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},l}(),eu=mi,_f={isServer:!mi,useCSSOMInjection:!df},Pu=function(){function l(a,d,u){a===void 0&&(a=rr),d===void 0&&(d={});var f=this;this.options=Ze(Ze({},_f),a),this.gs=d,this.names=new Map(u),this.server=!!a.isServer,!this.server&&mi&&eu&&(eu=!1,Zd(this)),Bo(this,function(){return function(w){for(var E=w.getTag(),_=E.length,T="",G=function($){var F=function(pe){return xi.get(pe)}($);if(F===void 0)return"continue";var X=w.names.get(F),se=E.getGroup($);if(X===void 0||!X.size||se.length===0)return"continue";var J="".concat(tr,".g").concat($,'[id="').concat(F,'"]'),Q="";X!==void 0&&X.forEach(function(pe){pe.length>0&&(Q+="".concat(pe,","))}),T+="".concat(se).concat(J,'{content:"').concat(Q,'"}').concat(zo)},V=0;V<_;V++)G(V);return T}(f)})}return l.registerId=function(a){return ai(a)},l.prototype.rehydrate=function(){!this.server&&mi&&Zd(this)},l.prototype.reconstructWithOptions=function(a,d){return d===void 0&&(d=!0),new l(Ze(Ze({},this.options),a),this.gs,d&&this.names||void 0)},l.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(a=function(d){var u=d.useCSSOMInjection,f=d.target;return d.isServer?new Af(f):u?new If(f):new Of(f)}(this.options),new Cf(a)));var a},l.prototype.hasNameForId=function(a,d){return this.names.has(a)&&this.names.get(a).has(d)},l.prototype.registerName=function(a,d){if(ai(a),this.names.has(a))this.names.get(a).add(d);else{var u=new Set;u.add(d),this.names.set(a,u)}},l.prototype.insertRules=function(a,d,u){this.registerName(a,d),this.getTag().insertRules(ai(a),u)},l.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},l.prototype.clearRules=function(a){this.getTag().clearGroup(ai(a)),this.clearNames(a)},l.prototype.clearTag=function(){this.tag=void 0},l}(),Mf=/&/g,Df=/^\s*\/\/.*$/gm;function Tu(l,a){return l.map(function(d){return d.type==="rule"&&(d.value="".concat(a," ").concat(d.value),d.value=d.value.replaceAll(",",",".concat(a," ")),d.props=d.props.map(function(u){return"".concat(a," ").concat(u)})),Array.isArray(d.children)&&d.type!=="@keyframes"&&(d.children=Tu(d.children,a)),d})}function Lf(l){var a,d,u,f=rr,w=f.options,E=w===void 0?rr:w,_=f.plugins,T=_===void 0?Ci:_,G=function(F,X,se){return se.startsWith(d)&&se.endsWith(d)&&se.replaceAll(d,"").length>0?".".concat(a):F},V=T.slice();V.push(function(F){F.type===yi&&F.value.includes("&")&&(F.props[0]=F.props[0].replace(Mf,d).replace(u,G))}),E.prefix&&V.push(af),V.push(sf);var $=function(F,X,se,J){X===void 0&&(X=""),se===void 0&&(se=""),J===void 0&&(J="&"),a=J,d=X,u=new RegExp("\\".concat(d,"\\b"),"g");var Q=F.replace(Df,""),pe=tf(se||X?"".concat(se," ").concat(X," { ").concat(Q," }"):Q);E.namespace&&(pe=Tu(pe,E.namespace));var oe=[];return fi(pe,lf(V.concat(of(function(ie){return oe.push(ie)})))),oe};return $.hash=T.length?T.reduce(function(F,X){return X.name||Kr(15),Zt(F,X.name)},yu).toString():"",$}var $f=new Pu,_o=Lf(),Ru=H.createContext({shouldForwardProp:void 0,styleSheet:$f,stylis:_o});Ru.Consumer;H.createContext(void 0);function nu(){return Lo.useContext(Ru)}var Nu=function(){function l(a,d){var u=this;this.inject=function(f,w){w===void 0&&(w=_o);var E=u.name+w.hash;f.hasNameForId(u.id,E)||f.insertRules(u.id,E,w(u.rules,E,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=d,Bo(this,function(){throw Kr(12,String(u.name))})}return l.prototype.getName=function(a){return a===void 0&&(a=_o),this.name+a.hash},l}(),Ff=function(l){return l>="A"&&l<="Z"};function tu(l){for(var a="",d=0;d<l.length;d++){var u=l[d];if(d===1&&u==="-"&&l[0]==="-")return l;Ff(u)?a+="-"+u.toLowerCase():a+=u}return a.startsWith("ms-")?"-"+a:a}var Iu=function(l){return l==null||l===!1||l===""},Ou=function(l){var a,d,u=[];for(var f in l){var w=l[f];l.hasOwnProperty(f)&&!Iu(w)&&(Array.isArray(w)&&w.isCss||sr(w)?u.push("".concat(tu(f),":"),w,";"):qr(w)?u.push.apply(u,Xr(Xr(["".concat(f," {")],Ou(w),!1),["}"],!1)):u.push("".concat(tu(f),": ").concat((a=f,(d=w)==null||typeof d=="boolean"||d===""?"":typeof d!="number"||d===0||a in cf||a.startsWith("--")?String(d).trim():"".concat(d,"px")),";")))}return u};function Et(l,a,d,u){if(Iu(l))return[];if(Uo(l))return[".".concat(l.styledComponentId)];if(sr(l)){if(!sr(w=l)||w.prototype&&w.prototype.isReactComponent||!a)return[l];var f=l(a);return Et(f,a,d,u)}var w;return l instanceof Nu?d?(l.inject(d,u),[l.getName(u)]):[l]:qr(l)?Ou(l):Array.isArray(l)?Array.prototype.concat.apply(Ci,l.map(function(E){return Et(E,a,d,u)})):[l.toString()]}function zf(l){for(var a=0;a<l.length;a+=1){var d=l[a];if(sr(d)&&!Uo(d))return!1}return!0}var Uf=vu(Si),Bf=function(){function l(a,d,u){this.rules=a,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&zf(a),this.componentId=d,this.baseHash=Zt(Uf,d),this.baseStyle=u,Pu.registerId(d)}return l.prototype.generateAndInjectStyles=function(a,d,u){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,d,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&d.hasNameForId(this.componentId,this.staticRulesId))f=Ct(f,this.staticRulesId);else{var w=Oo(Et(this.rules,a,d,u)),E=Io(Zt(this.baseHash,w)>>>0);if(!d.hasNameForId(this.componentId,E)){var _=u(w,".".concat(E),void 0,this.componentId);d.insertRules(this.componentId,E,_)}f=Ct(f,E),this.staticRulesId=E}else{for(var T=Zt(this.baseHash,u.hash),G="",V=0;V<this.rules.length;V++){var $=this.rules[V];if(typeof $=="string")G+=$;else if($){var F=Oo(Et($,a,d,u));T=Zt(T,F+V),G+=F}}if(G){var X=Io(T>>>0);d.hasNameForId(this.componentId,X)||d.insertRules(this.componentId,X,u(G,".".concat(X),void 0,this.componentId)),f=Ct(f,X)}}return f},l}(),Au=H.createContext(void 0);Au.Consumer;var Po={};function Hf(l,a,d){var u=Uo(l),f=l,w=!Eo(l),E=a.attrs,_=E===void 0?Ci:E,T=a.componentId,G=T===void 0?function(ee,ue){var q=typeof ee!="string"?"sc":Xd(ee);Po[q]=(Po[q]||0)+1;var B="".concat(q,"-").concat(wu(Si+q+Po[q]));return ue?"".concat(ue,"-").concat(B):B}(a.displayName,a.parentComponentId):T,V=a.displayName,$=V===void 0?function(ee){return Eo(ee)?"styled.".concat(ee):"Styled(".concat(mf(ee),")")}(l):V,F=a.displayName&&a.componentId?"".concat(Xd(a.displayName),"-").concat(a.componentId):a.componentId||G,X=u&&f.attrs?f.attrs.concat(_).filter(Boolean):_,se=a.shouldForwardProp;if(u&&f.shouldForwardProp){var J=f.shouldForwardProp;if(a.shouldForwardProp){var Q=a.shouldForwardProp;se=function(ee,ue){return J(ee,ue)&&Q(ee,ue)}}else se=J}var pe=new Bf(d,F,u?f.componentStyle:void 0);function oe(ee,ue){return function(q,B,Re){var en=q.attrs,gn=q.componentStyle,_n=q.defaultProps,an=q.foldedComponentIds,We=q.styledComponentId,nn=q.target,cn=H.useContext(Au),Fe=nu(),xe=q.shouldForwardProp||Fe.shouldForwardProp,R=uf(B,cn,_n)||rr,L=function(re,ne,he){for(var le,ce=Ze(Ze({},ne),{className:void 0,theme:he}),De=0;De<re.length;De+=1){var Mn=sr(le=re[De])?le(ce):le;for(var jn in Mn)ce[jn]=jn==="className"?Ct(ce[jn],Mn[jn]):jn==="style"?Ze(Ze({},ce[jn]),Mn[jn]):Mn[jn]}return ne.className&&(ce.className=Ct(ce.className,ne.className)),ce}(en,B,R),N=L.as||nn,g={};for(var k in L)L[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&L.theme===R||(k==="forwardedAs"?g.as=L.forwardedAs:xe&&!xe(k,N)||(g[k]=L[k]));var K=function(re,ne){var he=nu(),le=re.generateAndInjectStyles(ne,he.styleSheet,he.stylis);return le}(gn,L),Y=Ct(an,We);return K&&(Y+=" "+K),L.className&&(Y+=" "+L.className),g[Eo(N)&&!ju.has(N)?"class":"className"]=Y,Re&&(g.ref=Re),Lo.createElement(N,g)}(ie,ee,ue)}oe.displayName=$;var ie=H.forwardRef(oe);return ie.attrs=X,ie.componentStyle=pe,ie.displayName=$,ie.shouldForwardProp=se,ie.foldedComponentIds=u?Ct(f.foldedComponentIds,f.styledComponentId):"",ie.styledComponentId=F,ie.target=u?f.target:l,Object.defineProperty(ie,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=u?function(ue){for(var q=[],B=1;B<arguments.length;B++)q[B-1]=arguments[B];for(var Re=0,en=q;Re<en.length;Re++)Ao(ue,en[Re],!0);return ue}({},f.defaultProps,ee):ee}}),Bo(ie,function(){return".".concat(ie.styledComponentId)}),w&&bu(ie,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ie}function ru(l,a){for(var d=[l[0]],u=0,f=a.length;u<f;u+=1)d.push(a[u],l[u+1]);return d}var su=function(l){return Object.assign(l,{isCss:!0})};function _u(l){for(var a=[],d=1;d<arguments.length;d++)a[d-1]=arguments[d];if(sr(l)||qr(l))return su(Et(ru(Ci,Xr([l],a,!0))));var u=l;return a.length===0&&u.length===1&&typeof u[0]=="string"?Et(u):su(Et(ru(u,a)))}function Mo(l,a,d){if(d===void 0&&(d=rr),!a)throw Kr(1,a);var u=function(f){for(var w=[],E=1;E<arguments.length;E++)w[E-1]=arguments[E];return l(a,d,_u.apply(void 0,Xr([f],w,!1)))};return u.attrs=function(f){return Mo(l,a,Ze(Ze({},d),{attrs:Array.prototype.concat(d.attrs,f).filter(Boolean)}))},u.withConfig=function(f){return Mo(l,a,Ze(Ze({},d),f))},u}var Mu=function(l){return Mo(Hf,l)},En=Mu;ju.forEach(function(l){En[l]=Mu(l)});function Wf(l){for(var a=[],d=1;d<arguments.length;d++)a[d-1]=arguments[d];var u=Oo(_u.apply(void 0,Xr([l],a,!1))),f=wu(u);return new Nu(f,u)}const Vf=Wf`
  from { box-shadow: 0 0 0 0 rgba(99,102,241,0.3); }
  to   { box-shadow: 0 0 0 8px rgba(99,102,241,0.0); }
`,c={Topic:En.section`
        --card: #121622;
        --muted: #9aa3b2;
        --accent: #6366f1;
        --expose: #0f0;
        background: var(--card);
        border: 1px solid #1c2333;
        border-radius: 14px;
        margin: 10px 0 16px;
        overflow: hidden;
    `,Title:En.button`
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
    `,Arrow:En.span`
        display: inline-block;
        width: 16px;
        text-align: center;
        color: var(--accent);
        transition: transform 180ms ease;
        transform: rotate(0deg);
        &[data-open="true"] {
            transform: rotate(90deg);
        }
    `,Panel:En.div`
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
    `,Content:En.div`
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
        ul,
        ol {
            margin: 8px 0 14px 18px;
        }
        em {
            color: #cbd5e1;
        }
    `,Code:En.pre`
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
            animation: ${Vf} 2s ease-out 1;
        }
    `,Kbd:En.code`
        padding: 1px 6px;
        border-radius: 6px;
        background: #0b0f19;
        border: 1px solid #1c2333;
        font-size: 0.9em;
    `,Divider:En.hr`
        border: none;
        border-top: 1px dashed #263049;
        margin: 16px 0;
    `};function Jf({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="react-definition";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"React: definition & inspiration"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Gf,{})})})]})}function Gf(){return n.jsxs(c.Content,{children:[n.jsx("h3",{children:"What is React (how I define it)"}),n.jsxs("p",{children:["React is a ",n.jsx("strong",{children:"JavaScript library for building user interfaces"}),". I use it to describe UI as a pure function of state: ",n.jsx("em",{children:"UI = f(state)"}),". Instead of manually manipulating the DOM step-by-step, I declare how the UI should look for a given state and React takes care of updating the browser efficiently."]}),n.jsxs("p",{children:["It’s ",n.jsx("strong",{children:"component-based"})," (I build small, reusable components),"," ",n.jsx("strong",{children:"declarative"})," (I say “what”, not “how”), and it prefers"," ",n.jsx("strong",{children:"one-way data flow"})," (data goes down from parent to child)."]}),n.jsx("h3",{children:"Why React was created (the inspiration I keep in mind)"}),n.jsxs("p",{children:["React originated to tame complex, interactive UIs where frequent state changes made imperative DOM code fragile. The big idea was: treat the DOM as a ",n.jsx("em",{children:"result"})," of state, reconcile differences between the previous and next “virtual tree”, and update only what changed. This approach simplified mental load and reduced UI bugs caused by manual DOM ops."]}),n.jsx("p",{children:"Composition over inheritance, predictable data flow, and a fast diffing strategy (keys + identity) are the core inspirations that shaped how I write React apps today."}),n.jsx("h3",{children:"Mini example (UI = f(state))"}),n.jsx(c.Code,{"aria-label":"UI = f(state)",children:String.raw`function Hello() {
  const [name, setName] = React.useState("Ash");

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
// I declare what the UI should be for the current 'name'.
// React handles the DOM updates when 'name' changes.`}),n.jsx("h3",{children:"Where I reach for React (and where I don't)"}),n.jsx("p",{children:"I reach for React when I’m building interactive dashboards, forms, and views with lots of dynamic state. If a page is mostly static content, plain HTML/CSS (or a lightweight templating setup) can be enough; I don’t force React where it doesn’t add value."}),n.jsxs("p",{children:["That’s my short, practical mental picture: ",n.jsx("strong",{children:"components + state → declarative UI"}),", with React efficiently reconciling changes under the hood."]})]})}function Xf({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="vite-install";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Vite install (create app, run dev)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(qf,{})})})]})}function qf(){return n.jsxs(c.Content,{children:[n.jsx("h3",{children:"Prereq (1-time)"}),n.jsx("p",{children:"I generally work on node version 18."}),n.jsx(c.Code,{"aria-label":"check node",children:String.raw`node -v   # v18.20.4`}),n.jsx("h3",{children:"Create a new React app (interactive)"}),n.jsx("p",{children:"I usually run the interactive creator and pick React."}),n.jsx(c.Code,{"aria-label":"create vite app",children:String.raw`npm create vite@latest

# Prompts I pick:
# ✔ Project name: » reactjs-handbook
# ✔ Select a framework: » React
# ✔ Select a variant: » JavaScript
`}),n.jsx("h4",{children:"One-liner (skip prompts)"}),n.jsx(c.Code,{"aria-label":"one-liner create",children:String.raw`npm create vite@latest reactjs-handbook -- --template react`}),n.jsx("h3",{children:"Install & run locally"}),n.jsx(c.Code,{"aria-label":"install + dev",children:String.raw`cd reactjs-handbook
npm i
npm run dev   # opens http://localhost:5173`}),n.jsx("h3",{children:"Handy flags I use while coding"}),n.jsx(c.Code,{"aria-label":"dev flags",children:String.raw`# choose a different port if 5173 is busy
npm run dev -- --port 5174`}),n.jsx("h3",{children:"Quick notes I keep in mind"}),n.jsx("ul",{children:n.jsxs("li",{children:["After first run, I commit my own structure and add ",n.jsx("code",{children:"styled-components"})," when I start UI."]})}),n.jsx(c.Divider,{}),n.jsxs("p",{children:["That's it: create → install → ",n.jsx("strong",{children:"npm run dev"})," at ",n.jsx("code",{children:"http://localhost:5173"}),"."]})]})}var iu=Object.freeze,Kf=Object.defineProperty,Qf=(l,a)=>iu(Kf(l,"raw",{value:iu(l.slice())})),lu;function Yf({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="project-tree";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Project tree (what each file does)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Zf,{})})})]})}function Zf(){return n.jsxs(c.Content,{children:[n.jsx("h3",{children:"My project tree (Vite + React)"}),n.jsx(c.Code,{"aria-label":"folder tree",children:String.raw`.
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
`}),n.jsx("h3",{children:"What each file does (short)"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"index.html"})," - Minimal HTML with a ",n.jsx("code",{children:'<div id="root">'}),". Vite injects the built JS here."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"src/main.jsx"})," - Boot file; creates the root and renders ",n.jsx("code",{children:"<App />"}),"."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"src/App.jsx"})," - App shell; I mount ",n.jsx("code",{children:"<ReactTutorial />"})," here."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"src/ReactTutorial.jsx"})," - Lists all topic components (each one collapsible)."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"src/topics/"})," - Every note lives in its own file (e.g. ",n.jsx("code",{children:"ViteInstall.jsx"}),")."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"src/styled.js"})," - Shared Styled object with primitives:",n.jsx("code",{children:"Topic"}),", ",n.jsx("code",{children:"Title"}),", ",n.jsx("code",{children:"Arrow"}),", ",n.jsx("code",{children:"Panel"}),", ",n.jsx("code",{children:"Content"}),", ",n.jsx("code",{children:"Code"}),", ",n.jsx("code",{children:"Divider"}),", etc."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"public/"})," - Files served as-is (no bundling)."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"vite.config.js"})," - Aliases and build dev settings."]})]}),n.jsx("h3",{children:"index.html (tiny and clean)"}),n.jsx(c.Code,{"aria-label":"index.html",children:String.raw(lu||(lu=Qf([`<!doctype html>
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
</html>`])))}),n.jsx("h3",{children:"main.jsx (entry)"}),n.jsx(c.Code,{"aria-label":"main.jsx",children:String.raw`import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // if I keep global styles

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}),n.jsx("h3",{children:"App.jsx (shell)"}),n.jsx(c.Code,{"aria-label":"App.jsx",children:String.raw`import React from "react";
import ReactTutorial from "./ReactTutorial";

export default function App() {
  return <ReactTutorial />;
}`}),n.jsx("h3",{children:"Tip I follow"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Keep ",n.jsx("strong",{children:"topics"})," small and focused-one concept per file."]}),n.jsxs("li",{children:["Assets go in ",n.jsx("code",{children:"src/assets"}),"; import them directly in components."]}),n.jsxs("li",{children:["Shared UI in ",n.jsx("code",{children:"components/"})," if I reuse it across topics."]})]}),n.jsx(c.Divider,{})]})}function em({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="editor-setup";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Editor setup (VS Code, extensions)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(nm,{})})})]})}function nm(){return n.jsxs(c.Content,{children:[n.jsx("h3",{children:"Extensions I install"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"ESLint"})," - dbaeumer.vscode-eslint"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Prettier - Code formatter"})," - esbenp.prettier-vscode"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Error Lens"})," - usernamehw.errorlens"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"vscode-styled-components"})," - styled-components.vscode-styled-components"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Auto Rename Tag"})," - formulahendry.auto-rename-tag"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Auto Close Tag"})," - formulahendry.auto-close-tag"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Path Intellisense"})," - christian-kohler.path-intellisense"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"ES7+ React/Redux snippets"})," - dsznajder.es7-react-js-snippets"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Git Graph"})," - mhutchie.git-graph (nice to have)"]})]}),n.jsx("h3",{children:"Workspace recommendations"}),n.jsx("p",{children:"I add this file so VS Code suggests the right extensions to anyone opening the repo."}),n.jsx(c.Code,{"aria-label":".vscode/extensions.json",children:String.raw`{
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
}`}),n.jsx("h3",{children:"My VS Code settings"}),n.jsx("p",{children:"Format on save + ESLint fixes; tidy imports; good highlighting for styled-components."}),n.jsx(c.Code,{"aria-label":".vscode/settings.json",children:String.raw`{
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
}`}),n.jsx("h3",{children:"Command palette shortcuts"}),n.jsx(c.Code,{"aria-label":"commands",children:String.raw`Ctrl/Cmd + Shift + P →
> Format Document
> Restart ESLint Server
> Developer: Reload Window`}),n.jsx("h3",{children:"Notes"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Prettier handles formatting; ESLint handles code quality/fixes. I run both on save."}),n.jsx("li",{children:"The styled-components extension improves syntax highlighting inside template literals."}),n.jsx("li",{children:"VS Code auto-updates imports when files move (with the settings above)."})]}),n.jsx(c.Divider,{}),n.jsxs("p",{children:[n.jsx("em",{children:"PS:"})," My laptop is older, so I keep VS Code light - I install only essential extensions and prefer a minimal UI to save memory/CPU."]})]})}function tm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="env-files";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:".env / .env.development / .env.production"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(rm,{})})})]})}function rm(){return n.jsxs(c.Content,{children:[n.jsx("h3",{children:"What I use these files for"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:".env"})," - default values for all modes (non-secret)."]}),n.jsxs("li",{children:[n.jsx("strong",{children:".env.development"})," - overrides when I run ",n.jsx("code",{children:"npm run dev"}),"."]}),n.jsxs("li",{children:[n.jsx("strong",{children:".env.production"})," - overrides when I build/serve prod."]}),n.jsxs("li",{children:[n.jsx("strong",{children:".env.local"})," - machine-specific values I don't commit (gitignored)."]})]}),n.jsx("h3",{children:"Important rule (Vite)"}),n.jsxs("p",{children:[n.jsxs("strong",{children:["Only variables prefixed with ",n.jsx("code",{children:"VITE_"})," are exposed to the browser."]})," Everything else is ignored in client code. Also, I access them via ",n.jsx("code",{children:"import.meta.env"})," (not ",n.jsx("code",{children:"process.env"}),")."]}),n.jsx("h3",{children:"Examples I actually use"}),n.jsx(c.Code,{"aria-label":".env files",children:String.raw`# .env
VITE_APP_NAME=ReactJS Handbook

# .env.development
VITE_API_BASE=http://localhost:3000
VITE_DEBUG=true

# .env.production
VITE_API_BASE=https://api.example.com
VITE_DEBUG=false

# .env.local (gitignored; for my machine)
VITE_EXPERIMENT=true`}),n.jsx("p",{children:"Read them in code like this:"}),n.jsx(c.Code,{"aria-label":"usage in code",children:String.raw`// inside React code
const name = import.meta.env.VITE_APP_NAME;
const api  = import.meta.env.VITE_API_BASE;

// Vite's built-ins:
if (import.meta.env.DEV)   console.log("dev mode");
if (import.meta.env.PROD)  console.log("prod mode");
console.log(import.meta.env.MODE);      // "development" | "production" | "staging"...
console.log(import.meta.env.BASE_URL);  // base path`}),n.jsx("h3",{children:"Load order & precedence"}),n.jsx("p",{children:"Later files override earlier ones (more specific wins):"}),n.jsxs("ol",{children:[n.jsx("li",{children:".env"}),n.jsx("li",{children:".env.local"}),n.jsxs("li",{children:[".env.",n.jsx("em",{children:"mode"})]}),n.jsxs("li",{children:[n.jsxs("strong",{children:[".env.",n.jsx("em",{children:"mode"}),".local"]})," (highest priority)"]})]}),n.jsx("h3",{children:"Switching modes (optional)"}),n.jsxs("p",{children:["Dev uses ",n.jsx("code",{children:"development"})," mode by default; build uses ",n.jsx("code",{children:"production"}),". I can opt into a custom mode:"]}),n.jsx(c.Code,{"aria-label":"custom mode",children:String.raw`vite build --mode staging   # will load .env.staging (and .env.staging.local if present)`}),n.jsx("h3",{children:"Git ignore (what I don't commit)"}),n.jsx(c.Code,{"aria-label":".gitignore",children:String.raw`.env.local
.env.*.local`}),n.jsx("h3",{children:"Quick checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Expose only public values with the ",n.jsx("code",{children:"VITE_*"})," prefix."]}),n.jsx("li",{children:"Never store secrets in frontend env files (anyone can view them in the browser)."}),n.jsxs("li",{children:["Use ",n.jsx("code",{children:".env.development"}),"/",n.jsx("code",{children:".env.production"})," for mode-specific overrides."]}),n.jsxs("li",{children:[n.jsx("code",{children:".env.local"})," stays uncommitted for machine-specific tweaks."]})]}),n.jsx(c.Divider,{})]})}function sm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="import-export-basics";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Import/export basics (named vs default)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(im,{})})})]})}function im(){return n.jsxs(c.Content,{children:[n.jsx("h3",{children:"How I decide"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Default export"}),": file exposes one primary thing. Import name is my choice."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Named exports"}),": file exposes multiple things. Names are explicit; great for autocomplete and refactors."]})]}),n.jsx("h3",{children:"Default export"}),n.jsx(c.Code,{"aria-label":"default export",children:String.raw`// math.js
export default function add(a, b) { return a + b; }

// usage
import add from "./math.js";      // I can name it anything
console.log(add(2, 3));`}),n.jsx("h3",{children:"Named exports"}),n.jsx(c.Code,{"aria-label":"named exports",children:String.raw`// math2.js
export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;
export function sub(a, b) { return a - b; }

// usage
import { add, mul, sub } from "./math2.js";
import { add as plus } from "./math2.js";  // rename with 'as'`}),n.jsx("h3",{children:"Mixing default + named (allowed)"}),n.jsx(c.Code,{"aria-label":"mixed exports",children:String.raw`// math3.js
export default function add(a, b) { return a + b; }
export const mul = (a, b) => a * b;

// usage
import add, { mul } from "./math3.js";`}),n.jsx("h3",{children:"Namespace import (group everything)"}),n.jsx(c.Code,{"aria-label":"namespace import",children:String.raw`import * as math from "./math2.js";
console.log(math.add(1, 2), math.mul(2, 3));`}),n.jsx("h3",{children:"Re-exports & barrels"}),n.jsx(c.Code,{"aria-label":"re-exports",children:String.raw`// utils/index.js (barrel)
export * from "./math2.js";           // re-export named
export { default as add } from "./math3.js"; // re-export default with a name

// usage
import { add, mul } from "./utils/index.js";`}),n.jsx("h3",{children:"Dynamic import (on demand)"}),n.jsx(c.Code,{"aria-label":"dynamic import",children:String.raw`const mod = await import("./math2.js");
const { add } = mod;          // named
// const addDefault = mod.default;   // default (if any)`}),n.jsx("h3",{children:"Common mistakes I avoid"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Importing a named symbol from a file that only exports ",n.jsx("em",{children:"default"})," (and vice-versa)."]}),n.jsx("li",{children:"Creating circular imports with large barrel files."}),n.jsxs("li",{children:["Mixing CommonJS (",n.jsx("code",{children:"module.exports"}),") with ESM in the frontend-Vite expects ESM."]})]}),n.jsx(c.Divider,{}),n.jsxs("p",{children:["Rule of thumb I follow: **one main thing → default**, **multiple things → named**. Rename with ",n.jsx("code",{children:"as"})," when needed."]})]})}function lm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="let-vs-const";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"let vs const (avoid var)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(om,{})})})]})}function om(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["Practical rule: ",n.jsxs("strong",{children:["use ",n.jsx("code",{children:"const"})," by default"]}),". Switch to"," ",n.jsx("code",{children:"let"})," only when you truly need to ",n.jsx("em",{children:"reassign"}),". Prefer block scope and avoid ",n.jsx("code",{children:"var"}),"."]}),n.jsx("h3",{children:"Definitions"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"let"}),": ",n.jsx("strong",{children:"block-scoped"})," variable; ",n.jsx("em",{children:"reassignable"}),"; not redeclarable in the same scope."]}),n.jsxs("li",{children:[n.jsx("code",{children:"const"}),": ",n.jsx("strong",{children:"block-scoped binding"}),"; ",n.jsx("em",{children:"not reassignable"}),". For objects/arrays, the reference is fixed but contents can still mutate."]})]}),n.jsx("h3",{children:"Key points"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Scope:"})," ",n.jsx("code",{children:"let"}),"/",n.jsx("code",{children:"const"})," → block; ",n.jsx("code",{children:"var"})," → function."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Redeclare:"})," ",n.jsx("code",{children:"let"}),"/",n.jsx("code",{children:"const"})," ❌ (same scope), ",n.jsx("code",{children:"var"})," ✅."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Reassign:"})," ",n.jsx("code",{children:"let"})," ✅; ",n.jsx("code",{children:"const"})," ❌ (but object/array contents may mutate)."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Readability:"})," ",n.jsx("code",{children:"const"})," signals “this shouldn’t change”, which prevents bugs."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Loops:"})," ",n.jsx("code",{children:"let"})," makes a new binding per iteration (great with async callbacks)."]})]}),n.jsx(c.Divider,{}),n.jsx("h3",{children:"A) Block scope & redeclare vs reassign"}),n.jsx(c.Code,{children:`{
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
console.log(y);        // { n: 2 }`}),n.jsxs("h3",{children:["B) Loops & closures (why ",n.jsx("code",{children:"let"})," shines)"]}),n.jsx(c.Code,{children:`// VAR: one binding shared → all log 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
}

// LET: new binding per iteration → 0,1,2
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);
}`}),n.jsx("h3",{children:"C) const with arrays/objects (mutate vs reassign)"}),n.jsx(c.Code,{children:`const arr = [1, 2, 3];
arr.push(4);           // ✅ mutate contents
// arr = [];           // ❌ reassign binding
console.log(arr);      // [1,2,3,4]

const user = Object.freeze({ id: 1, name: "Ash" });
// user.name = "New";  // ❌ blocked when frozen (strict mode errors)
console.log(user);`}),n.jsx("h3",{children:"D) Shadowing & blocks"}),n.jsx(c.Code,{children:`let value = "outer";
{
  const value = "inner"; // shadowed in block scope
  console.log(value);    // "inner"
}
console.log(value);      // "outer"`}),n.jsx("h3",{children:"When I use which"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"const"})," for imports, config values, functions/components, derived values."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"let"})," for counters, accumulators, and anything that must change over time."]}),n.jsxs("li",{children:["Avoid ",n.jsx("strong",{children:"var"})," (function scope + redeclare allow many footguns)."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Default to ",n.jsx("strong",{children:"const"}),"."]}),n.jsxs("li",{children:["Need to change the value? → switch to ",n.jsx("strong",{children:"let"}),"."]}),n.jsx("li",{children:"Declare before use for clarity."}),n.jsxs("li",{children:["Prefer block scope; avoid ",n.jsx("code",{children:"var"}),"."]})]}),n.jsx(c.Divider,{})]})}function am({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="arrow-functions";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Arrow functions (implicit return, this)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(cm,{})})})]})}function cm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["Arrow functions are concise function expressions with a"," ",n.jsxs("strong",{children:["lexical ",n.jsx("code",{children:"this"})]})," and optional"," ",n.jsx("strong",{children:"implicit return"}),". Great for callbacks and short utilities. Not good as object methods or constructors."]}),n.jsx("h3",{children:"Quick definitions"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Implicit return:"})," single-expression body (no braces) returns that value."]}),n.jsxs("li",{children:[n.jsxs("strong",{children:["Lexical ",n.jsx("code",{children:"this"}),":"]})," arrows capture the surrounding ",n.jsx("code",{children:"this"}),"."]}),n.jsxs("li",{children:["Arrows don’t have their own ",n.jsx("code",{children:"arguments"}),"/",n.jsx("code",{children:"prototype"})," and can’t be used with ",n.jsx("code",{children:"new"}),"."]})]}),n.jsx(c.Divider,{}),n.jsx("h3",{children:"A) Syntax & implicit return"}),n.jsx(c.Code,{children:`// 1 param (parens optional)
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
(() => console.log("IIFE arrow"))();       // "IIFE arrow"`}),n.jsxs("h3",{children:["B) ",n.jsx("code",{children:"this"}),": lexical vs normal functions"]}),n.jsxs("p",{children:["Normal functions have a dynamic ",n.jsx("code",{children:"this"})," (depends on how they’re called). Arrow functions ",n.jsx("em",{children:"capture"})," the surrounding ",n.jsx("code",{children:"this"}),"."]}),n.jsx(c.Code,{children:`const counter = {
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
setTimeout(() => console.log("ticks ~", t.ticks), 3100); // "ticks ~" 3 (approx)`}),n.jsxs("h3",{children:["C) ",n.jsx("code",{children:"arguments"}),", ",n.jsx("code",{children:"call/apply/bind"}),", and constructors"]}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Arrows don’t have their own ",n.jsx("code",{children:"arguments"}),"; use rest ",n.jsx("code",{children:"...args"}),"."]}),n.jsxs("li",{children:[n.jsx("code",{children:"call"}),"/",n.jsx("code",{children:"apply"}),"/",n.jsx("code",{children:"bind"})," don’t change ",n.jsx("code",{children:"this"})," for arrows."]}),n.jsxs("li",{children:["Arrows cannot be used with ",n.jsx("code",{children:"new"})," and have no ",n.jsx("code",{children:"prototype"}),"."]})]}),n.jsx(c.Code,{children:`// No 'arguments' in arrows:
const listArgs = (...args) => args;
console.log(listArgs(1, "a", true));       // [1, "a", true]

// call/apply/bind don't affect 'this' on arrows:
const obj = { id: 42 };
const getId = () => this?.id;              // 'this' from outer scope
console.log(getId.call(obj));              // undefined

// ❌ Arrow as constructor → TypeError
const Person = (name) => { this.name = name; };
// new Person("Ash"); // TypeError: Person is not a constructor`}),n.jsx("h3",{children:"D) Common use-cases"}),n.jsx(c.Code,{children:`// Array utilities
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
console.log(clamp(3, 0, 5));               // 3`}),n.jsx("h3",{children:"E) Pitfalls (and fixes)"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Object methods:"})," avoid arrows when a method needs ",n.jsx("code",{children:"this"}),". Use method syntax."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Returning object literal:"})," wrap in ",n.jsx("code",{children:"(...)"})," or you’ll return ",n.jsx("code",{children:"undefined"}),"."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Multiline:"})," with braces, add an explicit ",n.jsx("code",{children:"return"}),"."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Constructors:"})," never use arrows with ",n.jsx("code",{children:"new"}),"."]}),n.jsxs("li",{children:[n.jsxs("strong",{children:[n.jsx("code",{children:"arguments"}),":"]})," use rest params ",n.jsx("code",{children:"(...args)"})," instead."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Use arrows for small functions and callbacks."}),n.jsxs("li",{children:["Use normal functions for object/class methods that need ",n.jsx("code",{children:"this"}),"."]}),n.jsxs("li",{children:["Implicit return? → no braces. Returning object? → wrap in ",n.jsx("code",{children:"( )"}),"."]}),n.jsxs("li",{children:["Need parameters list? Use defaults, destructuring, or ",n.jsx("code",{children:"...rest"}),"."]})]}),n.jsx(c.Divider,{})]})}function dm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="destructuring";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Destructuring (objects, arrays, parameters)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(um,{})})})]})}function um(){return n.jsxs(c.Content,{children:[n.jsx("p",{children:"Destructuring pulls values out of objects/arrays into variables. It's great for clean code, default values, renaming, and concise function parameters."}),n.jsx("h3",{children:"Core patterns"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Objects:"})," match by ",n.jsx("em",{children:"key name"}),", can rename and set defaults."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Arrays:"})," match by ",n.jsx("em",{children:"position"}),", can skip items and use rest."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Parameters:"})," destructure right in the function signature."]})]}),n.jsx(c.Divider,{}),n.jsx("h3",{children:"A) Object destructuring - basics, renaming, defaults"}),n.jsx(c.Code,{children:`const user = { id: 1, name: "Ash", role: "dev" };

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
console.log(publicUser);                      // { id: 1, name: "Ash" }`}),n.jsx("h3",{children:"B) Array destructuring - positions, skipping, defaults, rest"}),n.jsx(c.Code,{children:`const nums = [10, 20, 30, 40];

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
console.log(p, q);                            // 2 1`}),n.jsx("h3",{children:"C) Function parameters - object/array + defaults"}),n.jsx(c.Code,{children:`// Object param with defaults + renaming
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
// { id: 1, rest: { name: "Ash", role: "dev" } }`}),n.jsx("h3",{children:"D) Practical React patterns"}),n.jsx(c.Code,{children:`// 1) Props destructuring in function signature
function Button({ label = "Click", onClick, disabled = false }) {
  // ...
}

// 2) useState returns an array → array destructuring
const [count, setCount] = React.useState(0);
// count: 0 ; setCount: function

// 3) Destructure API response (object)
const resp = { data: { items: [1,2,3] }, status: 200 };
const { data: { items } = { items: [] }, status } = resp;
console.log(items, status);                   // [1,2,3] 200`}),n.jsx("h3",{children:"E) Destructuring with loops & utilities"}),n.jsx(c.Code,{children:`const scores = { alice: 8, bob: 6, charlie: 9 };

for (const [name, score] of Object.entries(scores)) {
  if (score >= 8) console.log(name, "⭐");   // "alice ⭐", "charlie ⭐"
}

// Map of pairs to objects
const pairs = [["id", 1], ["name", "Ash"]];
const obj = Object.fromEntries(pairs);
console.log(obj);                             // { id: 1, name: "Ash" }`}),n.jsx("h3",{children:"F) Spread vs Rest (quick contrast)"}),n.jsx(c.Code,{children:`// Rest (collect) in binding/params:
const { password, ...safe } = { user: "a2rp", password: "secret" };
console.log(safe);                            // { user: "a2rp" }

// Spread (expand) in literals:
const base = { id: 1, name: "Ash" };
const clone = { ...base, role: "admin" };
console.log(clone);                           // { id: 1, name: "Ash", role: "admin" }`}),n.jsx("h3",{children:"G) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Object vs Array:"})," objects match by key; arrays by position."]}),n.jsxs("li",{children:[n.jsxs("strong",{children:["Defaults run on ",n.jsx("code",{children:"undefined"})]})," (not on ",n.jsx("code",{children:"null"}),")."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Safe nested:"})," give a default to the parent (",n.jsx("code",{children:"{ meta: {} }"}),") to avoid errors."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Rename to avoid conflicts:"})," ",n.jsx("code",{children:"const { id: userId } = user"}),"."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Keep it readable:"})," deep/nested destructuring is powerful-don't overdo it."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Use object destructuring for clarity and defaults."}),n.jsx("li",{children:"Use array destructuring for positions and quick swaps."}),n.jsx("li",{children:"Destructure props & hook returns right at the top."}),n.jsxs("li",{children:["Use rest (",n.jsx("code",{children:"...rest"}),") to exclude or gather extras; spread to clone/extend."]})]}),n.jsx(c.Divider,{})]})}function hm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="rest-and-spread";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Rest & spread (arrays, objects, params)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(pm,{})})})]})}function pm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["**Spread** ",n.jsx("code",{children:"..."})," copies/expands values into a new literal.",n.jsx("br",{}),"**Rest** ",n.jsx("code",{children:"..."})," gathers the remaining values into a single variable (in bindings or parameter lists)."]}),n.jsx("h3",{children:"A) Spread - Arrays"}),n.jsx(c.Code,{children:`const a = [1, 2];
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
console.log([..."hey"]);               // ["h", "e", "y"]`}),n.jsx("h3",{children:"B) Rest - Arrays & bindings"}),n.jsx(c.Code,{children:`const nums = [10, 20, 30, 40];

const [head, ...tail] = nums;
console.log(head);                     // 10
console.log(tail);                     // [20, 30, 40]

// skip with commas + rest
const [, second, ...rest] = nums;
console.log(second);                   // 20
console.log(rest);                     // [30, 40]`}),n.jsx("h3",{children:"C) Spread - Objects"}),n.jsx(c.Code,{children:`const base = { id: 1, name: "Ash" };

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
console.log(user.info.score);          // 9  (same inner object reference)`}),n.jsx("h3",{children:"D) Rest - Object properties"}),n.jsx(c.Code,{children:`const user = { id: 1, name: "Ash", password: "secret", role: "dev" };

// pick some, gather the rest
const { password, ...publicUser } = user;
console.log(publicUser);               // { id: 1, name: "Ash", role: "dev" }

// rename + rest
const { id: userId, ...rest } = user;
console.log(userId);                   // 1
console.log(rest.role);                // "dev"`}),n.jsx("h3",{children:"E) Parameters: defaults, rest & spread"}),n.jsx(c.Code,{children:`// rest in params (collects arguments)
const sum = (...nums) => nums.reduce((a, n) => a + n, 0);
console.log(sum(1, 2, 3));             // 6

// default params + rest
const makeUrl = (base = "/", ...parts) => base + parts.join("/");
console.log(makeUrl("/api", "v1", "users")); // "/api/v1/users"

// spread when calling
const pair = [4, 6];
console.log(sum(...pair));             // 10

// NOTE: rest must be last
// const bad = (a, ...rest, b) => {}   // ❌ SyntaxError`}),n.jsx("h3",{children:"F) Practical React patterns"}),n.jsx(c.Code,{children:`// 1) Update array state immutably
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
console.log(finalProps.disabled);      // true`}),n.jsx("h3",{children:"G) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Shallow copies only:"})," spread does not deep-clone nested objects/arrays."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Order matters:"})," in object spreads, later keys overwrite earlier keys."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Performance:"})," for very large arrays/objects, repeated spreads can be costly-batch updates when possible."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Rest vs spread:"})," rest collects in bindings/params; spread expands in literals/calls."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Use spread to clone/merge immutably."}),n.jsx("li",{children:"Use rest in destructuring and function params to gather extras."}),n.jsx("li",{children:"Remember: shallow copy-be careful with nested structures."}),n.jsx("li",{children:"In objects, put overrides last so they win."})]}),n.jsx(c.Divider,{})]})}function fm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="template-literals";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Template literals (interpolation, multiline, tags)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(mm,{})})})]})}function mm(){return n.jsxs(c.Content,{children:["Template literals use backticks ",n.jsx("code",{children:"`"})," to make strings easier:",n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:" interpolation "})," with ",n.jsxs("code",{children:["$","{ ... }"]}),","]}),n.jsxs("li",{children:[n.jsx("strong",{children:" multiline "})," strings, and ",n.jsx("strong",{children:" tagged templates"}),"."]})]}),n.jsx("h3",{children:"A) Basics - interpolation & multiline"}),n.jsx(c.Code,{children:`const name = "Ash";
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
console.log(\`Total: \${taxed(100)}\`);       // "Total: 118"`}),n.jsxs("h3",{children:["B) Expressions inside ",n.jsxs("code",{children:["$","{ ... }"]})]}),n.jsx(c.Code,{children:`const a = 3, b = 5;
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
// 'user={"id":1,"name":"Ash"}'`}),n.jsxs("h3",{children:["C) Escaping backticks & ",n.jsxs("code",{children:["$","{ ... }"]})]}),n.jsx(c.Code,{children:'// Escape a backtick inside a template with \\`\nconst s = `Use a backtick like: \\`this\\``;\nconsole.log(s);                              // "Use a backtick like: `this`"\n\n// To show ${...} literally, escape the \'$\' or wrap in a normal string\nconsole.log(`Show \\${x} literally`);      // "Show ${x} literally"'}),n.jsx("h3",{children:"D) Tagged templates (advanced but useful)"}),n.jsxs("p",{children:["A ",n.jsx("em",{children:"tag"})," is a function that receives the string parts and the evaluated values. You can format, sanitize, or highlight values."]}),n.jsx(c.Code,{children:`// Simple highlight tag: wrap values in [brackets]
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
showRaw\`line1\\nline2\`;                      // prints "line1\\nline2"`}),n.jsxs("h3",{children:["E) ",n.jsx("code",{children:"String.raw"})," (keep backslashes)"]}),n.jsx(c.Code,{children:`// Useful for regex, paths, or copy-paste snippets
const raw = String.raw\`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(raw);                              // "C:\\Users\\Ash\\nNewLine"

// Compare with normal template:
const normal = \`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(normal);
// "C:\\Users\\Ash
// NewLine"`}),n.jsx("h3",{children:"F) Practical patterns"}),n.jsx(c.Code,{children:`// 1) Build URLs safely with encodeURIComponent
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
console.log(label(3));                         // "3 items"`}),n.jsx("h3",{children:"G) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Don't over-nest logic"})," inside ",n.jsxs("code",{children:["$","{ ... }"]}),"; extract helpers for readability."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Escape backticks"})," with ",n.jsx("code",{children:"\\\\`"})," when you must include them literally."]}),n.jsxs("li",{children:[n.jsxs("strong",{children:["Use ",n.jsx("code",{children:"JSON.stringify"})]})," to embed objects safely."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Beware of whitespace"}),": multiline templates keep your indentation/spaces."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"For raw backslashes"}),", prefer ",n.jsx("code",{children:"String.raw"})," or a tag."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Use backticks for interpolation and multiline strings."}),n.jsx("li",{children:"Keep complex logic out of templates-call helpers instead."}),n.jsxs("li",{children:["Escape backticks and ",n.jsx("code",{children:"$"})," when showing them literally."]}),n.jsxs("li",{children:["Use ",n.jsx("code",{children:"String.raw"})," or tagged templates for special formatting."]})]}),n.jsx(c.Divider,{})]})}function xm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="default-parameters";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Default parameters (practical patterns & pitfalls)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(gm,{})})})]})}function gm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["Default parameters set a value when an argument is ",n.jsxs("strong",{children:["explicitly ",n.jsx("code",{children:"undefined"})]}),". They do ",n.jsx("em",{children:"not"})," trigger for ",n.jsx("code",{children:"null"}),", ",n.jsx("code",{children:"0"}),", ",n.jsx("code",{children:"false"}),", or ",n.jsx("code",{children:'""'}),"."]}),n.jsxs("h3",{children:["A) Basics - only when arg is ",n.jsx("code",{children:"undefined"})]}),n.jsx(c.Code,{children:`function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet("Ash"));        // "Hello, Ash"
console.log(greet());             // "Hello, Guest"  (no arg → undefined)
console.log(greet(undefined));    // "Hello, Guest"
console.log(greet(null));         // "Hello, null"   (null ≠ undefined)`}),n.jsx("h3",{children:"B) Defaults with expressions (evaluated only when used)"}),n.jsx(c.Code,{children:`let calls = 0;
function expensive() { calls++; return 99; }

function demo(a = expensive()) {
  return a;
}

console.log(demo(5));             // 5        (expensive() NOT called)
console.log(demo());              // 99       (expensive() called)
console.log(calls);               // 1`}),n.jsx("h3",{children:"C) Using earlier params in later defaults (allowed)"}),n.jsx(c.Code,{children:`function area(w = 1, h = w) {
  return w * h;
}
console.log(area(3));             // 9  (h defaults to w)
console.log(area(3, 4));          // 12

// The reverse is NOT allowed (can't use a later param in an earlier default):
// function bad(a = b, b = 1) {}   // ❌ ReferenceError at call time`}),n.jsx("h3",{children:"D) Destructuring + defaults (object & array)"}),n.jsx(c.Code,{children:`// Object param with its own default AND property defaults
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
console.log(sumPair());            // 0`}),n.jsx("h3",{children:"E) Defaults vs logical OR (don't break on falsey values)"}),n.jsx(c.Code,{children:`// Using defaults keeps 0 / false / "" intact:
function padLeft(str, n = 0) { return " ".repeat(n) + str; }
console.log(padLeft("X", 0));      // "X"  (0 kept)

// naive || fallback would override 0:
function padLeftBad(str, n) { n = n || 2; return " ".repeat(n) + str; }
console.log(padLeftBad("X", 0));   // "  X"  (oops)`}),n.jsx("h3",{children:"F) With rest & spread (what's valid)"}),n.jsx(c.Code,{children:`const sum = (...nums) => nums.reduce((a,n) => a + n, 0);
console.log(sum(1,2,3));           // 6

// Rest must come last and cannot have a default:
// const bad = (...nums = []) => 0  // ❌ SyntaxError

// Spreading into a call works as usual
console.log(sum(...[4,6]));        // 10`}),n.jsx("h3",{children:"G) Practical React patterns"}),n.jsx(c.Code,{children:`// 1) Default simple props in the signature
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
console.log(Price({ amount: 100, tax: 5 })); // 105`}),n.jsx("h3",{children:"H) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Only undefined triggers"})," the default (not ",n.jsx("code",{children:"null"})," or other falsey values)."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Order matters:"})," you can use previous params in later defaults, not the other way around."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Evaluate-on-demand:"})," expensive defaults run only when the arg is missing."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Destructuring + defaults:"})," give the whole param a default object/array to avoid errors."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"React:"})," prefer prop defaults in the function signature; keep objects stable to avoid re-renders."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Use defaults instead of ",n.jsx("code",{children:"||"}),' when 0/""/false are valid inputs.']}),n.jsx("li",{children:"Put cheaper params first; compute later defaults from earlier ones if needed."}),n.jsxs("li",{children:["For params that are objects/arrays, default the whole param too (",n.jsx("code",{children:"{}"})," or ",n.jsx("code",{children:"[]"}),")."]})]}),n.jsx(c.Divider,{})]})}function jm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="optional-chaining";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsxs("span",{children:["Optional chaining ",n.jsx("code",{children:"?."})," (safer nested access & calls)"]})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(ym,{})})})]})}function ym(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Optional chaining"})," returns ",n.jsx("code",{children:"undefined"})," instead of throwing if the part on the ",n.jsx("em",{children:"left"})," of ",n.jsx("code",{children:"?."})," is ",n.jsx("code",{children:"null"})," or ",n.jsx("code",{children:"undefined"}),". It ",n.jsx("em",{children:"does not"})," short-circuit for other falsey values like ",n.jsx("code",{children:"0"}),", ",n.jsx("code",{children:"false"}),", or ",n.jsx("code",{children:'""'}),"."]}),n.jsx("h3",{children:"A) Property & element access"}),n.jsx(c.Code,{children:`const user = { id: 1, profile: { email: "a@b.com" } };

console.log(user?.profile?.email);        // "a@b.com"
console.log(user?.settings?.theme);       // undefined (no throw)

// element access with []
const prefKey = "theme";
console.log(user?.prefs?.[prefKey]);      // undefined

// arrays
const arr = [10, 20, 30];
console.log(arr?.[0]);                    // 10
const maybe = null;
console.log(maybe?.[0]);                  // undefined (safe)`}),n.jsx("h3",{children:"B) Optional call (functions & methods)"}),n.jsx(c.Code,{children:`const maybeCb = undefined;
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
console.log(nothing?.inc?.());            // undefined`}),n.jsx("h3",{children:"C) Combine with a default (preview for next topic)"}),n.jsx(c.Code,{children:`const api = { data: { items: [1,2,3] } };
const first = api?.data?.items?.[0] ?? null;
console.log(first);                        // 1

const missing = {};
console.log(missing?.data?.items?.[0] ?? "none"); // "none"`}),n.jsxs("h3",{children:["D) vs ",n.jsx("code",{children:"&&"})," (truthy check)"]}),n.jsx(c.Code,{children:`const n = 0;
console.log(n && n.toString());           // 0   (short-circuits on falsy 0)
console.log(n?.toString());               // "0" (0 is not null/undefined, so it proceeds)`}),n.jsx("h3",{children:"E) Practical React / DOM patterns"}),n.jsx(c.Code,{children:`// React props / API responses
const title = props?.post?.title ?? "Untitled";
const firstItem = resp?.data?.items?.[0] ?? null;

// Safe event access
const handle = (e) => {
  const id = e?.currentTarget?.dataset?.id ?? "unknown";
  // ...
};

// DOM query
document.querySelector("#title")?.scrollIntoView({ behavior: "smooth" });`}),n.jsx("h3",{children:"F) Pitfalls & rules"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsxs("strong",{children:["Only guard what's left of ",n.jsx("code",{children:"?."}),":"]})," write each uncertain hop as ",n.jsx("code",{children:"?."})," (",n.jsx("code",{children:"a?.b?.c"}),"), not ",n.jsx("code",{children:"a?.b.c"}),"."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Not an lvalue:"})," you can't assign to it — ",n.jsx("code",{children:"obj?.prop = 1"})," ❌ (SyntaxError)."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Doesn't mask real errors:"})," if a function exists but throws, ",n.jsx("code",{children:"?."})," won't catch that."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Don't overuse:"})," if something should exist by contract, validate up-front instead of chaining everywhere."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Use ",n.jsx("code",{children:"?."})," for uncertain hops; chain it per level."]}),n.jsxs("li",{children:["It short-circuits only on ",n.jsx("code",{children:"null"}),"/",n.jsx("code",{children:"undefined"}),"."]}),n.jsxs("li",{children:["Pair with ",n.jsx("code",{children:"??"})," (next topic) to provide clean defaults."]}),n.jsxs("li",{children:["For methods, prefer ",n.jsx("code",{children:"obj?.method?.()"})," to preserve ",n.jsx("code",{children:"this"}),"."]})]}),n.jsx(c.Divider,{})]})}function vm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="nullish-coalescing";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsxs("span",{children:["Nullish coalescing ",n.jsx("code",{children:"??"})," (clean fallbacks)"]})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(wm,{})})})]})}function wm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:[n.jsx("strong",{children:n.jsx("code",{children:"??"})})," returns the right-hand value ",n.jsx("em",{children:"only if"})," the left-hand side is ",n.jsx("code",{children:"null"})," or ",n.jsx("code",{children:"undefined"}),' (aka "nullish"). It keeps valid falsey values like ',n.jsx("code",{children:"0"}),", ",n.jsx("code",{children:"false"}),", and ",n.jsx("code",{children:'""'}),"."]}),n.jsx("h3",{children:"A) Basics — only null/undefined trigger the fallback"}),n.jsx(c.Code,{children:`console.log(null ?? "fallback");         // "fallback"
console.log(undefined ?? "fallback");    // "fallback"

// falsey but NOT nullish → left value is kept
console.log(0 ?? 100);                   // 0
console.log(false ?? true);              // false
console.log("" ?? "N/A");                // ""`}),n.jsxs("h3",{children:["B) vs ",n.jsx("code",{children:"||"})," (truthy check)"]}),n.jsx(c.Code,{children:`// || uses truthiness → will replace 0/""/false
console.log(0 || 100);                   // 100   (oops)
console.log(0 ?? 100);                   // 0     (correct when 0 is valid)

console.log("" || "N/A");                // "N/A" (oops)
console.log("" ?? "N/A");                // ""    (keep empty string)`}),n.jsx("h3",{children:"C) With optional chaining (common pattern)"}),n.jsx(c.Code,{children:`const resp = { data: { items: [1,2,3] } };

const first = resp?.data?.items?.[0] ?? null;
console.log(first);                       // 1

const missing = {};
const list = missing?.data?.items ?? [];
console.log(Array.isArray(list), list.length); // true 0`}),n.jsxs("h3",{children:["D) Precedence & mixing with ",n.jsx("code",{children:"&&"}),"/",n.jsx("code",{children:"||"})]}),n.jsx(c.Code,{children:`// You cannot mix ?? with &&/|| without parentheses:
// const bad = null ?? 0 || 5;           // ❌ SyntaxError

const v1 = (null ?? 0) || 5;
console.log(v1);                          // 5   (0 || 5 → 5)

const v2 = null ?? (0 || 5);
console.log(v2);                          // 5   (0 || 5 → 5)

const v3 = (undefined ?? 7) && "ok";
console.log(v3);                          // "ok"`}),n.jsxs("h3",{children:["E) Nullish coalescing assignment ",n.jsx("code",{children:"??="})]}),n.jsx(c.Code,{children:`let a = null;
a ??= 10;
console.log(a);                           // 10

let b = 0;
b ??= 5;                                  // left is NOT null/undefined
console.log(b);                           // 0 (kept)

const cfg = { retries: undefined };
cfg.retries ??= 3;
console.log(cfg.retries);                 // 3`}),n.jsx("h3",{children:"F) Edge cases (NaN, empty arrays/objects)"}),n.jsx(c.Code,{children:`const n = NaN;
console.log(n ?? 0);                      // NaN (not nullish)
console.log(Number.isNaN(n) ? 0 : n);     // 0   (explicit fallback for NaN)

const arr = [];
console.log((arr ?? ["x"]).length);       // 0 (arr is not nullish)

const obj = {};
console.log((obj ?? { a: 1 }));           // {} (obj is not nullish)`}),n.jsx("h3",{children:"G) Practical React patterns"}),n.jsx(c.Code,{children:`// 1) Safe prop fallbacks (keep 0/false/"")
const label = props?.label ?? "—";
const disabled = props?.disabled ?? false;

// 2) Controlled inputs: avoid undefined
const value = form?.name ?? "";

// 3) API defaults
const items = resp?.data?.items ?? [];
const total = resp?.data?.total ?? 0;

// 4) Optional callback call
props?.onSelect?.(id ?? 0);               // combine ?. and ??`}),n.jsx("h3",{children:"H) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsxs("strong",{children:["Use ",n.jsx("code",{children:"??"}),' when 0/""/false are valid']})," and should not trigger a fallback."]}),n.jsxs("li",{children:[n.jsxs("strong",{children:["Prefer ",n.jsx("code",{children:"a?.b ?? default"})]})," for uncertain chains with defaults."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Add parentheses"})," when mixing with ",n.jsx("code",{children:"&&"})," or ",n.jsx("code",{children:"||"}),"."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"NaN is not nullish"}),": coalesce explicitly if you need a number fallback."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Left side null/undefined? → returns right side; otherwise returns left."}),n.jsxs("li",{children:["Don't replace valid falsey values—use ",n.jsx("code",{children:"??"}),", not ",n.jsx("code",{children:"||"}),"."]}),n.jsxs("li",{children:["Pair with ",n.jsx("code",{children:"?."}),' to avoid "cannot read property" errors.']}),n.jsxs("li",{children:["Consider ",n.jsx("code",{children:"??="}),' for concise "set if missing".']})]}),n.jsx(c.Divider,{})]})}function km({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="map-filter-reduce";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Map / Filter / Reduce (transform, select, aggregate)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Sm,{})})})]})}function Sm(){return n.jsxs(c.Content,{children:[n.jsxs("div",{style:{marginBottom:"30px"},children:["Three array workhorses:",n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"map"})," transforms each item,"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"filter"})," keeps matching items, and "]}),n.jsxs("li",{children:[n.jsx("strong",{children:"reduce"})," folds many values into one (sum, object, etc.)."]})]}),"All return ",n.jsx("em",{children:" new arrays/values"})," and do not mutate the original."]}),n.jsx("h3",{children:"A) map - transform each item"}),n.jsx(c.Code,{children:`const nums = [1, 2, 3];
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
console.log(["10","11","12"].map(Number));    // [10, 11, 12]`}),n.jsx("h3",{children:"B) filter - keep items that pass the test"}),n.jsx(c.Code,{children:`const arr = [1, 2, 3, 4, 5, 6];
const evens = arr.filter(n => n % 2 === 0);
console.log(evens);                           // [2, 4, 6]

// Remove null/undefined quickly
const messy = [0, null, "hi", undefined, false];
console.log(messy.filter(Boolean));           // ["hi"] (drops 0/false too!)
console.log(messy.filter(v => v != null));    // [0, "hi", false] (keeps 0/false)

// Unique with filter + indexOf
const dups = [2,2,3,3,3,1];
const unique = dups.filter((n, i, a) => a.indexOf(n) === i);
console.log(unique);                          // [2, 3, 1]`}),n.jsx("h3",{children:"C) reduce - fold into a single value"}),n.jsx(c.Code,{children:`const nums = [5, 2, 7];

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
console.log(Object.keys(groups));             // ["A", "B"]`}),n.jsx("h3",{children:"D) Chain them - readable pipelines"}),n.jsx(c.Code,{children:`const nums = [1,2,3,4,5,6];
const result = nums
  .filter(n => n % 2 === 0)   // keep evens → [2,4,6]
  .map(n => n * n)            // square     → [4,16,36]
  .reduce((a, n) => a + n, 0);// sum        → 56
console.log(result);                          // 56`}),n.jsx("h3",{children:"E) Immutability & side-effects"}),n.jsx(c.Code,{children:`const a = [1,2,3];

// Do NOT mutate the same array while mapping/filtering
// Bad:
const bad = a.map(n => { a.push(99); return n; });
console.log(a.length, bad.length);            // 6 3 (weird bugs)

// Good: treat callbacks as pure functions
const good = a.map(n => n * 10);
console.log(good);                            // [10, 20, 30]`}),n.jsx("h3",{children:"F) Practical React patterns"}),n.jsx(c.Code,{children:`// 1) Render lists
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
// <li key={todo.id}>...</li>`}),n.jsx("h3",{children:"G) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"map"})," must return a value each time; forgetting a return gives an array of undefined."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"filter"})," expects a boolean; return the condition directly."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"reduce"}),": always provide an initial value (especially for empty arrays)."]}),n.jsxs("li",{children:["For deep transforms, consider ",n.jsx("code",{children:"flatMap"})," or a single well-named ",n.jsx("code",{children:"reduce"})," for clarity."]}),n.jsx("li",{children:"Don't mutate items inside callbacks; return new objects/arrays."})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Transform → ",n.jsx("strong",{children:"map"}),"; select → ",n.jsx("strong",{children:"filter"}),"; aggregate → ",n.jsx("strong",{children:"reduce"}),"."]}),n.jsx("li",{children:"Keep callbacks pure; no side-effects."}),n.jsxs("li",{children:["Give ",n.jsx("code",{children:"reduce"})," an initial accumulator."]}),n.jsx("li",{children:"Prefer pipeline readability over micro-optimizing chains."})]}),n.jsx(c.Divider,{})]})}function Cm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="find-some-every";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Find / Some / Every (search, any, all)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(bm,{})})})]})}function bm(){return n.jsxs(c.Content,{children:[n.jsxs("div",{style:{marginBottom:"30px"},children:["Three quick checks:",n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"find"})," returns the first matching item,"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"some"})," tells if ",n.jsx("em",{children:"any"})," matches, and"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"every"})," checks if ",n.jsx("em",{children:" all"})," match."]})]}),"They do not mutate the array and they short-circuit."]}),n.jsxs("h3",{children:["A) ",n.jsx("code",{children:"find"})," - get the first matching element"]}),n.jsx(c.Code,{children:`const users = [
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
console.log(users.find(u => u.name === "Foo")?.id ?? "NA"); // "NA"`}),n.jsxs("h3",{children:["B) ",n.jsx("code",{children:"some"})," - does any element pass?"]}),n.jsx(c.Code,{children:`const nums = [1, 3, 5, 8];

console.log(nums.some(n => n % 2 === 0));      // true  (8 is even)
console.log(nums.some(n => n > 10));           // false

// Practical: any item out of stock?
const cart = [{ id: 1, qty: 2 }, { id: 2, qty: 0 }];
console.log(cart.some(item => item.qty === 0)); // true`}),n.jsxs("h3",{children:["C) ",n.jsx("code",{children:"every"})," - do all elements pass?"]}),n.jsx(c.Code,{children:`const scores = [7, 8, 9];

console.log(scores.every(s => s >= 7));         // true
console.log(scores.every(s => s >= 9));         // false

// NOTE: empty arrays
console.log([].every(x => x > 0));              // true  (vacuously true)
console.log([].some(x => x > 0));               // false`}),n.jsx("h3",{children:"D) Objects & deep checks"}),n.jsx(c.Code,{children:`const people = [
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
console.log(people.every(p => p.tags.includes("dev")));   // false`}),n.jsxs("h3",{children:["E) Compare with ",n.jsx("code",{children:"includes"})," (value vs predicate)"]}),n.jsx(c.Code,{children:`// includes checks values (strict equality), not conditions:
console.log([1,2,3].includes(2));              // true
// find/some let you write a predicate:
console.log([1,2,3].some(n => n > 2));         // true`}),n.jsx("h3",{children:"F) Performance & short-circuiting"}),n.jsx(c.Code,{children:`// these stop early:
// - find: after first match
// - some: after first true
// - every: after first false

let steps = 0;
[1,2,3,4].some(n => (steps++, n > 2));
console.log(steps);                             // 3 (stopped at 3)`}),n.jsx("h3",{children:"G) Practical React patterns"}),n.jsx(c.Code,{children:`// 1) Validation: all fields valid?
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
// if (!todo) return null;`}),n.jsx("h3",{children:"H) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"find"})," can return ",n.jsx("code",{children:"undefined"})," - guard with ",n.jsx("code",{children:"?."})," or a default."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"every"})," on an empty array returns ",n.jsx("code",{children:"true"}),"; ",n.jsx("strong",{children:"some"})," returns ",n.jsx("code",{children:"false"}),"."]}),n.jsxs("li",{children:["Predicates should be ",n.jsx("strong",{children:"pure"})," (no side-effects) for predictable behavior."]}),n.jsx("li",{children:"For large lists, these short-circuit - keep the cheap checks first in your predicate."})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Need the item itself? → ",n.jsx("strong",{children:"find"}),"."]}),n.jsxs("li",{children:["Need a yes/no if ",n.jsx("em",{children:"any"}),"? → ",n.jsx("strong",{children:"some"}),"."]}),n.jsxs("li",{children:["Need a yes/no if ",n.jsx("em",{children:"all"}),"? → ",n.jsx("strong",{children:"every"}),"."]}),n.jsxs("li",{children:["Remember undefined from ",n.jsx("code",{children:"find"}),"; handle it safely."]})]}),n.jsx(c.Divider,{})]})}function Em({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="sort-without-mutating";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsxs("span",{children:["Sort (without mutating) - ",n.jsx("code",{children:"toSorted"}),", copy+sort"]})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Pm,{})})})]})}function Pm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:[n.jsx("code",{children:"Array.prototype.sort()"})," sorts ",n.jsx("em",{children:"in place"})," (it ",n.jsx("strong",{children:"mutates"})," the array). For immutable code, use ",n.jsx("code",{children:"toSorted()"})," (best) or clone first and then ",n.jsx("code",{children:"sort()"}),"."]}),n.jsx("h3",{children:"A) The mutation gotcha"}),n.jsx(c.Code,{children:`const a = [3, 1, 2];
const b = a.sort();                 // MUTATES 'a'
console.log(a);                     // [1, 2, 3]
console.log(b);                     // [1, 2, 3] (same reference)
`}),n.jsx("h3",{children:"B) Safe patterns (no mutation)"}),n.jsx(c.Code,{children:`// 1) Modern: toSorted (returns a new array)
const nums = [3, 10, 2];
const asc = nums.toSorted((x, y) => x - y);
console.log(nums);                  // [3, 10, 2]  (unchanged)
console.log(asc);                   // [2, 3, 10]

// 2) Classic: copy then sort
const copyAsc = [...nums].sort((x, y) => x - y);
console.log(copyAsc);               // [2, 3, 10]
`}),n.jsx("h3",{children:"C) Numbers - ascending/descending"}),n.jsx(c.Code,{children:`const n = [10, 2, 5, 1];

// Default sort is lexicographic (strings) - wrong for numbers:
console.log([...n].sort());         // [1, 10, 2, 5]  (not numeric)

// Correct numeric comparators:
const asc = n.toSorted((a, b) => a - b);
console.log(asc);                   // [1, 2, 5, 10]

const desc = n.toSorted((a, b) => b - a);
console.log(desc);                  // [10, 5, 2, 1]
`}),n.jsx("h3",{children:"D) Strings - locale & case"}),n.jsx(c.Code,{children:`const cities = ["mumbai", "Delhi", "bengaluru"];

// ASCII compare (case-sensitive)
console.log([...cities].sort());    
// ["Delhi", "bengaluru", "mumbai"]

// Locale/case-insensitive + numeric aware
const nice = cities.toSorted((a, b) => 
  a.localeCompare(b, "en-IN", { sensitivity: "base", numeric: true })
);
console.log(nice);
// ["bengaluru", "Delhi", "mumbai"]
`}),n.jsx("h3",{children:"E) Dates - by timestamp"}),n.jsx(c.Code,{children:`const dates = [new Date("2025-01-01"), new Date("2024-12-31")];
const byTime = dates.toSorted((a, b) => a - b);
console.log(byTime.map(d => d.toISOString().slice(0,10)));
// ["2024-12-31", "2025-01-01"]
`}),n.jsx("h3",{children:"F) Objects - by field, with nulls-last"}),n.jsx(c.Code,{children:`const people = [
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
`}),n.jsx("h3",{children:"G) Multi-key sort (tie-breakers)"}),n.jsx(c.Code,{children:`const rows = [
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
`}),n.jsx("h3",{children:"H) React-friendly patterns"}),n.jsx(c.Code,{children:`// 1) Never mutate props/state directly
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
`}),n.jsx("h3",{children:"I) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Default sort is string-based."})," Always pass a comparator for numbers/dates."]}),n.jsxs("li",{children:[n.jsxs("strong",{children:[n.jsx("code",{children:"sort()"})," mutates."]})," Prefer ",n.jsx("code",{children:"toSorted()"})," or clone before sorting."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Locale/case rules:"})," use ",n.jsx("code",{children:"localeCompare"})," with options for user-facing text."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Nulls/undefined:"})," coerce to sentinel values (e.g., ",n.jsx("code",{children:"Infinity"}),") or handle explicitly."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Multi-key:"})," chain with ",n.jsx("code",{children:"||"})," returning the first non-zero comparison."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Immutable? → ",n.jsx("code",{children:"toSorted"})," (best) or ",n.jsx("code",{children:"[...arr].sort(cmp)"}),"."]}),n.jsxs("li",{children:["Numbers/dates → numeric comparator (",n.jsx("code",{children:"a-b"}),")."]}),n.jsxs("li",{children:["Strings for UI → ",n.jsx("code",{children:"localeCompare"})," with options."]}),n.jsx("li",{children:"Define small, pure comparators; reuse them."})]}),n.jsx(c.Divider,{})]})}function Tm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="flat-and-flatmap";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Flat / FlatMap (flatten arrays & map+flatten)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Rm,{})})})]})}function Rm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:[n.jsx("code",{children:"flat"})," removes one or more levels of nesting and returns a ",n.jsx("strong",{children:"new array"}),".",n.jsx("code",{children:" flatMap"})," = ",n.jsx("code",{children:"map"})," then ",n.jsx("code",{children:"flat(1)"})," in a single pass."]}),n.jsxs("h3",{children:["A) ",n.jsx("code",{children:"flat"})," - basics & depth"]}),n.jsx(c.Code,{children:`const a = [1, [2, 3], [4, [5]]];

console.log(a.flat());                 // [1, 2, 3, 4, [5]]       (default depth = 1)
console.log(a.flat(2));                // [1, 2, 3, 4, 5]
console.log(a.flat(Infinity));         // [1, 2, 3, 4, 5]         (flatten all levels)

// Original is unchanged:
console.log(a);                        // [1, [2,3], [4, [5]]]`}),n.jsx("h3",{children:"B) Holes (sparse arrays) are removed"}),n.jsx(c.Code,{children:`const sparse = [1, , 3, [ , 4 ]];
// flat removes empty slots
console.log(sparse.flat());            // [1, 3, 4]`}),n.jsxs("h3",{children:["C) ",n.jsx("code",{children:"flatMap"})," - map then flatten once"]}),n.jsx(c.Code,{children:`const sentences = ["hi there", "good day"];
// split words from each sentence and flatten
const words = sentences.flatMap(s => s.split(" "));
console.log(words);                    // ["hi", "there", "good", "day"]

// Equivalent two-step:
console.log(sentences.map(s => s.split(" ")).flat());
// [["hi","there"],["good","day"]] → ["hi","there","good","day"]

// Remove nulls while mapping:
const items = [1, null, 2, null];
const cleaned = items.flatMap(x => (x == null ? [] : [x]));
console.log(cleaned);                  // [1, 2]`}),n.jsx("h3",{children:"D) API pagination → flatten pages"}),n.jsx(c.Code,{children:`const pages = [
  { items: [1, 2] },
  { items: [3] },
  { items: [] },
];
const all = pages.flatMap(p => p.items);
console.log(all);                      // [1, 2, 3]`}),n.jsx("h3",{children:"E) Nested mapping patterns"}),n.jsx(c.Code,{children:`// turn groups -> list of user ids
const groups = [
  { team: "A", users: [{id:1},{id:2}] },
  { team: "B", users: [{id:3}] },
];
const userIds = groups.flatMap(g => g.users.map(u => u.id));
console.log(userIds);                  // [1, 2, 3]

// one level only! deeper arrays need an extra flat:
const deep = [ [ [1] ], [ [2, 3] ] ];
console.log(deep.flatMap(x => x).flat()); // [[1], [2, 3]] → [1, 2, 3]`}),n.jsx("h3",{children:"F) React-friendly patterns"}),n.jsx(c.Code,{children:`// 1) Flatten sectioned menu items before rendering
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
console.log(propsObj);                 // { a:1, b:2, c:3 }`}),n.jsx("h3",{children:"G) Performance tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"flat"})," returns a copy; heavy flattening (",n.jsx("code",{children:"Infinity"}),") can allocate big arrays."]}),n.jsxs("li",{children:["Prefer ",n.jsx("code",{children:"flatMap"})," over ",n.jsx("code",{children:"map().flat()"})," for one-level cases (fewer passes)."]}),n.jsx("li",{children:"Keep mapping callbacks pure; avoid pushing into outer arrays inside the callback."})]}),n.jsx("h3",{children:"H) Pitfalls & gotchas"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Depth:"})," default is 1. If your output is still nested, pass a deeper depth or add another ",n.jsx("code",{children:"flat"}),"."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Not deep merge:"})," flattening arrays of objects doesn't merge objects-just removes array nesting."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Sparse arrays:"})," empty slots are removed by ",n.jsx("code",{children:"flat"}),"; don't rely on their indexes later."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Legacy runtimes:"})," very old environments may lack ",n.jsx("code",{children:"flat/flatMap"}),"; consider a polyfill if needed."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Need to remove one nesting level? → ",n.jsx("strong",{children:"flat()"})," (or set ",n.jsx("em",{children:"depth"}),")."]}),n.jsxs("li",{children:["Need map + flatten(1) in one go? → ",n.jsx("strong",{children:"flatMap(fn)"}),"."]}),n.jsx("li",{children:"Watch out for sparse arrays-they collapse."}),n.jsxs("li",{children:["Avoid ",n.jsx("code",{children:"Infinity"})," unless you really need full flattening."]})]}),n.jsx(c.Divider,{})]})}function Nm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="object-utilities";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsxs("span",{children:["Object utilities: ",n.jsx("code",{children:"keys"}),", ",n.jsx("code",{children:"values"}),", ",n.jsx("code",{children:"entries"}),", ",n.jsx("code",{children:"assign"})]})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Im,{})})})]})}function Im(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["Everyday helpers for working with plain objects: get keys/values/pairs, transform with",n.jsx("code",{children:" entries"})," ⟷ ",n.jsx("code",{children:"fromEntries"}),", and merge/clone with ",n.jsx("code",{children:"assign"}),". These work on an object's ",n.jsx("em",{children:"own enumerable string-keyed"})," properties (symbols are ignored)."]}),n.jsxs("h3",{children:["A) ",n.jsx("code",{children:"Object.keys"})," - list own keys (strings)"]}),n.jsx(c.Code,{children:`const user = { id: 1, name: "Ash" };
console.log(Object.keys(user));                    // ["id", "name"]

// Integer-like keys are ordered numerically first, then the rest by insertion:
const order = { "2": "two", "1": "one", a: "A" };
console.log(Object.keys(order));                   // ["1", "2", "a"]`}),n.jsxs("h3",{children:["B) ",n.jsx("code",{children:"Object.values"})," - list own values"]}),n.jsx(c.Code,{children:`const point = { x: 10, y: 20 };
console.log(Object.values(point));                 // [10, 20]`}),n.jsxs("h3",{children:["C) ",n.jsx("code",{children:"Object.entries"})," ⟷ ",n.jsx("code",{children:"Object.fromEntries"})]}),n.jsx(c.Code,{children:`const stats = { a: 1, b: 2 };
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
console.log(publicUser);                            // { id: 1, name: "Ash" }`}),n.jsxs("h3",{children:["D) ",n.jsx("code",{children:"Object.assign"})," - merge/clone (shallow) ⚠️ mutates target"]}),n.jsx(c.Code,{children:`const target = { a: 1 };
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
console.log(original.nested.x);                      // 2  (same inner object)`}),n.jsx("h3",{children:"E) Symbols & non-enumerables (FYI)"}),n.jsx(c.Code,{children:`const s = Symbol("s");
const obj = { a: 1, [s]: 2 };
console.log(Object.keys(obj));                       // ["a"] (symbols ignored)
console.log(Object.getOwnPropertySymbols(obj));      // [Symbol(s)]
// Non-enumerable props are also skipped by keys/values/entries`}),n.jsxs("h3",{children:["F) Practical transforms with ",n.jsx("code",{children:"entries"})]}),n.jsx(c.Code,{children:`// 1) Rename keys
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
console.log(invert({ a:1, b:2 }));                  // { "1":"a", "2":"b" }`}),n.jsx("h3",{children:"G) React-friendly patterns"}),n.jsx(c.Code,{children:`// 1) Render object as a list
const features = { darkMode: true, beta: false };
// Object.entries(features).map(([k, v]) => <li key={k}>{k}: {String(v)}</li>)

// 2) Merge default props/options (spread is equivalent to assign into {})
const defaults = { size: "md", disabled: false };
const final = { ...defaults, ...{ disabled: true } };  // or Object.assign({}, defaults, { disabled: true })
console.log(final);                                    // { size: "md", disabled: true }

// 3) Build object from pairs for quick lookup
const list = [{ id:1, name:"Ash" }, { id:2, name:"Riya" }];
const byId = Object.fromEntries(list.map(u => [u.id, u]));
console.log(byId[2].name);                              // "Riya"`}),n.jsx("h3",{children:"H) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsxs("strong",{children:[n.jsx("code",{children:"assign"})," mutates its first arg"]}),"; use ",n.jsx("code",{children:"Object.assign({}, a, b)"})," or spread for a new object."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Shallow only:"})," both ",n.jsx("code",{children:"assign"})," and spread copy references for nested objects."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"keys/values/entries"})," ignore symbols & non-enumerables; use ",n.jsx("code",{children:"Object.getOwnPropertySymbols"})," / descriptors if needed."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Key order:"})," integer-like keys come first in ascending order, then others by insertion."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Transform/filter objects via ",n.jsx("code",{children:"entries → map/filter → fromEntries"}),"."]}),n.jsxs("li",{children:["Merge immutably with ",n.jsx("code",{children:"Object.assign({}, ...)"})," or spread."]}),n.jsx("li",{children:"Remember it's all shallow copies - be careful with nested state."}),n.jsxs("li",{children:["Need symbols? Grab them with ",n.jsx("code",{children:"Object.getOwnPropertySymbols"}),"."]})]}),n.jsx(c.Divider,{})]})}function Om({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="sets-and-maps";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Sets & Maps (when they help)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Am,{})})})]})}function Am(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["Use a ",n.jsx("strong",{children:"Set"})," for unique values + fast ",n.jsx("code",{children:"has"})," checks. Use a ",n.jsx("strong",{children:"Map"})," for key→value where keys can be ",n.jsx("em",{children:"any type"})," (objects, arrays, functions), with stable iteration order."]}),n.jsx("h3",{children:"A) Set - unique values & fast membership"}),n.jsx(c.Code,{children:`const s = new Set([1, 2, 2, 3]);
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
console.log(unique([2,2,3,1,3]));          // [2, 3, 1]`}),n.jsx("h3",{children:"B) Set operations - union, intersection, difference"}),n.jsx(c.Code,{children:`const A = new Set([1,2,3]);
const B = new Set([3,4]);

const union = new Set([...A, ...B]);
console.log([...union]);                   // [1,2,3,4]

const intersection = new Set([...A].filter(x => B.has(x)));
console.log([...intersection]);            // [3]

const difference = new Set([...A].filter(x => !B.has(x)));
console.log([...difference]);              // [1,2]`}),n.jsx("h3",{children:"C) Map - key→value with any key type"}),n.jsx(c.Code,{children:`const m = new Map([["id", 1], ["name", "Ash"]]);
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
console.log(objFromMap);                          // { a: 1, b: 2 }`}),n.jsx("h3",{children:"D) When Sets/Maps help vs Arrays/Objects"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Set"}),": quick dedupe; O(1) membership checks (e.g., selected IDs, visited nodes)."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Map"}),": non-string keys; predictable insertion order; avoids prototype pitfalls of objects."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Object"}),": best for JSON, simple string-keyed records, and ergonomic literals."]})]}),n.jsx("h3",{children:"E) WeakSet / WeakMap (lifetime tied to object keys)"}),n.jsx(c.Code,{children:`// WeakMap keys must be objects; entries are GC'd when keys are unreachable
const wm = new WeakMap();
let k = {};
wm.set(k, { meta: "cached" });
console.log(wm.has(k));                           // true
k = null; // after GC, entry may disappear (can't reliably log timing)`}),n.jsx("h3",{children:"F) Practical React patterns"}),n.jsx(c.Code,{children:`// 1) Selected IDs as a Set (immutable updates)
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
console.log(getSum(2,3), getSum(2,3));            // 5 5 (second from cache)`}),n.jsx("h3",{children:"G) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Not JSON-serializable:"})," ",n.jsx("code",{children:"Set"}),"/",n.jsx("code",{children:"Map"})," need conversion (e.g., ",n.jsx("code",{children:"[...set]"}),", ",n.jsx("code",{children:"Object.fromEntries(map)"}),")."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Reference identity:"})," Map keys compare by reference; use the same object instance or a stable string key."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Iteration order:"})," Set/Map iterate in insertion order; use this for deterministic UI."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Shallow semantics:"})," Sets don't deep-compare objects; two equal-shaped objects are different keys."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Need uniqueness or fast membership? → ",n.jsx("strong",{children:"Set"}),"."]}),n.jsxs("li",{children:["Need keys that aren't strings? → ",n.jsx("strong",{children:"Map"}),"."]}),n.jsx("li",{children:"Convert before JSON/storage; prefer objects for raw API payloads."}),n.jsx("li",{children:"For React state, clone Sets/Maps to new instances to trigger updates."})]}),n.jsx(c.Divider,{})]})}function _m({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="promises-async-await";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Promises & async/await (patterns, errors, concurrency)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Mm,{})})})]})}function Mm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Promise"})," represents a value that will resolve later.",n.jsx("strong",{children:"async/await"})," makes promise code read like sync code. Use ",n.jsx("code",{children:"try/catch"})," for errors, and prefer ",n.jsx("strong",{children:"concurrency"})," helpers (",n.jsx("code",{children:"Promise.all"}),", etc.) for speed."]}),n.jsx("h3",{children:"A) Make a Promise & basic handlers"}),n.jsx(c.Code,{children:`// Create a promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("OK"), 100);
});

p.then(v => console.log("then:", v))     // "then: OK"
 .catch(e => console.log("error:", e))
 .finally(() => console.log("done"));    // "done" (always runs)

// Shortcut: Promise.resolve / Promise.reject
Promise.resolve(42).then(x => console.log(x)); // 42`}),n.jsx("h3",{children:"B) Chain & propagate errors"}),n.jsx(c.Code,{children:`Promise.resolve(2)
  .then(x => x * 3)                        // 6
  .then(x => { throw new Error("boom"); })
  .then(() => "never")
  .catch(err => "handled: " + err.message)  // "handled: boom"
  .then(msg => console.log(msg));           // "handled: boom"`}),n.jsx("h3",{children:"C) async/await - sugar over promises"}),n.jsx(c.Code,{children:`async function work() {
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
console.log(work() instanceof Promise);    // true`}),n.jsx("h3",{children:"D) Concurrent vs sequential (speed matters)"}),n.jsx(c.Code,{children:`// Slow (sequential): waits one by one
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
fast().then(x => console.log("fast:", x)); // "fast: 2"`}),n.jsx("h3",{children:"E) Promise helpers - all / allSettled / race / any"}),n.jsx(c.Code,{children:`const ok = (v, ms=50) => new Promise(r => setTimeout(() => r(v), ms));
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
// Promise.any([fail("X",30), ok("Y",40)]).then(v => console.log(v));        // "Y"`}),n.jsx("h3",{children:"F) Fetch JSON helper + timeout (AbortController)"}),n.jsx(c.Code,{children:`// NOTE: Full "Fetch basics + JSON" is its own topic.
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
// fetchJSON("/api/users").then(data => console.log(Array.isArray(data))); // true/false`}),n.jsx("h3",{children:"G) Loops: forEach pitfall, use for...of or Promise.all"}),n.jsx(c.Code,{children:`const delay = ms => new Promise(r => setTimeout(r, ms));

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
conc([1,2]);   // fast`}),n.jsx("h3",{children:"H) Microtasks vs macrotasks (timing)"}),n.jsx(c.Code,{children:`console.log("A");
Promise.resolve().then(() => console.log("B (microtask)"));
setTimeout(() => console.log("C (macrotask)"), 0);
console.log("D");
// Order: A, D, B (microtask), C (macrotask)`}),n.jsx("h3",{children:"I) Tiny promisify utility"}),n.jsx(c.Code,{children:`// Convert a callback API into a promise-based one
const promisify = (fn) => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

// Example (simulated):
function legacySum(a, b, cb) { setTimeout(() => cb(null, a + b), 20); }
const sumP = promisify(legacySum);
sumP(2,3).then(v => console.log(v));           // 5`}),n.jsx("h3",{children:"J) Practical React pattern (fetch in effect + abort)"}),n.jsx(c.Code,{children:`// inside a component:
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
// }, []);`}),n.jsx("h3",{children:"K) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Always return/await"})," promises you start; avoid unhandled rejections."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Don't mix styles"})," unnecessarily: pick ",n.jsx("em",{children:"either"})," ",n.jsx("code",{children:"then/catch"})," or ",n.jsx("code",{children:"async/await"})," in a block."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Concurrency"}),": start promises first, then ",n.jsx("code",{children:"await Promise.all"}),"."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"forEach + async"})," is a trap - use ",n.jsx("code",{children:"for...of"})," or ",n.jsx("code",{children:"Promise.all(map())"}),"."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Timeouts & cancel"}),": use ",n.jsx("code",{children:"AbortController"})," or a ",n.jsx("code",{children:"race"})," with a timeout promise."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"async functions return Promises"}),"; throw to reject, return to resolve."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Use ",n.jsx("strong",{children:"async/await"})," + ",n.jsx("code",{children:"try/catch"})," for readable async code."]}),n.jsxs("li",{children:["Batch work with ",n.jsx("code",{children:"Promise.all"})," for speed; handle partials with ",n.jsx("code",{children:"allSettled"}),"."]}),n.jsxs("li",{children:["Guard fetches with ",n.jsx("code",{children:"AbortController"})," (cleanup on unmount)."]}),n.jsx("li",{children:"Know the event loop: microtasks (promise callbacks) run before timeouts."})]}),n.jsx(c.Divider,{})]})}function Dm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="fetch-basics-json";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Fetch basics + JSON (GET/POST, errors, timeout, retry)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Lm,{})})})]})}function Lm(){return n.jsxs(c.Content,{children:[n.jsx("div",{children:n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"fetch()"})," returns a ",n.jsx("strong",{children:"Promise<Response>"}),"."]}),n.jsxs("li",{children:["Always check ",n.jsx("code",{children:"res.ok"})," / ",n.jsx("code",{children:"res.status"}),", then parse with ",n.jsx("code",{children:"res.json()"})," (or ",n.jsx("code",{children:"res.text()"}),")."]}),n.jsxs("li",{children:["Use ",n.jsx("code",{children:"AbortController"})," for timeouts/cancel and wrap with small helpers."]})]})}),n.jsx("h3",{children:"A) GET JSON - with query params"}),n.jsx(c.Code,{children:`// Build URL with search params
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
});`}),n.jsx("h3",{children:"B) POST JSON - send body & read JSON"}),n.jsx(c.Code,{children:`async function postJSON(u, body) {
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
  .catch(e => console.error("create failed:", e.message));`}),n.jsx("h3",{children:"C) Errors: network vs HTTP vs invalid JSON"}),n.jsx(c.Code,{children:`async function safeJSON(u) {
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
}`}),n.jsxs("h3",{children:["D) Timeout / cancel with ",n.jsx("code",{children:"AbortController"})]}),n.jsx(c.Code,{children:`async function getJSONWithTimeout(u, { timeout = 8000, ...opts } = {}) {
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
// "AbortError"`}),n.jsx("h3",{children:"E) Simple retry with exponential backoff"}),n.jsx(c.Code,{children:`async function retry(fn, { tries = 3, baseMs = 300 } = {}) {
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
  .catch(e => console.log("failed:", e.message));`}),n.jsx("h3",{children:"F) Non-JSON responses (204, text, blobs)"}),n.jsx(c.Code,{children:`// 204 No Content: don't call res.json()
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
  .then(b => console.log(b.type.startsWith("image/"))); // true`}),n.jsx("h3",{children:"G) Credentials, headers, and base URL"}),n.jsx(c.Code,{children:`// Send cookies to same-site/another origin (if server allows it)
fetch("/api/me", { credentials: "include" });

// Common headers helper
const jsonHeaders = { "Content-Type": "application/json", Accept: "application/json" };

// Build base URL once
const API = (path) => \`\${import.meta.env.VITE_API_BASE}\${path}\`;
console.log(API("/health")); // e.g., "https://api.example.com/health"`}),n.jsx("h3",{children:"H) React pattern - effect with abort & state"}),n.jsx(c.Code,{children:`// Inside a component:
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
// }, []);`}),n.jsx("h3",{children:"I) Node vs Browser (tiny note)"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Browsers: ",n.jsx("code",{children:"fetch"})," is built-in. CORS must be allowed by the server."]}),n.jsxs("li",{children:["Node: built-in from Node ",n.jsx("strong",{children:"18+"}),". Older Node needs a polyfill (e.g., ",n.jsx("code",{children:"node-fetch"}),")."]})]}),n.jsx("h3",{children:"J) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsxs("strong",{children:["Always check ",n.jsx("code",{children:"res.ok"})]})," before parsing JSON."]}),n.jsxs("li",{children:[n.jsxs("strong",{children:["Don't ",n.jsx("code",{children:"await res.json()"})," twice"]})," - the body stream is one-time."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"POST JSON:"})," remember ",n.jsx("code",{children:"JSON.stringify"})," and the ",n.jsx("code",{children:"Content-Type"})," header."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Timeouts:"})," use ",n.jsx("code",{children:"AbortController"})," or a ",n.jsx("code",{children:"Promise.race"})," pattern."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Retries:"})," only retry idempotent calls or ensure your API is retry-safe."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["GET/POST helpers that check ",n.jsx("code",{children:"ok"})," and parse once."]}),n.jsx("li",{children:"Abort on unmount; surface errors to UI."}),n.jsx("li",{children:"Backoff retries for flaky networks."}),n.jsx("li",{children:"Handle 204/text/blob paths, not just JSON."})]}),n.jsx(c.Divider,{})]})}function $m({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="timers";return n.jsxs(c.Topic,{children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Timers (setTimeout, setInterval)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Fm,{})})})]})}function Fm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:[n.jsx("code",{children:"setTimeout"})," runs a callback once after a delay; ",n.jsx("code",{children:"setInterval"})," runs repeatedly. Always keep the returned ",n.jsx("em",{children:"id"})," and clear with ",n.jsx("code",{children:"clearTimeout"})," /"," ",n.jsx("code",{children:"clearInterval"}),". In React, start timers in effects and clean them up on unmount."]}),n.jsxs("h3",{children:["A) ",n.jsx("code",{children:"setTimeout"})," basics (one-shot)"]}),n.jsx(c.Code,{children:`console.log("sync 1");
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
clearTimeout(t);`}),n.jsxs("h3",{children:["B) ",n.jsx("code",{children:"setInterval"})," (repeating) + clear"]}),n.jsx(c.Code,{children:`let count = 0;
const iv = setInterval(() => {
  count++;
  console.log("tick", count);
  // "tick 1", "tick 2", "tick 3"
  if (count === 3) clearInterval(iv); // stops after 3
}, 100);`}),n.jsxs("h3",{children:["C) Drift & accuracy: ",n.jsx("em",{children:"recursive"})," timeout over interval"]}),n.jsxs("p",{children:["Long callbacks cause ",n.jsx("code",{children:"setInterval"})," to drift. Prefer scheduling the next run yourself (recursive ",n.jsx("code",{children:"setTimeout"}),") and adjust with timestamps."]}),n.jsx(c.Code,{children:`const stepMs = 100;
let expected = Date.now() + stepMs;
function tick() {
  const drift = Date.now() - expected; // +ve = we're late
  console.log("drift(ms)~", drift >= 0 ? Math.round(drift) : 0);
  expected += stepMs;
  setTimeout(tick, Math.max(0, stepMs - drift)); // adjust next delay
}
setTimeout(tick, stepMs);
// logs small drift values, auto-correcting each step`}),n.jsx("h3",{children:"D) Debounce (wait for quiet period) & Throttle (limit rate)"}),n.jsx(c.Code,{children:`// Debounce: call after N ms of inactivity
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
log(1); log(2); log(3); // "debounced 3" (only last call runs)`}),n.jsxs("h3",{children:["E) Promise-based sleep + ",n.jsx("code",{children:"async/await"})]}),n.jsx(c.Code,{children:`const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const t0 = Date.now();
  await sleep(50);
  await sleep(50);
  console.log("elapsed~", Date.now() - t0 >= 100); // true (≈100ms)
})();`}),n.jsx("h3",{children:"F) Next tick & animation"}),n.jsx(c.Code,{children:`// Next microtask (before timeouts)
Promise.resolve().then(() => console.log("microtask"));
// Next animation frame (~60fps)
requestAnimationFrame(() => console.log("raf"));`}),n.jsx("h3",{children:"G) React patterns — effects + cleanup"}),n.jsx(c.Code,{children:`// 1) One-shot timeout on mount with cleanup
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
// }`}),n.jsx("h3",{children:"H) Node vs Browser (notes)"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Browsers may ",n.jsx("strong",{children:"throttle"})," timers in background tabs (e.g., clamped to ~1000ms)."]}),n.jsxs("li",{children:["Node also has ",n.jsx("code",{children:"setImmediate"})," and ",n.jsx("code",{children:"process.nextTick"})," (microtask); timers API is otherwise similar."]})]}),n.jsx("h3",{children:"I) Pitfalls & tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Always clear"})," timeouts/intervals you create (especially in React effects)."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Don't rely on exact ms."})," Timers run “as soon as possible” after the delay."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Avoid piling work in intervals."})," If work may take longer than the interval, prefer recursive timeouts with drift correction."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Debounce for bursts"})," (search input), ",n.jsx("strong",{children:"throttle for steady rate"})," (scroll/resize)."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Use ",n.jsx("code",{children:"setTimeout"})," for one-shot; ",n.jsx("code",{children:"setInterval"})," for repeats (but watch drift)."]}),n.jsx("li",{children:"Keep ids; clear them on unmount or when no longer needed."}),n.jsxs("li",{children:["Use ",n.jsx("code",{children:"sleep()"})," for readable async flows; pair timers with ",n.jsx("code",{children:"Promise"}),"s."]}),n.jsx("li",{children:"Prefer debounce/throttle for high-frequency events."})]}),n.jsx(c.Divider,{})]})}function zm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="jsx-syntax-rules";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"JSX syntax rules (one root, expressions)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Um,{})})})]})}function Um(){return n.jsxs(c.Content,{children:[n.jsxs("div",{children:["JSX is syntax sugar for ",n.jsx("code",{children:"React.createElement"}),". It has two core rules:",n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:" (1) one root element"})," per JSX return, and"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"(2) curly braces hold expressions"})," (not statements)."]})]})]}),n.jsx("h3",{children:"A) One root element"}),n.jsxs("p",{children:["Each component’s ",n.jsx("code",{children:"return"})," must produce a single parent node. Use a wrapper element or a Fragment."]}),n.jsx(c.Code,{children:`// ❌ Not allowed: two siblings at top level
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
}`}),n.jsx("h3",{children:"B) Fragments (short & long form + keys)"}),n.jsxs("p",{children:["Shorthand ",n.jsx("code",{children:"<>...</>"})," is great for grouping. Use"," ",n.jsx("code",{children:"<React.Fragment>"})," if you need a ",n.jsx("code",{children:"key"}),"."]}),n.jsx(c.Code,{children:`const rows = [
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
}`}),n.jsxs("h3",{children:["C) Curly braces are for ",n.jsx("em",{children:"expressions"})]}),n.jsxs("p",{children:["Inside JSX, ",n.jsx("code",{children:"{ ... }"})," must contain an expression (something that evaluates to a value): variables, function calls, math, array literals, ",n.jsx("em",{children:"ternary"})," conditionals, etc. Statements like ",n.jsx("code",{children:"if"}),"/",n.jsx("code",{children:"for"}),"/",n.jsx("code",{children:"while"})," are not allowed directly in braces."]}),n.jsx(c.Code,{children:`// ✅ Valid (expressions)
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
// return <div>{msg}</div>;`}),n.jsx("h3",{children:"D) Attributes: literal vs expression"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Quotes for string literals: ",n.jsx("code",{children:'<img alt="logo" />'})]}),n.jsxs("li",{children:["Braces for non-strings/variables: ",n.jsx("code",{children:"<img width={64} />"})]}),n.jsxs("li",{children:["Booleans: ",n.jsx("code",{children:"<Button primary />"})," ≡ ",n.jsx("code",{children:"<Button primary={true} />"})]}),n.jsxs("li",{children:["Objects/arrays need braces: ",n.jsx("code",{children:"<Box style={{ marginTop: 8 }} />"})]})]}),n.jsx(c.Code,{children:`function Attrs() {
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
}`}),n.jsx("h3",{children:"E) What renders vs what doesn't"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"null"}),", ",n.jsx("code",{children:"undefined"}),", and ",n.jsx("code",{children:"false"})," render nothing."]}),n.jsxs("li",{children:[n.jsx("code",{children:"0"})," ",n.jsx("em",{children:"does"})," render (common gotcha)."]}),n.jsxs("li",{children:["Arrays of nodes are fine: ",n.jsx("code",{children:'{[<li key="1">A</li>, <li key="2">B</li>]}'})]})]}),n.jsx(c.Code,{children:`function Visibility({ count }) {
  // || treats 0 as falsy -> will fall back; often not desired.
  // Prefer ?? so 0 stays 0.
  return <p>Count: {count ?? 0}</p>;
}`}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Fix this return to have a single root (no extra DOM wrapper in the output):",n.jsx(c.Code,{children:`function X() {
  return (
    <h2>Hi</h2>
    <p>There</p>
  );
}`}),n.jsx("em",{children:"Hint:"})," Use a Fragment."]}),n.jsxs("li",{children:["Convert this statement into an expression:",n.jsx(c.Code,{children:`// Want: "Even" if n%2===0, else "Odd"
// <div>{ if (n % 2 === 0) { "Even" } else { "Odd" } }</div>`})]}),n.jsxs("li",{children:["Make this map render correctly with keys:",n.jsx(c.Code,{children:`<ul>
  {items.map(item => <li>{item.label}</li>)}
</ul>`})]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Return exactly one root element (Fragment if no wrapper DOM is needed)."}),n.jsxs("li",{children:["Use ",n.jsx("code",{children:"{ ... }"})," only for expressions. Convert statements to a ternary or compute earlier."]}),n.jsx("li",{children:"Quotes for string literals, braces for variables/non-strings."}),n.jsxs("li",{children:["Remember: ",n.jsx("code",{children:"null/undefined/false"})," render nothing; ",n.jsx("code",{children:"0"})," renders."]})]}),n.jsx(c.Divider,{})]})}function Bm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="html-vs-jsx";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"HTML vs JSX differences (className, htmlFor)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Hm,{})})})]})}function Hm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["JSX maps to DOM ",n.jsx("em",{children:"properties"})," (not raw HTML attributes). That’s why some names change (e.g., ",n.jsx("code",{children:"className"})," instead of ",n.jsx("code",{children:"class"}),", ",n.jsx("code",{children:"htmlFor"})," instead of ",n.jsx("code",{children:"for"}),") and most attributes are ",n.jsx("strong",{children:"camelCased"}),"."]}),n.jsxs("h3",{children:["A) ",n.jsx("code",{children:"class"})," → ",n.jsx("code",{children:"className"})]}),n.jsxs("p",{children:["Use ",n.jsx("code",{children:"className"})," for CSS classes (JSX avoids the reserved keyword ",n.jsx("code",{children:"class"}),")."]}),n.jsx(c.Code,{children:`// HTML
<div class="card primary"></div>

// JSX
<div className="card primary"></div>

// Dynamic classes
const isPrimary = true;
<div className={isPrimary ? "card primary" : "card"} />`}),n.jsxs("h3",{children:["B) ",n.jsx("code",{children:"for"})," → ",n.jsx("code",{children:"htmlFor"})," (labels)"]}),n.jsxs("p",{children:["In JSX, the ",n.jsx("code",{children:"label"})," attribute is ",n.jsx("code",{children:"htmlFor"}),". It must match the target input’s ",n.jsx("code",{children:"id"}),"."]}),n.jsx(c.Code,{children:`// HTML
<label for="email">Email</label>
<input id="email" type="email" />

// JSX
<label htmlFor="email">Email</label>
<input id="email" type="email" />`}),n.jsxs("p",{children:["If the input is nested inside the label, ",n.jsx("code",{children:"htmlFor"})," is optional:"]}),n.jsx(c.Code,{children:`<label>
  Email
  <input type="email" />
</label>`}),n.jsxs("h3",{children:["C) Attribute naming: camelCase (except ",n.jsx("code",{children:"data-*"})," & ",n.jsx("code",{children:"aria-*"}),")"]}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"tabindex"})," → ",n.jsx("code",{children:"tabIndex"})]}),n.jsxs("li",{children:[n.jsx("code",{children:"readonly"})," → ",n.jsx("code",{children:"readOnly"})]}),n.jsxs("li",{children:[n.jsx("code",{children:"maxlength"})," → ",n.jsx("code",{children:"maxLength"})]}),n.jsxs("li",{children:[n.jsx("code",{children:"autocomplete"})," → ",n.jsx("code",{children:"autoComplete"})]}),n.jsxs("li",{children:[n.jsx("code",{children:"contenteditable"})," → ",n.jsx("code",{children:"contentEditable"})]}),n.jsxs("li",{children:["Images/media: ",n.jsx("code",{children:"srcset"})," → ",n.jsx("code",{children:"srcSet"}),", ",n.jsx("code",{children:"crossorigin"})," → ",n.jsx("code",{children:"crossOrigin"})]}),n.jsxs("li",{children:["Forms: ",n.jsx("code",{children:"accept-charset"})," → ",n.jsx("code",{children:"acceptCharset"})]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Unchanged:"})," ",n.jsx("code",{children:"data-*"})," & ",n.jsx("code",{children:"aria-*"})," remain kebab-case."]})]}),n.jsx(c.Code,{children:`<img src="/hero.png" srcSet="/hero@2x.png 2x" crossOrigin="anonymous" />
<form acceptCharset="UTF-8" />`}),n.jsx("h3",{children:"D) Events: camelCase + pass functions"}),n.jsxs("p",{children:["Use ",n.jsx("code",{children:"onClick"}),", ",n.jsx("code",{children:"onChange"}),", ",n.jsx("code",{children:"onSubmit"}),"… and pass a function, not a string."]}),n.jsx(c.Code,{children:`// HTML
<button onclick="doThing()">Run</button>

// JSX
<button onClick={doThing}>Run</button>
<button onClick={() => doThing("arg")}>Run with arg</button>`}),n.jsx("h3",{children:"E) Inline styles: object, not string"}),n.jsx("p",{children:"Provide a JS object with camelCased CSS properties. Numbers are pixels by default for most props."}),n.jsx(c.Code,{children:`// HTML
<div style="background-color: tomato; margin-top: 8px;"></div>

// JSX
<div style={{ backgroundColor: "tomato", marginTop: 8 }} />`}),n.jsx("h3",{children:"F) Boolean attributes"}),n.jsxs("p",{children:["Presence implies ",n.jsx("code",{children:"true"}),". Use braces for dynamic booleans."]}),n.jsx(c.Code,{children:`// Static true
<input type="checkbox" checked />

// Dynamic
const disabled = isSubmitting;
<button disabled={disabled}>Save</button>`}),n.jsx("h3",{children:"G) SVG & special cases"}),n.jsx("p",{children:"Many SVG attributes are camelCased in JSX."}),n.jsx(c.Code,{children:`// HTML
<svg viewBox="0 0 100 100"><circle stroke-width="2" /></svg>

// JSX
<svg viewBox="0 0 100 100"><circle strokeWidth={2} /></svg>`}),n.jsxs("h3",{children:["H) Raw HTML: ",n.jsx("code",{children:"dangerouslySetInnerHTML"})]}),n.jsxs("p",{children:["Use sparingly—only with trusted content—to avoid XSS. Must pass an object with ",n.jsx("code",{children:"__html"}),"."]}),n.jsx(c.Code,{children:`const html = "<strong>Trusted</strong> snippet";
<div dangerouslySetInnerHTML={{ __html: html }} />`}),n.jsx("h3",{children:"I) Self-closing tags required"}),n.jsx("p",{children:"Tags with no children must be self-closed in JSX."}),n.jsx(c.Code,{children:`// HTML
<img src="/logo.png">

// JSX
<img src="/logo.png" />`}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Convert to valid JSX:",n.jsx(c.Code,{children:`<label for="name">Name</label>
<input id="name">`})]}),n.jsxs("li",{children:["Fix attribute names:",n.jsx(c.Code,{children:'<input maxlength="10" tabindex="0" readonly>'})]}),n.jsxs("li",{children:["Rewrite with inline styles (JS object) and an event:",n.jsx(c.Code,{children:'<button onclick="save()" style="background-color: #09f; padding: 8px 12px;">Save</button>'})]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"className"})," for classes; ",n.jsx("code",{children:"htmlFor"})," for labels."]}),n.jsxs("li",{children:["Attributes & events are camelCase; ",n.jsx("code",{children:"data-*"}),"/",n.jsx("code",{children:"aria-*"})," stay kebab-case."]}),n.jsx("li",{children:"Styles use an object: camelCased props, numbers as px."}),n.jsxs("li",{children:["Boolean props: presence or ",n.jsx("code",{children:"{true}"}),"; use braces for dynamics."]}),n.jsxs("li",{children:["Self-close empty elements; be careful with ",n.jsx("code",{children:"dangerouslySetInnerHTML"}),"."]})]}),n.jsx(c.Divider,{})]})}function Wm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="inline-styles";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Inline styles (style object)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Vm,{})})})]})}function Vm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["In JSX, the ",n.jsx("code",{children:"style"})," prop takes a ",n.jsx("strong",{children:"JS object"})," with"," ",n.jsx("em",{children:"camelCased"})," CSS properties. Numbers are treated as ",n.jsx("code",{children:"px"})," (for most props). Use strings for other units (",n.jsx("code",{children:'"%'}),", ",n.jsx("code",{children:'"rem"'}),", etc.)."]}),n.jsx("h3",{children:"A) Basics: object, camelCase, numbers → px"}),n.jsx(c.Code,{children:`// HTML
<div style="background-color: tomato; margin-top: 8px;"></div>

// JSX
<div style={{ backgroundColor: "tomato", marginTop: 8 }} />`}),n.jsx("h3",{children:"B) Units: number vs string"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Number"})," → pixels: ",n.jsx("code",{children:"{ width: 200 }"})," ⇒ ",n.jsx("code",{children:"width: 200px"})]}),n.jsxs("li",{children:[n.jsx("strong",{children:"String"})," for non-px: ",n.jsx("code",{children:'{ width: "50%" }'}),", ",n.jsx("code",{children:'{ fontSize: "1.25rem" }'})]}),n.jsxs("li",{children:["Unitless props (examples): ",n.jsx("code",{children:"lineHeight"}),", ",n.jsx("code",{children:"zIndex"}),", ",n.jsx("code",{children:"fontWeight"}),", ",n.jsx("code",{children:"opacity"}),", ",n.jsx("code",{children:"flexGrow"}),", ",n.jsx("code",{children:"flexShrink"}),"."]})]}),n.jsx(c.Code,{children:`<div
  style={{
    width: "50%",
    height: 120,             // 120px
    lineHeight: 1.4,         // unitless ok
    opacity: 0.9
  }}
/>`}),n.jsx("h3",{children:"C) Vendor prefixes & SVG"}),n.jsxs("p",{children:["Use camelCase with vendor prefixes: ",n.jsx("code",{children:"Webkit"}),", ",n.jsx("code",{children:"ms"}),", etc. Many SVG attrs are camelCased too."]}),n.jsx(c.Code,{children:`<div style={{ WebkitUserSelect: "none", msOverflowStyle: "none" }} />
<svg viewBox="0 0 100 10">
  <rect width="100" height="10" fill="tomato" />
</svg>`}),n.jsx("h3",{children:"D) Conditional & merged styles"}),n.jsx("p",{children:"Inline styles are just objects-combine with spreads and conditionals."}),n.jsx(c.Code,{children:`const base = { padding: 12, borderRadius: 8 };
const primary = { backgroundColor: "#0af", color: "#fff" };
const danger  = { backgroundColor: "#e11", color: "#fff" };

function Button({ kind = "primary", active }) {
  const tone = kind === "danger" ? danger : primary;
  return (
    <button
      style={{
        ...base,
        ...tone,
        ...(active && { boxShadow: "0 0 0 3px rgba(0,0,0,0.15)" })
      }}
    >
      Click
    </button>
  );
}`}),n.jsx("h3",{children:"E) Dynamic values & CSS variables"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Compute on the fly: strings for percent/other units, numbers for px."}),n.jsx("li",{children:"CSS variables work fine-supply as strings."})]}),n.jsx(c.Code,{children:`function Progress({ value }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ background: "var(--track,#eee)", height: 8, borderRadius: 4 }}>
      <div
        style={{
          width: pct + "%",              // string for %
          height: "100%",
          background: "var(--accent,#0af)",
          borderRadius: 4
        }}
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      />
    </div>
  );
}`}),n.jsx("h3",{children:"F) Performance & patterns"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Objects are new each render; keep them small. For big/expensive objects, memoize."}),n.jsxs("li",{children:["Prefer CSS classes / styled-components for most styling, and inline styles for ",n.jsx("em",{children:"dynamic per-instance"})," values (e.g., width from props)."]}),n.jsxs("li",{children:["No support for pseudo-classes (",n.jsx("code",{children:":hover"}),") or media queries in inline styles-use CSS/styled-components for that."]}),n.jsxs("li",{children:[n.jsx("code",{children:"!important"})," isn't supported in inline styles."]})]}),n.jsx(c.Code,{children:`// Memoize a large dynamic style (rarely needed)
function Panel({ color, pad }) {
  const style = React.useMemo(() => ({
    background: color,
    padding: pad,
    borderRadius: 12,
    boxShadow: "0 8px 30px rgba(0,0,0,.08)"
  }), [color, pad]);

  return <section style={style} />;
}`}),n.jsx("h3",{children:"G) Common gotchas"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Hyphen-keys don't work: use ",n.jsx("code",{children:"backgroundColor"}),", not ",n.jsx("code",{children:"background-color"}),"."]}),n.jsxs("li",{children:["URLs must be strings: ",n.jsx("code",{children:"backgroundImage: `url(${src})`"}),"."]}),n.jsxs("li",{children:["Numbers become px-if you mean ",n.jsx("code",{children:"%"}),"/",n.jsx("code",{children:"rem"}),", pass a string."]})]}),n.jsx(c.Code,{children:`// ❌ Wrong keys and units
<div style={{ "background-color": "tomato", width: 50 + "%" }} />

// ✅ Correct
<div style={{ backgroundColor: "tomato", width: "50%" }} />`}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Convert to JSX style object:",n.jsx(c.Code,{children:'<div style="border: 1px solid #ddd; border-radius: 8px; margin-top: 12px;"></div>'})]}),n.jsxs("li",{children:["Make a dynamic square where ",n.jsx("code",{children:"size"})," (number) controls both ",n.jsx("code",{children:"width"})," and ",n.jsx("code",{children:"height"}),":",n.jsx(c.Code,{children:'// <Square size={48} color="#0af" />'})]}),n.jsxs("li",{children:["Fix the mistakes:",n.jsx(c.Code,{children:`<button style={{ "font-size": 14, padding: 8 + "px", backgroundImage: url(bg) }}>
  Save
</button>`})]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"style"})," accepts an ",n.jsx("strong",{children:"object"}),"; properties are ",n.jsx("strong",{children:"camelCased"}),"."]}),n.jsxs("li",{children:["Numbers → ",n.jsx("code",{children:"px"}),"; use strings for ",n.jsx("code",{children:"%"}),"/",n.jsx("code",{children:"rem"}),"/",n.jsx("code",{children:"em"}),"/etc."]}),n.jsx("li",{children:"Merge with object spreads; use classes/styled-components for pseudo-states & media queries."}),n.jsxs("li",{children:["CSS variables allowed as strings (",n.jsx("code",{children:"var(--x)"}),")."]})]}),n.jsx(c.Divider,{})]})}function Jm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="fragments";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Fragments (<>...</>, <React.Fragment>)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Gm,{})})})]})}function Gm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Fragment"})," lets you group multiple children without adding an extra DOM element.",n.jsx("br",{}),`It's an "invisible wrapper"-perfect when you must return one parent but don't want a real wrapper like `,n.jsx("code",{children:"<div>"})," to affect layout or styling."]}),n.jsx("h3",{children:"A) Why fragments?"}),n.jsx(c.Code,{children:`// ❌ Adds unwanted wrapper <div> to the DOM
function Card() {
  return (
    <div>
      <h3>Title</h3>
      <p>Details</p>
    </div>
  );
}

// ✅ No extra node in the DOM (Fragment disappears at runtime)
function Card() {
  return (
    <>
      <h3>Title</h3>
      <p>Details</p>
    </>
  );
}`}),n.jsx("h3",{children:"B) Two forms"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Shorthand:"})," ",n.jsx("code",{children:"<>...</>"})," (can't take ",n.jsx("em",{children:"any"})," props)."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Long form:"})," ",n.jsx("code",{children:"<React.Fragment>...</React.Fragment>"})," (can take a ",n.jsx("code",{children:"key"}),")."]})]}),n.jsx(c.Code,{children:`// Shorthand (no props, no key)
<>
  <Item />
  <Actions />
</>

// Long form (use when you need a key on the group)
<React.Fragment key={row.id}>
  <td>{row.name}</td>
  <td>{row.price}</td>
</React.Fragment>`}),n.jsx("h3",{children:"C) Lists: group multiple siblings and key the Fragment"}),n.jsxs("p",{children:["When mapping and you need to return ",n.jsx("em",{children:"multiple siblings"})," per item, wrap them in a keyed Fragment. The shorthand cannot accept a key, so use the long form."]}),n.jsx(c.Code,{children:`const data = [
  { id: 1, name: "A", note: "alpha" },
  { id: 2, name: "B", note: "beta" },
];

function List() {
  return (
    <ul>
      {data.map(item => (
        <React.Fragment key={item.id}>
          <li>{item.name}</li>
          <li className="muted">{item.note}</li>
        </React.Fragment>
      ))}
    </ul>
  );
}`}),n.jsx("h3",{children:"D) Tables: return multiple <tr> or multiple <td> cleanly"}),n.jsx("p",{children:"Fragments help keep valid table structure without inserting a div/spin wrapper that would break HTML."}),n.jsx(c.Code,{children:`// 1) Return multiple <tr> per item
<tbody>
  {groups.map(g => (
    <React.Fragment key={g.id}>
      <tr><th colSpan={2}>{g.title}</th></tr>
      {g.rows.map(r => (
        <tr key={r.id}>
          <td>{r.label}</td>
          <td>{r.value}</td>
        </tr>
      ))}
    </React.Fragment>
  ))}
</tbody>

// 2) Return multiple <td> inside a single <tr>
<tr>
  {rows.map(r => (
    <React.Fragment key={r.id}>
      <td>{r.label}</td>
      <td>{r.value}</td>
    </React.Fragment>
  ))}
</tr>`}),n.jsx("h3",{children:"E) Conditional wrappers without extra DOM"}),n.jsx(c.Code,{children:`function TitleBlock({ showSubtitle }) {
  return (
    <>
      <h2>Dashboard</h2>
      {showSubtitle && <p className="muted">Welcome back</p>}
    </>
  );
}`}),n.jsx("h3",{children:"F) Fragment vs Array"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Fragment:"})," more readable, no array brackets, no need to add keys unless mapping."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Array:"})," you can return ",n.jsx("code",{children:"[child1, child2]"})," directly-but every child needs a key."]})]}),n.jsx(c.Code,{children:`// Returning an array works, but needs keys
return [
  <li key="a">A</li>,
  <li key="b">B</li>,
];`}),n.jsx("h3",{children:"G) When NOT to use a Fragment"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["You need attributes (e.g., ",n.jsx("code",{children:"className"}),", ",n.jsx("code",{children:"style"}),", ",n.jsx("code",{children:"data-*"}),") on the wrapper."]}),n.jsx("li",{children:"You need to target the wrapper in CSS or with refs-use a real element instead."})]}),n.jsx("h3",{children:"Common mistakes"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Trying to pass props to the shorthand ",n.jsx("code",{children:"<>"}),"-it can't take any."]}),n.jsxs("li",{children:["Forgetting a ",n.jsx("code",{children:"key"})," when mapping groups with a Fragment."]}),n.jsx("li",{children:"Wrapping where semantics matter-always keep valid HTML structure (Fragments won't break it)."})]}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Replace the wrapper div with a Fragment (no DOM change):",n.jsx(c.Code,{children:`function Info() {
  return (
    <div>
      <strong>Total</strong>
      <span> ₹999 </span>
    </div>
  );
}`})]}),n.jsxs("li",{children:["Map items so each renders two ",n.jsx("code",{children:"<li>"})," siblings without an extra wrapper, with proper keys."]}),n.jsx("li",{children:"Build a table where each product renders a header row and a details row using a keyed Fragment."})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Use Fragments to avoid extra DOM wrappers."}),n.jsxs("li",{children:["Shorthand ",n.jsx("code",{children:"<>"})," has no props; use ",n.jsx("code",{children:"<React.Fragment key=...>"})," when mapping."]}),n.jsx("li",{children:"Great for lists/tables and conditional grouping."}),n.jsx("li",{children:"If you need classes/styles/refs on the wrapper, use a real element instead."})]}),n.jsx(c.Divider,{})]})}function Xm({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="comments-in-jsx";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Comments in JSX"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(qm,{})})})]})}function qm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["In ",n.jsx("strong",{children:"JavaScript regions"})," (outside JSX), use normal ",n.jsx("code",{children:"//"})," and ",n.jsx("code",{children:"/* ... */"}),". Inside ",n.jsx("strong",{children:"JSX"})," (between tags), wrap comments in ",n.jsx("code",{children:"{/* ... */}"}),"."]}),n.jsx("h3",{children:"A) Outside vs inside JSX"}),n.jsx(c.Code,{children:`// ✅ JS comments anywhere outside JSX
function Panel({ title }) {
  // compute something
  const big = title.length > 10; /* multi-line ok too */

  return (
    <section>
      {/* ✅ JSX comment: between elements/children */}
      <h3>{title}</h3>
      <p>Content</p>
    </section>
  );
}`}),n.jsx("h3",{children:"B) JSX comment syntax"}),n.jsx("p",{children:"Use curly braces with a JS block comment. Works single-line or multi-line."}),n.jsx(c.Code,{children:`<>
  {/* single-line */}
  <h4>Heading</h4>

  {/* 
    multi-line
    explains the section below 
  */}
  <p>Details...</p>
</>`}),n.jsx("h3",{children:"C) Comments near props & in attribute expressions"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Between props (rarely needed) block comments may parse, but avoid-tooling can be inconsistent."}),n.jsxs("li",{children:["Prefer commenting ",n.jsx("em",{children:"inside"})," an expression or on its own line."]})]}),n.jsx(c.Code,{children:`// ✅ comment inside a prop expression
<button title={/* i18n: tooltip for save */ "Save"}>Save</button>

// ✅ comment above the element/prop
// primary action button
<button className="primary">Go</button>

// ⚠️ Works in many setups but avoid for portability
// <button /* primary */ className="primary">Go</button>`}),n.jsx("h3",{children:"D) Commenting out blocks temporarily"}),n.jsxs("p",{children:['To "disable" a block, wrap it in a JSX comment, or better, render ',n.jsx("code",{children:"null"})," using a condition."]}),n.jsx(c.Code,{children:`// 1) Comment out JSX
<div>
  {/* <Sidebar /> */}
  <Main />
</div>

// 2) Prefer conditional (more explicit)
{showSidebar ? <Sidebar /> : null}`}),n.jsx("h3",{children:"E) Comments inside lists & fragments"}),n.jsx("p",{children:"Comments can live anywhere children can."}),n.jsx(c.Code,{children:`<>
  {/* header */}
  <h2>Todos</h2>

  <ul>
    {items.map((t) => (
      <li key={t.id}>
        {t.title}
        {/* show meta only for debug */}
        {debug && <small className="muted">#{t.id}</small>}
      </li>
    ))}
  </ul>
</>`}),n.jsx("h3",{children:"F) Common mistakes"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Using ",n.jsx("code",{children:"//"})," directly inside JSX → ❌ (must be ",n.jsx("code",{children:"{/* ... */}"}),")."]}),n.jsx("li",{children:"Placing comments inside string literals (they’ll render as text)."}),n.jsx("li",{children:"Leaving big commented blocks permanently-prefer deleting or feature-flagging."})]}),n.jsx(c.Code,{children:`// ❌ Wrong (inside JSX)
// <div>// not a valid comment here</div>

// ✅ Right
<div>{/* comment inside JSX */}</div>`}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Fix the comments:",n.jsx(c.Code,{children:`return (
  <div>
    // Title area
    <h3>Profile</h3>
    <p>Bio</p>
  </div>
);`})]}),n.jsxs("li",{children:["Comment the tooltip prop without breaking JSX:",n.jsx(c.Code,{children:'<button title="Delete">Delete</button>'})]}),n.jsxs("li",{children:["Temporarily disable rendering of ",n.jsx("code",{children:"<Footer />"})," without deleting it."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Use ",n.jsx("code",{children:"{/* ... */}"})," inside JSX; normal comments elsewhere."]}),n.jsx("li",{children:"Comment inside prop expressions or above the element (avoid between-prop comments)."}),n.jsxs("li",{children:["For temporary removal, prefer conditional rendering (",n.jsx("code",{children:"cond ? <X/> : null"}),")."]})]}),n.jsx(c.Divider,{})]})}function Km({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="expressions-vs-statements";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Expressions vs statements in JSX"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Qm,{})})})]})}function Qm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["Inside JSX, the curly braces ",n.jsx("code",{children:"{ ... }"})," accept a ",n.jsx("strong",{children:"JavaScript expression"})," (something that produces a value). ",n.jsx("strong",{children:"Statements"})," (",n.jsx("code",{children:"if"}),", ",n.jsx("code",{children:"for"}),", ",n.jsx("code",{children:"switch"}),",",n.jsx("code",{children:"try/catch"}),", ",n.jsx("code",{children:"return"}),", etc.) are ",n.jsx("em",{children:"not"})," allowed directly inside JSX."]}),n.jsx("h3",{children:"A) What counts as an expression?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Literals & variables: ",n.jsx("code",{children:'42, "hi", user.name'})]}),n.jsxs("li",{children:["Operators & calls: ",n.jsx("code",{children:"a + b, fn(), items.map(...)"})]}),n.jsxs("li",{children:["Ternary: ",n.jsx("code",{children:"ok ? <A/> : <B/>"})]}),n.jsxs("li",{children:["Array/fragment of nodes: ",n.jsx("code",{children:'[<li key="1">A</li>, <li key="2">B</li>]'})]}),n.jsxs("li",{children:["Logical ",n.jsx("code",{children:"&&"})," (careful with ",n.jsx("code",{children:"0"}),"), ",n.jsx("code",{children:"||"}),", ",n.jsx("code",{children:"??"})]})]}),n.jsx(c.Code,{children:`function Demo({ ok, items }) {
  return (
    <div>
      <p>Sum: {2 + 3}</p>
      <p>{ok ? "Yes" : "No"}</p>
      <ul>{items.map(it => <li key={it.id}>{it.label}</li>)}</ul>
    </div>
  );
}`}),n.jsx("h3",{children:"B) What is a statement (❌ not allowed in braces)?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"if"}),", ",n.jsx("code",{children:"for"}),", ",n.jsx("code",{children:"while"}),", ",n.jsx("code",{children:"switch"})]}),n.jsx("li",{children:n.jsxs("code",{children:["try "," catch "]})}),n.jsxs("li",{children:[n.jsx("code",{children:"return"}),", ",n.jsx("code",{children:"break"}),", ",n.jsx("code",{children:"continue"}),", ",n.jsx("code",{children:"throw"})]}),n.jsxs("li",{children:["Block scopes: ",n.jsx("code",{children:"{ /* a new scope */ }"})," (not the same as JSX braces)"]})]}),n.jsx(c.Code,{children:`// ❌ Invalid
// <div>{ if (ok) { "Yes" } else { "No" } }</div>
// <ul>{ for (const x of xs) { <li>{x}</li> } }</ul>`}),n.jsx("h3",{children:"C) Converting statements → expressions"}),n.jsxs("ol",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"if/else → ternary"}),n.jsx(c.Code,{children:`// ❌
// <div>{ if (n % 2) { "Odd" } else { "Even" } }</div>

// ✅
<div>{n % 2 ? "Odd" : "Even"}</div>`})]}),n.jsxs("li",{children:[n.jsx("strong",{children:"if-only → &&"})," (shows right side when left is truthy; beware ",n.jsx("code",{children:"0"}),")",n.jsx(c.Code,{children:`// show a badge only if premium
{isPremium && <Badge/>}

// If the left can be 0, prefer a ternary:
{count > 0 ? <span>{count}</span> : null}`})]}),n.jsxs("li",{children:[n.jsx("strong",{children:"for/switch → array methods or lookups"}),n.jsx(c.Code,{children:`// ❌ for loop in JSX
// <ul>{ for (const x of xs) { <li>{x}</li> } }</ul>

// ✅ map + key
<ul>{xs.map(x => <li key={x.id}>{x.title}</li>)}</ul>

// ✅ switch alternative via lookup
const views = { list: <List/>, grid: <Grid/>, empty: <Empty/> };
<div>{views[mode] ?? <Empty/>}</div>`})]}),n.jsxs("li",{children:[n.jsx("strong",{children:"try/catch"}),": precompute above return or call a helper that returns UI",n.jsx(c.Code,{children:`function SafeJson({ text }) {
  let node;
  try {
    const obj = JSON.parse(text);
    node = <pre>{JSON.stringify(obj, null, 2)}</pre>;
  } catch {
    node = <p className="error">Invalid JSON</p>;
  }
  return <div>{node}</div>;
}`})]})]}),n.jsx("h3",{children:"D) Precompute vs inline tricks"}),n.jsxs("p",{children:["Prefer computing values ",n.jsx("em",{children:"before"})," the ",n.jsx("code",{children:"return"})," for readability. You can also call small helpers inside JSX (calls are expressions). IIFEs work but are harder to read—use sparingly."]}),n.jsx(c.Code,{children:`// Precompute (clean)
function Card({ price, discount }) {
  const final = discount ? price * (1 - discount) : price;
  return <p>₹{final}</p>;
}

// Helper call (still an expression)
const format = n => Intl.NumberFormat("en-IN").format(n);
<p>Total: {format(total)}</p>

// IIFE (allowed, but avoid if not needed)
<div>{(() => { if (ok) return <A/>; return <B/>; })()}</div>`}),n.jsx("h3",{children:'E) Rendering "nothing" cleanly'}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Use ",n.jsx("code",{children:"null"})," to render nothing: ",n.jsx("code",{children:"{cond ? <X/> : null}"})]}),n.jsxs("li",{children:[n.jsx("code",{children:"false"})," and ",n.jsx("code",{children:"undefined"})," also render nothing, but avoid returning raw non-UI values by accident."]}),n.jsxs("li",{children:[n.jsx("code",{children:"0"})," renders as text; don't use it to hide UI."]})]}),n.jsx("h3",{children:"F) Quick patterns"}),n.jsx(c.Code,{children:`// Guarded block with early return pattern (outside JSX)
if (!data) return null;

// Inline pick-one
{type === "success" ? <Success/> : type === "error" ? <Error/> : <Idle/>}

// Compose lists
<ul>
  {items
    .filter(it => it.visible)
    .map(it => <li key={it.id}>{it.label}</li>)}
</ul>`}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Convert to valid JSX (use a ternary):",n.jsx(c.Code,{children:'// <div>{ if (score >= 50) { "Pass" } else { "Fail" } }</div>'})]}),n.jsxs("li",{children:["Render a list of tags (",n.jsx("code",{children:"tags: string[]"}),") with keys, without using a ",n.jsx("code",{children:"for"})," loop."]}),n.jsxs("li",{children:["Replace this ",n.jsx("code",{children:"switch"})," with a lookup map:",n.jsx(c.Code,{children:'// switch (status) { case "ok": <Ok/>; break; case "err": <Err/>; break; default: <Idle/>; }'})]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["JSX braces accept ",n.jsx("strong",{children:"expressions"})," only—no control-flow statements."]}),n.jsxs("li",{children:["Use ",n.jsx("code",{children:"? :"})," for if/else, ",n.jsx("code",{children:"&&"}),' for simple "show if truthy".']}),n.jsxs("li",{children:["Use ",n.jsx("code",{children:"map/filter"})," for lists; always add stable ",n.jsx("code",{children:"key"}),"s."]}),n.jsx("li",{children:"Precompute complex logic above the return or call helpers."}),n.jsxs("li",{children:["Use ",n.jsx("code",{children:"null"})," to render nothing; don't rely on ",n.jsx("code",{children:"0"})," for hiding."]})]}),n.jsx(c.Divider,{})]})}function Ym({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="conditional-and";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Conditional render: &&"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(Zm,{})})})]})}function Zm(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["The logical-AND operator ",n.jsx("code",{children:"&&"})," is a concise way to ",n.jsx("strong",{children:"render something only if a condition is truthy"}),".",n.jsx("br",{}),"It returns the left side if it's falsy, otherwise the right side. In React, ",n.jsx("code",{children:"false"}),"/",n.jsx("code",{children:"null"}),"/",n.jsx("code",{children:"undefined"})," render nothing."]}),n.jsx("h3",{children:"A) Show only when truthy"}),n.jsx(c.Code,{children:`// Show badge only if the user is premium
{isPremium && <Badge />}

// Show count only if > 0
{count > 0 && <span className="count">{count}</span>}`}),n.jsx("h3",{children:'B) Big gotcha: 0 will render "0"'}),n.jsxs("p",{children:["Because ",n.jsx("code",{children:"0 && <X/>"})," evaluates to ",n.jsx("code",{children:"0"}),", React will render the text ",n.jsx("code",{children:"0"}),". Use a strict comparison or coerce to boolean with ",n.jsx("code",{children:"!!"}),"."]}),n.jsx(c.Code,{children:`// ❌ Might render "0"
{items.length && <List items={items} />}

// ✅ Compare or coerce
{items.length > 0 && <List items={items} />}
{!!items.length && <List items={items} />}  // double-bang -> boolean`}),n.jsx("h3",{children:"C) Chain multiple conditions"}),n.jsx("p",{children:"All must be truthy to render the element."}),n.jsx(c.Code,{children:`// Render only when loaded, user exists, and feature is enabled
{loaded && user && flags.showWelcome && <Welcome user={user} />}`}),n.jsx("h3",{children:'D) Use ternary when you need an "else"'}),n.jsxs("p",{children:[n.jsx("code",{children:"&&"}),` has no "else". Don't abuse `,n.jsx("code",{children:"||"})," to fake it-prefer a ternary for clarity."]}),n.jsx(c.Code,{children:`// ⚠️ Works but less readable
{isReady && <Ready/> || <Loading/>}

// ✅ Clear
{isReady ? <Ready/> : <Loading/>}`}),n.jsx("h3",{children:"E) ClassName composition with &&"}),n.jsxs("p",{children:["Use ",n.jsx("code",{children:"&&"})," to include a token conditionally, then filter falsy values."]}),n.jsx(c.Code,{children:`// Small utility pattern
const cx = (...xs) => xs.filter(Boolean).join(" ");

<li className={cx("item", active && "active", disabled && "muted")}>
  Row
</li>`}),n.jsx("h3",{children:"F) Combine with nullish coalescing carefully"}),n.jsxs("p",{children:[n.jsx("code",{children:"??"})," only checks ",n.jsx("code",{children:"null"}),"/",n.jsx("code",{children:"undefined"}),". For visibility gating, you usually just need ",n.jsx("code",{children:"&&"}),"."]}),n.jsx(c.Code,{children:`// Show price only if it exists; show 0 explicitly if 0 is valid
{price != null && <span>₹{price}</span>}`}),n.jsx("h3",{children:"G) Readability pattern: precompute"}),n.jsx("p",{children:"Complex conditions are easier to read if you compute them before the return."}),n.jsx(c.Code,{children:`function Card({ user, loading, error }) {
  const canShow = !loading && !error && user?.name;
  return <>{canShow && <Profile user={user} />}</>;
}`}),n.jsx("h3",{children:"Common mistakes"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Using a numeric left side (",n.jsx("code",{children:"count"}),", ",n.jsx("code",{children:"items.length"}),") → may render ",n.jsx("code",{children:"0"}),"."]}),n.jsx("li",{children:"Nesting heavy logic inline-prefer precomputation or helper functions."}),n.jsxs("li",{children:["Forgetting that only ",n.jsx("code",{children:"false/null/undefined"})," render nothing; ",n.jsx("code",{children:"0"})," and ",n.jsx("code",{children:'""'})," render."]})]}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Fix the 0-render bug:",n.jsx(c.Code,{children:"// <div>{notifications.length && <Bell count={notifications.length} />}</div>"})]}),n.jsxs("li",{children:["Rewrite this to a ternary (needs else):",n.jsx(c.Code,{children:"// {isAuth && <Dashboard/> || <Login/>}"})]}),n.jsxs("li",{children:["Chain conditions to render ",n.jsx("code",{children:"<Promo />"})," only when ",n.jsx("code",{children:'env === "prod"'})," and ",n.jsx("code",{children:'user?.role === "admin"'}),"."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Use ",n.jsx("code",{children:"&&"}),' for simple "show if truthy".']}),n.jsxs("li",{children:["Guard numbers with comparisons or ",n.jsx("code",{children:"!!"})," to avoid rendering ",n.jsx("code",{children:"0"}),"."]}),n.jsx("li",{children:'Use a ternary when you need an "else".'}),n.jsx("li",{children:"Precompute complex conditions for readability."})]}),n.jsx(c.Divider,{})]})}function ex({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="conditional-ternary";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Conditional render: ternary"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(nx,{})})})]})}function nx(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["The ",n.jsx("strong",{children:"ternary operator"})," (",n.jsx("code",{children:"cond ? A : B"}),") is the clearest way to render one of two branches in JSX. It's an ",n.jsx("em",{children:"expression"}),", so it works inside braces."]}),n.jsx("h3",{children:"A) Basics"}),n.jsx(c.Code,{children:`// Render Dashboard if authenticated, otherwise Login
<div>{isAuth ? <Dashboard /> : <Login />}</div>

// Text or element branches both work
<p>{score >= 50 ? "Pass" : "Fail"}</p>`}),n.jsx("h3",{children:'B) "Else nothing" → use null'}),n.jsx(c.Code,{children:`// Show <Promo/> only if eligible; otherwise render nothing
{eligible ? <Promo /> : null}

// Equivalent with &&
{eligible && <Promo />}
// (Use ternary when you need an explicit else branch.)`}),n.jsx("h3",{children:"C) Multiple conditions (avoid deep nesting)"}),n.jsx("p",{children:"You can chain ternaries, but keep them readable. For more than two branches, prefer a lookup map."}),n.jsx(c.Code,{children:`// 1) Light nesting with parentheses (OK if short)
{status === "loading" ? (
  <Spinner />
) : status === "error" ? (
  <Error />
) : (
  <Content />
)}

// 2) Cleaner with a map (recommended beyond 2 branches)
const views = { loading: <Spinner/>, error: <Error/>, ready: <Content/> };
{views[status] ?? <Idle/>}`}),n.jsx("h3",{children:"D) Conditional props/variants"}),n.jsx(c.Code,{children:`// Choose component variant
<Button kind={primary ? "primary" : "default"} />

// Choose class token
const cx = (...xs) => xs.filter(Boolean).join(" ");
<button className={cx("btn", primary ? "btn--primary" : "btn--default")}>Save</button>

// Choose inline style value
<div style={{ opacity: disabled ? 0.5 : 1 }} />`}),n.jsx("h3",{children:"E) Ternary vs && and ||"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Ternary"}),': has both branches (A/else B) → best for "this or that".']}),n.jsxs("li",{children:[n.jsx("strong",{children:"&&"}),": show-only-if-truthy; beware rendering ",n.jsx("code",{children:"0"})," by accident."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"||"}),": fallback for ",n.jsx("em",{children:"falsy"})," values; don't use it as an else-render unless you understand the truthiness."]})]}),n.jsx(c.Code,{children:`// ⚠️ Using || as else can be surprising if left side is ""
{title || "Untitled"}
// If empty string is valid and should show "", use ?? to only catch null/undefined:
{title ?? "Untitled"}`}),n.jsx("h3",{children:"F) Parentheses & formatting"}),n.jsx("p",{children:"Wrap multiline branches in parentheses for readability and to avoid precedence issues."}),n.jsx(c.Code,{children:`{cond ? (
  <header><Logo/><Nav/></header>
) : (
  <header><Logo/></header>
)}`}),n.jsx("h3",{children:"G) Precompute for clarity"}),n.jsx(c.Code,{children:`function Price({ price, discount }) {
  const final = discount ? price * (1 - discount) : price;
  return <p>₹{final}</p>;
}`}),n.jsx("h3",{children:"Common mistakes"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Over-nesting ternaries-prefer maps or precomputed variables."}),n.jsxs("li",{children:["Forgetting ",n.jsx("code",{children:"null"}),' for "render nothing" in the else branch.']}),n.jsxs("li",{children:["Using ",n.jsx("code",{children:"||"})," as a faux-else and accidentally hiding valid falsy values (like ",n.jsx("code",{children:"0"})," or ",n.jsx("code",{children:'""'}),")."]})]}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Convert to a ternary:",n.jsx(c.Code,{children:"// {isReady && <Ready/> || <Loading/>}"})]}),n.jsxs("li",{children:["Render ",n.jsx("code",{children:"<GoldBadge/>"})," for ",n.jsx("code",{children:'plan === "gold"'}),", ",n.jsx("code",{children:"<SilverBadge/>"})," otherwise."]}),n.jsxs("li",{children:["Replace the nested ternary with a lookup:",n.jsx(c.Code,{children:'// {role === "admin" ? <Admin/> : role === "user" ? <User/> : <Guest/>}'})]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Use ",n.jsx("code",{children:"cond ? A : B"})," for clear two-branch rendering."]}),n.jsxs("li",{children:["Return ",n.jsx("code",{children:"null"}),' for "else nothing".']}),n.jsx("li",{children:"Keep branches readable (parentheses, format lines)."}),n.jsx("li",{children:"For 3+ branches, prefer a lookup map instead of deep nesting."}),n.jsxs("li",{children:["Don't misuse ",n.jsx("code",{children:"||"}),"; consider ",n.jsx("code",{children:"??"})," when only null/undefined need fallback."]})]}),n.jsx(c.Divider,{})]})}function tx({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="early-return";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Early return pattern"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(rx,{})})})]})}function rx(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Early return"})," = return from a component ",n.jsx("em",{children:"as soon as"})," a guard condition is met. It removes deep nesting, keeps JSX flat, and makes loading/empty/error states clearer."]}),n.jsx("h3",{children:"A) Basics - flatten your branches"}),n.jsx(c.Code,{children:`// ❌ Nested, harder to scan
function Profile({ user }) {
  if (user) {
    return <Card user={user} />;
  } else {
    return <Empty />;
  }
}

// ✅ Early returns keep it flat
function Profile({ user }) {
  if (!user) return <Empty />;
  return <Card user={user} />;
}`}),n.jsx("h3",{children:"B) Loading / error / auth guards"}),n.jsx("p",{children:"Call hooks first (top-level), then gate the UI with early returns."}),n.jsx(c.Code,{children:`function ProductView({ id }) {
  const { data, loading, error } = useProduct(id);  // ✅ hooks at top level, always called

  if (loading) return <Spinner />;
  if (error)   return <ErrorBox error={error} />;
  if (!data)   return <Empty state="no-data" />;

  return <ProductCard product={data} />;
}`}),n.jsx("h3",{children:"C) ⚠️ Hooks + early return - the rule"}),n.jsxs("p",{children:[n.jsx("strong",{children:"Never call Hooks conditionally."})," Put all Hooks at the top of the component, then do your early returns. If you must guard before any Hooks, split into a tiny wrapper."]}),n.jsx(c.Code,{children:`// ❌ Risky: hook is skipped when visible === false
function Panel({ visible }) {
  if (!visible) return null;          // hook below is conditionally called -> breaks the rule
  const [open, setOpen] = React.useState(false);
  return open ? "Open" : "Closed";
}

// ✅ Safe: wrapper guards visibility; inner can use hooks freely
function Panel({ visible }) {
  if (!visible) return null;          // no hooks here
  return <PanelInner />;              // hooks live inside inner component
}
function PanelInner() {
  const [open, setOpen] = React.useState(false);
  return open ? "Open" : "Closed";
}`}),n.jsx("h3",{children:"D) Early return vs && / ternary"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Early return"})," = best when a whole branch should short-circuit (loading, error, auth)."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"&&"})," = show-only-if-truthy for small inline bits."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Ternary"})," = choose exactly one of two UI branches."]})]}),n.jsx(c.Code,{children:`// Early return (whole component)
if (!isAuth) return <Login/>;

// Inline && (tiny fragment)
{isPremium && <Badge/>}

// Ternary (this or that)
{ready ? <Dashboard/> : <Loading/>}`}),n.jsx("h3",{children:"E) Event handlers: bail out early"}),n.jsxs("p",{children:["Same idea inside functions-avoid deep ",n.jsx("code",{children:"if"})," ladders."]}),n.jsx(c.Code,{children:`async function onSubmit(e) {
  e.preventDefault();
  if (submitting) return;           // guard
  if (!form.valid) return;          // guard
  setSubmitting(true);
  await save(form.value);
  setSubmitting(false);
}`}),n.jsx("h3",{children:"F) Empty states & feature flags"}),n.jsx(c.Code,{children:`function List({ items }) {
  if (!items?.length) return <Empty message="No items yet" />;
  return (
    <ul>{items.map(it => <li key={it.id}>{it.title}</li>)}</ul>
  );
}

function Experimental({ flags }) {
  if (!flags?.newUI) return <LegacyUI />;
  return <NewUI />;
}`}),n.jsx("h3",{children:"G) Multiple early returns - order matters"}),n.jsx("p",{children:"Put the most common/cheapest checks first. Keep each guard tiny and obvious."}),n.jsx(c.Code,{children:`function Report({ user, data, loading, error }) {
  if (!user)    return <LoginPrompt />;
  if (loading)  return <Spinner />;
  if (error)    return <ErrorBox error={error} />;
  if (!data)    return <Empty />;

  return <ReportBody data={data} />;
}`}),n.jsx("h3",{children:"Common mistakes"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Placing early returns ",n.jsx("em",{children:"before"})," Hooks and then calling Hooks only on some renders."]}),n.jsxs("li",{children:["Building complicated multi-line conditions-precompute a ",n.jsx("code",{children:"const"})," like ",n.jsx("code",{children:"canShow"}),"."]}),n.jsxs("li",{children:["Returning an empty string instead of ",n.jsx("code",{children:"null"}),' to "hide" UI (empty string still renders text).']})]}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Convert nested if/else into early returns:",n.jsx(c.Code,{children:`function View({ user, loading }) {
  if (loading) {
    return <Spinner/>;
  } else {
    if (user) {
      return <Dashboard/>;
    } else {
      return <Login/>;
    }
  }
}`})]}),n.jsxs("li",{children:["Split a component so that a visibility guard does ",n.jsx("em",{children:"not"})," sit above any Hooks."]}),n.jsxs("li",{children:["Reorder guards in a component to check ",n.jsx("code",{children:"!user"})," → ",n.jsx("code",{children:"loading"})," → ",n.jsx("code",{children:"error"})," → ",n.jsx("code",{children:"!data"}),"."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Use early returns for clear loading/error/auth/empty branches."}),n.jsx("li",{children:'Call Hooks first; if you must guard earlier, split into a wrapper and an "Inner" component.'}),n.jsx("li",{children:"Prefer small, ordered guards over one giant condition."}),n.jsxs("li",{children:["Return ",n.jsx("code",{children:"null"})," to render nothing."]})]}),n.jsx(c.Divider,{})]})}function sx({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="rendering-lists";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Rendering lists"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(ix,{})})})]})}function ix(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["In JSX, render collections with array methods like ",n.jsx("code",{children:"map()"}),", often after a"," ",n.jsx("code",{children:"filter()"})," or ",n.jsx("code",{children:"sort()"}),". Each rendered item must have a"," ",n.jsxs("strong",{children:["stable ",n.jsx("code",{children:"key"})]})," (deep dive in the next topic: ",n.jsx("em",{children:"Keys (stable identity)"}),")."]}),n.jsx("h3",{children:"A) Basics - map to elements"}),n.jsx(c.Code,{children:`const items = [
  { id: 1, title: "JSX" },
  { id: 2, title: "Lists" },
  { id: 3, title: "Rendering" },
];

function Basics() {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.title}</li>   {/* key required */}
      ))}
    </ul>
  );
}`}),n.jsx("h3",{children:"B) Filter → map → (optional) slice/sort"}),n.jsx("p",{children:"Compose readable pipelines. Keep logic outside JSX if it's long."}),n.jsx(c.Code,{children:`function VisibleTodos({ todos, query }) {
  const list = todos
    .filter(t => t.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 10);

  return (
    <ul>
      {list.map(t => <li key={t.id}>{t.title}</li>)}
    </ul>
  );
}`}),n.jsx("h3",{children:"C) Empty state gracefully"}),n.jsx(c.Code,{children:`function List({ items }) {
  if (!items?.length) return <p className="muted">No items yet</p>;
  return <ul>{items.map(i => <li key={i.id}>{i.title}</li>)}</ul>;
}`}),n.jsx("h3",{children:"D) Multiple siblings per item → use a keyed Fragment"}),n.jsx("p",{children:"Return more than one node per item without extra DOM wrappers."}),n.jsx(c.Code,{children:`function Pairs({ pairs }) {
  return (
    <ul>
      {pairs.map(p => (
        <React.Fragment key={p.id}>
          <li>{p.left}</li>
          <li className="muted">{p.right}</li>
        </React.Fragment>
      ))}
    </ul>
  );
}`}),n.jsx("h3",{children:"E) Tables - map rows (and cells)"}),n.jsx(c.Code,{children:`function UsersTable({ users }) {
  if (!users?.length) return <p>No users</p>;
  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Email</th></tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <td>{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}`}),n.jsx("h3",{children:"F) Nested lists"}),n.jsx(c.Code,{children:`function Categories({ data }) {
  return (
    <div>
      {data.map(cat => (
        <section key={cat.id}>
          <h4>{cat.name}</h4>
          <ul>
            {cat.items.map(it => <li key={it.id}>{it.label}</li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}`}),n.jsx("h3",{children:"G) Extract an item component (keeps JSX clean)"}),n.jsx(c.Code,{children:`function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        {todo.title}
      </label>
    </li>
  );
}

function TodoList({ todos, onToggle }) {
  return <ul>{todos.map(t => <TodoItem key={t.id} todo={t} onToggle={onToggle} />)}</ul>;
}`}),n.jsx("h3",{children:"H) Keys (quick note - full details next)"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Use a ",n.jsx("strong",{children:"stable id"})," from your data as ",n.jsx("code",{children:"key"})," (not array index)."]}),n.jsxs("li",{children:["Keys live on the ",n.jsx("em",{children:"array's direct children"}),"."]}),n.jsx("li",{children:"Reordering/removing items needs stable keys to preserve component state per item."})]}),n.jsx("h3",{children:"I) Performance tips"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Precompute big pipelines (",n.jsx("code",{children:"filter/sort/map"}),") before ",n.jsx("code",{children:"return"})," for readability."]}),n.jsxs("li",{children:["Memoize expensive derived arrays with ",n.jsx("code",{children:"useMemo"})," if inputs rarely change."]}),n.jsxs("li",{children:["Prefer ",n.jsx("code",{children:"id"})," keys; avoid re-creating arrays unnecessarily in parents to reduce re-renders."]})]}),n.jsx(c.Code,{children:`function HeavyList({ data, query }) {
  const visible = React.useMemo(() => {
    const q = query.toLowerCase();
    return data
      .filter(x => x.title.toLowerCase().includes(q))
      .sort((a,b) => a.title.localeCompare(b.title));
  }, [data, query]);

  return <ul>{visible.map(x => <li key={x.id}>{x.title}</li>)}</ul>;
}`}),n.jsx("h3",{children:"Common mistakes"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Forgetting ",n.jsx("code",{children:"key"})," or putting it on the wrong element."]}),n.jsxs("li",{children:["Using ",n.jsx("code",{children:"index"})," as key (can break state on reorders). More on this in the next topic."]}),n.jsxs("li",{children:["Performing expensive computations inside ",n.jsx("code",{children:"map"})," on every render-precompute outside."]}),n.jsxs("li",{children:["Returning ",n.jsx("code",{children:"undefined"})," by accident (missing ",n.jsx("code",{children:"return"})," in curly-body arrow functions)."]})]}),n.jsx(c.Code,{children:`// ❌ Curly body needs an explicit return
items.map(i => { <li>{i.title}</li> }); // undefined

// ✅ Implicit return with parens
items.map(i => (<li key={i.id}>{i.title}</li>));

// ✅ Or explicit return
items.map(i => { return <li key={i.id}>{i.title}</li>; });`}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsx("li",{children:"Render products as a list with name + price (₹), sorted by price asc, limited to top 5."}),n.jsxs("li",{children:["Build a table of users (",n.jsx("code",{children:"{ id, name, role }"}),") and show only ",n.jsx("code",{children:'role === "admin"'}),"."]}),n.jsxs("li",{children:["From an array of categories with nested ",n.jsx("code",{children:"items"}),", render a section per category and a list of item labels."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Compose ",n.jsx("code",{children:"filter → sort → map"}),"."]}),n.jsxs("li",{children:["Each item needs a ",n.jsxs("strong",{children:["stable ",n.jsx("code",{children:"key"})]})," (covered in the next topic)."]}),n.jsx("li",{children:"Use keyed Fragments when returning multiple siblings per item."}),n.jsx("li",{children:"Show an empty state when the list is blank."}),n.jsx("li",{children:"Extract an Item component for cleaner JSX and easier reuse."})]}),n.jsx(c.Divider,{})]})}function lx({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="keys-stable-identity";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Keys (stable identity)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(ox,{})})})]})}function ox(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"key"}),' tells React "which child is which" across renders. With ',n.jsx("em",{children:"stable"})," keys, React preserves the correct DOM and component ",n.jsx("em",{children:"state"})," when items move, insert, or delete."]}),n.jsx("h3",{children:"A) The basic rule"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Use a ",n.jsx("strong",{children:"stable id from your data"})," as the ",n.jsx("code",{children:"key"})," (e.g., ",n.jsx("code",{children:"user.id"}),")."]}),n.jsxs("li",{children:["Keys go on the ",n.jsx("em",{children:"elements returned by the array"})," (the direct children of the map)."]}),n.jsxs("li",{children:["Keys must be ",n.jsx("strong",{children:"unique among siblings"})," (not globally unique)."]})]}),n.jsx(c.Code,{children:`const todos = [
  { id: "t1", title: "Learn JSX" },
  { id: "t2", title: "Practice keys" },
];

<ul>
  {todos.map(t => <li key={t.id}>{t.title}</li>)}
</ul>`}),n.jsx("h3",{children:"B) Why not index keys? (State sticks to positions)"}),n.jsxs("p",{children:["Using array index as key ties state to the ",n.jsx("em",{children:"position"}),`, not the item. On reorders/inserts/removals, you'll see wrong items "remember" state (like a checked box moving to another row).`]}),n.jsx(c.Code,{children:`// ❌ Index key causes state bugs when list changes
function BadList({ items }) {
  const [checked, setChecked] = React.useState({});
  return (
    <ul>
      {items.map((it, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={!!checked[it.id]}
              onChange={() => setChecked(c => ({ ...c, [it.id]: !c[it.id] }))}
            />
            {it.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

// ✅ Use stable ids to keep identity attached to the item
function GoodList({ items }) {
  const [checked, setChecked] = React.useState({});
  return (
    <ul>
      {items.map(it => (
        <li key={it.id}>
          <label>
            <input
              type="checkbox"
              checked={!!checked[it.id]}
              onChange={() => setChecked(c => ({ ...c, [it.id]: !c[it.id] }))}
            />
            {it.label}
          </label>
        </li>
      ))}
    </ul>
  );
}`}),n.jsx("h3",{children:"C) Where to put the key (correct placement)"}),n.jsxs("p",{children:["Put the key on the element returned from ",n.jsx("code",{children:"map()"}),". If you extract an item component, put the key on the usage, not inside the child."]}),n.jsx(c.Code,{children:`// ❌ Key inside child is ignored for the outer list
function TodoItem({ todo }) {
  return <li /* key={todo.id} - WRONG place */>{todo.title}</li>;
}
<ul>
  {todos.map(t => <TodoItem /* key should be here */ todo={t} />)}
</ul>

// ✅ Correct: key on the array's direct child
<ul>
  {todos.map(t => <TodoItem key={t.id} todo={t} />)}
</ul>`}),n.jsx("h3",{children:"D) Multiple siblings per item → keyed Fragment"}),n.jsxs("p",{children:["When each item needs to render more than one sibling, wrap them in a ",n.jsx("code",{children:"<React.Fragment key=...>"}),"."]}),n.jsx(c.Code,{children:`{rows.map(row => (
  <React.Fragment key={row.id}>
    <tr><th colSpan={2}>{row.title}</th></tr>
    <tr>
      <td>{row.left}</td>
      <td>{row.right}</td>
    </tr>
  </React.Fragment>
))}`}),n.jsx("h3",{children:"E) Composite keys (when no single id)"}),n.jsxs("p",{children:["Create a stable composite key from stable parts (avoid ",n.jsx("code",{children:"Math.random()"})," or timestamps)."]}),n.jsx(c.Code,{children:`// Grid cells: combine row + col ids
{grid.map(row => (
  <tr key={row.id}>
    {row.cells.map(col => (
      <td key={row.id + ":" + col.id}>{col.value}</td>
    ))}
  </tr>
))}`}),n.jsx("h3",{children:'F) When is using index "okay"?'}),n.jsxs("ul",{children:[n.jsxs("li",{children:["List is ",n.jsx("strong",{children:"static"})," (no insert/reorder/remove) and purely presentational."]}),n.jsx("li",{children:"No stateful child components inside the list items."}),n.jsx("li",{children:"Data has no stable id and you won't change the list order during the component's life."})]}),n.jsx(c.Code,{children:`// Mostly static icons row (no reorders) -> index is acceptable
const icons = [HomeIcon, SearchIcon, UserIcon];
<nav>
  {icons.map((Icon, i) => <Icon key={i} aria-hidden="true" />)}
</nav>`}),n.jsx("h3",{children:"G) Common mistakes"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Random keys"})," (",n.jsx("code",{children:"Math.random()"}),") → change every render, forcing remounts."]}),n.jsxs("li",{children:["Using ",n.jsx("strong",{children:"unstable derived values"})," (like array index, or ",n.jsx("code",{children:"JSON.stringify(obj)"})," when the object is recreated each time)."]}),n.jsxs("li",{children:["Putting the key on a ",n.jsx("em",{children:"descendant"})," instead of the mapped element."]}),n.jsx("li",{children:"Duplicate keys among siblings → React warning; reconciliation becomes ambiguous."})]}),n.jsx(c.Code,{children:`// ❌ Bad: random key remounts every render
<li key={Math.random()}>{title}</li>

// ❌ Bad: object reference changes each render
<li key={item}>{item.title}</li> // key becomes "[object Object]" and is unstable

// ✅ Good: stable data id
<li key={item.id}>{item.title}</li>`}),n.jsx("h3",{children:"H) Demo: reordering with and without stable keys"}),n.jsx(c.Code,{children:`// Try moving the first item to the end; with index keys, a focused input may jump
function Row({ item }) {
  const [text, setText] = React.useState(item.label);
  return <input value={text} onChange={e => setText(e.target.value)} />;
}

function BadReorder({ items }) {
  return items.map((it, i) => <Row key={i} item={it} />);
}

function GoodReorder({ items }) {
  return items.map(it => <Row key={it.id} item={it} />);
}`}),n.jsx("h3",{children:"I) Checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Prefer ",n.jsx("strong",{children:"stable ids"})," from data as keys."]}),n.jsxs("li",{children:["Key the ",n.jsx("em",{children:"direct child"})," returned from ",n.jsx("code",{children:"map()"}),"."]}),n.jsx("li",{children:"Avoid index keys if items can be re-ordered/inserted/removed or contain state."}),n.jsxs("li",{children:["Use keyed ",n.jsx("code",{children:"React.Fragment"})," when returning multiple siblings per item."]}),n.jsx("li",{children:"Composite keys are fine if built from stable parts."})]}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Fix the key placement:",n.jsx(c.Code,{children:`function Item({ user }) { return <li>{user.name}</li>; }
<ul>
  {users.map(u => <Item user={u} />)}   // where should key go?
</ul>`})]}),n.jsx("li",{children:"Replace index keys with stable keys in a list where items can be deleted."}),n.jsxs("li",{children:["Build a 2D table from ",n.jsx("code",{children:"rows: {id, cells: {id, value}[] }[]"})," using composite keys."]})]}),n.jsx(c.Divider,{})]})}function ax({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="dangerous-html";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Dangerous HTML (when/why)"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(cx,{})})})]})}function cx(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["React ",n.jsx("strong",{children:"escapes"})," text by default to prevent XSS. If you must inject raw HTML, use ",n.jsx("code",{children:"dangerouslySetInnerHTML"})," - but only with ",n.jsx("strong",{children:"trusted/sanitized"})," content."]}),n.jsx("h3",{children:"A) Basic usage"}),n.jsx(c.Code,{children:`const html = "<strong>Trusted</strong> snippet";
<div dangerouslySetInnerHTML={{ __html: html }} />`}),n.jsxs("p",{children:["The prop expects an object with a ",n.jsx("code",{children:"__html"})," key. This bypasses React's escaping, so any scripts/handlers inside will execute if the browser allows them."]}),n.jsx("h3",{children:"B) When should you use it?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Rendering ",n.jsx("strong",{children:"sanitized CMS/Markdown"})," output."]}),n.jsxs("li",{children:["Server-rendered fragments you ",n.jsx("strong",{children:"control"})," and sanitize."]}),n.jsxs("li",{children:["Embedding ",n.jsx("strong",{children:"trusted"})," vendor widgets/snippets (or prefer iframes)."]})]}),n.jsx("h3",{children:"C) XSS risk demo (do NOT do this)"}),n.jsx(c.Code,{children:`// ❌ Never inject user input directly
function Bad({ userInputHTML }) {
  return <div dangerouslySetInnerHTML={{ __html: userInputHTML }} />;
}

// An attacker could send: '<img src=x onerror="alert("hacked")">'
// or '<script>...<\/script>'`}),n.jsx("h3",{children:"D) Sanitize first (recommended)"}),n.jsxs("p",{children:["Prefer sanitizing on the ",n.jsx("strong",{children:"server"}),". If you must sanitize on the client, use a well-tested library (e.g., ",n.jsx("code",{children:"dompurify"}),")."]}),n.jsx(c.Code,{children:`// npm i dompurify
import DOMPurify from "dompurify";

function SafeHTML({ html }) {
  const clean = React.useMemo(() => DOMPurify.sanitize(html), [html]);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}`}),n.jsx("h3",{children:"E) Notes & limitations"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Elements injected this way are ",n.jsx("strong",{children:"not React-managed"}),"; no React event handlers inside."]}),n.jsx("li",{children:"Prefer plain JSX whenever possible; raw HTML is a last resort."}),n.jsxs("li",{children:["Consider ",n.jsx("strong",{children:"CSP"})," headers to reduce script injection impact (not a replacement for sanitization)."]}),n.jsx("li",{children:"Don't “roll your own” sanitizer - easy to miss edge cases."})]}),n.jsx("h3",{children:"F) Markdown workflow (safe pattern)"}),n.jsx(c.Code,{children:`// 1) Convert Markdown -> HTML (on server or trusted parser).
// 2) Sanitize the HTML.
// 3) Inject sanitized HTML.
<SafeHTML html={sanitizedHtml} />`}),n.jsx("h3",{children:"Common mistakes"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Passing user-generated HTML without sanitization."}),n.jsxs("li",{children:["Using ",n.jsx("code",{children:"dangerouslySetInnerHTML"})," where JSX would work fine."]}),n.jsxs("li",{children:["Forgetting the ",n.jsx("code",{children:"__html"})," key: it must be"," ",n.jsx("code",{children:"{{ __html: htmlString }}"}),"."]})]}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Convert to safe rendering using ",n.jsx("code",{children:"DOMPurify"}),":",n.jsx(c.Code,{children:`function Article({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}`})]}),n.jsxs("li",{children:["Spot the vulnerability and fix it:",n.jsx(c.Code,{children:`// Comments come from users
<CommentBody html={comment.rawHtml} />`})]}),n.jsxs("li",{children:["Wire a ",n.jsx("code",{children:"<SafeHTML/>"})," component that memo-sanitizes and renders an empty state when ",n.jsx("code",{children:"html"})," is missing."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Only inject ",n.jsx("strong",{children:"sanitized, trusted"})," HTML."]}),n.jsx("li",{children:"Prefer JSX or iframes for third-party embeds."}),n.jsx("li",{children:"Remember: React won't attach events inside injected HTML."}),n.jsxs("li",{children:["Server-side sanitize whenever possible; client-side with ",n.jsx("code",{children:"dompurify"})," if needed."]})]}),n.jsx(c.Divider,{})]})}function dx({defaultOpen:l=!1}){const[a,d]=H.useState(!!l),u="function-component-anatomy";return n.jsxs(c.Topic,{id:u,children:[n.jsxs(c.Title,{onClick:()=>d(f=>!f),"aria-expanded":a,"aria-controls":`${u}-panel`,id:`${u}-button`,"data-open":a,children:[n.jsx(c.Arrow,{"data-open":a,children:"▸"}),n.jsx("span",{children:"Function component anatomy"})]}),n.jsx(c.Panel,{id:`${u}-panel`,role:"region","aria-labelledby":`${u}-button`,"data-open":a,children:n.jsx("div",{children:n.jsx(ux,{})})})]})}function ux(){return n.jsxs(c.Content,{children:[n.jsxs("p",{children:["A React function component is a plain JavaScript function that returns JSX. Name it in ",n.jsx("strong",{children:"PascalCase"}),", receive props as the first argument, call Hooks only at the top, and return exactly one root element (Fragment is fine)."]}),n.jsx("h3",{children:"A) Minimum viable component"}),n.jsx(c.Code,{children:`// File: src/components/Greeting.jsx
export default function Greeting() {
  return <p>Hello</p>;
}

// Usage:
// <Greeting />`}),n.jsx("h3",{children:"B) Props basics (destructure, defaults, rest)"}),n.jsx(c.Code,{children:`// Destructure props with defaults; collect the rest for DOM pass-through
export function Button({
  children,
  kind = "primary",          // default/fallback prop
  disabled = false,
  ...rest                     // className, onClick, etc.
}) {
  const cls = ["btn", kind === "primary" ? "btn--primary" : "btn--default"]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={cls} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}`}),n.jsx("h3",{children:"C) State, refs, effects - Hooks live at the top"}),n.jsx("p",{children:"Always call Hooks in the same order on every render (no conditional calls)."}),n.jsx(c.Code,{children:`export function Counter({ step = 1 }) {
  const [count, setCount] = React.useState(0);
  const mounted = React.useRef(false);

  React.useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };      // cleanup on unmount
  }, []);

  function inc() { setCount(c => c + step); }

  return <button onClick={inc}>Count: {count}</button>;
}`}),n.jsx("h3",{children:"D) Rendering - one root, fragments, early returns"}),n.jsx(c.Code,{children:`export function Profile({ user }) {
  if (!user) return null;                            // early return

  return (
    <>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </>
  );
}`}),n.jsx("h3",{children:"E) Event handlers & synthetic events"}),n.jsx("p",{children:"Event props are camelCased and receive the React SyntheticEvent."}),n.jsx(c.Code,{children:`export function Form({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(new FormData(e.currentTarget));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required />
      <button>Save</button>
    </form>
  );
}`}),n.jsx("h3",{children:"F) Derived values - compute outside JSX (memo if heavy)"}),n.jsx(c.Code,{children:`export function Price({ amount, discount = 0 }) {
  const final = React.useMemo(
    () => Math.max(0, Math.round(amount * (1 - discount))),
    [amount, discount]
  );
  return <span>₹{final}</span>;
}`}),n.jsx("h3",{children:"G) What belongs outside the component"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Static constants and helpers (do not recreate them on each render)."}),n.jsx("li",{children:"Pure utilities that don't need props or state."})]}),n.jsx(c.Code,{children:`// ✅ outside: stable across renders
const CURRENCY = new Intl.NumberFormat("en-IN");

export function Total({ value }) {
  return <strong>{CURRENCY.format(value)}</strong>;
}`}),n.jsx("h3",{children:"H) Export patterns & naming"}),n.jsxs("ul",{children:[n.jsx("li",{children:"One component per file (usually). File named after the component."}),n.jsx("li",{children:"Default export for primary component; named exports for small helpers."}),n.jsx("li",{children:"Capitalize component names; never call components like functions."})]}),n.jsx(c.Code,{children:`// ✅ correct usage
<MyCard />

// ❌ don't do this
// MyCard() // calling as a plain function bypasses React`}),n.jsx("h3",{children:"I) Common mistakes"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Calling Hooks conditionally or inside loops."}),n.jsx("li",{children:"Returning multiple top-level siblings without a Fragment."}),n.jsx("li",{children:"Passing random props down to DOM without filtering when they aren't valid DOM attributes."}),n.jsx("li",{children:"Creating heavy objects/functions inline every render without need (premature churn)."})]}),n.jsx("h3",{children:"Mini-exercises"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Convert a lowercase function ",n.jsx("code",{children:"usercard"})," to a proper PascalCase component with a default prop for ",n.jsx("code",{children:"avatarSize"}),"."]}),n.jsxs("li",{children:["Build a ",n.jsx("code",{children:"<Tag>"})," that accepts ",n.jsx("code",{children:"children"}),", a ",n.jsx("code",{children:"tone"})," prop (",n.jsx("code",{children:"info"}),"/",n.jsx("code",{children:"warn"}),"/",n.jsx("code",{children:"danger"}),") and forwards ",n.jsx("code",{children:"...rest"})," to a ",n.jsx("code",{children:"span"}),"."]}),n.jsxs("li",{children:["Refactor a component that computes an expensive ",n.jsx("code",{children:"filtered"})," array on every render to use ",n.jsx("code",{children:"useMemo"}),"."]})]}),n.jsx("h3",{children:"Mini-checklist"}),n.jsxs("ul",{children:[n.jsx("li",{children:"PascalCase name; export from a same-named file."}),n.jsxs("li",{children:["Destructure props with sensible defaults; forward ",n.jsx("code",{children:"...rest"})," to the right element."]}),n.jsx("li",{children:"Hooks at the top; early return for guards."}),n.jsxs("li",{children:["Keep helpers/constants outside; compute heavy stuff with ",n.jsx("code",{children:"useMemo"})," only when needed."]}),n.jsx("li",{children:"Return a single root (Fragment ok); keep JSX readable."})]}),n.jsx(c.Divider,{})]})}function hx(){return n.jsxs(px.Wrapper,{children:[n.jsx("h1",{children:"ReactJS Handbook"}),n.jsxs("fieldset",{style:{padding:"0 15px 15px 30px",marginBottom:15},children:[n.jsx("legend",{style:{padding:15},children:"From Wikipedia - last updated: Sep 02, 2025"}),n.jsx("p",{children:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.'}),n.jsx("br",{}),n.jsx("p",{children:"React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements."})]}),n.jsx("h1",{style:{marginTop:"30px"},children:"My Notes"}),n.jsx("h3",{children:"last updated: Sep 02, 2025"}),n.jsx("div",{className:"divider"}),n.jsx("h3",{children:"0. Setup & Local Dev"}),n.jsxs(n.Fragment,{children:[n.jsx(Jf,{}),n.jsx(Xf,{}),n.jsx(Yf,{}),n.jsx(em,{}),n.jsx(tm,{}),n.jsx(sm,{})]}),n.jsx("h3",{style:{marginTop:50},children:"1. ES6+ I actually use daily"}),n.jsxs(n.Fragment,{children:[n.jsx(lm,{}),n.jsx(am,{}),n.jsx(dm,{}),n.jsx(hm,{}),n.jsx(fm,{}),n.jsx(xm,{}),n.jsx(jm,{}),n.jsx(vm,{}),n.jsx(km,{}),n.jsx(Cm,{}),n.jsx(Em,{}),n.jsx(Tm,{}),n.jsx(Nm,{}),n.jsx(Om,{}),n.jsx(_m,{}),n.jsx(Dm,{}),n.jsx($m,{})]}),n.jsx("h3",{style:{marginTop:50},children:"2. JSX: Rules and Patterns"}),n.jsxs(n.Fragment,{children:[n.jsx(zm,{}),n.jsx(Bm,{}),n.jsx(Wm,{}),n.jsx(Jm,{}),n.jsx(Xm,{}),n.jsx(Km,{}),n.jsx(Ym,{}),n.jsx(ex,{}),n.jsx(tx,{}),n.jsx(sx,{}),n.jsx(lx,{}),n.jsx(ax,{})]}),n.jsx("h3",{style:{marginTop:50},children:"3. Components & Props"}),n.jsx(n.Fragment,{children:n.jsx(dx,{})})]})}const px={Wrapper:En.div`
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
  `};var Du={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ou=H.createContext&&H.createContext(Du),fx=["attr","size","title"];function mx(l,a){if(l==null)return{};var d=xx(l,a),u,f;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(l);for(f=0;f<w.length;f++)u=w[f],!(a.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(l,u)&&(d[u]=l[u])}return d}function xx(l,a){if(l==null)return{};var d={};for(var u in l)if(Object.prototype.hasOwnProperty.call(l,u)){if(a.indexOf(u)>=0)continue;d[u]=l[u]}return d}function gi(){return gi=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var u in d)Object.prototype.hasOwnProperty.call(d,u)&&(l[u]=d[u])}return l},gi.apply(this,arguments)}function au(l,a){var d=Object.keys(l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(l);a&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),d.push.apply(d,u)}return d}function ji(l){for(var a=1;a<arguments.length;a++){var d=arguments[a]!=null?arguments[a]:{};a%2?au(Object(d),!0).forEach(function(u){gx(l,u,d[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(d)):au(Object(d)).forEach(function(u){Object.defineProperty(l,u,Object.getOwnPropertyDescriptor(d,u))})}return l}function gx(l,a,d){return a=jx(a),a in l?Object.defineProperty(l,a,{value:d,enumerable:!0,configurable:!0,writable:!0}):l[a]=d,l}function jx(l){var a=yx(l,"string");return typeof a=="symbol"?a:a+""}function yx(l,a){if(typeof l!="object"||!l)return l;var d=l[Symbol.toPrimitive];if(d!==void 0){var u=d.call(l,a);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(l)}function Lu(l){return l&&l.map((a,d)=>H.createElement(a.tag,ji({key:d},a.attr),Lu(a.child)))}function vx(l){return a=>H.createElement(wx,gi({attr:ji({},l.attr)},a),Lu(l.child))}function wx(l){var a=d=>{var{attr:u,size:f,title:w}=l,E=mx(l,fx),_=f||d.size||"1em",T;return d.className&&(T=d.className),l.className&&(T=(T?T+" ":"")+l.className),H.createElement("svg",gi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,u,E,{className:T,style:ji(ji({color:l.color||d.color},d.style),l.style),height:_,width:_,xmlns:"http://www.w3.org/2000/svg"}),w&&H.createElement("title",null,w),l.children)};return ou!==void 0?H.createElement(ou.Consumer,null,d=>a(d)):a(Du)}function kx(l){return vx({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"},child:[]}]})(l)}function Sx({threshold:l=50}){const[a,d]=H.useState(!1),u=H.useMemo(()=>{var w,E;return(E=(w=window.matchMedia)==null?void 0:w.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:E.matches},[]);H.useEffect(()=>{let w=!1;const E=()=>{w||(window.requestAnimationFrame(()=>{d(window.scrollY>l),w=!1}),w=!0)};return E(),window.addEventListener("scroll",E,{passive:!0}),()=>window.removeEventListener("scroll",E)},[l]);const f=()=>{window.scrollTo({top:0,behavior:u?"auto":"smooth"})};return n.jsx(Cx,{type:"button","aria-label":"Scroll to top",onClick:f,"data-visible":a,title:"Back to top",children:n.jsx(kx,{})})}const Cx=En.button`
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
`,bx=()=>n.jsxs(n.Fragment,{children:[n.jsx(hx,{}),n.jsx(Sx,{})]});Hp.createRoot(document.getElementById("root")).render(n.jsx(n.Fragment,{children:n.jsx(bx,{})}));
