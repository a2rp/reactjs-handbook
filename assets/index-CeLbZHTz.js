(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const w of p)if(w.type==="childList")for(const R of w.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&d(R)}).observe(document,{childList:!0,subtree:!0});function u(p){const w={};return p.integrity&&(w.integrity=p.integrity),p.referrerPolicy&&(w.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?w.credentials="include":p.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function d(p){if(p.ep)return;p.ep=!0;const w=u(p);fetch(p.href,w)}})();function Dp(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var yl={exports:{}},Vr={},vl={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function Mp(){if(_d)return te;_d=1;var l=Symbol.for("react.element"),a=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),R=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),$=Symbol.iterator;function z(j){return j===null||typeof j!="object"?null:(j=$&&j[$]||j["@@iterator"],typeof j=="function"?j:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,J={};function Q(j,k,K){this.props=j,this.context=k,this.refs=J,this.updater=K||X}Q.prototype.isReactComponent={},Q.prototype.setState=function(j,k){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,k,"setState")},Q.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function pe(){}pe.prototype=Q.prototype;function le(j,k,K){this.props=j,this.context=k,this.refs=J,this.updater=K||X}var ie=le.prototype=new pe;ie.constructor=le,se(ie,Q.prototype),ie.isPureReactComponent=!0;var ee=Array.isArray,ue=Object.prototype.hasOwnProperty,q={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function Te(j,k,K){var Y,re={},ne=null,he=null;if(k!=null)for(Y in k.ref!==void 0&&(he=k.ref),k.key!==void 0&&(ne=""+k.key),k)ue.call(k,Y)&&!H.hasOwnProperty(Y)&&(re[Y]=k[Y]);var oe=arguments.length-2;if(oe===1)re.children=K;else if(1<oe){for(var ce=Array(oe),_e=0;_e<oe;_e++)ce[_e]=arguments[_e+2];re.children=ce}if(j&&j.defaultProps)for(Y in oe=j.defaultProps,oe)re[Y]===void 0&&(re[Y]=oe[Y]);return{$$typeof:l,type:j,key:ne,ref:he,props:re,_owner:q.current}}function en(j,k){return{$$typeof:l,type:j.type,key:k,ref:j.ref,props:j.props,_owner:j._owner}}function jn(j){return typeof j=="object"&&j!==null&&j.$$typeof===l}function Dn(j){var k={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(K){return k[K]})}var an=/\/+/g;function We(j,k){return typeof j=="object"&&j!==null&&j.key!=null?Dn(""+j.key):k.toString(36)}function nn(j,k,K,Y,re){var ne=typeof j;(ne==="undefined"||ne==="boolean")&&(j=null);var he=!1;if(j===null)he=!0;else switch(ne){case"string":case"number":he=!0;break;case"object":switch(j.$$typeof){case l:case a:he=!0}}if(he)return he=j,re=re(he),j=Y===""?"."+We(he,0):Y,ee(re)?(K="",j!=null&&(K=j.replace(an,"$&/")+"/"),nn(re,k,K,"",function(_e){return _e})):re!=null&&(jn(re)&&(re=en(re,K+(!re.key||he&&he.key===re.key?"":(""+re.key).replace(an,"$&/")+"/")+j)),k.push(re)),1;if(he=0,Y=Y===""?".":Y+":",ee(j))for(var oe=0;oe<j.length;oe++){ne=j[oe];var ce=Y+We(ne,oe);he+=nn(ne,k,K,ce,re)}else if(ce=z(j),typeof ce=="function")for(j=ce.call(j),oe=0;!(ne=j.next()).done;)ne=ne.value,ce=Y+We(ne,oe++),he+=nn(ne,k,K,ce,re);else if(ne==="object")throw k=String(j),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return he}function cn(j,k,K){if(j==null)return j;var Y=[],re=0;return nn(j,Y,"","",function(ne){return k.call(K,ne,re++)}),Y}function $e(j){if(j._status===-1){var k=j._result;k=k(),k.then(function(K){(j._status===0||j._status===-1)&&(j._status=1,j._result=K)},function(K){(j._status===0||j._status===-1)&&(j._status=2,j._result=K)}),j._status===-1&&(j._status=0,j._result=k)}if(j._status===1)return j._result.default;throw j._result}var xe={current:null},T={transition:null},L={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:T,ReactCurrentOwner:q};function N(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:cn,forEach:function(j,k,K){cn(j,function(){k.apply(this,arguments)},K)},count:function(j){var k=0;return cn(j,function(){k++}),k},toArray:function(j){return cn(j,function(k){return k})||[]},only:function(j){if(!jn(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},te.Component=Q,te.Fragment=u,te.Profiler=p,te.PureComponent=le,te.StrictMode=d,te.Suspense=E,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,te.act=N,te.cloneElement=function(j,k,K){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var Y=se({},j.props),re=j.key,ne=j.ref,he=j._owner;if(k!=null){if(k.ref!==void 0&&(ne=k.ref,he=q.current),k.key!==void 0&&(re=""+k.key),j.type&&j.type.defaultProps)var oe=j.type.defaultProps;for(ce in k)ue.call(k,ce)&&!H.hasOwnProperty(ce)&&(Y[ce]=k[ce]===void 0&&oe!==void 0?oe[ce]:k[ce])}var ce=arguments.length-2;if(ce===1)Y.children=K;else if(1<ce){oe=Array(ce);for(var _e=0;_e<ce;_e++)oe[_e]=arguments[_e+2];Y.children=oe}return{$$typeof:l,type:j.type,key:re,ref:ne,props:Y,_owner:he}},te.createContext=function(j){return j={$$typeof:R,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:w,_context:j},j.Consumer=j},te.createElement=Te,te.createFactory=function(j){var k=Te.bind(null,j);return k.type=j,k},te.createRef=function(){return{current:null}},te.forwardRef=function(j){return{$$typeof:M,render:j}},te.isValidElement=jn,te.lazy=function(j){return{$$typeof:V,_payload:{_status:-1,_result:j},_init:$e}},te.memo=function(j,k){return{$$typeof:G,type:j,compare:k===void 0?null:k}},te.startTransition=function(j){var k=T.transition;T.transition={};try{j()}finally{T.transition=k}},te.unstable_act=N,te.useCallback=function(j,k){return xe.current.useCallback(j,k)},te.useContext=function(j){return xe.current.useContext(j)},te.useDebugValue=function(){},te.useDeferredValue=function(j){return xe.current.useDeferredValue(j)},te.useEffect=function(j,k){return xe.current.useEffect(j,k)},te.useId=function(){return xe.current.useId()},te.useImperativeHandle=function(j,k,K){return xe.current.useImperativeHandle(j,k,K)},te.useInsertionEffect=function(j,k){return xe.current.useInsertionEffect(j,k)},te.useLayoutEffect=function(j,k){return xe.current.useLayoutEffect(j,k)},te.useMemo=function(j,k){return xe.current.useMemo(j,k)},te.useReducer=function(j,k,K){return xe.current.useReducer(j,k,K)},te.useRef=function(j){return xe.current.useRef(j)},te.useState=function(j){return xe.current.useState(j)},te.useSyncExternalStore=function(j,k,K){return xe.current.useSyncExternalStore(j,k,K)},te.useTransition=function(){return xe.current.useTransition()},te.version="18.3.1",te}var Fd;function _l(){return Fd||(Fd=1,vl.exports=Mp()),vl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function _p(){if(Ld)return Vr;Ld=1;var l=_l(),a=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function R(M,E,G){var V,$={},z=null,X=null;G!==void 0&&(z=""+G),E.key!==void 0&&(z=""+E.key),E.ref!==void 0&&(X=E.ref);for(V in E)d.call(E,V)&&!w.hasOwnProperty(V)&&($[V]=E[V]);if(M&&M.defaultProps)for(V in E=M.defaultProps,E)$[V]===void 0&&($[V]=E[V]);return{$$typeof:a,type:M,key:z,ref:X,props:$,_owner:p.current}}return Vr.Fragment=u,Vr.jsx=R,Vr.jsxs=R,Vr}var $d;function Fp(){return $d||($d=1,yl.exports=_p()),yl.exports}var e=Fp(),Fl=_l();const O=Dp(Fl);var oi={},wl={exports:{}},Ye={},kl={exports:{}},bl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function Lp(){return zd||(zd=1,function(l){function a(T,L){var N=T.length;T.push(L);e:for(;0<N;){var j=N-1>>>1,k=T[j];if(0<p(k,L))T[j]=L,T[N]=k,N=j;else break e}}function u(T){return T.length===0?null:T[0]}function d(T){if(T.length===0)return null;var L=T[0],N=T.pop();if(N!==L){T[0]=N;e:for(var j=0,k=T.length,K=k>>>1;j<K;){var Y=2*(j+1)-1,re=T[Y],ne=Y+1,he=T[ne];if(0>p(re,N))ne<k&&0>p(he,re)?(T[j]=he,T[ne]=N,j=ne):(T[j]=re,T[Y]=N,j=Y);else if(ne<k&&0>p(he,N))T[j]=he,T[ne]=N,j=ne;else break e}}return L}function p(T,L){var N=T.sortIndex-L.sortIndex;return N!==0?N:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;l.unstable_now=function(){return w.now()}}else{var R=Date,M=R.now();l.unstable_now=function(){return R.now()-M}}var E=[],G=[],V=1,$=null,z=3,X=!1,se=!1,J=!1,Q=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(T){for(var L=u(G);L!==null;){if(L.callback===null)d(G);else if(L.startTime<=T)d(G),L.sortIndex=L.expirationTime,a(E,L);else break;L=u(G)}}function ee(T){if(J=!1,ie(T),!se)if(u(E)!==null)se=!0,$e(ue);else{var L=u(G);L!==null&&xe(ee,L.startTime-T)}}function ue(T,L){se=!1,J&&(J=!1,pe(Te),Te=-1),X=!0;var N=z;try{for(ie(L),$=u(E);$!==null&&(!($.expirationTime>L)||T&&!Dn());){var j=$.callback;if(typeof j=="function"){$.callback=null,z=$.priorityLevel;var k=j($.expirationTime<=L);L=l.unstable_now(),typeof k=="function"?$.callback=k:$===u(E)&&d(E),ie(L)}else d(E);$=u(E)}if($!==null)var K=!0;else{var Y=u(G);Y!==null&&xe(ee,Y.startTime-L),K=!1}return K}finally{$=null,z=N,X=!1}}var q=!1,H=null,Te=-1,en=5,jn=-1;function Dn(){return!(l.unstable_now()-jn<en)}function an(){if(H!==null){var T=l.unstable_now();jn=T;var L=!0;try{L=H(!0,T)}finally{L?We():(q=!1,H=null)}}else q=!1}var We;if(typeof le=="function")We=function(){le(an)};else if(typeof MessageChannel<"u"){var nn=new MessageChannel,cn=nn.port2;nn.port1.onmessage=an,We=function(){cn.postMessage(null)}}else We=function(){Q(an,0)};function $e(T){H=T,q||(q=!0,We())}function xe(T,L){Te=Q(function(){T(l.unstable_now())},L)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_continueExecution=function(){se||X||(se=!0,$e(ue))},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):en=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return z},l.unstable_getFirstCallbackNode=function(){return u(E)},l.unstable_next=function(T){switch(z){case 1:case 2:case 3:var L=3;break;default:L=z}var N=z;z=L;try{return T()}finally{z=N}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=z;z=T;try{return L()}finally{z=N}},l.unstable_scheduleCallback=function(T,L,N){var j=l.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?j+N:j):N=j,T){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=N+k,T={id:V++,callback:L,priorityLevel:T,startTime:N,expirationTime:k,sortIndex:-1},N>j?(T.sortIndex=N,a(G,T),u(E)===null&&T===u(G)&&(J?(pe(Te),Te=-1):J=!0,xe(ee,N-j))):(T.sortIndex=k,a(E,T),se||X||(se=!0,$e(ue))),T},l.unstable_shouldYield=Dn,l.unstable_wrapCallback=function(T){var L=z;return function(){var N=z;z=L;try{return T.apply(this,arguments)}finally{z=N}}}}(bl)),bl}var Ud;function $p(){return Ud||(Ud=1,kl.exports=Lp()),kl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function zp(){if(Bd)return Ye;Bd=1;var l=_l(),a=$p();function u(n){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function w(n,t){R(n,t),R(n+"Capture",t)}function R(n,t){for(p[n]=t,n=0;n<t.length;n++)d.add(t[n])}var M=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E=Object.prototype.hasOwnProperty,G=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},$={};function z(n){return E.call($,n)?!0:E.call(V,n)?!1:G.test(n)?$[n]=!0:(V[n]=!0,!1)}function X(n,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function se(n,t,r,s){if(t===null||typeof t>"u"||X(n,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function J(n,t,r,s,i,c,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=n,this.type=t,this.sanitizeURL=c,this.removeEmptyString=h}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Q[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var t=n[0];Q[t]=new J(t,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){Q[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Q[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Q[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){Q[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){Q[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){Q[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){Q[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function le(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var t=n.replace(pe,le);Q[t]=new J(t,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var t=n.replace(pe,le);Q[t]=new J(t,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var t=n.replace(pe,le);Q[t]=new J(t,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){Q[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){Q[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function ie(n,t,r,s){var i=Q.hasOwnProperty(t)?Q[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(se(t,r,i,s)&&(r=null),s||i===null?z(t)&&(r===null?n.removeAttribute(t):n.setAttribute(t,""+r)):i.mustUseProperty?n[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?n.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?n.setAttributeNS(s,t,r):n.setAttribute(t,r))))}var ee=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),q=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),en=Symbol.for("react.profiler"),jn=Symbol.for("react.provider"),Dn=Symbol.for("react.context"),an=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),nn=Symbol.for("react.suspense_list"),cn=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),T=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=T&&n[T]||n["@@iterator"],typeof n=="function"?n:null)}var N=Object.assign,j;function k(n){if(j===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+n}var K=!1;function Y(n,t){if(!n||K)return"";K=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var s=v}Reflect.construct(n,[],t)}else{try{t.call()}catch(v){s=v}n.call(t.prototype)}else{try{throw Error()}catch(v){s=v}n()}}catch(v){if(v&&s&&typeof v.stack=="string"){for(var i=v.stack.split(`
`),c=s.stack.split(`
`),h=i.length-1,f=c.length-1;1<=h&&0<=f&&i[h]!==c[f];)f--;for(;1<=h&&0<=f;h--,f--)if(i[h]!==c[f]){if(h!==1||f!==1)do if(h--,f--,0>f||i[h]!==c[f]){var m=`
`+i[h].replace(" at new "," at ");return n.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",n.displayName)),m}while(1<=h&&0<=f);break}}}finally{K=!1,Error.prepareStackTrace=r}return(n=n?n.displayName||n.name:"")?k(n):""}function re(n){switch(n.tag){case 5:return k(n.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case H:return"Fragment";case q:return"Portal";case en:return"Profiler";case Te:return"StrictMode";case We:return"Suspense";case nn:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Dn:return(n.displayName||"Context")+".Consumer";case jn:return(n._context.displayName||"Context")+".Provider";case an:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case cn:return t=n.displayName||null,t!==null?t:ne(n.type)||"Memo";case $e:t=n._payload,n=n._init;try{return ne(n(t))}catch{}}return null}function he(n){var t=n.type;switch(n.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=t.render,n=n.displayName||n.name||"",t.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(t);case 8:return t===Te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ce(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _e(n){var t=ce(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),s=""+n[t];if(!n.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,c=r.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return i.call(this)},set:function(h){s=""+h,c.call(this,h)}}),Object.defineProperty(n,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(h){s=""+h},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function Mn(n){n._valueTracker||(n._valueTracker=_e(n))}function gn(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return n&&(s=ce(n)?n.checked?"true":"false":n.value),n=s,n!==r?(t.setValue(n),!0):!1}function Qr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Si(n,t){var r=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??n._wrapperState.initialChecked})}function Hl(n,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=oe(t.value!=null?t.value:r),n._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wl(n,t){t=t.checked,t!=null&&ie(n,"checked",t,!1)}function Ri(n,t){Wl(n,t);var r=oe(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+r):n.value!==""+r&&(n.value=""+r);else if(s==="submit"||s==="reset"){n.removeAttribute("value");return}t.hasOwnProperty("value")?Pi(n,t.type,r):t.hasOwnProperty("defaultValue")&&Pi(n,t.type,oe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(n.defaultChecked=!!t.defaultChecked)}function Vl(n,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+n._wrapperState.initialValue,r||t===n.value||(n.value=t),n.defaultValue=t}r=n.name,r!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,r!==""&&(n.name=r)}function Pi(n,t,r){(t!=="number"||Qr(n.ownerDocument)!==n)&&(r==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+r&&(n.defaultValue=""+r))}var or=Array.isArray;function Pt(n,t,r,s){if(n=n.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<n.length;r++)i=t.hasOwnProperty("$"+n[r].value),n[r].selected!==i&&(n[r].selected=i),i&&s&&(n[r].defaultSelected=!0)}else{for(r=""+oe(r),t=null,i=0;i<n.length;i++){if(n[i].value===r){n[i].selected=!0,s&&(n[i].defaultSelected=!0);return}t!==null||n[i].disabled||(t=n[i])}t!==null&&(t.selected=!0)}}function Ei(n,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Jl(n,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(u(92));if(or(r)){if(1<r.length)throw Error(u(93));r=r[0]}t=r}t==null&&(t=""),r=t}n._wrapperState={initialValue:oe(r)}}function Gl(n,t){var r=oe(t.value),s=oe(t.defaultValue);r!=null&&(r=""+r,r!==n.value&&(n.value=r),t.defaultValue==null&&n.defaultValue!==r&&(n.defaultValue=r)),s!=null&&(n.defaultValue=""+s)}function Xl(n){var t=n.textContent;t===n._wrapperState.initialValue&&t!==""&&t!==null&&(n.value=t)}function ql(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ti(n,t){return n==null||n==="http://www.w3.org/1999/xhtml"?ql(t):n==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Yr,Kl=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return n(t,r,s,i)})}:n}(function(n,t){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;t.firstChild;)n.appendChild(t.firstChild)}});function lr(n,t){if(t){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=t;return}}n.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lu=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(n){Lu.forEach(function(t){t=t+n.charAt(0).toUpperCase()+n.substring(1),ar[t]=ar[n]})});function Ql(n,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ar.hasOwnProperty(n)&&ar[n]?(""+t).trim():t+"px"}function Yl(n,t){n=n.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=Ql(r,t[r],s);r==="float"&&(r="cssFloat"),s?n.setProperty(r,i):n[r]=i}}var $u=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ni(n,t){if(t){if($u[n]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,n));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Ii(n,t){if(n.indexOf("-")===-1)return typeof t.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function Oi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Di=null,Et=null,Tt=null;function Zl(n){if(n=Nr(n)){if(typeof Di!="function")throw Error(u(280));var t=n.stateNode;t&&(t=ws(t),Di(n.stateNode,n.type,t))}}function ea(n){Et?Tt?Tt.push(n):Tt=[n]:Et=n}function na(){if(Et){var n=Et,t=Tt;if(Tt=Et=null,Zl(n),t)for(n=0;n<t.length;n++)Zl(t[n])}}function ta(n,t){return n(t)}function ra(){}var Mi=!1;function sa(n,t,r){if(Mi)return n(t,r);Mi=!0;try{return ta(n,t,r)}finally{Mi=!1,(Et!==null||Tt!==null)&&(ra(),na())}}function cr(n,t){var r=n.stateNode;if(r===null)return null;var s=ws(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(n=n.type,s=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!s;break e;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(u(231,t,typeof r));return r}var _i=!1;if(M)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){_i=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{_i=!1}function zu(n,t,r,s,i,c,h,f,m){var v=Array.prototype.slice.call(arguments,3);try{t.apply(r,v)}catch(C){this.onError(C)}}var ur=!1,Zr=null,es=!1,Fi=null,Uu={onError:function(n){ur=!0,Zr=n}};function Bu(n,t,r,s,i,c,h,f,m){ur=!1,Zr=null,zu.apply(Uu,arguments)}function Hu(n,t,r,s,i,c,h,f,m){if(Bu.apply(this,arguments),ur){if(ur){var v=Zr;ur=!1,Zr=null}else throw Error(u(198));es||(es=!0,Fi=v)}}function ut(n){var t=n,r=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(r=t.return),n=t.return;while(n)}return t.tag===3?r:null}function ia(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function oa(n){if(ut(n)!==n)throw Error(u(188))}function Wu(n){var t=n.alternate;if(!t){if(t=ut(n),t===null)throw Error(u(188));return t!==n?null:n}for(var r=n,s=t;;){var i=r.return;if(i===null)break;var c=i.alternate;if(c===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===r)return oa(i),n;if(c===s)return oa(i),t;c=c.sibling}throw Error(u(188))}if(r.return!==s.return)r=i,s=c;else{for(var h=!1,f=i.child;f;){if(f===r){h=!0,r=i,s=c;break}if(f===s){h=!0,s=i,r=c;break}f=f.sibling}if(!h){for(f=c.child;f;){if(f===r){h=!0,r=c,s=i;break}if(f===s){h=!0,s=c,r=i;break}f=f.sibling}if(!h)throw Error(u(189))}}if(r.alternate!==s)throw Error(u(190))}if(r.tag!==3)throw Error(u(188));return r.stateNode.current===r?n:t}function la(n){return n=Wu(n),n!==null?aa(n):null}function aa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var t=aa(n);if(t!==null)return t;n=n.sibling}return null}var ca=a.unstable_scheduleCallback,da=a.unstable_cancelCallback,Vu=a.unstable_shouldYield,Ju=a.unstable_requestPaint,Se=a.unstable_now,Gu=a.unstable_getCurrentPriorityLevel,Li=a.unstable_ImmediatePriority,ua=a.unstable_UserBlockingPriority,ns=a.unstable_NormalPriority,Xu=a.unstable_LowPriority,ha=a.unstable_IdlePriority,ts=null,En=null;function qu(n){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ts,n,void 0,(n.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Yu,Ku=Math.log,Qu=Math.LN2;function Yu(n){return n>>>=0,n===0?32:31-(Ku(n)/Qu|0)|0}var rs=64,ss=4194304;function hr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function is(n,t){var r=n.pendingLanes;if(r===0)return 0;var s=0,i=n.suspendedLanes,c=n.pingedLanes,h=r&268435455;if(h!==0){var f=h&~i;f!==0?s=hr(f):(c&=h,c!==0&&(s=hr(c)))}else h=r&~i,h!==0?s=hr(h):c!==0&&(s=hr(c));if(s===0)return 0;if(t!==0&&t!==s&&(t&i)===0&&(i=s&-s,c=t&-t,i>=c||i===16&&(c&4194240)!==0))return t;if((s&4)!==0&&(s|=r&16),t=n.entangledLanes,t!==0)for(n=n.entanglements,t&=s;0<t;)r=31-yn(t),i=1<<r,s|=n[r],t&=~i;return s}function Zu(n,t){switch(n){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eh(n,t){for(var r=n.suspendedLanes,s=n.pingedLanes,i=n.expirationTimes,c=n.pendingLanes;0<c;){var h=31-yn(c),f=1<<h,m=i[h];m===-1?((f&r)===0||(f&s)!==0)&&(i[h]=Zu(f,t)):m<=t&&(n.expiredLanes|=f),c&=~f}}function $i(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function pa(){var n=rs;return rs<<=1,(rs&4194240)===0&&(rs=64),n}function zi(n){for(var t=[],r=0;31>r;r++)t.push(n);return t}function pr(n,t,r){n.pendingLanes|=t,t!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,t=31-yn(t),n[t]=r}function nh(n,t){var r=n.pendingLanes&~t;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=t,n.mutableReadLanes&=t,n.entangledLanes&=t,t=n.entanglements;var s=n.eventTimes;for(n=n.expirationTimes;0<r;){var i=31-yn(r),c=1<<i;t[i]=0,s[i]=-1,n[i]=-1,r&=~c}}function Ui(n,t){var r=n.entangledLanes|=t;for(n=n.entanglements;r;){var s=31-yn(r),i=1<<s;i&t|n[s]&t&&(n[s]|=t),r&=~i}}var me=0;function fa(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ma,Bi,xa,ja,ga,Hi=!1,os=[],Vn=null,Jn=null,Gn=null,fr=new Map,mr=new Map,Xn=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ya(n,t){switch(n){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(t.pointerId)}}function xr(n,t,r,s,i,c){return n===null||n.nativeEvent!==c?(n={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:c,targetContainers:[i]},t!==null&&(t=Nr(t),t!==null&&Bi(t)),n):(n.eventSystemFlags|=s,t=n.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),n)}function rh(n,t,r,s,i){switch(t){case"focusin":return Vn=xr(Vn,n,t,r,s,i),!0;case"dragenter":return Jn=xr(Jn,n,t,r,s,i),!0;case"mouseover":return Gn=xr(Gn,n,t,r,s,i),!0;case"pointerover":var c=i.pointerId;return fr.set(c,xr(fr.get(c)||null,n,t,r,s,i)),!0;case"gotpointercapture":return c=i.pointerId,mr.set(c,xr(mr.get(c)||null,n,t,r,s,i)),!0}return!1}function va(n){var t=ht(n.target);if(t!==null){var r=ut(t);if(r!==null){if(t=r.tag,t===13){if(t=ia(r),t!==null){n.blockedOn=t,ga(n.priority,function(){xa(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ls(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var r=Vi(n.domEventName,n.eventSystemFlags,t[0],n.nativeEvent);if(r===null){r=n.nativeEvent;var s=new r.constructor(r.type,r);Ai=s,r.target.dispatchEvent(s),Ai=null}else return t=Nr(r),t!==null&&Bi(t),n.blockedOn=r,!1;t.shift()}return!0}function wa(n,t,r){ls(n)&&r.delete(t)}function sh(){Hi=!1,Vn!==null&&ls(Vn)&&(Vn=null),Jn!==null&&ls(Jn)&&(Jn=null),Gn!==null&&ls(Gn)&&(Gn=null),fr.forEach(wa),mr.forEach(wa)}function jr(n,t){n.blockedOn===t&&(n.blockedOn=null,Hi||(Hi=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,sh)))}function gr(n){function t(i){return jr(i,n)}if(0<os.length){jr(os[0],n);for(var r=1;r<os.length;r++){var s=os[r];s.blockedOn===n&&(s.blockedOn=null)}}for(Vn!==null&&jr(Vn,n),Jn!==null&&jr(Jn,n),Gn!==null&&jr(Gn,n),fr.forEach(t),mr.forEach(t),r=0;r<Xn.length;r++)s=Xn[r],s.blockedOn===n&&(s.blockedOn=null);for(;0<Xn.length&&(r=Xn[0],r.blockedOn===null);)va(r),r.blockedOn===null&&Xn.shift()}var Nt=ee.ReactCurrentBatchConfig,as=!0;function ih(n,t,r,s){var i=me,c=Nt.transition;Nt.transition=null;try{me=1,Wi(n,t,r,s)}finally{me=i,Nt.transition=c}}function oh(n,t,r,s){var i=me,c=Nt.transition;Nt.transition=null;try{me=4,Wi(n,t,r,s)}finally{me=i,Nt.transition=c}}function Wi(n,t,r,s){if(as){var i=Vi(n,t,r,s);if(i===null)ao(n,t,s,cs,r),ya(n,s);else if(rh(i,n,t,r,s))s.stopPropagation();else if(ya(n,s),t&4&&-1<th.indexOf(n)){for(;i!==null;){var c=Nr(i);if(c!==null&&ma(c),c=Vi(n,t,r,s),c===null&&ao(n,t,s,cs,r),c===i)break;i=c}i!==null&&s.stopPropagation()}else ao(n,t,s,null,r)}}var cs=null;function Vi(n,t,r,s){if(cs=null,n=Oi(s),n=ht(n),n!==null)if(t=ut(n),t===null)n=null;else if(r=t.tag,r===13){if(n=ia(t),n!==null)return n;n=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null);return cs=n,null}function ka(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gu()){case Li:return 1;case ua:return 4;case ns:case Xu:return 16;case ha:return 536870912;default:return 16}default:return 16}}var qn=null,Ji=null,ds=null;function ba(){if(ds)return ds;var n,t=Ji,r=t.length,s,i="value"in qn?qn.value:qn.textContent,c=i.length;for(n=0;n<r&&t[n]===i[n];n++);var h=r-n;for(s=1;s<=h&&t[r-s]===i[c-s];s++);return ds=i.slice(n,1<s?1-s:void 0)}function us(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function hs(){return!0}function Ca(){return!1}function tn(n){function t(r,s,i,c,h){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var f in n)n.hasOwnProperty(f)&&(r=n[f],this[f]=r?r(c):c[f]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?hs:Ca,this.isPropagationStopped=Ca,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),t}var It={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=tn(It),yr=N({},It,{view:0,detail:0}),lh=tn(yr),Xi,qi,vr,ps=N({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qi,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vr&&(vr&&n.type==="mousemove"?(Xi=n.screenX-vr.screenX,qi=n.screenY-vr.screenY):qi=Xi=0,vr=n),Xi)},movementY:function(n){return"movementY"in n?n.movementY:qi}}),Sa=tn(ps),ah=N({},ps,{dataTransfer:0}),ch=tn(ah),dh=N({},yr,{relatedTarget:0}),Ki=tn(dh),uh=N({},It,{animationName:0,elapsedTime:0,pseudoElement:0}),hh=tn(uh),ph=N({},It,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fh=tn(ph),mh=N({},It,{data:0}),Ra=tn(mh),xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yh(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=gh[n])?!!t[n]:!1}function Qi(){return yh}var vh=N({},yr,{key:function(n){if(n.key){var t=xh[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=us(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jh[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qi,charCode:function(n){return n.type==="keypress"?us(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?us(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wh=tn(vh),kh=N({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pa=tn(kh),bh=N({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qi}),Ch=tn(bh),Sh=N({},It,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rh=tn(Sh),Ph=N({},ps,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Eh=tn(Ph),Th=[9,13,27,32],Yi=M&&"CompositionEvent"in window,wr=null;M&&"documentMode"in document&&(wr=document.documentMode);var Nh=M&&"TextEvent"in window&&!wr,Ea=M&&(!Yi||wr&&8<wr&&11>=wr),Ta=" ",Na=!1;function Ia(n,t){switch(n){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Aa(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var At=!1;function Ih(n,t){switch(n){case"compositionend":return Aa(t);case"keypress":return t.which!==32?null:(Na=!0,Ta);case"textInput":return n=t.data,n===Ta&&Na?null:n;default:return null}}function Ah(n,t){if(At)return n==="compositionend"||!Yi&&Ia(n,t)?(n=ba(),ds=Ji=qn=null,At=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ea&&t.locale!=="ko"?null:t.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oa(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!Oh[n.type]:t==="textarea"}function Da(n,t,r,s){ea(s),t=gs(t,"onChange"),0<t.length&&(r=new Gi("onChange","change",null,r,s),n.push({event:r,listeners:t}))}var kr=null,br=null;function Dh(n){Ya(n,0)}function fs(n){var t=Ft(n);if(gn(t))return n}function Mh(n,t){if(n==="change")return t}var Ma=!1;if(M){var Zi;if(M){var eo="oninput"in document;if(!eo){var _a=document.createElement("div");_a.setAttribute("oninput","return;"),eo=typeof _a.oninput=="function"}Zi=eo}else Zi=!1;Ma=Zi&&(!document.documentMode||9<document.documentMode)}function Fa(){kr&&(kr.detachEvent("onpropertychange",La),br=kr=null)}function La(n){if(n.propertyName==="value"&&fs(br)){var t=[];Da(t,br,n,Oi(n)),sa(Dh,t)}}function _h(n,t,r){n==="focusin"?(Fa(),kr=t,br=r,kr.attachEvent("onpropertychange",La)):n==="focusout"&&Fa()}function Fh(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fs(br)}function Lh(n,t){if(n==="click")return fs(t)}function $h(n,t){if(n==="input"||n==="change")return fs(t)}function zh(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var vn=typeof Object.is=="function"?Object.is:zh;function Cr(n,t){if(vn(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var r=Object.keys(n),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!E.call(t,i)||!vn(n[i],t[i]))return!1}return!0}function $a(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function za(n,t){var r=$a(n);n=0;for(var s;r;){if(r.nodeType===3){if(s=n+r.textContent.length,n<=t&&s>=t)return{node:r,offset:t-n};n=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$a(r)}}function Ua(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?Ua(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function Ba(){for(var n=window,t=Qr();t instanceof n.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)n=t.contentWindow;else break;t=Qr(n.document)}return t}function no(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}function Uh(n){var t=Ba(),r=n.focusedElem,s=n.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ua(r.ownerDocument.documentElement,r)){if(s!==null&&no(r)){if(t=s.start,n=s.end,n===void 0&&(n=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(n,r.value.length);else if(n=(t=r.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var i=r.textContent.length,c=Math.min(s.start,i);s=s.end===void 0?c:Math.min(s.end,i),!n.extend&&c>s&&(i=s,s=c,c=i),i=za(r,c);var h=za(r,s);i&&h&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==h.node||n.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),n.removeAllRanges(),c>s?(n.addRange(t),n.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),n.addRange(t)))}}for(t=[],n=r;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)n=t[r],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Bh=M&&"documentMode"in document&&11>=document.documentMode,Ot=null,to=null,Sr=null,ro=!1;function Ha(n,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ro||Ot==null||Ot!==Qr(s)||(s=Ot,"selectionStart"in s&&no(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Sr&&Cr(Sr,s)||(Sr=s,s=gs(to,"onSelect"),0<s.length&&(t=new Gi("onSelect","select",null,t,r),n.push({event:t,listeners:s}),t.target=Ot)))}function ms(n,t){var r={};return r[n.toLowerCase()]=t.toLowerCase(),r["Webkit"+n]="webkit"+t,r["Moz"+n]="moz"+t,r}var Dt={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionend:ms("Transition","TransitionEnd")},so={},Wa={};M&&(Wa=document.createElement("div").style,"AnimationEvent"in window||(delete Dt.animationend.animation,delete Dt.animationiteration.animation,delete Dt.animationstart.animation),"TransitionEvent"in window||delete Dt.transitionend.transition);function xs(n){if(so[n])return so[n];if(!Dt[n])return n;var t=Dt[n],r;for(r in t)if(t.hasOwnProperty(r)&&r in Wa)return so[n]=t[r];return n}var Va=xs("animationend"),Ja=xs("animationiteration"),Ga=xs("animationstart"),Xa=xs("transitionend"),qa=new Map,Ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(n,t){qa.set(n,t),w(t,[n])}for(var io=0;io<Ka.length;io++){var oo=Ka[io],Hh=oo.toLowerCase(),Wh=oo[0].toUpperCase()+oo.slice(1);Kn(Hh,"on"+Wh)}Kn(Va,"onAnimationEnd"),Kn(Ja,"onAnimationIteration"),Kn(Ga,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(Xa,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function Qa(n,t,r){var s=n.type||"unknown-event";n.currentTarget=r,Hu(s,t,void 0,n),n.currentTarget=null}function Ya(n,t){t=(t&4)!==0;for(var r=0;r<n.length;r++){var s=n[r],i=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var h=s.length-1;0<=h;h--){var f=s[h],m=f.instance,v=f.currentTarget;if(f=f.listener,m!==c&&i.isPropagationStopped())break e;Qa(i,f,v),c=m}else for(h=0;h<s.length;h++){if(f=s[h],m=f.instance,v=f.currentTarget,f=f.listener,m!==c&&i.isPropagationStopped())break e;Qa(i,f,v),c=m}}}if(es)throw n=Fi,es=!1,Fi=null,n}function ge(n,t){var r=t[mo];r===void 0&&(r=t[mo]=new Set);var s=n+"__bubble";r.has(s)||(Za(t,n,2,!1),r.add(s))}function lo(n,t,r){var s=0;t&&(s|=4),Za(r,n,s,t)}var js="_reactListening"+Math.random().toString(36).slice(2);function Pr(n){if(!n[js]){n[js]=!0,d.forEach(function(r){r!=="selectionchange"&&(Vh.has(r)||lo(r,!1,n),lo(r,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[js]||(t[js]=!0,lo("selectionchange",!1,t))}}function Za(n,t,r,s){switch(ka(t)){case 1:var i=ih;break;case 4:i=oh;break;default:i=Wi}r=i.bind(null,t,r,n),i=void 0,!_i||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?n.addEventListener(t,r,{capture:!0,passive:i}):n.addEventListener(t,r,!0):i!==void 0?n.addEventListener(t,r,{passive:i}):n.addEventListener(t,r,!1)}function ao(n,t,r,s,i){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var h=s.tag;if(h===3||h===4){var f=s.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(h===4)for(h=s.return;h!==null;){var m=h.tag;if((m===3||m===4)&&(m=h.stateNode.containerInfo,m===i||m.nodeType===8&&m.parentNode===i))return;h=h.return}for(;f!==null;){if(h=ht(f),h===null)return;if(m=h.tag,m===5||m===6){s=c=h;continue e}f=f.parentNode}}s=s.return}sa(function(){var v=c,C=Oi(r),S=[];e:{var b=qa.get(n);if(b!==void 0){var I=Gi,D=n;switch(n){case"keypress":if(us(r)===0)break e;case"keydown":case"keyup":I=wh;break;case"focusin":D="focus",I=Ki;break;case"focusout":D="blur",I=Ki;break;case"beforeblur":case"afterblur":I=Ki;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Ch;break;case Va:case Ja:case Ga:I=hh;break;case Xa:I=Rh;break;case"scroll":I=lh;break;case"wheel":I=Eh;break;case"copy":case"cut":case"paste":I=fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Pa}var _=(t&4)!==0,Re=!_&&n==="scroll",g=_?b!==null?b+"Capture":null:b;_=[];for(var x=v,y;x!==null;){y=x;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,g!==null&&(P=cr(x,g),P!=null&&_.push(Er(x,P,y)))),Re)break;x=x.return}0<_.length&&(b=new I(b,D,null,r,C),S.push({event:b,listeners:_}))}}if((t&7)===0){e:{if(b=n==="mouseover"||n==="pointerover",I=n==="mouseout"||n==="pointerout",b&&r!==Ai&&(D=r.relatedTarget||r.fromElement)&&(ht(D)||D[_n]))break e;if((I||b)&&(b=C.window===C?C:(b=C.ownerDocument)?b.defaultView||b.parentWindow:window,I?(D=r.relatedTarget||r.toElement,I=v,D=D?ht(D):null,D!==null&&(Re=ut(D),D!==Re||D.tag!==5&&D.tag!==6)&&(D=null)):(I=null,D=v),I!==D)){if(_=Sa,P="onMouseLeave",g="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(_=Pa,P="onPointerLeave",g="onPointerEnter",x="pointer"),Re=I==null?b:Ft(I),y=D==null?b:Ft(D),b=new _(P,x+"leave",I,r,C),b.target=Re,b.relatedTarget=y,P=null,ht(C)===v&&(_=new _(g,x+"enter",D,r,C),_.target=y,_.relatedTarget=Re,P=_),Re=P,I&&D)n:{for(_=I,g=D,x=0,y=_;y;y=Mt(y))x++;for(y=0,P=g;P;P=Mt(P))y++;for(;0<x-y;)_=Mt(_),x--;for(;0<y-x;)g=Mt(g),y--;for(;x--;){if(_===g||g!==null&&_===g.alternate)break n;_=Mt(_),g=Mt(g)}_=null}else _=null;I!==null&&ec(S,b,I,_,!1),D!==null&&Re!==null&&ec(S,Re,D,_,!0)}}e:{if(b=v?Ft(v):window,I=b.nodeName&&b.nodeName.toLowerCase(),I==="select"||I==="input"&&b.type==="file")var F=Mh;else if(Oa(b))if(Ma)F=$h;else{F=Fh;var U=_h}else(I=b.nodeName)&&I.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(F=Lh);if(F&&(F=F(n,v))){Da(S,F,r,C);break e}U&&U(n,b,v),n==="focusout"&&(U=b._wrapperState)&&U.controlled&&b.type==="number"&&Pi(b,"number",b.value)}switch(U=v?Ft(v):window,n){case"focusin":(Oa(U)||U.contentEditable==="true")&&(Ot=U,to=v,Sr=null);break;case"focusout":Sr=to=Ot=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,Ha(S,r,C);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":Ha(S,r,C)}var B;if(Yi)e:{switch(n){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else At?Ia(n,r)&&(W="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(W="onCompositionStart");W&&(Ea&&r.locale!=="ko"&&(At||W!=="onCompositionStart"?W==="onCompositionEnd"&&At&&(B=ba()):(qn=C,Ji="value"in qn?qn.value:qn.textContent,At=!0)),U=gs(v,W),0<U.length&&(W=new Ra(W,n,null,r,C),S.push({event:W,listeners:U}),B?W.data=B:(B=Aa(r),B!==null&&(W.data=B)))),(B=Nh?Ih(n,r):Ah(n,r))&&(v=gs(v,"onBeforeInput"),0<v.length&&(C=new Ra("onBeforeInput","beforeinput",null,r,C),S.push({event:C,listeners:v}),C.data=B))}Ya(S,t)})}function Er(n,t,r){return{instance:n,listener:t,currentTarget:r}}function gs(n,t){for(var r=t+"Capture",s=[];n!==null;){var i=n,c=i.stateNode;i.tag===5&&c!==null&&(i=c,c=cr(n,r),c!=null&&s.unshift(Er(n,c,i)),c=cr(n,t),c!=null&&s.push(Er(n,c,i))),n=n.return}return s}function Mt(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ec(n,t,r,s,i){for(var c=t._reactName,h=[];r!==null&&r!==s;){var f=r,m=f.alternate,v=f.stateNode;if(m!==null&&m===s)break;f.tag===5&&v!==null&&(f=v,i?(m=cr(r,c),m!=null&&h.unshift(Er(r,m,f))):i||(m=cr(r,c),m!=null&&h.push(Er(r,m,f)))),r=r.return}h.length!==0&&n.push({event:t,listeners:h})}var Jh=/\r\n?/g,Gh=/\u0000|\uFFFD/g;function nc(n){return(typeof n=="string"?n:""+n).replace(Jh,`
`).replace(Gh,"")}function ys(n,t,r){if(t=nc(t),nc(n)!==t&&r)throw Error(u(425))}function vs(){}var co=null,uo=null;function ho(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var po=typeof setTimeout=="function"?setTimeout:void 0,Xh=typeof clearTimeout=="function"?clearTimeout:void 0,tc=typeof Promise=="function"?Promise:void 0,qh=typeof queueMicrotask=="function"?queueMicrotask:typeof tc<"u"?function(n){return tc.resolve(null).then(n).catch(Kh)}:po;function Kh(n){setTimeout(function(){throw n})}function fo(n,t){var r=t,s=0;do{var i=r.nextSibling;if(n.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){n.removeChild(i),gr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);gr(t)}function Qn(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return n}function rc(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return n;t--}else r==="/$"&&t++}n=n.previousSibling}return null}var _t=Math.random().toString(36).slice(2),Tn="__reactFiber$"+_t,Tr="__reactProps$"+_t,_n="__reactContainer$"+_t,mo="__reactEvents$"+_t,Qh="__reactListeners$"+_t,Yh="__reactHandles$"+_t;function ht(n){var t=n[Tn];if(t)return t;for(var r=n.parentNode;r;){if(t=r[_n]||r[Tn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(n=rc(n);n!==null;){if(r=n[Tn])return r;n=rc(n)}return t}n=r,r=n.parentNode}return null}function Nr(n){return n=n[Tn]||n[_n],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ft(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(u(33))}function ws(n){return n[Tr]||null}var xo=[],Lt=-1;function Yn(n){return{current:n}}function ye(n){0>Lt||(n.current=xo[Lt],xo[Lt]=null,Lt--)}function je(n,t){Lt++,xo[Lt]=n.current,n.current=t}var Zn={},ze=Yn(Zn),Ge=Yn(!1),pt=Zn;function $t(n,t){var r=n.type.contextTypes;if(!r)return Zn;var s=n.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},c;for(c in r)i[c]=t[c];return s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=t,n.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(n){return n=n.childContextTypes,n!=null}function ks(){ye(Ge),ye(ze)}function sc(n,t,r){if(ze.current!==Zn)throw Error(u(168));je(ze,t),je(Ge,r)}function ic(n,t,r){var s=n.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(u(108,he(n)||"Unknown",i));return N({},r,s)}function bs(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zn,pt=ze.current,je(ze,n),je(Ge,Ge.current),!0}function oc(n,t,r){var s=n.stateNode;if(!s)throw Error(u(169));r?(n=ic(n,t,pt),s.__reactInternalMemoizedMergedChildContext=n,ye(Ge),ye(ze),je(ze,n)):ye(Ge),je(Ge,r)}var Fn=null,Cs=!1,jo=!1;function lc(n){Fn===null?Fn=[n]:Fn.push(n)}function Zh(n){Cs=!0,lc(n)}function et(){if(!jo&&Fn!==null){jo=!0;var n=0,t=me;try{var r=Fn;for(me=1;n<r.length;n++){var s=r[n];do s=s(!0);while(s!==null)}Fn=null,Cs=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(n+1)),ca(Li,et),i}finally{me=t,jo=!1}}return null}var zt=[],Ut=0,Ss=null,Rs=0,dn=[],un=0,ft=null,Ln=1,$n="";function mt(n,t){zt[Ut++]=Rs,zt[Ut++]=Ss,Ss=n,Rs=t}function ac(n,t,r){dn[un++]=Ln,dn[un++]=$n,dn[un++]=ft,ft=n;var s=Ln;n=$n;var i=32-yn(s)-1;s&=~(1<<i),r+=1;var c=32-yn(t)+i;if(30<c){var h=i-i%5;c=(s&(1<<h)-1).toString(32),s>>=h,i-=h,Ln=1<<32-yn(t)+i|r<<i|s,$n=c+n}else Ln=1<<c|r<<i|s,$n=n}function go(n){n.return!==null&&(mt(n,1),ac(n,1,0))}function yo(n){for(;n===Ss;)Ss=zt[--Ut],zt[Ut]=null,Rs=zt[--Ut],zt[Ut]=null;for(;n===ft;)ft=dn[--un],dn[un]=null,$n=dn[--un],dn[un]=null,Ln=dn[--un],dn[un]=null}var rn=null,sn=null,we=!1,wn=null;function cc(n,t){var r=mn(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=n,t=n.deletions,t===null?(n.deletions=[r],n.flags|=16):t.push(r)}function dc(n,t){switch(n.tag){case 5:var r=n.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(n.stateNode=t,rn=n,sn=Qn(t.firstChild),!0):!1;case 6:return t=n.pendingProps===""||t.nodeType!==3?null:t,t!==null?(n.stateNode=t,rn=n,sn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ft!==null?{id:Ln,overflow:$n}:null,n.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=mn(18,null,null,0),r.stateNode=t,r.return=n,n.child=r,rn=n,sn=null,!0):!1;default:return!1}}function vo(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wo(n){if(we){var t=sn;if(t){var r=t;if(!dc(n,t)){if(vo(n))throw Error(u(418));t=Qn(r.nextSibling);var s=rn;t&&dc(n,t)?cc(s,r):(n.flags=n.flags&-4097|2,we=!1,rn=n)}}else{if(vo(n))throw Error(u(418));n.flags=n.flags&-4097|2,we=!1,rn=n}}}function uc(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Ps(n){if(n!==rn)return!1;if(!we)return uc(n),we=!0,!1;var t;if((t=n.tag!==3)&&!(t=n.tag!==5)&&(t=n.type,t=t!=="head"&&t!=="body"&&!ho(n.type,n.memoizedProps)),t&&(t=sn)){if(vo(n))throw hc(),Error(u(418));for(;t;)cc(n,t),t=Qn(t.nextSibling)}if(uc(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));e:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"){if(t===0){sn=Qn(n.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}n=n.nextSibling}sn=null}}else sn=rn?Qn(n.stateNode.nextSibling):null;return!0}function hc(){for(var n=sn;n;)n=Qn(n.nextSibling)}function Bt(){sn=rn=null,we=!1}function ko(n){wn===null?wn=[n]:wn.push(n)}var ep=ee.ReactCurrentBatchConfig;function Ir(n,t,r){if(n=r.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(u(309));var s=r.stateNode}if(!s)throw Error(u(147,n));var i=s,c=""+n;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(h){var f=i.refs;h===null?delete f[c]:f[c]=h},t._stringRef=c,t)}if(typeof n!="string")throw Error(u(284));if(!r._owner)throw Error(u(290,n))}return n}function Es(n,t){throw n=Object.prototype.toString.call(t),Error(u(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n))}function pc(n){var t=n._init;return t(n._payload)}function fc(n){function t(g,x){if(n){var y=g.deletions;y===null?(g.deletions=[x],g.flags|=16):y.push(x)}}function r(g,x){if(!n)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function s(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=at(g,x),g.index=0,g.sibling=null,g}function c(g,x,y){return g.index=y,n?(y=g.alternate,y!==null?(y=y.index,y<x?(g.flags|=2,x):y):(g.flags|=2,x)):(g.flags|=1048576,x)}function h(g){return n&&g.alternate===null&&(g.flags|=2),g}function f(g,x,y,P){return x===null||x.tag!==6?(x=pl(y,g.mode,P),x.return=g,x):(x=i(x,y),x.return=g,x)}function m(g,x,y,P){var F=y.type;return F===H?C(g,x,y.props.children,P,y.key):x!==null&&(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===$e&&pc(F)===x.type)?(P=i(x,y.props),P.ref=Ir(g,x,y),P.return=g,P):(P=Ys(y.type,y.key,y.props,null,g.mode,P),P.ref=Ir(g,x,y),P.return=g,P)}function v(g,x,y,P){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=fl(y,g.mode,P),x.return=g,x):(x=i(x,y.children||[]),x.return=g,x)}function C(g,x,y,P,F){return x===null||x.tag!==7?(x=bt(y,g.mode,P,F),x.return=g,x):(x=i(x,y),x.return=g,x)}function S(g,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=pl(""+x,g.mode,y),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ue:return y=Ys(x.type,x.key,x.props,null,g.mode,y),y.ref=Ir(g,null,x),y.return=g,y;case q:return x=fl(x,g.mode,y),x.return=g,x;case $e:var P=x._init;return S(g,P(x._payload),y)}if(or(x)||L(x))return x=bt(x,g.mode,y,null),x.return=g,x;Es(g,x)}return null}function b(g,x,y,P){var F=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return F!==null?null:f(g,x,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ue:return y.key===F?m(g,x,y,P):null;case q:return y.key===F?v(g,x,y,P):null;case $e:return F=y._init,b(g,x,F(y._payload),P)}if(or(y)||L(y))return F!==null?null:C(g,x,y,P,null);Es(g,y)}return null}function I(g,x,y,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return g=g.get(y)||null,f(x,g,""+P,F);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ue:return g=g.get(P.key===null?y:P.key)||null,m(x,g,P,F);case q:return g=g.get(P.key===null?y:P.key)||null,v(x,g,P,F);case $e:var U=P._init;return I(g,x,y,U(P._payload),F)}if(or(P)||L(P))return g=g.get(y)||null,C(x,g,P,F,null);Es(x,P)}return null}function D(g,x,y,P){for(var F=null,U=null,B=x,W=x=0,De=null;B!==null&&W<y.length;W++){B.index>W?(De=B,B=null):De=B.sibling;var de=b(g,B,y[W],P);if(de===null){B===null&&(B=De);break}n&&B&&de.alternate===null&&t(g,B),x=c(de,x,W),U===null?F=de:U.sibling=de,U=de,B=De}if(W===y.length)return r(g,B),we&&mt(g,W),F;if(B===null){for(;W<y.length;W++)B=S(g,y[W],P),B!==null&&(x=c(B,x,W),U===null?F=B:U.sibling=B,U=B);return we&&mt(g,W),F}for(B=s(g,B);W<y.length;W++)De=I(B,g,W,y[W],P),De!==null&&(n&&De.alternate!==null&&B.delete(De.key===null?W:De.key),x=c(De,x,W),U===null?F=De:U.sibling=De,U=De);return n&&B.forEach(function(ct){return t(g,ct)}),we&&mt(g,W),F}function _(g,x,y,P){var F=L(y);if(typeof F!="function")throw Error(u(150));if(y=F.call(y),y==null)throw Error(u(151));for(var U=F=null,B=x,W=x=0,De=null,de=y.next();B!==null&&!de.done;W++,de=y.next()){B.index>W?(De=B,B=null):De=B.sibling;var ct=b(g,B,de.value,P);if(ct===null){B===null&&(B=De);break}n&&B&&ct.alternate===null&&t(g,B),x=c(ct,x,W),U===null?F=ct:U.sibling=ct,U=ct,B=De}if(de.done)return r(g,B),we&&mt(g,W),F;if(B===null){for(;!de.done;W++,de=y.next())de=S(g,de.value,P),de!==null&&(x=c(de,x,W),U===null?F=de:U.sibling=de,U=de);return we&&mt(g,W),F}for(B=s(g,B);!de.done;W++,de=y.next())de=I(B,g,W,de.value,P),de!==null&&(n&&de.alternate!==null&&B.delete(de.key===null?W:de.key),x=c(de,x,W),U===null?F=de:U.sibling=de,U=de);return n&&B.forEach(function(Op){return t(g,Op)}),we&&mt(g,W),F}function Re(g,x,y,P){if(typeof y=="object"&&y!==null&&y.type===H&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ue:e:{for(var F=y.key,U=x;U!==null;){if(U.key===F){if(F=y.type,F===H){if(U.tag===7){r(g,U.sibling),x=i(U,y.props.children),x.return=g,g=x;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===$e&&pc(F)===U.type){r(g,U.sibling),x=i(U,y.props),x.ref=Ir(g,U,y),x.return=g,g=x;break e}r(g,U);break}else t(g,U);U=U.sibling}y.type===H?(x=bt(y.props.children,g.mode,P,y.key),x.return=g,g=x):(P=Ys(y.type,y.key,y.props,null,g.mode,P),P.ref=Ir(g,x,y),P.return=g,g=P)}return h(g);case q:e:{for(U=y.key;x!==null;){if(x.key===U)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){r(g,x.sibling),x=i(x,y.children||[]),x.return=g,g=x;break e}else{r(g,x);break}else t(g,x);x=x.sibling}x=fl(y,g.mode,P),x.return=g,g=x}return h(g);case $e:return U=y._init,Re(g,x,U(y._payload),P)}if(or(y))return D(g,x,y,P);if(L(y))return _(g,x,y,P);Es(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(r(g,x.sibling),x=i(x,y),x.return=g,g=x):(r(g,x),x=pl(y,g.mode,P),x.return=g,g=x),h(g)):r(g,x)}return Re}var Ht=fc(!0),mc=fc(!1),Ts=Yn(null),Ns=null,Wt=null,bo=null;function Co(){bo=Wt=Ns=null}function So(n){var t=Ts.current;ye(Ts),n._currentValue=t}function Ro(n,t,r){for(;n!==null;){var s=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),n===r)break;n=n.return}}function Vt(n,t){Ns=n,bo=Wt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&t)!==0&&(qe=!0),n.firstContext=null)}function hn(n){var t=n._currentValue;if(bo!==n)if(n={context:n,memoizedValue:t,next:null},Wt===null){if(Ns===null)throw Error(u(308));Wt=n,Ns.dependencies={lanes:0,firstContext:n}}else Wt=Wt.next=n;return t}var xt=null;function Po(n){xt===null?xt=[n]:xt.push(n)}function xc(n,t,r,s){var i=t.interleaved;return i===null?(r.next=r,Po(t)):(r.next=i.next,i.next=r),t.interleaved=r,zn(n,s)}function zn(n,t){n.lanes|=t;var r=n.alternate;for(r!==null&&(r.lanes|=t),r=n,n=n.return;n!==null;)n.childLanes|=t,r=n.alternate,r!==null&&(r.childLanes|=t),r=n,n=n.return;return r.tag===3?r.stateNode:null}var nt=!1;function Eo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jc(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Un(n,t){return{eventTime:n,lane:t,tag:0,payload:null,callback:null,next:null}}function tt(n,t,r){var s=n.updateQueue;if(s===null)return null;if(s=s.shared,(ae&2)!==0){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,zn(n,r)}return i=s.interleaved,i===null?(t.next=t,Po(s)):(t.next=i.next,i.next=t),s.interleaved=t,zn(n,r)}function Is(n,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=n.pendingLanes,r|=s,t.lanes=r,Ui(n,r)}}function gc(n,t){var r=n.updateQueue,s=n.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?i=c=h:c=c.next=h,r=r.next}while(r!==null);c===null?i=c=t:c=c.next=t}else i=c=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:s.shared,effects:s.effects},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=t:n.next=t,r.lastBaseUpdate=t}function As(n,t,r,s){var i=n.updateQueue;nt=!1;var c=i.firstBaseUpdate,h=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var m=f,v=m.next;m.next=null,h===null?c=v:h.next=v,h=m;var C=n.alternate;C!==null&&(C=C.updateQueue,f=C.lastBaseUpdate,f!==h&&(f===null?C.firstBaseUpdate=v:f.next=v,C.lastBaseUpdate=m))}if(c!==null){var S=i.baseState;h=0,C=v=m=null,f=c;do{var b=f.lane,I=f.eventTime;if((s&b)===b){C!==null&&(C=C.next={eventTime:I,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var D=n,_=f;switch(b=t,I=r,_.tag){case 1:if(D=_.payload,typeof D=="function"){S=D.call(I,S,b);break e}S=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=_.payload,b=typeof D=="function"?D.call(I,S,b):D,b==null)break e;S=N({},S,b);break e;case 2:nt=!0}}f.callback!==null&&f.lane!==0&&(n.flags|=64,b=i.effects,b===null?i.effects=[f]:b.push(f))}else I={eventTime:I,lane:b,tag:f.tag,payload:f.payload,callback:f.callback,next:null},C===null?(v=C=I,m=S):C=C.next=I,h|=b;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;b=f,f=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);if(C===null&&(m=S),i.baseState=m,i.firstBaseUpdate=v,i.lastBaseUpdate=C,t=i.shared.interleaved,t!==null){i=t;do h|=i.lane,i=i.next;while(i!==t)}else c===null&&(i.shared.lanes=0);yt|=h,n.lanes=h,n.memoizedState=S}}function yc(n,t,r){if(n=t.effects,t.effects=null,n!==null)for(t=0;t<n.length;t++){var s=n[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(u(191,i));i.call(s)}}}var Ar={},Nn=Yn(Ar),Or=Yn(Ar),Dr=Yn(Ar);function jt(n){if(n===Ar)throw Error(u(174));return n}function To(n,t){switch(je(Dr,t),je(Or,n),je(Nn,Ar),n=t.nodeType,n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ti(null,"");break;default:n=n===8?t.parentNode:t,t=n.namespaceURI||null,n=n.tagName,t=Ti(t,n)}ye(Nn),je(Nn,t)}function Jt(){ye(Nn),ye(Or),ye(Dr)}function vc(n){jt(Dr.current);var t=jt(Nn.current),r=Ti(t,n.type);t!==r&&(je(Or,n),je(Nn,r))}function No(n){Or.current===n&&(ye(Nn),ye(Or))}var ke=Yn(0);function Os(n){for(var t=n;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=[];function Ao(){for(var n=0;n<Io.length;n++)Io[n]._workInProgressVersionPrimary=null;Io.length=0}var Ds=ee.ReactCurrentDispatcher,Oo=ee.ReactCurrentBatchConfig,gt=0,be=null,Ne=null,Ae=null,Ms=!1,Mr=!1,_r=0,np=0;function Ue(){throw Error(u(321))}function Do(n,t){if(t===null)return!1;for(var r=0;r<t.length&&r<n.length;r++)if(!vn(n[r],t[r]))return!1;return!0}function Mo(n,t,r,s,i,c){if(gt=c,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ds.current=n===null||n.memoizedState===null?ip:op,n=r(s,i),Mr){c=0;do{if(Mr=!1,_r=0,25<=c)throw Error(u(301));c+=1,Ae=Ne=null,t.updateQueue=null,Ds.current=lp,n=r(s,i)}while(Mr)}if(Ds.current=Ls,t=Ne!==null&&Ne.next!==null,gt=0,Ae=Ne=be=null,Ms=!1,t)throw Error(u(300));return n}function _o(){var n=_r!==0;return _r=0,n}function In(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?be.memoizedState=Ae=n:Ae=Ae.next=n,Ae}function pn(){if(Ne===null){var n=be.alternate;n=n!==null?n.memoizedState:null}else n=Ne.next;var t=Ae===null?be.memoizedState:Ae.next;if(t!==null)Ae=t,Ne=n;else{if(n===null)throw Error(u(310));Ne=n,n={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ae===null?be.memoizedState=Ae=n:Ae=Ae.next=n}return Ae}function Fr(n,t){return typeof t=="function"?t(n):t}function Fo(n){var t=pn(),r=t.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=n;var s=Ne,i=s.baseQueue,c=r.pending;if(c!==null){if(i!==null){var h=i.next;i.next=c.next,c.next=h}s.baseQueue=i=c,r.pending=null}if(i!==null){c=i.next,s=s.baseState;var f=h=null,m=null,v=c;do{var C=v.lane;if((gt&C)===C)m!==null&&(m=m.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),s=v.hasEagerState?v.eagerState:n(s,v.action);else{var S={lane:C,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};m===null?(f=m=S,h=s):m=m.next=S,be.lanes|=C,yt|=C}v=v.next}while(v!==null&&v!==c);m===null?h=s:m.next=f,vn(s,t.memoizedState)||(qe=!0),t.memoizedState=s,t.baseState=h,t.baseQueue=m,r.lastRenderedState=s}if(n=r.interleaved,n!==null){i=n;do c=i.lane,be.lanes|=c,yt|=c,i=i.next;while(i!==n)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Lo(n){var t=pn(),r=t.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=n;var s=r.dispatch,i=r.pending,c=t.memoizedState;if(i!==null){r.pending=null;var h=i=i.next;do c=n(c,h.action),h=h.next;while(h!==i);vn(c,t.memoizedState)||(qe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,s]}function wc(){}function kc(n,t){var r=be,s=pn(),i=t(),c=!vn(s.memoizedState,i);if(c&&(s.memoizedState=i,qe=!0),s=s.queue,$o(Sc.bind(null,r,s,n),[n]),s.getSnapshot!==t||c||Ae!==null&&Ae.memoizedState.tag&1){if(r.flags|=2048,Lr(9,Cc.bind(null,r,s,i,t),void 0,null),Oe===null)throw Error(u(349));(gt&30)!==0||bc(r,t,i)}return i}function bc(n,t,r){n.flags|=16384,n={getSnapshot:t,value:r},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[n]):(r=t.stores,r===null?t.stores=[n]:r.push(n))}function Cc(n,t,r,s){t.value=r,t.getSnapshot=s,Rc(t)&&Pc(n)}function Sc(n,t,r){return r(function(){Rc(t)&&Pc(n)})}function Rc(n){var t=n.getSnapshot;n=n.value;try{var r=t();return!vn(n,r)}catch{return!0}}function Pc(n){var t=zn(n,1);t!==null&&Sn(t,n,1,-1)}function Ec(n){var t=In();return typeof n=="function"&&(n=n()),t.memoizedState=t.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:n},t.queue=n,n=n.dispatch=sp.bind(null,be,n),[t.memoizedState,n]}function Lr(n,t,r,s){return n={tag:n,create:t,destroy:r,deps:s,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=n.next=n):(r=t.lastEffect,r===null?t.lastEffect=n.next=n:(s=r.next,r.next=n,n.next=s,t.lastEffect=n)),n}function Tc(){return pn().memoizedState}function _s(n,t,r,s){var i=In();be.flags|=n,i.memoizedState=Lr(1|t,r,void 0,s===void 0?null:s)}function Fs(n,t,r,s){var i=pn();s=s===void 0?null:s;var c=void 0;if(Ne!==null){var h=Ne.memoizedState;if(c=h.destroy,s!==null&&Do(s,h.deps)){i.memoizedState=Lr(t,r,c,s);return}}be.flags|=n,i.memoizedState=Lr(1|t,r,c,s)}function Nc(n,t){return _s(8390656,8,n,t)}function $o(n,t){return Fs(2048,8,n,t)}function Ic(n,t){return Fs(4,2,n,t)}function Ac(n,t){return Fs(4,4,n,t)}function Oc(n,t){if(typeof t=="function")return n=n(),t(n),function(){t(null)};if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function Dc(n,t,r){return r=r!=null?r.concat([n]):null,Fs(4,4,Oc.bind(null,t,n),r)}function zo(){}function Mc(n,t){var r=pn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Do(t,s[1])?s[0]:(r.memoizedState=[n,t],n)}function _c(n,t){var r=pn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Do(t,s[1])?s[0]:(n=n(),r.memoizedState=[n,t],n)}function Fc(n,t,r){return(gt&21)===0?(n.baseState&&(n.baseState=!1,qe=!0),n.memoizedState=r):(vn(r,t)||(r=pa(),be.lanes|=r,yt|=r,n.baseState=!0),t)}function tp(n,t){var r=me;me=r!==0&&4>r?r:4,n(!0);var s=Oo.transition;Oo.transition={};try{n(!1),t()}finally{me=r,Oo.transition=s}}function Lc(){return pn().memoizedState}function rp(n,t,r){var s=ot(n);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},$c(n))zc(t,r);else if(r=xc(n,t,r,s),r!==null){var i=Je();Sn(r,n,s,i),Uc(r,t,s)}}function sp(n,t,r){var s=ot(n),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if($c(n))zc(t,i);else{var c=n.alternate;if(n.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,f=c(h,r);if(i.hasEagerState=!0,i.eagerState=f,vn(f,h)){var m=t.interleaved;m===null?(i.next=i,Po(t)):(i.next=m.next,m.next=i),t.interleaved=i;return}}catch{}finally{}r=xc(n,t,i,s),r!==null&&(i=Je(),Sn(r,n,s,i),Uc(r,t,s))}}function $c(n){var t=n.alternate;return n===be||t!==null&&t===be}function zc(n,t){Mr=Ms=!0;var r=n.pending;r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t}function Uc(n,t,r){if((r&4194240)!==0){var s=t.lanes;s&=n.pendingLanes,r|=s,t.lanes=r,Ui(n,r)}}var Ls={readContext:hn,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},ip={readContext:hn,useCallback:function(n,t){return In().memoizedState=[n,t===void 0?null:t],n},useContext:hn,useEffect:Nc,useImperativeHandle:function(n,t,r){return r=r!=null?r.concat([n]):null,_s(4194308,4,Oc.bind(null,t,n),r)},useLayoutEffect:function(n,t){return _s(4194308,4,n,t)},useInsertionEffect:function(n,t){return _s(4,2,n,t)},useMemo:function(n,t){var r=In();return t=t===void 0?null:t,n=n(),r.memoizedState=[n,t],n},useReducer:function(n,t,r){var s=In();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:t},s.queue=n,n=n.dispatch=rp.bind(null,be,n),[s.memoizedState,n]},useRef:function(n){var t=In();return n={current:n},t.memoizedState=n},useState:Ec,useDebugValue:zo,useDeferredValue:function(n){return In().memoizedState=n},useTransition:function(){var n=Ec(!1),t=n[0];return n=tp.bind(null,n[1]),In().memoizedState=n,[t,n]},useMutableSource:function(){},useSyncExternalStore:function(n,t,r){var s=be,i=In();if(we){if(r===void 0)throw Error(u(407));r=r()}else{if(r=t(),Oe===null)throw Error(u(349));(gt&30)!==0||bc(s,t,r)}i.memoizedState=r;var c={value:r,getSnapshot:t};return i.queue=c,Nc(Sc.bind(null,s,c,n),[n]),s.flags|=2048,Lr(9,Cc.bind(null,s,c,r,t),void 0,null),r},useId:function(){var n=In(),t=Oe.identifierPrefix;if(we){var r=$n,s=Ln;r=(s&~(1<<32-yn(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=_r++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=np++,t=":"+t+"r"+r.toString(32)+":";return n.memoizedState=t},unstable_isNewReconciler:!1},op={readContext:hn,useCallback:Mc,useContext:hn,useEffect:$o,useImperativeHandle:Dc,useInsertionEffect:Ic,useLayoutEffect:Ac,useMemo:_c,useReducer:Fo,useRef:Tc,useState:function(){return Fo(Fr)},useDebugValue:zo,useDeferredValue:function(n){var t=pn();return Fc(t,Ne.memoizedState,n)},useTransition:function(){var n=Fo(Fr)[0],t=pn().memoizedState;return[n,t]},useMutableSource:wc,useSyncExternalStore:kc,useId:Lc,unstable_isNewReconciler:!1},lp={readContext:hn,useCallback:Mc,useContext:hn,useEffect:$o,useImperativeHandle:Dc,useInsertionEffect:Ic,useLayoutEffect:Ac,useMemo:_c,useReducer:Lo,useRef:Tc,useState:function(){return Lo(Fr)},useDebugValue:zo,useDeferredValue:function(n){var t=pn();return Ne===null?t.memoizedState=n:Fc(t,Ne.memoizedState,n)},useTransition:function(){var n=Lo(Fr)[0],t=pn().memoizedState;return[n,t]},useMutableSource:wc,useSyncExternalStore:kc,useId:Lc,unstable_isNewReconciler:!1};function kn(n,t){if(n&&n.defaultProps){t=N({},t),n=n.defaultProps;for(var r in n)t[r]===void 0&&(t[r]=n[r]);return t}return t}function Uo(n,t,r,s){t=n.memoizedState,r=r(s,t),r=r==null?t:N({},t,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var $s={isMounted:function(n){return(n=n._reactInternals)?ut(n)===n:!1},enqueueSetState:function(n,t,r){n=n._reactInternals;var s=Je(),i=ot(n),c=Un(s,i);c.payload=t,r!=null&&(c.callback=r),t=tt(n,c,i),t!==null&&(Sn(t,n,i,s),Is(t,n,i))},enqueueReplaceState:function(n,t,r){n=n._reactInternals;var s=Je(),i=ot(n),c=Un(s,i);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=tt(n,c,i),t!==null&&(Sn(t,n,i,s),Is(t,n,i))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var r=Je(),s=ot(n),i=Un(r,s);i.tag=2,t!=null&&(i.callback=t),t=tt(n,i,s),t!==null&&(Sn(t,n,s,r),Is(t,n,s))}};function Bc(n,t,r,s,i,c,h){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(s,c,h):t.prototype&&t.prototype.isPureReactComponent?!Cr(r,s)||!Cr(i,c):!0}function Hc(n,t,r){var s=!1,i=Zn,c=t.contextType;return typeof c=="object"&&c!==null?c=hn(c):(i=Xe(t)?pt:ze.current,s=t.contextTypes,c=(s=s!=null)?$t(n,i):Zn),t=new t(r,c),n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$s,n.stateNode=t,t._reactInternals=n,s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=c),t}function Wc(n,t,r,s){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==n&&$s.enqueueReplaceState(t,t.state,null)}function Bo(n,t,r,s){var i=n.stateNode;i.props=r,i.state=n.memoizedState,i.refs={},Eo(n);var c=t.contextType;typeof c=="object"&&c!==null?i.context=hn(c):(c=Xe(t)?pt:ze.current,i.context=$t(n,c)),i.state=n.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Uo(n,t,c,r),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$s.enqueueReplaceState(i,i.state,null),As(n,r,i,s),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function Gt(n,t){try{var r="",s=t;do r+=re(s),s=s.return;while(s);var i=r}catch(c){i=`
Error generating stack: `+c.message+`
`+c.stack}return{value:n,source:t,stack:i,digest:null}}function Ho(n,t,r){return{value:n,source:null,stack:r??null,digest:t??null}}function Wo(n,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var ap=typeof WeakMap=="function"?WeakMap:Map;function Vc(n,t,r){r=Un(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Js||(Js=!0,il=s),Wo(n,t)},r}function Jc(n,t,r){r=Un(-1,r),r.tag=3;var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){Wo(n,t)}}var c=n.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){Wo(n,t),typeof s!="function"&&(st===null?st=new Set([this]):st.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function Gc(n,t,r){var s=n.pingCache;if(s===null){s=n.pingCache=new ap;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),n=kp.bind(null,n,t,r),t.then(n,n))}function Xc(n){do{var t;if((t=n.tag===13)&&(t=n.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return n;n=n.return}while(n!==null);return null}function qc(n,t,r,s,i){return(n.mode&1)===0?(n===t?n.flags|=65536:(n.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Un(-1,1),t.tag=2,tt(r,t,1))),r.lanes|=1),n):(n.flags|=65536,n.lanes=i,n)}var cp=ee.ReactCurrentOwner,qe=!1;function Ve(n,t,r,s){t.child=n===null?mc(t,null,r,s):Ht(t,n.child,r,s)}function Kc(n,t,r,s,i){r=r.render;var c=t.ref;return Vt(t,i),s=Mo(n,t,r,s,c,i),r=_o(),n!==null&&!qe?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~i,Bn(n,t,i)):(we&&r&&go(t),t.flags|=1,Ve(n,t,s,i),t.child)}function Qc(n,t,r,s,i){if(n===null){var c=r.type;return typeof c=="function"&&!hl(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,Yc(n,t,c,s,i)):(n=Ys(r.type,null,s,t,t.mode,i),n.ref=t.ref,n.return=t,t.child=n)}if(c=n.child,(n.lanes&i)===0){var h=c.memoizedProps;if(r=r.compare,r=r!==null?r:Cr,r(h,s)&&n.ref===t.ref)return Bn(n,t,i)}return t.flags|=1,n=at(c,s),n.ref=t.ref,n.return=t,t.child=n}function Yc(n,t,r,s,i){if(n!==null){var c=n.memoizedProps;if(Cr(c,s)&&n.ref===t.ref)if(qe=!1,t.pendingProps=s=c,(n.lanes&i)!==0)(n.flags&131072)!==0&&(qe=!0);else return t.lanes=n.lanes,Bn(n,t,i)}return Vo(n,t,r,s,i)}function Zc(n,t,r){var s=t.pendingProps,i=s.children,c=n!==null?n.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(qt,on),on|=r;else{if((r&1073741824)===0)return n=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:n,cachePool:null,transitions:null},t.updateQueue=null,je(qt,on),on|=n,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=c!==null?c.baseLanes:r,je(qt,on),on|=s}else c!==null?(s=c.baseLanes|r,t.memoizedState=null):s=r,je(qt,on),on|=s;return Ve(n,t,i,r),t.child}function ed(n,t){var r=t.ref;(n===null&&r!==null||n!==null&&n.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Vo(n,t,r,s,i){var c=Xe(r)?pt:ze.current;return c=$t(t,c),Vt(t,i),r=Mo(n,t,r,s,c,i),s=_o(),n!==null&&!qe?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~i,Bn(n,t,i)):(we&&s&&go(t),t.flags|=1,Ve(n,t,r,i),t.child)}function nd(n,t,r,s,i){if(Xe(r)){var c=!0;bs(t)}else c=!1;if(Vt(t,i),t.stateNode===null)Us(n,t),Hc(t,r,s),Bo(t,r,s,i),s=!0;else if(n===null){var h=t.stateNode,f=t.memoizedProps;h.props=f;var m=h.context,v=r.contextType;typeof v=="object"&&v!==null?v=hn(v):(v=Xe(r)?pt:ze.current,v=$t(t,v));var C=r.getDerivedStateFromProps,S=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function";S||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(f!==s||m!==v)&&Wc(t,h,s,v),nt=!1;var b=t.memoizedState;h.state=b,As(t,s,h,i),m=t.memoizedState,f!==s||b!==m||Ge.current||nt?(typeof C=="function"&&(Uo(t,r,C,s),m=t.memoizedState),(f=nt||Bc(t,r,f,s,b,m,v))?(S||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=m),h.props=s,h.state=m,h.context=v,s=f):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{h=t.stateNode,jc(n,t),f=t.memoizedProps,v=t.type===t.elementType?f:kn(t.type,f),h.props=v,S=t.pendingProps,b=h.context,m=r.contextType,typeof m=="object"&&m!==null?m=hn(m):(m=Xe(r)?pt:ze.current,m=$t(t,m));var I=r.getDerivedStateFromProps;(C=typeof I=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(f!==S||b!==m)&&Wc(t,h,s,m),nt=!1,b=t.memoizedState,h.state=b,As(t,s,h,i);var D=t.memoizedState;f!==S||b!==D||Ge.current||nt?(typeof I=="function"&&(Uo(t,r,I,s),D=t.memoizedState),(v=nt||Bc(t,r,v,s,b,D,m)||!1)?(C||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,D,m),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,D,m)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||f===n.memoizedProps&&b===n.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||f===n.memoizedProps&&b===n.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=D),h.props=s,h.state=D,h.context=m,s=v):(typeof h.componentDidUpdate!="function"||f===n.memoizedProps&&b===n.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||f===n.memoizedProps&&b===n.memoizedState||(t.flags|=1024),s=!1)}return Jo(n,t,r,s,c,i)}function Jo(n,t,r,s,i,c){ed(n,t);var h=(t.flags&128)!==0;if(!s&&!h)return i&&oc(t,r,!1),Bn(n,t,c);s=t.stateNode,cp.current=t;var f=h&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,n!==null&&h?(t.child=Ht(t,n.child,null,c),t.child=Ht(t,null,f,c)):Ve(n,t,f,c),t.memoizedState=s.state,i&&oc(t,r,!0),t.child}function td(n){var t=n.stateNode;t.pendingContext?sc(n,t.pendingContext,t.pendingContext!==t.context):t.context&&sc(n,t.context,!1),To(n,t.containerInfo)}function rd(n,t,r,s,i){return Bt(),ko(i),t.flags|=256,Ve(n,t,r,s),t.child}var Go={dehydrated:null,treeContext:null,retryLane:0};function Xo(n){return{baseLanes:n,cachePool:null,transitions:null}}function sd(n,t,r){var s=t.pendingProps,i=ke.current,c=!1,h=(t.flags&128)!==0,f;if((f=h)||(f=n!==null&&n.memoizedState===null?!1:(i&2)!==0),f?(c=!0,t.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),je(ke,i&1),n===null)return wo(t),n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((t.mode&1)===0?t.lanes=1:n.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=s.children,n=s.fallback,c?(s=t.mode,c=t.child,h={mode:"hidden",children:h},(s&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=h):c=Zs(h,s,0,null),n=bt(n,s,r,null),c.return=t,n.return=t,c.sibling=n,t.child=c,t.child.memoizedState=Xo(r),t.memoizedState=Go,n):qo(t,h));if(i=n.memoizedState,i!==null&&(f=i.dehydrated,f!==null))return dp(n,t,h,s,f,i,r);if(c){c=s.fallback,h=t.mode,i=n.child,f=i.sibling;var m={mode:"hidden",children:s.children};return(h&1)===0&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=m,t.deletions=null):(s=at(i,m),s.subtreeFlags=i.subtreeFlags&14680064),f!==null?c=at(f,c):(c=bt(c,h,r,null),c.flags|=2),c.return=t,s.return=t,s.sibling=c,t.child=s,s=c,c=t.child,h=n.child.memoizedState,h=h===null?Xo(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},c.memoizedState=h,c.childLanes=n.childLanes&~r,t.memoizedState=Go,s}return c=n.child,n=c.sibling,s=at(c,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=r),s.return=t,s.sibling=null,n!==null&&(r=t.deletions,r===null?(t.deletions=[n],t.flags|=16):r.push(n)),t.child=s,t.memoizedState=null,s}function qo(n,t){return t=Zs({mode:"visible",children:t},n.mode,0,null),t.return=n,n.child=t}function zs(n,t,r,s){return s!==null&&ko(s),Ht(t,n.child,null,r),n=qo(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function dp(n,t,r,s,i,c,h){if(r)return t.flags&256?(t.flags&=-257,s=Ho(Error(u(422))),zs(n,t,h,s)):t.memoizedState!==null?(t.child=n.child,t.flags|=128,null):(c=s.fallback,i=t.mode,s=Zs({mode:"visible",children:s.children},i,0,null),c=bt(c,i,h,null),c.flags|=2,s.return=t,c.return=t,s.sibling=c,t.child=s,(t.mode&1)!==0&&Ht(t,n.child,null,h),t.child.memoizedState=Xo(h),t.memoizedState=Go,c);if((t.mode&1)===0)return zs(n,t,h,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var f=s.dgst;return s=f,c=Error(u(419)),s=Ho(c,s,void 0),zs(n,t,h,s)}if(f=(h&n.childLanes)!==0,qe||f){if(s=Oe,s!==null){switch(h&-h){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(s.suspendedLanes|h))!==0?0:i,i!==0&&i!==c.retryLane&&(c.retryLane=i,zn(n,i),Sn(s,n,i,-1))}return ul(),s=Ho(Error(u(421))),zs(n,t,h,s)}return i.data==="$?"?(t.flags|=128,t.child=n.child,t=bp.bind(null,n),i._reactRetry=t,null):(n=c.treeContext,sn=Qn(i.nextSibling),rn=t,we=!0,wn=null,n!==null&&(dn[un++]=Ln,dn[un++]=$n,dn[un++]=ft,Ln=n.id,$n=n.overflow,ft=t),t=qo(t,s.children),t.flags|=4096,t)}function id(n,t,r){n.lanes|=t;var s=n.alternate;s!==null&&(s.lanes|=t),Ro(n.return,t,r)}function Ko(n,t,r,s,i){var c=n.memoizedState;c===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=r,c.tailMode=i)}function od(n,t,r){var s=t.pendingProps,i=s.revealOrder,c=s.tail;if(Ve(n,t,s.children,r),s=ke.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&id(n,r,t);else if(n.tag===19)id(n,r,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}s&=1}if(je(ke,s),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)n=r.alternate,n!==null&&Os(n)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ko(t,!1,i,r,c);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(n=i.alternate,n!==null&&Os(n)===null){t.child=i;break}n=i.sibling,i.sibling=r,r=i,i=n}Ko(t,!0,r,null,c);break;case"together":Ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(n,t){(t.mode&1)===0&&n!==null&&(n.alternate=null,t.alternate=null,t.flags|=2)}function Bn(n,t,r){if(n!==null&&(t.dependencies=n.dependencies),yt|=t.lanes,(r&t.childLanes)===0)return null;if(n!==null&&t.child!==n.child)throw Error(u(153));if(t.child!==null){for(n=t.child,r=at(n,n.pendingProps),t.child=r,r.return=t;n.sibling!==null;)n=n.sibling,r=r.sibling=at(n,n.pendingProps),r.return=t;r.sibling=null}return t.child}function up(n,t,r){switch(t.tag){case 3:td(t),Bt();break;case 5:vc(t);break;case 1:Xe(t.type)&&bs(t);break;case 4:To(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;je(Ts,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(je(ke,ke.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?sd(n,t,r):(je(ke,ke.current&1),n=Bn(n,t,r),n!==null?n.sibling:null);je(ke,ke.current&1);break;case 19:if(s=(r&t.childLanes)!==0,(n.flags&128)!==0){if(s)return od(n,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(ke,ke.current),s)break;return null;case 22:case 23:return t.lanes=0,Zc(n,t,r)}return Bn(n,t,r)}var ld,Qo,ad,cd;ld=function(n,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Qo=function(){},ad=function(n,t,r,s){var i=n.memoizedProps;if(i!==s){n=t.stateNode,jt(Nn.current);var c=null;switch(r){case"input":i=Si(n,i),s=Si(n,s),c=[];break;case"select":i=N({},i,{value:void 0}),s=N({},s,{value:void 0}),c=[];break;case"textarea":i=Ei(n,i),s=Ei(n,s),c=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(n.onclick=vs)}Ni(r,s);var h;r=null;for(v in i)if(!s.hasOwnProperty(v)&&i.hasOwnProperty(v)&&i[v]!=null)if(v==="style"){var f=i[v];for(h in f)f.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(p.hasOwnProperty(v)?c||(c=[]):(c=c||[]).push(v,null));for(v in s){var m=s[v];if(f=i!=null?i[v]:void 0,s.hasOwnProperty(v)&&m!==f&&(m!=null||f!=null))if(v==="style")if(f){for(h in f)!f.hasOwnProperty(h)||m&&m.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in m)m.hasOwnProperty(h)&&f[h]!==m[h]&&(r||(r={}),r[h]=m[h])}else r||(c||(c=[]),c.push(v,r)),r=m;else v==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(c=c||[]).push(v,m)):v==="children"?typeof m!="string"&&typeof m!="number"||(c=c||[]).push(v,""+m):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(p.hasOwnProperty(v)?(m!=null&&v==="onScroll"&&ge("scroll",n),c||f===m||(c=[])):(c=c||[]).push(v,m))}r&&(c=c||[]).push("style",r);var v=c;(t.updateQueue=v)&&(t.flags|=4)}},cd=function(n,t,r,s){r!==s&&(t.flags|=4)};function $r(n,t){if(!we)switch(n.tailMode){case"hidden":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:s.sibling=null}}function Be(n){var t=n.alternate!==null&&n.alternate.child===n.child,r=0,s=0;if(t)for(var i=n.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=s,n.childLanes=r,t}function hp(n,t,r){var s=t.pendingProps;switch(yo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Xe(t.type)&&ks(),Be(t),null;case 3:return s=t.stateNode,Jt(),ye(Ge),ye(ze),Ao(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Ps(t)?t.flags|=4:n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wn!==null&&(al(wn),wn=null))),Qo(n,t),Be(t),null;case 5:No(t);var i=jt(Dr.current);if(r=t.type,n!==null&&t.stateNode!=null)ad(n,t,r,s,i),n.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(u(166));return Be(t),null}if(n=jt(Nn.current),Ps(t)){s=t.stateNode,r=t.type;var c=t.memoizedProps;switch(s[Tn]=t,s[Tr]=c,n=(t.mode&1)!==0,r){case"dialog":ge("cancel",s),ge("close",s);break;case"iframe":case"object":case"embed":ge("load",s);break;case"video":case"audio":for(i=0;i<Rr.length;i++)ge(Rr[i],s);break;case"source":ge("error",s);break;case"img":case"image":case"link":ge("error",s),ge("load",s);break;case"details":ge("toggle",s);break;case"input":Hl(s,c),ge("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!c.multiple},ge("invalid",s);break;case"textarea":Jl(s,c),ge("invalid",s)}Ni(r,c),i=null;for(var h in c)if(c.hasOwnProperty(h)){var f=c[h];h==="children"?typeof f=="string"?s.textContent!==f&&(c.suppressHydrationWarning!==!0&&ys(s.textContent,f,n),i=["children",f]):typeof f=="number"&&s.textContent!==""+f&&(c.suppressHydrationWarning!==!0&&ys(s.textContent,f,n),i=["children",""+f]):p.hasOwnProperty(h)&&f!=null&&h==="onScroll"&&ge("scroll",s)}switch(r){case"input":Mn(s),Vl(s,c,!0);break;case"textarea":Mn(s),Xl(s);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(s.onclick=vs)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{h=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ql(r)),n==="http://www.w3.org/1999/xhtml"?r==="script"?(n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof s.is=="string"?n=h.createElement(r,{is:s.is}):(n=h.createElement(r),r==="select"&&(h=n,s.multiple?h.multiple=!0:s.size&&(h.size=s.size))):n=h.createElementNS(n,r),n[Tn]=t,n[Tr]=s,ld(n,t,!1,!1),t.stateNode=n;e:{switch(h=Ii(r,s),r){case"dialog":ge("cancel",n),ge("close",n),i=s;break;case"iframe":case"object":case"embed":ge("load",n),i=s;break;case"video":case"audio":for(i=0;i<Rr.length;i++)ge(Rr[i],n);i=s;break;case"source":ge("error",n),i=s;break;case"img":case"image":case"link":ge("error",n),ge("load",n),i=s;break;case"details":ge("toggle",n),i=s;break;case"input":Hl(n,s),i=Si(n,s),ge("invalid",n);break;case"option":i=s;break;case"select":n._wrapperState={wasMultiple:!!s.multiple},i=N({},s,{value:void 0}),ge("invalid",n);break;case"textarea":Jl(n,s),i=Ei(n,s),ge("invalid",n);break;default:i=s}Ni(r,i),f=i;for(c in f)if(f.hasOwnProperty(c)){var m=f[c];c==="style"?Yl(n,m):c==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Kl(n,m)):c==="children"?typeof m=="string"?(r!=="textarea"||m!=="")&&lr(n,m):typeof m=="number"&&lr(n,""+m):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(p.hasOwnProperty(c)?m!=null&&c==="onScroll"&&ge("scroll",n):m!=null&&ie(n,c,m,h))}switch(r){case"input":Mn(n),Vl(n,s,!1);break;case"textarea":Mn(n),Xl(n);break;case"option":s.value!=null&&n.setAttribute("value",""+oe(s.value));break;case"select":n.multiple=!!s.multiple,c=s.value,c!=null?Pt(n,!!s.multiple,c,!1):s.defaultValue!=null&&Pt(n,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=vs)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(n&&t.stateNode!=null)cd(n,t,n.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(u(166));if(r=jt(Dr.current),jt(Nn.current),Ps(t)){if(s=t.stateNode,r=t.memoizedProps,s[Tn]=t,(c=s.nodeValue!==r)&&(n=rn,n!==null))switch(n.tag){case 3:ys(s.nodeValue,r,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ys(s.nodeValue,r,(n.mode&1)!==0)}c&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Tn]=t,t.stateNode=s}return Be(t),null;case 13:if(ye(ke),s=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(we&&sn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)hc(),Bt(),t.flags|=98560,c=!1;else if(c=Ps(t),s!==null&&s.dehydrated!==null){if(n===null){if(!c)throw Error(u(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(u(317));c[Tn]=t}else Bt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),c=!1}else wn!==null&&(al(wn),wn=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(s=s!==null,s!==(n!==null&&n.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(n===null||(ke.current&1)!==0?Ie===0&&(Ie=3):ul())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Jt(),Qo(n,t),n===null&&Pr(t.stateNode.containerInfo),Be(t),null;case 10:return So(t.type._context),Be(t),null;case 17:return Xe(t.type)&&ks(),Be(t),null;case 19:if(ye(ke),c=t.memoizedState,c===null)return Be(t),null;if(s=(t.flags&128)!==0,h=c.rendering,h===null)if(s)$r(c,!1);else{if(Ie!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(h=Os(n),h!==null){for(t.flags|=128,$r(c,!1),s=h.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)c=r,n=s,c.flags&=14680066,h=c.alternate,h===null?(c.childLanes=0,c.lanes=n,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=h.childLanes,c.lanes=h.lanes,c.child=h.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=h.memoizedProps,c.memoizedState=h.memoizedState,c.updateQueue=h.updateQueue,c.type=h.type,n=h.dependencies,c.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),r=r.sibling;return je(ke,ke.current&1|2),t.child}n=n.sibling}c.tail!==null&&Se()>Kt&&(t.flags|=128,s=!0,$r(c,!1),t.lanes=4194304)}else{if(!s)if(n=Os(h),n!==null){if(t.flags|=128,s=!0,r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),$r(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!we)return Be(t),null}else 2*Se()-c.renderingStartTime>Kt&&r!==1073741824&&(t.flags|=128,s=!0,$r(c,!1),t.lanes=4194304);c.isBackwards?(h.sibling=t.child,t.child=h):(r=c.last,r!==null?r.sibling=h:t.child=h,c.last=h)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Se(),t.sibling=null,r=ke.current,je(ke,s?r&1|2:r&1),t):(Be(t),null);case 22:case 23:return dl(),s=t.memoizedState!==null,n!==null&&n.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(on&1073741824)!==0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function pp(n,t){switch(yo(t),t.tag){case 1:return Xe(t.type)&&ks(),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Jt(),ye(Ge),ye(ze),Ao(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 5:return No(t),null;case 13:if(ye(ke),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Bt()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return ye(ke),null;case 4:return Jt(),null;case 10:return So(t.type._context),null;case 22:case 23:return dl(),null;case 24:return null;default:return null}}var Bs=!1,He=!1,fp=typeof WeakSet=="function"?WeakSet:Set,A=null;function Xt(n,t){var r=n.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ce(n,t,s)}else r.current=null}function Yo(n,t,r){try{r()}catch(s){Ce(n,t,s)}}var dd=!1;function mp(n,t){if(co=as,n=Ba(),no(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else e:{r=(r=n.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var h=0,f=-1,m=-1,v=0,C=0,S=n,b=null;n:for(;;){for(var I;S!==r||i!==0&&S.nodeType!==3||(f=h+i),S!==c||s!==0&&S.nodeType!==3||(m=h+s),S.nodeType===3&&(h+=S.nodeValue.length),(I=S.firstChild)!==null;)b=S,S=I;for(;;){if(S===n)break n;if(b===r&&++v===i&&(f=h),b===c&&++C===s&&(m=h),(I=S.nextSibling)!==null)break;S=b,b=S.parentNode}S=I}r=f===-1||m===-1?null:{start:f,end:m}}else r=null}r=r||{start:0,end:0}}else r=null;for(uo={focusedElem:n,selectionRange:r},as=!1,A=t;A!==null;)if(t=A,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,A=n;else for(;A!==null;){t=A;try{var D=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var _=D.memoizedProps,Re=D.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?_:kn(t.type,_),Re);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(P){Ce(t,t.return,P)}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}return D=dd,dd=!1,D}function zr(n,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&n)===n){var c=i.destroy;i.destroy=void 0,c!==void 0&&Yo(t,r,c)}i=i.next}while(i!==s)}}function Hs(n,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&n)===n){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Zo(n){var t=n.ref;if(t!==null){var r=n.stateNode;switch(n.tag){case 5:n=r;break;default:n=r}typeof t=="function"?t(n):t.current=n}}function ud(n){var t=n.alternate;t!==null&&(n.alternate=null,ud(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&(delete t[Tn],delete t[Tr],delete t[mo],delete t[Qh],delete t[Yh])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function hd(n){return n.tag===5||n.tag===3||n.tag===4}function pd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||hd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function el(n,t,r){var s=n.tag;if(s===5||s===6)n=n.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(n,t):r.insertBefore(n,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(n,r)):(t=r,t.appendChild(n)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=vs));else if(s!==4&&(n=n.child,n!==null))for(el(n,t,r),n=n.sibling;n!==null;)el(n,t,r),n=n.sibling}function nl(n,t,r){var s=n.tag;if(s===5||s===6)n=n.stateNode,t?r.insertBefore(n,t):r.appendChild(n);else if(s!==4&&(n=n.child,n!==null))for(nl(n,t,r),n=n.sibling;n!==null;)nl(n,t,r),n=n.sibling}var Fe=null,bn=!1;function rt(n,t,r){for(r=r.child;r!==null;)fd(n,t,r),r=r.sibling}function fd(n,t,r){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ts,r)}catch{}switch(r.tag){case 5:He||Xt(r,t);case 6:var s=Fe,i=bn;Fe=null,rt(n,t,r),Fe=s,bn=i,Fe!==null&&(bn?(n=Fe,r=r.stateNode,n.nodeType===8?n.parentNode.removeChild(r):n.removeChild(r)):Fe.removeChild(r.stateNode));break;case 18:Fe!==null&&(bn?(n=Fe,r=r.stateNode,n.nodeType===8?fo(n.parentNode,r):n.nodeType===1&&fo(n,r),gr(n)):fo(Fe,r.stateNode));break;case 4:s=Fe,i=bn,Fe=r.stateNode.containerInfo,bn=!0,rt(n,t,r),Fe=s,bn=i;break;case 0:case 11:case 14:case 15:if(!He&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var c=i,h=c.destroy;c=c.tag,h!==void 0&&((c&2)!==0||(c&4)!==0)&&Yo(r,t,h),i=i.next}while(i!==s)}rt(n,t,r);break;case 1:if(!He&&(Xt(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(f){Ce(r,t,f)}rt(n,t,r);break;case 21:rt(n,t,r);break;case 22:r.mode&1?(He=(s=He)||r.memoizedState!==null,rt(n,t,r),He=s):rt(n,t,r);break;default:rt(n,t,r)}}function md(n){var t=n.updateQueue;if(t!==null){n.updateQueue=null;var r=n.stateNode;r===null&&(r=n.stateNode=new fp),t.forEach(function(s){var i=Cp.bind(null,n,s);r.has(s)||(r.add(s),s.then(i,i))})}}function Cn(n,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var c=n,h=t,f=h;e:for(;f!==null;){switch(f.tag){case 5:Fe=f.stateNode,bn=!1;break e;case 3:Fe=f.stateNode.containerInfo,bn=!0;break e;case 4:Fe=f.stateNode.containerInfo,bn=!0;break e}f=f.return}if(Fe===null)throw Error(u(160));fd(c,h,i),Fe=null,bn=!1;var m=i.alternate;m!==null&&(m.return=null),i.return=null}catch(v){Ce(i,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xd(t,n),t=t.sibling}function xd(n,t){var r=n.alternate,s=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(t,n),An(n),s&4){try{zr(3,n,n.return),Hs(3,n)}catch(_){Ce(n,n.return,_)}try{zr(5,n,n.return)}catch(_){Ce(n,n.return,_)}}break;case 1:Cn(t,n),An(n),s&512&&r!==null&&Xt(r,r.return);break;case 5:if(Cn(t,n),An(n),s&512&&r!==null&&Xt(r,r.return),n.flags&32){var i=n.stateNode;try{lr(i,"")}catch(_){Ce(n,n.return,_)}}if(s&4&&(i=n.stateNode,i!=null)){var c=n.memoizedProps,h=r!==null?r.memoizedProps:c,f=n.type,m=n.updateQueue;if(n.updateQueue=null,m!==null)try{f==="input"&&c.type==="radio"&&c.name!=null&&Wl(i,c),Ii(f,h);var v=Ii(f,c);for(h=0;h<m.length;h+=2){var C=m[h],S=m[h+1];C==="style"?Yl(i,S):C==="dangerouslySetInnerHTML"?Kl(i,S):C==="children"?lr(i,S):ie(i,C,S,v)}switch(f){case"input":Ri(i,c);break;case"textarea":Gl(i,c);break;case"select":var b=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!c.multiple;var I=c.value;I!=null?Pt(i,!!c.multiple,I,!1):b!==!!c.multiple&&(c.defaultValue!=null?Pt(i,!!c.multiple,c.defaultValue,!0):Pt(i,!!c.multiple,c.multiple?[]:"",!1))}i[Tr]=c}catch(_){Ce(n,n.return,_)}}break;case 6:if(Cn(t,n),An(n),s&4){if(n.stateNode===null)throw Error(u(162));i=n.stateNode,c=n.memoizedProps;try{i.nodeValue=c}catch(_){Ce(n,n.return,_)}}break;case 3:if(Cn(t,n),An(n),s&4&&r!==null&&r.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(_){Ce(n,n.return,_)}break;case 4:Cn(t,n),An(n);break;case 13:Cn(t,n),An(n),i=n.child,i.flags&8192&&(c=i.memoizedState!==null,i.stateNode.isHidden=c,!c||i.alternate!==null&&i.alternate.memoizedState!==null||(sl=Se())),s&4&&md(n);break;case 22:if(C=r!==null&&r.memoizedState!==null,n.mode&1?(He=(v=He)||C,Cn(t,n),He=v):Cn(t,n),An(n),s&8192){if(v=n.memoizedState!==null,(n.stateNode.isHidden=v)&&!C&&(n.mode&1)!==0)for(A=n,C=n.child;C!==null;){for(S=A=C;A!==null;){switch(b=A,I=b.child,b.tag){case 0:case 11:case 14:case 15:zr(4,b,b.return);break;case 1:Xt(b,b.return);var D=b.stateNode;if(typeof D.componentWillUnmount=="function"){s=b,r=b.return;try{t=s,D.props=t.memoizedProps,D.state=t.memoizedState,D.componentWillUnmount()}catch(_){Ce(s,r,_)}}break;case 5:Xt(b,b.return);break;case 22:if(b.memoizedState!==null){yd(S);continue}}I!==null?(I.return=b,A=I):yd(S)}C=C.sibling}e:for(C=null,S=n;;){if(S.tag===5){if(C===null){C=S;try{i=S.stateNode,v?(c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(f=S.stateNode,m=S.memoizedProps.style,h=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=Ql("display",h))}catch(_){Ce(n,n.return,_)}}}else if(S.tag===6){if(C===null)try{S.stateNode.nodeValue=v?"":S.memoizedProps}catch(_){Ce(n,n.return,_)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===n)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;C===S&&(C=null),S=S.return}C===S&&(C=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Cn(t,n),An(n),s&4&&md(n);break;case 21:break;default:Cn(t,n),An(n)}}function An(n){var t=n.flags;if(t&2){try{e:{for(var r=n.return;r!==null;){if(hd(r)){var s=r;break e}r=r.return}throw Error(u(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(lr(i,""),s.flags&=-33);var c=pd(n);nl(n,c,i);break;case 3:case 4:var h=s.stateNode.containerInfo,f=pd(n);el(n,f,h);break;default:throw Error(u(161))}}catch(m){Ce(n,n.return,m)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function xp(n,t,r){A=n,jd(n)}function jd(n,t,r){for(var s=(n.mode&1)!==0;A!==null;){var i=A,c=i.child;if(i.tag===22&&s){var h=i.memoizedState!==null||Bs;if(!h){var f=i.alternate,m=f!==null&&f.memoizedState!==null||He;f=Bs;var v=He;if(Bs=h,(He=m)&&!v)for(A=i;A!==null;)h=A,m=h.child,h.tag===22&&h.memoizedState!==null?vd(i):m!==null?(m.return=h,A=m):vd(i);for(;c!==null;)A=c,jd(c),c=c.sibling;A=i,Bs=f,He=v}gd(n)}else(i.subtreeFlags&8772)!==0&&c!==null?(c.return=i,A=c):gd(n)}}function gd(n){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:He||Hs(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!He)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:kn(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&yc(t,c,s);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}yc(t,h,r)}break;case 5:var f=t.stateNode;if(r===null&&t.flags&4){r=f;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&r.focus();break;case"img":m.src&&(r.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var C=v.memoizedState;if(C!==null){var S=C.dehydrated;S!==null&&gr(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}He||t.flags&512&&Zo(t)}catch(b){Ce(t,t.return,b)}}if(t===n){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function yd(n){for(;A!==null;){var t=A;if(t===n){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function vd(n){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Hs(4,t)}catch(m){Ce(t,r,m)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(m){Ce(t,i,m)}}var c=t.return;try{Zo(t)}catch(m){Ce(t,c,m)}break;case 5:var h=t.return;try{Zo(t)}catch(m){Ce(t,h,m)}}}catch(m){Ce(t,t.return,m)}if(t===n){A=null;break}var f=t.sibling;if(f!==null){f.return=t.return,A=f;break}A=t.return}}var jp=Math.ceil,Ws=ee.ReactCurrentDispatcher,tl=ee.ReactCurrentOwner,fn=ee.ReactCurrentBatchConfig,ae=0,Oe=null,Pe=null,Le=0,on=0,qt=Yn(0),Ie=0,Ur=null,yt=0,Vs=0,rl=0,Br=null,Ke=null,sl=0,Kt=1/0,Hn=null,Js=!1,il=null,st=null,Gs=!1,it=null,Xs=0,Hr=0,ol=null,qs=-1,Ks=0;function Je(){return(ae&6)!==0?Se():qs!==-1?qs:qs=Se()}function ot(n){return(n.mode&1)===0?1:(ae&2)!==0&&Le!==0?Le&-Le:ep.transition!==null?(Ks===0&&(Ks=pa()),Ks):(n=me,n!==0||(n=window.event,n=n===void 0?16:ka(n.type)),n)}function Sn(n,t,r,s){if(50<Hr)throw Hr=0,ol=null,Error(u(185));pr(n,r,s),((ae&2)===0||n!==Oe)&&(n===Oe&&((ae&2)===0&&(Vs|=r),Ie===4&&lt(n,Le)),Qe(n,s),r===1&&ae===0&&(t.mode&1)===0&&(Kt=Se()+500,Cs&&et()))}function Qe(n,t){var r=n.callbackNode;eh(n,t);var s=is(n,n===Oe?Le:0);if(s===0)r!==null&&da(r),n.callbackNode=null,n.callbackPriority=0;else if(t=s&-s,n.callbackPriority!==t){if(r!=null&&da(r),t===1)n.tag===0?Zh(kd.bind(null,n)):lc(kd.bind(null,n)),qh(function(){(ae&6)===0&&et()}),r=null;else{switch(fa(s)){case 1:r=Li;break;case 4:r=ua;break;case 16:r=ns;break;case 536870912:r=ha;break;default:r=ns}r=Nd(r,wd.bind(null,n))}n.callbackPriority=t,n.callbackNode=r}}function wd(n,t){if(qs=-1,Ks=0,(ae&6)!==0)throw Error(u(327));var r=n.callbackNode;if(Qt()&&n.callbackNode!==r)return null;var s=is(n,n===Oe?Le:0);if(s===0)return null;if((s&30)!==0||(s&n.expiredLanes)!==0||t)t=Qs(n,s);else{t=s;var i=ae;ae|=2;var c=Cd();(Oe!==n||Le!==t)&&(Hn=null,Kt=Se()+500,wt(n,t));do try{vp();break}catch(f){bd(n,f)}while(!0);Co(),Ws.current=c,ae=i,Pe!==null?t=0:(Oe=null,Le=0,t=Ie)}if(t!==0){if(t===2&&(i=$i(n),i!==0&&(s=i,t=ll(n,i))),t===1)throw r=Ur,wt(n,0),lt(n,s),Qe(n,Se()),r;if(t===6)lt(n,s);else{if(i=n.current.alternate,(s&30)===0&&!gp(i)&&(t=Qs(n,s),t===2&&(c=$i(n),c!==0&&(s=c,t=ll(n,c))),t===1))throw r=Ur,wt(n,0),lt(n,s),Qe(n,Se()),r;switch(n.finishedWork=i,n.finishedLanes=s,t){case 0:case 1:throw Error(u(345));case 2:kt(n,Ke,Hn);break;case 3:if(lt(n,s),(s&130023424)===s&&(t=sl+500-Se(),10<t)){if(is(n,0)!==0)break;if(i=n.suspendedLanes,(i&s)!==s){Je(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=po(kt.bind(null,n,Ke,Hn),t);break}kt(n,Ke,Hn);break;case 4:if(lt(n,s),(s&4194240)===s)break;for(t=n.eventTimes,i=-1;0<s;){var h=31-yn(s);c=1<<h,h=t[h],h>i&&(i=h),s&=~c}if(s=i,s=Se()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*jp(s/1960))-s,10<s){n.timeoutHandle=po(kt.bind(null,n,Ke,Hn),s);break}kt(n,Ke,Hn);break;case 5:kt(n,Ke,Hn);break;default:throw Error(u(329))}}}return Qe(n,Se()),n.callbackNode===r?wd.bind(null,n):null}function ll(n,t){var r=Br;return n.current.memoizedState.isDehydrated&&(wt(n,t).flags|=256),n=Qs(n,t),n!==2&&(t=Ke,Ke=r,t!==null&&al(t)),n}function al(n){Ke===null?Ke=n:Ke.push.apply(Ke,n)}function gp(n){for(var t=n;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],c=i.getSnapshot;i=i.value;try{if(!vn(c(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(n,t){for(t&=~rl,t&=~Vs,n.suspendedLanes|=t,n.pingedLanes&=~t,n=n.expirationTimes;0<t;){var r=31-yn(t),s=1<<r;n[r]=-1,t&=~s}}function kd(n){if((ae&6)!==0)throw Error(u(327));Qt();var t=is(n,0);if((t&1)===0)return Qe(n,Se()),null;var r=Qs(n,t);if(n.tag!==0&&r===2){var s=$i(n);s!==0&&(t=s,r=ll(n,s))}if(r===1)throw r=Ur,wt(n,0),lt(n,t),Qe(n,Se()),r;if(r===6)throw Error(u(345));return n.finishedWork=n.current.alternate,n.finishedLanes=t,kt(n,Ke,Hn),Qe(n,Se()),null}function cl(n,t){var r=ae;ae|=1;try{return n(t)}finally{ae=r,ae===0&&(Kt=Se()+500,Cs&&et())}}function vt(n){it!==null&&it.tag===0&&(ae&6)===0&&Qt();var t=ae;ae|=1;var r=fn.transition,s=me;try{if(fn.transition=null,me=1,n)return n()}finally{me=s,fn.transition=r,ae=t,(ae&6)===0&&et()}}function dl(){on=qt.current,ye(qt)}function wt(n,t){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;if(r!==-1&&(n.timeoutHandle=-1,Xh(r)),Pe!==null)for(r=Pe.return;r!==null;){var s=r;switch(yo(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ks();break;case 3:Jt(),ye(Ge),ye(ze),Ao();break;case 5:No(s);break;case 4:Jt();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:So(s.type._context);break;case 22:case 23:dl()}r=r.return}if(Oe=n,Pe=n=at(n.current,null),Le=on=t,Ie=0,Ur=null,rl=Vs=yt=0,Ke=Br=null,xt!==null){for(t=0;t<xt.length;t++)if(r=xt[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,c=r.pending;if(c!==null){var h=c.next;c.next=i,s.next=h}r.pending=s}xt=null}return n}function bd(n,t){do{var r=Pe;try{if(Co(),Ds.current=Ls,Ms){for(var s=be.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}Ms=!1}if(gt=0,Ae=Ne=be=null,Mr=!1,_r=0,tl.current=null,r===null||r.return===null){Ie=1,Ur=t,Pe=null;break}e:{var c=n,h=r.return,f=r,m=t;if(t=Le,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var v=m,C=f,S=C.tag;if((C.mode&1)===0&&(S===0||S===11||S===15)){var b=C.alternate;b?(C.updateQueue=b.updateQueue,C.memoizedState=b.memoizedState,C.lanes=b.lanes):(C.updateQueue=null,C.memoizedState=null)}var I=Xc(h);if(I!==null){I.flags&=-257,qc(I,h,f,c,t),I.mode&1&&Gc(c,v,t),t=I,m=v;var D=t.updateQueue;if(D===null){var _=new Set;_.add(m),t.updateQueue=_}else D.add(m);break e}else{if((t&1)===0){Gc(c,v,t),ul();break e}m=Error(u(426))}}else if(we&&f.mode&1){var Re=Xc(h);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),qc(Re,h,f,c,t),ko(Gt(m,f));break e}}c=m=Gt(m,f),Ie!==4&&(Ie=2),Br===null?Br=[c]:Br.push(c),c=h;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var g=Vc(c,m,t);gc(c,g);break e;case 1:f=m;var x=c.type,y=c.stateNode;if((c.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(st===null||!st.has(y)))){c.flags|=65536,t&=-t,c.lanes|=t;var P=Jc(c,f,t);gc(c,P);break e}}c=c.return}while(c!==null)}Rd(r)}catch(F){t=F,Pe===r&&r!==null&&(Pe=r=r.return);continue}break}while(!0)}function Cd(){var n=Ws.current;return Ws.current=Ls,n===null?Ls:n}function ul(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Oe===null||(yt&268435455)===0&&(Vs&268435455)===0||lt(Oe,Le)}function Qs(n,t){var r=ae;ae|=2;var s=Cd();(Oe!==n||Le!==t)&&(Hn=null,wt(n,t));do try{yp();break}catch(i){bd(n,i)}while(!0);if(Co(),ae=r,Ws.current=s,Pe!==null)throw Error(u(261));return Oe=null,Le=0,Ie}function yp(){for(;Pe!==null;)Sd(Pe)}function vp(){for(;Pe!==null&&!Vu();)Sd(Pe)}function Sd(n){var t=Td(n.alternate,n,on);n.memoizedProps=n.pendingProps,t===null?Rd(n):Pe=t,tl.current=null}function Rd(n){var t=n;do{var r=t.alternate;if(n=t.return,(t.flags&32768)===0){if(r=hp(r,t,on),r!==null){Pe=r;return}}else{if(r=pp(r,t),r!==null){r.flags&=32767,Pe=r;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ie=6,Pe=null;return}}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=n}while(t!==null);Ie===0&&(Ie=5)}function kt(n,t,r){var s=me,i=fn.transition;try{fn.transition=null,me=1,wp(n,t,r,s)}finally{fn.transition=i,me=s}return null}function wp(n,t,r,s){do Qt();while(it!==null);if((ae&6)!==0)throw Error(u(327));r=n.finishedWork;var i=n.finishedLanes;if(r===null)return null;if(n.finishedWork=null,n.finishedLanes=0,r===n.current)throw Error(u(177));n.callbackNode=null,n.callbackPriority=0;var c=r.lanes|r.childLanes;if(nh(n,c),n===Oe&&(Pe=Oe=null,Le=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Gs||(Gs=!0,Nd(ns,function(){return Qt(),null})),c=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||c){c=fn.transition,fn.transition=null;var h=me;me=1;var f=ae;ae|=4,tl.current=null,mp(n,r),xd(r,n),Uh(uo),as=!!co,uo=co=null,n.current=r,xp(r),Ju(),ae=f,me=h,fn.transition=c}else n.current=r;if(Gs&&(Gs=!1,it=n,Xs=i),c=n.pendingLanes,c===0&&(st=null),qu(r.stateNode),Qe(n,Se()),t!==null)for(s=n.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(Js)throw Js=!1,n=il,il=null,n;return(Xs&1)!==0&&n.tag!==0&&Qt(),c=n.pendingLanes,(c&1)!==0?n===ol?Hr++:(Hr=0,ol=n):Hr=0,et(),null}function Qt(){if(it!==null){var n=fa(Xs),t=fn.transition,r=me;try{if(fn.transition=null,me=16>n?16:n,it===null)var s=!1;else{if(n=it,it=null,Xs=0,(ae&6)!==0)throw Error(u(331));var i=ae;for(ae|=4,A=n.current;A!==null;){var c=A,h=c.child;if((A.flags&16)!==0){var f=c.deletions;if(f!==null){for(var m=0;m<f.length;m++){var v=f[m];for(A=v;A!==null;){var C=A;switch(C.tag){case 0:case 11:case 15:zr(8,C,c)}var S=C.child;if(S!==null)S.return=C,A=S;else for(;A!==null;){C=A;var b=C.sibling,I=C.return;if(ud(C),C===v){A=null;break}if(b!==null){b.return=I,A=b;break}A=I}}}var D=c.alternate;if(D!==null){var _=D.child;if(_!==null){D.child=null;do{var Re=_.sibling;_.sibling=null,_=Re}while(_!==null)}}A=c}}if((c.subtreeFlags&2064)!==0&&h!==null)h.return=c,A=h;else e:for(;A!==null;){if(c=A,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:zr(9,c,c.return)}var g=c.sibling;if(g!==null){g.return=c.return,A=g;break e}A=c.return}}var x=n.current;for(A=x;A!==null;){h=A;var y=h.child;if((h.subtreeFlags&2064)!==0&&y!==null)y.return=h,A=y;else e:for(h=x;A!==null;){if(f=A,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Hs(9,f)}}catch(F){Ce(f,f.return,F)}if(f===h){A=null;break e}var P=f.sibling;if(P!==null){P.return=f.return,A=P;break e}A=f.return}}if(ae=i,et(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ts,n)}catch{}s=!0}return s}finally{me=r,fn.transition=t}}return!1}function Pd(n,t,r){t=Gt(r,t),t=Vc(n,t,1),n=tt(n,t,1),t=Je(),n!==null&&(pr(n,1,t),Qe(n,t))}function Ce(n,t,r){if(n.tag===3)Pd(n,n,r);else for(;t!==null;){if(t.tag===3){Pd(t,n,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(st===null||!st.has(s))){n=Gt(r,n),n=Jc(t,n,1),t=tt(t,n,1),n=Je(),t!==null&&(pr(t,1,n),Qe(t,n));break}}t=t.return}}function kp(n,t,r){var s=n.pingCache;s!==null&&s.delete(t),t=Je(),n.pingedLanes|=n.suspendedLanes&r,Oe===n&&(Le&r)===r&&(Ie===4||Ie===3&&(Le&130023424)===Le&&500>Se()-sl?wt(n,0):rl|=r),Qe(n,t)}function Ed(n,t){t===0&&((n.mode&1)===0?t=1:(t=ss,ss<<=1,(ss&130023424)===0&&(ss=4194304)));var r=Je();n=zn(n,t),n!==null&&(pr(n,t,r),Qe(n,r))}function bp(n){var t=n.memoizedState,r=0;t!==null&&(r=t.retryLane),Ed(n,r)}function Cp(n,t){var r=0;switch(n.tag){case 13:var s=n.stateNode,i=n.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=n.stateNode;break;default:throw Error(u(314))}s!==null&&s.delete(t),Ed(n,r)}var Td;Td=function(n,t,r){if(n!==null)if(n.memoizedProps!==t.pendingProps||Ge.current)qe=!0;else{if((n.lanes&r)===0&&(t.flags&128)===0)return qe=!1,up(n,t,r);qe=(n.flags&131072)!==0}else qe=!1,we&&(t.flags&1048576)!==0&&ac(t,Rs,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Us(n,t),n=t.pendingProps;var i=$t(t,ze.current);Vt(t,r),i=Mo(null,t,s,n,i,r);var c=_o();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(s)?(c=!0,bs(t)):c=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eo(t),i.updater=$s,t.stateNode=i,i._reactInternals=t,Bo(t,s,n,r),t=Jo(null,t,s,!0,c,r)):(t.tag=0,we&&c&&go(t),Ve(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Us(n,t),n=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=Rp(s),n=kn(s,n),i){case 0:t=Vo(null,t,s,n,r);break e;case 1:t=nd(null,t,s,n,r);break e;case 11:t=Kc(null,t,s,n,r);break e;case 14:t=Qc(null,t,s,kn(s.type,n),r);break e}throw Error(u(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:kn(s,i),Vo(n,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:kn(s,i),nd(n,t,s,i,r);case 3:e:{if(td(t),n===null)throw Error(u(387));s=t.pendingProps,c=t.memoizedState,i=c.element,jc(n,t),As(t,s,null,r);var h=t.memoizedState;if(s=h.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){i=Gt(Error(u(423)),t),t=rd(n,t,s,r,i);break e}else if(s!==i){i=Gt(Error(u(424)),t),t=rd(n,t,s,r,i);break e}else for(sn=Qn(t.stateNode.containerInfo.firstChild),rn=t,we=!0,wn=null,r=mc(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bt(),s===i){t=Bn(n,t,r);break e}Ve(n,t,s,r)}t=t.child}return t;case 5:return vc(t),n===null&&wo(t),s=t.type,i=t.pendingProps,c=n!==null?n.memoizedProps:null,h=i.children,ho(s,i)?h=null:c!==null&&ho(s,c)&&(t.flags|=32),ed(n,t),Ve(n,t,h,r),t.child;case 6:return n===null&&wo(t),null;case 13:return sd(n,t,r);case 4:return To(t,t.stateNode.containerInfo),s=t.pendingProps,n===null?t.child=Ht(t,null,s,r):Ve(n,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:kn(s,i),Kc(n,t,s,i,r);case 7:return Ve(n,t,t.pendingProps,r),t.child;case 8:return Ve(n,t,t.pendingProps.children,r),t.child;case 12:return Ve(n,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,c=t.memoizedProps,h=i.value,je(Ts,s._currentValue),s._currentValue=h,c!==null)if(vn(c.value,h)){if(c.children===i.children&&!Ge.current){t=Bn(n,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){h=c.child;for(var m=f.firstContext;m!==null;){if(m.context===s){if(c.tag===1){m=Un(-1,r&-r),m.tag=2;var v=c.updateQueue;if(v!==null){v=v.shared;var C=v.pending;C===null?m.next=m:(m.next=C.next,C.next=m),v.pending=m}}c.lanes|=r,m=c.alternate,m!==null&&(m.lanes|=r),Ro(c.return,r,t),f.lanes|=r;break}m=m.next}}else if(c.tag===10)h=c.type===t.type?null:c.child;else if(c.tag===18){if(h=c.return,h===null)throw Error(u(341));h.lanes|=r,f=h.alternate,f!==null&&(f.lanes|=r),Ro(h,r,t),h=c.sibling}else h=c.child;if(h!==null)h.return=c;else for(h=c;h!==null;){if(h===t){h=null;break}if(c=h.sibling,c!==null){c.return=h.return,h=c;break}h=h.return}c=h}Ve(n,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,Vt(t,r),i=hn(i),s=s(i),t.flags|=1,Ve(n,t,s,r),t.child;case 14:return s=t.type,i=kn(s,t.pendingProps),i=kn(s.type,i),Qc(n,t,s,i,r);case 15:return Yc(n,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:kn(s,i),Us(n,t),t.tag=1,Xe(s)?(n=!0,bs(t)):n=!1,Vt(t,r),Hc(t,s,i),Bo(t,s,i,r),Jo(null,t,s,!0,n,r);case 19:return od(n,t,r);case 22:return Zc(n,t,r)}throw Error(u(156,t.tag))};function Nd(n,t){return ca(n,t)}function Sp(n,t,r,s){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,t,r,s){return new Sp(n,t,r,s)}function hl(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Rp(n){if(typeof n=="function")return hl(n)?1:0;if(n!=null){if(n=n.$$typeof,n===an)return 11;if(n===cn)return 14}return 2}function at(n,t){var r=n.alternate;return r===null?(r=mn(n.tag,t,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=t,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&14680064,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,t=n.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r}function Ys(n,t,r,s,i,c){var h=2;if(s=n,typeof n=="function")hl(n)&&(h=1);else if(typeof n=="string")h=5;else e:switch(n){case H:return bt(r.children,i,c,t);case Te:h=8,i|=8;break;case en:return n=mn(12,r,t,i|2),n.elementType=en,n.lanes=c,n;case We:return n=mn(13,r,t,i),n.elementType=We,n.lanes=c,n;case nn:return n=mn(19,r,t,i),n.elementType=nn,n.lanes=c,n;case xe:return Zs(r,i,c,t);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case jn:h=10;break e;case Dn:h=9;break e;case an:h=11;break e;case cn:h=14;break e;case $e:h=16,s=null;break e}throw Error(u(130,n==null?n:typeof n,""))}return t=mn(h,r,t,i),t.elementType=n,t.type=s,t.lanes=c,t}function bt(n,t,r,s){return n=mn(7,n,s,t),n.lanes=r,n}function Zs(n,t,r,s){return n=mn(22,n,s,t),n.elementType=xe,n.lanes=r,n.stateNode={isHidden:!1},n}function pl(n,t,r){return n=mn(6,n,null,t),n.lanes=r,n}function fl(n,t,r){return t=mn(4,n.children!==null?n.children:[],n.key,t),t.lanes=r,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}function Pp(n,t,r,s,i){this.tag=t,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ml(n,t,r,s,i,c,h,f,m){return n=new Pp(n,t,r,f,m),t===1?(t=1,c===!0&&(t|=8)):t=0,c=mn(3,null,null,t),n.current=c,c.stateNode=n,c.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eo(c),n}function Ep(n,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:s==null?null:""+s,children:n,containerInfo:t,implementation:r}}function Id(n){if(!n)return Zn;n=n._reactInternals;e:{if(ut(n)!==n||n.tag!==1)throw Error(u(170));var t=n;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(n.tag===1){var r=n.type;if(Xe(r))return ic(n,r,t)}return t}function Ad(n,t,r,s,i,c,h,f,m){return n=ml(r,s,!0,n,i,c,h,f,m),n.context=Id(null),r=n.current,s=Je(),i=ot(r),c=Un(s,i),c.callback=t??null,tt(r,c,i),n.current.lanes=i,pr(n,i,s),Qe(n,s),n}function ei(n,t,r,s){var i=t.current,c=Je(),h=ot(i);return r=Id(r),t.context===null?t.context=r:t.pendingContext=r,t=Un(c,h),t.payload={element:n},s=s===void 0?null:s,s!==null&&(t.callback=s),n=tt(i,t,h),n!==null&&(Sn(n,i,h,c),Is(n,i,h)),h}function ni(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Od(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<t?r:t}}function xl(n,t){Od(n,t),(n=n.alternate)&&Od(n,t)}function Tp(){return null}var Dd=typeof reportError=="function"?reportError:function(n){console.error(n)};function jl(n){this._internalRoot=n}ti.prototype.render=jl.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(u(409));ei(n,t,null,null)},ti.prototype.unmount=jl.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;vt(function(){ei(null,n,null,null)}),t[_n]=null}};function ti(n){this._internalRoot=n}ti.prototype.unstable_scheduleHydration=function(n){if(n){var t=ja();n={blockedOn:null,target:n,priority:t};for(var r=0;r<Xn.length&&t!==0&&t<Xn[r].priority;r++);Xn.splice(r,0,n),r===0&&va(n)}};function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ri(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Md(){}function Np(n,t,r,s,i){if(i){if(typeof s=="function"){var c=s;s=function(){var v=ni(h);c.call(v)}}var h=Ad(t,s,n,0,null,!1,!1,"",Md);return n._reactRootContainer=h,n[_n]=h.current,Pr(n.nodeType===8?n.parentNode:n),vt(),h}for(;i=n.lastChild;)n.removeChild(i);if(typeof s=="function"){var f=s;s=function(){var v=ni(m);f.call(v)}}var m=ml(n,0,!1,null,null,!1,!1,"",Md);return n._reactRootContainer=m,n[_n]=m.current,Pr(n.nodeType===8?n.parentNode:n),vt(function(){ei(t,m,r,s)}),m}function si(n,t,r,s,i){var c=r._reactRootContainer;if(c){var h=c;if(typeof i=="function"){var f=i;i=function(){var m=ni(h);f.call(m)}}ei(t,h,n,i)}else h=Np(r,t,n,i,s);return ni(h)}ma=function(n){switch(n.tag){case 3:var t=n.stateNode;if(t.current.memoizedState.isDehydrated){var r=hr(t.pendingLanes);r!==0&&(Ui(t,r|1),Qe(t,Se()),(ae&6)===0&&(Kt=Se()+500,et()))}break;case 13:vt(function(){var s=zn(n,1);if(s!==null){var i=Je();Sn(s,n,1,i)}}),xl(n,1)}},Bi=function(n){if(n.tag===13){var t=zn(n,134217728);if(t!==null){var r=Je();Sn(t,n,134217728,r)}xl(n,134217728)}},xa=function(n){if(n.tag===13){var t=ot(n),r=zn(n,t);if(r!==null){var s=Je();Sn(r,n,t,s)}xl(n,t)}},ja=function(){return me},ga=function(n,t){var r=me;try{return me=n,t()}finally{me=r}},Di=function(n,t,r){switch(t){case"input":if(Ri(n,r),t=r.name,r.type==="radio"&&t!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==n&&s.form===n.form){var i=ws(s);if(!i)throw Error(u(90));gn(s),Ri(s,i)}}}break;case"textarea":Gl(n,r);break;case"select":t=r.value,t!=null&&Pt(n,!!r.multiple,t,!1)}},ta=cl,ra=vt;var Ip={usingClientEntryPoint:!1,Events:[Nr,Ft,ws,ea,na,cl]},Wr={findFiberByHostInstance:ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ap={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=la(n),n===null?null:n.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Tp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{ts=ii.inject(Ap),En=ii}catch{}}return Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip,Ye.createPortal=function(n,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gl(t))throw Error(u(200));return Ep(n,t,null,r)},Ye.createRoot=function(n,t){if(!gl(n))throw Error(u(299));var r=!1,s="",i=Dd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ml(n,1,!1,null,null,r,!1,s,i),n[_n]=t.current,Pr(n.nodeType===8?n.parentNode:n),new jl(t)},Ye.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(u(188)):(n=Object.keys(n).join(","),Error(u(268,n)));return n=la(t),n=n===null?null:n.stateNode,n},Ye.flushSync=function(n){return vt(n)},Ye.hydrate=function(n,t,r){if(!ri(t))throw Error(u(200));return si(null,n,t,!0,r)},Ye.hydrateRoot=function(n,t,r){if(!gl(n))throw Error(u(405));var s=r!=null&&r.hydratedSources||null,i=!1,c="",h=Dd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=Ad(t,null,n,1,r??null,i,!1,c,h),n[_n]=t.current,Pr(n),s)for(n=0;n<s.length;n++)r=s[n],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new ti(t)},Ye.render=function(n,t,r){if(!ri(t))throw Error(u(200));return si(null,n,t,!1,r)},Ye.unmountComponentAtNode=function(n){if(!ri(n))throw Error(u(40));return n._reactRootContainer?(vt(function(){si(null,null,n,!1,function(){n._reactRootContainer=null,n[_n]=null})}),!0):!1},Ye.unstable_batchedUpdates=cl,Ye.unstable_renderSubtreeIntoContainer=function(n,t,r,s){if(!ri(r))throw Error(u(200));if(n==null||n._reactInternals===void 0)throw Error(u(38));return si(n,t,r,!1,s)},Ye.version="18.3.1-next-f1338f8080-20240426",Ye}var Hd;function Up(){if(Hd)return wl.exports;Hd=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),wl.exports=zp(),wl.exports}var Wd;function Bp(){if(Wd)return oi;Wd=1;var l=Up();return oi.createRoot=l.createRoot,oi.hydrateRoot=l.hydrateRoot,oi}var Hp=Bp(),Ze=function(){return Ze=Object.assign||function(a){for(var u,d=1,p=arguments.length;d<p;d++){u=arguments[d];for(var w in u)Object.prototype.hasOwnProperty.call(u,w)&&(a[w]=u[w])}return a},Ze.apply(this,arguments)};function Xr(l,a,u){if(u||arguments.length===2)for(var d=0,p=a.length,w;d<p;d++)(w||!(d in a))&&(w||(w=Array.prototype.slice.call(a,0,d)),w[d]=a[d]);return l.concat(w||Array.prototype.slice.call(a))}var ve="-ms-",Gr="-moz-",fe="-webkit-",cu="comm",yi="rule",Ll="decl",Wp="@import",du="@keyframes",Vp="@layer",uu=Math.abs,$l=String.fromCharCode,El=Object.assign;function Jp(l,a){return Me(l,0)^45?(((a<<2^Me(l,0))<<2^Me(l,1))<<2^Me(l,2))<<2^Me(l,3):0}function hu(l){return l.trim()}function Wn(l,a){return(l=a.exec(l))?l[0]:l}function Z(l,a,u){return l.replace(a,u)}function ci(l,a,u){return l.indexOf(a,u)}function Me(l,a){return l.charCodeAt(a)|0}function er(l,a,u){return l.slice(a,u)}function On(l){return l.length}function pu(l){return l.length}function Jr(l,a){return a.push(l),l}function Gp(l,a){return l.map(a).join("")}function Vd(l,a){return l.filter(function(u){return!Wn(u,a)})}var vi=1,nr=1,fu=0,xn=0,Ee=0,ir="";function wi(l,a,u,d,p,w,R,M){return{value:l,root:a,parent:u,type:d,props:p,children:w,line:vi,column:nr,length:R,return:"",siblings:M}}function dt(l,a){return El(wi("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},a)}function Yt(l){for(;l.root;)l=dt(l.root,{children:[l]});Jr(l,l.siblings)}function Xp(){return Ee}function qp(){return Ee=xn>0?Me(ir,--xn):0,nr--,Ee===10&&(nr=1,vi--),Ee}function Pn(){return Ee=xn<fu?Me(ir,xn++):0,nr++,Ee===10&&(nr=1,vi++),Ee}function St(){return Me(ir,xn)}function di(){return xn}function ki(l,a){return er(ir,l,a)}function Tl(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kp(l){return vi=nr=1,fu=On(ir=l),xn=0,[]}function Qp(l){return ir="",l}function Cl(l){return hu(ki(xn-1,Nl(l===91?l+2:l===40?l+1:l)))}function Yp(l){for(;(Ee=St())&&Ee<33;)Pn();return Tl(l)>2||Tl(Ee)>3?"":" "}function Zp(l,a){for(;--a&&Pn()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return ki(l,di()+(a<6&&St()==32&&Pn()==32))}function Nl(l){for(;Pn();)switch(Ee){case l:return xn;case 34:case 39:l!==34&&l!==39&&Nl(Ee);break;case 40:l===41&&Nl(l);break;case 92:Pn();break}return xn}function ef(l,a){for(;Pn()&&l+Ee!==57;)if(l+Ee===84&&St()===47)break;return"/*"+ki(a,xn-1)+"*"+$l(l===47?l:Pn())}function nf(l){for(;!Tl(St());)Pn();return ki(l,xn)}function tf(l){return Qp(ui("",null,null,null,[""],l=Kp(l),0,[0],l))}function ui(l,a,u,d,p,w,R,M,E){for(var G=0,V=0,$=R,z=0,X=0,se=0,J=1,Q=1,pe=1,le=0,ie="",ee=p,ue=w,q=d,H=ie;Q;)switch(se=le,le=Pn()){case 40:if(se!=108&&Me(H,$-1)==58){ci(H+=Z(Cl(le),"&","&\f"),"&\f",uu(G?M[G-1]:0))!=-1&&(pe=-1);break}case 34:case 39:case 91:H+=Cl(le);break;case 9:case 10:case 13:case 32:H+=Yp(se);break;case 92:H+=Zp(di()-1,7);continue;case 47:switch(St()){case 42:case 47:Jr(rf(ef(Pn(),di()),a,u,E),E);break;default:H+="/"}break;case 123*J:M[G++]=On(H)*pe;case 125*J:case 59:case 0:switch(le){case 0:case 125:Q=0;case 59+V:pe==-1&&(H=Z(H,/\f/g,"")),X>0&&On(H)-$&&Jr(X>32?Gd(H+";",d,u,$-1,E):Gd(Z(H," ","")+";",d,u,$-2,E),E);break;case 59:H+=";";default:if(Jr(q=Jd(H,a,u,G,V,p,M,ie,ee=[],ue=[],$,w),w),le===123)if(V===0)ui(H,a,q,q,ee,w,$,M,ue);else switch(z===99&&Me(H,3)===110?100:z){case 100:case 108:case 109:case 115:ui(l,q,q,d&&Jr(Jd(l,q,q,0,0,p,M,ie,p,ee=[],$,ue),ue),p,ue,$,M,d?ee:ue);break;default:ui(H,q,q,q,[""],ue,0,M,ue)}}G=V=X=0,J=pe=1,ie=H="",$=R;break;case 58:$=1+On(H),X=se;default:if(J<1){if(le==123)--J;else if(le==125&&J++==0&&qp()==125)continue}switch(H+=$l(le),le*J){case 38:pe=V>0?1:(H+="\f",-1);break;case 44:M[G++]=(On(H)-1)*pe,pe=1;break;case 64:St()===45&&(H+=Cl(Pn())),z=St(),V=$=On(ie=H+=nf(di())),le++;break;case 45:se===45&&On(H)==2&&(J=0)}}return w}function Jd(l,a,u,d,p,w,R,M,E,G,V,$){for(var z=p-1,X=p===0?w:[""],se=pu(X),J=0,Q=0,pe=0;J<d;++J)for(var le=0,ie=er(l,z+1,z=uu(Q=R[J])),ee=l;le<se;++le)(ee=hu(Q>0?X[le]+" "+ie:Z(ie,/&\f/g,X[le])))&&(E[pe++]=ee);return wi(l,a,u,p===0?yi:M,E,G,V,$)}function rf(l,a,u,d){return wi(l,a,u,cu,$l(Xp()),er(l,2,-2),0,d)}function Gd(l,a,u,d,p){return wi(l,a,u,Ll,er(l,0,d),er(l,d+1,-1),d,p)}function mu(l,a,u){switch(Jp(l,a)){case 5103:return fe+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return fe+l+l;case 4789:return Gr+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+l+Gr+l+ve+l+l;case 5936:switch(Me(l,a+11)){case 114:return fe+l+ve+Z(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return fe+l+ve+Z(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return fe+l+ve+Z(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return fe+l+ve+l+l;case 6165:return fe+l+ve+"flex-"+l+l;case 5187:return fe+l+Z(l,/(\w+).+(:[^]+)/,fe+"box-$1$2"+ve+"flex-$1$2")+l;case 5443:return fe+l+ve+"flex-item-"+Z(l,/flex-|-self/g,"")+(Wn(l,/flex-|baseline/)?"":ve+"grid-row-"+Z(l,/flex-|-self/g,""))+l;case 4675:return fe+l+ve+"flex-line-pack"+Z(l,/align-content|flex-|-self/g,"")+l;case 5548:return fe+l+ve+Z(l,"shrink","negative")+l;case 5292:return fe+l+ve+Z(l,"basis","preferred-size")+l;case 6060:return fe+"box-"+Z(l,"-grow","")+fe+l+ve+Z(l,"grow","positive")+l;case 4554:return fe+Z(l,/([^-])(transform)/g,"$1"+fe+"$2")+l;case 6187:return Z(Z(Z(l,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),l,"")+l;case 5495:case 3959:return Z(l,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return Z(Z(l,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+fe+l+l;case 4200:if(!Wn(l,/flex-|baseline/))return ve+"grid-column-align"+er(l,a)+l;break;case 2592:case 3360:return ve+Z(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(d,p){return a=p,Wn(d.props,/grid-\w+-end/)})?~ci(l+(u=u[a].value),"span",0)?l:ve+Z(l,"-start","")+l+ve+"grid-row-span:"+(~ci(u,"span",0)?Wn(u,/\d+/):+Wn(u,/\d+/)-+Wn(l,/\d+/))+";":ve+Z(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(d){return Wn(d.props,/grid-\w+-start/)})?l:ve+Z(Z(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return Z(l,/(.+)-inline(.+)/,fe+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(On(l)-1-a>6)switch(Me(l,a+1)){case 109:if(Me(l,a+4)!==45)break;case 102:return Z(l,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+Gr+(Me(l,a+3)==108?"$3":"$2-$3"))+l;case 115:return~ci(l,"stretch",0)?mu(Z(l,"stretch","fill-available"),a,u)+l:l}break;case 5152:case 5920:return Z(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,p,w,R,M,E,G){return ve+p+":"+w+G+(R?ve+p+"-span:"+(M?E:+E-+w)+G:"")+l});case 4949:if(Me(l,a+6)===121)return Z(l,":",":"+fe)+l;break;case 6444:switch(Me(l,Me(l,14)===45?18:11)){case 120:return Z(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Me(l,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+ve+"$2box$3")+l;case 100:return Z(l,":",":"+ve)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(l,"scroll-","scroll-snap-")+l}return l}function fi(l,a){for(var u="",d=0;d<l.length;d++)u+=a(l[d],d,l,a)||"";return u}function sf(l,a,u,d){switch(l.type){case Vp:if(l.children.length)break;case Wp:case Ll:return l.return=l.return||l.value;case cu:return"";case du:return l.return=l.value+"{"+fi(l.children,d)+"}";case yi:if(!On(l.value=l.props.join(",")))return""}return On(u=fi(l.children,d))?l.return=l.value+"{"+u+"}":""}function of(l){var a=pu(l);return function(u,d,p,w){for(var R="",M=0;M<a;M++)R+=l[M](u,d,p,w)||"";return R}}function lf(l){return function(a){a.root||(a=a.return)&&l(a)}}function af(l,a,u,d){if(l.length>-1&&!l.return)switch(l.type){case Ll:l.return=mu(l.value,l.length,u);return;case du:return fi([dt(l,{value:Z(l.value,"@","@"+fe)})],d);case yi:if(l.length)return Gp(u=l.props,function(p){switch(Wn(p,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yt(dt(l,{props:[Z(p,/:(read-\w+)/,":"+Gr+"$1")]})),Yt(dt(l,{props:[p]})),El(l,{props:Vd(u,d)});break;case"::placeholder":Yt(dt(l,{props:[Z(p,/:(plac\w+)/,":"+fe+"input-$1")]})),Yt(dt(l,{props:[Z(p,/:(plac\w+)/,":"+Gr+"$1")]})),Yt(dt(l,{props:[Z(p,/:(plac\w+)/,ve+"input-$1")]})),Yt(dt(l,{props:[p]})),El(l,{props:Vd(u,d)});break}return""})}}var cf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ln={},tr=typeof process<"u"&&ln!==void 0&&(ln.REACT_APP_SC_ATTR||ln.SC_ATTR)||"data-styled",xu="active",ju="data-styled-version",bi="6.1.19",zl=`/*!sc*/
`,mi=typeof window<"u"&&typeof document<"u",df=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==""?ln.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ln.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.SC_DISABLE_SPEEDY!==void 0&&ln.SC_DISABLE_SPEEDY!==""&&ln.SC_DISABLE_SPEEDY!=="false"&&ln.SC_DISABLE_SPEEDY),Ci=Object.freeze([]),rr=Object.freeze({});function uf(l,a,u){return u===void 0&&(u=rr),l.theme!==u.theme&&l.theme||a||u.theme}var gu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pf=/(^-|-$)/g;function Xd(l){return l.replace(hf,"-").replace(pf,"")}var ff=/(a)(d)/gi,li=52,qd=function(l){return String.fromCharCode(l+(l>25?39:97))};function Il(l){var a,u="";for(a=Math.abs(l);a>li;a=a/li|0)u=qd(a%li)+u;return(qd(a%li)+u).replace(ff,"$1-$2")}var Sl,yu=5381,Zt=function(l,a){for(var u=a.length;u;)l=33*l^a.charCodeAt(--u);return l},vu=function(l){return Zt(yu,l)};function wu(l){return Il(vu(l)>>>0)}function mf(l){return l.displayName||l.name||"Component"}function Rl(l){return typeof l=="string"&&!0}var ku=typeof Symbol=="function"&&Symbol.for,bu=ku?Symbol.for("react.memo"):60115,xf=ku?Symbol.for("react.forward_ref"):60112,jf={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gf={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yf=((Sl={})[xf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Sl[bu]=Cu,Sl);function Kd(l){return("type"in(a=l)&&a.type.$$typeof)===bu?Cu:"$$typeof"in l?yf[l.$$typeof]:jf;var a}var vf=Object.defineProperty,wf=Object.getOwnPropertyNames,Qd=Object.getOwnPropertySymbols,kf=Object.getOwnPropertyDescriptor,bf=Object.getPrototypeOf,Yd=Object.prototype;function Su(l,a,u){if(typeof a!="string"){if(Yd){var d=bf(a);d&&d!==Yd&&Su(l,d,u)}var p=wf(a);Qd&&(p=p.concat(Qd(a)));for(var w=Kd(l),R=Kd(a),M=0;M<p.length;++M){var E=p[M];if(!(E in gf||u&&u[E]||R&&E in R||w&&E in w)){var G=kf(a,E);try{vf(l,E,G)}catch{}}}}return l}function sr(l){return typeof l=="function"}function Ul(l){return typeof l=="object"&&"styledComponentId"in l}function Ct(l,a){return l&&a?"".concat(l," ").concat(a):l||a||""}function Al(l,a){if(l.length===0)return"";for(var u=l[0],d=1;d<l.length;d++)u+=l[d];return u}function qr(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Ol(l,a,u){if(u===void 0&&(u=!1),!u&&!qr(l)&&!Array.isArray(l))return a;if(Array.isArray(a))for(var d=0;d<a.length;d++)l[d]=Ol(l[d],a[d]);else if(qr(a))for(var d in a)l[d]=Ol(l[d],a[d]);return l}function Bl(l,a){Object.defineProperty(l,"toString",{value:a})}function Kr(l){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Cf=function(){function l(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return l.prototype.indexOfGroup=function(a){for(var u=0,d=0;d<a;d++)u+=this.groupSizes[d];return u},l.prototype.insertRules=function(a,u){if(a>=this.groupSizes.length){for(var d=this.groupSizes,p=d.length,w=p;a>=w;)if((w<<=1)<0)throw Kr(16,"".concat(a));this.groupSizes=new Uint32Array(w),this.groupSizes.set(d),this.length=w;for(var R=p;R<w;R++)this.groupSizes[R]=0}for(var M=this.indexOfGroup(a+1),E=(R=0,u.length);R<E;R++)this.tag.insertRule(M,u[R])&&(this.groupSizes[a]++,M++)},l.prototype.clearGroup=function(a){if(a<this.length){var u=this.groupSizes[a],d=this.indexOfGroup(a),p=d+u;this.groupSizes[a]=0;for(var w=d;w<p;w++)this.tag.deleteRule(d)}},l.prototype.getGroup=function(a){var u="";if(a>=this.length||this.groupSizes[a]===0)return u;for(var d=this.groupSizes[a],p=this.indexOfGroup(a),w=p+d,R=p;R<w;R++)u+="".concat(this.tag.getRule(R)).concat(zl);return u},l}(),hi=new Map,xi=new Map,pi=1,ai=function(l){if(hi.has(l))return hi.get(l);for(;xi.has(pi);)pi++;var a=pi++;return hi.set(l,a),xi.set(a,l),a},Sf=function(l,a){pi=a+1,hi.set(l,a),xi.set(a,l)},Rf="style[".concat(tr,"][").concat(ju,'="').concat(bi,'"]'),Pf=new RegExp("^".concat(tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ef=function(l,a,u){for(var d,p=u.split(","),w=0,R=p.length;w<R;w++)(d=p[w])&&l.registerName(a,d)},Tf=function(l,a){for(var u,d=((u=a.textContent)!==null&&u!==void 0?u:"").split(zl),p=[],w=0,R=d.length;w<R;w++){var M=d[w].trim();if(M){var E=M.match(Pf);if(E){var G=0|parseInt(E[1],10),V=E[2];G!==0&&(Sf(V,G),Ef(l,V,E[3]),l.getTag().insertRules(G,p)),p.length=0}else p.push(M)}}},Zd=function(l){for(var a=document.querySelectorAll(Rf),u=0,d=a.length;u<d;u++){var p=a[u];p&&p.getAttribute(tr)!==xu&&(Tf(l,p),p.parentNode&&p.parentNode.removeChild(p))}};function Nf(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ru=function(l){var a=document.head,u=l||a,d=document.createElement("style"),p=function(M){var E=Array.from(M.querySelectorAll("style[".concat(tr,"]")));return E[E.length-1]}(u),w=p!==void 0?p.nextSibling:null;d.setAttribute(tr,xu),d.setAttribute(ju,bi);var R=Nf();return R&&d.setAttribute("nonce",R),u.insertBefore(d,w),d},If=function(){function l(a){this.element=Ru(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var d=document.styleSheets,p=0,w=d.length;p<w;p++){var R=d[p];if(R.ownerNode===u)return R}throw Kr(17)}(this.element),this.length=0}return l.prototype.insertRule=function(a,u){try{return this.sheet.insertRule(u,a),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},l.prototype.getRule=function(a){var u=this.sheet.cssRules[a];return u&&u.cssText?u.cssText:""},l}(),Af=function(){function l(a){this.element=Ru(a),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(a,u){if(a<=this.length&&a>=0){var d=document.createTextNode(u);return this.element.insertBefore(d,this.nodes[a]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},l.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},l}(),Of=function(){function l(a){this.rules=[],this.length=0}return l.prototype.insertRule=function(a,u){return a<=this.length&&(this.rules.splice(a,0,u),this.length++,!0)},l.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},l.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},l}(),eu=mi,Df={isServer:!mi,useCSSOMInjection:!df},Pu=function(){function l(a,u,d){a===void 0&&(a=rr),u===void 0&&(u={});var p=this;this.options=Ze(Ze({},Df),a),this.gs=u,this.names=new Map(d),this.server=!!a.isServer,!this.server&&mi&&eu&&(eu=!1,Zd(this)),Bl(this,function(){return function(w){for(var R=w.getTag(),M=R.length,E="",G=function($){var z=function(pe){return xi.get(pe)}($);if(z===void 0)return"continue";var X=w.names.get(z),se=R.getGroup($);if(X===void 0||!X.size||se.length===0)return"continue";var J="".concat(tr,".g").concat($,'[id="').concat(z,'"]'),Q="";X!==void 0&&X.forEach(function(pe){pe.length>0&&(Q+="".concat(pe,","))}),E+="".concat(se).concat(J,'{content:"').concat(Q,'"}').concat(zl)},V=0;V<M;V++)G(V);return E}(p)})}return l.registerId=function(a){return ai(a)},l.prototype.rehydrate=function(){!this.server&&mi&&Zd(this)},l.prototype.reconstructWithOptions=function(a,u){return u===void 0&&(u=!0),new l(Ze(Ze({},this.options),a),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(a=function(u){var d=u.useCSSOMInjection,p=u.target;return u.isServer?new Of(p):d?new If(p):new Af(p)}(this.options),new Cf(a)));var a},l.prototype.hasNameForId=function(a,u){return this.names.has(a)&&this.names.get(a).has(u)},l.prototype.registerName=function(a,u){if(ai(a),this.names.has(a))this.names.get(a).add(u);else{var d=new Set;d.add(u),this.names.set(a,d)}},l.prototype.insertRules=function(a,u,d){this.registerName(a,u),this.getTag().insertRules(ai(a),d)},l.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},l.prototype.clearRules=function(a){this.getTag().clearGroup(ai(a)),this.clearNames(a)},l.prototype.clearTag=function(){this.tag=void 0},l}(),Mf=/&/g,_f=/^\s*\/\/.*$/gm;function Eu(l,a){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(a," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(a," ")),u.props=u.props.map(function(d){return"".concat(a," ").concat(d)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=Eu(u.children,a)),u})}function Ff(l){var a,u,d,p=rr,w=p.options,R=w===void 0?rr:w,M=p.plugins,E=M===void 0?Ci:M,G=function(z,X,se){return se.startsWith(u)&&se.endsWith(u)&&se.replaceAll(u,"").length>0?".".concat(a):z},V=E.slice();V.push(function(z){z.type===yi&&z.value.includes("&")&&(z.props[0]=z.props[0].replace(Mf,u).replace(d,G))}),R.prefix&&V.push(af),V.push(sf);var $=function(z,X,se,J){X===void 0&&(X=""),se===void 0&&(se=""),J===void 0&&(J="&"),a=J,u=X,d=new RegExp("\\".concat(u,"\\b"),"g");var Q=z.replace(_f,""),pe=tf(se||X?"".concat(se," ").concat(X," { ").concat(Q," }"):Q);R.namespace&&(pe=Eu(pe,R.namespace));var le=[];return fi(pe,of(V.concat(lf(function(ie){return le.push(ie)})))),le};return $.hash=E.length?E.reduce(function(z,X){return X.name||Kr(15),Zt(z,X.name)},yu).toString():"",$}var Lf=new Pu,Dl=Ff(),Tu=O.createContext({shouldForwardProp:void 0,styleSheet:Lf,stylis:Dl});Tu.Consumer;O.createContext(void 0);function nu(){return Fl.useContext(Tu)}var Nu=function(){function l(a,u){var d=this;this.inject=function(p,w){w===void 0&&(w=Dl);var R=d.name+w.hash;p.hasNameForId(d.id,R)||p.insertRules(d.id,R,w(d.rules,R,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=u,Bl(this,function(){throw Kr(12,String(d.name))})}return l.prototype.getName=function(a){return a===void 0&&(a=Dl),this.name+a.hash},l}(),$f=function(l){return l>="A"&&l<="Z"};function tu(l){for(var a="",u=0;u<l.length;u++){var d=l[u];if(u===1&&d==="-"&&l[0]==="-")return l;$f(d)?a+="-"+d.toLowerCase():a+=d}return a.startsWith("ms-")?"-"+a:a}var Iu=function(l){return l==null||l===!1||l===""},Au=function(l){var a,u,d=[];for(var p in l){var w=l[p];l.hasOwnProperty(p)&&!Iu(w)&&(Array.isArray(w)&&w.isCss||sr(w)?d.push("".concat(tu(p),":"),w,";"):qr(w)?d.push.apply(d,Xr(Xr(["".concat(p," {")],Au(w),!1),["}"],!1)):d.push("".concat(tu(p),": ").concat((a=p,(u=w)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||a in cf||a.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return d};function Rt(l,a,u,d){if(Iu(l))return[];if(Ul(l))return[".".concat(l.styledComponentId)];if(sr(l)){if(!sr(w=l)||w.prototype&&w.prototype.isReactComponent||!a)return[l];var p=l(a);return Rt(p,a,u,d)}var w;return l instanceof Nu?u?(l.inject(u,d),[l.getName(d)]):[l]:qr(l)?Au(l):Array.isArray(l)?Array.prototype.concat.apply(Ci,l.map(function(R){return Rt(R,a,u,d)})):[l.toString()]}function zf(l){for(var a=0;a<l.length;a+=1){var u=l[a];if(sr(u)&&!Ul(u))return!1}return!0}var Uf=vu(bi),Bf=function(){function l(a,u,d){this.rules=a,this.staticRulesId="",this.isStatic=(d===void 0||d.isStatic)&&zf(a),this.componentId=u,this.baseHash=Zt(Uf,u),this.baseStyle=d,Pu.registerId(u)}return l.prototype.generateAndInjectStyles=function(a,u,d){var p=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,u,d):"";if(this.isStatic&&!d.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))p=Ct(p,this.staticRulesId);else{var w=Al(Rt(this.rules,a,u,d)),R=Il(Zt(this.baseHash,w)>>>0);if(!u.hasNameForId(this.componentId,R)){var M=d(w,".".concat(R),void 0,this.componentId);u.insertRules(this.componentId,R,M)}p=Ct(p,R),this.staticRulesId=R}else{for(var E=Zt(this.baseHash,d.hash),G="",V=0;V<this.rules.length;V++){var $=this.rules[V];if(typeof $=="string")G+=$;else if($){var z=Al(Rt($,a,u,d));E=Zt(E,z+V),G+=z}}if(G){var X=Il(E>>>0);u.hasNameForId(this.componentId,X)||u.insertRules(this.componentId,X,d(G,".".concat(X),void 0,this.componentId)),p=Ct(p,X)}}return p},l}(),Ou=O.createContext(void 0);Ou.Consumer;var Pl={};function Hf(l,a,u){var d=Ul(l),p=l,w=!Rl(l),R=a.attrs,M=R===void 0?Ci:R,E=a.componentId,G=E===void 0?function(ee,ue){var q=typeof ee!="string"?"sc":Xd(ee);Pl[q]=(Pl[q]||0)+1;var H="".concat(q,"-").concat(wu(bi+q+Pl[q]));return ue?"".concat(ue,"-").concat(H):H}(a.displayName,a.parentComponentId):E,V=a.displayName,$=V===void 0?function(ee){return Rl(ee)?"styled.".concat(ee):"Styled(".concat(mf(ee),")")}(l):V,z=a.displayName&&a.componentId?"".concat(Xd(a.displayName),"-").concat(a.componentId):a.componentId||G,X=d&&p.attrs?p.attrs.concat(M).filter(Boolean):M,se=a.shouldForwardProp;if(d&&p.shouldForwardProp){var J=p.shouldForwardProp;if(a.shouldForwardProp){var Q=a.shouldForwardProp;se=function(ee,ue){return J(ee,ue)&&Q(ee,ue)}}else se=J}var pe=new Bf(u,z,d?p.componentStyle:void 0);function le(ee,ue){return function(q,H,Te){var en=q.attrs,jn=q.componentStyle,Dn=q.defaultProps,an=q.foldedComponentIds,We=q.styledComponentId,nn=q.target,cn=O.useContext(Ou),$e=nu(),xe=q.shouldForwardProp||$e.shouldForwardProp,T=uf(H,cn,Dn)||rr,L=function(re,ne,he){for(var oe,ce=Ze(Ze({},ne),{className:void 0,theme:he}),_e=0;_e<re.length;_e+=1){var Mn=sr(oe=re[_e])?oe(ce):oe;for(var gn in Mn)ce[gn]=gn==="className"?Ct(ce[gn],Mn[gn]):gn==="style"?Ze(Ze({},ce[gn]),Mn[gn]):Mn[gn]}return ne.className&&(ce.className=Ct(ce.className,ne.className)),ce}(en,H,T),N=L.as||nn,j={};for(var k in L)L[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&L.theme===T||(k==="forwardedAs"?j.as=L.forwardedAs:xe&&!xe(k,N)||(j[k]=L[k]));var K=function(re,ne){var he=nu(),oe=re.generateAndInjectStyles(ne,he.styleSheet,he.stylis);return oe}(jn,L),Y=Ct(an,We);return K&&(Y+=" "+K),L.className&&(Y+=" "+L.className),j[Rl(N)&&!gu.has(N)?"class":"className"]=Y,Te&&(j.ref=Te),Fl.createElement(N,j)}(ie,ee,ue)}le.displayName=$;var ie=O.forwardRef(le);return ie.attrs=X,ie.componentStyle=pe,ie.displayName=$,ie.shouldForwardProp=se,ie.foldedComponentIds=d?Ct(p.foldedComponentIds,p.styledComponentId):"",ie.styledComponentId=z,ie.target=d?p.target:l,Object.defineProperty(ie,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=d?function(ue){for(var q=[],H=1;H<arguments.length;H++)q[H-1]=arguments[H];for(var Te=0,en=q;Te<en.length;Te++)Ol(ue,en[Te],!0);return ue}({},p.defaultProps,ee):ee}}),Bl(ie,function(){return".".concat(ie.styledComponentId)}),w&&Su(ie,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ie}function ru(l,a){for(var u=[l[0]],d=0,p=a.length;d<p;d+=1)u.push(a[d],l[d+1]);return u}var su=function(l){return Object.assign(l,{isCss:!0})};function Du(l){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];if(sr(l)||qr(l))return su(Rt(ru(Ci,Xr([l],a,!0))));var d=l;return a.length===0&&d.length===1&&typeof d[0]=="string"?Rt(d):su(Rt(ru(d,a)))}function Ml(l,a,u){if(u===void 0&&(u=rr),!a)throw Kr(1,a);var d=function(p){for(var w=[],R=1;R<arguments.length;R++)w[R-1]=arguments[R];return l(a,u,Du.apply(void 0,Xr([p],w,!1)))};return d.attrs=function(p){return Ml(l,a,Ze(Ze({},u),{attrs:Array.prototype.concat(u.attrs,p).filter(Boolean)}))},d.withConfig=function(p){return Ml(l,a,Ze(Ze({},u),p))},d}var Mu=function(l){return Ml(Hf,l)},Rn=Mu;gu.forEach(function(l){Rn[l]=Mu(l)});function Wf(l){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];var d=Al(Du.apply(void 0,Xr([l],a,!1))),p=wu(d);return new Nu(p,d)}const Vf=Wf`
  from { box-shadow: 0 0 0 0 rgba(99,102,241,0.3); }
  to   { box-shadow: 0 0 0 8px rgba(99,102,241,0.0); }
`,o={Topic:Rn.section`
        --card: #121622;
        --muted: #9aa3b2;
        --accent: #6366f1;
        --expose: #0f0;
        background: var(--card);
        border: 1px solid #1c2333;
        border-radius: 14px;
        margin: 10px 0 16px;
        overflow: hidden;
    `,Title:Rn.button`
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
    `,Arrow:Rn.span`
        display: inline-block;
        width: 16px;
        text-align: center;
        color: var(--accent);
        transition: transform 180ms ease;
        transform: rotate(0deg);
        &[data-open="true"] {
            transform: rotate(90deg);
        }
    `,Panel:Rn.div`
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
    `,Content:Rn.div`
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
    `,Code:Rn.pre`
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
    `,Kbd:Rn.code`
        padding: 1px 6px;
        border-radius: 6px;
        background: #0b0f19;
        border: 1px solid #1c2333;
        font-size: 0.9em;
    `,Divider:Rn.hr`
        border: none;
        border-top: 1px dashed #263049;
        margin: 16px 0;
    `};function Jf({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="react-definition";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"React: definition & inspiration"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Gf,{})})})]})}function Gf(){return e.jsxs(o.Content,{children:[e.jsx("h3",{children:"What is React (how I define it)"}),e.jsxs("p",{children:["React is a ",e.jsx("strong",{children:"JavaScript library for building user interfaces"}),". I use it to describe UI as a pure function of state: ",e.jsx("em",{children:"UI = f(state)"}),". Instead of manually manipulating the DOM step-by-step, I declare how the UI should look for a given state and React takes care of updating the browser efficiently."]}),e.jsxs("p",{children:["It’s ",e.jsx("strong",{children:"component-based"})," (I build small, reusable components),"," ",e.jsx("strong",{children:"declarative"})," (I say “what”, not “how”), and it prefers"," ",e.jsx("strong",{children:"one-way data flow"})," (data goes down from parent to child)."]}),e.jsx("h3",{children:"Why React was created (the inspiration I keep in mind)"}),e.jsxs("p",{children:["React originated to tame complex, interactive UIs where frequent state changes made imperative DOM code fragile. The big idea was: treat the DOM as a ",e.jsx("em",{children:"result"})," of state, reconcile differences between the previous and next “virtual tree”, and update only what changed. This approach simplified mental load and reduced UI bugs caused by manual DOM ops."]}),e.jsx("p",{children:"Composition over inheritance, predictable data flow, and a fast diffing strategy (keys + identity) are the core inspirations that shaped how I write React apps today."}),e.jsx("h3",{children:"Mini example (UI = f(state))"}),e.jsx(o.Code,{"aria-label":"UI = f(state)",children:String.raw`function Hello() {
  const [name, setName] = React.useState("Ash");

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
// I declare what the UI should be for the current 'name'.
// React handles the DOM updates when 'name' changes.`}),e.jsx("h3",{children:"Where I reach for React (and where I don't)"}),e.jsx("p",{children:"I reach for React when I’m building interactive dashboards, forms, and views with lots of dynamic state. If a page is mostly static content, plain HTML/CSS (or a lightweight templating setup) can be enough; I don’t force React where it doesn’t add value."}),e.jsxs("p",{children:["That’s my short, practical mental picture: ",e.jsx("strong",{children:"components + state → declarative UI"}),", with React efficiently reconciling changes under the hood."]})]})}function Xf({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="vite-install";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Vite install (create app, run dev)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(qf,{})})})]})}function qf(){return e.jsxs(o.Content,{children:[e.jsx("h3",{children:"Prereq (1-time)"}),e.jsx("p",{children:"I generally work on node version 18."}),e.jsx(o.Code,{"aria-label":"check node",children:String.raw`node -v   # v18.20.4`}),e.jsx("h3",{children:"Create a new React app (interactive)"}),e.jsx("p",{children:"I usually run the interactive creator and pick React."}),e.jsx(o.Code,{"aria-label":"create vite app",children:String.raw`npm create vite@latest

# Prompts I pick:
# ✔ Project name: » reactjs-handbook
# ✔ Select a framework: » React
# ✔ Select a variant: » JavaScript
`}),e.jsx("h4",{children:"One-liner (skip prompts)"}),e.jsx(o.Code,{"aria-label":"one-liner create",children:String.raw`npm create vite@latest reactjs-handbook -- --template react`}),e.jsx("h3",{children:"Install & run locally"}),e.jsx(o.Code,{"aria-label":"install + dev",children:String.raw`cd reactjs-handbook
npm i
npm run dev   # opens http://localhost:5173`}),e.jsx("h3",{children:"Handy flags I use while coding"}),e.jsx(o.Code,{"aria-label":"dev flags",children:String.raw`# choose a different port if 5173 is busy
npm run dev -- --port 5174`}),e.jsx("h3",{children:"Quick notes I keep in mind"}),e.jsx("ul",{children:e.jsxs("li",{children:["After first run, I commit my own structure and add ",e.jsx("code",{children:"styled-components"})," when I start UI."]})}),e.jsx(o.Divider,{}),e.jsxs("p",{children:["That's it: create → install → ",e.jsx("strong",{children:"npm run dev"})," at ",e.jsx("code",{children:"http://localhost:5173"}),"."]})]})}var iu=Object.freeze,Kf=Object.defineProperty,Qf=(l,a)=>iu(Kf(l,"raw",{value:iu(l.slice())})),ou;function Yf({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="project-tree";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Project tree (what each file does)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Zf,{})})})]})}function Zf(){return e.jsxs(o.Content,{children:[e.jsx("h3",{children:"My project tree (Vite + React)"}),e.jsx(o.Code,{"aria-label":"folder tree",children:String.raw`.
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
`}),e.jsx("h3",{children:"What each file does (short)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"index.html"})," - Minimal HTML with a ",e.jsx("code",{children:'<div id="root">'}),". Vite injects the built JS here."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"src/main.jsx"})," - Boot file; creates the root and renders ",e.jsx("code",{children:"<App />"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"src/App.jsx"})," - App shell; I mount ",e.jsx("code",{children:"<ReactTutorial />"})," here."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"src/ReactTutorial.jsx"})," - Lists all topic components (each one collapsible)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"src/topics/"})," - Every note lives in its own file (e.g. ",e.jsx("code",{children:"ViteInstall.jsx"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"src/styled.js"})," - Shared Styled object with primitives:",e.jsx("code",{children:"Topic"}),", ",e.jsx("code",{children:"Title"}),", ",e.jsx("code",{children:"Arrow"}),", ",e.jsx("code",{children:"Panel"}),", ",e.jsx("code",{children:"Content"}),", ",e.jsx("code",{children:"Code"}),", ",e.jsx("code",{children:"Divider"}),", etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"public/"})," - Files served as-is (no bundling)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"vite.config.js"})," - Aliases and build dev settings."]})]}),e.jsx("h3",{children:"index.html (tiny and clean)"}),e.jsx(o.Code,{"aria-label":"index.html",children:String.raw(ou||(ou=Qf([`<!doctype html>
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
</html>`])))}),e.jsx("h3",{children:"main.jsx (entry)"}),e.jsx(o.Code,{"aria-label":"main.jsx",children:String.raw`import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // if I keep global styles

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}),e.jsx("h3",{children:"App.jsx (shell)"}),e.jsx(o.Code,{"aria-label":"App.jsx",children:String.raw`import React from "react";
import ReactTutorial from "./ReactTutorial";

export default function App() {
  return <ReactTutorial />;
}`}),e.jsx("h3",{children:"Tip I follow"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Keep ",e.jsx("strong",{children:"topics"})," small and focused-one concept per file."]}),e.jsxs("li",{children:["Assets go in ",e.jsx("code",{children:"src/assets"}),"; import them directly in components."]}),e.jsxs("li",{children:["Shared UI in ",e.jsx("code",{children:"components/"})," if I reuse it across topics."]})]}),e.jsx(o.Divider,{})]})}function em({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="editor-setup";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Editor setup (VS Code, extensions)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(nm,{})})})]})}function nm(){return e.jsxs(o.Content,{children:[e.jsx("h3",{children:"Extensions I install"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ESLint"})," - dbaeumer.vscode-eslint"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prettier - Code formatter"})," - esbenp.prettier-vscode"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error Lens"})," - usernamehw.errorlens"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"vscode-styled-components"})," - styled-components.vscode-styled-components"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Auto Rename Tag"})," - formulahendry.auto-rename-tag"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Auto Close Tag"})," - formulahendry.auto-close-tag"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Path Intellisense"})," - christian-kohler.path-intellisense"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ES7+ React/Redux snippets"})," - dsznajder.es7-react-js-snippets"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Git Graph"})," - mhutchie.git-graph (nice to have)"]})]}),e.jsx("h3",{children:"Workspace recommendations"}),e.jsx("p",{children:"I add this file so VS Code suggests the right extensions to anyone opening the repo."}),e.jsx(o.Code,{"aria-label":".vscode/extensions.json",children:String.raw`{
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
}`}),e.jsx("h3",{children:"My VS Code settings"}),e.jsx("p",{children:"Format on save + ESLint fixes; tidy imports; good highlighting for styled-components."}),e.jsx(o.Code,{"aria-label":".vscode/settings.json",children:String.raw`{
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
}`}),e.jsx("h3",{children:"Command palette shortcuts"}),e.jsx(o.Code,{"aria-label":"commands",children:String.raw`Ctrl/Cmd + Shift + P →
> Format Document
> Restart ESLint Server
> Developer: Reload Window`}),e.jsx("h3",{children:"Notes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Prettier handles formatting; ESLint handles code quality/fixes. I run both on save."}),e.jsx("li",{children:"The styled-components extension improves syntax highlighting inside template literals."}),e.jsx("li",{children:"VS Code auto-updates imports when files move (with the settings above)."})]}),e.jsx(o.Divider,{}),e.jsxs("p",{children:[e.jsx("em",{children:"PS:"})," My laptop is older, so I keep VS Code light - I install only essential extensions and prefer a minimal UI to save memory/CPU."]})]})}function tm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="env-files";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:".env / .env.development / .env.production"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(rm,{})})})]})}function rm(){return e.jsxs(o.Content,{children:[e.jsx("h3",{children:"What I use these files for"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:".env"})," - default values for all modes (non-secret)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:".env.development"})," - overrides when I run ",e.jsx("code",{children:"npm run dev"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:".env.production"})," - overrides when I build/serve prod."]}),e.jsxs("li",{children:[e.jsx("strong",{children:".env.local"})," - machine-specific values I don't commit (gitignored)."]})]}),e.jsx("h3",{children:"Important rule (Vite)"}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Only variables prefixed with ",e.jsx("code",{children:"VITE_"})," are exposed to the browser."]})," Everything else is ignored in client code. Also, I access them via ",e.jsx("code",{children:"import.meta.env"})," (not ",e.jsx("code",{children:"process.env"}),")."]}),e.jsx("h3",{children:"Examples I actually use"}),e.jsx(o.Code,{"aria-label":".env files",children:String.raw`# .env
VITE_APP_NAME=ReactJS Handbook

# .env.development
VITE_API_BASE=http://localhost:3000
VITE_DEBUG=true

# .env.production
VITE_API_BASE=https://api.example.com
VITE_DEBUG=false

# .env.local (gitignored; for my machine)
VITE_EXPERIMENT=true`}),e.jsx("p",{children:"Read them in code like this:"}),e.jsx(o.Code,{"aria-label":"usage in code",children:String.raw`// inside React code
const name = import.meta.env.VITE_APP_NAME;
const api  = import.meta.env.VITE_API_BASE;

// Vite's built-ins:
if (import.meta.env.DEV)   console.log("dev mode");
if (import.meta.env.PROD)  console.log("prod mode");
console.log(import.meta.env.MODE);      // "development" | "production" | "staging"...
console.log(import.meta.env.BASE_URL);  // base path`}),e.jsx("h3",{children:"Load order & precedence"}),e.jsx("p",{children:"Later files override earlier ones (more specific wins):"}),e.jsxs("ol",{children:[e.jsx("li",{children:".env"}),e.jsx("li",{children:".env.local"}),e.jsxs("li",{children:[".env.",e.jsx("em",{children:"mode"})]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[".env.",e.jsx("em",{children:"mode"}),".local"]})," (highest priority)"]})]}),e.jsx("h3",{children:"Switching modes (optional)"}),e.jsxs("p",{children:["Dev uses ",e.jsx("code",{children:"development"})," mode by default; build uses ",e.jsx("code",{children:"production"}),". I can opt into a custom mode:"]}),e.jsx(o.Code,{"aria-label":"custom mode",children:String.raw`vite build --mode staging   # will load .env.staging (and .env.staging.local if present)`}),e.jsx("h3",{children:"Git ignore (what I don't commit)"}),e.jsx(o.Code,{"aria-label":".gitignore",children:String.raw`.env.local
.env.*.local`}),e.jsx("h3",{children:"Quick checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Expose only public values with the ",e.jsx("code",{children:"VITE_*"})," prefix."]}),e.jsx("li",{children:"Never store secrets in frontend env files (anyone can view them in the browser)."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:".env.development"}),"/",e.jsx("code",{children:".env.production"})," for mode-specific overrides."]}),e.jsxs("li",{children:[e.jsx("code",{children:".env.local"})," stays uncommitted for machine-specific tweaks."]})]}),e.jsx(o.Divider,{})]})}function sm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="import-export-basics";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Import/export basics (named vs default)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(im,{})})})]})}function im(){return e.jsxs(o.Content,{children:[e.jsx("h3",{children:"How I decide"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default export"}),": file exposes one primary thing. Import name is my choice."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Named exports"}),": file exposes multiple things. Names are explicit; great for autocomplete and refactors."]})]}),e.jsx("h3",{children:"Default export"}),e.jsx(o.Code,{"aria-label":"default export",children:String.raw`// math.js
export default function add(a, b) { return a + b; }

// usage
import add from "./math.js";      // I can name it anything
console.log(add(2, 3));`}),e.jsx("h3",{children:"Named exports"}),e.jsx(o.Code,{"aria-label":"named exports",children:String.raw`// math2.js
export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;
export function sub(a, b) { return a - b; }

// usage
import { add, mul, sub } from "./math2.js";
import { add as plus } from "./math2.js";  // rename with 'as'`}),e.jsx("h3",{children:"Mixing default + named (allowed)"}),e.jsx(o.Code,{"aria-label":"mixed exports",children:String.raw`// math3.js
export default function add(a, b) { return a + b; }
export const mul = (a, b) => a * b;

// usage
import add, { mul } from "./math3.js";`}),e.jsx("h3",{children:"Namespace import (group everything)"}),e.jsx(o.Code,{"aria-label":"namespace import",children:String.raw`import * as math from "./math2.js";
console.log(math.add(1, 2), math.mul(2, 3));`}),e.jsx("h3",{children:"Re-exports & barrels"}),e.jsx(o.Code,{"aria-label":"re-exports",children:String.raw`// utils/index.js (barrel)
export * from "./math2.js";           // re-export named
export { default as add } from "./math3.js"; // re-export default with a name

// usage
import { add, mul } from "./utils/index.js";`}),e.jsx("h3",{children:"Dynamic import (on demand)"}),e.jsx(o.Code,{"aria-label":"dynamic import",children:String.raw`const mod = await import("./math2.js");
const { add } = mod;          // named
// const addDefault = mod.default;   // default (if any)`}),e.jsx("h3",{children:"Common mistakes I avoid"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Importing a named symbol from a file that only exports ",e.jsx("em",{children:"default"})," (and vice-versa)."]}),e.jsx("li",{children:"Creating circular imports with large barrel files."}),e.jsxs("li",{children:["Mixing CommonJS (",e.jsx("code",{children:"module.exports"}),") with ESM in the frontend-Vite expects ESM."]})]}),e.jsx(o.Divider,{}),e.jsxs("p",{children:["Rule of thumb I follow: **one main thing → default**, **multiple things → named**. Rename with ",e.jsx("code",{children:"as"})," when needed."]})]})}function om({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="let-vs-const";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"let vs const (avoid var)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(lm,{})})})]})}function lm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Practical rule: ",e.jsxs("strong",{children:["use ",e.jsx("code",{children:"const"})," by default"]}),". Switch to"," ",e.jsx("code",{children:"let"})," only when you truly need to ",e.jsx("em",{children:"reassign"}),". Prefer block scope and avoid ",e.jsx("code",{children:"var"}),"."]}),e.jsx("h3",{children:"Definitions"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"let"}),": ",e.jsx("strong",{children:"block-scoped"})," variable; ",e.jsx("em",{children:"reassignable"}),"; not redeclarable in the same scope."]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"}),": ",e.jsx("strong",{children:"block-scoped binding"}),"; ",e.jsx("em",{children:"not reassignable"}),". For objects/arrays, the reference is fixed but contents can still mutate."]})]}),e.jsx("h3",{children:"Key points"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Scope:"})," ",e.jsx("code",{children:"let"}),"/",e.jsx("code",{children:"const"})," → block; ",e.jsx("code",{children:"var"})," → function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Redeclare:"})," ",e.jsx("code",{children:"let"}),"/",e.jsx("code",{children:"const"})," ❌ (same scope), ",e.jsx("code",{children:"var"})," ✅."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reassign:"})," ",e.jsx("code",{children:"let"})," ✅; ",e.jsx("code",{children:"const"})," ❌ (but object/array contents may mutate)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Readability:"})," ",e.jsx("code",{children:"const"})," signals “this shouldn’t change”, which prevents bugs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Loops:"})," ",e.jsx("code",{children:"let"})," makes a new binding per iteration (great with async callbacks)."]})]}),e.jsx(o.Divider,{}),e.jsx("h3",{children:"A) Block scope & redeclare vs reassign"}),e.jsx(o.Code,{children:`{
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
console.log(y);        // { n: 2 }`}),e.jsxs("h3",{children:["B) Loops & closures (why ",e.jsx("code",{children:"let"})," shines)"]}),e.jsx(o.Code,{children:`// VAR: one binding shared → all log 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
}

// LET: new binding per iteration → 0,1,2
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);
}`}),e.jsx("h3",{children:"C) const with arrays/objects (mutate vs reassign)"}),e.jsx(o.Code,{children:`const arr = [1, 2, 3];
arr.push(4);           // ✅ mutate contents
// arr = [];           // ❌ reassign binding
console.log(arr);      // [1,2,3,4]

const user = Object.freeze({ id: 1, name: "Ash" });
// user.name = "New";  // ❌ blocked when frozen (strict mode errors)
console.log(user);`}),e.jsx("h3",{children:"D) Shadowing & blocks"}),e.jsx(o.Code,{children:`let value = "outer";
{
  const value = "inner"; // shadowed in block scope
  console.log(value);    // "inner"
}
console.log(value);      // "outer"`}),e.jsx("h3",{children:"When I use which"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"const"})," for imports, config values, functions/components, derived values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"let"})," for counters, accumulators, and anything that must change over time."]}),e.jsxs("li",{children:["Avoid ",e.jsx("strong",{children:"var"})," (function scope + redeclare allow many footguns)."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Default to ",e.jsx("strong",{children:"const"}),"."]}),e.jsxs("li",{children:["Need to change the value? → switch to ",e.jsx("strong",{children:"let"}),"."]}),e.jsx("li",{children:"Declare before use for clarity."}),e.jsxs("li",{children:["Prefer block scope; avoid ",e.jsx("code",{children:"var"}),"."]})]}),e.jsx(o.Divider,{})]})}function am({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="arrow-functions";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Arrow functions (implicit return, this)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(cm,{})})})]})}function cm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Arrow functions are concise function expressions with a"," ",e.jsxs("strong",{children:["lexical ",e.jsx("code",{children:"this"})]})," and optional"," ",e.jsx("strong",{children:"implicit return"}),". Great for callbacks and short utilities. Not good as object methods or constructors."]}),e.jsx("h3",{children:"Quick definitions"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Implicit return:"})," single-expression body (no braces) returns that value."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Lexical ",e.jsx("code",{children:"this"}),":"]})," arrows capture the surrounding ",e.jsx("code",{children:"this"}),"."]}),e.jsxs("li",{children:["Arrows don’t have their own ",e.jsx("code",{children:"arguments"}),"/",e.jsx("code",{children:"prototype"})," and can’t be used with ",e.jsx("code",{children:"new"}),"."]})]}),e.jsx(o.Divider,{}),e.jsx("h3",{children:"A) Syntax & implicit return"}),e.jsx(o.Code,{children:`// 1 param (parens optional)
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
(() => console.log("IIFE arrow"))();       // "IIFE arrow"`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"this"}),": lexical vs normal functions"]}),e.jsxs("p",{children:["Normal functions have a dynamic ",e.jsx("code",{children:"this"})," (depends on how they’re called). Arrow functions ",e.jsx("em",{children:"capture"})," the surrounding ",e.jsx("code",{children:"this"}),"."]}),e.jsx(o.Code,{children:`const counter = {
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
setTimeout(() => console.log("ticks ~", t.ticks), 3100); // "ticks ~" 3 (approx)`}),e.jsxs("h3",{children:["C) ",e.jsx("code",{children:"arguments"}),", ",e.jsx("code",{children:"call/apply/bind"}),", and constructors"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Arrows don’t have their own ",e.jsx("code",{children:"arguments"}),"; use rest ",e.jsx("code",{children:"...args"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"call"}),"/",e.jsx("code",{children:"apply"}),"/",e.jsx("code",{children:"bind"})," don’t change ",e.jsx("code",{children:"this"})," for arrows."]}),e.jsxs("li",{children:["Arrows cannot be used with ",e.jsx("code",{children:"new"})," and have no ",e.jsx("code",{children:"prototype"}),"."]})]}),e.jsx(o.Code,{children:`// No 'arguments' in arrows:
const listArgs = (...args) => args;
console.log(listArgs(1, "a", true));       // [1, "a", true]

// call/apply/bind don't affect 'this' on arrows:
const obj = { id: 42 };
const getId = () => this?.id;              // 'this' from outer scope
console.log(getId.call(obj));              // undefined

// ❌ Arrow as constructor → TypeError
const Person = (name) => { this.name = name; };
// new Person("Ash"); // TypeError: Person is not a constructor`}),e.jsx("h3",{children:"D) Common use-cases"}),e.jsx(o.Code,{children:`// Array utilities
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
console.log(clamp(3, 0, 5));               // 3`}),e.jsx("h3",{children:"E) Pitfalls (and fixes)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Object methods:"})," avoid arrows when a method needs ",e.jsx("code",{children:"this"}),". Use method syntax."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning object literal:"})," wrap in ",e.jsx("code",{children:"(...)"})," or you’ll return ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multiline:"})," with braces, add an explicit ",e.jsx("code",{children:"return"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Constructors:"})," never use arrows with ",e.jsx("code",{children:"new"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"arguments"}),":"]})," use rest params ",e.jsx("code",{children:"(...args)"})," instead."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use arrows for small functions and callbacks."}),e.jsxs("li",{children:["Use normal functions for object/class methods that need ",e.jsx("code",{children:"this"}),"."]}),e.jsxs("li",{children:["Implicit return? → no braces. Returning object? → wrap in ",e.jsx("code",{children:"( )"}),"."]}),e.jsxs("li",{children:["Need parameters list? Use defaults, destructuring, or ",e.jsx("code",{children:"...rest"}),"."]})]}),e.jsx(o.Divider,{})]})}function dm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="destructuring";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Destructuring (objects, arrays, parameters)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(um,{})})})]})}function um(){return e.jsxs(o.Content,{children:[e.jsx("p",{children:"Destructuring pulls values out of objects/arrays into variables. It's great for clean code, default values, renaming, and concise function parameters."}),e.jsx("h3",{children:"Core patterns"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Objects:"})," match by ",e.jsx("em",{children:"key name"}),", can rename and set defaults."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrays:"})," match by ",e.jsx("em",{children:"position"}),", can skip items and use rest."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameters:"})," destructure right in the function signature."]})]}),e.jsx(o.Divider,{}),e.jsx("h3",{children:"A) Object destructuring - basics, renaming, defaults"}),e.jsx(o.Code,{children:`const user = { id: 1, name: "Ash", role: "dev" };

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
console.log(publicUser);                      // { id: 1, name: "Ash" }`}),e.jsx("h3",{children:"B) Array destructuring - positions, skipping, defaults, rest"}),e.jsx(o.Code,{children:`const nums = [10, 20, 30, 40];

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
console.log(p, q);                            // 2 1`}),e.jsx("h3",{children:"C) Function parameters - object/array + defaults"}),e.jsx(o.Code,{children:`// Object param with defaults + renaming
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
// { id: 1, rest: { name: "Ash", role: "dev" } }`}),e.jsx("h3",{children:"D) Practical React patterns"}),e.jsx(o.Code,{children:`// 1) Props destructuring in function signature
function Button({ label = "Click", onClick, disabled = false }) {
  // ...
}

// 2) useState returns an array → array destructuring
const [count, setCount] = React.useState(0);
// count: 0 ; setCount: function

// 3) Destructure API response (object)
const resp = { data: { items: [1,2,3] }, status: 200 };
const { data: { items } = { items: [] }, status } = resp;
console.log(items, status);                   // [1,2,3] 200`}),e.jsx("h3",{children:"E) Destructuring with loops & utilities"}),e.jsx(o.Code,{children:`const scores = { alice: 8, bob: 6, charlie: 9 };

for (const [name, score] of Object.entries(scores)) {
  if (score >= 8) console.log(name, "⭐");   // "alice ⭐", "charlie ⭐"
}

// Map of pairs to objects
const pairs = [["id", 1], ["name", "Ash"]];
const obj = Object.fromEntries(pairs);
console.log(obj);                             // { id: 1, name: "Ash" }`}),e.jsx("h3",{children:"F) Spread vs Rest (quick contrast)"}),e.jsx(o.Code,{children:`// Rest (collect) in binding/params:
const { password, ...safe } = { user: "a2rp", password: "secret" };
console.log(safe);                            // { user: "a2rp" }

// Spread (expand) in literals:
const base = { id: 1, name: "Ash" };
const clone = { ...base, role: "admin" };
console.log(clone);                           // { id: 1, name: "Ash", role: "admin" }`}),e.jsx("h3",{children:"G) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Object vs Array:"})," objects match by key; arrays by position."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Defaults run on ",e.jsx("code",{children:"undefined"})]})," (not on ",e.jsx("code",{children:"null"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Safe nested:"})," give a default to the parent (",e.jsx("code",{children:"{ meta: {} }"}),") to avoid errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rename to avoid conflicts:"})," ",e.jsx("code",{children:"const { id: userId } = user"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep it readable:"})," deep/nested destructuring is powerful-don't overdo it."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use object destructuring for clarity and defaults."}),e.jsx("li",{children:"Use array destructuring for positions and quick swaps."}),e.jsx("li",{children:"Destructure props & hook returns right at the top."}),e.jsxs("li",{children:["Use rest (",e.jsx("code",{children:"...rest"}),") to exclude or gather extras; spread to clone/extend."]})]}),e.jsx(o.Divider,{})]})}function hm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="rest-and-spread";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Rest & spread (arrays, objects, params)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(pm,{})})})]})}function pm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["**Spread** ",e.jsx("code",{children:"..."})," copies/expands values into a new literal.",e.jsx("br",{}),"**Rest** ",e.jsx("code",{children:"..."})," gathers the remaining values into a single variable (in bindings or parameter lists)."]}),e.jsx("h3",{children:"A) Spread - Arrays"}),e.jsx(o.Code,{children:`const a = [1, 2];
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
console.log([..."hey"]);               // ["h", "e", "y"]`}),e.jsx("h3",{children:"B) Rest - Arrays & bindings"}),e.jsx(o.Code,{children:`const nums = [10, 20, 30, 40];

const [head, ...tail] = nums;
console.log(head);                     // 10
console.log(tail);                     // [20, 30, 40]

// skip with commas + rest
const [, second, ...rest] = nums;
console.log(second);                   // 20
console.log(rest);                     // [30, 40]`}),e.jsx("h3",{children:"C) Spread - Objects"}),e.jsx(o.Code,{children:`const base = { id: 1, name: "Ash" };

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
console.log(user.info.score);          // 9  (same inner object reference)`}),e.jsx("h3",{children:"D) Rest - Object properties"}),e.jsx(o.Code,{children:`const user = { id: 1, name: "Ash", password: "secret", role: "dev" };

// pick some, gather the rest
const { password, ...publicUser } = user;
console.log(publicUser);               // { id: 1, name: "Ash", role: "dev" }

// rename + rest
const { id: userId, ...rest } = user;
console.log(userId);                   // 1
console.log(rest.role);                // "dev"`}),e.jsx("h3",{children:"E) Parameters: defaults, rest & spread"}),e.jsx(o.Code,{children:`// rest in params (collects arguments)
const sum = (...nums) => nums.reduce((a, n) => a + n, 0);
console.log(sum(1, 2, 3));             // 6

// default params + rest
const makeUrl = (base = "/", ...parts) => base + parts.join("/");
console.log(makeUrl("/api", "v1", "users")); // "/api/v1/users"

// spread when calling
const pair = [4, 6];
console.log(sum(...pair));             // 10

// NOTE: rest must be last
// const bad = (a, ...rest, b) => {}   // ❌ SyntaxError`}),e.jsx("h3",{children:"F) Practical React patterns"}),e.jsx(o.Code,{children:`// 1) Update array state immutably
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
console.log(finalProps.disabled);      // true`}),e.jsx("h3",{children:"G) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Shallow copies only:"})," spread does not deep-clone nested objects/arrays."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Order matters:"})," in object spreads, later keys overwrite earlier keys."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance:"})," for very large arrays/objects, repeated spreads can be costly-batch updates when possible."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rest vs spread:"})," rest collects in bindings/params; spread expands in literals/calls."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use spread to clone/merge immutably."}),e.jsx("li",{children:"Use rest in destructuring and function params to gather extras."}),e.jsx("li",{children:"Remember: shallow copy-be careful with nested structures."}),e.jsx("li",{children:"In objects, put overrides last so they win."})]}),e.jsx(o.Divider,{})]})}function fm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="template-literals";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Template literals (interpolation, multiline, tags)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(mm,{})})})]})}function mm(){return e.jsxs(o.Content,{children:["Template literals use backticks ",e.jsx("code",{children:"`"})," to make strings easier:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:" interpolation "})," with ",e.jsxs("code",{children:["$","{ ... }"]}),","]}),e.jsxs("li",{children:[e.jsx("strong",{children:" multiline "})," strings, and ",e.jsx("strong",{children:" tagged templates"}),"."]})]}),e.jsx("h3",{children:"A) Basics - interpolation & multiline"}),e.jsx(o.Code,{children:`const name = "Ash";
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
console.log(\`Total: \${taxed(100)}\`);       // "Total: 118"`}),e.jsxs("h3",{children:["B) Expressions inside ",e.jsxs("code",{children:["$","{ ... }"]})]}),e.jsx(o.Code,{children:`const a = 3, b = 5;
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
// 'user={"id":1,"name":"Ash"}'`}),e.jsxs("h3",{children:["C) Escaping backticks & ",e.jsxs("code",{children:["$","{ ... }"]})]}),e.jsx(o.Code,{children:'// Escape a backtick inside a template with \\`\nconst s = `Use a backtick like: \\`this\\``;\nconsole.log(s);                              // "Use a backtick like: `this`"\n\n// To show ${...} literally, escape the \'$\' or wrap in a normal string\nconsole.log(`Show \\${x} literally`);      // "Show ${x} literally"'}),e.jsx("h3",{children:"D) Tagged templates (advanced but useful)"}),e.jsxs("p",{children:["A ",e.jsx("em",{children:"tag"})," is a function that receives the string parts and the evaluated values. You can format, sanitize, or highlight values."]}),e.jsx(o.Code,{children:`// Simple highlight tag: wrap values in [brackets]
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
showRaw\`line1\\nline2\`;                      // prints "line1\\nline2"`}),e.jsxs("h3",{children:["E) ",e.jsx("code",{children:"String.raw"})," (keep backslashes)"]}),e.jsx(o.Code,{children:`// Useful for regex, paths, or copy-paste snippets
const raw = String.raw\`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(raw);                              // "C:\\Users\\Ash\\nNewLine"

// Compare with normal template:
const normal = \`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(normal);
// "C:\\Users\\Ash
// NewLine"`}),e.jsx("h3",{children:"F) Practical patterns"}),e.jsx(o.Code,{children:`// 1) Build URLs safely with encodeURIComponent
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
console.log(label(3));                         // "3 items"`}),e.jsx("h3",{children:"G) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Don't over-nest logic"})," inside ",e.jsxs("code",{children:["$","{ ... }"]}),"; extract helpers for readability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Escape backticks"})," with ",e.jsx("code",{children:"\\\\`"})," when you must include them literally."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"JSON.stringify"})]})," to embed objects safely."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Beware of whitespace"}),": multiline templates keep your indentation/spaces."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For raw backslashes"}),", prefer ",e.jsx("code",{children:"String.raw"})," or a tag."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use backticks for interpolation and multiline strings."}),e.jsx("li",{children:"Keep complex logic out of templates-call helpers instead."}),e.jsxs("li",{children:["Escape backticks and ",e.jsx("code",{children:"$"})," when showing them literally."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"String.raw"})," or tagged templates for special formatting."]})]}),e.jsx(o.Divider,{})]})}function xm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="default-parameters";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Default parameters (practical patterns & pitfalls)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(jm,{})})})]})}function jm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Default parameters set a value when an argument is ",e.jsxs("strong",{children:["explicitly ",e.jsx("code",{children:"undefined"})]}),". They do ",e.jsx("em",{children:"not"})," trigger for ",e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:"false"}),", or ",e.jsx("code",{children:'""'}),"."]}),e.jsxs("h3",{children:["A) Basics - only when arg is ",e.jsx("code",{children:"undefined"})]}),e.jsx(o.Code,{children:`function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet("Ash"));        // "Hello, Ash"
console.log(greet());             // "Hello, Guest"  (no arg → undefined)
console.log(greet(undefined));    // "Hello, Guest"
console.log(greet(null));         // "Hello, null"   (null ≠ undefined)`}),e.jsx("h3",{children:"B) Defaults with expressions (evaluated only when used)"}),e.jsx(o.Code,{children:`let calls = 0;
function expensive() { calls++; return 99; }

function demo(a = expensive()) {
  return a;
}

console.log(demo(5));             // 5        (expensive() NOT called)
console.log(demo());              // 99       (expensive() called)
console.log(calls);               // 1`}),e.jsx("h3",{children:"C) Using earlier params in later defaults (allowed)"}),e.jsx(o.Code,{children:`function area(w = 1, h = w) {
  return w * h;
}
console.log(area(3));             // 9  (h defaults to w)
console.log(area(3, 4));          // 12

// The reverse is NOT allowed (can't use a later param in an earlier default):
// function bad(a = b, b = 1) {}   // ❌ ReferenceError at call time`}),e.jsx("h3",{children:"D) Destructuring + defaults (object & array)"}),e.jsx(o.Code,{children:`// Object param with its own default AND property defaults
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
console.log(sumPair());            // 0`}),e.jsx("h3",{children:"E) Defaults vs logical OR (don't break on falsey values)"}),e.jsx(o.Code,{children:`// Using defaults keeps 0 / false / "" intact:
function padLeft(str, n = 0) { return " ".repeat(n) + str; }
console.log(padLeft("X", 0));      // "X"  (0 kept)

// naive || fallback would override 0:
function padLeftBad(str, n) { n = n || 2; return " ".repeat(n) + str; }
console.log(padLeftBad("X", 0));   // "  X"  (oops)`}),e.jsx("h3",{children:"F) With rest & spread (what's valid)"}),e.jsx(o.Code,{children:`const sum = (...nums) => nums.reduce((a,n) => a + n, 0);
console.log(sum(1,2,3));           // 6

// Rest must come last and cannot have a default:
// const bad = (...nums = []) => 0  // ❌ SyntaxError

// Spreading into a call works as usual
console.log(sum(...[4,6]));        // 10`}),e.jsx("h3",{children:"G) Practical React patterns"}),e.jsx(o.Code,{children:`// 1) Default simple props in the signature
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
console.log(Price({ amount: 100, tax: 5 })); // 105`}),e.jsx("h3",{children:"H) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Only undefined triggers"})," the default (not ",e.jsx("code",{children:"null"})," or other falsey values)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Order matters:"})," you can use previous params in later defaults, not the other way around."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Evaluate-on-demand:"})," expensive defaults run only when the arg is missing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Destructuring + defaults:"})," give the whole param a default object/array to avoid errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"React:"})," prefer prop defaults in the function signature; keep objects stable to avoid re-renders."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use defaults instead of ",e.jsx("code",{children:"||"}),' when 0/""/false are valid inputs.']}),e.jsx("li",{children:"Put cheaper params first; compute later defaults from earlier ones if needed."}),e.jsxs("li",{children:["For params that are objects/arrays, default the whole param too (",e.jsx("code",{children:"{}"})," or ",e.jsx("code",{children:"[]"}),")."]})]}),e.jsx(o.Divider,{})]})}function gm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="optional-chaining";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsxs("span",{children:["Optional chaining ",e.jsx("code",{children:"?."})," (safer nested access & calls)"]})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(ym,{})})})]})}function ym(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Optional chaining"})," returns ",e.jsx("code",{children:"undefined"})," instead of throwing if the part on the ",e.jsx("em",{children:"left"})," of ",e.jsx("code",{children:"?."})," is ",e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"}),". It ",e.jsx("em",{children:"does not"})," short-circuit for other falsey values like ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:"false"}),", or ",e.jsx("code",{children:'""'}),"."]}),e.jsx("h3",{children:"A) Property & element access"}),e.jsx(o.Code,{children:`const user = { id: 1, profile: { email: "a@b.com" } };

console.log(user?.profile?.email);        // "a@b.com"
console.log(user?.settings?.theme);       // undefined (no throw)

// element access with []
const prefKey = "theme";
console.log(user?.prefs?.[prefKey]);      // undefined

// arrays
const arr = [10, 20, 30];
console.log(arr?.[0]);                    // 10
const maybe = null;
console.log(maybe?.[0]);                  // undefined (safe)`}),e.jsx("h3",{children:"B) Optional call (functions & methods)"}),e.jsx(o.Code,{children:`const maybeCb = undefined;
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
console.log(nothing?.inc?.());            // undefined`}),e.jsx("h3",{children:"C) Combine with a default (preview for next topic)"}),e.jsx(o.Code,{children:`const api = { data: { items: [1,2,3] } };
const first = api?.data?.items?.[0] ?? null;
console.log(first);                        // 1

const missing = {};
console.log(missing?.data?.items?.[0] ?? "none"); // "none"`}),e.jsxs("h3",{children:["D) vs ",e.jsx("code",{children:"&&"})," (truthy check)"]}),e.jsx(o.Code,{children:`const n = 0;
console.log(n && n.toString());           // 0   (short-circuits on falsy 0)
console.log(n?.toString());               // "0" (0 is not null/undefined, so it proceeds)`}),e.jsx("h3",{children:"E) Practical React / DOM patterns"}),e.jsx(o.Code,{children:`// React props / API responses
const title = props?.post?.title ?? "Untitled";
const firstItem = resp?.data?.items?.[0] ?? null;

// Safe event access
const handle = (e) => {
  const id = e?.currentTarget?.dataset?.id ?? "unknown";
  // ...
};

// DOM query
document.querySelector("#title")?.scrollIntoView({ behavior: "smooth" });`}),e.jsx("h3",{children:"F) Pitfalls & rules"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Only guard what's left of ",e.jsx("code",{children:"?."}),":"]})," write each uncertain hop as ",e.jsx("code",{children:"?."})," (",e.jsx("code",{children:"a?.b?.c"}),"), not ",e.jsx("code",{children:"a?.b.c"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not an lvalue:"})," you can't assign to it — ",e.jsx("code",{children:"obj?.prop = 1"})," ❌ (SyntaxError)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Doesn't mask real errors:"})," if a function exists but throws, ",e.jsx("code",{children:"?."})," won't catch that."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Don't overuse:"})," if something should exist by contract, validate up-front instead of chaining everywhere."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"?."})," for uncertain hops; chain it per level."]}),e.jsxs("li",{children:["It short-circuits only on ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:["Pair with ",e.jsx("code",{children:"??"})," (next topic) to provide clean defaults."]}),e.jsxs("li",{children:["For methods, prefer ",e.jsx("code",{children:"obj?.method?.()"})," to preserve ",e.jsx("code",{children:"this"}),"."]})]}),e.jsx(o.Divider,{})]})}function vm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="nullish-coalescing";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsxs("span",{children:["Nullish coalescing ",e.jsx("code",{children:"??"})," (clean fallbacks)"]})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(wm,{})})})]})}function wm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:e.jsx("code",{children:"??"})})," returns the right-hand value ",e.jsx("em",{children:"only if"})," the left-hand side is ",e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"}),' (aka "nullish"). It keeps valid falsey values like ',e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:"false"}),", and ",e.jsx("code",{children:'""'}),"."]}),e.jsx("h3",{children:"A) Basics — only null/undefined trigger the fallback"}),e.jsx(o.Code,{children:`console.log(null ?? "fallback");         // "fallback"
console.log(undefined ?? "fallback");    // "fallback"

// falsey but NOT nullish → left value is kept
console.log(0 ?? 100);                   // 0
console.log(false ?? true);              // false
console.log("" ?? "N/A");                // ""`}),e.jsxs("h3",{children:["B) vs ",e.jsx("code",{children:"||"})," (truthy check)"]}),e.jsx(o.Code,{children:`// || uses truthiness → will replace 0/""/false
console.log(0 || 100);                   // 100   (oops)
console.log(0 ?? 100);                   // 0     (correct when 0 is valid)

console.log("" || "N/A");                // "N/A" (oops)
console.log("" ?? "N/A");                // ""    (keep empty string)`}),e.jsx("h3",{children:"C) With optional chaining (common pattern)"}),e.jsx(o.Code,{children:`const resp = { data: { items: [1,2,3] } };

const first = resp?.data?.items?.[0] ?? null;
console.log(first);                       // 1

const missing = {};
const list = missing?.data?.items ?? [];
console.log(Array.isArray(list), list.length); // true 0`}),e.jsxs("h3",{children:["D) Precedence & mixing with ",e.jsx("code",{children:"&&"}),"/",e.jsx("code",{children:"||"})]}),e.jsx(o.Code,{children:`// You cannot mix ?? with &&/|| without parentheses:
// const bad = null ?? 0 || 5;           // ❌ SyntaxError

const v1 = (null ?? 0) || 5;
console.log(v1);                          // 5   (0 || 5 → 5)

const v2 = null ?? (0 || 5);
console.log(v2);                          // 5   (0 || 5 → 5)

const v3 = (undefined ?? 7) && "ok";
console.log(v3);                          // "ok"`}),e.jsxs("h3",{children:["E) Nullish coalescing assignment ",e.jsx("code",{children:"??="})]}),e.jsx(o.Code,{children:`let a = null;
a ??= 10;
console.log(a);                           // 10

let b = 0;
b ??= 5;                                  // left is NOT null/undefined
console.log(b);                           // 0 (kept)

const cfg = { retries: undefined };
cfg.retries ??= 3;
console.log(cfg.retries);                 // 3`}),e.jsx("h3",{children:"F) Edge cases (NaN, empty arrays/objects)"}),e.jsx(o.Code,{children:`const n = NaN;
console.log(n ?? 0);                      // NaN (not nullish)
console.log(Number.isNaN(n) ? 0 : n);     // 0   (explicit fallback for NaN)

const arr = [];
console.log((arr ?? ["x"]).length);       // 0 (arr is not nullish)

const obj = {};
console.log((obj ?? { a: 1 }));           // {} (obj is not nullish)`}),e.jsx("h3",{children:"G) Practical React patterns"}),e.jsx(o.Code,{children:`// 1) Safe prop fallbacks (keep 0/false/"")
const label = props?.label ?? "—";
const disabled = props?.disabled ?? false;

// 2) Controlled inputs: avoid undefined
const value = form?.name ?? "";

// 3) API defaults
const items = resp?.data?.items ?? [];
const total = resp?.data?.total ?? 0;

// 4) Optional callback call
props?.onSelect?.(id ?? 0);               // combine ?. and ??`}),e.jsx("h3",{children:"H) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"??"}),' when 0/""/false are valid']})," and should not trigger a fallback."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Prefer ",e.jsx("code",{children:"a?.b ?? default"})]})," for uncertain chains with defaults."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Add parentheses"})," when mixing with ",e.jsx("code",{children:"&&"})," or ",e.jsx("code",{children:"||"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"NaN is not nullish"}),": coalesce explicitly if you need a number fallback."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Left side null/undefined? → returns right side; otherwise returns left."}),e.jsxs("li",{children:["Don't replace valid falsey values—use ",e.jsx("code",{children:"??"}),", not ",e.jsx("code",{children:"||"}),"."]}),e.jsxs("li",{children:["Pair with ",e.jsx("code",{children:"?."}),' to avoid "cannot read property" errors.']}),e.jsxs("li",{children:["Consider ",e.jsx("code",{children:"??="}),' for concise "set if missing".']})]}),e.jsx(o.Divider,{})]})}function km({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="map-filter-reduce";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Map / Filter / Reduce (transform, select, aggregate)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(bm,{})})})]})}function bm(){return e.jsxs(o.Content,{children:[e.jsxs("div",{style:{marginBottom:"30px"},children:["Three array workhorses:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"map"})," transforms each item,"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"filter"})," keeps matching items, and "]}),e.jsxs("li",{children:[e.jsx("strong",{children:"reduce"})," folds many values into one (sum, object, etc.)."]})]}),"All return ",e.jsx("em",{children:" new arrays/values"})," and do not mutate the original."]}),e.jsx("h3",{children:"A) map - transform each item"}),e.jsx(o.Code,{children:`const nums = [1, 2, 3];
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
console.log(["10","11","12"].map(Number));    // [10, 11, 12]`}),e.jsx("h3",{children:"B) filter - keep items that pass the test"}),e.jsx(o.Code,{children:`const arr = [1, 2, 3, 4, 5, 6];
const evens = arr.filter(n => n % 2 === 0);
console.log(evens);                           // [2, 4, 6]

// Remove null/undefined quickly
const messy = [0, null, "hi", undefined, false];
console.log(messy.filter(Boolean));           // ["hi"] (drops 0/false too!)
console.log(messy.filter(v => v != null));    // [0, "hi", false] (keeps 0/false)

// Unique with filter + indexOf
const dups = [2,2,3,3,3,1];
const unique = dups.filter((n, i, a) => a.indexOf(n) === i);
console.log(unique);                          // [2, 3, 1]`}),e.jsx("h3",{children:"C) reduce - fold into a single value"}),e.jsx(o.Code,{children:`const nums = [5, 2, 7];

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
console.log(Object.keys(groups));             // ["A", "B"]`}),e.jsx("h3",{children:"D) Chain them - readable pipelines"}),e.jsx(o.Code,{children:`const nums = [1,2,3,4,5,6];
const result = nums
  .filter(n => n % 2 === 0)   // keep evens → [2,4,6]
  .map(n => n * n)            // square     → [4,16,36]
  .reduce((a, n) => a + n, 0);// sum        → 56
console.log(result);                          // 56`}),e.jsx("h3",{children:"E) Immutability & side-effects"}),e.jsx(o.Code,{children:`const a = [1,2,3];

// Do NOT mutate the same array while mapping/filtering
// Bad:
const bad = a.map(n => { a.push(99); return n; });
console.log(a.length, bad.length);            // 6 3 (weird bugs)

// Good: treat callbacks as pure functions
const good = a.map(n => n * 10);
console.log(good);                            // [10, 20, 30]`}),e.jsx("h3",{children:"F) Practical React patterns"}),e.jsx(o.Code,{children:`// 1) Render lists
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
// <li key={todo.id}>...</li>`}),e.jsx("h3",{children:"G) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"map"})," must return a value each time; forgetting a return gives an array of undefined."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"filter"})," expects a boolean; return the condition directly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"reduce"}),": always provide an initial value (especially for empty arrays)."]}),e.jsxs("li",{children:["For deep transforms, consider ",e.jsx("code",{children:"flatMap"})," or a single well-named ",e.jsx("code",{children:"reduce"})," for clarity."]}),e.jsx("li",{children:"Don't mutate items inside callbacks; return new objects/arrays."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Transform → ",e.jsx("strong",{children:"map"}),"; select → ",e.jsx("strong",{children:"filter"}),"; aggregate → ",e.jsx("strong",{children:"reduce"}),"."]}),e.jsx("li",{children:"Keep callbacks pure; no side-effects."}),e.jsxs("li",{children:["Give ",e.jsx("code",{children:"reduce"})," an initial accumulator."]}),e.jsx("li",{children:"Prefer pipeline readability over micro-optimizing chains."})]}),e.jsx(o.Divider,{})]})}function Cm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="find-some-every";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Find / Some / Every (search, any, all)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Sm,{})})})]})}function Sm(){return e.jsxs(o.Content,{children:[e.jsxs("div",{style:{marginBottom:"30px"},children:["Three quick checks:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"find"})," returns the first matching item,"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"some"})," tells if ",e.jsx("em",{children:"any"})," matches, and"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"every"})," checks if ",e.jsx("em",{children:" all"})," match."]})]}),"They do not mutate the array and they short-circuit."]}),e.jsxs("h3",{children:["A) ",e.jsx("code",{children:"find"})," - get the first matching element"]}),e.jsx(o.Code,{children:`const users = [
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
console.log(users.find(u => u.name === "Foo")?.id ?? "NA"); // "NA"`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"some"})," - does any element pass?"]}),e.jsx(o.Code,{children:`const nums = [1, 3, 5, 8];

console.log(nums.some(n => n % 2 === 0));      // true  (8 is even)
console.log(nums.some(n => n > 10));           // false

// Practical: any item out of stock?
const cart = [{ id: 1, qty: 2 }, { id: 2, qty: 0 }];
console.log(cart.some(item => item.qty === 0)); // true`}),e.jsxs("h3",{children:["C) ",e.jsx("code",{children:"every"})," - do all elements pass?"]}),e.jsx(o.Code,{children:`const scores = [7, 8, 9];

console.log(scores.every(s => s >= 7));         // true
console.log(scores.every(s => s >= 9));         // false

// NOTE: empty arrays
console.log([].every(x => x > 0));              // true  (vacuously true)
console.log([].some(x => x > 0));               // false`}),e.jsx("h3",{children:"D) Objects & deep checks"}),e.jsx(o.Code,{children:`const people = [
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
console.log(people.every(p => p.tags.includes("dev")));   // false`}),e.jsxs("h3",{children:["E) Compare with ",e.jsx("code",{children:"includes"})," (value vs predicate)"]}),e.jsx(o.Code,{children:`// includes checks values (strict equality), not conditions:
console.log([1,2,3].includes(2));              // true
// find/some let you write a predicate:
console.log([1,2,3].some(n => n > 2));         // true`}),e.jsx("h3",{children:"F) Performance & short-circuiting"}),e.jsx(o.Code,{children:`// these stop early:
// - find: after first match
// - some: after first true
// - every: after first false

let steps = 0;
[1,2,3,4].some(n => (steps++, n > 2));
console.log(steps);                             // 3 (stopped at 3)`}),e.jsx("h3",{children:"G) Practical React patterns"}),e.jsx(o.Code,{children:`// 1) Validation: all fields valid?
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
// if (!todo) return null;`}),e.jsx("h3",{children:"H) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"find"})," can return ",e.jsx("code",{children:"undefined"})," - guard with ",e.jsx("code",{children:"?."})," or a default."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"every"})," on an empty array returns ",e.jsx("code",{children:"true"}),"; ",e.jsx("strong",{children:"some"})," returns ",e.jsx("code",{children:"false"}),"."]}),e.jsxs("li",{children:["Predicates should be ",e.jsx("strong",{children:"pure"})," (no side-effects) for predictable behavior."]}),e.jsx("li",{children:"For large lists, these short-circuit - keep the cheap checks first in your predicate."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Need the item itself? → ",e.jsx("strong",{children:"find"}),"."]}),e.jsxs("li",{children:["Need a yes/no if ",e.jsx("em",{children:"any"}),"? → ",e.jsx("strong",{children:"some"}),"."]}),e.jsxs("li",{children:["Need a yes/no if ",e.jsx("em",{children:"all"}),"? → ",e.jsx("strong",{children:"every"}),"."]}),e.jsxs("li",{children:["Remember undefined from ",e.jsx("code",{children:"find"}),"; handle it safely."]})]}),e.jsx(o.Divider,{})]})}function Rm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="sort-without-mutating";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsxs("span",{children:["Sort (without mutating) - ",e.jsx("code",{children:"toSorted"}),", copy+sort"]})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Pm,{})})})]})}function Pm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"Array.prototype.sort()"})," sorts ",e.jsx("em",{children:"in place"})," (it ",e.jsx("strong",{children:"mutates"})," the array). For immutable code, use ",e.jsx("code",{children:"toSorted()"})," (best) or clone first and then ",e.jsx("code",{children:"sort()"}),"."]}),e.jsx("h3",{children:"A) The mutation gotcha"}),e.jsx(o.Code,{children:`const a = [3, 1, 2];
const b = a.sort();                 // MUTATES 'a'
console.log(a);                     // [1, 2, 3]
console.log(b);                     // [1, 2, 3] (same reference)
`}),e.jsx("h3",{children:"B) Safe patterns (no mutation)"}),e.jsx(o.Code,{children:`// 1) Modern: toSorted (returns a new array)
const nums = [3, 10, 2];
const asc = nums.toSorted((x, y) => x - y);
console.log(nums);                  // [3, 10, 2]  (unchanged)
console.log(asc);                   // [2, 3, 10]

// 2) Classic: copy then sort
const copyAsc = [...nums].sort((x, y) => x - y);
console.log(copyAsc);               // [2, 3, 10]
`}),e.jsx("h3",{children:"C) Numbers - ascending/descending"}),e.jsx(o.Code,{children:`const n = [10, 2, 5, 1];

// Default sort is lexicographic (strings) - wrong for numbers:
console.log([...n].sort());         // [1, 10, 2, 5]  (not numeric)

// Correct numeric comparators:
const asc = n.toSorted((a, b) => a - b);
console.log(asc);                   // [1, 2, 5, 10]

const desc = n.toSorted((a, b) => b - a);
console.log(desc);                  // [10, 5, 2, 1]
`}),e.jsx("h3",{children:"D) Strings - locale & case"}),e.jsx(o.Code,{children:`const cities = ["mumbai", "Delhi", "bengaluru"];

// ASCII compare (case-sensitive)
console.log([...cities].sort());    
// ["Delhi", "bengaluru", "mumbai"]

// Locale/case-insensitive + numeric aware
const nice = cities.toSorted((a, b) => 
  a.localeCompare(b, "en-IN", { sensitivity: "base", numeric: true })
);
console.log(nice);
// ["bengaluru", "Delhi", "mumbai"]
`}),e.jsx("h3",{children:"E) Dates - by timestamp"}),e.jsx(o.Code,{children:`const dates = [new Date("2025-01-01"), new Date("2024-12-31")];
const byTime = dates.toSorted((a, b) => a - b);
console.log(byTime.map(d => d.toISOString().slice(0,10)));
// ["2024-12-31", "2025-01-01"]
`}),e.jsx("h3",{children:"F) Objects - by field, with nulls-last"}),e.jsx(o.Code,{children:`const people = [
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
`}),e.jsx("h3",{children:"G) Multi-key sort (tie-breakers)"}),e.jsx(o.Code,{children:`const rows = [
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
`}),e.jsx("h3",{children:"H) React-friendly patterns"}),e.jsx(o.Code,{children:`// 1) Never mutate props/state directly
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
`}),e.jsx("h3",{children:"I) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default sort is string-based."})," Always pass a comparator for numbers/dates."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"sort()"})," mutates."]})," Prefer ",e.jsx("code",{children:"toSorted()"})," or clone before sorting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Locale/case rules:"})," use ",e.jsx("code",{children:"localeCompare"})," with options for user-facing text."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nulls/undefined:"})," coerce to sentinel values (e.g., ",e.jsx("code",{children:"Infinity"}),") or handle explicitly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multi-key:"})," chain with ",e.jsx("code",{children:"||"})," returning the first non-zero comparison."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Immutable? → ",e.jsx("code",{children:"toSorted"})," (best) or ",e.jsx("code",{children:"[...arr].sort(cmp)"}),"."]}),e.jsxs("li",{children:["Numbers/dates → numeric comparator (",e.jsx("code",{children:"a-b"}),")."]}),e.jsxs("li",{children:["Strings for UI → ",e.jsx("code",{children:"localeCompare"})," with options."]}),e.jsx("li",{children:"Define small, pure comparators; reuse them."})]}),e.jsx(o.Divider,{})]})}function Em({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="flat-and-flatmap";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Flat / FlatMap (flatten arrays & map+flatten)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Tm,{})})})]})}function Tm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"flat"})," removes one or more levels of nesting and returns a ",e.jsx("strong",{children:"new array"}),".",e.jsx("code",{children:" flatMap"})," = ",e.jsx("code",{children:"map"})," then ",e.jsx("code",{children:"flat(1)"})," in a single pass."]}),e.jsxs("h3",{children:["A) ",e.jsx("code",{children:"flat"})," - basics & depth"]}),e.jsx(o.Code,{children:`const a = [1, [2, 3], [4, [5]]];

console.log(a.flat());                 // [1, 2, 3, 4, [5]]       (default depth = 1)
console.log(a.flat(2));                // [1, 2, 3, 4, 5]
console.log(a.flat(Infinity));         // [1, 2, 3, 4, 5]         (flatten all levels)

// Original is unchanged:
console.log(a);                        // [1, [2,3], [4, [5]]]`}),e.jsx("h3",{children:"B) Holes (sparse arrays) are removed"}),e.jsx(o.Code,{children:`const sparse = [1, , 3, [ , 4 ]];
// flat removes empty slots
console.log(sparse.flat());            // [1, 3, 4]`}),e.jsxs("h3",{children:["C) ",e.jsx("code",{children:"flatMap"})," - map then flatten once"]}),e.jsx(o.Code,{children:`const sentences = ["hi there", "good day"];
// split words from each sentence and flatten
const words = sentences.flatMap(s => s.split(" "));
console.log(words);                    // ["hi", "there", "good", "day"]

// Equivalent two-step:
console.log(sentences.map(s => s.split(" ")).flat());
// [["hi","there"],["good","day"]] → ["hi","there","good","day"]

// Remove nulls while mapping:
const items = [1, null, 2, null];
const cleaned = items.flatMap(x => (x == null ? [] : [x]));
console.log(cleaned);                  // [1, 2]`}),e.jsx("h3",{children:"D) API pagination → flatten pages"}),e.jsx(o.Code,{children:`const pages = [
  { items: [1, 2] },
  { items: [3] },
  { items: [] },
];
const all = pages.flatMap(p => p.items);
console.log(all);                      // [1, 2, 3]`}),e.jsx("h3",{children:"E) Nested mapping patterns"}),e.jsx(o.Code,{children:`// turn groups -> list of user ids
const groups = [
  { team: "A", users: [{id:1},{id:2}] },
  { team: "B", users: [{id:3}] },
];
const userIds = groups.flatMap(g => g.users.map(u => u.id));
console.log(userIds);                  // [1, 2, 3]

// one level only! deeper arrays need an extra flat:
const deep = [ [ [1] ], [ [2, 3] ] ];
console.log(deep.flatMap(x => x).flat()); // [[1], [2, 3]] → [1, 2, 3]`}),e.jsx("h3",{children:"F) React-friendly patterns"}),e.jsx(o.Code,{children:`// 1) Flatten sectioned menu items before rendering
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
console.log(propsObj);                 // { a:1, b:2, c:3 }`}),e.jsx("h3",{children:"G) Performance tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"flat"})," returns a copy; heavy flattening (",e.jsx("code",{children:"Infinity"}),") can allocate big arrays."]}),e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"flatMap"})," over ",e.jsx("code",{children:"map().flat()"})," for one-level cases (fewer passes)."]}),e.jsx("li",{children:"Keep mapping callbacks pure; avoid pushing into outer arrays inside the callback."})]}),e.jsx("h3",{children:"H) Pitfalls & gotchas"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Depth:"})," default is 1. If your output is still nested, pass a deeper depth or add another ",e.jsx("code",{children:"flat"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not deep merge:"})," flattening arrays of objects doesn't merge objects-just removes array nesting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sparse arrays:"})," empty slots are removed by ",e.jsx("code",{children:"flat"}),"; don't rely on their indexes later."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Legacy runtimes:"})," very old environments may lack ",e.jsx("code",{children:"flat/flatMap"}),"; consider a polyfill if needed."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Need to remove one nesting level? → ",e.jsx("strong",{children:"flat()"})," (or set ",e.jsx("em",{children:"depth"}),")."]}),e.jsxs("li",{children:["Need map + flatten(1) in one go? → ",e.jsx("strong",{children:"flatMap(fn)"}),"."]}),e.jsx("li",{children:"Watch out for sparse arrays-they collapse."}),e.jsxs("li",{children:["Avoid ",e.jsx("code",{children:"Infinity"})," unless you really need full flattening."]})]}),e.jsx(o.Divider,{})]})}function Nm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="object-utilities";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsxs("span",{children:["Object utilities: ",e.jsx("code",{children:"keys"}),", ",e.jsx("code",{children:"values"}),", ",e.jsx("code",{children:"entries"}),", ",e.jsx("code",{children:"assign"})]})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Im,{})})})]})}function Im(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Everyday helpers for working with plain objects: get keys/values/pairs, transform with",e.jsx("code",{children:" entries"})," ⟷ ",e.jsx("code",{children:"fromEntries"}),", and merge/clone with ",e.jsx("code",{children:"assign"}),". These work on an object's ",e.jsx("em",{children:"own enumerable string-keyed"})," properties (symbols are ignored)."]}),e.jsxs("h3",{children:["A) ",e.jsx("code",{children:"Object.keys"})," - list own keys (strings)"]}),e.jsx(o.Code,{children:`const user = { id: 1, name: "Ash" };
console.log(Object.keys(user));                    // ["id", "name"]

// Integer-like keys are ordered numerically first, then the rest by insertion:
const order = { "2": "two", "1": "one", a: "A" };
console.log(Object.keys(order));                   // ["1", "2", "a"]`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"Object.values"})," - list own values"]}),e.jsx(o.Code,{children:`const point = { x: 10, y: 20 };
console.log(Object.values(point));                 // [10, 20]`}),e.jsxs("h3",{children:["C) ",e.jsx("code",{children:"Object.entries"})," ⟷ ",e.jsx("code",{children:"Object.fromEntries"})]}),e.jsx(o.Code,{children:`const stats = { a: 1, b: 2 };
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
console.log(publicUser);                            // { id: 1, name: "Ash" }`}),e.jsxs("h3",{children:["D) ",e.jsx("code",{children:"Object.assign"})," - merge/clone (shallow) ⚠️ mutates target"]}),e.jsx(o.Code,{children:`const target = { a: 1 };
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
console.log(original.nested.x);                      // 2  (same inner object)`}),e.jsx("h3",{children:"E) Symbols & non-enumerables (FYI)"}),e.jsx(o.Code,{children:`const s = Symbol("s");
const obj = { a: 1, [s]: 2 };
console.log(Object.keys(obj));                       // ["a"] (symbols ignored)
console.log(Object.getOwnPropertySymbols(obj));      // [Symbol(s)]
// Non-enumerable props are also skipped by keys/values/entries`}),e.jsxs("h3",{children:["F) Practical transforms with ",e.jsx("code",{children:"entries"})]}),e.jsx(o.Code,{children:`// 1) Rename keys
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
console.log(invert({ a:1, b:2 }));                  // { "1":"a", "2":"b" }`}),e.jsx("h3",{children:"G) React-friendly patterns"}),e.jsx(o.Code,{children:`// 1) Render object as a list
const features = { darkMode: true, beta: false };
// Object.entries(features).map(([k, v]) => <li key={k}>{k}: {String(v)}</li>)

// 2) Merge default props/options (spread is equivalent to assign into {})
const defaults = { size: "md", disabled: false };
const final = { ...defaults, ...{ disabled: true } };  // or Object.assign({}, defaults, { disabled: true })
console.log(final);                                    // { size: "md", disabled: true }

// 3) Build object from pairs for quick lookup
const list = [{ id:1, name:"Ash" }, { id:2, name:"Riya" }];
const byId = Object.fromEntries(list.map(u => [u.id, u]));
console.log(byId[2].name);                              // "Riya"`}),e.jsx("h3",{children:"H) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"assign"})," mutates its first arg"]}),"; use ",e.jsx("code",{children:"Object.assign({}, a, b)"})," or spread for a new object."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shallow only:"})," both ",e.jsx("code",{children:"assign"})," and spread copy references for nested objects."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"keys/values/entries"})," ignore symbols & non-enumerables; use ",e.jsx("code",{children:"Object.getOwnPropertySymbols"})," / descriptors if needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Key order:"})," integer-like keys come first in ascending order, then others by insertion."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Transform/filter objects via ",e.jsx("code",{children:"entries → map/filter → fromEntries"}),"."]}),e.jsxs("li",{children:["Merge immutably with ",e.jsx("code",{children:"Object.assign({}, ...)"})," or spread."]}),e.jsx("li",{children:"Remember it's all shallow copies - be careful with nested state."}),e.jsxs("li",{children:["Need symbols? Grab them with ",e.jsx("code",{children:"Object.getOwnPropertySymbols"}),"."]})]}),e.jsx(o.Divider,{})]})}function Am({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="sets-and-maps";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Sets & Maps (when they help)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Om,{})})})]})}function Om(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Use a ",e.jsx("strong",{children:"Set"})," for unique values + fast ",e.jsx("code",{children:"has"})," checks. Use a ",e.jsx("strong",{children:"Map"})," for key→value where keys can be ",e.jsx("em",{children:"any type"})," (objects, arrays, functions), with stable iteration order."]}),e.jsx("h3",{children:"A) Set - unique values & fast membership"}),e.jsx(o.Code,{children:`const s = new Set([1, 2, 2, 3]);
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
console.log(unique([2,2,3,1,3]));          // [2, 3, 1]`}),e.jsx("h3",{children:"B) Set operations - union, intersection, difference"}),e.jsx(o.Code,{children:`const A = new Set([1,2,3]);
const B = new Set([3,4]);

const union = new Set([...A, ...B]);
console.log([...union]);                   // [1,2,3,4]

const intersection = new Set([...A].filter(x => B.has(x)));
console.log([...intersection]);            // [3]

const difference = new Set([...A].filter(x => !B.has(x)));
console.log([...difference]);              // [1,2]`}),e.jsx("h3",{children:"C) Map - key→value with any key type"}),e.jsx(o.Code,{children:`const m = new Map([["id", 1], ["name", "Ash"]]);
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
console.log(objFromMap);                          // { a: 1, b: 2 }`}),e.jsx("h3",{children:"D) When Sets/Maps help vs Arrays/Objects"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Set"}),": quick dedupe; O(1) membership checks (e.g., selected IDs, visited nodes)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Map"}),": non-string keys; predictable insertion order; avoids prototype pitfalls of objects."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Object"}),": best for JSON, simple string-keyed records, and ergonomic literals."]})]}),e.jsx("h3",{children:"E) WeakSet / WeakMap (lifetime tied to object keys)"}),e.jsx(o.Code,{children:`// WeakMap keys must be objects; entries are GC'd when keys are unreachable
const wm = new WeakMap();
let k = {};
wm.set(k, { meta: "cached" });
console.log(wm.has(k));                           // true
k = null; // after GC, entry may disappear (can't reliably log timing)`}),e.jsx("h3",{children:"F) Practical React patterns"}),e.jsx(o.Code,{children:`// 1) Selected IDs as a Set (immutable updates)
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
console.log(getSum(2,3), getSum(2,3));            // 5 5 (second from cache)`}),e.jsx("h3",{children:"G) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Not JSON-serializable:"})," ",e.jsx("code",{children:"Set"}),"/",e.jsx("code",{children:"Map"})," need conversion (e.g., ",e.jsx("code",{children:"[...set]"}),", ",e.jsx("code",{children:"Object.fromEntries(map)"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reference identity:"})," Map keys compare by reference; use the same object instance or a stable string key."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Iteration order:"})," Set/Map iterate in insertion order; use this for deterministic UI."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shallow semantics:"})," Sets don't deep-compare objects; two equal-shaped objects are different keys."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Need uniqueness or fast membership? → ",e.jsx("strong",{children:"Set"}),"."]}),e.jsxs("li",{children:["Need keys that aren't strings? → ",e.jsx("strong",{children:"Map"}),"."]}),e.jsx("li",{children:"Convert before JSON/storage; prefer objects for raw API payloads."}),e.jsx("li",{children:"For React state, clone Sets/Maps to new instances to trigger updates."})]}),e.jsx(o.Divider,{})]})}function Dm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="promises-async-await";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Promises & async/await (patterns, errors, concurrency)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Mm,{})})})]})}function Mm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Promise"})," represents a value that will resolve later.",e.jsx("strong",{children:"async/await"})," makes promise code read like sync code. Use ",e.jsx("code",{children:"try/catch"})," for errors, and prefer ",e.jsx("strong",{children:"concurrency"})," helpers (",e.jsx("code",{children:"Promise.all"}),", etc.) for speed."]}),e.jsx("h3",{children:"A) Make a Promise & basic handlers"}),e.jsx(o.Code,{children:`// Create a promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("OK"), 100);
});

p.then(v => console.log("then:", v))     // "then: OK"
 .catch(e => console.log("error:", e))
 .finally(() => console.log("done"));    // "done" (always runs)

// Shortcut: Promise.resolve / Promise.reject
Promise.resolve(42).then(x => console.log(x)); // 42`}),e.jsx("h3",{children:"B) Chain & propagate errors"}),e.jsx(o.Code,{children:`Promise.resolve(2)
  .then(x => x * 3)                        // 6
  .then(x => { throw new Error("boom"); })
  .then(() => "never")
  .catch(err => "handled: " + err.message)  // "handled: boom"
  .then(msg => console.log(msg));           // "handled: boom"`}),e.jsx("h3",{children:"C) async/await - sugar over promises"}),e.jsx(o.Code,{children:`async function work() {
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
console.log(work() instanceof Promise);    // true`}),e.jsx("h3",{children:"D) Concurrent vs sequential (speed matters)"}),e.jsx(o.Code,{children:`// Slow (sequential): waits one by one
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
fast().then(x => console.log("fast:", x)); // "fast: 2"`}),e.jsx("h3",{children:"E) Promise helpers - all / allSettled / race / any"}),e.jsx(o.Code,{children:`const ok = (v, ms=50) => new Promise(r => setTimeout(() => r(v), ms));
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
// Promise.any([fail("X",30), ok("Y",40)]).then(v => console.log(v));        // "Y"`}),e.jsx("h3",{children:"F) Fetch JSON helper + timeout (AbortController)"}),e.jsx(o.Code,{children:`// NOTE: Full "Fetch basics + JSON" is its own topic.
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
// fetchJSON("/api/users").then(data => console.log(Array.isArray(data))); // true/false`}),e.jsx("h3",{children:"G) Loops: forEach pitfall, use for...of or Promise.all"}),e.jsx(o.Code,{children:`const delay = ms => new Promise(r => setTimeout(r, ms));

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
conc([1,2]);   // fast`}),e.jsx("h3",{children:"H) Microtasks vs macrotasks (timing)"}),e.jsx(o.Code,{children:`console.log("A");
Promise.resolve().then(() => console.log("B (microtask)"));
setTimeout(() => console.log("C (macrotask)"), 0);
console.log("D");
// Order: A, D, B (microtask), C (macrotask)`}),e.jsx("h3",{children:"I) Tiny promisify utility"}),e.jsx(o.Code,{children:`// Convert a callback API into a promise-based one
const promisify = (fn) => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

// Example (simulated):
function legacySum(a, b, cb) { setTimeout(() => cb(null, a + b), 20); }
const sumP = promisify(legacySum);
sumP(2,3).then(v => console.log(v));           // 5`}),e.jsx("h3",{children:"J) Practical React pattern (fetch in effect + abort)"}),e.jsx(o.Code,{children:`// inside a component:
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
// }, []);`}),e.jsx("h3",{children:"K) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always return/await"})," promises you start; avoid unhandled rejections."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Don't mix styles"})," unnecessarily: pick ",e.jsx("em",{children:"either"})," ",e.jsx("code",{children:"then/catch"})," or ",e.jsx("code",{children:"async/await"})," in a block."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Concurrency"}),": start promises first, then ",e.jsx("code",{children:"await Promise.all"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"forEach + async"})," is a trap - use ",e.jsx("code",{children:"for...of"})," or ",e.jsx("code",{children:"Promise.all(map())"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Timeouts & cancel"}),": use ",e.jsx("code",{children:"AbortController"})," or a ",e.jsx("code",{children:"race"})," with a timeout promise."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"async functions return Promises"}),"; throw to reject, return to resolve."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"async/await"})," + ",e.jsx("code",{children:"try/catch"})," for readable async code."]}),e.jsxs("li",{children:["Batch work with ",e.jsx("code",{children:"Promise.all"})," for speed; handle partials with ",e.jsx("code",{children:"allSettled"}),"."]}),e.jsxs("li",{children:["Guard fetches with ",e.jsx("code",{children:"AbortController"})," (cleanup on unmount)."]}),e.jsx("li",{children:"Know the event loop: microtasks (promise callbacks) run before timeouts."})]}),e.jsx(o.Divider,{})]})}function _m({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="fetch-basics-json";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Fetch basics + JSON (GET/POST, errors, timeout, retry)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Fm,{})})})]})}function Fm(){return e.jsxs(o.Content,{children:[e.jsx("div",{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"fetch()"})," returns a ",e.jsx("strong",{children:"Promise<Response>"}),"."]}),e.jsxs("li",{children:["Always check ",e.jsx("code",{children:"res.ok"})," / ",e.jsx("code",{children:"res.status"}),", then parse with ",e.jsx("code",{children:"res.json()"})," (or ",e.jsx("code",{children:"res.text()"}),")."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"AbortController"})," for timeouts/cancel and wrap with small helpers."]})]})}),e.jsx("h3",{children:"A) GET JSON - with query params"}),e.jsx(o.Code,{children:`// Build URL with search params
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
});`}),e.jsx("h3",{children:"B) POST JSON - send body & read JSON"}),e.jsx(o.Code,{children:`async function postJSON(u, body) {
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
  .catch(e => console.error("create failed:", e.message));`}),e.jsx("h3",{children:"C) Errors: network vs HTTP vs invalid JSON"}),e.jsx(o.Code,{children:`async function safeJSON(u) {
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
}`}),e.jsxs("h3",{children:["D) Timeout / cancel with ",e.jsx("code",{children:"AbortController"})]}),e.jsx(o.Code,{children:`async function getJSONWithTimeout(u, { timeout = 8000, ...opts } = {}) {
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
// "AbortError"`}),e.jsx("h3",{children:"E) Simple retry with exponential backoff"}),e.jsx(o.Code,{children:`async function retry(fn, { tries = 3, baseMs = 300 } = {}) {
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
  .catch(e => console.log("failed:", e.message));`}),e.jsx("h3",{children:"F) Non-JSON responses (204, text, blobs)"}),e.jsx(o.Code,{children:`// 204 No Content: don't call res.json()
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
  .then(b => console.log(b.type.startsWith("image/"))); // true`}),e.jsx("h3",{children:"G) Credentials, headers, and base URL"}),e.jsx(o.Code,{children:`// Send cookies to same-site/another origin (if server allows it)
fetch("/api/me", { credentials: "include" });

// Common headers helper
const jsonHeaders = { "Content-Type": "application/json", Accept: "application/json" };

// Build base URL once
const API = (path) => \`\${import.meta.env.VITE_API_BASE}\${path}\`;
console.log(API("/health")); // e.g., "https://api.example.com/health"`}),e.jsx("h3",{children:"H) React pattern - effect with abort & state"}),e.jsx(o.Code,{children:`// Inside a component:
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
// }, []);`}),e.jsx("h3",{children:"I) Node vs Browser (tiny note)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Browsers: ",e.jsx("code",{children:"fetch"})," is built-in. CORS must be allowed by the server."]}),e.jsxs("li",{children:["Node: built-in from Node ",e.jsx("strong",{children:"18+"}),". Older Node needs a polyfill (e.g., ",e.jsx("code",{children:"node-fetch"}),")."]})]}),e.jsx("h3",{children:"J) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Always check ",e.jsx("code",{children:"res.ok"})]})," before parsing JSON."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Don't ",e.jsx("code",{children:"await res.json()"})," twice"]})," - the body stream is one-time."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"POST JSON:"})," remember ",e.jsx("code",{children:"JSON.stringify"})," and the ",e.jsx("code",{children:"Content-Type"})," header."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Timeouts:"})," use ",e.jsx("code",{children:"AbortController"})," or a ",e.jsx("code",{children:"Promise.race"})," pattern."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Retries:"})," only retry idempotent calls or ensure your API is retry-safe."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["GET/POST helpers that check ",e.jsx("code",{children:"ok"})," and parse once."]}),e.jsx("li",{children:"Abort on unmount; surface errors to UI."}),e.jsx("li",{children:"Backoff retries for flaky networks."}),e.jsx("li",{children:"Handle 204/text/blob paths, not just JSON."})]}),e.jsx(o.Divider,{})]})}function Lm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="timers";return e.jsxs(o.Topic,{children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Timers (setTimeout, setInterval)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx($m,{})})})]})}function $m(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"setTimeout"})," runs a callback once after a delay; ",e.jsx("code",{children:"setInterval"})," runs repeatedly. Always keep the returned ",e.jsx("em",{children:"id"})," and clear with ",e.jsx("code",{children:"clearTimeout"})," /"," ",e.jsx("code",{children:"clearInterval"}),". In React, start timers in effects and clean them up on unmount."]}),e.jsxs("h3",{children:["A) ",e.jsx("code",{children:"setTimeout"})," basics (one-shot)"]}),e.jsx(o.Code,{children:`console.log("sync 1");
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
clearTimeout(t);`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"setInterval"})," (repeating) + clear"]}),e.jsx(o.Code,{children:`let count = 0;
const iv = setInterval(() => {
  count++;
  console.log("tick", count);
  // "tick 1", "tick 2", "tick 3"
  if (count === 3) clearInterval(iv); // stops after 3
}, 100);`}),e.jsxs("h3",{children:["C) Drift & accuracy: ",e.jsx("em",{children:"recursive"})," timeout over interval"]}),e.jsxs("p",{children:["Long callbacks cause ",e.jsx("code",{children:"setInterval"})," to drift. Prefer scheduling the next run yourself (recursive ",e.jsx("code",{children:"setTimeout"}),") and adjust with timestamps."]}),e.jsx(o.Code,{children:`const stepMs = 100;
let expected = Date.now() + stepMs;
function tick() {
  const drift = Date.now() - expected; // +ve = we're late
  console.log("drift(ms)~", drift >= 0 ? Math.round(drift) : 0);
  expected += stepMs;
  setTimeout(tick, Math.max(0, stepMs - drift)); // adjust next delay
}
setTimeout(tick, stepMs);
// logs small drift values, auto-correcting each step`}),e.jsx("h3",{children:"D) Debounce (wait for quiet period) & Throttle (limit rate)"}),e.jsx(o.Code,{children:`// Debounce: call after N ms of inactivity
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
log(1); log(2); log(3); // "debounced 3" (only last call runs)`}),e.jsxs("h3",{children:["E) Promise-based sleep + ",e.jsx("code",{children:"async/await"})]}),e.jsx(o.Code,{children:`const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const t0 = Date.now();
  await sleep(50);
  await sleep(50);
  console.log("elapsed~", Date.now() - t0 >= 100); // true (≈100ms)
})();`}),e.jsx("h3",{children:"F) Next tick & animation"}),e.jsx(o.Code,{children:`// Next microtask (before timeouts)
Promise.resolve().then(() => console.log("microtask"));
// Next animation frame (~60fps)
requestAnimationFrame(() => console.log("raf"));`}),e.jsx("h3",{children:"G) React patterns — effects + cleanup"}),e.jsx(o.Code,{children:`// 1) One-shot timeout on mount with cleanup
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
// }`}),e.jsx("h3",{children:"H) Node vs Browser (notes)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Browsers may ",e.jsx("strong",{children:"throttle"})," timers in background tabs (e.g., clamped to ~1000ms)."]}),e.jsxs("li",{children:["Node also has ",e.jsx("code",{children:"setImmediate"})," and ",e.jsx("code",{children:"process.nextTick"})," (microtask); timers API is otherwise similar."]})]}),e.jsx("h3",{children:"I) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always clear"})," timeouts/intervals you create (especially in React effects)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Don't rely on exact ms."})," Timers run “as soon as possible” after the delay."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Avoid piling work in intervals."})," If work may take longer than the interval, prefer recursive timeouts with drift correction."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Debounce for bursts"})," (search input), ",e.jsx("strong",{children:"throttle for steady rate"})," (scroll/resize)."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"setTimeout"})," for one-shot; ",e.jsx("code",{children:"setInterval"})," for repeats (but watch drift)."]}),e.jsx("li",{children:"Keep ids; clear them on unmount or when no longer needed."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"sleep()"})," for readable async flows; pair timers with ",e.jsx("code",{children:"Promise"}),"s."]}),e.jsx("li",{children:"Prefer debounce/throttle for high-frequency events."})]}),e.jsx(o.Divider,{})]})}function zm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="jsx-syntax-rules";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"JSX syntax rules (one root, expressions)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Um,{})})})]})}function Um(){return e.jsxs(o.Content,{children:[e.jsxs("div",{children:["JSX is syntax sugar for ",e.jsx("code",{children:"React.createElement"}),". It has two core rules:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:" (1) one root element"})," per JSX return, and"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"(2) curly braces hold expressions"})," (not statements)."]})]})]}),e.jsx("h3",{children:"A) One root element"}),e.jsxs("p",{children:["Each component’s ",e.jsx("code",{children:"return"})," must produce a single parent node. Use a wrapper element or a Fragment."]}),e.jsx(o.Code,{children:`// ❌ Not allowed: two siblings at top level
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
}`}),e.jsx("h3",{children:"B) Fragments (short & long form + keys)"}),e.jsxs("p",{children:["Shorthand ",e.jsx("code",{children:"<>...</>"})," is great for grouping. Use"," ",e.jsx("code",{children:"<React.Fragment>"})," if you need a ",e.jsx("code",{children:"key"}),"."]}),e.jsx(o.Code,{children:`const rows = [
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
}`}),e.jsxs("h3",{children:["C) Curly braces are for ",e.jsx("em",{children:"expressions"})]}),e.jsxs("p",{children:["Inside JSX, ",e.jsx("code",{children:"{ ... }"})," must contain an expression (something that evaluates to a value): variables, function calls, math, array literals, ",e.jsx("em",{children:"ternary"})," conditionals, etc. Statements like ",e.jsx("code",{children:"if"}),"/",e.jsx("code",{children:"for"}),"/",e.jsx("code",{children:"while"})," are not allowed directly in braces."]}),e.jsx(o.Code,{children:`// ✅ Valid (expressions)
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
// return <div>{msg}</div>;`}),e.jsx("h3",{children:"D) Attributes: literal vs expression"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Quotes for string literals: ",e.jsx("code",{children:'<img alt="logo" />'})]}),e.jsxs("li",{children:["Braces for non-strings/variables: ",e.jsx("code",{children:"<img width={64} />"})]}),e.jsxs("li",{children:["Booleans: ",e.jsx("code",{children:"<Button primary />"})," ≡ ",e.jsx("code",{children:"<Button primary={true} />"})]}),e.jsxs("li",{children:["Objects/arrays need braces: ",e.jsx("code",{children:"<Box style={{ marginTop: 8 }} />"})]})]}),e.jsx(o.Code,{children:`function Attrs() {
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
}`}),e.jsx("h3",{children:"E) What renders vs what doesn't"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"undefined"}),", and ",e.jsx("code",{children:"false"})," render nothing."]}),e.jsxs("li",{children:[e.jsx("code",{children:"0"})," ",e.jsx("em",{children:"does"})," render (common gotcha)."]}),e.jsxs("li",{children:["Arrays of nodes are fine: ",e.jsx("code",{children:'{[<li key="1">A</li>, <li key="2">B</li>]}'})]})]}),e.jsx(o.Code,{children:`function Visibility({ count }) {
  // || treats 0 as falsy -> will fall back; often not desired.
  // Prefer ?? so 0 stays 0.
  return <p>Count: {count ?? 0}</p>;
}`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Fix this return to have a single root (no extra DOM wrapper in the output):",e.jsx(o.Code,{children:`function X() {
  return (
    <h2>Hi</h2>
    <p>There</p>
  );
}`}),e.jsx("em",{children:"Hint:"})," Use a Fragment."]}),e.jsxs("li",{children:["Convert this statement into an expression:",e.jsx(o.Code,{children:`// Want: "Even" if n%2===0, else "Odd"
// <div>{ if (n % 2 === 0) { "Even" } else { "Odd" } }</div>`})]}),e.jsxs("li",{children:["Make this map render correctly with keys:",e.jsx(o.Code,{children:`<ul>
  {items.map(item => <li>{item.label}</li>)}
</ul>`})]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Return exactly one root element (Fragment if no wrapper DOM is needed)."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"{ ... }"})," only for expressions. Convert statements to a ternary or compute earlier."]}),e.jsx("li",{children:"Quotes for string literals, braces for variables/non-strings."}),e.jsxs("li",{children:["Remember: ",e.jsx("code",{children:"null/undefined/false"})," render nothing; ",e.jsx("code",{children:"0"})," renders."]})]}),e.jsx(o.Divider,{})]})}function Bm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="html-vs-jsx";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"HTML vs JSX differences (className, htmlFor)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Hm,{})})})]})}function Hm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["JSX maps to DOM ",e.jsx("em",{children:"properties"})," (not raw HTML attributes). That’s why some names change (e.g., ",e.jsx("code",{children:"className"})," instead of ",e.jsx("code",{children:"class"}),", ",e.jsx("code",{children:"htmlFor"})," instead of ",e.jsx("code",{children:"for"}),") and most attributes are ",e.jsx("strong",{children:"camelCased"}),"."]}),e.jsxs("h3",{children:["A) ",e.jsx("code",{children:"class"})," → ",e.jsx("code",{children:"className"})]}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"className"})," for CSS classes (JSX avoids the reserved keyword ",e.jsx("code",{children:"class"}),")."]}),e.jsx(o.Code,{children:`// HTML
<div class="card primary"></div>

// JSX
<div className="card primary"></div>

// Dynamic classes
const isPrimary = true;
<div className={isPrimary ? "card primary" : "card"} />`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"for"})," → ",e.jsx("code",{children:"htmlFor"})," (labels)"]}),e.jsxs("p",{children:["In JSX, the ",e.jsx("code",{children:"label"})," attribute is ",e.jsx("code",{children:"htmlFor"}),". It must match the target input’s ",e.jsx("code",{children:"id"}),"."]}),e.jsx(o.Code,{children:`// HTML
<label for="email">Email</label>
<input id="email" type="email" />

// JSX
<label htmlFor="email">Email</label>
<input id="email" type="email" />`}),e.jsxs("p",{children:["If the input is nested inside the label, ",e.jsx("code",{children:"htmlFor"})," is optional:"]}),e.jsx(o.Code,{children:`<label>
  Email
  <input type="email" />
</label>`}),e.jsxs("h3",{children:["C) Attribute naming: camelCase (except ",e.jsx("code",{children:"data-*"})," & ",e.jsx("code",{children:"aria-*"}),")"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"tabindex"})," → ",e.jsx("code",{children:"tabIndex"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"readonly"})," → ",e.jsx("code",{children:"readOnly"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"maxlength"})," → ",e.jsx("code",{children:"maxLength"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"autocomplete"})," → ",e.jsx("code",{children:"autoComplete"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"contenteditable"})," → ",e.jsx("code",{children:"contentEditable"})]}),e.jsxs("li",{children:["Images/media: ",e.jsx("code",{children:"srcset"})," → ",e.jsx("code",{children:"srcSet"}),", ",e.jsx("code",{children:"crossorigin"})," → ",e.jsx("code",{children:"crossOrigin"})]}),e.jsxs("li",{children:["Forms: ",e.jsx("code",{children:"accept-charset"})," → ",e.jsx("code",{children:"acceptCharset"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Unchanged:"})," ",e.jsx("code",{children:"data-*"})," & ",e.jsx("code",{children:"aria-*"})," remain kebab-case."]})]}),e.jsx(o.Code,{children:`<img src="/hero.png" srcSet="/hero@2x.png 2x" crossOrigin="anonymous" />
<form acceptCharset="UTF-8" />`}),e.jsx("h3",{children:"D) Events: camelCase + pass functions"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"onClick"}),", ",e.jsx("code",{children:"onChange"}),", ",e.jsx("code",{children:"onSubmit"}),"… and pass a function, not a string."]}),e.jsx(o.Code,{children:`// HTML
<button onclick="doThing()">Run</button>

// JSX
<button onClick={doThing}>Run</button>
<button onClick={() => doThing("arg")}>Run with arg</button>`}),e.jsx("h3",{children:"E) Inline styles: object, not string"}),e.jsx("p",{children:"Provide a JS object with camelCased CSS properties. Numbers are pixels by default for most props."}),e.jsx(o.Code,{children:`// HTML
<div style="background-color: tomato; margin-top: 8px;"></div>

// JSX
<div style={{ backgroundColor: "tomato", marginTop: 8 }} />`}),e.jsx("h3",{children:"F) Boolean attributes"}),e.jsxs("p",{children:["Presence implies ",e.jsx("code",{children:"true"}),". Use braces for dynamic booleans."]}),e.jsx(o.Code,{children:`// Static true
<input type="checkbox" checked />

// Dynamic
const disabled = isSubmitting;
<button disabled={disabled}>Save</button>`}),e.jsx("h3",{children:"G) SVG & special cases"}),e.jsx("p",{children:"Many SVG attributes are camelCased in JSX."}),e.jsx(o.Code,{children:`// HTML
<svg viewBox="0 0 100 100"><circle stroke-width="2" /></svg>

// JSX
<svg viewBox="0 0 100 100"><circle strokeWidth={2} /></svg>`}),e.jsxs("h3",{children:["H) Raw HTML: ",e.jsx("code",{children:"dangerouslySetInnerHTML"})]}),e.jsxs("p",{children:["Use sparingly—only with trusted content—to avoid XSS. Must pass an object with ",e.jsx("code",{children:"__html"}),"."]}),e.jsx(o.Code,{children:`const html = "<strong>Trusted</strong> snippet";
<div dangerouslySetInnerHTML={{ __html: html }} />`}),e.jsx("h3",{children:"I) Self-closing tags required"}),e.jsx("p",{children:"Tags with no children must be self-closed in JSX."}),e.jsx(o.Code,{children:`// HTML
<img src="/logo.png">

// JSX
<img src="/logo.png" />`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert to valid JSX:",e.jsx(o.Code,{children:`<label for="name">Name</label>
<input id="name">`})]}),e.jsxs("li",{children:["Fix attribute names:",e.jsx(o.Code,{children:'<input maxlength="10" tabindex="0" readonly>'})]}),e.jsxs("li",{children:["Rewrite with inline styles (JS object) and an event:",e.jsx(o.Code,{children:'<button onclick="save()" style="background-color: #09f; padding: 8px 12px;">Save</button>'})]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"className"})," for classes; ",e.jsx("code",{children:"htmlFor"})," for labels."]}),e.jsxs("li",{children:["Attributes & events are camelCase; ",e.jsx("code",{children:"data-*"}),"/",e.jsx("code",{children:"aria-*"})," stay kebab-case."]}),e.jsx("li",{children:"Styles use an object: camelCased props, numbers as px."}),e.jsxs("li",{children:["Boolean props: presence or ",e.jsx("code",{children:"{true}"}),"; use braces for dynamics."]}),e.jsxs("li",{children:["Self-close empty elements; be careful with ",e.jsx("code",{children:"dangerouslySetInnerHTML"}),"."]})]}),e.jsx(o.Divider,{})]})}function Wm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="inline-styles";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Inline styles (style object)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Vm,{})})})]})}function Vm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["In JSX, the ",e.jsx("code",{children:"style"})," prop takes a ",e.jsx("strong",{children:"JS object"})," with"," ",e.jsx("em",{children:"camelCased"})," CSS properties. Numbers are treated as ",e.jsx("code",{children:"px"})," (for most props). Use strings for other units (",e.jsx("code",{children:'"%'}),", ",e.jsx("code",{children:'"rem"'}),", etc.)."]}),e.jsx("h3",{children:"A) Basics: object, camelCase, numbers → px"}),e.jsx(o.Code,{children:`// HTML
<div style="background-color: tomato; margin-top: 8px;"></div>

// JSX
<div style={{ backgroundColor: "tomato", marginTop: 8 }} />`}),e.jsx("h3",{children:"B) Units: number vs string"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Number"})," → pixels: ",e.jsx("code",{children:"{ width: 200 }"})," ⇒ ",e.jsx("code",{children:"width: 200px"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"String"})," for non-px: ",e.jsx("code",{children:'{ width: "50%" }'}),", ",e.jsx("code",{children:'{ fontSize: "1.25rem" }'})]}),e.jsxs("li",{children:["Unitless props (examples): ",e.jsx("code",{children:"lineHeight"}),", ",e.jsx("code",{children:"zIndex"}),", ",e.jsx("code",{children:"fontWeight"}),", ",e.jsx("code",{children:"opacity"}),", ",e.jsx("code",{children:"flexGrow"}),", ",e.jsx("code",{children:"flexShrink"}),"."]})]}),e.jsx(o.Code,{children:`<div
  style={{
    width: "50%",
    height: 120,             // 120px
    lineHeight: 1.4,         // unitless ok
    opacity: 0.9
  }}
/>`}),e.jsx("h3",{children:"C) Vendor prefixes & SVG"}),e.jsxs("p",{children:["Use camelCase with vendor prefixes: ",e.jsx("code",{children:"Webkit"}),", ",e.jsx("code",{children:"ms"}),", etc. Many SVG attrs are camelCased too."]}),e.jsx(o.Code,{children:`<div style={{ WebkitUserSelect: "none", msOverflowStyle: "none" }} />
<svg viewBox="0 0 100 10">
  <rect width="100" height="10" fill="tomato" />
</svg>`}),e.jsx("h3",{children:"D) Conditional & merged styles"}),e.jsx("p",{children:"Inline styles are just objects-combine with spreads and conditionals."}),e.jsx(o.Code,{children:`const base = { padding: 12, borderRadius: 8 };
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
}`}),e.jsx("h3",{children:"E) Dynamic values & CSS variables"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Compute on the fly: strings for percent/other units, numbers for px."}),e.jsx("li",{children:"CSS variables work fine-supply as strings."})]}),e.jsx(o.Code,{children:`function Progress({ value }) {
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
}`}),e.jsx("h3",{children:"F) Performance & patterns"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Objects are new each render; keep them small. For big/expensive objects, memoize."}),e.jsxs("li",{children:["Prefer CSS classes / styled-components for most styling, and inline styles for ",e.jsx("em",{children:"dynamic per-instance"})," values (e.g., width from props)."]}),e.jsxs("li",{children:["No support for pseudo-classes (",e.jsx("code",{children:":hover"}),") or media queries in inline styles-use CSS/styled-components for that."]}),e.jsxs("li",{children:[e.jsx("code",{children:"!important"})," isn't supported in inline styles."]})]}),e.jsx(o.Code,{children:`// Memoize a large dynamic style (rarely needed)
function Panel({ color, pad }) {
  const style = React.useMemo(() => ({
    background: color,
    padding: pad,
    borderRadius: 12,
    boxShadow: "0 8px 30px rgba(0,0,0,.08)"
  }), [color, pad]);

  return <section style={style} />;
}`}),e.jsx("h3",{children:"G) Common gotchas"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Hyphen-keys don't work: use ",e.jsx("code",{children:"backgroundColor"}),", not ",e.jsx("code",{children:"background-color"}),"."]}),e.jsxs("li",{children:["URLs must be strings: ",e.jsx("code",{children:"backgroundImage: `url(${src})`"}),"."]}),e.jsxs("li",{children:["Numbers become px-if you mean ",e.jsx("code",{children:"%"}),"/",e.jsx("code",{children:"rem"}),", pass a string."]})]}),e.jsx(o.Code,{children:`// ❌ Wrong keys and units
<div style={{ "background-color": "tomato", width: 50 + "%" }} />

// ✅ Correct
<div style={{ backgroundColor: "tomato", width: "50%" }} />`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert to JSX style object:",e.jsx(o.Code,{children:'<div style="border: 1px solid #ddd; border-radius: 8px; margin-top: 12px;"></div>'})]}),e.jsxs("li",{children:["Make a dynamic square where ",e.jsx("code",{children:"size"})," (number) controls both ",e.jsx("code",{children:"width"})," and ",e.jsx("code",{children:"height"}),":",e.jsx(o.Code,{children:'// <Square size={48} color="#0af" />'})]}),e.jsxs("li",{children:["Fix the mistakes:",e.jsx(o.Code,{children:`<button style={{ "font-size": 14, padding: 8 + "px", backgroundImage: url(bg) }}>
  Save
</button>`})]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"style"})," accepts an ",e.jsx("strong",{children:"object"}),"; properties are ",e.jsx("strong",{children:"camelCased"}),"."]}),e.jsxs("li",{children:["Numbers → ",e.jsx("code",{children:"px"}),"; use strings for ",e.jsx("code",{children:"%"}),"/",e.jsx("code",{children:"rem"}),"/",e.jsx("code",{children:"em"}),"/etc."]}),e.jsx("li",{children:"Merge with object spreads; use classes/styled-components for pseudo-states & media queries."}),e.jsxs("li",{children:["CSS variables allowed as strings (",e.jsx("code",{children:"var(--x)"}),")."]})]}),e.jsx(o.Divider,{})]})}function Jm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="fragments";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Fragments (<>...</>, <React.Fragment>)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Gm,{})})})]})}function Gm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Fragment"})," lets you group multiple children without adding an extra DOM element.",e.jsx("br",{}),`It's an "invisible wrapper"-perfect when you must return one parent but don't want a real wrapper like `,e.jsx("code",{children:"<div>"})," to affect layout or styling."]}),e.jsx("h3",{children:"A) Why fragments?"}),e.jsx(o.Code,{children:`// ❌ Adds unwanted wrapper <div> to the DOM
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
}`}),e.jsx("h3",{children:"B) Two forms"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Shorthand:"})," ",e.jsx("code",{children:"<>...</>"})," (can't take ",e.jsx("em",{children:"any"})," props)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Long form:"})," ",e.jsx("code",{children:"<React.Fragment>...</React.Fragment>"})," (can take a ",e.jsx("code",{children:"key"}),")."]})]}),e.jsx(o.Code,{children:`// Shorthand (no props, no key)
<>
  <Item />
  <Actions />
</>

// Long form (use when you need a key on the group)
<React.Fragment key={row.id}>
  <td>{row.name}</td>
  <td>{row.price}</td>
</React.Fragment>`}),e.jsx("h3",{children:"C) Lists: group multiple siblings and key the Fragment"}),e.jsxs("p",{children:["When mapping and you need to return ",e.jsx("em",{children:"multiple siblings"})," per item, wrap them in a keyed Fragment. The shorthand cannot accept a key, so use the long form."]}),e.jsx(o.Code,{children:`const data = [
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
}`}),e.jsx("h3",{children:"D) Tables: return multiple <tr> or multiple <td> cleanly"}),e.jsx("p",{children:"Fragments help keep valid table structure without inserting a div/spin wrapper that would break HTML."}),e.jsx(o.Code,{children:`// 1) Return multiple <tr> per item
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
</tr>`}),e.jsx("h3",{children:"E) Conditional wrappers without extra DOM"}),e.jsx(o.Code,{children:`function TitleBlock({ showSubtitle }) {
  return (
    <>
      <h2>Dashboard</h2>
      {showSubtitle && <p className="muted">Welcome back</p>}
    </>
  );
}`}),e.jsx("h3",{children:"F) Fragment vs Array"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fragment:"})," more readable, no array brackets, no need to add keys unless mapping."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Array:"})," you can return ",e.jsx("code",{children:"[child1, child2]"})," directly-but every child needs a key."]})]}),e.jsx(o.Code,{children:`// Returning an array works, but needs keys
return [
  <li key="a">A</li>,
  <li key="b">B</li>,
];`}),e.jsx("h3",{children:"G) When NOT to use a Fragment"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["You need attributes (e.g., ",e.jsx("code",{children:"className"}),", ",e.jsx("code",{children:"style"}),", ",e.jsx("code",{children:"data-*"}),") on the wrapper."]}),e.jsx("li",{children:"You need to target the wrapper in CSS or with refs-use a real element instead."})]}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Trying to pass props to the shorthand ",e.jsx("code",{children:"<>"}),"-it can't take any."]}),e.jsxs("li",{children:["Forgetting a ",e.jsx("code",{children:"key"})," when mapping groups with a Fragment."]}),e.jsx("li",{children:"Wrapping where semantics matter-always keep valid HTML structure (Fragments won't break it)."})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Replace the wrapper div with a Fragment (no DOM change):",e.jsx(o.Code,{children:`function Info() {
  return (
    <div>
      <strong>Total</strong>
      <span> ₹999 </span>
    </div>
  );
}`})]}),e.jsxs("li",{children:["Map items so each renders two ",e.jsx("code",{children:"<li>"})," siblings without an extra wrapper, with proper keys."]}),e.jsx("li",{children:"Build a table where each product renders a header row and a details row using a keyed Fragment."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use Fragments to avoid extra DOM wrappers."}),e.jsxs("li",{children:["Shorthand ",e.jsx("code",{children:"<>"})," has no props; use ",e.jsx("code",{children:"<React.Fragment key=...>"})," when mapping."]}),e.jsx("li",{children:"Great for lists/tables and conditional grouping."}),e.jsx("li",{children:"If you need classes/styles/refs on the wrapper, use a real element instead."})]}),e.jsx(o.Divider,{})]})}function Xm({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="comments-in-jsx";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Comments in JSX"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(qm,{})})})]})}function qm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["In ",e.jsx("strong",{children:"JavaScript regions"})," (outside JSX), use normal ",e.jsx("code",{children:"//"})," and ",e.jsx("code",{children:"/* ... */"}),". Inside ",e.jsx("strong",{children:"JSX"})," (between tags), wrap comments in ",e.jsx("code",{children:"{/* ... */}"}),"."]}),e.jsx("h3",{children:"A) Outside vs inside JSX"}),e.jsx(o.Code,{children:`// ✅ JS comments anywhere outside JSX
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
}`}),e.jsx("h3",{children:"B) JSX comment syntax"}),e.jsx("p",{children:"Use curly braces with a JS block comment. Works single-line or multi-line."}),e.jsx(o.Code,{children:`<>
  {/* single-line */}
  <h4>Heading</h4>

  {/* 
    multi-line
    explains the section below 
  */}
  <p>Details...</p>
</>`}),e.jsx("h3",{children:"C) Comments near props & in attribute expressions"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Between props (rarely needed) block comments may parse, but avoid-tooling can be inconsistent."}),e.jsxs("li",{children:["Prefer commenting ",e.jsx("em",{children:"inside"})," an expression or on its own line."]})]}),e.jsx(o.Code,{children:`// ✅ comment inside a prop expression
<button title={/* i18n: tooltip for save */ "Save"}>Save</button>

// ✅ comment above the element/prop
// primary action button
<button className="primary">Go</button>

// ⚠️ Works in many setups but avoid for portability
// <button /* primary */ className="primary">Go</button>`}),e.jsx("h3",{children:"D) Commenting out blocks temporarily"}),e.jsxs("p",{children:['To "disable" a block, wrap it in a JSX comment, or better, render ',e.jsx("code",{children:"null"})," using a condition."]}),e.jsx(o.Code,{children:`// 1) Comment out JSX
<div>
  {/* <Sidebar /> */}
  <Main />
</div>

// 2) Prefer conditional (more explicit)
{showSidebar ? <Sidebar /> : null}`}),e.jsx("h3",{children:"E) Comments inside lists & fragments"}),e.jsx("p",{children:"Comments can live anywhere children can."}),e.jsx(o.Code,{children:`<>
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
</>`}),e.jsx("h3",{children:"F) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"//"})," directly inside JSX → ❌ (must be ",e.jsx("code",{children:"{/* ... */}"}),")."]}),e.jsx("li",{children:"Placing comments inside string literals (they’ll render as text)."}),e.jsx("li",{children:"Leaving big commented blocks permanently-prefer deleting or feature-flagging."})]}),e.jsx(o.Code,{children:`// ❌ Wrong (inside JSX)
// <div>// not a valid comment here</div>

// ✅ Right
<div>{/* comment inside JSX */}</div>`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Fix the comments:",e.jsx(o.Code,{children:`return (
  <div>
    // Title area
    <h3>Profile</h3>
    <p>Bio</p>
  </div>
);`})]}),e.jsxs("li",{children:["Comment the tooltip prop without breaking JSX:",e.jsx(o.Code,{children:'<button title="Delete">Delete</button>'})]}),e.jsxs("li",{children:["Temporarily disable rendering of ",e.jsx("code",{children:"<Footer />"})," without deleting it."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"{/* ... */}"})," inside JSX; normal comments elsewhere."]}),e.jsx("li",{children:"Comment inside prop expressions or above the element (avoid between-prop comments)."}),e.jsxs("li",{children:["For temporary removal, prefer conditional rendering (",e.jsx("code",{children:"cond ? <X/> : null"}),")."]})]}),e.jsx(o.Divider,{})]})}function Km({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="expressions-vs-statements";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Expressions vs statements in JSX"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Qm,{})})})]})}function Qm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Inside JSX, the curly braces ",e.jsx("code",{children:"{ ... }"})," accept a ",e.jsx("strong",{children:"JavaScript expression"})," (something that produces a value). ",e.jsx("strong",{children:"Statements"})," (",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"switch"}),",",e.jsx("code",{children:"try/catch"}),", ",e.jsx("code",{children:"return"}),", etc.) are ",e.jsx("em",{children:"not"})," allowed directly inside JSX."]}),e.jsx("h3",{children:"A) What counts as an expression?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Literals & variables: ",e.jsx("code",{children:'42, "hi", user.name'})]}),e.jsxs("li",{children:["Operators & calls: ",e.jsx("code",{children:"a + b, fn(), items.map(...)"})]}),e.jsxs("li",{children:["Ternary: ",e.jsx("code",{children:"ok ? <A/> : <B/>"})]}),e.jsxs("li",{children:["Array/fragment of nodes: ",e.jsx("code",{children:'[<li key="1">A</li>, <li key="2">B</li>]'})]}),e.jsxs("li",{children:["Logical ",e.jsx("code",{children:"&&"})," (careful with ",e.jsx("code",{children:"0"}),"), ",e.jsx("code",{children:"||"}),", ",e.jsx("code",{children:"??"})]})]}),e.jsx(o.Code,{children:`function Demo({ ok, items }) {
  return (
    <div>
      <p>Sum: {2 + 3}</p>
      <p>{ok ? "Yes" : "No"}</p>
      <ul>{items.map(it => <li key={it.id}>{it.label}</li>)}</ul>
    </div>
  );
}`}),e.jsx("h3",{children:"B) What is a statement (❌ not allowed in braces)?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"while"}),", ",e.jsx("code",{children:"switch"})]}),e.jsx("li",{children:e.jsxs("code",{children:["try "," catch "]})}),e.jsxs("li",{children:[e.jsx("code",{children:"return"}),", ",e.jsx("code",{children:"break"}),", ",e.jsx("code",{children:"continue"}),", ",e.jsx("code",{children:"throw"})]}),e.jsxs("li",{children:["Block scopes: ",e.jsx("code",{children:"{ /* a new scope */ }"})," (not the same as JSX braces)"]})]}),e.jsx(o.Code,{children:`// ❌ Invalid
// <div>{ if (ok) { "Yes" } else { "No" } }</div>
// <ul>{ for (const x of xs) { <li>{x}</li> } }</ul>`}),e.jsx("h3",{children:"C) Converting statements → expressions"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"if/else → ternary"}),e.jsx(o.Code,{children:`// ❌
// <div>{ if (n % 2) { "Odd" } else { "Even" } }</div>

// ✅
<div>{n % 2 ? "Odd" : "Even"}</div>`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"if-only → &&"})," (shows right side when left is truthy; beware ",e.jsx("code",{children:"0"}),")",e.jsx(o.Code,{children:`// show a badge only if premium
{isPremium && <Badge/>}

// If the left can be 0, prefer a ternary:
{count > 0 ? <span>{count}</span> : null}`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for/switch → array methods or lookups"}),e.jsx(o.Code,{children:`// ❌ for loop in JSX
// <ul>{ for (const x of xs) { <li>{x}</li> } }</ul>

// ✅ map + key
<ul>{xs.map(x => <li key={x.id}>{x.title}</li>)}</ul>

// ✅ switch alternative via lookup
const views = { list: <List/>, grid: <Grid/>, empty: <Empty/> };
<div>{views[mode] ?? <Empty/>}</div>`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"try/catch"}),": precompute above return or call a helper that returns UI",e.jsx(o.Code,{children:`function SafeJson({ text }) {
  let node;
  try {
    const obj = JSON.parse(text);
    node = <pre>{JSON.stringify(obj, null, 2)}</pre>;
  } catch {
    node = <p className="error">Invalid JSON</p>;
  }
  return <div>{node}</div>;
}`})]})]}),e.jsx("h3",{children:"D) Precompute vs inline tricks"}),e.jsxs("p",{children:["Prefer computing values ",e.jsx("em",{children:"before"})," the ",e.jsx("code",{children:"return"})," for readability. You can also call small helpers inside JSX (calls are expressions). IIFEs work but are harder to read—use sparingly."]}),e.jsx(o.Code,{children:`// Precompute (clean)
function Card({ price, discount }) {
  const final = discount ? price * (1 - discount) : price;
  return <p>₹{final}</p>;
}

// Helper call (still an expression)
const format = n => Intl.NumberFormat("en-IN").format(n);
<p>Total: {format(total)}</p>

// IIFE (allowed, but avoid if not needed)
<div>{(() => { if (ok) return <A/>; return <B/>; })()}</div>`}),e.jsx("h3",{children:'E) Rendering "nothing" cleanly'}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"null"})," to render nothing: ",e.jsx("code",{children:"{cond ? <X/> : null}"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"false"})," and ",e.jsx("code",{children:"undefined"})," also render nothing, but avoid returning raw non-UI values by accident."]}),e.jsxs("li",{children:[e.jsx("code",{children:"0"})," renders as text; don't use it to hide UI."]})]}),e.jsx("h3",{children:"F) Quick patterns"}),e.jsx(o.Code,{children:`// Guarded block with early return pattern (outside JSX)
if (!data) return null;

// Inline pick-one
{type === "success" ? <Success/> : type === "error" ? <Error/> : <Idle/>}

// Compose lists
<ul>
  {items
    .filter(it => it.visible)
    .map(it => <li key={it.id}>{it.label}</li>)}
</ul>`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert to valid JSX (use a ternary):",e.jsx(o.Code,{children:'// <div>{ if (score >= 50) { "Pass" } else { "Fail" } }</div>'})]}),e.jsxs("li",{children:["Render a list of tags (",e.jsx("code",{children:"tags: string[]"}),") with keys, without using a ",e.jsx("code",{children:"for"})," loop."]}),e.jsxs("li",{children:["Replace this ",e.jsx("code",{children:"switch"})," with a lookup map:",e.jsx(o.Code,{children:'// switch (status) { case "ok": <Ok/>; break; case "err": <Err/>; break; default: <Idle/>; }'})]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["JSX braces accept ",e.jsx("strong",{children:"expressions"})," only—no control-flow statements."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"? :"})," for if/else, ",e.jsx("code",{children:"&&"}),' for simple "show if truthy".']}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"map/filter"})," for lists; always add stable ",e.jsx("code",{children:"key"}),"s."]}),e.jsx("li",{children:"Precompute complex logic above the return or call helpers."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"null"})," to render nothing; don't rely on ",e.jsx("code",{children:"0"})," for hiding."]})]}),e.jsx(o.Divider,{})]})}function Ym({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="conditional-and";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Conditional render: &&"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Zm,{})})})]})}function Zm(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["The logical-AND operator ",e.jsx("code",{children:"&&"})," is a concise way to ",e.jsx("strong",{children:"render something only if a condition is truthy"}),".",e.jsx("br",{}),"It returns the left side if it's falsy, otherwise the right side. In React, ",e.jsx("code",{children:"false"}),"/",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," render nothing."]}),e.jsx("h3",{children:"A) Show only when truthy"}),e.jsx(o.Code,{children:`// Show badge only if the user is premium
{isPremium && <Badge />}

// Show count only if > 0
{count > 0 && <span className="count">{count}</span>}`}),e.jsx("h3",{children:'B) Big gotcha: 0 will render "0"'}),e.jsxs("p",{children:["Because ",e.jsx("code",{children:"0 && <X/>"})," evaluates to ",e.jsx("code",{children:"0"}),", React will render the text ",e.jsx("code",{children:"0"}),". Use a strict comparison or coerce to boolean with ",e.jsx("code",{children:"!!"}),"."]}),e.jsx(o.Code,{children:`// ❌ Might render "0"
{items.length && <List items={items} />}

// ✅ Compare or coerce
{items.length > 0 && <List items={items} />}
{!!items.length && <List items={items} />}  // double-bang -> boolean`}),e.jsx("h3",{children:"C) Chain multiple conditions"}),e.jsx("p",{children:"All must be truthy to render the element."}),e.jsx(o.Code,{children:`// Render only when loaded, user exists, and feature is enabled
{loaded && user && flags.showWelcome && <Welcome user={user} />}`}),e.jsx("h3",{children:'D) Use ternary when you need an "else"'}),e.jsxs("p",{children:[e.jsx("code",{children:"&&"}),` has no "else". Don't abuse `,e.jsx("code",{children:"||"})," to fake it-prefer a ternary for clarity."]}),e.jsx(o.Code,{children:`// ⚠️ Works but less readable
{isReady && <Ready/> || <Loading/>}

// ✅ Clear
{isReady ? <Ready/> : <Loading/>}`}),e.jsx("h3",{children:"E) ClassName composition with &&"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"&&"})," to include a token conditionally, then filter falsy values."]}),e.jsx(o.Code,{children:`// Small utility pattern
const cx = (...xs) => xs.filter(Boolean).join(" ");

<li className={cx("item", active && "active", disabled && "muted")}>
  Row
</li>`}),e.jsx("h3",{children:"F) Combine with nullish coalescing carefully"}),e.jsxs("p",{children:[e.jsx("code",{children:"??"})," only checks ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"}),". For visibility gating, you usually just need ",e.jsx("code",{children:"&&"}),"."]}),e.jsx(o.Code,{children:`// Show price only if it exists; show 0 explicitly if 0 is valid
{price != null && <span>₹{price}</span>}`}),e.jsx("h3",{children:"G) Readability pattern: precompute"}),e.jsx("p",{children:"Complex conditions are easier to read if you compute them before the return."}),e.jsx(o.Code,{children:`function Card({ user, loading, error }) {
  const canShow = !loading && !error && user?.name;
  return <>{canShow && <Profile user={user} />}</>;
}`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using a numeric left side (",e.jsx("code",{children:"count"}),", ",e.jsx("code",{children:"items.length"}),") → may render ",e.jsx("code",{children:"0"}),"."]}),e.jsx("li",{children:"Nesting heavy logic inline-prefer precomputation or helper functions."}),e.jsxs("li",{children:["Forgetting that only ",e.jsx("code",{children:"false/null/undefined"})," render nothing; ",e.jsx("code",{children:"0"})," and ",e.jsx("code",{children:'""'})," render."]})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Fix the 0-render bug:",e.jsx(o.Code,{children:"// <div>{notifications.length && <Bell count={notifications.length} />}</div>"})]}),e.jsxs("li",{children:["Rewrite this to a ternary (needs else):",e.jsx(o.Code,{children:"// {isAuth && <Dashboard/> || <Login/>}"})]}),e.jsxs("li",{children:["Chain conditions to render ",e.jsx("code",{children:"<Promo />"})," only when ",e.jsx("code",{children:'env === "prod"'})," and ",e.jsx("code",{children:'user?.role === "admin"'}),"."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"&&"}),' for simple "show if truthy".']}),e.jsxs("li",{children:["Guard numbers with comparisons or ",e.jsx("code",{children:"!!"})," to avoid rendering ",e.jsx("code",{children:"0"}),"."]}),e.jsx("li",{children:'Use a ternary when you need an "else".'}),e.jsx("li",{children:"Precompute complex conditions for readability."})]}),e.jsx(o.Divider,{})]})}function ex({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="conditional-ternary";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Conditional render: ternary"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(nx,{})})})]})}function nx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["The ",e.jsx("strong",{children:"ternary operator"})," (",e.jsx("code",{children:"cond ? A : B"}),") is the clearest way to render one of two branches in JSX. It's an ",e.jsx("em",{children:"expression"}),", so it works inside braces."]}),e.jsx("h3",{children:"A) Basics"}),e.jsx(o.Code,{children:`// Render Dashboard if authenticated, otherwise Login
<div>{isAuth ? <Dashboard /> : <Login />}</div>

// Text or element branches both work
<p>{score >= 50 ? "Pass" : "Fail"}</p>`}),e.jsx("h3",{children:'B) "Else nothing" → use null'}),e.jsx(o.Code,{children:`// Show <Promo/> only if eligible; otherwise render nothing
{eligible ? <Promo /> : null}

// Equivalent with &&
{eligible && <Promo />}
// (Use ternary when you need an explicit else branch.)`}),e.jsx("h3",{children:"C) Multiple conditions (avoid deep nesting)"}),e.jsx("p",{children:"You can chain ternaries, but keep them readable. For more than two branches, prefer a lookup map."}),e.jsx(o.Code,{children:`// 1) Light nesting with parentheses (OK if short)
{status === "loading" ? (
  <Spinner />
) : status === "error" ? (
  <Error />
) : (
  <Content />
)}

// 2) Cleaner with a map (recommended beyond 2 branches)
const views = { loading: <Spinner/>, error: <Error/>, ready: <Content/> };
{views[status] ?? <Idle/>}`}),e.jsx("h3",{children:"D) Conditional props/variants"}),e.jsx(o.Code,{children:`// Choose component variant
<Button kind={primary ? "primary" : "default"} />

// Choose class token
const cx = (...xs) => xs.filter(Boolean).join(" ");
<button className={cx("btn", primary ? "btn--primary" : "btn--default")}>Save</button>

// Choose inline style value
<div style={{ opacity: disabled ? 0.5 : 1 }} />`}),e.jsx("h3",{children:"E) Ternary vs && and ||"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ternary"}),': has both branches (A/else B) → best for "this or that".']}),e.jsxs("li",{children:[e.jsx("strong",{children:"&&"}),": show-only-if-truthy; beware rendering ",e.jsx("code",{children:"0"})," by accident."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"||"}),": fallback for ",e.jsx("em",{children:"falsy"})," values; don't use it as an else-render unless you understand the truthiness."]})]}),e.jsx(o.Code,{children:`// ⚠️ Using || as else can be surprising if left side is ""
{title || "Untitled"}
// If empty string is valid and should show "", use ?? to only catch null/undefined:
{title ?? "Untitled"}`}),e.jsx("h3",{children:"F) Parentheses & formatting"}),e.jsx("p",{children:"Wrap multiline branches in parentheses for readability and to avoid precedence issues."}),e.jsx(o.Code,{children:`{cond ? (
  <header><Logo/><Nav/></header>
) : (
  <header><Logo/></header>
)}`}),e.jsx("h3",{children:"G) Precompute for clarity"}),e.jsx(o.Code,{children:`function Price({ price, discount }) {
  const final = discount ? price * (1 - discount) : price;
  return <p>₹{final}</p>;
}`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Over-nesting ternaries-prefer maps or precomputed variables."}),e.jsxs("li",{children:["Forgetting ",e.jsx("code",{children:"null"}),' for "render nothing" in the else branch.']}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"||"})," as a faux-else and accidentally hiding valid falsy values (like ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'}),")."]})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert to a ternary:",e.jsx(o.Code,{children:"// {isReady && <Ready/> || <Loading/>}"})]}),e.jsxs("li",{children:["Render ",e.jsx("code",{children:"<GoldBadge/>"})," for ",e.jsx("code",{children:'plan === "gold"'}),", ",e.jsx("code",{children:"<SilverBadge/>"})," otherwise."]}),e.jsxs("li",{children:["Replace the nested ternary with a lookup:",e.jsx(o.Code,{children:'// {role === "admin" ? <Admin/> : role === "user" ? <User/> : <Guest/>}'})]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"cond ? A : B"})," for clear two-branch rendering."]}),e.jsxs("li",{children:["Return ",e.jsx("code",{children:"null"}),' for "else nothing".']}),e.jsx("li",{children:"Keep branches readable (parentheses, format lines)."}),e.jsx("li",{children:"For 3+ branches, prefer a lookup map instead of deep nesting."}),e.jsxs("li",{children:["Don't misuse ",e.jsx("code",{children:"||"}),"; consider ",e.jsx("code",{children:"??"})," when only null/undefined need fallback."]})]}),e.jsx(o.Divider,{})]})}function tx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="early-return";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Early return pattern"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(rx,{})})})]})}function rx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Early return"})," = return from a component ",e.jsx("em",{children:"as soon as"})," a guard condition is met. It removes deep nesting, keeps JSX flat, and makes loading/empty/error states clearer."]}),e.jsx("h3",{children:"A) Basics - flatten your branches"}),e.jsx(o.Code,{children:`// ❌ Nested, harder to scan
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
}`}),e.jsx("h3",{children:"B) Loading / error / auth guards"}),e.jsx("p",{children:"Call hooks first (top-level), then gate the UI with early returns."}),e.jsx(o.Code,{children:`function ProductView({ id }) {
  const { data, loading, error } = useProduct(id);  // ✅ hooks at top level, always called

  if (loading) return <Spinner />;
  if (error)   return <ErrorBox error={error} />;
  if (!data)   return <Empty state="no-data" />;

  return <ProductCard product={data} />;
}`}),e.jsx("h3",{children:"C) ⚠️ Hooks + early return - the rule"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Never call Hooks conditionally."})," Put all Hooks at the top of the component, then do your early returns. If you must guard before any Hooks, split into a tiny wrapper."]}),e.jsx(o.Code,{children:`// ❌ Risky: hook is skipped when visible === false
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
}`}),e.jsx("h3",{children:"D) Early return vs && / ternary"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Early return"})," = best when a whole branch should short-circuit (loading, error, auth)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"&&"})," = show-only-if-truthy for small inline bits."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ternary"})," = choose exactly one of two UI branches."]})]}),e.jsx(o.Code,{children:`// Early return (whole component)
if (!isAuth) return <Login/>;

// Inline && (tiny fragment)
{isPremium && <Badge/>}

// Ternary (this or that)
{ready ? <Dashboard/> : <Loading/>}`}),e.jsx("h3",{children:"E) Event handlers: bail out early"}),e.jsxs("p",{children:["Same idea inside functions-avoid deep ",e.jsx("code",{children:"if"})," ladders."]}),e.jsx(o.Code,{children:`async function onSubmit(e) {
  e.preventDefault();
  if (submitting) return;           // guard
  if (!form.valid) return;          // guard
  setSubmitting(true);
  await save(form.value);
  setSubmitting(false);
}`}),e.jsx("h3",{children:"F) Empty states & feature flags"}),e.jsx(o.Code,{children:`function List({ items }) {
  if (!items?.length) return <Empty message="No items yet" />;
  return (
    <ul>{items.map(it => <li key={it.id}>{it.title}</li>)}</ul>
  );
}

function Experimental({ flags }) {
  if (!flags?.newUI) return <LegacyUI />;
  return <NewUI />;
}`}),e.jsx("h3",{children:"G) Multiple early returns - order matters"}),e.jsx("p",{children:"Put the most common/cheapest checks first. Keep each guard tiny and obvious."}),e.jsx(o.Code,{children:`function Report({ user, data, loading, error }) {
  if (!user)    return <LoginPrompt />;
  if (loading)  return <Spinner />;
  if (error)    return <ErrorBox error={error} />;
  if (!data)    return <Empty />;

  return <ReportBody data={data} />;
}`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Placing early returns ",e.jsx("em",{children:"before"})," Hooks and then calling Hooks only on some renders."]}),e.jsxs("li",{children:["Building complicated multi-line conditions-precompute a ",e.jsx("code",{children:"const"})," like ",e.jsx("code",{children:"canShow"}),"."]}),e.jsxs("li",{children:["Returning an empty string instead of ",e.jsx("code",{children:"null"}),' to "hide" UI (empty string still renders text).']})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert nested if/else into early returns:",e.jsx(o.Code,{children:`function View({ user, loading }) {
  if (loading) {
    return <Spinner/>;
  } else {
    if (user) {
      return <Dashboard/>;
    } else {
      return <Login/>;
    }
  }
}`})]}),e.jsxs("li",{children:["Split a component so that a visibility guard does ",e.jsx("em",{children:"not"})," sit above any Hooks."]}),e.jsxs("li",{children:["Reorder guards in a component to check ",e.jsx("code",{children:"!user"})," → ",e.jsx("code",{children:"loading"})," → ",e.jsx("code",{children:"error"})," → ",e.jsx("code",{children:"!data"}),"."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use early returns for clear loading/error/auth/empty branches."}),e.jsx("li",{children:'Call Hooks first; if you must guard earlier, split into a wrapper and an "Inner" component.'}),e.jsx("li",{children:"Prefer small, ordered guards over one giant condition."}),e.jsxs("li",{children:["Return ",e.jsx("code",{children:"null"})," to render nothing."]})]}),e.jsx(o.Divider,{})]})}function sx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="rendering-lists";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Rendering lists"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(ix,{})})})]})}function ix(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["In JSX, render collections with array methods like ",e.jsx("code",{children:"map()"}),", often after a"," ",e.jsx("code",{children:"filter()"})," or ",e.jsx("code",{children:"sort()"}),". Each rendered item must have a"," ",e.jsxs("strong",{children:["stable ",e.jsx("code",{children:"key"})]})," (deep dive in the next topic: ",e.jsx("em",{children:"Keys (stable identity)"}),")."]}),e.jsx("h3",{children:"A) Basics - map to elements"}),e.jsx(o.Code,{children:`const items = [
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
}`}),e.jsx("h3",{children:"B) Filter → map → (optional) slice/sort"}),e.jsx("p",{children:"Compose readable pipelines. Keep logic outside JSX if it's long."}),e.jsx(o.Code,{children:`function VisibleTodos({ todos, query }) {
  const list = todos
    .filter(t => t.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 10);

  return (
    <ul>
      {list.map(t => <li key={t.id}>{t.title}</li>)}
    </ul>
  );
}`}),e.jsx("h3",{children:"C) Empty state gracefully"}),e.jsx(o.Code,{children:`function List({ items }) {
  if (!items?.length) return <p className="muted">No items yet</p>;
  return <ul>{items.map(i => <li key={i.id}>{i.title}</li>)}</ul>;
}`}),e.jsx("h3",{children:"D) Multiple siblings per item → use a keyed Fragment"}),e.jsx("p",{children:"Return more than one node per item without extra DOM wrappers."}),e.jsx(o.Code,{children:`function Pairs({ pairs }) {
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
}`}),e.jsx("h3",{children:"E) Tables - map rows (and cells)"}),e.jsx(o.Code,{children:`function UsersTable({ users }) {
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
}`}),e.jsx("h3",{children:"F) Nested lists"}),e.jsx(o.Code,{children:`function Categories({ data }) {
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
}`}),e.jsx("h3",{children:"G) Extract an item component (keeps JSX clean)"}),e.jsx(o.Code,{children:`function TodoItem({ todo, onToggle }) {
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
}`}),e.jsx("h3",{children:"H) Keys (quick note - full details next)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use a ",e.jsx("strong",{children:"stable id"})," from your data as ",e.jsx("code",{children:"key"})," (not array index)."]}),e.jsxs("li",{children:["Keys live on the ",e.jsx("em",{children:"array's direct children"}),"."]}),e.jsx("li",{children:"Reordering/removing items needs stable keys to preserve component state per item."})]}),e.jsx("h3",{children:"I) Performance tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Precompute big pipelines (",e.jsx("code",{children:"filter/sort/map"}),") before ",e.jsx("code",{children:"return"})," for readability."]}),e.jsxs("li",{children:["Memoize expensive derived arrays with ",e.jsx("code",{children:"useMemo"})," if inputs rarely change."]}),e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"id"})," keys; avoid re-creating arrays unnecessarily in parents to reduce re-renders."]})]}),e.jsx(o.Code,{children:`function HeavyList({ data, query }) {
  const visible = React.useMemo(() => {
    const q = query.toLowerCase();
    return data
      .filter(x => x.title.toLowerCase().includes(q))
      .sort((a,b) => a.title.localeCompare(b.title));
  }, [data, query]);

  return <ul>{visible.map(x => <li key={x.id}>{x.title}</li>)}</ul>;
}`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Forgetting ",e.jsx("code",{children:"key"})," or putting it on the wrong element."]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"index"})," as key (can break state on reorders). More on this in the next topic."]}),e.jsxs("li",{children:["Performing expensive computations inside ",e.jsx("code",{children:"map"})," on every render-precompute outside."]}),e.jsxs("li",{children:["Returning ",e.jsx("code",{children:"undefined"})," by accident (missing ",e.jsx("code",{children:"return"})," in curly-body arrow functions)."]})]}),e.jsx(o.Code,{children:`// ❌ Curly body needs an explicit return
items.map(i => { <li>{i.title}</li> }); // undefined

// ✅ Implicit return with parens
items.map(i => (<li key={i.id}>{i.title}</li>));

// ✅ Or explicit return
items.map(i => { return <li key={i.id}>{i.title}</li>; });`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Render products as a list with name + price (₹), sorted by price asc, limited to top 5."}),e.jsxs("li",{children:["Build a table of users (",e.jsx("code",{children:"{ id, name, role }"}),") and show only ",e.jsx("code",{children:'role === "admin"'}),"."]}),e.jsxs("li",{children:["From an array of categories with nested ",e.jsx("code",{children:"items"}),", render a section per category and a list of item labels."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Compose ",e.jsx("code",{children:"filter → sort → map"}),"."]}),e.jsxs("li",{children:["Each item needs a ",e.jsxs("strong",{children:["stable ",e.jsx("code",{children:"key"})]})," (covered in the next topic)."]}),e.jsx("li",{children:"Use keyed Fragments when returning multiple siblings per item."}),e.jsx("li",{children:"Show an empty state when the list is blank."}),e.jsx("li",{children:"Extract an Item component for cleaner JSX and easier reuse."})]}),e.jsx(o.Divider,{})]})}function ox({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="keys-stable-identity";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Keys (stable identity)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(lx,{})})})]})}function lx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"key"}),' tells React "which child is which" across renders. With ',e.jsx("em",{children:"stable"})," keys, React preserves the correct DOM and component ",e.jsx("em",{children:"state"})," when items move, insert, or delete."]}),e.jsx("h3",{children:"A) The basic rule"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use a ",e.jsx("strong",{children:"stable id from your data"})," as the ",e.jsx("code",{children:"key"})," (e.g., ",e.jsx("code",{children:"user.id"}),")."]}),e.jsxs("li",{children:["Keys go on the ",e.jsx("em",{children:"elements returned by the array"})," (the direct children of the map)."]}),e.jsxs("li",{children:["Keys must be ",e.jsx("strong",{children:"unique among siblings"})," (not globally unique)."]})]}),e.jsx(o.Code,{children:`const todos = [
  { id: "t1", title: "Learn JSX" },
  { id: "t2", title: "Practice keys" },
];

<ul>
  {todos.map(t => <li key={t.id}>{t.title}</li>)}
</ul>`}),e.jsx("h3",{children:"B) Why not index keys? (State sticks to positions)"}),e.jsxs("p",{children:["Using array index as key ties state to the ",e.jsx("em",{children:"position"}),`, not the item. On reorders/inserts/removals, you'll see wrong items "remember" state (like a checked box moving to another row).`]}),e.jsx(o.Code,{children:`// ❌ Index key causes state bugs when list changes
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
}`}),e.jsx("h3",{children:"C) Where to put the key (correct placement)"}),e.jsxs("p",{children:["Put the key on the element returned from ",e.jsx("code",{children:"map()"}),". If you extract an item component, put the key on the usage, not inside the child."]}),e.jsx(o.Code,{children:`// ❌ Key inside child is ignored for the outer list
function TodoItem({ todo }) {
  return <li /* key={todo.id} - WRONG place */>{todo.title}</li>;
}
<ul>
  {todos.map(t => <TodoItem /* key should be here */ todo={t} />)}
</ul>

// ✅ Correct: key on the array's direct child
<ul>
  {todos.map(t => <TodoItem key={t.id} todo={t} />)}
</ul>`}),e.jsx("h3",{children:"D) Multiple siblings per item → keyed Fragment"}),e.jsxs("p",{children:["When each item needs to render more than one sibling, wrap them in a ",e.jsx("code",{children:"<React.Fragment key=...>"}),"."]}),e.jsx(o.Code,{children:`{rows.map(row => (
  <React.Fragment key={row.id}>
    <tr><th colSpan={2}>{row.title}</th></tr>
    <tr>
      <td>{row.left}</td>
      <td>{row.right}</td>
    </tr>
  </React.Fragment>
))}`}),e.jsx("h3",{children:"E) Composite keys (when no single id)"}),e.jsxs("p",{children:["Create a stable composite key from stable parts (avoid ",e.jsx("code",{children:"Math.random()"})," or timestamps)."]}),e.jsx(o.Code,{children:`// Grid cells: combine row + col ids
{grid.map(row => (
  <tr key={row.id}>
    {row.cells.map(col => (
      <td key={row.id + ":" + col.id}>{col.value}</td>
    ))}
  </tr>
))}`}),e.jsx("h3",{children:'F) When is using index "okay"?'}),e.jsxs("ul",{children:[e.jsxs("li",{children:["List is ",e.jsx("strong",{children:"static"})," (no insert/reorder/remove) and purely presentational."]}),e.jsx("li",{children:"No stateful child components inside the list items."}),e.jsx("li",{children:"Data has no stable id and you won't change the list order during the component's life."})]}),e.jsx(o.Code,{children:`// Mostly static icons row (no reorders) -> index is acceptable
const icons = [HomeIcon, SearchIcon, UserIcon];
<nav>
  {icons.map((Icon, i) => <Icon key={i} aria-hidden="true" />)}
</nav>`}),e.jsx("h3",{children:"G) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Random keys"})," (",e.jsx("code",{children:"Math.random()"}),") → change every render, forcing remounts."]}),e.jsxs("li",{children:["Using ",e.jsx("strong",{children:"unstable derived values"})," (like array index, or ",e.jsx("code",{children:"JSON.stringify(obj)"})," when the object is recreated each time)."]}),e.jsxs("li",{children:["Putting the key on a ",e.jsx("em",{children:"descendant"})," instead of the mapped element."]}),e.jsx("li",{children:"Duplicate keys among siblings → React warning; reconciliation becomes ambiguous."})]}),e.jsx(o.Code,{children:`// ❌ Bad: random key remounts every render
<li key={Math.random()}>{title}</li>

// ❌ Bad: object reference changes each render
<li key={item}>{item.title}</li> // key becomes "[object Object]" and is unstable

// ✅ Good: stable data id
<li key={item.id}>{item.title}</li>`}),e.jsx("h3",{children:"H) Demo: reordering with and without stable keys"}),e.jsx(o.Code,{children:`// Try moving the first item to the end; with index keys, a focused input may jump
function Row({ item }) {
  const [text, setText] = React.useState(item.label);
  return <input value={text} onChange={e => setText(e.target.value)} />;
}

function BadReorder({ items }) {
  return items.map((it, i) => <Row key={i} item={it} />);
}

function GoodReorder({ items }) {
  return items.map(it => <Row key={it.id} item={it} />);
}`}),e.jsx("h3",{children:"I) Checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Prefer ",e.jsx("strong",{children:"stable ids"})," from data as keys."]}),e.jsxs("li",{children:["Key the ",e.jsx("em",{children:"direct child"})," returned from ",e.jsx("code",{children:"map()"}),"."]}),e.jsx("li",{children:"Avoid index keys if items can be re-ordered/inserted/removed or contain state."}),e.jsxs("li",{children:["Use keyed ",e.jsx("code",{children:"React.Fragment"})," when returning multiple siblings per item."]}),e.jsx("li",{children:"Composite keys are fine if built from stable parts."})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Fix the key placement:",e.jsx(o.Code,{children:`function Item({ user }) { return <li>{user.name}</li>; }
<ul>
  {users.map(u => <Item user={u} />)}   // where should key go?
</ul>`})]}),e.jsx("li",{children:"Replace index keys with stable keys in a list where items can be deleted."}),e.jsxs("li",{children:["Build a 2D table from ",e.jsx("code",{children:"rows: {id, cells: {id, value}[] }[]"})," using composite keys."]})]}),e.jsx(o.Divider,{})]})}function ax({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="dangerous-html";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Dangerous HTML (when/why)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(cx,{})})})]})}function cx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["React ",e.jsx("strong",{children:"escapes"})," text by default to prevent XSS. If you must inject raw HTML, use ",e.jsx("code",{children:"dangerouslySetInnerHTML"})," - but only with ",e.jsx("strong",{children:"trusted/sanitized"})," content."]}),e.jsx("h3",{children:"A) Basic usage"}),e.jsx(o.Code,{children:`const html = "<strong>Trusted</strong> snippet";
<div dangerouslySetInnerHTML={{ __html: html }} />`}),e.jsxs("p",{children:["The prop expects an object with a ",e.jsx("code",{children:"__html"})," key. This bypasses React's escaping, so any scripts/handlers inside will execute if the browser allows them."]}),e.jsx("h3",{children:"B) When should you use it?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Rendering ",e.jsx("strong",{children:"sanitized CMS/Markdown"})," output."]}),e.jsxs("li",{children:["Server-rendered fragments you ",e.jsx("strong",{children:"control"})," and sanitize."]}),e.jsxs("li",{children:["Embedding ",e.jsx("strong",{children:"trusted"})," vendor widgets/snippets (or prefer iframes)."]})]}),e.jsx("h3",{children:"C) XSS risk demo (do NOT do this)"}),e.jsx(o.Code,{children:`// ❌ Never inject user input directly
function Bad({ userInputHTML }) {
  return <div dangerouslySetInnerHTML={{ __html: userInputHTML }} />;
}

// An attacker could send: '<img src=x onerror="alert("hacked")">'
// or '<script>...<\/script>'`}),e.jsx("h3",{children:"D) Sanitize first (recommended)"}),e.jsxs("p",{children:["Prefer sanitizing on the ",e.jsx("strong",{children:"server"}),". If you must sanitize on the client, use a well-tested library (e.g., ",e.jsx("code",{children:"dompurify"}),")."]}),e.jsx(o.Code,{children:`// npm i dompurify
import DOMPurify from "dompurify";

function SafeHTML({ html }) {
  const clean = React.useMemo(() => DOMPurify.sanitize(html), [html]);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}`}),e.jsx("h3",{children:"E) Notes & limitations"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Elements injected this way are ",e.jsx("strong",{children:"not React-managed"}),"; no React event handlers inside."]}),e.jsx("li",{children:"Prefer plain JSX whenever possible; raw HTML is a last resort."}),e.jsxs("li",{children:["Consider ",e.jsx("strong",{children:"CSP"})," headers to reduce script injection impact (not a replacement for sanitization)."]}),e.jsx("li",{children:"Don't “roll your own” sanitizer - easy to miss edge cases."})]}),e.jsx("h3",{children:"F) Markdown workflow (safe pattern)"}),e.jsx(o.Code,{children:`// 1) Convert Markdown -> HTML (on server or trusted parser).
// 2) Sanitize the HTML.
// 3) Inject sanitized HTML.
<SafeHTML html={sanitizedHtml} />`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Passing user-generated HTML without sanitization."}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"dangerouslySetInnerHTML"})," where JSX would work fine."]}),e.jsxs("li",{children:["Forgetting the ",e.jsx("code",{children:"__html"})," key: it must be"," ",e.jsx("code",{children:"{{ __html: htmlString }}"}),"."]})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert to safe rendering using ",e.jsx("code",{children:"DOMPurify"}),":",e.jsx(o.Code,{children:`function Article({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}`})]}),e.jsxs("li",{children:["Spot the vulnerability and fix it:",e.jsx(o.Code,{children:`// Comments come from users
<CommentBody html={comment.rawHtml} />`})]}),e.jsxs("li",{children:["Wire a ",e.jsx("code",{children:"<SafeHTML/>"})," component that memo-sanitizes and renders an empty state when ",e.jsx("code",{children:"html"})," is missing."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Only inject ",e.jsx("strong",{children:"sanitized, trusted"})," HTML."]}),e.jsx("li",{children:"Prefer JSX or iframes for third-party embeds."}),e.jsx("li",{children:"Remember: React won't attach events inside injected HTML."}),e.jsxs("li",{children:["Server-side sanitize whenever possible; client-side with ",e.jsx("code",{children:"dompurify"})," if needed."]})]}),e.jsx(o.Divider,{})]})}function dx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="function-component-anatomy";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Function component anatomy"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(ux,{})})})]})}function ux(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["A React function component is a plain JavaScript function that returns JSX. Name it in ",e.jsx("strong",{children:"PascalCase"}),", receive props as the first argument, call Hooks only at the top, and return exactly one root element (Fragment is fine)."]}),e.jsx("h3",{children:"A) Minimum viable component"}),e.jsx(o.Code,{children:`// File: src/components/Greeting.jsx
export default function Greeting() {
  return <p>Hello</p>;
}

// Usage:
// <Greeting />`}),e.jsx("h3",{children:"B) Props basics (destructure, defaults, rest)"}),e.jsx(o.Code,{children:`// Destructure props with defaults; collect the rest for DOM pass-through
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
}`}),e.jsx("h3",{children:"C) State, refs, effects - Hooks live at the top"}),e.jsx("p",{children:"Always call Hooks in the same order on every render (no conditional calls)."}),e.jsx(o.Code,{children:`export function Counter({ step = 1 }) {
  const [count, setCount] = React.useState(0);
  const mounted = React.useRef(false);

  React.useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };      // cleanup on unmount
  }, []);

  function inc() { setCount(c => c + step); }

  return <button onClick={inc}>Count: {count}</button>;
}`}),e.jsx("h3",{children:"D) Rendering - one root, fragments, early returns"}),e.jsx(o.Code,{children:`export function Profile({ user }) {
  if (!user) return null;                            // early return

  return (
    <>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </>
  );
}`}),e.jsx("h3",{children:"E) Event handlers & synthetic events"}),e.jsx("p",{children:"Event props are camelCased and receive the React SyntheticEvent."}),e.jsx(o.Code,{children:`export function Form({ onSubmit }) {
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
}`}),e.jsx("h3",{children:"F) Derived values - compute outside JSX (memo if heavy)"}),e.jsx(o.Code,{children:`export function Price({ amount, discount = 0 }) {
  const final = React.useMemo(
    () => Math.max(0, Math.round(amount * (1 - discount))),
    [amount, discount]
  );
  return <span>₹{final}</span>;
}`}),e.jsx("h3",{children:"G) What belongs outside the component"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Static constants and helpers (do not recreate them on each render)."}),e.jsx("li",{children:"Pure utilities that don't need props or state."})]}),e.jsx(o.Code,{children:`// ✅ outside: stable across renders
const CURRENCY = new Intl.NumberFormat("en-IN");

export function Total({ value }) {
  return <strong>{CURRENCY.format(value)}</strong>;
}`}),e.jsx("h3",{children:"H) Export patterns & naming"}),e.jsxs("ul",{children:[e.jsx("li",{children:"One component per file (usually). File named after the component."}),e.jsx("li",{children:"Default export for primary component; named exports for small helpers."}),e.jsx("li",{children:"Capitalize component names; never call components like functions."})]}),e.jsx(o.Code,{children:`// ✅ correct usage
<MyCard />

// ❌ don't do this
// MyCard() // calling as a plain function bypasses React`}),e.jsx("h3",{children:"I) Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Calling Hooks conditionally or inside loops."}),e.jsx("li",{children:"Returning multiple top-level siblings without a Fragment."}),e.jsx("li",{children:"Passing random props down to DOM without filtering when they aren't valid DOM attributes."}),e.jsx("li",{children:"Creating heavy objects/functions inline every render without need (premature churn)."})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert a lowercase function ",e.jsx("code",{children:"usercard"})," to a proper PascalCase component with a default prop for ",e.jsx("code",{children:"avatarSize"}),"."]}),e.jsxs("li",{children:["Build a ",e.jsx("code",{children:"<Tag>"})," that accepts ",e.jsx("code",{children:"children"}),", a ",e.jsx("code",{children:"tone"})," prop (",e.jsx("code",{children:"info"}),"/",e.jsx("code",{children:"warn"}),"/",e.jsx("code",{children:"danger"}),") and forwards ",e.jsx("code",{children:"...rest"})," to a ",e.jsx("code",{children:"span"}),"."]}),e.jsxs("li",{children:["Refactor a component that computes an expensive ",e.jsx("code",{children:"filtered"})," array on every render to use ",e.jsx("code",{children:"useMemo"}),"."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"PascalCase name; export from a same-named file."}),e.jsxs("li",{children:["Destructure props with sensible defaults; forward ",e.jsx("code",{children:"...rest"})," to the right element."]}),e.jsx("li",{children:"Hooks at the top; early return for guards."}),e.jsxs("li",{children:["Keep helpers/constants outside; compute heavy stuff with ",e.jsx("code",{children:"useMemo"})," only when needed."]}),e.jsx("li",{children:"Return a single root (Fragment ok); keep JSX readable."})]}),e.jsx(o.Divider,{})]})}function hx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="default-fallback-props";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Default/fallback props"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(px,{})})})]})}function px(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Give sensible defaults so components are easy to drop in. Prefer ",e.jsx("strong",{children:"parameter defaults"})," and ",e.jsx("strong",{children:"destructuring defaults"}),". Use ",e.jsx("code",{children:"??"})," when you want a runtime fallback that treats ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"}),' as "missing". Avoid legacy ',e.jsx("code",{children:"defaultProps"})," on function components."]}),e.jsx("h3",{children:"A) Parameter & destructuring defaults (recommended)"}),e.jsx(o.Code,{children:`// 1) Parameter default
export function Avatar({ size = 40, src, alt = "Avatar" }) {
  const style = { width: size, height: size, borderRadius: "50%" };
  return <img src={src} alt={alt} style={style} />;
}

// 2) Destructure inside the body (same effect)
export function Button(props) {
  const { children, kind = "primary", disabled = false, ...rest } = props;
  return (
    <button
      className={"btn " + (kind === "primary" ? "btn--primary" : "btn--default")}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"undefined"})," vs ",e.jsx("code",{children:"null"})," (why ",e.jsx("code",{children:"??"})," matters)"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Parameter/destructure defaults run only when the prop is ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:["If a parent passes ",e.jsx("code",{children:"null"}),", the default ",e.jsx("em",{children:"won't"})," apply-use ",e.jsx("code",{children:"??"})," to coalesce."]})]}),e.jsx(o.Code,{children:`export function Price({ amount, currency }) {
  // If parent passes currency={null}, we still want "INR"
  const cur = currency ?? "INR";      // treats null/undefined as missing
  return <span>{cur} {amount}</span>;
}`}),e.jsxs("h3",{children:["C) Avoid ",e.jsx("code",{children:"||"})," for numeric or empty-string props"]}),e.jsxs("p",{children:["Logical OR treats many values as falsy (e.g., ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:'""'}),"), which may wipe valid inputs."]}),e.jsx(o.Code,{children:`// ❌ 0 will fall back to 1 by accident
function Counter({ step }) {
  const s = step || 1;

  // ✅ keep valid 0 by using ??
  // const s = step ?? 1;
  return <span>step={s}</span>;
}`}),e.jsx("h3",{children:"D) Function defaults & optional chaining"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Prefer calling with ",e.jsx("code",{children:"?.()"})," rather than defaulting to a no-op."]}),e.jsx("li",{children:"Use defaults when you need a consistent signature."})]}),e.jsx(o.Code,{children:`export function Modal({ onClose }) {
  return <button onClick={() => onClose?.()}>Close</button>;
}

// Or default a callback:
export function Form({ onSubmit = () => {} }) {
  return <form onSubmit={(e) => { e.preventDefault(); onSubmit(new FormData(e.currentTarget)); }}>
    <button>Save</button>
  </form>;
}`}),e.jsx("h3",{children:"E) Object/array defaults"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Default parameter expressions run on every call → a fresh object/array each time."}),e.jsx("li",{children:"Great for style/option bags; don't mutate them inside the component."})]}),e.jsx(o.Code,{children:`export function Panel({ title = "Untitled", options = {} }) {
  const { padded = true } = options;
  return (
    <section className={padded ? "padded" : ""}>
      <h3>{title}</h3>
    </section>
  );
}`}),e.jsx("h3",{children:"F) Normalize prop variants with defaults"}),e.jsx("p",{children:"Map multiple inputs to a single internal shape, then render from that."}),e.jsx(o.Code,{children:`export function Tag({ tone = "info" }) {
  const cls = {
    info: "tag tag--info",
    warn: "tag tag--warn",
    danger: "tag tag--danger",
  }[tone] ?? "tag tag--info";
  return <span className={cls} />;
}`}),e.jsxs("h3",{children:["G) Legacy: ",e.jsx("code",{children:"defaultProps"})," on function components"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Historically used on classes; works on functions but is ",e.jsx("strong",{children:"discouraged"}),"."]}),e.jsx("li",{children:"Prefer parameter/destructure defaults for clarity and TypeScript/IDE tooling."})]}),e.jsx(o.Code,{children:`// ⚠️ Not recommended for function components
function Legacy({ color }) {
  return <div style={{ color }}>Hi</div>;
}
Legacy.defaultProps = { color: "tomato" };`}),e.jsx("h3",{children:"H) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"||"})," and accidentally overriding valid ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'}),"."]}),e.jsxs("li",{children:["Assuming defaults apply when the parent passes ",e.jsx("code",{children:"null"})," (they don't-use ",e.jsx("code",{children:"??"}),")."]}),e.jsx("li",{children:"Mutating defaulted objects/arrays inside the component."}),e.jsx("li",{children:"Leaking unknown props to DOM instead of filtering/forwarding intentionally."})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Make a ",e.jsx("code",{children:"<Badge>"})," with default ",e.jsx("code",{children:'tone="info"'})," and ensure ",e.jsxs("code",{children:["tone=",null]})," still becomes ",e.jsx("code",{children:'"info"'}),"."]}),e.jsxs("li",{children:["Fix a component that does ",e.jsx("code",{children:"const s = step || 1;"})," so that ",e.jsx("code",{children:"step=0"})," is respected."]}),e.jsxs("li",{children:["Build ",e.jsx("code",{children:"<Avatar size={number} alt={string} />"})," where missing/undefined values get sensible defaults without clobbering empty strings."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use parameter/destructure defaults for most cases."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"??"})," for runtime fallbacks that should treat ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," as missing."]}),e.jsxs("li",{children:["Avoid ",e.jsx("code",{children:"||"})," for numeric/string props that can be falsy."]}),e.jsx("li",{children:"Do not mutate defaulted objects/arrays."}),e.jsxs("li",{children:["Avoid ",e.jsx("code",{children:"defaultProps"})," on function components."]})]}),e.jsx(o.Divider,{})]})}function fx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="children-prop";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"children prop (slots-like)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(mx,{})})})]})}function mx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["The special prop ",e.jsx("code",{children:"{children}"})," is the content placed between a component's opening and closing tags. Think of it as the ",e.jsx("em",{children:"default slot"}),'. You can also create "named slots" by accepting extra props like ',e.jsx("code",{children:"header"})," / ",e.jsx("code",{children:"footer"}),", or use compound components for more flexible composition."]}),e.jsx("h3",{children:"A) Default slot: basic usage"}),e.jsx(o.Code,{children:`// Definition
export function Card({ title, children }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <div className="card__body">{children}</div>
    </section>
  );
}

// Usage
<Card title="Hello">
  <p>This is inside the card body.</p>
</Card>`}),e.jsx("h3",{children:"B) Fallback when no children"}),e.jsxs("p",{children:["Use a runtime check; prefer counting children so a valid ",e.jsx("code",{children:"0"})," or empty string is respected."]}),e.jsx(o.Code,{children:`export function Panel({ children }) {
  const hasKids = React.Children.count(children) > 0;
  return <div className="panel">{hasKids ? children : <em>Nothing here yet</em>}</div>;
}`}),e.jsx("h3",{children:"C) Named slots via props"}),e.jsxs("p",{children:["Accept ",e.jsx("code",{children:"header"}),"/",e.jsx("code",{children:"footer"}),"/",e.jsx("code",{children:"actions"})," props alongside ",e.jsx("code",{children:"{children}"}),"."]}),e.jsx(o.Code,{children:`export function Modal({ header, children, footer }) {
  return (
    <div className="modal">
      <header className="modal__header">{header}</header>
      <section className="modal__body">{children}</section>
      <footer className="modal__footer">{footer}</footer>
    </div>
  );
}

// Usage
<Modal
  header={<h4>Confirm</h4>}
  footer={<button>Close</button>}
>
  <p>Are you sure?</p>
</Modal>`}),e.jsx("h3",{children:"D) Compound components (slots-like, but declarative)"}),e.jsx("p",{children:"Define subcomponents on the parent. Consumers compose them like HTML. Optionally share state via context."}),e.jsx(o.Code,{children:`function Card({ children }) {
  return <section className="card">{children}</section>;
}
Card.Header = function Header({ children }) {
  return <h3 className="card__header">{children}</h3>;
};
Card.Body = function Body({ children }) {
  return <div className="card__body">{children}</div>;
};
Card.Footer = function Footer({ children }) {
  return <div className="card__footer">{children}</div>;
};

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer><button>OK</button></Card.Footer>
</Card>`}),e.jsxs("h3",{children:["E) Children can be a ",e.jsx("em",{children:"function"})," (render prop)"]}),e.jsxs("p",{children:["When you want the parent to control rendering for each item, accept a function as ",e.jsx("code",{children:"children"}),"."]}),e.jsx(o.Code,{children:`export function List({ items, children }) {
  // children: (item, index) => ReactNode
  return <ul>{items.map((it, i) => children(it, i))}</ul>;
}

// Usage
<List items={[{ id: 1, name: "A" }]}>
  {(it) => <li key={it.id}>{it.name}</li>}
</List>`}),e.jsx("h3",{children:"F) Inspecting/mapping children (advanced)"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"React.Children"})," helpers to count/map, and ",e.jsx("code",{children:"cloneElement"})," to inject props."]}),e.jsx(o.Code,{children:`export function Nav({ children, activeId }) {
  return (
    <ul className="nav">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const isActive = child.props.itemId === activeId;
        return React.cloneElement(child, { className: isActive ? "active" : undefined });
      })}
    </ul>
  );
}

// Usage
<Nav activeId="home">
  <a itemId="home" href="/home">Home</a>
  <a itemId="about" href="/about">About</a>
</Nav>`}),e.jsx("h3",{children:"G) Accessibility & expectations"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Document what can go in ",e.jsx("code",{children:"{children}"})," (text only? any nodes? a function?)."]}),e.jsx("li",{children:"Keep DOM structure predictable so screen readers and CSS remain stable."}),e.jsxs("li",{children:["Prefer composition over boolean props (e.g., pass a custom ",e.jsx("code",{children:"footer"})," instead of ",e.jsx("code",{children:"showClose"})," flags)."]})]}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Assuming ",e.jsx("code",{children:"children"})," is always an array—handle single nodes with ",e.jsx("code",{children:"React.Children"})," APIs."]}),e.jsx("li",{children:"Forgetting keys when mapping children produced by a render prop."}),e.jsxs("li",{children:["Overusing ",e.jsx("code",{children:"cloneElement"}),"—prefer simple composition unless you must inject props."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"{children}"})," is the default slot; check for presence before showing a fallback."]}),e.jsxs("li",{children:["Use named slot props (e.g., ",e.jsx("code",{children:"header"}),"/",e.jsx("code",{children:"footer"}),") or compound components for flexible layouts."]}),e.jsxs("li",{children:["Render-prop pattern: accept a function as ",e.jsx("code",{children:"children"})," when parent decides item rendering."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"React.Children"})," utilities and ",e.jsx("code",{children:"cloneElement"})," carefully."]})]}),e.jsx(o.Divider,{})]})}function xx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="composition-over-inheritance";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Composition over inheritance"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(jx,{})})})]})}function jx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["React favors ",e.jsx("strong",{children:"composition"})," (building UIs by combining components) instead of class-based inheritance. You'll reuse UI via ",e.jsx("em",{children:"containment"}),", ",e.jsx("em",{children:"specialization"}),", and ",e.jsx("em",{children:"shared logic with hooks"}),"-not by extending components."]}),e.jsx("h3",{children:"A) Containment with children (default slot)"}),e.jsx(o.Code,{children:`// A generic layout that "contains" arbitrary children
export function SidebarLayout({ sidebar, children }) {
  return (
    <div className="layout">
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </div>
  );
}

// Usage
<SidebarLayout sidebar={<Nav />}>
  <Article />
</SidebarLayout>`}),e.jsx("h3",{children:"B) Specialization (component does one job)"}),e.jsxs("p",{children:["Build a generic base; make specialized versions ",e.jsx("em",{children:"by composing"}),", not subclassing."]}),e.jsx(o.Code,{children:`// Base
function Button({ kind = "default", ...rest }) {
  const cls = "btn " + (kind === "primary" ? "btn--primary" : "btn--default");
  return <button className={cls} {...rest} />;
}

// Specializations via composition
export const PrimaryButton = props => <Button kind="primary" {...props} />;
export const DefaultButton = props => <Button kind="default" {...props} />;`}),e.jsx("h3",{children:"C) Compound components (coordinated pieces)"}),e.jsx("p",{children:"Parent exposes subcomponents; they share state via context so consumers get a clean, HTML-like API."}),e.jsx(o.Code,{children:`const ToggleCtx = React.createContext(null);

export function Toggle({ defaultOn = false, children }) {
  const [on, setOn] = React.useState(defaultOn);
  const value = React.useMemo(() => ({ on, setOn }), [on]);
  return <ToggleCtx.Provider value={value}>{children}</ToggleCtx.Provider>;
}

Toggle.Button = function Button(props) {
  const ctx = React.useContext(ToggleCtx);
  return <button onClick={() => ctx.setOn(o => !o)} {...props} />;
};
Toggle.Panel = function Panel({ children }) {
  const ctx = React.useContext(ToggleCtx);
  return ctx.on ? <div>{children}</div> : null;
};

// Usage
<Toggle>
  <Toggle.Button>Toggle</Toggle.Button>
  <Toggle.Panel>Now you see me</Toggle.Panel>
</Toggle>`}),e.jsx("h3",{children:"D) Share behavior with custom hooks (not inheritance)"}),e.jsx(o.Code,{children:`// Logic is reusable via a hook
function useCounter(initial = 0, step = 1) {
  const [n, setN] = React.useState(initial);
  const inc = React.useCallback(() => setN(x => x + step), [step]);
  const dec = React.useCallback(() => setN(x => x - step), [step]);
  return { n, inc, dec };
}

// UI #1
export function CounterButton() {
  const { n, inc } = useCounter(0, 1);
  return <button onClick={inc}>Count: {n}</button>;
}

// UI #2
export function CounterDisplay() {
  const { n, inc, dec } = useCounter(10, 5);
  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{n}</span>
      <button onClick={inc}>+</button>
    </div>
  );
}`}),e.jsx("h3",{children:"E) Component injection / render-as (flexible composition)"}),e.jsx("p",{children:'Accept a component to render "as" something, or inject parts via props.'}),e.jsx(o.Code,{children:`export function ButtonLink({ as: Comp = "button", ...rest }) {
  return <Comp {...rest} />;
}

// Usage
<ButtonLink onClick={save}>Save</ButtonLink>
<ButtonLink as="a" href="/docs">Docs</ButtonLink>
<ButtonLink as={NavLink} to="/home">Home</ButtonLink>`}),e.jsx("h3",{children:"F) HOCs vs hooks vs composition"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Hooks"})," are the modern way to share logic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HOCs"})," still exist but add wrapper components-use sparingly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Composition"})," arranges UI; hooks supply behavior."]})]}),e.jsx(o.Code,{children:`// HOC (older pattern)
const withLoading = (Comp) => (props) =>
  props.loading ? <Spinner/> : <Comp {...props} />;

// Hook + composition (preferred)
function useLoadingData(fetcher) {
  const [state, setState] = React.useState({ loading: true, data: null });
  React.useEffect(() => { fetcher().then(d => setState({ loading: false, data: d })); }, [fetcher]);
  return state;
}
function View({ fetcher }) {
  const { loading, data } = useLoadingData(fetcher);
  if (loading) return <Spinner/>;
  return <List items={data}/>;
}`}),e.jsx("h3",{children:"G) Why not inheritance here?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React components are just functions-no need to subclass to reuse UI."}),e.jsx("li",{children:"Inheritance entangles concerns and makes component trees rigid."}),e.jsx("li",{children:"Composition keeps pieces small, testable, and swappable."})]}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Boolean-prop explosion (e.g., ",e.jsx("code",{children:"Card showHeader showFooter ..."}),") instead of passing composed parts."]}),e.jsxs("li",{children:['Trying to "extend" a component to override small bits-prefer slots/children or an ',e.jsx("code",{children:"as"})," prop."]}),e.jsx("li",{children:"Stuffing business logic inside a UI component you wanted to reuse-extract a hook."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Prefer composition (children, slots, compound components) over inheritance."}),e.jsx("li",{children:"Share behavior with custom hooks; keep UI components thin."}),e.jsxs("li",{children:["Allow customization via props like ",e.jsx("code",{children:"header"}),"/",e.jsx("code",{children:"footer"})," or an ",e.jsx("code",{children:"as"})," prop."]}),e.jsxs("li",{children:["Document what goes in ",e.jsx("code",{children:"{children}"})," and keep DOM structure predictable."]})]}),e.jsx(o.Divider,{})]})}function gx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="prop-drilling";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Prop drilling (and why it hurts)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(yx,{})})})]})}function yx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Prop drilling"})," is passing a prop through layers of components that don't use it-just to reach a deep child. This couples distant parts of the tree and creates noisy, brittle code."]}),e.jsx("h3",{children:"A) What it looks like"}),e.jsx(o.Code,{children:`// App wants Button deep down to get user + onLogout
function App() {
  const [user, setUser] = React.useState({ name: "Ashish" });
  const onLogout = () => setUser(null);
  return <Page user={user} onLogout={onLogout} />;
}

function Page(props) {
  // doesn't need user/onLogout but passes them
  return <Toolbar {...props} />;
}

function Toolbar({ user, onLogout }) {
  return <UserButton user={user} onLogout={onLogout} />;
}

function UserButton({ user, onLogout }) {
  return user ? <button onClick={onLogout}>Logout {user.name}</button> : null;
}`}),e.jsx("h3",{children:"B) Why it hurts"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Brittle refactors:"})," rename or move a leaf and many pass-through signatures change."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Noise:"})," “prop soup” in components that don't use the values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Re-renders:"})," parents re-render when drilling values change, even if unused."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tight coupling:"})," upper layers must know lower-layer needs."]})]}),e.jsx("h3",{children:"C) When it's fine"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Very shallow trees, or one-off props passed a level or two."}),e.jsx("li",{children:"Leaf-only data where parents genuinely use the values too."})]}),e.jsx("h3",{children:"D) Better patterns"}),e.jsx("h4",{children:"1) Co-locate state near its consumers"}),e.jsx(o.Code,{children:`// Put state where it's used; lift up only when multiple siblings need it
function SearchBox() {
  const [q, setQ] = React.useState("");
  return <input value={q} onChange={e => setQ(e.target.value)} />;
}`}),e.jsx("h4",{children:"2) React Context for ambient concerns"}),e.jsx("p",{children:"Great for auth, theme, i18n, current user-data many levels down need."}),e.jsx(o.Code,{children:`// auth-context.js
const AuthCtx = React.createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = React.useState({ name: "Ashish" });
  const value = React.useMemo(() => ({ user, logout: () => setUser(null) }), [user]);
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
export function useAuth() {
  const ctx = React.useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}

// Anywhere deep:
function UserButton() {
  const { user, logout } = useAuth();
  return user ? <button onClick={logout}>Logout {user.name}</button> : null;
}

// App root:
function App() {
  return <AuthProvider><Page /></AuthProvider>;
}`}),e.jsx("h4",{children:"3) Custom hooks to share logic (not props)"}),e.jsx(o.Code,{children:`// useTheme.js
const ThemeCtx = React.createContext("light");
export const ThemeProvider = ({ value = "light", children }) =>
  <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
export const useTheme = () => React.useContext(ThemeCtx);

function Title({ children }) {
  const theme = useTheme();
  return <h3 className={theme === "dark" ? "title--dark" : "title"}>{children}</h3>;
}`}),e.jsx("h4",{children:"4) Composition & slots instead of boolean flags"}),e.jsx(o.Code,{children:`function Modal({ header, children, footer }) {
  return (
    <div className="modal">
      <header>{header}</header>
      <section>{children}</section>
      <footer>{footer}</footer>
    </div>
  );
}

// Callers inject pieces instead of toggling many props:
<Modal header={<h4>Confirm</h4>} footer={<button>Close</button>}>
  <p>Are you sure?</p>
</Modal>`}),e.jsx("h4",{children:"5) State libraries for app-wide stores"}),e.jsx("p",{children:"For large apps, use a lightweight store (e.g., Zustand) or Redux/Recoil/Jotai to avoid deep drilling and to select only the slices components need."}),e.jsx("h3",{children:"E) Performance notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["With Context, ",e.jsx("strong",{children:"split providers"})," (e.g., Auth vs Theme) so updates don't fan out unnecessarily."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memoize provider values"})," to keep referential stability."]}),e.jsxs("li",{children:["For heavy trees, prefer ",e.jsx("strong",{children:"selectors"})," (store libs) or split contexts by field."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"React.memo"})," on pass-through components when needed, but fix architecture first."]})]}),e.jsx("h3",{children:"F) Quick checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Passing through 3+ layers? Consider Context or a store."}),e.jsx("li",{children:"Co-locate state; lift only when multiple peers need it."}),e.jsx("li",{children:"Prefer composition/slots to boolean-prop bloat."}),e.jsx("li",{children:"Memoize context values and split providers by concern."})]}),e.jsx(o.Divider,{})]})}function vx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="pure-vs-stateful";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Pure visual vs stateful components"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(wx,{})})})]})}function wx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Think in two layers: ",e.jsx("strong",{children:"pure visual (presentational)"})," components that only render from props, and ",e.jsx("strong",{children:"stateful (container)"})," components that own state/side-effects and pass data down. Keeping this separation makes UIs easier to test, reuse, and reason about."]}),e.jsx("h3",{children:"A) Pure visual components (presentational)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Render ",e.jsx("em",{children:"only"})," from props; no local state or effects."]}),e.jsx("li",{children:"Deterministic: same props ⇒ same UI. Easy to snapshot test and memoize."}),e.jsx("li",{children:"No data fetching, timers, subscriptions-just structure and styling."})]}),e.jsx(o.Code,{children:`// Badge.jsx (pure visual)
export function Badge({ tone = "info", children }) {
  const cls = "badge " + (tone === "danger" ? "badge--danger" : "badge--info");
  return <span className={cls}>{children}</span>;
}

// Avatar.jsx (pure visual)
export function Avatar({ src, alt = "Avatar", size = 40 }) {
  return <img src={src} alt={alt} style={{ width: size, height: size, borderRadius: "50%" }} />;
}

// Optional: memoize when inputs are stable and renders are hot
export const BadgeMemo = React.memo(Badge);`}),e.jsx("h3",{children:"B) Stateful components (containers)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Own ",e.jsx("code",{children:"useState"}),", ",e.jsx("code",{children:"useEffect"}),", and side-effects (fetching, subscriptions)."]}),e.jsx("li",{children:"Compose pure visual components; pass props/callbacks down."}),e.jsx("li",{children:"Lift state up only when multiple children need it; otherwise co-locate near usage."})]}),e.jsx(o.Code,{children:`// ToggleContainer.jsx (stateful)
export function ToggleContainer() {
  const [on, setOn] = React.useState(false);
  return (
    <div>
      <button onClick={() => setOn(o => !o)}>{on ? "On" : "Off"}</button>
      {on && <Badge tone="info">Enabled</Badge>}
    </div>
  );
}

// FetchContainer.jsx (stateful: effect + loading states)
export function FetchUser() {
  const [state, setState] = React.useState({ loading: true, user: null, error: null });

  React.useEffect(() => {
    let alive = true;
    fetch("/api/user")
      .then(r => r.json())
      .then(user => alive && setState({ loading: false, user, error: null }))
      .catch(err => alive && setState({ loading: false, user: null, error: err }));
    return () => { alive = false; }; // cleanup
  }, []);

  if (state.loading) return <p>Loading…</p>;
  if (state.error)   return <p className="error">Failed to load</p>;
  return <ProfileCard user={state.user} />; // pure visual
}

// ProfileCard.jsx (pure)
function ProfileCard({ user }) {
  return (
    <section className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </section>
  );
}`}),e.jsx("h3",{children:"C) Container-presentational split (why it helps)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability:"})," swap containers without touching visuals (e.g., local vs server data)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Testing:"})," test visuals with props; test containers with mocks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance:"})," memo visual parts; containers update less often when state is colocated."]})]}),e.jsx(o.Code,{children:`// Container computes derived props; visual stays dumb
function ProductPriceContainer({ product }) {
  const final = React.useMemo(
    () => Math.max(0, product.price - (product.discount ?? 0)),
    [product.price, product.discount]
  );
  return <ProductPrice amount={final} currency="INR" />;   // pass plain props
}

function ProductPrice({ amount, currency }) {
  return <strong>{currency} {amount}</strong>;
}`}),e.jsx("h3",{children:"D) Where should state live?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Co-locate"})," state with the component that uses it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lift"})," state when multiple siblings need to coordinate."]}),e.jsxs("li",{children:["Avoid duplicating derived state-derive from props/state with ",e.jsx("code",{children:"useMemo"})," or inline expressions."]})]}),e.jsx(o.Code,{children:`// ❌ Duplicate derived state
// const [fullName, setFullName] = useState(first + " " + last);

// ✅ Derive instead
const fullName = first + " " + last;`}),e.jsx("h3",{children:"E) Controlled vs uncontrolled"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Controlled"}),": parent owns value and passes ",e.jsx("code",{children:"value"}),"/",e.jsx("code",{children:"onChange"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Uncontrolled"}),": component keeps its own internal state via ",e.jsx("code",{children:"defaultValue"}),"/",e.jsx("code",{children:"ref"}),"."]})]}),e.jsx(o.Code,{children:`// Controlled input (stateful parent + pure input)
function NameField({ value, onChange }) {
  return <input value={value} onChange={e => onChange(e.target.value)} />;
}

function ProfileForm() {
  const [name, setName] = React.useState("");
  return <NameField value={name} onChange={setName} />;
}`}),e.jsx("h3",{children:"F) Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Putting fetch/effects inside a reusable visual component (hard to reuse/test)."}),e.jsx("li",{children:"Over-lifting state to the app root, causing wide re-renders."}),e.jsx("li",{children:"Storing derivable values in state (risk of drift/bugs)."}),e.jsx("li",{children:"Premature memoization everywhere-start simple; memo only hot paths."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pure visuals: no state/effects; render from props; safe to memo."}),e.jsx("li",{children:"Stateful containers: own state/effects; pass props to visuals."}),e.jsx("li",{children:"Co-locate state; lift only when necessary."}),e.jsx("li",{children:"Prefer derived values over duplicating state."})]}),e.jsx(o.Divider,{})]})}function kx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="reusable-component-api-design";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Reusable component API design"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(bx,{})})})]})}function bx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Great component APIs are ",e.jsx("strong",{children:"predictable"}),", ",e.jsx("strong",{children:"minimal"}),", and ",e.jsx("strong",{children:"composable"}),". Favor clear names, sensible defaults, and patterns that scale (composition, slots, controlled/uncontrolled)."]}),e.jsx("h3",{children:"A) Keep the surface small & focused"}),e.jsxs("ul",{children:[e.jsx("li",{children:"One responsibility per component. If props feel unrelated, split the component."}),e.jsx("li",{children:"Start with a minimal set, add only when real use-cases appear."})]}),e.jsx("h3",{children:"B) Naming conventions"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Components in ",e.jsx("strong",{children:"PascalCase"}),", props in ",e.jsx("strong",{children:"camelCase"}),"."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"variant"})," and ",e.jsx("code",{children:"size"})," enums instead of many booleans."]}),e.jsxs("li",{children:["Boolean prop names read as facts: ",e.jsx("code",{children:"disabled"}),", ",e.jsx("code",{children:"busy"}),", ",e.jsx("code",{children:"selected"}),"."]}),e.jsxs("li",{children:["Callback props start with ",e.jsx("code",{children:"on"}),": ",e.jsx("code",{children:"onClick"}),", ",e.jsx("code",{children:"onClose"}),", ",e.jsx("code",{children:"onChange"}),"."]})]}),e.jsx("h3",{children:"C) Variant & size over flag explosion"}),e.jsx(o.Code,{children:`export function Button({
  variant = "primary",          // "primary" | "secondary" | "ghost"
  size = "md",                  // "sm" | "md" | "lg"
  disabled = false,
  children,
  ...rest
}) {
  const cls = [
    "btn",
    \`btn--\${variant}\`,
    \`btn--\${size}\`,
    disabled && "is-disabled",
  ].filter(Boolean).join(" ");

  return <button className={cls} disabled={disabled} {...rest}>{children}</button>;
}`}),e.jsx("h3",{children:'D) Polymorphic "as" prop + pass-through'}),e.jsx("p",{children:"Let callers choose the underlying element while preserving accessibility and types."}),e.jsx(o.Code,{children:`export function ButtonLike({ as: Comp = "button", children, ...rest }) {
  return <Comp {...rest}>{children}</Comp>;
}

// Usage
// <ButtonLike onClick={save}>Save</ButtonLike>
// <ButtonLike as="a" href="/docs">Docs</ButtonLike>`}),e.jsx("h3",{children:"E) Controlled & uncontrolled inputs"}),e.jsx("p",{children:"Support both patterns when building input-like components."}),e.jsx(o.Code,{children:`export const TextField = React.forwardRef(function TextField(
  { value, defaultValue = "", onChange, ...rest }, ref
) {
  const [inner, setInner] = React.useState(defaultValue);
  const isControlled = value != null;
  const val = isControlled ? value : inner;

  function handleChange(e) {
    onChange?.(e);
    if (!isControlled) setInner(e.target.value);
  }

  return <input ref={ref} value={val} onChange={handleChange} {...rest} />;
});`}),e.jsx("h3",{children:"F) Slots/children over boolean UI toggles"}),e.jsxs("p",{children:["Accept structural pieces via props or compound components instead of ",e.jsx("em",{children:"showX"})," flags."]}),e.jsx(o.Code,{children:`export function Card({ header, children, footer }) {
  return (
    <section className="card">
      {header && <header className="card__header">{header}</header>}
      <div className="card__body">{children}</div>
      {footer && <footer className="card__footer">{footer}</footer>}
    </section>
  );
}`}),e.jsx("h3",{children:"G) Accessibility by design"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Mirror native semantics: e.g., a toggle should expose ",e.jsx("code",{children:"aria-pressed"})," or use a real ",e.jsx("code",{children:"button"}),"."]}),e.jsxs("li",{children:["Expose id/label hooks where relevant (e.g., ",e.jsx("code",{children:"id"})," + ",e.jsx("code",{children:"aria-labelledby"}),")."]}),e.jsxs("li",{children:["Forward ",e.jsx("code",{children:"aria-*"})," / ",e.jsx("code",{children:"data-*"})," props via ",e.jsx("code",{children:"...rest"})," and don't strip them."]})]}),e.jsx(o.Code,{children:`export function Toggle({ pressed = false, onPressedChange, ...rest }) {
  return (
    <button
      role="button"
      aria-pressed={pressed}
      onClick={() => onPressedChange?.(!pressed)}
      {...rest}
    />
  );
}`}),e.jsx("h3",{children:"H) Refs & imperative handles (when needed)"}),e.jsx("p",{children:"Forward refs for focus/measure/scroll. Expose a small imperative API sparingly."}),e.jsx(o.Code,{children:`export const Modal = React.forwardRef(function Modal(props, ref) {
  const dialogRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    focusClose: () => dialogRef.current?.querySelector("button")?.focus(),
  }));
  return <div ref={dialogRef} role="dialog" aria-modal="true">{props.children}</div>;
});`}),e.jsx("h3",{children:"I) Stable defaults & safe fallbacks"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use parameter/destructure defaults; coalesce with ",e.jsx("code",{children:"??"})," when ",e.jsx("code",{children:"null"})," should also fall back."]}),e.jsxs("li",{children:["Keep defaulted objects immutable inside (don't mutate a default",e.jsx("code",{children:"options = {}"}),")."]})]}),e.jsx("h3",{children:"J) Don't leak invalid DOM props"}),e.jsx("p",{children:"Filter or map custom props before reaching the DOM; pass only valid attributes."}),e.jsx(o.Code,{children:`export function Box({ inset, ...rest }) {
  const style = inset ? { padding: 12, ...rest.style } : rest.style;
  // Strip custom prop 'inset' and pass only valid DOM props
  const { inset: _omit, ...dom } = rest;
  return <div style={style} {...dom} />;
}`}),e.jsx("h3",{children:"K) Data/logic separation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Reusable visual components shouldn't fetch data; containers do and pass props down."}),e.jsx("li",{children:"Share logic with custom hooks; keep components thin."})]}),e.jsx("h3",{children:"L) Versioning & extension points"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Prefer additive changes (new variants/slots) over breaking renames."}),e.jsx("li",{children:"Document supported values for enums; validate in dev (PropTypes or TS) if possible."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Small, focused API with clear names and defaults."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"variant"}),"/",e.jsx("code",{children:"size"})," enums; avoid boolean flag explosions."]}),e.jsx("li",{children:"Support composition: children/slots/compound components."}),e.jsxs("li",{children:["Consider ",e.jsx("code",{children:"as"})," + ",e.jsx("code",{children:"...rest"})," for flexibility."]}),e.jsxs("li",{children:["Design for a11y from day one; forward ",e.jsx("code",{children:"aria-*"}),"/",e.jsx("code",{children:"data-*"}),"."]}),e.jsx("li",{children:"Forward refs; expose imperative handles only when necessary."}),e.jsx("li",{children:"Filter invalid DOM props; keep data fetching out of reusable visuals."})]}),e.jsx(o.Divider,{})]})}function Cx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="use-state-basics";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"useState basics"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Sx,{})})})]})}function Sx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"useState"})," lets a function component remember a value between renders. You get a pair: ",e.jsx("em",{children:"state"})," and a ",e.jsx("em",{children:"setter"}),". Calling the setter schedules a re-render."]}),e.jsx("h3",{children:"A) Declaring state"}),e.jsx(o.Code,{children:`// [state, setState] = useState(initialValue)
function Counter() {
  const [count, setCount] = React.useState(0);   // number
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`}),e.jsx("h3",{children:"B) Any serializable value works"}),e.jsx(o.Code,{children:`function Examples() {
  const [open, setOpen] = React.useState(false);         // boolean
  const [text, setText] = React.useState("hello");       // string
  const [price, setPrice] = React.useState(99.99);       // number
  const [date, setDate] = React.useState(new Date());    // object (see immutability later)

  return (
    <>
      <button onClick={() => setOpen(o => !o)}>{open ? "Hide" : "Show"}</button>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>₹{price}</p>
      <p>{date.toLocaleDateString()}</p>
    </>
  );
}`}),e.jsx("h3",{children:"C) Reading state is a snapshot"}),e.jsxs("p",{children:["Inside an event, state reads the ",e.jsx("em",{children:"current"})," value for that render. After you call the setter, React re-renders with the new value."]}),e.jsx(o.Code,{children:`function LogDemo() {
  const [n, setN] = React.useState(0);
  function click() {
    console.log("before", n);     // e.g., 0
    setN(n + 1);                  // schedule update
    console.log("after", n);      // still 0 in this tick
  }
  return <button onClick={click}>n = {n}</button>;
}`}),e.jsx("h3",{children:"D) Controlled inputs (most common pattern)"}),e.jsx(o.Code,{children:`function NameField() {
  const [name, setName] = React.useState("");
  return <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />;
}`}),e.jsx("h3",{children:"E) Setting same value does not re-render"}),e.jsx(o.Code,{children:`function Stable() {
  const [mode, setMode] = React.useState("light");
  // Setting the same value is a no-op (React uses Object.is)
  return <button onClick={() => setMode("light")}>{mode}</button>;
}`}),e.jsx("h3",{children:"F) Rules of Hooks (must follow)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Call ",e.jsx("code",{children:"useState"})," at the ",e.jsx("strong",{children:"top level"})," of your component (not inside loops/ifs)."]}),e.jsxs("li",{children:["Call Hooks in the ",e.jsx("strong",{children:"same order"})," on every render."]}),e.jsx("li",{children:"Only call Hooks from React function components or custom Hooks."})]}),e.jsx("h3",{children:"G) Where to put event handlers & updates"}),e.jsx(o.Code,{children:`function Stepper({ step = 1 }) {
  const [n, setN] = React.useState(0);
  const inc = () => setN(n + step);     // basic update (next topic shows prev => prev + step)
  const reset = () => setN(0);
  return (
    <>
      <button onClick={inc}>+{step}</button>
      <button onClick={reset}>Reset</button>
      <span> {n} </span>
    </>
  );
}`}),e.jsx("h3",{children:"H) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Expecting the state variable to change ",e.jsx("em",{children:"immediately"})," after calling the setter in the same tick."]}),e.jsxs("li",{children:["Calling Hooks conditionally; wrap branches with early return ",e.jsx("em",{children:"after"})," Hooks."]}),e.jsx("li",{children:"Mutating objects/arrays in state (covered in later topics)."}),e.jsx("li",{children:"Using a single state object for unrelated fields-prefer multiple state variables."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"const [x, setX] = useState(init)"})," for each independent concern."]}),e.jsx("li",{children:"Call setters from events/effects; React will re-render with the new snapshot."}),e.jsx("li",{children:"If the next value depends on the previous one, prefer the functional form (next topic)."}),e.jsxs("li",{children:["For forms, bind ",e.jsx("code",{children:"value"})," and ",e.jsx("code",{children:"onChange"})," (controlled inputs)."]})]}),e.jsx(o.Divider,{})]})}function Rx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="functional-updates";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Functional updates (prev => ...)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Px,{})})})]})}function Px(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["When the next state ",e.jsx("em",{children:"depends on the previous state"}),", pass a function to the setter:",e.jsx("code",{children:"setX(prev => next)"}),". React will call it with the latest value, even across batched/async updates."]}),e.jsx("h3",{children:"A) Basic counter: stale value vs functional update"}),e.jsx(o.Code,{children:`function Counter() {
  const [n, setN] = React.useState(0);

  // ❌ Might be stale if called multiple times in one tick
  function addOneBad() {
    setN(n + 1);
    setN(n + 1); // still uses the old n -> ends at +1
  }

  // ✅ Always based on latest value; queues to +2
  function addOneGood() {
    setN(prev => prev + 1);
    setN(prev => prev + 1); // ends at +2
  }

  return (
    <>
      <button onClick={addOneBad}>Bad +1</button>
      <button onClick={addOneGood}>Good +1</button>
      <span> {n} </span>
    </>
  );
}`}),e.jsx("h3",{children:"B) Async callbacks capture old state — fix with functional form"}),e.jsx(o.Code,{children:`function AsyncDemo() {
  const [count, setCount] = React.useState(0);

  function tickWrong() {
    setTimeout(() => setCount(count + 1), 100); // 'count' may be stale
  }

  function tickRight() {
    setTimeout(() => setCount(c => c + 1), 100); // uses latest value
  }

  return (
    <>
      <button onClick={tickWrong}>+1 (wrong)</button>
      <button onClick={tickRight}>+1 (right)</button>
      <span> {count} </span>
    </>
  );
}`}),e.jsx("h3",{children:"C) Objects in state: copy then change (using prev)"}),e.jsx(o.Code,{children:`function Form() {
  const [user, setUser] = React.useState({ name: "", age: 0 });

  const onName = (e) =>
    setUser(prev => ({ ...prev, name: e.target.value }));

  const birthday = () =>
    setUser(prev => ({ ...prev, age: prev.age + 1 }));

  return (
    <>
      <input value={user.name} onChange={onName} placeholder="Name" />
      <button onClick={birthday}>Happy Birthday</button>
      <p>{user.name} – {user.age}</p>
    </>
  );
}`}),e.jsx("h3",{children:"D) Arrays in state: append / remove / update by id"}),e.jsx(o.Code,{children:`function Todos() {
  const [items, setItems] = React.useState([]);

  const add = (title) =>
    setItems(prev => [...prev, { id: crypto.randomUUID(), title }]);

  const remove = (id) =>
    setItems(prev => prev.filter(t => t.id !== id));

  const rename = (id, title) =>
    setItems(prev => prev.map(t => t.id === id ? { ...t, title } : t));

  return (
    <ul>
      {items.map(t => <li key={t.id}>{t.title}</li>)}
    </ul>
  );
}`}),e.jsx("h3",{children:"E) Multiple updates to different states stay consistent"}),e.jsx("p",{children:"Each setter's functional form receives the latest value from its own queue."}),e.jsx(o.Code,{children:`function Pair() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function bumpBoth() {
    setA(x => x + 1);
    setB(y => y + 1);
  }
  return <button onClick={bumpBoth}>a:{a} b:{b}</button>;
}`}),e.jsx("h3",{children:"F) When you don't need it"}),e.jsxs("ul",{children:[e.jsx("li",{children:"If the next value doesn't depend on the previous (e.g., set to a constant), you can pass the value directly."}),e.jsx("li",{children:"For derived values from props, prefer computing in render over storing in state (covered later)."})]}),e.jsx("h3",{children:"G) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Calling ",e.jsx("code",{children:"setX(x + 1)"})," multiple times in one handler expecting it to stack."]}),e.jsx("li",{children:"Using non-functional updates inside async callbacks (timers, promises, subscriptions)."}),e.jsx("li",{children:"Mutating objects/arrays in the updater instead of returning a new copy."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["If next value depends on previous → use ",e.jsx("code",{children:"setX(prev => next)"}),"."]}),e.jsx("li",{children:"Prefer functional updates inside async work and when batching multiple updates."}),e.jsxs("li",{children:["Return new objects/arrays from the updater; never mutate ",e.jsx("code",{children:"prev"}),"."]})]}),e.jsx(o.Divider,{})]})}function Ex({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="initial-state-function";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Initial state function (lazy init)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Tx,{})})})]})}function Tx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["If computing the initial value is expensive or should happen only once, pass a ",e.jsx("strong",{children:"function"})," to"," ",e.jsx("code",{children:"useState"}),". React calls it on the first render and caches the result."]}),e.jsx("h3",{children:"A) The pattern"}),e.jsx(o.Code,{children:`// ❌ runs every render (bad for heavy work)
const [value, setValue] = React.useState(expensiveCompute());

// ✅ lazy init: function runs only for the initial render
const [value, setValue] = React.useState(() => expensiveCompute());`}),e.jsx("h3",{children:"B) Example: expensive calculation only once"}),e.jsx(o.Code,{children:`function heavyFibonacci(n) {
  // pretend: CPU-heavy loop
  let a = 0, b = 1;
  for (let i = 0; i < n * 30_000; i++) [a, b] = [b, a + b];
  return a;
}

export function FibDemo({ n = 35 }) {
  const [fib, setFib] = React.useState(() => heavyFibonacci(n)); // runs once
  return (
    <div>
      <p>fib({n}) = {fib}</p>
      <button onClick={() => setFib(f => f + 1)}>adjust</button>
    </div>
  );
}`}),e.jsx("h3",{children:"C) Example: read once from localStorage (or environment)"}),e.jsx(o.Code,{children:`export function ThemeInit() {
  const [theme, setTheme] = React.useState(() => {
    // read once; avoid doing this on every render
    return localStorage.getItem("theme") ?? "light";
  });

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>{theme}</button>;
}`}),e.jsx("h3",{children:"D) Initializing from props (and when props change)"}),e.jsxs("p",{children:["The initializer runs only for the first render. If you want to ",e.jsx("em",{children:"recompute when a prop changes"}),", either:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Don't store it."})," Just compute from props in render (or with ",e.jsx("code",{children:"useMemo"})," if heavy)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Or"})," watch the prop and update state in an effect."]})]}),e.jsx(o.Code,{children:`// 1) Prefer compute on render (no state)
function Price({ amount, discount = 0 }) {
  const final = amount * (1 - discount);
  return <span>₹{final}</span>;
}

// 2) If you truly need local state initialized from a prop:
function Editor({ initialText }) {
  const [text, setText] = React.useState(() => initialText);
  // When initialText changes later, opt-in to updating state:
  React.useEffect(() => { setText(initialText); }, [initialText]);
  return <textarea value={text} onChange={e => setText(e.target.value)} />;
}`}),e.jsx("h3",{children:"E) Storing a function as state (don't confuse with updater)"}),e.jsxs("p",{children:["Passing a function to the setter is treated as an ",e.jsx("em",{children:"updater"}),". If your state value itself is a function, wrap it so React stores the function instead of calling it as an updater."]}),e.jsx(o.Code,{children:`const [fn, setFn] = React.useState(() => () => console.log("hi"));
// Later, set to a new function value:
setFn(() => () => console.log("updated")); // wrap in another fn`}),e.jsx("h3",{children:"F) Strict Mode note (dev only)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["In React 18's development ",e.jsx("em",{children:"Strict Mode"}),", React may invoke render/initializers twice to detect side effects."]}),e.jsxs("li",{children:["Therefore: keep initializers ",e.jsx("strong",{children:"pure"})," (no network calls, no mutations). They should just compute and return a value."]})]}),e.jsx("h3",{children:"G) Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Calling the expensive initializer directly (runs every render) instead of passing a function."}),e.jsx("li",{children:"Expecting the initializer to run again when props change—use compute-on-render or an effect."}),e.jsx("li",{children:"Doing side effects in the initializer (it should be pure and may run twice in dev)."}),e.jsx("li",{children:"Setting a function as state without wrapping, unintentionally triggering the updater form."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"useState(() => init())"})," for heavy or one-time reads (localStorage, parse, precompute)."]}),e.jsx("li",{children:"Derive from props in render unless you truly need editable local state."}),e.jsx("li",{children:"Keep the initializer pure; no side effects."}),e.jsxs("li",{children:["To store a function value, wrap it: ",e.jsx("code",{children:"setX(() => fn)"}),"."]})]}),e.jsx(o.Divider,{})]})}function Nx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="multiple-state-variables";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Multiple state variables"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Ix,{})})})]})}function Ix(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Use ",e.jsx("strong",{children:"one state variable per independent concern"}),". This keeps updates simple, avoids accidental overwrites, and makes code easier to read and test. Group fields into an object only when they naturally belong together and you always update them together (details in the next two topics)."]}),e.jsx("h3",{children:"A) Separate, independent concerns → separate state"}),e.jsx(o.Code,{children:`function Editor() {
  const [title, setTitle]   = React.useState("");
  const [body, setBody]     = React.useState("");
  const [saving, setSaving] = React.useState(false);

  async function save() {
    setSaving(true);
    await fakeSave({ title, body });
    setSaving(false);
  }

  return (
    <>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Body" />
      <button onClick={save} disabled={saving}>{saving ? "Saving…" : "Save"}</button>
    </>
  );
}`}),e.jsx("h3",{children:"B) When to group into an object (contrast)"}),e.jsxs("p",{children:["If fields are tightly coupled (e.g., a single ",e.jsx("em",{children:"form object"})," you validate/submit as a unit), grouping is fine. But remember immutability rules when updating objects (covered next)."]}),e.jsx(o.Code,{children:`// Grouped shape (ok if you treat it as one unit)
function ProfileForm() {
  const [form, setForm] = React.useState({ name: "", email: "" }); // one object

  const onName  = (e) => setForm(prev => ({ ...prev, name: e.target.value }));
  const onEmail = (e) => setForm(prev => ({ ...prev, email: e.target.value }));

  return (
    <>
      <input value={form.name}  onChange={onName}  />
      <input value={form.email} onChange={onEmail} />
    </>
  );
}`}),e.jsx("h3",{children:"C) Don't force unrelated things into one object"}),e.jsxs("p",{children:["Unrelated bits (like ",e.jsx("code",{children:"loading"}),", ",e.jsx("code",{children:"error"}),", ",e.jsx("code",{children:"filter"}),") are cleaner as separate state variables. You'll write fewer spread operations and avoid accidental field drops."]}),e.jsx(o.Code,{children:`// ✅ Clearer with separate state
const [loading, setLoading] = React.useState(false);
const [error,   setError]   = React.useState(null);
const [filter,  setFilter]  = React.useState("");

// ❌ Forcing them into one object often leads to clumsy updates and bugs
// const [state, setState] = React.useState({ loading:false, error:null, filter:"" });
// setState({ ...state, loading:true }); // easy to forget props or make stale reads`}),e.jsx("h3",{children:"D) Batching & performance note"}),e.jsx("p",{children:"React 18+ batches multiple state updates in the same tick (from events, timeouts, promises). It's fine to have several state variables—updating any triggers a single re-render per tick."}),e.jsx(o.Code,{children:`function Filters() {
  const [q, setQ] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState("recent");

  function applyPreset() {
    // These updates are batched into one render in React 18+
    setQ("react");
    setPage(1);
    setSort("top");
  }

  return <button onClick={applyPreset}>Apply preset</button>;
}`}),e.jsx("h3",{children:"E) Derive, don't duplicate"}),e.jsxs("p",{children:["Compute values from state/props in render (or ",e.jsx("code",{children:"useMemo"})," if heavy) instead of storing duplicates."]}),e.jsx(o.Code,{children:`const [items, setItems] = React.useState([]);
const [query, setQuery] = React.useState("");

// ❌ don't store filtered in state
// const [filtered, setFiltered] = React.useState([]);

// ✅ derive in render
const filtered = items.filter(x => x.title.toLowerCase().includes(query.toLowerCase()));`}),e.jsx("h3",{children:"F) Group logic with custom hooks (optional)"}),e.jsxs("p",{children:["If a set of states always travel together, bundle them into a ",e.jsx("em",{children:"custom hook"})," and return a small API."]}),e.jsx(o.Code,{children:`function useToggle(initial = false) {
  const [on, setOn] = React.useState(initial);
  const toggle = React.useCallback(() => setOn(o => !o), []);
  return { on, toggle, setOn };
}

// Usage
const { on, toggle } = useToggle();`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Overloading a single object state for unrelated concerns."}),e.jsx("li",{children:"Storing derived values (duplicates) instead of computing in render."}),e.jsx("li",{children:"Forgetting that Hook order must stay fixed when adding/removing state variables."}),e.jsx("li",{children:"Expecting multiple setters in one handler to cause multiple renders (they're batched)."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Create one state variable per independent concern."}),e.jsx("li",{children:"Group into an object only when fields form a single unit updated together."}),e.jsx("li",{children:"Compute derived data in render; don't duplicate in state."}),e.jsx("li",{children:"Multiple setters in one tick are batched (React 18+)."}),e.jsx("li",{children:"Hook order must be consistent across renders."})]}),e.jsx(o.Divider,{})]})}function Ax({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="objects-in-state";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Objects in state (immutability)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Ox,{})})})]})}function Ox(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["In React, ",e.jsx("strong",{children:"treat state as immutable"}),". The state setter ",e.jsx("em",{children:"replaces"})," the whole object; it doesn't merge like old class ",e.jsx("code",{children:"setState"}),". Create a new object when changing fields, and copy the parts you keep."]}),e.jsx("h3",{children:"A) Replace, don't mutate"}),e.jsx(o.Code,{children:`function Profile() {
  const [user, setUser] = React.useState({ name: "Ash", age: 20 });

  // ❌ Mutation: same reference; React may bail out (Object.is)
  function birthdayWrong() {
    user.age += 1;
    setUser(user); // same object ref -> may not re-render
  }

  // ✅ Immutability: new object with updated field
  function birthdayRight() {
    setUser(prev => ({ ...prev, age: prev.age + 1 }));
  }

  return (
    <>
      <p>{user.name} – {user.age}</p>
      <button onClick={birthdayWrong}>Wrong</button>
      <button onClick={birthdayRight}>Right</button>
    </>
  );
}`}),e.jsx("h3",{children:"B) Nested fields: copy each level you change"}),e.jsx(o.Code,{children:`function AddressForm() {
  const [form, setForm] = React.useState({
    user: { name: "", address: { city: "", pin: "" } },
    meta: { dirty: false }
  });

  function onCity(e) {
    const city = e.target.value;
    setForm(prev => ({
      ...prev,
      user: {
        ...prev.user,
        address: { ...prev.user.address, city }
      },
      meta: { ...prev.meta, dirty: true }
    }));
  }

  return (
    <>
      <input
        value={form.user.address.city}
        onChange={onCity}
        placeholder="City"
      />
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>
  );
}`}),e.jsx("h3",{children:"C) Partial updates with dynamic keys"}),e.jsx(o.Code,{children:`function Settings() {
  const [settings, setSettings] = React.useState({ theme: "light", lang: "en" });

  function setField(key, value) {
    setSettings(prev => ({ ...prev, [key]: value })); // dynamic prop name
  }

  // setField("theme", "dark")
  // setField("lang", "hi")
  return null;
}`}),e.jsx("h3",{children:"D) Replace vs merge (important)"}),e.jsxs("p",{children:["Calling the setter with an object ",e.jsx("em",{children:"replaces"}),' state. To "merge", you must spread the previous state yourself.']}),e.jsx(o.Code,{children:`const [prefs, setPrefs] = React.useState({ theme: "light", fontSize: 14 });

// ❌ Replaces the whole object; 'fontSize' disappears
setPrefs({ theme: "dark" });

// ✅ Merge manually
setPrefs(prev => ({ ...prev, theme: "dark" }));`}),e.jsx("h3",{children:"E) Complex updates: consider a helper (Immer) or useReducer"}),e.jsxs("p",{children:["For deep/nested updates, libraries like ",e.jsx("code",{children:"immer"}),' let you write "mutating" code that produces an immutable copy, or switch to ',e.jsx("code",{children:"useReducer"})," for clearer intent."]}),e.jsx(o.Code,{children:`// npm i immer
import { produce } from "immer";

function FormWithImmer() {
  const [form, setForm] = React.useState({ user: { name: "", address: { city: "" } } });

  const setCity = (city) =>
    setForm(prev => produce(prev, draft => {
      draft.user.address.city = city;  // looks like mutation; produces a new object
    }));

  return null;
}`}),e.jsx("h3",{children:"F) Referential equality & memoization"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React re-renders when the state reference changes. New objects create a new reference."}),e.jsxs("li",{children:["Don't recreate ",e.jsx("em",{children:"unrelated"})," objects unnecessarily; keep state ",e.jsx("em",{children:"minimal"})," to reduce churn."]}),e.jsxs("li",{children:["Downstream components can use ",e.jsx("code",{children:"React.memo"})," if their props keep the same references."]})]}),e.jsx("h3",{children:"G) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Mutating then setting the ",e.jsx("em",{children:"same"})," object reference (no re-render)."]}),e.jsx("li",{children:"Forgetting to copy each nested level you modify."}),e.jsx("li",{children:"Expecting automatic merge-function components don't merge object state."}),e.jsx("li",{children:"Putting many unrelated fields into one object and spreading them on every change."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"setX(prev => ({...prev, field}))"})," for object updates."]}),e.jsx("li",{children:"Clone each level you change; don't mutate nested objects."}),e.jsx("li",{children:"Setter replaces the whole object-merge manually with spreads (or use Immer/reducer)."}),e.jsx("li",{children:"Keep state minimal to stabilize references and ease memoization."})]}),e.jsx(o.Divider,{})]})}function Dx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="arrays-in-state";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Arrays in state (immutability)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Mx,{})})})]})}function Mx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Arrays in React state must be treated ",e.jsx("strong",{children:"immutably"}),". Don't mutate with",e.jsx("code",{children:"push"}),"/",e.jsx("code",{children:"splice"}),"/",e.jsx("code",{children:"sort"}),"; instead return ",e.jsx("em",{children:"new arrays"}),"using spread, ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"}),", or the newer",e.jsx("code",{children:"toSorted"}),"/",e.jsx("code",{children:"toReversed"}),"/",e.jsx("code",{children:"toSpliced"}),"."]}),e.jsx("h3",{children:"A) Add / remove / update by id"}),e.jsx(o.Code,{children:`function Todos() {
  const [items, setItems] = React.useState([
    { id: "a", title: "JSX" },
    { id: "b", title: "State" },
  ]);

  // Add
  const add = (title) =>
    setItems(prev => [...prev, { id: crypto.randomUUID(), title }]);

  // Remove
  const remove = (id) =>
    setItems(prev => prev.filter(t => t.id !== id));

  // Update
  const rename = (id, title) =>
    setItems(prev => prev.map(t => (t.id === id ? { ...t, title } : t)));

  return (
    <>
      <ul>{items.map(t => <li key={t.id}>{t.title}</li>)}</ul>
      <button onClick={() => add("New")}>Add</button>
      <button onClick={() => rename("a", "JSX ✅")}>Rename first</button>
      <button onClick={() => remove("b")}>Remove second</button>
    </>
  );
}`}),e.jsx("h3",{children:"B) Don't mutate: push/splice/sort vs immutable forms"}),e.jsx(o.Code,{children:`const [nums, setNums] = React.useState([3,1,2]);

// ❌ Mutates in place
// setNums(nums); nums.push(4);
// setNums(nums); nums.sort(); // mutates

// ✅ Immutable add
setNums(prev => [...prev, 4]);

// ✅ Immutable remove-at (index i)
setNums(prev => prev.filter((_, i) => i !== 1));

// ✅ Immutable replace-at
setNums(prev => prev.map((n, i) => (i === 0 ? 99 : n)));

// ✅ Sort without mutating (copy first)
setNums(prev => [...prev].sort((a,b) => a - b));

// ✅ Modern non-mutating helpers (where supported)
setNums(prev => prev.toSorted((a,b) => a - b));   // copy + sort
setNums(prev => prev.toReversed());               // copy + reverse
setNums(prev => prev.toSpliced(1, 1, 42));        // copy + splice
`}),e.jsx("h3",{children:"C) Insert at a position"}),e.jsx(o.Code,{children:`const insertAt = (arr, index, item) => [
  ...arr.slice(0, index),
  item,
  ...arr.slice(index),
];

// Usage
setItems(prev => insertAt(prev, 1, { id: "x", title: "Inserted" }));
// or with toSpliced: setItems(prev => prev.toSpliced(1, 0, newItem));`}),e.jsx("h3",{children:"D) Toggle membership (ids) without mutation"}),e.jsx(o.Code,{children:`const [selected, setSelected] = React.useState([]); // array of ids

function toggle(id) {
  setSelected(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
  );
}`}),e.jsx("h3",{children:"E) Avoid reusing the same array reference"}),e.jsxs("p",{children:["React compares state with ",e.jsx("code",{children:"Object.is"}),". If you mutate and pass the same array reference back, React may skip re-render. Always return a ",e.jsx("em",{children:"new array"}),"."]}),e.jsx(o.Code,{children:`// ❌ Wrong: in-place push then set the same ref
// items.push(newItem); setItems(items);

// ✅ Right: create a new array
setItems(prev => [...prev, newItem]);`}),e.jsx("h3",{children:"F) Nested arrays (copy each level you change)"}),e.jsx(o.Code,{children:`function Board() {
  const [lists, setLists] = React.useState([
    { id: "L1", cards: [{ id: "c1", text: "A" }] },
  ]);

  // Move a card to the end of the same list
  const move = (listId, cardId) => {
    setLists(prev => prev.map(list => {
      if (list.id !== listId) return list;
      const cards = list.cards;
      const idx = cards.findIndex(c => c.id === cardId);
      if (idx < 0) return list;
      const card = cards[idx];
      // copy each level we change
      const nextCards = [...cards.slice(0, idx), ...cards.slice(idx + 1), card];
      return { ...list, cards: nextCards };
    }));
  };

  return null;
}`}),e.jsx("h3",{children:"G) Keys & identity (quick reminder)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use a ",e.jsx("strong",{children:"stable id"})," for ",e.jsx("code",{children:"key"})," when mapping arrays. Avoid index keys if items can reorder."]}),e.jsx("li",{children:"When duplicating/updating items, keep their ids stable so component state doesn't “jump”."})]}),e.jsx("h3",{children:"H) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Calling mutating methods (",e.jsx("code",{children:"push"}),", ",e.jsx("code",{children:"splice"}),", ",e.jsx("code",{children:"sort"}),") directly on state arrays."]}),e.jsxs("li",{children:["Setting the same mutated reference (",e.jsx("code",{children:"setItems(items)"}),") and wondering why nothing re-rendered."]}),e.jsx("li",{children:"Forgetting to copy nested arrays/objects at each modified level."}),e.jsx("li",{children:"Using index as key in lists that change order or have stateful children."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"map"}),"/",e.jsx("code",{children:"filter"}),"/",e.jsx("code",{children:"[...prev]"})," (or ",e.jsx("code",{children:"toSorted"}),"/",e.jsx("code",{children:"toReversed"}),"/",e.jsx("code",{children:"toSpliced"}),") for immutable updates."]}),e.jsxs("li",{children:["Return a ",e.jsx("strong",{children:"new array"})," from setters; never mutate in place."]}),e.jsx("li",{children:"Copy each level you modify for nested structures."}),e.jsx("li",{children:"Prefer stable ids for list keys; avoid index when reordering."})]}),e.jsx(o.Divider,{})]})}function _x({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="derived-state-vs-compute";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Derived state vs compute in render"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Fx,{})})})]})}function Fx(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Keep a ",e.jsx("strong",{children:"single source of truth"}),". If a value can be calculated from existing state/props,",e.jsx("em",{children:"don't store it in state"}),"-",e.jsx("strong",{children:"compute it during render"})," (use ",e.jsx("code",{children:"useMemo"})," only as a perf optimization). Store it in state only when users can edit it independently or it can't be derived."]}),e.jsx("h3",{children:"A) Compute in render (preferred)"}),e.jsx(o.Code,{children:`function Cart({ items }) {
  // items: [{ id, title, price, qty }]
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const count = items.reduce((sum, it) => sum + it.qty, 0);
  const empty = items.length === 0;     // derived boolean

  return (
    <>
      <p>Total: ₹{total}</p>
      <p>Items: {count}</p>
      {!empty && <button>Checkout</button>}
    </>
  );
}`}),e.jsx("h3",{children:"B) Don't duplicate derived values in state"}),e.jsx(o.Code,{children:`// ❌ Anti-pattern: duplicating derived state
function Bad({ items }) {
  const [count, setCount] = React.useState(0); // duplicate of items
  React.useEffect(() => { setCount(items.length); }, [items]); // sync effect smell
  return <p>Count: {count}</p>;
}

// ✅ Compute from source each render
function Good({ items }) {
  const count = items.length;
  return <p>Count: {count}</p>;
}`}),e.jsx("h3",{children:"C) Filtering/sorting: derive, don't store"}),e.jsx(o.Code,{children:`function Search({ items }) {
  const [q, setQ] = React.useState("");

  // Derive on render (fast enough for typical lists)
  const visible = items.filter(x =>
    x.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search" />
      <ul>{visible.map(it => <li key={it.id}>{it.title}</li>)}</ul>
    </>
  );
}`}),e.jsx("h3",{children:"D) Heavy derivations → memoize (perf only)"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"useMemo"})," to avoid recomputing expensive results when inputs haven't changed. It doesn't change correctness."]}),e.jsx(o.Code,{children:`function Report({ rows }) {
  const total = React.useMemo(() => {
    // expensive loop
    let sum = 0;
    for (const r of rows) sum += r.amount;
    return sum;
  }, [rows]);

  return <strong>₹{total}</strong>;
}`}),e.jsx("h3",{children:"E) Initial value from props vs always-derived"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Editable local copy?"})," Initialize from a prop ",e.jsx("em",{children:"once"})," then let users edit."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Always mirrors props?"})," Don't store-compute from props every render."]})]}),e.jsx(o.Code,{children:`// 1) Editable local copy (initialized once, then user edits)
function Editor({ initialText }) {
  const [text, setText] = React.useState(() => initialText);
  // If the parent changes initialText later and you want to reflect it:
  // React.useEffect(() => setText(initialText), [initialText]);
  return <textarea value={text} onChange={e => setText(e.target.value)} />;
}

// 2) Always mirrors props -> compute, no state
function Price({ amount, discount = 0 }) {
  const final = amount * (1 - discount);
  return <span>₹{final}</span>;
}`}),e.jsx("h3",{children:`F) Don't set state to keep another state "in sync"`}),e.jsx("p",{children:"Sync effects that mirror one state into another are a code smell and risk infinite loops."}),e.jsx(o.Code,{children:`// ❌ Smell: mirroring
const [first, setFirst] = React.useState("");
const [full, setFull]   = React.useState("");
React.useEffect(() => { setFull(first + " Khan"); }, [first]); // unnecessary

// ✅ Compute during render
const fullName = first + " Khan";`}),e.jsx("h3",{children:"G) Formatting is derived"}),e.jsx("p",{children:"Display-ready strings (e.g., currency, dates) are derived from raw values-don't store both."}),e.jsx(o.Code,{children:`const nf = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });
function Amount({ value }) {
  return <span>{nf.format(value)}</span>;
}`}),e.jsx("h3",{children:"H) When storing derived data is acceptable"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["When you need to ",e.jsx("strong",{children:"edit"})," it independently (local draft separate from source)."]}),e.jsxs("li",{children:["When the derived value is ",e.jsx("strong",{children:"asynchronous and cached"})," (server results; use a cache/store)."]}),e.jsxs("li",{children:["When you must ",e.jsx("strong",{children:"persist"})," a snapshot (e.g., export, undo stack)."]})]}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Storing ",e.jsx("code",{children:"isEmpty"}),", ",e.jsx("code",{children:"fullName"}),", or ",e.jsx("code",{children:"filtered"})," in state instead of deriving."]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"useEffect"}),' to "sync" duplicates-causes drift and extra renders.']}),e.jsxs("li",{children:["Relying on ",e.jsx("code",{children:"useMemo"})," for correctness; it's a performance hint only."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Single source of truth: compute everything else during render."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"useMemo"})," only for heavy calculations."]}),e.jsx("li",{children:"Store only truly independent, user-editable, or persisted values."}),e.jsx("li",{children:"Avoid sync effects that mirror state; derive instead."})]}),e.jsx(o.Divider,{})]})}function Lx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="batching-state-updates";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Batching state updates (React 18+)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx($x,{})})})]})}function $x(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["In React 18+, ",e.jsx("strong",{children:"multiple state updates in the same tick are batched"})," into a single render - not only in React events, but also in timeouts, promises, and native event handlers. This improves performance and avoids unnecessary re-renders."]}),e.jsx("h3",{children:"A) Multiple setters → one render"}),e.jsx(o.Code,{children:`function Duo() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function bumpBoth() {
    setA(x => x + 1);
    setB(y => y + 1);
    // React 18 batches these -> one render
  }

  return <button onClick={bumpBoth}>a:{a} b:{b}</button>;
}`}),e.jsx("h3",{children:"B) Async boundaries are batched too (React 18)"}),e.jsx(o.Code,{children:`function AsyncBatch() {
  const [n, setN] = React.useState(0);

  function later() {
    setTimeout(() => {
      setN(v => v + 1);
      setN(v => v + 1);
      // Both updates inside the same timeout tick are batched -> +2 with one render
    }, 100);

    Promise.resolve().then(() => {
      setN(v => v + 1);
      setN(v => v + 1);
      // Updates inside a microtask (promise) are batched too
    });
  }

  return <button onClick={later}>n = {n}</button>;
}`}),e.jsx("h3",{children:"C) Reading state after set (same tick)"}),e.jsxs("p",{children:["After calling a setter, the variable in the current render doesn't change immediately. Compute the next value via the ",e.jsx("em",{children:"functional"})," form or move logic to the next render/effect."]}),e.jsx(o.Code,{children:`function Clicks() {
  const [n, setN] = React.useState(0);
  function addTwo() {
    setN(v => v + 1);
    setN(v => v + 1);
    // console.log(n) here still logs the previous value
  }
  return <button onClick={addTwo}>n = {n}</button>;
}`}),e.jsx("h3",{children:"D) Forcing sync flush (rare)"}),e.jsxs("p",{children:["If you must read the DOM right after an update in the ",e.jsx("em",{children:"same"})," tick (e.g., measure layout), you can break batching with ",e.jsx("code",{children:"flushSync"})," from ",e.jsx("code",{children:"react-dom"}),". Use sparingly - it forces an immediate render."]}),e.jsx(o.Code,{children:`import { flushSync } from "react-dom";

function Measure() {
  const [items, setItems] = React.useState([]);
  const listRef = React.useRef(null);

  function addAndMeasure() {
    flushSync(() => {
      setItems(prev => [...prev, { id: crypto.randomUUID() }]);
    });
    // At this point the DOM is updated; safe to measure
    const height = listRef.current?.getBoundingClientRect().height;
    console.log("height now:", height);
  }

  return (
    <ul ref={listRef}>
      {items.map(it => <li key={it.id}>row</li>)}
      <button onClick={addAndMeasure}>Add & measure</button>
    </ul>
  );
}`}),e.jsx("h3",{children:"E) React 17 vs 18 (what changed)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"React 17 and earlier:"})," only updates inside React event handlers were batched by default."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"React 18:"})," batching is automatic across timeouts, promises, native events, and more."]})]}),e.jsx("h3",{children:"F) Practical tips"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Prefer the functional setter form when stacking updates; it composes well with batching."}),e.jsx("li",{children:"Group related updates in the same tick - React will batch them for you."}),e.jsx("li",{children:"Avoid relying on immediate state reads after setters; use the next render or an effect."}),e.jsxs("li",{children:["Reach for ",e.jsx("code",{children:"flushSync"})," only when you must observe the DOM synchronously."]})]}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Expecting multiple setters in one handler to trigger multiple renders."}),e.jsx("li",{children:"Using non-functional updates repeatedly and hitting stale values."}),e.jsxs("li",{children:["Overusing ",e.jsx("code",{children:"flushSync"})," and hurting performance."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React 18 batches in events, timeouts, and promises."}),e.jsx("li",{children:"Use functional updates to stack changes safely."}),e.jsx("li",{children:"Don't read updated state in the same tick; render/effect will have the new value."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"flushSync"})," only for critical, synchronous DOM reads."]})]}),e.jsx(o.Divider,{})]})}function zx({defaultOpen:l=!1}){const[a,u]=O.useState(!!l),d="state-anti-patterns";return e.jsxs(o.Topic,{id:d,children:[e.jsxs(o.Title,{onClick:()=>u(p=>!p),"aria-expanded":a,"aria-controls":`${d}-panel`,id:`${d}-button`,"data-open":a,children:[e.jsx(o.Arrow,{"data-open":a,children:"▸"}),e.jsx("span",{children:"Anti-patterns (mutate, read before set)"})]}),e.jsx(o.Panel,{id:`${d}-panel`,role:"region","aria-labelledby":`${d}-button`,"data-open":a,children:e.jsx("div",{children:e.jsx(Ux,{})})})]})}function Ux(){return e.jsxs(o.Content,{children:[e.jsxs("p",{children:["Common state mistakes: ",e.jsx("strong",{children:"mutating"})," objects/arrays, ",e.jsx("strong",{children:"reading immediately after"})," a set, duplicating ",e.jsx("em",{children:"derived"})," values, and setting state during render. Here's what to avoid and how to fix it."]}),e.jsx("h3",{children:"A) Mutating objects/arrays in state"}),e.jsxs("p",{children:["React compares state by reference (",e.jsx("code",{children:"Object.is"}),"). Mutating the same object/array can skip re-renders and cause bugs."]}),e.jsx(o.Code,{children:`// ❌ mutation keeps the same reference
function Bad() {
  const [user, setUser] = React.useState({ name: "Ash", age: 20 });
  const wrong = () => { user.age++; setUser(user); }; // same object ref
  return <button onClick={wrong}>Age: {user.age}</button>;
}

// ✅ replace with a new object (copy the parts you keep)
function Good() {
  const [user, setUser] = React.useState({ name: "Ash", age: 20 });
  const birthday = () => setUser(prev => ({ ...prev, age: prev.age + 1 }));
  return <button onClick={birthday}>Age: {user.age}</button>;
}

// Arrays: use spread / map / filter (not push/splice/sort)
const add = title => setItems(prev => [...prev, { id: crypto.randomUUID(), title }]);
const remove = id => setItems(prev => prev.filter(t => t.id !== id));
const rename = (id, title) => setItems(prev => prev.map(t => t.id === id ? { ...t, title } : t));`}),e.jsx("h3",{children:"B) Reading state right after calling the setter"}),e.jsxs("p",{children:["State is a snapshot of the current render. After you call ",e.jsx("code",{children:"setX"}),", the variable ",e.jsx("code",{children:"x"})," won't change until the next render."]}),e.jsx(o.Code,{children:`function ReadAfterSet() {
  const [n, setN] = React.useState(0);
  function addTwoWrong() {
    setN(n + 1);
    setN(n + 1);
    console.log("still", n); // logs previous value
  }
  function addTwoRight() {
    setN(v => v + 1);
    setN(v => v + 1); // stacks to +2 safely
  }
  return (
    <>
      <button onClick={addTwoWrong}>Wrong +2</button>
      <button onClick={addTwoRight}>Right +2</button>
      <span> {n} </span>
    </>
  );
}`}),e.jsx("h3",{children:"C) Setting state during render (infinite loops)"}),e.jsx("p",{children:"Never call setters while rendering JSX. Do it in events/effects instead."}),e.jsx(o.Code,{children:`// ❌ bad: set during render based on a condition
function BadRenderSet({ value }) {
  const [n, setN] = React.useState(0);
  if (value > 0 && n === 0) setN(value); // will loop
  return <p>{n}</p>;
}

// ✅ move to an effect (runs after render)
function GoodRenderSet({ value }) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (value > 0 && n === 0) setN(value);
  }, [value, n]);
  return <p>{n}</p>;
}`}),e.jsx("h3",{children:"D) Duplicating derived state (sync effects smell)"}),e.jsx("p",{children:"If a value can be computed from props/state, don't mirror it in state using an effect."}),e.jsx(o.Code,{children:`// ❌ duplicate + sync effect
function Bad({ items }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => setCount(items.length), [items]);
  return <p>Count: {count}</p>;
}

// ✅ derive in render
function Good({ items }) {
  const count = items.length;
  return <p>Count: {count}</p>;
}`}),e.jsx("h3",{children:"E) Grouping unrelated fields in one object"}),e.jsx("p",{children:"Unrelated bits are simpler as separate states; you'll avoid spreads and accidental field drops."}),e.jsx(o.Code,{children:`// ✅ better
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState(null);

// ❌ cramming everything into one 'state' object -> noisy spreads`}),e.jsx("h3",{children:"F) Non-functional updates in async callbacks"}),e.jsx("p",{children:"Async callbacks capture stale variables; use the functional form."}),e.jsx(o.Code,{children:`// ❌ may read stale 'count'
setTimeout(() => setCount(count + 1), 200);

// ✅ always uses latest
setTimeout(() => setCount(c => c + 1), 200);`}),e.jsx("h3",{children:"G) Expensive initial compute on every render"}),e.jsx("p",{children:"Heavy initializers should run once via lazy init."}),e.jsx(o.Code,{children:`// ❌ runs each render
const [value] = React.useState(expensiveCompute());

// ✅ lazy init (runs once)
const [value] = React.useState(() => expensiveCompute());`}),e.jsx("h3",{children:"H) Using state for values that shouldn't trigger renders"}),e.jsx("p",{children:"Use a ref for things like timer IDs, previous values, or mutable instance data."}),e.jsx(o.Code,{children:`function Timer() {
  const idRef = React.useRef(null); // not state
  const start = () => { idRef.current = setInterval(() => {}, 1000); };
  const stop  = () => { clearInterval(idRef.current); idRef.current = null; };
  return <button onClick={start} onDoubleClick={stop}>Start/Stop</button>;
}`}),e.jsx("h3",{children:"I) Mutating nested structures without copying each level"}),e.jsx("p",{children:"When updating a deep field, copy every level you change-or use Immer."}),e.jsx(o.Code,{children:`// With spreads
setForm(prev => ({
  ...prev,
  user: { ...prev.user, address: { ...prev.user.address, city: "Pune" } }
}));

// With immer (looks mutating but is immutable)
import { produce } from "immer";
setForm(prev => produce(prev, d => { d.user.address.city = "Pune"; }));`}),e.jsx("h3",{children:"J) Expecting many sets to cause many renders"}),e.jsx("p",{children:"React 18 batches updates (events, promises, timeouts). Use functional updates to stack changes safely."}),e.jsx(o.Code,{children:`setN(v => v + 1);
setN(v => v + 1); // one render, +2`}),e.jsx("h3",{children:"Checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Replace-don't mutate-objects/arrays in state."}),e.jsx("li",{children:"Don't read updated state in the same tick; use functional updates or the next render/effect."}),e.jsx("li",{children:"No setters during render; use events/effects."}),e.jsx("li",{children:"Compute derived values in render; avoid sync “mirroring” effects."}),e.jsx("li",{children:"Separate unrelated concerns into separate states; keep state minimal."}),e.jsx("li",{children:"Use refs for non-visual instance data (timer IDs, imperatives)."}),e.jsx("li",{children:"Copy each level for nested updates (or use Immer)."}),e.jsx("li",{children:"Remember: React 18 batches; write updates accordingly."})]}),e.jsx(o.Divider,{})]})}function Bx(){return e.jsxs(Hx.Wrapper,{children:[e.jsx("h1",{children:"ReactJS Handbook"}),e.jsxs("fieldset",{style:{padding:"0 15px 15px 30px",marginBottom:15},children:[e.jsx("legend",{style:{padding:15},children:"From Wikipedia - last updated: Sep 02, 2025"}),e.jsx("p",{children:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.'}),e.jsx("br",{}),e.jsx("p",{children:"React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements."})]}),e.jsx("h1",{style:{marginTop:"30px"},children:"My Notes"}),e.jsx("h3",{children:"last updated: Sep 03, 2025"}),e.jsx("div",{className:"divider"}),e.jsx("h3",{children:"0. Setup & Local Dev"}),e.jsxs(e.Fragment,{children:[e.jsx(Jf,{}),e.jsx(Xf,{}),e.jsx(Yf,{}),e.jsx(em,{}),e.jsx(tm,{}),e.jsx(sm,{})]}),e.jsx("h3",{style:{marginTop:50},children:"1. ES6+ I actually use daily"}),e.jsxs(e.Fragment,{children:[e.jsx(om,{}),e.jsx(am,{}),e.jsx(dm,{}),e.jsx(hm,{}),e.jsx(fm,{}),e.jsx(xm,{}),e.jsx(gm,{}),e.jsx(vm,{}),e.jsx(km,{}),e.jsx(Cm,{}),e.jsx(Rm,{}),e.jsx(Em,{}),e.jsx(Nm,{}),e.jsx(Am,{}),e.jsx(Dm,{}),e.jsx(_m,{}),e.jsx(Lm,{})]}),e.jsx("h3",{style:{marginTop:50},children:"2. JSX: Rules and Patterns"}),e.jsxs(e.Fragment,{children:[e.jsx(zm,{}),e.jsx(Bm,{}),e.jsx(Wm,{}),e.jsx(Jm,{}),e.jsx(Xm,{}),e.jsx(Km,{}),e.jsx(Ym,{}),e.jsx(ex,{}),e.jsx(tx,{}),e.jsx(sx,{}),e.jsx(ox,{}),e.jsx(ax,{})]}),e.jsx("h3",{style:{marginTop:50},children:"3. Components & Props"}),e.jsxs(e.Fragment,{children:[e.jsx(dx,{}),e.jsx(hx,{}),e.jsx(fx,{}),e.jsx(xx,{}),e.jsx(gx,{}),e.jsx(vx,{}),e.jsx(kx,{})]}),e.jsx("h3",{style:{marginTop:50},children:"4. State (useState) - fundamentals"}),e.jsxs(e.Fragment,{children:[e.jsx(Cx,{}),e.jsx(Rx,{}),e.jsx(Ex,{}),e.jsx(Nx,{}),e.jsx(Ax,{}),e.jsx(Dx,{}),e.jsx(_x,{}),e.jsx(Lx,{}),e.jsx(zx,{})]})]})}const Hx={Wrapper:Rn.div`
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
  `};var _u={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lu=O.createContext&&O.createContext(_u),Wx=["attr","size","title"];function Vx(l,a){if(l==null)return{};var u=Jx(l,a),d,p;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(l);for(p=0;p<w.length;p++)d=w[p],!(a.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(l,d)&&(u[d]=l[d])}return u}function Jx(l,a){if(l==null)return{};var u={};for(var d in l)if(Object.prototype.hasOwnProperty.call(l,d)){if(a.indexOf(d)>=0)continue;u[d]=l[d]}return u}function ji(){return ji=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var u=arguments[a];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(l[d]=u[d])}return l},ji.apply(this,arguments)}function au(l,a){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);a&&(d=d.filter(function(p){return Object.getOwnPropertyDescriptor(l,p).enumerable})),u.push.apply(u,d)}return u}function gi(l){for(var a=1;a<arguments.length;a++){var u=arguments[a]!=null?arguments[a]:{};a%2?au(Object(u),!0).forEach(function(d){Gx(l,d,u[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):au(Object(u)).forEach(function(d){Object.defineProperty(l,d,Object.getOwnPropertyDescriptor(u,d))})}return l}function Gx(l,a,u){return a=Xx(a),a in l?Object.defineProperty(l,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[a]=u,l}function Xx(l){var a=qx(l,"string");return typeof a=="symbol"?a:a+""}function qx(l,a){if(typeof l!="object"||!l)return l;var u=l[Symbol.toPrimitive];if(u!==void 0){var d=u.call(l,a);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(l)}function Fu(l){return l&&l.map((a,u)=>O.createElement(a.tag,gi({key:u},a.attr),Fu(a.child)))}function Kx(l){return a=>O.createElement(Qx,ji({attr:gi({},l.attr)},a),Fu(l.child))}function Qx(l){var a=u=>{var{attr:d,size:p,title:w}=l,R=Vx(l,Wx),M=p||u.size||"1em",E;return u.className&&(E=u.className),l.className&&(E=(E?E+" ":"")+l.className),O.createElement("svg",ji({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,d,R,{className:E,style:gi(gi({color:l.color||u.color},u.style),l.style),height:M,width:M,xmlns:"http://www.w3.org/2000/svg"}),w&&O.createElement("title",null,w),l.children)};return lu!==void 0?O.createElement(lu.Consumer,null,u=>a(u)):a(_u)}function Yx(l){return Kx({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"},child:[]}]})(l)}function Zx({threshold:l=50}){const[a,u]=O.useState(!1),d=O.useMemo(()=>{var w,R;return(R=(w=window.matchMedia)==null?void 0:w.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:R.matches},[]);O.useEffect(()=>{let w=!1;const R=()=>{w||(window.requestAnimationFrame(()=>{u(window.scrollY>l),w=!1}),w=!0)};return R(),window.addEventListener("scroll",R,{passive:!0}),()=>window.removeEventListener("scroll",R)},[l]);const p=()=>{window.scrollTo({top:0,behavior:d?"auto":"smooth"})};return e.jsx(ej,{type:"button","aria-label":"Scroll to top",onClick:p,"data-visible":a,title:"Back to top",children:e.jsx(Yx,{})})}const ej=Rn.button`
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
`,nj=()=>e.jsxs(e.Fragment,{children:[e.jsx(Bx,{}),e.jsx(Zx,{})]});Hp.createRoot(document.getElementById("root")).render(e.jsx(e.Fragment,{children:e.jsx(nj,{})}));
