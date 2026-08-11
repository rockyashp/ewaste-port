import { useState, useMemo } from 'react';
import { Search, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { assignments } from '../data/assignments';
import type { Assignment } from '../data/assignments';
import AssignmentCard from './AssignmentCard';
import AssignmentViewer from './AssignmentViewer';

export default function AssignmentGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  // Search logic
  const filteredAssignments = useMemo(() => {
    return assignments.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.fullContent && item.fullContent.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  }, [searchTerm]);

  // Slicing logic for "View More" functionality
  const displayedAssignments = useMemo(() => {
    if (isExpanded || searchTerm.trim() !== '') return filteredAssignments;
    return filteredAssignments.slice(0, 3);
  }, [filteredAssignments, isExpanded, searchTerm]);

  return (
    <section id="work" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute right-10 top-10 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal">
            Assignments
          </h2>
          <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            Browse through my digital archive of academic assignments, laboratory experiments, term projects, and visual activities.
          </p>
        </div>

        {/* Search controls panel */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs mb-12 flex items-center justify-between">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search my work..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl font-sans text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-charcoal"
            />
          </div>
          
          <div className="hidden sm:flex items-center space-x-2 text-xs font-semibold text-slate-400">
            <span>Showing {displayedAssignments.length} of {filteredAssignments.length} entries</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedAssignments.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <AssignmentCard
                  assignment={item}
                  onOpen={(item) => setSelectedAssignment(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Expander Button */}
        {searchTerm.trim() === '' && filteredAssignments.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3.5 bg-primary text-white font-sans font-bold text-sm sm:text-base rounded-xl shadow-md hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all cursor-pointer text-center"
            >
              {isExpanded ? 'Show Less' : 'View More Assignments'}
            </button>
          </div>
        )}

        {/* Empty state details */}
        {filteredAssignments.length === 0 && (
          <div className="bg-white p-12 rounded-3xl border border-slate-100 text-center space-y-4 max-w-md mx-auto">
            <div className="p-3 bg-slate-100 rounded-full w-fit mx-auto text-slate-400">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-charcoal text-base">No Assignments Found</h3>
            <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed">
              We couldn't find any assignments matching "{searchTerm}". Try checking spelling or revising your query.
            </p>
          </div>
        )}

        {/* Global Dialog assignment viewer */}
        <AnimatePresence>
          {selectedAssignment && (
            <AssignmentViewer
              assignment={selectedAssignment}
              onClose={() => setSelectedAssignment(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
