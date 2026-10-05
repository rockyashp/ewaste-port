import { FileText, Image as ImageIcon, Video, Layers, Calendar, ArrowRight, Globe, ExternalLink } from 'lucide-react';
import type { Assignment } from '../data/assignments';


interface AssignmentCardProps {
  assignment: Assignment;
  onOpen: (assignment: Assignment) => void;
}

export default function AssignmentCard({ assignment, onOpen }: AssignmentCardProps) {
  // Helper to render type icons
  const renderTypeIcon = () => {
    switch (assignment.type) {
      case 'pdf':
        return <FileText className="w-4 h-4 text-rose-500" />;
      case 'image':
        return <ImageIcon className="w-4 h-4 text-sky-500" />;
      case 'video':
        return <Video className="w-4 h-4 text-emerald-500" />;
      case 'mixed':
        return <Layers className="w-4 h-4 text-amber-500" />;
      case 'link':
        return <Globe className="w-4 h-4 text-emerald-500" />;
      default:
        return null;
    }
  };

  // Helper to render type text label
  const renderTypeText = () => {
    switch (assignment.type) {
      case 'pdf':
        return 'PDF Report';
      case 'image':
        return 'Teardown / Visual';
      case 'video':
        return 'Video Walkthrough';
      case 'mixed':
        return 'Multi-file Archive';
      case 'link':
        return 'External Platform';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300">
      {/* Thumbnail Section */}
      <div className="relative aspect-video bg-slate-50 overflow-hidden border-b border-slate-100">
        <img
          src={assignment.thumbnail}
          alt={assignment.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Category Badge overlay */}
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-charcoal border border-slate-200 shadow-xs">
            {assignment.category}
          </span>
        </div>

        {/* File Type Badge overlay */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm shadow-xs border border-slate-100">
          {renderTypeIcon()}
          <span className="text-slate-600 text-[10px] sm:text-xs">{renderTypeText()}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          {/* Submission Date */}
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-sans">
            <Calendar className="w-3.5 h-3.5" />
            <span>{assignment.date}</span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-lg text-charcoal leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {assignment.title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed line-clamp-3">
            {assignment.description}
          </p>
        </div>

        {/* Action Button Row */}
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => onOpen(assignment)}
            className="flex-grow py-3 px-4 bg-slate-50 text-slate-700 font-sans font-bold text-xs sm:text-sm rounded-xl border border-slate-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {assignment.externalUrl && (
            <a
              href={assignment.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-50 text-primary border border-emerald-200/60 rounded-xl hover:bg-primary hover:text-white transition-all shrink-0 cursor-pointer shadow-2xs"
              title="Open external platform in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
