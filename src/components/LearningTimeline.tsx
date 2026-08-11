import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { BookOpen, Flame, Calculator, MessageSquare } from 'lucide-react';


const milestones = [
  {
    date: 'Week 1 — July 2026',
    topic: 'Introduction to E-Waste',
    desc: 'Kicked off the subject with a foundational lecture on what electronic waste is — its definition, global scale, and why it matters. We explored the types of e-waste, hazardous materials inside everyday devices, and the environmental and health consequences of improper disposal. This session set the tone for everything that followed.',
    assignment: 'Understanding E-Waste Basics',
    icon: BookOpen,
    color: 'text-sky-600 bg-sky-50 border-sky-200',
  },
  {
    date: 'Week 1 — Activity',
    topic: 'Pledge for a Sustainable Future',
    desc: 'As our first hands-on activity, we took a personal pledge committing to responsible electronic consumption and disposal habits. This was more than symbolic — it helped us reflect on our own digital footprint and how individual choices collectively shape environmental outcomes. I submitted a signed pledge as proof of participation.',
    assignment: 'Pledge Submission (Assignment 01)',
    icon: Flame,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
  },
  {
    date: 'Week 1 — Class Debate',
    topic: 'Third-Party Recyclers vs. Government Recycling',
    desc: 'A spirited in-class debate on who should manage e-waste recycling — private third-party companies driven by efficiency and innovation, or government bodies with regulatory authority and public accountability. Arguments flew both ways: third-party players can scale faster, but government oversight ensures compliance and equity. A genuinely fun session that showed how policy and engineering intersect.',
    assignment: 'Classroom Debate Participation',
    icon: MessageSquare,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    date: 'Week 2 — Activity',
    topic: 'Carbon Footprint Calculation',
    desc: 'Used an online carbon footprint calculator to measure my household\'s annual CO₂ emissions. The result: 13 tonnes/year — nearly double the Indian national average of 7 tonnes. Food turned out to be the biggest contributor. This data-driven exercise made abstract sustainability concepts very concrete and personal.',
    assignment: 'Carbon Footprint Report (Assignment 02)',
    icon: Calculator,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  
];


export default function LearningTimeline() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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


  return (
    <section id="learning" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative side trace */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-slate-50/50 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal">
            My Learning Journey
          </h2>
          <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            A week-by-week record of lectures, activities, and debates from the E-Waste Management subject.
          </p>
        </div>

        {/* Timeline body */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative pl-6 sm:pl-8 border-l-2 border-emerald-100 space-y-12 ml-4 sm:ml-6"
        >
          {milestones.map((item, index) => {
            const MilestoneIcon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Connecting bullet */}
                <div
                  className={`absolute -left-[39px] sm:-left-[47px] top-1.5 p-2 rounded-full border-2 bg-white transition-all duration-300 group-hover:scale-110 shadow-sm ${item.color}`}
                >
                  <MilestoneIcon className="w-4 h-4 sm:w-5 h-5" />
                </div>

                {/* Milestone details box */}
                <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 hover:border-emerald-100/50 hover:bg-white hover:shadow-md transition-all duration-300 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-xs font-bold text-slate-400 font-sans uppercase tracking-wider">
                      {item.date}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-white text-slate-500 border border-slate-200 truncate max-w-xs self-start sm:self-center">
                      🔗 {item.assignment}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-base sm:text-lg text-charcoal">
                    {item.topic}
                  </h3>

                  <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
