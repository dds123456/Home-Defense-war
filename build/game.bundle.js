(()=>{var oo="160";var Vc=0,Co=1,Wc=2;var ic=1,lo=2,pn=3,sn=0,Ot=1,dt=2;var Pn=0,wi=1,Ns=2,Po=3,Io=4,Xc=5,qn=100,qc=101,Yc=102,Lo=103,Do=104,$c=200,Zc=201,Jc=202,Kc=203,Sa=204,ba=205,Qc=206,jc=207,eh=208,th=209,nh=210,ih=211,sh=212,rh=213,ah=214,oh=0,lh=1,ch=2,Os=3,hh=4,uh=5,dh=6,fh=7,sc=0,ph=1,mh=2,In=0,gh=1,_h=2,vh=3,co=4,yh=5,xh=6;var rc=300,Ai=301,Ri=302,wa=303,Ea=304,_r=306,Ta=1e3,jt=1001,Aa=1002,Ke=1003,Uo=1004;var Gr=1005;var Yt=1006,Mh=1007;var Zi=1008;var Ln=1009,Sh=1010,bh=1011,ho=1012,ac=1013,Rn=1014,Cn=1015,Ji=1016,oc=1017,lc=1018,Zn=1020,wh=1021,Vt=1023,Eh=1024,Th=1025,Jn=1026,Ci=1027,Ah=1028,cc=1029,Rh=1030,hc=1031,uc=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,No=35840,Oo=35841,Fo=35842,Bo=35843,dc=36196,zo=37492,Ho=37496,ko=37808,Go=37809,Vo=37810,Wo=37811,Xo=37812,qo=37813,Yo=37814,$o=37815,Zo=37816,Jo=37817,Ko=37818,Qo=37819,jo=37820,el=37821,Yr=36492,tl=36494,nl=36495,Ch=36283,il=36284,sl=36285,rl=36286;var Fs=2300,Bs=2301,$r=2302,al=2400,ol=2401,ll=2402;var fc=3e3,Kn=3001,Ph=3200,Ih=3201,pc=0,Lh=1,$t="",ut="srgb",vn="srgb-linear",uo="display-p3",vr="display-p3-linear",zs="linear",it="srgb",Hs="rec709",ks="p3";var ni=7680;var cl=519,Dh=512,Uh=513,Nh=514,mc=515,Oh=516,Fh=517,Bh=518,zh=519,Ra=35044;var hl="300 es",Ca=1035,_n=2e3,Gs=2001,Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zr=Math.PI/180,Pa=180/Math.PI;function Dn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function Hh(i,e){return(i%e+e)%e}function Jr(i,e,t){return(1-t)*i+t*e}function ul(i){return(i&i-1)===0&&i!==0}function Ia(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],u=s[6],y=s[1],v=s[4],E=s[7],R=s[2],A=s[5],T=s[8];return r[0]=a*_+o*y+l*R,r[3]=a*m+o*v+l*A,r[6]=a*u+o*E+l*T,r[1]=c*_+h*y+d*R,r[4]=c*m+h*v+d*A,r[7]=c*u+h*E+d*T,r[2]=f*_+p*y+g*R,r[5]=f*m+p*v+g*A,r[8]=f*u+p*E+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Kr.makeScale(e,t)),this}rotate(e){return this.premultiply(Kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kr=new Ge;function gc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){let i=Ki("canvas");return i.style.display="block",i}var dl={};function Yi(i){i in dl||(dl[i]=!0,console.warn(i))}var fl=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pl=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[vn]:{transfer:zs,primaries:Hs,toReference:i=>i,fromReference:i=>i},[ut]:{transfer:it,primaries:Hs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vr]:{transfer:zs,primaries:ks,toReference:i=>i.applyMatrix3(pl),fromReference:i=>i.applyMatrix3(fl)},[uo]:{transfer:it,primaries:ks,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pl),fromReference:i=>i.applyMatrix3(fl).convertLinearToSRGB()}},Gh=new Set([vn,vr]),Ze={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=cs[e].toReference,s=cs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return cs[i].primaries},getTransfer:function(i){return i===$t?zs:cs[i].transfer}};function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ii,Vs=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=Ki("canvas")),ii.width=e.width,ii.height=e.height;let n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ki("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vh=0,Ws=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jr(s[a].image)):r.push(jr(s[a]))}else r=jr(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wh=0,At=class i extends Un{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jt,s=jt,r=Yt,a=Zi,o=Vt,l=Ln,c=i.DEFAULT_ANISOTROPY,h=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Dn(),this.name="",this.source=new Ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Kn?ut:$t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Kn:fc}set encoding(e){Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kn?ut:$t}};At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=rc;At.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,E=(p+1)/2,R=(u+1)/2,A=(h+f)/4,T=(d+_)/4,z=(g+m)/4;return v>E&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=T/n):E>R?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=A/s,r=z/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=z/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},La=class extends Un{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Yi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kn?ut:$t),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new At(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ws(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends La{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xs=class extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Da=class extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-o,u=l*f+c*p+h*g+d*_,y=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let R=Math.sqrt(v),A=Math.atan2(R,u*y);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let E=o*y;if(l=l*m+f*E,c=c*m+p*E,h=h*m+g*E,d=d*m+_*E,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-o*p,e[t+2]=c*g+h*p+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ea=new P,ml=new Nn,Qn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),us.subVectors(this.max,zi),si.subVectors(e.a,zi),ri.subVectors(e.b,zi),ai.subVectors(e.c,zi),bn.subVectors(ri,si),wn.subVectors(ai,ri),kn.subVectors(si,ai);let t=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-kn.z,kn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,kn.z,0,-kn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-kn.y,kn.x,0];return!ta(t,si,ri,ai,us)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,si,ri,ai,us))?!1:(ds.crossVectors(bn,wn),t=[ds.x,ds.y,ds.z],ta(t,si,ri,ai,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},cn=[new P,new P,new P,new P,new P,new P,new P,new P],Jt=new P,hs=new Qn,si=new P,ri=new P,ai=new P,bn=new P,wn=new P,kn=new P,zi=new P,us=new P,ds=new P,Gn=new P;function ta(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);let o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Xh=new Qn,Hi=new P,na=new P,Qi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);let t=Hi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(na)),this.expandByPoint(Hi.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new P,ia=new P,fs=new P,En=new P,sa=new P,ps=new P,ra=new P,qs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ia.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),En.copy(this.origin).sub(ia);let r=e.distanceTo(t)*.5,a=-this.direction.dot(fs),o=En.dot(this.direction),l=-En.dot(fs),c=En.lengthSq(),h=Math.abs(1-a*a),d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ia).addScaledVector(fs,f),p}intersectSphere(e,t){hn.subVectors(e.center,this.origin);let n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,s,r){sa.subVectors(t,e),ps.subVectors(n,e),ra.crossVectors(sa,ps);let a=this.direction.dot(ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);let l=o*this.direction.dot(ps.crossVectors(En,ps));if(l<0)return null;let c=o*this.direction.dot(sa.cross(En));if(c<0||l+c>a)return null;let h=-o*En.dot(ra);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,f,p,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,d,f,p,g,_,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),a=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qh,e,Yh)}lookAt(e,t,n){let s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Tn.crossVectors(n,kt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Tn.crossVectors(n,kt)),Tn.normalize(),ms.crossVectors(kt,Tn),s[0]=Tn.x,s[4]=ms.x,s[8]=kt.x,s[1]=Tn.y,s[5]=ms.y,s[9]=kt.y,s[2]=Tn.z,s[6]=ms.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],u=n[14],y=n[3],v=n[7],E=n[11],R=n[15],A=s[0],T=s[4],z=s[8],M=s[12],S=s[1],L=s[5],k=s[9],Q=s[13],I=s[2],U=s[6],V=s[10],q=s[14],X=s[3],W=s[7],J=s[11],ee=s[15];return r[0]=a*A+o*S+l*I+c*X,r[4]=a*T+o*L+l*U+c*W,r[8]=a*z+o*k+l*V+c*J,r[12]=a*M+o*Q+l*q+c*ee,r[1]=h*A+d*S+f*I+p*X,r[5]=h*T+d*L+f*U+p*W,r[9]=h*z+d*k+f*V+p*J,r[13]=h*M+d*Q+f*q+p*ee,r[2]=g*A+_*S+m*I+u*X,r[6]=g*T+_*L+m*U+u*W,r[10]=g*z+_*k+m*V+u*J,r[14]=g*M+_*Q+m*q+u*ee,r[3]=y*A+v*S+E*I+R*X,r[7]=y*T+v*L+E*U+R*W,r[11]=y*z+v*k+E*V+R*J,r[15]=y*M+v*Q+E*q+R*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+u*(-s*o*h-t*l*d+t*o*f+s*a*d-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],y=d*m*c-_*f*c+_*l*p-o*m*p-d*l*u+o*f*u,v=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,E=h*_*c-g*d*c+g*o*p-a*_*p-h*o*u+a*d*u,R=g*d*l-h*_*l-g*o*f+a*_*f+h*o*m-a*d*m,A=t*y+n*v+s*E+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=y*T,e[1]=(_*f*r-d*m*r-_*s*p+n*m*p+d*s*u-n*f*u)*T,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*u+n*l*u)*T,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*T,e[4]=v*T,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*u+t*f*u)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*u-t*l*u)*T,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*T,e[8]=E*T,e[9]=(g*d*r-h*_*r-g*n*p+t*_*p+h*n*u-t*d*u)*T,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*u+t*o*u)*T,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*p-t*o*p)*T,e[12]=R*T,e[13]=(h*_*s-g*d*s+g*n*f-t*_*f-h*n*m+t*d*m)*T,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*T,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*f+t*o*f)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,g=r*d,_=a*h,m=a*d,u=o*d,y=l*c,v=l*h,E=l*d,R=n.x,A=n.y,T=n.z;return s[0]=(1-(_+u))*R,s[1]=(p+E)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(p-E)*A,s[5]=(1-(f+u))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+v)*T,s[9]=(m-y)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=oi.set(s[0],s[1],s[2]).length(),a=oi.set(s[4],s[5],s[6]).length(),o=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);let c=1/r,h=1/a,d=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=d,Kt.elements[9]*=d,Kt.elements[10]*=d,t.setFromRotationMatrix(Kt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=_n){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===_n)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Gs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_n){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),f=(t+e)*c,p=(n+s)*h,g,_;if(o===_n)g=(a+r)*d,_=-2*d;else if(o===Gs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},oi=new P,Kt=new _t,qh=new P(0,0,0),Yh=new P(1,1,1),Tn=new P,ms=new P,kt=new P,gl=new _t,_l=new Nn,Ys=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ys.DEFAULT_ORDER="XYZ";var ji=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$h=0,vl=new P,li=new Nn,un=new _t,gs=new P,ki=new P,Zh=new P,Jh=new Nn,yl=new P(1,0,0),xl=new P(0,1,0),Ml=new P(0,0,1),Kh={type:"added"},Qh={type:"removed"},Rt=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Ys,n=new Nn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ge}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(yl,e)}rotateY(e){return this.rotateOnAxis(xl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return vl.copy(e).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yl,e)}translateY(e){return this.translateOnAxis(xl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(ki,gs,this.up):un.lookAt(gs,ki,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),li.setFromRotationMatrix(un),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,Zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Jh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new P(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=new P,dn=new P,aa=new P,fn=new P,ci=new P,hi=new P,Sl=new P,oa=new P,la=new P,ca=new P,_s=!1,$n=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qt.subVectors(e,t),s.cross(Qt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Qt.subVectors(s,t),dn.subVectors(n,t),aa.subVectors(e,t);let a=Qt.dot(Qt),o=Qt.dot(dn),l=Qt.dot(aa),c=dn.dot(dn),h=dn.dot(aa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,s,r,a,o,l){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static isFrontFacing(e,t,n,s){return Qt.subVectors(n,t),dn.subVectors(e,t),Qt.cross(dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Qt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ci.subVectors(s,n),hi.subVectors(r,n),oa.subVectors(e,n);let l=ci.dot(oa),c=hi.dot(oa);if(l<=0&&c<=0)return t.copy(n);la.subVectors(e,s);let h=ci.dot(la),d=hi.dot(la);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ci,a);ca.subVectors(e,r);let p=ci.dot(ca),g=hi.dot(ca);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(hi,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Sl.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Sl,o);let u=1/(m+_+f);return a=_*u,o=f*u,t.copy(n).addScaledVector(ci,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},vs={h:0,s:0,l:0};function ha(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Hh(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ha(a,r,e+1/3),this.g=ha(a,r,e),this.b=ha(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=_c[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Ze.fromWorkingColorSpace(Et.copy(this),e),Math.round(Nt(Et.r*255,0,255))*65536+Math.round(Nt(Et.g*255,0,255))*256+Math.round(Nt(Et.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Et.copy(this),t);let n=Et.r,s=Et.g,r=Et.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=ut){Ze.fromWorkingColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,s=Et.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(vs);let n=Jr(An.h,vs.h,t),s=Jr(An.s,vs.s,t),r=Jr(An.l,vs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Ve;Ve.NAMES=_c;var jh=0,On=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=wi,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=ba,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xe=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new P,ys=new be,Wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}};var $s=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zs=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var eu=0,qt=new _t,ua=new Rt,ui=new P,Gt=new Qn,Gi=new Qn,St=new P,Ft=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gc(e)?Zs:$s)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Gt.min,Gi.min),Gt.expandByPoint(St),St.addVectors(Gt.max,Gi.max),Gt.expandByPoint(St)):(Gt.expandByPoint(Gi.min),Gt.expandByPoint(Gi.max))}Gt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(e,c),St.add(ui)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<o;S++)c[S]=new P,h[S]=new P;let d=new P,f=new P,p=new P,g=new be,_=new be,m=new be,u=new P,y=new P;function v(S,L,k){d.fromArray(s,S*3),f.fromArray(s,L*3),p.fromArray(s,k*3),g.fromArray(a,S*2),_.fromArray(a,L*2),m.fromArray(a,k*2),f.sub(d),p.sub(d),_.sub(g),m.sub(g);let Q=1/(_.x*m.y-m.x*_.y);isFinite(Q)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(Q),y.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(Q),c[S].add(u),c[L].add(u),c[k].add(u),h[S].add(y),h[L].add(y),h[k].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let S=0,L=E.length;S<L;++S){let k=E[S],Q=k.start,I=k.count;for(let U=Q,V=Q+I;U<V;U+=3)v(n[U+0],n[U+1],n[U+2])}let R=new P,A=new P,T=new P,z=new P;function M(S){T.fromArray(r,S*3),z.copy(T);let L=c[S];R.copy(L),R.sub(T.multiplyScalar(T.dot(L))).normalize(),A.crossVectors(z,L);let Q=A.dot(h[S])<0?-1:1;l[S*4]=R.x,l[S*4+1]=R.y,l[S*4+2]=R.z,l[S*4+3]=Q}for(let S=0,L=E.length;S<L;++S){let k=E[S],Q=k.start,I=k.count;for(let U=Q,V=Q+I;U<V;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new Wt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bl=new _t,Vn=new qs,xs=new Qi,wl=new P,di=new P,fi=new P,pi=new P,da=new P,Ms=new P,Ss=new be,bs=new be,ws=new be,El=new P,Tl=new P,Al=new P,Es=new P,Ts=new P,te=class extends Rt{constructor(e=new Ft,t=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(da.fromBufferAttribute(d,e),a?Ms.addScaledVector(da,h):Ms.addScaledVector(da.sub(t),h))}t.add(Ms)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(xs.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(xs,wl)===null||Vn.origin.distanceToSquared(wl)>(e.far-e.near)**2))&&(bl.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(bl),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],u=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,R=v;E<R;E+=3){let A=o.getX(E),T=o.getX(E+1),z=o.getX(E+2);s=As(this,u,e,n,c,h,d,A,T,z),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){let y=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);s=As(this,a,e,n,c,h,d,y,v,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],u=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,R=v;E<R;E+=3){let A=E,T=E+1,z=E+2;s=As(this,u,e,n,c,h,d,A,T,z),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){let y=m,v=m+1,E=m+2;s=As(this,a,e,n,c,h,d,y,v,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function tu(i,e,t,n,s,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===sn,o),l===null)return null;Ts.copy(o),Ts.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:i}}function As(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,di),i.getVertexPosition(l,fi),i.getVertexPosition(c,pi);let h=tu(i,e,t,n,di,fi,pi,Es);if(h){s&&(Ss.fromBufferAttribute(s,o),bs.fromBufferAttribute(s,l),ws.fromBufferAttribute(s,c),h.uv=$n.getInterpolation(Es,di,fi,pi,Ss,bs,ws,new be)),r&&(Ss.fromBufferAttribute(r,o),bs.fromBufferAttribute(r,l),ws.fromBufferAttribute(r,c),h.uv1=$n.getInterpolation(Es,di,fi,pi,Ss,bs,ws,new be),h.uv2=h.uv1),a&&(El.fromBufferAttribute(a,o),Tl.fromBufferAttribute(a,l),Al.fromBufferAttribute(a,c),h.normal=$n.getInterpolation(Es,di,fi,pi,El,Tl,Al,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};$n.getNormal(di,fi,pi,d.normal),h.face=d}return h}var lt=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2));function g(_,m,u,y,v,E,R,A,T,z,M){let S=E/T,L=R/z,k=E/2,Q=R/2,I=A/2,U=T+1,V=z+1,q=0,X=0,W=new P;for(let J=0;J<V;J++){let ee=J*L-Q;for(let ce=0;ce<U;ce++){let G=ce*S-k;W[_]=G*y,W[m]=ee*v,W[u]=I,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[u]=A>0?1:-1,h.push(W.x,W.y,W.z),d.push(ce/T),d.push(1-J/z),q+=1}}for(let J=0;J<z;J++)for(let ee=0;ee<T;ee++){let ce=f+ee+U*J,G=f+ee+U*(J+1),Y=f+(ee+1)+U*(J+1),oe=f+(ee+1)+U*J;l.push(ce,G,oe),l.push(G,Y,oe),X+=6}o.addGroup(p,X,M),p+=X,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Pi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ut(i){let e={};for(let t=0;t<i.length;t++){let n=Pi(i[t]);for(let s in n)e[s]=n[s]}return e}function nu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vc(i){return i.getRenderTarget()===null?i.outputColorSpace:Ze.workingColorSpace}var iu={clone:Pi,merge:Ut},su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=nu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Js=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tt=class extends Js{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mi=-90,gi=1,Ua=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tt(mi,gi,e,t);s.layers=this.layers,this.add(s);let r=new Tt(mi,gi,e,t);r.layers=this.layers,this.add(r);let a=new Tt(mi,gi,e,t);a.layers=this.layers,this.add(a);let o=new Tt(mi,gi,e,t);o.layers=this.layers,this.add(o);let l=new Tt(mi,gi,e,t);l.layers=this.layers,this.add(l);let c=new Tt(mi,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ks=class extends At{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Na=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Yi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kn?ut:$t),this.texture=new Ks(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lt(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Pn});r.uniforms.tEquirect.value=t;let a=new te(s,r),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Yt),new Ua(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},fa=new P,au=new P,ou=new Ge,mn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fa.subVectors(n,t).cross(au.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ou.getNormalMatrix(e),s=this.coplanarPoint(fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new Qi,Rs=new P,es=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],u=s[12],y=s[13],v=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,m-p,E-u).normalize(),n[1].setComponents(l+r,f+c,m+p,E+u).normalize(),n[2].setComponents(l+a,f+h,m+g,E+y).normalize(),n[3].setComponents(l-a,f-h,m-g,E-y).normalize(),n[4].setComponents(l-o,f-d,m-_,E-v).normalize(),t===_n)n[5].setComponents(l+o,f+d,m+_,E+v).normalize();else if(t===Gs)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Rs.x=s.normal.x>0?e.max.x:e.min.x,Rs.y=s.normal.y>0?e.max.y:e.min.y,Rs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lu(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,f=c.usage,p=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,d){let f=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),p.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let u=g[_];t?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var rn=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){let y=u*f-a;for(let v=0;v<c;v++){let E=v*d-r;g.push(E,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){let v=y+c*u,E=y+c*(u+1),R=y+1+c*(u+1),A=y+1+c*u;p.push(v,E,A),p.push(E,R,A)}this.setIndex(p),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
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
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mu=`#ifdef USE_AOMAP
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
#endif`,gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_u=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Su=`#ifdef USE_IRIDESCENCE
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
#endif`,bu=`#ifdef USE_BUMPMAP
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
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lu=`#define PI 3.141592653589793
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
} // validated`,Du=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uu=`vec3 transformedNormal = objectNormal;
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
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ku=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
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
}`,Ku=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,td=`uniform bool receiveShadow;
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
#endif`,nd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
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
#endif`,ld=`struct PhysicalMaterial {
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
}`,cd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yd=`#if defined( USE_POINTS_UV )
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
#endif`,xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
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
#endif`,wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ed=`#ifdef USE_MORPHTARGETS
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
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
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
#endif`,Ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yd=`float getShadowMask() {
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
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zd=`#ifdef USE_SKINNING
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
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tf=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hf=`uniform sampler2D t2D;
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`#include <common>
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
}`,gf=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,_f=`#define DISTANCE
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
}`,vf=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
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
}`,Sf=`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
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
}`,wf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ef=`#define LAMBERT
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
}`,Tf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Af=`#define MATCAP
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
}`,Rf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cf=`#define NORMAL
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
}`,Pf=`#define NORMAL
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
}`,If=`#define PHONG
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
}`,Lf=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Df=`#define STANDARD
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
}`,Uf=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Nf=`#define TOON
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
}`,Of=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ff=`uniform float size;
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
}`,Bf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,Hf=`uniform vec3 color;
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
}`,kf=`uniform float rotation;
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
}`,Gf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:cu,alphahash_pars_fragment:hu,alphamap_fragment:uu,alphamap_pars_fragment:du,alphatest_fragment:fu,alphatest_pars_fragment:pu,aomap_fragment:mu,aomap_pars_fragment:gu,batching_pars_vertex:_u,batching_vertex:vu,begin_vertex:yu,beginnormal_vertex:xu,bsdfs:Mu,iridescence_fragment:Su,bumpmap_pars_fragment:bu,clipping_planes_fragment:wu,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:Au,color_fragment:Ru,color_pars_fragment:Cu,color_pars_vertex:Pu,color_vertex:Iu,common:Lu,cube_uv_reflection_fragment:Du,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Nu,displacementmap_vertex:Ou,emissivemap_fragment:Fu,emissivemap_pars_fragment:Bu,colorspace_fragment:zu,colorspace_pars_fragment:Hu,envmap_fragment:ku,envmap_common_pars_fragment:Gu,envmap_pars_fragment:Vu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:nd,envmap_vertex:Xu,fog_vertex:qu,fog_pars_vertex:Yu,fog_fragment:$u,fog_pars_fragment:Zu,gradientmap_pars_fragment:Ju,lightmap_fragment:Ku,lightmap_pars_fragment:Qu,lights_lambert_fragment:ju,lights_lambert_pars_fragment:ed,lights_pars_begin:td,lights_toon_fragment:id,lights_toon_pars_fragment:sd,lights_phong_fragment:rd,lights_phong_pars_fragment:ad,lights_physical_fragment:od,lights_physical_pars_fragment:ld,lights_fragment_begin:cd,lights_fragment_maps:hd,lights_fragment_end:ud,logdepthbuf_fragment:dd,logdepthbuf_pars_fragment:fd,logdepthbuf_pars_vertex:pd,logdepthbuf_vertex:md,map_fragment:gd,map_pars_fragment:_d,map_particle_fragment:vd,map_particle_pars_fragment:yd,metalnessmap_fragment:xd,metalnessmap_pars_fragment:Md,morphcolor_vertex:Sd,morphnormal_vertex:bd,morphtarget_pars_vertex:wd,morphtarget_vertex:Ed,normal_fragment_begin:Td,normal_fragment_maps:Ad,normal_pars_fragment:Rd,normal_pars_vertex:Cd,normal_vertex:Pd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Dd,clearcoat_pars_fragment:Ud,iridescence_pars_fragment:Nd,opaque_fragment:Od,packing:Fd,premultiplied_alpha_fragment:Bd,project_vertex:zd,dithering_fragment:Hd,dithering_pars_fragment:kd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:Vd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Xd,shadowmap_vertex:qd,shadowmask_pars_fragment:Yd,skinbase_vertex:$d,skinning_pars_vertex:Zd,skinning_vertex:Jd,skinnormal_vertex:Kd,specularmap_fragment:Qd,specularmap_pars_fragment:jd,tonemapping_fragment:ef,tonemapping_pars_fragment:tf,transmission_fragment:nf,transmission_pars_fragment:sf,uv_pars_fragment:rf,uv_pars_vertex:af,uv_vertex:of,worldpos_vertex:lf,background_vert:cf,background_frag:hf,backgroundCube_vert:uf,backgroundCube_frag:df,cube_vert:ff,cube_frag:pf,depth_vert:mf,depth_frag:gf,distanceRGBA_vert:_f,distanceRGBA_frag:vf,equirect_vert:yf,equirect_frag:xf,linedashed_vert:Mf,linedashed_frag:Sf,meshbasic_vert:bf,meshbasic_frag:wf,meshlambert_vert:Ef,meshlambert_frag:Tf,meshmatcap_vert:Af,meshmatcap_frag:Rf,meshnormal_vert:Cf,meshnormal_frag:Pf,meshphong_vert:If,meshphong_frag:Lf,meshphysical_vert:Df,meshphysical_frag:Uf,meshtoon_vert:Nf,meshtoon_frag:Of,points_vert:Ff,points_frag:Bf,shadow_vert:zf,shadow_frag:Hf,sprite_vert:kf,sprite_frag:Gf},ie={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},nn={basic:{uniforms:Ut([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ut([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ut([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ut([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ut([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ut([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ut([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ut([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ut([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ut([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ut([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ut([ie.common,ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ut([ie.lights,ie.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};nn.physical={uniforms:Ut([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Cs={r:0,b:0,g:0};function Vf(i,e,t,n,s,r,a){let o=new Ve(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(m,u){let y=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_r)?(h===void 0&&(h=new te(new lt(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Pi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(v.colorSpace)!==it,(d!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new te(new rn(2,2),new xn({name:"BackgroundMaterial",uniforms:Pi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,u){m.getRGB(Cs,vc(i)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function Wf(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function d(I,U,V,q,X){let W=!1;if(a){let J=_(q,V,U);c!==J&&(c=J,p(c.object)),W=u(I,q,V,X),W&&y(I,q,V,X)}else{let J=U.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=q.id,c.program=V.id,c.wireframe=J,W=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,z(I,U,V,q),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,U,V){let q=V.wireframe===!0,X=o[I.id];X===void 0&&(X={},o[I.id]=X);let W=X[U.id];W===void 0&&(W={},X[U.id]=W);let J=W[q];return J===void 0&&(J=m(f()),W[q]=J),J}function m(I){let U=[],V=[],q=[];for(let X=0;X<s;X++)U[X]=0,V[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:q,object:I,attributes:{},index:null}}function u(I,U,V,q){let X=c.attributes,W=U.attributes,J=0,ee=V.getAttributes();for(let ce in ee)if(ee[ce].location>=0){let Y=X[ce],oe=W[ce];if(oe===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;J++}return c.attributesNum!==J||c.index!==q}function y(I,U,V,q){let X={},W=U.attributes,J=0,ee=V.getAttributes();for(let ce in ee)if(ee[ce].location>=0){let Y=W[ce];Y===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),X[ce]=oe,J++}c.attributes=X,c.attributesNum=J,c.index=q}function v(){let I=c.newAttributes;for(let U=0,V=I.length;U<V;U++)I[U]=0}function E(I){R(I,0)}function R(I,U){let V=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;V[I]=1,q[I]===0&&(i.enableVertexAttribArray(I),q[I]=1),X[I]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),X[I]=U)}function A(){let I=c.newAttributes,U=c.enabledAttributes;for(let V=0,q=U.length;V<q;V++)U[V]!==I[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function T(I,U,V,q,X,W,J){J===!0?i.vertexAttribIPointer(I,U,V,X,W):i.vertexAttribPointer(I,U,V,q,X,W)}function z(I,U,V,q){if(n.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let X=q.attributes,W=V.getAttributes(),J=U.defaultAttributeValues;for(let ee in W){let ce=W[ee];if(ce.location>=0){let G=X[ee];if(G===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let Y=G.normalized,oe=G.itemSize,ge=t.get(G);if(ge===void 0)continue;let me=ge.buffer,Pe=ge.type,Ue=ge.bytesPerElement,we=n.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||G.gpuType===ac);if(G.isInterleavedBufferAttribute){let qe=G.data,N=qe.stride,Pt=G.offset;if(qe.isInstancedInterleavedBuffer){for(let ve=0;ve<ce.locationSize;ve++)R(ce.location+ve,qe.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let ve=0;ve<ce.locationSize;ve++)E(ce.location+ve);i.bindBuffer(i.ARRAY_BUFFER,me);for(let ve=0;ve<ce.locationSize;ve++)T(ce.location+ve,oe/ce.locationSize,Pe,Y,N*Ue,(Pt+oe/ce.locationSize*ve)*Ue,we)}else{if(G.isInstancedBufferAttribute){for(let qe=0;qe<ce.locationSize;qe++)R(ce.location+qe,G.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let qe=0;qe<ce.locationSize;qe++)E(ce.location+qe);i.bindBuffer(i.ARRAY_BUFFER,me);for(let qe=0;qe<ce.locationSize;qe++)T(ce.location+qe,oe/ce.locationSize,Pe,Y,oe*Ue,oe/ce.locationSize*qe*Ue,we)}}else if(J!==void 0){let Y=J[ee];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(ce.location,Y);break;case 3:i.vertexAttrib3fv(ce.location,Y);break;case 4:i.vertexAttrib4fv(ce.location,Y);break;default:i.vertexAttrib1fv(ce.location,Y)}}}}A()}function M(){k();for(let I in o){let U=o[I];for(let V in U){let q=U[V];for(let X in q)g(q[X].object),delete q[X];delete U[V]}delete o[I]}}function S(I){if(o[I.id]===void 0)return;let U=o[I.id];for(let V in U){let q=U[V];for(let X in q)g(q[X].object),delete q[X];delete U[V]}delete o[I.id]}function L(I){for(let U in o){let V=o[U];if(V[I.id]===void 0)continue;let q=V[I.id];for(let X in q)g(q[X].object),delete q[X];delete V[I.id]}}function k(){Q(),h=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:E,disableUnusedAttributes:A}}function Xf(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function qf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=a||e.has("OES_texture_float"),R=v&&E,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:A}}function Yf(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,E=u.clippingState||null;l.value=E,E=h(g,f,v,p);for(let R=0;R!==v;++R)E[R]=t[R];u.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let u=p+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,E=p;v!==_;++v,E+=4)a.copy(d[v]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $f(i){let e=new WeakMap;function t(a,o){return o===wa?a.mapping=Ai:o===Ea&&(a.mapping=Ri),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===wa||o===Ea)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Na(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qs=class extends Js{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Si=4,Rl=[.125,.215,.35,.446,.526,.582],Yn=20,pa=new Qs,Cl=new Ve,ma=null,ga=0,_a=0,Xn=(1+Math.sqrt(5))/2,_i=1/Xn,Pl=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Xn,_i),new P(0,Xn,-_i),new P(_i,0,Xn),new P(-_i,0,Xn),new P(Xn,_i,0),new P(-Xn,_i,0)],js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,_a),e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ji,format:Vt,colorSpace:vn,depthBuffer:!1},s=Il(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zf(r)),this._blurMaterial=Jf(r,e,t)}return s}_compileMaterial(e){let t=new te(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,n,s){let o=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Cl),h.toneMapping=In,h.autoClear=!1;let p=new Xe({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new te(new lt,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Cl),_=!0);for(let u=0;u<6;u++){let y=u%3;y===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):y===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let v=this._cubeSize;Ps(s,y*v,u>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ai||e.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,pa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pl[(s-1)%Pl.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new te(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Yn;m>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);let u=[],y=0;for(let T=0;T<Yn;++T){let z=T/_,M=Math.exp(-z*z/2);u.push(M),T===0?y+=M:T<m&&(y+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let E=this._sizeLods[s],R=3*E*(s>v-Si?s-v+Si:0),A=4*(this._cubeSize-E);Ps(t,R,A,3*E,2*E),l.setRenderTarget(t),l.render(d,pa)}};function Zf(i){let e=[],t=[],n=[],s=i,r=i-Si+1+Rl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Si?l=Rl[a-i+Si-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),E=new Float32Array(u*g*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,z=A>2?0:-1,M=[T,z,0,T+2/3,z,0,T+2/3,z+1,0,T,z,0,T+2/3,z+1,0,T,z+1,0];y.set(M,_*g*A),v.set(f,m*g*A);let S=[A,A,A,A,A,A];E.set(S,u*g*A)}let R=new Ft;R.setAttribute("position",new Wt(y,_)),R.setAttribute("uv",new Wt(v,m)),R.setAttribute("faceIndex",new Wt(E,u)),e.push(R),s>Si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Il(i,e,t){let n=new yn(i,e,t);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jf(i,e,t){let n=new Float32Array(Yn),s=new P(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ll(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Dl(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function fo(){return`

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
	`}function Kf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===wa||l===Ea,h=l===Ai||l===Ri;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new js(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new js(i));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Qf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jf(i,e,t,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let _=p[g];for(let m=0,u=_.length;m<u;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let v=0,E=y.length;v<E;v+=3){let R=y[v+0],A=y[v+1],T=y[v+2];f.push(R,A,A,T,T,R)}}else if(g!==void 0){let y=g.array;_=g.version;for(let v=0,E=y.length/3-1;v<E;v+=3){let R=v+0,A=v+1,T=v+2;f.push(R,A,A,T,T,R)}}else return;let m=new(gc(f)?Zs:$s)(f,1);m.version=_;let u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function ep(i,e,t,n){let s=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*l),t.update(g,r,1)}function d(p,g,_){if(_===0)return;let m,u;if(s)m=i,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](r,g,o,p*l,_),t.update(g,r,_)}function f(p,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<_;u++)this.render(p[u]/l,g[u]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let u=0;for(let y=0;y<_;y++)u+=g[y];t.update(u,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function tp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function np(i,e){return i[0]-e[0]}function ip(i,e){return Math.abs(e[1])-Math.abs(i[1])}function sp(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let I=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],z=0;y===!0&&(z=1),v===!0&&(z=2),E===!0&&(z=3);let M=h.attributes.position.count*z,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let L=new Float32Array(M*S*4*g),k=new Xs(L,M,S,g);k.type=Cn,k.needsUpdate=!0;let Q=z*4;for(let U=0;U<g;U++){let V=R[U],q=A[U],X=T[U],W=M*S*4*U;for(let J=0;J<V.count;J++){let ee=J*Q;y===!0&&(a.fromBufferAttribute(V,J),L[W+ee+0]=a.x,L[W+ee+1]=a.y,L[W+ee+2]=a.z,L[W+ee+3]=0),v===!0&&(a.fromBufferAttribute(q,J),L[W+ee+4]=a.x,L[W+ee+5]=a.y,L[W+ee+6]=a.z,L[W+ee+7]=0),E===!0&&(a.fromBufferAttribute(X,J),L[W+ee+8]=a.x,L[W+ee+9]=a.y,L[W+ee+10]=a.z,L[W+ee+11]=X.itemSize===4?a.w:1)}}_={count:g,texture:k,size:new be(M,S)},r.set(h,_),h.addEventListener("dispose",I)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let u=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<p;v++){let E=g[v];E[0]=v,E[1]=f[v]}g.sort(ip);for(let v=0;v<8;v++)v<p&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(np);let _=h.morphAttributes.position,m=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let E=o[v],R=E[0],A=E[1];R!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+v)!==_[R]&&h.setAttribute("morphTarget"+v,_[R]),m&&h.getAttribute("morphNormal"+v)!==m[R]&&h.setAttribute("morphNormal"+v,m[R]),s[v]=A,u+=A):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function rp(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var er=class extends At{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Jn,h!==Jn&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Jn&&(n=Rn),n===void 0&&h===Ci&&(n=Zn),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xc=new At,Mc=new er(1,1);Mc.compareFunction=mc;var Sc=new Xs,bc=new Da,wc=new Ks,Ul=[],Nl=[],Ol=new Float32Array(16),Fl=new Float32Array(9),Bl=new Float32Array(4);function Ui(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ul[s];if(r===void 0&&(r=new Float32Array(s),Ul[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yr(i,e){let t=Nl[e];t===void 0&&(t=new Int32Array(e),Nl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ap(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function op(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function hp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;Bl.set(n),i.uniformMatrix2fv(this.addr,!1,Bl),yt(t,n)}}function up(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;Fl.set(n),i.uniformMatrix3fv(this.addr,!1,Fl),yt(t,n)}}function dp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),yt(t,n)}}function fp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function mp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function gp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function _p(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function yp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function xp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Mp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Mc:xc;t.setTexture2D(e||r,s)}function Sp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bc,s)}function bp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wc,s)}function wp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sc,s)}function Ep(i){switch(i){case 5126:return ap;case 35664:return op;case 35665:return lp;case 35666:return cp;case 35674:return hp;case 35675:return up;case 35676:return dp;case 5124:case 35670:return fp;case 35667:case 35671:return pp;case 35668:case 35672:return mp;case 35669:case 35673:return gp;case 5125:return _p;case 36294:return vp;case 36295:return yp;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return wp}}function Tp(i,e){i.uniform1fv(this.addr,e)}function Ap(i,e){let t=Ui(e,this.size,2);i.uniform2fv(this.addr,t)}function Rp(i,e){let t=Ui(e,this.size,3);i.uniform3fv(this.addr,t)}function Cp(i,e){let t=Ui(e,this.size,4);i.uniform4fv(this.addr,t)}function Pp(i,e){let t=Ui(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ip(i,e){let t=Ui(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lp(i,e){let t=Ui(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dp(i,e){i.uniform1iv(this.addr,e)}function Up(i,e){i.uniform2iv(this.addr,e)}function Np(i,e){i.uniform3iv(this.addr,e)}function Op(i,e){i.uniform4iv(this.addr,e)}function Fp(i,e){i.uniform1uiv(this.addr,e)}function Bp(i,e){i.uniform2uiv(this.addr,e)}function zp(i,e){i.uniform3uiv(this.addr,e)}function Hp(i,e){i.uniform4uiv(this.addr,e)}function kp(i,e,t){let n=this.cache,s=e.length,r=yr(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||xc,r[a])}function Gp(i,e,t){let n=this.cache,s=e.length,r=yr(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bc,r[a])}function Vp(i,e,t){let n=this.cache,s=e.length,r=yr(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wc,r[a])}function Wp(i,e,t){let n=this.cache,s=e.length,r=yr(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sc,r[a])}function Xp(i){switch(i){case 5126:return Tp;case 35664:return Ap;case 35665:return Rp;case 35666:return Cp;case 35674:return Pp;case 35675:return Ip;case 35676:return Lp;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Op;case 5125:return Fp;case 36294:return Bp;case 36295:return zp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Wp}}var Oa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ep(t.type)}},Fa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xp(t.type)}},Ba=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},va=/(\w+)(\])?(\[|\.)?/g;function zl(i,e){i.seq.push(e),i.map[e.id]=e}function qp(i,e,t){let n=i.name,s=n.length;for(va.lastIndex=0;;){let r=va.exec(n),a=va.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zl(t,c===void 0?new Oa(o,i,e):new Fa(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Ba(o),zl(t,d)),t=d}}}var Ti=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);qp(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Hl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Yp=37297,$p=0;function Zp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Jp(i){let e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i),n;switch(e===t?n="":e===ks&&t===Hs?n="LinearDisplayP3ToLinearSRGB":e===Hs&&t===ks&&(n="LinearSRGBToLinearDisplayP3"),i){case vn:case vr:return[n,"LinearTransferOETF"];case ut:case uo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Zp(i.getShaderSource(e),a)}else return s}function Kp(i,e){let t=Jp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qp(i,e){let t;switch(e){case gh:t="Linear";break;case _h:t="Reinhard";break;case vh:t="OptimizedCineon";break;case co:t="ACESFilmic";break;case xh:t="AgX";break;case yh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bi).join(`
