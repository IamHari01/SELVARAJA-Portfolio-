"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { ChevronRight, Cpu, Activity, Shield, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      {/* Top Interface Section */}
      <div className="absolute top-0 left-0 w-full p-6 z-20 hidden md:flex justify-between items-center text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-hyper animate-pulse" />
            <span>Neural Link: Active</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-electric" />
            <span>Protocols: Secure</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="px-3 py-1 border border-white/10 rounded-sm bg-white/5">
            LAT: 12.9716° N // LONG: 77.5946° E
          </div>
          <div className="flex items-center gap-2 text-hyper">
            <Zap className="w-3 h-3 fill-current" />
            <span>Quantum Ready</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full text-center z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[12rem] font-black tracking-[0.05em] leading-none mb-6 text-glow uppercase"
        >
          SELVARAJA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl font-light text-white/80 max-w-2xl mx-auto mb-8 font-headline tracking-[0.15em] uppercase"
        >
          AI Engineer | <span className="text-hyper font-medium">Autonomous Architect</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Engineering the next generation of scalable intelligent systems through advanced 
          reasoning, decentralized infrastructure, and autonomous orchestration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <LiquidButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Access Systems <ChevronRight className="w-4 h-4" />
          </LiquidButton>
          <LiquidButton variant="secondary" onClick={() => document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' })}>
            View Architecture <Cpu className="w-4 h-4" />
          </LiquidButton>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/20">
        <span className="text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">Initiate Descent</span>
        <div className="w-px h-12 bg-gradient-to-b from-electric/40 to-transparent" />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-ultraviolet/10 rounded-full blur-[150px] animate-pulse-glow" />
    </section>
  );
};
