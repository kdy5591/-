
import React from 'react';
import { Project } from '../types';

interface PortfolioGridProps {
  projects: Project[];
  onProjectClick: (id: string) => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects, onProjectClick }) => {
  return (
    <section id="works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Portfolio</h2>
          <p className="text-gray-500">단순한 이미지가 아닌, 브랜드의 케이스 스터디를 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-50 mb-8 border border-black/5">
                <img 
                  src={project.imageUrls?.[0] || project.thumbnailUrl} 
                  alt={project.brandName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-2">{project.brandName}</h3>
                  <p className="text-gray-500 text-sm max-w-md">{project.description}</p>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest py-2 border-b border-black">
                  CASE STUDY
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
