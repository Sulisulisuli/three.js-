'use strict';

import * as THREE from 'three';

window.Webflow = window.Webflow || [];
window.Webflow.push(() => {
  init3d();
});

function init3d() {
  console.log('init 3d is working');
  const viewPort = document.querySelector('[data-3d="c"]');
  console.log(viewPort);

  // renderer
  const renderer = new THREE.WebGL1Renderer();
  renderer.setSize(viewPort.clientWidth, viewPort.clientHeight); // fixed typo 'clientHight' to 'clientHeight'
  viewPort.appendChild(renderer.domElement);
  // camera
  const camera = new THREE.PerspectiveCamera(
    75,
    viewPort.clientWidth / viewPort.clientHeight,
    0.1,
    100
  );
  camera.position.z = 1;
  //scene
  const scene = new THREE.Scene();

  // object
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff, // white color
    metalness: 1, // metalness value of 1 makes it fully metallic
    roughness: 0.2, // low roughness value makes it look smoother
  });
  const cube = new THREE.Mesh(geometry, material);
  console.log(cube);
  scene.add(cube);

  // Rendering function
  function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate); // added requestAnimationFrame to create an animation loop
  }
  animate();
}

/*import * as THREE from 'three';

window.Webflow ||= [];
window.Webflow.push(() => {
  init3d();
});

function init3d() {
  console.log('init 3d is working');
  const viewPort = document.querySelector('[data-3d="c"]');
  console.log(viewPort);

  // renderer
  const renderer = new THREE.WebGL1Renderer();
  renderer.setSize(viewPort.clientWidth, viewPort.clientHeight);
  viewPort.appendChild(renderer.domElement);
  // camera
  const camera = new THREE.PerspectiveCamera(
    75,
    viewPort.clientWidth / viewPort.clientHight,
    0.1,
    100
  );
  camera.position.z = 1;
  //scene
  const scene = new THREE.Scene();

  // object
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff, // white color
    metalness: 1, // metalness value of 1 makes it fully metallic
    roughness: 0.2, // low roughness value makes it look smoother
  });
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  // Rendering function
  function render3d() {
    renderer.render(scene, camera);
  }
  render3d();
}

*/
