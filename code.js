function begin(){
    'use strict';
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({canvas});

const fov = 75; //field of view
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);


camera.position.z = 2;// without the z position you won't see your cube inside the canvas

const scene = new THREE.Scene();

//shape and cover
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
//const material = new THREE.MeshBasicMaterial({color: 0x44aa88});// keep in mind that meshbasicmaterial is not effected by light
// if you want a materail that is effected by light, you need to use this: MeshPhongMaterial
 const material = new THREE.MeshPhongMaterial(boxWidth,boxHeight,boxDepth);


// then we mix them
const cube = new THREE.Mesh(geometry,material);
scene.add(cube);
renderer.render(scene,camera);
// alert("hi");
    function r(time){
    time *= 0.001; // convert time to seconds 
    cube.rotation.x = time;
    cube.rotation.y = time;
    cube.rotation.z = time;
    renderer.render(scene,camera);
    requestAnimationFrame(r);

    }
requestAnimationFrame(r);
const color = "rgb(255,255,0)";
const intensity = 1;
const light = new THREE.DirectionalLight(color,intensity);
light.position.set(-1, 2, 4);
scene.add(light);

};
begin();