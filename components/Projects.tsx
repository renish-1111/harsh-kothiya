'use client';

import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import { ArrowUpRight, Database, BarChart2 } from 'lucide-react';
import Image from 'next/image';

import blinkitImg from '@/lib/img/blinkit.png';
import zomatoImg from '@/lib/img/zomato.png';
import fitnessImg from '@/lib/img/fitness.png';
import covid19Img from '@/lib/img/covid-19.png';

const projects = [
  {
    title: 'Blinkit Sales & Performance Dashboard',
    category: 'E-Commerce Analytics',
    image: blinkitImg,
    problem: 'Blinkit needed real-time visibility into sales performance across outlets, product categories, and item types to optimize inventory allocation and identify underperforming segments.',
    tool: 'Power BI, SQL, Excel (Power Query)',
    impact: 'Built an interactive dashboard tracking total sales ($1.20M), average sales per outlet, item ratings, and fat content distribution. Enabled data-driven restocking decisions, improving outlet-level sales by 18%.',
    tags: ['Power BI', 'Sales Analytics', 'KPI Dashboard'],
  },
  {
    title: 'Zomato Restaurant & Order Analytics',
    category: 'Food Delivery Analytics',
    image: zomatoImg,
    problem: 'Zomato required insights into restaurant ratings, cuisine popularity, order patterns, and city-wise performance to improve partner restaurant recommendations and user experience.',
    tool: 'Python (Pandas, Matplotlib, Seaborn), SQL, Tableau',
    impact: 'Analyzed 9,000+ restaurants across 15 cities. Identified top-performing cuisines, average cost patterns, and rating distributions. Insights helped optimize restaurant listing rankings and targeted marketing campaigns.',
    tags: ['Python', 'Tableau', 'EDA'],
  },
  {
    title: 'Personal Fitness Tracker Dashboard',
    category: 'Health & Wellness Analytics',
    image: fitnessImg,
    problem: 'Fitness enthusiasts lacked a consolidated view of their workout metrics, calorie intake, sleep patterns, and progress trends over time to make informed health decisions.',
    tool: 'Excel (Advanced Formulas, Pivot Tables), Power BI',
    impact: 'Designed a comprehensive fitness dashboard tracking daily steps, calories burned, heart rate zones, sleep quality, and workout frequency. Visualized weekly/monthly trends to help users identify patterns and achieve fitness goals 25% faster.',
    tags: ['Excel', 'Power BI', 'Health Data'],
  },
  {
    title: 'COVID-19 Global Impact Dashboard',
    category: 'Public Health Analytics',
    image: covid19Img,
    problem: 'Policymakers and researchers needed a clear, interactive view of COVID-19 spread, recovery rates, vaccination progress, and mortality trends across countries to make data-backed decisions.',
    tool: 'Python (Pandas, Plotly), SQL, Tableau',
    impact: 'Built a real-time dashboard tracking 200+ countries with KPIs for confirmed cases, deaths, recovery rates, and vaccination coverage. Time-series analysis revealed wave patterns and helped forecast ICU bed requirements with 89% accuracy.',
    tags: ['Python', 'Tableau', 'Time Series'],
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation between -10 and 10 degrees
    const rY = ((mouseX / width) - 0.5) * 20;
    const rX = ((mouseY / height) - 0.5) * -20;

    x.set(rY);
    y.set(rX);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col lg:flex-row gap-12 items-center ${
        index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-1/2 relative group" style={{ perspective: '1000px' }}>
        <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 ease-out"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            className="w-full h-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            style={{ transform: "translateZ(50px)" }}
          />
          {/* Overlay tags */}
          <div 
            className="absolute top-4 left-4 flex gap-2 flex-wrap z-10"
            style={{ transform: "translateZ(80px)" }}
          >
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 text-xs font-mono font-medium bg-base/80 text-accent rounded-full backdrop-blur-md border border-white/10 shadow-[0_4px_16px_0_rgba(0,0,0,0.2)]">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div>
          <p className="text-sm font-mono text-accent mb-2 uppercase tracking-wider">{project.category}</p>
          <h3 className="text-3xl font-display font-bold text-offwhite mb-6 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-offwhite mb-2">
              <Database className="w-4 h-4 text-accent" /> Problem
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-offwhite mb-2">
              <BarChart2 className="w-4 h-4 text-accent" /> Tool & Approach
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">{project.tool}</p>
          </div>

          <div className="bg-accent/10 backdrop-blur-md border border-accent/20 rounded-xl p-6 hover:bg-accent/20 transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-accent mb-2">
              <ArrowUpRight className="w-4 h-4" /> Impact
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">{project.impact}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-base relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-offwhite mb-4"
            >
              Featured <span className="text-accent">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400"
            >
              A selection of my recent data analysis work, highlighting problem-solving skills and business impact.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/HARSH-PATEL-09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent transition-colors group"
          >
            View full GitHub repository
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
