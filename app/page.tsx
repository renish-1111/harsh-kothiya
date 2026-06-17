import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Toolbox from '@/components/Toolbox';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-base text-slate-300 selection:bg-accent/30 selection:text-accent">
        <Navbar />
        <Hero />
        <Toolbox />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
