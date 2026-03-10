'use client';

import { motion } from 'motion/react';
import { Database, FileSpreadsheet, Code2, BarChart3, Terminal, Layers, BrainCircuit } from 'lucide-react';

const skills = [
  {
    category: 'Programming',
    icon: <Code2 className="w-6 h-6 text-accent" />,
    items: [
      { name: 'Python', level: 90 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Matplotlib/Seaborn', level: 75 },
    ],
  },
  {
    category: 'Database & Querying',
    icon: <Database className="w-6 h-6 text-accent" />,
    items: [
      { name: 'SQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Database Design', level: 70 },
    ],
  },
  {
    category: 'Data Visualization',
    icon: <BarChart3 className="w-6 h-6 text-accent" />,
    items: [
      { name: 'Power BI', level: 85 },
      { name: 'Tableau', level: 80 },
      { name: 'Dashboard Design', level: 85 },
      { name: 'Data Storytelling', level: 80 },
    ],
  },
  {
    category: 'Spreadsheets & Tools',
    icon: <FileSpreadsheet className="w-6 h-6 text-accent" />,
    items: [
      { name: 'Advanced Excel', level: 90 },
      { name: 'Pivot Tables', level: 95 },
      { name: 'Power Query', level: 80 },
      { name: 'VBA/Macros', level: 65 },
    ],
  },
  {
    category: 'Machine Learning',
    icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    items: [
      { name: 'Scikit-learn', level: 80 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Keras', level: 70 },
      { name: 'XGBoost', level: 75 },
    ],
  },
];

export default function Toolbox() {
  return (
    <section id="toolbox" className="py-24 bg-black relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-offwhite mb-4"
          >
            Technical <span className="text-accent">Toolbox</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            The technologies and tools I use to extract, transform, and visualize data.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 transition-all duration-300 group hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(178,34,34,0.12)] hover:bg-slate-900/80"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-800 rounded-lg transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-110">
                  {skillGroup.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-offwhite transition-colors duration-300 group-hover:text-accent">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-slate-500 font-mono text-xs">{item.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-accent to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools Marquee */}
        <div className="mt-20 pt-10 border-t border-slate-900 overflow-hidden">
          <p className="text-center text-sm font-mono text-slate-500 uppercase tracking-widest mb-8">
            Also familiar with
          </p>
          <div className="flex gap-8 justify-center flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Git', 'GitHub', 'Jupyter', 'Google Analytics', 'Snowflake', 'AWS S3', 'dbt', 'Airflow'].map((tool) => (
              <div key={tool} className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-slate-800">
                <Terminal className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-slate-300">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
