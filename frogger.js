var frogger = (function(){

  
  var scene=new THREE.Scene(),
    renderer = new THREE.WebGLRenderer(),
   // light= new THREE.DirectionalLight(new THREE.Color("#ffffff")),            
    light= new THREE.AmbientLight(0xffffff),            
    camera,
    road,	
	river,
	vehicle = [12],
	logs = [12],
	bank1,
	bank2,
	grass,
	monster,
	snake,
    frog;

	
	var audio_main;
	var audio_down;
	var audio_over;
	var audio_level;
	var score = 0;
	var life_lost = 0;
	var frogposition;
	var pressed_up = 0;
	var translatespeed = 1;
	
    function initScene(){
		audio_main  = new Audio('01-super-mario-bros.mp3');
        audio_main.play();
		
		
	    renderer.setSize( 3000,2000  );

		
		
		renderer.shadowMapEnabled = true;

		THREE.ImageUtils.crossOrigin = 'anonymous'
		
        document.getElementById("webgl-container").appendChild(renderer.domElement);



		light.position.set(0, 50, 0);

		light.castShadow = true;

       // light.shadowMapWidth = 2048;
       // light.shadowMapHeight = 2048;
		
        scene.add(light);
                          
        camera = new THREE.PerspectiveCamera(
        45,
        3000/2000,
    	1,
        1000
        );
          
		camera.position.z =  130;
	   
        scene.add( camera ); 

		
		
		/////////// ADD ROAD /////////
		
		var textureroad = THREE.ImageUtils.loadTexture("https://nakulgrover.github.io/road.jpg");
		textureroad.wrapS = THREE.RepeatWrapping;
        textureroad.wrapT = THREE.RepeatWrapping;
		textureroad.repeat.set(10, 1);

		
		var roadMaterial = new THREE.MeshPhongMaterial( {map: textureroad, side: THREE.DoubleSide} );
		road = new THREE.Mesh( new THREE.PlaneGeometry(200, 50), roadMaterial);
        road . position.y = -15;
		
		road.receiveShadow = true;

		scene.add(road);
		
		/////////// ADD VEHICLE /////////

		
		
		vehicle[0] = new THREE.Mesh(
        new THREE.BoxGeometry(14,5,15),
        new THREE.MeshBasicMaterial({color: 0xFF4500})
        );
  
        vehicle[0].position.y = -30;
		vehicle[0].position.x = -60;
		
		vehicle[1] = new THREE.Mesh(
        new THREE.BoxGeometry(7,5,5),
        new THREE.MeshBasicMaterial({color: 0x004500})
        );
  
        vehicle[1].position.y = -30;
		vehicle[1].position.x = 0;
		
		vehicle[2] = new THREE.Mesh(
        new THREE.BoxGeometry(9,5,5),
        new THREE.MeshBasicMaterial({color: 0x0045FF})
        );
  
        vehicle[2].position.y = -30;
		vehicle[2].position.x = 60;

		vehicle[3] = new THREE.Mesh(
        new THREE.BoxGeometry(10,5,15),
        new THREE.MeshBasicMaterial({color: 0x4545FF})
        );
  
        vehicle[3].position.y = -20;
		vehicle[3].position.x = 60;
		
		vehicle[4] = new THREE.Mesh(
        new THREE.BoxGeometry(12,5,10),
        new THREE.MeshBasicMaterial({color: 0xFF45FF})
        );
  
        vehicle[4].position.y = -20;
		vehicle[4].position.x = 0;
		
		vehicle[5] = new THREE.Mesh(
        new THREE.BoxGeometry(8,5,5),
        new THREE.MeshBasicMaterial({color: 0x454545})
        );
  
        vehicle[5].position.y = -20;
		vehicle[5].position.x = -60;
		
		vehicle[6] = new THREE.Mesh(
        new THREE.BoxGeometry(14,5,10),
        new THREE.MeshBasicMaterial({color: 0xFF4500})
        );
  
        vehicle[6].position.y = -10;
		vehicle[6].position.x = -60;
		
		vehicle[7] = new THREE.Mesh(
        new THREE.BoxGeometry(7,5,5),
        new THREE.MeshBasicMaterial({color: 0x004500})
        );
  
        vehicle[7].position.y = -10;
		vehicle[7].position.x = 0;
		
		vehicle[8] = new THREE.Mesh(
        new THREE.BoxGeometry(9,5,10),
        new THREE.MeshBasicMaterial({color: 0x0045FF})
        );
  
        vehicle[8].position.y = -10;
		vehicle[8].position.x = 60;

		vehicle[9] = new THREE.Mesh(
        new THREE.BoxGeometry(10,5,5),
        new THREE.MeshBasicMaterial({color: 0x4545FF})
        );
  
        vehicle[9].position.y = 0;
		vehicle[9].position.x = 60;
		
		vehicle[10] = new THREE.Mesh(
        new THREE.BoxGeometry(12,5,5),
        new THREE.MeshBasicMaterial({color: 0xFF45FF})
        );
  
        vehicle[10].position.y = 0;
		vehicle[10].position.x = 0;
		
		vehicle[11] = new THREE.Mesh(
        new THREE.BoxGeometry(8,5,10),
        new THREE.MeshBasicMaterial({color: 0x454545})
        );
  
        vehicle[11].position.y = 0;
		vehicle[11].position.x = -60;
		
		
		vehicle[0].geometry.computeBoundingBox();
		vehicle[1].geometry.computeBoundingBox();
		vehicle[2].geometry.computeBoundingBox();
		vehicle[3].geometry.computeBoundingBox();
		vehicle[4].geometry.computeBoundingBox();
		vehicle[5].geometry.computeBoundingBox();
		vehicle[6].geometry.computeBoundingBox();
		vehicle[7].geometry.computeBoundingBox();
		vehicle[8].geometry.computeBoundingBox();
		vehicle[9].geometry.computeBoundingBox();
		vehicle[10].geometry.computeBoundingBox();
		vehicle[11].geometry.computeBoundingBox();

		vehicle[0].castShadow = true;
		vehicle[1].castShadow = true;
		vehicle[2].castShadow = true;
		vehicle[3].castShadow = true;
		vehicle[4].castShadow = true;
		vehicle[5].castShadow = true;
		vehicle[6].castShadow = true;
		vehicle[7].castShadow = true;
		vehicle[8].castShadow = true;
		vehicle[9].castShadow = true;
		vehicle[10].castShadow = true;
		vehicle[11].castShadow = true;

		
        scene.add(vehicle[0]);
		scene.add(vehicle[1]);
        scene.add(vehicle[2]);
		scene.add(vehicle[3]);
		scene.add(vehicle[4]);
        scene.add(vehicle[5]);
		scene.add(vehicle[6]);
		scene.add(vehicle[7]);
        scene.add(vehicle[8]);
		scene.add(vehicle[9]);
		scene.add(vehicle[10]);
        scene.add(vehicle[11]);

		
		
	    /////////// ADD RIVER /////////

		var textureriver = THREE.ImageUtils.loadTexture('https://nakulgrover.github.io/river.jpg');
		textureriver.wrapS = THREE.RepeatWrapping;
        textureriver.wrapT = THREE.RepeatWrapping;
		textureriver.repeat.set(1, 1);
		
		var riverMaterial = new THREE.MeshPhongMaterial( {map: textureriver, side: THREE.DoubleSide} );
		river = new THREE.Mesh( new THREE.BoxGeometry(200, 35), riverMaterial);
        river . position.y = 30;
		
		scene.add(river);
		
	    
		/////////// ADD LOGS /////////

		
		var texturelog = THREE.ImageUtils.loadTexture('https://nakulgrover.github.io/logs.jpg');

		texturelog.wrapS = THREE.RepeatWrapping;
        texturelog.wrapT = THREE.RepeatWrapping;
		texturelog.repeat.set(10, 1);
		
		var logMaterial = new THREE.MeshPhongMaterial( {map: texturelog, side: THREE.DoubleSide} );
		logs[0] = new THREE.Mesh( new THREE.BoxGeometry(17,3,3), logMaterial);
        
	    logs[0].position.y = 20;
		logs[0].position.x = -60;
		
		
		
  		logs[1] = new THREE.Mesh( new THREE.BoxGeometry(15,3,3), logMaterial);

  
        logs[1].position.y = 20;
		logs[1].position.x = 0;
		
		
    	logs[2] = new THREE.Mesh( new THREE.BoxGeometry(10,3,3), logMaterial);

        logs[2].position.y = 20;
		logs[2].position.x = 60;
		
		
    	logs[3] = new THREE.Mesh( new THREE.BoxGeometry(17,3,3), logMaterial);

        logs[3].position.y = 30;
		logs[3].position.x = -60;
		
		
    	logs[4] = new THREE.Mesh( new THREE.BoxGeometry(20,3,3), logMaterial);

        logs[4].position.y = 30;
		logs[4].position.x = 0;
		
			
		logs[5] = new THREE.Mesh( new THREE.BoxGeometry(13,3,3), logMaterial);

        logs[5].position.y = 30;
		logs[5].position.x = 60;
		
		
    	logs[6] = new THREE.Mesh( new THREE.BoxGeometry(17,3,3), logMaterial);

        logs[6].position.y = 40;
		logs[6].position.x = -60;
		
		
    	logs[7] = new THREE.Mesh( new THREE.BoxGeometry(10,3,3), logMaterial);

        logs[7].position.y = 40;
		logs[7].position.x = 0;
		
		
    	logs[8] = new THREE.Mesh( new THREE.BoxGeometry(20,3,3), logMaterial);

        logs[8].position.y = 40;
		logs[8].position.x = 60;
		
		

		logs[0].geometry.computeBoundingBox();
		logs[1].geometry.computeBoundingBox();
		logs[2].geometry.computeBoundingBox();
		logs[3].geometry.computeBoundingBox();
		logs[4].geometry.computeBoundingBox();
		logs[5].geometry.computeBoundingBox();
		logs[6].geometry.computeBoundingBox();
		logs[7].geometry.computeBoundingBox();
		logs[8].geometry.computeBoundingBox();

		
        scene.add(logs[0]);
        scene.add(logs[1]);
        scene.add(logs[2]);
        scene.add(logs[3]);
        scene.add(logs[4]);
        scene.add(logs[5]);
		scene.add(logs[6]);
        scene.add(logs[7]);
        scene.add(logs[8]);
      
		/////////// ADD BANK /////////

		
		var texturebank = THREE.ImageUtils.loadTexture('https://nakulgrover.github.io/bank.jpg');
		texturebank.wrapS = THREE.RepeatWrapping;
        texturebank.wrapT = THREE.RepeatWrapping;
		texturebank.repeat.set(10, 1);
		
		var bankMaterial = new THREE.MeshPhongMaterial( {map: texturebank, side: THREE.DoubleSide} );
		bank1 = new THREE.Mesh( new THREE.BoxGeometry(200, 5), bankMaterial);
        bank1 . position.y = 10;
		
		scene.add(bank1);
		
		bank2 = new THREE.Mesh( new THREE.BoxGeometry(200, 7), bankMaterial);
        bank2 . position.y = 51;
		
		scene.add(bank2);
		
		/////////// ADD GRASS /////////

		var texturegrass = THREE.ImageUtils.loadTexture('https://nakulgrover.github.io/grass.jpg');

		texturegrass.wrapS = THREE.RepeatWrapping;
        texturegrass.wrapT = THREE.RepeatWrapping;
		texturegrass.repeat.set(10, 1);
		
		var grassMaterial = new THREE.MeshPhongMaterial( {map: texturegrass, side: THREE.DoubleSide} );
		grass = new THREE.Mesh( new THREE.BoxGeometry(200, 25), grassMaterial);
        grass . position.y = -50;
		
		scene.add(grass);
	
		/////////// ADD FROG /////////

		
		var texturefrog = THREE.ImageUtils.loadTexture('https://nakulgrover.github.io/frog.jpg');

		texturefrog.wrapS = THREE.RepeatWrapping;
        texturefrog.wrapT = THREE.RepeatWrapping;
		texturefrog.repeat.set(1, 0.7);
		
		var frogMaterial = new THREE.MeshPhongMaterial( {map: texturefrog, side: THREE.DoubleSide} );
		frog = new THREE.Mesh( new THREE.BoxGeometry(4,4,4), frogMaterial);
		
        frog.position.y = -40;

	    frog.geometry.computeBoundingBox();

		
        scene.add(frog);
		
		
		///// ADD SNAKE ////
		
		 snake = new THREE.Mesh(
        new THREE.SphereGeometry(2,2,5),
        new THREE.MeshBasicMaterial({color: 0x000000})
        );
  
        snake.position.y = 10;

	    snake.geometry.computeBoundingBox();

		
        scene.add(snake);
	
     	render();
    }

	function animate(){
		
		logs[0].translateX(1.0*translatespeed);
        logs[1].translateX(1.0*translatespeed);
        logs[2].translateX(1.0*translatespeed);
		logs[3].translateX(-1*translatespeed);
        logs[4].translateX(-1*translatespeed);
        logs[5].translateX(-1*translatespeed);
		logs[6].translateX(1.25*translatespeed);
        logs[7].translateX(1.25*translatespeed);
        logs[8].translateX(1.25*translatespeed);
		
		        
		if( logs[0].position.x >= 100)		
		logs[0].position.x = -100;
     	if( logs[1].position.x >= 100)		
		logs[1].position.x = -100;
	    if( logs[2].position.x >= 100)		
		logs[2].position.x = -100;
	    if( logs[3].position.x <= -100)		
		logs[3].position.x = 100;
     	if( logs[4].position.x <= -100)		
		logs[4].position.x = 100;
	    if( logs[5].position.x <= -100)		
		logs[5].position.x = 100;
	    if( logs[6].position.x >= 100)		
		logs[6].position.x = -100;
     	if( logs[7].position.x >= 100)		
		logs[7].position.x = -100;
	    if( logs[8].position.x >= 100)		
		logs[8].position.x = -100;
	 
	    
		vehicle[0].translateX(0.5*translatespeed);
		vehicle[1].translateX(0.5*translatespeed);
		vehicle[2].translateX(0.5*translatespeed);
		vehicle[3].translateX(-1*translatespeed);
		vehicle[4].translateX(-1*translatespeed);
		vehicle[5].translateX(-1*translatespeed);

		vehicle[6].translateX(1*translatespeed);
		vehicle[7].translateX(1*translatespeed);
		vehicle[8].translateX(1*translatespeed);
		vehicle[9].translateX(-1.25*translatespeed);
		vehicle[10].translateX(-1.25*translatespeed);
		vehicle[11].translateX(-1.25*translatespeed);

		
		if( vehicle[0].position.x >= 100)		
		vehicle[0].position.x = -100;
	    if( vehicle[1].position.x >= 100)		
		vehicle[1].position.x = -100;
	    if( vehicle[2].position.x >= 100)		
		vehicle[2].position.x = -100;
	    if( vehicle[3].position.x <= -100)		
		vehicle[3].position.x = 100;
	    if( vehicle[4].position.x <= -100)		
		vehicle[4].position.x = 100;
	    if( vehicle[5].position.x <= -100)		
		vehicle[5].position.x = 100;
      	if( vehicle[6].position.x <= 100)		
		vehicle[6].position.x = -100;
	    if( vehicle[7].position.x >= 100)		
		vehicle[7].position.x = -100;
	    if( vehicle[8].position.x >= 100)		
		vehicle[8].position.x = -100;
	    if( vehicle[9].position.x <= -100)		
		vehicle[9].position.x = 100;
	    if( vehicle[10].position.x <= -100)		
		vehicle[10].position.x = 100;
	    if( vehicle[11].position.x <= -100)		
		vehicle[11].position.x = 100;
		
		snake.translateX(1.0*translatespeed);
		if(snake.position.x >= 100)
		snake.position.x = -100;	
	}
	
	

	function game_over(){
		
					     audio_main.pause();
                         audio_over = new Audio('16-game-over.mp3');
                         audio_over.play();
					     alert('GAME OVER');	
						 life_lost = 0;
						 score = 0; pressed_up = 0;
						 			 document.getElementById("Score").innerHTML = score;

						 			 document.getElementById("numberOfLives").innerHTML = 3;


                        						 
	}
	
	function next_life(){

    	life_lost++;		     
		frog . position.x = 0;
		frog.position.y = -40;
        pressed_up = 0;
		
		if(life_lost != 3){
			 document.getElementById("numberOfLives").innerHTML = 3-life_lost;

			 audio_main.pause();
		     audio_down = new Audio('15-1-down.mp3');
             audio_down.play();
		     alert('TRY AGAIN');
			// audio_main.play();
		   }			 
	}


	function change_level(){
		
		
		     frog . position.x = 0; frog.position.y = -40;
			 
			 score+=100; pressed_up = 0;
			 document.getElementById("Score").innerHTML = score;
			 
			 audio_main.pause();
		     audio_level = new Audio('04-area-clear.mp3');
             audio_level.play();
		     alert('CONGRATULATIONS !!');
			// audio_main.play();
		   		 		
	}
		
	
	function check_collision(){
		
		var vehicleposition0 = new THREE.Box3().setFromObject( vehicle[0] );
		var vehicleposition1 = new THREE.Box3().setFromObject( vehicle[1] );
		var vehicleposition2 = new THREE.Box3().setFromObject( vehicle[2] );
		var vehicleposition3 = new THREE.Box3().setFromObject( vehicle[3] );
		var vehicleposition4 = new THREE.Box3().setFromObject( vehicle[4] );
		var vehicleposition5 = new THREE.Box3().setFromObject( vehicle[5] );
		var vehicleposition6 = new THREE.Box3().setFromObject( vehicle[6] );
		var vehicleposition7 = new THREE.Box3().setFromObject( vehicle[7] );
		var vehicleposition8 = new THREE.Box3().setFromObject( vehicle[8] );
		var vehicleposition9 = new THREE.Box3().setFromObject( vehicle[9] );
		var vehicleposition10 = new THREE.Box3().setFromObject( vehicle[10] );
		var vehicleposition11 = new THREE.Box3().setFromObject( vehicle[11] );
		var snakeposition     = new THREE.Box3() .setFromObject(snake);
		
		frogposition       = new THREE.Box3().setFromObject( frog );
		  
		  if(vehicleposition0.isIntersectionBox(frogposition)){
			next_life();
		  }
		 else if(vehicleposition1.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(vehicleposition2.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(vehicleposition3.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(vehicleposition4.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(vehicleposition5.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(vehicleposition6.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(vehicleposition7.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(vehicleposition8.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(vehicleposition9.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(vehicleposition10.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(vehicleposition11.isIntersectionBox(frogposition)){
			next_life();
		  }
		  else if(snakeposition.isIntersectionBox(frogposition)){
			next_life(); 
		  }
		   else{
			if(pressed_up == 1){   
			pressed_up = 0;
			score+=10;
			document.getElementById("Score").innerHTML = score;
			}
		}
	}
	
	function check_log(){
		
		var logsposition0 = new THREE.Box3().setFromObject( logs[0] );
		var logsposition1 = new THREE.Box3().setFromObject( logs[1] );
		var logsposition2 = new THREE.Box3().setFromObject( logs[2] );
		var logsposition3 = new THREE.Box3().setFromObject( logs[3] );
		var logsposition4 = new THREE.Box3().setFromObject( logs[4] );
		var logsposition5 = new THREE.Box3().setFromObject( logs[5] );
		var logsposition6 = new THREE.Box3().setFromObject( logs[6] );
		var logsposition7 = new THREE.Box3().setFromObject( logs[7] );
		var logsposition8 = new THREE.Box3().setFromObject( logs[8] );
	

	  if(logsposition0.isIntersectionBox(frogposition)){
	  frog.translateX(1*translatespeed);		if(pressed_up == 1){   
			pressed_up = 0;
			score+=10;
			document.getElementById("Score").innerHTML = score;
			}}
	  else if(logsposition1.isIntersectionBox(frogposition)){
	  frog.translateX(1*translatespeed);		if(pressed_up == 1){   
			pressed_up = 0;
			score+=10;
			document.getElementById("Score").innerHTML = score;
			}}
	  else if(logsposition2.isIntersectionBox(frogposition)){
	  
	  frog.translateX(1*translatespeed);   if(pressed_up == 1){   
			pressed_up = 0;
			score+=10;
			document.getElementById("Score").innerHTML = score;
			}}		
	  else if(logsposition3.isIntersectionBox(frogposition)){
	  frog.translateX(-1*translatespeed);		if(pressed_up == 1){   
			pressed_up = 0;
			score+=10;
			document.getElementById("Score").innerHTML = score;
			}}
	  else if(logsposition4.isIntersectionBox(frogposition)){
	  frog.translateX(-1*translatespeed);		if(pressed_up == 1){   
			pressed_up = 0;
			score+=10;
			document.getElementById("Score").innerHTML = score;
			}}
	  else if(logsposition5.isIntersectionBox(frogposition)){
	  frog.translateX(-1*translatespeed);   if(pressed_up == 1){   
			pressed_up = 0;
			score+=10;
			document.getElementById("Score").innerHTML = score;
			}}
	  else if(logsposition6.isIntersectionBox(frogposition)){
	  frog.translateX(1.25*translatespeed);		if(pressed_up == 1){   
			pressed_up = 0;
			score+=10;
			document.getElementById("Score").innerHTML = score;
			}}
	  else if(logsposition7.isIntersectionBox(frogposition)){
	  frog.translateX(1.25*translatespeed);		if(pressed_up == 1){   
			pressed_up = 0;
			score+=10;
			document.getElementById("Score").innerHTML = score;
			}}
	  else if(logsposition8.isIntersectionBox(frogposition)){
	  frog.translateX(1.25*translatespeed);		if(pressed_up == 1){   
			pressed_up = 0;
			score+=10;
			document.getElementById("Score").innerHTML = score;
			}}
	  else 
		  next_life();
	}
	

    function render(){
         
		renderer.render(scene, camera); 
        
		
		animate();	

		
	       
		check_collision();
		if((frog.position.y >=15) && (frog.position.y<=45))
	      check_log();
	    if(frog.position.y>45)
	      change_level();
	    if(life_lost == 3)
		 game_over();
	    		
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
		    pressed_up = 1;	 play();
           frog.position.y += increment;
		} else if (e.keyCode == down) {
            frog.position.y -= increment;play();
        } else if (e.keyCode == left) {
            frog.position.x -= increment;play();
        } else if (e.keyCode == right) {
            frog.position.x += increment;play();
        }
		
		
         else if (e.keyCode == 81) {
            camera.position.z -= increment;
        } else if (e.keyCode == 87) {
            camera.position.z += increment;
        }
		 else if (e.keyCode == 65) {
            camera.position.x -= increment;
        } else if (e.keyCode == 83) {
            camera.position.x += increment;
        }
		 else if (e.keyCode == 88) {
            camera.position.y -= increment;
        } else if (e.keyCode == 90) {
            camera.position.y += increment;
        }
		else if (e.keyCode == 75) {
            camera.rotation.x -= increment*Math.PI/180;
        } else if (e.keyCode == 76) {
            camera.rotation.x += increment*Math.PI/180;
        }
		else if (e.keyCode == 77) {
            camera.rotation.y -= increment*Math.PI/180;
        } else if (e.keyCode == 78) {
            camera.rotation.y += increment*Math.PI/180;
        }
		else if (e.keyCode == 79) {
            camera.rotation.z -= increment*Math.PI/180;
        } else if (e.keyCode == 80) {
            camera.rotation.z += increment*Math.PI/180;
        }
		else if (e.keyCode == 32) {
            translatespeed -= 0.1;
        } else if (e.keyCode == 8) {
           translatespeed += 0.1;
        }
		
      	
	
	}
	
	var threed = 0;
	
  function myFunction() {
		
	if(threed == 0){
    threed = 1;		
	camera.position.y = -70;
	camera.position.z =  95;
	
	// rotate to face towards the opponent
	camera.rotation.x = 30* Math.PI/180;
	}
    else
	{       threed = 0;
			camera.position.y = 0;
	        camera.position.z =  130;

			camera.rotation.x = 0;

		
	}
   }
   
     function play(){
		 
		 audio_main.play();
				 
	 }
	 
	

	window.onclick = myFunction;
	
    window.onload = initScene;
    
	window.onkeydown = checkKey;

  

})();