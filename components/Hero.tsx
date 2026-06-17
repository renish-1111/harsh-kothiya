'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Database, LineChart, PieChart } from 'lucide-react';
import Image from 'next/image';
import { playPowerUpSound, playPowerDownSound } from '@/lib/utils/sound';

export default function Hero() {
  const [isSpedUp, setIsSpedUp] = useState(false);
  
  // Refs for orbits
  const orbit1Ref = useRef<HTMLDivElement>(null);
  const orbit2Ref = useRef<HTMLDivElement>(null);
  const orbit3Ref = useRef<HTMLDivElement>(null);

  // Rotation angles
  const rot1 = useRef(0);
  const rot2 = useRef(0);
  const rot3 = useRef(0);
  
  // Speed multiplier
  const speedRef = useRef(1);
  const isHyperSpeedRef = useRef(false);

  useEffect(() => {
    let animFrame: number;
    let lastTime = performance.now();

    const update = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      const targetSpeed = isHyperSpeedRef.current ? 8 : 1; 
      
      // Smooth speed transition
      speedRef.current += (targetSpeed - speedRef.current) * 0.05;

      // Base speeds increased
      rot1.current = (rot1.current + (0.08 * speedRef.current * delta)) % 360;
      rot2.current = (rot2.current - (0.05 * speedRef.current * delta)) % 360;
      rot3.current = (rot3.current + (0.03 * speedRef.current * delta)) % 360;

      const applyRotation = (ref: React.RefObject<HTMLDivElement | null>, angle: number, tiltX: number, tiltY: number) => {
        if (ref.current) {
          // Add 3D perspective and rotation
          ref.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotateZ(${angle}deg)`;
          
          const icons = ref.current.querySelectorAll('.orbit-icon');
          icons.forEach(icon => {
            // Counter-rotate icons so they always face forward
            (icon as HTMLElement).style.transform = `rotateZ(${-angle}deg) rotateY(${-tiltY}deg) rotateX(${-tiltX}deg)`;
          });
        }
      };

      // Orbit 1: Tilted X slightly
      applyRotation(orbit1Ref, rot1.current, 65, 20);
      
      // Orbit 2: Tilted differently
      applyRotation(orbit2Ref, rot2.current, 65, -45);
      
      // Orbit 3: Flattish or tilted opposite
      applyRotation(orbit3Ref, rot3.current, 65, 70);

      animFrame = requestAnimationFrame(update);
    };

    animFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // --- Lightning Effect ---
  useEffect(() => {
    const canvas = document.getElementById('lightning-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    interface Bolt {
      path: {x: number, y: number}[];
      opacity: number;
      width: number;
      life: number;
    }

    let bolts: Bolt[] = [];
    let flashIntensity = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const createBolt = () => {
        const startX = random(0, w);
        const startY = -50; 
        
        const path = [{x: startX, y: startY}];
        let currX = startX;
        let currY = startY;
        
        while(currY < h + 50) {
            currY += random(15, 45);
            currX += random(-30, 30);
            path.push({x: currX, y: currY});
            
            if(Math.random() < 0.1) {
                 currX += random(-50, 50);
                 path.push({x: currX, y: currY});
            }
        }

        bolts.push({
            path,
            opacity: 1,
            width: random(2, 4),
            life: random(10, 20)
        });

        // Trigger red screen flash
        flashIntensity = 0.15;
    };

    const draw = () => {
        // Clear Canvas
        ctx.clearRect(0, 0, w, h);
        
        // Draw Flash Overlay
        if (flashIntensity > 0) {
            ctx.fillStyle = `rgba(178, 34, 34, ${flashIntensity})`; 
            ctx.fillRect(0, 0, w, h);
            flashIntensity *= 0.85; 
            if(flashIntensity < 0.01) flashIntensity = 0;
        }
        
        // Randomly Spawn Lightning
        if (Math.random() < 0.015) { 
           createBolt();
        }

        // Draw Bolts
        bolts.forEach((bolt) => {
            ctx.beginPath();
            if (bolt.path.length > 0) {
                ctx.moveTo(bolt.path[0].x, bolt.path[0].y);
                for (let i = 1; i < bolt.path.length; i++) {
                    ctx.lineTo(bolt.path[i].x, bolt.path[i].y);
                }
            }

            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // Glow Effect
            ctx.shadowBlur = 30;
            ctx.shadowColor = '#b22222'; 
            
            // Core Line
            ctx.strokeStyle = `rgba(255, 200, 200, ${bolt.opacity})`;
            ctx.lineWidth = bolt.width;
            ctx.stroke();
            
            // Reset shadow
            ctx.shadowBlur = 0;
            
            bolt.opacity -= 0.05; 
        });

        // Remove dead bolts
        bolts = bolts.filter(b => b.opacity > 0);

        animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  const handleCenterIconClick = () => {
    if (isHyperSpeedRef.current) return;
    
    setIsSpedUp(true);
    isHyperSpeedRef.current = true;
    
    playPowerUpSound();

    setTimeout(() => {
      setIsSpedUp(false);
      isHyperSpeedRef.current = false;
      playPowerDownSound();
    }, 5000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Interactive Lightning Canvas Background */}
      <canvas 
        id="lightning-canvas" 
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
      />

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">
        <div className="text-left w-full md:w-1/2 pt-10 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-accent mb-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
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
            <span className="text-3xl md:text-5xl text-slate-300 mt-2 block">Turning raw data into actionable insights</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-slate-400 max-w-xl leading-relaxed"
          >
            A Data Analyst specializing in Python, SQL, and Data Visualization.
            I help organizations make better decisions by uncovering hidden patterns in their data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-offwhite bg-accent hover:bg-accent rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_8px_32px_0_rgba(178,34,34,0.3)]"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/HARSH CV-1.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-offwhite bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right side orbit animation */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center items-center mt-20 md:mt-0 relative">
          {/* General background pulse for the whole orbit area when active */}
          <div className={`absolute w-[400px] h-[400px] rounded-full blur-[100px] transition-all duration-1000 ${isSpedUp ? 'bg-accent/20 animate-pulse' : 'bg-transparent'}`} />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: isSpedUp ? 1.5 : 1 }}
            transition={{ duration: 1, delay: 0.5, scale: { duration: 0.8, type: "spring", bounce: 0.4 } }}
            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center transition-transform"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          >
            {/* Center icon */}
            <div 
              onClick={handleCenterIconClick}
              className={`absolute z-20 w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-xl border ${
                isSpedUp 
                  ? 'bg-accent/20 border-accent/50 shadow-[0_0_60px_rgba(178,34,34,0.6),inset_0_0_30px_rgba(255,255,255,0.2)] scale-105' 
                  : 'bg-white/10 border-white/20 shadow-[0_0_40px_rgba(178,34,34,0.3),inset_0_0_20px_rgba(255,255,255,0.1)] hover:scale-105'
              }`}
            >
              {/* Pulsing Aura inside center icon area, visible when sped up */}
              <div className={`absolute inset-0 rounded-full blur-[30px] transition-all duration-500 ${isSpedUp ? 'bg-accent/40 animate-ping' : 'opacity-0'}`} />

              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className={`absolute inset-[2px] rounded-full border transition-colors duration-500 ${isSpedUp ? 'border-accent/60' : 'border-accent/30'}`} />
              
              <div className="relative flex flex-col items-center justify-center text-center">
                 <Database className={`w-8 h-8 mb-1 transition-colors duration-500 ${isSpedUp ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-accent'}`} />
                 <span className={`font-mono text-[8px] tracking-[0.2em] transition-colors duration-500 ${isSpedUp ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-accent'}`}>
                   {isSpedUp ? 'MAX' : 'CORE'}
                 </span>
              </div>
            </div>

            <div ref={orbit1Ref} className={`absolute inset-0 m-auto w-[380px] h-[380px] rounded-full border transition-colors duration-500 will-change-transform ${isSpedUp ? 'border-accent/40 shadow-[0_0_20px_rgba(178,34,34,0.3)]' : 'border-slate-500/30'}`} style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftexcel.svg" alt="Excel" width={20} height={20} className="invert opacity-70" />
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Analysis" width={20} height={20} />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <LineChart className="w-5 h-5 text-slate-300" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <PieChart className="w-5 h-5 text-slate-300" />
              </div>
            </div>

            {/* Middle ring */}
            <div ref={orbit2Ref} className={`absolute inset-0 m-auto w-[380px] h-[380px] rounded-full border border-dashed transition-colors duration-500 hidden md:block will-change-transform ${isSpedUp ? 'border-accent/40 shadow-[0_0_20px_rgba(178,34,34,0.3)]' : 'border-slate-500/30'}`} style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" width={20} height={20} />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width={20} height={20} />
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" alt="ML" width={24} height={24} />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width={20} height={20} className="invert opacity-70" />
              </div>
            </div>

            {/* Outer ring */}
            <div ref={orbit3Ref} className={`absolute inset-0 m-auto w-[380px] h-[380px] rounded-full border transition-colors duration-500 hidden md:block will-change-transform ${isSpedUp ? 'border-accent/40 shadow-[0_0_20px_rgba(178,34,34,0.3)]' : 'border-slate-400/20'}`} style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width={24} height={24} />
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" width={24} height={24} />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" width={24} height={24} />
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] orbit-icon will-change-transform">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" width={24} height={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
