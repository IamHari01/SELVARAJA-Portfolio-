"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const categories = [
  "Advanced AI Engineering",
  "Autonomous Agent Systems",
  "Smart Contracts",
  "Backend Infrastructure",
  "Distributed Systems",
  "Logical Problem Solving",
  "Firebase Architecture",
  "Vector Databases",
  "RAG Pipelines",
  "Full Stack Engineering"
];

export const Arsenal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const width = containerRef.current.clientWidth;
    const height = Math.min(600, window.innerHeight * 0.6);
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const spheres: THREE.Mesh[] = [];
    categories.forEach((_, i) => {
      const geometry = new THREE.SphereGeometry(0.1, 32, 32);
      const material = new THREE.MeshBasicMaterial({ 
        color: i % 2 === 0 ? 0xff8a00 : 0xffca28, // Orange or Amber
        transparent: true,
        opacity: 0.8
      });
      const sphere = new THREE.Mesh(geometry, material);
      
      const phi = Math.acos(-1 + (2 * i) / categories.length);
      const theta = Math.sqrt(categories.length * Math.PI) * phi;
      
      const radius = window.innerWidth < 768 ? 1.5 : 2;
      sphere.position.set(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );
      
      group.add(sphere);
      spheres.push(sphere);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.y += 0.002;
      group.rotation.x += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = Math.min(600, window.innerHeight * 0.6);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="arsenal" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
        >
          COGNITIVE <span className="text-fire">ARSENAL</span>
        </motion.h2>
        <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg px-4">
          Not just tools, but mental models. A distributed system of intelligence nodes orbiting a central thesis of autonomous innovation.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-[500px]">
        <div ref={containerRef} className="w-full max-w-4xl absolute z-0 pointer-events-none" />
        
        <div className="w-full max-w-5xl px-4 md:px-12 z-10 mt-20 md:mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="glass-panel p-3 md:p-4 rounded-xl border-white/5 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:border-fire/20 transition-all cursor-default text-center flex items-center justify-center min-h-[50px] md:min-h-[60px]"
              >
                {cat}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};