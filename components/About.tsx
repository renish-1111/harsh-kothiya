'use client';

import { motion } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-base relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-offwhite mb-4">
                My <span className="text-accent">Journey</span>
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                With a strong foundation in Artificial Intelligence and Data Science, my journey has been driven by a passion for uncovering patterns, building data-driven solutions, and turning raw numbers into actionable insights.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl mt-1">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-offwhite mb-1">Data Analyst Intern</h3>
                    <p className="text-accent font-medium mb-4">Creart Solution Pvt Ltd</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-mono">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2026 - Present</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Ahmedabad</span>
                    </div>
                    <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        Assisted in cleaning and preprocessing large datasets using Python (Pandas) and SQL, reducing data inconsistencies by 15%.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        Developed interactive Power BI dashboards to visualize key performance indicators for client projects.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        Collaborated with the engineering team to automate weekly reporting processes, saving 5 hours of manual work per week.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl mt-1">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-offwhite mb-1">B.E. Artificial Intelligence & Data Science</h3>
                    <p className="text-accent font-medium mb-4">Government Engineering College, Rajkot</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-mono">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2022 - 2026</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Studied core subjects in AI, Machine Learning, Data Structures, and Statistical Analysis. Developed a strong foundation in Python, SQL, and data visualization tools through academic projects and hands-on labs. Gained practical experience in data preprocessing, predictive modeling, and building analytical dashboards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-2xl font-display font-bold text-offwhite mb-6">My Approach</h3>

              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  During my B.E. in AI & Data Science at GEC Rajkot, I discovered that the real power of data lies not just in collecting it, but in asking the right questions and presenting answers that drive decisions.
                </p>
                <p>
                  I started with Python and SQL to wrangle messy datasets, then expanded into Power BI and Tableau to bring data to life through interactive dashboards. Each academic project deepened my understanding of how visualization and analysis can solve real-world problems.
                </p>
                <p>
                  Now, as a Data Analyst Intern at Creart Solution, I apply these skills daily — cleaning data, building dashboards, and automating reports. I believe great data analysis is about clarity: transforming complex datasets into simple, compelling stories that anyone can act on.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <p className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4">Core Competencies</p>
                <div className="flex flex-wrap gap-2">
                  {['Analytical Thinking', 'Problem Solving', 'Data Storytelling', 'Statistical Analysis', 'Process Automation'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-base/80 text-slate-300 text-sm rounded-full border border-white/10 backdrop-blur-sm shadow-[0_4px_16px_0_rgba(0,0,0,0.2)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
