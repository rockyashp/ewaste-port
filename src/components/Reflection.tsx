import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';


export default function Reflection() {
  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Large Quote Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-4 bg-emerald-50 rounded-full w-fit mx-auto border border-emerald-100/50"
        >
          <Quote className="w-8 h-8 text-primary fill-primary/10" />
        </motion.div>

        {/* Large Typography Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-charcoal leading-tight max-w-3xl mx-auto"
        >
          "Technology shapes our future. <br />
          How responsibly we manage it shapes the planet."
        </motion.h2>

        <div className="h-1 w-16 bg-primary mx-auto rounded-full" />

        {/* Supporting Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-6 text-slate-600 font-sans text-sm sm:text-base leading-relaxed text-left sm:text-center"
        >
          <p>
            This semester has taught me that the lifecycle of code is deeply entangled with physical, chemical,
            and electrical hardware realities. Creating software that requires newer, faster hardware is just as
            impactful as disposing of devices improperly.
          </p>
          <p>
            By designing software architectures to run efficiently on older hardware models and using server hosts powered
            by green energy, we can significantly extend device lifetimes. True engineering maturity lies not in using the
            most computing power, but in achieving the highest utility with minimal ecological footprint.
          </p>
        </motion.div>

        {/* Final CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4"
        >
          <button
            onClick={handleScrollToWork}
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover font-sans font-bold text-sm sm:text-base group cursor-pointer"
          >
            <span>Review my semester accomplishments</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
