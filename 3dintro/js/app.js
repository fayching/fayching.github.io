(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],h=0,u=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),a=i.n(n);a.a},"10b0":function(t,e,i){t.exports=i.p+"img/title2.png"},"275f":function(t,e,i){},"4a9a":function(t,e,i){t.exports=i.p+"img/title3.png"},5580:function(t,e,i){t.exports=i.p+"img/title1.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("HelloWorld")],1)},s=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"bg",attrs:{src:i("d1b4")}}),n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},[n("div",{staticClass:"mod_box swiper-slide"},[n("div",{staticClass:"mod_title"},[n("img",{staticClass:"title",attrs:{src:i("5580"),width:"209"}})]),n("div",{staticClass:"mod_model",attrs:{id:"toy1"}})]),n("div",{staticClass:"mod_box swiper-slide"},[n("div",{staticClass:"mod_title"},[n("img",{staticClass:"title",attrs:{src:i("10b0"),width:"317"}})]),n("div",{staticClass:"mod_model",attrs:{id:"toy2"}})]),n("div",{staticClass:"mod_box swiper-slide"},[n("div",{staticClass:"mod_title"},[n("img",{staticClass:"title",attrs:{src:i("4a9a"),width:"322"}})]),n("div",{staticClass:"mod_model",attrs:{id:"toy3"}})])])])])}],l=(i("275f"),i("a41b"),i("90f5"),i("4160"),i("d3b7"),i("159b"),i("d4ec")),c=i("bee2"),d=window.THREE=i("5a89");i("ff19"),i("698e"),i("af90");var h=["map","aoMap","emissiveMap","glossinessMap","metalnessMap","normalMap","roughnessMap","specularMap"],u=function(){function t(e,i){Object(l["a"])(this,t),this.options=i,this.el=e,this.lights=[],this.content=null,this.mixer=null,this.clips=[],this.prevTime=0,this.state={addLights:!0,exposure:1,textureEncoding:"sRGB",directIntensity:4,directColor:16777215},this.scene=new d.Scene;var n=216/Math.PI;this.defaultCamera=new d.PerspectiveCamera(n,e.clientWidth/e.clientHeight,.01,1e3),this.activeCamera=this.defaultCamera,this.scene.add(this.defaultCamera),this.renderer=window.renderer=new d.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.physicallyCorrectLights=!0,this.renderer.gammaOutput=!0,this.renderer.gammaFactor=2.2,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e.clientWidth,e.clientHeight),this.controls=new d.OrbitControls(this.defaultCamera,this.renderer.domElement),this.controls.autoRotate=!1,this.controls.target.set(0,0,0),this.controls.enableZoom=!1,this.controls.minPolarAngle=Math.PI/2.4,this.controls.maxPolarAngle=Math.PI/2.4,this.controls.autoRotateSpeed=10,this.el.appendChild(this.renderer.domElement),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize.bind(this),!1)}return Object(c["a"])(t,[{key:"animate",value:function(t){requestAnimationFrame(this.animate);var e=(t-this.prevTime)/1e3;this.controls.update(),this.mixer&&this.mixer.update(e),this.render(),this.prevTime=t}},{key:"render",value:function(){this.renderer.render(this.scene,this.activeCamera)}},{key:"resize",value:function(){var t=this.el.parentElement,e=t.clientHeight,i=t.clientWidth;this.defaultCamera.aspect=i/e,this.defaultCamera.updateProjectionMatrix(),this.renderer.setSize(i,e)}},{key:"loadLight",value:function(t){var e=new d.ObjectLoader,i=this;e.load(t,(function(t){console.log(t),i.scene.add(t)}))}},{key:"load",value:function(t){var e=this;return new Promise((function(i,n){var a=new d.LoadingManager,s=new d.GLTFLoader(a);s.setCrossOrigin("anonymous");var r=new d.DRACOLoader;r.setDecoderPath("draco/"),s.setDRACOLoader(r),s.load(t,(function(t){var n=t.scene||t.scenes[0];n.traverse((function(t){t instanceof d.Mesh&&(t.castShadow=!0,t.receiveShadow=!0)}));var a=e.clips=t.animations||[];console.log(a),e.setContent(n,a),i(t)}),(function(t){console.log(t.loaded/t.total*100+"% loaded")}),(function(t){alert(t),n()}))}))}},{key:"setContent",value:function(t,e){this.clear();var i=(new d.Box3).setFromObject(t),n=i.getSize(new d.Vector3).length(),a=i.getCenter(new d.Vector3);this.controls.reset(),t.position.x+=t.position.x-a.x,t.position.y+=t.position.y-a.y,t.position.z+=t.position.z-a.z,this.defaultCamera.near=n/100,this.defaultCamera.far=100*n,this.defaultCamera.updateProjectionMatrix(),this.defaultCamera.position.copy(a),this.defaultCamera.position.x+=n/2,this.defaultCamera.position.y+=n/5,this.defaultCamera.position.z+=n/2,this.defaultCamera.lookAt(a),this.controls.enabled=!0,this.activeCamera=this.defaultCamera,this.controls.saveState(),this.scene.add(t),this.content=t,this.state.addLights=!0,this.setClips(e),this.addLights(),window.content=this.content}},{key:"playAllClips",value:function(){var t=this;this.clips.forEach((function(e){t.mixer.clipAction(e).reset().play()}))}},{key:"setClips",value:function(t){this.mixer&&(this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.mixer.getRoot()),this.mixer=null),t.length&&(this.mixer=new d.AnimationMixer(this.content))}},{key:"addLights",value:function(){var t=new d.DirectionalLight(15382712,2.65);t.position.set(42.934,50.142,7.5),t.castShadow=!0,this.defaultCamera.add(t);var e=new d.PointLight(16777136,.56,0,1);e.position.set(12.722,13.147,-8.361),e.castShadow=!0;var i=new d.AmbientLight(16777215,1);i.position.set(0,38.143,0),this.defaultCamera.add(i);var n=new d.PointLight(16744640,.68,0,8.64);n.position.set(-20.329,27.184,-16.231),n.castShadow=!0;var a=new d.PointLight(16738850,2.62,0,50);a.position.set(-12.678,11.788,7.962),a.castShadow=!0;var s=new d.DirectionalLight(16777215,.65);s.position.set(100,100,0),s.castShadow=!0,this.defaultCamera.add(s)}},{key:"clear",value:function(){this.content&&(this.scene.remove(this.content),this.content.traverse((function(t){t.isMesh&&t.geometry.dispose()})),p(this.content,(function(t){h.forEach((function(e){t[e]&&t[e].dispose()}))})))}}]),t}();function p(t,e){t.traverse((function(t){if(t.isMesh){var i=Array.isArray(t.material)?t.material:[t.material];i.forEach(e)}}))}var f=i("b619"),m={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){new f["a"](".swiper-container",{direction:"vertical"});var t=new u(document.getElementById("toy1"));t.load("./TOUTU/TOUTU_JING-processed.glb");var e=new u(document.getElementById("toy2"));e.load("./TOUTU/TOUTU_JING.glb").then((function(){e.playAllClips()}))}},v=m,g=i("2877"),w=Object(g["a"])(v,r,o,!1,null,"3c20b409",null),C=w.exports,b={name:"app",components:{HelloWorld:C}},y=b,x=(i("034f"),Object(g["a"])(y,a,s,!1,null,null,null)),O=x.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,i){},"90f5":function(t,e,i){},a41b:function(t,e,i){},d1b4:function(t,e,i){t.exports=i.p+"img/bg.jpg"}});