'use client';

import { motion } from 'motion/react';
import { ArrowRight, Download, Database, LineChart, PieChart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        {/* Background Bar Chart - top left */}
        <motion.svg
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.07, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-[10%] left-[5%] w-64 h-48 hidden md:block"
          viewBox="0 0 200 150"
          fill="none"
        >
          <motion.rect x="10" y="90" width="20" height="50" rx="4" fill="#b22222"
            initial={{ height: 0, y: 140 }} animate={{ height: 50, y: 90 }} transition={{ duration: 1, delay: 0.8 }} />
          <motion.rect x="40" y="60" width="20" height="80" rx="4" fill="#b22222"
            initial={{ height: 0, y: 140 }} animate={{ height: 80, y: 60 }} transition={{ duration: 1, delay: 1.0 }} />
          <motion.rect x="70" y="40" width="20" height="100" rx="4" fill="#b22222"
            initial={{ height: 0, y: 140 }} animate={{ height: 100, y: 40 }} transition={{ duration: 1, delay: 1.2 }} />
          <motion.rect x="100" y="70" width="20" height="70" rx="4" fill="#b22222"
            initial={{ height: 0, y: 140 }} animate={{ height: 70, y: 70 }} transition={{ duration: 1, delay: 1.4 }} />
          <motion.rect x="130" y="30" width="20" height="110" rx="4" fill="#b22222"
            initial={{ height: 0, y: 140 }} animate={{ height: 110, y: 30 }} transition={{ duration: 1, delay: 1.6 }} />
          <motion.rect x="160" y="50" width="20" height="90" rx="4" fill="#b22222"
            initial={{ height: 0, y: 140 }} animate={{ height: 90, y: 50 }} transition={{ duration: 1, delay: 1.8 }} />
          <line x1="0" y1="140" x2="200" y2="140" stroke="#334155" strokeWidth="1" />
          <line x1="5" y1="0" x2="5" y2="140" stroke="#334155" strokeWidth="1" />
        </motion.svg>

        {/* Background Line Chart - top right */}
        <motion.svg
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.07, x: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute top-[8%] right-[5%] w-72 h-48 hidden md:block"
          viewBox="0 0 240 150"
          fill="none"
        >
          <line x1="0" y1="140" x2="240" y2="140" stroke="#334155" strokeWidth="1" />
          <line x1="5" y1="0" x2="5" y2="140" stroke="#334155" strokeWidth="1" />
          {/* Grid lines */}
          <line x1="5" y1="35" x2="240" y2="35" stroke="#334155" strokeWidth="0.5" strokeDasharray="4" />
          <line x1="5" y1="70" x2="240" y2="70" stroke="#334155" strokeWidth="0.5" strokeDasharray="4" />
          <line x1="5" y1="105" x2="240" y2="105" stroke="#334155" strokeWidth="0.5" strokeDasharray="4" />
          {/* Line 1 */}
          <motion.polyline
            points="10,120 45,95 80,100 115,60 150,70 185,35 220,25"
            stroke="#b22222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }}
          />
          {/* Line 2 */}
          <motion.polyline
            points="10,130 45,110 80,115 115,85 150,90 185,65 220,55"
            stroke="#b22222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 3"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.3 }}
          />
          {/* Data points */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
            <circle cx="10" cy="120" r="3" fill="#b22222" />
            <circle cx="45" cy="95" r="3" fill="#b22222" />
            <circle cx="80" cy="100" r="3" fill="#b22222" />
            <circle cx="115" cy="60" r="3" fill="#b22222" />
            <circle cx="150" cy="70" r="3" fill="#b22222" />
            <circle cx="185" cy="35" r="3" fill="#b22222" />
            <circle cx="220" cy="25" r="3" fill="#b22222" />
          </motion.g>
        </motion.svg>

        {/* Background Pie/Donut Chart - bottom left */}
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-[12%] left-[8%] w-52 h-52 hidden md:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.circle cx="50" cy="50" r="38" stroke="#b22222" strokeWidth="10" strokeDasharray="75 165"
            strokeLinecap="round" transform="rotate(-90 50 50)"
            initial={{ strokeDasharray: '0 240' }} animate={{ strokeDasharray: '75 165' }} transition={{ duration: 1.5, delay: 1.2 }} />
          <motion.circle cx="50" cy="50" r="38" stroke="#b22222" strokeWidth="10" strokeDasharray="55 185"
            strokeLinecap="round" transform="rotate(22 50 50)"
            initial={{ strokeDasharray: '0 240' }} animate={{ strokeDasharray: '55 185' }} transition={{ duration: 1.5, delay: 1.5 }} />
          <motion.circle cx="50" cy="50" r="38" stroke="#8b5cf6" strokeWidth="10" strokeDasharray="40 200"
            strokeLinecap="round" transform="rotate(105 50 50)"
            initial={{ strokeDasharray: '0 240' }} animate={{ strokeDasharray: '40 200' }} transition={{ duration: 1.5, delay: 1.8 }} />
          <motion.circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="10" strokeDasharray="30 210"
            strokeLinecap="round" transform="rotate(165 50 50)"
            initial={{ strokeDasharray: '0 240' }} animate={{ strokeDasharray: '30 210' }} transition={{ duration: 1.5, delay: 2.0 }} />
        </motion.svg>

        {/* Background Scatter Plot - bottom right */}
        <motion.svg
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.06, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="absolute bottom-[10%] right-[6%] w-64 h-52 hidden md:block"
          viewBox="0 0 200 160"
          fill="none"
        >
          <line x1="10" y1="150" x2="195" y2="150" stroke="#334155" strokeWidth="1" />
          <line x1="10" y1="5" x2="10" y2="150" stroke="#334155" strokeWidth="1" />
          {/* Trend line */}
          <motion.line x1="20" y1="130" x2="185" y2="25" stroke="#b22222" strokeWidth="1.5" strokeDasharray="4 3"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.5 }} />
          {/* Scatter points */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
            <circle cx="30" cy="125" r="4" fill="#b22222" />
            <circle cx="45" cy="115" r="3" fill="#b22222" />
            <circle cx="55" cy="108" r="5" fill="#b22222" />
            <circle cx="70" cy="95" r="3.5" fill="#b22222" />
            <circle cx="80" cy="100" r="4" fill="#b22222" />
            <circle cx="95" cy="82" r="3" fill="#b22222" />
            <circle cx="105" cy="75" r="5" fill="#b22222" />
            <circle cx="115" cy="68" r="3.5" fill="#b22222" />
            <circle cx="130" cy="60" r="4" fill="#b22222" />
            <circle cx="140" cy="52" r="3" fill="#b22222" />
            <circle cx="155" cy="45" r="4.5" fill="#b22222" />
            <circle cx="165" cy="38" r="3" fill="#b22222" />
            <circle cx="178" cy="30" r="4" fill="#b22222" />
          </motion.g>
        </motion.svg>

        {/* Small floating bar chart - mid left */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 1.3 }}
          className="absolute top-[45%] left-[2%] w-36 h-28 hidden lg:block"
          viewBox="0 0 120 90"
          fill="none"
        >
          <motion.rect x="8" y="55" width="14" height="30" rx="3" fill="#b22222"
            initial={{ height: 0, y: 85 }} animate={{ height: 30, y: 55 }} transition={{ duration: 0.8, delay: 1.5 }} />
          <motion.rect x="30" y="35" width="14" height="50" rx="3" fill="#b22222"
            initial={{ height: 0, y: 85 }} animate={{ height: 50, y: 35 }} transition={{ duration: 0.8, delay: 1.7 }} />
          <motion.rect x="52" y="20" width="14" height="65" rx="3" fill="#b22222"
            initial={{ height: 0, y: 85 }} animate={{ height: 65, y: 20 }} transition={{ duration: 0.8, delay: 1.9 }} />
          <motion.rect x="74" y="45" width="14" height="40" rx="3" fill="#b22222"
            initial={{ height: 0, y: 85 }} animate={{ height: 40, y: 45 }} transition={{ duration: 0.8, delay: 2.1 }} />
          <motion.rect x="96" y="15" width="14" height="70" rx="3" fill="#b22222"
            initial={{ height: 0, y: 85 }} animate={{ height: 70, y: 15 }} transition={{ duration: 0.8, delay: 2.3 }} />
          <line x1="3" y1="85" x2="115" y2="85" stroke="#334155" strokeWidth="1" />
        </motion.svg>

        {/* Small area chart - mid right */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute top-[50%] right-[3%] w-40 h-28 hidden lg:block"
          viewBox="0 0 140 90"
          fill="none"
        >
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b22222" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#b22222" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M5,75 Q25,65 40,55 T75,35 T110,25 T135,20 V85 H5 Z"
            fill="url(#areaGrad)"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2 }}
          />
          <motion.path
            d="M5,75 Q25,65 40,55 T75,35 T110,25 T135,20"
            stroke="#b22222" strokeWidth="2" fill="none" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.8 }}
          />
          <line x1="5" y1="85" x2="135" y2="85" stroke="#334155" strokeWidth="1" />
        </motion.svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-accent mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold text-offwhite tracking-tight mb-6"
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent">Harsh Kothiya</span>
          <br />
          <span className="text-3xl md:text-5xl text-slate-300">Turning raw data into actionable insights</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          A Data Analyst specializing in Python, SQL, and Data Visualization.
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-offwhite bg-accent hover:bg-accent rounded-xl transition-all hover:scale-105 active:scale-95"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/HARSH CV-1.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-offwhite bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:scale-105 active:scale-95"
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
