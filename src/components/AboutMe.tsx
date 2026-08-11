import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { GraduationCap, Code, Camera, Video, Leaf } from 'lucide-react';


const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'B.Tech student in Information Technology at VIT. Building a strong base in software development, machine learning, and systems design.',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    icon: Code,
    title: 'Technology',
    desc: 'Love building things — from web apps to small scripts. Interested in clean code, UI/UX, and figuring out how stuff works under the hood.',
    color: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Enjoy going out with a camera and shooting street, portrait, and landscape shots. Photography is how I slow down and notice things.',
    color: 'bg-teal-50 text-teal-700 border-teal-100',
  },
  {
    icon: Video,
    title: 'Videography',
    desc: 'Editing and making short videos — whether it\'s a vlog, a reel, or a time-lapse. I like the storytelling side of it as much as the technical.',
    color: 'bg-emerald-50 text-emerald-800 border-emerald-100',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Taking this e-waste subject seriously — small habits like repairing devices, recycling properly, and being mindful of what I buy and throw away.',
    color: 'bg-green-50 text-green-700 border-green-100',
  },
];

export default function AboutMe() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };


  return (
    <section id="about-me" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-50/50 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal">
            About The Creator
          </h2>
          <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            Connecting a B.Tech IT background with a commitment to ecological conservation.
          </p>
        </div>

        {/* Narrative layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Morphing Image Shape */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-primary to-accent-teal p-1.5 shadow-xl"
            >
              <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center p-1">
                {/* 
                  HOW TO REPLACE WITH YOUR PHOTO:
                  1. Copy your photo (e.g., photo.jpg, profile.png) to the folder: public/assets/profile/
                  2. Update the src attribute below to reference your filename, e.g., "/assets/profile/photo.jpg"
                */}
                <img
                  src="/assets/profile/yash.jpg"
                  alt="Yash Patil Avatar"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-display font-bold text-charcoal">
              Hi, I'm Yash Patil
            </h3>
            <p className="text-slate-600 leading-relaxed font-sans text-base">
              I am a B.Tech Information Technology student with a strong interest in software systems, photography, videography, and creative digital media.
            </p>
            <p className="text-slate-600 leading-relaxed font-sans text-base">
              As an Information Technology engineer, I believe the most impactful software I will ever write is the software that helps manage, trace, and recover the electronic devices we build.
            </p>
            <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/50 flex items-start space-x-3">
              <Leaf className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-emerald-800 text-sm font-semibold leading-relaxed">
                This portfolio documents my academic journey through E-Waste &amp; Environmental Management — a subject that sits at the intersection of engineering responsibility and planetary health.
              </span>
            </div>
          </div>
        </div>

        {/* Core pillar cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all"
              >
                <div className={`p-3 rounded-xl border ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-charcoal text-base">
                  {card.title}
                </h4>
                <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
