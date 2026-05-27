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
    description: 'A multi-agent orchestration system that automates the entire job search lifecycle.',
    tech: ['Python', 'LangGraph', 'Weaviate', 'Gemini', 'Firebase', 'LLMs', 'RAG'],
    features: ['Multi-agent node graph', 'Semantic matching', 'Real-time job aggregation', 'ATS Optimization'],
    placeholderId: 'project-agent',
    color: 'fire'
  },
  {
    id: 'project-voting',
    title: 'Decentralized Voting System',
    description: 'Cryptographically secure, blockchain-based voting architecture focused on security.',
    tech: ['Solidity', 'Ethereum', 'Web3', 'Smart Contracts', 'Blockchain'],
    features: ['Immutable ledger', 'Vulnerability mitigation', 'Ethereum architecture', 'Node synchronization'],
    placeholderId: 'project-voting',
    color: 'amber'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4 md:px-6 bg-black relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
            >
              PROJECT <span className="text-fire">ARCHITECTURE</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-right hidden md:block"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20">System Status: Optimized</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-32 md:gap-48">
          {projects.map((project, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.placeholderId);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
              >
                <div className={idx % 2 === 0 ? "order-2 lg:order-1" : "order-2"}>
                  <div className="glass-panel p-8 md:p-14 rounded-[2.5rem] relative overflow-hidden fresnel-glow">
                    <div className="absolute top-0 right-0 p-6 opacity-5 md:opacity-20">
                      <Code2 className="text-white/40 w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5 mb-8">
                      {project.tech.map(t => (
                        <Badge key={t} variant="secondary" className="bg-white/5 border-white/10 text-[9px] uppercase font-bold tracking-[0.2em] px-3 py-1 text-amber/80">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {project.features.map(f => (
                        <div key={f} className="flex items-center gap-4 text-xs md:text-sm text-white/40">
                          <Workflow className="w-5 h-5 text-fire shrink-0 opacity-60" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5">
                      <button className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold text-xs uppercase tracking-widest">
                        <Github className="w-4 h-4" /> Codebase
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-fire/10 text-fire hover:bg-fire/20 transition-all font-bold text-xs uppercase tracking-widest border border-fire/20">
                        <ExternalLink className="w-4 h-4" /> Live System
                      </button>
                    </div>
                  </div>
                </div>

                <div className={idx % 2 === 0 ? "order-1 lg:order-2" : "order-1"}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent z-10" />
                    <Image
                      src={imageData?.imageUrl || ''}
                      alt={project.title}
                      fill
                      className="object-cover opacity-50 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-80"
                      data-ai-hint={imageData?.imageHint}
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="p-5 bg-black/40 backdrop-blur-2xl rounded-full border border-white/20 scale-75 group-hover:scale-100 transition-transform duration-700">
                        <Workflow className="w-12 h-12 text-fire animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
