import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Toolbox from '@/components/Toolbox';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <Hero />
      <Toolbox />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
