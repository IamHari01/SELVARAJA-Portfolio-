"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl w-full text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] sm:text-[12vw] md:text-[10rem] lg:text-[13rem] font-black tracking-[0.05em] leading-[0.85] mb-8 text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          SELVARAJA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-lg md:text-2xl font-light text-white/60 max-w-2xl mx-auto mb-12 font-headline tracking-[0.2em] uppercase px-4"
        >
          AI Engineer | <span className="text-hyper font-bold">Autonomous Architect</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 px-4"
        >
          <LiquidButton 
            className="w-auto px-8 py-2 text-[10px]"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Access Systems <ChevronRight className="w-3 h-3" />
          </LiquidButton>
        </motion.div>
      </div>

      {/* Responsive Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/10">
        <div className="w-px h-12 bg-gradient-to-b from-hyper/40 to-transparent" />
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
