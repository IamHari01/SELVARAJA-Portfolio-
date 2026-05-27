"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Github, Code2, Workflow } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 'project-agent',
    title: 'Autonomous Job Application AI Agent',
    description: 'A multi-agent orchestration system that automates the entire job search lifecycle using semantic RAG pipelines and intelligent decision loops.',
    tech: ['Python', 'LangGraph', 'Weaviate', 'Gemini', 'Firebase', 'LLMs', 'RAG'],
    features: ['Multi-agent node graph', 'Semantic matching', 'Real-time job aggregation', 'ATS Optimization'],
    placeholderId: 'project-agent',
    color: 'electric'
  },
  {
    id: 'project-voting',
    title: 'Decentralized Voting System',
    description: 'Cryptographically secure, blockchain-based voting architecture focused on decentralized security and smart contract reliability.',
    tech: ['Solidity', 'Ethereum', 'Web3', 'Smart Contracts', 'Blockchain'],
    features: ['Immutable ledger', 'Vulnerability mitigation', 'Ethereum architecture', 'Node synchronization'],
    placeholderId: 'project-voting',
    color: 'ultraviolet'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
            >
              PROJECT <span className="text-electric">ARCHITECTURE</span>
            </motion.h2>
            <p className="text-white/50 max-w-xl text-lg">
              Engineering high-fidelity systems from first principles. Laboratory-grade execution meets intelligent orchestration.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">System Status: Optimized</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.placeholderId);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={idx % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden fresnel-glow">
                    <div className="absolute top-0 right-0 p-4">
                      <Code2 className="text-white/10 w-12 h-12" />
                    </div>
                    
                    <div className="flex gap-2 mb-6">
                      {project.tech.map(t => (
                        <Badge key={t} variant="secondary" className="bg-white/5 border-white/10 text-[10px] uppercase font-bold tracking-widest px-3">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/60 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {project.features.map(f => (
                        <div key={f} className="flex items-center gap-3 text-sm text-white/40">
                          <Workflow className="w-4 h-4 text-electric" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all font-bold text-sm">
                        <Github className="w-4 h-4" /> Codebase
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-electric/20 text-electric hover:bg-electric/30 transition-all font-bold text-sm border border-electric/30">
                        <ExternalLink className="w-4 h-4" /> Live System
                      </button>
                    </div>
                  </div>
                </div>

                <div className={idx % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
                    <Image
                      src={imageData?.imageUrl || ''}
                      alt={project.title}
                      fill
                      className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                      data-ai-hint={imageData?.imageHint}
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-4 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                        <Workflow className="w-10 h-10 text-electric animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
