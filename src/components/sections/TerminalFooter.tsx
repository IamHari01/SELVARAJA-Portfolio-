"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Github, Linkedin, Mail, Phone, Send, Loader2, Copy, Check } from 'lucide-react';
import { aiArchitectureChatTerminal } from '@/ai/flows/ai-architecture-chat-terminal-flow';
import { useToast } from '@/hooks/use-toast';

export const TerminalFooter: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'user' | 'ai' | 'system', content: string }[]>([
    { type: 'system', content: 'SELVARAJAs-MacBook-Air:~ selvaraja$ ./deploy_future.sh' },
    { type: 'system', content: 'Initializing autonomous deployment...' },
    { type: 'system', content: 'AI systems online. Status: Ready for impact.' },
    { type: 'system', content: 'Awaiting next-generation collaboration request...' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [terminalDimensions, setTerminalDimensions] = useState('80x24');
  
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);
  
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);
  
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);

  const email = "selvahari399@gmail.com";
  const phoneNumber = "9360308589";
  const formattedPhone = "+91 9360308589";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleResize = () => {
      setTerminalDimensions(window.innerWidth < 768 ? '40x12' : '80x24');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setHistory(prev => [...prev, { type: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await aiArchitectureChatTerminal({ question: userMsg });
      setHistory(prev => [...prev, { type: 'ai', content: response.answer }]);
    } catch (error) {
      setHistory(prev => [...prev, { type: 'system', content: 'Error: Connection lost. Retrying...' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (e: React.MouseEvent, text: string, type: 'email' | 'phone') => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    
    if (type === 'email') {
      setIsEmailCopied(true);
      setTimeout(() => setIsEmailCopied(false), 2000);
    } else {
      setIsPhoneCopied(true);
      setTimeout(() => setIsPhoneCopied(false), 2000);
    }

    toast({
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Copied`,
      description: `${text} copied to clipboard.`,
    });
  };

  return (
    <footer className="py-12 md:py-20 px-4 md:px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-4xl font-black tracking-[0.15em] uppercase">
              INITIALIZE <span className="text-fire">COLLABORATION</span>
            </h3>
            <p className="text-white/60 text-sm md:text-base font-medium uppercase tracking-[0.2em] opacity-80">
              Ready to engineer the next intelligence paradigm.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 items-center">
            <motion.a 
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(255, 87, 34, 0.2)",
                boxShadow: "0 0 30px rgba(255, 87, 34, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/IamHari01" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-fire hover:border-fire/50 transition-all duration-300" 
              aria-label="Github"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(255, 87, 34, 0.2)",
                boxShadow: "0 0 30px rgba(255, 87, 34, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/selvaraja007/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-fire hover:border-fire/50 transition-all duration-300" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            
            {/* Phone Icon with Reveal Pill */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPhoneHovered(true)}
              onMouseLeave={() => setIsPhoneHovered(false)}
              onClick={() => setIsPhoneHovered(!isPhoneHovered)}
            >
              <AnimatePresence>
                {isPhoneHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: -60, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-1/2 -translate-x-1/2 px-5 py-3 bg-neutral-900 border border-white/10 rounded-full whitespace-nowrap z-[100] flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  >
                    <span className="text-[11px] md:text-xs font-code text-fire font-bold tracking-wider">{formattedPhone}</span>
                    <button 
                      onClick={(e) => copyToClipboard(e, phoneNumber, 'phone')}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                      title="Copy Phone"
                    >
                      {isPhoneCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.a 
                whileHover={{ 
                  scale: 1.15, 
                  backgroundColor: "rgba(255, 87, 34, 0.2)",
                  boxShadow: "0 0 30px rgba(255, 87, 34, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                href={`tel:${phoneNumber}`}
                className="p-4 md:p-5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-fire hover:border-fire/50 transition-all duration-300 block" 
                aria-label="Phone"
                onClick={(e) => {
                  if (window.innerWidth < 768 && !isPhoneHovered) {
                    e.preventDefault();
                  }
                }}
              >
                <Phone className="w-6 h-6" />
              </motion.a>
            </div>

            {/* Email Icon with Reveal Pill */}
            <div 
              className="relative"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
              onClick={() => setIsEmailHovered(!isEmailHovered)}
            >
              <AnimatePresence>
                {isEmailHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: -60, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-1/2 -translate-x-1/2 px-5 py-3 bg-neutral-900 border border-white/10 rounded-full whitespace-nowrap z-[100] flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  >
                    <span className="text-[11px] md:text-xs font-code text-fire font-bold tracking-wider">{email}</span>
                    <button 
                      onClick={(e) => copyToClipboard(e, email, 'email')}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                      title="Copy Email"
                    >
                      {isEmailCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.a 
                whileHover={{ 
                  scale: 1.15, 
                  backgroundColor: "rgba(255, 87, 34, 0.2)",
                  boxShadow: "0 0 30px rgba(255, 87, 34, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                href={`mailto:${email}`}
                className="p-4 md:p-5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-fire hover:border-fire/50 transition-all duration-300 block" 
                aria-label="Email"
                onClick={(e) => {
                  if (window.innerWidth < 768 && !isEmailHovered) {
                    e.preventDefault();
                  }
                }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-xl overflow-hidden shadow-2xl relative border-white/10"
        >
          <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-bold text-white/50 tracking-widest uppercase">
              <TerminalIcon className="w-3 h-3" />
              bash — {terminalDimensions}
            </div>
            <div className="w-8 md:w-12" />
          </div>

          <div 
            ref={scrollRef}
            className="p-4 md:p-6 h-[300px] md:h-[400px] overflow-y-auto font-code text-xs md:text-sm leading-relaxed scroll-smooth relative"
          >
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,100,0,0.06),rgba(255,200,0,0.02),rgba(255,50,0,0.06))] z-10 bg-[length:100%_2px,3px_100%] animate-scanline" />
            
            <AnimatePresence mode="popLayout">
              {history.map((line, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-3"
                >
                  {line.type === 'system' && (
                    <p className="text-white/60 italic break-words">{line.content}</p>
                  )}
                  {line.type === 'user' && (
                    <div className="flex gap-2 text-fire">
                      <span className="shrink-0">➜</span>
                      <span className="font-bold shrink-0">selvaraja:</span>
                      <span className="break-words">{line.content}</span>
                    </div>
                  )}
                  {line.type === 'ai' && (
                    <div className="text-amber mt-1 pl-3 md:pl-4 border-l border-amber/20 py-1 break-words">
                      {line.content}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <div className="flex items-center gap-2 text-amber opacity-70">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing architectural query...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleCommand} className="p-3 md:p-4 bg-white/5 border-t border-white/10 flex items-center gap-2 md:gap-3">
            <span className="text-fire font-bold">➜</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Query the architect..."
              className="flex-1 bg-transparent border-none outline-none text-xs md:text-sm font-code text-white placeholder:text-white/40"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="text-white/60 hover:text-white transition-colors"
              disabled={isLoading}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

        <div className="mt-10 md:mt-12 text-center text-[8px] md:text-[10px] text-white/40 font-bold tracking-[0.6em] uppercase px-4">
          &copy; 2026 Selvaraja // Built with Autonomous Pride
        </div>
      </div>
    </footer>
  );
};