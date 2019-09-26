        
        
        if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
		var currentPage = 0;
		load3d(document.getElementById('toy1'),'../style/img/model/TOUTU.json','../style/img/model/TOUTU.FBX');
		load3d(document.getElementById('toy2'),'../style/img/model/HUYAN.json','../style/img/model/HUYAN.FBX');
		load3d(document.getElementById('toy3'),'../style/img/model/SEMANG.json','../style/img/model/SEMANG.FBX');
		
		function load3d(dom,obj1,obj2){
			var container,  controls;
			var camera, scene, renderer, light, mixer;

			var clock = new THREE.Clock();

			init();
			animate();

			function init() {

				container = dom;

				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.01, 1000 );
				camera.position.set( 0, 30, 80 );
				camera.rotation.set(10, 10, 0);
				controls = new THREE.OrbitControls( camera );
				controls.target.set( 0, 0, 0 );
				controls.update();
				controls.enableZoom = false;
				scene = new THREE.Scene();
				

				light = new THREE.AmbientLight( 0xffffff );
				light.position.set( 0, 0, 0 ); 
				light.intensity = 0.1;
				scene.add( light );

				var loader1 = new THREE.ObjectLoader(); 
				loader1.load(obj1,function(obj){ 
				obj.scale.x = obj.scale.y = obj.scale.z =1; 
					scene.add(obj); 
				});
				
				var loader = new THREE.FBXLoader();
				loader.load(obj2, function ( object ) {

					mixer = new THREE.AnimationMixer( object );

					var action = mixer.clipAction( object.animations[ 0 ] );
					action.play();
					console.log(object.children)

					object.traverse( function ( child ) {

						if ( child.isMesh ) {

							child.castShadow = true;
							child.receiveShadow = true;

						}

					} );
					object.scale.set(1, 1, 1);
					scene.add( object );

				} );

				renderer = new THREE.WebGLRenderer( { alpha:true,antialias:true} );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.shadowMap.enabled = true;
				container.appendChild( renderer.domElement );

				window.addEventListener( 'resize', onWindowResize, false );

			

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth/window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//
			
			function animate() {
				
				
				requestAnimationFrame(animate);

				var delta = clock.getDelta();
				if ( mixer ) mixer.update( delta );

				renderer.render( scene, camera );


			}
		}