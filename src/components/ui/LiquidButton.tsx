"use client";

import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const isPrimary = variant === 'primary';

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn(
        "relative group py-2 rounded-full font-black transition-all duration-300",
        "flex items-center justify-center gap-2 overflow-hidden text-[9px] uppercase tracking-[0.25em]",
        isPrimary 
          ? "bg-fire text-black shadow-[0_0_15px_rgba(255,87,34,0.4)] hover:shadow-[0_0_30px_rgba(255,87,34,0.7)]" 
          : "bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          background: isHovered 
            ? isPrimary 
              ? 'radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(255,87,34,0.2) 0%, transparent 70%)'
            : 'none'
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
