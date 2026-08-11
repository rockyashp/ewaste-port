import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Leaf, ShieldAlert, Coins, RefreshCw, Cpu } from 'lucide-react';


const reasons = [
  {
    icon: Leaf,
    title: 'Environmental Impact',
    desc: 'Improper disposal allows heavy metals (lead, mercury, cadmium) and chemical flame retardants to seep into soils, contaminate regional water tables, and release toxic air emissions when burned.',
    bgColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    hoverGlow: 'hover:shadow-emerald-100',
  },
  {
    icon: ShieldAlert,
    title: 'Human Health',
    desc: 'Informal electronic recycling exposing workers to hazardous mercury and lead dust can trigger severe nervous system damage, respiratory issues, and chemical poisoning.',
    bgColor: 'bg-rose-50 text-rose-700 border-rose-100',
    hoverGlow: 'hover:shadow-rose-100',
  },
  {
    icon: Coins,
    title: 'Resource Recovery',
    desc: 'Electronics are incredibly dense deposits of precious metals. Ton-for-ton, there is up to 100 times more gold in a pile of mobile circuit boards than in high-quality raw gold ore mined from the earth.',
    bgColor: 'bg-amber-50 text-amber-700 border-amber-100',
    hoverGlow: 'hover:shadow-amber-100',
  },
  {
    icon: RefreshCw,
    title: 'Circular Economy',
    desc: 'Extending product lifespans, creating modular designs, and establishing collection networks transitions us away from a wasteful linear cycle into a resource-conserving loop.',
    bgColor: 'bg-sky-50 text-sky-700 border-sky-100',
    hoverGlow: 'hover:shadow-sky-100',
  },
  {
    icon: Cpu,
    title: 'Sustainable Technology',
    desc: 'Designing electronics for ease of repair, standardized component replacement, and safe material extraction is critical to support the explosive growth of global computation.',
    bgColor: 'bg-teal-50 text-teal-700 border-teal-100',
    hoverGlow: 'hover:shadow-teal-100',
  },
];

export default function WhyEWaste() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 },
    },
  };


  return (
    <section id="why-e-waste" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative vector shape */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-sky-50/40 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal">
            Why E-Waste Matters
          </h2>
          <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            Exploring the critical environmental, human, and economic implications of global electronic waste.
          </p>
        </div>

        {/* 5-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            // Center the 4th and 5th items on large screens (3 cols layout)
            const isLastTwo = index >= 3;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.015 }}
                className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ${item.hoverGlow} flex flex-col space-y-4 ${
                  isLastTwo ? 'lg:col-span-1 lg:max-w-md mx-auto w-full' : ''
                }`}
              >
                <div className={`p-4 rounded-2xl w-fit ${item.bgColor}`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-display font-extrabold text-charcoal">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
