"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { ChevronRight, FileText } from 'lucide-react';

const name = "SELVARAJA";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.6,
      filter: 'blur(30px)',
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1], // High-end Apple-style curve
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden bg-transparent">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-fire/10 rounded-full blur-[180px] pointer-events-none opacity-40" />

      <div className="max-w-full w-full text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative inline-flex flex-nowrap items-center justify-center w-full"
        >
          <h1
            className="text-[clamp(2.5rem,14vw,18rem)] font-black tracking-[-0.02em] leading-none mb-16 text-white uppercase whitespace-nowrap flex select-none"
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-12"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] md:text-[12px] font-bold text-fire tracking-[0.8em] uppercase ml-[0.8em] opacity-90">
              AI Engineer
            </span>
            <div className="w-16 h-[1px] bg-fire/30" />
            <span className="text-[10px] md:text-[12px] font-bold text-white/50 tracking-[0.8em] uppercase ml-[0.8em]">
              Autonomous Architect
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col items-center gap-5"
          >
            <LiquidButton 
              className="w-auto px-10 py-3 text-[9px] h-10 min-w-[200px] shadow-fire/30"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Access Systems <ChevronRight className="w-4 h-4" />
            </LiquidButton>

            <LiquidButton 
              variant="secondary"
              className="w-auto px-6 py-2 text-[8px] h-8 min-w-[160px] opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => window.open('#', '_blank')}
            >
              View Resume <FileText className="w-3 h-3" />
            </LiquidButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-fire to-transparent" />
      </motion.div>
    </section>
  );
};