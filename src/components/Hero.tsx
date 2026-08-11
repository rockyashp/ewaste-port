import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Globe, Leaf, Recycle } from 'lucide-react';


export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };



  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92svh] flex items-center justify-center pt-24 px-6 overflow-hidden animated-gradient-bg"
    >
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* World Map Backdrop Watermark */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none mix-blend-luminosity">
        <img
          src="/world_map.png"
          alt="World Map Backdrop"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/20 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
        {/* Left Column: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 text-center lg:text-left space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary-light border border-emerald-200 text-emerald-800 text-sm font-semibold"
          >
            <Leaf className="w-4 h-4 text-primary animate-pulse" />
            <span>Environmental-Tech E-Portfolio</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-charcoal leading-tight tracking-tight"
          >
            Explore. <br className="hidden sm:inline" />
            Understand. <br className="hidden sm:inline" />
            <span className="text-primary bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent">Sustain.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-600 font-sans text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Welcome to my digital gallery. This portfolio documents my learning journey, research
            findings, and semester assignments in E-Waste Management, connecting computer technology
            with environmental sustainability.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('work')}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-semibold rounded-xl shadow-md hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all cursor-pointer text-center"
            >
              Explore Assignments
            </button>
            <button
              onClick={() => handleScrollTo('e-waste')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 hover:text-primary font-semibold rounded-xl shadow-sm border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/20 hover:scale-105 active:scale-95 transition-all cursor-pointer text-center"
            >
              About E-Waste
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: World Map Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-7 flex items-center justify-center"
        >
          {/* Outer wrapper with padding so floating badges have room */}
          <div className="relative w-full pt-6 pb-6 px-2">

            {/* Ambient glow behind card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/25 via-teal-300/10 to-sky-400/20 blur-2xl pointer-events-none" />

            {/* Main Map Card — ring border + layered shadow */}
            <div className="relative rounded-2xl overflow-visible ring-1 ring-emerald-200 shadow-[0_8px_40px_-8px_rgba(16,185,129,0.25),0_0_0_1px_rgba(16,185,129,0.08)] bg-white">

              {/* Map image section */}
              <div className="relative rounded-t-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/world_map.png"
                  alt="World Map"
                  className="w-full h-full object-cover object-center scale-105"
                />

                {/* Subtle vignette so edges blend into the card */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-slate-900/20" />

                {/* Animated scan line */}
                <motion.div
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent pointer-events-none"
                  style={{ top: '0%' }}
                />

                {/* Corner HUD brackets — larger & bolder */}
                <div className="absolute top-4 left-4 w-7 h-7 border-t-[3px] border-l-[3px] border-emerald-400 rounded-tl-sm" />
                <div className="absolute top-4 right-4 w-7 h-7 border-t-[3px] border-r-[3px] border-emerald-400 rounded-tr-sm" />
                <div className="absolute bottom-4 left-4 w-7 h-7 border-b-[3px] border-l-[3px] border-emerald-400 rounded-bl-sm" />
                <div className="absolute bottom-4 right-4 w-7 h-7 border-b-[3px] border-r-[3px] border-emerald-400 rounded-br-sm" />

                {/* Pulsing India location pin */}
                <div className="absolute" style={{ top: '45%', left: '68%' }}>
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-xl" />
                  </span>
                </div>

                {/* Floating top-right badge — inside map so it's always visible */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 right-14 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-100 shadow-lg flex items-center space-x-2"
                >
                  <div className="p-1 bg-emerald-50 rounded-lg">
                    <Recycle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">E-Waste</p>
                    <p className="text-xs font-bold text-slate-700 leading-tight">Tracked Global</p>
                  </div>
                </motion.div>
              </div>

              {/* Card Footer — divider + three stats */}
              <div className="px-5 py-3.5 bg-white rounded-b-2xl border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center space-x-2.5 min-w-0">
                  <div className="p-1.5 bg-emerald-50 rounded-lg shrink-0">
                    <Globe className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-700 truncate">Global E-Waste Footprint</p>
                    <p className="text-[10px] text-slate-400">Responsible disposal worldwide</p>
                  </div>
                </div>

                {/* Stats divider */}
                <div className="h-8 w-px bg-slate-100 shrink-0" />

                <div className="flex items-center space-x-2.5 shrink-0">
                  {/* India badge inline in footer */}
                  <div className="flex items-center space-x-1.5">
                    <div className="p-1 bg-emerald-50 rounded-lg">
                      <Leaf className="w-3 h-3 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">India</p>
                      <p className="text-xs font-bold text-slate-700">7T CO₂/yr</p>
                    </div>
                  </div>

                  <div className="h-8 w-px bg-slate-100" />

                  <div className="text-right">
                    <p className="text-sm font-black text-emerald-600">53.6M</p>
                    <p className="text-[10px] text-slate-400">Tonnes/yr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
