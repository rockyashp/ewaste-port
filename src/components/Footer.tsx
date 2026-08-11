import { useState } from 'react';
import { RefreshCw, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ecoTips = [
  "Did you know? Recycling 1 million laptops saves the energy equivalent to the electricity used by more than 3,500 US homes in a year!",
  "Tip: Always back up, wipe your personal data, and remove rechargeable lithium batteries before dropping old hardware at recycling hubs.",
  "Circularity first: Before recycling a device, see if it can be repaired, upgraded, or donated. Life extension is the ultimate form of resource savings.",
  "Did you know? One metric ton of smartphones contains about 300g of gold, whereas one metric ton of typical gold ore yields only 5g!",
  "Tip: Charger cords, power adapters, and copper wires are highly valuable. Never discard them in standard household trash bins.",
  "Environmental warning: Discarding cathode-ray tube (CRT) monitors releases up to 8 pounds of lead dust directly into landfill soil profiles.",
];

interface LeafParticle {
  id: number;
  x: number;
  y: number;
  rot: number;
}

export default function Footer() {
  const [activeTip, setActiveTip] = useState<string | null>(null);
  const [particles, setParticles] = useState<LeafParticle[]>([]);
  const [clickCount, setClickCount] = useState(0);

  const triggerEasterEgg = () => {
    // 1. Pick a random eco tip
    const randomIdx = Math.floor(Math.random() * ecoTips.length);
    setActiveTip(ecoTips[randomIdx]);

    // 2. Generate leaf explosion particles
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 200, // horizontal drift
      y: -Math.random() * 120 - 40,   // vertical burst
      rot: Math.random() * 360,
    }));
    
    setParticles(newParticles);
    setClickCount((prev) => prev + 1);

    // Clean up particles
    setTimeout(() => {
      setParticles([]);
    }, 1800);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left copyright details */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-display font-bold text-white text-base">
            Yash Patil
          </p>
          <p className="font-sans text-xs sm:text-sm">
            © 2026 Yash Patil — E-Waste Management E-Portfolio
          </p>
          <p className="text-slate-600 font-sans text-xs font-semibold">
            B.Tech Information Technology &bull; Semester Project
          </p>
        </div>

        {/* Easter Egg Recycle Bin Trigger */}
        <div className="flex flex-col items-center space-y-3 relative shrink-0">
          <div className="relative">
            {/* Particle Emitters container */}
            <AnimatePresence>
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 1, scale: 0.8, x: 0, y: 0, rotate: 0 }}
                  animate={{
                    opacity: 0,
                    scale: 0.4,
                    x: p.x,
                    y: p.y,
                    rotate: p.rot,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4, ease: 'easeOut' }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none"
                >
                  <Leaf className="w-5 h-5 fill-emerald-500/20" />
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={triggerEasterEgg}
              className="p-4 bg-emerald-950 text-emerald-400 rounded-2xl hover:bg-emerald-900 hover:text-emerald-300 transition-all border border-emerald-800 cursor-pointer shadow-md focus:outline-none flex items-center justify-center"
              aria-label="Sustainability Easter Egg"
            >
              <RefreshCw className={`w-5 h-5 ${clickCount > 0 ? 'animate-[spin_1s_ease-in-out]' : ''}`} />
            </motion.button>
          </div>
          <span className="text-[10px] sm:text-xs font-sans text-slate-500 uppercase tracking-widest font-semibold">
            Click to Recycle
          </span>
        </div>
      </div>

      {/* Slide-in Eco Tip notification popup */}
      <AnimatePresence>
        {activeTip && (
          <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-50">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="bg-white border border-emerald-100 p-5 rounded-2xl shadow-xl flex items-start space-x-3.5"
            >
              <div className="p-2 bg-emerald-50 rounded-xl text-primary mt-0.5 shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-grow pr-4">
                <h4 className="font-display font-extrabold text-charcoal text-xs sm:text-sm">
                  Yash's Sustainability Tracker ☘
                </h4>
                <p className="text-slate-600 font-sans text-xs leading-relaxed">
                  {activeTip}
                </p>
              </div>
              <button
                onClick={() => setActiveTip(null)}
                className="text-slate-400 hover:text-charcoal text-xs font-bold border border-slate-200 hover:bg-slate-50 px-2 py-1 rounded-lg shrink-0 cursor-pointer focus:outline-none"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
