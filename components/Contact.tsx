
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Start Your Journey</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
            로고가 고민이라면, 지금 이야기해보세요. <br />
            아직 구체적이지 않아도 괜찮습니다.
          </p>
          <div className="inline-block px-4 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/10">
            평균 24시간 이내 답변 드립니다
          </div>
        </div>

        {submitted ? (
          <div className="bg-white/5 border border-white/10 p-12 rounded-3xl text-center">
             <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
             </div>
             <h3 className="text-2xl font-serif mb-2">감사합니다!</h3>
             <p className="text-white/60">문의가 성공적으로 전달되었습니다. 곧 연락드리겠습니다.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">이름</label>
                <input required type="text" placeholder="성함 또는 기업명" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-white focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">연락처 / 이메일</label>
                <input required type="text" placeholder="연락받으실 정보를 입력해 주세요" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-white focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">브랜드 업종</label>
                <input type="text" placeholder="F&B, IT, 패션 등" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-white focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">필요한 디자인</label>
                <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-6 py-4 focus:border-white focus:outline-none transition-colors appearance-none">
                  <option>신규 로고 디자인</option>
                  <option>기존 로고 리뉴얼</option>
                  <option>브랜드 가이드라인 포함</option>
                  <option>기타 프로젝트</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">프로젝트 설명</label>
              <textarea rows={4} placeholder="브랜드의 철학이나 원하시는 느낌을 자유롭게 적어주세요." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-white focus:outline-none transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-black py-5 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all">
              무료 상담 문의하기
            </button>
            <p className="text-center text-xs text-white/30 italic">
              * 작성하신 내용은 개인정보보호 정책에 따라 문의 용도로만 사용됩니다.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
