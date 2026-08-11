import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, RotateCw, Trash2, ShieldAlert, Coins, Factory, Truck, Award } from 'lucide-react';

// Custom Count-Up component using IntersectionObserver
function CountUp({ value, duration = 1500, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * value));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
}

const timelineNodes = [
  {
    icon: Smartphone,
    label: 'Device Purchase',
    color: 'border-sky-300 text-sky-600 bg-sky-50',
    title: 'Manufacturing & Consumption',
    desc: 'High demand drives mining of scarce metals and production of smartphones, laptops, and accessories.',
  },
  {
    icon: Factory,
    label: 'Daily Usage',
    color: 'border-emerald-300 text-emerald-600 bg-emerald-50',
    title: 'Resource Consumption',
    desc: 'Constant electrical powering of devices during their active utility life.',
  },
  {
    icon: ShieldAlert,
    label: 'Obsolescence',
    color: 'border-yellow-300 text-yellow-600 bg-yellow-50',
    title: 'Shortened Lifecycles',
    desc: 'Due to software updates or marketing cycles, working devices are labeled obsolete and replaced.',
  },
  {
    icon: Trash2,
    label: 'E-Waste Stream',
    color: 'border-rose-300 text-rose-600 bg-rose-50',
    title: 'Improper Disposal',
    desc: 'Electronics are thrown in standard trash bins, finding their way to toxic municipal landfills.',
  },
  {
    icon: Truck,
    label: 'Collection',
    color: 'border-teal-300 text-teal-600 bg-teal-50',
    title: 'Segregation & Transit',
    desc: 'Responsible drop-offs channel materials to authorized processing facilities.',
  },
  {
    icon: RotateCw,
    label: 'Recycling',
    color: 'border-emerald-400 text-emerald-700 bg-emerald-50',
    title: 'Mechanical Shredding',
    desc: 'Physical sorting of casings, glass screens, battery cells, and silicon boards.',
  },
  {
    icon: Coins,
    label: 'Recovery',
    color: 'border-amber-400 text-amber-700 bg-amber-50',
    title: 'Material Extraction',
    desc: 'Valuable elements like copper, gold, and silver are extracted and refined for reuse.',
  },
  {
    icon: Award,
    label: 'Sustainable Loop',
    color: 'border-green-400 text-green-700 bg-green-50',
    title: 'Circular Ecosystem',
    desc: 'Recovered materials flow back into production, minimizing the need for mining.',
  },
];

export default function AboutEWaste() {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <section id="e-waste" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute -left-20 top-1/4 w-80 h-80 bg-emerald-100/40 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal">
            Understanding E-Waste
          </h2>
          <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            What is e-waste and why does managing it shape the future of our digital world?
          </p>
        </div>

        {/* Introduction text grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-2xl font-display font-bold text-charcoal">What is E-Waste?</h3>
            <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
              <strong>Electronic waste (E-Waste)</strong> refers to discarded electrical or electronic
              devices. It encompasses everything from smartphones, tablets, and laptops to televisions,
              refrigerators, and household cables.
            </p>
            <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
              Because modern devices are dense, complex mixtures of glass, plastics, and diverse metals,
              they require specialized recycling pathways. If discarded in standard municipal landfills,
              they present critical environmental threats.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-2xl font-display font-bold text-charcoal">Why is it Increasing?</h3>
            <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
              Rapid technological development, frequent upgrades, software incompatibility, and built-in
              obsolescence have drastically shortened device lifespans.
            </p>
            <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
              Consumers replace cellphones every 2-3 years, while laptops are discarded in under 5. This
              aggressive replacement speed has made e-waste the fastest-growing solid waste stream in the world.
            </p>
          </div>
        </div>

        {/* Interactive process roadmap */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100 mb-16">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-charcoal text-center mb-10">
            The Lifecycle Pathway: From Mine to Mindful Circularity
          </h3>

          {/* Connected Flow Chart Nodes */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 relative w-full">
            {timelineNodes.map((node, index) => {
              const NodeIcon = node.icon;
              const isActive = activeNode === index;
              const isPast = activeNode > index;
              return (
                <div key={index} className="flex-1 w-full flex flex-col lg:flex-row items-center relative group">
                  {/* Interactive Card Node */}
                  <button
                    onClick={() => setActiveNode(index)}
                    className={`w-full p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center space-y-3.5 relative z-10 ${
                      isActive
                        ? 'bg-white border-primary shadow-md ring-4 ring-emerald-500/10 scale-105'
                        : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-xs shadow-2xs'
                    }`}
                  >
                    {/* Node Icon */}
                    <div className={`p-2.5 rounded-xl border transition-all ${
                      isActive 
                        ? node.color 
                        : 'bg-slate-50 text-slate-400 border-slate-100'
                    }`}>
                      <NodeIcon className="w-5 h-5" />
                    </div>

                    {/* Step label */}
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                        Step 0{index + 1}
                      </span>
                      <span className={`font-display text-xs font-bold block whitespace-nowrap ${
                        isActive ? 'text-primary' : 'text-slate-600'
                      }`}>
                        {node.label}
                      </span>
                    </div>
                  </button>

                  {/* Horizontal Connection line (Desktop) */}
                  {index < timelineNodes.length - 1 && (
                    <div className="hidden lg:block absolute left-[100%] top-1/2 -translate-y-1/2 w-6 h-[2px] bg-slate-200 z-0">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: isPast ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-slate-300 rotate-45 transition-colors ${
                        isPast ? 'border-primary' : 'border-slate-300'
                      }`} />
                    </div>
                  )}

                  {/* Vertical Connection line (Mobile) */}
                  {index < timelineNodes.length - 1 && (
                    <div className="lg:hidden h-6 w-[2px] bg-slate-200 my-1 mx-auto relative z-0">
                      <motion.div 
                        className="w-full bg-primary"
                        initial={{ height: 0 }}
                        animate={{ height: isPast ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-slate-300 rotate-45 transition-colors ${
                        isPast ? 'border-primary' : 'border-slate-300'
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active node detail description card */}
          <div className="bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-2 flex justify-center">
                  <div className={`p-5 rounded-2xl border ${timelineNodes[activeNode].color}`}>
                    {(() => {
                      const ActiveIcon = timelineNodes[activeNode].icon;
                      return <ActiveIcon className="w-10 h-10" />;
                    })()}
                  </div>
                </div>
                <div className="md:col-span-10 text-center md:text-left space-y-2">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">
                    Step 0{activeNode + 1}
                  </span>
                  <h4 className="text-xl font-display font-extrabold text-charcoal">
                    {timelineNodes[activeNode].title}
                  </h4>
                  <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                    {timelineNodes[activeNode].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll-triggered counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-display font-black text-emerald-600">
              <CountUp value={62} suffix="M" />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Annual Waste</p>
            <p className="text-slate-600 font-sans text-xs sm:text-sm">Metric tons of global e-waste generated yearly.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-display font-black text-sky-600">
              <CountUp value={22} suffix="%" />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recycling Rate</p>
            <p className="text-slate-600 font-sans text-xs sm:text-sm">Documented collection and recycling rate globally.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-display font-black text-teal-600">
              <CountUp value={62} suffix="B+" />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Discarded Value</p>
            <p className="text-slate-600 font-sans text-xs sm:text-sm">US Dollars of raw materials dumped in trash yearly.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-display font-black text-emerald-700">
              <CountUp value={80} suffix="%" />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mfg Carbon cost</p>
            <p className="text-slate-600 font-sans text-xs sm:text-sm">Device lifetime carbon footprint created during production.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
