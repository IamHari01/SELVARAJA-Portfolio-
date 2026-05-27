"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const NeuralEnvironment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles Configuration - Increased density and visibility
    const particlesCount = 4000;
    const posArray = new Float32Array(particlesCount * 3);
    const initialPositions = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i++) {
      const val = (Math.random() - 0.5) * 15;
      posArray[i] = val;
      initialPositions[i] = val;
      if (i % 3 === 0) velocities[i / 3] = Math.random() * 0.02;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.012, // Larger particles for better visibility
      color: 0xff3d00, // High-intensity Orangish-Red
      transparent: true,
      opacity: 0.7, // Higher opacity
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Enhanced Mouse Glow
    const glowGeometry = new THREE.SphereGeometry(2.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff3d00,
      transparent: true,
      opacity: 0.08, // Increased glow visibility
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowMesh);

    camera.position.z = 6;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouse.current.x = (event.clientX / window.innerWidth) - 0.5;
      targetMouse.current.y = (event.clientY / window.innerHeight) - 0.5;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        targetMouse.current.x = (event.touches[0].clientX / window.innerWidth) - 0.5;
        targetMouse.current.y = (event.touches[0].clientY / window.innerHeight) - 0.5;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      // Smooth interpolation for mouse movement
      mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.05;
      mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.05;

      targetRotation.current.x += (mouse.current.y * 0.4 - targetRotation.current.x) * 0.05;
      targetRotation.current.y += (mouse.current.x * 0.4 - targetRotation.current.y) * 0.05;

      particlesMesh.rotation.x = targetRotation.current.x;
      particlesMesh.rotation.y = targetRotation.current.y + time * 0.03;

      // Follow mouse
      glowMesh.position.x = mouse.current.x * 12;
      glowMesh.position.y = -mouse.current.y * 12;

      // Stronger localized interaction
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        
        // Base sine-wave drift
        positions[i3 + 1] = initialPositions[i3 + 1] + Math.sin(time + initialPositions[i3]) * 0.3;
        
        // Localized magnetic pull
        const dx = positions[i3] - (mouse.current.x * 10);
        const dy = positions[i3 + 1] - (-mouse.current.y * 10);
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);
        
        if (dist < 4) {
          const force = (4 - dist) * 0.03;
          positions[i3] -= dx * force;
          positions[i3 + 1] -= dy * force;
        } else {
          // Elastic return to original state
          positions[i3] += (initialPositions[i3] - positions[i3]) * 0.02;
        }
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
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{ 
        background: 'radial-gradient(circle at 50% 50%, #1a0600 0%, #000000 100%)',
      }}
    />
  );
};