'use client';

import { BarChart2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-900 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-accent" />
          <span className="font-display font-bold text-lg text-offwhite tracking-tight">
            Data<span className="text-accent">Analyst</span>
          </span>
        </div>

        <p className="text-sm text-slate-500 font-mono">
          &copy; {new Date().getFullYear()} Harsh Kothiya. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#toolbox" className="text-sm text-slate-500 hover:text-accent transition-colors">Toolbox</a>
          <a href="#projects" className="text-sm text-slate-500 hover:text-accent transition-colors">Projects</a>
          <a href="#about" className="text-sm text-slate-500 hover:text-accent transition-colors">About</a>
        </div>
      </motion.div>
    </footer>
  );
}
