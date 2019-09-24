const canvas = document.querySelector("#c");
const scene = new THREE.PerspectiveCamera(
    75, //pov
    window.innerWidth/window.innerHeight, // aspect
    0.1,//near
    1000// far
);
const renderer = new THREE.WebGLRenderer({canvas});