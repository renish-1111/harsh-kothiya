'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'harshkothiya531@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-black relative border-t border-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-full max-w-3xl h-96 bg-emerald-500/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Let&apos;s <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently looking for new opportunities as a Data Analyst. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-4 px-6 py-4 bg-black border border-slate-800 rounded-2xl w-full md:w-auto">
              <Mail className="w-6 h-6 text-emerald-400" />
              <span className="text-slate-300 font-mono text-sm sm:text-base truncate">{email}</span>
              <button
                onClick={copyEmail}
                className="ml-auto p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
                title="Copy email"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full md:w-auto text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-2xl transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-4 h-4" />
              Say Hello
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 border-t border-slate-800/50">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 bg-black border border-slate-800 rounded-2xl group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <span className="text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 bg-black border border-slate-800 rounded-2xl group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300">
                <Github className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <span className="text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
