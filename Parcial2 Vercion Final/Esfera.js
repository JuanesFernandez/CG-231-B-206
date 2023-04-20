function init() {

    // Escena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);


    var color2 = new THREE.Color( 0x000000 );
    var colorR = new THREE.Color( 0xAA0000 );
    var colorG = new THREE.Color( 0x00AA00 );
    var colorB = new THREE.Color( 0x0000AA );
    var x = new THREE.Vector3( 1, 0, 0 );
    var y = new THREE.Vector3( 0, 1, 0 );
    var z = new THREE.Vector3( 0, 0, 1 );
    var origin = new THREE.Vector3( 0, 0, 0 );
    //Crear la Grilla
    var gridHelperXZ = new THREE.GridHelper( 100, 100, color2, color2);

    //Flechas
    var arrowX = new THREE.ArrowHelper( x, origin, 7, colorR );
    var arrowY = new THREE.ArrowHelper( y, origin, 7, colorG );
    var arrowZ = new THREE.ArrowHelper( z, origin, 7, colorB );
        
    //Cámara
    camera.position.x = 8;
    camera.position.y = 6;
    camera.position.z = 15;
    camera.lookAt(scene.position);


    //Variables

    var r = 1;//Radio inicial

    var Sx = 0.5;//factor de escala en x
    var Sy = 0.5;//factor de escala en y
    var Sz = 3;//factor de escala en z

    var Rx = 0;//fator de rotacion en x
    var Ry = 90;//fator de rotacion en y
    var Rz = 45;//fator de rotacion en z

    var Tx = 2;//fator de Traslacion en x
    var Ty = 2;//fator de Traslacion en y
    var Tz = 0;//fator de Traslacion en z

    var pos = [Tx,Ty,Tz];


    //Fuente de luz

    var light = new THREE.DirectionalLight(0xffffff, 1); //furnte de luz
    light.position.set(24, 18, 45);
    scene.add(light);

    //Esfera

    var color = {color:0xFDFFCF}; //color crema
    var geometria = new THREE.SphereGeometry(r, 32, 16); //creacion de la esfera
    var material = new THREE.MeshPhongMaterial(color); //material
    var fig = new THREE.Mesh(geometria, material);
    scene.add(fig); // agregar figura a la ecena

    //Transformaciones

    fig.applyMatrix(Traslation(pos)); //Translacion

    EscaladoReal(fig,pos,[Sx,Sy,Sz]); //Escalado

    RotacionRealX(fig,pos,Rx); //Rotacion
    RotacionRealY(fig,pos,Ry);
    RotacionRealZ(fig,pos,Rz);

    // En el documento HTML
    document.body.appendChild(renderer.domElement);

    // Agregar elementos al escenario
    scene.add(gridHelperXZ);
    scene.add(arrowX);//ROJO
    scene.add(arrowY);//VERDE
    scene.add(arrowZ);//AZUL
    
    
    function render() { // render
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
      
    render();


}

init();  // otra forma: window.onload = init;