var Load3D = {
	

	init: function(){
		var container,lightObj,fbxObj, controls, camera, scene, renderer, light, mixer;
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
		light.intensity = 0.2;
		scene.add( light );

		var lightLoader = new THREE.ObjectLoader(); 
		lightLoader.load(lightObj,function(obj){ 
			obj.scale.x = obj.scale.y = obj.scale.z =1; 
			scene.add(obj); 
		});
		var loader = new THREE.FBXLoader();
		loader.load(fbxObj, function ( object ) {

			mixer = new THREE.AnimationMixer( object );

			var action = mixer.clipAction( object.animations[ 0 ] );
			action.play();
			object.traverse( function ( child ) {

				if ( child.isMesh ) {

					child.castShadow = true;
					child.receiveShadow = true;

				}

			} );
			object.scale.set(1, 1, 1);
			scene.add( object );

		} );
		renderer = new THREE.WebGLRenderer( { alpha:true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.shadowMap.enabled = true;
		container.appendChild( renderer.domElement );

		window.addEventListener( 'resize', this.onWindowResize, false );
	},
	onWindowResize: function () {

		camera.aspect = window.innerWidth/window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	},
	animate: function () {
		requestAnimationFrame(animate);
		var delta = clock.getDelta();
		if ( mixer ) mixer.update( delta );
		renderer.render( scene, camera );
	}
}


// browserify support
if ( typeof module === 'object' ) {

	module.exports = Load3D;

}
