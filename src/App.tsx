import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import AboutEWaste from './components/AboutEWaste';
import WhyEWaste from './components/WhyEWaste';
import AssignmentGallery from './components/AssignmentGallery';
import LearningTimeline from './components/LearningTimeline';
import Reflection from './components/Reflection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';


export default function App() {
  const [activeStep, setActiveStep] = useState(1);

  // Monitor scroll height to update the floating learning journey step
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / (docHeight || 1);

      if (scrollPercent < 0.15) {
        setActiveStep(1); // Home
      } else if (scrollPercent < 0.38) {
        setActiveStep(2); // About Me
      } else if (scrollPercent < 0.6) {
        setActiveStep(3); // E-waste education
      } else if (scrollPercent < 0.8) {
        setActiveStep(4); // Assignments Gallery
      } else {
        setActiveStep(5); // Final reflection & contact
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { num: '01', name: 'Start' },
    { num: '02', name: 'Bio' },
    { num: '03', name: 'Eco' },
    { num: '04', name: 'Work' },
    { num: '05', name: 'End' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-primary/20 selection:text-emerald-900">

      {/* ── Fixed Global Backdrop (visible on all non-hero sections as you scroll) ── */}
      {/* World map layer — fixed so it gives a parallax feel while scrolling */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none select-none -z-20"
      >
        <img
          src="/world_map.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.15] mix-blend-multiply"
        />
        {/* Radial vignette — keeps centre visible, fades edges to white */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_30%,rgba(248,250,252,0.85)_100%)]" />
        {/* Top hero-handoff fade: hero section covers this so we fade the top */}
        <div className="absolute inset-x-0 top-0 h-[100vh] bg-gradient-to-b from-white/80 via-white/20 to-transparent" />
      </div>

      {/* Subtle dot pattern — adds texture without overwhelming content */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none select-none -z-10 opacity-[0.018]"
        style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Navbar header */}
      <Navbar />

      {/* Main content grid */}
      <main className="flex-grow">
        <Hero />
        <AboutMe />
        <AboutEWaste />
        <WhyEWaste />
        <AssignmentGallery />
        <LearningTimeline />
        <Reflection />
        <Contact />
      </main>

      {/* Footer copyright and easter egg */}
      <Footer />

      {/* Floating back-to-top button */}
      <BackToTop />

      {/* Sticky Sustainability Learning Journey indicator (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200/80 shadow-md flex items-center space-x-3.5"
        >
          <div className="flex items-center space-x-1">
            <Award className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
              Eco-Journey:
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {steps.map((s, idx) => {
              const stepNum = idx + 1;
              const isActive = activeStep === stepNum;
              const isPast = activeStep > stepNum;
              return (
                <div key={idx} className="flex items-center">
                  <div
                    className={`text-[10px] font-sans font-bold w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-primary text-white scale-110 shadow-xs'
                        : isPast
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                    title={s.name}
                  >
                    {s.num}
                  </div>
                  {idx < steps.length - 1 && (
                    <span
                      className={`h-0.5 w-3 mx-1 rounded-full transition-all ${
                        isPast ? 'bg-primary' : 'bg-slate-150'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
