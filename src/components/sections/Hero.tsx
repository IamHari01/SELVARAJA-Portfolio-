"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { ChevronRight, Cpu, Activity, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden pt-16 md:pt-20">
      {/* Unique Top Telemetry Interface */}
      <div className="absolute top-0 left-0 w-full p-4 md:p-8 z-20 hidden sm:flex justify-between items-center bg-gradient-to-b from-black/40 to-transparent">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-hyper animate-pulse shadow-[0_0_8px_#1AFFFF]" />
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Neural Core</span>
              <span className="text-[8px] font-bold text-hyper uppercase tracking-tighter opacity-70">Status: Optimized</span>
            </div>
          </div>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-3">
            <Cpu className="w-4 h-4 text-electric" />
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Architecture</span>
              <span className="text-[8px] font-bold text-electric uppercase tracking-tighter opacity-70">Mode: Autonomous</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex flex-col items-end">
            <span className="text-[7px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">Telemetry Origin</span>
            <span className="text-[10px] font-mono text-white/60 tracking-wider">12.97° N // 77.59° E</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 border border-white/5 rounded-lg bg-white/[0.02] backdrop-blur-sm">
            <Zap className="w-3 h-3 text-hyper fill-hyper/20" />
            <span className="text-[10px] font-black text-white/90 uppercase tracking-widest">Quantum Engine Ready</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] font-black tracking-[0.08em] leading-[0.85] mb-6 text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          SELVARAJA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-3xl font-light text-white/80 max-w-2xl mx-auto mb-8 font-headline tracking-[0.15em] uppercase px-4"
        >
          AI Engineer | <span className="text-hyper font-bold">Autonomous Architect</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm md:text-lg text-white/50 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-medium px-4"
        >
          Architecting the next generation of scalable intelligent systems through advanced 
          reasoning, decentralized infrastructure, and autonomous multi-agent orchestration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col xs:flex-row items-center justify-center gap-4 md:gap-6 px-4"
        >
          <LiquidButton 
            className="w-full xs:w-auto min-w-[200px]"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Access Systems <ChevronRight className="w-4 h-4" />
          </LiquidButton>
          <LiquidButton 
            variant="secondary" 
            className="w-full xs:w-auto min-w-[200px]"
            onClick={() => document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Arsenal <Cpu className="w-4 h-4" />
          </LiquidButton>
        </motion.div>
      </div>

      {/* Responsive Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/10">
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] mb-3 font-black">Decrypt Depth</span>
        <div className="w-px h-10 md:h-16 bg-gradient-to-b from-hyper/40 to-transparent" />
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-electric/5 rounded-full blur-[100px] md:blur-[180px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-hyper/5 rounded-full blur-[100px] md:blur-[180px] animate-pulse-glow" />
    </section>
  );
};