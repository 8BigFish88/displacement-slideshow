!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).displacementSlideshow=t()}(this,function(){return function(e){function t(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]}console.log("%c Hover effect by Robin Delaporte: https://github.com/robin-dela/hover-effect ","color: #bada55; font-size: 0.8rem");var n=e.parent,i=e.displacementImage,o=e.image1,r=e.image2,a=t(e.images,[e.image1,e.image2]),s=t(e.imagesRatio,1),f=t(e.intensity1,e.intensity,1),l=t(e.intensity2,e.intensity,1),d=t(e.angle,Math.PI/4),u=t(e.angle1,d),c=t(e.angle2,3*-d),p=t(e.easing,"power1.inOut"),v=t(e.speedIn,e.speed,1.6),m=t(e.speedOut,e.speed,1.2),g=t(e.transitionDelay,3e3),h=0,y=1,E=void 0,x=void 0,H=void 0,w=null,R=null,F=null,T=null,W=null;if(n)if((a||o&&r)&&i){var P,S,b=new THREE.Scene,U=new THREE.OrthographicCamera(n.offsetWidth/-2,n.offsetWidth/2,n.offsetHeight/2,n.offsetHeight/-2,1,1e3),V=new THREE.WebGLRenderer({antialias:!1,alpha:!0}),C=s,D=function(){V.render(b,U)};U.position.z=1,V.setPixelRatio(2),V.setClearColor(16777215,0),V.setSize(n.offsetWidth,n.offsetHeight),n.appendChild(V.domElement),n.offsetHeight/n.offsetWidth<C?(P=1,S=n.offsetHeight/n.offsetWidth/C):(P=n.offsetWidth/n.offsetHeight*C,S=1),(T=new THREE.TextureLoader).crossOrigin="",(F=T.load(i,D)).magFilter=F.minFilter=THREE.LinearFilter,z(),E=new THREE.ShaderMaterial({uniforms:{intensity1:{type:"f",value:f},intensity2:{type:"f",value:l},dispFactor:{type:"f",value:0},angle1:{type:"f",value:u},angle2:{type:"f",value:c},texture1:{type:"t",value:w},texture2:{type:"t",value:R},disp:{type:"t",value:F},res:{type:"vec4",value:new THREE.Vector4(n.offsetWidth,n.offsetHeight,P,S)},dpr:{type:"f",value:window.devicePixelRatio}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",fragmentShader:"\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform float dpr;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\nuniform vec4 res;\nuniform vec2 parent;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n\n  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;\n  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);\n\n\n  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n",transparent:!0,opacity:1}),b=new THREE.Scene,H=new THREE.PlaneBufferGeometry(n.offsetWidth,n.offsetHeight,1),x=new THREE.Mesh(H,E),b.add(x),window.addEventListener("resize",function(e){n.offsetHeight/n.offsetWidth<C?(P=1,S=n.offsetHeight/n.offsetWidth/C):(P=n.offsetWidth/n.offsetHeight*C,S=1),x.material.uniforms.res.value=new THREE.Vector4(n.offsetWidth,n.offsetHeight,P,S),V.setSize(n.offsetWidth,n.offsetHeight),D()}),this.next=M,this.playSlideshow=function(){var e=0;return _(e),W=setInterval(function(){M(),_(e=y),z(),E.uniforms.texture1.value=w,E.uniforms.texture2.value=R,E.uniforms.dispFactor.value=0},g)},this.stopSlideshow=function(){W&&clearInterval(W)},this.previous=function(){gsap.to(E.uniforms.dispFactor,{duration:m,value:0,ease:p,onUpdate:D,onComplete:D})}}else console.warn("One or more images are missing");else console.warn("Parent missing");function M(){gsap.to(E.uniforms.dispFactor,{duration:v,value:1,ease:p,onUpdate:D,onComplete:D})}function _(e){h=e,y=e==a.length-1?0:e+1}function z(){w=R||T.load(a[h],D),R=T.load(a[y],D),w.magFilter=R.magFilter=THREE.LinearFilter,w.minFilter=R.minFilter=THREE.LinearFilter}}});
//# sourceMappingURL=displacement-slideshow.umd.js.map
