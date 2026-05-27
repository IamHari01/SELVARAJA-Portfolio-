"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { ChevronRight } from 'lucide-react';

const name = "SELVARAJA";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8,
      filter: 'blur(20px)',
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1], // Apple-style cubic bezier
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden bg-transparent">
      <div className="max-w-full w-full text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative inline-flex flex-nowrap items-center justify-center w-full"
        >
          <h1
            className="text-[clamp(2.5rem,16vw,18rem)] font-black tracking-[-0.06em] leading-none mb-12 text-white uppercase whitespace-nowrap flex select-none"
            style={{ 
              fontFamily: "'Inter Tight', sans-serif",
              fontStretch: 'expanded',
              WebkitTextStroke: '1px rgba(255,255,255,0.05)'
            }}
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] md:text-[11px] font-bold text-fire tracking-[0.6em] uppercase ml-[0.6em]">
              AI Engineer
            </span>
            <div className="w-12 h-[1px] bg-fire/30" />
            <span className="text-[9px] md:text-[11px] font-bold text-white/30 tracking-[0.6em] uppercase ml-[0.6em]">
              Autonomous Architect
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <LiquidButton 
              className="w-auto px-10 py-3 text-[10px] h-10 min-w-[180px] hover:scale-105 transition-transform"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Access Systems <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </LiquidButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Focal Point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-fire/5 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-fire to-transparent" />
      </motion.div>
    </section>
  );
};