import React from 'react';
import * as THREE from 'three';

export default function Anima() {
  let scene = null;
  let camera = null;
  let render = null;
  const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );

    render = new THREE.WebGLRenderer({ antialias: true });
    render.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(render.domElement);

    ///////////////////////////////////////////////////////
    // Option 2: Import just the parts you need.

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    const texture = new THREE.TextureLoader().load('./wood.jpeg');
    var material = new THREE.MeshBasicMaterial({ color: 0x00234567ff });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 1;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      render.render(scene, camera);
    };
    animate();
  };
  init();

  const resize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    render.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', resize, false);

  return null;
}
