'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, Database, BarChart2 } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Sales Forecasting',
    category: 'Predictive Analytics',
    image: 'https://picsum.photos/seed/sales/800/600?blur=2',
    problem: 'The client struggled with inventory stockouts during peak seasons and overstocking during off-seasons, leading to lost revenue and increased holding costs.',
    tool: 'Python (Pandas, Scikit-learn), SQL, Tableau',
    impact: 'Developed a time-series forecasting model that improved inventory prediction accuracy by 24%, reducing stockouts by 15% and saving $50k in holding costs.',
    links: {
      github: '#',
      live: '#',
    },
    tags: ['Time Series', 'Machine Learning', 'Dashboard'],
  },
  {
    title: 'Customer Segmentation & Churn Analysis',
    category: 'Customer Analytics',
    image: 'https://picsum.photos/seed/customer/800/600?blur=2',
    problem: 'A subscription-based service was experiencing a high churn rate (18%) and needed to identify at-risk customers to target with retention campaigns.',
    tool: 'SQL, Python (K-Means Clustering), Power BI',
    impact: 'Segmented customers into 4 distinct groups based on behavior. Identified key churn indicators, allowing marketing to reduce churn by 5% within one quarter.',
    links: {
      github: '#',
      live: '#',
    },
    tags: ['Clustering', 'SQL Queries', 'Power BI'],
  },
  {
    title: 'Supply Chain Optimization Dashboard',
    category: 'Business Intelligence',
    image: 'https://picsum.photos/seed/supply/800/600?blur=2',
    problem: 'Management lacked real-time visibility into supplier performance and delivery delays, causing bottlenecks in the manufacturing process.',
    tool: 'Excel (Power Query), SQL Server, Tableau',
    impact: 'Built an interactive dashboard tracking KPIs (On-Time Delivery, Defect Rate). Improved supplier accountability and reduced average delivery delay by 2 days.',
    links: {
      github: '#',
      live: '#',
    },
    tags: ['Data Visualization', 'ETL', 'KPI Tracking'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              Featured <span className="text-emerald-400">Projects</span>
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            View full GitHub repository
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay tags */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-mono font-medium bg-black/80 text-emerald-400 rounded-full backdrop-blur-sm border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <p className="text-sm font-mono text-cyan-400 mb-2 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                      <Database className="w-4 h-4 text-emerald-400" /> Problem
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                      <BarChart2 className="w-4 h-4 text-cyan-400" /> Tool & Approach
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.tool}</p>
                  </div>

                  <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-emerald-400 mb-2">
                      <ArrowUpRight className="w-4 h-4" /> Impact
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">{project.impact}</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.links.github}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                  <a
                    href={project.links.live}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Dashboard
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
