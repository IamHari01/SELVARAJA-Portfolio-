
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { ChevronRight } from 'lucide-react';

const name = "SELVARAJA";

export const Hero: React.FC = () => {
  // Container variants to stagger the letters with Apple-style timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };

  // Apple-style "assembling" effect: letters converge from a scale/blur state
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.4,
      filter: 'blur(15px)',
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for that refined "Apple" feel
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl w-full text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative inline-block"
        >
          {/* Main Name: Forced single line with responsive fluid typography */}
          <motion.h1
            className="text-[16vw] sm:text-[14vw] md:text-[12rem] lg:text-[15rem] font-black tracking-[-0.04em] leading-none mb-4 text-white uppercase whitespace-nowrap flex justify-center items-center"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
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
          </motion.h1>

          {/* Subtitle with subtle reveal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-[10px] sm:text-xs font-bold text-white/30 tracking-[0.6em] uppercase">
              AI Engineer | <span className="text-hyper">Autonomous Architect</span>
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-4"
            >
              <LiquidButton 
                className="w-auto px-8 py-2 text-[10px] h-10 min-w-[180px]"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Access Systems <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </LiquidButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-electric/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Refined scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
