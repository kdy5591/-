
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavigateHome: () => void;
  onScrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-ivory/95 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Left: Brand Logo */}
        <button onClick={onNavigateHome} className="text-2xl font-serif tracking-tight text-olive font-bold hover:opacity-70 transition-opacity">
          뚬뚜미
        </button>

        {/* Center: Navigation (Hidden on mobile) */}
        <div className="flex space-x-12 items-center hidden lg:flex text-[18px] tracking-[0.2em] uppercase font-medium text-charcoal/90">
          <button onClick={() => onScrollToSection('sumi')} className="hover:text-olive transition-colors relative group">
            이수미
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-olive transition-all group-hover:w-full"></span>
          </button>
          <button onClick={() => onScrollToSection('ttumttumi')} className="hover:text-olive transition-colors relative group">
            뚬뚜미
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-olive transition-all group-hover:w-full"></span>
          </button>
          <button onClick={() => onScrollToSection('mindungi')} className="hover:text-olive transition-colors relative group">
            민둥이
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-olive transition-all group-hover:w-full"></span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center">
          <a 
            href="https://www.instagram.com/leessumi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center space-x-2.5 text-[12px] tracking-[0.2em] uppercase font-medium text-charcoal/80 hover:text-olive transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