`)}function em(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bi).join(`
`)}function tm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function bi(i){return i!==""}function Gl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var im=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(im,rm)}var sm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rm(i,e){let t=Oe[e];if(t===void 0){let n=sm.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}var am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(i){return i.replace(am,om)}function om(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function cm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case Ri:e="ENVMAP_TYPE_CUBE";break;case _r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function um(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sc:e="ENVMAP_BLENDING_MULTIPLY";break;case ph:e="ENVMAP_BLENDING_MIX";break;case mh:e="ENVMAP_BLENDING_ADD";break}return e}function dm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=lm(t),c=cm(t),h=hm(t),d=um(t),f=dm(t),p=t.isWebGL2?"":jp(t),g=em(t),_=tm(r),m=s.createProgram(),u,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bi).join(`
`),u.length>0&&(u+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bi).join(`
`),y.length>0&&(y+=`
`)):(u=[Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bi).join(`
`),y=[p,Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Oe.tonemapping_pars_fragment:"",t.toneMapping!==In?Qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Kp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bi).join(`
`)),a=za(a),a=Gl(a,t),a=Vl(a,t),o=za(o),o=Gl(o,t),o=Vl(o,t),a=Wl(a),o=Wl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let E=v+u+a,R=v+y+o,A=Hl(s,s.VERTEX_SHADER,E),T=Hl(s,s.FRAGMENT_SHADER,R);s.attachShader(m,A),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function z(k){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(A).trim(),U=s.getShaderInfoLog(T).trim(),V=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,T);else{let X=kl(s,A,"vertex"),W=kl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+X+`
`+W)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(I===""||U==="")&&(q=!1);q&&(k.diagnostics={runnable:V,programLog:Q,vertexShader:{log:I,prefix:u},fragmentShader:{log:U,prefix:y}})}s.deleteShader(A),s.deleteShader(T),M=new Ti(s,m),S=nm(s,m)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let S;this.getAttributes=function(){return S===void 0&&z(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(m,Yp)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$p++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}var pm=0,Ha=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ka(e),t.set(e,n)),n}},ka=class{constructor(e){this.id=pm++,this.code=e,this.usedTimes=0}};function mm(i,e,t,n,s,r,a){let o=new ji,l=new Ha,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,S,L,k,Q){let I=k.fog,U=Q.geometry,V=M.isMeshStandardMaterial?k.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),X=q&&q.mapping===_r?q.image.height:null,W=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ee=J!==void 0?J.length:0,ce=0;U.morphAttributes.position!==void 0&&(ce=1),U.morphAttributes.normal!==void 0&&(ce=2),U.morphAttributes.color!==void 0&&(ce=3);let G,Y,oe,ge;if(W){let It=nn[W];G=It.vertexShader,Y=It.fragmentShader}else G=M.vertexShader,Y=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);let me=i.getRenderTarget(),Pe=Q.isInstancedMesh===!0,Ue=Q.isBatchedMesh===!0,we=!!M.map,qe=!!M.matcap,N=!!q,Pt=!!M.aoMap,ve=!!M.lightMap,Re=!!M.bumpMap,de=!!M.normalMap,at=!!M.displacementMap,Fe=!!M.emissiveMap,w=!!M.metalnessMap,x=!!M.roughnessMap,F=M.anisotropy>0,K=M.clearcoat>0,Z=M.iridescence>0,j=M.sheen>0,fe=M.transmission>0,ae=F&&!!M.anisotropyMap,he=K&&!!M.clearcoatMap,Se=K&&!!M.clearcoatNormalMap,Be=K&&!!M.clearcoatRoughnessMap,$=Z&&!!M.iridescenceMap,$e=Z&&!!M.iridescenceThicknessMap,We=j&&!!M.sheenColorMap,Ae=j&&!!M.sheenRoughnessMap,_e=!!M.specularMap,ue=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Ye=fe&&!!M.transmissionMap,ct=fe&&!!M.thicknessMap,He=!!M.gradientMap,ne=!!M.alphaMap,C=M.alphaTest>0,se=!!M.alphaHash,re=!!M.extensions,Ee=!!U.attributes.uv1,ye=!!U.attributes.uv2,et=!!U.attributes.uv3,tt=In;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(tt=i.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:Y,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ue,instancing:Pe,instancingColor:Pe&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:vn,map:we,matcap:qe,envMap:N,envMapMode:N&&q.mapping,envMapCubeUVHeight:X,aoMap:Pt,lightMap:ve,bumpMap:Re,normalMap:de,displacementMap:f&&at,emissiveMap:Fe,normalMapObjectSpace:de&&M.normalMapType===Lh,normalMapTangentSpace:de&&M.normalMapType===pc,metalnessMap:w,roughnessMap:x,anisotropy:F,anisotropyMap:ae,clearcoat:K,clearcoatMap:he,clearcoatNormalMap:Se,clearcoatRoughnessMap:Be,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:$e,sheen:j,sheenColorMap:We,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:ue,specularIntensityMap:Ne,transmission:fe,transmissionMap:Ye,thicknessMap:ct,gradientMap:He,opaque:M.transparent===!1&&M.blending===wi,alphaMap:ne,alphaTest:C,alphaHash:se,combine:M.combine,mapUv:we&&_(M.map.channel),aoMapUv:Pt&&_(M.aoMap.channel),lightMapUv:ve&&_(M.lightMap.channel),bumpMapUv:Re&&_(M.bumpMap.channel),normalMapUv:de&&_(M.normalMap.channel),displacementMapUv:at&&_(M.displacementMap.channel),emissiveMapUv:Fe&&_(M.emissiveMap.channel),metalnessMapUv:w&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:ae&&_(M.anisotropyMap.channel),clearcoatMapUv:he&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(M.sheenRoughnessMap.channel),specularMapUv:_e&&_(M.specularMap.channel),specularColorMapUv:ue&&_(M.specularColorMap.channel),specularIntensityMapUv:Ne&&_(M.specularIntensityMap.channel),transmissionMapUv:Ye&&_(M.transmissionMap.channel),thicknessMapUv:ct&&_(M.thicknessMap.channel),alphaMapUv:ne&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(de||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:ye,vertexUv3s:et,pointsUvs:Q.isPoints===!0&&!!U.attributes.uv&&(we||ne),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dt,flipSided:M.side===Ot,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:re&&M.extensions.derivatives===!0,extensionFragDepth:re&&M.extensions.fragDepth===!0,extensionDrawBuffers:re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function E(M){let S=g[M.type],L;if(S){let k=nn[S];L=iu.clone(k.uniforms)}else L=M.uniforms;return L}function R(M,S){let L;for(let k=0,Q=c.length;k<Q;k++){let I=c[k];if(I.cacheKey===S){L=I,++L.usedTimes;break}}return L===void 0&&(L=new fm(i,S,M,r),c.push(L)),L}function A(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:z}}function gm(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function _m(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ql(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yl(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,p,g,_,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function o(d,f,p,g,_,m){let u=a(d,f,p,g,_,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(d,f,p,g,_,m){let u=a(d,f,p,g,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||_m),n.length>1&&n.sort(f||ql),s.length>1&&s.sort(f||ql)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function vm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Yl,i.set(n,[a])):s>=r.length?(a=new Yl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ym(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ve};break;case"SpotLight":t={position:new P,direction:new P,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function xm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Mm=0;function Sm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bm(i,e){let t=new ym,n=xm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,a=new _t,o=new _t;function l(h,d){let f=0,p=0,g=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let _=0,m=0,u=0,y=0,v=0,E=0,R=0,A=0,T=0,z=0,M=0;h.sort(Sm);let S=d===!0?Math.PI:1;for(let k=0,Q=h.length;k<Q;k++){let I=h[k],U=I.color,V=I.intensity,q=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=U.r*V*S,p+=U.g*V*S,g+=U.b*V*S;else if(I.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(I.sh.coefficients[W],V);M++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){let J=I.shadow,ee=n.get(I);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,s.directionalShadow[_]=ee,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=I.shadow.matrix,E++}s.directional[_]=W,_++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(U).multiplyScalar(V*S),W.distance=q,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,s.spot[u]=W;let J=I.shadow;if(I.map&&(s.spotLightMap[T]=I.map,T++,J.updateMatrices(I),I.castShadow&&z++),s.spotLightMatrix[u]=J.matrix,I.castShadow){let ee=n.get(I);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,s.spotShadow[u]=ee,s.spotShadowMap[u]=X,A++}u++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(U).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),s.rectArea[y]=W,y++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*S),W.distance=I.distance,W.decay=I.decay,I.castShadow){let J=I.shadow,ee=n.get(I);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,s.pointShadow[m]=ee,s.pointShadowMap[m]=X,s.pointShadowMatrix[m]=I.shadow.matrix,R++}s.point[m]=W,m++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(V*S),W.groundColor.copy(I.groundColor).multiplyScalar(V*S),s.hemi[v]=W,v++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let L=s.hash;(L.directionalLength!==_||L.pointLength!==m||L.spotLength!==u||L.rectAreaLength!==y||L.hemiLength!==v||L.numDirectionalShadows!==E||L.numPointShadows!==R||L.numSpotShadows!==A||L.numSpotMaps!==T||L.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=u,s.rectArea.length=y,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=A+T-z,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=M,L.directionalLength=_,L.pointLength=m,L.spotLength=u,L.rectAreaLength=y,L.hemiLength=v,L.numDirectionalShadows=E,L.numPointShadows=R,L.numSpotShadows=A,L.numSpotMaps=T,L.numLightProbes=M,s.version=Mm++)}function c(h,d){let f=0,p=0,g=0,_=0,m=0,u=d.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let E=h[y];if(E.isDirectionalLight){let R=s.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),f++}else if(E.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),g++}else if(E.isRectAreaLight){let R=s.rectArea[_];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),o.identity(),a.copy(E.matrixWorld),a.premultiply(u),o.extractRotation(a),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){let R=s.point[p];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),p++}else if(E.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:s}}function $l(i,e){let t=new bm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wm(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new $l(i,e),t.set(r,[l])):a>=o.length?(l=new $l(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ga=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Va=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
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
}`;function Am(i,e,t){let n=new es,s=new be,r=new be,a=new rt,o=new Ga({depthPacking:Ih}),l=new Va,c={},h=t.maxTextureSize,d={[sn]:Ot,[Ot]:sn,[dt]:dt},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Em,fragmentShader:Tm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new te(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic;let u=this.type;this.render=function(A,T,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Pn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Q=u!==pn&&this.type===pn,I=u===pn&&this.type!==pn;for(let U=0,V=A.length;U<V;U++){let q=A[U],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||Q===!0||I===!0){let ee=this.type!==pn?{minFilter:Ke,magFilter:Ke}:{};X.map!==null&&X.map.dispose(),X.map=new yn(s.x,s.y,ee),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let J=X.getViewportCount();for(let ee=0;ee<J;ee++){let ce=X.getViewport(ee);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),k.viewport(a),X.updateMatrices(q,ee),n=X.getFrustum(),E(T,z,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===pn&&y(X,z),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,L)};function y(A,T){let z=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,z,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,z,p,_,null)}function v(A,T,z,M){let S=null,L=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=z.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let k=S.uuid,Q=T.uuid,I=c[k];I===void 0&&(I={},c[k]=I);let U=I[Q];U===void 0&&(U=S.clone(),I[Q]=U,T.addEventListener("dispose",R)),S=U}if(S.visible=T.visible,S.wireframe=T.wireframe,M===pn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=i.properties.get(S);k.light=z}return S}function E(A,T,z,M,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);let Q=e.update(A),I=A.material;if(Array.isArray(I)){let U=Q.groups;for(let V=0,q=U.length;V<q;V++){let X=U[V],W=I[X.materialIndex];if(W&&W.visible){let J=v(A,W,M,S);A.onBeforeShadow(i,A,T,z,Q,J,X),i.renderBufferDirect(z,null,Q,J,A,X),A.onAfterShadow(i,A,T,z,Q,J,X)}}}else if(I.visible){let U=v(A,I,M,S);A.onBeforeShadow(i,A,T,z,Q,U,null),i.renderBufferDirect(z,null,Q,U,A,null),A.onAfterShadow(i,A,T,z,Q,U,null)}}let k=A.children;for(let Q=0,I=k.length;Q<I;Q++)E(k[Q],T,z,M,S)}function R(A){A.target.removeEventListener("dispose",R);for(let z in c){let M=c[z],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function Rm(i,e,t){let n=t.isWebGL2;function s(){let C=!1,se=new rt,re=null,Ee=new rt(0,0,0,0);return{setMask:function(ye){re!==ye&&!C&&(i.colorMask(ye,ye,ye,ye),re=ye)},setLocked:function(ye){C=ye},setClear:function(ye,et,tt,xt,It){It===!0&&(ye*=xt,et*=xt,tt*=xt),se.set(ye,et,tt,xt),Ee.equals(se)===!1&&(i.clearColor(ye,et,tt,xt),Ee.copy(se))},reset:function(){C=!1,re=null,Ee.set(-1,0,0,0)}}}function r(){let C=!1,se=null,re=null,Ee=null;return{setTest:function(ye){ye?Ue(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(ye){se!==ye&&!C&&(i.depthMask(ye),se=ye)},setFunc:function(ye){if(re!==ye){switch(ye){case oh:i.depthFunc(i.NEVER);break;case lh:i.depthFunc(i.ALWAYS);break;case ch:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case hh:i.depthFunc(i.EQUAL);break;case uh:i.depthFunc(i.GEQUAL);break;case dh:i.depthFunc(i.GREATER);break;case fh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=ye}},setLocked:function(ye){C=ye},setClear:function(ye){Ee!==ye&&(i.clearDepth(ye),Ee=ye)},reset:function(){C=!1,se=null,re=null,Ee=null}}}function a(){let C=!1,se=null,re=null,Ee=null,ye=null,et=null,tt=null,xt=null,It=null;return{setTest:function(nt){C||(nt?Ue(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(nt){se!==nt&&!C&&(i.stencilMask(nt),se=nt)},setFunc:function(nt,Lt,tn){(re!==nt||Ee!==Lt||ye!==tn)&&(i.stencilFunc(nt,Lt,tn),re=nt,Ee=Lt,ye=tn)},setOp:function(nt,Lt,tn){(et!==nt||tt!==Lt||xt!==tn)&&(i.stencilOp(nt,Lt,tn),et=nt,tt=Lt,xt=tn)},setLocked:function(nt){C=nt},setClear:function(nt){It!==nt&&(i.clearStencil(nt),It=nt)},reset:function(){C=!1,se=null,re=null,Ee=null,ye=null,et=null,tt=null,xt=null,It=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,d=new WeakMap,f={},p={},g=new WeakMap,_=[],m=null,u=!1,y=null,v=null,E=null,R=null,A=null,T=null,z=null,M=new Ve(0,0,0),S=0,L=!1,k=null,Q=null,I=null,U=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=W>=2);let ee=null,ce={},G=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),oe=new rt().fromArray(G),ge=new rt().fromArray(Y);function me(C,se,re,Ee){let ye=new Uint8Array(4),et=i.createTexture();i.bindTexture(C,et),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<re;tt++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(se+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return et}let Pe={};Pe[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(i.DEPTH_TEST),l.setFunc(Os),Fe(!1),w(Co),Ue(i.CULL_FACE),de(Pn);function Ue(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function we(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function qe(C,se){return p[C]!==se?(i.bindFramebuffer(C,se),p[C]=se,n&&(C===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function N(C,se){let re=_,Ee=!1;if(C)if(re=g.get(se),re===void 0&&(re=[],g.set(se,re)),C.isWebGLMultipleRenderTargets){let ye=C.texture;if(re.length!==ye.length||re[0]!==i.COLOR_ATTACHMENT0){for(let et=0,tt=ye.length;et<tt;et++)re[et]=i.COLOR_ATTACHMENT0+et;re.length=ye.length,Ee=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,Ee=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Pt(C){return m!==C?(i.useProgram(C),m=C,!0):!1}let ve={[qn]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[Lo]=i.MIN,ve[Do]=i.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(ve[Lo]=C.MIN_EXT,ve[Do]=C.MAX_EXT)}let Re={[$c]:i.ZERO,[Zc]:i.ONE,[Jc]:i.SRC_COLOR,[Sa]:i.SRC_ALPHA,[nh]:i.SRC_ALPHA_SATURATE,[eh]:i.DST_COLOR,[Qc]:i.DST_ALPHA,[Kc]:i.ONE_MINUS_SRC_COLOR,[ba]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[jc]:i.ONE_MINUS_DST_ALPHA,[ih]:i.CONSTANT_COLOR,[sh]:i.ONE_MINUS_CONSTANT_COLOR,[rh]:i.CONSTANT_ALPHA,[ah]:i.ONE_MINUS_CONSTANT_ALPHA};function de(C,se,re,Ee,ye,et,tt,xt,It,nt){if(C===Pn){u===!0&&(we(i.BLEND),u=!1);return}if(u===!1&&(Ue(i.BLEND),u=!0),C!==Xc){if(C!==y||nt!==L){if((v!==qn||A!==qn)&&(i.blendEquation(i.FUNC_ADD),v=qn,A=qn),nt)switch(C){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,R=null,T=null,z=null,M.set(0,0,0),S=0,y=C,L=nt}return}ye=ye||se,et=et||re,tt=tt||Ee,(se!==v||ye!==A)&&(i.blendEquationSeparate(ve[se],ve[ye]),v=se,A=ye),(re!==E||Ee!==R||et!==T||tt!==z)&&(i.blendFuncSeparate(Re[re],Re[Ee],Re[et],Re[tt]),E=re,R=Ee,T=et,z=tt),(xt.equals(M)===!1||It!==S)&&(i.blendColor(xt.r,xt.g,xt.b,It),M.copy(xt),S=It),y=C,L=!1}function at(C,se){C.side===dt?we(i.CULL_FACE):Ue(i.CULL_FACE);let re=C.side===Ot;se&&(re=!re),Fe(re),C.blending===wi&&C.transparent===!1?de(Pn):de(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);let Ee=C.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(C){k!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),k=C)}function w(C){C!==Vc?(Ue(i.CULL_FACE),C!==Q&&(C===Co?i.cullFace(i.BACK):C===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),Q=C}function x(C){C!==I&&(X&&i.lineWidth(C),I=C)}function F(C,se,re){C?(Ue(i.POLYGON_OFFSET_FILL),(U!==se||V!==re)&&(i.polygonOffset(se,re),U=se,V=re)):we(i.POLYGON_OFFSET_FILL)}function K(C){C?Ue(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Z(C){C===void 0&&(C=i.TEXTURE0+q-1),ee!==C&&(i.activeTexture(C),ee=C)}function j(C,se,re){re===void 0&&(ee===null?re=i.TEXTURE0+q-1:re=ee);let Ee=ce[re];Ee===void 0&&(Ee={type:void 0,texture:void 0},ce[re]=Ee),(Ee.type!==C||Ee.texture!==se)&&(ee!==re&&(i.activeTexture(re),ee=re),i.bindTexture(C,se||Pe[C]),Ee.type=C,Ee.texture=se)}function fe(){let C=ce[ee];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(C){oe.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),oe.copy(C))}function Ye(C){ge.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function ct(C,se){let re=d.get(se);re===void 0&&(re=new WeakMap,d.set(se,re));let Ee=re.get(C);Ee===void 0&&(Ee=i.getUniformBlockIndex(se,C.name),re.set(C,Ee))}function He(C,se){let Ee=d.get(se).get(C);h.get(se)!==Ee&&(i.uniformBlockBinding(se,Ee,C.__bindingPointIndex),h.set(se,Ee))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ee=null,ce={},p={},g=new WeakMap,_=[],m=null,u=!1,y=null,v=null,E=null,R=null,A=null,T=null,z=null,M=new Ve(0,0,0),S=0,L=!1,k=null,Q=null,I=null,U=null,V=null,oe.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ue,disable:we,bindFramebuffer:qe,drawBuffers:N,useProgram:Pt,setBlending:de,setMaterial:at,setFlipSided:Fe,setCullFace:w,setLineWidth:x,setPolygonOffset:F,setScissorTest:K,activeTexture:Z,bindTexture:j,unbindTexture:fe,compressedTexImage2D:ae,compressedTexImage3D:he,texImage2D:_e,texImage3D:ue,updateUBOMapping:ct,uniformBlockBinding:He,texStorage2D:We,texStorage3D:Ae,texSubImage2D:Se,texSubImage3D:Be,compressedTexSubImage2D:$,compressedTexSubImage3D:$e,scissor:Ne,viewport:Ye,reset:ne}}function Cm(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Ki("canvas")}function _(w,x,F,K){let Z=1;if((w.width>K||w.height>K)&&(Z=K/Math.max(w.width,w.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let j=x?Ia:Math.floor,fe=j(Z*w.width),ae=j(Z*w.height);d===void 0&&(d=g(fe,ae));let he=F?g(fe,ae):d;return he.width=fe,he.height=ae,he.getContext("2d").drawImage(w,0,0,fe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+fe+"x"+ae+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return ul(w.width)&&ul(w.height)}function u(w){return o?!1:w.wrapS!==jt||w.wrapT!==jt||w.minFilter!==Ke&&w.minFilter!==Yt}function y(w,x){return w.generateMipmaps&&x&&w.minFilter!==Ke&&w.minFilter!==Yt}function v(w){i.generateMipmap(w)}function E(w,x,F,K,Z=!1){if(o===!1)return x;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=x;if(x===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),x===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8)),x===i.RGBA){let fe=Z?zs:Ze.getTransfer(K);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=fe===it?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function R(w,x,F){return y(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Ke&&w.minFilter!==Yt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){return w===Ke||w===Uo||w===Gr?i.NEAREST:i.LINEAR}function T(w){let x=w.target;x.removeEventListener("dispose",T),M(x),x.isVideoTexture&&h.delete(x)}function z(w){let x=w.target;x.removeEventListener("dispose",z),L(x)}function M(w){let x=n.get(w);if(x.__webglInit===void 0)return;let F=w.source,K=f.get(F);if(K){let Z=K[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(w),Object.keys(K).length===0&&f.delete(F)}n.remove(w)}function S(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let F=w.source,K=f.get(F);delete K[x.__cacheKey],a.memory.textures--}function L(w){let x=w.texture,F=n.get(w),K=n.get(x);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let j=0;j<F.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(F.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)i.deleteFramebuffer(F.__webglFramebuffer[Z]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Z=0,j=x.length;Z<j;Z++){let fe=n.get(x[Z]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(x[Z])}n.remove(x),n.remove(w)}let k=0;function Q(){k=0}function I(){let w=k;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),k+=1,w}function U(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function V(w,x){let F=n.get(w);if(w.isVideoTexture&&at(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,w,x);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function q(w,x){let F=n.get(w);if(w.version>0&&F.__version!==w.version){oe(F,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function X(w,x){let F=n.get(w);if(w.version>0&&F.__version!==w.version){oe(F,w,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function W(w,x){let F=n.get(w);if(w.version>0&&F.__version!==w.version){ge(F,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let J={[Ta]:i.REPEAT,[jt]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},ee={[Ke]:i.NEAREST,[Uo]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[Mh]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},ce={[Dh]:i.NEVER,[zh]:i.ALWAYS,[Uh]:i.LESS,[mc]:i.LEQUAL,[Nh]:i.EQUAL,[Bh]:i.GEQUAL,[Oh]:i.GREATER,[Fh]:i.NOTEQUAL};function G(w,x,F){if(F?(i.texParameteri(w,i.TEXTURE_WRAP_S,J[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,J[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,J[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ee[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ee[x.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==jt||x.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Ke&&x.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ke||x.minFilter!==Gr&&x.minFilter!==Zi||x.type===Cn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Ji&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Y(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",T));let K=x.source,Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));let j=U(x);if(j!==w.__cacheKey){Z[j]===void 0&&(Z[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[j].usedTimes++;let fe=Z[w.__cacheKey];fe!==void 0&&(Z[w.__cacheKey].usedTimes--,fe.usedTimes===0&&S(x)),w.__cacheKey=j,w.__webglTexture=Z[j].texture}return F}function oe(w,x,F){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);let Z=Y(w,x),j=x.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+F);let fe=n.get(j);if(j.version!==fe.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);let ae=Ze.getPrimaries(Ze.workingColorSpace),he=x.colorSpace===$t?null:Ze.getPrimaries(x.colorSpace),Se=x.colorSpace===$t||ae===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Be=u(x)&&m(x.image)===!1,$=_(x.image,Be,!1,s.maxTextureSize);$=Fe(x,$);let $e=m($)||o,We=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type),_e=E(x.internalFormat,We,Ae,x.colorSpace,x.isVideoTexture);G(K,x,$e);let ue,Ne=x.mipmaps,Ye=o&&x.isVideoTexture!==!0&&_e!==dc,ct=fe.__version===void 0||Z===!0,He=R(x,$,$e);if(x.isDepthTexture)_e=i.DEPTH_COMPONENT,o?x.type===Cn?_e=i.DEPTH_COMPONENT32F:x.type===Rn?_e=i.DEPTH_COMPONENT24:x.type===Zn?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:x.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Jn&&_e===i.DEPTH_COMPONENT&&x.type!==ho&&x.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Rn,Ae=r.convert(x.type)),x.format===Ci&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,x.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Zn,Ae=r.convert(x.type))),ct&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,_e,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,_e,$.width,$.height,0,We,Ae,null));else if(x.isDataTexture)if(Ne.length>0&&$e){Ye&&ct&&t.texStorage2D(i.TEXTURE_2D,He,_e,Ne[0].width,Ne[0].height);for(let ne=0,C=Ne.length;ne<C;ne++)ue=Ne[ne],Ye?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,We,Ae,ue.data):t.texImage2D(i.TEXTURE_2D,ne,_e,ue.width,ue.height,0,We,Ae,ue.data);x.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(i.TEXTURE_2D,He,_e,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,We,Ae,$.data)):t.texImage2D(i.TEXTURE_2D,0,_e,$.width,$.height,0,We,Ae,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,_e,Ne[0].width,Ne[0].height,$.depth);for(let ne=0,C=Ne.length;ne<C;ne++)ue=Ne[ne],x.format!==Vt?We!==null?Ye?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,$.depth,We,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,$.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,$.depth,We,Ae,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,$.depth,0,We,Ae,ue.data)}else{Ye&&ct&&t.texStorage2D(i.TEXTURE_2D,He,_e,Ne[0].width,Ne[0].height);for(let ne=0,C=Ne.length;ne<C;ne++)ue=Ne[ne],x.format!==Vt?We!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,We,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,We,Ae,ue.data):t.texImage2D(i.TEXTURE_2D,ne,_e,ue.width,ue.height,0,We,Ae,ue.data)}else if(x.isDataArrayTexture)Ye?(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,_e,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,We,Ae,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,$.width,$.height,$.depth,0,We,Ae,$.data);else if(x.isData3DTexture)Ye?(ct&&t.texStorage3D(i.TEXTURE_3D,He,_e,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,We,Ae,$.data)):t.texImage3D(i.TEXTURE_3D,0,_e,$.width,$.height,$.depth,0,We,Ae,$.data);else if(x.isFramebufferTexture){if(ct)if(Ye)t.texStorage2D(i.TEXTURE_2D,He,_e,$.width,$.height);else{let ne=$.width,C=$.height;for(let se=0;se<He;se++)t.texImage2D(i.TEXTURE_2D,se,_e,ne,C,0,We,Ae,null),ne>>=1,C>>=1}}else if(Ne.length>0&&$e){Ye&&ct&&t.texStorage2D(i.TEXTURE_2D,He,_e,Ne[0].width,Ne[0].height);for(let ne=0,C=Ne.length;ne<C;ne++)ue=Ne[ne],Ye?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,We,Ae,ue):t.texImage2D(i.TEXTURE_2D,ne,_e,We,Ae,ue);x.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(i.TEXTURE_2D,He,_e,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,Ae,$)):t.texImage2D(i.TEXTURE_2D,0,_e,We,Ae,$);y(x,$e)&&v(K),fe.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ge(w,x,F){if(x.image.length!==6)return;let K=Y(w,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let j=n.get(Z);if(Z.version!==j.__version||K===!0){t.activeTexture(i.TEXTURE0+F);let fe=Ze.getPrimaries(Ze.workingColorSpace),ae=x.colorSpace===$t?null:Ze.getPrimaries(x.colorSpace),he=x.colorSpace===$t||fe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Se=x.isCompressedTexture||x.image[0].isCompressedTexture,Be=x.image[0]&&x.image[0].isDataTexture,$=[];for(let ne=0;ne<6;ne++)!Se&&!Be?$[ne]=_(x.image[ne],!1,!0,s.maxCubemapSize):$[ne]=Be?x.image[ne].image:x.image[ne],$[ne]=Fe(x,$[ne]);let $e=$[0],We=m($e)||o,Ae=r.convert(x.format,x.colorSpace),_e=r.convert(x.type),ue=E(x.internalFormat,Ae,_e,x.colorSpace),Ne=o&&x.isVideoTexture!==!0,Ye=j.__version===void 0||K===!0,ct=R(x,$e,We);G(i.TEXTURE_CUBE_MAP,x,We);let He;if(Se){Ne&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,ue,$e.width,$e.height);for(let ne=0;ne<6;ne++){He=$[ne].mipmaps;for(let C=0;C<He.length;C++){let se=He[C];x.format!==Vt?Ae!==null?Ne?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,_e,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,ue,se.width,se.height,0,Ae,_e,se.data)}}}else{He=x.mipmaps,Ne&&Ye&&(He.length>0&&ct++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,ue,$[0].width,$[0].height));for(let ne=0;ne<6;ne++)if(Be){Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,$[ne].width,$[ne].height,Ae,_e,$[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,$[ne].width,$[ne].height,0,Ae,_e,$[ne].data);for(let C=0;C<He.length;C++){let re=He[C].image[ne].image;Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,re.width,re.height,Ae,_e,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,ue,re.width,re.height,0,Ae,_e,re.data)}}else{Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,_e,$[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Ae,_e,$[ne]);for(let C=0;C<He.length;C++){let se=He[C];Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Ae,_e,se.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,ue,Ae,_e,se.image[ne])}}}y(x,We)&&v(i.TEXTURE_CUBE_MAP),j.__version=Z.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function me(w,x,F,K,Z,j){let fe=r.convert(F.format,F.colorSpace),ae=r.convert(F.type),he=E(F.internalFormat,fe,ae,F.colorSpace);if(!n.get(x).__hasExternalTextures){let Be=Math.max(1,x.width>>j),$=Math.max(1,x.height>>j);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,he,Be,$,x.depth,0,fe,ae,null):t.texImage2D(Z,j,he,Be,$,0,fe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),de(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,n.get(F).__webglTexture,0,Re(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,n.get(F).__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(w,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer&&!x.stencilBuffer){let K=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||de(x)){let Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Cn?K=i.DEPTH_COMPONENT32F:Z.type===Rn&&(K=i.DEPTH_COMPONENT24));let j=Re(x);de(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,K,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,j,K,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(x.depthBuffer&&x.stencilBuffer){let K=Re(x);F&&de(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,x.width,x.height):de(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let K=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<K.length;Z++){let j=K[Z],fe=r.convert(j.format,j.colorSpace),ae=r.convert(j.type),he=E(j.internalFormat,fe,ae,j.colorSpace),Se=Re(x);F&&de(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,he,x.width,x.height):de(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);let K=n.get(x.depthTexture).__webglTexture,Z=Re(x);if(x.depthTexture.format===Jn)de(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Ci)de(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function we(w){let x=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ue(x.__webglFramebuffer,w)}else if(F){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]=i.createRenderbuffer(),Pe(x.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Pe(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(w,x,F){let K=n.get(w);x!==void 0&&me(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&we(w)}function N(w){let x=w.texture,F=n.get(w),K=n.get(x);w.addEventListener("dispose",z),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,a.memory.textures++);let Z=w.isWebGLCubeRenderTarget===!0,j=w.isWebGLMultipleRenderTargets===!0,fe=m(w)||o;if(Z){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let he=0;he<x.mipmaps.length;he++)F.__webglFramebuffer[ae][he]=i.createFramebuffer()}else F.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)F.__webglFramebuffer[ae]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(j)if(s.drawBuffers){let ae=w.texture;for(let he=0,Se=ae.length;he<Se;he++){let Be=n.get(ae[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&de(w)===!1){let ae=j?x:[x];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){let Se=ae[he];F.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[he]);let Be=r.convert(Se.format,Se.colorSpace),$=r.convert(Se.type),$e=E(Se.internalFormat,Be,$,Se.colorSpace,w.isXRRenderTarget===!0),We=Re(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,$e,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,F.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),G(i.TEXTURE_CUBE_MAP,x,fe);for(let ae=0;ae<6;ae++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)me(F.__webglFramebuffer[ae][he],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else me(F.__webglFramebuffer[ae],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);y(x,fe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let ae=w.texture;for(let he=0,Se=ae.length;he<Se;he++){let Be=ae[he],$=n.get(Be);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),G(i.TEXTURE_2D,Be,fe),me(F.__webglFramebuffer,w,Be,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),y(Be,fe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,K.__webglTexture),G(ae,x,fe),o&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)me(F.__webglFramebuffer[he],w,x,i.COLOR_ATTACHMENT0,ae,he);else me(F.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ae,0);y(x,fe)&&v(ae),t.unbindTexture()}w.depthBuffer&&we(w)}function Pt(w){let x=m(w)||o,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,Z=F.length;K<Z;K++){let j=F[K];if(y(j,x)){let fe=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(j).__webglTexture;t.bindTexture(fe,ae),v(fe),t.unbindTexture()}}}function ve(w){if(o&&w.samples>0&&de(w)===!1){let x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,K=w.height,Z=i.COLOR_BUFFER_BIT,j=[],fe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(w),he=w.isWebGLMultipleRenderTargets===!0;if(he)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){j.push(i.COLOR_ATTACHMENT0+Se),w.depthBuffer&&j.push(fe);let Be=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Be===!1&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),he){let $=n.get(x[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,Z,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]);let Be=n.get(x[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Re(w){return Math.min(s.maxSamples,w.samples)}function de(w){let x=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function at(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Fe(w,x){let F=w.colorSpace,K=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ca||F!==vn&&F!==$t&&(Ze.getTransfer(F)===it?o===!1?e.has("EXT_sRGB")===!0&&K===Vt?(w.format=Ca,w.minFilter=Yt,w.generateMipmaps=!1):x=Vs.sRGBToLinear(x):(K!==Vt||Z!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=qe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=me,this.useMultisampledRTT=de}function Pm(i,e,t){let n=t.isWebGL2;function s(r,a=$t){let o,l=Ze.getTransfer(a);if(r===Ln)return i.UNSIGNED_BYTE;if(r===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===lc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Sh)return i.BYTE;if(r===bh)return i.SHORT;if(r===ho)return i.UNSIGNED_SHORT;if(r===ac)return i.INT;if(r===Rn)return i.UNSIGNED_INT;if(r===Cn)return i.FLOAT;if(r===Ji)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===wh)return i.ALPHA;if(r===Vt)return i.RGBA;if(r===Eh)return i.LUMINANCE;if(r===Th)return i.LUMINANCE_ALPHA;if(r===Jn)return i.DEPTH_COMPONENT;if(r===Ci)return i.DEPTH_STENCIL;if(r===Ca)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ah)return i.RED;if(r===cc)return i.RED_INTEGER;if(r===Rh)return i.RG;if(r===hc)return i.RG_INTEGER;if(r===uc)return i.RGBA_INTEGER;if(r===Vr||r===Wr||r===Xr||r===qr)if(l===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Vr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Vr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===No||r===Oo||r===Fo||r===Bo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===No)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zo||r===Ho)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===zo)return l===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ho)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ko||r===Go||r===Vo||r===Wo||r===Xo||r===qo||r===Yo||r===$o||r===Zo||r===Jo||r===Ko||r===Qo||r===jo||r===el)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ko)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Go)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$o)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ko)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===el)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yr||r===tl||r===nl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Yr)return l===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ch||r===il||r===sl||r===rl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Yr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===il)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Wa=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Qe=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Im={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Im)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xa=class extends Un{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,_=t.getContextAttributes(),m=null,u=null,y=[],v=[],E=new be,R=null,A=new Tt;A.layers.enable(1),A.viewport=new rt;let T=new Tt;T.layers.enable(2),T.viewport=new rt;let z=[A,T],M=new Wa;M.layers.enable(1),M.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=y[G];return Y===void 0&&(Y=new $i,y[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=y[G];return Y===void 0&&(Y=new $i,y[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=y[G];return Y===void 0&&(Y=new $i,y[G]=Y),Y.getHandSpace()};function k(G){let Y=v.indexOf(G.inputSource);if(Y===-1)return;let oe=y[Y];oe!==void 0&&(oe.update(G.inputSource,G.frame,c||a),oe.dispatchEvent({type:G.type,data:G.inputSource}))}function Q(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",I);for(let G=0;G<y.length;G++){let Y=v[G];Y!==null&&(v[G]=null,y[G].disconnect(Y))}S=null,L=null,e.setRenderTarget(m),p=null,f=null,d=null,s=null,u=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new yn(p.framebufferWidth,p.framebufferHeight,{format:Vt,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,oe=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?Ci:Jn,oe=_.stencil?Zn:Rn);let me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new yn(f.textureWidth,f.textureHeight,{format:Vt,type:Ln,depthTexture:new er(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Pe=e.properties.get(u);Pe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(G){for(let Y=0;Y<G.removed.length;Y++){let oe=G.removed[Y],ge=v.indexOf(oe);ge>=0&&(v[ge]=null,y[ge].disconnect(oe))}for(let Y=0;Y<G.added.length;Y++){let oe=G.added[Y],ge=v.indexOf(oe);if(ge===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=v.length){v.push(oe),ge=Pe;break}else if(v[Pe]===null){v[Pe]=oe,ge=Pe;break}if(ge===-1)break}let me=y[ge];me&&me.connect(oe)}}let U=new P,V=new P;function q(G,Y,oe){U.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);let ge=U.distanceTo(V),me=Y.projectionMatrix.elements,Pe=oe.projectionMatrix.elements,Ue=me[14]/(me[10]-1),we=me[14]/(me[10]+1),qe=(me[9]+1)/me[5],N=(me[9]-1)/me[5],Pt=(me[8]-1)/me[0],ve=(Pe[8]+1)/Pe[0],Re=Ue*Pt,de=Ue*ve,at=ge/(-Pt+ve),Fe=at*-Pt;Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Fe),G.translateZ(at),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let w=Ue+at,x=we+at,F=Re-Fe,K=de+(ge-Fe),Z=qe*we/x*w,j=N*we/x*w;G.projectionMatrix.makePerspective(F,K,Z,j,w,x),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;M.near=T.near=A.near=G.near,M.far=T.far=A.far=G.far,(S!==M.near||L!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,L=M.far);let Y=G.parent,oe=M.cameras;X(M,Y);for(let ge=0;ge<oe.length;ge++)X(oe[ge],Y);oe.length===2?q(M,A,T):M.projectionMatrix.copy(A.projectionMatrix),W(G,M,Y)};function W(G,Y,oe){oe===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(oe.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Pa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let J=null;function ee(G,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){let oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ge=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let me=0;me<oe.length;me++){let Pe=oe[me],Ue=null;if(p!==null)Ue=p.getViewport(Pe);else{let qe=d.getViewSubImage(f,Pe);Ue=qe.viewport,me===0&&(e.setRenderTargetTextures(u,qe.colorTexture,f.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(u))}let we=z[me];we===void 0&&(we=new Tt,we.layers.enable(me),we.viewport=new rt,z[me]=we),we.matrix.fromArray(Pe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Pe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),me===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(we)}}for(let oe=0;oe<y.length;oe++){let ge=v[oe],me=y[oe];ge!==null&&me!==void 0&&me.update(ge,Y,c||a)}J&&J(G,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let ce=new yc;ce.setAnimationLoop(ee),this.setAnimationLoop=function(G){J=G},this.dispose=function(){}}};function Lm(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,vc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,E)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,y,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ot&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ot&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let y=e.get(u).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=v*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){let y=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dm(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let E=v.program;n.uniformBlockBinding(y,E)}function c(y,v){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",m));let R=v.program;n.updateUBOMapping(y,R);let A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){let v=d();y.__bindingPointIndex=v;let E=i.createBuffer(),R=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],E=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,T=E.length;A<T;A++){let z=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,S=z.length;M<S;M++){let L=z[M];if(p(L,A,M,R)===!0){let k=L.__offset,Q=Array.isArray(L.value)?L.value:[L.value],I=0;for(let U=0;U<Q.length;U++){let V=Q[U],q=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,k+I,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,E,R){let A=y.value,T=v+"_"+E;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{let z=R[T];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return R[T]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function g(y){let v=y.uniforms,E=0,R=16;for(let T=0,z=v.length;T<z;T++){let M=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,L=M.length;S<L;S++){let k=M[S],Q=Array.isArray(k.value)?k.value:[k.value];for(let I=0,U=Q.length;I<U;I++){let V=Q[I],q=_(V),X=E%R;X!==0&&R-X<q.boundary&&(E+=R-X),k.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=q.storage}}}let A=E%R;return A>0&&(E+=R-A),y.__size=E,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ts=class{constructor(e={}){let{canvas:t=kh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;let v=this,E=!1,R=0,A=0,T=null,z=-1,M=null,S=new rt,L=new rt,k=null,Q=new Ve(0),I=0,U=t.width,V=t.height,q=1,X=null,W=null,J=new rt(0,0,U,V),ee=new rt(0,0,U,V),ce=!1,G=new es,Y=!1,oe=!1,ge=null,me=new _t,Pe=new be,Ue=new P,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return T===null?q:1}let N=n;function Pt(b,D){for(let B=0;B<b.length;B++){let H=b[B],O=t.getContext(H,D);if(O!==null)return O}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oo}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),N===null){let D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),N=Pt(D,b),N===null)throw Pt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,Re,de,at,Fe,w,x,F,K,Z,j,fe,ae,he,Se,Be,$,$e,We,Ae,_e,ue,Ne,Ye;function ct(){ve=new Qf(N),Re=new qf(N,ve,e),ve.init(Re),ue=new Pm(N,ve,Re),de=new Rm(N,ve,Re),at=new tp(N),Fe=new gm,w=new Cm(N,ve,de,Fe,Re,ue,at),x=new $f(v),F=new Kf(v),K=new lu(N,Re),Ne=new Wf(N,ve,K,Re),Z=new jf(N,K,at,Ne),j=new rp(N,Z,K,at),We=new sp(N,Re,w),Be=new Yf(Fe),fe=new mm(v,x,F,ve,Re,Ne,Be),ae=new Lm(v,Fe),he=new vm,Se=new wm(ve,Re),$e=new Vf(v,x,F,de,j,f,l),$=new Am(v,j,Re),Ye=new Dm(N,at,Re,de),Ae=new Xf(N,ve,at,Re),_e=new ep(N,ve,at,Re),at.programs=fe.programs,v.capabilities=Re,v.extensions=ve,v.properties=Fe,v.renderLists=he,v.shadowMap=$,v.state=de,v.info=at}ct();let He=new Xa(v,N);this.xr=He,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(U,V,!1))},this.getSize=function(b){return b.set(U,V)},this.setSize=function(b,D,B=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,V=D,t.width=Math.floor(b*q),t.height=Math.floor(D*q),B===!0&&(t.style.width=b+"px",t.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(U*q,V*q).floor()},this.setDrawingBufferSize=function(b,D,B){U=b,V=D,q=B,t.width=Math.floor(b*B),t.height=Math.floor(D*B),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,D,B,H){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,D,B,H),de.viewport(S.copy(J).multiplyScalar(q).floor())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,D,B,H){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,D,B,H),de.scissor(L.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){de.setScissorTest(ce=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(b=!0,D=!0,B=!0){let H=0;if(b){let O=!1;if(T!==null){let le=T.texture.format;O=le===uc||le===hc||le===cc}if(O){let le=T.texture.type,pe=le===Ln||le===Rn||le===ho||le===Zn||le===oc||le===lc,Me=$e.getClearColor(),Te=$e.getClearAlpha(),ze=Me.r,Ce=Me.g,Ie=Me.b;pe?(p[0]=ze,p[1]=Ce,p[2]=Ie,p[3]=Te,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=ze,g[1]=Ce,g[2]=Ie,g[3]=Te,N.clearBufferiv(N.COLOR,0,g))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT),B&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),he.dispose(),Se.dispose(),Fe.dispose(),x.dispose(),F.dispose(),j.dispose(),Ne.dispose(),Ye.dispose(),fe.dispose(),He.dispose(),He.removeEventListener("sessionstart",It),He.removeEventListener("sessionend",nt),ge&&(ge.dispose(),ge=null),Lt.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=at.autoReset,D=$.enabled,B=$.autoUpdate,H=$.needsUpdate,O=$.type;ct(),at.autoReset=b,$.enabled=D,$.autoUpdate=B,$.needsUpdate=H,$.type=O}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function re(b){let D=b.target;D.removeEventListener("dispose",re),Ee(D)}function Ee(b){ye(b),Fe.remove(b)}function ye(b){let D=Fe.get(b).programs;D!==void 0&&(D.forEach(function(B){fe.releaseProgram(B)}),b.isShaderMaterial&&fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,B,H,O,le){D===null&&(D=we);let pe=O.isMesh&&O.matrixWorld.determinant()<0,Me=zc(b,D,B,H,O);de.setMaterial(H,pe);let Te=B.index,ze=1;if(H.wireframe===!0){if(Te=Z.getWireframeAttribute(B),Te===void 0)return;ze=2}let Ce=B.drawRange,Ie=B.attributes.position,ft=Ce.start*ze,Ht=(Ce.start+Ce.count)*ze;le!==null&&(ft=Math.max(ft,le.start*ze),Ht=Math.min(Ht,(le.start+le.count)*ze)),Te!==null?(ft=Math.max(ft,0),Ht=Math.min(Ht,Te.count)):Ie!=null&&(ft=Math.max(ft,0),Ht=Math.min(Ht,Ie.count));let Mt=Ht-ft;if(Mt<0||Mt===1/0)return;Ne.setup(O,H,Me,B,Te);let ln,ot=Ae;if(Te!==null&&(ln=K.get(Te),ot=_e,ot.setIndex(ln)),O.isMesh)H.wireframe===!0?(de.setLineWidth(H.wireframeLinewidth*qe()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(O.isLine){let ke=H.linewidth;ke===void 0&&(ke=1),de.setLineWidth(ke*qe()),O.isLineSegments?ot.setMode(N.LINES):O.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else O.isPoints?ot.setMode(N.POINTS):O.isSprite&&ot.setMode(N.TRIANGLES);if(O.isBatchedMesh)ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ot.renderInstances(ft,Mt,O.count);else if(B.isInstancedBufferGeometry){let ke=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Br=Math.min(B.instanceCount,ke);ot.renderInstances(ft,Mt,Br)}else ot.render(ft,Mt)};function et(b,D,B){b.transparent===!0&&b.side===dt&&b.forceSinglePass===!1?(b.side=Ot,b.needsUpdate=!0,ls(b,D,B),b.side=sn,b.needsUpdate=!0,ls(b,D,B),b.side=dt):ls(b,D,B)}this.compile=function(b,D,B=null){B===null&&(B=b),m=Se.get(B),m.init(),y.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),b!==B&&b.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(v._useLegacyLights);let H=new Set;return b.traverse(function(O){let le=O.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){let Me=le[pe];et(Me,B,O),H.add(Me)}else et(le,B,O),H.add(le)}),y.pop(),m=null,H},this.compileAsync=function(b,D,B=null){let H=this.compile(b,D,B);return new Promise(O=>{function le(){if(H.forEach(function(pe){Fe.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){O(b);return}setTimeout(le,10)}ve.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let tt=null;function xt(b){tt&&tt(b)}function It(){Lt.stop()}function nt(){Lt.start()}let Lt=new yc;Lt.setAnimationLoop(xt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(b){tt=b,He.setAnimationLoop(b),b===null?Lt.stop():Lt.start()},He.addEventListener("sessionstart",It),He.addEventListener("sessionend",nt),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(D),D=He.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,D,T),m=Se.get(b,y.length),m.init(),y.push(m),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),G.setFromProjectionMatrix(me),oe=this.localClippingEnabled,Y=Be.init(this.clippingPlanes,oe),_=he.get(b,u.length),_.init(),u.push(_),tn(b,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,W),this.info.render.frame++,Y===!0&&Be.beginShadows();let B=m.state.shadowsArray;if($.render(B,b,D),Y===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(_,b),m.setupLights(v._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let O=0,le=H.length;O<le;O++){let pe=H[O];bo(_,b,pe,pe.viewport)}}else bo(_,b,D);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,D),Ne.resetDefaultState(),z=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function tn(b,D,B,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){H&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);let pe=j.update(b),Me=b.material;Me.visible&&_.push(b,pe,Me,B,Ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){let pe=j.update(b),Me=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ue.copy(pe.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){let Te=pe.groups;for(let ze=0,Ce=Te.length;ze<Ce;ze++){let Ie=Te[ze],ft=Me[Ie.materialIndex];ft&&ft.visible&&_.push(b,pe,ft,B,Ue.z,Ie)}}else Me.visible&&_.push(b,pe,Me,B,Ue.z,null)}}let le=b.children;for(let pe=0,Me=le.length;pe<Me;pe++)tn(le[pe],D,B,H)}function bo(b,D,B,H){let O=b.opaque,le=b.transmissive,pe=b.transparent;m.setupLightsView(B),Y===!0&&Be.setGlobalState(v.clippingPlanes,B),le.length>0&&Bc(O,le,D,B),H&&de.viewport(S.copy(H)),O.length>0&&os(O,D,B),le.length>0&&os(le,D,B),pe.length>0&&os(pe,D,B),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Bc(b,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let le=Re.isWebGL2;ge===null&&(ge=new yn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ji:Ln,minFilter:Zi,samples:le?4:0})),v.getDrawingBufferSize(Pe),le?ge.setSize(Pe.x,Pe.y):ge.setSize(Ia(Pe.x),Ia(Pe.y));let pe=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(Q),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();let Me=v.toneMapping;v.toneMapping=In,os(b,B,H),w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge);let Te=!1;for(let ze=0,Ce=D.length;ze<Ce;ze++){let Ie=D[ze],ft=Ie.object,Ht=Ie.geometry,Mt=Ie.material,ln=Ie.group;if(Mt.side===dt&&ft.layers.test(H.layers)){let ot=Mt.side;Mt.side=Ot,Mt.needsUpdate=!0,wo(ft,B,H,Ht,Mt,ln),Mt.side=ot,Mt.needsUpdate=!0,Te=!0}}Te===!0&&(w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge)),v.setRenderTarget(pe),v.setClearColor(Q,I),v.toneMapping=Me}function os(b,D,B){let H=D.isScene===!0?D.overrideMaterial:null;for(let O=0,le=b.length;O<le;O++){let pe=b[O],Me=pe.object,Te=pe.geometry,ze=H===null?pe.material:H,Ce=pe.group;Me.layers.test(B.layers)&&wo(Me,D,B,Te,ze,Ce)}}function wo(b,D,B,H,O,le){b.onBeforeRender(v,D,B,H,O,le),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(v,D,B,H,b,le),O.transparent===!0&&O.side===dt&&O.forceSinglePass===!1?(O.side=Ot,O.needsUpdate=!0,v.renderBufferDirect(B,D,H,O,b,le),O.side=sn,O.needsUpdate=!0,v.renderBufferDirect(B,D,H,O,b,le),O.side=dt):v.renderBufferDirect(B,D,H,O,b,le),b.onAfterRender(v,D,B,H,O,le)}function ls(b,D,B){D.isScene!==!0&&(D=we);let H=Fe.get(b),O=m.state.lights,le=m.state.shadowsArray,pe=O.state.version,Me=fe.getParameters(b,O.state,le,D,B),Te=fe.getProgramCacheKey(Me),ze=H.programs;H.environment=b.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(b.isMeshStandardMaterial?F:x).get(b.envMap||H.environment),ze===void 0&&(b.addEventListener("dispose",re),ze=new Map,H.programs=ze);let Ce=ze.get(Te);if(Ce!==void 0){if(H.currentProgram===Ce&&H.lightsStateVersion===pe)return To(b,Me),Ce}else Me.uniforms=fe.getUniforms(b),b.onBuild(B,Me,v),b.onBeforeCompile(Me,v),Ce=fe.acquireProgram(Me,Te),ze.set(Te,Ce),H.uniforms=Me.uniforms;let Ie=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=Be.uniform),To(b,Me),H.needsLights=kc(b),H.lightsStateVersion=pe,H.needsLights&&(Ie.ambientLightColor.value=O.state.ambient,Ie.lightProbe.value=O.state.probe,Ie.directionalLights.value=O.state.directional,Ie.directionalLightShadows.value=O.state.directionalShadow,Ie.spotLights.value=O.state.spot,Ie.spotLightShadows.value=O.state.spotShadow,Ie.rectAreaLights.value=O.state.rectArea,Ie.ltc_1.value=O.state.rectAreaLTC1,Ie.ltc_2.value=O.state.rectAreaLTC2,Ie.pointLights.value=O.state.point,Ie.pointLightShadows.value=O.state.pointShadow,Ie.hemisphereLights.value=O.state.hemi,Ie.directionalShadowMap.value=O.state.directionalShadowMap,Ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ie.spotShadowMap.value=O.state.spotShadowMap,Ie.spotLightMatrix.value=O.state.spotLightMatrix,Ie.spotLightMap.value=O.state.spotLightMap,Ie.pointShadowMap.value=O.state.pointShadowMap,Ie.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ce,H.uniformsList=null,Ce}function Eo(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Ti.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function To(b,D){let B=Fe.get(b);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function zc(b,D,B,H,O){D.isScene!==!0&&(D=we),w.resetTextureUnits();let le=D.fog,pe=H.isMeshStandardMaterial?D.environment:null,Me=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:vn,Te=(H.isMeshStandardMaterial?F:x).get(H.envMap||pe),ze=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ce=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!B.morphAttributes.position,ft=!!B.morphAttributes.normal,Ht=!!B.morphAttributes.color,Mt=In;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Mt=v.toneMapping);let ln=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=ln!==void 0?ln.length:0,ke=Fe.get(H),Br=m.state.lights;if(Y===!0&&(oe===!0||b!==M)){let Xt=b===M&&H.id===z;Be.setState(H,b,Xt)}let ht=!1;H.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Br.state.version||ke.outputColorSpace!==Me||O.isBatchedMesh&&ke.batching===!1||!O.isBatchedMesh&&ke.batching===!0||O.isInstancedMesh&&ke.instancing===!1||!O.isInstancedMesh&&ke.instancing===!0||O.isSkinnedMesh&&ke.skinning===!1||!O.isSkinnedMesh&&ke.skinning===!0||O.isInstancedMesh&&ke.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ke.instancingColor===!1&&O.instanceColor!==null||ke.envMap!==Te||H.fog===!0&&ke.fog!==le||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Be.numPlanes||ke.numIntersection!==Be.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==Ce||ke.morphTargets!==Ie||ke.morphNormals!==ft||ke.morphColors!==Ht||ke.toneMapping!==Mt||Re.isWebGL2===!0&&ke.morphTargetsCount!==ot)&&(ht=!0):(ht=!0,ke.__version=H.version);let zn=ke.currentProgram;ht===!0&&(zn=ls(H,D,O));let Ao=!1,Bi=!1,zr=!1,bt=zn.getUniforms(),Hn=ke.uniforms;if(de.useProgram(zn.program)&&(Ao=!0,Bi=!0,zr=!0),H.id!==z&&(z=H.id,Bi=!0),Ao||M!==b){bt.setValue(N,"projectionMatrix",b.projectionMatrix),bt.setValue(N,"viewMatrix",b.matrixWorldInverse);let Xt=bt.map.cameraPosition;Xt!==void 0&&Xt.setValue(N,Ue.setFromMatrixPosition(b.matrixWorld)),Re.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&bt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Bi=!0,zr=!0)}if(O.isSkinnedMesh){bt.setOptional(N,O,"bindMatrix"),bt.setOptional(N,O,"bindMatrixInverse");let Xt=O.skeleton;Xt&&(Re.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),bt.setValue(N,"boneTexture",Xt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(bt.setOptional(N,O,"batchingTexture"),bt.setValue(N,"batchingTexture",O._matricesTexture,w));let Hr=B.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0&&Re.isWebGL2===!0)&&We.update(O,B,zn),(Bi||ke.receiveShadow!==O.receiveShadow)&&(ke.receiveShadow=O.receiveShadow,bt.setValue(N,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Hn.envMap.value=Te,Hn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Bi&&(bt.setValue(N,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Hc(Hn,zr),le&&H.fog===!0&&ae.refreshFogUniforms(Hn,le),ae.refreshMaterialUniforms(Hn,H,q,V,ge),Ti.upload(N,Eo(ke),Hn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ti.upload(N,Eo(ke),Hn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&bt.setValue(N,"center",O.center),bt.setValue(N,"modelViewMatrix",O.modelViewMatrix),bt.setValue(N,"normalMatrix",O.normalMatrix),bt.setValue(N,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Xt=H.uniformsGroups;for(let kr=0,Gc=Xt.length;kr<Gc;kr++)if(Re.isWebGL2){let Ro=Xt[kr];Ye.update(Ro,zn),Ye.bind(Ro,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function Hc(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function kc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,D,B){Fe.get(b.texture).__webglTexture=D,Fe.get(b.depthTexture).__webglTexture=B;let H=Fe.get(b);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){let B=Fe.get(b);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,B=0){T=b,R=D,A=B;let H=!0,O=null,le=!1,pe=!1;if(b){let Te=Fe.get(b);Te.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):Te.__webglFramebuffer===void 0?w.setupRenderTarget(b):Te.__hasExternalTextures&&w.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);let ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(pe=!0);let Ce=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?O=Ce[D][B]:O=Ce[D],le=!0):Re.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?O=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[B]:O=Ce,S.copy(b.viewport),L.copy(b.scissor),k=b.scissorTest}else S.copy(J).multiplyScalar(q).floor(),L.copy(ee).multiplyScalar(q).floor(),k=ce;if(de.bindFramebuffer(N.FRAMEBUFFER,O)&&Re.drawBuffers&&H&&de.drawBuffers(b,O),de.viewport(S),de.scissor(L),de.setScissorTest(k),le){let Te=Fe.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,B)}else if(pe){let Te=Fe.get(b.texture),ze=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,B||0,ze)}z=-1},this.readRenderTargetPixels=function(b,D,B,H,O,le,pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){de.bindFramebuffer(N.FRAMEBUFFER,Me);try{let Te=b.texture,ze=Te.format,Ce=Te.type;if(ze!==Vt&&ue.convert(ze)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ie=Ce===Ji&&(ve.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ce!==Ln&&ue.convert(Ce)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===Cn&&(Re.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&B>=0&&B<=b.height-O&&N.readPixels(D,B,H,O,ue.convert(ze),ue.convert(Ce),le)}finally{let Te=T!==null?Fe.get(T).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(b,D,B=0){let H=Math.pow(2,-B),O=Math.floor(D.image.width*H),le=Math.floor(D.image.height*H);w.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,b.x,b.y,O,le),de.unbindTexture()},this.copyTextureToTexture=function(b,D,B,H=0){let O=D.image.width,le=D.image.height,pe=ue.convert(B.format),Me=ue.convert(B.type);w.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,b.x,b.y,O,le,pe,Me,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,pe,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,b.x,b.y,pe,Me,D.image),H===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(b,D,B,H,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let le=b.max.x-b.min.x+1,pe=b.max.y-b.min.y+1,Me=b.max.z-b.min.z+1,Te=ue.convert(H.format),ze=ue.convert(H.type),Ce;if(H.isData3DTexture)w.setTexture3D(H,0),Ce=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)w.setTexture2DArray(H,0),Ce=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let Ie=N.getParameter(N.UNPACK_ROW_LENGTH),ft=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ht=N.getParameter(N.UNPACK_SKIP_PIXELS),Mt=N.getParameter(N.UNPACK_SKIP_ROWS),ln=N.getParameter(N.UNPACK_SKIP_IMAGES),ot=B.isCompressedTexture?B.mipmaps[O]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ot.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Ce,O,D.x,D.y,D.z,le,pe,Me,Te,ze,ot.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ce,O,D.x,D.y,D.z,le,pe,Me,Te,ot.data)):N.texSubImage3D(Ce,O,D.x,D.y,D.z,le,pe,Me,Te,ze,ot),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ie),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ht),N.pixelStorei(N.UNPACK_SKIP_ROWS,Mt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ln),O===0&&H.generateMipmaps&&N.generateMipmap(Ce),de.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,de.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===uo?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===vr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Kn:fc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kn?ut:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},qa=class extends ts{};qa.prototype.isWebGL1Renderer=!0;var tr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nr=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ya=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dt=new P,ir=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ii=class extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vi,Vi=new P,yi=new P,xi=new P,Mi=new be,Wi=new be,Ec=new _t,Is=new P,Xi=new P,Ls=new P,Zl=new be,ya=new be,Jl=new be,ns=class extends Rt{constructor(e=new Ii){if(super(),this.isSprite=!0,this.type="Sprite",vi===void 0){vi=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ya(t,5);vi.setIndex([0,1,2,0,2,3]),vi.setAttribute("position",new ir(n,3,0,!1)),vi.setAttribute("uv",new ir(n,2,3,!1))}this.geometry=vi,this.material=e,this.center=new be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yi.setFromMatrixScale(this.matrixWorld),Ec.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yi.multiplyScalar(-xi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ds(Is.set(-.5,-.5,0),xi,a,yi,s,r),Ds(Xi.set(.5,-.5,0),xi,a,yi,s,r),Ds(Ls.set(.5,.5,0),xi,a,yi,s,r),Zl.set(0,0),ya.set(1,0),Jl.set(1,1);let o=e.ray.intersectTriangle(Is,Xi,Ls,!1,Vi);if(o===null&&(Ds(Xi.set(-.5,.5,0),xi,a,yi,s,r),ya.set(0,1),o=e.ray.intersectTriangle(Is,Ls,Xi,!1,Vi),o===null))return;let l=e.ray.origin.distanceTo(Vi);l<e.near||l>e.far||t.push({distance:l,point:Vi.clone(),uv:$n.getInterpolation(Vi,Is,Xi,Ls,Zl,ya,Jl,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ds(i,e,t,n,s,r){Mi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Wi.x=r*Mi.x-s*Mi.y,Wi.y=s*Mi.x+r*Mi.y):Wi.copy(Mi),i.copy(e),i.x+=Wi.x,i.y+=Wi.y,i.applyMatrix4(Ec)}var sr=class extends At{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ke,h=Ke,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rr=class extends At{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var is=class i extends Ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bt=class i extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],g=0,_=[],m=n/2,u=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(p,2));function y(){let E=new P,R=new P,A=0,T=(t-e)/n;for(let z=0;z<=r;z++){let M=[],S=z/r,L=S*(t-e)+e;for(let k=0;k<=s;k++){let Q=k/s,I=Q*l+o,U=Math.sin(I),V=Math.cos(I);R.x=L*U,R.y=-S*n+m,R.z=L*V,d.push(R.x,R.y,R.z),E.set(U,T,V).normalize(),f.push(E.x,E.y,E.z),p.push(Q,1-S),M.push(g++)}_.push(M)}for(let z=0;z<s;z++)for(let M=0;M<r;M++){let S=_[M][z],L=_[M+1][z],k=_[M+1][z+1],Q=_[M][z+1];h.push(S,L,Q),h.push(L,k,Q),A+=6}c.addGroup(u,A,0),u+=A}function v(E){let R=g,A=new be,T=new P,z=0,M=E===!0?e:t,S=E===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;let L=g;for(let k=0;k<=s;k++){let I=k/s*l+o,U=Math.cos(I),V=Math.sin(I);T.x=M*V,T.y=m*S,T.z=M*U,d.push(T.x,T.y,T.z),f.push(0,S,0),A.x=U*.5+.5,A.y=V*.5*S+.5,p.push(A.x,A.y),g++}for(let k=0;k<s;k++){let Q=R+k,I=L+k;E===!0?h.push(I,I+1,Q):h.push(I+1,I,Q),z+=3}c.addGroup(u,z,E===!0?1:2),u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ct=class i extends Bt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ar=class i extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new P,E=new P,R=new P;for(let A=0;A<t.length;A+=3)p(t[A+0],v),p(t[A+1],E),p(t[A+2],R),l(v,E,R,y)}function l(y,v,E,R){let A=R+1,T=[];for(let z=0;z<=A;z++){T[z]=[];let M=y.clone().lerp(E,z/A),S=v.clone().lerp(E,z/A),L=A-z;for(let k=0;k<=L;k++)k===0&&z===A?T[z][k]=M:T[z][k]=M.clone().lerp(S,k/L)}for(let z=0;z<A;z++)for(let M=0;M<2*(A-z)-1;M++){let S=Math.floor(M/2);M%2===0?(f(T[z][S+1]),f(T[z+1][S]),f(T[z][S])):(f(T[z][S+1]),f(T[z+1][S+1]),f(T[z+1][S]))}}function c(y){let v=new P;for(let E=0;E<r.length;E+=3)v.x=r[E+0],v.y=r[E+1],v.z=r[E+2],v.normalize().multiplyScalar(y),r[E+0]=v.x,r[E+1]=v.y,r[E+2]=v.z}function h(){let y=new P;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let E=m(y)/2/Math.PI+.5,R=u(y)/Math.PI+.5;a.push(E,1-R)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){let v=a[y+0],E=a[y+2],R=a[y+4],A=Math.max(v,E,R),T=Math.min(v,E,R);A>.9&&T<.1&&(v<.2&&(a[y+0]+=1),E<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,v){let E=y*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function g(){let y=new P,v=new P,E=new P,R=new P,A=new be,T=new be,z=new be;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),A.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),z.set(a[S+4],a[S+5]),R.copy(y).add(v).add(E).divideScalar(3);let L=m(R);_(A,S+0,y,L),_(T,S+2,v,L),_(z,S+4,E,L)}}function _(y,v,E,R){R<0&&y.x===1&&(a[v]=y.x-1),E.x===0&&E.z===0&&(a[v]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var or=class i extends ar{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},an=class i extends ar{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},on=class i extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,f=(t-e)/s,p=new P,g=new be;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let u=r+m/n*a;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let u=0;u<n;u++){let y=u+m,v=y,E=y+n+1,R=y+n+2,A=y+1;o.push(v,E,A),o.push(E,R,A)}}this.setIndex(o),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var pt=class i extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,f=new P,p=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){let y=[],v=u/n,E=0;u===0&&a===0?E=.5/t:u===n&&l===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){let A=R/t;d.x=-e*Math.cos(s+A*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+A*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(A+E,1-v),y.push(c++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){let v=h[u][y+1],E=h[u][y],R=h[u+1][y],A=h[u+1][y+1];(u!==0||a>0)&&p.push(v,E,A),(u!==n-1||l<Math.PI)&&p.push(E,R,A)}this.setIndex(p),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fn=class i extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new P,d=new P,f=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,y=(s+1)*p+g;a.push(_,m,y),a.push(m,u,y)}this.setIndex(a),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var lr=class extends On{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Us(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Um(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$a=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ol:r=e,o=2*t-n;break;case ll:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ol:a=e,l=2*n-t;break;case ll:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,u=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*_+.5*g,E=p*m-p*_;for(let R=0;R!==o;++R)r[R]=u*a[h+R]+y*a[c+R]+v*a[l+R]+E*a[d+R];return r}},Za=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},Ja=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},en=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Us(t,this.TimeBufferType),this.values=Us(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Us(e.times,Array),values:Us(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $a(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Bs:t=this.InterpolantFactoryMethodLinear;break;case $r:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Bs;case this.InterpolantFactoryMethodSmooth:return $r}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Um(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$r,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Bs;var jn=class extends en{};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Fs;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends en{};Ka.prototype.ValueTypeName="color";var Qa=class extends en{};Qa.prototype.ValueTypeName="number";var ja=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ss=class extends en{InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}};ss.prototype.ValueTypeName="quaternion";ss.prototype.DefaultInterpolation=Bs;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends en{};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Fs;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends en{};eo.prototype.ValueTypeName="vector";var Kl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},to=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Nm=new to,rs=class{constructor(e){this.manager=e!==void 0?e:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};rs.DEFAULT_MATERIAL_NAME="__DEFAULT";var no=class extends rs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Kl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ki("img");function l(){h(),Kl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var cr=class extends rs{constructor(e){super(e)}load(e,t,n,s){let r=new At,a=new no(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Di=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},hr=class extends Di{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xa=new _t,Ql=new P,jl=new P,ur=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ql),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ec=new _t,qi=new P,Ma=new P,io=class extends ur{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qi.setFromMatrixPosition(e.matrixWorld),n.position.copy(qi),Ma.copy(n.position),Ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ma),n.updateMatrixWorld(),s.makeTranslation(-qi.x,-qi.y,-qi.z),ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec)}},dr=class extends Di{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new io}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},so=class extends ur{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends Di{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new so}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pr=class extends Di{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var mr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function tc(){return(typeof performance>"u"?Date:performance).now()}var po="\\[\\]\\.:\\/",Om=new RegExp("["+po+"]","g"),mo="[^"+po+"]",Fm="[^"+po.replace("\\.","")+"]",Bm=/((?:WC+[\/:])*)/.source.replace("WC",mo),zm=/(WCOD+)?/.source.replace("WCOD",Fm),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mo),km=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mo),Gm=new RegExp("^"+Bm+zm+Hm+km+"$"),Vm=["material","materials","bones","map"],ro=class{constructor(e,t,n){let s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},st=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Om,"")}static parseTrackName(e){let t=Gm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=ro;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hg=new Float32Array(1);var gr=class{constructor(e,t,n=0,s=1/0){this.ray=new qs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ji,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ao(e,this,n,t),n.sort(nc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ao(e[s],this,n,t);return n.sort(nc),n}};function nc(i,e){return i.distance-e.distance}function ao(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)ao(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);var Ni=null,as=new Map;function xr(i,e,t){if(typeof location<"u"&&location.protocol==="file:")return t&&t(),null;if(as.has(i)){let r=as.get(i);return e&&e(r),r}let s=new cr().load(i,r=>{r.minFilter=Ke,r.magFilter=Ke,r.colorSpace=ut,as.set(i,r),e&&e(r)},void 0,()=>{as.delete(i),t&&t()});return s.minFilter=Ke,s.magFilter=Ke,s.colorSpace=ut,as.set(i,s),s}function ti(i,e){xr(e,t=>{t&&(i.map=t,i.color.set("#ffffff"),i.needsUpdate=!0)})}function Wm(){if(Ni)return Ni;let i=document.createElement("canvas");i.width=8,i.height=64;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,64);return t.addColorStop(0,"#ffffff"),t.addColorStop(.55,"#e9e9e9"),t.addColorStop(1,"#8f8f8f"),e.fillStyle=t,e.fillRect(0,0,8,64),Ni=new rr(i),Ni.minFilter=Ke,Ni.magFilter=Ke,Ni}function Le(i,e={}){return new lr({color:i,gradientMap:Wm(),roughness:e.roughness??.75,emissive:e.emissive||"#000000",emissiveIntensity:e.emissiveIntensity||0,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side||sn})}var go={grass:"#6fc46b",path:"#e0bd8f",dirt:"#a8784f",sky:"#aee3ff",fog:"#c9ecff",gold:"#ffd66e",cyan:"#6ee7ff",violet:"#b28cff",coral:"#ff8f8f",deep:"#152347",glass:"rgba(18,28,54,0.82)"},_o={1:{grass:"#6fc46b",path:"#e0bd8f",dirt:"#a8784f"},2:{grass:"#4f9d94",path:"#b8a8c0",dirt:"#6f6f86"},3:{grass:"#8a5a78",path:"#e08a5a",dirt:"#7a4638"}};var Mr={1:{grass:"textures/map/grass_tile.png",path:"textures/map/road_stone_slab.png",dirt:"textures/map/minimal_cobble.png"},2:{grass:"textures/map/swamp_bubbles.png",path:"textures/map/scene_crystal_snow_floor.png",dirt:"textures/map/minimal_cobble.png"},3:{grass:"textures/map/lava_tile.png",path:"textures/map/lava_crack_stone.png",dirt:"textures/map/minimal_lava.png"}};function Xm(i){let e=[],t={x:i[0].x,z:i[0].z};e.push({x:t.x,z:t.z});for(let n=1;n<i.length;n++){let s=i[n];for(;t.x!==s.x;)t.x+=Math.sign(s.x-t.x),e.push({x:t.x,z:t.z});for(;t.z!==s.z;)t.z+=Math.sign(s.z-t.z),e.push({x:t.x,z:t.z})}return e}function qm(i){let e=0;for(let t=0;t<i.length-1;t++)e+=Math.abs(i[t+1].x-i[t].x)+Math.abs(i[t+1].z-i[t].z);return e}var zt=[{id:"3001",name:"\u5C71\u53E3\u9632\u7EBF",chapter:1,gridW:28,gridH:20,startGold:200,baseHP:20,dualPath:!1,paths:[[{x:0,z:4},{x:26,z:4},{x:26,z:9},{x:0,z:9},{x:0,z:14},{x:26,z:14}]]},{id:"3002",name:"\u68EE\u6797\u9698\u53E3",chapter:1,gridW:28,gridH:20,startGold:250,baseHP:20,dualPath:!0,basePos:{x:27,z:9},paths:[[{x:0,z:3},{x:26,z:3},{x:26,z:9},{x:27,z:9}],[{x:0,z:15},{x:26,z:15},{x:26,z:9},{x:27,z:9}]]},{id:"3003",name:"\u77EE\u4EBA\u5821\u5792",chapter:1,gridW:28,gridH:20,startGold:300,baseHP:25,dualPath:!1,paths:[[{x:0,z:3},{x:25,z:3},{x:25,z:8},{x:2,z:8},{x:2,z:15},{x:26,z:15}]]},{id:"3004",name:"\u67AF\u9AA8\u5893\u5730",chapter:2,gridW:28,gridH:20,startGold:280,baseHP:20,dualPath:!1,paths:[[{x:0,z:4},{x:26,z:4},{x:26,z:10},{x:1,z:10},{x:1,z:15},{x:26,z:15}]]},{id:"3005",name:"\u5E7D\u7075\u6E56\u6CCA",chapter:2,gridW:28,gridH:20,startGold:320,baseHP:20,dualPath:!0,basePos:{x:27,z:10},paths:[[{x:0,z:2},{x:25,z:2},{x:25,z:10},{x:27,z:10}],[{x:0,z:17},{x:25,z:17},{x:25,z:10},{x:27,z:10}]]},{id:"3006",name:"\u9ED1\u6697\u5854\u6797",chapter:2,gridW:28,gridH:20,startGold:350,baseHP:25,dualPath:!1,paths:[[{x:0,z:3},{x:25,z:3},{x:25,z:9},{x:2,z:9},{x:2,z:16},{x:26,z:16}]]},{id:"3007",name:"\u7194\u5CA9\u901A\u9053",chapter:3,gridW:28,gridH:20,startGold:380,baseHP:20,dualPath:!0,basePos:{x:27,z:10},paths:[[{x:0,z:3},{x:25,z:3},{x:25,z:10},{x:27,z:10}],[{x:0,z:16},{x:25,z:16},{x:25,z:10},{x:27,z:10}]]},{id:"3008",name:"\u5730\u72F1\u4E4B\u95E8",chapter:3,gridW:30,gridH:20,startGold:400,baseHP:30,dualPath:!1,paths:[[{x:0,z:3},{x:27,z:3},{x:27,z:9},{x:2,z:9},{x:2,z:16},{x:28,z:16}]]}],Sr=class{constructor(e){this.scene=e,this.mapGroup=new Qe,this.scene.add(this.mapGroup),this.gridW=0,this.gridH=0,this.paths=[],this.pathCellSet=new Set,this.blockedCells=new Set,this.groundMeshes=[],this.groundMesh=null,this.baseMesh=null,this.heroSpawn={x:0,z:0},this.basePos={x:0,z:0},this.theme=null,this.chapter=1,this.levelIndex=0,this.materials={}}reset(e){this.levelIndex=e||0,this.buildLevel(this.levelIndex)}buildLevel(e){for(;this.mapGroup.children.length>0;)this.mapGroup.remove(this.mapGroup.children[0]);this.groundMeshes=[],this.materials={},this.blockedCells=new Set;let t=zt[e]||zt[0];this.gridW=t.gridW,this.gridH=t.gridH,this.chapter=t.chapter,this.startGold=t.startGold,this.baseMaxHP=t.baseHP;let n=_o[this.chapter]||_o[1];this.theme={grass:n.grass,path:n.path,dirt:n.dirt,water:"#5fb8e8"},this.paths=t.paths.map(s=>{let r=Xm(s),a=r.map(o=>new P(o.x+.5,.05,o.z+.5));return{corners:s,cells:r,points:a,length:qm(r)}}),this.pathCellSet=new Set;for(let s of this.paths)for(let r of s.cells)this.pathCellSet.add(r.x+","+r.z),this.blockedCells.add(r.x+","+r.z);this.basePos=t.basePos||this.paths[0].cells[this.paths[0].cells.length-1],this.heroSpawn=t.heroSpawn||this.computeHeroSpawn(),this.buildTerrain(),this.buildPaths(),this.buildBase(),this.buildDecorations()}computeHeroSpawn(){let e=this.basePos,t=[[1,0],[-1,0],[0,1],[0,-1]];for(let[n,s]of t){let r=e.x+n,a=e.z+s;if(r>=0&&r<this.gridW&&a>=0&&a<this.gridH&&!this.pathCellSet.has(r+","+a))return{x:r,z:a}}return{x:e.x,z:e.z}}getCenter(){return new P(this.gridW/2,0,this.gridH/2)}getHeroSpawn(){return new P(this.heroSpawn.x+.5,.2,this.heroSpawn.z+.5)}getPathWorldPoints(e=0){return(this.paths[e]||this.paths[0]).points}getPathLength(e=0){return(this.paths[e]||this.paths[0]).length}cellKey(e,t){return e+","+t}getCellFromWorld(e){return{x:Math.floor(e.x),z:Math.floor(e.z)}}getCellCenterWorld(e,t){return new P(e+.5,.25,t+.5)}isPlaceableCell(e,t){return!(e<0||t<0||e>=this.gridW||t>=this.gridH||this.pathCellSet.has(this.cellKey(e,t))||this.blockedCells.has(this.cellKey(e,t)))}buildTerrain(){let e=Le(this.theme.grass,{roughness:.9}),t=Le(this.theme.dirt,{roughness:.95}),n=Le(this.theme.dirt,{roughness:.92});this.materials.grass=e,this.materials.dirt=t,this.materials.patch=n;let s=Mr[this.chapter]||Mr[1];ti(e,s.grass),ti(t,s.dirt),ti(n,s.dirt);let r=new lt(this.gridW+4,.5,this.gridH+4),a=Le("#6b5b52",{roughness:.95});ti(a,s.dirt);let o=new te(r,a);o.position.set(this.gridW/2,-.5,this.gridH/2),o.receiveShadow=!0,this.mapGroup.add(o);let l=new lt(.96,.2,.96);for(let h=0;h<this.gridW;h++)for(let d=0;d<this.gridH;d++){let f=this.pathCellSet.has(this.cellKey(h,d)),p=f?t:e;!f&&(h*31+d*17)%7===0&&(p=n);let g=new te(l,p);g.position.set(h+.5,.1,d+.5),g.receiveShadow=!0,g.castShadow=!0,this.mapGroup.add(g),this.groundMeshes.push(g)}let c=new rn(this.gridW,this.gridH);c.rotateX(-Math.PI/2),this.groundMesh=new te(c,new Xe({visible:!1})),this.groundMesh.position.set(this.gridW/2,.2,this.gridH/2),this.mapGroup.add(this.groundMesh)}buildPaths(){let e=Le(this.theme.path,{roughness:.75}),t=Le(this.theme.dirt,{roughness:.85});this.materials.path=e,this.materials.pathPatch=t;let n=Mr[this.chapter]||Mr[1];ti(e,n.path),ti(t,n.dirt);for(let s of this.paths)for(let r of s.cells){let a=new lt(.88,.21,.88),o=(r.x+r.z)%4===0?t:e,l=new te(a,o);l.position.set(r.x+.5,.2,r.z+.5),l.receiveShadow=!0,this.mapGroup.add(l)}}buildBase(){let e=new Qe,t=new te(new Bt(.85,1,.5,10),Le("#d7c9ff",{emissive:"#6e5bff",emissiveIntensity:.25}));t.position.y=.25,t.castShadow=!0,e.add(t);let n=new te(new an(.7,0),Le("#7ef0ff",{emissive:"#3ec8ff",emissiveIntensity:.85}));n.position.y=1.25,n.castShadow=!0,e.add(n);let s=new te(new an(.4,0),new Xe({color:"#eaffff",transparent:!0,opacity:.9}));s.position.y=1.25,e.add(s);let r=new dr("#6ee7ff",1.4,8);r.position.y=1.6,e.add(r);let a=this.basePos.x,o=this.basePos.z;e.position.set(a+.5,0,o+.5),this.mapGroup.add(e),this.baseMesh=e,this.baseMesh.userData.crystal=n,this.baseMesh.userData.inner=s;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)this.blockedCells.add(this.cellKey(a+l,o+c))}buildDecorations(){let e=[];for(let t=0;t<34;t++){let n=Math.floor(Math.random()*this.gridW),s=Math.floor(Math.random()*this.gridH),r=this.cellKey(n,s);!this.blockedCells.has(r)&&!this.pathCellSet.has(r)&&(e.some(o=>Math.abs(o.x-n)<2&&Math.abs(o.z-s)<2)||(e.push({x:n,z:s}),this.blockedCells.add(r),this.buildTree(n+.5,s+.5)))}for(let t=0;t<14;t++){let n=Math.floor(Math.random()*this.gridW),s=Math.floor(Math.random()*this.gridH),r=this.cellKey(n,s);!this.blockedCells.has(r)&&!this.pathCellSet.has(r)&&(this.blockedCells.add(r),this.buildRock(n+.5,s+.5))}}buildTree(e,t){let n=new Qe,s=new te(new Bt(.14,.2,1.1,6),Le("#8a5a3a"));s.position.y=.55,s.castShadow=!0,n.add(s);let r=new te(new Ct(.55,1,7),Le("#4fae5a"));r.position.y=1.2,r.castShadow=!0,n.add(r);let a=new te(new Ct(.4,.8,7),Le("#63d16e"));a.position.y=1.7,a.castShadow=!0,n.add(a),n.position.set(e,.2,t),this.mapGroup.add(n)}buildRock(e,t){let n=.22+Math.random()*.28,s=new te(new or(n,1),Le("#b8b4c8"));s.position.set(e,n*.5,t),s.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),s.castShadow=!0,s.receiveShadow=!0,this.mapGroup.add(s)}isPathCell(e,t){return this.pathCellSet.has(this.cellKey(e,t))}};var Zt={arrow:{name:"\u7BAD\u5854",icon:"\u{1F3F9}",levels:[{cost:50,damage:15,atkSpeed:1.2,range:3,charge:.2,pierce:0,multi:1,color:"#4a9e4a",desc:"\u57FA\u7840\u7269\u7406\u5854\uFF0C\u53EF\u653B\u51FB\u98DE\u884C"},{cost:50,damage:21,atkSpeed:1.32,range:3.5,charge:.2,pierce:1,multi:1,color:"#5cb85c",desc:"\u7BAD\u77E2\u7A7F\u900F1\u4E2A\u76EE\u6807\uFF0C\u4F24\u5BB3\u63D0\u5347"},{cost:100,damage:27,atkSpeed:1.44,range:4,charge:.2,pierce:1,multi:2,color:"#6fd96f",desc:"\u591A\u91CD\u5C04\u51FB\uFF0C\u540C\u65F6\u653B\u51FB2\u4E2A\u76EE\u6807"}],damageType:"physical",targetsAir:!0},magic:{name:"\u9B54\u6CD5\u5854",icon:"\u{1F52E}",levels:[{cost:80,damage:25,atkSpeed:.8,range:2.5,charge:.3,resistPen:.2,undeadBonus:.2,splashRadius:0,splashDamage:0,slowPct:0,color:"#9b59b6",desc:"\u9B54\u6CD5\u4F24\u5BB3\uFF0C\u65E0\u89C620%\u6297\u6027\uFF0C\u5BF9\u4EA1\u7075+20%"},{cost:80,damage:35,atkSpeed:.88,range:3,charge:.3,resistPen:.2,undeadBonus:.2,splashRadius:.5,splashDamage:.5,slowPct:0,color:"#af7ac5",desc:"\u6E85\u5C04\u4F24\u5BB3\uFF0C0.5\u683C\u8303\u56F4"},{cost:160,damage:45,atkSpeed:.96,range:3.5,charge:.3,resistPen:.2,undeadBonus:.2,splashRadius:.5,splashDamage:.5,slowPct:.15,color:"#c39bd3",desc:"\u8303\u56F4\u9B54\u6CD5\u7206\u53D1\uFF0C\u547D\u4E2D\u51CF\u901F15%\u6301\u7EED2\u79D2"}],damageType:"magic",targetsAir:!0},cannon:{name:"\u70AE\u5854",icon:"\u{1F4A3}",levels:[{cost:100,damage:40,atkSpeed:.5,range:2.5,charge:.4,aoe:.8,armorShred:0,burnDps:0,color:"#e74c3c",desc:"AOE\u8303\u56F4\u4F24\u5BB3\uFF0C\u4EC5\u5730\u9762"},{cost:100,damage:56,atkSpeed:.55,range:3,charge:.4,aoe:.8,armorShred:.3,burnDps:0,color:"#ec7063",desc:"\u7834\u7532\uFF0C\u76EE\u6807\u62A4\u7532-30%\u6301\u7EED3\u79D2"},{cost:200,damage:72,atkSpeed:.6,range:3.5,charge:.4,aoe:.8,armorShred:.3,burnDps:8,color:"#f1948a",desc:"\u7194\u5CA9\u70AE\u5F39\uFF0C\u707C\u70E78\u70B9/\u79D2\u6301\u7EED3\u79D2"}],damageType:"physical",targetsAir:!1,aoe:.8},ice:{name:"\u51B0\u971C\u5854",icon:"\u2744\uFE0F",levels:[{cost:60,damage:8,atkSpeed:1,range:2,charge:.15,slowPct:.3,freezeChance:0,freezePulse:!1,color:"#3498db",desc:"\u51CF\u901F30%\uFF0C\u63A7\u5236\u8F85\u52A9"},{cost:60,damage:11,atkSpeed:1.1,range:2.5,charge:.15,slowPct:.45,freezeChance:.1,freezePulse:!1,color:"#5dade2",desc:"\u51CF\u901F45%\uFF0C10%\u51BB\u7ED31\u79D2"},{cost:120,damage:14,atkSpeed:1.2,range:3,charge:.15,slowPct:.45,freezeChance:0,freezePulse:!0,color:"#85c1e9",desc:"\u8303\u56F4\u51B0\u51BB\uFF0C\u6BCF4\u79D2\u51BB\u7ED3\u8303\u56F4\u5185\u5730\u9762\u602A\u72691\u79D2"}],damageType:"magic",targetsAir:!1}},br=class{constructor(e,t){this.scene=e,this.game=t,this.towerGroup=new Qe,this.scene.add(this.towerGroup),this.projectileGroup=new Qe,this.scene.add(this.projectileGroup),this.towers=[],this.projectiles=[],this.selectedTower=null,this.towerDefs=Zt}reset(){for(;this.towerGroup.children.length>0;)this.towerGroup.remove(this.towerGroup.children[0]);for(;this.projectileGroup.children.length>0;)this.projectileGroup.remove(this.projectileGroup.children[0]);this.towers=[],this.projectiles=[],this.selectedTower=null}getTowerAtCell(e,t){return this.towers.find(n=>n.cell&&n.cell.x===e&&n.cell.z===t)||null}getTowerDef(e){return Zt[e]}selectTower(e){return this.selectedTower=this.getTowerAtCell(e.x,e.z),this.selectedTower}deselectTower(){this.selectedTower=null}canPlaceTower(e,t){if(!e||this.getTowerAtCell(e.x,e.z))return!1;let n=Zt[t];return!n||!this.game.map.isPlaceableCell(e.x,e.z)?!1:this.game.gold>=n.levels[0].cost}placeTower(e,t){if(!this.canPlaceTower(e,t))return!1;let s=Zt[t].levels[0].cost;if(!this.game.spendGold(s))return!1;let r=this.game.map.getCellCenterWorld(e.x,e.z),a=this.buildTowerMesh(t,1,r);return this.towerGroup.add(a),this.towers.push({cell:{x:e.x,z:e.z},type:t,level:1,mesh:a,pos:r,cooldown:0,chargeTimer:0,target:null,stunDuration:0,atkSpeedMul:1,atkSpeedMulTimer:0,freezePulseTimer:4,expiry:0,totalInvested:s}),!0}addTemporaryTower(e,t,n=2,s=15){if(!Zt[e]||this.getTowerAtCell(t.x,t.z))return null;let a=this.game.map.getCellCenterWorld(t.x,t.z),o=this.buildTowerMesh(e,n,a);this.towerGroup.add(o);let l={cell:{x:t.x,z:t.z},type:e,level:n,mesh:o,pos:a.clone(),cooldown:0,chargeTimer:0,target:null,stunDuration:0,atkSpeedMul:1,atkSpeedMulTimer:0,freezePulseTimer:4,expiry:s,totalInvested:0,temporary:!0};return this.towers.push(l),l}upgradeTower(e){let t=this.getTowerAtCell(e.x,e.z);if(!t||t.level>=3)return!1;let s=Zt[t.type].levels[t.level].cost;if(!this.game.spendGold(s))return!1;t.level++,t.totalInvested+=s,this.towerGroup.remove(t.mesh);let r=this.buildTowerMesh(t.type,t.level,t.pos);return this.towerGroup.add(r),t.mesh=r,this.selectedTower=t,!0}sellTower(e){let t=this.getTowerAtCell(e.x,e.z);if(!t)return!1;let n=Math.floor(t.totalInvested*.7);return this.game.addGold(n),this.towerGroup.remove(t.mesh),this.towers=this.towers.filter(s=>s!==t),this.selectedTower===t&&(this.selectedTower=null),!0}buildTowerMesh(e,t,n){let r=Zt[e].levels[t-1],a=new Qe,o={arrow:"#ffd66e",magic:"#b28cff",cannon:"#ff8f5e",ice:"#6ee7ff"}[e]||"#ffffff",l={arrow:"#3f9e54",magic:"#7a5cff",cannon:"#e05c3a",ice:"#3fb7e8"}[e]||r.color,c=new te(new Bt(.42,.48,.28,10),Le("#cfd4e8",{roughness:.8}));c.position.y=.14,c.castShadow=!0,a.add(c);let h=.55+t*.18,d=new te(new Bt(.28,.34,h,10),Le(l,{roughness:.5,emissive:o,emissiveIntensity:.12}));d.position.y=.28+h/2,d.castShadow=!0,a.add(d);let f=new te(new pt(.2,10,8),new Xe({color:o}));if(f.position.y=.28+h+.1,a.add(f),e==="arrow"){let p=new te(new Ct(.16,.42,8),Le("#ffd66e",{emissive:"#ffd66e",emissiveIntensity:.35}));p.position.y=.28+h+.42,p.castShadow=!0,a.add(p)}else if(e==="magic"){let p=new te(new Fn(.34,.045,8,12),Le(o,{emissive:o,emissiveIntensity:.5}));p.rotation.x=Math.PI/2.6,p.position.y=.28+h+.25,a.add(p)}else if(e==="cannon"){let p=new te(new Bt(.1,.14,.75,8),Le("#3a3f52"));p.rotation.x=Math.PI/2,p.position.set(0,.28+h+.2,.28),a.add(p)}else if(e==="ice"){let p=new te(new an(.2,0),Le("#6ee7ff",{emissive:"#6ee7ff",emissiveIntensity:.5}));p.position.y=.28+h+.35,p.castShadow=!0,a.add(p)}if(t>=2){let p=new te(new Fn(.36,.05,8,12),Le("#ffd66e",{emissive:"#ffd66e",emissiveIntensity:.35}));p.rotation.x=Math.PI/2,p.position.y=.28+h/2,a.add(p)}if(t>=3){let p=new te(new Fn(.42,.04,8,12),new Xe({color:"#ff7a7a"}));p.rotation.x=Math.PI/2,p.position.y=.28+h+.05,a.add(p)}return a.position.copy(n),a.userData={towerType:e,towerLevel:t},a}update(e){let t=this.game.monsterManager.monsters;for(let n=this.towers.length-1;n>=0;n--){let s=this.towers[n],r=Zt[s.type],a=r.levels[s.level-1];if(s.expiry>0&&(s.expiry-=e,s.expiry<=0)){this.towerGroup.remove(s.mesh),this.towers.splice(n,1);continue}if(s.stunDuration>0){s.stunDuration-=e;continue}if(s.atkSpeedMulTimer>0&&(s.atkSpeedMulTimer-=e,s.atkSpeedMulTimer<=0&&(s.atkSpeedMul=1)),s.cooldown-=e,s.chargeTimer-=e,(!s.target||s.target.dead||!this.isInRange(s,s.target,a.range))&&(s.target=this.findTarget(s,t,r,a.range)),s.type==="ice"&&a.freezePulse&&(s.freezePulseTimer-=e,s.freezePulseTimer<=0)){s.freezePulseTimer=4;for(let o of t)o.dead||o.flying||s.pos.distanceTo(o.mesh.position)<=a.range+.3&&this.game.monsterManager.applyFreeze(o,1)}s.target&&s.cooldown<=0&&s.chargeTimer<=0&&(this.attack(s,s.target,r,a),s.cooldown=1/(a.atkSpeed*s.atkSpeedMul),s.chargeTimer=a.charge||0)}this.updateProjectiles(e)}findTarget(e,t,n,s){let r=null,a=-1;for(let o of t)if(!(o.dead||!n.targetsAir&&o.flying||e.pos.distanceTo(o.mesh.position)>s)){if(!r){r=o;continue}switch(e.type){case"arrow":case"ice":o.pathProgress>r.pathProgress&&(r=o);break;case"magic":o.hp>r.hp&&(r=o);break;case"cannon":{let c=0;for(let h of t)h.dead||h.flying||o.mesh.position.distanceTo(h.mesh.position)<=1.2&&c++;c>a&&(r=o,a=c);break}}}return r}findTopTargets(e,t,n,s,r){let a=[];for(let o of e)o.dead||!t.targetsAir&&o.flying||r.pos.distanceTo(o.mesh.position)>n+.3||a.push(o);return a.sort((o,l)=>l.pathProgress-o.pathProgress),a.slice(0,s)}isInRange(e,t,n){return e.pos.distanceTo(t.mesh.position)<=n+.3}attack(e,t,n,s){let r=this.game.monsterManager.monsters,a={arrow:"#ffd66e",magic:"#b28cff",cannon:"#ff8f5e",ice:"#6ee7ff"}[e.type]||"#ffffff";if(this.game&&this.game.createMuzzleFlash&&this.game.createMuzzleFlash(e.pos.clone().setY(.7),a),e.type==="arrow"&&s.multi>1){let o=this.findTopTargets(r,n,s.range,s.multi,e);for(let l of o)this.createProjectile(e.pos.clone(),l,e.type,s.damage,0,s,n);return}if(e.type==="cannon"){this.createProjectile(e.pos.clone(),t,e.type,s.damage,n.aoe||.8,s,n);return}this.createProjectile(e.pos.clone(),t,e.type,s.damage,0,s,n)}createProjectile(e,t,n,s,r,a,o){let l=new pt(.1,6,4),c="#ffff00";switch(n){case"arrow":c="#f1c40f";break;case"magic":c="#9b59b6";break;case"cannon":c="#e74c3c";break;case"ice":c="#3498db";break}let h=new Xe({color:c}),d=new te(l,h);d.position.copy(e),d.position.y+=.5,this.projectileGroup.add(d),this.projectiles.push({mesh:d,from:e.clone(),target:t,damage:s,aoe:r,type:n,speed:n==="cannon"?6:12,instant:n==="ice",progress:0,startPos:e.clone(),pierceLeft:n==="arrow"&&a&&a.pierce||0,hitIds:[],splashRadius:n==="magic"&&a&&a.splashRadius||0,splashDamage:n==="magic"&&a&&a.splashDamage||0,slowPct:(n==="ice"||n==="magic")&&a&&a.slowPct||0,slowDuration:2,freezeChance:n==="ice"&&a&&a.freezeChance||0,freezeDuration:1,armorShred:n==="cannon"&&a&&a.armorShred||0,armorShredDuration:3,burnDps:n==="cannon"&&a&&a.burnDps||0,burnDuration:3,resistPen:n==="magic"&&a&&a.resistPen||0,undeadBonus:n==="magic"&&a&&a.undeadBonus||0,damageType:o?o.damageType:n==="magic"?"magic":"physical"})}updateProjectiles(e){for(let t=this.projectiles.length-1;t>=0;t--){let n=this.projectiles[t];if(n.instant){this.dealDamage(n),this.projectileGroup.remove(n.mesh),this.projectiles.splice(t,1);continue}if(!n.target||n.target.dead){this.projectileGroup.remove(n.mesh),this.projectiles.splice(t,1);continue}let s=n.target.mesh.position.clone();if(s.y+=.5,n.mesh.position.distanceTo(s)<.3){if(this.dealDamage(n),n.pierceLeft>0){n.pierceLeft--,n.hitIds.push(n.target.id);let a=this.findNextPierceTarget(n);if(a){n.target=a;continue}}this.projectileGroup.remove(n.mesh),this.projectiles.splice(t,1)}else{let a=s.clone().sub(n.mesh.position).normalize(),o=n.speed*e;n.type==="cannon"?(n.progress+=o/Math.max(.01,n.startPos.distanceTo(s)),n.mesh.position.lerpVectors(n.startPos,s,Math.min(n.progress,1)),n.mesh.position.y+=Math.sin(n.progress*Math.PI)*2):n.mesh.position.add(a.multiplyScalar(o))}}}findNextPierceTarget(e){let t=Zt[e.type];return this.game.monsterManager.monsters.filter(s=>!s.dead&&!e.hitIds.includes(s.id)).filter(s=>t.targetsAir||!s.flying).sort((s,r)=>r.pathProgress-s.pathProgress)[0]||null}dealDamage(e){let t=this.game.monsterManager,n=e.damageType,s={resistPen:e.resistPen||0,undeadBonus:e.undeadBonus||0},r=(a,o)=>{a.dead||a.flying&&e.type==="cannon"||(t.damageMonster(a,o,n,s),e.slowPct&&t.applySlow(a,e.slowPct,e.slowDuration||2,{magic:e.type==="magic"}),e.type==="ice"&&e.freezeChance>0&&Math.random()<e.freezeChance&&t.applyFreeze(a,e.freezeDuration||1),e.armorShred&&(a.armorShred=Math.max(a.armorShred||0,e.armorShred),a.armorShredDuration=Math.max(a.armorShredDuration||0,e.armorShredDuration||3)),e.burnDps&&t.applyBurn(a,e.burnDps,e.burnDuration||3))};if(e.aoe>0){for(let a of t.monsters)a.dead||a.flying&&e.type==="cannon"||e.mesh.position.distanceTo(a.mesh.position)<=e.aoe&&r(a,e.damage);return}if(e.target&&!e.target.dead&&r(e.target,e.damage),e.splashRadius>0)for(let a of t.monsters)a===e.target||a.dead||e.mesh.position.distanceTo(a.mesh.position)<=e.splashRadius&&r(a,e.damage*(e.splashDamage||.5))}stunTowersWithin(e,t,n){let s=0;for(let r of this.towers)r.pos.distanceTo(e)<=t&&(r.stunDuration=Math.max(r.stunDuration||0,n||2),s++);return s}slowTowersWithin(e,t,n,s){let r=0;for(let a of this.towers)a.pos.distanceTo(e)<=t&&(a.atkSpeedMul=1-(n||.5),a.atkSpeedMulTimer=Math.max(a.atkSpeedMulTimer||0,s||3),r++);return r}showTowerMenu(e){let t=this.getTowerAtCell(e.x,e.z);return t?(this.selectedTower=t,{cell:{x:t.cell.x,z:t.cell.z},pos:t.pos.clone(),type:t.type,level:t.level,totalInvested:t.totalInvested,canUpgrade:t.level<3,upgradeCost:t.level<3?Zt[t.type].levels[t.level].cost:0,sellRefund:Math.floor(t.totalInvested*.7),def:Zt[t.type],levelDef:Zt[t.type].levels[t.level-1]}):null}hideTowerMenu(){this.selectedTower=null}updateVisuals(e){for(let t of this.towers)if(t.target&&!t.target.dead){let n=t.target.mesh.position.clone().sub(t.pos),s=Math.atan2(n.x,n.z);t.mesh.rotation.y+=(s-t.mesh.rotation.y)*5*e}}};var wr={run:{path:"textures/anim/monster_run.png",frames:8,cols:3,fps:9},hit:{path:"textures/anim/monster_hit.png",frames:16,cols:4,fps:16}};function Tc(i=1,e){let t=new Ii({map:new At,transparent:!0,depthWrite:!1}),n=new ns(t);n.scale.set(1.15*i,1.15*i,1),n.position.y=.55*i;let s={sprite:n,sheetType:"godot",mode:"run",frame:0,timer:0,hitTimer:0,textures:{run:null,hit:null},errorHandled:!1},r=()=>{s.errorHandled||(s.errorHandled=!0,s.sprite.visible=!1,e&&e())};return xr(wr.run.path,a=>{s.textures.run=a,s.mode==="run"&&Er(s,a)},r),xr(wr.hit.path,a=>{s.textures.hit=a,s.mode==="hit"&&Er(s,a)},r),s}function Er(i,e){i.sprite.material.map=e,i.sprite.material.needsUpdate=!0,Ac(i,0)}function Ac(i,e){let t=wr[i.mode];if(!t||!i.sprite.material.map)return;let n=Math.ceil(t.frames/t.cols),s=e%t.cols,r=Math.floor(e/t.cols),a=i.sprite.material.map;a.repeat.set(1/t.cols,1/n),a.offset.set(s/t.cols,1-(r+1)/n),a.needsUpdate=!0}function Rc(i,e,t=.35){if(!i)return;i.mode=e,i.frame=0,i.timer=0,i.hitTimer=t;let n=i.textures[e];n&&Er(i,n)}function Cc(i,e){if(!i)return;i.hitTimer>0&&(i.hitTimer-=e,i.hitTimer<=0&&(i.mode="run",i.frame=0,i.timer=0,i.textures.run&&Er(i,i.textures.run)));let t=wr[i.mode];if(!t||!i.sprite.material.map)return;i.timer+=e;let n=Math.floor(i.timer*t.fps)%t.frames;n!==i.frame&&(i.frame=n,Ac(i,n))}function Tr(i,e,t=1){let n=new Ii({map:i.texture,transparent:!0,depthWrite:!1}),s=new ns(n);s.scale.set(1.2*t,1.2*t,1),s.position.y=.55*t;let r={sprite:s,sheetType:"canvas",mode:"run",frame:0,timer:0,hitTimer:0,textures:{run:i.texture,hit:e.texture},cols:i.cols,rows:i.rows,frames:i.frames,fps:10};return vo(r,i.texture),r}function vo(i,e){i.sprite.material.map=e,i.sprite.material.needsUpdate=!0,Pc(i,0)}function Pc(i,e){let t=i.sprite.material.map;if(!t)return;let n=e%i.cols,s=Math.floor(e/i.cols);t.repeat.set(1/i.cols,1/i.rows),t.offset.set(n/i.cols,1-(s+1)/i.rows),t.needsUpdate=!0}function Ar(i,e,t=.35){if(!i)return;i.mode=e,i.frame=0,i.timer=0,i.hitTimer=t;let n=i.textures[e];n&&vo(i,n)}function Rr(i,e,t=1){if(!i)return;i.hitTimer>0&&(i.hitTimer-=e,i.hitTimer<=0&&(i.mode="run",i.frame=0,i.timer=0,vo(i,i.textures.run))),i.timer+=e*t;let n=Math.floor(i.timer*i.fps)%i.frames;n!==i.frame&&(i.frame=n,Pc(i,n))}var Mn=["#10131f","#1b2030","#2b3045","#3a4055","#4a5168","#5a6478","#7a8496","#a7b0c2","#ffffff","#f2ead4","#e5c9a0","#d9a066","#b46b3a","#8a4a2b","#5c2f20","#3a1d16","#7ac74f","#4fae3f","#2f8a3a","#1f6630","#145024","#8adf6b","#c5f0a0","#6ee7ff","#3fb7e8","#2f7fd0","#1f4f9e","#172f6a","#b2dfff","#7ef0ff","#ffd66e","#ffb347","#ff8f5e","#e85c3a","#b8362a","#7a1f2a","#ff9d3c","#ffe9b0","#b28cff","#8a5cff","#5f3fbf","#3b2a7a","#d3b8ff","#ff8fd8","#ff5f9e","#c13f6a","#8fb1d8","#6f7aa0","#4a5268","#2c3145","#c8d8f0","#e8f0ff","#6b5b52","#8a6a52","#a8784f","#c49a6c","#e0bd8f","#f2dcc0","#5a5a5a","#8a8a8a","#c0c0c0","#e0e0e0","#e05050","#b03050"],Cr=new Map;function Pr(i){let e=i.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function De(i){let e=Pr(i||"#8a8a8a"),t=0,n=1/0;for(let s=0;s<Mn.length;s++){let r=Pr(Mn[s]),a=(r[0]-e[0])**2+(r[1]-e[1])**2+(r[2]-e[2])**2;a<n&&(n=a,t=s)}return t}function xe(i,e,t,n,s,r){i.fillStyle=Mn[r],i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(s))}function Sn(i,e,t,n,s){i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fillStyle=Mn[s],i.fill()}function mt(i,e,t,n,s,r){i.save(),i.translate(e,t),i.rotate(s),xe(i,-2,0,4,n,r),i.restore()}function Ic(i){return{type:i.type,body:i.color,dark:i.isBoss?"#b03050":"#2b3045",accent:i.flying?"#8fb1d8":"#ffd66e",kind:Ym(i),boss:!!i.isBoss,weapon:null}}function Ym(i){return i.type==="wolfRider"||i.type==="hellHound"?"quad":i.flying?"fly":i.type==="ghost"||i.type==="shadow"||i.type==="lich"?"cloak":i.type==="skeleton"||i.type==="skeletonKing"?"skeleton":i.type==="troll"||i.type==="stoneGolem"||i.type==="heavyDemon"||i.type==="hellGolem"?"bulky":"humanoid"}function Lc(i){return{type:i===0?"ranger":"mage",body:i===0?"#27ae60":"#8e44ad",dark:"#2b3045",accent:i===0?"#ffd66e":"#b28cff",kind:"hero",boss:!1,weapon:i===0?"bow":"staff"}}function $m(i,e,t,n){let s=De(e.body),r=De(e.dark),a=De(e.accent),o=De("#e5c9a0"),l=Math.sin(t)*.55,c=Math.abs(Math.sin(t))*3;i.save(),i.translate(0,-c),mt(i,-6,-22,22,l,r),mt(i,6,-22,22,-l,r),mt(i,-15,-52,24,-l*.7,r),mt(i,15,-52,24,l*.7,r),xe(i,-13,-52,26,30,s),xe(i,-8,-46,16,8,a),Sn(i,0,-64,9,e.kind==="hero"?o:s),e.kind==="hero"?(xe(i,-4,-74,8,8,a),xe(i,-3,-69,2,2,De("#ffffff")),xe(i,1,-69,2,2,De("#ffffff")),e.weapon==="bow"?(i.save(),i.translate(20,-54),i.rotate(l*.2),i.strokeStyle=Mn[a],i.lineWidth=3,i.beginPath(),i.arc(0,0,12,-.9,.9),i.stroke(),i.restore()):(mt(i,20,-54,30,-.25+l*.1,r),Sn(i,24,-82,4,a))):(xe(i,-3,-66,2,2,De("#ffffff")),xe(i,1,-66,2,2,De("#ffffff"))),(e.type==="goblin"||e.type==="fastGoblin")&&(xe(i,-14,-72,4,10,s),xe(i,10,-72,4,10,s)),(e.type==="orc"||e.type==="orcCaptain")&&(xe(i,-5,-58,2,6,De("#f2ead4")),xe(i,3,-58,2,6,De("#f2ead4"))),(e.type==="demonImp"||e.type==="heavyDemon"||e.type==="hellGolem")&&(xe(i,-9,-76,4,8,De("#ff8f5e")),xe(i,5,-76,4,8,De("#ff8f5e"))),e.type==="skeletonKing"&&(xe(i,-6,-82,12,4,a),xe(i,-3,-86,3,5,a),xe(i,0,-86,3,5,a),xe(i,3,-86,3,5,a)),(e.type==="shadow"||e.type==="lich")&&Sn(i,0,-64,12,De("#3a4055")),n==="hit"&&(i.globalAlpha=.28,xe(i,-16,-88,32,88,De("#e05050")),i.globalAlpha=1),i.restore()}function Zm(i,e,t,n){let s=De(e.body),r=De(e.dark),a=De(e.accent),o=Math.sin(t)*.5;mt(i,-18,-26,18,o,r),mt(i,-6,-26,18,-o,r),mt(i,6,-26,18,-o,r),mt(i,18,-26,18,o,r),xe(i,-22,-38,34,18,s),Sn(i,20,-44,9,s),xe(i,22,-46,2,2,De("#ffffff")),xe(i,-10,-45,14,3,a),e.type==="wolfRider"&&(xe(i,4,-58,12,12,De("#d9a066")),Sn(i,10,-66,6,De("#e5c9a0"))),n==="hit"&&(i.globalAlpha=.28,xe(i,-26,-72,48,68,De("#e05050")),i.globalAlpha=1)}function Jm(i,e,t,n){let s=De(e.body),r=De(e.dark),a=De(e.accent),o=Math.sin(t*2)*.8;xe(i,-16,-44,32,18,s),Sn(i,0,-56,9,s),i.save(),i.translate(-20,-46),i.rotate(-.4+o*.7),xe(i,-2,-20,4,20,a),i.restore(),i.save(),i.translate(20,-46),i.rotate(.4-o*.7),xe(i,-2,-20,4,20,a),i.restore(),mt(i,-8,-24,12,-.4,r),mt(i,8,-24,12,.4,r),n==="hit"&&(i.globalAlpha=.28,xe(i,-24,-72,48,66,De("#e05050")),i.globalAlpha=1)}function Km(i,e,t,n){let s=De(e.body),r=De(e.dark),a=De(e.accent),o=Math.sin(t)*.35;i.save(),i.translate(0,-Qm(e)),mt(i,-8,-24,22,o,r),mt(i,8,-24,22,-o,r),i.beginPath(),i.moveTo(-16,-64),i.lineTo(16,-64),i.lineTo(22,0),i.lineTo(-22,0),i.closePath(),i.fillStyle=Mn[s],i.fill(),Sn(i,0,-66,9,s),xe(i,-5,-66,2,2,a),xe(i,3,-66,2,2,a),n==="hit"&&(i.globalAlpha=.28,xe(i,-20,-72,40,70,De("#e05050")),i.globalAlpha=1),i.restore()}function Qm(i){return 0}function jm(i,e,t,n){let s=De("#e0e0e0"),r=De(e.dark),a=De(e.accent),o=Math.sin(t)*.55;mt(i,-6,-22,22,o,r),mt(i,6,-22,22,-o,r),mt(i,-15,-52,24,-o*.7,r),mt(i,15,-52,24,o*.7,r),xe(i,-13,-52,26,30,s),xe(i,-9,-48,18,3,r),xe(i,-9,-42,18,3,r),xe(i,-9,-36,18,3,r),Sn(i,0,-64,9,s),xe(i,-4,-66,3,3,De("#10131f")),xe(i,1,-66,3,3,De("#10131f")),e.type==="skeletonKing"&&(xe(i,-6,-82,12,4,a),xe(i,-3,-86,3,5,a),xe(i,0,-86,3,5,a),xe(i,3,-86,3,5,a)),n==="hit"&&(i.globalAlpha=.28,xe(i,-16,-88,32,88,De("#e05050")),i.globalAlpha=1)}function eg(i,e,t,n){let s=De(e.body),r=De(e.dark),a=De(e.accent),o=Math.sin(t)*.4;mt(i,-9,-28,24,o,r),mt(i,9,-28,24,-o,r),mt(i,-20,-62,30,-o*.5,r),mt(i,20,-62,30,o*.5,r),xe(i,-20,-62,40,36,s),xe(i,-14,-54,28,10,a),Sn(i,0,-76,12,s),xe(i,-6,-88,6,10,a),xe(i,0,-88,6,10,a),xe(i,-5,-78,2,2,De("#ffffff")),xe(i,3,-78,2,2,De("#ffffff")),n==="hit"&&(i.globalAlpha=.28,xe(i,-24,-96,48,96,De("#e05050")),i.globalAlpha=1)}function tg(i,e,t,n){let s=t/8*Math.PI*2;switch(e.kind){case"quad":Zm(i,e,s,n);break;case"fly":Jm(i,e,s,n);break;case"cloak":Km(i,e,s,n);break;case"skeleton":jm(i,e,s,n);break;case"bulky":eg(i,e,s,n);break;default:$m(i,e,s,n);break}}function yo(i,e="run"){let t=`${i.type}|${i.body}|${e}`;if(Cr.has(t))return Cr.get(t);let n=96,s=document.createElement("canvas");s.width=n*4,s.height=n*2;let r=s.getContext("2d");r.imageSmoothingEnabled=!1;for(let h=0;h<8;h++){let d=h%4,f=Math.floor(h/4);r.save(),r.translate(d*n+n/2,f*n+n*.88),tg(r,i,h,e),r.restore()}let o=r.getImageData(0,0,s.width,s.height).data;for(let h=0;h<o.length;h+=4){if(o[h+3]===0)continue;let d=[o[h],o[h+1],o[h+2]],f=0,p=1/0;for(let _=0;_<Mn.length;_++){let m=Pr(Mn[_]),u=(m[0]-d[0])**2+(m[1]-d[1])**2+(m[2]-d[2])**2;u<p&&(p=u,f=_)}let g=Pr(Mn[f]);o[h]=g[0],o[h+1]=g[1],o[h+2]=g[2]}let l=new Uint8Array(o.buffer),c=new sr(l,s.width,s.height,Vt);return c.flipY=!0,c.minFilter=Ke,c.magFilter=Ke,c.colorSpace=ut,c.needsUpdate=!0,Cr.set(t,{texture:c,cols:4,rows:2,frames:8}),Cr.get(t)}function Ir(i,e){return yo(Ic(i),e)}function Lr(i,e){return yo(Lc(i),e)}typeof window<"u"&&(window.__spritegen={generateCharacterSheet:yo,getMonsterSheet:Ir,getHeroSheet:Lr,heroSpriteSpec:Lc,specForMonster:Ic});var Oi={goblin:{name:"\u54E5\u5E03\u6797",hp:70,speed:1.8,armor:0,magicResist:0,reward:10,livesCost:1,color:"#4caf50",size:[.25,.5,.25],flying:!1},orc:{name:"\u517D\u4EBA\u5C0F\u5175",hp:90,speed:1.5,armor:10,magicResist:0,reward:12,livesCost:1,color:"#2e7d32",size:[.35,.7,.35],flying:!1},wolfRider:{name:"\u72FC\u9A91\u5175",hp:220,speed:2,armor:15,magicResist:5,reward:45,livesCost:2,color:"#795548",size:[.35,.6,.5],flying:!1},shadow:{name:"\u6697\u5F71\u523A\u5BA2",hp:180,speed:2.2,armor:10,magicResist:10,reward:40,livesCost:2,color:"#4a148c",size:[.25,.5,.25],flying:!1},gargoyle:{name:"\u77F3\u50CF\u9B3C",hp:110,speed:1.8,armor:5,magicResist:0,reward:18,livesCost:1,color:"#607d8b",size:[.4,.5,.4],flying:!0},troll:{name:"\u5DE8\u9B54",hp:280,speed:1.2,armor:20,magicResist:10,reward:60,livesCost:3,color:"#8d6e63",size:[.45,.9,.45],flying:!1},orcCaptain:{name:"\u517D\u4EBA\u961F\u957F",hp:3e3,speed:1,armor:50,magicResist:30,reward:300,livesCost:10,color:"#bf360c",size:[.5,1,.5],flying:!1,isBoss:!0,bossSkill:{type:"stunTowers",name:"\u9707\u5730\u7729\u6655",cooldown:10,firstDelay:5,warning:1,radius:3,duration:2}},fastGoblin:{name:"\u75BE\u98CE\u54E5\u5E03\u6797",hp:60,speed:4,armor:0,magicResist:0,reward:10,livesCost:1,color:"#66bb6a",size:[.2,.4,.2],flying:!1},skeleton:{name:"\u9AB7\u9AC5\u6218\u58EB",hp:85,speed:1.4,armor:5,magicResist:0,reward:14,livesCost:1,color:"#e0e0e0",size:[.3,.6,.3],flying:!1,undead:!0},zombie:{name:"\u50F5\u5C38",hp:120,speed:1.2,armor:5,magicResist:0,reward:12,livesCost:1,color:"#558b2f",size:[.3,.6,.3],flying:!1,undead:!0},lich:{name:"\u5DEB\u5996\u5B66\u5F92",hp:100,speed:1.8,armor:0,magicResist:30,reward:25,livesCost:1,color:"#1a237e",size:[.3,.6,.3],flying:!1,undead:!0},stoneGolem:{name:"\u77F3\u5080\u5121",hp:360,speed:.8,armor:40,magicResist:15,reward:50,livesCost:3,color:"#9e9e9e",size:[.5,1,.5],flying:!1,undead:!0},ghost:{name:"\u5E7D\u7075",hp:95,speed:2.2,armor:0,magicResist:20,reward:20,livesCost:1,color:"#b0bec5",size:[.3,.5,.3],flying:!0,undead:!0},skeletonKing:{name:"\u9AB7\u9AC5\u738B",hp:4e3,speed:1,armor:50,magicResist:30,reward:500,livesCost:10,color:"#b71c1c",size:[.6,1.4,.6],flying:!1,isBoss:!0,undead:!0,bossSkill:{type:"summon",name:"\u53EC\u5524\u9AB7\u9AC5",cooldown:5,firstDelay:3,summon:{type:"skeleton",count:2,hpScale:.8},maxSummons:6}},demonImp:{name:"\u6076\u9B54\u5C0F\u9B3C",hp:85,speed:2.5,armor:0,magicResist:25,reward:18,livesCost:1,color:"#d32f2f",size:[.25,.45,.25],flying:!1},hellHound:{name:"\u5730\u72F1\u72AC",hp:170,speed:3,armor:10,magicResist:15,reward:30,livesCost:2,color:"#212121",size:[.4,.5,.6],flying:!1},heavyDemon:{name:"\u91CD\u7532\u6076\u9B54",hp:480,speed:1,armor:50,magicResist:25,reward:70,livesCost:4,color:"#b71c1c",size:[.5,1.1,.5],flying:!1},wyvern:{name:"\u53CC\u8DB3\u98DE\u9F99",hp:220,speed:2,armor:10,magicResist:10,reward:35,livesCost:2,color:"#6a1b9a",size:[.45,.5,.5],flying:!0},hellGolem:{name:"\u5730\u72F1\u9B54\u50CF",hp:5200,speed:.9,armor:60,magicResist:40,reward:800,livesCost:12,color:"#ff5722",size:[.7,1.6,.7],flying:!1,isBoss:!0,bossSkill:{type:"slowTowers",name:"\u706B\u7130\u51B2\u51FB\u6CE2",cooldown:8,firstDelay:6,warning:2,radius:2.5,duration:3,slowPct:.5}}};var Dr=class{constructor(e,t){this.scene=e,this.game=t||null,this.monsterGroup=new Qe,this.scene.add(this.monsterGroup),this.monsters=[],this.paths=[],this.onMonsterKilled=null,this.onMonsterReachBase=null}reset(e){for(;this.monsterGroup.children.length>0;)this.monsterGroup.remove(this.monsterGroup.children[0]);this.monsters=[],this.paths=e&&e.length?e:[]}spawnMonster(e,t=0,n=1,s={}){let r=Oi[e];if(!r)return null;let a=this.paths[t]||this.paths[0];if(!a)return null;let o=this.buildMonsterMesh(r),l=e==="goblin"||e==="fastGoblin",c=!l;(l||c)&&o.userData.torsoGroup&&(o.userData.torsoGroup.visible=!1);let h=a.points[0].clone();o.position.copy(h);let d=r.isBoss?1.05:r.flying?.5:.55,f=d/Math.max(.2,r.size[1]);o.scale.setScalar(f),this.monsterGroup.add(o);let p=Math.round(r.hp*n),g={id:Date.now()+Math.random(),type:e,def:r,mesh:o,hp:p,maxHp:p,speed:r.speed,pathProgress:0,pathPoints:a.points,pathLength:a.length,dead:!1,flying:r.flying||!1,slowAmount:0,slowDuration:0,frozen:!1,frozenDuration:0,stunned:!1,stunDuration:0,armorShred:0,armorShredDuration:0,burnStacks:[],isSummon:s.isSummon||!1,entryIndex:t,hpScale:n,reward:r.reward,livesCost:r.livesCost||1,isBoss:r.isBoss||!1,bossSkillTimer:r.isBoss&&r.bossSkill?r.bossSkill.firstDelay:0,bossWarningTimer:0,lastPos:null,animTime:0,visualScale:f,spriteAnim:null,hpBar:null};if(l){let m=Tc(d,()=>{o.userData.torsoGroup&&(o.userData.torsoGroup.visible=!0)});o.add(m.sprite),g.spriteAnim=m}else if(c){let m=Ir(r,"run"),u=Ir(r,"hit"),y=Tr(m,u,d);o.add(y.sprite),g.spriteAnim=y}s.startProgress!=null&&(g.pathProgress=Math.max(0,Math.min(s.startProgress,a.length-.1)),g.mesh.position.copy(this.getPositionOnPath(a.points,g.pathProgress)));let _=this.buildHpBar(g);return o.add(_),g.hpBar=_,this.monsters.push(g),g}buildMonsterMesh(e){let t=new Qe,n=e.size,s=Le(e.color,{roughness:.55}),r=Le("#3a3f52",{roughness:.7}),a={},o=new Qe;t.add(o),t.userData.torsoGroup=o;let l=e.type==="wolfRider"||e.type==="hellHound",c=e.type==="ghost",h=(d,f,p,g)=>{let _=new lt(d,f,p);_.translate(0,-f/2,0);let m=new te(_,g);return m.castShadow=!0,m};if(l){let d=new te(new lt(n[0],n[1]*.5,n[2]),s);d.position.y=n[1]*.55,d.castShadow=!0,o.add(d),a.body=d;let f=n[0]*.45,p=new te(new pt(f,8,6),s);p.position.set(0,n[1]*.78,n[2]*.42),p.castShadow=!0,o.add(p);let g=new Xe({color:e.isBoss?"#ff4d4d":"#ffffff"});for(let u of[-1,1]){let y=new te(new pt(f*.18,6,6),g);y.position.set(u*f*.35,n[1]*.82,n[2]*.42+f*.7),o.add(y)}let _=n[1]*.42,m=[];for(let[u,y]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let v=h(n[0]*.22,_,n[2]*.28,r);v.position.set(u*n[0]*.34,n[1]*.42,y*n[2]*.32),o.add(v),m.push(v)}if(a.legs=m,a.torso=o,e.type==="wolfRider"){let u=Le("#d8b98a",{roughness:.5}),y=new te(new lt(n[0]*.5,n[1]*.3,n[2]*.4),u);y.position.set(0,n[1]*1.02,-n[2]*.1),o.add(y);let v=new te(new pt(n[0]*.28,8,6),u);v.position.set(0,n[1]*1.24,-n[2]*.1),o.add(v)}}else if(e.flying){let d=new te(new lt(n[0],n[1]*.42,n[2]),s);d.position.y=n[1]*.5,d.castShadow=!0,o.add(d),a.body=d;let f=n[0]*.4,p=new te(new pt(f,8,6),s);p.position.set(0,n[1]*.72,n[2]*.36),p.castShadow=!0,o.add(p);let g=new lt(.06,n[1]*.34,n[2]*.75);g.translate(0,0,-n[2]*.3);let _=Le("#8f9bb3",{roughness:.6}),m=new te(g,_);m.position.set(-n[0]*.58,n[1]*.62,0),o.add(m);let u=new te(g,_);if(u.position.set(n[0]*.58,n[1]*.62,0),o.add(u),a.leftWing=m,a.rightWing=u,a.torso=o,!c){let y=n[1]*.24,v=h(n[0]*.2,y,n[2]*.3,r);v.position.set(-n[0]*.3,n[1]*.28,0),o.add(v);let E=h(n[0]*.2,y,n[2]*.3,r);E.position.set(n[0]*.3,n[1]*.28,0),o.add(E),a.leftLeg=v,a.rightLeg=E}if(c){let y=new te(new Ct(n[0]*.7,n[1]*.7,8),Le(e.color,{transparent:!0,opacity:.85}));y.position.y=n[1]*.3,o.add(y)}}else{let d=n[1]*.38,f=n[1]*.4,p=n[0]*.95,g=n[1]*.3,_=d+g*.95,m=n[1]*.34,u=Math.max(.13,n[0]*.4),y=new te(new lt(p,g,n[2]*.85),s);y.position.y=d+g/2,y.castShadow=!0,o.add(y),a.torso=o,a.body=y;let v=h(p*.22,f,n[2]*.5,r);v.position.set(-p*.28,d,0),o.add(v);let E=h(p*.22,f,n[2]*.5,r);E.position.set(p*.28,d,0),o.add(E),a.leftLeg=v,a.rightLeg=E;let R=h(p*.18,m,n[2]*.42,r);R.position.set(-p*.58,_,0),o.add(R);let A=h(p*.18,m,n[2]*.42,r);A.position.set(p*.58,_,0),o.add(A),a.leftArm=R,a.rightArm=A;let T=d+g+u*.85,z=new te(new pt(u,10,8),s);z.position.y=T,z.castShadow=!0,o.add(z);let M=new Xe({color:e.isBoss?"#ff4d4d":"#ffffff"});for(let S of[-1,1]){let L=new te(new pt(u*.16,6,6),M);L.position.set(S*u*.35,T,u*.82),o.add(L)}if(e.type==="goblin"||e.type==="fastGoblin")for(let S of[-1,1]){let L=new te(new Ct(u*.22,u*.8,6),s);L.position.set(S*u*.85,T+u*.4,0),L.rotation.z=S*.35,o.add(L)}if(e.type==="orc"||e.type==="orcCaptain")for(let S of[-1,1]){let L=new te(new Ct(u*.14,u*.7,6),Le("#f5f0e0"));L.position.set(S*u*.32,T-u*.55,u*.7),L.rotation.x=S*.2,o.add(L)}if(e.type==="demonImp"||e.type==="heavyDemon"||e.type==="hellGolem")for(let S of[-1,1]){let L=new te(new Ct(u*.2,u*.9,6),Le("#ff8f5e"));L.position.set(S*u*.45,T+u*.8,0),L.rotation.z=S*.3,o.add(L)}if(e.type==="skeleton"||e.type==="skeletonKing"){let S=Le("#d9d4c8");for(let L=0;L<3;L++){let k=new te(new lt(p*.9,.03,n[2]*.8),S);k.position.y=d+g*(.35+L*.2),o.add(k)}if(e.type==="skeletonKing"){let L=new te(new Bt(u*.4,u*.42,u*.7,6),Le("#ffd66e",{emissive:"#ffd66e",emissiveIntensity:.3}));L.position.y=T+u*.75,o.add(L)}}if(e.type==="shadow"||e.type==="lich"){let S=new te(new Ct(u*1.25,u*2.2,8),Le(e.type==="lich"?"#3b3f9e":"#2b2050",{transparent:!0,opacity:.9}));S.position.y=T+u*.9,o.add(S)}if(e.type==="zombie"&&(R.rotation.x=.5,A.rotation.x=.5),e.type==="troll"||e.type==="stoneGolem"||e.type==="heavyDemon")for(let S of[-1,1]){let L=new te(new pt(p*.38,8,6),s);L.position.set(S*p*.62,_+m*.1,0),o.add(L)}}if(e.isBoss){let d=new te(new on(.4,.5,16),new Xe({color:"#ff5f6d",side:dt,transparent:!0,opacity:.4}));d.rotation.x=-Math.PI/2,d.position.y=.1,t.add(d),t.userData.aura=d}return t.userData.limbs=a,t}buildHpBar(e){let t=new Qe,n=new rn(.5,.06),s=new Xe({color:"#333333",side:dt}),r=new te(n,s);t.add(r);let a=new rn(.48,.04),o=new Xe({color:"#4caf50",side:dt}),l=new te(a,o);l.position.z=.01,l.position.x=-.01,t.add(l),t.userData.fill=l,t.userData.fillMat=o;let c=e.def.size[1]*(e.mesh.scale.y||1);return t.position.y=c+.15,t}update(e){for(let t=this.monsters.length-1;t>=0;t--){let n=this.monsters[t];if(n.dead){this.monsterGroup.remove(n.mesh),this.monsters.splice(t,1);continue}n.frozen&&n.frozenDuration>0&&(n.frozenDuration-=e,n.frozenDuration<=0&&(n.frozen=!1,n.frozenDuration=0)),n.stunDuration>0&&(n.stunDuration-=e,n.stunDuration<=0&&(n.stunned=!1,n.stunDuration=0)),n.armorShredDuration>0&&(n.armorShredDuration-=e,n.armorShredDuration<=0&&(n.armorShred=0,n.armorShredDuration=0)),this.updateBurn(n,e),n.isBoss&&this.updateBossSkill(n,e);let s=n.speed;if(n.frozenDuration>0||n.stunDuration>0?s=0:n.slowDuration>0&&(n.slowDuration-=e,s*=1-n.slowAmount,n.slowDuration<=0&&(n.slowAmount=0)),n.pathProgress+=s*e,n.pathProgress>=n.pathLength){n.dead=!0,this.onMonsterReachBase&&this.onMonsterReachBase(n);continue}if(n.mesh.position.copy(this.getPositionOnPath(n.pathPoints,n.pathProgress)),n.flying&&(n.mesh.position.y+=.5+Math.sin(n.pathProgress*2+n.id)*.15),n.lastPos){let r=n.mesh.position.x-n.lastPos.x,a=n.mesh.position.z-n.lastPos.z;if(Math.hypot(r,a)>.001){let l=Math.atan2(r,a)-n.mesh.rotation.y;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;n.mesh.rotation.y+=l*Math.min(1,10*e)}}n.lastPos=n.mesh.position.clone(),this.updateHpBar(n)}}updateBurn(e,t){for(let n=e.burnStacks.length-1;n>=0;n--){let s=e.burnStacks[n];if(s.timer-=t,s.tick-=t,s.tick<=0&&(s.tick=1,this.damageMonster(e,s.dps,"magic",{silent:!0}),e.dead))return;s.timer<=0&&e.burnStacks.splice(n,1)}}applySlow(e,t,n,s={}){!e||e.dead||e.flying&&!s.magic||(e.slowAmount=Math.max(e.slowAmount||0,t),e.slowDuration=Math.max(e.slowDuration||0,n))}applyBurn(e,t,n){!e||e.dead||e.burnStacks.push({dps:t,timer:n,tick:1})}applyFreeze(e,t){!e||e.dead||e.isBoss||(e.frozen=!0,e.frozenDuration=Math.max(e.frozenDuration||0,t),e.slowAmount=0,e.slowDuration=0)}applyStun(e,t){!e||e.dead||e.isBoss||(e.stunned=!0,e.stunDuration=Math.max(e.stunDuration||0,t))}getSummonCount(){return this.monsters.filter(e=>e.isSummon&&!e.dead).length}updateBossSkill(e,t){let n=e.def.bossSkill;if(n){if(e.bossWarningTimer>0){e.bossWarningTimer-=t,e.bossWarningTimer<=0&&(this.executeBossSkill(e,n),e.bossSkillTimer=n.cooldown,this.game&&this.game.onBossSkillEnd&&this.game.onBossSkillEnd(e,n));return}e.bossSkillTimer-=t,e.bossSkillTimer<=0&&(n.warning>0?(e.bossWarningTimer=n.warning,this.game&&this.game.onBossWarning&&this.game.onBossWarning(e,n)):(this.executeBossSkill(e,n),e.bossSkillTimer=n.cooldown))}}executeBossSkill(e,t){if(this.game){if(t.type==="stunTowers"){let n=this.game.towerManager.stunTowersWithin(e.mesh.position,t.radius,t.duration);this.game.showMessage&&this.game.showMessage(`${e.def.name} \u9707\u5730\uFF01${n} \u5EA7\u9632\u5FA1\u5854\u88AB\u7729\u6655`,1800)}else if(t.type==="slowTowers"){let n=this.game.towerManager.slowTowersWithin(e.mesh.position,t.radius,t.slowPct,t.duration);this.game.showMessage&&this.game.showMessage(`${e.def.name} \u706B\u7130\u51B2\u51FB\uFF01${n} \u5EA7\u9632\u5FA1\u5854\u653B\u901F\u964D\u4F4E`,1800)}else if(t.type==="summon"){if(this.getSummonCount()>=t.maxSummons)return;let s=t.summon;for(let r=0;r<s.count&&!(this.getSummonCount()>=t.maxSummons);r++)this.spawnMonster(s.type,e.entryIndex,(e.hpScale||1)*s.hpScale,{isSummon:!0,startProgress:Math.max(0,e.pathProgress-1)});this.game.showMessage&&this.game.showMessage(`${e.def.name} \u53EC\u5524\u4E86\u5C0F\u9AB7\u9AC5\uFF01`,1500)}}}getPositionOnPath(e,t){let n=0;for(let s=0;s<e.length-1;s++){let r=e[s].distanceTo(e[s+1]);if(n+r>=t){let a=(t-n)/r;return new P().lerpVectors(e[s],e[s+1],Math.max(0,Math.min(1,a)))}n+=r}return e[e.length-1].clone()}updateHpBar(e){if(!e.hpBar)return;let t=e.hp/e.maxHp,n=e.hpBar.userData.fill,s=e.hpBar.userData.fillMat;n.scale.x=Math.max(0,t),n.position.x=-(1-t)*.24,t>.5?s.color.set("#4caf50"):t>.25?s.color.set("#ff9800"):s.color.set("#f44336")}damageMonster(e,t,n,s={}){if(e.dead)return;e.frozenDuration>0&&(e.frozen=!1,e.frozenDuration=0);let r=t;if(s.damageMult&&(r*=s.damageMult),s.undeadBonus&&e.def.undead&&(r*=1+s.undeadBonus),n==="physical"){let a=Math.max(0,e.def.armor*(1-(s.armorPen||0))*(1-(e.armorShred||0)));r*=1-a/(a+100)}else{let a=Math.max(0,e.def.magicResist*(1-(s.resistPen||0)));r*=1-a/(a+100)}r=Math.max(1,Math.round(r*(.9+Math.random()*.2))),!s.silent&&this.game&&this.game.showDamageNumber&&(this.game.showDamageNumber(e,r),this.game.createHitEffect&&this.game.createHitEffect(e.mesh.position.clone(),"#ffe9b0"),e.spriteAnim&&(e.spriteAnim.sheetType==="canvas"?Ar(e.spriteAnim,"hit",.35):Rc(e.spriteAnim,"hit",.35))),e.hp-=r,e.hp<=0&&(e.hp=0,e.dead=!0,this.game&&this.game.createDeathEffect&&this.game.createDeathEffect(e.mesh.position.clone(),e.def.color),this.onMonsterKilled&&this.onMonsterKilled(e))}removeMonster(e){e.dead=!0}updateVisuals(e){for(let t of this.monsters){if(t.dead)continue;t.spriteAnim&&(t.spriteAnim.sheetType==="canvas"?Rr(t.spriteAnim,e,1):Cc(t.spriteAnim,e));let n=t.mesh.userData.limbs;if(!n)continue;let s=t.frozenDuration>0||t.stunDuration>0;t.animTime=(t.animTime||0)+e*(s?0:1);let r=t.animTime,a=4+Math.min(5,t.speed),o=s?0:Math.min(.5,.12+t.speed*.08);if(t.flying&&n.leftWing){let l=Math.sin(r*8)*.7;n.leftWing.rotation.z=l,n.rightWing.rotation.z=-l,n.torso&&(n.torso.position.y=Math.sin(r*8)*.06,n.torso.rotation.z=Math.sin(r*8)*.08)}else if(n.leftLeg&&n.rightLeg&&!n.legs){let l=Math.sin(r*a)*o;n.leftLeg.rotation.x=l,n.rightLeg.rotation.x=-l,n.leftArm&&(n.leftArm.rotation.x=-l*.8),n.rightArm&&(n.rightArm.rotation.x=l*.8),n.torso&&(n.torso.position.y=Math.abs(Math.sin(r*a))*.04,n.torso.rotation.z=Math.sin(r*a*.5)*.02)}else if(n.legs&&n.legs.length===4){let l=Math.sin(r*a)*o;n.legs[0].rotation.x=l,n.legs[3].rotation.x=l,n.legs[1].rotation.x=-l,n.legs[2].rotation.x=-l,n.torso&&(n.torso.position.y=Math.abs(Math.sin(r*a))*.05,n.torso.rotation.x=Math.sin(r*a)*.03)}t.frozenDuration>0&&n.torso&&(n.torso.position.x=Math.sin(r*30)*.012),t.isBoss&&t.mesh.userData.aura&&(t.mesh.userData.aura.rotation.z+=e*2)}}getAliveCount(){return this.monsters.filter(e=>!e.dead).length}getMonsterDef(e){return Oi[e]}};var ng=[{id:"ranger",name:"\u738B\u56FD\u6E38\u4FA0",icon:"\u{1F9DD}",speed:3,damage:20,atkSpeed:1,range:2.5,damageType:"physical",targetsAir:!0,color:"#27ae60",skill:{name:"\u7A7F\u900F\u7BAD",cooldown:15,desc:"\u5BF9\u8DEF\u5F84\u4E0A\u6240\u6709\u602A\u7269\u9020\u6210100%\u7269\u7406\u4F24\u5BB3\uFF0C\u5BF9\u98DE\u884C\u5355\u4F4D\u989D\u591650%",execute:(i,e)=>{let t=e.monsterManager.monsters,n=i.mesh.position,s=0;for(let r of t)if(!r.dead&&n.distanceTo(r.mesh.position)<=6){let a=i.damage;r.flying&&(a*=1.5),e.monsterManager.damageMonster(r,a,"physical"),s++}return s}}},{id:"mage",name:"\u5BAB\u5EF7\u6CD5\u5E08",icon:"\u{1F9D9}",speed:2.5,damage:25,atkSpeed:.8,range:2.5,damageType:"magic",targetsAir:!0,color:"#8e44ad",skill:{name:"\u706B\u7130\u96E8",cooldown:20,desc:"\u5BF9\u6307\u5B9A\u533A\u57DF\u9020\u6210\u6BCF\u79D230%\u9B54\u6CD5\u4F24\u5BB3\uFF0C\u6301\u7EED3\u79D2\uFF0C\u51CF\u901F20%",execute:(i,e)=>{let t=e.monsterManager,n=t.monsters,s=i.mesh.position,r=0;for(let a of n)a.dead||s.distanceTo(a.mesh.position)<=3.5&&(t.damageMonster(a,i.damage*.3,"magic"),t.applyBurn(a,i.damage*.3,3),t.applySlow(a,.2,3,{magic:!0}),r++);for(let a=0;a<8;a++){let o=new te(new pt(.15,4,4),new Xe({color:"#ff6600",transparent:!0,opacity:.7}));o.position.copy(s).add(new P((Math.random()-.5)*4,2+Math.random()*2,(Math.random()-.5)*4)),e.scene.add(o),setTimeout(()=>e.scene.remove(o),2e3)}return r}}}],Ur=class{constructor(e,t){this.scene=e,this.game=t,this.heroGroup=new Qe,this.scene.add(this.heroGroup),this.heroes=[],this.activeHeroIndex=0,this.moveTarget=null,this.path=[]}reset(e){for(;this.heroGroup.children.length>0;)this.heroGroup.remove(this.heroGroup.children[0]);this.heroes=[],this.moveTarget=null,this.path=[],this.createHero(0,e),this.game.progress&&this.game.progress.unlocked>=3&&this.createHero(1,e.clone().add(new P(.8,0,.8))),this.activeHeroIndex=0}createHero(e,t){let n=ng[e],s=this.getHeroLevel(n.id),r=1+(s-1)*.02,a=1+(s-1)*.01,o=new Qe,l=new Qe;o.add(l);let c=e===0?"#ffd66e":"#b28cff",h=Le(n.color,{roughness:.45}),d=Le("#4a4f68",{roughness:.7}),f={},p=(k,Q,I,U,V,q=0)=>{let X=new Qe;X.position.set(k,Q,q);let W=new te(new lt(I,U,.14),V);return W.position.y=-U/2,W.castShadow=!0,X.add(W),l.add(X),X};f.leftLeg=p(-.13,.27,.1,.34,d),f.rightLeg=p(.13,.27,.1,.34,d),f.leftArm=p(-.27,.84,.08,.26,d),f.rightArm=p(.27,.84,.08,.26,d);let g=new te(new lt(.42,.62,.32),h);g.position.y=.56,g.castShadow=!0,l.add(g);let _=new te(new lt(.3,.3,.16),Le(c,{emissive:c,emissiveIntensity:.18}));_.position.y=.62,_.position.z=.02,l.add(_);let m=new te(new pt(.21,10,8),Le("#ffe8d6"));m.position.y=1.02,m.castShadow=!0,l.add(m);let u=new te(new Ct(.2,.32,8),Le(e===0?"#f2c94c":"#a78bfa",{emissive:c,emissiveIntensity:.12}));u.position.y=1.2,l.add(u);let y=new pt(.035,6,6),v=new Xe({color:"#4a3f8f"}),E=new te(y,v);E.position.set(-.09,1.05,.17),l.add(E);let R=new te(y,v);R.position.set(.09,1.05,.17),l.add(R);let A=new te(new Ct(.24,.3,8),Le("#5d3a1a",{roughness:.6}));if(A.position.y=1.28,l.add(A),e===0){let k=new te(new Fn(.22,.035,6,8,Math.PI*1.2),Le("#f2c94c",{emissive:"#ffd66e",emissiveIntensity:.25}));k.rotation.z=Math.PI/2,k.position.set(.28,.62,0),l.add(k)}else{let k=new te(new Bt(.035,.035,.9,6),Le("#5d3a1a"));k.position.set(.28,.5,0),l.add(k);let Q=new te(new pt(.11,8,6),new Xe({color:"#b28cff"}));Q.position.set(.28,.95,0),l.add(Q)}o.position.copy(t),o.position.y=.2;let T=new te(new on(.32,.44,20),new Xe({color:"#6ee7ff",side:dt,transparent:!0,opacity:.9,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.position.y=.06,T.visible=!1,o.add(T);let z=Lr(e,"run"),M=Lr(e,"hit"),S=Tr(z,M,1.05);S.sprite.position.y=.85,o.add(S.sprite),l.visible=!1,this.heroGroup.add(o);let L={index:e,id:n.id,def:n,mesh:o,level:s,ring:T,limbs:f,animTime:0,bodyGroup:l,spriteAnim:S,damage:n.damage*r,atkSpeed:n.atkSpeed,range:n.range,speed:n.speed*a,cooldown:0,skillCooldown:0,target:null};return this.heroes.push(L),L}setSelected(e){this.heroSelected=e;for(let n of this.heroes)n.ring&&(n.ring.visible=!1);let t=this.getActiveHero();t&&e&&t.ring&&(t.ring.visible=!0)}getHeroLevel(e){if(!this.game||!this.game.progress)return 1;let t=this.game.progress.heroLevels&&this.game.progress.heroLevels[e];return Math.min(30,Math.max(1,t||1))}getActiveHero(){return this.heroes[this.activeHeroIndex]||null}cellKey(e,t){return e+","+t}cellFromPos(e){return{x:Math.floor(e.x),z:Math.floor(e.z)}}findPath(e,t){let n=this.game.map;if(!n||!n.gridW)return[];let s=this.cellFromPos(e),r=this.cellFromPos(t),a=new Set;for(let g of this.game.towerManager.towers)a.add(this.cellKey(Math.floor(g.pos.x),Math.floor(g.pos.z)));let o=r;if(a.has(this.cellKey(o.x,o.z))){let g=null,_=1/0;for(let m=-2;m<=2;m++)for(let u=-2;u<=2;u++){let y={x:o.x+m,z:o.z+u};if(y.x<0||y.z<0||y.x>=n.gridW||y.z>=n.gridH||a.has(this.cellKey(y.x,y.z)))continue;let v=Math.abs(m)+Math.abs(u);v<_&&(_=v,g=y)}if(g)o=g;else return[]}if(s.x===o.x&&s.z===o.z)return[];let l=[s],c=new Map;c.set(this.cellKey(s.x,s.z),null);let h=[[1,0],[-1,0],[0,1],[0,-1]],d=null;for(;l.length;){let g=l.shift();if(g.x===o.x&&g.z===o.z){d=g;break}for(let[_,m]of h){let u=g.x+_,y=g.z+m;if(u<0||y<0||u>=n.gridW||y>=n.gridH)continue;let v=this.cellKey(u,y);a.has(v)||c.has(v)||(c.set(v,g),l.push({x:u,z:y}))}}if(!d)return[];let f=[],p=d;for(;p;)f.push(p),p=c.get(this.cellKey(p.x,p.z));return f.reverse(),f.map(g=>new P(g.x+.5,.2,g.z+.5))}moveHeroTo(e){let t=this.getActiveHero();t&&(this.moveTarget=e.clone(),this.moveTarget.y=.2,this.path=this.findPath(t.mesh.position,this.moveTarget),this.path.length===0&&(this.path=[this.moveTarget.clone()]))}useHeroSkill(e){let t=this.heroes[e];if(!t||t.skillCooldown>0)return;let n=t.def.skill.execute(t,this.game);return t.skillCooldown=t.def.skill.cooldown,t.spriteAnim&&Ar(t.spriteAnim,"hit",.4),this.game.showFloatingText(`${t.def.skill.name}!`,"#ffd700"),this.game.audio&&this.game.audio.play("heroSkill"),this.game.updateHeroUI(),n}update(e){let t=this.getActiveHero();if(!t)return;if(this.path.length>0){let r=this.path[0].clone().sub(t.mesh.position),a=r.length();if(a>.1){r.normalize(),t.mesh.position.add(r.multiplyScalar(t.speed*e));let o=Math.atan2(r.x,r.z);t.mesh.rotation.y+=(o-t.mesh.rotation.y)*5*e,a<.2&&this.path.shift()}else this.path.shift()}else if(this.moveTarget){let s=this.moveTarget.clone().sub(t.mesh.position);if(s.length()>.1){s.normalize(),t.mesh.position.add(s.multiplyScalar(t.speed*e));let a=Math.atan2(s.x,s.z);t.mesh.rotation.y+=(a-t.mesh.rotation.y)*5*e}else this.moveTarget=null}t.cooldown-=e;let n=this.game.monsterManager.monsters;(!t.target||t.target.dead||t.mesh.position.distanceTo(t.target.mesh.position)>t.range+.5)&&(t.target=this.findClosestEnemy(t,n)),t.target&&t.cooldown<=0&&(this.game.monsterManager.damageMonster(t.target,t.damage,t.def.damageType),t.cooldown=1/t.atkSpeed,this.createHeroProjectile(t),this.game.audio&&this.game.audio.play(t.index===0?"shoot_arrow":"cast_magic")),t.skillCooldown>0&&(t.skillCooldown-=e,t.skillCooldown<0&&(t.skillCooldown=0),this.game.updateHeroUI())}findClosestEnemy(e,t){let n=null,s=1/0;for(let r of t){if(r.dead||!e.def.targetsAir&&r.flying)continue;let a=e.mesh.position.distanceTo(r.mesh.position);a<e.range&&a<s&&(s=a,n=r)}return n}createHeroProjectile(e){if(!e.target)return;let t=new pt(.06,4,4),n=new Xe({color:e.index===0?"#f1c40f":"#9b59b6"}),s=new te(t,n);s.position.copy(e.mesh.position),s.position.y+=.6,this.scene.add(s);let r=e.target,a=s.position.clone(),o=r.mesh.position.clone();o.y+=.5;let l=15,c=0,h=()=>{if(r.dead){this.scene.remove(s);return}if(c+=l*.016,s.position.lerpVectors(a,o,Math.min(c,1)),c>=1){this.scene.remove(s);return}requestAnimationFrame(h)};h()}updateVisuals(e){for(let t of this.heroes){t.animTime=(t.animTime||0)+e;let n=!!this.moveTarget||this.path.length>0;t.spriteAnim&&Rr(t.spriteAnim,e,n?1:.4);let s=t.limbs;if(!s)continue;let r=t.animTime;if(n){let a=Math.sin(r*9)*.55;s.leftLeg.rotation.x=a,s.rightLeg.rotation.x=-a,s.leftArm.rotation.x=-a*.85,s.rightArm.rotation.x=a*.85,t.mesh.position.y=.2+Math.abs(Math.sin(r*9))*.05}else s.leftLeg.rotation.x=0,s.rightLeg.rotation.x=0,s.leftArm.rotation.x=0,s.rightArm.rotation.x=0,t.mesh.position.y=.2}}};var ig=[20,22,25,21,23,26,24,28],sg={0:"orcCaptain",2:"orcCaptain",5:"skeletonKing",7:"hellGolem"},rg={1:{basic:["goblin","orc"],flying:["gargoyle"],elite:["wolfRider","shadow","troll"],fast:["fastGoblin"]},2:{basic:["skeleton","zombie"],flying:["ghost"],elite:["lich","stoneGolem"]},3:{basic:["demonImp","hellHound"],flying:["wyvern"],elite:["heavyDemon"]}};function ag(i,e,t,n,s){if(n&&i>=s){let l=Oi[n];return`BOSS: ${l.name} \u964D\u4E34\uFF01${l.bossSkill?`\u9884\u8B66\u300C${l.bossSkill.name}\u300D`:""}`}let r=e[0].type,a=e.some(l=>t.flying.includes(l.type)),o=e.some(l=>t.elite.includes(l.type));return a?"\u98DE\u884C\u7F16\u961F\u6765\u88AD\uFF01\u8BF7\u90E8\u7F72\u5BF9\u7A7A\u706B\u529B\uFF08\u9B54\u6CD5\u5854/\u82F1\u96C4\uFF09":o?`\u7CBE\u82F1${Oi[r].name}\u7A81\u8FDB\uFF0C\u6CE8\u610F\u9AD8\u8840\u91CF\u4E0E\u51B2\u950B\uFF01`:e.length>1?"\u6742\u5175\u6DF7\u7F16\u6F6E\uFF0C\u5408\u7406\u5206\u914D\u706B\u529B\uFF01":`${Oi[r].name} \u6210\u7FA4\u903C\u8FD1\uFF0C\u7BAD\u5854\u5DF2\u5C31\u4F4D\uFF01`}function og(i){let t=zt[i].chapter,n=rg[t],s=ig[i],r=sg[i],a=[];for(let o=1;o<=s;o++){let l=[],c=Math.max(.5,1.3-o*.025),h=Math.round(5+o*.9);if(o===1)l.push({type:n.basic[0],count:5,interval:1.2,delay:2});else if(o<=3)l.push({type:n.basic[0],count:h,interval:c,delay:2});else if(o<=6)l.push({type:n.basic[0],count:Math.round(h*.6),interval:c,delay:2}),l.push({type:n.basic[1],count:Math.round(h*.5),interval:c+.2,delay:4});else if(o===8)l.push({type:n.flying[0],count:3+Math.floor(o/6),interval:1.8,delay:2}),l.push({type:n.basic[0],count:Math.round(h*.5),interval:c,delay:5});else if(o===10)l.push({type:n.elite[0],count:2+Math.floor(o/12),interval:2,delay:2}),l.push({type:n.basic[1],count:Math.round(h*.6),interval:c,delay:5});else if(o>=s)if(r)l.push({type:r,count:1,interval:0,delay:3,isBoss:!0}),l.push({type:n.basic[0],count:Math.round(h*.6),interval:c,delay:6});else{let p=n.elite[Math.min(1,n.elite.length-1)];l.push({type:p,count:3+Math.floor(o/8),interval:1.8,delay:2}),l.push({type:n.basic[0],count:h,interval:c,delay:5}),n.flying[0]&&l.push({type:n.flying[0],count:3,interval:1.6,delay:8})}else l.push({type:n.basic[0],count:Math.round(h*.6),interval:c,delay:2}),l.push({type:n.basic[1],count:Math.round(h*.4),interval:c+.2,delay:4}),o%4===0&&n.flying[0]&&l.push({type:n.flying[0],count:2+Math.floor(o/10),interval:1.8,delay:6}),o%5===0&&n.elite[0]&&l.push({type:n.elite[0],count:1+Math.floor(o/15),interval:2,delay:7});let d=!!(r&&o>=s),f=ag(o,l,n,r,s);a.push({desc:f,enemies:l,isBoss:d})}return a}var Nr=class{constructor(e){this.game=e,this.waves=[],this.currentWave=0,this.totalWaves=0,this.waveActive=!1,this.betweenWaves=!0,this.waveTimer=0,this.spawnQueue=[],this.spawnTimer=0,this.waveReward=0,this.chapter=1,this.dualPath=!1,this.levelIndex=0,this._countdownId=null}reset(){this.waveActive=!1,this.betweenWaves=!0,this.waveTimer=0,this.spawnQueue=[],this.spawnTimer=0,this.waveReward=0,this.currentWave=0,this._countdownId&&(clearInterval(this._countdownId),this._countdownId=null)}loadLevel(e){this.reset(),this.levelIndex=e;let t=zt[e];this.chapter=t.chapter,this.dualPath=t.dualPath,this.waves=og(e),this.totalWaves=this.waves.length,this.currentWave=0}hpScale(e){let t={1:1,2:1.25,3:1.65}[this.chapter]||1,n=1+.08*Math.floor((e-1)/5);return t*n}startWave(e){this.waveActive||(this.currentWave=e-1,!(this.currentWave>=this.totalWaves)&&this._doStartWave())}startNextWave(){this.waveActive||this.currentWave>=this.totalWaves||this._doStartWave()}_doStartWave(){let e=this.waves[this.currentWave],t=this.currentWave+1;this.game.onWaveStart(t),this._showAnnounce(t,e.desc,e.isBoss);let n=this.hpScale(t);this.spawnQueue=[];for(let s of e.enemies){let r=s.entry!=null?s.entry:this.dualPath?t%2===1?0:1:0,a=s.delay||0;for(let o=0;o<s.count;o++)this.spawnQueue.push({type:s.type,delay:a+o*(s.interval||1),entry:r,scale:n})}this.spawnQueue.sort((s,r)=>s.delay-r.delay),this.spawnTimer=0,this.waveActive=!0,this.betweenWaves=!1,this.waveReward=30+this.currentWave*5}_showAnnounce(e,t,n){let s=this.game.ui.waveAnnounce,r=this.game.ui.waveAnnounceText;s.style.display="block",r.textContent=n?`\u26A0 ${t}`:`\u7B2C ${e} \u6CE2 - ${t}`,n?(r.style.color="#ff4444",r.style.borderColor="#ff4444"):(r.style.color="#ffd700",r.style.borderColor="#ffd700"),s.style.animation="none",s.offsetHeight,s.style.animation="waveIn 0.5s ease-out",setTimeout(()=>{s.style.display="none"},2500)}update(e){if(this.waveActive){for(this.spawnTimer+=e;this.spawnQueue.length>0&&this.spawnQueue[0].delay<=this.spawnTimer;){let t=this.spawnQueue.shift();this.game.monsterManager.spawnMonster(t.type,t.entry,t.scale)}this.spawnQueue.length===0&&this.game.monsterManager.getAliveCount()===0&&this._completeWave()}}_completeWave(){this.waveActive=!1,this.betweenWaves=!0,this.game.onWaveComplete(this.currentWave+1),this.currentWave++,this.currentWave>=this.totalWaves?setTimeout(()=>this.game.onAllWavesComplete(),2e3):(this.waveTimer=5,this._countdownId&&clearInterval(this._countdownId),this._countdownId=setInterval(()=>{if(this.game.gameOver){clearInterval(this._countdownId);return}this.waveTimer-=1,this.waveTimer<=0&&(clearInterval(this._countdownId),this._doStartWave())},1e3))}};var Mo="hdw_audio_settings";function lg(){try{let i=JSON.parse(localStorage.getItem(Mo));if(i&&typeof i.master=="number")return i}catch{}return{master:.8,music:.45,sfx:.85,muted:!1}}function xo(i,e,t){let{freq:n=440,endFreq:s=null,type:r="square",dur:a=.15,vol:o=.2,delay:l=0,attack:c=.005}=t,h=i.currentTime+l,d=i.createOscillator(),f=i.createGain();d.type=r,d.frequency.setValueAtTime(Math.max(20,n),h),s&&d.frequency.exponentialRampToValueAtTime(Math.max(20,s),h+a),f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(o,h+c),f.gain.exponentialRampToValueAtTime(1e-4,h+a),d.connect(f).connect(e),d.start(h),d.stop(h+a+.05)}function Dc(i,e,t){let{dur:n=.2,vol:s=.2,delay:r=0,filterFreq:a=1200,type:o="lowpass"}=t,l=i.currentTime+r,c=Math.max(1,Math.floor(i.sampleRate*n)),h=i.createBuffer(1,c,i.sampleRate),d=h.getChannelData(0);for(let _=0;_<c;_++)d[_]=Math.random()*2-1;let f=i.createBufferSource();f.buffer=h;let p=i.createBiquadFilter();p.type=o,p.frequency.value=a;let g=i.createGain();g.gain.setValueAtTime(s,l),g.gain.exponentialRampToValueAtTime(1e-4,l+n),f.connect(p).connect(g).connect(e),f.start(l)}var Or=class{constructor(){this.settings=lg(),this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.musicTimer=null,this.musicStep=0,this.musicIntensity=0,this.chapter=1,this.paused=!1}ensureCtx(){if(this.ctx)return this.ctx;let e=window.AudioContext||window.webkitAudioContext;return e?(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.settings.muted?0:this.settings.master,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.settings.sfx,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.settings.music,this.musicGain.connect(this.masterGain),this.ctx):null}unlock(){let e=this.ensureCtx();e&&e.state==="suspended"&&e.resume().catch(()=>{})}setVolume(e,t){this.settings[e]=t;try{localStorage.setItem(Mo,JSON.stringify(this.settings))}catch{}this.ensureCtx(),this.ctx&&(e==="master"?this.masterGain.gain.value=this.settings.muted?0:t:e==="sfx"?this.sfxGain.gain.value=t:e==="music"&&(this.musicGain.gain.value=t))}setMuted(e){this.settings.muted=e;try{localStorage.setItem(Mo,JSON.stringify(this.settings))}catch{}this.masterGain&&(this.masterGain.gain.value=e?0:this.settings.master)}isMuted(){return!!this.settings.muted}play(e){if(!this.ctx||this.settings.muted)return;let t=this.sfxGain,n=r=>xo(this.ctx,t,r),s=r=>Dc(this.ctx,t,r);switch(e){case"click":n({freq:660,dur:.06,vol:.1});break;case"hover":n({freq:880,dur:.04,vol:.05});break;case"build":s({dur:.18,vol:.25,filterFreq:260}),n({freq:180,endFreq:240,dur:.16,vol:.22});break;case"upgrade":n({freq:330,dur:.09,vol:.16}),n({freq:440,dur:.09,vol:.16,delay:.08}),n({freq:660,dur:.14,vol:.18,delay:.16});break;case"sell":n({freq:440,endFreq:220,dur:.22,vol:.18});break;case"coin":n({freq:1245,type:"sine",dur:.08,vol:.14}),n({freq:1661,type:"sine",dur:.12,vol:.14,delay:.06});break;case"shoot_arrow":s({dur:.08,vol:.14,filterFreq:3200,type:"bandpass"});break;case"cast_magic":n({freq:700,endFreq:1300,type:"sine",dur:.2,vol:.16});break;case"cannon_fire":s({dur:.3,vol:.42,filterFreq:220}),n({freq:80,endFreq:50,dur:.28,vol:.35});break;case"ice_cast":n({freq:1900,type:"sine",dur:.12,vol:.16}),n({freq:2400,type:"sine",dur:.1,vol:.1,delay:.05});break;case"hit":s({dur:.08,vol:.22,filterFreq:900});break;case"death":n({freq:320,endFreq:80,type:"sawtooth",dur:.3,vol:.2});break;case"baseHit":s({dur:.4,vol:.55,filterFreq:130}),n({freq:65,endFreq:40,dur:.4,vol:.4});break;case"waveStart":n({freq:523,type:"triangle",dur:.12,vol:.16}),n({freq:659,type:"triangle",dur:.12,vol:.16,delay:.1}),n({freq:784,type:"triangle",dur:.2,vol:.18,delay:.2});break;case"waveComplete":n({freq:784,type:"triangle",dur:.1,vol:.15}),n({freq:1046,type:"triangle",dur:.18,vol:.16,delay:.09});break;case"bossWarn":n({freq:330,type:"square",dur:.14,vol:.14}),n({freq:330,type:"square",dur:.14,vol:.14,delay:.22}),n({freq:440,type:"square",dur:.2,vol:.16,delay:.44});break;case"heroSkill":n({freq:400,endFreq:1400,type:"sine",dur:.5,vol:.22}),s({dur:.35,vol:.16,filterFreq:2400,type:"bandpass"});break;case"victory":[523,659,784,1046,1318].forEach((r,a)=>n({freq:r,type:"triangle",dur:.2,vol:.2,delay:a*.12}));break;case"defeat":n({freq:400,endFreq:140,type:"sawtooth",dur:.8,vol:.2});break;case"item":n({freq:932,type:"triangle",dur:.12,vol:.18}),n({freq:1245,type:"sine",dur:.14,vol:.16,delay:.08});break;case"freeze":n({freq:2300,type:"sine",dur:.14,vol:.15}),n({freq:1800,type:"sine",dur:.2,vol:.1,delay:.06});break;default:break}}startMusic(e){this.chapter=e||1,this.musicStep=0,this.stopMusic(),!(this.musicTimer||!this.ensureCtx())&&(this.musicTimer=setInterval(()=>this.scheduleMusicStep(),240))}scheduleMusicStep(){if(!this.ctx||this.paused||this.settings.muted)return;let e={1:[261.63,329.63,392,523.25],2:[220,261.63,329.63,440],3:[164.81,220,261.63,329.63]},t=e[this.chapter]||e[1],n=this.musicStep++,s=t[n%t.length],r=Math.floor(n/t.length)%2===0?1:2,a=.05+this.musicIntensity*.09;xo(this.ctx,this.musicGain,{freq:s*r,type:"triangle",dur:.22,vol:a}),this.musicIntensity>.35&&n%2===0&&xo(this.ctx,this.musicGain,{freq:s*.5,type:"sine",dur:.4,vol:a*.6}),this.musicIntensity>.7&&n%4===0&&Dc(this.ctx,this.musicGain,{dur:.12,vol:.05,filterFreq:600})}setMusicIntensity(e){this.musicIntensity=Math.max(0,Math.min(1,e))}setPaused(e){this.paused=e}stopMusic(){this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null)}};var Oc="hdw_progress_v1",Uc=[20,22,25,21,23,26,24,28],Nc={bomb:{name:"\u70B8\u5F39",icon:"\u{1F4A3}",desc:"\u5BF9\u76EE\u6807\u8303\u56F4\u602A\u7269\u9020\u6210120\u9B54\u6CD5\u4F24\u5BB3"},medkit:{name:"\u6025\u6551\u5305",icon:"\u{1FA79}",desc:"\u6062\u590D\u57FA\u5730\u751F\u547D+5"},goldbag:{name:"\u91D1\u5E01\u888B",icon:"\u{1F4B0}",desc:"\u7ACB\u5373\u83B7\u5F97100\u91D1\u5E01"},freezerune:{name:"\u5BD2\u51B0\u7B26",icon:"\u2744\uFE0F",desc:"\u5168\u573A\u602A\u7269\u51CF\u901F50%\u6301\u7EED5\u79D2"},totem:{name:"\u63F4\u519B\u56FE\u817E",icon:"\u{1F5FF}",desc:"\u53EC\u5524\u4E00\u5EA72\u7EA7\u7BAD\u5854\u6301\u7EED15\u79D2"}},Fr={arrowRain:{name:"\u7BAD\u96E8",icon:"\u{1F3F9}",desc:"\u76EE\u6807\u8303\u56F4 150 \u7269\u7406\u4F24\u5BB3",price:60,target:!0},fireball:{name:"\u706B\u7403\u672F",icon:"\u{1F525}",desc:"\u76EE\u6807\u8303\u56F4 250 \u9B54\u6CD5\u4F24\u5BB3",price:80,target:!0},healWave:{name:"\u6CBB\u7597\u6CE2",icon:"\u{1F49A}",desc:"\u57FA\u5730\u6062\u590D 10 \u751F\u547D",price:50,target:!1},timeWarp:{name:"\u65F6\u95F4\u7F13\u901F",icon:"\u23F3",desc:"\u5168\u573A\u602A\u7269\u51CF\u901F 60% \u6301\u7EED 5 \u79D2",price:70,target:!1},goldRain:{name:"\u91D1\u5E01\u96E8",icon:"\u{1FA99}",desc:"\u7ACB\u5373\u83B7\u5F97 200 \u91D1\u5E01",price:40,target:!1}};function cg(){let i={unlocked:0,stars:{},heroExp:{},heroLevels:{ranger:1,mage:1},coins:0,stamina:{value:20,max:20,lastRegen:Date.now()},shopSkills:{arrowRain:0,fireball:0,healWave:0,timeWarp:0,goldRain:0}};try{let e=localStorage.getItem(Oc);if(e){let t=JSON.parse(e);typeof t.unlocked=="number"&&t.stars&&(i.unlocked=t.unlocked,i.stars=t.stars,i.heroExp=t.heroExp||{},i.heroLevels=Object.assign(i.heroLevels,t.heroLevels||{}),i.coins=t.coins||0,i.stamina=Object.assign(i.stamina,t.stamina||{}),i.shopSkills=Object.assign(i.shopSkills,t.shopSkills||{}))}}catch{}return i}function Fi(i){try{localStorage.setItem(Oc,JSON.stringify(i))}catch{}}var So=class{constructor(){this.currentLevel=0,this.progress=cg(),this.selectedChapter=1,this.gold=200,this.baseHP=20,this.baseMaxHP=20,this.waveNum=0,this.maxWaves=20,this.waveActive=!1,this.waveBetween=!1,this.prepPhase=!0,this.gameOver=!1,this.gamePaused=!1,this.gameStarted=!1,this.gameSpeed=1,this.killCount=0,this.totalKills=0,this.hero=null,this.buildingCell=null,this.selectedTowerType=null,this.heroSelected=!1,this.items={bomb:1,medkit:1,goldbag:1,freezerune:1,totem:1},this.selectedItem=null,this.skills={arrowRain:0,fireball:0,healWave:0,timeWarp:0,goldRain:0},this.selectedSkill=null,this.staminaCost=5,this.bossWarnings=[],this._msgTimeout=null,this._suppressClick=!1,this.audio=new Or,this.rangeIndicator=null,this.buildPreview=null,this.initThree(),this.initCamera(),this.initManagers(),this.initLighting(),this.initRaycaster(),this.initUI(),this.map.reset(0),this.showMainMenu(),this.animate()}initThree(){let e=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),t=Math.min(window.devicePixelRatio,e?1.2:2);this.renderer=new ts({antialias:!1,powerPreference:e?"low-power":"default"}),this.renderer.setPixelRatio(t),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lo,this.renderer.toneMapping=co,this.renderer.toneMappingExposure=1.1,document.getElementById("game-container").prepend(this.renderer.domElement),this.scene=new nr,this.scene.background=new Ve(go.sky),this.scene.fog=new tr(go.fog,30,72),this.camera=new Tt(50,window.innerWidth/window.innerHeight,.5,100),this.camTarget=new P(14,0,10),this.camYaw=.7,this.camPitch=.55,this.camRadius=28,this.clock=new mr,this.raycaster=new gr,this.mouse=new be,window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}initCamera(){this.pointer={down:!1,moved:!1,id:null,x:0,y:0,lastX:0,lastY:0},this.pinchDist=0,this.touchIds=new Set;let e=this.renderer.domElement;e.addEventListener("pointerdown",t=>this.onPointerDown(t)),window.addEventListener("pointermove",t=>this.onPointerMove(t)),window.addEventListener("pointerup",t=>this.onPointerUp(t)),window.addEventListener("pointercancel",t=>this.onPointerUp(t)),e.addEventListener("wheel",t=>this.onWheel(t),{passive:!1})}onPointerDown(e){if(e.pointerType==="touch"&&(this.touchIds.add(e.pointerId),this.touchIds.size===2)){let t=this.renderer.domElement.getBoundingClientRect(),n=[...this.touchIds][0];this.pinchDist=0;return}this.pointer={down:!0,moved:!1,id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY}}onPointerMove(e){if(e.pointerType==="touch"&&this.touchIds.size===2){if([...this.touchIds].includes(e.pointerId)&&this._touchPos){this._touchPos.set(e.pointerId,{x:e.clientX,y:e.clientY});let[r,a]=[...this._touchPos.values()],o=Math.hypot(r.x-a.x,r.y-a.y);this.pinchDist>0&&(this.camRadius=Math.max(14,Math.min(55,this.camRadius*(this.pinchDist/o)))),this.pinchDist=o}else if(this._touchPos||(this._touchPos=new Map),this._touchPos.set(e.pointerId,{x:e.clientX,y:e.clientY}),this._touchPos.size===2){let[r,a]=[...this._touchPos.values()];this.pinchDist=Math.hypot(r.x-a.x,r.y-a.y)}return}if(!this.pointer.down||e.pointerId!==this.pointer.id)return;let t=e.clientX-this.pointer.lastX,n=e.clientY-this.pointer.lastY;Math.hypot(e.clientX-this.pointer.x,e.clientY-this.pointer.y)>6&&(this.pointer.moved=!0),this.pointer.lastX=e.clientX,this.pointer.lastY=e.clientY,this.camYaw-=t*.008,this.camPitch=Math.max(.18,Math.min(1.25,this.camPitch+n*.006))}onPointerUp(e){e.pointerType==="touch"&&(this.touchIds.delete(e.pointerId),this._touchPos&&this._touchPos.delete(e.pointerId),this.pinchDist=0),this.pointer.down&&e.pointerId===this.pointer.id&&(this.pointer.moved&&(this._suppressClick=!0),this.pointer.down=!1,setTimeout(()=>{this._suppressClick=!1},50))}onWheel(e){e.preventDefault(),this.camRadius=Math.max(14,Math.min(55,this.camRadius+e.deltaY*.02))}updateCamera(){let e=new P(this.camRadius*Math.cos(this.camPitch)*Math.sin(this.camYaw),this.camRadius*Math.sin(this.camPitch),this.camRadius*Math.cos(this.camPitch)*Math.cos(this.camYaw));this.camera.position.copy(this.camTarget).add(e),this.camera.lookAt(this.camTarget)}frameLevel(){let e=this.map.getCenter();this.camTarget.set(e.x,0,e.z),this.camYaw=.7,this.camPitch=.55,this.camRadius=Math.max(26,this.map.gridW*1.05)}initLighting(){let e=new pr("#e8f4ff",.7);this.scene.add(e);let t=new hr("#cfefff","#7fd27f",.55);this.scene.add(t);let n=new fr("#fff3d6",1.35);n.position.set(20,30,10),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-30,n.shadow.camera.right=30,n.shadow.camera.top=30,n.shadow.camera.bottom=-30,this.scene.add(n)}initRaycaster(){this.renderer.domElement.addEventListener("click",e=>this.onClick(e)),this.renderer.domElement.addEventListener("contextmenu",e=>{e.preventDefault(),this.onRightClick(e)}),this.renderer.domElement.addEventListener("mousemove",e=>this.onMouseMove(e)),document.addEventListener("keydown",e=>this.onKeyDown(e)),["pointerdown","click","keydown","touchstart"].forEach(e=>{window.addEventListener(e,()=>this.audio.unlock(),{passive:!0})})}initManagers(){this.map=new Sr(this.scene),this.towerManager=new br(this.scene,this),this.monsterManager=new Dr(this.scene,this),this.heroManager=new Ur(this.scene,this),this.waveManager=new Nr(this)}initUI(){let e=t=>document.getElementById(t);this.ui={goldEl:e("gold"),baseHPEl:e("base-hp"),waveEl:e("wave-num"),killsEl:e("kill-count"),staminaEl:e("stamina"),levelNameEl:e("level-name"),nextWaveBtn:e("next-wave-btn"),speedBtn:e("speed-btn"),speedText:e("speed-text"),pauseBtn:e("pause-btn"),audioBtn:e("audio-btn"),pauseOverlay:e("pause-overlay"),btnResume:e("btn-resume"),btnPauseRetry:e("btn-pause-retry"),btnPauseMenu:e("btn-pause-menu"),volumeMaster:e("volume-master"),volumeMusic:e("volume-music"),volumeSfx:e("volume-sfx"),towerPanel:e("tower-panel"),towerBtns:document.querySelectorAll(".tower-btn"),infoPanel:e("tower-info-panel"),infoName:e("info-name"),infoLevel:e("info-level"),infoDamage:e("info-damage"),infoRange:e("info-range"),infoDesc:e("info-desc"),upgradeBtn:e("upgrade-btn"),upgradeCost:e("upgrade-cost"),sellBtn:e("sell-btn"),sellValue:e("sell-value"),closeInfoBtn:e("close-info"),waveAnnounce:e("wave-announce"),waveAnnounceText:e("wave-announce-text"),gameOverPanel:e("result-panel"),gameOverTitle:e("result-title"),gameOverStats:e("result-stats"),gameOverStars:e("result-stars"),resultNextBtn:e("btn-result-next"),resultRetryBtn:e("btn-result-retry"),resultMenuBtn:e("btn-result-menu"),heroPanel:e("hero-panel"),heroBtn:e("hero-skill-btn"),heroCooldown:e("hero-cooldown"),heroSkillName:e("hero-skill-name"),heroName:e("hero-name"),heroLevel:e("hero-level"),heroSwitch:e("hero-switch"),itemBar:e("item-bar"),itemBtns:document.querySelectorAll(".item-btn"),skillBar:e("skill-bar"),skillBtns:document.querySelectorAll(".skill-btn"),heroTrainPanel:e("hero-train-panel"),heroTrainList:e("hero-train-list"),trainCoins:e("train-coins"),shopPanel:e("shop-panel"),shopList:e("shop-list"),shopCoins:e("shop-coins"),btnShopMenu:e("btn-shop-menu"),closeTrainBtn:e("close-train"),closeShopBtn:e("close-shop"),towerBuildPanel:e("tower-build-panel"),buildTowerBtns:document.querySelectorAll(".build-tower-btn"),buildCancelBtn:e("build-cancel-btn"),buildSpotLabel:e("build-spot-label"),messageEl:e("message"),mainMenu:e("main-menu"),btnStartMenu:e("btn-start-menu"),btnHeroesMenu:e("btn-heroes-menu"),levelSelect:e("level-select"),chapterTabs:e("chapter-tabs"),levelGrid:e("level-grid"),btnBackMenu:e("btn-back-menu")},this.ui.btnStartMenu.addEventListener("click",()=>{this.audio.play("click"),this.showLevelSelect()}),this.ui.btnHeroesMenu.addEventListener("click",()=>{this.audio.play("click"),this.openHeroTrain()}),this.ui.btnShopMenu.addEventListener("click",()=>{this.audio.play("click"),this.openShop()}),this.ui.closeTrainBtn.addEventListener("click",()=>{this.audio.play("click"),this.closeHeroTrain()}),this.ui.closeShopBtn.addEventListener("click",()=>{this.audio.play("click"),this.closeShop()}),this.ui.btnBackMenu.addEventListener("click",()=>{this.audio.play("click"),this.showMainMenu()}),this.ui.resultNextBtn.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(this.currentLevel+1)}),this.ui.resultRetryBtn.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(this.currentLevel)}),this.ui.resultMenuBtn.addEventListener("click",()=>{this.audio.play("click"),this.showLevelSelect()}),this.ui.nextWaveBtn.addEventListener("click",()=>{this.audio.play("click"),this.requestNextWave()}),this.ui.speedBtn.addEventListener("click",()=>{this.audio.play("click"),this.toggleSpeed()}),this.ui.pauseBtn.addEventListener("click",()=>{this.audio.play("click"),this.togglePause()}),this.ui.btnResume.addEventListener("click",()=>{this.audio.play("click"),this.togglePause()}),this.ui.btnPauseRetry.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(this.currentLevel)}),this.ui.btnPauseMenu.addEventListener("click",()=>{this.audio.play("click"),this.togglePause(),this.showLevelSelect()}),this.ui.audioBtn.addEventListener("click",()=>{let t=!this.audio.isMuted();this.audio.setMuted(t),this.audio.play("click"),this.ui.audioBtn.textContent=t?"\u{1F507}":"\u{1F50A}"}),[["master",this.ui.volumeMaster],["music",this.ui.volumeMusic],["sfx",this.ui.volumeSfx]].forEach(([t,n])=>{n&&(n.value=this.audio.settings[t],n.addEventListener("input",()=>this.audio.setVolume(t,parseFloat(n.value))))}),this.ui.upgradeBtn.addEventListener("click",()=>{this.audio.play("upgrade"),this.upgradeTower()}),this.ui.sellBtn.addEventListener("click",()=>{this.audio.play("sell"),this.sellTower()}),this.ui.closeInfoBtn.addEventListener("click",()=>this.hideTowerInfo()),this.ui.buildCancelBtn.addEventListener("click",()=>this.hideBuildPanel()),this.ui.heroBtn.addEventListener("click",()=>{this.audio.play("heroSkill"),this.useHeroSkill()}),this.ui.towerBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.selectTowerType(t.dataset.type)})}),this.ui.buildTowerBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.buildingCell&&this.buildTowerAtCell(t.dataset.type,this.buildingCell)})}),this.ui.itemBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.selectItem(t.dataset.item)})}),this.ui.skillBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.selectSkill(t.dataset.skill)})}),this.updateUI(),this.updateTowerButtons(),this.updateItemUI(),this.updateSkillUI(),this.updateStaminaUI(),this.ui.audioBtn.textContent=this.audio.isMuted()?"\u{1F507}":"\u{1F50A}"}showMainMenu(){this.gameStarted=!1,this.ui.mainMenu.style.display="flex",this.ui.levelSelect.style.display="none",this.ui.gameOverPanel.style.display="none",this.ui.pauseOverlay.style.display="none",document.getElementById("game-container").classList.add("in-menu"),this.hideBuildPanel(),this.hideTowerInfo(),this.audio.setPaused(!1)}showLevelSelect(){this.gameStarted=!1,this.ui.mainMenu.style.display="none",this.ui.gameOverPanel.style.display="none",this.ui.levelSelect.style.display="flex",document.getElementById("game-container").classList.add("in-menu"),this.audio.startMusic(this.selectedChapter),this.renderLevelSelect()}renderLevelSelect(){let e=this.ui.chapterTabs;e.innerHTML="";let t={1:"\u7B2C\u4E00\u7AE0 \u8FB9\u5883\u9632\u7EBF",2:"\u7B2C\u4E8C\u7AE0 \u4EA1\u7075\u8352\u5730",3:"\u7B2C\u4E09\u7AE0 \u9B54\u7130\u6DF1\u6E0A"};for(let s=1;s<=3;s++){let r=document.createElement("button");r.className="chapter-tab"+(s===this.selectedChapter?" active":""),r.textContent=t[s],r.addEventListener("click",()=>{this.audio.play("click"),this.selectedChapter=s,this.audio.startMusic(s),this.renderLevelSelect()}),e.appendChild(r)}let n=this.ui.levelGrid;n.innerHTML="",zt.forEach((s,r)=>{if(s.chapter!==this.selectedChapter)return;let a=r<=this.progress.unlocked,o=this.progress.stars[r]||0,l=document.createElement("div");l.className="level-card"+(a?"":" locked");let c=[0,1,2].map(h=>`<span class="star ${h<o?"on":""}">\u2605</span>`).join("");l.innerHTML=`
        <div class="level-no">${s.id}</div>
        <div class="level-name">${s.name}</div>
        <div class="level-stars">${a?c:"\u{1F512} \u672A\u89E3\u9501"}</div>
        <div class="level-meta">\u6CE2\u6B21 ${Uc[r]} \xB7 \u521D\u59CB ${s.startGold}G</div>
      `,a&&l.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(r)}),n.appendChild(l)})}startLevel(e){if(e<0||e>=zt.length)return;let t=this.getStamina();if(t.value<this.staminaCost){this.showToast(`\u4F53\u529B\u4E0D\u8DB3\uFF08\u9700\u8981 ${this.staminaCost} \u70B9\uFF0C\u5F53\u524D ${t.value} \u70B9\uFF09`);return}this.spendStamina(this.staminaCost),this.currentLevel=e,this.resetGame(),this.ui.mainMenu.style.display="none",this.ui.levelSelect.style.display="none",this.ui.gameOverPanel.style.display="none",this.ui.pauseOverlay.style.display="none",document.getElementById("game-container").classList.remove("in-menu"),this.gameStarted=!0,this.gameOver=!1,this.prepPhase=!0,this.ui.levelNameEl.textContent=`${zt[e].id} ${zt[e].name}`;let n=this.map.getHeroSpawn();this.heroManager.reset(n),this.hero=this.heroManager.getActiveHero(),this.heroSelected=!1,this.heroManager.setSelected(!1),this.frameLevel(),this.audio.startMusic(zt[e].chapter),this.audio.play("waveStart"),this.updateHeroUI(),this.updateUI(),this.showMessage("\u51C6\u5907\u9636\u6BB5\uFF1A\u90E8\u7F72\u9632\u5FA1\u5854\uFF0C\u70B9\u51FB\u201C\u5F00\u59CB\u9632\u5FA1\u201D\u5F00\u6218",2600)}resetGame(){let e=zt[this.currentLevel];this.gold=e.startGold,this.baseHP=this.baseMaxHP=e.baseHP,this.maxWaves=Uc[this.currentLevel],this.waveNum=0,this.waveActive=!1,this.waveBetween=!1,this.prepPhase=!0,this.gameOver=!1,this.gamePaused=!1,this.gameSpeed=1,this.ui.speedText.textContent="1x",this.killCount=0,this.totalKills=0,this.hero=null,this.buildingCell=null,this.selectedTowerType=null,this.heroSelected=!1,this.selectedItem=null,this.items={bomb:1,medkit:1,goldbag:1,freezerune:1,totem:1},this.selectedSkill=null,this.skills=Object.assign({arrowRain:0,fireball:0,healWave:0,timeWarp:0,goldRain:0},this.progress.shopSkills||{}),this.bossWarnings.forEach(t=>this.scene.remove(t.mesh)),this.bossWarnings=[],this.hideRange(),this.hideBuildPreview(),this.map.reset(this.currentLevel),this.towerManager.reset(),this.monsterManager.reset(this.map.paths),this.waveManager.loadLevel(this.currentLevel),this.monsterManager.onMonsterKilled=t=>{let n=t.def?t.def.reward:10;this.gold+=n,this.totalKills++,this.killCount++,this.audio.play("coin"),this.updateUI()},this.monsterManager.onMonsterReachBase=t=>{let n=t.def?t.def.livesCost:1;this.baseHP-=n,this.audio.play("baseHit"),this.flashScreen("#ff2222",.22,350),this.baseHP<=0&&(this.baseHP=0,this.gameLose()),this.updateUI()},this.hideTowerInfo(),this.hideBuildPanel(),this.updateUI(),this.updateTowerButtons(),this.updateItemUI(),this.updateSkillUI(),this.updateStaminaUI()}computeStars(){return this.baseHP>=this.baseMaxHP?3:this.baseHP>=this.baseMaxHP*.5?2:this.baseHP>0?1:0}computeRewards(e){let t=e?this.computeStars():0,n=e?100+this.maxWaves*5:10*this.waveNum,s=this.waveNum*5,r={0:0,1:.1,2:.3,3:.5}[t]||0,a=e&&!this.progress.stars[this.currentLevel]?200:0,o=e&&this.baseHP>=this.baseMaxHP?100:0,l=Math.round(n+s+(e?n*r:0)+a),c=Math.round(10+this.waveNum*2+t*5+(e?20:0)),h=e?20+t*10+(a?50:0):5+this.waveNum;return{goldReward:l,exp:c,coins:h,firstClear:a,noDamage:o}}gameWin(){this.gameOver=!0,this.waveActive=!1,this.gameStarted=!1,this.audio.play("victory"),this.audio.setMusicIntensity(0);let e=this.computeStars(),t=this.computeRewards(!0);e>(this.progress.stars[this.currentLevel]||0)&&(this.progress.stars[this.currentLevel]=e),this.currentLevel+1<zt.length&&this.progress.unlocked<this.currentLevel+1&&(this.progress.unlocked=this.currentLevel+1),this.hero&&(this.progress.heroExp[this.hero.id]=(this.progress.heroExp[this.hero.id]||0)+t.exp),this.progress.coins+=t.coins,Fi(this.progress);let n=this.currentLevel+1<zt.length;this.ui.gameOverTitle.textContent="\u{1F389} \u80DC\u5229\uFF01",this.ui.gameOverStars.style.display="flex",this.ui.gameOverStars.innerHTML=[0,1,2].map(s=>`<span class="star ${s<e?"on":""}">\u2605</span>`).join(""),this.ui.gameOverStats.innerHTML=`\u51FB\u6740: ${this.totalKills} | \u5269\u4F59\u751F\u547D: ${this.baseHP} | \u661F\u7EA7: ${e}<br>\u91D1\u5E01\u5956\u52B1: ${t.goldReward} | \u5C40\u5916\u91D1\u5E01: +${t.coins} | \u82F1\u96C4\u7ECF\u9A8C: +${t.exp}${t.firstClear?" | \u9996\u901A +200":""}${t.noDamage?" | \u65E0\u4F24 +100":""}`,this.ui.resultNextBtn.style.display=n?"inline-block":"none",this.ui.gameOverPanel.style.display="flex",document.getElementById("game-container").classList.add("in-menu")}gameLose(){this.gameOver=!0,this.waveActive=!1,this.gameStarted=!1,this.audio.play("defeat"),this.audio.setMusicIntensity(0);let e=this.computeRewards(!1);this.hero&&(this.progress.heroExp[this.hero.id]=(this.progress.heroExp[this.hero.id]||0)+e.exp),this.progress.coins+=e.coins,Fi(this.progress),this.ui.gameOverTitle.textContent="\u{1F480} \u5931\u8D25",this.ui.gameOverStars.style.display="none",this.ui.gameOverStats.innerHTML=`\u51FB\u6740: ${this.totalKills} | \u6CE2\u6B21: ${this.waveNum}<br>\u57FA\u7840\u5956\u52B1: ${e.goldReward}G | \u5C40\u5916\u91D1\u5E01: +${e.coins} | \u82F1\u96C4\u7ECF\u9A8C: +${e.exp}`,this.ui.resultNextBtn.style.display="none",this.ui.gameOverPanel.style.display="flex",document.getElementById("game-container").classList.add("in-menu")}spendGold(e){return this.gold<e?!1:(this.gold-=e,this.updateUI(),this.updateTowerButtons(),!0)}addGold(e){this.gold+=e,this.audio.play("coin"),this.updateUI(),this.updateTowerButtons()}showFloatingText(e,t="#ffd700"){let n=document.createElement("div");n.className="floating-text",n.textContent=e,n.style.color=t,n.style.left="50%",n.style.top="42%",document.getElementById("game-container").appendChild(n),setTimeout(()=>n.remove(),1200)}showDamageNumber(e,t){if(!e||!e.mesh)return;let n=e.mesh.position.clone().project(this.camera);if(n.z>1)return;let s=(n.x*.5+.5)*window.innerWidth,r=(-n.y*.5+.5)*window.innerHeight,a=document.createElement("div");a.className="damage-number",a.textContent=`-${t}`,a.style.left=`${s+(Math.random()*16-8)}px`,a.style.top=`${r}px`,document.getElementById("game-container").appendChild(a),setTimeout(()=>a.remove(),700)}flashScreen(e,t,n){let s=document.createElement("div");s.className="screen-flash",s.style.background=e,s.style.opacity=String(t),document.getElementById("game-container").appendChild(s),setTimeout(()=>{s.style.transition="opacity 0.3s",s.style.opacity="0",setTimeout(()=>s.remove(),320)},n)}createHitEffect(e,t){let n=new te(new an(.12,0),new Xe({color:t,transparent:!0,opacity:.9}));n.position.copy(e),n.position.y+=.5,this.scene.add(n);let s=.25,r=()=>{if(s-=.016,s<=0){this.scene.remove(n);return}n.scale.multiplyScalar(1.35),n.material.opacity=Math.max(0,s*3.6),requestAnimationFrame(r)};r()}createDeathEffect(e,t){let n=[];for(let r=0;r<8;r++){let a=new te(new lt(.08,.08,.08),new Xe({color:t,transparent:!0,opacity:1}));a.position.copy(e).add(new P((Math.random()-.5)*.4,.5+Math.random()*.5,(Math.random()-.5)*.4)),this.scene.add(a),n.push({mesh:a,vx:(Math.random()-.5)*2.4,vy:1.6+Math.random()*2.2,vz:(Math.random()-.5)*2.4,life:.7})}let s=()=>{let r=!1;for(let a of n){if(a.life-=.016,a.life<=0){this.scene.remove(a.mesh);continue}r=!0,a.mesh.position.x+=a.vx*.016,a.mesh.position.y+=a.vy*.016,a.vy-=5*.016,a.mesh.material.opacity=Math.max(0,a.life/.7),a.mesh.rotation.x+=.2,a.mesh.rotation.z+=.15}r&&requestAnimationFrame(s)};s()}createMuzzleFlash(e,t){let n=new te(new an(.16,0),new Xe({color:t,transparent:!0,opacity:.95,blending:Ns,depthWrite:!1}));n.position.copy(e),this.scene.add(n);let s=.12,r=()=>{if(s-=.016,s<=0){this.scene.remove(n);return}n.scale.multiplyScalar(1.4),n.material.opacity=Math.max(0,s*8),requestAnimationFrame(r)};r()}selectTowerType(e){let t=document.querySelector(`.tower-btn[data-type="${e}"]`);t&&(this.heroSelected=!1,this.heroManager.setSelected(!1),t.classList.contains("selected")?(t.classList.remove("selected"),this.selectedTowerType=null,this.hideBuildPreview(),this.hideRange()):(this.ui.towerBtns.forEach(n=>n.classList.remove("selected")),t.classList.add("selected"),this.selectedTowerType=e,this.hideBuildPanel(),this.hideTowerInfo()))}buildTowerAtCell(e,t){let s=this.towerManager.towerDefs[e];if(!s)return;let r=s.levels[0].cost;if(this.gold<r){this.showMessage("\u91D1\u5E01\u4E0D\u8DB3\uFF01",1500),this.audio.play("click");return}if(!this.map.isPlaceableCell(t.x,t.z)){this.showMessage("\u8FD9\u91CC\u4E0D\u80FD\u5EFA\u9020\u9632\u5FA1\u5854",1200);return}this.towerManager.placeTower(t,e)&&(this.hideBuildPanel(),this.audio.play("build"),this.updateUI(),this.updateTowerButtons(),this.showRangeAt(this.map.getCellCenterWorld(t.x,t.z),s.levels[0].range,"#6ee7ff"))}showBuildPanel(e){this.buildingCell={x:e.x,z:e.z},this.hideTowerInfo(),this.ui.towerBuildPanel.style.display="flex",this.ui.buildSpotLabel.textContent=`\u5EFA\u9020\u4F4D\u7F6E (${e.x}, ${e.z})`;let t=this.ui.buildTowerBtns,n=this.towerManager.towerDefs;t.forEach(s=>{let r=s.dataset.type,a=n[r];if(a){let o=a.levels[0].cost;s.querySelector(".build-cost").textContent=`${o}G`,s.classList.toggle("disabled",this.gold<o)}}),this.showRangeAt(this.map.getCellCenterWorld(e.x,e.z),2.5,"#a8b8d8")}hideBuildPanel(){this.buildingCell=null,this.ui.towerBuildPanel.style.display="none",this.selectedTowerType||this.hideRange()}showTowerInfo(e){this.ui.infoName.textContent=e.def.name,this.ui.infoLevel.textContent=`Lv.${e.level}`,this.ui.infoDamage.textContent=`\u4F24\u5BB3: ${e.levelDef.damage}`,this.ui.infoRange.textContent=`\u5C04\u7A0B: ${e.levelDef.range}`,this.ui.infoDesc.textContent=e.levelDef.desc||"",e.canUpgrade?(this.ui.upgradeCost.textContent=`${e.upgradeCost}G`,this.ui.upgradeBtn.style.display="flex",this.ui.upgradeBtn.classList.toggle("disabled",this.gold<e.upgradeCost)):this.ui.upgradeBtn.style.display="none",this.ui.sellValue.textContent=`${e.sellRefund}G`,this.ui.infoPanel.style.display="flex"}hideTowerInfo(){this.ui.infoPanel.style.display="none",this.towerManager.hideTowerMenu(),this.hideRange()}upgradeTower(){let e=this.towerManager.selectedTower;if(!e)return;if(this.towerManager.upgradeTower(e.cell)){let n=this.towerManager.showTowerMenu(e.cell);n&&(this.showTowerInfo(n),this.showRangeAt(n.pos,n.levelDef.range,"#ffd66e")),this.updateUI(),this.updateTowerButtons()}}sellTower(){let e=this.towerManager.selectedTower;e&&(this.towerManager.sellTower(e.cell),this.hideTowerInfo(),this.updateUI(),this.updateTowerButtons())}useHeroSkill(){!this.hero||this.gameOver||(this.heroManager.useHeroSkill(this.heroManager.activeHeroIndex),this.updateHeroUI())}switchHero(e){this.heroManager.heroes[e]&&(this.heroManager.activeHeroIndex=e,this.heroManager.moveTarget=null,this.heroManager.path=[],this.heroSelected=!1,this.heroManager.setSelected(!1),this.hero=this.heroManager.getActiveHero(),this.updateHeroUI())}updateHeroUI(){if(!this.hero){this.ui.heroPanel.style.display="none";return}this.ui.heroPanel.style.display="flex",this.ui.heroName.textContent=this.hero.def.name,this.ui.heroLevel.textContent=`Lv.${this.hero.level}`,this.ui.heroSkillName.textContent=this.hero.def.skill.name;let e=this.hero.skillCooldown;e>0?(this.ui.heroBtn.classList.add("on-cooldown"),this.ui.heroCooldown.textContent=`${Math.ceil(e)}s`):(this.ui.heroBtn.classList.remove("on-cooldown"),this.ui.heroCooldown.textContent="\u5C31\u7EEA"),this.ui.heroSwitch.innerHTML="",this.heroManager.heroes.forEach((t,n)=>{let s=document.createElement("button");s.className="hero-switch-btn"+(n===this.heroManager.activeHeroIndex?" active":""),s.textContent=t.def.icon,s.title=`${t.def.name} Lv.${t.level}`,s.addEventListener("click",()=>{this.audio.play("click"),this.switchHero(n)}),this.ui.heroSwitch.appendChild(s)})}selectItem(e){if(!(this.items[e]<=0)&&(this.selectedItem=this.selectedItem===e?null:e,this.updateItemUI(),this.selectedItem)){let t=Nc[e];this.showMessage(`${t.name}\uFF1A${t.desc}${t.immediate===!1?"\uFF0C\u70B9\u51FB\u6218\u573A\u4F7F\u7528":""}`,2200)}}useItem(e){if(this.items[e]<=0)return;let t=this.monsterManager;if(e==="medkit")this.baseHP=Math.min(this.baseMaxHP,this.baseHP+5),this.showMessage("\u6025\u6551\u5305\uFF1A\u57FA\u5730\u751F\u547D+5",1400);else if(e==="goldbag")this.gold+=100,this.showMessage("\u91D1\u5E01\u888B\uFF1A+100G",1400);else if(e==="freezerune"){for(let n of t.monsters)t.applySlow(n,.5,5,{magic:!0});this.showMessage("\u5BD2\u51B0\u7B26\uFF1A\u5168\u573A\u51CF\u901F50%",1400),this.audio.play("freeze")}this.items[e]--,this.updateUI(),this.updateItemUI()}useItemAt(e,t){if(!(this.items[e]<=0)){if(e==="bomb"){let n=this.monsterManager,s=0;for(let r of n.monsters)r.dead||t.distanceTo(r.mesh.position)<=2.5&&(n.damageMonster(r,120,"magic"),s++);this.spawnExplosion(t),this.audio.play("cannon_fire"),this.showMessage(`\u70B8\u5F39\u547D\u4E2D ${s} \u53EA\u602A\u7269`,1400),this.items[e]--}else if(e==="totem"){let n=this.map.getCellFromWorld(t);if(!this.map.isPlaceableCell(n.x,n.z)){this.showMessage("\u8FD9\u91CC\u4E0D\u80FD\u653E\u7F6E\u56FE\u817E",1400);return}if(this.towerManager.getTowerAtCell(n.x,n.z)){this.showMessage("\u8FD9\u91CC\u5DF2\u7ECF\u6709\u9632\u5FA1\u5854",1400);return}this.towerManager.addTemporaryTower("arrow",n,2,15),this.audio.play("build"),this.showMessage("\u63F4\u519B\u56FE\u817E\uFF1A2\u7EA7\u7BAD\u5854\u53C2\u621815\u79D2",1400),this.items[e]--}this.updateUI(),this.updateItemUI()}}spawnExplosion(e){let t=new Xe({color:"#ff8800",transparent:!0,opacity:.8}),n=new te(new pt(1.2,8,6),t);n.position.copy(e),n.position.y=.5,this.scene.add(n);let s=.35,r=()=>{if(s-=.016,s<=0){this.scene.remove(n);return}n.scale.multiplyScalar(1.06),n.material.opacity=Math.max(0,s),requestAnimationFrame(r)};r()}updateItemUI(){this.ui.itemBtns.forEach(e=>{let t=e.dataset.item,n=this.items[t]||0,s=Nc[t],r=e.querySelector(".item-count");r&&(r.textContent=`\xD7${n}`),e.title=`${s.name}\uFF1A${s.desc}`,e.classList.toggle("selected",this.selectedItem===t),e.classList.toggle("disabled",n<=0)})}selectSkill(e){if(this.skills[e]<=0)return;let t=Fr[e];if(!t.target){this.useSkill(e);return}this.selectedSkill=this.selectedSkill===e?null:e,this.updateSkillUI(),this.selectedSkill&&this.showMessage(`${t.name}\uFF1A\u70B9\u51FB\u6218\u573A\u4F7F\u7528`,1600)}useSkill(e){if(!(this.skills[e]<=0)){if(e==="healWave")this.baseHP=Math.min(this.baseMaxHP,this.baseHP+10),this.showMessage("\u6CBB\u7597\u6CE2\uFF1A\u57FA\u5730\u751F\u547D+10",1400),this.audio.play("item");else if(e==="timeWarp"){for(let t of this.monsterManager.monsters)this.monsterManager.applySlow(t,.6,5,{magic:!0});this.showMessage("\u65F6\u95F4\u7F13\u901F\uFF1A\u5168\u573A\u51CF\u901F60%",1400),this.audio.play("freeze")}else e==="goldRain"&&(this.gold+=200,this.showMessage("\u91D1\u5E01\u96E8\uFF1A+200G",1400),this.audio.play("coin"));this.skills[e]--,this.updateUI(),this.updateSkillUI()}}useSkillAt(e,t){if(this.skills[e]<=0)return;let n=this.monsterManager;if(e==="arrowRain"){let s=0;for(let r of n.monsters)r.dead||t.distanceTo(r.mesh.position)<=3&&(n.damageMonster(r,150,"physical"),s++);this.spawnExplosion(t),this.audio.play("cannon_fire"),this.showMessage(`\u7BAD\u96E8\u547D\u4E2D ${s} \u53EA\u602A\u7269`,1400),this.skills[e]--}else if(e==="fireball"){let s=0;for(let r of n.monsters)r.dead||t.distanceTo(r.mesh.position)<=1.6&&(n.damageMonster(r,250,"magic"),s++);this.spawnExplosion(t),this.audio.play("heroSkill"),this.showMessage(`\u706B\u7403\u672F\u547D\u4E2D ${s} \u53EA\u602A\u7269`,1400),this.skills[e]--}this.updateUI(),this.updateSkillUI()}updateSkillUI(){this.ui.skillBtns.forEach(e=>{let t=e.dataset.skill,n=this.skills[t]||0,s=Fr[t],r=e.querySelector(".skill-count");r&&(r.textContent=`\xD7${n}`),e.title=`${s.name}\uFF1A${s.desc}`,e.classList.toggle("selected",this.selectedSkill===t),e.classList.toggle("disabled",n<=0)})}buySkill(e){let t=Fr[e];if(t){if(this.progress.coins<t.price){this.showToast("\u5C40\u5916\u91D1\u5E01\u4E0D\u8DB3");return}this.progress.coins-=t.price,this.progress.shopSkills[e]=(this.progress.shopSkills[e]||0)+1,Fi(this.progress),this.audio.play("coin"),this.renderShop()}}upgradeHero(e){let t=this.progress.heroLevels[e]||1;if(t>=30){this.showToast("\u82F1\u96C4\u5DF2\u8FBE\u6EE1\u7EA7");return}let n=30+t*20;if(this.progress.coins<n){this.showToast("\u5C40\u5916\u91D1\u5E01\u4E0D\u8DB3");return}this.progress.coins-=n,this.progress.heroLevels[e]=t+1,Fi(this.progress),this.audio.play("upgrade"),this.renderHeroTrain()}renderHeroTrain(){let e=this.ui.heroTrainList;e.innerHTML="";let t=[{id:"ranger",name:"\u738B\u56FD\u6E38\u4FA0",icon:"\u{1F9DD}",unlocked:!0},{id:"mage",name:"\u5BAB\u5EF7\u6CD5\u5E08",icon:"\u{1F9D9}",unlocked:this.progress.unlocked>=3}];for(let n of t){let s=this.progress.heroLevels[n.id]||1,r=s>=30?0:30+s*20,a=n.id==="ranger"?20:25,o=n.id==="ranger"?3:2.5,l=Math.round(a*(1+(s-1)*.02)),c=o*(1+(s-1)*.01),h=document.createElement("div");h.className="train-card"+(n.unlocked?"":" locked"),h.innerHTML=`
        <div class="train-icon">${n.icon}</div>
        <div class="train-name">${n.name}</div>
        <div class="train-level">Lv.${s}</div>
        <div class="train-stat">\u653B\u51FB ${l} \xB7 \u79FB\u901F ${c.toFixed(2)}</div>
        <button class="train-upgrade" ${n.unlocked&&s<30?"":"disabled"}>${s>=30?"\u6EE1\u7EA7":`\u5347\u7EA7 ${r} \u91D1\u5E01`}</button>
      `,n.unlocked&&s<30?h.querySelector(".train-upgrade").addEventListener("click",()=>this.upgradeHero(n.id)):n.unlocked||(h.querySelector(".train-upgrade").textContent="\u672A\u89E3\u9501\uFF08\u5B8C\u62103003\uFF09"),e.appendChild(h)}this.ui.trainCoins.textContent=`\u5C40\u5916\u91D1\u5E01\uFF1A${this.progress.coins}`}renderShop(){let e=this.ui.shopList;e.innerHTML="";for(let[t,n]of Object.entries(Fr)){let s=this.progress.shopSkills[t]||0,r=document.createElement("div");r.className="shop-row",r.innerHTML=`
        <span class="shop-icon">${n.icon}</span>
        <div class="shop-info">
          <div class="shop-name">${n.name}</div>
          <div class="shop-desc">${n.desc}</div>
        </div>
        <span class="shop-owned">\xD7${s}</span>
        <button class="shop-buy" data-skill="${t}" ${this.progress.coins>=n.price?"":"disabled"}>${n.price} \u91D1\u5E01</button>
      `,r.querySelector(".shop-buy").addEventListener("click",()=>this.buySkill(t)),e.appendChild(r)}this.ui.shopCoins.textContent=`\u5C40\u5916\u91D1\u5E01\uFF1A${this.progress.coins}`}openHeroTrain(){this.ui.heroTrainPanel.style.display="flex",this.renderHeroTrain()}closeHeroTrain(){this.ui.heroTrainPanel.style.display="none"}openShop(){this.ui.shopPanel.style.display="flex",this.renderShop()}closeShop(){this.ui.shopPanel.style.display="none"}requestNextWave(){this.gameOver||!this.gameStarted||this.waveManager.waveActive||this.earlyStartWave()}earlyStartWave(){if(this.gameOver||!this.gameStarted||this.waveManager.waveActive)return;if(this.prepPhase){this.prepPhase=!1,this.waveManager.startNextWave(),this.updateUI();return}if(!this.waveManager.betweenWaves)return;let e=Math.floor(this.waveManager.waveTimer);e>0&&(this.addGold(e*2),this.showMessage(`\u63D0\u524D\u5F00\u6CE2\uFF01+${e*2}G`,1500)),this.waveManager._countdownId&&(clearInterval(this.waveManager._countdownId),this.waveManager._countdownId=null),this.waveManager.startNextWave(),this.updateUI()}toggleSpeed(){this.gameSpeed=this.gameSpeed===1?2:1,this.ui.speedText.textContent=`${this.gameSpeed}x`,this.audio.setPaused(this.gamePaused)}togglePause(){!this.gameStarted||this.gameOver||(this.gamePaused=!this.gamePaused,this.ui.pauseOverlay.style.display=this.gamePaused?"flex":"none",this.audio.setPaused(this.gamePaused))}showMessage(e,t=2e3){this.ui.messageEl.textContent=e,this.ui.messageEl.style.opacity="1",clearTimeout(this._msgTimeout),this._msgTimeout=setTimeout(()=>{this.ui.messageEl.style.opacity="0"},t)}showToast(e,t=2200){let n=document.getElementById("ui-toast");n||(n=document.createElement("div"),n.id="ui-toast",document.body.appendChild(n)),n.textContent=e,n.style.display="block",clearTimeout(this._toastTimeout),this._toastTimeout=setTimeout(()=>{n.style.display="none"},t)}getStamina(){let e=this.progress.stamina,t=Date.now(),n=5*60*1e3,s=Math.floor((t-e.lastRegen)/n);return s>0&&e.value<e.max&&(e.value=Math.min(e.max,e.value+s),e.lastRegen+=s*n,Fi(this.progress)),e}spendStamina(e){let t=this.getStamina();return t.value<e?!1:(t.value-=e,Fi(this.progress),this.updateStaminaUI(),!0)}updateStaminaUI(){let e=this.getStamina(),t=this.ui.staminaEl;return t&&(t.textContent=`${e.value}/${e.max}`),e}updateUI(){if(this.ui.goldEl.textContent=this.gold,this.ui.baseHPEl.textContent=this.baseHP,this.ui.waveEl.textContent=`${this.waveNum}/${this.maxWaves}`,this.ui.killsEl.textContent=this.totalKills,this.updateStaminaUI(),this.gameOver||!this.gameStarted){this.ui.nextWaveBtn.disabled=!0,this.ui.nextWaveBtn.textContent="\u4E0B\u4E00\u6CE2";return}this.waveManager.waveActive?(this.ui.nextWaveBtn.disabled=!0,this.ui.nextWaveBtn.textContent="\u6218\u6597\u4E2D"):this.prepPhase?(this.ui.nextWaveBtn.disabled=!1,this.ui.nextWaveBtn.textContent="\u2694\uFE0F \u5F00\u59CB\u9632\u5FA1"):(this.ui.nextWaveBtn.disabled=!1,this.ui.nextWaveBtn.textContent="\u23E9 \u63D0\u524D\u5F00\u6CE2")}updateTowerButtons(){let e=document.querySelectorAll(".tower-btn"),t=this.towerManager.towerDefs;e.forEach(n=>{let s=n.dataset.type,r=t[s];if(r){let a=r.levels[0].cost,o=n.querySelector(".tower-cost");o&&(o.textContent=`${a}G`),n.classList.toggle("disabled",this.gold<a)}})}showRangeAt(e,t,n="#6ee7ff"){this.hideRange();let s=new Qe,r=new te(new is(t,48),new Xe({color:n,transparent:!0,opacity:.14,side:dt,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.045,s.add(r);let a=new te(new on(t-.06,t,48),new Xe({color:n,transparent:!0,opacity:.85,side:dt,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.065,s.add(a),s.position.copy(e),this.scene.add(s),this.rangeIndicator=s}hideRange(){this.rangeIndicator&&(this.scene.remove(this.rangeIndicator),this.rangeIndicator=null)}showBuildPreview(e,t,n){this.hideBuildPreview();let s=new Qe,r=this.map.getCellCenterWorld(e.x,e.z),a=n?"#6ee7ff":"#ff6b6b",o=new te(new rn(.9,.9),new Xe({color:a,transparent:!0,opacity:.38,side:dt,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.055,s.add(o);let l=new te(new is(t,48),new Xe({color:a,transparent:!0,opacity:.12,side:dt,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.05,s.add(l);let c=new te(new on(t-.05,t,48),new Xe({color:a,transparent:!0,opacity:.8,side:dt,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.07,s.add(c),s.position.copy(r),this.scene.add(s),this.buildPreview=s}hideBuildPreview(){this.buildPreview&&(this.scene.remove(this.buildPreview),this.buildPreview=null)}updateBuildPreviewFromMouse(){if(!this.selectedTowerType||!this.gameStarted||this.gameOver){this.hideBuildPreview();return}this.raycaster.setFromCamera(this.mouse,this.camera);let e=this.raycaster.intersectObject(this.map.groundMesh);if(!e.length)return;let t=this.map.getCellFromWorld(e[0].point),n=this.towerManager.towerDefs[this.selectedTowerType];if(!n)return;let s=this.map.isPlaceableCell(t.x,t.z)&&!this.towerManager.getTowerAtCell(t.x,t.z)&&this.gold>=n.levels[0].cost;this.showBuildPreview(t,n.levels[0].range,s)}onClick(e){if(this._suppressClick||this.gameOver||!this.gameStarted)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.heroManager.heroes.map(a=>a.mesh);if(this.raycaster.intersectObjects(t,!0).length>0){this.heroSelected=!this.heroSelected,this.heroManager.setSelected(this.heroSelected),this.showMessage(this.heroSelected?"\u5DF2\u9009\u4E2D\u82F1\u96C4\uFF0C\u70B9\u51FB\u5730\u56FE\u79FB\u52A8":"\u5DF2\u53D6\u6D88\u9009\u4E2D\u82F1\u96C4",1400),this.hideBuildPanel();return}let s=this.towerManager.towers.map(a=>a.mesh),r=this.raycaster.intersectObjects(s,!0);if(r.length>0){let a=r[0].object;for(;a;){let o=this.towerManager.towers.find(l=>l.mesh===a);if(o){this.heroSelected=!1,this.heroManager.setSelected(!1),this.hideBuildPanel(),this.selectedItem=null,this.updateItemUI();let l=this.towerManager.showTowerMenu(o.cell);l&&(this.showTowerInfo(l),this.showRangeAt(l.pos,l.levelDef.range,"#6ee7ff"));return}a=a.parent}}if(this.map.groundMesh){let a=this.raycaster.intersectObject(this.map.groundMesh);if(a.length>0){let o=a[0].point,l=this.map.getCellFromWorld(o);if(this.selectedItem){let h=this.selectedItem;this.selectedItem=null,this.updateItemUI(),this.useItemAt(h,o);return}if(this.selectedSkill){let h=this.selectedSkill;this.selectedSkill=null,this.updateSkillUI(),this.useSkillAt(h,o);return}let c=this.towerManager.getTowerAtCell(l.x,l.z);if(c){this.heroSelected=!1,this.heroManager.setSelected(!1),this.hideBuildPanel(),this.selectedItem=null,this.updateItemUI();let h=this.towerManager.showTowerMenu(c.cell);h&&(this.showTowerInfo(h),this.showRangeAt(h.pos,h.levelDef.range,"#6ee7ff"));return}if(this.heroSelected){this.heroManager.moveHeroTo(o);return}if(this.selectedTowerType){this.buildingCell=l,this.buildTowerAtCell(this.selectedTowerType,l),this.hideBuildPreview();return}if(this.map.isPlaceableCell(l.x,l.z)){this.showBuildPanel(l);return}}}this.hideBuildPanel(),this.hideTowerInfo()}onRightClick(e){if(this.gameOver||!this.gameStarted)return;e.preventDefault(),this.selectedTowerType=null,this.heroSelected=!1,this.heroManager.setSelected(!1),this.selectedItem=null,document.querySelectorAll(".tower-btn").forEach(s=>s.classList.remove("selected")),this.hideBuildPreview(),this.updateItemUI(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.towerManager.towers.map(s=>s.mesh),n=this.raycaster.intersectObjects(t,!0);if(n.length>0){let s=n[0].object;for(;s;){let r=this.towerManager.towers.find(a=>a.mesh===s);if(r){this.towerManager.sellTower(r.cell),this.audio.play("sell"),this.hideTowerInfo(),this.updateUI(),this.updateTowerButtons();return}s=s.parent}}}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.updateBuildPreviewFromMouse()}onKeyDown(e){if(this.gameOver&&e.key==="Enter"){this.startLevel(this.currentLevel);return}if(this.gameStarted)switch(e.key){case"Escape":this.hideBuildPanel(),this.hideTowerInfo(),this.selectedTowerType=null,this.selectedItem=null,this.heroSelected=!1,this.heroManager.setSelected(!1),this.hideBuildPreview(),this.hideRange();break;case"1":this.selectTowerType("arrow");break;case"2":this.selectTowerType("magic");break;case"3":this.selectTowerType("cannon");break;case"4":this.selectTowerType("ice");break;case"q":case"Q":this.useHeroSkill();break;case" ":e.preventDefault(),this.requestNextWave();break;case"p":case"P":this.togglePause();break}}animate(){requestAnimationFrame(()=>this.animate());let e=Math.min(this.clock.getDelta(),.1),t=this.gamePaused?0:e*this.gameSpeed;this.updateStaminaUI(),this.updateBossWarnings(e),this.gameStarted&&!this.gameOver&&t>0&&(this.towerManager.update(t),this.monsterManager.update(t),this.heroManager.update(t),this.waveManager.update(t),this.towerManager.updateVisuals(t),this.monsterManager.updateVisuals(t),this.heroManager.updateVisuals(t),this.updateHeroUI(),this.updateUI(),this.updateMusicIntensity()),this.updateCamera(),this.renderer.render(this.scene,this.camera)}updateMusicIntensity(){let e=this.monsterManager.getAliveCount(),t=this.monsterManager.monsters.some(r=>r.isBoss&&!r.dead),n=this.baseHP/this.baseMaxHP<.3?.2:0,s=Math.max(0,Math.min(1,e/25*.55+(t?.35:0)+n));this.audio.setMusicIntensity(s)}updateBossWarnings(e){for(let t=this.bossWarnings.length-1;t>=0;t--){let n=this.bossWarnings[t];n.life-=e,n.mesh.material&&(n.mesh.material.opacity=Math.max(0,Math.min(.55,n.life*.7))),n.life<=0&&(this.scene.remove(n.mesh),this.bossWarnings.splice(t,1))}}onBossWarning(e,t){if(!e||!e.mesh)return;let n=t.radius||2,s=new te(new on(Math.max(.1,n-.15),n,32),new Xe({color:16720418,side:dt,transparent:!0,opacity:.55}));s.rotation.x=-Math.PI/2,s.position.set(e.mesh.position.x,.28,e.mesh.position.z),this.scene.add(s),this.bossWarnings.push({mesh:s,life:(t.warning||1)+.25}),this.showMessage(`${e.def.name} \u6B63\u5728\u65BD\u653E\u300C${t.name}\u300D\uFF01`,1800),this.audio.play("bossWarn"),t.type==="slowTowers"&&this.flashScreen("#ff3300",.25,600)}onBossSkillEnd(e,t){t&&t.type==="stunTowers"&&this.flashScreen("#ff6600",.18,350)}onWaveStart(e){this.waveNum=e,this.waveActive=!0,this.waveBetween=!1,this.prepPhase=!1,this.audio.play("waveStart"),this.updateUI(),this.showMessage(`\u7B2C ${e} \u6CE2\u6765\u88AD\uFF01`,2e3)}onWaveComplete(e){this.waveActive=!1,this.waveBetween=!0,this.killCount=0;let t=30+e*5;this.addGold(t),this.audio.play("waveComplete"),this.updateUI(),this.showMessage(`\u6CE2\u6B21\u5B8C\u6210\uFF01+${t}G`,2e3)}onAllWavesComplete(){!this.gameStarted||this.gameOver||this.gameWin()}},Fc=new So;window.game=Fc;var Bg=Fc;})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
