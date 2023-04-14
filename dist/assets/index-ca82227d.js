(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="151",bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qu=0,Io=1,th=2,vc=1,eh=2,vr=3,Wn=0,Ce=1,Cn=2,Gn=0,qi=1,Uo=2,Oo=3,No=4,nh=5,Vi=100,ih=101,rh=102,Fo=103,zo=104,sh=200,ah=201,oh=202,lh=203,Mc=204,Sc=205,ch=206,uh=207,hh=208,fh=209,dh=210,ph=0,mh=1,gh=2,Aa=3,_h=4,xh=5,vh=6,Mh=7,yc=0,Sh=1,yh=2,Ln=0,bh=1,wh=2,Th=3,Eh=4,Ah=5,bc=300,Ji=301,Qi=302,Ca=303,Pa=304,Es=306,La=1e3,on=1001,Ra=1002,we=1003,Bo=1004,Bs=1005,Ze=1006,Ch=1007,Er=1008,pi=1009,Ph=1010,Lh=1011,wc=1012,Rh=1013,oi=1014,li=1015,Ar=1016,Dh=1017,Ih=1018,Yi=1020,Uh=1021,ln=1023,Oh=1024,Nh=1025,ui=1026,tr=1027,Fh=1028,zh=1029,Bh=1030,kh=1031,Gh=1033,ks=33776,Gs=33777,Vs=33778,Hs=33779,ko=35840,Go=35841,Vo=35842,Ho=35843,Vh=36196,Wo=37492,Xo=37496,qo=37808,Yo=37809,jo=37810,Zo=37811,Ko=37812,$o=37813,Jo=37814,Qo=37815,tl=37816,el=37817,nl=37818,il=37819,rl=37820,sl=37821,Ws=36492,Hh=36283,al=36284,ol=36285,ll=36286,mi=3e3,Wt=3001,Wh=3200,Xh=3201,Tc=0,qh=1,dn="srgb",Cr="srgb-linear",Ec="display-p3",Xs=7680,Yh=519,cl=35044,ul="300 es",Da=1035;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,Ia=180/Math.PI;function Or(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[o&255]+ge[o>>8&255]+ge[o>>16&255]+ge[o>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function Te(o,t,e){return Math.max(t,Math.min(e,o))}function jh(o,t){return(o%t+t)%t}function Ys(o,t,e){return(1-e)*o+e*t}function hl(o){return(o&o-1)===0&&o!==0}function Zh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Gr(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Oe(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,s,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],y=i[1],S=i[4],x=i[7],M=i[2],A=i[5],P=i[8];return r[0]=s*g+a*y+l*M,r[3]=s*m+a*S+l*A,r[6]=s*d+a*x+l*P,r[1]=c*g+u*y+h*M,r[4]=c*m+u*S+h*A,r[7]=c*d+u*x+h*P,r[2]=f*g+p*y+_*M,r[5]=f*m+p*S+_*A,r[8]=f*d+p*x+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*s*u-e*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*s-a*c,f=a*l-u*r,p=c*r-s*l,_=e*h+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*s)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-i*c,i*l,-i*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(js.makeScale(t,e)),this}rotate(t){return this.premultiply(js.makeRotation(-t)),this}translate(t,e){return this.premultiply(js.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const js=new It;function Ac(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function gs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ji(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Zs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Kh=new It().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),$h=new It().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Jh(o){return o.convertSRGBToLinear().applyMatrix3($h)}function Qh(o){return o.applyMatrix3(Kh).convertLinearToSRGB()}const tf={[Cr]:o=>o,[dn]:o=>o.convertSRGBToLinear(),[Ec]:Jh},ef={[Cr]:o=>o,[dn]:o=>o.convertLinearToSRGB(),[Ec]:Qh},Ne={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Cr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=tf[t],i=ef[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}};let Ti;class Cc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=gs("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=ji(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Pc{constructor(t=null){this.isSource=!0,this.uuid=Or(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Ks(i[s].image)):r.push(Ks(i[s]))}else r=Ks(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ks(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Cc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nf=0;class Ve extends Si{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=on,i=on,r=Ze,s=Er,a=ln,l=pi,c=Ve.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Or(),this.name="",this.source=new Pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case La:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case La:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=bc;Ve.DEFAULT_ANISOTROPY=1;class Xt{constructor(t=0,e=0,n=0,i=1){Xt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(p+1)/2,M=(d+1)/2,A=(u+f)/4,P=(h+g)/4,C=(_+m)/4;return S>x&&S>M?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=P/n):x>M?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=C/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=P/r,i=C/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gi extends Si{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Xt(0,0,t,e),this.scissorTest=!1,this.viewport=new Xt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ze,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Pc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lc extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rf extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],p=r[s+1],_=r[s+2],g=r[s+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==p||u!==_){let m=1-a;const d=l*f+c*p+u*_+h*g,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const M=Math.sqrt(S),A=Math.atan2(M,d*y);m=Math.sin(m*A)/M,a=Math.sin(a*A)/M}const x=a*y;if(l=l*m+f*x,c=c*m+p*x,u=u*m+_*x,h=h*m+g*x,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],p=r[s+2],_=r[s+3];return t[e]=a*_+u*h+l*p-c*f,t[e+1]=l*_+u*f+c*h-a*p,t[e+2]=c*_+u*p+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),p=l(i/2),_=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(s-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,l=t.w,c=l*e+s*i-a*n,u=l*n+a*e-r*i,h=l*i+r*n-s*e,f=-r*e-s*n-a*i;return this.x=c*l+f*-r+u*-a-h*-s,this.y=u*l+f*-s+h*-r-c*-a,this.z=h*l+f*-a+c*-s-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $s.copy(this).projectOnVector(t),this.sub($s)}reflect(t){return this.sub($s.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new I,fl=new _i;class Nr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ei.copy(t.boundingBox),Ei.applyMatrix4(t.matrixWorld),this.union(Ei);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,a=r.count;s<a;s++)Sn.fromBufferAttribute(r,s).applyMatrix4(t.matrixWorld),this.expandByPoint(Sn)}else i.boundingBox===null&&i.computeBoundingBox(),Ei.copy(i.boundingBox),Ei.applyMatrix4(t.matrixWorld),this.union(Ei)}const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),Vr.subVectors(this.max,dr),Ai.subVectors(t.a,dr),Ci.subVectors(t.b,dr),Pi.subVectors(t.c,dr),Un.subVectors(Ci,Ai),On.subVectors(Pi,Ci),Jn.subVectors(Ai,Pi);let e=[0,-Un.z,Un.y,0,-On.z,On.y,0,-Jn.z,Jn.y,Un.z,0,-Un.x,On.z,0,-On.x,Jn.z,0,-Jn.x,-Un.y,Un.x,0,-On.y,On.x,0,-Jn.y,Jn.x,0];return!Js(e,Ai,Ci,Pi,Vr)||(e=[1,0,0,0,1,0,0,0,1],!Js(e,Ai,Ci,Pi,Vr))?!1:(Hr.crossVectors(Un,On),e=[Hr.x,Hr.y,Hr.z],Js(e,Ai,Ci,Pi,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new I,new I,new I,new I,new I,new I,new I,new I],Sn=new I,Ei=new Nr,Ai=new I,Ci=new I,Pi=new I,Un=new I,On=new I,Jn=new I,dr=new I,Vr=new I,Hr=new I,Qn=new I;function Js(o,t,e,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){Qn.fromArray(o,r);const a=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sf=new Nr,pr=new I,Qs=new I;class As{constructor(t=new I,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);const e=pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(pr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Qs)),this.expandByPoint(pr.copy(t.center).sub(Qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new I,ta=new I,Wr=new I,Nn=new I,ea=new I,Xr=new I,na=new I;class Rc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ta.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(ta);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Wr),a=Nn.dot(this.direction),l=-Nn.dot(Wr),c=Nn.lengthSq(),u=Math.abs(1-s*s);let h,f,p,_;if(u>0)if(h=s*l-a,f=s*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,p=h*(h+s*f+2*a)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-s*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(s*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ta).addScaledVector(Wr,f),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,s=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,s=(t.min.y-f.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,i,r){ea.subVectors(e,t),Xr.subVectors(n,t),na.crossVectors(ea,Xr);let s=this.direction.dot(na),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Nn.subVectors(this.origin,t);const l=a*this.direction.dot(Xr.crossVectors(Nn,Xr));if(l<0)return null;const c=a*this.direction.dot(ea.cross(Nn));if(c<0||l+c>s)return null;const u=-a*Nn.dot(na);return u<0?null:this.at(u/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,s,a,l,c,u,h,f,p,_,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=s,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),s=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=s*u,p=s*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+p*c,e[10]=s*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,_=c*u,g=c*h;e[0]=f+g*a,e[4]=_*a-p,e[8]=s*c,e[1]=s*h,e[5]=s*u,e[9]=-a,e[2]=p*a-_,e[6]=g+f*a,e[10]=s*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,_=c*u,g=c*h;e[0]=f-g*a,e[4]=-s*h,e[8]=_+p*a,e[1]=p+_*a,e[5]=s*u,e[9]=g-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){const f=s*u,p=s*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-p,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+p,e[1]=h,e[5]=s*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=s*l,p=s*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=s*u,e[9]=p*h-_,e[2]=_*h-p,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(af,t,of)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Fn.crossVectors(n,Fe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Fn.crossVectors(n,Fe)),Fn.normalize(),qr.crossVectors(Fe,Fn),i[0]=Fn.x,i[4]=qr.x,i[8]=Fe.x,i[1]=Fn.y,i[5]=qr.y,i[9]=Fe.y,i[2]=Fn.z,i[6]=qr.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],y=n[3],S=n[7],x=n[11],M=n[15],A=i[0],P=i[4],C=i[8],v=i[12],w=i[1],z=i[5],B=i[9],D=i[13],O=i[2],F=i[6],$=i[10],Z=i[14],W=i[3],et=i[7],J=i[11],_t=i[15];return r[0]=s*A+a*w+l*O+c*W,r[4]=s*P+a*z+l*F+c*et,r[8]=s*C+a*B+l*$+c*J,r[12]=s*v+a*D+l*Z+c*_t,r[1]=u*A+h*w+f*O+p*W,r[5]=u*P+h*z+f*F+p*et,r[9]=u*C+h*B+f*$+p*J,r[13]=u*v+h*D+f*Z+p*_t,r[2]=_*A+g*w+m*O+d*W,r[6]=_*P+g*z+m*F+d*et,r[10]=_*C+g*B+m*$+d*J,r[14]=_*v+g*D+m*Z+d*_t,r[3]=y*A+S*w+x*O+M*W,r[7]=y*P+S*z+x*F+M*et,r[11]=y*C+S*B+x*$+M*J,r[15]=y*v+S*D+x*Z+M*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*p-n*l*p)+g*(+e*l*p-e*c*f+r*s*f-i*s*p+i*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*s*h+n*s*p+r*a*u-n*c*u)+d*(-i*a*u-e*l*h+e*a*f+i*s*h-n*s*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],y=h*m*c-g*f*c+g*l*p-a*m*p-h*l*d+a*f*d,S=_*f*c-u*m*c-_*l*p+s*m*p+u*l*d-s*f*d,x=u*g*c-_*h*c+_*a*p-s*g*p-u*a*d+s*h*d,M=_*h*l-u*g*l-_*a*f+s*g*f+u*a*m-s*h*m,A=e*y+n*S+i*x+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=y*P,t[1]=(g*f*r-h*m*r-g*i*p+n*m*p+h*i*d-n*f*d)*P,t[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*d+n*l*d)*P,t[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*p-n*l*p)*P,t[4]=S*P,t[5]=(u*m*r-_*f*r+_*i*p-e*m*p-u*i*d+e*f*d)*P,t[6]=(_*l*r-s*m*r-_*i*c+e*m*c+s*i*d-e*l*d)*P,t[7]=(s*f*r-u*l*r+u*i*c-e*f*c-s*i*p+e*l*p)*P,t[8]=x*P,t[9]=(_*h*r-u*g*r-_*n*p+e*g*p+u*n*d-e*h*d)*P,t[10]=(s*g*r-_*a*r+_*n*c-e*g*c-s*n*d+e*a*d)*P,t[11]=(u*a*r-s*h*r-u*n*c+e*h*c+s*n*p-e*a*p)*P,t[12]=M*P,t[13]=(u*g*i-_*h*i+_*n*f-e*g*f-u*n*m+e*h*m)*P,t[14]=(_*a*i-s*g*i-_*n*l+e*g*l+s*n*m-e*a*m)*P,t[15]=(s*h*i-u*a*i+u*n*l-e*h*l-s*n*f+e*a*f)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,l=t.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,a=e._z,l=e._w,c=r+r,u=s+s,h=a+a,f=r*c,p=r*u,_=r*h,g=s*u,m=s*h,d=a*h,y=l*c,S=l*u,x=l*h,M=n.x,A=n.y,P=n.z;return i[0]=(1-(g+d))*M,i[1]=(p+x)*M,i[2]=(_-S)*M,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(f+d))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(_+S)*P,i[9]=(m-y)*P,i[10]=(1-(f+g))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Li.set(i[0],i[1],i[2]).length();const s=Li.set(i[4],i[5],i[6]).length(),a=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const c=1/r,u=1/s,h=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s){const a=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(s+r)/(s-r),p=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,s){const a=this.elements,l=1/(e-t),c=1/(n-i),u=1/(s-r),h=(e+t)*l,f=(n+i)*c,p=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Li=new I,nn=new ne,af=new I(0,0,0),of=new I(1,1,1),Fn=new I,qr=new I,Fe=new I,dl=new ne,pl=new _i;class Cs{constructor(t=0,e=0,n=0,i=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lf=0;const ml=new I,Ri=new _i,bn=new ne,Yr=new I,mr=new I,cf=new I,uf=new _i,gl=new I(1,0,0),_l=new I(0,1,0),xl=new I(0,0,1),hf={type:"added"},vl={type:"removed"};class Ee extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new I,e=new Cs,n=new _i,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new It}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(mr,Yr,this.up):bn.lookAt(Yr,mr,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(bn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(vl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(t,e);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=s(t.geometries),l=s(t.materials),c=s(t.textures),u=s(t.images),h=s(t.shapes),f=s(t.skeletons),p=s(t.animations),_=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new I(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new I,wn=new I,ia=new I,Tn=new I,Di=new I,Ii=new I,Ml=new I,ra=new I,sa=new I,aa=new I;let jr=!1;class an{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){rn.subVectors(i,e),wn.subVectors(n,e),ia.subVectors(t,e);const s=rn.dot(rn),a=rn.dot(wn),l=rn.dot(ia),c=wn.dot(wn),u=wn.dot(ia),h=s*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,_=(s*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(t,e,n,i,r,s,a,l){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),this.getInterpolation(t,e,n,i,r,s,a,l)}static getInterpolation(t,e,n,i,r,s,a,l){return this.getBarycoord(t,e,n,i,Tn),l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(s,Tn.y),l.addScaledVector(a,Tn.z),l}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),wn.subVectors(t,e),rn.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),rn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),an.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let s,a;Di.subVectors(i,n),Ii.subVectors(r,n),ra.subVectors(t,n);const l=Di.dot(ra),c=Ii.dot(ra);if(l<=0&&c<=0)return e.copy(n);sa.subVectors(t,i);const u=Di.dot(sa),h=Ii.dot(sa);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),e.copy(n).addScaledVector(Di,s);aa.subVectors(t,r);const p=Di.dot(aa),_=Ii.dot(aa);if(_>=0&&p<=_)return e.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Ii,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Ml.subVectors(r,i),a=(h-u)/(h-u+(p-_)),e.copy(i).addScaledVector(Ml,a);const d=1/(m+g+f);return s=g*d,a=f*d,e.copy(n).addScaledVector(Di,s).addScaledVector(Ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let ff=0;class cr extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=qi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function oa(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ne.workingColorSpace){if(t=jh(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=oa(s,r,t+1/3),this.g=oa(s,r,t),this.b=oa(s,r,t-1/3)}return Ne.toWorkingColorSpace(this,i),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ne.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ne.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=Ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return Ne.fromWorkingColorSpace(_e.copy(this),t),Te(_e.r*255,0,255)<<16^Te(_e.g*255,0,255)<<8^Te(_e.b*255,0,255)<<0}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ne.workingColorSpace){Ne.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,i=_e.g,r=_e.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=dn){Ne.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,i=_e.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(sn),sn.h+=t,sn.s+=e,sn.l+=n,this.setHSL(sn.h,sn.s,sn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(sn),t.getHSL(Zr);const n=Ys(sn.h,Zr.h,e),i=Ys(sn.s,Zr.s,e),r=Ys(sn.l,Zr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new zt;zt.NAMES=Ic;class Uc extends cr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new I,Kr=new Tt;class _n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Oc extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nc extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let df=0;const qe=new ne,la=new Ee,Ui=new I,ze=new Nr,gr=new Nr,he=new I;class un extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?Nc:Oc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return la.lookAt(t),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(ze.min,gr.min),ze.expandByPoint(he),he.addVectors(ze.max,gr.max),ze.expandByPoint(he)):(ze.expandByPoint(gr.min),ze.expandByPoint(gr.max))}ze.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)he.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(he));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)he.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(t,c),he.add(Ui)),i=Math.max(i,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new I,u[w]=new I;const h=new I,f=new I,p=new I,_=new Tt,g=new Tt,m=new Tt,d=new I,y=new I;function S(w,z,B){h.fromArray(i,w*3),f.fromArray(i,z*3),p.fromArray(i,B*3),_.fromArray(s,w*2),g.fromArray(s,z*2),m.fromArray(s,B*2),f.sub(h),p.sub(h),g.sub(_),m.sub(_);const D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(D),y.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(D),c[w].add(d),c[z].add(d),c[B].add(d),u[w].add(y),u[z].add(y),u[B].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let w=0,z=x.length;w<z;++w){const B=x[w],D=B.start,O=B.count;for(let F=D,$=D+O;F<$;F+=3)S(n[F+0],n[F+1],n[F+2])}const M=new I,A=new I,P=new I,C=new I;function v(w){P.fromArray(r,w*3),C.copy(P);const z=c[w];M.copy(z),M.sub(P.multiplyScalar(P.dot(z))).normalize(),A.crossVectors(C,z);const D=A.dot(u[w])<0?-1:1;l[w*4]=M.x,l[w*4+1]=M.y,l[w*4+2]=M.z,l[w*4+3]=D}for(let w=0,z=x.length;w<z;++w){const B=x[w],D=B.start,O=B.count;for(let F=D,$=D+O;F<$;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,s=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new _n(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new un,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new ne,fn=new Rc,$r=new As,yl=new I,Oi=new I,Ni=new I,Fi=new I,ca=new I,Jr=new I,Qr=new Tt,ts=new Tt,es=new Tt,bl=new I,wl=new I,Tl=new I,ns=new I,is=new I;class Pn extends Ee{constructor(t=new un,e=new Uc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ca.fromBufferAttribute(h,t),s?Jr.addScaledVector(ca,u):Jr.addScaledVector(ca.sub(e),u))}e.add(Jr)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),fn.copy(t.ray).recast(t.near),$r.containsPoint(fn.origin)===!1&&(fn.intersectSphere($r,yl)===null||fn.origin.distanceToSquared(yl)>(t.far-t.near)**2))||(Sl.copy(r).invert(),fn.copy(t.ray).applyMatrix4(Sl),n.boundingBox!==null&&fn.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,f=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=i[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,M=S;x<M;x+=3){const A=a.getX(x),P=a.getX(x+1),C=a.getX(x+2);s=rs(this,d,t,fn,c,u,h,A,P,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const y=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=rs(this,i,t,fn,c,u,h,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=i[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,M=S;x<M;x+=3){const A=x,P=x+1,C=x+2;s=rs(this,d,t,fn,c,u,h,A,P,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const y=m,S=m+1,x=m+2;s=rs(this,i,t,fn,c,u,h,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function pf(o,t,e,n,i,r,s,a){let l;if(t.side===Ce?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,t.side===Wn,a),l===null)return null;is.copy(a),is.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(is);return c<e.near||c>e.far?null:{distance:c,point:is.clone(),object:o}}function rs(o,t,e,n,i,r,s,a,l,c){o.getVertexPosition(a,Oi),o.getVertexPosition(l,Ni),o.getVertexPosition(c,Fi);const u=pf(o,t,e,n,Oi,Ni,Fi,ns);if(u){i&&(Qr.fromBufferAttribute(i,a),ts.fromBufferAttribute(i,l),es.fromBufferAttribute(i,c),u.uv=an.getInterpolation(ns,Oi,Ni,Fi,Qr,ts,es,new Tt)),r&&(Qr.fromBufferAttribute(r,a),ts.fromBufferAttribute(r,l),es.fromBufferAttribute(r,c),u.uv2=an.getInterpolation(ns,Oi,Ni,Fi,Qr,ts,es,new Tt)),s&&(bl.fromBufferAttribute(s,a),wl.fromBufferAttribute(s,l),Tl.fromBufferAttribute(s,c),u.normal=an.getInterpolation(ns,Oi,Ni,Fi,bl,wl,Tl,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};an.getNormal(Oi,Ni,Fi,h.normal),u.face=h}return u}class Fr extends un{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,e,t,s,r,0),_("z","y","x",1,-1,n,e,-t,s,r,1),_("x","z","y",1,1,t,n,e,i,s,2),_("x","z","y",1,-1,t,n,-e,i,s,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(h,2));function _(g,m,d,y,S,x,M,A,P,C,v){const w=x/P,z=M/C,B=x/2,D=M/2,O=A/2,F=P+1,$=C+1;let Z=0,W=0;const et=new I;for(let J=0;J<$;J++){const _t=J*z-D;for(let it=0;it<F;it++){const V=it*w-B;et[g]=V*y,et[m]=_t*S,et[d]=O,c.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[d]=A>0?1:-1,u.push(et.x,et.y,et.z),h.push(it/P),h.push(1-J/C),Z+=1}}for(let J=0;J<C;J++)for(let _t=0;_t<P;_t++){const it=f+_t+F*J,V=f+_t+F*(J+1),j=f+(_t+1)+F*(J+1),rt=f+(_t+1)+F*J;l.push(it,V,rt),l.push(V,j,rt),W+=6}a.addGroup(p,W,v),p+=W,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function be(o){const t={};for(let e=0;e<o.length;e++){const n=er(o[e]);for(const i in n)t[i]=n[i]}return t}function mf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Fc(o){return o.getRenderTarget()===null&&o.outputEncoding===Wt?dn:Cr}const gf={clone:er,merge:be};var _f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends cr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ke extends zc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,e-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Bi=1;class vf extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new ke(zi,Bi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new ke(zi,Bi,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new ke(zi,Bi,t,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new ke(zi,Bi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new ke(zi,Bi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ke(zi,Bi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=Ln,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,s),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Bc extends Ve{constructor(t,e,n,i,r,s,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,i,r,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mf extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Bc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fr(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Gn});r.uniforms.tEquirect.value=e;const s=new Pn(i,r),a=e.minFilter;return e.minFilter===Er&&(e.minFilter=Ze),new vf(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}}const ua=new I,Sf=new I,yf=new It;class ii{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ua.subVectors(n,e).cross(Sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yf.getNormalMatrix(t),i=this.coplanarPoint(ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new As,ss=new I;class Ja{constructor(t=new ii,e=new ii,n=new ii,i=new ii,r=new ii,s=new ii){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],_=n[10],g=n[11],m=n[12],d=n[13],y=n[14],S=n[15];return e[0].setComponents(a-i,h-l,g-f,S-m).normalize(),e[1].setComponents(a+i,h+l,g+f,S+m).normalize(),e[2].setComponents(a+r,h+c,g+p,S+d).normalize(),e[3].setComponents(a-r,h-c,g-p,S-d).normalize(),e[4].setComponents(a-s,h-u,g-_,S-y).normalize(),e[5].setComponents(a+s,h+u,g+_,S+y).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ss.x=i.normal.x>0?t.max.x:t.min.x,ss.y=i.normal.y>0?t.max.y:t.min.y,ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let o=null,t=!1,e=null,n=null;function i(r,s){e(r,s),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function bf(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=o.createBuffer();o.bindBuffer(u,p),o.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;o.bindBuffer(h,c),p.count===-1?o.bufferSubData(h,0,f):(e?o.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):o.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:a,update:l}}class Qa extends un{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,p=[],_=[],g=[],m=[];for(let d=0;d<u;d++){const y=d*f-s;for(let S=0;S<c;S++){const x=S*h-r;_.push(x,-y,0),g.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const S=y+c*d,x=y+c*(d+1),M=y+1+c*(d+1),A=y+1+c*d;p.push(S,x,A),p.push(x,M,A)}this.setIndex(p),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.width,t.height,t.widthSegments,t.heightSegments)}}var wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf="vec3 transformed = vec3( position );",Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hf=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
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
}`,ld=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,dd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,md=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Md=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ld=`#if defined( USE_POINTS_UV )
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
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Id=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Od=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,pp=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,mp=`#ifdef USE_UV
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
#endif`,gp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,_p=`#ifdef USE_UV
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
#endif`,xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ep=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Cp=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Up=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Np=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,zp=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kp=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Vp=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Wp=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,qp=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`uniform float size;
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
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Kp=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ct={alphamap_fragment:wf,alphamap_pars_fragment:Tf,alphatest_fragment:Ef,alphatest_pars_fragment:Af,aomap_fragment:Cf,aomap_pars_fragment:Pf,begin_vertex:Lf,beginnormal_vertex:Rf,bsdfs:Df,iridescence_fragment:If,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:zf,color_fragment:Bf,color_pars_fragment:kf,color_pars_vertex:Gf,color_vertex:Vf,common:Hf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:Yf,emissivemap_fragment:jf,emissivemap_pars_fragment:Zf,encodings_fragment:Kf,encodings_pars_fragment:$f,envmap_fragment:Jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:td,envmap_pars_vertex:ed,envmap_physical_pars_fragment:dd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:rd,fog_fragment:sd,fog_pars_fragment:ad,gradientmap_pars_fragment:od,lightmap_fragment:ld,lightmap_pars_fragment:cd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:hd,lights_pars_begin:fd,lights_toon_fragment:pd,lights_toon_pars_fragment:md,lights_phong_fragment:gd,lights_phong_pars_fragment:_d,lights_physical_fragment:xd,lights_physical_pars_fragment:vd,lights_fragment_begin:Md,lights_fragment_maps:Sd,lights_fragment_end:yd,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:wd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Ed,map_fragment:Ad,map_pars_fragment:Cd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Dd,morphcolor_vertex:Id,morphnormal_vertex:Ud,morphtarget_pars_vertex:Od,morphtarget_vertex:Nd,normal_fragment_begin:Fd,normal_fragment_maps:zd,normal_pars_fragment:Bd,normal_pars_vertex:kd,normal_vertex:Gd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:qd,output_fragment:Yd,packing:jd,premultiplied_alpha_fragment:Zd,project_vertex:Kd,dithering_fragment:$d,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:rp,skinbase_vertex:sp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:up,tonemapping_fragment:hp,tonemapping_pars_fragment:fp,transmission_fragment:dp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:_p,worldpos_vertex:xp,background_vert:vp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:yp,cube_vert:bp,cube_frag:wp,depth_vert:Tp,depth_frag:Ep,distanceRGBA_vert:Ap,distanceRGBA_frag:Cp,equirect_vert:Pp,equirect_frag:Lp,linedashed_vert:Rp,linedashed_frag:Dp,meshbasic_vert:Ip,meshbasic_frag:Up,meshlambert_vert:Op,meshlambert_frag:Np,meshmatcap_vert:Fp,meshmatcap_frag:zp,meshnormal_vert:Bp,meshnormal_frag:kp,meshphong_vert:Gp,meshphong_frag:Vp,meshphysical_vert:Hp,meshphysical_frag:Wp,meshtoon_vert:Xp,meshtoon_frag:qp,points_vert:Yp,points_frag:jp,shadow_vert:Zp,shadow_frag:Kp,sprite_vert:$p,sprite_frag:Jp},at={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaTest:{value:0}}},pn={basic:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:be([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:be([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:be([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:be([at.points,at.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:be([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:be([at.common,at.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:be([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:be([at.sprite,at.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:be([at.common,at.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:be([at.lights,at.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};pn.physical={uniforms:be([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const as={r:0,b:0,g:0};function Qp(o,t,e,n,i,r,s){const a=new zt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(m,d){let y=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=(d.backgroundBlurriness>0?e:t).get(S));const x=o.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(S=null),S===null?g(a,l):S&&S.isColor&&(g(S,1),y=!0),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Es)?(u===void 0&&(u=new Pn(new Fr(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:er(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=S.encoding!==Wt,(h!==S||f!==S.version||p!==o.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Pn(new Qa(2,2),new xi({name:"BackgroundMaterial",uniforms:er(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=S.encoding!==Wt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==o.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(as,Fc(o)),n.buffers.color.setClear(as.r,as.g,as.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function tm(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(O,F,$,Z,W){let et=!1;if(s){const J=g(Z,$,F);c!==J&&(c=J,p(c.object)),et=d(O,Z,$,W),et&&y(O,Z,$,W)}else{const J=F.wireframe===!0;(c.geometry!==Z.id||c.program!==$.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=$.id,c.wireframe=J,et=!0)}W!==null&&e.update(W,34963),(et||u)&&(u=!1,C(O,F,$,Z),W!==null&&o.bindBuffer(34963,e.get(W).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?o.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?o.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function g(O,F,$){const Z=$.wireframe===!0;let W=a[O.id];W===void 0&&(W={},a[O.id]=W);let et=W[F.id];et===void 0&&(et={},W[F.id]=et);let J=et[Z];return J===void 0&&(J=m(f()),et[Z]=J),J}function m(O){const F=[],$=[],Z=[];for(let W=0;W<i;W++)F[W]=0,$[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:Z,object:O,attributes:{},index:null}}function d(O,F,$,Z){const W=c.attributes,et=F.attributes;let J=0;const _t=$.getAttributes();for(const it in _t)if(_t[it].location>=0){const j=W[it];let rt=et[it];if(rt===void 0&&(it==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),it==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor)),j===void 0||j.attribute!==rt||rt&&j.data!==rt.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function y(O,F,$,Z){const W={},et=F.attributes;let J=0;const _t=$.getAttributes();for(const it in _t)if(_t[it].location>=0){let j=et[it];j===void 0&&(it==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),it==="instanceColor"&&O.instanceColor&&(j=O.instanceColor));const rt={};rt.attribute=j,j&&j.data&&(rt.data=j.data),W[it]=rt,J++}c.attributes=W,c.attributesNum=J,c.index=Z}function S(){const O=c.newAttributes;for(let F=0,$=O.length;F<$;F++)O[F]=0}function x(O){M(O,0)}function M(O,F){const $=c.newAttributes,Z=c.enabledAttributes,W=c.attributeDivisors;$[O]=1,Z[O]===0&&(o.enableVertexAttribArray(O),Z[O]=1),W[O]!==F&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,F),W[O]=F)}function A(){const O=c.newAttributes,F=c.enabledAttributes;for(let $=0,Z=F.length;$<Z;$++)F[$]!==O[$]&&(o.disableVertexAttribArray($),F[$]=0)}function P(O,F,$,Z,W,et){n.isWebGL2===!0&&($===5124||$===5125)?o.vertexAttribIPointer(O,F,$,W,et):o.vertexAttribPointer(O,F,$,Z,W,et)}function C(O,F,$,Z){if(n.isWebGL2===!1&&(O.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const W=Z.attributes,et=$.getAttributes(),J=F.defaultAttributeValues;for(const _t in et){const it=et[_t];if(it.location>=0){let V=W[_t];if(V===void 0&&(_t==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),_t==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){const j=V.normalized,rt=V.itemSize,ct=e.get(V);if(ct===void 0)continue;const G=ct.buffer,yt=ct.type,Mt=ct.bytesPerElement;if(V.isInterleavedBufferAttribute){const st=V.data,vt=st.stride,Ft=V.offset;if(st.isInstancedInterleavedBuffer){for(let mt=0;mt<it.locationSize;mt++)M(it.location+mt,st.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let mt=0;mt<it.locationSize;mt++)x(it.location+mt);o.bindBuffer(34962,G);for(let mt=0;mt<it.locationSize;mt++)P(it.location+mt,rt/it.locationSize,yt,j,vt*Mt,(Ft+rt/it.locationSize*mt)*Mt)}else{if(V.isInstancedBufferAttribute){for(let st=0;st<it.locationSize;st++)M(it.location+st,V.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let st=0;st<it.locationSize;st++)x(it.location+st);o.bindBuffer(34962,G);for(let st=0;st<it.locationSize;st++)P(it.location+st,rt/it.locationSize,yt,j,rt*Mt,rt/it.locationSize*st*Mt)}}else if(J!==void 0){const j=J[_t];if(j!==void 0)switch(j.length){case 2:o.vertexAttrib2fv(it.location,j);break;case 3:o.vertexAttrib3fv(it.location,j);break;case 4:o.vertexAttrib4fv(it.location,j);break;default:o.vertexAttrib1fv(it.location,j)}}}}A()}function v(){B();for(const O in a){const F=a[O];for(const $ in F){const Z=F[$];for(const W in Z)_(Z[W].object),delete Z[W];delete F[$]}delete a[O]}}function w(O){if(a[O.id]===void 0)return;const F=a[O.id];for(const $ in F){const Z=F[$];for(const W in Z)_(Z[W].object),delete Z[W];delete F[$]}delete a[O.id]}function z(O){for(const F in a){const $=a[F];if($[O.id]===void 0)continue;const Z=$[O.id];for(const W in Z)_(Z[W].object),delete Z[W];delete $[O.id]}}function B(){D(),u=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:D,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:S,enableAttribute:x,disableUnusedAttributes:A}}function em(o,t,e,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=o,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),e.update(u,r,h)}this.setMode=s,this.render=a,this.renderInstances=l}function nm(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),p=o.getParameter(3379),_=o.getParameter(34076),g=o.getParameter(34921),m=o.getParameter(36347),d=o.getParameter(36348),y=o.getParameter(36349),S=f>0,x=s||t.has("OES_texture_float"),M=S&&x,A=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:A}}function im(o){const t=this;let e=null,n=0,i=!1,r=!1;const s=new ii,a=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,d=o.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,S=y*4;let x=d.clippingState||null;l.value=x,x=u(_,f,S,p);for(let M=0;M!==S;++M)x[M]=e[M];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const d=p+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,x=p;S!==g;++S,x+=4)s.copy(h[S]).applyMatrix4(y,a),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function rm(o){let t=new WeakMap;function e(s,a){return a===Ca?s.mapping=Ji:a===Pa&&(s.mapping=Qi),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Ca||a===Pa)if(t.has(s)){const l=t.get(s).texture;return e(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Mf(l.height/2);return c.fromEquirectangularTexture(o,s),t.set(s,c),s.addEventListener("dispose",i),e(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class sm extends zc{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hi=4,El=[.125,.215,.35,.446,.526,.582],ai=20,ha=new sm,Al=new zt;let fa=null;const ri=(1+Math.sqrt(5))/2,ki=1/ri,Cl=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ri,ki),new I(0,ri,-ki),new I(ki,0,ri),new I(-ki,0,ri),new I(ri,ki,0),new I(-ri,ki,0)];class Pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){fa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa),t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Ar,format:ln,encoding:mi,depthBuffer:!1},i=Ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=am(r)),this._blurMaterial=om(r,t,e)}return i}_compileMaterial(t){const e=new Pn(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,i){const a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Al),u.toneMapping=Ln,u.autoClear=!1;const p=new Uc({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),_=new Pn(new Fr,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Al),g=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const S=this._cubeSize;os(i,y*S,d>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ji||t.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Pn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Cl[(i-1)%Cl.length];this._blur(t,i-1,i,r,s)}e.autoClear=n}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pn(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ai-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const d=[];let y=0;for(let P=0;P<ai;++P){const C=P/g,v=Math.exp(-C*C/2);d.push(v),P===0?y+=v:P<m&&(y+=2*v)}for(let P=0;P<d.length;P++)d[P]=d[P]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const x=this._sizeLods[i],M=3*x*(i>S-Hi?i-S+Hi:0),A=4*(this._cubeSize-x);os(e,M,A,3*x,2*x),l.setRenderTarget(e),l.render(h,ha)}}function am(o){const t=[],e=[],n=[];let i=o;const r=o-Hi+1+El.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let l=1/a;s>o-Hi?l=El[s-o+Hi-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,d=1,y=new Float32Array(g*_*p),S=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,C=A>2?0:-1,v=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];y.set(v,g*_*A),S.set(f,m*_*A);const w=[A,A,A,A,A,A];x.set(w,d*_*A)}const M=new un;M.setAttribute("position",new _n(y,g)),M.setAttribute("uv",new _n(S,m)),M.setAttribute("faceIndex",new _n(x,d)),t.push(M),i>Hi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ll(o,t,e){const n=new gi(o,t,e);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function om(o,t,e){const n=new Float32Array(ai),i=new I(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:to(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rl(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Dl(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function to(){return`

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
	`}function lm(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ca||l===Pa,u=l===Ji||l===Qi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Pl(o)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Pl(o));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function cm(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function um(o,t,e,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],34962);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)t.update(g[m],34962)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let S=0,x=y.length;S<x;S+=3){const M=y[S+0],A=y[S+1],P=y[S+2];f.push(M,A,A,P,P,M)}}else{const y=_.array;g=_.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const M=S+0,A=S+1,P=S+2;f.push(M,A,A,P,P,M)}}const m=new(Ac(f)?Nc:Oc)(f,1);m.version=g;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function hm(o,t,e,n){const i=n.isWebGL2;let r;function s(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){o.drawElements(r,p,a,f*l),e.update(p,r,1)}function h(f,p,_){if(_===0)return;let g,m;if(i)g=o,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,a,f*l,_),e.update(p,r,_)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function fm(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(e.calls++,s){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dm(o,t){return o[0]-t[0]}function pm(o,t){return Math.abs(t[1])-Math.abs(o[1])}function mm(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,s=new Xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let F=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const S=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let v=0;S===!0&&(v=1),x===!0&&(v=2),M===!0&&(v=3);let w=u.attributes.position.count*v,z=1;w>t.maxTextureSize&&(z=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const B=new Float32Array(w*z*4*g),D=new Lc(B,w,z,g);D.type=li,D.needsUpdate=!0;const O=v*4;for(let $=0;$<g;$++){const Z=A[$],W=P[$],et=C[$],J=w*z*4*$;for(let _t=0;_t<Z.count;_t++){const it=_t*O;S===!0&&(s.fromBufferAttribute(Z,_t),B[J+it+0]=s.x,B[J+it+1]=s.y,B[J+it+2]=s.z,B[J+it+3]=0),x===!0&&(s.fromBufferAttribute(W,_t),B[J+it+4]=s.x,B[J+it+5]=s.y,B[J+it+6]=s.z,B[J+it+7]=0),M===!0&&(s.fromBufferAttribute(et,_t),B[J+it+8]=s.x,B[J+it+9]=s.y,B[J+it+10]=s.z,B[J+it+11]=et.itemSize===4?s.w:1)}}m={count:g,texture:D,size:new Tt(w,z)},r.set(u,m),u.addEventListener("dispose",F)}let d=0;for(let S=0;S<f.length;S++)d+=f[S];const y=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(o,"morphTargetBaseInfluence",y),h.getUniforms().setValue(o,"morphTargetInfluences",f),h.getUniforms().setValue(o,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<_;x++){const M=g[x];M[0]=x,M[1]=f[x]}g.sort(pm);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(dm);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const M=a[x],A=M[0],P=M[1];A!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+x)!==m[A]&&u.setAttribute("morphTarget"+x,m[A]),d&&u.getAttribute("morphNormal"+x)!==d[A]&&u.setAttribute("morphNormal"+x,d[A]),i[x]=P,y+=P):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),d&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const S=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(o,"morphTargetBaseInfluence",S),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function gm(o,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:s}}const Gc=new Ve,Vc=new Lc,Hc=new rf,Wc=new Bc,Il=[],Ul=[],Ol=new Float32Array(16),Nl=new Float32Array(9),Fl=new Float32Array(4);function ur(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=Il[i];if(r===void 0&&(r=new Float32Array(i),Il[i]=r),t!==0){n.toArray(r,0);for(let s=1,a=0;s!==t;++s)a+=e,o[s].toArray(r,a)}return r}function le(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ce(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Ps(o,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function _m(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function xm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;o.uniform2fv(this.addr,t),ce(e,t)}}function vm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;o.uniform3fv(this.addr,t),ce(e,t)}}function Mm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;o.uniform4fv(this.addr,t),ce(e,t)}}function Sm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Fl.set(n),o.uniformMatrix2fv(this.addr,!1,Fl),ce(e,n)}}function ym(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Nl.set(n),o.uniformMatrix3fv(this.addr,!1,Nl),ce(e,n)}}function bm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Ol.set(n),o.uniformMatrix4fv(this.addr,!1,Ol),ce(e,n)}}function wm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Tm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;o.uniform2iv(this.addr,t),ce(e,t)}}function Em(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;o.uniform3iv(this.addr,t),ce(e,t)}}function Am(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;o.uniform4iv(this.addr,t),ce(e,t)}}function Cm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Pm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;o.uniform2uiv(this.addr,t),ce(e,t)}}function Lm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;o.uniform3uiv(this.addr,t),ce(e,t)}}function Rm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;o.uniform4uiv(this.addr,t),ce(e,t)}}function Dm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Gc,i)}function Im(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hc,i)}function Um(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wc,i)}function Om(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vc,i)}function Nm(o){switch(o){case 5126:return _m;case 35664:return xm;case 35665:return vm;case 35666:return Mm;case 35674:return Sm;case 35675:return ym;case 35676:return bm;case 5124:case 35670:return wm;case 35667:case 35671:return Tm;case 35668:case 35672:return Em;case 35669:case 35673:return Am;case 5125:return Cm;case 36294:return Pm;case 36295:return Lm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Om}}function Fm(o,t){o.uniform1fv(this.addr,t)}function zm(o,t){const e=ur(t,this.size,2);o.uniform2fv(this.addr,e)}function Bm(o,t){const e=ur(t,this.size,3);o.uniform3fv(this.addr,e)}function km(o,t){const e=ur(t,this.size,4);o.uniform4fv(this.addr,e)}function Gm(o,t){const e=ur(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Vm(o,t){const e=ur(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Hm(o,t){const e=ur(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Wm(o,t){o.uniform1iv(this.addr,t)}function Xm(o,t){o.uniform2iv(this.addr,t)}function qm(o,t){o.uniform3iv(this.addr,t)}function Ym(o,t){o.uniform4iv(this.addr,t)}function jm(o,t){o.uniform1uiv(this.addr,t)}function Zm(o,t){o.uniform2uiv(this.addr,t)}function Km(o,t){o.uniform3uiv(this.addr,t)}function $m(o,t){o.uniform4uiv(this.addr,t)}function Jm(o,t,e){const n=this.cache,i=t.length,r=Ps(e,i);le(n,r)||(o.uniform1iv(this.addr,r),ce(n,r));for(let s=0;s!==i;++s)e.setTexture2D(t[s]||Gc,r[s])}function Qm(o,t,e){const n=this.cache,i=t.length,r=Ps(e,i);le(n,r)||(o.uniform1iv(this.addr,r),ce(n,r));for(let s=0;s!==i;++s)e.setTexture3D(t[s]||Hc,r[s])}function tg(o,t,e){const n=this.cache,i=t.length,r=Ps(e,i);le(n,r)||(o.uniform1iv(this.addr,r),ce(n,r));for(let s=0;s!==i;++s)e.setTextureCube(t[s]||Wc,r[s])}function eg(o,t,e){const n=this.cache,i=t.length,r=Ps(e,i);le(n,r)||(o.uniform1iv(this.addr,r),ce(n,r));for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||Vc,r[s])}function ng(o){switch(o){case 5126:return Fm;case 35664:return zm;case 35665:return Bm;case 35666:return km;case 35674:return Gm;case 35675:return Vm;case 35676:return Hm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return jm;case 36294:return Zm;case 36295:return Km;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}class ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Nm(e.type)}}class rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=ng(e.type)}}class sg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function zl(o,t){o.seq.push(t),o.map[t.id]=t}function ag(o,t,e){const n=o.name,i=n.length;for(da.lastIndex=0;;){const r=da.exec(n),s=da.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){zl(e,c===void 0?new ig(a,o,t):new rg(a,o,t));break}else{let h=e.map[a];h===void 0&&(h=new sg(a),zl(e,h)),e=h}}}class fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);ag(r,s,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}}function Bl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let og=0;function lg(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}function cg(o){switch(o){case mi:return["Linear","( value )"];case Wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function kl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+lg(o.getShaderSource(t),s)}else return i}function ug(o,t){const e=cg(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function hg(o,t){let e;switch(t){case bh:e="Linear";break;case wh:e="Reinhard";break;case Th:e="OptimizedCineon";break;case Eh:e="ACESFilmic";break;case Ah:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function fg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function dg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pg(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[s]={type:r.type,location:o.getAttribLocation(t,s),locationSize:a}}return e}function Mr(o){return o!==""}function Gl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(o){return o.replace(mg,gg)}function gg(o,t){const e=Ct[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ua(e)}const _g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(o){return o.replace(_g,xg)}function xg(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wl(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===vr&&(t="SHADOWMAP_TYPE_VSM"),t}function Mg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case Es:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function yg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case yc:t="ENVMAP_BLENDING_MULTIPLY";break;case Sh:t="ENVMAP_BLENDING_MIX";break;case yh:t="ENVMAP_BLENDING_ADD";break}return t}function bg(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wg(o,t,e,n){const i=o.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const l=vg(e),c=Mg(e),u=Sg(e),h=yg(e),f=bg(e),p=e.isWebGL2?"":fg(e),_=dg(r),g=i.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[_].filter(Mr).join(`
`),m.length>0&&(m+=`
`),d=[p,_].filter(Mr).join(`
`),d.length>0&&(d+=`
`)):(m=[Wl(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),d=[p,Wl(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Ct.tonemapping_pars_fragment:"",e.toneMapping!==Ln?hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.encodings_pars_fragment,ug("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),s=Ua(s),s=Gl(s,e),s=Vl(s,e),a=Ua(a),a=Gl(a,e),a=Vl(a,e),s=Hl(s),a=Hl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=y+m+s,x=y+d+a,M=Bl(i,35633,S),A=Bl(i,35632,x);if(i.attachShader(g,M),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),o.debug.checkShaderErrors){const v=i.getProgramInfoLog(g).trim(),w=i.getShaderInfoLog(M).trim(),z=i.getShaderInfoLog(A).trim();let B=!0,D=!0;if(i.getProgramParameter(g,35714)===!1)if(B=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,M,A);else{const O=kl(i,M,"vertex"),F=kl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+v+`
`+O+`
`+F)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(w===""||z==="")&&(D=!1);D&&(this.diagnostics={runnable:B,programLog:v,vertexShader:{log:w,prefix:m},fragmentShader:{log:z,prefix:d}})}i.deleteShader(M),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new fs(i,g)),P};let C;return this.getAttributes=function(){return C===void 0&&(C=pg(i,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=og++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}let Tg=0;class Eg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ag(t),e.set(t,n)),n}}class Ag{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}}function Cg(o,t,e,n,i,r,s){const a=new Dc,l=new Eg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===1?"uv2":"uv"}function m(v,w,z,B,D){const O=B.fog,F=D.geometry,$=v.isMeshStandardMaterial?B.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),W=Z&&Z.mapping===Es?Z.image.height:null,et=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_t=J!==void 0?J.length:0;let it=0;F.morphAttributes.position!==void 0&&(it=1),F.morphAttributes.normal!==void 0&&(it=2),F.morphAttributes.color!==void 0&&(it=3);let V,j,rt,ct;if(et){const ht=pn[et];V=ht.vertexShader,j=ht.fragmentShader}else V=v.vertexShader,j=v.fragmentShader,l.update(v),rt=l.getVertexShaderID(v),ct=l.getFragmentShaderID(v);const G=o.getRenderTarget(),yt=D.isInstancedMesh===!0,Mt=!!v.map,st=!!v.matcap,vt=!!Z,Ft=!!v.aoMap,mt=!!v.lightMap,Et=!!v.bumpMap,Kt=!!v.normalMap,qt=!!v.displacementMap,ie=!!v.emissiveMap,Jt=!!v.metalnessMap,Nt=!!v.roughnessMap,Vt=v.clearcoat>0,pe=v.iridescence>0,E=v.sheen>0,b=v.transmission>0,H=Vt&&!!v.clearcoatMap,Q=Vt&&!!v.clearcoatNormalMap,nt=Vt&&!!v.clearcoatRoughnessMap,ot=pe&&!!v.iridescenceMap,L=pe&&!!v.iridescenceThicknessMap,K=E&&!!v.sheenColorMap,k=E&&!!v.sheenRoughnessMap,lt=!!v.specularMap,ft=!!v.specularColorMap,pt=!!v.specularIntensityMap,ut=b&&!!v.transmissionMap,dt=b&&!!v.thicknessMap,bt=!!v.gradientMap,Pt=!!v.alphaMap,Qt=v.alphaTest>0,R=!!v.extensions,q=!!F.attributes.uv2;return{isWebGL2:u,shaderID:et,shaderName:v.type,vertexShader:V,fragmentShader:j,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:yt,instancingColor:yt&&D.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?o.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:mi,map:Mt,matcap:st,envMap:vt,envMapMode:vt&&Z.mapping,envMapCubeUVHeight:W,aoMap:Ft,lightMap:mt,bumpMap:Et,normalMap:Kt,displacementMap:f&&qt,emissiveMap:ie,normalMapObjectSpace:Kt&&v.normalMapType===qh,normalMapTangentSpace:Kt&&v.normalMapType===Tc,decodeVideoTexture:Mt&&v.map.isVideoTexture===!0&&v.map.encoding===Wt,metalnessMap:Jt,roughnessMap:Nt,clearcoat:Vt,clearcoatMap:H,clearcoatNormalMap:Q,clearcoatRoughnessMap:nt,iridescence:pe,iridescenceMap:ot,iridescenceThicknessMap:L,sheen:E,sheenColorMap:K,sheenRoughnessMap:k,specularMap:lt,specularColorMap:ft,specularIntensityMap:pt,transmission:b,transmissionMap:ut,thicknessMap:dt,gradientMap:bt,opaque:v.transparent===!1&&v.blending===qi,alphaMap:Pt,alphaTest:Qt,combine:v.combine,mapUv:Mt&&g(v.map.channel),aoMapUv:Ft&&g(v.aoMap.channel),lightMapUv:mt&&g(v.lightMap.channel),bumpMapUv:Et&&g(v.bumpMap.channel),normalMapUv:Kt&&g(v.normalMap.channel),displacementMapUv:qt&&g(v.displacementMap.channel),emissiveMapUv:ie&&g(v.emissiveMap.channel),metalnessMapUv:Jt&&g(v.metalnessMap.channel),roughnessMapUv:Nt&&g(v.roughnessMap.channel),clearcoatMapUv:H&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Q&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:L&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:K&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:k&&g(v.sheenRoughnessMap.channel),specularMapUv:lt&&g(v.specularMap.channel),specularColorMapUv:ft&&g(v.specularColorMap.channel),specularIntensityMapUv:pt&&g(v.specularIntensityMap.channel),transmissionMapUv:ut&&g(v.transmissionMap.channel),thicknessMapUv:dt&&g(v.thicknessMap.channel),alphaMapUv:Pt&&g(v.alphaMap.channel),vertexTangents:Kt&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs2:q,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Mt||Pt),fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:Ln,useLegacyLights:o.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Cn,flipSided:v.side===Ce,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:R&&v.extensions.derivatives===!0,extensionFragDepth:R&&v.extensions.fragDepth===!0,extensionDrawBuffers:R&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:R&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)w.push(z),w.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(y(w,v),S(w,v),w.push(o.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUvs2&&a.enable(13),w.vertexTangents&&a.enable(14),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.decodeVideoTexture&&a.enable(17),w.opaque&&a.enable(18),w.pointsUvs&&a.enable(19),v.push(a.mask)}function x(v){const w=_[v.type];let z;if(w){const B=pn[w];z=gf.clone(B.uniforms)}else z=v.uniforms;return z}function M(v,w){let z;for(let B=0,D=c.length;B<D;B++){const O=c[B];if(O.cacheKey===w){z=O,++z.usedTimes;break}}return z===void 0&&(z=new wg(o,w,v,r),c.push(z)),z}function A(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function P(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:M,releaseProgram:A,releaseShaderCache:P,programs:c,dispose:C}}function Pg(){let o=new WeakMap;function t(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function e(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Lg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Xl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ql(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function s(h,f,p,_,g,m){let d=o[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},o[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=m),t++,d}function a(h,f,p,_,g,m){const d=s(h,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(h,f,p,_,g,m){const d=s(h,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Lg),n.length>1&&n.sort(f||Xl),i.length>1&&i.sort(f||Xl)}function u(){for(let h=t,f=o.length;h<f;h++){const p=o[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Rg(){let o=new WeakMap;function t(n,i){const r=o.get(n);let s;return r===void 0?(s=new ql,o.set(n,[s])):i>=r.length?(s=new ql,r.push(s)):s=r[i],s}function e(){o=new WeakMap}return{get:t,dispose:e}}function Dg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new zt};break;case"SpotLight":e={position:new I,direction:new I,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new I,halfWidth:new I,halfHeight:new I};break}return o[t.id]=e,e}}}function Ig(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Ug=0;function Og(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Ng(o,t){const e=new Dg,n=Ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,s=new ne,a=new ne;function l(u,h){let f=0,p=0,_=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,m=0,d=0,y=0,S=0,x=0,M=0,A=0,P=0,C=0;u.sort(Og);const v=h===!0?Math.PI:1;for(let z=0,B=u.length;z<B;z++){const D=u[z],O=D.color,F=D.intensity,$=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=O.r*F*v,p+=O.g*F*v,_+=O.b*F*v;else if(D.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],F);else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*v),D.castShadow){const et=D.shadow,J=n.get(D);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=D.shadow.matrix,x++}i.directional[g]=W,g++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(F*v),W.distance=$,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[d]=W;const et=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,et.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[d]=et.matrix,D.castShadow){const J=n.get(D);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,i.spotShadow[d]=J,i.spotShadowMap[d]=Z,A++}d++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(O).multiplyScalar(F),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=W,y++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*v),W.distance=D.distance,W.decay=D.decay,D.castShadow){const et=D.shadow,J=n.get(D);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,J.shadowCameraNear=et.camera.near,J.shadowCameraFar=et.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=D.shadow.matrix,M++}i.point[m]=W,m++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(F*v),W.groundColor.copy(D.groundColor).multiplyScalar(F*v),i.hemi[S]=W,S++}}y>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==g||w.pointLength!==m||w.spotLength!==d||w.rectAreaLength!==y||w.hemiLength!==S||w.numDirectionalShadows!==x||w.numPointShadows!==M||w.numSpotShadows!==A||w.numSpotMaps!==P)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=y,i.point.length=m,i.hemi.length=S,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,w.directionalLength=g,w.pointLength=m,w.spotLength=d,w.rectAreaLength=y,w.hemiLength=S,w.numDirectionalShadows=x,w.numPointShadows=M,w.numSpotShadows=A,w.numSpotMaps=P,i.version=Ug++)}function c(u,h){let f=0,p=0,_=0,g=0,m=0;const d=h.matrixWorldInverse;for(let y=0,S=u.length;y<S;y++){const x=u[y];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),f++}else if(x.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),_++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),a.identity(),s.copy(x.matrixWorld),s.premultiply(d),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function Yl(o,t){const e=new Ng(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function Fg(o,t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Yl(o,t),e.set(r,[l])):s>=a.length?(l=new Yl(o,t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class zg extends cr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bg extends cr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gg=`uniform sampler2D shadow_pass;
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
}`;function Vg(o,t,e){let n=new Ja;const i=new Tt,r=new Tt,s=new Xt,a=new zg({depthPacking:Xh}),l=new Bg,c={},u=e.maxTextureSize,h={[Wn]:Ce,[Ce]:Wn,[Cn]:Cn},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:kg,fragmentShader:Gg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new un;_.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Pn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc,this.render=function(x,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const P=o.getRenderTarget(),C=o.getActiveCubeFace(),v=o.getActiveMipmapLevel(),w=o.state;w.setBlending(Gn),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let z=0,B=x.length;z<B;z++){const D=x[z],O=D.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const F=O.getFrameExtents();if(i.multiply(F),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/F.x),i.x=r.x*F.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/F.y),i.y=r.y*F.y,O.mapSize.y=r.y)),O.map===null){const Z=this.type!==vr?{minFilter:we,magFilter:we}:{};O.map=new gi(i.x,i.y,Z),O.map.texture.name=D.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();const $=O.getViewportCount();for(let Z=0;Z<$;Z++){const W=O.getViewport(Z);s.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),w.viewport(s),O.updateMatrices(D,Z),n=O.getFrustum(),S(M,A,O.camera,D,this.type)}O.isPointLightShadow!==!0&&this.type===vr&&d(O,A),O.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(P,C,v)};function d(x,M){const A=t.update(g);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new gi(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,o.setRenderTarget(x.mapPass),o.clear(),o.renderBufferDirect(M,null,A,f,g,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,o.setRenderTarget(x.map),o.clear(),o.renderBufferDirect(M,null,A,p,g,null)}function y(x,M,A,P){let C=null;const v=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(v!==void 0)C=v;else if(C=A.isPointLight===!0?l:a,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const w=C.uuid,z=M.uuid;let B=c[w];B===void 0&&(B={},c[w]=B);let D=B[z];D===void 0&&(D=C.clone(),B[z]=D),C=D}if(C.visible=M.visible,C.wireframe=M.wireframe,P===vr?C.side=M.shadowSide!==null?M.shadowSide:M.side:C.side=M.shadowSide!==null?M.shadowSide:h[M.side],C.alphaMap=M.alphaMap,C.alphaTest=M.alphaTest,C.map=M.map,C.clipShadows=M.clipShadows,C.clippingPlanes=M.clippingPlanes,C.clipIntersection=M.clipIntersection,C.displacementMap=M.displacementMap,C.displacementScale=M.displacementScale,C.displacementBias=M.displacementBias,C.wireframeLinewidth=M.wireframeLinewidth,C.linewidth=M.linewidth,A.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const w=o.properties.get(C);w.light=A}return C}function S(x,M,A,P,C){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&C===vr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const z=t.update(x),B=x.material;if(Array.isArray(B)){const D=z.groups;for(let O=0,F=D.length;O<F;O++){const $=D[O],Z=B[$.materialIndex];if(Z&&Z.visible){const W=y(x,Z,P,C);o.renderBufferDirect(A,null,z,W,x,$)}}}else if(B.visible){const D=y(x,B,P,C);o.renderBufferDirect(A,null,z,D,x,null)}}const w=x.children;for(let z=0,B=w.length;z<B;z++)S(w[z],M,A,P,C)}}function Hg(o,t,e){const n=e.isWebGL2;function i(){let R=!1;const q=new Xt;let tt=null;const ht=new Xt(0,0,0,0);return{setMask:function(gt){tt!==gt&&!R&&(o.colorMask(gt,gt,gt,gt),tt=gt)},setLocked:function(gt){R=gt},setClear:function(gt,Ht,Yt,me,In){In===!0&&(gt*=me,Ht*=me,Yt*=me),q.set(gt,Ht,Yt,me),ht.equals(q)===!1&&(o.clearColor(gt,Ht,Yt,me),ht.copy(q))},reset:function(){R=!1,tt=null,ht.set(-1,0,0,0)}}}function r(){let R=!1,q=null,tt=null,ht=null;return{setTest:function(gt){gt?G(2929):yt(2929)},setMask:function(gt){q!==gt&&!R&&(o.depthMask(gt),q=gt)},setFunc:function(gt){if(tt!==gt){switch(gt){case ph:o.depthFunc(512);break;case mh:o.depthFunc(519);break;case gh:o.depthFunc(513);break;case Aa:o.depthFunc(515);break;case _h:o.depthFunc(514);break;case xh:o.depthFunc(518);break;case vh:o.depthFunc(516);break;case Mh:o.depthFunc(517);break;default:o.depthFunc(515)}tt=gt}},setLocked:function(gt){R=gt},setClear:function(gt){ht!==gt&&(o.clearDepth(gt),ht=gt)},reset:function(){R=!1,q=null,tt=null,ht=null}}}function s(){let R=!1,q=null,tt=null,ht=null,gt=null,Ht=null,Yt=null,me=null,In=null;return{setTest:function(te){R||(te?G(2960):yt(2960))},setMask:function(te){q!==te&&!R&&(o.stencilMask(te),q=te)},setFunc:function(te,Xe,hn){(tt!==te||ht!==Xe||gt!==hn)&&(o.stencilFunc(te,Xe,hn),tt=te,ht=Xe,gt=hn)},setOp:function(te,Xe,hn){(Ht!==te||Yt!==Xe||me!==hn)&&(o.stencilOp(te,Xe,hn),Ht=te,Yt=Xe,me=hn)},setLocked:function(te){R=te},setClear:function(te){In!==te&&(o.clearStencil(te),In=te)},reset:function(){R=!1,q=null,tt=null,ht=null,gt=null,Ht=null,Yt=null,me=null,In=null}}}const a=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let f={},p={},_=new WeakMap,g=[],m=null,d=!1,y=null,S=null,x=null,M=null,A=null,P=null,C=null,v=!1,w=null,z=null,B=null,D=null,O=null;const F=o.getParameter(35661);let $=!1,Z=0;const W=o.getParameter(7938);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=Z>=2);let et=null,J={};const _t=o.getParameter(3088),it=o.getParameter(2978),V=new Xt().fromArray(_t),j=new Xt().fromArray(it);function rt(R,q,tt){const ht=new Uint8Array(4),gt=o.createTexture();o.bindTexture(R,gt),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let Ht=0;Ht<tt;Ht++)o.texImage2D(q+Ht,0,6408,1,1,0,6408,5121,ht);return gt}const ct={};ct[3553]=rt(3553,3553,1),ct[34067]=rt(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),G(2929),l.setFunc(Aa),qt(!1),ie(Io),G(2884),Et(Gn);function G(R){f[R]!==!0&&(o.enable(R),f[R]=!0)}function yt(R){f[R]!==!1&&(o.disable(R),f[R]=!1)}function Mt(R,q){return p[R]!==q?(o.bindFramebuffer(R,q),p[R]=q,n&&(R===36009&&(p[36160]=q),R===36160&&(p[36009]=q)),!0):!1}function st(R,q){let tt=g,ht=!1;if(R)if(tt=_.get(q),tt===void 0&&(tt=[],_.set(q,tt)),R.isWebGLMultipleRenderTargets){const gt=R.texture;if(tt.length!==gt.length||tt[0]!==36064){for(let Ht=0,Yt=gt.length;Ht<Yt;Ht++)tt[Ht]=36064+Ht;tt.length=gt.length,ht=!0}}else tt[0]!==36064&&(tt[0]=36064,ht=!0);else tt[0]!==1029&&(tt[0]=1029,ht=!0);ht&&(e.isWebGL2?o.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function vt(R){return m!==R?(o.useProgram(R),m=R,!0):!1}const Ft={[Vi]:32774,[ih]:32778,[rh]:32779};if(n)Ft[Fo]=32775,Ft[zo]=32776;else{const R=t.get("EXT_blend_minmax");R!==null&&(Ft[Fo]=R.MIN_EXT,Ft[zo]=R.MAX_EXT)}const mt={[sh]:0,[ah]:1,[oh]:768,[Mc]:770,[dh]:776,[hh]:774,[ch]:772,[lh]:769,[Sc]:771,[fh]:775,[uh]:773};function Et(R,q,tt,ht,gt,Ht,Yt,me){if(R===Gn){d===!0&&(yt(3042),d=!1);return}if(d===!1&&(G(3042),d=!0),R!==nh){if(R!==y||me!==v){if((S!==Vi||A!==Vi)&&(o.blendEquation(32774),S=Vi,A=Vi),me)switch(R){case qi:o.blendFuncSeparate(1,771,1,771);break;case Uo:o.blendFunc(1,1);break;case Oo:o.blendFuncSeparate(0,769,0,1);break;case No:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case qi:o.blendFuncSeparate(770,771,1,771);break;case Uo:o.blendFunc(770,1);break;case Oo:o.blendFuncSeparate(0,769,0,1);break;case No:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}x=null,M=null,P=null,C=null,y=R,v=me}return}gt=gt||q,Ht=Ht||tt,Yt=Yt||ht,(q!==S||gt!==A)&&(o.blendEquationSeparate(Ft[q],Ft[gt]),S=q,A=gt),(tt!==x||ht!==M||Ht!==P||Yt!==C)&&(o.blendFuncSeparate(mt[tt],mt[ht],mt[Ht],mt[Yt]),x=tt,M=ht,P=Ht,C=Yt),y=R,v=!1}function Kt(R,q){R.side===Cn?yt(2884):G(2884);let tt=R.side===Ce;q&&(tt=!tt),qt(tt),R.blending===qi&&R.transparent===!1?Et(Gn):Et(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ht=R.stencilWrite;c.setTest(ht),ht&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Nt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?G(32926):yt(32926)}function qt(R){w!==R&&(R?o.frontFace(2304):o.frontFace(2305),w=R)}function ie(R){R!==Qu?(G(2884),R!==z&&(R===Io?o.cullFace(1029):R===th?o.cullFace(1028):o.cullFace(1032))):yt(2884),z=R}function Jt(R){R!==B&&($&&o.lineWidth(R),B=R)}function Nt(R,q,tt){R?(G(32823),(D!==q||O!==tt)&&(o.polygonOffset(q,tt),D=q,O=tt)):yt(32823)}function Vt(R){R?G(3089):yt(3089)}function pe(R){R===void 0&&(R=33984+F-1),et!==R&&(o.activeTexture(R),et=R)}function E(R,q,tt){tt===void 0&&(et===null?tt=33984+F-1:tt=et);let ht=J[tt];ht===void 0&&(ht={type:void 0,texture:void 0},J[tt]=ht),(ht.type!==R||ht.texture!==q)&&(et!==tt&&(o.activeTexture(tt),et=tt),o.bindTexture(R,q||ct[R]),ht.type=R,ht.texture=q)}function b(){const R=J[et];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{o.compressedTexImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function nt(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function L(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function lt(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pt(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(R){V.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),V.copy(R))}function dt(R){j.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),j.copy(R))}function bt(R,q){let tt=h.get(q);tt===void 0&&(tt=new WeakMap,h.set(q,tt));let ht=tt.get(R);ht===void 0&&(ht=o.getUniformBlockIndex(q,R.name),tt.set(R,ht))}function Pt(R,q){const ht=h.get(q).get(R);u.get(q)!==ht&&(o.uniformBlockBinding(q,ht,R.__bindingPointIndex),u.set(q,ht))}function Qt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},et=null,J={},p={},_=new WeakMap,g=[],m=null,d=!1,y=null,S=null,x=null,M=null,A=null,P=null,C=null,v=!1,w=null,z=null,B=null,D=null,O=null,V.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:G,disable:yt,bindFramebuffer:Mt,drawBuffers:st,useProgram:vt,setBlending:Et,setMaterial:Kt,setFlipSided:qt,setCullFace:ie,setLineWidth:Jt,setPolygonOffset:Nt,setScissorTest:Vt,activeTexture:pe,bindTexture:E,unbindTexture:b,compressedTexImage2D:H,compressedTexImage3D:Q,texImage2D:ft,texImage3D:pt,updateUBOMapping:bt,uniformBlockBinding:Pt,texStorage2D:k,texStorage3D:lt,texSubImage2D:nt,texSubImage3D:ot,compressedTexSubImage2D:L,compressedTexSubImage3D:K,scissor:ut,viewport:dt,reset:Qt}}function Wg(o,t,e,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,b){return d?new OffscreenCanvas(E,b):gs("canvas")}function S(E,b,H,Q){let nt=1;if((E.width>Q||E.height>Q)&&(nt=Q/Math.max(E.width,E.height)),nt<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ot=b?Zh:Math.floor,L=ot(nt*E.width),K=ot(nt*E.height);g===void 0&&(g=y(L,K));const k=H?y(L,K):g;return k.width=L,k.height=K,k.getContext("2d").drawImage(E,0,0,L,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+L+"x"+K+")."),k}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function x(E){return hl(E.width)&&hl(E.height)}function M(E){return a?!1:E.wrapS!==on||E.wrapT!==on||E.minFilter!==we&&E.minFilter!==Ze}function A(E,b){return E.generateMipmaps&&b&&E.minFilter!==we&&E.minFilter!==Ze}function P(E){o.generateMipmap(E)}function C(E,b,H,Q,nt=!1){if(a===!1)return b;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ot=b;return b===6403&&(H===5126&&(ot=33326),H===5131&&(ot=33325),H===5121&&(ot=33321)),b===33319&&(H===5126&&(ot=33328),H===5131&&(ot=33327),H===5121&&(ot=33323)),b===6408&&(H===5126&&(ot=34836),H===5131&&(ot=34842),H===5121&&(ot=Q===Wt&&nt===!1?35907:32856),H===32819&&(ot=32854),H===32820&&(ot=32855)),(ot===33325||ot===33326||ot===33327||ot===33328||ot===34842||ot===34836)&&t.get("EXT_color_buffer_float"),ot}function v(E,b,H){return A(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==we&&E.minFilter!==Ze?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function w(E){return E===we||E===Bo||E===Bs?9728:9729}function z(E){const b=E.target;b.removeEventListener("dispose",z),D(b),b.isVideoTexture&&_.delete(b)}function B(E){const b=E.target;b.removeEventListener("dispose",B),F(b)}function D(E){const b=n.get(E);if(b.__webglInit===void 0)return;const H=E.source,Q=m.get(H);if(Q){const nt=Q[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&O(E),Object.keys(Q).length===0&&m.delete(H)}n.remove(E)}function O(E){const b=n.get(E);o.deleteTexture(b.__webglTexture);const H=E.source,Q=m.get(H);delete Q[b.__cacheKey],s.memory.textures--}function F(E){const b=E.texture,H=n.get(E),Q=n.get(b);if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)o.deleteFramebuffer(H.__webglFramebuffer[nt]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[nt]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let nt=0;nt<H.__webglColorRenderbuffer.length;nt++)H.__webglColorRenderbuffer[nt]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[nt]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let nt=0,ot=b.length;nt<ot;nt++){const L=n.get(b[nt]);L.__webglTexture&&(o.deleteTexture(L.__webglTexture),s.memory.textures--),n.remove(b[nt])}n.remove(b),n.remove(E)}let $=0;function Z(){$=0}function W(){const E=$;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),$+=1,E}function et(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.encoding),b.join()}function J(E,b){const H=n.get(E);if(E.isVideoTexture&&Vt(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(H,E,b);return}}e.bindTexture(3553,H.__webglTexture,33984+b)}function _t(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){yt(H,E,b);return}e.bindTexture(35866,H.__webglTexture,33984+b)}function it(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){yt(H,E,b);return}e.bindTexture(32879,H.__webglTexture,33984+b)}function V(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){Mt(H,E,b);return}e.bindTexture(34067,H.__webglTexture,33984+b)}const j={[La]:10497,[on]:33071,[Ra]:33648},rt={[we]:9728,[Bo]:9984,[Bs]:9986,[Ze]:9729,[Ch]:9985,[Er]:9987};function ct(E,b,H){if(H?(o.texParameteri(E,10242,j[b.wrapS]),o.texParameteri(E,10243,j[b.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,j[b.wrapR]),o.texParameteri(E,10240,rt[b.magFilter]),o.texParameteri(E,10241,rt[b.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(b.wrapS!==on||b.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,w(b.magFilter)),o.texParameteri(E,10241,w(b.minFilter)),b.minFilter!==we&&b.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===we||b.minFilter!==Bs&&b.minFilter!==Er||b.type===li&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ar&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function G(E,b){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",z));const Q=b.source;let nt=m.get(Q);nt===void 0&&(nt={},m.set(Q,nt));const ot=et(b);if(ot!==E.__cacheKey){nt[ot]===void 0&&(nt[ot]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,H=!0),nt[ot].usedTimes++;const L=nt[E.__cacheKey];L!==void 0&&(nt[E.__cacheKey].usedTimes--,L.usedTimes===0&&O(b)),E.__cacheKey=ot,E.__webglTexture=nt[ot].texture}return H}function yt(E,b,H){let Q=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=35866),b.isData3DTexture&&(Q=32879);const nt=G(E,b),ot=b.source;e.bindTexture(Q,E.__webglTexture,33984+H);const L=n.get(ot);if(ot.version!==L.__version||nt===!0){e.activeTexture(33984+H),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const K=M(b)&&x(b.image)===!1;let k=S(b.image,K,!1,u);k=pe(b,k);const lt=x(k)||a,ft=r.convert(b.format,b.encoding);let pt=r.convert(b.type),ut=C(b.internalFormat,ft,pt,b.encoding,b.isVideoTexture);ct(Q,b,lt);let dt;const bt=b.mipmaps,Pt=a&&b.isVideoTexture!==!0,Qt=L.__version===void 0||nt===!0,R=v(b,k,lt);if(b.isDepthTexture)ut=6402,a?b.type===li?ut=36012:b.type===oi?ut=33190:b.type===Yi?ut=35056:ut=33189:b.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ui&&ut===6402&&b.type!==wc&&b.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=oi,pt=r.convert(b.type)),b.format===tr&&ut===6402&&(ut=34041,b.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Yi,pt=r.convert(b.type))),Qt&&(Pt?e.texStorage2D(3553,1,ut,k.width,k.height):e.texImage2D(3553,0,ut,k.width,k.height,0,ft,pt,null));else if(b.isDataTexture)if(bt.length>0&&lt){Pt&&Qt&&e.texStorage2D(3553,R,ut,bt[0].width,bt[0].height);for(let q=0,tt=bt.length;q<tt;q++)dt=bt[q],Pt?e.texSubImage2D(3553,q,0,0,dt.width,dt.height,ft,pt,dt.data):e.texImage2D(3553,q,ut,dt.width,dt.height,0,ft,pt,dt.data);b.generateMipmaps=!1}else Pt?(Qt&&e.texStorage2D(3553,R,ut,k.width,k.height),e.texSubImage2D(3553,0,0,0,k.width,k.height,ft,pt,k.data)):e.texImage2D(3553,0,ut,k.width,k.height,0,ft,pt,k.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pt&&Qt&&e.texStorage3D(35866,R,ut,bt[0].width,bt[0].height,k.depth);for(let q=0,tt=bt.length;q<tt;q++)dt=bt[q],b.format!==ln?ft!==null?Pt?e.compressedTexSubImage3D(35866,q,0,0,0,dt.width,dt.height,k.depth,ft,dt.data,0,0):e.compressedTexImage3D(35866,q,ut,dt.width,dt.height,k.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?e.texSubImage3D(35866,q,0,0,0,dt.width,dt.height,k.depth,ft,pt,dt.data):e.texImage3D(35866,q,ut,dt.width,dt.height,k.depth,0,ft,pt,dt.data)}else{Pt&&Qt&&e.texStorage2D(3553,R,ut,bt[0].width,bt[0].height);for(let q=0,tt=bt.length;q<tt;q++)dt=bt[q],b.format!==ln?ft!==null?Pt?e.compressedTexSubImage2D(3553,q,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(3553,q,ut,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?e.texSubImage2D(3553,q,0,0,dt.width,dt.height,ft,pt,dt.data):e.texImage2D(3553,q,ut,dt.width,dt.height,0,ft,pt,dt.data)}else if(b.isDataArrayTexture)Pt?(Qt&&e.texStorage3D(35866,R,ut,k.width,k.height,k.depth),e.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,ft,pt,k.data)):e.texImage3D(35866,0,ut,k.width,k.height,k.depth,0,ft,pt,k.data);else if(b.isData3DTexture)Pt?(Qt&&e.texStorage3D(32879,R,ut,k.width,k.height,k.depth),e.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,ft,pt,k.data)):e.texImage3D(32879,0,ut,k.width,k.height,k.depth,0,ft,pt,k.data);else if(b.isFramebufferTexture){if(Qt)if(Pt)e.texStorage2D(3553,R,ut,k.width,k.height);else{let q=k.width,tt=k.height;for(let ht=0;ht<R;ht++)e.texImage2D(3553,ht,ut,q,tt,0,ft,pt,null),q>>=1,tt>>=1}}else if(bt.length>0&&lt){Pt&&Qt&&e.texStorage2D(3553,R,ut,bt[0].width,bt[0].height);for(let q=0,tt=bt.length;q<tt;q++)dt=bt[q],Pt?e.texSubImage2D(3553,q,0,0,ft,pt,dt):e.texImage2D(3553,q,ut,ft,pt,dt);b.generateMipmaps=!1}else Pt?(Qt&&e.texStorage2D(3553,R,ut,k.width,k.height),e.texSubImage2D(3553,0,0,0,ft,pt,k)):e.texImage2D(3553,0,ut,ft,pt,k);A(b,lt)&&P(Q),L.__version=ot.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Mt(E,b,H){if(b.image.length!==6)return;const Q=G(E,b),nt=b.source;e.bindTexture(34067,E.__webglTexture,33984+H);const ot=n.get(nt);if(nt.version!==ot.__version||Q===!0){e.activeTexture(33984+H),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const L=b.isCompressedTexture||b.image[0].isCompressedTexture,K=b.image[0]&&b.image[0].isDataTexture,k=[];for(let q=0;q<6;q++)!L&&!K?k[q]=S(b.image[q],!1,!0,c):k[q]=K?b.image[q].image:b.image[q],k[q]=pe(b,k[q]);const lt=k[0],ft=x(lt)||a,pt=r.convert(b.format,b.encoding),ut=r.convert(b.type),dt=C(b.internalFormat,pt,ut,b.encoding),bt=a&&b.isVideoTexture!==!0,Pt=ot.__version===void 0||Q===!0;let Qt=v(b,lt,ft);ct(34067,b,ft);let R;if(L){bt&&Pt&&e.texStorage2D(34067,Qt,dt,lt.width,lt.height);for(let q=0;q<6;q++){R=k[q].mipmaps;for(let tt=0;tt<R.length;tt++){const ht=R[tt];b.format!==ln?pt!==null?bt?e.compressedTexSubImage2D(34069+q,tt,0,0,ht.width,ht.height,pt,ht.data):e.compressedTexImage2D(34069+q,tt,dt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bt?e.texSubImage2D(34069+q,tt,0,0,ht.width,ht.height,pt,ut,ht.data):e.texImage2D(34069+q,tt,dt,ht.width,ht.height,0,pt,ut,ht.data)}}}else{R=b.mipmaps,bt&&Pt&&(R.length>0&&Qt++,e.texStorage2D(34067,Qt,dt,k[0].width,k[0].height));for(let q=0;q<6;q++)if(K){bt?e.texSubImage2D(34069+q,0,0,0,k[q].width,k[q].height,pt,ut,k[q].data):e.texImage2D(34069+q,0,dt,k[q].width,k[q].height,0,pt,ut,k[q].data);for(let tt=0;tt<R.length;tt++){const gt=R[tt].image[q].image;bt?e.texSubImage2D(34069+q,tt+1,0,0,gt.width,gt.height,pt,ut,gt.data):e.texImage2D(34069+q,tt+1,dt,gt.width,gt.height,0,pt,ut,gt.data)}}else{bt?e.texSubImage2D(34069+q,0,0,0,pt,ut,k[q]):e.texImage2D(34069+q,0,dt,pt,ut,k[q]);for(let tt=0;tt<R.length;tt++){const ht=R[tt];bt?e.texSubImage2D(34069+q,tt+1,0,0,pt,ut,ht.image[q]):e.texImage2D(34069+q,tt+1,dt,pt,ut,ht.image[q])}}}A(b,ft)&&P(34067),ot.__version=nt.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function st(E,b,H,Q,nt){const ot=r.convert(H.format,H.encoding),L=r.convert(H.type),K=C(H.internalFormat,ot,L,H.encoding);n.get(b).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,K,b.width,b.height,b.depth,0,ot,L,null):e.texImage2D(nt,0,K,b.width,b.height,0,ot,L,null)),e.bindFramebuffer(36160,E),Nt(b)?f.framebufferTexture2DMultisampleEXT(36160,Q,nt,n.get(H).__webglTexture,0,Jt(b)):(nt===3553||nt>=34069&&nt<=34074)&&o.framebufferTexture2D(36160,Q,nt,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function vt(E,b,H){if(o.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let Q=33189;if(H||Nt(b)){const nt=b.depthTexture;nt&&nt.isDepthTexture&&(nt.type===li?Q=36012:nt.type===oi&&(Q=33190));const ot=Jt(b);Nt(b)?f.renderbufferStorageMultisampleEXT(36161,ot,Q,b.width,b.height):o.renderbufferStorageMultisample(36161,ot,Q,b.width,b.height)}else o.renderbufferStorage(36161,Q,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){const Q=Jt(b);H&&Nt(b)===!1?o.renderbufferStorageMultisample(36161,Q,35056,b.width,b.height):Nt(b)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let nt=0;nt<Q.length;nt++){const ot=Q[nt],L=r.convert(ot.format,ot.encoding),K=r.convert(ot.type),k=C(ot.internalFormat,L,K,ot.encoding),lt=Jt(b);H&&Nt(b)===!1?o.renderbufferStorageMultisample(36161,lt,k,b.width,b.height):Nt(b)?f.renderbufferStorageMultisampleEXT(36161,lt,k,b.width,b.height):o.renderbufferStorage(36161,k,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function Ft(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const Q=n.get(b.depthTexture).__webglTexture,nt=Jt(b);if(b.depthTexture.format===ui)Nt(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,nt):o.framebufferTexture2D(36160,36096,3553,Q,0);else if(b.depthTexture.format===tr)Nt(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,nt):o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function mt(E){const b=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,E)}else if(H){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(36160,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=o.createRenderbuffer(),vt(b.__webglDepthbuffer[Q],E,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),vt(b.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function Et(E,b,H){const Q=n.get(E);b!==void 0&&st(Q.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&mt(E)}function Kt(E){const b=E.texture,H=n.get(E),Q=n.get(b);E.addEventListener("dispose",B),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=b.version,s.memory.textures++);const nt=E.isWebGLCubeRenderTarget===!0,ot=E.isWebGLMultipleRenderTargets===!0,L=x(E)||a;if(nt){H.__webglFramebuffer=[];for(let K=0;K<6;K++)H.__webglFramebuffer[K]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),ot)if(i.drawBuffers){const K=E.texture;for(let k=0,lt=K.length;k<lt;k++){const ft=n.get(K[k]);ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Nt(E)===!1){const K=ot?b:[b];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let k=0;k<K.length;k++){const lt=K[k];H.__webglColorRenderbuffer[k]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[k]);const ft=r.convert(lt.format,lt.encoding),pt=r.convert(lt.type),ut=C(lt.internalFormat,ft,pt,lt.encoding,E.isXRRenderTarget===!0),dt=Jt(E);o.renderbufferStorageMultisample(36161,dt,ut,E.width,E.height),o.framebufferRenderbuffer(36160,36064+k,36161,H.__webglColorRenderbuffer[k])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),vt(H.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,Q.__webglTexture),ct(34067,b,L);for(let K=0;K<6;K++)st(H.__webglFramebuffer[K],E,b,36064,34069+K);A(b,L)&&P(34067),e.unbindTexture()}else if(ot){const K=E.texture;for(let k=0,lt=K.length;k<lt;k++){const ft=K[k],pt=n.get(ft);e.bindTexture(3553,pt.__webglTexture),ct(3553,ft,L),st(H.__webglFramebuffer,E,ft,36064+k,3553),A(ft,L)&&P(3553)}e.unbindTexture()}else{let K=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?K=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(K,Q.__webglTexture),ct(K,b,L),st(H.__webglFramebuffer,E,b,36064,K),A(b,L)&&P(K),e.unbindTexture()}E.depthBuffer&&mt(E)}function qt(E){const b=x(E)||a,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,nt=H.length;Q<nt;Q++){const ot=H[Q];if(A(ot,b)){const L=E.isWebGLCubeRenderTarget?34067:3553,K=n.get(ot).__webglTexture;e.bindTexture(L,K),P(L),e.unbindTexture()}}}function ie(E){if(a&&E.samples>0&&Nt(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,Q=E.height;let nt=16384;const ot=[],L=E.stencilBuffer?33306:36096,K=n.get(E),k=E.isWebGLMultipleRenderTargets===!0;if(k)for(let lt=0;lt<b.length;lt++)e.bindFramebuffer(36160,K.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+lt,36161,null),e.bindFramebuffer(36160,K.__webglFramebuffer),o.framebufferTexture2D(36009,36064+lt,3553,null,0);e.bindFramebuffer(36008,K.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,K.__webglFramebuffer);for(let lt=0;lt<b.length;lt++){ot.push(36064+lt),E.depthBuffer&&ot.push(L);const ft=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(ft===!1&&(E.depthBuffer&&(nt|=256),E.stencilBuffer&&(nt|=1024)),k&&o.framebufferRenderbuffer(36008,36064,36161,K.__webglColorRenderbuffer[lt]),ft===!0&&(o.invalidateFramebuffer(36008,[L]),o.invalidateFramebuffer(36009,[L])),k){const pt=n.get(b[lt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,pt,0)}o.blitFramebuffer(0,0,H,Q,0,0,H,Q,nt,9728),p&&o.invalidateFramebuffer(36008,ot)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),k)for(let lt=0;lt<b.length;lt++){e.bindFramebuffer(36160,K.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+lt,36161,K.__webglColorRenderbuffer[lt]);const ft=n.get(b[lt]).__webglTexture;e.bindFramebuffer(36160,K.__webglFramebuffer),o.framebufferTexture2D(36009,36064+lt,3553,ft,0)}e.bindFramebuffer(36009,K.__webglMultisampledFramebuffer)}}function Jt(E){return Math.min(h,E.samples)}function Nt(E){const b=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Vt(E){const b=s.render.frame;_.get(E)!==b&&(_.set(E,b),E.update())}function pe(E,b){const H=E.encoding,Q=E.format,nt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Da||H!==mi&&(H===Wt?a===!1?t.has("EXT_sRGB")===!0&&Q===ln?(E.format=Da,E.minFilter=Ze,E.generateMipmaps=!1):b=Cc.sRGBToLinear(b):(Q!==ln||nt!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),b}this.allocateTextureUnit=W,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=_t,this.setTexture3D=it,this.setTextureCube=V,this.rebindTextures=Et,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Nt}function Xg(o,t,e){const n=e.isWebGL2;function i(r,s=null){let a;if(r===pi)return 5121;if(r===Dh)return 32819;if(r===Ih)return 32820;if(r===Ph)return 5120;if(r===Lh)return 5122;if(r===wc)return 5123;if(r===Rh)return 5124;if(r===oi)return 5125;if(r===li)return 5126;if(r===Ar)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Uh)return 6406;if(r===ln)return 6408;if(r===Oh)return 6409;if(r===Nh)return 6410;if(r===ui)return 6402;if(r===tr)return 34041;if(r===Da)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Fh)return 6403;if(r===zh)return 36244;if(r===Bh)return 33319;if(r===kh)return 33320;if(r===Gh)return 36249;if(r===ks||r===Gs||r===Vs||r===Hs)if(s===Wt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ko||r===Go||r===Vo||r===Ho)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ko)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Go)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ho)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wo||r===Xo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wo)return s===Wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xo)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qo||r===Yo||r===jo||r===Zo||r===Ko||r===$o||r===Jo||r===Qo||r===tl||r===el||r===nl||r===il||r===rl||r===sl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===qo)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yo)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jo)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zo)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ko)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$o)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jo)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qo)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tl)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===el)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nl)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===il)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rl)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sl)return s===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ws)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ws)return s===Wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Hh||r===al||r===ol||r===ll)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ws)return a.COMPRESSED_RED_RGTC1_EXT;if(r===al)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ol)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ll)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yi?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class qg extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ls extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yg={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class jg extends Ve{constructor(t,e,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:ui,u!==ui&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ui&&(n=oi),n===void 0&&u===tr&&(n=Yi),super(null,i,r,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:we,this.minFilter=l!==void 0?l:we,this.flipY=!1,this.generateMipmaps=!1}}class Zg extends Si{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const g=e.getContextAttributes();let m=null,d=null;const y=[],S=[],x=new Set,M=new Map,A=new ke;A.layers.enable(1),A.viewport=new Xt;const P=new ke;P.layers.enable(2),P.viewport=new Xt;const C=[A,P],v=new qg;v.layers.enable(1),v.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=y[V];return j===void 0&&(j=new pa,y[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=y[V];return j===void 0&&(j=new pa,y[V]=j),j.getGripSpace()},this.getHand=function(V){let j=y[V];return j===void 0&&(j=new pa,y[V]=j),j.getHandSpace()};function B(V){const j=S.indexOf(V.inputSource);if(j===-1)return;const rt=y[j];rt!==void 0&&rt.dispatchEvent({type:V.type,data:V.inputSource})}function D(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",O);for(let V=0;V<y.length;V++){const j=S[V];j!==null&&(S[V]=null,y[V].disconnect(j))}w=null,z=null,t.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,it.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",D),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:p}),d=new gi(p.framebufferWidth,p.framebufferHeight,{format:ln,type:pi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let j=null,rt=null,ct=null;g.depth&&(ct=g.stencil?35056:33190,j=g.stencil?tr:ui,rt=g.stencil?Yi:oi);const G={colorFormat:32856,depthFormat:ct,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(G),i.updateRenderState({layers:[f]}),d=new gi(f.textureWidth,f.textureHeight,{format:ln,type:pi,depthTexture:new jg(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const yt=t.properties.get(d);yt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(V){for(let j=0;j<V.removed.length;j++){const rt=V.removed[j],ct=S.indexOf(rt);ct>=0&&(S[ct]=null,y[ct].disconnect(rt))}for(let j=0;j<V.added.length;j++){const rt=V.added[j];let ct=S.indexOf(rt);if(ct===-1){for(let yt=0;yt<y.length;yt++)if(yt>=S.length){S.push(rt),ct=yt;break}else if(S[yt]===null){S[yt]=rt,ct=yt;break}if(ct===-1)break}const G=y[ct];G&&G.connect(rt)}}const F=new I,$=new I;function Z(V,j,rt){F.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(rt.matrixWorld);const ct=F.distanceTo($),G=j.projectionMatrix.elements,yt=rt.projectionMatrix.elements,Mt=G[14]/(G[10]-1),st=G[14]/(G[10]+1),vt=(G[9]+1)/G[5],Ft=(G[9]-1)/G[5],mt=(G[8]-1)/G[0],Et=(yt[8]+1)/yt[0],Kt=Mt*mt,qt=Mt*Et,ie=ct/(-mt+Et),Jt=ie*-mt;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Jt),V.translateZ(ie),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Nt=Mt+ie,Vt=st+ie,pe=Kt-Jt,E=qt+(ct-Jt),b=vt*st/Vt*Nt,H=Ft*st/Vt*Nt;V.projectionMatrix.makePerspective(pe,E,b,H,Nt,Vt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;v.near=P.near=A.near=V.near,v.far=P.far=A.far=V.far,(w!==v.near||z!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,z=v.far);const j=V.parent,rt=v.cameras;W(v,j);for(let ct=0;ct<rt.length;ct++)W(rt[ct],j);rt.length===2?Z(v,A,P):v.projectionMatrix.copy(A.projectionMatrix),et(V,v,j)};function et(V,j,rt){rt===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(rt.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const ct=V.children;for(let G=0,yt=ct.length;G<yt;G++)ct[G].updateMatrixWorld(!0);V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ia*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.getPlanes=function(){return x};let J=null;function _t(V,j){if(u=j.getViewerPose(c||s),_=j,u!==null){const rt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let ct=!1;rt.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let G=0;G<rt.length;G++){const yt=rt[G];let Mt=null;if(p!==null)Mt=p.getViewport(yt);else{const vt=h.getViewSubImage(f,yt);Mt=vt.viewport,G===0&&(t.setRenderTargetTextures(d,vt.colorTexture,f.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(d))}let st=C[G];st===void 0&&(st=new ke,st.layers.enable(G),st.viewport=new Xt,C[G]=st),st.matrix.fromArray(yt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(yt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),G===0&&(v.matrix.copy(st.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(st)}}for(let rt=0;rt<y.length;rt++){const ct=S[rt],G=y[rt];ct!==null&&G!==void 0&&G.update(ct,j,c||s)}if(J&&J(V,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let rt=null;for(const ct of x)j.detectedPlanes.has(ct)||(rt===null&&(rt=[]),rt.push(ct));if(rt!==null)for(const ct of rt)x.delete(ct),M.delete(ct),n.dispatchEvent({type:"planeremoved",data:ct});for(const ct of j.detectedPlanes)if(!x.has(ct))x.add(ct),M.set(ct,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ct});else{const G=M.get(ct);ct.lastChangedTime>G&&(M.set(ct,ct.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ct}))}}_=null}const it=new kc;it.setAnimationLoop(_t),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}}function Kg(o,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Fc(o)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,S,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ce&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ce&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const S=o.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*S,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ce&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $g(o,t,e,n){let i={},r={},s=[];const a=e.isWebGL2?o.getParameter(35375):0;function l(y,S){const x=S.program;n.uniformBlockBinding(y,x)}function c(y,S){let x=i[y.id];x===void 0&&(_(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",m));const M=S.program;n.updateUBOMapping(y,M);const A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function u(y){const S=h();y.__bindingPointIndex=S;const x=o.createBuffer(),M=y.__size,A=y.usage;return o.bindBuffer(35345,x),o.bufferData(35345,M,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,S,x),x}function h(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=i[y.id],x=y.uniforms,M=y.__cache;o.bindBuffer(35345,S);for(let A=0,P=x.length;A<P;A++){const C=x[A];if(p(C,A,M)===!0){const v=C.__offset,w=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let B=0;B<w.length;B++){const D=w[B],O=g(D);typeof D=="number"?(C.__data[0]=D,o.bufferSubData(35345,v+z,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=D.elements[0],C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=D.elements[0],C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=D.elements[0]):(D.toArray(C.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,v,C.__data)}}o.bindBuffer(35345,null)}function p(y,S,x){const M=y.value;if(x[S]===void 0){if(typeof M=="number")x[S]=M;else{const A=Array.isArray(M)?M:[M],P=[];for(let C=0;C<A.length;C++)P.push(A[C].clone());x[S]=P}return!0}else if(typeof M=="number"){if(x[S]!==M)return x[S]=M,!0}else{const A=Array.isArray(x[S])?x[S]:[x[S]],P=Array.isArray(M)?M:[M];for(let C=0;C<A.length;C++){const v=A[C];if(v.equals(P[C])===!1)return v.copy(P[C]),!0}}return!1}function _(y){const S=y.uniforms;let x=0;const M=16;let A=0;for(let P=0,C=S.length;P<C;P++){const v=S[P],w={boundary:0,storage:0},z=Array.isArray(v.value)?v.value:[v.value];for(let B=0,D=z.length;B<D;B++){const O=z[B],F=g(O);w.boundary+=F.boundary,w.storage+=F.storage}if(v.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=x,P>0){A=x%M;const B=M-A;A!==0&&B-w.boundary<0&&(x+=M-A,v.__offset=x)}x+=w.storage}return A=x%M,A>0&&(x+=M-A),y.__size=x,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const x=s.indexOf(S.__bindingPointIndex);s.splice(x,1),o.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function d(){for(const y in i)o.deleteBuffer(i[y]);s=[],i={},r={}}return{bind:l,update:c,dispose:d}}function Jg(){const o=gs("canvas");return o.style.display="block",o}class Xc{constructor(t={}){const{canvas:e=Jg(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=s;let p=null,_=null;const g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mi,this.useLegacyLights=!0,this.toneMapping=Ln,this.toneMappingExposure=1;const d=this;let y=!1,S=0,x=0,M=null,A=-1,P=null;const C=new Xt,v=new Xt;let w=null,z=e.width,B=e.height,D=1,O=null,F=null;const $=new Xt(0,0,z,B),Z=new Xt(0,0,z,B);let W=!1;const et=new Ja;let J=!1,_t=!1,it=null;const V=new ne,j=new I,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return M===null?D:1}let G=n;function yt(T,N){for(let X=0;X<T.length;X++){const U=T[X],Y=e.getContext(U,N);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&N.shift(),G=yt(N,T),G===null)throw yt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Mt,st,vt,Ft,mt,Et,Kt,qt,ie,Jt,Nt,Vt,pe,E,b,H,Q,nt,ot,L,K,k,lt,ft;function pt(){Mt=new cm(G),st=new nm(G,Mt,t),Mt.init(st),k=new Xg(G,Mt,st),vt=new Hg(G,Mt,st),Ft=new fm,mt=new Pg,Et=new Wg(G,Mt,vt,mt,st,k,Ft),Kt=new rm(d),qt=new lm(d),ie=new bf(G,st),lt=new tm(G,Mt,ie,st),Jt=new um(G,ie,Ft,lt),Nt=new gm(G,Jt,ie,Ft),ot=new mm(G,st,Et),H=new im(mt),Vt=new Cg(d,Kt,qt,Mt,st,lt,H),pe=new Kg(d,mt),E=new Rg,b=new Fg(Mt,st),nt=new Qp(d,Kt,qt,vt,Nt,f,l),Q=new Vg(d,Nt,st),ft=new $g(G,Ft,st,vt),L=new em(G,Mt,Ft,st),K=new hm(G,Mt,Ft,st),Ft.programs=Vt.programs,d.capabilities=st,d.extensions=Mt,d.properties=mt,d.renderLists=E,d.shadowMap=Q,d.state=vt,d.info=Ft}pt();const ut=new Zg(d,G);this.xr=ut,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(z,B,!1))},this.getSize=function(T){return T.set(z,B)},this.setSize=function(T,N,X=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,B=N,e.width=Math.floor(T*D),e.height=Math.floor(N*D),X===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(z*D,B*D).floor()},this.setDrawingBufferSize=function(T,N,X){z=T,B=N,D=X,e.width=Math.floor(T*X),e.height=Math.floor(N*X),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,N,X,U){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,N,X,U),vt.viewport(C.copy($).multiplyScalar(D).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,N,X,U){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,N,X,U),vt.scissor(v.copy(Z).multiplyScalar(D).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(T){vt.setScissorTest(W=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(T=!0,N=!0,X=!0){let U=0;T&&(U|=16384),N&&(U|=256),X&&(U|=1024),G.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),E.dispose(),b.dispose(),mt.dispose(),Kt.dispose(),qt.dispose(),Nt.dispose(),lt.dispose(),ft.dispose(),Vt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",gt),ut.removeEventListener("sessionend",Ht),it&&(it.dispose(),it=null),Yt.stop()};function dt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Ft.autoReset,N=Q.enabled,X=Q.autoUpdate,U=Q.needsUpdate,Y=Q.type;pt(),Ft.autoReset=T,Q.enabled=N,Q.autoUpdate=X,Q.needsUpdate=U,Q.type=Y}function Pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Qt(T){const N=T.target;N.removeEventListener("dispose",Qt),R(N)}function R(T){q(T),mt.remove(T)}function q(T){const N=mt.get(T).programs;N!==void 0&&(N.forEach(function(X){Vt.releaseProgram(X)}),T.isShaderMaterial&&Vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,X,U,Y,xt){N===null&&(N=rt);const St=Y.isMesh&&Y.matrixWorld.determinant()<0,wt=Zu(T,N,X,U,Y);vt.setMaterial(U,St);let At=X.index,Lt=1;U.wireframe===!0&&(At=Jt.getWireframeAttribute(X),Lt=2);const Rt=X.drawRange,Dt=X.attributes.position;let Bt=Rt.start*Lt,Se=(Rt.start+Rt.count)*Lt;xt!==null&&(Bt=Math.max(Bt,xt.start*Lt),Se=Math.min(Se,(xt.start+xt.count)*Lt)),At!==null?(Bt=Math.max(Bt,0),Se=Math.min(Se,At.count)):Dt!=null&&(Bt=Math.max(Bt,0),Se=Math.min(Se,Dt.count));const en=Se-Bt;if(en<0||en===1/0)return;lt.setup(Y,U,wt,X,At);let Zn,re=L;if(At!==null&&(Zn=ie.get(At),re=K,re.setIndex(Zn)),Y.isMesh)U.wireframe===!0?(vt.setLineWidth(U.wireframeLinewidth*ct()),re.setMode(1)):re.setMode(4);else if(Y.isLine){let Ot=U.linewidth;Ot===void 0&&(Ot=1),vt.setLineWidth(Ot*ct()),Y.isLineSegments?re.setMode(1):Y.isLineLoop?re.setMode(2):re.setMode(3)}else Y.isPoints?re.setMode(0):Y.isSprite&&re.setMode(4);if(Y.isInstancedMesh)re.renderInstances(Bt,en,Y.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Os=Math.min(X.instanceCount,Ot);re.renderInstances(Bt,en,Os)}else re.render(Bt,en)},this.compile=function(T,N){function X(U,Y,xt){U.transparent===!0&&U.side===Cn&&U.forceSinglePass===!1?(U.side=Ce,U.needsUpdate=!0,kr(U,Y,xt),U.side=Wn,U.needsUpdate=!0,kr(U,Y,xt),U.side=Cn):kr(U,Y,xt)}_=b.get(T),_.init(),m.push(_),T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),_.setupLights(d.useLegacyLights),T.traverse(function(U){const Y=U.material;if(Y)if(Array.isArray(Y))for(let xt=0;xt<Y.length;xt++){const St=Y[xt];X(St,T,U)}else X(Y,T,U)}),m.pop(),_=null};let tt=null;function ht(T){tt&&tt(T)}function gt(){Yt.stop()}function Ht(){Yt.start()}const Yt=new kc;Yt.setAnimationLoop(ht),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(T){tt=T,ut.setAnimationLoop(T),T===null?Yt.stop():Yt.start()},ut.addEventListener("sessionstart",gt),ut.addEventListener("sessionend",Ht),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(N),N=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,N,M),_=b.get(T,m.length),_.init(),m.push(_),V.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(V),_t=this.localClippingEnabled,J=H.init(this.clippingPlanes,_t),p=E.get(T,g.length),p.init(),g.push(p),me(T,N,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(O,F),J===!0&&H.beginShadows();const X=_.state.shadowsArray;if(Q.render(X,T,N),J===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(p,T),_.setupLights(d.useLegacyLights),N.isArrayCamera){const U=N.cameras;for(let Y=0,xt=U.length;Y<xt;Y++){const St=U[Y];In(p,T,St,St.viewport)}}else In(p,T,N);M!==null&&(Et.updateMultisampleRenderTarget(M),Et.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(d,T,N),lt.resetDefaultState(),A=-1,P=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function me(T,N,X,U){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||et.intersectsSprite(T)){U&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const St=Nt.update(T),wt=T.material;wt.visible&&p.push(T,St,wt,X,j.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ft.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ft.render.frame),!T.frustumCulled||et.intersectsObject(T))){U&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const St=Nt.update(T),wt=T.material;if(Array.isArray(wt)){const At=St.groups;for(let Lt=0,Rt=At.length;Lt<Rt;Lt++){const Dt=At[Lt],Bt=wt[Dt.materialIndex];Bt&&Bt.visible&&p.push(T,St,Bt,X,j.z,Dt)}}else wt.visible&&p.push(T,St,wt,X,j.z,null)}}const xt=T.children;for(let St=0,wt=xt.length;St<wt;St++)me(xt[St],N,X,U)}function In(T,N,X,U){const Y=T.opaque,xt=T.transmissive,St=T.transparent;_.setupLightsView(X),J===!0&&H.setGlobalState(d.clippingPlanes,X),xt.length>0&&te(Y,xt,N,X),U&&vt.viewport(C.copy(U)),Y.length>0&&Xe(Y,N,X),xt.length>0&&Xe(xt,N,X),St.length>0&&Xe(St,N,X),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function te(T,N,X,U){if(it===null){const wt=st.isWebGL2;it=new gi(1024,1024,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Ar:pi,minFilter:Er,samples:wt&&a===!0?4:0})}const Y=d.getRenderTarget();d.setRenderTarget(it),d.clear();const xt=d.toneMapping;d.toneMapping=Ln,Xe(T,X,U),Et.updateMultisampleRenderTarget(it),Et.updateRenderTargetMipmap(it);let St=!1;for(let wt=0,At=N.length;wt<At;wt++){const Lt=N[wt],Rt=Lt.object,Dt=Lt.geometry,Bt=Lt.material,Se=Lt.group;if(Bt.side===Cn&&Rt.layers.test(U.layers)){const en=Bt.side;Bt.side=Ce,Bt.needsUpdate=!0,hn(Rt,X,U,Dt,Bt,Se),Bt.side=en,Bt.needsUpdate=!0,St=!0}}St===!0&&(Et.updateMultisampleRenderTarget(it),Et.updateRenderTargetMipmap(it)),d.setRenderTarget(Y),d.toneMapping=xt}function Xe(T,N,X){const U=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,xt=T.length;Y<xt;Y++){const St=T[Y],wt=St.object,At=St.geometry,Lt=U===null?St.material:U,Rt=St.group;wt.layers.test(X.layers)&&hn(wt,N,X,At,Lt,Rt)}}function hn(T,N,X,U,Y,xt){T.onBeforeRender(d,N,X,U,Y,xt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(d,N,X,U,T,xt),Y.transparent===!0&&Y.side===Cn&&Y.forceSinglePass===!1?(Y.side=Ce,Y.needsUpdate=!0,d.renderBufferDirect(X,N,U,Y,T,xt),Y.side=Wn,Y.needsUpdate=!0,d.renderBufferDirect(X,N,U,Y,T,xt),Y.side=Cn):d.renderBufferDirect(X,N,U,Y,T,xt),T.onAfterRender(d,N,X,U,Y,xt)}function kr(T,N,X){N.isScene!==!0&&(N=rt);const U=mt.get(T),Y=_.state.lights,xt=_.state.shadowsArray,St=Y.state.version,wt=Vt.getParameters(T,Y.state,xt,N,X),At=Vt.getProgramCacheKey(wt);let Lt=U.programs;U.environment=T.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=(T.isMeshStandardMaterial?qt:Kt).get(T.envMap||U.environment),Lt===void 0&&(T.addEventListener("dispose",Qt),Lt=new Map,U.programs=Lt);let Rt=Lt.get(At);if(Rt!==void 0){if(U.currentProgram===Rt&&U.lightsStateVersion===St)return Lo(T,wt),Rt}else wt.uniforms=Vt.getUniforms(T),T.onBuild(X,wt,d),T.onBeforeCompile(wt,d),Rt=Vt.acquireProgram(wt,At),Lt.set(At,Rt),U.uniforms=wt.uniforms;const Dt=U.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=H.uniform),Lo(T,wt),U.needsLights=$u(T),U.lightsStateVersion=St,U.needsLights&&(Dt.ambientLightColor.value=Y.state.ambient,Dt.lightProbe.value=Y.state.probe,Dt.directionalLights.value=Y.state.directional,Dt.directionalLightShadows.value=Y.state.directionalShadow,Dt.spotLights.value=Y.state.spot,Dt.spotLightShadows.value=Y.state.spotShadow,Dt.rectAreaLights.value=Y.state.rectArea,Dt.ltc_1.value=Y.state.rectAreaLTC1,Dt.ltc_2.value=Y.state.rectAreaLTC2,Dt.pointLights.value=Y.state.point,Dt.pointLightShadows.value=Y.state.pointShadow,Dt.hemisphereLights.value=Y.state.hemi,Dt.directionalShadowMap.value=Y.state.directionalShadowMap,Dt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Dt.spotShadowMap.value=Y.state.spotShadowMap,Dt.spotLightMatrix.value=Y.state.spotLightMatrix,Dt.spotLightMap.value=Y.state.spotLightMap,Dt.pointShadowMap.value=Y.state.pointShadowMap,Dt.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Bt=Rt.getUniforms(),Se=fs.seqWithValue(Bt.seq,Dt);return U.currentProgram=Rt,U.uniformsList=Se,Rt}function Lo(T,N){const X=mt.get(T);X.outputEncoding=N.outputEncoding,X.instancing=N.instancing,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Zu(T,N,X,U,Y){N.isScene!==!0&&(N=rt),Et.resetTextureUnits();const xt=N.fog,St=U.isMeshStandardMaterial?N.environment:null,wt=M===null?d.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:mi,At=(U.isMeshStandardMaterial?qt:Kt).get(U.envMap||St),Lt=U.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Rt=!!U.normalMap&&!!X.attributes.tangent,Dt=!!X.morphAttributes.position,Bt=!!X.morphAttributes.normal,Se=!!X.morphAttributes.color,en=U.toneMapped?d.toneMapping:Ln,Zn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=Zn!==void 0?Zn.length:0,Ot=mt.get(U),Os=_.state.lights;if(J===!0&&(_t===!0||T!==P)){const Ue=T===P&&U.id===A;H.setState(U,T,Ue)}let ue=!1;U.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Os.state.version||Ot.outputEncoding!==wt||Y.isInstancedMesh&&Ot.instancing===!1||!Y.isInstancedMesh&&Ot.instancing===!0||Y.isSkinnedMesh&&Ot.skinning===!1||!Y.isSkinnedMesh&&Ot.skinning===!0||Ot.envMap!==At||U.fog===!0&&Ot.fog!==xt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==H.numPlanes||Ot.numIntersection!==H.numIntersection)||Ot.vertexAlphas!==Lt||Ot.vertexTangents!==Rt||Ot.morphTargets!==Dt||Ot.morphNormals!==Bt||Ot.morphColors!==Se||Ot.toneMapping!==en||st.isWebGL2===!0&&Ot.morphTargetsCount!==re)&&(ue=!0):(ue=!0,Ot.__version=U.version);let Kn=Ot.currentProgram;ue===!0&&(Kn=kr(U,N,Y));let Ro=!1,fr=!1,Ns=!1;const ye=Kn.getUniforms(),$n=Ot.uniforms;if(vt.useProgram(Kn.program)&&(Ro=!0,fr=!0,Ns=!0),U.id!==A&&(A=U.id,fr=!0),Ro||P!==T){if(ye.setValue(G,"projectionMatrix",T.projectionMatrix),st.logarithmicDepthBuffer&&ye.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),P!==T&&(P=T,fr=!0,Ns=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Ue=ye.map.cameraPosition;Ue!==void 0&&Ue.setValue(G,j.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ye.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Y.isSkinnedMesh)&&ye.setValue(G,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){ye.setOptional(G,Y,"bindMatrix"),ye.setOptional(G,Y,"bindMatrixInverse");const Ue=Y.skeleton;Ue&&(st.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),ye.setValue(G,"boneTexture",Ue.boneTexture,Et),ye.setValue(G,"boneTextureSize",Ue.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fs=X.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0&&st.isWebGL2===!0)&&ot.update(Y,X,Kn),(fr||Ot.receiveShadow!==Y.receiveShadow)&&(Ot.receiveShadow=Y.receiveShadow,ye.setValue(G,"receiveShadow",Y.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&($n.envMap.value=At,$n.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),fr&&(ye.setValue(G,"toneMappingExposure",d.toneMappingExposure),Ot.needsLights&&Ku($n,Ns),xt&&U.fog===!0&&pe.refreshFogUniforms($n,xt),pe.refreshMaterialUniforms($n,U,D,B,it),fs.upload(G,Ot.uniformsList,$n,Et)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(fs.upload(G,Ot.uniformsList,$n,Et),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ye.setValue(G,"center",Y.center),ye.setValue(G,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(G,"normalMatrix",Y.normalMatrix),ye.setValue(G,"modelMatrix",Y.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ue=U.uniformsGroups;for(let zs=0,Ju=Ue.length;zs<Ju;zs++)if(st.isWebGL2){const Do=Ue[zs];ft.update(Do,Kn),ft.bind(Do,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function Ku(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function $u(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,N,X){mt.get(T.texture).__webglTexture=N,mt.get(T.depthTexture).__webglTexture=X;const U=mt.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=X===void 0,U.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const X=mt.get(T);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,X=0){M=T,S=N,x=X;let U=!0,Y=null,xt=!1,St=!1;if(T){const At=mt.get(T);At.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(36160,null),U=!1):At.__webglFramebuffer===void 0?Et.setupRenderTarget(T):At.__hasExternalTextures&&Et.rebindTextures(T,mt.get(T.texture).__webglTexture,mt.get(T.depthTexture).__webglTexture);const Lt=T.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(St=!0);const Rt=mt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Rt[N],xt=!0):st.isWebGL2&&T.samples>0&&Et.useMultisampledRTT(T)===!1?Y=mt.get(T).__webglMultisampledFramebuffer:Y=Rt,C.copy(T.viewport),v.copy(T.scissor),w=T.scissorTest}else C.copy($).multiplyScalar(D).floor(),v.copy(Z).multiplyScalar(D).floor(),w=W;if(vt.bindFramebuffer(36160,Y)&&st.drawBuffers&&U&&vt.drawBuffers(T,Y),vt.viewport(C),vt.scissor(v),vt.setScissorTest(w),xt){const At=mt.get(T.texture);G.framebufferTexture2D(36160,36064,34069+N,At.__webglTexture,X)}else if(St){const At=mt.get(T.texture),Lt=N||0;G.framebufferTextureLayer(36160,36064,At.__webglTexture,X||0,Lt)}A=-1},this.readRenderTargetPixels=function(T,N,X,U,Y,xt,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){vt.bindFramebuffer(36160,wt);try{const At=T.texture,Lt=At.format,Rt=At.type;if(Lt!==ln&&k.convert(Lt)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Rt===Ar&&(Mt.has("EXT_color_buffer_half_float")||st.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Rt!==pi&&k.convert(Rt)!==G.getParameter(35738)&&!(Rt===li&&(st.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-U&&X>=0&&X<=T.height-Y&&G.readPixels(N,X,U,Y,k.convert(Lt),k.convert(Rt),xt)}finally{const At=M!==null?mt.get(M).__webglFramebuffer:null;vt.bindFramebuffer(36160,At)}}},this.copyFramebufferToTexture=function(T,N,X=0){const U=Math.pow(2,-X),Y=Math.floor(N.image.width*U),xt=Math.floor(N.image.height*U);Et.setTexture2D(N,0),G.copyTexSubImage2D(3553,X,0,0,T.x,T.y,Y,xt),vt.unbindTexture()},this.copyTextureToTexture=function(T,N,X,U=0){const Y=N.image.width,xt=N.image.height,St=k.convert(X.format),wt=k.convert(X.type);Et.setTexture2D(X,0),G.pixelStorei(37440,X.flipY),G.pixelStorei(37441,X.premultiplyAlpha),G.pixelStorei(3317,X.unpackAlignment),N.isDataTexture?G.texSubImage2D(3553,U,T.x,T.y,Y,xt,St,wt,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(3553,U,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,St,N.mipmaps[0].data):G.texSubImage2D(3553,U,T.x,T.y,St,wt,N.image),U===0&&X.generateMipmaps&&G.generateMipmap(3553),vt.unbindTexture()},this.copyTextureToTexture3D=function(T,N,X,U,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=T.max.x-T.min.x+1,St=T.max.y-T.min.y+1,wt=T.max.z-T.min.z+1,At=k.convert(U.format),Lt=k.convert(U.type);let Rt;if(U.isData3DTexture)Et.setTexture3D(U,0),Rt=32879;else if(U.isDataArrayTexture)Et.setTexture2DArray(U,0),Rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,U.flipY),G.pixelStorei(37441,U.premultiplyAlpha),G.pixelStorei(3317,U.unpackAlignment);const Dt=G.getParameter(3314),Bt=G.getParameter(32878),Se=G.getParameter(3316),en=G.getParameter(3315),Zn=G.getParameter(32877),re=X.isCompressedTexture?X.mipmaps[0]:X.image;G.pixelStorei(3314,re.width),G.pixelStorei(32878,re.height),G.pixelStorei(3316,T.min.x),G.pixelStorei(3315,T.min.y),G.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(Rt,Y,N.x,N.y,N.z,xt,St,wt,At,Lt,re.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Rt,Y,N.x,N.y,N.z,xt,St,wt,At,re.data)):G.texSubImage3D(Rt,Y,N.x,N.y,N.z,xt,St,wt,At,Lt,re),G.pixelStorei(3314,Dt),G.pixelStorei(32878,Bt),G.pixelStorei(3316,Se),G.pixelStorei(3315,en),G.pixelStorei(32877,Zn),Y===0&&U.generateMipmaps&&G.generateMipmap(Rt),vt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Et.setTextureCube(T,0):T.isData3DTexture?Et.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Et.setTexture2DArray(T,0):Et.setTexture2D(T,0),vt.unbindTexture()},this.resetState=function(){S=0,x=0,M=null,vt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}class Qg extends Xc{}Qg.prototype.isWebGL1Renderer=!0;class t_ extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class qc extends cr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jl=new ne,Oa=new Rc,cs=new As,us=new I;class e_ extends Ee{constructor(t=new un,e=new qc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(i),cs.radius+=r,t.ray.intersectsSphere(cs)===!1)return;jl.copy(i).invert(),Oa.copy(t.ray).applyMatrix4(jl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let _=f,g=p;_<g;_++){const m=c.getX(_);us.fromBufferAttribute(h,m),Zl(us,m,l,i,t,e,this)}}else{const f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let _=f,g=p;_<g;_++)us.fromBufferAttribute(h,_),Zl(us,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zl(o,t,e,n,i,r,s){const a=Oa.distanceSqToPoint(o);if(a<e){const l=new I;Oa.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:s})}}class eo extends un{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],s=[],a=[],l=[],c=new I,u=new Tt;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),s.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(s[f]/t+1)/2,u.y=(s[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class no extends un{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],s=[];a(i),c(n),u(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new I,x=new I,M=new I;for(let A=0;A<e.length;A+=3)p(e[A+0],S),p(e[A+1],x),p(e[A+2],M),l(S,x,M,y)}function l(y,S,x,M){const A=M+1,P=[];for(let C=0;C<=A;C++){P[C]=[];const v=y.clone().lerp(x,C/A),w=S.clone().lerp(x,C/A),z=A-C;for(let B=0;B<=z;B++)B===0&&C===A?P[C][B]=v:P[C][B]=v.clone().lerp(w,B/z)}for(let C=0;C<A;C++)for(let v=0;v<2*(A-C)-1;v++){const w=Math.floor(v/2);v%2===0?(f(P[C][w+1]),f(P[C+1][w]),f(P[C][w])):(f(P[C][w+1]),f(P[C+1][w+1]),f(P[C+1][w]))}}function c(y){const S=new I;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(y),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function u(){const y=new I;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const x=m(y)/2/Math.PI+.5,M=d(y)/Math.PI+.5;s.push(x,1-M)}_(),h()}function h(){for(let y=0;y<s.length;y+=6){const S=s[y+0],x=s[y+2],M=s[y+4],A=Math.max(S,x,M),P=Math.min(S,x,M);A>.9&&P<.1&&(S<.2&&(s[y+0]+=1),x<.2&&(s[y+2]+=1),M<.2&&(s[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,S){const x=y*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function _(){const y=new I,S=new I,x=new I,M=new I,A=new Tt,P=new Tt,C=new Tt;for(let v=0,w=0;v<r.length;v+=9,w+=6){y.set(r[v+0],r[v+1],r[v+2]),S.set(r[v+3],r[v+4],r[v+5]),x.set(r[v+6],r[v+7],r[v+8]),A.set(s[w+0],s[w+1]),P.set(s[w+2],s[w+3]),C.set(s[w+4],s[w+5]),M.copy(y).add(S).add(x).divideScalar(3);const z=m(M);g(A,w+0,y,z),g(P,w+2,S,z),g(C,w+4,x,z)}}function g(y,S,x,M){M<0&&y.x===1&&(s[S]=y.x-1),x.x===0&&x.z===0&&(s[S]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.vertices,t.indices,t.radius,t.details)}}class io extends no{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new io(t.radius,t.detail)}}class n_ extends cr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class i_ extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ma=new ne,Kl=new I,$l=new I;class r_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jl=new ne,_r=new I,ga=new I;class s_ extends r_{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(t.matrixWorld),n.position.copy(_r),ga.copy(n.position),ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ga),n.updateMatrixWorld(),i.makeTranslation(-_r.x,-_r.y,-_r.z),Jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl)}}class ro extends i_{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new s_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ql{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);const tc={type:"change"},_a={type:"start"},ec={type:"end"};class a_ extends Si{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Vt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Vt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(tc),n.update(),r=i.NONE},this.update=function(){const L=new I,K=new _i().setFromUnitVectors(t.up,new I(0,1,0)),k=K.clone().invert(),lt=new I,ft=new _i,pt=2*Math.PI;return function(){const dt=n.object.position;L.copy(dt).sub(n.target),L.applyQuaternion(K),a.setFromVector3(L),n.autoRotate&&r===i.NONE&&v(P()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let bt=n.minAzimuthAngle,Pt=n.maxAzimuthAngle;return isFinite(bt)&&isFinite(Pt)&&(bt<-Math.PI?bt+=pt:bt>Math.PI&&(bt-=pt),Pt<-Math.PI?Pt+=pt:Pt>Math.PI&&(Pt-=pt),bt<=Pt?a.theta=Math.max(bt,Math.min(Pt,a.theta)):a.theta=a.theta>(bt+Pt)/2?Math.max(bt,a.theta):Math.min(Pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(k),dt.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||lt.distanceToSquared(n.object.position)>s||8*(1-ft.dot(n.object.quaternion))>s?(n.dispatchEvent(tc),lt.copy(n.object.position),ft.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",b),n.domElement.removeEventListener("pointerdown",Et),n.domElement.removeEventListener("pointercancel",qt),n.domElement.removeEventListener("wheel",Nt),n.domElement.removeEventListener("pointermove",Kt),n.domElement.removeEventListener("pointerup",qt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Vt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new Ql,l=new Ql;let c=1;const u=new I;let h=!1;const f=new Tt,p=new Tt,_=new Tt,g=new Tt,m=new Tt,d=new Tt,y=new Tt,S=new Tt,x=new Tt,M=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function v(L){l.theta-=L}function w(L){l.phi-=L}const z=function(){const L=new I;return function(k,lt){L.setFromMatrixColumn(lt,0),L.multiplyScalar(-k),u.add(L)}}(),B=function(){const L=new I;return function(k,lt){n.screenSpacePanning===!0?L.setFromMatrixColumn(lt,1):(L.setFromMatrixColumn(lt,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(k),u.add(L)}}(),D=function(){const L=new I;return function(k,lt){const ft=n.domElement;if(n.object.isPerspectiveCamera){const pt=n.object.position;L.copy(pt).sub(n.target);let ut=L.length();ut*=Math.tan(n.object.fov/2*Math.PI/180),z(2*k*ut/ft.clientHeight,n.object.matrix),B(2*lt*ut/ft.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(k*(n.object.right-n.object.left)/n.object.zoom/ft.clientWidth,n.object.matrix),B(lt*(n.object.top-n.object.bottom)/n.object.zoom/ft.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(L){f.set(L.clientX,L.clientY)}function Z(L){y.set(L.clientX,L.clientY)}function W(L){g.set(L.clientX,L.clientY)}function et(L){p.set(L.clientX,L.clientY),_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const K=n.domElement;v(2*Math.PI*_.x/K.clientHeight),w(2*Math.PI*_.y/K.clientHeight),f.copy(p),n.update()}function J(L){S.set(L.clientX,L.clientY),x.subVectors(S,y),x.y>0?O(C()):x.y<0&&F(C()),y.copy(S),n.update()}function _t(L){m.set(L.clientX,L.clientY),d.subVectors(m,g).multiplyScalar(n.panSpeed),D(d.x,d.y),g.copy(m),n.update()}function it(L){L.deltaY<0?F(C()):L.deltaY>0&&O(C()),n.update()}function V(L){let K=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),K=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),K=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?v(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),K=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?v(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),K=!0;break}K&&(L.preventDefault(),n.update())}function j(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),K=.5*(M[0].pageY+M[1].pageY);f.set(L,K)}}function rt(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),K=.5*(M[0].pageY+M[1].pageY);g.set(L,K)}}function ct(){const L=M[0].pageX-M[1].pageX,K=M[0].pageY-M[1].pageY,k=Math.sqrt(L*L+K*K);y.set(0,k)}function G(){n.enableZoom&&ct(),n.enablePan&&rt()}function yt(){n.enableZoom&&ct(),n.enableRotate&&j()}function Mt(L){if(M.length==1)p.set(L.pageX,L.pageY);else{const k=ot(L),lt=.5*(L.pageX+k.x),ft=.5*(L.pageY+k.y);p.set(lt,ft)}_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const K=n.domElement;v(2*Math.PI*_.x/K.clientHeight),w(2*Math.PI*_.y/K.clientHeight),f.copy(p)}function st(L){if(M.length===1)m.set(L.pageX,L.pageY);else{const K=ot(L),k=.5*(L.pageX+K.x),lt=.5*(L.pageY+K.y);m.set(k,lt)}d.subVectors(m,g).multiplyScalar(n.panSpeed),D(d.x,d.y),g.copy(m)}function vt(L){const K=ot(L),k=L.pageX-K.x,lt=L.pageY-K.y,ft=Math.sqrt(k*k+lt*lt);S.set(0,ft),x.set(0,Math.pow(S.y/y.y,n.zoomSpeed)),O(x.y),y.copy(S)}function Ft(L){n.enableZoom&&vt(L),n.enablePan&&st(L)}function mt(L){n.enableZoom&&vt(L),n.enableRotate&&Mt(L)}function Et(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Kt),n.domElement.addEventListener("pointerup",qt)),H(L),L.pointerType==="touch"?pe(L):ie(L))}function Kt(L){n.enabled!==!1&&(L.pointerType==="touch"?E(L):Jt(L))}function qt(L){Q(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Kt),n.domElement.removeEventListener("pointerup",qt)),n.dispatchEvent(ec),r=i.NONE}function ie(L){let K;switch(L.button){case 0:K=n.mouseButtons.LEFT;break;case 1:K=n.mouseButtons.MIDDLE;break;case 2:K=n.mouseButtons.RIGHT;break;default:K=-1}switch(K){case bi.DOLLY:if(n.enableZoom===!1)return;Z(L),r=i.DOLLY;break;case bi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;W(L),r=i.PAN}else{if(n.enableRotate===!1)return;$(L),r=i.ROTATE}break;case bi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;$(L),r=i.ROTATE}else{if(n.enablePan===!1)return;W(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(_a)}function Jt(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;et(L);break;case i.DOLLY:if(n.enableZoom===!1)return;J(L);break;case i.PAN:if(n.enablePan===!1)return;_t(L);break}}function Nt(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(_a),it(L),n.dispatchEvent(ec))}function Vt(L){n.enabled===!1||n.enablePan===!1||V(L)}function pe(L){switch(nt(L),M.length){case 1:switch(n.touches.ONE){case wi.ROTATE:if(n.enableRotate===!1)return;j(),r=i.TOUCH_ROTATE;break;case wi.PAN:if(n.enablePan===!1)return;rt(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case wi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(),r=i.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;yt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(_a)}function E(L){switch(nt(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;st(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ft(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(L),n.update();break;default:r=i.NONE}}function b(L){n.enabled!==!1&&L.preventDefault()}function H(L){M.push(L)}function Q(L){delete A[L.pointerId];for(let K=0;K<M.length;K++)if(M[K].pointerId==L.pointerId){M.splice(K,1);return}}function nt(L){let K=A[L.pointerId];K===void 0&&(K=new Tt,A[L.pointerId]=K),K.set(L.pageX,L.pageY)}function ot(L){const K=L.pointerId===M[0].pointerId?M[1]:M[0];return A[K.pointerId]}n.domElement.addEventListener("contextmenu",b),n.domElement.addEventListener("pointerdown",Et),n.domElement.addEventListener("pointercancel",qt),n.domElement.addEventListener("wheel",Nt,{passive:!1}),this.update()}}function En(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Yc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var He={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nr={duration:.5,overwrite:!1,delay:0},so,ve,ae,$e=1e8,Gt=1/$e,Na=Math.PI*2,o_=Na/4,l_=0,jc=Math.sqrt,c_=Math.cos,u_=Math.sin,fe=function(t){return typeof t=="string"},$t=function(t){return typeof t=="function"},Rn=function(t){return typeof t=="number"},ao=function(t){return typeof t>"u"},vn=function(t){return typeof t=="object"},Le=function(t){return t!==!1},oo=function(){return typeof window<"u"},hs=function(t){return $t(t)||fe(t)},Zc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Me=Array.isArray,Fa=/(?:-?\.?\d|\.)+/gi,Kc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$c=/[+-]=-?[.\d]+/,Jc=/[^,'"\[\]\s]+/gi,h_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,je,za,lo,We={},_s={},Qc,tu=function(t){return(_s=vi(t,We))&&Ie},co=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},xs=function(t,e){return!e&&console.warn(t)},eu=function(t,e){return t&&(We[t]=e)&&_s&&(_s[t]=e)||We},Pr=function(){return 0},f_={suppressEvents:!0,isStart:!0,kill:!1},ds={suppressEvents:!0,kill:!1},d_={suppressEvents:!0},uo={},Vn=[],Ba={},nu,Be={},va={},nc=30,ps=[],ho="",fo=function(t){var e=t[0],n,i;if(vn(e)||$t(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ps.length;i--&&!ps[i].targetTest(e););n=ps[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Eu(t[i],n)))||t.splice(i,1);return t},hi=function(t){return t._gsap||fo(Je(t))[0]._gsap},iu=function(t,e,n){return(n=t[e])&&$t(n)?t[e]():ao(n)&&t.getAttribute&&t.getAttribute(e)||n},Re=function(t,e){return(t=t.split(",")).forEach(e)||t},ee=function(t){return Math.round(t*1e5)/1e5||0},de=function(t){return Math.round(t*1e7)/1e7||0},Zi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},p_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},vs=function(){var t=Vn.length,e=Vn.slice(0),n,i;for(Ba={},Vn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ru=function(t,e,n,i){Vn.length&&!ve&&vs(),t.render(e,n,i||ve&&e<0&&(t._initted||t._startAt)),Vn.length&&!ve&&vs()},su=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Jc).length<2?e:fe(t)?t.trim():t},au=function(t){return t},tn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},m_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},vi=function(t,e){for(var n in e)t[n]=e[n];return t},ic=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=vn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},Ms=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},br=function(t){var e=t.parent||jt,n=t.keyframes?m_(Me(t.keyframes)):tn;if(Le(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},g_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ou=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t[i],a;if(r)for(a=e[r];s&&s[r]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e},Ls=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,s=e._next;r?r._next=s:t[n]===e&&(t[n]=s),s?s._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Xn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},fi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},__=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ka=function(t,e,n,i){return t._startAt&&(ve?t._startAt.revert(ds):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},x_=function o(t){return!t||t._ts&&o(t.parent)},rc=function(t){return t._repeat?ir(t._tTime,t=t.duration()+t._rDelay)*t:0},ir=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ss=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Rs=function(t){return t._end=de(t._start+(t._tDur/Math.abs(t._ts||t._rts||Gt)||0))},Ds=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=de(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Rs(t),n._dirty||fi(n,t)),t},lu=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Ss(t.rawTime(),e),(!e._dur||zr(0,e.totalDuration(),n)-e._tTime>Gt)&&e.render(n,!0)),fi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Gt}},mn=function(t,e,n,i){return e.parent&&Xn(e),e._start=de((Rn(n)?n:n||t!==jt?Ye(t,n,e):t._time)+e._delay),e._end=de(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ou(t,e,"_first","_last",t._sort?"_start":0),Ga(e)||(t._recent=e),i||lu(t,e),t._ts<0&&Ds(t,t._tTime),t},cu=function(t,e){return(We.ScrollTrigger||co("scrollTrigger",e))&&We.ScrollTrigger.create(e,t)},uu=function(t,e,n,i,r){if(mo(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ve&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&nu!==Ge.frame)return Vn.push(t),t._lazy=[r,i],1},v_=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Ga=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},M_=function(t,e,n,i){var r=t.ratio,s=e<0||!e&&(!t._start&&v_(t)&&!(!t._initted&&Ga(t))||(t._ts<0||t._dp._ts<0)&&!Ga(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=zr(0,t._tDur,e),u=ir(l,a),t._yoyo&&u&1&&(s=1-s),u!==ir(t._tTime,a)&&(r=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==r||ve||i||t._zTime===Gt||!e&&t._zTime){if(!t._initted&&uu(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Gt:0),n||(n=e&&!h),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=l,c=t._pt;c;)c.r(s,c.d),c=c._next;e<0&&ka(t,e,n,!0),t._onUpdate&&!n&&Qe(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(s&&Xn(t,1),!n&&!ve&&(Qe(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},S_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},rr=function(t,e,n,i){var r=t._repeat,s=de(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=s/t._dur),t._dur=s,t._tDur=r?r<0?1e10:de(s*(r+1)+t._rDelay*r):s,a>0&&!i&&Ds(t,t._tTime=t._tDur*a),t.parent&&Rs(t),n||fi(t.parent,t),t},sc=function(t){return t instanceof Ae?fi(t):rr(t,t._dur)},y_={_start:0,endTime:Pr,totalDuration:Pr},Ye=function o(t,e,n){var i=t.labels,r=t._recent||y_,s=t.duration()>=$e?r.endTime(!1):t._dur,a,l,c;return fe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=s),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Me(n)?n[0]:n).totalDuration()),a>1?o(t,e.substr(0,a-1),n)+l:s+l)):e==null?s:+e},wr=function(t,e,n){var i=Rn(e[1]),r=(i?2:1)+(t<2?0:1),s=e[r],a,l;if(i&&(s.duration=e[1]),s.parent=n,t){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Le(l.vars.inherit)&&l.parent;s.immediateRender=Le(a.immediateRender),t<2?s.runBackwards=1:s.startAt=e[r-1]}return new oe(e[0],s,e[r+1])},Yn=function(t,e){return t||t===0?e(t):e},zr=function(t,e,n){return n<t?t:n>e?e:n},xe=function(t,e){return!fe(t)||!(e=h_.exec(t))?"":e[1]},b_=function(t,e,n){return Yn(n,function(i){return zr(t,e,i)})},Va=[].slice,hu=function(t,e){return t&&vn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&vn(t[0]))&&!t.nodeType&&t!==je},w_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return fe(i)&&!e||hu(i,1)?(r=n).push.apply(r,Je(i)):n.push(i)})||n},Je=function(t,e,n){return ae&&!e&&ae.selector?ae.selector(t):fe(t)&&!n&&(za||!sr())?Va.call((e||lo).querySelectorAll(t),0):Me(t)?w_(t,n):hu(t)?Va.call(t,0):t?[t]:[]},Ha=function(t){return t=Je(t)[0]||xs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Je(e,n.querySelectorAll?n:n===t?xs("Invalid scope")||lo.createElement("div"):t)}},fu=function(t){return t.sort(function(){return .5-Math.random()})},du=function(t){if($t(t))return t;var e=vn(t)?t:{each:t},n=di(e.ease),i=e.from||0,r=parseFloat(e.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return fe(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,p,_){var g=(_||e).length,m=s[g],d,y,S,x,M,A,P,C,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,$e])[1],!v){for(P=-$e;P<(P=_[v++].getBoundingClientRect().left)&&v<g;);v--}for(m=s[g]=[],d=l?Math.min(v,g)*u-.5:i%v,y=v===$e?0:l?g*h/v-.5:i/v|0,P=0,C=$e,A=0;A<g;A++)S=A%v-d,x=y-(A/v|0),m[A]=M=c?Math.abs(c==="y"?x:S):jc(S*S+x*x),M>P&&(P=M),M<C&&(C=M);i==="random"&&fu(m),m.max=P-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=xe(e.amount||e.each)||0,n=n&&g<0?bu(n):n}return g=(m[f]-m.min)/m.max||0,de(m.b+(n?n(g):g)*m.v)+m.u}},Wa=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=de(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Rn(n)?0:xe(n))}},pu=function(t,e){var n=Me(t),i,r;return!n&&vn(t)&&(i=n=t.radius||$e,t.values?(t=Je(t.values),(r=!Rn(t[0]))&&(i*=i)):t=Wa(t.increment)),Yn(e,n?$t(t)?function(s){return r=t(s),Math.abs(r-s)<=i?r:s}:function(s){for(var a=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=$e,u=0,h=t.length,f,p;h--;)r?(f=t[h].x-a,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:s,r||u===s||Rn(s)?u:u+xe(s)}:Wa(t))},mu=function(t,e,n,i){return Yn(Me(t)?!e:n===!0?!!(n=0):!i,function(){return Me(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},T_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,s){return s(r)},i)}},E_=function(t,e){return function(n){return t(parseFloat(n))+(e||xe(n))}},A_=function(t,e,n){return _u(t,e,0,1,n)},gu=function(t,e,n){return Yn(n,function(i){return t[~~e(i)]})},C_=function o(t,e,n){var i=e-t;return Me(t)?gu(t,o(0,t.length),e):Yn(n,function(r){return(i+(r-t)%i)%i+t})},P_=function o(t,e,n){var i=e-t,r=i*2;return Me(t)?gu(t,o(0,t.length-1),e):Yn(n,function(s){return s=(r+(s-t)%r)%r||0,t+(s>i?r-s:s)})},Lr=function(t){for(var e=0,n="",i,r,s,a;~(i=t.indexOf("random(",e));)s=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,s-i-7).match(a?Jc:Fa),n+=t.substr(e,i-e)+mu(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=s+1;return n+t.substr(e,t.length-e)},_u=function(t,e,n,i,r){var s=e-t,a=i-n;return Yn(r,function(l){return n+((l-t)/s*a||0)})},L_=function o(t,e,n,i){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var s=fe(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)t={p:t},e={p:e};else if(Me(t)&&!Me(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(o(t[c-1],t[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else i||(t=vi(Me(t)?[]:{},t));if(!u){for(l in e)po.call(a,t,l,"get",e[l]);r=function(_){return xo(_,a)||(s?t.p:t)}}}return Yn(n,r)},ac=function(t,e,n){var i=t.labels,r=$e,s,a,l;for(s in i)a=i[s]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=s,r=a);return l},Qe=function(t,e,n){var i=t.vars,r=i[e],s=ae,a=t._ctx,l,c,u;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Vn.length&&vs(),a&&(ae=a),u=l?r.apply(c,l):r.call(c),ae=s,u},Sr=function(t){return Xn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ve),t.progress()<1&&Qe(t,"onInterrupt"),t},Xi,xu=[],vu=function(t){if(!oo()){xu.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=$t(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Pr,render:xo,add:po,kill:q_,modifier:X_,rawVars:0},s={targetTest:0,get:0,getSetter:_o,aliases:{},register:0};if(sr(),t!==i){if(Be[e])return;tn(i,tn(Ms(t,r),s)),vi(i.prototype,vi(r,Ms(t,s))),Be[i.prop=e]=i,t.targetTest&&(ps.push(i),uo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}eu(e,i),t.register&&t.register(Ie,i,De)},kt=255,yr={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},Ma=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*kt+.5|0},Mu=function(t,e,n){var i=t?Rn(t)?[t>>16,t>>8&kt,t&kt]:0:yr.black,r,s,a,l,c,u,h,f,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),yr[t])i=yr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),s=t.charAt(2),a=t.charAt(3),t="#"+r+r+s+s+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&kt,i&kt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&kt,t&kt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Fa),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=Ma(l+1/3,r,s),i[1]=Ma(l,r,s),i[2]=Ma(l-1/3,r,s);else if(~t.indexOf("="))return i=t.match(Kc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Fa)||yr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/kt,s=i[1]/kt,a=i[2]/kt,h=Math.max(r,s,a),f=Math.min(r,s,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===r?(s-a)/p+(s<a?6:0):h===s?(a-r)/p+2:(r-s)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Su=function(t){var e=[],n=[],i=-1;return t.split(Hn).forEach(function(r){var s=r.match(Wi)||[];e.push.apply(e,s),n.push(i+=s.length+1)}),e.c=n,e},oc=function(t,e,n){var i="",r=(t+i).match(Hn),s=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return t;if(r=r.map(function(f){return(f=Mu(f,e,1))&&s+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Su(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Hn,"1").split(Wi),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(Hn),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Hn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in yr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),R_=/hsl[a]?\(/,yu=function(t){var e=t.join(" "),n;if(Hn.lastIndex=0,Hn.test(e))return n=R_.test(e),t[1]=oc(t[1],n),t[0]=oc(t[0],n,Su(t[1])),!0},Rr,Ge=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,s=r,a=[],l,c,u,h,f,p,_=function g(m){var d=o()-i,y=m===!0,S,x,M,A;if(d>t&&(n+=d-e),i+=d,M=i-n,S=M-s,(S>0||y)&&(A=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,s+=S+(S>=r?4:r-S),x=1),y||(l=c(g)),x)for(p=0;p<a.length;p++)a[p](M,f,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Qc&&(!za&&oo()&&(je=za=window,lo=je.document||{},We.gsap=Ie,(je.gsapVersions||(je.gsapVersions=[])).push(Ie.version),tu(_s||je.GreenSockGlobals||!je.gsap&&je||{}),u=je.requestAnimationFrame,xu.forEach(vu)),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},Rr=1,_(2))},sleep:function(){(u?je.cancelAnimationFrame:clearTimeout)(l),Rr=0,c=Pr},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,d,y){var S=d?function(x,M,A,P){m(x,M,A,P),h.remove(S)}:m;return h.remove(m),a[y?"unshift":"push"](S),sr(),S},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),sr=function(){return!Rr&&Ge.wake()},Ut={},D_=/^[\d.\-M][\d.\-,\s]/,I_=/["']/g,U_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,s=n.length,a,l,c;r<s;r++)l=n[r],a=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(I_,"").trim():+c,i=l.substr(a+1).trim();return e},O_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},N_=function(t){var e=(t+"").split("("),n=Ut[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[U_(e[1])]:O_(t).split(",").map(su)):Ut._CE&&D_.test(t)?Ut._CE("",t):n},bu=function(t){return function(e){return 1-t(1-e)}},wu=function o(t,e){for(var n=t._first,i;n;)n instanceof Ae?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},di=function(t,e){return t&&($t(t)?t:Ut[t]||N_(t))||e},yi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},s;return Re(t,function(a){Ut[a]=We[a]=r,Ut[s=a.toLowerCase()]=n;for(var l in r)Ut[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ut[a+"."+l]=r[l]}),r},Tu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Sa=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),s=r/Na*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*u_((u-s)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Tu(a);return r=Na/r,l.config=function(c,u){return o(t,c,u)},l},ya=function o(t,e){e===void 0&&(e=1.70158);var n=function(s){return s?--s*s*((e+1)*s+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Tu(n);return i.config=function(r){return o(t,r)},i};Re("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;yi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ut.Linear.easeNone=Ut.none=Ut.Linear.easeIn;yi("Elastic",Sa("in"),Sa("out"),Sa());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?o*a*a:a<n?o*Math.pow(a-1.5/t,2)+.75:a<i?o*(a-=2.25/t)*a+.9375:o*Math.pow(a-2.625/t,2)+.984375};yi("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);yi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});yi("Circ",function(o){return-(jc(1-o*o)-1)});yi("Sine",function(o){return o===1?1:-c_(o*o_)+1});yi("Back",ya("in"),ya("out"),ya());Ut.SteppedEase=Ut.steps=We.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,s=1-Gt;return function(a){return((i*zr(0,s,a)|0)+r)*n}}};nr.ease=Ut["quad.out"];Re("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return ho+=o+","+o+"Params,"});var Eu=function(t,e){this.id=l_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:iu,this.set=e?e.getSetter:_o},ar=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,rr(this,+e.duration,1,1),this.data=e.data,ae&&(this._ctx=ae,ae.data.push(this)),Rr||Ge.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,rr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(sr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ds(this,n),!r._dp||r.parent||lu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Gt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ru(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+rc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+rc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ir(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Gt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ss(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Gt?0:this._rts,this.totalTime(zr(-Math.abs(this._delay),this._tDur,i),!0),Rs(this),__(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Gt&&(this._tTime-=Gt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Le(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ss(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=d_);var i=ve;return ve=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ve=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,sc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ye(this,n),Le(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Le(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Gt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Gt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Gt)},t.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},t.then=function(n){var i=this;return new Promise(function(r){var s=$t(n)?n:au,a=function(){var c=i.then;i.then=null,$t(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Sr(this)},o}();tn(ar.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Gt,_prom:0,_ps:!1,_rts:1});var Ae=function(o){Yc(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Le(n.sortChildren),jt&&mn(n.parent||jt,En(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&cu(En(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,s){return wr(0,arguments,this),this},e.from=function(i,r,s){return wr(1,arguments,this),this},e.fromTo=function(i,r,s,a){return wr(2,arguments,this),this},e.set=function(i,r,s){return r.duration=0,r.parent=this,br(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new oe(i,r,Ye(this,s),1),this},e.call=function(i,r,s){return mn(this,oe.delayedCall(0,i,r),s)},e.staggerTo=function(i,r,s,a,l,c,u){return s.duration=r,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new oe(i,s,Ye(this,l)),this},e.staggerFrom=function(i,r,s,a,l,c,u){return s.runBackwards=1,br(s).immediateRender=Le(s.immediateRender),this.staggerTo(i,r,s,a,l,c,u)},e.staggerFromTo=function(i,r,s,a,l,c,u,h){return a.startAt=s,br(a).immediateRender=Le(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},e.render=function(i,r,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:de(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,_,g,m,d,y,S,x,M,A,P;if(this!==jt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,S=this._ts,d=!S,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(f=de(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),M=ir(this._tTime,m),!a&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),A&&g&1&&(f=c-f,P=1),g!==M&&!this._lock){var C=A&&M&1,v=C===(A&&g&1);if(g<M&&(C=!C),a=C?0:c,this._lock=1,this.render(a||(P?0:de(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Qe(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;wu(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=S_(this,de(a),de(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!g&&(Qe(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,r,s);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,s),f!==this._time||!this._ts&&!d){y=0,_&&(u+=this._zTime=-Gt);break}}p=_}else{p=this._last;for(var w=i<0?i:f;p;){if(_=p._prev,(p._act||w<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,r,s);if(p.render(p._ts>0?(w-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(w-p._start)*p._ts,r,s||ve&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){y=0,_&&(u+=this._zTime=w?-Gt:Gt);break}}p=_}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-Gt)._zTime=f>=a?1:-1,this._ts))return this._start=x,Rs(this),this.render(i,r,s);this._onUpdate&&!r&&Qe(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Xn(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Qe(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var s=this;if(Rn(r)||(r=Ye(this,r,i)),!(i instanceof ar)){if(Me(i))return i.forEach(function(a){return s.add(a,r)}),this;if(fe(i))return this.addLabel(i,r);if($t(i))i=oe.delayedCall(0,i);else return this}return this!==i?mn(this,i,r):this},e.getChildren=function(i,r,s,a){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=-$e);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof oe?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},e.remove=function(i){return fe(i)?this.removeLabel(i):$t(i)?this.killTweensOf(i):(Ls(this,i),i===this._recent&&(this._recent=this._last),fi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=de(Ge.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ye(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,s){var a=oe.delayedCall(0,r||Pr,s);return a.data="isPause",this._hasPause=1,mn(this,a,Ye(this,i))},e.removePause=function(i){var r=this._first;for(i=Ye(this,i);r;)r._start===i&&r.data==="isPause"&&Xn(r),r=r._next},e.killTweensOf=function(i,r,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)zn!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var s=[],a=Je(i),l=this._first,c=Rn(r),u;l;)l instanceof oe?p_(l._targets,a)&&(c?(!zn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(a,r)).length&&s.push.apply(s,u),l=l._next;return s},e.tweenTo=function(i,r){r=r||{};var s=this,a=Ye(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,_=oe.to(s,tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Gt,onStart:function(){if(s.pause(),!p){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==m&&rr(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(i,r,s){return this.tweenTo(r,tn({startAt:{time:Ye(this,i)}},s))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),ac(this,Ye(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),ac(this,Ye(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Gt)},e.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return fi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fi(this)},e.totalDuration=function(i){var r=0,s=this,a=s._last,l=$e,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,mn(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;rr(s,s===jt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(i){if(jt._ts&&(ru(jt,Ss(i,jt)),nu=Ge.frame),Ge.frame>=nc){nc+=He.autoSleep||120;var r=jt._first;if((!r||!r._ts)&&He.autoSleep&&Ge._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ge.sleep()}}},t}(ar);tn(Ae.prototype,{_lock:0,_hasPause:0,_forcing:0});var F_=function(t,e,n,i,r,s,a){var l=new De(this._pt,t,e,0,1,Du,null,r),c=0,u=0,h,f,p,_,g,m,d,y;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Lr(i)),s&&(y=[n,i],s(y,t,e),n=y[0],i=y[1]),f=n.match(xa)||[];h=xa.exec(i);)_=h[0],g=i.substring(c,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Zi(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=xa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,($c.test(i)||d)&&(l.e=0),this._pt=l,l},po=function(t,e,n,i,r,s,a,l,c,u){$t(i)&&(i=i(r||0,t,s));var h=t[e],f=n!=="get"?n:$t(h)?c?t[e.indexOf("set")||!$t(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=$t(h)?c?V_:Lu:go,_;if(fe(i)&&(~i.indexOf("random(")&&(i=Lr(i)),i.charAt(1)==="="&&(_=Zi(f,i)+(xe(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Xa)return!isNaN(f*i)&&i!==""?(_=new De(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?W_:Ru,0,p),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&co(e,i),F_.call(this,t,e,f,i,p,l||He.stringFilter,c))},z_=function(t,e,n,i,r){if($t(t)&&(t=Tr(t,r,e,n,i)),!vn(t)||t.style&&t.nodeType||Me(t)||Zc(t))return fe(t)?Tr(t,r,e,n,i):t;var s={},a;for(a in t)s[a]=Tr(t[a],r,e,n,i);return s},Au=function(t,e,n,i,r,s){var a,l,c,u;if(Be[t]&&(a=new Be[t]).init(r,a.rawVars?e[t]:z_(e[t],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new De(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Xi))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},zn,Xa,mo=function o(t,e,n){var i=t.vars,r=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=t._dur,d=t._startAt,y=t._targets,S=t.parent,x=S&&S.data==="nested"?S.vars.targets:y,M=t._overwrite==="auto"&&!so,A=t.timeline,P,C,v,w,z,B,D,O,F,$,Z,W,et;if(A&&(!_||!r)&&(r="none"),t._ease=di(r,nr.ease),t._yEase=p?bu(di(p===!0?r:p,nr.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!A&&!!i.runBackwards,!A||_&&!i.stagger){if(O=y[0]?hi(y[0]).harness:0,W=O&&i[O.prop],P=Ms(i,uo),d&&(d._zTime<0&&d.progress(1),e<0&&f&&a&&!g?d.render(-1,!0):d.revert(f&&m?ds:f_),d._lazy=0),s){if(Xn(t._startAt=oe.set(y,tn({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!d&&Le(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ve||!a&&!g)&&t._startAt.revert(ds),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!d){if(e&&(a=!1),v=tn({overwrite:!1,data:"isFromStart",lazy:a&&!d&&Le(l),immediateRender:a,stagger:0,parent:S},P),W&&(v[O.prop]=W),Xn(t._startAt=oe.set(y,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ve?t._startAt.revert(ds):t._startAt.render(-1,!0)),t._zTime=e,!a)o(t._startAt,Gt,Gt);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Le(l)||l&&!m,C=0;C<y.length;C++){if(z=y[C],D=z._gsap||fo(y)[C]._gsap,t._ptLookup[C]=$={},Ba[D.id]&&Vn.length&&vs(),Z=x===y?C:x.indexOf(z),O&&(F=new O).init(z,W||P,t,Z,x)!==!1&&(t._pt=w=new De(t._pt,z,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(J){$[J]=w}),F.priority&&(B=1)),!O||W)for(v in P)Be[v]&&(F=Au(v,P,t,Z,z,x))?F.priority&&(B=1):$[v]=w=po.call(t,z,v,"get",P[v],Z,x,0,i.stringFilter);t._op&&t._op[C]&&t.kill(z,t._op[C]),M&&t._pt&&(zn=t,jt.killTweensOf(z,$,t.globalTime(e)),et=!t.parent,zn=0),t._pt&&l&&(Ba[D.id]=1)}B&&Iu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,_&&e<=0&&A.render($e,!0,!0)},B_=function(t,e,n,i,r,s,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Xa=1,t.vars[e]="+=0",mo(t,a),Xa=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=ee(n)+xe(u.e)),u.b&&(u.b=c.s+xe(u.b))},k_=function(t,e){var n=t[0]?hi(t[0]).harness:0,i=n&&n.aliases,r,s,a,l;if(!i)return e;r=vi({},e);for(s in i)if(s in r)for(l=i[s].split(","),a=l.length;a--;)r[l[a]]=r[s];return r},G_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",s,a;if(Me(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(s in e)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(t),v:e[s],e:r})},Tr=function(t,e,n,i,r){return $t(t)?t.call(e,n,i,r):fe(t)&&~t.indexOf("random(")?Lr(t):t},Cu=ho+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Pu={};Re(Cu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Pu[o]=1});var oe=function(o){Yc(t,o);function t(n,i,r,s){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=o.call(this,s?i:br(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,y=i.parent||jt,S=(Me(n)||Zc(n)?Rn(n[0]):"length"in i)?[n]:Je(n),x,M,A,P,C,v,w,z;if(a._targets=S.length?fo(S):xs("GSAP target "+n+" not found. https://greensock.com",!He.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||hs(c)||hs(u)){if(i=a.vars,x=a.timeline=new Ae({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:S}),x.kill(),x.parent=x._dp=En(a),x._start=0,f||hs(c)||hs(u)){if(P=S.length,w=f&&du(f),vn(f))for(C in f)~Cu.indexOf(C)&&(z||(z={}),z[C]=f[C]);for(M=0;M<P;M++)A=Ms(i,Pu),A.stagger=0,d&&(A.yoyoEase=d),z&&vi(A,z),v=S[M],A.duration=+Tr(c,En(a),M,v,S),A.delay=(+Tr(u,En(a),M,v,S)||0)-a._delay,!f&&P===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(v,A,w?w(M,v,S):0),x._ease=Ut.none;x.duration()?c=u=0:a.timeline=0}else if(_){br(tn(x.vars.defaults,{ease:"none"})),x._ease=di(_.ease||i.ease||"none");var B=0,D,O,F;if(Me(_))_.forEach(function($){return x.to(S,$,">")}),x.duration();else{A={};for(C in _)C==="ease"||C==="easeEach"||G_(C,_[C],A,_.easeEach);for(C in A)for(D=A[C].sort(function($,Z){return $.t-Z.t}),B=0,M=0;M<D.length;M++)O=D[M],F={ease:O.e,duration:(O.t-(M?D[M-1].t:0))/100*c},F[C]=O.v,x.to(S,F,B),B+=F.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return p===!0&&!so&&(zn=En(a),jt.killTweensOf(S),zn=0),mn(y,En(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===de(y._time)&&Le(h)&&x_(En(a))&&y.data!=="nested")&&(a._tTime=-Gt,a.render(Math.max(0,-u)||0)),m&&cu(En(a),m),a}var e=t.prototype;return e.render=function(i,r,s){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Gt&&!u?l:i<Gt?0:i,f,p,_,g,m,d,y,S,x;if(!c)M_(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,s);if(f=de(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===h/g&&(f=c,_--),f>c&&(f=c)),d=this._yoyo&&_&1,d&&(x=this._yEase,f=c-f),m=ir(this._tTime,g),f===a&&!s&&this._initted)return this._tTime=h,this;_!==m&&(S&&this._yEase&&wu(S,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=s=1,this.render(de(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(uu(this,u?i:f,s,r,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!r&&!_&&(Qe(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;S&&S.render(i<0?i:!f&&d?-Gt:S._dur*S._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&ka(this,i,r,s),Qe(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Qe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ka(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Xn(this,1),!r&&!(u&&!a)&&(h||a||d)&&(Qe(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,s,a){Rr||Ge.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||mo(this,l),c=this._ease(l/this._dur),B_(this,i,r,s,a,c,l)?this.resetTo(i,r,s,a):(Ds(this,0),this.parent||ou(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Sr(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,zn&&zn.vars.overwrite!==!0)._first||Sr(this),this.parent&&s!==this.timeline.totalDuration()&&rr(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Je(i):a,c=this._ptLookup,u=this._pt,h,f,p,_,g,m,d;if((!r||r==="all")&&g_(a,l))return r==="all"&&(this._pt=0),Sr(this);for(h=this._op=this._op||[],r!=="all"&&(fe(r)&&(g={},Re(r,function(y){return g[y]=1}),r=g),r=k_(a,r)),d=a.length;d--;)if(~l.indexOf(a[d])){f=c[d],r==="all"?(h[d]=r,_=f,p={}):(p=h[d]=h[d]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ls(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Sr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return wr(1,arguments)},t.delayedCall=function(i,r,s,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},t.fromTo=function(i,r,s){return wr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,s){return jt.killTweensOf(i,r,s)},t}(ar);tn(oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Re("staggerTo,staggerFrom,staggerFromTo",function(o){oe[o]=function(){var t=new Ae,e=Va.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var go=function(t,e,n){return t[e]=n},Lu=function(t,e,n){return t[e](n)},V_=function(t,e,n,i){return t[e](i.fp,n)},H_=function(t,e,n){return t.setAttribute(e,n)},_o=function(t,e){return $t(t[e])?Lu:ao(t[e])&&t.setAttribute?H_:go},Ru=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},W_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Du=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},xo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},X_=function(t,e,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(t,e,n),r=s},q_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ls(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Y_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Iu=function(t){for(var e=t._pt,n,i,r,s;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:s)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:s=e,e=n}t._pt=r},De=function(){function o(e,n,i,r,s,a,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=a||Ru,this.d=l||this,this.set=c||go,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Y_,this.m=n,this.mt=r,this.tween=i},o}();Re(ho+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return uo[o]=1});We.TweenMax=We.TweenLite=oe;We.TimelineLite=We.TimelineMax=Ae;jt=new Ae({sortChildren:!1,defaults:nr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});He.stringFilter=yu;var or=[],ms={},j_=[],lc=0,ba=function(t){return(ms[t]||j_).map(function(e){return e()})},qa=function(){var t=Date.now(),e=[];t-lc>2&&(ba("matchMediaInit"),or.forEach(function(n){var i=n.queries,r=n.conditions,s,a,l,c;for(a in i)s=je.matchMedia(i[a]).matches,s&&(l=1),s!==r[a]&&(r[a]=s,c=1);c&&(n.revert(),l&&e.push(n))}),ba("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),lc=t,ba("matchMedia"))},Uu=function(){function o(e,n){this.selector=n&&Ha(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){$t(n)&&(r=i,i=n,n=$t);var s=this,a=function(){var c=ae,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=Ha(r)),ae=s,h=i.apply(s,arguments),$t(h)&&s._r.push(h),ae=c,s.selector=u,s.isReverted=!1,h};return s.last=a,n===$t?a(s):n?s[n]=a:a},t.ignore=function(n){var i=ae;ae=null,n(this),ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof oe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ar)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=or.indexOf(this);~a&&or.splice(a,1)}},t.revert=function(n){this.kill(n||{})},o}(),Z_=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){vn(n)||(n={matches:n});var s=new Uu(0,r||this.scope),a=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=je.matchMedia(n[c]),l&&(or.indexOf(s)<0&&or.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(qa):l.addEventListener("change",qa)));return u&&i(s),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ys={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return vu(i)})},timeline:function(t){return new Ae(t)},getTweensOf:function(t,e){return jt.getTweensOf(t,e)},getProperty:function(t,e,n,i){fe(t)&&(t=Je(t)[0]);var r=hi(t||{}).get,s=n?au:su;return n==="native"&&(n=""),t&&(e?s((Be[e]&&Be[e].get||r)(t,e,n,i)):function(a,l,c){return s((Be[a]&&Be[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Je(t),t.length>1){var i=t.map(function(u){return Ie.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var s=Be[e],a=hi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=s?function(u){var h=new s;Xi._pt=0,h.init(t,n?u+n:u,Xi,0,[t]),h.render(1,h),Xi._pt&&xo(1,Xi)}:a.set(t,l);return s?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,r=Ie.to(t,vi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(e,l,c,u)};return s.tween=r,s},isTweening:function(t){return jt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=di(t.ease,nr.ease)),ic(nr,t||{})},config:function(t){return ic(He,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,s=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Be[a]&&!We[a]&&xs(e+" effect requires "+a+" plugin.")}),va[e]=function(a,l,c){return n(Je(a),tn(l||{},r),c)},s&&(Ae.prototype[e]=function(a,l,c){return this.add(va[e](a,vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ut[t]=di(e)},parseEase:function(t,e){return arguments.length?di(t,e):Ut},getById:function(t){return jt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ae(t),i,r;for(n.smoothChildTiming=Le(t.smoothChildTiming),jt.remove(n),n._dp=0,n._time=n._tTime=jt._time,i=jt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof oe&&i.vars.onComplete===i._targets[0]))&&mn(n,i,i._start-i._delay),i=r;return mn(jt,n,0),n},context:function(t,e){return t?new Uu(t,e):ae},matchMedia:function(t){return new Z_(t)},matchMediaRefresh:function(){return or.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||qa()},addEventListener:function(t,e){var n=ms[t]||(ms[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ms[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:C_,wrapYoyo:P_,distribute:du,random:mu,snap:pu,normalize:A_,getUnit:xe,clamp:b_,splitColor:Mu,toArray:Je,selector:Ha,mapRange:_u,pipe:T_,unitize:E_,interpolate:L_,shuffle:fu},install:tu,effects:va,ticker:Ge,updateRoot:Ae.updateRoot,plugins:Be,globalTimeline:jt,core:{PropTween:De,globals:eu,Tween:oe,Timeline:Ae,Animation:ar,getCache:hi,_removeLinkedListItem:Ls,reverting:function(){return ve},context:function(t){return t&&ae&&(ae.data.push(t),t._ctx=ae),ae},suppressOverwrites:function(t){return so=t}}};Re("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ys[o]=oe[o]});Ge.add(Ae.updateRoot);Xi=ys.to({},{duration:0});var K_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},$_=function(t,e){var n=t._targets,i,r,s;for(i in e)for(r=n.length;r--;)s=t._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=K_(s,i)),s&&s.modifier&&s.modifier(e[i],t,n[r],i))},wa=function(t,e){return{name:t,rawVars:1,init:function(i,r,s){s._onInit=function(a){var l,c;if(fe(r)&&(l={},Re(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}$_(a,r)}}}},Ie=ys.registerPlugin({name:"attr",init:function(t,e,n,i,r){var s,a,l;this.tween=n;for(s in e)l=t.getAttribute(s)||"",a=this.add(t,"setAttribute",(l||0)+"",e[s],i,r,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(t,e){for(var n=e._pt;n;)ve?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},wa("roundProps",Wa),wa("modifiers"),wa("snap",pu))||ys;oe.version=Ae.version=Ie.version="3.11.5";Qc=1;oo()&&sr();Ut.Power0;Ut.Power1;Ut.Power2;Ut.Power3;Ut.Power4;Ut.Linear;Ut.Quad;Ut.Cubic;Ut.Quart;Ut.Quint;Ut.Strong;Ut.Elastic;Ut.Back;Ut.SteppedEase;Ut.Bounce;Ut.Sine;Ut.Expo;Ut.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cc,Bn,Ki,vo,ci,uc,Mo,J_=function(){return typeof window<"u"},Dn={},si=180/Math.PI,$i=Math.PI/180,Gi=Math.atan2,hc=1e8,So=/([A-Z])/g,Q_=/(left|right|width|margin|padding|x)/i,t0=/[\s,\(]\S/,gn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ya=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},e0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},n0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},i0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ou=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Nu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},r0=function(t,e,n){return t.style[e]=n},s0=function(t,e,n){return t.style.setProperty(e,n)},a0=function(t,e,n){return t._gsap[e]=n},o0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},l0=function(t,e,n,i,r){var s=t._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},c0=function(t,e,n,i,r){var s=t._gsap;s[e]=n,s.renderTransform(r,s)},Zt="transform",cn=Zt+"Origin",u0=function o(t,e){var n=this,i=this.target,r=i.style;if(t in Dn){if(this.tfm=this.tfm||{},t!=="transform")t=gn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return n.tfm[s]=An(i,s)}):this.tfm[t]=i._gsap.x?i._gsap[t]:An(i,t);else return gn.transform.split(",").forEach(function(s){return o.call(n,s,e)});if(this.props.indexOf(Zt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(cn,e,"")),t=Zt}(r||e)&&this.props.push(t,e,r[t])},Fu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},h0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,s;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(So,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Mo(),(!r||!r.isStart)&&!n[Zt]&&(Fu(n),i.uncache=1)}},zu=function(t,e){var n={target:t,props:[],revert:h0,save:u0};return t._gsap||Ie.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Bu,ja=function(t,e){var n=Bn.createElementNS?Bn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Bn.createElement(t);return n.style?n:Bn.createElement(t)},xn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(So,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,lr(e)||e,1)||""},fc="O,Moz,ms,Ms,Webkit".split(","),lr=function(t,e,n){var i=e||ci,r=i.style,s=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(fc[s]+t in r););return s<0?null:(s===3?"ms":s>=0?fc[s]:"")+t},Za=function(){J_()&&window.document&&(cc=window,Bn=cc.document,Ki=Bn.documentElement,ci=ja("div")||{style:{}},ja("div"),Zt=lr(Zt),cn=Zt+"Origin",ci.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bu=!!lr("perspective"),Mo=Ie.core.reverting,vo=1)},Ta=function o(t){var e=ja("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(Ki.appendChild(e),e.appendChild(this),this.style.display="block",t)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ki.removeChild(e),this.style.cssText=r,s},dc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ku=function(t){var e;try{e=t.getBBox()}catch{e=Ta.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ta||(e=Ta.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+dc(t,["x","cx","x1"])||0,y:+dc(t,["y","cy","y1"])||0,width:0,height:0}:e},Gu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ku(t))},Dr=function(t,e){if(e){var n=t.style;e in Dn&&e!==cn&&(e=Zt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(So,"-$1").toLowerCase())):n.removeAttribute(e)}},kn=function(t,e,n,i,r,s){var a=new De(t._pt,e,n,0,1,s?Nu:Ou);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},pc={deg:1,rad:1,turn:1},f0={grid:1,flex:1},qn=function o(t,e,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",a=ci.style,l=Q_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",_,g,m,d;return i===s||!r||pc[i]||pc[s]?r:(s!=="px"&&!f&&(r=o(t,e,n,"px")),d=t.getCTM&&Gu(t),(p||s==="%")&&(Dn[e]||~e.indexOf("adius"))?(_=d?t.getBBox()[l?"width":"height"]:t[u],ee(p?r/_*h:r/100*_)):(a[l?"width":"height"]=h+(f?s:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Bn||!g.appendChild)&&(g=Bn.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Ge.time&&!m.uncache?ee(r/m.width*h):((p||s==="%")&&!f0[xn(g,"display")]&&(a.position=xn(t,"position")),g===t&&(a.position="static"),g.appendChild(ci),_=ci[u],g.removeChild(ci),a.position="absolute",l&&p&&(m=hi(g),m.time=Ge.time,m.width=g[u]),ee(f?_*r/h:_&&r?h/_*r:0))))},An=function(t,e,n,i){var r;return vo||Za(),e in gn&&e!=="transform"&&(e=gn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Dn[e]&&e!=="transform"?(r=Ur(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ws(xn(t,cn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=bs[e]&&bs[e](t,e,n)||xn(t,e)||iu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qn(t,e,r,n)+n:r},d0=function(t,e,n,i){if(!n||n==="none"){var r=lr(e,t,1),s=r&&xn(t,r,1);s&&s!==n?(e=r,n=s):e==="borderColor"&&(n=xn(t,"borderTopColor"))}var a=new De(this._pt,t.style,e,0,1,Du),l=0,c=0,u,h,f,p,_,g,m,d,y,S,x,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=xn(t,e)||i,t.style[e]=n),u=[n,i],yu(u),n=u[0],i=u[1],f=n.match(Wi)||[],M=i.match(Wi)||[],M.length){for(;h=Wi.exec(i);)m=h[0],y=i.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=Zi(p,m)+x),d=parseFloat(m),S=m.substr((d+"").length),l=Wi.lastIndex-S.length,S||(S=S||He.units[e]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(p=qn(t,e,g,S)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:p,c:d-p,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Nu:Ou;return $c.test(i)&&(a.e=0),this._pt=a,a},mc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},p0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=mc[n]||n,e[1]=mc[i]||i,e.join(" ")},m0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,s=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Dn[a]&&(l=1,a=a==="transformOrigin"?cn:Zt),Dr(n,a);l&&(Dr(n,Zt),s&&(s.svg&&n.removeAttribute("transform"),Ur(n,1),s.uncache=1,Fu(i)))}},bs={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var s=t._pt=new De(t._pt,e,n,0,0,m0);return s.u=i,s.pr=-10,s.tween=r,t._props.push(n),1}}},Ir=[1,0,0,1,0,0],Vu={},Hu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},gc=function(t){var e=xn(t,Zt);return Hu(e)?Ir:e.substr(7).match(Kc).map(ee)},yo=function(t,e){var n=t._gsap||hi(t),i=t.style,r=gc(t),s,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ir:r):(r===Ir&&!t.offsetParent&&t!==Ki&&!n.svg&&(l=i.display,i.display="block",s=t.parentNode,(!s||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Ki.appendChild(t)),r=gc(t),l?i.display=l:Dr(t,"display"),c&&(a?s.insertBefore(t,a):s?s.appendChild(t):Ki.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ka=function(t,e,n,i,r,s){var a=t._gsap,l=r||yo(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],d=l[4],y=l[5],S=e.split(" "),x=parseFloat(S[0])||0,M=parseFloat(S[1])||0,A,P,C,v;n?l!==Ir&&(P=p*m-_*g)&&(C=x*(m/P)+M*(-g/P)+(g*y-m*d)/P,v=x*(-_/P)+M*(p/P)-(p*y-_*d)/P,x=C,M=v):(A=ku(t),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),M=A.y+(~(S[1]||S[0]).indexOf("%")?M/100*A.height:M)),i||i!==!1&&a.smooth?(d=x-c,y=M-u,a.xOffset=h+(d*p+y*g)-d,a.yOffset=f+(d*_+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[cn]="0px 0px",s&&(kn(s,a,"xOrigin",c,x),kn(s,a,"yOrigin",u,M),kn(s,a,"xOffset",h,a.xOffset),kn(s,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+M)},Ur=function(t,e){var n=t._gsap||new Eu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,s="px",a="deg",l=getComputedStyle(t),c=xn(t,cn)||"0",u,h,f,p,_,g,m,d,y,S,x,M,A,P,C,v,w,z,B,D,O,F,$,Z,W,et,J,_t,it,V,j,rt;return u=h=f=g=m=d=y=S=x=0,p=_=1,n.svg=!!(t.getCTM&&Gu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Zt]!=="none"?l[Zt]:"")),i.scale=i.rotate=i.translate="none"),P=yo(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),Ka(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,P)),M=n.xOrigin||0,A=n.yOrigin||0,P!==Ir&&(z=P[0],B=P[1],D=P[2],O=P[3],u=F=P[4],h=$=P[5],P.length===6?(p=Math.sqrt(z*z+B*B),_=Math.sqrt(O*O+D*D),g=z||B?Gi(B,z)*si:0,y=D||O?Gi(D,O)*si+g:0,y&&(_*=Math.abs(Math.cos(y*$i))),n.svg&&(u-=M-(M*z+A*D),h-=A-(M*B+A*O))):(rt=P[6],V=P[7],J=P[8],_t=P[9],it=P[10],j=P[11],u=P[12],h=P[13],f=P[14],C=Gi(rt,it),m=C*si,C&&(v=Math.cos(-C),w=Math.sin(-C),Z=F*v+J*w,W=$*v+_t*w,et=rt*v+it*w,J=F*-w+J*v,_t=$*-w+_t*v,it=rt*-w+it*v,j=V*-w+j*v,F=Z,$=W,rt=et),C=Gi(-D,it),d=C*si,C&&(v=Math.cos(-C),w=Math.sin(-C),Z=z*v-J*w,W=B*v-_t*w,et=D*v-it*w,j=O*w+j*v,z=Z,B=W,D=et),C=Gi(B,z),g=C*si,C&&(v=Math.cos(C),w=Math.sin(C),Z=z*v+B*w,W=F*v+$*w,B=B*v-z*w,$=$*v-F*w,z=Z,F=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=ee(Math.sqrt(z*z+B*B+D*D)),_=ee(Math.sqrt($*$+rt*rt)),C=Gi(F,$),y=Math.abs(C)>2e-4?C*si:0,x=j?1/(j<0?-j:j):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Hu(xn(t,Zt)),Z&&t.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(p*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=ee(p),n.scaleY=ee(_),n.rotation=ee(g)+a,n.rotationX=ee(m)+a,n.rotationY=ee(d)+a,n.skewX=y+a,n.skewY=S+a,n.transformPerspective=x+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[cn]=ws(c)),n.xOffset=n.yOffset=0,n.force3D=He.force3D,n.renderTransform=n.svg?_0:Bu?Wu:g0,n.uncache=0,n},ws=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ea=function(t,e,n){var i=xe(e);return ee(parseFloat(e)+parseFloat(qn(t,"x",n+"px",i)))+i},g0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Wu(t,e)},ei="0deg",xr="0px",ni=") ",Wu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,d=n.force3D,y=n.target,S=n.zOrigin,x="",M=d==="auto"&&t&&t!==1||d===!0;if(S&&(h!==ei||u!==ei)){var A=parseFloat(u)*$i,P=Math.sin(A),C=Math.cos(A),v;A=parseFloat(h)*$i,v=Math.cos(A),s=Ea(y,s,P*v*-S),a=Ea(y,a,-Math.sin(A)*-S),l=Ea(y,l,C*v*-S+S)}m!==xr&&(x+="perspective("+m+ni),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(M||s!==xr||a!==xr||l!==xr)&&(x+=l!==xr||M?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+ni),c!==ei&&(x+="rotate("+c+ni),u!==ei&&(x+="rotateY("+u+ni),h!==ei&&(x+="rotateX("+h+ni),(f!==ei||p!==ei)&&(x+="skew("+f+", "+p+ni),(_!==1||g!==1)&&(x+="scale("+_+", "+g+ni),y.style[Zt]=x||"translate(0, 0)"},_0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,d=n.yOffset,y=n.forceCSS,S=parseFloat(s),x=parseFloat(a),M,A,P,C,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$i,c*=$i,M=Math.cos(l)*h,A=Math.sin(l)*h,P=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=$i,v=Math.tan(c-u),v=Math.sqrt(1+v*v),P*=v,C*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),M*=v,A*=v)),M=ee(M),A=ee(A),P=ee(P),C=ee(C)):(M=h,C=f,A=P=0),(S&&!~(s+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=qn(p,"x",s,"px"),x=qn(p,"y",a,"px")),(_||g||m||d)&&(S=ee(S+_-(_*M+g*P)+m),x=ee(x+g-(_*A+g*C)+d)),(i||r)&&(v=p.getBBox(),S=ee(S+i/100*v.width),x=ee(x+r/100*v.height)),v="matrix("+M+","+A+","+P+","+C+","+S+","+x+")",p.setAttribute("transform",v),y&&(p.style[Zt]=v)},x0=function(t,e,n,i,r){var s=360,a=fe(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?si:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*hc)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*hc)%s-~~(c/s)*s)),t._pt=f=new De(t._pt,e,n,i,c,e0),f.e=u,f.u="deg",t._props.push(n),f},_c=function(t,e){for(var n in e)t[n]=e[n];return t},v0=function(t,e,n){var i=_c({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,h,f,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Zt]=e,a=Ur(n,1),Dr(n,Zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Zt],s[Zt]=e,a=Ur(n,1),s[Zt]=c);for(l in Dn)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(p=xe(c),_=xe(u),h=p!==_?qn(n,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new De(t._pt,a,l,h,f-h,Ya),t._pt.u=_||0,t._props.push(l));_c(a,i)};Re("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",s=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?o+a:"border"+a+o});bs[t>1?"border"+o:o]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=s.map(function(_){return An(a,_,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},s.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,h)}});var Xu={name:"css",register:Za,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var s=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,p,_,g,m,d,y,S,x,M,A,P,C;vo||Za(),this.styles=this.styles||zu(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Be[g]&&Au(g,e,n,i,t,r)))){if(p=typeof u,_=bs[g],p==="function"&&(u=u.call(n,i,t,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Lr(u)),_)_(this,t,g,u,n)&&(P=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Hn.lastIndex=0,Hn.test(c)||(m=xe(c),d=xe(u)),d?m!==d&&(c=qn(t,g,c,d)+d):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,g),s.push(g),C.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],fe(c)&&~c.indexOf("random(")&&(c=Lr(c)),xe(c+"")||(c+=He.units[g]||xe(An(t,g))||""),(c+"").charAt(1)==="="&&(c=An(t,g))):c=An(t,g),f=parseFloat(c),y=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in gn&&(g==="autoAlpha"&&(f===1&&An(t,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),kn(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=gn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Dn,S){if(this.styles.save(g),x||(M=t._gsap,M.renderTransform&&!e.parseTransform||Ur(t,e.parseTransform),A=e.smoothOrigin!==!1&&M.smooth,x=this._pt=new De(this._pt,a,Zt,0,1,M.renderTransform,M,0,-1),x.dep=1),g==="scale")this._pt=new De(this._pt,M,"scaleY",M.scaleY,(y?Zi(M.scaleY,y+h):h)-M.scaleY||0,Ya),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(cn,0,a[cn]),u=p0(u),M.svg?Ka(t,u,0,A,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==M.zOrigin&&kn(this,M,"zOrigin",M.zOrigin,d),kn(this,a,g,ws(c),ws(u)));continue}else if(g==="svgOrigin"){Ka(t,u,1,A,0,this);continue}else if(g in Vu){x0(this,M,g,f,y?Zi(f,y+u):u);continue}else if(g==="smoothOrigin"){kn(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){v0(this,u,t);continue}}else g in a||(g=lr(g)||g);if(S||(h||h===0)&&(f||f===0)&&!t0.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),d=xe(u)||(g in He.units?He.units[g]:m),m!==d&&(f=qn(t,g,c,d)),this._pt=new De(this._pt,S?M:a,g,f,(y?Zi(f,y+h):h)-f,!S&&(d==="px"||g==="zIndex")&&e.autoRound!==!1?i0:Ya),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=n0);else if(g in a)d0.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,i,r);else if(g!=="parseTransform"){co(g,u);continue}S||(g in a?C.push(g,0,a[g]):C.push(g,1,c||t[g])),s.push(g)}}P&&Iu(this)},render:function(t,e){if(e.tween._time||!Mo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:An,aliases:gn,getSetter:function(t,e,n){var i=gn[e];return i&&i.indexOf(",")<0&&(e=i),e in Dn&&e!==cn&&(t._gsap.x||An(t,"x"))?n&&uc===n?e==="scale"?o0:a0:(uc=n||{})&&(e==="scale"?l0:c0):t.style&&!ao(t.style[e])?r0:~e.indexOf("-")?s0:_o(t,e)},core:{_removeProperty:Dr,_getMatrix:yo}};Ie.utils.checkPrefix=lr;Ie.core.getStyleSaver=zu;(function(o,t,e,n){var i=Re(o+","+t+","+e,function(r){Dn[r]=1});Re(t,function(r){He.units[r]="deg",Vu[r]=1}),gn[i[13]]=o+","+t,Re(n,function(r){var s=r.split(":");gn[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Re("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){He.units[o]="px"});Ie.registerPlugin(Xu);var Is=Ie.registerPlugin(Xu)||Ie;Is.core.Tween;const jn=new t_,M0=new io(2,0),S0=new n_({color:"#967259",roughness:.5}),Us=new Pn(M0,S0);jn.add(Us);const y0=new eo(1,16),bo=new un,qu=[];for(var xc=0;xc<7e3;xc++)qu.push(Math.random()*200-100,Math.random()*200-100,Math.random()*200-100);bo.setAttribute("position",new Pe(qu,3));bo.setAttribute("uv",y0.attributes.uv);const b0=new qc({color:16777215,size:.1}),w0=new e_(bo,b0);jn.add(w0);const wo=new ro(14666927,1,100);wo.position.set(0,10,10);wo.intensity=1.25;jn.add(wo);const To=new ro(8733762,1,100);To.position.set(0,-10,0);To.intensity=1.25;jn.add(To);const Eo=new ro(16777215,1,100);Eo.position.set(-10,0,0);Eo.intensity=1.25;jn.add(Eo);const Ke={width:window.innerWidth,height:window.innerHeight},Mi=new ke(45,Ke.width/Ke.height,.1,100);Mi.position.z=20;jn.add(Mi);const Yu=document.querySelector(".webgl"),Br=new Xc({canvas:Yu});Br.setSize(Ke.width,Ke.height);Br.setPixelRatio(2);Br.render(jn,Mi);const hr=new a_(Mi,Yu);hr.enableDamping=!0;hr.enablePan=!1;hr.enableZoom=!1;hr.autoRotate=!0;hr.autoRotateSpeed=1;window.addEventListener("resize",()=>{Ke.width=window.innerWidth,Ke.height=window.innerHeight,Mi.aspect=Ke.width/Ke.height,Mi.updateProjectionMatrix(),Br.setSize(Ke.width,Ke.height)});const ju=()=>{hr.update(),Br.render(jn,Mi),window.requestAnimationFrame(ju)};ju();const Ao=Is.timeline({default:{duration:1}});Ao.fromTo(Us.scale,{z:0,x:0,y:0},{z:1,x:1,y:1});Ao.fromTo("nav",{y:"-100%"},{y:"0%"});Ao.fromTo(".title",{opacity:0},{opacity:1});let Co=!1,Ts=[];window.addEventListener("mousedown",()=>Co=!0);window.addEventListener("mouseup",()=>Co=!1);window.addEventListener("mousemove",o=>{if(Co){Ts=[Math.round(o.pageX/Ke.width*255),Math.round(o.pageY/Ke.height*255),150];let t=new zt(`rgb(${Ts.join(",")})`);Is.to(Us.material.color,{r:t.r,g:t.g,b:t.b})}});let Po=!1;window.addEventListener("touchstart",()=>Po=!0);window.addEventListener("touchend",()=>Po=!1);window.addEventListener("touchmove",o=>{if(Po){Ts=[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)];let t=new zt(`rgb(${Ts.join(",")})`);Is.to(Us.material.color,{r:t.r,g:t.g,b:t.b})}});
