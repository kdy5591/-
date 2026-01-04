
import React from 'react';

interface FooterProps {
  onNavClick?: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const handleLink = (id: string) => {
    if (onNavClick) {
      onNavClick(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 px-6 bg-[#FAFAFA] border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-6 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white font-serif text-lg">D</span>
            </div>
            <span className="text-lg font-bold tracking-tight uppercase text-[#0055FF]">도동로고</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            브랜드의 시작부터 성장의 순간까지, 당신의 정체성을 가장 완벽하게 담아내는 로고 디자인 파트너입니다.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <span className="text-[10px] font-bold">IG</span>
            </a>
            <a href="#" className="w-8 h-8 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <span className="text-[10px] font-bold">BE</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><button onClick={() => handleLink('works')} className="hover:text-black transition-colors">Portfolio</button></li>
              <li><button onClick={() => handleLink('process')} className="hover:text-black transition-colors">Our Process</button></li>
              <li><button onClick={() => handleLink('about')} className="hover:text-black transition-colors">About Us</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Policies</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">Contract</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Copyright Info</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
             <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Contact</h4>
             <ul className="space-y-2 text-sm text-gray-500">
               <li>contact@dodonglogo.com</li>
               <li>Kakao: dodong_logo</li>
               <li className="pt-4 text-xs font-bold text-black">MON - FRI | 10:00 - 18:00</li>
             </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        <span>&copy; 2024 도동로고. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED BY 도동로고</span>
      </div>
    </footer>
  );
};

export default Footer;
