
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { ChevronRight } from 'lucide-react';

const name = "SELVARAJA";

export const Hero: React.FC = () => {
  // Container variants to stagger the letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  // Individual letter variants for the "assembling from nowhere" effect
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 2, 
      filter: 'blur(20px)',
      rotate: 10
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden">
      {/* Top Section - Minimalist placeholder for future unique design */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase"
        >
          // AUTH_PROTOCOL: ACTIVE
        </motion.div>
      </div>

      <div className="max-w-7xl w-full text-center z-10">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[14vw] sm:text-[12vw] md:text-[10rem] lg:text-[13rem] font-black tracking-[0.05em] leading-[0.85] mb-8 text-white uppercase flex justify-center flex-wrap"
        >
          {name.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-[10px] sm:text-xs md:text-sm font-bold text-white/40 max-w-2xl mx-auto mb-12 tracking-[0.5em] uppercase px-4"
        >
          AI Engineer | <span className="text-hyper">Autonomous Architect</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex items-center justify-center gap-4 px-4"
        >
          <LiquidButton 
            className="w-auto px-6 py-2 text-[9px] h-10 min-w-[160px]"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Access Systems <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </LiquidButton>
        </motion.div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/10"
      >
        <div className="w-px h-12 bg-gradient-to-b from-hyper/20 to-transparent" />
      </motion.div>
    </section>
  );
};
