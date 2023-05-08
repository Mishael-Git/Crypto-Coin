import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BitcoinAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, bitcoin;

    // Set up the scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Create the Bitcoin geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    bitcoin = new THREE.Mesh(geometry, material);
    scene.add(bitcoin);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      bitcoin.rotation.x += 0.01;
      bitcoin.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default BitcoinAnimation;
