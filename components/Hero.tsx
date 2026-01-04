
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] pt-20 pb-16 md:pt-32 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4 animate-fade-in">
          Premium Logo Design & Brand Identity
        </span>
        <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8 tracking-tight max-w-5xl text-[#1A1A1A]">
          브랜드의 <span className="italic font-normal">첫인상</span> <br /> 
          <span className="text-[#0055FF]">도동로고</span>가 만드는 가치
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed">
          단순히 예쁜 그림이 아닙니다. 브랜드의 컨셉부터 실사용 환경까지 <br className="hidden md:block" />
          철저히 분석하여 지속 가능한 아이덴티티를 구축합니다.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:scale-105 transition-all shadow-xl"
          >
            프로젝트 문의하기
          </button>
          <button 
            onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black border border-black/10 px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-50 transition-all"
          >
            작업 사례 보기
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 translate-x-1/3 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;
