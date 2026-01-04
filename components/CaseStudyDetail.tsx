
import React, { useEffect } from 'react';
import { Project } from '../types';

interface CaseStudyDetailProps {
  project: Project;
  onClose: () => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in slide-in-from-bottom duration-500">
      <nav className="sticky top-0 w-full h-20 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 z-10 flex items-center justify-between">
        <span className="text-sm font-bold tracking-widest uppercase">{project.brandName} / Case Study</span>
        <button 
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Main Image */}
        <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden mb-20 shadow-2xl">
          <img src={project.imageUrls?.[0] || project.thumbnailUrl} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          <div className="md:col-span-2">
            <h1 className="text-5xl md:text-7xl font-serif mb-8">{project.brandName}</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {project.background}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Problem</h4>
                <p className="text-gray-700 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Core Concept</h4>
                <p className="text-gray-700 leading-relaxed">{project.concept}</p>
              </div>
            </div>
          </div>
          <div className="space-y-8 pt-4">
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Category</h4>
              <p className="font-medium">{project.category}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {project.keywords.map(k => (
                  <span key={k} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">{k}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sketches / Process */}
        <div className="mb-32">
          <h2 className="text-3xl font-serif mb-12 text-center">Design Process & Sketches</h2>
          <div className="aspect-[16/10] bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center p-8">
            <img src={project.sketchUrl} alt="Sketch" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80" />
          </div>
          <p className="mt-8 text-center text-gray-500 text-sm max-w-xl mx-auto">
            수백 번의 핸드 스케치를 통해 브랜드 고유의 형태를 발굴합니다. 
            단순함 속에 깊은 의미를 담기 위한 핵심 과정입니다.
          </p>
        </div>

        {/* Multi-Image Display Section */}
        {project.imageUrls && project.imageUrls.length > 0 && (
          <div className="space-y-12 mb-32">
            <h2 className="text-3xl font-serif mb-12 text-center">Brand Identity in Real Life</h2>
            <div className="flex flex-col gap-12">
              {project.imageUrls.map((url, idx) => (
                <div key={idx} className="w-full bg-gray-100 rounded-3xl overflow-hidden shadow-sm">
                  <img src={url} alt={`Mockup ${idx + 1}`} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feedback */}
        <div className="bg-[#1A1A1A] text-white p-12 md:p-20 rounded-3xl text-center">
          <svg className="w-12 h-12 mx-auto mb-8 text-white/20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017C11.4647 13 11.017 12.5523 11.017 12V9C11.017 6.79086 12.8079 5 15.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C2.46472 8 2.017 8.44772 2.017 9V12C2.017 12.5523 1.56928 13 1.017 13H-0.983C-1.53528 13 -2.017 12.5523 -2.017 12V9C-2.017 6.79086 -0.22614 5 1.983 5H5.983C8.19214 5 9.983 6.79086 9.983 9V15C9.983 18.3137 7.29671 21 3.983 21H1.017Z" /></svg>
          <p className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed">
            "{project.feedback}"
          </p>
          <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Client Testimonial</p>
        </div>

        <div className="mt-20 flex justify-center">
           <button 
            onClick={onClose}
            className="px-10 py-5 bg-black text-white rounded-full font-bold hover:scale-105 transition-all shadow-xl"
           >
             다른 작품 보기
           </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
