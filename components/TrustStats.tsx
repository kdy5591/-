
import React from 'react';
import { STATS } from '../constants';

const TrustStats: React.FC = () => {
  return (
    <section className="py-20 px-6 border-y border-black/5 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start">
              <span className="text-4xl md:text-6xl font-serif mb-2">{stat.value}</span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl font-serif mb-4">“혼자 하지만, <br className="md:hidden" />누구보다 견고하게 일합니다.”</h3>
            <p className="text-gray-500 text-sm leading-relaxed italic">
              "로고 디자인뿐만 아니라 브랜드가 실제로 사용되는 모든 접점을 고민합니다. 
              수많은 대기업 프로젝트부터 스타트업의 탄생까지 함께했습니다."
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple Tool Icons (AI, Figma, etc. - using text/shapes for demo) */}
             <div className="flex flex-col items-center gap-2">
               <div className="w-12 h-12 bg-[#FF9A00] rounded-lg flex items-center justify-center font-bold text-white text-xl">Ai</div>
               <span className="text-[10px] font-bold uppercase tracking-widest">Illustrator</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <div className="w-12 h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center font-bold text-white text-xl italic">F</div>
               <span className="text-[10px] font-bold uppercase tracking-widest">Figma</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <div className="w-12 h-12 bg-[#31A8FF] rounded-lg flex items-center justify-center font-bold text-white text-xl">Ps</div>
               <span className="text-[10px] font-bold uppercase tracking-widest">Photoshop</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <div className="w-12 h-12 bg-[#000] rounded-lg flex items-center justify-center font-bold text-white text-xl">Id</div>
               <span className="text-[10px] font-bold uppercase tracking-widest">Indesign</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
