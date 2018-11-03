var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer( {antialias:true});

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height)
    camera.aspect = width / height;
    camera.updateProjectionMatrix()
})

controls = new THREE.OrbitControls(camera, renderer.domElement)

//create cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
//create material
// var material = new THREE.MeshBasicMaterial({
//     color: 515151,
//     wireframe: true
// })
var cubeMaterial = [
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('face.svg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('face.svg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('face.svg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('face.svg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('face.svg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('face.svg'), side: THREE.DoubleSide})
]

var cube = new THREE.Mesh(geometry, cubeMaterial);
scene.add(cube)
//cube


//plane
// var geo = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
// var mat = new THREE.MeshBasicMaterial({ color: 0x212121, side: THREE.DoubleSide });
// var plane = new THREE.Mesh(geo, mat);

// scene.add(plane);
// plane.position.y = -1
// plane.rotateX( - Math.PI / 2);
//plane end







camera.position.z = 3
cube.rotation.y = 1

//game logic
var update = function () {
cube.rotation.x += 0.02

cube.rotation.y += 0.05
   
}
//draw scene
var render = function () {
    renderer.render(scene, camera)
}
//Run Game
var GameLoop = function () {
    requestAnimationFrame(GameLoop);

    update();
    render();
};
GameLoop()