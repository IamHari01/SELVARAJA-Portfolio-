"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Github, Linkedin, Mail, Send, Loader2 } from 'lucide-react';
import { aiArchitectureChatTerminal } from '@/ai/flows/ai-architecture-chat-terminal-flow';

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
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <footer className="py-12 md:py-20 px-4 md:px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-2">INITIALIZE COLLABORATION.</h3>
            <p className="text-white/60 text-sm md:text-base">Ready to engineer the next intelligence paradigm.</p>
          </div>
          <div className="flex gap-3 md:gap-4">
            <a href="https://github.com" className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-fire/20 hover:text-fire transition-all" aria-label="Github">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://linkedin.com" className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-fire/20 hover:text-fire transition-all" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="mailto:selvaraja@example.com" className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-fire/20 hover:text-fire transition-all" aria-label="Email">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
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
            <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-bold text-white/40 tracking-widest uppercase">
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
                    <p className="text-white/50 italic break-words">{line.content}</p>
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
              <div className="flex items-center gap-2 text-amber opacity-60">
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
              className="flex-1 bg-transparent border-none outline-none text-xs md:text-sm font-code text-white placeholder:text-white/30"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="text-white/40 hover:text-white transition-colors"
              disabled={isLoading}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

        <div className="mt-10 md:mt-12 text-center text-[8px] md:text-[10px] text-white/50 font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase px-4">
          &copy; 2026 Selvaraja // Built with Autonomous Pride
        </div>
      </div>
    </footer>
  );
};