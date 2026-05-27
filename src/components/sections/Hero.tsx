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
        staggerChildren: 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 1.2,
      filter: 'blur(12px)',
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden bg-black">
      <div className="max-w-[100vw] w-full text-center z-10 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative inline-block w-full"
        >
          <motion.h1
            className="text-[16vw] sm:text-[14vw] md:text-[12rem] lg:text-[15rem] font-black tracking-[-0.05em] leading-none mb-8 text-white uppercase whitespace-nowrap flex justify-center items-center w-full select-none"
            style={{ 
              fontFamily: "'Inter Tight', sans-serif",
              fontStretch: 'expanded'
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
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <p className="text-[10px] sm:text-xs font-bold text-white/20 tracking-[0.8em] uppercase ml-[0.8em]">
              AI Engineer | <span className="text-fire/60">Autonomous Architect</span>
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              <LiquidButton 
                className="w-auto px-10 py-3 text-[10px] h-10 min-w-[180px]"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Access Systems <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </LiquidButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
