(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3691,e=>{e.v({back:"bd15Mq_back",content:"bd15Mq_content",divider:"bd15Mq_divider",notFound:"bd15Mq_notFound",reveal:"bd15Mq_reveal",row:"bd15Mq_row",title:"bd15Mq_title"})},42559,e=>{"use strict";var t=e.i(43476),a=e.i(22016),l=e.i(71645),i=e.i(62665),o=e.i(41451),r=e.i(26203),n=e.i(74790),u=e.i(91922),s=e.i(75858);let c={cellSize:12,maxDpr:2,sourceScale:.5,codeHeight:.55,codeWidth:.86,lineHeight:.82,edgeSoftness:.02,fontWeight:700,levels:[.04,.7],mouseRadius:220,mouseEase:8,sweepPeriod:9,frameInterval:1e3/30};function d(e,t){e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t?e.LINEAR_MIPMAP_LINEAR:e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}function m(){let e=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t,a=e.current;if(!a)return;let l=a.getContext("webgl2",{alpha:!0,premultipliedAlpha:!1});if(!l)return;try{t=(0,n.R)(l,r.X,i.M)}catch(e){console.error("[NotFoundAsciiGL]",e);return}l.useProgram(t);let m=(0,n.E)(l,t,i.g),f=l.createVertexArray();l.bindVertexArray(f);let _=Math.min(window.devicePixelRatio||1,c.maxDpr),h=(0,o.Y)(Math.round(c.cellSize*_)),p=l.createTexture();l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,p),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,!1),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,h.canvas),d(l,!1);let v=document.createElement("canvas"),x=l.createTexture();l.enable(l.BLEND),l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA),l.clearColor(0,0,0,0),l.uniform1i(m.u_atlas,0),l.uniform1i(m.u_image,1),l.uniform1f(m.u_glyphCount,h.count),l.uniform1f(m.u_dpr,_),l.uniform1f(m.u_cell,c.cellSize),l.uniform2f(m.u_levels,c.levels[0],c.levels[1]),l.uniform1f(m.u_mouseRadius,c.mouseRadius),l.uniform1f(m.u_sweepPeriod,c.sweepPeriod);let g=getComputedStyle(a).fontFamily,E=()=>{let e=a.clientWidth,t=a.clientHeight;a.width=Math.max(1,Math.floor(e*_)),a.height=Math.max(1,Math.floor(t*_)),l.viewport(0,0,a.width,a.height),l.uniform2f(m.u_resolution,a.width,a.height);v.width=Math.max(1,Math.round(e*c.sourceScale)),v.height=Math.max(1,Math.round(t*c.sourceScale));let i=v.getContext("2d");if(!i)throw Error("No se pudo crear el contexto 2D del código 404.");i.fillStyle="#000",i.fillRect(0,0,v.width,v.height);let o=v.height>v.width?"404".split(""):["404"];i.font=`${c.fontWeight} 100px ${g}`;let r=Math.max(...o.map(e=>i.measureText(e).width))/100,n=Math.min(v.height*c.codeHeight/(o.length*c.lineHeight),v.width*c.codeWidth/r);i.font=`${c.fontWeight} ${n}px ${g}`,i.letterSpacing=`${-.04*n}px`,i.textAlign="center",i.textBaseline="middle",i.filter=`blur(${n*c.edgeSoftness}px)`,i.fillStyle="#fff",o.forEach((e,t)=>{let a=(t-(o.length-1)/2)*n*c.lineHeight;i.fillText(e,v.width/2,v.height/2+a)}),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,x),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,v),l.generateMipmap(l.TEXTURE_2D),d(l,!0),l.uniform2f(m.u_imageSize,v.width,v.height)},T={tx:0,ty:0,x:0,y:0,tActive:0,active:0},R=e=>{if("mouse"!==e.pointerType)return;let t=a.getBoundingClientRect();T.tx=e.clientX-t.left,T.ty=e.clientY-t.top,0===T.active&&(T.x=T.tx,T.y=T.ty),T.tActive=1},A=()=>{T.tActive=0},S=e=>{l.clear(l.COLOR_BUFFER_BIT),l.uniform1f(m.u_time,e),l.uniform2f(m.u_mouse,T.x,T.y),l.uniform1f(m.u_mouseActive,T.active),l.drawArrays(l.TRIANGLES,0,3)},w=!1,P=null,N=0,b=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=new ResizeObserver(()=>{window.clearTimeout(N),N=window.setTimeout(()=>{E(),b&&S(0)},150)});return document.fonts.load(`${c.fontWeight} 100px ${g}`).then(()=>{w||(()=>{if(E(),y.observe(a),b){S(0),a.classList.add(s.default.visible);return}document.documentElement.addEventListener("pointermove",R),document.documentElement.addEventListener("pointerleave",A);let e=performance.now(),t=0;P=(0,u.f)(a,(a,l)=>{if(!l&&a-t<c.frameInterval)return;let i=l?0:(a-t)/1e3;t=a;let o=Math.min(1,i*c.mouseEase);T.x+=(T.tx-T.x)*o,T.y+=(T.ty-T.y)*o,T.active+=(T.tActive-T.active)*o,S((a-e)/1e3)},{threshold:0}),a.classList.add(s.default.visible)})()}).catch(e=>{console.error("[NotFoundAsciiGL] No se pudo cargar la fuente",e)}),()=>{w=!0,P?.(),window.clearTimeout(N),y.disconnect(),document.documentElement.removeEventListener("pointermove",R),document.documentElement.removeEventListener("pointerleave",A),l.deleteTexture(p),l.deleteTexture(x),l.deleteVertexArray(f),l.deleteProgram(t)}},[]),(0,t.jsx)("canvas",{ref:e,className:s.default.canvas,"aria-hidden":"true"})}var f=e.i(3691),_=e.i(19083);e.s(["default",0,function(){let{t:e}=(0,_.f)();return(0,t.jsxs)("section",{className:f.default.notFound,children:[(0,t.jsx)(m,{}),(0,t.jsxs)("div",{className:f.default.content,children:[(0,t.jsx)("hr",{className:f.default.divider}),(0,t.jsxs)("div",{className:f.default.row,children:[(0,t.jsx)("h1",{className:f.default.title,children:e.notFound.title}),(0,t.jsxs)(a.default,{className:f.default.back,href:"/",children:[(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 13 13",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M5.5 1.5 1 6.5l4.5 5M1.5 6.5H12",stroke:"currentColor",strokeWidth:"1.75"})}),(0,t.jsx)("span",{children:e.notFound.back})]})]})]})]})}],42559)},75858,e=>{e.v({canvas:"Ng4v-G_canvas",visible:"Ng4v-G_visible"})},62665,e=>{"use strict";let t=`#version 300 es
precision highp float;

uniform vec2  u_resolution;   // tama\xf1o del buffer en px de dispositivo
uniform float u_dpr;          // device pixel ratio aplicado
uniform float u_time;         // segundos
uniform float u_cell;         // tama\xf1o de celda en px CSS
uniform sampler2D u_atlas;    // tira horizontal de glifos
uniform float u_glyphCount;   // n\xba de glifos del atlas
uniform sampler2D u_image;    // imagen fuente (luminancia)
uniform vec2  u_imageSize;    // px intr\xednsecos de la imagen
uniform vec2  u_levels;       // ventana de luminancia (negro, blanco) tras la que se reparte el atlas
uniform vec2  u_mouse;        // px CSS, local al canvas (origen arriba-izquierda)
uniform float u_mouseActive;  // 0..1
uniform float u_mouseRadius;  // px CSS
uniform float u_sweepPeriod;  // segundos por pasada del barrido

out vec4 outColor;

// Cuota de celdas que, en cada tick, desplazan su glifo un escal\xf3n.
const float CHURN_SHARE = 0.08;
const float CHURN_RATE = 3.3;   // ticks por segundo
const float SWEEP_WIDTH = 0.42; // fracci\xf3n del ancho
const float SWEEP_GAIN = 0.3;
const float MOUSE_GAIN = 0.5;
const float BASE_ALPHA = 0.75;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}

// UV de la imagen para un punto en px CSS con encuadre cover centrado.
vec2 coverUv(vec2 p, vec2 res) {
  float scale = max(res.x / u_imageSize.x, res.y / u_imageSize.y);
  vec2 drawn = u_imageSize * scale;
  return (p - (res - drawn) * 0.5) / drawn;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y) / u_dpr;
  vec2 res = u_resolution / u_dpr;

  vec2 cell = floor(p / u_cell);
  vec2 center = (cell + 0.5) * u_cell;

  // El mip ≈ tama\xf1o de celda promedia la celda entera en vez de un solo texel.
  float texelsPerCell = u_cell * max(u_imageSize.x / res.x, u_imageSize.y / res.y);
  vec3 rgb = textureLod(u_image, coverUv(center, res), log2(max(texelsPerCell, 1.0))).rgb;
  float lum = dot(rgb, vec3(0.2126, 0.7152, 0.0722));
  float level = smoothstep(u_levels.x, u_levels.y, lum);

  float maxIndex = u_glyphCount - 1.0;
  float gi = floor(level * maxIndex + 0.5);

  float tick = floor(u_time * CHURN_RATE + hash(cell) * 10.0);
  float roll = hash(cell + tick * 0.137);
  gi += roll < CHURN_SHARE * 0.5 ? -1.0 : (roll > 1.0 - CHURN_SHARE * 0.5 ? 1.0 : 0.0);
  gi = clamp(gi, 0.0, maxIndex);

  vec2 local = fract(p / u_cell);
  // Glifos de pocos px: el antialiasing deja los trazos a media tinta; se saturan.
  float glyph = clamp(texture(u_atlas, vec2((gi + local.x) / u_glyphCount, local.y)).a * 2.0, 0.0, 1.0);

  float head = fract(u_time / u_sweepPeriod) * (1.0 + 2.0 * SWEEP_WIDTH) - SWEEP_WIDTH;
  float sweep = max(0.0, 1.0 - abs(p.x / res.x - head) / SWEEP_WIDTH) * SWEEP_GAIN;

  float mouse = smoothstep(u_mouseRadius, 0.0, distance(p, u_mouse)) * u_mouseActive * MOUSE_GAIN;

  float alpha = glyph * clamp(BASE_ALPHA + sweep + mouse, 0.0, 1.0);
  outColor = vec4(vec3(1.0), alpha);
}`;e.s(["M",0,t,"g",0,["u_resolution","u_dpr","u_time","u_cell","u_atlas","u_glyphCount","u_image","u_imageSize","u_levels","u_mouse","u_mouseActive","u_mouseRadius","u_sweepPeriod"]])}]);