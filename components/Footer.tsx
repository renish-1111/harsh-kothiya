import { BarChart2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-emerald-400" />
          <span className="font-display font-bold text-lg text-white tracking-tight">
            Data<span className="text-emerald-400">Analyst</span>
          </span>
        </div>
        
        <p className="text-sm text-slate-500 font-mono">
          &copy; {new Date().getFullYear()} Harsh Kothiya. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="#toolbox" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Toolbox</a>
          <a href="#projects" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#about" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">About</a>
        </div>
      </div>
    </footer>
  );
}
