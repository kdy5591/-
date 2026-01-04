
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
               <img src="https://picsum.photos/seed/designer/800/1000" alt="Designer Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-black rounded-3xl z-0 flex items-center justify-center p-8">
              <span className="text-white text-center font-serif text-sm">Design with <br /> Heart & Logic</span>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">
                “로고는 예쁜 그림이 아니라,<br />브랜드의 약속입니다.”
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light italic">
                저는 화려한 유행을 쫓기보다, 시간이 흘러도 변하지 않는 브랜드의 본질을 찾는 디자인을 추구합니다.
              </p>
            </div>
            
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>
                10년 이상의 경력을 통해 대기업의 BI 리뉴얼부터 갓 시작한 1인 기업의 로고 디자인까지 
                다양한 스펙트럼의 프로젝트를 수행해 왔습니다. 제가 중요하게 생각하는 가치는 '지속 가능성'입니다.
              </p>
              <p>
                단순히 보기 좋은 디자인을 넘어, 인쇄물, 모바일 앱, 대형 간판 등 
                실제 비즈니스 환경에서 가장 완벽하게 작동하는 아이덴티티를 만듭니다.
              </p>
            </div>

            <div className="flex gap-12 pt-4">
              <div>
                <span className="text-3xl font-serif block mb-1">10+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Experience</span>
              </div>
              <div>
                <span className="text-3xl font-serif block mb-1">500+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Projects Done</span>
              </div>
              <div>
                <span className="text-3xl font-serif block mb-1">99%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
