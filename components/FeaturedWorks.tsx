
import React from 'react';
import { Project } from '../types';

interface FeaturedWorksProps {
  projects: Project[];
  onProjectClick: (id: string) => void;
}

const FeaturedWorks: React.FC<FeaturedWorksProps> = ({ projects, onProjectClick }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Featured Works</h2>
            <p className="text-gray-500">로고 ‘많이’ 말고 ‘강한 것’ 하나로 증명합니다.</p>
          </div>
          <p className="hidden md:block text-sm text-gray-400 font-medium">Scroll to explore Case Studies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.slice(0, 3).map((project) => (
            <div 
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-2xl shadow-sm">
                <img 
                  src={project.thumbnailUrl} 
                  alt={project.brandName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                  <p className="text-sm font-semibold tracking-widest uppercase mb-2">Before & After</p>
                  <p className="text-lg leading-snug">{project.concept}</p>
                </div>
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-serif mb-2">{project.brandName}</h3>
                <div className="flex gap-2">
                  {project.keywords.map(kw => (
                    <span key={kw} className="text-[10px] px-2 py-1 bg-gray-100 rounded-full font-bold uppercase text-gray-500">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
