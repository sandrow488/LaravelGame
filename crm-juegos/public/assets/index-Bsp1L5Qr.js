(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function nl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dt={},er=[],Sn=()=>{},Su=()=>!1,$s=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),il=n=>n.startsWith("onUpdate:"),Bt=Object.assign,rl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},xh=Object.prototype.hasOwnProperty,it=(n,e)=>xh.call(n,e),Xe=Array.isArray,tr=n=>Ks(n)==="[object Map]",Mu=n=>Ks(n)==="[object Set]",Ye=n=>typeof n=="function",St=n=>typeof n=="string",di=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",Eu=n=>(pt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),yu=Object.prototype.toString,Ks=n=>yu.call(n),vh=n=>Ks(n).slice(8,-1),bu=n=>Ks(n)==="[object Object]",sl=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pr=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),js=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Sh=/-\w/g,ui=js(n=>n.replace(Sh,e=>e.slice(1).toUpperCase())),Mh=/\B([A-Z])/g,Ii=js(n=>n.replace(Mh,"-$1").toLowerCase()),Tu=js(n=>n.charAt(0).toUpperCase()+n.slice(1)),ca=js(n=>n?`on${Tu(n)}`:""),li=(n,e)=>!Object.is(n,e),ua=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Au=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Eh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ql;const Zs=()=>ql||(ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function al(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?Ah(i):al(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||pt(n))return n}const yh=/;(?![^(]*\))/g,bh=/:([^]+)/,Th=/\/\*[^]*?\*\//g;function Ah(n){const e={};return n.replace(Th,"").split(yh).forEach(t=>{if(t){const i=t.split(bh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ol(n){let e="";if(St(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=ol(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const wh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rh=nl(wh);function wu(n){return!!n||n===""}const Ru=n=>!!(n&&n.__v_isRef===!0),As=n=>St(n)?n:n==null?"":Xe(n)||pt(n)&&(n.toString===yu||!Ye(n.toString))?Ru(n)?As(n.value):JSON.stringify(n,Cu,2):String(n),Cu=(n,e)=>Ru(e)?Cu(n,e.value):tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[fa(i,s)+" =>"]=r,t),{})}:Mu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>fa(t))}:di(e)?fa(e):pt(e)&&!Xe(e)&&!bu(e)?String(e):e,fa=(n,e="")=>{var t;return di(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Ht;class Pu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ht;try{return Ht=this,e()}finally{Ht=t}}}on(){++this._on===1&&(this.prevScope=Ht,Ht=this)}off(){this._on>0&&--this._on===0&&(Ht=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ch(n){return new Pu(n)}function Ph(){return Ht}let ht;const ha=new WeakSet;class Du{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ha.has(this)&&(ha.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Iu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yl(this),Uu(this);const e=ht,t=ln;ht=this,ln=!0;try{return this.fn()}finally{Nu(this),ht=e,ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ul(e);this.deps=this.depsTail=void 0,Yl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ha.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Za(this)&&this.run()}get dirty(){return Za(this)}}let Lu=0,Dr,Lr;function Iu(n,e=!1){if(n.flags|=8,e){n.next=Lr,Lr=n;return}n.next=Dr,Dr=n}function ll(){Lu++}function cl(){if(--Lu>0)return;if(Lr){let e=Lr;for(Lr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Dr;){let e=Dr;for(Dr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Uu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Nu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ul(i),Dh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Za(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Fu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===zr)||(n.globalVersion=zr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Za(n))))return;n.flags|=2;const e=n.dep,t=ht,i=ln;ht=n,ln=!0;try{Uu(n);const r=n.fn(n._value);(e.version===0||li(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=t,ln=i,Nu(n),n.flags&=-3}}function ul(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ul(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Dh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ln=!0;const Ou=[];function Hn(){Ou.push(ln),ln=!1}function kn(){const n=Ou.pop();ln=n===void 0?!0:n}function Yl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let zr=0;class Lh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!ln||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new Lh(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,Bu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,zr++,this.notify(e)}notify(e){ll();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{cl()}}}function Bu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Bu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ja=new WeakMap,Pi=Symbol(""),Qa=Symbol(""),Vr=Symbol("");function wt(n,e,t){if(ln&&ht){let i=Ja.get(n);i||Ja.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new fl),r.map=i,r.key=t),r.track()}}function Fn(n,e,t,i,r,s){const o=Ja.get(n);if(!o){zr++;return}const l=c=>{c&&c.trigger()};if(ll(),e==="clear")o.forEach(l);else{const c=Xe(n),u=c&&sl(t);if(c&&t==="length"){const f=Number(i);o.forEach((h,d)=>{(d==="length"||d===Vr||!di(d)&&d>=f)&&l(h)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),u&&l(o.get(Vr)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Pi)),tr(n)&&l(o.get(Qa)));break;case"delete":c||(l(o.get(Pi)),tr(n)&&l(o.get(Qa)));break;case"set":tr(n)&&l(o.get(Pi));break}}cl()}function Ni(n){const e=nt(n);return e===n?e:(wt(e,"iterate",Vr),cn(n)?e:e.map(Wn))}function hl(n){return wt(n=nt(n),"iterate",Vr),n}function ni(n,e){return fi(n)?nr(n)?Gr(Wn(e)):Gr(e):Wn(e)}const Ih={__proto__:null,[Symbol.iterator](){return da(this,Symbol.iterator,n=>ni(this,n))},concat(...n){return Ni(this).concat(...n.map(e=>Xe(e)?Ni(e):e))},entries(){return da(this,"entries",n=>(n[1]=ni(this,n[1]),n))},every(n,e){return Cn(this,"every",n,e,void 0,arguments)},filter(n,e){return Cn(this,"filter",n,e,t=>t.map(i=>ni(this,i)),arguments)},find(n,e){return Cn(this,"find",n,e,t=>ni(this,t),arguments)},findIndex(n,e){return Cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Cn(this,"findLast",n,e,t=>ni(this,t),arguments)},findLastIndex(n,e){return Cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return pa(this,"includes",n)},indexOf(...n){return pa(this,"indexOf",n)},join(n){return Ni(this).join(n)},lastIndexOf(...n){return pa(this,"lastIndexOf",n)},map(n,e){return Cn(this,"map",n,e,void 0,arguments)},pop(){return xr(this,"pop")},push(...n){return xr(this,"push",n)},reduce(n,...e){return $l(this,"reduce",n,e)},reduceRight(n,...e){return $l(this,"reduceRight",n,e)},shift(){return xr(this,"shift")},some(n,e){return Cn(this,"some",n,e,void 0,arguments)},splice(...n){return xr(this,"splice",n)},toReversed(){return Ni(this).toReversed()},toSorted(n){return Ni(this).toSorted(n)},toSpliced(...n){return Ni(this).toSpliced(...n)},unshift(...n){return xr(this,"unshift",n)},values(){return da(this,"values",n=>ni(this,n))}};function da(n,e,t){const i=hl(n),r=i[e]();return i!==n&&!cn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Uh=Array.prototype;function Cn(n,e,t,i,r,s){const o=hl(n),l=o!==n&&!cn(n),c=o[e];if(c!==Uh[e]){const h=c.apply(n,s);return l?Wn(h):h}let u=t;o!==n&&(l?u=function(h,d){return t.call(this,ni(n,h),d,n)}:t.length>2&&(u=function(h,d){return t.call(this,h,d,n)}));const f=c.call(o,u,i);return l&&r?r(f):f}function $l(n,e,t,i){const r=hl(n);let s=t;return r!==n&&(cn(n)?t.length>3&&(s=function(o,l,c){return t.call(this,o,l,c,n)}):s=function(o,l,c){return t.call(this,o,ni(n,l),c,n)}),r[e](s,...i)}function pa(n,e,t){const i=nt(n);wt(i,"iterate",Vr);const r=i[e](...t);return(r===-1||r===!1)&&gl(t[0])?(t[0]=nt(t[0]),i[e](...t)):r}function xr(n,e,t=[]){Hn(),ll();const i=nt(n)[e].apply(n,t);return cl(),kn(),i}const Nh=nl("__proto__,__v_isRef,__isVue"),zu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(di));function Fh(n){di(n)||(n=String(n));const e=nt(this);return wt(e,"has",n),e.hasOwnProperty(n)}class Vu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?qh:Wu:s?ku:Hu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!r){let c;if(o&&(c=Ih[t]))return c;if(t==="hasOwnProperty")return Fh}const l=Reflect.get(e,t,Ct(e)?e:i);if((di(t)?zu.has(t):Nh(t))||(r||wt(e,"get",t),s))return l;if(Ct(l)){const c=o&&sl(t)?l:l.value;return r&&pt(c)?to(c):c}return pt(l)?r?to(l):pl(l):l}}class Gu extends Vu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Xe(e)&&sl(t);if(!this._isShallow){const u=fi(s);if(!cn(i)&&!fi(i)&&(s=nt(s),i=nt(i)),!o&&Ct(s)&&!Ct(i))return u||(s.value=i),!0}const l=o?Number(t)<e.length:it(e,t),c=Reflect.set(e,t,i,Ct(e)?e:r);return e===nt(r)&&(l?li(i,s)&&Fn(e,"set",t,i):Fn(e,"add",t,i)),c}deleteProperty(e,t){const i=it(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Fn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!di(t)||!zu.has(t))&&wt(e,"has",t),i}ownKeys(e){return wt(e,"iterate",Xe(e)?"length":Pi),Reflect.ownKeys(e)}}class Oh extends Vu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Bh=new Gu,zh=new Oh,Vh=new Gu(!0);const eo=n=>n,ns=n=>Reflect.getPrototypeOf(n);function Gh(n,e,t){return function(...i){const r=this.__v_raw,s=nt(r),o=tr(s),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=r[n](...i),f=t?eo:e?Gr:Wn;return!e&&wt(s,"iterate",c?Qa:Pi),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:l?[f(h[0]),f(h[1])]:f(h),done:d}},[Symbol.iterator](){return this}}}}function is(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Hh(n,e){const t={get(r){const s=this.__v_raw,o=nt(s),l=nt(r);n||(li(r,l)&&wt(o,"get",r),wt(o,"get",l));const{has:c}=ns(o),u=e?eo:n?Gr:Wn;if(c.call(o,r))return u(s.get(r));if(c.call(o,l))return u(s.get(l));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&wt(nt(r),"iterate",Pi),r.size},has(r){const s=this.__v_raw,o=nt(s),l=nt(r);return n||(li(r,l)&&wt(o,"has",r),wt(o,"has",l)),r===l?s.has(r):s.has(r)||s.has(l)},forEach(r,s){const o=this,l=o.__v_raw,c=nt(l),u=e?eo:n?Gr:Wn;return!n&&wt(c,"iterate",Pi),l.forEach((f,h)=>r.call(s,u(f),u(h),o))}};return Bt(t,n?{add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear")}:{add(r){!e&&!cn(r)&&!fi(r)&&(r=nt(r));const s=nt(this);return ns(s).has.call(s,r)||(s.add(r),Fn(s,"add",r,r)),this},set(r,s){!e&&!cn(s)&&!fi(s)&&(s=nt(s));const o=nt(this),{has:l,get:c}=ns(o);let u=l.call(o,r);u||(r=nt(r),u=l.call(o,r));const f=c.call(o,r);return o.set(r,s),u?li(s,f)&&Fn(o,"set",r,s):Fn(o,"add",r,s),this},delete(r){const s=nt(this),{has:o,get:l}=ns(s);let c=o.call(s,r);c||(r=nt(r),c=o.call(s,r)),l&&l.call(s,r);const u=s.delete(r);return c&&Fn(s,"delete",r,void 0),u},clear(){const r=nt(this),s=r.size!==0,o=r.clear();return s&&Fn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Gh(r,n,e)}),t}function dl(n,e){const t=Hh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(it(t,r)&&r in i?t:i,r,s)}const kh={get:dl(!1,!1)},Wh={get:dl(!1,!0)},Xh={get:dl(!0,!1)};const Hu=new WeakMap,ku=new WeakMap,Wu=new WeakMap,qh=new WeakMap;function Yh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $h(n){return n.__v_skip||!Object.isExtensible(n)?0:Yh(vh(n))}function pl(n){return fi(n)?n:ml(n,!1,Bh,kh,Hu)}function Kh(n){return ml(n,!1,Vh,Wh,ku)}function to(n){return ml(n,!0,zh,Xh,Wu)}function ml(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=$h(n);if(s===0)return n;const o=r.get(n);if(o)return o;const l=new Proxy(n,s===2?i:t);return r.set(n,l),l}function nr(n){return fi(n)?nr(n.__v_raw):!!(n&&n.__v_isReactive)}function fi(n){return!!(n&&n.__v_isReadonly)}function cn(n){return!!(n&&n.__v_isShallow)}function gl(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function Xu(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&Au(n,"__v_skip",!0),n}const Wn=n=>pt(n)?pl(n):n,Gr=n=>pt(n)?to(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function Qi(n){return jh(n,!1)}function jh(n,e){return Ct(n)?n:new Zh(n,e)}class Zh{constructor(e,t){this.dep=new fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:Wn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||cn(e)||fi(e);e=i?e:nt(e),li(e,t)&&(this._rawValue=e,this._value=i?e:Wn(e),this.dep.trigger())}}function ji(n){return Ct(n)?n.value:n}const Jh={get:(n,e,t)=>e==="__v_raw"?n:ji(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ct(r)&&!Ct(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function qu(n){return nr(n)?n:new Proxy(n,Jh)}class Qh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return Iu(this,!0),!0}get value(){const e=this.dep.track();return Fu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ed(n,e,t=!1){let i,r;return Ye(n)?i=n:(i=n.get,r=n.set),new Qh(i,r,t)}const rs={},Bs=new WeakMap;let bi;function td(n,e=!1,t=bi){if(t){let i=Bs.get(t);i||Bs.set(t,i=[]),i.push(n)}}function nd(n,e,t=dt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:l,call:c}=t,u=T=>r?T:cn(T)||r===!1||r===0?si(T,1):si(T);let f,h,d,g,x=!1,M=!1;if(Ct(n)?(h=()=>n.value,x=cn(n)):nr(n)?(h=()=>u(n),x=!0):Xe(n)?(M=!0,x=n.some(T=>nr(T)||cn(T)),h=()=>n.map(T=>{if(Ct(T))return T.value;if(nr(T))return u(T);if(Ye(T))return c?c(T,2):T()})):Ye(n)?e?h=c?()=>c(n,2):n:h=()=>{if(d){Hn();try{d()}finally{kn()}}const T=bi;bi=f;try{return c?c(n,3,[g]):n(g)}finally{bi=T}}:h=Sn,e&&r){const T=h,C=r===!0?1/0:r;h=()=>si(T(),C)}const _=Ph(),p=()=>{f.stop(),_&&_.active&&rl(_.effects,f)};if(s&&e){const T=e;e=(...C)=>{T(...C),p()}}let A=M?new Array(n.length).fill(rs):rs;const w=T=>{if(!(!(f.flags&1)||!f.dirty&&!T))if(e){const C=f.run();if(r||x||(M?C.some((L,I)=>li(L,A[I])):li(C,A))){d&&d();const L=bi;bi=f;try{const I=[C,A===rs?void 0:M&&A[0]===rs?[]:A,g];A=C,c?c(e,3,I):e(...I)}finally{bi=L}}}else f.run()};return l&&l(w),f=new Du(h),f.scheduler=o?()=>o(w,!1):w,g=T=>td(T,!1,f),d=f.onStop=()=>{const T=Bs.get(f);if(T){if(c)c(T,4);else for(const C of T)C();Bs.delete(f)}},e?i?w(!0):A=f.run():o?o(w.bind(null,!0),!0):f.run(),p.pause=f.pause.bind(f),p.resume=f.resume.bind(f),p.stop=p,p}function si(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ct(n))si(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)si(n[i],e,t);else if(Mu(n)||tr(n))n.forEach(i=>{si(i,e,t)});else if(bu(n)){for(const i in n)si(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&si(n[i],e,t)}return n}function jr(n,e,t,i){try{return i?n(...i):n()}catch(r){Js(r,e,t)}}function bn(n,e,t,i){if(Ye(n)){const r=jr(n,e,t,i);return r&&Eu(r)&&r.catch(s=>{Js(s,e,t)}),r}if(Xe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(bn(n[s],e,t,i));return r}}function Js(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](n,c,u)===!1)return}l=l.parent}if(s){Hn(),jr(s,null,10,[n,c,u]),kn();return}}id(n,t,r,i,o)}function id(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Nt=[];let dn=-1;const ir=[];let ii=null,Zi=0;const Yu=Promise.resolve();let zs=null;function rd(n){const e=zs||Yu;return n?e.then(this?n.bind(this):n):e}function sd(n){let e=dn+1,t=Nt.length;for(;e<t;){const i=e+t>>>1,r=Nt[i],s=Hr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function _l(n){if(!(n.flags&1)){const e=Hr(n),t=Nt[Nt.length-1];!t||!(n.flags&2)&&e>=Hr(t)?Nt.push(n):Nt.splice(sd(e),0,n),n.flags|=1,$u()}}function $u(){zs||(zs=Yu.then(ju))}function ad(n){Xe(n)?ir.push(...n):ii&&n.id===-1?ii.splice(Zi+1,0,n):n.flags&1||(ir.push(n),n.flags|=1),$u()}function Kl(n,e,t=dn+1){for(;t<Nt.length;t++){const i=Nt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Nt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ku(n){if(ir.length){const e=[...new Set(ir)].sort((t,i)=>Hr(t)-Hr(i));if(ir.length=0,ii){ii.push(...e);return}for(ii=e,Zi=0;Zi<ii.length;Zi++){const t=ii[Zi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ii=null,Zi=0}}const Hr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ju(n){try{for(dn=0;dn<Nt.length;dn++){const e=Nt[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<Nt.length;dn++){const e=Nt[dn];e&&(e.flags&=-2)}dn=-1,Nt.length=0,Ku(),zs=null,(Nt.length||ir.length)&&ju()}}let _n=null,Zu=null;function Vs(n){const e=_n;return _n=n,Zu=n&&n.type.__scopeId||null,e}function od(n,e=_n,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&sc(-1);const s=Vs(e);let o;try{o=n(...r)}finally{Vs(s),i._d&&sc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function gi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];s&&(l.oldValue=s[o].value);let c=l.dir[i];c&&(Hn(),bn(c,t,8,[n.el,l,n,e]),kn())}}function ld(n,e){if(Ft){let t=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===t&&(t=Ft.provides=Object.create(i)),t[n]=e}}function ws(n,e,t=!1){const i=ap();if(i||rr){let r=rr?rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const cd=Symbol.for("v-scx"),ud=()=>ws(cd);function ma(n,e,t){return Ju(n,e,t)}function Ju(n,e,t=dt){const{immediate:i,deep:r,flush:s,once:o}=t,l=Bt({},t),c=e&&i||!e&&s!=="post";let u;if(Wr){if(s==="sync"){const g=ud();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Sn,g.resume=Sn,g.pause=Sn,g}}const f=Ft;l.call=(g,x,M)=>bn(g,f,x,M);let h=!1;s==="post"?l.scheduler=g=>{Kt(g,f&&f.suspense)}:s!=="sync"&&(h=!0,l.scheduler=(g,x)=>{x?g():_l(g)}),l.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const d=nd(n,e,l);return Wr&&(u?u.push(d):c&&d()),d}function fd(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?Qu(i,n):()=>i[n]:n.bind(i,i);let s;Ye(e)?s=e:(s=e.handler,t=e);const o=Zr(this),l=Ju(r,s.bind(i),t);return o(),l}function Qu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const hd=Symbol("_vte"),dd=n=>n.__isTeleport,pd=Symbol("_leaveCb");function xl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,xl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ef(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Gs=new WeakMap;function Ir(n,e,t,i,r=!1){if(Xe(n)){n.forEach((x,M)=>Ir(x,e&&(Xe(e)?e[M]:e),t,i,r));return}if(Ur(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ir(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?El(i.component):i.el,o=r?null:s,{i:l,r:c}=n,u=e&&e.r,f=l.refs===dt?l.refs={}:l.refs,h=l.setupState,d=nt(h),g=h===dt?Su:x=>it(d,x);if(u!=null&&u!==c){if(jl(e),St(u))f[u]=null,g(u)&&(h[u]=null);else if(Ct(u)){u.value=null;const x=e;x.k&&(f[x.k]=null)}}if(Ye(c))jr(c,l,12,[o,f]);else{const x=St(c),M=Ct(c);if(x||M){const _=()=>{if(n.f){const p=x?g(c)?h[c]:f[c]:c.value;if(r)Xe(p)&&rl(p,s);else if(Xe(p))p.includes(s)||p.push(s);else if(x)f[c]=[s],g(c)&&(h[c]=f[c]);else{const A=[s];c.value=A,n.k&&(f[n.k]=A)}}else x?(f[c]=o,g(c)&&(h[c]=o)):M&&(c.value=o,n.k&&(f[n.k]=o))};if(o){const p=()=>{_(),Gs.delete(n)};p.id=-1,Gs.set(n,p),Kt(p,t)}else jl(n),_()}}}function jl(n){const e=Gs.get(n);e&&(e.flags|=8,Gs.delete(n))}Zs().requestIdleCallback;Zs().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,tf=n=>n.type.__isKeepAlive;function md(n,e){nf(n,"a",e)}function gd(n,e){nf(n,"da",e)}function nf(n,e,t=Ft){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Qs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)tf(r.parent.vnode)&&_d(i,e,t,r),r=r.parent}}function _d(n,e,t,i){const r=Qs(e,n,i,!0);af(()=>{rl(i[e],r)},t)}function Qs(n,e,t=Ft,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Hn();const l=Zr(t),c=bn(e,t,n,o);return l(),kn(),c});return i?r.unshift(s):r.push(s),s}}const $n=n=>(e,t=Ft)=>{(!Wr||n==="sp")&&Qs(n,(...i)=>e(...i),t)},xd=$n("bm"),rf=$n("m"),vd=$n("bu"),Sd=$n("u"),sf=$n("bum"),af=$n("um"),Md=$n("sp"),Ed=$n("rtg"),yd=$n("rtc");function bd(n,e=Ft){Qs("ec",n,e)}const Td=Symbol.for("v-ndc"),no=n=>n?Tf(n)?El(n):no(n.parent):null,Nr=Bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>no(n.parent),$root:n=>no(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>lf(n),$forceUpdate:n=>n.f||(n.f=()=>{_l(n.update)}),$nextTick:n=>n.n||(n.n=rd.bind(n.proxy)),$watch:n=>fd.bind(n)}),ga=(n,e)=>n!==dt&&!n.__isScriptSetup&&it(n,e),Ad={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:l,appContext:c}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ga(i,e))return o[e]=1,i[e];if(r!==dt&&it(r,e))return o[e]=2,r[e];if(it(s,e))return o[e]=3,s[e];if(t!==dt&&it(t,e))return o[e]=4,t[e];io&&(o[e]=0)}}const u=Nr[e];let f,h;if(u)return e==="$attrs"&&wt(n.attrs,"get",""),u(n);if((f=l.__cssModules)&&(f=f[e]))return f;if(t!==dt&&it(t,e))return o[e]=4,t[e];if(h=c.config.globalProperties,it(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ga(r,e)?(r[e]=t,!0):i!==dt&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},l){let c;return!!(t[l]||n!==dt&&l[0]!=="$"&&it(n,l)||ga(e,l)||it(s,l)||it(i,l)||it(Nr,l)||it(r.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Zl(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let io=!0;function wd(n){const e=lf(n),t=n.proxy,i=n.ctx;io=!1,e.beforeCreate&&Jl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:h,mounted:d,beforeUpdate:g,updated:x,activated:M,deactivated:_,beforeDestroy:p,beforeUnmount:A,destroyed:w,unmounted:T,render:C,renderTracked:L,renderTriggered:I,errorCaptured:G,serverPrefetch:E,expose:y,inheritAttrs:U,components:K,directives:W,filters:re}=e;if(u&&Rd(u,i,null),o)for(const O in o){const J=o[O];Ye(J)&&(i[O]=J.bind(t))}if(r){const O=r.call(t,t);pt(O)&&(n.data=pl(O))}if(io=!0,s)for(const O in s){const J=s[O],pe=Ye(J)?J.bind(t,t):Ye(J.get)?J.get.bind(t,t):Sn,de=!Ye(J)&&Ye(J.set)?J.set.bind(t):Sn,_e=hp({get:pe,set:de});Object.defineProperty(i,O,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Oe=>_e.value=Oe})}if(l)for(const O in l)of(l[O],i,t,O);if(c){const O=Ye(c)?c.call(t):c;Reflect.ownKeys(O).forEach(J=>{ld(J,O[J])})}f&&Jl(f,n,"c");function Y(O,J){Xe(J)?J.forEach(pe=>O(pe.bind(t))):J&&O(J.bind(t))}if(Y(xd,h),Y(rf,d),Y(vd,g),Y(Sd,x),Y(md,M),Y(gd,_),Y(bd,G),Y(yd,L),Y(Ed,I),Y(sf,A),Y(af,T),Y(Md,E),Xe(y))if(y.length){const O=n.exposed||(n.exposed={});y.forEach(J=>{Object.defineProperty(O,J,{get:()=>t[J],set:pe=>t[J]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Sn&&(n.render=C),U!=null&&(n.inheritAttrs=U),K&&(n.components=K),W&&(n.directives=W),E&&ef(n)}function Rd(n,e,t=Sn){Xe(n)&&(n=ro(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=ws(r.from||i,r.default,!0):s=ws(r.from||i):s=ws(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Jl(n,e,t){bn(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function of(n,e,t,i){let r=i.includes(".")?Qu(t,i):()=>t[i];if(St(n)){const s=e[n];Ye(s)&&ma(r,s)}else if(Ye(n))ma(r,n.bind(t));else if(pt(n))if(Xe(n))n.forEach(s=>of(s,e,t,i));else{const s=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(s)&&ma(r,s,n)}}function lf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,l=s.get(e);let c;return l?c=l:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(u=>Hs(c,u,o,!0)),Hs(c,e,o)),pt(e)&&s.set(e,c),c}function Hs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Hs(n,s,t,!0),r&&r.forEach(o=>Hs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const l=Cd[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const Cd={data:Ql,props:ec,emits:ec,methods:Ar,computed:Ar,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Ar,directives:Ar,watch:Dd,provide:Ql,inject:Pd};function Ql(n,e){return e?n?function(){return Bt(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function Pd(n,e){return Ar(ro(n),ro(e))}function ro(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Lt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ar(n,e){return n?Bt(Object.create(null),n,e):e}function ec(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:Bt(Object.create(null),Zl(n),Zl(e??{})):e}function Dd(n,e){if(!n)return e;if(!e)return n;const t=Bt(Object.create(null),n);for(const i in e)t[i]=Lt(n[i],e[i]);return t}function cf(){return{app:null,config:{isNativeTag:Su,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ld=0;function Id(n,e){return function(i,r=null){Ye(i)||(i=Bt({},i)),r!=null&&!pt(r)&&(r=null);const s=cf(),o=new WeakSet,l=[];let c=!1;const u=s.app={_uid:Ld++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:dp,get config(){return s.config},set config(f){},use(f,...h){return o.has(f)||(f&&Ye(f.install)?(o.add(f),f.install(u,...h)):Ye(f)&&(o.add(f),f(u,...h))),u},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),u},component(f,h){return h?(s.components[f]=h,u):s.components[f]},directive(f,h){return h?(s.directives[f]=h,u):s.directives[f]},mount(f,h,d){if(!c){const g=u._ceVNode||ci(i,r);return g.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(g,f,d),c=!0,u._container=f,f.__vue_app__=u,El(g.component)}},onUnmount(f){l.push(f)},unmount(){c&&(bn(l,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(f,h){return s.provides[f]=h,u},runWithContext(f){const h=rr;rr=u;try{return f()}finally{rr=h}}};return u}}let rr=null;const Ud=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ui(e)}Modifiers`]||n[`${Ii(e)}Modifiers`];function Nd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let r=t;const s=e.startsWith("update:"),o=s&&Ud(i,e.slice(7));o&&(o.trim&&(r=t.map(f=>St(f)?f.trim():f)),o.number&&(r=t.map(Eh)));let l,c=i[l=ca(e)]||i[l=ca(ui(e))];!c&&s&&(c=i[l=ca(Ii(e))]),c&&bn(c,n,6,r);const u=i[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,bn(u,n,6,r)}}const Fd=new WeakMap;function uf(n,e,t=!1){const i=t?Fd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},l=!1;if(!Ye(n)){const c=u=>{const f=uf(u,e,!0);f&&(l=!0,Bt(o,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!l?(pt(n)&&i.set(n,null),null):(Xe(s)?s.forEach(c=>o[c]=null):Bt(o,s),pt(n)&&i.set(n,o),o)}function ea(n,e){return!n||!$s(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,Ii(e))||it(n,e))}function tc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:h,data:d,setupState:g,ctx:x,inheritAttrs:M}=n,_=Vs(n);let p,A;try{if(t.shapeFlag&4){const T=r||i,C=T;p=mn(u.call(C,T,f,h,g,d,x)),A=l}else{const T=e;p=mn(T.length>1?T(h,{attrs:l,slots:o,emit:c}):T(h,null)),A=e.props?l:Od(l)}}catch(T){Fr.length=0,Js(T,n,1),p=ci(or)}let w=p;if(A&&M!==!1){const T=Object.keys(A),{shapeFlag:C}=w;T.length&&C&7&&(s&&T.some(il)&&(A=Bd(A,s)),w=lr(w,A,!1,!0))}return t.dirs&&(w=lr(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&xl(w,t.transition),p=w,Vs(_),p}const Od=n=>{let e;for(const t in n)(t==="class"||t==="style"||$s(t))&&((e||(e={}))[t]=n[t]);return e},Bd=(n,e)=>{const t={};for(const i in n)(!il(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function zd(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:l,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?nc(i,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const d=f[h];if(o[d]!==i[d]&&!ea(u,d))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?nc(i,o,u):!0:!!o;return!1}function nc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ea(t,s))return!0}return!1}function Vd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ff={},hf=()=>Object.create(ff),df=n=>Object.getPrototypeOf(n)===ff;function Gd(n,e,t,i=!1){const r={},s=hf();n.propsDefaults=Object.create(null),pf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Kh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Hd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,l=nt(r),[c]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=n.vnode.dynamicProps;for(let h=0;h<f.length;h++){let d=f[h];if(ea(n.emitsOptions,d))continue;const g=e[d];if(c)if(it(s,d))g!==s[d]&&(s[d]=g,u=!0);else{const x=ui(d);r[x]=so(c,l,x,g,n,!1)}else g!==s[d]&&(s[d]=g,u=!0)}}}else{pf(n,e,r,s)&&(u=!0);let f;for(const h in l)(!e||!it(e,h)&&((f=Ii(h))===h||!it(e,f)))&&(c?t&&(t[h]!==void 0||t[f]!==void 0)&&(r[h]=so(c,l,h,void 0,n,!0)):delete r[h]);if(s!==l)for(const h in s)(!e||!it(e,h))&&(delete s[h],u=!0)}u&&Fn(n.attrs,"set","")}function pf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(Pr(c))continue;const u=e[c];let f;r&&it(r,f=ui(c))?!s||!s.includes(f)?t[f]=u:(l||(l={}))[f]=u:ea(n.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(s){const c=nt(t),u=l||dt;for(let f=0;f<s.length;f++){const h=s[f];t[h]=so(r,c,h,u[h],n,!it(u,h))}}return o}function so(n,e,t,i,r,s){const o=n[t];if(o!=null){const l=it(o,"default");if(l&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(c)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const f=Zr(r);i=u[t]=c.call(null,e),f()}}else i=c;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!l?i=!1:o[1]&&(i===""||i===Ii(t))&&(i=!0))}return i}const kd=new WeakMap;function mf(n,e,t=!1){const i=t?kd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},l=[];let c=!1;if(!Ye(n)){const f=h=>{c=!0;const[d,g]=mf(h,e,!0);Bt(o,d),g&&l.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!s&&!c)return pt(n)&&i.set(n,er),er;if(Xe(s))for(let f=0;f<s.length;f++){const h=ui(s[f]);ic(h)&&(o[h]=dt)}else if(s)for(const f in s){const h=ui(f);if(ic(h)){const d=s[f],g=o[h]=Xe(d)||Ye(d)?{type:d}:Bt({},d),x=g.type;let M=!1,_=!0;if(Xe(x))for(let p=0;p<x.length;++p){const A=x[p],w=Ye(A)&&A.name;if(w==="Boolean"){M=!0;break}else w==="String"&&(_=!1)}else M=Ye(x)&&x.name==="Boolean";g[0]=M,g[1]=_,(M||it(g,"default"))&&l.push(h)}}const u=[o,l];return pt(n)&&i.set(n,u),u}function ic(n){return n[0]!=="$"&&!Pr(n)}const vl=n=>n==="_"||n==="_ctx"||n==="$stable",Sl=n=>Xe(n)?n.map(mn):[mn(n)],Wd=(n,e,t)=>{if(e._n)return e;const i=od((...r)=>Sl(e(...r)),t);return i._c=!1,i},gf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(vl(r))continue;const s=n[r];if(Ye(s))e[r]=Wd(r,s,i);else if(s!=null){const o=Sl(s);e[r]=()=>o}}},_f=(n,e)=>{const t=Sl(e);n.slots.default=()=>t},xf=(n,e,t)=>{for(const i in e)(t||!vl(i))&&(n[i]=e[i])},Xd=(n,e,t)=>{const i=n.slots=hf();if(n.vnode.shapeFlag&32){const r=e._;r?(xf(i,e,t),t&&Au(i,"_",r,!0)):gf(e,i)}else e&&_f(n,e)},qd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=dt;if(i.shapeFlag&32){const l=e._;l?t&&l===1?s=!1:xf(r,e,t):(s=!e.$stable,gf(e,r)),o=e}else e&&(_f(n,e),o={default:1});if(s)for(const l in r)!vl(l)&&o[l]==null&&delete r[l]},Kt=Zd;function Yd(n){return $d(n)}function $d(n,e){const t=Zs();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:h,nextSibling:d,setScopeId:g=Sn,insertStaticContent:x}=n,M=(R,D,V,ee=null,$=null,ne=null,b=void 0,le=null,se=!!D.dynamicChildren)=>{if(R===D)return;R&&!vr(R,D)&&(ee=ie(R),Oe(R,$,ne,!0),R=null),D.patchFlag===-2&&(se=!1,D.dynamicChildren=null);const{type:Q,ref:ae,shapeFlag:v}=D;switch(Q){case ta:_(R,D,V,ee);break;case or:p(R,D,V,ee);break;case xa:R==null&&A(D,V,ee,b);break;case pn:K(R,D,V,ee,$,ne,b,le,se);break;default:v&1?C(R,D,V,ee,$,ne,b,le,se):v&6?W(R,D,V,ee,$,ne,b,le,se):(v&64||v&128)&&Q.process(R,D,V,ee,$,ne,b,le,se,Ce)}ae!=null&&$?Ir(ae,R&&R.ref,ne,D||R,!D):ae==null&&R&&R.ref!=null&&Ir(R.ref,null,ne,R,!0)},_=(R,D,V,ee)=>{if(R==null)i(D.el=l(D.children),V,ee);else{const $=D.el=R.el;D.children!==R.children&&u($,D.children)}},p=(R,D,V,ee)=>{R==null?i(D.el=c(D.children||""),V,ee):D.el=R.el},A=(R,D,V,ee)=>{[R.el,R.anchor]=x(R.children,D,V,ee,R.el,R.anchor)},w=({el:R,anchor:D},V,ee)=>{let $;for(;R&&R!==D;)$=d(R),i(R,V,ee),R=$;i(D,V,ee)},T=({el:R,anchor:D})=>{let V;for(;R&&R!==D;)V=d(R),r(R),R=V;r(D)},C=(R,D,V,ee,$,ne,b,le,se)=>{if(D.type==="svg"?b="svg":D.type==="math"&&(b="mathml"),R==null)L(D,V,ee,$,ne,b,le,se);else{const Q=R.el&&R.el._isVueCE?R.el:null;try{Q&&Q._beginPatch(),E(R,D,$,ne,b,le,se)}finally{Q&&Q._endPatch()}}},L=(R,D,V,ee,$,ne,b,le)=>{let se,Q;const{props:ae,shapeFlag:v,transition:m,dirs:P}=R;if(se=R.el=o(R.type,ne,ae&&ae.is,ae),v&8?f(se,R.children):v&16&&G(R.children,se,null,ee,$,_a(R,ne),b,le),P&&gi(R,null,ee,"created"),I(se,R,R.scopeId,b,ee),ae){for(const Z in ae)Z!=="value"&&!Pr(Z)&&s(se,Z,null,ae[Z],ne,ee);"value"in ae&&s(se,"value",null,ae.value,ne),(Q=ae.onVnodeBeforeMount)&&fn(Q,ee,R)}P&&gi(R,null,ee,"beforeMount");const H=Kd($,m);H&&m.beforeEnter(se),i(se,D,V),((Q=ae&&ae.onVnodeMounted)||H||P)&&Kt(()=>{Q&&fn(Q,ee,R),H&&m.enter(se),P&&gi(R,null,ee,"mounted")},$)},I=(R,D,V,ee,$)=>{if(V&&g(R,V),ee)for(let ne=0;ne<ee.length;ne++)g(R,ee[ne]);if($){let ne=$.subTree;if(D===ne||Ef(ne.type)&&(ne.ssContent===D||ne.ssFallback===D)){const b=$.vnode;I(R,b,b.scopeId,b.slotScopeIds,$.parent)}}},G=(R,D,V,ee,$,ne,b,le,se=0)=>{for(let Q=se;Q<R.length;Q++){const ae=R[Q]=le?ri(R[Q]):mn(R[Q]);M(null,ae,D,V,ee,$,ne,b,le)}},E=(R,D,V,ee,$,ne,b)=>{const le=D.el=R.el;let{patchFlag:se,dynamicChildren:Q,dirs:ae}=D;se|=R.patchFlag&16;const v=R.props||dt,m=D.props||dt;let P;if(V&&_i(V,!1),(P=m.onVnodeBeforeUpdate)&&fn(P,V,D,R),ae&&gi(D,R,V,"beforeUpdate"),V&&_i(V,!0),(v.innerHTML&&m.innerHTML==null||v.textContent&&m.textContent==null)&&f(le,""),Q?y(R.dynamicChildren,Q,le,V,ee,_a(D,$),ne):b||J(R,D,le,null,V,ee,_a(D,$),ne,!1),se>0){if(se&16)U(le,v,m,V,$);else if(se&2&&v.class!==m.class&&s(le,"class",null,m.class,$),se&4&&s(le,"style",v.style,m.style,$),se&8){const H=D.dynamicProps;for(let Z=0;Z<H.length;Z++){const z=H[Z],ye=v[z],ue=m[z];(ue!==ye||z==="value")&&s(le,z,ye,ue,$,V)}}se&1&&R.children!==D.children&&f(le,D.children)}else!b&&Q==null&&U(le,v,m,V,$);((P=m.onVnodeUpdated)||ae)&&Kt(()=>{P&&fn(P,V,D,R),ae&&gi(D,R,V,"updated")},ee)},y=(R,D,V,ee,$,ne,b)=>{for(let le=0;le<D.length;le++){const se=R[le],Q=D[le],ae=se.el&&(se.type===pn||!vr(se,Q)||se.shapeFlag&198)?h(se.el):V;M(se,Q,ae,null,ee,$,ne,b,!0)}},U=(R,D,V,ee,$)=>{if(D!==V){if(D!==dt)for(const ne in D)!Pr(ne)&&!(ne in V)&&s(R,ne,D[ne],null,$,ee);for(const ne in V){if(Pr(ne))continue;const b=V[ne],le=D[ne];b!==le&&ne!=="value"&&s(R,ne,le,b,$,ee)}"value"in V&&s(R,"value",D.value,V.value,$)}},K=(R,D,V,ee,$,ne,b,le,se)=>{const Q=D.el=R?R.el:l(""),ae=D.anchor=R?R.anchor:l("");let{patchFlag:v,dynamicChildren:m,slotScopeIds:P}=D;P&&(le=le?le.concat(P):P),R==null?(i(Q,V,ee),i(ae,V,ee),G(D.children||[],V,ae,$,ne,b,le,se)):v>0&&v&64&&m&&R.dynamicChildren&&R.dynamicChildren.length===m.length?(y(R.dynamicChildren,m,V,$,ne,b,le),(D.key!=null||$&&D===$.subTree)&&vf(R,D,!0)):J(R,D,V,ae,$,ne,b,le,se)},W=(R,D,V,ee,$,ne,b,le,se)=>{D.slotScopeIds=le,R==null?D.shapeFlag&512?$.ctx.activate(D,V,ee,b,se):re(D,V,ee,$,ne,b,se):te(R,D,se)},re=(R,D,V,ee,$,ne,b)=>{const le=R.component=sp(R,ee,$);if(tf(R)&&(le.ctx.renderer=Ce),op(le,!1,b),le.asyncDep){if($&&$.registerDep(le,Y,b),!R.el){const se=le.subTree=ci(or);p(null,se,D,V),R.placeholder=se.el}}else Y(le,R,D,V,$,ne,b)},te=(R,D,V)=>{const ee=D.component=R.component;if(zd(R,D,V))if(ee.asyncDep&&!ee.asyncResolved){O(ee,D,V);return}else ee.next=D,ee.update();else D.el=R.el,ee.vnode=D},Y=(R,D,V,ee,$,ne,b)=>{const le=()=>{if(R.isMounted){let{next:v,bu:m,u:P,parent:H,vnode:Z}=R;{const Ie=Sf(R);if(Ie){v&&(v.el=Z.el,O(R,v,b)),Ie.asyncDep.then(()=>{R.isUnmounted||le()});return}}let z=v,ye;_i(R,!1),v?(v.el=Z.el,O(R,v,b)):v=Z,m&&ua(m),(ye=v.props&&v.props.onVnodeBeforeUpdate)&&fn(ye,H,v,Z),_i(R,!0);const ue=tc(R),we=R.subTree;R.subTree=ue,M(we,ue,h(we.el),ie(we),R,$,ne),v.el=ue.el,z===null&&Vd(R,ue.el),P&&Kt(P,$),(ye=v.props&&v.props.onVnodeUpdated)&&Kt(()=>fn(ye,H,v,Z),$)}else{let v;const{el:m,props:P}=D,{bm:H,m:Z,parent:z,root:ye,type:ue}=R,we=Ur(D);_i(R,!1),H&&ua(H),!we&&(v=P&&P.onVnodeBeforeMount)&&fn(v,z,D),_i(R,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(ue);const Ie=R.subTree=tc(R);M(null,Ie,V,ee,R,$,ne),D.el=Ie.el}if(Z&&Kt(Z,$),!we&&(v=P&&P.onVnodeMounted)){const Ie=D;Kt(()=>fn(v,z,Ie),$)}(D.shapeFlag&256||z&&Ur(z.vnode)&&z.vnode.shapeFlag&256)&&R.a&&Kt(R.a,$),R.isMounted=!0,D=V=ee=null}};R.scope.on();const se=R.effect=new Du(le);R.scope.off();const Q=R.update=se.run.bind(se),ae=R.job=se.runIfDirty.bind(se);ae.i=R,ae.id=R.uid,se.scheduler=()=>_l(ae),_i(R,!0),Q()},O=(R,D,V)=>{D.component=R;const ee=R.vnode.props;R.vnode=D,R.next=null,Hd(R,D.props,ee,V),qd(R,D.children,V),Hn(),Kl(R),kn()},J=(R,D,V,ee,$,ne,b,le,se=!1)=>{const Q=R&&R.children,ae=R?R.shapeFlag:0,v=D.children,{patchFlag:m,shapeFlag:P}=D;if(m>0){if(m&128){de(Q,v,V,ee,$,ne,b,le,se);return}else if(m&256){pe(Q,v,V,ee,$,ne,b,le,se);return}}P&8?(ae&16&&j(Q,$,ne),v!==Q&&f(V,v)):ae&16?P&16?de(Q,v,V,ee,$,ne,b,le,se):j(Q,$,ne,!0):(ae&8&&f(V,""),P&16&&G(v,V,ee,$,ne,b,le,se))},pe=(R,D,V,ee,$,ne,b,le,se)=>{R=R||er,D=D||er;const Q=R.length,ae=D.length,v=Math.min(Q,ae);let m;for(m=0;m<v;m++){const P=D[m]=se?ri(D[m]):mn(D[m]);M(R[m],P,V,null,$,ne,b,le,se)}Q>ae?j(R,$,ne,!0,!1,v):G(D,V,ee,$,ne,b,le,se,v)},de=(R,D,V,ee,$,ne,b,le,se)=>{let Q=0;const ae=D.length;let v=R.length-1,m=ae-1;for(;Q<=v&&Q<=m;){const P=R[Q],H=D[Q]=se?ri(D[Q]):mn(D[Q]);if(vr(P,H))M(P,H,V,null,$,ne,b,le,se);else break;Q++}for(;Q<=v&&Q<=m;){const P=R[v],H=D[m]=se?ri(D[m]):mn(D[m]);if(vr(P,H))M(P,H,V,null,$,ne,b,le,se);else break;v--,m--}if(Q>v){if(Q<=m){const P=m+1,H=P<ae?D[P].el:ee;for(;Q<=m;)M(null,D[Q]=se?ri(D[Q]):mn(D[Q]),V,H,$,ne,b,le,se),Q++}}else if(Q>m)for(;Q<=v;)Oe(R[Q],$,ne,!0),Q++;else{const P=Q,H=Q,Z=new Map;for(Q=H;Q<=m;Q++){const ve=D[Q]=se?ri(D[Q]):mn(D[Q]);ve.key!=null&&Z.set(ve.key,Q)}let z,ye=0;const ue=m-H+1;let we=!1,Ie=0;const ce=new Array(ue);for(Q=0;Q<ue;Q++)ce[Q]=0;for(Q=P;Q<=v;Q++){const ve=R[Q];if(ye>=ue){Oe(ve,$,ne,!0);continue}let Re;if(ve.key!=null)Re=Z.get(ve.key);else for(z=H;z<=m;z++)if(ce[z-H]===0&&vr(ve,D[z])){Re=z;break}Re===void 0?Oe(ve,$,ne,!0):(ce[Re-H]=Q+1,Re>=Ie?Ie=Re:we=!0,M(ve,D[Re],V,null,$,ne,b,le,se),ye++)}const ge=we?jd(ce):er;for(z=ge.length-1,Q=ue-1;Q>=0;Q--){const ve=H+Q,Re=D[ve],me=D[ve+1],ke=ve+1<ae?me.el||Mf(me):ee;ce[Q]===0?M(null,Re,V,ke,$,ne,b,le,se):we&&(z<0||Q!==ge[z]?_e(Re,V,ke,2):z--)}}},_e=(R,D,V,ee,$=null)=>{const{el:ne,type:b,transition:le,children:se,shapeFlag:Q}=R;if(Q&6){_e(R.component.subTree,D,V,ee);return}if(Q&128){R.suspense.move(D,V,ee);return}if(Q&64){b.move(R,D,V,Ce);return}if(b===pn){i(ne,D,V);for(let v=0;v<se.length;v++)_e(se[v],D,V,ee);i(R.anchor,D,V);return}if(b===xa){w(R,D,V);return}if(ee!==2&&Q&1&&le)if(ee===0)le.beforeEnter(ne),i(ne,D,V),Kt(()=>le.enter(ne),$);else{const{leave:v,delayLeave:m,afterLeave:P}=le,H=()=>{R.ctx.isUnmounted?r(ne):i(ne,D,V)},Z=()=>{ne._isLeaving&&ne[pd](!0),v(ne,()=>{H(),P&&P()})};m?m(ne,H,Z):Z()}else i(ne,D,V)},Oe=(R,D,V,ee=!1,$=!1)=>{const{type:ne,props:b,ref:le,children:se,dynamicChildren:Q,shapeFlag:ae,patchFlag:v,dirs:m,cacheIndex:P}=R;if(v===-2&&($=!1),le!=null&&(Hn(),Ir(le,null,V,R,!0),kn()),P!=null&&(D.renderCache[P]=void 0),ae&256){D.ctx.deactivate(R);return}const H=ae&1&&m,Z=!Ur(R);let z;if(Z&&(z=b&&b.onVnodeBeforeUnmount)&&fn(z,D,R),ae&6)Ae(R.component,V,ee);else{if(ae&128){R.suspense.unmount(V,ee);return}H&&gi(R,null,D,"beforeUnmount"),ae&64?R.type.remove(R,D,V,Ce,ee):Q&&!Q.hasOnce&&(ne!==pn||v>0&&v&64)?j(Q,D,V,!1,!0):(ne===pn&&v&384||!$&&ae&16)&&j(se,D,V),ee&&Ge(R)}(Z&&(z=b&&b.onVnodeUnmounted)||H)&&Kt(()=>{z&&fn(z,D,R),H&&gi(R,null,D,"unmounted")},V)},Ge=R=>{const{type:D,el:V,anchor:ee,transition:$}=R;if(D===pn){lt(V,ee);return}if(D===xa){T(R);return}const ne=()=>{r(V),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(R.shapeFlag&1&&$&&!$.persisted){const{leave:b,delayLeave:le}=$,se=()=>b(V,ne);le?le(R.el,ne,se):se()}else ne()},lt=(R,D)=>{let V;for(;R!==D;)V=d(R),r(R),R=V;r(D)},Ae=(R,D,V)=>{const{bum:ee,scope:$,job:ne,subTree:b,um:le,m:se,a:Q}=R;rc(se),rc(Q),ee&&ua(ee),$.stop(),ne&&(ne.flags|=8,Oe(b,R,D,V)),le&&Kt(le,D),Kt(()=>{R.isUnmounted=!0},D)},j=(R,D,V,ee=!1,$=!1,ne=0)=>{for(let b=ne;b<R.length;b++)Oe(R[b],D,V,ee,$)},ie=R=>{if(R.shapeFlag&6)return ie(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const D=d(R.anchor||R.el),V=D&&D[hd];return V?d(V):D};let Me=!1;const ze=(R,D,V)=>{let ee;R==null?D._vnode&&(Oe(D._vnode,null,null,!0),ee=D._vnode.component):M(D._vnode||null,R,D,null,null,null,V),D._vnode=R,Me||(Me=!0,Kl(ee),Ku(),Me=!1)},Ce={p:M,um:Oe,m:_e,r:Ge,mt:re,mc:G,pc:J,pbc:y,n:ie,o:n};return{render:ze,hydrate:void 0,createApp:Id(ze)}}function _a({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Kd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function vf(n,e,t=!1){const i=n.children,r=e.children;if(Xe(i)&&Xe(r))for(let s=0;s<i.length;s++){const o=i[s];let l=r[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[s]=ri(r[s]),l.el=o.el),!t&&l.patchFlag!==-2&&vf(o,l)),l.type===ta&&(l.patchFlag!==-1?l.el=o.el:l.__elIndex=s+(n.type===pn?1:0)),l.type===or&&!l.el&&(l.el=o.el)}}function jd(n){const e=n.slice(),t=[0];let i,r,s,o,l;const c=n.length;for(i=0;i<c;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)l=s+o>>1,n[t[l]]<u?s=l+1:o=l;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Sf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sf(e)}function rc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Mf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Mf(e.subTree):null}const Ef=n=>n.__isSuspense;function Zd(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):ad(n)}const pn=Symbol.for("v-fgt"),ta=Symbol.for("v-txt"),or=Symbol.for("v-cmt"),xa=Symbol.for("v-stc"),Fr=[];let Zt=null;function Rs(n=!1){Fr.push(Zt=n?null:[])}function Jd(){Fr.pop(),Zt=Fr[Fr.length-1]||null}let kr=1;function sc(n,e=!1){kr+=n,n<0&&Zt&&e&&(Zt.hasOnce=!0)}function Qd(n){return n.dynamicChildren=kr>0?Zt||er:null,Jd(),kr>0&&Zt&&Zt.push(n),n}function Cs(n,e,t,i,r,s){return Qd(Gt(n,e,t,i,r,s,!0))}function yf(n){return n?n.__v_isVNode===!0:!1}function vr(n,e){return n.type===e.type&&n.key===e.key}const bf=({key:n})=>n??null,Ps=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Ct(n)||Ye(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function Gt(n,e=null,t=null,i=0,r=null,s=n===pn?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&bf(e),ref:e&&Ps(e),scopeId:Zu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_n};return l?(Ml(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=St(t)?8:16),kr>0&&!o&&Zt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Zt.push(c),c}const ci=ep;function ep(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Td)&&(n=or),yf(n)){const l=lr(n,e,!0);return t&&Ml(l,t),kr>0&&!s&&Zt&&(l.shapeFlag&6?Zt[Zt.indexOf(n)]=l:Zt.push(l)),l.patchFlag=-2,l}if(fp(n)&&(n=n.__vccOpts),e){e=tp(e);let{class:l,style:c}=e;l&&!St(l)&&(e.class=ol(l)),pt(c)&&(gl(c)&&!Xe(c)&&(c=Bt({},c)),e.style=al(c))}const o=St(n)?1:Ef(n)?128:dd(n)?64:pt(n)?4:Ye(n)?2:0;return Gt(n,e,t,i,r,o,s,!0)}function tp(n){return n?gl(n)||df(n)?Bt({},n):n:null}function lr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:l,transition:c}=n,u=e?np(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&bf(u),ref:e&&e.ref?t&&s?Xe(s)?s.concat(Ps(e)):[s,Ps(e)]:Ps(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==pn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&lr(n.ssContent),ssFallback:n.ssFallback&&lr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&xl(f,c.clone(f)),f}function wr(n=" ",e=0){return ci(ta,null,n,e)}function mn(n){return n==null||typeof n=="boolean"?ci(or):Xe(n)?ci(pn,null,n.slice()):yf(n)?ri(n):ci(ta,null,String(n))}function ri(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:lr(n)}function Ml(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ml(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!df(e)?e._ctx=_n:r===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[wr(e)]):t=8);n.children=e,n.shapeFlag|=t}function np(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ol([e.class,i.class]));else if(r==="style")e.style=al([e.style,i.style]);else if($s(r)){const s=e[r],o=i[r];o&&s!==o&&!(Xe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function fn(n,e,t,i=null){bn(n,e,7,[t,i])}const ip=cf();let rp=0;function sp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ip,s={uid:rp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mf(i,r),emitsOptions:uf(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Nd.bind(null,s),n.ce&&n.ce(s),s}let Ft=null;const ap=()=>Ft||_n;let ks,ao;{const n=Zs(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ks=e("__VUE_INSTANCE_SETTERS__",t=>Ft=t),ao=e("__VUE_SSR_SETTERS__",t=>Wr=t)}const Zr=n=>{const e=Ft;return ks(n),n.scope.on(),()=>{n.scope.off(),ks(e)}},ac=()=>{Ft&&Ft.scope.off(),ks(null)};function Tf(n){return n.vnode.shapeFlag&4}let Wr=!1;function op(n,e=!1,t=!1){e&&ao(e);const{props:i,children:r}=n.vnode,s=Tf(n);Gd(n,i,s,e),Xd(n,r,t||e);const o=s?lp(n,e):void 0;return e&&ao(!1),o}function lp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ad);const{setup:i}=t;if(i){Hn();const r=n.setupContext=i.length>1?up(n):null,s=Zr(n),o=jr(i,n,0,[n.props,r]),l=Eu(o);if(kn(),s(),(l||n.sp)&&!Ur(n)&&ef(n),l){if(o.then(ac,ac),e)return o.then(c=>{oc(n,c)}).catch(c=>{Js(c,n,0)});n.asyncDep=o}else oc(n,o)}else Af(n)}function oc(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=qu(e)),Af(n)}function Af(n,e,t){const i=n.type;n.render||(n.render=i.render||Sn);{const r=Zr(n);Hn();try{wd(n)}finally{kn(),r()}}}const cp={get(n,e){return wt(n,"get",""),n[e]}};function up(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,cp),slots:n.slots,emit:n.emit,expose:e}}function El(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(qu(Xu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Nr)return Nr[t](n)},has(e,t){return t in e||t in Nr}})):n.proxy}function fp(n){return Ye(n)&&"__vccOpts"in n}const hp=(n,e)=>ed(n,e,Wr),dp="3.5.26";let oo;const lc=typeof window<"u"&&window.trustedTypes;if(lc)try{oo=lc.createPolicy("vue",{createHTML:n=>n})}catch{}const wf=oo?n=>oo.createHTML(n):n=>n,pp="http://www.w3.org/2000/svg",mp="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,cc=Nn&&Nn.createElement("template"),gp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Nn.createElementNS(pp,n):e==="mathml"?Nn.createElementNS(mp,n):t?Nn.createElement(n,{is:t}):Nn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Nn.createTextNode(n),createComment:n=>Nn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Nn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{cc.innerHTML=wf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const l=cc.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_p=Symbol("_vtc");function xp(n,e,t){const i=n[_p];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const uc=Symbol("_vod"),vp=Symbol("_vsh"),Sp=Symbol(""),Mp=/(?:^|;)\s*display\s*:/;function Ep(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Ds(i,l,"")}else for(const o in e)t[o]==null&&Ds(i,o,"");for(const o in t)o==="display"&&(s=!0),Ds(i,o,t[o])}else if(r){if(e!==t){const o=i[Sp];o&&(t+=";"+o),i.cssText=t,s=Mp.test(t)}}else e&&n.removeAttribute("style");uc in n&&(n[uc]=s?i.display:"",n[vp]&&(i.display="none"))}const fc=/\s*!important$/;function Ds(n,e,t){if(Xe(t))t.forEach(i=>Ds(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=yp(n,e);fc.test(t)?n.setProperty(Ii(i),t.replace(fc,""),"important"):n[i]=t}}const hc=["Webkit","Moz","ms"],va={};function yp(n,e){const t=va[e];if(t)return t;let i=ui(e);if(i!=="filter"&&i in n)return va[e]=i;i=Tu(i);for(let r=0;r<hc.length;r++){const s=hc[r]+i;if(s in n)return va[e]=s}return e}const dc="http://www.w3.org/1999/xlink";function pc(n,e,t,i,r,s=Rh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(dc,e.slice(6,e.length)):n.setAttributeNS(dc,e,t):t==null||s&&!wu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":di(t)?String(t):t)}function mc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?wf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=wu(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function bp(n,e,t,i){n.addEventListener(e,t,i)}function Tp(n,e,t,i){n.removeEventListener(e,t,i)}const gc=Symbol("_vei");function Ap(n,e,t,i,r=null){const s=n[gc]||(n[gc]={}),o=s[e];if(i&&o)o.value=i;else{const[l,c]=wp(e);if(i){const u=s[e]=Pp(i,r);bp(n,l,u,c)}else o&&(Tp(n,l,o,c),s[e]=void 0)}}const _c=/(?:Once|Passive|Capture)$/;function wp(n){let e;if(_c.test(n)){e={};let i;for(;i=n.match(_c);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ii(n.slice(2)),e]}let Sa=0;const Rp=Promise.resolve(),Cp=()=>Sa||(Rp.then(()=>Sa=0),Sa=Date.now());function Pp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;bn(Dp(i,t.value),e,5,[i])};return t.value=n,t.attached=Cp(),t}function Dp(n,e){if(Xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const xc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Lp=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?xp(n,i,o):e==="style"?Ep(n,t,i):$s(e)?il(e)||Ap(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ip(n,e,i,o))?(mc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!St(i))?mc(n,ui(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),pc(n,e,i,o))};function Ip(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&xc(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xc(e)&&St(t)?!1:e in n}const Up=Bt({patchProp:Lp},gp);let vc;function Np(){return vc||(vc=Yd(Up))}const Fp=((...n)=>{const e=Np().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Bp(i);if(!r)return;const s=e._component;!Ye(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Op(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Op(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Bp(n){return St(n)?document.querySelector(n):n}const zp=Symbol();var Sc;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Sc||(Sc={}));function Vp(){const n=Ch(!0),e=n.run(()=>Qi({}));let t=[],i=[];const r=Xu({install(s){r._a=s,s.provide(zp,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Gp=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Hp={class:"hud"},kp={class:"row"},Wp={key:0,class:"gameover"},Xp={key:1,class:"hint"},qp={__name:"GameHUD",props:{score:{type:Number,required:!0},best:{type:Number,required:!0},speed:{type:Number,required:!0},isGameOver:{type:Boolean,required:!0}},setup(n){return(e,t)=>(Rs(),Cs("div",Hp,[Gt("div",kp,[Gt("div",null,[t[2]||(t[2]=Gt("b",null,"Puntuación:",-1)),wr(" "+As(n.score),1)]),Gt("div",null,[t[3]||(t[3]=Gt("b",null,"Récord:",-1)),wr(" "+As(n.best),1)]),Gt("div",null,[t[4]||(t[4]=Gt("b",null,"Velocidad:",-1)),wr(" "+As(n.speed.toFixed(1)),1)])]),n.isGameOver?(Rs(),Cs("div",Wp,[t[5]||(t[5]=Gt("h2",null,"Game Over",-1)),Gt("button",{onClick:t[0]||(t[0]=i=>e.$emit("restart"))},"Reiniciar"),t[6]||(t[6]=Gt("p",{class:"hint"},"Controles: ← → o A/D para moverte · Espacio para saltar",-1))])):(Rs(),Cs("div",Xp,[t[7]||(t[7]=wr(" Controles: ← → o A/D para moverte · Espacio para saltar ",-1)),Gt("button",{class:"small",onClick:t[1]||(t[1]=i=>e.$emit("restart"))},"Reiniciar")]))]))}},Yp=Gp(qp,[["__scopeId","data-v-1d8c1a86"]]);const yl="182",$p=0,Mc=1,Kp=2,Ls=1,jp=2,Rr=3,hi=0,kt=1,On=2,zn=0,sr=1,Ec=2,yc=3,bc=4,Zp=5,Ai=100,Jp=101,Qp=102,em=103,tm=104,nm=200,im=201,rm=202,sm=203,lo=204,co=205,am=206,om=207,lm=208,cm=209,um=210,fm=211,hm=212,dm=213,pm=214,uo=0,fo=1,ho=2,cr=3,po=4,mo=5,go=6,_o=7,Rf=0,mm=1,gm=2,Mn=0,Cf=1,Pf=2,Df=3,Lf=4,If=5,Uf=6,Nf=7,Ff=300,Di=301,ur=302,xo=303,vo=304,na=306,So=1e3,Bn=1001,Mo=1002,bt=1003,_m=1004,ss=1005,Rt=1006,Ma=1007,Ri=1008,jt=1009,Of=1010,Bf=1011,Xr=1012,bl=1013,Tn=1014,xn=1015,Xn=1016,Tl=1017,Al=1018,qr=1020,zf=35902,Vf=35899,Gf=1021,Hf=1022,on=1023,qn=1026,Ci=1027,kf=1028,wl=1029,fr=1030,Rl=1031,Cl=1033,Is=33776,Us=33777,Ns=33778,Fs=33779,Eo=35840,yo=35841,bo=35842,To=35843,Ao=36196,wo=37492,Ro=37496,Co=37488,Po=37489,Do=37490,Lo=37491,Io=37808,Uo=37809,No=37810,Fo=37811,Oo=37812,Bo=37813,zo=37814,Vo=37815,Go=37816,Ho=37817,ko=37818,Wo=37819,Xo=37820,qo=37821,Yo=36492,$o=36494,Ko=36495,jo=36283,Zo=36284,Jo=36285,Qo=36286,xm=3200,Wf=0,vm=1,ai="",en="srgb",hr="srgb-linear",Ws="linear",at="srgb",Fi=7680,Tc=519,Sm=512,Mm=513,Em=514,Pl=515,ym=516,bm=517,Dl=518,Tm=519,Ac=35044,wc="300 es",vn=2e3,Xs=2001;function Xf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Am(){const n=qs("canvas");return n.style.display="block",n}const Rc={};function Cc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ve(...n){const e="THREE."+n.shift();console.warn(e,...n)}function et(...n){const e="THREE."+n.shift();console.error(e,...n)}function Yr(...n){const e=n.join(" ");e in Rc||(Rc[e]=!0,Ve(...n))}function wm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pc=1234567;const Or=Math.PI/180,$r=180/Math.PI;function mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Ll(n,e){return(n%e+e)%e}function Rm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Cm(n,e,t){return n!==e?(t-n)/(e-n):0}function Br(n,e,t){return(1-t)*n+t*e}function Pm(n,e,t,i){return Br(n,e,1-Math.exp(-t*i))}function Dm(n,e=1){return e-Math.abs(Ll(n,e*2)-e)}function Lm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Im(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Um(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Nm(n,e){return n+Math.random()*(e-n)}function Fm(n){return n*(.5-Math.random())}function Om(n){n!==void 0&&(Pc=n);let e=Pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bm(n){return n*Or}function zm(n){return n*$r}function Vm(n){return(n&n-1)===0&&n!==0}function Gm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function km(n,e,t,i,r){const s=Math.cos,o=Math.sin,l=s(t/2),c=o(t/2),u=s((e+i)/2),f=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),g=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(l*f,c*h,c*d,l*u);break;case"YZY":n.set(c*d,l*f,c*h,l*u);break;case"ZXZ":n.set(c*h,c*d,l*f,l*u);break;case"XZX":n.set(l*f,c*x,c*g,l*u);break;case"YXY":n.set(c*g,l*f,c*x,l*u);break;case"ZYZ":n.set(c*x,c*g,l*f,l*u);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Dc={DEG2RAD:Or,RAD2DEG:$r,generateUUID:mr,clamp:je,euclideanModulo:Ll,mapLinear:Rm,inverseLerp:Cm,lerp:Br,damp:Pm,pingpong:Dm,smoothstep:Lm,smootherstep:Im,randInt:Um,randFloat:Nm,randFloatSpread:Fm,seededRandom:Om,degToRad:Bm,radToDeg:zm,isPowerOfTwo:Vm,ceilPowerOfTwo:Gm,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:km,normalize:It,denormalize:Ji};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,l){let c=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3],d=s[o+0],g=s[o+1],x=s[o+2],M=s[o+3];if(l<=0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=h;return}if(l>=1){e[t+0]=d,e[t+1]=g,e[t+2]=x,e[t+3]=M;return}if(h!==M||c!==d||u!==g||f!==x){let _=c*d+u*g+f*x+h*M;_<0&&(d=-d,g=-g,x=-x,M=-M,_=-_);let p=1-l;if(_<.9995){const A=Math.acos(_),w=Math.sin(A);p=Math.sin(p*A)/w,l=Math.sin(l*A)/w,c=c*p+d*l,u=u*p+g*l,f=f*p+x*l,h=h*p+M*l}else{c=c*p+d*l,u=u*p+g*l,f=f*p+x*l,h=h*p+M*l;const A=1/Math.sqrt(c*c+u*u+f*f+h*h);c*=A,u*=A,f*=A,h*=A}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const l=i[r],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],g=s[o+2],x=s[o+3];return e[t]=l*x+f*h+c*g-u*d,e[t+1]=c*x+f*d+u*h-l*g,e[t+2]=u*x+f*g+l*d-c*h,e[t+3]=f*x-l*h-c*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(i/2),f=l(r/2),h=l(s/2),d=c(i/2),g=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=d*f*h+u*g*x,this._y=u*g*h-d*f*x,this._z=u*f*x+d*g*h,this._w=u*f*h-d*g*x;break;case"YXZ":this._x=d*f*h+u*g*x,this._y=u*g*h-d*f*x,this._z=u*f*x-d*g*h,this._w=u*f*h+d*g*x;break;case"ZXY":this._x=d*f*h-u*g*x,this._y=u*g*h+d*f*x,this._z=u*f*x+d*g*h,this._w=u*f*h-d*g*x;break;case"ZYX":this._x=d*f*h-u*g*x,this._y=u*g*h+d*f*x,this._z=u*f*x-d*g*h,this._w=u*f*h+d*g*x;break;case"YZX":this._x=d*f*h+u*g*x,this._y=u*g*h+d*f*x,this._z=u*f*x-d*g*h,this._w=u*f*h-d*g*x;break;case"XZY":this._x=d*f*h-u*g*x,this._y=u*g*h-d*f*x,this._z=u*f*x+d*g*h,this._w=u*f*h+d*g*x;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],l=t[5],c=t[9],u=t[2],f=t[6],h=t[10],d=i+l+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>l&&i>h){const g=2*Math.sqrt(1+i-l-h);this._w=(f-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(l>h){const g=2*Math.sqrt(1+l-i-h);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+h-i-l);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,l=t._x,c=t._y,u=t._z,f=t._w;return this._x=i*f+o*l+r*u-s*c,this._y=r*f+o*c+s*l-i*u,this._z=s*f+o*u+i*c-r*l,this._w=o*f-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,o=-o,l=-l);let c=1-t;if(l<.9995){const u=Math.acos(l),f=Math.sin(u);c=Math.sin(c*u)/f,t=Math.sin(t*u)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*r-l*i),f=2*(l*t-s*r),h=2*(s*i-o*t);return this.x=t+c*u+o*h-l*f,this.y=i+c*f+l*u-s*h,this.z=r+c*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*o-i*c,this.z=i*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new k,Lc=new Jr;class We{constructor(e,t,i,r,s,o,l,c,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,l,c,u)}set(e,t,i,r,s,o,l,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],l=i[3],c=i[6],u=i[1],f=i[4],h=i[7],d=i[2],g=i[5],x=i[8],M=r[0],_=r[3],p=r[6],A=r[1],w=r[4],T=r[7],C=r[2],L=r[5],I=r[8];return s[0]=o*M+l*A+c*C,s[3]=o*_+l*w+c*L,s[6]=o*p+l*T+c*I,s[1]=u*M+f*A+h*C,s[4]=u*_+f*w+h*L,s[7]=u*p+f*T+h*I,s[2]=d*M+g*A+x*C,s[5]=d*_+g*w+x*L,s[8]=d*p+g*T+x*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8];return t*o*f-t*l*u-i*s*f+i*l*c+r*s*u-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8],h=f*o-l*u,d=l*c-f*s,g=u*s-o*c,x=t*h+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=h*M,e[1]=(r*u-f*i)*M,e[2]=(l*i-r*o)*M,e[3]=d*M,e[4]=(f*t-r*c)*M,e[5]=(r*s-l*t)*M,e[6]=g*M,e[7]=(i*c-u*t)*M,e[8]=(o*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*o+u*l)+o+e,-r*u,r*c,-r*(-u*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new We,Ic=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){const n={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?Ws:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hr]:{primaries:e,whitePoint:i,transfer:Ws,toXYZ:Ic,fromXYZ:Uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Ic,fromXYZ:Uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const Ze=Wm();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Oi;class Xm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Oi===void 0&&(Oi=qs("canvas")),Oi.width=e.width,Oi.height=e.height;const r=Oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Oi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qm=0;class Il{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(ba(r[o].image)):s.push(ba(r[o]))}else s=ba(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Ym=0;const Ta=new k;class Ot extends pr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Bn,r=Bn,s=Rt,o=Ri,l=on,c=jt,u=Ot.DEFAULT_ANISOTROPY,f=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=mr(),this.name="",this.source=new Il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ta).x}get height(){return this.source.getSize(Ta).y}get depth(){return this.source.getSize(Ta).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case So:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case So:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Ff;Ot.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,u=c[0],f=c[4],h=c[8],d=c[1],g=c[5],x=c[9],M=c[2],_=c[6],p=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-M)<.01&&Math.abs(x-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+M)<.1&&Math.abs(x+_)<.1&&Math.abs(u+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(u+1)/2,T=(g+1)/2,C=(p+1)/2,L=(f+d)/4,I=(h+M)/4,G=(x+_)/4;return w>T&&w>C?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=L/i,s=I/i):T>C?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=L/r,s=G/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=I/s,r=G/s),this.set(i,r,s,t),this}let A=Math.sqrt((_-x)*(_-x)+(h-M)*(h-M)+(d-f)*(d-f));return Math.abs(A)<.001&&(A=1),this.x=(_-x)/A,this.y=(h-M)/A,this.z=(d-f)/A,this.w=Math.acos((u+g+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $m extends pr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ot(r);this.textures=[];const o=i.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Il(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends $m{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class qf extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Km extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),as.copy(i.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),os.subVectors(this.max,Sr),Bi.subVectors(e.a,Sr),zi.subVectors(e.b,Sr),Vi.subVectors(e.c,Sr),jn.subVectors(zi,Bi),Zn.subVectors(Vi,zi),xi.subVectors(Bi,Vi);let t=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-xi.z,xi.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,xi.z,0,-xi.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-xi.y,xi.x,0];return!Aa(t,Bi,zi,Vi,os)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,Bi,zi,Vi,os))?!1:(ls.crossVectors(jn,Zn),t=[ls.x,ls.y,ls.z],Aa(t,Bi,zi,Vi,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new k,new k,new k,new k,new k,new k,new k,new k],nn=new k,as=new Li,Bi=new k,zi=new k,Vi=new k,jn=new k,Zn=new k,xi=new k,Sr=new k,os=new k,ls=new k,vi=new k;function Aa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vi.fromArray(n,s);const l=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),c=e.dot(vi),u=t.dot(vi),f=i.dot(vi);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>l)return!1}return!0}const jm=new Li,Mr=new k,wa=new k;class Ul{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(wa)),this.expandByPoint(Mr.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Dn=new k,Ra=new k,cs=new k,Jn=new k,Ca=new k,us=new k,Pa=new k;class Zm{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ra.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Ra);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cs),l=Jn.dot(this.direction),c=-Jn.dot(cs),u=Jn.lengthSq(),f=Math.abs(1-o*o);let h,d,g,x;if(f>0)if(h=o*c-l,d=o*l-c,x=s*f,h>=0)if(d>=-x)if(d<=x){const M=1/f;h*=M,d*=M,g=h*(h+o*d+2*l)+d*(o*h+d+2*c)+u}else d=s,h=Math.max(0,-(o*d+l)),g=-h*h+d*(d+2*c)+u;else d=-s,h=Math.max(0,-(o*d+l)),g=-h*h+d*(d+2*c)+u;else d<=-x?(h=Math.max(0,-(-o*s+l)),d=h>0?-s:Math.min(Math.max(-s,-c),s),g=-h*h+d*(d+2*c)+u):d<=x?(h=0,d=Math.min(Math.max(-s,-c),s),g=d*(d+2*c)+u):(h=Math.max(0,-(o*s+l)),d=h>0?s:Math.min(Math.max(-s,-c),s),g=-h*h+d*(d+2*c)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+l)),g=-h*h+d*(d+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ra).addScaledVector(cs,d),g}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,l,c;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(l=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(l=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,r,s){Ca.subVectors(t,e),us.subVectors(i,e),Pa.crossVectors(Ca,us);let o=this.direction.dot(Pa),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const c=l*this.direction.dot(us.crossVectors(Jn,us));if(c<0)return null;const u=l*this.direction.dot(Ca.cross(Jn));if(u<0||c+u>o)return null;const f=-l*Jn.dot(Pa);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,o,l,c,u,f,h,d,g,x,M,_){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,l,c,u,f,h,d,g,x,M,_)}set(e,t,i,r,s,o,l,c,u,f,h,d,g,x,M,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=l,p[13]=c,p[2]=u,p[6]=f,p[10]=h,p[14]=d,p[3]=g,p[7]=x,p[11]=M,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,g=o*h,x=l*f,M=l*h;t[0]=c*f,t[4]=-c*h,t[8]=u,t[1]=g+x*u,t[5]=d-M*u,t[9]=-l*c,t[2]=M-d*u,t[6]=x+g*u,t[10]=o*c}else if(e.order==="YXZ"){const d=c*f,g=c*h,x=u*f,M=u*h;t[0]=d+M*l,t[4]=x*l-g,t[8]=o*u,t[1]=o*h,t[5]=o*f,t[9]=-l,t[2]=g*l-x,t[6]=M+d*l,t[10]=o*c}else if(e.order==="ZXY"){const d=c*f,g=c*h,x=u*f,M=u*h;t[0]=d-M*l,t[4]=-o*h,t[8]=x+g*l,t[1]=g+x*l,t[5]=o*f,t[9]=M-d*l,t[2]=-o*u,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const d=o*f,g=o*h,x=l*f,M=l*h;t[0]=c*f,t[4]=x*u-g,t[8]=d*u+M,t[1]=c*h,t[5]=M*u+d,t[9]=g*u-x,t[2]=-u,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,g=o*u,x=l*c,M=l*u;t[0]=c*f,t[4]=M-d*h,t[8]=x*h+g,t[1]=h,t[5]=o*f,t[9]=-l*f,t[2]=-u*f,t[6]=g*h+x,t[10]=d-M*h}else if(e.order==="XZY"){const d=o*c,g=o*u,x=l*c,M=l*u;t[0]=c*f,t[4]=-h,t[8]=u*f,t[1]=d*h+M,t[5]=o*f,t[9]=g*h-x,t[2]=x*h-g,t[6]=l*f,t[10]=M*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jm,e,Qm)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Qn.crossVectors(i,Yt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Qn.crossVectors(i,Yt)),Qn.normalize(),fs.crossVectors(Yt,Qn),r[0]=Qn.x,r[4]=fs.x,r[8]=Yt.x,r[1]=Qn.y,r[5]=fs.y,r[9]=Yt.y,r[2]=Qn.z,r[6]=fs.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],l=i[4],c=i[8],u=i[12],f=i[1],h=i[5],d=i[9],g=i[13],x=i[2],M=i[6],_=i[10],p=i[14],A=i[3],w=i[7],T=i[11],C=i[15],L=r[0],I=r[4],G=r[8],E=r[12],y=r[1],U=r[5],K=r[9],W=r[13],re=r[2],te=r[6],Y=r[10],O=r[14],J=r[3],pe=r[7],de=r[11],_e=r[15];return s[0]=o*L+l*y+c*re+u*J,s[4]=o*I+l*U+c*te+u*pe,s[8]=o*G+l*K+c*Y+u*de,s[12]=o*E+l*W+c*O+u*_e,s[1]=f*L+h*y+d*re+g*J,s[5]=f*I+h*U+d*te+g*pe,s[9]=f*G+h*K+d*Y+g*de,s[13]=f*E+h*W+d*O+g*_e,s[2]=x*L+M*y+_*re+p*J,s[6]=x*I+M*U+_*te+p*pe,s[10]=x*G+M*K+_*Y+p*de,s[14]=x*E+M*W+_*O+p*_e,s[3]=A*L+w*y+T*re+C*J,s[7]=A*I+w*U+T*te+C*pe,s[11]=A*G+w*K+T*Y+C*de,s[15]=A*E+w*W+T*O+C*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],l=e[5],c=e[9],u=e[13],f=e[2],h=e[6],d=e[10],g=e[14],x=e[3],M=e[7],_=e[11],p=e[15],A=c*g-u*d,w=l*g-u*h,T=l*d-c*h,C=o*g-u*f,L=o*d-c*f,I=o*h-l*f;return t*(M*A-_*w+p*T)-i*(x*A-_*C+p*L)+r*(x*w-M*C+p*I)-s*(x*T-M*L+_*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8],h=e[9],d=e[10],g=e[11],x=e[12],M=e[13],_=e[14],p=e[15],A=h*_*u-M*d*u+M*c*g-l*_*g-h*c*p+l*d*p,w=x*d*u-f*_*u-x*c*g+o*_*g+f*c*p-o*d*p,T=f*M*u-x*h*u+x*l*g-o*M*g-f*l*p+o*h*p,C=x*h*c-f*M*c-x*l*d+o*M*d+f*l*_-o*h*_,L=t*A+i*w+r*T+s*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=A*I,e[1]=(M*d*s-h*_*s-M*r*g+i*_*g+h*r*p-i*d*p)*I,e[2]=(l*_*s-M*c*s+M*r*u-i*_*u-l*r*p+i*c*p)*I,e[3]=(h*c*s-l*d*s-h*r*u+i*d*u+l*r*g-i*c*g)*I,e[4]=w*I,e[5]=(f*_*s-x*d*s+x*r*g-t*_*g-f*r*p+t*d*p)*I,e[6]=(x*c*s-o*_*s-x*r*u+t*_*u+o*r*p-t*c*p)*I,e[7]=(o*d*s-f*c*s+f*r*u-t*d*u-o*r*g+t*c*g)*I,e[8]=T*I,e[9]=(x*h*s-f*M*s-x*i*g+t*M*g+f*i*p-t*h*p)*I,e[10]=(o*M*s-x*l*s+x*i*u-t*M*u-o*i*p+t*l*p)*I,e[11]=(f*l*s-o*h*s-f*i*u+t*h*u+o*i*g-t*l*g)*I,e[12]=C*I,e[13]=(f*M*r-x*h*r+x*i*d-t*M*d-f*i*_+t*h*_)*I,e[14]=(x*l*r-o*M*r-x*i*c+t*M*c+o*i*_-t*l*_)*I,e[15]=(o*h*r-f*l*r+f*i*c-t*h*c-o*i*d+t*l*d)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,l=e.y,c=e.z,u=s*o,f=s*l;return this.set(u*o+i,u*l-r*c,u*c+r*l,0,u*l+r*c,f*l+i,f*c-r*o,0,u*c-r*l,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,l=t._z,c=t._w,u=s+s,f=o+o,h=l+l,d=s*u,g=s*f,x=s*h,M=o*f,_=o*h,p=l*h,A=c*u,w=c*f,T=c*h,C=i.x,L=i.y,I=i.z;return r[0]=(1-(M+p))*C,r[1]=(g+T)*C,r[2]=(x-w)*C,r[3]=0,r[4]=(g-T)*L,r[5]=(1-(d+p))*L,r[6]=(_+A)*L,r[7]=0,r[8]=(x+w)*I,r[9]=(_-A)*I,r[10]=(1-(d+M))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),l=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),rn.copy(this);const u=1/s,f=1/o,h=1/l;return rn.elements[0]*=u,rn.elements[1]*=u,rn.elements[2]*=u,rn.elements[4]*=f,rn.elements[5]*=f,rn.elements[6]*=f,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,o,l=vn,c=!1){const u=this.elements,f=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),g=(i+r)/(i-r);let x,M;if(c)x=s/(o-s),M=o*s/(o-s);else if(l===vn)x=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(l===Xs)x=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=h,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,l=vn,c=!1){const u=this.elements,f=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),g=-(i+r)/(i-r);let x,M;if(c)x=1/(o-s),M=o/(o-s);else if(l===vn)x=-2/(o-s),M=-(o+s)/(o-s);else if(l===Xs)x=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=h,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new k,rn=new xt,Jm=new k(0,0,0),Qm=new k(1,1,1),Qn=new k,fs=new k,Yt=new k,Nc=new xt,Fc=new Jr;class An{constructor(e=0,t=0,i=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],c=r[1],u=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eg=0;const Oc=new k,Hi=new Jr,Ln=new xt,hs=new k,Er=new k,tg=new k,ng=new Jr,Bc=new k(1,0,0),zc=new k(0,1,0),Vc=new k(0,0,1),Gc={type:"added"},ig={type:"removed"},ki={type:"childadded",child:null},Da={type:"childremoved",child:null};class Pt extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new k,t=new An,i=new Jr,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new We}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Bc,e)}rotateY(e){return this.rotateOnAxis(zc,e)}rotateZ(e){return this.rotateOnAxis(Vc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bc,e)}translateY(e){return this.translateOnAxis(zc,e)}translateZ(e){return this.translateOnAxis(Vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hs.copy(e):hs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Er,hs,this.up):Ln.lookAt(hs,Er,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Hi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gc),ki.child=e,this.dispatchEvent(ki),ki.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ig),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gc),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,ng,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),x=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(l){const c=[];for(const u in l){const f=l[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new k(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new k,In=new k,La=new k,Un=new k,Wi=new k,Xi=new k,Hc=new k,Ia=new k,Ua=new k,Na=new k,Fa=new _t,Oa=new _t,Ba=new _t;class an{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){sn.subVectors(r,t),In.subVectors(i,t),La.subVectors(e,t);const o=sn.dot(sn),l=sn.dot(In),c=sn.dot(La),u=In.dot(In),f=In.dot(La),h=o*u-l*l;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(u*c-l*f)*d,x=(o*f-l*c)*d;return s.set(1-g-x,x,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,i,r,s,o,l,c){return this.getBarycoord(e,t,i,r,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(l,Un.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Fa.setScalar(0),Oa.setScalar(0),Ba.setScalar(0),Fa.fromBufferAttribute(e,t),Oa.fromBufferAttribute(e,i),Ba.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fa,s.x),o.addScaledVector(Oa,s.y),o.addScaledVector(Ba,s.z),o}static isFrontFacing(e,t,i,r){return sn.subVectors(i,t),In.subVectors(e,t),sn.cross(In).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),sn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return an.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,l;Wi.subVectors(r,i),Xi.subVectors(s,i),Ia.subVectors(e,i);const c=Wi.dot(Ia),u=Xi.dot(Ia);if(c<=0&&u<=0)return t.copy(i);Ua.subVectors(e,r);const f=Wi.dot(Ua),h=Xi.dot(Ua);if(f>=0&&h<=f)return t.copy(r);const d=c*h-f*u;if(d<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Wi,o);Na.subVectors(e,s);const g=Wi.dot(Na),x=Xi.dot(Na);if(x>=0&&g<=x)return t.copy(s);const M=g*u-c*x;if(M<=0&&u>=0&&x<=0)return l=u/(u-x),t.copy(i).addScaledVector(Xi,l);const _=f*x-g*h;if(_<=0&&h-f>=0&&g-x>=0)return Hc.subVectors(s,r),l=(h-f)/(h-f+(g-x)),t.copy(r).addScaledVector(Hc,l);const p=1/(_+M+d);return o=M*p,l=d*p,t.copy(i).addScaledVector(Wi,o).addScaledVector(Xi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},ds={h:0,s:0,l:0};function za(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Ll(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=za(o,s,e+1/3),this.g=za(o,s,e),this.b=za(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=$f[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Ze.workingToColorSpace(At.copy(this),e),Math.round(je(At.r*255,0,255))*65536+Math.round(je(At.g*255,0,255))*256+Math.round(je(At.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const f=(l+o)/2;if(l===o)c=0,u=0;else{const h=o-l;switch(u=f<=.5?h/(o+l):h/(2-o-l),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=en){Ze.workingToColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(ds);const i=Br(ei.h,ds.h,t),r=Br(ei.s,ds.s,t),s=Br(ei.l,ds.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Je;Je.NAMES=$f;let rg=0;class Qr extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=sr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lo&&(i.blendSrc=this.blendSrc),this.blendDst!==co&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kf extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new k,ps=new tt;let sg=0;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ac,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ac&&(e.usage=this.usage),e}}class jf extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zf extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gn extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ag=0;const Qt=new xt,Va=new Pt,qi=new k,$t=new Li,yr=new Li,yt=new k;class Kn extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?Zf:jf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];yr.setFromBufferAttribute(l),this.morphTargetsRelative?(yt.addVectors($t.min,yr.min),$t.expandByPoint(yt),yt.addVectors($t.max,yr.max),$t.expandByPoint(yt)):($t.expandByPoint(yr.min),$t.expandByPoint(yr.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],c=this.morphTargetsRelative;for(let u=0,f=l.count;u<f;u++)yt.fromBufferAttribute(l,u),c&&(qi.fromBufferAttribute(e,u),yt.add(qi)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let G=0;G<i.count;G++)l[G]=new k,c[G]=new k;const u=new k,f=new k,h=new k,d=new tt,g=new tt,x=new tt,M=new k,_=new k;function p(G,E,y){u.fromBufferAttribute(i,G),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,G),g.fromBufferAttribute(s,E),x.fromBufferAttribute(s,y),f.sub(u),h.sub(u),g.sub(d),x.sub(d);const U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(M.copy(f).multiplyScalar(x.y).addScaledVector(h,-g.y).multiplyScalar(U),_.copy(h).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(U),l[G].add(M),l[E].add(M),l[y].add(M),c[G].add(_),c[E].add(_),c[y].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let G=0,E=A.length;G<E;++G){const y=A[G],U=y.start,K=y.count;for(let W=U,re=U+K;W<re;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const w=new k,T=new k,C=new k,L=new k;function I(G){C.fromBufferAttribute(r,G),L.copy(C);const E=l[G];w.copy(E),w.sub(C.multiplyScalar(C.dot(E))).normalize(),T.crossVectors(L,E);const U=T.dot(c[G])<0?-1:1;o.setXYZW(G,w.x,w.y,w.z,U)}for(let G=0,E=A.length;G<E;++G){const y=A[G],U=y.start,K=y.count;for(let W=U,re=U+K;W<re;W+=3)I(e.getX(W+0)),I(e.getX(W+1)),I(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,l=new k,c=new k,u=new k,f=new k,h=new k;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),M=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,_),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,_),l.add(f),c.add(f),u.add(f),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(l,c){const u=l.array,f=l.itemSize,h=l.normalized,d=new u.constructor(c.length*f);let g=0,x=0;for(let M=0,_=c.length;M<_;M++){l.isInterleavedBufferAttribute?g=c[M]*l.data.stride+l.offset:g=c[M]*f;for(let p=0;p<f;p++)d[x++]=u[g++]}return new yn(d,f,h)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let f=0,h=u.length;f<h;f++){const d=u[f],g=e(d,i);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let h=0,d=u.length;h<d;h++){const g=u[h];f.push(g.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new xt,Si=new Zm,ms=new Ul,Wc=new k,gs=new k,_s=new k,xs=new k,Ga=new k,vs=new k,Xc=new k,Ss=new k;class Wt extends Pt{constructor(e=new Kn,t=new Kf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){vs.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=l[c],h=s[c];f!==0&&(Ga.fromBufferAttribute(h,e),o?vs.addScaledVector(Ga,f):vs.addScaledVector(Ga.sub(t),f))}t.add(vs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(ms.containsPoint(Si.origin)===!1&&(Si.intersectSphere(ms,Wc)===null||Si.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(kc.copy(s).invert(),Si.copy(e.ray).applyMatrix4(kc),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(o))for(let x=0,M=d.length;x<M;x++){const _=d[x],p=o[_.materialIndex],A=Math.max(_.start,g.start),w=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let T=A,C=w;T<C;T+=3){const L=l.getX(T),I=l.getX(T+1),G=l.getX(T+2);r=Ms(this,p,e,i,u,f,h,L,I,G),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let _=x,p=M;_<p;_+=3){const A=l.getX(_),w=l.getX(_+1),T=l.getX(_+2);r=Ms(this,o,e,i,u,f,h,A,w,T),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,M=d.length;x<M;x++){const _=d[x],p=o[_.materialIndex],A=Math.max(_.start,g.start),w=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let T=A,C=w;T<C;T+=3){const L=T,I=T+1,G=T+2;r=Ms(this,p,e,i,u,f,h,L,I,G),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let _=x,p=M;_<p;_+=3){const A=_,w=_+1,T=_+2;r=Ms(this,o,e,i,u,f,h,A,w,T),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function og(n,e,t,i,r,s,o,l){let c;if(e.side===kt?c=i.intersectTriangle(o,s,r,!0,l):c=i.intersectTriangle(r,s,o,e.side===hi,l),c===null)return null;Ss.copy(l),Ss.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ss);return u<t.near||u>t.far?null:{distance:u,point:Ss.clone(),object:n}}function Ms(n,e,t,i,r,s,o,l,c,u){n.getVertexPosition(l,gs),n.getVertexPosition(c,_s),n.getVertexPosition(u,xs);const f=og(n,e,t,i,gs,_s,xs,Xc);if(f){const h=new k;an.getBarycoord(Xc,gs,_s,xs,h),r&&(f.uv=an.getInterpolatedAttribute(r,l,c,u,h,new tt)),s&&(f.uv1=an.getInterpolatedAttribute(s,l,c,u,h,new tt)),o&&(f.normal=an.getInterpolatedAttribute(o,l,c,u,h,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:l,b:c,c:u,normal:new k,materialIndex:0};an.getNormal(gs,_s,xs,d.normal),f.face=d,f.barycoord=h}return f}class Yn extends Kn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],f=[],h=[];let d=0,g=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Gn(u,3)),this.setAttribute("normal",new Gn(f,3)),this.setAttribute("uv",new Gn(h,2));function x(M,_,p,A,w,T,C,L,I,G,E){const y=T/I,U=C/G,K=T/2,W=C/2,re=L/2,te=I+1,Y=G+1;let O=0,J=0;const pe=new k;for(let de=0;de<Y;de++){const _e=de*U-W;for(let Oe=0;Oe<te;Oe++){const Ge=Oe*y-K;pe[M]=Ge*A,pe[_]=_e*w,pe[p]=re,u.push(pe.x,pe.y,pe.z),pe[M]=0,pe[_]=0,pe[p]=L>0?1:-1,f.push(pe.x,pe.y,pe.z),h.push(Oe/I),h.push(1-de/G),O+=1}}for(let de=0;de<G;de++)for(let _e=0;_e<I;_e++){const Oe=d+_e+te*de,Ge=d+_e+te*(de+1),lt=d+(_e+1)+te*(de+1),Ae=d+(_e+1)+te*de;c.push(Oe,Ge,Ae),c.push(Ge,lt,Ae),J+=6}l.addGroup(g,J,E),g+=J,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=dr(n[t]);for(const r in i)e[r]=i[r]}return e}function lg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const cg={clone:dr,merge:Ut};var ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qf extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new k,qc=new tt,Yc=new tt;class tn extends Qf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Yc),t.subVectors(Yc,qc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/u,r*=o.width/c,i*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,$i=1;class hg extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Yi,$i,e,t);r.layers=this.layers,this.add(r);const s=new tn(Yi,$i,e,t);s.layers=this.layers,this.add(s);const o=new tn(Yi,$i,e,t);o.layers=this.layers,this.add(o);const l=new tn(Yi,$i,e,t);l.layers=this.layers,this.add(l);const c=new tn(Yi,$i,e,t);c.layers=this.layers,this.add(c);const u=new tn(Yi,$i,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,l,c]=t;for(const u of t)this.remove(u);if(e===vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,l),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(h,d,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class eh extends Ot{constructor(e=[],t=Di,i,r,s,o,l,c,u,f){super(e,t,i,r,s,o,l,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class th extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new eh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yn(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:zn});s.uniforms.tEquirect.value=t;const o=new Wt(r,s),l=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Rt),new hg(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Es extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dg={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,i),p=this._getHandJoint(u,M);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,x=.005;u.inputState.pinching&&d>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Nl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=i}clone(){return new Nl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pg extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mg extends Ot{constructor(e=null,t=1,i=1,r,s,o,l,c,u=bt,f=bt,h,d){super(null,o,l,c,u,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ka=new k,gg=new k,_g=new We;class Ti{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ka.subVectors(i,t).cross(gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ka),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_g.getNormalMatrix(e),r=this.coplanarPoint(ka).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Ul,xg=new tt(.5,.5),ys=new k;class Fl{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,s=new Ti,o=new Ti){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vn,i=!1){const r=this.planes,s=e.elements,o=s[0],l=s[1],c=s[2],u=s[3],f=s[4],h=s[5],d=s[6],g=s[7],x=s[8],M=s[9],_=s[10],p=s[11],A=s[12],w=s[13],T=s[14],C=s[15];if(r[0].setComponents(u-o,g-f,p-x,C-A).normalize(),r[1].setComponents(u+o,g+f,p+x,C+A).normalize(),r[2].setComponents(u+l,g+h,p+M,C+w).normalize(),r[3].setComponents(u-l,g-h,p-M,C-w).normalize(),i)r[4].setComponents(c,d,_,T).normalize(),r[5].setComponents(u-c,g-d,p-_,C-T).normalize();else if(r[4].setComponents(u-c,g-d,p-_,C-T).normalize(),t===vn)r[5].setComponents(u+c,g+d,p+_,C+T).normalize();else if(t===Xs)r[5].setComponents(c,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=xg.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kr extends Ot{constructor(e,t,i=Tn,r,s,o,l=bt,c=bt,u,f=qn,h=1){if(f!==qn&&f!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,o,l,c,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Il(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vg extends Kr{constructor(e,t=Tn,i=Di,r,s,o=bt,l=bt,c,u=qn){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,r,s,o,l,c,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nh extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ia extends Kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,l=Math.floor(i),c=Math.floor(r),u=l+1,f=c+1,h=e/l,d=t/c,g=[],x=[],M=[],_=[];for(let p=0;p<f;p++){const A=p*d-o;for(let w=0;w<u;w++){const T=w*h-s;x.push(T,-A,0),M.push(0,0,1),_.push(w/l),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<l;A++){const w=A+u*p,T=A+u*(p+1),C=A+1+u*(p+1),L=A+1+u*p;g.push(w,T,L),g.push(T,C,L)}this.setIndex(g),this.setAttribute("position",new Gn(x,3)),this.setAttribute("normal",new Gn(M,3)),this.setAttribute("uv",new Gn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sg extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ys extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mg extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eg extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ih extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Wa=new xt,$c=new k,Kc=new k;class yg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),Kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kc),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ol extends Qf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bg extends yg{constructor(){super(new Ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tg extends ih{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new bg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ag extends ih{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wg extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Rg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jc(n,e,t,i){const r=Cg(i);switch(t){case Gf:return n*e;case kf:return n*e/r.components*r.byteLength;case wl:return n*e/r.components*r.byteLength;case fr:return n*e*2/r.components*r.byteLength;case Rl:return n*e*2/r.components*r.byteLength;case Hf:return n*e*3/r.components*r.byteLength;case on:return n*e*4/r.components*r.byteLength;case Cl:return n*e*4/r.components*r.byteLength;case Is:case Us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yo:case To:return Math.max(n,16)*Math.max(e,8)/4;case Eo:case bo:return Math.max(n,8)*Math.max(e,8)/2;case Ao:case wo:case Co:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case No:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yo:case $o:case Ko:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jo:case Zo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jo:case Qo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cg(n){switch(n){case jt:case Of:return{byteLength:1,components:1};case Xr:case Bf:case Xn:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case Tn:case bl:case xn:return{byteLength:4,components:1};case zf:case Vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);function rh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Pg(n){const e=new WeakMap;function t(l,c){const u=l.array,f=l.usage,h=u.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=n.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:h}}function i(l,c,u){const f=c.array,h=c.updateRanges;if(n.bindBuffer(u,l),h.length===0)n.bufferSubData(u,0,f);else{h.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<h.length;g++){const x=h[d],M=h[g];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++d,h[d]=M)}h.length=d+1;for(let g=0,x=h.length;g<x;g++){const M=h[g];n.bufferSubData(u,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:o}}var Dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lg=`#ifdef USE_ALPHAHASH
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
#endif`,Ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
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
#endif`,Bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zg=`#ifdef USE_BATCHING
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
#endif`,Vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wg=`#ifdef USE_IRIDESCENCE
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
#endif`,Xg=`#ifdef USE_BUMPMAP
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
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,e_=`#define PI 3.141592653589793
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
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n_=`vec3 transformedNormal = objectNormal;
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
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x_=`#ifdef USE_GRADIENTMAP
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
}`,v_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E_=`uniform bool receiveShadow;
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
#endif`,y_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,C_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P_=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,D_=`#if defined( RE_IndirectDiffuse )
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V_=`#if defined( USE_POINTS_UV )
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
#endif`,G_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`#ifdef USE_MORPHTARGETS
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
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,g0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
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
}`,O0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#define LAMBERT
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
}`,Y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,$0=`#define MATCAP
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
}`,K0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,Z0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J0=`#define PHONG
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
}`,Q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,ex=`#define STANDARD
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
}`,tx=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,nx=`#define TOON
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
}`,ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,rx=`uniform float size;
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
}`,sx=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,ox=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,lx=`uniform float rotation;
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
}`,cx=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Dg,alphahash_pars_fragment:Lg,alphamap_fragment:Ig,alphamap_pars_fragment:Ug,alphatest_fragment:Ng,alphatest_pars_fragment:Fg,aomap_fragment:Og,aomap_pars_fragment:Bg,batching_pars_vertex:zg,batching_vertex:Vg,begin_vertex:Gg,beginnormal_vertex:Hg,bsdfs:kg,iridescence_fragment:Wg,bumpmap_pars_fragment:Xg,clipping_planes_fragment:qg,clipping_planes_pars_fragment:Yg,clipping_planes_pars_vertex:$g,clipping_planes_vertex:Kg,color_fragment:jg,color_pars_fragment:Zg,color_pars_vertex:Jg,color_vertex:Qg,common:e_,cube_uv_reflection_fragment:t_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:r_,emissivemap_fragment:s_,emissivemap_pars_fragment:a_,colorspace_fragment:o_,colorspace_pars_fragment:l_,envmap_fragment:c_,envmap_common_pars_fragment:u_,envmap_pars_fragment:f_,envmap_pars_vertex:h_,envmap_physical_pars_fragment:y_,envmap_vertex:d_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:__,gradientmap_pars_fragment:x_,lightmap_pars_fragment:v_,lights_lambert_fragment:S_,lights_lambert_pars_fragment:M_,lights_pars_begin:E_,lights_toon_fragment:b_,lights_toon_pars_fragment:T_,lights_phong_fragment:A_,lights_phong_pars_fragment:w_,lights_physical_fragment:R_,lights_physical_pars_fragment:C_,lights_fragment_begin:P_,lights_fragment_maps:D_,lights_fragment_end:L_,logdepthbuf_fragment:I_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:F_,map_fragment:O_,map_pars_fragment:B_,map_particle_fragment:z_,map_particle_pars_fragment:V_,metalnessmap_fragment:G_,metalnessmap_pars_fragment:H_,morphinstance_vertex:k_,morphcolor_vertex:W_,morphnormal_vertex:X_,morphtarget_pars_vertex:q_,morphtarget_vertex:Y_,normal_fragment_begin:$_,normal_fragment_maps:K_,normal_pars_fragment:j_,normal_pars_vertex:Z_,normal_vertex:J_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:r0,packing:s0,premultiplied_alpha_fragment:a0,project_vertex:o0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:d0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:g0,skinning_pars_vertex:_0,skinning_vertex:x0,skinnormal_vertex:v0,specularmap_fragment:S0,specularmap_pars_fragment:M0,tonemapping_fragment:E0,tonemapping_pars_fragment:y0,transmission_fragment:b0,transmission_pars_fragment:T0,uv_pars_fragment:A0,uv_pars_vertex:w0,uv_vertex:R0,worldpos_vertex:C0,background_vert:P0,background_frag:D0,backgroundCube_vert:L0,backgroundCube_frag:I0,cube_vert:U0,cube_frag:N0,depth_vert:F0,depth_frag:O0,distance_vert:B0,distance_frag:z0,equirect_vert:V0,equirect_frag:G0,linedashed_vert:H0,linedashed_frag:k0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:q0,meshlambert_frag:Y0,meshmatcap_vert:$0,meshmatcap_frag:K0,meshnormal_vert:j0,meshnormal_frag:Z0,meshphong_vert:J0,meshphong_frag:Q0,meshphysical_vert:ex,meshphysical_frag:tx,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:rx,points_frag:sx,shadow_vert:ax,shadow_frag:ox,sprite_vert:lx,sprite_frag:cx},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},gn={basic:{uniforms:Ut([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ut([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ut([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ut([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ut([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ut([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ut([Ee.points,Ee.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ut([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ut([Ee.common,Ee.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ut([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ut([Ee.sprite,Ee.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Ut([Ee.common,Ee.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Ut([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};gn.physical={uniforms:Ut([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const bs={r:0,b:0,g:0},Ei=new An,ux=new xt;function fx(n,e,t,i,r,s,o){const l=new Je(0);let c=s===!0?0:1,u,f,h=null,d=0,g=null;function x(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function M(w){let T=!1;const C=x(w);C===null?p(l,c):C&&C.isColor&&(p(C,1),T=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(w,T){const C=x(T);C&&(C.isCubeTexture||C.mapping===na)?(f===void 0&&(f=new Wt(new Yn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:dr(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ei.copy(T.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(Ei)),f.material.toneMapped=Ze.getTransfer(C.colorSpace)!==at,(h!==C||d!==C.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,h=C,d=C.version,g=n.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new Wt(new ia(2,2),new wn({name:"BackgroundMaterial",uniforms:dr(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(C.colorSpace)!==at,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,g=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null))}function p(w,T){w.getRGB(bs,Jf(n)),i.buffers.color.setClear(bs.r,bs.g,bs.b,T,o)}function A(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(w,T=1){l.set(w),c=T,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(l,c)},render:M,addToRenderList:_,dispose:A}}function hx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function l(y,U,K,W,re){let te=!1;const Y=h(W,K,U);s!==Y&&(s=Y,u(s.object)),te=g(y,W,K,re),te&&x(y,W,K,re),re!==null&&e.update(re,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,T(y,U,K,W),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function c(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function f(y){return n.deleteVertexArray(y)}function h(y,U,K){const W=K.wireframe===!0;let re=i[y.id];re===void 0&&(re={},i[y.id]=re);let te=re[U.id];te===void 0&&(te={},re[U.id]=te);let Y=te[W];return Y===void 0&&(Y=d(c()),te[W]=Y),Y}function d(y){const U=[],K=[],W=[];for(let re=0;re<t;re++)U[re]=0,K[re]=0,W[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:K,attributeDivisors:W,object:y,attributes:{},index:null}}function g(y,U,K,W){const re=s.attributes,te=U.attributes;let Y=0;const O=K.getAttributes();for(const J in O)if(O[J].location>=0){const de=re[J];let _e=te[J];if(_e===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),de===void 0||de.attribute!==_e||_e&&de.data!==_e.data)return!0;Y++}return s.attributesNum!==Y||s.index!==W}function x(y,U,K,W){const re={},te=U.attributes;let Y=0;const O=K.getAttributes();for(const J in O)if(O[J].location>=0){let de=te[J];de===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(de=y.instanceColor));const _e={};_e.attribute=de,de&&de.data&&(_e.data=de.data),re[J]=_e,Y++}s.attributes=re,s.attributesNum=Y,s.index=W}function M(){const y=s.newAttributes;for(let U=0,K=y.length;U<K;U++)y[U]=0}function _(y){p(y,0)}function p(y,U){const K=s.newAttributes,W=s.enabledAttributes,re=s.attributeDivisors;K[y]=1,W[y]===0&&(n.enableVertexAttribArray(y),W[y]=1),re[y]!==U&&(n.vertexAttribDivisor(y,U),re[y]=U)}function A(){const y=s.newAttributes,U=s.enabledAttributes;for(let K=0,W=U.length;K<W;K++)U[K]!==y[K]&&(n.disableVertexAttribArray(K),U[K]=0)}function w(y,U,K,W,re,te,Y){Y===!0?n.vertexAttribIPointer(y,U,K,re,te):n.vertexAttribPointer(y,U,K,W,re,te)}function T(y,U,K,W){M();const re=W.attributes,te=K.getAttributes(),Y=U.defaultAttributeValues;for(const O in te){const J=te[O];if(J.location>=0){let pe=re[O];if(pe===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),pe!==void 0){const de=pe.normalized,_e=pe.itemSize,Oe=e.get(pe);if(Oe===void 0)continue;const Ge=Oe.buffer,lt=Oe.type,Ae=Oe.bytesPerElement,j=lt===n.INT||lt===n.UNSIGNED_INT||pe.gpuType===bl;if(pe.isInterleavedBufferAttribute){const ie=pe.data,Me=ie.stride,ze=pe.offset;if(ie.isInstancedInterleavedBuffer){for(let Ce=0;Ce<J.locationSize;Ce++)p(J.location+Ce,ie.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ce=0;Ce<J.locationSize;Ce++)_(J.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Ce=0;Ce<J.locationSize;Ce++)w(J.location+Ce,_e/J.locationSize,lt,de,Me*Ae,(ze+_e/J.locationSize*Ce)*Ae,j)}else{if(pe.isInstancedBufferAttribute){for(let ie=0;ie<J.locationSize;ie++)p(J.location+ie,pe.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ie=0;ie<J.locationSize;ie++)_(J.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ie=0;ie<J.locationSize;ie++)w(J.location+ie,_e/J.locationSize,lt,de,_e*Ae,_e/J.locationSize*ie*Ae,j)}}else if(Y!==void 0){const de=Y[O];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(J.location,de);break;case 3:n.vertexAttrib3fv(J.location,de);break;case 4:n.vertexAttrib4fv(J.location,de);break;default:n.vertexAttrib1fv(J.location,de)}}}}A()}function C(){G();for(const y in i){const U=i[y];for(const K in U){const W=U[K];for(const re in W)f(W[re].object),delete W[re];delete U[K]}delete i[y]}}function L(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const K in U){const W=U[K];for(const re in W)f(W[re].object),delete W[re];delete U[K]}delete i[y.id]}function I(y){for(const U in i){const K=i[U];if(K[y.id]===void 0)continue;const W=K[y.id];for(const re in W)f(W[re].object),delete W[re];delete K[y.id]}}function G(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:G,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:_,disableUnusedAttributes:A}}function dx(n,e,t){let i;function r(u){i=u}function s(u,f){n.drawArrays(i,u,f),t.update(f,i,1)}function o(u,f,h){h!==0&&(n.drawArraysInstanced(i,u,f,h),t.update(f,i,h))}function l(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=f[x];t.update(g,i,1)}function c(u,f,h,d){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<u.length;x++)o(u[x],f[x],d[x]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let x=0;for(let M=0;M<h;M++)x+=f[M]*d[M];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function px(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==on&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(I){const G=I===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==jt&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==xn&&!G)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=c(u);f!==u&&(Ve("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:T,maxSamples:C,samples:L}}function mx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ti,l=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,g){const x=h.clippingPlanes,M=h.clipIntersection,_=h.clipShadows,p=n.get(h);if(!r||x===null||x.length===0||s&&!_)s?f(null):u();else{const A=s?0:i,w=A*4;let T=p.clippingState||null;c.value=T,T=f(x,d,w,g);for(let C=0;C!==w;++C)T[C]=t[C];p.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,x){const M=h!==null?h.length:0;let _=null;if(M!==0){if(_=c.value,x!==!0||_===null){const p=g+M*4,A=d.matrixWorldInverse;l.getNormalMatrix(A),(_===null||_.length<p)&&(_=new Float32Array(p));for(let w=0,T=g;w!==M;++w,T+=4)o.copy(h[w]).applyMatrix4(A,l),o.normal.toArray(_,T),_[T+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}function gx(n){let e=new WeakMap;function t(o,l){return l===xo?o.mapping=Di:l===vo&&(o.mapping=ur),o}function i(o){if(o&&o.isTexture){const l=o.mapping;if(l===xo||l===vo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new th(c.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const oi=4,Zc=[.125,.215,.35,.446,.526,.582],wi=20,_x=256,br=new Ol,Jc=new Je;let Xa=null,qa=0,Ya=0,$a=!1;const xx=new k;class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:l=xx}=s;Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=$a,e.scissorTest=!1,Ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Xn,format:on,colorSpace:hr,depthBuffer:!1},r=eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vx(s)),this._blurMaterial=Mx(s,e,t),this._ggxMaterial=Sx(s,e,t)}return r}_compileMaterial(e){const t=new Wt(new Kn,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,i,r,s){const c=new tn(90,1,t,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,g=h.toneMapping;h.getClearColor(Jc),h.toneMapping=Mn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new Yn,new Kf({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,_=M.material;let p=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,p=!0):(_.color.copy(Jc),p=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(c.up.set(0,u[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[w],s.y,s.z)):T===1?(c.up.set(0,0,u[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[w],s.z)):(c.up.set(0,u[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[w]));const C=this._cubeSize;Ki(r,T*C,w>2?C:0,C,C),h.setRenderTarget(r),p&&h.render(M,c),h.render(e,c)}h.toneMapping=g,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Di||e.mapping===ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Ki(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,br)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms,u=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-f*f),d=0+u*1.25,g=h*d,{_lodMax:x}=this,M=this._sizeLods[i],_=3*M*(i>x-oi?i-x+oi:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=x-t,Ki(s,_,p,3*M,2*M),r.setRenderTarget(s),r.render(l,br),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-i,Ki(e,_,p,3*M,2*M),r.setRenderTarget(e),r.render(l,br)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=u;const d=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*wi-1),M=s/x,_=isFinite(s)?1+Math.floor(f*M):wi;_>wi&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${wi}`);const p=[];let A=0;for(let I=0;I<wi;++I){const G=I/M,E=Math.exp(-G*G/2);p.push(E),I===0?A+=E:I<_&&(A+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/A;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=o==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:w}=this;d.dTheta.value=x,d.mipInt.value=w-i;const T=this._sizeLods[r],C=3*T*(r>w-oi?r-w+oi:0),L=4*(this._cubeSize-T);Ki(t,C,L,3*T,2*T),c.setRenderTarget(t),c.render(h,br)}}function vx(n){const e=[],t=[],i=[];let r=n;const s=n-oi+1+Zc.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);e.push(l);let c=1/l;o>n-oi?c=Zc[o-n+oi-1]:o===0&&(c=0),t.push(c);const u=1/(l-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,x=6,M=3,_=2,p=1,A=new Float32Array(M*x*g),w=new Float32Array(_*x*g),T=new Float32Array(p*x*g);for(let L=0;L<g;L++){const I=L%3*2/3-1,G=L>2?0:-1,E=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];A.set(E,M*x*L),w.set(d,_*x*L);const y=[L,L,L,L,L,L];T.set(y,p*x*L)}const C=new Kn;C.setAttribute("position",new yn(A,M)),C.setAttribute("uv",new yn(w,_)),C.setAttribute("faceIndex",new yn(T,p)),i.push(new Wt(C,null)),r>oi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function eu(n,e,t){const i=new En(n,e,t);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ki(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Sx(n,e,t){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_x,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Mx(n,e,t){const i=new Float32Array(wi),r=new k(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ra(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function tu(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function nu(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ra(){return`

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
	`}function Ex(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const c=l.mapping,u=c===xo||c===vo,f=c===Di||c===ur;if(u||f){let h=e.get(l);const d=h!==void 0?h.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==d)return t===null&&(t=new Qc(n)),h=u?t.fromEquirectangular(l,h):t.fromCubemap(l,h),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),h.texture;if(h!==void 0)return h.texture;{const g=l.image;return u&&g&&g.height>0||f&&g&&r(g)?(t===null&&(t=new Qc(n)),h=u?t.fromEquirectangular(l):t.fromCubemap(l),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),l.addEventListener("dispose",s),h.texture):null}}}return l}function r(l){let c=0;const u=6;for(let f=0;f<u;f++)l[f]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Yr("WebGLRenderer: "+i+" extension not supported."),r}}}function bx(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER)}function u(h){const d=[],g=h.index,x=h.attributes.position;let M=0;if(g!==null){const A=g.array;M=g.version;for(let w=0,T=A.length;w<T;w+=3){const C=A[w+0],L=A[w+1],I=A[w+2];d.push(C,L,L,I,I,C)}}else if(x!==void 0){const A=x.array;M=x.version;for(let w=0,T=A.length/3-1;w<T;w+=3){const C=w+0,L=w+1,I=w+2;d.push(C,L,L,I,I,C)}}else return;const _=new(Xf(d)?Zf:jf)(d,1);_.version=M;const p=s.get(h);p&&e.remove(p),s.set(h,_)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&u(h)}else u(h);return s.get(h)}return{get:l,update:c,getWireframeAttribute:f}}function Tx(n,e,t){let i;function r(d){i=d}let s,o;function l(d){s=d.type,o=d.bytesPerElement}function c(d,g){n.drawElements(i,g,s,d*o),t.update(g,i,1)}function u(d,g,x){x!==0&&(n.drawElementsInstanced(i,g,s,d*o,x),t.update(g,i,x))}function f(d,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,d,0,x);let _=0;for(let p=0;p<x;p++)_+=g[p];t.update(_,i,1)}function h(d,g,x,M){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<d.length;p++)u(d[p]/o,g[p],M[p]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,d,0,M,0,x);let p=0;for(let A=0;A<x;A++)p+=g[A]*M[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Ax(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=l*(s/3);break;case n.LINES:t.lines+=l*(s/2);break;case n.LINE_STRIP:t.lines+=l*(s-1);break;case n.LINE_LOOP:t.lines+=l*s;break;case n.POINTS:t.points+=l*s;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wx(n,e,t){const i=new WeakMap,r=new _t;function s(o,l,c){const u=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(l);if(d===void 0||d.count!==h){let y=function(){G.dispose(),i.delete(l),l.removeEventListener("dispose",y)};var g=y;d!==void 0&&d.texture.dispose();const x=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],A=l.morphAttributes.normal||[],w=l.morphAttributes.color||[];let T=0;x===!0&&(T=1),M===!0&&(T=2),_===!0&&(T=3);let C=l.attributes.position.count*T,L=1;C>e.maxTextureSize&&(L=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const I=new Float32Array(C*L*4*h),G=new qf(I,C,L,h);G.type=xn,G.needsUpdate=!0;const E=T*4;for(let U=0;U<h;U++){const K=p[U],W=A[U],re=w[U],te=C*L*4*U;for(let Y=0;Y<K.count;Y++){const O=Y*E;x===!0&&(r.fromBufferAttribute(K,Y),I[te+O+0]=r.x,I[te+O+1]=r.y,I[te+O+2]=r.z,I[te+O+3]=0),M===!0&&(r.fromBufferAttribute(W,Y),I[te+O+4]=r.x,I[te+O+5]=r.y,I[te+O+6]=r.z,I[te+O+7]=0),_===!0&&(r.fromBufferAttribute(re,Y),I[te+O+8]=r.x,I[te+O+9]=r.y,I[te+O+10]=r.z,I[te+O+11]=re.itemSize===4?r.w:1)}}d={count:h,texture:G,size:new tt(C,L)},i.set(l,d),l.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let _=0;_<u.length;_++)x+=u[_];const M=l.morphTargetsRelative?1:1-x;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",u)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Rx(n,e,t,i){let r=new WeakMap;function s(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Cx={[Cf]:"LINEAR_TONE_MAPPING",[Pf]:"REINHARD_TONE_MAPPING",[Df]:"CINEON_TONE_MAPPING",[Lf]:"ACES_FILMIC_TONE_MAPPING",[Uf]:"AGX_TONE_MAPPING",[Nf]:"NEUTRAL_TONE_MAPPING",[If]:"CUSTOM_TONE_MAPPING"};function Px(n,e,t,i,r){const s=new En(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new En(e,t,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new Kn;l.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const c=new Sg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Wt(l,c),f=new Ol(-1,1,1,-1,0,1);let h=null,d=null,g=!1,x,M=null,_=[],p=!1;this.setSize=function(A,w){s.setSize(A,w),o.setSize(A,w);for(let T=0;T<_.length;T++){const C=_[T];C.setSize&&C.setSize(A,w)}},this.setEffects=function(A){_=A,p=_.length>0&&_[0].isRenderPass===!0;const w=s.width,T=s.height;for(let C=0;C<_.length;C++){const L=_[C];L.setSize&&L.setSize(w,T)}},this.begin=function(A,w){if(g||A.toneMapping===Mn&&_.length===0)return!1;if(M=w,w!==null){const T=w.width,C=w.height;(s.width!==T||s.height!==C)&&this.setSize(T,C)}return p===!1&&A.setRenderTarget(s),x=A.toneMapping,A.toneMapping=Mn,!0},this.hasRenderPass=function(){return p},this.end=function(A,w){A.toneMapping=x,g=!0;let T=s,C=o;for(let L=0;L<_.length;L++){const I=_[L];if(I.enabled!==!1&&(I.render(A,C,T,w),I.needsSwap!==!1)){const G=T;T=C,C=G}}if(h!==A.outputColorSpace||d!==A.toneMapping){h=A.outputColorSpace,d=A.toneMapping,c.defines={},Ze.getTransfer(h)===at&&(c.defines.SRGB_TRANSFER="");const L=Cx[d];L&&(c.defines[L]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,A.setRenderTarget(M),A.render(u,f),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),o.dispose(),l.dispose(),c.dispose()}}const sh=new Ot,el=new Kr(1,1),ah=new qf,oh=new Km,lh=new eh,iu=[],ru=[],su=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function gr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=iu[r];if(s===void 0&&(s=new Float32Array(r),iu[r]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,n[o].toArray(s,l)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sa(n,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function Nx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;ou.set(i),n.uniformMatrix2fv(this.addr,!1,ou),Et(t,i)}}function Fx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;au.set(i),n.uniformMatrix3fv(this.addr,!1,au),Et(t,i)}}function Ox(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;su.set(i),n.uniformMatrix4fv(this.addr,!1,su),Et(t,i)}}function Bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function Vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function Hx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function Wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(el.compareFunction=t.isReversedDepthBuffer()?Dl:Pl,s=el):s=sh,t.setTexture2D(e||s,r)}function Yx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||oh,r)}function $x(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||lh,r)}function Kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ah,r)}function jx(n){switch(n){case 5126:return Dx;case 35664:return Lx;case 35665:return Ix;case 35666:return Ux;case 35674:return Nx;case 35675:return Fx;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return Vx;case 35669:case 35673:return Gx;case 5125:return Hx;case 36294:return kx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Kx}}function Zx(n,e){n.uniform1fv(this.addr,e)}function Jx(n,e){const t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function Qx(n,e){const t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function ev(n,e){const t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function tv(n,e){const t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nv(n,e){const t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iv(n,e){const t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rv(n,e){n.uniform1iv(this.addr,e)}function sv(n,e){n.uniform2iv(this.addr,e)}function av(n,e){n.uniform3iv(this.addr,e)}function ov(n,e){n.uniform4iv(this.addr,e)}function lv(n,e){n.uniform1uiv(this.addr,e)}function cv(n,e){n.uniform2uiv(this.addr,e)}function uv(n,e){n.uniform3uiv(this.addr,e)}function fv(n,e){n.uniform4uiv(this.addr,e)}function hv(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=el:o=sh;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||o,s[l])}function dv(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||oh,s[o])}function pv(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||lh,s[o])}function mv(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ah,s[o])}function gv(n){switch(n){case 5126:return Zx;case 35664:return Jx;case 35665:return Qx;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return av;case 35669:case 35673:return ov;case 5125:return lv;case 36294:return cv;case 36295:return uv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}class _v{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jx(t.type)}}class xv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gv(t.type)}}class vv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,t[l.id],i)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function lu(n,e){n.seq.push(e),n.map[e.id]=e}function Sv(n,e,t){const i=n.name,r=i.length;for(Ka.lastIndex=0;;){const s=Ka.exec(i),o=Ka.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===r){lu(t,u===void 0?new _v(l,n,e):new xv(l,n,e));break}else{let h=t.map[l];h===void 0&&(h=new vv(l),lu(t,h)),t=h}}}class Os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);Sv(l,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const l=t[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function cu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Mv=37297;let Ev=0;function yv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}const uu=new We;function bv(n){Ze._getMatrix(uu,Ze.workingColorSpace,n);const e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Ws:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+yv(n.getShaderSource(e),l)}else return s}function Tv(n,e){const t=bv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Av={[Cf]:"Linear",[Pf]:"Reinhard",[Df]:"Cineon",[Lf]:"ACESFilmic",[Uf]:"AgX",[Nf]:"Neutral",[If]:"Custom"};function wv(n,e){const t=Av[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ts=new k;function Rv(){Ze.getLuminanceCoefficients(Ts);const n=Ts.x.toFixed(4),e=Ts.y.toFixed(4),t=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Pv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Dv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let l=1;s.type===n.FLOAT_MAT2&&(l=2),s.type===n.FLOAT_MAT3&&(l=3),s.type===n.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:l}}return t}function Cr(n){return n!==""}function hu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(n){return n.replace(Lv,Uv)}const Iv=new Map;function Uv(n,e){let t=qe[e];if(t===void 0){const i=Iv.get(e);if(i!==void 0)t=qe[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tl(t)}const Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(n){return n.replace(Nv,Fv)}function Fv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ov={[Ls]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function Bv(n){return Ov[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zv={[Di]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};function Vv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":zv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Gv={[ur]:"ENVMAP_MODE_REFRACTION"};function Hv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Gv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kv={[Rf]:"ENVMAP_BLENDING_MULTIPLY",[mm]:"ENVMAP_BLENDING_MIX",[gm]:"ENVMAP_BLENDING_ADD"};function Wv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":kv[n.combine]||"ENVMAP_BLENDING_NONE"}function Xv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qv(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=Bv(t),u=Vv(t),f=Hv(t),h=Wv(t),d=Xv(t),g=Cv(t),x=Pv(s),M=r.createProgram();let _,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Cr).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(_=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Mn?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Tv("linearToOutputTexel",t.outputColorSpace),Rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),o=tl(o),o=hu(o,t),o=du(o,t),l=tl(l),l=hu(l,t),l=du(l,t),o=pu(o),l=pu(l),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=A+_+o,T=A+p+l,C=cu(r,r.VERTEX_SHADER,w),L=cu(r,r.FRAGMENT_SHADER,T);r.attachShader(M,C),r.attachShader(M,L),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function I(U){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(M)||"",W=r.getShaderInfoLog(C)||"",re=r.getShaderInfoLog(L)||"",te=K.trim(),Y=W.trim(),O=re.trim();let J=!0,pe=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,C,L);else{const de=fu(r,C,"vertex"),_e=fu(r,L,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+te+`
`+de+`
`+_e)}else te!==""?Ve("WebGLProgram: Program Info Log:",te):(Y===""||O==="")&&(pe=!1);pe&&(U.diagnostics={runnable:J,programLog:te,vertexShader:{log:Y,prefix:_},fragmentShader:{log:O,prefix:p}})}r.deleteShader(C),r.deleteShader(L),G=new Os(r,M),E=Dv(r,M)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,Mv)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ev++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=L,this}let Yv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Kv(e),t.set(e,i)),i}}class Kv{constructor(e){this.id=Yv++,this.code=e,this.usedTimes=0}}function jv(n,e,t,i,r,s,o){const l=new Yf,c=new $v,u=new Set,f=[],h=new Map,d=r.logarithmicDepthBuffer;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return u.add(E),E===0?"uv":`uv${E}`}function _(E,y,U,K,W){const re=K.fog,te=W.geometry,Y=E.isMeshStandardMaterial?K.environment:null,O=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),J=O&&O.mapping===na?O.image.height:null,pe=x[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&Ve("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const de=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,_e=de!==void 0?de.length:0;let Oe=0;te.morphAttributes.position!==void 0&&(Oe=1),te.morphAttributes.normal!==void 0&&(Oe=2),te.morphAttributes.color!==void 0&&(Oe=3);let Ge,lt,Ae,j;if(pe){const rt=gn[pe];Ge=rt.vertexShader,lt=rt.fragmentShader}else Ge=E.vertexShader,lt=E.fragmentShader,c.update(E),Ae=c.getVertexShaderID(E),j=c.getFragmentShaderID(E);const ie=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),ze=W.isInstancedMesh===!0,Ce=W.isBatchedMesh===!0,Ke=!!E.map,R=!!E.matcap,D=!!O,V=!!E.aoMap,ee=!!E.lightMap,$=!!E.bumpMap,ne=!!E.normalMap,b=!!E.displacementMap,le=!!E.emissiveMap,se=!!E.metalnessMap,Q=!!E.roughnessMap,ae=E.anisotropy>0,v=E.clearcoat>0,m=E.dispersion>0,P=E.iridescence>0,H=E.sheen>0,Z=E.transmission>0,z=ae&&!!E.anisotropyMap,ye=v&&!!E.clearcoatMap,ue=v&&!!E.clearcoatNormalMap,we=v&&!!E.clearcoatRoughnessMap,Ie=P&&!!E.iridescenceMap,ce=P&&!!E.iridescenceThicknessMap,ge=H&&!!E.sheenColorMap,ve=H&&!!E.sheenRoughnessMap,Re=!!E.specularMap,me=!!E.specularColorMap,ke=!!E.specularIntensityMap,N=Z&&!!E.transmissionMap,Te=Z&&!!E.thicknessMap,he=!!E.gradientMap,Pe=!!E.alphaMap,fe=E.alphaTest>0,oe=!!E.alphaHash,xe=!!E.extensions;let He=Mn;E.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(He=n.toneMapping);const ut={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:lt,defines:E.defines,customVertexShaderID:Ae,customFragmentShaderID:j,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&W._colorsTexture!==null,instancing:ze,instancingColor:ze&&W.instanceColor!==null,instancingMorph:ze&&W.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:hr,alphaToCoverage:!!E.alphaToCoverage,map:Ke,matcap:R,envMap:D,envMapMode:D&&O.mapping,envMapCubeUVHeight:J,aoMap:V,lightMap:ee,bumpMap:$,normalMap:ne,displacementMap:b,emissiveMap:le,normalMapObjectSpace:ne&&E.normalMapType===vm,normalMapTangentSpace:ne&&E.normalMapType===Wf,metalnessMap:se,roughnessMap:Q,anisotropy:ae,anisotropyMap:z,clearcoat:v,clearcoatMap:ye,clearcoatNormalMap:ue,clearcoatRoughnessMap:we,dispersion:m,iridescence:P,iridescenceMap:Ie,iridescenceThicknessMap:ce,sheen:H,sheenColorMap:ge,sheenRoughnessMap:ve,specularMap:Re,specularColorMap:me,specularIntensityMap:ke,transmission:Z,transmissionMap:N,thicknessMap:Te,gradientMap:he,opaque:E.transparent===!1&&E.blending===sr&&E.alphaToCoverage===!1,alphaMap:Pe,alphaTest:fe,alphaHash:oe,combine:E.combine,mapUv:Ke&&M(E.map.channel),aoMapUv:V&&M(E.aoMap.channel),lightMapUv:ee&&M(E.lightMap.channel),bumpMapUv:$&&M(E.bumpMap.channel),normalMapUv:ne&&M(E.normalMap.channel),displacementMapUv:b&&M(E.displacementMap.channel),emissiveMapUv:le&&M(E.emissiveMap.channel),metalnessMapUv:se&&M(E.metalnessMap.channel),roughnessMapUv:Q&&M(E.roughnessMap.channel),anisotropyMapUv:z&&M(E.anisotropyMap.channel),clearcoatMapUv:ye&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:ue&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&M(E.sheenRoughnessMap.channel),specularMapUv:Re&&M(E.specularMap.channel),specularColorMapUv:me&&M(E.specularColorMap.channel),specularIntensityMapUv:ke&&M(E.specularIntensityMap.channel),transmissionMapUv:N&&M(E.transmissionMap.channel),thicknessMapUv:Te&&M(E.thicknessMap.channel),alphaMapUv:Pe&&M(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(ne||ae),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!te.attributes.uv&&(Ke||Pe),fog:!!re,useFog:E.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:W.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Ke&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===at,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===On,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ut.vertexUv1s=u.has(1),ut.vertexUv2s=u.has(2),ut.vertexUv3s=u.has(3),u.clear(),ut}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)y.push(U),y.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(A(y,E),w(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function A(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function w(E,y){l.disableAll(),y.instancing&&l.enable(0),y.instancingColor&&l.enable(1),y.instancingMorph&&l.enable(2),y.matcap&&l.enable(3),y.envMap&&l.enable(4),y.normalMapObjectSpace&&l.enable(5),y.normalMapTangentSpace&&l.enable(6),y.clearcoat&&l.enable(7),y.iridescence&&l.enable(8),y.alphaTest&&l.enable(9),y.vertexColors&&l.enable(10),y.vertexAlphas&&l.enable(11),y.vertexUv1s&&l.enable(12),y.vertexUv2s&&l.enable(13),y.vertexUv3s&&l.enable(14),y.vertexTangents&&l.enable(15),y.anisotropy&&l.enable(16),y.alphaHash&&l.enable(17),y.batching&&l.enable(18),y.dispersion&&l.enable(19),y.batchingColor&&l.enable(20),y.gradientMap&&l.enable(21),E.push(l.mask),l.disableAll(),y.fog&&l.enable(0),y.useFog&&l.enable(1),y.flatShading&&l.enable(2),y.logarithmicDepthBuffer&&l.enable(3),y.reversedDepthBuffer&&l.enable(4),y.skinning&&l.enable(5),y.morphTargets&&l.enable(6),y.morphNormals&&l.enable(7),y.morphColors&&l.enable(8),y.premultipliedAlpha&&l.enable(9),y.shadowMapEnabled&&l.enable(10),y.doubleSided&&l.enable(11),y.flipSided&&l.enable(12),y.useDepthPacking&&l.enable(13),y.dithering&&l.enable(14),y.transmission&&l.enable(15),y.sheen&&l.enable(16),y.opaque&&l.enable(17),y.pointsUvs&&l.enable(18),y.decodeVideoTexture&&l.enable(19),y.decodeVideoTextureEmissive&&l.enable(20),y.alphaToCoverage&&l.enable(21),E.push(l.mask)}function T(E){const y=x[E.type];let U;if(y){const K=gn[y];U=cg.clone(K.uniforms)}else U=E.uniforms;return U}function C(E,y){let U=h.get(y);return U!==void 0?++U.usedTimes:(U=new qv(n,y,E,s),f.push(U),h.set(y,U)),U}function L(E){if(--E.usedTimes===0){const y=f.indexOf(E);f[y]=f[f.length-1],f.pop(),h.delete(E.cacheKey),E.destroy()}}function I(E){c.remove(E)}function G(){c.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:C,releaseProgram:L,releaseShaderCache:I,programs:f,dispose:G}}function Zv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function r(o,l,c){n.get(o)[l]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Jv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _u(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,g,x,M,_){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:g,groupOrder:x,renderOrder:h.renderOrder,z:M,group:_},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=g,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=M,p.group=_),e++,p}function l(h,d,g,x,M,_){const p=o(h,d,g,x,M,_);g.transmission>0?i.push(p):g.transparent===!0?r.push(p):t.push(p)}function c(h,d,g,x,M,_){const p=o(h,d,g,x,M,_);g.transmission>0?i.unshift(p):g.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,d){t.length>1&&t.sort(h||Jv),i.length>1&&i.sort(d||gu),r.length>1&&r.sort(d||gu)}function f(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function Qv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new _u,n.set(i,[o])):r>=s.length?(o=new _u,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Je};break;case"SpotLight":t={position:new k,direction:new k,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function tS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nS=0;function iS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rS(n){const e=new eS,t=tS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new xt,o=new xt;function l(u){let f=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,x=0,M=0,_=0,p=0,A=0,w=0,T=0,C=0,L=0,I=0;u.sort(iS);for(let E=0,y=u.length;E<y;E++){const U=u[E],K=U.color,W=U.intensity,re=U.distance;let te=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===fr?te=U.shadow.map.texture:te=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)f+=K.r*W,h+=K.g*W,d+=K.b*W;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],W);I++}else if(U.isDirectionalLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const O=U.shadow,J=t.get(U);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=te,i.directionalShadowMatrix[g]=U.shadow.matrix,A++}i.directional[g]=Y,g++}else if(U.isSpotLight){const Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(K).multiplyScalar(W),Y.distance=re,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[M]=Y;const O=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,O.updateMatrices(U),U.castShadow&&L++),i.spotLightMatrix[M]=O.matrix,U.castShadow){const J=t.get(U);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,i.spotShadow[M]=J,i.spotShadowMap[M]=te,T++}M++}else if(U.isRectAreaLight){const Y=e.get(U);Y.color.copy(K).multiplyScalar(W),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=Y,_++}else if(U.isPointLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const O=U.shadow,J=t.get(U);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,J.shadowCameraNear=O.camera.near,J.shadowCameraFar=O.camera.far,i.pointShadow[x]=J,i.pointShadowMap[x]=te,i.pointShadowMatrix[x]=U.shadow.matrix,w++}i.point[x]=Y,x++}else if(U.isHemisphereLight){const Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(W),Y.groundColor.copy(U.groundColor).multiplyScalar(W),i.hemi[p]=Y,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const G=i.hash;(G.directionalLength!==g||G.pointLength!==x||G.spotLength!==M||G.rectAreaLength!==_||G.hemiLength!==p||G.numDirectionalShadows!==A||G.numPointShadows!==w||G.numSpotShadows!==T||G.numSpotMaps!==C||G.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=M,i.rectArea.length=_,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=T+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,G.directionalLength=g,G.pointLength=x,G.spotLength=M,G.rectAreaLength=_,G.hemiLength=p,G.numDirectionalShadows=A,G.numPointShadows=w,G.numSpotShadows=T,G.numSpotMaps=C,G.numLightProbes=I,i.version=nS++)}function c(u,f){let h=0,d=0,g=0,x=0,M=0;const _=f.matrixWorldInverse;for(let p=0,A=u.length;p<A;p++){const w=u[p];if(w.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),h++}else if(w.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(_),o.identity(),s.copy(w.matrixWorld),s.premultiply(_),o.extractRotation(s),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(_),d++}else if(w.isHemisphereLight){const T=i.hemi[M];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(_),M++}}}return{setup:l,setupView:c,state:i}}function xu(n){const e=new rS(n),t=[],i=[];function r(f){u.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function o(f){i.push(f)}function l(){e.setup(t)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function sS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let l;return o===void 0?(l=new xu(n),e.set(r,[l])):s>=o.length?(l=new xu(n),o.push(l)):l=o[s],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const aS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lS=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],cS=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],vu=new xt,Tr=new k,ja=new k;function uS(n,e,t){let i=new Fl;const r=new tt,s=new tt,o=new _t,l=new Mg,c=new Eg,u={},f=t.maxTextureSize,h={[hi]:kt,[kt]:hi,[On]:On},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:aS,fragmentShader:oS}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Kn;x.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Wt(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let p=this.type;this.render=function(L,I,G){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;L.type===jp&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Ls);const E=n.getRenderTarget(),y=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),K=n.state;K.setBlending(zn),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const W=p!==this.type;W&&I.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(te=>te.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,te=L.length;re<te;re++){const Y=L[re],O=Y.shadow;if(O===void 0){Ve("WebGLShadowMap:",Y,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const J=O.getFrameExtents();if(r.multiply(J),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/J.x),r.x=s.x*J.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/J.y),r.y=s.y*J.y,O.mapSize.y=s.y)),O.map===null||W===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Rr){if(Y.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new En(r.x,r.y,{format:fr,type:Xn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),O.map.texture.name=Y.name+".shadowMap",O.map.depthTexture=new Kr(r.x,r.y,xn),O.map.depthTexture.name=Y.name+".shadowMapDepth",O.map.depthTexture.format=qn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=bt,O.map.depthTexture.magFilter=bt}else{Y.isPointLight?(O.map=new th(r.x),O.map.depthTexture=new vg(r.x,Tn)):(O.map=new En(r.x,r.y),O.map.depthTexture=new Kr(r.x,r.y,Tn)),O.map.depthTexture.name=Y.name+".shadowMap",O.map.depthTexture.format=qn;const de=n.state.buffers.depth.getReversed();this.type===Ls?(O.map.depthTexture.compareFunction=de?Dl:Pl,O.map.depthTexture.minFilter=Rt,O.map.depthTexture.magFilter=Rt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=bt,O.map.depthTexture.magFilter=bt)}O.camera.updateProjectionMatrix()}const pe=O.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<pe;de++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,de),n.clear();else{de===0&&(n.setRenderTarget(O.map),n.clear());const _e=O.getViewport(de);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),K.viewport(o)}if(Y.isPointLight){const _e=O.camera,Oe=O.matrix,Ge=Y.distance||_e.far;Ge!==_e.far&&(_e.far=Ge,_e.updateProjectionMatrix()),Tr.setFromMatrixPosition(Y.matrixWorld),_e.position.copy(Tr),ja.copy(_e.position),ja.add(lS[de]),_e.up.copy(cS[de]),_e.lookAt(ja),_e.updateMatrixWorld(),Oe.makeTranslation(-Tr.x,-Tr.y,-Tr.z),vu.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),O._frustum.setFromProjectionMatrix(vu,_e.coordinateSystem,_e.reversedDepth)}else O.updateMatrices(Y);i=O.getFrustum(),T(I,G,O.camera,Y,this.type)}O.isPointLightShadow!==!0&&this.type===Rr&&A(O,G),O.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(E,y,U)};function A(L,I){const G=e.update(M);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new En(r.x,r.y,{format:fr,type:Xn})),d.uniforms.shadow_pass.value=L.map.depthTexture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(I,null,G,d,M,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(I,null,G,g,M,null)}function w(L,I,G,E){let y=null;const U=G.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)y=U;else if(y=G.isPointLight===!0?c:l,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const K=y.uuid,W=I.uuid;let re=u[K];re===void 0&&(re={},u[K]=re);let te=re[W];te===void 0&&(te=y.clone(),re[W]=te,I.addEventListener("dispose",C)),y=te}if(y.visible=I.visible,y.wireframe=I.wireframe,E===Rr?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:h[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,G.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=n.properties.get(y);K.light=G}return y}function T(L,I,G,E,y){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&y===Rr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,L.matrixWorld);const W=e.update(L),re=L.material;if(Array.isArray(re)){const te=W.groups;for(let Y=0,O=te.length;Y<O;Y++){const J=te[Y],pe=re[J.materialIndex];if(pe&&pe.visible){const de=w(L,pe,E,y);L.onBeforeShadow(n,L,I,G,W,de,J),n.renderBufferDirect(G,null,W,de,L,J),L.onAfterShadow(n,L,I,G,W,de,J)}}}else if(re.visible){const te=w(L,re,E,y);L.onBeforeShadow(n,L,I,G,W,te,null),n.renderBufferDirect(G,null,W,te,L,null),L.onAfterShadow(n,L,I,G,W,te,null)}}const K=L.children;for(let W=0,re=K.length;W<re;W++)T(K[W],I,G,E,y)}function C(L){L.target.removeEventListener("dispose",C);for(const G in u){const E=u[G],y=L.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const fS={[uo]:fo,[ho]:go,[po]:_o,[cr]:mo,[fo]:uo,[go]:ho,[_o]:po,[mo]:cr};function hS(n,e){function t(){let N=!1;const Te=new _t;let he=null;const Pe=new _t(0,0,0,0);return{setMask:function(fe){he!==fe&&!N&&(n.colorMask(fe,fe,fe,fe),he=fe)},setLocked:function(fe){N=fe},setClear:function(fe,oe,xe,He,ut){ut===!0&&(fe*=He,oe*=He,xe*=He),Te.set(fe,oe,xe,He),Pe.equals(Te)===!1&&(n.clearColor(fe,oe,xe,He),Pe.copy(Te))},reset:function(){N=!1,he=null,Pe.set(-1,0,0,0)}}}function i(){let N=!1,Te=!1,he=null,Pe=null,fe=null;return{setReversed:function(oe){if(Te!==oe){const xe=e.get("EXT_clip_control");oe?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),Te=oe;const He=fe;fe=null,this.setClear(He)}},getReversed:function(){return Te},setTest:function(oe){oe?ie(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(oe){he!==oe&&!N&&(n.depthMask(oe),he=oe)},setFunc:function(oe){if(Te&&(oe=fS[oe]),Pe!==oe){switch(oe){case uo:n.depthFunc(n.NEVER);break;case fo:n.depthFunc(n.ALWAYS);break;case ho:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case po:n.depthFunc(n.EQUAL);break;case mo:n.depthFunc(n.GEQUAL);break;case go:n.depthFunc(n.GREATER);break;case _o:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=oe}},setLocked:function(oe){N=oe},setClear:function(oe){fe!==oe&&(Te&&(oe=1-oe),n.clearDepth(oe),fe=oe)},reset:function(){N=!1,he=null,Pe=null,fe=null,Te=!1}}}function r(){let N=!1,Te=null,he=null,Pe=null,fe=null,oe=null,xe=null,He=null,ut=null;return{setTest:function(rt){N||(rt?ie(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(rt){Te!==rt&&!N&&(n.stencilMask(rt),Te=rt)},setFunc:function(rt,un,Rn){(he!==rt||Pe!==un||fe!==Rn)&&(n.stencilFunc(rt,un,Rn),he=rt,Pe=un,fe=Rn)},setOp:function(rt,un,Rn){(oe!==rt||xe!==un||He!==Rn)&&(n.stencilOp(rt,un,Rn),oe=rt,xe=un,He=Rn)},setLocked:function(rt){N=rt},setClear:function(rt){ut!==rt&&(n.clearStencil(rt),ut=rt)},reset:function(){N=!1,Te=null,he=null,Pe=null,fe=null,oe=null,xe=null,He=null,ut=null}}}const s=new t,o=new i,l=new r,c=new WeakMap,u=new WeakMap;let f={},h={},d=new WeakMap,g=[],x=null,M=!1,_=null,p=null,A=null,w=null,T=null,C=null,L=null,I=new Je(0,0,0),G=0,E=!1,y=null,U=null,K=null,W=null,re=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,O=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=O>=1):J.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=O>=2);let pe=null,de={};const _e=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Ge=new _t().fromArray(_e),lt=new _t().fromArray(Oe);function Ae(N,Te,he,Pe){const fe=new Uint8Array(4),oe=n.createTexture();n.bindTexture(N,oe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<he;xe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(Te+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return oe}const j={};j[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),ie(n.DEPTH_TEST),o.setFunc(cr),$(!1),ne(Mc),ie(n.CULL_FACE),V(zn);function ie(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function Me(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function ze(N,Te){return h[N]!==Te?(n.bindFramebuffer(N,Te),h[N]=Te,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ce(N,Te){let he=g,Pe=!1;if(N){he=d.get(Te),he===void 0&&(he=[],d.set(Te,he));const fe=N.textures;if(he.length!==fe.length||he[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,xe=fe.length;oe<xe;oe++)he[oe]=n.COLOR_ATTACHMENT0+oe;he.length=fe.length,Pe=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(he)}function Ke(N){return x!==N?(n.useProgram(N),x=N,!0):!1}const R={[Ai]:n.FUNC_ADD,[Jp]:n.FUNC_SUBTRACT,[Qp]:n.FUNC_REVERSE_SUBTRACT};R[em]=n.MIN,R[tm]=n.MAX;const D={[nm]:n.ZERO,[im]:n.ONE,[rm]:n.SRC_COLOR,[lo]:n.SRC_ALPHA,[um]:n.SRC_ALPHA_SATURATE,[lm]:n.DST_COLOR,[am]:n.DST_ALPHA,[sm]:n.ONE_MINUS_SRC_COLOR,[co]:n.ONE_MINUS_SRC_ALPHA,[cm]:n.ONE_MINUS_DST_COLOR,[om]:n.ONE_MINUS_DST_ALPHA,[fm]:n.CONSTANT_COLOR,[hm]:n.ONE_MINUS_CONSTANT_COLOR,[dm]:n.CONSTANT_ALPHA,[pm]:n.ONE_MINUS_CONSTANT_ALPHA};function V(N,Te,he,Pe,fe,oe,xe,He,ut,rt){if(N===zn){M===!0&&(Me(n.BLEND),M=!1);return}if(M===!1&&(ie(n.BLEND),M=!0),N!==Zp){if(N!==_||rt!==E){if((p!==Ai||T!==Ai)&&(n.blendEquation(n.FUNC_ADD),p=Ai,T=Ai),rt)switch(N){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ec:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",N);break}else switch(N){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ec:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yc:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",N);break}A=null,w=null,C=null,L=null,I.set(0,0,0),G=0,_=N,E=rt}return}fe=fe||Te,oe=oe||he,xe=xe||Pe,(Te!==p||fe!==T)&&(n.blendEquationSeparate(R[Te],R[fe]),p=Te,T=fe),(he!==A||Pe!==w||oe!==C||xe!==L)&&(n.blendFuncSeparate(D[he],D[Pe],D[oe],D[xe]),A=he,w=Pe,C=oe,L=xe),(He.equals(I)===!1||ut!==G)&&(n.blendColor(He.r,He.g,He.b,ut),I.copy(He),G=ut),_=N,E=!1}function ee(N,Te){N.side===On?Me(n.CULL_FACE):ie(n.CULL_FACE);let he=N.side===kt;Te&&(he=!he),$(he),N.blending===sr&&N.transparent===!1?V(zn):V(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Pe=N.stencilWrite;l.setTest(Pe),Pe&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function ne(N){N!==$p?(ie(n.CULL_FACE),N!==U&&(N===Mc?n.cullFace(n.BACK):N===Kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),U=N}function b(N){N!==K&&(Y&&n.lineWidth(N),K=N)}function le(N,Te,he){N?(ie(n.POLYGON_OFFSET_FILL),(W!==Te||re!==he)&&(n.polygonOffset(Te,he),W=Te,re=he)):Me(n.POLYGON_OFFSET_FILL)}function se(N){N?ie(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function Q(N){N===void 0&&(N=n.TEXTURE0+te-1),pe!==N&&(n.activeTexture(N),pe=N)}function ae(N,Te,he){he===void 0&&(pe===null?he=n.TEXTURE0+te-1:he=pe);let Pe=de[he];Pe===void 0&&(Pe={type:void 0,texture:void 0},de[he]=Pe),(Pe.type!==N||Pe.texture!==Te)&&(pe!==he&&(n.activeTexture(he),pe=he),n.bindTexture(N,Te||j[N]),Pe.type=N,Pe.texture=Te)}function v(){const N=de[pe];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function m(){try{n.compressedTexImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function H(){try{n.texSubImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function Z(){try{n.texSubImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function ue(){try{n.texStorage2D(...arguments)}catch(N){et("WebGLState:",N)}}function we(){try{n.texStorage3D(...arguments)}catch(N){et("WebGLState:",N)}}function Ie(){try{n.texImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function ce(){try{n.texImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function ge(N){Ge.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ge.copy(N))}function ve(N){lt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),lt.copy(N))}function Re(N,Te){let he=u.get(Te);he===void 0&&(he=new WeakMap,u.set(Te,he));let Pe=he.get(N);Pe===void 0&&(Pe=n.getUniformBlockIndex(Te,N.name),he.set(N,Pe))}function me(N,Te){const Pe=u.get(Te).get(N);c.get(Te)!==Pe&&(n.uniformBlockBinding(Te,Pe,N.__bindingPointIndex),c.set(Te,Pe))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},pe=null,de={},h={},d=new WeakMap,g=[],x=null,M=!1,_=null,p=null,A=null,w=null,T=null,C=null,L=null,I=new Je(0,0,0),G=0,E=!1,y=null,U=null,K=null,W=null,re=null,Ge.set(0,0,n.canvas.width,n.canvas.height),lt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:ie,disable:Me,bindFramebuffer:ze,drawBuffers:Ce,useProgram:Ke,setBlending:V,setMaterial:ee,setFlipSided:$,setCullFace:ne,setLineWidth:b,setPolygonOffset:le,setScissorTest:se,activeTexture:Q,bindTexture:ae,unbindTexture:v,compressedTexImage2D:m,compressedTexImage3D:P,texImage2D:Ie,texImage3D:ce,updateUBOMapping:Re,uniformBlockBinding:me,texStorage2D:ue,texStorage3D:we,texSubImage2D:H,texSubImage3D:Z,compressedTexSubImage2D:z,compressedTexSubImage3D:ye,scissor:ge,viewport:ve,reset:ke}}function dS(n,e,t,i,r,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new tt,f=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(v,m){return g?new OffscreenCanvas(v,m):qs("canvas")}function M(v,m,P){let H=1;const Z=ae(v);if((Z.width>P||Z.height>P)&&(H=P/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const z=Math.floor(H*Z.width),ye=Math.floor(H*Z.height);h===void 0&&(h=x(z,ye));const ue=m?x(z,ye):h;return ue.width=z,ue.height=ye,ue.getContext("2d").drawImage(v,0,0,z,ye),Ve("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+ye+")."),ue}else return"data"in v&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),v;return v}function _(v){return v.generateMipmaps}function p(v){n.generateMipmap(v)}function A(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(v,m,P,H,Z=!1){if(v!==null){if(n[v]!==void 0)return n[v];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let z=m;if(m===n.RED&&(P===n.FLOAT&&(z=n.R32F),P===n.HALF_FLOAT&&(z=n.R16F),P===n.UNSIGNED_BYTE&&(z=n.R8)),m===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(z=n.R8UI),P===n.UNSIGNED_SHORT&&(z=n.R16UI),P===n.UNSIGNED_INT&&(z=n.R32UI),P===n.BYTE&&(z=n.R8I),P===n.SHORT&&(z=n.R16I),P===n.INT&&(z=n.R32I)),m===n.RG&&(P===n.FLOAT&&(z=n.RG32F),P===n.HALF_FLOAT&&(z=n.RG16F),P===n.UNSIGNED_BYTE&&(z=n.RG8)),m===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(z=n.RG8UI),P===n.UNSIGNED_SHORT&&(z=n.RG16UI),P===n.UNSIGNED_INT&&(z=n.RG32UI),P===n.BYTE&&(z=n.RG8I),P===n.SHORT&&(z=n.RG16I),P===n.INT&&(z=n.RG32I)),m===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(z=n.RGB8UI),P===n.UNSIGNED_SHORT&&(z=n.RGB16UI),P===n.UNSIGNED_INT&&(z=n.RGB32UI),P===n.BYTE&&(z=n.RGB8I),P===n.SHORT&&(z=n.RGB16I),P===n.INT&&(z=n.RGB32I)),m===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),P===n.UNSIGNED_INT&&(z=n.RGBA32UI),P===n.BYTE&&(z=n.RGBA8I),P===n.SHORT&&(z=n.RGBA16I),P===n.INT&&(z=n.RGBA32I)),m===n.RGB&&(P===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(z=n.R11F_G11F_B10F)),m===n.RGBA){const ye=Z?Ws:Ze.getTransfer(H);P===n.FLOAT&&(z=n.RGBA32F),P===n.HALF_FLOAT&&(z=n.RGBA16F),P===n.UNSIGNED_BYTE&&(z=ye===at?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function T(v,m){let P;return v?m===null||m===Tn||m===qr?P=n.DEPTH24_STENCIL8:m===xn?P=n.DEPTH32F_STENCIL8:m===Xr&&(P=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Tn||m===qr?P=n.DEPTH_COMPONENT24:m===xn?P=n.DEPTH_COMPONENT32F:m===Xr&&(P=n.DEPTH_COMPONENT16),P}function C(v,m){return _(v)===!0||v.isFramebufferTexture&&v.minFilter!==bt&&v.minFilter!==Rt?Math.log2(Math.max(m.width,m.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?m.mipmaps.length:1}function L(v){const m=v.target;m.removeEventListener("dispose",L),G(m),m.isVideoTexture&&f.delete(m)}function I(v){const m=v.target;m.removeEventListener("dispose",I),y(m)}function G(v){const m=i.get(v);if(m.__webglInit===void 0)return;const P=v.source,H=d.get(P);if(H){const Z=H[m.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(v),Object.keys(H).length===0&&d.delete(P)}i.remove(v)}function E(v){const m=i.get(v);n.deleteTexture(m.__webglTexture);const P=v.source,H=d.get(P);delete H[m.__cacheKey],o.memory.textures--}function y(v){const m=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(m.__webglFramebuffer[H]))for(let Z=0;Z<m.__webglFramebuffer[H].length;Z++)n.deleteFramebuffer(m.__webglFramebuffer[H][Z]);else n.deleteFramebuffer(m.__webglFramebuffer[H]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[H])}else{if(Array.isArray(m.__webglFramebuffer))for(let H=0;H<m.__webglFramebuffer.length;H++)n.deleteFramebuffer(m.__webglFramebuffer[H]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let H=0;H<m.__webglColorRenderbuffer.length;H++)m.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[H]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const P=v.textures;for(let H=0,Z=P.length;H<Z;H++){const z=i.get(P[H]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(P[H])}i.remove(v)}let U=0;function K(){U=0}function W(){const v=U;return v>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),U+=1,v}function re(v){const m=[];return m.push(v.wrapS),m.push(v.wrapT),m.push(v.wrapR||0),m.push(v.magFilter),m.push(v.minFilter),m.push(v.anisotropy),m.push(v.internalFormat),m.push(v.format),m.push(v.type),m.push(v.generateMipmaps),m.push(v.premultiplyAlpha),m.push(v.flipY),m.push(v.unpackAlignment),m.push(v.colorSpace),m.join()}function te(v,m){const P=i.get(v);if(v.isVideoTexture&&se(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&P.__version!==v.version){const H=v.image;if(H===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{j(P,v,m);return}}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+m)}function Y(v,m){const P=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){j(P,v,m);return}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+m)}function O(v,m){const P=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){j(P,v,m);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+m)}function J(v,m){const P=i.get(v);if(v.isCubeDepthTexture!==!0&&v.version>0&&P.__version!==v.version){ie(P,v,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+m)}const pe={[So]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[Mo]:n.MIRRORED_REPEAT},de={[bt]:n.NEAREST,[_m]:n.NEAREST_MIPMAP_NEAREST,[ss]:n.NEAREST_MIPMAP_LINEAR,[Rt]:n.LINEAR,[Ma]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},_e={[Sm]:n.NEVER,[Tm]:n.ALWAYS,[Mm]:n.LESS,[Pl]:n.LEQUAL,[Em]:n.EQUAL,[Dl]:n.GEQUAL,[ym]:n.GREATER,[bm]:n.NOTEQUAL};function Oe(v,m){if(m.type===xn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Rt||m.magFilter===Ma||m.magFilter===ss||m.magFilter===Ri||m.minFilter===Rt||m.minFilter===Ma||m.minFilter===ss||m.minFilter===Ri)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,pe[m.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,pe[m.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,pe[m.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,de[m.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,de[m.minFilter]),m.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,_e[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===bt||m.minFilter!==ss&&m.minFilter!==Ri||m.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Ge(v,m){let P=!1;v.__webglInit===void 0&&(v.__webglInit=!0,m.addEventListener("dispose",L));const H=m.source;let Z=d.get(H);Z===void 0&&(Z={},d.set(H,Z));const z=re(m);if(z!==v.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Z[z].usedTimes++;const ye=Z[v.__cacheKey];ye!==void 0&&(Z[v.__cacheKey].usedTimes--,ye.usedTimes===0&&E(m)),v.__cacheKey=z,v.__webglTexture=Z[z].texture}return P}function lt(v,m,P){return Math.floor(Math.floor(v/P)/m)}function Ae(v,m,P,H){const z=v.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,P,H,m.data);else{z.sort((ce,ge)=>ce.start-ge.start);let ye=0;for(let ce=1;ce<z.length;ce++){const ge=z[ye],ve=z[ce],Re=ge.start+ge.count,me=lt(ve.start,m.width,4),ke=lt(ge.start,m.width,4);ve.start<=Re+1&&me===ke&&lt(ve.start+ve.count-1,m.width,4)===me?ge.count=Math.max(ge.count,ve.start+ve.count-ge.start):(++ye,z[ye]=ve)}z.length=ye+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let ce=0,ge=z.length;ce<ge;ce++){const ve=z[ce],Re=Math.floor(ve.start/4),me=Math.ceil(ve.count/4),ke=Re%m.width,N=Math.floor(Re/m.width),Te=me,he=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,ke,N,Te,he,P,H,m.data)}v.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function j(v,m,P){let H=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(H=n.TEXTURE_3D);const Z=Ge(v,m),z=m.source;t.bindTexture(H,v.__webglTexture,n.TEXTURE0+P);const ye=i.get(z);if(z.version!==ye.__version||Z===!0){t.activeTexture(n.TEXTURE0+P);const ue=Ze.getPrimaries(Ze.workingColorSpace),we=m.colorSpace===ai?null:Ze.getPrimaries(m.colorSpace),Ie=m.colorSpace===ai||ue===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ce=M(m.image,!1,r.maxTextureSize);ce=Q(m,ce);const ge=s.convert(m.format,m.colorSpace),ve=s.convert(m.type);let Re=w(m.internalFormat,ge,ve,m.colorSpace,m.isVideoTexture);Oe(H,m);let me;const ke=m.mipmaps,N=m.isVideoTexture!==!0,Te=ye.__version===void 0||Z===!0,he=z.dataReady,Pe=C(m,ce);if(m.isDepthTexture)Re=T(m.format===Ci,m.type),Te&&(N?t.texStorage2D(n.TEXTURE_2D,1,Re,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Re,ce.width,ce.height,0,ge,ve,null));else if(m.isDataTexture)if(ke.length>0){N&&Te&&t.texStorage2D(n.TEXTURE_2D,Pe,Re,ke[0].width,ke[0].height);for(let fe=0,oe=ke.length;fe<oe;fe++)me=ke[fe],N?he&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,me.width,me.height,ge,ve,me.data):t.texImage2D(n.TEXTURE_2D,fe,Re,me.width,me.height,0,ge,ve,me.data);m.generateMipmaps=!1}else N?(Te&&t.texStorage2D(n.TEXTURE_2D,Pe,Re,ce.width,ce.height),he&&Ae(m,ce,ge,ve)):t.texImage2D(n.TEXTURE_2D,0,Re,ce.width,ce.height,0,ge,ve,ce.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){N&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Re,ke[0].width,ke[0].height,ce.depth);for(let fe=0,oe=ke.length;fe<oe;fe++)if(me=ke[fe],m.format!==on)if(ge!==null)if(N){if(he)if(m.layerUpdates.size>0){const xe=jc(me.width,me.height,m.format,m.type);for(const He of m.layerUpdates){const ut=me.data.subarray(He*xe/me.data.BYTES_PER_ELEMENT,(He+1)*xe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,He,me.width,me.height,1,ge,ut)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,me.width,me.height,ce.depth,ge,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Re,me.width,me.height,ce.depth,0,me.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?he&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,me.width,me.height,ce.depth,ge,ve,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Re,me.width,me.height,ce.depth,0,ge,ve,me.data)}else{N&&Te&&t.texStorage2D(n.TEXTURE_2D,Pe,Re,ke[0].width,ke[0].height);for(let fe=0,oe=ke.length;fe<oe;fe++)me=ke[fe],m.format!==on?ge!==null?N?he&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,me.width,me.height,ge,me.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Re,me.width,me.height,0,me.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?he&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,me.width,me.height,ge,ve,me.data):t.texImage2D(n.TEXTURE_2D,fe,Re,me.width,me.height,0,ge,ve,me.data)}else if(m.isDataArrayTexture)if(N){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Re,ce.width,ce.height,ce.depth),he)if(m.layerUpdates.size>0){const fe=jc(ce.width,ce.height,m.format,m.type);for(const oe of m.layerUpdates){const xe=ce.data.subarray(oe*fe/ce.data.BYTES_PER_ELEMENT,(oe+1)*fe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,ge,ve,xe)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ge,ve,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ce.width,ce.height,ce.depth,0,ge,ve,ce.data);else if(m.isData3DTexture)N?(Te&&t.texStorage3D(n.TEXTURE_3D,Pe,Re,ce.width,ce.height,ce.depth),he&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ge,ve,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ce.width,ce.height,ce.depth,0,ge,ve,ce.data);else if(m.isFramebufferTexture){if(Te)if(N)t.texStorage2D(n.TEXTURE_2D,Pe,Re,ce.width,ce.height);else{let fe=ce.width,oe=ce.height;for(let xe=0;xe<Pe;xe++)t.texImage2D(n.TEXTURE_2D,xe,Re,fe,oe,0,ge,ve,null),fe>>=1,oe>>=1}}else if(ke.length>0){if(N&&Te){const fe=ae(ke[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Re,fe.width,fe.height)}for(let fe=0,oe=ke.length;fe<oe;fe++)me=ke[fe],N?he&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ge,ve,me):t.texImage2D(n.TEXTURE_2D,fe,Re,ge,ve,me);m.generateMipmaps=!1}else if(N){if(Te){const fe=ae(ce);t.texStorage2D(n.TEXTURE_2D,Pe,Re,fe.width,fe.height)}he&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,ve,ce)}else t.texImage2D(n.TEXTURE_2D,0,Re,ge,ve,ce);_(m)&&p(H),ye.__version=z.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function ie(v,m,P){if(m.image.length!==6)return;const H=Ge(v,m),Z=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+P);const z=i.get(Z);if(Z.version!==z.__version||H===!0){t.activeTexture(n.TEXTURE0+P);const ye=Ze.getPrimaries(Ze.workingColorSpace),ue=m.colorSpace===ai?null:Ze.getPrimaries(m.colorSpace),we=m.colorSpace===ai||ye===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ie=m.isCompressedTexture||m.image[0].isCompressedTexture,ce=m.image[0]&&m.image[0].isDataTexture,ge=[];for(let oe=0;oe<6;oe++)!Ie&&!ce?ge[oe]=M(m.image[oe],!0,r.maxCubemapSize):ge[oe]=ce?m.image[oe].image:m.image[oe],ge[oe]=Q(m,ge[oe]);const ve=ge[0],Re=s.convert(m.format,m.colorSpace),me=s.convert(m.type),ke=w(m.internalFormat,Re,me,m.colorSpace),N=m.isVideoTexture!==!0,Te=z.__version===void 0||H===!0,he=Z.dataReady;let Pe=C(m,ve);Oe(n.TEXTURE_CUBE_MAP,m);let fe;if(Ie){N&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ke,ve.width,ve.height);for(let oe=0;oe<6;oe++){fe=ge[oe].mipmaps;for(let xe=0;xe<fe.length;xe++){const He=fe[xe];m.format!==on?Re!==null?N?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,0,0,He.width,He.height,Re,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,ke,He.width,He.height,0,He.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,0,0,He.width,He.height,Re,me,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,ke,He.width,He.height,0,Re,me,He.data)}}}else{if(fe=m.mipmaps,N&&Te){fe.length>0&&Pe++;const oe=ae(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ke,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){N?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ge[oe].width,ge[oe].height,Re,me,ge[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,ge[oe].width,ge[oe].height,0,Re,me,ge[oe].data);for(let xe=0;xe<fe.length;xe++){const ut=fe[xe].image[oe].image;N?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,0,0,ut.width,ut.height,Re,me,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,ke,ut.width,ut.height,0,Re,me,ut.data)}}else{N?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Re,me,ge[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,Re,me,ge[oe]);for(let xe=0;xe<fe.length;xe++){const He=fe[xe];N?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,0,0,Re,me,He.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,ke,Re,me,He.image[oe])}}}_(m)&&p(n.TEXTURE_CUBE_MAP),z.__version=Z.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function Me(v,m,P,H,Z,z){const ye=s.convert(P.format,P.colorSpace),ue=s.convert(P.type),we=w(P.internalFormat,ye,ue,P.colorSpace),Ie=i.get(m),ce=i.get(P);if(ce.__renderTarget=m,!Ie.__hasExternalTextures){const ge=Math.max(1,m.width>>z),ve=Math.max(1,m.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,we,ge,ve,m.depth,0,ye,ue,null):t.texImage2D(Z,z,we,ge,ve,0,ye,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),le(m)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,Z,ce.__webglTexture,0,b(m)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,Z,ce.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(v,m,P){if(n.bindRenderbuffer(n.RENDERBUFFER,v),m.depthBuffer){const H=m.depthTexture,Z=H&&H.isDepthTexture?H.type:null,z=T(m.stencilBuffer,Z),ye=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;le(m)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(m),z,m.width,m.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(m),z,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,z,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,v)}else{const H=m.textures;for(let Z=0;Z<H.length;Z++){const z=H[Z],ye=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),we=w(z.internalFormat,ye,ue,z.colorSpace);le(m)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(m),we,m.width,m.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(m),we,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,we,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(v,m,P){const H=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(m.depthTexture);if(Z.__renderTarget=m,(!Z.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,m.depthTexture.addEventListener("dispose",L)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,m.depthTexture);const Ie=s.convert(m.depthTexture.format),ce=s.convert(m.depthTexture.type);let ge;m.depthTexture.format===qn?ge=n.DEPTH_COMPONENT24:m.depthTexture.format===Ci&&(ge=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ge,m.width,m.height,0,Ie,ce,null)}}else te(m.depthTexture,0);const z=Z.__webglTexture,ye=b(m),ue=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,we=m.depthTexture.format===Ci?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===qn)le(m)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,ue,z,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,we,ue,z,0);else if(m.depthTexture.format===Ci)le(m)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,ue,z,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,we,ue,z,0);else throw new Error("Unknown depthTexture format")}function Ke(v){const m=i.get(v),P=v.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==v.depthTexture){const H=v.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),H){const Z=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),m.__depthDisposeCallback=Z}m.__boundDepthTexture=H}if(v.depthTexture&&!m.__autoAllocateDepthBuffer)if(P)for(let H=0;H<6;H++)Ce(m.__webglFramebuffer[H],v,H);else{const H=v.texture.mipmaps;H&&H.length>0?Ce(m.__webglFramebuffer[0],v,0):Ce(m.__webglFramebuffer,v,0)}else if(P){m.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[H]),m.__webglDepthbuffer[H]===void 0)m.__webglDepthbuffer[H]=n.createRenderbuffer(),ze(m.__webglDepthbuffer[H],v,!1);else{const Z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=m.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}else{const H=v.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),ze(m.__webglDepthbuffer,v,!1);else{const Z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(v,m,P){const H=i.get(v);m!==void 0&&Me(H.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Ke(v)}function D(v){const m=v.texture,P=i.get(v),H=i.get(m);v.addEventListener("dispose",I);const Z=v.textures,z=v.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=m.version,o.memory.textures++),z){P.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer[ue]=[];for(let we=0;we<m.mipmaps.length;we++)P.__webglFramebuffer[ue][we]=n.createFramebuffer()}else P.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer=[];for(let ue=0;ue<m.mipmaps.length;ue++)P.__webglFramebuffer[ue]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ue=0,we=Z.length;ue<we;ue++){const Ie=i.get(Z[ue]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&le(v)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const we=Z[ue];P.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ue]);const Ie=s.convert(we.format,we.colorSpace),ce=s.convert(we.type),ge=w(we.internalFormat,Ie,ce,we.colorSpace,v.isXRRenderTarget===!0),ve=b(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ge,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,P.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(P.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,m);for(let ue=0;ue<6;ue++)if(m.mipmaps&&m.mipmaps.length>0)for(let we=0;we<m.mipmaps.length;we++)Me(P.__webglFramebuffer[ue][we],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we);else Me(P.__webglFramebuffer[ue],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(m)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ue=0,we=Z.length;ue<we;ue++){const Ie=Z[ue],ce=i.get(Ie);let ge=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ge=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ce.__webglTexture),Oe(ge,Ie),Me(P.__webglFramebuffer,v,Ie,n.COLOR_ATTACHMENT0+ue,ge,0),_(Ie)&&p(ge)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ue=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,H.__webglTexture),Oe(ue,m),m.mipmaps&&m.mipmaps.length>0)for(let we=0;we<m.mipmaps.length;we++)Me(P.__webglFramebuffer[we],v,m,n.COLOR_ATTACHMENT0,ue,we);else Me(P.__webglFramebuffer,v,m,n.COLOR_ATTACHMENT0,ue,0);_(m)&&p(ue),t.unbindTexture()}v.depthBuffer&&Ke(v)}function V(v){const m=v.textures;for(let P=0,H=m.length;P<H;P++){const Z=m[P];if(_(Z)){const z=A(v),ye=i.get(Z).__webglTexture;t.bindTexture(z,ye),p(z),t.unbindTexture()}}}const ee=[],$=[];function ne(v){if(v.samples>0){if(le(v)===!1){const m=v.textures,P=v.width,H=v.height;let Z=n.COLOR_BUFFER_BIT;const z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(v),ue=m.length>1;if(ue)for(let Ie=0;Ie<m.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const we=v.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ie=0;Ie<m.length;Ie++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const ce=i.get(m[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,P,H,0,0,P,H,Z,n.NEAREST),c===!0&&(ee.length=0,$.length=0,ee.push(n.COLOR_ATTACHMENT0+Ie),v.depthBuffer&&v.resolveDepthBuffer===!1&&(ee.push(z),$.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ie=0;Ie<m.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const ce=i.get(m[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){const m=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function b(v){return Math.min(r.maxSamples,v.samples)}function le(v){const m=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function se(v){const m=o.render.frame;f.get(v)!==m&&(f.set(v,m),v.update())}function Q(v,m){const P=v.colorSpace,H=v.format,Z=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||P!==hr&&P!==ai&&(Ze.getTransfer(P)===at?(H!==on||Z!==jt)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",P)),m}function ae(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(u.width=v.naturalWidth||v.width,u.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(u.width=v.displayWidth,u.height=v.displayHeight):(u.width=v.width,u.height=v.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=K,this.setTexture2D=te,this.setTexture2DArray=Y,this.setTexture3D=O,this.setTextureCube=J,this.rebindTextures=R,this.setupRenderTarget=D,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pS(n,e){function t(i,r=ai){let s;const o=Ze.getTransfer(r);if(i===jt)return n.UNSIGNED_BYTE;if(i===Tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Al)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Of)return n.BYTE;if(i===Bf)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===bl)return n.INT;if(i===Tn)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===Gf)return n.ALPHA;if(i===Hf)return n.RGB;if(i===on)return n.RGBA;if(i===qn)return n.DEPTH_COMPONENT;if(i===Ci)return n.DEPTH_STENCIL;if(i===kf)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===fr)return n.RG;if(i===Rl)return n.RG_INTEGER;if(i===Cl)return n.RGBA_INTEGER;if(i===Is||i===Us||i===Ns||i===Fs)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Is)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Is)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eo||i===yo||i===bo||i===To)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===To)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ao||i===wo||i===Ro||i===Co||i===Po||i===Do||i===Lo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ao||i===wo)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ro)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Co)return s.COMPRESSED_R11_EAC;if(i===Po)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Do)return s.COMPRESSED_RG11_EAC;if(i===Lo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Io||i===Uo||i===No||i===Fo||i===Oo||i===Bo||i===zo||i===Vo||i===Go||i===Ho||i===ko||i===Wo||i===Xo||i===qo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Io)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===No)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Go)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ho)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ko)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===$o||i===Ko)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yo)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$o)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jo||i===Zo||i===Jo||i===Qo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const mS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
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

}`;class _S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wn({vertexShader:mS,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xS extends pr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,l="local-floor",c=1,u=null,f=null,h=null,d=null,g=null,x=null;const M=typeof XRWebGLBinding<"u",_=new _S,p={},A=t.getContextAttributes();let w=null,T=null;const C=[],L=[],I=new tt;let G=null;const E=new tn;E.viewport=new _t;const y=new tn;y.viewport=new _t;const U=[E,y],K=new wg;let W=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=C[j];return ie===void 0&&(ie=new Ha,C[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=C[j];return ie===void 0&&(ie=new Ha,C[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=C[j];return ie===void 0&&(ie=new Ha,C[j]=ie),ie.getHandSpace()};function te(j){const ie=L.indexOf(j.inputSource);if(ie===-1)return;const Me=C[ie];Me!==void 0&&(Me.update(j.inputSource,j.frame,u||o),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",O);for(let j=0;j<C.length;j++){const ie=L[j];ie!==null&&(L[j]=null,C[j].disconnect(ie))}W=null,re=null,_.reset();for(const j in p)delete p[j];e.setRenderTarget(w),g=null,d=null,h=null,r=null,T=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(G),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",O),A.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ze=null,Ce=null;A.depth&&(Ce=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=A.stencil?Ci:qn,ze=A.stencil?qr:Tn);const Ke={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new En(d.textureWidth,d.textureHeight,{format:on,type:jt,depthTexture:new Kr(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new En(g.framebufferWidth,g.framebufferHeight,{format:on,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(l),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(j){for(let ie=0;ie<j.removed.length;ie++){const Me=j.removed[ie],ze=L.indexOf(Me);ze>=0&&(L[ze]=null,C[ze].disconnect(Me))}for(let ie=0;ie<j.added.length;ie++){const Me=j.added[ie];let ze=L.indexOf(Me);if(ze===-1){for(let Ke=0;Ke<C.length;Ke++)if(Ke>=L.length){L.push(Me),ze=Ke;break}else if(L[Ke]===null){L[Ke]=Me,ze=Ke;break}if(ze===-1)break}const Ce=C[ze];Ce&&Ce.connect(Me)}}const J=new k,pe=new k;function de(j,ie,Me){J.setFromMatrixPosition(ie.matrixWorld),pe.setFromMatrixPosition(Me.matrixWorld);const ze=J.distanceTo(pe),Ce=ie.projectionMatrix.elements,Ke=Me.projectionMatrix.elements,R=Ce[14]/(Ce[10]-1),D=Ce[14]/(Ce[10]+1),V=(Ce[9]+1)/Ce[5],ee=(Ce[9]-1)/Ce[5],$=(Ce[8]-1)/Ce[0],ne=(Ke[8]+1)/Ke[0],b=R*$,le=R*ne,se=ze/(-$+ne),Q=se*-$;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Q),j.translateZ(se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ce[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ae=R+se,v=D+se,m=b-Q,P=le+(ze-Q),H=V*D/v*ae,Z=ee*D/v*ae;j.projectionMatrix.makePerspective(m,P,H,Z,ae,v),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function _e(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,Me=j.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),K.near=y.near=E.near=ie,K.far=y.far=E.far=Me,(W!==K.near||re!==K.far)&&(r.updateRenderState({depthNear:K.near,depthFar:K.far}),W=K.near,re=K.far),K.layers.mask=j.layers.mask|6,E.layers.mask=K.layers.mask&3,y.layers.mask=K.layers.mask&5;const ze=j.parent,Ce=K.cameras;_e(K,ze);for(let Ke=0;Ke<Ce.length;Ke++)_e(Ce[Ke],ze);Ce.length===2?de(K,E,y):K.projectionMatrix.copy(E.projectionMatrix),Oe(j,K,ze)};function Oe(j,ie,Me){Me===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=$r*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(K)},this.getCameraTexture=function(j){return p[j]};let Ge=null;function lt(j,ie){if(f=ie.getViewerPose(u||o),x=ie,f!==null){const Me=f.views;g!==null&&(e.setRenderTargetFramebuffer(T,g.framebuffer),e.setRenderTarget(T));let ze=!1;Me.length!==K.cameras.length&&(K.cameras.length=0,ze=!0);for(let D=0;D<Me.length;D++){const V=Me[D];let ee=null;if(g!==null)ee=g.getViewport(V);else{const ne=h.getViewSubImage(d,V);ee=ne.viewport,D===0&&(e.setRenderTargetTextures(T,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(T))}let $=U[D];$===void 0&&($=new tn,$.layers.enable(D),$.viewport=new _t,U[D]=$),$.matrix.fromArray(V.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(V.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ee.x,ee.y,ee.width,ee.height),D===0&&(K.matrix.copy($.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),ze===!0&&K.cameras.push($)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const D=h.getDepthInformation(Me[0]);D&&D.isValid&&D.texture&&_.init(D,r.renderState)}if(Ce&&Ce.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let D=0;D<Me.length;D++){const V=Me[D].camera;if(V){let ee=p[V];ee||(ee=new nh,p[V]=ee);const $=h.getCameraImage(V);ee.sourceTexture=$}}}}for(let Me=0;Me<C.length;Me++){const ze=L[Me],Ce=C[Me];ze!==null&&Ce!==void 0&&Ce.update(ze,ie,u||o)}Ge&&Ge(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const Ae=new rh;Ae.setAnimationLoop(lt),this.setAnimationLoop=function(j){Ge=j},this.dispose=function(){}}}const yi=new An,vS=new xt;function SS(n,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,Jf(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,A,w,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),h(_,p)):p.isMeshPhongMaterial?(s(_,p),f(_,p)):p.isMeshStandardMaterial?(s(_,p),d(_,p),p.isMeshPhysicalMaterial&&g(_,p,T)):p.isMeshMatcapMaterial?(s(_,p),x(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),M(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&l(_,p)):p.isPointsMaterial?c(_,p,A,w):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===kt&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===kt&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const A=e.get(p),w=A.envMap,T=A.envMapRotation;w&&(_.envMap.value=w,yi.copy(T),yi.x*=-1,yi.y*=-1,yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),_.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(yi)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function l(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,A,w){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*A,_.scale.value=w*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function f(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function h(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function g(_,p,A){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,p){p.matcap&&(_.matcap.value=p.matcap)}function M(_,p){const A=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MS(n,e,t,i){let r={},s={},o=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,w){const T=w.program;i.uniformBlockBinding(A,T)}function u(A,w){let T=r[A.id];T===void 0&&(x(A),T=f(A),r[A.id]=T,A.addEventListener("dispose",_));const C=w.program;i.updateUBOMapping(A,C);const L=e.render.frame;s[A.id]!==L&&(d(A),s[A.id]=L)}function f(A){const w=h();A.__bindingPointIndex=w;const T=n.createBuffer(),C=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,T),T}function h(){for(let A=0;A<l;A++)if(o.indexOf(A)===-1)return o.push(A),A;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const w=r[A.id],T=A.uniforms,C=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,I=T.length;L<I;L++){const G=Array.isArray(T[L])?T[L]:[T[L]];for(let E=0,y=G.length;E<y;E++){const U=G[E];if(g(U,L,E,C)===!0){const K=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let re=0;for(let te=0;te<W.length;te++){const Y=W[te],O=M(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,K+re,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,re),re+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(A,w,T,C){const L=A.value,I=w+"_"+T;if(C[I]===void 0)return typeof L=="number"||typeof L=="boolean"?C[I]=L:C[I]=L.clone(),!0;{const G=C[I];if(typeof L=="number"||typeof L=="boolean"){if(G!==L)return C[I]=L,!0}else if(G.equals(L)===!1)return G.copy(L),!0}return!1}function x(A){const w=A.uniforms;let T=0;const C=16;for(let I=0,G=w.length;I<G;I++){const E=Array.isArray(w[I])?w[I]:[w[I]];for(let y=0,U=E.length;y<U;y++){const K=E[y],W=Array.isArray(K.value)?K.value:[K.value];for(let re=0,te=W.length;re<te;re++){const Y=W[re],O=M(Y),J=T%C,pe=J%O.boundary,de=J+pe;T+=pe,de!==0&&C-de<O.storage&&(T+=C-de),K.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=O.storage}}}const L=T%C;return L>0&&(T+=C-L),A.__size=T,A.__cache={},this}function M(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",A),w}function _(A){const w=A.target;w.removeEventListener("dispose",_);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:u,dispose:p}}const ES=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hn=null;function yS(){return hn===null&&(hn=new mg(ES,16,16,fr,Xn),hn.name="DFG_LUT",hn.minFilter=Rt,hn.magFilter=Rt,hn.wrapS=Bn,hn.wrapT=Bn,hn.generateMipmaps=!1,hn.needsUpdate=!0),hn}class bS{constructor(e={}){const{canvas:t=Am(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:g=jt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const M=g,_=new Set([Cl,Rl,wl]),p=new Set([jt,Tn,Xr,qr,Tl,Al]),A=new Uint32Array(4),w=new Int32Array(4);let T=null,C=null;const L=[],I=[];let G=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let y=!1;this._outputColorSpace=en;let U=0,K=0,W=null,re=-1,te=null;const Y=new _t,O=new _t;let J=null;const pe=new Je(0);let de=0,_e=t.width,Oe=t.height,Ge=1,lt=null,Ae=null;const j=new _t(0,0,_e,Oe),ie=new _t(0,0,_e,Oe);let Me=!1;const ze=new Fl;let Ce=!1,Ke=!1;const R=new xt,D=new k,V=new _t,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function ne(){return W===null?Ge:1}let b=i;function le(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",rt,!1),b===null){const F="webgl2";if(b=le(F,S),b===null)throw le(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw et("WebGLRenderer: "+S.message),S}let se,Q,ae,v,m,P,H,Z,z,ye,ue,we,Ie,ce,ge,ve,Re,me,ke,N,Te,he,Pe,fe;function oe(){se=new yx(b),se.init(),he=new pS(b,se),Q=new px(b,se,e,he),ae=new hS(b,se),Q.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),v=new Ax(b),m=new Zv,P=new dS(b,se,ae,m,Q,he,v),H=new gx(E),Z=new Ex(E),z=new Pg(b),Pe=new hx(b,z),ye=new bx(b,z,v,Pe),ue=new Rx(b,ye,z,v),ke=new wx(b,Q,P),ve=new mx(m),we=new jv(E,H,Z,se,Q,Pe,ve),Ie=new SS(E,m),ce=new Qv,ge=new sS(se),me=new fx(E,H,Z,ae,ue,x,c),Re=new uS(E,ue,Q),fe=new MS(b,v,Q,ae),N=new dx(b,se,v),Te=new Tx(b,se,v),v.programs=we.programs,E.capabilities=Q,E.extensions=se,E.properties=m,E.renderLists=ce,E.shadowMap=Re,E.state=ae,E.info=v}oe(),M!==jt&&(G=new Px(M,t.width,t.height,r,s));const xe=new xS(E,b);this.xr=xe,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const S=se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(S){S!==void 0&&(Ge=S,this.setSize(_e,Oe,!1))},this.getSize=function(S){return S.set(_e,Oe)},this.setSize=function(S,F,q=!0){if(xe.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=S,Oe=F,t.width=Math.floor(S*Ge),t.height=Math.floor(F*Ge),q===!0&&(t.style.width=S+"px",t.style.height=F+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(_e*Ge,Oe*Ge).floor()},this.setDrawingBufferSize=function(S,F,q){_e=S,Oe=F,Ge=q,t.width=Math.floor(S*q),t.height=Math.floor(F*q),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(M===jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Y)},this.getViewport=function(S){return S.copy(j)},this.setViewport=function(S,F,q,X){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,F,q,X),ae.viewport(Y.copy(j).multiplyScalar(Ge).round())},this.getScissor=function(S){return S.copy(ie)},this.setScissor=function(S,F,q,X){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,F,q,X),ae.scissor(O.copy(ie).multiplyScalar(Ge).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(S){ae.setScissorTest(Me=S)},this.setOpaqueSort=function(S){lt=S},this.setTransparentSort=function(S){Ae=S},this.getClearColor=function(S){return S.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,q=!0){let X=0;if(S){let B=!1;if(W!==null){const Se=W.texture.format;B=_.has(Se)}if(B){const Se=W.texture.type,De=p.has(Se),be=me.getClearColor(),Le=me.getClearAlpha(),Ue=be.r,Be=be.g,Ne=be.b;De?(A[0]=Ue,A[1]=Be,A[2]=Ne,A[3]=Le,b.clearBufferuiv(b.COLOR,0,A)):(w[0]=Ue,w[1]=Be,w[2]=Ne,w[3]=Le,b.clearBufferiv(b.COLOR,0,w))}else X|=b.COLOR_BUFFER_BIT}F&&(X|=b.DEPTH_BUFFER_BIT),q&&(X|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),me.dispose(),ce.dispose(),ge.dispose(),m.dispose(),H.dispose(),Z.dispose(),ue.dispose(),Pe.dispose(),fe.dispose(),we.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",zl),xe.removeEventListener("sessionend",Vl),pi.stop()};function He(S){S.preventDefault(),Cc("WebGLRenderer: Context Lost."),y=!0}function ut(){Cc("WebGLRenderer: Context Restored."),y=!1;const S=v.autoReset,F=Re.enabled,q=Re.autoUpdate,X=Re.needsUpdate,B=Re.type;oe(),v.autoReset=S,Re.enabled=F,Re.autoUpdate=q,Re.needsUpdate=X,Re.type=B}function rt(S){et("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function un(S){const F=S.target;F.removeEventListener("dispose",un),Rn(F)}function Rn(S){uh(S),m.remove(S)}function uh(S){const F=m.get(S).programs;F!==void 0&&(F.forEach(function(q){we.releaseProgram(q)}),S.isShaderMaterial&&we.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,q,X,B,Se){F===null&&(F=ee);const De=B.isMesh&&B.matrixWorld.determinant()<0,be=hh(S,F,q,X,B);ae.setMaterial(X,De);let Le=q.index,Ue=1;if(X.wireframe===!0){if(Le=ye.getWireframeAttribute(q),Le===void 0)return;Ue=2}const Be=q.drawRange,Ne=q.attributes.position;let $e=Be.start*Ue,ot=(Be.start+Be.count)*Ue;Se!==null&&($e=Math.max($e,Se.start*Ue),ot=Math.min(ot,(Se.start+Se.count)*Ue)),Le!==null?($e=Math.max($e,0),ot=Math.min(ot,Le.count)):Ne!=null&&($e=Math.max($e,0),ot=Math.min(ot,Ne.count));const mt=ot-$e;if(mt<0||mt===1/0)return;Pe.setup(B,X,be,q,Le);let gt,ct=N;if(Le!==null&&(gt=z.get(Le),ct=Te,ct.setIndex(gt)),B.isMesh)X.wireframe===!0?(ae.setLineWidth(X.wireframeLinewidth*ne()),ct.setMode(b.LINES)):ct.setMode(b.TRIANGLES);else if(B.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),ae.setLineWidth(Fe*ne()),B.isLineSegments?ct.setMode(b.LINES):B.isLineLoop?ct.setMode(b.LINE_LOOP):ct.setMode(b.LINE_STRIP)}else B.isPoints?ct.setMode(b.POINTS):B.isSprite&&ct.setMode(b.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Yr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ct.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Fe=B._multiDrawStarts,st=B._multiDrawCounts,Qe=B._multiDrawCount,Xt=Le?z.get(Le).bytesPerElement:1,Ui=m.get(X).currentProgram.getUniforms();for(let qt=0;qt<Qe;qt++)Ui.setValue(b,"_gl_DrawID",qt),ct.render(Fe[qt]/Xt,st[qt])}else if(B.isInstancedMesh)ct.renderInstances($e,mt,B.count);else if(q.isInstancedBufferGeometry){const Fe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,st=Math.min(q.instanceCount,Fe);ct.renderInstances($e,mt,st)}else ct.render($e,mt)};function Bl(S,F,q){S.transparent===!0&&S.side===On&&S.forceSinglePass===!1?(S.side=kt,S.needsUpdate=!0,ts(S,F,q),S.side=hi,S.needsUpdate=!0,ts(S,F,q),S.side=On):ts(S,F,q)}this.compile=function(S,F,q=null){q===null&&(q=S),C=ge.get(q),C.init(F),I.push(C),q.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(C.pushLight(B),B.castShadow&&C.pushShadow(B))}),S!==q&&S.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(C.pushLight(B),B.castShadow&&C.pushShadow(B))}),C.setupLights();const X=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const Se=B.material;if(Se)if(Array.isArray(Se))for(let De=0;De<Se.length;De++){const be=Se[De];Bl(be,q,B),X.add(be)}else Bl(Se,q,B),X.add(Se)}),C=I.pop(),X},this.compileAsync=function(S,F,q=null){const X=this.compile(S,F,q);return new Promise(B=>{function Se(){if(X.forEach(function(De){m.get(De).currentProgram.isReady()&&X.delete(De)}),X.size===0){B(S);return}setTimeout(Se,10)}se.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let aa=null;function fh(S){aa&&aa(S)}function zl(){pi.stop()}function Vl(){pi.start()}const pi=new rh;pi.setAnimationLoop(fh),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(S){aa=S,xe.setAnimationLoop(S),S===null?pi.stop():pi.start()},xe.addEventListener("sessionstart",zl),xe.addEventListener("sessionend",Vl),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const q=xe.enabled===!0&&xe.isPresenting===!0,X=G!==null&&(W===null||q)&&G.begin(E,W);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(F),F=xe.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,F,W),C=ge.get(S,I.length),C.init(F),I.push(C),R.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ze.setFromProjectionMatrix(R,vn,F.reversedDepth),Ke=this.localClippingEnabled,Ce=ve.init(this.clippingPlanes,Ke),T=ce.get(S,L.length),T.init(),L.push(T),xe.enabled===!0&&xe.isPresenting===!0){const De=E.xr.getDepthSensingMesh();De!==null&&oa(De,F,-1/0,E.sortObjects)}oa(S,F,0,E.sortObjects),T.finish(),E.sortObjects===!0&&T.sort(lt,Ae),$=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,$&&me.addToRenderList(T,S),this.info.render.frame++,Ce===!0&&ve.beginShadows();const B=C.state.shadowsArray;if(Re.render(B,S,F),Ce===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&G.hasRenderPass())===!1){const De=T.opaque,be=T.transmissive;if(C.setupLights(),F.isArrayCamera){const Le=F.cameras;if(be.length>0)for(let Ue=0,Be=Le.length;Ue<Be;Ue++){const Ne=Le[Ue];Hl(De,be,S,Ne)}$&&me.render(S);for(let Ue=0,Be=Le.length;Ue<Be;Ue++){const Ne=Le[Ue];Gl(T,S,Ne,Ne.viewport)}}else be.length>0&&Hl(De,be,S,F),$&&me.render(S),Gl(T,S,F)}W!==null&&K===0&&(P.updateMultisampleRenderTarget(W),P.updateRenderTargetMipmap(W)),X&&G.end(E),S.isScene===!0&&S.onAfterRender(E,S,F),Pe.resetDefaultState(),re=-1,te=null,I.pop(),I.length>0?(C=I[I.length-1],Ce===!0&&ve.setGlobalState(E.clippingPlanes,C.state.camera)):C=null,L.pop(),L.length>0?T=L[L.length-1]:T=null};function oa(S,F,q,X){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)C.pushLight(S),S.castShadow&&C.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ze.intersectsSprite(S)){X&&V.setFromMatrixPosition(S.matrixWorld).applyMatrix4(R);const De=ue.update(S),be=S.material;be.visible&&T.push(S,De,be,q,V.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ze.intersectsObject(S))){const De=ue.update(S),be=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),V.copy(S.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),V.copy(De.boundingSphere.center)),V.applyMatrix4(S.matrixWorld).applyMatrix4(R)),Array.isArray(be)){const Le=De.groups;for(let Ue=0,Be=Le.length;Ue<Be;Ue++){const Ne=Le[Ue],$e=be[Ne.materialIndex];$e&&$e.visible&&T.push(S,De,$e,q,V.z,Ne)}}else be.visible&&T.push(S,De,be,q,V.z,null)}}const Se=S.children;for(let De=0,be=Se.length;De<be;De++)oa(Se[De],F,q,X)}function Gl(S,F,q,X){const{opaque:B,transmissive:Se,transparent:De}=S;C.setupLightsView(q),Ce===!0&&ve.setGlobalState(E.clippingPlanes,q),X&&ae.viewport(Y.copy(X)),B.length>0&&es(B,F,q),Se.length>0&&es(Se,F,q),De.length>0&&es(De,F,q),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Hl(S,F,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[X.id]===void 0){const $e=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[X.id]=new En(1,1,{generateMipmaps:!0,type:$e?Xn:jt,minFilter:Ri,samples:Q.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const Se=C.state.transmissionRenderTarget[X.id],De=X.viewport||Y;Se.setSize(De.z*E.transmissionResolutionScale,De.w*E.transmissionResolutionScale);const be=E.getRenderTarget(),Le=E.getActiveCubeFace(),Ue=E.getActiveMipmapLevel();E.setRenderTarget(Se),E.getClearColor(pe),de=E.getClearAlpha(),de<1&&E.setClearColor(16777215,.5),E.clear(),$&&me.render(q);const Be=E.toneMapping;E.toneMapping=Mn;const Ne=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),C.setupLightsView(X),Ce===!0&&ve.setGlobalState(E.clippingPlanes,X),es(S,q,X),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),se.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ot=0,mt=F.length;ot<mt;ot++){const gt=F[ot],{object:ct,geometry:Fe,material:st,group:Qe}=gt;if(st.side===On&&ct.layers.test(X.layers)){const Xt=st.side;st.side=kt,st.needsUpdate=!0,kl(ct,q,X,Fe,st,Qe),st.side=Xt,st.needsUpdate=!0,$e=!0}}$e===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}E.setRenderTarget(be,Le,Ue),E.setClearColor(pe,de),Ne!==void 0&&(X.viewport=Ne),E.toneMapping=Be}function es(S,F,q){const X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,Se=S.length;B<Se;B++){const De=S[B],{object:be,geometry:Le,group:Ue}=De;let Be=De.material;Be.allowOverride===!0&&X!==null&&(Be=X),be.layers.test(q.layers)&&kl(be,F,q,Le,Be,Ue)}}function kl(S,F,q,X,B,Se){S.onBeforeRender(E,F,q,X,B,Se),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(E,F,q,X,S,Se),B.transparent===!0&&B.side===On&&B.forceSinglePass===!1?(B.side=kt,B.needsUpdate=!0,E.renderBufferDirect(q,F,X,B,S,Se),B.side=hi,B.needsUpdate=!0,E.renderBufferDirect(q,F,X,B,S,Se),B.side=On):E.renderBufferDirect(q,F,X,B,S,Se),S.onAfterRender(E,F,q,X,B,Se)}function ts(S,F,q){F.isScene!==!0&&(F=ee);const X=m.get(S),B=C.state.lights,Se=C.state.shadowsArray,De=B.state.version,be=we.getParameters(S,B.state,Se,F,q),Le=we.getProgramCacheKey(be);let Ue=X.programs;X.environment=S.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(S.isMeshStandardMaterial?Z:H).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",un),Ue=new Map,X.programs=Ue);let Be=Ue.get(Le);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===De)return Xl(S,be),Be}else be.uniforms=we.getUniforms(S),S.onBeforeCompile(be,E),Be=we.acquireProgram(be,Le),Ue.set(Le,Be),X.uniforms=be.uniforms;const Ne=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=ve.uniform),Xl(S,be),X.needsLights=ph(S),X.lightsStateVersion=De,X.needsLights&&(Ne.ambientLightColor.value=B.state.ambient,Ne.lightProbe.value=B.state.probe,Ne.directionalLights.value=B.state.directional,Ne.directionalLightShadows.value=B.state.directionalShadow,Ne.spotLights.value=B.state.spot,Ne.spotLightShadows.value=B.state.spotShadow,Ne.rectAreaLights.value=B.state.rectArea,Ne.ltc_1.value=B.state.rectAreaLTC1,Ne.ltc_2.value=B.state.rectAreaLTC2,Ne.pointLights.value=B.state.point,Ne.pointLightShadows.value=B.state.pointShadow,Ne.hemisphereLights.value=B.state.hemi,Ne.directionalShadowMap.value=B.state.directionalShadowMap,Ne.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ne.spotShadowMap.value=B.state.spotShadowMap,Ne.spotLightMatrix.value=B.state.spotLightMatrix,Ne.spotLightMap.value=B.state.spotLightMap,Ne.pointShadowMap.value=B.state.pointShadowMap,Ne.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Be,X.uniformsList=null,Be}function Wl(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Os.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Xl(S,F){const q=m.get(S);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function hh(S,F,q,X,B){F.isScene!==!0&&(F=ee),P.resetTextureUnits();const Se=F.fog,De=X.isMeshStandardMaterial?F.environment:null,be=W===null?E.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:hr,Le=(X.isMeshStandardMaterial?Z:H).get(X.envMap||De),Ue=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,ot=!!q.morphAttributes.color;let mt=Mn;X.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(mt=E.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=gt!==void 0?gt.length:0,Fe=m.get(X),st=C.state.lights;if(Ce===!0&&(Ke===!0||S!==te)){const Dt=S===te&&X.id===re;ve.setState(X,S,Dt)}let Qe=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==st.state.version||Fe.outputColorSpace!==be||B.isBatchedMesh&&Fe.batching===!1||!B.isBatchedMesh&&Fe.batching===!0||B.isBatchedMesh&&Fe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Fe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Fe.instancing===!1||!B.isInstancedMesh&&Fe.instancing===!0||B.isSkinnedMesh&&Fe.skinning===!1||!B.isSkinnedMesh&&Fe.skinning===!0||B.isInstancedMesh&&Fe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Fe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Fe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Fe.instancingMorph===!1&&B.morphTexture!==null||Fe.envMap!==Le||X.fog===!0&&Fe.fog!==Se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ve.numPlanes||Fe.numIntersection!==ve.numIntersection)||Fe.vertexAlphas!==Ue||Fe.vertexTangents!==Be||Fe.morphTargets!==Ne||Fe.morphNormals!==$e||Fe.morphColors!==ot||Fe.toneMapping!==mt||Fe.morphTargetsCount!==ct)&&(Qe=!0):(Qe=!0,Fe.__version=X.version);let Xt=Fe.currentProgram;Qe===!0&&(Xt=ts(X,F,B));let Ui=!1,qt=!1,_r=!1;const ft=Xt.getUniforms(),zt=Fe.uniforms;if(ae.useProgram(Xt.program)&&(Ui=!0,qt=!0,_r=!0),X.id!==re&&(re=X.id,qt=!0),Ui||te!==S){ae.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ft.setValue(b,"projectionMatrix",S.projectionMatrix),ft.setValue(b,"viewMatrix",S.matrixWorldInverse);const Vt=ft.map.cameraPosition;Vt!==void 0&&Vt.setValue(b,D.setFromMatrixPosition(S.matrixWorld)),Q.logarithmicDepthBuffer&&ft.setValue(b,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ft.setValue(b,"isOrthographic",S.isOrthographicCamera===!0),te!==S&&(te=S,qt=!0,_r=!0)}if(Fe.needsLights&&(st.state.directionalShadowMap.length>0&&ft.setValue(b,"directionalShadowMap",st.state.directionalShadowMap,P),st.state.spotShadowMap.length>0&&ft.setValue(b,"spotShadowMap",st.state.spotShadowMap,P),st.state.pointShadowMap.length>0&&ft.setValue(b,"pointShadowMap",st.state.pointShadowMap,P)),B.isSkinnedMesh){ft.setOptional(b,B,"bindMatrix"),ft.setOptional(b,B,"bindMatrixInverse");const Dt=B.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ft.setValue(b,"boneTexture",Dt.boneTexture,P))}B.isBatchedMesh&&(ft.setOptional(b,B,"batchingTexture"),ft.setValue(b,"batchingTexture",B._matricesTexture,P),ft.setOptional(b,B,"batchingIdTexture"),ft.setValue(b,"batchingIdTexture",B._indirectTexture,P),ft.setOptional(b,B,"batchingColorTexture"),B._colorsTexture!==null&&ft.setValue(b,"batchingColorTexture",B._colorsTexture,P));const Jt=q.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&ke.update(B,q,Xt),(qt||Fe.receiveShadow!==B.receiveShadow)&&(Fe.receiveShadow=B.receiveShadow,ft.setValue(b,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(zt.envMap.value=Le,zt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(zt.envMapIntensity.value=F.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=yS()),qt&&(ft.setValue(b,"toneMappingExposure",E.toneMappingExposure),Fe.needsLights&&dh(zt,_r),Se&&X.fog===!0&&Ie.refreshFogUniforms(zt,Se),Ie.refreshMaterialUniforms(zt,X,Ge,Oe,C.state.transmissionRenderTarget[S.id]),Os.upload(b,Wl(Fe),zt,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Os.upload(b,Wl(Fe),zt,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ft.setValue(b,"center",B.center),ft.setValue(b,"modelViewMatrix",B.modelViewMatrix),ft.setValue(b,"normalMatrix",B.normalMatrix),ft.setValue(b,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Dt=X.uniformsGroups;for(let Vt=0,la=Dt.length;Vt<la;Vt++){const mi=Dt[Vt];fe.update(mi,Xt),fe.bind(mi,Xt)}}return Xt}function dh(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function ph(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(S,F,q){const X=m.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),m.get(S.texture).__webglTexture=F,m.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const q=m.get(S);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const mh=b.createFramebuffer();this.setRenderTarget=function(S,F=0,q=0){W=S,U=F,K=q;let X=null,B=!1,Se=!1;if(S){const be=m.get(S);if(be.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(b.FRAMEBUFFER,be.__webglFramebuffer),Y.copy(S.viewport),O.copy(S.scissor),J=S.scissorTest,ae.viewport(Y),ae.scissor(O),ae.setScissorTest(J),re=-1;return}else if(be.__webglFramebuffer===void 0)P.setupRenderTarget(S);else if(be.__hasExternalTextures)P.rebindTextures(S,m.get(S.texture).__webglTexture,m.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(be.__boundDepthTexture!==Be){if(Be!==null&&m.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const Ue=m.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?X=Ue[F][q]:X=Ue[F],B=!0):S.samples>0&&P.useMultisampledRTT(S)===!1?X=m.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?X=Ue[q]:X=Ue,Y.copy(S.viewport),O.copy(S.scissor),J=S.scissorTest}else Y.copy(j).multiplyScalar(Ge).floor(),O.copy(ie).multiplyScalar(Ge).floor(),J=Me;if(q!==0&&(X=mh),ae.bindFramebuffer(b.FRAMEBUFFER,X)&&ae.drawBuffers(S,X),ae.viewport(Y),ae.scissor(O),ae.setScissorTest(J),B){const be=m.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,q)}else if(Se){const be=F;for(let Le=0;Le<S.textures.length;Le++){const Ue=m.get(S.textures[Le]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,q,be)}}else if(S!==null&&q!==0){const be=m.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,be.__webglTexture,q)}re=-1},this.readRenderTargetPixels=function(S,F,q,X,B,Se,De,be=0){if(!(S&&S.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=m.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(Le=Le[De]),Le){ae.bindFramebuffer(b.FRAMEBUFFER,Le);try{const Ue=S.textures[be],Be=Ue.format,Ne=Ue.type;if(!Q.textureFormatReadable(Be)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ne)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-X&&q>=0&&q<=S.height-B&&(S.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+be),b.readPixels(F,q,X,B,he.convert(Be),he.convert(Ne),Se))}finally{const Ue=W!==null?m.get(W).__webglFramebuffer:null;ae.bindFramebuffer(b.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(S,F,q,X,B,Se,De,be=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=m.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(Le=Le[De]),Le)if(F>=0&&F<=S.width-X&&q>=0&&q<=S.height-B){ae.bindFramebuffer(b.FRAMEBUFFER,Le);const Ue=S.textures[be],Be=Ue.format,Ne=Ue.type;if(!Q.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,$e),b.bufferData(b.PIXEL_PACK_BUFFER,Se.byteLength,b.STREAM_READ),S.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+be),b.readPixels(F,q,X,B,he.convert(Be),he.convert(Ne),0);const ot=W!==null?m.get(W).__webglFramebuffer:null;ae.bindFramebuffer(b.FRAMEBUFFER,ot);const mt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await wm(b,mt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,$e),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Se),b.deleteBuffer($e),b.deleteSync(mt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,q=0){const X=Math.pow(2,-q),B=Math.floor(S.image.width*X),Se=Math.floor(S.image.height*X),De=F!==null?F.x:0,be=F!==null?F.y:0;P.setTexture2D(S,0),b.copyTexSubImage2D(b.TEXTURE_2D,q,0,0,De,be,B,Se),ae.unbindTexture()};const gh=b.createFramebuffer(),_h=b.createFramebuffer();this.copyTextureToTexture=function(S,F,q=null,X=null,B=0,Se=null){Se===null&&(B!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=B,B=0):Se=0);let De,be,Le,Ue,Be,Ne,$e,ot,mt;const gt=S.isCompressedTexture?S.mipmaps[Se]:S.image;if(q!==null)De=q.max.x-q.min.x,be=q.max.y-q.min.y,Le=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,Be=q.min.y,Ne=q.isBox3?q.min.z:0;else{const Jt=Math.pow(2,-B);De=Math.floor(gt.width*Jt),be=Math.floor(gt.height*Jt),S.isDataArrayTexture?Le=gt.depth:S.isData3DTexture?Le=Math.floor(gt.depth*Jt):Le=1,Ue=0,Be=0,Ne=0}X!==null?($e=X.x,ot=X.y,mt=X.z):($e=0,ot=0,mt=0);const ct=he.convert(F.format),Fe=he.convert(F.type);let st;F.isData3DTexture?(P.setTexture3D(F,0),st=b.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),st=b.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),st=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,F.unpackAlignment);const Qe=b.getParameter(b.UNPACK_ROW_LENGTH),Xt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Ui=b.getParameter(b.UNPACK_SKIP_PIXELS),qt=b.getParameter(b.UNPACK_SKIP_ROWS),_r=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,gt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,gt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ue),b.pixelStorei(b.UNPACK_SKIP_ROWS,Be),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ne);const ft=S.isDataArrayTexture||S.isData3DTexture,zt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Jt=m.get(S),Dt=m.get(F),Vt=m.get(Jt.__renderTarget),la=m.get(Dt.__renderTarget);ae.bindFramebuffer(b.READ_FRAMEBUFFER,Vt.__webglFramebuffer),ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let mi=0;mi<Le;mi++)ft&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,m.get(S).__webglTexture,B,Ne+mi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,m.get(F).__webglTexture,Se,mt+mi)),b.blitFramebuffer(Ue,Be,De,be,$e,ot,De,be,b.DEPTH_BUFFER_BIT,b.NEAREST);ae.bindFramebuffer(b.READ_FRAMEBUFFER,null),ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||m.has(S)){const Jt=m.get(S),Dt=m.get(F);ae.bindFramebuffer(b.READ_FRAMEBUFFER,gh),ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,_h);for(let Vt=0;Vt<Le;Vt++)ft?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Jt.__webglTexture,B,Ne+Vt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Jt.__webglTexture,B),zt?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Dt.__webglTexture,Se,mt+Vt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Dt.__webglTexture,Se),B!==0?b.blitFramebuffer(Ue,Be,De,be,$e,ot,De,be,b.COLOR_BUFFER_BIT,b.NEAREST):zt?b.copyTexSubImage3D(st,Se,$e,ot,mt+Vt,Ue,Be,De,be):b.copyTexSubImage2D(st,Se,$e,ot,Ue,Be,De,be);ae.bindFramebuffer(b.READ_FRAMEBUFFER,null),ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else zt?S.isDataTexture||S.isData3DTexture?b.texSubImage3D(st,Se,$e,ot,mt,De,be,Le,ct,Fe,gt.data):F.isCompressedArrayTexture?b.compressedTexSubImage3D(st,Se,$e,ot,mt,De,be,Le,ct,gt.data):b.texSubImage3D(st,Se,$e,ot,mt,De,be,Le,ct,Fe,gt):S.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Se,$e,ot,De,be,ct,Fe,gt.data):S.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Se,$e,ot,gt.width,gt.height,ct,gt.data):b.texSubImage2D(b.TEXTURE_2D,Se,$e,ot,De,be,ct,Fe,gt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Qe),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Xt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ui),b.pixelStorei(b.UNPACK_SKIP_ROWS,qt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,_r),Se===0&&F.generateMipmaps&&b.generateMipmap(st),ae.unbindTexture()},this.initRenderTarget=function(S){m.get(S).__webglFramebuffer===void 0&&P.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?P.setTextureCube(S,0):S.isData3DTexture?P.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?P.setTexture2DArray(S,0):P.setTexture2D(S,0),ae.unbindTexture()},this.resetState=function(){U=0,K=0,W=null,ae.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function TS(){const n=new Yn(.9,.9,.9),e=new Ys({color:65484,metalness:.2,roughness:.4}),t=new Wt(n,e);return t.position.set(0,.45,0),t.userData={laneX:0,targetX:0,isJumping:!1,vy:0,groundY:.45},t}function AS(){const i=new Yn(.9,.9,.9),r=new Ys({color:16731469,metalness:.1,roughness:.5}),s=new Wt(i,r);return s.position.y=.9/2,s.userData={type:"obstacle"},s}a;function wS(n){const e=Qi(0),t=Qi(Number(localStorage.getItem("bestScore")??0)),i=Qi(10),r=Qi(!1);let s,o,l,c=null,u=null,f=null;const h=[];let d=null;const g=new Set;let x=0;const M=[-2,0,2],_=-35,p=10,A=0,w=-25,T=11,C=new Li,L=new Li;function I(){s=new pg,s.background=new Je(1052696),s.fog=new Nl(1052696,12,55);const Ae=window.innerWidth,j=window.innerHeight;o=new tn(70,Ae/j,.1,200),o.position.set(0,4.2,8),o.lookAt(0,1,-6),l=new bS({canvas:n.value,antialias:!0}),l.setSize(Ae,j),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.shadowMap.enabled=!0,s.add(new Ag(16777215,.55));const ie=new Tg(16777215,1.1);ie.position.set(6,10,6),ie.castShadow=!0,ie.shadow.mapSize.width=1024,ie.shadow.mapSize.height=1024,s.add(ie);const Me=new Yn(8,.3,80),ze=new Ys({color:2763322,roughness:.9});d=new Wt(Me,ze),d.position.set(0,-.15,-20),d.receiveShadow=!0,s.add(d);const Ce=new Yn(.15,.4,80),Ke=new Ys({color:5921535,roughness:.6}),R=new Wt(Ce,Ke),D=new Wt(Ce,Ke);R.position.set(-4,.1,-20),D.position.set(4,.1,-20),R.receiveShadow=!0,D.receiveShadow=!0,s.add(R,D),f=TS(),f.castShadow=!0,f.position.z=A,s.add(f),u=new Rg,window.addEventListener("resize",G),window.addEventListener("keydown",E),window.addEventListener("keyup",y)}function G(){if(!l||!o)return;const Ae=window.innerWidth,j=window.innerHeight;o.aspect=Ae/j,o.updateProjectionMatrix(),l.setSize(Ae,j),l.setPixelRatio(Math.min(window.devicePixelRatio,2))}function E(Ae){g.add(Ae.code),(Ae.code==="ArrowLeft"||Ae.code==="KeyA")&&U(-1),(Ae.code==="ArrowRight"||Ae.code==="KeyD")&&U(1),Ae.code==="Space"&&K()}function y(Ae){g.delete(Ae.code)}function U(Ae){if(!f||r.value)return;const j=f.userData.targetX,ie=M.indexOf(j),Me=Dc.clamp(ie+Ae,0,M.length-1);f.userData.targetX=M[Me]}function K(){!f||r.value||f.userData.isJumping||(f.userData.isJumping=!0,f.userData.vy=T)}function W(){const Ae=AS();Ae.castShadow=!0,Ae.position.z=_,Ae.position.x=M[Math.floor(Math.random()*M.length)],Ae.position.y=.45,h.push(Ae),s.add(Ae)}function re(Ae){const j=f.userData.targetX;f.position.x=Dc.damp(f.position.x,j,15,Ae),f.userData.isJumping&&(f.userData.vy+=w*Ae,f.position.y+=f.userData.vy*Ae,f.position.y<=f.userData.groundY&&(f.position.y=f.userData.groundY,f.userData.isJumping=!1,f.userData.vy=0))}function te(Ae){i.value=Math.min(80,i.value+Ae*.5),x+=Ae,x>=.4&&(x=0,W());const j=i.value*Ae;for(let ie=h.length-1;ie>=0;ie--){const Me=h[ie];Me.position.z+=j,Me.position.z>p&&(s.remove(Me),h.splice(ie,1))}d.position.z+=j,d.position.z>0&&(d.position.z=-20)}function Y(){C.setFromObject(f);for(let Ae=0;Ae<h.length;Ae++)if(L.setFromObject(h[Ae]),C.intersectsBox(L)){O();return}}function O(){r.value=!0,e.value>t.value&&(t.value=e.value,localStorage.setItem("bestScore",String(t.value)))}function J(Ae){e.value+=Math.floor(Ae*20)}function pe(){c=requestAnimationFrame(pe);const Ae=u.getDelta();r.value||(re(Ae),te(Ae),Y(),J(Ae)),l.render(s,o)}function de(){for(const Ae of h)s.remove(Ae);h.length=0}function _e(){e.value=0,i.value=10,r.value=!1,de(),f.position.set(0,.45,A),f.userData.targetX=0,f.userData.isJumping=!1,f.userData.vy=0,d.position.z=-20,x=0}function Oe(){I(),_e(),pe()}function Ge(){c&&cancelAnimationFrame(c),c=null,window.removeEventListener("resize",G),window.removeEventListener("keydown",E),window.removeEventListener("keyup",y),l&&(l.dispose(),l=null),s=null,o=null}function lt(){_e()}return{start:Oe,stop:Ge,restart:lt,score:e,best:t,speed:i,isGameOver:r}}const RS={class:"app"},CS={__name:"App",setup(n){const e=Qi(null),{start:t,stop:i,restart:r,score:s,best:o,speed:l,isGameOver:c}=wS(e);return rf(()=>t()),sf(()=>i()),(u,f)=>(Rs(),Cs("div",RS,[Gt("canvas",{ref_key:"canvas",ref:e,class:"game-canvas"},null,512),ci(Yp,{score:ji(s),best:ji(o),speed:ji(l),isGameOver:ji(c),onRestart:ji(r)},null,8,["score","best","speed","isGameOver","onRestart"])]))}},ch=Fp(CS);ch.use(Vp());ch.mount("#app");
