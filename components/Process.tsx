
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Work Process</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            작업의 모든 과정을 투명하게 공유합니다. 불안 요소를 제거하고 <br />
            오직 결과물에만 집중할 수 있는 파트너십을 지향합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-7xl font-serif text-black/5 absolute -top-8 -left-4 pointer-events-none group-hover:text-black/10 transition-colors">
                0{idx + 1}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 md:p-12 bg-white rounded-3xl border border-black/5 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Revision</span>
            <p className="text-xl font-serif">기본 3회 수정 제공</p>
            <p className="text-sm text-gray-500 mt-2">디테일 보완을 위한 충분한 과정</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Duration</span>
            <p className="text-xl font-serif">평균 2주 소요</p>
            <p className="text-sm text-gray-500 mt-2">브랜드 분석부터 최종 납품까지</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Deliverables</span>
            <p className="text-xl font-serif">AI, PNG, SVG, JPG</p>
            <p className="text-sm text-gray-500 mt-2">상업적 이용 가능한 원본 파일 일체</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
