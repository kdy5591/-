
import React from 'react';

interface NavbarProps {
  onAdminClick: () => void;
  onHomeClick: () => void;
  onNavClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminClick, onHomeClick, onNavClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-morphism border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
            <span className="text-white font-serif text-lg">D</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-[#0055FF]">도동로고</span>
        </button>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => onNavClick('works')} className="hover:text-gray-500 transition-colors uppercase">WORKS</button>
          <button onClick={() => onNavClick('process')} className="hover:text-gray-500 transition-colors uppercase">PROCESS</button>
          <button onClick={() => onNavClick('about')} className="hover:text-gray-500 transition-colors uppercase">ABOUT</button>
          <button onClick={() => onNavClick('contact')} className="hover:text-gray-500 transition-colors uppercase">CONTACT</button>
          <button 
            onClick={onAdminClick}
            className="ml-4 px-4 py-2 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all text-xs font-bold"
          >
            ADMIN
          </button>
        </div>

        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
