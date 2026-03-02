'use client';

import { motion } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative border-t border-slate-900">
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
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                My <span className="text-emerald-400">Journey</span>
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                From mechanical engineering to data analytics, my path has been driven by a fascination with systems, efficiency, and finding the truth hidden in numbers.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl mt-1">
                    <Briefcase className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">Data Analyst Intern</h3>
                    <p className="text-emerald-400 font-medium mb-4">Creart Solution Pvt Ltd</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-mono">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2023 - Present</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Remote</span>
                    </div>
                    <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">▹</span>
                        Assisted in cleaning and preprocessing large datasets using Python (Pandas) and SQL, reducing data inconsistencies by 15%.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">▹</span>
                        Developed interactive Power BI dashboards to visualize key performance indicators for client projects.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">▹</span>
                        Collaborated with the engineering team to automate weekly reporting processes, saving 5 hours of manual work per week.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl mt-1">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">B.Tech in Mechanical Engineering</h3>
                    <p className="text-cyan-400 font-medium mb-4">University Name</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-mono">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2019 - 2023</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      My engineering background taught me rigorous problem-solving, mathematical modeling, and how to approach complex systems logically. I transitioned to data analytics after discovering the power of programming to optimize processes and extract insights from raw information.
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
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-2xl font-display font-bold text-white mb-6">The Transition</h3>
              
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  During my mechanical engineering studies, I found myself increasingly drawn to the data behind the machines rather than the machines themselves. Whether it was analyzing stress test results or optimizing thermodynamic cycles, the numbers told the real story.
                </p>
                <p>
                  I started learning Python to automate my lab calculations. That curiosity quickly snowballed into learning SQL to manage larger datasets, and Power BI to present my findings clearly.
                </p>
                <p>
                  Now, as a Data Analyst, I apply the same rigorous, analytical mindset I learned in engineering to solve business problems. I believe that good data analysis isn&apos;t just about writing complex queries; it&apos;s about asking the right questions and translating the answers into actionable strategy.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <p className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4">Core Competencies</p>
                <div className="flex flex-wrap gap-2">
                  {['Analytical Thinking', 'Problem Solving', 'Data Storytelling', 'Statistical Analysis', 'Process Automation'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
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
