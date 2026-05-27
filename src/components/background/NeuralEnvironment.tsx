"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const NeuralEnvironment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles Configuration
    const particlesCount = 2500;
    const posArray = new Float32Array(particlesCount * 3);
    const initialPositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      const val = (Math.random() - 0.5) * 10;
      posArray[i] = val;
      initialPositions[i] = val;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.006,
      color: 0xff3d00, // High-intensity Orangish-Red
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) - 0.5;
      mouse.current.y = (event.clientY / window.innerHeight) - 0.5;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouse.current.x = (event.touches[0].clientX / window.innerWidth) - 0.5;
        mouse.current.y = (event.touches[0].clientY / window.innerHeight) - 0.5;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      // Smooth interpolation for mouse movement
      targetRotation.current.x += (mouse.current.y * 0.4 - targetRotation.current.x) * 0.05;
      targetRotation.current.y += (mouse.current.x * 0.4 - targetRotation.current.y) * 0.05;

      particlesMesh.rotation.x = targetRotation.current.x;
      // Constant drift + interactive influence
      particlesMesh.rotation.y = targetRotation.current.y + time * 0.1;

      // Subtle pulse and individual particle jitter
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        // Float particles slightly based on time
        positions[i3 + 1] = initialPositions[i3 + 1] + Math.sin(time + initialPositions[i3]) * 0.15;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-[-1] opacity-70"
      style={{ 
        background: 'radial-gradient(circle at 50% 50%, #150200 0%, #000000 100%)',
      }}
    />
  );
};
