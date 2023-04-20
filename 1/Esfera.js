var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);//camara

//Posicion Camara

camera.position.x = 10; 
camera.position.y = 10;
camera.position.z = 10;

camera.rotation.set(0, 0, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);//orbitcontrols


//Variables

var r = 1;//Radio inicial

var pos = [0,0,0];

var Sx = 0.5;//factor de escala en x
var Sy = 0.5;//factor de escala en y
var Sz = 3;//factor de escala en z

var Rx = 0;//fator de rotacion en x
var Ry = 0;//fator de rotacion en y
var Rz = 0;//fator de rotacion en z

var Tx = 0;//fator de Traslacion en x
var Ty = 0;//fator de Traslacion en y
var Tz = 0;//fator de Traslacion en z

//Figura y material

var color = {color:0xffffff}; //color

var geometria = new THREE.SphereGeometry(r); //esfera
var material = new THREE.MeshPhongMaterial(color); //material
var fig = new THREE.Mesh(geometria, material);

scene.add(fig); //agregar esfera

//transformaciones 

//Fuente de luz

const light = new THREE.DirectionalLight(0xffffff, 1); //furnte de luz
light.position.set(-1, 2, 4);
scene.add(light);

//Cuadricula

const size = 150; //tamaño cuadricula
const divisions = 160; //cuadrados cuadricula
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions); // lineas de eje
scene.add(gridHelper)

function render() { // render
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();


/*
Lista colores:
- Blanco : 0xffffff
- Morado : 0xCC99FF


*/ 