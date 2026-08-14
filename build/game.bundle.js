(()=>{var ua="160";var Nl=0,Ra=1,Ol=2;var tl=1,da=2,rn=3,Sn=0,Ct=1,dt=2;var vn=0,ci=1,Ca=2,Pa=3,Ia=4,Fl=5,Un=100,Bl=101,zl=102,La=103,Da=104,Hl=200,kl=201,Gl=202,Vl=203,Ar=204,Rr=205,Wl=206,Xl=207,ql=208,Yl=209,$l=210,Zl=211,Jl=212,Kl=213,Ql=214,jl=0,ec=1,tc=2,os=3,nc=4,ic=5,sc=6,rc=7,nl=0,ac=1,oc=2,yn=0,lc=1,cc=2,hc=3,fa=4,uc=5,dc=6;var il=300,di=301,fi=302,Cr=303,Pr=304,Ns=306,Ir=1e3,Xt=1001,Lr=1002,bt=1003,Ua=1004;var Zs=1005;var Ft=1006,fc=1007;var Ai=1008;var Mn=1009,pc=1010,mc=1011,pa=1012,sl=1013,_n=1014,xn=1015,Ri=1016,rl=1017,al=1018,On=1020,gc=1021,qt=1023,_c=1024,xc=1025,Fn=1026,pi=1027,vc=1028,ol=1029,yc=1030,ll=1031,cl=1033,Js=33776,Ks=33777,Qs=33778,js=33779,Na=35840,Oa=35841,Fa=35842,Ba=35843,hl=36196,za=37492,Ha=37496,ka=37808,Ga=37809,Va=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,$a=37815,Za=37816,Ja=37817,Ka=37818,Qa=37819,ja=37820,eo=37821,er=36492,to=36494,no=36495,Mc=36283,io=36284,so=36285,ro=36286;var ls=2300,cs=2301,tr=2302,ao=2400,oo=2401,lo=2402;var ul=3e3,Bn=3001,Sc=3200,wc=3201,dl=0,bc=1,Bt="",gt="srgb",ln="srgb-linear",ma="display-p3",Os="display-p3-linear",hs="linear",Je="srgb",us="rec709",ds="p3";var Wn=7680;var co=519,Ec=512,Tc=513,Ac=514,fl=515,Rc=516,Cc=517,Pc=518,Ic=519,ho=35044;var uo="300 es",Dr=1035,on=2e3,fs=2001,wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nr=Math.PI/180,Ur=180/Math.PI;function Ui(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[s&255]+xt[s>>8&255]+xt[s>>16&255]+xt[s>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function Lc(s,e){return(s%e+e)%e}function ir(s,e,t){return(1-t)*s+t*e}function fo(s){return(s&s-1)===0&&s!==0}function Nr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function At(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ze=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],u=i[6],M=i[1],x=i[4],E=i[7],C=i[2],T=i[5],A=i[8];return r[0]=a*_+o*M+l*C,r[3]=a*p+o*x+l*T,r[6]=a*u+o*E+l*A,r[1]=c*_+h*M+d*C,r[4]=c*p+h*x+d*T,r[7]=c*u+h*E+d*A,r[2]=f*_+m*M+g*C,r[5]=f*p+m*x+g*T,r[8]=f*u+m*E+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=t*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sr.makeScale(e,t)),this}rotate(e){return this.premultiply(sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sr=new Be;function pl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ps(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dc(){let s=ps("canvas");return s.style.display="block",s}var po={};function Ei(s){s in po||(po[s]=!0,console.warn(s))}var mo=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),go=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bi={[ln]:{transfer:hs,primaries:us,toReference:s=>s,fromReference:s=>s},[gt]:{transfer:Je,primaries:us,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Os]:{transfer:hs,primaries:ds,toReference:s=>s.applyMatrix3(go),fromReference:s=>s.applyMatrix3(mo)},[ma]:{transfer:Je,primaries:ds,toReference:s=>s.convertSRGBToLinear().applyMatrix3(go),fromReference:s=>s.applyMatrix3(mo).convertLinearToSRGB()}},Uc=new Set([ln,Os]),qe={enabled:!0,_workingColorSpace:ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Uc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Bi[e].toReference,i=Bi[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Bi[s].primaries},getTransfer:function(s){return s===Bt?hs:Bi[s].transfer}};function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xn,ms=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=ps("canvas")),Xn.width=e.width,Xn.height=e.height;let n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ps("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nc=0,gs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ar(i[a].image)):r.push(ar(i[a]))}else r=ar(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ar(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ms.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Oc=0,Yt=class s extends wn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Xt,i=Xt,r=Ft,a=Ai,o=qt,l=Mn,c=s.DEFAULT_ANISOTROPY,h=Bt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Ui(),this.name="",this.source=new gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Bn?gt:Bt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Bn:ul}set encoding(e){Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Bn?gt:Bt}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=il;Yt.DEFAULT_ANISOTROPY=1;var ft=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,E=(m+1)/2,C=(u+1)/2,T=(h+f)/4,A=(d+_)/4,H=(g+p)/4;return x>E&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=A/n):E>C?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=T/i,r=H/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=A/r,i=H/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Or=class extends wn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ei("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Bn?gt:Bt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new gs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Or{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_s=class extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fr=class extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-o,u=l*f+c*m+h*g+d*_,M=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,u*M);p=Math.sin(p*T)/C,o=Math.sin(o*T)/C}let E=o*M;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,d=d*p+_*E,p===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-o*m,e[t+2]=c*g+h*m+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_o.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return or.copy(this).projectOnVector(e),this.sub(or)}reflect(e){return this.sub(or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},or=new I,_o=new bn,zn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(r,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(e.matrixWorld),this.union(zi)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),Hi.subVectors(this.max,Mi),qn.subVectors(e.a,Mi),Yn.subVectors(e.b,Mi),$n.subVectors(e.c,Mi),dn.subVectors(Yn,qn),fn.subVectors($n,Yn),Cn.subVectors(qn,$n);let t=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Cn.z,Cn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Cn.z,0,-Cn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Cn.y,Cn.x,0];return!lr(t,qn,Yn,$n,Hi)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,qn,Yn,$n,Hi))?!1:(ki.crossVectors(dn,fn),t=[ki.x,ki.y,ki.z],lr(t,qn,Yn,$n,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},jt=[new I,new I,new I,new I,new I,new I,new I,new I],Gt=new I,zi=new zn,qn=new I,Yn=new I,$n=new I,dn=new I,fn=new I,Cn=new I,Mi=new I,Hi=new I,ki=new I,Pn=new I;function lr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pn.fromArray(s,r);let o=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=e.dot(Pn),c=t.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fc=new zn,Si=new I,cr=new I,Ci=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);let t=Si.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Si,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(cr)),this.expandByPoint(Si.copy(e.center).sub(cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},en=new I,hr=new I,Gi=new I,pn=new I,ur=new I,Vi=new I,dr=new I,xs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hr.copy(e).add(t).multiplyScalar(.5),Gi.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(hr);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Gi),o=pn.dot(this.direction),l=-pn.dot(Gi),c=pn.lengthSq(),h=Math.abs(1-a*a),d,f,m,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(hr).addScaledVector(Gi,f),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);let n=en.dot(this.direction),i=en.dot(en)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,i,r){ur.subVectors(t,e),Vi.subVectors(n,e),dr.crossVectors(ur,Vi);let a=this.direction.dot(dr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,e);let l=o*this.direction.dot(Vi.crossVectors(pn,Vi));if(l<0)return null;let c=o*this.direction.dot(ur.cross(pn));if(c<0||l+c>a)return null;let h=-o*pn.dot(dr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class s{constructor(e,t,n,i,r,a,o,l,c,h,d,f,m,g,_,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,f,m,g,_,p)}set(e,t,n,i,r,a,o,l,c,h,d,f,m,g,_,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),r=1/Zn.setFromMatrixColumn(e,1).length(),a=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,m=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bc,e,zc)}lookAt(e,t,n){let i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),mn.crossVectors(n,Lt),mn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),mn.crossVectors(n,Lt)),mn.normalize(),Wi.crossVectors(Lt,mn),i[0]=mn.x,i[4]=Wi.x,i[8]=Lt.x,i[1]=mn.y,i[5]=Wi.y,i[9]=Lt.y,i[2]=mn.z,i[6]=Wi.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],M=n[3],x=n[7],E=n[11],C=n[15],T=i[0],A=i[4],H=i[8],y=i[12],b=i[1],B=i[5],G=i[9],ee=i[13],P=i[2],D=i[6],V=i[10],q=i[14],X=i[3],W=i[7],J=i[11],j=i[15];return r[0]=a*T+o*b+l*P+c*X,r[4]=a*A+o*B+l*D+c*W,r[8]=a*H+o*G+l*V+c*J,r[12]=a*y+o*ee+l*q+c*j,r[1]=h*T+d*b+f*P+m*X,r[5]=h*A+d*B+f*D+m*W,r[9]=h*H+d*G+f*V+m*J,r[13]=h*y+d*ee+f*q+m*j,r[2]=g*T+_*b+p*P+u*X,r[6]=g*A+_*B+p*D+u*W,r[10]=g*H+_*G+p*V+u*J,r[14]=g*y+_*ee+p*q+u*j,r[3]=M*T+x*b+E*P+C*X,r[7]=M*A+x*B+E*D+C*W,r[11]=M*H+x*G+E*V+C*J,r[15]=M*y+x*ee+E*q+C*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*m-n*l*m)+_*(+t*l*m-t*c*f+r*a*f-i*a*m+i*c*h-r*l*h)+p*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*h-n*c*h)+u*(-i*o*h-t*l*d+t*o*f+i*a*d-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],M=d*p*c-_*f*c+_*l*m-o*p*m-d*l*u+o*f*u,x=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,E=h*_*c-g*d*c+g*o*m-a*_*m-h*o*u+a*d*u,C=g*d*l-h*_*l-g*o*f+a*_*f+h*o*p-a*d*p,T=t*M+n*x+i*E+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=M*A,e[1]=(_*f*r-d*p*r-_*i*m+n*p*m+d*i*u-n*f*u)*A,e[2]=(o*p*r-_*l*r+_*i*c-n*p*c-o*i*u+n*l*u)*A,e[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*m-n*l*m)*A,e[4]=x*A,e[5]=(h*p*r-g*f*r+g*i*m-t*p*m-h*i*u+t*f*u)*A,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*u-t*l*u)*A,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*m+t*l*m)*A,e[8]=E*A,e[9]=(g*d*r-h*_*r-g*n*m+t*_*m+h*n*u-t*d*u)*A,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*u+t*o*u)*A,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*m-t*o*m)*A,e[12]=C*A,e[13]=(h*_*i-g*d*i+g*n*f-t*_*f-h*n*p+t*d*p)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*A,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,g=r*d,_=a*h,p=a*d,u=o*d,M=l*c,x=l*h,E=l*d,C=n.x,T=n.y,A=n.z;return i[0]=(1-(_+u))*C,i[1]=(m+E)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(m-E)*T,i[5]=(1-(f+u))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(g+x)*A,i[9]=(p-M)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Zn.set(i[0],i[1],i[2]).length(),a=Zn.set(i[4],i[5],i[6]).length(),o=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Vt.copy(this);let c=1/r,h=1/a,d=1/o;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=d,Vt.elements[9]*=d,Vt.elements[10]*=d,t.setFromRotationMatrix(Vt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=on){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,g;if(o===on)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===fs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=on){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),f=(t+e)*c,m=(n+i)*h,g,_;if(o===on)g=(a+r)*d,_=-2*d;else if(o===fs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zn=new I,Vt=new pt,Bc=new I(0,0,0),zc=new I(1,1,1),mn=new I,Wi=new I,Lt=new I,xo=new pt,vo=new bn,vs=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vo.setFromEuler(this),this.setFromQuaternion(vo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vs.DEFAULT_ORDER="XYZ";var Pi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hc=0,yo=new I,Jn=new bn,tn=new pt,Xi=new I,wi=new I,kc=new I,Gc=new bn,Mo=new I(1,0,0),So=new I(0,1,0),wo=new I(0,0,1),Vc={type:"added"},Wc={type:"removed"},Pt=class s extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new vs,n=new bn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new Be}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(Mo,e)}rotateY(e){return this.rotateOnAxis(So,e)}rotateZ(e){return this.rotateOnAxis(wo,e)}translateOnAxis(e,t){return yo.copy(e).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mo,e)}translateY(e){return this.translateOnAxis(So,e)}translateZ(e){return this.translateOnAxis(wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xi.copy(e):Xi.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(wi,Xi,this.up):tn.lookAt(Xi,wi,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),Jn.setFromRotationMatrix(tn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wc)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Gc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Pt.DEFAULT_UP=new I(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=new I,nn=new I,fr=new I,sn=new I,Kn=new I,Qn=new I,bo=new I,pr=new I,mr=new I,gr=new I,qi=!1,ai=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wt.subVectors(i,t),nn.subVectors(n,t),fr.subVectors(e,t);let a=Wt.dot(Wt),o=Wt.dot(nn),l=Wt.dot(fr),c=nn.dot(nn),h=nn.dot(fr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,n,i,r,a,o,l){return qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qi=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l)}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),nn.subVectors(e,t),Wt.cross(nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Wt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qi=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Kn.subVectors(i,n),Qn.subVectors(r,n),pr.subVectors(e,n);let l=Kn.dot(pr),c=Qn.dot(pr);if(l<=0&&c<=0)return t.copy(n);mr.subVectors(e,i);let h=Kn.dot(mr),d=Qn.dot(mr);if(h>=0&&d<=h)return t.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Kn,a);gr.subVectors(e,r);let m=Kn.dot(gr),g=Qn.dot(gr);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Qn,o);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return bo.subVectors(r,i),o=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(bo,o);let u=1/(p+_+f);return a=_*u,o=f*u,t.copy(n).addScaledVector(Kn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function _r(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Lc(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_r(a,r,e+1/3),this.g=_r(a,r,e),this.b=_r(a,r,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=ml[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return qe.fromWorkingColorSpace(vt.copy(this),e),Math.round(Rt(vt.r*255,0,255))*65536+Math.round(Rt(vt.g*255,0,255))*256+Math.round(Rt(vt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(vt.copy(this),t);let n=vt.r,i=vt.g,r=vt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=gt){qe.fromWorkingColorSpace(vt.copy(this),e);let t=vt.r,n=vt.g,i=vt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(Yi);let n=ir(gn.h,Yi.h,t),i=ir(gn.s,Yi.s,t),r=ir(gn.l,Yi.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vt=new ke;ke.NAMES=ml;var Xc=0,Hn=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ci,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ar,this.blendDst=Rr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ar&&(n.blendSrc=this.blendSrc),this.blendDst!==Rr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==co&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},at=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var rt=new I,$i=new ze,zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ho,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$i.fromBufferAttribute(this,t),$i.applyMatrix3(e),this.setXY(t,$i.x,$i.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ho&&(e.usage=this.usage),e}};var ys=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ms=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var qc=0,Ot=new pt,xr=new Pt,jn=new I,Dt=new zn,bi=new zn,ut=new I,Ht=class s extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pl(e)?Ms:ys)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Dt.min,bi.min),Dt.expandByPoint(ut),ut.addVectors(Dt.max,bi.max),Dt.expandByPoint(ut)):(Dt.expandByPoint(bi.min),Dt.expandByPoint(bi.max))}Dt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ut.fromBufferAttribute(o,c),l&&(jn.fromBufferAttribute(e,c),ut.add(jn)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new I,h[b]=new I;let d=new I,f=new I,m=new I,g=new ze,_=new ze,p=new ze,u=new I,M=new I;function x(b,B,G){d.fromArray(i,b*3),f.fromArray(i,B*3),m.fromArray(i,G*3),g.fromArray(a,b*2),_.fromArray(a,B*2),p.fromArray(a,G*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);let ee=1/(_.x*p.y-p.x*_.y);isFinite(ee)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ee),M.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(ee),c[b].add(u),c[B].add(u),c[G].add(u),h[b].add(M),h[B].add(M),h[G].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let b=0,B=E.length;b<B;++b){let G=E[b],ee=G.start,P=G.count;for(let D=ee,V=ee+P;D<V;D+=3)x(n[D+0],n[D+1],n[D+2])}let C=new I,T=new I,A=new I,H=new I;function y(b){A.fromArray(r,b*3),H.copy(A);let B=c[b];C.copy(B),C.sub(A.multiplyScalar(A.dot(B))).normalize(),T.crossVectors(H,B);let ee=T.dot(h[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=ee}for(let b=0,B=E.length;b<B;++b){let G=E[b],ee=G.start,P=G.count;for(let D=ee,V=ee+P;D<V;D+=3)y(n[D+0]),y(n[D+1]),y(n[D+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new zt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eo=new pt,In=new xs,Zi=new Ci,To=new I,ei=new I,ti=new I,ni=new I,vr=new I,Ji=new I,Ki=new ze,Qi=new ze,ji=new ze,Ao=new I,Ro=new I,Co=new I,es=new I,ts=new I,pe=class extends Pt{constructor(e=new Ht,t=new at){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ji.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(vr.fromBufferAttribute(d,e),a?Ji.addScaledVector(vr,h):Ji.addScaledVector(vr.sub(t),h))}t.add(Ji)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),In.copy(e.ray).recast(e.near),!(Zi.containsPoint(In.origin)===!1&&(In.intersectSphere(Zi,To)===null||In.origin.distanceToSquared(To)>(e.far-e.near)**2))&&(Eo.copy(r).invert(),In.copy(e.ray).applyMatrix4(Eo),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=a[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,C=x;E<C;E+=3){let T=o.getX(E),A=o.getX(E+1),H=o.getX(E+2);i=ns(this,u,e,n,c,h,d,T,A,H),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let M=o.getX(p),x=o.getX(p+1),E=o.getX(p+2);i=ns(this,a,e,n,c,h,d,M,x,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=a[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,C=x;E<C;E+=3){let T=E,A=E+1,H=E+2;i=ns(this,u,e,n,c,h,d,T,A,H),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let M=p,x=p+1,E=p+2;i=ns(this,a,e,n,c,h,d,M,x,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Yc(s,e,t,n,i,r,a,o){let l;if(e.side===Ct?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Sn,o),l===null)return null;ts.copy(o),ts.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:s}}function ns(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ei),s.getVertexPosition(l,ti),s.getVertexPosition(c,ni);let h=Yc(s,e,t,n,ei,ti,ni,es);if(h){i&&(Ki.fromBufferAttribute(i,o),Qi.fromBufferAttribute(i,l),ji.fromBufferAttribute(i,c),h.uv=ai.getInterpolation(es,ei,ti,ni,Ki,Qi,ji,new ze)),r&&(Ki.fromBufferAttribute(r,o),Qi.fromBufferAttribute(r,l),ji.fromBufferAttribute(r,c),h.uv1=ai.getInterpolation(es,ei,ti,ni,Ki,Qi,ji,new ze),h.uv2=h.uv1),a&&(Ao.fromBufferAttribute(a,o),Ro.fromBufferAttribute(a,l),Co.fromBufferAttribute(a,c),h.normal=ai.getInterpolation(es,ei,ti,ni,Ao,Ro,Co,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};ai.getNormal(ei,ti,ni,d.normal),h.face=d}return h}var mt=class s extends Ht{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(d,2));function g(_,p,u,M,x,E,C,T,A,H,y){let b=E/A,B=C/H,G=E/2,ee=C/2,P=T/2,D=A+1,V=H+1,q=0,X=0,W=new I;for(let J=0;J<V;J++){let j=J*B-ee;for(let le=0;le<D;le++){let k=le*b-G;W[_]=k*M,W[p]=j*x,W[u]=P,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[u]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(le/A),d.push(1-J/H),q+=1}}for(let J=0;J<H;J++)for(let j=0;j<A;j++){let le=f+j+D*J,k=f+j+D*(J+1),Y=f+(j+1)+D*(J+1),ae=f+(j+1)+D*J;l.push(le,k,ae),l.push(k,Y,ae),X+=6}o.addGroup(m,X,y),m+=X,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(s){let e={};for(let t=0;t<s.length;t++){let n=mi(s[t]);for(let i in n)e[i]=n[i]}return e}function $c(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gl(s){return s.getRenderTarget()===null?s.outputColorSpace:qe.workingColorSpace}var Zc={clone:mi,merge:wt},Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=Kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=$c(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ss=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Et=class extends Ss{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ii=-90,si=1,Br=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Et(ii,si,e,t);i.layers=this.layers,this.add(i);let r=new Et(ii,si,e,t);r.layers=this.layers,this.add(r);let a=new Et(ii,si,e,t);a.layers=this.layers,this.add(a);let o=new Et(ii,si,e,t);o.layers=this.layers,this.add(o);let l=new Et(ii,si,e,t);l.layers=this.layers,this.add(l);let c=new Et(ii,si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ws=class extends Yt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:di,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zr=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ei("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Bn?gt:Bt),this.texture=new ws(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new mt(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:vn});r.uniforms.tEquirect.value=t;let a=new pe(i,r),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Ft),new Br(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},yr=new I,Qc=new I,jc=new Be,an=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=yr.subVectors(n,t).cross(Qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(yr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jc.getNormalMatrix(e),i=this.coplanarPoint(yr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ln=new Ci,is=new I,Ii=class{constructor(e=new an,t=new an,n=new an,i=new an,r=new an,a=new an){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],u=i[12],M=i[13],x=i[14],E=i[15];if(n[0].setComponents(l-r,f-c,p-m,E-u).normalize(),n[1].setComponents(l+r,f+c,p+m,E+u).normalize(),n[2].setComponents(l+a,f+h,p+g,E+M).normalize(),n[3].setComponents(l-a,f-h,p-g,E-M).normalize(),n[4].setComponents(l-o,f-d,p-_,E-x).normalize(),t===on)n[5].setComponents(l+o,f+d,p+_,E+x).normalize();else if(t===fs)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(is.x=i.normal.x>0?e.max.x:e.min.x,is.y=i.normal.y>0?e.max.y:e.min.y,is.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _l(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function eh(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let d=c.array,f=c.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,c),m.count===-1&&g.length===0&&s.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let u=g[_];t?s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var un=class s extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){let M=u*f-a;for(let x=0;x<c;x++){let E=x*d-r;g.push(E,-M,0),_.push(0,0,1),p.push(x/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<o;M++){let x=M+c*u,E=M+c*(u+1),C=M+1+c*(u+1),T=M+1+c*u;m.push(x,E,T),m.push(E,C,T)}this.setIndex(m),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nh=`#ifdef USE_ALPHAHASH
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
#endif`,ih=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oh=`#ifdef USE_AOMAP
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
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ch=`#ifdef USE_BATCHING
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
#endif`,hh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ph=`#ifdef USE_IRIDESCENCE
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
#endif`,mh=`#ifdef USE_BUMPMAP
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
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
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
} // validated`,Eh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Th=`vec3 transformedNormal = objectNormal;
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
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lh=`
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
}`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
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
}`,Vh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
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
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jh=`PhysicalMaterial material;
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
#endif`,eu=`struct PhysicalMaterial {
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
}`,tu=`
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
#endif`,nu=`#if defined( RE_IndirectDiffuse )
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
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,su=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uu=`#if defined( USE_POINTS_UV )
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
#endif`,du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mu=`#ifdef USE_MORPHNORMALS
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
#endif`,gu=`#ifdef USE_MORPHTARGETS
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
#endif`,_u=`#ifdef USE_MORPHTARGETS
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
#endif`,xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wu=`#ifdef USE_NORMALMAP
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
#endif`,bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Du=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zu=`float getShadowMask() {
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
}`,Hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ku=`#ifdef USE_SKINNING
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
#endif`,Gu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vu=`#ifdef USE_SKINNING
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
#endif`,Wu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$u=`#ifdef USE_TRANSMISSION
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
#endif`,Zu=`#ifdef USE_TRANSMISSION
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
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ju=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
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
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`#include <common>
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
}`,od=`#if DEPTH_PACKING == 3200
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
}`,ld=`#define DISTANCE
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
}`,cd=`#define DISTANCE
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
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dd=`uniform float scale;
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
}`,fd=`uniform vec3 diffuse;
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
}`,pd=`#include <common>
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
}`,md=`uniform vec3 diffuse;
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
}`,gd=`#define LAMBERT
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
}`,_d=`#define LAMBERT
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
}`,xd=`#define MATCAP
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
}`,vd=`#define MATCAP
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
}`,yd=`#define NORMAL
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
}`,Md=`#define NORMAL
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
}`,Sd=`#define PHONG
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
}`,wd=`#define PHONG
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
}`,bd=`#define STANDARD
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
}`,Ed=`#define STANDARD
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
}`,Td=`#define TOON
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
}`,Ad=`#define TOON
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
}`,Rd=`uniform float size;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Id=`uniform vec3 color;
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
}`,Ld=`uniform float rotation;
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
}`,Dd=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:th,alphahash_pars_fragment:nh,alphamap_fragment:ih,alphamap_pars_fragment:sh,alphatest_fragment:rh,alphatest_pars_fragment:ah,aomap_fragment:oh,aomap_pars_fragment:lh,batching_pars_vertex:ch,batching_vertex:hh,begin_vertex:uh,beginnormal_vertex:dh,bsdfs:fh,iridescence_fragment:ph,bumpmap_pars_fragment:mh,clipping_planes_fragment:gh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:xh,clipping_planes_vertex:vh,color_fragment:yh,color_pars_fragment:Mh,color_pars_vertex:Sh,color_vertex:wh,common:bh,cube_uv_reflection_fragment:Eh,defaultnormal_vertex:Th,displacementmap_pars_vertex:Ah,displacementmap_vertex:Rh,emissivemap_fragment:Ch,emissivemap_pars_fragment:Ph,colorspace_fragment:Ih,colorspace_pars_fragment:Lh,envmap_fragment:Dh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:Nh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:$h,envmap_vertex:Fh,fog_vertex:Bh,fog_pars_vertex:zh,fog_fragment:Hh,fog_pars_fragment:kh,gradientmap_pars_fragment:Gh,lightmap_fragment:Vh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:qh,lights_pars_begin:Yh,lights_toon_fragment:Zh,lights_toon_pars_fragment:Jh,lights_phong_fragment:Kh,lights_phong_pars_fragment:Qh,lights_physical_fragment:jh,lights_physical_pars_fragment:eu,lights_fragment_begin:tu,lights_fragment_maps:nu,lights_fragment_end:iu,logdepthbuf_fragment:su,logdepthbuf_pars_fragment:ru,logdepthbuf_pars_vertex:au,logdepthbuf_vertex:ou,map_fragment:lu,map_pars_fragment:cu,map_particle_fragment:hu,map_particle_pars_fragment:uu,metalnessmap_fragment:du,metalnessmap_pars_fragment:fu,morphcolor_vertex:pu,morphnormal_vertex:mu,morphtarget_pars_vertex:gu,morphtarget_vertex:_u,normal_fragment_begin:xu,normal_fragment_maps:vu,normal_pars_fragment:yu,normal_pars_vertex:Mu,normal_vertex:Su,normalmap_pars_fragment:wu,clearcoat_normal_fragment_begin:bu,clearcoat_normal_fragment_maps:Eu,clearcoat_pars_fragment:Tu,iridescence_pars_fragment:Au,opaque_fragment:Ru,packing:Cu,premultiplied_alpha_fragment:Pu,project_vertex:Iu,dithering_fragment:Lu,dithering_pars_fragment:Du,roughnessmap_fragment:Uu,roughnessmap_pars_fragment:Nu,shadowmap_pars_fragment:Ou,shadowmap_pars_vertex:Fu,shadowmap_vertex:Bu,shadowmask_pars_fragment:zu,skinbase_vertex:Hu,skinning_pars_vertex:ku,skinning_vertex:Gu,skinnormal_vertex:Vu,specularmap_fragment:Wu,specularmap_pars_fragment:Xu,tonemapping_fragment:qu,tonemapping_pars_fragment:Yu,transmission_fragment:$u,transmission_pars_fragment:Zu,uv_pars_fragment:Ju,uv_pars_vertex:Ku,uv_vertex:Qu,worldpos_vertex:ju,background_vert:ed,background_frag:td,backgroundCube_vert:nd,backgroundCube_frag:id,cube_vert:sd,cube_frag:rd,depth_vert:ad,depth_frag:od,distanceRGBA_vert:ld,distanceRGBA_frag:cd,equirect_vert:hd,equirect_frag:ud,linedashed_vert:dd,linedashed_frag:fd,meshbasic_vert:pd,meshbasic_frag:md,meshlambert_vert:gd,meshlambert_frag:_d,meshmatcap_vert:xd,meshmatcap_frag:vd,meshnormal_vert:yd,meshnormal_frag:Md,meshphong_vert:Sd,meshphong_frag:wd,meshphysical_vert:bd,meshphysical_frag:Ed,meshtoon_vert:Td,meshtoon_frag:Ad,points_vert:Rd,points_frag:Cd,shadow_vert:Pd,shadow_frag:Id,sprite_vert:Ld,sprite_frag:Dd},ne={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Kt={basic:{uniforms:wt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:wt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ke(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:wt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:wt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:wt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ke(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:wt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:wt([ne.points,ne.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:wt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:wt([ne.common,ne.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:wt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:wt([ne.sprite,ne.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:wt([ne.common,ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:wt([ne.lights,ne.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Kt.physical={uniforms:wt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var ss={r:0,b:0,g:0};function Ud(s,e,t,n,i,r,a){let o=new ke(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let M=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),M=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ns)?(h===void 0&&(h=new pe(new mt(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:mi(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=qe.getTransfer(x.colorSpace)!==Je,(d!==x||f!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pe(new un(2,2),new hn({name:"BackgroundMaterial",uniforms:mi(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=qe.getTransfer(x.colorSpace)!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(ss,gl(s)),n.buffers.color.setClear(ss.r,ss.g,ss.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Nd(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function d(P,D,V,q,X){let W=!1;if(a){let J=_(q,V,D);c!==J&&(c=J,m(c.object)),W=u(P,q,V,X),W&&M(P,q,V,X)}else{let J=D.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=q.id,c.program=V.id,c.wireframe=J,W=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,H(P,D,V,q),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,D,V){let q=V.wireframe===!0,X=o[P.id];X===void 0&&(X={},o[P.id]=X);let W=X[D.id];W===void 0&&(W={},X[D.id]=W);let J=W[q];return J===void 0&&(J=p(f()),W[q]=J),J}function p(P){let D=[],V=[],q=[];for(let X=0;X<i;X++)D[X]=0,V[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:q,object:P,attributes:{},index:null}}function u(P,D,V,q){let X=c.attributes,W=D.attributes,J=0,j=V.getAttributes();for(let le in j)if(j[le].location>=0){let Y=X[le],ae=W[le];if(ae===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),Y===void 0||Y.attribute!==ae||ae&&Y.data!==ae.data)return!0;J++}return c.attributesNum!==J||c.index!==q}function M(P,D,V,q){let X={},W=D.attributes,J=0,j=V.getAttributes();for(let le in j)if(j[le].location>=0){let Y=W[le];Y===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));let ae={};ae.attribute=Y,Y&&Y.data&&(ae.data=Y.data),X[le]=ae,J++}c.attributes=X,c.attributesNum=J,c.index=q}function x(){let P=c.newAttributes;for(let D=0,V=P.length;D<V;D++)P[D]=0}function E(P){C(P,0)}function C(P,D){let V=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;V[P]=1,q[P]===0&&(s.enableVertexAttribArray(P),q[P]=1),X[P]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),X[P]=D)}function T(){let P=c.newAttributes,D=c.enabledAttributes;for(let V=0,q=D.length;V<q;V++)D[V]!==P[V]&&(s.disableVertexAttribArray(V),D[V]=0)}function A(P,D,V,q,X,W,J){J===!0?s.vertexAttribIPointer(P,D,V,X,W):s.vertexAttribPointer(P,D,V,q,X,W)}function H(P,D,V,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let X=q.attributes,W=V.getAttributes(),J=D.defaultAttributeValues;for(let j in W){let le=W[j];if(le.location>=0){let k=X[j];if(k===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let Y=k.normalized,ae=k.itemSize,ge=t.get(k);if(ge===void 0)continue;let me=ge.buffer,Re=ge.type,Pe=ge.bytesPerElement,Se=n.isWebGL2===!0&&(Re===s.INT||Re===s.UNSIGNED_INT||k.gpuType===sl);if(k.isInterleavedBufferAttribute){let Ge=k.data,U=Ge.stride,yt=k.offset;if(Ge.isInstancedInterleavedBuffer){for(let xe=0;xe<le.locationSize;xe++)C(le.location+xe,Ge.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let xe=0;xe<le.locationSize;xe++)E(le.location+xe);s.bindBuffer(s.ARRAY_BUFFER,me);for(let xe=0;xe<le.locationSize;xe++)A(le.location+xe,ae/le.locationSize,Re,Y,U*Pe,(yt+ae/le.locationSize*xe)*Pe,Se)}else{if(k.isInstancedBufferAttribute){for(let Ge=0;Ge<le.locationSize;Ge++)C(le.location+Ge,k.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Ge=0;Ge<le.locationSize;Ge++)E(le.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,me);for(let Ge=0;Ge<le.locationSize;Ge++)A(le.location+Ge,ae/le.locationSize,Re,Y,ae*Pe,ae/le.locationSize*Ge*Pe,Se)}}else if(J!==void 0){let Y=J[j];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(le.location,Y);break;case 3:s.vertexAttrib3fv(le.location,Y);break;case 4:s.vertexAttrib4fv(le.location,Y);break;default:s.vertexAttrib1fv(le.location,Y)}}}}T()}function y(){G();for(let P in o){let D=o[P];for(let V in D){let q=D[V];for(let X in q)g(q[X].object),delete q[X];delete D[V]}delete o[P]}}function b(P){if(o[P.id]===void 0)return;let D=o[P.id];for(let V in D){let q=D[V];for(let X in q)g(q[X].object),delete q[X];delete D[V]}delete o[P.id]}function B(P){for(let D in o){let V=o[D];if(V[P.id]===void 0)continue;let q=V[P.id];for(let X in q)g(q[X].object),delete q[X];delete V[P.id]}}function G(){ee(),h=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:ee,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:E,disableUnusedAttributes:T}}function Od(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Fd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=a||e.has("OES_texture_float"),C=x&&E,T=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:T}}function Bd(s){let e=this,t=null,n=0,i=!1,r=!1,a=new an,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,x=M*4,E=u.clippingState||null;l.value=E,E=h(g,f,x,m);for(let C=0;C!==x;++C)E[C]=t[C];u.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let u=m+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,E=m;x!==_;++x,E+=4)a.copy(d[x]).applyMatrix4(M,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function zd(s){let e=new WeakMap;function t(a,o){return o===Cr?a.mapping=di:o===Pr&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Cr||o===Pr)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new zr(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var bs=class extends Ss{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oi=4,Po=[.125,.215,.35,.446,.526,.582],Nn=20,Mr=new bs,Io=new ke,Sr=null,wr=0,br=0,Dn=(1+Math.sqrt(5))/2,ri=1/Dn,Lo=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Dn,ri),new I(0,Dn,-ri),new I(ri,0,Dn),new I(-ri,0,Dn),new I(Dn,ri,0),new I(-Dn,ri,0)],Es=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sr=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=No(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sr,wr,br),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sr=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Ri,format:qt,colorSpace:ln,depthBuffer:!1},i=Do(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Do(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hd(r)),this._blurMaterial=kd(r,e,t)}return i}_compileMaterial(e){let t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,n,i){let o=new Et(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Io),h.toneMapping=yn,h.autoClear=!1;let m=new at({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new pe(new mt,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Io),_=!0);for(let u=0;u<6;u++){let M=u%3;M===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):M===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let x=this._cubeSize;rs(i,M*x,u>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===di||e.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=No()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Mr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Lo[(i-1)%Lo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new pe(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Nn;p>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nn}`);let u=[],M=0;for(let A=0;A<Nn;++A){let H=A/_,y=Math.exp(-H*H/2);u.push(y),A===0?M+=y:A<p&&(M+=2*y)}for(let A=0;A<u.length;A++)u[A]=u[A]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let E=this._sizeLods[i],C=3*E*(i>x-oi?i-x+oi:0),T=4*(this._cubeSize-E);rs(t,C,T,3*E,2*E),l.setRenderTarget(t),l.render(d,Mr)}};function Hd(s){let e=[],t=[],n=[],i=s,r=s-oi+1+Po.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-oi?l=Po[a-s+oi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,M=new Float32Array(_*g*m),x=new Float32Array(p*g*m),E=new Float32Array(u*g*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,H=T>2?0:-1,y=[A,H,0,A+2/3,H,0,A+2/3,H+1,0,A,H,0,A+2/3,H+1,0,A,H+1,0];M.set(y,_*g*T),x.set(f,p*g*T);let b=[T,T,T,T,T,T];E.set(b,u*g*T)}let C=new Ht;C.setAttribute("position",new zt(M,_)),C.setAttribute("uv",new zt(x,p)),C.setAttribute("faceIndex",new zt(E,u)),e.push(C),i>oi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Do(s,e,t){let n=new cn(s,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function kd(s,e,t){let n=new Float32Array(Nn),i=new I(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ga(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Uo(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function No(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}function Gd(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Cr||l===Pr,h=l===di||l===fi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Es(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Es(s));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Vd(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wd(s,e,t,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let M=m.array;_=m.version;for(let x=0,E=M.length;x<E;x+=3){let C=M[x+0],T=M[x+1],A=M[x+2];f.push(C,T,T,A,A,C)}}else if(g!==void 0){let M=g.array;_=g.version;for(let x=0,E=M.length/3-1;x<E;x+=3){let C=x+0,T=x+1,A=x+2;f.push(C,T,T,A,A,C)}}else return;let p=new(pl(f)?Ms:ys)(f,1);p.version=_;let u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Xd(s,e,t,n){let i=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,o,m*l),t.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(i)p=s,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,o,m*l,_),t.update(g,r,_)}function f(m,g,_){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let u=0;for(let M=0;M<_;M++)u+=g[M];t.update(u,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function qd(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yd(s,e){return s[0]-e[0]}function $d(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Zd(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let M=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],H=0;M===!0&&(H=1),x===!0&&(H=2),E===!0&&(H=3);let y=h.attributes.position.count*H,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let B=new Float32Array(y*b*4*g),G=new _s(B,y,b,g);G.type=xn,G.needsUpdate=!0;let ee=H*4;for(let D=0;D<g;D++){let V=C[D],q=T[D],X=A[D],W=y*b*4*D;for(let J=0;J<V.count;J++){let j=J*ee;M===!0&&(a.fromBufferAttribute(V,J),B[W+j+0]=a.x,B[W+j+1]=a.y,B[W+j+2]=a.z,B[W+j+3]=0),x===!0&&(a.fromBufferAttribute(q,J),B[W+j+4]=a.x,B[W+j+5]=a.y,B[W+j+6]=a.z,B[W+j+7]=0),E===!0&&(a.fromBufferAttribute(X,J),B[W+j+8]=a.x,B[W+j+9]=a.y,B[W+j+10]=a.z,B[W+j+11]=X.itemSize===4?a.w:1)}}_={count:g,texture:G,size:new ze(y,b)},r.set(h,_),h.addEventListener("dispose",P)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",u),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<m;x++){let E=g[x];E[0]=x,E[1]=f[x]}g.sort($d);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Yd);let _=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let x=0;x<8;x++){let E=o[x],C=E[0],T=E[1];C!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[C]&&h.setAttribute("morphTarget"+x,_[C]),p&&h.getAttribute("morphNormal"+x)!==p[C]&&h.setAttribute("morphNormal"+x,p[C]),i[x]=T,u+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let M=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Jd(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ts=class extends Yt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Fn,h!==Fn&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fn&&(n=_n),n===void 0&&h===pi&&(n=On),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xl=new Yt,vl=new Ts(1,1);vl.compareFunction=fl;var yl=new _s,Ml=new Fr,Sl=new ws,Oo=[],Fo=[],Bo=new Float32Array(16),zo=new Float32Array(9),Ho=new Float32Array(4);function _i(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Oo[i];if(r===void 0&&(r=new Float32Array(i),Oo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fs(s,e){let t=Fo[e];t===void 0&&(t=new Int32Array(e),Fo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Kd(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qd(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2fv(this.addr,e),lt(t,e)}}function jd(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;s.uniform3fv(this.addr,e),lt(t,e)}}function ef(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4fv(this.addr,e),lt(t,e)}}function tf(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Ho.set(n),s.uniformMatrix2fv(this.addr,!1,Ho),lt(t,n)}}function nf(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;zo.set(n),s.uniformMatrix3fv(this.addr,!1,zo),lt(t,n)}}function sf(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Bo.set(n),s.uniformMatrix4fv(this.addr,!1,Bo),lt(t,n)}}function rf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function af(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2iv(this.addr,e),lt(t,e)}}function of(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;s.uniform3iv(this.addr,e),lt(t,e)}}function lf(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4iv(this.addr,e),lt(t,e)}}function cf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hf(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2uiv(this.addr,e),lt(t,e)}}function uf(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;s.uniform3uiv(this.addr,e),lt(t,e)}}function df(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4uiv(this.addr,e),lt(t,e)}}function ff(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?vl:xl;t.setTexture2D(e||r,i)}function pf(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ml,i)}function mf(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sl,i)}function gf(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yl,i)}function _f(s){switch(s){case 5126:return Kd;case 35664:return Qd;case 35665:return jd;case 35666:return ef;case 35674:return tf;case 35675:return nf;case 35676:return sf;case 5124:case 35670:return rf;case 35667:case 35671:return af;case 35668:case 35672:return of;case 35669:case 35673:return lf;case 5125:return cf;case 36294:return hf;case 36295:return uf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return pf;case 35680:case 36300:case 36308:case 36293:return mf;case 36289:case 36303:case 36311:case 36292:return gf}}function xf(s,e){s.uniform1fv(this.addr,e)}function vf(s,e){let t=_i(e,this.size,2);s.uniform2fv(this.addr,t)}function yf(s,e){let t=_i(e,this.size,3);s.uniform3fv(this.addr,t)}function Mf(s,e){let t=_i(e,this.size,4);s.uniform4fv(this.addr,t)}function Sf(s,e){let t=_i(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function wf(s,e){let t=_i(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bf(s,e){let t=_i(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ef(s,e){s.uniform1iv(this.addr,e)}function Tf(s,e){s.uniform2iv(this.addr,e)}function Af(s,e){s.uniform3iv(this.addr,e)}function Rf(s,e){s.uniform4iv(this.addr,e)}function Cf(s,e){s.uniform1uiv(this.addr,e)}function Pf(s,e){s.uniform2uiv(this.addr,e)}function If(s,e){s.uniform3uiv(this.addr,e)}function Lf(s,e){s.uniform4uiv(this.addr,e)}function Df(s,e,t){let n=this.cache,i=e.length,r=Fs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||xl,r[a])}function Uf(s,e,t){let n=this.cache,i=e.length,r=Fs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ml,r[a])}function Nf(s,e,t){let n=this.cache,i=e.length,r=Fs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Sl,r[a])}function Of(s,e,t){let n=this.cache,i=e.length,r=Fs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||yl,r[a])}function Ff(s){switch(s){case 5126:return xf;case 35664:return vf;case 35665:return yf;case 35666:return Mf;case 35674:return Sf;case 35675:return wf;case 35676:return bf;case 5124:case 35670:return Ef;case 35667:case 35671:return Tf;case 35668:case 35672:return Af;case 35669:case 35673:return Rf;case 5125:return Cf;case 36294:return Pf;case 36295:return If;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Of}}var Hr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_f(t.type)}},kr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ff(t.type)}},Gr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Er=/(\w+)(\])?(\[|\.)?/g;function ko(s,e){s.seq.push(e),s.map[e.id]=e}function Bf(s,e,t){let n=s.name,i=n.length;for(Er.lastIndex=0;;){let r=Er.exec(n),a=Er.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ko(t,c===void 0?new Hr(o,s,e):new kr(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Gr(o),ko(t,d)),t=d}}}var ui=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Bf(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Go(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var zf=37297,Hf=0;function kf(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Gf(s){let e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(s),n;switch(e===t?n="":e===ds&&t===us?n="LinearDisplayP3ToLinearSRGB":e===us&&t===ds&&(n="LinearSRGBToLinearDisplayP3"),s){case ln:case Os:return[n,"LinearTransferOETF"];case gt:case ma:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Vo(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+kf(s.getShaderSource(e),a)}else return i}function Vf(s,e){let t=Gf(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Wf(s,e){let t;switch(e){case lc:t="Linear";break;case cc:t="Reinhard";break;case hc:t="OptimizedCineon";break;case fa:t="ACESFilmic";break;case dc:t="AgX";break;case uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(li).join(`
`)}function qf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(li).join(`
`)}function Yf(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $f(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function li(s){return s!==""}function Wo(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(s){return s.replace(Zf,Kf)}var Jf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kf(s,e){let t=Le[e];if(t===void 0){let n=Jf.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vr(t)}var Qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(s){return s.replace(Qf,jf)}function jf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ep(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===da?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function tp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case di:case fi:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function np(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function ip(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case nl:e="ENVMAP_BLENDING_MULTIPLY";break;case ac:e="ENVMAP_BLENDING_MIX";break;case oc:e="ENVMAP_BLENDING_ADD";break}return e}function sp(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rp(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ep(t),c=tp(t),h=np(t),d=ip(t),f=sp(t),m=t.isWebGL2?"":Xf(t),g=qf(t),_=Yf(r),p=i.createProgram(),u,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(li).join(`
`),u.length>0&&(u+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(li).join(`
`),M.length>0&&(M+=`
`)):(u=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),M=[m,Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Le.tonemapping_pars_fragment:"",t.toneMapping!==yn?Wf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Vf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(li).join(`
`)),a=Vr(a),a=Wo(a,t),a=Xo(a,t),o=Vr(o),o=Wo(o,t),o=Xo(o,t),a=qo(a),o=qo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let E=x+u+a,C=x+M+o,T=Go(i,i.VERTEX_SHADER,E),A=Go(i,i.FRAGMENT_SHADER,C);i.attachShader(p,T),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function H(G){if(s.debug.checkShaderErrors){let ee=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(T).trim(),D=i.getShaderInfoLog(A).trim(),V=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,T,A);else{let X=Vo(i,T,"vertex"),W=Vo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+X+`
`+W)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(P===""||D==="")&&(q=!1);q&&(G.diagnostics={runnable:V,programLog:ee,vertexShader:{log:P,prefix:u},fragmentShader:{log:D,prefix:M}})}i.deleteShader(T),i.deleteShader(A),y=new ui(i,p),b=$f(i,p)}let y;this.getUniforms=function(){return y===void 0&&H(this),y};let b;this.getAttributes=function(){return b===void 0&&H(this),b};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(p,zf)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}var ap=0,Wr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xr(e),t.set(e,n)),n}},Xr=class{constructor(e){this.id=ap++,this.code=e,this.usedTimes=0}};function op(s,e,t,n,i,r,a){let o=new Pi,l=new Wr,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,b,B,G,ee){let P=G.fog,D=ee.geometry,V=y.isMeshStandardMaterial?G.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),X=q&&q.mapping===Ns?q.image.height:null,W=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=J!==void 0?J.length:0,le=0;D.morphAttributes.position!==void 0&&(le=1),D.morphAttributes.normal!==void 0&&(le=2),D.morphAttributes.color!==void 0&&(le=3);let k,Y,ae,ge;if(W){let Mt=Kt[W];k=Mt.vertexShader,Y=Mt.fragmentShader}else k=y.vertexShader,Y=y.fragmentShader,l.update(y),ae=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);let me=s.getRenderTarget(),Re=ee.isInstancedMesh===!0,Pe=ee.isBatchedMesh===!0,Se=!!y.map,Ge=!!y.matcap,U=!!q,yt=!!y.aoMap,xe=!!y.lightMap,Te=!!y.bumpMap,ue=!!y.normalMap,je=!!y.displacementMap,De=!!y.emissiveMap,w=!!y.metalnessMap,v=!!y.roughnessMap,O=y.anisotropy>0,K=y.clearcoat>0,Z=y.iridescence>0,Q=y.sheen>0,de=y.transmission>0,re=O&&!!y.anisotropyMap,ce=K&&!!y.clearcoatMap,Me=K&&!!y.clearcoatNormalMap,Ue=K&&!!y.clearcoatRoughnessMap,$=Z&&!!y.iridescenceMap,Xe=Z&&!!y.iridescenceThicknessMap,He=Q&&!!y.sheenColorMap,Ee=Q&&!!y.sheenRoughnessMap,_e=!!y.specularMap,he=!!y.specularColorMap,Ie=!!y.specularIntensityMap,Ve=de&&!!y.transmissionMap,tt=de&&!!y.thicknessMap,Oe=!!y.gradientMap,te=!!y.alphaMap,R=y.alphaTest>0,ie=!!y.alphaHash,se=!!y.extensions,we=!!D.attributes.uv1,ve=!!D.attributes.uv2,Ye=!!D.attributes.uv3,$e=yn;return y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&($e=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:Y,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Pe,instancing:Re,instancingColor:Re&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ln,map:Se,matcap:Ge,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:X,aoMap:yt,lightMap:xe,bumpMap:Te,normalMap:ue,displacementMap:f&&je,emissiveMap:De,normalMapObjectSpace:ue&&y.normalMapType===bc,normalMapTangentSpace:ue&&y.normalMapType===dl,metalnessMap:w,roughnessMap:v,anisotropy:O,anisotropyMap:re,clearcoat:K,clearcoatMap:ce,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ue,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:Xe,sheen:Q,sheenColorMap:He,sheenRoughnessMap:Ee,specularMap:_e,specularColorMap:he,specularIntensityMap:Ie,transmission:de,transmissionMap:Ve,thicknessMap:tt,gradientMap:Oe,opaque:y.transparent===!1&&y.blending===ci,alphaMap:te,alphaTest:R,alphaHash:ie,combine:y.combine,mapUv:Se&&_(y.map.channel),aoMapUv:yt&&_(y.aoMap.channel),lightMapUv:xe&&_(y.lightMap.channel),bumpMapUv:Te&&_(y.bumpMap.channel),normalMapUv:ue&&_(y.normalMap.channel),displacementMapUv:je&&_(y.displacementMap.channel),emissiveMapUv:De&&_(y.emissiveMap.channel),metalnessMapUv:w&&_(y.metalnessMap.channel),roughnessMapUv:v&&_(y.roughnessMap.channel),anisotropyMapUv:re&&_(y.anisotropyMap.channel),clearcoatMapUv:ce&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(y.sheenRoughnessMap.channel),specularMapUv:_e&&_(y.specularMap.channel),specularColorMapUv:he&&_(y.specularColorMap.channel),specularIntensityMapUv:Ie&&_(y.specularIntensityMap.channel),transmissionMapUv:Ve&&_(y.transmissionMap.channel),thicknessMapUv:tt&&_(y.thicknessMap.channel),alphaMapUv:te&&_(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ue||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:ve,vertexUv3s:Ye,pointsUvs:ee.isPoints===!0&&!!D.attributes.uv&&(Se||te),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:$e,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dt,flipSided:y.side===Ct,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:se&&y.extensions.derivatives===!0,extensionFragDepth:se&&y.extensions.fragDepth===!0,extensionDrawBuffers:se&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let B in y.defines)b.push(B),b.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(M(b,y),x(b,y),b.push(s.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function E(y){let b=g[y.type],B;if(b){let G=Kt[b];B=Zc.clone(G.uniforms)}else B=y.uniforms;return B}function C(y,b){let B;for(let G=0,ee=c.length;G<ee;G++){let P=c[G];if(P.cacheKey===b){B=P,++B.usedTimes;break}}return B===void 0&&(B=new rp(s,b,y,r),c.push(B)),B}function T(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:H}}function lp(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function cp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $o(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zo(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,m,g,_,p){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function o(d,f,m,g,_,p){let u=a(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):t.push(u)}function l(d,f,m,g,_,p){let u=a(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||cp),n.length>1&&n.sort(f||$o),i.length>1&&i.sort(f||$o)}function h(){for(let d=e,f=s.length;d<f;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function hp(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Zo,s.set(n,[a])):i>=r.length?(a=new Zo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function up(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function dp(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var fp=0;function pp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mp(s,e){let t=new up,n=dp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);let r=new I,a=new pt,o=new pt;function l(h,d){let f=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,p=0,u=0,M=0,x=0,E=0,C=0,T=0,A=0,H=0,y=0;h.sort(pp);let b=d===!0?Math.PI:1;for(let G=0,ee=h.length;G<ee;G++){let P=h[G],D=P.color,V=P.intensity,q=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=D.r*V*b,m+=D.g*V*b,g+=D.b*V*b;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],V);y++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){let J=P.shadow,j=n.get(P);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=P.shadow.matrix,E++}i.directional[_]=W,_++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(D).multiplyScalar(V*b),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[u]=W;let J=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,J.updateMatrices(P),P.castShadow&&H++),i.spotLightMatrix[u]=J.matrix,P.castShadow){let j=n.get(P);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[u]=j,i.spotShadowMap[u]=X,T++}u++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(D).multiplyScalar(V),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=W,M++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*b),W.distance=P.distance,W.decay=P.decay,P.castShadow){let J=P.shadow,j=n.get(P);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=P.shadow.matrix,C++}i.point[p]=W,p++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(V*b),W.groundColor.copy(P.groundColor).multiplyScalar(V*b),i.hemi[x]=W,x++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;let B=i.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==u||B.rectAreaLength!==M||B.hemiLength!==x||B.numDirectionalShadows!==E||B.numPointShadows!==C||B.numSpotShadows!==T||B.numSpotMaps!==A||B.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=u,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=T+A-H,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=H,i.numLightProbes=y,B.directionalLength=_,B.pointLength=p,B.spotLength=u,B.rectAreaLength=M,B.hemiLength=x,B.numDirectionalShadows=E,B.numPointShadows=C,B.numSpotShadows=T,B.numSpotMaps=A,B.numLightProbes=y,i.version=fp++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0,u=d.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){let E=h[M];if(E.isDirectionalLight){let C=i.directional[f];C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(u),f++}else if(E.isSpotLight){let C=i.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(u),g++}else if(E.isRectAreaLight){let C=i.rectArea[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),o.identity(),a.copy(E.matrixWorld),a.premultiply(u),o.extractRotation(a),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){let C=i.point[m];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){let C=i.hemi[p];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:i}}function Jo(s,e){let t=new mp(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function gp(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Jo(s,e),t.set(r,[l])):a>=o.length?(l=new Jo(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var qr=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yr=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xp=`uniform sampler2D shadow_pass;
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
}`;function vp(s,e,t){let n=new Ii,i=new ze,r=new ze,a=new ft,o=new qr({depthPacking:wc}),l=new Yr,c={},h=t.maxTextureSize,d={[Sn]:Ct,[Ct]:Sn,[dt]:dt},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:_p,fragmentShader:xp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ht;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let u=this.type;this.render=function(T,A,H){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let y=s.getRenderTarget(),b=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),G=s.state;G.setBlending(vn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let ee=u!==rn&&this.type===rn,P=u===rn&&this.type!==rn;for(let D=0,V=T.length;D<V;D++){let q=T[D],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let W=X.getFrameExtents();if(i.multiply(W),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||ee===!0||P===!0){let j=this.type!==rn?{minFilter:bt,magFilter:bt}:{};X.map!==null&&X.map.dispose(),X.map=new cn(i.x,i.y,j),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let J=X.getViewportCount();for(let j=0;j<J;j++){let le=X.getViewport(j);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),G.viewport(a),X.updateMatrices(q,j),n=X.getFrustum(),E(A,H,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===rn&&M(X,H),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(y,b,B)};function M(T,A){let H=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new cn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,H,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,H,m,_,null)}function x(T,A,H,y){let b=null,B=H.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)b=B;else if(b=H.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=b.uuid,ee=A.uuid,P=c[G];P===void 0&&(P={},c[G]=P);let D=P[ee];D===void 0&&(D=b.clone(),P[ee]=D,A.addEventListener("dispose",C)),b=D}if(b.visible=A.visible,b.wireframe=A.wireframe,y===rn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=s.properties.get(b);G.light=H}return b}function E(T,A,H,y,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===rn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld);let ee=e.update(T),P=T.material;if(Array.isArray(P)){let D=ee.groups;for(let V=0,q=D.length;V<q;V++){let X=D[V],W=P[X.materialIndex];if(W&&W.visible){let J=x(T,W,y,b);T.onBeforeShadow(s,T,A,H,ee,J,X),s.renderBufferDirect(H,null,ee,J,T,X),T.onAfterShadow(s,T,A,H,ee,J,X)}}}else if(P.visible){let D=x(T,P,y,b);T.onBeforeShadow(s,T,A,H,ee,D,null),s.renderBufferDirect(H,null,ee,D,T,null),T.onAfterShadow(s,T,A,H,ee,D,null)}}let G=T.children;for(let ee=0,P=G.length;ee<P;ee++)E(G[ee],A,H,y,b)}function C(T){T.target.removeEventListener("dispose",C);for(let H in c){let y=c[H],b=T.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function yp(s,e,t){let n=t.isWebGL2;function i(){let R=!1,ie=new ft,se=null,we=new ft(0,0,0,0);return{setMask:function(ve){se!==ve&&!R&&(s.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){R=ve},setClear:function(ve,Ye,$e,ct,Mt){Mt===!0&&(ve*=ct,Ye*=ct,$e*=ct),ie.set(ve,Ye,$e,ct),we.equals(ie)===!1&&(s.clearColor(ve,Ye,$e,ct),we.copy(ie))},reset:function(){R=!1,se=null,we.set(-1,0,0,0)}}}function r(){let R=!1,ie=null,se=null,we=null;return{setTest:function(ve){ve?Pe(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(ve){ie!==ve&&!R&&(s.depthMask(ve),ie=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case jl:s.depthFunc(s.NEVER);break;case ec:s.depthFunc(s.ALWAYS);break;case tc:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case nc:s.depthFunc(s.EQUAL);break;case ic:s.depthFunc(s.GEQUAL);break;case sc:s.depthFunc(s.GREATER);break;case rc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=ve}},setLocked:function(ve){R=ve},setClear:function(ve){we!==ve&&(s.clearDepth(ve),we=ve)},reset:function(){R=!1,ie=null,se=null,we=null}}}function a(){let R=!1,ie=null,se=null,we=null,ve=null,Ye=null,$e=null,ct=null,Mt=null;return{setTest:function(Ze){R||(Ze?Pe(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!R&&(s.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,St,Jt){(se!==Ze||we!==St||ve!==Jt)&&(s.stencilFunc(Ze,St,Jt),se=Ze,we=St,ve=Jt)},setOp:function(Ze,St,Jt){(Ye!==Ze||$e!==St||ct!==Jt)&&(s.stencilOp(Ze,St,Jt),Ye=Ze,$e=St,ct=Jt)},setLocked:function(Ze){R=Ze},setClear:function(Ze){Mt!==Ze&&(s.clearStencil(Ze),Mt=Ze)},reset:function(){R=!1,ie=null,se=null,we=null,ve=null,Ye=null,$e=null,ct=null,Mt=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,u=!1,M=null,x=null,E=null,C=null,T=null,A=null,H=null,y=new ke(0,0,0),b=0,B=!1,G=null,ee=null,P=null,D=null,V=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=W>=2);let j=null,le={},k=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),ae=new ft().fromArray(k),ge=new ft().fromArray(Y);function me(R,ie,se,we){let ve=new Uint8Array(4),Ye=s.createTexture();s.bindTexture(R,Ye),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<se;$e++)n&&(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)?s.texImage3D(ie,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(ie+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return Ye}let Re={};Re[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(s.DEPTH_TEST),l.setFunc(os),De(!1),w(Ra),Pe(s.CULL_FACE),ue(vn);function Pe(R){f[R]!==!0&&(s.enable(R),f[R]=!0)}function Se(R){f[R]!==!1&&(s.disable(R),f[R]=!1)}function Ge(R,ie){return m[R]!==ie?(s.bindFramebuffer(R,ie),m[R]=ie,n&&(R===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ie),R===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ie)),!0):!1}function U(R,ie){let se=_,we=!1;if(R)if(se=g.get(ie),se===void 0&&(se=[],g.set(ie,se)),R.isWebGLMultipleRenderTargets){let ve=R.texture;if(se.length!==ve.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Ye=0,$e=ve.length;Ye<$e;Ye++)se[Ye]=s.COLOR_ATTACHMENT0+Ye;se.length=ve.length,we=!0}}else se[0]!==s.COLOR_ATTACHMENT0&&(se[0]=s.COLOR_ATTACHMENT0,we=!0);else se[0]!==s.BACK&&(se[0]=s.BACK,we=!0);we&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function yt(R){return p!==R?(s.useProgram(R),p=R,!0):!1}let xe={[Un]:s.FUNC_ADD,[Bl]:s.FUNC_SUBTRACT,[zl]:s.FUNC_REVERSE_SUBTRACT};if(n)xe[La]=s.MIN,xe[Da]=s.MAX;else{let R=e.get("EXT_blend_minmax");R!==null&&(xe[La]=R.MIN_EXT,xe[Da]=R.MAX_EXT)}let Te={[Hl]:s.ZERO,[kl]:s.ONE,[Gl]:s.SRC_COLOR,[Ar]:s.SRC_ALPHA,[$l]:s.SRC_ALPHA_SATURATE,[ql]:s.DST_COLOR,[Wl]:s.DST_ALPHA,[Vl]:s.ONE_MINUS_SRC_COLOR,[Rr]:s.ONE_MINUS_SRC_ALPHA,[Yl]:s.ONE_MINUS_DST_COLOR,[Xl]:s.ONE_MINUS_DST_ALPHA,[Zl]:s.CONSTANT_COLOR,[Jl]:s.ONE_MINUS_CONSTANT_COLOR,[Kl]:s.CONSTANT_ALPHA,[Ql]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(R,ie,se,we,ve,Ye,$e,ct,Mt,Ze){if(R===vn){u===!0&&(Se(s.BLEND),u=!1);return}if(u===!1&&(Pe(s.BLEND),u=!0),R!==Fl){if(R!==M||Ze!==B){if((x!==Un||T!==Un)&&(s.blendEquation(s.FUNC_ADD),x=Un,T=Un),Ze)switch(R){case ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ca:s.blendFunc(s.ONE,s.ONE);break;case Pa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ia:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ca:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ia:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,C=null,A=null,H=null,y.set(0,0,0),b=0,M=R,B=Ze}return}ve=ve||ie,Ye=Ye||se,$e=$e||we,(ie!==x||ve!==T)&&(s.blendEquationSeparate(xe[ie],xe[ve]),x=ie,T=ve),(se!==E||we!==C||Ye!==A||$e!==H)&&(s.blendFuncSeparate(Te[se],Te[we],Te[Ye],Te[$e]),E=se,C=we,A=Ye,H=$e),(ct.equals(y)===!1||Mt!==b)&&(s.blendColor(ct.r,ct.g,ct.b,Mt),y.copy(ct),b=Mt),M=R,B=!1}function je(R,ie){R.side===dt?Se(s.CULL_FACE):Pe(s.CULL_FACE);let se=R.side===Ct;ie&&(se=!se),De(se),R.blending===ci&&R.transparent===!1?ue(vn):ue(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);let we=R.stencilWrite;c.setTest(we),we&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),O(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(R){G!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),G=R)}function w(R){R!==Nl?(Pe(s.CULL_FACE),R!==ee&&(R===Ra?s.cullFace(s.BACK):R===Ol?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),ee=R}function v(R){R!==P&&(X&&s.lineWidth(R),P=R)}function O(R,ie,se){R?(Pe(s.POLYGON_OFFSET_FILL),(D!==ie||V!==se)&&(s.polygonOffset(ie,se),D=ie,V=se)):Se(s.POLYGON_OFFSET_FILL)}function K(R){R?Pe(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Z(R){R===void 0&&(R=s.TEXTURE0+q-1),j!==R&&(s.activeTexture(R),j=R)}function Q(R,ie,se){se===void 0&&(j===null?se=s.TEXTURE0+q-1:se=j);let we=le[se];we===void 0&&(we={type:void 0,texture:void 0},le[se]=we),(we.type!==R||we.texture!==ie)&&(j!==se&&(s.activeTexture(se),j=se),s.bindTexture(R,ie||Re[R]),we.type=R,we.texture=ie)}function de(){let R=le[j];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(R){ae.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),ae.copy(R))}function Ve(R){ge.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),ge.copy(R))}function tt(R,ie){let se=d.get(ie);se===void 0&&(se=new WeakMap,d.set(ie,se));let we=se.get(R);we===void 0&&(we=s.getUniformBlockIndex(ie,R.name),se.set(R,we))}function Oe(R,ie){let we=d.get(ie).get(R);h.get(ie)!==we&&(s.uniformBlockBinding(ie,we,R.__bindingPointIndex),h.set(ie,we))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},j=null,le={},m={},g=new WeakMap,_=[],p=null,u=!1,M=null,x=null,E=null,C=null,T=null,A=null,H=null,y=new ke(0,0,0),b=0,B=!1,G=null,ee=null,P=null,D=null,V=null,ae.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:Se,bindFramebuffer:Ge,drawBuffers:U,useProgram:yt,setBlending:ue,setMaterial:je,setFlipSided:De,setCullFace:w,setLineWidth:v,setPolygonOffset:O,setScissorTest:K,activeTexture:Z,bindTexture:Q,unbindTexture:de,compressedTexImage2D:re,compressedTexImage3D:ce,texImage2D:_e,texImage3D:he,updateUBOMapping:tt,uniformBlockBinding:Oe,texStorage2D:He,texStorage3D:Ee,texSubImage2D:Me,texSubImage3D:Ue,compressedTexSubImage2D:$,compressedTexSubImage3D:Xe,scissor:Ie,viewport:Ve,reset:te}}function Mp(s,e,t,n,i,r,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return m?new OffscreenCanvas(w,v):ps("canvas")}function _(w,v,O,K){let Z=1;if((w.width>K||w.height>K)&&(Z=K/Math.max(w.width,w.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let Q=v?Nr:Math.floor,de=Q(Z*w.width),re=Q(Z*w.height);d===void 0&&(d=g(de,re));let ce=O?g(de,re):d;return ce.width=de,ce.height=re,ce.getContext("2d").drawImage(w,0,0,de,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+de+"x"+re+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return fo(w.width)&&fo(w.height)}function u(w){return o?!1:w.wrapS!==Xt||w.wrapT!==Xt||w.minFilter!==bt&&w.minFilter!==Ft}function M(w,v){return w.generateMipmaps&&v&&w.minFilter!==bt&&w.minFilter!==Ft}function x(w){s.generateMipmap(w)}function E(w,v,O,K,Z=!1){if(o===!1)return v;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=v;if(v===s.RED&&(O===s.FLOAT&&(Q=s.R32F),O===s.HALF_FLOAT&&(Q=s.R16F),O===s.UNSIGNED_BYTE&&(Q=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.R8UI),O===s.UNSIGNED_SHORT&&(Q=s.R16UI),O===s.UNSIGNED_INT&&(Q=s.R32UI),O===s.BYTE&&(Q=s.R8I),O===s.SHORT&&(Q=s.R16I),O===s.INT&&(Q=s.R32I)),v===s.RG&&(O===s.FLOAT&&(Q=s.RG32F),O===s.HALF_FLOAT&&(Q=s.RG16F),O===s.UNSIGNED_BYTE&&(Q=s.RG8)),v===s.RGBA){let de=Z?hs:qe.getTransfer(K);O===s.FLOAT&&(Q=s.RGBA32F),O===s.HALF_FLOAT&&(Q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Q=de===Je?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function C(w,v,O){return M(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==bt&&w.minFilter!==Ft?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){return w===bt||w===Ua||w===Zs?s.NEAREST:s.LINEAR}function A(w){let v=w.target;v.removeEventListener("dispose",A),y(v),v.isVideoTexture&&h.delete(v)}function H(w){let v=w.target;v.removeEventListener("dispose",H),B(v)}function y(w){let v=n.get(w);if(v.__webglInit===void 0)return;let O=w.source,K=f.get(O);if(K){let Z=K[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(w),Object.keys(K).length===0&&f.delete(O)}n.remove(w)}function b(w){let v=n.get(w);s.deleteTexture(v.__webglTexture);let O=w.source,K=f.get(O);delete K[v.__cacheKey],a.memory.textures--}function B(w){let v=w.texture,O=n.get(w),K=n.get(v);if(K.__webglTexture!==void 0&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(O.__webglFramebuffer[Z]))for(let Q=0;Q<O.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(O.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(O.__webglFramebuffer[Z]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[Z])}else{if(Array.isArray(O.__webglFramebuffer))for(let Z=0;Z<O.__webglFramebuffer.length;Z++)s.deleteFramebuffer(O.__webglFramebuffer[Z]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Z=0;Z<O.__webglColorRenderbuffer.length;Z++)O.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[Z]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Z=0,Q=v.length;Z<Q;Z++){let de=n.get(v[Z]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(v[Z])}n.remove(v),n.remove(w)}let G=0;function ee(){G=0}function P(){let w=G;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),G+=1,w}function D(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function V(w,v){let O=n.get(w);if(w.isVideoTexture&&je(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){let K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,w,v);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function q(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){ae(O,w,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function X(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){ae(O,w,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function W(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){ge(O,w,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}let J={[Ir]:s.REPEAT,[Xt]:s.CLAMP_TO_EDGE,[Lr]:s.MIRRORED_REPEAT},j={[bt]:s.NEAREST,[Ua]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[fc]:s.LINEAR_MIPMAP_NEAREST,[Ai]:s.LINEAR_MIPMAP_LINEAR},le={[Ec]:s.NEVER,[Ic]:s.ALWAYS,[Tc]:s.LESS,[fl]:s.LEQUAL,[Ac]:s.EQUAL,[Pc]:s.GEQUAL,[Rc]:s.GREATER,[Cc]:s.NOTEQUAL};function k(w,v,O){if(O?(s.texParameteri(w,s.TEXTURE_WRAP_S,J[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,J[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,J[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,j[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,j[v.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==Xt||v.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,T(v.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==bt&&v.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===bt||v.minFilter!==Zs&&v.minFilter!==Ai||v.type===xn&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Ri&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Y(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));let K=v.source,Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));let Q=D(v);if(Q!==w.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[Q].usedTimes++;let de=Z[w.__cacheKey];de!==void 0&&(Z[w.__cacheKey].usedTimes--,de.usedTimes===0&&b(v)),w.__cacheKey=Q,w.__webglTexture=Z[Q].texture}return O}function ae(w,v,O){let K=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=s.TEXTURE_3D);let Z=Y(w,v),Q=v.source;t.bindTexture(K,w.__webglTexture,s.TEXTURE0+O);let de=n.get(Q);if(Q.version!==de.__version||Z===!0){t.activeTexture(s.TEXTURE0+O);let re=qe.getPrimaries(qe.workingColorSpace),ce=v.colorSpace===Bt?null:qe.getPrimaries(v.colorSpace),Me=v.colorSpace===Bt||re===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ue=u(v)&&p(v.image)===!1,$=_(v.image,Ue,!1,i.maxTextureSize);$=De(v,$);let Xe=p($)||o,He=r.convert(v.format,v.colorSpace),Ee=r.convert(v.type),_e=E(v.internalFormat,He,Ee,v.colorSpace,v.isVideoTexture);k(K,v,Xe);let he,Ie=v.mipmaps,Ve=o&&v.isVideoTexture!==!0&&_e!==hl,tt=de.__version===void 0||Z===!0,Oe=C(v,$,Xe);if(v.isDepthTexture)_e=s.DEPTH_COMPONENT,o?v.type===xn?_e=s.DEPTH_COMPONENT32F:v.type===_n?_e=s.DEPTH_COMPONENT24:v.type===On?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:v.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Fn&&_e===s.DEPTH_COMPONENT&&v.type!==pa&&v.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=_n,Ee=r.convert(v.type)),v.format===pi&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,v.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=On,Ee=r.convert(v.type))),tt&&(Ve?t.texStorage2D(s.TEXTURE_2D,1,_e,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,_e,$.width,$.height,0,He,Ee,null));else if(v.isDataTexture)if(Ie.length>0&&Xe){Ve&&tt&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Ie[0].width,Ie[0].height);for(let te=0,R=Ie.length;te<R;te++)he=Ie[te],Ve?t.texSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,He,Ee,he.data):t.texImage2D(s.TEXTURE_2D,te,_e,he.width,he.height,0,He,Ee,he.data);v.generateMipmaps=!1}else Ve?(tt&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,He,Ee,$.data)):t.texImage2D(s.TEXTURE_2D,0,_e,$.width,$.height,0,He,Ee,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,_e,Ie[0].width,Ie[0].height,$.depth);for(let te=0,R=Ie.length;te<R;te++)he=Ie[te],v.format!==qt?He!==null?Ve?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,$.depth,He,he.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,_e,he.width,he.height,$.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,$.depth,He,Ee,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,_e,he.width,he.height,$.depth,0,He,Ee,he.data)}else{Ve&&tt&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Ie[0].width,Ie[0].height);for(let te=0,R=Ie.length;te<R;te++)he=Ie[te],v.format!==qt?He!==null?Ve?t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,He,he.data):t.compressedTexImage2D(s.TEXTURE_2D,te,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,He,Ee,he.data):t.texImage2D(s.TEXTURE_2D,te,_e,he.width,he.height,0,He,Ee,he.data)}else if(v.isDataArrayTexture)Ve?(tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,_e,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,He,Ee,$.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,$.width,$.height,$.depth,0,He,Ee,$.data);else if(v.isData3DTexture)Ve?(tt&&t.texStorage3D(s.TEXTURE_3D,Oe,_e,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,He,Ee,$.data)):t.texImage3D(s.TEXTURE_3D,0,_e,$.width,$.height,$.depth,0,He,Ee,$.data);else if(v.isFramebufferTexture){if(tt)if(Ve)t.texStorage2D(s.TEXTURE_2D,Oe,_e,$.width,$.height);else{let te=$.width,R=$.height;for(let ie=0;ie<Oe;ie++)t.texImage2D(s.TEXTURE_2D,ie,_e,te,R,0,He,Ee,null),te>>=1,R>>=1}}else if(Ie.length>0&&Xe){Ve&&tt&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Ie[0].width,Ie[0].height);for(let te=0,R=Ie.length;te<R;te++)he=Ie[te],Ve?t.texSubImage2D(s.TEXTURE_2D,te,0,0,He,Ee,he):t.texImage2D(s.TEXTURE_2D,te,_e,He,Ee,he);v.generateMipmaps=!1}else Ve?(tt&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,He,Ee,$)):t.texImage2D(s.TEXTURE_2D,0,_e,He,Ee,$);M(v,Xe)&&x(K),de.__version=Q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ge(w,v,O){if(v.image.length!==6)return;let K=Y(w,v),Z=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+O);let Q=n.get(Z);if(Z.version!==Q.__version||K===!0){t.activeTexture(s.TEXTURE0+O);let de=qe.getPrimaries(qe.workingColorSpace),re=v.colorSpace===Bt?null:qe.getPrimaries(v.colorSpace),ce=v.colorSpace===Bt||de===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Me=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,$=[];for(let te=0;te<6;te++)!Me&&!Ue?$[te]=_(v.image[te],!1,!0,i.maxCubemapSize):$[te]=Ue?v.image[te].image:v.image[te],$[te]=De(v,$[te]);let Xe=$[0],He=p(Xe)||o,Ee=r.convert(v.format,v.colorSpace),_e=r.convert(v.type),he=E(v.internalFormat,Ee,_e,v.colorSpace),Ie=o&&v.isVideoTexture!==!0,Ve=Q.__version===void 0||K===!0,tt=C(v,Xe,He);k(s.TEXTURE_CUBE_MAP,v,He);let Oe;if(Me){Ie&&Ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,tt,he,Xe.width,Xe.height);for(let te=0;te<6;te++){Oe=$[te].mipmaps;for(let R=0;R<Oe.length;R++){let ie=Oe[R];v.format!==qt?Ee!==null?Ie?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,0,0,ie.width,ie.height,Ee,ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,he,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,0,0,ie.width,ie.height,Ee,_e,ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,he,ie.width,ie.height,0,Ee,_e,ie.data)}}}else{Oe=v.mipmaps,Ie&&Ve&&(Oe.length>0&&tt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,tt,he,$[0].width,$[0].height));for(let te=0;te<6;te++)if(Ue){Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,$[te].width,$[te].height,Ee,_e,$[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,he,$[te].width,$[te].height,0,Ee,_e,$[te].data);for(let R=0;R<Oe.length;R++){let se=Oe[R].image[te].image;Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,0,0,se.width,se.height,Ee,_e,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,he,se.width,se.height,0,Ee,_e,se.data)}}else{Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee,_e,$[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,he,Ee,_e,$[te]);for(let R=0;R<Oe.length;R++){let ie=Oe[R];Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,0,0,Ee,_e,ie.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,he,Ee,_e,ie.image[te])}}}M(v,He)&&x(s.TEXTURE_CUBE_MAP),Q.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function me(w,v,O,K,Z,Q){let de=r.convert(O.format,O.colorSpace),re=r.convert(O.type),ce=E(O.internalFormat,de,re,O.colorSpace);if(!n.get(v).__hasExternalTextures){let Ue=Math.max(1,v.width>>Q),$=Math.max(1,v.height>>Q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Q,ce,Ue,$,v.depth,0,de,re,null):t.texImage2D(Z,Q,ce,Ue,$,0,de,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ue(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,n.get(O).__webglTexture,0,Te(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,n.get(O).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(w,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let K=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||ue(v)){let Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===xn?K=s.DEPTH_COMPONENT32F:Z.type===_n&&(K=s.DEPTH_COMPONENT24));let Q=Te(v);ue(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,K,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,K,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,K,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){let K=Te(v);O&&ue(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,v.width,v.height):ue(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{let K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Z=0;Z<K.length;Z++){let Q=K[Z],de=r.convert(Q.format,Q.colorSpace),re=r.convert(Q.type),ce=E(Q.internalFormat,de,re,Q.colorSpace),Me=Te(v);O&&ue(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,ce,v.width,v.height):ue(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,ce,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ce,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);let K=n.get(v.depthTexture).__webglTexture,Z=Te(v);if(v.depthTexture.format===Fn)ue(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(v.depthTexture.format===pi)ue(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Se(w){let v=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Pe(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=s.createRenderbuffer(),Re(v.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Re(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(w,v,O){let K=n.get(w);v!==void 0&&me(K.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Se(w)}function U(w){let v=w.texture,O=n.get(w),K=n.get(v);w.addEventListener("dispose",H),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=v.version,a.memory.textures++);let Z=w.isWebGLCubeRenderTarget===!0,Q=w.isWebGLMultipleRenderTargets===!0,de=p(w)||o;if(Z){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let ce=0;ce<v.mipmaps.length;ce++)O.__webglFramebuffer[re][ce]=s.createFramebuffer()}else O.__webglFramebuffer[re]=s.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)O.__webglFramebuffer[re]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){let re=w.texture;for(let ce=0,Me=re.length;ce<Me;ce++){let Ue=n.get(re[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&ue(w)===!1){let re=Q?v:[v];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){let Me=re[ce];O.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);let Ue=r.convert(Me.format,Me.colorSpace),$=r.convert(Me.type),Xe=E(Me.internalFormat,Ue,$,Me.colorSpace,w.isXRRenderTarget===!0),He=Te(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Xe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),k(s.TEXTURE_CUBE_MAP,v,de);for(let re=0;re<6;re++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)me(O.__webglFramebuffer[re][ce],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else me(O.__webglFramebuffer[re],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);M(v,de)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){let re=w.texture;for(let ce=0,Me=re.length;ce<Me;ce++){let Ue=re[ce],$=n.get(Ue);t.bindTexture(s.TEXTURE_2D,$.__webglTexture),k(s.TEXTURE_2D,Ue,de),me(O.__webglFramebuffer,w,Ue,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),M(Ue,de)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?re=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,K.__webglTexture),k(re,v,de),o&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)me(O.__webglFramebuffer[ce],w,v,s.COLOR_ATTACHMENT0,re,ce);else me(O.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,re,0);M(v,de)&&x(re),t.unbindTexture()}w.depthBuffer&&Se(w)}function yt(w){let v=p(w)||o,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,Z=O.length;K<Z;K++){let Q=O[K];if(M(Q,v)){let de=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,re=n.get(Q).__webglTexture;t.bindTexture(de,re),x(de),t.unbindTexture()}}}function xe(w){if(o&&w.samples>0&&ue(w)===!1){let v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,K=w.height,Z=s.COLOR_BUFFER_BIT,Q=[],de=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=n.get(w),ce=w.isWebGLMultipleRenderTargets===!0;if(ce)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){Q.push(s.COLOR_ATTACHMENT0+Me),w.depthBuffer&&Q.push(de);let Ue=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ue===!1&&(w.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ce&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[Me]),Ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[de]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[de])),ce){let $=n.get(v[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,O,K,0,0,O,K,Z,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,re.__webglColorRenderbuffer[Me]);let Ue=n.get(v[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Te(w){return Math.min(i.maxSamples,w.samples)}function ue(w){let v=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function je(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function De(w,v){let O=w.colorSpace,K=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Dr||O!==ln&&O!==Bt&&(qe.getTransfer(O)===Je?o===!1?e.has("EXT_sRGB")===!0&&K===qt?(w.format=Dr,w.minFilter=Ft,w.generateMipmaps=!1):v=ms.sRGBToLinear(v):(K!==qt||Z!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=P,this.resetTextureUnits=ee,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=U,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ue}function Sp(s,e,t){let n=t.isWebGL2;function i(r,a=Bt){let o,l=qe.getTransfer(a);if(r===Mn)return s.UNSIGNED_BYTE;if(r===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===al)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pc)return s.BYTE;if(r===mc)return s.SHORT;if(r===pa)return s.UNSIGNED_SHORT;if(r===sl)return s.INT;if(r===_n)return s.UNSIGNED_INT;if(r===xn)return s.FLOAT;if(r===Ri)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===gc)return s.ALPHA;if(r===qt)return s.RGBA;if(r===_c)return s.LUMINANCE;if(r===xc)return s.LUMINANCE_ALPHA;if(r===Fn)return s.DEPTH_COMPONENT;if(r===pi)return s.DEPTH_STENCIL;if(r===Dr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===vc)return s.RED;if(r===ol)return s.RED_INTEGER;if(r===yc)return s.RG;if(r===ll)return s.RG_INTEGER;if(r===cl)return s.RGBA_INTEGER;if(r===Js||r===Ks||r===Qs||r===js)if(l===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Js)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Js)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ks)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===js)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Na||r===Oa||r===Fa||r===Ba)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Na)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ba)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===za||r===Ha)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===za)return l===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ha)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ka||r===Ga||r===Va||r===Wa||r===Xa||r===qa||r===Ya||r===$a||r===Za||r===Ja||r===Ka||r===Qa||r===ja||r===eo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ka)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ga)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Va)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wa)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xa)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qa)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ya)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$a)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Za)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ja)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ka)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qa)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ja)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===eo)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===er||r===to||r===no)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===er)return l===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===to)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===no)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mc||r===io||r===so||r===ro)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===er)return o.COMPRESSED_RED_RGTC1_EXT;if(r===io)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===so)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ro)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===On?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var $r=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},st=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wp={type:"move"},Ti=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zr=class extends wn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,_=t.getContextAttributes(),p=null,u=null,M=[],x=[],E=new ze,C=null,T=new Et;T.layers.enable(1),T.viewport=new ft;let A=new Et;A.layers.enable(2),A.viewport=new ft;let H=[T,A],y=new $r;y.layers.enable(1),y.layers.enable(2);let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=M[k];return Y===void 0&&(Y=new Ti,M[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=M[k];return Y===void 0&&(Y=new Ti,M[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=M[k];return Y===void 0&&(Y=new Ti,M[k]=Y),Y.getHandSpace()};function G(k){let Y=x.indexOf(k.inputSource);if(Y===-1)return;let ae=M[Y];ae!==void 0&&(ae.update(k.inputSource,k.frame,c||a),ae.dispatchEvent({type:k.type,data:k.inputSource}))}function ee(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",P);for(let k=0;k<M.length;k++){let Y=x[k];Y!==null&&(x[k]=null,M[k].disconnect(Y))}b=null,B=null,e.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new cn(m.framebufferWidth,m.framebufferHeight,{format:qt,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,ae=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?pi:Fn,ae=_.stencil?On:_n);let me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(me),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new cn(f.textureWidth,f.textureHeight,{format:qt,type:Mn,depthTexture:new Ts(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Re=e.properties.get(u);Re.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(k){for(let Y=0;Y<k.removed.length;Y++){let ae=k.removed[Y],ge=x.indexOf(ae);ge>=0&&(x[ge]=null,M[ge].disconnect(ae))}for(let Y=0;Y<k.added.length;Y++){let ae=k.added[Y],ge=x.indexOf(ae);if(ge===-1){for(let Re=0;Re<M.length;Re++)if(Re>=x.length){x.push(ae),ge=Re;break}else if(x[Re]===null){x[Re]=ae,ge=Re;break}if(ge===-1)break}let me=M[ge];me&&me.connect(ae)}}let D=new I,V=new I;function q(k,Y,ae){D.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(ae.matrixWorld);let ge=D.distanceTo(V),me=Y.projectionMatrix.elements,Re=ae.projectionMatrix.elements,Pe=me[14]/(me[10]-1),Se=me[14]/(me[10]+1),Ge=(me[9]+1)/me[5],U=(me[9]-1)/me[5],yt=(me[8]-1)/me[0],xe=(Re[8]+1)/Re[0],Te=Pe*yt,ue=Pe*xe,je=ge/(-yt+xe),De=je*-yt;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(De),k.translateZ(je),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let w=Pe+je,v=Se+je,O=Te-De,K=ue+(ge-De),Z=Ge*Se/v*w,Q=U*Se/v*w;k.projectionMatrix.makePerspective(O,K,Z,Q,w,v),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function X(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;y.near=A.near=T.near=k.near,y.far=A.far=T.far=k.far,(b!==y.near||B!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,B=y.far);let Y=k.parent,ae=y.cameras;X(y,Y);for(let ge=0;ge<ae.length;ge++)X(ae[ge],Y);ae.length===2?q(y,T,A):y.projectionMatrix.copy(T.projectionMatrix),W(k,y,Y)};function W(k,Y,ae){ae===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(ae.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ur*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let J=null;function j(k,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){let ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ge=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,ge=!0);for(let me=0;me<ae.length;me++){let Re=ae[me],Pe=null;if(m!==null)Pe=m.getViewport(Re);else{let Ge=d.getViewSubImage(f,Re);Pe=Ge.viewport,me===0&&(e.setRenderTargetTextures(u,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(u))}let Se=H[me];Se===void 0&&(Se=new Et,Se.layers.enable(me),Se.viewport=new ft,H[me]=Se),Se.matrix.fromArray(Re.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Re.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(y.matrix.copy(Se.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ge===!0&&y.cameras.push(Se)}}for(let ae=0;ae<M.length;ae++){let ge=x[ae],me=M[ae];ge!==null&&me!==void 0&&me.update(ge,Y,c||a)}J&&J(k,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let le=new _l;le.setAnimationLoop(j),this.setAnimationLoop=function(k){J=k},this.dispose=function(){}}};function bp(s,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,gl(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,M,x,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,M,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ct&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ct&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let M=e.get(u).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,M,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ct&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let M=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ep(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){let E=x.program;n.uniformBlockBinding(M,E)}function c(M,x){let E=i[M.id];E===void 0&&(g(M),E=h(M),i[M.id]=E,M.addEventListener("dispose",p));let C=x.program;n.updateUBOMapping(M,C);let T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function h(M){let x=d();M.__bindingPointIndex=x;let E=s.createBuffer(),C=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,E),E}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let x=i[M.id],E=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,A=E.length;T<A;T++){let H=Array.isArray(E[T])?E[T]:[E[T]];for(let y=0,b=H.length;y<b;y++){let B=H[y];if(m(B,T,y,C)===!0){let G=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value],P=0;for(let D=0;D<ee.length;D++){let V=ee[D],q=_(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,G+P,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,x,E,C){let T=M.value,A=x+"_"+E;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let H=C[A];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return C[A]=T,!0}else if(H.equals(T)===!1)return H.copy(T),!0}return!1}function g(M){let x=M.uniforms,E=0,C=16;for(let A=0,H=x.length;A<H;A++){let y=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,B=y.length;b<B;b++){let G=y[b],ee=Array.isArray(G.value)?G.value:[G.value];for(let P=0,D=ee.length;P<D;P++){let V=ee[P],q=_(V),X=E%C;X!==0&&C-X<q.boundary&&(E+=C-X),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=q.storage}}}let T=E%C;return T>0&&(E+=C-T),M.__size=E,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function u(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}var Li=class{constructor(e={}){let{canvas:t=Dc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,u=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;let x=this,E=!1,C=0,T=0,A=null,H=-1,y=null,b=new ft,B=new ft,G=null,ee=new ke(0),P=0,D=t.width,V=t.height,q=1,X=null,W=null,J=new ft(0,0,D,V),j=new ft(0,0,D,V),le=!1,k=new Ii,Y=!1,ae=!1,ge=null,me=new pt,Re=new ze,Pe=new I,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return A===null?q:1}let U=n;function yt(S,L){for(let F=0;F<S.length;F++){let z=S[F],N=t.getContext(z,L);if(N!==null)return N}return null}try{let S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ua}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ie,!1),U===null){let L=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&L.shift(),U=yt(L,S),U===null)throw yt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xe,Te,ue,je,De,w,v,O,K,Z,Q,de,re,ce,Me,Ue,$,Xe,He,Ee,_e,he,Ie,Ve;function tt(){xe=new Vd(U),Te=new Fd(U,xe,e),xe.init(Te),he=new Sp(U,xe,Te),ue=new yp(U,xe,Te),je=new qd(U),De=new lp,w=new Mp(U,xe,ue,De,Te,he,je),v=new zd(x),O=new Gd(x),K=new eh(U,Te),Ie=new Nd(U,xe,K,Te),Z=new Wd(U,K,je,Ie),Q=new Jd(U,Z,K,je),He=new Zd(U,Te,w),Ue=new Bd(De),de=new op(x,v,O,xe,Te,Ie,Ue),re=new bp(x,De),ce=new hp,Me=new gp(xe,Te),Xe=new Ud(x,v,O,ue,Q,f,l),$=new vp(x,Q,Te),Ve=new Ep(U,je,Te,ue),Ee=new Od(U,xe,je,Te),_e=new Xd(U,xe,je,Te),je.programs=de.programs,x.capabilities=Te,x.extensions=xe,x.properties=De,x.renderLists=ce,x.shadowMap=$,x.state=ue,x.info=je}tt();let Oe=new Zr(x,U);this.xr=Oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(D,V,!1))},this.getSize=function(S){return S.set(D,V)},this.setSize=function(S,L,F=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=S,V=L,t.width=Math.floor(S*q),t.height=Math.floor(L*q),F===!0&&(t.style.width=S+"px",t.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(D*q,V*q).floor()},this.setDrawingBufferSize=function(S,L,F){D=S,V=L,q=F,t.width=Math.floor(S*F),t.height=Math.floor(L*F),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,L,F,z){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,L,F,z),ue.viewport(b.copy(J).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(j)},this.setScissor=function(S,L,F,z){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,L,F,z),ue.scissor(B.copy(j).multiplyScalar(q).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){ue.setScissorTest(le=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(S=!0,L=!0,F=!0){let z=0;if(S){let N=!1;if(A!==null){let oe=A.texture.format;N=oe===cl||oe===ll||oe===ol}if(N){let oe=A.texture.type,fe=oe===Mn||oe===_n||oe===pa||oe===On||oe===rl||oe===al,ye=Xe.getClearColor(),be=Xe.getClearAlpha(),Ne=ye.r,Ae=ye.g,Ce=ye.b;fe?(m[0]=Ne,m[1]=Ae,m[2]=Ce,m[3]=be,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Ne,g[1]=Ae,g[2]=Ce,g[3]=be,U.clearBufferiv(U.COLOR,0,g))}else z|=U.COLOR_BUFFER_BIT}L&&(z|=U.DEPTH_BUFFER_BIT),F&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ce.dispose(),Me.dispose(),De.dispose(),v.dispose(),O.dispose(),Q.dispose(),Ie.dispose(),Ve.dispose(),de.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Mt),Oe.removeEventListener("sessionend",Ze),ge&&(ge.dispose(),ge=null),St.stop()};function te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let S=je.autoReset,L=$.enabled,F=$.autoUpdate,z=$.needsUpdate,N=$.type;tt(),je.autoReset=S,$.enabled=L,$.autoUpdate=F,$.needsUpdate=z,$.type=N}function ie(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function se(S){let L=S.target;L.removeEventListener("dispose",se),we(L)}function we(S){ve(S),De.remove(S)}function ve(S){let L=De.get(S).programs;L!==void 0&&(L.forEach(function(F){de.releaseProgram(F)}),S.isShaderMaterial&&de.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,F,z,N,oe){L===null&&(L=Se);let fe=N.isMesh&&N.matrixWorld.determinant()<0,ye=Il(S,L,F,z,N);ue.setMaterial(z,fe);let be=F.index,Ne=1;if(z.wireframe===!0){if(be=Z.getWireframeAttribute(F),be===void 0)return;Ne=2}let Ae=F.drawRange,Ce=F.attributes.position,it=Ae.start*Ne,It=(Ae.start+Ae.count)*Ne;oe!==null&&(it=Math.max(it,oe.start*Ne),It=Math.min(It,(oe.start+oe.count)*Ne)),be!==null?(it=Math.max(it,0),It=Math.min(It,be.count)):Ce!=null&&(it=Math.max(it,0),It=Math.min(It,Ce.count));let ht=It-it;if(ht<0||ht===1/0)return;Ie.setup(N,z,ye,F,be);let Qt,et=Ee;if(be!==null&&(Qt=K.get(be),et=_e,et.setIndex(Qt)),N.isMesh)z.wireframe===!0?(ue.setLineWidth(z.wireframeLinewidth*Ge()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(N.isLine){let Fe=z.linewidth;Fe===void 0&&(Fe=1),ue.setLineWidth(Fe*Ge()),N.isLineSegments?et.setMode(U.LINES):N.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else N.isPoints?et.setMode(U.POINTS):N.isSprite&&et.setMode(U.TRIANGLES);if(N.isBatchedMesh)et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)et.renderInstances(it,ht,N.count);else if(F.isInstancedBufferGeometry){let Fe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Xs=Math.min(F.instanceCount,Fe);et.renderInstances(it,ht,Xs)}else et.render(it,ht)};function Ye(S,L,F){S.transparent===!0&&S.side===dt&&S.forceSinglePass===!1?(S.side=Ct,S.needsUpdate=!0,Fi(S,L,F),S.side=Sn,S.needsUpdate=!0,Fi(S,L,F),S.side=dt):Fi(S,L,F)}this.compile=function(S,L,F=null){F===null&&(F=S),p=Me.get(F),p.init(),M.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==F&&S.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(x._useLegacyLights);let z=new Set;return S.traverse(function(N){let oe=N.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){let ye=oe[fe];Ye(ye,F,N),z.add(ye)}else Ye(oe,F,N),z.add(oe)}),M.pop(),p=null,z},this.compileAsync=function(S,L,F=null){let z=this.compile(S,L,F);return new Promise(N=>{function oe(){if(z.forEach(function(fe){De.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){N(S);return}setTimeout(oe,10)}xe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let $e=null;function ct(S){$e&&$e(S)}function Mt(){St.stop()}function Ze(){St.start()}let St=new _l;St.setAnimationLoop(ct),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(S){$e=S,Oe.setAnimationLoop(S),S===null?St.stop():St.start()},Oe.addEventListener("sessionstart",Mt),Oe.addEventListener("sessionend",Ze),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(L),L=Oe.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,L,A),p=Me.get(S,M.length),p.init(),M.push(p),me.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),k.setFromProjectionMatrix(me),ae=this.localClippingEnabled,Y=Ue.init(this.clippingPlanes,ae),_=ce.get(S,u.length),_.init(),u.push(_),Jt(S,L,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,W),this.info.render.frame++,Y===!0&&Ue.beginShadows();let F=p.state.shadowsArray;if($.render(F,S,L),Y===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(_,S),p.setupLights(x._useLegacyLights),L.isArrayCamera){let z=L.cameras;for(let N=0,oe=z.length;N<oe;N++){let fe=z[N];Sa(_,S,fe,fe.viewport)}}else Sa(_,S,L);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(x,S,L),Ie.resetDefaultState(),H=-1,y=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Jt(S,L,F,z){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){z&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);let fe=Q.update(S),ye=S.material;ye.visible&&_.push(S,fe,ye,F,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||k.intersectsObject(S))){let fe=Q.update(S),ye=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Pe.copy(fe.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(ye)){let be=fe.groups;for(let Ne=0,Ae=be.length;Ne<Ae;Ne++){let Ce=be[Ne],it=ye[Ce.materialIndex];it&&it.visible&&_.push(S,fe,it,F,Pe.z,Ce)}}else ye.visible&&_.push(S,fe,ye,F,Pe.z,null)}}let oe=S.children;for(let fe=0,ye=oe.length;fe<ye;fe++)Jt(oe[fe],L,F,z)}function Sa(S,L,F,z){let N=S.opaque,oe=S.transmissive,fe=S.transparent;p.setupLightsView(F),Y===!0&&Ue.setGlobalState(x.clippingPlanes,F),oe.length>0&&Pl(N,oe,L,F),z&&ue.viewport(b.copy(z)),N.length>0&&Oi(N,L,F),oe.length>0&&Oi(oe,L,F),fe.length>0&&Oi(fe,L,F),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Pl(S,L,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let oe=Te.isWebGL2;ge===null&&(ge=new cn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Ri:Mn,minFilter:Ai,samples:oe?4:0})),x.getDrawingBufferSize(Re),oe?ge.setSize(Re.x,Re.y):ge.setSize(Nr(Re.x),Nr(Re.y));let fe=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(ee),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let ye=x.toneMapping;x.toneMapping=yn,Oi(S,F,z),w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge);let be=!1;for(let Ne=0,Ae=L.length;Ne<Ae;Ne++){let Ce=L[Ne],it=Ce.object,It=Ce.geometry,ht=Ce.material,Qt=Ce.group;if(ht.side===dt&&it.layers.test(z.layers)){let et=ht.side;ht.side=Ct,ht.needsUpdate=!0,wa(it,F,z,It,ht,Qt),ht.side=et,ht.needsUpdate=!0,be=!0}}be===!0&&(w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge)),x.setRenderTarget(fe),x.setClearColor(ee,P),x.toneMapping=ye}function Oi(S,L,F){let z=L.isScene===!0?L.overrideMaterial:null;for(let N=0,oe=S.length;N<oe;N++){let fe=S[N],ye=fe.object,be=fe.geometry,Ne=z===null?fe.material:z,Ae=fe.group;ye.layers.test(F.layers)&&wa(ye,L,F,be,Ne,Ae)}}function wa(S,L,F,z,N,oe){S.onBeforeRender(x,L,F,z,N,oe),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,L,F,z,S,oe),N.transparent===!0&&N.side===dt&&N.forceSinglePass===!1?(N.side=Ct,N.needsUpdate=!0,x.renderBufferDirect(F,L,z,N,S,oe),N.side=Sn,N.needsUpdate=!0,x.renderBufferDirect(F,L,z,N,S,oe),N.side=dt):x.renderBufferDirect(F,L,z,N,S,oe),S.onAfterRender(x,L,F,z,N,oe)}function Fi(S,L,F){L.isScene!==!0&&(L=Se);let z=De.get(S),N=p.state.lights,oe=p.state.shadowsArray,fe=N.state.version,ye=de.getParameters(S,N.state,oe,L,F),be=de.getProgramCacheKey(ye),Ne=z.programs;z.environment=S.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||z.environment),Ne===void 0&&(S.addEventListener("dispose",se),Ne=new Map,z.programs=Ne);let Ae=Ne.get(be);if(Ae!==void 0){if(z.currentProgram===Ae&&z.lightsStateVersion===fe)return Ea(S,ye),Ae}else ye.uniforms=de.getUniforms(S),S.onBuild(F,ye,x),S.onBeforeCompile(ye,x),Ae=de.acquireProgram(ye,be),Ne.set(be,Ae),z.uniforms=ye.uniforms;let Ce=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),Ea(S,ye),z.needsLights=Dl(S),z.lightsStateVersion=fe,z.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ae,z.uniformsList=null,Ae}function ba(S){if(S.uniformsList===null){let L=S.currentProgram.getUniforms();S.uniformsList=ui.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function Ea(S,L){let F=De.get(S);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function Il(S,L,F,z,N){L.isScene!==!0&&(L=Se),w.resetTextureUnits();let oe=L.fog,fe=z.isMeshStandardMaterial?L.environment:null,ye=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ln,be=(z.isMeshStandardMaterial?O:v).get(z.envMap||fe),Ne=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ae=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!F.morphAttributes.position,it=!!F.morphAttributes.normal,It=!!F.morphAttributes.color,ht=yn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ht=x.toneMapping);let Qt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=Qt!==void 0?Qt.length:0,Fe=De.get(z),Xs=p.state.lights;if(Y===!0&&(ae===!0||S!==y)){let Nt=S===y&&z.id===H;Ue.setState(z,S,Nt)}let nt=!1;z.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Xs.state.version||Fe.outputColorSpace!==ye||N.isBatchedMesh&&Fe.batching===!1||!N.isBatchedMesh&&Fe.batching===!0||N.isInstancedMesh&&Fe.instancing===!1||!N.isInstancedMesh&&Fe.instancing===!0||N.isSkinnedMesh&&Fe.skinning===!1||!N.isSkinnedMesh&&Fe.skinning===!0||N.isInstancedMesh&&Fe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Fe.instancingColor===!1&&N.instanceColor!==null||Fe.envMap!==be||z.fog===!0&&Fe.fog!==oe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ue.numPlanes||Fe.numIntersection!==Ue.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==Ae||Fe.morphTargets!==Ce||Fe.morphNormals!==it||Fe.morphColors!==It||Fe.toneMapping!==ht||Te.isWebGL2===!0&&Fe.morphTargetsCount!==et)&&(nt=!0):(nt=!0,Fe.__version=z.version);let An=Fe.currentProgram;nt===!0&&(An=Fi(z,L,N));let Ta=!1,vi=!1,qs=!1,_t=An.getUniforms(),Rn=Fe.uniforms;if(ue.useProgram(An.program)&&(Ta=!0,vi=!0,qs=!0),z.id!==H&&(H=z.id,vi=!0),Ta||y!==S){_t.setValue(U,"projectionMatrix",S.projectionMatrix),_t.setValue(U,"viewMatrix",S.matrixWorldInverse);let Nt=_t.map.cameraPosition;Nt!==void 0&&Nt.setValue(U,Pe.setFromMatrixPosition(S.matrixWorld)),Te.logarithmicDepthBuffer&&_t.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,vi=!0,qs=!0)}if(N.isSkinnedMesh){_t.setOptional(U,N,"bindMatrix"),_t.setOptional(U,N,"bindMatrixInverse");let Nt=N.skeleton;Nt&&(Te.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),_t.setValue(U,"boneTexture",Nt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(_t.setOptional(U,N,"batchingTexture"),_t.setValue(U,"batchingTexture",N._matricesTexture,w));let Ys=F.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0&&Te.isWebGL2===!0)&&He.update(N,F,An),(vi||Fe.receiveShadow!==N.receiveShadow)&&(Fe.receiveShadow=N.receiveShadow,_t.setValue(U,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Rn.envMap.value=be,Rn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),vi&&(_t.setValue(U,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Ll(Rn,qs),oe&&z.fog===!0&&re.refreshFogUniforms(Rn,oe),re.refreshMaterialUniforms(Rn,z,q,V,ge),ui.upload(U,ba(Fe),Rn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ui.upload(U,ba(Fe),Rn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(U,"center",N.center),_t.setValue(U,"modelViewMatrix",N.modelViewMatrix),_t.setValue(U,"normalMatrix",N.normalMatrix),_t.setValue(U,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Nt=z.uniformsGroups;for(let $s=0,Ul=Nt.length;$s<Ul;$s++)if(Te.isWebGL2){let Aa=Nt[$s];Ve.update(Aa,An),Ve.bind(Aa,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function Ll(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function Dl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,L,F){De.get(S.texture).__webglTexture=L,De.get(S.depthTexture).__webglTexture=F;let z=De.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,L){let F=De.get(S);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,F=0){A=S,C=L,T=F;let z=!0,N=null,oe=!1,fe=!1;if(S){let be=De.get(S);be.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):be.__webglFramebuffer===void 0?w.setupRenderTarget(S):be.__hasExternalTextures&&w.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);let Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);let Ae=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[L])?N=Ae[L][F]:N=Ae[L],oe=!0):Te.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?N=De.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?N=Ae[F]:N=Ae,b.copy(S.viewport),B.copy(S.scissor),G=S.scissorTest}else b.copy(J).multiplyScalar(q).floor(),B.copy(j).multiplyScalar(q).floor(),G=le;if(ue.bindFramebuffer(U.FRAMEBUFFER,N)&&Te.drawBuffers&&z&&ue.drawBuffers(S,N),ue.viewport(b),ue.scissor(B),ue.setScissorTest(G),oe){let be=De.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,F)}else if(fe){let be=De.get(S.texture),Ne=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,F||0,Ne)}H=-1},this.readRenderTargetPixels=function(S,L,F,z,N,oe,fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){ue.bindFramebuffer(U.FRAMEBUFFER,ye);try{let be=S.texture,Ne=be.format,Ae=be.type;if(Ne!==qt&&he.convert(Ne)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ce=Ae===Ri&&(xe.has("EXT_color_buffer_half_float")||Te.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ae!==Mn&&he.convert(Ae)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===xn&&(Te.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-z&&F>=0&&F<=S.height-N&&U.readPixels(L,F,z,N,he.convert(Ne),he.convert(Ae),oe)}finally{let be=A!==null?De.get(A).__webglFramebuffer:null;ue.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(S,L,F=0){let z=Math.pow(2,-F),N=Math.floor(L.image.width*z),oe=Math.floor(L.image.height*z);w.setTexture2D(L,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,S.x,S.y,N,oe),ue.unbindTexture()},this.copyTextureToTexture=function(S,L,F,z=0){let N=L.image.width,oe=L.image.height,fe=he.convert(F.format),ye=he.convert(F.type);w.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),L.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,S.x,S.y,N,oe,fe,ye,L.image.data):L.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,S.x,S.y,L.mipmaps[0].width,L.mipmaps[0].height,fe,L.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,S.x,S.y,fe,ye,L.image),z===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(S,L,F,z,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let oe=S.max.x-S.min.x+1,fe=S.max.y-S.min.y+1,ye=S.max.z-S.min.z+1,be=he.convert(z.format),Ne=he.convert(z.type),Ae;if(z.isData3DTexture)w.setTexture3D(z,0),Ae=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)w.setTexture2DArray(z,0),Ae=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);let Ce=U.getParameter(U.UNPACK_ROW_LENGTH),it=U.getParameter(U.UNPACK_IMAGE_HEIGHT),It=U.getParameter(U.UNPACK_SKIP_PIXELS),ht=U.getParameter(U.UNPACK_SKIP_ROWS),Qt=U.getParameter(U.UNPACK_SKIP_IMAGES),et=F.isCompressedTexture?F.mipmaps[N]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,et.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(Ae,N,L.x,L.y,L.z,oe,fe,ye,be,Ne,et.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ae,N,L.x,L.y,L.z,oe,fe,ye,be,et.data)):U.texSubImage3D(Ae,N,L.x,L.y,L.z,oe,fe,ye,be,Ne,et),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ce),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),U.pixelStorei(U.UNPACK_SKIP_PIXELS,It),U.pixelStorei(U.UNPACK_SKIP_ROWS,ht),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Qt),N===0&&z.generateMipmaps&&U.generateMipmap(Ae),ue.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),ue.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,ue.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ma?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===Os?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Bn:ul}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Bn?gt:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Jr=class extends Li{};Jr.prototype.isWebGL1Renderer=!0;var As=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ut=class s extends Ht{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],m=[],g=0,_=[],p=n/2,u=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(m,2));function M(){let E=new I,C=new I,T=0,A=(t-e)/n;for(let H=0;H<=r;H++){let y=[],b=H/r,B=b*(t-e)+e;for(let G=0;G<=i;G++){let ee=G/i,P=ee*l+o,D=Math.sin(P),V=Math.cos(P);C.x=B*D,C.y=-b*n+p,C.z=B*V,d.push(C.x,C.y,C.z),E.set(D,A,V).normalize(),f.push(E.x,E.y,E.z),m.push(ee,1-b),y.push(g++)}_.push(y)}for(let H=0;H<i;H++)for(let y=0;y<r;y++){let b=_[y][H],B=_[y+1][H],G=_[y+1][H+1],ee=_[y][H+1];h.push(b,B,ee),h.push(B,G,ee),T+=6}c.addGroup(u,T,0),u+=T}function x(E){let C=g,T=new ze,A=new I,H=0,y=E===!0?e:t,b=E===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),g++;let B=g;for(let G=0;G<=i;G++){let P=G/i*l+o,D=Math.cos(P),V=Math.sin(P);A.x=y*V,A.y=p*b,A.z=y*D,d.push(A.x,A.y,A.z),f.push(0,b,0),T.x=D*.5+.5,T.y=V*.5*b+.5,m.push(T.x,T.y),g++}for(let G=0;G<i;G++){let ee=C+G,P=B+G;E===!0?h.push(P,P+1,ee):h.push(P+1,P,ee),H+=3}c.addGroup(u,H,E===!0?1:2),u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},En=class s extends Ut{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kr=class s extends Ht{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let x=new I,E=new I,C=new I;for(let T=0;T<t.length;T+=3)m(t[T+0],x),m(t[T+1],E),m(t[T+2],C),l(x,E,C,M)}function l(M,x,E,C){let T=C+1,A=[];for(let H=0;H<=T;H++){A[H]=[];let y=M.clone().lerp(E,H/T),b=x.clone().lerp(E,H/T),B=T-H;for(let G=0;G<=B;G++)G===0&&H===T?A[H][G]=y:A[H][G]=y.clone().lerp(b,G/B)}for(let H=0;H<T;H++)for(let y=0;y<2*(T-H)-1;y++){let b=Math.floor(y/2);y%2===0?(f(A[H][b+1]),f(A[H+1][b]),f(A[H][b])):(f(A[H][b+1]),f(A[H+1][b+1]),f(A[H+1][b]))}}function c(M){let x=new I;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(M),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){let M=new I;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let E=p(M)/2/Math.PI+.5,C=u(M)/Math.PI+.5;a.push(E,1-C)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let x=a[M+0],E=a[M+2],C=a[M+4],T=Math.max(x,E,C),A=Math.min(x,E,C);T>.9&&A<.1&&(x<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),C<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,x){let E=M*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function g(){let M=new I,x=new I,E=new I,C=new I,T=new ze,A=new ze,H=new ze;for(let y=0,b=0;y<r.length;y+=9,b+=6){M.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),E.set(r[y+6],r[y+7],r[y+8]),T.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),H.set(a[b+4],a[b+5]),C.copy(M).add(x).add(E).divideScalar(3);let B=p(C);_(T,b+0,M,B),_(A,b+2,x,B),_(H,b+4,E,B)}}function _(M,x,E,C){C<0&&M.x===1&&(a[x]=M.x-1),E.x===0&&E.z===0&&(a[x]=C/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Cs=class s extends Kr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Tn=class s extends Ht{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],d=e,f=(t-e)/i,m=new I,g=new ze;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){let u=r+p/n*a;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<i;_++){let p=_*(n+1);for(let u=0;u<n;u++){let M=u+p,x=M,E=M+n+1,C=M+n+2,T=M+1;o.push(x,E,T),o.push(E,C,T)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var $t=class s extends Ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,f=new I,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){let M=[],x=u/n,E=0;u===0&&a===0?E=.5/t:u===n&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){let T=C/t;d.x=-e*Math.cos(i+T*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(i+T*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(T+E,1-x),M.push(c++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<t;M++){let x=h[u][M+1],E=h[u][M],C=h[u+1][M],T=h[u+1][M+1];(u!==0||a>0)&&m.push(x,E,T),(u!==n-1||l<Math.PI)&&m.push(E,C,T)}this.setIndex(m),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kn=class s extends Ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new I,d=new I,f=new I;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){let _=g/i*r,p=m/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){let _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,u=(i+1)*(m-1)+g,M=(i+1)*m+g;a.push(_,p,M),a.push(p,u,M)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var We=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function as(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Tp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var gi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qr=class extends gi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ao,endingEnd:ao}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case oo:r=e,o=2*t-n;break;case lo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oo:a=e,l=2*n-t;break;case lo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,u=-f*p+2*f*_-f*g,M=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-m)*p+(1.5+m)*_+.5*g,E=m*p-m*_;for(let C=0;C!==o;++C)r[C]=u*a[h+C]+M*a[c+C]+x*a[l+C]+E*a[d+C];return r}},jr=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},ea=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=as(t,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:as(e.times,Array),values:as(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ls:t=this.InterpolantFactoryMethodDiscrete;break;case cs:t=this.InterpolantFactoryMethodLinear;break;case tr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return cs;case this.InterpolantFactoryMethodSmooth:return tr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Tp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=cs;var Gn=class extends Zt{};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=ls;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends Zt{};ta.prototype.ValueTypeName="color";var na=class extends Zt{};na.prototype.ValueTypeName="number";var ia=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Di=class extends Zt{InterpolantFactoryMethodLinear(e){return new ia(this.times,this.values,this.getValueSize(),e)}};Di.prototype.ValueTypeName="quaternion";Di.prototype.DefaultInterpolation=cs;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends Zt{};Vn.prototype.ValueTypeName="string";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=ls;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends Zt{};sa.prototype.ValueTypeName="vector";var ra=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Ap=new ra,aa=class{constructor(e){this.manager=e!==void 0?e:Ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Tr=new pt,Ko=new I,Qo=new I,oa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ko),Qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qo),t.updateMatrixWorld(),Tr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var la=class extends oa{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new la}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ls=class extends Ps{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ds=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=jo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function jo(){return(typeof performance>"u"?Date:performance).now()}var _a="\\[\\]\\.:\\/",Rp=new RegExp("["+_a+"]","g"),xa="[^"+_a+"]",Cp="[^"+_a.replace("\\.","")+"]",Pp=/((?:WC+[\/:])*)/.source.replace("WC",xa),Ip=/(WCOD+)?/.source.replace("WCOD",Cp),Lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xa),Dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xa),Up=new RegExp("^"+Pp+Ip+Lp+Dp+"$"),Np=["material","materials","bones","map"],ca=class{constructor(e,t,n){let i=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ke=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rp,"")}static parseTrackName(e){let t=Up.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Np.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=ca;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qp=new Float32Array(1);var Us=class{constructor(e,t,n=0,i=1/0){this.ray=new xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Pi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ha(e,this,n,t),n.sort(el),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ha(e[i],this,n,t);return n.sort(el),n}};function el(s,e){return s.distance-e.distance}function ha(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)ha(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);function Op(s){let e=[],t={x:s[0].x,z:s[0].z};e.push({x:t.x,z:t.z});for(let n=1;n<s.length;n++){let i=s[n];for(;t.x!==i.x;)t.x+=Math.sign(i.x-t.x),e.push({x:t.x,z:t.z});for(;t.z!==i.z;)t.z+=Math.sign(i.z-t.z),e.push({x:t.x,z:t.z})}return e}function Fp(s){let e=0;for(let t=0;t<s.length-1;t++)e+=Math.abs(s[t+1].x-s[t].x)+Math.abs(s[t+1].z-s[t].z);return e}var Tt=[{id:"3001",name:"\u5C71\u53E3\u9632\u7EBF",chapter:1,gridW:28,gridH:20,startGold:200,baseHP:20,spotCount:12,dualPath:!1,paths:[[{x:0,z:4},{x:26,z:4},{x:26,z:9},{x:0,z:9},{x:0,z:14},{x:26,z:14}]],theme:{grass:"#5a8a3c",path:"#c4a46c",dirt:"#8b7355",water:"#4a90d9"}},{id:"3002",name:"\u68EE\u6797\u9698\u53E3",chapter:1,gridW:28,gridH:20,startGold:250,baseHP:20,spotCount:16,dualPath:!0,basePos:{x:27,z:9},paths:[[{x:0,z:3},{x:26,z:3},{x:26,z:9},{x:27,z:9}],[{x:0,z:15},{x:26,z:15},{x:26,z:9},{x:27,z:9}]],theme:{grass:"#4f8a3a",path:"#b89a5e",dirt:"#7d6347",water:"#3f86c4"}},{id:"3003",name:"\u77EE\u4EBA\u5821\u5792",chapter:1,gridW:28,gridH:20,startGold:300,baseHP:25,spotCount:15,dualPath:!1,paths:[[{x:0,z:3},{x:25,z:3},{x:25,z:8},{x:2,z:8},{x:2,z:15},{x:26,z:15}]],theme:{grass:"#6b7d3a",path:"#9c8a5e",dirt:"#6f5a3e",water:"#4a90d9"}},{id:"3004",name:"\u67AF\u9AA8\u5893\u5730",chapter:2,gridW:28,gridH:20,startGold:280,baseHP:20,spotCount:14,dualPath:!1,paths:[[{x:0,z:4},{x:26,z:4},{x:26,z:10},{x:1,z:10},{x:1,z:15},{x:26,z:15}]],theme:{grass:"#4a6b4a",path:"#8a8a7a",dirt:"#5a5a4a",water:"#3a6a6a"}},{id:"3005",name:"\u5E7D\u7075\u6E56\u6CCA",chapter:2,gridW:28,gridH:20,startGold:320,baseHP:20,spotCount:18,dualPath:!0,basePos:{x:27,z:10},paths:[[{x:0,z:2},{x:25,z:2},{x:25,z:10},{x:27,z:10}],[{x:0,z:17},{x:25,z:17},{x:25,z:10},{x:27,z:10}]],theme:{grass:"#3f5e55",path:"#7a8a85",dirt:"#4a5a55",water:"#3a7a8a"}},{id:"3006",name:"\u9ED1\u6697\u5854\u6797",chapter:2,gridW:28,gridH:20,startGold:350,baseHP:25,spotCount:16,dualPath:!1,paths:[[{x:0,z:3},{x:25,z:3},{x:25,z:9},{x:2,z:9},{x:2,z:16},{x:26,z:16}]],theme:{grass:"#3a4f3a",path:"#6a6a5a",dirt:"#3a3a2a",water:"#2a4a5a"}},{id:"3007",name:"\u7194\u5CA9\u901A\u9053",chapter:3,gridW:28,gridH:20,startGold:380,baseHP:20,spotCount:17,dualPath:!0,basePos:{x:27,z:10},paths:[[{x:0,z:3},{x:25,z:3},{x:25,z:10},{x:27,z:10}],[{x:0,z:16},{x:25,z:16},{x:25,z:10},{x:27,z:10}]],theme:{grass:"#6b4a3a",path:"#8a5a3a",dirt:"#5a3a2a",water:"#c44a2a"}},{id:"3008",name:"\u5730\u72F1\u4E4B\u95E8",chapter:3,gridW:30,gridH:20,startGold:400,baseHP:30,spotCount:18,dualPath:!1,paths:[[{x:0,z:3},{x:27,z:3},{x:27,z:9},{x:2,z:9},{x:2,z:16},{x:28,z:16}]],theme:{grass:"#5a3a3a",path:"#7a4a2a",dirt:"#4a2a1a",water:"#e0492a"}}],Bs=class{constructor(e){this.scene=e,this.mapGroup=new st,this.scene.add(this.mapGroup),this.gridW=0,this.gridH=0,this.paths=[],this.pathCellSet=new Set,this.towerSpots=[],this.groundMeshes=[],this.groundMesh=null,this.towerSpotMeshes=[],this.baseMesh=null,this.heroSpawn={x:0,z:0},this.basePos={x:0,z:0},this.theme=null,this.chapter=1,this.levelIndex=0,this.materials={}}reset(e){this.levelIndex=e||0,this.buildLevel(this.levelIndex)}buildLevel(e){for(;this.mapGroup.children.length>0;)this.mapGroup.remove(this.mapGroup.children[0]);this.groundMeshes=[],this.towerSpotMeshes=[],this.materials={};let t=Tt[e]||Tt[0];this.gridW=t.gridW,this.gridH=t.gridH,this.theme=t.theme,this.chapter=t.chapter,this.startGold=t.startGold,this.baseMaxHP=t.baseHP,this.paths=t.paths.map(n=>{let i=Op(n),r=i.map(a=>new I(a.x+.5,.05,a.z+.5));return{corners:n,cells:i,points:r,length:Fp(i)}}),this.pathCellSet=new Set;for(let n of this.paths)for(let i of n.cells)this.pathCellSet.add(i.x+","+i.z);this.basePos=t.basePos||this.paths[0].cells[this.paths[0].cells.length-1],this.heroSpawn=t.heroSpawn||this.computeHeroSpawn(),this.buildTerrain(),this.buildPaths(),this.buildTowerSpots(),this.buildBase(),this.buildDecorations()}computeHeroSpawn(){let e=this.basePos,t=[[1,0],[-1,0],[0,1],[0,-1]];for(let[n,i]of t){let r=e.x+n,a=e.z+i;if(r>=0&&r<this.gridW&&a>=0&&a<this.gridH&&!this.pathCellSet.has(r+","+a))return{x:r,z:a}}return{x:e.x,z:e.z}}getCenter(){return new I(this.gridW/2,0,this.gridH/2)}getHeroSpawn(){return new I(this.heroSpawn.x+.5,.2,this.heroSpawn.z+.5)}getPathWorldPoints(e=0){return(this.paths[e]||this.paths[0]).points}getPathLength(e=0){return(this.paths[e]||this.paths[0]).length}getTowerSpotWorldPos(e){let t=this.towerSpots[e];return new I(t.x+.5,.3,t.z+.5)}buildTerrain(){let e=new We({color:this.theme.grass,roughness:.85}),t=new We({color:this.theme.dirt,roughness:.9});this.materials.grass=e,this.materials.dirt=t;let n=new mt(this.gridW+4,.5,this.gridH+4),i=new pe(n,t);i.position.set(this.gridW/2,-.5,this.gridH/2),i.receiveShadow=!0,this.mapGroup.add(i);let r=new mt(.98,.2,.98);for(let o=0;o<this.gridW;o++)for(let l=0;l<this.gridH;l++){let c=this.pathCellSet.has(o+","+l),h=this.towerSpots.some(m=>m.x===o&&m.z===l),d=c||h?t:e,f=new pe(r,d);f.position.set(o+.5,.1,l+.5),f.receiveShadow=!0,f.castShadow=!0,this.mapGroup.add(f),this.groundMeshes.push(f)}let a=new un(this.gridW,this.gridH);a.rotateX(-Math.PI/2),this.groundMesh=new pe(a,new at({visible:!1})),this.groundMesh.position.set(this.gridW/2,.2,this.gridH/2),this.mapGroup.add(this.groundMesh)}buildPaths(){let e=new We({color:this.theme.path,roughness:.7});this.materials.path=e;for(let t of this.paths)for(let n of t.cells){let i=new mt(.9,.21,.9),r=new pe(i,e);r.position.set(n.x+.5,.2,n.z+.5),r.receiveShadow=!0,this.mapGroup.add(r)}}buildTowerSpots(){let e=[],t=[[1,0],[-1,0],[0,1],[0,-1]];for(let c=0;c<this.gridW;c++)for(let h=0;h<this.gridH;h++){if(this.pathCellSet.has(c+","+h))continue;t.some(([f,m])=>this.pathCellSet.has(c+f+","+(h+m)))&&e.push({x:c,z:h})}let n=Tt[this.levelIndex].spotCount||16,i=[];for(let c of e)if(!i.some(d=>Math.abs(d.x-c.x)+Math.abs(d.z-c.z)<2)&&(i.push(c),i.length>=n))break;this.towerSpots=i;let r=new Ut(.4,.45,.3,6),a=new We({color:"#e8d5a3",roughness:.5,metalness:.2});this.materials.towerSpot=a;let o=new Tn(.35,.45,6),l=new at({color:"#ffff00",side:dt,transparent:!0,opacity:.3});this.towerSpots.forEach((c,h)=>{let d=new pe(r,a);d.position.set(c.x+.5,.3,c.z+.5),d.userData.index=h,d.castShadow=!0,this.mapGroup.add(d),this.towerSpotMeshes.push(d);let f=new pe(o,l);f.rotation.x=-Math.PI/2,f.position.set(c.x+.5,.46,c.z+.5),f.userData.index=h,f.visible=!1,this.mapGroup.add(f),d.userData.highlightRing=f})}buildBase(){let e=new st,t=new We({color:"#d4c5a9",roughness:.6}),n=new We({color:"#c0392b",roughness:.5}),i=new mt(1.5,1.5,1.5),r=new pe(i,t);r.position.y=.75,r.castShadow=!0,e.add(r);let a=new Ut(.35,.4,1.8,8),o=new pe(a,t);o.position.y=.9,o.castShadow=!0,e.add(o);let l=new En(.55,.8,8),c=new pe(l,n);c.position.y=1.9,c.castShadow=!0,e.add(c);let h=new Ut(.05,.05,1.2,6),d=new pe(h,new We({color:"#5d4e37"}));d.position.y=2.2,e.add(d);let f=new un(.4,.25),m=new pe(f,new We({color:"#e74c3c",side:dt}));m.position.set(.2,2.7,0),e.add(m),e.position.set(this.basePos.x+.5,0,this.basePos.z+.5),this.mapGroup.add(e),this.baseMesh=e}buildDecorations(){let e=[];for(let t=0;t<30;t++){let n=Math.floor(Math.random()*this.gridW),i=Math.floor(Math.random()*this.gridH);!this.pathCellSet.has(n+","+i)&&!this.towerSpots.some(r=>r.x===n&&r.z===i)&&(e.some(a=>Math.abs(a.x-n)<2&&Math.abs(a.z-i)<2)||(e.push({x:n,z:i}),this.buildTree(n+.5,i+.5)))}for(let t=0;t<12;t++){let n=Math.floor(Math.random()*this.gridW),i=Math.floor(Math.random()*this.gridH);!this.pathCellSet.has(n+","+i)&&!this.towerSpots.some(r=>r.x===n&&r.z===i)&&this.buildRock(n+.5,i+.5)}}buildTree(e,t){let n=new st,i=new We({color:"#6b4226",roughness:.8}),r=new We({color:"#3d7a28",roughness:.7}),a=new pe(new Ut(.12,.18,1.2,6),i);a.position.y=.6,a.castShadow=!0,n.add(a);let o=new pe(new En(.45,.9,6),r);o.position.y=1.15,o.castShadow=!0,n.add(o);let l=new pe(new En(.35,.7,6),r);l.position.y=1.6,l.castShadow=!0,n.add(l),n.position.set(e,.2,t),this.mapGroup.add(n)}buildRock(e,t){let n=new We({color:"#888888",roughness:.8}),i=.2+Math.random()*.3,r=new Cs(i,1),a=new pe(r,n);a.position.set(e,i*.5,t),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),a.castShadow=!0,a.receiveShadow=!0,this.mapGroup.add(a)}isPathCell(e,t){return this.pathCellSet.has(e+","+t)}};var kt={arrow:{name:"\u7BAD\u5854",icon:"\u{1F3F9}",levels:[{cost:50,damage:15,atkSpeed:1.2,range:3,charge:.2,pierce:0,multi:1,color:"#4a9e4a",desc:"\u57FA\u7840\u7269\u7406\u5854\uFF0C\u53EF\u653B\u51FB\u98DE\u884C"},{cost:50,damage:21,atkSpeed:1.32,range:3.5,charge:.2,pierce:1,multi:1,color:"#5cb85c",desc:"\u7BAD\u77E2\u7A7F\u900F1\u4E2A\u76EE\u6807\uFF0C\u4F24\u5BB3\u63D0\u5347"},{cost:100,damage:27,atkSpeed:1.44,range:4,charge:.2,pierce:1,multi:2,color:"#6fd96f",desc:"\u591A\u91CD\u5C04\u51FB\uFF0C\u540C\u65F6\u653B\u51FB2\u4E2A\u76EE\u6807"}],damageType:"physical",targetsAir:!0},magic:{name:"\u9B54\u6CD5\u5854",icon:"\u{1F52E}",levels:[{cost:80,damage:25,atkSpeed:.8,range:2.5,charge:.3,resistPen:.2,undeadBonus:.2,splashRadius:0,splashDamage:0,slowPct:0,color:"#9b59b6",desc:"\u9B54\u6CD5\u4F24\u5BB3\uFF0C\u65E0\u89C620%\u6297\u6027\uFF0C\u5BF9\u4EA1\u7075+20%"},{cost:80,damage:35,atkSpeed:.88,range:3,charge:.3,resistPen:.2,undeadBonus:.2,splashRadius:.5,splashDamage:.5,slowPct:0,color:"#af7ac5",desc:"\u6E85\u5C04\u4F24\u5BB3\uFF0C0.5\u683C\u8303\u56F4"},{cost:160,damage:45,atkSpeed:.96,range:3.5,charge:.3,resistPen:.2,undeadBonus:.2,splashRadius:.5,splashDamage:.5,slowPct:.15,color:"#c39bd3",desc:"\u8303\u56F4\u9B54\u6CD5\u7206\u53D1\uFF0C\u547D\u4E2D\u51CF\u901F15%\u6301\u7EED2\u79D2"}],damageType:"magic",targetsAir:!0},cannon:{name:"\u70AE\u5854",icon:"\u{1F4A3}",levels:[{cost:100,damage:40,atkSpeed:.5,range:2.5,charge:.4,aoe:.8,armorShred:0,burnDps:0,color:"#e74c3c",desc:"AOE\u8303\u56F4\u4F24\u5BB3\uFF0C\u4EC5\u5730\u9762"},{cost:100,damage:56,atkSpeed:.55,range:3,charge:.4,aoe:.8,armorShred:.3,burnDps:0,color:"#ec7063",desc:"\u7834\u7532\uFF0C\u76EE\u6807\u62A4\u7532-30%\u6301\u7EED3\u79D2"},{cost:200,damage:72,atkSpeed:.6,range:3.5,charge:.4,aoe:.8,armorShred:.3,burnDps:8,color:"#f1948a",desc:"\u7194\u5CA9\u70AE\u5F39\uFF0C\u707C\u70E78\u70B9/\u79D2\u6301\u7EED3\u79D2"}],damageType:"physical",targetsAir:!1,aoe:.8},ice:{name:"\u51B0\u971C\u5854",icon:"\u2744\uFE0F",levels:[{cost:60,damage:8,atkSpeed:1,range:2,charge:.15,slowPct:.3,freezeChance:0,freezePulse:!1,color:"#3498db",desc:"\u51CF\u901F30%\uFF0C\u63A7\u5236\u8F85\u52A9"},{cost:60,damage:11,atkSpeed:1.1,range:2.5,charge:.15,slowPct:.45,freezeChance:.1,freezePulse:!1,color:"#5dade2",desc:"\u51CF\u901F45%\uFF0C10%\u51BB\u7ED31\u79D2"},{cost:120,damage:14,atkSpeed:1.2,range:3,charge:.15,slowPct:.45,freezeChance:0,freezePulse:!0,color:"#85c1e9",desc:"\u8303\u56F4\u51B0\u51BB\uFF0C\u6BCF4\u79D2\u51BB\u7ED3\u8303\u56F4\u5185\u5730\u9762\u602A\u72691\u79D2"}],damageType:"magic",targetsAir:!1}},zs=class{constructor(e,t){this.scene=e,this.game=t,this.towerGroup=new st,this.scene.add(this.towerGroup),this.projectileGroup=new st,this.scene.add(this.projectileGroup),this.towers=[],this.projectiles=[],this.selectedTower=null,this.towerDefs=kt}reset(){for(;this.towerGroup.children.length>0;)this.towerGroup.remove(this.towerGroup.children[0]);for(;this.projectileGroup.children.length>0;)this.projectileGroup.remove(this.projectileGroup.children[0]);this.towers=[],this.projectiles=[],this.selectedTower=null}getTowerAt(e){return this.towers.find(t=>t.spotIndex===e)||null}getTowerDef(e){return kt[e]}selectTower(e){return this.selectedTower=this.getTowerAt(e),this.selectedTower}deselectTower(){this.selectedTower=null}canPlaceTower(e,t){if(this.getTowerAt(e))return!1;let n=kt[t];return n?this.game.gold>=n.levels[0].cost:!1}placeTower(e,t){if(!this.canPlaceTower(e,t))return!1;let i=kt[t].levels[0].cost;if(!this.game.spendGold(i))return!1;let r=this.game.map.getTowerSpotWorldPos(e),a=this.buildTowerMesh(t,1,r);return this.towerGroup.add(a),this.towers.push({spotIndex:e,type:t,level:1,mesh:a,pos:r,cooldown:0,chargeTimer:0,target:null,stunDuration:0,atkSpeedMul:1,atkSpeedMulTimer:0,freezePulseTimer:4,expiry:0,totalInvested:i}),!0}addTemporaryTower(e,t,n=2,i=15){if(!kt[e])return null;let a=this.buildTowerMesh(e,n,t);this.towerGroup.add(a);let o={spotIndex:-1,cell:{x:Math.round(t.x-.5),z:Math.round(t.z-.5)},type:e,level:n,mesh:a,pos:t.clone(),cooldown:0,chargeTimer:0,target:null,stunDuration:0,atkSpeedMul:1,atkSpeedMulTimer:0,freezePulseTimer:4,expiry:i,totalInvested:0,temporary:!0};return this.towers.push(o),o}upgradeTower(e){let t=this.getTowerAt(e);if(!t||t.level>=3)return!1;let i=kt[t.type].levels[t.level].cost;if(!this.game.spendGold(i))return!1;t.level++,t.totalInvested+=i,this.towerGroup.remove(t.mesh);let r=this.buildTowerMesh(t.type,t.level,t.pos);return this.towerGroup.add(r),t.mesh=r,this.selectedTower=t,!0}sellTower(e){let t=this.getTowerAt(e);if(!t)return!1;let n=Math.floor(t.totalInvested*.7);return this.game.addGold(n),this.towerGroup.remove(t.mesh),this.towers=this.towers.filter(i=>i!==t),this.selectedTower===t&&(this.selectedTower=null),!0}sellTowerAt(e){let t=this.game.map.getTowerSpot(e);return t===null?!1:this.sellTower(t)}buildTowerMesh(e,t,n){let r=kt[e].levels[t-1],a=new st,o=new Ut(.35,.4,.3,8),l=new We({color:"#888888",roughness:.5,metalness:.3}),c=new pe(o,l);c.position.y=.15,c.castShadow=!0,a.add(c);let h=.6+t*.2,d=new Ut(.25,.3,h,8),f=new We({color:r.color,roughness:.4,metalness:.1}),m=new pe(d,f);m.position.y=.3+h/2,m.castShadow=!0,a.add(m);let g=new $t(.18,8,6),_=new We({color:r.color,roughness:.3,emissive:r.color,emissiveIntensity:.2}),p=new pe(g,_);if(p.position.y=.3+h+.15,a.add(p),t>=2){let u=new kn(.32,.05,6,8),M=new pe(u,new We({color:"#ffd700",roughness:.3,metalness:.7}));M.rotation.x=Math.PI/2,M.position.y=.3+h/2,a.add(M)}if(t>=3){let u=new pe(new kn(.38,.04,6,8),new We({color:"#ff4444",roughness:.3,emissive:"#ff4444",emissiveIntensity:.3}));u.rotation.x=Math.PI/2,u.position.y=.3+h,a.add(u)}return a.position.copy(n),a.userData={towerType:e,towerLevel:t},a}update(e){let t=this.game.monsterManager.monsters;for(let n=this.towers.length-1;n>=0;n--){let i=this.towers[n],r=kt[i.type],a=r.levels[i.level-1];if(i.expiry>0&&(i.expiry-=e,i.expiry<=0)){this.towerGroup.remove(i.mesh),this.towers.splice(n,1);continue}if(i.stunDuration>0){i.stunDuration-=e;continue}if(i.atkSpeedMulTimer>0&&(i.atkSpeedMulTimer-=e,i.atkSpeedMulTimer<=0&&(i.atkSpeedMul=1)),i.cooldown-=e,i.chargeTimer-=e,(!i.target||i.target.dead||!this.isInRange(i,i.target,a.range))&&(i.target=this.findTarget(i,t,r,a.range)),i.type==="ice"&&a.freezePulse&&(i.freezePulseTimer-=e,i.freezePulseTimer<=0)){i.freezePulseTimer=4;for(let o of t)o.dead||o.flying||i.pos.distanceTo(o.mesh.position)<=a.range+.3&&this.game.monsterManager.applyFreeze(o,1)}i.target&&i.cooldown<=0&&i.chargeTimer<=0&&(this.attack(i,i.target,r,a),i.cooldown=1/(a.atkSpeed*i.atkSpeedMul),i.chargeTimer=a.charge||0)}this.updateProjectiles(e)}findTarget(e,t,n,i){let r=null,a=-1;for(let o of t)if(!(o.dead||!n.targetsAir&&o.flying||e.pos.distanceTo(o.mesh.position)>i)){if(!r){r=o;continue}switch(e.type){case"arrow":case"ice":o.pathProgress>r.pathProgress&&(r=o);break;case"magic":o.hp>r.hp&&(r=o);break;case"cannon":{let c=0;for(let h of t)h.dead||h.flying||o.mesh.position.distanceTo(h.mesh.position)<=1.2&&c++;c>a&&(r=o,a=c);break}}}return r}findTopTargets(e,t,n,i,r){let a=[];for(let o of e)o.dead||!t.targetsAir&&o.flying||r.pos.distanceTo(o.mesh.position)>n+.3||a.push(o);return a.sort((o,l)=>l.pathProgress-o.pathProgress),a.slice(0,i)}isInRange(e,t,n){return e.pos.distanceTo(t.mesh.position)<=n+.3}attack(e,t,n,i){let r=this.game.monsterManager.monsters;if(e.type==="arrow"&&i.multi>1){let a=this.findTopTargets(r,n,i.range,i.multi,e);for(let o of a)this.createProjectile(e.pos.clone(),o,e.type,i.damage,0,i,n);return}if(e.type==="cannon"){this.createProjectile(e.pos.clone(),t,e.type,i.damage,n.aoe||.8,i,n);return}this.createProjectile(e.pos.clone(),t,e.type,i.damage,0,i,n)}createProjectile(e,t,n,i,r,a,o){let l=new $t(.1,6,4),c="#ffff00";switch(n){case"arrow":c="#f1c40f";break;case"magic":c="#9b59b6";break;case"cannon":c="#e74c3c";break;case"ice":c="#3498db";break}let h=new at({color:c}),d=new pe(l,h);d.position.copy(e),d.position.y+=.5,this.projectileGroup.add(d),this.projectiles.push({mesh:d,from:e.clone(),target:t,damage:i,aoe:r,type:n,speed:n==="cannon"?6:12,instant:n==="ice",progress:0,startPos:e.clone(),pierceLeft:n==="arrow"&&a&&a.pierce||0,hitIds:[],splashRadius:n==="magic"&&a&&a.splashRadius||0,splashDamage:n==="magic"&&a&&a.splashDamage||0,slowPct:(n==="ice"||n==="magic")&&a&&a.slowPct||0,slowDuration:2,freezeChance:n==="ice"&&a&&a.freezeChance||0,freezeDuration:1,armorShred:n==="cannon"&&a&&a.armorShred||0,armorShredDuration:3,burnDps:n==="cannon"&&a&&a.burnDps||0,burnDuration:3,resistPen:n==="magic"&&a&&a.resistPen||0,undeadBonus:n==="magic"&&a&&a.undeadBonus||0,damageType:o?o.damageType:n==="magic"?"magic":"physical"})}updateProjectiles(e){for(let t=this.projectiles.length-1;t>=0;t--){let n=this.projectiles[t];if(n.instant){this.dealDamage(n),this.projectileGroup.remove(n.mesh),this.projectiles.splice(t,1);continue}if(!n.target||n.target.dead){this.projectileGroup.remove(n.mesh),this.projectiles.splice(t,1);continue}let i=n.target.mesh.position.clone();if(i.y+=.5,n.mesh.position.distanceTo(i)<.3){if(this.dealDamage(n),n.pierceLeft>0){n.pierceLeft--,n.hitIds.push(n.target.id);let a=this.findNextPierceTarget(n);if(a){n.target=a;continue}}this.projectileGroup.remove(n.mesh),this.projectiles.splice(t,1)}else{let a=i.clone().sub(n.mesh.position).normalize(),o=n.speed*e;n.type==="cannon"?(n.progress+=o/Math.max(.01,n.startPos.distanceTo(i)),n.mesh.position.lerpVectors(n.startPos,i,Math.min(n.progress,1)),n.mesh.position.y+=Math.sin(n.progress*Math.PI)*2):n.mesh.position.add(a.multiplyScalar(o))}}}findNextPierceTarget(e){let t=kt[e.type];return this.game.monsterManager.monsters.filter(i=>!i.dead&&!e.hitIds.includes(i.id)).filter(i=>t.targetsAir||!i.flying).sort((i,r)=>r.pathProgress-i.pathProgress)[0]||null}dealDamage(e){let t=this.game.monsterManager,n=e.damageType,i={resistPen:e.resistPen||0,undeadBonus:e.undeadBonus||0},r=(a,o)=>{a.dead||a.flying&&e.type==="cannon"||(t.damageMonster(a,o,n,i),e.slowPct&&t.applySlow(a,e.slowPct,e.slowDuration||2,{magic:e.type==="magic"}),e.type==="ice"&&e.freezeChance>0&&Math.random()<e.freezeChance&&t.applyFreeze(a,e.freezeDuration||1),e.armorShred&&(a.armorShred=Math.max(a.armorShred||0,e.armorShred),a.armorShredDuration=Math.max(a.armorShredDuration||0,e.armorShredDuration||3)),e.burnDps&&t.applyBurn(a,e.burnDps,e.burnDuration||3))};if(e.aoe>0){for(let a of t.monsters)a.dead||a.flying&&e.type==="cannon"||e.mesh.position.distanceTo(a.mesh.position)<=e.aoe&&r(a,e.damage);return}if(e.target&&!e.target.dead&&r(e.target,e.damage),e.splashRadius>0)for(let a of t.monsters)a===e.target||a.dead||e.mesh.position.distanceTo(a.mesh.position)<=e.splashRadius&&r(a,e.damage*(e.splashDamage||.5))}stunTowersWithin(e,t,n){let i=0;for(let r of this.towers)r.pos.distanceTo(e)<=t&&(r.stunDuration=Math.max(r.stunDuration||0,n||2),i++);return i}slowTowersWithin(e,t,n,i){let r=0;for(let a of this.towers)a.pos.distanceTo(e)<=t&&(a.atkSpeedMul=1-(n||.5),a.atkSpeedMulTimer=Math.max(a.atkSpeedMulTimer||0,i||3),r++);return r}showTowerMenu(e){let t=this.getTowerAt(e);return t?(this.selectedTower=t,{spotIndex:t.spotIndex,type:t.type,level:t.level,totalInvested:t.totalInvested,canUpgrade:t.level<3,upgradeCost:t.level<3?kt[t.type].levels[t.level].cost:0,sellRefund:Math.floor(t.totalInvested*.7),def:kt[t.type],levelDef:kt[t.type].levels[t.level-1]}):null}hideTowerMenu(){this.selectedTower=null}updateVisuals(e){for(let t of this.towers)if(t.target&&!t.target.dead){let n=t.target.mesh.position.clone().sub(t.pos),i=Math.atan2(n.x,n.z);t.mesh.rotation.y+=(i-t.mesh.rotation.y)*5*e}}};var xi={goblin:{name:"\u54E5\u5E03\u6797",hp:80,speed:1.8,armor:0,magicResist:0,reward:8,livesCost:1,color:"#4caf50",size:[.25,.5,.25],flying:!1},orc:{name:"\u517D\u4EBA\u5C0F\u5175",hp:100,speed:1.5,armor:10,magicResist:0,reward:10,livesCost:1,color:"#2e7d32",size:[.35,.7,.35],flying:!1},wolfRider:{name:"\u72FC\u9A91\u5175",hp:250,speed:2,armor:15,magicResist:5,reward:40,livesCost:2,color:"#795548",size:[.35,.6,.5],flying:!1},shadow:{name:"\u6697\u5F71\u523A\u5BA2",hp:200,speed:2.2,armor:10,magicResist:10,reward:35,livesCost:2,color:"#4a148c",size:[.25,.5,.25],flying:!1},gargoyle:{name:"\u77F3\u50CF\u9B3C",hp:120,speed:1.8,armor:5,magicResist:0,reward:15,livesCost:1,color:"#607d8b",size:[.4,.5,.4],flying:!0},troll:{name:"\u5DE8\u9B54",hp:300,speed:1.2,armor:20,magicResist:10,reward:50,livesCost:3,color:"#8d6e63",size:[.45,.9,.45],flying:!1},orcCaptain:{name:"\u517D\u4EBA\u961F\u957F",hp:3e3,speed:1,armor:50,magicResist:30,reward:300,livesCost:10,color:"#bf360c",size:[.5,1,.5],flying:!1,isBoss:!0,bossSkill:{type:"stunTowers",name:"\u9707\u5730\u7729\u6655",cooldown:10,firstDelay:5,warning:1,radius:3,duration:2}},fastGoblin:{name:"\u75BE\u98CE\u54E5\u5E03\u6797",hp:60,speed:4,armor:0,magicResist:0,reward:8,livesCost:1,color:"#66bb6a",size:[.2,.4,.2],flying:!1},skeleton:{name:"\u9AB7\u9AC5\u6218\u58EB",hp:90,speed:1.4,armor:5,magicResist:0,reward:12,livesCost:1,color:"#e0e0e0",size:[.3,.6,.3],flying:!1,undead:!0},zombie:{name:"\u50F5\u5C38",hp:130,speed:1.2,armor:5,magicResist:0,reward:10,livesCost:1,color:"#558b2f",size:[.3,.6,.3],flying:!1,undead:!0},lich:{name:"\u5DEB\u5996\u5B66\u5F92",hp:110,speed:1.8,armor:0,magicResist:30,reward:22,livesCost:1,color:"#1a237e",size:[.3,.6,.3],flying:!1,undead:!0},stoneGolem:{name:"\u77F3\u5080\u5121",hp:400,speed:.8,armor:40,magicResist:15,reward:40,livesCost:3,color:"#9e9e9e",size:[.5,1,.5],flying:!1,undead:!0},ghost:{name:"\u5E7D\u7075",hp:100,speed:2.2,armor:0,magicResist:20,reward:18,livesCost:1,color:"#b0bec5",size:[.3,.5,.3],flying:!0,undead:!0},skeletonKing:{name:"\u9AB7\u9AC5\u738B",hp:4e3,speed:1,armor:50,magicResist:30,reward:500,livesCost:10,color:"#b71c1c",size:[.6,1.4,.6],flying:!1,isBoss:!0,undead:!0,bossSkill:{type:"summon",name:"\u53EC\u5524\u9AB7\u9AC5",cooldown:5,firstDelay:3,summon:{type:"skeleton",count:2,hpScale:.8},maxSummons:6}},demonImp:{name:"\u6076\u9B54\u5C0F\u9B3C",hp:90,speed:2.5,armor:0,magicResist:25,reward:15,livesCost:1,color:"#d32f2f",size:[.25,.45,.25],flying:!1},hellHound:{name:"\u5730\u72F1\u72AC",hp:180,speed:3,armor:10,magicResist:15,reward:25,livesCost:2,color:"#212121",size:[.4,.5,.6],flying:!1},heavyDemon:{name:"\u91CD\u7532\u6076\u9B54",hp:520,speed:1,armor:50,magicResist:25,reward:60,livesCost:4,color:"#b71c1c",size:[.5,1.1,.5],flying:!1},wyvern:{name:"\u53CC\u8DB3\u98DE\u9F99",hp:240,speed:2,armor:10,magicResist:10,reward:30,livesCost:2,color:"#6a1b9a",size:[.45,.5,.5],flying:!0},hellGolem:{name:"\u5730\u72F1\u9B54\u50CF",hp:5200,speed:.9,armor:60,magicResist:40,reward:800,livesCost:12,color:"#ff5722",size:[.7,1.6,.7],flying:!1,isBoss:!0,bossSkill:{type:"slowTowers",name:"\u706B\u7130\u51B2\u51FB\u6CE2",cooldown:8,firstDelay:6,warning:2,radius:2.5,duration:3,slowPct:.5}}};var Hs=class{constructor(e,t){this.scene=e,this.game=t||null,this.monsterGroup=new st,this.scene.add(this.monsterGroup),this.monsters=[],this.paths=[],this.onMonsterKilled=null,this.onMonsterReachBase=null}reset(e){for(;this.monsterGroup.children.length>0;)this.monsterGroup.remove(this.monsterGroup.children[0]);this.monsters=[],this.paths=e&&e.length?e:[]}spawnMonster(e,t=0,n=1,i={}){let r=xi[e];if(!r)return null;let a=this.paths[t]||this.paths[0];if(!a)return null;let o=this.buildMonsterMesh(r),l=a.points[0].clone();o.position.copy(l),this.monsterGroup.add(o);let c=Math.round(r.hp*n),h={id:Date.now()+Math.random(),type:e,def:r,mesh:o,hp:c,maxHp:c,speed:r.speed,pathProgress:0,pathPoints:a.points,pathLength:a.length,dead:!1,flying:r.flying||!1,slowAmount:0,slowDuration:0,frozen:!1,frozenDuration:0,stunned:!1,stunDuration:0,armorShred:0,armorShredDuration:0,burnStacks:[],isSummon:i.isSummon||!1,entryIndex:t,hpScale:n,reward:r.reward,livesCost:r.livesCost||1,isBoss:r.isBoss||!1,bossSkillTimer:r.isBoss&&r.bossSkill?r.bossSkill.firstDelay:0,bossWarningTimer:0,hpBar:null};i.startProgress!=null&&(h.pathProgress=Math.max(0,Math.min(i.startProgress,a.length-.1)),h.mesh.position.copy(this.getPositionOnPath(a.points,h.pathProgress)));let d=this.buildHpBar(h);return o.add(d),h.hpBar=d,this.monsters.push(h),h}buildMonsterMesh(e){let t=new st,n=e.size,i=new We({color:e.color,roughness:.5}),r=new mt(n[0],n[1]*.6,n[2]),a=new pe(r,i);a.position.y=n[1]*.4,a.castShadow=!0,t.add(a);let o=n[0]*.8,l=new mt(o,o,o),c=new pe(l,i);c.position.y=n[1]*.75,c.castShadow=!0,t.add(c);let h=new mt(.06,.06,.06),d=new at({color:e.isBoss?"#ff0000":"#ffffff"}),f=new pe(h,d);f.position.set(-o*.2,n[1]*.78,o*.5),t.add(f);let m=new pe(h,d);if(m.position.set(o*.2,n[1]*.78,o*.5),t.add(m),e.flying){let g=new mt(.05,.3,.15),_=new We({color:"#757575",roughness:.6}),p=new pe(g,_);p.position.set(-n[0]*.6,n[1]*.5,0),p.rotation.z=.3,t.add(p);let u=new pe(g,_);u.position.set(n[0]*.6,n[1]*.5,0),u.rotation.z=-.3,t.add(u)}if(e.isBoss){let g=new Tn(.4,.5,16),_=new at({color:"#ff0000",side:dt,transparent:!0,opacity:.4}),p=new pe(g,_);p.rotation.x=-Math.PI/2,p.position.y=.1,t.add(p),t.userData.aura=p}return t}buildHpBar(e){let t=new st,n=new un(.5,.06),i=new at({color:"#333333",side:dt}),r=new pe(n,i);t.add(r);let a=new un(.48,.04),o=new at({color:"#4caf50",side:dt}),l=new pe(a,o);return l.position.z=.01,l.position.x=-.01,t.add(l),t.userData.fill=l,t.userData.fillMat=o,t.position.y=e.def.size[1]+.15,t}update(e){for(let t=this.monsters.length-1;t>=0;t--){let n=this.monsters[t];if(n.dead){this.monsterGroup.remove(n.mesh),this.monsters.splice(t,1);continue}n.frozen&&n.frozenDuration>0&&(n.frozenDuration-=e,n.frozenDuration<=0&&(n.frozen=!1,n.frozenDuration=0)),n.stunDuration>0&&(n.stunDuration-=e,n.stunDuration<=0&&(n.stunned=!1,n.stunDuration=0)),n.armorShredDuration>0&&(n.armorShredDuration-=e,n.armorShredDuration<=0&&(n.armorShred=0,n.armorShredDuration=0)),this.updateBurn(n,e),n.isBoss&&this.updateBossSkill(n,e);let i=n.speed;if(n.frozenDuration>0||n.stunDuration>0?i=0:n.slowDuration>0&&(n.slowDuration-=e,i*=1-n.slowAmount,n.slowDuration<=0&&(n.slowAmount=0)),n.pathProgress+=i*e,n.pathProgress>=n.pathLength){n.dead=!0,this.onMonsterReachBase&&this.onMonsterReachBase(n);continue}n.mesh.position.copy(this.getPositionOnPath(n.pathPoints,n.pathProgress)),n.flying&&(n.mesh.position.y+=.5+Math.sin(n.pathProgress*2+n.id)*.15),this.updateHpBar(n)}}updateBurn(e,t){for(let n=e.burnStacks.length-1;n>=0;n--){let i=e.burnStacks[n];if(i.timer-=t,i.tick-=t,i.tick<=0&&(i.tick=1,this.damageMonster(e,i.dps,"magic",{silent:!0}),e.dead))return;i.timer<=0&&e.burnStacks.splice(n,1)}}applySlow(e,t,n,i={}){!e||e.dead||e.flying&&!i.magic||(e.slowAmount=Math.max(e.slowAmount||0,t),e.slowDuration=Math.max(e.slowDuration||0,n))}applyBurn(e,t,n){!e||e.dead||e.burnStacks.push({dps:t,timer:n,tick:1})}applyFreeze(e,t){!e||e.dead||e.isBoss||(e.frozen=!0,e.frozenDuration=Math.max(e.frozenDuration||0,t),e.slowAmount=0,e.slowDuration=0)}applyStun(e,t){!e||e.dead||e.isBoss||(e.stunned=!0,e.stunDuration=Math.max(e.stunDuration||0,t))}getSummonCount(){return this.monsters.filter(e=>e.isSummon&&!e.dead).length}updateBossSkill(e,t){let n=e.def.bossSkill;if(n){if(e.bossWarningTimer>0){e.bossWarningTimer-=t,e.bossWarningTimer<=0&&(this.executeBossSkill(e,n),e.bossSkillTimer=n.cooldown,this.game&&this.game.onBossSkillEnd&&this.game.onBossSkillEnd(e,n));return}e.bossSkillTimer-=t,e.bossSkillTimer<=0&&(n.warning>0?(e.bossWarningTimer=n.warning,this.game&&this.game.onBossWarning&&this.game.onBossWarning(e,n)):(this.executeBossSkill(e,n),e.bossSkillTimer=n.cooldown))}}executeBossSkill(e,t){if(this.game){if(t.type==="stunTowers"){let n=this.game.towerManager.stunTowersWithin(e.mesh.position,t.radius,t.duration);this.game.showMessage&&this.game.showMessage(`${e.def.name} \u9707\u5730\uFF01${n} \u5EA7\u9632\u5FA1\u5854\u88AB\u7729\u6655`,1800)}else if(t.type==="slowTowers"){let n=this.game.towerManager.slowTowersWithin(e.mesh.position,t.radius,t.slowPct,t.duration);this.game.showMessage&&this.game.showMessage(`${e.def.name} \u706B\u7130\u51B2\u51FB\uFF01${n} \u5EA7\u9632\u5FA1\u5854\u653B\u901F\u964D\u4F4E`,1800)}else if(t.type==="summon"){if(this.getSummonCount()>=t.maxSummons)return;let i=t.summon;for(let r=0;r<i.count&&!(this.getSummonCount()>=t.maxSummons);r++)this.spawnMonster(i.type,e.entryIndex,(e.hpScale||1)*i.hpScale,{isSummon:!0,startProgress:Math.max(0,e.pathProgress-1)});this.game.showMessage&&this.game.showMessage(`${e.def.name} \u53EC\u5524\u4E86\u5C0F\u9AB7\u9AC5\uFF01`,1500)}}}getPositionOnPath(e,t){let n=0;for(let i=0;i<e.length-1;i++){let r=e[i].distanceTo(e[i+1]);if(n+r>=t){let a=(t-n)/r;return new I().lerpVectors(e[i],e[i+1],Math.max(0,Math.min(1,a)))}n+=r}return e[e.length-1].clone()}updateHpBar(e){if(!e.hpBar)return;let t=e.hp/e.maxHp,n=e.hpBar.userData.fill,i=e.hpBar.userData.fillMat;n.scale.x=Math.max(0,t),n.position.x=-(1-t)*.24,t>.5?i.color.set("#4caf50"):t>.25?i.color.set("#ff9800"):i.color.set("#f44336")}damageMonster(e,t,n,i={}){if(e.dead)return;e.frozenDuration>0&&(e.frozen=!1,e.frozenDuration=0);let r=t;if(i.damageMult&&(r*=i.damageMult),i.undeadBonus&&e.def.undead&&(r*=1+i.undeadBonus),n==="physical"){let a=Math.max(0,e.def.armor*(1-(i.armorPen||0))*(1-(e.armorShred||0)));r*=1-a/(a+100)}else{let a=Math.max(0,e.def.magicResist*(1-(i.resistPen||0)));r*=1-a/(a+100)}r=Math.max(1,Math.round(r*(.9+Math.random()*.2))),!i.silent&&this.game&&this.game.showDamageNumber&&this.game.showDamageNumber(e,r),e.hp-=r,e.hp<=0&&(e.hp=0,e.dead=!0,this.onMonsterKilled&&this.onMonsterKilled(e))}removeMonster(e){e.dead=!0}updateVisuals(e){for(let t of this.monsters)t.dead||(t.mesh.children[0].rotation.y+=e*.5,t.isBoss&&t.mesh.userData.aura&&(t.mesh.userData.aura.rotation.z+=e*2))}getAliveCount(){return this.monsters.filter(e=>!e.dead).length}getMonsterDef(e){return xi[e]}};var Bp=[{id:"ranger",name:"\u738B\u56FD\u6E38\u4FA0",icon:"\u{1F9DD}",speed:3,damage:20,atkSpeed:1,range:2.5,damageType:"physical",targetsAir:!0,color:"#27ae60",skill:{name:"\u7A7F\u900F\u7BAD",cooldown:15,desc:"\u5BF9\u8DEF\u5F84\u4E0A\u6240\u6709\u602A\u7269\u9020\u6210100%\u7269\u7406\u4F24\u5BB3\uFF0C\u5BF9\u98DE\u884C\u5355\u4F4D\u989D\u591650%",execute:(s,e)=>{let t=e.monsterManager.monsters,n=s.mesh.position,i=0;for(let r of t)if(!r.dead&&n.distanceTo(r.mesh.position)<=6){let a=s.damage;r.flying&&(a*=1.5),e.monsterManager.damageMonster(r,a,"physical"),i++}return i}}},{id:"mage",name:"\u5BAB\u5EF7\u6CD5\u5E08",icon:"\u{1F9D9}",speed:2.5,damage:25,atkSpeed:.8,range:2.5,damageType:"magic",targetsAir:!0,color:"#8e44ad",skill:{name:"\u706B\u7130\u96E8",cooldown:20,desc:"\u5BF9\u6307\u5B9A\u533A\u57DF\u9020\u6210\u6BCF\u79D230%\u9B54\u6CD5\u4F24\u5BB3\uFF0C\u6301\u7EED3\u79D2\uFF0C\u51CF\u901F20%",execute:(s,e)=>{let t=e.monsterManager,n=t.monsters,i=s.mesh.position,r=0;for(let a of n)a.dead||i.distanceTo(a.mesh.position)<=3.5&&(t.damageMonster(a,s.damage*.3,"magic"),t.applyBurn(a,s.damage*.3,3),t.applySlow(a,.2,3,{magic:!0}),r++);for(let a=0;a<8;a++){let o=new pe(new $t(.15,4,4),new at({color:"#ff6600",transparent:!0,opacity:.7}));o.position.copy(i).add(new I((Math.random()-.5)*4,2+Math.random()*2,(Math.random()-.5)*4)),e.scene.add(o),setTimeout(()=>e.scene.remove(o),2e3)}return r}}}],ks=class{constructor(e,t){this.scene=e,this.game=t,this.heroGroup=new st,this.scene.add(this.heroGroup),this.heroes=[],this.activeHeroIndex=0,this.moveTarget=null,this.path=[]}reset(e){for(;this.heroGroup.children.length>0;)this.heroGroup.remove(this.heroGroup.children[0]);this.heroes=[],this.moveTarget=null,this.path=[],this.createHero(0,e),this.game.progress&&this.game.progress.unlocked>=3&&this.createHero(1,e.clone().add(new I(.8,0,.8))),this.activeHeroIndex=0}createHero(e,t){let n=Bp[e],i=this.getHeroLevel(n.id),r=1+(i-1)*.02,a=1+(i-1)*.01,o=new st,l=new We({color:n.color,roughness:.4,metalness:.1}),c=new mt(.4,.6,.3),h=new pe(c,l);h.position.y=.55,h.castShadow=!0,o.add(h);let d=new mt(.3,.3,.3),f=new pe(d,l);f.position.y=.95,f.castShadow=!0,o.add(f);let m=new En(.2,.3,6),g=new pe(m,new We({color:"#5d3a1a",roughness:.6}));if(g.position.y=1.15,o.add(g),e===0){let p=new kn(.2,.03,4,6,Math.PI*1.2),u=new pe(p,new We({color:"#8b4513",roughness:.5}));u.rotation.z=Math.PI/2,u.position.set(.25,.6,0),o.add(u)}else{let p=new Ut(.03,.03,.8,6),u=new pe(p,new We({color:"#5d3a1a"}));u.position.set(.25,.5,0),o.add(u);let M=new $t(.1,8,6),x=new pe(M,new We({color:"#9b59b6",emissive:"#9b59b6",emissiveIntensity:.5}));x.position.set(.25,.9,0),o.add(x)}o.position.copy(t),o.position.y=.2,this.heroGroup.add(o);let _={index:e,id:n.id,def:n,mesh:o,level:i,damage:n.damage*r,atkSpeed:n.atkSpeed,range:n.range,speed:n.speed*a,cooldown:0,skillCooldown:0,target:null};return this.heroes.push(_),_}getHeroLevel(e){if(!this.game||!this.game.progress)return 1;let t=this.game.progress.heroExp&&this.game.progress.heroExp[e]||0;return Math.min(30,1+Math.floor(t/100))}getActiveHero(){return this.heroes[this.activeHeroIndex]||null}cellKey(e,t){return e+","+t}cellFromPos(e){return{x:Math.floor(e.x),z:Math.floor(e.z)}}findPath(e,t){let n=this.game.map;if(!n||!n.gridW)return[];let i=this.cellFromPos(e),r=this.cellFromPos(t),a=new Set;for(let g of this.game.towerManager.towers)a.add(this.cellKey(Math.floor(g.pos.x),Math.floor(g.pos.z)));let o=r;if(a.has(this.cellKey(o.x,o.z))){let g=null,_=1/0;for(let p=-2;p<=2;p++)for(let u=-2;u<=2;u++){let M={x:o.x+p,z:o.z+u};if(M.x<0||M.z<0||M.x>=n.gridW||M.z>=n.gridH||a.has(this.cellKey(M.x,M.z)))continue;let x=Math.abs(p)+Math.abs(u);x<_&&(_=x,g=M)}if(g)o=g;else return[]}if(i.x===o.x&&i.z===o.z)return[];let l=[i],c=new Map;c.set(this.cellKey(i.x,i.z),null);let h=[[1,0],[-1,0],[0,1],[0,-1]],d=null;for(;l.length;){let g=l.shift();if(g.x===o.x&&g.z===o.z){d=g;break}for(let[_,p]of h){let u=g.x+_,M=g.z+p;if(u<0||M<0||u>=n.gridW||M>=n.gridH)continue;let x=this.cellKey(u,M);a.has(x)||c.has(x)||(c.set(x,g),l.push({x:u,z:M}))}}if(!d)return[];let f=[],m=d;for(;m;)f.push(m),m=c.get(this.cellKey(m.x,m.z));return f.reverse(),f.map(g=>new I(g.x+.5,.2,g.z+.5))}moveHeroTo(e){let t=this.getActiveHero();t&&(this.moveTarget=e.clone(),this.moveTarget.y=.2,this.path=this.findPath(t.mesh.position,this.moveTarget),this.path.length===0&&(this.path=[this.moveTarget.clone()]))}useHeroSkill(e){let t=this.heroes[e];if(!t||t.skillCooldown>0)return;let n=t.def.skill.execute(t,this.game);return t.skillCooldown=t.def.skill.cooldown,this.game.showFloatingText(`${t.def.skill.name}!`,"#ffd700"),this.game.audio&&this.game.audio.play("heroSkill"),this.game.updateHeroUI(),n}update(e){let t=this.getActiveHero();if(!t)return;if(this.path.length>0){let r=this.path[0].clone().sub(t.mesh.position),a=r.length();if(a>.1){r.normalize(),t.mesh.position.add(r.multiplyScalar(t.speed*e));let o=Math.atan2(r.x,r.z);t.mesh.rotation.y+=(o-t.mesh.rotation.y)*5*e,a<.2&&this.path.shift()}else this.path.shift()}else if(this.moveTarget){let i=this.moveTarget.clone().sub(t.mesh.position);if(i.length()>.1){i.normalize(),t.mesh.position.add(i.multiplyScalar(t.speed*e));let a=Math.atan2(i.x,i.z);t.mesh.rotation.y+=(a-t.mesh.rotation.y)*5*e}else this.moveTarget=null}t.cooldown-=e;let n=this.game.monsterManager.monsters;(!t.target||t.target.dead||t.mesh.position.distanceTo(t.target.mesh.position)>t.range+.5)&&(t.target=this.findClosestEnemy(t,n)),t.target&&t.cooldown<=0&&(this.game.monsterManager.damageMonster(t.target,t.damage,t.def.damageType),t.cooldown=1/t.atkSpeed,this.createHeroProjectile(t),this.game.audio&&this.game.audio.play(t.index===0?"shoot_arrow":"cast_magic")),t.skillCooldown>0&&(t.skillCooldown-=e,t.skillCooldown<0&&(t.skillCooldown=0),this.game.updateHeroUI())}findClosestEnemy(e,t){let n=null,i=1/0;for(let r of t){if(r.dead||!e.def.targetsAir&&r.flying)continue;let a=e.mesh.position.distanceTo(r.mesh.position);a<e.range&&a<i&&(i=a,n=r)}return n}createHeroProjectile(e){if(!e.target)return;let t=new $t(.06,4,4),n=new at({color:e.index===0?"#f1c40f":"#9b59b6"}),i=new pe(t,n);i.position.copy(e.mesh.position),i.position.y+=.6,this.scene.add(i);let r=e.target,a=i.position.clone(),o=r.mesh.position.clone();o.y+=.5;let l=15,c=0,h=()=>{if(r.dead){this.scene.remove(i);return}if(c+=l*.016,i.position.lerpVectors(a,o,Math.min(c,1)),c>=1){this.scene.remove(i);return}requestAnimationFrame(h)};h()}updateVisuals(e){for(let t of this.heroes)(this.moveTarget||this.path.length>0)&&(t.mesh.position.y+=Math.sin(Date.now()*.01)*.005)}};var zp=[20,22,25,21,23,26,24,28],Hp={0:"orcCaptain",2:"orcCaptain",5:"skeletonKing",7:"hellGolem"},kp={1:{basic:["goblin","orc"],flying:["gargoyle"],elite:["wolfRider","shadow","troll"],fast:["fastGoblin"]},2:{basic:["skeleton","zombie"],flying:["ghost"],elite:["lich","stoneGolem"]},3:{basic:["demonImp","hellHound"],flying:["wyvern"],elite:["heavyDemon"]}};function Gp(s,e,t,n,i){if(n&&s>=i){let l=xi[n];return`BOSS: ${l.name} \u964D\u4E34\uFF01${l.bossSkill?`\u9884\u8B66\u300C${l.bossSkill.name}\u300D`:""}`}let r=e[0].type,a=e.some(l=>t.flying.includes(l.type)),o=e.some(l=>t.elite.includes(l.type));return a?"\u98DE\u884C\u7F16\u961F\u6765\u88AD\uFF01\u8BF7\u90E8\u7F72\u5BF9\u7A7A\u706B\u529B\uFF08\u9B54\u6CD5\u5854/\u82F1\u96C4\uFF09":o?`\u7CBE\u82F1${xi[r].name}\u7A81\u8FDB\uFF0C\u6CE8\u610F\u9AD8\u8840\u91CF\u4E0E\u51B2\u950B\uFF01`:e.length>1?"\u6742\u5175\u6DF7\u7F16\u6F6E\uFF0C\u5408\u7406\u5206\u914D\u706B\u529B\uFF01":`${xi[r].name} \u6210\u7FA4\u903C\u8FD1\uFF0C\u7BAD\u5854\u5DF2\u5C31\u4F4D\uFF01`}function Vp(s){let t=Tt[s].chapter,n=kp[t],i=zp[s],r=Hp[s],a=[];for(let o=1;o<=i;o++){let l=[],c=Math.max(.5,1.3-o*.025),h=Math.round(5+o*.9);if(o===1)l.push({type:n.basic[0],count:5,interval:1.2,delay:2});else if(o<=3)l.push({type:n.basic[0],count:h,interval:c,delay:2});else if(o<=6)l.push({type:n.basic[0],count:Math.round(h*.6),interval:c,delay:2}),l.push({type:n.basic[1],count:Math.round(h*.5),interval:c+.2,delay:4});else if(o===8)l.push({type:n.flying[0],count:3+Math.floor(o/6),interval:1.8,delay:2}),l.push({type:n.basic[0],count:Math.round(h*.5),interval:c,delay:5});else if(o===10)l.push({type:n.elite[0],count:2+Math.floor(o/12),interval:2,delay:2}),l.push({type:n.basic[1],count:Math.round(h*.6),interval:c,delay:5});else if(o>=i)if(r)l.push({type:r,count:1,interval:0,delay:3,isBoss:!0}),l.push({type:n.basic[0],count:Math.round(h*.6),interval:c,delay:6});else{let m=n.elite[Math.min(1,n.elite.length-1)];l.push({type:m,count:3+Math.floor(o/8),interval:1.8,delay:2}),l.push({type:n.basic[0],count:h,interval:c,delay:5}),n.flying[0]&&l.push({type:n.flying[0],count:3,interval:1.6,delay:8})}else l.push({type:n.basic[0],count:Math.round(h*.6),interval:c,delay:2}),l.push({type:n.basic[1],count:Math.round(h*.4),interval:c+.2,delay:4}),o%4===0&&n.flying[0]&&l.push({type:n.flying[0],count:2+Math.floor(o/10),interval:1.8,delay:6}),o%5===0&&n.elite[0]&&l.push({type:n.elite[0],count:1+Math.floor(o/15),interval:2,delay:7});let d=!!(r&&o>=i),f=Gp(o,l,n,r,i);a.push({desc:f,enemies:l,isBoss:d})}return a}var Gs=class{constructor(e){this.game=e,this.waves=[],this.currentWave=0,this.totalWaves=0,this.waveActive=!1,this.betweenWaves=!0,this.waveTimer=0,this.spawnQueue=[],this.spawnTimer=0,this.waveReward=0,this.chapter=1,this.dualPath=!1,this.levelIndex=0,this._countdownId=null}reset(){this.waveActive=!1,this.betweenWaves=!0,this.waveTimer=0,this.spawnQueue=[],this.spawnTimer=0,this.waveReward=0,this.currentWave=0,this._countdownId&&(clearInterval(this._countdownId),this._countdownId=null)}loadLevel(e){this.reset(),this.levelIndex=e;let t=Tt[e];this.chapter=t.chapter,this.dualPath=t.dualPath,this.waves=Vp(e),this.totalWaves=this.waves.length,this.currentWave=0}hpScale(e){let t={1:1,2:1.25,3:1.65}[this.chapter]||1,n=1+.08*Math.floor((e-1)/5);return t*n}startWave(e){this.waveActive||(this.currentWave=e-1,!(this.currentWave>=this.totalWaves)&&this._doStartWave())}startNextWave(){this.waveActive||this.currentWave>=this.totalWaves||this._doStartWave()}_doStartWave(){let e=this.waves[this.currentWave],t=this.currentWave+1;this.game.onWaveStart(t),this._showAnnounce(t,e.desc,e.isBoss);let n=this.hpScale(t);this.spawnQueue=[];for(let i of e.enemies){let r=i.entry!=null?i.entry:this.dualPath?t%2===1?0:1:0,a=i.delay||0;for(let o=0;o<i.count;o++)this.spawnQueue.push({type:i.type,delay:a+o*(i.interval||1),entry:r,scale:n})}this.spawnQueue.sort((i,r)=>i.delay-r.delay),this.spawnTimer=0,this.waveActive=!0,this.betweenWaves=!1,this.waveReward=30+this.currentWave*5}_showAnnounce(e,t,n){let i=this.game.ui.waveAnnounce,r=this.game.ui.waveAnnounceText;i.style.display="block",r.textContent=n?`\u26A0 ${t}`:`\u7B2C ${e} \u6CE2 - ${t}`,n?(r.style.color="#ff4444",r.style.borderColor="#ff4444"):(r.style.color="#ffd700",r.style.borderColor="#ffd700"),i.style.animation="none",i.offsetHeight,i.style.animation="waveIn 0.5s ease-out",setTimeout(()=>{i.style.display="none"},2500)}update(e){if(this.waveActive){for(this.spawnTimer+=e;this.spawnQueue.length>0&&this.spawnQueue[0].delay<=this.spawnTimer;){let t=this.spawnQueue.shift();this.game.monsterManager.spawnMonster(t.type,t.entry,t.scale)}this.spawnQueue.length===0&&this.game.monsterManager.getAliveCount()===0&&this._completeWave()}}_completeWave(){this.waveActive=!1,this.betweenWaves=!0,this.game.onWaveComplete(this.currentWave+1),this.currentWave++,this.currentWave>=this.totalWaves?setTimeout(()=>this.game.onAllWavesComplete(),2e3):(this.waveTimer=5,this._countdownId&&clearInterval(this._countdownId),this._countdownId=setInterval(()=>{if(this.game.gameOver){clearInterval(this._countdownId);return}this.waveTimer-=1,this.waveTimer<=0&&(clearInterval(this._countdownId),this._doStartWave())},1e3))}};var ya="hdw_audio_settings";function Wp(){try{let s=JSON.parse(localStorage.getItem(ya));if(s&&typeof s.master=="number")return s}catch{}return{master:.8,music:.45,sfx:.85,muted:!1}}function va(s,e,t){let{freq:n=440,endFreq:i=null,type:r="square",dur:a=.15,vol:o=.2,delay:l=0,attack:c=.005}=t,h=s.currentTime+l,d=s.createOscillator(),f=s.createGain();d.type=r,d.frequency.setValueAtTime(Math.max(20,n),h),i&&d.frequency.exponentialRampToValueAtTime(Math.max(20,i),h+a),f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(o,h+c),f.gain.exponentialRampToValueAtTime(1e-4,h+a),d.connect(f).connect(e),d.start(h),d.stop(h+a+.05)}function wl(s,e,t){let{dur:n=.2,vol:i=.2,delay:r=0,filterFreq:a=1200,type:o="lowpass"}=t,l=s.currentTime+r,c=Math.max(1,Math.floor(s.sampleRate*n)),h=s.createBuffer(1,c,s.sampleRate),d=h.getChannelData(0);for(let _=0;_<c;_++)d[_]=Math.random()*2-1;let f=s.createBufferSource();f.buffer=h;let m=s.createBiquadFilter();m.type=o,m.frequency.value=a;let g=s.createGain();g.gain.setValueAtTime(i,l),g.gain.exponentialRampToValueAtTime(1e-4,l+n),f.connect(m).connect(g).connect(e),f.start(l)}var Vs=class{constructor(){this.settings=Wp(),this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.musicTimer=null,this.musicStep=0,this.musicIntensity=0,this.chapter=1,this.paused=!1}ensureCtx(){if(this.ctx)return this.ctx;let e=window.AudioContext||window.webkitAudioContext;return e?(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.settings.muted?0:this.settings.master,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.settings.sfx,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.settings.music,this.musicGain.connect(this.masterGain),this.ctx):null}unlock(){let e=this.ensureCtx();e&&e.state==="suspended"&&e.resume().catch(()=>{})}setVolume(e,t){this.settings[e]=t;try{localStorage.setItem(ya,JSON.stringify(this.settings))}catch{}this.ensureCtx(),this.ctx&&(e==="master"?this.masterGain.gain.value=this.settings.muted?0:t:e==="sfx"?this.sfxGain.gain.value=t:e==="music"&&(this.musicGain.gain.value=t))}setMuted(e){this.settings.muted=e;try{localStorage.setItem(ya,JSON.stringify(this.settings))}catch{}this.masterGain&&(this.masterGain.gain.value=e?0:this.settings.master)}isMuted(){return!!this.settings.muted}play(e){if(!this.ctx||this.settings.muted)return;let t=this.sfxGain,n=r=>va(this.ctx,t,r),i=r=>wl(this.ctx,t,r);switch(e){case"click":n({freq:660,dur:.06,vol:.1});break;case"hover":n({freq:880,dur:.04,vol:.05});break;case"build":i({dur:.18,vol:.25,filterFreq:260}),n({freq:180,endFreq:240,dur:.16,vol:.22});break;case"upgrade":n({freq:330,dur:.09,vol:.16}),n({freq:440,dur:.09,vol:.16,delay:.08}),n({freq:660,dur:.14,vol:.18,delay:.16});break;case"sell":n({freq:440,endFreq:220,dur:.22,vol:.18});break;case"coin":n({freq:1245,type:"sine",dur:.08,vol:.14}),n({freq:1661,type:"sine",dur:.12,vol:.14,delay:.06});break;case"shoot_arrow":i({dur:.08,vol:.14,filterFreq:3200,type:"bandpass"});break;case"cast_magic":n({freq:700,endFreq:1300,type:"sine",dur:.2,vol:.16});break;case"cannon_fire":i({dur:.3,vol:.42,filterFreq:220}),n({freq:80,endFreq:50,dur:.28,vol:.35});break;case"ice_cast":n({freq:1900,type:"sine",dur:.12,vol:.16}),n({freq:2400,type:"sine",dur:.1,vol:.1,delay:.05});break;case"hit":i({dur:.08,vol:.22,filterFreq:900});break;case"death":n({freq:320,endFreq:80,type:"sawtooth",dur:.3,vol:.2});break;case"baseHit":i({dur:.4,vol:.55,filterFreq:130}),n({freq:65,endFreq:40,dur:.4,vol:.4});break;case"waveStart":n({freq:523,type:"triangle",dur:.12,vol:.16}),n({freq:659,type:"triangle",dur:.12,vol:.16,delay:.1}),n({freq:784,type:"triangle",dur:.2,vol:.18,delay:.2});break;case"waveComplete":n({freq:784,type:"triangle",dur:.1,vol:.15}),n({freq:1046,type:"triangle",dur:.18,vol:.16,delay:.09});break;case"bossWarn":n({freq:330,type:"square",dur:.14,vol:.14}),n({freq:330,type:"square",dur:.14,vol:.14,delay:.22}),n({freq:440,type:"square",dur:.2,vol:.16,delay:.44});break;case"heroSkill":n({freq:400,endFreq:1400,type:"sine",dur:.5,vol:.22}),i({dur:.35,vol:.16,filterFreq:2400,type:"bandpass"});break;case"victory":[523,659,784,1046,1318].forEach((r,a)=>n({freq:r,type:"triangle",dur:.2,vol:.2,delay:a*.12}));break;case"defeat":n({freq:400,endFreq:140,type:"sawtooth",dur:.8,vol:.2});break;case"item":n({freq:932,type:"triangle",dur:.12,vol:.18}),n({freq:1245,type:"sine",dur:.14,vol:.16,delay:.08});break;case"freeze":n({freq:2300,type:"sine",dur:.14,vol:.15}),n({freq:1800,type:"sine",dur:.2,vol:.1,delay:.06});break;default:break}}startMusic(e){this.chapter=e||1,this.musicStep=0,this.stopMusic(),!(this.musicTimer||!this.ensureCtx())&&(this.musicTimer=setInterval(()=>this.scheduleMusicStep(),240))}scheduleMusicStep(){if(!this.ctx||this.paused||this.settings.muted)return;let e={1:[261.63,329.63,392,523.25],2:[220,261.63,329.63,440],3:[164.81,220,261.63,329.63]},t=e[this.chapter]||e[1],n=this.musicStep++,i=t[n%t.length],r=Math.floor(n/t.length)%2===0?1:2,a=.05+this.musicIntensity*.09;va(this.ctx,this.musicGain,{freq:i*r,type:"triangle",dur:.22,vol:a}),this.musicIntensity>.35&&n%2===0&&va(this.ctx,this.musicGain,{freq:i*.5,type:"sine",dur:.4,vol:a*.6}),this.musicIntensity>.7&&n%4===0&&wl(this.ctx,this.musicGain,{dur:.12,vol:.05,filterFreq:600})}setMusicIntensity(e){this.musicIntensity=Math.max(0,Math.min(1,e))}setPaused(e){this.paused=e}stopMusic(){this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null)}};var bl="hdw_tutorial_done",Ws=class{constructor(e){this.game=e,this.active=!1,this.stepIndex=0,this.steps=[{id:"build",text:"\u70B9\u51FB\u5854\u4F4D\uFF0C\u5EFA\u9020\u4E00\u5EA7\u7BAD\u5854",canvas:!0,action:"towerBuilt"},{id:"wave",text:"\u70B9\u51FB\u6309\u94AE\uFF0C\u5F00\u59CB\u62B5\u5FA1\u602A\u7269\u8FDB\u653B",target:"#next-wave-btn",action:"waveStarted"},{id:"upgrade",text:"\u70B9\u51FB\u9632\u5FA1\u5854\uFF0C\u53EF\u4EE5\u5347\u7EA7\u63D0\u5347\u6218\u529B",canvas:!0,action:"towerUpgraded",waitForWave:2},{id:"magic",text:"\u98DE\u884C\u602A\u7269\u9700\u8981\u9B54\u6CD5\u5854\u624D\u80FD\u653B\u51FB",target:'#tower-panel .tower-btn[data-type="magic"]',action:"magicBuilt",waitForWave:9},{id:"skill",text:"\u70B9\u51FB\u5934\u50CF\uFF0C\u91CA\u653E\u82F1\u96C4\u6280\u80FD",target:"#hero-skill-btn",action:"heroSkill",waitForWave:15}]}shouldStart(e){let t=!1;try{t=!!localStorage.getItem(bl)}catch{}return e===0&&!t}start(){this.active=!0,this.stepIndex=0,this.buildOverlay(),this.showStep(0)}buildOverlay(){if(document.getElementById("tutorial-overlay"))return;let e=document.createElement("div");e.id="tutorial-overlay",e.innerHTML=`
      <div id="tutorial-ring"></div>
      <div id="tutorial-bubble">
        <div id="tutorial-text"></div>
        <button id="tutorial-skip" class="tut-allow">\u8DF3\u8FC7\u5F15\u5BFC</button>
      </div>
    `,document.body.appendChild(e),document.getElementById("tutorial-skip").addEventListener("click",()=>this.skip())}showStep(e){this.stepIndex=e;let t=this.steps[e],n=document.getElementById("tutorial-overlay");if(!(!n||!t)){if(n.style.display="block",document.body.classList.add("tutorial-lock"),document.querySelectorAll(".tut-allow").forEach(i=>i.classList.remove("tut-allow")),t.target){let i=document.querySelector(t.target);i&&(i.classList.add("tut-allow"),this.positionRing(i))}else{let i=document.getElementById("tutorial-ring");i.style.left="50%",i.style.top="48%",i.style.transform="translate(-50%, -50%)",i.style.display="block"}document.getElementById("tutorial-text").textContent=t.text,t.waitForWave&&(n.style.display="none")}}positionRing(e){let t=e.getBoundingClientRect(),n=document.getElementById("tutorial-ring");n.style.left=`${t.left+t.width/2}px`,n.style.top=`${t.top+t.height/2}px`,n.style.transform="translate(-50%, -50%)",n.style.display="block"}revealIfReady(){let e=this.steps[this.stepIndex];if(!e||!e.waitForWave)return;let t=document.getElementById("tutorial-overlay");if(t&&(t.style.display="block"),e.target){let n=document.querySelector(e.target);n&&this.positionRing(n)}}onEvent(e){if(!this.active)return;let t=this.steps[this.stepIndex];t&&t.action===e&&this.advance()}onWaveComplete(e){if(!this.active)return;let t=this.steps[this.stepIndex];t&&t.waitForWave===e&&this.revealIfReady()}advance(){if(this.stepIndex>=this.steps.length-1){this.finish();return}this.showStep(this.stepIndex+1)}skip(){this.finish()}hide(){this.active=!1,document.body.classList.remove("tutorial-lock"),document.querySelectorAll(".tut-allow").forEach(t=>t.classList.remove("tut-allow"));let e=document.getElementById("tutorial-overlay");e&&(e.style.display="none")}finish(){try{localStorage.setItem(bl,"1")}catch{}this.hide()}};var Rl="hdw_progress_v1",El=[20,22,25,21,23,26,24,28],Tl={bomb:{name:"\u70B8\u5F39",icon:"\u{1F4A3}",desc:"\u5BF9\u76EE\u6807\u8303\u56F4\u602A\u7269\u9020\u6210120\u9B54\u6CD5\u4F24\u5BB3"},medkit:{name:"\u6025\u6551\u5305",icon:"\u{1FA79}",desc:"\u6062\u590D\u57FA\u5730\u751F\u547D+5"},goldbag:{name:"\u91D1\u5E01\u888B",icon:"\u{1F4B0}",desc:"\u7ACB\u5373\u83B7\u5F97100\u91D1\u5E01"},freezerune:{name:"\u5BD2\u51B0\u7B26",icon:"\u2744\uFE0F",desc:"\u5168\u573A\u602A\u7269\u51CF\u901F50%\u6301\u7EED5\u79D2"},totem:{name:"\u63F4\u519B\u56FE\u817E",icon:"\u{1F5FF}",desc:"\u53EC\u5524\u4E00\u5EA72\u7EA7\u7BAD\u5854\u6301\u7EED15\u79D2"}};function Xp(){let s={unlocked:0,stars:{},heroExp:{}};try{let e=localStorage.getItem(Rl);if(e){let t=JSON.parse(e);typeof t.unlocked=="number"&&t.stars&&(s.unlocked=t.unlocked,s.stars=t.stars,s.heroExp=t.heroExp||{})}}catch{}return s}function Al(s){try{localStorage.setItem(Rl,JSON.stringify(s))}catch{}}var Ma=class{constructor(){this.currentLevel=0,this.progress=Xp(),this.selectedChapter=1,this.gold=200,this.baseHP=20,this.baseMaxHP=20,this.waveNum=0,this.maxWaves=20,this.waveActive=!1,this.waveBetween=!1,this.prepPhase=!0,this.gameOver=!1,this.gamePaused=!1,this.gameStarted=!1,this.gameSpeed=1,this.killCount=0,this.totalKills=0,this.hero=null,this.buildingSpot=null,this.selectedTowerType=null,this.items={bomb:1,medkit:1,goldbag:1,freezerune:1,totem:1},this.selectedItem=null,this.bossWarnings=[],this._msgTimeout=null,this._suppressClick=!1,this.audio=new Vs,this.tutorial=new Ws(this),this.initThree(),this.initCamera(),this.initManagers(),this.initLighting(),this.initRaycaster(),this.initUI(),this.map.reset(0),this.showMainMenu(),this.animate()}initThree(){let e=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),t=Math.min(window.devicePixelRatio,e?1.2:2);this.renderer=new Li({antialias:!1,powerPreference:e?"low-power":"default"}),this.renderer.setPixelRatio(t),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=da,this.renderer.toneMapping=fa,this.renderer.toneMappingExposure=1.1,document.getElementById("game-container").prepend(this.renderer.domElement),this.scene=new Rs,this.scene.background=new ke("#87CEEB"),this.scene.fog=new As("#87CEEB",30,70),this.camera=new Et(50,window.innerWidth/window.innerHeight,.5,100),this.camTarget=new I(14,0,10),this.camYaw=.7,this.camPitch=.55,this.camRadius=28,this.clock=new Ds,this.raycaster=new Us,this.mouse=new ze,window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}initCamera(){this.pointer={down:!1,moved:!1,id:null,x:0,y:0,lastX:0,lastY:0},this.pinchDist=0,this.touchIds=new Set;let e=this.renderer.domElement;e.addEventListener("pointerdown",t=>this.onPointerDown(t)),window.addEventListener("pointermove",t=>this.onPointerMove(t)),window.addEventListener("pointerup",t=>this.onPointerUp(t)),window.addEventListener("pointercancel",t=>this.onPointerUp(t)),e.addEventListener("wheel",t=>this.onWheel(t),{passive:!1})}onPointerDown(e){if(e.pointerType==="touch"&&(this.touchIds.add(e.pointerId),this.touchIds.size===2)){let t=this.renderer.domElement.getBoundingClientRect(),n=[...this.touchIds][0];this.pinchDist=0;return}this.pointer={down:!0,moved:!1,id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY}}onPointerMove(e){if(e.pointerType==="touch"&&this.touchIds.size===2){if([...this.touchIds].includes(e.pointerId)&&this._touchPos){this._touchPos.set(e.pointerId,{x:e.clientX,y:e.clientY});let[r,a]=[...this._touchPos.values()],o=Math.hypot(r.x-a.x,r.y-a.y);this.pinchDist>0&&(this.camRadius=Math.max(14,Math.min(55,this.camRadius*(this.pinchDist/o)))),this.pinchDist=o}else if(this._touchPos||(this._touchPos=new Map),this._touchPos.set(e.pointerId,{x:e.clientX,y:e.clientY}),this._touchPos.size===2){let[r,a]=[...this._touchPos.values()];this.pinchDist=Math.hypot(r.x-a.x,r.y-a.y)}return}if(!this.pointer.down||e.pointerId!==this.pointer.id)return;let t=e.clientX-this.pointer.lastX,n=e.clientY-this.pointer.lastY;Math.hypot(e.clientX-this.pointer.x,e.clientY-this.pointer.y)>6&&(this.pointer.moved=!0),this.pointer.lastX=e.clientX,this.pointer.lastY=e.clientY,this.camYaw-=t*.008,this.camPitch=Math.max(.18,Math.min(1.25,this.camPitch+n*.006))}onPointerUp(e){e.pointerType==="touch"&&(this.touchIds.delete(e.pointerId),this._touchPos&&this._touchPos.delete(e.pointerId),this.pinchDist=0),this.pointer.down&&e.pointerId===this.pointer.id&&(this.pointer.moved&&(this._suppressClick=!0),this.pointer.down=!1,setTimeout(()=>{this._suppressClick=!1},50))}onWheel(e){e.preventDefault(),this.camRadius=Math.max(14,Math.min(55,this.camRadius+e.deltaY*.02))}updateCamera(){let e=new I(this.camRadius*Math.cos(this.camPitch)*Math.sin(this.camYaw),this.camRadius*Math.sin(this.camPitch),this.camRadius*Math.cos(this.camPitch)*Math.cos(this.camYaw));this.camera.position.copy(this.camTarget).add(e),this.camera.lookAt(this.camTarget)}frameLevel(){let e=this.map.getCenter();this.camTarget.set(e.x,0,e.z),this.camYaw=.7,this.camPitch=.55,this.camRadius=Math.max(26,this.map.gridW*1.05)}initLighting(){let e=new Ls("#ffffff",.6);this.scene.add(e);let t=new Is("#ffffff",1.2);t.position.set(20,30,10),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-30,t.shadow.camera.right=30,t.shadow.camera.top=30,t.shadow.camera.bottom=-30,this.scene.add(t)}initRaycaster(){this.renderer.domElement.addEventListener("click",e=>this.onClick(e)),this.renderer.domElement.addEventListener("contextmenu",e=>{e.preventDefault(),this.onRightClick(e)}),this.renderer.domElement.addEventListener("mousemove",e=>this.onMouseMove(e)),document.addEventListener("keydown",e=>this.onKeyDown(e)),["pointerdown","click","keydown","touchstart"].forEach(e=>{window.addEventListener(e,()=>this.audio.unlock(),{passive:!0})})}initManagers(){this.map=new Bs(this.scene),this.towerManager=new zs(this.scene,this),this.monsterManager=new Hs(this.scene,this),this.heroManager=new ks(this.scene,this),this.waveManager=new Gs(this)}initUI(){let e=t=>document.getElementById(t);this.ui={goldEl:e("gold"),baseHPEl:e("base-hp"),waveEl:e("wave-num"),killsEl:e("kill-count"),levelNameEl:e("level-name"),nextWaveBtn:e("next-wave-btn"),speedBtn:e("speed-btn"),speedText:e("speed-text"),pauseBtn:e("pause-btn"),audioBtn:e("audio-btn"),pauseOverlay:e("pause-overlay"),btnResume:e("btn-resume"),btnPauseRetry:e("btn-pause-retry"),btnPauseMenu:e("btn-pause-menu"),volumeMaster:e("volume-master"),volumeMusic:e("volume-music"),volumeSfx:e("volume-sfx"),towerPanel:e("tower-panel"),towerBtns:document.querySelectorAll(".tower-btn"),infoPanel:e("tower-info-panel"),infoName:e("info-name"),infoLevel:e("info-level"),infoDamage:e("info-damage"),infoRange:e("info-range"),infoDesc:e("info-desc"),upgradeBtn:e("upgrade-btn"),upgradeCost:e("upgrade-cost"),sellBtn:e("sell-btn"),sellValue:e("sell-value"),closeInfoBtn:e("close-info"),waveAnnounce:e("wave-announce"),waveAnnounceText:e("wave-announce-text"),gameOverPanel:e("result-panel"),gameOverTitle:e("result-title"),gameOverStats:e("result-stats"),gameOverStars:e("result-stars"),resultNextBtn:e("btn-result-next"),resultRetryBtn:e("btn-result-retry"),resultMenuBtn:e("btn-result-menu"),heroPanel:e("hero-panel"),heroBtn:e("hero-skill-btn"),heroCooldown:e("hero-cooldown"),heroSkillName:e("hero-skill-name"),heroName:e("hero-name"),heroLevel:e("hero-level"),heroSwitch:e("hero-switch"),itemBar:e("item-bar"),itemBtns:document.querySelectorAll(".item-btn"),towerBuildPanel:e("tower-build-panel"),buildTowerBtns:document.querySelectorAll(".build-tower-btn"),buildCancelBtn:e("build-cancel-btn"),buildSpotLabel:e("build-spot-label"),messageEl:e("message"),mainMenu:e("main-menu"),btnStartMenu:e("btn-start-menu"),btnHeroesMenu:e("btn-heroes-menu"),levelSelect:e("level-select"),chapterTabs:e("chapter-tabs"),levelGrid:e("level-grid"),btnBackMenu:e("btn-back-menu")},this.ui.btnStartMenu.addEventListener("click",()=>{this.audio.play("click"),this.showLevelSelect()}),this.ui.btnHeroesMenu.addEventListener("click",()=>{this.audio.play("click"),this.showMessage("\u82F1\u96C4\u56FE\u9274\u656C\u8BF7\u671F\u5F85",1800)}),this.ui.btnBackMenu.addEventListener("click",()=>{this.audio.play("click"),this.showMainMenu()}),this.ui.resultNextBtn.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(this.currentLevel+1)}),this.ui.resultRetryBtn.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(this.currentLevel)}),this.ui.resultMenuBtn.addEventListener("click",()=>{this.audio.play("click"),this.showLevelSelect()}),this.ui.nextWaveBtn.addEventListener("click",()=>{this.audio.play("click"),this.requestNextWave()}),this.ui.speedBtn.addEventListener("click",()=>{this.audio.play("click"),this.toggleSpeed()}),this.ui.pauseBtn.addEventListener("click",()=>{this.audio.play("click"),this.togglePause()}),this.ui.btnResume.addEventListener("click",()=>{this.audio.play("click"),this.togglePause()}),this.ui.btnPauseRetry.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(this.currentLevel)}),this.ui.btnPauseMenu.addEventListener("click",()=>{this.audio.play("click"),this.togglePause(),this.showLevelSelect()}),this.ui.audioBtn.addEventListener("click",()=>{let t=!this.audio.isMuted();this.audio.setMuted(t),this.audio.play("click"),this.ui.audioBtn.textContent=t?"\u{1F507}":"\u{1F50A}"}),[["master",this.ui.volumeMaster],["music",this.ui.volumeMusic],["sfx",this.ui.volumeSfx]].forEach(([t,n])=>{n&&(n.value=this.audio.settings[t],n.addEventListener("input",()=>this.audio.setVolume(t,parseFloat(n.value))))}),this.ui.upgradeBtn.addEventListener("click",()=>{this.audio.play("upgrade"),this.upgradeTower()}),this.ui.sellBtn.addEventListener("click",()=>{this.audio.play("sell"),this.sellTower()}),this.ui.closeInfoBtn.addEventListener("click",()=>this.hideTowerInfo()),this.ui.buildCancelBtn.addEventListener("click",()=>this.hideBuildPanel()),this.ui.heroBtn.addEventListener("click",()=>{this.audio.play("heroSkill"),this.useHeroSkill()}),this.ui.towerBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.selectTowerType(t.dataset.type)})}),this.ui.buildTowerBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.buildTowerAtSpot(t.dataset.type)})}),this.ui.itemBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.selectItem(t.dataset.item)})}),this.updateUI(),this.updateTowerButtons(),this.updateItemUI(),this.ui.audioBtn.textContent=this.audio.isMuted()?"\u{1F507}":"\u{1F50A}"}showMainMenu(){this.gameStarted=!1,this.tutorial&&this.tutorial.hide(),this.ui.mainMenu.style.display="flex",this.ui.levelSelect.style.display="none",this.ui.gameOverPanel.style.display="none",this.ui.pauseOverlay.style.display="none",document.getElementById("game-container").classList.add("in-menu"),this.hideBuildPanel(),this.hideTowerInfo(),this.audio.setPaused(!1)}showLevelSelect(){this.gameStarted=!1,this.tutorial&&this.tutorial.hide(),this.ui.mainMenu.style.display="none",this.ui.gameOverPanel.style.display="none",this.ui.levelSelect.style.display="flex",document.getElementById("game-container").classList.add("in-menu"),this.audio.startMusic(this.selectedChapter),this.renderLevelSelect()}renderLevelSelect(){let e=this.ui.chapterTabs;e.innerHTML="";let t={1:"\u7B2C\u4E00\u7AE0 \u8FB9\u5883\u9632\u7EBF",2:"\u7B2C\u4E8C\u7AE0 \u4EA1\u7075\u8352\u5730",3:"\u7B2C\u4E09\u7AE0 \u9B54\u7130\u6DF1\u6E0A"};for(let i=1;i<=3;i++){let r=document.createElement("button");r.className="chapter-tab"+(i===this.selectedChapter?" active":""),r.textContent=t[i],r.addEventListener("click",()=>{this.audio.play("click"),this.selectedChapter=i,this.audio.startMusic(i),this.renderLevelSelect()}),e.appendChild(r)}let n=this.ui.levelGrid;n.innerHTML="",Tt.forEach((i,r)=>{if(i.chapter!==this.selectedChapter)return;let a=r<=this.progress.unlocked,o=this.progress.stars[r]||0,l=document.createElement("div");l.className="level-card"+(a?"":" locked");let c=[0,1,2].map(h=>`<span class="star ${h<o?"on":""}">\u2605</span>`).join("");l.innerHTML=`
        <div class="level-no">${i.id}</div>
        <div class="level-name">${i.name}</div>
        <div class="level-stars">${a?c:"\u{1F512} \u672A\u89E3\u9501"}</div>
        <div class="level-meta">\u6CE2\u6B21 ${El[r]} \xB7 \u521D\u59CB ${i.startGold}G</div>
      `,a&&l.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(r)}),n.appendChild(l)})}startLevel(e){if(e<0||e>=Tt.length)return;this.currentLevel=e,this.resetGame(),this.ui.mainMenu.style.display="none",this.ui.levelSelect.style.display="none",this.ui.gameOverPanel.style.display="none",this.ui.pauseOverlay.style.display="none",document.getElementById("game-container").classList.remove("in-menu"),this.gameStarted=!0,this.gameOver=!1,this.prepPhase=!0,this.ui.levelNameEl.textContent=`${Tt[e].id} ${Tt[e].name}`;let t=this.map.getHeroSpawn();this.heroManager.reset(t),this.hero=this.heroManager.getActiveHero(),this.frameLevel(),this.audio.startMusic(Tt[e].chapter),this.audio.play("waveStart"),this.tutorial.shouldStart(e)&&this.tutorial.start(),this.updateHeroUI(),this.updateUI(),this.showMessage("\u51C6\u5907\u9636\u6BB5\uFF1A\u90E8\u7F72\u9632\u5FA1\u5854\uFF0C\u70B9\u51FB\u201C\u5F00\u59CB\u9632\u5FA1\u201D\u5F00\u6218",2600)}resetGame(){let e=Tt[this.currentLevel];this.gold=e.startGold,this.baseHP=this.baseMaxHP=e.baseHP,this.maxWaves=El[this.currentLevel],this.waveNum=0,this.waveActive=!1,this.waveBetween=!1,this.prepPhase=!0,this.gameOver=!1,this.gamePaused=!1,this.gameSpeed=1,this.ui.speedText.textContent="1x",this.killCount=0,this.totalKills=0,this.hero=null,this.buildingSpot=null,this.selectedTowerType=null,this.selectedItem=null,this.items={bomb:1,medkit:1,goldbag:1,freezerune:1,totem:1},this.bossWarnings.forEach(t=>this.scene.remove(t.mesh)),this.bossWarnings=[],this.map.reset(this.currentLevel),this.towerManager.reset(),this.monsterManager.reset(this.map.paths),this.waveManager.loadLevel(this.currentLevel),this.monsterManager.onMonsterKilled=t=>{let n=t.def?t.def.reward:10;this.gold+=n,this.totalKills++,this.killCount++,this.audio.play("coin"),this.updateUI()},this.monsterManager.onMonsterReachBase=t=>{let n=t.def?t.def.livesCost:1;this.baseHP-=n,this.audio.play("baseHit"),this.flashScreen("#ff2222",.22,350),this.baseHP<=0&&(this.baseHP=0,this.gameLose()),this.updateUI()},this.hideTowerInfo(),this.hideBuildPanel(),this.updateUI(),this.updateTowerButtons(),this.updateItemUI()}computeStars(){return this.baseHP>=this.baseMaxHP?3:this.baseHP>=this.baseMaxHP*.5?2:this.baseHP>0?1:0}computeRewards(e){let t=e?this.computeStars():0,n=e?100+this.maxWaves*5:10*this.waveNum,i=this.waveNum*5,r={0:0,1:.1,2:.3,3:.5}[t]||0,a=e&&!this.progress.stars[this.currentLevel]?200:0,o=e&&this.baseHP>=this.baseMaxHP?100:0,l=Math.round(n+i+(e?n*r:0)+a),c=Math.round(10+this.waveNum*2+t*5+(e?20:0));return{goldReward:l,exp:c,firstClear:a,noDamage:o}}gameWin(){this.gameOver=!0,this.waveActive=!1,this.gameStarted=!1,this.audio.play("victory"),this.audio.setMusicIntensity(0);let e=this.computeStars(),t=this.computeRewards(!0);e>(this.progress.stars[this.currentLevel]||0)&&(this.progress.stars[this.currentLevel]=e),this.currentLevel+1<Tt.length&&this.progress.unlocked<this.currentLevel+1&&(this.progress.unlocked=this.currentLevel+1),this.hero&&(this.progress.heroExp[this.hero.id]=(this.progress.heroExp[this.hero.id]||0)+t.exp),Al(this.progress);let n=this.currentLevel+1<Tt.length;this.ui.gameOverTitle.textContent="\u{1F389} \u80DC\u5229\uFF01",this.ui.gameOverStars.style.display="flex",this.ui.gameOverStars.innerHTML=[0,1,2].map(i=>`<span class="star ${i<e?"on":""}">\u2605</span>`).join(""),this.ui.gameOverStats.innerHTML=`\u51FB\u6740: ${this.totalKills} | \u5269\u4F59\u751F\u547D: ${this.baseHP} | \u661F\u7EA7: ${e}<br>\u91D1\u5E01\u5956\u52B1: ${t.goldReward} | \u82F1\u96C4\u7ECF\u9A8C: +${t.exp}${t.firstClear?" | \u9996\u901A +200":""}${t.noDamage?" | \u65E0\u4F24 +100":""}`,this.ui.resultNextBtn.style.display=n?"inline-block":"none",this.ui.gameOverPanel.style.display="flex",document.getElementById("game-container").classList.add("in-menu"),this.tutorial&&this.tutorial.finish()}gameLose(){this.gameOver=!0,this.waveActive=!1,this.gameStarted=!1,this.audio.play("defeat"),this.audio.setMusicIntensity(0);let e=this.computeRewards(!1);this.hero&&(this.progress.heroExp[this.hero.id]=(this.progress.heroExp[this.hero.id]||0)+e.exp),Al(this.progress),this.ui.gameOverTitle.textContent="\u{1F480} \u5931\u8D25",this.ui.gameOverStars.style.display="none",this.ui.gameOverStats.innerHTML=`\u51FB\u6740: ${this.totalKills} | \u6CE2\u6B21: ${this.waveNum}<br>\u57FA\u7840\u5956\u52B1: ${e.goldReward}G | \u82F1\u96C4\u7ECF\u9A8C: +${e.exp}`,this.ui.resultNextBtn.style.display="none",this.ui.gameOverPanel.style.display="flex",document.getElementById("game-container").classList.add("in-menu"),this.tutorial&&this.tutorial.finish()}spendGold(e){return this.gold<e?!1:(this.gold-=e,this.updateUI(),this.updateTowerButtons(),!0)}addGold(e){this.gold+=e,this.audio.play("coin"),this.updateUI(),this.updateTowerButtons()}showFloatingText(e,t="#ffd700"){let n=document.createElement("div");n.className="floating-text",n.textContent=e,n.style.color=t,n.style.left="50%",n.style.top="42%",document.getElementById("game-container").appendChild(n),setTimeout(()=>n.remove(),1200)}showDamageNumber(e,t){if(!e||!e.mesh)return;let n=e.mesh.position.clone().project(this.camera);if(n.z>1)return;let i=(n.x*.5+.5)*window.innerWidth,r=(-n.y*.5+.5)*window.innerHeight,a=document.createElement("div");a.className="damage-number",a.textContent=`-${t}`,a.style.left=`${i+(Math.random()*16-8)}px`,a.style.top=`${r}px`,document.getElementById("game-container").appendChild(a),setTimeout(()=>a.remove(),700)}flashScreen(e,t,n){let i=document.createElement("div");i.className="screen-flash",i.style.background=e,i.style.opacity=String(t),document.getElementById("game-container").appendChild(i),setTimeout(()=>{i.style.transition="opacity 0.3s",i.style.opacity="0",setTimeout(()=>i.remove(),320)},n)}selectTowerType(e){let t=document.querySelector(`.tower-btn[data-type="${e}"]`);t&&(t.classList.contains("selected")?(t.classList.remove("selected"),this.selectedTowerType=null):(this.ui.towerBtns.forEach(n=>n.classList.remove("selected")),t.classList.add("selected"),this.selectedTowerType=e))}buildTowerAtSpot(e){if(this.buildingSpot===null)return;let n=this.towerManager.towerDefs[e];if(!n)return;let i=n.levels[0].cost;if(this.gold<i){this.showMessage("\u91D1\u5E01\u4E0D\u8DB3\uFF01",1500),this.audio.play("click");return}this.towerManager.placeTower(this.buildingSpot,e)&&(this.hideBuildPanel(),this.audio.play("build"),this.updateUI(),this.updateTowerButtons(),this.tutorial&&this.tutorial.onEvent(e==="arrow"?"towerBuilt":e==="magic"?"magicBuilt":""))}showBuildPanel(e){this.buildingSpot=e,this.hideTowerInfo(),this.ui.towerBuildPanel.style.display="flex",this.ui.buildSpotLabel.textContent=`\u5854\u4F4D #${e+1}`;let t=this.ui.buildTowerBtns,n=this.towerManager.towerDefs;t.forEach(i=>{let r=i.dataset.type,a=n[r];if(a){let o=a.levels[0].cost;i.querySelector(".build-cost").textContent=`${o}G`,i.classList.toggle("disabled",this.gold<o)}})}hideBuildPanel(){this.buildingSpot=null,this.ui.towerBuildPanel.style.display="none"}showTowerInfo(e){this.ui.infoName.textContent=e.def.name,this.ui.infoLevel.textContent=`Lv.${e.level}`,this.ui.infoDamage.textContent=`\u4F24\u5BB3: ${e.levelDef.damage}`,this.ui.infoRange.textContent=`\u5C04\u7A0B: ${e.levelDef.range}`,this.ui.infoDesc.textContent=e.levelDef.desc||"",e.canUpgrade?(this.ui.upgradeCost.textContent=`${e.upgradeCost}G`,this.ui.upgradeBtn.style.display="flex",this.ui.upgradeBtn.classList.toggle("disabled",this.gold<e.upgradeCost)):this.ui.upgradeBtn.style.display="none",this.ui.sellValue.textContent=`${e.sellRefund}G`,this.ui.infoPanel.style.display="flex"}hideTowerInfo(){this.ui.infoPanel.style.display="none",this.towerManager.hideTowerMenu()}upgradeTower(){let e=this.towerManager.selectedTower;if(!e)return;if(this.towerManager.upgradeTower(e.spotIndex)){let n=this.towerManager.showTowerMenu(e.spotIndex);n&&this.showTowerInfo(n),this.updateUI(),this.updateTowerButtons(),this.tutorial&&this.tutorial.onEvent("towerUpgraded")}}sellTower(){let e=this.towerManager.selectedTower;e&&(this.towerManager.sellTower(e.spotIndex),this.hideTowerInfo(),this.updateUI(),this.updateTowerButtons())}useHeroSkill(){!this.hero||this.gameOver||(this.heroManager.useHeroSkill(this.heroManager.activeHeroIndex),this.tutorial&&this.tutorial.onEvent("heroSkill"),this.updateHeroUI())}switchHero(e){this.heroManager.heroes[e]&&(this.heroManager.activeHeroIndex=e,this.heroManager.moveTarget=null,this.heroManager.path=[],this.hero=this.heroManager.getActiveHero(),this.updateHeroUI())}updateHeroUI(){if(!this.hero){this.ui.heroPanel.style.display="none";return}this.ui.heroPanel.style.display="flex",this.ui.heroName.textContent=this.hero.def.name,this.ui.heroLevel.textContent=`Lv.${this.hero.level}`,this.ui.heroSkillName.textContent=this.hero.def.skill.name;let e=this.hero.skillCooldown;e>0?(this.ui.heroBtn.classList.add("on-cooldown"),this.ui.heroCooldown.textContent=`${Math.ceil(e)}s`):(this.ui.heroBtn.classList.remove("on-cooldown"),this.ui.heroCooldown.textContent="\u5C31\u7EEA"),this.ui.heroSwitch.innerHTML="",this.heroManager.heroes.forEach((t,n)=>{let i=document.createElement("button");i.className="hero-switch-btn"+(n===this.heroManager.activeHeroIndex?" active":""),i.textContent=t.def.icon,i.title=`${t.def.name} Lv.${t.level}`,i.addEventListener("click",()=>{this.audio.play("click"),this.switchHero(n)}),this.ui.heroSwitch.appendChild(i)})}selectItem(e){if(!(this.items[e]<=0)&&(this.selectedItem=this.selectedItem===e?null:e,this.updateItemUI(),this.selectedItem)){let t=Tl[e];this.showMessage(`${t.name}\uFF1A${t.desc}${t.immediate===!1?"\uFF0C\u70B9\u51FB\u6218\u573A\u4F7F\u7528":""}`,2200)}}useItem(e){if(this.items[e]<=0)return;let t=this.monsterManager;if(e==="medkit")this.baseHP=Math.min(this.baseMaxHP,this.baseHP+5),this.showMessage("\u6025\u6551\u5305\uFF1A\u57FA\u5730\u751F\u547D+5",1400);else if(e==="goldbag")this.gold+=100,this.showMessage("\u91D1\u5E01\u888B\uFF1A+100G",1400);else if(e==="freezerune"){for(let n of t.monsters)t.applySlow(n,.5,5,{magic:!0});this.showMessage("\u5BD2\u51B0\u7B26\uFF1A\u5168\u573A\u51CF\u901F50%",1400),this.audio.play("freeze")}this.items[e]--,this.updateUI(),this.updateItemUI()}useItemAt(e,t){if(!(this.items[e]<=0)){if(e==="bomb"){let n=this.monsterManager,i=0;for(let r of n.monsters)r.dead||t.distanceTo(r.mesh.position)<=2.5&&(n.damageMonster(r,120,"magic"),i++);this.spawnExplosion(t),this.audio.play("cannon_fire"),this.showMessage(`\u70B8\u5F39\u547D\u4E2D ${i} \u53EA\u602A\u7269`,1400),this.items[e]--}else if(e==="totem"){let n=Math.floor(t.x),i=Math.floor(t.z);if(n<0||i<0||n>=this.map.gridW||i>=this.map.gridH)return;if(this.map.isPathCell(n,i)){this.showMessage("\u56FE\u817E\u4E0D\u80FD\u653E\u5728\u9053\u8DEF\u4E0A",1400);return}if(this.towerManager.towers.some(o=>Math.floor(o.pos.x)===n&&Math.floor(o.pos.z)===i)){this.showMessage("\u8FD9\u91CC\u5DF2\u7ECF\u6709\u9632\u5FA1\u5854",1400);return}let a=new I(n+.5,.3,i+.5);this.towerManager.addTemporaryTower("arrow",a,2,15),this.audio.play("build"),this.showMessage("\u63F4\u519B\u56FE\u817E\uFF1A2\u7EA7\u7BAD\u5854\u53C2\u621815\u79D2",1400),this.items[e]--}this.updateUI(),this.updateItemUI()}}spawnExplosion(e){let t=new at({color:"#ff8800",transparent:!0,opacity:.8}),n=new pe(new $t(1.2,8,6),t);n.position.copy(e),n.position.y=.5,this.scene.add(n);let i=.35,r=()=>{if(i-=.016,i<=0){this.scene.remove(n);return}n.scale.multiplyScalar(1.06),n.material.opacity=Math.max(0,i),requestAnimationFrame(r)};r()}updateItemUI(){this.ui.itemBtns.forEach(e=>{let t=e.dataset.item,n=this.items[t]||0,i=Tl[t],r=e.querySelector(".item-count");r&&(r.textContent=`\xD7${n}`),e.title=`${i.name}\uFF1A${i.desc}`,e.classList.toggle("selected",this.selectedItem===t),e.classList.toggle("disabled",n<=0)})}requestNextWave(){this.gameOver||!this.gameStarted||this.waveManager.waveActive||this.earlyStartWave()}earlyStartWave(){if(this.gameOver||!this.gameStarted||this.waveManager.waveActive)return;if(this.prepPhase){this.prepPhase=!1,this.waveManager.startNextWave(),this.updateUI();return}if(!this.waveManager.betweenWaves)return;let e=Math.floor(this.waveManager.waveTimer);e>0&&(this.addGold(e*2),this.showMessage(`\u63D0\u524D\u5F00\u6CE2\uFF01+${e*2}G`,1500)),this.waveManager._countdownId&&(clearInterval(this.waveManager._countdownId),this.waveManager._countdownId=null),this.waveManager.startNextWave(),this.updateUI()}toggleSpeed(){this.gameSpeed=this.gameSpeed===1?2:1,this.ui.speedText.textContent=`${this.gameSpeed}x`,this.audio.setPaused(this.gamePaused)}togglePause(){!this.gameStarted||this.gameOver||(this.gamePaused=!this.gamePaused,this.ui.pauseOverlay.style.display=this.gamePaused?"flex":"none",this.audio.setPaused(this.gamePaused))}showMessage(e,t=2e3){this.ui.messageEl.textContent=e,this.ui.messageEl.style.opacity="1",clearTimeout(this._msgTimeout),this._msgTimeout=setTimeout(()=>{this.ui.messageEl.style.opacity="0"},t)}updateUI(){if(this.ui.goldEl.textContent=this.gold,this.ui.baseHPEl.textContent=this.baseHP,this.ui.waveEl.textContent=`${this.waveNum}/${this.maxWaves}`,this.ui.killsEl.textContent=this.totalKills,this.gameOver||!this.gameStarted){this.ui.nextWaveBtn.disabled=!0,this.ui.nextWaveBtn.textContent="\u4E0B\u4E00\u6CE2";return}this.waveManager.waveActive?(this.ui.nextWaveBtn.disabled=!0,this.ui.nextWaveBtn.textContent="\u6218\u6597\u4E2D"):this.prepPhase?(this.ui.nextWaveBtn.disabled=!1,this.ui.nextWaveBtn.textContent="\u2694\uFE0F \u5F00\u59CB\u9632\u5FA1"):(this.ui.nextWaveBtn.disabled=!1,this.ui.nextWaveBtn.textContent="\u23E9 \u63D0\u524D\u5F00\u6CE2")}updateTowerButtons(){let e=document.querySelectorAll(".tower-btn"),t=this.towerManager.towerDefs;e.forEach(n=>{let i=n.dataset.type,r=t[i];if(r){let a=r.levels[0].cost,o=n.querySelector(".tower-cost");o&&(o.textContent=`${a}G`),n.classList.toggle("disabled",this.gold<a)}})}onClick(e){if(this._suppressClick||this.gameOver||!this.gameStarted)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.towerManager.towers.map(r=>r.mesh),n=this.raycaster.intersectObjects(t,!0);if(n.length>0){let r=n[0].object;for(;r;){let a=this.towerManager.towers.find(o=>o.mesh===r);if(a){this.hideBuildPanel(),this.selectedItem=null,this.updateItemUI();let o=this.towerManager.showTowerMenu(a.spotIndex);o&&this.showTowerInfo(o);return}r=r.parent}}let i=this.raycaster.intersectObjects(this.map.towerSpotMeshes);if(i.length>0){let r=i[0].object,a=this.map.towerSpotMeshes.indexOf(r);if(a>=0&&!this.towerManager.getTowerAt(a)){if(this.selectedTowerType){this.buildingSpot=a,this.buildTowerAtSpot(this.selectedTowerType);return}this.showBuildPanel(a);return}}if(this.hero&&this.map.groundMesh){let r=this.raycaster.intersectObject(this.map.groundMesh);if(r.length>0){let a=r[0].point;if(this.selectedItem){let o=this.selectedItem;this.selectedItem=null,this.updateItemUI(),this.useItemAt(o,a);return}if(this.selectedTowerType){this.selectedTowerType=null,document.querySelectorAll(".tower-btn").forEach(o=>o.classList.remove("selected")),this.showMessage("\u70B9\u51FB\u5854\u4F4D\u5EFA\u9020\u9632\u5FA1\u5854",1400);return}this.heroManager.moveHeroTo(a);return}}this.hideBuildPanel(),this.hideTowerInfo()}onRightClick(e){if(this.gameOver||!this.gameStarted)return;e.preventDefault(),this.selectedTowerType=null,this.selectedItem=null,document.querySelectorAll(".tower-btn").forEach(i=>i.classList.remove("selected")),this.updateItemUI(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.towerManager.towers.map(i=>i.mesh),n=this.raycaster.intersectObjects(t,!0);if(n.length>0){let i=n[0].object;for(;i;){let r=this.towerManager.towers.find(a=>a.mesh===i);if(r){this.towerManager.sellTower(r.spotIndex),this.audio.play("sell"),this.hideTowerInfo(),this.updateUI(),this.updateTowerButtons();return}i=i.parent}}}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1}onKeyDown(e){if(this.gameOver&&e.key==="Enter"){this.startLevel(this.currentLevel);return}if(this.gameStarted)switch(e.key){case"Escape":this.hideBuildPanel(),this.hideTowerInfo(),this.selectedTowerType=null,this.selectedItem=null;break;case"1":this.selectTowerType("arrow");break;case"2":this.selectTowerType("magic");break;case"3":this.selectTowerType("cannon");break;case"4":this.selectTowerType("ice");break;case"q":case"Q":this.useHeroSkill();break;case" ":e.preventDefault(),this.requestNextWave();break;case"p":case"P":this.togglePause();break}}animate(){requestAnimationFrame(()=>this.animate());let e=Math.min(this.clock.getDelta(),.1),t=this.gamePaused?0:e*this.gameSpeed;this.updateBossWarnings(e),this.gameStarted&&!this.gameOver&&t>0&&(this.towerManager.update(t),this.monsterManager.update(t),this.heroManager.update(t),this.waveManager.update(t),this.towerManager.updateVisuals(t),this.monsterManager.updateVisuals(t),this.heroManager.updateVisuals(t),this.updateHeroUI(),this.updateUI(),this.updateMusicIntensity()),this.updateCamera(),this.renderer.render(this.scene,this.camera)}updateMusicIntensity(){let e=this.monsterManager.getAliveCount(),t=this.monsterManager.monsters.some(r=>r.isBoss&&!r.dead),n=this.baseHP/this.baseMaxHP<.3?.2:0,i=Math.max(0,Math.min(1,e/25*.55+(t?.35:0)+n));this.audio.setMusicIntensity(i)}updateBossWarnings(e){for(let t=this.bossWarnings.length-1;t>=0;t--){let n=this.bossWarnings[t];n.life-=e,n.mesh.material&&(n.mesh.material.opacity=Math.max(0,Math.min(.55,n.life*.7))),n.life<=0&&(this.scene.remove(n.mesh),this.bossWarnings.splice(t,1))}}onBossWarning(e,t){if(!e||!e.mesh)return;let n=t.radius||2,i=new pe(new Tn(Math.max(.1,n-.15),n,32),new at({color:16720418,side:dt,transparent:!0,opacity:.55}));i.rotation.x=-Math.PI/2,i.position.set(e.mesh.position.x,.28,e.mesh.position.z),this.scene.add(i),this.bossWarnings.push({mesh:i,life:(t.warning||1)+.25}),this.showMessage(`${e.def.name} \u6B63\u5728\u65BD\u653E\u300C${t.name}\u300D\uFF01`,1800),this.audio.play("bossWarn"),t.type==="slowTowers"&&this.flashScreen("#ff3300",.25,600)}onBossSkillEnd(e,t){t&&t.type==="stunTowers"&&this.flashScreen("#ff6600",.18,350)}onWaveStart(e){this.waveNum=e,this.waveActive=!0,this.waveBetween=!1,this.prepPhase=!1,this.audio.play("waveStart"),this.updateUI(),this.showMessage(`\u7B2C ${e} \u6CE2\u6765\u88AD\uFF01`,2e3),this.tutorial&&this.tutorial.onEvent("waveStarted")}onWaveComplete(e){this.waveActive=!1,this.waveBetween=!0,this.killCount=0;let t=30+e*5;this.addGold(t),this.audio.play("waveComplete"),this.updateUI(),this.showMessage(`\u6CE2\u6B21\u5B8C\u6210\uFF01+${t}G`,2e3),this.tutorial&&this.tutorial.onWaveComplete(e)}onAllWavesComplete(){!this.gameStarted||this.gameOver||this.gameWin()}},Cl=new Ma;window.game=Cl;var cm=Cl;})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
