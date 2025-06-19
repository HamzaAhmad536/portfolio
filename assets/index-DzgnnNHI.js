(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Dy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Jf={exports:{}},Co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function Uy(){if(x0)return Co;x0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var y0;function Ly(){return y0||(y0=1,Jf.exports=Uy()),Jf.exports}var K=Ly(),$f={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function Ny(){if(S0)return st;S0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(N,te,ye){this.props=N,this.context=te,this.refs=A,this.updater=ye||M}y.prototype.isReactComponent={},y.prototype.setState=function(N,te){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,te,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=y.prototype;function U(N,te,ye){this.props=N,this.context=te,this.refs=A,this.updater=ye||M}var L=U.prototype=new _;L.constructor=U,E(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function z(N,te,ye,Me,J,_e){return ye=_e.ref,{$$typeof:s,type:N,key:te,ref:ye!==void 0?ye:null,props:_e}}function X(N,te){return z(N.type,te,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function w(N){var te={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return te[ye]})}var G=/\/+/g;function le(N,te){return typeof N=="object"&&N!==null&&N.key!=null?w(""+N.key):te.toString(36)}function se(){}function ge(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(se,se):(N.status="pending",N.then(function(te){N.status==="pending"&&(N.status="fulfilled",N.value=te)},function(te){N.status==="pending"&&(N.status="rejected",N.reason=te)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function pe(N,te,ye,Me,J){var _e=typeof N;(_e==="undefined"||_e==="boolean")&&(N=null);var Ee=!1;if(N===null)Ee=!0;else switch(_e){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(N.$$typeof){case s:case e:Ee=!0;break;case g:return Ee=N._init,pe(Ee(N._payload),te,ye,Me,J)}}if(Ee)return J=J(N),Ee=Me===""?"."+le(N,0):Me,C(J)?(ye="",Ee!=null&&(ye=Ee.replace(G,"$&/")+"/"),pe(J,te,ye,"",function(lt){return lt})):J!=null&&(D(J)&&(J=X(J,ye+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(G,"$&/")+"/")+Ee)),te.push(J)),1;Ee=0;var we=Me===""?".":Me+":";if(C(N))for(var De=0;De<N.length;De++)Me=N[De],_e=we+le(Me,De),Ee+=pe(Me,te,ye,_e,J);else if(De=v(N),typeof De=="function")for(N=De.call(N),De=0;!(Me=N.next()).done;)Me=Me.value,_e=we+le(Me,De++),Ee+=pe(Me,te,ye,_e,J);else if(_e==="object"){if(typeof N.then=="function")return pe(ge(N),te,ye,Me,J);throw te=String(N),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function B(N,te,ye){if(N==null)return N;var Me=[],J=0;return pe(N,Me,"","",function(_e){return te.call(ye,_e,J++)}),Me}function Z(N){if(N._status===-1){var te=N._result;te=te(),te.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=te)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function be(){}return st.Children={map:B,forEach:function(N,te,ye){B(N,function(){te.apply(this,arguments)},ye)},count:function(N){var te=0;return B(N,function(){te++}),te},toArray:function(N){return B(N,function(te){return te})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},st.Component=y,st.Fragment=i,st.Profiler=l,st.PureComponent=U,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},st.cache=function(N){return function(){return N.apply(null,arguments)}},st.cloneElement=function(N,te,ye){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Me=E({},N.props),J=N.key,_e=void 0;if(te!=null)for(Ee in te.ref!==void 0&&(_e=void 0),te.key!==void 0&&(J=""+te.key),te)!I.call(te,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&te.ref===void 0||(Me[Ee]=te[Ee]);var Ee=arguments.length-2;if(Ee===1)Me.children=ye;else if(1<Ee){for(var we=Array(Ee),De=0;De<Ee;De++)we[De]=arguments[De+2];Me.children=we}return z(N.type,J,void 0,void 0,_e,Me)},st.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},st.createElement=function(N,te,ye){var Me,J={},_e=null;if(te!=null)for(Me in te.key!==void 0&&(_e=""+te.key),te)I.call(te,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(J[Me]=te[Me]);var Ee=arguments.length-2;if(Ee===1)J.children=ye;else if(1<Ee){for(var we=Array(Ee),De=0;De<Ee;De++)we[De]=arguments[De+2];J.children=we}if(N&&N.defaultProps)for(Me in Ee=N.defaultProps,Ee)J[Me]===void 0&&(J[Me]=Ee[Me]);return z(N,_e,void 0,void 0,null,J)},st.createRef=function(){return{current:null}},st.forwardRef=function(N){return{$$typeof:d,render:N}},st.isValidElement=D,st.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},st.memo=function(N,te){return{$$typeof:p,type:N,compare:te===void 0?null:te}},st.startTransition=function(N){var te=F.T,ye={};F.T=ye;try{var Me=N(),J=F.S;J!==null&&J(ye,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(be,Y)}catch(_e){Y(_e)}finally{F.T=te}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(N){return F.H.use(N)},st.useActionState=function(N,te,ye){return F.H.useActionState(N,te,ye)},st.useCallback=function(N,te){return F.H.useCallback(N,te)},st.useContext=function(N){return F.H.useContext(N)},st.useDebugValue=function(){},st.useDeferredValue=function(N,te){return F.H.useDeferredValue(N,te)},st.useEffect=function(N,te,ye){var Me=F.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(N,te)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(N,te,ye){return F.H.useImperativeHandle(N,te,ye)},st.useInsertionEffect=function(N,te){return F.H.useInsertionEffect(N,te)},st.useLayoutEffect=function(N,te){return F.H.useLayoutEffect(N,te)},st.useMemo=function(N,te){return F.H.useMemo(N,te)},st.useOptimistic=function(N,te){return F.H.useOptimistic(N,te)},st.useReducer=function(N,te,ye){return F.H.useReducer(N,te,ye)},st.useRef=function(N){return F.H.useRef(N)},st.useState=function(N){return F.H.useState(N)},st.useSyncExternalStore=function(N,te,ye){return F.H.useSyncExternalStore(N,te,ye)},st.useTransition=function(){return F.H.useTransition()},st.version="19.1.0",st}var M0;function Cd(){return M0||(M0=1,$f.exports=Ny()),$f.exports}var he=Cd();const E0=Dy(he);var eh={exports:{}},Do={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function Oy(){return b0||(b0=1,function(s){function e(B,Z){var Y=B.length;B.push(Z);e:for(;0<Y;){var be=Y-1>>>1,N=B[be];if(0<l(N,Z))B[be]=Z,B[Y]=N,Y=be;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],Y=B.pop();if(Y!==Z){B[0]=Y;e:for(var be=0,N=B.length,te=N>>>1;be<te;){var ye=2*(be+1)-1,Me=B[ye],J=ye+1,_e=B[J];if(0>l(Me,Y))J<N&&0>l(_e,Me)?(B[be]=_e,B[J]=Y,be=J):(B[be]=Me,B[ye]=Y,be=ye);else if(J<N&&0>l(_e,Y))B[be]=_e,B[J]=Y,be=J;else break e}}return Z}function l(B,Z){var Y=B.sortIndex-Z.sortIndex;return Y!==0?Y:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,v=3,M=!1,E=!1,A=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=B)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function F(B){if(A=!1,C(B),!E)if(i(m)!==null)E=!0,I||(I=!0,le());else{var Z=i(p);Z!==null&&pe(F,Z.startTime-B)}}var I=!1,z=-1,X=5,D=-1;function w(){return y?!0:!(s.unstable_now()-D<X)}function G(){if(y=!1,I){var B=s.unstable_now();D=B;var Z=!0;try{e:{E=!1,A&&(A=!1,U(z),z=-1),M=!0;var Y=v;try{t:{for(C(B),x=i(m);x!==null&&!(x.expirationTime>B&&w());){var be=x.callback;if(typeof be=="function"){x.callback=null,v=x.priorityLevel;var N=be(x.expirationTime<=B);if(B=s.unstable_now(),typeof N=="function"){x.callback=N,C(B),Z=!0;break t}x===i(m)&&r(m),C(B)}else r(m);x=i(m)}if(x!==null)Z=!0;else{var te=i(p);te!==null&&pe(F,te.startTime-B),Z=!1}}break e}finally{x=null,v=Y,M=!1}Z=void 0}}finally{Z?le():I=!1}}}var le;if(typeof L=="function")le=function(){L(G)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ge=se.port2;se.port1.onmessage=G,le=function(){ge.postMessage(null)}}else le=function(){_(G,0)};function pe(B,Z){z=_(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var Y=v;v=Z;try{return B()}finally{v=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=v;v=B;try{return Z()}finally{v=Y}},s.unstable_scheduleCallback=function(B,Z,Y){var be=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?be+Y:be):Y=be,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,B={id:g++,callback:Z,priorityLevel:B,startTime:Y,expirationTime:N,sortIndex:-1},Y>be?(B.sortIndex=Y,e(p,B),i(m)===null&&B===i(p)&&(A?(U(z),z=-1):A=!0,pe(F,Y-be))):(B.sortIndex=N,e(m,B),E||M||(E=!0,I||(I=!0,le()))),B},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(B){var Z=v;return function(){var Y=v;v=Z;try{return B.apply(this,arguments)}finally{v=Y}}}}(nh)),nh}var T0;function Py(){return T0||(T0=1,th.exports=Oy()),th.exports}var ih={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function zy(){if(A0)return wn;A0=1;var s=Cd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},wn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var R0;function By(){if(R0)return ih.exports;R0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ih.exports=zy(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function Iy(){if(w0)return Do;w0=1;var s=Py(),e=Cd(),i=By();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===o)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,o=f;break}if(T===o){S=!0,o=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=c;break}if(T===o){S=!0,o=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case A:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}var pe=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},be=[],N=-1;function te(t){return{current:t}}function ye(t){0>N||(t.current=be[N],be[N]=null,N--)}function Me(t,n){N++,be[N]=t.current,t.current=n}var J=te(null),_e=te(null),Ee=te(null),we=te(null);function De(t,n){switch(Me(Ee,n),Me(_e,t),Me(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Yg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Yg(n),t=jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(J),Me(J,t)}function lt(){ye(J),ye(_e),ye(Ee)}function Je(t){t.memoizedState!==null&&Me(we,t);var n=J.current,a=jg(n,t.type);n!==a&&(Me(_e,t),Me(J,a))}function Ot(t){_e.current===t&&(ye(J),ye(_e)),we.current===t&&(ye(we),bo._currentValue=Y)}var Ht=Object.prototype.hasOwnProperty,gt=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,xn=s.unstable_shouldYield,Mt=s.unstable_requestPaint,dt=s.unstable_now,ke=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,Ze=s.unstable_UserBlockingPriority,rt=s.unstable_NormalPriority,$t=s.unstable_LowPriority,O=s.unstable_IdlePriority,b=s.log,ne=s.unstable_setDisableYieldValue,fe=null,me=null;function ue(t){if(typeof b=="function"&&ne(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(fe,t)}catch{}}var ze=Math.clz32?Math.clz32:Xe,Le=Math.log,Ve=Math.LN2;function Xe(t){return t>>>=0,t===0?32:31-(Le(t)/Ve|0)|0}var Se=256,Be=4194304;function Ye(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function je(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=Ye(o):(S&=T,S!==0?c=Ye(S):a||(a=T&~t,a!==0&&(c=Ye(a))))):(T=o&~f,T!==0?c=Ye(T):S!==0?c=Ye(S):a||(a=o&~t,a!==0&&(c=Ye(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=Se;return Se<<=1,(Se&4194048)===0&&(Se=256),t}function Ne(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Re(t,n,a,o,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(a=S&~a;0<a;){var ce=31-ze(a),ve=1<<ce;T[ce]=0,P[ce]=-1;var ie=$[ce];if(ie!==null)for($[ce]=null,ce=0;ce<ie.length;ce++){var ae=ie[ce];ae!==null&&(ae.lane&=-536870913)}a&=~ve}o!==0&&xe(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function xe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function He(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ze(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:d0(t.type))}function Vn(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var dn=Math.random().toString(36).slice(2),on="__reactFiber$"+dn,yn="__reactProps$"+dn,Nn="__reactContainer$"+dn,Ja="__reactEvents$"+dn,el="__reactListeners$"+dn,tl="__reactHandles$"+dn,$a="__reactResources$"+dn,pa="__reactMarker$"+dn;function ma(t){delete t[on],delete t[yn],delete t[Ja],delete t[el],delete t[tl]}function Oi(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Nn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Jg(t);t!==null;){if(a=t[on])return a;t=Jg(t)}return n}t=a,a=t.parentNode}return null}function Pi(t){if(t=t[on]||t[Nn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function er(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ga(t){var n=t[$a];return n||(n=t[$a]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[pa]=!0}var nl=new Set,il={};function zi(t,n){R(t,n),R(t+"Capture",n)}function R(t,n){for(il[t]=n,t=0;t<n.length;t++)nl.add(n[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},oe={};function j(t){return Ht.call(oe,t)?!0:Ht.call(re,t)?!1:q.test(t)?oe[t]=!0:(re[t]=!0,!1)}function Ae(t,n,a){if(j(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ue(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Pe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Fe,et;function Ke(t){if(Fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Fe=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+t+et}var We=!1;function ct(t,n){if(!t||We)return"";We=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ae){var ie=ae}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(ae){ie=ae}t.call(ve.prototype)}}else{try{throw Error()}catch(ae){ie=ae}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ae){if(ae&&ie&&typeof ae.stack=="string")return[ae.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var P=S.split(`
`),$=T.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===$.length)for(o=P.length-1,c=$.length-1;1<=o&&0<=c&&P[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==$[c]){var ce=`
`+P[o].replace(" at new "," at ");return t.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",t.displayName)),ce}while(1<=o&&0<=c);break}}}finally{We=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ke(a):""}function Rt(t){switch(t.tag){case 26:case 27:case 5:return Ke(t.type);case 16:return Ke("Lazy");case 13:return Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return Ke("Activity");default:return""}}function kt(t){try{var n="";do n+=Rt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t){var n=xt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Kt(t){t._valueTracker||(t._valueTracker=Qe(t))}function Et(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=xt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Tn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _a=/[\n"\\]/g;function Xt(t){return t.replace(_a,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(t,n,a,o,c,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vt(n)):t.value!==""+vt(n)&&(t.value=""+vt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?An(t,S,vt(n)):a!=null?An(t,S,vt(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+vt(T):t.removeAttribute("name")}function Gt(t,n,a,o,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+vt(a):"",n=n!=null?""+vt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function An(t,n,a){n==="number"&&Tn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+vt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+vt(a):""}function Sn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(pe(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=vt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function xi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ii.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function jd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Yd(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Yd(t,f,n[f])}function Ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(t){return Cv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Qu=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ur=null,Lr=null;function Zd(t){var n=Pi(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Bi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[yn]||null;if(!c)throw Error(r(90));Bi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Et(o)}break e;case"textarea":pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var $u=!1;function Kd(t,n,a){if($u)return t(n,a);$u=!0;try{var o=t(n);return o}finally{if($u=!1,(Ur!==null||Lr!==null)&&(kl(),Ur&&(n=Ur,t=Lr,Lr=Ur=null,Zd(n),t)))for(n=0;n<t.length;n++)Zd(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ec=!1;if(Fi)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){ec=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{ec=!1}var va=null,tc=null,rl=null;function Qd(){if(rl)return rl;var t,n=tc,a=n.length,o,c="value"in va?va.value:va.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return rl=c.slice(t,1<o?1-o:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function Jd(){return!1}function On(t){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:Jd,this.isPropagationStopped=Jd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=On(tr),Is=g({},tr,{view:0,detail:0}),Dv=On(Is),nc,ic,Fs,ul=g({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(nc=t.screenX-Fs.screenX,ic=t.screenY-Fs.screenY):ic=nc=0,Fs=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),$d=On(ul),Uv=g({},ul,{dataTransfer:0}),Lv=On(Uv),Nv=g({},Is,{relatedTarget:0}),ac=On(Nv),Ov=g({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=On(Ov),zv=g({},tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bv=On(zv),Iv=g({},tr,{data:0}),ep=On(Iv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Gv[t])?!!n[t]:!1}function rc(){return Vv}var kv=g({},Is,{key:function(t){if(t.key){var n=Fv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xv=On(kv),Wv=g({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=On(Wv),qv=g({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),Yv=On(qv),jv=g({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=On(jv),Kv=g({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=On(Kv),Jv=g({},tr,{newState:0,oldState:0}),$v=On(Jv),ex=[9,13,27,32],sc=Fi&&"CompositionEvent"in window,Hs=null;Fi&&"documentMode"in document&&(Hs=document.documentMode);var tx=Fi&&"TextEvent"in window&&!Hs,np=Fi&&(!sc||Hs&&8<Hs&&11>=Hs),ip=" ",ap=!1;function rp(t,n){switch(t){case"keyup":return ex.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function nx(t,n){switch(t){case"compositionend":return sp(n);case"keypress":return n.which!==32?null:(ap=!0,ip);case"textInput":return t=n.data,t===ip&&ap?null:t;default:return null}}function ix(t,n){if(Nr)return t==="compositionend"||!sc&&rp(t,n)?(t=Qd(),rl=tc=va=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return np&&n.locale!=="ko"?null:n.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ax[t.type]:n==="textarea"}function lp(t,n,a,o){Ur?Lr?Lr.push(o):Lr=[o]:Ur=o,n=Zl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function rx(t){Vg(t,0)}function cl(t){var n=er(t);if(Et(n))return t}function up(t,n){if(t==="change")return n}var cp=!1;if(Fi){var oc;if(Fi){var lc="oninput"in document;if(!lc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),lc=typeof fp.oninput=="function"}oc=lc}else oc=!1;cp=oc&&(!document.documentMode||9<document.documentMode)}function hp(){Gs&&(Gs.detachEvent("onpropertychange",dp),Vs=Gs=null)}function dp(t){if(t.propertyName==="value"&&cl(Vs)){var n=[];lp(n,Vs,t,Ju(t)),Kd(rx,n)}}function sx(t,n,a){t==="focusin"?(hp(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",dp)):t==="focusout"&&hp()}function ox(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(Vs)}function lx(t,n){if(t==="click")return cl(n)}function ux(t,n){if(t==="input"||t==="change")return cl(n)}function cx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:cx;function ks(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ht.call(n,c)||!kn(t[c],n[c]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,n){var a=pp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pp(a)}}function gp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?gp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Tn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Tn(t.document)}return n}function uc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fx=Fi&&"documentMode"in document&&11>=document.documentMode,Or=null,cc=null,Xs=null,fc=!1;function vp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||Or==null||Or!==Tn(o)||(o=Or,"selectionStart"in o&&uc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Xs&&ks(Xs,o)||(Xs=o,o=Zl(cc,"onSelect"),0<o.length&&(n=new ll("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Or)))}function nr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Pr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},hc={},xp={};Fi&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function ir(t){if(hc[t])return hc[t];if(!Pr[t])return t;var n=Pr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in xp)return hc[t]=n[a];return t}var yp=ir("animationend"),Sp=ir("animationiteration"),Mp=ir("animationstart"),hx=ir("transitionrun"),dx=ir("transitionstart"),px=ir("transitioncancel"),Ep=ir("transitionend"),bp=new Map,dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dc.push("scrollEnd");function li(t,n){bp.set(t,n),zi(n,[t])}var Tp=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=Tp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:kt(n)},Tp.set(t,n),n)}return{value:t,source:n,stack:kt(n)}}var ei=[],zr=0,pc=0;function fl(){for(var t=zr,n=pc=zr=0;n<t;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&Ap(a,c,f)}}function hl(t,n,a,o){ei[zr++]=t,ei[zr++]=n,ei[zr++]=a,ei[zr++]=o,pc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function mc(t,n,a,o){return hl(t,n,a,o),dl(t)}function Br(t,n){return hl(t,null,null,n),dl(t)}function Ap(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-ze(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function dl(t){if(50<go)throw go=0,Mf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ir={};function mx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,o){return new mx(t,n,a,o)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hi(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Rp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,o,c,f){var S=0;if(o=t,typeof t=="function")gc(t)&&(S=1);else if(typeof t=="string")S=_y(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Xn(31,a,n,c),t.elementType=D,t.lanes=f,t;case E:return ar(a.children,c,f,n);case A:S=8,c|=24;break;case y:return t=Xn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case F:return t=Xn(13,a,n,c),t.elementType=F,t.lanes=f,t;case I:return t=Xn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:S=10;break e;case U:S=9;break e;case C:S=11;break e;case z:S=14;break e;case X:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Xn(S,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function ar(t,n,a,o){return t=Xn(7,t,o,n),t.lanes=a,t}function _c(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function vc(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Fr=[],Hr=0,ml=null,gl=0,ti=[],ni=0,rr=null,Gi=1,Vi="";function sr(t,n){Fr[Hr++]=gl,Fr[Hr++]=ml,ml=t,gl=n}function wp(t,n,a){ti[ni++]=Gi,ti[ni++]=Vi,ti[ni++]=rr,rr=t;var o=Gi;t=Vi;var c=32-ze(o)-1;o&=~(1<<c),a+=1;var f=32-ze(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Gi=1<<32-ze(n)+c|a<<c|o,Vi=f+t}else Gi=1<<f|a<<c|o,Vi=t}function xc(t){t.return!==null&&(sr(t,1),wp(t,1,0))}function yc(t){for(;t===ml;)ml=Fr[--Hr],Fr[Hr]=null,gl=Fr[--Hr],Fr[Hr]=null;for(;t===rr;)rr=ti[--ni],ti[ni]=null,Vi=ti[--ni],ti[ni]=null,Gi=ti[--ni],ti[ni]=null}var Un=null,Qt=null,wt=!1,or=null,yi=!1,Sc=Error(r(519));function lr(t){var n=Error(r(418,""));throw Ys($n(n,t)),Sc}function Cp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[yn]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)mt(vo[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Gt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Kt(n);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),Sn(n,o.value,o.defaultValue,o.children),Kt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||qg(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=Kl),n=!0):n=!1,n||lr(t)}function Dp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Un=Un.return}}function Ws(t){if(t!==Un)return!1;if(!wt)return Dp(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||If(t.type,t.memoizedProps)),a=!a),a&&Qt&&lr(t),Dp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Qt=ci(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Qt=null}}else n===27?(n=Qt,Oa(t.type)?(t=Vf,Vf=null,Qt=t):Qt=n):Qt=Un?ci(t.stateNode.nextSibling):null;return!0}function qs(){Qt=Un=null,wt=!1}function Up(){var t=or;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),or=null),t}function Ys(t){or===null?or=[t]:or.push(t)}var Mc=te(null),ur=null,ki=null;function xa(t,n,a){Me(Mc,n._currentValue),n._currentValue=a}function Xi(t){t._currentValue=Mc.current,ye(Mc)}function Ec(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function bc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ec(f.return,a,t),o||(S=null);break e}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Ec(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function js(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;kn(c.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(c===we.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&bc(n,t,a,o),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){ur=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Lp(ur,t)}function vl(t,n){return ur===null&&cr(t),Lp(t,n)}function Lp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(t===null)throw Error(r(308));ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ki=ki.next=n;return a}var gx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},_x=s.unstable_scheduleCallback,vx=s.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tc(){return{controller:new gx,data:new Map,refCount:0}}function Zs(t){t.refCount--,t.refCount===0&&_x(vx,function(){t.controller.abort()})}var Ks=null,Ac=0,Gr=0,Vr=null;function xx(t,n){if(Ks===null){var a=Ks=[];Ac=0,Gr=Cf(),Vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ac++,n.then(Np,Np),n}function Np(){if(--Ac===0&&Ks!==null){Vr!==null&&(Vr.status="fulfilled");var t=Ks;Ks=null,Gr=0,Vr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Op=B.S;B.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&xx(t,n),Op!==null&&Op(t,n)};var fr=te(null);function Rc(){var t=fr.current;return t!==null?t:Wt.pooledCache}function xl(t,n){n===null?Me(fr,fr.current):Me(fr,n.pool)}function Pp(){var t=Rc();return t===null?null:{parent:un._currentValue,pool:t}}var Qs=Error(r(460)),zp=Error(r(474)),yl=Error(r(542)),wc={then:function(){}};function Bp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sl(){}function Ip(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Sl,Sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hp(t),t;default:if(typeof n.status=="string")n.then(Sl,Sl);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hp(t),t}throw Js=n,Qs}}var Js=null;function Fp(){if(Js===null)throw Error(r(459));var t=Js;return Js=null,t}function Hp(t){if(t===Qs||t===yl)throw Error(r(483))}var ya=!1;function Cc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=dl(t),Ap(t,null,a),n}return hl(t,o,n,a),dl(t)}function $s(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,He(t,a)}}function Uc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Lc=!1;function eo(){if(Lc){var t=Vr;if(t!==null)throw t}}function to(t,n,a,o){Lc=!1;var c=t.updateQueue;ya=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,$=P.next;P.next=null,S===null?f=$:S.next=$,S=P;var ce=t.alternate;ce!==null&&(ce=ce.updateQueue,T=ce.lastBaseUpdate,T!==S&&(T===null?ce.firstBaseUpdate=$:T.next=$,ce.lastBaseUpdate=P))}if(f!==null){var ve=c.baseState;S=0,ce=$=P=null,T=f;do{var ie=T.lane&-536870913,ae=ie!==T.lane;if(ae?(St&ie)===ie:(o&ie)===ie){ie!==0&&ie===Gr&&(Lc=!0),ce!==null&&(ce=ce.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var nt=t,$e=T;ie=n;var Bt=a;switch($e.tag){case 1:if(nt=$e.payload,typeof nt=="function"){ve=nt.call(Bt,ve,ie);break e}ve=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=$e.payload,ie=typeof nt=="function"?nt.call(Bt,ve,ie):nt,ie==null)break e;ve=g({},ve,ie);break e;case 2:ya=!0}}ie=T.callback,ie!==null&&(t.flags|=64,ae&&(t.flags|=8192),ae=c.callbacks,ae===null?c.callbacks=[ie]:ae.push(ie))}else ae={lane:ie,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ce===null?($=ce=ae,P=ve):ce=ce.next=ae,S|=ie;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ae=T,T=ae.next,ae.next=null,c.lastBaseUpdate=ae,c.shared.pending=null}}while(!0);ce===null&&(P=ve),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ce,f===null&&(c.shared.lanes=0),Da|=S,t.lanes=S,t.memoizedState=ve}}function Gp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Vp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gp(a[t],n)}var kr=te(null),Ml=te(0);function kp(t,n){t=Qi,Me(Ml,t),Me(kr,n),Qi=t|n.baseLanes}function Nc(){Me(Ml,Qi),Me(kr,kr.current)}function Oc(){Qi=Ml.current,ye(kr),ye(Ml)}var Ea=0,ft=null,Pt=null,an=null,El=!1,Xr=!1,hr=!1,bl=0,no=0,Wr=null,Sx=0;function en(){throw Error(r(321))}function Pc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!kn(t[a],n[a]))return!1;return!0}function zc(t,n,a,o,c,f){return Ea=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Am:Rm,hr=!1,f=a(o,c),hr=!1,Xr&&(f=Wp(n,a,o,c)),Xp(t),f}function Xp(t){B.H=Dl;var n=Pt!==null&&Pt.next!==null;if(Ea=0,an=Pt=ft=null,El=!1,no=0,Wr=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&_l(t)&&(mn=!0))}function Wp(t,n,a,o){ft=t;var c=0;do{if(Xr&&(Wr=null),no=0,Xr=!1,25<=c)throw Error(r(301));if(c+=1,an=Pt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=wx,f=n(a,o)}while(Xr);return f}function Mx(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?io(n):n,t=t.useState()[0],(Pt!==null?Pt.memoizedState:null)!==t&&(ft.flags|=1024),n}function Bc(){var t=bl!==0;return bl=0,t}function Ic(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Fc(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}Ea=0,an=Pt=ft=null,Xr=!1,no=bl=0,Wr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ft.memoizedState=an=t:an=an.next=t,an}function rn(){if(Pt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var n=an===null?ft.memoizedState:an.next;if(n!==null)an=n,Pt=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},an===null?ft.memoizedState=an=t:an=an.next=t}return an}function Hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(t){var n=no;return no+=1,Wr===null&&(Wr=[]),t=Ip(Wr,t,n),n=ft,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Am:Rm),t}function Tl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return io(t);if(t.$$typeof===L)return Rn(t)}throw Error(r(438,String(t)))}function Gc(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hc(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function Wi(t,n){return typeof n=="function"?n(t):n}function Al(t){var n=rn();return Vc(n,Pt,t)}function Vc(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=S=null,P=null,$=n,ce=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(St&ve)===ve:(Ea&ve)===ve){var ie=$.revertLane;if(ie===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Gr&&(ce=!0);else if((Ea&ie)===ie){$=$.next,ie===Gr&&(ce=!0);continue}else ve={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=ve,S=f):P=P.next=ve,ft.lanes|=ie,Da|=ie;ve=$.action,hr&&a(f,ve),f=$.hasEagerState?$.eagerState:a(f,ve)}else ie={lane:ve,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=ie,S=f):P=P.next=ie,ft.lanes|=ve,Da|=ve;$=$.next}while($!==null&&$!==n);if(P===null?S=f:P.next=T,!kn(f,t.memoizedState)&&(mn=!0,ce&&(a=Vr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function kc(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);kn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function qp(t,n,a){var o=ft,c=rn(),f=wt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!kn((Pt||c).memoizedState,a);S&&(c.memoizedState=a,mn=!0),c=c.queue;var T=Zp.bind(null,o,c,t);if(ao(2048,8,T,[t]),c.getSnapshot!==n||S||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,qr(9,Rl(),jp.bind(null,o,c,a,n),null),Wt===null)throw Error(r(349));f||(Ea&124)!==0||Yp(o,n,a)}return a}function Yp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Hc(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function jp(t,n,a,o){n.value=a,n.getSnapshot=o,Kp(n)&&Qp(t)}function Zp(t,n,a){return a(function(){Kp(n)&&Qp(t)})}function Kp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!kn(t,a)}catch{return!0}}function Qp(t){var n=Br(t,2);n!==null&&Zn(n,t,2)}function Xc(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),hr){ue(!0);try{a()}finally{ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},n}function Jp(t,n,a,o){return t.baseState=a,Vc(t,Pt,typeof o=="function"?o:Wi)}function Ex(t,n,a,o,c){if(Cl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,$p(n,f)):(f.next=a.next,n.pending=a.next=f)}}function $p(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var T=a(c,o),P=B.S;P!==null&&P(S,T),em(t,n,T)}catch($){Wc(t,n,$)}finally{B.T=f}}else try{f=a(c,o),em(t,n,f)}catch($){Wc(t,n,$)}}function em(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){tm(t,n,o)},function(o){return Wc(t,n,o)}):tm(t,n,a)}function tm(t,n,a){n.status="fulfilled",n.value=a,nm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,$p(t,a)))}function Wc(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,nm(n),n=n.next;while(n!==o)}t.action=null}function nm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function im(t,n){return n}function am(t,n){if(wt){var a=Wt.formState;if(a!==null){e:{var o=ft;if(wt){if(Qt){t:{for(var c=Qt,f=yi;c.nodeType!==8;){if(!f){c=null;break t}if(c=ci(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Qt=ci(c.nextSibling),o=c.data==="F!";break e}}lr(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:im,lastRenderedState:n},a.queue=o,a=Em.bind(null,ft,o),o.dispatch=a,o=Xc(!1),f=Kc.bind(null,ft,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=Ex.bind(null,ft,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function rm(t){var n=rn();return sm(n,Pt,t)}function sm(t,n,a){if(n=Vc(t,n,im)[0],t=Al(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=io(n)}catch(S){throw S===Qs?yl:S}else o=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,qr(9,Rl(),bx.bind(null,c,a),null)),[o,f,t]}function bx(t,n){t.action=n}function om(t){var n=rn(),a=Pt;if(a!==null)return sm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function qr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Hc(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Rl(){return{destroy:void 0,resource:void 0}}function lm(){return rn().memoizedState}function wl(t,n,a,o){var c=Pn();o=o===void 0?null:o,ft.flags|=t,c.memoizedState=qr(1|n,Rl(),a,o)}function ao(t,n,a,o){var c=rn();o=o===void 0?null:o;var f=c.memoizedState.inst;Pt!==null&&o!==null&&Pc(o,Pt.memoizedState.deps)?c.memoizedState=qr(n,f,a,o):(ft.flags|=t,c.memoizedState=qr(1|n,f,a,o))}function um(t,n){wl(8390656,8,t,n)}function cm(t,n){ao(2048,8,t,n)}function fm(t,n){return ao(4,2,t,n)}function hm(t,n){return ao(4,4,t,n)}function dm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function pm(t,n,a){a=a!=null?a.concat([t]):null,ao(4,4,dm.bind(null,n,t),a)}function qc(){}function mm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Pc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function gm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Pc(n,o[1]))return o[0];if(o=t(),hr){ue(!0);try{t()}finally{ue(!1)}}return a.memoizedState=[o,n],o}function Yc(t,n,a){return a===void 0||(Ea&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=xg(),ft.lanes|=t,Da|=t,a)}function _m(t,n,a,o){return kn(a,n)?a:kr.current!==null?(t=Yc(t,a,o),kn(t,n)||(mn=!0),t):(Ea&42)===0?(mn=!0,t.memoizedState=a):(t=xg(),ft.lanes|=t,Da|=t,n)}function vm(t,n,a,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=B.T,T={};B.T=T,Kc(t,!1,n,a);try{var P=c(),$=B.S;if($!==null&&$(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ce=yx(P,o);ro(t,n,ce,jn(t))}else ro(t,n,o,jn(t))}catch(ve){ro(t,n,{then:function(){},status:"rejected",reason:ve},jn())}finally{Z.p=f,B.T=S}}function Tx(){}function jc(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=xm(t).queue;vm(t,c,n,Y,a===null?Tx:function(){return ym(t),a(o)})}function xm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ym(t){var n=xm(t).next.queue;ro(t,n,{},jn())}function Zc(){return Rn(bo)}function Sm(){return rn().memoizedState}function Mm(){return rn().memoizedState}function Ax(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();t=Sa(a);var o=Ma(n,t,a);o!==null&&(Zn(o,n,a),$s(o,n,a)),n={cache:Tc()},t.payload=n;return}n=n.return}}function Rx(t,n,a){var o=jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(t)?bm(n,a):(a=mc(t,n,a,o),a!==null&&(Zn(a,t,o),Tm(a,n,o)))}function Em(t,n,a){var o=jn();ro(t,n,a,o)}function ro(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(t))bm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,S))return hl(t,n,c,0),Wt===null&&fl(),!1}catch{}finally{}if(a=mc(t,n,c,o),a!==null)return Zn(a,t,o),Tm(a,n,o),!0}return!1}function Kc(t,n,a,o){if(o={lane:2,revertLane:Cf(),action:o,hasEagerState:!1,eagerState:null,next:null},Cl(t)){if(n)throw Error(r(479))}else n=mc(t,a,o,2),n!==null&&Zn(n,t,2)}function Cl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function bm(t,n){Xr=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,He(t,a)}}var Dl={readContext:Rn,use:Tl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},Am={readContext:Rn,use:Tl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:um,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wl(4194308,4,dm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wl(4194308,4,t,n)},useInsertionEffect:function(t,n){wl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(hr){ue(!0);try{t()}finally{ue(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(hr){ue(!0);try{a(n)}finally{ue(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Rx.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Xc(t);var n=t.queue,a=Em.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:qc,useDeferredValue:function(t,n){var a=Pn();return Yc(a,t,n)},useTransition:function(){var t=Xc(!1);return t=vm.bind(null,ft,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ft,c=Pn();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(St&124)!==0||Yp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,um(Zp.bind(null,o,f,t),[t]),o.flags|=2048,qr(9,Rl(),jp.bind(null,o,f,a,n),null),a},useId:function(){var t=Pn(),n=Wt.identifierPrefix;if(wt){var a=Vi,o=Gi;a=(o&~(1<<32-ze(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Sx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Zc,useFormState:am,useActionState:am,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Kc.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:Gc,useCacheRefresh:function(){return Pn().memoizedState=Ax.bind(null,ft)}},Rm={readContext:Rn,use:Tl,useCallback:mm,useContext:Rn,useEffect:cm,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:Al,useRef:lm,useState:function(){return Al(Wi)},useDebugValue:qc,useDeferredValue:function(t,n){var a=rn();return _m(a,Pt.memoizedState,t,n)},useTransition:function(){var t=Al(Wi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:io(t),n]},useSyncExternalStore:qp,useId:Sm,useHostTransitionStatus:Zc,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var a=rn();return Jp(a,Pt,t,n)},useMemoCache:Gc,useCacheRefresh:Mm},wx={readContext:Rn,use:Tl,useCallback:mm,useContext:Rn,useEffect:cm,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:kc,useRef:lm,useState:function(){return kc(Wi)},useDebugValue:qc,useDeferredValue:function(t,n){var a=rn();return Pt===null?Yc(a,t,n):_m(a,Pt.memoizedState,t,n)},useTransition:function(){var t=kc(Wi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:io(t),n]},useSyncExternalStore:qp,useId:Sm,useHostTransitionStatus:Zc,useFormState:om,useActionState:om,useOptimistic:function(t,n){var a=rn();return Pt!==null?Jp(a,Pt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:Mm},Yr=null,so=0;function Ul(t){var n=so;return so+=1,Yr===null&&(Yr=[]),Ip(Yr,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function wm(t){var n=t._init;return n(t._payload)}function Cm(t){function n(W,V){if(t){var Q=W.deletions;Q===null?(W.deletions=[V],W.flags|=16):Q.push(V)}}function a(W,V){if(!t)return null;for(;V!==null;)n(W,V),V=V.sibling;return null}function o(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function c(W,V){return W=Hi(W,V),W.index=0,W.sibling=null,W}function f(W,V,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<V?(W.flags|=67108866,V):Q):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function S(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,V,Q,de){return V===null||V.tag!==6?(V=_c(Q,W.mode,de),V.return=W,V):(V=c(V,Q),V.return=W,V)}function P(W,V,Q,de){var Ge=Q.type;return Ge===E?ce(W,V,Q.props.children,de,Q.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===X&&wm(Ge)===V.type)?(V=c(V,Q.props),oo(V,Q),V.return=W,V):(V=pl(Q.type,Q.key,Q.props,null,W.mode,de),oo(V,Q),V.return=W,V)}function $(W,V,Q,de){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=vc(Q,W.mode,de),V.return=W,V):(V=c(V,Q.children||[]),V.return=W,V)}function ce(W,V,Q,de,Ge){return V===null||V.tag!==7?(V=ar(Q,W.mode,de,Ge),V.return=W,V):(V=c(V,Q),V.return=W,V)}function ve(W,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=_c(""+V,W.mode,Q),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return Q=pl(V.type,V.key,V.props,null,W.mode,Q),oo(Q,V),Q.return=W,Q;case M:return V=vc(V,W.mode,Q),V.return=W,V;case X:var de=V._init;return V=de(V._payload),ve(W,V,Q)}if(pe(V)||le(V))return V=ar(V,W.mode,Q,null),V.return=W,V;if(typeof V.then=="function")return ve(W,Ul(V),Q);if(V.$$typeof===L)return ve(W,vl(W,V),Q);Ll(W,V)}return null}function ie(W,V,Q,de){var Ge=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ge!==null?null:T(W,V,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===Ge?P(W,V,Q,de):null;case M:return Q.key===Ge?$(W,V,Q,de):null;case X:return Ge=Q._init,Q=Ge(Q._payload),ie(W,V,Q,de)}if(pe(Q)||le(Q))return Ge!==null?null:ce(W,V,Q,de,null);if(typeof Q.then=="function")return ie(W,V,Ul(Q),de);if(Q.$$typeof===L)return ie(W,V,vl(W,Q),de);Ll(W,Q)}return null}function ae(W,V,Q,de,Ge){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return W=W.get(Q)||null,T(V,W,""+de,Ge);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case v:return W=W.get(de.key===null?Q:de.key)||null,P(V,W,de,Ge);case M:return W=W.get(de.key===null?Q:de.key)||null,$(V,W,de,Ge);case X:var ht=de._init;return de=ht(de._payload),ae(W,V,Q,de,Ge)}if(pe(de)||le(de))return W=W.get(Q)||null,ce(V,W,de,Ge,null);if(typeof de.then=="function")return ae(W,V,Q,Ul(de),Ge);if(de.$$typeof===L)return ae(W,V,Q,vl(V,de),Ge);Ll(V,de)}return null}function nt(W,V,Q,de){for(var Ge=null,ht=null,qe=V,tt=V=0,_n=null;qe!==null&&tt<Q.length;tt++){qe.index>tt?(_n=qe,qe=null):_n=qe.sibling;var Tt=ie(W,qe,Q[tt],de);if(Tt===null){qe===null&&(qe=_n);break}t&&qe&&Tt.alternate===null&&n(W,qe),V=f(Tt,V,tt),ht===null?Ge=Tt:ht.sibling=Tt,ht=Tt,qe=_n}if(tt===Q.length)return a(W,qe),wt&&sr(W,tt),Ge;if(qe===null){for(;tt<Q.length;tt++)qe=ve(W,Q[tt],de),qe!==null&&(V=f(qe,V,tt),ht===null?Ge=qe:ht.sibling=qe,ht=qe);return wt&&sr(W,tt),Ge}for(qe=o(qe);tt<Q.length;tt++)_n=ae(qe,W,tt,Q[tt],de),_n!==null&&(t&&_n.alternate!==null&&qe.delete(_n.key===null?tt:_n.key),V=f(_n,V,tt),ht===null?Ge=_n:ht.sibling=_n,ht=_n);return t&&qe.forEach(function(Fa){return n(W,Fa)}),wt&&sr(W,tt),Ge}function $e(W,V,Q,de){if(Q==null)throw Error(r(151));for(var Ge=null,ht=null,qe=V,tt=V=0,_n=null,Tt=Q.next();qe!==null&&!Tt.done;tt++,Tt=Q.next()){qe.index>tt?(_n=qe,qe=null):_n=qe.sibling;var Fa=ie(W,qe,Tt.value,de);if(Fa===null){qe===null&&(qe=_n);break}t&&qe&&Fa.alternate===null&&n(W,qe),V=f(Fa,V,tt),ht===null?Ge=Fa:ht.sibling=Fa,ht=Fa,qe=_n}if(Tt.done)return a(W,qe),wt&&sr(W,tt),Ge;if(qe===null){for(;!Tt.done;tt++,Tt=Q.next())Tt=ve(W,Tt.value,de),Tt!==null&&(V=f(Tt,V,tt),ht===null?Ge=Tt:ht.sibling=Tt,ht=Tt);return wt&&sr(W,tt),Ge}for(qe=o(qe);!Tt.done;tt++,Tt=Q.next())Tt=ae(qe,W,tt,Tt.value,de),Tt!==null&&(t&&Tt.alternate!==null&&qe.delete(Tt.key===null?tt:Tt.key),V=f(Tt,V,tt),ht===null?Ge=Tt:ht.sibling=Tt,ht=Tt);return t&&qe.forEach(function(Cy){return n(W,Cy)}),wt&&sr(W,tt),Ge}function Bt(W,V,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var Ge=Q.key;V!==null;){if(V.key===Ge){if(Ge=Q.type,Ge===E){if(V.tag===7){a(W,V.sibling),de=c(V,Q.props.children),de.return=W,W=de;break e}}else if(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===X&&wm(Ge)===V.type){a(W,V.sibling),de=c(V,Q.props),oo(de,Q),de.return=W,W=de;break e}a(W,V);break}else n(W,V);V=V.sibling}Q.type===E?(de=ar(Q.props.children,W.mode,de,Q.key),de.return=W,W=de):(de=pl(Q.type,Q.key,Q.props,null,W.mode,de),oo(de,Q),de.return=W,W=de)}return S(W);case M:e:{for(Ge=Q.key;V!==null;){if(V.key===Ge)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(W,V.sibling),de=c(V,Q.children||[]),de.return=W,W=de;break e}else{a(W,V);break}else n(W,V);V=V.sibling}de=vc(Q,W.mode,de),de.return=W,W=de}return S(W);case X:return Ge=Q._init,Q=Ge(Q._payload),Bt(W,V,Q,de)}if(pe(Q))return nt(W,V,Q,de);if(le(Q)){if(Ge=le(Q),typeof Ge!="function")throw Error(r(150));return Q=Ge.call(Q),$e(W,V,Q,de)}if(typeof Q.then=="function")return Bt(W,V,Ul(Q),de);if(Q.$$typeof===L)return Bt(W,V,vl(W,Q),de);Ll(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(W,V.sibling),de=c(V,Q),de.return=W,W=de):(a(W,V),de=_c(Q,W.mode,de),de.return=W,W=de),S(W)):a(W,V)}return function(W,V,Q,de){try{so=0;var Ge=Bt(W,V,Q,de);return Yr=null,Ge}catch(qe){if(qe===Qs||qe===yl)throw qe;var ht=Xn(29,qe,null,W.mode);return ht.lanes=de,ht.return=W,ht}finally{}}}var jr=Cm(!0),Dm=Cm(!1),ii=te(null),Si=null;function ba(t){var n=t.alternate;Me(cn,cn.current&1),Me(ii,t),Si===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(Si=t)}function Um(t){if(t.tag===22){if(Me(cn,cn.current),Me(ii,t),Si===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Si=t)}}else Ta()}function Ta(){Me(cn,cn.current),Me(ii,ii.current)}function qi(t){ye(ii),Si===t&&(Si=null),ye(cn)}var cn=te(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qc(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Jc={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=jn(),c=Sa(o);c.payload=n,a!=null&&(c.callback=a),n=Ma(t,c,o),n!==null&&(Zn(n,t,o),$s(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=jn(),c=Sa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(t,c,o),n!==null&&(Zn(n,t,o),$s(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jn(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(t,o,a),n!==null&&(Zn(n,t,a),$s(n,t,a))}};function Lm(t,n,a,o,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!ks(a,o)||!ks(c,f):!0}function Nm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Jc.enqueueReplaceState(n,n.state,null)}function dr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Om(t){Ol(t)}function Pm(t){console.error(t)}function zm(t){Ol(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Bm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $c(t,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function Im(t){return t=Sa(t),t.tag=3,t}function Fm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Bm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Bm(n,a,o),typeof c!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Cx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&js(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 13:return Si===null?bf():a.alternate===null&&Jt===0&&(Jt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===wc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Af(t,o,c)),!1;case 22:return a.flags|=65536,o===wc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Af(t,o,c)),!1}throw Error(r(435,a.tag))}return Af(t,o,c),bf(),!1}if(wt)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Sc&&(t=Error(r(422),{cause:o}),Ys($n(t,a)))):(o!==Sc&&(n=Error(r(423),{cause:o}),Ys($n(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=$n(o,a),c=$c(t.stateNode,o,c),Uc(t,c),Jt!==4&&(Jt=2)),!1;var f=Error(r(520),{cause:o});if(f=$n(f,a),mo===null?mo=[f]:mo.push(f),Jt!==4&&(Jt=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=$c(a.stateNode,o,t),Uc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ua===null||!Ua.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Im(c),Fm(c,t,a,o),Uc(a,c),!1}a=a.return}while(a!==null);return!1}var Hm=Error(r(461)),mn=!1;function Mn(t,n,a,o){n.child=t===null?Dm(n,null,a,o):jr(n,t.child,a,o)}function Gm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return cr(n),o=zc(t,n,a,S,f,c),T=Bc(),t!==null&&!mn?(Ic(t,n,c),Yi(t,n,c)):(wt&&T&&xc(n),n.flags|=1,Mn(t,n,o,c),n.child)}function Vm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!gc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,km(t,n,f,o,c)):(t=pl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!lf(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(S,o)&&t.ref===n.ref)return Yi(t,n,c)}return n.flags|=1,t=Hi(f,o),t.ref=n.ref,t.return=n,n.child=t}function km(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(ks(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,lf(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Yi(t,n,c)}return ef(t,n,a,o,c)}function Xm(t,n,a){var o=n.pendingProps,c=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Wm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xl(n,f!==null?f.cachePool:null),f!==null?kp(n,f):Nc(),Um(n);else return n.lanes=n.childLanes=536870912,Wm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(xl(n,f.cachePool),kp(n,f),Ta(),n.memoizedState=null):(t!==null&&xl(n,null),Nc(),Ta());return Mn(t,n,c,a),n.child}function Wm(t,n,a,o){var c=Rc();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&xl(n,null),Nc(),Um(n),t!==null&&js(t,n,o,!0),null}function zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ef(t,n,a,o,c){return cr(n),a=zc(t,n,a,o,void 0,c),o=Bc(),t!==null&&!mn?(Ic(t,n,c),Yi(t,n,c)):(wt&&o&&xc(n),n.flags|=1,Mn(t,n,a,c),n.child)}function qm(t,n,a,o,c,f){return cr(n),n.updateQueue=null,a=Wp(n,o,a,c),Xp(t),o=Bc(),t!==null&&!mn?(Ic(t,n,f),Yi(t,n,f)):(wt&&o&&xc(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Ym(t,n,a,o,c){if(cr(n),n.stateNode===null){var f=Ir,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Jc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Cc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Ir,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Qc(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Jc.enqueueReplaceState(f,f.state,null),to(n,o,f,c),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=dr(a,T);f.props=P;var $=f.context,ce=a.contextType;S=Ir,typeof ce=="object"&&ce!==null&&(S=Rn(ce));var ve=a.getDerivedStateFromProps;ce=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ce||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==S)&&Nm(n,f,o,S),ya=!1;var ie=n.memoizedState;f.state=ie,to(n,o,f,c),eo(),$=n.memoizedState,T||ie!==$||ya?(typeof ve=="function"&&(Qc(n,a,ve,o),$=n.memoizedState),(P=ya||Lm(n,a,P,o,ie,$,S))?(ce||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=S,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Dc(t,n),S=n.memoizedProps,ce=dr(a,S),f.props=ce,ve=n.pendingProps,ie=f.context,$=a.contextType,P=Ir,typeof $=="object"&&$!==null&&(P=Rn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==ve||ie!==P)&&Nm(n,f,o,P),ya=!1,ie=n.memoizedState,f.state=ie,to(n,o,f,c),eo();var ae=n.memoizedState;S!==ve||ie!==ae||ya||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof T=="function"&&(Qc(n,a,T,o),ae=n.memoizedState),(ce=ya||Lm(n,a,ce,o,ie,ae,P)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ae,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ae,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ae),f.props=o,f.state=ae,f.context=P,o=ce):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,zl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=jr(n,t.child,null,c),n.child=jr(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Yi(t,n,c),t}function jm(t,n,a,o){return qs(),n.flags|=256,Mn(t,n,a,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(t){return{baseLanes:t,cachePool:Pp()}}function af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function Zm(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(c?ba(n):Ta(),wt){var T=Qt,P;if(P=T){e:{for(P=T,T=yi;P.nodeType!==8;){if(!T){T=null;break e}if(P=ci(P.nextSibling),P===null){T=null;break e}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:rr!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},P=Xn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Un=n,Qt=null,P=!0):P=!1}P||lr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Gf(T)?n.lanes=32:n.lanes=536870912,null;qi(n)}return T=o.children,o=o.fallback,c?(Ta(),c=n.mode,T=Bl({mode:"hidden",children:T},c),o=ar(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=nf(a),c.childLanes=af(t,S,a),n.memoizedState=tf,o):(ba(n),rf(n,T))}if(P=t.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(ba(n),n.flags&=-257,n=sf(t,n,a)):n.memoizedState!==null?(Ta(),n.child=t.child,n.flags|=128,n=null):(Ta(),c=o.fallback,T=n.mode,o=Bl({mode:"visible",children:o.children},T),c=ar(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,jr(n,t.child,null,a),o=n.child,o.memoizedState=nf(a),o.childLanes=af(t,S,a),n.memoizedState=tf,n=c);else if(ba(n),Gf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(r(419)),o.stack="",o.digest=S,Ys({value:o,source:null,stack:null}),n=sf(t,n,a)}else if(mn||js(t,n,a,!1),S=(a&t.childLanes)!==0,mn||S){if(S=Wt,S!==null&&(o=a&-a,o=(o&42)!==0?1:it(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Br(t,o),Zn(S,t,o),Hm;T.data==="$?"||bf(),n=sf(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Qt=ci(T.nextSibling),Un=n,wt=!0,or=null,yi=!1,t!==null&&(ti[ni++]=Gi,ti[ni++]=Vi,ti[ni++]=rr,Gi=t.id,Vi=t.overflow,rr=n),n=rf(n,o.children),n.flags|=4096);return n}return c?(Ta(),c=o.fallback,T=n.mode,P=t.child,$=P.sibling,o=Hi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?c=Hi($,c):(c=ar(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=t.child.memoizedState,T===null?T=nf(a):(P=T.cachePool,P!==null?($=un._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Pp(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=af(t,S,a),n.memoizedState=tf,o):(ba(n),a=t.child,t=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function rf(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=Xn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function sf(t,n,a){return jr(n,t.child,null,a),t=rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Km(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ec(t.return,n,a)}function of(t,n,a,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Qm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Mn(t,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Km(t,a,n);else if(t.tag===19)Km(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Me(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Nl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Nl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Hi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Hi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function Dx(t,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),xa(n,un,t.memoizedState.cache),qs();break;case 27:case 5:Je(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Zm(t,n,a):(ba(n),t=Yi(t,n,a),t!==null?t.sibling:null);ba(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(js(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Qm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Me(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,Xm(t,n,a);case 24:xa(n,un,t.memoizedState.cache)}return Yi(t,n,a)}function Jm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!lf(t,a)&&(n.flags&128)===0)return mn=!1,Dx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,wt&&(n.flags&1048576)!==0&&wp(n,gl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")gc(o)?(t=dr(o,t),n.tag=1,n=Ym(null,n,o,t,a)):(n.tag=0,n=ef(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===C){n.tag=11,n=Gm(null,n,o,t,a);break e}else if(c===z){n.tag=14,n=Vm(null,n,o,t,a);break e}}throw n=ge(o)||o,Error(r(306,n,""))}}return n;case 0:return ef(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=dr(o,n.pendingProps),Ym(t,n,o,c,a);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Dc(t,n),to(n,o,null,a);var S=n.memoizedState;if(o=S.cache,xa(n,un,o),o!==f.cache&&bc(n,[un],a,!0),eo(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=jm(t,n,o,a);break e}else if(o!==c){c=$n(Error(r(424)),n),Ys(c),n=jm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=ci(t.firstChild),Un=n,wt=!0,or=null,yi=!0,a=Dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qs(),o===c){n=Yi(t,n,a);break e}Mn(t,n,o,a)}n=n.child}return n;case 26:return zl(t,n),t===null?(a=n0(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=Ql(Ee.current).createElement(a),o[on]=n,o[yn]=t,bn(o,a,t),nn(o),n.stateNode=o):n.memoizedState=n0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Je(n),t===null&&wt&&(o=n.stateNode=$g(n.type,n.pendingProps,Ee.current),Un=n,yi=!0,c=Qt,Oa(n.type)?(Vf=c,Qt=ci(o.firstChild)):Qt=c),Mn(t,n,n.pendingProps.children,a),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((c=o=Qt)&&(o=ay(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,Un=n,Qt=ci(o.firstChild),yi=!1,c=!0):c=!1),c||lr(n)),Je(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,If(c,f)?o=null:S!==null&&If(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=zc(t,n,Mx,null,null,a),bo._currentValue=c),zl(t,n),Mn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=Qt)&&(a=ry(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Un=n,Qt=null,t=!0):t=!1),t||lr(n)),null;case 13:return Zm(t,n,a);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=jr(n,null,o,a):Mn(t,n,o,a),n.child;case 11:return Gm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),Mn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,cr(n),c=Rn(c),o=o(c),n.flags|=1,Mn(t,n,o,a),n.child;case 14:return Vm(t,n,n.type,n.pendingProps,a);case 15:return km(t,n,n.type,n.pendingProps,a);case 19:return Qm(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Bl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Xm(t,n,a);case 24:return cr(n),o=Rn(un),t===null?(c=Rc(),c===null&&(c=Wt,f=Tc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Cc(n),xa(n,un,c)):((t.lanes&a)!==0&&(Dc(t,n),to(n,null,null,a),eo()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),xa(n,un,o)):(o=f.cache,xa(n,un,o),o!==c.cache&&bc(n,[un],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(t){t.flags|=4}function $m(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!o0(n)){if(n=ii.current,n!==null&&((St&4194048)===St?Si!==null:(St&62914560)!==St&&(St&536870912)===0||n!==Si))throw Js=wc,zp;t.flags|=8192}}function Il(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,Jr|=n)}function lo(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ux(t,n,a){var o=n.pendingProps;switch(yc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(un),lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ws(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Up())),Yt(n),null;case 26:return a=n.memoizedState,t===null?(ji(n),a!==null?(Yt(n),$m(n,a)):(Yt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ji(n),Yt(n),$m(n,a)):(Yt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ji(n),Yt(n),n.flags&=-16777217),null;case 27:Ot(n),a=Ee.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=J.current,Ws(n)?Cp(n):(t=$g(c,o,a),n.stateNode=t,ji(n))}return Yt(n),null;case 5:if(Ot(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(t=J.current,Ws(n))Cp(n);else{switch(c=Ql(Ee.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[on]=n,t[yn]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(bn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ji(n)}}return Yt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ee.current,Ws(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Un,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||qg(t.nodeValue,a)),t||lr(n)}else t=Ql(t).createTextNode(o),t[on]=n,n.stateNode=t}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ws(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else qs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),c=!1}else c=Up(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Yt(n),null;case 4:return lt(),t===null&&Nf(n.stateNode.containerInfo),Yt(n),null;case 10:return Xi(n.type),Yt(n),null;case 19:if(ye(cn),c=n.memoizedState,c===null)return Yt(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)lo(c,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Nl(t),f!==null){for(n.flags|=128,lo(c,!1),t=f.updateQueue,n.updateQueue=t,Il(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Rp(a,t),a=a.sibling;return Me(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&dt()>Gl&&(n.flags|=128,o=!0,lo(c,!1),n.lanes=4194304)}else{if(!o)if(t=Nl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Il(n,t),lo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!wt)return Yt(n),null}else 2*dt()-c.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,o=!0,lo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=dt(),n.sibling=null,t=cn.current,Me(cn,o?t&1|2:t&1),n):(Yt(n),null);case 22:case 23:return qi(n),Oc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ye(fr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(un),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Lx(t,n){switch(yc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Xi(un),lt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ot(n),null;case 13:if(qi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(cn),null;case 4:return lt(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),Oc(),t!==null&&ye(fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Xi(un),null;case 25:return null;default:return null}}function eg(t,n){switch(yc(n),n.tag){case 3:Xi(un),lt();break;case 26:case 27:case 5:Ot(n);break;case 4:lt();break;case 13:qi(n);break;case 19:ye(cn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),Oc(),t!==null&&ye(fr);break;case 24:Xi(un)}}function uo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(T){Vt(n,n.return,T)}}function Aa(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var P=a,$=T;try{$()}catch(ce){Vt(c,P,ce)}}}o=o.next}while(o!==f)}}catch(ce){Vt(n,n.return,ce)}}function tg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Vp(n,a)}catch(o){Vt(t,t.return,o)}}}function ng(t,n,a){a.props=dr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Vt(t,n,c)}}function Mi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Vt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Vt(t,n,c)}else a.current=null}function ig(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Vt(t,t.return,c)}}function uf(t,n,a){try{var o=t.stateNode;$x(o,t.type,a,n),o[yn]=n}catch(c){Vt(t,t.return,c)}}function ag(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Oa(t.type)||t.tag===4}function cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Oa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Kl));else if(o!==4&&(o===27&&Oa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Fl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Oa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function rg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[on]=t,n[yn]=a}catch(f){Vt(t,t.return,f)}}var Zi=!1,tn=!1,hf=!1,sg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Nx(t,n){if(t=t.containerInfo,zf=iu,t=_p(t),uc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,T=-1,P=-1,$=0,ce=0,ve=t,ie=null;t:for(;;){for(var ae;ve!==a||c!==0&&ve.nodeType!==3||(T=S+c),ve!==f||o!==0&&ve.nodeType!==3||(P=S+o),ve.nodeType===3&&(S+=ve.nodeValue.length),(ae=ve.firstChild)!==null;)ie=ve,ve=ae;for(;;){if(ve===t)break t;if(ie===a&&++$===c&&(T=S),ie===f&&++ce===o&&(P=S),(ae=ve.nextSibling)!==null)break;ve=ie,ie=ve.parentNode}ve=ae}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:t,selectionRange:a},iu=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var nt=dr(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(nt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){Vt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Hf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function og(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(t,a),o&4&&uo(5,a);break;case 1:if(Ra(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Vt(a,a.return,S)}else{var c=dr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Vt(a,a.return,S)}}o&64&&tg(a),o&512&&co(a,a.return);break;case 3:if(Ra(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(t,n)}catch(S){Vt(a,a.return,S)}}break;case 27:n===null&&o&4&&rg(a);case 26:case 5:Ra(t,a),n===null&&o&4&&ig(a),o&512&&co(a,a.return);break;case 12:Ra(t,a);break;case 13:Ra(t,a),o&4&&cg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vx.bind(null,a),sy(t,a))));break;case 22:if(o=a.memoizedState!==null||Zi,!o){n=n!==null&&n.memoizedState!==null||tn,c=Zi;var f=tn;Zi=o,(tn=n)&&!f?wa(t,a,(a.subtreeFlags&8772)!==0):Ra(t,a),Zi=c,tn=f}break;case 30:break;default:Ra(t,a)}}function lg(t){var n=t.alternate;n!==null&&(t.alternate=null,lg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ma(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,zn=!1;function Ki(t,n,a){for(a=a.child;a!==null;)ug(t,n,a),a=a.sibling}function ug(t,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:tn||Mi(a,n),Ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Mi(a,n);var o=qt,c=zn;Oa(a.type)&&(qt=a.stateNode,zn=!1),Ki(t,n,a),yo(a.stateNode),qt=o,zn=c;break;case 5:tn||Mi(a,n);case 6:if(o=qt,c=zn,qt=null,Ki(t,n,a),qt=o,zn=c,qt!==null)if(zn)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(a.stateNode)}catch(f){Vt(a,n,f)}else try{qt.removeChild(a.stateNode)}catch(f){Vt(a,n,f)}break;case 18:qt!==null&&(zn?(t=qt,Qg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),wo(t)):Qg(qt,a.stateNode));break;case 4:o=qt,c=zn,qt=a.stateNode.containerInfo,zn=!0,Ki(t,n,a),qt=o,zn=c;break;case 0:case 11:case 14:case 15:tn||Aa(2,a,n),tn||Aa(4,a,n),Ki(t,n,a);break;case 1:tn||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ng(a,n,o)),Ki(t,n,a);break;case 21:Ki(t,n,a);break;case 22:tn=(o=tn)||a.memoizedState!==null,Ki(t,n,a),tn=o;break;default:Ki(t,n,a)}}function cg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wo(t)}catch(a){Vt(n,n.return,a)}}function Ox(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new sg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new sg),n;default:throw Error(r(435,t.tag))}}function df(t,n){var a=Ox(t);n.forEach(function(o){var c=kx.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,S=n,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(Oa(T.type)){qt=T.stateNode,zn=!1;break e}break;case 5:qt=T.stateNode,zn=!1;break e;case 3:case 4:qt=T.stateNode.containerInfo,zn=!0;break e}T=T.return}if(qt===null)throw Error(r(160));ug(f,S,c),qt=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)fg(n,t),n=n.sibling}var ui=null;function fg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Aa(3,t,t.return),uo(3,t),Aa(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(tn||a===null||Mi(a,a.return)),o&64&&Zi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ui;if(Wn(n,t),qn(t),o&512&&(tn||a===null||Mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[pa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,o,a),f[on]=t,nn(f),o=f;break e;case"link":var S=r0("link","href",c).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break t}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=r0("meta","content",c).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break t}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=t,nn(f),o=f}t.stateNode=o}else s0(c,t.type,t.stateNode);else t.stateNode=a0(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?s0(c,t.type,t.stateNode):a0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(tn||a===null||Mi(a,a.return)),a!==null&&o&4&&uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(tn||a===null||Mi(a,a.return)),t.flags&32){c=t.stateNode;try{xi(c,"")}catch(ae){Vt(t,t.return,ae)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,uf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(hf=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ae){Vt(t,t.return,ae)}}break;case 3:if(eu=null,c=ui,ui=Jl(n.containerInfo),Wn(n,t),ui=c,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(ae){Vt(t,t.return,ae)}hf&&(hf=!1,hg(t));break;case 4:o=ui,ui=Jl(t.stateNode.containerInfo),Wn(n,t),qn(t),ui=o;break;case 12:Wn(n,t),qn(t);break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=dt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,df(t,o)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Zi,ce=tn;if(Zi=$||c,tn=ce||P,Wn(n,t),tn=ce,Zi=$,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Zi||tn||pr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=P.stateNode;var ve=P.memoizedProps.style,ie=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;T.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(ae){Vt(P,P.return,ae)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(ae){Vt(P,P.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,df(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,df(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(ag(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(t);Fl(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(xi(S,""),a.flags&=-33);var T=cf(t);Fl(t,T,S);break;case 3:case 4:var P=a.stateNode.containerInfo,$=cf(t);ff(t,$,P);break;default:throw Error(r(161))}}catch(ce){Vt(t,t.return,ce)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function hg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)og(t,n.alternate,n),n=n.sibling}function pr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),pr(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ng(n,n.return,a),pr(n);break;case 27:yo(n.stateNode);case 26:case 5:Mi(n,n.return),pr(n);break;case 22:n.memoizedState===null&&pr(n);break;case 30:pr(n);break;default:pr(n)}t=t.sibling}}function wa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:wa(c,f,a),uo(4,f);break;case 1:if(wa(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Vt(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Gp(P[c],T)}catch($){Vt(o,o.return,$)}}a&&S&64&&tg(f),co(f,f.return);break;case 27:rg(f);case 26:case 5:wa(c,f,a),a&&o===null&&S&4&&ig(f),co(f,f.return);break;case 12:wa(c,f,a);break;case 13:wa(c,f,a),a&&S&4&&cg(c,f);break;case 22:f.memoizedState===null&&wa(c,f,a),co(f,f.return);break;case 30:break;default:wa(c,f,a)}n=n.sibling}}function pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zs(a))}function mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zs(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dg(t,n,a,o),n=n.sibling}function dg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),c&2048&&uo(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zs(t)));break;case 12:if(c&2048){Ei(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Vt(n,n.return,P)}}else Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,o):fo(t,n):f._visibility&2?Ei(t,n,a,o):(f._visibility|=2,Zr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&pf(S,n);break;case 24:Ei(t,n,a,o),c&2048&&mf(n.alternate,n);break;default:Ei(t,n,a,o)}}function Zr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,P=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:Zr(f,S,T,P,c),uo(8,S);break;case 23:break;case 22:var ce=S.stateNode;S.memoizedState!==null?ce._visibility&2?Zr(f,S,T,P,c):fo(f,S):(ce._visibility|=2,Zr(f,S,T,P,c)),c&&$&2048&&pf(S.alternate,S);break;case 24:Zr(f,S,T,P,c),c&&$&2048&&mf(S.alternate,S);break;default:Zr(f,S,T,P,c)}n=n.sibling}}function fo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:fo(a,o),c&2048&&pf(o.alternate,o);break;case 24:fo(a,o),c&2048&&mf(o.alternate,o);break;default:fo(a,o)}n=n.sibling}}var ho=8192;function Kr(t){if(t.subtreeFlags&ho)for(t=t.child;t!==null;)pg(t),t=t.sibling}function pg(t){switch(t.tag){case 26:Kr(t),t.flags&ho&&t.memoizedState!==null&&xy(ui,t.memoizedState,t.memoizedProps);break;case 5:Kr(t);break;case 3:case 4:var n=ui;ui=Jl(t.stateNode.containerInfo),Kr(t),ui=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=ho,ho=16777216,Kr(t),ho=n):Kr(t));break;default:Kr(t)}}function mg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function po(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,_g(o,t)}mg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gg(t),t=t.sibling}function gg(t){switch(t.tag){case 0:case 11:case 15:po(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:po(t);break;case 12:po(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):po(t);break;default:po(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,_g(o,t)}mg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function _g(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else e:for(a=t;gn!==null;){o=gn;var c=o.sibling,f=o.return;if(lg(o),o===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var Px={getCacheForType:function(t){var n=Rn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},zx=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Wt=null,pt=null,St=0,Nt=0,Yn=null,Ca=!1,Qr=!1,gf=!1,Qi=0,Jt=0,Da=0,mr=0,_f=0,ai=0,Jr=0,mo=null,Bn=null,vf=!1,xf=0,Gl=1/0,Vl=null,Ua=null,En=0,La=null,$r=null,es=0,yf=0,Sf=null,vg=null,go=0,Mf=null;function jn(){if((Lt&2)!==0&&St!==0)return St&-St;if(B.T!==null){var t=Gr;return t!==0?t:Cf()}return bt()}function xg(){ai===0&&(ai=(St&536870912)===0||wt?k():536870912);var t=ii.current;return t!==null&&(t.flags|=32),ai}function Zn(t,n,a){(t===Wt&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)&&(ts(t,0),Na(t,St,ai,!1)),Ie(t,a),((Lt&2)===0||t!==Wt)&&(t===Wt&&((Lt&2)===0&&(mr|=a),Jt===4&&Na(t,St,ai,!1)),bi(t))}function yg(t,n,a){if((Lt&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ce(t,n),c=o?Fx(t,n):Tf(t,n,!0),f=o;do{if(c===0){Qr&&!o&&Na(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Bx(a)){c=Tf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var T=t;c=mo;var P=T.current.memoizedState.isDehydrated;if(P&&(ts(T,S).flags|=256),S=Tf(T,S,!1),S!==2){if(gf&&!P){T.errorRecoveryDisabledLanes|=f,mr|=f,c=4;break e}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){ts(t,0),Na(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Na(o,n,ai,!Ca);break e;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-dt(),10<c)){if(Na(o,n,ai,!Ca),je(o,0,!0)!==0)break e;o.timeoutHandle=Zg(Sg.bind(null,o,a,Bn,Vl,vf,n,ai,mr,Jr,Ca,f,2,-0,0),c);break e}Sg(o,a,Bn,Vl,vf,n,ai,mr,Jr,Ca,f,0,-0,0)}}break}while(!0);bi(t)}function Sg(t,n,a,o,c,f,S,T,P,$,ce,ve,ie,ae){if(t.timeoutHandle=-1,ve=n.subtreeFlags,(ve&8192||(ve&16785408)===16785408)&&(Eo={stylesheets:null,count:0,unsuspend:vy},pg(n),ve=yy(),ve!==null)){t.cancelPendingCommit=ve(wg.bind(null,t,n,f,a,o,c,S,T,P,ce,1,ie,ae)),Na(t,f,S,!$);return}wg(t,n,f,a,o,c,S,T,P)}function Bx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(t,n,a,o){n&=~_f,n&=~mr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-ze(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&xe(t,a,n)}function kl(){return(Lt&6)===0?(_o(0),!1):!0}function Ef(){if(pt!==null){if(Nt===0)var t=pt.return;else t=pt,ki=ur=null,Fc(t),Yr=null,so=0,t=pt;for(;t!==null;)eg(t.alternate,t),t=t.return;pt=null}}function ts(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ty(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ef(),Wt=t,pt=a=Hi(t.current,null),St=n,Nt=0,Yn=null,Ca=!1,Qr=Ce(t,n),gf=!1,Jr=ai=_f=mr=Da=Jt=0,Bn=mo=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-ze(o),f=1<<c;n|=t[c],o&=~f}return Qi=n,fl(),a}function Mg(t,n){ft=null,B.H=Dl,n===Qs||n===yl?(n=Fp(),Nt=3):n===zp?(n=Fp(),Nt=4):Nt=n===Hm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,pt===null&&(Jt=1,Pl(t,$n(n,t.current)))}function Eg(){var t=B.H;return B.H=Dl,t===null?Dl:t}function bg(){var t=B.A;return B.A=Px,t}function bf(){Jt=4,Ca||(St&4194048)!==St&&ii.current!==null||(Qr=!0),(Da&134217727)===0&&(mr&134217727)===0||Wt===null||Na(Wt,St,ai,!1)}function Tf(t,n,a){var o=Lt;Lt|=2;var c=Eg(),f=bg();(Wt!==t||St!==n)&&(Vl=null,ts(t,n)),n=!1;var S=Jt;e:do try{if(Nt!==0&&pt!==null){var T=pt,P=Yn;switch(Nt){case 8:Ef(),S=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var $=Nt;if(Nt=0,Yn=null,ns(t,T,P,$),a&&Qr){S=0;break e}break;default:$=Nt,Nt=0,Yn=null,ns(t,T,P,$)}}Ix(),S=Jt;break}catch(ce){Mg(t,ce)}while(!0);return n&&t.shellSuspendCounter++,ki=ur=null,Lt=o,B.H=c,B.A=f,pt===null&&(Wt=null,St=0,fl()),S}function Ix(){for(;pt!==null;)Tg(pt)}function Fx(t,n){var a=Lt;Lt|=2;var o=Eg(),c=bg();Wt!==t||St!==n?(Vl=null,Gl=dt()+500,ts(t,n)):Qr=Ce(t,n);e:do try{if(Nt!==0&&pt!==null){n=pt;var f=Yn;t:switch(Nt){case 1:Nt=0,Yn=null,ns(t,n,f,1);break;case 2:case 9:if(Bp(f)){Nt=0,Yn=null,Ag(n);break}n=function(){Nt!==2&&Nt!==9||Wt!==t||(Nt=7),bi(t)},f.then(n,n);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:Bp(f)?(Nt=0,Yn=null,Ag(n)):(Nt=0,Yn=null,ns(t,n,f,7));break;case 5:var S=null;switch(pt.tag){case 26:S=pt.memoizedState;case 5:case 27:var T=pt;if(!S||o0(S)){Nt=0,Yn=null;var P=T.sibling;if(P!==null)pt=P;else{var $=T.return;$!==null?(pt=$,Xl($)):pt=null}break t}}Nt=0,Yn=null,ns(t,n,f,5);break;case 6:Nt=0,Yn=null,ns(t,n,f,6);break;case 8:Ef(),Jt=6;break e;default:throw Error(r(462))}}Hx();break}catch(ce){Mg(t,ce)}while(!0);return ki=ur=null,B.H=o,B.A=c,Lt=a,pt!==null?0:(Wt=null,St=0,fl(),Jt)}function Hx(){for(;pt!==null&&!xn();)Tg(pt)}function Tg(t){var n=Jm(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?Xl(t):pt=n}function Ag(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=qm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=qm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Fc(n);default:eg(a,n),n=pt=Rp(n,Qi),n=Jm(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?Xl(t):pt=n}function ns(t,n,a,o){ki=ur=null,Fc(n),Yr=null,so=0;var c=n.return;try{if(Cx(t,c,n,a,St)){Jt=1,Pl(t,$n(a,t.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;Jt=1,Pl(t,$n(a,t.current)),pt=null;return}n.flags&32768?(wt||o===1?t=!0:Qr||(St&536870912)!==0?t=!1:(Ca=t=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),Rg(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){Rg(n,Ca);return}t=n.return;var a=Ux(n.alternate,n,Qi);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);Jt===0&&(Jt=5)}function Rg(t,n){do{var a=Lx(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);Jt=6,pt=null}function wg(t,n,a,o,c,f,S,T,P){t.cancelPendingCommit=null;do Wl();while(En!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pc,Re(t,a,f,S,T,P),t===Wt&&(pt=Wt=null,St=0),$r=n,La=t,es=a,yf=f,Sf=c,vg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xx(rt,function(){return Ng(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=Z.p,Z.p=2,S=Lt,Lt|=4;try{Nx(t,n,a)}finally{Lt=S,Z.p=c,B.T=o}}En=1,Cg(),Dg(),Ug()}}function Cg(){if(En===1){En=0;var t=La,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Lt;Lt|=4;try{fg(n,t);var f=Bf,S=_p(t.containerInfo),T=f.focusedElem,P=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&gp(T.ownerDocument.documentElement,T)){if(P!==null&&uc(T)){var $=P.start,ce=P.end;if(ce===void 0&&(ce=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ce,T.value.length);else{var ve=T.ownerDocument||document,ie=ve&&ve.defaultView||window;if(ie.getSelection){var ae=ie.getSelection(),nt=T.textContent.length,$e=Math.min(P.start,nt),Bt=P.end===void 0?$e:Math.min(P.end,nt);!ae.extend&&$e>Bt&&(S=Bt,Bt=$e,$e=S);var W=mp(T,$e),V=mp(T,Bt);if(W&&V&&(ae.rangeCount!==1||ae.anchorNode!==W.node||ae.anchorOffset!==W.offset||ae.focusNode!==V.node||ae.focusOffset!==V.offset)){var Q=ve.createRange();Q.setStart(W.node,W.offset),ae.removeAllRanges(),$e>Bt?(ae.addRange(Q),ae.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),ae.addRange(Q))}}}}for(ve=[],ae=T;ae=ae.parentNode;)ae.nodeType===1&&ve.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ve.length;T++){var de=ve[T];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}iu=!!zf,Bf=zf=null}finally{Lt=c,Z.p=o,B.T=a}}t.current=n,En=2}}function Dg(){if(En===2){En=0;var t=La,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Lt;Lt|=4;try{og(t,n.alternate,n)}finally{Lt=c,Z.p=o,B.T=a}}En=3}}function Ug(){if(En===4||En===3){En=0,Mt();var t=La,n=$r,a=es,o=vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,$r=La=null,Lg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ua=null),Ut(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var T=o[S];f(T.value,{componentStack:T.stack})}}finally{B.T=n,Z.p=c}}(es&3)!==0&&Wl(),bi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Mf?go++:(go=0,Mf=t):go=0,_o(0)}}function Lg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Zs(n)))}function Wl(t){return Cg(),Dg(),Ug(),Ng()}function Ng(){if(En!==5)return!1;var t=La,n=yf;yf=0;var a=Ut(es),o=B.T,c=Z.p;try{Z.p=32>a?32:a,B.T=null,a=Sf,Sf=null;var f=La,S=es;if(En=0,$r=La=null,es=0,(Lt&6)!==0)throw Error(r(331));var T=Lt;if(Lt|=4,gg(f.current),dg(f,f.current,S,a),Lt=T,_o(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(fe,f)}catch{}return!0}finally{Z.p=c,B.T=o,Lg(t,n)}}function Og(t,n,a){n=$n(a,n),n=$c(t.stateNode,n,2),t=Ma(t,n,2),t!==null&&(Ie(t,2),bi(t))}function Vt(t,n,a){if(t.tag===3)Og(t,t,a);else for(;n!==null;){if(n.tag===3){Og(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){t=$n(a,t),a=Im(2),o=Ma(n,a,2),o!==null&&(Fm(a,o,n,t),Ie(o,2),bi(o));break}}n=n.return}}function Af(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new zx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(gf=!0,c.add(a),t=Gx.bind(null,t,n,a),n.then(t,t))}function Gx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(St&a)===a&&(Jt===4||Jt===3&&(St&62914560)===St&&300>dt()-xf?(Lt&2)===0&&ts(t,0):_f|=a,Jr===St&&(Jr=0)),bi(t)}function Pg(t,n){n===0&&(n=Ne()),t=Br(t,n),t!==null&&(Ie(t,n),bi(t))}function Vx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Pg(t,a)}function kx(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Pg(t,a)}function Xx(t,n){return gt(t,n)}var ql=null,is=null,Rf=!1,Yl=!1,wf=!1,gr=0;function bi(t){t!==is&&t.next===null&&(is===null?ql=is=t:is=is.next=t),Yl=!0,Rf||(Rf=!0,qx())}function _o(t,n){if(!wf&&Yl){wf=!0;do for(var a=!1,o=ql;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-ze(42|t)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Fg(o,f))}else f=St,f=je(o,o===Wt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ce(o,f)||(a=!0,Fg(o,f));o=o.next}while(a);wf=!1}}function Wx(){zg()}function zg(){Yl=Rf=!1;var t=0;gr!==0&&(ey()&&(t=gr),gr=0);for(var n=dt(),a=null,o=ql;o!==null;){var c=o.next,f=Bg(o,n);f===0?(o.next=null,a===null?ql=c:a.next=c,c===null&&(is=a)):(a=o,(t!==0||(f&3)!==0)&&(Yl=!0)),o=c}_o(t)}function Bg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-ze(f),T=1<<S,P=c[S];P===-1?((T&a)===0||(T&o)!==0)&&(c[S]=at(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=Wt,a=St,a=je(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&H(o),Ut(a)){case 2:case 8:a=Ze;break;case 32:a=rt;break;case 268435456:a=O;break;default:a=rt}return o=Ig.bind(null,t),a=gt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&H(o),t.callbackPriority=2,t.callbackNode=null,2}function Ig(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var o=St;return o=je(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(yg(t,o,n),Bg(t,dt()),t.callbackNode!=null&&t.callbackNode===a?Ig.bind(null,t):null)}function Fg(t,n){if(Wl())return null;yg(t,n,!0)}function qx(){ny(function(){(Lt&6)!==0?gt(_t,Wx):zg()})}function Cf(){return gr===0&&(gr=k()),gr}function Hg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:al(""+t)}function Gg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Hg((c[yn]||null).action),S=o.submitter;S&&(n=(n=S[yn]||null)?Hg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new ll("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gr!==0){var P=S?Gg(c,S):new FormData(c);jc(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=S?Gg(c,S):new FormData(c),jc(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Df=0;Df<dc.length;Df++){var Uf=dc[Df],jx=Uf.toLowerCase(),Zx=Uf[0].toUpperCase()+Uf.slice(1);li(jx,"on"+Zx)}li(yp,"onAnimationEnd"),li(Sp,"onAnimationIteration"),li(Mp,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(hx,"onTransitionRun"),li(dx,"onTransitionStart"),li(px,"onTransitionCancel"),li(Ep,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Vg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],P=T.instance,$=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(ce){Ol(ce)}c.currentTarget=null,f=P}else for(S=0;S<o.length;S++){if(T=o[S],P=T.instance,$=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(ce){Ol(ce)}c.currentTarget=null,f=P}}}}function mt(t,n){var a=n[Ja];a===void 0&&(a=n[Ja]=new Set);var o=t+"__bubble";a.has(o)||(kg(n,t,2,!1),a.add(o))}function Lf(t,n,a){var o=0;n&&(o|=4),kg(a,t,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Nf(t){if(!t[jl]){t[jl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Lf(a,!1,t),Lf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Lf("selectionchange",!1,n))}}function kg(t,n,a,o){switch(d0(n)){case 2:var c=Ey;break;case 8:c=by;break;default:c=Yf}a=c.bind(null,n,a,t),c=void 0,!ec||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Of(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=o.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Oi(T),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){o=f=S;continue e}T=T.parentNode}}o=o.return}Kd(function(){var $=f,ce=Ju(a),ve=[];e:{var ie=bp.get(t);if(ie!==void 0){var ae=ll,nt=t;switch(t){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":ae=Xv;break;case"focusin":nt="focus",ae=ac;break;case"focusout":nt="blur",ae=ac;break;case"beforeblur":case"afterblur":ae=ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=Yv;break;case yp:case Sp:case Mp:ae=Pv;break;case Ep:ae=Zv;break;case"scroll":case"scrollend":ae=Dv;break;case"wheel":ae=Qv;break;case"copy":case"cut":case"paste":ae=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=tp;break;case"toggle":case"beforetoggle":ae=$v}var $e=(n&4)!==0,Bt=!$e&&(t==="scroll"||t==="scrollend"),W=$e?ie!==null?ie+"Capture":null:ie;$e=[];for(var V=$,Q;V!==null;){var de=V;if(Q=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Q===null||W===null||(de=zs(V,W),de!=null&&$e.push(xo(V,de,Q))),Bt)break;V=V.return}0<$e.length&&(ie=new ae(ie,nt,null,a,ce),ve.push({event:ie,listeners:$e}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",ie&&a!==Qu&&(nt=a.relatedTarget||a.fromElement)&&(Oi(nt)||nt[Nn]))break e;if((ae||ie)&&(ie=ce.window===ce?ce:(ie=ce.ownerDocument)?ie.defaultView||ie.parentWindow:window,ae?(nt=a.relatedTarget||a.toElement,ae=$,nt=nt?Oi(nt):null,nt!==null&&(Bt=u(nt),$e=nt.tag,nt!==Bt||$e!==5&&$e!==27&&$e!==6)&&(nt=null)):(ae=null,nt=$),ae!==nt)){if($e=$d,de="onMouseLeave",W="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($e=tp,de="onPointerLeave",W="onPointerEnter",V="pointer"),Bt=ae==null?ie:er(ae),Q=nt==null?ie:er(nt),ie=new $e(de,V+"leave",ae,a,ce),ie.target=Bt,ie.relatedTarget=Q,de=null,Oi(ce)===$&&($e=new $e(W,V+"enter",nt,a,ce),$e.target=Q,$e.relatedTarget=Bt,de=$e),Bt=de,ae&&nt)t:{for($e=ae,W=nt,V=0,Q=$e;Q;Q=as(Q))V++;for(Q=0,de=W;de;de=as(de))Q++;for(;0<V-Q;)$e=as($e),V--;for(;0<Q-V;)W=as(W),Q--;for(;V--;){if($e===W||W!==null&&$e===W.alternate)break t;$e=as($e),W=as(W)}$e=null}else $e=null;ae!==null&&Xg(ve,ie,ae,$e,!1),nt!==null&&Bt!==null&&Xg(ve,Bt,nt,$e,!0)}}e:{if(ie=$?er($):window,ae=ie.nodeName&&ie.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ie.type==="file")var Ge=up;else if(op(ie))if(cp)Ge=ux;else{Ge=ox;var ht=sx}else ae=ie.nodeName,!ae||ae.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?$&&Ku($.elementType)&&(Ge=up):Ge=lx;if(Ge&&(Ge=Ge(t,$))){lp(ve,Ge,a,ce);break e}ht&&ht(t,ie,$),t==="focusout"&&$&&ie.type==="number"&&$.memoizedProps.value!=null&&An(ie,"number",ie.value)}switch(ht=$?er($):window,t){case"focusin":(op(ht)||ht.contentEditable==="true")&&(Or=ht,cc=$,Xs=null);break;case"focusout":Xs=cc=Or=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,vp(ve,a,ce);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":vp(ve,a,ce)}var qe;if(sc)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Nr?rp(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(np&&a.locale!=="ko"&&(Nr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Nr&&(qe=Qd()):(va=ce,tc="value"in va?va.value:va.textContent,Nr=!0)),ht=Zl($,tt),0<ht.length&&(tt=new ep(tt,t,null,a,ce),ve.push({event:tt,listeners:ht}),qe?tt.data=qe:(qe=sp(a),qe!==null&&(tt.data=qe)))),(qe=tx?nx(t,a):ix(t,a))&&(tt=Zl($,"onBeforeInput"),0<tt.length&&(ht=new ep("onBeforeInput","beforeinput",null,a,ce),ve.push({event:ht,listeners:tt}),ht.data=qe)),Yx(ve,t,$,a,ce)}Vg(ve,n)})}function xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&o.unshift(xo(t,c,f)),c=zs(t,n),c!=null&&o.push(xo(t,c,f))),t.tag===3)return o;t=t.return}return[]}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xg(t,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,P=T.alternate,$=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||$===null||(P=$,c?($=zs(a,f),$!=null&&S.unshift(xo(a,$,P))):c||($=zs(a,f),$!=null&&S.push(xo(a,$,P)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(Qx,`
`).replace(Jx,"")}function qg(t,n){return n=Wg(n),Wg(t)===n}function Kl(){}function zt(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xi(t,""+o);break;case"className":Ue(t,"class",o);break;case"tabIndex":Ue(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ue(t,a,o);break;case"style":jd(t,o,f);break;case"data":if(n!=="object"){Ue(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=al(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&zt(t,n,"name",c.name,c,null),zt(t,n,"formEncType",c.formEncType,c,null),zt(t,n,"formMethod",c.formMethod,c,null),zt(t,n,"formTarget",c.formTarget,c,null)):(zt(t,n,"encType",c.encType,c,null),zt(t,n,"method",c.method,c,null),zt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=al(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Kl);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=al(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Ae(t,"popover",o);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ae(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wv.get(a)||a,Ae(t,a,o))}}function Pf(t,n,a,o,c,f){switch(a){case"style":jd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?xi(t,o):(typeof o=="number"||typeof o=="bigint")&&xi(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!il.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ae(t,a,o)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,f,S,a,null)}}c&&zt(t,n,"srcSet",a.srcSet,a,null),o&&zt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var T=f=S=c=null,P=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ce=a[o];if(ce!=null)switch(o){case"name":c=ce;break;case"type":S=ce;break;case"checked":P=ce;break;case"defaultChecked":$=ce;break;case"value":f=ce;break;case"defaultValue":T=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:zt(t,n,o,ce,a,null)}}Gt(t,f,T,P,$,S,c,!1),Kt(t);return;case"select":mt("invalid",t),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:zt(t,n,c,T,a,null)}n=f,a=S,t.multiple=!!o,n!=null?ln(t,!!o,n,!1):a!=null&&ln(t,!!o,a,!0);return;case"textarea":mt("invalid",t),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:zt(t,n,S,T,a,null)}Sn(t,o,c,f),Kt(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,n,P,o,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<vo.length;o++)mt(vo[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,$,o,a,null)}return;default:if(Ku(n)){for(ce in a)a.hasOwnProperty(ce)&&(o=a[ce],o!==void 0&&Pf(t,n,ce,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&zt(t,n,T,o,a,null))}function $x(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,P=null,$=null,ce=null;for(ae in a){var ve=a[ae];if(a.hasOwnProperty(ae)&&ve!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":P=ve;default:o.hasOwnProperty(ae)||zt(t,n,ae,null,o,ve)}}for(var ie in o){var ae=o[ie];if(ve=a[ie],o.hasOwnProperty(ie)&&(ae!=null||ve!=null))switch(ie){case"type":f=ae;break;case"name":c=ae;break;case"checked":$=ae;break;case"defaultChecked":ce=ae;break;case"value":S=ae;break;case"defaultValue":T=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:ae!==ve&&zt(t,n,ie,ae,o,ve)}}Bi(t,S,T,P,$,ce,f,c);return;case"select":ae=S=T=ie=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ae=P;default:o.hasOwnProperty(f)||zt(t,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":ie=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==P&&zt(t,n,c,f,o,P)}n=T,a=S,o=ae,ie!=null?ln(t,!!a,ie,!1):!!o!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":ae=ie=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:zt(t,n,T,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":ie=c;break;case"defaultValue":ae=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&zt(t,n,S,c,o,f)}pn(t,ie,ae);return;case"option":for(var nt in a)if(ie=a[nt],a.hasOwnProperty(nt)&&ie!=null&&!o.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:zt(t,n,nt,null,o,ie)}for(P in o)if(ie=o[P],ae=a[P],o.hasOwnProperty(P)&&ie!==ae&&(ie!=null||ae!=null))switch(P){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:zt(t,n,P,ie,o,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)ie=a[$e],a.hasOwnProperty($e)&&ie!=null&&!o.hasOwnProperty($e)&&zt(t,n,$e,null,o,ie);for($ in o)if(ie=o[$],ae=a[$],o.hasOwnProperty($)&&ie!==ae&&(ie!=null||ae!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:zt(t,n,$,ie,o,ae)}return;default:if(Ku(n)){for(var Bt in a)ie=a[Bt],a.hasOwnProperty(Bt)&&ie!==void 0&&!o.hasOwnProperty(Bt)&&Pf(t,n,Bt,void 0,o,ie);for(ce in o)ie=o[ce],ae=a[ce],!o.hasOwnProperty(ce)||ie===ae||ie===void 0&&ae===void 0||Pf(t,n,ce,ie,o,ae);return}}for(var W in a)ie=a[W],a.hasOwnProperty(W)&&ie!=null&&!o.hasOwnProperty(W)&&zt(t,n,W,null,o,ie);for(ve in o)ie=o[ve],ae=a[ve],!o.hasOwnProperty(ve)||ie===ae||ie==null&&ae==null||zt(t,n,ve,ie,o,ae)}var zf=null,Bf=null;function Ql(t){return t.nodeType===9?t:t.ownerDocument}function Yg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function If(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function ey(){var t=window.event;return t&&t.type==="popstate"?t===Ff?!1:(Ff=t,!0):(Ff=null,!1)}var Zg=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(t){return Kg.resolve(null).then(t).catch(iy)}:Zg;function iy(t){setTimeout(function(){throw t})}function Oa(t){return t==="head"}function Qg(t,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=t.ownerDocument;if(a&1&&yo(S.documentElement),a&2&&yo(S.body),a&4)for(a=S.head,yo(a),S=a.firstChild;S;){var T=S.nextSibling,P=S.nodeName;S[pa]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){t.removeChild(f),wo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);wo(n)}function Hf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),ma(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ay(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[pa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function ry(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Gf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function sy(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Vf=null;function Jg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function $g(t,n,a){switch(n=Ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ma(t)}var ri=new Map,e0=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=Z.d;Z.d={f:oy,r:ly,D:uy,C:cy,L:fy,m:hy,X:py,S:dy,M:my};function oy(){var t=Ji.f(),n=kl();return t||n}function ly(t){var n=Pi(t);n!==null&&n.tag===5&&n.type==="form"?ym(n):Ji.r(t)}var rs=typeof document>"u"?null:document;function t0(t,n,a){var o=rs;if(o&&typeof n=="string"&&n){var c=Xt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),e0.has(c)||(e0.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",t),nn(n),o.head.appendChild(n)))}}function uy(t){Ji.D(t),t0("dns-prefetch",t,null)}function cy(t,n){Ji.C(t,n),t0("preconnect",t,n)}function fy(t,n,a){Ji.L(t,n,a);var o=rs;if(o&&t&&n){var c='link[rel="preload"][as="'+Xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Xt(a.imageSizes)+'"]')):c+='[href="'+Xt(t)+'"]';var f=c;switch(n){case"style":f=ss(t);break;case"script":f=os(t)}ri.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(So(f))||n==="script"&&o.querySelector(Mo(f))||(n=o.createElement("link"),bn(n,"link",t),nn(n),o.head.appendChild(n)))}}function hy(t,n){Ji.m(t,n);var a=rs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Xt(o)+'"][href="'+Xt(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=os(t)}if(!ri.has(f)&&(t=g({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mo(f)))return}o=a.createElement("link"),bn(o,"link",t),nn(o),a.head.appendChild(o)}}}function dy(t,n,a){Ji.S(t,n,a);var o=rs;if(o&&t){var c=ga(o).hoistableStyles,f=ss(t);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(So(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&kf(t,a);var P=S=o.createElement("link");nn(P),bn(P,"link",t),P._p=new Promise(function($,ce){P.onload=$,P.onerror=ce}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,$l(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function py(t,n){Ji.X(t,n);var a=rs;if(a&&t){var o=ga(a).hoistableScripts,c=os(t),f=o.get(c);f||(f=a.querySelector(Mo(c)),f||(t=g({src:t,async:!0},n),(n=ri.get(c))&&Xf(t,n),f=a.createElement("script"),nn(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function my(t,n){Ji.M(t,n);var a=rs;if(a&&t){var o=ga(a).hoistableScripts,c=os(t),f=o.get(c);f||(f=a.querySelector(Mo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ri.get(c))&&Xf(t,n),f=a.createElement("script"),nn(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function n0(t,n,a,o){var c=(c=Ee.current)?Jl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ss(a.href),a=ga(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ss(a.href);var f=ga(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(So(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||gy(c,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=os(a),a=ga(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ss(t){return'href="'+Xt(t)+'"'}function So(t){return'link[rel="stylesheet"]['+t+"]"}function i0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function gy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),nn(n),t.head.appendChild(n))}function os(t){return'[src="'+Xt(t)+'"]'}function Mo(t){return"script[async]"+t}function a0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Xt(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),nn(o),bn(o,"style",c),$l(o,a.precedence,t),n.instance=o;case"stylesheet":c=ss(a.href);var f=t.querySelector(So(c));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;o=i0(a),(c=ri.get(c))&&kf(o,c),f=(t.ownerDocument||t).createElement("link"),nn(f);var S=f;return S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),bn(f,"link",o),n.state.loading|=4,$l(f,a.precedence,t),n.instance=f;case"script":return f=os(a.src),(c=t.querySelector(Mo(f)))?(n.instance=c,nn(c),c):(o=a,(c=ri.get(f))&&(o=g({},a),Xf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),nn(c),bn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,t));return n.instance}function $l(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var eu=null;function r0(t,n,a){if(eu===null){var o=new Map,c=eu=new Map;c.set(a,o)}else c=eu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[pa]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function s0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function _y(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function o0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Eo=null;function vy(){}function xy(t,n,a){if(Eo===null)throw Error(r(475));var o=Eo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ss(a.href),f=t.querySelector(So(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=tu.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,nn(f);return}f=t.ownerDocument||t,a=i0(a),(c=ri.get(c))&&kf(a,c),f=f.createElement("link"),nn(f);var S=f;S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),bn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=tu.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function yy(){if(Eo===null)throw Error(r(475));var t=Eo;return t.stylesheets&&t.count===0&&Wf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Wf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function tu(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nu=null;function Wf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nu=new Map,n.forEach(Sy,t),nu=null,tu.call(t))}function Sy(t,n){if(!(n.state.loading&4)){var a=nu.get(t);if(a)var o=a.get(null);else{a=new Map,nu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=tu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function My(t,n,a,o,c,f,S,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function l0(t,n,a,o,c,f,S,T,P,$,ce,ve){return t=new My(t,n,a,S,T,P,$,ve),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),t.current=f,f.stateNode=t,n=Tc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Cc(f),t}function u0(t){return t?(t=Ir,t):Ir}function c0(t,n,a,o,c,f){c=u0(c),o.context===null?o.context=c:o.pendingContext=c,o=Sa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ma(t,o,n),a!==null&&(Zn(a,t,n),$s(a,t,n))}function f0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function qf(t,n){f0(t,n),(t=t.alternate)&&f0(t,n)}function h0(t){if(t.tag===13){var n=Br(t,67108864);n!==null&&Zn(n,t,67108864),qf(t,67108864)}}var iu=!0;function Ey(t,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=2,Yf(t,n,a,o)}finally{Z.p=f,B.T=c}}function by(t,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=8,Yf(t,n,a,o)}finally{Z.p=f,B.T=c}}function Yf(t,n,a,o){if(iu){var c=jf(o);if(c===null)Of(t,n,o,au,a),p0(t,o);else if(Ay(c,t,n,a,o))o.stopPropagation();else if(p0(t,o),n&4&&-1<Ty.indexOf(t)){for(;c!==null;){var f=Pi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ye(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var P=1<<31-ze(S);T.entanglements[1]|=P,S&=~P}bi(f),(Lt&6)===0&&(Gl=dt()+500,_o(0))}}break;case 13:T=Br(f,2),T!==null&&Zn(T,f,2),kl(),qf(f,2)}if(f=jf(o),f===null&&Of(t,n,o,au,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Of(t,n,o,null,a)}}function jf(t){return t=Ju(t),Zf(t)}var au=null;function Zf(t){if(au=null,t=Oi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return au=t,null}function d0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ke()){case _t:return 2;case Ze:return 8;case rt:case $t:return 32;case O:return 268435456;default:return 32}default:return 32}}var Kf=!1,Pa=null,za=null,Ba=null,To=new Map,Ao=new Map,Ia=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p0(t,n){switch(t){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Pi(n),n!==null&&h0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Ay(t,n,a,o,c){switch(n){case"focusin":return Pa=Ro(Pa,t,n,a,o,c),!0;case"dragenter":return za=Ro(za,t,n,a,o,c),!0;case"mouseover":return Ba=Ro(Ba,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ro(To.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,o,c)),!0}return!1}function m0(t){var n=Oi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Vn(t.priority,function(){if(a.tag===13){var o=jn();o=it(o);var c=Br(a,o);c!==null&&Zn(c,a,o),qf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ru(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=jf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Qu=o,a.target.dispatchEvent(o),Qu=null}else return n=Pi(a),n!==null&&h0(n),t.blockedOn=a,!1;n.shift()}return!0}function g0(t,n,a){ru(t)&&a.delete(n)}function Ry(){Kf=!1,Pa!==null&&ru(Pa)&&(Pa=null),za!==null&&ru(za)&&(za=null),Ba!==null&&ru(Ba)&&(Ba=null),To.forEach(g0),Ao.forEach(g0)}function su(t,n){t.blockedOn===n&&(t.blockedOn=null,Kf||(Kf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ry)))}var ou=null;function _0(t){ou!==t&&(ou=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ou===t&&(ou=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Zf(o||a)===null)continue;break}var f=Pi(a);f!==null&&(t.splice(n,3),n-=3,jc(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function wo(t){function n(P){return su(P,t)}Pa!==null&&su(Pa,t),za!==null&&su(za,t),Ba!==null&&su(Ba,t),To.forEach(n),Ao.forEach(n);for(var a=0;a<Ia.length;a++){var o=Ia[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)m0(a),a.blockedOn===null&&Ia.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[yn]||null;if(typeof f=="function")S||_0(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[yn]||null)T=S.formAction;else if(Zf(c)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),_0(a)}}}function Qf(t){this._internalRoot=t}lu.prototype.render=Qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=jn();c0(a,o,t,n,null,null)},lu.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;c0(t.current,2,null,t,null,null),kl(),n[Nn]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,t),a===0&&m0(t)}};var v0=e.version;if(v0!=="19.1.0")throw Error(r(527,v0,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var wy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{fe=uu.inject(wy),me=uu}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Om,f=Pm,S=zm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=l0(t,1,!1,null,null,a,o,c,f,S,T,null),t[Nn]=n.current,Nf(t),new Qf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Om,S=Pm,T=zm,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=l0(t,1,!0,n,a??null,o,c,f,S,T,P,$),n.context=u0(null),a=n.current,o=jn(),o=it(o),c=Sa(o),c.callback=null,Ma(a,c,o),a=o,n.current.lanes=a,Ie(n,a),bi(n),t[Nn]=n.current,Nf(t),new lu(n)},Do.version="19.1.0",Do}var C0;function Fy(){if(C0)return eh.exports;C0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),eh.exports=Iy(),eh.exports}var Hy=Fy(),Uo={},D0;function Gy(){if(D0)return Uo;D0=1,Object.defineProperty(Uo,"__esModule",{value:!0}),Uo.parse=h,Uo.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function h(v,M){const E=new u,A=v.length;if(A<2)return E;const y=(M==null?void 0:M.decode)||g;let _=0;do{const U=v.indexOf("=",_);if(U===-1)break;const L=v.indexOf(";",_),C=L===-1?A:L;if(U>C){_=v.lastIndexOf(";",U-1)+1;continue}const F=d(v,_,U),I=m(v,U,F),z=v.slice(F,I);if(E[z]===void 0){let X=d(v,U+1,C),D=m(v,C,X);const w=y(v.slice(X,D));E[z]=w}_=C+1}while(_<A);return E}function d(v,M,E){do{const A=v.charCodeAt(M);if(A!==32&&A!==9)return M}while(++M<E);return E}function m(v,M,E){for(;M>E;){const A=v.charCodeAt(--M);if(A!==32&&A!==9)return M+1}return E}function p(v,M,E){const A=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=A(M);if(!e.test(y))throw new TypeError(`argument val is invalid: ${M}`);let _=v+"="+y;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return Uo}Gy();var U0="popstate";function Vy(s={}){function e(r,l){let{pathname:u,search:h,hash:d}=r.location;return Hh("",{pathname:u,search:h,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Go(l)}return Xy(e,i,null,s)}function jt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Di(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ky(){return Math.random().toString(36).substring(2,10)}function L0(s,e){return{usr:s.state,key:s.key,idx:e}}function Hh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Us(e):e,state:i,key:e&&e.key||r||ky()}}function Go({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Us(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Xy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d="POP",m=null,p=g();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function g(){return(h.state||{idx:null}).idx}function x(){d="POP";let y=g(),_=y==null?null:y-p;p=y,m&&m({action:d,location:A.location,delta:_})}function v(y,_){d="PUSH";let U=Hh(A.location,y,_);p=g()+1;let L=L0(U,p),C=A.createHref(U);try{h.pushState(L,"",C)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(C)}u&&m&&m({action:d,location:A.location,delta:1})}function M(y,_){d="REPLACE";let U=Hh(A.location,y,_);p=g();let L=L0(U,p),C=A.createHref(U);h.replaceState(L,"",C),u&&m&&m({action:d,location:A.location,delta:0})}function E(y){return Wy(y)}let A={get action(){return d},get location(){return s(l,h)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(U0,x),m=y,()=>{l.removeEventListener(U0,x),m=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:M,go(y){return h.go(y)}};return A}function Wy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),jt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Go(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function O_(s,e,i="/"){return qy(s,e,i,!1)}function qy(s,e,i,r){let l=typeof e=="string"?Us(e):e,u=fa(l.pathname||"/",i);if(u==null)return null;let h=P_(s);Yy(h);let d=null;for(let m=0;d==null&&m<h.length;++m){let p=aS(u);d=nS(h[m],p,r)}return d}function P_(s,e=[],i=[],r=""){let l=(u,h,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(jt(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=ua([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(jt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),P_(u.children,e,g,p)),!(u.path==null&&!u.index)&&e.push({path:p,score:eS(p,u.index),routesMeta:g})};return s.forEach((u,h)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))l(u,h);else for(let m of z_(u.path))l(u,h,m)}),e}function z_(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=z_(r.join("/")),d=[];return d.push(...h.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...h),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function Yy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:tS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var jy=/^:[\w-]+$/,Zy=3,Ky=2,Qy=1,Jy=10,$y=-2,N0=s=>s==="*";function eS(s,e){let i=s.split("/"),r=i.length;return i.some(N0)&&(r+=$y),e&&(r+=Ky),i.filter(l=>!N0(l)).reduce((l,u)=>l+(jy.test(u)?Zy:u===""?Qy:Jy),r)}function tS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function nS(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",x=Gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=Gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),h.push({params:l,pathname:ua([u,x.pathname]),pathnameBase:lS(ua([u,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(u=ua([u,x.pathnameBase]))}return h}function Gu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=iS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=d[v]||"";h=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[v];return x&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:h,pattern:s}}function iS(s,e=!1,i=!0){Di(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function aS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Di(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function fa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function rS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Us(s):s;return{pathname:i?i.startsWith("/")?i:sS(i,e):e,search:uS(r),hash:cS(l)}}function sS(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ah(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function B_(s){let e=oS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function I_(s,e,i,r=!1){let l;typeof s=="string"?l=Us(s):(l={...s},jt(!l.pathname||!l.pathname.includes("?"),ah("?","pathname","search",l)),jt(!l.pathname||!l.pathname.includes("#"),ah("#","pathname","hash",l)),jt(!l.search||!l.search.includes("#"),ah("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let x=e.length-1;if(!r&&h.startsWith("..")){let v=h.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}d=x>=0?e[x]:"/"}let m=rS(l,d),p=h&&h!=="/"&&h.endsWith("/"),g=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ua=s=>s.join("/").replace(/\/\/+/g,"/"),lS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),uS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,cS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function fS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var F_=["POST","PUT","PATCH","DELETE"];new Set(F_);var hS=["GET",...F_];new Set(hS);var Ls=he.createContext(null);Ls.displayName="DataRouter";var Wu=he.createContext(null);Wu.displayName="DataRouterState";var H_=he.createContext({isTransitioning:!1});H_.displayName="ViewTransition";var dS=he.createContext(new Map);dS.displayName="Fetchers";var pS=he.createContext(null);pS.displayName="Await";var Ni=he.createContext(null);Ni.displayName="Navigation";var qo=he.createContext(null);qo.displayName="Location";var ha=he.createContext({outlet:null,matches:[],isDataRoute:!1});ha.displayName="Route";var Dd=he.createContext(null);Dd.displayName="RouteError";function mS(s,{relative:e}={}){jt(Yo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=he.useContext(Ni),{hash:l,pathname:u,search:h}=jo(s,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:ua([i,u])),r.createHref({pathname:d,search:h,hash:l})}function Yo(){return he.useContext(qo)!=null}function da(){return jt(Yo(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(qo).location}var G_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function V_(s){he.useContext(Ni).static||he.useLayoutEffect(s)}function k_(){let{isDataRoute:s}=he.useContext(ha);return s?wS():gS()}function gS(){jt(Yo(),"useNavigate() may be used only in the context of a <Router> component.");let s=he.useContext(Ls),{basename:e,navigator:i}=he.useContext(Ni),{matches:r}=he.useContext(ha),{pathname:l}=da(),u=JSON.stringify(B_(r)),h=he.useRef(!1);return V_(()=>{h.current=!0}),he.useCallback((m,p={})=>{if(Di(h.current,G_),!h.current)return;if(typeof m=="number"){i.go(m);return}let g=I_(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ua([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,s])}he.createContext(null);function jo(s,{relative:e}={}){let{matches:i}=he.useContext(ha),{pathname:r}=da(),l=JSON.stringify(B_(i));return he.useMemo(()=>I_(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function _S(s,e){return X_(s,e)}function X_(s,e,i,r){var _;jt(Yo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=he.useContext(Ni),{matches:u}=he.useContext(ha),h=u[u.length-1],d=h?h.params:{},m=h?h.pathname:"/",p=h?h.pathnameBase:"/",g=h&&h.route;{let U=g&&g.path||"";W_(m,!g||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let x=da(),v;if(e){let U=typeof e=="string"?Us(e):e;jt(p==="/"||((_=U.pathname)==null?void 0:_.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${U.pathname}" was given in the \`location\` prop.`),v=U}else v=x;let M=v.pathname||"/",E=M;if(p!=="/"){let U=p.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(U.length).join("/")}let A=O_(s,{pathname:E});Di(g||A!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Di(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=MS(A&&A.map(U=>Object.assign({},U,{params:Object.assign({},d,U.params),pathname:ua([p,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?p:ua([p,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),u,i,r);return e&&y?he.createElement(qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},y):y}function vS(){let s=RS(),e=fS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:u},"ErrorBoundary")," or"," ",he.createElement("code",{style:u},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),i?he.createElement("pre",{style:l},i):null,h)}var xS=he.createElement(vS,null),yS=class extends he.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?he.createElement(ha.Provider,{value:this.props.routeContext},he.createElement(Dd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function SS({routeContext:s,match:e,children:i}){let r=he.useContext(Ls);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(ha.Provider,{value:s},i)}function MS(s,e=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);jt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let h=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:x}=i,v=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){h=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let x,v=!1,M=null,E=null;i&&(x=u&&p.route.id?u[p.route.id]:void 0,M=p.route.errorElement||xS,h&&(d<0&&g===0?(W_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===g&&(v=!0,E=p.route.hydrateFallbackElement||null)));let A=e.concat(l.slice(0,g+1)),y=()=>{let _;return x?_=M:v?_=E:p.route.Component?_=he.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,he.createElement(SS,{match:p,routeContext:{outlet:m,matches:A,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?he.createElement(yS,{location:i.location,revalidation:i.revalidation,component:M,error:x,children:y(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):y()},null)}function Ud(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ES(s){let e=he.useContext(Ls);return jt(e,Ud(s)),e}function bS(s){let e=he.useContext(Wu);return jt(e,Ud(s)),e}function TS(s){let e=he.useContext(ha);return jt(e,Ud(s)),e}function Ld(s){let e=TS(s),i=e.matches[e.matches.length-1];return jt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function AS(){return Ld("useRouteId")}function RS(){var r;let s=he.useContext(Dd),e=bS("useRouteError"),i=Ld("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function wS(){let{router:s}=ES("useNavigate"),e=Ld("useNavigate"),i=he.useRef(!1);return V_(()=>{i.current=!0}),he.useCallback(async(l,u={})=>{Di(i.current,G_),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var O0={};function W_(s,e,i){!e&&!O0[s]&&(O0[s]=!0,Di(!1,i))}he.memo(CS);function CS({routes:s,future:e,state:i}){return X_(s,void 0,i,e)}function Fo(s){jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function DS({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){jt(!Yo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),d=he.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof i=="string"&&(i=Us(i));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=i,M=he.useMemo(()=>{let E=fa(m,h);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:v},navigationType:r}},[h,m,p,g,x,v,r]);return Di(M!=null,`<Router basename="${h}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:he.createElement(Ni.Provider,{value:d},he.createElement(qo.Provider,{children:e,value:M}))}function US({children:s,location:e}){return _S(Gh(s),e)}function Gh(s,e=[]){let i=[];return he.Children.forEach(s,(r,l)=>{if(!he.isValidElement(r))return;let u=[...e,l];if(r.type===he.Fragment){i.push.apply(i,Gh(r.props.children,u));return}jt(r.type===Fo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=Gh(r.props.children,u)),i.push(h)}),i}var Nu="get",Ou="application/x-www-form-urlencoded";function qu(s){return s!=null&&typeof s.tagName=="string"}function LS(s){return qu(s)&&s.tagName.toLowerCase()==="button"}function NS(s){return qu(s)&&s.tagName.toLowerCase()==="form"}function OS(s){return qu(s)&&s.tagName.toLowerCase()==="input"}function PS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function zS(s,e){return s.button===0&&(!e||e==="_self")&&!PS(s)}var cu=null;function BS(){if(cu===null)try{new FormData(document.createElement("form"),0),cu=!1}catch{cu=!0}return cu}var IS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rh(s){return s!=null&&!IS.has(s)?(Di(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`),null):s}function FS(s,e){let i,r,l,u,h;if(NS(s)){let d=s.getAttribute("action");r=d?fa(d,e):null,i=s.getAttribute("method")||Nu,l=rh(s.getAttribute("enctype"))||Ou,u=new FormData(s)}else if(LS(s)||OS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?fa(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Nu,l=rh(s.getAttribute("formenctype"))||rh(d.getAttribute("enctype"))||Ou,u=new FormData(d,s),!BS()){let{name:p,type:g,value:x}=s;if(g==="image"){let v=p?`${p}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else p&&u.append(p,x)}}else{if(qu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Nu,r=null,l=Ou,h=s}return u&&l==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:h}}function Nd(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function HS(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function GS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function VS(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let h=await HS(u,i);return h.links?h.links():[]}return[]}));return qS(r.flat(1).filter(GS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function P0(s,e,i,r,l,u){let h=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,p)=>h(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{var x;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(h(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function kS(s,e,{includeHydrateFallback:i}={}){return XS(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function XS(s){return[...new Set(s)]}function WS(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function qS(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(WS(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var YS=new Set([100,101,204,205]);function jS(s,e){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":e&&fa(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function q_(){let s=he.useContext(Ls);return Nd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function ZS(){let s=he.useContext(Wu);return Nd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Od=he.createContext(void 0);Od.displayName="FrameworkContext";function Y_(){let s=he.useContext(Od);return Nd(s,"You must render this element inside a <HydratedRouter> element"),s}function KS(s,e){let i=he.useContext(Od),[r,l]=he.useState(!1),[u,h]=he.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,v=he.useRef(null);he.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let A=_=>{_.forEach(U=>{h(U.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[s]),he.useEffect(()=>{if(r){let A=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),h(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:Lo(d,M),onBlur:Lo(m,E),onMouseEnter:Lo(p,M),onMouseLeave:Lo(g,E),onTouchStart:Lo(x,M)}]:[!1,v,{}]}function Lo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function QS({page:s,...e}){let{router:i}=q_(),r=he.useMemo(()=>O_(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?he.createElement($S,{page:s,matches:r,...e}):null}function JS(s){let{manifest:e,routeModules:i}=Y_(),[r,l]=he.useState([]);return he.useEffect(()=>{let u=!1;return VS(s,e,i).then(h=>{u||l(h)}),()=>{u=!0}},[s,e,i]),r}function $S({page:s,matches:e,...i}){let r=da(),{manifest:l,routeModules:u}=Y_(),{basename:h}=q_(),{loaderData:d,matches:m}=ZS(),p=he.useMemo(()=>P0(s,e,m,l,r,"data"),[s,e,m,l,r]),g=he.useMemo(()=>P0(s,e,m,l,r,"assets"),[s,e,m,l,r]),x=he.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(e.forEach(_=>{var L;let U=l.routes[_.route.id];!U||!U.hasLoader||(!p.some(C=>C.route.id===_.route.id)&&_.route.id in d&&((L=u[_.route.id])!=null&&L.shouldRevalidate)||U.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let y=jS(s,h);return A&&E.size>0&&y.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[h,d,r,l,p,e,s,u]),v=he.useMemo(()=>kS(g,l),[g,l]),M=JS(g);return he.createElement(he.Fragment,null,x.map(E=>he.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>he.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:A})=>he.createElement("link",{key:E,...A})))}function eM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var j_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{j_&&(window.__reactRouterVersion="7.6.2")}catch{}function tM({basename:s,children:e,window:i}){let r=he.useRef();r.current==null&&(r.current=Vy({window:i,v5Compat:!0}));let l=r.current,[u,h]=he.useState({action:l.action,location:l.location}),d=he.useCallback(m=>{he.startTransition(()=>h(m))},[h]);return he.useLayoutEffect(()=>l.listen(d),[l,d]),he.createElement(DS,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:l})}var Z_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ra=he.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:h,state:d,target:m,to:p,preventScrollReset:g,viewTransition:x,...v},M){let{basename:E}=he.useContext(Ni),A=typeof p=="string"&&Z_.test(p),y,_=!1;if(typeof p=="string"&&A&&(y=p,j_))try{let D=new URL(window.location.href),w=p.startsWith("//")?new URL(D.protocol+p):new URL(p),G=fa(w.pathname,E);w.origin===D.origin&&G!=null?p=G+w.search+w.hash:_=!0}catch{Di(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=mS(p,{relative:l}),[L,C,F]=KS(r,v),I=rM(p,{replace:h,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:x});function z(D){e&&e(D),D.defaultPrevented||I(D)}let X=he.createElement("a",{...v,...F,href:y||U,onClick:_||u?e:z,ref:eM(M,C),target:m,"data-discover":!A&&i==="render"?"true":void 0});return L&&!A?he.createElement(he.Fragment,null,X,he.createElement(QS,{page:U})):X});ra.displayName="Link";var nM=he.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:h,viewTransition:d,children:m,...p},g){let x=jo(h,{relative:p.relative}),v=da(),M=he.useContext(Wu),{navigator:E,basename:A}=he.useContext(Ni),y=M!=null&&cM(x)&&d===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,U=v.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(U=U.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&A&&(L=fa(L,A)||L);const C=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=U===_||!l&&U.startsWith(_)&&U.charAt(C)==="/",I=L!=null&&(L===_||!l&&L.startsWith(_)&&L.charAt(_.length)==="/"),z={isActive:F,isPending:I,isTransitioning:y},X=F?e:void 0,D;typeof r=="function"?D=r(z):D=[r,F?"active":null,I?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(z):u;return he.createElement(ra,{...p,"aria-current":X,className:D,ref:g,style:w,to:h,viewTransition:d},typeof m=="function"?m(z):m)});nM.displayName="NavLink";var iM=he.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:h=Nu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,...v},M)=>{let E=lM(),A=uM(d,{relative:p}),y=h.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&Z_.test(d),U=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let C=L.nativeEvent.submitter,F=(C==null?void 0:C.getAttribute("formmethod"))||h;E(C||L.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:x})};return he.createElement("form",{ref:M,method:y,action:A,onSubmit:r?m:U,...v,"data-discover":!_&&s==="render"?"true":void 0})});iM.displayName="Form";function aM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function K_(s){let e=he.useContext(Ls);return jt(e,aM(s)),e}function rM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:h}={}){let d=k_(),m=da(),p=jo(s,{relative:u});return he.useCallback(g=>{if(zS(g,e)){g.preventDefault();let x=i!==void 0?i:Go(m)===Go(p);d(s,{replace:x,state:r,preventScrollReset:l,relative:u,viewTransition:h})}},[m,d,p,i,r,e,s,l,u,h])}var sM=0,oM=()=>`__${String(++sM)}__`;function lM(){let{router:s}=K_("useSubmit"),{basename:e}=he.useContext(Ni),i=AS();return he.useCallback(async(r,l={})=>{let{action:u,method:h,encType:d,formData:m,body:p}=FS(r,e);if(l.navigate===!1){let g=l.fetcherKey||oM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function uM(s,{relative:e}={}){let{basename:i}=he.useContext(Ni),r=he.useContext(ha);jt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...jo(s||".",{relative:e})},h=da();if(s==null){u.search=h.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ua([i,u.pathname])),Go(u)}function cM(s,e={}){let i=he.useContext(H_);jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=K_("useViewTransitionState"),l=jo(s,{relative:e.relative});if(!i.isTransitioning)return!1;let u=fa(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=fa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Gu(l.pathname,h)!=null||Gu(l.pathname,u)!=null}[...YS];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="177",fM=0,z0=1,hM=2,Q_=1,dM=2,aa=3,Za=0,Fn=1,sa=2,Ya=0,Es=1,B0=2,I0=3,F0=4,pM=5,Tr=100,mM=101,gM=102,_M=103,vM=104,xM=200,yM=201,SM=202,MM=203,Vh=204,kh=205,EM=206,bM=207,TM=208,AM=209,RM=210,wM=211,CM=212,DM=213,UM=214,Xh=0,Wh=1,qh=2,As=3,Yh=4,jh=5,Zh=6,Kh=7,J_=0,LM=1,NM=2,ja=0,OM=1,PM=2,zM=3,BM=4,IM=5,FM=6,HM=7,$_=300,Rs=301,ws=302,Qh=303,Jh=304,Yu=306,$h=1e3,Rr=1001,ed=1002,_i=1003,GM=1004,fu=1005,Ai=1006,sh=1007,wr=1008,Ui=1009,ev=1010,tv=1011,Vo=1012,zd=1013,Cr=1014,oa=1015,Zo=1016,Bd=1017,Id=1018,ko=1020,nv=35902,iv=1021,av=1022,gi=1023,Xo=1026,Wo=1027,rv=1028,Fd=1029,sv=1030,Hd=1031,Gd=1033,Pu=33776,zu=33777,Bu=33778,Iu=33779,td=35840,nd=35841,id=35842,ad=35843,rd=36196,sd=37492,od=37496,ld=37808,ud=37809,cd=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,xd=37819,yd=37820,Sd=37821,Fu=36492,Md=36494,Ed=36495,ov=36283,bd=36284,Td=36285,Ad=36286,VM=3200,kM=3201,lv=0,XM=1,qa="",oi="srgb",Cs="srgb-linear",Vu="linear",It="srgb",ls=7680,H0=519,WM=512,qM=513,YM=514,uv=515,jM=516,ZM=517,KM=518,QM=519,G0=35044,V0="300 es",la=2e3,ku=2001;class Ns{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=Math.PI/180,Rd=180/Math.PI;function Ko(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function yt(s,e,i){return Math.max(e,Math.min(i,s))}function JM(s,e){return(s%e+e)%e}function lh(s,e,i){return(1-i)*s+i*e}function No(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,i=0){Dt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=u[h+0],M=u[h+1],E=u[h+2],A=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(d===1){e[i+0]=v,e[i+1]=M,e[i+2]=E,e[i+3]=A;return}if(x!==A||m!==v||p!==M||g!==E){let y=1-d;const _=m*v+p*M+g*E+x*A,U=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const F=Math.sqrt(L),I=Math.atan2(F,_*U);y=Math.sin(y*I)/F,d=Math.sin(d*I)/F}const C=d*U;if(m=m*y+v*C,p=p*y+M*C,g=g*y+E*C,x=x*y+A*C,y===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=F,p*=F,g*=F,x*=F}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[h],v=u[h+1],M=u[h+2],E=u[h+3];return e[i]=d*E+g*x+m*M-p*v,e[i+1]=m*E+g*v+p*x-d*M,e[i+2]=p*E+g*M+d*v-m*x,e[i+3]=g*E-d*x-m*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(u/2),v=m(r/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=v*g*x+p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x-v*M*E;break;case"YXZ":this._x=v*g*x+p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x+v*M*E;break;case"ZXY":this._x=v*g*x-p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x-v*M*E;break;case"ZYX":this._x=v*g*x-p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x+v*M*E;break;case"YZX":this._x=v*g*x+p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x-v*M*E;break;case"XZY":this._x=v*g*x-p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x+v*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,i=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(k0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(k0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uh=new ee,k0=new Qo;class ot{constructor(e,i,r,l,u,h,d,m,p){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],M=r[5],E=r[8],A=l[0],y=l[3],_=l[6],U=l[1],L=l[4],C=l[7],F=l[2],I=l[5],z=l[8];return u[0]=h*A+d*U+m*F,u[3]=h*y+d*L+m*I,u[6]=h*_+d*C+m*z,u[1]=p*A+g*U+x*F,u[4]=p*y+g*L+x*I,u[7]=p*_+g*C+x*z,u[2]=v*A+M*U+E*F,u[5]=v*y+M*L+E*I,u[8]=v*_+M*C+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=g*h-d*p,v=d*m-g*u,M=p*u-h*m,E=i*x+r*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(l*p-g*r)*A,e[2]=(d*r-l*h)*A,e[3]=v*A,e[4]=(g*i-l*m)*A,e[5]=(l*u-d*i)*A,e[6]=M*A,e[7]=(r*m-p*i)*A,e[8]=(h*i-r*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ch.makeScale(e,i)),this}rotate(e){return this.premultiply(ch.makeRotation(-e)),this}translate(e,i){return this.premultiply(ch.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new ot;function cv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $M(){const s=Xu("canvas");return s.style.display="block",s}const X0={};function bs(s){s in X0||(X0[s]=!0,console.warn(s))}function eE(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function tE(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nE(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const W0=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q0=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iE(){const s={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===It&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===It&&(l.r=Ts(l.r),l.g=Ts(l.g),l.b=Ts(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qa?Vu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Cs]:{primaries:e,whitePoint:r,transfer:Vu,toXYZ:W0,fromXYZ:q0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:W0,fromXYZ:q0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const At=iE();function ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let us;class aE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{us===void 0&&(us=Xu("canvas")),us.width=e.width,us.height=e.height;const l=us.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=us}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ca(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ca(i[r]/255)*255):i[r]=ca(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rE=0;class Vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(fh(l[h].image)):u.push(fh(l[h]))}else u=fh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function fh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?aE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sE=0;const hh=new ee;class Hn extends Ns{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=Rr,l=Rr,u=Ai,h=wr,d=gi,m=Ui,p=Hn.DEFAULT_ANISOTROPY,g=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Ko(),this.name="",this.source=new Vd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=$_;Hn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,i=0,r=0,l=1){Ft.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],v=m[1],M=m[5],E=m[9],A=m[2],y=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,C=(M+1)/2,F=(_+1)/2,I=(g+v)/4,z=(x+A)/4,X=(E+y)/4;return L>C&&L>F?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=I/r,u=z/r):C>F?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=I/l,u=X/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=z/u,l=X/u),this.set(r,l,u,i),this}let U=Math.sqrt((y-E)*(y-E)+(x-A)*(x-A)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(x-A)/U,this.z=(v-g)/U,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oE extends Ns{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Ft(0,0,e,i),this.scissorTest=!1,this.viewport=new Ft(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Hn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Vd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends oE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class fv extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lE extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,fi):fi.fromBufferAttribute(u,h),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hu.copy(r.boundingBox)),hu.applyMatrix4(e.matrixWorld),this.union(hu)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),du.subVectors(this.max,Oo),cs.subVectors(e.a,Oo),fs.subVectors(e.b,Oo),hs.subVectors(e.c,Oo),Ha.subVectors(fs,cs),Ga.subVectors(hs,fs),_r.subVectors(cs,hs);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-_r.z,_r.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,_r.z,0,-_r.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-_r.y,_r.x,0];return!dh(i,cs,fs,hs,du)||(i=[1,0,0,0,1,0,0,0,1],!dh(i,cs,fs,hs,du))?!1:(pu.crossVectors(Ha,Ga),i=[pu.x,pu.y,pu.z],dh(i,cs,fs,hs,du))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],fi=new ee,hu=new Jo,cs=new ee,fs=new ee,hs=new ee,Ha=new ee,Ga=new ee,_r=new ee,Oo=new ee,du=new ee,pu=new ee,vr=new ee;function dh(s,e,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){vr.fromArray(s,u);const d=l.x*Math.abs(vr.x)+l.y*Math.abs(vr.y)+l.z*Math.abs(vr.z),m=e.dot(vr),p=i.dot(vr),g=r.dot(vr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const uE=new Jo,Po=new ee,ph=new ee;class kd{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):uE.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Po,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(ph)),this.expandByPoint(Po.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ea=new ee,mh=new ee,mu=new ee,Va=new ee,gh=new ee,gu=new ee,_h=new ee;class cE{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){mh.copy(e).add(i).multiplyScalar(.5),mu.copy(i).sub(e).normalize(),Va.copy(this.origin).sub(mh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(mu),d=Va.dot(this.direction),m=-Va.dot(mu),p=Va.lengthSq(),g=Math.abs(1-h*h);let x,v,M,E;if(g>0)if(x=h*m-d,v=h*d-m,E=u*g,x>=0)if(v>=-E)if(v<=E){const A=1/g;x*=A,v*=A,M=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-h*u+d)),v=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-u,-m),u),M=v*(v+2*m)+p):(x=Math.max(0,-(h*u+d)),v=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p);else v=h>0?-u:u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(mh).addScaledVector(mu,v),M}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(u=(e.min.y-v.y)*g,h=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,h=(e.min.y-v.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-v.z)*x,m=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,m=(e.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,r,l,u){gh.subVectors(i,e),gu.subVectors(r,e),_h.crossVectors(gh,gu);let h=this.direction.dot(_h),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Va.subVectors(this.origin,e);const m=d*this.direction.dot(gu.crossVectors(Va,gu));if(m<0)return null;const p=d*this.direction.dot(gh.cross(Va));if(p<0||m+p>h)return null;const g=-d*Va.dot(_h);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,i,r,l,u,h,d,m,p,g,x,v,M,E,A,y){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,x,v,M,E,A,y)}set(e,i,r,l,u,h,d,m,p,g,x,v,M,E,A,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=M,_[7]=E,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ds.setFromMatrixColumn(e,0).length(),u=1/ds.setFromMatrixColumn(e,1).length(),h=1/ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=h*g,M=h*x,E=d*g,A=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+E*p,i[5]=v-A*p,i[9]=-d*m,i[2]=A-v*p,i[6]=E+M*p,i[10]=h*m}else if(e.order==="YXZ"){const v=m*g,M=m*x,E=p*g,A=p*x;i[0]=v+A*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=A+v*d,i[10]=h*m}else if(e.order==="ZXY"){const v=m*g,M=m*x,E=p*g,A=p*x;i[0]=v-A*d,i[4]=-h*x,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=A-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const v=h*g,M=h*x,E=d*g,A=d*x;i[0]=m*g,i[4]=E*p-M,i[8]=v*p+A,i[1]=m*x,i[5]=A*p+v,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const v=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-v*x,i[8]=E*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*x+E,i[10]=v-A*x}else if(e.order==="XZY"){const v=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+A,i[5]=h*g,i[9]=M*x-E,i[2]=E*x-M,i[6]=d*g,i[10]=A*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fE,e,hE)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),ka.crossVectors(r,Kn),ka.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),ka.crossVectors(r,Kn)),ka.normalize(),_u.crossVectors(Kn,ka),l[0]=ka.x,l[4]=_u.x,l[8]=Kn.x,l[1]=ka.y,l[5]=_u.y,l[9]=Kn.y,l[2]=ka.z,l[6]=_u.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],M=r[13],E=r[2],A=r[6],y=r[10],_=r[14],U=r[3],L=r[7],C=r[11],F=r[15],I=l[0],z=l[4],X=l[8],D=l[12],w=l[1],G=l[5],le=l[9],se=l[13],ge=l[2],pe=l[6],B=l[10],Z=l[14],Y=l[3],be=l[7],N=l[11],te=l[15];return u[0]=h*I+d*w+m*ge+p*Y,u[4]=h*z+d*G+m*pe+p*be,u[8]=h*X+d*le+m*B+p*N,u[12]=h*D+d*se+m*Z+p*te,u[1]=g*I+x*w+v*ge+M*Y,u[5]=g*z+x*G+v*pe+M*be,u[9]=g*X+x*le+v*B+M*N,u[13]=g*D+x*se+v*Z+M*te,u[2]=E*I+A*w+y*ge+_*Y,u[6]=E*z+A*G+y*pe+_*be,u[10]=E*X+A*le+y*B+_*N,u[14]=E*D+A*se+y*Z+_*te,u[3]=U*I+L*w+C*ge+F*Y,u[7]=U*z+L*G+C*pe+F*be,u[11]=U*X+L*le+C*B+F*N,u[15]=U*D+L*se+C*Z+F*te,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],x=e[6],v=e[10],M=e[14],E=e[3],A=e[7],y=e[11],_=e[15];return E*(+u*m*x-l*p*x-u*d*v+r*p*v+l*d*M-r*m*M)+A*(+i*m*M-i*p*v+u*h*v-l*h*M+l*p*g-u*m*g)+y*(+i*p*x-i*d*M-u*h*x+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*h*x-r*h*v+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=e[9],v=e[10],M=e[11],E=e[12],A=e[13],y=e[14],_=e[15],U=x*y*p-A*v*p+A*m*M-d*y*M-x*m*_+d*v*_,L=E*v*p-g*y*p-E*m*M+h*y*M+g*m*_-h*v*_,C=g*A*p-E*x*p+E*d*M-h*A*M-g*d*_+h*x*_,F=E*x*m-g*A*m-E*d*v+h*A*v+g*d*y-h*x*y,I=i*U+r*L+l*C+u*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=U*z,e[1]=(A*v*u-x*y*u-A*l*M+r*y*M+x*l*_-r*v*_)*z,e[2]=(d*y*u-A*m*u+A*l*p-r*y*p-d*l*_+r*m*_)*z,e[3]=(x*m*u-d*v*u-x*l*p+r*v*p+d*l*M-r*m*M)*z,e[4]=L*z,e[5]=(g*y*u-E*v*u+E*l*M-i*y*M-g*l*_+i*v*_)*z,e[6]=(E*m*u-h*y*u-E*l*p+i*y*p+h*l*_-i*m*_)*z,e[7]=(h*v*u-g*m*u+g*l*p-i*v*p-h*l*M+i*m*M)*z,e[8]=C*z,e[9]=(E*x*u-g*A*u-E*r*M+i*A*M+g*r*_-i*x*_)*z,e[10]=(h*A*u-E*d*u+E*r*p-i*A*p-h*r*_+i*d*_)*z,e[11]=(g*d*u-h*x*u-g*r*p+i*x*p+h*r*M-i*d*M)*z,e[12]=F*z,e[13]=(g*A*l-E*x*l+E*r*v-i*A*v-g*r*y+i*x*y)*z,e[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*y-i*d*y)*z,e[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*v+i*d*v)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,v=u*p,M=u*g,E=u*x,A=h*g,y=h*x,_=d*x,U=m*p,L=m*g,C=m*x,F=r.x,I=r.y,z=r.z;return l[0]=(1-(A+_))*F,l[1]=(M+C)*F,l[2]=(E-L)*F,l[3]=0,l[4]=(M-C)*I,l[5]=(1-(v+_))*I,l[6]=(y+U)*I,l[7]=0,l[8]=(E+L)*z,l[9]=(y-U)*z,l[10]=(1-(v+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ds.set(l[0],l[1],l[2]).length();const h=ds.set(l[4],l[5],l[6]).length(),d=ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],hi.copy(this);const p=1/u,g=1/h,x=1/d;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=x,hi.elements[9]*=x,hi.elements[10]*=x,i.setFromRotationMatrix(hi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=la){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),x=(i+e)/(i-e),v=(r+l)/(r-l);let M,E;if(d===la)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===ku)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=la){const m=this.elements,p=1/(i-e),g=1/(r-l),x=1/(h-u),v=(i+e)*p,M=(r+l)*g;let E,A;if(d===la)E=(h+u)*x,A=-2*x;else if(d===ku)E=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ds=new ee,hi=new Zt,fE=new ee(0,0,0),hE=new ee(1,1,1),ka=new ee,_u=new ee,Kn=new ee,Y0=new Zt,j0=new Qo;class Li{constructor(e=0,i=0,r=0,l=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Y0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Y0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return j0.setFromEuler(this),this.setFromQuaternion(j0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dE=0;const Z0=new ee,ps=new Qo,ta=new Zt,vu=new ee,zo=new ee,pE=new ee,mE=new Qo,K0=new ee(1,0,0),Q0=new ee(0,1,0),J0=new ee(0,0,1),$0={type:"added"},gE={type:"removed"},ms={type:"childadded",child:null},vh={type:"childremoved",child:null};class Gn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new ee,i=new Li,r=new Qo,l=new ee(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ot}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ps.setFromAxisAngle(e,i),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,i){return ps.setFromAxisAngle(e,i),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(K0,e)}rotateY(e){return this.rotateOnAxis(Q0,e)}rotateZ(e){return this.rotateOnAxis(J0,e)}translateOnAxis(e,i){return Z0.copy(e).applyQuaternion(this.quaternion),this.position.add(Z0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(K0,e)}translateY(e){return this.translateOnAxis(Q0,e)}translateZ(e){return this.translateOnAxis(J0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?vu.copy(e):vu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(zo,vu,this.up):ta.lookAt(vu,zo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),ps.setFromRotationMatrix(ta),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($0),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gE),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($0),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,pE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,mE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),x=h(e.shapes),v=h(e.skeletons),M=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new ee(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new ee,na=new ee,xh=new ee,ia=new ee,gs=new ee,_s=new ee,e_=new ee,yh=new ee,Sh=new ee,Mh=new ee,Eh=new Ft,bh=new Ft,Th=new Ft;class mi{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),di.subVectors(e,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){di.subVectors(l,i),na.subVectors(r,i),xh.subVectors(e,i);const h=di.dot(di),d=di.dot(na),m=di.dot(xh),p=na.dot(na),g=na.dot(xh),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,M=(p*m-d*g)*v,E=(h*g-d*m)*v;return u.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return Eh.setScalar(0),bh.setScalar(0),Th.setScalar(0),Eh.fromBufferAttribute(e,i),bh.fromBufferAttribute(e,r),Th.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Eh,u.x),h.addScaledVector(bh,u.y),h.addScaledVector(Th,u.z),h}static isFrontFacing(e,i,r,l){return di.subVectors(r,i),na.subVectors(e,i),di.cross(na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),na.subVectors(this.a,this.b),di.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;gs.subVectors(l,r),_s.subVectors(u,r),yh.subVectors(e,r);const m=gs.dot(yh),p=_s.dot(yh);if(m<=0&&p<=0)return i.copy(r);Sh.subVectors(e,l);const g=gs.dot(Sh),x=_s.dot(Sh);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(gs,h);Mh.subVectors(e,u);const M=gs.dot(Mh),E=_s.dot(Mh);if(E>=0&&M<=E)return i.copy(u);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(_s,d);const y=g*E-M*x;if(y<=0&&x-g>=0&&M-E>=0)return e_.subVectors(u,l),d=(x-g)/(x-g+(M-E)),i.copy(l).addScaledVector(e_,d);const _=1/(y+A+v);return h=A*_,d=v*_,i.copy(r).addScaledVector(gs,h).addScaledVector(_s,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},xu={h:0,s:0,l:0};function Ah(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ct{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=r,At.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=At.workingColorSpace){if(e=JM(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Ah(h,u,e+1/3),this.g=Ah(h,u,e),this.b=Ah(h,u,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=oi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=oi){const r=dv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return At.workingToColorSpace(Dn.copy(this),e),Math.round(yt(Dn.r*255,0,255))*65536+Math.round(yt(Dn.g*255,0,255))*256+Math.round(yt(Dn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=oi){At.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==oi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+e,Xa.s+i,Xa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Xa),e.getHSL(xu);const r=lh(Xa.h,xu.h,i),l=lh(Xa.s,xu.s,i),u=lh(Xa.l,xu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ct;Ct.NAMES=dv;let _E=0;class $o extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=Es,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==Za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vh&&(r.blendSrc=this.blendSrc),this.blendDst!==kh&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pv extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=J_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new ee,yu=new Dt;let vE=0;class wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=G0,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yu.fromBufferAttribute(this,i),yu.applyMatrix3(e),this.setXY(i,yu.x,yu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=No(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G0&&(e.usage=this.usage),e}}class mv extends wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class gv extends wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ci extends wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let xE=0;const si=new Zt,Rh=new Gn,vs=new ee,Qn=new Jo,Bo=new Jo,vn=new ee;class Qa extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cv(e)?gv:mv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,i,r){return si.makeTranslation(e,i,r),this.applyMatrix4(si),this}scale(e,i,r){return si.makeScale(e,i,r),this.applyMatrix4(si),this}lookAt(e){return Rh.lookAt(e),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ci(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Qn.min,Bo.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,Bo.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(Bo.min),Qn.expandByPoint(Bo.max))}Qn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(vs.fromBufferAttribute(e,p),vn.add(vs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new ee,m[X]=new ee;const p=new ee,g=new ee,x=new ee,v=new Dt,M=new Dt,E=new Dt,A=new ee,y=new ee;function _(X,D,w){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,w),v.fromBufferAttribute(u,X),M.fromBufferAttribute(u,D),E.fromBufferAttribute(u,w),g.sub(p),x.sub(p),M.sub(v),E.sub(v);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(G),y.copy(x).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(G),d[X].add(A),d[D].add(A),d[w].add(A),m[X].add(y),m[D].add(y),m[w].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let X=0,D=U.length;X<D;++X){const w=U[X],G=w.start,le=w.count;for(let se=G,ge=G+le;se<ge;se+=3)_(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const L=new ee,C=new ee,F=new ee,I=new ee;function z(X){F.fromBufferAttribute(l,X),I.copy(F);const D=d[X];L.copy(D),L.sub(F.multiplyScalar(F.dot(D))).normalize(),C.crossVectors(I,D);const G=C.dot(m[X])<0?-1:1;h.setXYZW(X,L.x,L.y,L.z,G)}for(let X=0,D=U.length;X<D;++X){const w=U[X],G=w.start,le=w.count;for(let se=G,ge=G+le;se<ge;se+=3)z(e.getX(se+0)),z(e.getX(se+1)),z(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new ee,u=new ee,h=new ee,d=new ee,m=new ee,p=new ee,g=new ee,x=new ee;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let M=0,E=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let _=0;_<g;_++)v[E++]=p[M++]}return new wi(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],M=e(v,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let v=0,M=x.length;v<M;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const t_=new Zt,xr=new cE,Su=new kd,n_=new ee,Mu=new ee,Eu=new ee,bu=new ee,wh=new ee,Tu=new ee,i_=new ee,Au=new ee;class Ri extends Gn{constructor(e=new Qa,i=new pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Tu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(wh.fromBufferAttribute(x,e),h?Tu.addScaledVector(wh,g):Tu.addScaledVector(wh.sub(i),g))}i.add(Tu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Su.copy(r.boundingSphere),Su.applyMatrix4(u),xr.copy(e.ray).recast(e.near),!(Su.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Su,n_)===null||xr.origin.distanceToSquared(n_)>(e.far-e.near)**2))&&(t_.copy(u).invert(),xr.copy(e.ray).applyMatrix4(t_),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=v.length;E<A;E++){const y=v[E],_=h[y.materialIndex],U=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=U,F=L;C<F;C+=3){const I=d.getX(C),z=d.getX(C+1),X=d.getX(C+2);l=Ru(this,_,e,r,p,g,x,I,z,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=E,_=A;y<_;y+=3){const U=d.getX(y),L=d.getX(y+1),C=d.getX(y+2);l=Ru(this,h,e,r,p,g,x,U,L,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=v.length;E<A;E++){const y=v[E],_=h[y.materialIndex],U=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=U,F=L;C<F;C+=3){const I=C,z=C+1,X=C+2;l=Ru(this,_,e,r,p,g,x,I,z,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=E,_=A;y<_;y+=3){const U=y,L=y+1,C=y+2;l=Ru(this,h,e,r,p,g,x,U,L,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function yE(s,e,i,r,l,u,h,d){let m;if(e.side===Fn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Za,d),m===null)return null;Au.copy(d),Au.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Au);return p<i.near||p>i.far?null:{distance:p,point:Au.clone(),object:s}}function Ru(s,e,i,r,l,u,h,d,m,p){s.getVertexPosition(d,Mu),s.getVertexPosition(m,Eu),s.getVertexPosition(p,bu);const g=yE(s,e,i,r,Mu,Eu,bu,i_);if(g){const x=new ee;mi.getBarycoord(i_,Mu,Eu,bu,x),l&&(g.uv=mi.getInterpolatedAttribute(l,d,m,p,x,new Dt)),u&&(g.uv1=mi.getInterpolatedAttribute(u,d,m,p,x,new Dt)),h&&(g.normal=mi.getInterpolatedAttribute(h,d,m,p,x,new ee),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new ee,materialIndex:0};mi.getNormal(Mu,Eu,bu,v.normal),g.face=v,g.barycoord=x}return g}class Os extends Qa{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let v=0,M=0;E("z","y","x",-1,-1,r,i,e,h,u,0),E("z","y","x",1,-1,r,i,-e,h,u,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(g,3)),this.setAttribute("uv",new Ci(x,2));function E(A,y,_,U,L,C,F,I,z,X,D){const w=C/z,G=F/X,le=C/2,se=F/2,ge=I/2,pe=z+1,B=X+1;let Z=0,Y=0;const be=new ee;for(let N=0;N<B;N++){const te=N*G-se;for(let ye=0;ye<pe;ye++){const Me=ye*w-le;be[A]=Me*U,be[y]=te*L,be[_]=ge,p.push(be.x,be.y,be.z),be[A]=0,be[y]=0,be[_]=I>0?1:-1,g.push(be.x,be.y,be.z),x.push(ye/z),x.push(1-N/X),Z+=1}}for(let N=0;N<X;N++)for(let te=0;te<z;te++){const ye=v+te+pe*N,Me=v+te+pe*(N+1),J=v+(te+1)+pe*(N+1),_e=v+(te+1)+pe*N;m.push(ye,Me,_e),m.push(Me,J,_e),Y+=6}d.addGroup(M,Y,D),M+=Y,v+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Ln(s){const e={};for(let i=0;i<s.length;i++){const r=Ds(s[i]);for(const l in r)e[l]=r[l]}return e}function SE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function _v(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const ME={clone:Ds,merge:Ln};var EE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ka extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=SE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class vv extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=la}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new ee,a_=new Dt,r_=new Dt;class Jn extends vv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-e/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wa.x,Wa.y).multiplyScalar(-e/Wa.z)}getViewSize(e,i){return this.getViewBounds(e,a_,r_),i.subVectors(r_,a_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(oh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,ys=1;class TE extends Gn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(xs,ys,e,i);l.layers=this.layers,this.add(l);const u=new Jn(xs,ys,e,i);u.layers=this.layers,this.add(u);const h=new Jn(xs,ys,e,i);h.layers=this.layers,this.add(h);const d=new Jn(xs,ys,e,i);d.layers=this.layers,this.add(d);const m=new Jn(xs,ys,e,i);m.layers=this.layers,this.add(m);const p=new Jn(xs,ys,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===la)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ku)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,v,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class xv extends Hn{constructor(e=[],i=Rs,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AE extends Dr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Os(5,5,5),u=new Ka({name:"CubemapFromEquirect",uniforms:Ds(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ya});u.uniforms.tEquirect.value=i;const h=new Ri(l,u),d=i.minFilter;return i.minFilter===wr&&(i.minFilter=Ai),new TE(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class wu extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RE={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),_=this._getHandJoint(p,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new wu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class wE extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Dh=new ee,CE=new ee,DE=new ot;class Er{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Dh.subVectors(r,i).cross(CE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Dh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DE.getNormalMatrix(e),l=this.coplanarPoint(Dh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new kd,Cu=new ee;class Xd{constructor(e=new Er,i=new Er,r=new Er,l=new Er,u=new Er,h=new Er){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=la){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],M=l[8],E=l[9],A=l[10],y=l[11],_=l[12],U=l[13],L=l[14],C=l[15];if(r[0].setComponents(m-u,v-p,y-M,C-_).normalize(),r[1].setComponents(m+u,v+p,y+M,C+_).normalize(),r[2].setComponents(m+h,v+g,y+E,C+U).normalize(),r[3].setComponents(m-h,v-g,y-E,C-U).normalize(),r[4].setComponents(m-d,v-x,y-A,C-L).normalize(),i===la)r[5].setComponents(m+d,v+x,y+A,C+L).normalize();else if(i===ku)r[5].setComponents(d,x,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cu.x=l.normal.x>0?e.max.x:e.min.x,Cu.y=l.normal.y>0?e.max.y:e.min.y,Cu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yv extends Hn{constructor(e,i,r=Cr,l,u,h,d=_i,m=_i,p,g=Xo,x=1){if(g!==Xo&&g!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:x};super(v,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ju extends Qa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=e/d,v=i/m,M=[],E=[],A=[],y=[];for(let _=0;_<g;_++){const U=_*v-h;for(let L=0;L<p;L++){const C=L*x-u;E.push(C,-U,0),A.push(0,0,1),y.push(L/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<d;U++){const L=U+p*_,C=U+p*(_+1),F=U+1+p*(_+1),I=U+1+p*_;M.push(L,C,I),M.push(C,F,I)}this.setIndex(M),this.setAttribute("position",new Ci(E,3)),this.setAttribute("normal",new Ci(A,3)),this.setAttribute("uv",new Ci(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wd extends Qa{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],x=new ee,v=new ee,M=[],E=[],A=[],y=[];for(let _=0;_<=r;_++){const U=[],L=_/r;let C=0;_===0&&h===0?C=.5/i:_===r&&m===Math.PI&&(C=-.5/i);for(let F=0;F<=i;F++){const I=F/i;x.x=-e*Math.cos(l+I*u)*Math.sin(h+L*d),x.y=e*Math.cos(h+L*d),x.z=e*Math.sin(l+I*u)*Math.sin(h+L*d),E.push(x.x,x.y,x.z),v.copy(x).normalize(),A.push(v.x,v.y,v.z),y.push(I+C,1-L),U.push(p++)}g.push(U)}for(let _=0;_<r;_++)for(let U=0;U<i;U++){const L=g[_][U+1],C=g[_][U],F=g[_+1][U],I=g[_+1][U+1];(_!==0||h>0)&&M.push(L,C,I),(_!==r-1||m<Math.PI)&&M.push(C,F,I)}this.setIndex(M),this.setAttribute("position",new Ci(E,3)),this.setAttribute("normal",new Ci(A,3)),this.setAttribute("uv",new Ci(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class UE extends $o{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lv,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LE extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NE extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sv extends Gn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Uh=new Zt,s_=new ee,o_=new ee;class OE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;s_.setFromMatrixPosition(e.matrixWorld),i.position.copy(s_),o_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(o_),i.updateMatrixWorld(),Uh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const l_=new Zt,Io=new ee,Lh=new ee;class PE extends OE{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new ee(1,0,0),new ee(-1,0,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,1,0),new ee(0,-1,0)],this._cubeUps=[new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,0,1),new ee(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),r.position.copy(Io),Lh.copy(r.position),Lh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Lh),r.updateMatrixWorld(),l.makeTranslation(-Io.x,-Io.y,-Io.z),l_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(l_)}}class zE extends Sv{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new PE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BE extends vv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class IE extends Sv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class FE extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function u_(s,e,i,r){const l=HE(r);switch(i){case iv:return s*e;case rv:return s*e/l.components*l.byteLength;case Fd:return s*e/l.components*l.byteLength;case sv:return s*e*2/l.components*l.byteLength;case Hd:return s*e*2/l.components*l.byteLength;case av:return s*e*3/l.components*l.byteLength;case gi:return s*e*4/l.components*l.byteLength;case Gd:return s*e*4/l.components*l.byteLength;case Pu:case zu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bu:case Iu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nd:case ad:return Math.max(s,16)*Math.max(e,8)/4;case td:case id:return Math.max(s,8)*Math.max(e,8)/2;case rd:case sd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fu:case Md:case Ed:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ov:case bd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Td:case Ad:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function HE(s){switch(s){case Ui:case ev:return{byteLength:1,components:1};case Vo:case tv:case Zo:return{byteLength:2,components:1};case Bd:case Id:return{byteLength:2,components:4};case Cr:case zd:case oa:return{byteLength:4,components:1};case nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mv(){let s=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function GE(s){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<x.length;M++){const E=x[v],A=x[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let M=0,E=x.length;M<E;M++){const A=x[M];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var VE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,db=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",xb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ob=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_T=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ST=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ET=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:VE,alphahash_pars_fragment:kE,alphamap_fragment:XE,alphamap_pars_fragment:WE,alphatest_fragment:qE,alphatest_pars_fragment:YE,aomap_fragment:jE,aomap_pars_fragment:ZE,batching_pars_vertex:KE,batching_vertex:QE,begin_vertex:JE,beginnormal_vertex:$E,bsdfs:eb,iridescence_fragment:tb,bumpmap_pars_fragment:nb,clipping_planes_fragment:ib,clipping_planes_pars_fragment:ab,clipping_planes_pars_vertex:rb,clipping_planes_vertex:sb,color_fragment:ob,color_pars_fragment:lb,color_pars_vertex:ub,color_vertex:cb,common:fb,cube_uv_reflection_fragment:hb,defaultnormal_vertex:db,displacementmap_pars_vertex:pb,displacementmap_vertex:mb,emissivemap_fragment:gb,emissivemap_pars_fragment:_b,colorspace_fragment:vb,colorspace_pars_fragment:xb,envmap_fragment:yb,envmap_common_pars_fragment:Sb,envmap_pars_fragment:Mb,envmap_pars_vertex:Eb,envmap_physical_pars_fragment:Ob,envmap_vertex:bb,fog_vertex:Tb,fog_pars_vertex:Ab,fog_fragment:Rb,fog_pars_fragment:wb,gradientmap_pars_fragment:Cb,lightmap_pars_fragment:Db,lights_lambert_fragment:Ub,lights_lambert_pars_fragment:Lb,lights_pars_begin:Nb,lights_toon_fragment:Pb,lights_toon_pars_fragment:zb,lights_phong_fragment:Bb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Fb,lights_physical_pars_fragment:Hb,lights_fragment_begin:Gb,lights_fragment_maps:Vb,lights_fragment_end:kb,logdepthbuf_fragment:Xb,logdepthbuf_pars_fragment:Wb,logdepthbuf_pars_vertex:qb,logdepthbuf_vertex:Yb,map_fragment:jb,map_pars_fragment:Zb,map_particle_fragment:Kb,map_particle_pars_fragment:Qb,metalnessmap_fragment:Jb,metalnessmap_pars_fragment:$b,morphinstance_vertex:eT,morphcolor_vertex:tT,morphnormal_vertex:nT,morphtarget_pars_vertex:iT,morphtarget_vertex:aT,normal_fragment_begin:rT,normal_fragment_maps:sT,normal_pars_fragment:oT,normal_pars_vertex:lT,normal_vertex:uT,normalmap_pars_fragment:cT,clearcoat_normal_fragment_begin:fT,clearcoat_normal_fragment_maps:hT,clearcoat_pars_fragment:dT,iridescence_pars_fragment:pT,opaque_fragment:mT,packing:gT,premultiplied_alpha_fragment:_T,project_vertex:vT,dithering_fragment:xT,dithering_pars_fragment:yT,roughnessmap_fragment:ST,roughnessmap_pars_fragment:MT,shadowmap_pars_fragment:ET,shadowmap_pars_vertex:bT,shadowmap_vertex:TT,shadowmask_pars_fragment:AT,skinbase_vertex:RT,skinning_pars_vertex:wT,skinning_vertex:CT,skinnormal_vertex:DT,specularmap_fragment:UT,specularmap_pars_fragment:LT,tonemapping_fragment:NT,tonemapping_pars_fragment:OT,transmission_fragment:PT,transmission_pars_fragment:zT,uv_pars_fragment:BT,uv_pars_vertex:IT,uv_vertex:FT,worldpos_vertex:HT,background_vert:GT,background_frag:VT,backgroundCube_vert:kT,backgroundCube_frag:XT,cube_vert:WT,cube_frag:qT,depth_vert:YT,depth_frag:jT,distanceRGBA_vert:ZT,distanceRGBA_frag:KT,equirect_vert:QT,equirect_frag:JT,linedashed_vert:$T,linedashed_frag:e1,meshbasic_vert:t1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:a1,meshmatcap_vert:r1,meshmatcap_frag:s1,meshnormal_vert:o1,meshnormal_frag:l1,meshphong_vert:u1,meshphong_frag:c1,meshphysical_vert:f1,meshphysical_frag:h1,meshtoon_vert:d1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:_1,shadow_frag:v1,sprite_vert:x1,sprite_frag:y1},Oe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ti={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ti.physical={uniforms:Ln([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Du={r:0,b:0,g:0},Sr=new Li,S1=new Zt;function M1(s,e,i,r,l,u,h){const d=new Ct(0);let m=u===!0?0:1,p,g,x=null,v=0,M=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?i:e).get(C)),C}function A(L){let C=!1;const F=E(L);F===null?_(d,m):F&&F.isColor&&(_(F,1),C=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,C){const F=E(C);F&&(F.isCubeTexture||F.mapping===Yu)?(g===void 0&&(g=new Ri(new Os(1,1,1),new Ka({name:"BackgroundCubeMaterial",uniforms:Ds(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Sr.copy(C.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(S1.makeRotationFromEuler(Sr)),g.material.toneMapped=At.getTransfer(F.colorSpace)!==It,(x!==F||v!==F.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,x=F,v=F.version,M=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Ri(new ju(2,2),new Ka({name:"BackgroundMaterial",uniforms:Ds(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=At.getTransfer(F.colorSpace)!==It,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||v!==F.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,x=F,v=F.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,C){L.getRGB(Du,_v(s)),r.buffers.color.setClear(Du.r,Du.g,Du.b,C,h)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),m=C,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:A,addToRenderList:y,dispose:U}}function E1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,h=!1;function d(w,G,le,se,ge){let pe=!1;const B=x(se,le,G);u!==B&&(u=B,p(u.object)),pe=M(w,se,le,ge),pe&&E(w,se,le,ge),ge!==null&&e.update(ge,s.ELEMENT_ARRAY_BUFFER),(pe||h)&&(h=!1,C(w,G,le,se),ge!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ge).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function x(w,G,le){const se=le.wireframe===!0;let ge=r[w.id];ge===void 0&&(ge={},r[w.id]=ge);let pe=ge[G.id];pe===void 0&&(pe={},ge[G.id]=pe);let B=pe[se];return B===void 0&&(B=v(m()),pe[se]=B),B}function v(w){const G=[],le=[],se=[];for(let ge=0;ge<i;ge++)G[ge]=0,le[ge]=0,se[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:se,object:w,attributes:{},index:null}}function M(w,G,le,se){const ge=u.attributes,pe=G.attributes;let B=0;const Z=le.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const N=ge[Y];let te=pe[Y];if(te===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(te=w.instanceColor)),N===void 0||N.attribute!==te||te&&N.data!==te.data)return!0;B++}return u.attributesNum!==B||u.index!==se}function E(w,G,le,se){const ge={},pe=G.attributes;let B=0;const Z=le.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let N=pe[Y];N===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));const te={};te.attribute=N,N&&N.data&&(te.data=N.data),ge[Y]=te,B++}u.attributes=ge,u.attributesNum=B,u.index=se}function A(){const w=u.newAttributes;for(let G=0,le=w.length;G<le;G++)w[G]=0}function y(w){_(w,0)}function _(w,G){const le=u.newAttributes,se=u.enabledAttributes,ge=u.attributeDivisors;le[w]=1,se[w]===0&&(s.enableVertexAttribArray(w),se[w]=1),ge[w]!==G&&(s.vertexAttribDivisor(w,G),ge[w]=G)}function U(){const w=u.newAttributes,G=u.enabledAttributes;for(let le=0,se=G.length;le<se;le++)G[le]!==w[le]&&(s.disableVertexAttribArray(le),G[le]=0)}function L(w,G,le,se,ge,pe,B){B===!0?s.vertexAttribIPointer(w,G,le,ge,pe):s.vertexAttribPointer(w,G,le,se,ge,pe)}function C(w,G,le,se){A();const ge=se.attributes,pe=le.getAttributes(),B=G.defaultAttributeValues;for(const Z in pe){const Y=pe[Z];if(Y.location>=0){let be=ge[Z];if(be===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(be=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(be=w.instanceColor)),be!==void 0){const N=be.normalized,te=be.itemSize,ye=e.get(be);if(ye===void 0)continue;const Me=ye.buffer,J=ye.type,_e=ye.bytesPerElement,Ee=J===s.INT||J===s.UNSIGNED_INT||be.gpuType===zd;if(be.isInterleavedBufferAttribute){const we=be.data,De=we.stride,lt=be.offset;if(we.isInstancedInterleavedBuffer){for(let Je=0;Je<Y.locationSize;Je++)_(Y.location+Je,we.meshPerAttribute);w.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Je=0;Je<Y.locationSize;Je++)y(Y.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Je=0;Je<Y.locationSize;Je++)L(Y.location+Je,te/Y.locationSize,J,N,De*_e,(lt+te/Y.locationSize*Je)*_e,Ee)}else{if(be.isInstancedBufferAttribute){for(let we=0;we<Y.locationSize;we++)_(Y.location+we,be.meshPerAttribute);w.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let we=0;we<Y.locationSize;we++)y(Y.location+we);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let we=0;we<Y.locationSize;we++)L(Y.location+we,te/Y.locationSize,J,N,te*_e,te/Y.locationSize*we*_e,Ee)}}else if(B!==void 0){const N=B[Z];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}U()}function F(){X();for(const w in r){const G=r[w];for(const le in G){const se=G[le];for(const ge in se)g(se[ge].object),delete se[ge];delete G[le]}delete r[w]}}function I(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const le in G){const se=G[le];for(const ge in se)g(se[ge].object),delete se[ge];delete G[le]}delete r[w.id]}function z(w){for(const G in r){const le=r[G];if(le[w.id]===void 0)continue;const se=le[w.id];for(const ge in se)g(se[ge].object),delete se[ge];delete le[w.id]}}function X(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:U}}function b1(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let M=0;for(let E=0;E<x;E++)M+=g[E];i.update(M,r,1)}function m(p,g,x,v){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*v[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function T1(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==gi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const X=z===Zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ui&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==oa&&!X)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:F,maxSamples:I}}function A1(s){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Er,d=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||r!==0||l;return l=v,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,M){const E=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||u&&!y)u?g(null):p();else{const U=u?0:r,L=U*4;let C=_.clippingState||null;m.value=C,C=g(E,v,L,M);for(let F=0;F!==L;++F)C[F]=i[F];_.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,v,M,E){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const _=M+A*4,U=v.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,C=M;L!==A;++L,C+=4)h.copy(x[L]).applyMatrix4(U,d),h.normal.toArray(y,C),y[C+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function R1(s){let e=new WeakMap;function i(h,d){return d===Qh?h.mapping=Rs:d===Jh&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Qh||d===Jh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new AE(m.height);return p.fromEquirectangularTexture(s,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ms=4,c_=[.125,.215,.35,.446,.526,.582],Ar=20,Nh=new BE,f_=new Ct;let Oh=null,Ph=0,zh=0,Bh=!1;const br=(1+Math.sqrt(5))/2,Ss=1/br,h_=[new ee(-br,Ss,0),new ee(br,Ss,0),new ee(-Ss,0,br),new ee(Ss,0,br),new ee(0,br,-Ss),new ee(0,br,Ss),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],w1=new ee;class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=w1}=u;Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Ph,zh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,Uu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Rs||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Zo,format:gi,colorSpace:Cs,depthBuffer:!1},l=p_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C1(u)),this._blurMaterial=D1(u,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,Nh)}_sceneToCubeUV(e,i,r,l,u){const m=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,M=x.toneMapping;x.getClearColor(f_),x.toneMapping=ja,x.autoClear=!1;const E=new pv({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),A=new Ri(new Os,E);let y=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,y=!0):(E.color.copy(f_),y=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[U],u.y,u.z)):L===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[U]));const C=this._cubeSize;Uu(l,L*C,U>2?C:0,C,C),x.setRenderTarget(l),y&&x.render(A,m),x.render(e,m)}A.geometry.dispose(),A.material.dispose(),x.toneMapping=M,x.autoClear=v,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Rs||e.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ri(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Uu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Nh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=h_[(l-u-1)%h_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Ri(this._lodPlanes[l],p),v=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ar-1),A=u/E,y=isFinite(u)?1+Math.floor(g*A):Ar;y>Ar&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const _=[];let U=0;for(let z=0;z<Ar;++z){const X=z/A,D=Math.exp(-X*X/2);_.push(D),z===0?U+=D:z<y&&(U+=2*D)}for(let z=0;z<_.length;z++)_[z]=_[z]/U;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-r;const C=this._sizeLods[l],F=3*C*(l>L-Ms?l-L+Ms:0),I=4*(this._cubeSize-C);Uu(i,F,I,3*C,2*C),m.setRenderTarget(i),m.render(x,Nh)}}function C1(s){const e=[],i=[],r=[];let l=s;const u=s-Ms+1+c_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-Ms?m=c_[h-s+Ms-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,E=6,A=3,y=2,_=1,U=new Float32Array(A*E*M),L=new Float32Array(y*E*M),C=new Float32Array(_*E*M);for(let I=0;I<M;I++){const z=I%3*2/3-1,X=I>2?0:-1,D=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];U.set(D,A*E*I),L.set(v,y*E*I);const w=[I,I,I,I,I,I];C.set(w,_*E*I)}const F=new Qa;F.setAttribute("position",new wi(U,A)),F.setAttribute("uv",new wi(L,y)),F.setAttribute("faceIndex",new wi(C,_)),e.push(F),l>Ms&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function p_(s,e,i){const r=new Dr(s,e,i);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Uu(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function D1(s,e,i){const r=new Float32Array(Ar),l=new ee(0,1,0);return new Ka({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function m_(){return new Ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function g_(){return new Ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U1(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Qh||m===Jh,g=m===Rs||m===ws;if(p||g){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new d_(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new d_(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function L1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&bs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function N1(s,e,i,r){const l={},u=new WeakMap;function h(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const M=u.get(v);M&&(e.remove(M),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const M in v)e.update(v[M],s.ARRAY_BUFFER)}function p(x){const v=[],M=x.index,E=x.attributes.position;let A=0;if(M!==null){const U=M.array;A=M.version;for(let L=0,C=U.length;L<C;L+=3){const F=U[L+0],I=U[L+1],z=U[L+2];v.push(F,I,I,z,z,F)}}else if(E!==void 0){const U=E.array;A=E.version;for(let L=0,C=U.length/3-1;L<C;L+=3){const F=L+0,I=L+1,z=L+2;v.push(F,I,I,z,z,F)}}else return;const y=new(cv(v)?gv:mv)(v,1);y.version=A;const _=u.get(x);_&&e.remove(_),u.set(x,y)}function g(x){const v=u.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function O1(s,e,i){let r;function l(v){r=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function m(v,M){s.drawElements(r,M,u,v*h),i.update(M,r,1)}function p(v,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,v*h,E),i.update(M,r,E))}function g(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,v,0,E);let y=0;for(let _=0;_<E;_++)y+=M[_];i.update(y,r,1)}function x(v,M,E,A){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)p(v[_]/h,M[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,v,0,A,0,E);let _=0;for(let U=0;U<E;U++)_+=M[U]*A[U];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function P1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function z1(s,e,i){const r=new WeakMap,l=new Ft;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let w=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),y===!0&&(C=3);let F=d.attributes.position.count*C,I=1;F>e.maxTextureSize&&(I=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*I*4*x),X=new fv(z,F,I,x);X.type=oa,X.needsUpdate=!0;const D=C*4;for(let G=0;G<x;G++){const le=_[G],se=U[G],ge=L[G],pe=F*I*4*G;for(let B=0;B<le.count;B++){const Z=B*D;E===!0&&(l.fromBufferAttribute(le,B),z[pe+Z+0]=l.x,z[pe+Z+1]=l.y,z[pe+Z+2]=l.z,z[pe+Z+3]=0),A===!0&&(l.fromBufferAttribute(se,B),z[pe+Z+4]=l.x,z[pe+Z+5]=l.y,z[pe+Z+6]=l.z,z[pe+Z+7]=0),y===!0&&(l.fromBufferAttribute(ge,B),z[pe+Z+8]=l.x,z[pe+Z+9]=l.y,z[pe+Z+10]=l.z,z[pe+Z+11]=ge.itemSize===4?l.w:1)}}v={count:x,texture:X,size:new Dt(F,I)},r.set(d,v),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function B1(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Ev=new Hn,__=new yv(1,1),bv=new fv,Tv=new lE,Av=new xv,v_=[],x_=[],y_=new Float32Array(16),S_=new Float32Array(9),M_=new Float32Array(4);function Ps(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=v_[l];if(u===void 0&&(u=new Float32Array(l),v_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(u,d)}return u}function fn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function hn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Zu(s,e){let i=x_[e];i===void 0&&(i=new Int32Array(e),x_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function I1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function F1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2fv(this.addr,e),hn(i,e)}}function H1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;s.uniform3fv(this.addr,e),hn(i,e)}}function G1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4fv(this.addr,e),hn(i,e)}}function V1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;M_.set(r),s.uniformMatrix2fv(this.addr,!1,M_),hn(i,r)}}function k1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;S_.set(r),s.uniformMatrix3fv(this.addr,!1,S_),hn(i,r)}}function X1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;y_.set(r),s.uniformMatrix4fv(this.addr,!1,y_),hn(i,r)}}function W1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function q1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2iv(this.addr,e),hn(i,e)}}function Y1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3iv(this.addr,e),hn(i,e)}}function j1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4iv(this.addr,e),hn(i,e)}}function Z1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function K1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2uiv(this.addr,e),hn(i,e)}}function Q1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3uiv(this.addr,e),hn(i,e)}}function J1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4uiv(this.addr,e),hn(i,e)}}function $1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(__.compareFunction=uv,u=__):u=Ev,i.setTexture2D(e||u,l)}function eA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Tv,l)}function tA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Av,l)}function nA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||bv,l)}function iA(s){switch(s){case 5126:return I1;case 35664:return F1;case 35665:return H1;case 35666:return G1;case 35674:return V1;case 35675:return k1;case 35676:return X1;case 5124:case 35670:return W1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return j1;case 5125:return Z1;case 36294:return K1;case 36295:return Q1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return nA}}function aA(s,e){s.uniform1fv(this.addr,e)}function rA(s,e){const i=Ps(e,this.size,2);s.uniform2fv(this.addr,i)}function sA(s,e){const i=Ps(e,this.size,3);s.uniform3fv(this.addr,i)}function oA(s,e){const i=Ps(e,this.size,4);s.uniform4fv(this.addr,i)}function lA(s,e){const i=Ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function uA(s,e){const i=Ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function cA(s,e){const i=Ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function fA(s,e){s.uniform1iv(this.addr,e)}function hA(s,e){s.uniform2iv(this.addr,e)}function dA(s,e){s.uniform3iv(this.addr,e)}function pA(s,e){s.uniform4iv(this.addr,e)}function mA(s,e){s.uniform1uiv(this.addr,e)}function gA(s,e){s.uniform2uiv(this.addr,e)}function _A(s,e){s.uniform3uiv(this.addr,e)}function vA(s,e){s.uniform4uiv(this.addr,e)}function xA(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Ev,u[h])}function yA(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Tv,u[h])}function SA(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Av,u[h])}function MA(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||bv,u[h])}function EA(s){switch(s){case 5126:return aA;case 35664:return rA;case 35665:return sA;case 35666:return oA;case 35674:return lA;case 35675:return uA;case 35676:return cA;case 5124:case 35670:return fA;case 35667:case 35671:return hA;case 35668:case 35672:return dA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return MA}}class bA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=iA(i.type)}}class TA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=EA(i.type)}}class AA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function E_(s,e){s.seq.push(e),s.map[e.id]=e}function RA(s,e,i){const r=s.name,l=r.length;for(Ih.lastIndex=0;;){const u=Ih.exec(r),h=Ih.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){E_(i,p===void 0?new bA(d,s,e):new TA(d,s,e));break}else{let x=i.map[d];x===void 0&&(x=new AA(d),E_(i,x)),i=x}}}class Hu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);RA(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function b_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const wA=37297;let CA=0;function DA(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const T_=new ot;function UA(s){At._getMatrix(T_,At.workingColorSpace,s);const e=`mat3( ${T_.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(s)){case Vu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function A_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+DA(s.getShaderSource(e),h)}else return l}function LA(s,e){const i=UA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function NA(s,e){let i;switch(e){case OM:i="Linear";break;case PM:i="Reinhard";break;case zM:i="Cineon";break;case BM:i="ACESFilmic";break;case FM:i="AgX";break;case HM:i="Neutral";break;case IM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lu=new ee;function OA(){At.getLuminanceCoefficients(Lu);const s=Lu.x.toFixed(4),e=Lu.y.toFixed(4),i=Lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function zA(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function BA(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function Ho(s){return s!==""}function R_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(IA,HA)}const FA=new Map;function HA(s,e){let i=ut[e];if(i===void 0){const r=FA.get(e);if(r!==void 0)i=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return wd(i)}const GA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(s){return s.replace(GA,VA)}function VA(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function D_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Q_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===dM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function XA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case ws:e="ENVMAP_TYPE_CUBE";break;case Yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function qA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case J_:e="ENVMAP_BLENDING_MULTIPLY";break;case LM:e="ENVMAP_BLENDING_MIX";break;case NM:e="ENVMAP_BLENDING_ADD";break}return e}function YA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function jA(s,e,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=kA(i),p=XA(i),g=WA(i),x=qA(i),v=YA(i),M=PA(i),E=zA(u),A=l.createProgram();let y,_,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),_.length>0&&(_+=`
`)):(y=[D_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),_=[D_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?ut.tonemapping_pars_fragment:"",i.toneMapping!==ja?NA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,LA("linearToOutputTexel",i.outputColorSpace),OA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=wd(h),h=R_(h,i),h=w_(h,i),d=wd(d),d=R_(d,i),d=w_(d,i),h=C_(h),d=C_(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===V0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===V0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=U+y+h,C=U+_+d,F=b_(l,l.VERTEX_SHADER,L),I=b_(l,l.FRAGMENT_SHADER,C);l.attachShader(A,F),l.attachShader(A,I),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(G){if(s.debug.checkShaderErrors){const le=l.getProgramInfoLog(A).trim(),se=l.getShaderInfoLog(F).trim(),ge=l.getShaderInfoLog(I).trim();let pe=!0,B=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,F,I);else{const Z=A_(l,F,"vertex"),Y=A_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+Z+`
`+Y)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(se===""||ge==="")&&(B=!1);B&&(G.diagnostics={runnable:pe,programLog:le,vertexShader:{log:se,prefix:y},fragmentShader:{log:ge,prefix:_}})}l.deleteShader(F),l.deleteShader(I),X=new Hu(l,A),D=BA(l,A)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,wA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=CA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=I,this}let ZA=0;class KA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new QA(e),i.set(e,r)),r}}class QA{constructor(e){this.id=ZA++,this.code=e,this.usedTimes=0}}function JA(s,e,i,r,l,u,h){const d=new hv,m=new KA,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,w,G,le,se){const ge=le.fog,pe=se.geometry,B=D.isMeshStandardMaterial?le.environment:null,Z=(D.isMeshStandardMaterial?i:e).get(D.envMap||B),Y=Z&&Z.mapping===Yu?Z.image.height:null,be=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const N=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,te=N!==void 0?N.length:0;let ye=0;pe.morphAttributes.position!==void 0&&(ye=1),pe.morphAttributes.normal!==void 0&&(ye=2),pe.morphAttributes.color!==void 0&&(ye=3);let Me,J,_e,Ee;if(be){const bt=Ti[be];Me=bt.vertexShader,J=bt.fragmentShader}else Me=D.vertexShader,J=D.fragmentShader,m.update(D),_e=m.getVertexShaderID(D),Ee=m.getFragmentShaderID(D);const we=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),lt=se.isInstancedMesh===!0,Je=se.isBatchedMesh===!0,Ot=!!D.map,Ht=!!D.matcap,gt=!!Z,H=!!D.aoMap,xn=!!D.lightMap,Mt=!!D.bumpMap,dt=!!D.normalMap,ke=!!D.displacementMap,_t=!!D.emissiveMap,Ze=!!D.metalnessMap,rt=!!D.roughnessMap,$t=D.anisotropy>0,O=D.clearcoat>0,b=D.dispersion>0,ne=D.iridescence>0,fe=D.sheen>0,me=D.transmission>0,ue=$t&&!!D.anisotropyMap,ze=O&&!!D.clearcoatMap,Le=O&&!!D.clearcoatNormalMap,Ve=O&&!!D.clearcoatRoughnessMap,Xe=ne&&!!D.iridescenceMap,Se=ne&&!!D.iridescenceThicknessMap,Be=fe&&!!D.sheenColorMap,Ye=fe&&!!D.sheenRoughnessMap,je=!!D.specularMap,Ce=!!D.specularColorMap,at=!!D.specularIntensityMap,k=me&&!!D.transmissionMap,Ne=me&&!!D.thicknessMap,Te=!!D.gradientMap,Ie=!!D.alphaMap,Re=D.alphaTest>0,xe=!!D.alphaHash,He=!!D.extensions;let it=ja;D.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(it=s.toneMapping);const Ut={shaderID:be,shaderType:D.type,shaderName:D.name,vertexShader:Me,fragmentShader:J,defines:D.defines,customVertexShaderID:_e,customFragmentShaderID:Ee,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Je,batchingColor:Je&&se._colorsTexture!==null,instancing:lt,instancingColor:lt&&se.instanceColor!==null,instancingMorph:lt&&se.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Cs,alphaToCoverage:!!D.alphaToCoverage,map:Ot,matcap:Ht,envMap:gt,envMapMode:gt&&Z.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:xn,bumpMap:Mt,normalMap:dt,displacementMap:v&&ke,emissiveMap:_t,normalMapObjectSpace:dt&&D.normalMapType===XM,normalMapTangentSpace:dt&&D.normalMapType===lv,metalnessMap:Ze,roughnessMap:rt,anisotropy:$t,anisotropyMap:ue,clearcoat:O,clearcoatMap:ze,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ve,dispersion:b,iridescence:ne,iridescenceMap:Xe,iridescenceThicknessMap:Se,sheen:fe,sheenColorMap:Be,sheenRoughnessMap:Ye,specularMap:je,specularColorMap:Ce,specularIntensityMap:at,transmission:me,transmissionMap:k,thicknessMap:Ne,gradientMap:Te,opaque:D.transparent===!1&&D.blending===Es&&D.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Re,alphaHash:xe,combine:D.combine,mapUv:Ot&&A(D.map.channel),aoMapUv:H&&A(D.aoMap.channel),lightMapUv:xn&&A(D.lightMap.channel),bumpMapUv:Mt&&A(D.bumpMap.channel),normalMapUv:dt&&A(D.normalMap.channel),displacementMapUv:ke&&A(D.displacementMap.channel),emissiveMapUv:_t&&A(D.emissiveMap.channel),metalnessMapUv:Ze&&A(D.metalnessMap.channel),roughnessMapUv:rt&&A(D.roughnessMap.channel),anisotropyMapUv:ue&&A(D.anisotropyMap.channel),clearcoatMapUv:ze&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Le&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&A(D.sheenRoughnessMap.channel),specularMapUv:je&&A(D.specularMap.channel),specularColorMapUv:Ce&&A(D.specularColorMap.channel),specularIntensityMapUv:at&&A(D.specularIntensityMap.channel),transmissionMapUv:k&&A(D.transmissionMap.channel),thicknessMapUv:Ne&&A(D.thicknessMap.channel),alphaMapUv:Ie&&A(D.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(dt||$t),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!pe.attributes.uv&&(Ot||Ie),fog:!!ge,useFog:D.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:De,skinning:se.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:Ot&&D.map.isVideoTexture===!0&&At.getTransfer(D.map.colorSpace)===It,decodeVideoTextureEmissive:_t&&D.emissiveMap.isVideoTexture===!0&&At.getTransfer(D.emissiveMap.colorSpace)===It,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===sa,flipSided:D.side===Fn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:He&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&D.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ut.vertexUv1s=p.has(1),Ut.vertexUv2s=p.has(2),Ut.vertexUv3s=p.has(3),p.clear(),Ut}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(U(w,D),L(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function U(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const w=E[D.type];let G;if(w){const le=Ti[w];G=ME.clone(le.uniforms)}else G=D.uniforms;return G}function F(D,w){let G;for(let le=0,se=g.length;le<se;le++){const ge=g[le];if(ge.cacheKey===w){G=ge,++G.usedTimes;break}}return G===void 0&&(G=new jA(s,w,D,u),g.push(G)),G}function I(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function z(D){m.remove(D)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:F,releaseProgram:I,releaseShaderCache:z,programs:g,dispose:X}}function $A(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function eR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function U_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function L_(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(x,v,M,E,A,y){let _=s[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:M,groupOrder:E,renderOrder:x.renderOrder,z:A,group:y},s[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=M,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=A,_.group=y),e++,_}function d(x,v,M,E,A,y){const _=h(x,v,M,E,A,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,v,M,E,A,y){const _=h(x,v,M,E,A,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||eR),r.length>1&&r.sort(v||U_),l.length>1&&l.sort(v||U_)}function g(){for(let x=e,v=s.length;x<v;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function tR(){let s=new WeakMap;function e(r,l){const u=s.get(r);let h;return u===void 0?(h=new L_,s.set(r,[h])):l>=u.length?(h=new L_,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function nR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new Ct};break;case"SpotLight":i={position:new ee,direction:new ee,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=i,i}}}function iR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let aR=0;function rR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sR(s){const e=new nR,i=iR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const l=new ee,u=new Zt,h=new Zt;function d(p){let g=0,x=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,A=0,y=0,_=0,U=0,L=0,C=0,F=0,I=0,z=0;p.sort(rR);for(let D=0,w=p.length;D<w;D++){const G=p[D],le=G.color,se=G.intensity,ge=G.distance,pe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=le.r*se,x+=le.g*se,v+=le.b*se;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],se);z++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=pe,r.directionalShadowMatrix[M]=G.shadow.matrix,U++}r.directional[M]=B,M++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(le).multiplyScalar(se),B.distance=ge,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[A]=B;const Z=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,Z.updateMatrices(G),G.castShadow&&I++),r.spotLightMatrix[A]=Z.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=pe,C++}A++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(le).multiplyScalar(se),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=B,y++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=G.shadow.matrix,L++}r.point[E]=B,E++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(se),B.groundColor.copy(G.groundColor).multiplyScalar(se),r.hemi[_]=B,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==M||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==y||X.hemiLength!==_||X.numDirectionalShadows!==U||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==F||X.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+F-I,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,X.directionalLength=M,X.pointLength=E,X.spotLength=A,X.rectAreaLength=y,X.hemiLength=_,X.numDirectionalShadows=U,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=F,X.numLightProbes=z,r.version=aR++)}function m(p,g){let x=0,v=0,M=0,E=0,A=0;const y=g.matrixWorldInverse;for(let _=0,U=p.length;_<U;_++){const L=p[_];if(L.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),x++}else if(L.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),h.identity(),u.copy(L.matrixWorld),u.premultiply(y),h.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function N_(s){const e=new sR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function oR(s){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new N_(s),e.set(l,[d])):u>=h.length?(d=new N_(s),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const lR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cR(s,e,i){let r=new Xd;const l=new Dt,u=new Dt,h=new Ft,d=new LE({depthPacking:kM}),m=new NE,p={},g=i.maxTextureSize,x={[Za]:Fn,[Fn]:Za,[sa]:sa},v=new Ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:lR,fragmentShader:uR}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Qa;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ri(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q_;let _=this.type;this.render=function(I,z,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Ya),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const se=_!==aa&&this.type===aa,ge=_===aa&&this.type!==aa;for(let pe=0,B=I.length;pe<B;pe++){const Z=I[pe],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const be=Y.getFrameExtents();if(l.multiply(be),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/be.x),l.x=u.x*be.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/be.y),l.y=u.y*be.y,Y.mapSize.y=u.y)),Y.map===null||se===!0||ge===!0){const te=this.type!==aa?{minFilter:_i,magFilter:_i}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Dr(l.x,l.y,te),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const N=Y.getViewportCount();for(let te=0;te<N;te++){const ye=Y.getViewport(te);h.set(u.x*ye.x,u.y*ye.y,u.x*ye.z,u.y*ye.w),le.viewport(h),Y.updateMatrices(Z,te),r=Y.getFrustum(),C(z,X,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&U(Y,X),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(D,w,G)};function U(I,z){const X=e.update(A);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Dr(l.x,l.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(z,null,X,v,A,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(z,null,X,M,A,null)}function L(I,z,X,D){let w=null;const G=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)w=G;else if(w=X.isPointLight===!0?m:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const le=w.uuid,se=z.uuid;let ge=p[le];ge===void 0&&(ge={},p[le]=ge);let pe=ge[se];pe===void 0&&(pe=w.clone(),ge[se]=pe,z.addEventListener("dispose",F)),w=pe}if(w.visible=z.visible,w.wireframe=z.wireframe,D===aa?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:x[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const le=s.properties.get(w);le.light=X}return w}function C(I,z,X,D,w){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===aa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);const se=e.update(I),ge=I.material;if(Array.isArray(ge)){const pe=se.groups;for(let B=0,Z=pe.length;B<Z;B++){const Y=pe[B],be=ge[Y.materialIndex];if(be&&be.visible){const N=L(I,be,D,w);I.onBeforeShadow(s,I,z,X,se,N,Y),s.renderBufferDirect(X,null,se,N,I,Y),I.onAfterShadow(s,I,z,X,se,N,Y)}}}else if(ge.visible){const pe=L(I,ge,D,w);I.onBeforeShadow(s,I,z,X,se,pe,null),s.renderBufferDirect(X,null,se,pe,I,null),I.onAfterShadow(s,I,z,X,se,pe,null)}}const le=I.children;for(let se=0,ge=le.length;se<ge;se++)C(le[se],z,X,D,w)}function F(I){I.target.removeEventListener("dispose",F);for(const X in p){const D=p[X],w=I.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const fR={[Xh]:Wh,[qh]:Zh,[Yh]:Kh,[As]:jh,[Wh]:Xh,[Zh]:qh,[Kh]:Yh,[jh]:As};function hR(s,e){function i(){let k=!1;const Ne=new Ft;let Te=null;const Ie=new Ft(0,0,0,0);return{setMask:function(Re){Te!==Re&&!k&&(s.colorMask(Re,Re,Re,Re),Te=Re)},setLocked:function(Re){k=Re},setClear:function(Re,xe,He,it,Ut){Ut===!0&&(Re*=it,xe*=it,He*=it),Ne.set(Re,xe,He,it),Ie.equals(Ne)===!1&&(s.clearColor(Re,xe,He,it),Ie.copy(Ne))},reset:function(){k=!1,Te=null,Ie.set(-1,0,0,0)}}}function r(){let k=!1,Ne=!1,Te=null,Ie=null,Re=null;return{setReversed:function(xe){if(Ne!==xe){const He=e.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ne=xe;const it=Re;Re=null,this.setClear(it)}},getReversed:function(){return Ne},setTest:function(xe){xe?we(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(xe){Te!==xe&&!k&&(s.depthMask(xe),Te=xe)},setFunc:function(xe){if(Ne&&(xe=fR[xe]),Ie!==xe){switch(xe){case Xh:s.depthFunc(s.NEVER);break;case Wh:s.depthFunc(s.ALWAYS);break;case qh:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case Yh:s.depthFunc(s.EQUAL);break;case jh:s.depthFunc(s.GEQUAL);break;case Zh:s.depthFunc(s.GREATER);break;case Kh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=xe}},setLocked:function(xe){k=xe},setClear:function(xe){Re!==xe&&(Ne&&(xe=1-xe),s.clearDepth(xe),Re=xe)},reset:function(){k=!1,Te=null,Ie=null,Re=null,Ne=!1}}}function l(){let k=!1,Ne=null,Te=null,Ie=null,Re=null,xe=null,He=null,it=null,Ut=null;return{setTest:function(bt){k||(bt?we(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(bt){Ne!==bt&&!k&&(s.stencilMask(bt),Ne=bt)},setFunc:function(bt,Vn,dn){(Te!==bt||Ie!==Vn||Re!==dn)&&(s.stencilFunc(bt,Vn,dn),Te=bt,Ie=Vn,Re=dn)},setOp:function(bt,Vn,dn){(xe!==bt||He!==Vn||it!==dn)&&(s.stencilOp(bt,Vn,dn),xe=bt,He=Vn,it=dn)},setLocked:function(bt){k=bt},setClear:function(bt){Ut!==bt&&(s.clearStencil(bt),Ut=bt)},reset:function(){k=!1,Ne=null,Te=null,Ie=null,Re=null,xe=null,He=null,it=null,Ut=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,M=[],E=null,A=!1,y=null,_=null,U=null,L=null,C=null,F=null,I=null,z=new Ct(0,0,0),X=0,D=!1,w=null,G=null,le=null,se=null,ge=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Z>=2);let be=null,N={};const te=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Me=new Ft().fromArray(te),J=new Ft().fromArray(ye);function _e(k,Ne,Te,Ie){const Re=new Uint8Array(4),xe=s.createTexture();s.bindTexture(k,xe),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Te;He++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(Ne+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return xe}const Ee={};Ee[s.TEXTURE_2D]=_e(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=_e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=_e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=_e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),we(s.DEPTH_TEST),h.setFunc(As),Mt(!1),dt(z0),we(s.CULL_FACE),H(Ya);function we(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function De(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function lt(k,Ne){return x[k]!==Ne?(s.bindFramebuffer(k,Ne),x[k]=Ne,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ne),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Je(k,Ne){let Te=M,Ie=!1;if(k){Te=v.get(Ne),Te===void 0&&(Te=[],v.set(Ne,Te));const Re=k.textures;if(Te.length!==Re.length||Te[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,He=Re.length;xe<He;xe++)Te[xe]=s.COLOR_ATTACHMENT0+xe;Te.length=Re.length,Ie=!0}}else Te[0]!==s.BACK&&(Te[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Te)}function Ot(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const Ht={[Tr]:s.FUNC_ADD,[mM]:s.FUNC_SUBTRACT,[gM]:s.FUNC_REVERSE_SUBTRACT};Ht[_M]=s.MIN,Ht[vM]=s.MAX;const gt={[xM]:s.ZERO,[yM]:s.ONE,[SM]:s.SRC_COLOR,[Vh]:s.SRC_ALPHA,[RM]:s.SRC_ALPHA_SATURATE,[TM]:s.DST_COLOR,[EM]:s.DST_ALPHA,[MM]:s.ONE_MINUS_SRC_COLOR,[kh]:s.ONE_MINUS_SRC_ALPHA,[AM]:s.ONE_MINUS_DST_COLOR,[bM]:s.ONE_MINUS_DST_ALPHA,[wM]:s.CONSTANT_COLOR,[CM]:s.ONE_MINUS_CONSTANT_COLOR,[DM]:s.CONSTANT_ALPHA,[UM]:s.ONE_MINUS_CONSTANT_ALPHA};function H(k,Ne,Te,Ie,Re,xe,He,it,Ut,bt){if(k===Ya){A===!0&&(De(s.BLEND),A=!1);return}if(A===!1&&(we(s.BLEND),A=!0),k!==pM){if(k!==y||bt!==D){if((_!==Tr||C!==Tr)&&(s.blendEquation(s.FUNC_ADD),_=Tr,C=Tr),bt)switch(k){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case B0:s.blendFunc(s.ONE,s.ONE);break;case I0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case F0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case B0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case I0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case F0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}U=null,L=null,F=null,I=null,z.set(0,0,0),X=0,y=k,D=bt}return}Re=Re||Ne,xe=xe||Te,He=He||Ie,(Ne!==_||Re!==C)&&(s.blendEquationSeparate(Ht[Ne],Ht[Re]),_=Ne,C=Re),(Te!==U||Ie!==L||xe!==F||He!==I)&&(s.blendFuncSeparate(gt[Te],gt[Ie],gt[xe],gt[He]),U=Te,L=Ie,F=xe,I=He),(it.equals(z)===!1||Ut!==X)&&(s.blendColor(it.r,it.g,it.b,Ut),z.copy(it),X=Ut),y=k,D=!1}function xn(k,Ne){k.side===sa?De(s.CULL_FACE):we(s.CULL_FACE);let Te=k.side===Fn;Ne&&(Te=!Te),Mt(Te),k.blending===Es&&k.transparent===!1?H(Ya):H(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Ie=k.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),_t(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function dt(k){k!==fM?(we(s.CULL_FACE),k!==G&&(k===z0?s.cullFace(s.BACK):k===hM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),G=k}function ke(k){k!==le&&(B&&s.lineWidth(k),le=k)}function _t(k,Ne,Te){k?(we(s.POLYGON_OFFSET_FILL),(se!==Ne||ge!==Te)&&(s.polygonOffset(Ne,Te),se=Ne,ge=Te)):De(s.POLYGON_OFFSET_FILL)}function Ze(k){k?we(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function rt(k){k===void 0&&(k=s.TEXTURE0+pe-1),be!==k&&(s.activeTexture(k),be=k)}function $t(k,Ne,Te){Te===void 0&&(be===null?Te=s.TEXTURE0+pe-1:Te=be);let Ie=N[Te];Ie===void 0&&(Ie={type:void 0,texture:void 0},N[Te]=Ie),(Ie.type!==k||Ie.texture!==Ne)&&(be!==Te&&(s.activeTexture(Te),be=Te),s.bindTexture(k,Ne||Ee[k]),Ie.type=k,Ie.texture=Ne)}function O(){const k=N[be];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(k){Me.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Me.copy(k))}function Ye(k){J.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function je(k,Ne){let Te=p.get(Ne);Te===void 0&&(Te=new WeakMap,p.set(Ne,Te));let Ie=Te.get(k);Ie===void 0&&(Ie=s.getUniformBlockIndex(Ne,k.name),Te.set(k,Ie))}function Ce(k,Ne){const Ie=p.get(Ne).get(k);m.get(Ne)!==Ie&&(s.uniformBlockBinding(Ne,Ie,k.__bindingPointIndex),m.set(Ne,Ie))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},be=null,N={},x={},v=new WeakMap,M=[],E=null,A=!1,y=null,_=null,U=null,L=null,C=null,F=null,I=null,z=new Ct(0,0,0),X=0,D=!1,w=null,G=null,le=null,se=null,ge=null,Me.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:we,disable:De,bindFramebuffer:lt,drawBuffers:Je,useProgram:Ot,setBlending:H,setMaterial:xn,setFlipSided:Mt,setCullFace:dt,setLineWidth:ke,setPolygonOffset:_t,setScissorTest:Ze,activeTexture:rt,bindTexture:$t,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:ne,texImage2D:Xe,texImage3D:Se,updateUBOMapping:je,uniformBlockBinding:Ce,texStorage2D:Le,texStorage3D:Ve,texSubImage2D:fe,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:ze,scissor:Be,viewport:Ye,reset:at}}function dR(s,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,g=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return M?new OffscreenCanvas(O,b):Xu("canvas")}function A(O,b,ne){let fe=1;const me=$t(O);if((me.width>ne||me.height>ne)&&(fe=ne/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ue=Math.floor(fe*me.width),ze=Math.floor(fe*me.height);x===void 0&&(x=E(ue,ze));const Le=b?E(ue,ze):x;return Le.width=ue,Le.height=ze,Le.getContext("2d").drawImage(O,0,0,ue,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ue+"x"+ze+")."),Le}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),O;return O}function y(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(O,b,ne,fe,me=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ue=b;if(b===s.RED&&(ne===s.FLOAT&&(ue=s.R32F),ne===s.HALF_FLOAT&&(ue=s.R16F),ne===s.UNSIGNED_BYTE&&(ue=s.R8)),b===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ue=s.R8UI),ne===s.UNSIGNED_SHORT&&(ue=s.R16UI),ne===s.UNSIGNED_INT&&(ue=s.R32UI),ne===s.BYTE&&(ue=s.R8I),ne===s.SHORT&&(ue=s.R16I),ne===s.INT&&(ue=s.R32I)),b===s.RG&&(ne===s.FLOAT&&(ue=s.RG32F),ne===s.HALF_FLOAT&&(ue=s.RG16F),ne===s.UNSIGNED_BYTE&&(ue=s.RG8)),b===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ue=s.RG8UI),ne===s.UNSIGNED_SHORT&&(ue=s.RG16UI),ne===s.UNSIGNED_INT&&(ue=s.RG32UI),ne===s.BYTE&&(ue=s.RG8I),ne===s.SHORT&&(ue=s.RG16I),ne===s.INT&&(ue=s.RG32I)),b===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),ne===s.UNSIGNED_INT&&(ue=s.RGB32UI),ne===s.BYTE&&(ue=s.RGB8I),ne===s.SHORT&&(ue=s.RGB16I),ne===s.INT&&(ue=s.RGB32I)),b===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),ne===s.UNSIGNED_INT&&(ue=s.RGBA32UI),ne===s.BYTE&&(ue=s.RGBA8I),ne===s.SHORT&&(ue=s.RGBA16I),ne===s.INT&&(ue=s.RGBA32I)),b===s.RGB&&ne===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),b===s.RGBA){const ze=me?Vu:At.getTransfer(fe);ne===s.FLOAT&&(ue=s.RGBA32F),ne===s.HALF_FLOAT&&(ue=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(ue=ze===It?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(O,b){let ne;return O?b===null||b===Cr||b===ko?ne=s.DEPTH24_STENCIL8:b===oa?ne=s.DEPTH32F_STENCIL8:b===Vo&&(ne=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Cr||b===ko?ne=s.DEPTH_COMPONENT24:b===oa?ne=s.DEPTH_COMPONENT32F:b===Vo&&(ne=s.DEPTH_COMPONENT16),ne}function F(O,b){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==_i&&O.minFilter!==Ai?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function I(O){const b=O.target;b.removeEventListener("dispose",I),X(b),b.isVideoTexture&&g.delete(b)}function z(O){const b=O.target;b.removeEventListener("dispose",z),w(b)}function X(O){const b=r.get(O);if(b.__webglInit===void 0)return;const ne=O.source,fe=v.get(ne);if(fe){const me=fe[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&D(O),Object.keys(fe).length===0&&v.delete(ne)}r.remove(O)}function D(O){const b=r.get(O);s.deleteTexture(b.__webglTexture);const ne=O.source,fe=v.get(ne);delete fe[b.__cacheKey],h.memory.textures--}function w(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let me=0;me<b.__webglFramebuffer[fe].length;me++)s.deleteFramebuffer(b.__webglFramebuffer[fe][me]);else s.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)s.deleteFramebuffer(b.__webglFramebuffer[fe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ne=O.textures;for(let fe=0,me=ne.length;fe<me;fe++){const ue=r.get(ne[fe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),h.memory.textures--),r.remove(ne[fe])}r.remove(O)}let G=0;function le(){G=0}function se(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function ge(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function pe(O,b){const ne=r.get(O);if(O.isVideoTexture&&Ze(O),O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){const fe=O.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(ne,O,b);return}}i.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+b)}function B(O,b){const ne=r.get(O);if(O.version>0&&ne.__version!==O.version){Ee(ne,O,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+b)}function Z(O,b){const ne=r.get(O);if(O.version>0&&ne.__version!==O.version){Ee(ne,O,b);return}i.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+b)}function Y(O,b){const ne=r.get(O);if(O.version>0&&ne.__version!==O.version){we(ne,O,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+b)}const be={[$h]:s.REPEAT,[Rr]:s.CLAMP_TO_EDGE,[ed]:s.MIRRORED_REPEAT},N={[_i]:s.NEAREST,[GM]:s.NEAREST_MIPMAP_NEAREST,[fu]:s.NEAREST_MIPMAP_LINEAR,[Ai]:s.LINEAR,[sh]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR},te={[WM]:s.NEVER,[QM]:s.ALWAYS,[qM]:s.LESS,[uv]:s.LEQUAL,[YM]:s.EQUAL,[KM]:s.GEQUAL,[jM]:s.GREATER,[ZM]:s.NOTEQUAL};function ye(O,b){if(b.type===oa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ai||b.magFilter===sh||b.magFilter===fu||b.magFilter===wr||b.minFilter===Ai||b.minFilter===sh||b.minFilter===fu||b.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,be[b.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,be[b.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,be[b.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,N[b.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_i||b.minFilter!==fu&&b.minFilter!==wr||b.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Me(O,b){let ne=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",I));const fe=b.source;let me=v.get(fe);me===void 0&&(me={},v.set(fe,me));const ue=ge(b);if(ue!==O.__cacheKey){me[ue]===void 0&&(me[ue]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,ne=!0),me[ue].usedTimes++;const ze=me[O.__cacheKey];ze!==void 0&&(me[O.__cacheKey].usedTimes--,ze.usedTimes===0&&D(b)),O.__cacheKey=ue,O.__webglTexture=me[ue].texture}return ne}function J(O,b,ne){return Math.floor(Math.floor(O/ne)/b)}function _e(O,b,ne,fe){const ue=O.updateRanges;if(ue.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,ne,fe,b.data);else{ue.sort((Se,Be)=>Se.start-Be.start);let ze=0;for(let Se=1;Se<ue.length;Se++){const Be=ue[ze],Ye=ue[Se],je=Be.start+Be.count,Ce=J(Ye.start,b.width,4),at=J(Be.start,b.width,4);Ye.start<=je+1&&Ce===at&&J(Ye.start+Ye.count-1,b.width,4)===Ce?Be.count=Math.max(Be.count,Ye.start+Ye.count-Be.start):(++ze,ue[ze]=Ye)}ue.length=ze+1;const Le=s.getParameter(s.UNPACK_ROW_LENGTH),Ve=s.getParameter(s.UNPACK_SKIP_PIXELS),Xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Se=0,Be=ue.length;Se<Be;Se++){const Ye=ue[Se],je=Math.floor(Ye.start/4),Ce=Math.ceil(Ye.count/4),at=je%b.width,k=Math.floor(je/b.width),Ne=Ce,Te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,at),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,at,k,Ne,Te,ne,fe,b.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xe)}}function Ee(O,b,ne){let fe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=s.TEXTURE_3D);const me=Me(O,b),ue=b.source;i.bindTexture(fe,O.__webglTexture,s.TEXTURE0+ne);const ze=r.get(ue);if(ue.version!==ze.__version||me===!0){i.activeTexture(s.TEXTURE0+ne);const Le=At.getPrimaries(At.workingColorSpace),Ve=b.colorSpace===qa?null:At.getPrimaries(b.colorSpace),Xe=b.colorSpace===qa||Le===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Se=A(b.image,!1,l.maxTextureSize);Se=rt(b,Se);const Be=u.convert(b.format,b.colorSpace),Ye=u.convert(b.type);let je=L(b.internalFormat,Be,Ye,b.colorSpace,b.isVideoTexture);ye(fe,b);let Ce;const at=b.mipmaps,k=b.isVideoTexture!==!0,Ne=ze.__version===void 0||me===!0,Te=ue.dataReady,Ie=F(b,Se);if(b.isDepthTexture)je=C(b.format===Wo,b.type),Ne&&(k?i.texStorage2D(s.TEXTURE_2D,1,je,Se.width,Se.height):i.texImage2D(s.TEXTURE_2D,0,je,Se.width,Se.height,0,Be,Ye,null));else if(b.isDataTexture)if(at.length>0){k&&Ne&&i.texStorage2D(s.TEXTURE_2D,Ie,je,at[0].width,at[0].height);for(let Re=0,xe=at.length;Re<xe;Re++)Ce=at[Re],k?Te&&i.texSubImage2D(s.TEXTURE_2D,Re,0,0,Ce.width,Ce.height,Be,Ye,Ce.data):i.texImage2D(s.TEXTURE_2D,Re,je,Ce.width,Ce.height,0,Be,Ye,Ce.data);b.generateMipmaps=!1}else k?(Ne&&i.texStorage2D(s.TEXTURE_2D,Ie,je,Se.width,Se.height),Te&&_e(b,Se,Be,Ye)):i.texImage2D(s.TEXTURE_2D,0,je,Se.width,Se.height,0,Be,Ye,Se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,je,at[0].width,at[0].height,Se.depth);for(let Re=0,xe=at.length;Re<xe;Re++)if(Ce=at[Re],b.format!==gi)if(Be!==null)if(k){if(Te)if(b.layerUpdates.size>0){const He=u_(Ce.width,Ce.height,b.format,b.type);for(const it of b.layerUpdates){const Ut=Ce.data.subarray(it*He/Ce.data.BYTES_PER_ELEMENT,(it+1)*He/Ce.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,it,Ce.width,Ce.height,1,Be,Ut)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,Ce.width,Ce.height,Se.depth,Be,Ce.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Re,je,Ce.width,Ce.height,Se.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Te&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,Ce.width,Ce.height,Se.depth,Be,Ye,Ce.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Re,je,Ce.width,Ce.height,Se.depth,0,Be,Ye,Ce.data)}else{k&&Ne&&i.texStorage2D(s.TEXTURE_2D,Ie,je,at[0].width,at[0].height);for(let Re=0,xe=at.length;Re<xe;Re++)Ce=at[Re],b.format!==gi?Be!==null?k?Te&&i.compressedTexSubImage2D(s.TEXTURE_2D,Re,0,0,Ce.width,Ce.height,Be,Ce.data):i.compressedTexImage2D(s.TEXTURE_2D,Re,je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Te&&i.texSubImage2D(s.TEXTURE_2D,Re,0,0,Ce.width,Ce.height,Be,Ye,Ce.data):i.texImage2D(s.TEXTURE_2D,Re,je,Ce.width,Ce.height,0,Be,Ye,Ce.data)}else if(b.isDataArrayTexture)if(k){if(Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,je,Se.width,Se.height,Se.depth),Te)if(b.layerUpdates.size>0){const Re=u_(Se.width,Se.height,b.format,b.type);for(const xe of b.layerUpdates){const He=Se.data.subarray(xe*Re/Se.data.BYTES_PER_ELEMENT,(xe+1)*Re/Se.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Se.width,Se.height,1,Be,Ye,He)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Be,Ye,Se.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,je,Se.width,Se.height,Se.depth,0,Be,Ye,Se.data);else if(b.isData3DTexture)k?(Ne&&i.texStorage3D(s.TEXTURE_3D,Ie,je,Se.width,Se.height,Se.depth),Te&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Be,Ye,Se.data)):i.texImage3D(s.TEXTURE_3D,0,je,Se.width,Se.height,Se.depth,0,Be,Ye,Se.data);else if(b.isFramebufferTexture){if(Ne)if(k)i.texStorage2D(s.TEXTURE_2D,Ie,je,Se.width,Se.height);else{let Re=Se.width,xe=Se.height;for(let He=0;He<Ie;He++)i.texImage2D(s.TEXTURE_2D,He,je,Re,xe,0,Be,Ye,null),Re>>=1,xe>>=1}}else if(at.length>0){if(k&&Ne){const Re=$t(at[0]);i.texStorage2D(s.TEXTURE_2D,Ie,je,Re.width,Re.height)}for(let Re=0,xe=at.length;Re<xe;Re++)Ce=at[Re],k?Te&&i.texSubImage2D(s.TEXTURE_2D,Re,0,0,Be,Ye,Ce):i.texImage2D(s.TEXTURE_2D,Re,je,Be,Ye,Ce);b.generateMipmaps=!1}else if(k){if(Ne){const Re=$t(Se);i.texStorage2D(s.TEXTURE_2D,Ie,je,Re.width,Re.height)}Te&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Ye,Se)}else i.texImage2D(s.TEXTURE_2D,0,je,Be,Ye,Se);y(b)&&_(fe),ze.__version=ue.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function we(O,b,ne){if(b.image.length!==6)return;const fe=Me(O,b),me=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+ne);const ue=r.get(me);if(me.version!==ue.__version||fe===!0){i.activeTexture(s.TEXTURE0+ne);const ze=At.getPrimaries(At.workingColorSpace),Le=b.colorSpace===qa?null:At.getPrimaries(b.colorSpace),Ve=b.colorSpace===qa||ze===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Xe=b.isCompressedTexture||b.image[0].isCompressedTexture,Se=b.image[0]&&b.image[0].isDataTexture,Be=[];for(let xe=0;xe<6;xe++)!Xe&&!Se?Be[xe]=A(b.image[xe],!0,l.maxCubemapSize):Be[xe]=Se?b.image[xe].image:b.image[xe],Be[xe]=rt(b,Be[xe]);const Ye=Be[0],je=u.convert(b.format,b.colorSpace),Ce=u.convert(b.type),at=L(b.internalFormat,je,Ce,b.colorSpace),k=b.isVideoTexture!==!0,Ne=ue.__version===void 0||fe===!0,Te=me.dataReady;let Ie=F(b,Ye);ye(s.TEXTURE_CUBE_MAP,b);let Re;if(Xe){k&&Ne&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,at,Ye.width,Ye.height);for(let xe=0;xe<6;xe++){Re=Be[xe].mipmaps;for(let He=0;He<Re.length;He++){const it=Re[He];b.format!==gi?je!==null?k?Te&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,it.width,it.height,je,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,at,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,it.width,it.height,je,Ce,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,at,it.width,it.height,0,je,Ce,it.data)}}}else{if(Re=b.mipmaps,k&&Ne){Re.length>0&&Ie++;const xe=$t(Be[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,at,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Se){k?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Be[xe].width,Be[xe].height,je,Ce,Be[xe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Be[xe].width,Be[xe].height,0,je,Ce,Be[xe].data);for(let He=0;He<Re.length;He++){const Ut=Re[He].image[xe].image;k?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,Ut.width,Ut.height,je,Ce,Ut.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,at,Ut.width,Ut.height,0,je,Ce,Ut.data)}}else{k?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,je,Ce,Be[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,je,Ce,Be[xe]);for(let He=0;He<Re.length;He++){const it=Re[He];k?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,je,Ce,it.image[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,at,je,Ce,it.image[xe])}}}y(b)&&_(s.TEXTURE_CUBE_MAP),ue.__version=me.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function De(O,b,ne,fe,me,ue){const ze=u.convert(ne.format,ne.colorSpace),Le=u.convert(ne.type),Ve=L(ne.internalFormat,ze,Le,ne.colorSpace),Xe=r.get(b),Se=r.get(ne);if(Se.__renderTarget=b,!Xe.__hasExternalTextures){const Be=Math.max(1,b.width>>ue),Ye=Math.max(1,b.height>>ue);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?i.texImage3D(me,ue,Ve,Be,Ye,b.depth,0,ze,Le,null):i.texImage2D(me,ue,Ve,Be,Ye,0,ze,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),_t(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,me,Se.__webglTexture,0,ke(b)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,me,Se.__webglTexture,ue),i.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(O,b,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,O),b.depthBuffer){const fe=b.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,ue=C(b.stencilBuffer,me),ze=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=ke(b);_t(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,ue,b.width,b.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,ue,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ue,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,O)}else{const fe=b.textures;for(let me=0;me<fe.length;me++){const ue=fe[me],ze=u.convert(ue.format,ue.colorSpace),Le=u.convert(ue.type),Ve=L(ue.internalFormat,ze,Le,ue.colorSpace),Xe=ke(b);ne&&_t(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ve,b.width,b.height):_t(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,Ve,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Je(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(b.depthTexture);fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe(b.depthTexture,0);const me=fe.__webglTexture,ue=ke(b);if(b.depthTexture.format===Xo)_t(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(b.depthTexture.format===Wo)_t(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Ot(O){const b=r.get(O),ne=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const fe=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=fe}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const fe=O.texture.mipmaps;fe&&fe.length>0?Je(b.__webglFramebuffer[0],O):Je(b.__webglFramebuffer,O)}else if(ne){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=s.createRenderbuffer(),lt(b.__webglDepthbuffer[fe],O,!1);else{const me=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ue)}}else{const fe=O.texture.mipmaps;if(fe&&fe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),lt(b.__webglDepthbuffer,O,!1);else{const me=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ue)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(O,b,ne){const fe=r.get(O);b!==void 0&&De(fe.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Ot(O)}function gt(O){const b=O.texture,ne=r.get(O),fe=r.get(b);O.addEventListener("dispose",z);const me=O.textures,ue=O.isWebGLCubeRenderTarget===!0,ze=me.length>1;if(ze||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=b.version,h.memory.textures++),ue){ne.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer[Le]=[];for(let Ve=0;Ve<b.mipmaps.length;Ve++)ne.__webglFramebuffer[Le][Ve]=s.createFramebuffer()}else ne.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Le=0;Le<b.mipmaps.length;Le++)ne.__webglFramebuffer[Le]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Le=0,Ve=me.length;Le<Ve;Le++){const Xe=r.get(me[Le]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),h.memory.textures++)}if(O.samples>0&&_t(O)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Le=0;Le<me.length;Le++){const Ve=me[Le];ne.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[Le]);const Xe=u.convert(Ve.format,Ve.colorSpace),Se=u.convert(Ve.type),Be=L(Ve.internalFormat,Xe,Se,Ve.colorSpace,O.isXRRenderTarget===!0),Ye=ke(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Be,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,ne.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(ne.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),ye(s.TEXTURE_CUBE_MAP,b);for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)De(ne.__webglFramebuffer[Le][Ve],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ve);else De(ne.__webglFramebuffer[Le],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ze){for(let Le=0,Ve=me.length;Le<Ve;Le++){const Xe=me[Le],Se=r.get(Xe);i.bindTexture(s.TEXTURE_2D,Se.__webglTexture),ye(s.TEXTURE_2D,Xe),De(ne.__webglFramebuffer,O,Xe,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,0),y(Xe)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Le=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,fe.__webglTexture),ye(Le,b),b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)De(ne.__webglFramebuffer[Ve],O,b,s.COLOR_ATTACHMENT0,Le,Ve);else De(ne.__webglFramebuffer,O,b,s.COLOR_ATTACHMENT0,Le,0);y(b)&&_(Le),i.unbindTexture()}O.depthBuffer&&Ot(O)}function H(O){const b=O.textures;for(let ne=0,fe=b.length;ne<fe;ne++){const me=b[ne];if(y(me)){const ue=U(O),ze=r.get(me).__webglTexture;i.bindTexture(ue,ze),_(ue),i.unbindTexture()}}}const xn=[],Mt=[];function dt(O){if(O.samples>0){if(_t(O)===!1){const b=O.textures,ne=O.width,fe=O.height;let me=s.COLOR_BUFFER_BIT;const ue=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=r.get(O),Le=b.length>1;if(Le)for(let Xe=0;Xe<b.length;Xe++)i.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Ve=O.texture.mipmaps;Ve&&Ve.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Xe=0;Xe<b.length;Xe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Xe]);const Se=r.get(b[Xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,ne,fe,0,0,ne,fe,me,s.NEAREST),m===!0&&(xn.length=0,Mt.length=0,xn.push(s.COLOR_ATTACHMENT0+Xe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(xn.push(ue),Mt.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let Xe=0;Xe<b.length;Xe++){i.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Xe]);const Se=r.get(b[Xe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,Se,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ke(O){return Math.min(l.maxSamples,O.samples)}function _t(O){const b=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ze(O){const b=h.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function rt(O,b){const ne=O.colorSpace,fe=O.format,me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ne!==Cs&&ne!==qa&&(At.getTransfer(ne)===It?(fe!==gi||me!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),b}function $t(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=le,this.setTexture2D=pe,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Ht,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=De,this.useMultisampledRTT=_t}function pR(s,e){function i(r,l=qa){let u;const h=At.getTransfer(l);if(r===Ui)return s.UNSIGNED_BYTE;if(r===Bd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Id)return s.UNSIGNED_SHORT_5_5_5_1;if(r===nv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ev)return s.BYTE;if(r===tv)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===zd)return s.INT;if(r===Cr)return s.UNSIGNED_INT;if(r===oa)return s.FLOAT;if(r===Zo)return s.HALF_FLOAT;if(r===iv)return s.ALPHA;if(r===av)return s.RGB;if(r===gi)return s.RGBA;if(r===Xo)return s.DEPTH_COMPONENT;if(r===Wo)return s.DEPTH_STENCIL;if(r===rv)return s.RED;if(r===Fd)return s.RED_INTEGER;if(r===sv)return s.RG;if(r===Hd)return s.RG_INTEGER;if(r===Gd)return s.RGBA_INTEGER;if(r===Pu||r===zu||r===Bu||r===Iu)if(h===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Pu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Pu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Iu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===td||r===nd||r===id||r===ad)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===td)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===id)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ad)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rd||r===sd||r===od)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===rd||r===sd)return h===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===od)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ld)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ud)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cd)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dd)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pd)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===md)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gd)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_d)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vd)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xd)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yd)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sd)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fu||r===Md||r===Ed)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Fu)return h===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Md)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ed)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ov||r===bd||r===Td||r===Ad)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Fu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===bd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Td)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const mR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Hn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ka({vertexShader:mR,fragmentShader:gR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new ju(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vR extends Ns{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,M=null,E=null;const A=new _R,y=i.getContextAttributes();let _=null,U=null;const L=[],C=[],F=new Dt;let I=null;const z=new Jn;z.viewport=new Ft;const X=new Jn;X.viewport=new Ft;const D=[z,X],w=new FE;let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=L[J];return _e===void 0&&(_e=new Ch,L[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=L[J];return _e===void 0&&(_e=new Ch,L[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=L[J];return _e===void 0&&(_e=new Ch,L[J]=_e),_e.getHandSpace()};function se(J){const _e=C.indexOf(J.inputSource);if(_e===-1)return;const Ee=L[_e];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,p||h),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function ge(){l.removeEventListener("select",se),l.removeEventListener("selectstart",se),l.removeEventListener("selectend",se),l.removeEventListener("squeeze",se),l.removeEventListener("squeezestart",se),l.removeEventListener("squeezeend",se),l.removeEventListener("end",ge),l.removeEventListener("inputsourceschange",pe);for(let J=0;J<L.length;J++){const _e=C[J];_e!==null&&(C[J]=null,L[J].disconnect(_e))}G=null,le=null,A.reset(),e.setRenderTarget(_),M=null,v=null,x=null,l=null,U=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",se),l.addEventListener("selectstart",se),l.addEventListener("selectend",se),l.addEventListener("squeeze",se),l.addEventListener("squeezestart",se),l.addEventListener("squeezeend",se),l.addEventListener("end",ge),l.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,we=null,De=null;y.depth&&(De=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=y.stencil?Wo:Xo,we=y.stencil?ko:Cr);const lt={colorFormat:i.RGBA8,depthFormat:De,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(lt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Dr(v.textureWidth,v.textureHeight,{format:gi,type:Ui,depthTexture:new yv(v.textureWidth,v.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Dr(M.framebufferWidth,M.framebufferHeight,{format:gi,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Me.setContext(l),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(J){for(let _e=0;_e<J.removed.length;_e++){const Ee=J.removed[_e],we=C.indexOf(Ee);we>=0&&(C[we]=null,L[we].disconnect(Ee))}for(let _e=0;_e<J.added.length;_e++){const Ee=J.added[_e];let we=C.indexOf(Ee);if(we===-1){for(let lt=0;lt<L.length;lt++)if(lt>=C.length){C.push(Ee),we=lt;break}else if(C[lt]===null){C[lt]=Ee,we=lt;break}if(we===-1)break}const De=L[we];De&&De.connect(Ee)}}const B=new ee,Z=new ee;function Y(J,_e,Ee){B.setFromMatrixPosition(_e.matrixWorld),Z.setFromMatrixPosition(Ee.matrixWorld);const we=B.distanceTo(Z),De=_e.projectionMatrix.elements,lt=Ee.projectionMatrix.elements,Je=De[14]/(De[10]-1),Ot=De[14]/(De[10]+1),Ht=(De[9]+1)/De[5],gt=(De[9]-1)/De[5],H=(De[8]-1)/De[0],xn=(lt[8]+1)/lt[0],Mt=Je*H,dt=Je*xn,ke=we/(-H+xn),_t=ke*-H;if(_e.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_t),J.translateZ(ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),De[10]===-1)J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ze=Je+ke,rt=Ot+ke,$t=Mt-_t,O=dt+(we-_t),b=Ht*Ot/rt*Ze,ne=gt*Ot/rt*Ze;J.projectionMatrix.makePerspective($t,O,b,ne,Ze,rt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function be(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let _e=J.near,Ee=J.far;A.texture!==null&&(A.depthNear>0&&(_e=A.depthNear),A.depthFar>0&&(Ee=A.depthFar)),w.near=X.near=z.near=_e,w.far=X.far=z.far=Ee,(G!==w.near||le!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,le=w.far),z.layers.mask=J.layers.mask|2,X.layers.mask=J.layers.mask|4,w.layers.mask=z.layers.mask|X.layers.mask;const we=J.parent,De=w.cameras;be(w,we);for(let lt=0;lt<De.length;lt++)be(De[lt],we);De.length===2?Y(w,z,X):w.projectionMatrix.copy(z.projectionMatrix),N(J,w,we)};function N(J,_e,Ee){Ee===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Rd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(J){m=J,v!==null&&(v.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let te=null;function ye(J,_e){if(g=_e.getViewerPose(p||h),E=_e,g!==null){const Ee=g.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let we=!1;Ee.length!==w.cameras.length&&(w.cameras.length=0,we=!0);for(let Je=0;Je<Ee.length;Je++){const Ot=Ee[Je];let Ht=null;if(M!==null)Ht=M.getViewport(Ot);else{const H=x.getViewSubImage(v,Ot);Ht=H.viewport,Je===0&&(e.setRenderTargetTextures(U,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(U))}let gt=D[Je];gt===void 0&&(gt=new Jn,gt.layers.enable(Je),gt.viewport=new Ft,D[Je]=gt),gt.matrix.fromArray(Ot.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Ot.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Je===0&&(w.matrix.copy(gt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),we===!0&&w.cameras.push(gt)}const De=l.enabledFeatures;if(De&&De.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Je=x.getDepthInformation(Ee[0]);Je&&Je.isValid&&Je.texture&&A.init(e,Je,l.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const we=C[Ee],De=L[Ee];we!==null&&De!==void 0&&De.update(we,_e,p||h)}te&&te(J,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),E=null}const Me=new Mv;Me.setAnimationLoop(ye),this.setAnimationLoop=function(J){te=J},this.dispose=function(){}}}const Mr=new Li,xR=new Zt;function yR(s,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,_v(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,U,L,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),x(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),v(y,_),_.isMeshPhysicalMaterial&&M(y,_,C)):_.isMeshMatcapMaterial?(u(y,_),E(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),A(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,U,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const U=e.get(_),L=U.envMap,C=U.envMapRotation;L&&(y.envMap.value=L,Mr.copy(C),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),y.envMapRotation.value.setFromMatrix4(xR.makeRotationFromEuler(Mr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,U,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*U,y.scale.value=L*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,U){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const U=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function SR(s,e,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const C=L.program;r.uniformBlockBinding(U,C)}function p(U,L){let C=l[U.id];C===void 0&&(E(U),C=g(U),l[U.id]=C,U.addEventListener("dispose",y));const F=L.program;r.updateUBOMapping(U,F);const I=e.render.frame;u[U.id]!==I&&(v(U),u[U.id]=I)}function g(U){const L=x();U.__bindingPointIndex=L;const C=s.createBuffer(),F=U.__size,I=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,F,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function x(){for(let U=0;U<d;U++)if(h.indexOf(U)===-1)return h.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const L=l[U.id],C=U.uniforms,F=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let I=0,z=C.length;I<z;I++){const X=Array.isArray(C[I])?C[I]:[C[I]];for(let D=0,w=X.length;D<w;D++){const G=X[D];if(M(G,I,D,F)===!0){const le=G.__offset,se=Array.isArray(G.value)?G.value:[G.value];let ge=0;for(let pe=0;pe<se.length;pe++){const B=se[pe],Z=A(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,le+ge,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,ge),ge+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,L,C,F){const I=U.value,z=L+"_"+C;if(F[z]===void 0)return typeof I=="number"||typeof I=="boolean"?F[z]=I:F[z]=I.clone(),!0;{const X=F[z];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return F[z]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function E(U){const L=U.uniforms;let C=0;const F=16;for(let z=0,X=L.length;z<X;z++){const D=Array.isArray(L[z])?L[z]:[L[z]];for(let w=0,G=D.length;w<G;w++){const le=D[w],se=Array.isArray(le.value)?le.value:[le.value];for(let ge=0,pe=se.length;ge<pe;ge++){const B=se[ge],Z=A(B),Y=C%F,be=Y%Z.boundary,N=Y+be;C+=be,N!==0&&F-N<Z.storage&&(C+=F-N),le.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=Z.storage}}}const I=C%F;return I>0&&(C+=F-I),U.__size=C,U.__cache={},this}function A(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function y(U){const L=U.target;L.removeEventListener("dispose",y);const C=h.indexOf(L.__bindingPointIndex);h.splice(C,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const U in l)s.deleteBuffer(l[U]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class MR{constructor(e={}){const{canvas:i=$M(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),A=new Int32Array(4);let y=null,_=null;const U=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1;this._outputColorSpace=oi;let I=0,z=0,X=null,D=-1,w=null;const G=new Ft,le=new Ft;let se=null;const ge=new Ct(0);let pe=0,B=i.width,Z=i.height,Y=1,be=null,N=null;const te=new Ft(0,0,B,Z),ye=new Ft(0,0,B,Z);let Me=!1;const J=new Xd;let _e=!1,Ee=!1;const we=new Zt,De=new Zt,lt=new ee,Je=new Ft,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function gt(){return X===null?Y:1}let H=r;function xn(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Pd}`),i.addEventListener("webglcontextlost",Ie,!1),i.addEventListener("webglcontextrestored",Re,!1),i.addEventListener("webglcontextcreationerror",xe,!1),H===null){const q="webgl2";if(H=xn(q,R),H===null)throw xn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Mt,dt,ke,_t,Ze,rt,$t,O,b,ne,fe,me,ue,ze,Le,Ve,Xe,Se,Be,Ye,je,Ce,at,k;function Ne(){Mt=new L1(H),Mt.init(),Ce=new pR(H,Mt),dt=new T1(H,Mt,e,Ce),ke=new hR(H,Mt),dt.reverseDepthBuffer&&v&&ke.buffers.depth.setReversed(!0),_t=new P1(H),Ze=new $A,rt=new dR(H,Mt,ke,Ze,dt,Ce,_t),$t=new R1(C),O=new U1(C),b=new GE(H),at=new E1(H,b),ne=new N1(H,b,_t,at),fe=new B1(H,ne,b,_t),Be=new z1(H,dt,rt),Ve=new A1(Ze),me=new JA(C,$t,O,Mt,dt,at,Ve),ue=new yR(C,Ze),ze=new tR,Le=new oR(Mt),Se=new M1(C,$t,O,ke,fe,M,m),Xe=new cR(C,fe,dt),k=new SR(H,_t,dt,ke),Ye=new b1(H,Mt,_t),je=new O1(H,Mt,_t),_t.programs=me.programs,C.capabilities=dt,C.extensions=Mt,C.properties=Ze,C.renderLists=ze,C.shadowMap=Xe,C.state=ke,C.info=_t}Ne();const Te=new vR(C,H);this.xr=Te,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=Mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,q,re=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),re===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,q,re){B=R,Z=q,Y=re,i.width=Math.floor(R*re),i.height=Math.floor(q*re),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,q,re,oe){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,q,re,oe),ke.viewport(G.copy(te).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(ye)},this.setScissor=function(R,q,re,oe){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,q,re,oe),ke.scissor(le.copy(ye).multiplyScalar(Y).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){ke.setScissorTest(Me=R)},this.setOpaqueSort=function(R){be=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,re=!0){let oe=0;if(R){let j=!1;if(X!==null){const Ae=X.texture.format;j=Ae===Gd||Ae===Hd||Ae===Fd}if(j){const Ae=X.texture.type,Ue=Ae===Ui||Ae===Cr||Ae===Vo||Ae===ko||Ae===Bd||Ae===Id,Pe=Se.getClearColor(),Fe=Se.getClearAlpha(),et=Pe.r,Ke=Pe.g,We=Pe.b;Ue?(E[0]=et,E[1]=Ke,E[2]=We,E[3]=Fe,H.clearBufferuiv(H.COLOR,0,E)):(A[0]=et,A[1]=Ke,A[2]=We,A[3]=Fe,H.clearBufferiv(H.COLOR,0,A))}else oe|=H.COLOR_BUFFER_BIT}q&&(oe|=H.DEPTH_BUFFER_BIT),re&&(oe|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ie,!1),i.removeEventListener("webglcontextrestored",Re,!1),i.removeEventListener("webglcontextcreationerror",xe,!1),Se.dispose(),ze.dispose(),Le.dispose(),Ze.dispose(),$t.dispose(),O.dispose(),fe.dispose(),at.dispose(),k.dispose(),me.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",on),Te.removeEventListener("sessionend",yn),Nn.stop()};function Ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=_t.autoReset,q=Xe.enabled,re=Xe.autoUpdate,oe=Xe.needsUpdate,j=Xe.type;Ne(),_t.autoReset=R,Xe.enabled=q,Xe.autoUpdate=re,Xe.needsUpdate=oe,Xe.type=j}function xe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function He(R){const q=R.target;q.removeEventListener("dispose",He),it(q)}function it(R){Ut(R),Ze.remove(R)}function Ut(R){const q=Ze.get(R).programs;q!==void 0&&(q.forEach(function(re){me.releaseProgram(re)}),R.isShaderMaterial&&me.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,re,oe,j,Ae){q===null&&(q=Ot);const Ue=j.isMesh&&j.matrixWorld.determinant()<0,Pe=er(R,q,re,oe,j);ke.setMaterial(oe,Ue);let Fe=re.index,et=1;if(oe.wireframe===!0){if(Fe=ne.getWireframeAttribute(re),Fe===void 0)return;et=2}const Ke=re.drawRange,We=re.attributes.position;let ct=Ke.start*et,Rt=(Ke.start+Ke.count)*et;Ae!==null&&(ct=Math.max(ct,Ae.start*et),Rt=Math.min(Rt,(Ae.start+Ae.count)*et)),Fe!==null?(ct=Math.max(ct,0),Rt=Math.min(Rt,Fe.count)):We!=null&&(ct=Math.max(ct,0),Rt=Math.min(Rt,We.count));const kt=Rt-ct;if(kt<0||kt===1/0)return;at.setup(j,oe,Pe,re,Fe);let vt,xt=Ye;if(Fe!==null&&(vt=b.get(Fe),xt=je,xt.setIndex(vt)),j.isMesh)oe.wireframe===!0?(ke.setLineWidth(oe.wireframeLinewidth*gt()),xt.setMode(H.LINES)):xt.setMode(H.TRIANGLES);else if(j.isLine){let Qe=oe.linewidth;Qe===void 0&&(Qe=1),ke.setLineWidth(Qe*gt()),j.isLineSegments?xt.setMode(H.LINES):j.isLineLoop?xt.setMode(H.LINE_LOOP):xt.setMode(H.LINE_STRIP)}else j.isPoints?xt.setMode(H.POINTS):j.isSprite&&xt.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,Kt=j._multiDrawCounts,Et=j._multiDrawCount,Tn=Fe?b.get(Fe).bytesPerElement:1,_a=Ze.get(oe).currentProgram.getUniforms();for(let Xt=0;Xt<Et;Xt++)_a.setValue(H,"_gl_DrawID",Xt),xt.render(Qe[Xt]/Tn,Kt[Xt])}else if(j.isInstancedMesh)xt.renderInstances(ct,kt,j.count);else if(re.isInstancedBufferGeometry){const Qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Kt=Math.min(re.instanceCount,Qe);xt.renderInstances(ct,kt,Kt)}else xt.render(ct,kt)};function bt(R,q,re){R.transparent===!0&&R.side===sa&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,ma(R,q,re),R.side=Za,R.needsUpdate=!0,ma(R,q,re),R.side=sa):ma(R,q,re)}this.compile=function(R,q,re=null){re===null&&(re=R),_=Le.get(re),_.init(q),L.push(_),re.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==re&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const oe=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ae=j.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const Pe=Ae[Ue];bt(Pe,re,j),oe.add(Pe)}else bt(Ae,re,j),oe.add(Ae)}),_=L.pop(),oe},this.compileAsync=function(R,q,re=null){const oe=this.compile(R,q,re);return new Promise(j=>{function Ae(){if(oe.forEach(function(Ue){Ze.get(Ue).currentProgram.isReady()&&oe.delete(Ue)}),oe.size===0){j(R);return}setTimeout(Ae,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Vn=null;function dn(R){Vn&&Vn(R)}function on(){Nn.stop()}function yn(){Nn.start()}const Nn=new Mv;Nn.setAnimationLoop(dn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(R){Vn=R,Te.setAnimationLoop(R),R===null?Nn.stop():Nn.start()},Te.addEventListener("sessionstart",on),Te.addEventListener("sessionend",yn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(q),q=Te.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,X),_=Le.get(R,L.length),_.init(q),L.push(_),De.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(De),Ee=this.localClippingEnabled,_e=Ve.init(this.clippingPlanes,Ee),y=ze.get(R,U.length),y.init(),U.push(y),Te.enabled===!0&&Te.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&Ja(Ae,q,-1/0,C.sortObjects)}Ja(R,q,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(be,N),Ht=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Ht&&Se.addToRenderList(y,R),this.info.render.frame++,_e===!0&&Ve.beginShadows();const re=_.state.shadowsArray;Xe.render(re,R,q),_e===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=y.opaque,j=y.transmissive;if(_.setupLights(),q.isArrayCamera){const Ae=q.cameras;if(j.length>0)for(let Ue=0,Pe=Ae.length;Ue<Pe;Ue++){const Fe=Ae[Ue];tl(oe,j,R,Fe)}Ht&&Se.render(R);for(let Ue=0,Pe=Ae.length;Ue<Pe;Ue++){const Fe=Ae[Ue];el(y,R,Fe,Fe.viewport)}}else j.length>0&&tl(oe,j,R,q),Ht&&Se.render(R),el(y,R,q);X!==null&&z===0&&(rt.updateMultisampleRenderTarget(X),rt.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(C,R,q),at.resetDefaultState(),D=-1,w=null,L.pop(),L.length>0?(_=L[L.length-1],_e===!0&&Ve.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ja(R,q,re,oe){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){oe&&Je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(De);const Ue=fe.update(R),Pe=R.material;Pe.visible&&y.push(R,Ue,Pe,re,Je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ue=fe.update(R),Pe=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Je.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Je.copy(Ue.boundingSphere.center)),Je.applyMatrix4(R.matrixWorld).applyMatrix4(De)),Array.isArray(Pe)){const Fe=Ue.groups;for(let et=0,Ke=Fe.length;et<Ke;et++){const We=Fe[et],ct=Pe[We.materialIndex];ct&&ct.visible&&y.push(R,Ue,ct,re,Je.z,We)}}else Pe.visible&&y.push(R,Ue,Pe,re,Je.z,null)}}const Ae=R.children;for(let Ue=0,Pe=Ae.length;Ue<Pe;Ue++)Ja(Ae[Ue],q,re,oe)}function el(R,q,re,oe){const j=R.opaque,Ae=R.transmissive,Ue=R.transparent;_.setupLightsView(re),_e===!0&&Ve.setGlobalState(C.clippingPlanes,re),oe&&ke.viewport(G.copy(oe)),j.length>0&&$a(j,q,re),Ae.length>0&&$a(Ae,q,re),Ue.length>0&&$a(Ue,q,re),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function tl(R,q,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[oe.id]===void 0&&(_.state.transmissionRenderTarget[oe.id]=new Dr(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Zo:Ui,minFilter:wr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[oe.id],Ue=oe.viewport||G;Ae.setSize(Ue.z*C.transmissionResolutionScale,Ue.w*C.transmissionResolutionScale);const Pe=C.getRenderTarget();C.setRenderTarget(Ae),C.getClearColor(ge),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),Ht&&Se.render(re);const Fe=C.toneMapping;C.toneMapping=ja;const et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),_.setupLightsView(oe),_e===!0&&Ve.setGlobalState(C.clippingPlanes,oe),$a(R,re,oe),rt.updateMultisampleRenderTarget(Ae),rt.updateRenderTargetMipmap(Ae),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let We=0,ct=q.length;We<ct;We++){const Rt=q[We],kt=Rt.object,vt=Rt.geometry,xt=Rt.material,Qe=Rt.group;if(xt.side===sa&&kt.layers.test(oe.layers)){const Kt=xt.side;xt.side=Fn,xt.needsUpdate=!0,pa(kt,re,oe,vt,xt,Qe),xt.side=Kt,xt.needsUpdate=!0,Ke=!0}}Ke===!0&&(rt.updateMultisampleRenderTarget(Ae),rt.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Pe),C.setClearColor(ge,pe),et!==void 0&&(oe.viewport=et),C.toneMapping=Fe}function $a(R,q,re){const oe=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Ae=R.length;j<Ae;j++){const Ue=R[j],Pe=Ue.object,Fe=Ue.geometry,et=Ue.group;let Ke=Ue.material;Ke.allowOverride===!0&&oe!==null&&(Ke=oe),Pe.layers.test(re.layers)&&pa(Pe,q,re,Fe,Ke,et)}}function pa(R,q,re,oe,j,Ae){R.onBeforeRender(C,q,re,oe,j,Ae),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,q,re,oe,R,Ae),j.transparent===!0&&j.side===sa&&j.forceSinglePass===!1?(j.side=Fn,j.needsUpdate=!0,C.renderBufferDirect(re,q,oe,j,R,Ae),j.side=Za,j.needsUpdate=!0,C.renderBufferDirect(re,q,oe,j,R,Ae),j.side=sa):C.renderBufferDirect(re,q,oe,j,R,Ae),R.onAfterRender(C,q,re,oe,j,Ae)}function ma(R,q,re){q.isScene!==!0&&(q=Ot);const oe=Ze.get(R),j=_.state.lights,Ae=_.state.shadowsArray,Ue=j.state.version,Pe=me.getParameters(R,j.state,Ae,q,re),Fe=me.getProgramCacheKey(Pe);let et=oe.programs;oe.environment=R.isMeshStandardMaterial?q.environment:null,oe.fog=q.fog,oe.envMap=(R.isMeshStandardMaterial?O:$t).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",He),et=new Map,oe.programs=et);let Ke=et.get(Fe);if(Ke!==void 0){if(oe.currentProgram===Ke&&oe.lightsStateVersion===Ue)return Pi(R,Pe),Ke}else Pe.uniforms=me.getUniforms(R),R.onBeforeCompile(Pe,C),Ke=me.acquireProgram(Pe,Fe),et.set(Fe,Ke),oe.uniforms=Pe.uniforms;const We=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Ve.uniform),Pi(R,Pe),oe.needsLights=nn(R),oe.lightsStateVersion=Ue,oe.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),oe.currentProgram=Ke,oe.uniformsList=null,Ke}function Oi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Hu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Pi(R,q){const re=Ze.get(R);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function er(R,q,re,oe,j){q.isScene!==!0&&(q=Ot),rt.resetTextureUnits();const Ae=q.fog,Ue=oe.isMeshStandardMaterial?q.environment:null,Pe=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Cs,Fe=(oe.isMeshStandardMaterial?O:$t).get(oe.envMap||Ue),et=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ke=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),We=!!re.morphAttributes.position,ct=!!re.morphAttributes.normal,Rt=!!re.morphAttributes.color;let kt=ja;oe.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(kt=C.toneMapping);const vt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,xt=vt!==void 0?vt.length:0,Qe=Ze.get(oe),Kt=_.state.lights;if(_e===!0&&(Ee===!0||R!==w)){const pn=R===w&&oe.id===D;Ve.setState(oe,R,pn)}let Et=!1;oe.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Kt.state.version||Qe.outputColorSpace!==Pe||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==Fe||oe.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ve.numPlanes||Qe.numIntersection!==Ve.numIntersection)||Qe.vertexAlphas!==et||Qe.vertexTangents!==Ke||Qe.morphTargets!==We||Qe.morphNormals!==ct||Qe.morphColors!==Rt||Qe.toneMapping!==kt||Qe.morphTargetsCount!==xt)&&(Et=!0):(Et=!0,Qe.__version=oe.version);let Tn=Qe.currentProgram;Et===!0&&(Tn=ma(oe,q,j));let _a=!1,Xt=!1,Bi=!1;const Gt=Tn.getUniforms(),An=Qe.uniforms;if(ke.useProgram(Tn.program)&&(_a=!0,Xt=!0,Bi=!0),oe.id!==D&&(D=oe.id,Xt=!0),_a||w!==R){ke.buffers.depth.getReversed()?(we.copy(R.projectionMatrix),tE(we),nE(we),Gt.setValue(H,"projectionMatrix",we)):Gt.setValue(H,"projectionMatrix",R.projectionMatrix),Gt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Sn=Gt.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,lt.setFromMatrixPosition(R.matrixWorld)),dt.logarithmicDepthBuffer&&Gt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Gt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Xt=!0,Bi=!0)}if(j.isSkinnedMesh){Gt.setOptional(H,j,"bindMatrix"),Gt.setOptional(H,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Gt.setValue(H,"boneTexture",pn.boneTexture,rt))}j.isBatchedMesh&&(Gt.setOptional(H,j,"batchingTexture"),Gt.setValue(H,"batchingTexture",j._matricesTexture,rt),Gt.setOptional(H,j,"batchingIdTexture"),Gt.setValue(H,"batchingIdTexture",j._indirectTexture,rt),Gt.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Gt.setValue(H,"batchingColorTexture",j._colorsTexture,rt));const ln=re.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Be.update(j,re,Tn),(Xt||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Gt.setValue(H,"receiveShadow",j.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(An.envMap.value=Fe,An.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),Xt&&(Gt.setValue(H,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&ga(An,Bi),Ae&&oe.fog===!0&&ue.refreshFogUniforms(An,Ae),ue.refreshMaterialUniforms(An,oe,Y,Z,_.state.transmissionRenderTarget[R.id]),Hu.upload(H,Oi(Qe),An,rt)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Hu.upload(H,Oi(Qe),An,rt),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Gt.setValue(H,"center",j.center),Gt.setValue(H,"modelViewMatrix",j.modelViewMatrix),Gt.setValue(H,"normalMatrix",j.normalMatrix),Gt.setValue(H,"modelMatrix",j.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const pn=oe.uniformsGroups;for(let Sn=0,xi=pn.length;Sn<xi;Sn++){const Ii=pn[Sn];k.update(Ii,Tn),k.bind(Ii,Tn)}}return Tn}function ga(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,re){const oe=Ze.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),Ze.get(R.texture).__webglTexture=q,Ze.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:re,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const re=Ze.get(R);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const nl=H.createFramebuffer();this.setRenderTarget=function(R,q=0,re=0){X=R,I=q,z=re;let oe=!0,j=null,Ae=!1,Ue=!1;if(R){const Fe=Ze.get(R);if(Fe.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(H.FRAMEBUFFER,null),oe=!1;else if(Fe.__webglFramebuffer===void 0)rt.setupRenderTarget(R);else if(Fe.__hasExternalTextures)rt.rebindTextures(R,Ze.get(R.texture).__webglTexture,Ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(Fe.__boundDepthTexture!==We){if(We!==null&&Ze.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const Ke=Ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[q])?j=Ke[q][re]:j=Ke[q],Ae=!0):R.samples>0&&rt.useMultisampledRTT(R)===!1?j=Ze.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?j=Ke[re]:j=Ke,G.copy(R.viewport),le.copy(R.scissor),se=R.scissorTest}else G.copy(te).multiplyScalar(Y).floor(),le.copy(ye).multiplyScalar(Y).floor(),se=Me;if(re!==0&&(j=nl),ke.bindFramebuffer(H.FRAMEBUFFER,j)&&oe&&ke.drawBuffers(R,j),ke.viewport(G),ke.scissor(le),ke.setScissorTest(se),Ae){const Fe=Ze.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,re)}else if(Ue){const Fe=Ze.get(R.texture),et=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,re,et)}else if(R!==null&&re!==0){const Fe=Ze.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,re)}D=-1},this.readRenderTargetPixels=function(R,q,re,oe,j,Ae,Ue,Pe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){ke.bindFramebuffer(H.FRAMEBUFFER,Fe);try{const et=R.textures[Pe],Ke=et.format,We=et.type;if(!dt.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-oe&&re>=0&&re<=R.height-j&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe),H.readPixels(q,re,oe,j,Ce.convert(Ke),Ce.convert(We),Ae))}finally{const et=X!==null?Ze.get(X).__webglFramebuffer:null;ke.bindFramebuffer(H.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,q,re,oe,j,Ae,Ue,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(q>=0&&q<=R.width-oe&&re>=0&&re<=R.height-j){ke.bindFramebuffer(H.FRAMEBUFFER,Fe);const et=R.textures[Pe],Ke=et.format,We=et.type;if(!dt.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe),H.readPixels(q,re,oe,j,Ce.convert(Ke),Ce.convert(We),0);const Rt=X!==null?Ze.get(X).__webglFramebuffer:null;ke.bindFramebuffer(H.FRAMEBUFFER,Rt);const kt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await eE(H,kt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.deleteBuffer(ct),H.deleteSync(kt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,re=0){const oe=Math.pow(2,-re),j=Math.floor(R.image.width*oe),Ae=Math.floor(R.image.height*oe),Ue=q!==null?q.x:0,Pe=q!==null?q.y:0;rt.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,Ue,Pe,j,Ae),ke.unbindTexture()};const il=H.createFramebuffer(),zi=H.createFramebuffer();this.copyTextureToTexture=function(R,q,re=null,oe=null,j=0,Ae=null){Ae===null&&(j!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=j,j=0):Ae=0);let Ue,Pe,Fe,et,Ke,We,ct,Rt,kt;const vt=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(re!==null)Ue=re.max.x-re.min.x,Pe=re.max.y-re.min.y,Fe=re.isBox3?re.max.z-re.min.z:1,et=re.min.x,Ke=re.min.y,We=re.isBox3?re.min.z:0;else{const ln=Math.pow(2,-j);Ue=Math.floor(vt.width*ln),Pe=Math.floor(vt.height*ln),R.isDataArrayTexture?Fe=vt.depth:R.isData3DTexture?Fe=Math.floor(vt.depth*ln):Fe=1,et=0,Ke=0,We=0}oe!==null?(ct=oe.x,Rt=oe.y,kt=oe.z):(ct=0,Rt=0,kt=0);const xt=Ce.convert(q.format),Qe=Ce.convert(q.type);let Kt;q.isData3DTexture?(rt.setTexture3D(q,0),Kt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(rt.setTexture2DArray(q,0),Kt=H.TEXTURE_2D_ARRAY):(rt.setTexture2D(q,0),Kt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Et=H.getParameter(H.UNPACK_ROW_LENGTH),Tn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),_a=H.getParameter(H.UNPACK_SKIP_PIXELS),Xt=H.getParameter(H.UNPACK_SKIP_ROWS),Bi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,et),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ke),H.pixelStorei(H.UNPACK_SKIP_IMAGES,We);const Gt=R.isDataArrayTexture||R.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const ln=Ze.get(R),pn=Ze.get(q),Sn=Ze.get(ln.__renderTarget),xi=Ze.get(pn.__renderTarget);ke.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Ii=0;Ii<Fe;Ii++)Gt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.get(R).__webglTexture,j,We+Ii),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.get(q).__webglTexture,Ae,kt+Ii)),H.blitFramebuffer(et,Ke,Ue,Pe,ct,Rt,Ue,Pe,H.DEPTH_BUFFER_BIT,H.NEAREST);ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Ze.has(R)){const ln=Ze.get(R),pn=Ze.get(q);ke.bindFramebuffer(H.READ_FRAMEBUFFER,il),ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,zi);for(let Sn=0;Sn<Fe;Sn++)Gt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,j,We+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,j),An?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Ae,kt+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Ae),j!==0?H.blitFramebuffer(et,Ke,Ue,Pe,ct,Rt,Ue,Pe,H.COLOR_BUFFER_BIT,H.NEAREST):An?H.copyTexSubImage3D(Kt,Ae,ct,Rt,kt+Sn,et,Ke,Ue,Pe):H.copyTexSubImage2D(Kt,Ae,ct,Rt,et,Ke,Ue,Pe);ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Kt,Ae,ct,Rt,kt,Ue,Pe,Fe,xt,Qe,vt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Kt,Ae,ct,Rt,kt,Ue,Pe,Fe,xt,vt.data):H.texSubImage3D(Kt,Ae,ct,Rt,kt,Ue,Pe,Fe,xt,Qe,vt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,ct,Rt,Ue,Pe,xt,Qe,vt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,ct,Rt,vt.width,vt.height,xt,vt.data):H.texSubImage2D(H.TEXTURE_2D,Ae,ct,Rt,Ue,Pe,xt,Qe,vt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Et),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_a),H.pixelStorei(H.UNPACK_SKIP_ROWS,Xt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Bi),Ae===0&&q.generateMipmaps&&H.generateMipmap(Kt),ke.unbindTexture()},this.copyTextureToTexture3D=function(R,q,re=null,oe=null,j=0){return bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,re,oe,j)},this.initRenderTarget=function(R){Ze.get(R).__webglFramebuffer===void 0&&rt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?rt.setTextureCube(R,0):R.isData3DTexture?rt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?rt.setTexture2DArray(R,0):rt.setTexture2D(R,0),ke.unbindTexture()},this.resetState=function(){I=0,z=0,X=null,ke.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=he.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>he.createElement("svg",{ref:m,...bR,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:Rv("lucide",l),...d},[...h.map(([p,g])=>he.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=(s,e)=>{const i=he.forwardRef(({className:r,...l},u)=>he.createElement(TR,{ref:u,iconNode:e,className:Rv(`lucide-${ER(s)}`,r),...l}));return i.displayName=`${s}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=vi("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=vi("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=vi("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=vi("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=vi("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=vi("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=vi("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=vi("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=vi("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=vi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=vi("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),BR="/portfolio/assets/js-removebg-preview-BQbQxxzB.png",IR="/portfolio/assets/react-removebg-preview-BCMotaw9.png",FR="/portfolio/assets/css-removebg-preview-BE18SoJE.png",HR="/portfolio/assets/html-removebg-preview-vL1RYijK.png",GR="/portfolio/assets/java-removebg-preview-CfdZ36Pv.png",VR="/portfolio/assets/cplusplus-removebg-preview-86jY7iyT.png",kR="/portfolio/assets/sql-removebg-preview-C1CDQl70.png",XR="/portfolio/assets/git-removebg-preview-DvLTLF-D.png",WR="/portfolio/assets/logo-DcIWjJzP.png",qR="/portfolio/assets/project1-BgstTdhh.jpg",YR="/portfolio/assets/project2-DlT-RqkO.jpg",jR="/portfolio/assets/project3-B1p_7zUw.jpg",ZR="/portfolio/assets/project4-CSCLYB-v.jpg",pi="/portfolio",Fh=({children:s})=>K.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary-400 via-accent-indigo to-primary-600 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(59,114,246,0.25)]",style:{textShadow:"0 2px 24px #3b72f6, 0 1px 0 #fff"},children:s}),KR=()=>{const{pathname:s}=da();return he.useEffect(()=>{window.scrollTo(0,0)},[s]),null},QR=()=>{const[s,e]=E0.useState(!1),i=he.useRef(),r=da(),l=k_();he.useEffect(()=>{if(r.pathname!=="/home"&&r.pathname!=="/"||!i.current)return;for(;i.current.firstChild;)i.current.removeChild(i.current.firstChild);const g=new wE,x=new Jn(70,i.current.offsetWidth/i.current.offsetHeight,.1,100);x.position.z=8;const v=new MR({alpha:!0,antialias:!0});v.setSize(i.current.offsetWidth,i.current.offsetHeight),v.setClearColor(0,0),i.current.appendChild(v.domElement);const M=new IE(16777215,.7);g.add(M);const E=new zE(16777215,1.2,100);E.position.set(0,0,10),g.add(E);const A=[new Wd(.35,32,32),new Os(.5,.5,.5)],y=[3900150,6583435,7248635,3003583,16096834,9133302,16731232,4450683,16769366,50175,16744115,16757575],_=[],U=12;for(let I=0;I<U;I++){const z=A[Math.floor(Math.random()*A.length)],X=y[Math.floor(Math.random()*y.length)],D=new UE({color:X,transparent:!0,opacity:.45,metalness:.7,roughness:.3}),w=new Ri(z,D);w.position.x=(Math.random()-.5)*16,w.position.y=(Math.random()-.5)*12,w.position.z=(Math.random()-.5)*12,w.rotation.x=Math.random()*Math.PI,w.rotation.y=Math.random()*Math.PI,w.userData={movementType:I%3===0?"circle":I%3===1?"wave":"float",baseX:w.position.x,baseY:w.position.y,baseZ:w.position.z,speed:.5+Math.random()*1.2,radius:1+Math.random()*2},g.add(w),_.push(w)}let L;const C=()=>{const I=Date.now()*.001;_.forEach((z,X)=>{const{movementType:D,baseX:w,baseY:G,baseZ:le,speed:se,radius:ge}=z.userData;D==="circle"?(z.position.x=w+Math.cos(I*se+X)*ge,z.position.z=le+Math.sin(I*se+X)*ge):D==="wave"?(z.position.y=G+Math.sin(I*se+X)*ge*.5,z.position.x=w+Math.sin(I*se*.5+X)*ge*.3):z.position.y=G+Math.sin(I*se+X)*.5,z.rotation.x+=.002+X*1e-4,z.rotation.y+=.002+X*1e-4}),v.render(g,x),L=requestAnimationFrame(C)};C();const F=()=>{if(!i.current)return;const I=i.current.offsetWidth,z=i.current.offsetHeight;x.aspect=I/z,x.updateProjectionMatrix(),v.setSize(I,z)};return window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F),i.current&&i.current.contains(v.domElement)&&i.current.removeChild(v.domElement),v.dispose(),cancelAnimationFrame(L)}},[r]);const u=[{title:"Driver Drowsiness Detection System",description:"A machine learning & computer vision–based project that alerts the driver when drowsiness is detected using advanced AI algorithms.",tech:["Python","OpenCV","Machine Learning","Computer Vision"],github:"https://github.com/HamzaAhmad536/Driver-Drowsiness-System.git",image:qR,category:"AI/ML"},{title:"Green Yasin",description:"A responsive frontend project with stunning UI/UX design, showcasing modern web development practices and clean architecture.",tech:["HTML","CSS","JavaScript","Responsive Design"],github:"https://github.com/HamzaAhmad536/GreenYasin",live:"https://hamzaahmad536.github.io/GreenYasin/",image:YR,category:"React"},{title:"Subjectify App",description:"A React application that displays PDFs, GitHub repos, and resources based on domain requests with dynamic content rendering.",tech:["React","JavaScript","API Integration","Responsive Design"],github:"https://github.com/affanabid/subjectify",live:"https://subjectify.vercel.app/",image:jR,category:"React"},{title:"Pharmacy Management System",description:"A comprehensive database management system built with SQL for efficient pharmacy operations and inventory tracking.",tech:["SQL","Database Design","MySQL","Data Management"],github:"https://github.com/HamzaAhmad536/Pharmacy-Management-System.git",image:ZR,category:"Database"}],h=[{name:"JavaScript",img:BR,alt:"JavaScript logo"},{name:"React",img:IR,alt:"React logo"},{name:"CSS/SCSS",img:FR,alt:"CSS/SCSS logo"},{name:"HTML",img:HR,alt:"HTML logo"},{name:"Java",img:GR,alt:"Java logo"},{name:"C++",img:VR,alt:"C++ logo"},{name:"MySQL",img:kR,alt:"MySQL logo"},{name:"Git",img:XR,alt:"Git logo"}],d=()=>K.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden animate-fade-in-up",children:[K.jsxs("section",{className:"relative min-h-screen flex items-center justify-center animate-slide-in-left",children:[K.jsx("div",{ref:i,className:"absolute inset-0 z-0 overflow-hidden"}),K.jsx("div",{className:"relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in-up",children:K.jsxs("div",{className:"animate-scale-in",children:[K.jsx("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-primary-400 via-accent-indigo to-primary-600 bg-clip-text text-transparent mb-6 animate-pulse drop-shadow-[0_2px_16px_rgba(59,114,246,0.25)]",style:{textShadow:"0 2px 24px #3b72f6, 0 1px 0 #fff"},children:"Hamza Ahmad"}),K.jsx("p",{className:"text-xl md:text-2xl lg:text-3xl text-neutral-200 mb-8 animate-fade-in-up animation-delay-300",children:"Frontend Developer & UI/UX Enthusiast"}),K.jsx("p",{className:"text-base md:text-lg text-neutral-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-600",children:"An ambitious Computer Science undergraduate crafting beautiful, interactive web experiences with modern technologies and innovative design solutions."}),K.jsxs("div",{className:"flex flex-wrap justify-center gap-4 md:gap-6 mb-12 animate-fade-in-up animation-delay-900",children:[K.jsx("div",{className:"glass-effect rounded-2xl px-6 py-4 border border-primary-300/20 hover:scale-105 transition-all duration-300",children:K.jsx("span",{className:"text-primary-300 font-semibold text-lg",children:"20+ Projects"})}),K.jsx("div",{className:"glass-effect rounded-2xl px-6 py-4 border border-secondary-300/20 hover:scale-105 transition-all duration-300",children:K.jsx("span",{className:"text-secondary-300 font-semibold text-lg",children:"8+ Skills"})}),K.jsx("div",{className:"glass-effect rounded-2xl px-6 py-4 border border-accent-slate/20 hover:scale-105 transition-all duration-300",children:K.jsx("span",{className:"text-accent-slate font-semibold text-lg",children:"3+ Years"})})]}),K.jsxs("div",{className:"flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-1200",children:[K.jsx("button",{className:"bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-scale-in focus:outline-none focus:ring-2 focus:ring-primary-400",onClick:()=>l("/projects"),children:"View My Work"}),K.jsx("button",{className:"border-2 border-accent-slate/50 hover:border-accent-slate text-white px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 glass-effect hover:bg-accent-slate/10 focus:outline-none focus:ring-2 focus:ring-accent-slate",onClick:()=>l("/contact"),children:"Get In Touch"})]})]})}),K.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 rounded-full animate-float blur-sm"}),K.jsx("div",{className:"absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-accent-slate/30 to-accent-gray/30 rounded-full animate-float animation-delay-1000 blur-sm"}),K.jsx("div",{className:"absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-secondary-400/30 to-accent-zinc/30 rounded-full animate-float animation-delay-2000 blur-sm"}),K.jsx("div",{className:"absolute top-32 right-32 w-10 h-10 bg-gradient-to-r from-accent-gray/30 to-primary-400/30 rounded-full animate-float animation-delay-500 blur-sm"})]}),K.jsx("section",{className:"py-16 px-4 bg-gradient-to-b from-transparent to-black/10",children:K.jsxs("div",{className:"max-w-6xl mx-auto",children:[K.jsx(Fh,{children:"Technical Skills"}),K.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6",children:h.map((g,x)=>K.jsxs("div",{className:"group glass-effect rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary-300/30 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-xl hover:shadow-2xl flex flex-col items-center justify-center",style:{animationDelay:`${x*100}ms`},children:[K.jsx("div",{className:"w-[110px] h-[110px] flex items-center justify-center mb-3 md:mb-4",children:K.jsx("img",{src:g.img,alt:g.alt,width:110,height:110,style:{objectFit:"contain",display:"block"}})}),K.jsx("h3",{className:"text-base md:text-lg font-bold text-white text-center group-hover:text-primary-300 transition-colors duration-300",children:g.name})]},g.name))})]})}),K.jsx("section",{className:"py-16 px-4",children:K.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",children:[K.jsxs("div",{className:"group glass-effect rounded-3xl p-6 md:p-8 border border-primary-300/20 hover:border-primary-300/40 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-xl",children:[K.jsx(AR,{className:"w-12 h-12 md:w-14 md:h-14 text-primary-400 mb-6 group-hover:text-primary-300 group-hover:scale-110 transition-all duration-300"}),K.jsx("h3",{className:"text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors",children:"Clean Code"}),K.jsx("p",{className:"text-neutral-300 leading-relaxed",children:"Writing maintainable, scalable, and efficient code following industry best practices and modern development standards."})]}),K.jsxs("div",{className:"group glass-effect rounded-3xl p-6 md:p-8 border border-secondary-300/20 hover:border-secondary-300/40 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-xl",children:[K.jsx(LR,{className:"w-12 h-12 md:w-14 md:h-14 text-secondary-400 mb-6 group-hover:text-secondary-300 group-hover:scale-110 transition-all duration-300"}),K.jsx("h3",{className:"text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-secondary-200 transition-colors",children:"UI/UX Design"}),K.jsx("p",{className:"text-neutral-300 leading-relaxed",children:"Creating beautiful, intuitive interfaces that provide exceptional user experiences with attention to detail and accessibility."})]}),K.jsxs("div",{className:"group glass-effect rounded-3xl p-6 md:p-8 border border-accent-slate/20 hover:border-accent-slate/40 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-xl",children:[K.jsx(zR,{className:"w-12 h-12 md:w-14 md:h-14 text-accent-slate mb-6 group-hover:text-accent-slate group-hover:scale-110 transition-all duration-300"}),K.jsx("h3",{className:"text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-accent-slate transition-colors",children:"Performance"}),K.jsx("p",{className:"text-neutral-300 leading-relaxed",children:"Optimizing applications for lightning-fast speed, efficiency, and seamless user interactions across all devices."})]})]})})]}),m=()=>K.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-20 px-4 animate-fade-in-up",children:K.jsxs("div",{className:"max-w-7xl mx-auto",children:[K.jsx(Fh,{children:"My Projects"}),K.jsx("p",{className:"text-lg md:text-xl text-neutral-200 text-center mb-16 max-w-3xl mx-auto",children:"A showcase of my latest work in web development, featuring innovative solutions and cutting-edge technologies."}),K.jsx("div",{className:"flex flex-wrap justify-center gap-8 md:gap-10",children:u.map((g,x)=>K.jsxs("div",{className:"group glass-effect rounded-3xl overflow-hidden border border-white/10 hover:border-primary-300/30 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-scale-in w-[300px] flex flex-col",children:[K.jsxs("div",{className:"relative overflow-hidden",children:[K.jsx("img",{src:g.image,alt:g.title,className:"w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"}),K.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),K.jsx("div",{className:"absolute top-2 right-2 glass-effect px-2 py-1 rounded-full text-white text-xs font-bold shadow-lg",children:g.category})]}),K.jsxs("div",{className:"p-4 flex-1 flex flex-col",children:[K.jsx("h3",{className:"text-lg font-bold text-white mb-2 group-hover:text-primary-200 transition-colors duration-300",children:g.title}),K.jsx("p",{className:"text-neutral-300 mb-3 text-sm leading-relaxed",children:g.description}),K.jsx("div",{className:"flex flex-wrap gap-1.5 mb-3",children:g.tech.map(v=>K.jsx("span",{className:"glass-effect text-accent-slate px-2 py-0.5 rounded-full text-xs border border-accent-slate/30 hover:border-accent-slate/50 transition-colors duration-300 hover:bg-accent-slate/30",children:v},v))}),K.jsxs("div",{className:"flex flex-row gap-2 mt-auto pt-2",children:[g.github&&K.jsxs("a",{href:g.github,target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center gap-1.5 glass-effect hover:bg-neutral-700/50 text-white px-3 py-1.5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm font-semibold",children:[K.jsx(wR,{className:"w-4 h-4"}),"View Code"]}),g.live&&K.jsxs("a",{href:g.live,target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-3 py-1.5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm font-semibold",children:[K.jsx(RR,{className:"w-4 h-4"}),"Live Demo"]})]})]})]},g.title))})]})}),p=()=>{const[g,x]=E0.useState({name:"",email:"",subject:"",message:""}),v=E=>{E.preventDefault(),alert("Thank you for your message! I'll get back to you soon."),x({name:"",email:"",subject:"",message:""})},M=E=>{const{name:A,value:y}=E.target;x(_=>({..._,[A]:y}))};return K.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 animate-fade-in-up",children:K.jsxs("div",{className:"max-w-6xl mx-auto",children:[K.jsx(Fh,{children:"Let's Work Together"}),K.jsx("p",{className:"text-lg md:text-xl text-neutral-300 text-center mb-16 max-w-3xl mx-auto",children:"Ready to bring your ideas to life? Let's discuss your next project and create something amazing together."}),K.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12",children:[K.jsxs("div",{className:"space-y-6 md:space-y-8",children:[K.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8",children:"Get In Touch"}),K.jsxs("div",{className:"space-y-4 md:space-y-6",children:[K.jsxs("div",{className:"flex items-center gap-4 p-4 glass-effect rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105",children:[K.jsx(CR,{className:"w-5 h-5 md:w-6 md:h-6 text-primary-400"}),K.jsxs("div",{children:[K.jsx("p",{className:"text-neutral-400 text-sm",children:"Email"}),K.jsx("p",{className:"text-white font-semibold",children:"hamzaahmad2003@gmail.com"})]})]}),K.jsxs("div",{className:"flex items-center gap-4 p-4 glass-effect rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105",children:[K.jsx(NR,{className:"w-5 h-5 md:w-6 md:h-6 text-secondary-400"}),K.jsxs("div",{children:[K.jsx("p",{className:"text-neutral-400 text-sm",children:"Phone"}),K.jsx("p",{className:"text-white font-semibold",children:"0326-4140389 | 0321-8444183"})]})]}),K.jsxs("div",{className:"flex items-center gap-4 p-4 glass-effect rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105",children:[K.jsx(DR,{className:"w-5 h-5 md:w-6 md:h-6 text-accent-slate"}),K.jsxs("div",{children:[K.jsx("p",{className:"text-neutral-400 text-sm",children:"Location"}),K.jsx("p",{className:"text-white font-semibold",children:"91 A1 PIA Society, Lahore, Pakistan"})]})]})]}),K.jsxs("div",{className:"mt-8 md:mt-12",children:[K.jsx("h3",{className:"text-xl md:text-2xl font-bold text-white mb-6",children:"Why Choose Me?"}),K.jsxs("div",{className:"space-y-4",children:[K.jsxs("div",{className:"flex items-center gap-4 p-3 glass-effect rounded-lg hover:scale-105 transition-all duration-300",children:[K.jsx("div",{className:"w-3 h-3 bg-primary-400 rounded-full animate-pulse"}),K.jsxs("div",{children:[K.jsx("p",{className:"text-white font-semibold",children:"Responsive & Modern Design"}),K.jsx("p",{className:"text-neutral-400 text-sm",children:"Pixel-perfect designs that work flawlessly on all devices"})]})]}),K.jsxs("div",{className:"flex items-center gap-4 p-3 glass-effect rounded-lg hover:scale-105 transition-all duration-300",children:[K.jsx("div",{className:"w-3 h-3 bg-secondary-400 rounded-full animate-pulse animation-delay-500"}),K.jsxs("div",{children:[K.jsx("p",{className:"text-white font-semibold",children:"Clean & Maintainable Code"}),K.jsx("p",{className:"text-neutral-400 text-sm",children:"Well-structured, documented code that's easy to maintain"})]})]}),K.jsxs("div",{className:"flex items-center gap-4 p-3 glass-effect rounded-lg hover:scale-105 transition-all duration-300",children:[K.jsx("div",{className:"w-3 h-3 bg-accent-slate rounded-full animate-pulse animation-delay-1000"}),K.jsxs("div",{children:[K.jsx("p",{className:"text-white font-semibold",children:"Fast Delivery & Communication"}),K.jsx("p",{className:"text-neutral-400 text-sm",children:"Quick turnaround times with regular updates and clear communication"})]})]}),K.jsxs("div",{className:"flex items-center gap-4 p-3 glass-effect rounded-lg hover:scale-105 transition-all duration-300",children:[K.jsx("div",{className:"w-3 h-3 bg-accent-gray rounded-full animate-pulse animation-delay-1500"}),K.jsxs("div",{children:[K.jsx("p",{className:"text-white font-semibold",children:"Competitive Pricing"}),K.jsx("p",{className:"text-neutral-400 text-sm",children:"High-quality work at fair, competitive rates"})]})]})]})]})]}),K.jsx("div",{className:"glass-card rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl",style:{background:"rgba(248,250,252,0.12)",backdropFilter:"blur(16px)"},children:K.jsxs("form",{onSubmit:v,className:"space-y-4 md:space-y-6",children:[K.jsxs("div",{children:[K.jsx("label",{className:"block text-white font-semibold mb-2",children:"Name"}),K.jsx("input",{type:"text",name:"name",value:g.name,onChange:M,required:!0,className:"w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300 bg-white/10",placeholder:"Your Name"})]}),K.jsxs("div",{children:[K.jsx("label",{className:"block text-white font-semibold mb-2",children:"Email"}),K.jsx("input",{type:"email",name:"email",value:g.email,onChange:M,required:!0,className:"w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300 bg-white/10",placeholder:"your.email@example.com"})]}),K.jsxs("div",{children:[K.jsx("label",{className:"block text-white font-semibold mb-2",children:"Subject"}),K.jsx("input",{type:"text",name:"subject",value:g.subject,onChange:M,required:!0,className:"w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300 bg-white/10",placeholder:"Project Discussion"})]}),K.jsxs("div",{children:[K.jsx("label",{className:"block text-white font-semibold mb-2",children:"Message"}),K.jsx("textarea",{name:"message",value:g.message,onChange:M,required:!0,rows:5,className:"w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300 resize-none bg-white/10",placeholder:"Tell me about your project..."})]}),K.jsxs("button",{type:"submit",className:"w-full bg-gradient-to-r from-primary-500 to-secondary-600 hover:from-primary-600 hover:to-secondary-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl",children:[K.jsx(OR,{className:"w-4 h-4 md:w-5 md:h-5"}),"Send Message"]})]})})]})]})})};return K.jsxs("div",{className:"font-sans overflow-x-hidden",children:[K.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10",children:K.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[K.jsxs("div",{className:"flex items-center justify-between h-16",children:[K.jsx(ra,{to:"/home",className:"cursor-pointer flex items-center transform hover:scale-105 transition-all duration-300",children:K.jsx("img",{src:WR,alt:"Logo",className:"w-20 h-20 object-contain"})}),K.jsxs("div",{className:"hidden md:flex space-x-8",children:[K.jsxs(ra,{to:"/home",className:`relative overflow-hidden transition-all duration-300 px-4 py-2 rounded-lg group nav-underline-effect ${r.pathname===pi+"/home"||r.pathname===pi+"/"?"text-primary-400 bg-primary-400/10 border border-primary-400/20":"text-white hover:text-primary-400"}`,children:[K.jsx("span",{className:"relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]",children:"Home"}),(r.pathname===pi+"/home"||r.pathname===pi+"/")&&K.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse"})]}),K.jsxs(ra,{to:"/projects",className:`relative overflow-hidden transition-all duration-300 px-4 py-2 rounded-lg group nav-underline-effect ${r.pathname===pi+"/projects"?"text-primary-400 bg-primary-400/10 border border-primary-400/20":"text-white hover:text-primary-400"}`,children:[K.jsx("span",{className:"relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]",children:"Projects"}),r.pathname===pi+"/projects"&&K.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse"})]}),K.jsxs(ra,{to:"/contact",className:`relative overflow-hidden transition-all duration-300 px-4 py-2 rounded-lg group nav-underline-effect ${r.pathname===pi+"/contact"?"text-primary-400 bg-primary-400/10 border border-primary-400/20":"text-white hover:text-primary-400"}`,children:[K.jsx("span",{className:"relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]",children:"Contact"}),r.pathname===pi+"/contact"&&K.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse"})]})]}),K.jsx("button",{className:"md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105",onClick:()=>e(!s),children:s?K.jsx(PR,{className:"w-6 h-6 animate-fadeIn"}):K.jsx(UR,{className:"w-6 h-6 animate-fadeIn"})})]}),s&&K.jsx("div",{className:"md:hidden glass-effect rounded-b-2xl p-4 border-b border-white/10 animate-slideDown",children:K.jsxs("div",{className:"space-y-2",children:[K.jsx(ra,{to:"/home",onClick:()=>e(!1),className:`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${r.pathname===pi+"/home"?"text-primary-400 bg-primary-400/10 border border-primary-400/20":"text-white hover:text-primary-400 hover:bg-white/5"}`,children:"Home"}),K.jsx(ra,{to:"/projects",onClick:()=>e(!1),className:`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${r.pathname===pi+"/projects"?"text-primary-400 bg-primary-400/10 border border-primary-400/20":"text-white hover:text-primary-400 hover:bg-white/5"}`,children:"Projects"}),K.jsx(ra,{to:"/contact",onClick:()=>e(!1),className:`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${r.pathname===pi+"/contact"?"text-primary-400 bg-primary-400/10 border border-primary-400/20":"text-white hover:text-primary-400 hover:bg-white/5"}`,children:"Contact"})]})})]})}),K.jsx("main",{className:"pt-16",children:K.jsxs(US,{children:[K.jsx(Fo,{path:"/home",element:K.jsx(d,{})}),K.jsx(Fo,{path:"/projects",element:K.jsx(m,{})}),K.jsx(Fo,{path:"/contact",element:K.jsx(p,{})}),K.jsx(Fo,{path:"*",element:K.jsx(d,{})})]})})]})},JR=()=>K.jsxs(tM,{basename:"/portfolio",children:[K.jsx(KR,{}),K.jsx(QR,{})]});Hy.createRoot(document.getElementById("root")).render(K.jsx(he.StrictMode,{children:K.jsx(JR,{})}));
