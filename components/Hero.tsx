'use client';

import { motion } from 'motion/react';
import { ArrowRight, Download, Database, LineChart, PieChart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-emerald-400 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6"
        >
          Turning raw data into <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            actionable business insights
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Hi, I&apos;m a Data Analyst specializing in Python, SQL, and Data Visualization. 
          I help organizations make better decisions by uncovering hidden patterns in their data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all hover:scale-105 active:scale-95"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Floating Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-50"
        >
          <div className="flex flex-col items-center gap-2">
            <Database className="w-8 h-8 text-slate-500" />
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Extract</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LineChart className="w-8 h-8 text-slate-500" />
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Analyze</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PieChart className="w-8 h-8 text-slate-500" />
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Visualize</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
