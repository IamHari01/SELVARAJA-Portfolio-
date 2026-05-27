"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Github, Linkedin, Mail, ArrowUpRight, Send, Loader2 } from 'lucide-react';
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

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
    <footer className="py-20 px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-black tracking-tighter mb-2">INITIALIZE COLLABORATION.</h3>
            <p className="text-white/40">Ready to engineer the next intelligence paradigm.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-electric/20 hover:text-electric transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-electric/20 hover:text-electric transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:selvaraja@example.com" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-electric/20 hover:text-electric transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-xl overflow-hidden shadow-2xl relative border-white/10"
        >
          {/* Terminal Header */}
          <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 tracking-widest uppercase">
              <TerminalIcon className="w-3 h-3" />
              bash — 80x24
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Body */}
          <div 
            ref={scrollRef}
            className="p-6 h-[400px] overflow-y-auto font-code text-sm leading-relaxed scroll-smooth relative"
          >
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] animate-scanline" />
            
            <AnimatePresence mode="popLayout">
              {history.map((line, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-3"
                >
                  {line.type === 'system' && (
                    <p className="text-white/40 italic">{line.content}</p>
                  )}
                  {line.type === 'user' && (
                    <div className="flex gap-2 text-electric">
                      <span className="shrink-0">➜</span>
                      <span className="font-bold">selvaraja:</span>
                      <span>{line.content}</span>
                    </div>
                  )}
                  {line.type === 'ai' && (
                    <div className="text-hyper mt-1 pl-4 border-l border-hyper/20 py-1">
                      {line.content}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <div className="flex items-center gap-2 text-hyper opacity-50">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing architectural query...</span>
              </div>
            )}
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleCommand} className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-3">
            <span className="text-electric font-bold">➜</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Query the architect (e.g., 'Explain your RAG decisions')"
              className="flex-1 bg-transparent border-none outline-none text-sm font-code text-white placeholder:text-white/20"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="text-white/30 hover:text-white transition-colors"
              disabled={isLoading}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

        <div className="mt-12 text-center text-[10px] text-white/20 font-bold tracking-[0.5em] uppercase">
          &copy; 2024 Selvaraja // Built with Autonomous Pride
        </div>
      </div>
    </footer>
  );
};
