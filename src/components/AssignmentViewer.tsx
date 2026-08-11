import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, FileText, Image as ImageIcon, Video, ExternalLink, Download, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import type { Assignment, AssignmentFile } from '../data/assignments';


interface AssignmentViewerProps {
  assignment: Assignment | null;
  onClose: () => void;
}

export default function AssignmentViewer({ assignment, onClose }: AssignmentViewerProps) {
  const [activeFileIdx, setActiveFileIdx] = useState(0);
  const [zoomScale, setZoomScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  // Reset indices on assignment change
  useEffect(() => {
    setActiveFileIdx(0);
    setZoomScale(1);
    setIsFullscreen(false);
    setActiveTabIdx(0);
  }, [assignment]);


  if (!assignment) return null;

  const activeFile: AssignmentFile | undefined = assignment.files[activeFileIdx];

  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      {/* Modal Card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-slate-100"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-primary-light text-emerald-800 border border-emerald-100">
                {assignment.category}
              </span>
              <span className="text-[10px] sm:text-xs font-sans text-slate-400">
                {assignment.date}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-lg sm:text-xl text-charcoal leading-snug">
              {assignment.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-charcoal hover:bg-slate-200/50 transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body Grid */}
        <div className="flex-grow overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Media Viewer Area (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-slate-50 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 min-h-[350px] lg:min-h-[500px]">
            {/* Attachment selector tabs if mixed files exist */}
            {assignment.files.length > 1 && (
              <div className="flex items-center space-x-2 mb-4 overflow-x-auto pb-2 border-b border-slate-200">
                {assignment.files.map((file, idx) => {
                  const isActive = idx === activeFileIdx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveFileIdx(idx);
                        setZoomScale(1);
                      }}
                      className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 border ${
                        isActive
                          ? 'bg-primary text-white border-primary shadow-xs'
                          : 'bg-white text-slate-500 border-slate-200 hover:text-slate-700'
                      }`}
                    >
                      {file.type === 'pdf' && <FileText className="w-3.5 h-3.5" />}
                      {file.type === 'image' && <ImageIcon className="w-3.5 h-3.5" />}
                      {file.type === 'video' && <Video className="w-3.5 h-3.5" />}
                      <span className="truncate max-w-[120px]">{file.name}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Active Content Viewer Box */}
            <div className="flex-grow flex items-center justify-center relative overflow-hidden bg-slate-100 rounded-2xl border border-slate-200/60 p-2 min-h-[280px]">
              {activeFile && (
                <>
                  {/* IMAGE VIEWING TYPE */}
                  {activeFile.type === 'image' && (
                    <div
                      className={`w-full h-full flex items-center justify-center transition-all ${
                        isFullscreen
                          ? 'fixed inset-0 z-50 bg-slate-900/95 p-6'
                          : 'relative'
                      }`}
                    >
                      {isFullscreen && (
                        <button
                          onClick={handleToggleFullscreen}
                          className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition cursor-pointer"
                          aria-label="Exit fullscreen"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      )}
                      
                      <div className="overflow-auto max-w-full max-h-full flex items-center justify-center">
                        <img
                          src={activeFile.url}
                          alt={activeFile.name}
                          className="max-h-[350px] lg:max-h-[420px] object-contain rounded-lg transition-transform duration-200 shadow-sm"
                          style={{
                            transform: `scale(${zoomScale})`,
                            maxWidth: isFullscreen ? '100vw' : '100%',
                            maxHeight: isFullscreen ? '90vh' : undefined,
                          }}
                        />
                      </div>

                      {/* Image toolbar controls */}
                      <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-white/90 backdrop-blur-xs px-2.5 py-1.5 rounded-xl shadow-md border border-slate-200">
                        <button
                          onClick={handleZoomOut}
                          className="p-1 hover:bg-slate-100 rounded-lg text-slate-600 transition cursor-pointer"
                          title="Zoom Out"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleZoomIn}
                          className="p-1 hover:bg-slate-100 rounded-lg text-slate-600 transition cursor-pointer"
                          title="Zoom In"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleToggleFullscreen}
                          className="p-1 hover:bg-slate-100 rounded-lg text-slate-600 transition cursor-pointer"
                          title="Fullscreen"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* VIDEO VIEWING TYPE */}
                  {activeFile.type === 'video' && (
                    <video
                      src={activeFile.url}
                      controls
                      className="w-full max-h-[350px] lg:max-h-[420px] rounded-lg shadow-sm object-contain"
                    />
                  )}

                  {/* PDF VIEWING TYPE */}
                  {activeFile.type === 'pdf' && (
                    <div className="w-full h-full flex flex-col justify-between">
                      <iframe
                        src={`${activeFile.url}#toolbar=0`}
                        title={activeFile.name}
                        className="w-full h-[320px] lg:h-[380px] rounded-xl border border-slate-200"
                      />
                      <div className="mt-2.5 flex items-center justify-between text-xs px-2">
                        <span className="text-slate-500 font-sans">Inside Sandbox Frame</span>
                        <div className="flex space-x-2">
                          <a
                            href={activeFile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-hover font-bold flex items-center space-x-1"
                          >
                            <span>Open In New Tab</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Downloader Control Bar */}
            {activeFile && (
              <div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-slate-500 font-sans font-medium text-xs sm:text-sm truncate pr-4">
                  {activeFile.name}
                </span>
                <a
                  href={activeFile.url}
                  download={activeFile.url.split('/').pop()}
                  className="px-4 py-2 bg-slate-900 text-white font-sans font-bold text-xs sm:text-sm rounded-xl hover:bg-slate-800 transition-all flex items-center space-x-2 cursor-pointer shadow-xs shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resource</span>
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Descriptions & Metadata (lg:col-span-5) */}
          <div className="lg:col-span-5 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4 flex-grow flex flex-col min-h-0">
              {assignment.tabs && assignment.tabs.length > 0 ? (
                <div className="flex border-b border-slate-100 mb-4 overflow-x-auto scrollbar-none shrink-0 gap-1">
                  {assignment.tabs.map((tab, idx) => {
                    const isActive = idx === activeTabIdx;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTabIdx(idx)}
                        className={`px-3 py-1.5 text-xs sm:text-sm font-sans font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                          isActive
                            ? 'border-primary text-primary'
                            : 'border-transparent text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {tab.title}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <h3 className="font-display font-extrabold text-base sm:text-lg text-charcoal shrink-0">
                  Overview &amp; Findings
                </h3>
              )}
              
              <div className="text-slate-600 font-sans text-sm leading-relaxed overflow-y-auto max-h-[350px] pr-2 scrollbar-none flex-grow">
                {assignment.tabs && assignment.tabs[activeTabIdx] ? (
                  <div className="space-y-5">
                    {/* Objectives Sub-block */}
                    {assignment.tabs[activeTabIdx].objective && (
                      <div className="space-y-1">
                        <h4 className="text-[11px] font-black text-primary uppercase tracking-wider">Objective</h4>
                        <p className="text-slate-700 text-xs sm:text-sm">{assignment.tabs[activeTabIdx].objective}</p>
                      </div>
                    )}
                    
                    {/* Problem Statement Sub-block */}
                    {assignment.tabs[activeTabIdx].problemStatement && (
                      <div className="space-y-1">
                        <h4 className="text-[11px] font-black text-primary uppercase tracking-wider">Problem Statement</h4>
                        <p className="text-slate-700 text-xs sm:text-sm">{assignment.tabs[activeTabIdx].problemStatement}</p>
                      </div>
                    )}

                    {/* Theory Sub-block */}
                    {assignment.tabs[activeTabIdx].theory && (
                      <div className="space-y-1">
                        <h4 className="text-[11px] font-black text-primary uppercase tracking-wider">Theory</h4>
                        <p className="text-slate-700 text-xs sm:text-sm">{assignment.tabs[activeTabIdx].theory}</p>
                      </div>
                    )}

                    {/* Engineering Concepts List Sub-block */}
                    {assignment.tabs[activeTabIdx].engineeringConcepts && (
                      <div className="space-y-2.5">
                        <h4 className="text-[11px] font-black text-primary uppercase tracking-wider">Engineering Concepts</h4>
                        <ul className="space-y-2">
                          {assignment.tabs[activeTabIdx].engineeringConcepts?.map((concept, cIdx) => (
                            <li key={cIdx} className="flex items-start space-x-2">
                              <span className="text-primary font-black shrink-0 text-xs mt-0.5">❯</span>
                              <span className="text-slate-700 text-xs sm:text-sm leading-relaxed">{concept}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* General Text block (Methodology, Observations, Outcomes) */}
                    {!assignment.tabs[activeTabIdx].objective && assignment.tabs[activeTabIdx].content && (
                      <p className="text-slate-700 text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                        {assignment.tabs[activeTabIdx].content}
                      </p>
                    )}
                  </div>
                ) : (
                  <p>{assignment.fullContent || assignment.description}</p>
                )}
              </div>
            </div>

            {/* Sidebar attributes metadata */}
            <div className="pt-6 border-t border-slate-100 space-y-3 shrink-0">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400 font-sans">Created By</span>
                <span className="font-semibold text-charcoal font-sans">Yash Patil</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400 font-sans">Subject Track</span>
                <span className="font-semibold text-primary font-sans">E-Waste Management</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400 font-sans">B.Tech Specialization</span>
                <span className="font-semibold text-charcoal font-sans">Information Technology</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400 font-sans">Attached Files Count</span>
                <span className="font-semibold text-accent-sky font-sans">{assignment.files.length} resource(s)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
