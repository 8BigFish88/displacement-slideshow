!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).displacementSlideshow=t()}(this,function(){return function(e){function t(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]}console.log("%c Hover effect by Robin Delaporte: https://github.com/robin-dela/hover-effect ","color: #bada55; font-size: 0.8rem");var n=e.parent,i=e.displacementImage,o=e.image1,r=e.image2,a=t(e.images,[e.image1,e.image2]),s=t(e.imagesRatio,1),f=t(e.intensity1,e.intensity,1),l=t(e.intensity2,e.intensity,1),d=t(e.angle,Math.PI/4),u=t(e.angle1,d),c=t(e.angle2,3*-d),p=t(e.easing,"power1.inOut"),m=t(e.speedIn,e.speed,1.6),v=t(e.speedOut,e.speed,1.2),g=t(e.transitionDelay,3e3),h=0,y=1,x=void 0,E=void 0,H=void 0,F=null,R=null,w=[],T=null,W=null,P=null;if(n)if((a||o&&r)&&i){var S,b,U=new THREE.Scene,V=new THREE.OrthographicCamera(n.offsetWidth/-2,n.offsetWidth/2,n.offsetHeight/2,n.offsetHeight/-2,1,1e3),C=new THREE.WebGLRenderer({antialias:!1,alpha:!0}),D=s,L=function(){C.render(U,V)};V.position.z=1,C.setPixelRatio(2),C.setClearColor(16777215,0),C.setSize(n.offsetWidth,n.offsetHeight),n.appendChild(C.domElement),n.offsetHeight/n.offsetWidth<D?(S=1,b=n.offsetHeight/n.offsetWidth/D):(S=n.offsetWidth/n.offsetHeight*D,b=1),(W=new THREE.TextureLoader).crossOrigin="",(T=W.load(i,L)).magFilter=T.minFilter=THREE.LinearFilter,F=R||W.load(a[h],L),R=W.load(a[y],L),F.magFilter=R.magFilter=THREE.LinearFilter,F.minFilter=R.minFilter=THREE.LinearFilter,x=new THREE.ShaderMaterial({uniforms:{intensity1:{type:"f",value:f},intensity2:{type:"f",value:l},dispFactor:{type:"f",value:0},angle1:{type:"f",value:u},angle2:{type:"f",value:c},texture1:{type:"t",value:F},texture2:{type:"t",value:R},disp:{type:"t",value:T},res:{type:"vec4",value:new THREE.Vector4(n.offsetWidth,n.offsetHeight,S,b)},dpr:{type:"f",value:window.devicePixelRatio}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",fragmentShader:"\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform float dpr;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\nuniform vec4 res;\nuniform vec2 parent;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n\n  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;\n  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);\n\n\n  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n",transparent:!0,opacity:1}),U=new THREE.Scene,H=new THREE.PlaneBufferGeometry(n.offsetWidth,n.offsetHeight,1),E=new THREE.Mesh(H,x),U.add(E),window.addEventListener("resize",function(e){n.offsetHeight/n.offsetWidth<D?(S=1,b=n.offsetHeight/n.offsetWidth/D):(S=n.offsetWidth/n.offsetHeight*D,b=1),E.material.uniforms.res.value=new THREE.Vector4(n.offsetWidth,n.offsetHeight,S,b),C.setSize(n.offsetWidth,n.offsetHeight),L()}),this.next=M,this.playSlideshow=function(){w=a.map(function(e,t){var n=t==a.length-1?0:t+1;return F=R||W.load(e,L),R=W.load(a[n],L),F.magFilter=R.magFilter=THREE.LinearFilter,F.minFilter=R.minFilter=THREE.LinearFilter,{currentIndex:t,texture1:F,texture2:R}});var e=0;return _(e),P=setInterval(function(){M(),_(e=y),R=w[e].texture2,x.uniforms.texture1.value=F=w[e].texture1,x.uniforms.texture2.value=R,x.uniforms.dispFactor.value=0},g)},this.stopSlideshow=function(){P&&clearInterval(P)},this.previous=function(){gsap.to(x.uniforms.dispFactor,{duration:v,value:0,ease:p,onUpdate:L,onComplete:L})}}else console.warn("One or more images are missing");else console.warn("Parent missing");function M(){gsap.to(x.uniforms.dispFactor,{duration:m,value:1,ease:p,onUpdate:L,onComplete:L})}function _(e){h=e,y=e==a.length-1?0:e+1}}});
//# sourceMappingURL=displacement-slideshow.umd.js.map