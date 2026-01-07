
import React, { ReactNode } from 'react';

interface FooterProps {
  onAdminClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-charcoal text-white pt-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-serif mb-10 tracking-tighter text-ivory">뚬뚜미</h2>
            <p className="text-white/40 max-w-sm mb-8 leading-loose text-sm font-light tracking-wide">
              우리는 보이지 않는 디테일에서 가치를 찾습니다. 
              뚬뚜미가 제안하는 감각적인 라이프스타일로 
              당신의 일상을 하나의 예술로 만드세요.
            </p>
            
            <div className="space-y-2 mb-12">
              <div className="flex items-center text-[11px] tracking-[0.2em] text-white/50 uppercase font-light">
                <span className="w-8 opacity-40">Add.</span>
                <span className="text-white/70">경상북도 구미역</span>
              </div>
              <div className="flex items-center text-[11px] tracking-[0.2em] text-white/50 uppercase font-light">
                <span className="w-8 opacity-40">Tel.</span>
                <span className="text-white/70 underline underline-offset-4 decoration-white/10">010-2408-2070</span>
              </div>
            </div>

            <div className="flex space-x-10 text-[10px] tracking-[0.3em] uppercase text-white/50">
              <a href="https://www.instagram.com/leessumi/" target="_blank" rel="noopener noreferrer" className="hover:text-olive transition-colors">Instagram</a>
              <a href="#" className="hover:text-olive transition-colors">Editorial</a>
              <a href="#" className="hover:text-olive transition-colors">Archive</a>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.4em] uppercase mb-10 text-white/60">Services</h3>
            <ul className="space-y-5 text-white/30 text-[11px] tracking-[0.2em] uppercase font-light">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white transition-colors">Our Story</button></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.4em] uppercase mb-10 text-white/60">Journal</h3>
            <p className="text-white/30 text-[10px] mb-8 leading-relaxed tracking-wider font-light">
              새로운 영감과 소식을 가장 먼저 받아보세요.
            </p>
            <div className="flex border-b border-white/10 pb-3 group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none text-[10px] tracking-[0.2em] w-full placeholder:text-white/10 focus:placeholder:text-white/30 transition-all text-white"
              />
              <button className="text-[10px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-12 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] uppercase text-white/20">
          <p>&copy; 2024 TTUMTTUMI STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Admin Quick Banner */}
      <button 
        onClick={onAdminClick}
        className="w-full bg-black/20 hover:bg-olive/20 transition-all duration-500 py-3 flex justify-center items-center group border-t border-white/5"
      >
        <div className="flex items-center space-x-3 opacity-30 group-hover:opacity-100 transition-opacity">
          <span className="w-1.5 h-1.5 bg-olive rounded-full animate-pulse"></span>
          <span className="text-[10px] tracking-[0.5em] uppercase text-white font-light">
            Admin Management Console — Access Editor
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </button>
    </footer>
  );
};
