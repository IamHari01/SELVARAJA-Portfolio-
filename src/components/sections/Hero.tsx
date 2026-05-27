"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { ChevronRight, Database, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      <div className="max-w-7xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-bold tracking-[0.2em] uppercase">
            System Initialization v4.0.2
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-6 text-glow"
        >
          Selvaraja.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl font-light text-white/80 max-w-2xl mx-auto mb-8 font-headline tracking-wide"
        >
          AI Engineer | <span className="text-hyper font-medium">Architecting Autonomous Systems</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Bridging advanced AI reasoning, decentralized infrastructure, and autonomous orchestration 
          to engineer the next generation of scalable intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <LiquidButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Initialize System <ChevronRight className="w-4 h-4" />
          </LiquidButton>
          <LiquidButton variant="secondary" onClick={() => document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Architecture <Cpu className="w-4 h-4" />
          </LiquidButton>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/20">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Scroll to Decrypt</span>
        <div className="w-px h-12 bg-gradient-to-b from-electric/40 to-transparent" />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-ultraviolet/10 rounded-full blur-[150px] animate-pulse-glow" />
    </section>
  );
};
