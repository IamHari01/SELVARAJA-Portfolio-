
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Github, Code2, Workflow, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 'project-agent',
    title: 'Autonomous Multi-Agent Orchestrator',
    description: 'A high-fidelity reasoning engine that automates complex decision-making through distributed intelligence nodes.',
    tech: ['Python', 'LangGraph', 'Weaviate', 'Gemini', 'Firebase', 'RAG'],
    features: ['Multi-agent node graph', 'Semantic logic matching', 'Real-time orchestration', 'ATS Intelligence'],
    placeholderId: 'project-agent',
    color: 'fire'
  },
  {
    id: 'project-voting',
    title: 'Decentralized Trust Architecture',
    description: 'An immutable cryptographic ledger designed for absolute security and autonomous verification in distributed networks.',
    tech: ['Solidity', 'Ethereum', 'Web3', 'Smart Contracts', 'Blockchain'],
    features: ['Immutable protocol', 'Zero-knowledge proofs', 'Ethereum Mainnet', 'Secure consensus'],
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
              className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
            >
              PROJECT <span className="text-fire">DNA</span>
            </motion.h2>
            <p className="text-white/40 max-w-xl text-lg font-medium leading-relaxed">
              Engineering the next generation of autonomous intelligence through modular, scalable, and decentralized architecture.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-right hidden md:block"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20">Status: System Optimized</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-40 md:gap-64">
          {projects.map((project, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.placeholderId);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                <div className={`lg:col-span-6 ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] fresnel-glow">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent z-10" />
                    <Image
                      src={imageData?.imageUrl || ''}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-90"
                      data-ai-hint={imageData?.imageHint}
                    />
                  </div>
                </div>

                <div className={`lg:col-span-6 ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <Badge key={t} variant="outline" className="border-white/10 text-[9px] uppercase font-bold tracking-[0.2em] px-4 py-1.5 text-fire/80 hover:border-fire/30 transition-colors">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/50 text-base md:text-xl font-medium leading-relaxed max-w-lg">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 mb-4">
                      {project.features.map(f => (
                        <div key={f} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-fire shadow-[0_0_10px_rgba(255,87,34,0.8)]" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button className="flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-fire text-black font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-fire/20 hover:shadow-fire/40 transition-all hover:-translate-y-1">
                        Systems Access <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button className="flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 font-black text-xs uppercase tracking-[0.2em] transition-all">
                        <Github className="w-4 h-4" /> Protocol
                      </button>
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
