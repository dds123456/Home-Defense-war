(()=>{var wa="160";var Yl=0,Ga=1,$l=2;var ml=1,ba=2,hn=3,jt=0,It=1,at=2;var wn=0,hi=1,fs=2,Va=3,Wa=4,Zl=5,On=100,Jl=101,Kl=102,Xa=103,qa=104,Ql=200,jl=201,ec=202,tc=203,Hr=204,kr=205,nc=206,ic=207,sc=208,rc=209,ac=210,oc=211,lc=212,cc=213,hc=214,uc=0,dc=1,fc=2,ps=3,pc=4,mc=5,gc=6,_c=7,gl=0,xc=1,vc=2,bn=0,yc=1,Mc=2,Sc=3,Ea=4,wc=5,bc=6;var _l=300,fi=301,pi=302,Gr=303,Vr=304,Ys=306,Wr=1e3,$t=1001,Xr=1002,_t=1003,Ya=1004;var or=1005;var Ht=1006,Ec=1007;var Di=1008;var En=1009,Tc=1010,Ac=1011,Ta=1012,xl=1013,Mn=1014,Sn=1015,Ui=1016,vl=1017,yl=1018,Bn=1020,Rc=1021,Zt=1023,Cc=1024,Pc=1025,zn=1026,mi=1027,Ic=1028,Ml=1029,Lc=1030,Sl=1031,wl=1033,lr=33776,cr=33777,hr=33778,ur=33779,$a=35840,Za=35841,Ja=35842,Ka=35843,bl=36196,Qa=37492,ja=37496,eo=37808,to=37809,no=37810,io=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,dr=36492,mo=36494,go=36495,Dc=36283,_o=36284,xo=36285,vo=36286;var ms=2300,gs=2301,fr=2302,yo=2400,Mo=2401,So=2402;var El=3e3,Hn=3001,Uc=3200,Nc=3201,Tl=0,Oc=1,kt="",xt="srgb",fn="srgb-linear",Aa="display-p3",$s="display-p3-linear",_s="linear",Qe="srgb",xs="rec709",vs="p3";var Xn=7680;var wo=519,Fc=512,Bc=513,zc=514,Al=515,Hc=516,kc=517,Gc=518,Vc=519,bo=35044;var Eo="300 es",qr=1035,dn=2e3,ys=2001,Tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pr=Math.PI/180,Yr=180/Math.PI;function ki(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[s&255]+yt[s>>8&255]+yt[s>>16&255]+yt[s>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function Wc(s,e){return(s%e+e)%e}function mr(s,e,t){return(1-t)*s+t*e}function To(s){return(s&s-1)===0&&s!==0}function $r(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var De=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],x=i[0],m=i[3],u=i[6],v=i[1],_=i[4],E=i[7],R=i[2],T=i[5],A=i[8];return r[0]=a*x+o*v+l*R,r[3]=a*m+o*_+l*T,r[6]=a*u+o*E+l*A,r[1]=c*x+h*v+d*R,r[4]=c*m+h*_+d*T,r[7]=c*u+h*E+d*A,r[2]=f*x+p*v+g*R,r[5]=f*m+p*_+g*T,r[8]=f*u+p*E+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*d+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gr.makeScale(e,t)),this}rotate(e){return this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gr=new ze;function Rl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xc(){let s=Ms("canvas");return s.style.display="block",s}var Ao={};function Ii(s){s in Ao||(Ao[s]=!0,console.warn(s))}var Ro=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Co=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[fn]:{transfer:_s,primaries:xs,toReference:s=>s,fromReference:s=>s},[xt]:{transfer:Qe,primaries:xs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[$s]:{transfer:_s,primaries:vs,toReference:s=>s.applyMatrix3(Co),fromReference:s=>s.applyMatrix3(Ro)},[Aa]:{transfer:Qe,primaries:vs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Co),fromReference:s=>s.applyMatrix3(Ro).convertLinearToSRGB()}},qc=new Set([fn,$s]),Ye={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!qc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Wi[e].toReference,i=Wi[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Wi[s].primaries},getTransfer:function(s){return s===kt?_s:Wi[s].transfer}};function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var qn,Ss=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=Ms("canvas")),qn.width=e.width,qn.height=e.height;let n=qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ms("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yc=0,ws=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xr(i[a].image)):r.push(xr(i[a]))}else r=xr(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function xr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ss.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $c=0,Vt=class s extends Tn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=$t,i=$t,r=Ht,a=Di,o=Zt,l=En,c=s.DEFAULT_ANISOTROPY,h=kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=ki(),this.name="",this.source=new ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hn?xt:kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xt?Hn:El}set encoding(e){Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hn?xt:kt}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=_l;Vt.DEFAULT_ANISOTROPY=1;var tt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,E=(p+1)/2,R=(u+1)/2,T=(h+f)/4,A=(d+x)/4,z=(g+m)/4;return _>E&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=A/n):E>R?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=T/i,r=z/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=z/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zr=class extends Tn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ii("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hn?xt:kt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ws(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Zr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bs=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==p||h!==g){let m=1-o,u=l*f+c*p+h*g+d*x,v=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,u*v);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let E=o*v;if(l=l*m+f*E,c=c*m+p*E,h=h*m+g*E,d=d*m+x*E,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-o*p,e[t+2]=c*g+h*p+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Po.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vr.copy(this).projectOnVector(e),this.sub(vr)}reflect(e){return this.sub(vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vr=new P,Po=new An,kn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(e.matrixWorld),this.union(Xi)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),qi.subVectors(this.max,Ti),Yn.subVectors(e.a,Ti),$n.subVectors(e.b,Ti),Zn.subVectors(e.c,Ti),gn.subVectors($n,Yn),_n.subVectors(Zn,$n),In.subVectors(Yn,Zn);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-In.z,In.y,gn.z,0,-gn.x,_n.z,0,-_n.x,In.z,0,-In.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-In.y,In.x,0];return!yr(t,Yn,$n,Zn,qi)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,Yn,$n,Zn,qi))?!1:(Yi.crossVectors(gn,_n),t=[Yi.x,Yi.y,Yi.z],yr(t,Yn,$n,Zn,qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},rn=[new P,new P,new P,new P,new P,new P,new P,new P],Xt=new P,Xi=new kn,Yn=new P,$n=new P,Zn=new P,gn=new P,_n=new P,In=new P,Ti=new P,qi=new P,Yi=new P,Ln=new P;function yr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ln.fromArray(s,r);let o=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=e.dot(Ln),c=t.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Zc=new kn,Ai=new P,Mr=new P,Ni=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);let t=Ai.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(Mr)),this.expandByPoint(Ai.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},an=new P,Sr=new P,$i=new P,xn=new P,wr=new P,Zi=new P,br=new P,Es=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sr.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Sr);let r=e.distanceTo(t)*.5,a=-this.direction.dot($i),o=xn.dot(this.direction),l=-xn.dot($i),c=xn.lengthSq(),h=Math.abs(1-a*a),d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Sr).addScaledVector($i,f),p}intersectSphere(e,t){an.subVectors(e.center,this.origin);let n=an.dot(this.direction),i=an.dot(an)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,i,r){wr.subVectors(t,e),Zi.subVectors(n,e),br.crossVectors(wr,Zi);let a=this.direction.dot(br),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,e);let l=o*this.direction.dot(Zi.crossVectors(xn,Zi));if(l<0)return null;let c=o*this.direction.dot(wr.cross(xn));if(c<0||l+c>a)return null;let h=-o*xn.dot(br);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class s{constructor(e,t,n,i,r,a,o,l,c,h,d,f,p,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,f,p,g,x,m)}set(e,t,n,i,r,a,o,l,c,h,d,f,p,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Jn.setFromMatrixColumn(e,0).length(),r=1/Jn.setFromMatrixColumn(e,1).length(),a=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,g=c*h,x=c*d;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,g=c*h,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-x*d}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jc,e,Kc)}lookAt(e,t,n){let i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),vn.crossVectors(n,Nt),vn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),vn.crossVectors(n,Nt)),vn.normalize(),Ji.crossVectors(Nt,vn),i[0]=vn.x,i[4]=Ji.x,i[8]=Nt.x,i[1]=vn.y,i[5]=Ji.y,i[9]=Nt.y,i[2]=vn.z,i[6]=Ji.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],v=n[3],_=n[7],E=n[11],R=n[15],T=i[0],A=i[4],z=i[8],M=i[12],w=i[1],L=i[5],G=i[9],ee=i[13],I=i[2],U=i[6],V=i[10],q=i[14],X=i[3],W=i[7],J=i[11],j=i[15];return r[0]=a*T+o*w+l*I+c*X,r[4]=a*A+o*L+l*U+c*W,r[8]=a*z+o*G+l*V+c*J,r[12]=a*M+o*ee+l*q+c*j,r[1]=h*T+d*w+f*I+p*X,r[5]=h*A+d*L+f*U+p*W,r[9]=h*z+d*G+f*V+p*J,r[13]=h*M+d*ee+f*q+p*j,r[2]=g*T+x*w+m*I+u*X,r[6]=g*A+x*L+m*U+u*W,r[10]=g*z+x*G+m*V+u*J,r[14]=g*M+x*ee+m*q+u*j,r[3]=v*T+_*w+E*I+R*X,r[7]=v*A+_*L+E*U+R*W,r[11]=v*z+_*G+E*V+R*J,r[15]=v*M+_*ee+E*q+R*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*p-n*l*p)+x*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+u*(-i*o*h-t*l*d+t*o*f+i*a*d-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],v=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,_=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,E=h*x*c-g*d*c+g*o*p-a*x*p-h*o*u+a*d*u,R=g*d*l-h*x*l-g*o*f+a*x*f+h*o*m-a*d*m,T=t*v+n*_+i*E+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=v*A,e[1]=(x*f*r-d*m*r-x*i*p+n*m*p+d*i*u-n*f*u)*A,e[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*u+n*l*u)*A,e[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*p-n*l*p)*A,e[4]=_*A,e[5]=(h*m*r-g*f*r+g*i*p-t*m*p-h*i*u+t*f*u)*A,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*u-t*l*u)*A,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*p+t*l*p)*A,e[8]=E*A,e[9]=(g*d*r-h*x*r-g*n*p+t*x*p+h*n*u-t*d*u)*A,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*u+t*o*u)*A,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*p-t*o*p)*A,e[12]=R*A,e[13]=(h*x*i-g*d*i+g*n*f-t*x*f-h*n*m+t*d*m)*A,e[14]=(g*o*i-a*x*i-g*n*l+t*x*l+a*n*m-t*o*m)*A,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,g=r*d,x=a*h,m=a*d,u=o*d,v=l*c,_=l*h,E=l*d,R=n.x,T=n.y,A=n.z;return i[0]=(1-(x+u))*R,i[1]=(p+E)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(p-E)*T,i[5]=(1-(f+u))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+_)*A,i[9]=(m-v)*A,i[10]=(1-(f+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Jn.set(i[0],i[1],i[2]).length(),a=Jn.set(i[4],i[5],i[6]).length(),o=Jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);let c=1/r,h=1/a,d=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=d,qt.elements[9]*=d,qt.elements[10]*=d,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=dn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,g;if(o===dn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ys)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=dn){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),f=(t+e)*c,p=(n+i)*h,g,x;if(o===dn)g=(a+r)*d,x=-2*d;else if(o===ys)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Jn=new P,qt=new ut,Jc=new P(0,0,0),Kc=new P(1,1,1),vn=new P,Ji=new P,Nt=new P,Io=new ut,Lo=new An,Ts=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ts.DEFAULT_ORDER="XYZ";var Oi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qc=0,Do=new P,Kn=new An,on=new ut,Ki=new P,Ri=new P,jc=new P,eh=new An,Uo=new P(1,0,0),No=new P(0,1,0),Oo=new P(0,0,1),th={type:"added"},nh={type:"removed"},Rt=class s extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new Ts,n=new An,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ut},normalMatrix:{value:new ze}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Uo,e)}rotateY(e){return this.rotateOnAxis(No,e)}rotateZ(e){return this.rotateOnAxis(Oo,e)}translateOnAxis(e,t){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uo,e)}translateY(e){return this.translateOnAxis(No,e)}translateZ(e){return this.translateOnAxis(Oo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ki.copy(e):Ki.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ri,Ki,this.up):on.lookAt(Ki,Ri,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(on),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,jc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,eh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Rt.DEFAULT_UP=new P(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=new P,ln=new P,Er=new P,cn=new P,Qn=new P,jn=new P,Fo=new P,Tr=new P,Ar=new P,Rr=new P,Qi=!1,oi=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),ln.subVectors(n,t),Er.subVectors(e,t);let a=Yt.dot(Yt),o=Yt.dot(ln),l=Yt.dot(Er),c=ln.dot(ln),h=ln.dot(Er),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qi=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),ln.subVectors(e,t),Yt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Yt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qi=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Qn.subVectors(i,n),jn.subVectors(r,n),Tr.subVectors(e,n);let l=Qn.dot(Tr),c=jn.dot(Tr);if(l<=0&&c<=0)return t.copy(n);Ar.subVectors(e,i);let h=Qn.dot(Ar),d=jn.dot(Ar);if(h>=0&&d<=h)return t.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Qn,a);Rr.subVectors(e,r);let p=Qn.dot(Rr),g=jn.dot(Rr);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(jn,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Fo.subVectors(r,i),o=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(Fo,o);let u=1/(m+x+f);return a=x*u,o=f*u,t.copy(n).addScaledVector(Qn,a).addScaledVector(jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},ji={h:0,s:0,l:0};function Cr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Wc(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cr(a,r,e+1/3),this.g=Cr(a,r,e),this.b=Cr(a,r,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=Cl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Ye.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Pt(Mt.r*255,0,255))*65536+Math.round(Pt(Mt.g*255,0,255))*256+Math.round(Pt(Mt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Mt.copy(this),t);let n=Mt.r,i=Mt.g,r=Mt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=xt){Ye.fromWorkingColorSpace(Mt.copy(this),e);let t=Mt.r,n=Mt.g,i=Mt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(ji);let n=mr(yn.h,ji.h,t),i=mr(yn.s,ji.s,t),r=mr(yn.l,ji.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mt=new Ge;Ge.NAMES=Cl;var ih=0,Gn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=hi,this.side=jt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hr,this.blendDst=kr,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==jt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hr&&(n.blendSrc=this.blendSrc),this.blendDst!==kr&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ve=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ht=new P,es=new De,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bo&&(e.usage=this.usage),e}};var As=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Rs=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var sh=0,zt=new ut,Pr=new Rt,ei=new P,Ot=new kn,Ci=new kn,gt=new P,Ft=class s extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rl(e)?Rs:As)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Ot.min,Ci.min),Ot.expandByPoint(gt),gt.addVectors(Ot.max,Ci.max),Ot.expandByPoint(gt)):(Ot.expandByPoint(Ci.min),Ot.expandByPoint(Ci.max))}Ot.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gt.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(e,c),gt.add(ei)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new P,h[w]=new P;let d=new P,f=new P,p=new P,g=new De,x=new De,m=new De,u=new P,v=new P;function _(w,L,G){d.fromArray(i,w*3),f.fromArray(i,L*3),p.fromArray(i,G*3),g.fromArray(a,w*2),x.fromArray(a,L*2),m.fromArray(a,G*2),f.sub(d),p.sub(d),x.sub(g),m.sub(g);let ee=1/(x.x*m.y-m.x*x.y);isFinite(ee)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(ee),v.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(ee),c[w].add(u),c[L].add(u),c[G].add(u),h[w].add(v),h[L].add(v),h[G].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,L=E.length;w<L;++w){let G=E[w],ee=G.start,I=G.count;for(let U=ee,V=ee+I;U<V;U+=3)_(n[U+0],n[U+1],n[U+2])}let R=new P,T=new P,A=new P,z=new P;function M(w){A.fromArray(r,w*3),z.copy(A);let L=c[w];R.copy(L),R.sub(A.multiplyScalar(A.dot(L))).normalize(),T.crossVectors(z,L);let ee=T.dot(h[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=ee}for(let w=0,L=E.length;w<L;++w){let G=E[w],ee=G.start,I=G.count;for(let U=ee,V=ee+I;U<V;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new Gt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bo=new ut,Dn=new Es,ts=new Ni,zo=new P,ti=new P,ni=new P,ii=new P,Ir=new P,ns=new P,is=new De,ss=new De,rs=new De,Ho=new P,ko=new P,Go=new P,as=new P,os=new P,te=class extends Rt{constructor(e=new Ft,t=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ir.fromBufferAttribute(d,e),a?ns.addScaledVector(Ir,h):ns.addScaledVector(Ir.sub(t),h))}t.add(ns)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),Dn.copy(e.ray).recast(e.near),!(ts.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(ts,zo)===null||Dn.origin.distanceToSquared(zo)>(e.far-e.near)**2))&&(Bo.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(Bo),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,R=_;E<R;E+=3){let T=o.getX(E),A=o.getX(E+1),z=o.getX(E+2);i=ls(this,u,e,n,c,h,d,T,A,z),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let v=o.getX(m),_=o.getX(m+1),E=o.getX(m+2);i=ls(this,a,e,n,c,h,d,v,_,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,R=_;E<R;E+=3){let T=E,A=E+1,z=E+2;i=ls(this,u,e,n,c,h,d,T,A,z),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let v=m,_=m+1,E=m+2;i=ls(this,a,e,n,c,h,d,v,_,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function rh(s,e,t,n,i,r,a,o){let l;if(e.side===It?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===jt,o),l===null)return null;os.copy(o),os.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(os);return c<t.near||c>t.far?null:{distance:c,point:os.clone(),object:s}}function ls(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ti),s.getVertexPosition(l,ni),s.getVertexPosition(c,ii);let h=rh(s,e,t,n,ti,ni,ii,as);if(h){i&&(is.fromBufferAttribute(i,o),ss.fromBufferAttribute(i,l),rs.fromBufferAttribute(i,c),h.uv=oi.getInterpolation(as,ti,ni,ii,is,ss,rs,new De)),r&&(is.fromBufferAttribute(r,o),ss.fromBufferAttribute(r,l),rs.fromBufferAttribute(r,c),h.uv1=oi.getInterpolation(as,ti,ni,ii,is,ss,rs,new De),h.uv2=h.uv1),a&&(Ho.fromBufferAttribute(a,o),ko.fromBufferAttribute(a,l),Go.fromBufferAttribute(a,c),h.normal=oi.getInterpolation(as,ti,ni,ii,Ho,ko,Go,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};oi.getNormal(ti,ni,ii,d.normal),h.face=d}return h}var ot=class s extends Ft{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(d,2));function g(x,m,u,v,_,E,R,T,A,z,M){let w=E/A,L=R/z,G=E/2,ee=R/2,I=T/2,U=A+1,V=z+1,q=0,X=0,W=new P;for(let J=0;J<V;J++){let j=J*L-ee;for(let ce=0;ce<U;ce++){let k=ce*w-G;W[x]=k*v,W[m]=j*_,W[u]=I,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[u]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(ce/A),d.push(1-J/z),q+=1}}for(let J=0;J<z;J++)for(let j=0;j<A;j++){let ce=f+j+U*J,k=f+j+U*(J+1),Y=f+(j+1)+U*(J+1),oe=f+(j+1)+U*J;l.push(ce,k,oe),l.push(k,Y,oe),X+=6}o.addGroup(p,X,M),p+=X,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){let e={};for(let t=0;t<s.length;t++){let n=gi(s[t]);for(let i in n)e[i]=n[i]}return e}function ah(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pl(s){return s.getRenderTarget()===null?s.outputColorSpace:Ye.workingColorSpace}var oh={clone:gi,merge:At},lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lh,this.fragmentShader=ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=ah(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Cs=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},St=class extends Cs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},si=-90,ri=1,Kr=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new St(si,ri,e,t);i.layers=this.layers,this.add(i);let r=new St(si,ri,e,t);r.layers=this.layers,this.add(r);let a=new St(si,ri,e,t);a.layers=this.layers,this.add(a);let o=new St(si,ri,e,t);o.layers=this.layers,this.add(o);let l=new St(si,ri,e,t);l.layers=this.layers,this.add(l);let c=new St(si,ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ps=class extends Vt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:fi,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qr=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ii("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hn?xt:kt),this.texture=new Ps(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ot(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:wn});r.uniforms.tEquirect.value=t;let a=new te(i,r),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=Ht),new Kr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Lr=new P,hh=new P,uh=new ze,un=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Lr.subVectors(n,t).cross(hh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Lr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||uh.getNormalMatrix(e),i=this.coplanarPoint(Lr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Un=new Ni,cs=new P,Fi=class{constructor(e=new un,t=new un,n=new un,i=new un,r=new un,a=new un){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],p=i[8],g=i[9],x=i[10],m=i[11],u=i[12],v=i[13],_=i[14],E=i[15];if(n[0].setComponents(l-r,f-c,m-p,E-u).normalize(),n[1].setComponents(l+r,f+c,m+p,E+u).normalize(),n[2].setComponents(l+a,f+h,m+g,E+v).normalize(),n[3].setComponents(l-a,f-h,m-g,E-v).normalize(),n[4].setComponents(l-o,f-d,m-x,E-_).normalize(),t===dn)n[5].setComponents(l+o,f+d,m+x,E+_).normalize();else if(t===ys)n[5].setComponents(o,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(cs.x=i.normal.x>0?e.max.x:e.min.x,cs.y=i.normal.y>0?e.max.y:e.min.y,cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Il(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function dh(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let d=c.array,f=c.usage,p=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,f),c.onUploadCallback();let x;if(d instanceof Float32Array)x=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=s.SHORT;else if(d instanceof Uint32Array)x=s.UNSIGNED_INT;else if(d instanceof Int32Array)x=s.INT;else if(d instanceof Int8Array)x=s.BYTE;else if(d instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,d){let f=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,c),p.count===-1&&g.length===0&&s.bufferSubData(d,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let u=g[x];t?s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var en=class s extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,f=t/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let v=u*f-a;for(let _=0;_<c;_++){let E=_*d-r;g.push(E,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){let _=v+c*u,E=v+c*(u+1),R=v+1+c*(u+1),T=v+1+c*u;p.push(_,E,T),p.push(E,R,T)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ph=`#ifdef USE_ALPHAHASH
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
#endif`,mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vh=`#ifdef USE_AOMAP
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
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mh=`#ifdef USE_BATCHING
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
#endif`,Sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Th=`#ifdef USE_IRIDESCENCE
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
#endif`,Ah=`#ifdef USE_BUMPMAP
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
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
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
} // validated`,Fh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bh=`vec3 transformedNormal = objectNormal;
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
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wh=`
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
}`,Xh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eu=`#ifdef USE_GRADIENTMAP
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
}`,tu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ru=`uniform bool receiveShadow;
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
#endif`,au=`#ifdef USE_ENVMAP
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
#endif`,ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uu=`PhysicalMaterial material;
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
#endif`,du=`struct PhysicalMaterial {
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
}`,fu=`
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
#endif`,pu=`#if defined( RE_IndirectDiffuse )
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
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wu=`#if defined( USE_POINTS_UV )
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
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Au=`#ifdef USE_MORPHNORMALS
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
#endif`,Ru=`#ifdef USE_MORPHTARGETS
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
#endif`,Cu=`#ifdef USE_MORPHTARGETS
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
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
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
#endif`,Ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ku=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ku=`float getShadowMask() {
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
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ju=`#ifdef USE_SKINNING
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
#endif`,ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,td=`#ifdef USE_SKINNING
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
#endif`,nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ad=`#ifdef USE_TRANSMISSION
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
#endif`,od=`#ifdef USE_TRANSMISSION
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
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fd=`uniform sampler2D t2D;
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
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,md=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`#include <common>
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
}`,vd=`#if DEPTH_PACKING == 3200
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
}`,yd=`#define DISTANCE
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
}`,Md=`#define DISTANCE
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
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`uniform float scale;
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
}`,Ed=`uniform vec3 diffuse;
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
}`,Td=`#include <common>
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
}`,Ad=`uniform vec3 diffuse;
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
}`,Rd=`#define LAMBERT
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
}`,Cd=`#define LAMBERT
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
}`,Pd=`#define MATCAP
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
}`,Id=`#define MATCAP
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
}`,Ld=`#define NORMAL
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
}`,Dd=`#define NORMAL
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
}`,Ud=`#define PHONG
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
}`,Nd=`#define PHONG
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
}`,Od=`#define STANDARD
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
}`,Fd=`#define STANDARD
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
}`,Bd=`#define TOON
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
}`,zd=`#define TOON
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
}`,Hd=`uniform float size;
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
}`,kd=`uniform vec3 diffuse;
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
}`,Gd=`#include <common>
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
}`,Vd=`uniform vec3 color;
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
}`,Wd=`uniform float rotation;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:fh,alphahash_pars_fragment:ph,alphamap_fragment:mh,alphamap_pars_fragment:gh,alphatest_fragment:_h,alphatest_pars_fragment:xh,aomap_fragment:vh,aomap_pars_fragment:yh,batching_pars_vertex:Mh,batching_vertex:Sh,begin_vertex:wh,beginnormal_vertex:bh,bsdfs:Eh,iridescence_fragment:Th,bumpmap_pars_fragment:Ah,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Ih,color_fragment:Lh,color_pars_fragment:Dh,color_pars_vertex:Uh,color_vertex:Nh,common:Oh,cube_uv_reflection_fragment:Fh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:zh,displacementmap_vertex:Hh,emissivemap_fragment:kh,emissivemap_pars_fragment:Gh,colorspace_fragment:Vh,colorspace_pars_fragment:Wh,envmap_fragment:Xh,envmap_common_pars_fragment:qh,envmap_pars_fragment:Yh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:au,envmap_vertex:Zh,fog_vertex:Jh,fog_pars_vertex:Kh,fog_fragment:Qh,fog_pars_fragment:jh,gradientmap_pars_fragment:eu,lightmap_fragment:tu,lightmap_pars_fragment:nu,lights_lambert_fragment:iu,lights_lambert_pars_fragment:su,lights_pars_begin:ru,lights_toon_fragment:ou,lights_toon_pars_fragment:lu,lights_phong_fragment:cu,lights_phong_pars_fragment:hu,lights_physical_fragment:uu,lights_physical_pars_fragment:du,lights_fragment_begin:fu,lights_fragment_maps:pu,lights_fragment_end:mu,logdepthbuf_fragment:gu,logdepthbuf_pars_fragment:_u,logdepthbuf_pars_vertex:xu,logdepthbuf_vertex:vu,map_fragment:yu,map_pars_fragment:Mu,map_particle_fragment:Su,map_particle_pars_fragment:wu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Eu,morphcolor_vertex:Tu,morphnormal_vertex:Au,morphtarget_pars_vertex:Ru,morphtarget_vertex:Cu,normal_fragment_begin:Pu,normal_fragment_maps:Iu,normal_pars_fragment:Lu,normal_pars_vertex:Du,normal_vertex:Uu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Ou,clearcoat_normal_fragment_maps:Fu,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:zu,opaque_fragment:Hu,packing:ku,premultiplied_alpha_fragment:Gu,project_vertex:Vu,dithering_fragment:Wu,dithering_pars_fragment:Xu,roughnessmap_fragment:qu,roughnessmap_pars_fragment:Yu,shadowmap_pars_fragment:$u,shadowmap_pars_vertex:Zu,shadowmap_vertex:Ju,shadowmask_pars_fragment:Ku,skinbase_vertex:Qu,skinning_pars_vertex:ju,skinning_vertex:ed,skinnormal_vertex:td,specularmap_fragment:nd,specularmap_pars_fragment:id,tonemapping_fragment:sd,tonemapping_pars_fragment:rd,transmission_fragment:ad,transmission_pars_fragment:od,uv_pars_fragment:ld,uv_pars_vertex:cd,uv_vertex:hd,worldpos_vertex:ud,background_vert:dd,background_frag:fd,backgroundCube_vert:pd,backgroundCube_frag:md,cube_vert:gd,cube_frag:_d,depth_vert:xd,depth_frag:vd,distanceRGBA_vert:yd,distanceRGBA_frag:Md,equirect_vert:Sd,equirect_frag:wd,linedashed_vert:bd,linedashed_frag:Ed,meshbasic_vert:Td,meshbasic_frag:Ad,meshlambert_vert:Rd,meshlambert_frag:Cd,meshmatcap_vert:Pd,meshmatcap_frag:Id,meshnormal_vert:Ld,meshnormal_frag:Dd,meshphong_vert:Ud,meshphong_frag:Nd,meshphysical_vert:Od,meshphysical_frag:Fd,meshtoon_vert:Bd,meshtoon_frag:zd,points_vert:Hd,points_frag:kd,shadow_vert:Gd,shadow_frag:Vd,sprite_vert:Wd,sprite_frag:Xd},ie={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Qt={basic:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:At([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:At([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:At([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:At([ie.points,ie.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:At([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:At([ie.common,ie.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:At([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:At([ie.sprite,ie.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:At([ie.common,ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:At([ie.lights,ie.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Qt.physical={uniforms:At([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var hs={r:0,b:0,g:0};function qd(s,e,t,n,i,r,a){let o=new Ge(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(m,u){let v=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?t:e).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),v=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ys)?(h===void 0&&(h=new te(new ot(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:gi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(_.colorSpace)!==Qe,(d!==_||f!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new te(new en(2,2),new mn({name:"BackgroundMaterial",uniforms:gi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(_.colorSpace)!==Qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,u){m.getRGB(hs,Pl(s)),n.buffers.color.setClear(hs.r,hs.g,hs.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function Yd(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function d(I,U,V,q,X){let W=!1;if(a){let J=x(q,V,U);c!==J&&(c=J,p(c.object)),W=u(I,q,V,X),W&&v(I,q,V,X)}else{let J=U.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=q.id,c.program=V.id,c.wireframe=J,W=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,z(I,U,V,q),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,U,V){let q=V.wireframe===!0,X=o[I.id];X===void 0&&(X={},o[I.id]=X);let W=X[U.id];W===void 0&&(W={},X[U.id]=W);let J=W[q];return J===void 0&&(J=m(f()),W[q]=J),J}function m(I){let U=[],V=[],q=[];for(let X=0;X<i;X++)U[X]=0,V[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:q,object:I,attributes:{},index:null}}function u(I,U,V,q){let X=c.attributes,W=U.attributes,J=0,j=V.getAttributes();for(let ce in j)if(j[ce].location>=0){let Y=X[ce],oe=W[ce];if(oe===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;J++}return c.attributesNum!==J||c.index!==q}function v(I,U,V,q){let X={},W=U.attributes,J=0,j=V.getAttributes();for(let ce in j)if(j[ce].location>=0){let Y=W[ce];Y===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),X[ce]=oe,J++}c.attributes=X,c.attributesNum=J,c.index=q}function _(){let I=c.newAttributes;for(let U=0,V=I.length;U<V;U++)I[U]=0}function E(I){R(I,0)}function R(I,U){let V=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;V[I]=1,q[I]===0&&(s.enableVertexAttribArray(I),q[I]=1),X[I]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),X[I]=U)}function T(){let I=c.newAttributes,U=c.enabledAttributes;for(let V=0,q=U.length;V<q;V++)U[V]!==I[V]&&(s.disableVertexAttribArray(V),U[V]=0)}function A(I,U,V,q,X,W,J){J===!0?s.vertexAttribIPointer(I,U,V,X,W):s.vertexAttribPointer(I,U,V,q,X,W)}function z(I,U,V,q){if(n.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let X=q.attributes,W=V.getAttributes(),J=U.defaultAttributeValues;for(let j in W){let ce=W[j];if(ce.location>=0){let k=X[j];if(k===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){let Y=k.normalized,oe=k.itemSize,ge=t.get(k);if(ge===void 0)continue;let me=ge.buffer,Re=ge.type,Pe=ge.bytesPerElement,Se=n.isWebGL2===!0&&(Re===s.INT||Re===s.UNSIGNED_INT||k.gpuType===xl);if(k.isInterleavedBufferAttribute){let We=k.data,N=We.stride,bt=k.offset;if(We.isInstancedInterleavedBuffer){for(let xe=0;xe<ce.locationSize;xe++)R(ce.location+xe,We.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let xe=0;xe<ce.locationSize;xe++)E(ce.location+xe);s.bindBuffer(s.ARRAY_BUFFER,me);for(let xe=0;xe<ce.locationSize;xe++)A(ce.location+xe,oe/ce.locationSize,Re,Y,N*Pe,(bt+oe/ce.locationSize*xe)*Pe,Se)}else{if(k.isInstancedBufferAttribute){for(let We=0;We<ce.locationSize;We++)R(ce.location+We,k.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let We=0;We<ce.locationSize;We++)E(ce.location+We);s.bindBuffer(s.ARRAY_BUFFER,me);for(let We=0;We<ce.locationSize;We++)A(ce.location+We,oe/ce.locationSize,Re,Y,oe*Pe,oe/ce.locationSize*We*Pe,Se)}}else if(J!==void 0){let Y=J[j];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(ce.location,Y);break;case 3:s.vertexAttrib3fv(ce.location,Y);break;case 4:s.vertexAttrib4fv(ce.location,Y);break;default:s.vertexAttrib1fv(ce.location,Y)}}}}T()}function M(){G();for(let I in o){let U=o[I];for(let V in U){let q=U[V];for(let X in q)g(q[X].object),delete q[X];delete U[V]}delete o[I]}}function w(I){if(o[I.id]===void 0)return;let U=o[I.id];for(let V in U){let q=U[V];for(let X in q)g(q[X].object),delete q[X];delete U[V]}delete o[I.id]}function L(I){for(let U in o){let V=o[U];if(V[I.id]===void 0)continue;let q=V[I.id];for(let X in q)g(q[X].object),delete q[X];delete V[I.id]}}function G(){ee(),h=!0,c!==l&&(c=l,p(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:ee,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:E,disableUnusedAttributes:T}}function $d(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=d[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Zd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,E=a||e.has("OES_texture_float"),R=_&&E,T=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:T}}function Jd(s){let e=this,t=null,n=0,i=!1,r=!1,a=new un,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,_=v*4,E=u.clippingState||null;l.value=E,E=h(g,f,_,p);for(let R=0;R!==_;++R)E[R]=t[R];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=p+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,E=p;_!==x;++_,E+=4)a.copy(d[_]).applyMatrix4(v,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Kd(s){let e=new WeakMap;function t(a,o){return o===Gr?a.mapping=fi:o===Vr&&(a.mapping=pi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Gr||o===Vr)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qr(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Is=class extends Cs{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},li=4,Vo=[.125,.215,.35,.446,.526,.582],Fn=20,Dr=new Is,Wo=new Ge,Ur=null,Nr=0,Or=0,Nn=(1+Math.sqrt(5))/2,ai=1/Nn,Xo=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Nn,ai),new P(0,Nn,-ai),new P(ai,0,Nn),new P(-ai,0,Nn),new P(Nn,ai,0),new P(-Nn,ai,0)],Ls=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ur=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ur,Nr,Or),e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ur=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Ui,format:Zt,colorSpace:fn,depthBuffer:!1},i=qo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qd(r)),this._blurMaterial=jd(r,e,t)}return i}_compileMaterial(e){let t=new te(this._lodPlanes[0],e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,i){let o=new St(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Wo),h.toneMapping=bn,h.autoClear=!1;let p=new Ve({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new te(new ot,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Wo),x=!0);for(let u=0;u<6;u++){let v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let _=this._cubeSize;us(i,v*_,u>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===fi||e.mapping===pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yo());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Dr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Xo[(i-1)%Xo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new te(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Fn;m>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);let u=[],v=0;for(let A=0;A<Fn;++A){let z=A/x,M=Math.exp(-z*z/2);u.push(M),A===0?v+=M:A<m&&(v+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let E=this._sizeLods[i],R=3*E*(i>_-li?i-_+li:0),T=4*(this._cubeSize-E);us(t,R,T,3*E,2*E),l.setRenderTarget(t),l.render(d,Dr)}};function Qd(s){let e=[],t=[],n=[],i=s,r=s-li+1+Vo.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-li?l=Vo[a-s+li-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),E=new Float32Array(u*g*p);for(let T=0;T<p;T++){let A=T%3*2/3-1,z=T>2?0:-1,M=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];v.set(M,x*g*T),_.set(f,m*g*T);let w=[T,T,T,T,T,T];E.set(w,u*g*T)}let R=new Ft;R.setAttribute("position",new Gt(v,x)),R.setAttribute("uv",new Gt(_,m)),R.setAttribute("faceIndex",new Gt(E,u)),e.push(R),i>li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qo(s,e,t){let n=new pn(s,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function jd(s,e,t){let n=new Float32Array(Fn),i=new P(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Yo(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function $o(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ra(){return`

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
	`}function ef(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Gr||l===Vr,h=l===fi||l===pi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ls(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Ls(s));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function tf(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nf(s,e,t,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let x=p[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],s.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,E=v.length;_<E;_+=3){let R=v[_+0],T=v[_+1],A=v[_+2];f.push(R,T,T,A,A,R)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,E=v.length/3-1;_<E;_+=3){let R=_+0,T=_+1,A=_+2;f.push(R,T,T,A,A,R)}}else return;let m=new(Rl(f)?Rs:As)(f,1);m.version=x;let u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function sf(s,e,t,n){let i=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){s.drawElements(r,g,o,p*l),t.update(g,r,1)}function d(p,g,x){if(x===0)return;let m,u;if(i)m=s,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](r,g,o,p*l,x),t.update(g,r,x)}function f(p,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(p[u]/l,g[u]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let u=0;for(let v=0;v<x;v++)u+=g[v];t.update(u,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function rf(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function af(s,e){return s[0]-e[0]}function of(s,e){return Math.abs(e[1])-Math.abs(s[1])}function lf(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new tt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],z=0;v===!0&&(z=1),_===!0&&(z=2),E===!0&&(z=3);let M=h.attributes.position.count*z,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let L=new Float32Array(M*w*4*g),G=new bs(L,M,w,g);G.type=Sn,G.needsUpdate=!0;let ee=z*4;for(let U=0;U<g;U++){let V=R[U],q=T[U],X=A[U],W=M*w*4*U;for(let J=0;J<V.count;J++){let j=J*ee;v===!0&&(a.fromBufferAttribute(V,J),L[W+j+0]=a.x,L[W+j+1]=a.y,L[W+j+2]=a.z,L[W+j+3]=0),_===!0&&(a.fromBufferAttribute(q,J),L[W+j+4]=a.x,L[W+j+5]=a.y,L[W+j+6]=a.z,L[W+j+7]=0),E===!0&&(a.fromBufferAttribute(X,J),L[W+j+8]=a.x,L[W+j+9]=a.y,L[W+j+10]=a.z,L[W+j+11]=X.itemSize===4?a.w:1)}}x={count:g,texture:G,size:new De(M,w)},r.set(h,x),h.addEventListener("dispose",I)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let u=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",u),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<p;_++){let E=g[_];E[0]=_,E[1]=f[_]}g.sort(of);for(let _=0;_<8;_++)_<p&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(af);let x=h.morphAttributes.position,m=h.morphAttributes.normal,u=0;for(let _=0;_<8;_++){let E=o[_],R=E[0],T=E[1];R!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),i[_]=T,u+=T):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let v=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function cf(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ds=class extends Vt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:zn,h!==zn&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zn&&(n=Mn),n===void 0&&h===mi&&(n=Bn),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ll=new Vt,Dl=new Ds(1,1);Dl.compareFunction=Al;var Ul=new bs,Nl=new Jr,Ol=new Ps,Zo=[],Jo=[],Ko=new Float32Array(16),Qo=new Float32Array(9),jo=new Float32Array(4);function vi(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Zo[i];if(r===void 0&&(r=new Float32Array(i),Zo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Zs(s,e){let t=Jo[e];t===void 0&&(t=new Int32Array(e),Jo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function hf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uf(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function df(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function ff(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function pf(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;jo.set(n),s.uniformMatrix2fv(this.addr,!1,jo),ft(t,n)}}function mf(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Qo.set(n),s.uniformMatrix3fv(this.addr,!1,Qo),ft(t,n)}}function gf(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ko.set(n),s.uniformMatrix4fv(this.addr,!1,Ko),ft(t,n)}}function _f(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xf(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function vf(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function yf(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function Mf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Sf(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function wf(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function bf(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function Ef(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Dl:Ll;t.setTexture2D(e||r,i)}function Tf(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nl,i)}function Af(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ol,i)}function Rf(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ul,i)}function Cf(s){switch(s){case 5126:return hf;case 35664:return uf;case 35665:return df;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return xf;case 35668:case 35672:return vf;case 35669:case 35673:return yf;case 5125:return Mf;case 36294:return Sf;case 36295:return wf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Rf}}function Pf(s,e){s.uniform1fv(this.addr,e)}function If(s,e){let t=vi(e,this.size,2);s.uniform2fv(this.addr,t)}function Lf(s,e){let t=vi(e,this.size,3);s.uniform3fv(this.addr,t)}function Df(s,e){let t=vi(e,this.size,4);s.uniform4fv(this.addr,t)}function Uf(s,e){let t=vi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Nf(s,e){let t=vi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Of(s,e){let t=vi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ff(s,e){s.uniform1iv(this.addr,e)}function Bf(s,e){s.uniform2iv(this.addr,e)}function zf(s,e){s.uniform3iv(this.addr,e)}function Hf(s,e){s.uniform4iv(this.addr,e)}function kf(s,e){s.uniform1uiv(this.addr,e)}function Gf(s,e){s.uniform2uiv(this.addr,e)}function Vf(s,e){s.uniform3uiv(this.addr,e)}function Wf(s,e){s.uniform4uiv(this.addr,e)}function Xf(s,e,t){let n=this.cache,i=e.length,r=Zs(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ll,r[a])}function qf(s,e,t){let n=this.cache,i=e.length,r=Zs(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Nl,r[a])}function Yf(s,e,t){let n=this.cache,i=e.length,r=Zs(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ol,r[a])}function $f(s,e,t){let n=this.cache,i=e.length,r=Zs(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ul,r[a])}function Zf(s){switch(s){case 5126:return Pf;case 35664:return If;case 35665:return Lf;case 35666:return Df;case 35674:return Uf;case 35675:return Nf;case 35676:return Of;case 5124:case 35670:return Ff;case 35667:case 35671:return Bf;case 35668:case 35672:return zf;case 35669:case 35673:return Hf;case 5125:return kf;case 36294:return Gf;case 36295:return Vf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return $f}}var jr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cf(t.type)}},ea=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zf(t.type)}},ta=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Fr=/(\w+)(\])?(\[|\.)?/g;function el(s,e){s.seq.push(e),s.map[e.id]=e}function Jf(s,e,t){let n=s.name,i=n.length;for(Fr.lastIndex=0;;){let r=Fr.exec(n),a=Fr.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){el(t,c===void 0?new jr(o,s,e):new ea(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new ta(o),el(t,d)),t=d}}}var di=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Jf(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function tl(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Kf=37297,Qf=0;function jf(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ep(s){let e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(s),n;switch(e===t?n="":e===vs&&t===xs?n="LinearDisplayP3ToLinearSRGB":e===xs&&t===vs&&(n="LinearSRGBToLinearDisplayP3"),s){case fn:case $s:return[n,"LinearTransferOETF"];case xt:case Aa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function nl(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+jf(s.getShaderSource(e),a)}else return i}function tp(s,e){let t=ep(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function np(s,e){let t;switch(e){case yc:t="Linear";break;case Mc:t="Reinhard";break;case Sc:t="OptimizedCineon";break;case Ea:t="ACESFilmic";break;case bc:t="AgX";break;case wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ip(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ci).join(`
`)}function sp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ci).join(`
`)}function rp(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ap(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ci(s){return s!==""}function il(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var op=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(s){return s.replace(op,cp)}var lp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cp(s,e){let t=Le[e];if(t===void 0){let n=lp.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return na(t)}var hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(s){return s.replace(hp,up)}function up(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function al(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ba?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function fp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fi:case pi:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function mp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gl:e="ENVMAP_BLENDING_MULTIPLY";break;case xc:e="ENVMAP_BLENDING_MIX";break;case vc:e="ENVMAP_BLENDING_ADD";break}return e}function gp(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _p(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=dp(t),c=fp(t),h=pp(t),d=mp(t),f=gp(t),p=t.isWebGL2?"":ip(t),g=sp(t),x=rp(r),m=i.createProgram(),u,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ci).join(`
`),u.length>0&&(u+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ci).join(`
`),v.length>0&&(v+=`
`)):(u=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ci).join(`
`),v=[p,al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Le.tonemapping_pars_fragment:"",t.toneMapping!==bn?np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,tp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ci).join(`
`)),a=na(a),a=il(a,t),a=sl(a,t),o=na(o),o=il(o,t),o=sl(o,t),a=rl(a),o=rl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let E=_+u+a,R=_+v+o,T=tl(i,i.VERTEX_SHADER,E),A=tl(i,i.FRAGMENT_SHADER,R);i.attachShader(m,T),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function z(G){if(s.debug.checkShaderErrors){let ee=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(T).trim(),U=i.getShaderInfoLog(A).trim(),V=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,A);else{let X=nl(i,T,"vertex"),W=nl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+X+`
`+W)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(I===""||U==="")&&(q=!1);q&&(G.diagnostics={runnable:V,programLog:ee,vertexShader:{log:I,prefix:u},fragmentShader:{log:U,prefix:v}})}i.deleteShader(T),i.deleteShader(A),M=new di(i,m),w=ap(i,m)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(m,Kf)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qf++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}var xp=0,ia=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sa(e),t.set(e,n)),n}},sa=class{constructor(e){this.id=xp++,this.code=e,this.usedTimes=0}};function vp(s,e,t,n,i,r,a){let o=new Oi,l=new ia,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,w,L,G,ee){let I=G.fog,U=ee.geometry,V=M.isMeshStandardMaterial?G.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),X=q&&q.mapping===Ys?q.image.height:null,W=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=J!==void 0?J.length:0,ce=0;U.morphAttributes.position!==void 0&&(ce=1),U.morphAttributes.normal!==void 0&&(ce=2),U.morphAttributes.color!==void 0&&(ce=3);let k,Y,oe,ge;if(W){let Et=Qt[W];k=Et.vertexShader,Y=Et.fragmentShader}else k=M.vertexShader,Y=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);let me=s.getRenderTarget(),Re=ee.isInstancedMesh===!0,Pe=ee.isBatchedMesh===!0,Se=!!M.map,We=!!M.matcap,N=!!q,bt=!!M.aoMap,xe=!!M.lightMap,Te=!!M.bumpMap,de=!!M.normalMap,nt=!!M.displacementMap,Ue=!!M.emissiveMap,b=!!M.metalnessMap,y=!!M.roughnessMap,F=M.anisotropy>0,K=M.clearcoat>0,Z=M.iridescence>0,Q=M.sheen>0,fe=M.transmission>0,ae=F&&!!M.anisotropyMap,he=K&&!!M.clearcoatMap,Me=K&&!!M.clearcoatNormalMap,Ne=K&&!!M.clearcoatRoughnessMap,$=Z&&!!M.iridescenceMap,qe=Z&&!!M.iridescenceThicknessMap,ke=Q&&!!M.sheenColorMap,Ee=Q&&!!M.sheenRoughnessMap,_e=!!M.specularMap,ue=!!M.specularColorMap,Ie=!!M.specularIntensityMap,Xe=fe&&!!M.transmissionMap,st=fe&&!!M.thicknessMap,Fe=!!M.gradientMap,ne=!!M.alphaMap,C=M.alphaTest>0,se=!!M.alphaHash,re=!!M.extensions,we=!!U.attributes.uv1,ve=!!U.attributes.uv2,Ze=!!U.attributes.uv3,Je=bn;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Je=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:Y,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Pe,instancing:Re,instancingColor:Re&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:fn,map:Se,matcap:We,envMap:N,envMapMode:N&&q.mapping,envMapCubeUVHeight:X,aoMap:bt,lightMap:xe,bumpMap:Te,normalMap:de,displacementMap:f&&nt,emissiveMap:Ue,normalMapObjectSpace:de&&M.normalMapType===Oc,normalMapTangentSpace:de&&M.normalMapType===Tl,metalnessMap:b,roughnessMap:y,anisotropy:F,anisotropyMap:ae,clearcoat:K,clearcoatMap:he,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ne,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:qe,sheen:Q,sheenColorMap:ke,sheenRoughnessMap:Ee,specularMap:_e,specularColorMap:ue,specularIntensityMap:Ie,transmission:fe,transmissionMap:Xe,thicknessMap:st,gradientMap:Fe,opaque:M.transparent===!1&&M.blending===hi,alphaMap:ne,alphaTest:C,alphaHash:se,combine:M.combine,mapUv:Se&&x(M.map.channel),aoMapUv:bt&&x(M.aoMap.channel),lightMapUv:xe&&x(M.lightMap.channel),bumpMapUv:Te&&x(M.bumpMap.channel),normalMapUv:de&&x(M.normalMap.channel),displacementMapUv:nt&&x(M.displacementMap.channel),emissiveMapUv:Ue&&x(M.emissiveMap.channel),metalnessMapUv:b&&x(M.metalnessMap.channel),roughnessMapUv:y&&x(M.roughnessMap.channel),anisotropyMapUv:ae&&x(M.anisotropyMap.channel),clearcoatMapUv:he&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(M.sheenRoughnessMap.channel),specularMapUv:_e&&x(M.specularMap.channel),specularColorMapUv:ue&&x(M.specularColorMap.channel),specularIntensityMapUv:Ie&&x(M.specularIntensityMap.channel),transmissionMapUv:Xe&&x(M.transmissionMap.channel),thicknessMapUv:st&&x(M.thicknessMap.channel),alphaMapUv:ne&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(de||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:ve,vertexUv3s:Ze,pointsUvs:ee.isPoints===!0&&!!U.attributes.uv&&(Se||ne),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Se&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===at,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:re&&M.extensions.derivatives===!0,extensionFragDepth:re&&M.extensions.fragDepth===!0,extensionDrawBuffers:re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)w.push(L),w.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(w,M),_(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function E(M){let w=g[M.type],L;if(w){let G=Qt[w];L=oh.clone(G.uniforms)}else L=M.uniforms;return L}function R(M,w){let L;for(let G=0,ee=c.length;G<ee;G++){let I=c[G];if(I.cacheKey===w){L=I,++L.usedTimes;break}}return L===void 0&&(L=new _p(s,w,M,r),c.push(L)),L}function T(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:z}}function yp(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Mp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ol(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ll(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,p,g,x,m){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},s[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function o(d,f,p,g,x,m){let u=a(d,f,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):t.push(u)}function l(d,f,p,g,x,m){let u=a(d,f,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Mp),n.length>1&&n.sort(f||ol),i.length>1&&i.sort(f||ol)}function h(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Sp(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new ll,s.set(n,[a])):i>=r.length?(a=new ll,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function wp(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ge};break;case"SpotLight":t={position:new P,direction:new P,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function bp(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Ep=0;function Tp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ap(s,e){let t=new wp,n=bp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);let r=new P,a=new ut,o=new ut;function l(h,d){let f=0,p=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let x=0,m=0,u=0,v=0,_=0,E=0,R=0,T=0,A=0,z=0,M=0;h.sort(Tp);let w=d===!0?Math.PI:1;for(let G=0,ee=h.length;G<ee;G++){let I=h[G],U=I.color,V=I.intensity,q=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=U.r*V*w,p+=U.g*V*w,g+=U.b*V*w;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],V);M++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){let J=I.shadow,j=n.get(I);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=X,i.directionalShadowMatrix[x]=I.shadow.matrix,E++}i.directional[x]=W,x++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(U).multiplyScalar(V*w),W.distance=q,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[u]=W;let J=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,J.updateMatrices(I),I.castShadow&&z++),i.spotLightMatrix[u]=J.matrix,I.castShadow){let j=n.get(I);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[u]=j,i.spotShadowMap[u]=X,T++}u++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(U).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=W,v++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*w),W.distance=I.distance,W.decay=I.decay,I.castShadow){let J=I.shadow,j=n.get(I);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=I.shadow.matrix,R++}i.point[m]=W,m++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(V*w),W.groundColor.copy(I.groundColor).multiplyScalar(V*w),i.hemi[_]=W,_++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;let L=i.hash;(L.directionalLength!==x||L.pointLength!==m||L.spotLength!==u||L.rectAreaLength!==v||L.hemiLength!==_||L.numDirectionalShadows!==E||L.numPointShadows!==R||L.numSpotShadows!==T||L.numSpotMaps!==A||L.numLightProbes!==M)&&(i.directional.length=x,i.spot.length=u,i.rectArea.length=v,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=T+A-z,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=M,L.directionalLength=x,L.pointLength=m,L.spotLength=u,L.rectAreaLength=v,L.hemiLength=_,L.numDirectionalShadows=E,L.numPointShadows=R,L.numSpotShadows=T,L.numSpotMaps=A,L.numLightProbes=M,i.version=Ep++)}function c(h,d){let f=0,p=0,g=0,x=0,m=0,u=d.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let E=h[v];if(E.isDirectionalLight){let R=i.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),f++}else if(E.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),g++}else if(E.isRectAreaLight){let R=i.rectArea[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),o.identity(),a.copy(E.matrixWorld),a.premultiply(u),o.extractRotation(a),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){let R=i.point[p];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),p++}else if(E.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:i}}function cl(s,e){let t=new Ap(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Rp(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new cl(s,e),t.set(r,[l])):a>=o.length?(l=new cl(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var ra=class extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},aa=class extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pp=`uniform sampler2D shadow_pass;
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
}`;function Ip(s,e,t){let n=new Fi,i=new De,r=new De,a=new tt,o=new ra({depthPacking:Nc}),l=new aa,c={},h=t.maxTextureSize,d={[jt]:It,[It]:jt,[at]:at},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Cp,fragmentShader:Pp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new te(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let u=this.type;this.render=function(T,A,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=s.getRenderTarget(),w=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),G=s.state;G.setBlending(wn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let ee=u!==hn&&this.type===hn,I=u===hn&&this.type!==hn;for(let U=0,V=T.length;U<V;U++){let q=T[U],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let W=X.getFrameExtents();if(i.multiply(W),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||ee===!0||I===!0){let j=this.type!==hn?{minFilter:_t,magFilter:_t}:{};X.map!==null&&X.map.dispose(),X.map=new pn(i.x,i.y,j),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let J=X.getViewportCount();for(let j=0;j<J;j++){let ce=X.getViewport(j);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),G.viewport(a),X.updateMatrices(q,j),n=X.getFrustum(),E(A,z,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===hn&&v(X,z),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(M,w,L)};function v(T,A){let z=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,z,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,z,p,x,null)}function _(T,A,z,M){let w=null,L=z.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)w=L;else if(w=z.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=w.uuid,ee=A.uuid,I=c[G];I===void 0&&(I={},c[G]=I);let U=I[ee];U===void 0&&(U=w.clone(),I[ee]=U,A.addEventListener("dispose",R)),w=U}if(w.visible=A.visible,w.wireframe=A.wireframe,M===hn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=s.properties.get(w);G.light=z}return w}function E(T,A,z,M,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===hn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld);let ee=e.update(T),I=T.material;if(Array.isArray(I)){let U=ee.groups;for(let V=0,q=U.length;V<q;V++){let X=U[V],W=I[X.materialIndex];if(W&&W.visible){let J=_(T,W,M,w);T.onBeforeShadow(s,T,A,z,ee,J,X),s.renderBufferDirect(z,null,ee,J,T,X),T.onAfterShadow(s,T,A,z,ee,J,X)}}}else if(I.visible){let U=_(T,I,M,w);T.onBeforeShadow(s,T,A,z,ee,U,null),s.renderBufferDirect(z,null,ee,U,T,null),T.onAfterShadow(s,T,A,z,ee,U,null)}}let G=T.children;for(let ee=0,I=G.length;ee<I;ee++)E(G[ee],A,z,M,w)}function R(T){T.target.removeEventListener("dispose",R);for(let z in c){let M=c[z],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function Lp(s,e,t){let n=t.isWebGL2;function i(){let C=!1,se=new tt,re=null,we=new tt(0,0,0,0);return{setMask:function(ve){re!==ve&&!C&&(s.colorMask(ve,ve,ve,ve),re=ve)},setLocked:function(ve){C=ve},setClear:function(ve,Ze,Je,pt,Et){Et===!0&&(ve*=pt,Ze*=pt,Je*=pt),se.set(ve,Ze,Je,pt),we.equals(se)===!1&&(s.clearColor(ve,Ze,Je,pt),we.copy(se))},reset:function(){C=!1,re=null,we.set(-1,0,0,0)}}}function r(){let C=!1,se=null,re=null,we=null;return{setTest:function(ve){ve?Pe(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(ve){se!==ve&&!C&&(s.depthMask(ve),se=ve)},setFunc:function(ve){if(re!==ve){switch(ve){case uc:s.depthFunc(s.NEVER);break;case dc:s.depthFunc(s.ALWAYS);break;case fc:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case pc:s.depthFunc(s.EQUAL);break;case mc:s.depthFunc(s.GEQUAL);break;case gc:s.depthFunc(s.GREATER);break;case _c:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=ve}},setLocked:function(ve){C=ve},setClear:function(ve){we!==ve&&(s.clearDepth(ve),we=ve)},reset:function(){C=!1,se=null,re=null,we=null}}}function a(){let C=!1,se=null,re=null,we=null,ve=null,Ze=null,Je=null,pt=null,Et=null;return{setTest:function(Ke){C||(Ke?Pe(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!C&&(s.stencilMask(Ke),se=Ke)},setFunc:function(Ke,Tt,Kt){(re!==Ke||we!==Tt||ve!==Kt)&&(s.stencilFunc(Ke,Tt,Kt),re=Ke,we=Tt,ve=Kt)},setOp:function(Ke,Tt,Kt){(Ze!==Ke||Je!==Tt||pt!==Kt)&&(s.stencilOp(Ke,Tt,Kt),Ze=Ke,Je=Tt,pt=Kt)},setLocked:function(Ke){C=Ke},setClear:function(Ke){Et!==Ke&&(s.clearStencil(Ke),Et=Ke)},reset:function(){C=!1,se=null,re=null,we=null,ve=null,Ze=null,Je=null,pt=null,Et=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap,f={},p={},g=new WeakMap,x=[],m=null,u=!1,v=null,_=null,E=null,R=null,T=null,A=null,z=null,M=new Ge(0,0,0),w=0,L=!1,G=null,ee=null,I=null,U=null,V=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=W>=2);let j=null,ce={},k=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),oe=new tt().fromArray(k),ge=new tt().fromArray(Y);function me(C,se,re,we){let ve=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(C,Ze),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<re;Je++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(se+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return Ze}let Re={};Re[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(s.DEPTH_TEST),l.setFunc(ps),Ue(!1),b(Ga),Pe(s.CULL_FACE),de(wn);function Pe(C){f[C]!==!0&&(s.enable(C),f[C]=!0)}function Se(C){f[C]!==!1&&(s.disable(C),f[C]=!1)}function We(C,se){return p[C]!==se?(s.bindFramebuffer(C,se),p[C]=se,n&&(C===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=se),C===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function N(C,se){let re=x,we=!1;if(C)if(re=g.get(se),re===void 0&&(re=[],g.set(se,re)),C.isWebGLMultipleRenderTargets){let ve=C.texture;if(re.length!==ve.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,Je=ve.length;Ze<Je;Ze++)re[Ze]=s.COLOR_ATTACHMENT0+Ze;re.length=ve.length,we=!0}}else re[0]!==s.COLOR_ATTACHMENT0&&(re[0]=s.COLOR_ATTACHMENT0,we=!0);else re[0]!==s.BACK&&(re[0]=s.BACK,we=!0);we&&(t.isWebGL2?s.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function bt(C){return m!==C?(s.useProgram(C),m=C,!0):!1}let xe={[On]:s.FUNC_ADD,[Jl]:s.FUNC_SUBTRACT,[Kl]:s.FUNC_REVERSE_SUBTRACT};if(n)xe[Xa]=s.MIN,xe[qa]=s.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(xe[Xa]=C.MIN_EXT,xe[qa]=C.MAX_EXT)}let Te={[Ql]:s.ZERO,[jl]:s.ONE,[ec]:s.SRC_COLOR,[Hr]:s.SRC_ALPHA,[ac]:s.SRC_ALPHA_SATURATE,[sc]:s.DST_COLOR,[nc]:s.DST_ALPHA,[tc]:s.ONE_MINUS_SRC_COLOR,[kr]:s.ONE_MINUS_SRC_ALPHA,[rc]:s.ONE_MINUS_DST_COLOR,[ic]:s.ONE_MINUS_DST_ALPHA,[oc]:s.CONSTANT_COLOR,[lc]:s.ONE_MINUS_CONSTANT_COLOR,[cc]:s.CONSTANT_ALPHA,[hc]:s.ONE_MINUS_CONSTANT_ALPHA};function de(C,se,re,we,ve,Ze,Je,pt,Et,Ke){if(C===wn){u===!0&&(Se(s.BLEND),u=!1);return}if(u===!1&&(Pe(s.BLEND),u=!0),C!==Zl){if(C!==v||Ke!==L){if((_!==On||T!==On)&&(s.blendEquation(s.FUNC_ADD),_=On,T=On),Ke)switch(C){case hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fs:s.blendFunc(s.ONE,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,R=null,A=null,z=null,M.set(0,0,0),w=0,v=C,L=Ke}return}ve=ve||se,Ze=Ze||re,Je=Je||we,(se!==_||ve!==T)&&(s.blendEquationSeparate(xe[se],xe[ve]),_=se,T=ve),(re!==E||we!==R||Ze!==A||Je!==z)&&(s.blendFuncSeparate(Te[re],Te[we],Te[Ze],Te[Je]),E=re,R=we,A=Ze,z=Je),(pt.equals(M)===!1||Et!==w)&&(s.blendColor(pt.r,pt.g,pt.b,Et),M.copy(pt),w=Et),v=C,L=!1}function nt(C,se){C.side===at?Se(s.CULL_FACE):Pe(s.CULL_FACE);let re=C.side===It;se&&(re=!re),Ue(re),C.blending===hi&&C.transparent===!1?de(wn):de(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);let we=C.stencilWrite;c.setTest(we),we&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(C){G!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),G=C)}function b(C){C!==Yl?(Pe(s.CULL_FACE),C!==ee&&(C===Ga?s.cullFace(s.BACK):C===$l?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),ee=C}function y(C){C!==I&&(X&&s.lineWidth(C),I=C)}function F(C,se,re){C?(Pe(s.POLYGON_OFFSET_FILL),(U!==se||V!==re)&&(s.polygonOffset(se,re),U=se,V=re)):Se(s.POLYGON_OFFSET_FILL)}function K(C){C?Pe(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Z(C){C===void 0&&(C=s.TEXTURE0+q-1),j!==C&&(s.activeTexture(C),j=C)}function Q(C,se,re){re===void 0&&(j===null?re=s.TEXTURE0+q-1:re=j);let we=ce[re];we===void 0&&(we={type:void 0,texture:void 0},ce[re]=we),(we.type!==C||we.texture!==se)&&(j!==re&&(s.activeTexture(re),j=re),s.bindTexture(C,se||Re[C]),we.type=C,we.texture=se)}function fe(){let C=ce[j];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ae(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ke(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ie(C){oe.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),oe.copy(C))}function Xe(C){ge.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function st(C,se){let re=d.get(se);re===void 0&&(re=new WeakMap,d.set(se,re));let we=re.get(C);we===void 0&&(we=s.getUniformBlockIndex(se,C.name),re.set(C,we))}function Fe(C,se){let we=d.get(se).get(C);h.get(se)!==we&&(s.uniformBlockBinding(se,we,C.__bindingPointIndex),h.set(se,we))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},j=null,ce={},p={},g=new WeakMap,x=[],m=null,u=!1,v=null,_=null,E=null,R=null,T=null,A=null,z=null,M=new Ge(0,0,0),w=0,L=!1,G=null,ee=null,I=null,U=null,V=null,oe.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:Se,bindFramebuffer:We,drawBuffers:N,useProgram:bt,setBlending:de,setMaterial:nt,setFlipSided:Ue,setCullFace:b,setLineWidth:y,setPolygonOffset:F,setScissorTest:K,activeTexture:Z,bindTexture:Q,unbindTexture:fe,compressedTexImage2D:ae,compressedTexImage3D:he,texImage2D:_e,texImage3D:ue,updateUBOMapping:st,uniformBlockBinding:Fe,texStorage2D:ke,texStorage3D:Ee,texSubImage2D:Me,texSubImage3D:Ne,compressedTexSubImage2D:$,compressedTexSubImage3D:qe,scissor:Ie,viewport:Xe,reset:ne}}function Dp(s,e,t,n,i,r,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return p?new OffscreenCanvas(b,y):Ms("canvas")}function x(b,y,F,K){let Z=1;if((b.width>K||b.height>K)&&(Z=K/Math.max(b.width,b.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let Q=y?$r:Math.floor,fe=Q(Z*b.width),ae=Q(Z*b.height);d===void 0&&(d=g(fe,ae));let he=F?g(fe,ae):d;return he.width=fe,he.height=ae,he.getContext("2d").drawImage(b,0,0,fe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+ae+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return To(b.width)&&To(b.height)}function u(b){return o?!1:b.wrapS!==$t||b.wrapT!==$t||b.minFilter!==_t&&b.minFilter!==Ht}function v(b,y){return b.generateMipmaps&&y&&b.minFilter!==_t&&b.minFilter!==Ht}function _(b){s.generateMipmap(b)}function E(b,y,F,K,Z=!1){if(o===!1)return y;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=y;if(y===s.RED&&(F===s.FLOAT&&(Q=s.R32F),F===s.HALF_FLOAT&&(Q=s.R16F),F===s.UNSIGNED_BYTE&&(Q=s.R8)),y===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Q=s.R8UI),F===s.UNSIGNED_SHORT&&(Q=s.R16UI),F===s.UNSIGNED_INT&&(Q=s.R32UI),F===s.BYTE&&(Q=s.R8I),F===s.SHORT&&(Q=s.R16I),F===s.INT&&(Q=s.R32I)),y===s.RG&&(F===s.FLOAT&&(Q=s.RG32F),F===s.HALF_FLOAT&&(Q=s.RG16F),F===s.UNSIGNED_BYTE&&(Q=s.RG8)),y===s.RGBA){let fe=Z?_s:Ye.getTransfer(K);F===s.FLOAT&&(Q=s.RGBA32F),F===s.HALF_FLOAT&&(Q=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Q=fe===Qe?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function R(b,y,F){return v(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==_t&&b.minFilter!==Ht?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function T(b){return b===_t||b===Ya||b===or?s.NEAREST:s.LINEAR}function A(b){let y=b.target;y.removeEventListener("dispose",A),M(y),y.isVideoTexture&&h.delete(y)}function z(b){let y=b.target;y.removeEventListener("dispose",z),L(y)}function M(b){let y=n.get(b);if(y.__webglInit===void 0)return;let F=b.source,K=f.get(F);if(K){let Z=K[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(b),Object.keys(K).length===0&&f.delete(F)}n.remove(b)}function w(b){let y=n.get(b);s.deleteTexture(y.__webglTexture);let F=b.source,K=f.get(F);delete K[y.__cacheKey],a.memory.textures--}function L(b){let y=b.texture,F=n.get(b),K=n.get(y);if(K.__webglTexture!==void 0&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let Q=0;Q<F.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(F.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)s.deleteFramebuffer(F.__webglFramebuffer[Z]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Z=0,Q=y.length;Z<Q;Z++){let fe=n.get(y[Z]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(y[Z])}n.remove(y),n.remove(b)}let G=0;function ee(){G=0}function I(){let b=G;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),G+=1,b}function U(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function V(b,y){let F=n.get(b);if(b.isVideoTexture&&nt(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){let K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,b,y);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+y)}function q(b,y){let F=n.get(b);if(b.version>0&&F.__version!==b.version){oe(F,b,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+y)}function X(b,y){let F=n.get(b);if(b.version>0&&F.__version!==b.version){oe(F,b,y);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+y)}function W(b,y){let F=n.get(b);if(b.version>0&&F.__version!==b.version){ge(F,b,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+y)}let J={[Wr]:s.REPEAT,[$t]:s.CLAMP_TO_EDGE,[Xr]:s.MIRRORED_REPEAT},j={[_t]:s.NEAREST,[Ya]:s.NEAREST_MIPMAP_NEAREST,[or]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[Ec]:s.LINEAR_MIPMAP_NEAREST,[Di]:s.LINEAR_MIPMAP_LINEAR},ce={[Fc]:s.NEVER,[Vc]:s.ALWAYS,[Bc]:s.LESS,[Al]:s.LEQUAL,[zc]:s.EQUAL,[Gc]:s.GEQUAL,[Hc]:s.GREATER,[kc]:s.NOTEQUAL};function k(b,y,F){if(F?(s.texParameteri(b,s.TEXTURE_WRAP_S,J[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,J[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,J[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,j[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,j[y.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==$t||y.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,T(y.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==_t&&y.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===_t||y.minFilter!==or&&y.minFilter!==Di||y.type===Sn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Ui&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Y(b,y){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));let K=y.source,Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));let Q=U(y);if(Q!==b.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[Q].usedTimes++;let fe=Z[b.__cacheKey];fe!==void 0&&(Z[b.__cacheKey].usedTimes--,fe.usedTimes===0&&w(y)),b.__cacheKey=Q,b.__webglTexture=Z[Q].texture}return F}function oe(b,y,F){let K=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=s.TEXTURE_3D);let Z=Y(b,y),Q=y.source;t.bindTexture(K,b.__webglTexture,s.TEXTURE0+F);let fe=n.get(Q);if(Q.version!==fe.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);let ae=Ye.getPrimaries(Ye.workingColorSpace),he=y.colorSpace===kt?null:Ye.getPrimaries(y.colorSpace),Me=y.colorSpace===kt||ae===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ne=u(y)&&m(y.image)===!1,$=x(y.image,Ne,!1,i.maxTextureSize);$=Ue(y,$);let qe=m($)||o,ke=r.convert(y.format,y.colorSpace),Ee=r.convert(y.type),_e=E(y.internalFormat,ke,Ee,y.colorSpace,y.isVideoTexture);k(K,y,qe);let ue,Ie=y.mipmaps,Xe=o&&y.isVideoTexture!==!0&&_e!==bl,st=fe.__version===void 0||Z===!0,Fe=R(y,$,qe);if(y.isDepthTexture)_e=s.DEPTH_COMPONENT,o?y.type===Sn?_e=s.DEPTH_COMPONENT32F:y.type===Mn?_e=s.DEPTH_COMPONENT24:y.type===Bn?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:y.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===zn&&_e===s.DEPTH_COMPONENT&&y.type!==Ta&&y.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Mn,Ee=r.convert(y.type)),y.format===mi&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,y.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Bn,Ee=r.convert(y.type))),st&&(Xe?t.texStorage2D(s.TEXTURE_2D,1,_e,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,_e,$.width,$.height,0,ke,Ee,null));else if(y.isDataTexture)if(Ie.length>0&&qe){Xe&&st&&t.texStorage2D(s.TEXTURE_2D,Fe,_e,Ie[0].width,Ie[0].height);for(let ne=0,C=Ie.length;ne<C;ne++)ue=Ie[ne],Xe?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,ke,Ee,ue.data):t.texImage2D(s.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ke,Ee,ue.data);y.generateMipmaps=!1}else Xe?(st&&t.texStorage2D(s.TEXTURE_2D,Fe,_e,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,ke,Ee,$.data)):t.texImage2D(s.TEXTURE_2D,0,_e,$.width,$.height,0,ke,Ee,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xe&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,_e,Ie[0].width,Ie[0].height,$.depth);for(let ne=0,C=Ie.length;ne<C;ne++)ue=Ie[ne],y.format!==Zt?ke!==null?Xe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,$.depth,ke,ue.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,$.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,$.depth,ke,Ee,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,$.depth,0,ke,Ee,ue.data)}else{Xe&&st&&t.texStorage2D(s.TEXTURE_2D,Fe,_e,Ie[0].width,Ie[0].height);for(let ne=0,C=Ie.length;ne<C;ne++)ue=Ie[ne],y.format!==Zt?ke!==null?Xe?t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,ke,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,ke,Ee,ue.data):t.texImage2D(s.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ke,Ee,ue.data)}else if(y.isDataArrayTexture)Xe?(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,_e,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ke,Ee,$.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,$.width,$.height,$.depth,0,ke,Ee,$.data);else if(y.isData3DTexture)Xe?(st&&t.texStorage3D(s.TEXTURE_3D,Fe,_e,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ke,Ee,$.data)):t.texImage3D(s.TEXTURE_3D,0,_e,$.width,$.height,$.depth,0,ke,Ee,$.data);else if(y.isFramebufferTexture){if(st)if(Xe)t.texStorage2D(s.TEXTURE_2D,Fe,_e,$.width,$.height);else{let ne=$.width,C=$.height;for(let se=0;se<Fe;se++)t.texImage2D(s.TEXTURE_2D,se,_e,ne,C,0,ke,Ee,null),ne>>=1,C>>=1}}else if(Ie.length>0&&qe){Xe&&st&&t.texStorage2D(s.TEXTURE_2D,Fe,_e,Ie[0].width,Ie[0].height);for(let ne=0,C=Ie.length;ne<C;ne++)ue=Ie[ne],Xe?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ke,Ee,ue):t.texImage2D(s.TEXTURE_2D,ne,_e,ke,Ee,ue);y.generateMipmaps=!1}else Xe?(st&&t.texStorage2D(s.TEXTURE_2D,Fe,_e,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Ee,$)):t.texImage2D(s.TEXTURE_2D,0,_e,ke,Ee,$);v(y,qe)&&_(K),fe.__version=Q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ge(b,y,F){if(y.image.length!==6)return;let K=Y(b,y),Z=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+F);let Q=n.get(Z);if(Z.version!==Q.__version||K===!0){t.activeTexture(s.TEXTURE0+F);let fe=Ye.getPrimaries(Ye.workingColorSpace),ae=y.colorSpace===kt?null:Ye.getPrimaries(y.colorSpace),he=y.colorSpace===kt||fe===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Me=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,$=[];for(let ne=0;ne<6;ne++)!Me&&!Ne?$[ne]=x(y.image[ne],!1,!0,i.maxCubemapSize):$[ne]=Ne?y.image[ne].image:y.image[ne],$[ne]=Ue(y,$[ne]);let qe=$[0],ke=m(qe)||o,Ee=r.convert(y.format,y.colorSpace),_e=r.convert(y.type),ue=E(y.internalFormat,Ee,_e,y.colorSpace),Ie=o&&y.isVideoTexture!==!0,Xe=Q.__version===void 0||K===!0,st=R(y,qe,ke);k(s.TEXTURE_CUBE_MAP,y,ke);let Fe;if(Me){Ie&&Xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,st,ue,qe.width,qe.height);for(let ne=0;ne<6;ne++){Fe=$[ne].mipmaps;for(let C=0;C<Fe.length;C++){let se=Fe[C];y.format!==Zt?Ee!==null?Ie?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ee,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ee,_e,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,ue,se.width,se.height,0,Ee,_e,se.data)}}}else{Fe=y.mipmaps,Ie&&Xe&&(Fe.length>0&&st++,t.texStorage2D(s.TEXTURE_CUBE_MAP,st,ue,$[0].width,$[0].height));for(let ne=0;ne<6;ne++)if(Ne){Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,$[ne].width,$[ne].height,Ee,_e,$[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,$[ne].width,$[ne].height,0,Ee,_e,$[ne].data);for(let C=0;C<Fe.length;C++){let re=Fe[C].image[ne].image;Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,re.width,re.height,Ee,_e,re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,ue,re.width,re.height,0,Ee,_e,re.data)}}else{Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee,_e,$[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Ee,_e,$[ne]);for(let C=0;C<Fe.length;C++){let se=Fe[C];Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Ee,_e,se.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,ue,Ee,_e,se.image[ne])}}}v(y,ke)&&_(s.TEXTURE_CUBE_MAP),Q.__version=Z.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function me(b,y,F,K,Z,Q){let fe=r.convert(F.format,F.colorSpace),ae=r.convert(F.type),he=E(F.internalFormat,fe,ae,F.colorSpace);if(!n.get(y).__hasExternalTextures){let Ne=Math.max(1,y.width>>Q),$=Math.max(1,y.height>>Q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Q,he,Ne,$,y.depth,0,fe,ae,null):t.texImage2D(Z,Q,he,Ne,$,0,fe,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),de(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,n.get(F).__webglTexture,0,Te(y)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,n.get(F).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(b,y,F){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let K=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||de(y)){let Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Sn?K=s.DEPTH_COMPONENT32F:Z.type===Mn&&(K=s.DEPTH_COMPONENT24));let Q=Te(y);de(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,K,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,K,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,K,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){let K=Te(y);F&&de(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,y.width,y.height):de(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{let K=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<K.length;Z++){let Q=K[Z],fe=r.convert(Q.format,Q.colorSpace),ae=r.convert(Q.type),he=E(Q.internalFormat,fe,ae,Q.colorSpace),Me=Te(y);F&&de(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,he,y.width,y.height):de(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,he,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,he,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);let K=n.get(y.depthTexture).__webglTexture,Z=Te(y);if(y.depthTexture.format===zn)de(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(y.depthTexture.format===mi)de(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Se(b){let y=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(y.__webglFramebuffer,b)}else if(F){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]=s.createRenderbuffer(),Re(y.__webglDepthbuffer[K],b,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Re(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(b,y,F){let K=n.get(b);y!==void 0&&me(K.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Se(b)}function N(b){let y=b.texture,F=n.get(b),K=n.get(y);b.addEventListener("dispose",z),b.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=y.version,a.memory.textures++);let Z=b.isWebGLCubeRenderTarget===!0,Q=b.isWebGLMultipleRenderTargets===!0,fe=m(b)||o;if(Z){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let he=0;he<y.mipmaps.length;he++)F.__webglFramebuffer[ae][he]=s.createFramebuffer()}else F.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)F.__webglFramebuffer[ae]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){let ae=b.texture;for(let he=0,Me=ae.length;he<Me;he++){let Ne=n.get(ae[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&de(b)===!1){let ae=Q?y:[y];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){let Me=ae[he];F.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[he]);let Ne=r.convert(Me.format,Me.colorSpace),$=r.convert(Me.type),qe=E(Me.internalFormat,Ne,$,Me.colorSpace,b.isXRRenderTarget===!0),ke=Te(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,qe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,F.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),k(s.TEXTURE_CUBE_MAP,y,fe);for(let ae=0;ae<6;ae++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)me(F.__webglFramebuffer[ae][he],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else me(F.__webglFramebuffer[ae],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);v(y,fe)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){let ae=b.texture;for(let he=0,Me=ae.length;he<Me;he++){let Ne=ae[he],$=n.get(Ne);t.bindTexture(s.TEXTURE_2D,$.__webglTexture),k(s.TEXTURE_2D,Ne,fe),me(F.__webglFramebuffer,b,Ne,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),v(Ne,fe)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,K.__webglTexture),k(ae,y,fe),o&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)me(F.__webglFramebuffer[he],b,y,s.COLOR_ATTACHMENT0,ae,he);else me(F.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,ae,0);v(y,fe)&&_(ae),t.unbindTexture()}b.depthBuffer&&Se(b)}function bt(b){let y=m(b)||o,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let K=0,Z=F.length;K<Z;K++){let Q=F[K];if(v(Q,y)){let fe=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ae=n.get(Q).__webglTexture;t.bindTexture(fe,ae),_(fe),t.unbindTexture()}}}function xe(b){if(o&&b.samples>0&&de(b)===!1){let y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,K=b.height,Z=s.COLOR_BUFFER_BIT,Q=[],fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(b),he=b.isWebGLMultipleRenderTargets===!0;if(he)for(let Me=0;Me<y.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){Q.push(s.COLOR_ATTACHMENT0+Me),b.depthBuffer&&Q.push(fe);let Ne=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ne===!1&&(b.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Me]),Ne===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[fe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[fe])),he){let $=n.get(y[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,F,K,0,0,F,K,Z,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Me=0;Me<y.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Me]);let Ne=n.get(y[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Te(b){return Math.min(i.maxSamples,b.samples)}function de(b){let y=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function nt(b){let y=a.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Ue(b,y){let F=b.colorSpace,K=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===qr||F!==fn&&F!==kt&&(Ye.getTransfer(F)===Qe?o===!1?e.has("EXT_sRGB")===!0&&K===Zt?(b.format=qr,b.minFilter=Ht,b.generateMipmaps=!1):y=Ss.sRGBToLinear(y):(K!==Zt||Z!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}this.allocateTextureUnit=I,this.resetTextureUnits=ee,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=We,this.setupRenderTarget=N,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=me,this.useMultisampledRTT=de}function Up(s,e,t){let n=t.isWebGL2;function i(r,a=kt){let o,l=Ye.getTransfer(a);if(r===En)return s.UNSIGNED_BYTE;if(r===vl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tc)return s.BYTE;if(r===Ac)return s.SHORT;if(r===Ta)return s.UNSIGNED_SHORT;if(r===xl)return s.INT;if(r===Mn)return s.UNSIGNED_INT;if(r===Sn)return s.FLOAT;if(r===Ui)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Rc)return s.ALPHA;if(r===Zt)return s.RGBA;if(r===Cc)return s.LUMINANCE;if(r===Pc)return s.LUMINANCE_ALPHA;if(r===zn)return s.DEPTH_COMPONENT;if(r===mi)return s.DEPTH_STENCIL;if(r===qr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ic)return s.RED;if(r===Ml)return s.RED_INTEGER;if(r===Lc)return s.RG;if(r===Sl)return s.RG_INTEGER;if(r===wl)return s.RGBA_INTEGER;if(r===lr||r===cr||r===hr||r===ur)if(l===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===lr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===lr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ur)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$a||r===Za||r===Ja||r===Ka)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===$a)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Za)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ja)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ka)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qa||r===ja)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Qa)return l===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ja)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===eo||r===to||r===no||r===io||r===so||r===ro||r===ao||r===oo||r===lo||r===co||r===ho||r===uo||r===fo||r===po)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===eo)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===to)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===no)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===io)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===so)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ro)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ao)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oo)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lo)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===co)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ho)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uo)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fo)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===po)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dr||r===mo||r===go)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===dr)return l===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===go)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dc||r===_o||r===xo||r===vo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===dr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===_o)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bn?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var oa=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},je=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Np={type:"move"},Li=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},la=class extends Tn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,x=t.getContextAttributes(),m=null,u=null,v=[],_=[],E=new De,R=null,T=new St;T.layers.enable(1),T.viewport=new tt;let A=new St;A.layers.enable(2),A.viewport=new tt;let z=[T,A],M=new oa;M.layers.enable(1),M.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=v[k];return Y===void 0&&(Y=new Li,v[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=v[k];return Y===void 0&&(Y=new Li,v[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=v[k];return Y===void 0&&(Y=new Li,v[k]=Y),Y.getHandSpace()};function G(k){let Y=_.indexOf(k.inputSource);if(Y===-1)return;let oe=v[Y];oe!==void 0&&(oe.update(k.inputSource,k.frame,c||a),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function ee(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",I);for(let k=0;k<v.length;k++){let Y=_[k];Y!==null&&(_[k]=null,v[k].disconnect(Y))}w=null,L=null,e.setRenderTarget(m),p=null,f=null,d=null,i=null,u=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new pn(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:En,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Y=null,oe=null,ge=null;x.depth&&(ge=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=x.stencil?mi:zn,oe=x.stencil?Bn:Mn);let me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(me),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new pn(f.textureWidth,f.textureHeight,{format:Zt,type:En,depthTexture:new Ds(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Re=e.properties.get(u);Re.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(k){for(let Y=0;Y<k.removed.length;Y++){let oe=k.removed[Y],ge=_.indexOf(oe);ge>=0&&(_[ge]=null,v[ge].disconnect(oe))}for(let Y=0;Y<k.added.length;Y++){let oe=k.added[Y],ge=_.indexOf(oe);if(ge===-1){for(let Re=0;Re<v.length;Re++)if(Re>=_.length){_.push(oe),ge=Re;break}else if(_[Re]===null){_[Re]=oe,ge=Re;break}if(ge===-1)break}let me=v[ge];me&&me.connect(oe)}}let U=new P,V=new P;function q(k,Y,oe){U.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);let ge=U.distanceTo(V),me=Y.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Pe=me[14]/(me[10]-1),Se=me[14]/(me[10]+1),We=(me[9]+1)/me[5],N=(me[9]-1)/me[5],bt=(me[8]-1)/me[0],xe=(Re[8]+1)/Re[0],Te=Pe*bt,de=Pe*xe,nt=ge/(-bt+xe),Ue=nt*-bt;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ue),k.translateZ(nt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let b=Pe+nt,y=Se+nt,F=Te-Ue,K=de+(ge-Ue),Z=We*Se/y*b,Q=N*Se/y*b;k.projectionMatrix.makePerspective(F,K,Z,Q,b,y),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function X(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;M.near=A.near=T.near=k.near,M.far=A.far=T.far=k.far,(w!==M.near||L!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,L=M.far);let Y=k.parent,oe=M.cameras;X(M,Y);for(let ge=0;ge<oe.length;ge++)X(oe[ge],Y);oe.length===2?q(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),W(k,M,Y)};function W(k,Y,oe){oe===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Yr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let J=null;function j(k,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){let oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ge=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let me=0;me<oe.length;me++){let Re=oe[me],Pe=null;if(p!==null)Pe=p.getViewport(Re);else{let We=d.getViewSubImage(f,Re);Pe=We.viewport,me===0&&(e.setRenderTargetTextures(u,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(u))}let Se=z[me];Se===void 0&&(Se=new St,Se.layers.enable(me),Se.viewport=new tt,z[me]=Se),Se.matrix.fromArray(Re.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Re.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(M.matrix.copy(Se.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(Se)}}for(let oe=0;oe<v.length;oe++){let ge=_[oe],me=v[oe];ge!==null&&me!==void 0&&me.update(ge,Y,c||a)}J&&J(k,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let ce=new Il;ce.setAnimationLoop(j),this.setAnimationLoop=function(k){J=k},this.dispose=function(){}}};function Op(s,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Pl(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,v,_,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,E)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===It&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===It&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let v=e.get(u).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*_,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=_*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===It&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fp(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){let E=_.program;n.uniformBlockBinding(v,E)}function c(v,_){let E=i[v.id];E===void 0&&(g(v),E=h(v),i[v.id]=E,v.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(v,R);let T=e.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function h(v){let _=d();v.__bindingPointIndex=_;let E=s.createBuffer(),R=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=i[v.id],E=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,A=E.length;T<A;T++){let z=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,w=z.length;M<w;M++){let L=z[M];if(p(L,T,M,R)===!0){let G=L.__offset,ee=Array.isArray(L.value)?L.value:[L.value],I=0;for(let U=0;U<ee.length;U++){let V=ee[U],q=x(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,G+I,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,_,E,R){let T=v.value,A=_+"_"+E;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let z=R[A];if(typeof T=="number"||typeof T=="boolean"){if(z!==T)return R[A]=T,!0}else if(z.equals(T)===!1)return z.copy(T),!0}return!1}function g(v){let _=v.uniforms,E=0,R=16;for(let A=0,z=_.length;A<z;A++){let M=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,L=M.length;w<L;w++){let G=M[w],ee=Array.isArray(G.value)?G.value:[G.value];for(let I=0,U=ee.length;I<U;I++){let V=ee[I],q=x(V),X=E%R;X!==0&&R-X<q.boundary&&(E+=R-X),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=q.storage}}}let T=E%R;return T>0&&(E+=R-T),v.__size=E,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let E=a.indexOf(_.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function u(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}var Bi=class{constructor(e={}){let{canvas:t=Xc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,u=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this._useLegacyLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;let _=this,E=!1,R=0,T=0,A=null,z=-1,M=null,w=new tt,L=new tt,G=null,ee=new Ge(0),I=0,U=t.width,V=t.height,q=1,X=null,W=null,J=new tt(0,0,U,V),j=new tt(0,0,U,V),ce=!1,k=new Fi,Y=!1,oe=!1,ge=null,me=new ut,Re=new De,Pe=new P,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return A===null?q:1}let N=n;function bt(S,D){for(let B=0;B<S.length;B++){let H=S[B],O=t.getContext(H,D);if(O!==null)return O}return null}try{let S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wa}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),N===null){let D=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&D.shift(),N=bt(D,S),N===null)throw bt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xe,Te,de,nt,Ue,b,y,F,K,Z,Q,fe,ae,he,Me,Ne,$,qe,ke,Ee,_e,ue,Ie,Xe;function st(){xe=new tf(N),Te=new Zd(N,xe,e),xe.init(Te),ue=new Up(N,xe,Te),de=new Lp(N,xe,Te),nt=new rf(N),Ue=new yp,b=new Dp(N,xe,de,Ue,Te,ue,nt),y=new Kd(_),F=new ef(_),K=new dh(N,Te),Ie=new Yd(N,xe,K,Te),Z=new nf(N,K,nt,Ie),Q=new cf(N,Z,K,nt),ke=new lf(N,Te,b),Ne=new Jd(Ue),fe=new vp(_,y,F,xe,Te,Ie,Ne),ae=new Op(_,Ue),he=new Sp,Me=new Rp(xe,Te),qe=new qd(_,y,F,de,Q,f,l),$=new Ip(_,Q,Te),Xe=new Fp(N,nt,Te,de),Ee=new $d(N,xe,nt,Te),_e=new sf(N,xe,nt,Te),nt.programs=fe.programs,_.capabilities=Te,_.extensions=xe,_.properties=Ue,_.renderLists=he,_.shadowMap=$,_.state=de,_.info=nt}st();let Fe=new la(_,N);this.xr=Fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(U,V,!1))},this.getSize=function(S){return S.set(U,V)},this.setSize=function(S,D,B=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,V=D,t.width=Math.floor(S*q),t.height=Math.floor(D*q),B===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(U*q,V*q).floor()},this.setDrawingBufferSize=function(S,D,B){U=S,V=D,q=B,t.width=Math.floor(S*B),t.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,D,B,H){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,D,B,H),de.viewport(w.copy(J).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(j)},this.setScissor=function(S,D,B,H){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,D,B,H),de.scissor(L.copy(j).multiplyScalar(q).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(S){de.setScissorTest(ce=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(S=!0,D=!0,B=!0){let H=0;if(S){let O=!1;if(A!==null){let le=A.texture.format;O=le===wl||le===Sl||le===Ml}if(O){let le=A.texture.type,pe=le===En||le===Mn||le===Ta||le===Bn||le===vl||le===yl,ye=qe.getClearColor(),be=qe.getClearAlpha(),Oe=ye.r,Ae=ye.g,Ce=ye.b;pe?(p[0]=Oe,p[1]=Ae,p[2]=Ce,p[3]=be,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Oe,g[1]=Ae,g[2]=Ce,g[3]=be,N.clearBufferiv(N.COLOR,0,g))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT),B&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),he.dispose(),Me.dispose(),Ue.dispose(),y.dispose(),F.dispose(),Q.dispose(),Ie.dispose(),Xe.dispose(),fe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Et),Fe.removeEventListener("sessionend",Ke),ge&&(ge.dispose(),ge=null),Tt.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let S=nt.autoReset,D=$.enabled,B=$.autoUpdate,H=$.needsUpdate,O=$.type;st(),nt.autoReset=S,$.enabled=D,$.autoUpdate=B,$.needsUpdate=H,$.type=O}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function re(S){let D=S.target;D.removeEventListener("dispose",re),we(D)}function we(S){ve(S),Ue.remove(S)}function ve(S){let D=Ue.get(S).programs;D!==void 0&&(D.forEach(function(B){fe.releaseProgram(B)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,H,O,le){D===null&&(D=Se);let pe=O.isMesh&&O.matrixWorld.determinant()<0,ye=Vl(S,D,B,H,O);de.setMaterial(H,pe);let be=B.index,Oe=1;if(H.wireframe===!0){if(be=Z.getWireframeAttribute(B),be===void 0)return;Oe=2}let Ae=B.drawRange,Ce=B.attributes.position,lt=Ae.start*Oe,Ut=(Ae.start+Ae.count)*Oe;le!==null&&(lt=Math.max(lt,le.start*Oe),Ut=Math.min(Ut,(le.start+le.count)*Oe)),be!==null?(lt=Math.max(lt,0),Ut=Math.min(Ut,be.count)):Ce!=null&&(lt=Math.max(lt,0),Ut=Math.min(Ut,Ce.count));let mt=Ut-lt;if(mt<0||mt===1/0)return;Ie.setup(O,H,ye,B,be);let sn,it=Ee;if(be!==null&&(sn=K.get(be),it=_e,it.setIndex(sn)),O.isMesh)H.wireframe===!0?(de.setLineWidth(H.wireframeLinewidth*We()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(O.isLine){let Be=H.linewidth;Be===void 0&&(Be=1),de.setLineWidth(Be*We()),O.isLineSegments?it.setMode(N.LINES):O.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else O.isPoints?it.setMode(N.POINTS):O.isSprite&&it.setMode(N.TRIANGLES);if(O.isBatchedMesh)it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)it.renderInstances(lt,mt,O.count);else if(B.isInstancedBufferGeometry){let Be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ir=Math.min(B.instanceCount,Be);it.renderInstances(lt,mt,ir)}else it.render(lt,mt)};function Ze(S,D,B){S.transparent===!0&&S.side===at&&S.forceSinglePass===!1?(S.side=It,S.needsUpdate=!0,Vi(S,D,B),S.side=jt,S.needsUpdate=!0,Vi(S,D,B),S.side=at):Vi(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),m=Me.get(B),m.init(),v.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),S!==B&&S.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(_._useLegacyLights);let H=new Set;return S.traverse(function(O){let le=O.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){let ye=le[pe];Ze(ye,B,O),H.add(ye)}else Ze(le,B,O),H.add(le)}),v.pop(),m=null,H},this.compileAsync=function(S,D,B=null){let H=this.compile(S,D,B);return new Promise(O=>{function le(){if(H.forEach(function(pe){Ue.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){O(S);return}setTimeout(le,10)}xe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Je=null;function pt(S){Je&&Je(S)}function Et(){Tt.stop()}function Ke(){Tt.start()}let Tt=new Il;Tt.setAnimationLoop(pt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(S){Je=S,Fe.setAnimationLoop(S),S===null?Tt.stop():Tt.start()},Fe.addEventListener("sessionstart",Et),Fe.addEventListener("sessionend",Ke),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(D),D=Fe.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,D,A),m=Me.get(S,v.length),m.init(),v.push(m),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),k.setFromProjectionMatrix(me),oe=this.localClippingEnabled,Y=Ne.init(this.clippingPlanes,oe),x=he.get(S,u.length),x.init(),u.push(x),Kt(S,D,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(X,W),this.info.render.frame++,Y===!0&&Ne.beginShadows();let B=m.state.shadowsArray;if($.render(B,S,D),Y===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(x,S),m.setupLights(_._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let O=0,le=H.length;O<le;O++){let pe=H[O];Oa(x,S,pe,pe.viewport)}}else Oa(x,S,D);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(_,S,D),Ie.resetDefaultState(),z=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Kt(S,D,B,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){H&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);let pe=Q.update(S),ye=S.material;ye.visible&&x.push(S,pe,ye,B,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||k.intersectsObject(S))){let pe=Q.update(S),ye=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(ye)){let be=pe.groups;for(let Oe=0,Ae=be.length;Oe<Ae;Oe++){let Ce=be[Oe],lt=ye[Ce.materialIndex];lt&&lt.visible&&x.push(S,pe,lt,B,Pe.z,Ce)}}else ye.visible&&x.push(S,pe,ye,B,Pe.z,null)}}let le=S.children;for(let pe=0,ye=le.length;pe<ye;pe++)Kt(le[pe],D,B,H)}function Oa(S,D,B,H){let O=S.opaque,le=S.transmissive,pe=S.transparent;m.setupLightsView(B),Y===!0&&Ne.setGlobalState(_.clippingPlanes,B),le.length>0&&Gl(O,le,D,B),H&&de.viewport(w.copy(H)),O.length>0&&Gi(O,D,B),le.length>0&&Gi(le,D,B),pe.length>0&&Gi(pe,D,B),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Gl(S,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let le=Te.isWebGL2;ge===null&&(ge=new pn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Ui:En,minFilter:Di,samples:le?4:0})),_.getDrawingBufferSize(Re),le?ge.setSize(Re.x,Re.y):ge.setSize($r(Re.x),$r(Re.y));let pe=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(ee),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let ye=_.toneMapping;_.toneMapping=bn,Gi(S,B,H),b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge);let be=!1;for(let Oe=0,Ae=D.length;Oe<Ae;Oe++){let Ce=D[Oe],lt=Ce.object,Ut=Ce.geometry,mt=Ce.material,sn=Ce.group;if(mt.side===at&&lt.layers.test(H.layers)){let it=mt.side;mt.side=It,mt.needsUpdate=!0,Fa(lt,B,H,Ut,mt,sn),mt.side=it,mt.needsUpdate=!0,be=!0}}be===!0&&(b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge)),_.setRenderTarget(pe),_.setClearColor(ee,I),_.toneMapping=ye}function Gi(S,D,B){let H=D.isScene===!0?D.overrideMaterial:null;for(let O=0,le=S.length;O<le;O++){let pe=S[O],ye=pe.object,be=pe.geometry,Oe=H===null?pe.material:H,Ae=pe.group;ye.layers.test(B.layers)&&Fa(ye,D,B,be,Oe,Ae)}}function Fa(S,D,B,H,O,le){S.onBeforeRender(_,D,B,H,O,le),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(_,D,B,H,S,le),O.transparent===!0&&O.side===at&&O.forceSinglePass===!1?(O.side=It,O.needsUpdate=!0,_.renderBufferDirect(B,D,H,O,S,le),O.side=jt,O.needsUpdate=!0,_.renderBufferDirect(B,D,H,O,S,le),O.side=at):_.renderBufferDirect(B,D,H,O,S,le),S.onAfterRender(_,D,B,H,O,le)}function Vi(S,D,B){D.isScene!==!0&&(D=Se);let H=Ue.get(S),O=m.state.lights,le=m.state.shadowsArray,pe=O.state.version,ye=fe.getParameters(S,O.state,le,D,B),be=fe.getProgramCacheKey(ye),Oe=H.programs;H.environment=S.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(S.isMeshStandardMaterial?F:y).get(S.envMap||H.environment),Oe===void 0&&(S.addEventListener("dispose",re),Oe=new Map,H.programs=Oe);let Ae=Oe.get(be);if(Ae!==void 0){if(H.currentProgram===Ae&&H.lightsStateVersion===pe)return za(S,ye),Ae}else ye.uniforms=fe.getUniforms(S),S.onBuild(B,ye,_),S.onBeforeCompile(ye,_),Ae=fe.acquireProgram(ye,be),Oe.set(be,Ae),H.uniforms=ye.uniforms;let Ce=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Ne.uniform),za(S,ye),H.needsLights=Xl(S),H.lightsStateVersion=pe,H.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ae,H.uniformsList=null,Ae}function Ba(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=di.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function za(S,D){let B=Ue.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Vl(S,D,B,H,O){D.isScene!==!0&&(D=Se),b.resetTextureUnits();let le=D.fog,pe=H.isMeshStandardMaterial?D.environment:null,ye=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fn,be=(H.isMeshStandardMaterial?F:y).get(H.envMap||pe),Oe=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ae=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!B.morphAttributes.position,lt=!!B.morphAttributes.normal,Ut=!!B.morphAttributes.color,mt=bn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=_.toneMapping);let sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=sn!==void 0?sn.length:0,Be=Ue.get(H),ir=m.state.lights;if(Y===!0&&(oe===!0||S!==M)){let Bt=S===M&&H.id===z;Ne.setState(H,S,Bt)}let rt=!1;H.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ir.state.version||Be.outputColorSpace!==ye||O.isBatchedMesh&&Be.batching===!1||!O.isBatchedMesh&&Be.batching===!0||O.isInstancedMesh&&Be.instancing===!1||!O.isInstancedMesh&&Be.instancing===!0||O.isSkinnedMesh&&Be.skinning===!1||!O.isSkinnedMesh&&Be.skinning===!0||O.isInstancedMesh&&Be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Be.instancingColor===!1&&O.instanceColor!==null||Be.envMap!==be||H.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ne.numPlanes||Be.numIntersection!==Ne.numIntersection)||Be.vertexAlphas!==Oe||Be.vertexTangents!==Ae||Be.morphTargets!==Ce||Be.morphNormals!==lt||Be.morphColors!==Ut||Be.toneMapping!==mt||Te.isWebGL2===!0&&Be.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Be.__version=H.version);let Cn=Be.currentProgram;rt===!0&&(Cn=Vi(H,D,O));let Ha=!1,bi=!1,sr=!1,vt=Cn.getUniforms(),Pn=Be.uniforms;if(de.useProgram(Cn.program)&&(Ha=!0,bi=!0,sr=!0),H.id!==z&&(z=H.id,bi=!0),Ha||M!==S){vt.setValue(N,"projectionMatrix",S.projectionMatrix),vt.setValue(N,"viewMatrix",S.matrixWorldInverse);let Bt=vt.map.cameraPosition;Bt!==void 0&&Bt.setValue(N,Pe.setFromMatrixPosition(S.matrixWorld)),Te.logarithmicDepthBuffer&&vt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,bi=!0,sr=!0)}if(O.isSkinnedMesh){vt.setOptional(N,O,"bindMatrix"),vt.setOptional(N,O,"bindMatrixInverse");let Bt=O.skeleton;Bt&&(Te.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),vt.setValue(N,"boneTexture",Bt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(vt.setOptional(N,O,"batchingTexture"),vt.setValue(N,"batchingTexture",O._matricesTexture,b));let rr=B.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0&&Te.isWebGL2===!0)&&ke.update(O,B,Cn),(bi||Be.receiveShadow!==O.receiveShadow)&&(Be.receiveShadow=O.receiveShadow,vt.setValue(N,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Pn.envMap.value=be,Pn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),bi&&(vt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&Wl(Pn,sr),le&&H.fog===!0&&ae.refreshFogUniforms(Pn,le),ae.refreshMaterialUniforms(Pn,H,q,V,ge),di.upload(N,Ba(Be),Pn,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(di.upload(N,Ba(Be),Pn,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(N,"center",O.center),vt.setValue(N,"modelViewMatrix",O.modelViewMatrix),vt.setValue(N,"normalMatrix",O.normalMatrix),vt.setValue(N,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Bt=H.uniformsGroups;for(let ar=0,ql=Bt.length;ar<ql;ar++)if(Te.isWebGL2){let ka=Bt[ar];Xe.update(ka,Cn),Xe.bind(ka,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function Wl(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Xl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,D,B){Ue.get(S.texture).__webglTexture=D,Ue.get(S.depthTexture).__webglTexture=B;let H=Ue.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){let B=Ue.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){A=S,R=D,T=B;let H=!0,O=null,le=!1,pe=!1;if(S){let be=Ue.get(S);be.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):be.__webglFramebuffer===void 0?b.setupRenderTarget(S):be.__hasExternalTextures&&b.rebindTextures(S,Ue.get(S.texture).__webglTexture,Ue.get(S.depthTexture).__webglTexture);let Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(pe=!0);let Ae=Ue.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?O=Ae[D][B]:O=Ae[D],le=!0):Te.isWebGL2&&S.samples>0&&b.useMultisampledRTT(S)===!1?O=Ue.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?O=Ae[B]:O=Ae,w.copy(S.viewport),L.copy(S.scissor),G=S.scissorTest}else w.copy(J).multiplyScalar(q).floor(),L.copy(j).multiplyScalar(q).floor(),G=ce;if(de.bindFramebuffer(N.FRAMEBUFFER,O)&&Te.drawBuffers&&H&&de.drawBuffers(S,O),de.viewport(w),de.scissor(L),de.setScissorTest(G),le){let be=Ue.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,B)}else if(pe){let be=Ue.get(S.texture),Oe=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.__webglTexture,B||0,Oe)}z=-1},this.readRenderTargetPixels=function(S,D,B,H,O,le,pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){de.bindFramebuffer(N.FRAMEBUFFER,ye);try{let be=S.texture,Oe=be.format,Ae=be.type;if(Oe!==Zt&&ue.convert(Oe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ce=Ae===Ui&&(xe.has("EXT_color_buffer_half_float")||Te.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ae!==En&&ue.convert(Ae)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===Sn&&(Te.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&B>=0&&B<=S.height-O&&N.readPixels(D,B,H,O,ue.convert(Oe),ue.convert(Ae),le)}finally{let be=A!==null?Ue.get(A).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(S,D,B=0){let H=Math.pow(2,-B),O=Math.floor(D.image.width*H),le=Math.floor(D.image.height*H);b.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,S.x,S.y,O,le),de.unbindTexture()},this.copyTextureToTexture=function(S,D,B,H=0){let O=D.image.width,le=D.image.height,pe=ue.convert(B.format),ye=ue.convert(B.type);b.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,O,le,pe,ye,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,pe,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,pe,ye,D.image),H===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B,H,O=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let le=S.max.x-S.min.x+1,pe=S.max.y-S.min.y+1,ye=S.max.z-S.min.z+1,be=ue.convert(H.format),Oe=ue.convert(H.type),Ae;if(H.isData3DTexture)b.setTexture3D(H,0),Ae=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)b.setTexture2DArray(H,0),Ae=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let Ce=N.getParameter(N.UNPACK_ROW_LENGTH),lt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ut=N.getParameter(N.UNPACK_SKIP_PIXELS),mt=N.getParameter(N.UNPACK_SKIP_ROWS),sn=N.getParameter(N.UNPACK_SKIP_IMAGES),it=B.isCompressedTexture?B.mipmaps[O]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,it.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Ae,O,D.x,D.y,D.z,le,pe,ye,be,Oe,it.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ae,O,D.x,D.y,D.z,le,pe,ye,be,it.data)):N.texSubImage3D(Ae,O,D.x,D.y,D.z,le,pe,ye,be,Oe,it),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ce),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,mt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,sn),O===0&&H.generateMipmaps&&N.generateMipmap(Ae),de.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,de.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Aa?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===$s?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xt?Hn:El}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hn?xt:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ca=class extends Bi{};ca.prototype.isWebGL1Renderer=!0;var Us=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ns=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Os=class extends Vt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zi=class s extends Ft{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new De;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=n+d/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Lt=class s extends Ft{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],p=[],g=0,x=[],m=n/2,u=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(p,2));function v(){let E=new P,R=new P,T=0,A=(t-e)/n;for(let z=0;z<=r;z++){let M=[],w=z/r,L=w*(t-e)+e;for(let G=0;G<=i;G++){let ee=G/i,I=ee*l+o,U=Math.sin(I),V=Math.cos(I);R.x=L*U,R.y=-w*n+m,R.z=L*V,d.push(R.x,R.y,R.z),E.set(U,A,V).normalize(),f.push(E.x,E.y,E.z),p.push(ee,1-w),M.push(g++)}x.push(M)}for(let z=0;z<i;z++)for(let M=0;M<r;M++){let w=x[M][z],L=x[M+1][z],G=x[M+1][z+1],ee=x[M][z+1];h.push(w,L,ee),h.push(L,G,ee),T+=6}c.addGroup(u,T,0),u+=T}function _(E){let R=g,T=new De,A=new P,z=0,M=E===!0?e:t,w=E===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,m*w,0),f.push(0,w,0),p.push(.5,.5),g++;let L=g;for(let G=0;G<=i;G++){let I=G/i*l+o,U=Math.cos(I),V=Math.sin(I);A.x=M*V,A.y=m*w,A.z=M*U,d.push(A.x,A.y,A.z),f.push(0,w,0),T.x=U*.5+.5,T.y=V*.5*w+.5,p.push(T.x,T.y),g++}for(let G=0;G<i;G++){let ee=R+G,I=L+G;E===!0?h.push(I,I+1,ee):h.push(I+1,I,ee),z+=3}c.addGroup(u,z,E===!0?1:2),u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wt=class s extends Lt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fs=class s extends Ft{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new P,E=new P,R=new P;for(let T=0;T<t.length;T+=3)p(t[T+0],_),p(t[T+1],E),p(t[T+2],R),l(_,E,R,v)}function l(v,_,E,R){let T=R+1,A=[];for(let z=0;z<=T;z++){A[z]=[];let M=v.clone().lerp(E,z/T),w=_.clone().lerp(E,z/T),L=T-z;for(let G=0;G<=L;G++)G===0&&z===T?A[z][G]=M:A[z][G]=M.clone().lerp(w,G/L)}for(let z=0;z<T;z++)for(let M=0;M<2*(T-z)-1;M++){let w=Math.floor(M/2);M%2===0?(f(A[z][w+1]),f(A[z+1][w]),f(A[z][w])):(f(A[z][w+1]),f(A[z+1][w+1]),f(A[z+1][w]))}}function c(v){let _=new P;for(let E=0;E<r.length;E+=3)_.x=r[E+0],_.y=r[E+1],_.z=r[E+2],_.normalize().multiplyScalar(v),r[E+0]=_.x,r[E+1]=_.y,r[E+2]=_.z}function h(){let v=new P;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let E=m(v)/2/Math.PI+.5,R=u(v)/Math.PI+.5;a.push(E,1-R)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){let _=a[v+0],E=a[v+2],R=a[v+4],T=Math.max(_,E,R),A=Math.min(_,E,R);T>.9&&A<.1&&(_<.2&&(a[v+0]+=1),E<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,_){let E=v*3;_.x=e[E+0],_.y=e[E+1],_.z=e[E+2]}function g(){let v=new P,_=new P,E=new P,R=new P,T=new De,A=new De,z=new De;for(let M=0,w=0;M<r.length;M+=9,w+=6){v.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),T.set(a[w+0],a[w+1]),A.set(a[w+2],a[w+3]),z.set(a[w+4],a[w+5]),R.copy(v).add(_).add(E).divideScalar(3);let L=m(R);x(T,w+0,v,L),x(A,w+2,_,L),x(z,w+4,E,L)}}function x(v,_,E,R){R<0&&v.x===1&&(a[_]=v.x-1),E.x===0&&E.z===0&&(a[_]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Bs=class s extends Fs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},tn=class s extends Fs{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},nn=class s extends Ft{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],d=e,f=(t-e)/i,p=new P,g=new De;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let u=r+m/n*a;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let x=0;x<i;x++){let m=x*(n+1);for(let u=0;u<n;u++){let v=u+m,_=v,E=v+n+1,R=v+n+2,T=v+1;o.push(_,E,T),o.push(E,R,T)}}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ct=class s extends Ft{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,f=new P,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let v=[],_=u/n,E=0;u===0&&a===0?E=.5/t:u===n&&l===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){let T=R/t;d.x=-e*Math.cos(i+T*r)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(i+T*r)*Math.sin(a+_*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(T+E,1-_),v.push(c++)}h.push(v)}for(let u=0;u<n;u++)for(let v=0;v<t;v++){let _=h[u][v+1],E=h[u][v],R=h[u+1][v],T=h[u+1][v+1];(u!==0||a>0)&&p.push(_,E,T),(u!==n-1||l<Math.PI)&&p.push(E,R,T)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rn=class s extends Ft{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new P,d=new P,f=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let x=g/i*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,u=(i+1)*(p-1)+g,v=(i+1)*p+g;a.push(x,m,v),a.push(m,u,v)}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var zs=class extends Gn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function ds(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Bp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var _i=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ha=class extends _i{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yo,endingEnd:yo}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mo:r=e,o=2*t-n;break;case So:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mo:a=e,l=2*n-t;break;case So:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,E=p*m-p*x;for(let R=0;R!==o;++R)r[R]=u*a[h+R]+v*a[c+R]+_*a[l+R]+E*a[d+R];return r}},ua=class extends _i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},da=class extends _i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Jt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ds(t,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ds(e.times,Array),values:ds(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ha(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case fr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return fr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Bp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=gs;var Vn=class extends Jt{};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=ms;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Jt{};fa.prototype.ValueTypeName="color";var pa=class extends Jt{};pa.prototype.ValueTypeName="number";var ma=class extends _i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)An.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hi=class extends Jt{InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}};Hi.prototype.ValueTypeName="quaternion";Hi.prototype.DefaultInterpolation=gs;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Jt{};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=ms;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Jt{};ga.prototype.ValueTypeName="vector";var _a=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},zp=new _a,xa=class{constructor(e){this.manager=e!==void 0?e:zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var xi=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Hs=class extends xi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Br=new ut,hl=new P,ul=new P,ks=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fi,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(hl),ul.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ul),t.updateMatrixWorld(),Br.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var dl=new ut,Pi=new P,zr=new P,va=class extends ks{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pi),zr.copy(n.position),zr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zr),n.updateMatrixWorld(),i.makeTranslation(-Pi.x,-Pi.y,-Pi.z),dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl)}},Gs=class extends xi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new va}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ya=class extends ks{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends xi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new ya}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ws=class extends xi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fl(){return(typeof performance>"u"?Date:performance).now()}var Ca="\\[\\]\\.:\\/",Hp=new RegExp("["+Ca+"]","g"),Pa="[^"+Ca+"]",kp="[^"+Ca.replace("\\.","")+"]",Gp=/((?:WC+[\/:])*)/.source.replace("WC",Pa),Vp=/(WCOD+)?/.source.replace("WCOD",kp),Wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pa),Xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pa),qp=new RegExp("^"+Gp+Vp+Wp+Xp+"$"),Yp=["material","materials","bones","map"],Ma=class{constructor(e,t,n){let i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},et=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(e){let t=qp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Yp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=Ma;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rm=new Float32Array(1);var qs=class{constructor(e,t,n=0,i=1/0){this.ray=new Es(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Oi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Sa(e,this,n,t),n.sort(pl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Sa(e[i],this,n,t);return n.sort(pl),n}};function pl(s,e){return s.distance-e.distance}function Sa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)Sa(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);var Mi=null;function $p(){if(Mi)return Mi;let s=document.createElement("canvas");s.width=8,s.height=64;let e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,64);return t.addColorStop(0,"#ffffff"),t.addColorStop(.55,"#e9e9e9"),t.addColorStop(1,"#8f8f8f"),e.fillStyle=t,e.fillRect(0,0,8,64),Mi=new Os(s),Mi.minFilter=_t,Mi.magFilter=_t,Mi}function He(s,e={}){return new zs({color:s,gradientMap:$p(),roughness:e.roughness??.75,emissive:e.emissive||"#000000",emissiveIntensity:e.emissiveIntensity||0,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side||jt})}var Ia={grass:"#6fc46b",path:"#e0bd8f",dirt:"#a8784f",sky:"#aee3ff",fog:"#c9ecff",gold:"#ffd66e",cyan:"#6ee7ff",violet:"#b28cff",coral:"#ff8f8f",deep:"#152347",glass:"rgba(18,28,54,0.82)"},La={1:{grass:"#6fc46b",path:"#e0bd8f",dirt:"#a8784f"},2:{grass:"#4f9d94",path:"#b8a8c0",dirt:"#6f6f86"},3:{grass:"#8a5a78",path:"#e08a5a",dirt:"#7a4638"}};function Zp(s){let e=[],t={x:s[0].x,z:s[0].z};e.push({x:t.x,z:t.z});for(let n=1;n<s.length;n++){let i=s[n];for(;t.x!==i.x;)t.x+=Math.sign(i.x-t.x),e.push({x:t.x,z:t.z});for(;t.z!==i.z;)t.z+=Math.sign(i.z-t.z),e.push({x:t.x,z:t.z})}return e}function Jp(s){let e=0;for(let t=0;t<s.length-1;t++)e+=Math.abs(s[t+1].x-s[t].x)+Math.abs(s[t+1].z-s[t].z);return e}var Dt=[{id:"3001",name:"\u5C71\u53E3\u9632\u7EBF",chapter:1,gridW:28,gridH:20,startGold:200,baseHP:20,dualPath:!1,paths:[[{x:0,z:4},{x:26,z:4},{x:26,z:9},{x:0,z:9},{x:0,z:14},{x:26,z:14}]]},{id:"3002",name:"\u68EE\u6797\u9698\u53E3",chapter:1,gridW:28,gridH:20,startGold:250,baseHP:20,dualPath:!0,basePos:{x:27,z:9},paths:[[{x:0,z:3},{x:26,z:3},{x:26,z:9},{x:27,z:9}],[{x:0,z:15},{x:26,z:15},{x:26,z:9},{x:27,z:9}]]},{id:"3003",name:"\u77EE\u4EBA\u5821\u5792",chapter:1,gridW:28,gridH:20,startGold:300,baseHP:25,dualPath:!1,paths:[[{x:0,z:3},{x:25,z:3},{x:25,z:8},{x:2,z:8},{x:2,z:15},{x:26,z:15}]]},{id:"3004",name:"\u67AF\u9AA8\u5893\u5730",chapter:2,gridW:28,gridH:20,startGold:280,baseHP:20,dualPath:!1,paths:[[{x:0,z:4},{x:26,z:4},{x:26,z:10},{x:1,z:10},{x:1,z:15},{x:26,z:15}]]},{id:"3005",name:"\u5E7D\u7075\u6E56\u6CCA",chapter:2,gridW:28,gridH:20,startGold:320,baseHP:20,dualPath:!0,basePos:{x:27,z:10},paths:[[{x:0,z:2},{x:25,z:2},{x:25,z:10},{x:27,z:10}],[{x:0,z:17},{x:25,z:17},{x:25,z:10},{x:27,z:10}]]},{id:"3006",name:"\u9ED1\u6697\u5854\u6797",chapter:2,gridW:28,gridH:20,startGold:350,baseHP:25,dualPath:!1,paths:[[{x:0,z:3},{x:25,z:3},{x:25,z:9},{x:2,z:9},{x:2,z:16},{x:26,z:16}]]},{id:"3007",name:"\u7194\u5CA9\u901A\u9053",chapter:3,gridW:28,gridH:20,startGold:380,baseHP:20,dualPath:!0,basePos:{x:27,z:10},paths:[[{x:0,z:3},{x:25,z:3},{x:25,z:10},{x:27,z:10}],[{x:0,z:16},{x:25,z:16},{x:25,z:10},{x:27,z:10}]]},{id:"3008",name:"\u5730\u72F1\u4E4B\u95E8",chapter:3,gridW:30,gridH:20,startGold:400,baseHP:30,dualPath:!1,paths:[[{x:0,z:3},{x:27,z:3},{x:27,z:9},{x:2,z:9},{x:2,z:16},{x:28,z:16}]]}],Js=class{constructor(e){this.scene=e,this.mapGroup=new je,this.scene.add(this.mapGroup),this.gridW=0,this.gridH=0,this.paths=[],this.pathCellSet=new Set,this.blockedCells=new Set,this.groundMeshes=[],this.groundMesh=null,this.baseMesh=null,this.heroSpawn={x:0,z:0},this.basePos={x:0,z:0},this.theme=null,this.chapter=1,this.levelIndex=0,this.materials={}}reset(e){this.levelIndex=e||0,this.buildLevel(this.levelIndex)}buildLevel(e){for(;this.mapGroup.children.length>0;)this.mapGroup.remove(this.mapGroup.children[0]);this.groundMeshes=[],this.materials={},this.blockedCells=new Set;let t=Dt[e]||Dt[0];this.gridW=t.gridW,this.gridH=t.gridH,this.chapter=t.chapter,this.startGold=t.startGold,this.baseMaxHP=t.baseHP;let n=La[this.chapter]||La[1];this.theme={grass:n.grass,path:n.path,dirt:n.dirt,water:"#5fb8e8"},this.paths=t.paths.map(i=>{let r=Zp(i),a=r.map(o=>new P(o.x+.5,.05,o.z+.5));return{corners:i,cells:r,points:a,length:Jp(r)}}),this.pathCellSet=new Set;for(let i of this.paths)for(let r of i.cells)this.pathCellSet.add(r.x+","+r.z),this.blockedCells.add(r.x+","+r.z);this.basePos=t.basePos||this.paths[0].cells[this.paths[0].cells.length-1],this.heroSpawn=t.heroSpawn||this.computeHeroSpawn(),this.buildTerrain(),this.buildPaths(),this.buildBase(),this.buildDecorations()}computeHeroSpawn(){let e=this.basePos,t=[[1,0],[-1,0],[0,1],[0,-1]];for(let[n,i]of t){let r=e.x+n,a=e.z+i;if(r>=0&&r<this.gridW&&a>=0&&a<this.gridH&&!this.pathCellSet.has(r+","+a))return{x:r,z:a}}return{x:e.x,z:e.z}}getCenter(){return new P(this.gridW/2,0,this.gridH/2)}getHeroSpawn(){return new P(this.heroSpawn.x+.5,.2,this.heroSpawn.z+.5)}getPathWorldPoints(e=0){return(this.paths[e]||this.paths[0]).points}getPathLength(e=0){return(this.paths[e]||this.paths[0]).length}cellKey(e,t){return e+","+t}getCellFromWorld(e){return{x:Math.floor(e.x),z:Math.floor(e.z)}}getCellCenterWorld(e,t){return new P(e+.5,.25,t+.5)}isPlaceableCell(e,t){return!(e<0||t<0||e>=this.gridW||t>=this.gridH||this.pathCellSet.has(this.cellKey(e,t))||this.blockedCells.has(this.cellKey(e,t)))}buildTerrain(){let e=He(this.theme.grass,{roughness:.9}),t=He(this.theme.dirt,{roughness:.95});this.materials.grass=e,this.materials.dirt=t;let n=new ot(this.gridW+4,.5,this.gridH+4),i=new te(n,He("#6b5b52",{roughness:.95}));i.position.set(this.gridW/2,-.5,this.gridH/2),i.receiveShadow=!0,this.mapGroup.add(i);let r=new ot(.96,.2,.96);for(let o=0;o<this.gridW;o++)for(let l=0;l<this.gridH;l++){let h=this.pathCellSet.has(this.cellKey(o,l))?t:e,d=new te(r,h);d.position.set(o+.5,.1,l+.5),d.receiveShadow=!0,d.castShadow=!0,this.mapGroup.add(d),this.groundMeshes.push(d)}let a=new en(this.gridW,this.gridH);a.rotateX(-Math.PI/2),this.groundMesh=new te(a,new Ve({visible:!1})),this.groundMesh.position.set(this.gridW/2,.2,this.gridH/2),this.mapGroup.add(this.groundMesh)}buildPaths(){let e=He(this.theme.path,{roughness:.75});this.materials.path=e;for(let t of this.paths)for(let n of t.cells){let i=new ot(.88,.21,.88),r=new te(i,e);r.position.set(n.x+.5,.2,n.z+.5),r.receiveShadow=!0,this.mapGroup.add(r)}}buildBase(){let e=new je,t=new te(new Lt(.85,1,.5,10),He("#d7c9ff",{emissive:"#6e5bff",emissiveIntensity:.25}));t.position.y=.25,t.castShadow=!0,e.add(t);let n=new te(new tn(.7,0),He("#7ef0ff",{emissive:"#3ec8ff",emissiveIntensity:.85}));n.position.y=1.25,n.castShadow=!0,e.add(n);let i=new te(new tn(.4,0),new Ve({color:"#eaffff",transparent:!0,opacity:.9}));i.position.y=1.25,e.add(i);let r=new Gs("#6ee7ff",1.4,8);r.position.y=1.6,e.add(r);let a=this.basePos.x,o=this.basePos.z;e.position.set(a+.5,0,o+.5),this.mapGroup.add(e),this.baseMesh=e,this.baseMesh.userData.crystal=n,this.baseMesh.userData.inner=i;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)this.blockedCells.add(this.cellKey(a+l,o+c))}buildDecorations(){let e=[];for(let t=0;t<34;t++){let n=Math.floor(Math.random()*this.gridW),i=Math.floor(Math.random()*this.gridH),r=this.cellKey(n,i);!this.blockedCells.has(r)&&!this.pathCellSet.has(r)&&(e.some(o=>Math.abs(o.x-n)<2&&Math.abs(o.z-i)<2)||(e.push({x:n,z:i}),this.blockedCells.add(r),this.buildTree(n+.5,i+.5)))}for(let t=0;t<14;t++){let n=Math.floor(Math.random()*this.gridW),i=Math.floor(Math.random()*this.gridH),r=this.cellKey(n,i);!this.blockedCells.has(r)&&!this.pathCellSet.has(r)&&(this.blockedCells.add(r),this.buildRock(n+.5,i+.5))}}buildTree(e,t){let n=new je,i=new te(new Lt(.14,.2,1.1,6),He("#8a5a3a"));i.position.y=.55,i.castShadow=!0,n.add(i);let r=new te(new wt(.55,1,7),He("#4fae5a"));r.position.y=1.2,r.castShadow=!0,n.add(r);let a=new te(new wt(.4,.8,7),He("#63d16e"));a.position.y=1.7,a.castShadow=!0,n.add(a),n.position.set(e,.2,t),this.mapGroup.add(n)}buildRock(e,t){let n=.22+Math.random()*.28,i=new te(new Bs(n,1),He("#b8b4c8"));i.position.set(e,n*.5,t),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),i.castShadow=!0,i.receiveShadow=!0,this.mapGroup.add(i)}isPathCell(e,t){return this.pathCellSet.has(this.cellKey(e,t))}};var Wt={arrow:{name:"\u7BAD\u5854",icon:"\u{1F3F9}",levels:[{cost:50,damage:15,atkSpeed:1.2,range:3,charge:.2,pierce:0,multi:1,color:"#4a9e4a",desc:"\u57FA\u7840\u7269\u7406\u5854\uFF0C\u53EF\u653B\u51FB\u98DE\u884C"},{cost:50,damage:21,atkSpeed:1.32,range:3.5,charge:.2,pierce:1,multi:1,color:"#5cb85c",desc:"\u7BAD\u77E2\u7A7F\u900F1\u4E2A\u76EE\u6807\uFF0C\u4F24\u5BB3\u63D0\u5347"},{cost:100,damage:27,atkSpeed:1.44,range:4,charge:.2,pierce:1,multi:2,color:"#6fd96f",desc:"\u591A\u91CD\u5C04\u51FB\uFF0C\u540C\u65F6\u653B\u51FB2\u4E2A\u76EE\u6807"}],damageType:"physical",targetsAir:!0},magic:{name:"\u9B54\u6CD5\u5854",icon:"\u{1F52E}",levels:[{cost:80,damage:25,atkSpeed:.8,range:2.5,charge:.3,resistPen:.2,undeadBonus:.2,splashRadius:0,splashDamage:0,slowPct:0,color:"#9b59b6",desc:"\u9B54\u6CD5\u4F24\u5BB3\uFF0C\u65E0\u89C620%\u6297\u6027\uFF0C\u5BF9\u4EA1\u7075+20%"},{cost:80,damage:35,atkSpeed:.88,range:3,charge:.3,resistPen:.2,undeadBonus:.2,splashRadius:.5,splashDamage:.5,slowPct:0,color:"#af7ac5",desc:"\u6E85\u5C04\u4F24\u5BB3\uFF0C0.5\u683C\u8303\u56F4"},{cost:160,damage:45,atkSpeed:.96,range:3.5,charge:.3,resistPen:.2,undeadBonus:.2,splashRadius:.5,splashDamage:.5,slowPct:.15,color:"#c39bd3",desc:"\u8303\u56F4\u9B54\u6CD5\u7206\u53D1\uFF0C\u547D\u4E2D\u51CF\u901F15%\u6301\u7EED2\u79D2"}],damageType:"magic",targetsAir:!0},cannon:{name:"\u70AE\u5854",icon:"\u{1F4A3}",levels:[{cost:100,damage:40,atkSpeed:.5,range:2.5,charge:.4,aoe:.8,armorShred:0,burnDps:0,color:"#e74c3c",desc:"AOE\u8303\u56F4\u4F24\u5BB3\uFF0C\u4EC5\u5730\u9762"},{cost:100,damage:56,atkSpeed:.55,range:3,charge:.4,aoe:.8,armorShred:.3,burnDps:0,color:"#ec7063",desc:"\u7834\u7532\uFF0C\u76EE\u6807\u62A4\u7532-30%\u6301\u7EED3\u79D2"},{cost:200,damage:72,atkSpeed:.6,range:3.5,charge:.4,aoe:.8,armorShred:.3,burnDps:8,color:"#f1948a",desc:"\u7194\u5CA9\u70AE\u5F39\uFF0C\u707C\u70E78\u70B9/\u79D2\u6301\u7EED3\u79D2"}],damageType:"physical",targetsAir:!1,aoe:.8},ice:{name:"\u51B0\u971C\u5854",icon:"\u2744\uFE0F",levels:[{cost:60,damage:8,atkSpeed:1,range:2,charge:.15,slowPct:.3,freezeChance:0,freezePulse:!1,color:"#3498db",desc:"\u51CF\u901F30%\uFF0C\u63A7\u5236\u8F85\u52A9"},{cost:60,damage:11,atkSpeed:1.1,range:2.5,charge:.15,slowPct:.45,freezeChance:.1,freezePulse:!1,color:"#5dade2",desc:"\u51CF\u901F45%\uFF0C10%\u51BB\u7ED31\u79D2"},{cost:120,damage:14,atkSpeed:1.2,range:3,charge:.15,slowPct:.45,freezeChance:0,freezePulse:!0,color:"#85c1e9",desc:"\u8303\u56F4\u51B0\u51BB\uFF0C\u6BCF4\u79D2\u51BB\u7ED3\u8303\u56F4\u5185\u5730\u9762\u602A\u72691\u79D2"}],damageType:"magic",targetsAir:!1}},Ks=class{constructor(e,t){this.scene=e,this.game=t,this.towerGroup=new je,this.scene.add(this.towerGroup),this.projectileGroup=new je,this.scene.add(this.projectileGroup),this.towers=[],this.projectiles=[],this.selectedTower=null,this.towerDefs=Wt}reset(){for(;this.towerGroup.children.length>0;)this.towerGroup.remove(this.towerGroup.children[0]);for(;this.projectileGroup.children.length>0;)this.projectileGroup.remove(this.projectileGroup.children[0]);this.towers=[],this.projectiles=[],this.selectedTower=null}getTowerAtCell(e,t){return this.towers.find(n=>n.cell&&n.cell.x===e&&n.cell.z===t)||null}getTowerDef(e){return Wt[e]}selectTower(e){return this.selectedTower=this.getTowerAtCell(e.x,e.z),this.selectedTower}deselectTower(){this.selectedTower=null}canPlaceTower(e,t){if(!e||this.getTowerAtCell(e.x,e.z))return!1;let n=Wt[t];return!n||!this.game.map.isPlaceableCell(e.x,e.z)?!1:this.game.gold>=n.levels[0].cost}placeTower(e,t){if(!this.canPlaceTower(e,t))return!1;let i=Wt[t].levels[0].cost;if(!this.game.spendGold(i))return!1;let r=this.game.map.getCellCenterWorld(e.x,e.z),a=this.buildTowerMesh(t,1,r);return this.towerGroup.add(a),this.towers.push({cell:{x:e.x,z:e.z},type:t,level:1,mesh:a,pos:r,cooldown:0,chargeTimer:0,target:null,stunDuration:0,atkSpeedMul:1,atkSpeedMulTimer:0,freezePulseTimer:4,expiry:0,totalInvested:i}),!0}addTemporaryTower(e,t,n=2,i=15){if(!Wt[e]||this.getTowerAtCell(t.x,t.z))return null;let a=this.game.map.getCellCenterWorld(t.x,t.z),o=this.buildTowerMesh(e,n,a);this.towerGroup.add(o);let l={cell:{x:t.x,z:t.z},type:e,level:n,mesh:o,pos:a.clone(),cooldown:0,chargeTimer:0,target:null,stunDuration:0,atkSpeedMul:1,atkSpeedMulTimer:0,freezePulseTimer:4,expiry:i,totalInvested:0,temporary:!0};return this.towers.push(l),l}upgradeTower(e){let t=this.getTowerAtCell(e.x,e.z);if(!t||t.level>=3)return!1;let i=Wt[t.type].levels[t.level].cost;if(!this.game.spendGold(i))return!1;t.level++,t.totalInvested+=i,this.towerGroup.remove(t.mesh);let r=this.buildTowerMesh(t.type,t.level,t.pos);return this.towerGroup.add(r),t.mesh=r,this.selectedTower=t,!0}sellTower(e){let t=this.getTowerAtCell(e.x,e.z);if(!t)return!1;let n=Math.floor(t.totalInvested*.7);return this.game.addGold(n),this.towerGroup.remove(t.mesh),this.towers=this.towers.filter(i=>i!==t),this.selectedTower===t&&(this.selectedTower=null),!0}buildTowerMesh(e,t,n){let r=Wt[e].levels[t-1],a=new je,o={arrow:"#ffd66e",magic:"#b28cff",cannon:"#ff8f5e",ice:"#6ee7ff"}[e]||"#ffffff",l={arrow:"#3f9e54",magic:"#7a5cff",cannon:"#e05c3a",ice:"#3fb7e8"}[e]||r.color,c=new te(new Lt(.42,.48,.28,10),He("#cfd4e8",{roughness:.8}));c.position.y=.14,c.castShadow=!0,a.add(c);let h=.55+t*.18,d=new te(new Lt(.28,.34,h,10),He(l,{roughness:.5,emissive:o,emissiveIntensity:.12}));d.position.y=.28+h/2,d.castShadow=!0,a.add(d);let f=new te(new ct(.2,10,8),new Ve({color:o}));if(f.position.y=.28+h+.1,a.add(f),e==="arrow"){let p=new te(new wt(.16,.42,8),He("#ffd66e",{emissive:"#ffd66e",emissiveIntensity:.35}));p.position.y=.28+h+.42,p.castShadow=!0,a.add(p)}else if(e==="magic"){let p=new te(new Rn(.34,.045,8,12),He(o,{emissive:o,emissiveIntensity:.5}));p.rotation.x=Math.PI/2.6,p.position.y=.28+h+.25,a.add(p)}else if(e==="cannon"){let p=new te(new Lt(.1,.14,.75,8),He("#3a3f52"));p.rotation.x=Math.PI/2,p.position.set(0,.28+h+.2,.28),a.add(p)}else if(e==="ice"){let p=new te(new tn(.2,0),He("#6ee7ff",{emissive:"#6ee7ff",emissiveIntensity:.5}));p.position.y=.28+h+.35,p.castShadow=!0,a.add(p)}if(t>=2){let p=new te(new Rn(.36,.05,8,12),He("#ffd66e",{emissive:"#ffd66e",emissiveIntensity:.35}));p.rotation.x=Math.PI/2,p.position.y=.28+h/2,a.add(p)}if(t>=3){let p=new te(new Rn(.42,.04,8,12),new Ve({color:"#ff7a7a"}));p.rotation.x=Math.PI/2,p.position.y=.28+h+.05,a.add(p)}return a.position.copy(n),a.userData={towerType:e,towerLevel:t},a}update(e){let t=this.game.monsterManager.monsters;for(let n=this.towers.length-1;n>=0;n--){let i=this.towers[n],r=Wt[i.type],a=r.levels[i.level-1];if(i.expiry>0&&(i.expiry-=e,i.expiry<=0)){this.towerGroup.remove(i.mesh),this.towers.splice(n,1);continue}if(i.stunDuration>0){i.stunDuration-=e;continue}if(i.atkSpeedMulTimer>0&&(i.atkSpeedMulTimer-=e,i.atkSpeedMulTimer<=0&&(i.atkSpeedMul=1)),i.cooldown-=e,i.chargeTimer-=e,(!i.target||i.target.dead||!this.isInRange(i,i.target,a.range))&&(i.target=this.findTarget(i,t,r,a.range)),i.type==="ice"&&a.freezePulse&&(i.freezePulseTimer-=e,i.freezePulseTimer<=0)){i.freezePulseTimer=4;for(let o of t)o.dead||o.flying||i.pos.distanceTo(o.mesh.position)<=a.range+.3&&this.game.monsterManager.applyFreeze(o,1)}i.target&&i.cooldown<=0&&i.chargeTimer<=0&&(this.attack(i,i.target,r,a),i.cooldown=1/(a.atkSpeed*i.atkSpeedMul),i.chargeTimer=a.charge||0)}this.updateProjectiles(e)}findTarget(e,t,n,i){let r=null,a=-1;for(let o of t)if(!(o.dead||!n.targetsAir&&o.flying||e.pos.distanceTo(o.mesh.position)>i)){if(!r){r=o;continue}switch(e.type){case"arrow":case"ice":o.pathProgress>r.pathProgress&&(r=o);break;case"magic":o.hp>r.hp&&(r=o);break;case"cannon":{let c=0;for(let h of t)h.dead||h.flying||o.mesh.position.distanceTo(h.mesh.position)<=1.2&&c++;c>a&&(r=o,a=c);break}}}return r}findTopTargets(e,t,n,i,r){let a=[];for(let o of e)o.dead||!t.targetsAir&&o.flying||r.pos.distanceTo(o.mesh.position)>n+.3||a.push(o);return a.sort((o,l)=>l.pathProgress-o.pathProgress),a.slice(0,i)}isInRange(e,t,n){return e.pos.distanceTo(t.mesh.position)<=n+.3}attack(e,t,n,i){let r=this.game.monsterManager.monsters,a={arrow:"#ffd66e",magic:"#b28cff",cannon:"#ff8f5e",ice:"#6ee7ff"}[e.type]||"#ffffff";if(this.game&&this.game.createMuzzleFlash&&this.game.createMuzzleFlash(e.pos.clone().setY(.7),a),e.type==="arrow"&&i.multi>1){let o=this.findTopTargets(r,n,i.range,i.multi,e);for(let l of o)this.createProjectile(e.pos.clone(),l,e.type,i.damage,0,i,n);return}if(e.type==="cannon"){this.createProjectile(e.pos.clone(),t,e.type,i.damage,n.aoe||.8,i,n);return}this.createProjectile(e.pos.clone(),t,e.type,i.damage,0,i,n)}createProjectile(e,t,n,i,r,a,o){let l=new ct(.1,6,4),c="#ffff00";switch(n){case"arrow":c="#f1c40f";break;case"magic":c="#9b59b6";break;case"cannon":c="#e74c3c";break;case"ice":c="#3498db";break}let h=new Ve({color:c}),d=new te(l,h);d.position.copy(e),d.position.y+=.5,this.projectileGroup.add(d),this.projectiles.push({mesh:d,from:e.clone(),target:t,damage:i,aoe:r,type:n,speed:n==="cannon"?6:12,instant:n==="ice",progress:0,startPos:e.clone(),pierceLeft:n==="arrow"&&a&&a.pierce||0,hitIds:[],splashRadius:n==="magic"&&a&&a.splashRadius||0,splashDamage:n==="magic"&&a&&a.splashDamage||0,slowPct:(n==="ice"||n==="magic")&&a&&a.slowPct||0,slowDuration:2,freezeChance:n==="ice"&&a&&a.freezeChance||0,freezeDuration:1,armorShred:n==="cannon"&&a&&a.armorShred||0,armorShredDuration:3,burnDps:n==="cannon"&&a&&a.burnDps||0,burnDuration:3,resistPen:n==="magic"&&a&&a.resistPen||0,undeadBonus:n==="magic"&&a&&a.undeadBonus||0,damageType:o?o.damageType:n==="magic"?"magic":"physical"})}updateProjectiles(e){for(let t=this.projectiles.length-1;t>=0;t--){let n=this.projectiles[t];if(n.instant){this.dealDamage(n),this.projectileGroup.remove(n.mesh),this.projectiles.splice(t,1);continue}if(!n.target||n.target.dead){this.projectileGroup.remove(n.mesh),this.projectiles.splice(t,1);continue}let i=n.target.mesh.position.clone();if(i.y+=.5,n.mesh.position.distanceTo(i)<.3){if(this.dealDamage(n),n.pierceLeft>0){n.pierceLeft--,n.hitIds.push(n.target.id);let a=this.findNextPierceTarget(n);if(a){n.target=a;continue}}this.projectileGroup.remove(n.mesh),this.projectiles.splice(t,1)}else{let a=i.clone().sub(n.mesh.position).normalize(),o=n.speed*e;n.type==="cannon"?(n.progress+=o/Math.max(.01,n.startPos.distanceTo(i)),n.mesh.position.lerpVectors(n.startPos,i,Math.min(n.progress,1)),n.mesh.position.y+=Math.sin(n.progress*Math.PI)*2):n.mesh.position.add(a.multiplyScalar(o))}}}findNextPierceTarget(e){let t=Wt[e.type];return this.game.monsterManager.monsters.filter(i=>!i.dead&&!e.hitIds.includes(i.id)).filter(i=>t.targetsAir||!i.flying).sort((i,r)=>r.pathProgress-i.pathProgress)[0]||null}dealDamage(e){let t=this.game.monsterManager,n=e.damageType,i={resistPen:e.resistPen||0,undeadBonus:e.undeadBonus||0},r=(a,o)=>{a.dead||a.flying&&e.type==="cannon"||(t.damageMonster(a,o,n,i),e.slowPct&&t.applySlow(a,e.slowPct,e.slowDuration||2,{magic:e.type==="magic"}),e.type==="ice"&&e.freezeChance>0&&Math.random()<e.freezeChance&&t.applyFreeze(a,e.freezeDuration||1),e.armorShred&&(a.armorShred=Math.max(a.armorShred||0,e.armorShred),a.armorShredDuration=Math.max(a.armorShredDuration||0,e.armorShredDuration||3)),e.burnDps&&t.applyBurn(a,e.burnDps,e.burnDuration||3))};if(e.aoe>0){for(let a of t.monsters)a.dead||a.flying&&e.type==="cannon"||e.mesh.position.distanceTo(a.mesh.position)<=e.aoe&&r(a,e.damage);return}if(e.target&&!e.target.dead&&r(e.target,e.damage),e.splashRadius>0)for(let a of t.monsters)a===e.target||a.dead||e.mesh.position.distanceTo(a.mesh.position)<=e.splashRadius&&r(a,e.damage*(e.splashDamage||.5))}stunTowersWithin(e,t,n){let i=0;for(let r of this.towers)r.pos.distanceTo(e)<=t&&(r.stunDuration=Math.max(r.stunDuration||0,n||2),i++);return i}slowTowersWithin(e,t,n,i){let r=0;for(let a of this.towers)a.pos.distanceTo(e)<=t&&(a.atkSpeedMul=1-(n||.5),a.atkSpeedMulTimer=Math.max(a.atkSpeedMulTimer||0,i||3),r++);return r}showTowerMenu(e){let t=this.getTowerAtCell(e.x,e.z);return t?(this.selectedTower=t,{cell:{x:t.cell.x,z:t.cell.z},pos:t.pos.clone(),type:t.type,level:t.level,totalInvested:t.totalInvested,canUpgrade:t.level<3,upgradeCost:t.level<3?Wt[t.type].levels[t.level].cost:0,sellRefund:Math.floor(t.totalInvested*.7),def:Wt[t.type],levelDef:Wt[t.type].levels[t.level-1]}):null}hideTowerMenu(){this.selectedTower=null}updateVisuals(e){for(let t of this.towers)if(t.target&&!t.target.dead){let n=t.target.mesh.position.clone().sub(t.pos),i=Math.atan2(n.x,n.z);t.mesh.rotation.y+=(i-t.mesh.rotation.y)*5*e}}};var Si={goblin:{name:"\u54E5\u5E03\u6797",hp:70,speed:1.8,armor:0,magicResist:0,reward:10,livesCost:1,color:"#4caf50",size:[.25,.5,.25],flying:!1},orc:{name:"\u517D\u4EBA\u5C0F\u5175",hp:90,speed:1.5,armor:10,magicResist:0,reward:12,livesCost:1,color:"#2e7d32",size:[.35,.7,.35],flying:!1},wolfRider:{name:"\u72FC\u9A91\u5175",hp:220,speed:2,armor:15,magicResist:5,reward:45,livesCost:2,color:"#795548",size:[.35,.6,.5],flying:!1},shadow:{name:"\u6697\u5F71\u523A\u5BA2",hp:180,speed:2.2,armor:10,magicResist:10,reward:40,livesCost:2,color:"#4a148c",size:[.25,.5,.25],flying:!1},gargoyle:{name:"\u77F3\u50CF\u9B3C",hp:110,speed:1.8,armor:5,magicResist:0,reward:18,livesCost:1,color:"#607d8b",size:[.4,.5,.4],flying:!0},troll:{name:"\u5DE8\u9B54",hp:280,speed:1.2,armor:20,magicResist:10,reward:60,livesCost:3,color:"#8d6e63",size:[.45,.9,.45],flying:!1},orcCaptain:{name:"\u517D\u4EBA\u961F\u957F",hp:3e3,speed:1,armor:50,magicResist:30,reward:300,livesCost:10,color:"#bf360c",size:[.5,1,.5],flying:!1,isBoss:!0,bossSkill:{type:"stunTowers",name:"\u9707\u5730\u7729\u6655",cooldown:10,firstDelay:5,warning:1,radius:3,duration:2}},fastGoblin:{name:"\u75BE\u98CE\u54E5\u5E03\u6797",hp:60,speed:4,armor:0,magicResist:0,reward:10,livesCost:1,color:"#66bb6a",size:[.2,.4,.2],flying:!1},skeleton:{name:"\u9AB7\u9AC5\u6218\u58EB",hp:85,speed:1.4,armor:5,magicResist:0,reward:14,livesCost:1,color:"#e0e0e0",size:[.3,.6,.3],flying:!1,undead:!0},zombie:{name:"\u50F5\u5C38",hp:120,speed:1.2,armor:5,magicResist:0,reward:12,livesCost:1,color:"#558b2f",size:[.3,.6,.3],flying:!1,undead:!0},lich:{name:"\u5DEB\u5996\u5B66\u5F92",hp:100,speed:1.8,armor:0,magicResist:30,reward:25,livesCost:1,color:"#1a237e",size:[.3,.6,.3],flying:!1,undead:!0},stoneGolem:{name:"\u77F3\u5080\u5121",hp:360,speed:.8,armor:40,magicResist:15,reward:50,livesCost:3,color:"#9e9e9e",size:[.5,1,.5],flying:!1,undead:!0},ghost:{name:"\u5E7D\u7075",hp:95,speed:2.2,armor:0,magicResist:20,reward:20,livesCost:1,color:"#b0bec5",size:[.3,.5,.3],flying:!0,undead:!0},skeletonKing:{name:"\u9AB7\u9AC5\u738B",hp:4e3,speed:1,armor:50,magicResist:30,reward:500,livesCost:10,color:"#b71c1c",size:[.6,1.4,.6],flying:!1,isBoss:!0,undead:!0,bossSkill:{type:"summon",name:"\u53EC\u5524\u9AB7\u9AC5",cooldown:5,firstDelay:3,summon:{type:"skeleton",count:2,hpScale:.8},maxSummons:6}},demonImp:{name:"\u6076\u9B54\u5C0F\u9B3C",hp:85,speed:2.5,armor:0,magicResist:25,reward:18,livesCost:1,color:"#d32f2f",size:[.25,.45,.25],flying:!1},hellHound:{name:"\u5730\u72F1\u72AC",hp:170,speed:3,armor:10,magicResist:15,reward:30,livesCost:2,color:"#212121",size:[.4,.5,.6],flying:!1},heavyDemon:{name:"\u91CD\u7532\u6076\u9B54",hp:480,speed:1,armor:50,magicResist:25,reward:70,livesCost:4,color:"#b71c1c",size:[.5,1.1,.5],flying:!1},wyvern:{name:"\u53CC\u8DB3\u98DE\u9F99",hp:220,speed:2,armor:10,magicResist:10,reward:35,livesCost:2,color:"#6a1b9a",size:[.45,.5,.5],flying:!0},hellGolem:{name:"\u5730\u72F1\u9B54\u50CF",hp:5200,speed:.9,armor:60,magicResist:40,reward:800,livesCost:12,color:"#ff5722",size:[.7,1.6,.7],flying:!1,isBoss:!0,bossSkill:{type:"slowTowers",name:"\u706B\u7130\u51B2\u51FB\u6CE2",cooldown:8,firstDelay:6,warning:2,radius:2.5,duration:3,slowPct:.5}}};var Qs=class{constructor(e,t){this.scene=e,this.game=t||null,this.monsterGroup=new je,this.scene.add(this.monsterGroup),this.monsters=[],this.paths=[],this.onMonsterKilled=null,this.onMonsterReachBase=null}reset(e){for(;this.monsterGroup.children.length>0;)this.monsterGroup.remove(this.monsterGroup.children[0]);this.monsters=[],this.paths=e&&e.length?e:[]}spawnMonster(e,t=0,n=1,i={}){let r=Si[e];if(!r)return null;let a=this.paths[t]||this.paths[0];if(!a)return null;let o=this.buildMonsterMesh(r),l=a.points[0].clone();o.position.copy(l);let h=(r.isBoss?1.05:r.flying?.5:.55)/Math.max(.2,r.size[1]);o.scale.setScalar(h),this.monsterGroup.add(o);let d=Math.round(r.hp*n),f={id:Date.now()+Math.random(),type:e,def:r,mesh:o,hp:d,maxHp:d,speed:r.speed,pathProgress:0,pathPoints:a.points,pathLength:a.length,dead:!1,flying:r.flying||!1,slowAmount:0,slowDuration:0,frozen:!1,frozenDuration:0,stunned:!1,stunDuration:0,armorShred:0,armorShredDuration:0,burnStacks:[],isSummon:i.isSummon||!1,entryIndex:t,hpScale:n,reward:r.reward,livesCost:r.livesCost||1,isBoss:r.isBoss||!1,bossSkillTimer:r.isBoss&&r.bossSkill?r.bossSkill.firstDelay:0,bossWarningTimer:0,lastPos:null,animTime:0,visualScale:h,hpBar:null};i.startProgress!=null&&(f.pathProgress=Math.max(0,Math.min(i.startProgress,a.length-.1)),f.mesh.position.copy(this.getPositionOnPath(a.points,f.pathProgress)));let p=this.buildHpBar(f);return o.add(p),f.hpBar=p,this.monsters.push(f),f}buildMonsterMesh(e){let t=new je,n=e.size,i=He(e.color,{roughness:.55}),r=He("#3a3f52",{roughness:.7}),a={},o=new je;t.add(o);let l=e.type==="wolfRider"||e.type==="hellHound",c=e.type==="ghost",h=(d,f,p,g)=>{let x=new ot(d,f,p);x.translate(0,-f/2,0);let m=new te(x,g);return m.castShadow=!0,m};if(l){let d=new te(new ot(n[0],n[1]*.5,n[2]),i);d.position.y=n[1]*.55,d.castShadow=!0,o.add(d),a.body=d;let f=n[0]*.45,p=new te(new ct(f,8,6),i);p.position.set(0,n[1]*.78,n[2]*.42),p.castShadow=!0,o.add(p);let g=new Ve({color:e.isBoss?"#ff4d4d":"#ffffff"});for(let u of[-1,1]){let v=new te(new ct(f*.18,6,6),g);v.position.set(u*f*.35,n[1]*.82,n[2]*.42+f*.7),o.add(v)}let x=n[1]*.42,m=[];for(let[u,v]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let _=h(n[0]*.22,x,n[2]*.28,r);_.position.set(u*n[0]*.34,n[1]*.42,v*n[2]*.32),o.add(_),m.push(_)}if(a.legs=m,a.torso=o,e.type==="wolfRider"){let u=He("#d8b98a",{roughness:.5}),v=new te(new ot(n[0]*.5,n[1]*.3,n[2]*.4),u);v.position.set(0,n[1]*1.02,-n[2]*.1),o.add(v);let _=new te(new ct(n[0]*.28,8,6),u);_.position.set(0,n[1]*1.24,-n[2]*.1),o.add(_)}}else if(e.flying){let d=new te(new ot(n[0],n[1]*.42,n[2]),i);d.position.y=n[1]*.5,d.castShadow=!0,o.add(d),a.body=d;let f=n[0]*.4,p=new te(new ct(f,8,6),i);p.position.set(0,n[1]*.72,n[2]*.36),p.castShadow=!0,o.add(p);let g=new ot(.06,n[1]*.34,n[2]*.75);g.translate(0,0,-n[2]*.3);let x=He("#8f9bb3",{roughness:.6}),m=new te(g,x);m.position.set(-n[0]*.58,n[1]*.62,0),o.add(m);let u=new te(g,x);if(u.position.set(n[0]*.58,n[1]*.62,0),o.add(u),a.leftWing=m,a.rightWing=u,a.torso=o,!c){let v=n[1]*.24,_=h(n[0]*.2,v,n[2]*.3,r);_.position.set(-n[0]*.3,n[1]*.28,0),o.add(_);let E=h(n[0]*.2,v,n[2]*.3,r);E.position.set(n[0]*.3,n[1]*.28,0),o.add(E),a.leftLeg=_,a.rightLeg=E}if(c){let v=new te(new wt(n[0]*.7,n[1]*.7,8),He(e.color,{transparent:!0,opacity:.85}));v.position.y=n[1]*.3,o.add(v)}}else{let d=n[1]*.38,f=n[1]*.4,p=n[0]*.95,g=n[1]*.3,x=d+g*.95,m=n[1]*.34,u=Math.max(.13,n[0]*.4),v=new te(new ot(p,g,n[2]*.85),i);v.position.y=d+g/2,v.castShadow=!0,o.add(v),a.torso=o,a.body=v;let _=h(p*.22,f,n[2]*.5,r);_.position.set(-p*.28,d,0),o.add(_);let E=h(p*.22,f,n[2]*.5,r);E.position.set(p*.28,d,0),o.add(E),a.leftLeg=_,a.rightLeg=E;let R=h(p*.18,m,n[2]*.42,r);R.position.set(-p*.58,x,0),o.add(R);let T=h(p*.18,m,n[2]*.42,r);T.position.set(p*.58,x,0),o.add(T),a.leftArm=R,a.rightArm=T;let A=d+g+u*.85,z=new te(new ct(u,10,8),i);z.position.y=A,z.castShadow=!0,o.add(z);let M=new Ve({color:e.isBoss?"#ff4d4d":"#ffffff"});for(let w of[-1,1]){let L=new te(new ct(u*.16,6,6),M);L.position.set(w*u*.35,A,u*.82),o.add(L)}if(e.type==="goblin"||e.type==="fastGoblin")for(let w of[-1,1]){let L=new te(new wt(u*.22,u*.8,6),i);L.position.set(w*u*.85,A+u*.4,0),L.rotation.z=w*.35,o.add(L)}if(e.type==="orc"||e.type==="orcCaptain")for(let w of[-1,1]){let L=new te(new wt(u*.14,u*.7,6),He("#f5f0e0"));L.position.set(w*u*.32,A-u*.55,u*.7),L.rotation.x=w*.2,o.add(L)}if(e.type==="demonImp"||e.type==="heavyDemon"||e.type==="hellGolem")for(let w of[-1,1]){let L=new te(new wt(u*.2,u*.9,6),He("#ff8f5e"));L.position.set(w*u*.45,A+u*.8,0),L.rotation.z=w*.3,o.add(L)}if(e.type==="skeleton"||e.type==="skeletonKing"){let w=He("#d9d4c8");for(let L=0;L<3;L++){let G=new te(new ot(p*.9,.03,n[2]*.8),w);G.position.y=d+g*(.35+L*.2),o.add(G)}if(e.type==="skeletonKing"){let L=new te(new Lt(u*.4,u*.42,u*.7,6),He("#ffd66e",{emissive:"#ffd66e",emissiveIntensity:.3}));L.position.y=A+u*.75,o.add(L)}}if(e.type==="shadow"||e.type==="lich"){let w=new te(new wt(u*1.25,u*2.2,8),He(e.type==="lich"?"#3b3f9e":"#2b2050",{transparent:!0,opacity:.9}));w.position.y=A+u*.9,o.add(w)}if(e.type==="zombie"&&(R.rotation.x=.5,T.rotation.x=.5),e.type==="troll"||e.type==="stoneGolem"||e.type==="heavyDemon")for(let w of[-1,1]){let L=new te(new ct(p*.38,8,6),i);L.position.set(w*p*.62,x+m*.1,0),o.add(L)}}if(e.isBoss){let d=new te(new nn(.4,.5,16),new Ve({color:"#ff5f6d",side:at,transparent:!0,opacity:.4}));d.rotation.x=-Math.PI/2,d.position.y=.1,t.add(d),t.userData.aura=d}return t.userData.limbs=a,t}buildHpBar(e){let t=new je,n=new en(.5,.06),i=new Ve({color:"#333333",side:at}),r=new te(n,i);t.add(r);let a=new en(.48,.04),o=new Ve({color:"#4caf50",side:at}),l=new te(a,o);l.position.z=.01,l.position.x=-.01,t.add(l),t.userData.fill=l,t.userData.fillMat=o;let c=e.def.size[1]*(e.mesh.scale.y||1);return t.position.y=c+.15,t}update(e){for(let t=this.monsters.length-1;t>=0;t--){let n=this.monsters[t];if(n.dead){this.monsterGroup.remove(n.mesh),this.monsters.splice(t,1);continue}n.frozen&&n.frozenDuration>0&&(n.frozenDuration-=e,n.frozenDuration<=0&&(n.frozen=!1,n.frozenDuration=0)),n.stunDuration>0&&(n.stunDuration-=e,n.stunDuration<=0&&(n.stunned=!1,n.stunDuration=0)),n.armorShredDuration>0&&(n.armorShredDuration-=e,n.armorShredDuration<=0&&(n.armorShred=0,n.armorShredDuration=0)),this.updateBurn(n,e),n.isBoss&&this.updateBossSkill(n,e);let i=n.speed;if(n.frozenDuration>0||n.stunDuration>0?i=0:n.slowDuration>0&&(n.slowDuration-=e,i*=1-n.slowAmount,n.slowDuration<=0&&(n.slowAmount=0)),n.pathProgress+=i*e,n.pathProgress>=n.pathLength){n.dead=!0,this.onMonsterReachBase&&this.onMonsterReachBase(n);continue}if(n.mesh.position.copy(this.getPositionOnPath(n.pathPoints,n.pathProgress)),n.flying&&(n.mesh.position.y+=.5+Math.sin(n.pathProgress*2+n.id)*.15),n.lastPos){let r=n.mesh.position.x-n.lastPos.x,a=n.mesh.position.z-n.lastPos.z;if(Math.hypot(r,a)>.001){let l=Math.atan2(r,a)-n.mesh.rotation.y;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;n.mesh.rotation.y+=l*Math.min(1,10*e)}}n.lastPos=n.mesh.position.clone(),this.updateHpBar(n)}}updateBurn(e,t){for(let n=e.burnStacks.length-1;n>=0;n--){let i=e.burnStacks[n];if(i.timer-=t,i.tick-=t,i.tick<=0&&(i.tick=1,this.damageMonster(e,i.dps,"magic",{silent:!0}),e.dead))return;i.timer<=0&&e.burnStacks.splice(n,1)}}applySlow(e,t,n,i={}){!e||e.dead||e.flying&&!i.magic||(e.slowAmount=Math.max(e.slowAmount||0,t),e.slowDuration=Math.max(e.slowDuration||0,n))}applyBurn(e,t,n){!e||e.dead||e.burnStacks.push({dps:t,timer:n,tick:1})}applyFreeze(e,t){!e||e.dead||e.isBoss||(e.frozen=!0,e.frozenDuration=Math.max(e.frozenDuration||0,t),e.slowAmount=0,e.slowDuration=0)}applyStun(e,t){!e||e.dead||e.isBoss||(e.stunned=!0,e.stunDuration=Math.max(e.stunDuration||0,t))}getSummonCount(){return this.monsters.filter(e=>e.isSummon&&!e.dead).length}updateBossSkill(e,t){let n=e.def.bossSkill;if(n){if(e.bossWarningTimer>0){e.bossWarningTimer-=t,e.bossWarningTimer<=0&&(this.executeBossSkill(e,n),e.bossSkillTimer=n.cooldown,this.game&&this.game.onBossSkillEnd&&this.game.onBossSkillEnd(e,n));return}e.bossSkillTimer-=t,e.bossSkillTimer<=0&&(n.warning>0?(e.bossWarningTimer=n.warning,this.game&&this.game.onBossWarning&&this.game.onBossWarning(e,n)):(this.executeBossSkill(e,n),e.bossSkillTimer=n.cooldown))}}executeBossSkill(e,t){if(this.game){if(t.type==="stunTowers"){let n=this.game.towerManager.stunTowersWithin(e.mesh.position,t.radius,t.duration);this.game.showMessage&&this.game.showMessage(`${e.def.name} \u9707\u5730\uFF01${n} \u5EA7\u9632\u5FA1\u5854\u88AB\u7729\u6655`,1800)}else if(t.type==="slowTowers"){let n=this.game.towerManager.slowTowersWithin(e.mesh.position,t.radius,t.slowPct,t.duration);this.game.showMessage&&this.game.showMessage(`${e.def.name} \u706B\u7130\u51B2\u51FB\uFF01${n} \u5EA7\u9632\u5FA1\u5854\u653B\u901F\u964D\u4F4E`,1800)}else if(t.type==="summon"){if(this.getSummonCount()>=t.maxSummons)return;let i=t.summon;for(let r=0;r<i.count&&!(this.getSummonCount()>=t.maxSummons);r++)this.spawnMonster(i.type,e.entryIndex,(e.hpScale||1)*i.hpScale,{isSummon:!0,startProgress:Math.max(0,e.pathProgress-1)});this.game.showMessage&&this.game.showMessage(`${e.def.name} \u53EC\u5524\u4E86\u5C0F\u9AB7\u9AC5\uFF01`,1500)}}}getPositionOnPath(e,t){let n=0;for(let i=0;i<e.length-1;i++){let r=e[i].distanceTo(e[i+1]);if(n+r>=t){let a=(t-n)/r;return new P().lerpVectors(e[i],e[i+1],Math.max(0,Math.min(1,a)))}n+=r}return e[e.length-1].clone()}updateHpBar(e){if(!e.hpBar)return;let t=e.hp/e.maxHp,n=e.hpBar.userData.fill,i=e.hpBar.userData.fillMat;n.scale.x=Math.max(0,t),n.position.x=-(1-t)*.24,t>.5?i.color.set("#4caf50"):t>.25?i.color.set("#ff9800"):i.color.set("#f44336")}damageMonster(e,t,n,i={}){if(e.dead)return;e.frozenDuration>0&&(e.frozen=!1,e.frozenDuration=0);let r=t;if(i.damageMult&&(r*=i.damageMult),i.undeadBonus&&e.def.undead&&(r*=1+i.undeadBonus),n==="physical"){let a=Math.max(0,e.def.armor*(1-(i.armorPen||0))*(1-(e.armorShred||0)));r*=1-a/(a+100)}else{let a=Math.max(0,e.def.magicResist*(1-(i.resistPen||0)));r*=1-a/(a+100)}r=Math.max(1,Math.round(r*(.9+Math.random()*.2))),!i.silent&&this.game&&this.game.showDamageNumber&&(this.game.showDamageNumber(e,r),this.game.createHitEffect&&this.game.createHitEffect(e.mesh.position.clone(),"#ffe9b0")),e.hp-=r,e.hp<=0&&(e.hp=0,e.dead=!0,this.game&&this.game.createDeathEffect&&this.game.createDeathEffect(e.mesh.position.clone(),e.def.color),this.onMonsterKilled&&this.onMonsterKilled(e))}removeMonster(e){e.dead=!0}updateVisuals(e){for(let t of this.monsters){if(t.dead)continue;let n=t.mesh.userData.limbs;if(!n)continue;let i=t.frozenDuration>0||t.stunDuration>0;t.animTime=(t.animTime||0)+e*(i?0:1);let r=t.animTime,a=4+Math.min(5,t.speed),o=i?0:Math.min(.5,.12+t.speed*.08);if(t.flying&&n.leftWing){let l=Math.sin(r*8)*.7;n.leftWing.rotation.z=l,n.rightWing.rotation.z=-l,n.torso&&(n.torso.position.y=Math.sin(r*8)*.06,n.torso.rotation.z=Math.sin(r*8)*.08)}else if(n.leftLeg&&n.rightLeg&&!n.legs){let l=Math.sin(r*a)*o;n.leftLeg.rotation.x=l,n.rightLeg.rotation.x=-l,n.leftArm&&(n.leftArm.rotation.x=-l*.8),n.rightArm&&(n.rightArm.rotation.x=l*.8),n.torso&&(n.torso.position.y=Math.abs(Math.sin(r*a))*.04,n.torso.rotation.z=Math.sin(r*a*.5)*.02)}else if(n.legs&&n.legs.length===4){let l=Math.sin(r*a)*o;n.legs[0].rotation.x=l,n.legs[3].rotation.x=l,n.legs[1].rotation.x=-l,n.legs[2].rotation.x=-l,n.torso&&(n.torso.position.y=Math.abs(Math.sin(r*a))*.05,n.torso.rotation.x=Math.sin(r*a)*.03)}t.frozenDuration>0&&n.torso&&(n.torso.position.x=Math.sin(r*30)*.012),t.isBoss&&t.mesh.userData.aura&&(t.mesh.userData.aura.rotation.z+=e*2)}}getAliveCount(){return this.monsters.filter(e=>!e.dead).length}getMonsterDef(e){return Si[e]}};var Kp=[{id:"ranger",name:"\u738B\u56FD\u6E38\u4FA0",icon:"\u{1F9DD}",speed:3,damage:20,atkSpeed:1,range:2.5,damageType:"physical",targetsAir:!0,color:"#27ae60",skill:{name:"\u7A7F\u900F\u7BAD",cooldown:15,desc:"\u5BF9\u8DEF\u5F84\u4E0A\u6240\u6709\u602A\u7269\u9020\u6210100%\u7269\u7406\u4F24\u5BB3\uFF0C\u5BF9\u98DE\u884C\u5355\u4F4D\u989D\u591650%",execute:(s,e)=>{let t=e.monsterManager.monsters,n=s.mesh.position,i=0;for(let r of t)if(!r.dead&&n.distanceTo(r.mesh.position)<=6){let a=s.damage;r.flying&&(a*=1.5),e.monsterManager.damageMonster(r,a,"physical"),i++}return i}}},{id:"mage",name:"\u5BAB\u5EF7\u6CD5\u5E08",icon:"\u{1F9D9}",speed:2.5,damage:25,atkSpeed:.8,range:2.5,damageType:"magic",targetsAir:!0,color:"#8e44ad",skill:{name:"\u706B\u7130\u96E8",cooldown:20,desc:"\u5BF9\u6307\u5B9A\u533A\u57DF\u9020\u6210\u6BCF\u79D230%\u9B54\u6CD5\u4F24\u5BB3\uFF0C\u6301\u7EED3\u79D2\uFF0C\u51CF\u901F20%",execute:(s,e)=>{let t=e.monsterManager,n=t.monsters,i=s.mesh.position,r=0;for(let a of n)a.dead||i.distanceTo(a.mesh.position)<=3.5&&(t.damageMonster(a,s.damage*.3,"magic"),t.applyBurn(a,s.damage*.3,3),t.applySlow(a,.2,3,{magic:!0}),r++);for(let a=0;a<8;a++){let o=new te(new ct(.15,4,4),new Ve({color:"#ff6600",transparent:!0,opacity:.7}));o.position.copy(i).add(new P((Math.random()-.5)*4,2+Math.random()*2,(Math.random()-.5)*4)),e.scene.add(o),setTimeout(()=>e.scene.remove(o),2e3)}return r}}}],js=class{constructor(e,t){this.scene=e,this.game=t,this.heroGroup=new je,this.scene.add(this.heroGroup),this.heroes=[],this.activeHeroIndex=0,this.moveTarget=null,this.path=[]}reset(e){for(;this.heroGroup.children.length>0;)this.heroGroup.remove(this.heroGroup.children[0]);this.heroes=[],this.moveTarget=null,this.path=[],this.createHero(0,e),this.game.progress&&this.game.progress.unlocked>=3&&this.createHero(1,e.clone().add(new P(.8,0,.8))),this.activeHeroIndex=0}createHero(e,t){let n=Kp[e],i=this.getHeroLevel(n.id),r=1+(i-1)*.02,a=1+(i-1)*.01,o=new je,l=e===0?"#ffd66e":"#b28cff",c=He(n.color,{roughness:.45}),h=new te(new ot(.42,.62,.32),c);h.position.y=.56,h.castShadow=!0,o.add(h);let d=new te(new ot(.3,.3,.16),He(l,{emissive:l,emissiveIntensity:.18}));d.position.y=.62,d.position.z=.02,o.add(d);let f=new te(new ct(.21,10,8),He("#ffe8d6"));f.position.y=1.02,f.castShadow=!0,o.add(f);let p=new te(new wt(.2,.32,8),He(e===0?"#f2c94c":"#a78bfa",{emissive:l,emissiveIntensity:.12}));p.position.y=1.2,o.add(p);let g=new ct(.035,6,6),x=new Ve({color:"#4a3f8f"}),m=new te(g,x);m.position.set(-.09,1.05,.17),o.add(m);let u=new te(g,x);u.position.set(.09,1.05,.17),o.add(u);let v=new te(new wt(.24,.3,8),He("#5d3a1a",{roughness:.6}));if(v.position.y=1.28,o.add(v),e===0){let R=new te(new Rn(.22,.035,6,8,Math.PI*1.2),He("#f2c94c",{emissive:"#ffd66e",emissiveIntensity:.25}));R.rotation.z=Math.PI/2,R.position.set(.28,.62,0),o.add(R)}else{let R=new te(new Lt(.035,.035,.9,6),He("#5d3a1a"));R.position.set(.28,.5,0),o.add(R);let T=new te(new ct(.11,8,6),new Ve({color:"#b28cff"}));T.position.set(.28,.95,0),o.add(T)}o.position.copy(t),o.position.y=.2;let _=new te(new nn(.32,.44,20),new Ve({color:"#6ee7ff",side:at,transparent:!0,opacity:.9,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=.06,_.visible=!1,o.add(_),this.heroGroup.add(o);let E={index:e,id:n.id,def:n,mesh:o,level:i,ring:_,damage:n.damage*r,atkSpeed:n.atkSpeed,range:n.range,speed:n.speed*a,cooldown:0,skillCooldown:0,target:null};return this.heroes.push(E),E}setSelected(e){this.heroSelected=e;for(let n of this.heroes)n.ring&&(n.ring.visible=!1);let t=this.getActiveHero();t&&e&&t.ring&&(t.ring.visible=!0)}getHeroLevel(e){if(!this.game||!this.game.progress)return 1;let t=this.game.progress.heroLevels&&this.game.progress.heroLevels[e];return Math.min(30,Math.max(1,t||1))}getActiveHero(){return this.heroes[this.activeHeroIndex]||null}cellKey(e,t){return e+","+t}cellFromPos(e){return{x:Math.floor(e.x),z:Math.floor(e.z)}}findPath(e,t){let n=this.game.map;if(!n||!n.gridW)return[];let i=this.cellFromPos(e),r=this.cellFromPos(t),a=new Set;for(let g of this.game.towerManager.towers)a.add(this.cellKey(Math.floor(g.pos.x),Math.floor(g.pos.z)));let o=r;if(a.has(this.cellKey(o.x,o.z))){let g=null,x=1/0;for(let m=-2;m<=2;m++)for(let u=-2;u<=2;u++){let v={x:o.x+m,z:o.z+u};if(v.x<0||v.z<0||v.x>=n.gridW||v.z>=n.gridH||a.has(this.cellKey(v.x,v.z)))continue;let _=Math.abs(m)+Math.abs(u);_<x&&(x=_,g=v)}if(g)o=g;else return[]}if(i.x===o.x&&i.z===o.z)return[];let l=[i],c=new Map;c.set(this.cellKey(i.x,i.z),null);let h=[[1,0],[-1,0],[0,1],[0,-1]],d=null;for(;l.length;){let g=l.shift();if(g.x===o.x&&g.z===o.z){d=g;break}for(let[x,m]of h){let u=g.x+x,v=g.z+m;if(u<0||v<0||u>=n.gridW||v>=n.gridH)continue;let _=this.cellKey(u,v);a.has(_)||c.has(_)||(c.set(_,g),l.push({x:u,z:v}))}}if(!d)return[];let f=[],p=d;for(;p;)f.push(p),p=c.get(this.cellKey(p.x,p.z));return f.reverse(),f.map(g=>new P(g.x+.5,.2,g.z+.5))}moveHeroTo(e){let t=this.getActiveHero();t&&(this.moveTarget=e.clone(),this.moveTarget.y=.2,this.path=this.findPath(t.mesh.position,this.moveTarget),this.path.length===0&&(this.path=[this.moveTarget.clone()]))}useHeroSkill(e){let t=this.heroes[e];if(!t||t.skillCooldown>0)return;let n=t.def.skill.execute(t,this.game);return t.skillCooldown=t.def.skill.cooldown,this.game.showFloatingText(`${t.def.skill.name}!`,"#ffd700"),this.game.audio&&this.game.audio.play("heroSkill"),this.game.updateHeroUI(),n}update(e){let t=this.getActiveHero();if(!t)return;if(this.path.length>0){let r=this.path[0].clone().sub(t.mesh.position),a=r.length();if(a>.1){r.normalize(),t.mesh.position.add(r.multiplyScalar(t.speed*e));let o=Math.atan2(r.x,r.z);t.mesh.rotation.y+=(o-t.mesh.rotation.y)*5*e,a<.2&&this.path.shift()}else this.path.shift()}else if(this.moveTarget){let i=this.moveTarget.clone().sub(t.mesh.position);if(i.length()>.1){i.normalize(),t.mesh.position.add(i.multiplyScalar(t.speed*e));let a=Math.atan2(i.x,i.z);t.mesh.rotation.y+=(a-t.mesh.rotation.y)*5*e}else this.moveTarget=null}t.cooldown-=e;let n=this.game.monsterManager.monsters;(!t.target||t.target.dead||t.mesh.position.distanceTo(t.target.mesh.position)>t.range+.5)&&(t.target=this.findClosestEnemy(t,n)),t.target&&t.cooldown<=0&&(this.game.monsterManager.damageMonster(t.target,t.damage,t.def.damageType),t.cooldown=1/t.atkSpeed,this.createHeroProjectile(t),this.game.audio&&this.game.audio.play(t.index===0?"shoot_arrow":"cast_magic")),t.skillCooldown>0&&(t.skillCooldown-=e,t.skillCooldown<0&&(t.skillCooldown=0),this.game.updateHeroUI())}findClosestEnemy(e,t){let n=null,i=1/0;for(let r of t){if(r.dead||!e.def.targetsAir&&r.flying)continue;let a=e.mesh.position.distanceTo(r.mesh.position);a<e.range&&a<i&&(i=a,n=r)}return n}createHeroProjectile(e){if(!e.target)return;let t=new ct(.06,4,4),n=new Ve({color:e.index===0?"#f1c40f":"#9b59b6"}),i=new te(t,n);i.position.copy(e.mesh.position),i.position.y+=.6,this.scene.add(i);let r=e.target,a=i.position.clone(),o=r.mesh.position.clone();o.y+=.5;let l=15,c=0,h=()=>{if(r.dead){this.scene.remove(i);return}if(c+=l*.016,i.position.lerpVectors(a,o,Math.min(c,1)),c>=1){this.scene.remove(i);return}requestAnimationFrame(h)};h()}updateVisuals(e){for(let t of this.heroes)(this.moveTarget||this.path.length>0)&&(t.mesh.position.y+=Math.sin(Date.now()*.01)*.005)}};var Qp=[20,22,25,21,23,26,24,28],jp={0:"orcCaptain",2:"orcCaptain",5:"skeletonKing",7:"hellGolem"},em={1:{basic:["goblin","orc"],flying:["gargoyle"],elite:["wolfRider","shadow","troll"],fast:["fastGoblin"]},2:{basic:["skeleton","zombie"],flying:["ghost"],elite:["lich","stoneGolem"]},3:{basic:["demonImp","hellHound"],flying:["wyvern"],elite:["heavyDemon"]}};function tm(s,e,t,n,i){if(n&&s>=i){let l=Si[n];return`BOSS: ${l.name} \u964D\u4E34\uFF01${l.bossSkill?`\u9884\u8B66\u300C${l.bossSkill.name}\u300D`:""}`}let r=e[0].type,a=e.some(l=>t.flying.includes(l.type)),o=e.some(l=>t.elite.includes(l.type));return a?"\u98DE\u884C\u7F16\u961F\u6765\u88AD\uFF01\u8BF7\u90E8\u7F72\u5BF9\u7A7A\u706B\u529B\uFF08\u9B54\u6CD5\u5854/\u82F1\u96C4\uFF09":o?`\u7CBE\u82F1${Si[r].name}\u7A81\u8FDB\uFF0C\u6CE8\u610F\u9AD8\u8840\u91CF\u4E0E\u51B2\u950B\uFF01`:e.length>1?"\u6742\u5175\u6DF7\u7F16\u6F6E\uFF0C\u5408\u7406\u5206\u914D\u706B\u529B\uFF01":`${Si[r].name} \u6210\u7FA4\u903C\u8FD1\uFF0C\u7BAD\u5854\u5DF2\u5C31\u4F4D\uFF01`}function nm(s){let t=Dt[s].chapter,n=em[t],i=Qp[s],r=jp[s],a=[];for(let o=1;o<=i;o++){let l=[],c=Math.max(.5,1.3-o*.025),h=Math.round(5+o*.9);if(o===1)l.push({type:n.basic[0],count:5,interval:1.2,delay:2});else if(o<=3)l.push({type:n.basic[0],count:h,interval:c,delay:2});else if(o<=6)l.push({type:n.basic[0],count:Math.round(h*.6),interval:c,delay:2}),l.push({type:n.basic[1],count:Math.round(h*.5),interval:c+.2,delay:4});else if(o===8)l.push({type:n.flying[0],count:3+Math.floor(o/6),interval:1.8,delay:2}),l.push({type:n.basic[0],count:Math.round(h*.5),interval:c,delay:5});else if(o===10)l.push({type:n.elite[0],count:2+Math.floor(o/12),interval:2,delay:2}),l.push({type:n.basic[1],count:Math.round(h*.6),interval:c,delay:5});else if(o>=i)if(r)l.push({type:r,count:1,interval:0,delay:3,isBoss:!0}),l.push({type:n.basic[0],count:Math.round(h*.6),interval:c,delay:6});else{let p=n.elite[Math.min(1,n.elite.length-1)];l.push({type:p,count:3+Math.floor(o/8),interval:1.8,delay:2}),l.push({type:n.basic[0],count:h,interval:c,delay:5}),n.flying[0]&&l.push({type:n.flying[0],count:3,interval:1.6,delay:8})}else l.push({type:n.basic[0],count:Math.round(h*.6),interval:c,delay:2}),l.push({type:n.basic[1],count:Math.round(h*.4),interval:c+.2,delay:4}),o%4===0&&n.flying[0]&&l.push({type:n.flying[0],count:2+Math.floor(o/10),interval:1.8,delay:6}),o%5===0&&n.elite[0]&&l.push({type:n.elite[0],count:1+Math.floor(o/15),interval:2,delay:7});let d=!!(r&&o>=i),f=tm(o,l,n,r,i);a.push({desc:f,enemies:l,isBoss:d})}return a}var er=class{constructor(e){this.game=e,this.waves=[],this.currentWave=0,this.totalWaves=0,this.waveActive=!1,this.betweenWaves=!0,this.waveTimer=0,this.spawnQueue=[],this.spawnTimer=0,this.waveReward=0,this.chapter=1,this.dualPath=!1,this.levelIndex=0,this._countdownId=null}reset(){this.waveActive=!1,this.betweenWaves=!0,this.waveTimer=0,this.spawnQueue=[],this.spawnTimer=0,this.waveReward=0,this.currentWave=0,this._countdownId&&(clearInterval(this._countdownId),this._countdownId=null)}loadLevel(e){this.reset(),this.levelIndex=e;let t=Dt[e];this.chapter=t.chapter,this.dualPath=t.dualPath,this.waves=nm(e),this.totalWaves=this.waves.length,this.currentWave=0}hpScale(e){let t={1:1,2:1.25,3:1.65}[this.chapter]||1,n=1+.08*Math.floor((e-1)/5);return t*n}startWave(e){this.waveActive||(this.currentWave=e-1,!(this.currentWave>=this.totalWaves)&&this._doStartWave())}startNextWave(){this.waveActive||this.currentWave>=this.totalWaves||this._doStartWave()}_doStartWave(){let e=this.waves[this.currentWave],t=this.currentWave+1;this.game.onWaveStart(t),this._showAnnounce(t,e.desc,e.isBoss);let n=this.hpScale(t);this.spawnQueue=[];for(let i of e.enemies){let r=i.entry!=null?i.entry:this.dualPath?t%2===1?0:1:0,a=i.delay||0;for(let o=0;o<i.count;o++)this.spawnQueue.push({type:i.type,delay:a+o*(i.interval||1),entry:r,scale:n})}this.spawnQueue.sort((i,r)=>i.delay-r.delay),this.spawnTimer=0,this.waveActive=!0,this.betweenWaves=!1,this.waveReward=30+this.currentWave*5}_showAnnounce(e,t,n){let i=this.game.ui.waveAnnounce,r=this.game.ui.waveAnnounceText;i.style.display="block",r.textContent=n?`\u26A0 ${t}`:`\u7B2C ${e} \u6CE2 - ${t}`,n?(r.style.color="#ff4444",r.style.borderColor="#ff4444"):(r.style.color="#ffd700",r.style.borderColor="#ffd700"),i.style.animation="none",i.offsetHeight,i.style.animation="waveIn 0.5s ease-out",setTimeout(()=>{i.style.display="none"},2500)}update(e){if(this.waveActive){for(this.spawnTimer+=e;this.spawnQueue.length>0&&this.spawnQueue[0].delay<=this.spawnTimer;){let t=this.spawnQueue.shift();this.game.monsterManager.spawnMonster(t.type,t.entry,t.scale)}this.spawnQueue.length===0&&this.game.monsterManager.getAliveCount()===0&&this._completeWave()}}_completeWave(){this.waveActive=!1,this.betweenWaves=!0,this.game.onWaveComplete(this.currentWave+1),this.currentWave++,this.currentWave>=this.totalWaves?setTimeout(()=>this.game.onAllWavesComplete(),2e3):(this.waveTimer=5,this._countdownId&&clearInterval(this._countdownId),this._countdownId=setInterval(()=>{if(this.game.gameOver){clearInterval(this._countdownId);return}this.waveTimer-=1,this.waveTimer<=0&&(clearInterval(this._countdownId),this._doStartWave())},1e3))}};var Ua="hdw_audio_settings";function im(){try{let s=JSON.parse(localStorage.getItem(Ua));if(s&&typeof s.master=="number")return s}catch{}return{master:.8,music:.45,sfx:.85,muted:!1}}function Da(s,e,t){let{freq:n=440,endFreq:i=null,type:r="square",dur:a=.15,vol:o=.2,delay:l=0,attack:c=.005}=t,h=s.currentTime+l,d=s.createOscillator(),f=s.createGain();d.type=r,d.frequency.setValueAtTime(Math.max(20,n),h),i&&d.frequency.exponentialRampToValueAtTime(Math.max(20,i),h+a),f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(o,h+c),f.gain.exponentialRampToValueAtTime(1e-4,h+a),d.connect(f).connect(e),d.start(h),d.stop(h+a+.05)}function Fl(s,e,t){let{dur:n=.2,vol:i=.2,delay:r=0,filterFreq:a=1200,type:o="lowpass"}=t,l=s.currentTime+r,c=Math.max(1,Math.floor(s.sampleRate*n)),h=s.createBuffer(1,c,s.sampleRate),d=h.getChannelData(0);for(let x=0;x<c;x++)d[x]=Math.random()*2-1;let f=s.createBufferSource();f.buffer=h;let p=s.createBiquadFilter();p.type=o,p.frequency.value=a;let g=s.createGain();g.gain.setValueAtTime(i,l),g.gain.exponentialRampToValueAtTime(1e-4,l+n),f.connect(p).connect(g).connect(e),f.start(l)}var tr=class{constructor(){this.settings=im(),this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.musicTimer=null,this.musicStep=0,this.musicIntensity=0,this.chapter=1,this.paused=!1}ensureCtx(){if(this.ctx)return this.ctx;let e=window.AudioContext||window.webkitAudioContext;return e?(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.settings.muted?0:this.settings.master,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.settings.sfx,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.settings.music,this.musicGain.connect(this.masterGain),this.ctx):null}unlock(){let e=this.ensureCtx();e&&e.state==="suspended"&&e.resume().catch(()=>{})}setVolume(e,t){this.settings[e]=t;try{localStorage.setItem(Ua,JSON.stringify(this.settings))}catch{}this.ensureCtx(),this.ctx&&(e==="master"?this.masterGain.gain.value=this.settings.muted?0:t:e==="sfx"?this.sfxGain.gain.value=t:e==="music"&&(this.musicGain.gain.value=t))}setMuted(e){this.settings.muted=e;try{localStorage.setItem(Ua,JSON.stringify(this.settings))}catch{}this.masterGain&&(this.masterGain.gain.value=e?0:this.settings.master)}isMuted(){return!!this.settings.muted}play(e){if(!this.ctx||this.settings.muted)return;let t=this.sfxGain,n=r=>Da(this.ctx,t,r),i=r=>Fl(this.ctx,t,r);switch(e){case"click":n({freq:660,dur:.06,vol:.1});break;case"hover":n({freq:880,dur:.04,vol:.05});break;case"build":i({dur:.18,vol:.25,filterFreq:260}),n({freq:180,endFreq:240,dur:.16,vol:.22});break;case"upgrade":n({freq:330,dur:.09,vol:.16}),n({freq:440,dur:.09,vol:.16,delay:.08}),n({freq:660,dur:.14,vol:.18,delay:.16});break;case"sell":n({freq:440,endFreq:220,dur:.22,vol:.18});break;case"coin":n({freq:1245,type:"sine",dur:.08,vol:.14}),n({freq:1661,type:"sine",dur:.12,vol:.14,delay:.06});break;case"shoot_arrow":i({dur:.08,vol:.14,filterFreq:3200,type:"bandpass"});break;case"cast_magic":n({freq:700,endFreq:1300,type:"sine",dur:.2,vol:.16});break;case"cannon_fire":i({dur:.3,vol:.42,filterFreq:220}),n({freq:80,endFreq:50,dur:.28,vol:.35});break;case"ice_cast":n({freq:1900,type:"sine",dur:.12,vol:.16}),n({freq:2400,type:"sine",dur:.1,vol:.1,delay:.05});break;case"hit":i({dur:.08,vol:.22,filterFreq:900});break;case"death":n({freq:320,endFreq:80,type:"sawtooth",dur:.3,vol:.2});break;case"baseHit":i({dur:.4,vol:.55,filterFreq:130}),n({freq:65,endFreq:40,dur:.4,vol:.4});break;case"waveStart":n({freq:523,type:"triangle",dur:.12,vol:.16}),n({freq:659,type:"triangle",dur:.12,vol:.16,delay:.1}),n({freq:784,type:"triangle",dur:.2,vol:.18,delay:.2});break;case"waveComplete":n({freq:784,type:"triangle",dur:.1,vol:.15}),n({freq:1046,type:"triangle",dur:.18,vol:.16,delay:.09});break;case"bossWarn":n({freq:330,type:"square",dur:.14,vol:.14}),n({freq:330,type:"square",dur:.14,vol:.14,delay:.22}),n({freq:440,type:"square",dur:.2,vol:.16,delay:.44});break;case"heroSkill":n({freq:400,endFreq:1400,type:"sine",dur:.5,vol:.22}),i({dur:.35,vol:.16,filterFreq:2400,type:"bandpass"});break;case"victory":[523,659,784,1046,1318].forEach((r,a)=>n({freq:r,type:"triangle",dur:.2,vol:.2,delay:a*.12}));break;case"defeat":n({freq:400,endFreq:140,type:"sawtooth",dur:.8,vol:.2});break;case"item":n({freq:932,type:"triangle",dur:.12,vol:.18}),n({freq:1245,type:"sine",dur:.14,vol:.16,delay:.08});break;case"freeze":n({freq:2300,type:"sine",dur:.14,vol:.15}),n({freq:1800,type:"sine",dur:.2,vol:.1,delay:.06});break;default:break}}startMusic(e){this.chapter=e||1,this.musicStep=0,this.stopMusic(),!(this.musicTimer||!this.ensureCtx())&&(this.musicTimer=setInterval(()=>this.scheduleMusicStep(),240))}scheduleMusicStep(){if(!this.ctx||this.paused||this.settings.muted)return;let e={1:[261.63,329.63,392,523.25],2:[220,261.63,329.63,440],3:[164.81,220,261.63,329.63]},t=e[this.chapter]||e[1],n=this.musicStep++,i=t[n%t.length],r=Math.floor(n/t.length)%2===0?1:2,a=.05+this.musicIntensity*.09;Da(this.ctx,this.musicGain,{freq:i*r,type:"triangle",dur:.22,vol:a}),this.musicIntensity>.35&&n%2===0&&Da(this.ctx,this.musicGain,{freq:i*.5,type:"sine",dur:.4,vol:a*.6}),this.musicIntensity>.7&&n%4===0&&Fl(this.ctx,this.musicGain,{dur:.12,vol:.05,filterFreq:600})}setMusicIntensity(e){this.musicIntensity=Math.max(0,Math.min(1,e))}setPaused(e){this.paused=e}stopMusic(){this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null)}};var Hl="hdw_progress_v1",Bl=[20,22,25,21,23,26,24,28],zl={bomb:{name:"\u70B8\u5F39",icon:"\u{1F4A3}",desc:"\u5BF9\u76EE\u6807\u8303\u56F4\u602A\u7269\u9020\u6210120\u9B54\u6CD5\u4F24\u5BB3"},medkit:{name:"\u6025\u6551\u5305",icon:"\u{1FA79}",desc:"\u6062\u590D\u57FA\u5730\u751F\u547D+5"},goldbag:{name:"\u91D1\u5E01\u888B",icon:"\u{1F4B0}",desc:"\u7ACB\u5373\u83B7\u5F97100\u91D1\u5E01"},freezerune:{name:"\u5BD2\u51B0\u7B26",icon:"\u2744\uFE0F",desc:"\u5168\u573A\u602A\u7269\u51CF\u901F50%\u6301\u7EED5\u79D2"},totem:{name:"\u63F4\u519B\u56FE\u817E",icon:"\u{1F5FF}",desc:"\u53EC\u5524\u4E00\u5EA72\u7EA7\u7BAD\u5854\u6301\u7EED15\u79D2"}},nr={arrowRain:{name:"\u7BAD\u96E8",icon:"\u{1F3F9}",desc:"\u76EE\u6807\u8303\u56F4 150 \u7269\u7406\u4F24\u5BB3",price:60,target:!0},fireball:{name:"\u706B\u7403\u672F",icon:"\u{1F525}",desc:"\u76EE\u6807\u8303\u56F4 250 \u9B54\u6CD5\u4F24\u5BB3",price:80,target:!0},healWave:{name:"\u6CBB\u7597\u6CE2",icon:"\u{1F49A}",desc:"\u57FA\u5730\u6062\u590D 10 \u751F\u547D",price:50,target:!1},timeWarp:{name:"\u65F6\u95F4\u7F13\u901F",icon:"\u23F3",desc:"\u5168\u573A\u602A\u7269\u51CF\u901F 60% \u6301\u7EED 5 \u79D2",price:70,target:!1},goldRain:{name:"\u91D1\u5E01\u96E8",icon:"\u{1FA99}",desc:"\u7ACB\u5373\u83B7\u5F97 200 \u91D1\u5E01",price:40,target:!1}};function sm(){let s={unlocked:0,stars:{},heroExp:{},heroLevels:{ranger:1,mage:1},coins:0,stamina:{value:20,max:20,lastRegen:Date.now()},shopSkills:{arrowRain:0,fireball:0,healWave:0,timeWarp:0,goldRain:0}};try{let e=localStorage.getItem(Hl);if(e){let t=JSON.parse(e);typeof t.unlocked=="number"&&t.stars&&(s.unlocked=t.unlocked,s.stars=t.stars,s.heroExp=t.heroExp||{},s.heroLevels=Object.assign(s.heroLevels,t.heroLevels||{}),s.coins=t.coins||0,s.stamina=Object.assign(s.stamina,t.stamina||{}),s.shopSkills=Object.assign(s.shopSkills,t.shopSkills||{}))}}catch{}return s}function wi(s){try{localStorage.setItem(Hl,JSON.stringify(s))}catch{}}var Na=class{constructor(){this.currentLevel=0,this.progress=sm(),this.selectedChapter=1,this.gold=200,this.baseHP=20,this.baseMaxHP=20,this.waveNum=0,this.maxWaves=20,this.waveActive=!1,this.waveBetween=!1,this.prepPhase=!0,this.gameOver=!1,this.gamePaused=!1,this.gameStarted=!1,this.gameSpeed=1,this.killCount=0,this.totalKills=0,this.hero=null,this.buildingCell=null,this.selectedTowerType=null,this.heroSelected=!1,this.items={bomb:1,medkit:1,goldbag:1,freezerune:1,totem:1},this.selectedItem=null,this.skills={arrowRain:0,fireball:0,healWave:0,timeWarp:0,goldRain:0},this.selectedSkill=null,this.staminaCost=5,this.bossWarnings=[],this._msgTimeout=null,this._suppressClick=!1,this.audio=new tr,this.rangeIndicator=null,this.buildPreview=null,this.initThree(),this.initCamera(),this.initManagers(),this.initLighting(),this.initRaycaster(),this.initUI(),this.map.reset(0),this.showMainMenu(),this.animate()}initThree(){let e=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),t=Math.min(window.devicePixelRatio,e?1.2:2);this.renderer=new Bi({antialias:!1,powerPreference:e?"low-power":"default"}),this.renderer.setPixelRatio(t),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ba,this.renderer.toneMapping=Ea,this.renderer.toneMappingExposure=1.1,document.getElementById("game-container").prepend(this.renderer.domElement),this.scene=new Ns,this.scene.background=new Ge(Ia.sky),this.scene.fog=new Us(Ia.fog,30,72),this.camera=new St(50,window.innerWidth/window.innerHeight,.5,100),this.camTarget=new P(14,0,10),this.camYaw=.7,this.camPitch=.55,this.camRadius=28,this.clock=new Xs,this.raycaster=new qs,this.mouse=new De,window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}initCamera(){this.pointer={down:!1,moved:!1,id:null,x:0,y:0,lastX:0,lastY:0},this.pinchDist=0,this.touchIds=new Set;let e=this.renderer.domElement;e.addEventListener("pointerdown",t=>this.onPointerDown(t)),window.addEventListener("pointermove",t=>this.onPointerMove(t)),window.addEventListener("pointerup",t=>this.onPointerUp(t)),window.addEventListener("pointercancel",t=>this.onPointerUp(t)),e.addEventListener("wheel",t=>this.onWheel(t),{passive:!1})}onPointerDown(e){if(e.pointerType==="touch"&&(this.touchIds.add(e.pointerId),this.touchIds.size===2)){let t=this.renderer.domElement.getBoundingClientRect(),n=[...this.touchIds][0];this.pinchDist=0;return}this.pointer={down:!0,moved:!1,id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY}}onPointerMove(e){if(e.pointerType==="touch"&&this.touchIds.size===2){if([...this.touchIds].includes(e.pointerId)&&this._touchPos){this._touchPos.set(e.pointerId,{x:e.clientX,y:e.clientY});let[r,a]=[...this._touchPos.values()],o=Math.hypot(r.x-a.x,r.y-a.y);this.pinchDist>0&&(this.camRadius=Math.max(14,Math.min(55,this.camRadius*(this.pinchDist/o)))),this.pinchDist=o}else if(this._touchPos||(this._touchPos=new Map),this._touchPos.set(e.pointerId,{x:e.clientX,y:e.clientY}),this._touchPos.size===2){let[r,a]=[...this._touchPos.values()];this.pinchDist=Math.hypot(r.x-a.x,r.y-a.y)}return}if(!this.pointer.down||e.pointerId!==this.pointer.id)return;let t=e.clientX-this.pointer.lastX,n=e.clientY-this.pointer.lastY;Math.hypot(e.clientX-this.pointer.x,e.clientY-this.pointer.y)>6&&(this.pointer.moved=!0),this.pointer.lastX=e.clientX,this.pointer.lastY=e.clientY,this.camYaw-=t*.008,this.camPitch=Math.max(.18,Math.min(1.25,this.camPitch+n*.006))}onPointerUp(e){e.pointerType==="touch"&&(this.touchIds.delete(e.pointerId),this._touchPos&&this._touchPos.delete(e.pointerId),this.pinchDist=0),this.pointer.down&&e.pointerId===this.pointer.id&&(this.pointer.moved&&(this._suppressClick=!0),this.pointer.down=!1,setTimeout(()=>{this._suppressClick=!1},50))}onWheel(e){e.preventDefault(),this.camRadius=Math.max(14,Math.min(55,this.camRadius+e.deltaY*.02))}updateCamera(){let e=new P(this.camRadius*Math.cos(this.camPitch)*Math.sin(this.camYaw),this.camRadius*Math.sin(this.camPitch),this.camRadius*Math.cos(this.camPitch)*Math.cos(this.camYaw));this.camera.position.copy(this.camTarget).add(e),this.camera.lookAt(this.camTarget)}frameLevel(){let e=this.map.getCenter();this.camTarget.set(e.x,0,e.z),this.camYaw=.7,this.camPitch=.55,this.camRadius=Math.max(26,this.map.gridW*1.05)}initLighting(){let e=new Ws("#e8f4ff",.7);this.scene.add(e);let t=new Hs("#cfefff","#7fd27f",.55);this.scene.add(t);let n=new Vs("#fff3d6",1.35);n.position.set(20,30,10),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-30,n.shadow.camera.right=30,n.shadow.camera.top=30,n.shadow.camera.bottom=-30,this.scene.add(n)}initRaycaster(){this.renderer.domElement.addEventListener("click",e=>this.onClick(e)),this.renderer.domElement.addEventListener("contextmenu",e=>{e.preventDefault(),this.onRightClick(e)}),this.renderer.domElement.addEventListener("mousemove",e=>this.onMouseMove(e)),document.addEventListener("keydown",e=>this.onKeyDown(e)),["pointerdown","click","keydown","touchstart"].forEach(e=>{window.addEventListener(e,()=>this.audio.unlock(),{passive:!0})})}initManagers(){this.map=new Js(this.scene),this.towerManager=new Ks(this.scene,this),this.monsterManager=new Qs(this.scene,this),this.heroManager=new js(this.scene,this),this.waveManager=new er(this)}initUI(){let e=t=>document.getElementById(t);this.ui={goldEl:e("gold"),baseHPEl:e("base-hp"),waveEl:e("wave-num"),killsEl:e("kill-count"),staminaEl:e("stamina"),levelNameEl:e("level-name"),nextWaveBtn:e("next-wave-btn"),speedBtn:e("speed-btn"),speedText:e("speed-text"),pauseBtn:e("pause-btn"),audioBtn:e("audio-btn"),pauseOverlay:e("pause-overlay"),btnResume:e("btn-resume"),btnPauseRetry:e("btn-pause-retry"),btnPauseMenu:e("btn-pause-menu"),volumeMaster:e("volume-master"),volumeMusic:e("volume-music"),volumeSfx:e("volume-sfx"),towerPanel:e("tower-panel"),towerBtns:document.querySelectorAll(".tower-btn"),infoPanel:e("tower-info-panel"),infoName:e("info-name"),infoLevel:e("info-level"),infoDamage:e("info-damage"),infoRange:e("info-range"),infoDesc:e("info-desc"),upgradeBtn:e("upgrade-btn"),upgradeCost:e("upgrade-cost"),sellBtn:e("sell-btn"),sellValue:e("sell-value"),closeInfoBtn:e("close-info"),waveAnnounce:e("wave-announce"),waveAnnounceText:e("wave-announce-text"),gameOverPanel:e("result-panel"),gameOverTitle:e("result-title"),gameOverStats:e("result-stats"),gameOverStars:e("result-stars"),resultNextBtn:e("btn-result-next"),resultRetryBtn:e("btn-result-retry"),resultMenuBtn:e("btn-result-menu"),heroPanel:e("hero-panel"),heroBtn:e("hero-skill-btn"),heroCooldown:e("hero-cooldown"),heroSkillName:e("hero-skill-name"),heroName:e("hero-name"),heroLevel:e("hero-level"),heroSwitch:e("hero-switch"),itemBar:e("item-bar"),itemBtns:document.querySelectorAll(".item-btn"),skillBar:e("skill-bar"),skillBtns:document.querySelectorAll(".skill-btn"),heroTrainPanel:e("hero-train-panel"),heroTrainList:e("hero-train-list"),trainCoins:e("train-coins"),shopPanel:e("shop-panel"),shopList:e("shop-list"),shopCoins:e("shop-coins"),btnShopMenu:e("btn-shop-menu"),closeTrainBtn:e("close-train"),closeShopBtn:e("close-shop"),towerBuildPanel:e("tower-build-panel"),buildTowerBtns:document.querySelectorAll(".build-tower-btn"),buildCancelBtn:e("build-cancel-btn"),buildSpotLabel:e("build-spot-label"),messageEl:e("message"),mainMenu:e("main-menu"),btnStartMenu:e("btn-start-menu"),btnHeroesMenu:e("btn-heroes-menu"),levelSelect:e("level-select"),chapterTabs:e("chapter-tabs"),levelGrid:e("level-grid"),btnBackMenu:e("btn-back-menu")},this.ui.btnStartMenu.addEventListener("click",()=>{this.audio.play("click"),this.showLevelSelect()}),this.ui.btnHeroesMenu.addEventListener("click",()=>{this.audio.play("click"),this.openHeroTrain()}),this.ui.btnShopMenu.addEventListener("click",()=>{this.audio.play("click"),this.openShop()}),this.ui.closeTrainBtn.addEventListener("click",()=>{this.audio.play("click"),this.closeHeroTrain()}),this.ui.closeShopBtn.addEventListener("click",()=>{this.audio.play("click"),this.closeShop()}),this.ui.btnBackMenu.addEventListener("click",()=>{this.audio.play("click"),this.showMainMenu()}),this.ui.resultNextBtn.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(this.currentLevel+1)}),this.ui.resultRetryBtn.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(this.currentLevel)}),this.ui.resultMenuBtn.addEventListener("click",()=>{this.audio.play("click"),this.showLevelSelect()}),this.ui.nextWaveBtn.addEventListener("click",()=>{this.audio.play("click"),this.requestNextWave()}),this.ui.speedBtn.addEventListener("click",()=>{this.audio.play("click"),this.toggleSpeed()}),this.ui.pauseBtn.addEventListener("click",()=>{this.audio.play("click"),this.togglePause()}),this.ui.btnResume.addEventListener("click",()=>{this.audio.play("click"),this.togglePause()}),this.ui.btnPauseRetry.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(this.currentLevel)}),this.ui.btnPauseMenu.addEventListener("click",()=>{this.audio.play("click"),this.togglePause(),this.showLevelSelect()}),this.ui.audioBtn.addEventListener("click",()=>{let t=!this.audio.isMuted();this.audio.setMuted(t),this.audio.play("click"),this.ui.audioBtn.textContent=t?"\u{1F507}":"\u{1F50A}"}),[["master",this.ui.volumeMaster],["music",this.ui.volumeMusic],["sfx",this.ui.volumeSfx]].forEach(([t,n])=>{n&&(n.value=this.audio.settings[t],n.addEventListener("input",()=>this.audio.setVolume(t,parseFloat(n.value))))}),this.ui.upgradeBtn.addEventListener("click",()=>{this.audio.play("upgrade"),this.upgradeTower()}),this.ui.sellBtn.addEventListener("click",()=>{this.audio.play("sell"),this.sellTower()}),this.ui.closeInfoBtn.addEventListener("click",()=>this.hideTowerInfo()),this.ui.buildCancelBtn.addEventListener("click",()=>this.hideBuildPanel()),this.ui.heroBtn.addEventListener("click",()=>{this.audio.play("heroSkill"),this.useHeroSkill()}),this.ui.towerBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.selectTowerType(t.dataset.type)})}),this.ui.buildTowerBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.buildingCell&&this.buildTowerAtCell(t.dataset.type,this.buildingCell)})}),this.ui.itemBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.selectItem(t.dataset.item)})}),this.ui.skillBtns.forEach(t=>{t.addEventListener("click",()=>{this.audio.play("click"),this.selectSkill(t.dataset.skill)})}),this.updateUI(),this.updateTowerButtons(),this.updateItemUI(),this.updateSkillUI(),this.updateStaminaUI(),this.ui.audioBtn.textContent=this.audio.isMuted()?"\u{1F507}":"\u{1F50A}"}showMainMenu(){this.gameStarted=!1,this.ui.mainMenu.style.display="flex",this.ui.levelSelect.style.display="none",this.ui.gameOverPanel.style.display="none",this.ui.pauseOverlay.style.display="none",document.getElementById("game-container").classList.add("in-menu"),this.hideBuildPanel(),this.hideTowerInfo(),this.audio.setPaused(!1)}showLevelSelect(){this.gameStarted=!1,this.ui.mainMenu.style.display="none",this.ui.gameOverPanel.style.display="none",this.ui.levelSelect.style.display="flex",document.getElementById("game-container").classList.add("in-menu"),this.audio.startMusic(this.selectedChapter),this.renderLevelSelect()}renderLevelSelect(){let e=this.ui.chapterTabs;e.innerHTML="";let t={1:"\u7B2C\u4E00\u7AE0 \u8FB9\u5883\u9632\u7EBF",2:"\u7B2C\u4E8C\u7AE0 \u4EA1\u7075\u8352\u5730",3:"\u7B2C\u4E09\u7AE0 \u9B54\u7130\u6DF1\u6E0A"};for(let i=1;i<=3;i++){let r=document.createElement("button");r.className="chapter-tab"+(i===this.selectedChapter?" active":""),r.textContent=t[i],r.addEventListener("click",()=>{this.audio.play("click"),this.selectedChapter=i,this.audio.startMusic(i),this.renderLevelSelect()}),e.appendChild(r)}let n=this.ui.levelGrid;n.innerHTML="",Dt.forEach((i,r)=>{if(i.chapter!==this.selectedChapter)return;let a=r<=this.progress.unlocked,o=this.progress.stars[r]||0,l=document.createElement("div");l.className="level-card"+(a?"":" locked");let c=[0,1,2].map(h=>`<span class="star ${h<o?"on":""}">\u2605</span>`).join("");l.innerHTML=`
        <div class="level-no">${i.id}</div>
        <div class="level-name">${i.name}</div>
        <div class="level-stars">${a?c:"\u{1F512} \u672A\u89E3\u9501"}</div>
        <div class="level-meta">\u6CE2\u6B21 ${Bl[r]} \xB7 \u521D\u59CB ${i.startGold}G</div>
      `,a&&l.addEventListener("click",()=>{this.audio.play("click"),this.startLevel(r)}),n.appendChild(l)})}startLevel(e){if(e<0||e>=Dt.length)return;let t=this.getStamina();if(t.value<this.staminaCost){this.showToast(`\u4F53\u529B\u4E0D\u8DB3\uFF08\u9700\u8981 ${this.staminaCost} \u70B9\uFF0C\u5F53\u524D ${t.value} \u70B9\uFF09`);return}this.spendStamina(this.staminaCost),this.currentLevel=e,this.resetGame(),this.ui.mainMenu.style.display="none",this.ui.levelSelect.style.display="none",this.ui.gameOverPanel.style.display="none",this.ui.pauseOverlay.style.display="none",document.getElementById("game-container").classList.remove("in-menu"),this.gameStarted=!0,this.gameOver=!1,this.prepPhase=!0,this.ui.levelNameEl.textContent=`${Dt[e].id} ${Dt[e].name}`;let n=this.map.getHeroSpawn();this.heroManager.reset(n),this.hero=this.heroManager.getActiveHero(),this.heroSelected=!1,this.heroManager.setSelected(!1),this.frameLevel(),this.audio.startMusic(Dt[e].chapter),this.audio.play("waveStart"),this.updateHeroUI(),this.updateUI(),this.showMessage("\u51C6\u5907\u9636\u6BB5\uFF1A\u90E8\u7F72\u9632\u5FA1\u5854\uFF0C\u70B9\u51FB\u201C\u5F00\u59CB\u9632\u5FA1\u201D\u5F00\u6218",2600)}resetGame(){let e=Dt[this.currentLevel];this.gold=e.startGold,this.baseHP=this.baseMaxHP=e.baseHP,this.maxWaves=Bl[this.currentLevel],this.waveNum=0,this.waveActive=!1,this.waveBetween=!1,this.prepPhase=!0,this.gameOver=!1,this.gamePaused=!1,this.gameSpeed=1,this.ui.speedText.textContent="1x",this.killCount=0,this.totalKills=0,this.hero=null,this.buildingCell=null,this.selectedTowerType=null,this.heroSelected=!1,this.selectedItem=null,this.items={bomb:1,medkit:1,goldbag:1,freezerune:1,totem:1},this.selectedSkill=null,this.skills=Object.assign({arrowRain:0,fireball:0,healWave:0,timeWarp:0,goldRain:0},this.progress.shopSkills||{}),this.bossWarnings.forEach(t=>this.scene.remove(t.mesh)),this.bossWarnings=[],this.hideRange(),this.hideBuildPreview(),this.map.reset(this.currentLevel),this.towerManager.reset(),this.monsterManager.reset(this.map.paths),this.waveManager.loadLevel(this.currentLevel),this.monsterManager.onMonsterKilled=t=>{let n=t.def?t.def.reward:10;this.gold+=n,this.totalKills++,this.killCount++,this.audio.play("coin"),this.updateUI()},this.monsterManager.onMonsterReachBase=t=>{let n=t.def?t.def.livesCost:1;this.baseHP-=n,this.audio.play("baseHit"),this.flashScreen("#ff2222",.22,350),this.baseHP<=0&&(this.baseHP=0,this.gameLose()),this.updateUI()},this.hideTowerInfo(),this.hideBuildPanel(),this.updateUI(),this.updateTowerButtons(),this.updateItemUI(),this.updateSkillUI(),this.updateStaminaUI()}computeStars(){return this.baseHP>=this.baseMaxHP?3:this.baseHP>=this.baseMaxHP*.5?2:this.baseHP>0?1:0}computeRewards(e){let t=e?this.computeStars():0,n=e?100+this.maxWaves*5:10*this.waveNum,i=this.waveNum*5,r={0:0,1:.1,2:.3,3:.5}[t]||0,a=e&&!this.progress.stars[this.currentLevel]?200:0,o=e&&this.baseHP>=this.baseMaxHP?100:0,l=Math.round(n+i+(e?n*r:0)+a),c=Math.round(10+this.waveNum*2+t*5+(e?20:0)),h=e?20+t*10+(a?50:0):5+this.waveNum;return{goldReward:l,exp:c,coins:h,firstClear:a,noDamage:o}}gameWin(){this.gameOver=!0,this.waveActive=!1,this.gameStarted=!1,this.audio.play("victory"),this.audio.setMusicIntensity(0);let e=this.computeStars(),t=this.computeRewards(!0);e>(this.progress.stars[this.currentLevel]||0)&&(this.progress.stars[this.currentLevel]=e),this.currentLevel+1<Dt.length&&this.progress.unlocked<this.currentLevel+1&&(this.progress.unlocked=this.currentLevel+1),this.hero&&(this.progress.heroExp[this.hero.id]=(this.progress.heroExp[this.hero.id]||0)+t.exp),this.progress.coins+=t.coins,wi(this.progress);let n=this.currentLevel+1<Dt.length;this.ui.gameOverTitle.textContent="\u{1F389} \u80DC\u5229\uFF01",this.ui.gameOverStars.style.display="flex",this.ui.gameOverStars.innerHTML=[0,1,2].map(i=>`<span class="star ${i<e?"on":""}">\u2605</span>`).join(""),this.ui.gameOverStats.innerHTML=`\u51FB\u6740: ${this.totalKills} | \u5269\u4F59\u751F\u547D: ${this.baseHP} | \u661F\u7EA7: ${e}<br>\u91D1\u5E01\u5956\u52B1: ${t.goldReward} | \u5C40\u5916\u91D1\u5E01: +${t.coins} | \u82F1\u96C4\u7ECF\u9A8C: +${t.exp}${t.firstClear?" | \u9996\u901A +200":""}${t.noDamage?" | \u65E0\u4F24 +100":""}`,this.ui.resultNextBtn.style.display=n?"inline-block":"none",this.ui.gameOverPanel.style.display="flex",document.getElementById("game-container").classList.add("in-menu")}gameLose(){this.gameOver=!0,this.waveActive=!1,this.gameStarted=!1,this.audio.play("defeat"),this.audio.setMusicIntensity(0);let e=this.computeRewards(!1);this.hero&&(this.progress.heroExp[this.hero.id]=(this.progress.heroExp[this.hero.id]||0)+e.exp),this.progress.coins+=e.coins,wi(this.progress),this.ui.gameOverTitle.textContent="\u{1F480} \u5931\u8D25",this.ui.gameOverStars.style.display="none",this.ui.gameOverStats.innerHTML=`\u51FB\u6740: ${this.totalKills} | \u6CE2\u6B21: ${this.waveNum}<br>\u57FA\u7840\u5956\u52B1: ${e.goldReward}G | \u5C40\u5916\u91D1\u5E01: +${e.coins} | \u82F1\u96C4\u7ECF\u9A8C: +${e.exp}`,this.ui.resultNextBtn.style.display="none",this.ui.gameOverPanel.style.display="flex",document.getElementById("game-container").classList.add("in-menu")}spendGold(e){return this.gold<e?!1:(this.gold-=e,this.updateUI(),this.updateTowerButtons(),!0)}addGold(e){this.gold+=e,this.audio.play("coin"),this.updateUI(),this.updateTowerButtons()}showFloatingText(e,t="#ffd700"){let n=document.createElement("div");n.className="floating-text",n.textContent=e,n.style.color=t,n.style.left="50%",n.style.top="42%",document.getElementById("game-container").appendChild(n),setTimeout(()=>n.remove(),1200)}showDamageNumber(e,t){if(!e||!e.mesh)return;let n=e.mesh.position.clone().project(this.camera);if(n.z>1)return;let i=(n.x*.5+.5)*window.innerWidth,r=(-n.y*.5+.5)*window.innerHeight,a=document.createElement("div");a.className="damage-number",a.textContent=`-${t}`,a.style.left=`${i+(Math.random()*16-8)}px`,a.style.top=`${r}px`,document.getElementById("game-container").appendChild(a),setTimeout(()=>a.remove(),700)}flashScreen(e,t,n){let i=document.createElement("div");i.className="screen-flash",i.style.background=e,i.style.opacity=String(t),document.getElementById("game-container").appendChild(i),setTimeout(()=>{i.style.transition="opacity 0.3s",i.style.opacity="0",setTimeout(()=>i.remove(),320)},n)}createHitEffect(e,t){let n=new te(new tn(.12,0),new Ve({color:t,transparent:!0,opacity:.9}));n.position.copy(e),n.position.y+=.5,this.scene.add(n);let i=.25,r=()=>{if(i-=.016,i<=0){this.scene.remove(n);return}n.scale.multiplyScalar(1.35),n.material.opacity=Math.max(0,i*3.6),requestAnimationFrame(r)};r()}createDeathEffect(e,t){let n=[];for(let r=0;r<8;r++){let a=new te(new ot(.08,.08,.08),new Ve({color:t,transparent:!0,opacity:1}));a.position.copy(e).add(new P((Math.random()-.5)*.4,.5+Math.random()*.5,(Math.random()-.5)*.4)),this.scene.add(a),n.push({mesh:a,vx:(Math.random()-.5)*2.4,vy:1.6+Math.random()*2.2,vz:(Math.random()-.5)*2.4,life:.7})}let i=()=>{let r=!1;for(let a of n){if(a.life-=.016,a.life<=0){this.scene.remove(a.mesh);continue}r=!0,a.mesh.position.x+=a.vx*.016,a.mesh.position.y+=a.vy*.016,a.vy-=5*.016,a.mesh.material.opacity=Math.max(0,a.life/.7),a.mesh.rotation.x+=.2,a.mesh.rotation.z+=.15}r&&requestAnimationFrame(i)};i()}createMuzzleFlash(e,t){let n=new te(new tn(.16,0),new Ve({color:t,transparent:!0,opacity:.95,blending:fs,depthWrite:!1}));n.position.copy(e),this.scene.add(n);let i=.12,r=()=>{if(i-=.016,i<=0){this.scene.remove(n);return}n.scale.multiplyScalar(1.4),n.material.opacity=Math.max(0,i*8),requestAnimationFrame(r)};r()}selectTowerType(e){let t=document.querySelector(`.tower-btn[data-type="${e}"]`);t&&(this.heroSelected=!1,this.heroManager.setSelected(!1),t.classList.contains("selected")?(t.classList.remove("selected"),this.selectedTowerType=null,this.hideBuildPreview(),this.hideRange()):(this.ui.towerBtns.forEach(n=>n.classList.remove("selected")),t.classList.add("selected"),this.selectedTowerType=e,this.hideBuildPanel(),this.hideTowerInfo()))}buildTowerAtCell(e,t){let i=this.towerManager.towerDefs[e];if(!i)return;let r=i.levels[0].cost;if(this.gold<r){this.showMessage("\u91D1\u5E01\u4E0D\u8DB3\uFF01",1500),this.audio.play("click");return}if(!this.map.isPlaceableCell(t.x,t.z)){this.showMessage("\u8FD9\u91CC\u4E0D\u80FD\u5EFA\u9020\u9632\u5FA1\u5854",1200);return}this.towerManager.placeTower(t,e)&&(this.hideBuildPanel(),this.audio.play("build"),this.updateUI(),this.updateTowerButtons(),this.showRangeAt(this.map.getCellCenterWorld(t.x,t.z),i.levels[0].range,"#6ee7ff"))}showBuildPanel(e){this.buildingCell={x:e.x,z:e.z},this.hideTowerInfo(),this.ui.towerBuildPanel.style.display="flex",this.ui.buildSpotLabel.textContent=`\u5EFA\u9020\u4F4D\u7F6E (${e.x}, ${e.z})`;let t=this.ui.buildTowerBtns,n=this.towerManager.towerDefs;t.forEach(i=>{let r=i.dataset.type,a=n[r];if(a){let o=a.levels[0].cost;i.querySelector(".build-cost").textContent=`${o}G`,i.classList.toggle("disabled",this.gold<o)}}),this.showRangeAt(this.map.getCellCenterWorld(e.x,e.z),2.5,"#a8b8d8")}hideBuildPanel(){this.buildingCell=null,this.ui.towerBuildPanel.style.display="none",this.selectedTowerType||this.hideRange()}showTowerInfo(e){this.ui.infoName.textContent=e.def.name,this.ui.infoLevel.textContent=`Lv.${e.level}`,this.ui.infoDamage.textContent=`\u4F24\u5BB3: ${e.levelDef.damage}`,this.ui.infoRange.textContent=`\u5C04\u7A0B: ${e.levelDef.range}`,this.ui.infoDesc.textContent=e.levelDef.desc||"",e.canUpgrade?(this.ui.upgradeCost.textContent=`${e.upgradeCost}G`,this.ui.upgradeBtn.style.display="flex",this.ui.upgradeBtn.classList.toggle("disabled",this.gold<e.upgradeCost)):this.ui.upgradeBtn.style.display="none",this.ui.sellValue.textContent=`${e.sellRefund}G`,this.ui.infoPanel.style.display="flex"}hideTowerInfo(){this.ui.infoPanel.style.display="none",this.towerManager.hideTowerMenu(),this.hideRange()}upgradeTower(){let e=this.towerManager.selectedTower;if(!e)return;if(this.towerManager.upgradeTower(e.cell)){let n=this.towerManager.showTowerMenu(e.cell);n&&(this.showTowerInfo(n),this.showRangeAt(n.pos,n.levelDef.range,"#ffd66e")),this.updateUI(),this.updateTowerButtons()}}sellTower(){let e=this.towerManager.selectedTower;e&&(this.towerManager.sellTower(e.cell),this.hideTowerInfo(),this.updateUI(),this.updateTowerButtons())}useHeroSkill(){!this.hero||this.gameOver||(this.heroManager.useHeroSkill(this.heroManager.activeHeroIndex),this.updateHeroUI())}switchHero(e){this.heroManager.heroes[e]&&(this.heroManager.activeHeroIndex=e,this.heroManager.moveTarget=null,this.heroManager.path=[],this.heroSelected=!1,this.heroManager.setSelected(!1),this.hero=this.heroManager.getActiveHero(),this.updateHeroUI())}updateHeroUI(){if(!this.hero){this.ui.heroPanel.style.display="none";return}this.ui.heroPanel.style.display="flex",this.ui.heroName.textContent=this.hero.def.name,this.ui.heroLevel.textContent=`Lv.${this.hero.level}`,this.ui.heroSkillName.textContent=this.hero.def.skill.name;let e=this.hero.skillCooldown;e>0?(this.ui.heroBtn.classList.add("on-cooldown"),this.ui.heroCooldown.textContent=`${Math.ceil(e)}s`):(this.ui.heroBtn.classList.remove("on-cooldown"),this.ui.heroCooldown.textContent="\u5C31\u7EEA"),this.ui.heroSwitch.innerHTML="",this.heroManager.heroes.forEach((t,n)=>{let i=document.createElement("button");i.className="hero-switch-btn"+(n===this.heroManager.activeHeroIndex?" active":""),i.textContent=t.def.icon,i.title=`${t.def.name} Lv.${t.level}`,i.addEventListener("click",()=>{this.audio.play("click"),this.switchHero(n)}),this.ui.heroSwitch.appendChild(i)})}selectItem(e){if(!(this.items[e]<=0)&&(this.selectedItem=this.selectedItem===e?null:e,this.updateItemUI(),this.selectedItem)){let t=zl[e];this.showMessage(`${t.name}\uFF1A${t.desc}${t.immediate===!1?"\uFF0C\u70B9\u51FB\u6218\u573A\u4F7F\u7528":""}`,2200)}}useItem(e){if(this.items[e]<=0)return;let t=this.monsterManager;if(e==="medkit")this.baseHP=Math.min(this.baseMaxHP,this.baseHP+5),this.showMessage("\u6025\u6551\u5305\uFF1A\u57FA\u5730\u751F\u547D+5",1400);else if(e==="goldbag")this.gold+=100,this.showMessage("\u91D1\u5E01\u888B\uFF1A+100G",1400);else if(e==="freezerune"){for(let n of t.monsters)t.applySlow(n,.5,5,{magic:!0});this.showMessage("\u5BD2\u51B0\u7B26\uFF1A\u5168\u573A\u51CF\u901F50%",1400),this.audio.play("freeze")}this.items[e]--,this.updateUI(),this.updateItemUI()}useItemAt(e,t){if(!(this.items[e]<=0)){if(e==="bomb"){let n=this.monsterManager,i=0;for(let r of n.monsters)r.dead||t.distanceTo(r.mesh.position)<=2.5&&(n.damageMonster(r,120,"magic"),i++);this.spawnExplosion(t),this.audio.play("cannon_fire"),this.showMessage(`\u70B8\u5F39\u547D\u4E2D ${i} \u53EA\u602A\u7269`,1400),this.items[e]--}else if(e==="totem"){let n=this.map.getCellFromWorld(t);if(!this.map.isPlaceableCell(n.x,n.z)){this.showMessage("\u8FD9\u91CC\u4E0D\u80FD\u653E\u7F6E\u56FE\u817E",1400);return}if(this.towerManager.getTowerAtCell(n.x,n.z)){this.showMessage("\u8FD9\u91CC\u5DF2\u7ECF\u6709\u9632\u5FA1\u5854",1400);return}this.towerManager.addTemporaryTower("arrow",n,2,15),this.audio.play("build"),this.showMessage("\u63F4\u519B\u56FE\u817E\uFF1A2\u7EA7\u7BAD\u5854\u53C2\u621815\u79D2",1400),this.items[e]--}this.updateUI(),this.updateItemUI()}}spawnExplosion(e){let t=new Ve({color:"#ff8800",transparent:!0,opacity:.8}),n=new te(new ct(1.2,8,6),t);n.position.copy(e),n.position.y=.5,this.scene.add(n);let i=.35,r=()=>{if(i-=.016,i<=0){this.scene.remove(n);return}n.scale.multiplyScalar(1.06),n.material.opacity=Math.max(0,i),requestAnimationFrame(r)};r()}updateItemUI(){this.ui.itemBtns.forEach(e=>{let t=e.dataset.item,n=this.items[t]||0,i=zl[t],r=e.querySelector(".item-count");r&&(r.textContent=`\xD7${n}`),e.title=`${i.name}\uFF1A${i.desc}`,e.classList.toggle("selected",this.selectedItem===t),e.classList.toggle("disabled",n<=0)})}selectSkill(e){if(this.skills[e]<=0)return;let t=nr[e];if(!t.target){this.useSkill(e);return}this.selectedSkill=this.selectedSkill===e?null:e,this.updateSkillUI(),this.selectedSkill&&this.showMessage(`${t.name}\uFF1A\u70B9\u51FB\u6218\u573A\u4F7F\u7528`,1600)}useSkill(e){if(!(this.skills[e]<=0)){if(e==="healWave")this.baseHP=Math.min(this.baseMaxHP,this.baseHP+10),this.showMessage("\u6CBB\u7597\u6CE2\uFF1A\u57FA\u5730\u751F\u547D+10",1400),this.audio.play("item");else if(e==="timeWarp"){for(let t of this.monsterManager.monsters)this.monsterManager.applySlow(t,.6,5,{magic:!0});this.showMessage("\u65F6\u95F4\u7F13\u901F\uFF1A\u5168\u573A\u51CF\u901F60%",1400),this.audio.play("freeze")}else e==="goldRain"&&(this.gold+=200,this.showMessage("\u91D1\u5E01\u96E8\uFF1A+200G",1400),this.audio.play("coin"));this.skills[e]--,this.updateUI(),this.updateSkillUI()}}useSkillAt(e,t){if(this.skills[e]<=0)return;let n=this.monsterManager;if(e==="arrowRain"){let i=0;for(let r of n.monsters)r.dead||t.distanceTo(r.mesh.position)<=3&&(n.damageMonster(r,150,"physical"),i++);this.spawnExplosion(t),this.audio.play("cannon_fire"),this.showMessage(`\u7BAD\u96E8\u547D\u4E2D ${i} \u53EA\u602A\u7269`,1400),this.skills[e]--}else if(e==="fireball"){let i=0;for(let r of n.monsters)r.dead||t.distanceTo(r.mesh.position)<=1.6&&(n.damageMonster(r,250,"magic"),i++);this.spawnExplosion(t),this.audio.play("heroSkill"),this.showMessage(`\u706B\u7403\u672F\u547D\u4E2D ${i} \u53EA\u602A\u7269`,1400),this.skills[e]--}this.updateUI(),this.updateSkillUI()}updateSkillUI(){this.ui.skillBtns.forEach(e=>{let t=e.dataset.skill,n=this.skills[t]||0,i=nr[t],r=e.querySelector(".skill-count");r&&(r.textContent=`\xD7${n}`),e.title=`${i.name}\uFF1A${i.desc}`,e.classList.toggle("selected",this.selectedSkill===t),e.classList.toggle("disabled",n<=0)})}buySkill(e){let t=nr[e];if(t){if(this.progress.coins<t.price){this.showToast("\u5C40\u5916\u91D1\u5E01\u4E0D\u8DB3");return}this.progress.coins-=t.price,this.progress.shopSkills[e]=(this.progress.shopSkills[e]||0)+1,wi(this.progress),this.audio.play("coin"),this.renderShop()}}upgradeHero(e){let t=this.progress.heroLevels[e]||1;if(t>=30){this.showToast("\u82F1\u96C4\u5DF2\u8FBE\u6EE1\u7EA7");return}let n=30+t*20;if(this.progress.coins<n){this.showToast("\u5C40\u5916\u91D1\u5E01\u4E0D\u8DB3");return}this.progress.coins-=n,this.progress.heroLevels[e]=t+1,wi(this.progress),this.audio.play("upgrade"),this.renderHeroTrain()}renderHeroTrain(){let e=this.ui.heroTrainList;e.innerHTML="";let t=[{id:"ranger",name:"\u738B\u56FD\u6E38\u4FA0",icon:"\u{1F9DD}",unlocked:!0},{id:"mage",name:"\u5BAB\u5EF7\u6CD5\u5E08",icon:"\u{1F9D9}",unlocked:this.progress.unlocked>=3}];for(let n of t){let i=this.progress.heroLevels[n.id]||1,r=i>=30?0:30+i*20,a=n.id==="ranger"?20:25,o=n.id==="ranger"?3:2.5,l=Math.round(a*(1+(i-1)*.02)),c=o*(1+(i-1)*.01),h=document.createElement("div");h.className="train-card"+(n.unlocked?"":" locked"),h.innerHTML=`
        <div class="train-icon">${n.icon}</div>
        <div class="train-name">${n.name}</div>
        <div class="train-level">Lv.${i}</div>
        <div class="train-stat">\u653B\u51FB ${l} \xB7 \u79FB\u901F ${c.toFixed(2)}</div>
        <button class="train-upgrade" ${n.unlocked&&i<30?"":"disabled"}>${i>=30?"\u6EE1\u7EA7":`\u5347\u7EA7 ${r} \u91D1\u5E01`}</button>
      `,n.unlocked&&i<30?h.querySelector(".train-upgrade").addEventListener("click",()=>this.upgradeHero(n.id)):n.unlocked||(h.querySelector(".train-upgrade").textContent="\u672A\u89E3\u9501\uFF08\u5B8C\u62103003\uFF09"),e.appendChild(h)}this.ui.trainCoins.textContent=`\u5C40\u5916\u91D1\u5E01\uFF1A${this.progress.coins}`}renderShop(){let e=this.ui.shopList;e.innerHTML="";for(let[t,n]of Object.entries(nr)){let i=this.progress.shopSkills[t]||0,r=document.createElement("div");r.className="shop-row",r.innerHTML=`
        <span class="shop-icon">${n.icon}</span>
        <div class="shop-info">
          <div class="shop-name">${n.name}</div>
          <div class="shop-desc">${n.desc}</div>
        </div>
        <span class="shop-owned">\xD7${i}</span>
        <button class="shop-buy" data-skill="${t}" ${this.progress.coins>=n.price?"":"disabled"}>${n.price} \u91D1\u5E01</button>
      `,r.querySelector(".shop-buy").addEventListener("click",()=>this.buySkill(t)),e.appendChild(r)}this.ui.shopCoins.textContent=`\u5C40\u5916\u91D1\u5E01\uFF1A${this.progress.coins}`}openHeroTrain(){this.ui.heroTrainPanel.style.display="flex",this.renderHeroTrain()}closeHeroTrain(){this.ui.heroTrainPanel.style.display="none"}openShop(){this.ui.shopPanel.style.display="flex",this.renderShop()}closeShop(){this.ui.shopPanel.style.display="none"}requestNextWave(){this.gameOver||!this.gameStarted||this.waveManager.waveActive||this.earlyStartWave()}earlyStartWave(){if(this.gameOver||!this.gameStarted||this.waveManager.waveActive)return;if(this.prepPhase){this.prepPhase=!1,this.waveManager.startNextWave(),this.updateUI();return}if(!this.waveManager.betweenWaves)return;let e=Math.floor(this.waveManager.waveTimer);e>0&&(this.addGold(e*2),this.showMessage(`\u63D0\u524D\u5F00\u6CE2\uFF01+${e*2}G`,1500)),this.waveManager._countdownId&&(clearInterval(this.waveManager._countdownId),this.waveManager._countdownId=null),this.waveManager.startNextWave(),this.updateUI()}toggleSpeed(){this.gameSpeed=this.gameSpeed===1?2:1,this.ui.speedText.textContent=`${this.gameSpeed}x`,this.audio.setPaused(this.gamePaused)}togglePause(){!this.gameStarted||this.gameOver||(this.gamePaused=!this.gamePaused,this.ui.pauseOverlay.style.display=this.gamePaused?"flex":"none",this.audio.setPaused(this.gamePaused))}showMessage(e,t=2e3){this.ui.messageEl.textContent=e,this.ui.messageEl.style.opacity="1",clearTimeout(this._msgTimeout),this._msgTimeout=setTimeout(()=>{this.ui.messageEl.style.opacity="0"},t)}showToast(e,t=2200){let n=document.getElementById("ui-toast");n||(n=document.createElement("div"),n.id="ui-toast",document.body.appendChild(n)),n.textContent=e,n.style.display="block",clearTimeout(this._toastTimeout),this._toastTimeout=setTimeout(()=>{n.style.display="none"},t)}getStamina(){let e=this.progress.stamina,t=Date.now(),n=5*60*1e3,i=Math.floor((t-e.lastRegen)/n);return i>0&&e.value<e.max&&(e.value=Math.min(e.max,e.value+i),e.lastRegen+=i*n,wi(this.progress)),e}spendStamina(e){let t=this.getStamina();return t.value<e?!1:(t.value-=e,wi(this.progress),this.updateStaminaUI(),!0)}updateStaminaUI(){let e=this.getStamina(),t=this.ui.staminaEl;return t&&(t.textContent=`${e.value}/${e.max}`),e}updateUI(){if(this.ui.goldEl.textContent=this.gold,this.ui.baseHPEl.textContent=this.baseHP,this.ui.waveEl.textContent=`${this.waveNum}/${this.maxWaves}`,this.ui.killsEl.textContent=this.totalKills,this.updateStaminaUI(),this.gameOver||!this.gameStarted){this.ui.nextWaveBtn.disabled=!0,this.ui.nextWaveBtn.textContent="\u4E0B\u4E00\u6CE2";return}this.waveManager.waveActive?(this.ui.nextWaveBtn.disabled=!0,this.ui.nextWaveBtn.textContent="\u6218\u6597\u4E2D"):this.prepPhase?(this.ui.nextWaveBtn.disabled=!1,this.ui.nextWaveBtn.textContent="\u2694\uFE0F \u5F00\u59CB\u9632\u5FA1"):(this.ui.nextWaveBtn.disabled=!1,this.ui.nextWaveBtn.textContent="\u23E9 \u63D0\u524D\u5F00\u6CE2")}updateTowerButtons(){let e=document.querySelectorAll(".tower-btn"),t=this.towerManager.towerDefs;e.forEach(n=>{let i=n.dataset.type,r=t[i];if(r){let a=r.levels[0].cost,o=n.querySelector(".tower-cost");o&&(o.textContent=`${a}G`),n.classList.toggle("disabled",this.gold<a)}})}showRangeAt(e,t,n="#6ee7ff"){this.hideRange();let i=new je,r=new te(new zi(t,48),new Ve({color:n,transparent:!0,opacity:.14,side:at,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.045,i.add(r);let a=new te(new nn(t-.06,t,48),new Ve({color:n,transparent:!0,opacity:.85,side:at,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.065,i.add(a),i.position.copy(e),this.scene.add(i),this.rangeIndicator=i}hideRange(){this.rangeIndicator&&(this.scene.remove(this.rangeIndicator),this.rangeIndicator=null)}showBuildPreview(e,t,n){this.hideBuildPreview();let i=new je,r=this.map.getCellCenterWorld(e.x,e.z),a=n?"#6ee7ff":"#ff6b6b",o=new te(new en(.9,.9),new Ve({color:a,transparent:!0,opacity:.38,side:at,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.055,i.add(o);let l=new te(new zi(t,48),new Ve({color:a,transparent:!0,opacity:.12,side:at,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.05,i.add(l);let c=new te(new nn(t-.05,t,48),new Ve({color:a,transparent:!0,opacity:.8,side:at,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.07,i.add(c),i.position.copy(r),this.scene.add(i),this.buildPreview=i}hideBuildPreview(){this.buildPreview&&(this.scene.remove(this.buildPreview),this.buildPreview=null)}updateBuildPreviewFromMouse(){if(!this.selectedTowerType||!this.gameStarted||this.gameOver){this.hideBuildPreview();return}this.raycaster.setFromCamera(this.mouse,this.camera);let e=this.raycaster.intersectObject(this.map.groundMesh);if(!e.length)return;let t=this.map.getCellFromWorld(e[0].point),n=this.towerManager.towerDefs[this.selectedTowerType];if(!n)return;let i=this.map.isPlaceableCell(t.x,t.z)&&!this.towerManager.getTowerAtCell(t.x,t.z)&&this.gold>=n.levels[0].cost;this.showBuildPreview(t,n.levels[0].range,i)}onClick(e){if(this._suppressClick||this.gameOver||!this.gameStarted)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.heroManager.heroes.map(a=>a.mesh);if(this.raycaster.intersectObjects(t,!0).length>0){this.heroSelected=!this.heroSelected,this.heroManager.setSelected(this.heroSelected),this.showMessage(this.heroSelected?"\u5DF2\u9009\u4E2D\u82F1\u96C4\uFF0C\u70B9\u51FB\u5730\u56FE\u79FB\u52A8":"\u5DF2\u53D6\u6D88\u9009\u4E2D\u82F1\u96C4",1400),this.hideBuildPanel();return}let i=this.towerManager.towers.map(a=>a.mesh),r=this.raycaster.intersectObjects(i,!0);if(r.length>0){let a=r[0].object;for(;a;){let o=this.towerManager.towers.find(l=>l.mesh===a);if(o){this.heroSelected=!1,this.heroManager.setSelected(!1),this.hideBuildPanel(),this.selectedItem=null,this.updateItemUI();let l=this.towerManager.showTowerMenu(o.cell);l&&(this.showTowerInfo(l),this.showRangeAt(l.pos,l.levelDef.range,"#6ee7ff"));return}a=a.parent}}if(this.map.groundMesh){let a=this.raycaster.intersectObject(this.map.groundMesh);if(a.length>0){let o=a[0].point,l=this.map.getCellFromWorld(o);if(this.selectedItem){let h=this.selectedItem;this.selectedItem=null,this.updateItemUI(),this.useItemAt(h,o);return}if(this.selectedSkill){let h=this.selectedSkill;this.selectedSkill=null,this.updateSkillUI(),this.useSkillAt(h,o);return}let c=this.towerManager.getTowerAtCell(l.x,l.z);if(c){this.heroSelected=!1,this.heroManager.setSelected(!1),this.hideBuildPanel(),this.selectedItem=null,this.updateItemUI();let h=this.towerManager.showTowerMenu(c.cell);h&&(this.showTowerInfo(h),this.showRangeAt(h.pos,h.levelDef.range,"#6ee7ff"));return}if(this.heroSelected){this.heroManager.moveHeroTo(o);return}if(this.selectedTowerType){this.buildingCell=l,this.buildTowerAtCell(this.selectedTowerType,l),this.hideBuildPreview();return}if(this.map.isPlaceableCell(l.x,l.z)){this.showBuildPanel(l);return}}}this.hideBuildPanel(),this.hideTowerInfo()}onRightClick(e){if(this.gameOver||!this.gameStarted)return;e.preventDefault(),this.selectedTowerType=null,this.heroSelected=!1,this.heroManager.setSelected(!1),this.selectedItem=null,document.querySelectorAll(".tower-btn").forEach(i=>i.classList.remove("selected")),this.hideBuildPreview(),this.updateItemUI(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.towerManager.towers.map(i=>i.mesh),n=this.raycaster.intersectObjects(t,!0);if(n.length>0){let i=n[0].object;for(;i;){let r=this.towerManager.towers.find(a=>a.mesh===i);if(r){this.towerManager.sellTower(r.cell),this.audio.play("sell"),this.hideTowerInfo(),this.updateUI(),this.updateTowerButtons();return}i=i.parent}}}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.updateBuildPreviewFromMouse()}onKeyDown(e){if(this.gameOver&&e.key==="Enter"){this.startLevel(this.currentLevel);return}if(this.gameStarted)switch(e.key){case"Escape":this.hideBuildPanel(),this.hideTowerInfo(),this.selectedTowerType=null,this.selectedItem=null,this.heroSelected=!1,this.heroManager.setSelected(!1),this.hideBuildPreview(),this.hideRange();break;case"1":this.selectTowerType("arrow");break;case"2":this.selectTowerType("magic");break;case"3":this.selectTowerType("cannon");break;case"4":this.selectTowerType("ice");break;case"q":case"Q":this.useHeroSkill();break;case" ":e.preventDefault(),this.requestNextWave();break;case"p":case"P":this.togglePause();break}}animate(){requestAnimationFrame(()=>this.animate());let e=Math.min(this.clock.getDelta(),.1),t=this.gamePaused?0:e*this.gameSpeed;this.updateStaminaUI(),this.updateBossWarnings(e),this.gameStarted&&!this.gameOver&&t>0&&(this.towerManager.update(t),this.monsterManager.update(t),this.heroManager.update(t),this.waveManager.update(t),this.towerManager.updateVisuals(t),this.monsterManager.updateVisuals(t),this.heroManager.updateVisuals(t),this.updateHeroUI(),this.updateUI(),this.updateMusicIntensity()),this.updateCamera(),this.renderer.render(this.scene,this.camera)}updateMusicIntensity(){let e=this.monsterManager.getAliveCount(),t=this.monsterManager.monsters.some(r=>r.isBoss&&!r.dead),n=this.baseHP/this.baseMaxHP<.3?.2:0,i=Math.max(0,Math.min(1,e/25*.55+(t?.35:0)+n));this.audio.setMusicIntensity(i)}updateBossWarnings(e){for(let t=this.bossWarnings.length-1;t>=0;t--){let n=this.bossWarnings[t];n.life-=e,n.mesh.material&&(n.mesh.material.opacity=Math.max(0,Math.min(.55,n.life*.7))),n.life<=0&&(this.scene.remove(n.mesh),this.bossWarnings.splice(t,1))}}onBossWarning(e,t){if(!e||!e.mesh)return;let n=t.radius||2,i=new te(new nn(Math.max(.1,n-.15),n,32),new Ve({color:16720418,side:at,transparent:!0,opacity:.55}));i.rotation.x=-Math.PI/2,i.position.set(e.mesh.position.x,.28,e.mesh.position.z),this.scene.add(i),this.bossWarnings.push({mesh:i,life:(t.warning||1)+.25}),this.showMessage(`${e.def.name} \u6B63\u5728\u65BD\u653E\u300C${t.name}\u300D\uFF01`,1800),this.audio.play("bossWarn"),t.type==="slowTowers"&&this.flashScreen("#ff3300",.25,600)}onBossSkillEnd(e,t){t&&t.type==="stunTowers"&&this.flashScreen("#ff6600",.18,350)}onWaveStart(e){this.waveNum=e,this.waveActive=!0,this.waveBetween=!1,this.prepPhase=!1,this.audio.play("waveStart"),this.updateUI(),this.showMessage(`\u7B2C ${e} \u6CE2\u6765\u88AD\uFF01`,2e3)}onWaveComplete(e){this.waveActive=!1,this.waveBetween=!0,this.killCount=0;let t=30+e*5;this.addGold(t),this.audio.play("waveComplete"),this.updateUI(),this.showMessage(`\u6CE2\u6B21\u5B8C\u6210\uFF01+${t}G`,2e3)}onAllWavesComplete(){!this.gameStarted||this.gameOver||this.gameWin()}},kl=new Na;window.game=kl;var Tm=kl;})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
