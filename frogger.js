var frogger = (function(){

//http://downloads.khinsider.com/search?search=super+mario+bros+jump
  //https://github.com/alexmackey/threeJsBasicExamples
  
  
  //host on gh-pages

  
  var scene=new THREE.Scene(),
    renderer = new THREE.WebGLRenderer(),
    light= new THREE.AmbientLight(0xffffff),            
    camera,
    road,	
	river,
	vehicle = [6],
	logs = [6],
	bank1,
	bank2,
	grass,
    frog;

	/*
	var scene_over=new THREE.Scene(),
    renderer = new THREE.WebGLRenderer(),
    light= new THREE.AmbientLight(0xffffff);
	
	function initSceneOver(){
		
		renderer.setSize( 3000, 2000 );
        document.getElementById("webgl-container").appendChild(renderer.domElement);

        scene_over.add(light);
                          
        camera = new THREE.PerspectiveCamera(
        45,
     //   window.innerWidth / window.innerHeight,
       3000/2000,
    	1,
        1000
        );
                            
        camera.position.z= 100;            
        scene_over.add( camera ); 
		
	}
	*/
	var audio_main;
	var audio_down;
	var audio_over;
	var audio_level;
	
    function initScene(){
		audio_main  = new Audio('01-super-mario-bros.mp3');
      //  audio_main.play();
		
        renderer.setSize( 3000, 2000 );
		renderer.shadowMapEnabled = true;

		//THREE.ImageUtils.crossOrigin = 'anonymous'
		
        document.getElementById("webgl-container").appendChild(renderer.domElement);


		light.castShadow = true;

		light.position.set(0, 50, 0);

        //light.shadowMapWidth = 2048;
        //light.shadowMapHeight = 2048;
		
        scene.add(light);
                          
        camera = new THREE.PerspectiveCamera(
        45,
     //   window.innerWidth / window.innerHeight,
       3000/2000,
    	1,
        1000
        );
          
    //   camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );

		  
        camera.position.z= 130;            
        scene.add( camera ); 

		
		var textureroad = THREE.ImageUtils.loadTexture('road.jpg');
		textureroad.wrapS = THREE.RepeatWrapping;
        textureroad.wrapT = THREE.RepeatWrapping;
		textureroad.repeat.set(10, 1);

		
		var roadMaterial = new THREE.MeshPhongMaterial( {map: textureroad, side: THREE.DoubleSide} );
		road = new THREE.Mesh( new THREE.BoxGeometry(200, 25), roadMaterial);
        road . position.y = -10;
		
		road.receiveShadow = true;

		scene.add(road);
		
		vehicle[0] = new THREE.Mesh(
        new THREE.BoxGeometry(14,5,5),
        new THREE.MeshBasicMaterial({color: 0xFF4500})
        );
  
        vehicle[0].position.y = -15;
		vehicle[0].position.x = -60;
		
		vehicle[1] = new THREE.Mesh(
        new THREE.BoxGeometry(7,5,5),
        new THREE.MeshBasicMaterial({color: 0x004500})
        );
  
        vehicle[1].position.y = -15;
		vehicle[1].position.x = 0;
		
		vehicle[2] = new THREE.Mesh(
        new THREE.BoxGeometry(9,5,5),
        new THREE.MeshBasicMaterial({color: 0x0045FF})
        );
  
        vehicle[2].position.y = -15;
		vehicle[2].position.x = 60;

		vehicle[3] = new THREE.Mesh(
        new THREE.BoxGeometry(10,5,5),
        new THREE.MeshBasicMaterial({color: 0x4545FF})
        );
  
        vehicle[3].position.y = -5;
		vehicle[3].position.x = 60;
		
		vehicle[4] = new THREE.Mesh(
        new THREE.BoxGeometry(12,5,5),
        new THREE.MeshBasicMaterial({color: 0xFF45FF})
        );
  
        vehicle[4].position.y = -5;
		vehicle[4].position.x = 0;
		
		vehicle[5] = new THREE.Mesh(
        new THREE.BoxGeometry(8,5,5),
        new THREE.MeshBasicMaterial({color: 0x454545})
        );
  
        vehicle[5].position.y = -5;
		vehicle[5].position.x = -60;
		
		
		vehicle[0].geometry.computeBoundingBox();
		vehicle[1].geometry.computeBoundingBox();
		vehicle[2].geometry.computeBoundingBox();
		vehicle[3].geometry.computeBoundingBox();
		vehicle[4].geometry.computeBoundingBox();
		vehicle[5].geometry.computeBoundingBox();

		vehicle[0].castShadow = true;

		
        scene.add(vehicle[0]);
		scene.add(vehicle[1]);
        scene.add(vehicle[2]);
		scene.add(vehicle[3]);
		scene.add(vehicle[4]);
        scene.add(vehicle[5]);

		
		
		
		
		
		var textureriver = THREE.ImageUtils.loadTexture('river.jpg');
		textureriver.wrapS = THREE.RepeatWrapping;
        textureriver.wrapT = THREE.RepeatWrapping;
		textureriver.repeat.set(1, 1);
		
		var riverMaterial = new THREE.MeshPhongMaterial( {map: textureriver, side: THREE.DoubleSide} );
		river = new THREE.Mesh( new THREE.BoxGeometry(200, 25), riverMaterial);
        river . position.y = 20;
		
		scene.add(river);
		
	    logs[0] = new THREE.Mesh(
        new THREE.BoxGeometry(17,3,3),
        new THREE.MeshBasicMaterial({color: 0xA52A2A})
        );
  
        logs[0].position.y = 15;
		logs[0].position.x = -60;
		
		logs[1] = new THREE.Mesh(
        new THREE.BoxGeometry(7,3,3),
        new THREE.MeshBasicMaterial({color: 0xA52A2A})
        );
  
        logs[1].position.y = 15;
		logs[1].position.x = 0;
		
		logs[2] = new THREE.Mesh(
        new THREE.BoxGeometry(10,3,3),
        new THREE.MeshBasicMaterial({color: 0xA52A2A})
        );
  
        logs[2].position.y = 15;
		logs[2].position.x = 60;
		
		logs[3] = new THREE.Mesh(
        new THREE.BoxGeometry(17,3,3),
        new THREE.MeshBasicMaterial({color: 0xA52A2A})
        );
  
        logs[3].position.y = 25;
		logs[3].position.x = -60;
		
		logs[4] = new THREE.Mesh(
        new THREE.BoxGeometry(10,3,3),
        new THREE.MeshBasicMaterial({color: 0xA52A2A})
        );
  
        logs[4].position.y = 25;
		logs[4].position.x = 0;
		
		logs[5] = new THREE.Mesh(
        new THREE.BoxGeometry(7,3,3),
        new THREE.MeshBasicMaterial({color: 0xA52A2A})
        );
  
        logs[5].position.y = 25;
		logs[5].position.x = 60;

		logs[0].geometry.computeBoundingBox();
		logs[1].geometry.computeBoundingBox();
		logs[2].geometry.computeBoundingBox();
		logs[3].geometry.computeBoundingBox();
		logs[4].geometry.computeBoundingBox();
		logs[5].geometry.computeBoundingBox();

		
		
        scene.add(logs[0]);
        scene.add(logs[1]);
        scene.add(logs[2]);
        scene.add(logs[3]);
        scene.add(logs[4]);
        scene.add(logs[5]);

		
		
		var texturebank = THREE.ImageUtils.loadTexture('bank.jpg');
		texturebank.wrapS = THREE.RepeatWrapping;
        texturebank.wrapT = THREE.RepeatWrapping;
		texturebank.repeat.set(10, 1);
		
		var bankMaterial = new THREE.MeshPhongMaterial( {map: texturebank, side: THREE.DoubleSide} );
		bank1 = new THREE.Mesh( new THREE.BoxGeometry(200, 5), bankMaterial);
        bank1 . position.y = 5;
		
		scene.add(bank1);
		
		bank2 = new THREE.Mesh( new THREE.BoxGeometry(200, 5), bankMaterial);
        bank2 . position.y = 35;
		
		scene.add(bank2);
		
		
		var texturegrass = THREE.ImageUtils.loadTexture('grass.jpg');

		texturegrass.wrapS = THREE.RepeatWrapping;
        texturegrass.wrapT = THREE.RepeatWrapping;
		texturegrass.repeat.set(10, 1);
		
		var grassMaterial = new THREE.MeshPhongMaterial( {map: texturegrass, side: THREE.DoubleSide} );
		grass = new THREE.Mesh( new THREE.BoxGeometry(200, 20), grassMaterial);
        grass . position.y = -32.5;
		
		scene.add(grass);
		
		
		
        frog = new THREE.Mesh(
        new THREE.BoxGeometry(5,5,5),
        new THREE.MeshBasicMaterial({color: 0x00FF00})
        );
  
        frog.position.y = -25;

	    frog.geometry.computeBoundingBox();

		
        scene.add(frog);

        render();
    }

	
	function animate(){
		
		logs[0].translateX(1.0);
        logs[1].translateX(1.0);
        logs[2].translateX(1.0);
		logs[3].translateX(-1.5);
        logs[4].translateX(-1.5);
        logs[5].translateX(-1.5);
		        
		if( logs[0].position.x == 105)		
		logs[0].position.x = -95;
     	if( logs[1].position.x == 105)		
		logs[1].position.x = -95;
	    if( logs[2].position.x == 105)		
		logs[2].position.x = -95;
	    if( logs[3].position.x == -96)		
		logs[3].position.x = 105;
     	if( logs[4].position.x == -96)		
		logs[4].position.x = 105;
	    if( logs[5].position.x == -96)		
		logs[5].position.x = 105;
	    
		vehicle[0].translateX(1);
		vehicle[1].translateX(1);
		vehicle[2].translateX(1);
		vehicle[3].translateX(-1.5);
		vehicle[4].translateX(-1.5);
		vehicle[5].translateX(-1.5);

		if( vehicle[0].position.x == 105)		
		vehicle[0].position.x = -95;
	    if( vehicle[1].position.x == 105)		
		vehicle[1].position.x = -95;
	    if( vehicle[2].position.x == 105)		
		vehicle[2].position.x = -95;
	    if( vehicle[3].position.x == -96)		
		vehicle[3].position.x = 105;
	    if( vehicle[4].position.x == -96)		
		vehicle[4].position.x = 105;
	    if( vehicle[5].position.x == -96)		
		vehicle[5].position.x = 105;
		
		
		
	}
	
	var life_lost = 0;
	
	function game_over(){
		
					     audio_main.pause();
                         audio_over = new Audio('16-game-over.mp3');
                         audio_over.play();
					     alert('GAME OVER');	
						 life_lost = 0;

                        						 
	}
	
	function next_life(){
		life_lost++;		     frog . position.x = 0; frog.position.y = -25;

		   if(life_lost != 3){
			 
			 audio_main.pause();
		     audio_down = new Audio('15-1-down.mp3');
             audio_down.play();
		     alert('TRY AGAIN');
			 audio_main.play();
		   }			 
	}


	function change_level(){
		
		life_lost = 0;		     
		
		     frog . position.x = 0; frog.position.y = -25;
			 
			 audio_main.pause();
		     audio_level = new Audio('04-area-clear.mp3');
             audio_level.play();
		     alert('CONGRAULSTIONS !!');
			 audio_main.play();
		   		 		
	}
		
	var frogposition;
	
	function check_collision(){
		
		var vehicleposition0 = new THREE.Box3().setFromObject( vehicle[0] );
		var vehicleposition1 = new THREE.Box3().setFromObject( vehicle[1] );
		var vehicleposition2 = new THREE.Box3().setFromObject( vehicle[2] );
		var vehicleposition3 = new THREE.Box3().setFromObject( vehicle[3] );
		var vehicleposition4 = new THREE.Box3().setFromObject( vehicle[4] );
		var vehicleposition5 = new THREE.Box3().setFromObject( vehicle[5] );
		frogposition       = new THREE.Box3().setFromObject( frog );
		  
		  if(vehicleposition0.isIntersectionBox(frogposition)){
			next_life();
		  }
		  if(vehicleposition1.isIntersectionBox(frogposition)){
			next_life();
		  }
		  if(vehicleposition2.isIntersectionBox(frogposition)){
			next_life();
		  }
		  if(vehicleposition3.isIntersectionBox(frogposition)){
			next_life();
		  }
		  if(vehicleposition4.isIntersectionBox(frogposition)){
			next_life();
		  }
		  if(vehicleposition5.isIntersectionBox(frogposition)){
			next_life();
		  }
		  
	}
	
	function check_log(){
		
		var logsposition0 = new THREE.Box3().setFromObject( logs[0] );
		var logsposition1 = new THREE.Box3().setFromObject( logs[1] );
		var logsposition2 = new THREE.Box3().setFromObject( logs[2] );
		var logsposition3 = new THREE.Box3().setFromObject( logs[3] );
		var logsposition4 = new THREE.Box3().setFromObject( logs[4] );
		var logsposition5 = new THREE.Box3().setFromObject( logs[5] );

		if(logsposition0.isIntersectionBox(frogposition))
		  frog.translateX(1.0);		
	  else if(logsposition1.isIntersectionBox(frogposition))
		  frog.translateX(1.0);		
	  else if(logsposition2.isIntersectionBox(frogposition))
		  frog.translateX(1.0);		
	  else if(logsposition3.isIntersectionBox(frogposition))
		  frog.translateX(-1.5);		
	  else if(logsposition4.isIntersectionBox(frogposition))
		  frog.translateX(-1.5);		
	  else if(logsposition5.isIntersectionBox(frogposition))
		  frog.translateX(-1.5);		
	  else 
		  next_life();
	}
	

    function render(){
         
		renderer.render(scene, camera); 
        animate();	
		check_collision();
		if(life_lost == 3)
		  game_over();
	    if((frog.position.y >=10) && (frog.position.y<=30))
	      check_log();
	    if(frog.position.y>30)
	      change_level();		
        requestAnimationFrame(render);        
    }

	
	function checkKey(e) {

        var left = 37,
            up = 38,
            right = 39,
            down = 40,
            increment = 10;

        e = e || window.event;

        if (e.keyCode == up) {
            frog.position.y += increment;
        } else if (e.keyCode == down) {
            frog.position.y -= increment;
        } else if (e.keyCode == left) {
            frog.position.x -= increment;
        } else if (e.keyCode == right) {
            frog.position.x += increment;
        }
		
		
         else if (e.keyCode == 81) {
            camera.position.z -= increment;
        } else if (e.keyCode == 87) {
            camera.position.z += increment;
        }
		
		
		
		
	     
       
	
	}
	
	
    window.onload = initScene;
    
	window.onkeydown = checkKey;

  



})();