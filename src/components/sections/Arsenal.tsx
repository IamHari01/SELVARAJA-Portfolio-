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
    const height = 600;
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
        color: i % 2 === 0 ? 0x4d9bff : 0xbf4dff,
        transparent: true,
        opacity: 0.8
      });
      const sphere = new THREE.Mesh(geometry, material);
      
      const phi = Math.acos(-1 + (2 * i) / categories.length);
      const theta = Math.sqrt(categories.length * Math.PI) * phi;
      
      const radius = 2;
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

    return () => {
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="arsenal" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
        >
          COGNITIVE <span className="text-ultraviolet">ARSENAL</span>
        </motion.h2>
        <p className="text-white/40 max-w-2xl mx-auto text-lg">
          Not just tools, but mental models. A distributed system of intelligence nodes orbiting a central thesis of autonomous innovation.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <div ref={containerRef} className="w-full max-w-4xl" />
        
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full px-12">
            {categories.map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="glass-panel p-4 rounded-xl border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:border-white/20 transition-all cursor-default text-center flex items-center justify-center"
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
